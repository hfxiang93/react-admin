import{c as N,_ as d,r as a,a as g,C as M,o as re,D as Ae,b as ae,d as xe,e as _,j as p,f as Re,g as qe,h as ve,u as Be,i as de,R as _e,S as Te,A as De,B as Fe}from"./index-78dd279d.js";import{d as Ke}from"./index-b428918f.js";import{P as He}from"./Pagination-25fc8f41.js";var We=function(e){var n,t,i=e.prefixCls,c=e.className,u=e.style,l=e.size,m=e.shape,v=N((n={},d(n,"".concat(i,"-lg"),l==="large"),d(n,"".concat(i,"-sm"),l==="small"),n)),o=N((t={},d(t,"".concat(i,"-circle"),m==="circle"),d(t,"".concat(i,"-square"),m==="square"),d(t,"".concat(i,"-round"),m==="round"),t)),s=a.exports.useMemo(function(){return typeof l=="number"?{width:l,height:l,lineHeight:"".concat(l,"px")}:{}},[l]);return a.exports.createElement("span",{className:N(i,v,o,c),style:g(g({},s),u)})},V=We,Ue=function(e){var n=e.prefixCls,t=e.className,i=e.active,c=e.shape,u=c===void 0?"circle":c,l=e.size,m=l===void 0?"default":l,v=a.exports.useContext(M),o=v.getPrefixCls,s=o("skeleton",n),x=re(e,["prefixCls","className"]),f=N(s,"".concat(s,"-element"),d({},"".concat(s,"-active"),i),t);return a.exports.createElement("div",{className:f},a.exports.createElement(V,g({prefixCls:"".concat(s,"-avatar"),shape:u,size:m},x)))},Ve=Ue,Je=function(e){var n,t=e.prefixCls,i=e.className,c=e.active,u=e.block,l=u===void 0?!1:u,m=e.size,v=m===void 0?"default":m,o=a.exports.useContext(M),s=o.getPrefixCls,x=s("skeleton",t),f=re(e,["prefixCls"]),O=N(x,"".concat(x,"-element"),(n={},d(n,"".concat(x,"-active"),c),d(n,"".concat(x,"-block"),l),n),i);return a.exports.createElement("div",{className:O},a.exports.createElement(V,g({prefixCls:"".concat(x,"-button"),size:v},f)))},Ge=Je,Qe=function(e){var n=e.prefixCls,t=e.className,i=e.style,c=e.active,u=e.children,l=a.exports.useContext(M),m=l.getPrefixCls,v=m("skeleton",n),o=N(v,"".concat(v,"-element"),d({},"".concat(v,"-active"),c),t),s=u!=null?u:a.exports.createElement(Ae,null);return a.exports.createElement("div",{className:o},a.exports.createElement("div",{className:N("".concat(v,"-image"),t),style:i},s))},Xe=Qe,Ye="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",Ze=function(e){var n=e.prefixCls,t=e.className,i=e.style,c=e.active,u=a.exports.useContext(M),l=u.getPrefixCls,m=l("skeleton",n),v=N(m,"".concat(m,"-element"),d({},"".concat(m,"-active"),c),t);return a.exports.createElement("div",{className:v},a.exports.createElement("div",{className:N("".concat(m,"-image"),t),style:i},a.exports.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(m,"-image-svg")},a.exports.createElement("path",{d:Ye,className:"".concat(m,"-image-path")}))))},et=Ze,tt=function(e){var n,t=e.prefixCls,i=e.className,c=e.active,u=e.block,l=e.size,m=l===void 0?"default":l,v=a.exports.useContext(M),o=v.getPrefixCls,s=o("skeleton",t),x=re(e,["prefixCls"]),f=N(s,"".concat(s,"-element"),(n={},d(n,"".concat(s,"-active"),c),d(n,"".concat(s,"-block"),u),n),i);return a.exports.createElement("div",{className:f},a.exports.createElement(V,g({prefixCls:"".concat(s,"-input"),size:m},x)))},at=tt,rt=function(e){var n=function(v){var o=e.width,s=e.rows,x=s===void 0?2:s;if(Array.isArray(o))return o[v];if(x-1===v)return o},t=e.prefixCls,i=e.className,c=e.style,u=e.rows,l=ae(Array(u)).map(function(m,v){return a.exports.createElement("li",{key:v,style:{width:n(v)}})});return a.exports.createElement("ul",{className:N(t,i),style:c},l)},nt=rt,it=function(e){var n=e.prefixCls,t=e.className,i=e.width,c=e.style;return a.exports.createElement("h3",{className:N(n,t),style:g({width:i},c)})},ot=it;function te(r){return r&&xe(r)==="object"?r:{}}function st(r,e){return r&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function lt(r,e){return!r&&e?{width:"38%"}:r&&e?{width:"50%"}:{}}function ct(r,e){var n={};return(!r||!e)&&(n.width="61%"),!r&&e?n.rows=3:n.rows=2,n}var R=function(e){var n=e.prefixCls,t=e.loading,i=e.className,c=e.style,u=e.children,l=e.avatar,m=l===void 0?!1:l,v=e.title,o=v===void 0?!0:v,s=e.paragraph,x=s===void 0?!0:s,f=e.active,O=e.round,k=a.exports.useContext(M),q=k.getPrefixCls,z=k.direction,C=q("skeleton",n);if(t||!("loading"in e)){var b,$=!!m,P=!!o,E=!!x,j;if($){var J=g(g({prefixCls:"".concat(C,"-avatar")},st(P,E)),te(m));j=a.exports.createElement("div",{className:"".concat(C,"-header")},a.exports.createElement(V,g({},J)))}var B;if(P||E){var T;if(P){var D=g(g({prefixCls:"".concat(C,"-title")},lt($,E)),te(o));T=a.exports.createElement(ot,g({},D))}var F;if(E){var G=g(g({prefixCls:"".concat(C,"-paragraph")},ct($,P)),te(x));F=a.exports.createElement(nt,g({},G))}B=a.exports.createElement("div",{className:"".concat(C,"-content")},T,F)}var Q=N(C,(b={},d(b,"".concat(C,"-with-avatar"),$),d(b,"".concat(C,"-active"),f),d(b,"".concat(C,"-rtl"),z==="rtl"),d(b,"".concat(C,"-round"),O),b),i);return a.exports.createElement("div",{className:Q,style:c},j,B)}return typeof u!="undefined"?u:null};R.Button=Ge;R.Avatar=Ve;R.Input=at;R.Image=et;R.Node=Xe;var ut=R,ge=globalThis&&globalThis.__rest||function(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(r);i<t.length;i++)e.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(r,t[i])&&(n[t[i]]=r[t[i]]);return n},mt=function(e){var n=e.prefixCls,t=e.className,i=e.avatar,c=e.title,u=e.description,l=ge(e,["prefixCls","className","avatar","title","description"]),m=a.exports.useContext(M),v=m.getPrefixCls,o=v("list",n),s=N("".concat(o,"-item-meta"),t),x=_("div",{className:"".concat(o,"-item-meta-content"),children:[c&&p("h4",{className:"".concat(o,"-item-meta-title"),children:c}),u&&p("div",{className:"".concat(o,"-item-meta-description"),children:u})]});return _("div",{...l,className:s,children:[i&&p("div",{className:"".concat(o,"-item-meta-avatar"),children:i}),(c||u)&&x]})},vt=function(e,n){var t=e.prefixCls,i=e.children,c=e.actions,u=e.extra,l=e.className,m=e.colStyle,v=ge(e,["prefixCls","children","actions","extra","className","colStyle"]),o=a.exports.useContext(ne),s=o.grid,x=o.itemLayout,f=a.exports.useContext(M),O=f.getPrefixCls,k=function(){var E;return a.exports.Children.forEach(i,function(j){typeof j=="string"&&(E=!0)}),E&&a.exports.Children.count(i)>1},q=function(){return x==="vertical"?!!u:!k()},z=O("list",t),C=c&&c.length>0&&p("ul",{className:"".concat(z,"-item-action"),children:c.map(function(P,E){return _("li",{children:[P,E!==c.length-1&&p("em",{className:"".concat(z,"-item-action-split")})]},"".concat(z,"-item-action-").concat(E))})},"actions"),b=s?"div":"li",$=p(b,{...v,...s?{}:{ref:n},className:N("".concat(z,"-item"),d({},"".concat(z,"-item-no-flex"),!q()),l),children:x==="vertical"&&u?[_("div",{className:"".concat(z,"-item-main"),children:[i,C]},"content"),p("div",{className:"".concat(z,"-item-extra"),children:u},"extra")]:[i,C,Re(u,{key:"extra"})]});return s?p(qe,{ref:n,flex:1,style:m,children:$}):$},pe=a.exports.forwardRef(vt);pe.Meta=mt;var dt=pe,ft=globalThis&&globalThis.__rest||function(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(r);i<t.length;i++)e.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(r,t[i])&&(n[t[i]]=r[t[i]]);return n},ne=a.exports.createContext({});ne.Consumer;function U(r){var e,n=r.pagination,t=n===void 0?!1:n,i=r.prefixCls,c=r.bordered,u=c===void 0?!1:c,l=r.split,m=l===void 0?!0:l,v=r.className,o=r.children,s=r.itemLayout,x=r.loadMore,f=r.grid,O=r.dataSource,k=O===void 0?[]:O,q=r.size,z=r.header,C=r.footer,b=r.loading,$=b===void 0?!1:b,P=r.rowKey,E=r.renderItem,j=r.locale,J=ft(r,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),B=t&&xe(t)==="object"?t:{},T=a.exports.useState(B.defaultCurrent||1),D=ve(T,2),F=D[0],G=D[1],Q=a.exports.useState(B.defaultPageSize||10),ie=ve(Q,2),he=ie[0],ye=ie[1],X=a.exports.useContext(M),Ne=X.getPrefixCls,Se=X.renderEmpty,Pe=X.direction,Ee={current:1,total:0},oe={},se=function(y){return function(L,I){G(L),ye(I),t&&t[y]&&t[y](L,I)}},ze=se("onChange"),be=se("onShowSizeChange"),we=function(y,L){if(!E)return null;var I;return typeof P=="function"?I=P(y):P?I=y[P]:I=y.key,I||(I="list-item-".concat(L)),oe[L]=I,E(y,L)},ke=function(){return!!(x||t||C)},$e=function(y,L){return a.exports.createElement("div",{className:"".concat(y,"-empty-text")},j&&j.emptyText||L("List"))},S=Ne("list",i),A=$;typeof A=="boolean"&&(A={spinning:A});var Y=A&&A.spinning,K="";switch(q){case"large":K="lg";break;case"small":K="sm";break}var Ie=N(S,(e={},d(e,"".concat(S,"-vertical"),s==="vertical"),d(e,"".concat(S,"-").concat(K),K),d(e,"".concat(S,"-split"),m),d(e,"".concat(S,"-bordered"),u),d(e,"".concat(S,"-loading"),Y),d(e,"".concat(S,"-grid"),!!f),d(e,"".concat(S,"-something-after-last-item"),ke()),d(e,"".concat(S,"-rtl"),Pe==="rtl"),e),v),w=g(g(g({},Ee),{total:k.length,current:F,pageSize:he}),t||{}),le=Math.ceil(w.total/w.pageSize);w.current>le&&(w.current=le);var ce=t?a.exports.createElement("div",{className:"".concat(S,"-pagination")},a.exports.createElement(He,g({},w,{onChange:ze,onShowSizeChange:be}))):null,Z=ae(k);t&&k.length>(w.current-1)*w.pageSize&&(Z=ae(k).splice((w.current-1)*w.pageSize,w.pageSize));var Me=Object.keys(f||{}).some(function(h){return["xs","sm","md","lg","xl","xxl"].includes(h)}),ue=Be(Me),H=a.exports.useMemo(function(){for(var h=0;h<de.length;h+=1){var y=de[h];if(ue[y])return y}},[ue]),Oe=a.exports.useMemo(function(){if(!!f){var h=H&&f[H]?f[H]:f.column;if(h)return{width:"".concat(100/h,"%"),maxWidth:"".concat(100/h,"%")}}},[f==null?void 0:f.column,H]),ee=Y&&a.exports.createElement("div",{style:{minHeight:53}});if(Z.length>0){var me=Z.map(function(h,y){return we(h,y)}),Le=a.exports.Children.map(me,function(h,y){return a.exports.createElement("div",{key:oe[y],style:Oe},h)});ee=f?a.exports.createElement(_e,{gutter:f.gutter},Le):a.exports.createElement("ul",{className:"".concat(S,"-items")},me)}else!o&&!Y&&(ee=$e(S,Se||Ke));var W=w.position||"bottom",je=a.exports.useMemo(function(){return{grid:f,itemLayout:s}},[JSON.stringify(f),s]);return a.exports.createElement(ne.Provider,{value:je},a.exports.createElement("div",g({className:Ie},J),(W==="top"||W==="both")&&ce,z&&a.exports.createElement("div",{className:"".concat(S,"-header")},z),a.exports.createElement(Te,g({},A),ee,o),C&&a.exports.createElement("div",{className:"".concat(S,"-footer")},C),x||(W==="bottom"||W==="both")&&ce))}U.Item=dt;const Ce=6,fe=`https://randomuser.me/api/?results=${Ce}&inc=name,gender,email,nat,picture&noinfo`,Ct=()=>{const[r,e]=a.exports.useState(!0),[n,t]=a.exports.useState(!1),[i,c]=a.exports.useState([]),[u,l]=a.exports.useState([]);return a.exports.useEffect(()=>{fetch(fe).then(o=>o.json()).then(o=>{e(!1),c(o.results),l(o.results)})},[]),p(U,{className:"demo-loadmore-list",loading:r,itemLayout:"horizontal",loadMore:!r&&!n?p("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:p(Fe,{onClick:()=>{t(!0),l(i.concat([...new Array(Ce)].map(()=>({loading:!0,name:{},picture:{}})))),fetch(fe).then(o=>o.json()).then(o=>{const s=i.concat(o.results);c(s),l(s),t(!1),window.dispatchEvent(new Event("resize"))})},children:"loading more"})}):null,dataSource:u,renderItem:o=>{var s;return p(U.Item,{actions:[p("a",{children:"edit"},"list-loadmore-edit"),p("a",{children:"more"},"list-loadmore-more")],children:_(ut,{avatar:!0,title:!1,loading:o.loading,active:!0,children:[p(U.Item.Meta,{avatar:p(De,{src:o.picture.large}),title:p("a",{href:"https://ant.design",children:(s=o.name)==null?void 0:s.last}),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}),p("div",{children:"content"})]})})}})};export{Ct as default};
