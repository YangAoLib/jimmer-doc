"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(v,o(o({ref:t},s),{},{components:n})):a.createElement(v,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),r=n(67294),l=n(34334),o=n(72389),i=n(67392),c=n(7094),u=n(12466);const s="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:m,groupId:v,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,c.U)(),[O,T]=(0,r.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=v){const e=g[v];null!=e&&e!==O&&h.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==O&&(N(t),T(a),null!=v&&w(v,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:x,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},87722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={sidebar_position:3,title:"\u66f4\u9ad8\u7ea7\u7684\u7528\u6cd5"},c=void 0,u={unversionedId:"cache/multiview-cache/advanced",id:"cache/multiview-cache/advanced",title:"\u66f4\u9ad8\u7ea7\u7684\u7528\u6cd5",description:"\u8bc9\u6c42",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cache/multiview-cache/advanced.mdx",sourceDirName:"cache/multiview-cache",slug:"/cache/multiview-cache/advanced",permalink:"/jimmer-doc/zh/docs/cache/multiview-cache/advanced",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/cache/multiview-cache/advanced.mdx",tags:[],version:"current",lastUpdatedAt:1704015848,formattedLastUpdatedAt:"2023\u5e7412\u670831\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u66f4\u9ad8\u7ea7\u7684\u7528\u6cd5"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668",permalink:"/jimmer-doc/zh/docs/cache/multiview-cache/user-filter"},next:{title:"\u7f13\u5b58\u672a\u751f\u6548\u7684\u539f\u56e0",permalink:"/jimmer-doc/zh/docs/cache/multiview-cache/abandoned-callback"}},s={},d=[{value:"\u8bc9\u6c42",id:"\u8bc9\u6c42",level:2},{value:"\u6a21\u578b",id:"\u6a21\u578b",level:2},{value:"\u8fc7\u6ee4",id:"\u8fc7\u6ee4",level:2},{value:"\u6548\u679c\u6f14\u793a",id:"\u6548\u679c\u6f14\u793a",level:2},{value:"\u9644\u5e26DEMO",id:"\u9644\u5e26demo",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bc9\u6c42"},"\u8bc9\u6c42"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("a",{parentName:"p",href:"./user-filter"},"\u4e0a\u4e00\u7bc7"),"\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u8986\u76d6\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"isAffectedBy"),"\u65b9\u6cd5"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class TenantFilter implements CacheableFilter<TenantAwareProps> {\n\n    @Override \n    // highlight-next-line\n    public boolean isAffectedBy(EntityEvent<?> e) {\n        return e.isChanged(TenantAwareProps.TENANT)\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass TenantFilter(\n    ...\u7565...\n) : KCacheableFilter<TenantAware> {\n\n    // highlight-next-line\n    override fun isAffectedBy(e: EntityEvent<*>): Boolean =\n        e.isChanged(TenantAware::tenant)\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n")))),(0,r.kt)("p",null,"\u8be5\u65b9\u6cd5\u544a\u8bc9Jimmer\uff0c\u5bf9\u4e8e\u4efb\u4f55\u7ee7\u627f",(0,r.kt)("inlineCode",{parentName:"p"},"TenantAware"),"\u7684\u5b9e\u4f53\u800c\u8a00\uff0c\u5f53\u5176",(0,r.kt)("inlineCode",{parentName:"p"},"tenant"),"\u5c5e\u6027\u88ab\u4fee\u6539\u65f6\uff0c\u6240\u6709\u4ee5\u8be5\u5b9e\u4f53\u6216\u5176\u96c6\u5408\u4e3a\u76ee\u6807\u7c7b\u578b\u7684\u5173\u8054\u5c5e\u6027 ",(0,r.kt)("em",{parentName:"p"},"(\u4f8b\u5982: ",(0,r.kt)("inlineCode",{parentName:"em"},"BookStore.books"),")")," \u7684\u7f13\u5b58\u90fd\u9700\u8981\u88ab\u88ab\u81ea\u52a8\u6e05\u7406\n",(0,r.kt)("em",{parentName:"p"},"(\u5728\u540e\u7eed\u7684\u8fde\u9501\u884c\u4e3a\u4e2d\uff0c\u6709\u53ef\u80fd\u5bfc\u81f4\u66f4\u591a\u7684\u8ba1\u7b97\u5c5e\u6027\u7684\u7f13\u5b58\u4e5f\u88ab\u81ea\u52a8\u6e05\u7406)"),"\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0c\u8fd9\u6837\u7684\u4ee3\u7801\u6709\u4e2a\u9650\u5236\uff1a\u53ea\u6709\u88ab\u8fc7\u6ee4\u5b9e\u4f53\u81ea\u8eab\u7684\u5c5e\u6027\u88ab\u4fee\u6539\u65f6\uff0c\u624d\u80fd\u4fdd\u8bc1\u76f8\u5173\u8054\u7f13\u5b58\u7684\u4e00\u81f4\u6027\u3002"),(0,r.kt)("p",null,"\u662f\u5426\u53ef\u4ee5\u7a81\u7834\u8fd9\u4e2a\u9650\u5236\uff0c\u8ba9\u8fc7\u6ee4\u5668\u5229\u7528\u548c\u88ab\u8fc7\u6ee4\u5b9e\u4f53\u65e0\u5173\u7684\u5176\u4ed6\u5b9e\u4f53\u6216\u5173\u8054\u88ab\u6765\u5b9e\u65bd\u8fc7\u6ee4\uff0c\u5e76\u7ee7\u7eed\u4fdd\u6301\u7f13\u5b58\u53cb\u597d\u5462\uff1f"),(0,r.kt)("h2",{id:"\u6a21\u578b"},"\u6a21\u578b"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"\u8fc7\u6ee4"},"\u8fc7\u6ee4"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"\u6548\u679c\u6f14\u793a"},"\u6548\u679c\u6f14\u793a"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"\u9644\u5e26demo"},"\u9644\u5e26DEMO"),(0,r.kt)("p",null,"TODO"))}m.isMDXComponent=!0}}]);