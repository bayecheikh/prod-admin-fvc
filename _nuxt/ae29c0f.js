(window.webpackJsonp=window.webpackJsonp||[]).push([[309,91,121,170],{1083:function(e,t,r){"use strict";r.r(t);var n={props:["items"],data:function(){return{selectedItem:0}},metaInfo:function(){return{items:this.items}}},o=r(108),c=r(131),l=r.n(c),d=(r(8),r(9),r(6),r(3),r(11),r(10),r(12),r(1)),m=(r(80),r(1086),r(77)),f=r(7);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _=Object(f.a)(m.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(d.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,v(v({},data),{},{attrs:v(v({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),y=r(0),O=Object(y.j)("v-breadcrumbs__divider","li"),j=r(17);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var x=Object(f.a)(j.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(O,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(_,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}}),R=r(280),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-breadcrumbs",{staticClass:"pl-0",attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBreadcrumbs:x,VIcon:R.a})},1086:function(e,t,r){var content=r(1087);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("b1bed018",content,!0,{sourceMap:!1})},1087:function(e,t,r){var n=r(14)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},1092:function(e,t,r){"use strict";var n=r(1),o=(r(29),r(43),r(241),r(6),r(3),r(10),r(62),r(71),r(8),r(9),r(11),r(12),r(7)),c=r(110),l=r(72);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},1643:function(e,t,r){"use strict";r.r(t);r(8),r(9),r(11),r(10),r(12);var n=r(2),o=r(1),c=(r(25),r(19),r(3),r(22),r(6),r(172));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={components:{},mounted:function(){this.getDetail(this.$nuxt._route.params.id)},computed:Object(c.b)({detailstructure:"structures/detailstructure",listtypezones:"type-zones/listtypezones",listtype_structures:"type_structures/listtype_structures",listregions:"regions/listregions",listdepartements:"departements/listdepartements",listdimensions:"dimensions/listdimensions"}),data:function(){var e;return e={id:"",filename:"",loading:!1,message:null,color:null,valid:!0,showFournisseur:!1,showTypeSource:!1,showNumAutorisation:!1,showAccordSiege:!1,showNumAgrement:!1,showAdresseStructure:!1,showRegion:!1},Object(o.a)(e,"message",null),Object(o.a)(e,"selectedtype_structures",[]),Object(o.a)(e,"selectedType_sources",[]),Object(o.a)(e,"selectedRegions",[]),Object(o.a)(e,"selectedDepartements",[]),Object(o.a)(e,"selectedDimensions",[]),Object(o.a)(e,"selectedType_zone_interventions",[]),Object(o.a)(e,"model",{id:"",nom_structure:"",numero_autorisation:"",accord_siege:"",numero_agrement:"",adresse_structure:"",debut_intervention:"",fin_intervention:"",telephone_structure:"",email_structure:"",firstname_responsable:"",lastname_responsable:"",email_responsable:"",telephone_responsable:"",fonction_responsable:"",listtypesources:[],type_zone_value:""}),Object(o.a)(e,"rules",{nom_structureRules:[function(e){return!!e||"Dénomination est obligatoire"}],nameRules:[function(e){return!!e||"Champ obligatoire"}],firstnameRules:[function(e){return!!e||"Champ obligatoire"}],lastnameRules:[function(e){return!!e||"Champ obligatoire"}],emailRules:[function(e){return!!e||"l'E-mail est obligatoire"},function(e){return/.+@.+\..+/.test(e)||"E-mail mdoit etre valide"}],rolesRules:[function(e){return e&&!!e.length||"Role est obligatoire"}],telephoneRules:[function(e){return!!e||"Téléphone est obligatoire"}],country_codeRules:[function(e){return!!e||"L'indicatif du pays est obligatoire"}],fournisseur_services_idRules:[function(e){return!!e||"Fournisseur est obligatoire"}],structure_idRules:[function(e){return!!e||"Structure est obligatoire"}],adresseRules:[function(e){return!!e||"Adresse est obligatoire"},function(e){return e&&e.length<=100||"Adresse doit etre inférieur à 50 caratères"}],nationalityRules:[function(e){return!!e||"Nationalité est obligatoire"},function(e){return e&&e.length<=50||"Nationalité doit etre inférieur à 15 caratères"}],date_of_birthRules:[function(e){return!!e||"Date de naissance est obligatoire"}],place_of_birthRules:[function(e){return!!e||"Lieu de naissance est obligatoire"},function(e){return e&&e.length<=50||"Lieu de naissance doit etre inférieur à 20 caratères"}],type_identificationRules:[function(e){return!!e||"Type d'identification est obligatoire"}],numero_identificationRules:[function(e){return!!e||"Numéro d'identification est obligatoire"}],fonctionRules:[function(e){return!!e||"Fonction est obligatoire"}]}),Object(o.a)(e,"date1",new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),Object(o.a)(e,"date2",new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),Object(o.a)(e,"menu1",!1),Object(o.a)(e,"menu2",!1),Object(o.a)(e,"imageData",null),e},methods:{getDetail:function(e){var t=this;this.progress=!0,this.$msasApi.$get("/structures/"+e).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Detail structure ++++++++++",r.data),t.$store.dispatch("structures/getDetail",r.data),t.model.id=r.data.id,t.model.nom_structure=r.data.nom_structure,t.selectedtype_structures=r.data.type_structures[0],t.changetype_structure(r.data.type_structures[0]),t.model.adresse_structure=r.data.adresse_structure,t.model.telephone_structure=r.data.telephone_structure,t.model.email_structure=r.data.email_structure;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var r,n,o,c;t.$toast.error(null==e||null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message).goAway(3e3),console.log("Code error ++++++: ",null==e||null===(o=e.response)||void 0===o||null===(c=o.data)||void 0===c?void 0:c.message)})).finally((function(){console.log("Requette envoyé ")}))},handleFileUpload:function(e){var t,r,n,o=this.$refs.file.files,c=(null===(t=o[0])||void 0===t?void 0:t.name.lastIndexOf("."))+1,l=null===(r=o[0])||void 0===r?void 0:r.name.substr(c,o[0].name.length).toLowerCase(),d=(null===(n=o[0])||void 0===n?void 0:n.size)/1024/1024;console.log("Size-------------- ",d),0!=o.length&&(d<=5&&("jpg"==l||"jpeg"==l||"png"==l||"pdf"==l||"doc"==l||"docx"==l)?(this.model.accord_siege=o[0],this.filename=o[0].name):alert("Seul les fichiers jpg/jpeg/png/pdf/doc/docx et de taille inférieur à 5Mb sont acceptés!"))},submitForm:function(){var e,t,r=this;this.loading=!0;var n=this.$refs.form.validate(),o=null===(e=this.selectedtype_structures)||void 0===e?void 0:e.id,c=null===(t=this.selectedType_sources)||void 0===t?void 0:t.id,l=this.selectedDepartements,m=this.selectedRegions,f=this.selectedDimensions,h=this.selectedType_zone_interventions,v=new FormData;v.append("id",this.model.id),v.append("_method","put"),v.append("nom_structure",this.model.nom_structure),v.append("numero_autorisation",this.model.numero_autorisation),v.append("accord_siege",this.model.accord_siege),v.append("numero_agrement",this.model.numero_agrement),v.append("adresse_structure",this.model.adresse_structure),v.append("debut_intervention",this.model.debut_intervention),v.append("fin_intervention",this.model.fin_intervention),v.append("telephone_structure",this.model.telephone_structure),v.append("email_structure",this.model.email_structure),v.append("type_structures",o),v.append("type_sources",c),v.append("departements",l),v.append("regions",m),v.append("dimensions",f),v.append("type_zone_interventions",h);var data=d(d({},this.model),{},{type_structures:o,type_sources:c,departements:l,regions:m,dimensions:f,type_zone_interventions:h});console.log("Donées formulaire source financements ++++++: ",data),console.log("FormData ++++++ : ",v),n&&this.$msasFileApi.post("/structures/"+this.model.id,v).then((function(e){console.log("Donées reçus ++++++: ",e),r.$store.dispatch("toast/getMessage",{type:"success",text:e.data.message}),r.$router.push("/structures")})).catch((function(e){console.log("Code error ++++++: ",e),r.$store.dispatch("toast/getMessage",{type:"error",text:e||"Echec de l'ajout "})})).finally((function(){r.loading=!1,console.log("Requette envoyé ")}))},resetForm:function(){this.$refs.form.reset()},resetValidationForm:function(){this.$refs.form.resetValidation()},changeRole:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.model.roles.filter((function(e){return"agent_structure"===e.name})).length,t.showFournisseur=1==r,console.log("************",r);case 3:case"end":return e.stop()}}),e)})))()},changetype_structure:function(source){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.selectedtype_structures=source,console.log("************",source);case 2:case"end":return t.stop()}}),t)})))()},changeType_source:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.selectedType_sources=e,console.log("************",e);case 2:case"end":return r.stop()}}),r)})))()},changeType_zone_intervention:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:console.log("************",e),t.selectedType_zone_interventions=e.id,r.t0=e.libelle_zone,r.next="National"===r.t0?5:"Régional"===r.t0?9:11;break;case 5:return t.showRegion=!1,t.selectedDepartements=[],t.selectedRegions=[],r.abrupt("break",11);case 9:return t.showRegion=!0,r.abrupt("break",11);case 11:case"end":return r.stop()}}),r)})))()}},metaInfo:function(){return{items:this.items}}},f=m,h=r(108),v=r(131),_=r.n(v),y=r(200),O=r(233),j=r(338),w=r(1069),x=r(1092),R=r(1070),$=r(79),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-form",{ref:"form",attrs:{enctype:"multipart/form-data"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",{staticClass:"mx-auto mb-5 pl-10 pt-10 pr-10 pb-5"},[r("v-row",[r("v-col",{attrs:{md:"4",lg:"4",sm:"12"}},[r("v-text-field",{attrs:{label:"Dénomination",outlined:"",dense:"",rules:e.rules.nom_structureRules},model:{value:e.model.nom_structure,callback:function(t){e.$set(e.model,"nom_structure",t)},expression:"model.nom_structure"}})],1),e._v(" "),r("v-col",{attrs:{lg:"4",md:"4",sm:"12"}},[r("v-autocomplete",{attrs:{items:e.listtype_structures,rules:e.rules.Structure_services_idRules,outlined:"",dense:"",label:"Type de structure","item-text":"libelle","item-value":"id","return-object":""},on:{change:e.changetype_structure},model:{value:e.selectedtype_structures,callback:function(t){e.selectedtype_structures=t},expression:"selectedtype_structures"}})],1)],1)],1),e._v(" "),r("h2",{staticClass:"mb-5 primary custom-title-h2"},[e._v("Coordonnées siège")]),e._v(" "),r("v-card",{staticClass:"mx-auto mb-5 pl-10 pt-10 pr-10 pb-5"},[r("v-row",[r("v-col",{attrs:{md:"4",lg:"4",sm:"12"}},[r("v-text-field",{attrs:{label:"Adresse structure",outlined:"",dense:"",rules:e.rules.firstnameRules},model:{value:e.model.adresse_structure,callback:function(t){e.$set(e.model,"adresse_structure",t)},expression:"model.adresse_structure"}})],1),e._v(" "),r("v-col",{attrs:{md:"4",lg:"4",sm:"12"}},[r("v-text-field",{attrs:{label:"Téléphone structure",outlined:"",dense:"",rules:e.rules.telephoneRules},model:{value:e.model.telephone_structure,callback:function(t){e.$set(e.model,"telephone_structure",t)},expression:"model.telephone_structure"}})],1),e._v(" "),r("v-col",{attrs:{md:"4",lg:"4",sm:"12"}},[r("v-text-field",{attrs:{label:"Email structure",outlined:"",dense:"",rules:e.rules.emailRules},model:{value:e.model.email_structure,callback:function(t){e.$set(e.model,"email_structure",t)},expression:"model.email_structure"}})],1)],1)],1),e._v(" "),r("v-btn",{staticClass:"mr-4 text-white",attrs:{color:"#1B73E8"},on:{click:e.submitForm}},[e._v("\n      Enregistrer\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{VAutocomplete:y.a,VBtn:O.a,VCard:j.a,VCol:w.a,VForm:x.a,VRow:R.a,VTextField:$.a})},1854:function(e,t,r){"use strict";r.r(t);var n=r(1083),o=r(1643),c={layout:"dashboard",components:{PageHeader:n.default,FormUpdateStructure:o.default},middleware:function(e){var t=e.redirect;if(!(0,e.$hasPermission)("gerer-structures"))return t("/")},mounted:function(){this.$store.dispatch("type-zones/getList"),this.$store.dispatch("typesources/getList"),this.$store.dispatch("type_structures/getList"),this.$store.dispatch("regions/getList"),this.$store.dispatch("departements/getList"),this.$store.dispatch("dimensions/getList")},data:function(){return{headerItems:[{text:"Structures",disabled:!1,to:"/structures",exact:!0},{text:"Detail structure",disabled:!0,to:"/structures/94",exact:!0}]}}},l=r(108),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"custom-container bg-title-grey"},[r("page-header",{attrs:{items:e.headerItems}})],1),e._v(" "),r("div",{staticClass:"custom-container mt-5"},[r("form-update-structure")],1)])}),[],!1,null,"1c0a9344",null);t.default=component.exports;installComponents(component,{PageHeader:r(1083).default})}}]);