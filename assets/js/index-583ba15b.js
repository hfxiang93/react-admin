import{u as o}from"./useEcharts-4d4e5404.js";import{j as n}from"./index-2e08c262.js";var l="/Users/xhf/code-github/react-admin/src/views/echarts/waterChart/index.tsx";const x=()=>{const t=[];for(let e=0;e<=360;e++){let a=e/180*Math.PI,i=Math.sin(2*a)*Math.cos(2*a);t.push([i,e])}let r={title:{text:"Two Value-Axes in Polar"},legend:{data:["line"]},polar:{center:["50%","54%"]},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},angleAxis:{type:"value",startAngle:0},radiusAxis:{min:0},series:[{coordinateSystem:"polar",name:"line",type:"line",showSymbol:!1,data:t}],animationDuration:2e3};const[s]=o(r);return n.exports.jsxDEV("div",{ref:s,className:"card content-box"},void 0,!1,{fileName:l,lineNumber:53,columnNumber:9},void 0)};export{x as default};