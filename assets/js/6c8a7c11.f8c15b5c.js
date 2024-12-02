"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6903],{65678:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"graphql/concept","title":"Basic Concepts","description":"Concepts","source":"@site/docs/graphql/concept.mdx","sourceDirName":"graphql","slug":"/graphql/concept","permalink":"/jimmer-doc/docs/graphql/concept","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/graphql/concept.mdx","tags":[],"version":"current","lastUpdatedAt":1709146645000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Basic Concepts"},"sidebar":"tutorialSidebar","previous":{"title":"GraphQL","permalink":"/jimmer-doc/docs/graphql/"},"next":{"title":"Query","permalink":"/jimmer-doc/docs/graphql/query"}}');var a=t(74848),s=t(28453),i=t(11470),o=t(19365);const l={sidebar_position:1,title:"Basic Concepts"},c=void 0,u={},d=[{value:"Concepts",id:"concepts",level:2},{value:"Notes",id:"notes",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"concepts",children:"Concepts"}),"\n",(0,a.jsxs)(r.p,{children:["In the ",(0,a.jsx)(r.a,{href:"../spring",children:"Spring section"}),", we discussed how to implement REST services with Jimmer and automatically generate client code like TypeScript."]}),"\n",(0,a.jsxs)(r.p,{children:["In addition, Jimmer also supports another development mode to build ",(0,a.jsx)(r.a,{href:"https://graphql.org/",children:"GraphQL"})," services, which is what this article series will discuss."]}),"\n",(0,a.jsxs)(r.admonition,{type:"caution",children:[(0,a.jsx)(r.p,{children:"So far, the GraphQL protocol does not support recursive queries for self-associated properties."}),(0,a.jsxs)(r.p,{children:["Therefore, it is not possible to expose functionality like ",(0,a.jsx)(r.a,{href:"../query/object-fetcher/recursive",children:"recursive queries in object fetchers"})," through GraphQL. This is a functionality sacrifice that must currently be accepted when using GraphQL."]})]}),"\n",(0,a.jsxs)(r.p,{children:["Jimmer's support for GraphQL is based on ",(0,a.jsx)(r.a,{href:"https://spring.io/projects/spring-graphql",children:"Spring GraphQL"}),".\nSo the project needs to import both the Jimmer and Spring GraphQL Spring Boot starters, for example:"]}),"\n",(0,a.jsxs)(i.A,{groupId:"buildTool",children:[(0,a.jsx)(o.A,{value:"maven",label:"Maven",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-xml",metastring:'title="pom.xml"  ',children:"...other code omitted...\n\n<build>\n  <dependencies>\n    <dependency>\n      <groupId>org.babyfish.jimmer</groupId>\n      <artifactId>jimmer-spring-boot-starter</artifactId>\n      <version>${jimmer.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-starter-graphql</artifactId>\n      <version>${spring.boot.version}</version>\n    </dependency>\n    ...other dependencies omitted...\n  </dependencies>\n</build>\n\n...other code omitted...\n"})})}),(0,a.jsx)(o.A,{value:"gradle",label:"Gradle",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-groovy",metastring:'title="build.gradle"',children:"dependencies {\n  implementation \"org.babyfish.jimmer:jimmer-spring-boot-starter:${jimmerVersion}\"\n  implementation 'org.springframework.boot:spring-boot-starter-graphql'\n\n  ...other dependencies omitted...  \n}\n"})})})]}),"\n",(0,a.jsxs)(r.admonition,{type:"info",children:[(0,a.jsx)(r.p,{children:"If the Jimmer entity types are also defined in the GraphQL project rather than in a separate project, the preprocessor (Annotation Processor for Java, KSP for Kotlin) should also be configured in the build script."}),(0,a.jsxs)(r.p,{children:["This has already been discussed in detail in the ",(0,a.jsx)(r.a,{href:"../quick-view/get-started/generate-code",children:"Generate Code"})," article and will not be repeated here."]})]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://spring.io/projects/spring-graphql",children:"Spring GraphQL"})," is a Schema-First rather than Code-First approach.\nTherefore, developers need to create the file ",(0,a.jsx)(r.code,{children:"src/main/resources/graphql/schema.graphqls"})," in the project and define the GraphQL schema in it."]}),"\n",(0,a.jsxs)(r.p,{children:["This file is a requirement of ",(0,a.jsx)(r.a,{href:"https://spring.io/projects/spring-graphql",children:"Spring GraphQL"}),". The GraphQL schema content is a standard language that is unrelated to Jimmer, so this article will not explain it. Please refer to the ",(0,a.jsx)(r.a,{href:"https://github.com/babyfish-ct/jimmer-examples/blob/main/java/jimmer-sql-graphql/service/src/main/resources/graphql/schema.graphqls",children:"GraphQL Schema in the example"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(r.admonition,{type:"caution",children:(0,a.jsxs)(r.p,{children:["In the current version, there is a limitation that when providing GraphQL services, ",(0,a.jsx)(r.a,{href:"../mapping/advanced/calculated/formula#sql-based-calculation",children:"simple calculated properties based on SQL"})," should NOT be used."]})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>q});var n=t(96540),a=t(18215),s=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[c,d]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function j(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const r=e.currentTarget,t=l.indexOf(r),a=o[t].value;a!==n&&(c(r),i(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function x(e){let{lazy:r,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...r,...e}),(0,v.jsx)(x,{...r,...e})]})}function q(e){const r=(0,b.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(96540);const a={},s=n.createContext(a);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);