(function(E,B){function ka(a,b,d){if(d===B&&a.nodeType===1){d=a.getAttribute("data-"+b);if(typeof d==="string"){try{d=d==="true"?true:d==="false"?false:d==="null"?null:!c.isNaN(d)?parseFloat(d):Ja.test(d)?c.parseJSON(d):d}catch(e){}c.data(a,b,d)}else d=B}return d}function U(){return false}function ca(){return true}function la(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function Ka(a){var b,d,e,f,h,l,k,o,x,r,A,C=[];f=[];h=c.data(this,this.nodeType?"events":"__events__");if(typeof h==="function")h=
    h.events;if(!(a.liveFired===this||!h||!h.live||a.button&&a.type==="click")){if(a.namespace)A=RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)");a.liveFired=this;var J=h.live.slice(0);for(k=0;k<J.length;k++){h=J[k];h.origType.replace(X,"")===a.type?f.push(h.selector):J.splice(k--,1)}f=c(a.target).closest(f,a.currentTarget);o=0;for(x=f.length;o<x;o++){r=f[o];for(k=0;k<J.length;k++){h=J[k];if(r.selector===h.selector&&(!A||A.test(h.namespace))){l=r.elem;e=null;if(h.preType==="mouseenter"||
    h.preType==="mouseleave"){a.type=h.preType;e=c(a.relatedTarget).closest(h.selector)[0]}if(!e||e!==l)C.push({elem:l,handleObj:h,level:r.level})}}}o=0;for(x=C.length;o<x;o++){f=C[o];if(d&&f.level>d)break;a.currentTarget=f.elem;a.data=f.handleObj.data;a.handleObj=f.handleObj;A=f.handleObj.origHandler.apply(f.elem,arguments);if(A===false||a.isPropagationStopped()){d=f.level;if(A===false)b=false;if(a.isImmediatePropagationStopped())break}}return b}}function Y(a,b){return(a&&a!=="*"?a+".":"")+b.replace(La,
    "`").replace(Ma,"&")}function ma(a,b,d){if(c.isFunction(b))return c.grep(a,function(f,h){return!!b.call(f,h,f)===d});else if(b.nodeType)return c.grep(a,function(f){return f===b===d});else if(typeof b==="string"){var e=c.grep(a,function(f){return f.nodeType===1});if(Na.test(b))return c.filter(b,e,!d);else b=c.filter(b,e)}return c.grep(a,function(f){return c.inArray(f,b)>=0===d})}function na(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var e=c.data(a[d++]),f=c.data(this,
    e);if(e=e&&e.events){delete f.handle;f.events={};for(var h in e)for(var l in e[h])c.event.add(this,h,e[h][l],e[h][l].data)}}})}function Oa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function oa(a,b,d){var e=b==="width"?a.offsetWidth:a.offsetHeight;if(d==="border")return e;c.each(b==="width"?Pa:Qa,function(){d||(e-=parseFloat(c.css(a,"padding"+this))||0);if(d==="margin")e+=parseFloat(c.css(a,
    "margin"+this))||0;else e-=parseFloat(c.css(a,"border"+this+"Width"))||0});return e}function da(a,b,d,e){if(c.isArray(b)&&b.length)c.each(b,function(f,h){d||Ra.test(a)?e(a,h):da(a+"["+(typeof h==="object"||c.isArray(h)?f:"")+"]",h,d,e)});else if(!d&&b!=null&&typeof b==="object")c.isEmptyObject(b)?e(a,""):c.each(b,function(f,h){da(a+"["+f+"]",h,d,e)});else e(a,b)}function S(a,b){var d={};c.each(pa.concat.apply([],pa.slice(0,b)),function(){d[this]=a});return d}function qa(a){if(!ea[a]){var b=c("<"+
    a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d==="")d="block";ea[a]=d}return ea[a]}function fa(a){return c.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var t=E.document,c=function(){function a(){if(!b.isReady){try{t.documentElement.doScroll("left")}catch(j){setTimeout(a,1);return}b.ready()}}var b=function(j,s){return new b.fn.init(j,s)},d=E.jQuery,e=E.$,f,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,l=/\S/,k=/^\s+/,o=/\s+$/,x=/\W/,r=/\d/,A=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,
    C=/^[\],:{}\s]*$/,J=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,w=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,I=/(?:^|:|,)(?:\s*\[)+/g,L=/(webkit)[ \/]([\w.]+)/,g=/(opera)(?:.*version)?[ \/]([\w.]+)/,i=/(msie) ([\w.]+)/,n=/(mozilla)(?:.*? rv:([\w.]+))?/,m=navigator.userAgent,p=false,q=[],u,y=Object.prototype.toString,F=Object.prototype.hasOwnProperty,M=Array.prototype.push,N=Array.prototype.slice,O=String.prototype.trim,D=Array.prototype.indexOf,R={};b.fn=b.prototype={init:function(j,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            s){var v,z,H;if(!j)return this;if(j.nodeType){this.context=this[0]=j;this.length=1;return this}if(j==="body"&&!s&&t.body){this.context=t;this[0]=t.body;this.selector="body";this.length=1;return this}if(typeof j==="string")if((v=h.exec(j))&&(v[1]||!s))if(v[1]){H=s?s.ownerDocument||s:t;if(z=A.exec(j))if(b.isPlainObject(s)){j=[t.createElement(z[1])];b.fn.attr.call(j,s,true)}else j=[H.createElement(z[1])];else{z=b.buildFragment([v[1]],[H]);j=(z.cacheable?z.fragment.cloneNode(true):z.fragment).childNodes}return b.merge(this,
    j)}else{if((z=t.getElementById(v[2]))&&z.parentNode){if(z.id!==v[2])return f.find(j);this.length=1;this[0]=z}this.context=t;this.selector=j;return this}else if(!s&&!x.test(j)){this.selector=j;this.context=t;j=t.getElementsByTagName(j);return b.merge(this,j)}else return!s||s.jquery?(s||f).find(j):b(s).find(j);else if(b.isFunction(j))return f.ready(j);if(j.selector!==B){this.selector=j.selector;this.context=j.context}return b.makeArray(j,this)},selector:"",jquery:"1.4.4",length:0,size:function(){return this.length},
    toArray:function(){return N.call(this,0)},get:function(j){return j==null?this.toArray():j<0?this.slice(j)[0]:this[j]},pushStack:function(j,s,v){var z=b();b.isArray(j)?M.apply(z,j):b.merge(z,j);z.prevObject=this;z.context=this.context;if(s==="find")z.selector=this.selector+(this.selector?" ":"")+v;else if(s)z.selector=this.selector+"."+s+"("+v+")";return z},each:function(j,s){return b.each(this,j,s)},ready:function(j){b.bindReady();if(b.isReady)j.call(t,b);else q&&q.push(j);return this},eq:function(j){return j===
        -1?this.slice(j):this.slice(j,+j+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(N.apply(this,arguments),"slice",N.call(arguments).join(","))},map:function(j){return this.pushStack(b.map(this,function(s,v){return j.call(s,v,s)}))},end:function(){return this.prevObject||b(null)},push:M,sort:[].sort,splice:[].splice};b.fn.init.prototype=b.fn;b.extend=b.fn.extend=function(){var j,s,v,z,H,G=arguments[0]||{},K=1,Q=arguments.length,ga=false;
    if(typeof G==="boolean"){ga=G;G=arguments[1]||{};K=2}if(typeof G!=="object"&&!b.isFunction(G))G={};if(Q===K){G=this;--K}for(;K<Q;K++)if((j=arguments[K])!=null)for(s in j){v=G[s];z=j[s];if(G!==z)if(ga&&z&&(b.isPlainObject(z)||(H=b.isArray(z)))){if(H){H=false;v=v&&b.isArray(v)?v:[]}else v=v&&b.isPlainObject(v)?v:{};G[s]=b.extend(ga,v,z)}else if(z!==B)G[s]=z}return G};b.extend({noConflict:function(j){E.$=e;if(j)E.jQuery=d;return b},isReady:false,readyWait:1,ready:function(j){j===true&&b.readyWait--;
    if(!b.readyWait||j!==true&&!b.isReady){if(!t.body)return setTimeout(b.ready,1);b.isReady=true;if(!(j!==true&&--b.readyWait>0))if(q){var s=0,v=q;for(q=null;j=v[s++];)j.call(t,b);b.fn.trigger&&b(t).trigger("ready").unbind("ready")}}},bindReady:function(){if(!p){p=true;if(t.readyState==="complete")return setTimeout(b.ready,1);if(t.addEventListener){t.addEventListener("DOMContentLoaded",u,false);E.addEventListener("load",b.ready,false)}else if(t.attachEvent){t.attachEvent("onreadystatechange",u);E.attachEvent("onload",
    b.ready);var j=false;try{j=E.frameElement==null}catch(s){}t.documentElement.doScroll&&j&&a()}}},isFunction:function(j){return b.type(j)==="function"},isArray:Array.isArray||function(j){return b.type(j)==="array"},isWindow:function(j){return j&&typeof j==="object"&&"setInterval"in j},isNaN:function(j){return j==null||!r.test(j)||isNaN(j)},type:function(j){return j==null?String(j):R[y.call(j)]||"object"},isPlainObject:function(j){if(!j||b.type(j)!=="object"||j.nodeType||b.isWindow(j))return false;if(j.constructor&&
    !F.call(j,"constructor")&&!F.call(j.constructor.prototype,"isPrototypeOf"))return false;for(var s in j);return s===B||F.call(j,s)},isEmptyObject:function(j){for(var s in j)return false;return true},error:function(j){throw j;},parseJSON:function(j){if(typeof j!=="string"||!j)return null;j=b.trim(j);if(C.test(j.replace(J,"@").replace(w,"]").replace(I,"")))return E.JSON&&E.JSON.parse?E.JSON.parse(j):(new Function("return "+j))();else b.error("Invalid JSON: "+j)},noop:function(){},globalEval:function(j){if(j&&
    l.test(j)){var s=t.getElementsByTagName("head")[0]||t.documentElement,v=t.createElement("script");v.type="text/javascript";if(b.support.scriptEval)v.appendChild(t.createTextNode(j));else v.text=j;s.insertBefore(v,s.firstChild);s.removeChild(v)}},nodeName:function(j,s){return j.nodeName&&j.nodeName.toUpperCase()===s.toUpperCase()},each:function(j,s,v){var z,H=0,G=j.length,K=G===B||b.isFunction(j);if(v)if(K)for(z in j){if(s.apply(j[z],v)===false)break}else for(;H<G;){if(s.apply(j[H++],v)===false)break}else if(K)for(z in j){if(s.call(j[z],
    z,j[z])===false)break}else for(v=j[0];H<G&&s.call(v,H,v)!==false;v=j[++H]);return j},trim:O?function(j){return j==null?"":O.call(j)}:function(j){return j==null?"":j.toString().replace(k,"").replace(o,"")},makeArray:function(j,s){var v=s||[];if(j!=null){var z=b.type(j);j.length==null||z==="string"||z==="function"||z==="regexp"||b.isWindow(j)?M.call(v,j):b.merge(v,j)}return v},inArray:function(j,s){if(s.indexOf)return s.indexOf(j);for(var v=0,z=s.length;v<z;v++)if(s[v]===j)return v;return-1},merge:function(j,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  s){var v=j.length,z=0;if(typeof s.length==="number")for(var H=s.length;z<H;z++)j[v++]=s[z];else for(;s[z]!==B;)j[v++]=s[z++];j.length=v;return j},grep:function(j,s,v){var z=[],H;v=!!v;for(var G=0,K=j.length;G<K;G++){H=!!s(j[G],G);v!==H&&z.push(j[G])}return z},map:function(j,s,v){for(var z=[],H,G=0,K=j.length;G<K;G++){H=s(j[G],G,v);if(H!=null)z[z.length]=H}return z.concat.apply([],z)},guid:1,proxy:function(j,s,v){if(arguments.length===2)if(typeof s==="string"){v=j;j=v[s];s=B}else if(s&&!b.isFunction(s)){v=
    s;s=B}if(!s&&j)s=function(){return j.apply(v||this,arguments)};if(j)s.guid=j.guid=j.guid||s.guid||b.guid++;return s},access:function(j,s,v,z,H,G){var K=j.length;if(typeof s==="object"){for(var Q in s)b.access(j,Q,s[Q],z,H,v);return j}if(v!==B){z=!G&&z&&b.isFunction(v);for(Q=0;Q<K;Q++)H(j[Q],s,z?v.call(j[Q],Q,H(j[Q],s)):v,G);return j}return K?H(j[0],s):B},now:function(){return(new Date).getTime()},uaMatch:function(j){j=j.toLowerCase();j=L.exec(j)||g.exec(j)||i.exec(j)||j.indexOf("compatible")<0&&n.exec(j)||
    [];return{browser:j[1]||"",version:j[2]||"0"}},browser:{}});b.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(j,s){R["[object "+s+"]"]=s.toLowerCase()});m=b.uaMatch(m);if(m.browser){b.browser[m.browser]=true;b.browser.version=m.version}if(b.browser.webkit)b.browser.safari=true;if(D)b.inArray=function(j,s){return D.call(s,j)};if(!/\s/.test("\u00a0")){k=/^[\s\xA0]+/;o=/[\s\xA0]+$/}f=b(t);if(t.addEventListener)u=function(){t.removeEventListener("DOMContentLoaded",u,
    false);b.ready()};else if(t.attachEvent)u=function(){if(t.readyState==="complete"){t.detachEvent("onreadystatechange",u);b.ready()}};return E.jQuery=E.$=b}();(function(){c.support={};var a=t.documentElement,b=t.createElement("script"),d=t.createElement("div"),e="script"+c.now();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var f=d.getElementsByTagName("*"),h=d.getElementsByTagName("a")[0],l=t.createElement("select"),
    k=l.appendChild(t.createElement("option"));if(!(!f||!f.length||!h)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(h.getAttribute("style")),hrefNormalized:h.getAttribute("href")==="/a",opacity:/^0.55$/.test(h.style.opacity),cssFloat:!!h.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:k.selected,deleteExpando:true,optDisabled:false,checkClone:false,
    scriptEval:false,noCloneEvent:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true};l.disabled=true;c.support.optDisabled=!k.disabled;b.type="text/javascript";try{b.appendChild(t.createTextNode("window."+e+"=1;"))}catch(o){}a.insertBefore(b,a.firstChild);if(E[e]){c.support.scriptEval=true;delete E[e]}try{delete b.test}catch(x){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function r(){c.support.noCloneEvent=
    false;d.detachEvent("onclick",r)});d.cloneNode(true).fireEvent("onclick")}d=t.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=t.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var r=t.createElement("div");r.style.width=r.style.paddingLeft="1px";t.body.appendChild(r);c.boxModel=c.support.boxModel=r.offsetWidth===2;if("zoom"in r.style){r.style.display="inline";r.style.zoom=
    1;c.support.inlineBlockNeedsLayout=r.offsetWidth===2;r.style.display="";r.innerHTML="<div style='width:4px;'></div>";c.support.shrinkWrapBlocks=r.offsetWidth!==2}r.innerHTML="<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";var A=r.getElementsByTagName("td");c.support.reliableHiddenOffsets=A[0].offsetHeight===0;A[0].style.display="";A[1].style.display="none";c.support.reliableHiddenOffsets=c.support.reliableHiddenOffsets&&A[0].offsetHeight===0;r.innerHTML="";t.body.removeChild(r).style.display=
    "none"});a=function(r){var A=t.createElement("div");r="on"+r;var C=r in A;if(!C){A.setAttribute(r,"return;");C=typeof A[r]==="function"}return C};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=f=h=null}})();var ra={},Ja=/^(?:\{.*\}|\[.*\])$/;c.extend({cache:{},uuid:0,expando:"jQuery"+c.now(),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},data:function(a,b,d){if(c.acceptData(a)){a=a==E?ra:a;var e=a.nodeType,f=e?a[c.expando]:null,h=
    c.cache;if(!(e&&!f&&typeof b==="string"&&d===B)){if(e)f||(a[c.expando]=f=++c.uuid);else h=a;if(typeof b==="object")if(e)h[f]=c.extend(h[f],b);else c.extend(h,b);else if(e&&!h[f])h[f]={};a=e?h[f]:h;if(d!==B)a[b]=d;return typeof b==="string"?a[b]:a}}},removeData:function(a,b){if(c.acceptData(a)){a=a==E?ra:a;var d=a.nodeType,e=d?a[c.expando]:a,f=c.cache,h=d?f[e]:e;if(b){if(h){delete h[b];d&&c.isEmptyObject(h)&&c.removeData(a)}}else if(d&&c.support.deleteExpando)delete a[c.expando];else if(a.removeAttribute)a.removeAttribute(c.expando);
else if(d)delete f[e];else for(var l in a)delete a[l]}},acceptData:function(a){if(a.nodeName){var b=c.noData[a.nodeName.toLowerCase()];if(b)return!(b===true||a.getAttribute("classid")!==b)}return true}});c.fn.extend({data:function(a,b){var d=null;if(typeof a==="undefined"){if(this.length){var e=this[0].attributes,f;d=c.data(this[0]);for(var h=0,l=e.length;h<l;h++){f=e[h].name;if(f.indexOf("data-")===0){f=f.substr(5);ka(this[0],f,d[f])}}}return d}else if(typeof a==="object")return this.each(function(){c.data(this,
    a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(b===B){d=this.triggerHandler("getData"+k[1]+"!",[k[0]]);if(d===B&&this.length){d=c.data(this[0],a);d=ka(this[0],a,d)}return d===B&&k[1]?this.data(k[0]):d}else return this.each(function(){var o=c(this),x=[k[0],b];o.triggerHandler("setData"+k[1]+"!",x);c.data(this,a,b);o.triggerHandler("changeData"+k[1]+"!",x)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var e=
    c.data(a,b);if(!d)return e||[];if(!e||c.isArray(d))e=c.data(a,b,c.makeArray(d));else e.push(d);return e}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),e=d.shift();if(e==="inprogress")e=d.shift();if(e){b==="fx"&&d.unshift("inprogress");e.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===B)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,
    a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var sa=/[\n\t]/g,ha=/\s+/,Sa=/\r/g,Ta=/^(?:href|src|style)$/,Ua=/^(?:button|input)$/i,Va=/^(?:button|input|object|select|textarea)$/i,Wa=/^a(?:rea)?$/i,ta=/^(?:radio|checkbox)$/i;c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",
    colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};c.fn.extend({attr:function(a,b){return c.access(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(x){var r=c(this);r.addClass(a.call(this,x,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===
    1)if(f.className){for(var h=" "+f.className+" ",l=f.className,k=0,o=b.length;k<o;k++)if(h.indexOf(" "+b[k]+" ")<0)l+=" "+b[k];f.className=c.trim(l)}else f.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(o){var x=c(this);x.removeClass(a.call(this,o,x.attr("class")))});if(a&&typeof a==="string"||a===B)for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===1&&f.className)if(a){for(var h=(" "+f.className+" ").replace(sa," "),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 l=0,k=b.length;l<k;l++)h=h.replace(" "+b[l]+" "," ");f.className=c.trim(h)}else f.className=""}return this},toggleClass:function(a,b){var d=typeof a,e=typeof b==="boolean";if(c.isFunction(a))return this.each(function(f){var h=c(this);h.toggleClass(a.call(this,f,h.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var f,h=0,l=c(this),k=b,o=a.split(ha);f=o[h++];){k=e?k:!l.hasClass(f);l[k?"addClass":"removeClass"](f)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,
    "__className__",this.className);this.className=this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(sa," ").indexOf(a)>-1)return true;return false},val:function(a){if(!arguments.length){var b=this[0];if(b){if(c.nodeName(b,"option")){var d=b.attributes.value;return!d||d.specified?b.value:b.text}if(c.nodeName(b,"select")){var e=b.selectedIndex;d=[];var f=b.options;b=b.type==="select-one";
    if(e<0)return null;var h=b?e:0;for(e=b?e+1:f.length;h<e;h++){var l=f[h];if(l.selected&&(c.support.optDisabled?!l.disabled:l.getAttribute("disabled")===null)&&(!l.parentNode.disabled||!c.nodeName(l.parentNode,"optgroup"))){a=c(l).val();if(b)return a;d.push(a)}}return d}if(ta.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Sa,"")}return B}var k=c.isFunction(a);return this.each(function(o){var x=c(this),r=a;if(this.nodeType===1){if(k)r=
    a.call(this,o,x.val());if(r==null)r="";else if(typeof r==="number")r+="";else if(c.isArray(r))r=c.map(r,function(C){return C==null?"":C+""});if(c.isArray(r)&&ta.test(this.type))this.checked=c.inArray(x.val(),r)>=0;else if(c.nodeName(this,"select")){var A=c.makeArray(r);c("option",this).each(function(){this.selected=c.inArray(c(this).val(),A)>=0});if(!A.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},
    attr:function(a,b,d,e){if(!a||a.nodeType===3||a.nodeType===8)return B;if(e&&b in c.attrFn)return c(a)[b](d);e=a.nodeType!==1||!c.isXMLDoc(a);var f=d!==B;b=e&&c.props[b]||b;var h=Ta.test(b);if((b in a||a[b]!==B)&&e&&!h){if(f){b==="type"&&Ua.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");if(d===null)a.nodeType===1&&a.removeAttribute(b);else a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&
        b.specified?b.value:Va.test(a.nodeName)||Wa.test(a.nodeName)&&a.href?0:B;return a[b]}if(!c.support.style&&e&&b==="style"){if(f)a.style.cssText=""+d;return a.style.cssText}f&&a.setAttribute(b,""+d);if(!a.attributes[b]&&a.hasAttribute&&!a.hasAttribute(b))return B;a=!c.support.hrefNormalized&&e&&h?a.getAttribute(b,2):a.getAttribute(b);return a===null?B:a}});var X=/\.(.*)$/,ia=/^(?:textarea|input|select)$/i,La=/\./g,Ma=/ /g,Xa=/[^\w\s.|`]/g,Ya=function(a){return a.replace(Xa,"\\$&")},ua={focusin:0,focusout:0};
    c.event={add:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(c.isWindow(a)&&a!==E&&!a.frameElement)a=E;if(d===false)d=U;else if(!d)return;var f,h;if(d.handler){f=d;d=f.handler}if(!d.guid)d.guid=c.guid++;if(h=c.data(a)){var l=a.nodeType?"events":"__events__",k=h[l],o=h.handle;if(typeof k==="function"){o=k.handle;k=k.events}else if(!k){a.nodeType||(h[l]=h=function(){});h.events=k={}}if(!o)h.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,
        arguments):B};o.elem=a;b=b.split(" ");for(var x=0,r;l=b[x++];){h=f?c.extend({},f):{handler:d,data:e};if(l.indexOf(".")>-1){r=l.split(".");l=r.shift();h.namespace=r.slice(0).sort().join(".")}else{r=[];h.namespace=""}h.type=l;if(!h.guid)h.guid=d.guid;var A=k[l],C=c.event.special[l]||{};if(!A){A=k[l]=[];if(!C.setup||C.setup.call(a,e,r,o)===false)if(a.addEventListener)a.addEventListener(l,o,false);else a.attachEvent&&a.attachEvent("on"+l,o)}if(C.add){C.add.call(a,h);if(!h.handler.guid)h.handler.guid=
        d.guid}A.push(h);c.event.global[l]=true}a=null}}},global:{},remove:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(d===false)d=U;var f,h,l=0,k,o,x,r,A,C,J=a.nodeType?"events":"__events__",w=c.data(a),I=w&&w[J];if(w&&I){if(typeof I==="function"){w=I;I=I.events}if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(f in I)c.event.remove(a,f+b)}else{for(b=b.split(" ");f=b[l++];){r=f;k=f.indexOf(".")<0;o=[];if(!k){o=f.split(".");f=o.shift();x=RegExp("(^|\\.)"+
        c.map(o.slice(0).sort(),Ya).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(A=I[f])if(d){r=c.event.special[f]||{};for(h=e||0;h<A.length;h++){C=A[h];if(d.guid===C.guid){if(k||x.test(C.namespace)){e==null&&A.splice(h--,1);r.remove&&r.remove.call(a,C)}if(e!=null)break}}if(A.length===0||e!=null&&A.length===1){if(!r.teardown||r.teardown.call(a,o)===false)c.removeEvent(a,f,w.handle);delete I[f]}}else for(h=0;h<A.length;h++){C=A[h];if(k||x.test(C.namespace)){c.event.remove(a,r,C.handler,h);A.splice(h--,1)}}}if(c.isEmptyObject(I)){if(b=
        w.handle)b.elem=null;delete w.events;delete w.handle;if(typeof w==="function")c.removeData(a,J);else c.isEmptyObject(w)&&c.removeData(a)}}}}},trigger:function(a,b,d,e){var f=a.type||a;if(!e){a=typeof a==="object"?a[c.expando]?a:c.extend(c.Event(f),a):c.Event(f);if(f.indexOf("!")>=0){a.type=f=f.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[f]&&c.each(c.cache,function(){this.events&&this.events[f]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===
        8)return B;a.result=B;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(e=d.nodeType?c.data(d,"handle"):(c.data(d,"__events__")||{}).handle)&&e.apply(d,b);e=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+f]&&d["on"+f].apply(d,b)===false){a.result=false;a.preventDefault()}}catch(h){}if(!a.isPropagationStopped()&&e)c.event.trigger(a,b,e,true);else if(!a.isDefaultPrevented()){var l;e=a.target;var k=f.replace(X,""),o=c.nodeName(e,"a")&&k===
        "click",x=c.event.special[k]||{};if((!x._default||x._default.call(d,a)===false)&&!o&&!(e&&e.nodeName&&c.noData[e.nodeName.toLowerCase()])){try{if(e[k]){if(l=e["on"+k])e["on"+k]=null;c.event.triggered=true;e[k]()}}catch(r){}if(l)e["on"+k]=l;c.event.triggered=false}}},handle:function(a){var b,d,e,f;d=[];var h=c.makeArray(arguments);a=h[0]=c.event.fix(a||E.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;if(!b){e=a.type.split(".");a.type=e.shift();d=e.slice(0).sort();e=RegExp("(^|\\.)"+
        d.join("\\.(?:.*\\.)?")+"(\\.|$)")}a.namespace=a.namespace||d.join(".");f=c.data(this,this.nodeType?"events":"__events__");if(typeof f==="function")f=f.events;d=(f||{})[a.type];if(f&&d){d=d.slice(0);f=0;for(var l=d.length;f<l;f++){var k=d[f];if(b||e.test(k.namespace)){a.handler=k.handler;a.data=k.data;a.handleObj=k;k=k.handler.apply(this,h);if(k!==B){a.result=k;if(k===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix:function(a){if(a[c.expando])return a;var b=a;a=c.Event(b);for(var d=this.props.length,e;d;){e=this.props[--d];a[e]=b[e]}if(!a.target)a.target=a.srcElement||t;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=t.documentElement;d=t.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
            d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(a.which==null&&(a.charCode!=null||a.keyCode!=null))a.which=a.charCode!=null?a.charCode:a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==B)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,Y(a.origType,a.selector),c.extend({},a,{handler:Ka,guid:a.handler.guid}))},remove:function(a){c.event.remove(this,
            Y(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,d){if(c.isWindow(this))this.onbeforeunload=d},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};c.removeEvent=t.removeEventListener?function(a,b,d){a.removeEventListener&&a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent&&a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=a;this.type=a.type}else this.type=a;this.timeStamp=
        c.now();this[c.expando]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=ca;var a=this.originalEvent;if(a)if(a.preventDefault)a.preventDefault();else a.returnValue=false},stopPropagation:function(){this.isPropagationStopped=ca;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=ca;this.stopPropagation()},isDefaultPrevented:U,isPropagationStopped:U,isImmediatePropagationStopped:U};
    var va=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},wa=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?wa:va,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?wa:va)}}});if(!c.support.submitBubbles)c.event.special.submit={setup:function(){if(this.nodeName.toLowerCase()!==
        "form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length){a.liveFired=B;return la("submit",this,arguments)}});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13){a.liveFired=B;return la("submit",this,arguments)}})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};if(!c.support.changeBubbles){var V,
        xa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(e){return e.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},Z=function(a,b){var d=a.target,e,f;if(!(!ia.test(d.nodeName)||d.readOnly)){e=c.data(d,"_change_data");f=xa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",f);if(!(e===B||f===e))if(e!=null||f){a.type="change";a.liveFired=
            B;return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:Z,beforedeactivate:Z,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return Z.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return Z.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,"_change_data",xa(a))}},setup:function(){if(this.type===
        "file")return false;for(var a in V)c.event.add(this,a+".specialChange",V[a]);return ia.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return ia.test(this.nodeName)}};V=c.event.special.change.filters;V.focus=V.beforeactivate}t.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.trigger(e,null,e.target)}c.event.special[b]={setup:function(){ua[b]++===0&&t.addEventListener(a,d,true)},teardown:function(){--ua[b]===
        0&&t.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,e,f){if(typeof d==="object"){for(var h in d)this[b](h,e,d[h],f);return this}if(c.isFunction(e)||e===false){f=e;e=B}var l=b==="one"?c.proxy(f,function(o){c(this).unbind(o,l);return f.apply(this,arguments)}):f;if(d==="unload"&&b!=="one")this.one(d,e,f);else{h=0;for(var k=this.length;h<k;h++)c.event.add(this[h],d,l,e)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&!a.preventDefault)for(var d in a)this.unbind(d,
        a[d]);else{d=0;for(var e=this.length;d<e;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,e){return this.live(b,d,e,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var d=c.Event(a);d.preventDefault();d.stopPropagation();c.event.trigger(d,b,this[0]);return d.result}},toggle:function(a){for(var b=arguments,d=
        1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(e){var f=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,f+1);e.preventDefault();return b[f].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var ya={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,e,f,h){var l,k=0,o,x,r=h||this.selector;h=h?this:c(this.context);if(typeof d===
        "object"&&!d.preventDefault){for(l in d)h[b](l,e,d[l],r);return this}if(c.isFunction(e)){f=e;e=B}for(d=(d||"").split(" ");(l=d[k++])!=null;){o=X.exec(l);x="";if(o){x=o[0];l=l.replace(X,"")}if(l==="hover")d.push("mouseenter"+x,"mouseleave"+x);else{o=l;if(l==="focus"||l==="blur"){d.push(ya[l]+x);l+=x}else l=(ya[l]||l)+x;if(b==="live"){x=0;for(var A=h.length;x<A;x++)c.event.add(h[x],"live."+Y(l,r),{data:e,selector:r,handler:f,origType:l,origHandler:f,preType:o})}else h.unbind("live."+Y(l,r),f)}}return this}});
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){c.fn[b]=function(d,e){if(e==null){e=d;d=null}return arguments.length>0?this.bind(b,d,e):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});E.attachEvent&&!E.addEventListener&&c(E).bind("unload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});
    (function(){function a(g,i,n,m,p,q){p=0;for(var u=m.length;p<u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1&&!q){y.sizcache=n;y.sizset=p}if(y.nodeName.toLowerCase()===i){F=y;break}y=y[g]}m[p]=F}}}function b(g,i,n,m,p,q){p=0;for(var u=m.length;p<u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1){if(!q){y.sizcache=n;y.sizset=p}if(typeof i!=="string"){if(y===i){F=true;break}}else if(k.filter(i,
        [y]).length>0){F=y;break}}y=y[g]}m[p]=F}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,h=false,l=true;[0,0].sort(function(){l=false;return 0});var k=function(g,i,n,m){n=n||[];var p=i=i||t;if(i.nodeType!==1&&i.nodeType!==9)return[];if(!g||typeof g!=="string")return n;var q,u,y,F,M,N=true,O=k.isXML(i),D=[],R=g;do{d.exec("");if(q=d.exec(R)){R=q[3];D.push(q[1]);if(q[2]){F=q[3];
        break}}}while(q);if(D.length>1&&x.exec(g))if(D.length===2&&o.relative[D[0]])u=L(D[0]+D[1],i);else for(u=o.relative[D[0]]?[i]:k(D.shift(),i);D.length;){g=D.shift();if(o.relative[g])g+=D.shift();u=L(g,u)}else{if(!m&&D.length>1&&i.nodeType===9&&!O&&o.match.ID.test(D[0])&&!o.match.ID.test(D[D.length-1])){q=k.find(D.shift(),i,O);i=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]}if(i){q=m?{expr:D.pop(),set:C(m)}:k.find(D.pop(),D.length===1&&(D[0]==="~"||D[0]==="+")&&i.parentNode?i.parentNode:i,O);u=q.expr?k.filter(q.expr,
        q.set):q.set;if(D.length>0)y=C(u);else N=false;for(;D.length;){q=M=D.pop();if(o.relative[M])q=D.pop();else M="";if(q==null)q=i;o.relative[M](y,q,O)}}else y=[]}y||(y=u);y||k.error(M||g);if(f.call(y)==="[object Array]")if(N)if(i&&i.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&k.contains(i,y[g])))n.push(u[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&n.push(u[g]);else n.push.apply(n,y);else C(y,n);if(F){k(F,p,n,m);k.uniqueSort(n)}return n};k.uniqueSort=function(g){if(w){h=
        l;g.sort(w);if(h)for(var i=1;i<g.length;i++)g[i]===g[i-1]&&g.splice(i--,1)}return g};k.matches=function(g,i){return k(g,null,null,i)};k.matchesSelector=function(g,i){return k(i,null,null,[g]).length>0};k.find=function(g,i,n){var m;if(!g)return[];for(var p=0,q=o.order.length;p<q;p++){var u,y=o.order[p];if(u=o.leftMatch[y].exec(g)){var F=u[1];u.splice(1,1);if(F.substr(F.length-1)!=="\\"){u[1]=(u[1]||"").replace(/\\/g,"");m=o.find[y](u,i,n);if(m!=null){g=g.replace(o.match[y],"");break}}}}m||(m=i.getElementsByTagName("*"));
        return{set:m,expr:g}};k.filter=function(g,i,n,m){for(var p,q,u=g,y=[],F=i,M=i&&i[0]&&k.isXML(i[0]);g&&i.length;){for(var N in o.filter)if((p=o.leftMatch[N].exec(g))!=null&&p[2]){var O,D,R=o.filter[N];D=p[1];q=false;p.splice(1,1);if(D.substr(D.length-1)!=="\\"){if(F===y)y=[];if(o.preFilter[N])if(p=o.preFilter[N](p,F,n,y,m,M)){if(p===true)continue}else q=O=true;if(p)for(var j=0;(D=F[j])!=null;j++)if(D){O=R(D,p,j,F);var s=m^!!O;if(n&&O!=null)if(s)q=true;else F[j]=false;else if(s){y.push(D);q=true}}if(O!==
        B){n||(F=y);g=g.replace(o.match[N],"");if(!q)return[];break}}}if(g===u)if(q==null)k.error(g);else break;u=g}return F};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var o=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
        POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},relative:{"+":function(g,i){var n=typeof i==="string",m=n&&!/\W/.test(i);n=n&&!m;if(m)i=i.toLowerCase();m=0;for(var p=g.length,q;m<p;m++)if(q=g[m]){for(;(q=q.previousSibling)&&q.nodeType!==1;);g[m]=n||q&&q.nodeName.toLowerCase()===
        i?q||false:q===i}n&&k.filter(i,g,true)},">":function(g,i){var n,m=typeof i==="string",p=0,q=g.length;if(m&&!/\W/.test(i))for(i=i.toLowerCase();p<q;p++){if(n=g[p]){n=n.parentNode;g[p]=n.nodeName.toLowerCase()===i?n:false}}else{for(;p<q;p++)if(n=g[p])g[p]=m?n.parentNode:n.parentNode===i;m&&k.filter(i,g,true)}},"":function(g,i,n){var m,p=e++,q=b;if(typeof i==="string"&&!/\W/.test(i)){m=i=i.toLowerCase();q=a}q("parentNode",i,p,g,m,n)},"~":function(g,i,n){var m,p=e++,q=b;if(typeof i==="string"&&!/\W/.test(i)){m=
        i=i.toLowerCase();q=a}q("previousSibling",i,p,g,m,n)}},find:{ID:function(g,i,n){if(typeof i.getElementById!=="undefined"&&!n)return(g=i.getElementById(g[1]))&&g.parentNode?[g]:[]},NAME:function(g,i){if(typeof i.getElementsByName!=="undefined"){for(var n=[],m=i.getElementsByName(g[1]),p=0,q=m.length;p<q;p++)m[p].getAttribute("name")===g[1]&&n.push(m[p]);return n.length===0?null:n}},TAG:function(g,i){return i.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,i,n,m,p,q){g=" "+g[1].replace(/\\/g,
        "")+" ";if(q)return g;q=0;for(var u;(u=i[q])!=null;q++)if(u)if(p^(u.className&&(" "+u.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))n||m.push(u);else if(n)i[q]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},CHILD:function(g){if(g[1]==="nth"){var i=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=i[1]+(i[2]||1)-0;g[3]=i[3]-0}g[0]=e++;return g},ATTR:function(g,i,n,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       m,p,q){i=g[1].replace(/\\/g,"");if(!q&&o.attrMap[i])g[1]=o.attrMap[i];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,i,n,m,p){if(g[1]==="not")if((d.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,i);else{g=k.filter(g[3],i,n,true^p);n||m.push.apply(m,g);return false}else if(o.match.POS.test(g[0])||o.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===
        true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,i,n){return!!k(n[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===
        g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},setFilters:{first:function(g,i){return i===0},last:function(g,i,n,m){return i===m.length-1},even:function(g,i){return i%2===0},odd:function(g,i){return i%2===1},lt:function(g,i,n){return i<n[3]-0},gt:function(g,i,n){return i>n[3]-0},nth:function(g,i,n){return n[3]-
        0===i},eq:function(g,i,n){return n[3]-0===i}},filter:{PSEUDO:function(g,i,n,m){var p=i[1],q=o.filters[p];if(q)return q(g,n,i,m);else if(p==="contains")return(g.textContent||g.innerText||k.getText([g])||"").indexOf(i[3])>=0;else if(p==="not"){i=i[3];n=0;for(m=i.length;n<m;n++)if(i[n]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+p)},CHILD:function(g,i){var n=i[1],m=g;switch(n){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(n===
        "first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":n=i[2];var p=i[3];if(n===1&&p===0)return true;var q=i[0],u=g.parentNode;if(u&&(u.sizcache!==q||!g.nodeIndex)){var y=0;for(m=u.firstChild;m;m=m.nextSibling)if(m.nodeType===1)m.nodeIndex=++y;u.sizcache=q}m=g.nodeIndex-p;return n===0?m===0:m%n===0&&m/n>=0}},ID:function(g,i){return g.nodeType===1&&g.getAttribute("id")===i},TAG:function(g,i){return i==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===
        i},CLASS:function(g,i){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(i)>-1},ATTR:function(g,i){var n=i[1];n=o.attrHandle[n]?o.attrHandle[n](g):g[n]!=null?g[n]:g.getAttribute(n);var m=n+"",p=i[2],q=i[4];return n==null?p==="!=":p==="="?m===q:p==="*="?m.indexOf(q)>=0:p==="~="?(" "+m+" ").indexOf(q)>=0:!q?m&&n!==false:p==="!="?m!==q:p==="^="?m.indexOf(q)===0:p==="$="?m.substr(m.length-q.length)===q:p==="|="?m===q||m.substr(0,q.length+1)===q+"-":false},POS:function(g,i,n,m){var p=o.setFilters[i[2]];
        if(p)return p(g,n,i,m)}}},x=o.match.POS,r=function(g,i){return"\\"+(i-0+1)},A;for(A in o.match){o.match[A]=RegExp(o.match[A].source+/(?![^\[]*\])(?![^\(]*\))/.source);o.leftMatch[A]=RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[A].source.replace(/\\(\d+)/g,r))}var C=function(g,i){g=Array.prototype.slice.call(g,0);if(i){i.push.apply(i,g);return i}return g};try{Array.prototype.slice.call(t.documentElement.childNodes,0)}catch(J){C=function(g,i){var n=0,m=i||[];if(f.call(g)==="[object Array]")Array.prototype.push.apply(m,
        g);else if(typeof g.length==="number")for(var p=g.length;n<p;n++)m.push(g[n]);else for(;g[n];n++)m.push(g[n]);return m}}var w,I;if(t.documentElement.compareDocumentPosition)w=function(g,i){if(g===i){h=true;return 0}if(!g.compareDocumentPosition||!i.compareDocumentPosition)return g.compareDocumentPosition?-1:1;return g.compareDocumentPosition(i)&4?-1:1};else{w=function(g,i){var n,m,p=[],q=[];n=g.parentNode;m=i.parentNode;var u=n;if(g===i){h=true;return 0}else if(n===m)return I(g,i);else if(n){if(!m)return 1}else return-1;
        for(;u;){p.unshift(u);u=u.parentNode}for(u=m;u;){q.unshift(u);u=u.parentNode}n=p.length;m=q.length;for(u=0;u<n&&u<m;u++)if(p[u]!==q[u])return I(p[u],q[u]);return u===n?I(g,q[u],-1):I(p[u],i,1)};I=function(g,i,n){if(g===i)return n;for(g=g.nextSibling;g;){if(g===i)return-1;g=g.nextSibling}return 1}}k.getText=function(g){for(var i="",n,m=0;g[m];m++){n=g[m];if(n.nodeType===3||n.nodeType===4)i+=n.nodeValue;else if(n.nodeType!==8)i+=k.getText(n.childNodes)}return i};(function(){var g=t.createElement("div"),
        i="script"+(new Date).getTime(),n=t.documentElement;g.innerHTML="<a name='"+i+"'/>";n.insertBefore(g,n.firstChild);if(t.getElementById(i)){o.find.ID=function(m,p,q){if(typeof p.getElementById!=="undefined"&&!q)return(p=p.getElementById(m[1]))?p.id===m[1]||typeof p.getAttributeNode!=="undefined"&&p.getAttributeNode("id").nodeValue===m[1]?[p]:B:[]};o.filter.ID=function(m,p){var q=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&q&&q.nodeValue===p}}n.removeChild(g);
        n=g=null})();(function(){var g=t.createElement("div");g.appendChild(t.createComment(""));if(g.getElementsByTagName("*").length>0)o.find.TAG=function(i,n){var m=n.getElementsByTagName(i[1]);if(i[1]==="*"){for(var p=[],q=0;m[q];q++)m[q].nodeType===1&&p.push(m[q]);m=p}return m};g.innerHTML="<a href='#'></a>";if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")o.attrHandle.href=function(i){return i.getAttribute("href",2)};g=null})();t.querySelectorAll&&
    function(){var g=k,i=t.createElement("div");i.innerHTML="<p class='TEST'></p>";if(!(i.querySelectorAll&&i.querySelectorAll(".TEST").length===0)){k=function(m,p,q,u){p=p||t;m=m.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!u&&!k.isXML(p))if(p.nodeType===9)try{return C(p.querySelectorAll(m),q)}catch(y){}else if(p.nodeType===1&&p.nodeName.toLowerCase()!=="object"){var F=p.getAttribute("id"),M=F||"__sizzle__";F||p.setAttribute("id",M);try{return C(p.querySelectorAll("#"+M+" "+m),q)}catch(N){}finally{F||
    p.removeAttribute("id")}}return g(m,p,q,u)};for(var n in g)k[n]=g[n];i=null}}();(function(){var g=t.documentElement,i=g.matchesSelector||g.mozMatchesSelector||g.webkitMatchesSelector||g.msMatchesSelector,n=false;try{i.call(t.documentElement,"[test!='']:sizzle")}catch(m){n=true}if(i)k.matchesSelector=function(p,q){q=q.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(p))try{if(n||!o.match.PSEUDO.test(q)&&!/!=/.test(q))return i.call(p,q)}catch(u){}return k(q,null,null,[p]).length>0}})();(function(){var g=
        t.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){o.order.splice(1,0,"CLASS");o.find.CLASS=function(i,n,m){if(typeof n.getElementsByClassName!=="undefined"&&!m)return n.getElementsByClassName(i[1])};g=null}}})();k.contains=t.documentElement.contains?function(g,i){return g!==i&&(g.contains?g.contains(i):true)}:t.documentElement.compareDocumentPosition?
        function(g,i){return!!(g.compareDocumentPosition(i)&16)}:function(){return false};k.isXML=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false};var L=function(g,i){for(var n,m=[],p="",q=i.nodeType?[i]:i;n=o.match.PSEUDO.exec(g);){p+=n[0];g=g.replace(o.match.PSEUDO,"")}g=o.relative[g]?g+"*":g;n=0;for(var u=q.length;n<u;n++)k(g,q[n],m);return k.filter(p,m)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=k.getText;c.isXMLDoc=k.isXML;
        c.contains=k.contains})();var Za=/Until$/,$a=/^(?:parents|prevUntil|prevAll)/,ab=/,/,Na=/^.[^:#\[\.,]*$/,bb=Array.prototype.slice,cb=c.expr.match.POS;c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,e=0,f=this.length;e<f;e++){d=b.length;c.find(a,this[e],b);if(e>0)for(var h=d;h<b.length;h++)for(var l=0;l<d;l++)if(b[l]===b[h]){b.splice(h--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,e=b.length;d<e;d++)if(c.contains(this,b[d]))return true})},
        not:function(a){return this.pushStack(ma(this,a,false),"not",a)},filter:function(a){return this.pushStack(ma(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){var d=[],e,f,h=this[0];if(c.isArray(a)){var l,k={},o=1;if(h&&a.length){e=0;for(f=a.length;e<f;e++){l=a[e];k[l]||(k[l]=c.expr.match.POS.test(l)?c(l,b||this.context):l)}for(;h&&h.ownerDocument&&h!==b;){for(l in k){e=k[l];if(e.jquery?e.index(h)>-1:c(h).is(e))d.push({selector:l,elem:h,level:o})}h=
            h.parentNode;o++}}return d}l=cb.test(a)?c(a,b||this.context):null;e=0;for(f=this.length;e<f;e++)for(h=this[e];h;)if(l?l.index(h)>-1:c.find.matchesSelector(h,a)){d.push(h);break}else{h=h.parentNode;if(!h||!h.ownerDocument||h===b)break}d=d.length>1?c.unique(d):d;return this.pushStack(d,"closest",a)},index:function(a){if(!a||typeof a==="string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var d=typeof a==="string"?c(a,b||this.context):
            c.makeArray(a),e=c.merge(this.get(),d);return this.pushStack(!d[0]||!d[0].parentNode||d[0].parentNode.nodeType===11||!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:c.unique(e))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,
        2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             b){c.fn[a]=function(d,e){var f=c.map(this,b,d);Za.test(a)||(e=d);if(e&&typeof e==="string")f=c.filter(e,f);f=this.length>1?c.unique(f):f;if((this.length>1||ab.test(e))&&$a.test(a))f=f.reverse();return this.pushStack(f,a,bb.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return b.length===1?c.find.matchesSelector(b[0],a)?[b[0]]:[]:c.find.matches(a,b)},dir:function(a,b,d){var e=[];for(a=a[b];a&&a.nodeType!==9&&(d===B||a.nodeType!==1||!c(a).is(d));){a.nodeType===1&&
    e.push(a);a=a[b]}return e},nth:function(a,b,d){b=b||1;for(var e=0;a;a=a[d])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var za=/ jQuery\d+="(?:\d+|null)"/g,$=/^\s+/,Aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Ba=/<([\w:]+)/,db=/<tbody/i,eb=/<|&#?\w+;/,Ca=/<(?:script|object|embed|option|style)/i,Da=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/\=([^="'>\s]+\/)>/g,P={option:[1,
        "<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};P.optgroup=P.option;P.tbody=P.tfoot=P.colgroup=P.caption=P.thead;P.th=P.td;if(!c.support.htmlSerialize)P._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
        c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==B)return this.empty().append((this[0]&&this[0].ownerDocument||t).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
        wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
        prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
            this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,e;(e=this[d])!=null;d++)if(!a||c.filter(a,[e]).length){if(!b&&e.nodeType===1){c.cleanData(e.getElementsByTagName("*"));c.cleanData([e])}e.parentNode&&e.parentNode.removeChild(e)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
            return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,e=this.ownerDocument;if(!d){d=e.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(za,"").replace(fb,'="$1">').replace($,"")],e)[0]}else return this.cloneNode(true)});if(a===true){na(this,b);na(this.find("*"),b.find("*"))}return b},html:function(a){if(a===B)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(za,""):null;
        else if(typeof a==="string"&&!Ca.test(a)&&(c.support.leadingWhitespace||!$.test(a))&&!P[(Ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Aa,"<$1></$2>");try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(e){this.empty().append(a)}}else c.isFunction(a)?this.each(function(f){var h=c(this);h.html(a.call(this,f,h.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=
            c(this),e=d.html();d.replaceWith(a.call(this,b,e))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){var e,f,h,l=a[0],k=[];if(!c.support.checkClone&&arguments.length===3&&typeof l==="string"&&Da.test(l))return this.each(function(){c(this).domManip(a,
            b,d,true)});if(c.isFunction(l))return this.each(function(x){var r=c(this);a[0]=l.call(this,x,b?r.html():B);r.domManip(a,b,d)});if(this[0]){e=l&&l.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:c.buildFragment(a,this,k);h=e.fragment;if(f=h.childNodes.length===1?h=h.firstChild:h.firstChild){b=b&&c.nodeName(f,"tr");f=0;for(var o=this.length;f<o;f++)d.call(b?c.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):
            this[f]:this[f],f>0||e.cacheable||this.length>1?h.cloneNode(true):h)}k.length&&c.each(k,Oa)}return this}});c.buildFragment=function(a,b,d){var e,f,h;b=b&&b[0]?b[0].ownerDocument||b[0]:t;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===t&&!Ca.test(a[0])&&(c.support.checkClone||!Da.test(a[0]))){f=true;if(h=c.fragments[a[0]])if(h!==1)e=h}if(!e){e=b.createDocumentFragment();c.clean(a,b,e,d)}if(f)c.fragments[a[0]]=h?e:1;return{fragment:e,cacheable:f}};c.fragments={};c.each({appendTo:"append",
        prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var e=[];d=c(d);var f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f.childNodes.length===1&&d.length===1){d[b](this[0]);return this}else{f=0;for(var h=d.length;f<h;f++){var l=(f>0?this.clone(true):this).get();c(d[f])[b](l);e=e.concat(l)}return this.pushStack(e,a,d.selector)}}});c.extend({clean:function(a,b,d,e){b=b||t;if(typeof b.createElement==="undefined")b=b.ownerDocument||
        b[0]&&b[0].ownerDocument||t;for(var f=[],h=0,l;(l=a[h])!=null;h++){if(typeof l==="number")l+="";if(l){if(typeof l==="string"&&!eb.test(l))l=b.createTextNode(l);else if(typeof l==="string"){l=l.replace(Aa,"<$1></$2>");var k=(Ba.exec(l)||["",""])[1].toLowerCase(),o=P[k]||P._default,x=o[0],r=b.createElement("div");for(r.innerHTML=o[1]+l+o[2];x--;)r=r.lastChild;if(!c.support.tbody){x=db.test(l);k=k==="table"&&!x?r.firstChild&&r.firstChild.childNodes:o[1]==="<table>"&&!x?r.childNodes:[];for(o=k.length-
        1;o>=0;--o)c.nodeName(k[o],"tbody")&&!k[o].childNodes.length&&k[o].parentNode.removeChild(k[o])}!c.support.leadingWhitespace&&$.test(l)&&r.insertBefore(b.createTextNode($.exec(l)[0]),r.firstChild);l=r.childNodes}if(l.nodeType)f.push(l);else f=c.merge(f,l)}}if(d)for(h=0;f[h];h++)if(e&&c.nodeName(f[h],"script")&&(!f[h].type||f[h].type.toLowerCase()==="text/javascript"))e.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]);else{f[h].nodeType===1&&f.splice.apply(f,[h+1,0].concat(c.makeArray(f[h].getElementsByTagName("script"))));
        d.appendChild(f[h])}return f},cleanData:function(a){for(var b,d,e=c.cache,f=c.event.special,h=c.support.deleteExpando,l=0,k;(k=a[l])!=null;l++)if(!(k.nodeName&&c.noData[k.nodeName.toLowerCase()]))if(d=k[c.expando]){if((b=e[d])&&b.events)for(var o in b.events)f[o]?c.event.remove(k,o):c.removeEvent(k,o,b.handle);if(h)delete k[c.expando];else k.removeAttribute&&k.removeAttribute(c.expando);delete e[d]}}});var Ea=/alpha\([^)]*\)/i,gb=/opacity=([^)]*)/,hb=/-([a-z])/ig,ib=/([A-Z])/g,Fa=/^-?\d+(?:px)?$/i,
        jb=/^-?\d/,kb={position:"absolute",visibility:"hidden",display:"block"},Pa=["Left","Right"],Qa=["Top","Bottom"],W,Ga,aa,lb=function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){if(arguments.length===2&&b===B)return this;return c.access(this,a,b,true,function(d,e,f){return f!==B?c.style(d,e,f):c.css(d,e)})};c.extend({cssHooks:{opacity:{get:function(a,b){if(b){var d=W(a,"opacity","opacity");return d===""?"1":d}else return a.style.opacity}}},cssNumber:{zIndex:true,fontWeight:true,opacity:true,
        zoom:true,lineHeight:true},cssProps:{"float":c.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,d,e){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var f,h=c.camelCase(b),l=a.style,k=c.cssHooks[h];b=c.cssProps[h]||h;if(d!==B){if(!(typeof d==="number"&&isNaN(d)||d==null)){if(typeof d==="number"&&!c.cssNumber[h])d+="px";if(!k||!("set"in k)||(d=k.set(a,d))!==B)try{l[b]=d}catch(o){}}}else{if(k&&"get"in k&&(f=k.get(a,false,e))!==B)return f;return l[b]}}},css:function(a,b,d){var e,f=c.camelCase(b),
        h=c.cssHooks[f];b=c.cssProps[f]||f;if(h&&"get"in h&&(e=h.get(a,true,d))!==B)return e;else if(W)return W(a,b,f)},swap:function(a,b,d){var e={},f;for(f in b){e[f]=a.style[f];a.style[f]=b[f]}d.call(a);for(f in b)a.style[f]=e[f]},camelCase:function(a){return a.replace(hb,lb)}});c.curCSS=c.css;c.each(["height","width"],function(a,b){c.cssHooks[b]={get:function(d,e,f){var h;if(e){if(d.offsetWidth!==0)h=oa(d,b,f);else c.swap(d,kb,function(){h=oa(d,b,f)});if(h<=0){h=W(d,b,b);if(h==="0px"&&aa)h=aa(d,b,b);
        if(h!=null)return h===""||h==="auto"?"0px":h}if(h<0||h==null){h=d.style[b];return h===""||h==="auto"?"0px":h}return typeof h==="string"?h:h+"px"}},set:function(d,e){if(Fa.test(e)){e=parseFloat(e);if(e>=0)return e+"px"}else return e}}});if(!c.support.opacity)c.cssHooks.opacity={get:function(a,b){return gb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var d=a.style;d.zoom=1;var e=c.isNaN(b)?"":"alpha(opacity="+b*100+")",f=
        d.filter||"";d.filter=Ea.test(f)?f.replace(Ea,e):d.filter+" "+e}};if(t.defaultView&&t.defaultView.getComputedStyle)Ga=function(a,b,d){var e;d=d.replace(ib,"-$1").toLowerCase();if(!(b=a.ownerDocument.defaultView))return B;if(b=b.getComputedStyle(a,null)){e=b.getPropertyValue(d);if(e===""&&!c.contains(a.ownerDocument.documentElement,a))e=c.style(a,d)}return e};if(t.documentElement.currentStyle)aa=function(a,b){var d,e,f=a.currentStyle&&a.currentStyle[b],h=a.style;if(!Fa.test(f)&&jb.test(f)){d=h.left;
        e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;h.left=b==="fontSize"?"1em":f||0;f=h.pixelLeft+"px";h.left=d;a.runtimeStyle.left=e}return f===""?"auto":f};W=Ga||aa;if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=a.offsetHeight;return a.offsetWidth===0&&b===0||!c.support.reliableHiddenOffsets&&(a.style.display||c.css(a,"display"))==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var mb=c.now(),nb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ob=/^(?:select|textarea)/i,pb=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,qb=/^(?:GET|HEAD)$/,Ra=/\[\]$/,T=/\=\?(&|$)/,ja=/\?/,rb=/([?&])_=[^&]*/,sb=/^(\w+:)?\/\/([^\/?#]+)/,tb=/%20/g,ub=/#.*$/,Ha=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!=="string"&&Ha)return Ha.apply(this,arguments);else if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}e="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b===
        "object"){b=c.param(b,c.ajaxSettings.traditional);e="POST"}var h=this;c.ajax({url:a,type:e,dataType:"html",data:b,complete:function(l,k){if(k==="success"||k==="notmodified")h.html(f?c("<div>").append(l.responseText.replace(nb,"")).find(f):l.responseText);d&&h.each(d,[l.responseText,k,l])}});return this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&
        !this.disabled&&(this.checked||ob.test(this.nodeName)||pb.test(this.type))}).map(function(a,b){var d=c(this).val();return d==null?null:c.isArray(d)?c.map(d,function(e){return{name:b.name,value:e}}):{name:b.name,value:d}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:e})},
        getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:e})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return new E.XMLHttpRequest},accepts:{xml:"application/xml, text/xml",html:"text/html",
            script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},ajax:function(a){var b=c.extend(true,{},c.ajaxSettings,a),d,e,f,h=b.type.toUpperCase(),l=qb.test(h);b.url=b.url.replace(ub,"");b.context=a&&a.context!=null?a.context:b;if(b.data&&b.processData&&typeof b.data!=="string")b.data=c.param(b.data,b.traditional);if(b.dataType==="jsonp"){if(h==="GET")T.test(b.url)||(b.url+=(ja.test(b.url)?"&":"?")+(b.jsonp||"callback")+"=?");else if(!b.data||
            !T.test(b.data))b.data=(b.data?b.data+"&":"")+(b.jsonp||"callback")+"=?";b.dataType="json"}if(b.dataType==="json"&&(b.data&&T.test(b.data)||T.test(b.url))){d=b.jsonpCallback||"jsonp"+mb++;if(b.data)b.data=(b.data+"").replace(T,"="+d+"$1");b.url=b.url.replace(T,"="+d+"$1");b.dataType="script";var k=E[d];E[d]=function(m){if(c.isFunction(k))k(m);else{E[d]=B;try{delete E[d]}catch(p){}}f=m;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);r&&r.removeChild(A)}}if(b.dataType==="script"&&b.cache===null)b.cache=
            false;if(b.cache===false&&l){var o=c.now(),x=b.url.replace(rb,"$1_="+o);b.url=x+(x===b.url?(ja.test(b.url)?"&":"?")+"_="+o:"")}if(b.data&&l)b.url+=(ja.test(b.url)?"&":"?")+b.data;b.global&&c.active++===0&&c.event.trigger("ajaxStart");o=(o=sb.exec(b.url))&&(o[1]&&o[1].toLowerCase()!==location.protocol||o[2].toLowerCase()!==location.host);if(b.dataType==="script"&&h==="GET"&&o){var r=t.getElementsByTagName("head")[0]||t.documentElement,A=t.createElement("script");if(b.scriptCharset)A.charset=b.scriptCharset;
            A.src=b.url;if(!d){var C=false;A.onload=A.onreadystatechange=function(){if(!C&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){C=true;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);A.onload=A.onreadystatechange=null;r&&A.parentNode&&r.removeChild(A)}}}r.insertBefore(A,r.firstChild);return B}var J=false,w=b.xhr();if(w){b.username?w.open(h,b.url,b.async,b.username,b.password):w.open(h,b.url,b.async);try{if(b.data!=null&&!l||a&&a.contentType)w.setRequestHeader("Content-Type",
            b.contentType);if(b.ifModified){c.lastModified[b.url]&&w.setRequestHeader("If-Modified-Since",c.lastModified[b.url]);c.etag[b.url]&&w.setRequestHeader("If-None-Match",c.etag[b.url])}o||w.setRequestHeader("X-Requested-With","XMLHttpRequest");w.setRequestHeader("Accept",b.dataType&&b.accepts[b.dataType]?b.accepts[b.dataType]+", */*; q=0.01":b.accepts._default)}catch(I){}if(b.beforeSend&&b.beforeSend.call(b.context,w,b)===false){b.global&&c.active--===1&&c.event.trigger("ajaxStop");w.abort();return false}b.global&&
        c.triggerGlobal(b,"ajaxSend",[w,b]);var L=w.onreadystatechange=function(m){if(!w||w.readyState===0||m==="abort"){J||c.handleComplete(b,w,e,f);J=true;if(w)w.onreadystatechange=c.noop}else if(!J&&w&&(w.readyState===4||m==="timeout")){J=true;w.onreadystatechange=c.noop;e=m==="timeout"?"timeout":!c.httpSuccess(w)?"error":b.ifModified&&c.httpNotModified(w,b.url)?"notmodified":"success";var p;if(e==="success")try{f=c.httpData(w,b.dataType,b)}catch(q){e="parsererror";p=q}if(e==="success"||e==="notmodified")d||
        c.handleSuccess(b,w,e,f);else c.handleError(b,w,e,p);d||c.handleComplete(b,w,e,f);m==="timeout"&&w.abort();if(b.async)w=null}};try{var g=w.abort;w.abort=function(){w&&Function.prototype.call.call(g,w);L("abort")}}catch(i){}b.async&&b.timeout>0&&setTimeout(function(){w&&!J&&L("timeout")},b.timeout);try{w.send(l||b.data==null?null:b.data)}catch(n){c.handleError(b,w,null,n);c.handleComplete(b,w,e,f)}b.async||L();return w}},param:function(a,b){var d=[],e=function(h,l){l=c.isFunction(l)?l():l;d[d.length]=
            encodeURIComponent(h)+"="+encodeURIComponent(l)};if(b===B)b=c.ajaxSettings.traditional;if(c.isArray(a)||a.jquery)c.each(a,function(){e(this.name,this.value)});else for(var f in a)da(f,a[f],b,e);return d.join("&").replace(tb,"+")}});c.extend({active:0,lastModified:{},etag:{},handleError:function(a,b,d,e){a.error&&a.error.call(a.context,b,d,e);a.global&&c.triggerGlobal(a,"ajaxError",[b,a,e])},handleSuccess:function(a,b,d,e){a.success&&a.success.call(a.context,e,d,b);a.global&&c.triggerGlobal(a,"ajaxSuccess",
        [b,a])},handleComplete:function(a,b,d){a.complete&&a.complete.call(a.context,b,d);a.global&&c.triggerGlobal(a,"ajaxComplete",[b,a]);a.global&&c.active--===1&&c.event.trigger("ajaxStop")},triggerGlobal:function(a,b,d){(a.context&&a.context.url==null?c(a.context):c.event).trigger(b,d)},httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===1223}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),
        e=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(e)c.etag[b]=e;return a.status===304},httpData:function(a,b,d){var e=a.getResponseHeader("content-type")||"",f=b==="xml"||!b&&e.indexOf("xml")>=0;a=f?a.responseXML:a.responseText;f&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b==="json"||!b&&e.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&e.indexOf("javascript")>=0)c.globalEval(a);return a}});
    if(E.ActiveXObject)c.ajaxSettings.xhr=function(){if(E.location.protocol!=="file:")try{return new E.XMLHttpRequest}catch(a){}try{return new E.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}};c.support.ajax=!!c.ajaxSettings.xhr();var ea={},vb=/^(?:toggle|show|hide)$/,wb=/^([+\-]=)?([\d+.\-]+)(.*)$/,ba,pa=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b,d){if(a||a===0)return this.animate(S("show",
        3),a,b,d);else{d=0;for(var e=this.length;d<e;d++){a=this[d];b=a.style.display;if(!c.data(a,"olddisplay")&&b==="none")b=a.style.display="";b===""&&c.css(a,"display")==="none"&&c.data(a,"olddisplay",qa(a.nodeName))}for(d=0;d<e;d++){a=this[d];b=a.style.display;if(b===""||b==="none")a.style.display=c.data(a,"olddisplay")||""}return this}},hide:function(a,b,d){if(a||a===0)return this.animate(S("hide",3),a,b,d);else{a=0;for(b=this.length;a<b;a++){d=c.css(this[a],"display");d!=="none"&&c.data(this[a],"olddisplay",
        d)}for(a=0;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b,d){var e=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||e?this.each(function(){var f=e?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(S("toggle",3),a,b,d);return this},fadeTo:function(a,b,d,e){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d,e)},animate:function(a,b,d,e){var f=c.speed(b,
        d,e);if(c.isEmptyObject(a))return this.each(f.complete);return this[f.queue===false?"each":"queue"](function(){var h=c.extend({},f),l,k=this.nodeType===1,o=k&&c(this).is(":hidden"),x=this;for(l in a){var r=c.camelCase(l);if(l!==r){a[r]=a[l];delete a[l];l=r}if(a[l]==="hide"&&o||a[l]==="show"&&!o)return h.complete.call(this);if(k&&(l==="height"||l==="width")){h.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(c.css(this,"display")==="inline"&&c.css(this,"float")==="none")if(c.support.inlineBlockNeedsLayout)if(qa(this.nodeName)===
        "inline")this.style.display="inline-block";else{this.style.display="inline";this.style.zoom=1}else this.style.display="inline-block"}if(c.isArray(a[l])){(h.specialEasing=h.specialEasing||{})[l]=a[l][1];a[l]=a[l][0]}}if(h.overflow!=null)this.style.overflow="hidden";h.curAnim=c.extend({},a);c.each(a,function(A,C){var J=new c.fx(x,h,A);if(vb.test(C))J[C==="toggle"?o?"show":"hide":C](a);else{var w=wb.exec(C),I=J.cur()||0;if(w){var L=parseFloat(w[2]),g=w[3]||"px";if(g!=="px"){c.style(x,A,(L||1)+g);I=(L||
        1)/J.cur()*I;c.style(x,A,I+g)}if(w[1])L=(w[1]==="-="?-1:1)*L+I;J.custom(I,L,g)}else J.custom(I,C,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);this.each(function(){for(var e=d.length-1;e>=0;e--)if(d[e].elem===this){b&&d[e](true);d.splice(e,1)}});b||this.dequeue();return this}});c.each({slideDown:S("show",1),slideUp:S("hide",1),slideToggle:S("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){c.fn[a]=function(d,e,f){return this.animate(b,
        d,e,f)}});c.extend({speed:function(a,b,d){var e=a&&typeof a==="object"?c.extend({},a):{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};e.duration=c.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in c.fx.speeds?c.fx.speeds[e.duration]:c.fx.speeds._default;e.old=e.complete;e.complete=function(){e.queue!==false&&c(this).dequeue();c.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,d,e){return d+e*a},swing:function(a,b,d,e){return(-Math.cos(a*
        Math.PI)/2+0.5)*e+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||c.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(c.css(this.elem,this.prop));return a&&a>-1E4?a:0},custom:function(a,b,d){function e(l){return f.step(l)}
        var f=this,h=c.fx;this.startTime=c.now();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;this.pos=this.state=0;e.elem=this.elem;if(e()&&c.timers.push(e)&&!ba)ba=setInterval(h.tick,h.interval)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;
        this.custom(this.cur(),0)},step:function(a){var b=c.now(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var e in this.options.curAnim)if(this.options.curAnim[e]!==true)d=false;if(d){if(this.options.overflow!=null&&!c.support.shrinkWrapBlocks){var f=this.elem,h=this.options;c.each(["","X","Y"],function(k,o){f.style["overflow"+o]=h.overflow[k]})}this.options.hide&&c(this.elem).hide();if(this.options.hide||
        this.options.show)for(var l in this.options.curAnim)c.style(this.elem,l,this.options.orig[l]);this.options.complete.call(this.elem)}return false}else{a=b-this.startTime;this.state=a/this.options.duration;b=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||b](this.state,a,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=
        c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||c.fx.stop()},interval:13,stop:function(){clearInterval(ba);ba=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===
        b.elem}).length};var xb=/^t(?:able|d|h)$/i,Ia=/^(?:body|html)$/i;c.fn.offset="getBoundingClientRect"in t.documentElement?function(a){var b=this[0],d;if(a)return this.each(function(l){c.offset.setOffset(this,a,l)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);try{d=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,h=f.documentElement;if(!d||!c.contains(h,b))return d||{top:0,left:0};b=f.body;f=fa(f);return{top:d.top+(f.pageYOffset||c.support.boxModel&&
        h.scrollTop||b.scrollTop)-(h.clientTop||b.clientTop||0),left:d.left+(f.pageXOffset||c.support.boxModel&&h.scrollLeft||b.scrollLeft)-(h.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(a)return this.each(function(x){c.offset.setOffset(this,a,x)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d,e=b.offsetParent,f=b.ownerDocument,h=f.documentElement,l=f.body;d=(f=f.defaultView)?f.getComputedStyle(b,null):b.currentStyle;
        for(var k=b.offsetTop,o=b.offsetLeft;(b=b.parentNode)&&b!==l&&b!==h;){if(c.offset.supportsFixedPosition&&d.position==="fixed")break;d=f?f.getComputedStyle(b,null):b.currentStyle;k-=b.scrollTop;o-=b.scrollLeft;if(b===e){k+=b.offsetTop;o+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&xb.test(b.nodeName))){k+=parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}e=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"){k+=
            parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}d=d}if(d.position==="relative"||d.position==="static"){k+=l.offsetTop;o+=l.offsetLeft}if(c.offset.supportsFixedPosition&&d.position==="fixed"){k+=Math.max(h.scrollTop,l.scrollTop);o+=Math.max(h.scrollLeft,l.scrollLeft)}return{top:k,left:o}};c.offset={initialize:function(){var a=t.body,b=t.createElement("div"),d,e,f,h=parseFloat(c.css(a,"marginTop"))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",
        height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.insertBefore(b,a.firstChild);d=b.firstChild;e=d.firstChild;f=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=e.offsetTop!==5;this.doesAddBorderForTableAndCells=
        f.offsetTop===5;e.style.position="fixed";e.style.top="20px";this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15;e.style.position=e.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==h;a.removeChild(b);c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.css(a,
        "marginTop"))||0;d+=parseFloat(c.css(a,"marginLeft"))||0}return{top:b,left:d}},setOffset:function(a,b,d){var e=c.css(a,"position");if(e==="static")a.style.position="relative";var f=c(a),h=f.offset(),l=c.css(a,"top"),k=c.css(a,"left"),o=e==="absolute"&&c.inArray("auto",[l,k])>-1;e={};var x={};if(o)x=f.position();l=o?x.top:parseInt(l,10)||0;k=o?x.left:parseInt(k,10)||0;if(c.isFunction(b))b=b.call(a,d,h);if(b.top!=null)e.top=b.top-h.top+l;if(b.left!=null)e.left=b.left-h.left+k;"using"in b?b.using.call(a,
        e):f.css(e)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),e=Ia.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.css(a,"marginTop"))||0;d.left-=parseFloat(c.css(a,"marginLeft"))||0;e.top+=parseFloat(c.css(b[0],"borderTopWidth"))||0;e.left+=parseFloat(c.css(b[0],"borderLeftWidth"))||0;return{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||t.body;a&&!Ia.test(a.nodeName)&&
        c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(e){var f=this[0],h;if(!f)return null;if(e!==B)return this.each(function(){if(h=fa(this))h.scrollTo(!a?e:c(h).scrollLeft(),a?e:c(h).scrollTop());else this[d]=e});else return(h=fa(f))?"pageXOffset"in h?h[a?"pageYOffset":"pageXOffset"]:c.support.boxModel&&h.document.documentElement[d]||h.document.body[d]:f[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();
        c.fn["inner"+b]=function(){return this[0]?parseFloat(c.css(this[0],d,"padding")):null};c.fn["outer"+b]=function(e){return this[0]?parseFloat(c.css(this[0],d,e?"margin":"border")):null};c.fn[d]=function(e){var f=this[0];if(!f)return e==null?null:this;if(c.isFunction(e))return this.each(function(l){var k=c(this);k[d](e.call(this,l,k[d]()))});if(c.isWindow(f))return f.document.compatMode==="CSS1Compat"&&f.document.documentElement["client"+b]||f.document.body["client"+b];else if(f.nodeType===9)return Math.max(f.documentElement["client"+
            b],f.body["scroll"+b],f.documentElement["scroll"+b],f.body["offset"+b],f.documentElement["offset"+b]);else if(e===B){f=c.css(f,d);var h=parseFloat(f);return c.isNaN(h)?f:h}else return this.css(d,typeof e==="string"?e:e+"px")}})})(window);
;

/**
 * jQuery Once Plugin v1.2
 * http://plugins.jquery.com/project/once
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function ($) {
    var cache = {}, uuid = 0;

    /**
     * Filters elements by whether they have not yet been processed.
     *
     * @param id
     *   (Optional) If this is a string, then it will be used as the CSS class
     *   name that is applied to the elements for determining whether it has
     *   already been processed. The elements will get a class in the form of
     *   "id-processed".
     *
     *   If the id parameter is a function, it will be passed off to the fn
     *   parameter and the id will become a unique identifier, represented as a
     *   number.
     *
     *   When the id is neither a string or a function, it becomes a unique
     *   identifier, depicted as a number. The element's class will then be
     *   represented in the form of "jquery-once-#-processed".
     *
     *   Take note that the id must be valid for usage as an element's class name.
     * @param fn
     *   (Optional) If given, this function will be called for each element that
     *   has not yet been processed. The function's return value follows the same
     *   logic as $.each(). Returning true will continue to the next matched
     *   element in the set, while returning false will entirely break the
     *   iteration.
     */
    $.fn.once = function (id, fn) {
        if (typeof id != 'string') {
            // Generate a numeric ID if the id passed can't be used as a CSS class.
            if (!(id in cache)) {
                cache[id] = ++uuid;
            }
            // When the fn parameter is not passed, we interpret it from the id.
            if (!fn) {
                fn = id;
            }
            id = 'jquery-once-' + cache[id];
        }
        // Remove elements from the set that have already been processed.
        var name = id + '-processed';
        var elements = this.not('.' + name).addClass(name);

        return $.isFunction(fn) ? elements.each(fn) : elements;
    };

    /**
     * Filters elements that have been processed once already.
     *
     * @param id
     *   A required string representing the name of the class which should be used
     *   when filtering the elements. This only filters elements that have already
     *   been processed by the once function. The id should be the same id that
     *   was originally passed to the once() function.
     * @param fn
     *   (Optional) If given, this function will be called for each element that
     *   has not yet been processed. The function's return value follows the same
     *   logic as $.each(). Returning true will continue to the next matched
     *   element in the set, while returning false will entirely break the
     *   iteration.
     */
    $.fn.removeOnce = function (id, fn) {
        var name = id + '-processed';
        var elements = this.filter('.' + name).removeClass(name);

        return $.isFunction(fn) ? elements.each(fn) : elements;
    };
})(jQuery);
;

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'locale': {} };

// Allow other JavaScript libraries to use $.
jQuery.noConflict();

(function ($) {

    /**
     * Override jQuery.fn.init to guard against XSS attacks.
     *
     * See http://bugs.jquery.com/ticket/9521
     */
    var jquery_init = $.fn.init;
    $.fn.init = function (selector, context, rootjQuery) {
        // If the string contains a "#" before a "<", treat it as invalid HTML.
        if (selector && typeof selector === 'string') {
            var hash_position = selector.indexOf('#');
            if (hash_position >= 0) {
                var bracket_position = selector.indexOf('<');
                if (bracket_position > hash_position) {
                    throw 'Syntax error, unrecognized expression: ' + selector;
                }
            }
        }
        return jquery_init.call(this, selector, context, rootjQuery);
    };
    $.fn.init.prototype = jquery_init.prototype;

    /**
     * Attach all registered behaviors to a page element.
     *
     * Behaviors are event-triggered actions that attach to page elements, enhancing
     * default non-JavaScript UIs. Behaviors are registered in the Drupal.behaviors
     * object using the method 'attach' and optionally also 'detach' as follows:
     * @code
     *    Drupal.behaviors.behaviorName = {
 *      attach: function (context, settings) {
 *        ...
 *      },
 *      detach: function (context, settings, trigger) {
 *        ...
 *      }
 *    };
     * @endcode
     *
     * Drupal.attachBehaviors is added below to the jQuery ready event and so
     * runs on initial page load. Developers implementing AHAH/Ajax in their
     * solutions should also call this function after new page content has been
     * loaded, feeding in an element to be processed, in order to attach all
     * behaviors to the new content.
     *
     * Behaviors should use
     * @code
     *   $(selector).once('behavior-name', function () {
 *     ...
 *   });
     * @endcode
     * to ensure the behavior is attached only once to a given element. (Doing so
     * enables the reprocessing of given elements, which may be needed on occasion
     * despite the ability to limit behavior attachment to a particular element.)
     *
     * @param context
     *   An element to attach behaviors to. If none is given, the document element
     *   is used.
     * @param settings
     *   An object containing settings for the current context. If none given, the
     *   global Drupal.settings object is used.
     */
    Drupal.attachBehaviors = function (context, settings) {
        context = context || document;
        settings = settings || Drupal.settings;
        // Execute all of them.
        $.each(Drupal.behaviors, function () {
            if ($.isFunction(this.attach)) {
                this.attach(context, settings);
            }
        });
    };

    /**
     * Detach registered behaviors from a page element.
     *
     * Developers implementing AHAH/Ajax in their solutions should call this
     * function before page content is about to be removed, feeding in an element
     * to be processed, in order to allow special behaviors to detach from the
     * content.
     *
     * Such implementations should look for the class name that was added in their
     * corresponding Drupal.behaviors.behaviorName.attach implementation, i.e.
     * behaviorName-processed, to ensure the behavior is detached only from
     * previously processed elements.
     *
     * @param context
     *   An element to detach behaviors from. If none is given, the document element
     *   is used.
     * @param settings
     *   An object containing settings for the current context. If none given, the
     *   global Drupal.settings object is used.
     * @param trigger
     *   A string containing what's causing the behaviors to be detached. The
     *   possible triggers are:
     *   - unload: (default) The context element is being removed from the DOM.
     *   - move: The element is about to be moved within the DOM (for example,
     *     during a tabledrag row swap). After the move is completed,
     *     Drupal.attachBehaviors() is called, so that the behavior can undo
     *     whatever it did in response to the move. Many behaviors won't need to
     *     do anything simply in response to the element being moved, but because
     *     IFRAME elements reload their "src" when being moved within the DOM,
     *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
     *     take some action.
     *   - serialize: When an Ajax form is submitted, this is called with the
     *     form as the context. This provides every behavior within the form an
     *     opportunity to ensure that the field elements have correct content
     *     in them before the form is serialized. The canonical use-case is so
     *     that WYSIWYG editors can update the hidden textarea to which they are
     *     bound.
     *
     * @see Drupal.attachBehaviors
     */
    Drupal.detachBehaviors = function (context, settings, trigger) {
        context = context || document;
        settings = settings || Drupal.settings;
        trigger = trigger || 'unload';
        // Execute all of them.
        $.each(Drupal.behaviors, function () {
            if ($.isFunction(this.detach)) {
                this.detach(context, settings, trigger);
            }
        });
    };

    /**
     * Encode special characters in a plain-text string for display as HTML.
     *
     * @ingroup sanitization
     */
    Drupal.checkPlain = function (str) {
        var character, regex,
            replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
        str = String(str);
        for (character in replace) {
            if (replace.hasOwnProperty(character)) {
                regex = new RegExp(character, 'g');
                str = str.replace(regex, replace[character]);
            }
        }
        return str;
    };

    /**
     * Replace placeholders with sanitized values in a string.
     *
     * @param str
     *   A string with placeholders.
     * @param args
     *   An object of replacements pairs to make. Incidences of any key in this
     *   array are replaced with the corresponding value. Based on the first
     *   character of the key, the value is escaped and/or themed:
     *    - !variable: inserted as is
     *    - @variable: escape plain text to HTML (Drupal.checkPlain)
     *    - %variable: escape text and theme as a placeholder for user-submitted
     *      content (checkPlain + Drupal.theme('placeholder'))
     *
     * @see Drupal.t()
     * @ingroup sanitization
     */
    Drupal.formatString = function(str, args) {
        // Transform arguments before inserting them.
        for (var key in args) {
            switch (key.charAt(0)) {
                // Escaped only.
                case '@':
                    args[key] = Drupal.checkPlain(args[key]);
                    break;
                // Pass-through.
                case '!':
                    break;
                // Escaped and placeholder.
                case '%':
                default:
                    args[key] = Drupal.theme('placeholder', args[key]);
                    break;
            }
            str = str.replace(key, args[key]);
        }
        return str;
    };

    /**
     * Translate strings to the page language or a given language.
     *
     * See the documentation of the server-side t() function for further details.
     *
     * @param str
     *   A string containing the English string to translate.
     * @param args
     *   An object of replacements pairs to make after translation. Incidences
     *   of any key in this array are replaced with the corresponding value.
     *   See Drupal.formatString().
     *
     * @param options
     *   - 'context' (defaults to the empty context): The context the source string
     *     belongs to.
     *
     * @return
     *   The translated string.
     */
    Drupal.t = function (str, args, options) {
        options = options || {};
        options.context = options.context || '';

        // Fetch the localized version of the string.
        if (Drupal.locale.strings && Drupal.locale.strings[options.context] && Drupal.locale.strings[options.context][str]) {
            str = Drupal.locale.strings[options.context][str];
        }

        if (args) {
            str = Drupal.formatString(str, args);
        }
        return str;
    };

    /**
     * Format a string containing a count of items.
     *
     * This function ensures that the string is pluralized correctly. Since Drupal.t() is
     * called by this function, make sure not to pass already-localized strings to it.
     *
     * See the documentation of the server-side format_plural() function for further details.
     *
     * @param count
     *   The item count to display.
     * @param singular
     *   The string for the singular case. Please make sure it is clear this is
     *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
     *   Do not use @count in the singular string.
     * @param plural
     *   The string for the plural case. Please make sure it is clear this is plural,
     *   to ease translation. Use @count in place of the item count, as in "@count
     *   new comments".
     * @param args
     *   An object of replacements pairs to make after translation. Incidences
     *   of any key in this array are replaced with the corresponding value.
     *   See Drupal.formatString().
     *   Note that you do not need to include @count in this array.
     *   This replacement is done automatically for the plural case.
     * @param options
     *   The options to pass to the Drupal.t() function.
     * @return
     *   A translated string.
     */
    Drupal.formatPlural = function (count, singular, plural, args, options) {
        var args = args || {};
        args['@count'] = count;
        // Determine the index of the plural form.
        var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

        if (index == 0) {
            return Drupal.t(singular, args, options);
        }
        else if (index == 1) {
            return Drupal.t(plural, args, options);
        }
        else {
            args['@count[' + index + ']'] = args['@count'];
            delete args['@count'];
            return Drupal.t(plural.replace('@count', '@count[' + index + ']'), args, options);
        }
    };

    /**
     * Generate the themed representation of a Drupal object.
     *
     * All requests for themed output must go through this function. It examines
     * the request and routes it to the appropriate theme function. If the current
     * theme does not provide an override function, the generic theme function is
     * called.
     *
     * For example, to retrieve the HTML for text that should be emphasized and
     * displayed as a placeholder inside a sentence, call
     * Drupal.theme('placeholder', text).
     *
     * @param func
     *   The name of the theme function to call.
     * @param ...
     *   Additional arguments to pass along to the theme function.
     * @return
     *   Any data the theme function returns. This could be a plain HTML string,
     *   but also a complex object.
     */
    Drupal.theme = function (func) {
        var args = Array.prototype.slice.apply(arguments, [1]);

        return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
    };

    /**
     * Freeze the current body height (as minimum height). Used to prevent
     * unnecessary upwards scrolling when doing DOM manipulations.
     */
    Drupal.freezeHeight = function () {
        Drupal.unfreezeHeight();
        $('<div id="freeze-height"></div>').css({
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '1px',
            height: $('body').css('height')
        }).appendTo('body');
    };

    /**
     * Unfreeze the body height.
     */
    Drupal.unfreezeHeight = function () {
        $('#freeze-height').remove();
    };

    /**
     * Encodes a Drupal path for use in a URL.
     *
     * For aesthetic reasons slashes are not escaped.
     */
    Drupal.encodePath = function (item, uri) {
        uri = uri || location.href;
        return encodeURIComponent(item).replace(/%2F/g, '/');
    };

    /**
     * Get the text selection in a textarea.
     */
    Drupal.getSelection = function (element) {
        if (typeof element.selectionStart != 'number' && document.selection) {
            // The current selection.
            var range1 = document.selection.createRange();
            var range2 = range1.duplicate();
            // Select all text.
            range2.moveToElementText(element);
            // Now move 'dummy' end point to end point of original range.
            range2.setEndPoint('EndToEnd', range1);
            // Now we can calculate start and end points.
            var start = range2.text.length - range1.text.length;
            var end = start + range1.text.length;
            return { 'start': start, 'end': end };
        }
        return { 'start': element.selectionStart, 'end': element.selectionEnd };
    };

    /**
     * Build an error message from an Ajax response.
     */
    Drupal.ajaxError = function (xmlhttp, uri) {
        var statusCode, statusText, pathText, responseText, readyStateText, message;
        if (xmlhttp.status) {
            statusCode = "\n" + Drupal.t("An AJAX HTTP error occurred.") +  "\n" + Drupal.t("HTTP Result Code: !status", {'!status': xmlhttp.status});
        }
        else {
            statusCode = "\n" + Drupal.t("An AJAX HTTP request terminated abnormally.");
        }
        statusCode += "\n" + Drupal.t("Debugging information follows.");
        pathText = "\n" + Drupal.t("Path: !uri", {'!uri': uri} );
        statusText = '';
        // In some cases, when statusCode == 0, xmlhttp.statusText may not be defined.
        // Unfortunately, testing for it with typeof, etc, doesn't seem to catch that
        // and the test causes an exception. So we need to catch the exception here.
        try {
            statusText = "\n" + Drupal.t("StatusText: !statusText", {'!statusText': $.trim(xmlhttp.statusText)});
        }
        catch (e) {}

        responseText = '';
        // Again, we don't have a way to know for sure whether accessing
        // xmlhttp.responseText is going to throw an exception. So we'll catch it.
        try {
            responseText = "\n" + Drupal.t("ResponseText: !responseText", {'!responseText': $.trim(xmlhttp.responseText) } );
        } catch (e) {}

        // Make the responseText more readable by stripping HTML tags and newlines.
        responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,"");
        responseText = responseText.replace(/[\n]+\s+/g,"\n");

        // We don't need readyState except for status == 0.
        readyStateText = xmlhttp.status == 0 ? ("\n" + Drupal.t("ReadyState: !readyState", {'!readyState': xmlhttp.readyState})) : "";

        message = statusCode + pathText + statusText + responseText + readyStateText;
        return message;
    };

// Class indicating that JS is enabled; used for styling purpose.
    $('html').addClass('js');

// 'js enabled' cookie.
    document.cookie = 'has_js=1; path=/';

    /**
     * Additions to jQuery.support.
     */
    $(function () {
        /**
         * Boolean indicating whether or not position:fixed is supported.
         */
        if (jQuery.support.positionFixed === undefined) {
            var el = $('<div style="position:fixed; top:10px" />').appendTo(document.body);
            jQuery.support.positionFixed = el[0].offsetTop === 10;
            el.remove();
        }
    });

//Attach all behaviors.
    $(function () {
        Drupal.attachBehaviors(document, Drupal.settings);
    });

    /**
     * The default themes.
     */
    Drupal.theme.prototype = {

        /**
         * Formats text for emphasized display in a placeholder inside a sentence.
         *
         * @param str
         *   The text to format (plain-text).
         * @return
         *   The formatted text (html).
         */
        placeholder: function (str) {
            return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
        }
    };

})(jQuery);
;
jQuery.effects||function(f,j){function n(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
    16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return o.transparent;return o[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return n(b)}function p(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
    a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function q(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
    a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function m(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
    "borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=n(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var o={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
    0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
    211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},r=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   d){if(f.isFunction(b)){d=b;b=null}return this.each(function(){f.queue(this,"fx",function(){var e=f(this),g=e.attr("style")||" ",h=q(p.call(this)),l,v=e.attr("className");f.each(r,function(w,i){c[i]&&e[i+"Class"](c[i])});l=q(p.call(this));e.attr("className",v);e.animate(u(h,l),a,b,function(){f.each(r,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments)});h=f.queue(this);l=
    h.splice(h.length-1,1)[0];h.splice(1,0,l);f.dequeue(this)})})};f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},
    b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.7",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";
    return a},getBaseline:function(c,a){var b;switch(c[0]){case "top":b=0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",
    background:"transparent",border:"none",margin:0,padding:0});c.wrap(b);b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(d,e){a[e]=c.css(e);if(isNaN(parseInt(a[e],10)))a[e]="auto"});c.css({position:"relative",top:0,left:0})}return b.css(a).show()},removeWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent().replaceWith(c);
    return c},setTransition:function(c,a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});return d.call(this,b)},_show:f.fn.show,show:function(c){if(m(c))return this._show.apply(this,arguments);
else{var a=k.apply(this,arguments);a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(m(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(m(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),
    b=[];f.each(["em","px","%","pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==
    e)return b+d;if((a/=e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=
    g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/
    h);if(a<1)return-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        a,b,d,e){return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;

/**
 * Cookie plugin 1.0
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
;

/*!
 * jQuery Form Plugin
 * version: 2.52 (07-DEC-2010)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function(b){function q(){if(b.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log)window.console.log(a);else window.opera&&window.opera.postError&&window.opera.postError(a)}}b.fn.ajaxSubmit=function(a){function f(){function t(){var o=i.attr("target"),m=i.attr("action");l.setAttribute("target",u);l.getAttribute("method")!="POST"&&l.setAttribute("method","POST");l.getAttribute("action")!=e.url&&l.setAttribute("action",e.url);e.skipEncodingOverride|| i.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});e.timeout&&setTimeout(function(){F=true;s()},e.timeout);var v=[];try{if(e.extraData)for(var w in e.extraData)v.push(b('<input type="hidden" name="'+w+'" value="'+e.extraData[w]+'" />').appendTo(l)[0]);r.appendTo("body");r.data("form-plugin-onload",s);l.submit()}finally{l.setAttribute("action",m);o?l.setAttribute("target",o):i.removeAttr("target");b(v).remove()}}function s(){if(!G){r.removeData("form-plugin-onload");var o=true; try{if(F)throw"timeout";p=x.contentWindow?x.contentWindow.document:x.contentDocument?x.contentDocument:x.document;var m=e.dataType=="xml"||p.XMLDocument||b.isXMLDoc(p);q("isXml="+m);if(!m&&window.opera&&(p.body==null||p.body.innerHTML==""))if(--K){q("requeing onLoad callback, DOM not available");setTimeout(s,250);return}G=true;j.responseText=p.documentElement?p.documentElement.innerHTML:null;j.responseXML=p.XMLDocument?p.XMLDocument:p;j.getResponseHeader=function(L){return{"content-type":e.dataType}[L]}; var v=/(json|script)/.test(e.dataType);if(v||e.textarea){var w=p.getElementsByTagName("textarea")[0];if(w)j.responseText=w.value;else if(v){var H=p.getElementsByTagName("pre")[0],I=p.getElementsByTagName("body")[0];if(H)j.responseText=H.textContent;else if(I)j.responseText=I.innerHTML}}else if(e.dataType=="xml"&&!j.responseXML&&j.responseText!=null)j.responseXML=C(j.responseText);J=b.httpData(j,e.dataType)}catch(D){q("error caught:",D);o=false;j.error=D;b.handleError(e,j,"error",D)}if(j.aborted){q("upload aborted"); o=false}if(o){e.success.call(e.context,J,"success",j);y&&b.event.trigger("ajaxSuccess",[j,e])}y&&b.event.trigger("ajaxComplete",[j,e]);y&&!--b.active&&b.event.trigger("ajaxStop");if(e.complete)e.complete.call(e.context,j,o?"success":"error");setTimeout(function(){r.removeData("form-plugin-onload");r.remove();j.responseXML=null},100)}}function C(o,m){if(window.ActiveXObject){m=new ActiveXObject("Microsoft.XMLDOM");m.async="false";m.loadXML(o)}else m=(new DOMParser).parseFromString(o,"text/xml");return m&& m.documentElement&&m.documentElement.tagName!="parsererror"?m:null}var l=i[0];if(b(":input[name=submit],:input[id=submit]",l).length)alert('Error: Form elements must not have name or id of "submit".');else{var e=b.extend(true,{},b.ajaxSettings,a);e.context=e.context||e;var u="jqFormIO"+(new Date).getTime(),E="_"+u;window[E]=function(){var o=r.data("form-plugin-onload");if(o){o();window[E]=undefined;try{delete window[E]}catch(m){}}};var r=b('<iframe id="'+u+'" name="'+u+'" src="'+e.iframeSrc+'" onload="window[\'_\'+this.id]()" />'), x=r[0];r.css({position:"absolute",top:"-1000px",left:"-1000px"});var j={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=1;r.attr("src",e.iframeSrc)}},y=e.global;y&&!b.active++&&b.event.trigger("ajaxStart");y&&b.event.trigger("ajaxSend",[j,e]);if(e.beforeSend&&e.beforeSend.call(e.context,j,e)===false)e.global&&b.active--;else if(!j.aborted){var G=false, F=0,z=l.clk;if(z){var A=z.name;if(A&&!z.disabled){e.extraData=e.extraData||{};e.extraData[A]=z.value;if(z.type=="image"){e.extraData[A+".x"]=l.clk_x;e.extraData[A+".y"]=l.clk_y}}}e.forceSync?t():setTimeout(t,10);var J,p,K=50}}}if(!this.length){q("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof a=="function")a={success:a};var d=this.attr("action");if(d=typeof d==="string"?b.trim(d):"")d=(d.match(/^([^#]+)/)||[])[1];d=d||window.location.href||"";a=b.extend(true,{url:d, type:this.attr("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);d={};this.trigger("form-pre-serialize",[this,a,d]);if(d.veto){q("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(a.beforeSerialize&&a.beforeSerialize(this,a)===false){q("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var c,h,g=this.formToArray(a.semantic);if(a.data){a.extraData=a.data;for(c in a.data)if(a.data[c]instanceof Array)for(var k in a.data[c])g.push({name:c, value:a.data[c][k]});else{h=a.data[c];h=b.isFunction(h)?h():h;g.push({name:c,value:h})}}if(a.beforeSubmit&&a.beforeSubmit(g,this,a)===false){q("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[g,this,a,d]);if(d.veto){q("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}c=b.param(g);if(a.type.toUpperCase()=="GET"){a.url+=(a.url.indexOf("?")>=0?"&":"?")+c;a.data=null}else a.data=c;var i=this,n=[];a.resetForm&&n.push(function(){i.resetForm()}); a.clearForm&&n.push(function(){i.clearForm()});if(!a.dataType&&a.target){var B=a.success||function(){};n.push(function(t){var s=a.replaceTarget?"replaceWith":"html";b(a.target)[s](t).each(B,arguments)})}else a.success&&n.push(a.success);a.success=function(t,s,C){for(var l=a.context||a,e=0,u=n.length;e<u;e++)n[e].apply(l,[t,s,C||i,i])};c=b("input:file",this).length>0;k=i.attr("enctype")=="multipart/form-data"||i.attr("encoding")=="multipart/form-data";if(a.iframe!==false&&(c||a.iframe||k))a.closeKeepAlive? b.get(a.closeKeepAlive,f):f();else b.ajax(a);this.trigger("form-submit-notify",[this,a]);return this};b.fn.ajaxForm=function(a){if(this.length===0){var f={s:this.selector,c:this.context};if(!b.isReady&&f.s){q("DOM not ready, queuing ajaxForm");b(function(){b(f.s,f.c).ajaxForm(a)});return this}q("terminating; zero elements found by selector"+(b.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(d){if(!d.isDefaultPrevented()){d.preventDefault(); b(this).ajaxSubmit(a)}}).bind("click.form-plugin",function(d){var c=d.target,h=b(c);if(!h.is(":submit,input:image")){c=h.closest(":submit");if(c.length==0)return;c=c[0]}var g=this;g.clk=c;if(c.type=="image")if(d.offsetX!=undefined){g.clk_x=d.offsetX;g.clk_y=d.offsetY}else if(typeof b.fn.offset=="function"){h=h.offset();g.clk_x=d.pageX-h.left;g.clk_y=d.pageY-h.top}else{g.clk_x=d.pageX-c.offsetLeft;g.clk_y=d.pageY-c.offsetTop}setTimeout(function(){g.clk=g.clk_x=g.clk_y=null},100)})};b.fn.ajaxFormUnbind= function(){return this.unbind("submit.form-plugin click.form-plugin")};b.fn.formToArray=function(a){var f=[];if(this.length===0)return f;var d=this[0],c=a?d.getElementsByTagName("*"):d.elements;if(!c)return f;var h,g,k,i,n,B;h=0;for(n=c.length;h<n;h++){g=c[h];if(k=g.name)if(a&&d.clk&&g.type=="image"){if(!g.disabled&&d.clk==g){f.push({name:k,value:b(g).val()});f.push({name:k+".x",value:d.clk_x},{name:k+".y",value:d.clk_y})}}else if((i=b.fieldValue(g,true))&&i.constructor==Array){g=0;for(B=i.length;g< B;g++)f.push({name:k,value:i[g]})}else i!==null&&typeof i!="undefined"&&f.push({name:k,value:i})}if(!a&&d.clk){a=b(d.clk);c=a[0];if((k=c.name)&&!c.disabled&&c.type=="image"){f.push({name:k,value:a.val()});f.push({name:k+".x",value:d.clk_x},{name:k+".y",value:d.clk_y})}}return f};b.fn.formSerialize=function(a){return b.param(this.formToArray(a))};b.fn.fieldSerialize=function(a){var f=[];this.each(function(){var d=this.name;if(d){var c=b.fieldValue(this,a);if(c&&c.constructor==Array)for(var h=0,g=c.length;h< g;h++)f.push({name:d,value:c[h]});else c!==null&&typeof c!="undefined"&&f.push({name:this.name,value:c})}});return b.param(f)};b.fn.fieldValue=function(a){for(var f=[],d=0,c=this.length;d<c;d++){var h=b.fieldValue(this[d],a);h===null||typeof h=="undefined"||h.constructor==Array&&!h.length||(h.constructor==Array?b.merge(f,h):f.push(h))}return f};b.fieldValue=function(a,f){var d=a.name,c=a.type,h=a.tagName.toLowerCase();if(f===undefined)f=true;if(f&&(!d||a.disabled||c=="reset"||c=="button"||(c=="checkbox"|| c=="radio")&&!a.checked||(c=="submit"||c=="image")&&a.form&&a.form.clk!=a||h=="select"&&a.selectedIndex==-1))return null;if(h=="select"){var g=a.selectedIndex;if(g<0)return null;d=[];h=a.options;var k=(c=c=="select-one")?g+1:h.length;for(g=c?g:0;g<k;g++){var i=h[g];if(i.selected){var n=i.value;n||(n=i.attributes&&i.attributes.value&&!i.attributes.value.specified?i.text:i.value);if(c)return n;d.push(n)}}return d}return b(a).val()};b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea", this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var a=this.type,f=this.tagName.toLowerCase();if(a=="text"||a=="password"||f=="textarea")this.value="";else if(a=="checkbox"||a=="radio")this.checked=false;else if(f=="select")this.selectedIndex=-1})};b.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||typeof this.reset=="object"&&!this.reset.nodeType)this.reset()})};b.fn.enable=function(a){if(a===undefined)a=true;return this.each(function(){this.disabled= !a})};b.fn.selected=function(a){if(a===undefined)a=true;return this.each(function(){var f=this.type;if(f=="checkbox"||f=="radio")this.checked=a;else if(this.tagName.toLowerCase()=="option"){f=b(this).parent("select");a&&f[0]&&f[0].type=="select-one"&&f.find("option").selected(false);this.selected=a}})}})(jQuery);;
(function ($) {

    /**
     * Provides Ajax page updating via jQuery $.ajax (Asynchronous JavaScript and XML).
     *
     * Ajax is a method of making a request via JavaScript while viewing an HTML
     * page. The request returns an array of commands encoded in JSON, which is
     * then executed to make any changes that are necessary to the page.
     *
     * Drupal uses this file to enhance form elements with #ajax['path'] and
     * #ajax['wrapper'] properties. If set, this file will automatically be included
     * to provide Ajax capabilities.
     */

    Drupal.ajax = Drupal.ajax || {};

    /**
     * Attaches the Ajax behavior to each Ajax form element.
     */
    Drupal.behaviors.AJAX = {
        attach: function (context, settings) {
            // Load all Ajax behaviors specified in the settings.
            for (var base in settings.ajax) {
                if (!$('#' + base + '.ajax-processed').length) {
                    var element_settings = settings.ajax[base];

                    if (typeof element_settings.selector == 'undefined') {
                        element_settings.selector = '#' + base;
                    }
                    $(element_settings.selector).each(function () {
                        element_settings.element = this;
                        Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
                    });

                    $('#' + base).addClass('ajax-processed');
                }
            }

            // Bind Ajax behaviors to all items showing the class.
            $('.use-ajax:not(.ajax-processed)').addClass('ajax-processed').each(function () {
                var element_settings = {};
                // Clicked links look better with the throbber than the progress bar.
                element_settings.progress = { 'type': 'throbber' };

                // For anchor tags, these will go to the target of the anchor rather
                // than the usual location.
                if ($(this).attr('href')) {
                    element_settings.url = $(this).attr('href');
                    element_settings.event = 'click';
                }
                var base = $(this).attr('id');
                Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
            });

            // This class means to submit the form to the action using Ajax.
            $('.use-ajax-submit:not(.ajax-processed)').addClass('ajax-processed').each(function () {
                var element_settings = {};

                // Ajax submits specified in this manner automatically submit to the
                // normal form action.
                element_settings.url = $(this.form).attr('action');
                // Form submit button clicks need to tell the form what was clicked so
                // it gets passed in the POST request.
                element_settings.setClick = true;
                // Form buttons use the 'click' event rather than mousedown.
                element_settings.event = 'click';
                // Clicked form buttons look better with the throbber than the progress bar.
                element_settings.progress = { 'type': 'throbber' };

                var base = $(this).attr('id');
                Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
            });
        }
    };

    /**
     * Ajax object.
     *
     * All Ajax objects on a page are accessible through the global Drupal.ajax
     * object and are keyed by the submit button's ID. You can access them from
     * your module's JavaScript file to override properties or functions.
     *
     * For example, if your Ajax enabled button has the ID 'edit-submit', you can
     * redefine the function that is called to insert the new content like this
     * (inside a Drupal.behaviors attach block):
     * @code
     *    Drupal.behaviors.myCustomAJAXStuff = {
 *      attach: function (context, settings) {
 *        Drupal.ajax['edit-submit'].commands.insert = function (ajax, response, status) {
 *          new_content = $(response.data);
 *          $('#my-wrapper').append(new_content);
 *          alert('New content was appended to #my-wrapper');
 *        }
 *      }
 *    };
     * @endcode
     */
    Drupal.ajax = function (base, element, element_settings) {
        var defaults = {
            url: 'system/ajax',
            event: 'mousedown',
            keypress: true,
            selector: '#' + base,
            effect: 'none',
            speed: 'none',
            method: 'replaceWith',
            progress: {
                type: 'throbber',
                message: Drupal.t('Please wait...')
            },
            submit: {
                'js': true
            }
        };

        $.extend(this, defaults, element_settings);

        this.element = element;
        this.element_settings = element_settings;

        // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
        // the server detect when it needs to degrade gracefully.
        // There are five scenarios to check for:
        // 1. /nojs/
        // 2. /nojs$ - The end of a URL string.
        // 3. /nojs? - Followed by a query (with clean URLs enabled).
        //      E.g.: path/nojs?destination=foobar
        // 4. /nojs& - Followed by a query (without clean URLs enabled).
        //      E.g.: ?q=path/nojs&destination=foobar
        // 5. /nojs# - Followed by a fragment.
        //      E.g.: path/nojs#myfragment
        this.url = element_settings.url.replace(/\/nojs(\/|$|\?|&|#)/g, '/ajax$1');
        this.wrapper = '#' + element_settings.wrapper;

        // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
        // bind Ajax to links as well.
        if (this.element.form) {
            this.form = $(this.element.form);
        }

        // Set the options for the ajaxSubmit function.
        // The 'this' variable will not persist inside of the options object.
        var ajax = this;
        ajax.options = {
            url: ajax.url,
            data: ajax.submit,
            beforeSerialize: function (element_settings, options) {
                return ajax.beforeSerialize(element_settings, options);
            },
            beforeSubmit: function (form_values, element_settings, options) {
                ajax.ajaxing = true;
                return ajax.beforeSubmit(form_values, element_settings, options);
            },
            beforeSend: function (xmlhttprequest, options) {
                ajax.ajaxing = true;
                return ajax.beforeSend(xmlhttprequest, options);
            },
            success: function (response, status) {
                // Sanity check for browser support (object expected).
                // When using iFrame uploads, responses must be returned as a string.
                if (typeof response == 'string') {
                    response = $.parseJSON(response);
                }
                return ajax.success(response, status);
            },
            complete: function (response, status) {
                ajax.ajaxing = false;
                if (status == 'error' || status == 'parsererror') {
                    return ajax.error(response, ajax.url);
                }
            },
            dataType: 'json',
            type: 'POST'
        };

        // Bind the ajaxSubmit function to the element event.
        $(ajax.element).bind(element_settings.event, function (event) {
            return ajax.eventResponse(this, event);
        });

        // If necessary, enable keyboard submission so that Ajax behaviors
        // can be triggered through keyboard input as well as e.g. a mousedown
        // action.
        if (element_settings.keypress) {
            $(ajax.element).keypress(function (event) {
                return ajax.keypressResponse(this, event);
            });
        }

        // If necessary, prevent the browser default action of an additional event.
        // For example, prevent the browser default action of a click, even if the
        // AJAX behavior binds to mousedown.
        if (element_settings.prevent) {
            $(ajax.element).bind(element_settings.prevent, false);
        }
    };

    /**
     * Handle a key press.
     *
     * The Ajax object will, if instructed, bind to a key press response. This
     * will test to see if the key press is valid to trigger this event and
     * if it is, trigger it for us and prevent other keypresses from triggering.
     * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
     * and 32. RETURN is often used to submit a form when in a textfield, and
     * SPACE is often used to activate an element without submitting.
     */
    Drupal.ajax.prototype.keypressResponse = function (element, event) {
        // Create a synonym for this to reduce code confusion.
        var ajax = this;

        // Detect enter key and space bar and allow the standard response for them,
        // except for form elements of type 'text' and 'textarea', where the
        // spacebar activation causes inappropriate activation if #ajax['keypress'] is
        // TRUE. On a text-type widget a space should always be a space.
        if (event.which == 13 || (event.which == 32 && element.type != 'text' && element.type != 'textarea')) {
            $(ajax.element_settings.element).trigger(ajax.element_settings.event);
            return false;
        }
    };

    /**
     * Handle an event that triggers an Ajax response.
     *
     * When an event that triggers an Ajax response happens, this method will
     * perform the actual Ajax call. It is bound to the event using
     * bind() in the constructor, and it uses the options specified on the
     * ajax object.
     */
    Drupal.ajax.prototype.eventResponse = function (element, event) {
        // Create a synonym for this to reduce code confusion.
        var ajax = this;

        // Do not perform another ajax command if one is already in progress.
        if (ajax.ajaxing) {
            return false;
        }

        try {
            if (ajax.form) {
                // If setClick is set, we must set this to ensure that the button's
                // value is passed.
                if (ajax.setClick) {
                    // Mark the clicked button. 'form.clk' is a special variable for
                    // ajaxSubmit that tells the system which element got clicked to
                    // trigger the submit. Without it there would be no 'op' or
                    // equivalent.
                    element.form.clk = element;
                }

                ajax.form.ajaxSubmit(ajax.options);
            }
            else {
                ajax.beforeSerialize(ajax.element, ajax.options);
                $.ajax(ajax.options);
            }
        }
        catch (e) {
            // Unset the ajax.ajaxing flag here because it won't be unset during
            // the complete response.
            ajax.ajaxing = false;
            alert("An error occurred while attempting to process " + ajax.options.url + ": " + e.message);
        }

        // For radio/checkbox, allow the default event. On IE, this means letting
        // it actually check the box.
        if (typeof element.type != 'undefined' && (element.type == 'checkbox' || element.type == 'radio')) {
            return true;
        }
        else {
            return false;
        }

    };

    /**
     * Handler for the form serialization.
     *
     * Runs before the beforeSend() handler (see below), and unlike that one, runs
     * before field data is collected.
     */
    Drupal.ajax.prototype.beforeSerialize = function (element, options) {
        // Allow detaching behaviors to update field values before collecting them.
        // This is only needed when field values are added to the POST data, so only
        // when there is a form such that this.form.ajaxSubmit() is used instead of
        // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
        // isn't called, but don't rely on that: explicitly check this.form.
        if (this.form) {
            var settings = this.settings || Drupal.settings;
            Drupal.detachBehaviors(this.form, settings, 'serialize');
        }

        // Prevent duplicate HTML ids in the returned markup.
        // @see drupal_html_id()
        options.data['ajax_html_ids[]'] = [];
        $('[id]').each(function () {
            options.data['ajax_html_ids[]'].push(this.id);
        });

        // Allow Drupal to return new JavaScript and CSS files to load without
        // returning the ones already loaded.
        // @see ajax_base_page_theme()
        // @see drupal_get_css()
        // @see drupal_get_js()
        options.data['ajax_page_state[theme]'] = Drupal.settings.ajaxPageState.theme;
        options.data['ajax_page_state[theme_token]'] = Drupal.settings.ajaxPageState.theme_token;
        for (var key in Drupal.settings.ajaxPageState.css) {
            options.data['ajax_page_state[css][' + key + ']'] = 1;
        }
        for (var key in Drupal.settings.ajaxPageState.js) {
            options.data['ajax_page_state[js][' + key + ']'] = 1;
        }
    };

    /**
     * Modify form values prior to form submission.
     */
    Drupal.ajax.prototype.beforeSubmit = function (form_values, element, options) {
        // This function is left empty to make it simple to override for modules
        // that wish to add functionality here.
    };

    /**
     * Prepare the Ajax request before it is sent.
     */
    Drupal.ajax.prototype.beforeSend = function (xmlhttprequest, options) {
        // For forms without file inputs, the jQuery Form plugin serializes the form
        // values, and then calls jQuery's $.ajax() function, which invokes this
        // handler. In this circumstance, options.extraData is never used. For forms
        // with file inputs, the jQuery Form plugin uses the browser's normal form
        // submission mechanism, but captures the response in a hidden IFRAME. In this
        // circumstance, it calls this handler first, and then appends hidden fields
        // to the form to submit the values in options.extraData. There is no simple
        // way to know which submission mechanism will be used, so we add to extraData
        // regardless, and allow it to be ignored in the former case.
        if (this.form) {
            options.extraData = options.extraData || {};

            // Let the server know when the IFRAME submission mechanism is used. The
            // server can use this information to wrap the JSON response in a TEXTAREA,
            // as per http://jquery.malsup.com/form/#file-upload.
            options.extraData.ajax_iframe_upload = '1';

            // The triggering element is about to be disabled (see below), but if it
            // contains a value (e.g., a checkbox, textfield, select, etc.), ensure that
            // value is included in the submission. As per above, submissions that use
            // $.ajax() are already serialized prior to the element being disabled, so
            // this is only needed for IFRAME submissions.
            var v = $.fieldValue(this.element);
            if (v !== null) {
                options.extraData[this.element.name] = v;
            }
        }

        // Disable the element that received the change to prevent user interface
        // interaction while the Ajax request is in progress. ajax.ajaxing prevents
        // the element from triggering a new request, but does not prevent the user
        // from changing its value.
        $(this.element).addClass('progress-disabled').attr('disabled', true);

        // Insert progressbar or throbber.
        if (this.progress.type == 'bar') {
            var progressBar = new Drupal.progressBar('ajax-progress-' + this.element.id, eval(this.progress.update_callback), this.progress.method, eval(this.progress.error_callback));
            if (this.progress.message) {
                progressBar.setProgress(-1, this.progress.message);
            }
            if (this.progress.url) {
                progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
            }
            this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
            this.progress.object = progressBar;
            $(this.element).after(this.progress.element);
        }
        else if (this.progress.type == 'throbber') {
            this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
            if (this.progress.message) {
                $('.throbber', this.progress.element).after('<div class="message">' + this.progress.message + '</div>');
            }
            $(this.element).after(this.progress.element);
        }
    };

    /**
     * Handler for the form redirection completion.
     */
    Drupal.ajax.prototype.success = function (response, status) {
        // Remove the progress element.
        if (this.progress.element) {
            $(this.progress.element).remove();
        }
        if (this.progress.object) {
            this.progress.object.stopMonitoring();
        }
        $(this.element).removeClass('progress-disabled').removeAttr('disabled');

        Drupal.freezeHeight();

        for (var i in response) {
            if (response.hasOwnProperty(i) && response[i]['command'] && this.commands[response[i]['command']]) {
                this.commands[response[i]['command']](this, response[i], status);
            }
        }

        // Reattach behaviors, if they were detached in beforeSerialize(). The
        // attachBehaviors() called on the new content from processing the response
        // commands is not sufficient, because behaviors from the entire form need
        // to be reattached.
        if (this.form) {
            var settings = this.settings || Drupal.settings;
            Drupal.attachBehaviors(this.form, settings);
        }

        Drupal.unfreezeHeight();

        // Remove any response-specific settings so they don't get used on the next
        // call by mistake.
        this.settings = null;
    };

    /**
     * Build an effect object which tells us how to apply the effect when adding new HTML.
     */
    Drupal.ajax.prototype.getEffect = function (response) {
        var type = response.effect || this.effect;
        var speed = response.speed || this.speed;

        var effect = {};
        if (type == 'none') {
            effect.showEffect = 'show';
            effect.hideEffect = 'hide';
            effect.showSpeed = '';
        }
        else if (type == 'fade') {
            effect.showEffect = 'fadeIn';
            effect.hideEffect = 'fadeOut';
            effect.showSpeed = speed;
        }
        else {
            effect.showEffect = type + 'Toggle';
            effect.hideEffect = type + 'Toggle';
            effect.showSpeed = speed;
        }

        return effect;
    };

    /**
     * Handler for the form redirection error.
     */
    Drupal.ajax.prototype.error = function (response, uri) {
        alert(Drupal.ajaxError(response, uri));
        // Remove the progress element.
        if (this.progress.element) {
            $(this.progress.element).remove();
        }
        if (this.progress.object) {
            this.progress.object.stopMonitoring();
        }
        // Undo hide.
        $(this.wrapper).show();
        // Re-enable the element.
        $(this.element).removeClass('progress-disabled').removeAttr('disabled');
        // Reattach behaviors, if they were detached in beforeSerialize().
        if (this.form) {
            var settings = response.settings || this.settings || Drupal.settings;
            Drupal.attachBehaviors(this.form, settings);
        }
    };

    /**
     * Provide a series of commands that the server can request the client perform.
     */
    Drupal.ajax.prototype.commands = {
        /**
         * Command to insert new content into the DOM.
         */
        insert: function (ajax, response, status) {
            // Get information from the response. If it is not there, default to
            // our presets.
            var wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
            var method = response.method || ajax.method;
            var effect = ajax.getEffect(response);

            // We don't know what response.data contains: it might be a string of text
            // without HTML, so don't rely on jQuery correctly iterpreting
            // $(response.data) as new HTML rather than a CSS selector. Also, if
            // response.data contains top-level text nodes, they get lost with either
            // $(response.data) or $('<div></div>').replaceWith(response.data).
            var new_content_wrapped = $('<div></div>').html(response.data);
            var new_content = new_content_wrapped.contents();

            // For legacy reasons, the effects processing code assumes that new_content
            // consists of a single top-level element. Also, it has not been
            // sufficiently tested whether attachBehaviors() can be successfully called
            // with a context object that includes top-level text nodes. However, to
            // give developers full control of the HTML appearing in the page, and to
            // enable Ajax content to be inserted in places where DIV elements are not
            // allowed (e.g., within TABLE, TR, and SPAN parents), we check if the new
            // content satisfies the requirement of a single top-level element, and
            // only use the container DIV created above when it doesn't. For more
            // information, please see http://drupal.org/node/736066.
            if (new_content.length != 1 || new_content.get(0).nodeType != 1) {
                new_content = new_content_wrapped;
            }

            // If removing content from the wrapper, detach behaviors first.
            switch (method) {
                case 'html':
                case 'replaceWith':
                case 'replaceAll':
                case 'empty':
                case 'remove':
                    var settings = response.settings || ajax.settings || Drupal.settings;
                    Drupal.detachBehaviors(wrapper, settings);
            }

            // Add the new content to the page.
            wrapper[method](new_content);

            // Immediately hide the new content if we're using any effects.
            if (effect.showEffect != 'show') {
                new_content.hide();
            }

            // Determine which effect to use and what content will receive the
            // effect, then show the new content.
            if ($('.ajax-new-content', new_content).length > 0) {
                $('.ajax-new-content', new_content).hide();
                new_content.show();
                $('.ajax-new-content', new_content)[effect.showEffect](effect.showSpeed);
            }
            else if (effect.showEffect != 'show') {
                new_content[effect.showEffect](effect.showSpeed);
            }

            // Attach all JavaScript behaviors to the new content, if it was successfully
            // added to the page, this if statement allows #ajax['wrapper'] to be
            // optional.
            if (new_content.parents('html').length > 0) {
                // Apply any settings from the returned JSON if available.
                var settings = response.settings || ajax.settings || Drupal.settings;
                Drupal.attachBehaviors(new_content, settings);
            }
        },

        /**
         * Command to remove a chunk from the page.
         */
        remove: function (ajax, response, status) {
            var settings = response.settings || ajax.settings || Drupal.settings;
            Drupal.detachBehaviors($(response.selector), settings);
            $(response.selector).remove();
        },

        /**
         * Command to mark a chunk changed.
         */
        changed: function (ajax, response, status) {
            if (!$(response.selector).hasClass('ajax-changed')) {
                $(response.selector).addClass('ajax-changed');
                if (response.asterisk) {
                    $(response.selector).find(response.asterisk).append(' <span class="ajax-changed">*</span> ');
                }
            }
        },

        /**
         * Command to provide an alert.
         */
        alert: function (ajax, response, status) {
            alert(response.text, response.title);
        },

        /**
         * Command to provide the jQuery css() function.
         */
        css: function (ajax, response, status) {
            $(response.selector).css(response.argument);
        },

        /**
         * Command to set the settings that will be used for other commands in this response.
         */
        settings: function (ajax, response, status) {
            if (response.merge) {
                $.extend(true, Drupal.settings, response.settings);
            }
            else {
                ajax.settings = response.settings;
            }
        },

        /**
         * Command to attach data using jQuery's data API.
         */
        data: function (ajax, response, status) {
            $(response.selector).data(response.name, response.value);
        },

        /**
         * Command to apply a jQuery method.
         */
        invoke: function (ajax, response, status) {
            var $element = $(response.selector);
            $element[response.method].apply($element, response.arguments);
        },

        /**
         * Command to restripe a table.
         */
        restripe: function (ajax, response, status) {
            // :even and :odd are reversed because jQuery counts from 0 and
            // we count from 1, so we're out of sync.
            // Match immediate children of the parent element to allow nesting.
            $('> tbody > tr:visible, > tr:visible', $(response.selector))
                .removeClass('odd even')
                .filter(':even').addClass('odd').end()
                .filter(':odd').addClass('even');
        }
    };

})(jQuery);
;
/**
 * sasson javascript core
 *
 */
(function($) {

    Drupal.sasson = {};

    /**
     * This script will watch files for changes and
     * automatically refresh the browser when a file is modified.
     */
    Drupal.sasson.watch = function(url, instant) {

        var request;
        var dateModified;

        // Check the last time the file was modified
        request = $.ajax({
            type: "HEAD",
            url: url,
            success: function () {
                dateModified = request.getResponseHeader("Last-Modified");
                interval = setInterval(check,1000);
            }
        });

        var updateStyle = function(filename) {
            var headElm = $("head > *:contains('" + filename + ".css')");
            if (headElm.length > 0) {
                // If it's in an @import rule
                headElm.html(headElm.html().replace(filename + '.css?', filename + '.css?s'));
            } else {
                // If it's in a <link> tag
                headElm = $('head > link[href*="' + filename + '.css"]');
                headElm.attr('href', headElm.attr('href').replace(filename + '.css?', filename + '.css?s'));
            }
        };

        // Check every second if the timestamp was modified
        var check = function() {
            request = $.ajax({
                type: "HEAD",
                url: url,
                success: function () {
                    if (dateModified != (dateModified = request.getResponseHeader("Last-Modified"))) {
                        var filename = url.split('/');
                        filename = filename[filename.length - 1].split('.');
                        var fileExt = filename[1];
                        filename = filename[0];
                        if (instant && fileExt == 'css') {
                            // css file - update head
                            updateStyle(filename);
                        } else if (instant && (fileExt == 'scss' || fileExt == 'sass')) {
                            // SASS/SCSS file - trigger sass compilation with an ajax call and update head
                            $.ajax({
                                url: "",
                                success: function () {
                                    updateStyle(filename);
                                }
                            });
                        } else {
                            // Reload the page
                            location.reload();
                        }
                    }
                }
            });
        };
    };

    Drupal.behaviors.sasson = {
        attach: function(context) {

            $('html').removeClass('no-js');

        }
    };

    Drupal.behaviors.showOverlay = {
        attach: function(context) {

            $('body.show-overlay').each(function() {
                var body = $(this);
                var overlay = $('<div id="overlay"><img src="'+ Drupal.settings.sasson['overlay_url'] +'"/></div>');
                var overlayToggle = $('<div class="toggle-overlay" ><div>' + Drupal.t('Overlay') + '</div></div>');
                body.append(overlay);
                body.append(overlayToggle);
                $("#overlay").css({ opacity: Drupal.settings.sasson['overlay_opacity'] });
                $('.toggle-overlay').click(function() {
                    $('body').toggleClass('show-overlay');
                    $('#overlay').toggle();
                    $(this).toggleClass("off");
                });
                $("#overlay").draggable();
            });

        }
    };

    Drupal.behaviors.showGrid = {
        attach: function(context) {

            $('body.show-grid').each(function() {
                var body = $(this);
                var gridToggle = $('<div class="toggle-grid" ><div>' + Drupal.t('Grid') + '</div></div>');
                body.append(gridToggle);
                $('.toggle-grid').click(function() {
                    $('body').toggleClass('show-grid');
                    $(this).toggleClass("off");
                });
            });

        }
    };

})(jQuery);


// Console.log wrapper to avoid errors when firebug is not present
// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function() {
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push(arguments);
    if (this.console) {
        console.log(Array.prototype.slice.call(arguments));
    }
};
;
/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);;
/*!

 Copyright (c) 2011 Peter van der Spek

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */(function(a){function m(){if(!d){d=!0;for(var c in b)a(c).each(function(){var d,e;d=a(this),e=d.data("jqae"),(e.containerWidth!=d.width()||e.containerHeight!=d.height())&&f(d,b[c])});d=!1}}function l(a){b[a]&&(delete b[a],b.length||c&&(window.clearInterval(c),c=undefined))}function k(a,d){b[a]=d,c||(c=window.setInterval(function(){m()},200))}function j(){return this.nodeType===3}function i(b){if(b.contents().length){var c=b.contents(),d=c.eq(c.length-1);if(d.filter(j).length){var e=d.get(0).nodeValue;e=a.trim(e);if(e==""){d.remove();return!0}return!1}while(i(d));if(d.contents().length)return!1;d.remove();return!0}return!1}function h(a){if(a.contents().length){var b=a.contents(),c=b.eq(b.length-1);return c.filter(j).length?c:h(c)}a.append("");var b=a.contents();return b.eq(b.length-1)}function g(b){var c=h(b);if(c.length){var d=c.get(0).nodeValue,e=d.lastIndexOf(" ");e>-1?(d=a.trim(d.substring(0,e)),c.get(0).nodeValue=d):c.get(0).nodeValue="";return!0}return!1}function f(b,c){var d=b.data("jqae");d||(d={});var e=d.wrapperElement;e||(e=b.wrapInner("<div/>").find(">div"),e.css({margin:0,padding:0,border:0}));var f=e.data("jqae");f||(f={});var j=f.originalContent;j?e=f.originalContent.clone(!0).data("jqae",{originalContent:j}).replaceAll(e):e.data("jqae",{originalContent:e.clone(!0)}),b.data("jqae",{wrapperElement:e,containerWidth:b.width(),containerHeight:b.height()});var k=b.height(),l=(parseInt(b.css("padding-top"),10)||0)+(parseInt(b.css("border-top-width"),10)||0)-(e.offset().top-b.offset().top),m=!1,n=e;c.selector&&(n=a(e.find(c.selector).get().reverse())),n.each(function(){var b=a(this),d=b.text(),f=!1;if(e.innerHeight()-b.innerHeight()>k+l)b.remove();else{i(b);if(b.contents().length){m&&(h(b).get(0).nodeValue+=c.ellipsis,m=!1);while(e.innerHeight()>k+l){f=g(b);if(!f){m=!0,b.remove();break}i(b);if(b.contents().length)h(b).get(0).nodeValue+=c.ellipsis;else{m=!0,b.remove();break}}c.setTitle=="onEllipsis"&&f||c.setTitle=="always"?b.attr("title",d):c.setTitle!="never"&&b.removeAttr("title")}}})}var b={},c,d=!1,e={ellipsis:"...",setTitle:"never",live:!1};a.fn.ellipsis=function(b,c){var d,g;d=a(this),typeof b!="string"&&(c=b,b=undefined),g=a.extend({},e,c),g.selector=b,d.each(function(){var b=a(this);f(b,g)}),g.live?k(d.selector,g):l(d.selector);return this}})(jQuery);
/*
 * ##### Sasson - advanced drupal theming. #####
 *
 * Tikal scripts.
 *
 */

(function($) {

    /*------------------------------------------  General --------------------------------------------*/

    //Menu target
    Drupal.behaviors.externalMenu = {
        attach: function (context, settings) {
            $("a[href^='http']").each(function(){ $(this).attr('target','_blank'); });
        }
    };

    // Ellipsis
    Drupal.behaviors.tikalEllipsis = {
        attach: function (context, settings) {
            $('.view-our-team .about').each(function(){	$(this).ellipsis();	});
            $('.user-profile-filed-about').each(function(){	$(this).ellipsis(); });
            $('#block-views-offering-domains .views-field-title').each(function(){ $(this).ellipsis(); });
            $('.highlight .line').each(function(){ $(this).ellipsis(); });
        }
    };

    // Show Captcha
    Drupal.behaviors.tikalShowCaptcha= {
        attach: function (context, settings) {
            var is_empty = false, captcha_hide;
            $('form').each(function(){
                var form = $(this);
                $('.form-text, textarea',form).focus(function(){
                    clearInterval(captcha_hide);
                    $('.captcha',form).slideDown("slow");
                    is_empty = false;
                });
                $('.form-text, textarea',form).focusout(function(){
                    if($('.form-text[value!=""]',form).length == 0 && $('textarea[value!=""]',form).length == 0)
                        is_empty = true;
                    else{
                        is_empty = true;
                        $('.form-text[value!=""]',form).each(function(){
                            if($(this).val() != $(this).attr('placeholder'))
                                is_empty = false;
                        });
                    }
                    if( is_empty){
                        captcha_hide = setInterval(function(){ $('.captcha',form).slideUp("slow");},500);
                    }
                });
            });
        }
    };

    // Placeholder for IE7 and IE8
    Drupal.behaviors.tikalPlaceholder= {
        attach: function (context, settings) {
            $('input[placeholder]').each(function(){
                var input = $(this);
                $(input).val(input.attr('placeholder'));
                $(input).focus(function(){
                    if (input.val() == input.attr('placeholder'))
                        input.val('');
                });
                $(input).blur(function(){
                    if (input.val() == '' || input.val() == input.attr('placeholder'))
                        input.val(input.attr('placeholder'));
                });
            });
            $('.form-submit').click(function(){
                var input = $(this);
                if(input.attr('placeholder') == input.val()) input.val() = '';
            });
        }
    };


    // Menu Scroll To
    Drupal.behaviors.tikalScrollTo = {
        attach: function (context, settings) {
            $("#sidebar-first ul.menu li").click(function (e) {
                if(!($("body").hasClass("node-type-offering") || $("body").hasClass("node-type-job"))){
                    e.preventDefault();
                }
                var href = $(this).find('a').attr('href');
                path = href.substring(href.indexOf('#'));
                $(window).scrollTo(path, 800);
            });
            $(".comments-link-in-page").click(function (e) {
                e.preventDefault();
                var href = $(this).attr('href');
                path = href.substring(href.indexOf('#'));
                $(window).scrollTo(path, 800);
            });

            var fixScrollTo = 0;
            $("#sidebar-second ul.menu li").click(function (e) {
                if(!($("body").hasClass("node-type-offering") || $("body").hasClass("node-type-job"))){
                    e.preventDefault();
                }
                var href = $(this).find('a').attr('href');
                path = '.' + href.substring(href.indexOf('#') + 1);
                fixScrollTo =  $(path).offset().top + (-60);
                $(window).scrollTo(fixScrollTo , 800);
            });
        }
    };

    /*------------------------------------------  Articles --------------------------------------------*/

    //Load more articles
    Drupal.behaviors.tikalLoadMore= {
        attach: function (context, settings) {
            if($('.view-article .pager-current').hasClass('first')){
                $(".view-article .pager").css({"display" : 'none'});
                var pagerNext ="<a class='load-more' href='" + $(".view-article .pager-next a").attr('href') + "'> Load more </a>";
                $(".view-article .item-list").html(pagerNext);
                $(".view-article .item-list").ellipsis();
            }
        }
    };

    // Facebook Comments Count
    Drupal.behaviors.facebookCommentsCount = {
        attach: function (context, settings) {
            var count_comments;
            ////--- node Comments-Count ---/////
            //function nodeCommentsCount()
            function nodeCommentsCount() {
                $.ajax({ url: 'http://graph.facebook.com/'+ window.location, dataType: 'jsonp', success: function(data) {
                    console.log(data);
                    count_comments = data.comments;//data.shares;
                    if(count_comments >= 0 || count_comments < 0){
                        $('.comments-link-in-page .count').html(Number($('.comments-link-in-page .count').attr('drupalCount')) + Number(count_comments));
                    }
                }
                });
            }
            //load page
            if($('body').hasClass('node-type-article')){
                $('.comments-link-in-page .count').attr('drupalCount' ,$('.comments-link-in-page .count').html());
                nodeCommentsCount();
                //timer
                window.setInterval(nodeCommentsCount, 30000);
            }
            ////--- viewRows Comments-Count ---/////
            var node_url = '';
            var all_rows = $('.view-id-article .views-row');
            for (i = 0; i < all_rows.length; i++) {
                node_url = 'http://' + window.location.hostname + $(all_rows[i]).find('.views-field-title a').attr('href');
                $.ajax({ url: 'http://graph.facebook.com/'+ node_url, dataType: 'jsonp', success: function(data) {
                    console.log(data);
                    count_comments = data.comments;//data.shares;
                    if(count_comments >= 0 || count_comments < 0)
                        insertCount(data.id,count_comments);
                }});
            }
            // insertCount
            function insertCount(node_url,count){
                node_url = node_url.replace(window.location.protocol+'//'+window.location.hostname,"");
                row = $('.view-id-article .views-row a.comments').filter('[href="'+node_url+'#comments"]');
                console.log(row);
                $(row).find('.count-comment').html(Number($(row).find('.count-comment').html()) + Number(count));
            }
        }
    };

    /*------------------------------------------  Events --------------------------------------------*/

    //ajax Load more events
    Drupal.behaviors.tikalLoadMoreEvents= {
        attach: function (context, settings) {
            var ofsetEvents = 0;
            var startEvents = 3;
            var addEvents = 3;
            var countEvents = 0;

            $.getJSON('events/0/' + startEvents , function(data) {
                $("#events-from-meetup").append(data.moreEvents);
                ofsetEvents = data.ofset; countEvents = data.count;
            });
            $("#load-more-events").click(function(){
                if(countEvents <= ofsetEvents + addEvents){
                    addEvents  = countEvents - ofsetEvents; $("#load-more-events").remove();
                }
                $.getJSON('events/' + ofsetEvents + '/'+ addEvents, function(data) {
                    $("#events-from-meetup").append(data.moreEvents);
                    ofsetEvents = data.ofset; countEvents = data.count; console.log(data);
                });
            });
            $("html").bind("ajaxStart", function(){
                $(this).css({"cursor" : "wait"}); }).bind("ajaxStop", function(){ $(this).css({"cursor" : "auto"});
                });
            $("#load-more-events").bind("ajaxStart", function(){
                $(this).css({"cursor" : "wait"}); }).bind("ajaxStop", function(){ $(this).css({"cursor" : "pointer"});
                });
        }
    };

    // Slide down More Upcoming Events
    Drupal.behaviors.tikalMoreUpcomingEvents = {
        attach: function (context, settings) {
            $(".event-more-upcoming-events").click(function () {
                if ($(".more-events").is(":hidden")) $(".more-events").slideDown(800);
                else $(".more-events").slideUp(800);
            });
        }
    };

    // Display events upcoming or past
    Drupal.behaviors.tikalDisplayEventsUpcomingOrPast = {
        attach: function (context, settings) {
            if($(".button-upcoming").hasClass("active")) $(".events-upcoming").css({"display" : 'block'});
            else $(".events-past").css({"display" : 'block'});
            $(".switch-events").click(function () {
                if ($(this).hasClass("button-upcoming")){
                    $(this).addClass("active"); $(".events-upcoming").css({"display" : 'block'});
                    $(".button-past").removeClass("active"); $(".events-past").css({"display" : 'none'});
                }
                else{
                    $(this).addClass("active"); $(".events-past").css({"display" : 'block'});
                    $(".button-upcoming").removeClass("active"); $(".events-upcoming").css({"display" : 'none'});
                }
            });
        }
    };

    /*-------------------------------  Slide down / carousel -----------------------------------*/

    // Slide down  our-values
    Drupal.behaviors.tikalOpenMenu = {
        attach: function (context, settings) {
            $("#our-core-values .field-first, #our-values .field-first, .views-field-field-fields-in-our-core-values .field-first, .views-field-field-our-values .field-first").click(function () {
                    if ($(this).next().is(":hidden")){ $(this).next().slideDown("slow");}
                    else{ $(this).next().slideUp("slow");}}
            );
        }
    };

    // Scroll items
    Drupal.behaviors.tikalScrollItems = {
        attach: function (context, settings) {
            var jumpItems = 2;
            var countItems = 1;
            var numItems= $(".carousel-vertical .views-row").length;

            if($("body").hasClass("node-type-job")){
                jumpItems = 3;
            }
            if(numItems > jumpItems)
                $(".carousel-vertical .jcarousel-next").addClass("jcarousel-has-next");

            $(".carousel-vertical .jcarousel-next").click(function (){
                if(jumpItems + countItems < numItems) {
                    countItems += jumpItems;
                    $(".view-content-limit").scrollTo(".views-row-" + countItems,800);
                    if(!$(".carousel-vertical .jcarousel-prev").hasClass("jcarousel-has-prev"))
                        $(".carousel-vertical .jcarousel-prev").addClass("jcarousel-has-prev");
                }
                else{
                    countItems = numItems;
                    $(".view-content-limit").scrollTo(".views-row-" + numItems,800);
                }
                if(countItems == numItems){
                    $(this).removeClass("jcarousel-has-next");
                }
            });
            $(".carousel-vertical .jcarousel-prev").click(function (){
                if(countItems - jumpItems < numItems && countItems - jumpItems > 0) {
                    countItems -= jumpItems;
                    $(".view-content-limit").scrollTo(".views-row-" + countItems,800);
                    if(!$(".carousel-vertical .jcarousel-next").hasClass("jcarousel-has-next"))
                        $(".carousel-vertical .jcarousel-next").addClass("jcarousel-has-next");
                }
                else{
                    countItems = 1;
                    $(".view-content-limit").scrollTo(".views-row-" + countItems,800);
                }
                if(countItems == 1){
                    $(this).removeClass("jcarousel-has-prev");
                }
            });
        }
    };

})(jQuery);

;
/*
 * Downloaded from http://www.tikalk.com/sites/default/files/js/js_nCQKhabtBFC3f3KwRZ7Erw9W0fbKqfY-atbn6zW4n1w.js, 2013-11-20 13:41
 */

(function ($) {
    Drupal.behaviors.backtotop = {
        attach: function(context) {
            var exist= jQuery('#backtotop').length;
            if(exist == 0) {
                $("body").append("<div id='backtotop'>"+Drupal.t("Back to Top")+"</div>");
            }
            $(window).scroll(function() {
                if($(this).scrollTop() > Drupal.settings.back_to_top.back_to_top_button_trigger) {
                    $('#backtotop').fadeIn();
                } else {
                    $('#backtotop').fadeOut();
                }
            });

            $('#backtotop').click(function() {
                $('body,html').animate({scrollTop:0},1200,'easeOutQuart');
            });
        }
    };
})(jQuery);;
(function($) {

    /**
     * jQuery debugging helper.
     *
     * Invented for Dreditor.
     *
     * @usage
     *   $.debug(var [, name]);
     *   $variable.debug( [name] );
     */
    jQuery.extend({
        debug: function () {
            // Setup debug storage in global window. We want to look into it.
            window.debug = window.debug || [];

            args = jQuery.makeArray(arguments);
            // Determine data source; this is an object for $variable.debug().
            // Also determine the identifier to store data with.
            if (typeof this == 'object') {
                var name = (args.length ? args[0] : window.debug.length);
                var data = this;
            }
            else {
                var name = (args.length > 1 ? args.pop() : window.debug.length);
                var data = args[0];
            }
            // Store data.
            window.debug[name] = data;
            // Dump data into Firebug console.
            if (typeof console != 'undefined') {
                console.log(name, data);
            }
            return this;
        }
    });
// @todo Is this the right way?
    jQuery.fn.debug = jQuery.debug;

})(jQuery);
;
/*
 * Downloaded from http://www.tikalk.com/sites/default/files/js/js_65SgCtb7LXBiyMmSf5_Q3trrTwvSA58RSb0cigCdZYM.js, 2013-11-20 13:41
 */

// ColorBox v1.3.20.2 - jQuery lightbox plugin
// (c) 2012 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
(function(a,b,c){function Z(c,d,e){var g=b.createElement(c);return d&&(g.id=f+d),e&&(g.style.cssText=e),a(g)}function $(a){var b=y.length,c=(Q+a)%b;return 0>c?b+c:c}function _(a,b){return Math.round((/%/.test(a)?("x"===b?z.width():z.height())/100:1)*parseInt(a,10))}function ab(a){return K.photo||/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i.test(a)}function bb(){var b,c=a.data(P,e);null==c?(K=a.extend({},d),console&&console.log&&console.log("Error: cboxElement missing settings object")):K=a.extend({},c);for(b in K)a.isFunction(K[b])&&"on"!==b.slice(0,2)&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||a(P).data("rel")||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,"string"==typeof K.href&&(K.href=a.trim(K.href))}function cb(b,c){a.event.trigger(b),c&&c.call(P)}function db(){var a,d,e,b=f+"Slideshow_",c="click."+f;K.slideshow&&y[1]?(d=function(){F.html(K.slideshowStop).unbind(c).bind(j,function(){(K.loop||y[Q+1])&&(a=setTimeout(W.next,K.slideshowSpeed))}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(W.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.html(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,function(){W.next(),d()}),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function eb(b){U||(P=b,bb(),y=a(P),Q=0,"nofollow"!==K.rel&&(y=a("."+g).filter(function(){var c,b=a.data(this,e);return b&&(c=a(this).data("rel")||b.rel||this.rel),c===K.rel}),Q=y.index(P),-1===Q&&(y=y.add(P),Q=y.length-1)),S||(S=T=!0,r.show(),K.returnFocus&&a(P).blur().one(l,function(){a(this).focus()}),q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=_(K.initialWidth,"x"),K.h=_(K.initialHeight,"y"),W.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),cb(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()),W.load(!0))}function fb(){!r&&b.body&&(Y=!1,z=a(c),r=Z(X).attr({id:e,"class":n?f+(o?"IE6":"IE"):""}).hide(),q=Z(X,"Overlay",o?"position:absolute":"").hide(),C=Z(X,"LoadingOverlay").add(Z(X,"LoadingGraphic")),s=Z(X,"Wrapper"),t=Z(X,"Content").append(A=Z(X,"LoadedContent","width:0; height:0; overflow:hidden"),D=Z(X,"Title"),E=Z(X,"Current"),G=Z(X,"Next"),H=Z(X,"Previous"),F=Z(X,"Slideshow").bind(h,db),I=Z(X,"Close")),s.append(Z(X).append(Z(X,"TopLeft"),u=Z(X,"TopCenter"),Z(X,"TopRight")),Z(X,!1,"clear:left").append(v=Z(X,"MiddleLeft"),t,w=Z(X,"MiddleRight")),Z(X,!1,"clear:left").append(Z(X,"BottomLeft"),x=Z(X,"BottomCenter"),Z(X,"BottomRight"))).find("div div").css({"float":"left"}),B=Z(X,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),J=G.add(H).add(E).add(F),a(b.body).append(q,r.append(s,B)))}function gb(){return r?(Y||(Y=!0,L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}),G.click(function(){W.next()}),H.click(function(){W.prev()}),I.click(function(){W.close()}),q.click(function(){K.overlayClose&&W.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&27===b&&(a.preventDefault(),W.close()),S&&K.arrowKey&&y[1]&&(37===b?(a.preventDefault(),H.click()):39===b&&(a.preventDefault(),G.click()))}),a(b).delegate("."+g,"click",function(a){a.which>1||a.shiftKey||a.altKey||a.metaKey||(a.preventDefault(),eb(this))})),!0):!1}var q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,Y,d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=!a.support.opacity&&!a.support.style,o=n&&!c.XMLHttpRequest,p=f+"_IE6",X="div";a.colorbox||(a(fb),W=a.fn[e]=a[e]=function(b,c){var f=this;if(b=b||{},fb(),gb()){if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b))}).addClass(g),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&eb(f[0])}return f},W.position=function(a,b){function j(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var c,h,i,d=0,e=0,g=r.offset();z.unbind("resize."+f),r.css({top:-9e4,left:-9e4}),h=z.scrollTop(),i=z.scrollLeft(),K.fixed&&!o?(g.top-=h,g.left-=i,r.css({position:"fixed"})):(d=h,e=i,r.css({position:"absolute"})),e+=K.right!==!1?Math.max(z.width()-K.w-O-M-_(K.right,"x"),0):K.left!==!1?_(K.left,"x"):Math.round(Math.max(z.width()-K.w-O-M,0)/2),d+=K.bottom!==!1?Math.max(z.height()-K.h-N-L-_(K.bottom,"y"),0):K.top!==!1?_(K.top,"y"):Math.round(Math.max(z.height()-K.h-N-L,0)/2),r.css({top:g.top,left:g.left}),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",c={width:K.w+O,height:K.h+N,top:d,left:e},0===a&&r.css(c),r.dequeue().animate(c,{duration:a,complete:function(){j(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",K.reposition&&setTimeout(function(){z.bind("resize."+f,W.position)},1),b&&b()},step:function(){j(this)}})},W.resize=function(a){S&&(a=a||{},a.width&&(K.w=_(a.width,"x")-O-M),a.innerWidth&&(K.w=_(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=_(a.height,"y")-N-L),a.innerHeight&&(K.h=_(a.innerHeight,"y")),a.innerHeight||a.height||(A.css({height:"auto"}),K.h=A.height()),A.css({height:K.h}),W.position("none"===K.transition?0:K.speed))},W.prep=function(b){function g(){return K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function h(){return K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(S){var c,d="none"===K.transition?0:K.speed;A.remove(),A=Z(X,"LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return"hidden"!==this.style.visibility}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function s(){n&&r[0].style.removeAttribute("filter")}var b,c,h,l,o,p,q,g=y.length,i="frameBorder",k="allowTransparency";if(S){if(l=function(){clearTimeout(V),C.detach().hide(),cb(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show(),g>1){if("string"==typeof K.current&&E.html(K.current.replace("{current}",Q+1).replace("{total}",g)).show(),G[K.loop||g-1>Q?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),K.slideshow&&F.show(),K.preloading)for(b=[$(-1),$(1)];c=y[b.pop()];)q=a.data(c,e),q&&q.href?(o=q.href,a.isFunction(o)&&(o=o.call(c))):o=c.href,ab(o)&&(p=new Image,p.src=o)}else J.hide();K.iframe?(h=Z("iframe")[0],i in h&&(h[i]=0),k in h&&(h[k]="true"),K.scrolling||(h.scrolling="no"),a(h).attr({src:K.href,name:(new Date).getTime(),"class":f+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",l).one(m,function(){h.src="//about:blank"}).appendTo(A),K.fastIframe&&a(h).trigger("load")):l(),"fade"===K.transition?r.fadeTo(d,1,s):s()}},"fade"===K.transition?r.fadeTo(d,0,function(){W.position(0,c)}):W.position(d,c)}},W.load=function(b){var c,d,e=W.prep;T=!0,R=!1,P=y[Q],b||bb(),cb(m),cb(i,K.onLoad),K.h=K.height?_(K.height,"y")-N-L:K.innerHeight&&_(K.innerHeight,"y"),K.w=K.width?_(K.width,"x")-O-M:K.innerWidth&&_(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=_(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=_(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,V=setTimeout(function(){C.show().appendTo(t)},100),K.inline?(Z(X).hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):ab(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Z(X,"Error").html(K.imgError))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(K.loop||y[Q+1])&&(R.style.cursor="pointer",R.onclick=function(){W.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c){e("error"===c?Z(X,"Error").html(K.xhrError):a(this).contents())})},W.next=function(){!T&&y[1]&&(K.loop||y[Q+1])&&(Q=$(1),W.load())},W.prev=function(){!T&&y[1]&&(K.loop||Q)&&(Q=$(-1),W.load())},W.close=function(){S&&!U&&(U=!0,S=!1,cb(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),cb(m),A.remove(),setTimeout(function(){U=!1,cb(l,K.onClosed)},1)}))},W.remove=function(){a([]).add(r).add(q).remove(),r=null,a("."+g).removeData(e).removeClass(g),a(b).undelegate("."+g)},W.element=function(){return a(P)},W.settings=d)})(jQuery,document,window);;
(function ($) {

    Drupal.behaviors.initColorbox = {
        attach: function (context, settings) {
            if (!$.isFunction($.colorbox)) {
                return;
            }
            $('a, area, input', context)
                .filter('.colorbox')
                .once('init-colorbox')
                .colorbox(settings.colorbox);
        }
    };

    {
        $(document).bind('cbox_complete', function () {
            Drupal.attachBehaviors('#cboxLoadedContent');
        });
    }

})(jQuery);
;
(function ($) {

    Drupal.behaviors.initColorboxPlainStyle = {
        attach: function (context, settings) {
            $(document).bind('cbox_complete', function () {
                // Make all the controls invisible.
                $('#cboxCurrent, #cboxSlideshow, #cboxPrevious, #cboxNext', context).addClass('element-invisible');
                // Replace "Close" with "×" and show.
                $('#cboxClose', context).html('\327').addClass('cbox-close-plain');
                // Hide empty title.
                if ($('#cboxTitle:empty', context).length == true) {
                    $('#cboxTitle', context).hide();
                }
                $('#cboxLoadedContent', context).bind('mouseover', function () {
                    $('#cboxClose', context).animate({opacity: 1}, {queue: false, duration: "fast"});
                    if ($('#cboxTitle:empty', context).length == false) {
                        $('#cboxTitle', context).slideDown();
                    }
                });
                $('#cboxOverlay', context).bind('mouseover', function () {
                    $('#cboxClose', context).animate({opacity: 0}, {queue: false, duration: "fast"});
                    if ($('#cboxTitle:empty', context).length == false) {
                        $('#cboxTitle', context).slideUp();
                    }
                });
            });
            $(document).bind('cbox_closed', function () {
                $('#cboxClose', context).removeClass('cbox-close-plain');
            });
        }
    };

})(jQuery);
;
(function ($) {

    Drupal.behaviors.initColorboxLoad = {
        attach: function (context, settings) {
            if (!$.isFunction($.colorbox)) {
                return;
            }
            $.urlParams = function (url) {
                var p = {},
                    e,
                    a = /\+/g,  // Regex for replacing addition symbol with a space
                    r = /([^&=]+)=?([^&]*)/g,
                    d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
                    q = url.split('?');
                while (e = r.exec(q[1])) {
                    e[1] = d(e[1]);
                    e[2] = d(e[2]);
                    switch (e[2].toLowerCase()) {
                        case 'true':
                        case 'yes':
                            e[2] = true;
                            break;
                        case 'false':
                        case 'no':
                            e[2] = false;
                            break;
                    }
                    if (e[1] == 'width') { e[1] = 'innerWidth'; }
                    if (e[1] == 'height') { e[1] = 'innerHeight'; }
                    p[e[1]] = e[2];
                }
                return p;
            };
            $('a, area, input', context)
                .filter('.colorbox-load')
                .once('init-colorbox-load', function () {
                    var params = $.urlParams($(this).attr('href'));
                    $(this).colorbox($.extend({}, settings.colorbox, params));
                });
        }
    };

})(jQuery);
;
(function ($) {

    Drupal.behaviors.initColorboxInline = {
        attach: function (context, settings) {
            if (!$.isFunction($.colorbox)) {
                return;
            }
            $.urlParam = function(name, url){
                if (name == 'fragment') {
                    var results = new RegExp('(#[^&#]*)').exec(url);
                }
                else {
                    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
                }
                if (!results) { return ''; }
                return results[1] || '';
            };
            $('a, area, input', context).filter('.colorbox-inline').once('init-colorbox-inline').colorbox({
                transition:settings.colorbox.transition,
                speed:settings.colorbox.speed,
                opacity:settings.colorbox.opacity,
                slideshow:settings.colorbox.slideshow,
                slideshowAuto:settings.colorbox.slideshowAuto,
                slideshowSpeed:settings.colorbox.slideshowSpeed,
                slideshowStart:settings.colorbox.slideshowStart,
                slideshowStop:settings.colorbox.slideshowStop,
                current:settings.colorbox.current,
                previous:settings.colorbox.previous,
                next:settings.colorbox.next,
                close:settings.colorbox.close,
                overlayClose:settings.colorbox.overlayClose,
                maxWidth:settings.colorbox.maxWidth,
                maxHeight:settings.colorbox.maxHeight,
                innerWidth:function(){
                    return $.urlParam('width', $(this).attr('href'));
                },
                innerHeight:function(){
                    return $.urlParam('height', $(this).attr('href'));
                },
                title:function(){
                    return decodeURIComponent($.urlParam('title', $(this).attr('href')));
                },
                iframe:function(){
                    return $.urlParam('iframe', $(this).attr('href'));
                },
                inline:function(){
                    return $.urlParam('inline', $(this).attr('href'));
                },
                href:function(){
                    return $.urlParam('fragment', $(this).attr('href'));
                }
            });
        }
    };

})(jQuery);
;
(function ($) {
    Drupal.viewsSlideshow = Drupal.viewsSlideshow || {};

    /**
     * Views Slideshow Controls
     */
    Drupal.viewsSlideshowControls = Drupal.viewsSlideshowControls || {};

    /**
     * Implement the play hook for controls.
     */
    Drupal.viewsSlideshowControls.play = function (options) {
        // Route the control call to the correct control type.
        // Need to use try catch so we don't have to check to make sure every part
        // of the object is defined.
        try {
            if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play == 'function') {
                Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play(options);
            }
        }
        catch(err) {
            // Don't need to do anything on error.
        }

        try {
            if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play == 'function') {
                Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options);
            }
        }
        catch(err) {
            // Don't need to do anything on error.
        }
    };

    /**
     * Implement the pause hook for controls.
     */
    Drupal.viewsSlideshowControls.pause = function (options) {
        // Route the control call to the correct control type.
        // Need to use try catch so we don't have to check to make sure every part
        // of the object is defined.
        try {
            if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause == 'function') {
                Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause(options);
            }
        }
        catch(err) {
            // Don't need to do anything on error.
        }

        try {
            if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause == 'function') {
                Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options);
            }
        }
        catch(err) {
            // Don't need to do anything on error.
        }
    };


    /**
     * Views Slideshow Text Controls
     */

        // Add views slieshow api calls for views slideshow text controls.
    Drupal.behaviors.viewsSlideshowControlsText = {
        attach: function (context) {

            // Process previous link
            $('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)', context).addClass('views-slideshow-controls-text-previous-processed').each(function() {
                var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_previous_', '');
                $(this).click(function() {
                    Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": uniqueID });
                    return false;
                });
            });

            // Process next link
            $('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)', context).addClass('views-slideshow-controls-text-next-processed').each(function() {
                var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_next_', '');
                $(this).click(function() {
                    Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": uniqueID });
                    return false;
                });
            });

            // Process pause link
            $('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)', context).addClass('views-slideshow-controls-text-pause-processed').each(function() {
                var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_pause_', '');
                $(this).click(function() {
                    if (Drupal.settings.viewsSlideshow[uniqueID].paused) {
                        Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID, "force": true });
                    }
                    else {
                        Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID, "force": true });
                    }
                    return false;
                });
            });
        }
    };

    Drupal.viewsSlideshowControlsText = Drupal.viewsSlideshowControlsText || {};

    /**
     * Implement the pause hook for text controls.
     */
    Drupal.viewsSlideshowControlsText.pause = function (options) {
        var pauseText = Drupal.theme.prototype['viewsSlideshowControlsPause'] ? Drupal.theme('viewsSlideshowControlsPause') : '';
        $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(pauseText);
    };

    /**
     * Implement the play hook for text controls.
     */
    Drupal.viewsSlideshowControlsText.play = function (options) {
        var playText = Drupal.theme.prototype['viewsSlideshowControlsPlay'] ? Drupal.theme('viewsSlideshowControlsPlay') : '';
        $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(playText);
    };

    // Theme the resume control.
    Drupal.theme.prototype.viewsSlideshowControlsPause = function () {
        return Drupal.t('Resume');
    };

    // Theme the pause control.
    Drupal.theme.prototype.viewsSlideshowControlsPlay = function () {
        return Drupal.t('Pause');
    };

    /**
     * Views Slideshow Pager
     */
    Drupal.viewsSlideshowPager = Drupal.viewsSlideshowPager || {};

    /**
     * Implement the transitionBegin hook for pagers.
     */
    Drupal.viewsSlideshowPager.transitionBegin = function (options) {
        // Route the pager call to the correct pager type.
        // Need to use try catch so we don't have to check to make sure every part
        // of the object is defined.
        try {
            if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin == 'function') {
                Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options);
            }
        }
        catch(err) {
            // Don't need to do anything on error.
        }

        try {
            if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin == 'function') {
                Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options);
            }
        }
        catch(err) {
            // Don't need to do anything on error.
        }
    };

    /**
     * Implement the goToSlide hook for pagers.
     */
    Drupal.viewsSlideshowPager.goToSlide = function (options) {
        // Route the pager call to the correct pager type.
        // Need to use try catch so we don't have to check to make sure every part
        // of the object is defined.
        try {
            if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide == 'function') {
                Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options);
            }
        }
        catch(err) {
            // Don't need to do anything on error.
        }

        try {
            if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide == 'function') {
                Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options);
            }
        }
        catch(err) {
            // Don't need to do anything on error.
        }
    };

    /**
     * Implement the previousSlide hook for pagers.
     */
    Drupal.viewsSlideshowPager.previousSlide = function (options) {
        // Route the pager call to the correct pager type.
        // Need to use try catch so we don't have to check to make sure every part
        // of the object is defined.
        try {
            if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide == 'function') {
                Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options);
            }
        }
        catch(err) {
            // Don't need to do anything on error.
        }

        try {
            if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide == 'function') {
                Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options);
            }
        }
        catch(err) {
            // Don't need to do anything on error.
        }
    };

    /**
     * Implement the nextSlide hook for pagers.
     */
    Drupal.viewsSlideshowPager.nextSlide = function (options) {
        // Route the pager call to the correct pager type.
        // Need to use try catch so we don't have to check to make sure every part
        // of the object is defined.
        try {
            if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide == 'function') {
                Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options);
            }
        }
        catch(err) {
            // Don't need to do anything on error.
        }

        try {
            if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide == 'function') {
                Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options);
            }
        }
        catch(err) {
            // Don't need to do anything on error.
        }
    };


    /**
     * Views Slideshow Pager Fields
     */

        // Add views slieshow api calls for views slideshow pager fields.
    Drupal.behaviors.viewsSlideshowPagerFields = {
        attach: function (context) {
            // Process pause on hover.
            $('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)', context).addClass('views-slideshow-pager-field-processed').each(function() {
                // Parse out the location and unique id from the full id.
                var pagerInfo = $(this).attr('id').split('_');
                var location = pagerInfo[2];
                pagerInfo.splice(0, 3);
                var uniqueID = pagerInfo.join('_');

                // Add the activate and pause on pager hover event to each pager item.
                if (Drupal.settings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover) {
                    $(this).children().each(function(index, pagerItem) {
                        var mouseIn = function() {
                            Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
                            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID });
                        }

                        var mouseOut = function() {
                            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID });
                        }

                        if (jQuery.fn.hoverIntent) {
                            $(pagerItem).hoverIntent(mouseIn, mouseOut);
                        }
                        else {
                            $(pagerItem).hover(mouseIn, mouseOut);
                        }

                    });
                }
                else {
                    $(this).children().each(function(index, pagerItem) {
                        $(pagerItem).click(function() {
                            Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
                        });
                    });
                }
            });
        }
    };

    Drupal.viewsSlideshowPagerFields = Drupal.viewsSlideshowPagerFields || {};

    /**
     * Implement the transitionBegin hook for pager fields pager.
     */
    Drupal.viewsSlideshowPagerFields.transitionBegin = function (options) {
        for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
            // Remove active class from pagers
            $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

            // Add active class to active pager.
            $('#views_slideshow_pager_field_item_'+ pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
        }

    };

    /**
     * Implement the goToSlide hook for pager fields pager.
     */
    Drupal.viewsSlideshowPagerFields.goToSlide = function (options) {
        for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
            // Remove active class from pagers
            $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

            // Add active class to active pager.
            $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
        }
    };

    /**
     * Implement the previousSlide hook for pager fields pager.
     */
    Drupal.viewsSlideshowPagerFields.previousSlide = function (options) {
        for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
            // Get the current active pager.
            var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');

            // If we are on the first pager then activate the last pager.
            // Otherwise activate the previous pager.
            if (pagerNum == 0) {
                pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length() - 1;
            }
            else {
                pagerNum--;
            }

            // Remove active class from pagers
            $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

            // Add active class to active pager.
            $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + pagerNum).addClass('active');
        }
    };

    /**
     * Implement the nextSlide hook for pager fields pager.
     */
    Drupal.viewsSlideshowPagerFields.nextSlide = function (options) {
        for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
            // Get the current active pager.
            var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');
            var totalPagers = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length();

            // If we are on the last pager then activate the first pager.
            // Otherwise activate the next pager.
            pagerNum++;
            if (pagerNum == totalPagers) {
                pagerNum = 0;
            }

            // Remove active class from pagers
            $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

            // Add active class to active pager.
            $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + slideNum).addClass('active');
        }
    };


    /**
     * Views Slideshow Slide Counter
     */

    Drupal.viewsSlideshowSlideCounter = Drupal.viewsSlideshowSlideCounter || {};

    /**
     * Implement the transitionBegin for the slide counter.
     */
    Drupal.viewsSlideshowSlideCounter.transitionBegin = function (options) {
        $('#views_slideshow_slide_counter_' + options.slideshowID + ' .num').text(options.slideNum + 1);
    };

    /**
     * This is used as a router to process actions for the slideshow.
     */
    Drupal.viewsSlideshow.action = function (options) {
        // Set default values for our return status.
        var status = {
            'value': true,
            'text': ''
        }

        // If an action isn't specified return false.
        if (typeof options.action == 'undefined' || options.action == '') {
            status.value = false;
            status.text =  Drupal.t('There was no action specified.');
            return error;
        }

        // If we are using pause or play switch paused state accordingly.
        if (options.action == 'pause') {
            Drupal.settings.viewsSlideshow[options.slideshowID].paused = 1;
            // If the calling method is forcing a pause then mark it as such.
            if (options.force) {
                Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 1;
            }
        }
        else if (options.action == 'play') {
            // If the slideshow isn't forced pause or we are forcing a play then play
            // the slideshow.
            // Otherwise return telling the calling method that it was forced paused.
            if (!Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce || options.force) {
                Drupal.settings.viewsSlideshow[options.slideshowID].paused = 0;
                Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 0;
            }
            else {
                status.value = false;
                status.text += ' ' + Drupal.t('This slideshow is forced paused.');
                return status;
            }
        }

        // We use a switch statement here mainly just to limit the type of actions
        // that are available.
        switch (options.action) {
            case "goToSlide":
            case "transitionBegin":
            case "transitionEnd":
                // The three methods above require a slide number. Checking if it is
                // defined and it is a number that is an integer.
                if (typeof options.slideNum == 'undefined' || typeof options.slideNum !== 'number' || parseInt(options.slideNum) != (options.slideNum - 0)) {
                    status.value = false;
                    status.text = Drupal.t('An invalid integer was specified for slideNum.');
                }
            case "pause":
            case "play":
            case "nextSlide":
            case "previousSlide":
                // Grab our list of methods.
                var methods = Drupal.settings.viewsSlideshow[options.slideshowID]['methods'];

                // if the calling method specified methods that shouldn't be called then
                // exclude calling them.
                var excludeMethodsObj = {};
                if (typeof options.excludeMethods !== 'undefined') {
                    // We need to turn the excludeMethods array into an object so we can use the in
                    // function.
                    for (var i=0; i < excludeMethods.length; i++) {
                        excludeMethodsObj[excludeMethods[i]] = '';
                    }
                }

                // Call every registered method and don't call excluded ones.
                for (i = 0; i < methods[options.action].length; i++) {
                    if (Drupal[methods[options.action][i]] != undefined && typeof Drupal[methods[options.action][i]][options.action] == 'function' && !(methods[options.action][i] in excludeMethodsObj)) {
                        Drupal[methods[options.action][i]][options.action](options);
                    }
                }
                break;

            // If it gets here it's because it's an invalid action.
            default:
                status.value = false;
                status.text = Drupal.t('An invalid action "!action" was specified.', { "!action": options.action });
        }
        return status;
    };
})(jQuery);
;
/**
 * JavaScript functions for front-end display of webform conditional components
 */
(function ($) {

    Drupal.behaviors.webform_conditional = Drupal.behaviors.webform_conditional || {};
    Drupal.behaviors.webform_conditional.attach = function() {
        // create quasi static var to save perfomance
        Drupal.webform_conditional.wrappers = new Object();
        Drupal.webform_conditional.components = new Object();
        $.each(Drupal.settings.webform_conditional.fields, function(triggerField_key, triggerField_info) {

            var formItemWrapper = Drupal.webform_conditional.getWrapper(triggerField_info);
            if(formItemWrapper.length > 0){
                // Add onclick handler to Parent field
                Drupal.webform_conditional.addOnChange (triggerField_key, triggerField_info);
            }
        });
        // after all added - trigger initial
        $.each(Drupal.settings.webform_conditional.fields, function(triggerField_key, triggerField_info) {
            var formItemWrapper = Drupal.webform_conditional.getWrapper(triggerField_info);
            if(formItemWrapper.length > 0){
                var field_name = Drupal.webform_conditional.escapeId(triggerField_key);
                var components = Drupal.webform_conditional.getComponentsByName(field_name);
                if(components.attr('type')=='radio' || components.attr('type')=='checkbox'){
                    $(components[0]).triggerHandler('click');
                }else{
                    components.triggerHandler('change');
                }
            }
        });
        return;
    };
    Drupal.webform_conditional = Drupal.webform_conditional || {};
// create quasi static var to save perfomance
    Drupal.webform_conditional.getWrapper = function(fieldInfo){
        if(Drupal.webform_conditional.wrappers[fieldInfo['css_id']]){
            return Drupal.webform_conditional.wrappers[fieldInfo['css_id']];
        }
        return Drupal.webform_conditional.wrappers[fieldInfo['css_id']] = $("#" + fieldInfo['css_id']);
    };
    Drupal.webform_conditional.addOnChange = function(triggerField_key, triggerField_info) {
        var monitor_field_name = Drupal.webform_conditional.escapeId(triggerField_key);
        var changeFunction = function() {

            Drupal.webform_conditional.setVisibility(triggerField_key,triggerField_info);
        };
        $.each(triggerField_info['dependent_fields'],function(dependent_field_key,dependent_field_info){
            var formItemWrapper = Drupal.webform_conditional.getWrapper(dependent_field_info);
            if(formItemWrapper.length > 0){
                formItemWrapper.css("display", "none");
            }

        });
        var components = Drupal.webform_conditional.getComponentsByName(monitor_field_name);
        if(components.attr('type')=='radio' || components.attr('type')=='checkbox'){
            components.click(changeFunction)
        }else{
            components.change(changeFunction);
        }

    };
    Drupal.webform_conditional.setVisibility = function(triggerField_key,triggerField_info,monitorField,monitorInfo){
        var monitor_field_name = Drupal.webform_conditional.escapeId(triggerField_key);
        var currentValues = Drupal.webform_conditional.getFieldValue(monitor_field_name);
        var monitor_visible = true;
        if(monitorField !== undefined){
            monitor_visible = Drupal.webform_conditional.getWrapper(monitorInfo).data('wfc_visible');
        }
        $.each(triggerField_info['dependent_fields'],function(dependentField,dependentInfo){
            if(((dependentInfo['operator'] == "=" && !Drupal.webform_conditional.Matches(currentValues,dependentInfo['monitor_field_value']))
                || (dependentInfo['operator'] == "!=" && Drupal.webform_conditional.Matches(currentValues,dependentInfo['monitor_field_value'])))
                || !monitor_visible){
                // show the hidden div
                // have to set wfc_visible so that you check the visibility of this
                // immediately
                Drupal.webform_conditional.getWrapper(dependentInfo).hide().data('wfc_visible',false);
            }else {
                // otherwise, hide it
                Drupal.webform_conditional.getWrapper(dependentInfo).show().data('wfc_visible',true);
                // and clear data (using different selector: want the
                // textarea to be selected, not the parent div)
            }
            Drupal.webform_conditional.TriggerDependents(dependentField,dependentInfo);
        });
    };
    Drupal.webform_conditional.getComponentsByName = function (field_name){
        // check to save jquery calls
        if(Drupal.webform_conditional.components[field_name]){
            return Drupal.webform_conditional.components[field_name];
        }
        // don't overwrite original name to store for caching
        var css_field_name = "[" + field_name + "]";
        var nid = Drupal.settings.webform_conditional.nid;
        if(nid instanceof Array){
            nid = Drupal.settings.webform_conditional.nid[0];
        }
        return Drupal.webform_conditional.components[field_name] = $("#webform-client-form-" + nid + " *[name*='"+css_field_name+"']");
    };
    Drupal.webform_conditional.TriggerDependents = function(monitorField,monitorInfo){
        $.each(Drupal.settings.webform_conditional.fields, function(triggerField_key, triggerField_info) {
            if(triggerField_key == monitorField){
                Drupal.webform_conditional.setVisibility(triggerField_key, triggerField_info,monitorField,monitorInfo);
            };
        });
    };
    Drupal.webform_conditional.getFieldValue = function(field_name){
        field_name = "[" + field_name + "]";
        var selected = [];
        var vals = [];
        if($('form input[name*="'+field_name+'"]:checked').length >= 1){
            selected =  $('form input[name*="'+field_name+'"]:checked');
        }else if($('form select[name*="'+field_name+'"] option:selected').length >= 1){
            selected = $('form select[name*="'+field_name+'"] option:selected');
        }
        if(selected.length == 0){
            return vals;
        }
        selected.each(function(i){
            vals[i] = $(this).val();
        });
        return vals;
    };
    Drupal.webform_conditional.Matches = function(currentValues,triggerValues){
        var found = false;
        $.each(triggerValues, function(index, value) {
            if(jQuery.inArray(value,currentValues)> -1){
                found = true;
                return false;
            }
        });
        return found;
    };
// Drupal.webform_conditional.escapeId
    Drupal.webform_conditional.escapeId = function(myid) {
        if (typeof myid == 'undefined') {
            return;
        }
        return  myid.replace(/(:|\.)/g,'\\$1');
    };
})(jQuery);;
(function ($) {

    /**
     * A progressbar object. Initialized with the given id. Must be inserted into
     * the DOM afterwards through progressBar.element.
     *
     * method is the function which will perform the HTTP request to get the
     * progress bar state. Either "GET" or "POST".
     *
     * e.g. pb = new progressBar('myProgressBar');
     *      some_element.appendChild(pb.element);
     */
    Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
        var pb = this;
        this.id = id;
        this.method = method || 'GET';
        this.updateCallback = updateCallback;
        this.errorCallback = errorCallback;

        // The WAI-ARIA setting aria-live="polite" will announce changes after users
        // have completed their current activity and not interrupt the screen reader.
        this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
        this.element.html('<div class="bar"><div class="filled"></div></div>' +
            '<div class="percentage"></div>' +
            '<div class="message">&nbsp;</div>');
    };

    /**
     * Set the percentage and status message for the progressbar.
     */
    Drupal.progressBar.prototype.setProgress = function (percentage, message) {
        if (percentage >= 0 && percentage <= 100) {
            $('div.filled', this.element).css('width', percentage + '%');
            $('div.percentage', this.element).html(percentage + '%');
        }
        $('div.message', this.element).html(message);
        if (this.updateCallback) {
            this.updateCallback(percentage, message, this);
        }
    };

    /**
     * Start monitoring progress via Ajax.
     */
    Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
        this.delay = delay;
        this.uri = uri;
        this.sendPing();
    };

    /**
     * Stop monitoring progress via Ajax.
     */
    Drupal.progressBar.prototype.stopMonitoring = function () {
        clearTimeout(this.timer);
        // This allows monitoring to be stopped from within the callback.
        this.uri = null;
    };

    /**
     * Request progress data from server.
     */
    Drupal.progressBar.prototype.sendPing = function () {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        if (this.uri) {
            var pb = this;
            // When doing a post request, you need non-null data. Otherwise a
            // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
            $.ajax({
                type: this.method,
                url: this.uri,
                data: '',
                dataType: 'json',
                success: function (progress) {
                    // Display errors.
                    if (progress.status == 0) {
                        pb.displayError(progress.data);
                        return;
                    }
                    // Update display.
                    pb.setProgress(progress.percentage, progress.message);
                    // Schedule next timer.
                    pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
                },
                error: function (xmlhttp) {
                    pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
                }
            });
        }
    };

    /**
     * Display errors on the page.
     */
    Drupal.progressBar.prototype.displayError = function (string) {
        var error = $('<div class="messages error"></div>').html(string);
        $(this.element).before(error).hide();

        if (this.errorCallback) {
            this.errorCallback(this);
        }
    };

})(jQuery);
;
/**
 * @file
 * Provides JavaScript additions to the managed file field type.
 *
 * This file provides progress bar support (if available), popup windows for
 * file previews, and disabling of other file fields during Ajax uploads (which
 * prevents separate file fields from accidentally uploading files).
 */

(function ($) {

    /**
     * Attach behaviors to managed file element upload fields.
     */
    Drupal.behaviors.fileValidateAutoAttach = {
        attach: function (context, settings) {
            if (settings.file && settings.file.elements) {
                $.each(settings.file.elements, function(selector) {
                    var extensions = settings.file.elements[selector];
                    $(selector, context).bind('change', {extensions: extensions}, Drupal.file.validateExtension);
                });
            }
        },
        detach: function (context, settings) {
            if (settings.file && settings.file.elements) {
                $.each(settings.file.elements, function(selector) {
                    $(selector, context).unbind('change', Drupal.file.validateExtension);
                });
            }
        }
    };

    /**
     * Attach behaviors to the file upload and remove buttons.
     */
    Drupal.behaviors.fileButtons = {
        attach: function (context) {
            $('input.form-submit', context).bind('mousedown', Drupal.file.disableFields);
            $('div.form-managed-file input.form-submit', context).bind('mousedown', Drupal.file.progressBar);
        },
        detach: function (context) {
            $('input.form-submit', context).unbind('mousedown', Drupal.file.disableFields);
            $('div.form-managed-file input.form-submit', context).unbind('mousedown', Drupal.file.progressBar);
        }
    };

    /**
     * Attach behaviors to links within managed file elements.
     */
    Drupal.behaviors.filePreviewLinks = {
        attach: function (context) {
            $('div.form-managed-file .file a, .file-widget .file a', context).bind('click',Drupal.file.openInNewWindow);
        },
        detach: function (context){
            $('div.form-managed-file .file a, .file-widget .file a', context).unbind('click', Drupal.file.openInNewWindow);
        }
    };

    /**
     * File upload utility functions.
     */
    Drupal.file = Drupal.file || {
        /**
         * Client-side file input validation of file extensions.
         */
        validateExtension: function (event) {
            // Remove any previous errors.
            $('.file-upload-js-error').remove();

            // Add client side validation for the input[type=file].
            var extensionPattern = event.data.extensions.replace(/,\s*/g, '|');
            if (extensionPattern.length > 1 && this.value.length > 0) {
                var acceptableMatch = new RegExp('\\.(' + extensionPattern + ')$', 'gi');
                if (!acceptableMatch.test(this.value)) {
                    var error = Drupal.t("The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.", {
                        // According to the specifications of HTML5, a file upload control
                        // should not reveal the real local path to the file that a user
                        // has selected. Some web browsers implement this restriction by
                        // replacing the local path with "C:\fakepath\", which can cause
                        // confusion by leaving the user thinking perhaps Drupal could not
                        // find the file because it messed up the file path. To avoid this
                        // confusion, therefore, we strip out the bogus fakepath string.
                        '%filename': this.value.replace('C:\\fakepath\\', ''),
                        '%extensions': extensionPattern.replace(/\|/g, ', ')
                    });
                    $(this).closest('div.form-managed-file').prepend('<div class="messages error file-upload-js-error">' + error + '</div>');
                    this.value = '';
                    return false;
                }
            }
        },
        /**
         * Prevent file uploads when using buttons not intended to upload.
         */
        disableFields: function (event){
            var clickedButton = this;

            // Only disable upload fields for Ajax buttons.
            if (!$(clickedButton).hasClass('ajax-processed')) {
                return;
            }

            // Check if we're working with an "Upload" button.
            var $enabledFields = [];
            if ($(this).closest('div.form-managed-file').length > 0) {
                $enabledFields = $(this).closest('div.form-managed-file').find('input.form-file');
            }

            // Temporarily disable upload fields other than the one we're currently
            // working with. Filter out fields that are already disabled so that they
            // do not get enabled when we re-enable these fields at the end of behavior
            // processing. Re-enable in a setTimeout set to a relatively short amount
            // of time (1 second). All the other mousedown handlers (like Drupal's Ajax
            // behaviors) are excuted before any timeout functions are called, so we
            // don't have to worry about the fields being re-enabled too soon.
            // @todo If the previous sentence is true, why not set the timeout to 0?
            var $fieldsToTemporarilyDisable = $('div.form-managed-file input.form-file').not($enabledFields).not(':disabled');
            $fieldsToTemporarilyDisable.attr('disabled', 'disabled');
            setTimeout(function (){
                $fieldsToTemporarilyDisable.attr('disabled', false);
            }, 1000);
        },
        /**
         * Add progress bar support if possible.
         */
        progressBar: function (event) {
            var clickedButton = this;
            var $progressId = $(clickedButton).closest('div.form-managed-file').find('input.file-progress');
            if ($progressId.length) {
                var originalName = $progressId.attr('name');

                // Replace the name with the required identifier.
                $progressId.attr('name', originalName.match(/APC_UPLOAD_PROGRESS|UPLOAD_IDENTIFIER/)[0]);

                // Restore the original name after the upload begins.
                setTimeout(function () {
                    $progressId.attr('name', originalName);
                }, 1000);
            }
            // Show the progress bar if the upload takes longer than half a second.
            setTimeout(function () {
                $(clickedButton).closest('div.form-managed-file').find('div.ajax-progress-bar').slideDown();
            }, 500);
        },
        /**
         * Open links to files within forms in a new window.
         */
        openInNewWindow: function (event) {
            $(this).attr('target', '_blank');
            window.open(this.href, 'filePreview', 'toolbar=0,scrollbars=1,location=1,statusbar=1,menubar=0,resizable=1,width=500,height=550');
            return false;
        }
    };

})(jQuery);
;

/**
 * JavaScript behaviors for the front-end display of webforms.
 */

(function ($) {

    Drupal.behaviors.webform = Drupal.behaviors.webform || {};

    Drupal.behaviors.webform.attach = function(context) {
        // Calendar datepicker behavior.
        Drupal.webform.datepicker(context);
    };

    Drupal.webform = Drupal.webform || {};

    Drupal.webform.datepicker = function(context) {
        $('div.webform-datepicker').each(function() {
            var $webformDatepicker = $(this);
            var $calendar = $webformDatepicker.find('input.webform-calendar');
            var startDate = $calendar[0].className.replace(/.*webform-calendar-start-(\d{4}-\d{2}-\d{2}).*/, '$1').split('-');
            var endDate = $calendar[0].className.replace(/.*webform-calendar-end-(\d{4}-\d{2}-\d{2}).*/, '$1').split('-');
            var firstDay = $calendar[0].className.replace(/.*webform-calendar-day-(\d).*/, '$1');
            // Convert date strings into actual Date objects.
            startDate = new Date(startDate[0], startDate[1] - 1, startDate[2]);
            endDate = new Date(endDate[0], endDate[1] - 1, endDate[2]);

            // Ensure that start comes before end for datepicker.
            if (startDate > endDate) {
                var laterDate = startDate;
                startDate = endDate;
                endDate = laterDate;
            }

            var startYear = startDate.getFullYear();
            var endYear = endDate.getFullYear();

            // Set up the jQuery datepicker element.
            $calendar.datepicker({
                dateFormat: 'yy-mm-dd',
                yearRange: startYear + ':' + endYear,
                firstDay: parseInt(firstDay),
                minDate: startDate,
                maxDate: endDate,
                onSelect: function(dateText, inst) {
                    var date = dateText.split('-');
                    $webformDatepicker.find('select.year, input.year').val(+date[0]);
                    $webformDatepicker.find('select.month').val(+date[1]);
                    $webformDatepicker.find('select.day').val(+date[2]);
                },
                beforeShow: function(input, inst) {
                    // Get the select list values.
                    var year = $webformDatepicker.find('select.year, input.year').val();
                    var month = $webformDatepicker.find('select.month').val();
                    var day = $webformDatepicker.find('select.day').val();

                    // If empty, default to the current year/month/day in the popup.
                    var today = new Date();
                    year = year ? year : today.getFullYear();
                    month = month ? month : today.getMonth() + 1;
                    day = day ? day : today.getDate();

                    // Make sure that the default year fits in the available options.
                    year = (year < startYear || year > endYear) ? startYear : year;

                    // jQuery UI Datepicker will read the input field and base its date off
                    // of that, even though in our case the input field is a button.
                    $(input).val(year + '-' + month + '-' + day);
                }
            });

            // Prevent the calendar button from submitting the form.
            $calendar.click(function(event) {
                $(this).focus();
                event.preventDefault();
            });
        });
    }

})(jQuery);
;
(function ($) {

    $(document).ready(function() {

        // Expression to check for absolute internal links.
        var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");

        // Attach onclick event to document only and catch clicks on all elements.
        $(document.body).click(function(event) {
            // Catch the closest surrounding link of a clicked element.
            $(event.target).closest("a,area").each(function() {

                var ga = Drupal.settings.googleanalytics;
                // Expression to check for special links like gotwo.module /go/* links.
                var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
                // Expression to check for download links.
                var isDownload = new RegExp("\\.(" + ga.trackDownloadExtensions + ")$", "i");

                // Is the clicked URL internal?
                if (isInternal.test(this.href)) {
                    // Skip 'click' tracking, if custom tracking events are bound.
                    if ($(this).is('.colorbox')) {
                        // Do nothing here. The custom event will handle all tracking.
                    }
                    // Is download tracking activated and the file extension configured for download tracking?
                    else if (ga.trackDownload && isDownload.test(this.href)) {
                        // Download link clicked.
                        var extension = isDownload.exec(this.href);
                        _gaq.push(["_trackEvent", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, '')]);
                    }
                    else if (isInternalSpecial.test(this.href)) {
                        // Keep the internal URL for Google Analytics website overlay intact.
                        _gaq.push(["_trackPageview", this.href.replace(isInternal, '')]);
                    }
                }
                else {
                    if (ga.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
                        // Mailto link clicked.
                        _gaq.push(["_trackEvent", "Mails", "Click", this.href.substring(7)]);
                    }
                    else if (ga.trackOutbound && this.href.match(/^\w+:\/\//i)) {
                        if (ga.trackDomainMode == 2 && isCrossDomain($(this).attr('hostname'), ga.trackCrossDomains)) {
                            // Top-level cross domain clicked. document.location is handled by _link internally.
                            event.preventDefault();
                            _gaq.push(["_link", this.href]);
                        }
                        else {
                            // External link clicked.
                            _gaq.push(["_trackEvent", "Outbound links", "Click", this.href]);
                        }
                    }
                }
            });
        });

        // Colorbox: This event triggers when the transition has completed and the
        // newly loaded content has been revealed.
        $(document).bind("cbox_complete", function() {
            var href = $.colorbox.element().attr("href");
            if (href) {
                _gaq.push(["_trackPageview", href.replace(isInternal, '')]);
            }
        });

    });

    /**
     * Check whether the hostname is part of the cross domains or not.
     *
     * @param string hostname
     *   The hostname of the clicked URL.
     * @param array crossDomains
     *   All cross domain hostnames as JS array.
     *
     * @return boolean
     */
    function isCrossDomain(hostname, crossDomains) {
        /**
         * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
         * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
         * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
         *
         * @todo: Remove/Refactor in D8
         */
        if (!crossDomains) {
            return false;
        }
        else {
            return $.inArray(hostname, crossDomains) > -1 ? true : false;
        }
    }

})(jQuery);
;







