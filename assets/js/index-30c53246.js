import{e as a,ab as s,j as e,ar as c,ae as t,as as u,B as l,at as h}from"./index-78dd279d.js";import{S as p}from"./index-3e10c36b.js";const b=()=>a(s,{name:"dynamic_form_nest_item",onFinish:r=>{},autoComplete:"off",children:[e(s.List,{name:"users",children:(r,{add:m,remove:d})=>a(c,{children:[r.map(({key:o,name:i,...n})=>a(p,{style:{display:"flex",marginBottom:8},align:"baseline",children:[e(s.Item,{...n,name:[i,"first"],rules:[{required:!0,message:"Missing first name"}],children:e(t,{placeholder:"First Name"})}),e(s.Item,{...n,name:[i,"last"],rules:[{required:!0,message:"Missing last name"}],children:e(t,{placeholder:"Last Name"})}),e(u,{onClick:()=>d(i)})]},o)),e(s.Item,{children:e(l,{type:"dashed",onClick:()=>m(),block:!0,icon:e(h,{}),children:"Add field"})})]})}),e(s.Item,{children:e(l,{type:"primary",htmlType:"submit",children:"Submit"})})]});export{b as default};
