(this["webpackJsonp@lecontrol/client"]=this["webpackJsonp@lecontrol/client"]||[]).push([[0],{167:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),o=n(151),s=n(268),u=n(103),l=n.n(u),d=n(37),j=n(138),b=n(15),p=n(54),O=(n(167),n(267)),f=n(8),h=n(13),m=n(139),x=n.n(m),g=n(140),v=n.n(g),y="https:".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL_PROD),C="wss:".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL_PROD),k=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return fetch(y+t,{method:e.toUpperCase(),headers:Object(f.a)({Accept:"application/json","Content-Type":"application/json","x-access-token":window.localStorage.getItem("token"),"socket-id":window.localStorage.getItem("socket-id")},a),body:JSON.stringify(n)})},S=function(e){return k("post","/auth/login",e)},w=function(e){return k("post","/auth/register",e)},T=function(){return k("get","/api/products/")},z=function(e){return k("post","/api/products/",e)},E=function(e){return k("put","/api/products/".concat(e.uuid),e)},P=function(e){return k("delete","/api/products/".concat(e.uuid),e)},F=function(e,t){return k("post","/api/products/".concat(e),t)},W=function(e){return k("delete","/api/validations/".concat(e.uuid),e)},D=n(2),_=function(){var e=Object(a.useState)(null),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(d.b)();return Object(a.useEffect)((function(){if("undefined"!==typeof window){var e=v()(C,{parser:x.a,auth:function(e){e({token:window.localStorage.getItem("token")})}});r(e);return function(){e.disconnect()}}return!1}),[]),Object(a.useEffect)((function(){n&&(n.on("dispatch",c),n.on("disconnect",(function(){localStorage.removeItem("socket-id")})),n.on("connect",(function(){localStorage.setItem("socket-id",n.id)})),n.on("refresh",(function(e){localStorage.setItem("token",e.token||null)})))}),[n]),Object(f.a)(Object(f.a)({},n),{},{reconnect:function(){n.connected&&n.disconnect(),setTimeout((function(){window.location.reload()}),1e3)}})},I=Object(a.createContext)(null),A=function(e){return Object(D.jsx)(I.Provider,Object(f.a)({value:_()},e))},L=n(208),N=n(248),R=n(246),B=Object(R.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function H(){var e=B(),t=r.a.useState(!0),n=Object(h.a)(t,2),a=n[0],c=n[1];return r.a.useEffect((function(){return c(!0),function(){c(!1)}}),[a]),Object(D.jsx)(L.a,{className:e.backdrop,open:a,children:Object(D.jsx)(N.a,{color:"inherit"})})}var V=n(251),U=n(252),q=n(66),K=n(271),$=n(253),M=n(145),J=n.n(M),G=n(249),Y=n(250);var Z=function(e){var t=e.children,n=Object(G.a)();return Object(D.jsx)(Y.a,{appear:!1,direction:"down",in:!n,children:t})},Q=function(e){var t=[{label:"Home",redirect:"/"}];switch(e){case"/list":t.push({label:"Lista",redirect:"/list"});break;case"/register":t.push({label:"Cadastrar",redirect:"/register"})}return t},X=Object(b.g)((function(e){return Object(D.jsx)(Z,{children:Object(D.jsx)(V.a,{position:"sticky",children:Object(D.jsxs)(U.a,{children:[Object(D.jsx)($.a,{onClick:function(){return e.history.push("#menu")},edge:"start",color:"inherit","aria-label":"close",children:Object(D.jsx)(J.a,{})}),Object(D.jsx)(K.a,{"aria-label":"breadcrumb",color:"inherit",children:Q(e.location.pathname).map((function(e){return Object(D.jsx)(p.b,{to:e.redirect,children:Object(D.jsx)(q.a,{variant:"subtitle2",children:e.label})},e.redirect)}))})]})})})})),ee=Object(R.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function te(){var e=ee();return Object(D.jsx)(L.a,{className:e.backdrop,open:!1,children:Object(D.jsx)(N.a,{color:"inherit"})})}var ne=n(56),ae=n(104),re=n(146),ce=n.n(re),ie=n(102),oe={key:"root",storage:ce.a,debug:!1},se=Object(ae.a)(oe,{user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user:login":return e.update({$set:t.payload});case"refresh":return e.update({token:{$set:t.payload.token}});case"user:logout":return e.update({$set:{}});default:return e}},products:Object(ie.a)("products",[]),validations:Object(ie.a)("validations",[])}),ue=n(270),le=n(254),de=n(255),je=n(256),be=n(257),pe=n(258),Oe=n(99),fe=n.n(Oe),he=n(136),me=n.n(he),xe=n(64),ge=Object(b.g)((function(e){return Object(D.jsx)(ue.a,{open:Boolean("#menu"===window.location.hash),onClose:function(){return e.history.push("#")},onOpen:function(){return e.history.push("#menu")},children:Object(D.jsxs)(le.a,{style:{minWidth:350,minHeight:"96vh"},children:[Object(D.jsx)(de.a,{children:"In\xedcio"}),Object(D.jsxs)(je.a,{divider:!0,button:!0,onClick:function(){return e.history.replace("/")},children:[Object(D.jsx)(be.a,{children:Object(D.jsx)(xe.a,{variant:"rounded",color:"primary",children:Object(D.jsx)(fe.a,{})})}),Object(D.jsx)(pe.a,{primaryTypographyProps:{variant:"subtitle2"},primary:"Home",secondary:"Voltar a tela inicial"})]}),Object(D.jsx)(de.a,{children:"Cadastros"}),Object(D.jsxs)(je.a,{divider:!0,button:!0,onClick:function(){return e.history.replace("/register")},children:[Object(D.jsx)(be.a,{children:Object(D.jsx)(xe.a,{variant:"rounded",color:"primary",children:Object(D.jsx)(fe.a,{})})}),Object(D.jsx)(pe.a,{primaryTypographyProps:{variant:"subtitle2"},primary:"Cadastrar",secondary:"Cadastro de produtos"})]}),Object(D.jsx)(de.a,{children:"Conta"}),Object(D.jsxs)(je.a,{divider:!0,disabled:!0,children:[Object(D.jsx)(be.a,{children:Object(D.jsx)(xe.a,{variant:"rounded",color:"primary"})}),Object(D.jsx)(pe.a,{primaryTypographyProps:{variant:"subtitle2"},primary:"Minha Conta",secondary:"Gerenciar meus dados"})]}),Object(D.jsxs)("div",{style:{position:"absolute",bottom:0},children:[Object(D.jsx)(de.a,{children:"Outros"}),Object(D.jsxs)(je.a,{button:!0,disabled:!0,children:[Object(D.jsx)(be.a,{children:Object(D.jsx)(xe.a,{variant:"rounded",color:"primary",children:Object(D.jsx)(me.a,{})})}),Object(D.jsx)(pe.a,{primaryTypographyProps:{variant:"subtitle2"},primary:"Configurar",secondary:"Configura\xe7\xf5es pessoais"})]})]})]})})})),ve=n(262),ye=n(55),Ce=n.n(ye),ke=n(261),Se=n(269),we=n(263),Te=function(e){var t=function(e){var t;return{token:null===(t=e.user)||void 0===t?void 0:t.token}};return function(n){var r=Object(d.c)(t).token;return Object(a.useEffect)((function(){r?localStorage.setItem("token",r):n.history.replace("/signin",{background:n.location})}),[r]),r?Object(D.jsx)(e,Object(f.a)({},n)):null}},ze=r.a.forwardRef((function(e,t){return Object(D.jsx)(Y.a,Object(f.a)({direction:"up",ref:t},e))})),Ee=n(259);function Pe(e){return Object(D.jsx)(Ee.a,{style:{minHeight:200},dividers:!0,children:Object(D.jsx)(le.a,Object(f.a)({},e))})}var Fe=n(5),We=Object(Fe.a)((function(e){return{root:{position:"relative","& h6":{marginLeft:e.spacing(2),flex:1}}}}))(V.a),De=n(51),_e=n(260);function Ie(e){var t=e.loading,n=Object(De.a)(e,["loading"]);return Object(D.jsx)(_e.a,Object(f.a)({endIcon:t&&Object(D.jsx)(N.a,{size:22,style:{position:"absolute",top:7}}),disabled:t},n))}var Ae=n(147),Le=n(148),Ne=function(){function e(){Object(Ae.a)(this,e)}return Object(Le.a)(e,null,[{key:"testPassword",value:function(e){return/^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/g.test(e)}},{key:"testEmail",value:function(e){return/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g.test(e)}},{key:"testName",value:function(e){return/^[a-z\u00C0-\u017F]{3,}([-']?[a-z\u00C0-\u017F]+)*( [a-z\u00C0-\u017F]{2,}([-']?[a-z\u00C0-\u017F]+)*)+$/gi.test(e)}},{key:"Capitalize",value:function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})).replace(/\s\s+/," ")}},{key:"percentage",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return(e/t*100).toFixed(n)}},{key:"last",value:function(e,t){return e.map((function(e){return e[t]})).sort((function(e,t){return t-e}))[0]||null}},{key:"$filter",value:function(e,t){if(!e||!t)return e||[];var n=/[\u00c7-\u00e7|\u0300-\u036f]/g,a=t&&t.trim().normalize("NFD").replace(n,"").split(/\s+/),r=Object.keys(e[0]);return a&&a.length?e.filter((function(e){return a.every((function(t){return r.some((function(a){return String(e[a]).toLowerCase().indexOf(t.normalize("NFD").replace(n,"").toLowerCase())>-1}))}))})):e||[]}},{key:"Format",value:function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",a="".concat(e)||"",r="";a.length<t.match(/#/g).length;)a=n+a;for(var c=0,i=0;c<t.length&&i<a.length;c++)r+="#"===t.charAt(c)?a.charAt(i++):t.charAt(c);return r}}]),e}();var Re=Te((function(){var e=Object(ke.a)((function(e){return e.breakpoints.down("sm")})),t=Object(b.f)(),n=r.a.useState(!1),a=Object(h.a)(n,2),c=a[0],i=a[1],o=r.a.useState(""),s=Object(h.a)(o,2),u=s[0],l=s[1],d=r.a.useState(null),j=Object(h.a)(d,2),p=j[0],O=j[1],f=r.a.useState(!1),m=Object(h.a)(f,2),x=m[0],g=m[1],v=function(){i(!1),setTimeout((function(){t.goBack()}),300)};return r.a.useEffect((function(){return i(!0),function(){i(!1)}}),[]),Object(D.jsxs)(ve.a,{fullScreen:e,open:c,fullWidth:!0,maxWidth:"sm",TransitionComponent:ze,onClose:v,children:[Object(D.jsx)(We,{children:Object(D.jsxs)(U.a,{children:[Object(D.jsx)($.a,{edge:"start",color:"inherit",onClick:v,"aria-label":"close",children:Object(D.jsx)(Ce.a,{})}),Object(D.jsx)(q.a,{variant:"h6",children:"Cadastrar produto"})]})}),Object(D.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(!0),z({label:u}).then((function(e){return e.ok?(l(""),O("Cadastrado com sucesso!")):O("Falha ao cadastrar")})).finally((function(){return g(!1)}))},children:[Object(D.jsx)(Pe,{children:Object(D.jsx)(je.a,{children:Object(D.jsx)(Se.a,{required:!0,fullWidth:!0,autoFocus:!0,value:u,onChange:function(e){return l(Ne.Capitalize(e.target.value))},label:"T\xedtulo",helperText:"Digite o nome do produto"})})}),Object(D.jsx)(we.a,{children:Object(D.jsx)(Ie,{loading:x,fullWidth:!0,type:"submit",children:p||"Cadastrar"})})]})]})})),Be=n(264),He={mail:"",password:""};function Ve(e){var t=r.a.useState(He),n=Object(h.a)(t,2),a=n[0],c=n[1],i=r.a.useState(!1),o=Object(h.a)(i,2),s=o[0],u=o[1],l=r.a.useState(null),d=Object(h.a)(l,2),j=d[0],b=d[1],p=r.a.useContext(I);return Object(D.jsxs)(Pe,{component:"form",onSubmit:function(t){return t.preventDefault(),u(!0),S(a).then((function(t){200===t.status?(b("logado com sucesso"),p.reconnect(),e.history.goBack()):403===t.status?b("Falha na conex\xe3o"):b("N\xe3o autorizado")})).finally((function(){return u(!1)}))},children:[Object(D.jsx)(de.a,{children:"Fa\xe7a login com suas credenciais de acesso"}),Object(D.jsx)(je.a,{children:Object(D.jsx)(Se.a,{fullWidth:!0,required:!0,size:"small",value:a.mail,onChange:function(e){return c(Object(f.a)(Object(f.a)({},a),{},{mail:e.target.value}))},variant:"outlined",helperText:"Email de acesso",type:"mail",label:"email"})}),Object(D.jsx)(je.a,{children:Object(D.jsx)(Se.a,{fullWidth:!0,required:!0,size:"small",value:a.password,onChange:function(e){return c(Object(f.a)(Object(f.a)({},a),{},{password:e.target.value}))},variant:"outlined",helperText:"informe sua senha segura",type:"password",label:"password"})}),Object(D.jsx)("div",{style:{margin:16},children:Object(D.jsx)(Ie,{loading:s,type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:j||"Entre"})})]})}var Ue={mail:"",password:"",name:"",company:""};function qe(){var e=r.a.useState(Ue),t=Object(h.a)(e,2),n=t[0],a=t[1],c=r.a.useState(!1),i=Object(h.a)(c,2),o=i[0],s=i[1],u=r.a.useState(""),l=Object(h.a)(u,2),d=l[0],j=l[1];return Object(D.jsxs)(Pe,{component:"form",onSubmit:function(e){return e.preventDefault(),s(!0),w(n).then((function(e){201===e.status?(a(Ue),j("criado com sucesso!")):j("Falha ao cadastrar!")})).finally((function(){return s(!1)}))},children:[Object(D.jsx)(de.a,{children:"Vamos cadastrar alguns dados ..."}),Object(D.jsx)(je.a,{children:Object(D.jsx)(Se.a,{fullWidth:!0,required:!0,size:"small",value:n.name,onChange:function(e){return a(Object(f.a)(Object(f.a)({},n),{},{name:Ne.Capitalize(e.target.value)}))},variant:"outlined",helperText:"Nome completo",type:"text",label:"Nome"})}),Object(D.jsx)(je.a,{children:Object(D.jsx)(Se.a,{fullWidth:!0,required:!0,size:"small",value:n.company,onChange:function(e){return a(Object(f.a)(Object(f.a)({},n),{},{company:Ne.Capitalize(e.target.value)}))},variant:"outlined",helperText:"informe a empresa alvo deste app",label:"Empresa"})}),Object(D.jsx)(je.a,{children:Object(D.jsx)(Se.a,{fullWidth:!0,required:!0,size:"small",value:n.mail,onChange:function(e){return a(Object(f.a)(Object(f.a)({},n),{},{mail:e.target.value}))},variant:"outlined",helperText:"Cadastre o email de acesso",type:"mail",label:"email"})}),Object(D.jsx)(je.a,{children:Object(D.jsx)(Se.a,{fullWidth:!0,required:!0,size:"small",value:n.password,error:Boolean(n.password&&!Ne.testPassword(n.password)),onChange:function(e){return a(Object(f.a)(Object(f.a)({},n),{},{password:e.target.value}))},variant:"outlined",helperText:n.password&&!Ne.testPassword(n.password)?"Senha deve conter caracteres especiais":"informe sua senha segura",type:"password",label:"password"})}),Object(D.jsx)("div",{style:{margin:16},children:Object(D.jsx)(Ie,{loading:o,type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:d||"Cadastrar"})})]})}var Ke=function(e){var t=Object(ke.a)((function(e){return e.breakpoints.down("sm")})),n=r.a.useState(!1),a=Object(h.a)(n,2),c=a[0],i=a[1],o=r.a.useState("login"),s=Object(h.a)(o,2),u=s[0],l=s[1],d=function(){i(!1),setTimeout((function(){e.history.goBack()}),300)};return r.a.useEffect((function(){return i(!0),function(){i(!1)}}),[]),Object(D.jsxs)(ve.a,{fullScreen:t,open:c,fullWidth:!0,maxWidth:"sm",TransitionComponent:ze,onClose:d,children:[Object(D.jsx)(We,{children:Object(D.jsxs)(U.a,{children:[Object(D.jsx)($.a,{edge:"start",color:"inherit",onClick:d,"aria-label":"close",children:Object(D.jsx)(Ce.a,{})}),Object(D.jsx)(q.a,{variant:"h6",children:"Signin"})]})}),Object(D.jsx)(Be.a,{in:"login"===u,children:Object(D.jsx)(Ve,Object(f.a)({},e))}),Object(D.jsx)(Be.a,{in:"register"===u,children:Object(D.jsx)(qe,Object(f.a)({},e))}),Object(D.jsx)(we.a,{children:"login"===u?Object(D.jsx)(_e.a,{size:"small",onClick:function(){return l("register")},children:"... ou cadastre-se"}):Object(D.jsx)(_e.a,{size:"small",onClick:function(){return l("login")},children:"tenho uma conta"})})]})},$e=n(266),Me=n(150),Je=n.n(Me),Ge=n(265),Ye=n(149),Ze=n.n(Ye);var Qe=function(e){var t=e.defaultValue,n=e.onSubmit,a=e.match,c=void 0===a?null:a,i=e.errorText,o=void 0===i?"":i,s=e.helperText,u=Object(De.a)(e,["defaultValue","onSubmit","match","errorText","helperText"]),l=r.a.useState(""),d=Object(h.a)(l,2),j=d[0],b=d[1],p=r.a.useState(!1),O=Object(h.a)(p,2),m=O[0],x=O[1];r.a.useEffect((function(){t!==j&&b(t)}),[t]);var g=new RegExp(c),v=!!c&&(!j||!g.test(j)),y=function(){m||v||(x(!0),Promise.resolve(n(j)).finally((function(){return x(!1)})))};return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(Se.a,Object(f.a)({error:v,value:j,helperText:v?o:s,onKeyDown:function(e){"enter"!==e.key&&13!==e.keyCode||y()},onChange:function(e){return b(e.target.value)},disabled:m,InputProps:{endAdornment:Object(D.jsx)(Ge.a,{position:"end",children:Boolean(j&&t!==j)&&Object(D.jsxs)($.a,{size:"small",onClick:y,color:"primary","aria-label":"save changes",children:[Object(D.jsx)(Ze.a,{style:{transition:"120ms",transform:m?"scale(.75)":""}}),m&&Object(D.jsx)(N.a,{size:38,style:{position:"absolute"}})]})})}},u))})},Xe=Te((function(e){var t=e.history,n=e.match.params,a=Object(ke.a)((function(e){return e.breakpoints.down("sm")})),c=r.a.useState(!1),i=Object(h.a)(c,2),o=i[0],s=i[1],u=Object(d.c)((function(e){var t=e.products,a=e.validations,r=t.find((function(e){return e.uuid===n.uuid})),c=a.filter((function(e){return e.productId===r.id}));return{product:r,validations:c}})),l=u.product,j=u.validations,b=function(){s(!1),setTimeout((function(){t.goBack()}),300)};return r.a.useEffect((function(){return s(!0),function(){s(!1)}}),[]),Object(D.jsxs)(ve.a,{fullScreen:a,open:o,fullWidth:!0,maxWidth:"sm",TransitionComponent:ze,onClose:b,children:[Object(D.jsx)(We,{children:Object(D.jsxs)(U.a,{children:[Object(D.jsx)($.a,{edge:"start",color:"inherit",onClick:b,"aria-label":"close",children:Object(D.jsx)(Ce.a,{})}),Object(D.jsxs)(q.a,{variant:"h6",children:["Editar"," ",l.label]})]})}),Object(D.jsxs)(Pe,{children:[Object(D.jsxs)(je.a,{children:[Object(D.jsx)(Qe,{fullWidth:!0,autoFocus:!0,onSubmit:function(e){return E(Object(f.a)(Object(f.a)({},l),{},{label:e}))},InputLabelProps:{shrink:!0},defaultValue:l.label,label:"T\xedtulo",helperText:"Alterar o titulo do produto?"}),Object(D.jsx)(Qe,{fullWidth:!0,type:"date",InputLabelProps:{shrink:!0},defaultValue:"",onSubmit:function(e){return F(n.uuid,{expiration:e})},label:"Adicionar vencimento",helperText:"nova data de validade para o produto"})]}),Object(D.jsxs)(le.a,{children:[Object(D.jsx)(de.a,{children:"Vencimento"}),j.sort((function(e,t){return new Date(t.expiration)-new Date(e.expiration)})).map((function(e){return Object(D.jsxs)(je.a,{dense:!0,divider:!0,disabled:e.deleting,children:[Object(D.jsx)(pe.a,{primaryTypographyProps:{variant:"subtitle2"},primary:e.expiration.moment().format("DD/MM/Y"),secondary:e.deleting&&"Exclu\xedndo"}),Object(D.jsx)($e.a,{children:Object(D.jsx)($.a,{onClick:function(){return W(e)},disabled:e.deleting,children:Object(D.jsx)(Je.a,{})})})]},e.uuid)}))]})]}),Object(D.jsxs)(we.a,{children:[Object(D.jsx)(_e.a,{onClick:function(){window.confirm("deseja mesmo exclu\xedr esse produto?")&&(P({uuid:n.uuid}),b())},children:"excluir"}),Object(D.jsx)(_e.a,{onClick:b,children:"Sair"})]})]})})),et=r.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,289))})),tt=Object(b.g)((function(e){var t,n=e.location,r=null===(t=n.state)||void 0===t?void 0:t.background;return Object(D.jsxs)(a.Suspense,{fallback:Object(D.jsx)(H,{}),children:[Object(D.jsx)(b.c,{location:r||n,children:Object(D.jsx)(b.a,{path:"/",exact:!0,component:et})}),Object(D.jsx)(b.a,{path:"/signin",exact:!0,component:Ke}),Object(D.jsx)(b.a,{path:"/register",exact:!0,component:Re}),Object(D.jsx)(b.a,{path:"/register/:uuid",exact:!0,component:Xe})]})})),nt=function(){var e=function(){var e=Object(ne.b)(se);return{store:e,persistor:Object(ae.b)(e)}}(),t=e.store,n=e.persistor;return r.a.useEffect((function(){T()})),Object(D.jsx)(d.a,{store:t,children:Object(D.jsx)(j.a,{loading:!1,persistor:n,children:Object(D.jsx)(A,{children:Object(D.jsxs)(p.a,{children:[Object(D.jsx)(X,{}),Object(D.jsx)(O.a,{fixed:!0,disableGutters:!0,children:Object(D.jsx)(tt,{})}),Object(D.jsx)(ge,{}),Object(D.jsx)(te,{})]})})})})},at=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,287)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},rt=n(43),ct=n.n(rt),it=n(65),ot=n.n(it);ot.a.locale("pt-br"),Array.prototype.update||Object.defineProperty(Array.prototype,"update",{value:function(e){return ct()(this,e)}}),Object.prototype.update||Object.defineProperty(Object.prototype,"update",{value:function(e){return ct()(this,e)}}),Date.prototype.moment||Object.defineProperty(Date.prototype,"moment",{value:function(){return ot()(this)}}),String.prototype.moment||Object.defineProperty(String.prototype,"moment",{value:function(){return ot()(this)}}),Number.prototype.moment||Object.defineProperty(Number.prototype,"moment",{value:function(){return ot()(this)}});var st=Object(o.a)({palette:{primary:{main:l.a[900]},secondary:{main:l.a[500]}},overrides:{MuiListSubheader:{root:{backgroundColor:"#fff"}}}});i.a.render(Object(D.jsx)(s.a,{theme:st,children:Object(D.jsx)(nt,{})}),document.getElementById("root")),at()},64:function(e,t,n){"use strict";var a=n(8),r=n(51),c=(n(0),n(5)),i=n(212),o=n(6),s=n.n(o),u=n(2),l=function(e,t){return function(n){return t[n[e]]}},d=Object(c.a)((function(e){return{root:{background:l("color",{primary:"linear-gradient(45deg, #4a148c 30%, #9c27b0 90%)",blue:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",red:"linear-gradient(45deg, #ba2929 30%, #751c1c 90%)",green:"linear-gradient(45deg, #3cb025 30%, #2da616 90%)"}),width:l("size",{default:e.spacing(4),medium:e.spacing(7),large:e.spacing(10)}),height:l("size",{default:e.spacing(4),medium:e.spacing(7),large:e.spacing(10)}),margin:l("spacing",{1:e.spacing(1),2:e.spacing(2),3:e.spacing(3)})}}}))((function(e){var t=e.classes,n=(e.color,Object(r.a)(e,["classes","color"]));return Object(u.jsx)(i.a,Object(a.a)(Object(a.a)({},n),{},{className:t.root}))}));d.propTypes={background:s.a.oneOf(["default","blue","red","green"]),size:s.a.oneOf(["default","medium","large"]),spacing:s.a.oneOf([1,2,3])},t.a=d}},[[206,1,2]]]);
//# sourceMappingURL=main.7023a953.chunk.js.map