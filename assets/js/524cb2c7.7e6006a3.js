"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[428],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(a),d=r,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),o=a(6010),i=a(2389),l=a(7392),p=a(7094),s=a(2466);const u="tabList__CuJ",c="tabItem_LNqP";function f(e){var t,a,i=e.lazy,f=e.block,d=e.defaultValue,m=e.values,y=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(t=null!=d?d:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,p.U)(),N=v.tabGroupChoices,A=v.setTabGroupChoices,x=(0,r.useState)(w),C=x[0],_=x[1],P=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var I=N[y];null!=I&&I!==C&&k.some((function(e){return e.value===I}))&&_(I)}var O=function(e){var t=e.currentTarget,a=P.indexOf(t),n=k[a].value;n!==C&&(T(t),_(n),null!=y&&A(y,String(n)))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=P.indexOf(e.currentTarget)+1;a=null!=(n=P[r])?n:P[0];break;case"ArrowLeft":var o,i=P.indexOf(e.currentTarget)-1;a=null!=(o=P[i])?o:P[P.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":f},h)},k.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return P.push(e)},onKeyDown:E,onFocus:O,onClick:O},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,i.Z)();return r.createElement(f,(0,n.Z)({key:String(t)},e))}},4959:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(9960),o=a(4477),i=a(2263),l=a(643).version.split("."),p=[l[0],l[1]].join(".");const s=function(e){var t=e.to,a=e.children,l=(0,o.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===p?n.createElement(r.default,{to:"/api/"+t},a):n.createElement(r.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t},a)}},2775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>f,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>y});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(4959),l=a(5488),p=a(5162),s=a(1435);var u=["components"],c={id:"apify-platform",title:"Apify Platform",description:"Apify platform - large-scale and high-performance web scraping"},f=void 0,d={unversionedId:"guides/apify-platform",id:"version-3.1/guides/apify-platform",title:"Apify Platform",description:"Apify platform - large-scale and high-performance web scraping",source:"@site/versioned_docs/version-3.1/guides/apify_platform.mdx",sourceDirName:"guides",slug:"/guides/apify-platform",permalink:"/docs/guides/apify-platform",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1666097552,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{id:"apify-platform",title:"Apify Platform",description:"Apify platform - large-scale and high-performance web scraping"},sidebar:"docs",previous:{title:"Running in Docker",permalink:"/docs/guides/docker-images"},next:{title:"Examples",permalink:"/docs/examples"}},m={},y=[{value:"Logging into Apify platform from Crawlee",id:"logging-into-apify-platform-from-crawlee",level:2},{value:"Log in with CLI",id:"log-in-with-cli",level:3},{value:"Log in with environment variables",id:"log-in-with-environment-variables",level:3},{value:"Log in with Configuration",id:"log-in-with-configuration",level:3},{value:"What is an actor",id:"what-is-an-actor",level:2},{value:"Running an actor locally",id:"running-an-actor-locally",level:2},{value:"Running Crawlee code as an actor",id:"running-crawlee-code-as-an-actor",level:2},{value:"Deploying an actor to Apify platform",id:"deploying-an-actor-to-apify-platform",level:2},{value:"Usage on Apify platform",id:"usage-on-apify-platform",level:2},{value:"Storages",id:"storages",level:2},{value:"Helper functions for default Key-Value Store and Dataset",id:"helper-functions-for-default-key-value-store-and-dataset",level:3},{value:"Using platform storage in a local actor",id:"using-platform-storage-in-a-local-actor",level:3},{value:"Getting public url of an item in the platform storage",id:"getting-public-url-of-an-item-in-the-platform-storage",level:3},{value:"Exporting dataset data",id:"exporting-dataset-data",level:3},{value:"Environment variables",id:"environment-variables",level:2},{value:"<code>APIFY_TOKEN</code>",id:"apify_token",level:3},{value:"Combinations of <code>APIFY_TOKEN</code> and <code>CRAWLEE_STORAGE_DIR</code>",id:"combinations-of-apify_token-and-crawlee_storage_dir",level:3},{value:"<code>APIFY_PROXY_PASSWORD</code>",id:"apify_proxy_password",level:3},{value:"Proxy management",id:"proxy-management",level:2},{value:"Apify Proxy",id:"apify-proxy",level:3},{value:"Apify Proxy Configuration",id:"apify-proxy-configuration",level:3},{value:"Apify Proxy vs. Own proxies",id:"apify-proxy-vs-own-proxies",level:3}],h={toc:y};function g(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apify is a ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com",target:"_blank",rel:"noopener"},"platform")," built to serve large-scale and high-performance web scraping\nand automation needs. It provides easy access to ",(0,o.kt)("a",{parentName:"p",href:"#what-is-an-actor",target:null,rel:null},"compute instances (Actors)"),",\nconvenient ",(0,o.kt)("a",{parentName:"p",href:"../guides/request-storage",target:null,rel:null},"request")," and ",(0,o.kt)("a",{parentName:"p",href:"../guides/result-storage",target:null,rel:null},"result")," storages, ",(0,o.kt)("a",{parentName:"p",href:"../guides/proxy-management",target:null,rel:null},"proxies"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/scheduler",target:"_blank",rel:"noopener"},"scheduling"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/webhooks",target:"_blank",rel:"noopener"},"webhooks"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/",target:"_blank",rel:"noopener"},"more"),", accessible through a ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"web interface"),"\nor an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api",target:"_blank",rel:"noopener"},"API"),"."),(0,o.kt)("p",null,"While we think that the Apify platform is super cool, and it's definitely worth signing up for a\n",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/sign-up",target:"_blank",rel:"noopener"},"free account"),", ",(0,o.kt)("strong",{parentName:"p"},"Crawlee is and will always be open source"),",\nrunnable locally or on any cloud infrastructure."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We do not test Crawlee in other cloud environments such as Lambda or on specific\narchitectures such as Raspberry PI. We strive to make it work, but there are no guarantees.")),(0,o.kt)("h2",{id:"logging-into-apify-platform-from-crawlee"},"Logging into Apify platform from Crawlee"),(0,o.kt)("p",null,"To access your ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/sign-up",target:"_blank",rel:"noopener"},"Apify account")," from Crawlee, you must provide\ncredentials - your ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/account?tab=integrations",target:"_blank",rel:"noopener"},"API token"),". You can do that\neither by utilizing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-cli",target:"_blank",rel:"noopener"},"Apify CLI")," or with environment\nvariables."),(0,o.kt)("p",null,"Once you provide credentials to your scraper, you will be able to use all the Apify platform\nfeatures, such as calling actors, saving to cloud storages, using Apify proxies,\nsetting up webhooks and so on."),(0,o.kt)("h3",{id:"log-in-with-cli"},"Log in with CLI"),(0,o.kt)("p",null,"Apify CLI allows you to log in to your Apify account on your computer. If you then run your\nscraper using the CLI, your credentials will automatically be added."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g apify-cli\napify login -t YOUR_API_TOKEN\n")),(0,o.kt)("h3",{id:"log-in-with-environment-variables"},"Log in with environment variables"),(0,o.kt)("p",null,"Alternatively, you can always provide credentials to your scraper\nby setting the ",(0,o.kt)("a",{parentName:"p",href:"#apify_token",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_TOKEN"))," environment\nvariable to your API token."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There's also the ",(0,o.kt)("a",{parentName:"p",href:"#apify_proxy_password",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_PROXY_PASSWORD")),"\nenvironment variable. Actor automatically infers that from your token, but it can be useful\nwhen you need to access proxies from a different account than your token represents.")),(0,o.kt)("h3",{id:"log-in-with-configuration"},"Log in with Configuration"),(0,o.kt)("p",null,"Another option is to use the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Configuration",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Configuration"))," instance and set your api token there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Actor } from 'apify';\n\nconst sdk = new Actor({ token: 'your_api_token' });\n")),(0,o.kt)("h2",{id:"what-is-an-actor"},"What is an actor"),(0,o.kt)("p",null,"When you deploy your script to the Apify platform, it becomes an ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/actors",target:"_blank",rel:"noopener"},"actor"),".\nAn actor is a serverless microservice that accepts an input and produces an output. It can run for\na few seconds, hours or even infinitely. An actor can perform anything from a simple action such\nas filling out a web form or sending an email, to complex operations such as crawling an entire website\nand removing duplicates from a large dataset."),(0,o.kt)("p",null,"Actors can be shared in the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," so that other people can use them.\nBut don't worry, if you share your actor in the store and somebody uses it, it runs under their account,\nnot yours."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Related links")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Store of existing actors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/actors",target:"_blank",rel:"noopener"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"View actors in Apify Console")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/docs/api/v2#/reference/actors",target:"_blank",rel:"noopener"},"API reference"))),(0,o.kt)("h2",{id:"running-an-actor-locally"},"Running an actor locally"),(0,o.kt)("p",null,"First let's create a boilerplate of the new actor. You could use Apify CLI and just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apify create my-hello-world\n")),(0,o.kt)("p",null,'The CLI will prompt you to select a project boilerplate template - let\'s pick "Hello world". The tool will create a directory called ',(0,o.kt)("inlineCode",{parentName:"p"},"my-hello-world")," with a Node.js project files. You can run the actor as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-hello-world\napify run\n")),(0,o.kt)("h2",{id:"running-crawlee-code-as-an-actor"},"Running Crawlee code as an actor"),(0,o.kt)("p",null,"For running Crawlee code as an actor on ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/actors",target:"_blank",rel:"noopener"},"Apify platform")," you should either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use a combination of ",(0,o.kt)("a",{parentName:"li",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#init",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.init()"))," and ",(0,o.kt)("a",{parentName:"li",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#exit",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.exit()"))," functions;"),(0,o.kt)("li",{parentName:"ul"},"or wrap it into ",(0,o.kt)("a",{parentName:"li",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#main",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.main()"))," function.")),(0,o.kt)("admonition",{title:"NOTE",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Adding ",(0,o.kt)("a",{parentName:"li",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#init",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.init()"))," and ",(0,o.kt)("a",{parentName:"li",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#exit",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.exit()"))," to your code are the only two important things needed to run it on Apify platform as an actor. ",(0,o.kt)("inlineCode",{parentName:"li"},"Actor.init()")," is needed to initialize your actor (e.g. to set the correct storage implementation), while without ",(0,o.kt)("inlineCode",{parentName:"li"},"Actor.exit()")," the process will simply never stop."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#main",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.main()"))," is an alternative to ",(0,o.kt)("inlineCode",{parentName:"li"},"Actor.init()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Actor.exit()")," as it calls both behind the scenes."))),(0,o.kt)("p",null,"Let's look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," example from the ",(0,o.kt)("a",{parentName:"p",href:"../quick-start",target:null,rel:null},"Quick Start")," guide:"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"main",label:"Using Actor.main()",default:!0,mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.main(async () => {\n    const crawler = new CheerioCrawler({\n        async requestHandler({ request, $, enqueueLinks }) {\n            const { url } = request;\n\n            // Extract HTML title of the page.\n            const title = $('title').text();\n            console.log(`Title of ${url}: ${title}`);\n\n            // Add URLs that match the provided pattern.\n            await enqueueLinks({\n                globs: ['https://www.iana.org/*'],\n            });\n\n            // Save extracted data to dataset.\n            await Actor.pushData({ url, title });\n        },\n    });\n\n    // Enqueue the initial request and run the crawler\n    await crawler.run(['https://www.iana.org/']);\n});\n")),(0,o.kt)(p.Z,{value:"init_exit",label:"Using Actor.init() and Actor.exit()",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ request, $, enqueueLinks }) {\n        const { url } = request;\n\n        // Extract HTML title of the page.\n        const title = $('title').text();\n        console.log(`Title of ${url}: ${title}`);\n\n        // Add URLs that match the provided pattern.\n        await enqueueLinks({\n            globs: ['https://www.iana.org/*'],\n        });\n\n        // Save extracted data to dataset.\n        await Actor.pushData({ url, title });\n    },\n});\n\n// Enqueue the initial request and run the crawler\nawait crawler.run(['https://www.iana.org/']);\n\nawait Actor.exit();\n"))),(0,o.kt)("p",null,"Note that you could also run your actor (that is using Crawlee) locally with Apify CLI. You could start it via the following command in your project folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apify run\n")),(0,o.kt)("h2",{id:"deploying-an-actor-to-apify-platform"},"Deploying an actor to Apify platform"),(0,o.kt)("p",null,"Now (assuming you are already logged in to your Apify account) you can easily deploy your code to the Apify platform by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apify push\n")),(0,o.kt)("p",null,"Your script will be uploaded to and built on the Apify platform so that it can be run there. For more information, view the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/cli",target:"_blank",rel:"noopener"},"Apify Actor")," documentation."),(0,o.kt)("h2",{id:"usage-on-apify-platform"},"Usage on Apify platform"),(0,o.kt)("p",null,"You can also develop your actor in an online code editor directly on the platform (you'll need an Apify Account). Let's go to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"Actors")," page in the app, click ",(0,o.kt)("em",{parentName:"p"},"Create new")," and then go to the ",(0,o.kt)("em",{parentName:"p"},"Source")," tab and start writing the code or paste one of the examples from the ",(0,o.kt)("a",{parentName:"p",href:"../examples",target:null,rel:null},"Examples")," section."),(0,o.kt)("h2",{id:"storages"},"Storages"),(0,o.kt)("p",null,"There are several things worth mentioning here."),(0,o.kt)("h3",{id:"helper-functions-for-default-key-value-store-and-dataset"},"Helper functions for default Key-Value Store and Dataset"),(0,o.kt)("p",null,"To simplify access to the ",(0,o.kt)("em",{parentName:"p"},"default")," storages, instead of using the helper functions of respective storage classes, you could use:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#setValue",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.setValue()")),", ",(0,o.kt)("a",{parentName:"li",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#getValue",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.getValue()")),", ",(0,o.kt)("a",{parentName:"li",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#getInput",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.getInput()"))," for ",(0,o.kt)("inlineCode",{parentName:"li"},"Key-Value Store")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#pushData",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.pushData()"))," for ",(0,o.kt)("inlineCode",{parentName:"li"},"Dataset"))),(0,o.kt)("h3",{id:"using-platform-storage-in-a-local-actor"},"Using platform storage in a local actor"),(0,o.kt)("p",null,"When you plan to use the platform storage while developing and running your actor locally, you should use ",(0,o.kt)("a",{parentName:"p",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#openKeyValueStore",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.openKeyValueStore()")),", ",(0,o.kt)("a",{parentName:"p",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#openDataset",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.openDataset()"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#openRequestQueue",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.openRequestQueue()"))," to open the respective storage."),(0,o.kt)("p",null,"Using each of these methods allows to pass the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.github.io/apify-sdk-js/api/apify/interface/OpenStorageOptions",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"OpenStorageOptions"))," as a second argument, which has only one optional property: ",(0,o.kt)("a",{parentName:"p",href:"https://apify.github.io/apify-sdk-js/api/apify/interface/OpenStorageOptions#forceCloud",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"forceCloud")),". If set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," - cloud storage will be used instead of the folder on the local disk."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you don't plan to force usage of the platform storages when running the actor locally, there is no need to use the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor"))," class for it. The Crawlee variants ",(0,o.kt)(i.Z,{to:"core/class/KeyValueStore#open",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"KeyValueStore.open()")),", ",(0,o.kt)(i.Z,{to:"core/class/Dataset#open",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Dataset.open()"))," and ",(0,o.kt)(i.Z,{to:"core/class/RequestQueue#open",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"RequestQueue.open()"))," will work the same.")),(0,o.kt)("h3",{id:"getting-public-url-of-an-item-in-the-platform-storage"},"Getting public url of an item in the platform storage"),(0,o.kt)("p",null,"If you need to share a link to some file stored in a Key-Value Store on Apify Platform, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://apify.github.io/apify-sdk-js/api/apify/class/KeyValueStore#getPublicUrl",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"getPublicUrl()"))," method. It accepts only one parameter: ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," - the key of the item you want to share."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { KeyValueStore } from 'apify';\n\nconst store = await KeyValueStore.open();\nawait store.setValue('your-file', { foo: 'bar' });\nconst url = store.getPublicUrl('your-file');\n// https://api.apify.com/v2/key-value-stores/<your-store-id>/records/your-file\n")),(0,o.kt)("h3",{id:"exporting-dataset-data"},"Exporting dataset data"),(0,o.kt)("p",null,"When the ",(0,o.kt)(i.Z,{to:"core/class/Dataset",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Dataset"))," is stored on the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/actors",target:"_blank",rel:"noopener"},"Apify platform"),", you can export its data to the following formats: HTML, JSON, CSV, Excel, XML and RSS. The datasets are displayed on the actor run details page and in the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/storage",target:"_blank",rel:"noopener"},"Storage")," section in the Apify Console. The actual data is exported using the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/docs/api/v2#/reference/datasets/item-collection/get-items",target:"_blank",rel:"noopener"},"Get dataset items")," Apify API endpoint. This way you can easily share the crawling results."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Related links")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/storage",target:"_blank",rel:"noopener"},"Apify platform storage documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://console.apify.com/storage",target:"_blank",rel:"noopener"},"View storage in Apify Console")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/docs/api/v2#/reference/key-value-stores",target:"_blank",rel:"noopener"},"Key-value stores API reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/api/v2#/reference/datasets",target:"_blank",rel:"noopener"},"Datasets API reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/api/v2#/reference/request-queues",target:"_blank",rel:"noopener"},"Request queues API reference"))),(0,o.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"The following are some additional environment variables specific to Apify platform. More Crawlee specific environment variables could be found in the ",(0,o.kt)("a",{parentName:"p",href:"./configuration#environment-variables",target:null,rel:null},"Environment Variables")," guide."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"It's important to notice that ",(0,o.kt)("inlineCode",{parentName:"p"},"CRAWLEE_")," environment variables don't need to be replaced with equivalent ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_")," ones. Likewise, Crawlee understands ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_")," environment variables after calling ",(0,o.kt)("inlineCode",{parentName:"p"},"Actor.init()")," or when using ",(0,o.kt)("inlineCode",{parentName:"p"},"Actor.main()"),".")),(0,o.kt)("h3",{id:"apify_token"},(0,o.kt)("inlineCode",{parentName:"h3"},"APIFY_TOKEN")),(0,o.kt)("p",null,"The API token for your Apify account. It is used to access the Apify API, e.g. to access cloud storage\nor to run an actor on the Apify platform. You can find your API token on the\n",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/account?tab=integrations",target:"_blank",rel:"noopener"},"Account Settings / Integrations")," page."),(0,o.kt)("h3",{id:"combinations-of-apify_token-and-crawlee_storage_dir"},"Combinations of ",(0,o.kt)("inlineCode",{parentName:"h3"},"APIFY_TOKEN")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"CRAWLEE_STORAGE_DIR")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR")," env variable description could be found in ",(0,o.kt)("a",{parentName:"p",href:"../guides/configuration#crawlee_storage_dir",target:null,rel:null},"Environment Variables")," guide.")),(0,o.kt)("p",null,"By combining the env vars in various ways, you can greatly influence the actor's behavior."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Env Vars"),(0,o.kt)("th",{parentName:"tr",align:null},"API"),(0,o.kt)("th",{parentName:"tr",align:null},"Storages"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"none OR ",(0,o.kt)("inlineCode",{parentName:"td"},"CRAWLEE_STORAGE_DIR")),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"local")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_TOKEN")),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Apify platform")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_TOKEN")," AND ",(0,o.kt)("inlineCode",{parentName:"td"},"CRAWLEE_STORAGE_DIR")),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"local + platform")))),(0,o.kt)("p",null,"When using both ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR"),", you can use all the Apify platform\nfeatures and your data will be stored locally by default. If you want to access platform storages,\nyou can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"{ forceCloud: true }")," option in their respective functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport { Dataset } from 'crawlee';\n\n// or Dataset.open('my-local-data')\nconst localDataset = await Actor.openDataset('my-local-data');\n// but here we need the `Actor` class\nconst remoteDataset = await Actor.openDataset('my-dataset', { forceCloud: true });\n")),(0,o.kt)("h3",{id:"apify_proxy_password"},(0,o.kt)("inlineCode",{parentName:"h3"},"APIFY_PROXY_PASSWORD")),(0,o.kt)("p",null,"Optional password to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," for IP address rotation.\nAssuming Apify Account was already created, you can find the password on the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener"},"Proxy page"),"\nin the Apify Console. The password is automatically inferred using the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," env var,\nso in most cases, you don't need to touch it. You should use it when, for some reason,\nyou need access to Apify Proxy, but not access to Apify API, or when you need access to\nproxy from a different account than your token represents."),(0,o.kt)("h2",{id:"proxy-management"},"Proxy management"),(0,o.kt)("p",null,"In addition to your own proxy servers and proxy servers acquired from\nthird-party providers used together with Crawlee, you can also rely on ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy"),"\nfor your scraping needs."),(0,o.kt)("h3",{id:"apify-proxy"},"Apify Proxy"),(0,o.kt)("p",null,"If you are already subscribed to Apify Proxy, you can start using them immediately in only a few lines of code (for local usage you first should be ",(0,o.kt)("a",{parentName:"p",href:"#logging-into-apify-platform-from-crawlee",target:null,rel:null},"logged in")," to your Apify account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Actor } from 'apify';\n\nconst proxyConfiguration = await Actor.createProxyConfiguration();\nconst proxyUrl = await proxyConfiguration.newUrl();\n")),(0,o.kt)("p",null,"Note that unlike using your own proxies in Crawlee, you shouldn't use the constructor to create ",(0,o.kt)(i.Z,{to:"core/class/ProxyConfiguration",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration"))," instance. For using Apify Proxy you should create an instance using the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#createProxyConfiguration",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.createProxyConfiguration()"))," function instead."),(0,o.kt)("h3",{id:"apify-proxy-configuration"},"Apify Proxy Configuration"),(0,o.kt)("p",null,"With Apify Proxy, you can select specific proxy groups to use, or countries to connect from.\nThis allows you to get better proxy performance after some initial research."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Actor } from 'apify';\n\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['RESIDENTIAL'],\n    countryCode: 'US',\n});\nconst proxyUrl = await proxyConfiguration.newUrl();\n")),(0,o.kt)("p",null,"Now your crawlers will use only Residential proxies from the US. Note that you must first get access\nto a proxy group before you are able to use it. You can check proxy groups available to you\nin the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener"},"proxy dashboard"),"."),(0,o.kt)("h3",{id:"apify-proxy-vs-own-proxies"},"Apify Proxy vs. Own proxies"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration")," class covers both Apify Proxy and custom proxy URLs so that\nyou can easily switch between proxy providers. However, some features of the class\nare available only to Apify Proxy users, mainly because Apify Proxy is what\none would call a super-proxy. It's not a single proxy server, but an API endpoint\nthat allows connection through millions of different IP addresses. So the class\nessentially has two modes: Apify Proxy or Own (third party) proxy."),(0,o.kt)("p",null,"The difference is easy to remember."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you're using your own proxies - you should create an instance with the ProxyConfiguration ",(0,o.kt)(i.Z,{to:"core/class/ProxyConfiguration#constructor",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"li"},"constructor"))," function based on the provided ",(0,o.kt)(i.Z,{to:"core/interface/ProxyConfigurationOptions",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"li"},"ProxyConfigurationOptions")),"."),(0,o.kt)("li",{parentName:"ul"},"If you are planning to use Apify Proxy - you should create an instance using the ",(0,o.kt)("a",{parentName:"li",href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#createProxyConfiguration",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.createProxyConfiguration()"))," function. ",(0,o.kt)(i.Z,{to:"core/interface/ProxyConfigurationOptions#proxyUrls",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"li"},"ProxyConfigurationOptions.proxyUrls"))," and ",(0,o.kt)(i.Z,{to:"core/interface/ProxyConfigurationOptions#newUrlFunction",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"li"},"ProxyConfigurationOptions.newUrlFunction"))," enable use of your custom proxy URLs, whereas all the other options are there to configure Apify Proxy.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Related links")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy docs"))))}g.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.1.0","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.1.0","@crawlee/browser":"^3.1.0","@crawlee/cheerio":"^3.1.0","@crawlee/cli":"^3.1.0","@crawlee/core":"^3.1.0","@crawlee/http":"^3.1.0","@crawlee/jsdom":"^3.1.0","@crawlee/playwright":"^3.1.0","@crawlee/puppeteer":"^3.1.0","@crawlee/utils":"^3.1.0","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":"<= 18.0"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);