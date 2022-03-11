"use strict";(self.webpackChunkdokc_docs=self.webpackChunkdokc_docs||[]).push([[176],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),h=a,k=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return o?n.createElement(k,i(i({ref:t},c),{},{components:o})):n.createElement(k,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6169:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],s={},l="Introduction to the How to DoK Project",u={unversionedId:"Documentation/introduction",id:"Documentation/introduction",title:"Introduction to the How to DoK Project",description:"This repository is intended as a place to develop knowledge, practice, and examples about how to run various data use cases on Kubernetes.",source:"@site/docs/Documentation/introduction.md",sourceDirName:"Documentation",slug:"/Documentation/introduction",permalink:"/docs/Documentation/introduction",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Installing this website",permalink:"/docs/Tutorials/intro"},next:{title:"Markdown Features",permalink:"/docs/Videos/markdown-features"}},c={},d=[{value:"A Cloud Native Data Workflow on Kubernetes using Argo Workflows and K8ssandra",id:"a-cloud-native-data-workflow-on-kubernetes-using-argo-workflows-and-k8ssandra",level:2},{value:"Proposed Architecture",id:"proposed-architecture",level:3},{value:"Components",id:"components",level:3},{value:"Database Schema",id:"database-schema",level:3},{value:"What should the outcome or products of this project be?",id:"what-should-the-outcome-or-products-of-this-project-be",level:4},{value:"Knowledge needed",id:"knowledge-needed",level:3},{value:"Resources",id:"resources",level:3},{value:"Reference articles",id:"reference-articles",level:3},{value:"Doubts and Uncertainty",id:"doubts-and-uncertainty",level:3},{value:"How to access the ORM?",id:"how-to-access-the-orm",level:3},{value:"Contributing",id:"contributing",level:3},{value:"Contact",id:"contact",level:3},{value:"Thanks to all the contributors \u2764\ufe0f",id:"thanks-to-all-the-contributors-\ufe0f",level:2}],p={toc:d};function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-the-how-to-dok-project"},"Introduction to the How to DoK Project"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://dok.community/wp-content/uploads/2021/03/WebKubernetes-estrecho.png",alt:null,title:"Data on Kubernetes"})),(0,r.kt)("h1",{id:"how-to-get-data-on-kubernetes"},"How To (Get) Data on Kubernetes"),(0,r.kt)("p",null,"This repository is intended as a place to develop knowledge, practice, and examples about how to run various data use cases on Kubernetes."),(0,r.kt)("h2",{id:"a-cloud-native-data-workflow-on-kubernetes-using-argo-workflows-and-k8ssandra"},"A Cloud Native Data Workflow on Kubernetes using Argo Workflows and K8ssandra"),(0,r.kt)("p",null,"This project is about:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using cloud-native data services on Kubernetes"),(0,r.kt)("li",{parentName:"ul"},"Using a cloud-native database on Kubernetes for storing data"),(0,r.kt)("li",{parentName:"ul"},"Using a cloud-native workflow engine to determine how to handle and move data"),(0,r.kt)("li",{parentName:"ul"},"Showing how a simple app or script can be used on Kubernetes as part of a data pipeline"),(0,r.kt)("li",{parentName:"ul"},"Showing how to develop custom code components for use in Kubernetes"),(0,r.kt)("li",{parentName:"ul"},"Showing which depending services you might encounter and need when wanting to start running data workloads on Kubernetes")),(0,r.kt)("h3",{id:"proposed-architecture"},"Proposed Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/dokc/how-to-dok/static/how_to_dok_proposed_architecture.png",alt:"proposed architecture"})),(0,r.kt)("h3",{id:"components"},"Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rap as configuration (Rap as Code - RaC)"),"\nThis concerns the input data for our pipeline. We want to move data around rap lyrics, artists, meetups, etc through our data pipeline to destinations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rap data model"),"\nWhat does the data that we are going to be moving around look like, what standard does it adhere to, which format is it, how do we describe the fields we have in for our data model? The data model should be the source of truth regarding what our data object looks like within our system.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A piece of code / app to write data to a database"),"\nThis can be written in any language and should be able to write input data to our destination database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A container image containing this code that we can run on kubernetes"),"\nWith Argo workflows, it is unnecessary to build a separate container for our custom code, but it is an excellent exercise in developing and building components to run your Kubernetes environment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A workflow engine (Argo) to run this container image on a schedule or on an event"),"\nArgo workflows is a cloud-native workflow engine with which we can author workflows. A workflow with Argo is a Kubernetes resource object that describes how we go from a start point to the desired endpoint. This workflow will be responsible for orchestrating moving data into our destination and handling the running of the steps required. In its simplest form it can be just one step and may look like this: Start -> (Pick up input data and write to destination) -> Success, a more complex form could be: Start -> (Check if data already in destination) -> (Validate data adheres to schema) -> (Test data for data quality) -> (Calculate additional metrics and insights on input file) -> (Write to destination) -> (Orchestrate metadata) -> (Report to end-users) -> Success")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Blob storage that has the Rap files"),"\nWe need to have a way to supply new input data to our pipeline. This data should be made available, an option here is Blob storage. We should see if we can run blob storage on Kubernetes with, for example, MinIO.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A super cool k8s DB K8ssandra"),"\nThe initial destination for our data. A K8ssandra cluster configuration using the K8ssandra operator. That is ready for accepting our data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Build and release pipeline for releasing container image"),"\nHow do we ensure we get our container image built and released automatically? So, that the services in our cluster can use it via CI/CD. ",(0,r.kt)("br",null),"\nCI/CD can be an interesting topic itself per component, but let us focus on one use case first."))),(0,r.kt)("h3",{id:"database-schema"},"Database Schema"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/dokc/how-to-dok/resources/database/ERD.png",alt:"Database Schema"})),(0,r.kt)("h4",{id:"what-should-the-outcome-or-products-of-this-project-be"},"What should the outcome or products of this project be?"),(0,r.kt)("p",null,"Ideally, what we are looking for is documentation, best practices, example resources (code, k8s resource definitions), tutorials on how to achieve running a cloud-native data workflow on Kubernetes.\nTogether this should provide an overview of how to run cloud-native data workflows on Kubernetes."),(0,r.kt)("h3",{id:"knowledge-needed"},"Knowledge needed"),(0,r.kt)("p",null,"We can identify some specific knowledge areas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node.js and Express.js"),(0,r.kt)("li",{parentName:"ul"},"Basic knowledge of Docker and Containerization"),(0,r.kt)("li",{parentName:"ul"},"General Kubernetes knowledge"),(0,r.kt)("li",{parentName:"ul"},"Developing services for/on Kubernetes"),(0,r.kt)("li",{parentName:"ul"},"Argo Workflow"),(0,r.kt)("li",{parentName:"ul"},"K8ssandra"),(0,r.kt)("li",{parentName:"ul"},"Backend code development (for writing pieces of code that are part of the data pipeline workflow)"),(0,r.kt)("li",{parentName:"ul"},"Github workflow"),(0,r.kt)("li",{parentName:"ul"},"Local GIT flow"),(0,r.kt)("li",{parentName:"ul"},"CI/CD Automation")),(0,r.kt)("h3",{id:"resources"},"Resources"),(0,r.kt)("p",null,"Here is a list of knowledge resources created by this community:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dokc/how-to-dok/resources/run-k8ssandra-on-k3d-locally-lightweight/run-k8ssandra-on-k3d-locally-lightweight.md"},"Run k8ssandra on k3d locally - lightweight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dokc/how-to-dok/Cassandra-Local-Config/README.md"},"How to run a cassandra docker container locally"))),(0,r.kt)("h3",{id:"reference-articles"},"Reference articles"),(0,r.kt)("p",null,"This section contains reference articles and material touching on or relating to items, services or knowledge, explicit or implicit which is helpful in the context of this project."),(0,r.kt)("h3",{id:"doubts-and-uncertainty"},"Doubts and Uncertainty"),(0,r.kt)("p",null,"Q: Who is going to develop the components?"),(0,r.kt)("p",null,"A:"),(0,r.kt)("p",null,"Q: How do we onboard new members to contribute to this project?"),(0,r.kt)("p",null,"A:"),(0,r.kt)("p",null,"Q: Who is going to maintain the repository?"),(0,r.kt)("p",null,"A:"),(0,r.kt)("p",null,"Q: How do we keep information in this repository up to date?"),(0,r.kt)("p",null,"A:"),(0,r.kt)("p",null,"Q: How do we ensure we are inclusive of all levels of contributors?"),(0,r.kt)("p",null,"A:"),(0,r.kt)("p",null,"Q: How will we setup and handle repository git flow?"),(0,r.kt)("p",null,"A:"),(0,r.kt)("h3",{id:"how-to-access-the-orm"},"How to access the ORM?"),(0,r.kt)("p",null,"You can read about it ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AbhijithGanesh/how-to-dok/edit/express-config/src/readme.md"},"here")),(0,r.kt)("h3",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"This section contains information on how to start contributing to this project"),(0,r.kt)("p",null,"Contributing areas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Documentation"),(0,r.kt)("li",{parentName:"ul"},"Reference materials"),(0,r.kt)("li",{parentName:"ul"},"Tutorials"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes resource components"),(0,r.kt)("li",{parentName:"ul"},"Code"),(0,r.kt)("li",{parentName:"ul"},"Data schema / Data models"),(0,r.kt)("li",{parentName:"ul"},"Data input files (DoK Rap lyrics)"),(0,r.kt)("li",{parentName:"ul"},"Visual (graphs, drawings, designs, video)")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://dokcommunity.slack.com/archives/C029SP0H937"},"DoK Slack channel")," for updates and discussion.\nCheckout out the ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCUnXJbHQ89R2uSfKsqQwGvQ"},"Dok YouTube channel")," for more information, talks, discussions, and raps!!!\nAnd sign up to the update ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSeNTRsesRA7-1uMyFeHMMqfG9IgdVd7soY_L4wx5WqeDUcMjA/viewform"},"newsletter")," to be able to join the bi-weekly progress calls!"),(0,r.kt)("h2",{id:"thanks-to-all-the-contributors-\ufe0f"},"Thanks to all the contributors \u2764\ufe0f"),(0,r.kt)("a",{href:"https://github.com/dokc/how-to-dok/graphs/contributors"},(0,r.kt)("img",{src:"https://contrib.rocks/image?repo=dokc/how-to-dok"})))}h.isMDXComponent=!0}}]);