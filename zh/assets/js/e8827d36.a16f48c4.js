"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),o=n(34334),l=n(72389),i=n(67392),u=n(7094),s=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:b,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,u.U)(),[O,w]=(0,r.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=b){const e=g[b];null!=e&&e!==O&&k.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==O&&(j(t),w(a),null!=b&&N(b,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},78022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(83117),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={sidebar_position:2,title:"\u5b64\u5355\u8868\u5355"},u=void 0,s={unversionedId:"mutation/save-command/input-dto/lonely",id:"mutation/save-command/input-dto/lonely",title:"\u5b64\u5355\u8868\u5355",description:"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u964b\u7684\u65b9\u6848\uff0c\u4ec5\u4f9b\u5b66\u4e60\u6216\u975e\u5e38\u7b80\u5355\u7684\u9879\u76ee\u4f7f\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/input-dto/lonely.mdx",sourceDirName:"mutation/save-command/input-dto",slug:"/mutation/save-command/input-dto/lonely",permalink:"/jimmer-doc/zh/docs/mutation/save-command/input-dto/lonely",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/input-dto/lonely.mdx",tags:[],version:"current",lastUpdatedAt:1731427770,formattedLastUpdatedAt:"2024\u5e7411\u670812\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5b64\u5355\u8868\u5355"},sidebar:"tutorialSidebar",previous:{title:"\u95ee\u9898",permalink:"/jimmer-doc/zh/docs/mutation/save-command/input-dto/problem"},next:{title:"\u4f7f\u7528DTO\u8bed\u8a00",permalink:"/jimmer-doc/zh/docs/mutation/save-command/input-dto/dto-lang"}},p={},c=[],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u964b\u7684\u65b9\u6848\uff0c\u4ec5\u4f9b\u5b66\u4e60\u6216\u975e\u5e38\u7b80\u5355\u7684\u9879\u76ee\u4f7f\u7528\u3002")),(0,r.kt)("p",null,"\u9650\u5236\uff1a\u53ea\u80fd\u4fdd\u5b58\u5355\u8868\u6570\u636e\uff0c\u65e0\u6cd5\u5b9e\u73b0\u590d\u6742\u6570\u636e\u7ed3\u6784\u7684\u4fdd\u5b58"),(0,r.kt)("p",null,"\u529f\u80fd\uff1a\u89e3\u51b3\u5b89\u5168\u6027\u95ee\u9898 ",(0,r.kt)("em",{parentName:"p"},"(\u8be5\u95ee\u9898\u5728",(0,r.kt)("a",{parentName:"em",href:"./problem"},"\u4e0a\u4e00\u7bc7\u6587\u6863"),"\u4e2d\u8ba8\u8bba\u8fc7)")),(0,r.kt)("p",null,"\u4f18\u70b9\uff1a\u65e0\u9700\u5b9a\u4e49Input DTO"),(0,r.kt)("p",null,"\u7f3a\u70b9\uff1a\u4e0d\u89e3\u51b3API\u6a21\u7cca\u6027\u95ee\u9898 ",(0,r.kt)("em",{parentName:"p"},"(\u8be5\u95ee\u9898\u5728",(0,r.kt)("a",{parentName:"em",href:"./problem"},"\u4e0a\u4e00\u7bc7\u6587\u6863"),"\u4e2d\u8ba8\u8bba\u8fc7)")),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@PutMapping("/book")\npublic void saveBook(\n    @RequestBody Book book\n) {\n    // highlight-next-line\n    if (!ImmutableObjects.isLonely(book)) {\n        throw new IllegalArgumentException("The input object is too complex");\n    }\n    bookRepository.save(book);\n}\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody book: Book\n) {\n    // highlight-next-line\n    if (!isLonely(book)) {\n        throw IllegalArgumentException("The input object is too complex")\n    }\n    bookRepository.save(input)\n}\n')))),(0,r.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u76f4\u63a5\u91c7\u7528Jimmer\u52a8\u6001\u5bf9\u8c61\u4f5c\u4e3a\u5165\u53c2\uff0c\u4e0d\u9650\u5236\u4f20\u5165\u7684\u6570\u636e\u7ed3\u6784\u7684\u590d\u6742\u5ea6\u3002\u4f46\u662f\uff0c\u6211\u4eec\u52a0\u4e86\u4e00\u4e2a\u9a8c\u8bc1\uff0c\u5982\u679c\u53c2\u6570\u4e0d\u662f\u5b64\u5355\u5bf9\u8c61\uff0c\u629b\u51fa\u5f02\u5e38\u4ee5\u4fdd\u8bc1\u5b89\u5168\u6027\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isLonely"),"\u7528\u4e8e\u5224\u65ad\u52a8\u6001\u5bf9\u8c61\u662f\u5426\u53ea\u662f\u5b64\u5355\u5bf9\u8c61\uff0c\u5b64\u5355\u5bf9\u8c61\u53ea\u80fd\u5b58\u5728\u4e24\u79cd\u5c5e\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6807\u91cf\u5c5e\u6027")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u5916\u952e\u7684\u7684\u5173\u8054\u5c5e\u6027\uff0c\u4f46\u53ea\u80fd\u88ab\u8d4b\u4e3anull\u6216\u53ea\u6709id\u5c5e\u6027\u7684\u5173\u8054\u5bf9\u8c61\u3002"))),(0,r.kt)("p",null,"\u4e0d\u96be\u770b\u51fa\uff0c\u4e0a\u9762\u4ee3\u7801\u4e2d\u9a8c\u8bc1\u53ef\u4ee5\u4fdd\u8bc1\u6240\u6709\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"update"),"\u64cd\u4f5c\u53ea\u80fd\u9488\u5bf9\u4e00\u5f20\u8868\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u4eba\u5458\u8ba4\u4e3a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u529f\u80fd\u9650\u5236\u4e3a\u53ea\u80fd\u4fee\u6539\u4e00\u5f20\u8868\u5c31\u8fbe\u5230\u81ea\u5df1\u9700\u8981\u7684\u5b89\u5168\u9650\u5236")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53e6\u5916\u4e00\u4e2aAPI\u6a21\u7cca\u5316\u95ee\u9898\u662f\u53ef\u4ee5\u63a5\u53d7\u7684\u3002"))),(0,r.kt)("p",null,"\u90a3\u4e48\u8fd9\u7684\u786e\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u964b\u4f46\u53ef\u7528\u7684\u65b9\u6848\u3002"))}d.isMDXComponent=!0}}]);