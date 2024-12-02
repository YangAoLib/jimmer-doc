"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8781],{54738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"showcase/where/dynamic-where","title":"4.2 \u52a8\u6001\u6761\u4ef6","description":"\u4f7f\u7528whereIf","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/dynamic-where.mdx","sourceDirName":"showcase/where","slug":"/showcase/where/dynamic-where","permalink":"/jimmer-doc/zh/docs/showcase/where/dynamic-where","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/dynamic-where.mdx","tags":[],"version":"current","lastUpdatedAt":1714129053000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"4.2 \u52a8\u6001\u6761\u4ef6"},"sidebar":"tutorialSidebar","previous":{"title":"4.1 \u57fa\u672c\u7528\u6cd5","permalink":"/jimmer-doc/zh/docs/showcase/where/usage"},"next":{"title":"4.3 \u5173\u8054id","permalink":"/jimmer-doc/zh/docs/showcase/where/associated-id"}}');var a=t(74848),r=t(28453),i=t(11470),s=t(19365);const o={sidebar_position:2,title:"4.2 \u52a8\u6001\u6761\u4ef6"},c=void 0,u={},d=[{value:"\u4f7f\u7528whereIf",id:"\u4f7f\u7528whereif",level:2},{value:"\u4f7f\u7528\u52a8\u6001\u8c13\u8bcd",id:"\u4f7f\u7528\u52a8\u6001\u8c13\u8bcd",level:2},{value:"\u6bd4\u8f83",id:"\u6bd4\u8f83",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u4f7f\u7528whereif",children:"\u4f7f\u7528whereIf"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@Nullable String name = ...\u7565...;\n@Nullable Integer edition = ...\u7565...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .whereIf(\n        name != null && !name.isEmpty(), \n        () -> table.name().ilike(name)\n    )\n    // highlight-next-line\n    .whereIf(\n        edition != null, \n        table.edition().eq(edition)\n    )\n    .select(table)\n    .execute();\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val name: String? = ...\u7565...\nval edition: Int? = ...\u7565...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        name?.takeIf { it.isNotEmpty() }?.let {\n            where(table.name ilike it)\n        }\n        // highlight-next-line\n        edition?.let {\n            where(table.edition eq it)\n        }\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsx)(n.p,{children:"Java\u4ee3\u7801\u4e2d\uff0c\u7b2c\u4e00\u4e2awhereIf\u91c7\u7528Lambda\u4f20\u5165\u8868\u8fbe\u5f0f\u3002"}),(0,a.jsxs)(n.p,{children:["\u8fd9\u662f\u56e0\u4e3a\u9664\u4e86",(0,a.jsx)(n.code,{children:"eq"}),"\u548c",(0,a.jsx)(n.code,{children:"ne"}),"\u80fd\u63a5\u53d7null\u503c*(\u7ffb\u8bd1\u4e3a",(0,a.jsx)(n.code,{children:"is null"}),"\u548c",(0,a.jsx)(n.code,{children:"is not null"}),")",(0,a.jsx)(n.em,{children:"\u5916\uff0c\n\u5176\u4ed6\u6761\u4ef6"}),"(\u6bd4\u5982\uff0c\u8fd9\u91cc\u7684",(0,a.jsx)(n.code,{children:"ilike"}),")*\u4e0d\u63a5\u53d7null\u5e76\u89c6\u4e4b\u4e3a\u5f00\u53d1\u4eba\u5458\u72af\u4e0b\u7684BUG\u3002"]})]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528\u52a8\u6001\u8c13\u8bcd",children:"\u4f7f\u7528\u52a8\u6001\u8c13\u8bcd"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"whereIf"}),"\u5e76\u975e\u552f\u4e00\u7684\u52a8\u6001\u67e5\u8be2\u7684\u5199\u6cd5\uff0c\u4e0a\u8ff0\u4ee3\u7801\u53ef\u4ee5\u7528\u53e6\u5916\u4e00\u79cd\u5199\u6cd5\u6765\u4ee3\u66ff\u3002"]}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@Nullable String name = ...\u7565...;\n@Nullable Integer edition = ...\u7565...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(table.name().ilikeIf(name))\n    // highlight-next-line\n    .whereIf(table.edition().eqIf(edition))\n    .select(table)\n    .execute();\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val name: String? = ...\u7565...\nval edition: Int? = ...\u7565...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        where(table.name `ilike?` name)\n        // highlight-next-line\n        where(table.edition `eq?` edition)\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["\u5927\u90e8\u5206SQL\u6761\u4ef6*(\u6bd4\u5982\uff0c\u8fd9\u91cc\u7684",(0,a.jsx)(n.code,{children:"ilike"}),")",(0,a.jsx)(n.em,{children:"\u4e0d\u63a5\u53d7null\uff0c\u5e76\u89c6\u4e4b\u4e3a\u5f00\u53d1\u4eba\u5458\u72af\u4e0b\u7684BUG\u3002"}),"(",(0,a.jsx)(n.code,{children:"eq"}),"\u548c",(0,a.jsx)(n.code,{children:"ne"}),"\u9664\u5916\uff0c\u56e0\u4e3a\u5b83\u4eec\u4f1a\u5c06null\u6e32\u67d3\u4e3a",(0,a.jsx)(n.code,{children:"is null"}),"\u548c",(0,a.jsx)(n.code,{children:"not null"}),")*"]}),(0,a.jsxs)(n.p,{children:["\u7136\u800c\uff0c\u52a8\u6001\u8c13\u8bcd ",(0,a.jsxs)(n.em,{children:["(Java\u4e2d",(0,a.jsx)(n.code,{children:"ilikeIf"}),"\u548cKotlin\u4e2d\u7684",(0,a.jsx)(n.code,{children:"ilike?"}),")"]}),' \u5219\u5b8c\u5168\u4e0d\u540c\uff0c\u5b83\u4eec\u63a5\u53d7null\u503c\u5e76\u5c06\u4e4b\u7406\u89e3\u4e3a\u52a8\u6001\u67e5\u8be2\u3002\u5373\uff0c\u5982\u679c\u53c2\u6570\u4e3anull\u6216""\uff0c\u5219\u5ffd\u7565\u5f53\u524dSQL\u6761\u4ef6\u3002']})]}),"\n",(0,a.jsx)(n.h2,{id:"\u6bd4\u8f83",children:"\u6bd4\u8f83"}),"\n",(0,a.jsxs)(n.p,{children:["\u867d\u7136",(0,a.jsx)(n.code,{children:"whereIf"}),"\u5177\u5907\u826f\u597d\u7684\u53ef\u8bfb\u6027\uff0c\u4f46\u662f\u52a8\u6001\u8c13\u8bcd\u80fd\u9002\u5e94\u66f4\u590d\u6742\u7684\u573a\u666f ",(0,a.jsx)(n.em,{children:"(\u53ef\u4ee5\u5728\u590d\u6742\u7684\u6761\u4ef6\u4e2d\u4f7f\u7528\uff0c\u5305\u62ec\u5d4c\u5957\u591a\u5c42\u7684and, not, or\u7ed3\u6784)"}),"\u3002\u540e\u6587\u4e2d\u6211\u4eec\u4e00\u5f8b\u4f7f\u7528\u52a8\u6001\u8c13\u8bcd\u3002"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var l=t(18215);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var l=t(96540),a=t(18215),r=t(23104),i=t(56347),s=t(205),o=t(57485),c=t(31682),u=t(70679);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:a}}=e;return{value:n,label:t,attributes:l,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=h(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:r}))),[c,d]=b({queryString:t,groupId:a}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,u.Dv)(t);return[a,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),x=(()=>{const e=c??p;return m({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function g(e){let{className:n,block:t,selectedValue:l,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=s[t].value;a!==l&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":l===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=p(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function k(e){const n=(0,f.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var l=t(96540);const a={},r=l.createContext(a);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);