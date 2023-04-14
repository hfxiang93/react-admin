/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2022-11-09 10:22:04
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2022-11-09 15:19:52
 */
import React, { useEffect, useState } from "react";

const useMouse = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	useEffect(() => {
		const handleMouse = (e: MouseEvent) => {
			setX(e.x);
			setY(e.y);
		};
		window.addEventListener("mousemove", handleMouse, false);
		return () => {
			window.removeEventListener("mousemove", handleMouse, false);
		};
	}, []);
	return [x, y];
};

export default useMouse;
