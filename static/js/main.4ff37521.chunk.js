(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t(31)},19:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),c=t.n(o),l=(t(19),t(1)),i=t(2),u=t(4),s=t(3),m=t(5),p=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,e.titulo))},v=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(o)))).marcaRef=r.a.createRef(),t.yearRef=r.a.createRef(),t.planBasicoRef=r.a.createRef(),t.planCompletoRef=r.a.createRef(),t.cotizarSeguro=function(e){e.preventDefault();var a=t.planBasicoRef.current.checked?"basico":"completo";console.log(t.planBasicoRef.current.value);var n={marca:t.marcaRef.current.value,year:t.yearRef.current.value,plan:a};console.log(n),t.props.cotizarSeguro(n),e.currentTarget.reset()},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"cotizar-auto",onSubmit:this.cotizarSeguro},r.a.createElement("div",{className:"campo"},r.a.createElement("label",null,"Marca"),r.a.createElement("select",{name:"marca",ref:this.marcaRef},r.a.createElement("option",{value:"americano"},"Americano"),r.a.createElement("option",{value:"europeo"},"Europeo"),r.a.createElement("option",{value:"asiatico"},"Asiatico"))),r.a.createElement("div",{className:"campo"},r.a.createElement("label",null,"A\xf1o"),r.a.createElement("select",{name:"year",ref:this.yearRef},r.a.createElement("option",{value:"2018"},"2018"),r.a.createElement("option",{value:"2017"},"2017"),r.a.createElement("option",{value:"2016"},"2016"),r.a.createElement("option",{value:"2015"},"2015"),r.a.createElement("option",{value:"2014"},"2014"),r.a.createElement("option",{value:"2013"},"2013"),r.a.createElement("option",{value:"2012"},"2012"),r.a.createElement("option",{value:"2011"},"2011"),r.a.createElement("option",{value:"2010"},"2010"),r.a.createElement("option",{value:"2009"},"2009"),r.a.createElement("option",{value:"2008"},"2008"))),r.a.createElement("div",{className:"campo"},r.a.createElement("label",null,"Plan:"),r.a.createElement("input",{type:"radio",name:"plan",value:"basico",ref:this.planBasicoRef})," B\xe1sico",r.a.createElement("input",{type:"radio",name:"plan",value:"completo",ref:this.planCompletoRef})," Completo"),r.a.createElement("button",{type:"submit",className:"boton"},"Cotizar"))}}]),a}(n.Component);function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}var E=t(8),d=function(e){function a(){return Object(l.a)(this,a),Object(u.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resultado,a=e?"El total es: $":"Elije Marca, Ano y Tipo de Seguro";return r.a.createElement("div",{className:"gran-total"},a,r.a.createElement(E.TransitionGroup,{component:"span",className:"resultado"},r.a.createElement(E.CSSTransition,{classNames:"resultado",key:e,timeout:{enter:500,exit:500}},r.a.createElement("span",null,e))))}}]),a}(n.Component),h=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(o)))).mostrarResumen=function(){var e=t.props.datos,a=e.marca,n=e.year,o=e.plan;return a&&n&&o?r.a.createElement("div",{className:"resumen"},r.a.createElement("h2",null,"Resumen de cotizacion"),r.a.createElement("li",null,"Marca: ",f(a)),r.a.createElement("li",null,"Plan: ",f(o)),r.a.createElement("li",null,"Ano del auto: ",n)):null},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.mostrarResumen(),r.a.createElement(d,{resultado:this.props.resultado}))}}]),a}(n.Component),b=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={resultado:"",datos:{}},t.cotizarSeguro=function(e){var a=e.marca,n=e.year,r=e.plan,o=2e3;o-=3*function(e){return(new Date).getFullYear()-e}(n)*o/100,o=function(e){var a;switch(e){case"europeo":a=1.3;break;case"americano":a=1.15;break;case"asiatico":a=1.05}return a}(a)*o;var c=function(e){return"basico"===e?1.2:1.5}(r);o=parseFloat(c*o).toFixed(2);var l={marca:a,plan:r,year:n};console.log(o),t.setState({resultado:o,datos:l})},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contenedor"},r.a.createElement(p,{titulo:"Cotizador de Seguro de Autos"}),r.a.createElement("div",{className:"contenedor-formulario"},r.a.createElement(v,{cotizarSeguro:this.cotizarSeguro})),r.a.createElement("div",null,r.a.createElement(h,{datos:this.state.datos,resultado:this.state.resultado})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.4ff37521.chunk.js.map