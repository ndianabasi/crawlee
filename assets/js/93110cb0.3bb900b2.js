"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4359],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4959:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(9960),o=r(4477),s=r(2263),i=r(643).version.split("."),p=[i[0],i[1]].join(".");const l=function(e){var t=e.to,r=e.children,i=(0,o.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===p?a.createElement(n.default,{to:"/api/"+t},r):a.createElement(n.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t},r)}},3190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),s=r(1435),i=r(4959);var p=["components"],l={id:"forms",title:"Forms"},c=void 0,d={unversionedId:"examples/forms",id:"examples/forms",title:"Forms",description:"This example demonstrates how to use PuppeteerCrawler to",source:"@site/../docs/examples/forms.mdx",sourceDirName:"examples",slug:"/examples/forms",permalink:"/docs/next/examples/forms",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1666097552,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{id:"forms",title:"Forms"},sidebar:"docs",previous:{title:"Export entire dataset to one file",permalink:"/docs/next/examples/export-entire-dataset"},next:{title:"HTTP crawler",permalink:"/docs/next/examples/http-crawler"}},u={},m=[],f={toc:m};function h(e){var t=e.components,r=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to use ",(0,o.kt)(i.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"))," to\nautomatically fill and submit a search form to look up repositories on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com",target:"_blank",rel:"noopener"},"GitHub")," using headless Chrome / Puppeteer.\nThe crawler first fills in the search term, repository owner, start date and language of the repository, then submits the form\nand prints out the results. Finally, the results are saved either on the Apify platform to the\ndefault ",(0,o.kt)(i.Z,{to:"core/class/Dataset",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"dataset"))," or on the local machine as JSON files in ",(0,o.kt)("inlineCode",{parentName:"p"},"./storage/datasets/default"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Dataset, launchPuppeteer } from 'crawlee';\n\n// Launch the web browser.\nconst browser = await launchPuppeteer();\n\n// Create and navigate new page\nconsole.log('Open target page');\nconst page = await browser.newPage();\nawait page.goto('https://github.com/search/advanced');\n\n// Fill form fields and select desired search options\nconsole.log('Fill in search form');\nawait page.type('#adv_code_search input.js-advanced-search-input', 'apify-js');\nawait page.type('#search_from', 'apify');\nawait page.type('#search_date', '>2015');\nawait page.select('select#search_language', 'JavaScript');\n\n// Submit the form and wait for full load of next page\nconsole.log('Submit search form');\nawait Promise.all([\n    page.waitForNavigation(),\n    page.click('#adv_code_search button[type=\"submit\"]'),\n]);\n\n// Obtain and print list of search results\nconst results = await page.$$eval('div.f4.text-normal a', (nodes) => nodes.map((node) => ({\n    url: node.href,\n    name: node.innerText,\n})));\n\nconsole.log('Results:', results);\n\n// Store data in default dataset\nawait Dataset.pushData(results);\n\n// Close browser\nawait browser.close();\n"))}h.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.1.0","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.1.0","@crawlee/browser":"^3.1.0","@crawlee/cheerio":"^3.1.0","@crawlee/cli":"^3.1.0","@crawlee/core":"^3.1.0","@crawlee/http":"^3.1.0","@crawlee/jsdom":"^3.1.0","@crawlee/playwright":"^3.1.0","@crawlee/puppeteer":"^3.1.0","@crawlee/utils":"^3.1.0","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":"<= 18.0"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);