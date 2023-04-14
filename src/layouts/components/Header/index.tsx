/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2022-09-29 16:32:19
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2022-10-10 19:42:44
 */
import { Layout } from "antd";
import AvatarIcon from "./components/AvatarIcon";
// import CollapseIcon from "./components/CollapseIcon";
import BreadcrumbNav from "./components/BreadcrumbNav";
import AssemblySize from "./components/AssemblySize";
import Language from "./components/Language";
import Theme from "./components/Theme";
import Fullscreen from "./components/Fullscreen";
import "./index.less";

const LayoutHeader = () => {
	const { Header } = Layout;

	return (
		<Header>
			<div className="header-lf">
				{/* <CollapseIcon /> */}
				<BreadcrumbNav />
			</div>
			<div className="header-ri">
				<AssemblySize />
				<Language />
				<Theme />
				<Fullscreen />
				<span className="username">hfxiang</span>
				<AvatarIcon />
			</div>
		</Header>
	);
};

export default LayoutHeader;