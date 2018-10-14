"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4959:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7294),a=r(9960),o=r(4477),s=r(2263),i=r(643).version.split("."),l=[i[0],i[1]].join(".");const c=function(e){var t=e.to,r=e.children,i=(0,o.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===l?n.createElement(a.default,{to:"/api/"+t},r):n.createElement(a.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t},r)}},1191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=r(1435),i=r(4959);var l=["components"],c={id:"jsdom-crawler",title:"JSDOM crawler"},p=void 0,d={unversionedId:"examples/jsdom-crawler",id:"version-3.0/examples/jsdom-crawler",title:"JSDOM crawler",description:"This example demonstrates how to use JSDOMCrawler to crawl a list of URLs from an external file, load each URL using a plain HTTP request, parse the HTML using the jsdom DOM implementation and extract some data from it: the page title and all h1 tags.",source:"@site/versioned_docs/version-3.0/examples/jsdom_crawler.mdx",sourceDirName:"examples",slug:"/examples/jsdom-crawler",permalink:"/docs/3.0/examples/jsdom-crawler",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1666097552,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{id:"jsdom-crawler",title:"JSDOM crawler"},sidebar:"docs",previous:{title:"HTTP crawler",permalink:"/docs/3.0/examples/http-crawler"},next:{title:"Dataset Map and Reduce methods",permalink:"/docs/3.0/examples/map-and-reduce"}},u={},m=[],h={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to use ",(0,o.kt)(i.Z,{to:"jsdom-crawler/class/JSDOMCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"JSDOMCrawler"))," to crawl a list of URLs from an external file, load each URL using a plain HTTP request, parse the HTML using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jsdom",target:"_blank",rel:"noopener"},"jsdom")," DOM implementation and extract some data from it: the page title and all ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," tags."),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Dataset, JSDOMCrawler, log, LogLevel } from 'crawlee';\n\n// Crawlers come with various utilities, e.g. for logging.\n// Here we use debug level of logging to improve the debugging experience.\n// This functionality is optional!\nlog.setLevel(LogLevel.DEBUG);\n\n// Create an instance of the CheerioCrawler class - a crawler\n// that automatically loads the URLs and parses their HTML using the cheerio library.\nconst crawler = new JSDOMCrawler({\n    // The crawler downloads and processes the web pages in parallel, with a concurrency\n    // automatically managed based on the available system memory and CPU (see AutoscaledPool class).\n    // Here we define some hard limits for the concurrency.\n    minConcurrency: 10,\n    maxConcurrency: 50,\n\n    // On error, retry each page at most once.\n    maxRequestRetries: 1,\n\n    // Increase the timeout for processing of each page.\n    requestHandlerTimeoutSecs: 30,\n\n    // Limit to 10 requests per one crawl\n    maxRequestsPerCrawl: 10,\n\n    // This function will be called for each URL to crawl.\n    // It accepts a single parameter, which is an object with options as:\n    // https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#requestHandler\n    // We use for demonstration only 2 of them:\n    // - request: an instance of the Request class with information such as the URL that is being crawled and HTTP method\n    // - $: the cheerio object containing parsed HTML\n    async requestHandler({ request, window }) {\n        log.debug(`Processing ${request.url}...`);\n\n        // Extract data from the page\n        const title = window.document.title;\n        const h1texts: { text: string }[] = [];\n        document.querySelectorAll('h1').forEach((element) => {\n            h1texts.push({\n                text: element.textContent!,\n            });\n        });\n\n        // Store the results to the dataset. In local configuration,\n        // the data will be stored as JSON files in ./storage/datasets/default\n        await Dataset.pushData({\n            url: request.url,\n            title,\n            h1texts,\n        });\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries + 1 times.\n    failedRequestHandler({ request }) {\n        log.debug(`Request ${request.url} failed twice.`);\n    },\n});\n\n// Run the crawler and wait for it to finish.\nawait crawler.run([\n    'https://crawlee.dev',\n]);\n\nlog.debug('Crawler finished.');\n"))}f.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.1.0","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.1.0","@crawlee/browser":"^3.1.0","@crawlee/cheerio":"^3.1.0","@crawlee/cli":"^3.1.0","@crawlee/core":"^3.1.0","@crawlee/http":"^3.1.0","@crawlee/jsdom":"^3.1.0","@crawlee/playwright":"^3.1.0","@crawlee/puppeteer":"^3.1.0","@crawlee/utils":"^3.1.0","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":"<= 18.0"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);