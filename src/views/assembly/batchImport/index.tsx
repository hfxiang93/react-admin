/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2022-09-29 16:34:15
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2022-10-26 19:33:10
 */
import "./index.less";
import { read, utils, writeFileXLSX } from "xlsx";
import { useCallback, useEffect, createRef, useState } from "react";
import { Button, Table, Input, message, Space } from "antd";

const BatchImport = () => {
	useEffect(() => {});
	const [dataSource, setDataSource] = useState([]);
	const [columns, setcolumns] = useState([]);
	const [header, setHeader] = useState();
	const refs: any = createRef();
	console.log(refs);
	/**
	 * @description: 第一行作为头部
	 */
	const getHeaderRow = (sheet: any) => {
		if (!sheet || !sheet["!ref"]) return [];
		const headers: string[] = [];
		// A3:B7=>{s:{c:0, r:2}, e:{c:1, r:6}}
		const range = utils.decode_range(sheet["!ref"]);

		const R = range.s.r;
		/* start in the first row */
		for (let C = range.s.c; C <= range.e.c; ++C) {
			/* walk every column in the range */
			const cell = sheet[utils.encode_cell({ c: C, r: R })];
			/* find the cell in the first row */
			let hdr = "UNKNOWN " + C; // <-- replace with your desired default
			if (cell && cell.t) hdr = utils.format_cell(cell);
			headers.push(hdr);
		}
		return headers;
	};

	/**
	 * @description: 获得excel数据
	 */
	const getExcelData = (workbook: any) => {
		const excelData = [];
		for (const sheetName of workbook.SheetNames) {
			const worksheet = workbook.Sheets[sheetName];
			const header: string[] = getHeaderRow(worksheet);
			const results = utils.sheet_to_json(worksheet);
			excelData.push({
				header,
				results,
				meta: {
					sheetName
				}
			});
		}
		return excelData;
	};
	const readWorkbookFromLocalFile = (file: any, callback?: any) => {
		// 创建文件读取实例
		const reader = new FileReader();
		// 文件转二进制字符串
		reader.readAsBinaryString(file);
		reader.onload = (e: any) => {
			const data = e.target.result;
			const workbook = read(data, { type: "binary" });
			const result = getExcelData(workbook);
			const workSheet = workbook.Sheets[workbook.SheetNames[0]];
			const json = utils.sheet_to_json(workSheet);
			console.log(result);
			console.log(json);
			if (callback) callback(result?.[0]);
		};
	};
	// 处理数据
	const hanldeData = (result: any) => {
		const { header, results, meta: sheetName } = result;
		setDataSource(results);
		const columns = [];
		for (const title of header) {
			columns.push({ title, dataIndex: title });
		}
		setcolumns(columns as any);
		setHeader(header as any);
		// todo
	};
	const uploadFiles = (e: any) => {
		const files = e && (e.target as HTMLInputElement).files;
		const rawFile = files && files[0];
		if (!rawFile) return;
		readWorkbookFromLocalFile(rawFile, hanldeData);
	};
	// 导出excel
	const exportFiles = useCallback(() => {
		if (!dataSource.length) {
			message.warn("无数据可导出");
			return;
		}
		// const json2sheetOpts = {} as any;
		// const data = dataSource;
		// if (header) {
		// 	data.unshift(header);
		// 	json2sheetOpts.skipHeader = true;
		// }
		// json-》sheet
		const ws = utils.json_to_sheet(dataSource);
		// 创建新的工作簿
		const wb = utils.book_new();
		// 工作簿中加入sheet
		utils.book_append_sheet(wb, ws, "Data");
		// 将工作簿中的内容导出
		writeFileXLSX(wb, "sheetjs.xlsx");
	}, [dataSource]);

	return (
		<>
			<Input style={{ display: "none" }} type="file" ref={refs} onChange={uploadFiles}></Input>
			<Space>
				<Button
					type="primary"
					onClick={() => {
						refs.current.input.click();
					}}
				>
					upload
				</Button>
				<Button type="primary" onClick={exportFiles}>
					export
				</Button>
			</Space>
			<Table columns={columns} dataSource={dataSource}></Table>
			<span className="text">BatchImport 🍓🍇🍈🍉</span>
		</>
	);
};

export default BatchImport;
