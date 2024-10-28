"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),o=n(34334),l=n(72389),i=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:y,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,s.U)(),[T,O]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=y){const e=k[y];null!=e&&e!==T&&h.some((t=>t.value===e))&&O(e)}const S=e=>{const t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==T&&(x(t),O(a),null!=y&&N(y,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:E,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},75521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(83117),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={sidebar_position:6,title:"More Types"},s=void 0,p={unversionedId:"mapping/base/more-type",id:"mapping/base/more-type",title:"More Types",description:"In addition to boolean, number, string, UUID, date, and enumeration, scalar properties also support other types, including:",source:"@site/docs/mapping/base/more-type.mdx",sourceDirName:"mapping/base",slug:"/mapping/base/more-type",permalink:"/jimmer-doc/docs/mapping/base/more-type",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/base/more-type.mdx",tags:[],version:"current",lastUpdatedAt:1711235433,formattedLastUpdatedAt:"Mar 23, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"More Types"},sidebar:"tutorialSidebar",previous:{title:"JSON Converter",permalink:"/jimmer-doc/docs/mapping/base/json-converter"},next:{title:"Advanced mapping",permalink:"/jimmer-doc/docs/mapping/advanced/"}},u={},c=[{value:"Array Types",id:"array-types",level:2},{value:"JSON Types",id:"json-types",level:2},{value:"Custom Types",id:"custom-types",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In addition to boolean, number, string, UUID, date, and enumeration, scalar properties also support other types, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Array types"),(0,r.kt)("li",{parentName:"ul"},"JSON types"),(0,r.kt)("li",{parentName:"ul"},"Custom types")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Enum types are not discussed in this article, please refer to ",(0,r.kt)("a",{parentName:"p",href:"../advanced/enum"},"Enum Mapping"))),(0,r.kt)("h2",{id:"array-types"},"Array Types"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"To use array types, the underlying database must support array types")),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    // highlight-next-line\n    String[] tags();\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface Book {\n\n    @Id\n    val id: Long\n\n    // highlight-next-line\n    val tags: Array<String>\n}\n")))),(0,r.kt)("p",null,"For Postgres, you need to specify the data element type in SQL, for example:"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    // highlight-next-line\n    @Column(sqlElementType = "text")\n    String[] tags();\n}\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Book {\n\n    @Id\n    val id: Long\n\n    // highlight-next-line\n    @Column(sqlElementType = "text")\n    val tags: Array<String>\n}\n')))),(0,r.kt)("h2",{id:"json-types"},"JSON Types"),(0,r.kt)("p",null,"You can use Jackson to support scalar properties of any type, whether it's a custom Java/Kotlin type, a collection type, or even a mix of the two."),(0,r.kt)("p",null,"Just use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.Serialized")," annotation, and you can use the JSON type."),(0,r.kt)("p",null,"Here, the usage is demonstrated using a collection type as an example:"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    // highlight-next-line\n    @Serialized\n    Map<String, Map<String, List<Integer>>> data();\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface Book {\n\n    @Id\n    val id: Long\n\n    // highlight-next-line\n    @Serialized\n    val data: Map<String, Map<String, List<Integer>>>\n}\n")))),(0,r.kt)("p",null,"So what SQL type does the JSON type correspond to?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the database supports the JSON or JSONB type, use that type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Otherwise, please use the string type"))),(0,r.kt)("p",null,"For Postgres, it supports operations on the internal structure of JSON, please see ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.5/functions-json.html"},"JSON Operations in Postgres"),". How should Jimmer implement such operations?"),(0,r.kt)("p",null,"Jimmer's SQL DSL can mix in Native SQL expressions, please see ",(0,r.kt)("a",{parentName:"p",href:"../../query/native-sql"},"Native Expressions"),", this article will not repeat it. Note:"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.5/functions-json.html"},"JSON Operations in Postgres")," use ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),", which happens to be the parameter for JDBC, please use ",(0,r.kt)("inlineCode",{parentName:"p"},"??")," instead.")),(0,r.kt)("h2",{id:"custom-types"},"Custom Types"),(0,r.kt)("p",null,"If the JSON type still cannot meet your requirements (e.g., you expect to map some Postgres-specific types), you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ScalarProvider")," to customize types."),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"../../configuration/scala-providder"},"ScalarProvider"),", this article will not repeat it."))}d.isMDXComponent=!0}}]);