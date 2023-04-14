/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2022-12-28 10:18:45
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2023-04-14 09:34:49
 */
import React from "react";
import { Input } from "antd";

type Props = {};

const UiFieldInput = (props: any) => {
	return (
		<div>
			<Input {...props} />
		</div>
	);
};

export default UiFieldInput;
