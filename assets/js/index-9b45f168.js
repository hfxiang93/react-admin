import{r as l,C as $,ap as z,ag as L,cn as M,B as A,_ as C,co as F,cp as q,n as I,b as X,c as G,bi as H,X as J,cl as Q,O as U}from"./index-2e08c262.js";var W=function(t){var r=t.prefixCls,a=t.okButtonProps,i=t.cancelButtonProps,x=t.title,s=t.cancelText,u=t.okText,f=t.okType,_=t.icon,g=t.showCancel,b=g===void 0?!0:g,O=t.close,P=t.onConfirm,y=t.onCancel,p=l.exports.useContext($),h=p.getPrefixCls;return l.exports.createElement(z,{componentName:"Popconfirm",defaultLocale:L.Popconfirm},function(d){return l.exports.createElement("div",{className:"".concat(r,"-inner-content")},l.exports.createElement("div",{className:"".concat(r,"-message")},_,l.exports.createElement("div",{className:"".concat(r,"-message-title")},M(x))),l.exports.createElement("div",{className:"".concat(r,"-buttons")},b&&l.exports.createElement(A,C({onClick:y,size:"small"},i),s!=null?s:d.cancelText),l.exports.createElement(F,{buttonProps:C(C({size:"small"},q(f)),a),actionFn:P,close:O,prefixCls:h("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},u!=null?u:d.okText)))})},N=globalThis,Y=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(r[a[i]]=e[a[i]]);return r},Z=l.exports.forwardRef(function(e,t){var r=l.exports.useContext($),a=r.getPrefixCls,i=I(!1,{value:e.open!==void 0?e.open:e.visible,defaultValue:e.defaultOpen!==void 0?e.defaultOpen:e.defaultVisible}),x=X(i,2),s=x[0],u=x[1],f=function(n,o){var c,T;u(n,!0),(c=e.onVisibleChange)===null||c===void 0||c.call(e,n,o),(T=e.onOpenChange)===null||T===void 0||T.call(e,n,o)},_=function(n){f(!1,n)},g=function(n){var o;return(o=e.onConfirm)===null||o===void 0?void 0:o.call(N,n)},b=function(n){var o;f(!1,n),(o=e.onCancel)===null||o===void 0||o.call(N,n)},O=function(n){n.keyCode===U.ESC&&s&&f(!1,n)},P=function(n){var o=e.disabled,c=o===void 0?!1:o;c||f(n)},y=e.prefixCls,p=e.placement,h=p===void 0?"top":p,d=e.trigger,B=d===void 0?"click":d,E=e.okType,K=E===void 0?"primary":E,k=e.icon,R=k===void 0?l.exports.createElement(Q,null):k,m=e.children,S=e.overlayClassName,V=Y(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName"]),w=a("popover",y),D=a("popconfirm",y),j=G(D,S);return l.exports.createElement(H,C({},V,{trigger:B,prefixCls:w,placement:h,onOpenChange:P,open:s,ref:t,overlayClassName:j,_overlay:l.exports.createElement(W,C({okType:K,icon:R},e,{prefixCls:w,close:_,onConfirm:g,onCancel:b}))}),J(m,{onKeyDown:function(n){var o,c;l.exports.isValidElement(m)&&((c=m==null?void 0:(o=m.props).onKeyDown)===null||c===void 0||c.call(o,n)),O(n)}}))}),ne=Z;export{ne as P};