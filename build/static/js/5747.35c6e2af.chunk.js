"use strict";(self.webpackChunkxchain=self.webpackChunkxchain||[]).push([[5747],{41307:(e,t,i)=>{i.d(t,{A:()=>s});const n="style_link__42Eah",r="style_facebook__lMbty";var a=i(2083),o=i(70579);const s=e=>{let{className:t}=e;return(0,o.jsx)("div",{className:"".concat(t||""," d-flex g-20"),children:a.UG.map((e=>(0,o.jsx)("a",{className:n,href:e.url,target:"_blank",rel:"noreferrer noopener","aria-label":e.name,children:(0,o.jsx)("i",{className:"icon icon-".concat(e.icon," ").concat("facebook"===e.icon?r:"")})},e.url)))})}},12784:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(22654),r=i(65246),a=i(70579);const o=e=>{let{children:t,index:i=1,className:o,type:s="slide",delay:l,...c}=e;const[u,m]=(0,r.Wx)({threshold:.2,triggerOnce:!0}),d={config:{duration:300,mass:1,tension:300,friction:30},delay:c.delay?c.delay:100*i},p={slide:(0,n.zh)({from:{transform:"translateY(40px)",opacity:0},to:{transform:m?"translateY(0px)":"translateY(40px)",opacity:m?1:0},...d,...c}),fade:(0,n.zh)({from:{opacity:0},to:{opacity:m?1:0},...d,...c}),grow:(0,n.zh)({from:{transform:"scale(0.4)"},to:{transform:m?"scale(1)":"scale(0.4)"},...d,...c})};return(0,a.jsx)(n.CS.div,{className:o||"",style:p[s],ref:u,children:t})}},18189:(e,t,i)=>{i.d(t,{A:()=>h});const n="style_list__gChVh",r="style_wrapper__uqPkf",a="style_avatar__hCpZh",o="style_main__KhWz-",s="style_main_bio__wtTqK";var l=i(23372),c=i(41307),u=i(12784),m=i(15077),d=i(70579);const p=e=>{let{data:t,index:i}=e;const n=(0,m.A)().width>=768,{name:p,position:f,avatar:h,bio:b}=t;return(0,d.jsx)(u.A,{index:i,children:(0,d.jsxs)("div",{className:"".concat(r," border-hover bg-primary ").concat(n?"border-hover--horizontal":""),children:[(0,d.jsx)(l.A,{className:a,src:h,alt:p}),(0,d.jsxs)("div",{className:o,children:[(0,d.jsxs)("div",{className:"d-flex flex-column g-10",children:[(0,d.jsx)("h5",{children:p}),(0,d.jsx)("span",{className:"text-accent text-sm",children:f}),(0,d.jsx)("p",{className:"".concat(s," text-sm"),children:b})]}),(0,d.jsx)(c.A,{})]})]})})},f=[{id:"member-1",name:"Robert Atkins",position:"Developer",bio:"Mattis molestie a iaculis at erat. Ultricies leo integer malesuada nunc vel risus commodo. \n            Nisi est sit amet facilisis.",avatar:i.p+"static/media/1.d33ffd22b817a3b3387b.webp"},{id:"member-2",name:"Amanda Murphy",position:"Developer",bio:"Ligula ullamcorper malesuada proin libero nunc. Scelerisque felis imperdiet proin fermentum. \n            Praesent elementum facilisis leo vel fringilla.",avatar:i.p+"static/media/2.0bef16822e1e26917742.webp"},{id:"member-3",name:"Kirk Miller",position:"CEO & 3D Designer",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \n            ut labore et dolore magna aliqua.",avatar:i.p+"static/media/3.b9078495b4e3b29d5c3e.webp"},{id:"member-4",name:"Thomas Rodriguez",position:"Developer",bio:"Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Vel eros donec ac odio \n            tempor orci dapibus ultrices.",avatar:i.p+"static/media/4.a01e50c1705263711f28.webp"},{id:"member-5",name:"Michele Murphy",position:"Community manager",bio:"Hendrerit gravida rutrum quisque non tellus orci ac. Nibh praesent tristique magna sit amet. \n            Amet nisl purus in mollis nunc sed id semper risus.",avatar:i.p+"static/media/5.6849a88bcdf26e2a8ec6.webp"},{id:"member-6",name:"Lillian Johnson",position:"Social media support manager",bio:"Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. \n            Proin fermentum leo vel orci porta non pulvinar.",avatar:i.p+"static/media/6.2edae34cb253a43e3158.webp"},{id:"member-7",name:"David Cunningham",position:"Animator",bio:"Elit eget gravida cum sociis. Viverra mauris in aliquam sem fringilla ut. \n            Mi proin sed libero enim. Duis at consectetur lorem donec.",avatar:i.p+"static/media/7.86042afe19d5dda37c4e.webp"},{id:"member-8",name:"William Salazar",position:"Product designer, design system",bio:"Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. \n            Dictumst quisque sagittis purus sit amet volutpat consequat mauris.",avatar:i.p+"static/media/8.4092003a902b7f3af1e9.webp"}],h=e=>{let{variant:t}=e;const i="preview"===t?f.slice(0,4):f;return(0,d.jsx)("ul",{className:n,children:i.map(((e,t)=>(0,d.jsx)(p,{data:e,index:t},t)))})}},2083:(e,t,i)=>{i.d(t,{EM:()=>n,UG:()=>o,aC:()=>r,w7:()=>a});const n=[{name:"Home",links:[{name:"Home",url:"/",isMain:!0},{name:"Home 2",url:"/index2"}]},{name:"Explore",links:[{name:"Explore",url:"/explore",isMain:!0},{name:"Explore 2",url:"/explore-grid"},{name:"Single item",url:"/explore/item"},{name:"Author",url:"/author"}]},{name:"Pages",links:[{name:"About",url:"/about"},{name:"Help center",url:"/faq"},{name:"Team",url:"/team"},{name:"Ranking",url:"/ranking"},{name:"Page 404",url:"/404"}]},{name:"Community",links:[{name:"Blog Sidebar",url:"/blog-sidebar"},{name:"Blog Grid",url:"/blog-grid"},{name:"Single post",url:"/post"}]},{name:"Contacts",isSingle:!0,url:"/contacts"},{name:"Account",links:[{name:"Login",url:"/login"},{name:"Profile",url:"/profile"}]}],r=[{title:"My account",links:[{title:"Profile",url:"/login"},{title:"My Collections",url:"/author"},{title:"Connect wallet",url:"/connect-wallet"},{title:"Settings",url:"/profile"}]},{title:"Resources",links:[{title:"Help center",url:"/faq"},{title:"Activity",url:"/activity"},{title:"Ranking",url:"/ranking"},{title:"News",url:"/blog-grid"}]},{title:"Company",links:[{title:"About",url:"/about"},{title:"Our team",url:"/team"},{title:"Blog",url:"/blog-sidebar"},{title:"Contact us",url:"/contacts"}]}],a=[{icon:"twitter",url:"https://twitter.com/",name:"Twitter"},{icon:"facebook",url:"https://facebook.com/",name:"Facebook"},{icon:"instagram",url:"https://instagram.com/",name:"Instagram"},{icon:"youtube",url:"https://youtube.com/",name:"Youtube"},{icon:"telegram",url:"https://telegram.com/",name:"Telegram"},{icon:"discord",url:"https://discord.com/",name:"Discord"},{icon:"linkedin",url:"https://linkedin.com/",name:"Linkedin"}],o=[{icon:"twitter",url:"https://twitter.com/",name:"Twitter"},{icon:"facebook",url:"https://facebook.com/",name:"Facebook"},{icon:"instagram",url:"https://instagram.com/",name:"Instagram"}]},40658:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var n=i(60429),r=i(64421),a=i(18189),o=i(70579);const s=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.A,{title:"Team"}),(0,o.jsx)(r.A,{title:"Our team"}),(0,o.jsx)("main",{children:(0,o.jsx)("section",{children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)(a.A,{})})})})]})},23372:(e,t,i)=>{i.d(t,{A:()=>u});var n=i(3550),r=i(98139),a=i.n(r),o=i(65043);const s=i.p+"static/media/verified.d712db63e7c4123b870c80f47dbeaf91.svg";var l=i(70579);const c=e=>{let{src:t,alt:i,size:r,isVerified:o,className:c}=e;return(0,l.jsxs)("div",{className:a()("avatar-wrapper",r,c),children:[(0,l.jsx)(n.A,{className:"avatar",src:t,alt:i}),o&&(0,l.jsx)(n.A,{className:"verified",src:s,alt:"verified",effect:"opacity"})]})},u=(0,o.memo)(c)},15077:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(65043);const r=function(e){(0,n.useEffect)(e,[])};const a=function(e){var t=(0,n.useRef)(e);t.current=e,r((function(){return function(){return t.current()}}))};const o=function(e){var t=(0,n.useRef)(0),i=(0,n.useState)(e),r=i[0],o=i[1],s=(0,n.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){o(e)}))}),[]);return a((function(){cancelAnimationFrame(t.current)})),[r,s]};var s="undefined"!==typeof window;const l=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var i=o({width:s?window.innerWidth:e,height:s?window.innerHeight:t}),r=i[0],a=i[1];return(0,n.useEffect)((function(){if(s){var e=function(){a({width:window.innerWidth,height:window.innerHeight})};return function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(window,"resize",e),function(){!function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(window,"resize",e)}}}),[]),r}},65246:(e,t,i)=>{i.d(t,{Wx:()=>d});var n=i(65043),r=Object.defineProperty,a=(e,t,i)=>(((e,t,i)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!==typeof t?t+"":t,i),i),o=new Map,s=new WeakMap,l=0,c=void 0;function u(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return"".concat(t,"_").concat("root"===t?(i=e.root)?(s.has(i)||(l+=1,s.set(i,l.toString())),s.get(i)):"0":e[t]);var i})).toString()}function m(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const r=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:a,elements:s}=function(e){const t=u(e);let i=o.get(t);if(!i){const n=new Map;let r;const a=new IntersectionObserver((t=>{t.forEach((t=>{var i;const a=t.isIntersecting&&r.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(i=n.get(t.target))||i.forEach((e=>{e(a,t)}))}))}),e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:a,elements:n},o.set(t,i)}return i}(i),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),o.delete(r))}}n.Component;function d(){let{threshold:e,delay:t,trackVisibility:i,rootMargin:r,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:c,onChange:u}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var d;const[p,f]=n.useState(null),h=n.useRef(),[b,g]=n.useState({inView:!!l,entry:void 0});h.current=u,n.useEffect((()=>{if(s||!p)return;let n;return n=m(p,((e,t)=>{g({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&o&&n&&(n(),n=void 0)}),{root:a,rootMargin:r,threshold:e,trackVisibility:i,delay:t},c),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,p,a,r,o,s,i,c,t]);const v=null==(d=b.entry)?void 0:d.target,y=n.useRef();p||!v||o||s||y.current===v||(y.current=v,g({inView:!!l,entry:void 0}));const w=[f,b.inView,b.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}}}]);
//# sourceMappingURL=5747.35c6e2af.chunk.js.map