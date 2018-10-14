"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2774],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3612:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7294),n=a(6010),l=a(5281),i=a(5999);const o="admonition_LlT9",s="admonitionHeading_tbUL",u="admonitionIcon_kALy",c="admonitionContent_S0QG";var d={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},p={secondary:"note",important:"info",success:"tip",warning:"danger"};function h(e){var t,a=function(e){var t=r.Children.toArray(e),a=t.find((function(e){var t;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),n=r.createElement(r.Fragment,null,t.filter((function(e){return e!==a})));return{mdxAdmonitionTitle:a,rest:n}}(e.children),n=a.mdxAdmonitionTitle,l=a.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:n,children:l})}function m(e){var t=h(e),a=t.children,i=t.type,m=t.title,w=t.icon,f=function(e){var t,a=null!=(t=p[e])?t:e;return d[a]||(console.warn('No admonition config found for admonition type "'+a+'". Using Info as fallback.'),d.info)}(i),g=null!=m?m:f.label,y=f.iconComponent,b=null!=w?w:r.createElement(y,null);return r.createElement("div",{className:(0,n.Z)(l.k.common.admonition,l.k.common.admonitionType(e.type),"alert","alert--"+f.infimaClassName,o)},r.createElement("div",{className:s},r.createElement("span",{className:u},b),g),r.createElement("div",{className:c},a))}},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(7462),n=a(7294),l=a(6010),i=a(2389),o=a(7392),s=a(7094),u=a(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,a,i=e.lazy,p=e.block,h=e.defaultValue,m=e.values,w=e.groupId,f=e.className,g=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===h?h:null!=(t=null!=h?h:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),C=v.tabGroupChoices,T=v.setTabGroupChoices,x=(0,n.useState)(k),N=x[0],q=x[1],E=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=w){var j=C[w];null!=j&&j!==N&&y.some((function(e){return e.value===j}))&&q(j)}var I=function(e){var t=e.currentTarget,a=E.indexOf(t),r=y[a].value;r!==N&&(P(t),q(r),null!=w&&T(w,String(r)))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=E.indexOf(e.currentTarget)+1;a=null!=(r=E[n])?r:E[0];break;case"ArrowLeft":var l,i=E.indexOf(e.currentTarget)-1;a=null!=(l=E[i])?l:E[E.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},y.map((function(e){var t=e.value,a=e.label,i=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),i?(0,n.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function h(e){var t=(0,i.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},4959:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7294),n=a(9960),l=a(4477),i=a(2263),o=a(643).version.split("."),s=[o[0],o[1]].join(".");const u=function(e){var t=e.to,a=e.children,o=(0,l.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===s?r.createElement(n.default,{to:"/api/"+t},a):r.createElement(n.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t},a)}},2543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>w,contentTitle:()=>h,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>f});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=a(4959),o=a(3612),s=a(5488),u=a(5162),c=a(1435);var d=["components"],p={id:"quick-start",title:"Quick Start",description:"With this short tutorial you can start scraping with Crawlee in a minute or two. To learn more, read the Introduction."},h=void 0,m={unversionedId:"quick-start/quick-start",id:"version-3.1/quick-start/quick-start",title:"Quick Start",description:"With this short tutorial you can start scraping with Crawlee in a minute or two. To learn more, read the Introduction.",source:"@site/versioned_docs/version-3.1/quick-start/index.mdx",sourceDirName:"quick-start",slug:"/quick-start/",permalink:"/docs/quick-start/",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1666097552,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{id:"quick-start",title:"Quick Start",description:"With this short tutorial you can start scraping with Crawlee in a minute or two. To learn more, read the Introduction."},sidebar:"docs",next:{title:"Introduction",permalink:"/docs/introduction/"}},w={},f=[{value:"Choose your crawler",id:"choose-your-crawler",level:2},{value:"CheerioCrawler",id:"cheeriocrawler",level:3},{value:"PuppeteerCrawler",id:"puppeteercrawler",level:3},{value:"PlaywrightCrawler",id:"playwrightcrawler",level:3},{value:"Installation with Crawlee CLI",id:"installation-with-crawlee-cli",level:2},{value:"Manual installation",id:"manual-installation",level:2},{value:"Crawling",id:"crawling",level:2},{value:"Running headful browsers",id:"running-headful-browsers",level:3},{value:"Results",id:"results",level:2},{value:"Examples and further reading",id:"examples-and-further-reading",level:2}],g={toc:f};function y(e){var t=e.components,p=(0,n.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"With this short tutorial you can start scraping with Crawlee in a minute or two. To learn in-depth how Crawlee works, read the ",(0,l.kt)("a",{parentName:"p",href:"./introduction",target:null,rel:null},"Introduction"),", which is a comprehensive step-by-step guide for creating your first scraper."),(0,l.kt)("h2",{id:"choose-your-crawler"},"Choose your crawler"),(0,l.kt)("p",null,"Crawlee comes with three main crawler classes: ",(0,l.kt)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")),", ",(0,l.kt)(i.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"))," and ",(0,l.kt)(i.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),". All classes share the same interface for maximum flexibility when switching between them."),(0,l.kt)("h3",{id:"cheeriocrawler"},"CheerioCrawler"),(0,l.kt)("p",null,"This is a plain HTTP crawler. It parses HTML using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cheeriojs/cheerio",target:"_blank",rel:"noopener"},"Cheerio")," library and crawls the web using the specialized ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},"got-scraping")," HTTP client which masks as a browser. It's very fast and efficient, but can't handle JavaScript rendering."),(0,l.kt)("h3",{id:"puppeteercrawler"},"PuppeteerCrawler"),(0,l.kt)("p",null,"This crawler uses a headless browser to crawl, controlled by the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener"},"Puppeteer")," library. It can control Chromium or Chrome. Puppeteer is the de-facto standard in headless browser automation."),(0,l.kt)("h3",{id:"playwrightcrawler"},"PlaywrightCrawler"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener"},"Playwright")," is a more powerful and full-featured successor to Puppeteer. It can control Chromium, Chrome, Firefox, Webkit and many other browsers. If you're not familiar with Puppeteer already, and you need a headless browser, go with Playwright."),(0,l.kt)("admonition",{title:"before you start",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Crawlee requires ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/",target:"_blank",rel:"noopener"},"Node.js 16 or later"),".")),(0,l.kt)("h2",{id:"installation-with-crawlee-cli"},"Installation with Crawlee CLI"),(0,l.kt)("p",null,"The fastest way to try Crawlee out is to use the ",(0,l.kt)("strong",{parentName:"p"},"Crawlee CLI")," and choose the ",(0,l.kt)("strong",{parentName:"p"},"Getting started example"),".\nThe CLI will install all the necessary dependencies and add boilerplate code for you to play with."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx crawlee create my-crawler\n")),(0,l.kt)("p",null,"After the installation is complete you can start the crawler like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-crawler && npm start\n")),(0,l.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,l.kt)("p",null,"You can add Crawlee to any Node.js project by running:"),(0,l.kt)(s.Z,{groupId:"quick_start",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,l.kt)(c.Z,{language:"bash",mdxType:"CodeBlock"},"npm install crawlee")),(0,l.kt)(u.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"playwright")," is not bundled with Crawlee to reduce install size and allow greater flexibility. You need to explicitly install it with NPM. \ud83d\udc47")),(0,l.kt)(c.Z,{language:"bash",mdxType:"CodeBlock"},"npm install crawlee playwright")),(0,l.kt)(u.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"puppeteer")," is not bundled with Crawlee to reduce install size and allow greater flexibility. You need to explicitly install it with NPM. \ud83d\udc47")),(0,l.kt)(c.Z,{language:"bash",mdxType:"CodeBlock"},"npm install crawlee puppeteer"))),(0,l.kt)("h2",{id:"crawling"},"Crawling"),(0,l.kt)("p",null,"Run the following example to perform a recursive crawl of the Crawlee website using the selected crawler."),(0,l.kt)(o.Z,{type:"caution",title:"Don't forget about module imports",mdxType:"Admonition"},"To run the example, add a ",(0,l.kt)("code",null,'"type": "module"')," clause into your ",(0,l.kt)("code",null,"package.json")," or copy it into a file with an ",(0,l.kt)("code",null,".mjs")," suffix. This enables ",(0,l.kt)("code",null,"import")," statements in Node.js. See ",(0,l.kt)("a",{href:"https://nodejs.org/dist/latest-v16.x/docs/api/esm.html#enabling",target:"_blank",rel:"noreferrer"},"Node.js docs")," for more information."),(0,l.kt)(s.Z,{groupId:"quick_start",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,l.kt)(c.Z,{language:"js",mdxType:"CodeBlock"},"import { CheerioCrawler, Dataset } from 'crawlee';\n\n// CheerioCrawler crawls the web using HTTP requests\n// and parses HTML using the Cheerio library.\nconst crawler = new CheerioCrawler({\n    // Use the requestHandler to process each of the crawled pages.\n    async requestHandler({ request, $, enqueueLinks, log }) {\n        const title = $('title').text();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n\n        // Save results as JSON to ./storage/datasets/default\n        await Dataset.pushData({ title, url: request.loadedUrl });\n\n        // Extract links from the current page\n        // and add them to the crawling queue.\n        await enqueueLinks();\n    },\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n")),(0,l.kt)(u.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,l.kt)(c.Z,{language:"js",mdxType:"CodeBlock"},"import { PlaywrightCrawler, Dataset } from 'crawlee';\n\n// PlaywrightCrawler crawls the web using a headless\n// browser controlled by the Playwright library.\nconst crawler = new PlaywrightCrawler({\n    // Use the requestHandler to process each of the crawled pages.\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const title = await page.title();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n\n        // Save results as JSON to ./storage/datasets/default\n        await Dataset.pushData({ title, url: request.loadedUrl });\n\n        // Extract links from the current page\n        // and add them to the crawling queue.\n        await enqueueLinks();\n    },\n    // Uncomment this option to see the browser window.\n    // headless: false,\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n")),(0,l.kt)(u.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,l.kt)(c.Z,{language:"js",mdxType:"CodeBlock"},"import { PuppeteerCrawler, Dataset } from 'crawlee';\n\n// PuppeteerCrawler crawls the web using a headless\n// browser controlled by the Puppeteer library.\nconst crawler = new PuppeteerCrawler({\n    // Use the requestHandler to process each of the crawled pages.\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const title = await page.title();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n\n        // Save results as JSON to ./storage/datasets/default\n        await Dataset.pushData({ title, url: request.loadedUrl });\n\n        // Extract links from the current page\n        // and add them to the crawling queue.\n        await enqueueLinks();\n    },\n    // Uncomment this option to see the browser window.\n    // headless: false,\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n"))),(0,l.kt)("p",null,"When you run the example, you will see Crawlee automating the data extraction process in your terminal."),(0,l.kt)(c.Z,{language:"log",mdxType:"CodeBlock"},"INFO  CheerioCrawler: Starting the crawl\nINFO  CheerioCrawler: Title of https://crawlee.dev/ is 'Crawlee \xb7 Build reliable crawlers. Fast. | Crawlee'\nINFO  CheerioCrawler: Title of https://crawlee.dev/docs/examples is 'Examples | Crawlee'\nINFO  CheerioCrawler: Title of https://crawlee.dev/docs/quick-start is 'Quick Start | Crawlee'\nINFO  CheerioCrawler: Title of https://crawlee.dev/docs/guides is 'Guides | Crawlee'\n"),(0,l.kt)("h3",{id:"running-headful-browsers"},"Running headful browsers"),(0,l.kt)("p",null,"Browsers controlled by Puppeteer and Playwright run headless (without a visible window). You can switch to headful by adding the ",(0,l.kt)("inlineCode",{parentName:"p"},"headless: false")," option to the crawlers' constructor. This is useful in the development phase when you want to see what's going on in the browser."),(0,l.kt)(s.Z,{groupId:"quick_start",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,l.kt)(c.Z,{language:"js",mdxType:"CodeBlock"},"import { PlaywrightCrawler, Dataset } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const title = await page.title();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n        await Dataset.pushData({ title, url: request.loadedUrl });\n        await enqueueLinks();\n    },\n    // When you turn off headless mode, the crawler\n    // will run with a visible browser window.\n    headless: false,\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n")),(0,l.kt)(u.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,l.kt)(c.Z,{language:"js",mdxType:"CodeBlock"},"import { PuppeteerCrawler, Dataset } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const title = await page.title();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n        await Dataset.pushData({ title, url: request.loadedUrl });\n        await enqueueLinks();\n    },\n    // When you turn off headless mode, the crawler\n    // will run with a visible browser window.\n    headless: false,\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n"))),(0,l.kt)("p",null,"When you run the example code, you'll see an automated browser blaze through the Crawlee website."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Chrome Scrape",src:a(7940).Z,width:"720",height:"405"})),(0,l.kt)("h2",{id:"results"},"Results"),(0,l.kt)("p",null,"Crawlee stores data to the ",(0,l.kt)("inlineCode",{parentName:"p"},"./storage")," directory in your current working directory. The results of your crawl will be available under ",(0,l.kt)("inlineCode",{parentName:"p"},"./storage/datasets/default/*.json")," as JSON files."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="./storage/datasets/default/000000001.json"',title:'"./storage/datasets/default/000000001.json"'},'{\n    "url": "https://crawlee.dev/",\n    "title": "Crawlee \xb7 The scalable web crawling, scraping and automation library for JavaScript/Node.js | Crawlee"\n}\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can override the storage directory by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR")," environment variable.")),(0,l.kt)("h2",{id:"examples-and-further-reading"},"Examples and further reading"),(0,l.kt)("p",null,"You can find more examples showcasing various features of Crawlee in the ",(0,l.kt)("a",{parentName:"p",href:"./examples",target:null,rel:null},"Examples")," section of the documentation. To better understand Crawlee and its components you should read the ",(0,l.kt)("a",{parentName:"p",href:"./introduction",target:null,rel:null},"Introduction")," step-by-step guide."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Related links")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./guides/configuration",target:null,rel:null},"Configuration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./guides/request-storage",target:null,rel:null},"Request storage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./guides/result-storage",target:null,rel:null},"Result storage"))))}y.isMDXComponent=!0},7940:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/chrome_scrape-e50b8b7d7d8135d12893344cd6cd8763.gif"},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.1.0","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.1.0","@crawlee/browser":"^3.1.0","@crawlee/cheerio":"^3.1.0","@crawlee/cli":"^3.1.0","@crawlee/core":"^3.1.0","@crawlee/http":"^3.1.0","@crawlee/jsdom":"^3.1.0","@crawlee/playwright":"^3.1.0","@crawlee/puppeteer":"^3.1.0","@crawlee/utils":"^3.1.0","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":"<= 18.0"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);