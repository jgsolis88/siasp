import{d as V,r as m,i as C,j as p,w as S,T as b,o,c as y,b as a,t as R,e as u,u as s,k as h,q as i}from"./index-07ca7dee.js";import{B as T,S as k,D}from"./ButtonBarComponent-e1f7a891.js";import{u as E}from"./useValidRegionsByState-2225b686.js";import{a as O}from"./useLevelsTab-078d45a1.js";import"./paginationHelper-8171a740.js";import"./api-93b42a31.js";const x={key:0},N=a("hr",{class:"red"},null,-1),I={class:"row app-options-bar"},L={class:"col buttons-component"},P={class:"col search-component"},j="Regiones Válidas por Estado",K=V({__name:"ValidRegionsByStateIndexView",setup(q){const{validRegions:t,getValidRegionsByState:l,searchValidRegionsByState:r}=E(),{getAllLevelsTab:g}=O(),n=m(""),d=m(!1),c=()=>i.push({name:"crear-region-valida"}),_=e=>i.push({name:"editar-region-valida",params:{id:e}}),v=e=>i.push({name:"eliminar-region-valida",params:{id:e}}),f=e=>{n.value?r(n.value,e):l({page:e})},w=e=>{n.value=e,r(e,1)},B=[{title:"Estado",data:"id_estado",align:"center"},{title:"Nivel Tabulador",data:"clave_nivel_tabulador",align:"center"},{title:"Región",data:"id_region",align:"center"}];return C(()=>{l({page:1}).then(()=>d.value=!0),g({})}),(e,A)=>(o(),p(b,{name:"view"},{default:S(()=>[d.value?(o(),y("div",x,[a("h4",{class:"view-name"},R(j)),N,a("div",I,[a("div",L,[u(T,{onOnCreate:c})]),a("div",P,[u(k,{onOnSearch:w})])]),s(t).loading?h("",!0):(o(),p(D,{key:0,rowId:"id",columns:B,data:s(t).data,pagination:s(t).pagination,showDelete:"",showEdit:"",onOnPaginate:f,onOnEdit:_,onOnDelete:v,onOnCreate:c},null,8,["data","pagination"]))])):h("",!0)]),_:1}))}});export{K as default};
