import{d as C,r,i as A,q as p,j as N,w as q,T as B,o as i,c,b as e,t as h,g as b,n as y,u as l,k as u}from"./index-07ca7dee.js";import{s as z}from"./scrollHelper-62f64ba1.js";import{u as D}from"./useAppointmentTypes-6cedbf84.js";import{u as I}from"./useFormValidation-0614fa30.js";import{v as L,a as M}from"./validationHelper-22c07218.js";import{d as S}from"./appointmentTypeModel-2c06ec7c.js";import"./api-93b42a31.js";import"./paginationHelper-8171a740.js";const E={descripcion:{rules:[{validation:m=>L(m),message:"La descripción es obligatorio."},{validation:m=>M(m,3),message:"La descripción requiere al menos tres caracteres."}]}},F={key:0},R={class:"view-name"},U=e("hr",{class:"red"},null,-1),j={class:"p-4"},G={key:0,class:"form-group"},H=e("label",{for:"clave"},"Clave",-1),J={key:0,id:"clave-small",class:"form-text text-muted app-validation"},K={class:"form-group"},O=e("label",{for:"descripcion-nivel"},"Nombramiento",-1),P={key:0,id:"descripcion-nivel-small",class:"form-text text-muted app-validation"},Q={key:1,class:"form-text text-muted app-form-message"},oe=C({__name:"AppointmentTypeDetailsView",setup(m){const _=r("Registrar Tipo de Nombramiento"),{updateAppointmentType:g,getAppointmentType:T,saveAppointmentType:x}=D(),o=r(""),d=r(!1),n=r(!1),t=r({...S}),{isValid:k,errors:s}=I(t.value,E),V=()=>{p.push({name:"listar-tipos-nombramiento"})},w=()=>{k.value&&(o.value?g(o.value,{...t.value}).then(()=>{p.push({name:"listar-tipos-nombramiento"})}).catch(()=>{n.value=!0,setTimeout(()=>{n.value=!1},3e3)}):x({...t.value}).then(()=>{p.push({name:"listar-tipos-nombramiento"})}).catch(()=>{n.value=!0,setTimeout(()=>{n.value=!1},3e3)}))};return A(()=>{var v;o.value=(v=p.currentRoute.value.params.id)==null?void 0:v.toString(),o.value?(_.value="Actualizar Tipo de Nombramiento",T(o.value).then(a=>{t.value.clave=a.clave,t.value.descripcion=a.descripcion,d.value=!0})):d.value=!0,z()}),(v,a)=>(i(),N(B,{name:"view"},{default:q(()=>[d.value?(i(),c("div",F,[e("h4",R,h(_.value),1),U,e("form",j,[o.value?u("",!0):(i(),c("div",G,[H,b(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=f=>t.value.clave=f),class:"form-control",id:"clave",placeholder:"Introduzca la clave",autocomplete:"off"},null,512),[[y,t.value.clave]]),l(s)&&l(s).clave?(i(),c("small",J,h(l(s).clave),1)):u("",!0)])),e("div",K,[O,b(e("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=f=>t.value.descripcion=f),class:"form-control",id:"descripcion-nivel",placeholder:"Introduzca el nombramiento",autocomplete:"off"},null,512),[[y,t.value.descripcion]]),l(s)&&l(s).descripcion?(i(),c("small",P,h(l(s).descripcion),1)):u("",!0)]),e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary",onClick:V}," Cancelar "),e("button",{type:"button",onClick:w,class:"btn btn-primary"}," Guardar ")]),n.value?(i(),c("small",Q," Verifique que los datos esten correctos, o no haya sido registrado previamiente. ")):u("",!0)])])):u("",!0)]),_:1}))}});export{oe as default};
