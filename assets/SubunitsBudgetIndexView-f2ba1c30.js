import{d as w,r as l,i as B,j as p,w as C,T as S,o as s,c as k,b as a,t as D,e as m,u as o,k as h,q as i}from"./index-07ca7dee.js";import{u as O}from"./useSubunitsBudget-c6fd0271.js";import{s as y}from"./scrollHelper-62f64ba1.js";import{B as P,S as T,D as V}from"./ButtonBarComponent-e1f7a891.js";import"./api-93b42a31.js";import"./paginationHelper-8171a740.js";const x={key:0},E=a("hr",{class:"red"},null,-1),N={class:"row app-options-bar"},I={class:"col buttons-component"},j={class:"col search-component"},q="Subunidades vs. Clave Presupuestal",L=w({__name:"SubunitsBudgetIndexView",setup(A){const{subunitsBudget:t,getSubunitsBudget:r,searchSubunitsBudget:u}=O(),n=l(""),c=l(!1),d=()=>i.push({name:"crear-subunidad-clave-presupuesto"}),v=e=>i.push({name:"editar-subunidad-clave-presupuesto",params:{id:e}}),_=e=>i.push({name:"eliminar-subunidad-clave-presupuesto",params:{id:e}}),g=e=>{n.value?u(n.value,e):r({page:e})},f=e=>{n.value=e,u(e,1)},b=[{title:"Clave",data:"clave",align:"center"},{title:"Proyecto",data:"proyecto",align:"left"},{title:"Actividad Prioritaria",data:"actividad_prioritaria",align:"left"}];return B(()=>{r({page:1}).then(()=>c.value=!0),y()}),(e,M)=>(s(),p(S,{name:"view"},{default:C(()=>[c.value?(s(),k("div",x,[a("h4",{class:"view-name"},D(q)),E,a("div",N,[a("div",I,[m(P,{onOnCreate:d})]),a("div",j,[m(T,{onOnSearch:f})])]),o(t).loading?h("",!0):(s(),p(V,{key:0,rowId:"clave",columns:b,data:o(t).data,pagination:o(t).pagination,showDelete:"",showEdit:"",onOnPaginate:g,onOnEdit:v,onOnDelete:_,onOnCreate:d},null,8,["data","pagination"]))])):h("",!0)]),_:1}))}});export{L as default};
