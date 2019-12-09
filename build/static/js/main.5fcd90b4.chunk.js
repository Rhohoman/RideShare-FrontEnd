(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,r){},250:function(e,t,r){e.exports=r(400)},255:function(e,t,r){},400:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(27),o=r.n(s),l=(r(255),r(18)),i=r(19),c=r(21),u=r(20),p=r(22),m=r(54),d=r(29),f=r(419),h=r(416),g=r(212),E=r(414),b=r(24),v=(r(207),"https://ride-share-api.herokuapp.com/api/v1/"),C=v+"users/",O=v+"companies/",j=v+"rides/",y=v+"forums/",U=v+"login/",w=v+"auto_login/",k="ADD_USER",F="LOGIN_USER",S="LOGOUT_USER",N="REMOVE_FOLLOWER",R="ADD_FOLLOWER",x="FETCH_ALL_RIDES",L="FETCH_ALL_FORUMS",_="FETCH_ALL_USERS",P="FETCH_ALL_COMAPNIES",T="FETCH_CURRENT_USER";function M(e){return{type:F,payload:e}}function V(){return function(e){e({type:_}),fetch(C).then(function(e){return e.json()}).then(function(t){e({type:_,payload:t})})}}function A(){return function(e){e({type:P}),fetch(O).then(function(e){return e.json()}).then(function(t){e({type:P,payload:t})})}}function D(){return function(e){fetch(j).then(function(e){return e.json()}).then(function(t){e({type:x,payload:t})})}}function I(){return function(e){fetch(y).then(function(e){return e.json()}).then(function(t){e({type:L,payload:t})})}}function B(){return function(e){e({type:S}),localStorage.removeItem("jwt"),e({type:S})}}function H(e){if(!e.ok)throw Error(e.statusText);return e}var W=function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(r=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).logout=function(){localStorage.removeItem("jwt"),r.props.setLogout()},r.renderProfileLink=function(){return r.props.currentUser?a.a.createElement(b.b,{to:"/profile"},"Profile"):a.a.createElement(b.b,{to:"/login"},"Profile")},r.renderLogout=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(h.a,{position:"right"},a.a.createElement(g.a,{componentClass:"span",onClick:function(){return r.props.history.push("/users/".concat(r.props.currentUser.id))}}),a.a.createElement(b.b,{className:"item",to:"/login",onClick:r.logout},"Logout")))},r.renderLoginSignup=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(h.a,{position:"right"},a.a.createElement(b.b,{className:"span",to:"/login"},"Login"),a.a.createElement(b.b,{className:"span",to:"/signup"},"Sign Up")))},r.renderNav=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E.a,{bg:"dark",expand:"md"},a.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),a.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},a.a.createElement(h.a,{pullRight:!0},a.a.createElement(g.a,{componentClass:"span"},r.renderProfileLink()),a.a.createElement(g.a,{componentClass:"span"},a.a.createElement(b.b,{to:"/rides"},"Rides")),a.a.createElement(g.a,{componentClass:"span"},a.a.createElement(b.b,{to:"/forums"},"Forums")),r.props.currentUser?r.renderLogout():r.renderLoginSignup()))))},r.renderHeader=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"header"},a.a.createElement("div",{className:"container col-11"},a.a.createElement("b",null,"RideShare"))))},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.renderHeader(),this.renderNav())}}]),t}(a.a.Component);var J=Object(d.b)(function(e){return{currentUser:e.user.currentUser}},function(e){return{setLogout:function(){return e(B())}}})(W),G=r(32),q=r(33),z=r(63),Y=function(e){var t=function(e){};return a.a.createElement("div",{className:"profile-card"},a.a.createElement("img",{src:e.user.image_url,alt:"No Profile Image",className:"card-img-top"}),a.a.createElement("div",{className:"card-header"},a.a.createElement("b",null,e.user.name," ")),a.a.createElement("ul",{className:"list-group list-group-flush"},a.a.createElement("li",{onMouseOver:t,className:"list-group-item"},"Car: ",e.user.car," "),a.a.createElement("li",{onMouseOver:t,className:"list-group-item"},"Experience: ",e.user.experience," "),a.a.createElement("li",{onMouseOver:t,className:"list-group-item"},"Rating: ",e.user.rating," "),a.a.createElement("li",{onMouseOver:t,className:"list-group-item"},"Companies: ",e.companies?e.companies.map(function(e){return"".concat(e.name," ")}):"nope"," "),a.a.createElement("li",{onMouseOver:t,className:"list-group-item"},"Base Location: ",e.user.location)))},$=function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(n.Fragment,null,a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},this.props.idx),a.a.createElement("td",null,this.props.ride.distance),a.a.createElement("td",null,this.props.ride.started_at),a.a.createElement("td",null,this.props.ride.end_at),a.a.createElement("td",null,this.props.ride.price),a.a.createElement("td",null,this.props.ride.start_location),a.a.createElement("td",null,this.props.ride.end_location)))}}]),t}(a.a.Component),K=function(e){return a.a.createElement("div",{className:"ride-list"},e.displayDropdown?e.displayDropdown():"",a.a.createElement("table",{className:"table table-striped"},a.a.createElement("thead",{className:"thead-dark"},a.a.createElement("tr",null,a.a.createElement("th",{scope:"col"},"Num"),a.a.createElement("th",{scope:"col"},"Distance"),a.a.createElement("th",{scope:"col"},"Started At"),a.a.createElement("th",{scope:"col"},"Ended At"),a.a.createElement("th",{scope:"col"},"Price"),a.a.createElement("th",{scope:"col"},"Starting Location"),a.a.createElement("th",{scope:"col"},"Ending Location"))),a.a.createElement("tbody",null,function(){if(e.rides)return e.rides.map(function(e,t){return a.a.createElement($,{key:t,idx:t+1,ride:e})})}())))},Q=function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{onClick:function(t){return e.props.handleForumClick(t)}},a.a.createElement("tr",null,a.a.createElement("td",{style:{width:""},scope:"row"},this.props.idx),a.a.createElement("td",{id:this.props.forum.topic,scope:"row",className:"col"},this.props.forum.topic)))}}]),t}(a.a.Component),X=function(e){return a.a.createElement("div",null,a.a.createElement("table",{className:"table table-striped",id:"profile-forums"},a.a.createElement("thead",{className:"thead-dark"},a.a.createElement("tr",null,a.a.createElement("th",{scope:"col"},"Num"),a.a.createElement("th",{className:"col",scope:"col"},"Topic"))),a.a.createElement("tbody",null,function(){if(e.forums)return e.forums.map(function(t,r){return a.a.createElement(n.Fragment,null,a.a.createElement(Q,{handleForumClick:e.handleForumClick,key:r,idx:r+1,forum:t}))})}())))},Z=r(51),ee=r(214),te=r.n(ee),re=function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(r=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={nameValue:r.props.props.user.name,experienceValue:r.props.props.user.experience,ratingValue:r.props.props.user.rating,locationValue:r.props.props.user.location,carValue:r.props.props.user.car,userCompanies:r.props.currentUser.companies,companiesValue:[],options:[]},r.handleCheckBox=function(e){r.state.userCompanies&&r.state.allCompanies&&r.state.allCompanies.map(function(e){r.state.userCompanies.find(e)})},r.onChange=function(e,t){var n=r.state.options;e.target.checked?(console.log("pushing into options",t),n.push(t)):n.pop(t),r.setState({options:n})},r.renderCheckBoxes=function(){if(r.props.companiesValue){var e=r.state.options.map(function(e){return e.id});return console.log("options company ids",e),r.props.companiesValue.map(function(t,n){return a.a.createElement(a.a.Fragment,null,a.a.createElement("label",null,t.name,a.a.createElement("input",{type:"checkbox",checked:e.includes(t.id),onChange:function(e){return r.onChange(e,t)}})))})}},r.handleEditFormChange=function(e){console.log("handling edit",e);var t=e.target.value,n=e.target.name;r.setState(Object(Z.a)({},n,t))},r.renderEditModal=function(){if(r.props.state.modal)return a.a.createElement(te.a,{isOpen:r.props.state.modal,onAfterOpen:r.props.handleAfterOpen,onRequestClose:r.props.handleAfterClose,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,ariaHideApp:!1,data:{background:"green"},contentLabel:"example modal"},a.a.createElement("form",null,a.a.createElement("label",null,"Name:",a.a.createElement("input",{name:"nameValue",type:"text",onChange:function(e){return r.handleEditFormChange(e)},value:r.state.nameValue})),a.a.createElement("br",null),a.a.createElement("label",null,"Experience:",a.a.createElement("input",{name:"experienceValue",type:"text",onChange:function(e){return r.handleEditFormChange(e)},value:r.state.experienceValue})),a.a.createElement("br",null),a.a.createElement("label",null,"Rating:",a.a.createElement("input",{name:"ratingValue",type:"text",onChange:function(e){return r.handleEditFormChange(e)},value:r.state.ratingValue})),a.a.createElement("br",null),a.a.createElement("label",null,"Car:",a.a.createElement("input",{name:"carValue",type:"text",onChange:function(e){return r.handleEditFormChange(e)},value:r.state.carValue})),a.a.createElement("br",null),a.a.createElement("label",null,"Location:",a.a.createElement("input",{name:"locationValue",type:"text",onChange:function(e){return r.handleEditFormChange(e)},value:r.state.locationValue})),a.a.createElement("br",null),a.a.createElement("label",null,"Companies:",r.renderCheckBoxes()),a.a.createElement("br",null),a.a.createElement("button",{type:"submit",onClick:function(e,t){return r.props.handleSubmit(e,r.state)}},"Save Edit")),a.a.createElement("button",{onClick:r.props.handleAfterClose},"Close Modal"))},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({nameValue:this.props.currentUser.name,experienceValue:this.props.currentUser.experience,ratingValue:this.props.currentUser.rating,locationValue:this.props.currentUser.location,carValue:this.props.currentUser.car,companiesValue:this.props.companiesValue,allCompanies:this.props.companiesValue,userCompanies:this.props.currentUser.companies})}},{key:"render",value:function(){return a.a.createElement(n.Fragment,null,this.renderEditModal())}}]),t}(a.a.Component),ne=r(418),ae=r(412),se=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).renderCard=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ne.a,{style:{width:"18rem"}},a.a.createElement(ne.a.Img,{variant:"top",src:r.props.follower.image_url}),a.a.createElement(ne.a.Body,null,a.a.createElement(ne.a.Title,null,"Name: ",r.props.follower.name),a.a.createElement(ne.a.Text,null,"I drive a: ",r.props.follower.car),a.a.createElement("div",{onClick:function(e,t){return r.props.handleUserClick(e,r.props.follower)}},a.a.createElement(b.b,{to:"/user/".concat(r.props.follower.id)},a.a.createElement(ae.a,{type:"button",className:"btn btn-primary"},"Check out my profile!"))))))},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"card follower-container"},this.renderCard())}}]),t}(a.a.Component),oe=function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(r=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).handleUserClick=function(e,t){return a.a.createElement(ie,Object.assign({},r.props,{user:r.props.user}))},r.followerCards=function(){if(r.props.followers)return r.props.followers.map(function(e,t){return a.a.createElement(se,{handleUserClick:r.handleUserClick,key:t,idx:t+1,follower:e})})},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"card-group col-12"},this.followerCards())}}]),t}(n.Component),le=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleEdit=function(e){console.log(e),r.setState({modal:!0})},r.handleAfterOpen=function(){console.log("opened")},r.handleAfterClose=function(){console.log("closed"),r.setState({modal:!1})},r.handleSubmit=function(e,t){e.preventDefault(),console.log("in save edit user",r.state),r.patchEditProfile(e,t),r.setState({modal:!1})},r.handleDelete=function(e){console.log("in handle delete function",e.target)},r.handleForumClick=function(e){r.setState({clickedForum:e.target.id}),r.setState({openChat:!0})},r.renderModal=function(){if(console.log("rendar modal with ",r.props.allCompanies),r.props.user)return a.a.createElement(re,{state:r.state,props:r.props,companiesValue:r.props.allCompanies,currentUser:r.props.currentUser,handleAfterOpen:r.handleAfterOpen,handleAfterClose:r.handleAfterClose,handleEditFormChange:r.handleEditFormChange,handleSubmit:r.handleSubmit})},r.patchEditProfile=function(e,t){e.preventDefault(),r.props.currentUser&&(t.id=r.props.currentUser.id,fetch("".concat(C,"/").concat(r.props.currentUser.id),{headers:{accepts:"application/json","content-type":"application/json"},method:"PATCH",body:JSON.stringify({id:t.id,name:t.nameValue,experience:t.experienceValue,car:t.carValue,companies:t.options,location:t.locationValue,rating:t.ratingValue})}).then(function(e){return e.json()}).then(function(e){r.setState({modal:!1},r.props.fetchCurrentUser(e.user))}))},r.handleFollow=function(){console.log(Object(z.a)(Object(z.a)(r))),r.props.postNewFriendship(r.props.currentUser,r.props.user)},r.handleUnFollow=function(){console.log(Object(z.a)(Object(z.a)(r)));var e=Object.assign({},r.props.currentUser);r.setState(function(t){return{currentUser:Object(q.a)({},t.currentUser,{followers:e.followers.filter(function(e){return e.id===r.props.user.id})})}})},r.renderProfileCard=function(){if(r.state.user)return a.a.createElement(Y,{user:r.state.user,companies:r.state.user.companies})},r.renderEditButton=function(){return r.props.user==r.props.currentUser?a.a.createElement("div",null,a.a.createElement("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModalCenter",id:"edit-profile",onClick:r.handleEdit}," Edit Profile "),a.a.createElement("button",{type:"button",className:"btn btn-primary",id:"edit-profile",onClick:r.handleDelete}," Delete Profile ")):a.a.createElement(a.a.Fragment,null)},r.renderFollowButton=function(){var e=null;return r.props.currentUser.followers&&(e=r.props.currentUser.followers),e.find(function(e){return e.id===r.props.user.id})?a.a.createElement(a.a.Fragment,null,a.a.createElement(ae.a,{className:"btn btn-primary",id:"follow-user",onClick:function(){return r.handleUnFollow()}}," Unfollow this user ")):a.a.createElement(a.a.Fragment,null,a.a.createElement(ae.a,{className:"btn btn-primary",id:"follow-user",onClick:function(){return r.handleFollow()}}," Follow this user "))},r.renderPage=function(){return a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:"container col-11"},a.a.createElement("div",{className:"row justify-content-center"},a.a.createElement("div",{className:"col-3 justify-content-center",id:"profile-card-container"},r.renderProfileCard(),r.renderEditButton(),r.renderModal()),a.a.createElement("div",{className:"col",id:"profile-rides-list"},a.a.createElement(K,{rides:r.state.user.rides}),a.a.createElement(X,{forums:r.state.user.forums,handleForumClick:r.handleForumClick}),a.a.createElement(oe,{followers:r.state.user.followers})))))},r.state={modal:!1,user:r.props.user,editedUser:r.props.user,clickedForum:null,openChat:!1,isCurrentUserProfile:null},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCompanies(),this.setState({isCurrentUserProfile:this.props.isCurrentUserProfile})}},{key:"componentWillReceiveProps",value:function(e){e.isCurrentUserProfile?this.setState({user:e.currentUser}):this.setState({user:e.user})}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.currentUser?this.renderPage():a.a.createElement("p",null,"not logged in "))}}]),t}(a.a.Component);var ie=Object(d.b)(function(e){var t=e.user,r=e.forums;return console.log("profile mapstatetoprops staete",r.forums[0]),{allCompanies:t.allCompanies[1],rides:t.rides,forums:r.forums[0],allForums:t.forums,users:t.users[1],currentUser:t.currentUser}},function(e){return{fetchCompanies:function(){return e(A())},patchEditProfile:function(t){return e((r=t,function(e){var t=this.state.currentUser.id;fetch("".concat(C,"/").concat(t),{headers:{accepts:"application/json","content-type":"application/json"},method:"PATCH",body:JSON.stringify({name:r.nameValue,experience:r.experienceValue,car:r.carValue,companies:r.companiesValue,location:r.locationValue,rating:r.ratingValue})}).then(H).then(function(t){e(V())})}));var r},fetchCurrentUser:function(t){return e((r=t,function(e){e({type:T}),fetch("".concat(C,"/").concat(r.id)).then(function(e){return e.json()}).then(function(t){e(M(t))})}));var r}}})(le),ce=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;if(this.props.getUser)return a.a.createElement("div",{onClick:function(t){return e.props.handleClick(t,e.props.getUser)},name:this.props.superlative},a.a.createElement(b.b,{to:"/user/".concat(this.props.getUser.id)},a.a.createElement("div",{className:this.props.design},a.a.createElement("h3",{class:"pull-right"},a.a.createElement("i",{className:this.props.icon}," ")),a.a.createElement("h4",{class:"list-group-item-heading count"},this.props.title,this.props.getUser.name),a.a.createElement("p",{class:"list-group-item-text"},this.props.getStat?this.props.getStat(this.props.getUser):null,"rating"===this.props.superlative?this.props.getUser.rating:null,"experience"===this.props.superlative?this.props.getUser.experience:null))))}}]),t}(a.a.Component),ue=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).getTotalMiles=function(e){var t=0;if(e.rides)return e.rides.map(function(e){return t+=e.distance}),t},r.getTotalEarned=function(e){var t=0;if(e.rides)return e.rides.map(function(e){return t+=e.price}),t},r.getTotalTimeDriving=function(e){var t=0;if(e.rides)return e.rides.map(function(e){var r=e.end_at-e.started_at;t+=r}),t},r.getMileLeader=function(e){var t=Object(G.a)(e);if(t!==[])return t.sort(function(e,t){return r.getTotalMiles(e)-r.getTotalMiles(t)}),t.reverse()[0]},r.getRatingLeader=function(e){var t=Object(G.a)(e);return t!==[]&&t.sort(function(e,t){return e.rating-t.rating}),t.reverse()[0]},r.getExperienceLeader=function(e){var t=Object(G.a)(e);return t!==[]&&t.sort(function(e,t){return e.experience-t.experience}),t.reverse()[0]},r.getTimeLeader=function(e){if(e!==[])return e.sort(function(e,t){return r.getTimeLeader(e)-r.getTimeLeader(t)})},r.getEarnerLeader=function(e){var t=Object(G.a)(e);if(t!==[])return t.sort(function(e,t){return r.getTotalEarned(e)-r.getTotalEarned(t)}),t.reverse()[0]},r.renderUserTotals=function(){if(r.props.leaders)return r.props.leaders.map(function(e,t){return a.a.createElement("div",{key:t},a.a.createElement("h1",null,"User:",e.name),a.a.createElement("p",null,"Miles: ",r.getTotalMiles(e)),a.a.createElement("p",null,"Total Earned:",r.getTotalEarned(e)),a.a.createElement("p",null,"Total Time:",r.getTotalTimeDriving(e)))})},r.handleUserClick=function(e,t){return console.log("in handle user click ",t),!t===r.props.currentUser?a.a.createElement(ie,{user:t,rides:r.props.rides,forum:r.props.forums,isCurrentUserProfile:!1,currentUser:r.props.currentUser,allCompanies:r.props.allCompanies}):a.a.createElement(ie,{user:t,rides:r.props.rides,forum:r.props.forums,isCurrentUserProfile:!0,currentUser:r.props.currentUser,allCompanies:r.props.allCompanies})},r.renderLeaderBoard=function(){if(console.log("in render leaderboard"),console.log("Miles:",r.getTotalMiles(r.props.leaders)),r.props.leaders)return a.a.createElement(n.Fragment,null,a.a.createElement("div",{class:"container"},a.a.createElement("div",{class:"row"},a.a.createElement("div",{class:"col-md-9"},a.a.createElement("div",{class:"list-group"},a.a.createElement(ce,{title:"Highest Rating: ",design:"list-group-item google-plus",icon:"icon glyphicon glyphicon-star",getUser:r.getRatingLeader(r.props.leaders),handleClick:r.handleUserClick,superlative:"rating"}),a.a.createElement(ce,{title:"Most Miles: ",design:"list-group-item twitter",icon:"icon glyphicon glyphicon-road",getUser:r.getMileLeader(r.props.leaders),handleClick:r.handleUserClick,getStat:r.getTotalMiles}),a.a.createElement(ce,{title:"Highest Earner: ",design:"list-group-item youtube",icon:"icon glyphicon glyphicon-usd",getUser:r.getEarnerLeader(r.props.leaders),handleClick:r.handleUserClick,superlative:"money",getStat:r.getTotalEarned}),a.a.createElement(ce,{title:"Most Experience: ",design:"list-group-item tumblr",icon:"icon glyphicon glyphicon-hourglass",getUser:r.getExperienceLeader(r.props.leaders),handleClick:r.handleUserClick,superlative:"experience"}))))))},r.state={mostMiles:"",mostRating:"",mostEarned:"",mostTime:"",mostExperience:""},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.getRatingLeader(e.leaders),r=this.getMileLeader(e.leaders),n=this.getEarnerLeader(e.leaders),a=this.getExperienceLeader(e.leaders);this.setState({mostMiles:r,mostRating:t,mostEarned:n,mostExperience:a})}},{key:"render",value:function(){return a.a.createElement("div",null,this.renderLeaderBoard())}}]),t}(a.a.Component);var pe=Object(d.b)(function(e){var t=e.user,r=e.rides.rides;return console.log("mapping state in rides",t),{allCompanies:t.allCompanies,rides:r[0],users:t.users[2],currentUser:t.currentUser}},function(e){return{fetchRides:function(){return e(D())},fetchUsers:function(){return e(V())}}})(ue),me=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).returnDropdown=function(){return a.a.createElement("div",{className:""},a.a.createElement("form",{action:"/action_page.php"},a.a.createElement("select",{name:"cars",onChange:r.handleSortSubmit},a.a.createElement("option",{value:"recent"},"Most Recent"),a.a.createElement("option",{value:"price"},"Price"),a.a.createElement("option",{value:"distance"},"Distance")),a.a.createElement("select",{name:"cars",onChange:r.handleFilterSubmit},a.a.createElement("option",{value:"all"},"All"),a.a.createElement("option",{value:"uber"},"Uber"),a.a.createElement("option",{value:"lyft"},"Lyft"),"////////////////ADD ANOTHER COMPANY IF WE WANT"),a.a.createElement("input",{type:"text",onChange:r.handleSearch,value:r.state.textInput,placeholder:"Search by location"}),a.a.createElement("form",{action:"/action_page.php"},a.a.createElement("input",{type:"radio",name:"gender",value:"friends",onChange:function(e){return r.handleFriendFilter(e)}})," Friends",a.a.createElement("input",{type:"radio",name:"gender",value:"all",onChange:r.handleChangeBack})," All")))},r.handleChangeBack=function(){r.setState({filteredRides:r.state.allRides})},r.handleFriendFilter=function(e){e.preventDefault();var t=r.props.user.followers.map(function(e){return e.id}),n=[];r.state.allRides.map(function(e){for(var r=0;r<t.length;r++)e.user_id===t[r]&&n.push(e)}),r.setState({filteredRides:n})},r.handleSearch=function(e){r.setState({textInput:e.target.value});var t=r.state.allRides.filter(function(t){return t.start_location.toLowerCase().includes(e.target.value.toLowerCase())||t.end_location.toLowerCase().includes(e.target.value.toLowerCase())});r.setState({filteredRides:t})},r.handleSortSubmit=function(e){if(e.preventDefault(),"distance"===e.target.value){var t=r.state.filteredRides.sort(function(e,t){return e.distance<t.distance?1:-1});r.setState({filteredRides:t})}else if("price"===e.target.value){var n=r.state.filteredRides.sort(function(e,t){return e.price<t.price?1:-1});r.setState({filteredRides:n})}else if("recent"===e.target.value){var a=r.state.filteredRides.sort(function(e,t){return e.end_at>t.end_at?1:-1});r.setState({filteredRides:a})}},r.handleFilterSubmit=function(e){if(e.preventDefault(),"all"===e.target.value)r.setState({filteredRides:r.state.allRides});else if("uber"===e.target.value){var t=r.state.allRides.filter(function(e){return 1===e.company_id});r.setState({filteredRides:t})}else if("lyft"===e.target.value){var n=r.state.allRides.filter(function(e){return 2===e.company_id});r.setState({filteredRides:n})}},r.state={allRides:r.props.rides,filteredRides:r.props.rides,users:[],textInput:""},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchRides(),this.props.fetchUsers()}},{key:"componentWillReceiveProps",value:function(){this.setState({users:this.props.users,allRides:this.props.rides,filteredRides:this.props.rides})}},{key:"render",value:function(){return console.log("hit rides route: props.users",this.props.users),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container col-11"},this.props.users?a.a.createElement(pe,{leaders:this.props.users,allUsers:this.props.users,user:this.props.currentUser,forum:this.props.forums,rides:this.props.rides,allCompanies:this.props.allCompanies}):null,a.a.createElement("div",{className:"col-12",id:"profile-rides-list"},a.a.createElement(K,{rides:this.state.filteredRides,displayDropdown:this.returnDropdown}))))}}]),t}(a.a.Component);var de=Object(d.b)(function(e){var t=e.user,r=e.rides.rides,n=e.forums.forums;return{allCompanies:t.allCompanies,rides:r[0],forums:t.forums,allForums:n[0],users:t.users[2],currentUser:t.currentUser}},function(e){return{fetchRides:function(){return e(D())},fetchUsers:function(){return e(V())}}})(me),fe=r(118),he=r(413),ge=r(417),Ee=(r(165),function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(r=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={username:"",password:""},r.handleChange=function(e){r.setState(Object(Z.a)({},e.target.name,e.target.value))},r.handleSubmit=function(){console.log("in handle submit login"),r.props.userLoginFetch(r.state)},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.currentUser&&this.props.history.push("/profile")}},{key:"render",value:function(){return a.a.createElement("div",{className:"centered"},a.a.createElement(fe.e,null,a.a.createElement(fe.i,null,a.a.createElement(fe.d,null,a.a.createElement(he.a,{onSubmit:this.handleSubmit},a.a.createElement("p",{className:"h4 text-center mb-4"},"Sign in"),a.a.createElement(he.a.Field,null,a.a.createElement("label",null,"Username"),a.a.createElement("input",{onChange:this.handleChange,name:"username",value:this.state.username,placeholder:"Username"})),a.a.createElement("br",null),a.a.createElement(he.a.Field,null,a.a.createElement("label",null,"Password"),a.a.createElement("input",{onChange:this.handleChange,type:"password",name:"password",value:this.state.password,placeholder:"Password"})),a.a.createElement("div",{className:"text-center mt-4"},a.a.createElement(ge.a,{color:"indigo",type:"submit"},"Login")))))))}}]),t}(a.a.Component));var be=Object(d.b)(function(e){return{currentUser:e.user.currentUser}},function(e){return{userLoginFetch:function(t){return e((r=t,function(e){fetch(U,{method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json"},body:JSON.stringify(r)}).then(function(e){return e.json()}).then(function(t){t.errors?alert(t.errors):(localStorage.setItem("jwt",t.jwt),e(M(t.user)))})}));var r}}})(Ee),ve=function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(r=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={name:"",username:"",password:"",passwordConfirmation:""},r.handleChange=function(e){r.setState(Object(Z.a)({},e.target.name,e.target.value))},r.handleSubmit=function(){r.state.password===r.state.passwordConfirmation?(console.log("in handle submit create user"),r.props.createUser(r.state)):alert("Passwords don't match!")},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(he.a,{onSubmit:this.handleSubmit},a.a.createElement(he.a.Field,null,a.a.createElement("label",null,"Username"),a.a.createElement("input",{onChange:this.handleChange,name:"username",value:this.state.username,placeholder:"Username"})),a.a.createElement(he.a.Field,null,a.a.createElement("label",null,"Name"),a.a.createElement("input",{onChange:this.handleChange,name:"name",value:this.state.name,placeholder:"Name"})),a.a.createElement(he.a.Field,null,a.a.createElement("label",null,"Password"),a.a.createElement("input",{onChange:this.handleChange,type:"password",name:"password",value:this.state.password,placeholder:"Password"})),a.a.createElement(he.a.Field,null,a.a.createElement("label",null,"Password Confirmation"),a.a.createElement("input",{onChange:this.handleChange,type:"password",name:"passwordConfirmation",value:this.state.passwordConfirmation,placeholder:"Password Confirmation"})),a.a.createElement(ge.a,{type:"submit"},"Submit")))}}]),t}(a.a.Component),Ce=Object(d.b)(null,function(e){return{createUser:function(t){return e((r=t,function(e){fetch(C,{method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json"},body:JSON.stringify(r)}).then(function(e){return e.json()}).then(function(t){t.error?alert(t.error):(localStorage.setItem("jwt",t.jwt),e(M(t.user)))})}));var r}}})(ve),Oe=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).renderMessages=function(){return r.state.messages.map(function(e){return a.a.createElement("div",null,a.a.createElement("div",{className:"incoming_msg"},a.a.createElement("div",{className:"incoming_msg_img"}," ",a.a.createElement("img",{src:"https://ptetutorials.com/images/user-profile.png",alt:"sunil"})," "),a.a.createElement("div",{className:"received_msg"},a.a.createElement("div",{className:"received_withd_msg"},a.a.createElement("p",null,e.content),a.a.createElement("span",{className:"time_date"},"  ",r.props.users.find(function(t){return t.id===e.user_id}).name,"   |  ",e.created_at,"  ")))))})},r.handleClose=function(){r.props.closeChat()},r.handleInput=function(e){r.setState({formInput:e.target.value})},r.handleMessageSubmit=function(){fetch("https://ride-share-api.herokuapp.com/api/v1/messages",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({forum_id:r.state.currentChat.id,user_id:r.props.currentUser.id,content:r.state.formInput})}).then(function(e){return e.json()}).then(function(e){return r.addNewMessage(e)})},r.addNewMessage=function(e){var t=[].concat(Object(G.a)(r.state.messages),[e]);r.setState({messages:t}),r.setState({formInput:""})},r.state={formInput:"",currentUser:r.props.currentUser,currentChat:r.props.currentChat,messages:r.props.currentChat.messages},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({currentUser:e.currentUser,currentChat:e.currentChat,messages:e.currentChat.messages})}},{key:"render",value:function(){var e=this;return a.a.createElement(n.Fragment,null,a.a.createElement("div",{class:"container"},a.a.createElement("h3",{class:" text-center"},"Messaging"),a.a.createElement("div",{class:"messaging"},a.a.createElement("div",{class:"inbox_msg"},a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e.handleClose()}},"Close Chat"),a.a.createElement("div",{class:"headind_srch"})),a.a.createElement("div",{class:"mesgs"},a.a.createElement("div",{class:"msg_history"},this.renderMessages()),a.a.createElement("div",{class:"type_msg"},a.a.createElement("div",{class:"input_msg_write"},a.a.createElement("input",{type:"text",class:"write_msg",placeholder:"Type a message",value:this.state.formInput,onChange:function(t){return e.handleInput(t)}}),a.a.createElement("button",{class:"msg_send_btn",type:"button",onClick:function(){return e.handleMessageSubmit()}},a.a.createElement("i",{class:"fa fa-paper-plane-o","aria-hidden":"true"})))))),a.a.createElement("p",{class:"text-center top_spac"}," Design by ",a.a.createElement("a",{target:"_blank",href:"#"},"Brian Murillo")))))}}]),t}(n.Component),je=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleForumClick=function(e){r.setState({clickedForum:e.target.id}),r.setState({openChat:!0})},r.closeChat=function(){r.setState({openChat:!1})},r.renderPage=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,r.state.openChat?a.a.createElement(Oe,{currentUser:r.props.currentUser,closeChat:r.closeChat,users:r.props.users,currentChat:r.props.allForums.find(function(e){return e.topic===r.state.clickedForum})}):a.a.createElement(X,{handleForumClick:r.handleForumClick,forums:r.props.allForums})))},r.state={allForums:null,clickedForum:null,openChat:!1},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchForums(),this.props.fetchUsers()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.currentUser?this.renderPage():a.a.createElement("p",null,"Not Logged In "))}}]),t}(a.a.Component);var ye=Object(d.b)(function(e){var t=e.user,r=e.forums.forums;return console.log("mapping state in forums",t),{allCompanies:t.allCompanies,rides:t.rides,forums:t.forums,allForums:r[0],users:t.users[2],currentUser:t.currentUser}},function(e){return{fetchUsers:function(){return e(V())},fetchForums:function(){return e(I())}}})(je),Ue=function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(r=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).renderUserPage=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{path:"/users/:id",exact:!0,render:function(e){var t=parseInt(e.match.params.id);if(r.props.currentUser&&t!==r.props.currentUser.id){var n=r.props.users.find(function(e){return e.id===t});return a.a.createElement(ie,Object.assign({},e,{allCompanies:r.props.allCompanies,currentUser:r.props.currentUser,user:n}))}}}))},r.renderPage=function(e){var t=parseInt(e.match.params.id);if(r.props.currentUser&&t!==r.props.currentUser.id&&r.props.users){var n=r.props.users.find(function(e){return e.id===t});return a.a.createElement(ie,Object.assign({},e,{allCompanies:r.props.allCompanies,isCurrentUserProfile:!1,currentUser:r.props.currentUser,user:n}))}},r.renderProfileRoute=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{path:"/users/:id",exact:!0,render:function(e){var t=parseInt(e.match.params.id);if(r.props.currentUser){if(t!==r.props.currentUser.id){var n=r.props.users.find(function(e){return e.id===t});return a.a.createElement(ie,Object.assign({},e,{allCompanies:r.props.allCompanies,currentUser:r.props.currentUser,user:n}))}return a.a.createElement(ie,Object.assign({},e,{allCompanies:r.props.allCompanies,currentUser:r.props.currentUser,user:r.props.currentUser}))}}}))},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getProfileFetch(),this.props.fetchRides(),this.props.fetchUsers(),this.props.fetchForums()}},{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,null,a.a.createElement(J,{history:this.props.history,currentUser:this.props.currentUser}),a.a.createElement(f.a.Row,{centered:!0},a.a.createElement(m.c,null,a.a.createElement(m.a,{path:"/login",render:function(t){return a.a.createElement(be,Object.assign({},t,{setCurrentUser:e.props.setCurrentUser}))}}),a.a.createElement(m.a,{path:"/profile",render:function(t){return a.a.createElement(ie,Object.assign({},t,{allCompanies:e.props.allCompanies,isCurrentUserProfile:!1,currentUser:e.props.currentUser,user:e.props.currentUser}))}}),a.a.createElement(m.a,{path:"/user/:id",render:function(t){return e.renderPage(t)}}),a.a.createElement(m.a,{path:"/forums",component:ye}),a.a.createElement(m.a,{path:"/rides",component:de}),a.a.createElement(m.a,{path:"/signup",component:Ce})))))}}]),t}(a.a.Component);var we=Object(d.b)(function(e){var t=e.user,r=e.rides.rides,n=e.forums.forums;return{allCompanies:t.allCompanies,rides:r[0],forums:t.forums,allForums:n[0],users:t.users[1],currentUser:t.currentUser}},function(e){return{getProfileFetch:function(){return e(function(e){var t=localStorage.getItem("jwt");t&&fetch(w,{headers:{Authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).then(function(t){t.errors?(alert(t.errors),localStorage.removeItem("jwt")):e(M(t))})})},setLogout:function(){return e(B())},fetchRides:function(){return e(D())},fetchForums:function(){return e(I())},fetchUsers:function(){return e(V())},fetchCompanies:function(){return e(A())}}})(Ue);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=r(61),Fe=r(72),Se={users:[],allCompanies:[],forums:[],rides:[],allForums:[],friendships:[],currentUser:null};function Ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(q.a)({},e,{users:[].concat(Object(G.a)(e.users),[t.payload])});case"RESET":return Se;case P:return Object(q.a)({},e,{allCompanies:[].concat(Object(G.a)(e.allCompanies),[t.payload])});case F:return Object(q.a)({},e,{currentUser:t.payload});case _:return Object(q.a)({},e,{users:[].concat(Object(G.a)(e.users),[t.payload])});case R:case N:return Object(q.a)({},e,{currentUser:t.payload});case S:return Object(q.a)({},e,{currentUser:null});default:return e}}var Re={forums:[]};var xe={rides:[]};var Le=Object(ke.c)({currentUser:Ne.currentUser,user:Ne,rides:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(q.a)({},e,{rides:[].concat(Object(G.a)(e.rides),[t.payload])});default:return e}},forums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(q.a)({},e,{forums:[].concat(Object(G.a)(e.forums),[t.payload])});default:return e}},routing:Fe.routerReducer}),_e=r(233),Pe=r(238),Te=(Object(Fe.routerMiddleware)(Pe.a),Object(ke.d)(Le,Object(ke.a)(_e.a)));o.a.render(a.a.createElement(d.a,{store:Te},a.a.createElement(b.a,null,a.a.createElement(m.a,{path:"/",component:we}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[250,1,2]]]);
//# sourceMappingURL=main.5fcd90b4.chunk.js.map