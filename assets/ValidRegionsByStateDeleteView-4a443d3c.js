import{d as h,r as g,s as b,m as S,y as i,c as n,b as e,t as r,e as V,g as R,D as y,F as c,l as B,u as E,o as d}from"./index-1b3fb38e.js";import{s as C}from"./scrollHelper-62f64ba1.js";import{_ as D}from"./CardConfirmComponent.vue_vue_type_script_setup_true_lang-71fcbe9c.js";import{d as T}from"./validRegionByStateModel-d3006d60.js";import{u as w}from"./useValidRegionsByState-82a8eae0.js";import{u as x}from"./useLevelsTab-eae73d49.js";import"./api-fdc0db9b.js";import"./paginationHelper-8171a740.js";const L=e("hr",{class:"red"},null,-1),N={class:"mt-4 card p-4"},k=e("div",{class:"text-center mb-4"},"Detalle:",-1),P={class:"form-group"},F=e("label",{for:"clave-nivel"},"Estado",-1),M={disabled:"",class:"form-select form-control"},O=["selected"],j=["selected"],q={class:"form-group"},A=e("label",{for:"descripcion-nivel"},"Nivel Tabulador",-1),I=e("option",{value:"0"},"Selecciona una opción",-1),U=["value"],$={class:"form-group"},z=e("label",{for:"descripcion-nivel"},"Región",-1),G={disabled:"",class:"form-select form-control"},H=["selected"],J=["selected"],K="Eliminar Región Valida Por Estado",se=h({__name:"ValidRegionsByStateDeleteView",setup(Q){const{levelsTab:_,getAllLevelsTab:u}=x(),{deleteValidRegionByState:m,getValidRegionByState:v}=w(),s=g(""),t=b({...T}),f=()=>i.push({name:"listar-regiones-validas"}),p=()=>m(s.value).then(()=>i.push({name:"listar-regiones-validas"}));return S(()=>{var l;if(u({}),s.value=(l=i.currentRoute.value.params.id)==null?void 0:l.toString(),s.value)v(s.value).then(o=>{t.id=o.id,t.id_estado=o.id_estado,t.id_nivel_tabulador=o.id_nivel_tabulador,t.id_region=o.id_region});else return i.push({name:"not-found"});C()}),(l,o)=>(d(),n(c,null,[e("h4",{class:"view-name"},r(K)),L,V(D,{title:"¿Estás Seguro?",subtitle:"La región se dará de baja permanentemente.",text:"Verifique la información antes de confirmar la operación.",onOnConfirm:p,onOnCancel:f}),e("form",N,[k,e("div",P,[F,e("select",M,[e("option",{value:"0",selected:t.id_estado==0},"Selecciona una opción",8,O),e("option",{value:"1",selected:t.id_estado==1}," Estado Prueba ",8,j)])]),e("div",q,[A,R(e("select",{disabled:"",class:"form-select form-control","onUpdate:modelValue":o[0]||(o[0]=a=>t.id_nivel_tabulador=a)},[I,(d(!0),n(c,null,B(E(_).data,a=>(d(),n("option",{key:a.id,value:a.id},r(a.clave),9,U))),128))],512),[[y,t.id_nivel_tabulador]])]),e("div",$,[z,e("select",G,[e("option",{value:"0",selected:t.id_region==0},"Selecciona una opción",8,H),e("option",{value:"1",selected:t.id_region==1}," Región de Prueba ",8,J)])])])],64))}});export{se as default};
