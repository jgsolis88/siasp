import{d as y,r as c,l as x,i as A,q as o,j as C,w as L,T as N,o as d,c as v,b as a,t as m,g as B,n as D,u,k as f}from"./index-f4a219e0.js";import{s as T}from"./scrollHelper-62f64ba1.js";import{a as S}from"./useLevelsArea-238e5b50.js";import{u as q}from"./useFormValidation-239e3d60.js";import"./api-b3ceef70.js";import"./paginationHelper-8171a740.js";const z={clave:"",descripcion:""},I={descripcion:{rules:[{validation:s=>s&&s.length>0,message:"La descripción es requerida."},{validation:s=>s&&s.length>3,message:"La descripción debe tener al menos tres caracteres."}]}},M={key:0},R={class:"view-name"},j=a("hr",{class:"red"},null,-1),E={class:"p-4"},F={class:"form-group"},G=a("label",{for:"descripcion-nivel"},"Descripción",-1),U={key:0,id:"descripcion-nivel-small",class:"form-text text-muted app-validation"},W=y({__name:"LevelsAreaDetailsView",setup(s){const p=c("Registrar Nivel por Área"),{updateLevelsArea:h,getLevelArea:_,saveLevelsArea:b}=S(),t=c(""),r=c(!1),e=x(z),{isValid:g,errors:n}=q(e,I),w=()=>o.push({name:"listar-niveles-area"}),V=()=>{g.value&&(t.value&&e.descripcion.length>0&&h(e.clave,{...e}).then(()=>o.push({name:"listar-niveles-area"})),!t.value&&e.descripcion.length>0&&b({...e}).then(()=>o.push({name:"listar-niveles-area"})))};return A(()=>{var l;t.value=(l=o.currentRoute.value.params.id)==null?void 0:l.toString(),t.value?(p.value="Actualizar Nivel por Área",_(t.value).then(i=>{e.clave=i.clave,e.descripcion=i.descripcion,r.value=!0})):r.value=!0,T()}),(l,i)=>(d(),C(N,{name:"view"},{default:L(()=>[r.value?(d(),v("div",M,[a("h4",R,m(p.value),1),j,a("form",E,[a("div",F,[G,B(a("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=k=>e.descripcion=k),class:"form-control",id:"descripcion-nivel",placeholder:"Introduzca la descripción del nivel",autocomplete:"off"},null,512),[[D,e.descripcion]]),u(n)&&u(n).descripcion?(d(),v("small",U,m(u(n).descripcion),1)):f("",!0)]),a("div",{class:"modal-footer"},[a("button",{type:"button",class:"btn btn-secondary",onClick:w},"Cancelar"),a("button",{type:"button",onClick:V,class:"btn btn-primary"},"Guardar")])])])):f("",!0)]),_:1}))}});export{W as default};
