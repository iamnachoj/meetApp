(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(21),c=n.n(o),s=(n(28),n(3)),i=n(6),u=n(5),l=n(4),d=n(0),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showMore:!1},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=t.location,a=t.summary,r=t.description,o=t.start;return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("h4",{className:"event-title",children:a}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Date:"})," ",o.dateTime]}),Object(d.jsx)("button",{onClick:function(t){return e.setState({showMore:!e.state.showMore})},className:"btn position-btn",children:"show more"}),this.state.showMore?Object(d.jsx)("div",{className:"details",children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("b",{children:"Location:"})," ",n," "]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("b",{children:"Description:"})," ",r]})]})}):Object(d.jsx)(d.Fragment,{})]})}}]),n}(r.a.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h,{event:e})},e.id)}))})}}]),n}(r.a.Component),m=(n(30),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="rgb(234, 250, 255)",a.borderColor="dodgerblue",a}return n}(function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{backgroundColor:a.color,borderColor:a.borderColor}},a.backgroundColor=null,a.borderColor=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"alert",style:this.getStyle(),children:this.props.text})})}}]),n}(r.a.Component))),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e.handleInputChange=function(t){var n=e.props.locations,a=t.target.value,r=n.filter((function(e){return e.toUpperCase().indexOf(a.toUpperCase())>-1}));0===r.length?e.setState({query:a,infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({query:a,suggestions:r})},e.state={query:"",suggestions:[],showSuggestions:!1},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"alert-center",children:Object(d.jsx)(m,{text:this.state.infoText,style:{display:"none"}})}),Object(d.jsxs)("div",{className:"citySearch",children:[Object(d.jsx)("input",{placeholder:"select your city...",type:"text",className:"city-input",value:this.state.query,onChange:this.handleInputChange,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"see all cities"})})]})]})]})}}]),n}(r.a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsxs)("div",{className:"numberOfEvents",children:[Object(d.jsx)("p",{children:"Events:"}),Object(d.jsx)("input",{type:"number",className:"num-events",value:e.length,readOnly:!0})]})}}]),n}(r.a.Component),v=n(23),j=n(7),g=n.n(j),w=n(8),y=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-07T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-07T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",created:"2021-05-21T19:14:30.000Z",updated:"2021-05-27T11:45:37.792Z",summary:"Redux from scratch",description:"Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. After this lecture, you will have a profound understanding of this popular framework ",location:"Madrid, Spain",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-09-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2021-09-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq6tno6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181856675599000"',id:"4tyui4hhyuzqkld72lify9ph3e_20130567T170000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-09-24T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-09-24T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2021-09-24T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],O=n(11),x=n.n(O),k=n(9),T=n.n(k),S=function(){var e=Object(w.a)(g.a.mark((function e(){var t,n,a,r,o,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,C(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,x.a.get("https://t8ageqechl.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&Z(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(w.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(w.a)(g.a.mark((function e(t){var n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://t8ageqechl.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(w.a)(g.a.mark((function e(){var t,n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return T.a.done(),e.abrupt("return",y);case 4:return e.next=6,S();case 6:if(!(t=e.sent)){e.next=16;break}return E(),n="https://t8ageqechl.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,x.a.get(n);case 12:return(a=e.sent).data&&(r=I(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),T.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},I=function(e){var t=e.map((function(e){return e.location}));return Object(v.a)(new Set(t))},M=(n(49),n.p+"static/media/meetApp.ce3fab6c.png"),N=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[]},e.updateEvents=function(t){q().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a})}))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"logo-div",children:Object(d.jsx)("img",{className:"logo",src:M,alt:"logo"})}),Object(d.jsx)(f,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(d.jsx)(b,{events:this.state.events}),Object(d.jsx)(p,{events:this.state.events})]})}},{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,q().then((function(t){e.mounted&&e.setState({events:t,locations:I(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};n(22).config("246e380ad53142188c4185ceb152587f").install(),c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),B()}},[[51,1,2]]]);
//# sourceMappingURL=main.c67706ed.chunk.js.map