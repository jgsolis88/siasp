import{d as D,r as u,i as E,j as v,w as b,T as k,o as s,c as L,b as t,t as N,e as h,u as l,k as _,q as r}from"./index-9519387c.js";import{u as T}from"./useScalesLevel-fe2293d5.js";import{D as V}from"./DataTableComponent-c06c4bc6.js";import{S as y,u as P}from"./useReports-aaf1b73f.js";import{B as R}from"./ButtonBarComponent-6aeaeb7a.js";import"./api-e3d8e98d.js";import"./paginationHelper-8171a740.js";const I={key:0},$=t("hr",{class:"red"},null,-1),j={class:"row app-options-bar"},q={class:"col buttons-component"},M={class:"col search-component"},f="Escalas por nivel",U=D({__name:"ScalesLevelIndexView",setup(z){const{scalesLevel:n,getScalesLevel:i,searchScalesLevel:c}=T(),{exportReport:w}=P(),o=u(""),d=u(!1),p=()=>r.push({name:"crear-escala-nivel"}),g=e=>r.push({name:"editar-escala-nivel",params:{id:e}}),C=e=>r.push({name:"eliminar-escala-nivel",params:{id:e}}),x=e=>{o.value?c(o.value,e):i({page:e})},S=e=>{o.value=e,c(e,1)},m=e=>{w(e,"cat_escala_por_nivel",f)},O=[{title:"Clave",data:"clave",align:"center"},{title:"Descripción",data:"descripcion",align:"left"},{title:"Nivel Tabulador",data:"id_nivel_tabulador",align:"center"}];return E(()=>{i({page:1}).then(()=>d.value=!0)}),(e,a)=>(s(),v(k,{name:"view"},{default:b(()=>[d.value?(s(),L("div",I,[t("h4",{class:"view-name"},N(f)),$,t("div",j,[t("div",q,[h(R,{onOnCreate:p,onOnExcel:a[0]||(a[0]=B=>m("xlsx")),onOnPdf:a[1]||(a[1]=B=>m("pdf"))})]),t("div",M,[h(y,{onOnSearch:S})])]),l(n).loading?_("",!0):(s(),v(V,{key:0,rowId:"clave",columns:O,data:l(n).data,pagination:l(n).pagination,showDelete:"",showEdit:"",onOnPaginate:x,onOnEdit:g,onOnDelete:C,onOnCreate:p},null,8,["data","pagination"]))])):_("",!0)]),_:1}))}});export{U as default};
