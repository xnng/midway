"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1516],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7344:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Prisma ORM"},l=void 0,p={unversionedId:"hooks/prisma",id:"hooks/prisma",title:"Prisma ORM",description:"\u5728 Midway Hooks \u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 Prisma \u6765\u6784\u5efa\u6570\u636e\u5e93\uff0c\u5e76\u5b9e\u73b0\u6211\u4eec\u9759\u6001\u7c7b\u578b\u5b89\u5168\u7684\u76ee\u6807\u3002",source:"@site/docs/hooks/prisma.md",sourceDirName:"hooks",slug:"/hooks/prisma",permalink:"/docs/next/hooks/prisma",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/hooks/prisma.md",tags:[],version:"current",frontMatter:{title:"Prisma ORM"},sidebar:"hooks",previous:{title:"\u4f7f\u7528 Midway \u7ec4\u4ef6",permalink:"/docs/next/hooks/component"},next:{title:"\u6d4b\u8bd5",permalink:"/docs/next/hooks/test"}},m=[{value:"Example",id:"example",children:[{value:"\u6570\u636e\u5e93 Schema",id:"\u6570\u636e\u5e93-schema",children:[],level:3},{value:"\u521d\u59cb\u5316 Prisma",id:"\u521d\u59cb\u5316-prisma",children:[],level:3},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",children:[],level:3},{value:"\u589e\u52a0\u6570\u636e",id:"\u589e\u52a0\u6570\u636e",children:[],level:3},{value:"\u66f4\u591a\u793a\u4f8b",id:"\u66f4\u591a\u793a\u4f8b",children:[],level:3}],level:2}],u={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728 Midway Hooks \u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://prisma.io/"},"Prisma")," \u6765\u6784\u5efa\u6570\u636e\u5e93\uff0c\u5e76\u5b9e\u73b0\u6211\u4eec\u9759\u6001\u7c7b\u578b\u5b89\u5168\u7684\u76ee\u6807\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prsima")," \u662f\u9762\u5411 Node.js & TypeScript \u8bbe\u8ba1\u7684 ORM\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u53cb\u597d\u7684\u529f\u80fd\uff08Schema \u5b9a\u4e49\u3001\u5ba2\u6237\u7aef\u751f\u6210\u3001\u5b8c\u5168\u7684 TypeScript \u652f\u6301\uff09\uff0c\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u6784\u5efa\u5e94\u7528\u3002"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/hooks/blob/v3/examples/prisma/README.md"},"hooks-prisma-starter"),"\uff0c\u6765\u6f14\u793a\u5728 Midway Hooks \u5982\u4f55\u4f7f\u7528 Prisma\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u6211\u4e5f\u4f1a\u7b80\u5355\u4ecb\u7ecd\uff0cMidway Hooks \u914d\u5408 Prisma \u5f00\u53d1\u5e94\u7528\u4f1a\u6709\u591a\u4e48\u7684\u7b80\u5355\u3002"),(0,i.kt)("h3",{id:"\u6570\u636e\u5e93-schema"},"\u6570\u636e\u5e93 Schema"),(0,i.kt)("p",null,"\u4f8b\u5b50\u57fa\u4e8e sqlite\uff0c\u6570\u636e\u5e93 Schema \u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-prisma"},"model User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n  posts Post[]\n}\n\nmodel Post {\n  id        Int      @id @default(autoincrement())\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  title     String\n  content   String?\n  published Boolean  @default(false)\n  viewCount Int      @default(0)\n  author    User?    @relation(fields: [authorId], references: [id])\n  authorId  Int?\n}\n")),(0,i.kt)("p",null,"\u5177\u4f53\u7684\u6570\u636e\u5e93\u8bbe\u7f6e & \u521d\u59cb\u6570\u636e\u586b\u5145\u5de5\u4f5c\uff0c\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/hooks/blob/v3/examples/prisma/README.md"},"hooks-prisma-starter")," \u6587\u6863\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"\u521d\u59cb\u5316-prisma"},"\u521d\u59cb\u5316 Prisma"),(0,i.kt)("p",null,"\u5728\u9879\u76ee\u7684 src/api \u4e0b\u65b0\u5efa prisma \u6587\u4ef6\uff0c\u4f7f\u7528\u5982\u4e0b\u4ee3\u7801\u5373\u53ef\u521d\u59cb\u5316 Client\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { PrismaClient } from '@prisma/client';\n\nexport const prisma =\n  new PrismaClient();\n")),(0,i.kt)("h3",{id:"\u67e5\u8be2\u6570\u636e"},"\u67e5\u8be2\u6570\u636e"),(0,i.kt)("p",null,"\u4ee5\u83b7\u53d6\u6240\u6709\u53d1\u5e03\u7684\u6587\u7ae0\u4e3a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u751f\u6210\u7684 Prisma Client \u5feb\u901f\u5b8c\u6210\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u540e\u7aef\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n} from '@midwayjs/hooks';\nimport { prisma } from './prisma';\n\nexport default Api(Get(), async () => {\n  const posts =\n    await prisma.post.findMany({\n      where: { published: true },\n      include: { author: true },\n    });\n  return posts;\n});\n")),(0,i.kt)("p",null,"\u4e00\u4f53\u5316\u8c03\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import fetchFeeds from '../api/feeds';\n\nfetchFeeds().then((feeds) => {\n  console.log(feeds);\n});\n")),(0,i.kt)("h3",{id:"\u589e\u52a0\u6570\u636e"},"\u589e\u52a0\u6570\u636e"),(0,i.kt)("p",null,"\u4ee5\u6ce8\u518c\u767b\u5f55\u4e3a\u4f8b\uff0c\u57fa\u4e8e\u4e00\u4f53\u5316\u8c03\u7528 + Prisma \u751f\u6210\u7684\u5ba2\u6237\u7aef\uff0c\u53ef\u4ee5\u5728\u7b80\u5355\u7684\u51e0\u884c\u4ee3\u7801\u4e2d\u5b8c\u6210\u6240\u6709\u7684\u5de5\u4f5c\u3002"),(0,i.kt)("p",null,"\u5305\u542b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u524d\u7aef\u7c7b\u578b\u63d0\u793a"),(0,i.kt)("li",{parentName:"ul"},"\u540e\u7aef\u53c2\u6570\u6821\u9a8c"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u64cd\u4f5c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Post,\n  Validate,\n} from '@midwayjs/hooks';\nimport { z } from 'zod';\nimport { prisma } from './prisma';\n\nexport const signUp = Api(\n  Post(),\n  Validate(\n    z.string(),\n    z.string().email()\n  ),\n  async (\n    name: string,\n    email: string\n  ) => {\n    const result =\n      await prisma.user.create({\n        data: {\n          name,\n          email,\n        },\n      });\n    return result;\n  }\n);\n")),(0,i.kt)("p",null,"\u4e00\u4f53\u5316\u8c03\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { signUp } from '../api/feeds';\n\nsignUp('John', 'test@test.com').then(\n  (user) => {\n    console.log(user);\n  }\n);\n")),(0,i.kt)("h3",{id:"\u66f4\u591a\u793a\u4f8b"},"\u66f4\u591a\u793a\u4f8b"),(0,i.kt)("p",null,"\u5173\u4e8e Prisma \u7684\u66f4\u591a\u793a\u4f8b\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prisma \u5b98\u7f51\u6587\u6863"),"\u3002"))}c.isMDXComponent=!0}}]);