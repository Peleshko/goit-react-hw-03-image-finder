(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2Xv1l"}},17:function(e,t,a){e.exports={Overlay:"Modal_Overlay__sZ2tb",Modal:"Modal_Modal__1gMrb"}},30:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3THpx",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__BfzPY"}},31:function(e,t,a){e.exports={Button:"Button_Button__1weoQ"}},33:function(e,t,a){e.exports={Spinner:"Loader_Spinner__36IMe"}},34:function(e,t,a){e.exports={App:"App_App__20TzL"}},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),s=a(18),l=a(13),i=a(4),u=a(5),h=a(7),p=a(6),m=a(8),d=a.n(m),g=a(35),b=a(19),j=(a(41),a(9)),f=a.n(j),v=a(1),y=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):Object(b.b)("Enter your query!")},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(v.jsx)("header",{className:f.a.Searchbar,children:Object(v.jsxs)("form",{className:f.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(v.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(v.jsx)(g.a,{})}),Object(v.jsx)(b.a,{autoClose:2e3}),Object(v.jsx)("input",{className:f.a.SearchFormInput,type:"text",autoComplete:"off",name:"searchQuery",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:e})]})})}}]),a}(n.Component),O=y,x=a(20),_=a(30),I=a.n(_),S=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).modalContent=function(t){e.props.onItemClick(t),console.log(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.webformatURL,r=t.largeImageURL,o=t.tags;return Object(v.jsx)("img",{src:n,alt:o,"data-src":r,className:I.a.ImageGalleryItemImage,onClick:function(){return e.modalContent(a)}})}}]),a}(n.Component),k=S,C=a(16),w=a.n(C),L=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleOpenModal=function(t){t.target!==t.currentTarget&&e.props.onClick()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.images,a=e.onItemClick;return Object(v.jsx)("ul",{className:w.a.ImageGallery,onClick:this.handleOpenModal,children:t&&t.map((function(e){return Object(v.jsx)("li",{className:w.a.ImageGalleryItem,children:Object(v.jsx)(k,Object(x.a)(Object(x.a)({},e),{},{onItemClick:a}))},e.id)}))})}}]),a}(n.Component),M=L,B=a(17),F=a.n(B),Q=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onBackdrop()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onBackdrop()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.content,a=e.tags;return console.log(t),Object(v.jsx)("div",{className:F.a.Overlay,onClick:this.handleBackdropClick,children:Object(v.jsx)("div",{className:F.a.Modal,children:Object(v.jsx)("img",{src:t,alt:a})})})}}]),a}(n.Component),N=Q,G=a(31),A=a.n(G),D=function(e){var t=e.onPress;return Object(v.jsx)("button",{type:"button",onClick:t,className:A.a.Button,children:"Load more"})},E=a(32),P=a.n(E),T=a(33),U=a.n(T),R=function(){return Object(v.jsx)("div",{className:U.a.Spinner,children:Object(v.jsx)(P.a,{type:"Puff",color:"#00BFFF",height:100,width:100})})},q=a(14),z=a.n(q);z.a.defaults.baseURL="https://pixabay.com/api/",z.a.defaults.params={key:"24006178-a076599a61b558ce501b87587",image_type:"photo",orientation:"horizontal",per_page:12};var K=function(){var e=Object(l.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get("",{params:{q:t,page:a}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),H=K,J=a(34),W=a.n(J),X=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={modalContent:"",searchQuery:"",page:1,visibleImages:[],isLoading:!1,openModal:!1},e.toggleModal=function(){e.setState((function(e){return{openModal:!e.openModal}}))},e.toggleLoading=function(){e.setState((function(e){return{isLoading:!e.isLoading}}))},e.handleChangeQuery=function(t){e.setState({searchQuery:t,page:1,visibleImages:[]})},e.handleNextPage=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.modalContentSet=function(t){var a=e.state.visibleImages.find((function(e){return e.id===t}));e.setState({modalContent:a.largeImageURL})},e.getData=Object(l.a)(d.a.mark((function t(){var a,n,r,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.searchQuery,r=a.page,e.toggleLoading(),t.prev=2,t.next=5,H(n,r);case 5:o=t.sent,e.setState((function(e){var t=e.visibleImages;return{visibleImages:[].concat(Object(s.a)(t),Object(s.a)(o.hits))}})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.error(t.t0);case 12:return t.prev=12,e.toggleLoading(),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])}))),e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.searchQuery,n=t.page;a===this.state.searchQuery&&n===this.state.page||this.getData(),this.handleScroll()}},{key:"render",value:function(){var e=this.state,t=e.visibleImages,a=e.openModal,n=e.modalContent,r=e.isLoading,o=e.page,c=t.length/o===12,s=t.length>0&&!r&&c;return Object(v.jsxs)("div",{className:W.a.App,children:[Object(v.jsx)(O,{onSubmit:this.handleChangeQuery}),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(M,{images:t,onClick:this.toggleModal,onItemClick:this.modalContentSet}),a&&Object(v.jsx)(N,{content:n,onBackdrop:this.toggleModal}),r&&Object(v.jsx)(R,{}),s&&Object(v.jsx)(D,{name:"Load more",onPress:this.handleNextPage})]})]})}}]),a}(n.Component),Z=X;a(81);c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(Z,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1qG9O",SearchForm:"Searchbar_SearchForm__3AlMX",SearchFormButton:"Searchbar_SearchFormButton__2hWVI",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2Zjwo",SearchFormInput:"Searchbar_SearchFormInput__t7Ml_"}}},[[82,1,2]]]);
//# sourceMappingURL=main.47e7ef7c.chunk.js.map