(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1602:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(25),r(3),r(172)),l={mounted:function(){this.getDetail(this.id)},computed:Object(o.b)({detaildemande:"demandes/detaildemande"}),data:function(){return{id:this.$nuxt._route.params.id}},methods:{submitForm:function(){alert("Formulaire soumis")},retour:function(){this.$router.push("/demandes")},getDetail:function(t){var e=this;this.progress=!0,this.$msasApi.$get("/users/"+t).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Detail ++++++++++",r),e.$store.dispatch("demandes/getDetail",r.data);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var r,n,o,l;e.$toast.error(null==t||null===(r=t.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message).goAway(3e3),console.log("Code error ++++++: ",null==t||null===(o=t.response)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.message)})).finally((function(){console.log("Requette envoyé ")}))}}},d=l,c=r(108),m=r(131),v=r.n(m),f=r(341),_=r(338),h=r(120),C=r(349),w=r(1069),x=r(1070),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"custom-card-user border-grey"},[n("v-card-text",[n("v-row",[n("v-col",{attrs:{md:"3",sm:"12",lg:"3","text-md-center":""}},[n("div",{staticClass:"headline"},[t.detaildemande.avatar?n("v-avatar",{staticStyle:{border:"solid 2px #d8d8d8"},attrs:{tile:"",size:"150px"}},[n("img",{attrs:{src:t.detaildemande.avatar,alt:"Avatar"}})]):n("v-avatar",{attrs:{size:"100px"}},[n("img",{attrs:{src:r(243),alt:"Cheikh Gueye"}})])],1)]),t._v(" "),n("v-col",{attrs:{md:"9",sm:"12",lg:"9","text-md-left":""}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 border-left"},[n("p",{staticClass:"info-profil mb-4"},[n("span",[t._v("Prénom: ")]),t._v(t._s(t.detaildemande.firstname))]),t._v(" "),n("p",{staticClass:"info-profil mb-4"},[n("span",[t._v("Nom: ")]),t._v(t._s(t.detaildemande.lastname))]),t._v(" "),n("p",{staticClass:"info-profil mb-4"},[n("span",[t._v("Email : ")]),t._v(t._s(t.detaildemande.email))]),t._v(" "),n("p",{staticClass:"info-profil mb-4"},[n("span",[t._v("Téléphone : ")]),t._v(t._s(t.detaildemande.telephone))]),t._v(" "),n("p",{staticClass:"info-profil mb-4"},[n("span",[t._v("Profil : ")]),t._v(" "),t._l(t.detaildemande.profiles,(function(e){return n("v-chip",{key:e.id,staticClass:"my-1 mr-1",attrs:{color:"primary",small:"",outlined:""}},[t._v("\n                    "+t._s(e.description)+"\n                  ")])}))],2)])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAvatar:f.a,VCard:_.a,VCardText:h.b,VChip:C.a,VCol:w.a,VRow:x.a})}}]);