import{g as n,p as c,d as l,a as i}from"./api-93b42a31.js";import{C as u,p as t}from"./paginationHelper-8171a740.js";import{r as p}from"./index-07ca7dee.js";const s="cat_prima_gasto_medico_mayor/",P=()=>{const r=p(u);return{majorMedicalExpenses:r,getMajorMedicalExpenses:async({page:o=1})=>{try{r.value.loading=!0;const e=await n(`${s}`,{page:o,page_size:r.value.pagination.page_size});return r.value.data=e.results,r.value.pagination=t(r.value.pagination,o,e.count),r.value.loading=!1,Promise.resolve(e.results)}catch(e){return console.error(e),console.log("Error al cargar los bancos",e),Promise.reject(e)}},saveMajorMedicalExpense:async o=>{try{const e=await c(s,o);return Promise.resolve(e)}catch(e){return console.error(e),console.log("Error al guardar el nuevo banco",e),Promise.reject(e)}},deleteMajorMedicalExpense:async o=>{try{const e=await l(`${s}`,o);return Promise.resolve(e)}catch(e){return console.error(e),console.log("Error al eliminar el banco",e),Promise.reject(e)}},updateMajorMedicalExpense:async(o,e)=>{try{const a=await i(`${s}`,o,e);return Promise.resolve(a)}catch(a){return console.error(a),console.log("Error al guardar el banco",a),Promise.reject(a)}},getMajorMedicalExpenseById:async o=>{try{const e=await n(`${s}${o}/`);return Promise.resolve(e)}catch(e){return console.error(e),console.log("Error al cargar banco",e),Promise.reject(e)}},searchMajorMedicalExpenses:async(o="",e=1)=>{try{r.value.loading=!0;const a=await n(`${s}`,{page:e,search:o,page_size:r.value.pagination.page_size});return r.value.data=a.results,r.value.pagination=t(r.value.pagination,e,a.count),r.value.loading=!1,Promise.resolve(a.results)}catch(a){return console.error(a),console.log("Error al obtener bancos",a),Promise.reject(a)}}}};export{P as u};
