(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1611:function(e,t,n){"use strict";n.r(t);var l=n(2),o=(n(25),n(3),n(172)),r={mounted:function(){this.getDetail(this.id)},computed:Object(o.b)({detailenquete:"enquetes/detailenquete"}),data:function(){return{id:this.$nuxt._route.params.id}},methods:{getDetail:function(e){var t=this;this.progress=!0,this.$msasApi.$get("/enquetes/"+e).then(function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Detail ++++++++++",n),t.$store.dispatch("enquetes/getDetail",n.data);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var n,l,o,r;t.$toast.error(null==e||null===(n=e.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.message).goAway(3e3),console.log("Code error ++++++: ",null==e||null===(o=e.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.message)})).finally((function(){console.log("Requette envoyé ")}))},submitForm:function(){alert("Formulaire soumis")},retour:function(){this.$router.push("/enquetes")}}},d=r,c=n(108),_=n(131),v=n.n(_),m=n(338),f=n(120),y=n(349),C=n(1069),h=n(1070),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"custom-card-user border-grey"},[n("v-card-text",[n("v-row",[n("v-col",{attrs:{md:"12",sm:"12",lg:"12","text-md-left":""}},[n("div",{staticClass:"row"},[e.detailenquete.annee&&e.detailenquete.annee[0]?n("div",{staticClass:"col-md-4 my-0 py-0"},[n("p",{staticClass:"info-profil"},[n("span",[e._v("Année : ")]),e._v(e._s(e.detailenquete.annee[0].libelle))])]):e._e(),e._v(" "),e.detailenquete.structure&&e.detailenquete.structure[0]?n("div",{staticClass:"col-md-4 my-0 py-0"},[n("p",{staticClass:"info-profil"},[n("span",[e._v("Structure : ")]),e._v(e._s(e.detailenquete.structure[0].nom_structure))])]):e._e(),e._v(" "),e.detailenquete.region&&e.detailenquete.region[0]?n("div",{staticClass:"col-md-4 my-0 py-0"},[n("p",{staticClass:"info-profil"},[n("span",[e._v("Région : ")]),e._v(e._s(e.detailenquete.region[0].nom_region))])]):e._e(),e._v(" "),e.detailenquete.monnaie&&e.detailenquete.monnaie[0]?n("div",{staticClass:"col-md-4 my-0 py-0"},[n("p",{staticClass:"info-profil"},[n("span",[e._v("Monnaie : ")]),e._v(e._s(e.detailenquete.monnaie[0].libelle))])]):e._e(),e._v(" "),e.detailenquete.dimension&&e.detailenquete.dimension[0]?n("div",{staticClass:"col-md-4 my-0 py-0"},[n("p",{staticClass:"info-profil"},[n("span",[e._v("Dimension : ")]),e._v(e._s(e.detailenquete.dimension[0].libelle_dimension))])]):e._e(),e._v(" "),e.detailenquete.numero_agrement?n("div",{staticClass:"col-md-4 my-0 py-0"},[n("p",{staticClass:"info-profil"},[n("span",[e._v("Numéro autorisation : ")]),e._v(e._s(e.detailenquete.numero_agrement))])]):e._e(),e._v(" "),e.detailenquete.telephone_enquete?n("div",{staticClass:"col-md-4 my-0 py-0"},[n("p",{staticClass:"info-profil"},[n("span",[e._v("Téléphone : ")]),e._v(e._s(e.detailenquete.telephone_enquete))])]):e._e(),e._v(" "),e.detailenquete.email_enquete?n("div",{staticClass:"col-md-4 my-0 py-0"},[n("p",{staticClass:"info-profil"},[n("span",[e._v("Email : ")]),e._v(e._s(e.detailenquete.email_enquete))])]):e._e(),e._v(" "),e.detailenquete.type_zone_interventions&&e.detailenquete.type_zone_interventions[0]?n("div",{staticClass:"col-md-4 my-0 py-0"},[n("p",{staticClass:"info-profil"},[n("span",[e._v("Zone d'intervention : ")]),e._v(e._s(e.detailenquete.type_zone_interventions[0].libelle_zone))])]):e._e(),e._v(" "),e.detailenquete.sourc&&e.detailenquete.source[0]?n("div",{staticClass:"col-md-4 my-0 py-0"},[n("p",{staticClass:"info-profil"},[n("span",[e._v("Source de financement : ")]),e._v(e._s(e.detailenquete.source[0].libelle_source))])]):e._e(),e._v(" "),e.detailenquete.status?n("div",{staticClass:"col-md-4 my-0 py-0"},[n("p",{staticClass:"info-profil"},[n("span",[e._v("Status: ")]),e._v(" "),n("v-chip",{staticClass:"my-1 mr-1",attrs:{color:("a_valider"==e.detailenquete.status?"primary":"rejete"==e.detailenquete.status&&"error")||"brouillon"==e.detailenquete.status&&"orange"||"publie"==e.detailenquete.status&&"green",small:"",outlined:""}},[e._v("\n                    "+e._s(("a_valider"==e.detailenquete.status?"A valider":"rejete"==e.detailenquete.status&&"Rejeté")||"brouillon"==e.detailenquete.status&&"Brouillon"||"publie"==e.detailenquete.status&&"Publié")+"\n                  ")])],1),e._v(" "),"rejete"==e.detailenquete.status?n("p",{staticClass:"info-profil"},[n("span",[e._v("Motif du rejet : ")]),e._v(e._s(e.detailenquete.motif_rejet))]):e._e()]):e._e()])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VCard:m.a,VCardText:f.b,VChip:y.a,VCol:C.a,VRow:h.a})}}]);