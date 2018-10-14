"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>w});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),w=a,m=d["".concat(s,".").concat(w)]||d[w]||u[w]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4959:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7294),a=r(9960),i=r(4477),o=r(2263),l=r(643).version.split("."),s=[l[0],l[1]].join(".");const p=function(e){var t=e.to,r=e.children,l=(0,i.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===s?n.createElement(a.default,{to:"/api/"+t},r):n.createElement(a.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t},r)}},6309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>w,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=(r(4959),["components"]),l={id:"setting-up",title:"Setting up",description:"Your first steps into the world of scraping with Crawlee"},s=void 0,p={unversionedId:"introduction/setting-up",id:"introduction/setting-up",title:"Setting up",description:"Your first steps into the world of scraping with Crawlee",source:"@site/../docs/introduction/01-setting-up.mdx",sourceDirName:"introduction",slug:"/introduction/setting-up",permalink:"/docs/next/introduction/setting-up",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1666097552,formattedLastUpdatedAt:"Oct 18, 2022",sidebarPosition:1,frontMatter:{id:"setting-up",title:"Setting up",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/introduction/"},next:{title:"First crawler",permalink:"/docs/next/introduction/first-crawler"}},c={},u=[{value:"Creating a new project",id:"creating-a-new-project",level:2},{value:"Running headful browsers",id:"running-headful-browsers",level:3},{value:"Next lesson",id:"next-lesson",level:2}],d={toc:u};function w(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To run Crawlee on your own computer, you need to meet the following pre-requisites first:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Have ",(0,i.kt)("strong",{parentName:"li"},"Node.js version 16.0")," or higher installed.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Visit ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener"},"Node.js website")," to download or use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener"},"fnm")))),(0,i.kt)("li",{parentName:"ol"},"Have ",(0,i.kt)("strong",{parentName:"li"},"NPM")," installed, or use other package manager of your choice.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NPM comes bundled with Node.js, so you should already have it. If not, reinstall Node.js.")))),(0,i.kt)("p",null,"If not certain, confirm the prerequisites by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm -v\n")),(0,i.kt)("h2",{id:"creating-a-new-project"},"Creating a new project"),(0,i.kt)("p",null,"The fastest and best way to create new projects with Crawlee is to use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@crawlee/cli",target:"_blank",rel:"noopener"},"Crawlee CLI"),". You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"npx")," utility to download and run the CLI - it is embedded in the ",(0,i.kt)("inlineCode",{parentName:"p"},"crawlee")," package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx crawlee create my-crawler\n")),(0,i.kt)("p",null,"A prompt will be shown, asking you to choose a template. Crawlee is written in TypeScript so if you're familiar with it, choosing a TypeScript template will give you better code completion and static type checking, but feel free to use JavaScript as well. Functionally they're identical."),(0,i.kt)("p",null,"Let's choose the first template called ",(0,i.kt)("strong",{parentName:"p"},"Getting started example"),". The command will create a new directory in your current working directory, called ",(0,i.kt)("strong",{parentName:"p"},"my-crawler"),", add a ",(0,i.kt)("strong",{parentName:"p"},"package.json")," to this folder and install all the necessary dependencies. It will also add example source code that you can immediately run."),(0,i.kt)("p",null,"Let's try that!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-crawler\nnpm start\n")),(0,i.kt)("p",null,"You will see log messages in the terminal as Crawlee boots up and starts scraping the Crawlee website."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"INFO  PlaywrightCrawler: Starting the crawl\nINFO  PlaywrightCrawler: Title of https://crawlee.dev/ is 'Crawlee \xb7 Build reliable crawlers. Fast. | Crawlee'\nINFO  PlaywrightCrawler: Title of https://crawlee.dev/docs/examples is 'Examples | Crawlee'\nINFO  PlaywrightCrawler: Title of https://crawlee.dev/api/core is '@crawlee/core | API | Crawlee'\nINFO  PlaywrightCrawler: Title of https://crawlee.dev/api/core/changelog is 'Changelog | API | Crawlee'\nINFO  PlaywrightCrawler: Title of https://crawlee.dev/docs/quick-start is 'Quick Start | Crawlee'\n")),(0,i.kt)("p",null,"You can always terminate the crawl with a keypress in the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"CTRL+C\n")),(0,i.kt)("h3",{id:"running-headful-browsers"},"Running headful browsers"),(0,i.kt)("p",null,"Browsers controlled by Playwright run headless (without a visible window). You can switch to headful by uncommenting the ",(0,i.kt)("inlineCode",{parentName:"p"},"headless: false")," option in the crawler's constructor. This is useful in the development phase when you want to see what's going on in the browser."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Uncomment this option to see the browser window.\nheadless: false\n")),(0,i.kt)("p",null,"When you run the example again, after a second a Chromium browser window will open. In the window, you'll see quickly changing pages as the crawler does its job."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Chrome Scrape",src:r(7940).Z,width:"720",height:"405"})),(0,i.kt)("h2",{id:"next-lesson"},"Next lesson"),(0,i.kt)("p",null,"The next lesson will teach you how to create a very simple crawler and explain Crawlee components while building it."))}w.isMDXComponent=!0},7940:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/chrome_scrape-e50b8b7d7d8135d12893344cd6cd8763.gif"},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.1.0","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.1.0","@crawlee/browser":"^3.1.0","@crawlee/cheerio":"^3.1.0","@crawlee/cli":"^3.1.0","@crawlee/core":"^3.1.0","@crawlee/http":"^3.1.0","@crawlee/jsdom":"^3.1.0","@crawlee/playwright":"^3.1.0","@crawlee/puppeteer":"^3.1.0","@crawlee/utils":"^3.1.0","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":"<= 18.0"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);