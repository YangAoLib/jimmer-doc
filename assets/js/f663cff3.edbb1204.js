"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2609],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,N=m["".concat(i,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(N,l(l({ref:t},p),{},{components:a})):n.createElement(N,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),r=a(67294),o=a(34334),l=a(72389),d=a(67392),i=a(7094),s=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:a,block:l,defaultValue:m,values:u,groupId:N,className:k}=e,T=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??T.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,d.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===m?m:m??(null==(t=T.find((e=>e.props.default)))?void 0:t.props.value)??T[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:g}=(0,i.U)(),[y,D]=(0,r.useState)(b),j=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=N){const e=v[N];null!=e&&e!==y&&f.some((t=>t.value===e))&&D(e)}const x=e=>{const t=e.currentTarget,a=j.indexOf(t),n=f[a].value;n!==y&&(C(t),D(n),null!=N&&g(N,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;a=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=j[t]??j[j.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},k)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>j.push(e),onKeyDown:I,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,r.cloneElement)(T.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},T.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function u(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},21289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var n=a(83117),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const d={sidebar_position:3,title:"Draft"},i=void 0,s={unversionedId:"object/draft",id:"object/draft",title:"Draft",description:"In previous documents we have seen that",source:"@site/docs/object/draft.mdx",sourceDirName:"object",slug:"/object/draft",permalink:"/jimmer-doc/docs/object/draft",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/object/draft.mdx",tags:[],version:"current",lastUpdatedAt:1709146645,formattedLastUpdatedAt:"Feb 28, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Draft"},sidebar:"tutorialSidebar",previous:{title:"Solution",permalink:"/jimmer-doc/docs/object/immutable/solution"},next:{title:"Working with Jackson",permalink:"/jimmer-doc/docs/object/jackson"}},p={},c=[{value:"Use preprocessor",id:"use-preprocessor",level:2},{value:"Define TreeNode",id:"define-treenode",level:3},{value:"Generate TreeNodeDraft",id:"generate-treenodedraft",level:3},{value:"Scalar properties",id:"scalar-properties",level:2},{value:"Reference associations",id:"reference-associations",level:2},{value:"Override getter <code>parent()</code>",id:"override-getter-parent",level:3},{value:"Add getter <code>parent(boolean)</code>",id:"add-getter-parentboolean",level:3},{value:"Add <code>setParent</code>",id:"add-setparent",level:3},{value:"Add lambda-based <code>applyParent</code>",id:"add-lambda-based-applyparent",level:3},{value:"Collection associations",id:"collection-associations",level:2},{value:"Inherit getter <code>childNodes()</code>",id:"inherit-getter-childnodes",level:3},{value:"Add getter <code>childNodes(boolean)</code>",id:"add-getter-childnodesboolean",level:3},{value:"Add <code>setChildNodes</code>",id:"add-setchildnodes",level:3},{value:"Add <code>addIntoChildNodes</code>",id:"add-addintochildnodes",level:3}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In previous documents we have seen that"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the user defines the ",(0,r.kt)("inlineCode",{parentName:"p"},"Book")," type, the example code can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"BookDraft")," type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the user defines the ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNode")," type, the example code can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," type"))),(0,r.kt)("p",null,"These types ending in ",(0,r.kt)("inlineCode",{parentName:"p"},"Draft")," that correspond one-to-one with user-defined types are called Draft types."),(0,r.kt)("h2",{id:"use-preprocessor"},"Use preprocessor"),(0,r.kt)("h3",{id:"define-treenode"},"Define TreeNode"),(0,r.kt)("p",null,"The user first defines an immutable data interface. Here, the ORM entity annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@Entity")," is not needed, the non-ORM annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@Immutable")," can achieve the demo purpose."),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},"package yourpackage;\n\nimport javax.validation.constraints.Null;\nimport java.util.List;\n\nimport org.babyfish.jimmer.Immutable;\n\n@Immutable\npublic interface TreeNode {\n    \n    String name();\n\n    @Null\n    TreeNode parent();\n\n    List<TreeNode> childNodes();\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNode.kt"',title:'"TreeNode.kt"'},"package yourpackage\n\nimport org.babyfish.jimmer.Immutable\n\n@Immutable\ninterface TreeNode {\n\n    val name: String\n\n    val parent: TreeNode?\n\n    val childNodes: List<TreeNode>\n}\n")))),(0,r.kt)("h3",{id:"generate-treenodedraft"},"Generate TreeNodeDraft"),(0,r.kt)("p",null,"To automatically generate ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft"),", the preprocessor needs to be enabled:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Java: Use AnnotationProcessor ",(0,r.kt)("inlineCode",{parentName:"p"},"jimmer-apt")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kotlin: Use KSP ",(0,r.kt)("inlineCode",{parentName:"p"},"jimmer-ksp")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"How to use ",(0,r.kt)("inlineCode",{parentName:"p"},"jimmer-apt"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"jimmer-ksp")," and how to handle possible issues are introduced in great detail in ",(0,r.kt)("a",{parentName:"p",href:"../quick-view/get-started/generate-code"},"Generate Code"),". This article will not repeat it.")),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"package org.babyfish.jimmer.example.core.model;\n\nimport java.util.List;\nimport org.babyfish.jimmer.DraftConsumer;\nimport org.babyfish.jimmer.lang.OldChain;\n\npublic interface TreeNodeDraft extends TreeNode, Draft {\n\n    // highlight-next-line\n    TreeNodeDraft.Producer $ = Producer.INSTANCE;\n\n\n    @OldChain\n    TreeNodeDraft setName(String name);\n\n\n    TreeNodeDraft parent();\n\n    TreeNodeDraft parent(boolean autoCreate);\n\n\n    @OldChain\n    TreeNodeDraft setParent(TreeNode parent);\n\n    @OldChain\n    TreeNodeDraft applyParent(DraftConsumer<TreeNodeDraft> block);\n\n    @OldChain\n    TreeNodeDraft applyParent(TreeNode base, DraftConsumer<TreeNodeDraft> block);\n\n\n\n    List<TreeNodeDraft> childNodes(boolean autoCreate);\n\n    @OldChain\n    TreeNodeDraft setChildNodes(List<TreeNode> childNodes);\n\n    @OldChain\n    TreeNodeDraft addIntoChildNodes(DraftConsumer<TreeNodeDraft> block);\n\n    @OldChain\n    TreeNodeDraft addIntoChildNodes(TreeNode base, DraftConsumer<TreeNodeDraft> block);\n\n\n\n    class Producer {\n\n        private Producer() {}\n\n        // highlight-next-line\n        public TreeNode produce(\n            DraftConsumer<TreeNodeDraft> block\n        ) {\n            return produce(null, block);\n        }\n\n        // highlight-next-line\n        public TreeNode produce(\n            TreeNode base, \n            DraftConsumer<TreeNodeDraft> block\n        ) {\n            ...omit...\n        }\n\n        ...other code omitted...\n    }\n\n    ...other code omitted...\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode {\n    public override var name: String\n\n    public override var parent: TreeNode?\n\n    public override var childNodes: List<TreeNode>\n\n    public fun parent(): TreeNodeDraft\n\n    public fun childNodes(): MutableList<TreeNodeDraft>\n\n    public object `$` {\n        \n        ...other code omitted...\n\n        public fun produce(\n            base: TreeNode? = null, \n            block: TreeNodeDraft.() -> Unit\n        ): TreeNode {\n            ...omit code...\n        }\n    }\n\n    ...other code omitted...\n}\n\n// highlight-next-line\npublic fun ImmutableCreator<TreeNode>.`by`(\n    base: TreeNode? = null, \n    block: TreeNodeDraft.() -> Unit\n): TreeNode = \n    TreeNodeDraft.`$`.produce(base, block)\n\npublic fun MutableList<TreeNodeDraft>.addBy(\n    base: TreeNode? = null,\n    block: TreeNodeDraft.() -> Unit\n): MutableList<TreeNodeDraft> {\n    add(TreeNodeDraft.`$`.produce(base, block) as TreeNodeDraft)\n    return this\n}\n\n// highlight-next-line\npublic fun TreeNode.copy(block: TreeNodeDraft.() -> Unit): TreeNode =\n    TreeNodeDraft.`$`.produce(this, block)\n")))),(0,r.kt)("p",null,"You can use it like this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a brand new object from scratch"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"TreeNode oldTreeNode = Objects.createTreeNode(treeNodeDraft -> {\n        ...omitted...\n    });\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val oldTreeNode = new(TreeNode::class).by {\n    ...omitted...\n}\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Based on an existing object, make some "changes" and create a new object'),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"TreeNode newTreeNode = Objects.createTreeNode(oldTreeNode, treeNodeDraft -> {\n        ...omitted...\n    });\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val newTreeNode = new(TreeNode::class).by(oldTreeNode) {\n    ...omitted...\n}\n")),(0,r.kt)("p",{parentName:"li"},"or"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val newTreeNode = oldTreeNode.copy {\n    ...\u7701\u7565...\n}\n")))))),(0,r.kt)("h2",{id:"scalar-properties"},"Scalar properties"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TreeNode.name")," is a scalar property. ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," will define a ",(0,r.kt)("inlineCode",{parentName:"p"},"setter method/writable property")," like below:"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft setName(String name);\n\n    ...other code omitted...\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode {\n    \n    // var, not val\n    public override var name: String\n\n    ...other code omitted...\n}\n")))),(0,r.kt)("p",null,"Developers can use this method to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," property of the draft proxy:"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = Objects.createTreeNode(draft -> {\n        draft.setName("Root Node");\n    });\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    name = "Root Node"\n} \n')))),(0,r.kt)("h2",{id:"reference-associations"},"Reference associations"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TreeNode.parent")," is an association property. Its type is an object, not a collection. In ORM terms, it is a one-to-one or many-to-one association."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," defines multiple methods for it:"),(0,r.kt)("h3",{id:"override-getter-parent"},"Override getter ",(0,r.kt)("inlineCode",{parentName:"h3"},"parent()")),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    TreeNodeDraft parent();\n\n    ...other code omitted...\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode {\n    \n    public fun parent(): TreeNodeDraft\n\n    ...other code omitted...\n}\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that the return type of this method is ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNode"),"."),(0,r.kt)("p",{parentName:"admonition"},"That is, if the reference association of the draft object has been set and set to non-null, this method will definitely return the draft object. This allows the user to directly modify deeper associated objects.")),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = Objects.createTreeNode(treeNode, draft -> {\n        draft.parent().setName("Daddy"); \n        draft.parent().parent().setName("Grandpa");\n    });\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@DslScope  \nvar newTreeNode = new(TreeNode::class).by(treeNode) {\n    parent().name = "Daddy"\n    parent().parent().name = "Grandpa"\n}\n')))),(0,r.kt)("h3",{id:"add-getter-parentboolean"},"Add getter ",(0,r.kt)("inlineCode",{parentName:"h3"},"parent(boolean)")),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    TreeNode parent(boolean autoCreate);\n\n    ...other code omitted...\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode {\n\n    // This getter is equivalent to Java's `parent(false)`  \n    override fun parent: TreeNode\n    \n    // This function is equivalent to Java's `parent(true)`\n    public fun parent(): TreeNodeDraft\n\n    ...other code omitted...\n}\n")))),(0,r.kt)("p",null,"Java's ",(0,r.kt)("inlineCode",{parentName:"p"},"parent(false)")," and Kotlin's ",(0,r.kt)("inlineCode",{parentName:"p"},"parent")," have two issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Accessing it will cause an exception if the ",(0,r.kt)("inlineCode",{parentName:"p"},"parent")," property of the draft object is not set")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"parent")," property of the draft object is set to null, accessing it will return null, and null does not support further modification"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parent(true)")," can resolve the above issues. If either of the above situations is met, it will automatically create and set an associated object, then allow the user to modify it. This is a very useful feature, especially when creating objects from scratch."),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = Objects.createTreeNode(/* No `base` here */ draft -> {\n        draft.parent(true).setName("Daddy");\n        draft.parent(true).parent(true).setName("Grandpa");\n    });\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by /* No `base` here */ {\n    parent().setName("Daddy");\n    parent().parent().setName("Grandpa");\n}\n')))),(0,r.kt)("h3",{id:"add-setparent"},"Add ",(0,r.kt)("inlineCode",{parentName:"h3"},"setParent")),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft setParent(TreeNode parent);\n\n    ...other code omitted...\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode, Draft {\n\n    // var, not val\n    public var parent: TreeNode\n\n    ...other code omitted...\n}\n")))),(0,r.kt)("p",null,"This setter allows the user to replace the entire associated object."),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = Objects.createTreeNode(draft -> {\n        draft.setParent(\n            Objects.createTreeNode(daddyDraft -> {\n                daddyDraft.setName("Daddy")\n            })\n        )\n    });\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    parent = new(TreeNode::class).by {\n        name = "Daddy"\n    }\n}\n')))),(0,r.kt)("h3",{id:"add-lambda-based-applyparent"},"Add lambda-based ",(0,r.kt)("inlineCode",{parentName:"h3"},"applyParent")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This feature only applies to Java. "),(0,r.kt)("p",{parentName:"admonition"},"Kotlin code is already concise enough and does not need this method to simplify the code.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft applyParent(\n        DraftConsumer<TreeNodeDraft> block\n    );\n\n    @OldChain\n    TreeNodeDraft applyParent(\n        TreeNode base, \n        DraftConsumer<TreeNodeDraft> block\n    );\n\n    ...other code omitted...\n}\n")),(0,r.kt)("p",null,"These two setters are used to simplify the code. Since the two methods are highly similar in usage, only the first one is used as an example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"More verbose writing:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode oldTreeNode = Objects.createTreeNode(draft -> {\n        draft.setParent(\n            Objects.createTreeNode(daddyDraft -> {\n                daddyDraft.setName("Daddy")\n            })\n        )\n    });\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"More concise writing:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode oldTreeNode = Objects.createTreeNode(draft -> {\n        draft.applyParent(daddyDraft -> {\n            daddyDraft.setName("Daddy")\n        })\n    });\n')))),(0,r.kt)("p",null,"The two are completely equivalent."),(0,r.kt)("h2",{id:"collection-associations"},"Collection associations"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TreeNode.childNodes")," is an association property whose type is a collection rather than an object. In ORM terms, it is a one-to-many or many-to-many association."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," defines multiple methods for it:"),(0,r.kt)("h3",{id:"inherit-getter-childnodes"},"Inherit getter ",(0,r.kt)("inlineCode",{parentName:"h3"},"childNodes()")),(0,r.kt)("p",null,"For both Java and Kotlin, ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," cannot override the return type of ",(0,r.kt)("inlineCode",{parentName:"p"},"childNodes()")," method. From a syntactic point of view, it can only inherit the ",(0,r.kt)("inlineCode",{parentName:"p"},"childNodes()")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNode"),"."),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<TreeNode> childNodes(); \n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"var childNodes: List<TreeNode>\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Although the return type defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNode")," interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"List<TreeNode>"),", after being inherited by the ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," interface, its return type should be understood as ",(0,r.kt)("inlineCode",{parentName:"p"},"List<TreeNodeDraft>"),". ")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If the collection association of the draft object has been set, all elements in the returned collection are drafts. This allows the user to directly modify deeper associated objects in the collection.")),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = Objects.createTreeNode(treeNode, draft -> {\n        ((TreeNodeDraft)\n            draft\n                .childNodes().get(0)\n        ).setName("Son");\n        ((TreeNodeDraft)\n            draft\n                .childNodes().get(0)\n                .childNodes().get(0)\n        ).setName("Grandson");\n    });\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val newTreeNode = new(TreeNode::class).by(treeNode) {\n    (childNodes[0] as TreeNodeDraft)\n        .name = "Son"\n    (childNodes[0].childNodes[0] as TreeNodeDraft)\n        .name = "Son"\n}\n')))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The two forced type conversions in the above code significantly impair the developer experience. Therefore, this usage is not recommended in actual projects. "),(0,r.kt)("p",{parentName:"admonition"},"To achieve the same purpose, the ",(0,r.kt)("inlineCode",{parentName:"p"},"childNodes(boolean)")," method introduced below is more recommended.  ")),(0,r.kt)("h3",{id:"add-getter-childnodesboolean"},"Add getter ",(0,r.kt)("inlineCode",{parentName:"h3"},"childNodes(boolean)")),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    List<TreeNodeDraft> childNodes(boolean autoCreate);\n\n    ...other code omitted...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"childNodes(false)")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"childNodes()"),", and accessing it will cause an exception if the ",(0,r.kt)("inlineCode",{parentName:"p"},"childNodes")," property of the draft object is not set.\n",(0,r.kt)("inlineCode",{parentName:"p"},"childNodes(true)")," will resolve this problem by automatically creating and setting a collection if the collection association property has not yet been set, then allowing the user to modify that collection.")),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode, Draft {\n\n    override var childNodes: List<TreeNode>\n    \n    fun childNodes(): MutableList<TreeNode>\n\n    ...other code omitted...\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The getter of the ",(0,r.kt)("inlineCode",{parentName:"li"},"childNodes")," property is equivalent to Java's ",(0,r.kt)("inlineCode",{parentName:"li"},"childNodes(false)"),". Accessing it will cause an exception if this mutable proxy property is not set."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"childNodes()")," function is equivalent to Java's ",(0,r.kt)("inlineCode",{parentName:"li"},"childNodes(true)"),". It automatically creates the property if not set, allowing the user to modify the collection.")))),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = Objects.createTreeNode(treeNode, draft -> {\n        draft\n            .childNodes(false)\n            .get(0)\n            .setName("Son");\n        draft\n            .childNodes(false)\n            .get(0)\n            .childNodes(false)\n            .get(0)\n            .setName("Grandson");\n    });\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Indeed, when the parameter is true, childNodes(boolean) can automatically create the collection when the childNodes property is not specified."),(0,r.kt)("p",{parentName:"admonition"},"However, when the parameter is false, it is also very useful. Because the return type of this method is ",(0,r.kt)("inlineCode",{parentName:"p"},"List<TreeNodeDraft>")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"List<TreeNode>"),", the developer-unfriendly code in the previous example will no longer exist."))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val newTreeNode = new(TreeNode::class).by(treeNode) {\n    childNodes()[0].name = "Son"\n    childNodes()[0].childNodes()[0].name = "Grandson"\n}\n')))),(0,r.kt)("h3",{id:"add-setchildnodes"},"Add ",(0,r.kt)("inlineCode",{parentName:"h3"},"setChildNodes")),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft setChildNodes(List<TreeNode> childNodes);\n\n    ...other code omitted...\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode, Draft {\n\n    // var, not val\n    overrie var childNodes: List<TreeNode>\n\n    ...other code omitted...\n}\n")))),(0,r.kt)("p",null,"This setter allows the user to replace the entire associated collection."),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = Objects.createTreeNode(draft -> {\n        draft.setChildNodes(\n            Arrays.asList(\n                Objects.createTreeNode(childDraft -> {\n                    childDraft.setName("Eldest son")\n                }),\n                Objects.createTreeNode(childDraft -> {\n                    childDraft.setName("Second son")\n                })\n            )\n        )\n    });\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    childNodes = listOf(\n        new(TreeNode::class).by {\n            name = "Eldest son"\n        },\n        new(TreeNode::class).by {\n            name = "Second son"\n        }\n    )\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Somewhat cumbersome, the ",(0,r.kt)("inlineCode",{parentName:"p"},"addIntoChildNodes")," to be introduced below is more recommended.")),(0,r.kt)("h3",{id:"add-addintochildnodes"},"Add ",(0,r.kt)("inlineCode",{parentName:"h3"},"addIntoChildNodes")),(0,r.kt)("p",null,"In the example above, we used ",(0,r.kt)("inlineCode",{parentName:"p"},"setChildNodes")," to replace the entire collection, but we can also choose to add collection elements one by one, rather than replacing the entire collection at one time."),(0,r.kt)("p",null,"The generated code is:"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft addIntoChildNodes(\n        DraftConsumer<TreeNodeDraft> block\n    );\n\n    @OldChain\n    TreeNodeDraft addIntoChildNodes(\n        TreeNode base,\n        DraftConsumer<TreeNodeDraft> block  \n    );\n\n    ...other code omitted...\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode, Draft {\n\n    public fun childNodes(): MutableList<TreeNodeDraft>\n\n    ...other code omitted...\n}\n\n// highlight-next-line\npublic fun MutableList<TreeNodeDraft>.addBy(\n    base: TreeNode? = null,\n    block: TreeNodeDraft.() -> Unit\n): MutableList<TreeNodeDraft> {\n    ...omit...\n    return this;\n}\n")))),(0,r.kt)("p",null,"You should use it like this:"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = Objects.createTreeNode(draft -> {\n        draft\n            .addIntoChildNodes(childDraft ->\n                childDraft.setName("Eldest son")\n            )\n            .addIntoChildNodes(childDraft ->\n                childDraft.setName("Second son")\n            )\n    });\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    childNodes().addBy {\n        name = "Eldest son"\n    }\n    childNodes().addBy {\n        name = "Second son"\n    }\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This approach implicitly contains a feature that the ",(0,r.kt)("inlineCode",{parentName:"p"},"childNodes")," property of the draft object is not set and the collection is automatically created, i.e. it contains a built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"childNodes(true)"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obviously, this approach is simpler than using the setter to replace the entire collection, so it is more recommended.")))}u.isMDXComponent=!0}}]);