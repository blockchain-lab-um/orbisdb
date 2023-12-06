(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{8279:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contexts/[context_id]",function(){return s(1324)}])},5563:function(e,t,s){"use strict";s.d(t,{Z:function(){return Alert}});var l=s(4246);function Alert(e){let{title:t,className:s="text-base mb-4",color:n="amber"}=e;return(0,l.jsx)("div",{className:"rounded-md border-dashed border px-6 py-2 justify-center flex ".concat("bg-"+n+"-100 border-"+n+"-200 text-"+n+"-800"," ").concat(s),children:(0,l.jsx)("span",{className:"text-center",children:t})})}},2884:function(e,t,s){"use strict";s.d(t,{Z:function(){return InternalNavigation}});var l=s(4246);function InternalNavigation(e){let{items:t=[],nav:s,setNav:n}=e;return(0,l.jsx)("div",{className:"flex flex-row items-center rounded-full bg-white border border-slate-200 px-6 py-1.5 space-x-8",children:t.map(e=>(0,l.jsx)("button",{onClick:()=>e.active&&n(e.label),disabled:!e.active,className:"text-sm focus:outline-none flex flex-row items-center space-x-1\n             ".concat(e.label===s?"text-[#4483FD] font-medium":"text-[#666666] cursor-pointer hover:underline","\n             ").concat(e.active?"":"text-[#C2C2C2] cursor-not-allowed"),children:e.title?e.title:e.label},e.label))})}s(7378)},1324:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return ContextDetails}});var l=s(4246),n=s(7378),a=s(9894),r=s.n(a),x=s(6640),i=s(3279),c=s(6677),d=s(9239),o=s(5563),m=s(5620),u=s(2478),f=s(7737),h=s(2884),p=s(814);function ContextDetails(){let{settings:e,setSettings:t}=(0,n.useContext)(x.k),[s,a]=(0,n.useState)(),[p,j]=(0,n.useState)([]),[b,g]=(0,n.useState)(),[N,v]=(0,n.useState)(!1),[w,_]=(0,n.useState)("Sub-contexts"),y=(0,c.useRouter)(),{context_id:C}=y.query;return((0,n.useEffect)(()=>{async function loadContextDetails(){a((0,i.SL)(e.contexts,C))}C&&(loadContextDetails(),j((0,i.d2)(C,e.plugins)),g((0,i.oK)(C,e.contexts?e.contexts:null)))},[C,e]),s)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex flex-row space-x-8",children:(0,l.jsxs)("div",{className:"flex px-16 py-12 md:w-2/3 flex-col",children:[b&&(0,l.jsx)(Breadcrumbs,{context_id:C}),(0,l.jsxs)("div",{className:"flex flex-row items-center",children:[b&&(0,l.jsx)(r(),{href:"/contexts/"+b,className:"rounded-full bg-white w-10 h-10 flex justify-center items-center cursor-pointer border border-slate-200 hover:border-slate-300 mr-3",children:(0,l.jsx)("svg",{width:"7",height:"12",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.79062 0.230169C6.07772 0.528748 6.06841 1.00353 5.76983 1.29063L1.83208 5L5.76983 8.70938C6.06841 8.99647 6.07772 9.47125 5.79062 9.76983C5.50353 10.0684 5.02875 10.0777 4.73017 9.79063L0.230167 5.54063C0.0831082 5.39922 -1.18115e-06 5.20401 -1.17223e-06 5C-1.16331e-06 4.79599 0.0831082 4.60078 0.230167 4.45938L4.73017 0.209376C5.02875 -0.077719 5.50353 -0.0684095 5.79062 0.230169Z",fill:"#0F172A"})})}),s.logo&&(0,l.jsx)("img",{src:s.logo,className:"mr-3 h-20 w-20 rounded-md"}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold text-slate-900",children:s.name}),(0,l.jsx)("p",{className:"font-mono text-[12px] bg-white rounded-full px-3 py-0.5 border border-slate-200 mt-1",children:C})]})]}),(0,l.jsx)("div",{className:"flex flex-row mt-3",children:(0,l.jsx)(h.Z,{items:[{label:"Sub-contexts",title:(0,l.jsxs)("span",{className:"flex flex-row items-center space-x-1",children:[(0,l.jsx)("span",{className:"bg-slate-100 py-0.5 text-xs px-1.5 rounded-md font-medium text-slate-900",children:(0,d.Co)(C)}),(0,l.jsx)("span",{children:"Sub-context(s)"})]}),active:!0},{label:"Plugins",title:(0,l.jsxs)("span",{className:"flex flex-row items-center space-x-1",children:[(0,l.jsx)("span",{className:"bg-slate-100 py-0.5 text-xs px-1.5 rounded-md font-medium text-slate-900",children:(0,d.sB)(C)}),(0,l.jsx)("span",{children:"Plugin(s)"})]}),active:!0},{label:"Settings",active:!0}],nav:w,setNav:_})}),"Sub-contexts"==w&&(0,l.jsxs)("div",{className:"w-full bg-white border border-slate-200 rounded-md px-6 py-6 mt-5 flex flex-col",children:[(0,l.jsx)("h2",{className:"text-lg font-bold text-slate-900",children:"Sub-contexts"}),(0,l.jsx)("p",{className:"text-base text-slate-600",children:"Create sub-contexts to have a more granular way to manage data in your application."}),(0,l.jsx)("div",{className:"flex flex-col mt-3 space-y-2",children:s.contexts&&s.contexts.length>0?(0,l.jsx)(Contexts,{contexts:s.contexts}):(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)(o.Z,{title:"This context doesn't have any sub-contexts."})})}),(0,l.jsx)("div",{className:"flex flex-col w-full items-center mt-4",children:(0,l.jsx)(f.Z,{title:"+ Add sub-context",onClick:()=>v(!0)})})]}),"Plugins"==w&&(0,l.jsxs)("div",{className:"w-full bg-white border border-slate-200 rounded-md px-6 py-6 mt-5 flex flex-col",children:[(0,l.jsx)("h2",{className:"text-lg font-bold text-slate-900",children:"Plugins used"}),(0,l.jsx)("p",{className:"text-base text-slate-600 mb-1",children:"Manage the plugins being used in this context."}),b&&(0,l.jsx)(l.Fragment,{children:p.parent.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"font-medium text-base mt-2",children:"From parent:"}),(0,l.jsx)("div",{className:"flex flex-col mt-2 space-y-1",children:(0,l.jsx)(PluginsInstalled,{plugins:p.parent})})]})}),(0,l.jsx)("span",{className:"font-medium text-base mt-2",children:"Direct:"}),(0,l.jsx)("div",{className:"flex flex-col space-y-1",children:p.direct.length>0?(0,l.jsx)(PluginsInstalled,{plugins:p.direct}):(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)(o.Z,{title:"There aren't any plugins installed on this context."})})}),(0,l.jsx)("div",{className:"flex w-full justify-center mt-2",children:(0,l.jsx)(r(),{href:"/plugins",children:(0,l.jsx)(f.Z,{title:"+ Add plugin"})})})]}),"Settings"==w&&(0,l.jsxs)("div",{className:"w-full bg-white border border-slate-200 rounded-md px-6 py-6 mt-5 flex flex-col",children:[(0,l.jsx)("h2",{className:"text-lg font-bold text-slate-900",children:"Settings"}),(0,l.jsx)("p",{className:"text-base text-slate-600 mb-1",children:"Update your context settings here."}),(0,l.jsx)(m.Z,{context:s,setContext:a})]})]})}),N&&(0,l.jsx)(u.Z,{parentContext:C,hide:()=>v(!1)})]}):(0,l.jsx)("div",{className:"flex flex-row space-x-8",children:(0,l.jsx)("div",{className:"px-16 py-12 md:w-2/3",children:"Loading..."})})}let Contexts=e=>{let{contexts:t}=e;return null==t?void 0:t.map((e,t)=>(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex flex-row space-x-1",children:[(0,l.jsxs)(r(),{className:"text-base text-[#4483FD] hover:underline",href:"/contexts/"+e.stream_id,children:["\xb7  ",e.name]},t),(0,l.jsx)(d.GH,{context_id:e.stream_id})]}),e.contexts&&e.contexts.length>0&&(0,l.jsx)("div",{className:"flex flex-col pl-4 mt-2",children:(0,l.jsx)(Contexts,{contexts:e.contexts})})]},t))},PluginsInstalled=e=>{let{plugins:t}=e;return null==t?void 0:t.map((e,t)=>(0,l.jsxs)(r(),{className:"text-base text-[#4483FD] mb-1 hover:underline",href:"/plugins/"+e.plugin_id,children:["\xb7  ",e.plugin_id]},t))},Breadcrumbs=e=>{let{context_id:t}=e,{settings:s,setSettings:a}=(0,n.useContext)(x.k),i=function findBreadcrumbPath(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(let l of e){if(l.stream_id===t)return[...s,{name:l.name,stream_id:l.stream_id}];if(l.contexts&&l.contexts.length>0){let e=findBreadcrumbPath(l.contexts,t,[...s,{name:l.name,stream_id:l.stream_id}]);if(e)return e}}return null}(s.contexts,t);return i?(0,l.jsx)("div",{className:"flex flex-row items-center space-x-2 text-base mb-3",children:i.map((e,s)=>(0,l.jsxs)(n.Fragment,{children:[s>0&&(0,l.jsx)(p.yh,{}),e.stream_id==t?(0,l.jsx)("span",{className:"text-slate-500",children:e.name}):(0,l.jsx)(r(),{href:"/contexts/"+e.stream_id,className:"font-medium text-slate-900 hover:underline",children:e.name})]},e.stream_id))}):null}}},function(e){e.O(0,[478,774,888,179],function(){return e(e.s=8279)}),_N_E=e.O()}]);