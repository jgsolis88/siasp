import{d as O,r as m,i as k,j as v,w as D,T as E,o as s,c as P,b as a,t as y,e as h,u as r,k as _,q as i}from"./index-9519387c.js";import{u as T}from"./useSubunitsBudget-7953f1f3.js";import{s as V}from"./scrollHelper-62f64ba1.js";import{D as N}from"./DataTableComponent-c06c4bc6.js";import{S as R,u as I}from"./useReports-aaf1b73f.js";import{B as $}from"./ButtonBarComponent-6aeaeb7a.js";import"./api-e3d8e98d.js";import"./paginationHelper-8171a740.js";const j={key:0},q=a("hr",{class:"red"},null,-1),A={class:"row app-options-bar"},M={class:"col buttons-component"},z={class:"col search-component"},f="Subunidades vs. Clave Presupuestal",X=O({__name:"SubunitsBudgetIndexView",setup(F){const{subunitsBudget:o,getSubunitsBudget:u,searchSubunitsBudget:d}=T(),{exportReport:g}=I(),n=m(""),l=m(!1),c=()=>i.push({name:"crear-subunidad-clave-presupuesto"}),b=e=>i.push({name:"editar-subunidad-clave-presupuesto",params:{id:e}}),w=e=>i.push({name:"eliminar-subunidad-clave-presupuesto",params:{id:e}}),B=e=>{n.value?d(n.value,e):u({page:e})},C=e=>{n.value=e,d(e,1)},p=e=>{g(e,"cat_subunidad_vs_presupuesto",f)},S=[{title:"Clave",data:"clave",align:"center"},{title:"Proyecto",data:"proyecto",align:"left"},{title:"Actividad Prioritaria",data:"actividad_prioritaria",align:"left"}];return k(()=>{u({page:1}).then(()=>l.value=!0),V()}),(e,t)=>(s(),v(E,{name:"view"},{default:D(()=>[l.value?(s(),P("div",j,[a("h4",{class:"view-name"},y(f)),q,a("div",A,[a("div",M,[h($,{onOnCreate:c,onOnExcel:t[0]||(t[0]=x=>p("xlsx")),onOnPdf:t[1]||(t[1]=x=>p("pdf"))})]),a("div",z,[h(R,{onOnSearch:C})])]),r(o).loading?_("",!0):(s(),v(N,{key:0,rowId:"clave",columns:S,data:r(o).data,pagination:r(o).pagination,showDelete:"",showEdit:"",onOnPaginate:B,onOnEdit:b,onOnDelete:w,onOnCreate:c},null,8,["data","pagination"]))])):_("",!0)]),_:1}))}});export{X as default};
