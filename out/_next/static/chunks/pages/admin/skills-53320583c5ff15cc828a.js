_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"86tX":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/skills",function(){return e("DeNz")}])},DeNz:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return b}));var a=e("nKUr"),i=e("cpVT"),o=e("w5DE"),r=e("R/WZ"),c=(e("GrTy"),e("20a2")),p=e("pFF/"),s=(e("dx4w"),e("UaHP"),e("5CWz")),d=e("q1tI"),l=e.n(d),u=e("U6Mw"),g=e("Mk/8"),f=Object(r.a)((function(n){return{root:{width:"100%",display:"flex",float:"right",backgroundColor:n.palette.background.paper},list:Object(i.a)({marginTop:"8vh",width:"87.5%"},n.breakpoints.up("sm"),{marginLeft:n.spacing(30)}),filter:Object(i.a)({},n.breakpoints.up("sm"),{marginLeft:n.spacing(30)}),inline:{display:"inline"},log:{display:"flex",flexDirection:"column",float:"right"},toolbar:{width:"100%"},icon:{marginRight:n.spacing(2)},heroContent:{backgroundColor:n.palette.background.paper,padding:n.spacing(8,0,6)},heroButtons:{marginTop:n.spacing(4)},cardGrid:{paddingTop:n.spacing(8),paddingBottom:n.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:n.palette.background.paper,padding:n.spacing(6)}}}));function b(){var n=f(),t=Object(g.b)(),e=(t.user,t.type,Object(d.useState)([])),i=(e[0],e[1]),r=Object(c.useRouter)(),b=r.query.id,h=u.a.firestore();return(b<1||b>4)&&r.push("/admin/1"),Object(d.useEffect)((function(){h.collection("users").get().then((function(n){var t=[];n.forEach((function(n){t.push(n.data())})),i(t)}))}),[]),Object(a.jsxs)(l.a.Fragment,{children:[Object(a.jsx)(o.a,{name:"Manage Skills",AppBar:!0}),Object(a.jsx)(s.a,{}),Object(a.jsx)("footer",{children:Object(a.jsx)("div",{className:n.footer,children:Object(a.jsx)(p.a,{})})})]})}}},[["86tX",1,2,3,5,0,4,6,8]]]);