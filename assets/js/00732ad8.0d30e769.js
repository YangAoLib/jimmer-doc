"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6701],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(t),c=i,b=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return t?a.createElement(b,r(r({ref:n},p),{},{components:t})):a.createElement(b,r({ref:n},p))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var m=2;m<o;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),i=t(34334);const o="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(83117),i=t(67294),o=t(34334),r=t(72389),l=t(67392),s=t(7094),m=t(12466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var n;const{lazy:t,block:r,defaultValue:d,values:c,groupId:b,className:y}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),I=(0,l.l)(h,((e,n)=>e.value===n.value));if(I.length>0)throw new Error(`Docusaurus error: Duplicate values "${I.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[T,f]=(0,i.useState)(g),M=[],{blockElementScrollPositionUntilNextRender:O}=(0,m.o5)();if(null!=b){const e=v[b];null!=e&&e!==T&&h.some((n=>n.value===e))&&f(e)}const Z=e=>{const n=e.currentTarget,t=M.indexOf(n),a=h[t].value;a!==T&&(O(n),f(a),null!=b&&N(b,String(a)))},j=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=M.indexOf(e.currentTarget)+1;t=M[n]??M[0];break}case"ArrowLeft":{const n=M.indexOf(e.currentTarget)-1;t=M[n]??M[M.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},y)},h.map((e=>{let{value:n,label:t,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>M.push(e),onKeyDown:j,onFocus:Z,onClick:Z},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,i.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function c(e){const n=(0,r.Z)();return i.createElement(d,(0,a.Z)({key:String(n)},e))}},7469:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var a=t(83117),i=(t(67294),t(3905)),o=t(65488),r=t(85162);const l={sidebar_position:4,title:"Many To Many"},s=void 0,m={unversionedId:"mapping/base/association/many-to-many",id:"mapping/base/association/many-to-many",title:"Many To Many",description:"This chapter introduces how to use the @org.babyfish.jimmer.sql.ManyToMany annotation to declare many-to-many association properties.",source:"@site/docs/mapping/base/association/many-to-many.mdx",sourceDirName:"mapping/base/association",slug:"/mapping/base/association/many-to-many",permalink:"/jimmer-doc/docs/mapping/base/association/many-to-many",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/base/association/many-to-many.mdx",tags:[],version:"current",lastUpdatedAt:1731277648,formattedLastUpdatedAt:"Nov 10, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Many To Many"},sidebar:"tutorialSidebar",previous:{title:"One To Many",permalink:"/jimmer-doc/docs/mapping/base/association/one-to-many"},next:{title:"Naming Strategy",permalink:"/jimmer-doc/docs/mapping/base/naming-strategy"}},p={},u=[{value:"Owning Side",id:"owning-side",level:2},{value:"Inverse Side",id:"inverse-side",level:2},{value:"If business fields need to be added to the join table",id:"if-business-fields-need-to-be-added-to-the-join-table",level:2}],d={toc:u};function c(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This chapter introduces how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.ManyToMany")," annotation to declare many-to-many association properties."),(0,i.kt)("p",null,"Many-to-many supports bidirectional association. For bidirectional associations, one side must be the owning side, and the other side must be the inverse side."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Owning side (required): The actual mapping between the database and association properties to implement unidirectional many-to-many association.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inverse side (optional): If a unidirectional association already exists, the inverse side can be configured as a mirror of the owning side to form a bidirectional association."))),(0,i.kt)("p",null,"Let's assume there are two entity types Book and Author, and establish a bidirectional many-to-many association between them."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Different from JPA/Hibernate, the owning side and inverse side can be chosen arbitrarily. Both can be used to persist associations."),(0,i.kt)("p",{parentName:"admonition"},"The example in this article chooses:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Owning side (required): ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inverse side (optional): ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.books"))))),(0,i.kt)("h2",{id:"owning-side"},"Owning Side"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @ManyToMany  \n    List<Author> authors();\n\n    ...Omit other code...\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n\n    @ManyToMany\n    val authors: List<Author>\n\n    ...Omit other code...\n}\n")))),(0,i.kt)("p",null,"Many-to-many associations must be implemented based on a join table, even if the ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinTable")," annotation is not used in the above code, it is actually equivalent to using the annotation."),(0,i.kt)("p",null,"If no properties are specified for ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinTable"),", and even ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinTable")," itself is omitted (like the previous code), Jimmer will deduce the column names corresponding to the ",(0,i.kt)("inlineCode",{parentName:"p"},"authors")," property based on the ",(0,i.kt)("a",{parentName:"p",href:"../naming-strategy"},"naming strategy"),"."),(0,i.kt)("p",null,"If the default ",(0,i.kt)("a",{parentName:"p",href:"../naming-strategy"},"naming strategy")," is not overridden by the user, the deduced join table information is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Join table name: BOOK_AUTHOR_MAPPING"),(0,i.kt)("li",{parentName:"ul"},"Join table foreign key column pointing to current entity: BOOK_ID "),(0,i.kt)("li",{parentName:"ul"},"Join table foreign key column pointing to associated entity: AUTHOR_ID")),(0,i.kt)("p",null,"So the previous code is equivalent to:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID", \n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    List<Author> authors();\n\n    ...Omit other code...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    val authors: List<Author>\n\n    ...Omit other code...\n}\n')))),(0,i.kt)("p",null,"The join table ",(0,i.kt)("inlineCode",{parentName:"p"},"BOOK_AUTHOR_MAPPING")," is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table BOOK_AUTHOR_MAPPING(\n    BOOK_ID bigint not null,\n    AUTHOR_ID bigint not null\n);\n\nalter table AUTHOR_MAPPING\n    add constraint PK_AUTHOR_MAPPING\n        primary(BOOK_ID, AUTHOR_ID);\n\n// If foreign key pointing to current entity is real, \n// create foreign key constraint  \nalter table BOOK_AUTHOR_MAPPING\n    add constraint FK_BOOK_AUTHOR_MAPPING__BOOK\n        foreign key(BOOK_ID)\n            references BOOK(ID);\n\n// If foreign key pointing to associated entity is real, \n// create foreign key constraint\nalter table BOOK_AUTHOR_MAPPING\n    add constraint FK_BOOK_AUTHOR_MAPPING__AUTHOR\n        foreign key(AUTHOR_ID)\n            references AUTHOR(ID);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The join table has only two foreign keys, both non-null. The join table maintains the association by inserting and deleting data, never storing null data itself.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The join table has no corresponding ORM entity and does not need an independent primary key. The two foreign keys combined can serve as the primary key."))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Note"),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToMany")," association property must be non-null. If an object requires fetching its many-to-many association properties, then for the current object that has no corresponding associated object, the value of this property is a collection of length 0 rather than null.")),(0,i.kt)("h2",{id:"inverse-side"},"Inverse Side"),(0,i.kt)("p",null,"The configuration of the inverse side is very simple, just specify that ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.books")," is the mirror of ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors"),"."),(0,i.kt)("p",null,"In the following code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Left: The owning side discussed in the previous section")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Right: The inverse side association ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.books")," introduced in this section, which is the mirror of ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")))),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},'@ManyToMany(mappedBy = "store")')," indicates that the current property ",(0,i.kt)("inlineCode",{parentName:"p"},"Authors.books")," is the mirror of ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors"),"."),(0,i.kt)("div",{style:{display:"flex",alignItems:"start"}},(0,i.kt)("div",null,(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID" \n    )\n    List<Author> authors();\n\n    ...Omit other code...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    val authors: List<Author>\n\n    ...Omit other code...\n}\n'))))),(0,i.kt)("div",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mirror",src:t(31024).Z,width:"130",height:"239"}))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'@Entity\npublic interface Author {\n\n    // `mappedBy` indicates `Author.books`\n    // is the mirror of `Book.authors`\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors") \n    List<Book> books();\n\n    ...Omit other code...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'@Entity\ninterface Author {\n\n    // `mappedBy` indicates `Author.books` \n    // is the mirror of `Book.authors`\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...Omit other code...\n}\n')))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Note:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"mappedBy")," property of ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToMany")," is specified, ",(0,i.kt)("inlineCode",{parentName:"p"},"@JoinTable")," must not be used.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Like the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToMany")," association property on the owning side, the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToMany")," association on the inverse side must also be non-null for the same reason.")))),(0,i.kt)("h2",{id:"if-business-fields-need-to-be-added-to-the-join-table"},"If business fields need to be added to the join table"),(0,i.kt)("p",null,"For the many-to-many association discussed in this article, no business fields other than the two foreign keys can be defined on the join table."),(0,i.kt)("p",null,"If you want to define more other business fields in the join table of the many-to-many association, please refer to ",(0,i.kt)("a",{parentName:"p",href:"../../advanced/view/many-to-many-view"},"ManyToManyView"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"")))}c.isMDXComponent=!0},31024:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iMTI5LjUiIGhlaWdodD0iMjM5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj48ZGVmcyBpZD0iU3ZnanNEZWZzMTAwMiI+PC9kZWZzPjxnIGlkPSJTdmdqc0cxMDA4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTTY1IDI1TDY1IDExOS41TDY1IDExOS41TDY1IDIxNCIgc3Ryb2tlPSIjMzIzMjMyIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgaWQ9IlN2Z2pzRzEwMTAiIHRyYW5zZm9ybT0ibWF0cml4KDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxLC0xLDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxMDUsMjcpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxMSIgZD0iTSAwIDBMIDE4NCAwTCAxNzQgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDEzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNDhweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuODM2OTcwMTk4NzIxMDI5N2UtMTYsLTEsMSwtMS44MzY5NzAxOTg3MjEwMjk3ZS0xNiwyNS41MDAwMDAwMDAwMDAwMTgsMjEzLjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxNSIgZD0iTSAwIDBMIDE4NyAwTCAxNzcgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTYiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDE3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNTBweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48L3N2Zz4="}}]);