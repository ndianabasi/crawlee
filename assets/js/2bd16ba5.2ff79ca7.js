"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],p={id:"typescript-project",title:"TypeScript Projects",description:"Stricter, safer, and better development experience"},l=void 0,s={unversionedId:"guides/typescript-project",id:"version-3.1/guides/typescript-project",title:"TypeScript Projects",description:"Stricter, safer, and better development experience",source:"@site/versioned_docs/version-3.1/guides/typescript_project.mdx",sourceDirName:"guides",slug:"/guides/typescript-project",permalink:"/docs/guides/typescript-project",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1666097552,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{id:"typescript-project",title:"TypeScript Projects",description:"Stricter, safer, and better development experience"},sidebar:"docs",previous:{title:"Got Scraping",permalink:"/docs/guides/got-scraping"},next:{title:"Running in Docker",permalink:"/docs/guides/docker-images"}},c={},d=[{value:"Setting up a TypeScript project",id:"setting-up-a-typescript-project",level:2},{value:"Running the project with <code>ts-node</code>",id:"running-the-project-with-ts-node",level:3},{value:"Running in production",id:"running-in-production",level:3},{value:"Docker build",id:"docker-build",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Crawlee is built with TypeScript, which means it provides the type definition directly in the package. This allows writing code with auto-completion for TypeScript and JavaScript code alike. Besides that, projects written in TypeScript can take advantage of compile-time type-checking and avoid many coding mistakes, while providing documentation for functions, parameters and return values. It will also help with refactoring a lot, and ensuring the least amount of bugs will sneak through."),(0,a.kt)("h2",{id:"setting-up-a-typescript-project"},"Setting up a TypeScript project"),(0,a.kt)("p",null,"To use TypeScript in our projects, we'll need the following prerequisites:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"TypeScript compiler ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," installed somewhere:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm install --dev typescript\n")),(0,a.kt)("p",{parentName:"li"},"TypeScript can be a development dependency in our project, as shown above. There's no need to pollute the production environment or the system's global repository with TypeScript.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A build script invoking ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," and a correctly specified ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," entry point defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," (pointing to the built code):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "build": "tsc"\n    },\n    "main": "dist/main.js"\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Type declarations for NodeJS, so we can take advantage of type-checking in all the features we'll use:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm install --dev @types/node\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"TypeScript configuration file allowing ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," to understand the project layout and the features used in the project:"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"We are extending the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-tsconfig",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"@apify/tsconfig")),", it contains ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-tsconfig/blob/main/tsconfig.json",target:"_blank",rel:"noopener"},"the set of rules")," we believe are worth following.")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"To be able to use feature called ",(0,a.kt)("a",{parentName:"p",href:"https://blog.saeloun.com/2021/11/25/ecmascript-top-level-await.html",target:"_blank",rel:"noopener"},"Top level await"),", we will need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," compiler options to ",(0,a.kt)("inlineCode",{parentName:"p"},"ES2022")," or above. This will make the project compile to ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html",target:"_blank",rel:"noopener"},"ECMAScript Modules"),".")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n    "extends": "@apify/tsconfig",\n    "compilerOptions": {\n        "module": "ES2022",\n        "target": "ES2022",\n        "outDir": "dist"\n    },\n    "include": [\n        "./src/**/*"\n    ]\n}\n')),(0,a.kt)("p",{parentName:"li"},"Place the content above inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in the root folder."),(0,a.kt)("p",{parentName:"li"},"Also, to enjoy using the types in ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," source files, VSCode users that are using JavaScript should create a ",(0,a.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," with the same content and add ",(0,a.kt)("inlineCode",{parentName:"p"},'"checkJs": true')," to ",(0,a.kt)("inlineCode",{parentName:"p"},'"compilerOptions"'),"."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"If we want to use one of the browser crawlers, we will also need to add ",(0,a.kt)("inlineCode",{parentName:"p"},'"lib": ["DOM"]')," to the compiler options.")))),(0,a.kt)("h3",{id:"running-the-project-with-ts-node"},"Running the project with ",(0,a.kt)("inlineCode",{parentName:"h3"},"ts-node")),(0,a.kt)("p",null,"During development, it's handy to run the project directly instead of compiling the TypeScript code to JavaScript every time. We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," for that, just install it as a dev dependency and add a new NPM script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm install --dev ts-node\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As mentioned above, our project will be compiled to use ES Modules. Because of this, we need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node-esm")," binary.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-T")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--transpileOnly")," flag, this means the code will ",(0,a.kt)("strong",{parentName:"p"},"not")," be type-checked, which results in faster compilation. If you don't mind the added time and want to do the type checking, just remove this flag.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "scripts": {\n        "start:dev": "ts-node-esm -T src/main.ts"\n    }\n}\n')),(0,a.kt)("h3",{id:"running-in-production"},"Running in production"),(0,a.kt)("p",null,"To run the project in production, we first need to compile it via build script. After that, we will have the compiled JavaScript code in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist"),", and we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"node dist/main.js")," to run it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "scripts": {\n        "start:prod": "node dist/main.js"\n    }\n}\n')),(0,a.kt)("h2",{id:"docker-build"},"Docker build"),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," we recommend using multi-stage build, so we don't install the dev dependencies like TypeScript in the final image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},"# using multistage build, as we need dev deps to build the TS source code\nFROM apify/actor-node:16 AS builder\n\n# copy all files, install all dependencies (including dev deps) and build the project\nCOPY . ./\nRUN npm install --include=dev \\\n    && npm run build\n\n# create final image\nFROM apify/actor-node:16\n# copy only necessary files\nCOPY --from=builder /usr/src/app/package*.json ./\nCOPY --from=builder /usr/src/app/dist ./dist\n\n# install only prod deps\nRUN npm --quiet set progress=false \\\n    && npm install --only=prod --no-optional\n\n# run compiled code\nCMD npm run start:prod\n")),(0,a.kt)("h3",{id:"putting-it-all-together"},"Putting it all together"),(0,a.kt)("p",null,"Let's wrap it up to. In addition to the scripts we described above, we also need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"type: 'module'")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," to be able to use the Top level await described above. For convenience, we will have 3 ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," scripts, the default one will be an alias to ",(0,a.kt)("inlineCode",{parentName:"p"},"start:dev"),", which is our ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," script that does not require compilation (nor type checking). The production script (",(0,a.kt)("inlineCode",{parentName:"p"},"start:prod"),") is then used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", after explicit ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build")," call."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "name": "my-crawlee-project",\n    "type": "module",\n    "main": "dist/main.js",\n    "dependencies": {\n        "crawlee": "3.0.0"\n    },\n    "devDependencies": {\n        "@apify/tsconfig": "^0.1.0",\n        "ts-node": "^10.8.0",\n        "typescript": "^4.7.4"\n    },\n    "scripts": {\n        "start": "npm run start:dev",\n        "start:prod": "node dist/main.js",\n        "start:dev": "ts-node-esm -T src/main.ts",\n        "build": "tsc"\n    }\n}\n')))}m.isMDXComponent=!0}}]);