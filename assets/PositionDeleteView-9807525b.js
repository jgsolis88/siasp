import{d as v,r as i,i as h,q as s,j as b,w as k,T as x,o as r,c as j,b as e,t as z,e as w,g as d,z as u,k as C}from"./index-07ca7dee.js";import{s as V}from"./scrollHelper-62f64ba1.js";import{_ as g}from"./CardConfirmComponent.vue_vue_type_script_setup_true_lang-821a8bbf.js";import{u as y}from"./usePositions-37455264.js";import{d as T}from"./positionModel-7225cae8.js";import"./api-93b42a31.js";import"./paginationHelper-8171a740.js";const B={key:0},D=e("hr",{class:"red"},null,-1),I={class:"mt-4 card p-4"},N=e("div",{class:"text-center mb-4"},"Detalle:",-1),P={class:"form-group"},E=e("label",{for:"nombre-operacion"},"Clave",-1),S=["value"],q={class:"form-group"},M=e("label",{for:"nombre-operacion"},"Nivel",-1),O=["value"],U={class:"form-group"},R=e("label",{for:"nombre-operacion"},"Descripción",-1),$=["value"],A={class:"form-check"},F=e("label",{class:"form-check-label pl-4"},"Tiene base",-1),G={class:"form-check"},H=e("label",{class:"form-check-label pl-4"},"Tiene fojaref",-1),J="Eliminar Puesto",oe=v({__name:"PositionDeleteView",setup(K){const{deletePosition:f,getPositionById:m}=y(),t=i(""),c=i(!1),o=i({...T}),p=()=>s.push({name:"listar-puestos"}),_=()=>{f(t.value).then(()=>s.push({name:"listar-puestos"}))};return h(()=>{var l;if(t.value=(l=s.currentRoute.value.params.id)==null?void 0:l.toString(),t.value)m(t.value).then(a=>{o.value.clave=a.clave,o.value.nivel=a.nivel,o.value.descripcion=a.descripcion,o.value.base_confianza=a.base_confianza,o.value.fojaref=a.fojaref,c.value=!0});else return s.push({name:"not-found"});V()}),(l,a)=>(r(),b(x,{name:"view"},{default:k(()=>[c.value?(r(),j("div",B,[e("h4",{class:"view-name"},z(J)),D,w(g,{title:"¿Estás Seguro?",subtitle:"El puesto se dará de baja permanentemente.",text:"Verifique la información antes de confirmar la operación.",onOnConfirm:_,onOnCancel:p}),e("form",I,[N,e("div",P,[E,e("input",{type:"text",value:o.value.clave,class:"form-control",id:"name-position",placeholder:"Introduzca el nombre de la operación",autocomplete:"off",disabled:""},null,8,S)]),e("div",q,[M,e("input",{type:"text",value:o.value.nivel,class:"form-control",id:"level-position",placeholder:"Introduzca el nombre de la operación",autocomplete:"off",disabled:""},null,8,O)]),e("div",U,[R,e("input",{type:"text",value:o.value.descripcion,class:"form-control",id:"description-position",placeholder:"Introduzca el nombre de la operación",autocomplete:"off",disabled:""},null,8,$)]),e("div",A,[d(e("input",{class:"form-check-input",placeholder:"Tiene base",name:"base_confianza",id:"base_confianza",type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=n=>o.value.base_confianza=n),disabled:""},null,512),[[u,o.value.base_confianza]]),F]),e("div",G,[d(e("input",{class:"form-check-input",placeholder:"Tiene fojaref",name:"fojaref",id:"fojaref",type:"checkbox","onUpdate:modelValue":a[1]||(a[1]=n=>o.value.fojaref=n),disabled:""},null,512),[[u,o.value.fojaref]]),H])])])):C("",!0)]),_:1}))}});export{oe as default};
