(this["webpackJsonp@lecontrol/client"]=this["webpackJsonp@lecontrol/client"]||[]).push([[0],{205:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),o=n(152),s=n(269),l=n(105),u=n.n(l),d=n(43),j=n(140),b=n(40),p=n(268),h=n(86),f=n(142),O=n.n(f),x=n(13),m=n(209),g=n(249),v=n(247),y=n(2),k=Object(v.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function C(){var e=k(),t=r.a.useState(!0),n=Object(x.a)(t,2),a=n[0],c=n[1];return r.a.useEffect((function(){return c(!0),function(){c(!1)}}),[a]),Object(y.jsx)(m.a,{className:e.backdrop,open:a,children:Object(y.jsx)(g.a,{color:"inherit"})})}var w=n(252),S=n(253),z=n(66),T=n(272),F=n(254),P=n(147),W=n.n(P),I=n(15),D=n(250),E=n(251);var N=function(e){var t=e.children,n=Object(D.a)();return Object(y.jsx)(E.a,{appear:!1,direction:"down",in:!n,children:t})},A=function(e){var t=[{label:"Home",redirect:"/"}];switch(e){case"/list":t.push({label:"Lista",redirect:"/list"});break;case"/register":t.push({label:"Cadastrar",redirect:"/register"})}return t},L=Object(I.g)((function(e){return Object(y.jsx)(N,{children:Object(y.jsx)(w.a,{position:"sticky",children:Object(y.jsxs)(S.a,{children:[Object(y.jsx)(F.a,{onClick:function(){return e.history.push("#menu")},edge:"start",color:"inherit","aria-label":"close",children:Object(y.jsx)(W.a,{})}),Object(y.jsx)(T.a,{"aria-label":"breadcrumb",color:"inherit",children:A(e.location.pathname).map((function(e){return Object(y.jsx)(b.b,{to:e.redirect,children:Object(y.jsx)(z.a,{variant:"subtitle2",children:e.label})},e.redirect)}))})]})})})})),B=Object(v.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function q(){var e=B();return Object(y.jsx)(m.a,{className:e.backdrop,open:!1,children:Object(y.jsx)(g.a,{color:"inherit"})})}var V=n(56),$=n(106),H=n(84),M=n.n(H),J=n(104),R={key:"root",storage:M.a,debug:!1},G=Object($.a)(R,{user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user:login":return e.update({$set:t.payload});case"refresh":return e.update({token:{$set:t.payload.token}});case"user:logout":return e.update({$set:{}});default:return e}},products:Object(J.a)("products",[]),validations:Object(J.a)("validations",[])}),U=function(){var e=Object(V.b)(G);return{store:e,persistor:Object($.b)(e)}},_=n(271),K=n(255),Y=n(256),Z=n(257),Q=n(258),X=n(259),ee=n(101),te=n.n(ee),ne=n(138),ae=n.n(ne),re=n(60),ce=Object(I.g)((function(e){return Object(y.jsx)(_.a,{open:Boolean("#menu"===window.location.hash),onClose:function(){return e.history.push("#")},onOpen:function(){return e.history.push("#menu")},children:Object(y.jsxs)(K.a,{style:{minWidth:350,minHeight:"96vh"},children:[Object(y.jsx)(Y.a,{children:"In\xedcio"}),Object(y.jsxs)(Z.a,{divider:!0,button:!0,onClick:function(){return e.history.replace("/")},children:[Object(y.jsx)(Q.a,{children:Object(y.jsx)(re.a,{variant:"rounded",color:"primary",children:Object(y.jsx)(te.a,{})})}),Object(y.jsx)(X.a,{primaryTypographyProps:{variant:"subtitle2"},primary:"Home",secondary:"Voltar a tela inicial"})]}),Object(y.jsx)(Y.a,{children:"Cadastros"}),Object(y.jsxs)(Z.a,{divider:!0,button:!0,onClick:function(){return e.history.replace("/register")},children:[Object(y.jsx)(Q.a,{children:Object(y.jsx)(re.a,{variant:"rounded",color:"primary",children:Object(y.jsx)(te.a,{})})}),Object(y.jsx)(X.a,{primaryTypographyProps:{variant:"subtitle2"},primary:"Cadastrar",secondary:"Cadastro de produtos"})]}),Object(y.jsx)(Y.a,{children:"Conta"}),Object(y.jsxs)(Z.a,{divider:!0,disabled:!0,children:[Object(y.jsx)(Q.a,{children:Object(y.jsx)(re.a,{variant:"rounded",color:"primary"})}),Object(y.jsx)(X.a,{primaryTypographyProps:{variant:"subtitle2"},primary:"Minha Conta",secondary:"Gerenciar meus dados"})]}),Object(y.jsxs)(Z.a,{divider:!0,button:!0,onClick:function(){localStorage.clear(),sessionStorage.clear(),e.history.push("#"),M.a.clear().then((function(){window.location.reload()}))},children:[Object(y.jsx)(Q.a,{children:Object(y.jsx)(re.a,{variant:"rounded",color:"primary"})}),Object(y.jsx)(X.a,{primaryTypographyProps:{variant:"subtitle2"},primary:"Signout",secondary:"Deslogar sess\xe3o"})]}),Object(y.jsxs)("div",{style:{position:"absolute",bottom:"auto"},children:[Object(y.jsx)(Y.a,{children:"Outros"}),Object(y.jsxs)(Z.a,{button:!0,disabled:!0,children:[Object(y.jsx)(Q.a,{children:Object(y.jsx)(re.a,{variant:"rounded",color:"primary",children:Object(y.jsx)(ae.a,{})})}),Object(y.jsx)(X.a,{primaryTypographyProps:{variant:"subtitle2"},primary:"Configurar",secondary:"Configura\xe7\xf5es pessoais"})]})]})]})})})),ie=n(8),oe="//localhost:3001",se=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return fetch(oe+t,{method:e.toUpperCase(),headers:Object(ie.a)({Accept:"application/json","Content-Type":"application/json","x-access-token":window.localStorage.getItem("token"),"socket-id":window.localStorage.getItem("socket-id")},a),body:JSON.stringify(n)})},le=function(e){return se("post","/auth/login",e)},ue=function(e){return se("post","/auth/register",e)},de=function(){return se("get","/api/products/")},je=function(e){return se("post","/api/products/",e)},be=function(e){return se("put","/api/products/".concat(e.uuid),e)},pe=function(e){return se("delete","/api/products/".concat(e.uuid),e)},he=function(e,t){return se("post","/api/products/".concat(e),t)},fe=function(e){return se("delete","/api/validations/".concat(e.uuid),e)},Oe=(n(205),n(263)),xe=n(55),me=n.n(xe),ge=n(262),ve=n(270),ye=n(264),ke=function(e){var t=function(e){var t;return{token:null===(t=e.user)||void 0===t?void 0:t.token}};return function(n){var r=Object(d.c)(t).token;return Object(a.useEffect)((function(){r?localStorage.setItem("token",r):n.history.replace("/signin",{background:n.location})}),[r]),r?Object(y.jsx)(e,Object(ie.a)({},n)):null}},Ce=r.a.forwardRef((function(e,t){return Object(y.jsx)(E.a,Object(ie.a)({direction:"up",ref:t},e))})),we=n(260);function Se(e){return Object(y.jsx)(we.a,{style:{minHeight:200},dividers:!0,children:Object(y.jsx)(K.a,Object(ie.a)({},e))})}var ze=n(5),Te=Object(ze.a)((function(e){return{root:{position:"relative","& h6":{marginLeft:e.spacing(2),flex:1}}}}))(w.a),Fe=n(52),Pe=n(261);function We(e){var t=e.loading,n=Object(Fe.a)(e,["loading"]);return Object(y.jsx)(Pe.a,Object(ie.a)({endIcon:t&&Object(y.jsx)(g.a,{size:22,style:{position:"absolute",top:7}}),disabled:t},n))}var Ie=n(148),De=n(149),Ee=function(){function e(){Object(Ie.a)(this,e)}return Object(De.a)(e,null,[{key:"testPassword",value:function(e){return/^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/g.test(e)}},{key:"testEmail",value:function(e){return/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g.test(e)}},{key:"testName",value:function(e){return/^[a-z\u00C0-\u017F]{3,}([-']?[a-z\u00C0-\u017F]+)*( [a-z\u00C0-\u017F]{2,}([-']?[a-z\u00C0-\u017F]+)*)+$/gi.test(e)}},{key:"Capitalize",value:function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})).replace(/\s\s+/," ")}},{key:"percentage",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return(e/t*100).toFixed(n)}},{key:"last",value:function(e,t){return e.map((function(e){return e[t]})).sort((function(e,t){return t-e}))[0]||null}},{key:"$filter",value:function(e,t){if(!e||!t)return e||[];var n=/[\u00c7-\u00e7|\u0300-\u036f]/g,a=t&&t.trim().normalize("NFD").replace(n,"").split(/\s+/),r=Object.keys(e[0]);return a&&a.length?e.filter((function(e){return a.every((function(t){return r.some((function(a){return String(e[a]).toLowerCase().indexOf(t.normalize("NFD").replace(n,"").toLowerCase())>-1}))}))})):e||[]}},{key:"Format",value:function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",a="".concat(e)||"",r="";a.length<t.match(/#/g).length;)a=n+a;for(var c=0,i=0;c<t.length&&i<a.length;c++)r+="#"===t.charAt(c)?a.charAt(i++):t.charAt(c);return r}}]),e}();var Ne=ke((function(){var e=Object(ge.a)((function(e){return e.breakpoints.down("sm")})),t=Object(I.f)(),n=r.a.useState(!1),a=Object(x.a)(n,2),c=a[0],i=a[1],o=r.a.useState(""),s=Object(x.a)(o,2),l=s[0],u=s[1],d=r.a.useState(null),j=Object(x.a)(d,2),b=j[0],p=j[1],h=r.a.useState(!1),f=Object(x.a)(h,2),O=f[0],m=f[1],g=function(){i(!1),setTimeout((function(){t.goBack()}),300)};return r.a.useEffect((function(){return i(!0),function(){i(!1)}}),[]),Object(y.jsxs)(Oe.a,{fullScreen:e,open:c,fullWidth:!0,maxWidth:"sm",TransitionComponent:Ce,onClose:g,children:[Object(y.jsx)(Te,{children:Object(y.jsxs)(S.a,{children:[Object(y.jsx)(F.a,{edge:"start",color:"inherit",onClick:g,"aria-label":"close",children:Object(y.jsx)(me.a,{})}),Object(y.jsx)(z.a,{variant:"h6",children:"Cadastrar produto"})]})}),Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(!0),je({label:l}).then((function(e){return e.ok?(u(""),p("Cadastrado com sucesso!")):p("Falha ao cadastrar")})).finally((function(){return m(!1)}))},children:[Object(y.jsx)(Se,{children:Object(y.jsx)(Z.a,{children:Object(y.jsx)(ve.a,{required:!0,fullWidth:!0,autoFocus:!0,value:l,onChange:function(e){return u(Ee.Capitalize(e.target.value))},label:"T\xedtulo",helperText:"Digite o nome do produto"})})}),Object(y.jsx)(ye.a,{children:Object(y.jsx)(We,{loading:O,fullWidth:!0,type:"submit",children:b||"Cadastrar"})})]})]})})),Ae=n(265),Le={mail:"",password:""};function Be(e){var t=r.a.useState(Le),n=Object(x.a)(t,2),a=n[0],c=n[1],i=r.a.useState(!1),o=Object(x.a)(i,2),s=o[0],l=o[1],u=r.a.useState(null),d=Object(x.a)(u,2),j=d[0],b=d[1],p=Object(h.b)();return Object(y.jsxs)(Se,{component:"form",onSubmit:function(t){return t.preventDefault(),l(!0),le(a).then((function(t){200===t.status?(b("logado com sucesso"),p.disconnect(),e.history.push("/")):403===t.status?b("Falha na conex\xe3o"):b("N\xe3o autorizado")})).finally((function(){l(!1),window.location.reload()}))},children:[Object(y.jsx)(Y.a,{children:"Fa\xe7a login com suas credenciais de acesso"}),Object(y.jsx)(Z.a,{children:Object(y.jsx)(ve.a,{fullWidth:!0,required:!0,size:"small",value:a.mail,onChange:function(e){return c(Object(ie.a)(Object(ie.a)({},a),{},{mail:e.target.value}))},variant:"outlined",helperText:"Email de acesso",type:"mail",label:"email"})}),Object(y.jsx)(Z.a,{children:Object(y.jsx)(ve.a,{fullWidth:!0,required:!0,size:"small",value:a.password,onChange:function(e){return c(Object(ie.a)(Object(ie.a)({},a),{},{password:e.target.value}))},variant:"outlined",helperText:"informe sua senha segura",type:"password",label:"password"})}),Object(y.jsx)("div",{style:{margin:16},children:Object(y.jsx)(We,{loading:s,type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:j||"Entre"})})]})}var qe={mail:"",password:"",name:"",company:""};function Ve(){var e=r.a.useState(qe),t=Object(x.a)(e,2),n=t[0],a=t[1],c=r.a.useState(!1),i=Object(x.a)(c,2),o=i[0],s=i[1],l=r.a.useState(""),u=Object(x.a)(l,2),d=u[0],j=u[1];return Object(y.jsxs)(Se,{component:"form",onSubmit:function(e){return e.preventDefault(),s(!0),ue(n).then((function(e){201===e.status?(a(qe),j("criado com sucesso!")):j("Falha ao cadastrar!")})).finally((function(){return s(!1)}))},children:[Object(y.jsx)(Y.a,{children:"Vamos cadastrar alguns dados ..."}),Object(y.jsx)(Z.a,{children:Object(y.jsx)(ve.a,{fullWidth:!0,required:!0,size:"small",value:n.name,onChange:function(e){return a(Object(ie.a)(Object(ie.a)({},n),{},{name:Ee.Capitalize(e.target.value)}))},variant:"outlined",helperText:"Nome completo",type:"text",label:"Nome"})}),Object(y.jsx)(Z.a,{children:Object(y.jsx)(ve.a,{fullWidth:!0,required:!0,size:"small",value:n.company,onChange:function(e){return a(Object(ie.a)(Object(ie.a)({},n),{},{company:Ee.Capitalize(e.target.value)}))},variant:"outlined",helperText:"informe a empresa alvo deste app",label:"Empresa"})}),Object(y.jsx)(Z.a,{children:Object(y.jsx)(ve.a,{fullWidth:!0,required:!0,size:"small",value:n.mail,onChange:function(e){return a(Object(ie.a)(Object(ie.a)({},n),{},{mail:e.target.value}))},variant:"outlined",helperText:"Cadastre o email de acesso",type:"mail",label:"email"})}),Object(y.jsx)(Z.a,{children:Object(y.jsx)(ve.a,{fullWidth:!0,required:!0,size:"small",value:n.password,error:Boolean(n.password&&!Ee.testPassword(n.password)),onChange:function(e){return a(Object(ie.a)(Object(ie.a)({},n),{},{password:e.target.value}))},variant:"outlined",helperText:n.password&&!Ee.testPassword(n.password)?"Senha deve conter caracteres especiais":"informe sua senha segura",type:"password",label:"password"})}),Object(y.jsx)("div",{style:{margin:16},children:Object(y.jsx)(We,{loading:o,type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:d||"Cadastrar"})})]})}var $e=function(e){var t=Object(ge.a)((function(e){return e.breakpoints.down("sm")})),n=r.a.useState(!1),a=Object(x.a)(n,2),c=a[0],i=a[1],o=r.a.useState("login"),s=Object(x.a)(o,2),l=s[0],u=s[1],d=function(){i(!1),setTimeout((function(){e.history.goBack()}),300)};return r.a.useEffect((function(){return i(!0),function(){i(!1)}}),[]),Object(y.jsxs)(Oe.a,{fullScreen:t,open:c,fullWidth:!0,maxWidth:"sm",TransitionComponent:Ce,onClose:d,children:[Object(y.jsx)(Te,{children:Object(y.jsxs)(S.a,{children:[Object(y.jsx)(F.a,{edge:"start",color:"inherit",onClick:d,"aria-label":"close",children:Object(y.jsx)(me.a,{})}),Object(y.jsx)(z.a,{variant:"h6",children:"Signin"})]})}),Object(y.jsx)(Ae.a,{in:"login"===l,children:Object(y.jsx)(Be,Object(ie.a)({},e))}),Object(y.jsx)(Ae.a,{in:"register"===l,children:Object(y.jsx)(Ve,Object(ie.a)({},e))}),Object(y.jsx)(ye.a,{children:"login"===l?Object(y.jsx)(Pe.a,{size:"small",onClick:function(){return u("register")},children:"... ou cadastre-se"}):Object(y.jsx)(Pe.a,{size:"small",onClick:function(){return u("login")},children:"tenho uma conta"})})]})},He=n(267),Me=n(151),Je=n.n(Me),Re=n(266),Ge=n(150),Ue=n.n(Ge);var _e=function(e){var t=e.defaultValue,n=e.onSubmit,a=e.match,c=void 0===a?null:a,i=e.errorText,o=void 0===i?"":i,s=e.helperText,l=Object(Fe.a)(e,["defaultValue","onSubmit","match","errorText","helperText"]),u=r.a.useState(""),d=Object(x.a)(u,2),j=d[0],b=d[1],p=r.a.useState(!1),h=Object(x.a)(p,2),f=h[0],O=h[1];r.a.useEffect((function(){t!==j&&b(t)}),[t]);var m=new RegExp(c),v=!!c&&(!j||!m.test(j)),k=function(){f||v||(O(!0),Promise.resolve(n(j)).finally((function(){return O(!1)})))};return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(ve.a,Object(ie.a)({error:v,value:j,helperText:v?o:s,onKeyDown:function(e){"enter"!==e.key&&13!==e.keyCode||k()},onChange:function(e){return b(e.target.value)},disabled:f,InputProps:{endAdornment:Object(y.jsx)(Re.a,{position:"end",children:Boolean(j&&t!==j)&&Object(y.jsxs)(F.a,{size:"small",onClick:k,color:"primary","aria-label":"save changes",children:[Object(y.jsx)(Ue.a,{style:{transition:"120ms",transform:f?"scale(.75)":""}}),f&&Object(y.jsx)(g.a,{size:38,style:{position:"absolute"}})]})})}},l))})},Ke=ke((function(e){var t=e.history,n=e.match.params,a=Object(ge.a)((function(e){return e.breakpoints.down("sm")})),c=r.a.useState(!1),i=Object(x.a)(c,2),o=i[0],s=i[1],l=Object(d.c)((function(e){var t=e.products,a=e.validations,r=t.find((function(e){return e.uuid===n.uuid})),c=a.filter((function(e){return e.productId===r.id}));return{product:r,validations:c}})),u=l.product,j=l.validations,b=function(){s(!1),setTimeout((function(){t.goBack()}),300)};return r.a.useEffect((function(){return s(!0),function(){s(!1)}}),[]),Object(y.jsxs)(Oe.a,{fullScreen:a,open:o,fullWidth:!0,maxWidth:"sm",TransitionComponent:Ce,onClose:b,children:[Object(y.jsx)(Te,{children:Object(y.jsxs)(S.a,{children:[Object(y.jsx)(F.a,{edge:"start",color:"inherit",onClick:b,"aria-label":"close",children:Object(y.jsx)(me.a,{})}),Object(y.jsxs)(z.a,{variant:"h6",children:["Editar"," ",u.label]})]})}),Object(y.jsxs)(Se,{children:[Object(y.jsxs)(Z.a,{children:[Object(y.jsx)(_e,{fullWidth:!0,autoFocus:!0,onSubmit:function(e){return be(Object(ie.a)(Object(ie.a)({},u),{},{label:e}))},InputLabelProps:{shrink:!0},defaultValue:u.label,label:"T\xedtulo",helperText:"Alterar o titulo do produto?"}),Object(y.jsx)(_e,{fullWidth:!0,type:"date",InputLabelProps:{shrink:!0},defaultValue:"",onSubmit:function(e){return he(n.uuid,{expiration:e})},label:"Adicionar vencimento",helperText:"nova data de validade para o produto"})]}),Object(y.jsxs)(K.a,{children:[Object(y.jsx)(Y.a,{children:"Vencimento"}),j.sort((function(e,t){return new Date(t.expiration)-new Date(e.expiration)})).map((function(e){return Object(y.jsxs)(Z.a,{dense:!0,divider:!0,disabled:e.deleting,children:[Object(y.jsx)(X.a,{primaryTypographyProps:{variant:"subtitle2"},primary:e.expiration.moment().format("DD/MM/Y"),secondary:e.deleting&&"Exclu\xedndo"}),Object(y.jsx)(He.a,{children:Object(y.jsx)(F.a,{onClick:function(){return fe(e)},disabled:e.deleting,children:Object(y.jsx)(Je.a,{})})})]},e.uuid)}))]})]}),Object(y.jsxs)(ye.a,{children:[Object(y.jsx)(Pe.a,{onClick:function(){window.confirm("deseja mesmo exclu\xedr esse produto?")&&(pe({uuid:n.uuid}),b())},children:"excluir"}),Object(y.jsx)(Pe.a,{onClick:b,children:"Sair"})]})]})})),Ye=r.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,290))})),Ze=Object(I.g)((function(e){var t,n=e.location,r=null===(t=n.state)||void 0===t?void 0:t.background;return Object(y.jsxs)(a.Suspense,{fallback:Object(y.jsx)(C,{}),children:[Object(y.jsx)(I.c,{location:r||n,children:Object(y.jsx)(I.a,{path:"/",exact:!0,component:Ye})}),Object(y.jsx)(I.a,{path:"/signin",exact:!0,component:$e}),Object(y.jsx)(I.a,{path:"/register",exact:!0,component:Ne}),Object(y.jsx)(I.a,{path:"/register/:uuid",exact:!0,component:Ke})]})})),Qe=function(){var e=Object(d.b)(),t=function(e,t){return localStorage.setItem(e,t)};return Object(y.jsx)(h.a,{url:"//localhost:3001",onDispatch:e,onRefresh:function(e){return t("token",e.token)},onDisconnect:function(){return e="socket-id",localStorage.removeItem(e);var e},onConnect:function(e){return t("socket-id",e.id),de()},custom:{preloader:function(e){console.log(e)}},options:{parser:O.a,auth:function(e){return e({token:localStorage.getItem("token")})}},children:Object(y.jsxs)(b.a,{children:[Object(y.jsx)(L,{}),Object(y.jsx)(p.a,{fixed:!0,disableGutters:!0,children:Object(y.jsx)(Ze,{})}),Object(y.jsx)(ce,{}),Object(y.jsx)(q,{})]})})},Xe=function(){var e=U(),t=e.store,n=e.persistor;return Object(y.jsx)(d.a,{store:t,children:Object(y.jsx)(j.a,{loading:Object(y.jsx)(C,{}),persistor:n,children:Object(y.jsx)(Qe,{})})})},et=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,288)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},tt=n(44),nt=n.n(tt),at=n(65),rt=n.n(at);rt.a.locale("pt-br"),Array.prototype.update||Object.defineProperty(Array.prototype,"update",{value:function(e){return nt()(this,e)}}),Object.prototype.update||Object.defineProperty(Object.prototype,"update",{value:function(e){return nt()(this,e)}}),Date.prototype.moment||Object.defineProperty(Date.prototype,"moment",{value:function(){return rt()(this)}}),String.prototype.moment||Object.defineProperty(String.prototype,"moment",{value:function(){return rt()(this)}}),Number.prototype.moment||Object.defineProperty(Number.prototype,"moment",{value:function(){return rt()(this)}});var ct=Object(o.a)({palette:{primary:{main:u.a[900]},secondary:{main:u.a[500]}},overrides:{MuiListSubheader:{root:{backgroundColor:"#fff"}}}});i.a.render(Object(y.jsx)(s.a,{theme:ct,children:Object(y.jsx)(Xe,{})}),document.getElementById("root")),et()},60:function(e,t,n){"use strict";var a=n(8),r=n(52),c=(n(0),n(5)),i=n(213),o=n(6),s=n.n(o),l=n(2),u=function(e,t){return function(n){return t[n[e]]}},d=Object(c.a)((function(e){return{root:{background:u("color",{primary:"linear-gradient(45deg, #4a148c 30%, #9c27b0 90%)",blue:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",red:"linear-gradient(45deg, #ba2929 30%, #751c1c 90%)",green:"linear-gradient(45deg, #3cb025 30%, #2da616 90%)"}),width:u("size",{default:e.spacing(4),medium:e.spacing(7),large:e.spacing(10)}),height:u("size",{default:e.spacing(4),medium:e.spacing(7),large:e.spacing(10)}),margin:u("spacing",{1:e.spacing(1),2:e.spacing(2),3:e.spacing(3)})}}}))((function(e){var t=e.classes,n=(e.color,Object(r.a)(e,["classes","color"]));return Object(l.jsx)(i.a,Object(a.a)(Object(a.a)({},n),{},{className:t.root}))}));d.propTypes={background:s.a.oneOf(["default","blue","red","green"]),size:s.a.oneOf(["default","medium","large"]),spacing:s.a.oneOf([1,2,3])},t.a=d}},[[207,1,2]]]);
//# sourceMappingURL=main.50445eb4.chunk.js.map