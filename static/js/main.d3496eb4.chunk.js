(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(21),i=n.n(o),c=(n(28),n(2)),s=n(6),l=n(4),u=n(3),d=(n(29),n(30),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showMore:!1},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=t.location,r=t.summary,a=t.description,o=t.start;return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("h4",{className:"event-title",children:r}),Object(d.jsxs)("p",{className:"event-date",children:[Object(d.jsx)("b",{children:"Date:"})," ",o.dateTime]}),Object(d.jsx)("button",{onClick:function(t){return e.setState({showMore:!e.state.showMore})},className:"btn position-btn",children:"show more"}),this.state.showMore?Object(d.jsx)("div",{className:"details",children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("b",{children:"Location:"})," ",n," "]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("b",{children:"Description:"})," ",a]})]})}):Object(d.jsx)(d.Fragment,{})]})}}]),n}(a.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h,{event:e})},e.id)}))})}}]),n}(a.a.Component),p=(n(32),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{backgroundColor:r.color,borderColor:r.borderColor}},r.backgroundColor=null,r.borderColor=null,r}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"alert",style:this.getStyle(),children:this.props.text})})}}]),n}(a.a.Component)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).color="rgb(234, 250, 255)",r.borderColor="dodgerblue",r}return n}(p),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).color="rgb(255, 205, 205)",r.borderColor="red",r}return n}(p),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).color="rgb(255, 255, 215)",r.borderColor="yellow",r}return n}(p),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e.handleInputChange=function(t){var n=e.props.locations,r=t.target.value,a=n.filter((function(e){return e.toUpperCase().indexOf(r.toUpperCase())>-1}));0===a.length?e.setState({query:r,infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({query:r,suggestions:a})},e.state={query:"",suggestions:[],showSuggestions:!1},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"alert-center",children:Object(d.jsx)(m,{text:this.state.infoText,style:{display:"none"}})}),Object(d.jsxs)("div",{className:"citySearch",children:[Object(d.jsx)("input",{placeholder:"select your city...",type:"text",className:"city-input",value:this.state.query,onChange:this.handleInputChange,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"see all cities"})})]})]})]})}}]),n}(a.a.Component),g=(n(33),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).showAlert=function(){e.setState({errorText:"Number of events cannot be changed"}),setTimeout((function(){e.setState({errorText:""})}),3e3)},e.state={errorText:""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.events;return Object(d.jsxs)("div",{className:"numberOfEvents",children:[Object(d.jsx)(v,{text:this.state.errorText}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Events:"}),Object(d.jsx)("input",{type:"number",className:"num-events",value:t.length,readOnly:!0,onClick:function(){return e.showAlert()}})]})]})}}]),n}(a.a.Component)),w=n(23),O=n(7),x=n.n(O),y=n(8),k=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-07T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-07T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",created:"2021-05-21T19:14:30.000Z",updated:"2021-05-27T11:45:37.792Z",summary:"Redux from scratch",description:"Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. After this lecture, you will have a profound understanding of this popular framework ",location:"Madrid, Spain",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-09-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2021-09-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq6tno6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181856675599000"',id:"4tyui4hhyuzqkld72lify9ph3e_20130567T170000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-09-24T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-09-24T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2021-09-24T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],T=n(11),S=n.n(T),C=n(9),Z=n.n(C),N=function(){var e=Object(y.a)(x.a.mark((function e(){var t,n,r,a,o,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,q(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,S.a.get("https://t8ageqechl.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",a&&E(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(y.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(y.a)(x.a.mark((function e(t){var n,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://t8ageqechl.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(y.a)(x.a.mark((function e(){var t,n,r,a,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return Z.a.done(),e.abrupt("return",k);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),Z.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,N();case 10:if(!(n=e.sent)){e.next=20;break}return I(),r="https://t8ageqechl.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,S.a.get(r);case 16:return(a=e.sent).data&&(o=W(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),Z.a.done(),e.abrupt("return",a.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},W=function(e){var t=e.map((function(e){return e.location}));return Object(w.a)(new Set(t))},M=(n(52),n.p+"static/media/meetApp.0fee57fb.png"),B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[]},e.updateEvents=function(t,n){A().then((function(n){var r="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:r})}))},e}return Object(s.a)(n,[{key:"render",value:function(){return navigator.onLine?Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"logo-div",children:Object(d.jsx)("img",{className:"logo",src:M,alt:"logo"})}),Object(d.jsx)(j,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(d.jsx)(g,{events:this.state.events}),Object(d.jsx)(f,{events:this.state.events})]}):Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{text:"You are offline. new events could not be loaded"}),Object(d.jsx)("div",{className:"logo-div",children:Object(d.jsx)("img",{className:"logo",src:M,alt:"logo"})}),Object(d.jsx)(j,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(d.jsx)(g,{events:this.state.events}),Object(d.jsx)(f,{events:this.state.events})]})}},{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,A().then((function(t){e.mounted&&e.setState({events:t,locations:W(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}}]),n}(a.a.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};n(22).config("246e380ad53142188c4185ceb152587f").install(),i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetApp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetApp","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):L(t,e)}))}}(),R()}},[[54,1,2]]]);
//# sourceMappingURL=main.d3496eb4.chunk.js.map