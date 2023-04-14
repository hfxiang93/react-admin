/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2022-11-09 10:20:22
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2022-12-14 11:32:07
 */
import React, { useEffect } from "react";

const useTitle = (title: string) => {
	useEffect(() => {
		document.title = title;
	});
	return;
};

export default useTitle;
