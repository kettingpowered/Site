import{g as m}from"./fas-BeopYNHk.js";import{_ as u}from"./app-CFZGRHB_.js";import{r as p,o as n,c as a,b as i,e as w,t as b,k as h,u as y,j as c,n as _,F as v,l as A,p as q,a as I}from"./vendor-5UigBav2.js";import"./fab-oWpDjCGd.js";const k={class:"detail"},T=["innerHTML"],L={key:0,class:"notification-banner"},B={name:"QnAComponent",data(){return{showCopyIcon:!1,copyNotification:!1,mobile:!1}},props:{qna:{type:Object,required:!0},desc:{type:String,required:!0},border:{type:String,required:!0,validator:function(e){return["top","bottom","sides"].includes(e)}},expanded:{type:Boolean,required:!0}},watch:{expanded:function(e){e?this.$el.getElementsByClassName("detail")[0].setAttribute("open",""):this.$el.getElementsByClassName("detail")[0].removeAttribute("open")}},mounted(){this.expanded&&this.$el.getElementsByClassName("detail")[0].setAttribute("open",""),this.mobile=window.innerWidth<=1280},methods:{copyToClipboard(e){const t=this.global.url+"faq/"+this.qna.id;navigator.clipboard.writeText(t),this.copyNotification=!0,setTimeout(()=>{this.copyNotification=!1},2e3),e.preventDefault()}},computed:{showIcon(){return this.mobile||this.showCopyIcon}}},C=Object.assign(B,{setup(e){return(t,s)=>{const l=p("font-awesome-icon");return n(),a("div",{class:_(["qna",e.border])},[i("details",k,[i("summary",{onMouseover:s[0]||(s[0]=r=>t.showCopyIcon=!0),onMouseleave:s[1]||(s[1]=r=>t.showCopyIcon=!1)},[w(b(e.qna.question)+" ",1),t.showIcon?(n(),h(l,{key:0,class:"copy-icon",icon:y(m),onClick:t.copyToClipboard},null,8,["icon","onClick"])):c("",!0)],32),i("div",{class:"desc",innerHTML:e.desc},null,8,T)]),t.copyNotification?(n(),a("div",L," Link copied to clipboard! ")):c("",!0)],2)}}}),S=u(C,[["__scopeId","data-v-48db332b"]]),f=[{id:"what-is-ketting",question:"What is Ketting?",answer:"Ketting is a Minecraft server hybrid, combing Forge, Bukkit and Spigot."},{id:"developers",question:"Who are the developers?",answer:"Our developers are listed on the <a href='/team'>team page</a>.",safe:"Our developers are listed on the team page."},{id:"versions",question:"What versions of Minecraft does Ketting support?",answer:"Check the <a href='/download'>downloads page</a> for the latest supported versions.",safe:"Check the downloads page for the latest supported versions."},{id:"how-to-install",question:"How do I install Ketting?",answer:"When choosing a version from our <a href='/download'>downloads page</a>, click 'Get it' and follow the provided instructions.",safe:"When choosing a version from our downloads page, click 'Get it' and follow the provided instructions."},{id:"how-to-install-on-feather",question:"How do I install Ketting on Feather Client?",answer:"You can follow our provided <a href='%FEATHER_INSTALL_URL%' target='_blank'>YouTube tutorial</a>.<br>You basically only need to add <pre>-javaagent:server.jar</pre> in the Launch Args field.",safe:"You can follow our provided YouTube tutorial. (%FEATHER_INSTALL_URL%)\n You basically only need to add `-javaagent:server.jar´ in the Launch Args field."},{id:"found-a-bug",question:"I found a bug, what do I do?",answer:"Go to our <a href='%GITHUB_URL%' target='_blank'>GitHub page</a> and create an issue in the correct repository.",safe:"Go to our GitHub page (%GITHUB_URL%) and create an issue in the correct repository."},{id:"is-this-magma",question:"Is Ketting a continuation of Magma?",answer:"Ketting is not a continuation of Magma, but a project rewritten from scratch after Magma was discontinued."},{id:"why-not-paper",question:"Why did you use Spigot instead of Paper?",answer:"Due to the extra amount of patches we would need to apply (around 1500 on top of Spigot), we decided to use Spigot as a base. Paper also comes with some drastic changes to internal code that we didn't want to include."}];f.map(e=>e.id);const F={name:"Faq",head(){return{title:this.unhead.formattedTitle("FAQ"),meta:[{property:"og:title",content:this.ogTitle},{property:"og:description",content:this.ogDescription},{name:"description",content:this.ogDescription},{property:"og:image",content:this.global.imageUrl},{property:"og:url",content:this.global.url+"faq"},{name:"theme-color",content:"#770708"}],link:{rel:"canonical",href:this.global.url+"faq"}}},data(){return{questionsAndAnswers:f}},components:{QnA:S},methods:{getTitle(e){if(e){const t=this.getQuestionById(e);if(t)return t.question}return this.unhead.formattedTitle("FAQ")},getDescription(e){if(e){const t=this.getQuestionById(e);if(t)return this.replacePlaceholders(t.safe||t.answer)}return"Ketting, A fork of MinecraftForge with added Bukkit & Spigot patches"},replacePlaceholders(e){let t=e;return t=t.replace("%GITHUB_URL%",this.global.githubUrl),t=t.replace("%FEATHER_INSTALL_URL%",this.global.featherInstallUrl),t},getQuestionById(e){return this.questionsAndAnswers.find(t=>t.id===e)},getBorder(e){return e.id===this.questionsAndAnswers[0].id?"top":e.id===this.questionsAndAnswers[this.questionsAndAnswers.length-1].id?"bottom":"sides"},expanded(e){return this.$route.params.id===e}},computed:{ogTitle(){return this.getTitle(this.$route.params.id)},ogDescription(){return this.getDescription(this.$route.params.id)}}},N=e=>(q("data-v-3dc87a90"),e=e(),I(),e),H={id:"content"},U=N(()=>i("h1",null,"FAQ",-1)),$={class:"questions"};function E(e,t,s,l,r,d){const g=p("QnA");return n(),a("div",H,[U,i("div",$,[(n(!0),a(v,null,A(r.questionsAndAnswers,o=>(n(),h(g,{class:"question",id:o.id,key:o.id,qna:o,desc:d.replacePlaceholders(o.answer),border:d.getBorder(o),expanded:d.expanded(o.id)},null,8,["id","qna","desc","border","expanded"]))),128))])])}const R=u(F,[["render",E],["__scopeId","data-v-3dc87a90"]]);export{R as default};
//# sourceMappingURL=Faq-DiyiTxrI.js.map