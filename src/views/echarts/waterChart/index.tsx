/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2022-09-29 16:34:15
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2022-10-10 14:38:08
 */
import "./index.less";
import { useEcharts } from "@/hooks/useEcharts";
import * as echarts from "echarts";
const WaterChart = () => {
	const data = [];
	for (let i = 0; i <= 360; i++) {
		let t = (i / 180) * Math.PI;
		let r = Math.sin(2 * t) * Math.cos(2 * t);
		data.push([r, i]);
	}
	let option: echarts.EChartsOption = {
		title: {
			text: "Two Value-Axes in Polar"
		},
		legend: {
			data: ["line"]
		},
		polar: {
			center: ["50%", "54%"]
		},
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "cross"
			}
		},
		angleAxis: {
			type: "value",
			startAngle: 0
		},
		radiusAxis: {
			min: 0
		},
		series: [
			{
				coordinateSystem: "polar",
				name: "line",
				type: "line",
				showSymbol: false,
				data: data
			}
		],
		animationDuration: 2000
	};
	const [echartsRef] = useEcharts(option);
	return <div ref={echartsRef} className="card content-box"></div>;
};

export default WaterChart;
