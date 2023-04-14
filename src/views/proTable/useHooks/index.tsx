/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2022-09-29 16:34:15
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2022-11-09 10:44:45
 */
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useRef } from "react";
import { Table, DatePicker, Button, Space } from "antd";
import useAuthButtons from "@/hooks/useAuthButtons";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";

import "./index.less";
import { ReactI18NextChild } from "react-i18next";
import useMouse from "@/hooks/useMouse";
import useTitle from "@/hooks/useTitle";

interface ISonProps {
	title:
		| string
		| number
		| boolean
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactFragment
		| ReactPortal
		| Iterable<ReactI18NextChild>
		| null
		| undefined;
	changeName: () => void;
}
const SonHooks = ({ title, changeName }: ISonProps) => {
	const [searchParams] = useSearchParams();
	const params = useParams();
	const navigate = useNavigate();
	const buttonRef = useRef(null);
	useEffect(() => {
		console.log(searchParams.get("name"));
		console.log(params);
		console.log(buttonRef);
		changeName();
	}, [params]);
	const toHome = () => {
		navigate("/home/index", { replace: false });
	};
	return (
		<div>
			{title}
			<Button
				ref={buttonRef}
				type="primary"
				onClick={() => {
					changeName();
				}}
			>
				click
			</Button>
			<Button type="primary" onClick={toHome}>
				跳转首页
			</Button>
		</div>
	);
};

const UseHooks = () => {
	// 按钮权限
	const { BUTTONS } = useAuthButtons();
	const { RangePicker } = DatePicker;
	const [x, y] = useMouse();
	useTitle("hooks");
	useEffect(() => {
		console.log(BUTTONS);
	}, []);

	const changeName = () => {
		console.log("son", BUTTONS);
	};
	const dataSource = [
		{
			key: "1",
			name: "胡彦斌",
			age: 32,
			address: "西湖区湖底公园1号"
		},
		{
			key: "2",
			name: "胡彦祖",
			age: 42,
			address: "西湖区湖底公园1号"
		},
		{
			key: "3",
			name: "刘彦祖",
			age: 18,
			address: "西湖区湖底公园1号"
		},
		{
			key: "4",
			name: "刘彦祖",
			age: 18,
			address: "翻斗大街翻斗花园二号楼1001室"
		},
		{
			key: "5",
			name: "刘彦祖",
			age: 18,
			address: "翻斗大街翻斗花园二号楼1001室"
		}
	];

	const columns: any[] = [
		{
			title: "姓名",
			dataIndex: "name",
			key: "name",
			align: "center"
		},
		{
			title: "年龄",
			dataIndex: "age",
			key: "age",
			align: "center"
		},
		{
			title: "住址",
			dataIndex: "address",
			key: "address",
			align: "center",
			width: "50%"
		}
	];
	return (
		<>
			<div className="date">
				<span>切换国际化的时候看我 😎 ：</span>
				<RangePicker />
			</div>
			<div className="auth">
				<Space>
					{BUTTONS.add && (
						<Button
							type="primary"
							onClick={() => {
								console.log(x, y);
							}}
						>
							我是 Admin && User 能看到的按钮
						</Button>
					)}
					{BUTTONS.delete && <Button type="primary">我是 Admin 能看到的按钮</Button>}
					{BUTTONS.edit && <Button type="primary">我是 User 能看到的按钮</Button>}
				</Space>
			</div>
			<Table dataSource={dataSource} columns={columns} />
			<SonHooks title="son" changeName={changeName} />
		</>
	);
};

export default UseHooks;
