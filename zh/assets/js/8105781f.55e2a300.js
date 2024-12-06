"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9595],{56778:(e,n,a)=>{a.d(n,{A:()=>s});a(96540);var t=a(18215);const r={tabItem:"tabItem_Ymn6"};var o=a(74848);function s(e){let{children:n,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:a,children:n})}},37244:(e,n,a)=>{a.d(n,{A:()=>S});var t=a(96540),r=a(18215),o=a(44319),s=a(56347),l=a(94280),i=a(73024),c=a(58417),u=a(44031);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function b(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,o=h(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,d]=p({queryString:a,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=c??b;return m({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=a(46916);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function k(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,a=i.indexOf(n),r=l[a].value;r!==t&&(c(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function x(e){let{lazy:n,children:a,selectedValue:o}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(k,{...n,...e}),(0,v.jsx)(x,{...n,...e})]})}function S(e){const n=(0,f.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},3865:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"showcase/fetch-association/deeper-association","title":"2.3 \u66f4\u6df1\u5173\u8054","description":"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/fetch-association/deeper-association.mdx","sourceDirName":"showcase/fetch-association","slug":"/showcase/fetch-association/deeper-association","permalink":"/jimmer-doc/zh/docs/showcase/fetch-association/deeper-association","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/fetch-association/deeper-association.mdx","tags":[],"version":"current","lastUpdatedAt":1731427770000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"2.3 \u66f4\u6df1\u5173\u8054"},"sidebar":"tutorialSidebar","previous":{"title":"2.4 \u5173\u8054Id","permalink":"/jimmer-doc/zh/docs/showcase/fetch-association/associated-id"},"next":{"title":"3. \u9012\u5f52\u67e5\u8be2","permalink":"/jimmer-doc/zh/docs/showcase/recursive-query/"}}');var r=a(74848),o=a(28453),s=a(37244),l=a(56778);const i={sidebar_position:3,title:"2.3 \u66f4\u6df1\u5173\u8054"},c=void 0,u={},d=[{value:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",level:2},{value:"\u67e5\u8be2\u9759\u6001DTO",id:"\u67e5\u8be2\u9759\u6001dto",level:2}];function h(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",children:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53"}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(l.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'BookStoreTable table = BookStoreTable.$;\n\nList<BookStore> stores = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("MANNING"))\n    .select(\n        table.fetch(\n            BookStoreFetcher.$\n                .allScalarFields()\n                .books( \u2776\n                    BookFetcher.$\n                        .allScalarFields()\n                        .authors( \u2777\n                            AuthorFetcher.$\n                                .allScalarFields()\n                        )\n                )\n        )\n    )\n    .execute();\n'})})}),(0,r.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(BookStore::class) {\n        where(table.name  eq "MANNING")\n        select(\n            table.fetchBy {\n                allScalarFields()\n                books { \u2776\n                    allScalarFields()\n                    authors { \u2777\n                        allScalarFields()\n                    }\n                }\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u5f97\u5230\u5982\u4e0b\u7684\u6570\u636e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":2,\n        "name":"MANNING",\n        "website":null,\n        "books":[ \u2776\n            {\n                "id":12,\n                "name":"GraphQL in Action",\n                "edition":3,\n                "price":80,\n                "authors":[ \u2777\n                    {\n                        "id":5,\n                        "firstName":"Samer",\n                        "lastName":"Buna",\n                        "gender":"MALE"\n                    }\n                ]\n            },\n            {\n                "id":11,\n                "name":"GraphQL in Action",\n                "edition":2,\n                "price":81,\n                "authors":[ \u2777\n                    {\n                        "id":5,\n                        "firstName":"Samer",\n                        "lastName":"Buna",\n                        "gender":"MALE"\n                    }\n                ]\n            },\n            {\n                "id":10,\n                "name":"GraphQL in Action",\n                "edition":1,\n                "price":82,\n                "authors":[ \u2777\n                    {\n                        "id":5,\n                        "firstName":"Samer",\n                        "lastName":"Buna",\n                        "gender":"MALE"\n                    }\n                ]\n            }\n        ]\n    }\n]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u8be2\u9759\u6001dto",children:"\u67e5\u8be2\u9759\u6001DTO"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"src/main/dto"}),"\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa\u4efb\u4f55\u4e00\u4e2a\u6269\u5c55\u540d\u4e3adto\u7684\u6587\u4ef6\uff0c\u7f16\u8f91\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"export com.yourcompany.yourproject.model.BookStore\n    -> package com.yourcompany.yourproject.model.dto\n\nBookStoreView {\n    #allScalars(this)\n    books { \u2776\n        #allScalars(this)\n        authors { \u2777\n            #allScalars(this)\n        }\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7f16\u8bd1\u9879\u76ee\uff0c\u751f\u6210Java/Kotlin\u7c7b\u578b",(0,r.jsx)(n.code,{children:"BookStoreView"})]}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(l.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'BookStoreTable table = BookStoreTable.$;\n\nList<BookStoreView> stores = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("MANNING"))\n    .select(\n        table.fetch(BookStoreView.class)\n    )\n    .execute();\n'})})}),(0,r.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val stores = sqlClient\n    .createQuery(BookStore::class) {\n        where(table.name  eq "Learning GraphQL")\n        select(\n            table.fetch(BookStoreView::class)\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u5f97\u5230\u5982\u4e0b\u7ed3\u679c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"[\n    BookStoreView(\n        id=2, \n        name=MANNING, \n        website=null, \n        books=[\n            BookStoreView.TargetOf_books(\n                id=12, \n                name=GraphQL in Action, \n                edition=3, \n                price=80.00, \n                authors=[\n                    BookStoreView.TargetOf_books.TargetOf_authors_2(\n                        id=5, \n                        firstName=Samer, \n                        lastName=Buna, \n                        gender=MALE\n                    )\n                ]\n            ), \n            BookStoreView.TargetOf_books(\n                id=11, \n                name=GraphQL in Action, \n                edition=2, \n                price=81.00, \n                authors=[\n                    BookStoreView.TargetOf_books.TargetOf_authors_2(\n                        id=5, \n                        firstName=Samer, \n                        lastName=Buna, \n                        gender=MALE\n                    )\n                ]\n            ), \n            BookStoreView.TargetOf_books(\n                id=10, \n                name=GraphQL in Action, \n                edition=1, \n                price=82.00, \n                authors=[\n                    BookStoreView.TargetOf_books.TargetOf_authors_2(\n                        id=5, \n                        firstName=Samer, \n                        lastName=Buna, \n                        gender=MALE\n                    )\n                ]\n            )\n        ]\n    )\n]\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>l});var t=a(96540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);