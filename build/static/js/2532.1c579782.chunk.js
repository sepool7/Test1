(self.webpackChunkxchain=self.webpackChunkxchain||[]).push([[2532],{10013:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(58284),i=n(65043),s=n(70579);const o=e=>{let{text:t,lines:n=2,className:o,withButton:l=!1,width:a}=e;const[c,u]=(0,i.useState)(!1),[h,f]=(0,i.useState)(!1),[d,p]=(0,i.useState)(!1);return(0,i.useEffect)((()=>(p(!0),()=>p(!1))),[]),(0,s.jsx)("span",{className:o||"",children:d&&(0,s.jsx)(r.A,{lines:!h&&n,ellipsis:(0,s.jsxs)("span",{children:["... ",l&&(0,s.jsx)("button",{className:"text-divider",onClick:e=>{e.preventDefault(),f(!0)},children:"Read more"})]}),onTruncate:()=>u(!c),width:a,children:t})})}},32532:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});const r="style_container__Aoriz",i="style_divider__ZZR+X",s="style_title__178r2",o="style_next__iXu7c",l="style_prev__9VN0E",a="style_navigator__iH6KA",c="style_block__Y2Kvg";var u=n(10013),h=n(1159),f=n(70579);const d=()=>{const[e,{width:t}]=(0,h.A)();return(0,f.jsxs)("div",{className:"".concat(r," post-section"),children:[(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("button",{className:"".concat(a," ").concat(l," navigator navigator--prev"),"aria-label":"Previous post",children:(0,f.jsx)("i",{className:"icon icon-angle-left"})}),(0,f.jsx)("button",{className:"".concat(s," ").concat(l," h5"),ref:e,children:(0,f.jsx)(u.A,{maxLine:2,text:"The rise of the non fungible token internet having trouble",width:t})})]}),(0,f.jsx)("span",{className:i}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("button",{className:"".concat(s," ").concat(o," h5"),children:(0,f.jsx)(u.A,{maxLine:2,text:"Guide to creating & selling digital art NFTs",width:t})}),(0,f.jsx)("button",{className:"".concat(a," ").concat(o," navigator navigator--next"),"aria-label":"Next post",children:(0,f.jsx)("i",{className:"icon icon-angle-right"})})]})]})}},34695:e=>{function t(e,t,n){var r,i,s,o,l;function a(){var c=Date.now()-o;c<t&&c>=0?r=setTimeout(a,t-c):(r=null,n||(l=e.apply(s,i),s=i=null))}null==t&&(t=100);var c=function(){s=this,i=arguments,o=Date.now();var c=n&&!r;return r||(r=setTimeout(a,t)),c&&(l=e.apply(s,i),s=i=null),l};return c.clear=function(){r&&(clearTimeout(r),r=null)},c.flush=function(){r&&(l=e.apply(s,i),s=i=null,clearTimeout(r),r=null)},c}t.debounce=t,e.exports=t},58284:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(65043),i=n(65173),s=n.n(i),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r)));return s.state={},s.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},s.elements={},s.onResize=s.onResize.bind(s),s.onTruncate=s.onTruncate.bind(s),s.calcTargetWidth=s.calcTargetWidth.bind(s),s.measureWidth=s.measureWidth.bind(s),s.getLines=s.getLines.bind(s),s.renderLine=s.renderLine.bind(s),s}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,r=document.createElement("canvas");this.canvasContext=r.getContext("2d"),t((function(){e&&e.parentNode.removeChild(e)})),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var r=t[n],i=document.createElement("div");return i.innerHTML="foo<br/>bar","foo\nbar"!==i[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),r=t[n]),r}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"===typeof t&&(this.timeout=window.requestAnimationFrame((function(){t(e)})))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,r=this.canvasContext,i=this.props.width;if(t){var s=i||Math.floor(t.parentNode.getBoundingClientRect().width);if(!s)return window.requestAnimationFrame((function(){return n(e)}));var o=window.getComputedStyle(t),l=[o["font-weight"],o["font-style"],o["font-size"],o["font-family"]].join(" ");r.font=l,this.setState({targetWidth:s},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,i=t.ellipsis,s=t.trimWhitespace,o=this.state.targetWidth,l=this.innerText,a=this.measureWidth,c=this.onTruncate,u=this.trimRight,h=[],f=l(e.text).split("\n").map((function(e){return e.split(" ")})),d=!0,p=this.ellipsisWidth(this.elements.ellipsis),m=1;m<=n;m++){var v=f[0];if(0!==v.length){var b=v.join(" ");if(a(b)<=o&&1===f.length){d=!1,h.push(b);break}if(m===n){for(var g=v.join(" "),w=0,y=g.length-1;w<=y;){var x=Math.floor((w+y)/2);a(g.slice(0,x+1))+p<=o?w=x+1:y=x-1}var T=g.slice(0,w);if(s)for(T=u(T);!T.length&&h.length;){T=u(h.pop())}b=r.createElement("span",null,T,i)}else{for(var E=0,j=v.length-1;E<=j;){var _=Math.floor((E+j)/2);a(v.slice(0,_+1).join(" "))<=o?E=_+1:j=_-1}if(0===E){m=n-1;continue}b=v.slice(0,E).join(" "),f[0].splice(0,E)}h.push(b)}else h.push(),f.shift(),m--}return c(d),h}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return r.createElement("span",{key:t},e);var i=r.createElement("br",{key:t+"br"});return e?[r.createElement("span",{key:t},e),i]:i}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,i=n.children,s=n.ellipsis,l=n.lines,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["children","ellipsis","lines"]),c=this.state.targetWidth,u=this.getLines,h=this.renderLine,f=this.onTruncate,d=void 0;return"undefined"!==typeof window&&!(!t||!c)&&(l>0?d=u().map(h):(d=i,f(!1))),delete a.onTruncate,delete a.trimWhitespace,r.createElement("span",o({},a,{ref:function(t){e.elements.target=t}}),r.createElement("span",null,d),r.createElement("span",{ref:function(t){e.elements.text=t}},i),r.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},s))}}]),t}(r.Component);a.propTypes={children:s().node,ellipsis:s().node,lines:s().oneOfType([s().oneOf([!1]),s().number]),trimWhitespace:s().bool,width:s().number,onTruncate:s().func},a.defaultProps={children:"",ellipsis:"\u2026",lines:1,trimWhitespace:!1,width:0};const c=a},1159:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(65043),i=n(34695),s=n.n(i);function o(e){let{debounce:t,scroll:n,polyfill:i,offsetSize:o}=void 0===e?{debounce:0,scroll:!1,offsetSize:!1}:e;const a=i||("undefined"===typeof window?class{}:window.ResizeObserver);if(!a)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[u,h]=(0,r.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),f=(0,r.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:u}),d=t?"number"===typeof t?t:t.scroll:null,p=t?"number"===typeof t?t:t.resize:null,m=(0,r.useRef)(!1);(0,r.useEffect)((()=>(m.current=!0,()=>{m.current=!1})));const[v,b,g]=(0,r.useMemo)((()=>{const e=()=>{if(!f.current.element)return;const{left:e,top:t,width:n,height:r,bottom:i,right:s,x:l,y:a}=f.current.element.getBoundingClientRect(),u={left:e,top:t,width:n,height:r,bottom:i,right:s,x:l,y:a};f.current.element instanceof HTMLElement&&o&&(u.height=f.current.element.offsetHeight,u.width=f.current.element.offsetWidth),Object.freeze(u),m.current&&!c(f.current.lastBounds,u)&&h(f.current.lastBounds=u)};return[e,p?s()(e,p):e,d?s()(e,d):e]}),[h,o,d,p]);function w(){f.current.scrollContainers&&(f.current.scrollContainers.forEach((e=>e.removeEventListener("scroll",g,!0))),f.current.scrollContainers=null),f.current.resizeObserver&&(f.current.resizeObserver.disconnect(),f.current.resizeObserver=null)}function y(){f.current.element&&(f.current.resizeObserver=new a(g),f.current.resizeObserver.observe(f.current.element),n&&f.current.scrollContainers&&f.current.scrollContainers.forEach((e=>e.addEventListener("scroll",g,{capture:!0,passive:!0}))))}var x,T,E;return x=g,T=Boolean(n),(0,r.useEffect)((()=>{if(T){const e=x;return window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",e,!0)}}}),[x,T]),E=b,(0,r.useEffect)((()=>{const e=E;return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[E]),(0,r.useEffect)((()=>{w(),y()}),[n,g,b]),(0,r.useEffect)((()=>w),[]),[e=>{e&&e!==f.current.element&&(w(),f.current.element=e,f.current.scrollContainers=l(e),y())},u,v]}function l(e){const t=[];if(!e||e===document.body)return t;const{overflow:n,overflowX:r,overflowY:i}=window.getComputedStyle(e);return[n,r,i].some((e=>"auto"===e||"scroll"===e))&&t.push(e),[...t,...l(e.parentElement)]}const a=["x","y","top","bottom","left","right","width","height"],c=(e,t)=>a.every((n=>e[n]===t[n]))}}]);
//# sourceMappingURL=2532.1c579782.chunk.js.map