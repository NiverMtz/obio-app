(this["webpackJsonpobio-app"]=this["webpackJsonpobio-app"]||[]).push([[0],{35:function(e,c,s){},36:function(e,c,s){"use strict";s.r(c);var t=s(1),i=s.n(t),a=s(20),r=s.n(a),n=s(4),o=s(3),l=(s(16),s.p+"static/media/user-solid.93b18c33.svg"),d=s.p+"static/media/banner.e6022c15.png",j=s(0),b=function(){return Object(j.jsxs)("div",{className:"yaaa",children:[Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)(n.b,{id:"prod",className:"link-mobile",to:"/login",children:[Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsx)("p",{children:"Soy Productor"})]})}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)(n.b,{id:"categ",className:"grid-prod",to:"/login",children:[Object(j.jsxs)("div",{className:"row-a",children:[Object(j.jsxs)("div",{className:"row1",children:[Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsx)("p",{children:"Caf\xe9"})]}),Object(j.jsxs)("div",{className:"row2",children:[Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsx)("p",{children:"Catego"})]})]}),Object(j.jsxs)("div",{className:"row-b",children:[Object(j.jsxs)("div",{className:"row3",children:[Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsx)("p",{children:"Catego"})]}),Object(j.jsxs)("div",{className:"row3",children:[Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsx)("p",{children:"Catego"})]})]})]})}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(n.b,{id:"categ",className:"link-mobile",to:"/login",children:Object(j.jsxs)("div",{className:"row-a",children:[Object(j.jsxs)("div",{className:"row1",children:[Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsx)("p",{children:"Catego"})]}),Object(j.jsxs)("div",{className:"row2",children:[Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsx)("p",{children:"Catego"})]})]})})}),Object(j.jsxs)("section",{class:"header",children:[Object(j.jsx)("img",{src:d,alt:""}),Object(j.jsx)("p",{children:"Es OBIO. Conservar la relaci\xf3n entre la producci\xf3n consciente, el respeto a la biodiversidad y el comercio justo."})]})]})},m=s.p+"static/media/logo.5478020d.png",u=s.p+"static/media/shopping-bag-solid.64e66944.svg",p=function(){return Object(j.jsxs)("div",{className:"navigation",children:[Object(j.jsx)(n.b,{to:"/",children:Object(j.jsx)("img",{src:m,alt:""})}),Object(j.jsxs)("form",{action:"",children:[Object(j.jsx)("input",{type:"text",name:"",id:"",placeholder:"Buscar productos..."}),Object(j.jsx)("button",{type:"submit",name:"",id:""})]}),Object(j.jsxs)("div",{className:"navigation-action",children:[Object(j.jsx)(n.b,{className:"link-mobile",to:"/bag",children:Object(j.jsx)("img",{src:u,alt:""})}),Object(j.jsx)(n.b,{className:"link-mobile",to:"/login",children:Object(j.jsx)("img",{src:l,alt:""})}),Object(j.jsx)(n.b,{className:"link-mobile",to:"/login",children:Object(j.jsx)("img",{src:l,alt:""})})]})]})},O=s.p+"static/media/home-solid.831db11d.svg",x=function(){return Object(o.f)(),Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsxs)(n.b,{className:"link-mobile",to:"/",children:[Object(j.jsx)("img",{src:O,alt:""}),Object(j.jsx)("p",{children:"Inicio"})]}),Object(j.jsxs)(n.b,{className:"link-mobile",to:"/products",children:[Object(j.jsx)("img",{src:u,alt:""}),Object(j.jsx)("p",{children:"Productos"})]}),Object(j.jsxs)(n.b,{className:"link-mobile",to:"/bag",children:[Object(j.jsx)("img",{src:u,alt:""}),Object(j.jsx)("p",{children:"Bolsa"})]}),Object(j.jsxs)(n.b,{className:"link-mobile",to:"/login",children:[Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsx)("p",{children:"Login"})]}),Object(j.jsxs)(n.b,{className:"link-mobile",to:"/login",children:[Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsx)("p",{children:"Soy Productor"})]})]})},h=s(13),g=s(22),v=(s(32),g.a.initializeApp({apiKey:"AIzaSyB6fBBBYokB2huGlBX0PPZMIAkJ_-C0r90",authDomain:"creec-fd0e3.firebaseapp.com",databaseURL:"https://creec-fd0e3-default-rtdb.firebaseio.com",projectId:"creec-fd0e3",storageBucket:"creec-fd0e3.appspot.com",messagingSenderId:"859819677419",appId:"1:859819677419:web:c555cdc9ad0609fab210ae"}).auth()),N=function(){var e=Object(o.f)(),c=Object(t.useState)(""),s=Object(h.a)(c,2),i=s[0],a=s[1],r=Object(t.useState)(""),n=Object(h.a)(r,2),l=n[0],d=n[1],b=Object(t.useState)(null),m=Object(h.a)(b,2),u=m[0],p=m[1];return Object(j.jsx)("div",{className:"yaaa",children:Object(j.jsxs)("div",{className:"row mt-5",children:[Object(j.jsx)("div",{className:"col"}),Object(j.jsxs)("div",{className:"col",children:[Object(j.jsxs)("form",{onSubmit:function(c){c.preventDefault(),v.createUserWithEmailAndPassword(i,l).then((function(c){e.push("/")})).catch((function(e){"auth/invalid-email"===e.code&&p("Formato de email incorrecto"),"auth/weak-password"===e.code&&p("Password debe tener 6 caracteres o m\xe1s")}))},className:"form-group d-grid",children:[Object(j.jsx)("input",{onChange:function(e){a(e.target.value)},className:"form-control",type:"email",placeholder:"Intro email"}),Object(j.jsx)("input",{onChange:function(e){d(e.target.value)},className:"form-control mt-4",type:"password",placeholder:"Intro password"}),Object(j.jsx)("input",{className:"btn btn-dark mt-4",type:"submit",value:"Registrar usuario"})]}),Object(j.jsxs)("div",{className:"d-grid",children:[Object(j.jsx)("button",{onClick:function(){v.signInWithEmailAndPassword(i,l).then((function(c){e.push("/")})).catch((function(e){"auth/wrong-password"===e.code&&p("Password incorrecta")}))},className:"btn btn-success mt-4",children:"Iniciar sesi\xf3n"}),null!=u?Object(j.jsx)("div",{className:"d-grid mt-4 alert alert-dark",children:u}):Object(j.jsx)("div",{})]})]}),Object(j.jsx)("div",{className:"col"})]})})},f="Me lo llevo",w=function(){return Object(j.jsxs)("div",{className:"yaaa",children:[Object(j.jsxs)("div",{className:"products-card",children:[Object(j.jsx)("div",{className:"products-image",children:Object(j.jsx)("img",{src:m,alt:""})}),Object(j.jsxs)("div",{className:"products-description",children:[Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laboriosam dolor molestias facilis obcaecati ipsum saepe veniam itaque, cupiditate praesentium tenetur accusamus hic distinctio quod, in ea. Debitis, atque minus."}),Object(j.jsx)(n.b,{to:"",children:Object(j.jsx)("button",{type:"submit",name:"",id:"",children:f})})]})]}),Object(j.jsxs)("div",{className:"products-card",children:[Object(j.jsx)("div",{className:"products-image",children:Object(j.jsx)("img",{src:m,alt:""})}),Object(j.jsxs)("div",{className:"products-description",children:[Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laboriosam dolor molestias facilis obcaecati ipsum saepe veniam itaque, cupiditate praesentium tenetur accusamus hic distinctio quod, in ea. Debitis, atque minus."}),Object(j.jsx)(n.b,{to:"",children:Object(j.jsx)("button",{type:"submit",name:"",id:"",children:f})})]})]}),Object(j.jsxs)("div",{className:"products-card",children:[Object(j.jsx)("div",{className:"products-image",children:Object(j.jsx)("img",{src:m,alt:""})}),Object(j.jsxs)("div",{className:"products-description",children:[Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laboriosam dolor molestias facilis obcaecati ipsum saepe veniam itaque, cupiditate praesentium tenetur accusamus hic distinctio quod, in ea. Debitis, atque minus."}),Object(j.jsx)(n.b,{to:"",children:Object(j.jsx)("button",{type:"submit",name:"",id:"",children:f})})]})]}),Object(j.jsxs)("div",{className:"products-card",children:[Object(j.jsx)("div",{className:"products-image",children:Object(j.jsx)("img",{src:m,alt:""})}),Object(j.jsxs)("div",{className:"products-description",children:[Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laboriosam dolor molestias facilis obcaecati ipsum saepe veniam itaque, cupiditate praesentium tenetur accusamus hic distinctio quod, in ea. Debitis, atque minus."}),Object(j.jsx)(n.b,{to:"",children:Object(j.jsx)("button",{type:"submit",name:"",id:"",children:f})})]})]}),Object(j.jsxs)("div",{className:"products-card",children:[Object(j.jsx)("div",{className:"products-image",children:Object(j.jsx)("img",{src:m,alt:""})}),Object(j.jsxs)("div",{className:"products-description",children:[Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laboriosam dolor molestias facilis obcaecati ipsum saepe veniam itaque, cupiditate praesentium tenetur accusamus hic distinctio quod, in ea. Debitis, atque minus."}),Object(j.jsx)(n.b,{to:"",children:Object(j.jsx)("button",{type:"submit",name:"",id:"",children:f})})]})]})]})},k=function(){return Object(j.jsx)("div",{className:"yaaa",children:"Bag"})},y=function(){return Object(j.jsx)("div",{children:"Productor"})};var C=function(){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)(n.a,{children:[Object(j.jsx)(p,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:b}),Object(j.jsx)(o.a,{path:"/products",component:w}),Object(j.jsx)(o.a,{path:"/bag",component:k}),Object(j.jsx)(o.a,{path:"/login",component:N}),Object(j.jsx)(o.a,{path:"/productor",component:y})]}),Object(j.jsx)(x,{})]})})};s(34),s(35);r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.194f6038.chunk.js.map