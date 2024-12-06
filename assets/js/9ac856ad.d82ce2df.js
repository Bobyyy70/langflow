"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[4046],{30197:(e,n,s)=>{s.r(n),s.d(n,{CH:()=>a,assets:()=>c,chCodeConfig:()=>h,contentTitle:()=>t,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>x});var r=s(74848),o=s(28453),i=s(24754);const l={title:"Langflow CLI",sidebar_position:2,slug:"/configuration-cli"},t="Langflow CLI",d={id:"Configuration/configuration-cli",title:"Langflow CLI",description:"The Langflow command line interface (Langflow CLI) is the main interface for managing and running the Langflow server.",source:"@site/docs/Configuration/configuration-cli.md",sourceDirName:"Configuration",slug:"/configuration-cli",permalink:"/configuration-cli",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Langflow CLI",sidebar_position:2,slug:"/configuration-cli"},sidebar:"docs",previous:{title:"Run Langflow in backend-only mode",permalink:"/configuration-backend-only"},next:{title:"Global variables",permalink:"/configuration-global-variables"}},c={},a={annotations:i.hk,Code:i.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},x=[{value:"CLI commands",id:"cli-commands",level:2},{value:"langflow",id:"langflow",level:3},{value:"Options",id:"options",level:4},{value:"langflow api-key",id:"langflow-api-key",level:3},{value:"Options",id:"options-1",level:4},{value:"langflow copy-db",id:"langflow-copy-db",level:3},{value:"Options",id:"options-2",level:4},{value:"langflow migration",id:"langflow-migration",level:3},{value:"Options",id:"options-3",level:4},{value:"langflow run",id:"langflow-run",level:3},{value:"Options",id:"options-4",level:4},{value:"langflow superuser",id:"langflow-superuser",level:3},{value:"Options",id:"options-5",level:4},{value:"Precedence",id:"precedence",level:2},{value:"Assign values",id:"assign-values",level:2},{value:"Boolean values",id:"boolean",level:3}];function j(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return a||u("CH",!1),a.Code||u("CH.Code",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"langflow-cli",children:"Langflow CLI"})}),"\n",(0,r.jsx)(n.p,{children:"The Langflow command line interface (Langflow CLI) is the main interface for managing and running the Langflow server."}),"\n",(0,r.jsx)(n.h2,{id:"cli-commands",children:"CLI commands"}),"\n",(0,r.jsxs)(n.p,{children:["The following sections describe the available CLI commands and their options, as well as their corresponding ",(0,r.jsx)(n.a,{href:"/environment-variables",children:"environment variables"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"langflow",children:"langflow"}),"\n",(0,r.jsx)(n.p,{children:"Running the CLI without any arguments displays a list of available options and commands."}),"\n",(0,r.jsx)(a.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow",props:{style:{color:"#FFA657"}}},{content:" [OPTIONS]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow",props:{style:{color:"#A5D6FF"}}},{content:" [OPTIONS]",props:{style:{color:"#C9D1D9"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,r.jsx)(n.h4,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Values"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"install-completion"}),(0,r.jsx)(n.code,{children:"--install-completion"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:"Install auto-completion for the current shell."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"show-completion"}),(0,r.jsx)(n.code,{children:"--show-completion"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:"Show the location of the auto-completion config file (if installed)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"help"}),(0,r.jsx)(n.code,{children:"--help"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:"Display information about the command usage and its options and arguments."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"langflow-api-key",children:"langflow api-key"}),"\n",(0,r.jsxs)(n.p,{children:["Create an API key for the default superuser if the [",(0,r.jsx)(n.code,{children:"LANGFLOW_AUTO_LOGIN"})," environment variable] is set to ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(a.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"api-key",props:{style:{color:"#A5D6FF"}}},{content:" [OPTIONS]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow api-key",props:{style:{color:"#A5D6FF"}}},{content:" [OPTIONS]",props:{style:{color:"#C9D1D9"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,r.jsx)(n.h4,{id:"options-1",children:"Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Values"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"api-key-log-level"}),(0,r.jsx)(n.code,{children:"--log-level"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"critical"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"debug"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"info"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"warning"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"error"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"critical"})]}),(0,r.jsx)(n.td,{children:"Set the logging level."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"api-key-help"}),(0,r.jsx)(n.code,{children:"--help"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:"Display information about the command usage and its options and arguments."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"langflow-copy-db",children:"langflow copy-db"}),"\n",(0,r.jsxs)(n.p,{children:["Copy the database files to the current directory.\nCopy the Langflow database files, ",(0,r.jsx)(n.code,{children:"langflow.db"})," and ",(0,r.jsx)(n.code,{children:"langflow-pre.db"})," (if they exist), from the cache directory to the current directory."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The current directory is the directory containing ",(0,r.jsx)(n.code,{children:"__main__.py"}),".\nYou can find this directory by running ",(0,r.jsx)(n.code,{children:"which langflow"}),"."]})}),"\n",(0,r.jsx)(a.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"copy-db",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow copy-db",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,r.jsx)(n.h4,{id:"options-2",children:"Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Values"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"copy-db-help"}),(0,r.jsx)(n.code,{children:"--help"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:"Display information about the command usage and its options and arguments."})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"langflow-migration",children:"langflow migration"}),"\n",(0,r.jsx)(n.p,{children:"Run or test database migrations."}),"\n",(0,r.jsx)(a.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"migration",props:{style:{color:"#A5D6FF"}}},{content:" [OPTIONS]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow migration",props:{style:{color:"#A5D6FF"}}},{content:" [OPTIONS]",props:{style:{color:"#C9D1D9"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,r.jsx)(n.h4,{id:"options-3",children:"Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Values"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"migration-test"}),(0,r.jsx)(n.code,{children:"--test"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#boolean",children:"Boolean"})}),(0,r.jsxs)(n.td,{children:["Run migrations in test mode. Use ",(0,r.jsx)(n.code,{children:"--no-test"})," to disable test mode."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"migration-fix"}),(0,r.jsx)(n.code,{children:"--fix"})]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"false"})," (",(0,r.jsx)(n.code,{children:"--no-fix"}),")"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#boolean",children:"Boolean"})}),(0,r.jsx)(n.td,{children:"Fix migrations. This is a destructive operation, and all affected data will be deleted. Only use this option if you know what you are doing."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"migration-help"}),(0,r.jsx)(n.code,{children:"--help"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:"Display information about the command usage and its options and arguments."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"langflow-run",children:"langflow run"}),"\n",(0,r.jsx)(n.p,{children:"Start the Langflow server."}),"\n",(0,r.jsx)(a.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"run",props:{style:{color:"#A5D6FF"}}},{content:" [OPTIONS]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow run",props:{style:{color:"#A5D6FF"}}},{content:" [OPTIONS]",props:{style:{color:"#C9D1D9"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,r.jsx)(n.h4,{id:"options-4",children:"Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Values"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-host"}),(0,r.jsx)(n.code,{children:"--host"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"127.0.0.1"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["The host on which the Langflow server will run.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_HOST",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_HOST"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-workers"}),(0,r.jsx)(n.code,{children:"--workers"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["Number of worker processes.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_WORKERS",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_WORKERS"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-worker-timeout"}),(0,r.jsx)(n.code,{children:"--worker-timeout"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"300"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["Worker timeout in seconds.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_WORKER_TIMEOUT",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_WORKER_TIMEOUT"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-port"}),(0,r.jsx)(n.code,{children:"--port"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"7860"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["The port on which the Langflow server will run. The server automatically selects a free port if the specified port is in use.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_PORT",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_PORT"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-components-path"}),(0,r.jsx)(n.code,{children:"--components-path"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"langflow/components"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["Path to the directory containing custom components.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_COMPONENTS_PATH",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_COMPONENTS_PATH"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-env-file"}),(0,r.jsx)(n.code,{children:"--env-file"})]}),(0,r.jsx)(n.td,{children:"Not set"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["Path to the ",(0,r.jsx)(n.code,{children:".env"})," file containing environment variables.",(0,r.jsx)("br",{}),"See ",(0,r.jsx)(n.a,{href:"/environment-variables#configure-variables-env-file",children:"Import environment variables from a .env file"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-log-level"}),(0,r.jsx)(n.code,{children:"--log-level"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"critical"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"debug"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"info"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"warning"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"error"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"critical"})]}),(0,r.jsxs)(n.td,{children:["Set the logging level.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_LOG_LEVEL",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_LOG_LEVEL"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-log-file"}),(0,r.jsx)(n.code,{children:"--log-file"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"logs/langflow.log"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["Set the path to the log file for Langflow.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_LOG_FILE",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_LOG_FILE"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-cache"}),(0,r.jsx)(n.code,{children:"--cache"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"InMemoryCache"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"InMemoryCache"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"SQLiteCache"})]}),(0,r.jsxs)(n.td,{children:["Type of cache to use.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_LANGCHAIN_CACHE",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_LANGCHAIN_CACHE"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-dev"}),(0,r.jsx)(n.code,{children:"--dev"})]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"false"})," (",(0,r.jsx)(n.code,{children:"--no-dev"}),")"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#boolean",children:"Boolean"})}),(0,r.jsxs)(n.td,{children:["Run Langflow in development mode (may contain bugs).",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_DEV",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_DEV"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-frontend-path"}),(0,r.jsx)(n.code,{children:"--frontend-path"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"./frontend"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["Path to the frontend directory containing build files. This is for development purposes only.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_FRONTEND_PATH",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_FRONTEND_PATH"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-open-browser"}),(0,r.jsx)(n.code,{children:"--open-browser"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#boolean",children:"Boolean"})}),(0,r.jsxs)(n.td,{children:["Open the system web browser on startup. Use ",(0,r.jsx)(n.code,{children:"--no-open-browser"})," to disable opening the system web browser on startup.",(0,r.jsx)("br",{})," See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_OPEN_BROWSER",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_OPEN_BROWSER"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-remove-api-keys"}),(0,r.jsx)(n.code,{children:"--remove-api-keys"})]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"false"})," (",(0,r.jsx)(n.code,{children:"--no-remove-api-keys"}),")"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#boolean",children:"Boolean"})}),(0,r.jsxs)(n.td,{children:["Remove API keys from the projects saved in the database.",(0,r.jsx)("br",{})," See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_REMOVE_API_KEYS",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_REMOVE_API_KEYS"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-backend-only"}),(0,r.jsx)(n.code,{children:"--backend-only"})]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"false"})," (",(0,r.jsx)(n.code,{children:"--no-backend-only"}),")"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#boolean",children:"Boolean"})}),(0,r.jsxs)(n.td,{children:["Only run Langflow's backend server (no frontend).",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_BACKEND_ONLY",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_BACKEND_ONLY"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-store"}),(0,r.jsx)(n.code,{children:"--store"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#boolean",children:"Boolean"})}),(0,r.jsxs)(n.td,{children:["Enable the Langflow Store features. Use ",(0,r.jsx)(n.code,{children:"--no-store"})," to disable the Langflow Store features.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_STORE",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_STORE"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-auto-saving"}),(0,r.jsx)(n.code,{children:"--auto-saving"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#boolean",children:"Boolean"})}),(0,r.jsxs)(n.td,{children:["Enable flow auto-saving. Use ",(0,r.jsx)(n.code,{children:"--no-auto-saving"})," to disable flow auto-saving.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_AUTO_SAVING",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_AUTO_SAVING"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-auto-saving-interval"}),(0,r.jsx)(n.code,{children:"--auto-saving-interval"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1000"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["Set the interval for flow auto-saving in milliseconds.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_AUTO_SAVING_INTERVAL",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_AUTO_SAVING_INTERVAL"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-health-check-max-retries"}),(0,r.jsx)(n.code,{children:"--health-check-max-retries"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"5"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["Set the maximum number of retries for the health check. Use ",(0,r.jsx)(n.code,{children:"--no-health-check-max-retries"})," to disable the maximum number of retries for the health check.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_HEALTH_CHECK_MAX_RETRIES",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_HEALTH_CHECK_MAX_RETRIES"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-max-file-size-upload"}),(0,r.jsx)(n.code,{children:"--max-file-size-upload"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"100"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["Set the maximum file size for the upload in megabytes.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_MAX_FILE_SIZE_UPLOAD",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_MAX_FILE_SIZE_UPLOAD"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"run-help"}),(0,r.jsx)(n.code,{children:"--help"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Not applicable"})}),(0,r.jsx)(n.td,{children:"Display information about the command usage and its options and arguments."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"langflow-superuser",children:"langflow superuser"}),"\n",(0,r.jsx)(n.p,{children:"Create a superuser account."}),"\n",(0,r.jsx)(a.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"superuser",props:{style:{color:"#A5D6FF"}}},{content:" [OPTIONS]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow superuser",props:{style:{color:"#A5D6FF"}}},{content:" [OPTIONS]",props:{style:{color:"#C9D1D9"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,r.jsx)(n.h4,{id:"options-5",children:"Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Values"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"superuser-username"}),(0,r.jsx)(n.code,{children:"--username"})]}),(0,r.jsx)(n.td,{children:"Required"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["Specify the name for the superuser.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_SUPERUSER",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_SUPERUSER"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"superuser-password"}),(0,r.jsx)(n.code,{children:"--password"})]}),(0,r.jsx)(n.td,{children:"Required"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["Specify the password for the superuser.",(0,r.jsx)("br",{}),"See ",(0,r.jsxs)(n.a,{href:"/environment-variables#LANGFLOW_SUPERUSER_PASSWORD",children:[(0,r.jsx)(n.code,{children:"LANGFLOW_SUPERUSER_PASSWORD"})," variable"]}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)("a",{id:"superuser-log-level"}),(0,r.jsx)(n.code,{children:"--log-level"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"critical"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"debug"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"info"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"warning"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"error"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"critical"})]}),(0,r.jsx)(n.td,{children:"Set the logging level."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"precedence",children:"Precedence"}),"\n",(0,r.jsxs)(n.p,{children:["Langflow CLI options override the values of corresponding ",(0,r.jsx)(n.a,{href:"/environment-variables",children:"environment variables"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, if you have ",(0,r.jsx)(n.code,{children:"LANGFLOW_PORT=7860"})," defined as an environment variable, but you run the CLI with ",(0,r.jsx)(n.code,{children:"--port 7880"}),", then Langflow will set the port to ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"7880"})})," (the value passed with the CLI)."]}),"\n",(0,r.jsx)(n.h2,{id:"assign-values",children:"Assign values"}),"\n",(0,r.jsxs)(n.p,{children:["There are two ways you can assign a value to a CLI option.\nYou can write the option flag and its value with a single space between them: ",(0,r.jsx)(n.code,{children:"--option value"}),".\nOr, you can write them using an equals sign (",(0,r.jsx)(n.code,{children:"="}),") between the option flag and the value: ",(0,r.jsx)(n.code,{children:"--option=value"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Values that contain spaces must be surrounded by quotation marks: ",(0,r.jsx)(n.code,{children:"--option 'Value with Spaces'"})," or ",(0,r.jsx)(n.code,{children:"--option='Value with Spaces'"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"boolean",children:"Boolean values"}),"\n",(0,r.jsx)(n.p,{children:"Boolean options turn a behavior on or off, and therefore accept no arguments.\nTo activate a boolean option, type it on the command line.\nFor example:"}),"\n",(0,r.jsx)(a.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"run ",props:{style:{color:"#A5D6FF"}}},{content:"--remove-api-keys",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,r.jsxs)(n.p,{children:["All boolean options have a corresponding option that negates it.\nFor example, the negating option for ",(0,r.jsx)(n.code,{children:"--remove-api-keys"})," is ",(0,r.jsx)(n.code,{children:"--no-remove-api-keys"}),".\nThese options let you negate boolean options that you may have set using ",(0,r.jsx)(n.a,{href:"/environment-variables",children:"environment variables"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);