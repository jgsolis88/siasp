import{g as n,p as l,d as c,a as u}from"./api-6055b01b.js";import{C as g,p as i}from"./paginationHelper-8171a740.js";import{r as d}from"./index-675e3599.js";const t="cat_unidad_administrativa/",j=()=>{const r=d({...g});return{units:r,getUnits:async({page:a=1})=>{try{r.value.loading=!0;const e=await n(`${t}`,{page:a,page_size:r.value.pagination.page_size});return r.value.data=e.results,r.value.pagination=i(r.value.pagination,a,e.count),r.value.loading=!1,Promise.resolve(e.results)}catch(e){return console.error(e),console.log("Error al cargar las unidades",e),Promise.reject(e)}},saveUnit:async a=>{try{const e=await l(t,a);return Promise.resolve(e)}catch(e){return console.error(e),console.log("Error al guardar la nueva unidad",e),Promise.reject(e)}},getAllUnits:async({page:a=1,pageSize:e=r.value.pagination.page_size,loader:s=!0})=>{try{r.value.loading=!0;const o=await n(`${t}`,{page:a,page_size:e,paginate:!1},s);return r.value.loading=!1,Promise.resolve(o)}catch(o){return console.error(o),console.log("Error al cargar unidades",o),Promise.reject(o)}},deleteUnit:async a=>{try{const e=await c(`${t}`,a);return Promise.resolve(e)}catch(e){return console.error(e),console.log("Error al eliminar la unidad",e),Promise.reject(e)}},updateUnit:async(a,e)=>{try{console.log(e.clave);const s=await u(`${t}`,a,e);return Promise.resolve(s)}catch(s){return console.error(s),console.log("Error al guardar la unidad",s),Promise.reject(s)}},getUnitById:async a=>{try{const e=await n(`${t}${a}/`);return Promise.resolve(e)}catch(e){return console.error(e),console.log("Error al cargar unidad",e),Promise.reject(e)}},searchUnits:async(a="",e=1,s=!0)=>{try{r.value.loading=!0;const o=await n(`${t}`,{page:e,search:a,page_size:r.value.pagination.page_size},s);return r.value.data=o.results,r.value.pagination=i(r.value.pagination,e,o.count),r.value.loading=!1,Promise.resolve(o.results)}catch(o){return console.error(o),console.log("Error al obtener las unidades",o),Promise.reject(o)}}}};export{j as u};
