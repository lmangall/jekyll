!function(e,t){function n(){var t=new XMLHttpRequest;t.open("GET","/assets/js/search-data.json",!0),t.onload=function(){if(t.status>=200&&t.status<400){var n=JSON.parse(t.responseText);lunr.tokenizer.separator=/[\s\-/]+/,function(t,n){t=t,n=n;var r,i=document.getElementById("search-input"),s=document.getElementById("search-results"),a=(document.getElementById("main-header"),0);function l(){document.documentElement.classList.add("search-active")}function c(){document.documentElement.classList.remove("search-active")}function o(){a++;var e=i.value;if(""===e?c():(l(),window.scroll(0,-1),setTimeout((function(){window.scroll(0,0)}),0)),e!==r&&(r=e,s.innerHTML="",""!==e)){var o=t.query((function(t){var n=lunr.tokenizer(e);t.term(n,{boost:10}),t.term(n,{wildcard:lunr.Query.wildcard.TRAILING})}));if(0==o.length&&e.length>2){var d=lunr.tokenizer(e).filter((function(e,t){return e.str.length<20}));d.length>0&&(o=t.query((function(t){t.term(d,{editDistance:Math.round(Math.sqrt(e.length/2-1))})})))}if(0==o.length){var u=document.createElement("div");u.classList.add("search-no-result"),u.innerText="No results found",s.appendChild(u)}else{var h=document.createElement("ul");h.classList.add("search-results-list"),s.appendChild(h),v(h,o,0,10,100,a)}}function v(e,t,n,r,i,s){if(s==a){for(var l=n;l<n+r;l++){if(l==t.length)return;p(e,t[l])}setTimeout((function(){v(e,t,n+r,r,i,s)}),i)}}function p(e,t){var r=n[t.ref],i=document.createElement("li");i.classList.add("search-results-list-item"),e.appendChild(i);var s=document.createElement("a");s.classList.add("search-result"),s.setAttribute("href",r.url),i.appendChild(s);var a=document.createElement("div");a.classList.add("search-result-title"),s.appendChild(a);var l=document.createElement("div");l.classList.add("search-result-doc"),l.innerHTML='<svg viewBox="0 0 24 24" class="search-result-icon"><use xlink:href="#svg-doc"></use></svg>',a.appendChild(l);var c=document.createElement("div");c.classList.add("search-result-doc-title"),c.innerHTML=r.doc,l.appendChild(c);var o=c;if(r.doc!=r.title){l.classList.add("search-result-doc-parent");var d=document.createElement("div");d.classList.add("search-result-section"),d.innerHTML=r.title,a.appendChild(d),o=d}var u=t.matchData.metadata,h=[],v=[];for(var p in u){var m=u[p];if(m.title){var g=m.title.position;for(var E in g)h.push(g[E])}if(m.content){g=m.content.position;for(var E in g){var L=(M=g[E])[0],y=M[0]+M[1],w=!0,b=!0;for(E=0;E<5;E++){var S=r.content.lastIndexOf(" ",L-2);if((T=r.content.lastIndexOf(". ",L-2))>=0&&T>S){L=T+1,w=!1;break}if(S<0){L=0,w=!1;break}L=S+1}for(E=0;E<10;E++){var T;S=r.content.indexOf(" ",y+1);if((T=r.content.indexOf(". ",y+1))>=0&&T<S){y=T,b=!1;break}if(S<0){y=r.content.length,b=!1;break}y=S}v.push({highlight:M,previewStart:L,previewEnd:y,ellipsesBefore:w,ellipsesAfter:b})}}}if(h.length>0&&(h.sort((function(e,t){return e[0]-t[0]})),o.innerHTML="",f(o,r.title,0,r.title.length,h)),v.length>0){v.sort((function(e,t){return e.highlight[0]-t.highlight[0]}));var x=v[0],k={highlight:[x.highlight],previewStart:x.previewStart,previewEnd:x.previewEnd,ellipsesBefore:x.ellipsesBefore,ellipsesAfter:x.ellipsesAfter},C=[k];for(p=1;p<v.length;p++)x=v[p],k.previewEnd<x.previewStart?(k={highlight:[x.highlight],previewStart:x.previewStart,previewEnd:x.previewEnd,ellipsesBefore:x.ellipsesBefore,ellipsesAfter:x.ellipsesAfter},C.push(k)):(k.highlight.push(x.highlight),k.previewEnd=x.previewEnd,k.ellipsesAfter=x.ellipsesAfter);var q=document.createElement("div");q.classList.add("search-result-previews"),s.appendChild(q);var B=r.content;for(p=0;p<Math.min(C.length,3);p++){var M=C[p],A=document.createElement("div");A.classList.add("search-result-preview"),q.appendChild(A),M.ellipsesBefore&&A.appendChild(document.createTextNode("... ")),f(A,B,M.previewStart,M.previewEnd,M.highlight),M.ellipsesAfter&&A.appendChild(document.createTextNode(" ..."))}}var H=document.createElement("span");H.classList.add("search-result-rel-url"),H.innerText=r.relUrl,a.appendChild(H)}function f(e,t,n,r,i){var s=n;for(var a in i){var l,c=i[a];(l=document.createElement("span")).innerHTML=t.substring(s,c[0]),e.appendChild(l),s=c[0]+c[1];var o=document.createElement("span");o.classList.add("search-result-highlight"),o.innerHTML=t.substring(c[0],s),e.appendChild(o)}(l=document.createElement("span")).innerHTML=t.substring(s,r),e.appendChild(l)}}e.addEvent(i,"focus",(function(){setTimeout(o,0)})),e.addEvent(i,"keyup",(function(e){switch(e.keyCode){case 27:i.value="";break;case 38:case 40:case 13:return void e.preventDefault()}o()})),e.addEvent(i,"keydown",(function(e){switch(e.keyCode){case 38:if(e.preventDefault(),n=document.querySelector(".search-result.active"))if(n.classList.remove("active"),n.parentElement.previousSibling)n.parentElement.previousSibling.querySelector(".search-result").classList.add("active");return;case 40:if(e.preventDefault(),n=document.querySelector(".search-result.active")){if(n.parentElement.nextSibling){var t=n.parentElement.nextSibling.querySelector(".search-result");n.classList.remove("active"),t.classList.add("active")}}else(t=document.querySelector(".search-result"))&&t.classList.add("active");return;case 13:var n;if(e.preventDefault(),n=document.querySelector(".search-result.active"))n.click();else{var r=document.querySelector(".search-result");r&&r.click()}return}})),e.addEvent(document,"click",(function(e){e.target!=i&&c()}))}(lunr((function(){for(var e in this.ref("id"),this.field("title",{boost:200}),this.field("content",{boost:2}),this.field("relUrl"),this.metadataWhitelist=["position"],n)this.add({id:e,title:n[e].title,content:n[e].content,relUrl:n[e].relUrl})})),n)}else console.log("Error loading ajax request. Request status:"+t.status)},t.onerror=function(){console.log("There was a connection error")},t.send()}e.addEvent=function(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n)},e.removeEvent=function(e,t,n){e.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener(t,n)},e.onReady=function(e){"loading"!=document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",(function(){"complete"==document.readyState&&e()}))},e.getTheme=function(){var e=document.querySelector('[rel="stylesheet"]').getAttribute("href");return e.substring(e.lastIndexOf("-")+1,e.length-4)},e.setTheme=function(e){document.querySelector('[rel="stylesheet"]').setAttribute("href","/assets/css/just-the-docs-"+e+".css")},e.onReady((function(){!function(){e.addEvent(document,"click",(function(e){for(var t=e.target;t&&(!t.classList||!t.classList.contains("nav-list-expander"));)t=t.parentNode;t&&(e.preventDefault(),t.ariaPressed=t.parentNode.classList.toggle("active"))}));const t=document.getElementById("site-nav"),n=document.getElementById("main-header"),r=document.getElementById("menu-button");e.addEvent(r,"click",(function(e){e.preventDefault(),r.classList.toggle("nav-open")?(t.classList.add("nav-open"),n.classList.add("nav-open"),r.ariaPressed=!0):(t.classList.remove("nav-open"),n.classList.remove("nav-open"),r.ariaPressed=!1)}))}(),n(),function(){const e=document.location.pathname,t=document.getElementById("site-nav"),n=t.querySelector('a[href="'+e+'"], a[href="'+e+'/"]');if(n){const e=n.getBoundingClientRect();t.scrollBy(0,e.top-3*e.height)}}()})),e.onReady((function(){if(window.isSecureContext){var e=document.querySelectorAll("div.highlighter-rouge, div.listingblock > div.content, figure.highlight"),t='<svg viewBox="0 0 24 24" class="copy-icon"><use xlink:href="#svg-copy"></use></svg>';e.forEach((e=>{var n=document.createElement("button"),r=null;n.type="button",n.ariaLabel="Copy code to clipboard",n.innerHTML=t,e.append(n),n.addEventListener("click",(function(){if(null===r){var i=(e.querySelector("pre:not(.lineno, .highlight)")||e.querySelector("code")).innerText;window.navigator.clipboard.writeText(i),n.innerHTML='<svg viewBox="0 0 24 24" class="copy-icon"><use xlink:href="#svg-copied"></use></svg>';r=setTimeout((function(){n.innerHTML=t,r=null}),4e3)}}))}))}else console.log("Window does not have a secure context, therefore code clipboard copy functionality will not be available. For more details see https://web.dev/async-clipboard/#security-and-permissions")}))}(window.jtd=window.jtd||{});