"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6282],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>c});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=t.createContext({}),u=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=u(e.components);return t.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=l,N=d["".concat(m,".").concat(c)]||d[c]||s[c]||r;return a?t.createElement(N,i(i({ref:n},p),{},{components:a})):t.createElement(N,i({ref:n},p))}));function c(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,n,a)=>{a.d(n,{Z:()=>i});var t=a(67294),l=a(34334);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:a,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},n)}},65488:(e,n,a)=>{a.d(n,{Z:()=>c});var t=a(83117),l=a(67294),r=a(34334),i=a(72389),o=a(67392),m=a(7094),u=a(12466);const p="tabList__CuJ",s="tabItem_LNqP";function d(e){var n;const{lazy:a,block:i,defaultValue:d,values:c,groupId:N,className:k}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??h.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),b=(0,o.l)(g,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,m.U)(),[T,_]=(0,l.useState)(f),I=[],{blockElementScrollPositionUntilNextRender:A}=(0,u.o5)();if(null!=N){const e=v[N];null!=e&&e!==T&&g.some((n=>n.value===e))&&_(e)}const x=e=>{const n=e.currentTarget,a=I.indexOf(n),t=g[a].value;t!==T&&(A(n),_(t),null!=N&&y(N,String(t)))},E=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{const n=I.indexOf(e.currentTarget)+1;a=I[n]??I[0];break}case"ArrowLeft":{const n=I.indexOf(e.currentTarget)-1;a=I[n]??I[I.length-1];break}}null==(n=a)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},g.map((e=>{let{value:n,label:a,attributes:i}=e;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>I.push(e),onKeyDown:E,onFocus:x,onClick:x},i,{className:(0,r.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":T===n})}),a??n)}))),a?(0,l.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function c(e){const n=(0,i.Z)();return l.createElement(d,(0,t.Z)({key:String(n)},e))}},5173:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var t=a(83117),l=(a(67294),a(3905)),r=a(65488),i=a(85162);const o={sidebar_position:1,title:"\u7b80\u5355\u8ba1\u7b97"},m=void 0,u={unversionedId:"mapping/advanced/calculated/formula",id:"mapping/advanced/calculated/formula",title:"\u7b80\u5355\u8ba1\u7b97",description:"\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027\u662f\u4f7f\u7528@org.babyfish.jimmer.sql.Formula\u58f0\u660e\u7684\u5c5e\u6027\uff0c\u6709\u4e24\u8005\u7528\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/calculated/formula.mdx",sourceDirName:"mapping/advanced/calculated",slug:"/mapping/advanced/calculated/formula",permalink:"/jimmer-doc/zh/docs/mapping/advanced/calculated/formula",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/calculated/formula.mdx",tags:[],version:"current",lastUpdatedAt:1711847179,formattedLastUpdatedAt:"2024\u5e743\u670831\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u7b80\u5355\u8ba1\u7b97"},sidebar:"tutorialSidebar",previous:{title:"\u8ba1\u7b97\u5c5e\u6027",permalink:"/jimmer-doc/zh/docs/mapping/advanced/calculated/"},next:{title:"\u590d\u6742\u8ba1\u7b97",permalink:"/jimmer-doc/zh/docs/mapping/advanced/calculated/transient"}},p={},s=[{value:"1. \u57fa\u4e8eJava/Kotlin\u7684\u8ba1\u7b97",id:"1-\u57fa\u4e8ejavakotlin\u7684\u8ba1\u7b97",level:2},{value:"\u4f9d\u8d56\u666e\u901a\u5c5e\u6027",id:"\u4f9d\u8d56\u666e\u901a\u5c5e\u6027",level:3},{value:"\u4f9d\u8d56Embbeddable",id:"\u4f9d\u8d56embbeddable",level:3},{value:"\u4f9d\u8d56\u5173\u8054\u5c5e\u6027",id:"\u4f9d\u8d56\u5173\u8054\u5c5e\u6027",level:3},{value:"2. \u57fa\u4e8eSQL\u7684\u8ba1\u7b97",id:"2-\u57fa\u4e8esql\u7684\u8ba1\u7b97",level:2},{value:"\u6bd4\u8f83",id:"\u6bd4\u8f83",level:2}],d={toc:s};function c(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027\u662f\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.Formula"),"\u58f0\u660e\u7684\u5c5e\u6027\uff0c\u6709\u4e24\u8005\u7528\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8eJava/Kotlin\u7684\u8ba1\u7b97\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8eSQL\u7684\u8ba1\u7b97\u5c5e\u6027")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027\u4e3a\u5b9e\u73b0\u7b80\u5355\u800c\u5feb\u901f\u7684\u8ba1\u7b97\u800c\u8bbe\u8ba1\uff0c\u5982\u679c\u9700\u8981\u590d\u6742\u7684\u8ba1\u7b97\uff0c\u8bf7\u91c7\u7528",(0,l.kt)("a",{parentName:"p",href:"./transient"},"\u590d\u6742\u8ba1\u7b97\u5c5e\u6027"))),(0,l.kt)("p",null,"\u5728",(0,l.kt)("a",{parentName:"p",href:"/jimmer-doc/zh/docs/quick-view/get-started/define-entity"},"\u5b9a\u4e49\u5b9e\u4f53"),"\u4e00\u6587\u4e2d\uff0c\u6211\u4eec\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Author"),"\u5b9a\u4e49\u4e86\u4e24\u4e2a\u5b57\u6bb5\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"lastName"),"\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Author"),"\u6dfb\u52a0\u4e00\u4e2a\u53eb\u65b0\u5c5e\u6027",(0,l.kt)("inlineCode",{parentName:"p"},"fullName"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"fullName = firstName + ' ' + lastName\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u7528\u4e24\u8005\u4e0d\u540c\u7684\u65b9\u5f0f\uff0c\u5373\u57fa\u4e8eJava/Kotlin\u7684\u8ba1\u7b97\u548c\u57fa\u4e8eSQL\u7684\u8ba1\u7b97\uff0c\u6765\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"p"},"Author.fullName")),(0,l.kt)("h2",{id:"1-\u57fa\u4e8ejavakotlin\u7684\u8ba1\u7b97"},"1. \u57fa\u4e8eJava/Kotlin\u7684\u8ba1\u7b97"),(0,l.kt)("h3",{id:"\u4f9d\u8d56\u666e\u901a\u5c5e\u6027"},"\u4f9d\u8d56\u666e\u901a\u5c5e\u6027"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Author {\n\n    String firstName();\n\n    String lastName();\n\n    // highlight-next-line\n    @Formula(dependencies = {"firstName", "lastName"})\n    default String fullName() {\n        return firstName() + \' \' + lastName();\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Author {\n\n    val firstName: String\n\n    val lastName: String\n\n    // highlight-next-line\n    @Formula(dependencies = ["firstName", "lastName"])\n    val fullName: String\n        get() = "$firstName $lastName"\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n')))),(0,l.kt)("p",null,"\u4e0d\u96be\u53d1\u73b0\uff0c\u57fa\u4e8eJava/Kotlin\u7684\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027\u6709\u4ee5\u4e0b\u7279\u5f81\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c5e\u6027\u4e0d\u662f\u62bd\u8c61\u7684(Java\u4e0b\u9700\u8981\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"default"),"\u5173\u952e\u5b57)\uff0c\u76f4\u63a5\u7ed9\u51fa\u8ba1\u7b97\u903b\u8f91\u5b9e\u73b0\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"@Formula"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u88ab\u6307\u5b9a\uff0c\u8868\u793a\u5f53\u524d\u5c5e\u6027\u4f9d\u8d56\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"Author.firstName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Author.lastName"),"\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5373\uff0c\u52a8\u6001\u5b9e\u4f53\u5fc5\u987b\u786e\u4fdd\u540c\u65f6\u5177\u5907",(0,l.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"lastName"),"\u5c5e\u6027\u624d\u53ef\u4ee5\u8ba1\u7b97",(0,l.kt)("inlineCode",{parentName:"p"},"fullName")))),(0,l.kt)("p",null,"\u7528\u6cd5\u5982\u4e0b"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Author author = authorRepository.findNullable(\n    1L,\n    Fetchers.AUTHOR_FETCHER\n        //\u67e5\u8be2id(\u9690\u542b+\u5f3a\u5236)\u548cfullName\n        // highlight-next-line\n        .fullName() \n);\nSystem.out.println(author);\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val author = authorRepository.findNullable(\n    1L,\n    newFetcher(Auhtor::class).by {\n        //\u67e5\u8be2id(\u9690\u542b+\u5f3a\u5236)\u548cfullName\n        // highlight-next-line\n        fullName() \n    }\n);\nprintln(author)\n")))),(0,l.kt)("p",null,"\u6267\u884c\u7684SQL\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    /* highlight-start */\n    tb_1_.FIRST_NAME, \n    tb_1_.LAST_NAME \n    /* highlight-end */\nfrom AUTHOR as tb_1_ \n    where tb_1_.ID = ?\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fullName"),"\u662f\u8ba1\u7b97\u5c5e\u6027\uff0c\u5728\u6570\u636e\u5e93\u4e2d\u65e0\u5bf9\u5e94\u5b57\u6bb5\uff0c\u4f46\u5176\u4f9d\u8d56\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"lastName"),"\uff0c\n\u6240\u4ee5\u6b64SQL\u67e5\u8be2",(0,l.kt)("inlineCode",{parentName:"p"},"FIRST_NAME"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"LAST_NAME"),"\uff0c\u8ba9\u5176\u4f9d\u8d56\u7684\u5c5e\u6027\u5b58\u5728\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u770b\u770b\u4ee3\u7801\u4e2d\u6253\u5370\u4f1a\u8f93\u51fa\u4ec0\u4e48"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"id":1,"fullName":"Eve Procello"}\n')),(0,l.kt)("p",null,"\u6211\u4eec\u770b\u5230\uff0cJackson\u5e8f\u5217\u5316\uff08\u5b9e\u4f53\u5bf9\u8c61\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"toString"),"\u65b9\u6cd5\u662f\u5e8f\u5217\u5316\u7684\u4e00\u79cd\u5feb\u6377\u65b9\u5f0f\uff09\u540e\u53ea\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"fullName"),"\uff0c\u4f46\u6ca1\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"lastName"),"\u3002"),(0,l.kt)("p",null,"\u8fd9\u662f\uff0c\u56e0\u4e3a\u5bf9\u8c61\u6293\u53d6\u5668\u56e0\u6293\u53d6",(0,l.kt)("inlineCode",{parentName:"p"},"fullName"),"\u800c\u5bfc\u81f4",(0,l.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"lastName"),"\u88ab\u95f4\u63a5\u6293\u53d6\uff0c\u4ed6\u4eec\u5e76\u672a\u88ab\u76f4\u63a5\u6293\u53d6\u3002"),(0,l.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u867d\u7136\u52a8\u6001\u5bf9\u8c61\u5177\u5907",(0,l.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"lastName"),"\uff0c\u4f46\u5b83\u4eec\u88ab\u6807\u8bb0\u6210\u5bf9Jackson\u4e0d\u53ef\u89c1\u7684\u72b6\u6001\uff0c\u4e0d\u4f1a\u51fa\u73b0\u5728Jackson\u5e8f\u5217\u5316\u7ed3\u679c\u4e2d\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8ba9\u5bf9\u8c61\u6293\u53d6\u5668\u76f4\u63a5\u6293\u53d6",(0,l.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"lastName"),"\uff0c\u90a3\u4e48\u5b83\u4eec\u4e00\u5b9a\u4f1a\u51fa\u73b0\u5728\u5e8f\u5217\u5316\u7ed3\u679c\u4e2d\u3002\u8bfb\u8005\u53ef\u4ee5\u81ea\u884c\u8bd5\u9a8c\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002")),(0,l.kt)("h3",{id:"\u4f9d\u8d56embbeddable"},"\u4f9d\u8d56Embbeddable"),(0,l.kt)("p",null,"\u5047\u8bbe\u6709\u4e00\u4e2aEmbeddable\u7c7b\u578b"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="NameInfo.java"',title:'"NameInfo.java"'},"@Embeddable\npublic interface NameInfo {\n    String firstName();\n    String lastName();\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="NameInfo.kt"',title:'"NameInfo.kt"'},"@Embeddable\ninterface NameInfo {\n    val firstName: String\n    val lastName: String\n}\n")))),(0,l.kt)("p",null,"\u5982\u679c\u67d0\u5b9e\u4f53\u4f7f\u7528\u4e86\u6b64Embeddable\u7c7b\u578b\uff0c\u90a3\u4e48\u5b9e\u4f53\u5c5e\u6027\u53ef\u4ee5\u4f9d\u8d56\u5176\u5185\u90e8\u5c5e\u6027\uff0c\u4f8b\u5982"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'@Entity\npublic interface Author {\n\n    NameInfo nameInfo();\n\n    // highlight-next-line\n    @Formula(dependencies = {"nameInfo.firstName", "nameInfo.lastName"})\n    // \u4e5f\u53ef\u4ee5\u5199\u6210\uff1a@Formula(dependencies = "nameInfo")\n    default String fullName() {\n        return nameInfo().firstName() + \' \' + nameInfo().lastName();\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'@Entity\ninterface Author {\n\n    val nameInfo: NameInfo\n\n    // highlight-next-line\n    @Formula(dependencies = ["nameInfo.firstName", "nameInfo.lastName"])\n    // \u4e5f\u53ef\u4ee5\u5199\u6210\uff1a@Formula(dependencies = ["nameInfo"])\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n    val fullName: String\n        get() = "${nameInfo.firstName} ${nameInfo.lastName}"\n}\n')))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u65b9\u6cd5\u548c\u6267\u884c\u6548\u679c\u5b8c\u5168\u540c\u4e0a\uff0c\u65e0\u9700\u91cd\u590d\u3002")),(0,l.kt)("h3",{id:"\u4f9d\u8d56\u5173\u8054\u5c5e\u6027"},"\u4f9d\u8d56\u5173\u8054\u5c5e\u6027"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    List<Author> authors();\n\n    // highlight-next-line\n    @Formula(dependencies = "authors")\n    default int authorCount() {\n        return authors().size();\n    }\n\n    // highlight-next-line\n    @Formula(dependencies = {"authors.firstName", "authors.lastName"})\n    default List<String> authorNames() {\n        return authors()\n            .stream()\n            .map(author -> author.firstName() + \' \' + author.lastName())\n            .collect(Collectors.toList());\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    val authors: List<Author>\n\n    // highlight-next-line\n    @Formula(dependencies = "authors")\n    val authorCount: Int\n        get() = authors.size\n\n    // highlight-next-line\n    @Formula(dependencies = ["authors.firstName", "authors.lastName"])\n    val authorNames: List<String>\n        get() = authors.map { "${it.firstName} ${it.lastName}" }\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n')))),(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u4ee3\u7801"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(\n            BookFetcher.$\n                .name()\n                .edition()\n                // highlight-next-line\n                .authorCount()\n                // highlight-next-line\n                .authorNames()\n        )\n    )\n    .execute();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "Learning GraphQL")\n        orderBy(table.edition().desc())\n        select(\n            table.fetchBy {\n                name()\n                edition()\n                // highlight-next-line\n                authorCount()\n                // highlight-next-line\n                authorNames()\n            }\n        )\n    }\n    .execute()\n')))),(0,l.kt)("p",null,"\u6267\u884c\uff0c\u751f\u6210\u5982\u4e0b\u4e24\u6761SQL\u8bed\u53e5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\nfrom BOOK tb_1_\nwhere\n    tb_1_.NAME = ? /* Learning GraphQL */\norder by\n    tb_1_.EDITION desc\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_2_.BOOK_ID,\n    tb_1_.ID,\n    tb_1_.FIRST_NAME,\n    tb_1_.LAST_NAME\nfrom AUTHOR tb_1_\ninner join BOOK_AUTHOR_MAPPING tb_2_\n    on tb_1_.ID = tb_2_.AUTHOR_ID\nwhere\n    tb_2_.BOOK_ID in (\n        ? /* 3 */, ? /* 2 */, ? /* 1 */\n    )\norder by\n    tb_1_.FIRST_NAME asc,\n    tb_1_.LAST_NAME asc\n")))),(0,l.kt)("p",null,"\u5f97\u5230\u7684\u6570\u636e\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        // highlight-next-line\n        "authorCount":2,\n        // highlight-next-line\n        "authorNames":["Alex Banks","Eve Procello"]\n    }, \n    {\n        "id":2,\n        "name":"Learning GraphQL",\n        "edition":2,\n        // highlight-next-line\n        "authorCount":2,\n        // highlight-next-line\n        "authorNames":["Alex Banks","Eve Procello"]\n    }, \n    {\n        "id":1,\n        "name":"Learning GraphQL",\n        "edition":1,\n        // highlight-next-line\n        "authorCount":2,\n        // highlight-next-line\n        "authorNames":["Alex Banks","Eve Procello"]\n    }\n]\n')),(0,l.kt)("h2",{id:"2-\u57fa\u4e8esql\u7684\u8ba1\u7b97"},"2. \u57fa\u4e8eSQL\u7684\u8ba1\u7b97"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},"package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Author {\n\n    @Formula(sql = \"concat(%alias.FIRST_NAME, ' ', %alias.LAST_NAME)\")\n    String fullName();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},"package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Author {\n\n    @Formula(sql = \"concat(%alias.FIRST_NAME, ' ', %alias.LAST_NAME)\")\n    val fullName: String\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n")))),(0,l.kt)("p",null,"\u4e0d\u96be\u53d1\u73b0\uff0c\u57fa\u4e8eSQL\u7684\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027\u6709\u4ee5\u4e0b\u7279\u5f81"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c5e\u6027\u662f\u62bd\u8c61\u7684\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"@Formula"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"sql"),"\u88ab\u6307\u5b9a\u4e3a\u4e00\u4e2aSQL\u8868\u8fbe\u5f0f\uff0c\u5185\u90e8\u6709\u4e00\u4e2a\u7279\u6b8a\u7684\u7b26\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},"%alias")),(0,l.kt)("p",{parentName:"li"},"\u7528\u6237\u65e0\u6cd5\u4e8b\u5148\u77e5\u9053\u5f53\u524d\u8868\u5728\u6700\u7ec8SQL\u4e2d\u7684\u522b\u540d\uff0c\u6240\u4ee5\uff0cJimmer\u5728\u8fd9\u91cc\u7ea6\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"%alias"),"\u8868\u793a\u5b9e\u9645\u7684\u8868\u5217\u540d"))),(0,l.kt)("p",null,"\u7528\u6cd5\u5982\u4e0b"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Author author = authorRepository.findNullable(\n    1L,\n    Fetchers.AUTHOR_FETCHER\n        //\u67e5\u8be2id(\u9690\u542b+\u5f3a\u5236)\u548cfullName\n        // highlight-next-line\n        .fullName() \n);\nSystem.out.println(author);\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val author = authorRepository.findNullable(\n    1L,\n    newFetcher(Auhtor::class).by {\n        //\u67e5\u8be2id(\u9690\u542b+\u5f3a\u5236)\u548cfullName\n        // highlight-next-line\n        fullName() \n    }\n);\nprintln(author)\n")))),(0,l.kt)("p",null,"\u751f\u6210SQL\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    /* \u8fd9\u91cc\uff0c@Formula.sql\u4e2d\u7684`alias`\u88ab\u66ff\u6362\u6210\u4e86`tb_1_` */\n    /* highlight-next-line */\n    concat(tb_1_.FIRST_NAME, ' ', tb_1_.LAST_NAME) \nfrom AUTHOR as tb_1_ \nwhere tb_1_.ID = ?\n")),(0,l.kt)("p",null,"\u6700\u7ec8\u6253\u5370\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"id":1,"fullName":"Eve Procello"}\n')),(0,l.kt)("h2",{id:"\u6bd4\u8f83"},"\u6bd4\u8f83"),(0,l.kt)("p",null,"\u76f8\u6bd4\u4e8e\u57fa\u4e8eJava/Kotlin\u7684\u7b80\u5355\u8ba1\u7b97\uff0c\u57fa\u4e8eSQL\u7684\u7b80\u5355\u8ba1\u7b97\u6709\u4e00\u4e2a\u7f3a\u70b9\u548c\u4e00\u4e2a\u4f18\u70b9\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1a\u5982\u679c\u5bf9\u8c61\u6293\u53d6\u5668\u540c\u65f6\u6293\u53d6",(0,l.kt)("inlineCode",{parentName:"p"},"firstName"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"lastName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"fullName"),"\uff0c\u4f1a\u5bfc\u81f4\u6700\u7ec8SQL\u67e5\u8be2\u4e09\u5217\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"tb_1_.FIRST_NAME"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tb_1_.LAST_NAME"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"concat(tb_1_.FIRST_NAME, ' ', tb_1_.LAST_NAME)"),"\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5f88\u660e\u663e\uff0c\u8fd4\u56de\u6570\u636e\u5305\u542b\u5197\u4f59\uff0c\u662f\u4e00\u79cd\u6d6a\u8d39\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u57fa\u4e8eJava/Kotlin\u7684\u8ba1\u7b97\u5c5e\u6027\u53ea\u80fd\u4f5c\u4e3a\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u88ab\u6293\u53d6\u5b57\u6bb5\uff0c\u65e0\u6cd5\u4e3aSQL DSL\u6240\u7528\u3002"),(0,l.kt)("p",{parentName:"li"},"\u800c\u57fa\u4e8eSQL\u7684\u8ba1\u7b97\u5c5e\u6027\u4f1a\u88ab\u4ee3\u7801\u751f\u6210\u5668\u751f\u6210\u5230\u5f3a\u7c7b\u578bSQL DSL\u7684API\u4e2d\uff0c\u4e3aSQL DSL\u6240\u7528\uff0c\u5982"),(0,l.kt)("p",{parentName:"li"},"Java\u7684",(0,l.kt)("inlineCode",{parentName:"p"},'where(table.fullName().eq("Eve Procello"))'),"\u6216Kotlin\u7684",(0,l.kt)("inlineCode",{parentName:"p"},'where(table.fullName eq "Eve Procello")')),(0,l.kt)("admonition",{parentName:"li",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u6240\u6709\u8ba1\u7b97\u5c5e\u6027\u4e2d\uff0c\u53ea\u6709\u57fa\u4e8eSQL\u7684\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027\u53ef\u4ee5\u88abSQL DSL\u4f7f\u7528\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5efa\u8bae\u4f7f\u7528\u652f\u6301\u51fd\u6570\u7d22\u5f15\u7684\u6570\u636e\u5e93\uff0c\u5e76\u548c\u51fd\u6570\u7d22\u5f15\u7ed3\u5408\u4f7f\u7528\u3002")))),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u5efa\u8bae\u8ba4\u771f\u8003\u8651@Formula\u8ba1\u7b97\u5c5e\u6027\u5e94\u8be5\u57fa\u4e8eJava/Kotlin\u8ba1\u7b97\u8fd8\u662f\u57fa\u4e8eSQL\u8ba1\u7b97\u3002"))}c.isMDXComponent=!0}}]);