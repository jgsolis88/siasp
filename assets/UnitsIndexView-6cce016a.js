import{d as C,r as u,i as b,j as m,w as B,T as D,o as s,c as k,b as a,t as O,e as p,u as o,k as h,q as i}from"./index-7b270076.js";import{u as S}from"./useUnits-deca7f5e.js";import{B as N,S as U,D as V}from"./ButtonBarComponent-b093cf66.js";import"./api-b8e6f8bb.js";import"./paginationHelper-8171a740.js";const x={key:0},E=a("hr",{class:"red"},null,-1),y={class:"row app-options-bar"},T={class:"col buttons-component"},q={class:"col search-component"},I="Unidades",H=C({__name:"UnitsIndexView",setup(P){const{units:t,getUnits:r,searchUnits:c}=S(),n=u(""),l=u(!1),d=()=>i.push({name:"crear-unidad"}),_=e=>i.push({name:"editar-unidad",params:{id:e}}),g=e=>i.push({name:"eliminar-unidad",params:{id:e}}),v=e=>{n?c(n.value,e):r({page:e})},f=e=>{n.value=e,c(e,1)},w=[{title:"Clave",data:"clave",align:"center"},{title:"Nombre",data:"nombre",align:"center"},{title:"Descripción",data:"descripcion",align:"left"},{title:"Siglas",data:"siglas",align:"center"}];return b(()=>{r({page:1}).then(()=>l.value=!0)}),(e,j)=>(s(),m(D,{name:"view"},{default:B(()=>[l.value?(s(),k("div",x,[a("h4",{class:"view-name"},O(I)),E,a("div",y,[a("div",T,[p(N,{onOnCreate:d})]),a("div",q,[p(U,{onOnSearch:f})])]),o(t).loading?h("",!0):(s(),m(V,{key:0,rowId:"clave",columns:w,data:o(t).data,pagination:o(t).pagination,showDelete:"",showEdit:"",onOnPaginate:v,onOnEdit:_,onOnDelete:g,onOnCreate:d},null,8,["data","pagination"]))])):h("",!0)]),_:1}))}});export{H as default};
