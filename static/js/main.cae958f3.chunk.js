(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{144:function(e,a,t){},145:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),s=t.n(r);t(92),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(93),t(94),t(95),t(96);var c=t(11),m=t(12),o=t(14),i=t(13),d=t(8),u=t(25),h=t(146),f=t(147),E=t(148),b=t(82),p=t(149),g=t(150),v=t(17),N=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(u.a)(n)),n}return Object(m.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return l.a.createElement(h.a,{dark:!0,sticky:"top",expand:"md"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(f.a,{className:"mr-auto customized",as:v.b,href:"/home"},l.a.createElement("i",{className:"fa fa-cutlery","aria-hidden":"true"})," ",l.a.createElement("span",null,"M3 Eatery")),l.a.createElement(E.a,{onClick:this.toggleNav}),l.a.createElement(b.a,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(p.a,{navbar:!0,className:"ml-auto"},l.a.createElement(g.a,null,l.a.createElement(v.c,{className:"nav-link",to:"/home"},l.a.createElement("i",{className:"fa fa-home fa-lg"})," Home")),l.a.createElement(g.a,null,l.a.createElement(v.c,{className:"nav-link",to:"/menu"},l.a.createElement("i",{className:"fa fa-list fa-lg"})," Menu")),l.a.createElement(g.a,null,l.a.createElement(v.c,{className:"nav-link",to:"/contact"},l.a.createElement("i",{className:"fa fa-address-card fa-lg"})," Contact"))))))}}]),t}(n.Component),y=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-12 text-center col-md-2 my-auto"},l.a.createElement("div",{className:" scroll-to-top up-wrap mx-auto float-md-right my-3"},l.a.createElement("div",{onClick:function(){return e.scrollToTop()}},l.a.createElement("i",{className:"fa fa-arrow-circle-up","aria-hidden":"true"}))))}}]),t}(n.Component),j=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"py-4"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-center text-md-left offset-md-1 col-md-8"},l.a.createElement("div",null,"Muffins, Meatballs & Mules \xa92020"),l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-phone","aria-hidden":"true"}),l.a.createElement("span",null," 215-555-1212 ")),l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-clock-o","aria-hidden":"true"}),l.a.createElement("span",null," M - F 8am - 8pm "))),l.a.createElement(y,null))))}}]),t}(n.Component),O=t(151),k=t(16),w=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.images.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("img",{src:e.src,alt:e.alt}),l.a.createElement("div",{className:"d-none d-md-block"},l.a.createElement("strong",null,e.txt)))}));return l.a.createElement(O.a,{className:"p-0"},l.a.createElement("div",{className:"container-fluid p-0"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{id:"page-top"},l.a.createElement("ul",{className:"products m-0"},e)),l.a.createElement("div",{className:"d-block d-md-none text-center text-white my-dark-bg p-3"},l.a.createElement("h1",null,"Muffins, Meatballs & Mules"))))))}}]),t}(n.Component),x=Object(d.g)(Object(k.connect)((function(e){return{images:e.banners}}))(w)),M=t(164),S=t(152),C=t(153),T=t(154),F=t(155),q=t(84),L=t(156),R=t(9),I=function(e){return e&&e.length},W=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={guests:"",time:"",touched:{guests:!1,time:!1},isModalOpen:!1},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.toggleModal=n.toggleModal.bind(Object(u.a)(n)),n}return Object(m.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current state is: "+JSON.stringify(e)),alert("Current state is: "+JSON.stringify(e))}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(M.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},l.a.createElement(S.a,{toggle:this.toggleModal,className:"modal-title header-orange"},"Reserve a Table"),l.a.createElement(C.a,null,l.a.createElement(R.LocalForm,{onSubmit:function(a){return e.handleSubmit(a)}},l.a.createElement("div",{className:"form-group"},l.a.createElement(T.a,null,l.a.createElement(F.a,{addonType:"prepend"},l.a.createElement(q.a,null,l.a.createElement("i",{class:"fa fa-users","aria-hidden":"true"}))),l.a.createElement(R.Control.select,{model:".guests",id:"guests",name:"guests",className:"form-control",validators:{required:I}},l.a.createElement("option",{value:""},"= Select Guest Count ="),l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"))),l.a.createElement(R.Errors,{className:"text-danger",model:".guests",show:"touched",component:"div",messages:{required:"Number of Guests is Required"}})),l.a.createElement("div",{className:"form-group"},l.a.createElement(T.a,null,l.a.createElement(F.a,{addonType:"prepend"},l.a.createElement(q.a,null,l.a.createElement("i",{class:"fa fa-clock-o","aria-hidden":"true"}))),l.a.createElement(R.Control.select,{model:".time",id:"time",name:"time",className:"form-control",validators:{required:I}},l.a.createElement("option",{value:""},"= Select Time of Day ="),l.a.createElement("option",{value:"8"},"8 am"),l.a.createElement("option",{value:"9"},"9 am"),l.a.createElement("option",{value:"10"},"10 am"),l.a.createElement("option",{value:"11"},"11 am"),l.a.createElement("option",{value:"12"},"12 pm"),l.a.createElement("option",{value:"13"},"1 pm"),l.a.createElement("option",{value:"14"},"2 pm"),l.a.createElement("option",{value:"15"},"3 pm"),l.a.createElement("option",{value:"16"},"4 pm"),l.a.createElement("option",{value:"17"},"5 pm"),l.a.createElement("option",{value:"18"},"6 pm"),l.a.createElement("option",{value:"19"},"7 pm"))),l.a.createElement(R.Errors,{className:"text-danger",model:".time",show:"touched",component:"div",messages:{required:"Time is Required"}})),l.a.createElement(L.a,{className:"btn-orange",type:"submit",value:"submit"},"Submit")))),l.a.createElement("button",{onClick:this.toggleModal,className:"btn btn-orange btn-large mt-4"},"Reserve a Table"))}}]),t}(n.Component);var P=function(){return l.a.createElement("div",{className:"row my-4"},l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10 col-md-5 py-3"},l.a.createElement("div",{className:"card h-100"},l.a.createElement("div",{className:"card-body d-flex flex-column bg-light"},l.a.createElement("h4",null,"CARRY OUT:"),l.a.createElement("div",{className:"home-text-lrg"},"You are welcome to place a carry-out order at any time. Please feel free to call in or order at the counter. When you come inside a mask is required and social distancing must be observered."),l.a.createElement("div",{className:"mt-auto"},l.a.createElement(v.b,{to:"/menu",className:"btn btn-orange btn-large mt-4"},"View our Menu"))))),l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10 offset-md-0 col-md-5 py-3"},l.a.createElement("div",{className:"card h-100"},l.a.createElement("div",{className:"card-body d-flex flex-column covid-box"},l.a.createElement("h4",null,"BEFORE YOU DINE IN:"),l.a.createElement("div",{className:"home-text-lrg"},"Due to social distancing, we require reservations for dining in. We are limiting the guest count to 4 per table. Masks can be removed at the table, but should be worn all other times."),l.a.createElement("div",{className:"mt-auto"},l.a.createElement(W,null))))))},A=t(163);var B=Object(d.g)(Object(k.connect)((function(e){return{items:e.items}}))((function(e){return l.a.createElement("div",{className:"row my-4"},l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10 col-lg-5"},l.a.createElement("div",{className:"my-3"},l.a.createElement(A.a,{items:e.items}))),l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10 offset-lg-0 col-lg-5"},l.a.createElement("div",{className:"h-100 d-flex align-items-center"},l.a.createElement("div",{className:"card w-100"},l.a.createElement("div",{className:"card-header bg-dark text-white"},l.a.createElement("h3",{className:"text-center"},"Events and Specials")),l.a.createElement("div",{className:"card-body events-bg"},l.a.createElement("div",{className:"text-center home-text-lrg"},l.a.createElement("p",null,"Tasty Muffins at a reduced price on Tuesday\xa0morning."),l.a.createElement("p",null,"Exciting LIVE acoustic music on Wednesday\xa0nights."),l.a.createElement("p",null,"Refreshing\xa0Mules reduced prices on Thursday\xa0nights."),l.a.createElement("p",null,"Game Night on Friday nights.",l.a.createElement("br",null),"It's fun for the whole family!")))))))}))),G=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row my-3"},l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10"},l.a.createElement("div",{className:"highlight"},l.a.createElement("h2",{className:"text-center"},"Sweet, Savory and Satisfying"))))),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10"},l.a.createElement("div",{className:"home-text-lrg my-3"},l.a.createElement("h4",{className:"text-justify"},"Our cooks use fresh ingredients and cook with a passion for creating flavorful food. We have delicious options available for breakfast, lunch and dinner. Bring a healthy appetite and be delighted!")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10"},l.a.createElement("hr",{className:"line"}))),l.a.createElement(P,null),l.a.createElement(B,null)))}}]),t}(n.Component),J=t(157),z=t(158),D=t(159),V=t(160),Y=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.foods.map((function(e){return l.a.createElement(J.a,{key:e.id},l.a.createElement(z.a,{id:"headingOne",className:"menu-head"},l.a.createElement("h5",{className:"mb-0"},l.a.createElement("button",{id:"toggler"+e.id,className:"btn btn-link"},l.a.createElement("div",{className:"pull-left"},e.section)))),l.a.createElement(D.a,{toggler:"#toggler"+e.id,defaultOpen:1===e.id},l.a.createElement(V.a,{className:"menu-item"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 order-md-12 col-md-5 text-center my-auto"},l.a.createElement("img",{className:"menu-image",src:e.src,alt:e.alt})),l.a.createElement("div",{className:"col-12 order-md-1 col-md-7 text-center text-md-left my-auto"},e.items.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("h4",null,e.head),l.a.createElement("p",null,e.desc))})))))))}));return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row mb-5"},l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10 offset-xl-2 col-xl-8"},l.a.createElement("div",null,e))))}}]),t}(n.Component),H=Object(d.g)(Object(k.connect)((function(e){return{foods:e.foods}}))(Y));var Z=function(){return l.a.createElement("div",{className:"row my-4"},l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10"},l.a.createElement("div",{className:"card mx-auto",style:{width:280}},l.a.createElement("div",{className:"card-body bg-lightr"},l.a.createElement("div",{className:"social-share text-center"},l.a.createElement("h3",null,"Share our Menu"),l.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u=http://w3eatery.com/menu.html",className:"btn btn-lg btn-social-icon btn-facebook",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{href:"https://twitter.com/intent/tweet?url=http://w3eatery.com/menu.html",className:"btn btn-lg btn-social-icon btn-twitter",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-twitter"})))))))},_=t(85),U=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10 offset-xl-2 col-xl-8"},l.a.createElement("div",{className:"home-text-lrg my-5"},l.a.createElement("h4",{className:"text-justify"},"We offer Muffins, Meatballs and Mules as well as a house special soup, salad and chili. We have turkey and veggie options as part of our meatball selections."))))),l.a.createElement(_.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(50%)"}},l.a.createElement(H,null)),l.a.createElement(Z,null),l.a.createElement("div",{className:"row d-none d-sm-block"},l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10 offset-xl-2 col-xl-8"},l.a.createElement("div",{className:"my-5"},l.a.createElement("figure",{className:"figure"},l.a.createElement("img",{src:"assets/images/fresh.jpg",className:"figure-img img-fluid rounded",alt:"chop fresh veggie by alyson-mcphee"}),l.a.createElement("div",{className:"overlay-text"},l.a.createElement("h5",null,"Our dishes are prepared to order with only the freshest ingredients.")))))))}}]),t}(n.Component),$=t(161),K=t(162),Q=function(e){return e&&e.length},X=function(e){return function(a){return!a||a.length<=e}},ee=function(e){return function(a){return a&&a.length>=e}},ae=function(e){return!isNaN(+e)},te=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},ne=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={firstName:"",lastName:"",phoneNum:"",email:"",feedback:"",touched:{firstName:!1,lastName:!1,phoneNum:!1,email:!1}},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current state is: "+JSON.stringify(e)),alert("Current state is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row my-3"},l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10"},l.a.createElement("div",{className:"highlight"},l.a.createElement("h2",{className:"text-center"},"Get In Touch")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10"},l.a.createElement("div",{className:"home-text-lrg my-3"},l.a.createElement("h4",{className:"text-center"},"Please feel free to send us a message if you have questions or comments for us.")))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-10 my-3"},l.a.createElement(R.Form,{model:"feedbackForm",onSubmit:function(a){return e.handleSubmit(a)}},l.a.createElement($.a,null,l.a.createElement(K.a,{className:"col-12 col-md-6"},l.a.createElement(R.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",validators:{required:Q,minLength:ee(2),maxLength:X(15)}}),l.a.createElement(R.Errors,{className:"text-danger",model:".firstName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})),l.a.createElement(K.a,{className:"col-12 col-md-6"},l.a.createElement(R.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",validators:{required:Q,minLength:ee(2),maxLength:X(15)}}),l.a.createElement(R.Errors,{className:"text-danger",model:".lastName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),l.a.createElement($.a,null,l.a.createElement(K.a,{className:"col-12 col-md-6"},l.a.createElement(R.Control.text,{model:".phoneNum",id:"phoneNum",name:"phoneNum",placeholder:"Phone Number",validators:{required:Q,minLength:ee(10),maxLength:X(15),isNumber:ae}}),l.a.createElement(R.Errors,{className:"text-danger",model:".phoneNum",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 10 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})),l.a.createElement(K.a,{className:"col-12 col-md-6"},l.a.createElement(R.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",validators:{required:Q,validEmail:te}}),l.a.createElement(R.Errors,{className:"text-danger",model:".email",show:"touched",component:"div",messages:{required:"Required",validEmail:"Invalid email address"}}))),l.a.createElement($.a,null,l.a.createElement(K.a,{className:"col-12"},l.a.createElement(R.Control.textarea,{model:".feedback",id:"feedback",name:"feedback",rows:"5"}))),l.a.createElement($.a,null,l.a.createElement(K.a,{className:"col-12"},l.a.createElement(L.a,{type:"submit",className:"btn-orange"},"Send Feedback")))))))}}]),t}(n.Component),le={resetFeedbackForm:function(){return R.actions.reset("feedbackForm")}},re=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(N,null),l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/home",component:G}),l.a.createElement(d.b,{path:"/menu",component:U}),l.a.createElement(d.b,{path:"/contact",render:function(){return l.a.createElement(ne,{resetFeedbackForm:e.props.resetFeedbackForm})}}),l.a.createElement(d.a,{to:"/home"})),l.a.createElement(j,null))}}]),t}(n.Component),se=Object(d.g)(Object(k.connect)(null,le)(re)),ce=t(86),me=t(29),oe=[{id:1,src:"assets/images/muffins.jpg",alt:"muffins by roberto-martinez",txt:"Muffins"},{id:2,src:"assets/images/meatballs.jpg",alt:"meatball by jason-leung",txt:"Meatballs"},{id:3,src:"assets/images/mules.jpg",alt:"mule drink by miguel-maldonado",txt:"Mules"}],ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,a=arguments.length>1?arguments[1]:void 0;return a.type,e},de=[{id:1,section:"Muffins",src:"assets/images/muffins.jpg",alt:"muffins by roberto-martinez",items:[{id:1,head:"Blueberry Lemon",desc:"Fresh blueberries and hint of lemon zest"},{id:2,head:"Banana Peanut Butter",desc:"Banana bread with peanut butter chips"},{id:3,head:"Pumpkin Raisin",desc:"Pumpkin blended with tasty raisins"},{id:4,head:"Sweet and Spicy Cornbread",desc:"Classic cornbread with jalapenos"}]},{id:2,section:"Meatballs",src:"assets/images/meatballs.jpg",alt:"meatball by jean-marie-arnaud",items:[{id:1,head:"Italian Meatballs",desc:"Classic Italian style in delicious marinara"},{id:2,head:"Swedish Meatballs",desc:"Swedish style meatballs with mustard cream sauce"},{id:3,head:"Sweet and Sour Meatballs",desc:"Meatballs in a sweet and sour sauce"},{id:4,head:"Turkey Meatballs",desc:"The delightful alternative white meat meatballs"},{id:5,head:"Veggie Meatballs",desc:"The no meat meatballs"}]},{id:3,section:"Mules",src:"assets/images/mules.jpg",alt:"mules by miguel-maldonado",items:[{id:1,head:"Moscow Mule",desc:"vodka, ginger beer, and lime juice"},{id:2,head:"Kentucky Mule",desc:"bourbon, ginger beer, lime juice and mint"},{id:3,head:"Mexican Mule",desc:"Tequila, ginger beer and lime juice"}]},{id:4,section:"Soup and Salad",src:"assets/images/salad.jpg",alt:"salad by jonathan-ybema",items:[{id:1,head:"Italian Wedding Soup",desc:"A soup with spinach, carrots, pasta and meatballs"},{id:2,head:"House Chili",desc:"We offer both a turkey and a veggie chili"},{id:3,head:"House Salad",desc:"Greens, tomatoes, red onion, peppers, bacon, cranberries, feta cheese"}]}],ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,a=arguments.length>1?arguments[1]:void 0;return a.type,e},he=[{src:"assets/images/muffin.jpg",altText:"Muffin photo by david-todd-mccarty",header:"Tasty Tuesday",caption:"Reduced Muffin Prices"},{src:"assets/images/acoustic.jpg",altText:"Acoustic guitar by rachmaddian-shotz",header:"Wednesday Nights",caption:"LIVE Acoustic Music"},{src:"assets/images/mule-top.jpg",altText:"Mule top by alex-plesovskich",header:"Thirsty Thursday",caption:"Reduced Mule Prices"},{src:"assets/images/dice.jpg",altText:"Dice by brett-jordan",header:"Funtime Friday",caption:"*** Game Night ***"}],fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,a=arguments.length>1?arguments[1]:void 0;return a.type,e},Ee={firstName:"",lastName:"",phoneNum:"",email:"",feedback:""},be=(t(144),Object(me.createStore)(Object(me.combineReducers)(Object(ce.a)({banners:ie,foods:ue,items:fe},Object(R.createForms)({feedbackForm:Ee})))));var pe=function(){return l.a.createElement(k.Provider,{store:be},l.a.createElement(v.a,{basename:"/react-project"},l.a.createElement("div",{className:"App"},l.a.createElement(se,null))))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,a,t){e.exports=t(145)},92:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.cae958f3.chunk.js.map