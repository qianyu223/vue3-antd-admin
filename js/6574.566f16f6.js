"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[6574,7866],{17866:function(e,l,o){o.r(l),o.d(l,{schemas:function(){return n}});const n=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",vShow:!1},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"字段33",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa",type:"array"}]},{field:"field441",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,l)=>l?"1"===l?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]},{field:"field8",component:"Input",label:"后端异步验证",colProps:{span:8},helpMessage:["本字段演示异步验证","本地规则：必须填写","后端规则：不能包含admin"],rules:[{required:!0,message:"请输入数据"},{validator:(e,l="")=>new Promise(((e,o)=>{setTimeout((()=>{l.includes("admin")?o("该字段不能包含admin关键字"):e()}),100)}))}]}]},36574:function(e,l,o){o.r(l),o.d(l,{default:function(){return c}});o(58293);var n=o(45542),a=(o(94310),o(38e3)),r=o(66252),s=o(2262),t=o(67835),i=o(17866);const p=(0,r.Uk)(" 确定 ");var u=(0,r.aZ)({setup(e){const l=(0,s.iH)(),o={schemas:i.schemas,labelWidth:120};function u(){l.value?.validate().then((()=>a.Z.success("验证通过！")))}return(e,a)=>{const i=(0,r.up)("a-button"),c=(0,r.up)("a-card");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)((0,s.SU)(n.Z),{message:"验证表单",description:"动态验证表单",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,s.SU)(t.SchemaForm),{ref_key:"dynamicForm",ref:l,"form-schema":o},{"operate-button":(0,r.w5)((()=>[(0,r.Wm)(i,{type:"primary",onClick:u},{default:(0,r.w5)((()=>[p])),_:1})])),_:1},512)])),_:1})])}}});var c=(0,o(83744).Z)(u,[["__scopeId","data-v-44372472"]])}}]);