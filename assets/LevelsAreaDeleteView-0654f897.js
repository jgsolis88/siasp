import{s as m}from"./scrollHelper-62f64ba1.js";import{d as u,r as n,m as p,y as o,c as v,b as e,t as f,e as _,F as h,o as b}from"./index-1b3fb38e.js";import{_ as g}from"./CardConfirmComponent.vue_vue_type_script_setup_true_lang-71fcbe9c.js";import{a as x}from"./useLevelsArea-0caeb9b3.js";import{d as C}from"./levelAreaModel-2c06ec7c.js";import"./api-fdc0db9b.js";import"./paginationHelper-8171a740.js";const N=e("hr",{class:"red"},null,-1),V={class:"mt-4 card p-4"},y=e("div",{class:"text-center mb-4"},"Detalle:",-1),A={class:"form-group"},D=e("label",{for:"clave-nivel"},"Clave",-1),E=["value"],L={class:"form-group"},w=e("label",{for:"descripcion-nivel"},"Descripción",-1),B=["value"],S="Eliminar Nivel por Área",T=u({__name:"LevelsAreaDeleteView",setup(k){const{deleteLevelsArea:r,getLevelArea:i}=x(),a=n(""),t=n({...C}),c=()=>o.push({name:"listar-niveles-area"}),d=()=>r(a.value).then(()=>o.push({name:"listar-niveles-area"}));return p(()=>{var s;if(a.value=(s=o.currentRoute.value.params.id)==null?void 0:s.toString(),a.value)i(a.value).then(l=>{t.value.clave=l.clave,t.value.descripcion=l.descripcion});else return o.push({name:"not-found"});m()}),(s,l)=>(b(),v(h,null,[e("h4",{class:"view-name"},f(S)),N,_(g,{title:"¿Estás Seguro?",subtitle:"El Nivel se dará de baja permanentemente.",text:"Verifique la información antes de confirmar la operación.",onOnConfirm:d,onOnCancel:c}),e("form",V,[y,e("div",A,[D,e("input",{type:"text",value:t.value.clave,class:"form-control",id:"clave-nivel",placeholder:"",autocomplete:"off",disabled:""},null,8,E)]),e("div",L,[w,e("input",{type:"text",value:t.value.descripcion,class:"form-control",id:"descripcion-nivel",placeholder:"",autocomplete:"off",disabled:""},null,8,B)])])],64))}});export{T as default};
