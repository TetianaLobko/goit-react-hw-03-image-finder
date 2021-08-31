(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{19:function(e,t,a){},3:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=(a(19),a(12)),s=a(5),l=a(6),m=a(8),u=a(7),h=a(10);a(20);var g={imagesFetch:function(e,t){return fetch("".concat("https://pixabay.com/api/","?").concat("key=21324053-9f61ed863564998c3c32e619e","&q=").concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("There are no images for your request"))}))}},d=a(13),j=a.n(d),b=(a(3),a(1)),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={nameImage:""},e.onValueInput=function(t){e.setState({nameImage:t.currentTarget.value.toLowerCase()})},e.onSubmitFetch=function(t){t.preventDefault(),""!==e.state.nameImage.trim()?(e.props.onSubmit(e.state.nameImage.trim()),e.setState({nameImage:""})):h.b.error("Enter your query")},e}return Object(l.a)(a,[{key:"render",value:function(){var e=j.a.generate();return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmitFetch,children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{id:e,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"name",value:this.state.nameImage,onChange:this.onValueInput})]})})}}]),a}(n.Component);function p(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL,r=e.onClick;return Object(b.jsx)("li",{onClick:function(){return r(n,a)},className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image"})})}function y(e){var t=e.arrayImages,a=e.onSubmit;return Object(b.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(b.jsx)(p,{webformatURL:n,tags:o,largeImageURL:r,onClick:a},t)}))})}var O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).exitModal=function(t){"Escape"===t.code&&e.props.onClose(),console.log(t.code)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.exitModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.exitModal)}},{key:"render",value:function(){var e=document.querySelector("#modal-root");return Object(o.createPortal)(Object(b.jsx)("div",{className:"Overlay",children:Object(b.jsx)("div",{className:"Modal",children:this.props.children})}),e)}}]),a}(n.Component),v=a(14),I=a.n(v);function x(){return Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)(I.a,{type:"BallTriangle",color:"#00BFFF",height:200,width:200})})}var S=function(e){var t=e.children,a=e.onClick;return Object(b.jsx)("div",{className:"containerBtn-loadMore",children:Object(b.jsx)("button",{className:"Button",onClick:a,children:t})})},w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={nameImage:"",imagesArray:[],loading:!1,selectedImage:null,page:1,showModal:!1,error:null},e.searchImagesFetch=function(){var t=e.state,a=t.page,n=t.nameImage;e.setState({loading:!0}),g.imagesFetch(n,a).then((function(t){return e.checkNewFetchImagesArray(t.hits)})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState((function(e){return{loading:!1,page:e.page+1}}))}))},e.checkNewFetchImagesArray=function(t){t===[]?e.setState({imagesArray:t}):e.setState((function(e){return{imagesArray:[].concat(Object(i.a)(e.imagesArray),Object(i.a)(t))}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.isHandleFormSubmit=function(t){e.setState({nameImage:t})},e.isCurrentImage=function(t,a){e.setState({selectedImage:[t,a],showModal:!0})},e.scrollGallery=function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),1e3)},e.onClickLoadMore=function(){e.searchImagesFetch(),e.scrollGallery()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.nameImage!==this.state.nameImage&&(this.setState({page:1,nameImage:this.state.nameImage,imagesArray:[]}),this.searchImagesFetch())}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.showModal,r=t.nameImage,o=t.imagesArray,c=t.selectedImage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{onSubmit:this.isHandleFormSubmit}),o&&Object(b.jsx)(y,{arrayImages:o,onSubmit:this.isCurrentImage}),n&&Object(b.jsx)(O,{onClose:function(){return e.toggleModal()},children:Object(b.jsx)("img",{src:c[0],alt:c[1]})}),!r&&Object(b.jsx)("div",{className:"container-paragraphInfo",children:Object(b.jsx)("p",{className:"paragraphInfo",children:"Please, enter your request in the field above!"})}),Object(b.jsx)(h.a,{autoClose:3e3}),a&&Object(b.jsx)(x,{}),0!==o.length&&Object(b.jsx)(S,{onClick:this.onClickLoadMore,children:"Load more"})]})}}]),a}(n.Component);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.9df43830.chunk.js.map