"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1697],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),p=r(1435);var c=["components"],i={id:"accept-user-input",title:"Accept user input"},l=void 0,s={unversionedId:"examples/accept-user-input",id:"examples/accept-user-input",title:"Accept user input",description:"This example accepts and logs user input:",source:"@site/../docs/examples/accept_user_input.mdx",sourceDirName:"examples",slug:"/examples/accept-user-input",permalink:"/docs/next/examples/accept-user-input",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1666097552,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{id:"accept-user-input",title:"Accept user input"},sidebar:"docs",previous:{title:"Examples",permalink:"/docs/next/examples"},next:{title:"Add data to dataset",permalink:"/docs/next/examples/add-data-to-dataset"}},u={},d=[],m={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example accepts and logs user input:"),(0,o.kt)(p.Z,{className:"language-js",mdxType:"CodeBlock"},"import { KeyValueStore } from 'crawlee';\n\nconst input = await KeyValueStore.getInput();\nconsole.log(input);\n"),(0,o.kt)("p",null,"To provide the actor with input, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT.json"),' file inside the "default" key-value store:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{PROJECT_FOLDER}/storage/key_value_stores/default/INPUT.json\n")),(0,o.kt)("p",null,"Anything in this file will be available to the actor when it runs."),(0,o.kt)("p",null,"To learn about other ways to provide an actor with input, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/docs/actor#run",target:"_blank",rel:"noopener"},"Apify Platform Documentation"),"."))}f.isMDXComponent=!0}}]);