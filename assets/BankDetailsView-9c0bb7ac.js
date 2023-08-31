import{d as w,r as p,l as C,i as E,q as i,j as D,w as I,T as N,o as c,c as b,b as a,t as f,g as _,n as k,u as n,k as h,z as T}from"./index-7b270076.js";import{s as q}from"./scrollHelper-62f64ba1.js";import{u as M}from"./useBanks-4a067588.js";import{u as S}from"./useFormValidation-3bfe7101.js";import{d as U}from"./bankModel-9561c2b4.js";import"./api-b8e6f8bb.js";import"./paginationHelper-8171a740.js";const L={nombre:{rules:[{validation:s=>s&&s.length>0,message:"El nombre es requerido."},{validation:s=>s&&s.length>3,message:"El nombre debe tener al menos tres caracteres."}]},descripcion:{rules:[{validation:s=>s&&s.length>0,message:"La descripción es requerida."},{validation:s=>s&&s.length>3,message:"La descripción debe tener al menos tres caracteres."}]}},R={key:0},j={class:"view-name"},A=a("hr",{class:"red"},null,-1),F={class:"p-4"},G={class:"form-group"},H=a("label",{for:"nombre-operacion"},"Nombre",-1),J={key:0,id:"name-nivel-small",class:"form-text text-muted app-validation"},K={class:"form-group"},O=a("label",{for:"nombre-operacion"},"Descripción",-1),P={key:0,id:"descripcion-nivel-small",class:"form-text text-muted app-validation"},Q={class:"form-check"},W=a("label",{class:"form-check-label pl-4",for:"nombre"},"Es sucursal",-1),oe=w({__name:"BankDetailsView",setup(s){const v=p("Registrar Banco"),{saveBank:g,updateBank:x,getBankById:y}=M(),r=p(""),d=p(!1),e=C(U),{isValid:B,errors:t}=S(e,L),V=()=>{u(),i.push({name:"listar-bancos"})},z=()=>{B.value&&(r.value?x(r.value,{...e}).then(()=>{u(),i.push({name:"listar-bancos"})}):g({...e}).then(()=>{u(),i.push({name:"listar-bancos"})}))},u=()=>{e.nombre="",e.descripcion="",e.sucursal_plaza=!1};return E(()=>{var m;r.value=(m=i.currentRoute.value.params.id)==null?void 0:m.toString(),r.value?(v.value="Actualizar Banco",y(r.value).then(o=>{e.nombre=o.nombre,e.descripcion=o.descripcion,e.sucursal_plaza=o.sucursal_plaza,d.value=!0})):d.value=!0,q()}),(m,o)=>(c(),D(N,{name:"view"},{default:I(()=>[d.value?(c(),b("div",R,[a("h4",j,f(v.value),1),A,a("form",F,[a("div",G,[H,_(a("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=l=>e.nombre=l),class:"form-control",id:"name-bank",placeholder:"Introduzca el nombre",autocomplete:"off"},null,512),[[k,e.nombre]]),n(t)&&n(t).nombre?(c(),b("small",J,f(n(t).nombre),1)):h("",!0)]),a("div",K,[O,_(a("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=l=>e.descripcion=l),class:"form-control",id:"description-bank",placeholder:"Introduzca la descripción",autocomplete:"off"},null,512),[[k,e.descripcion]]),n(t)&&n(t).descripcion?(c(),b("small",P,f(n(t).descripcion),1)):h("",!0)]),a("div",Q,[_(a("input",{class:"form-check-input",placeholder:"Es sucursal",name:"sucursal_plaza",id:"sucursal_plaza",type:"checkbox","onUpdate:modelValue":o[2]||(o[2]=l=>e.sucursal_plaza=l)},null,512),[[T,e.sucursal_plaza]]),W]),a("div",{class:"modal-footer"},[a("button",{type:"button",class:"btn btn-secondary",onClick:V}," Cancelar "),a("button",{type:"button",onClick:z,class:"btn btn-primary"}," Guardar ")])])])):h("",!0)]),_:1}))}});export{oe as default};
