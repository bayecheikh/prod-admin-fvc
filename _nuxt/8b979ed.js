(window.webpackJsonp=window.webpackJsonp||[]).push([[291,91,108,121,138],{1082:function(e,t,r){var content=r(1089);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("7705e0be",content,!0,{sourceMap:!1})},1083:function(e,t,r){"use strict";r.r(t);var n={props:["items"],data:function(){return{selectedItem:0}},metaInfo:function(){return{items:this.items}}},o=r(108),l=r(131),c=r.n(l),d=(r(8),r(9),r(6),r(3),r(11),r(10),r(12),r(1)),m=(r(80),r(1086),r(77)),f=r(7);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=Object(f.a)(m.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(d.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,v(v({},data),{},{attrs:v(v({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),y=r(0),j=Object(y.j)("v-breadcrumbs__divider","li"),_=r(17);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var x=Object(f.a)(_.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(j,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(O,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}}),P=r(280),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-breadcrumbs",{staticClass:"pl-0",attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBreadcrumbs:x,VIcon:P.a})},1085:function(e,t,r){"use strict";r.r(t);var n={name:"Notification",props:["message","color"]},o=(r(1088),r(108)),l=r(131),c=r.n(l),d=r(1080),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-alert",{attrs:{dense:"",text:"",type:e.color,dismissible:""}},[e._v("\n    "+e._s(e.message)+"\n")])}),[],!1,null,"608ba8f8",null);t.default=component.exports;c()(component,{VAlert:d.a})},1086:function(e,t,r){var content=r(1087);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("b1bed018",content,!0,{sourceMap:!1})},1087:function(e,t,r){var n=r(14)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},1088:function(e,t,r){"use strict";r(1082)},1089:function(e,t,r){var n=r(14)(!1);n.push([e.i,".bottom-fixed[data-v-608ba8f8]{position:fixed;left:0;bottom:50%}",""]),e.exports=n},1092:function(e,t,r){"use strict";var n=r(1),o=(r(29),r(43),r(241),r(6),r(3),r(10),r(62),r(71),r(8),r(9),r(11),r(12),r(7)),l=r(110),c=r(72);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},1633:function(e,t,r){"use strict";r.r(t);r(8),r(9),r(6),r(11),r(10),r(12);var n=r(1),o=(r(32),r(3),r(1085)),l=r(172);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={components:{Notification:o.default},mounted:function(){this.model.id=this.detailregion.id,this.model.nom_region=this.detailregion.nom_region,this.model.slug=this.detailregion.slug,this.model.latitude=this.detailregion.latitude,this.model.longitude=this.detailregion.longitude,this.model.svg=this.detailregion.svg,this.selected=this.detailregion.departements},computed:Object(l.b)({detailregion:"regions/detailregion",listdepartements:"departements/listdepartements"}),data:function(){var e;return e={loading:!1,message:null,color:null,valid:!0,search:"",selected:[]},Object(n.a)(e,"search",""),Object(n.a)(e,"selectedItem",0),Object(n.a)(e,"headers",[{text:"Nom",align:"start",sortable:!0,value:"nom_departement"},{text:"Slug",value:"slug"}]),Object(n.a)(e,"valid",!0),Object(n.a)(e,"model",{id:null,name:"",description:""}),Object(n.a)(e,"rules",{nameRules:[function(e){return!!e||"Prénom est obligatoire"},function(e){return e&&e.length<=50||"Prénom doit etre inférieur à 20 caratères"}],descriptionRules:[function(e){return!!e||"Nom est obligatoire"}]}),e},methods:{submitForm:function(){var e=this,t=this.$refs.form.validate(),r=this.selected.map((function(e){return e.id})),n=this.model.id;console.log("Donées formulaire ++++++ : ",d(d({},this.model),{},{departements:r})),t&&this.$msasApi.put("/regions/"+n,d(d({},this.model),{},{departements:r})).then((function(t){e.$store.dispatch("toast/getMessage",{type:"success",text:t.data.message||"Modification réussie"}),e.$router.push("/regions")})).catch((function(t){console.log("Code error ++++++: ",t),e.$store.dispatch("toast/getMessage",{type:"error",text:t||"Echec de l'ajout "})})).finally((function(){e.loading=!1,console.log("Requette envoyé")}))},resetForm:function(){this.$refs.form.reset()},resetValidationForm:function(){this.$refs.form.resetValidation()}}},f=r(108),h=r(131),v=r.n(h),O=r(233),y=r(120),j=r(1069),_=r(1741),w=r(1092),x=r(1070),P=r(79),$=r(1075),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-form",{ref:"form",staticClass:"text-sm-left",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{md:"6",lg:"6",sm:"12"}},[r("v-text-field",{attrs:{label:"Nom",outlined:"",dense:"",rules:e.rules.nom_regionRules},model:{value:e.model.nom_region,callback:function(t){e.$set(e.model,"nom_region",t)},expression:"model.nom_region"}})],1),e._v(" "),r("v-col",{attrs:{md:"6",lg:"6",sm:"12"}},[r("v-text-field",{attrs:{label:"Slug",outlined:"",dense:"",rules:e.rules.slugRules},model:{value:e.model.slug,callback:function(t){e.$set(e.model,"slug",t)},expression:"model.slug"}})],1),e._v(" "),r("v-col",{attrs:{md:"6",lg:"6",sm:"12"}},[r("v-text-field",{attrs:{label:"Latitude",outlined:"",dense:"",rules:e.rules.latitudeRules},model:{value:e.model.latitude,callback:function(t){e.$set(e.model,"latitude",t)},expression:"model.latitude"}})],1),e._v(" "),r("v-col",{attrs:{md:"6",lg:"6",sm:"12"}},[r("v-text-field",{attrs:{label:"Longitude",outlined:"",dense:"",rules:e.rules.longitudeRules},model:{value:e.model.longitude,callback:function(t){e.$set(e.model,"longitude",t)},expression:"model.longitude"}})],1),e._v(" "),r("v-col",{attrs:{md:"12",lg:"12",sm:"12"}},[r("v-textarea",{attrs:{label:"Code SVG",outlined:"",dense:"",rules:e.rules.svgRules},model:{value:e.model.svg,callback:function(t){e.$set(e.model,"svg",t)},expression:"model.svg"}})],1)],1),e._v(" "),r("v-row",{staticClass:"my-0"},[r("v-col",{staticClass:"my-0 py-0",attrs:{md:"12",lg:"12",sm:"12"}},[[r("v-card-title",{staticClass:"pl-0 pr-0"},[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Rechercher une departement",outlined:"",dense:"","hide-details":"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.listdepartements,loading:!e.listdepartements.length,"loading-text":"Loading... Please wait","single-select":e.singleSelect,"item-key":"nom_departement","show-select":"",search:e.search},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})]],2)],1),e._v(" "),r("v-btn",{staticClass:"mr-4 text-white mt-4",attrs:{loading:e.loading,disabled:!e.valid,depressed:"",color:"#1B73E8"},on:{click:e.submitForm}},[e._v("\r\n      Enregistrer\r\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:O.a,VCardTitle:y.c,VCol:j.a,VDataTable:_.a,VForm:w.a,VRow:x.a,VTextField:P.a,VTextarea:$.a})},1847:function(e,t,r){"use strict";r.r(t);var n=r(1083),o=r(1633),l={layout:"dashboard",components:{PageHeader:n.default,FormUpdateRegion:o.default},middleware:function(e){var t=e.redirect;if(!(0,e.$hasPermission)("gerer-regions"))return t("/")},mounted:function(){this.$store.dispatch("departements/getList")},data:function(){return{headerItems:[{text:"Régions",disabled:!1,to:"/regions",exact:!0},{text:"Nouveau région",disabled:!1,to:"/regions/addregion",exact:!0}],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),date1:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),date2:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),date3:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),menu1:!1,menu2:!1,menu3:!1,modal:!1,regions:["Sperviseur national"],localisations:["Thiès","Dakar"]}}},c=r(108),d=r(131),m=r.n(d),f=r(338),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"custom-container bg-title-grey"},[r("page-header",{attrs:{items:e.headerItems}})],1),e._v(" "),r("div",{staticClass:"custom-container mt-5"},[r("v-card",{staticClass:"container pl-10 pt-10 pb-10 pr-10",attrs:{flat:""}},[r("form-update-region")],1)],1)])}),[],!1,null,"1122313a",null);t.default=component.exports;m()(component,{PageHeader:r(1083).default}),m()(component,{VCard:f.a})}}]);