(window.webpackJsonp=window.webpackJsonp||[]).push([[294,99,121,143,145],{1083:function(t,e,r){"use strict";r.r(e);var n={props:["items"],data:function(){return{selectedItem:0}},metaInfo:function(){return{items:this.items}}},o=r(108),l=r(131),c=r.n(l),d=(r(8),r(9),r(6),r(3),r(11),r(10),r(12),r(1)),m=(r(80),r(1086),r(77)),v=r(7);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=Object(v.a)(m.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(d.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,h(h({},data),{},{attrs:h(h({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),x=r(0),y=Object(x.j)("v-breadcrumbs__divider","li"),O=r(17);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var k=Object(v.a)(O.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(y,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(_,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),I=r(280),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-breadcrumbs",{staticClass:"pl-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBreadcrumbs:k,VIcon:I.a})},1086:function(t,e,r){var content=r(1087);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("b1bed018",content,!0,{sourceMap:!1})},1087:function(t,e,r){var n=r(14)(!1);n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=n},1090:function(t,e,r){var content=r(1096);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("02dc6a07",content,!0,{sourceMap:!1})},1094:function(t,e,r){"use strict";r.r(e);var n={props:["items"],data:function(){return{selectedItem:0}},metaInfo:function(){return{items:this.items}}},o=(r(1095),r(108)),l=r(131),c=r.n(l),d=r(338),m=r(280),v=r(344),f=r(231),h=r(104),_=r(347),x=r(194),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300",tile:"",flat:""}},[r("v-list",{attrs:{shaped:""}},[r("v-list-item-group",{attrs:{color:"primary"}},t._l(t.items,(function(e,i){return r("v-list-item",{key:i,class:e.link===t.$route.path?"highlighted":"",attrs:{link:"","active-class":"highlighted"},on:{click:function(r){return t.$router.push({path:e.link})}}},[r("v-list-item-icon",{staticClass:"mr-3"},[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-menu",domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1)}),[],!1,null,"79794c14",null);e.default=component.exports;c()(component,{VCard:d.a,VIcon:m.a,VList:v.a,VListItem:f.a,VListItemContent:h.a,VListItemGroup:_.a,VListItemIcon:x.a,VListItemTitle:h.b})},1095:function(t,e,r){"use strict";r(1090)},1096:function(t,e,r){var n=r(14)(!1);n.push([t.i,".highlighted[data-v-79794c14]{background:#197d5c!important}.highlighted[data-v-79794c14],.highlighted .v-list-item__icon .v-icon[data-v-79794c14]{color:#197d5c!important}.text-menu[data-v-79794c14]{font-size:13px!important}",""]),t.exports=n},1270:function(t,e,r){var content=r(1349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("60ded206",content,!0,{sourceMap:!1})},1348:function(t,e,r){"use strict";r(1270)},1349:function(t,e,r){var n=r(14)(!1);n.push([t.i,".border-bottom-small[data-v-bcb62a3a]{border-bottom:1px solid hsla(0,0%,50.2%,.32157)}",""]),t.exports=n},1350:function(t,e,r){var content=r(1458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("cd917744",content,!0,{sourceMap:!1})},1406:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(25),r(3),r(32),r(172)),l={computed:Object(o.b)({listroles:"roles/listroles",headers:"roles/headerroles"}),props:["tab"],metaInfo:function(){return{tab:this.tab}},methods:{visualiserItem:function(t){this.$store.dispatch("roles/getDetail",t),this.$router.push("/roles/detail/"+t.id)},editItem:function(t){this.$store.dispatch("roles/getDetail",t),this.$router.push("/roles/modifier/"+t.id)},deleteItem:function(t){var e=this;this.dialog=!1,this.$store.dispatch("toast/getMessage",{type:"processing",text:"Traitement en cours ..."}),this.$msasApi.$delete("/roles/"+this.activeItem.id).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.dispatch("roles/deleteRole",e.activeItem.id),e.$store.dispatch("toast/getMessage",{type:"success",text:r.data.message||"Suppression réussie"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$store.dispatch("toast/getMessage",{type:"error",text:t||"Echec de la suppression"}),console.log("Code error ++++++: ",t)})).finally((function(){console.log("Requette envoyé ")}))},exporterItem:function(t){this.$store.dispatch("roles/getDetail"),alert("Exporter "+t.id)},visualiser:function(){if(1!=this.selected.length)alert("Veuillez selectionner un element");else{var t=this.selected.map((function(t){return t}))[0];this.$store.dispatch("roles/getDetail",t),this.$router.push("/roles/detail/"+t.id)}},modifier:function(){if(1!=this.selected.length)alert("Veuillez selectionner un element");else{var t=this.selected.map((function(t){return t}))[0];this.$store.dispatch("roles/getDetail",t),this.$router.push("/roles/modifier/"+t.id)}},supprimer:function(){this.selected.length>=1?alert("Supprimer "+this.selected.map((function(t){return t.id}))):alert("Veuillez selectionner un element")},exporter:function(){this.selected.length>=1?alert("Exporter "+this.selected.map((function(t){return t.id}))):alert("Veuillez selectionner un element")},opendialog:function(t){this.dialog=!0,this.activeItem=t}},data:function(){return{dialog:!1,progress:!0,selected:[],search:"",items:[],page:1,totalPages:1,pageCount:"",itemsPerPage:"",path:"",totalItems:0,options:{},selectedItem:0,activeItem:{}}}},c=l,d=(r(1348),r(108)),m=r(131),v=r.n(m),f=r(233),h=r(338),_=r(120),x=r(349),y=r(1069),O=r(1667),C=r(1741),k=r(1064),I=r(280),V=r(76),j=r(344),$=r(231),w=r(104),P=r(342),D=r(1070),T=r(1059),L=r(79),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card-title",{staticClass:"col-6"},[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Rechercher",outlined:"",rounded:"",dense:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-data-table",{staticClass:"flat pt-4",attrs:{headers:t.headers,items:"tout"==t.tab?t.listroles:t.listroles.filter((function(e){return e.status===t.tab})),"item-key":"id",loading:!t.listroles.length,"loading-text":"Loading... Please wait","rows-per-page-items":[10,20,30,40,50],"hide-default-footer":"",search:t.search},scopedSlots:t._u([{key:"top",fn:function(e){var n=e.pagination,o=e.options,l=e.updateOptions;return[r("v-row",{staticClass:"mb-1 border-bottom-small"},[r("v-col",{staticClass:"pb-0 pt-4",attrs:{md:"6",sm:"12",lg:"6"}},[r("div",{staticClass:"row"})]),t._v(" "),r("v-col",{staticClass:"pt-0 pb-2",attrs:{md:"6",sm:"12",lg:"6"}},[r("v-data-footer",{staticClass:"border-top-none margin-none",attrs:{pagination:n,options:o,"items-per-page-text":"$vuetify.dataTable.itemsPerPageText",itemsPerPageText:""},on:{"update:options":l}})],1),t._v(" "),r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"text-h5"},[t._v(" Confirmation ")]),t._v(" "),r("v-card-text",[t._v("Voulez-vous supprimer cet element ?")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary darken-1",text:"",outlined:""},on:{click:function(e){t.dialog=!1}}},[t._v("\r\n              Annuler\r\n            ")]),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:"",outlined:""},on:{click:t.deleteItem}},[t._v("\r\n              Supprimer définitivement\r\n            ")])],1)],1)],1)],1)],1)]}},{key:"item.status",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:t.$getColore(n.status),outlined:""}},[t._v("\r\n        "+t._s(n.status)+"\r\n      ")])]}},{key:"item.permissions",fn:function(e){var n=e.item;return t._l(n.permissions,(function(e){return r("v-chip",{key:e.value,staticClass:"my-1 mr-1",attrs:{color:"primary",small:"",outlined:""}},[t._v("\r\n        "+t._s(e.description)+"\r\n      ")])}))}},{key:"item.actions",fn:function(e){var n=e.item;return[r("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"primary",icon:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),r("v-list",{attrs:{shaped:""}},[r("v-item-group",[r("v-list-item",{staticClass:"custom-v-list-action pl-2 pr-1",attrs:{link:""},on:{click:function(e){return t.editItem(n)}}},[r("v-list-item-title",[r("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-pencil-outline ")]),t._v("Modifier\r\n                ")],1)],1),t._v(" "),t.$hasRole("super_admin")?r("v-list-item",{staticClass:"custom-v-list-action pl-2 pr-1",on:{click:function(e){return t.opendialog(n)}}},[r("v-list-item-title",[r("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{small:""}},"v-icon",t.attrs,!1),t.on),[t._v("\r\n                    mdi-delete-outline ")]),t._v("Supprimer\r\n                ")],1)],1):t._e()],1)],1)],1)]}}],null,!0)})],1)}),[],!1,null,"bcb62a3a",null);e.default=component.exports;v()(component,{VBtn:f.a,VCard:h.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VChip:x.a,VCol:y.a,VDataFooter:O.a,VDataTable:C.a,VDialog:k.a,VIcon:I.a,VItemGroup:V.b,VList:j.a,VListItem:$.a,VListItemTitle:w.b,VMenu:P.a,VRow:D.a,VSpacer:T.a,VTextField:L.a})},1457:function(t,e,r){"use strict";r(1350)},1458:function(t,e,r){var n=r(14)(!1);n.push([t.i,".border-bottom-small[data-v-2ad0d3d4]{border-bottom:1px solid hsla(0,0%,50.2%,.32157)}",""]),t.exports=n},1552:function(t,e,r){"use strict";r.r(e);var n={components:{TableRole:r(1406).default},data:function(){return{tab:null,tabItems:[{title:"Tout",value:"tout"},{title:"Actifs",value:"actif"},{title:"Inactifs",value:"innactif"}],selected:[]}},methods:{goToAddRole:function(){this.$router.push("/roles/addRole")}}},o=(r(1457),r(108)),l=r(131),c=r.n(l),d=r(233),m=r(280),v=r(1074),f=r(1081),h=r(1079),_=r(484),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex border-bottom-solid"},[r("div",[r("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabItems,(function(e){return r("v-tab",{key:e.value,staticClass:"text-normal"},[t._v(" "+t._s(e.title))])})),1)],1),t._v(" "),r("div",{staticClass:"ml-auto p-2"},[r("v-btn",{attrs:{depressed:"",rounded:"",color:"primary"},on:{click:t.goToAddRole}},[r("v-icon",{attrs:{left:""}},[t._v("\n          mdi-plus\n        ")]),t._v("\n        Nouveau rôle\n      ")],1)],1)]),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabItems,(function(t){return r("v-tab-item",{key:t.value},[r("table-role",{attrs:{tab:t.value}})],1)})),1)],1)}),[],!1,null,"2ad0d3d4",null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:m.a,VTab:v.a,VTabItem:f.a,VTabs:h.a,VTabsItems:_.a})},1770:function(t,e,r){"use strict";r.r(e);var n=r(1094),o=r(1083),l=r(1552),c={layout:"dashboard",middleware:function(t){var e=t.redirect;if(!(0,t.$hasPermission)("gerer-roles"))return e("/")},components:{LeftMenu:n.default,PageHeader:o.default,ListRole:l.default},mounted:function(){this.$store.dispatch("roles/getList")},data:function(){return{selectedItem:0,leftmenuItems:[{text:"Roles",icon:"mdi-lock-outline",link:"/roles",position:1},{text:"Permissions",icon:"mdi-lock-outline",link:"/permissions",position:2}],headerItems:[{text:"Liste des rôles",disabled:!0,to:"/roles",exact:!0}]}}},d=r(108),m=r(131),v=r.n(m),f=r(338),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"custom-container bg-title-grey"},[r("page-header",{attrs:{items:t.headerItems}})],1),t._v(" "),r("div",{staticClass:"custom-container"},[r("v-card",{staticClass:"container",attrs:{flat:""}},[r("list-role")],1)],1)])}),[],!1,null,"317e0366",null);e.default=component.exports;v()(component,{PageHeader:r(1083).default}),v()(component,{VCard:f.a})}}]);