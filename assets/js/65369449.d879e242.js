"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[822],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(83117),i=(r(67294),r(3905));const o={sidebar_position:2,title:"Exposing Features"},a=void 0,c={unversionedId:"quick-view/save/export/index",id:"quick-view/save/export/index",title:"Exposing Features",description:"In Save Any Shape/Feature Introduction, we introduced the powerful data saving capability of Jimmer,",source:"@site/docs/quick-view/save/export/index.md",sourceDirName:"quick-view/save/export",slug:"/quick-view/save/export/",permalink:"/jimmer-doc/docs/quick-view/save/export/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/quick-view/save/export/index.md",tags:[],version:"current",lastUpdatedAt:1705151762,formattedLastUpdatedAt:"Jan 13, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Exposing Features"},sidebar:"tutorialSidebar",previous:{title:"Feature Introduction",permalink:"/jimmer-doc/docs/quick-view/save/feature"},next:{title:"Save Aggregate Root",permalink:"/jimmer-doc/docs/quick-view/save/export/root"}},s={},p=[],u={toc:p};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"../feature"},"Save Any Shape/Feature Introduction"),", we introduced the powerful data saving capability of Jimmer,",(0,i.kt)("br",{parentName:"p"}),"\n","but also pointed out that for security reasons, Jimmer dynamic entities cannot be directly used as input parameters to directly expose this capability.  "),(0,i.kt)("p",null,"To protect system security, ",(0,i.kt)("a",{parentName:"p",href:"../../../object/view/dto-language"},"DTO Language")," needs to be used to define Input DTO.",(0,i.kt)("br",{parentName:"p"}),"\n","Unlike Jimmer dynamic entities, InputDTO is static with fixed shape. Using Input DTO as the type constraint of the input parameters of remote APIs can solve security issues."))}l.isMDXComponent=!0}}]);