import{d as O,r as u,i as B,j as h,w as k,T as D,o as s,c as E,b as o,t as N,e as v,u as i,k as _,q as r}from"./index-9519387c.js";import{D as S}from"./DataTableComponent-c06c4bc6.js";import{S as V,u as A}from"./useReports-aaf1b73f.js";import{B as P}from"./ButtonBarComponent-6aeaeb7a.js";import{u as R}from"./useAppointmentTypes-c8619a98.js";import"./paginationHelper-8171a740.js";import"./api-e3d8e98d.js";const I={key:0},$=o("hr",{class:"red"},null,-1),j={class:"row app-options-bar"},q={class:"col buttons-component"},M={class:"col search-component"},f="Tipos de Nombramiento",U=O({__name:"AppointmentTypesIndexView",setup(z){const{appointmentTypes:n,getAppointmentTypes:p,searchAppointmentTypes:m}=R(),a=u(""),l=u(!1),c=()=>r.push({name:"crear-tipo-nombramiento"}),w=e=>r.push({name:"editar-tipo-nombramiento",params:{id:e}}),b=e=>r.push({name:"eliminar-tipo-nombramiento",params:{id:e}}),{exportReport:g}=A(),x=e=>{a.value?m(a.value,e):p({page:e})},C=e=>{a.value=e,m(e,1)},d=e=>{g(e,"cat_tipo_nombramiento",f)},T=[{title:"Clave",data:"clave",align:"center"},{title:"Nombramiento",data:"descripcion",align:"left"}];return B(()=>{p({page:1}).then(()=>l.value=!0)}),(e,t)=>(s(),h(D,{name:"view"},{default:k(()=>[l.value?(s(),E("div",I,[o("h4",{class:"view-name"},N(f)),$,o("div",j,[o("div",q,[v(P,{onOnCreate:c,onOnExcel:t[0]||(t[0]=y=>d("xlsx")),onOnPdf:t[1]||(t[1]=y=>d("pdf"))})]),o("div",M,[v(V,{onOnSearch:C})])]),i(n).loading?_("",!0):(s(),h(S,{key:0,rowId:"clave",columns:T,data:i(n).data,pagination:i(n).pagination,showDelete:"",showEdit:"",onOnPaginate:x,onOnEdit:w,onOnDelete:b,onOnCreate:c},null,8,["data","pagination"]))])):_("",!0)]),_:1}))}});export{U as default};
