/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2022-09-29 16:34:15
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2022-10-10 14:39:51
 */
import logo from "@/assets/images/logo.png";

const Logo = ({ isCollapse }: { isCollapse: boolean }) => {
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			{!isCollapse ? <h2 className="logo-text">React Admin</h2> : null}
		</div>
	);
};

export default Logo;
