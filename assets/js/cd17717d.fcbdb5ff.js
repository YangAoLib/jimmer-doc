"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(34334);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),o=n(67294),r=n(34334),l=n(72389),i=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:b,className:y}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,o.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=b){const e=v[b];null!=e&&e!==w&&g.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==w&&(j(t),T(a),null!=b&&N(b,String(a)))},q=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},y)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:q,onFocus:C,onClick:C},l,{className:(0,r.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,o.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},64675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(83117),o=(n(67294),n(3905)),r=n(65488),l=n(85162);const i={sidebar_position:2,title:"Table Join Optimization"},s=void 0,u={unversionedId:"query/paging/unnecessary-join",id:"query/paging/unnecessary-join",title:"Table Join Optimization",description:"In the previous article, we mentioned that Jimmer can not only auto-generate count-query from data-query, but also auto-optimize the count-query.",source:"@site/docs/query/paging/unnecessary-join.mdx",sourceDirName:"query/paging",slug:"/query/paging/unnecessary-join",permalink:"/jimmer-doc/docs/query/paging/unnecessary-join",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/paging/unnecessary-join.mdx",tags:[],version:"current",lastUpdatedAt:1731427770,formattedLastUpdatedAt:"Nov 12, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Table Join Optimization"},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/jimmer-doc/docs/query/paging/usage"},next:{title:"Reverse Sorting Optimization",permalink:"/jimmer-doc/docs/query/paging/reverse-sorting"}},c={},p=[{value:"Optimization Rules",id:"optimization-rules",level:2},{value:"Non-Optimizable Scenario",id:"non-optimizable-scenario",level:2},{value:"Optimizable Scenario",id:"optimizable-scenario",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the previous article, we mentioned that Jimmer can not only auto-generate ",(0,o.kt)("inlineCode",{parentName:"p"},"count-query")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"data-query"),", but also auto-optimize the ",(0,o.kt)("inlineCode",{parentName:"p"},"count-query"),"."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"count-query")," only cares about total row count regardless of order and format, some table joins in the original ",(0,o.kt)("inlineCode",{parentName:"p"},"data-query")," may not need to be copied over to ",(0,o.kt)("inlineCode",{parentName:"p"},"count-query"),".  "),(0,o.kt)("p",null,"Jimmer will auto-optimize ",(0,o.kt)("inlineCode",{parentName:"p"},"count-query")," to copy over as few table joins as possible from the original data-query."),(0,o.kt)("h2",{id:"optimization-rules"},"Optimization Rules"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Table joins used by the where clause cannot be optimized."),(0,o.kt)("p",{parentName:"li"},"That is, ",(0,o.kt)("strong",{parentName:"p"},"only")," table joins used solely by the ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"order by")," clause of the top-level query can be optimized.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Table joins based on collection associations (one-to-many, many-to-many) cannot be optimized."),(0,o.kt)("p",{parentName:"li"},"Collection associations lead to duplicate data, thus affecting row count. So these table joins must be copied to ",(0,o.kt)("inlineCode",{parentName:"p"},"count-query")," and cannot be optimized.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Table joins based on reference associations (one-to-one, many-to-one) may be optimized, if any of the following conditions is met:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Join type is left outer join")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Although join type is inner join, the association is based on non-null real foreign key."),(0,o.kt)("p",{parentName:"li"},"  So-called real foreign key means there is a foreign key constraint in the database. See ",(0,o.kt)("a",{parentName:"p",href:"../../mapping/base/foreignkey"},"Real vs Fake Foreign Keys"),"."))))),(0,o.kt)("p",null,"In summary, to determine whether a table join in the original data-query can be automatically removed in the count-query, use the following optimization rules: "),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"4"},"AND"),(0,o.kt)("td",{colspan:"2"},"Is based on reference association, i.e. many-to-one or one-to-one")),(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"},"Is used ",(0,o.kt)("b",null,"solely")," by select or orderBy clause of top-level query")),(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"2"},"OR"),(0,o.kt)("td",null,"Is left outer join")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Association is non-null and foreign key constraint exists in database"))),(0,o.kt)("h2",{id:"non-optimizable-scenario"},"Non-Optimizable Scenario"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nConfigurableRootQuery<BookTable, Book> query = sqlClient\n    .createQuery(book)\n    .where(\n        book.price().between(\n            new BigDecimal(20), \n            new BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    .orderBy(book.store().name())  \n    .orderBy(book.name())\n    .select(book);\n\nint rowCount = query.fetchUnlimitedCount(); \n"))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val query = sqlClient.createQuery(Book::class) {\n    where(\n        table.price.between(\n            BigDecimal(20),\n            BigDecimal(30)  \n        )\n    )\n    // highlight-next-line \n    orderBy(table.store.name) // \u03b1\n    orderBy(table.name)\n    select(table)\n}  \n\nval rowCount = query.fetchUnlimitedCount()\n")))),(0,o.kt)("p",null,"Note \u03b1:"),(0,o.kt)("p",null,"Although ",(0,o.kt)("inlineCode",{parentName:"p"},"table.store()")," is only used by ",(0,o.kt)("inlineCode",{parentName:"p"},"orderBy")," clause without being used by where clause,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"table.store()")," is inner join"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Book.store")," association is nullable")),(0,o.kt)("p",null,"So the optimization rules do not apply. The count-query still needs to retain ",(0,o.kt)("inlineCode",{parentName:"p"},"table.store()")," and ultimately generates JOIN clause in SQL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    count(tb_1_.ID)\nfrom BOOK as tb_1_\n/* highlight-start */  \ninner join BOOK_STORE as tb_2_\n    on tb_1_.STORE_ID = tb_2_.ID \n/* highlight-end */\nwhere tb_1_.PRICE between ? and ?\n")),(0,o.kt)("h2",{id:"optimizable-scenario"},"Optimizable Scenario"),(0,o.kt)("p",null,"For the unoptimizable case discussed above, any of the following modifications will enable optimization:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"Book.store")," association to non-null"),(0,o.kt)("li",{parentName:"ol"},"Use left outer join")),(0,o.kt)("p",null,"Here we choose the second approach, left outer join:"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nConfigurableRootQuery<BookTable, Book> query = sqlClient\n    .createQuery(book)\n    .where(\n        book.price().between(\n            new BigDecimal(20),\n            new BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    .orderBy(book.store(JoinType.LEFT).name())\n    .orderBy(book.name()) \n    .select(book);\n\nint rowCount = query.fetchUnlimitedCount();\n"))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val query = sqlClient.createQuery(Book::class) {\n    where(\n        table.price.between(\n            BigDecimal(20),\n            BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    orderBy(table.`store?`.name) // \u03b1  \n    orderBy(table.name)\n    select(table)\n}\n\nval rowCount = query.fetchUnlimitedCount() \n")))),(0,o.kt)("p",null,"Now optimization can take effect. The final count-query generates SQL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    count(tb_1_.ID)  \nfrom BOOK as tb_1_\nwhere tb_1_.PRICE between ? and ?\n")))}d.isMDXComponent=!0}}]);