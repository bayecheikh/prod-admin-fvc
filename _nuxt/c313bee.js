(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1654:function(e,t,r){"use strict";r.r(t);var l=r(172),d={computed:Object(l.b)({detailUsager:"usagers/detailusager"}),data:function(){return{}},methods:{submitForm:function(){alert("Formulaire soumis")},retour:function(){this.$router.push("/usagers")}}},n=r(108),o=r(131),_=r.n(o),c=r(341),v=r(338),m=r(120),f=r(1069),U=r(1070),component=Object(n.a)(d,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-card",{staticClass:"custom-card-user border-grey"},[l("v-card-text",[l("v-row",[l("v-col",{attrs:{md:"3",sm:"12",lg:"3","text-md-center":""}},[l("div",{staticClass:"headline"},[e.detailUsager.avatar?l("v-avatar",{staticStyle:{border:"solid 2px #d8d8d8"},attrs:{tile:"",size:"150px"}},[l("img",{attrs:{src:e.detailUsager.avatar,alt:"Avatar"}})]):l("v-avatar",{staticStyle:{border:"solid 2px #d8d8d8"},attrs:{tile:"",size:"100px"}},[l("img",{attrs:{src:r(243),alt:"Cheikh Gueye"}})])],1)]),e._v(" "),l("v-col",{attrs:{md:"9",sm:"12",lg:"9","text-md-left":""}},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6"},[l("h3",{staticClass:"mb-4"},[e._v(e._s(e.detailUsager.firstname+" "+e.detailUsager.lastname))]),e._v(" "),l("p",{staticClass:"info-profil mb-4"},[l("span",[e._v("Date & lieu de naissance :\n                    ")]),e._v(e._s(e.detailUsager.user_details&&e.detailUsager.user_details.date_of_birth)+"\n                ")]),e._v(" "),l("p",{staticClass:"info-profil mb-4"},[l("span",[e._v("Adresse : ")]),e._v(e._s(e.detailUsager.user_details&&e.detailUsager.user_details.address))]),e._v(" "),l("p",{staticClass:"info-profil mb-4"},[l("span",[e._v("Téléphone : ")]),e._v(e._s(e.detailUsager.telephone))]),e._v(" "),l("p",{staticClass:"info-profil mb-4"},[l("span",[e._v("Email : ")]),e._v(e._s(e.detailUsager.email))])]),e._v(" "),l("div",{staticClass:"col-md-6"},[l("p",{staticClass:"info-profil mb-4"},[l("span",[e._v("Profession :\n                    ")]),e._v(e._s(e.detailUsager.user_details&&e.detailUsager.user_details.fonction)+"\n                ")]),e._v(" "),l("p",{staticClass:"info-profil mb-4"},[l("span",[e._v("Nationnalité : ")]),e._v(e._s(e.detailUsager.user_details&&e.detailUsager.user_details.nationality))]),e._v(" "),l("p",{staticClass:"info-profil mb-4"},[l("span",[e._v("Lieu de naissance : ")]),e._v(e._s(e.detailUsager.user_details&&e.detailUsager.user_details.place_of_birth))]),e._v(" "),l("p",{staticClass:"info-profil mb-4"},[l("span",[e._v("Type de pièce : ")]),e._v(e._s(e.detailUsager.user_details&&e.detailUsager.user_details.type_identification))]),e._v(" "),l("p",{staticClass:"info-profil mb-4"},[l("span",[e._v("Numéro de pièce : ")]),e._v(e._s(e.detailUsager.user_details&&e.detailUsager.user_details.numero_identification))])])])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{VAvatar:c.a,VCard:v.a,VCardText:m.b,VCol:f.a,VRow:U.a})}}]);