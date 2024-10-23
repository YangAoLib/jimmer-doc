"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[334],{77002:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var r=t(74848),i=t(28453),l=t(11470),a=t(19365);const s=[];function o(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Jimmer\u4e2d\u4e00\u5207\u53ef\u6267\u884c\u7684\u8bed\u53e5\u548c\u6307\u4ee4\u90fd\u652f\u6301\u4e24\u79cd\u6267\u884c\u6a21\u5f0f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u57fa\u4e8e\u7528\u6237\u6307\u5b9a\u7684JDBC\u8fde\u63a5\u6267\u884c"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u7531Jimmer\u81ea\u52a8\u51b3\u5b9a\u57fa\u4e8e\u67d0\u4e2aJDBC\u8fde\u63a5\u6267\u884c"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c\u4ee5",(0,r.jsx)(n.code,{children:"Executable"}),"(Java)\u6216",(0,r.jsx)(n.code,{children:"KExecutable"}),"(kotlin)\u63a5\u53e3\u4e3a\u4f8b"]}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Executable.java"',children:"package org.babyfish.jimmer.sql.ast;\n\nimport java.sql.Connection;\n\npublic interface Executable<R> {\n\n    R execute();\n\n    R execute(Connection con);\n}\n"})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="KExecutable.kt"',children:"package org.babyfish.jimmer.sql.kt\n\nimport java.sql.Connection\n\ninterface KExecutable<R> {\n    fun execute(con: Connection? = null): R\n}\n"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"execute(Connection)"}),"\uff1a\u5728\u7528\u6237\u6307\u5b9a\u7684JDBC\u8fde\u63a5\u4e0a\u6267\u884c\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u67e5\u8be2\u4e3a\u4f8b\uff1a"}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line\n    .execute(con);\n"})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute(con)\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u5bf9\u8fd9\u79cd\u4f7f\u7528\u65b9\u5f0f\u800c\u8a00\uff0c\u65e0\u9700\u5bf9SqlClient\u505a\u51fa\u7279\u522b\u914d\u7f6e\u3002"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"execute()"}),"\u6216",(0,r.jsx)(n.code,{children:"execute(null)"}),"\uff1a\u7531Jimmer\u81ea\u4e3b\u51b3\u5b9a\u5728\u67d0\u4e2aJDBC\u8fde\u63a5\u4e0a\u6267\u884c\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u67e5\u8be2\u4e3a\u4f8b\uff1a"}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line\n    .execute();\n"})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute()    \n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["\u5bf9\u8fd9\u79cd\u4f7f\u7528\u65b9\u5f0f\u800c\u8a00\uff0c\u5fc5\u987b\u4e3aSqlClient\u914d\u7f6e",(0,r.jsx)(n.code,{children:"ConnectionManager"}),"\u3002\u5426\u5219\u5c06\u4f1a\u5bfc\u81f4\u5f02\u5e38\u3002"]}),(0,r.jsxs)(n.p,{children:["\u6beb\u65e0\u7591\u95ee\uff0c\u7b2c2\u79cd\u65b9\u5f0f\u66f4\u7b26\u5408\u4e1a\u52a1\u7cfb\u7edf\u5f00\u53d1\u8981\u6c42\uff0c\u63a8\u8350\u4f7f\u7528\u3002\u6240\u4ee5\u5f3a\u70c8\u5efa\u8bae\u4e3aSqlClient\u914d\u7f6e",(0,r.jsx)(n.code,{children:"ConnectionManager"}),"\u3002"]})]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50510:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var r=t(74848),i=t(28453),l=t(11470),a=t(19365),s=t(74400),o=t(77002);const c={sidebar_position:1,title:"\u6574\u5408Spring\u4e8b\u52a1"},d=void 0,u={id:"spring/transaction",title:"\u6574\u5408Spring\u4e8b\u52a1",description:"\u6574\u5408Spring\u4e8b\u52a1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/spring/transaction.mdx",sourceDirName:"spring",slug:"/spring/transaction",permalink:"/jimmer-doc/zh/docs/spring/transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/spring/transaction.mdx",tags:[],version:"current",lastUpdatedAt:1711320943e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u6574\u5408Spring\u4e8b\u52a1"},sidebar:"tutorialSidebar",previous:{title:"Spring\u7bc7",permalink:"/jimmer-doc/zh/docs/spring/"},next:{title:"Spring Data\u98ce\u683c",permalink:"/jimmer-doc/zh/docs/spring/repository/"}},h={},p=[{value:"\u6574\u5408Spring\u4e8b\u52a1",id:"\u6574\u5408spring\u4e8b\u52a1",level:2},{value:"\u4f7f\u7528Spring Boot starter",id:"\u4f7f\u7528spring-boot-starter",level:3},{value:"\u4e0d\u4f7f\u7528Spring Boot Starter",id:"\u4e0d\u4f7f\u7528spring-boot-starter",level:3},{value:"\u548cJdbcTemplate\u534f\u540c",id:"\u548cjdbctemplate\u534f\u540c",level:2},{value:"\u591a\u6570\u636e\u6e90",id:"\u591a\u6570\u636e\u6e90",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u6574\u5408spring\u4e8b\u52a1",children:"\u6574\u5408Spring\u4e8b\u52a1"}),"\n",(0,r.jsx)(n.p,{children:"Jimmer\u4e2d\u6240\u6709\u6570\u636e\u5e93\u64cd\u4f5cAPI\u90fd\u6709\u4e24\u79cd\u6267\u884c\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u6307\u5b9a\u7684JDBC\u8fde\u63a5\u4e0a\u6267\u884c"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u65e0\u9700\u6307\u5b9aJDBC\u8fde\u63a5\u5373\u53ef\u6267\u884c\uff0c\u4f46\u9700\u8981\u4e3aJimmer\u914d\u7f6e",(0,r.jsx)(n.code,{children:"ConnectionManager"}),"\uff0c\u6559\u4f1aJimmer\u5982\u4f55\u79df\u501f\u548c\u5f52\u8fd8\u8fde\u63a5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u53c2\u8003",(0,r.jsx)(s.l,{buttonText:"\u8fd9\u91cc",title:"\u4e24\u79cd\u6267\u884c\u65b9\u6cd5",children:(0,r.jsx)(o.Ay,{})}),"\u4ee5\u4e86\u89e3\u66f4\u591a\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6240\u4ee5\uff0cJimmer\u672c\u8eab\u5e76\u672a\u63d0\u4f9b\u8fde\u63a5/\u4e8b\u52a1\u7ba1\u7406\u80fd\u529b\uff0c\u8fd9\u79cd\u7ba1\u7406\u80fd\u529b\u5b8c\u5168\u4f9d\u8d56\u7528\u6237\u5bf9",(0,r.jsx)(n.code,{children:"ConnectionManager"}),"\u7684\u5b9a\u5236\uff0c",(0,r.jsx)(n.code,{children:"ConnectionManager"}),"\u5c31\u662f\u5c06Jimmer\u548c\u4efb\u4f55IOC\u6846\u67b6 ",(0,r.jsx)(n.em,{children:"(\u5f53\u7136\uff0c\u5305\u62ecSpring)"})," \u7684\u8fde\u63a5/\u4e8b\u52a1\u7ba1\u7406\u80fd\u529b\u6574\u5408\u5728\u4e00\u8d77\u7684\u5173\u952e\u70b9\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528spring-boot-starter",children:"\u4f7f\u7528Spring Boot starter"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f7f\u7528Jimmer\u63d0\u4f9b\u7684Spring Boot Starter\uff0c\u5219\u4e0d\u7528\u505a\u4efb\u4f55\u5de5\u4f5c\uff0cJimmer\u4f1a\u81ea\u52a8\u63a5\u5165Spring\u7684\u4e8b\u52a1\u7ba1\u7406\u673a\u5236\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u4e0d\u4f7f\u7528spring-boot-starter",children:"\u4e0d\u4f7f\u7528Spring Boot Starter"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4ec5\u4f7f\u7528Spring\uff0c\u5e76\u672a\u4f7f\u7528Jimmer\u63d0\u4f9b\u7684Spring Boot Starter\u3002\u90a3\u4e48\u9700\u8981\u81ea\u5df1\u7f16\u7801\u5c06Jimmer\u63a5\u5165Spring\u7684\u4e8b\u52a1\u7ba1\u7406\u673a\u5236\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5f00\u53d1\u4eba\u5458\u9700\u8981\u521b\u5efa",(0,r.jsx)(n.code,{children:"JSqlClient/KSqlClient"}),"\uff0c\u5e76\u8bbe\u7f6e\u5176",(0,r.jsx)(n.code,{children:"ConnectionManager"}),"\uff0c\u5728",(0,r.jsx)(n.code,{children:"ConnectionManager"}),"\u4e2d\uff0c\u5229\u7528Spring\u7684",(0,r.jsx)(n.code,{children:"org.springframework.jdbc.datasource.DataSourceUtils"}),"\u6253\u5f00\u548c\u5173\u95ed\u8fde\u63a5\u3002"]}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Bean\npublic JSqlClient sqlClient(DataSource dataSource) {\n    return JSqlClient.newBuilder()\n        // highlight-next-line\n        .setConnectionManager(\n            new ConnectionManager() {\n                @Override\n                public <R> R execute(\n                    Function<Connection, R> block\n                ) {\n                    Connection con = DataSourceUtils\n                        // highlight-next-line\n                        .getConnection(dataSource);\n                    try {\n                        return block.apply(con);\n                    } finally {\n                        DataSourceUtils\n                            // highlight-next-line\n                            .releaseConnection(con, dataSource);\n                    }\n                }\n            }\n        )\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n        .build();\n}\n"})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Bean\nfun sqlClient(dataSource: DataSource): KSqlClient =\n    newKSqlClient {\n        // highlight-next-line\n        setConnectionManager {\n            val con = DataSourceUtils\n                // highlight-next-line\n                .getConnection(dataSource)\n            try {\n                proceed(con)\n            } finally {\n                DataSourceUtils\n                    // highlight-next-line\n                    .releaseConnection(con, dataSource)\n            }\n        }\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    }\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["\u4e0d\u8981\u4f7f\u7528\u666e\u901a\u7684\u65b9\u6cd5\u4ece\u8fde\u63a5\u6c60\u501f\u7528 ",(0,r.jsx)(n.em,{children:"(dataSource.getConnection)"})," \u548c\u5f52\u8fd8 ",(0,r.jsx)(n.em,{children:"(con.close)"})," \u8fde\u63a5\uff0c\n\u4e00\u5b9a\u8981\u4f7f\u7528Spring\u7684",(0,r.jsx)(n.code,{children:"org.springframework.jdbc.datasource.DataSourceUtils"}),"\uff0c\u56e0\u4e3a\u8fd9\u53ef\u4ee5\u548cSpring\u7684\u4e8b\u52a1\u7ba1\u7406\u673a\u5236\u76f8\u7ed3\u5408\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u548cjdbctemplate\u534f\u540c",children:"\u548cJdbcTemplate\u534f\u540c"}),"\n",(0,r.jsxs)(n.p,{children:["Jimmer\u91c7\u7528\u6781\u7b80\u8bbe\u8ba1\uff0c\u5176API\u603b\u5165\u53e3",(0,r.jsx)(n.code,{children:"JSqlClient/KSqlClient"}),"\u5bf9\u5916\u66b4\u9732\u7684API\u4e00\u5f8b\u91c7\u7528\u65e0\u72b6\u6001\u8bbe\u8ba1\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f88\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u6846\u67b6\u5bf9JDBC\u8fde\u63a5\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u6709\u72b6\u6001\u5305\u88c5\uff0c\u6bd4\u5982"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["JPA\u7684",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html",children:"EntityManager"})]}),"\n",(0,r.jsxs)(n.li,{children:["Hibernate\u7684",(0,r.jsx)(n.a,{href:"https://docs.jboss.org/hibernate/orm/6.2/javadocs/org/hibernate/Session.html",children:"Session"})]}),"\n",(0,r.jsxs)(n.li,{children:["MyBatis\u7684",(0,r.jsx)(n.a,{href:"https://javadoc.io/doc/org.mybatis/mybatis/latest/org/apache/ibatis/session/SqlSession.html",children:"SqlSession"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5e76\u4e14\u5bf9\u6570\u636e\u5e93\u4e8b\u52a1\u4e5f\u6709\u6709\u72b6\u6001\u5c01\u88c5\uff0c\u6bd4\u5982"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["JPA\u7684",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html#getTransaction--",children:"EntityManager.getTransaction"})]}),"\n",(0,r.jsxs)(n.li,{children:["Hibernate\u7684",(0,r.jsx)(n.a,{href:"https://docs.jboss.org/hibernate/orm/6.2/javadocs/org/hibernate/SharedSessionContract.html#getTransaction()",children:"Session.getTransaction"})]}),"\n",(0,r.jsxs)(n.li,{children:["MyBatis\u7684",(0,r.jsx)(n.a,{href:"https://javadoc.io/doc/org.mybatis/mybatis/latest/org/apache/ibatis/session/SqlSession.html#commit()",children:"SqlSession.commit"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Jimmer\u6ca1\u6709\u7c7b\u4f3c\u7684\u62bd\u8c61\uff0c\u5176API\u603b\u5165\u53e3",(0,r.jsx)(n.code,{children:"JSqlClient/KSqlClient"}),"\u5bf9\u5916\u66b4\u9732\u7684API\u4e00\u5f8b\u91c7\u7528\u65e0\u72b6\u6001\u8bbe\u8ba1\uff0cJDBC\u8fde\u63a5\u662fJimmer\u552f\u4e00\u7684\u5e95\u5c42\u4f9d\u8d56\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u8fd9\u4fc3\u6210\u4e86\u4e00\u4e2a\u91cd\u8981\u7684\u7279\u6027\uff1aJimmer\u7684\u4e8b\u52a1\u7ba1\u7406\u548cJdbcTemplate\u7684\u4e8b\u52a1\u7ba1\u7406\u5b8c\u5168\u76f8\u540c\u3002"})}),"\n",(0,r.jsxs)(n.p,{children:["Jimmer\u65e0\u9700\u63d0\u4f9b\u4efb\u4f55\u7c7b\u4f3c\u4e8e",(0,r.jsx)(n.code,{children:"createNativeQuery"}),"\u7684API"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u548cORM\u5173\u7cfb\u4e0d\u5927\u7684\u62a5\u8868\u67e5\u8be2\uff0c\u7528\u6237\u671f\u671b\u4e66\u5199\u5b8c\u6574\u7684Native SQL\uff0c\u90a3\u4e48\u76f4\u63a5\u4f7f\u7528Spring\u7684JdbcTemplate\u5373\u53ef\uff0c\u8fd9\u662f\u56e0\u4e3aJimmer\u7684\u4e8b\u52a1\u7ba1\u7406\u548cJdbcTemplate\u7684\u4e8b\u52a1\u7ba1\u7406\u5b8c\u5168\u76f8\u540c\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8eJimmer\u7684ORM\u98ce\u683c\u67e5\u8be2\uff0c\u5728\u5f3a\u7c7b\u578bSQL DSL\u4e2d\u6df7\u5165",(0,r.jsx)(n.a,{href:"../query/native-sql",children:"Native SQL"}),"\u8868\u8fbe\u5f0f\u5373\u53ef"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u591a\u6570\u636e\u6e90",children:"\u591a\u6570\u636e\u6e90"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u6587\u6211\u4eec\u8ba8\u8bba\u7684\u662f\u5355\u6570\u636e\u6e90\u573a\u666f\u4e0b\u7684Spring\u4e8b\u52a1\u6574\u5408\uff0c\u81f3\u4e8e\u591a\u6570\u636e\u6e90\uff0c\u8bf7\u67e5\u770b",(0,r.jsx)(n.a,{href:"../configuration/multi-datasources",children:"\u8fd9\u91cc"}),"\u3002"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(18215);const i={tabItem:"tabItem_Ymn6"};var l=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>C});var r=t(96540),i=t(18215),l=t(23104),a=t(56347),s=t(205),o=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,l=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,u]=x({queryString:t,groupId:i}),[m,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:i}),g=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{g&&o(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,l]),tabValues:l}}var j=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),i=s[t].value;i!==r&&(c(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,i.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function S(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(f,{...n,...e})]})}function C(e){const n=(0,j.A)();return(0,b.jsx)(S,{...e,children:u(e.children)},String(n))}},66971:(e,n,t)=>{t.d(n,{a:()=>m});var r=t(96540),i=t(72774),l=t(63051),a=t(28968),s=t(48875),o=t(44676),c=t(47859),d=t(4671),u=t(99343),h=t(7324),p=t(39781),x=t(74848);const m=(0,r.memo)((e=>{let{open:n,fullScreen:t=!1,title:s,maxWidth:m="md",onClose:g,children:b}=e;const[v,f]=(0,r.useState)(t),S=(0,r.useCallback)((()=>{f((e=>!e))}),[]);return(0,x.jsxs)(l.A,{open:n,onClose:g,fullScreen:v,TransitionComponent:j,maxWidth:m,children:[(0,x.jsx)(i.A,{sx:{position:"relative"},children:(0,x.jsxs)(o.A,{children:[(0,x.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:s}),(0,x.jsx)(d.A,{onClick:S,style:{color:"white"},children:v?(0,x.jsx)(h.A,{}):(0,x.jsx)(u.A,{})}),(0,x.jsx)(d.A,{"aria-label":"close",onClick:g,style:{color:"white"},children:(0,x.jsx)(p.A,{})})]})}),(0,x.jsx)(a.A,{children:b})]})})),j=r.forwardRef((function(e,n){return(0,x.jsx)(s.A,{direction:"up",ref:n,...e})}))},74400:(e,n,t)=>{t.d(n,{l:()=>s});var r=t(96540),i=t(67512),l=t(66971),a=t(74848);const s=(0,r.memo)((e=>{let{buttonText:n,fullScreen:t=!1,title:s=n,variant:o="outlined",large:c=!1,maxWidth:d,useOriginalText:u=!0,children:h}=e;const[p,x]=(0,r.useState)(!1),m=(0,r.useCallback)((e=>{x(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),j=(0,r.useCallback)((()=>{x(!1)}),[]),g=u?{textTransform:"none"}:{};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{"data-is-view-more-button":"true",onClick:m,variant:o,size:c?"large":"small",style:g,children:n}),(0,a.jsx)(l.a,{open:p,onClose:j,title:s,maxWidth:d,fullScreen:t,children:h})]})}))},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(96540);const i={},l=r.createContext(i);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);