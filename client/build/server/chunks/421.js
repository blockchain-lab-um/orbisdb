"use strict";exports.id=421,exports.ids=[421],exports.modules={3421:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{Head:function(){return Head},NextScript:function(){return NextScript},Html:function(){return Html},Main:function(){return Main},default:function(){return Document}});let r=_interop_require_default(n(6689)),i=n(4343),l=n(9678),a=n(6447),o=_interop_require_default(n(16)),s=n(267);function _interop_require_default(e){return e&&e.__esModule?e:{default:e}}let u=new Set;function getDocumentFiles(e,t,n){let r=(0,l.getPageFiles)(e,"/_app"),i=n?[]:(0,l.getPageFiles)(e,t);return{sharedFiles:r,pageFiles:i,allFiles:[...new Set([...r,...i])]}}function getPolyfillScripts(e,t){let{assetPrefix:n,buildManifest:i,assetQueryString:l,disableOptimizedLoading:a,crossOrigin:o}=e;return i.polyfillFiles.filter(e=>e.endsWith(".js")&&!e.endsWith(".module.js")).map(e=>r.default.createElement("script",{key:e,defer:!a,nonce:t.nonce,crossOrigin:t.crossOrigin||o,noModule:!0,src:`${n}/_next/${e}${l}`}))}function AmpStyles({styles:e}){if(!e)return null;let t=Array.isArray(e)?e:[];if(e.props&&Array.isArray(e.props.children)){let hasStyles=e=>{var t,n;return null==e?void 0:null==(n=e.props)?void 0:null==(t=n.dangerouslySetInnerHTML)?void 0:t.__html};e.props.children.forEach(e=>{Array.isArray(e)?e.forEach(e=>hasStyles(e)&&t.push(e)):hasStyles(e)&&t.push(e)})}return r.default.createElement("style",{"amp-custom":"",dangerouslySetInnerHTML:{__html:t.map(e=>e.props.dangerouslySetInnerHTML.__html).join("").replace(/\/\*# sourceMappingURL=.*\*\//g,"").replace(/\/\*@ sourceURL=.*?\*\//g,"")}})}function getDynamicChunks(e,t,n){let{dynamicImports:i,assetPrefix:l,isDevelopment:a,assetQueryString:o,disableOptimizedLoading:s,crossOrigin:u}=e;return i.map(e=>!e.endsWith(".js")||n.allFiles.includes(e)?null:r.default.createElement("script",{async:!a&&s,defer:!s,key:e,src:`${l}/_next/${encodeURI(e)}${o}`,nonce:t.nonce,crossOrigin:t.crossOrigin||u}))}function getScripts(e,t,n){var i;let{assetPrefix:l,buildManifest:a,isDevelopment:o,assetQueryString:s,disableOptimizedLoading:u,crossOrigin:c}=e,p=n.allFiles.filter(e=>e.endsWith(".js")),d=null==(i=a.lowPriorityFiles)?void 0:i.filter(e=>e.endsWith(".js"));return[...p,...d].map(e=>r.default.createElement("script",{key:e,src:`${l}/_next/${encodeURI(e)}${s}`,nonce:t.nonce,async:!o&&u,defer:!u,crossOrigin:t.crossOrigin||c}))}function getPreNextScripts(e,t){let{scriptLoader:n,disableOptimizedLoading:i,crossOrigin:l}=e,a=function(e,t){let{assetPrefix:n,scriptLoader:i,crossOrigin:l,nextScriptWorkers:a}=e;if(!a)return null;try{let{partytownSnippet:e}=require("@builder.io/partytown/integration"),a=Array.isArray(t.children)?t.children:[t.children],o=a.find(e=>{var t,n;return!!e&&!!e.props&&(null==e?void 0:null==(n=e.props)?void 0:null==(t=n.dangerouslySetInnerHTML)?void 0:t.__html.length)&&"data-partytown-config"in e.props});return r.default.createElement(r.default.Fragment,null,!o&&r.default.createElement("script",{"data-partytown-config":"",dangerouslySetInnerHTML:{__html:`
            partytown = {
              lib: "${n}/_next/static/~partytown/"
            };
          `}}),r.default.createElement("script",{"data-partytown":"",dangerouslySetInnerHTML:{__html:e()}}),(i.worker||[]).map((e,n)=>{let{strategy:i,src:a,children:o,dangerouslySetInnerHTML:s,...u}=e,c={};if(a)c.src=a;else if(s&&s.__html)c.dangerouslySetInnerHTML={__html:s.__html};else if(o)c.dangerouslySetInnerHTML={__html:"string"==typeof o?o:Array.isArray(o)?o.join(""):""};else throw Error("Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script");return r.default.createElement("script",{...c,...u,type:"text/partytown",key:a||n,nonce:t.nonce,"data-nscript":"worker",crossOrigin:t.crossOrigin||l})}))}catch(e){return(0,o.default)(e)&&"MODULE_NOT_FOUND"!==e.code&&console.warn(`Warning: ${e.message}`),null}}(e,t),s=(n.beforeInteractive||[]).filter(e=>e.src).map((e,n)=>{let{strategy:a,...o}=e;return r.default.createElement("script",{...o,key:o.src||n,defer:o.defer??!i,nonce:t.nonce,"data-nscript":"beforeInteractive",crossOrigin:t.crossOrigin||l})});return r.default.createElement(r.default.Fragment,null,a,s)}let Head=class Head extends r.default.Component{static #e=this.contextType=s.HtmlContext;getCssLinks(e){let{assetPrefix:t,assetQueryString:n,dynamicImports:i,crossOrigin:l,optimizeCss:a,optimizeFonts:o}=this.context,s=e.allFiles.filter(e=>e.endsWith(".css")),u=new Set(e.sharedFiles),c=new Set([]),p=Array.from(new Set(i.filter(e=>e.endsWith(".css"))));if(p.length){let e=new Set(s);p=p.filter(t=>!(e.has(t)||u.has(t))),c=new Set(p),s.push(...p)}let d=[];return s.forEach(e=>{let i=u.has(e);a||d.push(r.default.createElement("link",{key:`${e}-preload`,nonce:this.props.nonce,rel:"preload",href:`${t}/_next/${encodeURI(e)}${n}`,as:"style",crossOrigin:this.props.crossOrigin||l}));let o=c.has(e);d.push(r.default.createElement("link",{key:e,nonce:this.props.nonce,rel:"stylesheet",href:`${t}/_next/${encodeURI(e)}${n}`,crossOrigin:this.props.crossOrigin||l,"data-n-g":o?void 0:i?"":void 0,"data-n-p":o?void 0:i?void 0:""}))}),o&&(d=this.makeStylesheetInert(d)),0===d.length?null:d}getPreloadDynamicChunks(){let{dynamicImports:e,assetPrefix:t,assetQueryString:n,crossOrigin:i}=this.context;return e.map(e=>e.endsWith(".js")?r.default.createElement("link",{rel:"preload",key:e,href:`${t}/_next/${encodeURI(e)}${n}`,as:"script",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||i}):null).filter(Boolean)}getPreloadMainLinks(e){let{assetPrefix:t,assetQueryString:n,scriptLoader:i,crossOrigin:l}=this.context,a=e.allFiles.filter(e=>e.endsWith(".js"));return[...(i.beforeInteractive||[]).map(e=>r.default.createElement("link",{key:e.src,nonce:this.props.nonce,rel:"preload",href:e.src,as:"script",crossOrigin:this.props.crossOrigin||l})),...a.map(e=>r.default.createElement("link",{key:e,nonce:this.props.nonce,rel:"preload",href:`${t}/_next/${encodeURI(e)}${n}`,as:"script",crossOrigin:this.props.crossOrigin||l}))]}getBeforeInteractiveInlineScripts(){let{scriptLoader:e}=this.context,{nonce:t,crossOrigin:n}=this.props;return(e.beforeInteractive||[]).filter(e=>!e.src&&(e.dangerouslySetInnerHTML||e.children)).map((e,i)=>{let{strategy:l,children:a,dangerouslySetInnerHTML:o,src:s,...u}=e,c="";return o&&o.__html?c=o.__html:a&&(c="string"==typeof a?a:Array.isArray(a)?a.join(""):""),r.default.createElement("script",{...u,dangerouslySetInnerHTML:{__html:c},key:u.id||i,nonce:t,"data-nscript":"beforeInteractive",crossOrigin:n||void 0})})}getDynamicChunks(e){return getDynamicChunks(this.context,this.props,e)}getPreNextScripts(){return getPreNextScripts(this.context,this.props)}getScripts(e){return getScripts(this.context,this.props,e)}getPolyfillScripts(){return getPolyfillScripts(this.context,this.props)}makeStylesheetInert(e){return r.default.Children.map(e,e=>{var t,n;if((null==e?void 0:e.type)==="link"&&(null==e?void 0:null==(t=e.props)?void 0:t.href)&&i.OPTIMIZED_FONT_PROVIDERS.some(({url:t})=>{var n,r;return null==e?void 0:null==(r=e.props)?void 0:null==(n=r.href)?void 0:n.startsWith(t)})){let t={...e.props||{},"data-href":e.props.href,href:void 0};return r.default.cloneElement(e,t)}if(null==e?void 0:null==(n=e.props)?void 0:n.children){let t={...e.props||{},children:this.makeStylesheetInert(e.props.children)};return r.default.cloneElement(e,t)}return e}).filter(Boolean)}render(){let{styles:e,ampPath:t,inAmpMode:i,hybridAmp:l,canonicalBase:a,__NEXT_DATA__:o,dangerousAsPath:s,headTags:u,unstable_runtimeJS:c,unstable_JsPreload:p,disableOptimizedLoading:d,optimizeCss:f,optimizeFonts:m,assetPrefix:_,nextFontManifest:E}=this.context,h=!1===c,g=!1===p||!d;this.context.docComponentsRendered.Head=!0;let{head:S}=this.context,y=[],I=[];S&&(S.forEach(e=>{let t;this.context.strictNextHead&&(t=r.default.createElement("meta",{name:"next-head",content:"1"})),e&&"link"===e.type&&"preload"===e.props.rel&&"style"===e.props.as?(t&&y.push(t),y.push(e)):e&&(t&&("meta"!==e.type||!e.props.charSet)&&I.push(t),I.push(e))}),S=y.concat(I));let T=r.default.Children.toArray(this.props.children).filter(Boolean);m&&!i&&(T=this.makeStylesheetInert(T));let A=!1,P=!1;S=r.default.Children.map(S||[],e=>{if(!e)return e;let{type:t,props:n}=e;if(i){let r="";if("meta"===t&&"viewport"===n.name?r='name="viewport"':"link"===t&&"canonical"===n.rel?P=!0:"script"===t&&(n.src&&-1>n.src.indexOf("ampproject")||n.dangerouslySetInnerHTML&&(!n.type||"text/javascript"===n.type))&&(r="<script",Object.keys(n).forEach(e=>{r+=` ${e}="${n[e]}"`}),r+="/>"),r)return console.warn(`Found conflicting amp tag "${e.type}" with conflicting prop ${r} in ${o.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`),null}else"link"===t&&"amphtml"===n.rel&&(A=!0);return e});let v=getDocumentFiles(this.context.buildManifest,this.context.__NEXT_DATA__.page,i),N=function(e,t,n=""){if(!e)return{preconnect:null,preload:null};let i=e.pages["/_app"],l=e.pages[t],a=[...i??[],...l??[]],o=!!(0===a.length&&(i||l));return{preconnect:o?r.default.createElement("link",{"data-next-font":e.pagesUsingSizeAdjust?"size-adjust":"",rel:"preconnect",href:"/",crossOrigin:"anonymous"}):null,preload:a?a.map(e=>{let t=/\.(woff|woff2|eot|ttf|otf)$/.exec(e)[1];return r.default.createElement("link",{key:e,rel:"preload",href:`${n}/_next/${encodeURI(e)}`,as:"font",type:`font/${t}`,crossOrigin:"anonymous","data-next-font":e.includes("-s")?"size-adjust":""})}):null}}(E,s,_);return r.default.createElement("head",function(e){let{crossOrigin:t,nonce:n,...r}=e;return r}(this.props),this.context.isDevelopment&&r.default.createElement(r.default.Fragment,null,r.default.createElement("style",{"data-next-hide-fouc":!0,"data-ampdevmode":i?"true":void 0,dangerouslySetInnerHTML:{__html:"body{display:none}"}}),r.default.createElement("noscript",{"data-next-hide-fouc":!0,"data-ampdevmode":i?"true":void 0},r.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{display:block}"}}))),S,this.context.strictNextHead?null:r.default.createElement("meta",{name:"next-head-count",content:r.default.Children.count(S||[]).toString()}),T,m&&r.default.createElement("meta",{name:"next-font-preconnect"}),N.preconnect,N.preload,i&&r.default.createElement(r.default.Fragment,null,r.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),!P&&r.default.createElement("link",{rel:"canonical",href:a+n(782).cleanAmpPath(s)}),r.default.createElement("link",{rel:"preload",as:"script",href:"https://cdn.ampproject.org/v0.js"}),r.default.createElement(AmpStyles,{styles:e}),r.default.createElement("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"}}),r.default.createElement("noscript",null,r.default.createElement("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"}})),r.default.createElement("script",{async:!0,src:"https://cdn.ampproject.org/v0.js"})),!i&&r.default.createElement(r.default.Fragment,null,!A&&l&&r.default.createElement("link",{rel:"amphtml",href:a+(t||`${s}${s.includes("?")?"&":"?"}amp=1`)}),this.getBeforeInteractiveInlineScripts(),!f&&this.getCssLinks(v),!f&&r.default.createElement("noscript",{"data-n-css":this.props.nonce??""}),!h&&!g&&this.getPreloadDynamicChunks(),!h&&!g&&this.getPreloadMainLinks(v),!d&&!h&&this.getPolyfillScripts(),!d&&!h&&this.getPreNextScripts(),!d&&!h&&this.getDynamicChunks(v),!d&&!h&&this.getScripts(v),f&&this.getCssLinks(v),f&&r.default.createElement("noscript",{"data-n-css":this.props.nonce??""}),this.context.isDevelopment&&r.default.createElement("noscript",{id:"__next_css__DO_NOT_USE__"}),e||null),r.default.createElement(r.default.Fragment,{},...u||[]))}};let NextScript=class NextScript extends r.default.Component{static #e=this.contextType=s.HtmlContext;getDynamicChunks(e){return getDynamicChunks(this.context,this.props,e)}getPreNextScripts(){return getPreNextScripts(this.context,this.props)}getScripts(e){return getScripts(this.context,this.props,e)}getPolyfillScripts(){return getPolyfillScripts(this.context,this.props)}static getInlineScriptSource(e){let{__NEXT_DATA__:t,largePageDataBytes:r}=e;try{let i=JSON.stringify(t);if(u.has(t.page))return(0,a.htmlEscapeJsonString)(i);let l=Buffer.from(i).byteLength,o=n(2587).Z;return r&&l>r&&(u.add(t.page),console.warn(`Warning: data for page "${t.page}"${t.page===e.dangerousAsPath?"":` (path "${e.dangerousAsPath}")`} is ${o(l)} which exceeds the threshold of ${o(r)}, this amount of data can reduce performance.
See more info here: https://nextjs.org/docs/messages/large-page-data`)),(0,a.htmlEscapeJsonString)(i)}catch(e){if((0,o.default)(e)&&-1!==e.message.indexOf("circular structure"))throw Error(`Circular structure in "getInitialProps" result of page "${t.page}". https://nextjs.org/docs/messages/circular-structure`);throw e}}render(){let{assetPrefix:e,inAmpMode:t,buildManifest:n,unstable_runtimeJS:i,docComponentsRendered:l,assetQueryString:a,disableOptimizedLoading:o,crossOrigin:s}=this.context,u=!1===i;if(l.NextScript=!0,t)return null;let c=getDocumentFiles(this.context.buildManifest,this.context.__NEXT_DATA__.page,t);return r.default.createElement(r.default.Fragment,null,!u&&n.devFiles?n.devFiles.map(t=>r.default.createElement("script",{key:t,src:`${e}/_next/${encodeURI(t)}${a}`,nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||s})):null,u?null:r.default.createElement("script",{id:"__NEXT_DATA__",type:"application/json",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||s,dangerouslySetInnerHTML:{__html:NextScript.getInlineScriptSource(this.context)}}),o&&!u&&this.getPolyfillScripts(),o&&!u&&this.getPreNextScripts(),o&&!u&&this.getDynamicChunks(c),o&&!u&&this.getScripts(c))}};function Html(e){let{inAmpMode:t,docComponentsRendered:n,locale:i,scriptLoader:l,__NEXT_DATA__:a}=(0,s.useHtmlContext)();return n.Html=!0,function(e,t,n){var i,l,a,o;if(!n.children)return;let s=[],u=Array.isArray(n.children)?n.children:[n.children],c=null==(l=u.find(e=>e.type===Head))?void 0:null==(i=l.props)?void 0:i.children,p=null==(o=u.find(e=>"body"===e.type))?void 0:null==(a=o.props)?void 0:a.children,d=[...Array.isArray(c)?c:[c],...Array.isArray(p)?p:[p]];r.default.Children.forEach(d,t=>{var n;if(t&&(null==(n=t.type)?void 0:n.__nextScript)){if("beforeInteractive"===t.props.strategy){e.beforeInteractive=(e.beforeInteractive||[]).concat([{...t.props}]);return}if(["lazyOnload","afterInteractive","worker"].includes(t.props.strategy)){s.push(t.props);return}}}),t.scriptLoader=s}(l,a,e),r.default.createElement("html",{...e,lang:e.lang||i||void 0,amp:t?"":void 0,"data-ampdevmode":void 0})}function Main(){let{docComponentsRendered:e}=(0,s.useHtmlContext)();return e.Main=!0,r.default.createElement("next-js-internal-body-render-target",null)}let Document=class Document extends r.default.Component{static getInitialProps(e){return e.defaultGetInitialProps(e)}render(){return r.default.createElement(Html,null,r.default.createElement(Head,null),r.default.createElement("body",null,r.default.createElement(Main,null),r.default.createElement(NextScript,null)))}};Document[i.NEXT_BUILTIN_DOCUMENT]=function(){return r.default.createElement(Html,null,r.default.createElement(Head,null),r.default.createElement("body",null,r.default.createElement(Main,null),r.default.createElement(NextScript,null)))}},4343:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{MODERN_BROWSERSLIST_TARGET:function(){return i.default},COMPILER_NAMES:function(){return l},INTERNAL_HEADERS:function(){return a},COMPILER_INDEXES:function(){return o},PHASE_EXPORT:function(){return s},PHASE_PRODUCTION_BUILD:function(){return u},PHASE_PRODUCTION_SERVER:function(){return c},PHASE_DEVELOPMENT_SERVER:function(){return p},PHASE_TEST:function(){return d},PHASE_INFO:function(){return f},PAGES_MANIFEST:function(){return m},APP_PATHS_MANIFEST:function(){return _},APP_PATH_ROUTES_MANIFEST:function(){return E},BUILD_MANIFEST:function(){return h},APP_BUILD_MANIFEST:function(){return g},FUNCTIONS_CONFIG_MANIFEST:function(){return S},SUBRESOURCE_INTEGRITY_MANIFEST:function(){return y},NEXT_FONT_MANIFEST:function(){return I},EXPORT_MARKER:function(){return T},EXPORT_DETAIL:function(){return A},PRERENDER_MANIFEST:function(){return P},ROUTES_MANIFEST:function(){return v},IMAGES_MANIFEST:function(){return N},SERVER_FILES_MANIFEST:function(){return O},DEV_CLIENT_PAGES_MANIFEST:function(){return R},MIDDLEWARE_MANIFEST:function(){return x},DEV_MIDDLEWARE_MANIFEST:function(){return M},REACT_LOADABLE_MANIFEST:function(){return L},FONT_MANIFEST:function(){return b},SERVER_DIRECTORY:function(){return C},CONFIG_FILES:function(){return D},BUILD_ID_FILE:function(){return F},BLOCKED_PAGES:function(){return k},CLIENT_PUBLIC_FILES_PATH:function(){return j},CLIENT_STATIC_FILES_PATH:function(){return U},STRING_LITERAL_DROP_BUNDLE:function(){return w},NEXT_BUILTIN_DOCUMENT:function(){return B},BARREL_OPTIMIZATION_PREFIX:function(){return $},CLIENT_REFERENCE_MANIFEST:function(){return H},SERVER_REFERENCE_MANIFEST:function(){return W},MIDDLEWARE_BUILD_MANIFEST:function(){return G},MIDDLEWARE_REACT_LOADABLE_MANIFEST:function(){return z},CLIENT_STATIC_FILES_RUNTIME_MAIN:function(){return X},CLIENT_STATIC_FILES_RUNTIME_MAIN_APP:function(){return V},APP_CLIENT_INTERNALS:function(){return Y},CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH:function(){return q},CLIENT_STATIC_FILES_RUNTIME_AMP:function(){return J},CLIENT_STATIC_FILES_RUNTIME_WEBPACK:function(){return K},CLIENT_STATIC_FILES_RUNTIME_POLYFILLS:function(){return Z},CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL:function(){return Q},EDGE_RUNTIME_WEBPACK:function(){return ee},TEMPORARY_REDIRECT_STATUS:function(){return et},PERMANENT_REDIRECT_STATUS:function(){return en},STATIC_PROPS_ID:function(){return er},SERVER_PROPS_ID:function(){return ei},PAGE_SEGMENT_KEY:function(){return el},GOOGLE_FONT_PROVIDER:function(){return ea},OPTIMIZED_FONT_PROVIDERS:function(){return eo},DEFAULT_SERIF_FONT:function(){return es},DEFAULT_SANS_SERIF_FONT:function(){return eu},STATIC_STATUS_PAGES:function(){return ec},TRACE_OUTPUT_VERSION:function(){return ep},TURBO_TRACE_DEFAULT_MEMORY_LIMIT:function(){return ed},RSC_MODULE_TYPES:function(){return ef},EDGE_UNSUPPORTED_NODE_APIS:function(){return em},SYSTEM_ENTRYPOINTS:function(){return e_}});let r=n(1763),i=r._(n(9577)),l={client:"client",server:"server",edgeServer:"edge-server"},a=["x-invoke-path","x-invoke-status","x-invoke-error","x-invoke-query","x-middleware-invoke"],o={[l.client]:0,[l.server]:1,[l.edgeServer]:2},s="phase-export",u="phase-production-build",c="phase-production-server",p="phase-development-server",d="phase-test",f="phase-info",m="pages-manifest.json",_="app-paths-manifest.json",E="app-path-routes-manifest.json",h="build-manifest.json",g="app-build-manifest.json",S="functions-config-manifest.json",y="subresource-integrity-manifest",I="next-font-manifest",T="export-marker.json",A="export-detail.json",P="prerender-manifest.json",v="routes-manifest.json",N="images-manifest.json",O="required-server-files.json",R="_devPagesManifest.json",x="middleware-manifest.json",M="_devMiddlewareManifest.json",L="react-loadable-manifest.json",b="font-manifest.json",C="server",D=["next.config.js","next.config.mjs"],F="BUILD_ID",k=["/_document","/_app","/_error"],j="public",U="static",w="__NEXT_DROP_CLIENT_FILE__",B="__NEXT_BUILTIN_DOCUMENT__",$="__barrel_optimize__",H="client-reference-manifest",W="server-reference-manifest",G="middleware-build-manifest",z="middleware-react-loadable-manifest",X="main",V=""+X+"-app",Y="app-pages-internals",q="react-refresh",J="amp",K="webpack",Z="polyfills",Q=Symbol(Z),ee="edge-runtime-webpack",et=307,en=308,er="__N_SSG",ei="__N_SSP",el="__PAGE__",ea="https://fonts.googleapis.com/",eo=[{url:ea,preconnect:"https://fonts.gstatic.com"},{url:"https://use.typekit.net",preconnect:"https://use.typekit.net"}],es={name:"Times New Roman",xAvgCharWidth:821,azAvgWidth:854.3953488372093,unitsPerEm:2048},eu={name:"Arial",xAvgCharWidth:904,azAvgWidth:934.5116279069767,unitsPerEm:2048},ec=["/500"],ep=1,ed=6e3,ef={client:"client",server:"server"},em=["clearImmediate","setImmediate","BroadcastChannel","ByteLengthQueuingStrategy","CompressionStream","CountQueuingStrategy","DecompressionStream","DomException","MessageChannel","MessageEvent","MessagePort","ReadableByteStreamController","ReadableStreamBYOBRequest","ReadableStreamDefaultController","TransformStreamDefaultController","WritableStreamDefaultController"],e_=new Set([X,q,J,V]);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:e=>{e.exports=["chrome 64","edge 79","firefox 67","opera 51","safari 12"]},7134:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePagePath",{enumerable:!0,get:function(){return normalizePagePath}});let r=n(9334),i=n(8599),l=n(4453);function normalizePagePath(e){let t=/^\/index(\/|$)/.test(e)&&!(0,i.isDynamicRoute)(e)?"/index"+e:"/"===e?"/index":(0,r.ensureLeadingSlash)(e);{let{posix:e}=n(1017),r=e.normalize(t);if(r!==t)throw new l.NormalizeError("Requested and resolved page mismatch: "+t+" "+r)}return t}},2587:(e,t)=>{Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return prettyBytes}});let n=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],toLocaleString=(e,t)=>{let n=e;return"string"==typeof t?n=e.toLocaleString(t):!0===t&&(n=e.toLocaleString()),n};function prettyBytes(e,t){if(!Number.isFinite(e))throw TypeError(`Expected a finite number, got ${typeof e}: ${e}`);if((t=Object.assign({},t)).signed&&0===e)return" 0 B";let r=e<0,i=r?"-":t.signed?"+":"";if(r&&(e=-e),e<1){let n=toLocaleString(e,t.locale);return i+n+" B"}let l=Math.min(Math.floor(Math.log10(e)/3),n.length-1);e=Number((e/Math.pow(1e3,l)).toPrecision(3));let a=toLocaleString(e,t.locale),o=n[l];return i+a+" "+o}},267:(e,t,n)=>{e.exports=n(9847).vendored.contexts.HtmlContext},9678:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPageFiles",{enumerable:!0,get:function(){return getPageFiles}});let r=n(2335),i=n(7134);function getPageFiles(e,t){let n=(0,r.denormalizePagePath)((0,i.normalizePagePath)(t));return e.pages[n]||(console.warn(`Could not find files for ${n} in .next/build-manifest.json`),[])}},6447:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ESCAPE_REGEX:function(){return r},htmlEscapeJsonString:function(){return htmlEscapeJsonString}});let n={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},r=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(e){return e.replace(r,e=>n[e])}},782:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{isBlockedPage:function(){return isBlockedPage},cleanAmpPath:function(){return cleanAmpPath},debounce:function(){return debounce}});let r=n(4343);function isBlockedPage(e){return r.BLOCKED_PAGES.includes(e)}function cleanAmpPath(e){return e.match(/\?amp=(y|yes|true|1)/)&&(e=e.replace(/\?amp=(y|yes|true|1)&?/,"?")),e.match(/&amp=(y|yes|true|1)/)&&(e=e.replace(/&amp=(y|yes|true|1)/,"")),e=e.replace(/\?$/,"")}function debounce(e,t,n=1/0){let r,i,l;let a=0,o=0;function run(){let s=Date.now(),u=o+t-s;u<=0||a+n>=s?(r=void 0,e.apply(l,i)):r=setTimeout(run,u)}return function(...e){i=e,l=this,o=Date.now(),void 0===r&&(a=o,r=setTimeout(run,t))}}}};