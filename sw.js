if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const d=e=>n(e,r),c={module:{uri:r},exports:o,require:d};s[r]=Promise.all(i.map((e=>c[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-7aceb332"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Bx5dv-K3.css",revision:null},{url:"assets/index-C_18Jtqy.js",revision:null},{url:"index.html",revision:"27dbbc7de4d37ab6aa08ab8f657db523"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"7c66db20691d0587b36c1eb272e7d062"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"document"===e.destination),new e.NetworkFirst,"GET"),e.registerRoute((({request:e})=>"style"===e.destination||"script"===e.destination||"worker"===e.destination),new e.StaleWhileRevalidate,"GET"),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,maxAgeSeconds:2592e3})]}),"GET")}));
