/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2022-11-09 09:59:52
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2022-11-09 15:22:03
 */
import React, { useEffect, useState } from "react";

const usePosition = (scrollRef: any) => {
	const [position, setPosition] = useState([0, 0]);
	useEffect(() => {
		const handleScroll = (e: Event) => {
			setPosition([scrollRef.current.scrollLeft, scrollRef.current.scrollTop]);
		};
		scrollRef.current.addEventListener("scroll", handleScroll, false);
		return () => {
			scrollRef.current.removeEventListener("scroll", handleScroll, false);
		};
	}, []);
	return position;
};
export default usePosition;
