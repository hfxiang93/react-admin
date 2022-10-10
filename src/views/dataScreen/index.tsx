/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2022-09-29 16:34:15
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2022-10-10 15:10:16
 */
import { Button, Form, Input, Select, Space } from "antd";
import { getAuthorButtons } from "@/api/modules/login";
import { useSelector, useDispatch } from "@/redux";
import { setAddNumber1, setReduceNumber1, setNumber1, resetState } from "@/redux/modules/counter";

const { Option } = Select;

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 }
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 }
};
const DataScreen = () => {
	const [form] = Form.useForm();
	const onGenderChange = (value: string) => {
		switch (value) {
			case "male":
				form.setFieldsValue({ note: 1 });
				return;
			case "female":
				form.setFieldsValue({ note: 0 });
				return;
			case "other":
				form.setFieldsValue({ note: 2 });
		}
	};

	const onFinish = (values: any) => {
		console.log(values);
	};

	const onReset = () => {
		form.resetFields();
	};

	const onFill = () => {
		form.setFieldsValue({
			note: 1,
			gender: "male"
		});
	};
	const requestMenuList = async () => {
		const res = await getAuthorButtons();
		console.log(res);
	};
	const { number1, number2 } = useSelector(state => state.counter);
	const dispatch = useDispatch();

	const addNumber = () => {
		dispatch(setAddNumber1());
	};
	const reduceNumber = () => {
		dispatch(setReduceNumber1());
	};
	const numberChange = (e: any) => {
		dispatch(setNumber1(Number(e.target.value)));
	};
	const resetNumber = () => {
		dispatch(resetState());
	};
	return (
		<div className="content-box">
			<Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
				<Form.Item name="note" label="Note" rules={[{ required: true }]}>
					<Input type="number" onChange={numberChange} />
				</Form.Item>
				<Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
					<Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear>
						<Option value="male">male</Option>
						<Option value="female">female</Option>
						<Option value="other">other</Option>
					</Select>
				</Form.Item>
				<Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}>
					{({ getFieldValue }) =>
						getFieldValue("gender") === "other" ? (
							<Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
								<Input />
							</Form.Item>
						) : null
					}
				</Form.Item>
				<Form.Item {...tailLayout}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
					<Button htmlType="button" onClick={onReset}>
						Reset
					</Button>
					<Button type="link" htmlType="button" onClick={onFill}>
						Fill form
					</Button>
				</Form.Item>
			</Form>
			<Input value={number1} type="number" onChange={numberChange} />
			<Space>
				<h1>{number2}</h1>
				<Button type="primary" onClick={requestMenuList}>
					点我发起网络请求 😎
				</Button>
				<Button type="primary" onClick={addNumber}>
					加一
				</Button>
				<Button type="primary" onClick={reduceNumber}>
					减一
				</Button>
				<Button type="primary" onClick={resetNumber}>
					重置
				</Button>
			</Space>
		</div>
	);
};

export default DataScreen;
