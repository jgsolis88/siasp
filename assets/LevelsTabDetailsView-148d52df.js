import{d as C,r as b,l as N,i as B,q as c,j as S,w as q,T as z,o as n,c as d,b as a,t as _,g as h,n as g,u as r,k as u}from"./index-7b270076.js";import{s as D}from"./scrollHelper-62f64ba1.js";import{u as I}from"./useLevelsTab-62e3100a.js";import{d as E}from"./levelTab-ad0c3610.js";import{u as M}from"./useFormValidation-3bfe7101.js";import{v as R,a as T}from"./validationHelper-22c07218.js";import"./api-b8e6f8bb.js";import"./paginationHelper-8171a740.js";const U={clave:{rules:[{validation:t=>R(t),message:"La clave es obligatorio."},{validation:t=>T(t,3),message:"La clave requiere al menos tres caracteres."}]},clave_tabulador:{rules:[{validation:t=>!!t,message:"La clave del tabulador es obligatoria."},{validation:t=>T(t,1),message:"La clave del tabulador requiere al menos tres caracteres."}]}},j={key:0},A={class:"view-name"},F=a("hr",{class:"red"},null,-1),G={class:"p-4"},H={key:0,class:"form-group"},J=a("label",{for:"nombre-nivel"},"Clave",-1),K={key:0,id:"nombre-nivel-small",class:"form-text text-muted app-validation"},O={class:"form-group"},P=a("label",{for:"descripcion-nivel"},"Tabulador",-1),Q={key:0,id:"descripcion-nivel-small",class:"form-text text-muted app-validation"},le=C({__name:"LevelsTabDetailsView",setup(t){const f=b("Registrar Nivel por Tabulador"),{updateLevelsTab:y,getLevelTab:V,saveLevelsTab:k}=I(),i=b(""),v=b(!1),e=N(E),{isValid:x,errors:o}=M(e,U),L=()=>{m(),c.push({name:"listar-niveles-tabulador"})},w=()=>{x.value&&(i.value?y(e.clave,{...e}).then(()=>{m(),c.push({name:"listar-niveles-tabulador"})}):k({...e}).then(()=>{m(),c.push({name:"listar-niveles-tabulador"})}))},m=()=>{e.clave="",e.clave_tabulador=""};return B(()=>{var p;i.value=(p=c.currentRoute.value.params.id)==null?void 0:p.toString(),i.value?(f.value="Actualizar Nivel por Tabulador",V(i.value).then(l=>{var s;e.clave=l.clave,e.clave_tabulador=(s=l.clave_tabulador)==null?void 0:s.toString(),v.value=!0})):v.value=!0,D()}),(p,l)=>(n(),S(z,{name:"view"},{default:q(()=>[v.value?(n(),d("div",j,[a("h4",A,_(f.value),1),F,a("form",G,[i.value?u("",!0):(n(),d("div",H,[J,h(a("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=s=>e.clave=s),class:"form-control",id:"nombre-nivel",placeholder:"Introduzca el nombre del nivel",autocomplete:"off"},null,512),[[g,e.clave]]),r(o)&&r(o).clave?(n(),d("small",K,_(r(o).clave),1)):u("",!0)])),a("div",O,[P,h(a("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=s=>e.clave_tabulador=s),class:"form-control",id:"descripcion-nivel",placeholder:"Introduzca la descripción del nivel",autocomplete:"off"},null,512),[[g,e.clave_tabulador]]),r(o)&&r(o).clave_tabulador?(n(),d("small",Q,_(r(o).clave_tabulador),1)):u("",!0)]),a("div",{class:"modal-footer"},[a("button",{type:"button",class:"btn btn-secondary",onClick:L}," Cancelar "),a("button",{type:"button",onClick:w,class:"btn btn-primary"}," Guardar ")])])])):u("",!0)]),_:1}))}});export{le as default};
