"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[1817,2854,1289],{71289:function(e,n,a){a.r(n),a.d(n,{setParentChecked:function(){return l},setChildrenChecked:function(){return t},updateNodeCheckStatus:function(){return c}});const l=e=>{const n=e?.children,a=n?.length,t=!!a&&!n.some((e=>!e.checked)),c=!!a&&n.some((e=>e.checked||e.indeterminate));e.checked=t,e.indeterminate=!t&&c,e.parent&&l(e.parent)},t=(e,n)=>{e?.forEach((e=>{e.checked=n,e.indeterminate=!1,e.children?.length&&t(e.children,n)}))},c=(e,n)=>{n.checked=e,n.indeterminate=!1,Array.isArray(n.children)&&n.children?.length&&t(n.children,e),n.parent&&l(n.parent)}},31817:function(e,n,a){a.r(n),a.d(n,{default:function(){return g}});a(93300);var l=a(96461),t=(a(38049),a(94776)),c=(a(89397),a(98704)),i=(a(50460),a(80044)),r=a(66252),d=a(2262),u=a(49963),o=a(3577),s=a(30167),h=a(62854),v=a(26593),p=a(60191),k=a(71289);const m={class:"input-box"};var f=(0,r.aZ)({props:{value:{type:Array,default:()=>[],isRequired:!0}},emits:["update:value"],setup(e,{emit:n}){const a=e,f=(0,v.NCN)(a,"value",n),g=(0,d.iH)(),C=(0,d.iH)((0,s.ik)()),w=i.ZP.useInjectFormItemContext(),_=(e,n=[])=>e.reduce(((e,n)=>(!n.children?.length&&n.checked&&n.value&&e.push({label:n.value,value:n.value,node:n}),n.children?.length&&_(n.children,e),e)),n),b=e=>{const n=e=>e.some((e=>!!f.value.includes(e.value)||!!e.children?.length&&n(e.children))),a=(e,l=null)=>{e?.forEach((e=>{e.children?.length&&a(e.children,e),e.parent=l,e.indeterminate=!1,e.checked=f.value.includes(e.value),e.children?.length&&(e.indeterminate=n(e.children))}))};a(e)};b(C.value);const y=()=>{f.value=[],setTimeout((()=>{C.value=(0,s.ik)(),b(C.value),g.value?.clearCheck()}))},S=(0,d.Fl)((()=>_(C.value)));return(0,r.YP)((()=>S.value),(e=>{f.value=e.map((e=>e.value)),w.onFieldChange()})),(e,n)=>((0,r.wg)(),(0,r.j4)((0,d.SU)(c.Z),{placement:"bottomLeft",trigger:"click"},{content:(0,r.w5)((()=>[(0,r.Wm)(h.default,{ref_key:"nodePanelRef",ref:g,options:C.value},null,8,["options"])])),default:(0,r.w5)((()=>[(0,r._)("div",m,[(0,r.Wm)((0,d.SU)(t.ZP),{placeholder:"请选择"},(0,r.Nv)({_:2},[(0,d.SU)(S).length?{name:"prefix",fn:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,d.SU)(S),(e=>((0,r.wg)(),(0,r.j4)((0,d.SU)(l.Z),{key:e.value,class:"tag-item",closable:"",onClose:(0,u.iM)((n=>(e=>{(0,k.updateNodeCheckStatus)(!1,e.node)})(e)),["prevent"])},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(e.label),1)])),_:2},1032,["onClose"])))),128)),(0,r.Wm)((0,d.SU)(p.Z),{class:"clear-icon",onClick:(0,u.iM)(y,["prevent"])},null,8,["onClick"])]))}:void 0]),1024)])])),_:1}))}});var g=(0,a(83744).Z)(f,[["__scopeId","data-v-5cdcbb9b"]])},62854:function(e,n,a){a.r(n),a.d(n,{default:function(){return p}});a(79861);var l=a(36993),t=a(66252),c=a(2262),i=a(3577),r=a(67944),d=a(71289);const u={class:"flex"},o={class:"ant-cascader-menu min-w-150px"},s=["onClick"],h={class:"label"};var v=(0,t.aZ)({props:{options:{type:Array,default:()=>[]}},setup(e,{expose:n}){const a=e,v=(0,c.iH)(),p=(0,c.iH)([]),k=(0,c.iH)(),m=()=>a.options?.find((e=>e.value===k.value))?.children,f=(0,c.Fl)(m);(0,t.YP)(f,(e=>{e||(p.value=[])}));return n({clearCheck:()=>{p.value.forEach((e=>{e.checked=!1,e.indeterminate=!1})),p.value.length&&setTimeout((()=>{p.value=m()||[]})),v.value?.clearCheck()}}),(n,a)=>{const m=(0,t.up)("node-panel",!0);return(0,t.wg)(),(0,t.iD)("div",u,[(0,t._)("div",o,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.options,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e.value,onClick:n=>{return a=e.children,l=e.value,p.value=a||[],void(k.value=l);var a,l},class:"check-row ant-cascader-menu-item ant-cascader-menu-item-expand"},[(0,t._)("div",null,[(0,t.Wm)((0,c.SU)(l.ZP),{checked:e.checked,"onUpdate:checked":n=>e.checked=n,indeterminate:e.indeterminate,onChange:n=>((e,n)=>{const a=e.target.checked;(0,d.updateNodeCheckStatus)(a,n)})(n,e)},null,8,["checked","onUpdate:checked","indeterminate","onChange"]),(0,t._)("span",h,(0,i.zw)(e.label),1)]),e.children?.length?((0,t.wg)(),(0,t.j4)((0,c.SU)(r.Z),{key:0,class:"arrow"})):(0,t.kq)("",!0)],8,s)))),128))]),p.value?.length&&(0,c.SU)(f)?((0,t.wg)(),(0,t.j4)(m,{key:0,ref_key:"nodePanelRef",ref:v,options:p.value},null,8,["options"])):(0,t.kq)("",!0)])}}});var p=(0,a(83744).Z)(v,[["__scopeId","data-v-181ff138"]])}}]);