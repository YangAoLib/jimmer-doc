"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=s(n),d=i,c=k["".concat(p,".").concat(d)]||k[d]||u[d]||o;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(34334);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),i=n(67294),o=n(34334),r=n(72389),l=n(67392),p=n(7094),s=n(12466);const m="tabList__CuJ",u="tabItem_LNqP";function k(e){var t;const{lazy:n,block:r,defaultValue:k,values:d,groupId:c,className:g}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=d??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,l.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===k?k:k??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!N.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:f}=(0,p.U)(),[T,B]=(0,i.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=c){const e=b[c];null!=e&&e!==T&&N.some((t=>t.value===e))&&B(e)}const x=e=>{const t=e.currentTarget,n=w.indexOf(t),a=N[n].value;a!==T&&(O(t),B(a),null!=c&&f(c,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},g)},N.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:D,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,i.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,r.Z)();return i.createElement(k,(0,a.Z)({key:String(t)},e))}},93571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(83117),i=(n(67294),n(3905)),o=n(65488),r=n(85162);const l={sidebar_position:4,title:"\u67e5\u8be2DTO"},p=void 0,s={unversionedId:"spring/repository/dto",id:"spring/repository/dto",title:"\u67e5\u8be2DTO",description:"Jimmer\u63d0\u4f9b\u4e86DTO\u8bed\u8a00\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/spring/repository/dto.mdx",sourceDirName:"spring/repository",slug:"/spring/repository/dto",permalink:"/jimmer-doc/zh/docs/spring/repository/dto",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/spring/repository/dto.mdx",tags:[],version:"current",lastUpdatedAt:1714253334,formattedLastUpdatedAt:"2024\u5e744\u670827\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u67e5\u8be2DTO"},sidebar:"tutorialSidebar",previous:{title:"\u590d\u6742\u67e5\u8be2",permalink:"/jimmer-doc/zh/docs/spring/repository/default"},next:{title:"Spring Cloud\u548c\u8fdc\u7a0b\u5173\u8054",permalink:"/jimmer-doc/zh/docs/spring/spring-cloud"}},m={},u=[{value:"\u5b9a\u4e49DTO\u7684\u5f62\u72b6",id:"\u5b9a\u4e49dto\u7684\u5f62\u72b6",level:2},{value:"\u81ea\u52a8\u751f\u6210DTO\u7c7b\u578b",id:"\u81ea\u52a8\u751f\u6210dto\u7c7b\u578b",level:2},{value:"\u67e5\u8be2DTO\u7c7b\u578b",id:"\u67e5\u8be2dto\u7c7b\u578b",level:2},{value:"\u4f7f\u7528\u4eceRepository\u7ee7\u627f\u7684\u65b9\u6cd5",id:"\u4f7f\u7528\u4ecerepository\u7ee7\u627f\u7684\u65b9\u6cd5",level:3},{value:"\u5728\u81ea\u5b9a\u4e49Repository\u4e2d\u5b9a\u4e49\u62bd\u8c61\u65b9\u6cd5",id:"\u5728\u81ea\u5b9a\u4e49repository\u4e2d\u5b9a\u4e49\u62bd\u8c61\u65b9\u6cd5",level:3},{value:"\u5728\u81ea\u5b9a\u4e49Repository\u4e2d\u5b9a\u4e49\u9ed8\u8ba4\u65b9\u6cd5",id:"\u5728\u81ea\u5b9a\u4e49repository\u4e2d\u5b9a\u4e49\u9ed8\u8ba4\u65b9\u6cd5",level:3}],k={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Jimmer\u63d0\u4f9b\u4e86",(0,i.kt)("a",{parentName:"p",href:"../../object/view/dto-language"},"DTO\u8bed\u8a00"),"\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u8be5\u8bed\u8a00\u672c\u8d28\u4e0a\u662f\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u53e6\u5916\u4e00\u79cd\u8868\u8fbe\u65b9\u5f0f")),(0,i.kt)("p",null,"\u5229\u7528\u8be5\u8bed\u8a00\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5feb\u901f\u4ee5\u67d0\u4e2a\u5b9e\u4f53\u7c7b\u578b\u4e3a\u805a\u5408\u6839\u5b9a\u4e49\u591a\u79cd\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6\uff0c\u7f16\u8bd1\u5668\u4f1a\u4e3a\u6bcf\u79cd\u5f62\u72b6\u5b9a\u4e49\u751f\u6210\u76f8\u5e94\u7684Java/Kotlin DTO\u7c7b\u3002\u6bcf\u4e2aDTO\u7c7b\u578b\u90fd\u5305\u542b\u548c\u539f\u52a8\u6001\u7c7b\u578b\u4e4b\u95f4\u7684\u5f7c\u6b64\u8f6c\u5316\u903b\u8f91\uff0c\u4ee5\u53ca\u4e00\u4e2a\u548c\u81ea\u8eab\u5f62\u72b6\u5339\u914d\u7684\u5bf9\u8c61\u6293\u53d6\u5668\u3002"),(0,i.kt)("p",null,"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u670d\u52a1\u7aef\u67e5\u8be2\u51fa\u67d0\u79cd\u5f62\u72b6\u7684\u6570\u636e\u540e\uff0c\u5e76\u4e0d\u662f\u4e3a\u4e86\u4f5c\u4e3aHTTP\u8bf7\u6c42\u7684\u8fd4\u56de\uff0c\u800c\u662f\u81ea\u5df1\u7528\uff0c\u7528\u6765\u9a71\u52a8\u540e\u7eed\u7684\u590d\u6742\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u8fd9\u662f\u91c7\u7528\u8fd9\u79cd\u65b9\u5f0f\u7684\u7406\u60f3\u573a\u5408\u3002"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u5982\u679c\u670d\u52a1\u7aef\u67e5\u8be2\u67d0\u79cd\u5f62\u72b6\u7684\u6570\u636e\u4e0d\u662f\u4e3a\u4e86\u81ea\u5df1\u7528\uff0c\u800c\u662f\u4e3a\u4e86\u76f4\u63a5\u4f5c\u4e3aHTTP\u8bf7\u6c42\u7684\u8fd4\u56de\u503c\uff0c\u5219\u66f4\u63a8\u8350\u76f4\u63a5\u8fd4\u56de\u52a8\u6001\u5b9e\u4f53\u5bf9\u8c61\uff0c\u5e76\u5229\u7528",(0,i.kt)("a",{parentName:"p",href:"../../client"},"\u5ba2\u6237\u7aef\u7bc7"),"\u4e2d\u7684\u65b9\u6848\u81ea\u52a8\u751f\u6210\u5f00\u53d1\u4f53\u9a8c\u5f88\u9ad8\u7684\u5ba2\u6237\u7aef\u4ee3\u7801\u3002")),(0,i.kt)("h2",{id:"\u5b9a\u4e49dto\u7684\u5f62\u72b6"},"\u5b9a\u4e49DTO\u7684\u5f62\u72b6"),(0,i.kt)("p",null,"\u672c\u6587\u4fa7\u91cd\u4e8e\u8bb2\u89e3\u5982\u4f55\u67e5\u8be2\u9759\u6001DTO\u7c7b\u578b\uff0c\u5e76\u975e\u7cfb\u7edf\u6027\u4ecb\u7ecdDTO\u8bed\u8a00\uff0c\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"../../object/view/dto-language"},"\u5bf9\u8c61\u7bc7/DTO\u8f6c\u6362/DTO\u8bed\u8a00"),"\u4ee5\u4e86\u89e3\u5b8c\u6574\u7684DTO\u8bed\u8a00\u3002"),(0,i.kt)("p",null,"\u5047\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"Book"),"\u7c7b\u7684\u5168\u540d\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"com.yourcompany.yourpoject.model.Book"),"\uff0c\u4f60\u53ef\u4ee5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u5728\u5b9e\u4f53\u5b9a\u4e49\u6240\u5728\u9879\u76ee\u4e2d"),"\uff0c\u5efa\u7acb\u76ee\u5f55",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/dto"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/dto"),"\u4e0b\uff0c\u6309\u5b9e\u4f53\u7c7b\u578b\u6240\u5904\u7684\u5305\u8def\u5f84\u5efa\u7acb\u5b50\u76ee\u5f55",(0,i.kt)("inlineCode",{parentName:"p"},"com/yourcompany/yourpoject/model"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u4e0a\u4e00\u6b65\u5efa\u7acb\u7684\u76ee\u5f55\u4e0b\uff0c\u5efa\u7acb\u6587\u4ef6",(0,i.kt)("inlineCode",{parentName:"p"},"Book.dto"),"\uff0c\u6587\u4ef6\u5fc5\u987b\u548c\u5b9e\u4f53\u7c7b\u540c\u540d\uff0c\u6269\u5c55\u540d\u5fc5\u987b\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"dto"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7f16\u8f91\u6b64\u6587\u4ef6\uff0c\u5229\u7528DTO\u8bed\u8a00\uff0c\u5b9a\u4e49Book\u5b9e\u4f53\u7684\u5404\u79cdDTO\u5f62\u72b6"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Book.dto"',title:'"Book.dto"'},"# highlight-next-line\nBookDetailView {\n    \n    #allScalars\n    \n    store {\n        #allScalars\n    }\n\n    authors {\n        #allScalars\n    }\n}\n\nSimpleBookView { ...\u7565... }\n\n...\u7701\u7565\u5176\u4ed6DTO\u5f62\u72b6\u5b9a\u4e49...\n")))),(0,i.kt)("h2",{id:"\u81ea\u52a8\u751f\u6210dto\u7c7b\u578b"},"\u81ea\u52a8\u751f\u6210DTO\u7c7b\u578b"),(0,i.kt)("p",null,"Jimmer\u8d1f\u8d23\u7f16\u8bd1dto\u6587\u4ef6\uff0c\u81ea\u52a8\u751f\u6210\u7b26\u5408\u8fd9\u4e9b\u5f62\u72b6\u7684DTO\u7c7b\u578b\u3002"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9664\u4e86dto\u6587\u4ef6\u5916\u8fd8\u6709\u5176\u4ed6Java/Kotlin\u539f\u4ee3\u7801\u6587\u4ef6\u88ab\u4fee\u6539\u4e86\uff0c\u76f4\u63a5\u70b9\u51fbIDE\u4e2d\u8fd0\u884c\u6309\u94ae\u53ef\u4ee5\u5bfc\u81f4dto\u6587\u4ef6\u7684\u91cd\u65b0\u7f16\u8bd1"),(0,i.kt)("p",{parentName:"admonition"},"\u4f46\u662f\uff0c\u5982\u679c\u9664\u4e86dto\u6587\u4ef6\u5916\u6ca1\u6709\u5176\u4ed6Java/Kotlin\u6587\u4ef6\u88ab\u4fee\u6539\uff0c\u7b80\u5355\u5730\u70b9\u51fbIDE\u4e2d\u8fd0\u884c\u6309\u94ae\u5e76\u4e0d\u4f1a\u5bfc\u81f4dto\u6587\u4ef6\u88ab\u91cd\u65b0\u7f16\u8bd1\uff0c\u9664\u975e\u663e\u5f0f\u5730rebuild\uff01"),(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u6784\u5efa\u5de5\u5177\u662fGradle\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u793e\u533a\u63d0\u4f9b\u7684\u7b2c\u4e09\u65b9Gradle\u63d2\u4ef6\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Enaium/jimmer-gradle"},"jimmer-gradle"))),(0,i.kt)("p",null,"\u4ee5\u4e0a\u9762\u4ee3\u7801\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"BookDetailView"),"\u4e3a\u4f8b\uff0c\u6b64dto\u6587\u4ef6\u88abJimmer\u6210\u529f\u7f16\u8bd1\u540e\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u5982\u4e0bDTO\u7c7b\u578b"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookDetailView.java"',title:'"BookDetailView.java"'},'package com.yourcompany.yourpoject.model.dto;\n\nimport com.yourcompany.yourpoject.model.Book;\nimport org.babyfish.jimmer.View;\n\n@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\npublic class BookDetailView implements Input<Book> {\n\n    private long id;\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    // highlight-next-line\n    private TargetOf_store store;\n\n    // highlight-next-line\n    private List<TargetOf_authors> authors;\n\n    // highlight-next-line\n    public static class TargetOf_store implements Input<BookStore> {\n\n        private long id;\n    \n        private String name;\n\n        @Nullable\n        private String website;\n\n        ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n    }\n\n    // highlight-next-line\n    public static class TargetOf_authors implements Input<Author> {\n\n        private long id;\n        \n        private String firstName;\n\n        private String lastName;\n\n        private Gender gender;\n\n        ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookDetailView.kt"',title:'"BookDetailView.kt"'},'package com.yourcompany.yourpoject.model.dto\n\nimport com.yourcompany.yourpoject.model.Book\nimport org.babyfish.jimmer.View\n\n@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\ndata class BookDetailView(\n    val id: Long = 0,\n    val name: String = "",\n    val edition: Int = 0,\n    val price: BigDecimal,\n\n    // highlight-next-line\n    val store: TargetOf_store? = null,\n    // highlight-next-line\n    val authors: List<TargetOf_authors> = emptyList(),\n) : Input<Book> {\n\n    // highlight-next-line\n    data class TargetOf_store(\n        val id: Long = 0,\n        val name: String = "",\n        val website: String? = null,\n    ) : Input<BookStore> {\n        ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n    }\n\n    // highlight-next-line\n    data class TargetOf_authors(\n        val id: Long = 0,\n        public val firstName: String = "",\n        public val lastName: String = "",\n        public val gender: Gender,\n    ) : Input<Author> {\n        ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n} \n')))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u751f\u6210\u7684DTO\u7c7b\u6240\u5728\u7684\u5305\u5e76\u975e\u5b9e\u4f53\u6240\u5904\u7684\u5305\uff0c\u800c\u662f\u5176",(0,i.kt)("inlineCode",{parentName:"p"},"dto"),"\u5b50\u5305")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8eJava\u800c\u8a00\uff0c\u5047\u8bbe\u7528\u6237\u5df2\u7ecf\u4f7f\u7528\u4e86lombok")))),(0,i.kt)("h2",{id:"\u67e5\u8be2dto\u7c7b\u578b"},"\u67e5\u8be2DTO\u7c7b\u578b"),(0,i.kt)("p",null,"\u67e5\u8be2DTO\u7c7b\u578b\u7684\u65b9\u6848\u6709\u591a\u79cd\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"JRepository/KRepostiory"),"\u4e2d\u7ee7\u627f\u7684\u65b9\u6cd5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728\u81ea\u5b9a\u4e49Repository\u4e2d\u5b9a\u4e49\u62bd\u8c61\u65b9\u6cd5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728\u81ea\u5b9a\u4e49Repository\u4e2d\u5b9a\u4e49\u9ed8\u8ba4\u65b9\u6cd5 ",(0,i.kt)("em",{parentName:"p"},"(\u5176\u5b9e\u4e5f\u662f\u5e95\u5c42API\u67e5\u8be2DTO\u7c7b\u578b\u7684\u65b9\u6cd5)")))),(0,i.kt)("h3",{id:"\u4f7f\u7528\u4ecerepository\u7ee7\u627f\u7684\u65b9\u6cd5"},"\u4f7f\u7528\u4eceRepository\u7ee7\u627f\u7684\u65b9\u6cd5"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public static void main(String[] args) {\n    ApplicationContext ctx = SpringAppliction.run(MyApp.class, args);\n    BookRepository bookRepository = ctx.getBean(BookRepository.class);\n    Book view = bookRepository\n        // highlight-next-line\n        .viwer(BookDetailView.class)\n        .findNullable(1L);\n    System.out.println(view);\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun main(args: Array<String>) {\n    val ctx = runApplication<MyApp>(*args)\n    val bookRepository = ctx.getBean(BookRepository.class.java)\n    val view = bookRepository\n        // highlight-next-line\n        .viwer(BookDetailView.class)\n        .findNullable(1L)\n    println(view)\n}\n")))),(0,i.kt)("p",null,"\u5176\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"viewer(BookDetailView.class)"),"\u8868\u793a\u63a5\u4e0b\u6765\u7684\u65b9\u6cd5\u7528\u4e8e\u67e5\u8be2DTO\u5bf9\u8c61\uff0c\u800c\u975e\u52a8\u6001\u5b9e\u4f53\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u6253\u5370\u7ed3\u679c\u5982\u4e0b ",(0,i.kt)("em",{parentName:"p"},"(\u4e3a\u65b9\u4fbf\u9605\u8bfb\uff0c\u4eba\u4e3a\u8fdb\u884c\u4e86\u683c\u5f0f\u5316)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# highlight-next-line\nBookDetailView(\n    id=1, \n    name=Learning GraphQL, \n    edition=1, \n    price=50.00, \n    # highlight-next-line\n    store=BookDetailView.TargetOf_store(\n        id=1, \n        name=O'REILLY, \n        website=null, \n        version=0\n    ), \n    authors=[\n        # highlight-next-line\n        BookDetailView.TargetOf_authors(\n            id=2, \n            firstName=Alex, \n            lastName=Banks, \n            gender=MALE\n        ), \n        # highlight-next-line\n        BookDetailView.TargetOf_authors(\n            id=1, \n            firstName=Eve, \n            lastName=Procello, \n            gender=FEMALE\n        )\n    ]\n)\n")),(0,i.kt)("p",null,"\u4e0d\u96be\u53d1\u73b0\uff0c\u867d\u7136\u73b0\u5728\u67e5\u8be2\u4e0d\u518d\u8fd4\u56de\u52a8\u6001\u5b9e\u4f53\u5bf9\u8c61\uff0c\u4f46\u529f\u80fd\u548c\u5374\u548c\u5bf9\u8c61\u6293\u53d6\u5668\u5b8c\u5168\u4e00\u6837\u3002\u8fd9\u4ec0\u4e48\u4e3a\u4ec0\u4e48\u5462\uff1f"),(0,i.kt)("p",null,"\u5176\u5b9e\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"BookDetailView"),"\u7c7b\u5185\u90e8\u5305\u542b\u4e00\u4e2a\u81ea\u52a8\u751f\u6210\u7684\u5bf9\u8c61\u6293\u53d6\u5668\uff0cJimmer\u9760\u5b83\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u4e86\u5f62\u72b6\u5339\u914d\u7684\u52a8\u6001\u5b9e\u4f53\u5bf9\u8c61\uff0c\u5e76\u5c06\u4e4b\u81ea\u52a8\u8f6c\u5316\u4e3aDTO\u5bf9\u8c61\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u76f8\u5173\u7ec6\u8282\u5728",(0,i.kt)("a",{parentName:"p",href:"../../query/object-fetcher/dto"},"\u5bf9\u8c61\u6293\u53d6\u5668/DTO\u67e5\u8be2"),"\u4e2d\u5df2\u6709\u8be6\u7ec6\u8bba\u8ff0\uff0c\u672c\u6587\u4e0d\u518d\u91cd\u590d\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u5c31\u662f\u672c\u6587\u5f00\u5934\u6240\u8bf4\u7684\uff0cDTO\u8bed\u8a00\u672c\u8d28\u4e0a\u662f\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u53e6\u5916\u4e00\u79cd\u8868\u8fbe\u65b9\u5f0f\u3002")),(0,i.kt)("h3",{id:"\u5728\u81ea\u5b9a\u4e49repository\u4e2d\u5b9a\u4e49\u62bd\u8c61\u65b9\u6cd5"},"\u5728\u81ea\u5b9a\u4e49Repository\u4e2d\u5b9a\u4e49\u62bd\u8c61\u65b9\u6cd5"),(0,i.kt)("p",null,"\u6709\u4e24\u79cd\u5b9e\u65bd\u65b9\u6848"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u76f4\u89c2\u4f46\u4e0d\u63a8\u8350\u7684\u65b9\u6848"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"// \u76f4\u89c2\u4f46\u4e0d\u63a8\u8350\u7684\u65b9\u6848\npublic interface BookRepository extends JRepository<Book, Long> {\n\n    // highlight-next-line\n    List<BookDetailView> findByNameLikeIgnoreCase(\n        @Nullable String name\n    );    \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"// \u76f4\u89c2\u4f46\u4e0d\u63a8\u8350\u7684\u65b9\u6848\ninterface BookRepository : KRepository<Book, Long> {\n\n    fun findByNameLikeIgnoreCase(\n        name: String? = null\n    // highlight-next-line\n    ) : List<BookDetailView>    \n}\n")))),(0,i.kt)("p",{parentName:"li"},"\u8fd9\u79cd\u65b9\u6848\u5f88\u7b80\u5355\uff0c\u62bd\u8c61\u65b9\u6cd5\u4e0d\u518d\u8fd4\u56de\u4ee3\u8868\u4efb\u610f\u6570\u636e\u7684\u52a8\u6001\u5b9e\u4f53\uff0c\u76f4\u63a5\u8fd4\u56de\u56fa\u5b9a\u5f62\u72b6\u7684DTO\u7c7b\u578b\u5373\u53ef\u3002\u975e\u5e38\u5bb9\u6613\u7406\u89e3\u3002"),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u7136\u800c\uff0c\u8fd9\u79cd\u65b9\u6848\u5b58\u662f\u6709\u7f3a\u70b9\u7684\uff0c\u5e76\u4e0d\u63a8\u8350\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u63a8\u8350\u505a\u6cd5"),(0,i.kt)("p",{parentName:"li"},"\u4e0a\u9762\u7684\u4ee3\u7801\u867d\u7136\u7b80\u5355\u76f4\u89c2\uff0c\u4f46\u662f\u8fdd\u80cc\u4e86Jimmer\u4e00\u76f4\u52aa\u529b\u8ffd\u6c42\u91cd\u8981\u4ef7\u503c\u89c2\u4e4b\u4e00"),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u4e0d\u8981\u5728\u6570\u636e\u5c42\u56fa\u5316\u88ab\u67e5\u8be2\u7684\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6\uff0c\u800c\u5e94\u8be5\u7531\u4e0a\u5c42\u4e1a\u52a1\u6765\u51b3\u5b9a\u3002")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"public interface BookRepository extends JRepository<Book, Long> {\n\n    <V extends View<Book>> List<V> findByNameLikeIgnoreCase(\n        @Nullable String name,\n        // highlight-next-line\n        Class<V> viewType\n    );    \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"interface BookRepository : KRepository<Book, Long> {\n\n    fun <V: View<Book>> findByNameLikeIgnoreCase(\n        name: String? = null\n        // highlight-next-line\n        viewType: KClass<V>\n    ) : List<V>    \n}\n")))),(0,i.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u770b\u5230"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9996\u5148\uff0c\u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\u7ea7\u7684\u8303\u578b\u53c2\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"V"),"\uff0c\u8be5\u8303\u578b\u53c2\u6570\u5fc5\u987b\u7ee7\u627f",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.View<Book>")," ",(0,i.kt)("em",{parentName:"p"},"(\u8fd9\u975e\u5e38\u91cd\u8981\uff0c\u5426\u5219Jimmer\u4f1a\u901a\u8fc7\u5f02\u5e38\u63d0\u9192\u5f00\u53d1\u4eba\u5458\u8fd9\u6837\u505a)"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7136\u540e\uff0c\u5229\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"V"),"\u58f0\u660e\u7c7b\u578b\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"Class<V>"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"KClass<V>"),"\u7684\u53c2\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"viewType"),"\uff0c\u5c06\u6570\u636e\u7ed3\u6784\u5f62\u72b6\u7684\u51b3\u7b56\u6743\u4ea4\u7ed9\u8c03\u7528\u8005\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6700\u540e\uff0c\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"V"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"List<V>"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"Page<V>"),"\u8fd9\u7c7b\u643a\u5e26",(0,i.kt)("inlineCode",{parentName:"p"},"V"),"\u7c7b\u578b\u7684\u7ed3\u679c\u3002"))),(0,i.kt)("p",{parentName:"li"},"\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u7528\u5b83\u6765\u67e5\u8be2\u5404\u79cd\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4ee5Java\u4e3a\u4f8b"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"bookRepository.findByNameLikeIgnoreCase(null, BookDetailView.class)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"bookRepository.findByNameLikeIgnoreCase(null, SimpleBookView.class)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"bookRepository.findByNameLikeIgnoreCase(null, DefaultBookView.class)"))),(0,i.kt)("p",{parentName:"li"},"\u8ba9\u6211\u4eec\u6765\u56de\u5fc6\u4e00\u4e0b\uff0c\u5728\u6211\u4eec\u4ecb\u7ecdDTO\u7c7b\u578b\u4e4b\u524d\uff0c\u6211\u4eec\u662f\u5982\u4f55\u76f4\u63a5\u4f7f\u7528\u5bf9\u8c61\u6293\u53d6\u5668\u6765\u5b9e\u73b0\u76f8\u540c\u529f\u80fd\u7684"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"public interface BookRepository extends JRepository<Book, Long> {\n\n    List<Book> findByNameLikeIgnoreCase(\n        @Nullable String name,\n        // highlight-next-line\n        fetcher<Book> fetcher\n    );    \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"interface BookRepository : KRepository<Book, Long> {\n\n    fun findByNameLikeIgnoreCase(\n        name: String? = null\n        // highlight-next-line\n        viewType: Fetcher<Book>\n    ) : List<Book>    \n}\n")))),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5bf9\u6bd4\u4f7f\u7528DTO\u7684\u4ee3\u7801\u548c\u76f4\u63a5\u4f7f\u7528\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u4ee3\u7801\uff0c\u4e0d\u96be\u53d1\u73b0\uff0c\u4e8c\u8005\u5f02\u66f2\u540c\u5de5\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u518d\u6b21\u5370\u8bc1\u4e86\u672c\u6587\u5f00\u5934\u6240\u8bf4DTO\u8bed\u8a00\u672c\u8d28\u4e0a\u662f\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u53e6\u5916\u4e00\u79cd\u8868\u8fbe\u65b9\u5f0f\u3002")))),(0,i.kt)("h3",{id:"\u5728\u81ea\u5b9a\u4e49repository\u4e2d\u5b9a\u4e49\u9ed8\u8ba4\u65b9\u6cd5"},"\u5728\u81ea\u5b9a\u4e49Repository\u4e2d\u5b9a\u4e49\u9ed8\u8ba4\u65b9\u6cd5"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"public interface BookRepository extends JRepository<Book, Long> {\n\n    BookTable table = Tables.BOOK_TABLE;\n\n    default <V extends View<Book>> List<V> find(\n        @Nullable String name,\n        @Nullable String storeName,\n        @Nullalbe String authorName,\n        // highlight-next-line\n        Class<V> viewType\n    ) {\n        return sql()\n            .createQuery(table)\n            whereIf(\n                StringUtils.hasText(name),\n                table.name().ilike(name)\n            )\n            .whereIf(\n                StringUtils.hasText(storeName),\n                table.store().name().ilike(storeName) \n            )\n            .whereIf(\n                StringUtils.hasText(authorName),\n                table.id().in(\n                    sql()\n                        .createSubQuery(author)\n                        .where(\n                            Predicate.or(\n                                author.firstName().ilike(authorName),\n                                author.lastName().ilike(authorName)\n                            )\n                        )\n                        .select(\n                            author.books().id()\n                        )\n                )\n            )\n            .orderBy(table.name())\n            .orderBy(table.edition().desc())\n            // highlight-next-line\n            .select(table.fetch(viewType)) \n            .execute();\n    }\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"interface BookRepository : KRepository<Book, Long> {\n\n    fun <V: View<Book>> findByNameLikeIgnoreCase(\n        name: String? = null\n        // highlight-next-line\n        viewType: KClass<V>\n    ) : List<V> =\n        sql\n            .createQuery(Book::class) {\n                name?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.name ilike it)\n                }\n                storeName?.takeIf { it.isNotEmpty() }?.let {\n                    table.store.name ilike it\n                }\n                authorName?.takeIf { it.isNotEmpty() }?.let {\n                    where(\n                        table.id valueIn subQuery(Author::class) {\n                            where(\n                                or(\n                                    table.firstName ilike it,\n                                    table.lastName ilike it\n                                )\n                            )\n                            select(table.books.id)\n                        }\n                    )\n                }\n                orderBy(table.name)\n                orderBy(table.edition.desc())\n                // highlight-next-line\n                select(table.fetch(viewType))\n            }\n            .execute()    \n}\n")))),(0,i.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u770b\u5230\u4e86\uff0c\u4ee5\u524d\u4ee3\u7801\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"table.fetch(fetcher)"),"\u88ab\u66ff\u6362\u6210\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"table.fetch(viewType)"),"\u3002"),(0,i.kt)("p",null,"\u5176\u5b9e\uff0c\u5176\u4ed6\u5e95\u5c42\u67e5\u8be2API\u4e5f\u53ef\u4ee5\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"viewType"),"\u66ff\u6362",(0,i.kt)("inlineCode",{parentName:"p"},"fetcher"),"\u3002\u6bd4\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"sqlClient.findById(fetcher, 1L)"),"\u53ef\u4ee5\u88ab\u66ff\u6362\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"sqlClient.find(viewType, 1L)"),"\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u6240\u6709\u5e95\u5c42\u67e5\u8be2API\u90fd\u53ef\u4ee5\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"viewType"),"\u66ff\u6362",(0,i.kt)("inlineCode",{parentName:"p"},"fetcher"),"\uff0c\u518d\u6b21\u5370\u8bc1\u4e86\u672c\u6587\u5f00\u5934\u6240\u8bf4DTO\u8bed\u8a00\u672c\u8d28\u4e0a\u662f\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u53e6\u5916\u4e00\u79cd\u8868\u8fbe\u65b9\u5f0f\u3002")))}d.isMDXComponent=!0}}]);