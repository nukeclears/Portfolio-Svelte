(()=>{"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t){return 0===Object.keys(t).length}new Set;let u,l=!1;function a(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function $(){return p("")}function m(t){u=t}function g(){if(!u)throw new Error("Function called outside component initialization");return u}function b(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}new Set;const y=[],w=[],_=[],v=[],x=Promise.resolve();let k=!1;function E(){k||(k=!0,x.then(O))}function j(t){_.push(t)}let S=!1;const C=new Set;function O(){if(!S){S=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];m(n),L(n.$$)}for(m(null),y.length=0;w.length;)w.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];C.has(n)||(C.add(n),n())}_.length=0}while(y.length);for(;v.length;)v.pop()();k=!1,S=!1,C.clear()}}function L(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const T=new Set;let q,N;function P(){q={r:0,c:[],p:q}}function R(){q.r||r(q.c),q=q.p}function A(t,n){t&&t.i&&(T.delete(t),t.i(n))}function M(t,n,e,o){if(t&&t.o){if(T.has(t))return;T.add(t),q.c.push((()=>{T.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function D(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function H(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function I(t,n,o,c){const{fragment:i,on_mount:u,on_destroy:l,after_update:a}=t.$$;i&&i.m(n,o),c||j((()=>{const n=u.map(e).filter(s);l?l.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(j)}function F(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Y(n,e,s,c,i,a,d,p=[-1]){const h=u;m(n);const $=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:e.context||[]),callbacks:o(),dirty:p,skip_bound:!1,root:e.target||h.$$.root};d&&d($.root);let g=!1;if($.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return $.ctx&&i($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),g&&function(t,n){-1===t.$$.dirty[0]&&(y.push(t),E(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],$.update(),g=!0,r($.before_update),$.fragment=!!c&&c($.ctx),e.target){if(e.hydrate){l=!0;const t=(b=e.target,Array.from(b.childNodes));$.fragment&&$.fragment.l(t),t.forEach(f)}else $.fragment&&$.fragment.c();e.intro&&A(n.$$.fragment),I(n,e.target,e.anchor,e.customElement),l=!1,O()}var b;m(h)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(N=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){r(this.$$.on_disconnect)}$destroy(){F(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class B{$destroy(){F(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const U=[];function W(t,n){return{subscribe:X(t,n).subscribe}}function X(n,e=t){let o;const r=new Set;function s(t){if(c(n,t)&&(n=t,o)){const t=!U.length;for(const t of r)t[1](),U.push(t,n);if(t){for(let t=0;t<U.length;t+=2)U[t][0](U[t+1]);U.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,i=t){const u=[c,i];return r.add(u),1===r.size&&(o=e(s)||t),c(n),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}function G(n,e,o){const c=!Array.isArray(n),i=c?[n]:n,u=e.length<2;return W(o,(n=>{let o=!1;const l=[];let a=0,f=t;const d=()=>{if(a)return;f();const o=e(c?l[0]:l,n);u?n(o):f=s(o)?o:t},p=i.map(((n,e)=>function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,(t=>{l[e]=t,a&=~(1<<e),o&&d()}),(()=>{a|=1<<e}))));return o=!0,d(),function(){r(p),f()}}))}function J(t){let e,o,r;const s=[t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[7])),{c(){e&&z(e.$$.fragment),o=$()},m(t,n){e&&I(e,t,n),a(t,o,n),r=!0},p(t,n){const r=4&n?D(s,[H(t[2])]):{};if(c!==(c=t[0])){if(e){P();const t=e;M(t.$$.fragment,1,0,(()=>{F(t,1)})),R()}c?(e=new c(i()),e.$on("routeEvent",t[7]),z(e.$$.fragment),A(e.$$.fragment,1),I(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&A(e.$$.fragment,t),r=!0)},o(t){e&&M(e.$$.fragment,t),r=!1},d(t){t&&f(o),e&&F(e,t)}}}function K(t){let e,o,r;const s=[{params:t[1]},t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[6])),{c(){e&&z(e.$$.fragment),o=$()},m(t,n){e&&I(e,t,n),a(t,o,n),r=!0},p(t,n){const r=6&n?D(s,[2&n&&{params:t[1]},4&n&&H(t[2])]):{};if(c!==(c=t[0])){if(e){P();const t=e;M(t.$$.fragment,1,0,(()=>{F(t,1)})),R()}c?(e=new c(i()),e.$on("routeEvent",t[6]),z(e.$$.fragment),A(e.$$.fragment,1),I(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&A(e.$$.fragment,t),r=!0)},o(t){e&&M(e.$$.fragment,t),r=!1},d(t){t&&f(o),e&&F(e,t)}}}function Q(t){let n,e,o,r;const s=[K,J],c=[];function i(t,n){return t[1]?0:1}return n=i(t),e=c[n]=s[n](t),{c(){e.c(),o=$()},m(t,e){c[n].m(t,e),a(t,o,e),r=!0},p(t,[r]){let u=n;n=i(t),n===u?c[n].p(t,r):(P(),M(c[u],1,1,(()=>{c[u]=null})),R(),e=c[n],e?e.p(t,r):(e=c[n]=s[n](t),e.c()),A(e,1),e.m(o.parentNode,o))},i(t){r||(A(e),r=!0)},o(t){M(e),r=!1},d(t){c[n].d(t),t&&f(o)}}}function V(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const Z=W(null,(function(t){t(V());const n=()=>{t(V())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}})),tt=(G(Z,(t=>t.location)),G(Z,(t=>t.querystring)),X(void 0));function nt(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class c{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,c=[],i="",u=t.split("/");for(u[0]||u.shift();r=u.shift();)"*"===(e=r[0])?(c.push("wild"),i+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),c.push(r.substring(1,~o?o:~s?s:r.length)),i+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~o?"?":"")+"\\"+r.substring(s))):i+="/"+r;return{keys:c,pattern:new RegExp("^"+i+"/?$","i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const n=t.match(r);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const i=[];o instanceof Map?o.forEach(((t,n)=>{i.push(new c(n,t))})):Object.keys(o).forEach((t=>{i.push(new c(t,o[t]))}));let u=null,l=null,a={};const f=function(){const t=g();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}();async function d(t,n){await(E(),x),f(t,n)}let p=null,h=null;var $;s&&(h=t=>{p=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",h),$=()=>{p?window.scrollTo(p.__svelte_spa_router_scrollX,p.__svelte_spa_router_scrollY):window.scrollTo(0,0)},g().$$.after_update.push($));let m=null,y=null;const w=Z.subscribe((async t=>{m=t;let n=0;for(;n<i.length;){const o=i[n].match(t.location);if(!o){n++;continue}const r={route:i[n].path,location:t.location,querystring:t.querystring,userData:i[n].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await i[n].checkConditions(r))return e(0,u=null),y=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=i[n].component;if(y!=s){s.loading?(e(0,u=s.loading),y=s,e(1,l=s.loadingParams),e(2,a={}),d("routeLoaded",Object.assign({},r,{component:u,name:u.name,params:l}))):(e(0,u=null),y=null);const n=await s();if(t!=m)return;e(0,u=n&&n.default||n),y=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,l=o):e(1,l=null),e(2,a=i[n].props),void d("routeLoaded",Object.assign({},r,{component:u,name:u.name,params:l})).then((()=>{tt.set(l)}))}e(0,u=null),y=null,tt.set(void 0)}));return g().$$.on_destroy.push((()=>{w(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[u,l,a,o,r,s,function(n){b.call(this,t,n)},function(n){b.call(this,t,n)}]}const et=class extends B{constructor(t){super(),Y(this,t,nt,Q,c,{routes:3,prefix:4,restoreScrollState:5})}};function ot(n){let e;return{c(){e=d("h1"),e.textContent="footer"},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&f(e)}}}const rt=class extends B{constructor(t){super(),Y(this,t,null,ot,c,{})}};function st(n){let e,o,r,s;return e=new at({}),r=new rt({}),{c(){z(e.$$.fragment),o=h(),z(r.$$.fragment)},m(t,n){I(e,t,n),a(t,o,n),I(r,t,n),s=!0},p:t,i(t){s||(A(e.$$.fragment,t),A(r.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),M(r.$$.fragment,t),s=!1},d(t){F(e,t),t&&f(o),F(r,t)}}}const ct=class extends B{constructor(t){super(),Y(this,t,null,st,c,{})}};function it(n){let e;return{c(){e=d("h1"),e.textContent="products"},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&f(e)}}}const ut=class extends B{constructor(t){super(),Y(this,t,null,it,c,{})}};function lt(n){let e,o,r,s;return r=new et({props:{routes:{"/":ct,"/Products":ut}}}),{c(){e=d("nav"),e.innerHTML='<a href="/">Home</a> \n\t<a href="/#/Products">Products</a>',o=h(),z(r.$$.fragment)},m(t,n){a(t,e,n),a(t,o,n),I(r,t,n),s=!0},p:t,i(t){s||(A(r.$$.fragment,t),s=!0)},o(t){M(r.$$.fragment,t),s=!1},d(t){t&&f(e),t&&f(o),F(r,t)}}}const at=class extends B{constructor(t){super(),Y(this,t,null,lt,c,{})}};function ft(n){let e,o,r,s,c;return o=new at({}),s=new rt({}),{c(){e=d("main"),z(o.$$.fragment),r=h(),z(s.$$.fragment)},m(t,n){a(t,e,n),I(o,e,null),function(t,n){t.appendChild(n)}(e,r),I(s,e,null),c=!0},p:t,i(t){c||(A(o.$$.fragment,t),A(s.$$.fragment,t),c=!0)},o(t){M(o.$$.fragment,t),M(s.$$.fragment,t),c=!1},d(t){t&&f(e),F(o),F(s)}}}new class extends B{constructor(t){super(),Y(this,t,null,ft,c,{})}}({target:document.body,props:{name:"tiny tiny"}})})();