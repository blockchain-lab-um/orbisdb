(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{7523:function(t,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data",function(){return l(7052)}])},5563:function(t,s,l){"use strict";l.d(s,{Z:function(){return Alert}});var n=l(4246);function Alert(t){let{title:s,className:l="text-base mb-4",color:a="amber"}=t;return(0,n.jsx)("div",{className:"rounded-md border-dashed border px-6 py-2 justify-center flex ".concat("bg-"+a+"-100 border-"+a+"-200 text-"+a+"-800"," ").concat(l),children:(0,n.jsx)("span",{className:"text-center",children:s})})}},9239:function(t,s,l){"use strict";l.d(s,{Co:function(){return countSubContexts},GH:function(){return PluginsCountTag},ZP:function(){return ContextDetails},sB:function(){return countPluginsByContext}});var n=l(4246),a=l(9894),r=l.n(a),o=l(7378),i=l(6640),c=l(3279);function ContextDetails(t){let{context:s}=t;return(0,n.jsxs)("div",{className:"flex flex-row bg-white px-4 py-3 border border-slate-200 rounded-md items-center",children:[s.logo&&(0,n.jsx)("img",{src:s.logo,alt:s.name,className:"h-14 w-14 flex-shrink-0 mr-3 rounded-md"}),(0,n.jsxs)("div",{className:"flex flex-col space-y-1",children:[(0,n.jsx)(r(),{className:"text-[#4483FD] font-medium text-base hover:underline",href:"/contexts/"+s.stream_id,children:s.name}),(0,n.jsx)(SubContextsCountTag,{context_id:s.stream_id})]})]})}let SubContextsCountTag=t=>{let{context_id:s}=t;return(0,n.jsxs)("div",{className:"bg-slate-100 rounded-full px-3 py-1 text-xs font-medium text-slate-800 mr-1",children:[countSubContexts(s)," sub-context(s)"]})},PluginsCountTag=t=>{let{context_id:s}=t;return(0,n.jsxs)("div",{className:"bg-slate-100 rounded-full px-3 py-1 text-xs font-medium text-slate-800",children:[countPluginsByContext(s)," plugin(s)"]})},countPluginsByContext=t=>{let{settings:s}=(0,o.useContext)(i.k),l=(0,c.d2)(t,s.plugins);return console.log("results:",l),l.direct.length+l.parent.length},countSubContexts=(t,s)=>{let l;let{settings:n}=(0,o.useContext)(i.k);l=s||n.contexts;let findContext=(t,s)=>{for(let l of s){if(l.stream_id===t)return l;if(l.contexts){let s=findContext(t,l.contexts);if(s)return s}}return null},a=findContext(t,l);if(!a||!a.contexts||0===a.contexts.length)return 0;let r=a.contexts.length;for(let t of a.contexts)r+=countSubContexts(t.stream_id,a.contexts);return r}},5620:function(t,s,l){"use strict";l.d(s,{Z:function(){return ContextSettings}});var n=l(4246),a=l(7378),r=l(7737),o=l(6640),i=l(3279);function ContextSettings(t){let{context:s,setContext:l,callback:c,parentContext:x}=t,{orbis:d,settings:u,setSettings:m}=(0,a.useContext)(o.k),[f,p]=(0,a.useState)(i.Q_.ACTIVE),[h,b]=(0,a.useState)((null==s?void 0:s.name)?s.name:""),[j,g]=(0,a.useState)((null==s?void 0:s.logo)?s.logo:null),[y,v]=(0,a.useState)((null==s?void 0:s.logo)?s.logo:null),[w,N]=(0,a.useState)((null==s?void 0:s.description)?s.description:""),C=(0,a.useRef)(null);async function selectLogo(){C.current.click()}let uploadToServer=async t=>{let n;p(i.Q_.LOADING);let a={...s};if(console.log("Previous context:",a),a.name=h,a.description=w||null,console.log("New context:",a),x&&(a.context=x),s?n=await d.updateContext(s.stream_id,a):(n=await d.createContext(a),a.stream_id=n.doc),console.log("res:",n),200==n.status){let t=new FormData;t.append("file",y),t.append("context",JSON.stringify(a)),console.log("body:",t);let s=await fetch("/api/settings/add-context",{method:"POST",body:t}),n=await s.json();console.log("data:",n),200==n.status?(l&&l(n.context),m(n.settings),p(i.Q_.SUCCESS),await (0,i._v)(500),p(i.Q_.ACTIVE),c&&c()):p(i.Q_.ERROR)}else p(i.Q_.ERROR),alert("There was an error updating the Ceramic stream.")};return(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("input",{type:"text",placeholder:"Context name",className:"bg-white w-full mt-2 px-2 py-1 rounded-md border border-slate-300 text-base text-slate-900 mb-1.5",onChange:t=>b(t.target.value),value:h}),(0,n.jsx)("textarea",{type:"text",placeholder:"Context description",rows:"2",className:"bg-white w-full px-2 py-1 rounded-md border border-slate-300 text-base text-slate-900 mb-2",onChange:t=>N(t.target.value),value:w}),(0,n.jsxs)("div",{className:"flex flex-row items-center space-x-2 mb-2",children:[(0,n.jsx)("p",{className:"font-medium text-slate-900 text-base",children:"Logo:"}),j&&(0,n.jsx)("img",{src:j,className:"h-8 w-8 ml-2 rounded-md"}),(0,n.jsx)("input",{ref:C,type:"file",className:"hidden",accept:"image/png, image/jpeg, image/gif",onChange:t=>{if(t.target.files&&t.target.files[0]){let s=t.target.files[0];v(s),g(URL.createObjectURL(s))}}}),(0,n.jsx)(r.Z,{type:"secondary",onClick:()=>selectLogo(),title:"Upload logo"})]}),(0,n.jsx)("div",{className:"flex w-full justify-center mt-2",children:(0,n.jsx)(r.Z,{title:"Save",status:f,onClick:()=>uploadToServer()})})]})}},662:function(t,s,l){"use strict";l.d(s,{Z:function(){return Modal}});var n=l(4246),a=l(7378);function Modal(t){var s;let{hide:l,children:r,title:o,description:i,style:c,className:x}=t,d=(0,a.useRef)(null);return s=()=>l(),(0,a.useEffect)(()=>{let listener=t=>{!d.current||d.current.contains(t.target)||s(t)};return document.addEventListener("mousedown",listener),document.addEventListener("touchstart",listener),()=>{document.removeEventListener("mousedown",listener),document.removeEventListener("touchstart",listener)}},[d,s]),(0,n.jsxs)("div",{className:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",style:c,children:[(0,n.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity blur-md backdrop-blur-sm cursor-pointer"}),(0,n.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:(0,n.jsx)("div",{className:"flex min-h-full items-start justify-center p-6 text-center sm:p-0 ",children:(0,n.jsxs)("div",{className:"relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-96 sm:p-6 "+x,ref:d,children:[o&&(0,n.jsx)("h2",{className:"text-center font-medium mb-1 w-full",children:o}),i&&(0,n.jsx)("p",{className:"text-slate-500 text-base w-full text-center mb-1",children:i}),r]})})})]})}},8709:function(t,s,l){"use strict";l.d(s,{Z:function(){return StepsProgress}});var n=l(4246);function StepsProgress(t){let{steps:s=[],currentStep:l=1}=t;return(0,n.jsx)("ol",{className:"relative flex items-center w-full text-sm font-medium text-center mt-4 mb-3 justify-center",children:s.map((t,a)=>(0,n.jsxs)("li",{className:"flex items-center justify-center ".concat(a<s.length-1?"mr-2":""),children:[(0,n.jsxs)("span",{className:"flex justify-end flex-col items-center",children:[l==a+1&&(0,n.jsx)("span",{className:"text-sm text-[#4483FD] absolute",style:{top:-17},children:t}),(0,n.jsx)("span",{className:"rounded-full h-3 w-3 mt-1 ".concat(l>=a+1?"bg-[#4483FD]":"bg-slate-200")})]}),a<s.length-1&&(0,n.jsx)("span",{className:"h-1 border-b ml-2 w-16 ".concat(l>a+1?"border-[#4483FD]":"border-slate-200")})]},a))})}},7052:function(t,s,l){"use strict";l.r(s),l.d(s,{default:function(){return Data}});var n=l(4246),a=l(7378);l(9894);var r=l(6640),o=l(814),i=l(9239),c=l(662),x=l(7737),d=l(5620),u=l(8709),m=l(3279);function AddViewModal(t){let{hide:s,parentContext:l}=t,[r,o]=(0,a.useState)(1);return(0,n.jsx)(c.Z,{hide:s,className:"w-full h-full m-6",children:(0,n.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,n.jsx)("h2",{className:"text-center font-medium mb-1",children:"Create a new view"}),(0,n.jsx)("p",{className:"text-center text-slate-500 text-base mb-2",children:"Create a new view in order to combine multiple tables together or filter your data."}),(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)(u.Z,{steps:["Type","Details","Save in settings"],currentStep:r})}),(0,n.jsx)(AddContextSteps,{step:r,setStep:o,parentContext:l,hide:s})]})})}let AddContextSteps=t=>{let{step:s,setStep:l,hide:o,parentContext:c}=t,{orbis:u,setSettings:f}=(0,a.useContext)(r.k),[p,h]=(0,a.useState)(null),[b,j]=(0,a.useState)(""),[g,y]=(0,a.useState)(""),[v,w]=(0,a.useState)(""),[N,C]=(0,a.useState)(m.Q_.ACTIVE),[S,E]=(0,a.useState)(m.Q_.ACTIVE),[T,_]=(0,a.useState)();async function loadContextDetails(){C(m.Q_.LOADING);try{let t=await u.ceramic.loadStream(b);if(console.log("stream.state:",t.state),t){let s={name:t.state.content.name,description:t.state.content.description,stream_id:b};_(s),C(m.Q_.SUCCESS),await (0,m._v)(500),l(3),C(m.Q_.ACTIVE)}else alert("Error loading context details."),console.log("Error loading context details and adding it to the settings file:",e),C(m.Q_.ERROR),await (0,m._v)(500),C(m.Q_.ACTIVE)}catch(t){alert("Couldn't load context details."),console.log("Error adding new context to the settings file:",t),C(m.Q_.ERROR),await (0,m._v)(500),C(m.Q_.ACTIVE)}}switch(s){case 1:return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center"});case 2:if("existing"==p)return(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("input",{type:"text",placeholder:"Context ID",className:"bg-white w-full mt-2 px-2 py-1 rounded-md border border-slate-300 text-base text-slate-900 mb-2",onChange:t=>j(t.target.value),value:b}),(0,n.jsx)(x.Z,{type:"primary",onClick:()=>(function(){if(2===s)switch(p){case"existing":if(""==b||!b){alert("Context ID can't be empty.");return}loadContextDetails();break;case"new":createNewContext()}})(),status:N,title:"Next"})]});if("new"==p)return(0,n.jsx)(d.Z,{callback:o,parentContext:c});case 3:return(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("p",{className:"text-base text-slate-900 mb-3 text-center",children:"We are now going to save this new context in your settings."}),(0,n.jsx)("div",{className:"w-full mb-3",children:(0,n.jsx)(i.ZP,{context:T})}),(0,n.jsx)(x.Z,{type:"primary",onClick:()=>saveInSettings(),status:N,title:"Save"})]})}};var f=l(5563),p=l(2329);function Data(){let[t,s]=(0,a.useState)(!1),[l,r]=(0,a.useState)({id:"kjzl6hvfrbw6c60ji9txuq3da0qic30tcioy25xah9g449zf40u3d0jmi8of0r7"}),[i,c]=(0,a.useState)([]),[x,d]=(0,a.useState)(1),[u,m]=(0,a.useState)(!1),[f,p]=(0,a.useState)(),[h,b]=(0,a.useState)(),[j,g]=(0,a.useState)(!1),[y,v]=(0,a.useState)([]),[w,N]=(0,a.useState)([]),[C,S]=(0,a.useState)("");async function loadSchema(){g(!0);let t="SELECT\n      t.table_name,\n      'TABLE' as type,\n      NULL as view_definition\n    FROM\n      information_schema.tables t\n    WHERE\n      t.table_type = 'BASE TABLE'\n      AND t.table_schema = 'public'\n\n    UNION ALL\n\n    SELECT\n      v.table_name,\n      'VIEW' as type,\n      v.view_definition\n    FROM\n      information_schema.views v\n    WHERE\n      v.table_schema = 'public';";console.log("Running query:",t);try{let s=await fetch("/api/db/query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})});if(s=await s.json(),200==s.status){let t=s.data.filter(t=>"TABLE"===t.type).map(t=>({id:t.table_name})),l=s.data.filter(t=>"VIEW"===t.type).map(t=>({id:t.table_name,...t}));g(!1),v(t),N(l)}else g(!1),v([]),N([])}catch(t){}}async function loadData(){m(!0);try{let t=await fetch("/api/db/query-all/"+l.id+"/"+x);t=await t.json(),console.log("data:",t),200==t.status?(m(!1),c(t.data),p(t.totalCount),b(t.title)):resetResults(null)}catch(t){resetResults(t)}}function resetResults(t){console.log("Error retrieving data:",t),m(!1),c([]),p(0),b(null)}function selectTable(t){d(1),r(t)}return(0,a.useEffect)(()=>{loadSchema()},[]),(0,a.useEffect)(()=>{l&&loadData()},[l,x]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-row w-full flex-1 overflow-hidden",children:[(0,n.jsxs)("div",{className:"w-[250px] bg-slate-50 h-full px-4 overflow-y-scroll border-r border-slate-299",children:[(0,n.jsx)("p",{className:"font-medium text-xxs flex flex-row items-center space-x-1 mt-4 mb-2 text-slate-600",children:"TABLES"}),(0,n.jsx)("div",{className:"flex flex-col space-y-2",children:j?(0,n.jsxs)("div",{className:"px-3 py-2 text-slate-500 flex flex-row text-slate-600 space-x-2 font-mono text-[12px]",children:[(0,n.jsx)(o.a$,{}),(0,n.jsx)("span",{children:"Loading tables"})]}):(0,n.jsx)(TablesListNav,{selectedTable:l,items:y,select:selectTable,type:"tables"})}),(0,n.jsx)("div",{className:"font-medium text-xxs flex flex-row items-center space-x-1 mt-8 mb-2 text-slate-600",children:(0,n.jsx)("span",{className:"flex flex-1",children:"VIEWS"})}),(0,n.jsx)("div",{className:"flex flex-col space-y-2",children:j?(0,n.jsxs)("div",{className:"px-3 py-2 text-slate-500 flex flex-row text-slate-600 space-x-2 font-mono text-[12px]",children:[(0,n.jsx)(o.a$,{}),(0,n.jsx)("span",{children:"Loading views"})]}):(0,n.jsx)(TablesListNav,{selectedTable:l,items:w,select:selectTable,type:"views"})}),(0,n.jsx)("p",{className:"font-medium text-xxs flex flex-row items-center space-x-1 mt-8 mb-1text-slate-600",children:"SQL EDITOR"}),(0,n.jsx)("p",{className:"text-xxs flex flex-row items-center space-x-1 mb-3 text-slate-500",children:"Perform custom queries or create views for your tables."}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("div",{className:"flex bg-[#4483FD] text-xxs text-white px-3 py-0.5 opacity-90 hover:opacity-100 cursor-pointer items-center rounded-full space-x-1 font-mono",onClick:()=>r({id:"sql_editor"}),children:(0,n.jsx)("span",{children:"Open SQL Editor"})})})]}),(0,n.jsx)("div",{className:"flex flex-1 flex-col bg-white h-full overflow-y-scroll",children:(0,n.jsx)(Content,{selectedTable:l,refresh:loadData,title:h,countResults:i?i.length:0,countTotalResults:f,page:x,setPage:d,loading:u,data:i,sqlValue:C,setSqlValue:S,viewDefinition:function(t,s){console.log("Enter viewDefinition with query: ",s),r({id:"sql_editor"});let l="CREATE OR REPLACE VIEW ".concat(t," AS\n").concat(s);S(l)}})})]}),t&&(0,n.jsx)(AddViewModal,{hide:()=>s(!1)})]})}l(1035),l(1605),l(8125);let Content=t=>{var s;return(null===(s=t.selectedTable)||void 0===s?void 0:s.id)==="sql_editor"?(0,n.jsx)(SqlEditor,{...t}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(TableCTAs,{...t}),(0,n.jsx)(TableData,{...t})]})},SqlEditorCTAs=t=>{let{title:s,runQuery:l,loading:a}=t;return(0,n.jsxs)("div",{className:"w-full text-[12px] table-data -mt-px -ml-px font-mono px-2 p-2 justify-start flex flex-row space-x-2 items-center border-b border-slate-200",children:[(0,n.jsx)("div",{className:"text-[14px] ml-2 font-bold mr-2",children:"SQL Editor"}),(0,n.jsx)("div",{className:"flex flex-1 justify-end space-x-1 items-center",children:(0,n.jsxs)("div",{className:"flex flex-row space-x-2 mr-5",children:[(0,n.jsx)("button",{className:"bg-slate-100 rounded-md hover:bg-slate-200 px-3 py-0.5 space-x-1 flex flex-row items-center",children:"Create with AI"}),a?(0,n.jsxs)("button",{className:"bg-[#4483FD] rounded-md text-white px-3 py-0.5 space-x-2 flex flex-row items-center opacity-60",onClick:()=>l(),children:[(0,n.jsx)(o.a$,{})," ",(0,n.jsx)("span",{children:"Running"})]}):(0,n.jsxs)("button",{className:"bg-[#4483FD] rounded-md opacity-90 hover:opacity-100 text-white px-3 py-0.5 space-x-2 flex flex-row items-center",onClick:()=>l(),children:[(0,n.jsx)(o.o1,{})," ",(0,n.jsx)("span",{children:"Run query"})]})]})})]})},TableCTAs=t=>{let{refresh:s,loading:l,page:a,setPage:r,countResults:i,countTotalResults:c,title:x,selectedTable:d,viewDefinition:u}=t;return(0,n.jsx)("div",{className:"w-full text-[12px] table-data -mt-px -ml-px font-mono px-2 p-2 justify-start flex flex-row space-x-2 items-center",children:l?(0,n.jsxs)("button",{className:"px-3 py-0.5 space-x-1 border border-transparent flex flex-row items-center w-full text-center justify-center",children:[(0,n.jsx)(o.a$,{})," ",(0,n.jsx)("span",{children:"Loading"})]}):(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)("div",{className:"text-[14px] ml-2 font-bold mr-2",children:d.id}),(0,n.jsxs)("div",{className:"flex flex-1 justify-end space-x-1 items-center",children:[(0,n.jsxs)("div",{className:"flex flex-row space-x-1 mr-5",children:[d&&d.view_definition&&(0,n.jsxs)("button",{className:"bg-slate-100 rounded-md hover:bg-slate-200 px-3 py-0.5 space-x-1 flex flex-row items-center",onClick:()=>u(d.id,d.view_definition),children:[(0,n.jsx)(o.tE,{})," ",(0,n.jsx)("span",{children:"View definition"})]}),(0,n.jsxs)("button",{className:"bg-slate-100 rounded-md hover:bg-slate-200 px-3 py-0.5 space-x-1 flex flex-row items-center",onClick:s,children:[(0,n.jsx)(o.Du,{})," ",(0,n.jsx)("span",{children:"Refresh"})]}),(0,n.jsxs)("button",{className:"bg-slate-100 rounded-md hover:bg-slate-200 px-3 py-0.5 space-x-1 flex flex-row items-center",onClick:function(){alert("Filters are coming soon.")},children:[(0,n.jsx)(o.k1,{})," ",(0,n.jsx)("span",{children:"Filter"})]})]}),(0,n.jsxs)("div",{className:"flex flex-row space-x-1 items-center",children:[(0,n.jsx)("div",{className:"mr-1",children:"Page"}),(0,n.jsxs)("div",{className:"bg-slate-100 rounded-md px-3 py-0.5 space-x-1 flex flex-row items-center select-none ".concat(1==a?"opacity-50 cursor-not-allowed":"hover:bg-slate-200 cursor-pointer"),onClick:function(){a>1&&r(a-1)},children:[(0,n.jsx)(o.Xd,{})," ",(0,n.jsx)("span",{children:"Previous"})]}),(0,n.jsx)("div",{className:"bg-white border border-slate-200 rounded-md px-3 py-0.5 space-x-1 flex flex-row items-center",children:a}),(0,n.jsxs)("button",{className:"bg-slate-100 rounded-md hover:bg-slate-200 px-3 py-0.5 space-x-1 flex flex-row items-center ".concat(100!=i?"opacity-50 cursor-not-allowed":"hover:bg-slate-200 cursor-pointer"),onClick:function(){100==i&&r(a+1)},children:[(0,n.jsx)("span",{children:"Next"}),(0,n.jsx)(o.ol,{})]}),(0,n.jsxs)("span",{className:"ml-2",children:[c," records"]})]})]})]})})},SqlEditor=t=>{let[s,l]=(0,a.useState)(!1),[r,i]=(0,a.useState)();async function runQuery(){l(!0),console.log("Running query:",t.sqlValue);try{let s=await fetch("/api/db/query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t.sqlValue})});s=await s.json(),console.log("data from custom query:",s),200==s.status?(l(!1),i(s.data)):(l(!1),i([]))}catch(t){l(!1),i([])}}return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(SqlEditorCTAs,{title:t.title,runQuery:runQuery,loading:s}),(0,n.jsxs)("div",{className:"flex flex-col w-full h-full font-mono text-[12px]",children:[(0,n.jsx)("div",{className:"flex flex-1 w-full overflow-y-scroll sql_editor",children:(0,n.jsx)(p.ZP,{id:"editor","aria-label":"editor",mode:"mysql",theme:"sqlserver",name:"editor",width:"100%",fontSize:13,minLines:25,maxLines:100,showPrintMargin:!1,showGutter:!0,placeholder:"Write your query here...",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0},value:t.sqlValue,onChange:s=>t.setSqlValue(s),showLineNumbers:!0})}),(0,n.jsx)("div",{className:"flex flex-1 w-full table-data -ml-px font-mono overflow-y-scroll border-t-4 border-slate-200",children:s?(0,n.jsxs)("div",{className:"px-3 py-2 text-slate-500 flex flex-row text-slate-600 space-x-2",children:[(0,n.jsx)(o.a$,{}),(0,n.jsx)("span",{children:"Loading results"})]}):(0,n.jsx)(n.Fragment,{children:r?(0,n.jsx)(TableData,{data:r,showSuccessIfEmpty:!0}):(0,n.jsx)("div",{className:"px-3 py-2 text-slate-500",children:"Results will be visible here..."})})})]})]})},TableData=t=>{let{data:s,showSuccessIfEmpty:l}=t,a=0===s.length?[]:Object.keys(s[0]),copyToClipboard=async t=>{try{await navigator.clipboard.writeText(t),console.log("Text copied to clipboard")}catch(t){console.error("Failed to copy: ",t)}},isObjectOrArray=t=>"object"==typeof t&&null!==t;return s&&0==s.length?l?(0,n.jsx)("div",{className:"pt-4 w-full justify-center items-start flex border-t border-slate-200",children:(0,n.jsx)(f.Z,{color:"green",title:"The query was successful but returned no results.",className:"font-mono text-[12px]"})}):(0,n.jsx)("div",{className:"pt-4 w-full justify-center items-start flex border-t border-slate-200",children:(0,n.jsx)(f.Z,{title:"There isn't any data in this table.",className:"font-mono text-[12px]"})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("table",{className:"w-full text-[12px] table-data -mt-px -ml-px font-mono",children:[(0,n.jsx)("thead",{className:"bg-slate-100",children:(0,n.jsx)("tr",{className:"font-medium",children:a.map((t,s)=>(0,n.jsx)("th",{className:"cursor-pointer hover:bg-slate-200",children:(0,n.jsxs)("span",{className:"flex items-center justify-center space-x-1",children:[(0,n.jsx)("span",{className:"flex-1",children:t})," ",(0,n.jsx)(o.pO,{className:"text-slate-500"})]})},s))})}),(0,n.jsx)("tbody",{children:s.map((t,s)=>(0,n.jsx)("tr",{children:a.map((s,l)=>{let a=t[s],r=isObjectOrArray(a)?JSON.stringify(a):a;return(0,n.jsx)("td",{className:"hover:bg-slate-50 cursor-pointer",onClick:()=>copyToClipboard(r),children:r},l)})},s))})]})})},TablesListNav=t=>{let{selectedTable:s,select:l,items:a,type:r}=t,Icon=()=>{switch(r){case"tables":return(0,n.jsx)(o.$e,{});case"views":return(0,n.jsx)(o.ON,{})}};return a&&0!=a.length?a.map((t,a)=>(0,n.jsxs)("div",{className:"text-[12px] flex flex-row items-center space-x-1 hover:underline cursor-pointer font-mono ".concat((null==s?void 0:s.id)==t.id?"text-[#4483FD] font-medium":"text-slate-900"," "),onClick:()=>l(t),children:[(0,n.jsx)(Icon,{})," ",(0,n.jsx)("span",{className:"truncate flex-1",children:t.name?t.name:t.id})]},a)):(0,n.jsx)(f.Z,{title:"There aren't any "+r+" in your database.",className:"font-mono text-[12px]"})}},3279:function(t,s,l){"use strict";l.d(s,{Q_:function(){return n},SL:function(){return function findContextById(t,s){if(t&&Array.isArray(t))for(let l of t){if(l.stream_id===s)return l;if(l.contexts&&Array.isArray(l.contexts)){let t=findContextById(l.contexts,s);if(t)return t}}return null}},_v:function(){return sleep},d2:function(){return getPluginsByContext},oK:function(){return findParentContextId}}),l(7378),l(6640);let sleep=t=>new Promise(s=>setTimeout(s,t)),getPluginsByContext=(t,s)=>{let l=[],n=[],a=((t,s)=>{for(let l of s)if(l.contexts){for(let s of l.contexts)if(s.context===t)return s.path.slice(0,-1)}return[]})(t,s);return s.forEach(s=>{var r;null==s||null===(r=s.contexts)||void 0===r||r.forEach(r=>{let o=r.context===t,i=a.includes(r.context),c=JSON.parse(JSON.stringify(s));delete c.contexts,o?l.push({...c,contextType:"Direct",installedContextId:r.context}):i&&n.push({...c,contextType:"Parent",installedContextId:r.context})})}),{direct:l,parent:n}},findParentContextId=function(t,s){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!s||0===s.length)return null;for(let n of s){if(n.stream_id===t)return l;if(n.contexts){let s=findParentContextId(t,n.contexts,n.stream_id);if(s)return s}}return null},n={ACTIVE:0,LOADING:1,SUCCESS:2,ERROR:3,DISABLED:4}}},function(t){t.O(0,[90,146,774,888,179],function(){return t(t.s=7523)}),_N_E=t.O()}]);