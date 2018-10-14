"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1505],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,w=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(w,o(o({ref:t},s),{},{components:r})):n.createElement(w,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7462),a=r(7294),l=r(6010),o=r(2389),i=r(7392),u=r(7094),c=r(2466);const s="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,r,o=e.lazy,m=e.block,d=e.defaultValue,w=e.values,f=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=w?w:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:v[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,u.U)(),k=x.tabGroupChoices,T=x.setTabGroupChoices,C=(0,a.useState)(g),O=C[0],E=C[1],P=[],N=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=k[f];null!=j&&j!==O&&y.some((function(e){return e.value===j}))&&E(j)}var L=function(e){var t=e.currentTarget,r=P.indexOf(t),n=y[r].value;n!==O&&(N(t),E(n),null!=f&&T(f,String(n)))},Z=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=P.indexOf(e.currentTarget)+1;r=null!=(n=P[a])?n:P[0];break;case"ArrowLeft":var l,o=P.indexOf(e.currentTarget)-1;r=null!=(l=P[o])?l:P[P.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},h)},y.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return P.push(e)},onKeyDown:Z,onFocus:L,onClick:L},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,o.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},3864:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>w});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=r(5488),i=r(5162),u=r(1435);var c=["components"],s={id:"crawl-multiple-urls",title:"Crawl multiple URLs"},p=void 0,m={unversionedId:"examples/crawl-multiple-urls",id:"version-3.1/examples/crawl-multiple-urls",title:"Crawl multiple URLs",description:"This example crawls the specified list of URLs.",source:"@site/versioned_docs/version-3.1/examples/crawl_multiple_urls.mdx",sourceDirName:"examples",slug:"/examples/crawl-multiple-urls",permalink:"/docs/examples/crawl-multiple-urls",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1666097552,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{id:"crawl-multiple-urls",title:"Crawl multiple URLs"},sidebar:"docs",previous:{title:"Crawl all links on a website",permalink:"/docs/examples/crawl-all-links"},next:{title:"Crawl a website with relative links",permalink:"/docs/examples/crawl-relative-links"}},d={},w=[],f={toc:w};function h(e){var t=e.components,r=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example crawls the specified list of URLs."),(0,l.kt)(o.Z,{groupId:"crawler-type",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,mdxType:"TabItem"},(0,l.kt)(u.Z,{className:"language-js",mdxType:"CodeBlock"},"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request, $, log }) {\n        const title = $('title').text();\n        log.info(`URL: ${request.url}\\nTITLE: ${title}`);\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n    'http://www.example.com/page-3',\n]);\n")),(0,l.kt)(i.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,l.kt)(u.Z,{className:"language-js",mdxType:"CodeBlock"},"import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    // Function called for each URL\n    async requestHandler({ request, page, log }) {\n        const title = await page.title();\n        log.info(`URL: ${request.url}\\nTITLE: ${title}`);\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n    'http://www.example.com/page-3',\n]);\n")),(0,l.kt)(i.Z,{value:"playwright_crawler",label:"Playwright Crawler",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,l.kt)(u.Z,{className:"language-js",mdxType:"CodeBlock"},"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    // Function called for each URL\n    async requestHandler({ request, page, log }) {\n        const title = await page.title();\n        log.info(`URL: ${request.url}\\nTITLE: ${title}`);\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n    'http://www.example.com/page-3',\n]);\n"))))}h.isMDXComponent=!0}}]);