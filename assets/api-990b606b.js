import{M as d,N as l,O as w,z as g,P as m}from"./index-6edde6e7.js";const T={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},method:"GET"},f=()=>"https://74.208.163.101/api/v1/",y=e=>new Promise(t=>setTimeout(t,e)),E=(e,t,n,a,r)=>{r&&console.log("There was problem processing your request. Check with the sys admin.")},R={...T},$=f(),c=async(e,t,n={},a={})=>{const r=d();try{r.initTransaction();let s={...R};s.method=t,l()&&(s.headers.Authorization=`Bearer ${w()}`),Object.keys(n).length>0&&(s.body=JSON.stringify(n));const h=Object.keys(a).map(i=>encodeURIComponent(i)+"="+encodeURIComponent(a[i])).join("&"),u=Object.keys(a).length>0?`${e}?`+h:e,o=await fetch(`${$+u}`,s);if(o.status>=500)throw new Error(`There was a 5xx error on ${e} with method ${t}. Check with the sys admin.`);if(o.status>=400&&o.status!==401&&o.status<500)throw new Error(`There was a 4xx error on ${e} with method ${t}. Check your request.`);if(o.status===401)throw g(),new Error("Please, check your credentials and try again.");const p=o.headers.get("content-type")==="application/json"?await o.json():{};return await y(m),r.endTransaction(),Promise.resolve(p)}catch(s){return r.endTransaction(),E(e,t,n,a,s),Promise.reject(s)}},O=(e,t={})=>c(e,"GET",{},t),j=(e="",t={})=>c(e,"POST",t),P=(e,t,n)=>c(`${e}/${t}`,"PUT",n),C=(e,t)=>c(`${e}/${t}`,"DELETE",{},{});export{P as a,C as d,O as g,j as p};
