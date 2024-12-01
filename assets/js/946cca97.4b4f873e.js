"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23612:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(67294),r=n(34334),i=n(35281),o=n(95999);const l="admonition_LlT9",c="admonitionHeading_tbUL",s="admonitionIcon_kALy",u="admonitionContent_S0QG";const m={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},d={secondary:"note",important:"info",success:"tip",warning:"danger"};function p(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}function h(e){const{children:t,type:n,title:o,icon:h}=p(e),f=function(e){const t=d[e]??e;return m[t]||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),m.info)}(n),v=o??f.label,{iconComponent:b}=f,y=h??a.createElement(b,null);return a.createElement("div",{className:(0,r.Z)(i.k.common.admonition,i.k.common.admonitionType(e.type),"alert",`alert--${f.infimaClassName}`,l)},a.createElement("div",{className:c},a.createElement("span",{className:s},y),v),a.createElement("div",{className:u},t))}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(83117),r=n(67294),i=n(34334),o=n(72389),l=n(67392),c=n(7094),s=n(12466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:p,groupId:h,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,l.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:w}=(0,c.U)(),[k,T]=(0,r.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=h){const e=E[h];null!=e&&e!==k&&b.some((t=>t.value===e))&&T(e)}const Z=e=>{const t=e.currentTarget,n=C.indexOf(t),a=b[n].value;a!==k&&(x(t),T(a),null!=h&&w(h,String(a)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},f)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>C.push(e),onKeyDown:N,onFocus:Z,onClick:Z},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":k===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},13531:(e,t,n)=>{n.d(t,{R1:()=>c});var a=n(67294),r=n(65488),i=n(85162),o=(n(39511),n(53143)),l=(n(32102),n(23612));const c=(0,a.memo)((()=>(0,o.S)()?m:d)),s=n(98614).Z,u=n(67714).Z,m=a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"language"},a.createElement(i.Z,{value:"java",label:"Java"},a.createElement("div",{style:{position:"relative",width:"100%",paddingTop:"56.25%"}},a.createElement("iframe",{src:"//player.bilibili.com/player.html?bvid=BV1W14y167x7&page=1&high_quality=1&danmaku=0",scrolling:"no",frameBorder:"no",allowFullScreen:!0,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"}}))),a.createElement(i.Z,{value:"kotlin",label:"Kotlin"},a.createElement("div",{style:{position:"relative",width:"100%",paddingTop:"56.25%"}},a.createElement("iframe",{src:"//player.bilibili.com/player.html?bvid=BV1ic411F7hz&page=1&high_quality=1&danmaku=0",scrolling:"no",frameBorder:"no",allowFullScreen:!0,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"}})))),a.createElement(l.Z,{type:"info"},"\u548cGraphQL\u6bd4\u8f83",a.createElement("ul",null,a.createElement("li",null,"GraphQL\u57fa\u4e8eHTTP\u670d\u52a1\uff0c\u8be5\u529f\u80fd\u53ea\u6709\u5728\u8de8\u8d8aHTTP\u670d\u52a1\u7684\u8fb9\u754c\u624d\u80fd\u5448\u73b0\uff1b\u800c\u5728Jimmer\u4e2d\uff0c\u8fd9\u662fORM\u7684\u57fa\u7840API\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u4ee3\u7801\u903b\u8f91\u4e2d\u4f7f\u7528\u6b64\u80fd\u529b\u3002"),a.createElement("li",null,"\u622a\u6b62\u5230\u76ee\u524d\u4e3a\u6b62\uff0cGraphQL\u534f\u8bae\u4e0d\u652f\u6301\u5bf9\u6df1\u5ea6\u65e0\u9650\u7684\u81ea\u5173\u8054\u5c5e\u6027\u7684\u9012\u5f52\u67e5\u8be2\uff1b\u800cJimmer\u652f\u6301\u3002")))),d=a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"language"},a.createElement(i.Z,{value:"java",label:"Java"},a.createElement("video",{width:"100%",controls:!0},a.createElement("source",{src:s,type:"video/mp4"}),a.createElement("div",{style:{padding:"1rem",fontSize:"2rem",color:"red"}},"Your browser does not support the video tag."))),a.createElement(i.Z,{value:"kotlin",label:"Kotlin"},a.createElement("video",{width:"100%",controls:!0},a.createElement("source",{src:u,type:"video/mp4"}),a.createElement("div",{style:{padding:"1rem",fontSize:"2rem",color:"red"}},"Your browser does not support the video tag.")))),a.createElement(l.Z,{type:"info"},"Compare to GraphQL",a.createElement("ul",null,a.createElement("li",null,"GraphQL is based on HTTP services, which can only be experienced if it crosses the boundaries of HTTP services. In Jimmer, this is the underlying API for ORM, and you can use this capability in any code logic."),a.createElement("li",null,"Until now, the GraphQL protocol does not support recursive queries on self-associated properties with infinite depth; And Jimmer supports"))))},32102:(e,t,n)=>{n.d(t,{s:()=>f});var a=n(83117),r=n(67294),i=n(42293),o=n(50657),l=n(6514),c=n(54776),s=n(10155),u=n(15861),m=n(93946),d=n(9137),p=n(61274),h=n(50594);const f=(0,r.memo)((e=>{let{open:t,fullScreen:n=!1,title:a,maxWidth:c="md",onClose:f,children:b}=e;const[y,g]=(0,r.useState)(n),E=(0,r.useCallback)((()=>{g((e=>!e))}),[]);return r.createElement(o.Z,{open:t,onClose:f,fullScreen:y,TransitionComponent:v,maxWidth:c},r.createElement(i.Z,{sx:{position:"relative"}},r.createElement(s.Z,null,r.createElement(u.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},a),r.createElement(m.Z,{onClick:E,style:{color:"white"}},y?r.createElement(p.Z,null):r.createElement(d.Z,null)),r.createElement(m.Z,{"aria-label":"close",onClick:f,style:{color:"white"}},r.createElement(h.Z,null)))),r.createElement(l.Z,null,b))})),v=r.forwardRef((function(e,t){return r.createElement(c.Z,(0,a.Z)({direction:"up",ref:t},e))}))},39511:(e,t,n)=>{n.d(t,{b:()=>o});var a=n(67294),r=n(83321),i=n(32102);const o=(0,a.memo)((e=>{let{buttonText:t,fullScreen:n=!1,title:o=t,variant:l="outlined",large:c=!1,maxWidth:s,useOriginalText:u=!0,children:m}=e;const[d,p]=(0,a.useState)(!1),h=(0,a.useCallback)((e=>{p(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),f=(0,a.useCallback)((()=>{p(!1)}),[]),v=u?{textTransform:"none"}:{};return a.createElement(a.Fragment,null,a.createElement(r.Z,{"data-is-view-more-button":"true",onClick:h,variant:l,size:c?"large":"small",style:v},t),a.createElement(i.s,{open:d,onClose:f,title:o,maxWidth:s,fullScreen:n},m))}))},53143:(e,t,n)=>{n.d(t,{S:()=>r});var a=n(52263);function r(){const{i18n:e}=(0,a.Z)(),t=e.currentLocale;return"zh"===t||"zh_cn"===t||"zh_CN"==t}},26107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(83117),r=(n(67294),n(3905)),i=n(13531);const o={sidebar_position:2,title:"1. Query Arbitrary Shape"},l=void 0,c={unversionedId:"quick-view/fetch/index",id:"quick-view/fetch/index",title:"1. Query Arbitrary Shape",description:"Basic Concepts",source:"@site/docs/quick-view/fetch/index.mdx",sourceDirName:"quick-view/fetch",slug:"/quick-view/fetch/",permalink:"/jimmer-doc/docs/quick-view/fetch/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/quick-view/fetch/index.mdx",tags:[],version:"current",lastUpdatedAt:1712763207,formattedLastUpdatedAt:"Apr 10, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"1. Query Arbitrary Shape"},sidebar:"tutorialSidebar",previous:{title:"Precondition",permalink:"/jimmer-doc/docs/quick-view/precondition"},next:{title:"Feature Introduction",permalink:"/jimmer-doc/docs/quick-view/fetch/feature"}},s={},u=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Demo",id:"demo",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,r.kt)("p",null,"Although Jimmer entities are strongly typed, they are also dynamic and can express the ever-changing shape of data structures. "),(0,r.kt)("p",null,"Therefore, Jimmer supports ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectFetcher"),", which can control the shape of the queried data structure and then uniformly return Jimmer entities. "),(0,r.kt)("admonition",{title:"This is an extremely similar concept to GraphQL, but there are huge differences:",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GraphQL is an application layer protocol based on HTTP that can only expose this capability by building HTTP services, and only HTTP clients can enjoy this capability. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For Jimmer, the ability to query arbitrary shapes is an inherent behavior of ORM that can be used programmed anywhere."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can use it to expose ",(0,r.kt)("a",{parentName:"p",href:"../../graphql"},"GraphQL services"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As shown in the content of this section, you can also expose REST services.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It can even be used within applications without crossing any remote boundaries.")))))),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)(i.R1,{mdxType:"ObjectFetcherPanel"}))}d.isMDXComponent=!0},98614:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/medias/java-fetcher-a47c6f710d4cc259e540c4a5909ae021.mp4"},67714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/medias/kotlin-fetcher-b8ddc7a4ad25644d36d580ac726ec13f.mp4"}}]);