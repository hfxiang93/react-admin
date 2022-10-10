import{r,a as v,_ as w,C as L,ak as W,h as q,z as H,c as J}from"./index-78dd279d.js";function K(e){var a=e.className,n=e.direction,t=e.index,i=e.marginDirection,s=e.children,c=e.split,f=e.wrap,l=r.exports.useContext($),m=l.horizontalSize,S=l.verticalSize,u=l.latestIndex,g=l.supportFlexGap,o={};return g||(n==="vertical"?t<u&&(o={marginBottom:m/(c?2:1)}):o=v(v({},t<u&&w({},i,m/(c?2:1))),f&&{paddingBottom:S})),s==null?null:r.exports.createElement(r.exports.Fragment,null,r.exports.createElement("div",{className:a,style:o},s),t<u&&c&&r.exports.createElement("span",{className:"".concat(a,"-split"),style:o},c))}var Q=globalThis&&globalThis.__rest||function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]]);return n},$=r.exports.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),U={small:8,middle:16,large:24};function V(e){return typeof e=="string"?U[e]:e||0}var X=function(a){var n,t=r.exports.useContext(L),i=t.getPrefixCls,s=t.space,c=t.direction,f=a.size,l=f===void 0?(s==null?void 0:s.size)||"small":f,m=a.align,S=a.className,u=a.children,g=a.direction,o=g===void 0?"horizontal":g,F=a.prefixCls,I=a.split,k=a.style,b=a.wrap,_=b===void 0?!1:b,A=Q(a,["size","align","className","children","direction","prefixCls","split","style","wrap"]),y=W(),R=r.exports.useMemo(function(){return(Array.isArray(l)?l:[l,l]).map(function(p){return V(p)})},[l]),O=q(R,2),C=O[0],z=O[1],P=H(u,{keepEmpty:!0}),E=m===void 0&&o==="horizontal"?"center":m,d=i("space",F),j=J(d,"".concat(d,"-").concat(o),(n={},w(n,"".concat(d,"-rtl"),c==="rtl"),w(n,"".concat(d,"-align-").concat(E),E),n),S),G="".concat(d,"-item"),D=c==="rtl"?"marginLeft":"marginRight",h=0,M=P.map(function(p,N){p!=null&&(h=N);var T=p&&p.key||"".concat(G,"-").concat(N);return r.exports.createElement(K,{className:G,key:T,direction:o,index:N,marginDirection:D,split:I,wrap:_},p)}),B=r.exports.useMemo(function(){return{horizontalSize:C,verticalSize:z,latestIndex:h,supportFlexGap:y}},[C,z,h,y]);if(P.length===0)return null;var x={};return _&&(x.flexWrap="wrap",y||(x.marginBottom=-z)),y&&(x.columnGap=C,x.rowGap=z),r.exports.createElement("div",v({className:j,style:v(v({},x),k)},A),r.exports.createElement($.Provider,{value:B},M))},Z=X;export{Z as S};
