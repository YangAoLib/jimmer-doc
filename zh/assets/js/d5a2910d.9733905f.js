"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7069],{1700:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>i});var t=r(74848),l=r(28453),s=r(11470),a=r(19365);const i=[{value:"1. \u8f83\u5c11\u5c5e\u6027",id:"1-\u8f83\u5c11\u5c5e\u6027",level:2},{value:"2. \u8f83\u591a\u5c5e\u6027",id:"2-\u8f83\u591a\u5c5e\u6027",level:2},{value:"3. \u5305\u542b\u5173\u8054",id:"3-\u5305\u542b\u5173\u8054",level:2},{value:"4. \u66f4\u591a\u5173\u8054 (\u66f4\u5927\u5e7f\u5ea6)",id:"4-\u66f4\u591a\u5173\u8054-\u66f4\u5927\u5e7f\u5ea6",level:2},{value:"5. \u66f4\u6df1\u5173\u8054 (\u66f4\u5927\u6df1\u5ea6)",id:"5-\u66f4\u6df1\u5173\u8054-\u66f4\u5927\u6df1\u5ea6",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"1-\u8f83\u5c11\u5c5e\u6027",children:"1. \u8f83\u5c11\u5c5e\u6027"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Immutables.createBook(draft -> {\n    draft.setName("Learning GraphQL");\n});\n'})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = Book {\n    name = "Learning GraphQL"\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u65f6\uff0c",(0,t.jsx)(n.code,{children:"book"}),"\u5bf9\u8c61\u5bf9\u5e94\u7684JSON\u5982\u4e0b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{"name": "Learning GraphQL"}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"2-\u8f83\u591a\u5c5e\u6027",children:"2. \u8f83\u591a\u5c5e\u6027"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Immutables.createBook(draft -> {\n    draft.setName("Learning GraphQL");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("49.99"));\n});\n'})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = Book {\n    name = "Learning GraphQL"\n    edition = 1\n    price = BigDecimal("49.99")\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u65f6\uff0c",(0,t.jsx)(n.code,{children:"book"}),"\u5bf9\u8c61\u5bf9\u5e94\u7684JSON\u5982\u4e0b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "Learning GraphQL",\n    "edition": 1,\n    "price": 49.99\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"3-\u5305\u542b\u5173\u8054",children:"3. \u5305\u542b\u5173\u8054"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Immutables.createBook(draft -> {\n    draft.setName("Learning GraphQL");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("49.99"));\n    draft.applyStore(store -> {\n        store.setName("O\'REILLY");\n        store.setWebsite("https://www.oreilly.com/");\n    });\n});\n'})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = Book {\n    name = "Learning GraphQL"\n    edition = 1\n    price = BigDecimal("49.99")\n    store {\n        name = "O\'REILLY"\n        website = "https://www.oreilly.com/"\n    }\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u65f6\uff0c",(0,t.jsx)(n.code,{children:"book"}),"\u5bf9\u8c61\u5bf9\u5e94\u7684JSON\u5982\u4e0b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "Learning GraphQL",\n    "edition": 1,\n    "price": 49.99,\n    "store": {\n        "name": "O\'REILLY",\n        "website": "https://www.oreilly.com/"\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"4-\u66f4\u591a\u5173\u8054-\u66f4\u5927\u5e7f\u5ea6",children:"4. \u66f4\u591a\u5173\u8054 (\u66f4\u5927\u5e7f\u5ea6)"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Immutables.createBook(draft -> {\n    draft.setName("Learning GraphQL");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("49.99"));\n    draft.applyStore(store -> {\n        store.setName("O\'REILLY");\n        store.setWebsite("https://www.oreilly.com/");\n    });\n    draft.addIntoAuthors(author -> { \n        author.setFirstName("Eve");\n        author.setLastName("Procello");\n        author.setGender(Gender.FEMALE);\n    });\n    draft.addIntoAuthors(author -> { \n        author.setFirstName("Alex");\n        author.setLastName("Banks");\n        author.setGender(Gender.MALE);\n    });\n});\n'})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = Book {\n    name = "Learning GraphQL"\n    edition = 1\n    price = BigDecimal("49.99")\n    store {\n        name = "O\'REILLY"\n        website = "https://www.oreilly.com/"\n    }\n    authors().addBy {\n        firstName = "Eve"\n        setLastName = "Procello"\n        gender = Gender.FEMALE\n    }\n    authors().addBy {\n        firstName = "Alex"\n        lastName = "Banks"\n        gender = Gender.MALE\n    }\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u65f6\uff0c",(0,t.jsx)(n.code,{children:"book"}),"\u5bf9\u8c61\u5bf9\u5e94\u7684JSON\u5982\u4e0b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "Learning GraphQL",\n    "edition": 1,\n    "price": 49.99,\n    "store": {\n        "name": "O\'REILLY",\n        "website": "https://www.oreilly.com/"\n    },\n    "authors": [\n        {\n            "firstName": "Eve",\n            "lastName": "Procello",\n            "gender:" "FEMALE"\n        },\n        {\n            "firstName": "Alex",\n            "lastName": "Banks",\n            "gender:" "MALE"\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"5-\u66f4\u6df1\u5173\u8054-\u66f4\u5927\u6df1\u5ea6",children:"5. \u66f4\u6df1\u5173\u8054 (\u66f4\u5927\u6df1\u5ea6)"}),"\n",(0,t.jsxs)(n.p,{children:["\u548c\u524d\u9762\u7684\u4f8b\u5b50\u4e0d\u540c\uff0c\u8fd9\u91cc\uff0c\u6211\u4eec\u9009\u62e9\u7528",(0,t.jsx)(n.code,{children:"BookStore"}),"\u4f5c\u4e3a\u6570\u636e\u7ed3\u6784\u7684\u805a\u5408\u6839\uff0c\u800c\u975e",(0,t.jsx)(n.code,{children:"Book"}),"\u3002"]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookStore store = Immutables.createBookStore(draft -> {\n    draft.setName("O\'REILLY");\n    draft.setWebsite("https://www.oreilly.com/");\n    draft.addIntoBooks(book -> {\n        book.setName("Learning GraphQL");\n        book.setEdition(1);\n        book.setPrice(new BigDecimal("49.99"));\n        book.addIntoAuthors(author -> { \n            author.setFirstName("Eve");\n            author.setLastName("Procello");\n            author.setGender(Gender.FEMALE);\n        });\n        book.addIntoAuthors(author -> { \n            author.setFirstName("Alex");\n            author.setLastName("Banks");\n            author.setGender(Gender.MALE);\n        });\n    });\n});\n'})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val store = BookStore {\n    name = "O\'REILLY"\n    website = "https://www.oreilly.com/"\n    books().addBy {\n        name = "Learning GraphQL"\n        edition = 1\n        price = BigDecimal("49.99")\n        authors().addBy {\n            firstName = "Eve"\n            setLastName = "Procello"\n            gender = Gender.FEMALE\n        }\n        authors().addBy {\n            firstName = "Alex"\n            lastName = "Banks"\n            gender = Gender.MALE\n        }\n    }\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u65f6\uff0c",(0,t.jsx)(n.code,{children:"store"}),"\u5bf9\u8c61\u5bf9\u5e94\u7684JSON\u5982\u4e0b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "O\'REILLY",\n    "website": "https://www.oreilly.com/",\n    "books": [\n        {\n            "name": "Learning GraphQL",\n            "edition": 1,\n            "price": 49.99,\n            "authors": [\n                {\n                    "firstName": "Eve",\n                    "lastName": "Procello",\n                    "gender:" "FEMALE"\n                },\n                {\n                    "firstName": "Alex",\n                    "lastName": "Banks",\n                    "gender:" "MALE"\n                }\n            ]\n        }\n    ]\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},7676:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=r(74848),l=r(28453),s=r(74400),a=r(1700);const i={sidebar_position:2,title:"\u6838\u5fc3\u7406\u5ff5 \u2726"},o=void 0,c={id:"overview/core-concept",title:"\u6838\u5fc3\u7406\u5ff5 \u2726",description:"\u8bbe\u8ba1\u7406\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/overview/core-concept.mdx",sourceDirName:"overview",slug:"/overview/core-concept",permalink:"/jimmer-doc/zh/docs/overview/core-concept",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/overview/core-concept.mdx",tags:[],version:"current",lastUpdatedAt:1729717111e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u6838\u5fc3\u7406\u5ff5 \u2726"},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb\u4e4b\u524d",permalink:"/jimmer-doc/zh/docs/overview/welcome"},next:{title:"\u9879\u76ee\u4ecb\u7ecd \u2726",permalink:"/jimmer-doc/zh/docs/overview/introduction"}},d={},u=[{value:"\u8bbe\u8ba1\u7406\u5ff5",id:"\u8bbe\u8ba1\u7406\u5ff5",level:2},{value:"\u529f\u80fd\u5217\u8868",id:"\u529f\u80fd\u5217\u8868",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u8bbe\u8ba1\u7406\u5ff5",children:"\u8bbe\u8ba1\u7406\u5ff5"}),"\n",(0,t.jsx)(n.p,{children:"Jimmer\u7684\u6838\u5fc3\u7406\u5ff5\uff0c\u5728\u4e8e\u4efb\u610f\u5f62\u72b6\u7684\u7684\u6570\u636e\u7ed3\u6784\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\uff0c\u800c\u975e\u7b80\u5355\u7684\u5904\u7406\u5b9e\u4f53\u5bf9\u8c61\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Jimmer\u5b9e\u4f53\u5bf9\u8c61",(0,t.jsx)(n.strong,{children:"\u5e76\u975ePOJO"}),"\uff0c\u53ef\u8f7b\u677e",(0,t.jsx)(s.l,{buttonText:"\u8868\u8fbe\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784",title:"Jimmer\u5b9e\u4f53\u7684\u7075\u6d3b\u6027",children:(0,t.jsx)(a.Ay,{})}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u8fdb\u884c"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8bfb"}),"\uff1aJimmer\u521b\u5efa\u8fd9\u79cd\u65e0\u9650\u7075\u6d3b\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f20\u9012\u7ed9\u4f60"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u5199"}),"\uff1a\u4f60\u521b\u5efa\u8fd9\u79cd\u65e0\u9650\u7075\u6d3b\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f20\u9012\u7ed9Jimmer"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u65e2\u7136Jimmer\u7684\u8bbe\u8ba1\u7406\u5ff5\u662f\u4e3a\u4e86\u8bfb\u5199\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u800c\u975e\u5904\u7406\u7b80\u5355\u7684\u5bf9\u8c61\uff0c\u90a3\u4e48\u5b83\u5177\u5907\u7c7b\u4f3c\u80fd\u529b\u7684\u6280\u672f\u6709\u4ec0\u4e48\u5dee\u5f02\u5462\uff1f"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"\u6bd4\u8f83"}),(0,t.jsx)("th",{children:"\u63cf\u8ff0"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:2,children:"GraphQL"}),(0,t.jsx)("td",{children:"GraphQL\u53ea\u5173\u6ce8\u67e5\u8be2\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff1bJimmer\u4e0d\u4ec5\u5982\u6b64\uff0c\u8fd8\u5173\u6ce8\u5982\u4f55\u5199\u5165\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784"})]}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:"GraphQL\u4e0d\u652f\u6301\u57fa\u4e8e\u81ea\u5173\u8054\u5c5e\u6027\u7684\u9012\u5f52\u67e5\u8be2\uff0cJimmer\u652f\u6301"})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"5",children:"JPA"}),(0,t.jsxs)("td",{children:["JPA\u4e2d\uff0c\u4e3a\u63a7\u5236\u88ab\u4fdd\u5b58\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6\uff0c\u5fc5\u987b\u4e3a\u4f7f\u5c5e\u6027\u914d\u7f6einsertable\u3001updatable\u6216cascade",(0,t.jsx)("i",{children:"(\u9488\u5bf9\u5173\u8054\u5c5e\u6027)"}),"\uff0c\n\u65e0\u8bba\u5982\u4f55\u914d\u7f6e\uff0c\u88ab\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u662f\u56fa\u5b9a\u7684\uff1bJimmer\u5b9e\u4f53\u5e76\u975ePOJO\uff0c\u5176\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6\u5343\u53d8\u4e07\u5316\uff0c\n\u65e0\u9700\u4e8b\u5148\u89c4\u5212\u548c\u8bbe\u8ba1\uff0c\u4efb\u4f55\u4e1a\u52a1\u573a\u666f\u90fd\u53ef\u4ee5\u6784\u5efa\u5b83\u9700\u8981\u7684\u6570\u636e\u7ed3\u6784\u5e76\u76f4\u63a5\u4fdd\u5b58"]})]}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:"\u5bf9\u4e8e\u67e5\u8be2\u800c\u8a00\uff0cJPA\u7684EntityGraphQL\u975e\u5e38\u590d\u6742\uff1bJimmer\u63d0\u4f9b\u4e86\u4e24\u79cd\u624b\u6bb5\u6765\u5b9e\u73b0\u7c7b\u4f3c\u7684\u529f\u80fd\uff1a\n\u63a7\u5236\u8fd4\u56de\u5b9e\u4f53\u5bf9\u8c61\u7684\u683c\u5f0f\uff0c\u6216\u8005\u901a\u8fc7\u6781\u5176\u5ec9\u4ef7\u7684\u65b9\u5f0f\u751f\u6210DTO\u5e76\u76f4\u63a5\u67e5\u8be2\uff0c\u65e0\u8bba\u54ea\u79cd\u65b9\u5f0f\uff0c\u90fd\u8fdc\u6bd4EntityGraph\u7b80\u5355"})}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["\u5728JPA\u4e2d\uff0c\u5982\u679c\u9700\u8981\u4e3a\u53ea\u67e5\u8be2\u90e8\u5206\u5c5e\u6027\u800c\u4f7f\u7528DTO\u5bf9\u8c61\uff0c\u90a3\u4e48DTO\u5fc5\u987b\u662f\u4e00\u4e2a\u6ca1\u6709\u4efb\u4f55\u5173\u8054\u7b80\u5355\u5bf9\u8c61\u3002\u5373\uff0c\u4e22\u5931\u4e86ORM\u6700\u5b9d\u8d35\u7684\u80fd\u529b\uff0c\u4ece",(0,t.jsx)(n.code,{children:"ORM"}),"\u9000\u5316\u6210\u4e86",(0,t.jsx)(n.code,{children:"OM"}),"\uff1b\nJimmer\u81ea\u52a8\u751f\u6210\u7684DTO\u652f\u6301\u4efb\u610f\u590d\u6742\u7684\u5c42\u7ea7\u5173\u7cfb\uff0c",(0,t.jsx)(n.strong,{children:"Jimmer\u662f\u76ee\u524d\u552f\u4e00\u4e00\u4e2a\u652f\u6301\u57fa\u4e8eDTO\u7684\u5d4c\u5957\u6295\u5f71\u7684ORM"})]})})}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["\u5728JPA\u4e2d\uff0c\u66f4\u65b0\u5bf9\u8c61\u4f1a\u5bfc\u81f4\u6240\u6709\u53ef\u66f4\u65b0\u7684\u5217\u88ab\u4fee\u6539\u3002\u4e3a\u4e86\u7b80\u4fbf\uff0c\u5f00\u53d1\u4eba\u5458\u5f88\u5c11\u4f7f\u7528",(0,t.jsx)(n.code,{children:"update"}),"\uff0c\u9009\u62e9\u5148\u67e5\u8be2\u5b8c\u6574\u7684\u5bf9\u8c61\uff0c\u4fee\u6539\u90e8\u5206\u5c5e\u6027\uff0c\u6700\u540e\u4fdd\u5b58\u6574\u4e2a\u5bf9\u8c61\uff1bJimmer\u53ef\u4ee5\u6784\u5efa\u5e76\u76f4\u63a5\u4fdd\u5b58\u6b8b\u7f3a\u5bf9\u8c61"]})})}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:"JPA\u7684EntityGraphQL\u4e0d\u652f\u6301\u57fa\u4e8e\u81ea\u5173\u8054\u5c5e\u6027\u7684\u9012\u5f52\u67e5\u8be2\uff0cJimmer\u652f\u6301"})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"MongoDB"}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"\u5728MonoDB\u4e2d\uff0c\u6bcf\u4e2a\u6587\u6863\u7ed3\u6784\u90fd\u662f\u4e00\u4e2a\u6570\u636e\u5b64\u5c9b\u3002\u867d\u7136MongoDB\u7684\u6570\u636e\u7ed3\u6784\u662f\u5f31\u7c7b\u578b\u7684\uff0c\u4f46\u4ece\u4e1a\u52a1\u5c42\u9762\u8bb2\uff0c\u6709\u54ea\u4e9b\u6570\u636e\u5b64\u5c9b\u4ee5\u53ca\u6bcf\u4e2a\u6570\u636e\u5b64\u5c9b\u5185\u90e8\u7684\u5c42\u7ea7\u7ed3\u6784\u9700\u8981\u5b9e\u73b0\u8bbe\u8ba1\u548c\u7ea6\u5b9a\u3002\n\u4e00\u65e6\u5b8c\u6210\u8bbe\u8ba1\u548c\u7ea6\u5b9a\uff0c\u6574\u4e2a\u6570\u636e\u89c6\u56fe\u7684\u683c\u5f0f\u5c31\u5b9a\u6b7b\u4e86\uff0c\u5fc5\u987b\u6309\u7167\u56fa\u5b9a\u7684\u89c6\u89d2\u5904\u7406\u6570\u636e\uff1b\n\u5728Jimmer\u4e2d\uff0c\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6\u65e0\u9700\u5b9e\u73b0\u8bbe\u8ba1\uff0c\u4efb\u4f55\u4e1a\u52a1\u573a\u666f\u90fd\u53ef\u4ee5\u968f\u610f\u89c4\u5212\u51fa\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\u7684\u683c\u5f0f\uff0c\u5e76\u5c06\u5bf9\u5e94\u7684\u6570\u636e\u7ed3\u6784\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u8fdb\u884c\u8bfb\u5199\u3002"})})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u57fa\u4e8e\u6b64\u6838\u5fc3\u7406\u5ff5\uff0cJimmer\u5c06\u4f1a\u4e3a\u4f60\u5e26\u6765\u4ee5\u524d\u5728\u4efb\u4f55\u6280\u672f\u8def\u7ebf\u60f3\u90fd\u96be\u4ee5\u4f01\u53ca\u7684\u4fbf\u6377\u6027\uff0c\n\u8fd9\u4f1a\u8ba9\u4f60\u4ece\u7e41\u7410\u7684\u7ec6\u8282\u5904\u7406\u4e2d\u89e3\u8131\u51fa\u6765\uff0c\u4e13\u6ce8\u4e8e\u590d\u6742\u4e1a\u52a1\u7684\u5feb\u901f\u5b9e\u73b0\u3002"})}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd\u5217\u8868",children:"\u529f\u80fd\u5217\u8868"}),"\n",(0,t.jsx)(n.p,{children:"\u57fa\u4e8e\u4e0a\u8ff0\u6838\u5fc3\u4ef7\u503c\uff0cJimmer\u63d0\u4f9b\u5982\u4e0b\u529f\u80fd"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4fbf\u6377\u7684\u67e5\u8be2API\uff0c\u5065\u5168\u7684Java DSL\uff0c\u4f18\u7f8e\u7684Kotlin DSL","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u52a8\u6001\u67e5\u8be2\u4e3a\u591a\u8868\u67e5\u8be2\u8bbe\u8ba1"}),"\n",(0,t.jsx)(n.li,{children:"DSL\u652f\u6301\u6df7\u5165\u539f\u751fSQL\u8868\u8fbe\u5f0f\u4ee5\u4f7f\u7528\u975e\u6807\u51c6\u7684\u6570\u636e\u5e93\u7279\u6709\u80fd\u529b"}),"\n",(0,t.jsx)(n.li,{children:"\u62d3\u5c55SQL\u7684\u80fd\u529b\uff0c\u8f7b\u677e\u652f\u6301\u539f\u751fSQL\u5b9e\u73b0\u6210\u672c\u9ad8\u6602\u7684\u9ad8\u7ea7\u529f\u80fd"}),"\n",(0,t.jsxs)(n.li,{children:["\u9ad8\u7ea7\u7684SQL\u4f18\u5316\u80fd\u529b","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u81ea\u52a8\u53bb\u9664\u65e0\u7528\u7684\u8868\u8fde\u63a5"}),"\n",(0,t.jsx)(n.li,{children:"\u81ea\u52a8\u5408\u5e76\u903b\u8f91\u7b49\u4ef7\u7684\u8868\u8fde\u63a5"}),"\n",(0,t.jsx)(n.li,{children:"\u81ea\u52a8\u5408\u5e76\u903b\u8f91\u7b49\u4ef7\u7684\u9690\u5f0f\u5b50\u67e5\u8be2"}),"\n",(0,t.jsx)(n.li,{children:"\u5206\u9875\u67e5\u8be2\u53ef\u81ea\u52a8\u751f\u6210\u5e76\u4f18\u5316count\u67e5\u8be2"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["DTO\u8bed\u8a00\uff0c\u4ee5\u53ca\u76f8\u5e94\u7684\u7f16\u8bd1\u65f6\u4ee3\u7801\u751f\u6210\u5668\uff0c\u8ba9DTO\u53d8\u5f97\u6781\u5176\u5ec9\u4ef7","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Output DTO\uff0c\u7528\u4f5c\u590d\u6742\u67e5\u8be2\u7684\u8fd4\u56de"}),"\n",(0,t.jsx)(n.li,{children:"Input DTO, \u7528\u4f5c\u590d\u6742\u4fdd\u5b58\u7684\u53c2\u6570"}),"\n",(0,t.jsx)(n.li,{children:"Specification DTO, \u7528\u4f5c\u590d\u6742\u67e5\u8be2\u7684\u53c2\u6570"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u67e5\u8be2\u4efb\u610f\u56fe\u7ed3\u6784","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u6ca1\u6709",(0,t.jsx)(n.code,{children:"N + 1"}),"\u95ee\u9898"]}),"\n",(0,t.jsx)(n.li,{children:"\u4efb\u4f55\u5c42\u6b21\u7684\u5bf9\u8c61\u90fd\u53ef\u4ee5\u4e0d\u5b8c\u6574"}),"\n",(0,t.jsx)(n.li,{children:"\u53ef\u9012\u5f52\u67e5\u8be2\u81ea\u5173\u8054\u5c5e\u6027"}),"\n",(0,t.jsx)(n.li,{children:"\u65e2\u53ef\u4ee5\u76f4\u63a5\u8fd4\u56de\u5b9e\u4f53\uff0c\u4e5f\u53ef\u8fd4\u56deOutput DTO"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u4fdd\u5b58\u4efb\u610f\u56fe\u7ed3\u6784","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5229\u7528\u6570\u636e\u5e93\u672c\u8eab\u7684upsert\u80fd\u529bmerge\u6570\u636e"}),"\n",(0,t.jsx)(n.li,{children:"\u6bcf\u4e00\u5c42\u7684\u591a\u4e2a\u5bf9\u8c61\u90fd\u7528\u6279\u91cfDML\u64cd\u4f5c"}),"\n",(0,t.jsx)(n.li,{children:"\u81ea\u52a8\u7ffb\u8bd1\u8fdd\u80cc\u7ea6\u675f\u7684\u5f02\u5e38"}),"\n",(0,t.jsx)(n.li,{children:"\u4efb\u4f55\u5c42\u6b21\u7684\u88ab\u4fdd\u5b58\u5bf9\u8c61\u90fd\u53ef\u4ee5\u4e0d\u5b8c\u6574"}),"\n",(0,t.jsx)(n.li,{children:"\u65e2\u53ef\u4ee5\u76f4\u63a5\u4fdd\u5b58\u5b9e\u4f53\uff0c\u4e5f\u53ef\u4fdd\u5b58Input DTO"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5f3a\u5927\u7684\u7f13\u5b58","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u591a\u7ea7\u7f13\u5b58\uff0c\u6bcf\u4e00\u7ea7\u7f13\u5b58\u90fd\u53ef\u4ee5\u505a\u81ea\u7531\u6280\u672f\u9009\u578b"}),"\n",(0,t.jsxs)(n.li,{children:["\u4e0d\u4ec5\u4ec5\u662f\u5bf9\u8c61\u7f13\u5b58 ",(0,t.jsx)(n.em,{children:"(\u5173\u8054\u3001\u8ba1\u7b97\u503c\u3001\u591a\u89c6\u56fe)"})]}),"\n",(0,t.jsx)(n.li,{children:"\u81ea\u52a8\u7ef4\u6301\u7f13\u5b58\u4e00\u81f4\u6027"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u5bf9GraphQL\u7684\u5feb\u901f\u652f\u6301"}),"\n",(0,t.jsxs)(n.li,{children:["\u57fa\u4e8e\u6587\u6863\u6ce8\u91ca\u5ba2\u6237\u7aef\u5951\u7ea6 ",(0,t.jsx)(n.em,{children:"(OpenAPI\u3001TypeScript)"})]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var t=r(18215);const l={tabItem:"tabItem_Ymn6"};var s=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,a),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(96540),l=r(18215),s=r(23104),a=r(56347),i=r(205),o=r(57485),c=r(31682),d=r(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:l}}=e;return{value:n,label:r,attributes:t,default:l}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const l=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,s=h(e),[a,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=x({queryString:r,groupId:l}),[j,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,d.Dv)(r);return[l,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:l}),b=(()=>{const e=c??j;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var p=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),l=i[r].value;l!==t&&(c(n),a(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,l.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function L(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(f,{...n,...e})]})}function k(e){const n=(0,p.A)();return(0,g.jsx)(L,{...e,children:u(e.children)},String(n))}},66971:(e,n,r)=>{r.d(n,{a:()=>j});var t=r(96540),l=r(72774),s=r(63051),a=r(28968),i=r(48875),o=r(44676),c=r(47859),d=r(4671),u=r(99343),h=r(7324),m=r(39781),x=r(74848);const j=(0,t.memo)((e=>{let{open:n,fullScreen:r=!1,title:i,maxWidth:j="md",onClose:b,children:g}=e;const[v,f]=(0,t.useState)(r),L=(0,t.useCallback)((()=>{f((e=>!e))}),[]);return(0,x.jsxs)(s.A,{open:n,onClose:b,fullScreen:v,TransitionComponent:p,maxWidth:j,children:[(0,x.jsx)(l.A,{sx:{position:"relative"},children:(0,x.jsxs)(o.A,{children:[(0,x.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:i}),(0,x.jsx)(d.A,{onClick:L,style:{color:"white"},children:v?(0,x.jsx)(h.A,{}):(0,x.jsx)(u.A,{})}),(0,x.jsx)(d.A,{"aria-label":"close",onClick:b,style:{color:"white"},children:(0,x.jsx)(m.A,{})})]})}),(0,x.jsx)(a.A,{children:g})]})})),p=t.forwardRef((function(e,n){return(0,x.jsx)(i.A,{direction:"up",ref:n,...e})}))},74400:(e,n,r)=>{r.d(n,{l:()=>i});var t=r(96540),l=r(67512),s=r(66971),a=r(74848);const i=(0,t.memo)((e=>{let{buttonText:n,fullScreen:r=!1,title:i=n,variant:o="outlined",large:c=!1,maxWidth:d,useOriginalText:u=!0,children:h}=e;const[m,x]=(0,t.useState)(!1),j=(0,t.useCallback)((e=>{x(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),p=(0,t.useCallback)((()=>{x(!1)}),[]),b=u?{textTransform:"none"}:{};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.A,{"data-is-view-more-button":"true",onClick:j,variant:o,size:c?"large":"small",style:b,children:n}),(0,a.jsx)(s.a,{open:m,onClose:p,title:i,maxWidth:d,fullScreen:r,children:h})]})}))},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(96540);const l={},s=t.createContext(l);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);