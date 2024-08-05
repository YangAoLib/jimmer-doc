"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9875],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return t?a.createElement(y,o(o({ref:n},p),{},{components:t})):a.createElement(y,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),i=t(34334);const r="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(83117),i=t(67294),r=t(34334),o=t(72389),l=t(67392),s=t(7094),d=t(12466);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){var n;const{lazy:t,block:o,defaultValue:c,values:m,groupId:y,className:h}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,l.l)(k,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:T}=(0,s.U)(),[w,N]=(0,i.useState)(v),I=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=y){const e=f[y];null!=e&&e!==w&&k.some((n=>n.value===e))&&N(e)}const L=e=>{const n=e.currentTarget,t=I.indexOf(n),a=k[t].value;a!==w&&(E(n),N(a),null!=y&&T(y,String(a)))},_=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=I.indexOf(e.currentTarget)+1;t=I[n]??I[0];break}case"ArrowLeft":{const n=I.indexOf(e.currentTarget)-1;t=I[n]??I[I.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},h)},k.map((e=>{let{value:n,label:t,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>I.push(e),onKeyDown:_,onFocus:L,onClick:L},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,i.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,o.Z)();return i.createElement(c,(0,a.Z)({key:String(n)},e))}},30532:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=t(83117),i=(t(67294),t(3905)),r=t(65488),o=t(85162);const l={sidebar_position:5,title:"View Properties"},s=void 0,d={unversionedId:"query/object-fetcher/view",id:"query/object-fetcher/view",title:"View Properties",description:"IdView",source:"@site/docs/query/object-fetcher/view.mdx",sourceDirName:"query/object-fetcher",slug:"/query/object-fetcher/view",permalink:"/jimmer-doc/docs/query/object-fetcher/view",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/object-fetcher/view.mdx",tags:[],version:"current",lastUpdatedAt:1704100403,formattedLastUpdatedAt:"Jan 1, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"View Properties"},sidebar:"tutorialSidebar",previous:{title:"Recursive Query",permalink:"/jimmer-doc/docs/query/object-fetcher/recursive"},next:{title:"Querying DTOs",permalink:"/jimmer-doc/docs/query/object-fetcher/dto"}},p={},u=[{value:"IdView",id:"idview",level:2},{value:"Modify the Example Entity Interface",id:"modify-the-example-entity-interface",level:3},{value:"Fetch <code>@IdView</code> Properties",id:"fetch-idview-properties",level:3},{value:"ManyToManyView",id:"manytomanyview",level:2},{value:"Prepare Data",id:"prepare-data",level:3},{value:"Define Entities",id:"define-entities",level:3},{value:"Fetch <code>@ManyToManyView</code> Properties",id:"fetch-manytomanyview-properties",level:3}],c={toc:u};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"idview"},"IdView"),(0,i.kt)("p",null,"For data structures, frontends and backends have different preferences. Backends prefer structured data, while frontends prefer flattened data."),(0,i.kt)("p",null,"For IdOnly objects, Jimmer provides the ",(0,i.kt)("a",{parentName:"p",href:"../../mapping/advanced/view/id-view"},"@IdView")," annotation to easily flatten IdOnly objects into a field."),(0,i.kt)("h3",{id:"modify-the-example-entity-interface"},"Modify the Example Entity Interface"),(0,i.kt)("p",null,"In the example entity interface, two ",(0,i.kt)("inlineCode",{parentName:"p"},"@IdView")," properties are added, which are view properties. The value of these properties will be automatically synchronized with the value of the corresponding associated object."),(0,i.kt)("p",null,"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"IdView")," of a collection property, the corresponding association property needs to be specified manually."),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Book {\n\n    ...Other properties omitted...\n\n    @Nullable\n    @ManyToOne\n    BookStore store();\n\n    @ManyToMany\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView\n    Long storeId();\n\n    // highlight-next-line\n    @IdView("authors")\n    List<Long> authorIds();\n}\n\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Book {\n\n    ...Other properties omitted...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    val authors: List<Author>\n\n    // highlight-next-line\n    @IdView\n    val storeId: Long?\n\n    // highlight-next-line\n    @IdView("authors")\n    val authorsIds: List<Long>\n}\n')))),(0,i.kt)("h3",{id:"fetch-idview-properties"},"Fetch ",(0,i.kt)("inlineCode",{parentName:"h3"},"@IdView")," Properties"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"View properties need to be fetched manually. ",(0,i.kt)("inlineCode",{parentName:"p"},"allScalarFields")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"allTableFields")," will not automatically fetch view properties.")),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> bookWithIdViews = sqlClient\n    .createQuery(book)\n    .where(book.edition().eq(3))\n    .select(\n        book.fetch(\n            Fetchers.BOOK_FETCHER\n                .allScalarFields()\n                // highlight-next-line\n                .storeId()\n                // highlight-next-line\n                .authorIds()\n        )\n    )\n    .execute();\nSystem.out.println(bookWithIdViews);\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"var bookWithIdViews = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition eq 3)\n        select(\n            table.fetchBy {\n                allScalarFields\n                // highlight-next-line\n                storeId\n                // highlight-next-line\n                authorIds\n            }\n        )\n    }\n    .execute()\nprintln(bookWithIdViews)\n")))),(0,i.kt)("p",null,"The output is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": 3,\n        "name": "Learning GraphQL",\n        "edition": 3,\n        "price": 51.00,\n        // highlight-next-line\n        "storeId": 1,\n        // highlight-next-line\n        "authorIds": [1,2]\n    }\n    ...Other objects omitted\n]\n')),(0,i.kt)("h2",{id:"manytomanyview"},"ManyToManyView"),(0,i.kt)("p",null,"In some scenarios, the join table of a many-to-many association contains not only the IDs of both sides, but also some other fields."),(0,i.kt)("p",null,"A join table with additional fields besides the two IDs cannot be directly mapped to a ",(0,i.kt)("inlineCode",{parentName:"p"},"ManyToMany")," association. We have no choice but to create three entity types: the original two entities and an intermediate entity. Each side entity has a one-to-many association pointing to the intermediate entity, and the intermediate entity has two many-to-one associations pointing to the two side entities."),(0,i.kt)("p",null,"Fortunately, Jimmer provides ",(0,i.kt)("a",{parentName:"p",href:"../../mapping/advanced/view/many-to-many-view"},"@ManyToManyView")," to abstract a many-to-many association between the two side entities on top of this three-entity structure."),(0,i.kt)("p",null,"To better demonstrate, instead of using books and authors, a more realistic example with students, courses, and learning_link tables is used."),(0,i.kt)("h3",{id:"prepare-data"},"Prepare Data"),(0,i.kt)("p",null,"For convenience, H2 database is used here. First create the table structure and initialize data with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"drop table course if exists;\ndrop table learning_link if exists;\ndrop table student if exists;\n\ncreate table course(\n    id identity(100, 1) not null,\n    name varchar(50) not null,\n    academic_credit integer not null\n);\n\ncreate table student(\n    id identity(100, 1) not null,\n    name varchar(50) not null\n);\n\ncreate table learning_link(\n    id identity(100, 1) not null,\n    student_id int not null,\n    course_id int not null,\n    score int null\n);\n\nalter table learning_link\n    add constraint fk_learning_link__student\n        foreign key(student_id)\n            references student(id)\n            on delete cascade;\n\nalter table learning_link\n    add constraint fk_learning_link__course\n        foreign key(course_id)\n            references course(id)\n            on delete cascade;\n\ninsert into student(id, name)\nvalues  (1, 'John'),\n        (2, 'Jane'),\n        (3, 'Jack'),\n        (4, 'Jill'),\n        (5, 'Joe');\n\ninsert into course(id, name, academic_credit)\nvalues  (1, 'Math', 100),\n        (2, 'English', 100),\n        (3, 'History', 100),\n        (4, 'Science', 100),\n        (5, 'Art', 100);\n\ninsert into learning_link(student_id, course_id, score)\nvalues  (1, 1, 100), (1, 2, 90), (1, 3, 80), (1, 4, 70), (1, 5, 60),\n        (2, 1, 90), (2, 2, 80), (2, 3, 70), (2, 4, 60), (2, 5, 100),\n        (3, 1, 80), (3, 2, 70), (3, 3, 60), (3, 4, 100), (3, 5, 90),\n        (4, 1, 70), (4, 2, 60), (4, 3, 100), (4, 4, 90), (4, 5, 80),\n        (5, 1, 60), (5, 2, 100), (5, 3, 90), (5, 4, 80), (5, 5, 70);\n")),(0,i.kt)("h3",{id:"define-entities"},"Define Entities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Student"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Student {\n\n    @Id\n    long id();\n\n    String name();\n\n    @OneToMany(mappedBy = "student")\n    List<LearningLink> learningLinks();\n\n    // ManyToMany view property\n    // prop: One-to-many to intermediate entity `learningLinks`\n    // deeperProp: Many-to-one from intermediate to target entity `course` (optional)\n    // highlight-next-line\n    @ManyToManyView(prop = "learningLinks", deeperProp = "course") \n    List<Course> courses();\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity  \ninterface Student {\n    @Id\n    val id: Long\n\n    val name: String\n\n    @OneToMany(mappedBy = "student")\n    val learningLinks: List<LearningLink>\n\n    // ManyToMany view property\n    // prop: One-to-many to intermediate entity `learningLinks`\n    // deeperProp: Many-to-one from intermediate to target entity `course` (optional)\n    // highlight-next-line\n    @ManyToManyView(prop = "learningLinks", deeperProp = "course")\n    val courses: List<Course>\n}\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Course"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Course {\n\n    @Id\n    long id();\n\n    String name();\n\n    int academicCredit();\n\n    @OneToMany(mappedBy = "course")\n    List<LearningLink> learningLinks();\n\n    // ManyToMany view property\n    // prop: One-to-many to intermediate entity `learningLinks`\n    // deeperProp: Many-to-one from intermediate to target entity `student` (optional)\n    // highlight-next-line  \n    @ManyToManyView(prop = "learningLinks", deeperProp = "student")\n    List<Student> students();\n}\n\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Course {\n    @Id\n    val id: Long\n\n    val name: String\n\n    val academicCredit: Int\n\n    @OneToMany(mappedBy = "course")\n    val learningLinks: List<LearningLink>\n\n    // ManyToMany view property\n    // prop: One-to-many to intermediate entity `learningLinks` \n    // deeperProp: Many-to-one from intermediate to target entity `student` (optional)\n    // highlight-next-line\n    @ManyToManyView(prop = "learningLinks", deeperProp = "student")\n    val students: List<Student>\n}\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Intermediate Entity LearningLink"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface LearningLink {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // Many-to-one, points to Student entity\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    Student student();\n\n    // Many-to-one, points to Course entity\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    Course course();\n\n    Integer score();\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface LearningLink {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // Many-to-one, points to Student entity\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    val student: Student\n\n    // Many-to-one, points to Course entity  \n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    val course: Course\n\n    val score: Int\n}\n")))))),(0,i.kt)("h3",{id:"fetch-manytomanyview-properties"},"Fetch ",(0,i.kt)("inlineCode",{parentName:"h3"},"@ManyToManyView")," Properties"),(0,i.kt)("p",null,"With the introduction of the intermediate entity, Student and Course entities are no longer directly associated. Although they can be indirectly associated through a ",(0,i.kt)("inlineCode",{parentName:"p"},"Student->LearningLink->Course")," path, the path is too long."),(0,i.kt)("p",null,"Besides, the intermediate ",(0,i.kt)("inlineCode",{parentName:"p"},"LearningLink")," entity should be hidden as much as possible, only used when reading/writing scores."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../../mapping/advanced/view/many-to-many-view"},"@ManyToManyView")," properties ",(0,i.kt)("em",{parentName:"p"},"(e.g. ",(0,i.kt)("inlineCode",{parentName:"em"},"Student.courses")," in this example)")," can be used in object fetchers to reduce the path length."),(0,i.kt)("p",null,"For example, the following query gets all course names for the student with id 1:"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Student student = sqlClient\n    .findNullable(\n        1L,\n        Fetchers.STUDENT_FETCHER\n            .name()\n            // highlight-next-line\n            .courses(\n                Fetchers.COURSE_FETCHER\n                    .name()\n            )\n    )\nSystem.out.println(student);\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val student = sqlClient\n    .findNullable(\n        1L,\n        newFetcher(Student::class).by {\n            name()\n            // highlight-next-line\n            courses {\n                name()\n            }\n        }\n    )\nprintln(student)\n")))),(0,i.kt)("p",null,"The generated SQL is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Query ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, tb_1_.NAME  \nfrom STUDENT tb_1_\nwhere tb_1_.ID = ? /* 1 */\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Query ",(0,i.kt)("inlineCode",{parentName:"p"},"LearningLink")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select  \n    tb_1_.STUDENT_ID,\n    tb_1_.ID, tb_1_.COURSE_ID\nfrom LEARNING_LINK tb_1_ \nwhere tb_1_.STUDENT_ID in (? /* 1 */)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Query ",(0,i.kt)("inlineCode",{parentName:"p"},"Course")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID, tb_1_.NAME   \nfrom COURSE tb_1_\nwhere tb_1_.ID in (\n    ? /* 1 */, ? /* 2 */, ? /* 3 */,\n    ? /* 4 */, ? /* 5 */  \n)\n")))),(0,i.kt)("p",null,"The output is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "name": "John",\n    // highlight-next-line\n    "courses": [\n        {\n            "id": 1,\n            "name": "Math"\n        },\n        {\n            "id": 2, \n            "name": "English"\n        },\n        {\n            "id": 3,\n            "name": "History"\n        },\n        {\n            "id": 4,\n            "name": "Science" \n        },\n        {\n            "id": 5,\n            "name": "Art"\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"With many-to-many view properties, associated objects can be operated as conveniently as if the intermediate entity did not exist at all."))}m.isMDXComponent=!0}}]);