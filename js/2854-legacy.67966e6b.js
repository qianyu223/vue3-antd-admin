"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[2854,1289],{71289:function(e,n,t){t.r(n),t.d(n,{setParentChecked:function(){return c},setChildrenChecked:function(){return i},updateNodeCheckStatus:function(){return r}});t(41539),t(54747);var c=function e(n){var t=null==n?void 0:n.children,c=null==t?void 0:t.length,i=!!c&&!t.some((function(e){return!e.checked})),r=!!c&&t.some((function(e){return e.checked||e.indeterminate}));n.checked=i,n.indeterminate=!i&&r,n.parent&&e(n.parent)},i=function e(n,t){null==n||n.forEach((function(n){var c;n.checked=t,n.indeterminate=!1,null!==(c=n.children)&&void 0!==c&&c.length&&e(n.children,t)}))},r=function(e,n){var t;n.checked=e,n.indeterminate=!1,Array.isArray(n.children)&&null!==(t=n.children)&&void 0!==t&&t.length&&i(n.children,e),n.parent&&c(n.parent)}},62854:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});t(79861);var c=t(36993),i=(t(69826),t(41539),t(54747),t(66252)),r=t(2262),a=t(3577),u=t(67944),l=t(71289),d={class:"flex"},o={class:"ant-cascader-menu min-w-150px"},v=["onClick"],h={class:"label"},f=(0,i.aZ)({props:{options:{type:Array,default:function(){return[]}}},setup:function(e,n){var t=n.expose,f=e,s=(0,r.iH)(),k=(0,r.iH)([]),p=(0,r.iH)(),m=function(){var e,n;return null===(e=f.options)||void 0===e||null===(n=e.find((function(e){return e.value===p.value})))||void 0===n?void 0:n.children},g=(0,r.Fl)(m);(0,i.YP)(g,(function(e){e||(k.value=[])}));return t({clearCheck:function(){var e;k.value.forEach((function(e){e.checked=!1,e.indeterminate=!1})),k.value.length&&setTimeout((function(){k.value=m()||[]})),null===(e=s.value)||void 0===e||e.clearCheck()}}),function(n,t){var f,m=(0,i.up)("node-panel",!0);return(0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("div",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.options,(function(e){var n;return(0,i.wg)(),(0,i.iD)("div",{key:e.value,onClick:function(n){return t=e.children,c=e.value,k.value=t||[],void(p.value=c);var t,c},class:"check-row ant-cascader-menu-item ant-cascader-menu-item-expand"},[(0,i._)("div",null,[(0,i.Wm)((0,r.SU)(c.ZP),{checked:e.checked,"onUpdate:checked":function(n){return e.checked=n},indeterminate:e.indeterminate,onChange:function(n){return function(e,n){var t=e.target.checked;(0,l.updateNodeCheckStatus)(t,n)}(n,e)}},null,8,["checked","onUpdate:checked","indeterminate","onChange"]),(0,i._)("span",h,(0,a.zw)(e.label),1)]),null!==(n=e.children)&&void 0!==n&&n.length?((0,i.wg)(),(0,i.j4)((0,r.SU)(u.Z),{key:0,class:"arrow"})):(0,i.kq)("",!0)],8,v)})),128))]),null!==(f=k.value)&&void 0!==f&&f.length&&(0,r.SU)(g)?((0,i.wg)(),(0,i.j4)(m,{key:0,ref_key:"nodePanelRef",ref:s,options:k.value},null,8,["options"])):(0,i.kq)("",!0)])}}});var s=(0,t(83744).Z)(f,[["__scopeId","data-v-181ff138"]])}}]);