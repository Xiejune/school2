import{V as k}from"./VBreadcrumbs.de3382f9.js";import{r as b,a as V,o as a,c as _,b as c,d as e,e as C,w as t,V as l,f as g,F as y,g as S,h as r,i as m,j as x,k as o,t as n,l as u,P as w,Q as T,R as B,S as $,T as I,U as L,W as A,X as M,m as j,n as D}from"./index.11c7acb2.js";import{u as N}from"./teachers.4d4dff92.js";import{V as R,a as E,b as F,c as W,d as P,e as Q}from"./VCard.d98aca6f.js";const U={class:"relativeStyle",id:"TopBanner"},X=["src"],q=c("div",{class:"absoluteStyle Banner-position text-white"},[c("p",{class:"bolderStyle banner-title"},"- - - - - \u5E2B\u8CC7\u9663\u5BB9"),c("p",{class:"bolderStyle banner-sub mt-5"},"\u5C08\u4EFB\u8001\u5E2B")],-1),z={class:"absoluteStyle breadcrumbs-position"},G={__name:"BannerTeacherM",setup(h){const d=b("https://cdn.pixabay.com/photo/2016/12/15/20/28/classroom-1910012_1280.jpg"),i=V([{id:1,text:"\u9996\u9801",disabled:!0,href:"breadcrumbs_\u9996\u9801"},{id:2,text:"\u5E2B\u8CC7\u9663\u5BB9",disabled:!0,href:"breadcrumbs_\u5E2B\u8CC7\u9663\u5BB9"},{id:3,text:"\u5C08\u4EFB\u8001\u5E2B",disabled:!0,href:"breadcrumbs_\u5C08\u4EFB\u8001\u5E2B"}]);return(p,f)=>(a(),_("div",U,[c("img",{class:"banner-img d-block",src:d.value},null,8,X),q,c("div",z,[e(k,{class:"text-white d-flex justify-center bolderStyle",items:i,large:"","bg-color":"black"},null,8,["items"])])]))}},H={class:"d-none d-md-block",id:"List"},J={__name:"ListTeacherM",setup(h){b(!1);const d=V([{id:1,title:"\u5C08\u4EFB\u8001\u5E2B",to:"./teacherm",icon:"mdi-chevron-double-right",active:!0},{id:2,title:"\u517C\u4EFB\u8001\u5E2B",to:"./teachers",icon:"mdi-chevron-double-right",active:!1}]);return(i,p)=>{const f=C("router-link");return a(),_("div",H,[e(u,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(g,null,{default:t(()=>[(a(!0),_(y,null,S(d,(s,v)=>(a(),r(x,{key:v,value:s},{prepend:t(()=>[s.active===!0?(a(),r(m,{key:0,icon:s.icon,color:"#3949AB"},null,8,["icon"])):(a(),r(m,{key:1,icon:s.icon,color:"#999"},null,8,["icon"]))]),default:t(()=>[e(x,null,{default:t(()=>[s.active===!0?(a(),r(f,{key:0,class:"text-decoration-none d-block bolderStyle listContent list-active-color",to:s.to},{default:t(()=>[o(n(s.title),1)]),_:2},1032,["to"])):(a(),r(f,{key:1,class:"text-decoration-none d-block bolderStyle listContent list-color",to:s.to},{default:t(()=>[o(n(s.title),1)]),_:2},1032,["to"]))]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1})])}}},K={id:"Content-teacherItem"},O=o("mdi-label-variant"),Y=c("p",{class:"ml-5 bolderStyle"},"\u5C08\u4EFB\u8001\u5E2B",-1),Z=c("span",{class:"ml-2 card-actions-open bolderStyle"},"\u5C55\u958B",-1),ee={__name:"ContentTeacherM",setup(h){b(!1);const d=N(),{teacherMitem:i}=w(d);return(p,f)=>(a(),_("div",K,[e(u,null,{default:t(()=>[e(l,{class:"d-flex align-center content-teacherItem-title",cols:"12"},{default:t(()=>[e(m,{color:"#3949AB"},{default:t(()=>[O]),_:1}),Y]),_:1}),e(l,{class:"mt-7"},{default:t(()=>[e(u,null,{default:t(()=>[(a(!0),_(y,null,S(M(i),(s,v)=>(a(),r(l,{cols:"12",md:"6",lg:"4"},{default:t(()=>[e(R,{class:"teacher-card-maxWidth mx-auto"},{default:t(()=>[e(T,{src:s.src,cover:""},null,8,["src"]),e(E,{class:"bolderStyleIm"},{default:t(()=>[o(n(s.name),1)]),_:2},1024),e(F,{class:"card-sub bolderStyleIm"},{default:t(()=>[o(n(s.name2),1)]),_:2},1024),e(W,null,{default:t(()=>[Z,e(P),e(B,{icon:s.show?"mdi-chevron-up":"mdi-chevron-down",onClick:te=>s.show=!s.show},null,8,["icon","onClick"])]),_:2},1024),e($,null,{default:t(()=>[I(c("div",null,[e(A),e(Q,null,{default:t(()=>[e(u,{class:"d-flex flex-column exploreItem bolderStyle"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[o(n(s.education),1)]),_:2},1024),e(l,{cols:"12"},{default:t(()=>[o(n(s.expertise),1)]),_:2},1024),e(l,{cols:"12"},{default:t(()=>[o(n(s.other),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)],512),[[L,s.show]])]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]))}},ce={__name:"TeachermView",setup(h){return(d,i)=>(a(),r(j,null,{default:t(()=>[e(G),e(D,{class:"mt-9 mb-200"},{default:t(()=>[e(u,{class:"px-content2"},{default:t(()=>[e(l,{cols:"0",md:"3"},{default:t(()=>[e(J)]),_:1}),e(l,{cols:"12",md:"9"},{default:t(()=>[e(ee)]),_:1})]),_:1})]),_:1})]),_:1}))}};export{ce as default};
