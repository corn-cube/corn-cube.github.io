import{s as L,n as v,o as M,d as k}from"../chunks/scheduler.Cec-JE-B.js";import{S,i as T,e as m,s as y,c as p,g as b,a as _,b as q,d as c,o as H,f as d}from"../chunks/index.DEjcK-S_.js";function A(s){var e,o,n;for(o=0,n=s.length;o<n;o++)if(e=s.charCodeAt(o),!(e>47&&e<58)&&!(e>64&&e<91)&&!(e>96&&e<123))return!1;return!0}function E(s){let e,o="Enter lobby code:",n,a,f='<input id="code" type="text" maxlength="4" placeholder="Lobby code" required="" pattern="[a-zA-Z0-9]+"/> <button type="submit">Join Lobby</button>',i,l,w="Go back",h,r,x="<p>Lobby code appears invalid, please try again</p> <p>Lobby codes are 4 characters long and must contain Letters and numbers only.</p>",g,C;return{c(){e=m("p"),e.textContent=o,n=y(),a=m("form"),a.innerHTML=f,i=y(),l=m("a"),l.textContent=w,h=y(),r=m("div"),r.innerHTML=x,this.h()},l(t){e=p(t,"P",{"data-svelte-h":!0}),b(e)!=="svelte-17khjtn"&&(e.textContent=o),n=_(t),a=p(t,"FORM",{"data-svelte-h":!0}),b(a)!=="svelte-11mstm6"&&(a.innerHTML=f),i=_(t),l=p(t,"A",{href:!0,"data-svelte-h":!0}),b(l)!=="svelte-1x5ec6i"&&(l.textContent=w),h=_(t),r=p(t,"DIV",{"data-svelte-h":!0}),b(r)!=="svelte-1r8hnvt"&&(r.innerHTML=x),this.h()},h(){q(l,"href","/"),r.hidden=!0},m(t,u){c(t,e,u),c(t,n,u),c(t,a,u),c(t,i,u),c(t,l,u),c(t,h,u),c(t,r,u),s[2](r),g||(C=H(a,"submit",s[1]),g=!0)},p:v,i:v,o:v,d(t){t&&(d(e),d(n),d(a),d(i),d(l),d(h),d(r)),s[2](null),g=!1,C()}}}function G(s,e,o){let{warning:n}=e;M(()=>{if(window.onhashchange=()=>{location.reload()},window.location.hash=="")console.log("empty url visited");else{console.log("Clicked Link");let i=document.querySelector("form");i.querySelector("input").value=window.location.hash.slice(-4),a({target:i})}});function a(i){let l=i.target.querySelector("input").value;l.length!=4||!A(l)?o(0,n.hidden=!1,n):(o(0,n.innerHTML="Everything Okay",n),window.location.hash="#"+l,console.log("All right"))}function f(i){k[i?"unshift":"push"](()=>{n=i,o(0,n)})}return s.$$set=i=>{"warning"in i&&o(0,n=i.warning)},[n,a,f]}class j extends S{constructor(e){super(),T(this,e,G,E,L,{warning:0})}}export{j as component};
