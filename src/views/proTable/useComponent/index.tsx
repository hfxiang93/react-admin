/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2022-09-29 16:34:15
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2022-10-10 14:02:07
 */
import "./index.less";
import { InputRef, Space } from "antd";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import type { FormInstance } from "antd/es/form";
import React, { useContext, useEffect, useRef, useState } from "react";
const EditableContext = React.createContext<FormInstance<any> | null>(null);
interface Item {
	key: string;
	name: string;
	age: string;
	address: string;
}
interface EditableRowProps {
	index: number;
}
interface EditableCellProps {
	title: React.ReactNode;
	editable: boolean;
	children: React.ReactNode;
	dataIndex: keyof Item;
	record: Item;
	handleSave: (record: Item) => void;
}
const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
	const [form] = Form.useForm();
	return (
		<Form form={form} component={false}>
			<EditableContext.Provider value={form}>
				<tr key={index} {...props} />
			</EditableContext.Provider>
		</Form>
	);
};
const EditableCell: React.FC<EditableCellProps> = ({
	title,
	editable,
	children,
	dataIndex,
	record,
	handleSave,
	...restProps
}) => {
	const [editing, setEditing] = useState(false);
	const inputRef = useRef<InputRef>(null);
	const form = useContext(EditableContext)!;
	useEffect(() => {
		if (editing) {
			inputRef.current!.focus();
		}
	}, [editing]);
	const toggleEdit = () => {
		setEditing(!editing);
		form.setFieldsValue({ [dataIndex]: record[dataIndex] });
	};
	const save = async () => {
		try {
			const values = await form.validateFields();
			toggleEdit();
			handleSave({ ...record, ...values });
		} catch (e) {
			console.log("Save failed:", e);
		}
	};
	let childNode = children;
	if (editable) {
		childNode = editing ? (
			<Form.Item style={{ margin: 0 }} name={dataIndex} rules={[{ required: true, message: `${title} is required` }]}>
				<Input ref={inputRef} onPressEnter={save} onBlur={save} />
			</Form.Item>
		) : (
			<div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
				{children}
			</div>
		);
	}
	return <td {...restProps}>{childNode}</td>;
};
type EditbaleTableProps = Parameters<typeof Table>[0];
interface DataType {
	key: React.Key;
	name: string;
	age: string;
	address: string;
}
type ColumnTypes = Exclude<EditbaleTableProps["columns"], undefined>;

const UseComponent = () => {
	const [dataSource, setDataSource] = useState<DataType[]>([
		{
			key: "0",
			name: "Edward King 0",
			age: "32",
			address: "London, Park Lane no. 0"
		},
		{
			key: "1",
			name: "Edward King 1",
			age: "32",
			address: "London, Park Lane no. 1"
		}
	]);
	const [count, setCount] = useState(2);
	const handleDelete = (key: React.Key) => {
		const newData = dataSource.filter(item => item.key !== key);
		setDataSource(newData);
	};
	const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
		{
			title: "序号",
			dataIndex: "index",
			render: (_, record, index) => `${index + 1}`
		},
		{
			title: "name",
			dataIndex: "name",
			width: "30%",
			editable: true
		},
		{
			title: "age",
			dataIndex: "age",
			editable: true
		},
		{
			title: "address",
			dataIndex: "address",
			editable: true
		},
		{
			title: "operation",
			dataIndex: "operation",
			render: (_, record: any) =>
				dataSource.length >= 1 ? (
					<>
						<Space>
							<Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
								<a>Delete</a>
							</Popconfirm>
							<a onClick={handleAdd}>Copy</a>
						</Space>
					</>
				) : null
		}
	];
	const handleAdd = () => {
		const newData: DataType = {
			key: count,
			name: `Edward King ${count}`,
			age: "32",
			address: `London, Park Lane no. ${count}`
		};
		setDataSource([...dataSource, newData]);
		setCount(count + 1);
	};
	const handleSave = (row: DataType) => {
		const newData = [...dataSource];
		const index = newData.findIndex(item => row.key === item.key);
		const item = newData[index];
		newData.splice(index, 1, {
			...item,
			...row
		});
		setDataSource(newData);
	};
	const components = {
		body: {
			row: EditableRow,
			cell: EditableCell
		}
	};

	const columns = defaultColumns.map(col => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record: DataType) => ({
				record,
				editable: col.editable,
				dataIndex: col.dataIndex,
				title: col.title,
				handleSave
			})
		};
	});
	return (
		<div>
			<Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
				Add a row
			</Button>
			<Table
				components={components}
				rowClassName={() => "editable-row"}
				bordered
				dataSource={dataSource}
				columns={columns as ColumnTypes}
			/>
		</div>
	);
};

export default UseComponent;
