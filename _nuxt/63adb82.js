(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1267:function(t,e,r){var content=r(1340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("5763b888",content,!0,{sourceMap:!1})},1339:function(t,e,r){"use strict";r(1267)},1340:function(t,e,r){var n=r(14)(!1);n.push([t.i,".border-bottom-small[data-v-a24116b8]{border-bottom:1px solid hsla(0,0%,50.2%,.32157)}",""]),t.exports=n},1403:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(25),r(3),r(32),r(172)),l={computed:Object(o.b)({listpermissions:"permissions/listpermissions",headers:"permissions/headerpermissions"}),props:["tab"],metaInfo:function(){return{tab:this.tab}},methods:{visualiserItem:function(t){this.$store.dispatch("permissions/getDetail",t),this.$router.push("/permissions/detail/"+t.id)},editItem:function(t){this.$store.dispatch("permissions/getDetail",t),this.$router.push("/permissions/modifier/"+t.id)},deleteItem:function(t){var e=this;this.dialog=!1,this.$store.dispatch("toast/getMessage",{type:"processing",text:"Traitement en cours ..."}),this.$msasApi.$delete("/permissions/"+this.activeItem.id).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.dispatch("permissions/deletePermission",e.activeItem.id),e.$store.dispatch("toast/getMessage",{type:"success",text:r.data.message||"Suppression réussie"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$store.dispatch("toast/getMessage",{type:"error",text:t||"Echec de la suppression"}),console.log("Code error ++++++: ",t)})).finally((function(){console.log("Requette envoyé ")}))},exporterItem:function(t){alert("Exporter "+t.id)},visualiser:function(){if(1!=this.selected.length)alert("Veuillez selectionner un element");else{var t=this.selected.map((function(t){return t}))[0];this.$store.commit("permissions/initdetail",t),this.$router.push("/permissions/detail/"+t.id)}},modifier:function(){if(1!=this.selected.length)alert("Veuillez selectionner un element");else{var t=this.selected.map((function(t){return t}))[0];this.$store.commit("permissions/initdetail",t),this.$router.push("/permissions/modifier/"+t.id)}},supprimer:function(){this.selected.length>=1?alert("Supprimer "+this.selected.map((function(t){return t.id}))):alert("Veuillez selectionner un element")},exporter:function(){this.selected.length>=1?alert("Exporter "+this.selected.map((function(t){return t.id}))):alert("Veuillez selectionner un element")},opendialog:function(t){this.dialog=!0,this.activeItem=t}},data:function(){return{dialog:!1,progress:!0,selected:[],search:"",items:[],page:1,totalPages:1,pageCount:"",itemsPerPage:"",path:"",totalItems:0,options:{},selectedItem:0,activeItem:{}}}},c=l,d=(r(1339),r(108)),m=r(131),v=r.n(m),h=r(233),f=r(338),_=r(120),x=r(1069),V=r(1667),C=r(1741),I=r(1064),$=r(280),k=r(76),y=r(344),w=r(231),P=r(104),T=r(342),M=r(1070),S=r(1059),R=r(79),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card-title",{staticClass:"col-6"},[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Rechercher",outlined:"",rounded:"",dense:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-data-table",{staticClass:"flat pt-4",attrs:{headers:t.headers,items:"tout"==t.tab?t.listpermissions:t.listpermissions.filter((function(e){return e.status===t.tab})),"item-key":"id","items-per-page":"5",loading:!t.listpermissions.length,"loading-text":"Loading... Please wait","rows-per-page-items":[10,20,30,40,50],"hide-default-footer":"",search:t.search},scopedSlots:t._u([{key:"top",fn:function(e){var n=e.pagination,o=e.options,l=e.updateOptions;return[r("v-row",{staticClass:"mb-1 border-bottom-small"},[r("v-col",{staticClass:"pb-0 pt-4",attrs:{md:"6",sm:"12",lg:"6"}},[r("div",{staticClass:"row"})]),t._v(" "),r("v-col",{staticClass:"pt-0 pb-2",attrs:{md:"6",sm:"12",lg:"6"}},[r("v-data-footer",{staticClass:"border-top-none margin-none",attrs:{pagination:n,options:o,"items-per-page-text":"$vuetify.dataTable.itemsPerPageText",itemsPerPageText:""},on:{"update:options":l}})],1),t._v(" "),r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"text-h5"},[t._v(" Confirmation ")]),t._v(" "),r("v-card-text",[t._v("Voulez-vous supprimer cet element ?")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary darken-1",text:"",outlined:""},on:{click:function(e){t.dialog=!1}}},[t._v("\r\n              Annuler\r\n            ")]),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:"",outlined:""},on:{click:t.deleteItem}},[t._v("\r\n              Supprimer définitivement\r\n            ")])],1)],1)],1)],1)],1)]}},{key:"item.actions",fn:function(e){var n=e.item;return[r("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"primary",icon:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),r("v-list",{attrs:{shaped:""}},[r("v-item-group",[r("v-list-item",{staticClass:"custom-v-list-action pl-2 pr-1",attrs:{link:""},on:{click:function(e){return t.editItem(n)}}},[r("v-list-item-title",[r("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-pencil-outline ")]),t._v("Modifier\r\n                ")],1)],1),t._v(" "),t.$hasRole("super_admin")?r("v-list-item",{staticClass:"custom-v-list-action pl-2 pr-1",on:{click:function(e){return t.opendialog(n)}}},[r("v-list-item-title",[r("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{small:""}},"v-icon",t.attrs,!1),t.on),[t._v("\r\n                    mdi-delete-outline ")]),t._v("Supprimer\r\n                ")],1)],1):t._e()],1)],1)],1)]}}],null,!0)})],1)}),[],!1,null,"a24116b8",null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:f.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:x.a,VDataFooter:V.a,VDataTable:C.a,VDialog:I.a,VIcon:$.a,VItemGroup:k.b,VList:y.a,VListItem:w.a,VListItemTitle:P.b,VMenu:T.a,VRow:M.a,VSpacer:S.a,VTextField:R.a})}}]);