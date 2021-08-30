(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(21),c=n.n(o),s=(n(28),n(7)),i=n.n(s),l=n(8),u=n(2),d=n(6),h=n(4),f=n(3),m=(n(30),n(31),n(0)),p=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showMore:!1},e}return Object(d.a)(n,[{key:"convertDate",value:function(e){return new Date(e).toDateString()}},{key:"convertTime",value:function(e){return new Date(e).toTimeString().slice(0,5)}},{key:"render",value:function(){var e=this,t=this.props.event,n=t.location,a=t.summary,r=t.description,o=t.start,c=t.end,s=t.htmlLink;return Object(m.jsxs)("div",{className:"event",children:[Object(m.jsx)("h4",{className:"event-title",children:a}),Object(m.jsxs)("p",{className:"event-date",children:[Object(m.jsx)("b",{children:"Date:"})," ",this.convertDate(o.dateTime),", from ",this.convertTime(o.dateTime),"h to ",this.convertTime(c.dateTime),"h"]}),Object(m.jsx)("button",{onClick:function(t){return e.setState({showMore:!e.state.showMore})},className:"btn position-btn",children:"Show more"}),this.state.showMore?Object(m.jsx)("div",{className:"details",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Location:"})," ",n," "]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Description:"})," ",r]}),Object(m.jsx)("a",{href:s,target:"_black",children:Object(m.jsx)("button",{className:"btn2 position-btn2",children:"Add to Calendar"})})]})}):Object(m.jsx)(m.Fragment,{})]})}}]),n}(r.a.Component),v=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(m.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(p,{event:e})},e.id)}))})}}]),n}(r.a.Component),b=(n(33),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{backgroundColor:a.color,borderColor:a.borderColor}},a.backgroundColor=null,a.borderColor=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("p",{className:"alert",style:this.getStyle(),children:this.props.text})})}}]),n}(r.a.Component)),g=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="rgb(234, 250, 255)",a.borderColor="dodgerblue",a}return n}(b),j=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="rgb(255, 255, 215)",a.borderColor="yellow",a}return n}(b),w=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e.handleInputChange=function(t){var n=e.props.locations,a=t.target.value,r=n.filter((function(e){return e.toUpperCase().indexOf(a.toUpperCase())>-1}));0===r.length?e.setState({query:a,infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({query:a,suggestions:r})},e.state={query:"",suggestions:[],showSuggestions:!1},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"alert-center",children:Object(m.jsx)(g,{text:this.state.infoText,style:{display:"none"}})}),Object(m.jsxs)("div",{className:"citySearch",children:[Object(m.jsx)("input",{placeholder:"select your city...",type:"text",className:"city-input",value:this.state.query,onChange:this.handleInputChange,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(m.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(m.jsx)("b",{children:"see all cities"})})]})]})]})}}]),n}(r.a.Component),O=(n(34),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target.value;a.setState({numberOfEvents:t}),a.props.changeCount(t)},a.state={numberOfEvents:30},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"numberOfEvents",children:[Object(m.jsx)("p",{children:"Events:"}),Object(m.jsx)("input",{type:"number",min:"0",className:"num-events",value:this.state.numberOfEvents,onChange:function(t){return e.handleChange(t)}})]})}}]),n}(r.a.Component)),x=n(23),y=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-07T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-07T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",created:"2021-05-21T19:14:30.000Z",updated:"2021-05-27T11:45:37.792Z",summary:"Redux from scratch",description:"Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. After this lecture, you will have a profound understanding of this popular framework ",location:"Madrid, Spain",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-09-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2021-09-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq6tno6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181856675599000"',id:"4tyui4hhyuzqkld72lify9ph3e_20130567T170000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-09-24T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-09-24T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2021-09-24T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],k=n(11),S=n.n(k),T=n(9),C=n.n(T),E=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,N(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,S.a.get("https://t8ageqechl.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&Z(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://t8ageqechl.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",y);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),C.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,E();case 10:if(!(n=e.sent)){e.next=20;break}return q(),a="https://t8ageqechl.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,S.a.get(a);case 16:return(r=e.sent).data&&(o=A(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),C.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},A=function(e){var t=e.map((function(e){return e.location}));return Object(x.a)(new Set(t))};n(52);var I=function(e){return e.showWelcomeScreen?Object(m.jsxs)("div",{className:"WelcomeScreen",children:[Object(m.jsx)("h1",{className:"welcome-title",children:"Welcome to the Meet app"}),Object(m.jsx)("h4",{className:"welcome-text",children:" Log in to see upcoming events around the world for full-stack developers"}),Object(m.jsx)("div",{className:"button_cont",align:"center",children:Object(m.jsxs)("div",{class:"google-btn",children:[Object(m.jsx)("div",{class:"google-icon-wrapper",children:Object(m.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(m.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(m.jsx)("b",{children:"Sign in with google"})})]})}),Object(m.jsx)("a",{href:"https://iamnachoj.github.io/meetApp/privacy.html",rel:"nofollow noopener",children:" Privacy policy "})]}):null},L=(n(53),n.p+"static/media/meetApp.0fee57fb.png"),M=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:30,selectedLocation:"all",showWelcomeScreen:void 0},e.updateEvents=function(t,n){W().then((function(a){var r="all"===t?a:a.filter((function(e){return e.location===t}));e.setState({events:r.slice(0,n),numberOfEvents:n})}))},e.changeCount=function(t){var n=e.state.selectedLocation;e.updateEvents(n,t)},e}return Object(d.a)(n,[{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(m.jsx)("div",{className:"App"}):navigator.onLine?Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"logo-div",children:Object(m.jsx)("img",{className:"logo",src:L,alt:"logo"})}),Object(m.jsx)(w,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(m.jsx)(O,{numberOfEvents:this.state.numberOfEvents,changeCount:this.changeCount}),Object(m.jsx)(v,{events:this.state.events}),Object(m.jsx)(I,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){E()}})]}):Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{text:"You are offline. new events could not be loaded"}),Object(m.jsx)("div",{className:"logo-div",children:Object(m.jsx)("img",{className:"logo",src:L,alt:"logo"})}),Object(m.jsx)(w,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(m.jsx)(O,{numberOfEvents:this.state.numberOfEvents,changeCount:this.changeCount}),Object(m.jsx)(v,{events:this.state.events})]})}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,N(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&W().then((function(e){o.mounted&&o.setState({events:e.slice(0,o.state.numberOfEvents),locations:A(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}}]),n}(r.a.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};n(22).config("246e380ad53142188c4185ceb152587f").install(),c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetApp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetApp","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(t,e)}))}}(),R()}},[[55,1,2]]]);
//# sourceMappingURL=main.4e6de9ae.chunk.js.map