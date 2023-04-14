/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2022-10-31 16:00:12
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2023-04-14 09:34:58
 */
import UiFieldInput from "@/components/Field/UiFieldInput";
const Menu1 = () => {
	return (
		<div className="content-box">
			<span className="text">Menu1 🍓🍇🍈🍉</span>
			<UiFieldInput
				onChange={(e: any) => {
					console.log(e?.target?.value);
				}}
			/>
		</div>
	);
};

export default Menu1;
