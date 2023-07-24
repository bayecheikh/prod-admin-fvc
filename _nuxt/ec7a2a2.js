(window.webpackJsonp=window.webpackJsonp||[]).push([[207,91,108],{1082:function(t,e,r){var content=r(1089);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("7705e0be",content,!0,{sourceMap:!1})},1085:function(t,e,r){"use strict";r.r(e);var n={name:"Notification",props:["message","color"]},o=(r(1088),r(108)),l=r(131),c=r.n(l),d=r(1080),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-alert",{attrs:{dense:"",text:"",type:t.color,dismissible:""}},[t._v("\n    "+t._s(t.message)+"\n")])}),[],!1,null,"608ba8f8",null);e.default=component.exports;c()(component,{VAlert:d.a})},1088:function(t,e,r){"use strict";r(1082)},1089:function(t,e,r){var n=r(14)(!1);n.push([t.i,".bottom-fixed[data-v-608ba8f8]{position:fixed;left:0;bottom:50%}",""]),t.exports=n},1092:function(t,e,r){"use strict";var n=r(1),o=(r(29),r(43),r(241),r(6),r(3),r(10),r(62),r(71),r(8),r(9),r(11),r(12),r(7)),l=r(110),c=r(72);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},1565:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(25),r(19),r(3),{components:{Notification:r(1085).default},mounted:function(){},data:function(){return{loading:!1,message:null,color:null,valid:!0,progress:!0,items:[],page:1,totalPages:1,typeProfils:[{text:"Citoyen",value:1,selected:!0},{text:"Entreprise",value:2}],typePieces:[{text:"Cni",value:"cni",selected:!0},{text:"Passeport",value:"passeport"}],model:{avatar:"",sexe:"Masculin",dataSearch:"",firstname:"",lastname:"",email:"tesdddddddddt@adie.sn",username:"",type_profil_id:"citoyen",telephone:"0554525152",address:"dakar",nationality:"senegalaise",date_of_birth:"1988-09-24",place_of_birth:"Dakar",type_identification:"cin",numero_identification:"",fonction:"Devops",structure_id:JSON.parse(localStorage.getItem("loggedInUser")).id},rules:{dataSearchRules:[function(t){return/^[a-zA-Z0-9-_ @.+]+$/.test(t)||"Champ obligatoire"}],firstnameRules:[function(t){return!!t||"Champ obligatoire"}],lastnameRules:[function(t){return!!t||"Nom est obligatoire"},function(t){return/^[a-zA-Z0-9-_ ]+$/.test(t)||"Nom incorrecte"}],emailRules:[function(t){return!!t||"E-mail est obligatoire"},function(t){return/.+@.+\..+/.test(t)||"E-mail mdoit etre valide"}],usernameRules:[function(t){return!!t||"Login est obligatoire"},function(t){return/^[a-zA-Z0-9-_]+$/.test(t)||"Nom incorrecte"}],type_profil_idRules:[function(t){return/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/}],telephoneRules:[function(t){return/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/}],addressRules:[function(t){return/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/}],nationalityRules:[function(t){return/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/}],date_of_birthRules:[function(t){return/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/}],place_of_birthRules:[function(t){return/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/}],type_identificationRules:[function(t){return/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/}],numero_identificationRules:[function(t){return/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/}],fonctionRules:[function(t){return/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/}],structure_idRules:[function(t){return/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/}]},date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),menu:!1,imageData:null}},methods:{onClearClicked:function(){this.$refs.inputRef.clearableCallback(),this.page=1,this.getList()},submitForm:function(){var t=this.$refs.form.validate();this.loading=!0,console.log("donnee envoyées++++++++++++++",this.model.dataSearch),this.$store.commit("utilisateurs/initdatasearch",this.model.dataSearch),t&&this.getResult(1,this.model.dataSearch)},resetForm:function(){this.$refs.form.reset()},resetValidationForm:function(){this.$refs.form.resetValidation()},getList:function(){var t=this;this.page=1,this.progress=!0,this.$store.dispatch("utilisateurs/getDataSearch",null),this.$msasApi.$get("/users?page=1").then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.page=1,n=Math.ceil(r.data.data.total/r.data.data.per_page),t.$store.dispatch("utilisateurs/getTotalPage",n),t.$store.dispatch("utilisateurs/getPerPage",r.data.data.per_page),t.$store.dispatch("utilisateurs/getList",r.data.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var r,n,o,l;t.$toast.error(null==e||null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message).goAway(3e3),console.log("Code error ++++++: ",null==e||null===(o=e.response)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.message)})).finally((function(){console.log("Requette envoyé "),t.progress=!1})),console.log("total items++++++++++",this.paginationUtilisateur)},getResult:function(t,param){var e=this;this.page=1,this.progress=!0,this.$msasApi.get("/user-multiple-search/"+param+"?page="+t).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Données reçus++++++++++++",r.data.data.data),t.next=3,e.$store.dispatch("utilisateurs/getList",r.data.data.data);case 3:n=Math.ceil(r.data.data.total/r.data.data.per_page),e.$store.dispatch("utilisateurs/getTotalPage",n),e.$store.dispatch("utilisateurs/getPerPage",r.data.data.per_page);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var r,n,o,l;e.$toast.error(null==t||null===(r=t.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message).goAway(3e3),console.log("Code error ++++++: ",null==t||null===(o=t.response)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.message)})).finally((function(){console.log("Requette envoyé"),e.progress=!1,e.loading=!1}))}},metaInfo:function(){return{items:this.items}}}),l=o,c=r(108),d=r(131),f=r.n(d),h=r(233),m=r(1069),v=r(1092),_=r(79),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",staticClass:" mt-5 row",attrs:{enctype:"multipart/form-data"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-col",{staticClass:"mb-0 pb-0 d-flex",attrs:{md:"6",lg:"6",sm:"12"}},[r("v-text-field",{ref:"inputRef",attrs:{label:"Rechercher un utilisateur",outlined:"",dense:"",rules:t.rules.dataSearchRules,placeholder:"Email, Prénom, Nom",clearable:"","clear-icon-cb":t.onClearClicked,rounded:""},model:{value:t.model.dataSearch,callback:function(e){t.$set(t.model,"dataSearch",e)},expression:"model.dataSearch"}})],1),t._v(" "),r("v-col",{staticClass:"d-flex",attrs:{lg:"3",md:"3",sm:"12"}},[r("v-btn",{staticClass:"mr-4 text-white",attrs:{loading:t.loading,disabled:!t.valid,color:"#1B73E8",depressed:"",rounded:""},on:{click:t.submitForm}},[t._v("\n        Rechercher\n      ")]),t._v(" "),r("v-btn",{attrs:{text:"",rounded:"",color:"red"},on:{click:t.onClearClicked}},[t._v("Réinitialiser")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:h.a,VCol:m.a,VForm:v.a,VTextField:_.a})}}]);