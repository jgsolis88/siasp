import{g as n,p as i,d as c,a as l}from"./api-b8e6f8bb.js";import{C as u,p as t}from"./paginationHelper-8171a740.js";import{r as g}from"./index-7b270076.js";const s="cat_clasificacion_funcional/",J=()=>{const e=g(u);return{functionalJobClassifications:e,getFunctionalJobClassifications:async({page:r=1})=>{try{e.value.loading=!0;const o=await n(`${s}`,{page:r,page_size:e.value.pagination.page_size});return e.value.data=o.results,e.value.pagination=t(e.value.pagination,r,o.count),e.value.loading=!1,Promise.resolve(o.results)}catch(o){return console.error(o),console.log("Error al cargar los bancos",o),Promise.reject(o)}},saveFunctionalJobClassification:async r=>{try{const o=await i(s,r);return Promise.resolve(o)}catch(o){return console.error(o),console.log("Error al guardar el nuevo banco",o),Promise.reject(o)}},deleteFunctionalJobClassification:async r=>{try{const o=await c(`${s}`,r);return Promise.resolve(o)}catch(o){return console.error(o),console.log("Error al eliminar el banco",o),Promise.reject(o)}},updateFunctionalJobClassification:async(r,o)=>{try{console.log(o.clave);const a=await l(`${s}`,r,o);return Promise.resolve(a)}catch(a){return console.error(a),console.log("Error al guardar el banco",a),Promise.reject(a)}},getFunctionalJobClassificationById:async r=>{try{const o=await n(`${s}${r}/`);return Promise.resolve(o)}catch(o){return console.error(o),console.log("Error al cargar banco",o),Promise.reject(o)}},searchFunctionalJobClassifications:async(r="",o=1)=>{try{e.value.loading=!0;const a=await n(`${s}`,{page:o,search:r,page_size:e.value.pagination.page_size});return e.value.data=a.results,e.value.pagination=t(e.value.pagination,o,a.count),e.value.loading=!1,Promise.resolve(a.results)}catch(a){return console.error(a),console.log("Error al obtener bancos",a),Promise.reject(a)}}}};export{J as u};
