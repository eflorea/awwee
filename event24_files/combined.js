

/*compiled*/
/*! jQuery v1.8.2 jquery.com | jquery.org/license v3*/
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("? ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jq$=a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);(function(window,document,undefined){var defaults={messages:{required:"The %s field is required.",matches:"The %s field does not match the %s field.","default":"The %s field is still set to default, please change.",valid_email:"The %s field must contain a valid email address.",valid_emails:"The %s field must contain all valid email addresses.",min_length:"The %s field must be at least %s characters in length.",max_length:"The %s field must not exceed %s characters in length.",exact_length:"The %s field must be exactly %s characters in length.",greater_than:"The %s field must contain a number greater than %s.",less_than:"The %s field must contain a number less than %s.",alpha:"The %s field must only contain alphabetical characters.",alpha_numeric:"The %s field must only contain alpha-numeric characters.",alpha_dash:"The %s field must only contain alpha-numeric characters, underscores, and dashes.",numeric:"The %s field must contain only numbers.",integer:"The %s field must contain an integer.",decimal:"The %s field must contain a decimal number.",is_natural:"The %s field must contain only positive numbers.",is_natural_no_zero:"The %s field must contain a number greater than zero.",valid_ip:"The %s field must contain a valid IP.",valid_base64:"The %s field must contain a base64 string.",valid_credit_card:"The %s field must contain a valid credit card number.",is_file_type:"The %s field must contain only %s files.",valid_url:"The %s field must contain a valid URL.",greater_than_date:"The %s field must contain a more recent date than %s.",less_than_date:"The %s field must contain an older date than %s.",greater_than_or_equal_date:"The %s field must contain a date that's at least as recent as %s.",less_than_or_equal_date:"The %s field must contain a date that's %s or older."},onSubmit:function(errors){},onBlurField:function(errors){}};var ruleRegex=/^(.+?)\[(.+)\]$/,numericRegex=/^[0-9]+$/,integerRegex=/^\-?[0-9]+$/,decimalRegex=/^\-?[0-9]*\.?[0-9]+$/,emailRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,alphaRegex=/^[a-z]+$/i,alphaNumericRegex=/^[a-z0-9]+$/i,alphaDashRegex=/^[a-z0-9_\-]+$/i,naturalRegex=/^[0-9]+$/i,naturalNoZeroRegex=/^[1-9][0-9]*$/i,ipRegex=/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,base64Regex=/[^a-zA-Z0-9\/\+=]/i,numericDashRegex=/^[\d\-\s]+$/,urlRegex=/^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,dateRegex=/\d{4}-\d{1,2}-\d{1,2}/;var FormValidator=function(options){var formNameOrNode=options.form,autoConfig=!!options.autoConfig||true,fields=options.fields,validateOnBlur=!!options.validateOnBlur||false,onSubmit=options.onSubmit,onBlurField=options.onBlurField;this.formNameOrNode=formNameOrNode;this.onSubmit=onSubmit||defaults.onSubmit;this.onBlurField=onBlurField||defaults.onBlurField;this.errors=[];this.fields={};this.form=this._formByNameOrNode(formNameOrNode)||{};this.messages={};this.handlers={};this.conditionals={};this.validateOnBlur=validateOnBlur;if(autoConfig){fields=this._generateFieldParams();}this._buildMasterFieldsArray(fields);var _onsubmit=this.form.onsubmit;var self=this;this.form.onsubmit=(function(evt){try{return self._validateForm(evt)&&(_onsubmit===undefined||_onsubmit());}catch(e){}});};attributeValue=function(element,attributeName){var i;if((element.length>0)&&(element[0].type==="radio"||element[0].type==="checkbox")){for(i=0,elementLength=element.length;i<elementLength;i++){if(element[i].checked){return element[i][attributeName];}}return;}return element[attributeName];};FormValidator.prototype.setMessage=function(rule,message){this.messages[rule]=message;return this;};FormValidator.prototype.registerCallback=function(name,handler){if(name&&typeof name==="string"&&handler&&typeof handler==="function"){this.handlers[name]=handler;}return this;};FormValidator.prototype.registerConditional=function(name,conditional){if(name&&typeof name==="string"&&conditional&&typeof conditional==="function"){this.conditionals[name]=conditional;}return this;};FormValidator.prototype.validateForm=function(){return this._validateForm();};FormValidator.prototype.isValidateForm=function(){this.errors=[];for(var key in this.fields){this._preValidateField(key);}if(this.errors.length>0){return false;}return true;};FormValidator.prototype._formByNameOrNode=function(formNameOrNode){return(typeof formNameOrNode==="object")?formNameOrNode:document.forms[formNameOrNode];};FormValidator.prototype._generateFieldParams=function(){return jq$("input[data-validate]").map(function(i,el){return{name:jq$(el).attr("name"),display:jq$('[for="'+jq$(el).attr("id")+'"]').text(),rules:jq$(el).data("validate")};}).get();};FormValidator.prototype._buildMasterFieldsArray=function(fields){var self=this;for(var i=0,fieldLength=fields.length;i<fieldLength;i++){var field=fields[i];if((!field.name&&!field.names)||!field.rules){console.warn("basic validate: The following field is being skipped due to a misconfiguration: "+field);continue;}if(field.names){for(var j=0,fieldNamesLength=field.names.length;j<fieldNamesLength;j++){this._addField(field,field.names[j]);}}else{this._addField(field,field.name);}if(this.validateOnBlur){var fieldElement=this.form.querySelector("[name="+field.name+"]");if(fieldElement!==null){fieldElement.addEventListener("blur",function(e){self._onFieldBlur(e);});}}}};FormValidator.prototype._onFieldBlur=function(evt){this.errors=[];var key=evt.target.getAttribute("name");this._preValidateField(key);if(typeof this.onBlurField==="function"){this.onBlurField(this.errors,evt);}};FormValidator.prototype._addField=function(field,nameValue){this.fields[nameValue]={name:nameValue,display:field.display||nameValue,rules:field.rules,depends:field.depends,id:null,element:null,type:null,value:null,checked:null};};FormValidator.prototype._validateForm=function(evt){this.errors=[];for(var key in this.fields){this._preValidateField(key);}if(typeof this.onSubmit==="function"){this.onSubmit(this.errors,evt);}if(this.errors.length>0){WA.stopEventDefault(evt);return false;}return true;};FormValidator.prototype._preValidateField=function(key){if(this.fields.hasOwnProperty(key)){var field=this.fields[key]||{},element=this.form[field.name];if(element&&element!==undefined){field.id=attributeValue(element,"id");field.element=element;field.type=(element.length>0)?element[0].type:element.type;field.value=attributeValue(element,"value");field.checked=attributeValue(element,"checked");if(field.depends&&typeof field.depends==="function"){if(field.depends.call(this,field)){this._validateField(field);}}else{if(field.depends&&typeof field.depends==="string"&&this.conditionals[field.depends]){if(this.conditionals[field.depends].call(this,field)){this._validateField(field);}}else{this._validateField(field);}}}}};FormValidator.prototype._validateField=function(field){var i,j,rules=field.rules.split("|"),indexOfRequired=field.rules.indexOf("required"),isEmpty=(!field.value||field.value===""||field.value===undefined);for(i=0,ruleLength=rules.length;i<ruleLength;i++){var method=rules[i],param=null,failed=false,parts=ruleRegex.exec(method);if(indexOfRequired===-1&&method.indexOf("!callback_")===-1&&isEmpty){continue;}if(parts){method=parts[1];param=parts[2];}if(method.charAt(0)==="!"){method=method.substring(1,method.length);}if(typeof this._hooks[method]==="function"){if(!this._hooks[method].apply(this,[field,param])){failed=true;}}else{if(method.substring(0,9)==="callback_"){method=method.substring(9,method.length);if(typeof this.handlers[method]==="function"){if(this.handlers[method].apply(this,[field.value,param,field])===false){failed=true;}}}}if(failed){var source=this.messages[field.name+"."+method]||this.messages[method]||defaults.messages[method],message="An error has occurred with the "+field.display+" field.";if(source){message=source.replace("%s",field.display);if(param){message=message.replace("%s",(this.fields[param])?this.fields[param].display:param);}}var existingError;for(j=0;j<this.errors.length;j+=1){if(field.id===this.errors[j].id){existingError=this.errors[j];}}var errorObject=existingError||{id:field.id,display:field.display,element:field.element,name:field.name,message:message,messages:[],rule:method};errorObject.messages.push(message);if(!existingError){this.errors.push(errorObject);}}}};FormValidator.prototype._getValidDate=function(date){if(!date.match("today")&&!date.match(dateRegex)){return false;}var validDate=new Date(),validDateArray;if(!date.match("today")){validDateArray=date.split("-");validDate.setFullYear(validDateArray[0]);validDate.setMonth(validDateArray[1]-1);validDate.setDate(validDateArray[2]);}return validDate;};FormValidator.prototype._hooks={required:function(field){var value=field.value;if((field.type==="checkbox")||(field.type==="radio")){return(field.checked===true);}return(value!==null&&value!=="");},"default":function(field,defaultName){return field.value!==defaultName;},matches:function(field,matchName){var el=this.form[matchName];if(el){return field.value===el.value;}return false;},valid_email:function(field){return emailRegex.test(field.value);},valid_emails:function(field){var result=field.value.split(/\s*,\s*/g);for(var i=0,resultLength=result.length;i<resultLength;i++){if(!emailRegex.test(result[i])){return false;}}return true;},min_length:function(field,length){if(!numericRegex.test(length)){return false;}return(field.value.length>=parseInt(length,10));},max_length:function(field,length){if(!numericRegex.test(length)){return false;}return(field.value.length<=parseInt(length,10));},exact_length:function(field,length){if(!numericRegex.test(length)){return false;}return(field.value.length===parseInt(length,10));},greater_than:function(field,param){if(!decimalRegex.test(field.value)){return false;}return(parseFloat(field.value)>parseFloat(param));},less_than:function(field,param){if(!decimalRegex.test(field.value)){return false;}return(parseFloat(field.value)<parseFloat(param));},alpha:function(field){return(alphaRegex.test(field.value));},alpha_numeric:function(field){return(alphaNumericRegex.test(field.value));},alpha_dash:function(field){return(alphaDashRegex.test(field.value));},numeric:function(field){return(numericRegex.test(field.value));},integer:function(field){return(integerRegex.test(field.value));},decimal:function(field){return(decimalRegex.test(field.value));},is_natural:function(field){return(naturalRegex.test(field.value));},is_natural_no_zero:function(field){return(naturalNoZeroRegex.test(field.value));},valid_ip:function(field){return(ipRegex.test(field.value));},valid_base64:function(field){return(base64Regex.test(field.value));},valid_url:function(field){return(urlRegex.test(field.value));},valid_credit_card:function(field){if(!numericDashRegex.test(field.value)){return false;}var nCheck=0,nDigit=0,bEven=false;var strippedField=field.value.replace(/\D/g,"");for(var n=strippedField.length-1;n>=0;n--){var cDigit=strippedField.charAt(n);nDigit=parseInt(cDigit,10);if(bEven){if((nDigit*=2)>9){nDigit-=9;}}nCheck+=nDigit;bEven=!bEven;}return(nCheck%10)===0;},is_file_type:function(field,type){if(field.type!=="file"){return true;}var ext=field.value.substr((field.value.lastIndexOf(".")+1)),typeArray=type.split(","),inArray=false,i=0,len=typeArray.length;for(i;i<len;i++){if(ext.toUpperCase()==typeArray[i].toUpperCase()){inArray=true;}}return inArray;},greater_than_date:function(field,date){var enteredDate=this._getValidDate(field.value),validDate=this._getValidDate(date);if(!validDate||!enteredDate){return false;}return enteredDate>validDate;},less_than_date:function(field,date){var enteredDate=this._getValidDate(field.value),validDate=this._getValidDate(date);if(!validDate||!enteredDate){return false;}return enteredDate<validDate;},greater_than_or_equal_date:function(field,date){var enteredDate=this._getValidDate(field.value),validDate=this._getValidDate(date);if(!validDate||!enteredDate){return false;}return enteredDate>=validDate;},less_than_or_equal_date:function(field,date){var enteredDate=this._getValidDate(field.value),validDate=this._getValidDate(date);if(!validDate||!enteredDate){return false;}return enteredDate<=validDate;}};window.FormValidator=FormValidator;})(window,document);(function(window,WA,undefined){if(!window.WaBasicWizard){window.WaBasicWizard=BasicWizard;}function BasicWizard(userOptions){if(!userOptions||!userOptions.element){return;}var defaults={selected:0,stepsBarContainer:"ul",stepsElements:"> * > .step",pagesContainer:".pagesContainer",pagesElements:"*",backButtonSupport:true,useURLhash:true,showStepURLhash:true,anchorSettings:{anchorClickable:true,enableAllAnchors:false,markDoneStep:true,markAllPreviousStepsAsDone:true,removeDoneStepOnNavigateBack:false,enableAnchorOnDoneStep:true},disabledSteps:[]};var self=this,options=$.extend(true,{},defaults,userOptions),main=jq$(options.element),nav=main.children(options.stepsBarContainer),steps=jq$(options.stepsElements,nav),container=main.find(options.pagesContainer),pages=container.children(options.pagesElements),currentIndex=null;init();function init(){setElements();var idx=options.selected;idx=getSelectedStepFromUrl(idx);if(idx>0&&options.anchorSettings.markDoneStep&&options.anchorSettings.markAllPreviousStepsAsDone){steps.eq(idx).parent().prevAll().addClass("done");}showStep(idx);}function getSelectedStepFromUrl(idx){if(!options.useURLhash){return idx;}var hash=window.location.hash;if(!hash||hash.length==0){return idx;}var elm=jq$('.step[href*="'+hash+'"]',nav);if(elm.length){var id=steps.index(elm);idx=id>=0?id:idx;}return idx;}function setElements(){main.addClass("basicWizward_main");nav.addClass("bw_nav bw_navTabs bw_stepAnchor");if(options.anchorSettings.enableAllAnchors!==false&&options.anchorSettings.anchorClickable!==false){steps.parent().addClass("clickable");}container.addClass("bw_container bw_tabContent");pages.addClass("bw_stepContent");if(options.disabledSteps&&options.disabledSteps.length>0){jq$.each(options.disabledSteps,function(i,n){steps.eq(n).parent().addClass("disabled");});}return true;}function setEvents(){jq$(steps).on("click",function(e){e.preventDefault();if(options.anchorSettings.anchorClickable===false){return true;}var idx=steps.index(this);if(options.anchorSettings.enableAnchorOnDoneStep===false&&steps.eq(idx).parent().hasClass("done")){return true;}if(idx!==currentIndex){if(options.anchorSettings.enableAllAnchors!==false&&options.anchorSettings.anchorClickable!==false){showStep(idx);}else{if(steps.eq(idx).parent().hasClass("done")){showStep(idx);}}}});if(options.backButtonSupport){jq$(window).on("hashchange",function(e){if(!options.useURLhash){return true;}if(window.location.hash){var elm=jq$('.step[href*="'+window.location.hash+'"]',nav);if(elm&&elm.length>0){e.preventDefault();showStep(steps.index(elm));}}});}return true;}function showNext(){var si=currentIndex+1;for(var i=si;i<steps.length;i++){if(!steps.eq(i).parent().hasClass("disabled")){si=i;break;}}if(steps.length<=si){return false;}showStep(si);return true;}function showPrevious(){var si=currentIndex-1;for(var i=si;i>=0;i--){if(!steps.eq(i).parent().hasClass("disabled")){si=i;break;}}if(0>si){return false;}showStep(si);return true;}function showStep(idx){if(!steps.eq(idx)){return false;}if(idx==currentIndex){return false;}loadStepContent(idx);return true;}function loadStepContent(idx){var curTab=steps.eq(currentIndex);var stepDirection="";var elm=steps.eq(idx);if(currentIndex!==null&&currentIndex!==idx){stepDirection=currentIndex<idx?"forward":"backward";}if(currentIndex!==null&&triggerEvent("leaveStep",[curTab,currentIndex,stepDirection])===false){return false;}transitPage(idx);return true;}function transitPage(idx){var curTab=steps.eq(currentIndex);var curPage=curTab.length>0?jq$(curTab.attr("href"),main):null;var selTab=steps.eq(idx);var selPage=selTab.length>0?jq$(selTab.attr("href"),main):null;var stepDirection="";if(currentIndex!==null&&currentIndex!==idx){stepDirection=currentIndex<idx?"forward":"backward";}var stepPosition="middle";if(idx===0){stepPosition="first";}else{if(idx===steps.length-1){stepPosition="final";}}if(curPage&&curPage.length>0){curPage.hide();}selPage.show();setURLHash(selTab.attr("href"));setAnchor(idx);currentIndex=idx;triggerEvent("showStep",[selTab,currentIndex,stepDirection,stepPosition]);return true;}function setAnchor(idx){steps.eq(currentIndex).parent().removeClass("active loading");if(options.anchorSettings.markDoneStep!==false&&currentIndex!==null){steps.eq(currentIndex).parent().addClass("done");if(options.anchorSettings.removeDoneStepOnNavigateBack!==false){steps.eq(idx).parent().nextAll().removeClass("done");}}steps.eq(idx).parent().removeClass("done loading").addClass("active");return true;}function triggerEvent(name,params){var e=jq$.Event(name);main.trigger(e,params);if(e.isDefaultPrevented()){return false;}return e.result;}function setURLHash(hash){if(options.showStepURLhash&&window.location.hash!==hash){window.location.hash=hash;}}self.next=next;self.prev=prev;self.getStep=getStep;self.reset=reset;self.showModalStep=showModalStep;self.hideModalStep=hideModalStep;function next(){showNext();}function prev(){showPrevious();}function getStep(){return +currentIndex;}function reset(){if(triggerEvent("beginReset")===false){return false;}pages.hide();currentIndex=null;setURLHash(steps.eq(options.selected).attr("href"));steps.removeClass();steps.parents().removeClass();steps.data("has-content",false);init();triggerEvent("endReset");}function showModalStep(name){pages.hide();steps.hide();jq$(name,main).show();}function hideModalStep(name){reset();}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaGoogleMapsGadgetsManager){window.WaGoogleMapsGadgetsManager=new GoogleMapsGadgetsManager();}function GoogleMapsGadgetsManager(){if(!WA){return;}var pThis=this,typeName="WaGoogleMapsGadgetsManager";pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});pThis.GoogleMapsApiLoaded=WA.Tools.EventHandlers.createHandlers(pThis,{id:"GoogleMapsApiLoaded",type:WA.Tools.EventHandlers.Type.Long});pThis.createGadget=createGadget;pThis.onGoogleMapsApiLoaded=onGoogleMapsApiLoaded;var gadgets={},isDisposed=false,apiUrlTemplate="https://maps.googleapis.com/maps/api/js?"+"key={key}"+"&libraries={libraries}"+"&callback={callback}",apiLoadOptions={key:"",callback:typeName+".onGoogleMapsApiLoaded",libraries:[]},apiScriptId="id_waGoogleApiScript";function onGadgetDispose(sender,args){delete gadgets[args&&args.id];}function createGadget(gadgetConstructor,model,args){model=model||{};args=args||{};var gadgetId=model.id;if(gadgets.hasOwnProperty(gadgetId)&&gadgets[gadgetId].dispose){gadgets[gadgetId].dispose();}args.parentComponent=pThis;gadgets[gadgetId]=new gadgetConstructor(model,args);gadgets[gadgetId].Dispose.addHandler(onGadgetDispose);if(!(window.google&&window.google.maps)&&!WA.$(apiScriptId,window)){loadGoogleMapsApi(model);}}function loadGoogleMapsApi(model){var apiScript=document.createElement("script");apiLoadOptions.key=model.apiKey||apiLoadOptions.key;apiLoadOptions.libraries=(model.libraries||apiLoadOptions.libraries).join(",");apiScript.id=apiScriptId;apiScript.src=WA.String.formatNamed(apiUrlTemplate,apiLoadOptions);document.getElementsByTagName("head")[0].appendChild(apiScript);}function onGoogleMapsApiLoaded(){pThis.GoogleMapsApiLoaded.fireHandlers();}function init(){if(window.google&&window.google.maps){onGoogleMapsApiLoaded();}}function dispose(){if(isDisposed){return;}isDisposed=true;pThis.Dispose.fireHandlers();window[typeName]=null;gadgets=null;pThis.Dispose=null;pThis.GoogleMapsApiLoaded=null;}BonaPage.addPageStateHandler(BonaPage.PAGE_PARSED,init,BonaPage.HANDLERTYPE_ALWAYS);BonaPage.addPageStateHandler(BonaPage.PAGE_UNLOADED,dispose,BonaPage.HANDLERTYPE_ALWAYS);}})(window,window.WA);!function($,window,document){function Linkified(element,options){this._defaults=defaults,this.element=element,this.setOptions(options),this.init();}var defaults={tagName:"a",newLine:"\n",target:"_blank",linkClass:null,linkClasses:[],linkAttributes:null};Linkified.prototype={constructor:Linkified,init:function(){1===this.element.nodeType?Linkified.linkifyNode.call(this,this.element):this.element=Linkified.linkify.call(this,this.element.toString());},setOptions:function(options){this.settings=Linkified.extendSettings(options,this.settings);},toString:function(){return this.element.toString();}},Linkified.extendSettings=function(options,settings){var prop;settings=settings||{};for(prop in defaults){settings[prop]||(settings[prop]=defaults[prop]);}for(prop in options){settings[prop]=options[prop];}return settings;},Linkified.linkMatch=new RegExp(["(",'\\s|[^a-zA-Z0-9.\\+_\\/"\\>\\-]|^',")(?:","(","[a-zA-Z0-9\\+_\\-]+","(?:","\\.[a-zA-Z0-9\\+_\\-]+",")*@",")?(","http:\\/\\/|https:\\/\\/|ftp:\\/\\/",")?(","(?:(?:[a-z0-9][a-z0-9_%\\-_+]*\\.)+)",")(","(?:com|ca|co|edu|gov|net|org|dev|biz|cat|int|pro|tel|mil|aero|asia|coop|info|jobs|mobi|museum|name|post|travel|local|[a-z]{2})",")(","(?::\\d{1,5})",")?(","(?:","[\\/|\\?]","(?:","[\\-a-zA-Z0-9_%#*&+=~!?,;:.\\/]*",")*",")","[\\-\\/a-zA-Z0-9_%#*&+=~]","|","\\/?",")?",")(",'[^a-zA-Z0-9\\+_\\/"\\<\\-]|$',")"].join(""),"g"),Linkified.emailLinkMatch=/(<[a-z]+ href=\")(http:\/\/)([a-zA-Z0-9\+_\-]+(?:\.[a-zA-Z0-9\+_\-]+)*@)/g,Linkified.linkify=function(text,options){var attr,settings,linkClasses,linkReplace=[];this.constructor===Linkified&&this.settings?(settings=this.settings,options&&(settings=Linkified.extendSettings(options,settings))):settings=Linkified.extendSettings(options),linkClasses=settings.linkClass?settings.linkClass.split(/\s+/):[],linkClasses.push.apply(linkClasses,settings.linkClasses),text=text.replace(/</g,"&lt;").replace(/(\s)/g,"$1$1"),linkReplace.push("$1<"+settings.tagName,'href="http://$2$4$5$6$7"'),linkReplace.push('class="linkified'+(linkClasses.length>0?" "+linkClasses.join(" "):"")+'"'),settings.target&&linkReplace.push('target="'+settings.target+'"');for(attr in settings.linkAttributes){linkReplace.push([attr,'="',settings.linkAttributes[attr].replace(/\"/g,"&quot;").replace(/\$/g,"&#36;"),'"'].join(""));}return linkReplace.push(">$2$3$4$5$6$7</"+settings.tagName+">$8"),text=text.replace(Linkified.linkMatch,linkReplace.join(" ")),text=text.replace(Linkified.emailLinkMatch,"$1mailto:$3"),text=text.replace(/(\s){2}/g,"$1"),text=text.replace(/\n/g,settings.newLine);},Linkified.linkifyNode=function(node){var children,childNode,childCount,dummyElement,i;if(node&&"object"==typeof node&&1===node.nodeType&&"a"!==node.tagName.toLowerCase()&&!/[^\s]linkified[\s$]/.test(node.className)){for(children=[],dummyElement=Linkified._dummyElement||document.createElement("div"),childNode=node.firstChild,childCount=node.childElementCount;childNode;){if(3===childNode.nodeType){for(;dummyElement.firstChild;){dummyElement.removeChild(dummyElement.firstChild);}for(dummyElement.innerHTML=Linkified.linkify.call(this,childNode.textContent||childNode.innerText||childNode.nodeValue),children.push.apply(children,dummyElement.childNodes);dummyElement.firstChild;){dummyElement.removeChild(dummyElement.firstChild);}}else{1===childNode.nodeType?children.push(Linkified.linkifyNode(childNode)):children.push(childNode);}childNode=childNode.nextSibling;}for(;node.firstChild;){node.removeChild(node.firstChild);}for(i=0;i<children.length;i++){node.appendChild(children[i]);}}return node;},Linkified._dummyElement=document.createElement("div"),$.fn.linkify=function(options){return this.each(function(){var linkified;(linkified=$.data(this,"plugin-linkify"))?(linkified.setOptions(options),linkified.init()):$.data(this,"plugin-linkify",new Linkified(this,options));});},$.fn.linkify.Constructor=Linkified,$(window).on("load",function(){$("[data-linkify]").each(function(){var $target,$this=$(this),target=$this.attr("data-linkify"),options={tagName:$this.attr("data-linkify-tagname"),newLine:$this.attr("data-linkify-newline"),target:$this.attr("data-linkify-target"),linkClass:$this.attr("data-linkify-linkclass")};for(var option in options){"undefined"==typeof options[option]&&delete options[option];}$target="this"===target?$this:$this.find(target),$target.linkify(options);});}),$("body").on("click",".linkified",function(){var $link=$(this),url=$link.attr("href"),isEmail=/^mailto:/i.test(url),target=$link.attr("target");return isEmail?window.location.href=url:window.open(url,target),!1;});}(jQuery,window,document);(function(){function activeStateIeFix(){var authenticateLoginLink=jq$("a.wa-authenticateLoginLink");authenticateLoginLink.mouseup(function(){jq$(this).addClass("activeState");});authenticateLoginLink.mouseout(function(){jq$(this).removeClass("activeState");});}jq$(document).ready(activeStateIeFix);})();jq$.iFormValidate={build:function(user_options){var defaults={showSummary:true,validateOnLoad:false,errorMessageHeader:null};return jq$(this).each(function(){var options=jq$.extend(defaults,user_options);var $validators=jq$(this).find("span").filter(function(){var validator=jq$(this).attr("validatorType");return validator!=null;});var $suppressValidationControls=jq$(this).find("input").filter(function(){var causesValidation=jq$(this).attr("causesValidation");return causesValidation=="false";});jq$(this).submit(function(){var isValid=jq$.iFormValidate.validateForm($validators,options.showSummary,options.errorMessageHeader);return isValid;});jq$.iFormValidate.setValidators($validators);jq$.iFormValidate.createValidatorsCollection($validators,$suppressValidationControls);if(options.validateOnLoad){jq$.iFormValidate.validateForm($validators,false);}else{var $onLoadValidators=$validators.filter(function(){var validator=jq$(this).attr("validateOnLoad");return(validator!=null&&validator=="true");});if($onLoadValidators!=null&&$onLoadValidators.length>0){jq$.iFormValidate.validateForm($onLoadValidators,false);}}});},suppressValidation:false,validatorCollection:{},createValidatorsCollection:function($validators,$suppressValidationControls){$validators.each(putIntoCollection);$suppressValidationControls.each(suppressValidation);function putIntoCollection(){var id=jq$(this).attr("controlToValidate");if(id!=null&&id.length>0){if(jq$.iFormValidate.validatorCollection[id]==null||jq$.iFormValidate.validatorCollection[id]=="undefined"){jq$.iFormValidate.validatorCollection[id]=jq$([]);}jq$.iFormValidate.validatorCollection[id].push($(this));}}function suppressValidation(){jq$(this).click(function(){jq$.iFormValidate.suppressValidation=true;});}},setValidators:function($validators){var alreadySet=[];$validators.each(setDefaultAttributes);$validators.each(setValidator);function setDefaultAttributes(){var type=jq$(this).attr("validatorType");if(type=="required"){if(jq$(this).attr("validateOnType")!="false"){jq$(this).attr("validateOnType","true");}}if(type=="minLength"||type=="email"||type=="passwordCompare"){if(jq$(this).attr("validateOnBlur")!="false"){jq$(this).attr("validateOnBlur","true");}}}function setValidator(){var id=jq$(this).attr("controlToValidate");var testErrorMessage=jq$(this).attr("errorMessage");if(id==null||id=="undefined"||id.length==0){throw ("Undefined controlToValidate attribute. ValidatorType: "+jq$(this).attr("validatorType"));}if(testErrorMessage==null||testErrorMessage=="undefined"||testErrorMessage.length==0){throw ("Undefined errorMessage attribute. ValidatorType: "+jq$(this).attr("validatorType"));}if(alreadySet[id]==null){alreadySet[id]={};var $control=jq$("#"+id);$control.keyup(function(){jq$.iFormValidate.validateControl(this,"validateOnType");});$control.blur(function(){jq$.iFormValidate.validateControl(this,"validateOnBlur");});$control.filter("select").change(function(){jq$.iFormValidate.validateControl(this);});}}},validateControl:function(inputObject,validationEventName){var $validators=jq$.iFormValidate.validatorCollection[inputObject.id];if(validationEventName){$validators=$validators.filter(function(){var attribute=jq$(this).attr(validationEventName);return attribute!=null&&attribute=="true";});}if($validators!=null&&$validators.length>0){jq$.iFormValidate.validateForm($validators,false);}},validateForm:function($validators,showSummaryAlert,errorMessageHeader){if(jq$.iFormValidate.suppressValidation){return true;}var isValid=false;var errorMessage="";$validators.each(jq$.iFormValidate.validate);var $errors=$validators.filter(function(){return $(this).attr("invalid")!=null;});if($errors.length>0){if(showSummaryAlert){if(errorMessageHeader!=null){errorMessage+=errorMessageHeader+"\n\n";}$errors.each(collectErrors);alert(errorMessage);var $errorControl=jq$("#"+$errors.first().attr("controlToValidate"));if($errorControl!=null){$errorControl.trigger("focus");}}isValid=false;}else{isValid=true;}function collectErrors(){var message=jq$(this).attr("errorMessage");if(message!=null&&message.length>0){errorMessage+="- "+message+"\n";}}return isValid;},validate:function(){var $controlToValidate=jq$("#"+$(this).attr("controlToValidate"));var validatorType=jq$(this).attr("validatorType");var error=null;switch(validatorType){case"passwordCompare":error=new jq$.iFormValidate.validator.passwordCompare(jq$(this),$controlToValidate).validate();break;case"email":error=new jq$.iFormValidate.validator.email(jq$(this),$controlToValidate).validate();break;case"minLength":error=new jq$.iFormValidate.validator.minLength(jq$(this),$controlToValidate).validate();break;case"required":error=new jq$.iFormValidate.validator.required(jq$(this),$controlToValidate).validate();break;case"date":error=new jq$.iFormValidate.validator.date(jq$(this),$controlToValidate).validate();break;default:throw ("Validator type not supported: "+validatorType);}if(error!=null&&error.length>0){jq$(this).attr("invalid","true");setErrorStyle(jq$(this));}else{jq$(this).removeAttr("invalid");setNormalStyle(jq$(this));}function setErrorStyle($validator){var displayType=$validator.attr("display");switch(displayType){case"dynamic":$validator.css("display","block");default:$validator.css("visibility","visible");break;}}function setNormalStyle($validator){var displayType=$validator.attr("display");switch(displayType){case"dynamic":$validator.css("display","none");default:$validator.css("visibility","hidden");break;}}},validator:{passwordCompare:function($validator,$controlToValidate){var pThis=this;var val=$controlToValidate.val();var $compareWithControl=jq$("#"+$validator.attr("compareWith"));var compareWithValue=$compareWithControl.val();pThis.validate=validate;function init(){if($compareWithControl==null){throw ("Invalid compareWith attribute");}if(compareWithValue==null||compareWithValue=="undefined"){throw ("Invalid compareWith attribute");}}function validate(){if(val!=null&&compareWithValue!=null&&val!="undefined"&&compareWithValue!="undefined"&&val===compareWithValue){return"";}return $validator.attr("errorMessage");}init();},minLength:function($validator,$controlToValidate){var pThis=this;var val=$controlToValidate.val();var minLengthValue=parseInt($validator.attr("minLengthValue"),10);pThis.validate=validate;function init(){if(isNaN(minLengthValue)||minLengthValue<0){throw ("Invalid minLengthValue");}}function validate(){if(val==null||val.length==0||val.length>=minLengthValue){return"";}return $validator.attr("errorMessage");}init();},email:function($validator,$controlToValidate){var pThis=this;var Regex=/^\s*[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\s*$/;var val=$controlToValidate.val();pThis.validate=validate;function validate(){if(val==null||val.length==0||Regex.test(val)){return"";}return $validator.attr("errorMessage");}},date:function($validator,$controlToValidate){var pThis=this;var Regex=/^([\d]|1[0,1,2]|0[1-9])(\-|\/|\.)([0-9]|[0,1,2][0-9]|3[0,1])(\-|\/|\.)\d{4}$/;var val=$controlToValidate.val();pThis.validate=validate;function validate(){if(Regex.test(val)){return"";}return $validator.attr("errorMessage");}},required:function($validator,$controlToValidate){var pThis=this;var val=$controlToValidate.val();pThis.validate=validate;function validate(){if(val!=null&&val!="undefined"&&val.length>0){return"";}return $validator.attr("errorMessage");}}}};jq$.fn.FormValidate=jq$.iFormValidate.build;!function t(e,n,r){function o(i,s){if(!n[i]){if(!e[i]){var a="function"==typeof require&&require;if(!s&&a){return a(i,!0);}if(l){return l(i,!0);}var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c;}var u=n[i]={exports:{}};e[i][0].call(u.exports,function(t){var n=e[i][1][t];return o(n?n:t);},u,u.exports,t,e,n,r);}return n[i].exports;}for(var l="function"==typeof require&&require,i=0;i<r.length;i++){o(r[i]);}return o;}({1:[function(t,e,n){function r(t){t.fn.perfectScrollbar=function(t){return this.each(function(){if("object"==typeof t||"undefined"==typeof t){var e=t;l.get(this)||o.initialize(this,e);}else{var n=t;"update"===n?o.update(this):"destroy"===n&&o.destroy(this);}});};}var o=t("../main"),l=t("../plugin/instances");if("function"==typeof define&&define.amd){define(["jquery"],r);}else{var i=window.jQuery?window.jQuery:window.$;"undefined"!=typeof i&&r(i);}e.exports=r;},{"../main":7,"../plugin/instances":18}],2:[function(t,e,n){function r(t,e){var n=t.className.split(" ");n.indexOf(e)<0&&n.push(e),t.className=n.join(" ");}function o(t,e){var n=t.className.split(" "),r=n.indexOf(e);r>=0&&n.splice(r,1),t.className=n.join(" ");}n.add=function(t,e){t.classList?t.classList.add(e):r(t,e);},n.remove=function(t,e){t.classList?t.classList.remove(e):o(t,e);},n.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ");};},{}],3:[function(t,e,n){function r(t,e){return window.getComputedStyle(t)[e];}function o(t,e,n){return"number"==typeof n&&(n=n.toString()+"px"),t.style[e]=n,t;}function l(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r;}return t;}var i={};i.e=function(t,e){var n=document.createElement(t);return n.className=e,n;},i.appendTo=function(t,e){return e.appendChild(t),t;},i.css=function(t,e,n){return"object"==typeof e?l(t,e):"undefined"==typeof n?r(t,e):o(t,e,n);},i.matches=function(t,e){return"undefined"!=typeof t.matches?t.matches(e):"undefined"!=typeof t.matchesSelector?t.matchesSelector(e):"undefined"!=typeof t.webkitMatchesSelector?t.webkitMatchesSelector(e):"undefined"!=typeof t.mozMatchesSelector?t.mozMatchesSelector(e):"undefined"!=typeof t.msMatchesSelector?t.msMatchesSelector(e):void 0;},i.remove=function(t){"undefined"!=typeof t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t);},i.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return i.matches(t,e);});},e.exports=i;},{}],4:[function(t,e,n){var r=function(t){this.element=t,this.events={};};r.prototype.bind=function(t,e){"undefined"==typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1);},r.prototype.unbind=function(t,e){var n="undefined"!=typeof e;this.events[t]=this.events[t].filter(function(r){return !(!n||r===e)||(this.element.removeEventListener(t,r,!1),!1);},this);},r.prototype.unbindAll=function(){for(var t in this.events){this.unbind(t);}};var o=function(){this.eventElements=[];};o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t;})[0];return"undefined"==typeof e&&(e=new r(t),this.eventElements.push(e)),e;},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n);},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n);},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++){this.eventElements[t].unbindAll();}},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t);};r.bind(e,o);},e.exports=o;},{}],5:[function(t,e,n){e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1);}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t();};}();},{}],6:[function(t,e,n){var r=t("./class"),o=t("./dom"),l=n.toInt=function(t){return parseInt(t,10)||0;},i=n.clone=function(t){if(t){if(t.constructor===Array){return t.map(i);}if("object"==typeof t){var e={};for(var n in t){e[n]=i(t[n]);}return e;}return t;}return null;};n.extend=function(t,e){var n=i(t);for(var r in e){n[r]=i(e[r]);}return n;},n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]");},n.removePsClasses=function(t){for(var e=r.list(t),n=0;n<e.length;n++){var o=e[n];0===o.indexOf("ps-")&&r.remove(t,o);}},n.outerWidth=function(t){return l(o.css(t,"width"))+l(o.css(t,"paddingLeft"))+l(o.css(t,"paddingRight"))+l(o.css(t,"borderLeftWidth"))+l(o.css(t,"borderRightWidth"));},n.startScrolling=function(t,e){r.add(t,"ps-in-scrolling"),"undefined"!=typeof e?r.add(t,"ps-"+e):(r.add(t,"ps-x"),r.add(t,"ps-y"));},n.stopScrolling=function(t,e){r.remove(t,"ps-in-scrolling"),"undefined"!=typeof e?r.remove(t,"ps-"+e):(r.remove(t,"ps-x"),r.remove(t,"ps-y"));},n.env={isWebKit:"WebkitAppearance" in document.documentElement.style,supportsTouch:"ontouchstart" in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints};},{"./class":2,"./dom":3}],7:[function(t,e,n){var r=t("./plugin/destroy"),o=t("./plugin/initialize"),l=t("./plugin/update");e.exports={initialize:o,update:l,destroy:r};},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,n){e.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"};},{}],9:[function(t,e,n){var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances");e.exports=function(t){var e=l.get(t);e&&(e.event.unbindAll(),o.remove(e.scrollbarX),o.remove(e.scrollbarY),o.remove(e.scrollbarXRail),o.remove(e.scrollbarYRail),r.removePsClasses(t),l.remove(t));};},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,n){function r(t,e){function n(t){return t.getBoundingClientRect();}var r=function(t){t.stopPropagation();};e.event.bind(e.scrollbarY,"click",r),e.event.bind(e.scrollbarYRail,"click",function(r){var o=r.pageY-window.pageYOffset-n(e.scrollbarYRail).top,s=o>e.scrollbarYTop?1:-1;i(t,"top",t.scrollTop+s*e.containerHeight),l(t),r.stopPropagation();}),e.event.bind(e.scrollbarX,"click",r),e.event.bind(e.scrollbarXRail,"click",function(r){var o=r.pageX-window.pageXOffset-n(e.scrollbarXRail).left,s=o>e.scrollbarXLeft?1:-1;i(t,"left",t.scrollLeft+s*e.containerWidth),l(t),r.stopPropagation();});}var o=t("../instances"),l=t("../update-geometry"),i=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e);};},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,n){function r(t,e){function n(n){var o=r+n*e.railXRatio,i=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);o<0?e.scrollbarXLeft=0:o>i?e.scrollbarXLeft=i:e.scrollbarXLeft=o;var s=l.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",s);}var r=null,o=null,s=function(e){n(e.pageX-o),a(t),e.stopPropagation(),e.preventDefault();},u=function(){l.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",s);};e.event.bind(e.scrollbarX,"mousedown",function(n){o=n.pageX,r=l.toInt(i.css(e.scrollbarX,"left"))*e.railXRatio,l.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault();});}function o(t,e){function n(n){var o=r+n*e.railYRatio,i=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);o<0?e.scrollbarYTop=0:o>i?e.scrollbarYTop=i:e.scrollbarYTop=o;var s=l.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",s);}var r=null,o=null,s=function(e){n(e.pageY-o),a(t),e.stopPropagation(),e.preventDefault();},u=function(){l.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",s);};e.event.bind(e.scrollbarY,"mousedown",function(n){o=n.pageY,r=l.toInt(i.css(e.scrollbarY,"top"))*e.railYRatio,l.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault();});}var l=t("../../lib/helper"),i=t("../../lib/dom"),s=t("../instances"),a=t("../update-geometry"),c=t("../update-scroll");e.exports=function(t){var e=s.get(t);r(t,e),o(t,e);};},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,n){function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive){return !1;}if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0){return !e.settings.wheelPropagation;}}var l=t.scrollLeft;if(0===r){if(!e.scrollbarXActive){return !1;}if(0===l&&n<0||l>=e.contentWidth-e.containerWidth&&n>0){return !e.settings.wheelPropagation;}}return !0;}var r=!1;e.event.bind(t,"mouseenter",function(){r=!0;}),e.event.bind(t,"mouseleave",function(){r=!1;});var i=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!(c.isDefaultPrevented&&c.isDefaultPrevented()||c.defaultPrevented)){var u=l.matches(e.scrollbarX,":focus")||l.matches(e.scrollbarY,":focus");if(r||u){var d=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(d){if("IFRAME"===d.tagName){d=d.contentDocument.activeElement;}else{for(;d.shadowRoot;){d=d.shadowRoot.activeElement;}}if(o.isEditable(d)){return;}}var p=0,f=0;switch(c.which){case 37:p=c.metaKey?-e.contentWidth:c.altKey?-e.containerWidth:-30;break;case 38:f=c.metaKey?e.contentHeight:c.altKey?e.containerHeight:30;break;case 39:p=c.metaKey?e.contentWidth:c.altKey?e.containerWidth:30;break;case 40:f=c.metaKey?-e.contentHeight:c.altKey?-e.containerHeight:-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return;}a(t,"top",t.scrollTop-f),a(t,"left",t.scrollLeft+p),s(t),i=n(p,f),i&&c.preventDefault();}}});}var o=t("../../lib/helper"),l=t("../../lib/dom"),i=t("../instances"),s=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e);};},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,n){function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive){return !1;}if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0){return !e.settings.wheelPropagation;}}var l=t.scrollLeft;if(0===r){if(!e.scrollbarXActive){return !1;}if(0===l&&n<0||l>=e.contentWidth-e.containerWidth&&n>0){return !e.settings.wheelPropagation;}}return !0;}function r(t){var e=t.deltaX,n=-1*t.deltaY;return"undefined"!=typeof e&&"undefined"!=typeof n||(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),t.shiftKey?[-n,-e]:[e,n];}function o(e,n){var r=t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(r){if(!window.getComputedStyle(r).overflow.match(/(scroll|auto)/)){return !1;}var o=r.scrollHeight-r.clientHeight;if(o>0&&!(0===r.scrollTop&&n>0||r.scrollTop===o&&n<0)){return !0;}var l=r.scrollLeft-r.clientWidth;if(l>0&&!(0===r.scrollLeft&&e<0||r.scrollLeft===l&&e>0)){return !0;}}return !1;}function s(s){var c=r(s),u=c[0],d=c[1];o(u,d)||(a=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(d?i(t,"top",t.scrollTop-d*e.settings.wheelSpeed):i(t,"top",t.scrollTop+u*e.settings.wheelSpeed),a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?i(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):i(t,"left",t.scrollLeft-d*e.settings.wheelSpeed),a=!0):(i(t,"top",t.scrollTop-d*e.settings.wheelSpeed),i(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),l(t),a=a||n(u,d),a&&(s.stopPropagation(),s.preventDefault()));}var a=!1;"undefined"!=typeof window.onwheel?e.event.bind(t,"wheel",s):"undefined"!=typeof window.onmousewheel&&e.event.bind(t,"mousewheel",s);}var o=t("../instances"),l=t("../update-geometry"),i=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e);};},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,n){function r(t,e){e.event.bind(t,"scroll",function(){l(t);});}var o=t("../instances"),l=t("../update-geometry");e.exports=function(t){var e=o.get(t);r(t,e);};},{"../instances":18,"../update-geometry":19}],15:[function(t,e,n){function r(t,e){function n(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer;}function r(){c||(c=setInterval(function(){return l.get(t)?(s(t,"top",t.scrollTop+u.top),s(t,"left",t.scrollLeft+u.left),void i(t)):void clearInterval(c);},50));}function a(){c&&(clearInterval(c),c=null),o.stopScrolling(t);}var c=null,u={top:0,left:0},d=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(n())?d=!0:(d=!1,a());}),e.event.bind(window,"mouseup",function(){d&&(d=!1,a());}),e.event.bind(window,"keyup",function(){d&&(d=!1,a());}),e.event.bind(window,"mousemove",function(e){if(d){var n={x:e.pageX,y:e.pageY},l={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};n.x<l.left+3?(u.left=-5,o.startScrolling(t,"x")):n.x>l.right-3?(u.left=5,o.startScrolling(t,"x")):u.left=0,n.y<l.top+3?(l.top+3-n.y<5?u.top=-5:u.top=-20,o.startScrolling(t,"y")):n.y>l.bottom-3?(n.y-l.bottom+3<5?u.top=5:u.top=20,o.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?a():r();}});}var o=t("../../lib/helper"),l=t("../instances"),i=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=l.get(t);r(t,e);};},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,n){function r(t,e,n,r){function o(n,r){var o=t.scrollTop,l=t.scrollLeft,i=Math.abs(n),s=Math.abs(r);if(s>i){if(r<0&&o===e.contentHeight-e.containerHeight||r>0&&0===o){return !e.settings.swipePropagation;}}else{if(i>s&&(n<0&&l===e.contentWidth-e.containerWidth||n>0&&0===l)){return !e.settings.swipePropagation;}}return !0;}function a(e,n){s(t,"top",t.scrollTop-n),s(t,"left",t.scrollLeft-e),i(t);}function c(){w=!0;}function u(){w=!1;}function d(t){return t.targetTouches?t.targetTouches[0]:t;}function p(t){return !(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE);}function f(t){if(p(t)){Y=!0;var e=d(t);g.pageX=e.pageX,g.pageY=e.pageY,v=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation();}}function h(t){if(!Y&&e.settings.swipePropagation&&f(t),!w&&Y&&p(t)){var n=d(t),r={pageX:n.pageX,pageY:n.pageY},l=r.pageX-g.pageX,i=r.pageY-g.pageY;a(l,i),g=r;var s=(new Date).getTime(),c=s-v;c>0&&(m.x=l/c,m.y=i/c,v=s),o(l,i)&&(t.stopPropagation(),t.preventDefault());}}function b(){!w&&Y&&(Y=!1,clearInterval(y),y=setInterval(function(){return l.get(t)&&(m.x||m.y)?Math.abs(m.x)<0.01&&Math.abs(m.y)<0.01?void clearInterval(y):(a(30*m.x,30*m.y),m.x*=0.8,void (m.y*=0.8)):void clearInterval(y);},10));}var g={},v=0,m={},y=null,w=!1,Y=!1;n&&(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",b)),r&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",b)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",b)));}var o=t("../../lib/helper"),l=t("../instances"),i=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){if(o.env.supportsTouch||o.env.supportsIePointer){var e=l.get(t);r(t,e,o.env.supportsTouch,o.env.supportsIePointer);}};},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,n){var r=t("../lib/helper"),o=t("../lib/class"),l=t("./instances"),i=t("./update-geometry"),s={"click-rail":t("./handler/click-rail"),"drag-scrollbar":t("./handler/drag-scrollbar"),keyboard:t("./handler/keyboard"),wheel:t("./handler/mouse-wheel"),touch:t("./handler/touch"),selection:t("./handler/selection")},a=t("./handler/native-scroll");e.exports=function(t,e){e="object"==typeof e?e:{},o.add(t,"ps-container");var n=l.add(t);n.settings=r.extend(n.settings,e),o.add(t,"ps-theme-"+n.settings.theme),n.settings.handlers.forEach(function(e){s[e](t);}),a(t),i(t);};},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){function r(t){function e(){a.add(t,"ps-focus");}function n(){a.remove(t,"ps-focus");}var r=this;r.settings=s.clone(c),r.containerWidth=null,r.containerHeight=null,r.contentWidth=null,r.contentHeight=null,r.isRtl="rtl"===u.css(t,"direction"),r.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n;}(),r.negativeScrollAdjustment=r.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.event=new d,r.ownerDocument=t.ownerDocument||document,r.scrollbarXRail=u.appendTo(u.e("div","ps-scrollbar-x-rail"),t),r.scrollbarX=u.appendTo(u.e("div","ps-scrollbar-x"),r.scrollbarXRail),r.scrollbarX.setAttribute("tabindex",0),r.event.bind(r.scrollbarX,"focus",e),r.event.bind(r.scrollbarX,"blur",n),r.scrollbarXActive=null,r.scrollbarXWidth=null,r.scrollbarXLeft=null,r.scrollbarXBottom=s.toInt(u.css(r.scrollbarXRail,"bottom")),r.isScrollbarXUsingBottom=r.scrollbarXBottom===r.scrollbarXBottom,r.scrollbarXTop=r.isScrollbarXUsingBottom?null:s.toInt(u.css(r.scrollbarXRail,"top")),r.railBorderXWidth=s.toInt(u.css(r.scrollbarXRail,"borderLeftWidth"))+s.toInt(u.css(r.scrollbarXRail,"borderRightWidth")),u.css(r.scrollbarXRail,"display","block"),r.railXMarginWidth=s.toInt(u.css(r.scrollbarXRail,"marginLeft"))+s.toInt(u.css(r.scrollbarXRail,"marginRight")),u.css(r.scrollbarXRail,"display",""),r.railXWidth=null,r.railXRatio=null,r.scrollbarYRail=u.appendTo(u.e("div","ps-scrollbar-y-rail"),t),r.scrollbarY=u.appendTo(u.e("div","ps-scrollbar-y"),r.scrollbarYRail),r.scrollbarY.setAttribute("tabindex",0),r.event.bind(r.scrollbarY,"focus",e),r.event.bind(r.scrollbarY,"blur",n),r.scrollbarYActive=null,r.scrollbarYHeight=null,r.scrollbarYTop=null,r.scrollbarYRight=s.toInt(u.css(r.scrollbarYRail,"right")),r.isScrollbarYUsingRight=r.scrollbarYRight===r.scrollbarYRight,r.scrollbarYLeft=r.isScrollbarYUsingRight?null:s.toInt(u.css(r.scrollbarYRail,"left")),r.scrollbarYOuterWidth=r.isRtl?s.outerWidth(r.scrollbarY):null,r.railBorderYWidth=s.toInt(u.css(r.scrollbarYRail,"borderTopWidth"))+s.toInt(u.css(r.scrollbarYRail,"borderBottomWidth")),u.css(r.scrollbarYRail,"display","block"),r.railYMarginHeight=s.toInt(u.css(r.scrollbarYRail,"marginTop"))+s.toInt(u.css(r.scrollbarYRail,"marginBottom")),u.css(r.scrollbarYRail,"display",""),r.railYHeight=null,r.railYRatio=null;}function o(t){return t.getAttribute("data-ps-id");}function l(t,e){t.setAttribute("data-ps-id",e);}function i(t){t.removeAttribute("data-ps-id");}var s=t("../lib/helper"),a=t("../lib/class"),c=t("./default-setting"),u=t("../lib/dom"),d=t("../lib/event-manager"),p=t("../lib/guid"),f={};n.add=function(t){var e=p();return l(t,e),f[e]=new r(t),f[e];},n.remove=function(t){delete f[o(t)],i(t);},n.get=function(t){return f[o(t)];};},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,n){function r(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e;}function o(t,e){var n={width:e.railXWidth};e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,s.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,s.css(e.scrollbarYRail,r),s.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),s.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth});}var l=t("../lib/helper"),i=t("../lib/class"),s=t("../lib/dom"),a=t("./instances"),c=t("./update-scroll");e.exports=function(t){var e=a.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var n;t.contains(e.scrollbarXRail)||(n=s.queryChildren(t,".ps-scrollbar-x-rail"),n.length>0&&n.forEach(function(t){s.remove(t);}),s.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(n=s.queryChildren(t,".ps-scrollbar-y-rail"),n.length>0&&n.forEach(function(t){s.remove(t);}),s.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=r(e,l.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=l.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=r(e,l.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=l.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),o(t,e),e.scrollbarXActive?i.add(t,"ps-active-x"):(i.remove(t,"ps-active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,c(t,"left",0)),e.scrollbarYActive?i.add(t,"ps-active-y"):(i.remove(t,"ps-active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,c(t,"top",0));};},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,n){var r,o,l=t("./instances"),i=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e;};e.exports=function(t,e,n){if("undefined"==typeof t){throw"You must provide an element to the update-scroll function";}if("undefined"==typeof e){throw"You must provide an axis to the update-scroll function";}if("undefined"==typeof n){throw"You must provide a value to the update-scroll function";}"top"===e&&n<=0&&(t.scrollTop=n=0,t.dispatchEvent(i("ps-y-reach-start"))),"left"===e&&n<=0&&(t.scrollLeft=n=0,t.dispatchEvent(i("ps-x-reach-start")));var s=l.get(t);"top"===e&&n>=s.contentHeight-s.containerHeight&&(n=s.contentHeight-s.containerHeight,n-t.scrollTop<=1?n=t.scrollTop:t.scrollTop=n,t.dispatchEvent(i("ps-y-reach-end"))),"left"===e&&n>=s.contentWidth-s.containerWidth&&(n=s.contentWidth-s.containerWidth,n-t.scrollLeft<=1?n=t.scrollLeft:t.scrollLeft=n,t.dispatchEvent(i("ps-x-reach-end"))),r||(r=t.scrollTop),o||(o=t.scrollLeft),"top"===e&&n<r&&t.dispatchEvent(i("ps-scroll-up")),"top"===e&&n>r&&t.dispatchEvent(i("ps-scroll-down")),"left"===e&&n<o&&t.dispatchEvent(i("ps-scroll-left")),"left"===e&&n>o&&t.dispatchEvent(i("ps-scroll-right")),"top"===e&&(t.scrollTop=r=n,t.dispatchEvent(i("ps-scroll-y"))),"left"===e&&(t.scrollLeft=o=n,t.dispatchEvent(i("ps-scroll-x")));};},{"./instances":18}],21:[function(t,e,n){var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances"),i=t("./update-geometry"),s=t("./update-scroll");e.exports=function(t){var e=l.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.css(e.scrollbarXRail,"display","block"),o.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=r.toInt(o.css(e.scrollbarXRail,"marginLeft"))+r.toInt(o.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=r.toInt(o.css(e.scrollbarYRail,"marginTop"))+r.toInt(o.css(e.scrollbarYRail,"marginBottom")),o.css(e.scrollbarXRail,"display","none"),o.css(e.scrollbarYRail,"display","none"),i(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),o.css(e.scrollbarXRail,"display",""),o.css(e.scrollbarYRail,"display",""));};},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]);(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{if(typeof exports!=="undefined"){module.exports=factory(require("jquery"));}else{factory(jQuery);}}}(function($){var Slick=window.Slick||{};Slick=(function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(slider,i){return $('<button type="button" />').text(i+1);},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:0.35,fade:false,focusOnSelect:false,focusOnChange:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:false,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,swiping:false,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.focussed=false;_.interrupted=false;_.hidden="hidden";_.paused=true;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange="visibilitychange";_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data("slick")||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=="undefined"){_.hidden="mozHidden";_.visibilityChange="mozvisibilitychange";}else{if(typeof document.webkitHidden!=="undefined"){_.hidden="webkitHidden";_.visibilityChange="webkitvisibilitychange";}}_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true);}return Slick;}());Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({"tabindex":"0"});};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof(index)==="boolean"){addBefore=index;index=null;}else{if(index<0||(index>=_.slideCount)){return false;}}_.unload();if(typeof(index)==="number"){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack);}else{if(addBefore){$(markup).insertBefore(_.$slides.eq(index));}else{$(markup).insertAfter(_.$slides.eq(index));}}}else{if(addBefore===true){$(markup).prependTo(_.$slideTrack);}else{$(markup).appendTo(_.$slideTrack);}}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr("data-slick-index",index);});_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed);}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false){targetLeft=-targetLeft;}if(_.transformsEnabled===false){if(_.options.vertical===false){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback);}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback);}}else{if(_.cssTransitions===false){if(_.options.rtl===true){_.currentLeft=-(_.currentLeft);}$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]="translate("+now+"px, 0px)";_.$slideTrack.css(animProps);}else{animProps[_.animType]="translate(0px,"+now+"px)";_.$slideTrack.css(animProps);}},complete:function(){if(callback){callback.call();}}});}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false){animProps[_.animType]="translate3d("+targetLeft+"px, 0px, 0px)";}else{animProps[_.animType]="translate3d(0px,"+targetLeft+"px, 0px)";}_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call();},_.options.speed);}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider);}return asNavFor;};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&typeof asNavFor==="object"){asNavFor.each(function(){var target=$(this).slick("getSlick");if(!target.unslicked){target.slideHandler(index,true);}});}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false){transition[_.transitionType]=_.transformType+" "+_.options.speed+"ms "+_.options.cssEase;}else{transition[_.transitionType]="opacity "+_.options.speed+"ms "+_.options.cssEase;}if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed);}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer);}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===false){if(_.direction===1&&(_.currentSlide+1)===(_.slideCount-1)){_.direction=0;}else{if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1;}}}}_.slideHandler(slideTo);}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass("slick-arrow");_.$nextArrow=$(_.options.nextArrow).addClass("slick-arrow");if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");_.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows);}if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows);}if(_.options.infinite!==true){_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true");}}else{_.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true","tabindex":"-1"});}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===true){_.$slider.addClass("slick-dotted");dot=$("<ul />").addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($("<li />").append(_.options.customPaging.call(this,_,i)));}_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find("li").first().addClass("slick-active");}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+":not(.slick-cloned)").addClass("slick-slide");_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr("data-slick-index",index).data("originalStyling",$(element).attr("style")||"");});_.$slider.addClass("slick-slider");_.$slideTrack=(_.slideCount===0)?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div class="slick-list"/>').parent();_.$slideTrack.css("opacity",0);if(_.options.centerMode===true||_.options.swipeToSlide===true){_.options.slidesToScroll=1;}$("img[data-lazy]",_.$slider).not("[src]").addClass("slick-loading");_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==="number"?_.currentSlide:0);if(_.options.draggable===true){_.$list.addClass("draggable");}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>1){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement("div");for(b=0;b<_.options.rows;b++){var row=document.createElement("div");for(c=0;c<_.options.slidesPerRow;c++){var target=(a*slidesPerSection+((b*_.options.slidesPerRow)+c));if(originalSlides.get(target)){row.appendChild(originalSlides.get(target));}}slide.appendChild(row);}newSlides.appendChild(slide);}_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({"width":(100/_.options.slidesPerRow)+"%","display":"inline-block"});}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false;var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==="window"){respondToWidth=windowWidth;}else{if(_.respondTo==="slider"){respondToWidth=sliderWidth;}else{if(_.respondTo==="min"){respondToWidth=Math.min(windowWidth,sliderWidth);}}}if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}}}if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==="unslick"){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);}triggerBreakpoint=targetBreakpoint;}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==="unslick"){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);}triggerBreakpoint=targetBreakpoint;}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);triggerBreakpoint=targetBreakpoint;}}if(!initial&&triggerBreakpoint!==false){_.$slider.trigger("breakpoint",[_,triggerBreakpoint]);}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;if($target.is("a")){event.preventDefault();}if(!$target.is("li")){$target=$target.closest("li");}unevenOffset=(_.slideCount%_.options.slidesToScroll!==0);indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case"previous":slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate);}break;case"next":slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate);}break;case"index":var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger("focus");break;default:return;}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1];}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break;}prevNavigable=navigables[n];}}return index;};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$("li",_.$dots).off("click.slick",_.changeSlide).off("mouseenter.slick",$.proxy(_.interrupt,_,true)).off("mouseleave.slick",$.proxy(_.interrupt,_,false));if(_.options.accessibility===true){_.$dots.off("keydown.slick",_.keyHandler);}}_.$slider.off("focus.slick blur.slick");if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off("click.slick",_.changeSlide);_.$nextArrow&&_.$nextArrow.off("click.slick",_.changeSlide);if(_.options.accessibility===true){_.$prevArrow&&_.$prevArrow.off("keydown.slick",_.keyHandler);_.$nextArrow&&_.$nextArrow.off("keydown.slick",_.keyHandler);}}_.$list.off("touchstart.slick mousedown.slick",_.swipeHandler);_.$list.off("touchmove.slick mousemove.slick",_.swipeHandler);_.$list.off("touchend.slick mouseup.slick",_.swipeHandler);_.$list.off("touchcancel.slick mouseleave.slick",_.swipeHandler);_.$list.off("click.slick",_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===true){_.$list.off("keydown.slick",_.keyHandler);}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().off("click.slick",_.selectHandler);}$(window).off("orientationchange.slick.slick-"+_.instanceUid,_.orientationChange);$(window).off("resize.slick.slick-"+_.instanceUid,_.resize);$("[draggable!=true]",_.$slideTrack).off("dragstart",_.preventDefault);$(window).off("load.slick.slick-"+_.instanceUid,_.setPosition);};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off("mouseenter.slick",$.proxy(_.interrupt,_,true));_.$list.off("mouseleave.slick",$.proxy(_.interrupt,_,false));};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>1){originalSlides=_.$slides.children().children();originalSlides.removeAttr("style");_.$slider.empty().append(originalSlides);}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault();}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$(".slick-cloned",_.$slider).detach();if(_.$dots){_.$dots.remove();}if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}}if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}}if(_.$slides){_.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){$(this).attr("style",$(this).data("originalStyling"));});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides);}_.cleanUpRows();_.$slider.removeClass("slick-slider");_.$slider.removeClass("slick-initialized");_.$slider.removeClass("slick-dotted");_.unslicked=true;if(!refresh){_.$slider.trigger("destroy",[_]);}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]="";if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call();},_.options.speed);}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2});}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(event){event.stopImmediatePropagation();var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){_.focussed=$sf.is(":focus");_.autoPlay();}},0);});};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide;};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===true){if(_.slideCount<=_.options.slidesToShow){++pagerQty;}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}}else{if(_.options.centerMode===true){pagerQty=_.slideCount;}else{if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll);}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}}}return pagerQty-1;};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide,coef;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=(_.slideWidth*_.options.slidesToShow)*-1;coef=-1;if(_.options.vertical===true&&_.options.centerMode===true){if(_.options.slidesToShow===2){coef=-1.5;}else{if(_.options.slidesToShow===1){coef=-2;}}}verticalOffset=(verticalHeight*_.options.slidesToShow)*coef;}if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth)*-1;verticalOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight)*-1;}else{_.slideOffset=((_.slideCount%_.options.slidesToScroll)*_.slideWidth)*-1;verticalOffset=((_.slideCount%_.options.slidesToScroll)*verticalHeight)*-1;}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*_.slideWidth;verticalOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*verticalHeight;}}if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0;}if(_.options.centerMode===true&&_.slideCount<=_.options.slidesToShow){_.slideOffset=((_.slideWidth*Math.floor(_.options.slidesToShow))/2)-((_.slideWidth*_.slideCount)/2);}else{if(_.options.centerMode===true&&_.options.infinite===true){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth;}else{if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2);}}}if(_.options.vertical===false){targetLeft=((slideIndex*_.slideWidth)*-1)+_.slideOffset;}else{targetLeft=((slideIndex*verticalHeight)*-1)+verticalOffset;}if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex);}else{targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow);}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex);}else{targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow+1);}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2;}}return targetLeft;};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option];};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false){max=_.slideCount;}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2;}while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}return indexes;};Slick.prototype.getSlick=function(){return this;};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,centerOffset;centerOffset=_.options.centerMode===true?_.slideWidth*Math.floor(_.options.slidesToShow/2):0;if(_.options.swipeToSlide===true){_.$slideTrack.find(".slick-slide").each(function(index,slide){if(slide.offsetLeft-centerOffset+($(slide).outerWidth()/2)>(_.swipeLeft*-1)){swipedSlide=slide;return false;}});slidesTraversed=Math.abs($(swipedSlide).attr("data-slick-index")-_.currentSlide)||1;return slidesTraversed;}else{return _.options.slidesToScroll;}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:"index",index:parseInt(slide)}},dontAnimate);};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass("slick-initialized")){$(_.$slider).addClass("slick-initialized");_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler();}if(creation){_.$slider.trigger("init",[_]);}if(_.options.accessibility===true){_.initADA();}if(_.options.autoplay){_.paused=false;_.autoPlay();}};Slick.prototype.initADA=function(){var _=this,numDotGroups=Math.ceil(_.slideCount/_.options.slidesToShow),tabControlIndexes=_.getNavigableIndexes().filter(function(val){return(val>=0)&&(val<_.slideCount);});_.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true","tabindex":"-1"}).find("a, input, button, select").attr({"tabindex":"-1"});if(_.$dots!==null){_.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function(i){var slideControlIndex=tabControlIndexes.indexOf(i);$(this).attr({"role":"tabpanel","id":"slick-slide"+_.instanceUid+i,"tabindex":-1});if(slideControlIndex!==-1){$(this).attr({"aria-describedby":"slick-slide-control"+_.instanceUid+slideControlIndex});}});_.$dots.attr("role","tablist").find("li").each(function(i){var mappedSlideIndex=tabControlIndexes[i];$(this).attr({"role":"presentation"});$(this).find("button").first().attr({"role":"tab","id":"slick-slide-control"+_.instanceUid+i,"aria-controls":"slick-slide"+_.instanceUid+mappedSlideIndex,"aria-label":(i+1)+" of "+numDotGroups,"aria-selected":null,"tabindex":"-1"});}).eq(_.currentSlide).find("button").attr({"aria-selected":"true","tabindex":"0"}).end();}for(var i=_.currentSlide,max=i+_.options.slidesToShow;i<max;i++){_.$slides.eq(i).attr("tabindex",0);}_.activateADA();};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},_.changeSlide);_.$nextArrow.off("click.slick").on("click.slick",{message:"next"},_.changeSlide);if(_.options.accessibility===true){_.$prevArrow.on("keydown.slick",_.keyHandler);_.$nextArrow.on("keydown.slick",_.keyHandler);}}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true){$("li",_.$dots).on("click.slick",{message:"index"},_.changeSlide);if(_.options.accessibility===true){_.$dots.on("keydown.slick",_.keyHandler);}}if(_.options.dots===true&&_.options.pauseOnDotsHover===true){$("li",_.$dots).on("mouseenter.slick",$.proxy(_.interrupt,_,true)).on("mouseleave.slick",$.proxy(_.interrupt,_,false));}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on("mouseenter.slick",$.proxy(_.interrupt,_,true));_.$list.on("mouseleave.slick",$.proxy(_.interrupt,_,false));}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on("touchstart.slick mousedown.slick",{action:"start"},_.swipeHandler);_.$list.on("touchmove.slick mousemove.slick",{action:"move"},_.swipeHandler);_.$list.on("touchend.slick mouseup.slick",{action:"end"},_.swipeHandler);_.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},_.swipeHandler);_.$list.on("click.slick",_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===true){_.$list.on("keydown.slick",_.keyHandler);}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on("click.slick",_.selectHandler);}$(window).on("orientationchange.slick.slick-"+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on("resize.slick.slick-"+_.instanceUid,$.proxy(_.resize,_));$("[draggable!=true]",_.$slideTrack).on("dragstart",_.preventDefault);$(window).on("load.slick.slick-"+_.instanceUid,_.setPosition);$(_.setPosition);};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show();}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.show();}};Slick.prototype.keyHandler=function(event){var _=this;if(!event.target.tagName.match("TEXTAREA|INPUT|SELECT")){if(event.keyCode===37&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?"next":"previous"}});}else{if(event.keyCode===39&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?"previous":"next"}});}}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$("img[data-lazy]",imagesScope).each(function(){var image=$(this),imageSource=$(this).attr("data-lazy"),imageSrcSet=$(this).attr("data-srcset"),imageSizes=$(this).attr("data-sizes")||_.$slider.attr("data-sizes"),imageToLoad=document.createElement("img");imageToLoad.onload=function(){image.animate({opacity:0},100,function(){if(imageSrcSet){image.attr("srcset",imageSrcSet);if(imageSizes){image.attr("sizes",imageSizes);}}image.attr("src",imageSource).animate({opacity:1},200,function(){image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");});_.$slider.trigger("lazyLoaded",[_,image,imageSource]);});};imageToLoad.onerror=function(){image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");_.$slider.trigger("lazyLoadError",[_,image,imageSource]);};imageToLoad.src=imageSource;});}if(_.options.centerMode===true){if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2;}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide;}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===true){if(rangeStart>0){rangeStart--;}if(rangeEnd<=_.slideCount){rangeEnd++;}}}loadRange=_.$slider.find(".slick-slide").slice(rangeStart,rangeEnd);if(_.options.lazyLoad==="anticipated"){var prevSlide=rangeStart-1,nextSlide=rangeEnd,$slides=_.$slider.find(".slick-slide");for(var i=0;i<_.options.slidesToScroll;i++){if(prevSlide<0){prevSlide=_.slideCount-1;}loadRange=loadRange.add($slides.eq(prevSlide));loadRange=loadRange.add($slides.eq(nextSlide));prevSlide--;nextSlide++;}}loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find(".slick-slide");loadImages(cloneRange);}else{if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find(".slick-cloned").slice(0,_.options.slidesToShow);loadImages(cloneRange);}else{if(_.currentSlide===0){cloneRange=_.$slider.find(".slick-cloned").slice(_.options.slidesToShow*-1);loadImages(cloneRange);}}}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass("slick-loading");_.initUI();if(_.options.lazyLoad==="progressive"){_.progressiveLazyLoad();}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:"next"}});};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition();};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true;};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=true;_.paused=false;_.focussed=false;_.interrupted=false;};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger("afterChange",[_,index]);_.animating=false;if(_.slideCount>_.options.slidesToShow){_.setPosition();}_.swipeLeft=null;if(_.options.autoplay){_.autoPlay();}if(_.options.accessibility===true){_.initADA();if(_.options.focusOnChange){var $currentSlide=$(_.$slides.get(_.currentSlide));$currentSlide.attr("tabindex",0).focus();}}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:"previous"}});};Slick.prototype.preventDefault=function(event){event.preventDefault();};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$("img[data-lazy]",_.$slider),image,imageSource,imageSrcSet,imageSizes,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr("data-lazy");imageSrcSet=image.attr("data-srcset");imageSizes=image.attr("data-sizes")||_.$slider.attr("data-sizes");imageToLoad=document.createElement("img");imageToLoad.onload=function(){if(imageSrcSet){image.attr("srcset",imageSrcSet);if(imageSizes){image.attr("sizes",imageSizes);}}image.attr("src",imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");if(_.options.adaptiveHeight===true){_.setPosition();}_.$slider.trigger("lazyLoaded",[_,image,imageSource]);_.progressiveLazyLoad();};imageToLoad.onerror=function(){if(tryCount<3){setTimeout(function(){_.progressiveLazyLoad(tryCount+1);},500);}else{image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");_.$slider.trigger("lazyLoadError",[_,image,imageSource]);_.progressiveLazyLoad();}};imageToLoad.src=imageSource;}else{_.$slider.trigger("allImagesLoaded",[_]);}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;if(!_.options.infinite&&(_.currentSlide>lastVisibleIndex)){_.currentSlide=lastVisibleIndex;}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:"index",index:currentSlide}},false);}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==="array"&&responsiveSettings.length){_.respondTo=_.options.respondTo||"window";for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;if(responsiveSettings.hasOwnProperty(breakpoint)){currentBreakpoint=responsiveSettings[breakpoint].breakpoint;while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1);}l--;}_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings;}}_.breakpoints.sort(function(a,b){return(_.options.mobileFirst)?a-b:b-a;});}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass("slick-slide");_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll;}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on("click.slick",_.selectHandler);}_.setSlideClasses(typeof _.currentSlide==="number"?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger("reInit",[_]);};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition();}},50);}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof(index)==="boolean"){removeBefore=index;index=removeBefore===true?0:_.slideCount-1;}else{index=removeBefore===true?--index:index;}if(_.slideCount<1||index<0||index>_.slideCount-1){return false;}_.unload();if(removeAll===true){_.$slideTrack.children().remove();}else{_.$slideTrack.children(this.options.slide).eq(index).remove();}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true){position=-position;}x=_.positionProp=="left"?Math.ceil(position)+"px":"0px";y=_.positionProp=="top"?Math.ceil(position)+"px":"0px";positionProps[_.positionProp]=position;if(_.transformsEnabled===false){_.$slideTrack.css(positionProps);}else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]="translate("+x+", "+y+")";_.$slideTrack.css(positionProps);}else{positionProps[_.animType]="translate3d("+x+", "+y+", 0px)";_.$slideTrack.css(positionProps);}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true){_.$list.css({padding:("0px "+_.options.centerPadding)});}}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true){_.$list.css({padding:(_.options.centerPadding+" 0px")});}}_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil((_.slideWidth*_.$slideTrack.children(".slick-slide").length)));}else{if(_.options.variableWidth===true){_.$slideTrack.width(5000*_.slideCount);}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true)*_.$slideTrack.children(".slick-slide").length)));}}var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false){_.$slideTrack.children(".slick-slide").width(_.slideWidth-offset);}};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=(_.slideWidth*index)*-1;if(_.options.rtl===true){$(element).css({position:"relative",right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}else{$(element).css({position:"relative",left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1});};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css("height",targetHeight);}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){var _=this,l,item,option,value,refresh=false,type;if($.type(arguments[0])==="object"){option=arguments[0];refresh=arguments[1];type="multiple";}else{if($.type(arguments[0])==="string"){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==="responsive"&&$.type(arguments[1])==="array"){type="responsive";}else{if(typeof arguments[1]!=="undefined"){type="single";}}}}if(type==="single"){_.options[option]=value;}else{if(type==="multiple"){$.each(option,function(opt,val){_.options[opt]=val;});}else{if(type==="responsive"){for(item in value){if($.type(_.options.responsive)!=="array"){_.options.responsive=[value[item]];}else{l=_.options.responsive.length-1;while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1);}l--;}_.options.responsive.push(value[item]);}}}}}if(refresh){_.unload();_.reinit();}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false){_.setCSS(_.getLeft(_.currentSlide));}else{_.setFade();}_.$slider.trigger("setPosition",[_]);};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?"top":"left";if(_.positionProp==="top"){_.$slider.addClass("slick-vertical");}else{_.$slider.removeClass("slick-vertical");}if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===true){_.cssTransitions=true;}}if(_.options.fade){if(typeof _.options.zIndex==="number"){if(_.options.zIndex<3){_.options.zIndex=3;}}else{_.options.zIndex=_.defaults.zIndex;}}if(bodyStyle.OTransform!==undefined){_.animType="OTransform";_.transformType="-o-transform";_.transitionType="OTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined){_.animType=false;}}if(bodyStyle.MozTransform!==undefined){_.animType="MozTransform";_.transformType="-moz-transform";_.transitionType="MozTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined){_.animType=false;}}if(bodyStyle.webkitTransform!==undefined){_.animType="webkitTransform";_.transformType="-webkit-transform";_.transitionType="webkitTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined){_.animType=false;}}if(bodyStyle.msTransform!==undefined){_.animType="msTransform";_.transformType="-ms-transform";_.transitionType="msTransition";if(bodyStyle.msTransform===undefined){_.animType=false;}}if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType="transform";_.transformType="transform";_.transitionType="transition";}_.transformsEnabled=_.options.useTransform&&(_.animType!==null&&_.animType!==false);};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");_.$slides.eq(index).addClass("slick-current");if(_.options.centerMode===true){var evenCoef=_.options.slidesToShow%2===0?1:0;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=(_.slideCount-1)-centerOffset){_.$slides.slice(index-centerOffset+evenCoef,index+centerOffset+1).addClass("slick-active").attr("aria-hidden","false");}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1+evenCoef,indexOffset+centerOffset+2).addClass("slick-active").attr("aria-hidden","false");}if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass("slick-center");}else{if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass("slick-center");}}}_.$slides.eq(index).addClass("slick-center");}else{if(index>=0&&index<=(_.slideCount-_.options.slidesToShow)){_.$slides.slice(index,index+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false");}else{if(allSlides.length<=_.options.slidesToShow){allSlides.addClass("slick-active").attr("aria-hidden","false");}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&(_.slideCount-index)<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass("slick-active").attr("aria-hidden","false");}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false");}}}}if(_.options.lazyLoad==="ondemand"||_.options.lazyLoad==="anticipated"){_.lazyLoad();}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true){_.options.centerMode=false;}if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true){infiniteCount=_.options.slidesToShow+1;}else{infiniteCount=_.options.slidesToShow;}for(i=_.slideCount;i>(_.slideCount-infiniteCount);i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr("id","").attr("data-slick-index",slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned");}for(i=0;i<infiniteCount+_.slideCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr("id","").attr("data-slick-index",slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned");}_.$slideTrack.find(".slick-cloned").find("[id]").each(function(){$(this).attr("id","");});}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay();}_.interrupted=toggle;};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is(".slick-slide")?$(event.target):$(event.target).parents(".slick-slide");var index=parseInt(targetElement.attr("data-slick-index"));if(!index){index=0;}if(_.slideCount<=_.options.slidesToShow){_.slideHandler(index,false,true);return;}_.slideHandler(index);};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true){return;}if(_.options.fade===true&&_.currentSlide===index){return;}if(sync===false){_.asNavFor(index);}targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}return;}else{if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>(_.slideCount-_.options.slidesToScroll))){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}return;}}if(_.options.autoplay){clearInterval(_.autoPlayTimer);}if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-(_.slideCount%_.options.slidesToScroll);}else{animSlide=_.slideCount+targetSlide;}}else{if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0;}else{animSlide=targetSlide-_.slideCount;}}else{animSlide=targetSlide;}}_.animating=true;_.$slider.trigger("beforeChange",[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick("getSlick");if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide);}}_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}_.animateHeight();return;}if(dontAnimate!==true){_.animateSlide(targetLeft,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide();}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.hide();}_.$slider.addClass("slick-loading");};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle);}if((swipeAngle<=45)&&(swipeAngle>=0)){return(_.options.rtl===false?"left":"right");}if((swipeAngle<=360)&&(swipeAngle>=315)){return(_.options.rtl===false?"left":"right");}if((swipeAngle>=135)&&(swipeAngle<=225)){return(_.options.rtl===false?"right":"left");}if(_.options.verticalSwiping===true){if((swipeAngle>=35)&&(swipeAngle<=135)){return"down";}else{return"up";}}return"vertical";};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=false;_.swiping=false;if(_.scrolling){_.scrolling=false;return false;}_.interrupted=false;_.shouldClick=(_.touchObject.swipeLength>10)?false:true;if(_.touchObject.curX===undefined){return false;}if(_.touchObject.edgeHit===true){_.$slider.trigger("edge",[_,_.swipeDirection()]);}if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case"left":case"down":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case"right":case"up":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}if(direction!="vertical"){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger("swipe",[_,direction]);}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={};}}};Slick.prototype.swipeHandler=function(event){var _=this;if((_.options.swipe===false)||("ontouchend" in document&&_.options.swipe===false)){return;}else{if(_.options.draggable===false&&event.type.indexOf("mouse")!==-1){return;}}_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold;}switch(event.data.action){case"start":_.swipeStart(event);break;case"move":_.swipeMove(event);break;case"end":_.swipeEnd(event);break;}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches,verticalSwipeLength;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||_.scrolling||touches&&touches.length!==1){return false;}curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));verticalSwipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));if(!_.options.verticalSwiping&&!_.swiping&&verticalSwipeLength>4){_.scrolling=true;return false;}if(_.options.verticalSwiping===true){_.touchObject.swipeLength=verticalSwipeLength;}swipeDirection=_.swipeDirection();if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){_.swiping=true;event.preventDefault();}positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1;}swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false){if((_.currentSlide===0&&swipeDirection==="right")||(_.currentSlide>=_.getDotCount()&&swipeDirection==="left")){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true;}}if(_.options.vertical===false){_.swipeLeft=curLeft+swipeLength*positionOffset;}else{_.swipeLeft=curLeft+(swipeLength*(_.$list.height()/_.listWidth))*positionOffset;}if(_.options.verticalSwiping===true){_.swipeLeft=curLeft+swipeLength*positionOffset;}if(_.options.fade===true||_.options.touchMove===false){return false;}if(_.animating===true){_.swipeLeft=null;return false;}_.setCSS(_.swipeLeft);};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=true;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false;}if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0];}_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true;};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.unload=function(){var _=this;$(".slick-cloned",_.$slider).remove();if(_.$dots){_.$dots.remove();}if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}_.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","");};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger("unslick",[_,fromBreakpoint]);_.destroy();};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false");if(_.currentSlide===0){_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false");}else{if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");}else{if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");}}}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find("li").removeClass("slick-active").end();_.$dots.find("li").eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass("slick-active");}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=true;}else{_.interrupted=false;}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(typeof opt=="object"||typeof opt=="undefined"){_[i].slick=new Slick(_[i],opt);}else{ret=_[i].slick[opt].apply(_[i].slick,args);}if(typeof ret!="undefined"){return ret;}}return _;};}));(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments);}function ba(a,b,c){if(!a){throw Error();}if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c);};}return function(){return a.apply(b,arguments);};}function n(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return n.apply(null,arguments);}var p=Date.now||function(){return +new Date;};function q(a,b){this.F=a;this.k=b||a;this.H=this.k.document;}var ca=!!window.FontFace;q.prototype.createElement=function(a,b,c){a=this.H.createElement(a);if(b){for(var d in b){b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));}}c&&a.appendChild(this.H.createTextNode(c));return a;};function s(a,b,c){a=a.H.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild);}function t(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1){if(b[e]===d[g]){f=!0;break;}}f||d.push(b[e]);}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1){if(d[e]===c[g]){f=!0;break;}}f||b.push(d[e]);}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"");}function u(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++){if(c[d]==b){return !0;}}return !1;}function v(a){if("string"===typeof a.fa){return a.fa;}var b=a.k.location.protocol;"about:"==b&&(b=a.F.location.protocol);return"https:"==b?"https:":"http:";}function x(a,b,c){function d(){l&&e&&f&&(l(g),l=null);}b=a.createElement("link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,l=c||null;ca?(b.onload=function(){e=!0;d();},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d();}):setTimeout(function(){e=!0;d();},0);s(a,"head",b);}function y(a,b,c,d){var e=a.H.getElementsByTagName("head")[0];if(e){var f=a.createElement("script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f));};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")));},d||5000);return f;}return null;}function z(){this.S=0;this.K=null;}function A(a){a.S++;return function(){a.S--;B(a);};}function C(a,b){a.K=b;B(a);}function B(a){0==a.S&&a.K&&(a.K(),a.K=null);}function D(a){this.ea=a||"-";}D.prototype.d=function(a){for(var b=[],c=0;c<arguments.length;c++){b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());}return b.join(this.ea);};function E(a,b){this.Q=a;this.M=4;this.L="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.L=c[1],this.M=parseInt(c[2],10));}E.prototype.getName=function(){return this.Q;};function da(a){return G(a)+" "+(a.M+"00")+" 300px "+H(a.Q);}function H(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d);}return b.join(",");}function I(a){return a.L+a.M;}function G(a){var b="normal";"o"===a.L?b="oblique":"i"===a.L&&(b="italic");return b;}function ea(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b;}function fa(a,b){this.a=a;this.j=a.k.document.documentElement;this.O=b;this.g="wf";this.e=new D("-");this.da=!1!==b.events;this.u=!1!==b.classes;}function ga(a){a.u&&t(a.j,[a.e.d(a.g,"loading")]);J(a,"loading");}function K(a){if(a.u){var b=u(a.j,a.e.d(a.g,"active")),c=[],d=[a.e.d(a.g,"loading")];b||c.push(a.e.d(a.g,"inactive"));t(a.j,c,d);}J(a,"inactive");}function J(a,b,c){if(a.da&&a.O[b]){if(c){a.O[b](c.getName(),I(c));}else{a.O[b]();}}}function ha(){this.t={};}function ia(a,b,c){var d=[],e;for(e in b){if(b.hasOwnProperty(e)){var f=a.t[e];f&&d.push(f(b[e],c));}}return d;}function L(a,b){this.a=a;this.h=b;this.m=this.a.createElement("span",{"aria-hidden":"true"},this.h);}function M(a,b){var c=a.m,d;d="display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+H(b.Q)+";"+("font-style:"+G(b)+";font-weight:"+(b.M+"00")+";");c.style.cssText=d;}function N(a){s(a.a,"body",a.m);}L.prototype.remove=function(){var a=this.m;a.parentNode&&a.parentNode.removeChild(a);};function O(a,b,c,d,e,f){this.G=a;this.J=b;this.f=d;this.a=c;this.v=e||3000;this.h=f||void 0;}O.prototype.start=function(){var a=this.a.k.document,b=this;Promise.race([new Promise(function(a,d){setTimeout(function(){d(b.f);},b.v);}),a.fonts.load(da(this.f),this.h)]).then(function(a){1===a.length?b.G(b.f):b.J(b.f);},function(){b.J(b.f);});};function P(a,b,c,d,e,f,g){this.G=a;this.J=b;this.a=c;this.f=d;this.h=g||"BESbswy";this.s={};this.v=e||3000;this.Z=f||null;this.D=this.C=this.A=this.w=null;this.w=new L(this.a,this.h);this.A=new L(this.a,this.h);this.C=new L(this.a,this.h);this.D=new L(this.a,this.h);M(this.w,new E(this.f.getName()+",serif",I(this.f)));M(this.A,new E(this.f.getName()+",sans-serif",I(this.f)));M(this.C,new E("serif",I(this.f)));M(this.D,new E("sans-serif",I(this.f)));N(this.w);N(this.A);N(this.C);N(this.D);}var Q={ia:"serif",ha:"sans-serif"},R=null;function S(){if(null===R){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);R=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10));}return R;}P.prototype.start=function(){this.s.serif=this.C.m.offsetWidth;this.s["sans-serif"]=this.D.m.offsetWidth;this.ga=p();T(this);};function ja(a,b,c){for(var d in Q){if(Q.hasOwnProperty(d)&&b===a.s[Q[d]]&&c===a.s[Q[d]]){return !0;}}return !1;}function T(a){var b=a.w.m.offsetWidth,c=a.A.m.offsetWidth,d;(d=b===a.s.serif&&c===a.s["sans-serif"])||(d=S()&&ja(a,b,c));d?p()-a.ga>=a.v?S()&&ja(a,b,c)&&(null===a.Z||a.Z.hasOwnProperty(a.f.getName()))?U(a,a.G):U(a,a.J):ka(a):U(a,a.G);}function ka(a){setTimeout(n(function(){T(this);},a),50);}function U(a,b){setTimeout(n(function(){this.w.remove();this.A.remove();this.C.remove();this.D.remove();b(this.f);},a),0);}function V(a,b,c){this.a=a;this.p=b;this.P=0;this.ba=this.Y=!1;this.v=c;}var la=!!window.FontFace;V.prototype.V=function(a){var b=this.p;b.u&&t(b.j,[b.e.d(b.g,a.getName(),I(a).toString(),"active")],[b.e.d(b.g,a.getName(),I(a).toString(),"loading"),b.e.d(b.g,a.getName(),I(a).toString(),"inactive")]);J(b,"fontactive",a);this.ba=!0;ma(this);};V.prototype.W=function(a){var b=this.p;if(b.u){var c=u(b.j,b.e.d(b.g,a.getName(),I(a).toString(),"active")),d=[],e=[b.e.d(b.g,a.getName(),I(a).toString(),"loading")];c||d.push(b.e.d(b.g,a.getName(),I(a).toString(),"inactive"));t(b.j,d,e);}J(b,"fontinactive",a);ma(this);};function ma(a){0==--a.P&&a.Y&&(a.ba?(a=a.p,a.u&&t(a.j,[a.e.d(a.g,"active")],[a.e.d(a.g,"loading"),a.e.d(a.g,"inactive")]),J(a,"active")):K(a.p));}function na(a){this.F=a;this.q=new ha;this.$=0;this.T=this.U=!0;}na.prototype.load=function(a){this.a=new q(this.F,a.context||this.F);this.U=!1!==a.events;this.T=!1!==a.classes;oa(this,new fa(this.a,a),a);};function pa(a,b,c,d,e){var f=0==--a.$;(a.T||a.U)&&setTimeout(function(){var a=e||null,l=d||null||{};if(0===c.length&&f){K(b.p);}else{b.P+=c.length;f&&(b.Y=f);var h,k=[];for(h=0;h<c.length;h++){var m=c[h],w=l[m.getName()],r=b.p,F=m;r.u&&t(r.j,[r.e.d(r.g,F.getName(),I(F).toString(),"loading")]);J(r,"fontloading",F);r=null;r=la?new O(n(b.V,b),n(b.W,b),b.a,m,b.v,w):new P(n(b.V,b),n(b.W,b),b.a,m,b.v,a,w);k.push(r);}for(h=0;h<k.length;h++){k[h].start();}}},0);}function oa(a,b,c){var d=[],e=c.timeout;ga(b);var d=ia(a.q,c,a.a),f=new V(a.a,b,e);a.$=d.length;b=0;for(c=d.length;b<c;b++){d[b].load(function(b,c,d){pa(a,f,b,c,d);});}}function qa(a,b,c){this.N=a?a:b+ra;this.o=[];this.R=[];this.ca=c||"";}var ra="//fonts.googleapis.com/css";function sa(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.R.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.o.push(e.join(f));}}qa.prototype.d=function(){if(0==this.o.length){throw Error("No fonts to load!");}if(-1!=this.N.indexOf("kit=")){return this.N;}for(var a=this.o.length,b=[],c=0;c<a;c++){b.push(this.o[c].replace(/ /g,"+"));}a=this.N+"?family="+b.join("%7C");0<this.R.length&&(a+="&subset="+this.R.join(","));0<this.ca.length&&(a+="&text="+encodeURIComponent(this.ca));return a;};function ta(a){this.o=a;this.aa=[];this.I={};}var ua={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},va={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},wa={i:"i",italic:"i",n:"n",normal:"n"},xa=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;ta.prototype.parse=function(){for(var a=this.o.length,b=0;b<a;b++){var c=this.o[b].split(":"),d=c[0].replace(/\+/g," "),e=["n4"];if(2<=c.length){var f;var g=c[1];f=[];if(g){for(var g=g.split(","),l=g.length,h=0;h<l;h++){var k;k=g[h];if(k.match(/^[\w-]+$/)){if(k=xa.exec(k.toLowerCase()),null==k){k="";}else{var m;m=k[1];if(null==m||""==m){m="4";}else{var w=va[m];m=w?w:isNaN(m)?"4":m.substr(0,1);}k=k[2];k=[null==k||""==k?"n":wa[k],m].join("");}}else{k="";}k&&f.push(k);}}0<f.length&&(e=f);3==c.length&&(c=c[2],f=[],c=c?c.split(","):f,0<c.length&&(c=ua[c[0]])&&(this.I[d]=c));}this.I[d]||(c=ua[d])&&(this.I[d]=c);for(c=0;c<e.length;c+=1){this.aa.push(new E(d,e[c]));}}};function ya(a,b){this.a=a;this.c=b;}var za={Arimo:!0,Cousine:!0,Tinos:!0};ya.prototype.load=function(a){var b=new z,c=this.a,d=new qa(this.c.api,v(c),this.c.text),e=this.c.families;sa(d,e);var f=new ta(e);f.parse();x(c,d.d(),A(b));C(b,function(){a(f.aa,f.I,za);});};function W(a,b){this.a=a;this.c=b;this.X=[];}W.prototype.B=function(a){var b=this.a;return v(this.a)+(this.c.api||"//f.fontdeck.com/s/css/js/")+(b.k.location.hostname||b.F.location.hostname)+"/"+a+".js";};W.prototype.load=function(a){var b=this.c.id,c=this.a.k,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,l=c.fonts.length;g<l;++g){var h=c.fonts[g];d.X.push(new E(h.name,ea("font-weight:"+h.weight+";font-style:"+h.style)));}a(d.X);},y(this.a,this.B(b),function(b){b&&a([]);})):a([]);};function X(a,b){this.a=a;this.c=b;}X.prototype.B=function(a){return(this.c.api||"https://use.typekit.net")+"/"+a+".js";};X.prototype.load=function(a){var b=this.c.id,c=this.a.k;b?y(this.a,this.B(b),function(b){if(b){a([]);}else{if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2){for(var g=b[f],l=b[f+1],h=0;h<l.length;h++){e.push(new E(g,l[h]));}}try{c.Typekit.load({events:!1,classes:!1,async:!0});}catch(k){}a(e);}}},2000):a([]);};function Y(a,b){this.a=a;this.c=b;}Y.prototype.B=function(a,b){var c=v(this.a),d=(this.c.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+d+"/"+a+".js"+(b?"?v="+b:"");};Y.prototype.load=function(a){function b(){if(e["__mti_fntLst"+c]){var d=e["__mti_fntLst"+c](),g=[],l;if(d){for(var h=0;h<d.length;h++){var k=d[h].fontfamily;void 0!=d[h].fontStyle&&void 0!=d[h].fontWeight?(l=d[h].fontStyle+d[h].fontWeight,g.push(new E(k,l))):g.push(new E(k));}}a(g);}else{setTimeout(function(){b();},50);}}var c=this.c.projectId,d=this.c.version;if(c){var e=this.a.k;y(this.a,this.B(c,d),function(c){c?a([]):b();}).id="__MonotypeAPIScript__"+c;}else{a([]);}};function Aa(a,b){this.a=a;this.c=b;}Aa.prototype.load=function(a){var b,c,d=this.c.urls||[],e=this.c.families||[],f=this.c.testStrings||{},g=new z;b=0;for(c=d.length;b<c;b++){x(this.a,d[b],A(g));}var l=[];b=0;for(c=e.length;b<c;b++){if(d=e[b].split(":"),d[1]){for(var h=d[1].split(","),k=0;k<h.length;k+=1){l.push(new E(d[0],h[k]));}}else{l.push(new E(d[0]));}}C(g,function(){a(l,f);});};var Z=new na(window);Z.q.t.custom=function(a,b){return new Aa(b,a);};Z.q.t.fontdeck=function(a,b){return new W(b,a);};Z.q.t.monotype=function(a,b){return new Y(b,a);};Z.q.t.typekit=function(a,b){return new X(b,a);};Z.q.t.google=function(a,b){return new ya(b,a);};var $={load:n(Z.load,Z)};"function"===typeof define&&define.amd?define(function(){return $;}):"undefined"!==typeof module&&module.exports?module.exports=$:(window.WebFont=$,window.WebFontConfig&&Z.load(window.WebFontConfig));}());jq$(function(){var sidebar=jq$(".zoneSidebar"),main=jq$(".zoneMain");var animateOptionsToOpen="300px",animateOptionsToClose="50px",transitionTime=300;if(!window.sidebarSettings){window.sidebarSettings={};}sidebarSettings={animateOptionsToOpen:animateOptionsToOpen,animateOptionsToClose:animateOptionsToClose,transitionTime:transitionTime};var stateSidebar=localStorage.getItem("stateSidebar");function onAnimateComplete(){WA.Gadgets.notifySidebarResized();}if(stateSidebar=="expandedState"){sidebar.parent().addClass("sidebarExpanded");sidebar.css("width",animateOptionsToOpen);if(sidebar.hasClass("zoneSidebarLeft")){main.css("padding-left",animateOptionsToOpen);}else{main.css("padding-right",animateOptionsToOpen);}}else{sidebar.parent().removeClass("sidebarExpanded");sidebar.css("width",animateOptionsToClose);if(sidebar.hasClass("zoneSidebarLeft")){main.css("padding-left",animateOptionsToClose);}else{main.css("padding-right",animateOptionsToClose);}}jq$(".zoneSidebar").perfectScrollbar({suppressScrollX:true});if(sidebar.hasClass("zoneSidebarLeft")){sidebar.css({"left":"0","float":"left","margin-right":"-"+animateOptionsToOpen});}else{sidebar.css({"right":"0","float":"right","margin-left":"-"+animateOptionsToOpen});}sidebar.find(".sidebarButton").click(function(){if(sidebar.parent().hasClass("sidebarExpanded")){sidebar.parent().removeClass("sidebarExpanded");localStorage.setItem("stateSidebar","");sidebar.animate({"width":animateOptionsToClose},transitionTime,onAnimateComplete);sidebar.perfectScrollbar("update");if(sidebar.hasClass("zoneSidebarLeft")){main.animate({"padding-left":animateOptionsToClose},transitionTime);}else{main.animate({"padding-right":animateOptionsToClose},transitionTime);}}else{sidebar.parent().addClass("sidebarExpanded");localStorage.setItem("stateSidebar","expandedState");sidebar.animate({"width":animateOptionsToOpen},transitionTime,onAnimateComplete);sidebar.perfectScrollbar("update");if(sidebar.hasClass("zoneSidebarLeft")){main.animate({"padding-left":animateOptionsToOpen},transitionTime);}else{main.animate({"padding-right":animateOptionsToOpen},transitionTime);}}});function MobileSidebar(){sidebar.addClass("zoneSidebarMobile");if(sidebar.hasClass("zoneSidebarLeft")){main.addClass("zoneMainMobileLeft");}else{main.addClass("zoneMainMobileRight");}sidebar.parent().removeClass("sidebarExpanded");sidebar.css("width","50px");if(sidebar.hasClass("zoneSidebarLeft")){main.css("padding-left","0");}else{main.css("padding-right","0");}if(jq$(window).width()<="750"){var sticky=0,button=jq$(".zoneSidebarButton");jq$(window).scroll(function(){var top=jq$(this).scrollTop(),heightHeader=jq$(".mobilePanelContainer").height();if(top+sticky<heightHeader){button.css("top",(heightHeader-top));}else{button.css("top",sticky);}});}}if(jq$(window).width()<="750"){MobileSidebar();}jq$(window).resize(function(){if(jq$(window).width()<="750"){sidebar.css("top",jq$(".mobilePanelContainer").height());MobileSidebar();}else{sidebar.css("top",0);sidebar.removeClass("zoneSidebarMobile");main.removeClass("zoneMainMobileLeft").removeClass("zoneMainMobileRight");stateSidebar=localStorage.getItem("stateSidebar");if(stateSidebar=="expandedState"){sidebar.parent().addClass("sidebarExpanded");sidebar.css("width",animateOptionsToOpen);if(sidebar.hasClass("zoneSidebarLeft")){main.css("padding-left",animateOptionsToOpen);}else{main.css("padding-right",animateOptionsToOpen);}}else{sidebar.parent().removeClass("sidebarExpanded");sidebar.css("width",animateOptionsToClose);if(sidebar.hasClass("zoneSidebarLeft")){main.css("padding-left",animateOptionsToClose);}else{main.css("padding-right",animateOptionsToClose);}}}});function CloseMobileSidebar(){if(sidebar.hasClass("zoneSidebarMobile")){if(sidebar.parent().hasClass("sidebarExpanded")){sidebar.parent().removeClass("sidebarExpanded");sidebar.animate({"width":animateOptionsToClose},transitionTime);if(sidebar.hasClass("zoneSidebarLeft")){main.animate({"padding-left":animateOptionsToClose},transitionTime);}else{main.animate({"padding-right":animateOptionsToClose},transitionTime);}}}}jq$(".zoneMain").click(function(){CloseMobileSidebar();});jq$(".mobilePanel").click(function(){CloseMobileSidebar();});jq$(".mobilePanelButton").click(function(){CloseMobileSidebar();});});(function(){if(!window.Captcha){window.Captcha=new Object();}Captcha.captchaStart=captchaStart;Captcha.captchaLoadSound=captchaLoadSound;Captcha.captchaReloadImage=captchaReloadImage;Captcha.closeWindowAndShowErrorMessage=closeWindowAndShowErrorMessage;var captchaImg=null;var captchaNewImg=null;var captchaParent=null;var captchaPrompt=null;var captchaReload=null;function captchaStart(imgId,prompt){captchaImg=document.getElementById(imgId);if(!captchaImg){return;}captchaImg.alt=prompt;}function captchaLoadSound(imgId,soundPlaceholderId){captchaImg=document.getElementById(imgId);if(!captchaImg){return;}var src=captchaImg.src;var i=src.indexOf("?get=image");var newSrc=src.substr(0,i)+"?get=sound"+src.substr(i+10);i=newSrc.indexOf("&di=");if(i>0){newSrc=newSrc.substr(0,i);}newSrc+="&d="+captchaGetTimestamp();var placeholder=document.getElementById(soundPlaceholderId);var a=new Array();a.push("<object id='captchaSound' classid='clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95' height='0' width='0' style='width:0; height:0;'><param name='AutoStart' value='1' /><param name='Volume' value='0' /><param name='PlayCount' value='1' /><param name='FileName' value='");a.push(newSrc);a.push("' /><embed id='captchaSoundEmbed' src='");a.push(newSrc);a.push("' autoplay='true' hidden='true' volume='100' type='");a.push(captchaGetMimeType());a.push("' style='display:inline;' /></object>");var objectSrc=a.join("");placeholder.innerHTML="";placeholder.innerHTML=objectSrc;}function captchaGetTimestamp(){var d=new Date();return(d.getTime()+(d.getTimezoneOffset()*60000));}function captchaGetMimeType(){return"audio/x-wav";}function captchaReloadImage(anchor,imgId,id,prompt){captchaReload=anchor;if(!captchaReload){return;}captchaReload.disabled=true;captchaImg=document.getElementById(imgId);if(!captchaImg){captchaReload.disabled=false;return;}var src=captchaImg.src;var idvalue=document.getElementById(id).value;var newSrc=src.substr(0,src.indexOf(idvalue))+idvalue+"&clear=1"+"&d"+captchaGetTimestamp();captchaNewImg=document.createElement("img");captchaNewImg.onload=captchaShowImage;captchaNewImg.id=captchaImg.id;captchaNewImg.alt=captchaImg.alt;captchaNewImg.src=newSrc;captchaPrompt=document.createElement("span");captchaPrompt.appendChild(document.createTextNode(prompt));captchaParent=captchaImg.parentNode;captchaParent.removeChild(captchaImg);captchaParent.appendChild(captchaPrompt);}function captchaShowImage(){if(captchaReload&&captchaNewImg&&captchaParent&&captchaPrompt){captchaParent.removeChild(captchaPrompt);captchaParent.appendChild(captchaNewImg);captchaReload.disabled=false;}}function closeWindowAndShowErrorMessage(btnId,txtId,reloadLinkId,errorMessageText){if(window.opener!=null){var btn=window.opener.document.getElementById(btnId);var txt=window.opener.document.getElementById(txtId);if(btn){btn.disabled=false;}if(txt){var errorMessageId="spanErrorMessageId";var newErrorMessageElement=window.opener.document.getElementById(errorMessageId);var spanCssClassName="validationError";var reloadCapthaLink=window.opener.document.getElementById(reloadLinkId);if(reloadCapthaLink){reloadCapthaLink.click();}if(!newErrorMessageElement){if(BonaPage.Browser.isIE){var parent=txt.parentNode;var a=new Array();a.push(parent.innerHTML);a.push('<span id="'+errorMessageId+'" class="'+spanCssClassName+'">');a.push(errorMessageText);a.push("</span>");parent.innerHTML=a.join("");}else{var span=document.createElement("span");span.setAttribute("id",errorMessageId);span.setAttribute("class",spanCssClassName);sometext=document.createTextNode(errorMessageText);span.appendChild(sometext);txt.parentNode.appendChild(span);}}}}var windowObject=window.self;windowObject.opener=window.self;var bodyes=document.getElementsByTagName("body");for(var i=0;i<bodyes.length;i++){bodyes[i].innerHTML="";}windowObject.close();}})();(function(jq$){if(!window.OAuthButtons){window.OAuthButtons=OAuthButtons;}function OAuthButtons(args){if(!args.id){throw new Error("id was not defined!");}var container,form;function onContainerClick(e){var attr=e.target.getAttribute("provider");if(!attr){return;}switch(attr){case"Facebook":case"GooglePlus":submitExternalAuthForm(attr);break;default:throw new Error("unsupported provider: "+attr);}}function submitExternalAuthForm(providerName){var providerField=jq$(form).find(".oAuthProvider");providerField.val(providerName);jq$(form).submit();}function init(){var containerId=args.id+"_container";container=document.getElementById(containerId);form=document.getElementById(args.formId);var browserCapabilitiesField=document.getElementById(args.id+"_browserCapabilities");var browserData=browserInfo.getBrowserCapabilitiesData();browserCapabilitiesField.value=browserData;if(!container){throw new Error("Could not find container by id: "+containerId);}if(!form){throw new Error("Could not find form by id: "+args.formId);}jq$(container).click(onContainerClick);}init();}})(window.jq$);(function(window){if(window.BlogHelper){return;}window.BlogHelper=new Object();var hiddenFormFormCommentExists=null;var commentBottom=null;var formDisabled=false;var commentLengthValidator=null;var oldValidatorMessage;window.BlogHelper.previousReplyLink=null;function setUrlFragment(value,w){var wnd=w||window;if(!wnd.location){return"";}var match=(/#([^#]*)$/gi).exec(wnd.location.toString()),activeUrl=wnd.location.toString(),newUrl=match?activeUrl.replace(/#([^#]+)$/gi,"#"+value):activeUrl+"#"+value;wnd.location.replace(newUrl);}BlogHelper.replyToComment=function(replyLink){var comment=BlogHelper.getCommentContainer(replyLink);if(!comment){return;}var messageId=comment.getAttribute("messageId");if(!messageId){return false;}var addNewCommentFormContainer=WA.$("idAddNewCommentFormContainer",window);var replyToCommentHidden=WA.$(BlogHelper.idReplyToCommentId,window);if(formDisabled){return;}if(DataChangeWatcher){var checkResult=DataChangeWatcher.confirmIfDataChanged();DataChangeWatcher.resumeWatching();if(!checkResult){return;}}if(commentBottom){commentBottom.style.display="";}var commentBottom=BlogHelper.getCommentBottomBlock(comment);var replyFormContainer=comment;do{replyFormContainer=replyFormContainer.nextSibling;}while(replyFormContainer&&replyFormContainer.nodeType!=1);if(commentBottom){commentBottom.style.display="none";}if(window.BlogHelper.previousReplyLink){window.BlogHelper.previousReplyLink.style.display="inline";}window.BlogHelper.previousReplyLink=replyLink;window.BlogHelper.replyingOnCommentId=getReplyId();if(!replyToCommentHidden){replyToCommentHidden=WA.$(BlogHelper.idReplyToCommentId,window);}replyToCommentHidden.value=messageId;commentLengthValidator=window.setTimeout("BlogHelper.validateCommentLength()",300);};BlogHelper.showReplyIfAwailable=function(replyLink){var comment=BlogHelper.getCommentContainer(replyLink);if(!comment){return true;}var messageId=comment.getAttribute("messageId");if(!messageId){return true;}if(window.BlogHelper.replyingOnCommentId!=messageId){return true;}WA.$("idAddNewCommentFormContainer",window).style.display="";return false;};BlogHelper.hideButtonsIfJsEnabled=function(){var commentsContainer=WA.$("idBlogCommentsListContainer",window);var buttons=commentsContainer.getElementsByTagName("INPUT");var links=commentsContainer.getElementsByTagName("A");for(var i=0;i<buttons.length;i++){if(buttons[i].attributes["HideIfJsEnabled"]){buttons[i].style.display="none";}}for(var i=0;i<links.length;i++){if(links[i].attributes["ShowIfJsEnabled"]){links[i].style.display="";}}};BlogHelper.hideCommentForm=function(){var addNewCommentFormContainer=WA.$("idAddNewCommentFormContainer",window);var commentText=WA.$(BlogHelper.idCommentText,window);if(WA.String.gtrim(commentText.value).length>0){DataChangeWatcher.setChanged();}else{DataChangeWatcher.setNotChanged();}if(DataChangeWatcher&&DataChangeWatcher.confirmIfDataChanged()){addNewCommentFormContainer.style.display="none";commentText.value="";if(commentLengthValidator){window.clearTimeout(commentLengthValidator);}if(commentBottom){commentBottom.style.display="";}if(window.BlogHelper.previousReplyLink){window.BlogHelper.previousReplyLink.style.display="";}return true;}return true;};BlogHelper.validateComment=function(){var commentText,commentLength,message,captchaCode;commentText=WA.$(BlogHelper.idCommentText,window);commentLength=BlogHelper.getCommentLength();message="";if(commentText.value.trim().length==0){message=BlogHelper.strCommentIsEmpty;}if(commentLength>BlogHelper.intMaxCommentLength){message=BlogHelper.strCommentLengthExeededAlertMessage;}captchaCode=WA.$(BlogHelper.idCaptchaCodeId,window);if(captchaCode&&captchaCode.value.trim().length==0){if(message!=""){message+="\r\n";}message+=BlogHelper.strCaptchaCodeIsEmpty;}if(message!=""){alert(message);return false;}Page_IsValid=true;Page_BlockSubmit=false;return true;};BlogHelper.validateCommentLength=function(){var commentText,commentLength,errorContainer,errorText,newValidatorMessage;if(!(commentText=WA.$(BlogHelper.idCommentText,window))){return;}commentLength=BlogHelper.getCommentLength();errorText=WA.$("errorMessage",window);errorContainer=WA.$(BlogHelper.idErrorMessageContainer,window);newValidatorMessage=commentLength>BlogHelper.intMaxCommentLength?BlogHelper.strCommentLengthExeededValidatorMessage.toString().replace(/\[0\]/,commentLength):"";if(oldValidatorMessage!=newValidatorMessage){oldValidatorMessage=errorText.innerHTML=newValidatorMessage;}errorContainer.style.display=errorText.innerHTML!=""?"block":"none";commentLengthValidator=window.setTimeout("BlogHelper.validateCommentLength()",300);};BlogHelper.getCommentLength=function(){return WA.$(BlogHelper.idCommentText,window).value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n").length;};BlogHelper.disableCommentForm=function(){if(DataChangeWatcher){DataChangeWatcher.pauseWatching();}window.setTimeout(function(){WA.$(BlogHelper.idPostCommentButton,window).disabled=true;WA.$(BlogHelper.idCommentText,window).disabled=true;var captchaCode=WA.$(BlogHelper.idCaptchaCodeId,window);var captchaReload=WA.$(BlogHelper.idCaptchaReloadId,window);var anonimousAuthorTextBox=WA.$(BlogHelper.idAnonimousAuthorTextBoxId,window);if(captchaCode){captchaCode.disabled=true;}if(captchaReload){captchaReload.style.display="none";}if(anonimousAuthorTextBox){anonimousAuthorTextBox.disabled=true;}formDisabled=true;},10);};BlogHelper.disablePostForm=function(){if(DataChangeWatcher){DataChangeWatcher.pauseWatching();}window.setTimeout(function(){if(Page_IsValid){formDisabled=true;}},100);};BlogHelper.deleteComment=function(){};BlogHelper.stokeComment=function(anyCommentInnerObject,enabled){var comment;if(comment=BlogHelper.getCommentContainer(anyCommentInnerObject)){comment.className=enabled?"commentViewContainer Stoked":"commentViewContainer";}};BlogHelper.getCommentContainer=function(innerObject){var comment=innerObject;if(!comment){return null;}while(!comment.getAttribute("messageId")&&comment.tagName!="BODY"){comment=comment.parentNode;}return(comment.tagName!="BODY")?comment:null;};BlogHelper.getCommentBottomBlock=function(comment){var elements,i;if(comment.className=="commentBottom"||comment.className=="postBottom"){return comment;}elements=comment.getElementsByTagName("DIV");for(i=0;i<elements.length;i++){if(elements[i].className=="commentBottom"||elements[i].className=="postBottom"){return elements[i];}}};BlogHelper.AutoexpandReplyFormIfNeeded=function(){var replyId=getReplyId();var commentOnPost=isAddingCommentToPost();var replyOnMessage;if(replyId){replyOnMessage=findMessageByMessageId(replyId);setUrlFragment(replyId,window);BlogHelper.replyToComment(replyOnMessage);}else{if(commentOnPost){replyOnMessage=WA.$(BlogHelper.postContainerId,window);BlogHelper.replyToComment(replyOnMessage);}}};BlogHelper.AutoScrollToAnchor=function(anchorParamName){var searchPattern=new RegExp(anchorParamName+"=([0-9a-zA-Z]+)");var match=searchPattern.exec(window.location);if(match!=null){setUrlFragment(match[1],window);}};BlogHelper.getTwoDigitsNumber=function(number){return number<10?"0"+number:number;};BlogHelper.ValidateBody=function(sender,args){var box,value;if(WidgetMode==1){if(box=WA.$(BodyTextBoxId,window)){args.IsValid=(box.value.replace(/^\s*|\s*$/g,"")!="");}return;}if(!top||!WA.BonaEditor.EditorsManager){return;}box=WA.BonaEditor.EditorsManager.getEditorById(BlogHelper.idEditor);if(box==null){return;}value=box.getHtmlData().replace(/&nbsp;|\s|<br>|<p>|<\/p>/ig,"");args.IsValid=value.length>0;};BlogHelper.ValidateBodyLength=function(sender,args){var box,value,valueLength;if(WidgetMode==1){if(box=WA.$(BodyTextBoxId,window)){args.IsValid=(box.value.replace(/^\s*|\s*$/g,"").length<=BlogHelper.intMaxPostLength);}return;}if(!top||!WA.BonaEditor.EditorsManager){return;}box=WA.BonaEditor.EditorsManager.getEditorById(BlogHelper.idEditor);if(box==null){return;}valueLength=box.getHtmlDataLength();args.IsValid=(valueLength<=BlogHelper.intMaxPostLength);};BlogHelper.OnLoad=function(){BlogHelper.AutoScrollToAnchor("anchor");BlogHelper.AutoexpandReplyFormIfNeeded();};function getReplyId(){var url=window.location?window.location.toString():"";var searchRegExs=[/replyTo\=(\d+)/i,/#replyTo(\d+)$/i];for(var i=0;i<searchRegExs.length;i++){var match=searchRegExs[i].exec(url);if(match){return match[1];}}return 0;}function isAddingCommentToPost(){var url=window.location?window.location.toString():"";var searchRegEx=/#addComment$/i;var match=searchRegEx.exec(url);return match?true:false;}function findMessageByMessageId(messageId){var elements=document.getElementsByTagName("DIV");for(var i=0;i<elements.length;i++){var element=elements[i];var attribute=element.getAttribute("messageId");if(attribute==messageId){return element;}}return null;}})(window);if(window.BonaPage){BonaPage.addPageStateHandler(BonaPage.PAGE_PARSED,BlogHelper.OnLoad);}jq$(function(){if(jq$(".blogEntryContainer #idAddNewCommentFormContainer").size()){$("body").animate({scrollTop:jq$("#idAddNewCommentFormContainer").offset().top},0);}jq$(document).ready(function(){MobileReplace();});function MobileReplace(){jq$('.WaGadgetBlog.WaGadgetBlogStateList .boxFooterPrimaryContainer a:contains("Comments")').html(function(index,html){return html.replace("Comments ",'<span class="hiddenText">Comments </span>');});jq$('.WaGadgetBlog.WaGadgetBlogStateList .boxFooterPrimaryContainer a:contains("Add comment")').html(function(index,html){return html.replace("Add comment",'<span class="hiddenText">Add comment</span>');});}});(function(window,WA,undefined){if(!window.WaContentGadgetResizer){window.WaContentGadgetResizer=WaContentGadgetResizer;}function WaContentGadgetResizer(initModel){var pThis=this,typeName="WaContentGadgetResizer",viewModel=initModel;pThis.toString=function(){return typeName;};var isDisposed=false,container,editableContainer,editableAttribute="data-editableArea",setHeightTimeout=50,editableHeightAttribute="data-areaHeight";function resetEditableContainerHeight(){WA.removeHandler(this,"load",resetEditableContainerHeight);WA.throttle(setEditableContainerHeight,{timeout:setHeightTimeout});}function setEditableContainerHeight(){if(isDisposed){return;}var gadgetHeight=container.offsetHeight-WA.Style.getElementStyleInt(container,"paddingBottom",window),gadgetPosition=container.style.position||"",heightMeter=document.createElement("waContentHeightMeter"),editableContainerHeight,height;heightMeter.style.display="block";heightMeter.style["float"]="none";heightMeter.style["clear"]="both";heightMeter.style.height="0px";heightMeter.style.fontSize="0px";container.style.position="relative";container.appendChild(heightMeter);editableContainerHeight=editableContainer.offsetHeight-WA.Style.getElementStyleInt(editableContainer,"paddingTop",window)-WA.Style.getElementStyleInt(editableContainer,"paddingBottom",window);height=Math.max(editableContainerHeight+gadgetHeight-heightMeter.offsetTop,0);container.removeChild(heightMeter);heightMeter=null;container.style.position=gadgetPosition;editableContainer.style.height=height+"px";editableContainer.setAttribute(editableHeightAttribute,height,0);}function init(){var containerImages,i,len;container=WA.$(viewModel.id,window);if(!container){return;}editableContainer=container.querySelector("["+editableAttribute+"]");if(editableContainer){editableContainer.style.height="";containerImages=container.getElementsByTagName("img");for(i=0,len=containerImages.length;i<len;i++){if(!containerImages[i]["complete"]){WA.addHandler(containerImages[i],"load",resetEditableContainerHeight);}}resetEditableContainerHeight();}}function dispose(){if(isDisposed){return;}WA.clearThrottle(setEditableContainerHeight);viewModel=null;container=null;editableContainer=null;isDisposed=true;}BonaPage.addPageStateHandler(BonaPage.PAGE_PARSED,init,BonaPage.HANDLERTYPE_ALWAYS);BonaPage.addPageStateHandler(BonaPage.PAGE_UNLOADED,dispose,BonaPage.HANDLERTYPE_ALWAYS);}})(window,window.WA);(function(){if(!window.Bonasource){window.Bonasource=new Object();}if(window.Bonasource.ControlTooltip){return;}window.Bonasource.ControlTooltip=controlTooltip;function controlTooltip(elementId,tooltipCssClass,tooltipHTML){var _tooltipShowDelegate=null;var _tooltipHideDelegate=null;var _tooltipMoveDelegate=null;var _tooltipDiv=null;var _tooltipHTML=tooltipHTML;var _tooltipCssClass=tooltipCssClass;var _element=WA.$(elementId,window);var _pThis=this;addStateHandlers(elementId);function addStateHandlers(elementId){BonaPage.addHandler(_element,"mouseover",element_OnMouseOver);BonaPage.addHandler(_element,"mouseout",element_OnMouseOut);BonaPage.addHandler(_element,"mousemove",element_OnMouseOver);}function getTooltipDiv(){if(!_tooltipDiv){_tooltipDiv=document.createElement("div");_tooltipDiv.className=_tooltipCssClass;_tooltipDiv.innerHTML=_tooltipHTML;_tooltipDiv.style.position="absolute";_tooltipDiv.style.zIndex=1000;_tooltipDiv.style.display="none";document.body.appendChild(_tooltipDiv);BonaPage.addHandler(_tooltipDiv,"mouseover",element_OnMouseOver);BonaPage.addHandler(_tooltipDiv,"mouseout",element_OnMouseOut);}return _tooltipDiv;}var _tooltipX;var _tooltipY;var _mouseOverTimeout;var _mouseOutTimeout;function element_OnMouseOver(evt){if(_mouseOverTimeout){clearTimeout(_mouseOverTimeout);}if(_mouseOutTimeout){clearTimeout(_mouseOutTimeout);}var mouseXY=WA.getEventMouseCoords(evt);_tooltipY=mouseXY.top;_tooltipX=mouseXY.left;_mouseOverTimeout=setTimeout(showDiv,10);}function element_OnMouseOut(evt){if(_mouseOutTimeout){clearTimeout(_mouseOutTimeout);}_mouseOutTimeout=setTimeout(hideDiv,10);}function showDiv(){try{var div=getTooltipDiv();div.style.display="block";div.style.top=_tooltipY+21+"px";div.style.left=_tooltipX+11+"px";}catch(err){}}function hideDiv(){var div=getTooltipDiv();div.style.display="none";}return _pThis;}})();(function(){if(window.ForumHelper){return;}window.ForumHelper=new Object();function $(id){return document.getElementById(id);}ForumHelper.navigateToTopic=function(topicUrl){window.location=topicUrl;};ForumHelper.highlight=function(elem){jq$(elem).removeClass("normal").addClass("highlight");};ForumHelper.normlight=function(elem){jq$(elem).removeClass("highlight").addClass("normal");};ForumHelper.subscribeForum=function(forumId){var subscribeLink=$(ForumHelper.subscribeLinkID);var subscribingLabel=$(ForumHelper.subscribingLabelID);subscribingLabel.style.display="inline-block";subscribeLink.style.display="none";try{WA.Ajax({url:ForumModel.Urls.SubscribeForum,cache:false,global:false,contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({forumId:forumId}),type:"POST",success:ForumHelper.subscribedSuccessfully,error:ForumHelper.subscriptionFailed});}catch(e){return true;}return false;};ForumHelper.unsubscribeForum=function(forumId){var unsubscribeLink=$(ForumHelper.unsubscribeLinkID);var unsubscribingLabel=$(ForumHelper.unsubscribingLabelID);unsubscribingLabel.style.display="inline-block";unsubscribeLink.style.display="none";try{WA.Ajax({url:ForumModel.Urls.UnsubscribeForum,cache:false,global:false,contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({forumId:forumId}),type:"POST",success:ForumHelper.unsubscribedSuccessfully,error:ForumHelper.unsubscriptionFailed});}catch(e){return true;}return false;};ForumHelper.subscribedSuccessfully=function(){var unsubscribeLink=$(ForumHelper.unsubscribeLinkID);var subscribingLabel=$(ForumHelper.subscribingLabelID);var unsubscribingLabel=$(ForumHelper.unsubscribingLabelID);unsubscribeLink.style.display="inline-block";subscribingLabel.style.display="none";unsubscribingLabel.style.display="none";};ForumHelper.subscriptionFailed=function(){var subscribeLink=$(ForumHelper.subscribeLinkID);var subscribingLabel=$(ForumHelper.subscribingLabelID);var unsubscribingLabel=$(ForumHelper.unsubscribingLabelID);subscribeLink.style.display="inline-block";subscribingLabel.style.display="none";unsubscribingLabel.style.display="none";};ForumHelper.unsubscribedSuccessfully=function(){var subscribeLink=$(ForumHelper.subscribeLinkID);var subscribingLabel=$(ForumHelper.unsubscribingLabelID);var unsubscribingLabel=$(ForumHelper.unsubscribingLabelID);subscribeLink.style.display="inline-block";subscribingLabel.style.display="none";unsubscribingLabel.style.display="none";};ForumHelper.unsubscriptionFailed=function(){var unsubscribeLink=$(ForumHelper.unsubscribeLinkID);var subscribingLabel=$(ForumHelper.subscribingLabelID);var unsubscribingLabel=$(ForumHelper.unsubscribingLabelID);unsubscribeLink.style.display="inline-block";subscribingLabel.style.display="none";unsubscribingLabel.style.display="none";};ForumHelper.subscribeTopic=function(topicId){var subscribeTopicLink=$(ForumHelper.subscribeTopicLinkID);var subscribingTopicLabel=$(ForumHelper.subscribingTopicLabelID);subscribingTopicLabel.style.display="inline-block";subscribeTopicLink.style.display="none";try{WA.Ajax({url:ForumModel.Urls.SubscribeTopic,cache:false,global:false,contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({topicId:topicId}),type:"POST",success:ForumHelper.subscribedTopicSuccessfully,error:ForumHelper.subscriptionTopicFailed});}catch(e){return true;}return false;};ForumHelper.unsubscribeTopic=function(topicId){var unsubscribeTopicLink=$(ForumHelper.unsubscribeTopicLinkID);var unsubscribingTopicLabel=$(ForumHelper.unsubscribingTopicLabelID);unsubscribingTopicLabel.style.display="inline-block";unsubscribeTopicLink.style.display="none";WA.Ajax({url:ForumModel.Urls.UnsubscribeTopic,cache:false,global:false,contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({topicId:topicId}),type:"POST",success:ForumHelper.unsubscribedTopicSuccessfully,error:ForumHelper.unsubscriptionTopicFailed});return false;};ForumHelper.subscribedTopicSuccessfully=function(){var unsubscribeTopicLink=$(ForumHelper.unsubscribeTopicLinkID);var subscribingTopicLabel=$(ForumHelper.subscribingTopicLabelID);var unsubscribingTopicLabel=$(ForumHelper.unsubscribingTopicLabelID);unsubscribeTopicLink.style.display="inline-block";subscribingTopicLabel.style.display="none";unsubscribingTopicLabel.style.display="none";};ForumHelper.subscriptionTopicFailed=function(){var subscribeTopicLink=$(ForumHelper.subscribeTopicLinkID);var subscribingTopicLabel=$(ForumHelper.subscribingTopicLabelID);var unsubscribingTopicLabel=$(ForumHelper.unsubscribingTopicLabelID);subscribeTopicLink.style.display="inline-block";subscribingTopicLabel.style.display="none";unsubscribingTopicLabel.style.display="none";};ForumHelper.unsubscribedTopicSuccessfully=function(){var subscribeTopicLink=$(ForumHelper.subscribeTopicLinkID);var subscribingTopicLabel=$(ForumHelper.unsubscribingTopicLabelID);var unsubscribingTopicLabel=$(ForumHelper.unsubscribingTopicLabelID);subscribeTopicLink.style.display="inline-block";subscribingTopicLabel.style.display="none";unsubscribingTopicLabel.style.display="none";};ForumHelper.unsubscriptionTopicFailed=function(){var unsubscribeTopicLink=$(ForumHelper.unsubscribeTopicLinkID);var subscribingTopicLabel=$(ForumHelper.subscribingTopicLabelID);var unsubscribingTopicLabel=$(ForumHelper.unsubscribingTopicLabelID);unsubscribeTopicLink.style.display="inline-block";subscribingTopicLabel.style.display="none";unsubscribingTopicLabel.style.display="none";};ForumHelper.existedCategorySelected=function(){var existingCategoryDiv=$(ForumHelper.idExistingCategoryDiv);var newCategoryDiv=$(ForumHelper.idNewCategoryDiv);existingCategoryDiv.style.display="";newCategoryDiv.style.display="none";};ForumHelper.newCategorySelected=function(){var existingCategoryDiv=$(ForumHelper.idExistingCategoryDiv);var newCategoryDiv=$(ForumHelper.idNewCategoryDiv);existingCategoryDiv.style.display="none";newCategoryDiv.style.display="";};})();jq$(function(){jq$(".WaGadgetForumStateTopicList .boxBodyOuterContainer .threadImage img[src*=stickies]").each(function(){jq$(this).parent().addClass("stickyForumTopic");});});jq$(function(){jq$("td.repliesCountTD .repliesCount:contains('—')").addClass("noBubble");jq$("td.threadImageTD .threadImage.stickyForumTopic").parent().next().addClass("showStickyIcon");jq$(".WaGadgetForum.WaGadgetForumStateMessageList .boxesList .boxesListItem").each(function(){var forumMessageHeaderInfoContainer=$(this).find("table.forumMessageHeaderTable td.forumMessageHeaderInfoContainer");$(this).find("table.forumMessageTable td.left").clone().addClass("forumMessageHeaderInfoContainerAuthorPhantom").insertAfter(forumMessageHeaderInfoContainer);});jq$(".WaGadgetForum.WaGadgetForumStateMessageList .boxesList .boxesListItem table.forumMessageHeaderTable td.forumMessageHeaderBodyContainer").each(function(){forumPanel(this);});function forumPanel(element){$(element).before('<td class="forumMessageHeaderBodyContainerPhantom"><div class="controlPanel"><div class="toggleButton"><div class="controlPanelInner"></div></div></div></td>');var linkEdit=$(element).find("a[id*=forumMessage_edit]").addClass("Edit").wrapInner("<span></span>"),linkMove=$(element).find("a[id*=forumMessage_move]").addClass("Move").wrapInner("<span></span>"),linkDelete=$(element).find("a[id*=forumMessage_deleteLink]").addClass("Delete").wrapInner("<span></span>"),linkQuote=$(element).find("a[id*=forumMessage_reply]").addClass("Quote").wrapInner("<span></span>"),replyNumberSpan=$(element).find("span[id*=messageIdText]").addClass("replyNumberSpan");$(element).parent().find(".controlPanelInner").append(linkEdit);$(element).parent().find(".controlPanelInner").append(linkMove);$(element).parent().find(".controlPanelInner").append(linkDelete);$(element).parent().find(".controlPanelInner").append(linkQuote);$(element).parent().find(".controlPanel").prepend(replyNumberSpan);return false;}});function redirectToUrl(urlString){window.location.href=urlString;return false;}function changeStateAndSubmit(buttonId,state,hiddehId){var button=document.getElementById(buttonId);var hidden=document.getElementById(hiddehId);if(button!=null&&hidden!=null){hidden.value=state;button.click();}return false;}function submitClick(buttonId){var button=document.getElementById(buttonId);if(button!=null){button.click();}return false;}jq$(function(){jq$(".WaGadgetEvents .generalFieldsContainer .fieldSubContainer .fieldLabel").each(function(k,v){jq$(v).html(jq$(v).html().replace("&nbsp;"," "));});jq$(".WaGadgetEventsStateList ul.boxesList li").each(function(){var footer=$(this).find(".boxFooterOuterContainer");$(this).find(".boxBodyContentContainer").after(footer);});function resizeLeftColEventDetail(){var leftEventDetailsColumnDiv=jq$(".WaGadgetEventsStateDetails .boxOuterContainer .boxBodyInfoOuterContainer .boxBodyInfoContainer");var rightEventDetailsColumnDiv=jq$(".WaGadgetEventsStateDetails .boxOuterContainer .boxBodyContentOuterContainer .boxBodyContentContainer");if(leftEventDetailsColumnDiv.length&&rightEventDetailsColumnDiv.length){var leftEventDetailsColumnHeight=leftEventDetailsColumnDiv.height();var rightEventDetailsColumnHeight=rightEventDetailsColumnDiv.height();if(rightEventDetailsColumnHeight>leftEventDetailsColumnHeight){leftEventDetailsColumnDiv.css("height",rightEventDetailsColumnHeight);}}}function resizeLeftColEventList(){jq$(".WaGadgetEventsStateList .boxesList .boxesListItem").each(function(k,v){var left=jq$(this).find(".boxBodyInfoContainer");var right=jq$(this).find(".boxBodyContentOuterContainer");if(right.height()>left.height()){left.css("height",right.height());}});}if(jq$("#idPastEventsContainer table td").size()==0){jq$("#idPastEventsContainer").remove();}jq$(".WaGadgetEventsStateCalendar .monthViewType .EventListCalendar td > div").addClass("eventDivItem");jq$(".WaGadgetEventsStateCalendar .monthViewType .EventListCalendar").on("click","td > div",function(e){jq$(this).addClass("eventDivItem");if(e.target.tagName.toLowerCase()!="a"){jq$(this).find("a")[0].click();}});jq$(".WaGadgetEventsStateCalendar .yearViewType .EventListCalendar td").each(function(){var htmlCode=jq$(this).html();htmlCode=htmlCode.replace(new RegExp("</a>[^<]","g"),"</a></span>");htmlCode=htmlCode.replace(new RegExp("<br>","g"),"<br><span>");jq$(this).html(htmlCode);});if(jq$(".WaGadgetEventsStateCalendar").length!==0){var prevContainer=jq$('.WaGadgetEventsStateCalendar .viewSwitchersTable .decButton a:contains("Previous")');var nextContainer=jq$('.WaGadgetEventsStateCalendar .viewSwitchersTable .incButton a:contains("Next")');prevContainer.html(prevContainer.html().replace("&lt; ",""));nextContainer.html(nextContainer.html().replace(" &gt;",""));}jq$(".EventListCalendar a.calendarDate").closest("td").parents("td").addClass("EventListCalendarDate");jq$(".EventListCalendar table div.eventDivItem").closest("td").parents("td").addClass("EventListCalendarEventDiv");jq$(".EventListCalendar > tbody > tr > td > div.eventDivItem").parents("td").addClass("EventListCalendarEventDiv");if(jq$(".registrationInfo li .regTypeLiLabel img.imgRegCodeRequired").length>0){jq$(".registrationInfo li .regTypeLiLabel img.imgRegCodeRequired").css("display","none");jq$(".registrationInfo li .regTypeLiLabel img.imgRegCodeRequired").parent().append('<p class="regTypeLiLabelImg">(Registration code required)</p>');}});(function(window,WA,undefined){if(!window.WaFacebookPagePlugin){window.WaFacebookPagePlugin=FacebookPagePlugin;}function FacebookPagePlugin(initModel,initArgs){if(!WA){return;}initArgs=initArgs||{};var pThis=this,typeName="WaFacebookPagePlugin",viewModel=initModel,parentComponent=initArgs.parentComponent,facebookPagePluginContainerId=initArgs.facebookPagePluginContainerId;pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});pThis.dispose=dispose;function onFacebookSdkLoaded(sender,args){var sdk=args&&args.sdk,facebookPagePluginContainer=WA.$(facebookPagePluginContainerId,window);sdk.XFBML.parse(facebookPagePluginContainer);}function onGadgetDeleted(sender,args){args=args||{};if(args.componentId==viewModel.id){dispose();}}function init(){parentComponent.Dispose.addHandler(dispose);parentComponent.FacebookSdkLoaded.addHandler(onFacebookSdkLoaded,{period:"once"});WA.Gadgets.GadgetDeleted.addHandler(onGadgetDeleted);}function dispose(){pThis.Dispose.fireHandlers({id:viewModel.id});parentComponent.FacebookSdkLoaded.removeHandler(onFacebookSdkLoaded);WA.Gadgets.GadgetDeleted.removeHandler(onGadgetDeleted);parentComponent.Dispose.removeHandler(dispose);viewModel=null;parentComponent=null;pThis.RenderComplete=null;pThis.Dispose=null;}init();}})(window,window.WA);(function(window,WA,undefined){if(!window.WaFacebookPagePluginManager){window.WaFacebookPagePluginManager=new FacebookPagePluginManager();}function FacebookPagePluginManager(){if(!WA){return;}var pThis=this,typeName="WaFacebookPagePluginManager";pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});pThis.FacebookSdkLoaded=WA.Tools.EventHandlers.createHandlers(pThis,{id:"FacebookSdkLoaded",type:WA.Tools.EventHandlers.Type.Long});pThis.createGadget=createGadget;var gadgets={},sdkScriptSrc="//connect.facebook.net/en_US/all.js#xfbml=1&status=0",sdkScriptId="facebook-jssdk",fbRootId="fb-root";function onFbSdkReady(){FB.Event.subscribe("xfbml.render",onXfbmlRendered);pThis.FacebookSdkLoaded.fireHandlers({sdk:FB});}function onGadgetDispose(sender,args){delete gadgets[args&&args.id];}function createGadget(model,args){model=model||{};args=args||{};var gadgetId=model.id;if(gadgets.hasOwnProperty(gadgetId)&&gadgets[gadgetId].dispose){gadgets[gadgetId].dispose();}args.parentComponent=pThis;gadgets[gadgetId]=new WaFacebookPagePlugin(model,args);gadgets[gadgetId].Dispose.addHandler(onGadgetDispose);createFbRootElement();if(window.FB&&FB.XFBML&&FB.XFBML.parse){onFbSdkReady();return;}if(!WA.$(sdkScriptId,window)){loadFacebookSdk();}}function onXfbmlRendered(){WA.Gadgets.notifyGadgetChanged();}function createFbInitCallback(){var oldFbAsyncInit=window.fbAsyncInit;window.fbAsyncInit=function(){if(typeof oldFbAsyncInit=="function"){oldFbAsyncInit();}onFbSdkReady();};}function loadFacebookSdk(){var sdkScript=document.createElement("script");sdkScript.id=sdkScriptId;sdkScript.async=true;sdkScript.src=sdkScriptSrc;document.getElementsByTagName("head")[0].appendChild(sdkScript);}function createFbRootElement(){var fbRoot=WA.$(fbRootId,window);if(fbRoot){return;}fbRoot=document.createElement("div");fbRoot.id=fbRootId;document.body.appendChild(fbRoot);}function init(){if(window.FB&&FB.XFBML&&FB.XFBML.parse){onFbSdkReady();return;}createFbInitCallback();}function dispose(){if(window.FB&&FB.XFBML&&FB.XFBML.parse){FB.Event.unsubscribe("xfbml.render",onXfbmlRendered);}pThis.Dispose.fireHandlers();window[typeName]=null;gadgets=null;pThis.Dispose=null;pThis.FacebookSdkLoaded=null;}BonaPage.addPageStateHandler(BonaPage.PAGE_PARSED,init,BonaPage.HANDLERTYPE_ALWAYS);BonaPage.addPageStateHandler(BonaPage.PAGE_UNLOADED,dispose,BonaPage.HANDLERTYPE_ALWAYS);}})(window,window.WA);(function(){if(window.ForumSummaryHelper){return;}window.ForumSummaryHelper=new Object();function $(id){return document.getElementById(id);}ForumSummaryHelper.navigateToTopic=function(topicUrl){window.location=topicUrl;};ForumSummaryHelper.highlight=function(elem){jq$(elem).removeClass("normal").addClass("highlight");};ForumSummaryHelper.normlight=function(elem){jq$(elem).removeClass("highlight").addClass("normal");};ForumSummaryHelper.allForumsRadioSelected=function(){var selectForumsListDiv=$(ForumSummaryHelper.selectForumsListId);selectForumsListDiv.style.display="none";};ForumSummaryHelper.selectedForumsRadioSelected=function(){var selectForumsListDiv=$(ForumSummaryHelper.selectForumsListId);selectForumsListDiv.style.display="";};})();jq$(function(){if(jq$(".WaPlaceHolderSidebar").length>0){jq$(".zoneMain .forumUpdatesStyle003, .zoneMain .forumUpdatesStyle006").find("ul").slick({dots:true,speed:300,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});jq$(function(){jq$(".WaPlaceHolderSidebar .forumUpdatesStyle003, .WaPlaceHolderSidebar .forumUpdatesStyle006").find("ul").slick({dots:true,speed:300,slidesToShow:1,slidesToScroll:1});});}else{jq$(".forumUpdatesStyle003, .forumUpdatesStyle006").find("ul").slick({dots:true,speed:300,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});}});(function(window,WA,undefined){if(!window.WaGoogleMap){window.WaGoogleMap=GoogleMap;}function GoogleMap(initModel,initArgs){if(!WA){return;}initArgs=initArgs||{};var pThis=this,typeName="WaGoogleMap",viewModel=initModel,parentComponent=initArgs.parentComponent,address=initArgs.address||"",zoom=initArgs.zoom||13,mapWindow=initArgs.mapWindow||window,mapContainerId=initArgs.mapContainerId;pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});pThis.dispose=dispose;var isDisposed=false,api;function getCoordinates(){if(isDisposed){return;}var geocoder=new api.Geocoder();geocoder.geocode({address:address},function(locResult,status){if(status==api.GeocoderStatus.OK){setGoogleMap(locResult[0].geometry.location.lat(),locResult[0].geometry.location.lng());}else{}});}function setGoogleMap(x,y){if(isDisposed){return;}var mapContainer=mapContainerId&&WA.$(mapContainerId,mapWindow),mapOptions,map,markerOptions,marker;mapOptions={center:new api.LatLng(x,y),zoom:zoom,mapTypeId:api.MapTypeId.ROADMAP};map=new api.Map(mapContainer,mapOptions);markerOptions={map:map,position:new api.LatLng(x,y)};marker=new api.Marker(markerOptions);dispose();}function onGoogleMapsApiLoaded(){api=google.maps;if(address!=""){getCoordinates();}else{setGoogleMap(0,0);}}function onGadgetDeleted(sender,args){args=args||{};if(args.componentId==viewModel.id){dispose();}}function init(){parentComponent.Dispose.addHandler(dispose);parentComponent.GoogleMapsApiLoaded.addHandler(onGoogleMapsApiLoaded);WA.Gadgets.GadgetDeleted.addHandler(onGadgetDeleted);}function dispose(){isDisposed=true;pThis.Dispose.fireHandlers({id:viewModel.id});parentComponent.GoogleMapsApiLoaded.removeHandler(onGoogleMapsApiLoaded);WA.Gadgets.GadgetDeleted.removeHandler(onGadgetDeleted);parentComponent.Dispose.removeHandler(dispose);viewModel=null;parentComponent=null;api=null;pThis.RenderComplete=null;pThis.Dispose=null;}init();}})(window,window.WA);(function(window,WA,undefined){if(!window.WaHeadlineGadgetResizer){window.WaHeadlineGadgetResizer=WaHeadlineGadgetResizer;}function WaHeadlineGadgetResizer(initModel){var pThis=this,typeName="WaHeadlineGadgetResizer",viewModel=initModel;pThis.toString=function(){return typeName;};var isDisposed=false,container,editableContainer,editableAttribute="data-editableArea",setHeightTimeout=50,editableHeightAttribute="data-areaHeight";function resetEditableContainerHeight(){WA.removeHandler(this,"load",resetEditableContainerHeight);WA.throttle(setEditableContainerHeight,{timeout:setHeightTimeout});}function setEditableContainerHeight(){if(isDisposed){return;}var gadgetHeight=container.offsetHeight-WA.Style.getElementStyleInt(container,"paddingBottom",window),gadgetPosition=container.style.position||"",heightMeter=document.createElement("waHeadlineHeightMeter"),editableContainerHeight,height;heightMeter.style.display="block";heightMeter.style["float"]="none";heightMeter.style["clear"]="both";heightMeter.style.height="0px";heightMeter.style.fontSize="0px";container.style.position="relative";container.appendChild(heightMeter);editableContainerHeight=editableContainer.offsetHeight-WA.Style.getElementStyleInt(editableContainer,"paddingTop",window)-WA.Style.getElementStyleInt(editableContainer,"paddingBottom",window);height=Math.max(editableContainerHeight+gadgetHeight-heightMeter.offsetTop,0);container.removeChild(heightMeter);heightMeter=null;container.style.position=gadgetPosition;editableContainer.style.height=height+"px";editableContainer.setAttribute(editableHeightAttribute,height,0);}function init(){var containerImages,i,len;container=WA.$(viewModel.id,window);if(!container){return;}editableContainer=container.querySelector("["+editableAttribute+"]");if(editableContainer){editableContainer.style.height="";containerImages=container.getElementsByTagName("img");for(i=0,len=containerImages.length;i<len;i++){if(!containerImages[i]["complete"]){WA.addHandler(containerImages[i],"load",resetEditableContainerHeight);}}resetEditableContainerHeight();}}function dispose(){if(isDisposed){return;}WA.clearThrottle(setEditableContainerHeight);viewModel=null;container=null;editableContainer=null;isDisposed=true;}BonaPage.addPageStateHandler(BonaPage.PAGE_PARSED,init,BonaPage.HANDLERTYPE_ALWAYS);BonaPage.addPageStateHandler(BonaPage.PAGE_UNLOADED,dispose,BonaPage.HANDLERTYPE_ALWAYS);}})(window,window.WA);(function(window,WA,undefined){if(!window.WaAddressServiceApiClient){window.WaAddressServiceApiClient=WaAddressServiceApiClient;}function WaAddressServiceApiClient(initModel,initArgs){if(!WA){return;}initArgs=initArgs||{};var pThis=this,typeName="WaAddressServiceApiClient",viewModel=initModel,parentComponent=initArgs.parentComponent,authorizationToken=viewModel.authorizationToken,endpoint=viewModel.endpoint,fastIntegrationEnabled;pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});var isDisposed=false,serviceHttpClient;pThis.geocode=geocode;function geocode(addresses){return serviceHttpClient.fetch(endpoint,WA.Ajax.appendRequestHeaders({cache:false,global:false,type:"POST",crossDomain:true,contentType:"application/json",data:JSON.stringify(addresses)},additionalHeaders));}function init(){additionalHeaders=viewModel.fastIntegrationEnabled&&viewModel.environmentId?[{key:"X-Api-EnvironmentId",value:viewModel.environmentId}]:[];parentComponent.Dispose.addHandler(dispose);serviceHttpClient=new WA.ServiceHttpClient({authorizationToken:viewModel.authorizationToken},{parentComponent:pThis});}function dispose(){if(isDisposed){return;}isDisposed=true;pThis.Dispose.fireHandlers();viewModel=null;parentComponent=null;pThis.Dispose=null;}init();}})(window,window.WA);(function(window,WA,undefined){if(!window.WaGoogleMapsMarkerClusterer){window.WaGoogleMapsMarkerClusterer=MarkerClusterer;}function MarkerClusterer(map,opt_markers,opt_options){this.extend(MarkerClusterer,google.maps.OverlayView);this.map_=map;this.markers_=[];this.clusters_=[];this.sizes=[53,56,66,78,90];this.styles_=[];this.ready_=false;var options=opt_options||{};this.gridSize_=options["gridSize"]||60;this.minClusterSize_=options["minimumClusterSize"]||2;this.maxZoom_=options["maxZoom"]||null;this.styles_=options["styles"]||[];this.imagePath_=options["imagePath"]||this.MARKER_CLUSTER_IMAGE_PATH_;this.imageExtension_=options["imageExtension"]||this.MARKER_CLUSTER_IMAGE_EXTENSION_;this.zoomOnClick_=true;if(options["zoomOnClick"]!=undefined){this.zoomOnClick_=options["zoomOnClick"];}this.averageCenter_=false;if(options["averageCenter"]!=undefined){this.averageCenter_=options["averageCenter"];}this.setupStyles_();this.setMap(map);this.prevZoom_=this.map_.getZoom();var that=this;google.maps.event.addListener(this.map_,"zoom_changed",function(){var zoom=that.map_.getZoom();if(that.prevZoom_!=zoom){that.prevZoom_=zoom;that.resetViewport();}});google.maps.event.addListener(this.map_,"idle",function(){that.redraw();});if(opt_markers&&opt_markers.length){this.addMarkers(opt_markers,false);}}MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_="../images/m";MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_="png";MarkerClusterer.prototype.extend=function(obj1,obj2){return(function(object){for(var property in object.prototype){this.prototype[property]=object.prototype[property];}return this;}).apply(obj1,[obj2]);};MarkerClusterer.prototype.onAdd=function(){this.setReady_(true);};MarkerClusterer.prototype.draw=function(){};MarkerClusterer.prototype.setupStyles_=function(){if(this.styles_.length){return;}for(var i=0,size;size=this.sizes[i];i++){this.styles_.push({url:this.imagePath_+(i+1)+"."+this.imageExtension_,height:size,width:size});}};MarkerClusterer.prototype.fitMapToMarkers=function(){var markers=this.getMarkers();var bounds=new google.maps.LatLngBounds();for(var i=0,marker;marker=markers[i];i++){bounds.extend(marker.getPosition());}this.map_.fitBounds(bounds);};MarkerClusterer.prototype.setStyles=function(styles){this.styles_=styles;};MarkerClusterer.prototype.getStyles=function(){return this.styles_;};MarkerClusterer.prototype.isZoomOnClick=function(){return this.zoomOnClick_;};MarkerClusterer.prototype.isAverageCenter=function(){return this.averageCenter_;};MarkerClusterer.prototype.getMarkers=function(){return this.markers_;};MarkerClusterer.prototype.getTotalMarkers=function(){return this.markers_.length;};MarkerClusterer.prototype.setMaxZoom=function(maxZoom){this.maxZoom_=maxZoom;};MarkerClusterer.prototype.getMaxZoom=function(){return this.maxZoom_;};MarkerClusterer.prototype.calculator_=function(markers,numStyles){var index=0;var count=markers.length;var dv=count;while(dv!==0){dv=parseInt(dv/10,10);index++;}index=Math.min(index,numStyles);return{text:count,index:index};};MarkerClusterer.prototype.setCalculator=function(calculator){this.calculator_=calculator;};MarkerClusterer.prototype.getCalculator=function(){return this.calculator_;};MarkerClusterer.prototype.addMarkers=function(markers,opt_nodraw){for(var i=0,marker;marker=markers[i];i++){this.pushMarkerTo_(marker);}if(!opt_nodraw){this.redraw();}};MarkerClusterer.prototype.pushMarkerTo_=function(marker){marker.isAdded=false;if(marker["draggable"]){var that=this;google.maps.event.addListener(marker,"dragend",function(){marker.isAdded=false;that.repaint();});}this.markers_.push(marker);};MarkerClusterer.prototype.addMarker=function(marker,opt_nodraw){this.pushMarkerTo_(marker);if(!opt_nodraw){this.redraw();}};MarkerClusterer.prototype.removeMarker_=function(marker){var index=-1;if(this.markers_.indexOf){index=this.markers_.indexOf(marker);}else{for(var i=0,m;m=this.markers_[i];i++){if(m==marker){index=i;break;}}}if(index==-1){return false;}marker.setMap(null);this.markers_.splice(index,1);return true;};MarkerClusterer.prototype.removeMarker=function(marker,opt_nodraw){var removed=this.removeMarker_(marker);if(!opt_nodraw&&removed){this.resetViewport();this.redraw();return true;}else{return false;}};MarkerClusterer.prototype.removeMarkers=function(markers,opt_nodraw){var removed=false;for(var i=0,marker;marker=markers[i];i++){var r=this.removeMarker_(marker);removed=removed||r;}if(!opt_nodraw&&removed){this.resetViewport();this.redraw();return true;}};MarkerClusterer.prototype.setReady_=function(ready){if(!this.ready_){this.ready_=ready;this.createClusters_();}};MarkerClusterer.prototype.getTotalClusters=function(){return this.clusters_.length;};MarkerClusterer.prototype.getMap=function(){return this.map_;};MarkerClusterer.prototype.setMap=function(map){this.map_=map;};MarkerClusterer.prototype.getGridSize=function(){return this.gridSize_;};MarkerClusterer.prototype.setGridSize=function(size){this.gridSize_=size;};MarkerClusterer.prototype.getMinClusterSize=function(){return this.minClusterSize_;};MarkerClusterer.prototype.setMinClusterSize=function(size){this.minClusterSize_=size;};MarkerClusterer.prototype.getExtendedBounds=function(bounds){var projection=this.getProjection();var tr=new google.maps.LatLng(bounds.getNorthEast().lat(),bounds.getNorthEast().lng());var bl=new google.maps.LatLng(bounds.getSouthWest().lat(),bounds.getSouthWest().lng());var trPix=projection.fromLatLngToDivPixel(tr);trPix.x+=this.gridSize_;trPix.y-=this.gridSize_;var blPix=projection.fromLatLngToDivPixel(bl);blPix.x-=this.gridSize_;blPix.y+=this.gridSize_;var ne=projection.fromDivPixelToLatLng(trPix);var sw=projection.fromDivPixelToLatLng(blPix);bounds.extend(ne);bounds.extend(sw);return bounds;};MarkerClusterer.prototype.isMarkerInBounds_=function(marker,bounds){return bounds.contains(marker.getPosition());};MarkerClusterer.prototype.clearMarkers=function(){this.resetViewport(true);this.markers_=[];};MarkerClusterer.prototype.resetViewport=function(opt_hide){for(var i=0,cluster;cluster=this.clusters_[i];i++){cluster.remove();}for(var i=0,marker;marker=this.markers_[i];i++){marker.isAdded=false;if(opt_hide){marker.setMap(null);}}this.clusters_=[];};MarkerClusterer.prototype.repaint=function(){var oldClusters=this.clusters_.slice();this.clusters_.length=0;this.resetViewport();this.redraw();window.setTimeout(function(){for(var i=0,cluster;cluster=oldClusters[i];i++){cluster.remove();}},0);};MarkerClusterer.prototype.redraw=function(){this.createClusters_();};MarkerClusterer.prototype.distanceBetweenPoints_=function(p1,p2){if(!p1||!p2){return 0;}var R=6371;var dLat=(p2.lat()-p1.lat())*Math.PI/180;var dLon=(p2.lng()-p1.lng())*Math.PI/180;var a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(p1.lat()*Math.PI/180)*Math.cos(p2.lat()*Math.PI/180)*Math.sin(dLon/2)*Math.sin(dLon/2);var c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));var d=R*c;return d;};MarkerClusterer.prototype.addToClosestCluster_=function(marker){var distance=40000;var clusterToAddTo=null;var pos=marker.getPosition();for(var i=0,cluster;cluster=this.clusters_[i];i++){var center=cluster.getCenter();if(center){var d=this.distanceBetweenPoints_(center,marker.getPosition());if(d<distance){distance=d;clusterToAddTo=cluster;}}}if(clusterToAddTo&&clusterToAddTo.isMarkerInClusterBounds(marker)){clusterToAddTo.addMarker(marker);}else{var cluster=new Cluster(this);cluster.addMarker(marker);this.clusters_.push(cluster);}};MarkerClusterer.prototype.createClusters_=function(){if(!this.ready_){return;}var mapBounds=new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),this.map_.getBounds().getNorthEast());var bounds=this.getExtendedBounds(mapBounds);for(var i=0,marker;marker=this.markers_[i];i++){if(!marker.isAdded&&this.isMarkerInBounds_(marker,bounds)){this.addToClosestCluster_(marker);}}};function Cluster(markerClusterer){this.markerClusterer_=markerClusterer;this.map_=markerClusterer.getMap();this.gridSize_=markerClusterer.getGridSize();this.minClusterSize_=markerClusterer.getMinClusterSize();this.averageCenter_=markerClusterer.isAverageCenter();this.center_=null;this.markers_=[];this.bounds_=null;this.clusterIcon_=new ClusterIcon(this,markerClusterer.getStyles(),markerClusterer.getGridSize());}Cluster.prototype.isMarkerAlreadyAdded=function(marker){if(this.markers_.indexOf){return this.markers_.indexOf(marker)!=-1;}else{for(var i=0,m;m=this.markers_[i];i++){if(m==marker){return true;}}}return false;};Cluster.prototype.addMarker=function(marker){if(this.isMarkerAlreadyAdded(marker)){return false;}if(!this.center_){this.center_=marker.getPosition();this.calculateBounds_();}else{if(this.averageCenter_){var l=this.markers_.length+1;var lat=(this.center_.lat()*(l-1)+marker.getPosition().lat())/l;var lng=(this.center_.lng()*(l-1)+marker.getPosition().lng())/l;this.center_=new google.maps.LatLng(lat,lng);this.calculateBounds_();}}marker.isAdded=true;this.markers_.push(marker);var len=this.markers_.length;if(len<this.minClusterSize_&&marker.getMap()!=this.map_){marker.setMap(this.map_);}if(len==this.minClusterSize_){for(var i=0;i<len;i++){this.markers_[i].setMap(null);}}if(len>=this.minClusterSize_){marker.setMap(null);}this.updateIcon();return true;};Cluster.prototype.getMarkerClusterer=function(){return this.markerClusterer_;};Cluster.prototype.getBounds=function(){var bounds=new google.maps.LatLngBounds(this.center_,this.center_);var markers=this.getMarkers();for(var i=0,marker;marker=markers[i];i++){bounds.extend(marker.getPosition());}return bounds;};Cluster.prototype.remove=function(){this.clusterIcon_.remove();this.markers_.length=0;delete this.markers_;};Cluster.prototype.getSize=function(){return this.markers_.length;};Cluster.prototype.getMarkers=function(){return this.markers_;};Cluster.prototype.getCenter=function(){return this.center_;};Cluster.prototype.calculateBounds_=function(){var bounds=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(bounds);};Cluster.prototype.isMarkerInClusterBounds=function(marker){return this.bounds_.contains(marker.getPosition());};Cluster.prototype.getMap=function(){return this.map_;};Cluster.prototype.updateIcon=function(){var zoom=this.map_.getZoom();var mz=this.markerClusterer_.getMaxZoom();if(mz&&zoom>mz){for(var i=0,marker;marker=this.markers_[i];i++){marker.setMap(this.map_);}return;}if(this.markers_.length<this.minClusterSize_){this.clusterIcon_.hide();return;}var numStyles=this.markerClusterer_.getStyles().length;var sums=this.markerClusterer_.getCalculator()(this.markers_,numStyles);this.clusterIcon_.setCenter(this.center_);this.clusterIcon_.setSums(sums);this.clusterIcon_.show();};function ClusterIcon(cluster,styles,opt_padding){cluster.getMarkerClusterer().extend(ClusterIcon,google.maps.OverlayView);this.styles_=styles;this.padding_=opt_padding||0;this.cluster_=cluster;this.center_=null;this.map_=cluster.getMap();this.div_=null;this.sums_=null;this.visible_=false;this.setMap(this.map_);}ClusterIcon.prototype.triggerClusterClick=function(event){var markerClusterer=this.cluster_.getMarkerClusterer();google.maps.event.trigger(markerClusterer,"clusterclick",this.cluster_,event);if(markerClusterer.isZoomOnClick()){this.map_.fitBounds(this.cluster_.getBounds());}};ClusterIcon.prototype.onAdd=function(){this.div_=document.createElement("DIV");if(this.visible_){var pos=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(pos);this.div_.innerHTML=this.sums_.text;}var panes=this.getPanes();panes.overlayMouseTarget.appendChild(this.div_);var that=this;var isDragging=false;google.maps.event.addDomListener(this.div_,"click",function(event){if(!isDragging){that.triggerClusterClick(event);}});google.maps.event.addDomListener(this.div_,"mousedown",function(){isDragging=false;});google.maps.event.addDomListener(this.div_,"mousemove",function(){isDragging=true;});};ClusterIcon.prototype.getPosFromLatLng_=function(latlng){var pos=this.getProjection().fromLatLngToDivPixel(latlng);if(typeof this.iconAnchor_==="object"&&this.iconAnchor_.length===2){pos.x-=this.iconAnchor_[0];pos.y-=this.iconAnchor_[1];}else{pos.x-=parseInt(this.width_/2,10);pos.y-=parseInt(this.height_/2,10);}return pos;};ClusterIcon.prototype.draw=function(){if(this.visible_){var pos=this.getPosFromLatLng_(this.center_);this.div_.style.top=pos.y+"px";this.div_.style.left=pos.x+"px";}};ClusterIcon.prototype.hide=function(){if(this.div_){this.div_.style.display="none";}this.visible_=false;};ClusterIcon.prototype.show=function(){if(this.div_){var pos=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(pos);this.div_.style.display="";}this.visible_=true;};ClusterIcon.prototype.remove=function(){this.setMap(null);};ClusterIcon.prototype.onRemove=function(){if(this.div_&&this.div_.parentNode){this.hide();this.div_.parentNode.removeChild(this.div_);this.div_=null;}};ClusterIcon.prototype.setSums=function(sums){this.sums_=sums;this.text_=sums.text;this.index_=sums.index;if(this.div_){this.div_.innerHTML=sums.text;}this.useStyle();};ClusterIcon.prototype.useStyle=function(){var index=Math.max(0,this.sums_.index-1);index=Math.min(this.styles_.length-1,index);var style=this.styles_[index];this.url_=style["url"];this.height_=style["height"];this.width_=style["width"];this.textColor_=style["textColor"];this.anchor_=style["anchor"];this.textSize_=style["textSize"];this.backgroundPosition_=style["backgroundPosition"];this.iconAnchor_=style["iconAnchor"];};ClusterIcon.prototype.setCenter=function(center){this.center_=center;};ClusterIcon.prototype.createCss=function(pos){var style=[];style.push("background-image:url("+this.url_+");");var backgroundPosition=this.backgroundPosition_?this.backgroundPosition_:"0 0";style.push("background-position:"+backgroundPosition+";");if(typeof this.anchor_==="object"){if(typeof this.anchor_[0]==="number"&&this.anchor_[0]>0&&this.anchor_[0]<this.height_){style.push("height:"+(this.height_-this.anchor_[0])+"px; padding-top:"+this.anchor_[0]+"px;");}else{if(typeof this.anchor_[0]==="number"&&this.anchor_[0]<0&&-this.anchor_[0]<this.height_){style.push("height:"+this.height_+"px; line-height:"+(this.height_+this.anchor_[0])+"px;");}else{style.push("height:"+this.height_+"px; line-height:"+this.height_+"px;");}}if(typeof this.anchor_[1]==="number"&&this.anchor_[1]>0&&this.anchor_[1]<this.width_){style.push("width:"+(this.width_-this.anchor_[1])+"px; padding-left:"+this.anchor_[1]+"px;");}else{style.push("width:"+this.width_+"px; text-align:center;");}}else{style.push("height:"+this.height_+"px; line-height:"+this.height_+"px; width:"+this.width_+"px; text-align:center;");}var txtColor=this.textColor_?this.textColor_:"black";var txtSize=this.textSize_?this.textSize_:11;style.push("cursor:pointer; top:"+pos.y+"px; left:"+pos.x+"px; color:"+txtColor+"; position:absolute; font-size:"+txtSize+"px; font-family:Arial,sans-serif; font-weight:bold");return style.join("");};window["MarkerClusterer"]=MarkerClusterer;MarkerClusterer.prototype["addMarker"]=MarkerClusterer.prototype.addMarker;MarkerClusterer.prototype["addMarkers"]=MarkerClusterer.prototype.addMarkers;MarkerClusterer.prototype["clearMarkers"]=MarkerClusterer.prototype.clearMarkers;MarkerClusterer.prototype["fitMapToMarkers"]=MarkerClusterer.prototype.fitMapToMarkers;MarkerClusterer.prototype["getCalculator"]=MarkerClusterer.prototype.getCalculator;MarkerClusterer.prototype["getGridSize"]=MarkerClusterer.prototype.getGridSize;MarkerClusterer.prototype["getExtendedBounds"]=MarkerClusterer.prototype.getExtendedBounds;MarkerClusterer.prototype["getMap"]=MarkerClusterer.prototype.getMap;MarkerClusterer.prototype["getMarkers"]=MarkerClusterer.prototype.getMarkers;MarkerClusterer.prototype["getMaxZoom"]=MarkerClusterer.prototype.getMaxZoom;MarkerClusterer.prototype["getStyles"]=MarkerClusterer.prototype.getStyles;MarkerClusterer.prototype["getTotalClusters"]=MarkerClusterer.prototype.getTotalClusters;MarkerClusterer.prototype["getTotalMarkers"]=MarkerClusterer.prototype.getTotalMarkers;MarkerClusterer.prototype["redraw"]=MarkerClusterer.prototype.redraw;MarkerClusterer.prototype["removeMarker"]=MarkerClusterer.prototype.removeMarker;MarkerClusterer.prototype["removeMarkers"]=MarkerClusterer.prototype.removeMarkers;MarkerClusterer.prototype["resetViewport"]=MarkerClusterer.prototype.resetViewport;MarkerClusterer.prototype["repaint"]=MarkerClusterer.prototype.repaint;MarkerClusterer.prototype["setCalculator"]=MarkerClusterer.prototype.setCalculator;MarkerClusterer.prototype["setGridSize"]=MarkerClusterer.prototype.setGridSize;MarkerClusterer.prototype["setMaxZoom"]=MarkerClusterer.prototype.setMaxZoom;MarkerClusterer.prototype["onAdd"]=MarkerClusterer.prototype.onAdd;MarkerClusterer.prototype["draw"]=MarkerClusterer.prototype.draw;Cluster.prototype["getCenter"]=Cluster.prototype.getCenter;Cluster.prototype["getSize"]=Cluster.prototype.getSize;Cluster.prototype["getMarkers"]=Cluster.prototype.getMarkers;ClusterIcon.prototype["onAdd"]=ClusterIcon.prototype.onAdd;ClusterIcon.prototype["draw"]=ClusterIcon.prototype.draw;ClusterIcon.prototype["onRemove"]=ClusterIcon.prototype.onRemove;})(window,window.WA);(function(window,WA,undefined){if(!window.WaMappingLocation){window.WaMappingLocation=WaMappingLocation;}function WaMappingLocation(initModel,initArgs){if(!WA){return;}initArgs=initArgs||{};var pThis=this,typeName="WaMappingLocation",viewModel=initModel,parentComponent=initArgs.parentComponent,zoom=initArgs.zoom||1,mapWindow=initArgs.mapWindow||window,mapContainerId=initArgs.mapContainerId,clusterImgPath=initArgs.clusterImgPath,markerUrl=initArgs.markerUrl,visitedMarkerUrl=initArgs.visitedMarkerUrl,settings=initArgs.settings,resources=initArgs.resources;pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});pThis.dispose=dispose;var isDisposed=false,mapApi,map,bounds,searchBox,clusterer,zIndex=0,markers=[],geocodeDuration=settings.Duration,maxGeocodeDuration=settings.MaxDuration,geocodeChunkSize=settings.ChunkSizeToStore,geocodeAddressSource=settings.AddressSource,geocodeFailures={},maxGeocodingRetries=settings.MaxRetries,infoContainer=null,geocodedContacts=[],minMarkers=settings.MinMarkersToShowOnStart,contactsAmount=0,markersInfo,adminMode=!!WA.AdminPanel,isFullScreenModeOn=false;function isAdminEditModeActive(){return adminMode&&WA.AdminPanel.PageMode.Mode()===WA.AdminPanel.PageModeType.Edit;}function renderInfoItem(result,item,index){return index?result+"<div><strong>"+item.FieldName+":</strong> "+item.FieldValue+"</div>":result;}function getInfoTitle(memberInfo){return(memberInfo.PopupInfo&&memberInfo.PopupInfo[0]&&memberInfo.PopupInfo[0].FieldValue)||resources.EmptyNameLabel;}function renderInfoWindowContent(memberInfo){return memberInfo.PopupInfo.reduce(renderInfoItem,'<h5><a href="'+WA.String.format(resources.ProfileUrlTemplate,memberInfo.Id)+'" target="_blank">'+getInfoTitle(memberInfo)+"</a></h5>");}function createBounds(){bounds=new mapApi.LatLngBounds();}function removeMarker(marker){marker.setMap(null);}function removeAllMarkers(){if(clusterer){clusterer.clearMarkers();}markers.forEach(removeMarker);markers=[];zIndex=0;}function addPlace(place){if(!place.geometry){return;}if(place.geometry.viewport){bounds.union(place.geometry.viewport);}else{bounds.extend(place.geometry.location);}}function addMarker(contact){var infoWindow=new mapApi.InfoWindow({content:renderInfoWindowContent(contact)}),position=new mapApi.LatLng(contact.Latitude,contact.Longitude),marker=new mapApi.Marker({position:position,map:map,icon:markerUrl,title:getInfoTitle(contact)});marker.addListener("click",function(){zIndex++;infoWindow.setZIndex(zIndex);infoWindow.open(map,marker);marker.setZIndex(zIndex);marker.setIcon(visitedMarkerUrl);});markers.push(marker);bounds.extend(position);}function drawMarkers(contacts){createBounds();contacts.forEach(addMarker);fitMapToBounds();}function fitMapToBounds(){if(!markers.length){map.setZoom(zoom);return;}map.fitBounds(bounds);map.panToBounds(bounds);}function createSearchBox(){if(!mapApi.places){return;}var input=document.createElement("input");input.id=viewModel.id+"-searchbox";input.type="text";input.style.cssText="margin-top: 10px;"+"font-family: Roboto, Arial, sans-serif;"+"border: 1px solid transparent; border-radius: 2px 0 0 2px;"+"box-sizing: border-box; -moz-box-sizing: border-box;"+"min-width: 185px;"+"height: 29px;"+"padding: 0 10px;"+"outline: none;"+"box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);"+"background-color: #fff;"+"font-size: 15px;"+"text-overflow: ellipsis;";input.placeholder=resources.SearchBoxEmptyLabel;searchBox=new mapApi.places.SearchBox(input);map.controls[mapApi.ControlPosition.TOP_LEFT].push(input);searchBox.addListener("places_changed",onPlacesChanged);}function onPlacesChanged(){var places=searchBox.getPlaces();if(places&&places.length){createBounds();places.forEach(addPlace);fitMapToBounds();}}function drawMap(contacts){if(isDisposed||!contacts){return;}var mapContainer=mapContainerId&&WA.$(mapContainerId,mapWindow);map=new mapApi.Map(mapContainer,{center:new mapApi.LatLng(0,0),zoom:zoom,mapTypeId:mapApi.MapTypeId.ROADMAP});createSearchBox();drawMarkers(contacts);clusterer=new WaGoogleMapsMarkerClusterer(map,markers,{imagePath:clusterImgPath});markersInfo=new WaMappingLocationMarkersInfo({},{map:map,updaterPosition:mapApi.ControlPosition.BOTTOM_CENTER,resources:{AdminInfoMessage:resources.AdminInfoMessage,AdminOverLimitMessageTitle:resources.AdminOverLimitMessageTitle,AdminOverLimitMessage:resources.AdminOverLimitMessage,UpdateMarkersLabel:resources.UpdateMarkersLabel,UpdatingMarkersLabel:resources.UpdatingMarkersLabel,ReadyToUpdateMarkersTemplate:resources.ReadyToUpdateMarkersTemplate,UpdatingFinishedLabel:resources.UpdatingFinishedLabel,MarkerOnTheMapLabel:resources.MarkerOnTheMapLabel,GeocodingFailedZeroResultsLabel:resources.GeocodingFailedZeroResultsLabel,GeocodingFailedInvalidRequestLabel:resources.GeocodingFailedInvalidRequestLabel},statuses:mapApi.GeocoderStatus,adminMode:adminMode,parentComponent:pThis});markersInfo.UpdateClick.addHandler(drawGeocodedContacts);mapApi.event.addListener(map,"bounds_changed",onMapBoundsChanged);if(adminMode){WA.AdminPanel.PageModeChanged.addHandler(onPageModeChanged);}}function fixSearchBoxFullScreen(){document.querySelectorAll(".pac-container").forEach(function(container){container.style.zIndex=container.style.zIndex||10000000000;});}function onMapBoundsChanged(){var mapHolder=map.getDiv().firstChild,isPrevFullScreenModeOn=isFullScreenModeOn;isFullScreenModeOn=!!(mapHolder&&mapHolder.offsetHeight===window.innerHeight&&mapHolder.offsetWidth===window.innerWidth);if(isFullScreenModeOn&&isPrevFullScreenModeOn!==isFullScreenModeOn){fixSearchBoxFullScreen();}}function onPageModeChanged(sender,args){if(args===WA.AdminPanel.PageModeType.Edit){drawGeocodedContacts();}}function onGoogleMapsApiLoaded(){if(isDisposed){return;}mapApi=google.maps;if(!mapApi){return;}var mappingLocationApiClient=new WaMappingLocationServiceApiClient({authorizationToken:resources.AuthorizationToken,endpoint:resources.MappingLocationServiceEndpointUrl,fastIntegrationEnabled:resources.FastIntegrationEnabled,environmentId:resources.EnvironmentId,environmentReference:resources.EnvironmentReference},{parentComponent:pThis});mappingLocationApiClient.ContactInfo().done(onContactsInfoReceived).fail(onContactsInfoRequestFailed);}function onGadgetDeleted(sender,args){args=args||{};if(args.componentId==viewModel.id){map=null;bounds=null;searchBox=null;dispose();}}function isGeocoded(contact){return contact.AddressGeocoded;}function wasGeocodeFailed(contact){return contact.GeocodeFailed;}function groupContactsByGeocoding(accumulator,contact){!wasGeocodeFailed(contact)&&accumulator[isGeocoded(contact)?"processed":"unprocessed"].push(contact);return accumulator;}function getContactAddress(contact){return{GeocodeFailed:contact.GeocodeFailed,Address:contact.Address,FormattedAddress:contact.FormattedAddress,Source:geocodeAddressSource,Geometry:{Location:{Longitude:contact.Longitude,Latitude:contact.Latitude}},Token:contact.Token!=null?contact.Token:"",ContactId:contact.Id};}function drawGeocodedContacts(){if(geocodedContacts.length){geocodedContacts.forEach(addMarker);clusterer.addMarkers(markers.slice(-1*geocodedContacts.length));fitMapToBounds();geocodedContacts=[];}showContactsProcessingInfo();}function getContactGeocode(geocoder,unprocessedContacts,addressesToUpdate,addressesUpdater){if(isDisposed){return;}var contact=unprocessedContacts.shift();if(!contact){showContactsProcessingInfo();if(addressesToUpdate.length){addressesUpdater(addressesToUpdate);}return;}if(!contact.Address){getContactGeocode(geocoder,unprocessedContacts,addressesToUpdate,addressesUpdater);return;}geocoder.geocode({address:contact.Address},function(results,status){if(isDisposed){return;}var statuses=mapApi.GeocoderStatus;if(status===statuses.OK){var info=results[0];contact.GeocodeFailed=false;contact.AddressGeocoded=true;contact.FormattedAddress=info.formatted_address;contact.Longitude=info.geometry.location.lng();contact.Latitude=info.geometry.location.lat();geocodedContacts.push(contact);if(markers.length<minMarkers||isAdminEditModeActive()){drawGeocodedContacts();}addressesToUpdate.push(getContactAddress(contact));if(addressesToUpdate.length===geocodeChunkSize){addressesUpdater(addressesToUpdate);addressesToUpdate=[];}}else{contact.GeocodeFailed=true;geocodeFailures[status]=geocodeFailures[status]||[];if(status===statuses.OVER_QUERY_LIMIT||status===statuses.UNKNOWN_ERROR){if(status===statuses.OVER_QUERY_LIMIT){geocodeDuration=Math.min(2*geocodeDuration,maxGeocodeDuration);}if(typeof contact.GeocodingRetries!=="number"){contact.GeocodingRetries=0;}else{contact.GeocodingRetries++;}if(contact.GeocodingRetries<maxGeocodingRetries){unprocessedContacts.push(contact);}else{geocodeFailures[status].push(contact);}}else{if(status===statuses.ZERO_RESULTS){addressesToUpdate.push(getContactAddress(contact));if(addressesToUpdate.length===geocodeChunkSize){addressesUpdater(addressesToUpdate);addressesToUpdate=[];}}geocodeFailures[status].push(contact);}}showContactsProcessingInfo();WA.throttle(function(){getContactGeocode(geocoder,unprocessedContacts,addressesToUpdate,addressesUpdater);},geocodeDuration);});}function onContactsInfoReceived(info){if(WA.Object.getTypeString(info)!=="array"){return;}var contacts=info.reduce(groupContactsByGeocoding,{processed:[],unprocessed:[]}),addressesApiClient=new WaAddressServiceApiClient({authorizationToken:resources.AuthorizationToken,endpoint:resources.AddressServiceEndpointUrl,fastIntegrationEnabled:resources.FastIntegrationEnabled,environmentId:resources.EnvironmentId},{parentComponent:pThis});drawMap(contacts.processed);contactsAmount=info.length;minMarkers=Math.min(minMarkers,contactsAmount);showContactsProcessingInfo();getContactGeocode(new mapApi.Geocoder(),contacts.unprocessed,[],addressesApiClient.geocode);}function showContactsProcessingInfo(){var failures={},failed=0;for(var key in geocodeFailures){if(geocodeFailures.hasOwnProperty(key)){failures[key]=geocodeFailures[key].length;failed+=geocodeFailures[key].length;}}markersInfo.setState({total:contactsAmount,shown:markers.length,readyToShow:geocodedContacts.length,failed:failed,failures:failures,finished:markers.length===contactsAmount-failed});WA.Gadgets.notifyGadgetChanged();}function onContactsInfoRequestFailed(error){}function init(){parentComponent.Dispose.addHandler(dispose);parentComponent.GoogleMapsApiLoaded.addHandler(onGoogleMapsApiLoaded);WA.Gadgets.GadgetDeleted.addHandler(onGadgetDeleted);}function dispose(){if(isDisposed){return;}isDisposed=true;pThis.Dispose.fireHandlers({id:viewModel.id});parentComponent.GoogleMapsApiLoaded.removeHandler(onGoogleMapsApiLoaded);WA.Gadgets.GadgetDeleted.removeHandler(onGadgetDeleted);parentComponent.Dispose.removeHandler(dispose);if(mapApi&&map){mapApi.event.clearInstanceListeners(map);}if(adminMode){WA.AdminPanel.PageModeChanged.removeHandler(onPageModeChanged);}removeAllMarkers();viewModel=null;resources=null;parentComponent=null;mapApi=null;markers=null;clusterer=null;geocodeFailures=null;infoContainer=null;geocodedContacts=null;markersInfo=null;pThis.RenderComplete=null;pThis.Dispose=null;}init();}})(window,window.WA);(function(window,WA,undefined){if(!window.WaMappingLocationMarkersInfo){window.WaMappingLocationMarkersInfo=WaMappingLocationMarkersInfo;}function WaMappingLocationMarkersInfo(initModel,initArgs){if(!WA){return;}initArgs=initArgs||{};var pThis=this,typeName="WaMappingLocationMarkersInfo",viewModel=initModel,parentComponent=initArgs.parentComponent,map=initArgs.map,updaterPosition=initArgs.updaterPosition,resources=initArgs.resources,statuses=initArgs.statuses,adminMode=initArgs.adminMode;pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});pThis.UpdateClick=WA.Tools.EventHandlers.createHandlers(pThis,{id:"UpdateClick"});pThis.dispose=dispose;pThis.setState=setState;var isDisposed=false,updateContainerId="wa-mapping-location-update-container",updateContainerMessageId="wa-mapping-location-update-container-message",updateContainerInfoId="wa-mapping-location-update-container-info",updateContainerHolder,updateContainer,updateContainerInfo,updateContainerMessage,hasMarkersToShow=false,overQueryLimitMessage;function showUpdateContainer(){if(!map.controls[updaterPosition].getLength()){map.controls[updaterPosition].push(updateContainerHolder);}}function hideUpdateContainer(){map.controls[updaterPosition].clear();}function setProcessedState(state){var statusLabels={};hideUpdateContainer();if(!adminMode||!state.finished){return;}if(state.failures[statuses.OVER_QUERY_LIMIT]){overQueryLimitMessage.style.display="block";}updateContainer.style.cursor="";updateContainer.style.textAlign="left";updateContainer.style.fontSize="12px";updateContainer.style.alignItems="center";updateContainer.style.justifyContent="space-between";updateContainer.style.minWidth="450px";statusLabels[statuses.ZERO_RESULTS]=resources.GeocodingFailedZeroResultsLabel;statusLabels[statuses.INVALID_REQUEST]=resources.GeocodingFailedInvalidRequestLabel;updateContainer.innerHTML=WaMappingLocationMarkersInfo.Template.geocodingResult({shown:state.shown,failed:state.failed,failures:state.failures,statuses:statuses,updatingFinishedLabel:resources.UpdatingFinishedLabel,markersOnTheMapLabel:resources.MarkerOnTheMapLabel,statusLabels:statusLabels});updateContainer.style.display="flex";showUpdateContainer();}function setProcessingState(state){updateContainerInfo.innerHTML=WA.String.format(resources.ReadyToUpdateMarkersTemplate,state.total,state.shown,state.readyToShow,(state.total-state.shown-state.failed));updateContainerMessage.innerHTML=WaMappingLocationMarkersInfo.Template.updateContainerMessage(resources.UpdateMarkersLabel);showUpdateContainer();}function setState(nextState){nextState=nextState||{};if(!nextState.total){hideUpdateContainer();return;}hasMarkersToShow=!!nextState.readyToShow;if(hasMarkersToShow){setProcessingState(nextState);}else{if(nextState.finished){setProcessedState(nextState);}else{hideUpdateContainer();}}}function createAdminInfoContainers(){var infoContainer=document.createElement("div"),mapContainer=map.getDiv();infoContainer.style.cssText="background:#d8e6f1;border:1px solid #3e5670;padding:8px;font-size:12px;";infoContainer.innerHTML=resources.AdminInfoMessage;mapContainer.parentNode.insertBefore(infoContainer,mapContainer);overQueryLimitMessage=document.createElement("div");overQueryLimitMessage.style.cssText="background:rgb(255, 229, 229);border:1px solid #FF0000;padding:8px;font-size:12px;display:none;";overQueryLimitMessage.innerHTML=WaMappingLocationMarkersInfo.Template.overQueryLimitMessage(resources.AdminOverLimitMessageTitle,resources.AdminOverLimitMessage);mapContainer.parentNode.insertBefore(overQueryLimitMessage,mapContainer);}function createUpdateContainer(){updateContainerHolder=document.createElement("div");updateContainerHolder.innerHTML=WaMappingLocationMarkersInfo.Template.updateContainer({updateContainerId:updateContainerId,updateContainerInfoId:updateContainerInfoId,updateContainerMessageId:updateContainerMessageId});updateContainer=updateContainerHolder.querySelector("#"+updateContainerId);updateContainerInfo=updateContainerHolder.querySelector("#"+updateContainerInfoId);updateContainerMessage=updateContainerHolder.querySelector("#"+updateContainerMessageId);WA.addHandler(updateContainer,"click",onUpdateClick);}function setUpdatingState(){updateContainerInfo.innerHTML="";updateContainerMessage.innerHTML=resources.UpdatingMarkersLabel;showUpdateContainer();}function onUpdateClick(){if(isDisposed||!hasMarkersToShow){return;}setUpdatingState();pThis.UpdateClick.fireHandlers();}function init(){parentComponent.Dispose.addHandler(dispose);createUpdateContainer();if(adminMode){createAdminInfoContainers();}}function dispose(){if(isDisposed){return;}isDisposed=true;WA.removeHandler(updateContainer,"click",onUpdateClick);pThis.Dispose.fireHandlers();parentComponent.Dispose.removeHandler(dispose);viewModel=null;resources=null;parentComponent=null;map=null;updateContainerHolder=null;updateContainer=null;updateContainerInfo=null;updateContainerMessage=null;statuses=null;overQueryLimitMessage=null;pThis.Dispose=null;pThis.UpdateClick=null;}init();}})(window,window.WA);(function(window,WA,undefined){if(!window.WaMappingLocationMarkersInfo.Template){window.WaMappingLocationMarkersInfo.Template={overQueryLimitMessage:overQueryLimitMessage,updateContainerMessage:updateContainerMessage,updateContainer:updateContainer,geocodingResult:geocodingResult};}function overQueryLimitMessage(title,message){return'<h6 style="margin:0 0 8px;">'+title+"</h6>"+message;}function updateContainerMessage(message){return'<span style="font-size:16px; font-weight:bold; transform:rotate(90deg); display: inline-block;">&#x21bb;</span> '+message;}function updateContainer(m){return'<div class="gm-style"'+' style="margin-bottom:10px;background:black;opacity:0.8;color:white;padding:15px;text-align:center;font-size:14px;cursor:pointer;white-space:nowrap;overflow:hidden;display:inline-block;border-radius:3px;"'+' id="'+m.updateContainerId+'">'+'<div style="font-size:12px; margin-bottom:6px;" id="'+m.updateContainerInfoId+'"></div>'+'<div id="'+m.updateContainerMessageId+'"></div>';}function geocodingResult(m){var headBottomSpacing=8,html=m.updatingFinishedLabel+"<div>"+'<table style="border:none; border-spacing:unset; padding:0;">'+"<thead>"+"<tr>"+'<th class="gm-style" style="font-size:12px;color:white;text-align:left;padding-right:15px;padding-bottom:'+(m.failed?headBottomSpacing:0)+'px;">'+m.markersOnTheMapLabel+":</th>"+'<th class="gm-style" style="font-size:12px;color:white;text-align:right;padding-bottom:'+(m.failed?headBottomSpacing:0)+'px;">'+m.shown+"</th></tr>"+"</thead>";if(m.failed){html+="<tbody>";for(var status in m.failures){if(m.failures.hasOwnProperty(status)&&m.failures[status]&&m.statusLabels[status]){html+="<tr>"+'<td class="gm-style" style="font-size:12px;color:white;text-align:left;padding-right:15px;">'+m.statusLabels[status]+":</td>"+'<td class="gm-style" style="font-size:12px;color:white;text-align:right;">'+m.failures[status]+"</td>"+"</tr>";}}html+="</tbody>";}return html+"</table>"+"</div>";}})(window,WA);(function(window,WA,undefined){if(!window.WaMappingLocationServiceApiClient){window.WaMappingLocationServiceApiClient=WaMappingLocationServiceApiClient;}function WaMappingLocationServiceApiClient(initModel,initArgs){if(!WA){return;}initArgs=initArgs||{};var pThis=this,typeName="WaMappingLocationServiceApiClient",viewModel=initModel,parentComponent=initArgs.parentComponent,authorizationToken=viewModel.authorizationToken,endpoint=viewModel.endpoint;pThis.toString=function(){return typeName;};pThis.Dispose=WA.Tools.EventHandlers.createHandlers(pThis,{id:"Dispose"});var isDisposed=false,serviceHttpClient;pThis.ContactInfo=ContactInfo;function ContactInfo(){return serviceHttpClient.fetch(endpoint,WA.Ajax.appendRequestHeaders({cache:false,global:false,type:"GET",crossDomain:true},additionalHeaders));}function init(){parentComponent.Dispose.addHandler(dispose);additionalHeaders=viewModel.fastIntegrationEnabled&&viewModel.environmentId?[{key:"X-Api-EnvironmentId",value:viewModel.environmentId}]:[];if(viewModel.environmentReference){additionalHeaders.push({key:"X-Api-EnvironmentReference",value:viewModel.environmentReference});}serviceHttpClient=new WA.ServiceHttpClient({authorizationToken:viewModel.authorizationToken},{parentComponent:pThis});}function dispose(){if(isDisposed){return;}isDisposed=true;pThis.Dispose.fireHandlers();viewModel=null;parentComponent=null;pThis.Dispose=null;}init();}})(window,window.WA);(function(){if(!window.ContactAdvancedSearch){window.ContactAdvancedSearch={};}var contactAdvancedSearch=window.ContactAdvancedSearch;var anyConditionValue=-1;var textBoxConditionValue={Empty:4,NotEmpty:5};var dateConditionValue={ThisMonth:4,ThisYear:5,LastMonth:7,LastYear:8,NotDefined:9,AnyDate:10};var conditionSelectorState={Empty:0,NotEmpty:1,Same:2};var selectorTypeId={String:0,RadioButtonList:1,CheckBoxList:2,Date:3,Dropdown:4,Int:5,Decimal:6};var dropdownTypeId=4;var checkCriteriaChangedTimeout;contactAdvancedSearch.initialize=function(optionItems){contactAdvancedSearch.optionItems=optionItems||contactAdvancedSearch.optionItems;contactAdvancedSearch.initialized=true;};contactAdvancedSearch.dispose=function(){if(!contactAdvancedSearch.initialized){return;}contactAdvancedSearch.initialized=false;};contactAdvancedSearch.validateCriteriaSelected=function(source,args){for(var i=0;i<contactAdvancedSearch.optionItems.length;i++){var conditionSelector=WA.$(contactAdvancedSearch.optionItems[i].csId,window);if(conditionSelector.value!=anyConditionValue){args.IsValid=true;return;}}args.IsValid=false;};contactAdvancedSearch.prepareValidators=function(){for(var i=0;i<contactAdvancedSearch.optionItems.length;i++){var conditionSelector=WA.$(contactAdvancedSearch.optionItems[i].csId,window);if(conditionSelector.value==anyConditionValue){disableValidators(contactAdvancedSearch.optionItems[i].vIds);continue;}if(contactAdvancedSearch.optionItems[i].t==selectorTypeId.String&&!requiredTextBoxConditionSelected(conditionSelector)){disableValidators(contactAdvancedSearch.optionItems[i].vIds);continue;}if(contactAdvancedSearch.optionItems[i].t==selectorTypeId.Date&&!requiredDateConditionSelected(conditionSelector)){disableValidators(contactAdvancedSearch.optionItems[i].vIds);continue;}enableValidators(contactAdvancedSearch.optionItems[i].vIds);}};contactAdvancedSearch.dateConditionSelector=function(controlId,linkedControlId){var dropDownList=WA.$(controlId,window);var dateControlContainer=WA.$(linkedControlId,window).parentNode;var newReadOnlyContainer=document.createElement("DIV");var readOnlyContainerId="readOnlyContainer_"+linkedControlId;newReadOnlyContainer.setAttribute("id",readOnlyContainerId);newReadOnlyContainer.setAttribute("class","fieldItem");var readOnlyContainer=WA.$(readOnlyContainerId,window);var dateTextThisMonth=MemberDirectoryAdvancedSearchCriteriaList.Labels.DateTextThisMonth;var dateTextThisYear=MemberDirectoryAdvancedSearchCriteriaList.Labels.DateTextThisYear;var dateTextLastMonth=MemberDirectoryAdvancedSearchCriteriaList.Labels.DateTextLastMonth;var dateTextLastYear=MemberDirectoryAdvancedSearchCriteriaList.Labels.DateTextLastYear;function setReadonlyContainerText(text){if(!readOnlyContainer){newReadOnlyContainer.innerHTML=text;newReadOnlyContainer.style.display="block";dateControlContainer.parentNode.appendChild(newReadOnlyContainer);}else{readOnlyContainer.innerHTML=text;readOnlyContainer.style.display="block";}dateControlContainer.style.display="none";}var selectedValue=dropDownList.options[dropDownList.selectedIndex].value;if(selectedValue==anyConditionValue||selectedValue==dateConditionValue.NotDefined||selectedValue==dateConditionValue.AnyDate){dateControlContainer.style.display="none";if(readOnlyContainer){readOnlyContainer.innerHTML="";readOnlyContainer.style.display="none";}return;}if(selectedValue==dateConditionValue.ThisMonth){setReadonlyContainerText(dateTextThisMonth);return;}if(selectedValue==dateConditionValue.LastMonth){setReadonlyContainerText(dateTextLastMonth);return;}if(selectedValue==dateConditionValue.ThisYear){setReadonlyContainerText(dateTextThisYear);return;}if(selectedValue==dateConditionValue.LastYear){setReadonlyContainerText(dateTextLastYear);return;}dateControlContainer.style.display="block";if(readOnlyContainer){readOnlyContainer.innerHTML="";readOnlyContainer.style.display="none";}};contactAdvancedSearch.textBoxConditionSelector=function(controlId,linkedControlContainerId){var control=WA.$(controlId,window);var linkedControlContainer=WA.$(linkedControlContainerId,window);if(control.value==textBoxConditionValue.Empty||control.value==textBoxConditionValue.NotEmpty){linkedControlContainer.style.display="none";}else{linkedControlContainer.style.display="block";}};contactAdvancedSearch.disposeCriteriaChangeScript=function(){checkCriteriaChangedTimeout=null;};contactAdvancedSearch.initCriteriaChangeScript=function(){for(var i=0;i<optionItems.length;i++){var valuesContainer=WA.$(optionItems[i].vsCId,window);if(optionItems[i].t==selectorTypeId.Dropdown){optionItems[i].inputs=valuesContainer.getElementsByTagName("SELECT");}else{optionItems[i].inputs=valuesContainer.getElementsByTagName("INPUT");}optionItems[i].conditionSelector=WA.$(optionItems[i].csId,window);}runCriteriaChanged();};function runCriteriaChanged(){for(var i=0;i<optionItems.length;i++){var changeStateTo=getChangeDirection(optionItems[i]);applyChangeDirection(optionItems[i],changeStateTo);clearValueIfConditionEmpty(optionItems[i]);}checkCriteriaChangedTimeout=setTimeout(function(){runCriteriaChanged();},300);}function getChangeDirection(item){if(!item.inputs||item.inputs.length==0||!item.inputs[0]){return;}if(item.t==selectorTypeId.Dropdown){var change=conditionSelectorState.Same;if(item.prevSelectedIndex!=item.inputs[0].selectedIndex&&item.inputs[0].selectedIndex!=0){change=conditionSelectorState.NotEmpty;}else{if(item.inputs[0].selectedIndex==0){change=conditionSelectorState.Empty;}}item.prevSelectedIndex=item.inputs[0].selectedIndex;return change;}else{if(item.t==selectorTypeId.String||item.t==selectorTypeId.Int||item.t==selectorTypeId.Decimal||item.toLocaleString==selectorTypeId.Date){return item.inputs[0].value?conditionSelectorState.NotEmpty:conditionSelectorState.Empty;}else{if(item.t==selectorTypeId.CheckBoxList){for(var i=0;i<item.inputs.length;i++){if(item.inputs[i].checked){return conditionSelectorState.NotEmpty;}}return conditionSelectorState.Empty;}else{if(item.t==selectorTypeId.RadioButtonList){for(var i=0;i<item.inputs.length;i++){if(item.inputs[i].checked){var change=item.prevSelectedIndex!=i?conditionSelectorState.NotEmpty:conditionSelectorState.Same;item.prevSelectedIndex=i;return change;}}return conditionSelectorState.Same;}}}}}function applyChangeDirection(item,changeStateTo){if(item.prevChangeStateTo!=changeStateTo&&changeStateTo!=conditionSelectorState.Same){if(changeStateTo==conditionSelectorState.Empty&&item.conditionSelector.selectedIndex!=conditionSelectorState.Empty&&!((item.t==selectorTypeId.String||item.t==selectorTypeId.Int||item.t==selectorTypeId.Decimal)&&(item.conditionSelector.value==textBoxConditionValue.Empty||item.conditionSelector.value==textBoxConditionValue.NotEmpty))){item.conditionSelector.selectedIndex=conditionSelectorState.Empty;}if(changeStateTo==conditionSelectorState.NotEmpty&&item.conditionSelector.selectedIndex==conditionSelectorState.Empty){item.conditionSelector.selectedIndex=conditionSelectorState.NotEmpty;}}item.prevChangeStateTo=changeStateTo;}function clearValueIfConditionEmpty(item){if(!item.inputs||item.inputs.length==0||!item.inputs[0]){return;}if(item.conditionSelector.selectedIndex!=0){return;}if(item.t==selectorTypeId.Dropdown){item.prevSelectedIndex=item.inputs[0].selectedIndex;if(item.inputs[0].selectedIndex!==0){item.inputs[0].selectedIndex=0;}}else{if(item.t==selectorTypeId.String||item.t==selectorTypeId.Int||item.t==selectorTypeId.Decimal||item.toLocaleString==selectorTypeId.Date){item.inputs[0].value="";}else{if(item.t==selectorTypeId.CheckBoxList){for(var i=0;i<item.inputs.length;i++){item.inputs[i].checked=false;}}else{if(item.t==selectorTypeId.RadioButtonList){for(var i=0;i<item.inputs.length;i++){if(item.inputs[i].checked){item.prevSelectedIndex=i;}item.inputs[i].checked=false;}}}}}}function requiredDateConditionSelected(conditionSelector){if(conditionSelector.value!=dateConditionValue.ThisMonth&&conditionSelector.value!=dateConditionValue.ThisYear&&conditionSelector.value!=dateConditionValue.LastMonth&&conditionSelector.value!=dateConditionValue.LastYear&&conditionSelector.value!=dateConditionValue.NotDefined&&conditionSelector.value!=dateConditionValue.AnyDate){return true;}return false;}function requiredTextBoxConditionSelected(conditionSelector){if(conditionSelector.value!=textBoxConditionValue.Empty&&conditionSelector.value!=textBoxConditionValue.NotEmpty){return true;}return false;}function enableValidators(vIds){for(var i=0;i<vIds.length;i++){WA.$(vIds[i],window).enabled=true;}}function disableValidators(vIds){for(var i=0;i<vIds.length;i++){WA.$(vIds[i],window).enabled=false;}}})();function ContactAdvancedSearch_Page_Parsed(){ContactAdvancedSearch.initialize(optionItems);}

/*compiled*/
var MemberDirectoryListRenderer;

(function() {
// start of MemberDirectoryListRenderer singleton

  var $ = function (id) { return document.getElementById(id); };

  if(MemberDirectoryListRenderer == null) 
  {
    MemberDirectoryListRenderer = new Object();

    /*debug*/var logEnabled = false; function log(text) { if (logEnabled && WA.Log) { WA.Log.add('MemberDirectoryListRenderer', text); } }

    MemberDirectoryListRenderer.FormId = 0;
    MemberDirectoryListRenderer.DataSourceId = 0;

    MemberDirectoryListRenderer.outputBlockId = 'memberDirectory';
    MemberDirectoryListRenderer.foundBlockId = 'membersFound';
    MemberDirectoryListRenderer.pagingBlockId = 'idPagingData';
    MemberDirectoryListRenderer.pagingBlock2Id = 'idPagingData2';
    MemberDirectoryListRenderer.waitMessagesBlockId = 'idWaitMessages';
    MemberDirectoryListRenderer.reloadLinkId = 'idReloadData';
    MemberDirectoryListRenderer.selectedMembersFieldId = '';
    MemberDirectoryListRenderer.titleLabelId = '';
    MemberDirectoryListRenderer.titleTemplate = '';
    MemberDirectoryListRenderer.imgTemplateRelativePath = '';
    MemberDirectoryListRenderer.MemberDirectoryListWebServiceUrl_LoadMembers = '';
    MemberDirectoryListRenderer.notifyGadgetChangedTimeout = 27;

    MemberDirectoryListRenderer.labels = 
    {
      serverLoadingStarted    :  '<img src="/Admin/html_res/images/asyncloadprogress.gif">Loading...'
     ,serverLoadingError      : 'Loading error&nbsp;'
     ,serverLoadingErrorAlert : 'Server error while loading data.<br>Please contact us at support@wildapricot.com and let us know what led to this error.<br><br>Sorry for inconvenience.'
     ,processingServerData    : 'Processing data, please wait...'
     ,processingCachedData    : 'Processing cache...'
     ,searchingKeywords       : 'searching...'
     ,searchingEmpty          : 'loading...'
     ,displayingFound         : 'displaying...'
     ,pagingTemplate          : 'Show:{0}'
     ,noMembersInDatabase     : 'No members in your database.'
     ,noMembersFound          : 'No members found. Edit your search text or clear search box to show all members.'
     ,detailsUrlTitle         : 'Go to member details'
     ,viewDetails             : 'View details'
     ,headers                 : { column1: '', column2: '', column3: '', column4: '' }
    };

    // public methods
    MemberDirectoryListRenderer.init = init;
    MemberDirectoryListRenderer.highlightRowAndNext = highlightRowAndNext;
    MemberDirectoryListRenderer.normlightRowAndNext = normlightRowAndNext;
    MemberDirectoryListRenderer.highlightRowAndPrev = highlightRowAndPrev;
    MemberDirectoryListRenderer.normlightRowAndPrev = normlightRowAndPrev;
    MemberDirectoryListRenderer.redirectToMemberDetails = redirectToMemberDetails;
    MemberDirectoryListRenderer.pagerChanged = pagerChanged;
  }

  // state vars
  var isInited = false;
  var directoryData;
  var searchAsyncData;
  var forceNextAskSearch = false;
  var lastSeachBoxAskValue = '';
  var isCached = false;
  var cache;

  // timeouts and intervals
  var searchBoxAskTimeout;
  var processSearchTimeout;
  var searchAsyncTimeout;
  var notifyGadgetChangedTimeout = MemberDirectoryListRenderer.notifyGadgetChangedTimeout;
  
  // consts
  var pagerRangeNameLength = 4;
  var pagerRangeLevelLength = 5;
  var maxDisplayRecords = 50;
  var searchBoxAskIntervalMs = 50;
  var processSearchTimeoutMs = 250;
  var searchAsyncTimeoutMs = 10;
  var searchAsyncMaxRecords = 1000;

  //filter
  var maxFilterQty = 4;
  var filterValues = new Array (null, null, null, null);
  var filterOptionCounters = new Array (null, null, null, null);
  var filterOptionNames = new Array (null, null, null, null);
  
  // templates

  var footerTemplate = '</table>';
  var pagerTemplate = [
    '<select onchange="MemberDirectoryListRenderer.pagerChanged(this);">'
  , '</select>'];
  var pagerOptionTemplate = [
    '<option value="'
  , '">'
  , '-'
  , '</option>'];
  var tableStart = '<table id="membersTable" class="membersTable" cellspacing="0"><thead><tr>';
  var thTemplate = [
    '<th width="'
  , '%">'
  , '</th>'];
  var headerEnd = "</tr></thead>"
  var tdTemplate = [
    '<td class="'
  , '" width="'
  , '%">'
  , '</td>'];
  var linkTemplate = [
    '<h5><a title="'
  , '" onclick="globalUtils.stopEventPropogation(event)" href="'
  , '">'
  , '</a></h5>'];
  var bottomRowTemplate = [
    '</tr><tr class="normal" bottomrow=\'true\' onclick="MemberDirectoryListRenderer.redirectToMemberDetails(\''
  , '\')" onmouseover="MemberDirectoryListRenderer.highlightRowAndPrev(this)" onmouseout="MemberDirectoryListRenderer.normlightRowAndPrev(this)"><td class=\'memberDirectoryBottomRow\' colspan=\''
  , '\'><div class=\'mainDiv\'>'
  , '</div></td>'];
  var memberTemplate = [
    '<tr class="normal" onclick="MemberDirectoryListRenderer.redirectToMemberDetails(\''
  , '\')" onmouseover="MemberDirectoryListRenderer.highlightRowAndNext(this)" onmouseout="MemberDirectoryListRenderer.normlightRowAndNext(this)">'
  , '</tr>'];
  var imgTemplate = [
    '<img src=\''
  , '?memberId='
  , '&id='
  , '&t='
  , '\'></img>'];
  var emailTemplate = [
    '<a href="mailto:'
  , '" onclick="window.location=this.href;BonaPage.stopEvent(event);">'
  , '</a>'];

  var emailReplaceTemplate = '<a href="mailto:$1" onclick="window.location=this.href;BonaPage.stopEvent(event);">$1</a>';

  // reexp
  var emailReplace1 = /([\w#%\"\*\.!\$\+\-\=\?\^\'\{\}\|\~\&]+@(?:[a-zA-Z0-9_-]+\.)+[a-zA-Z]{1,20})/gim;

  /*****************************************************/
  /***   INITIALIZATION AND DISPOSING                ***/
  /*****************************************************/

  function init()
  {
    /*debug*/log('init');

    disableSearch();
    initDisposeEvents();    
    loadRecordsAsync();
    initCache();
    initFilter();

    WA.Gadgets.GadgetDeleted.addHandler(onGadgetDeleted);

    isInited = true;
  }  
  
  function initDisposeEvents()
  {
    /*debug*/log('initDisposeEvents');

    if (document.all)
      window.attachEvent('onunload', dispose);
    else
      window.addEventListener('unload', dispose, false);
  }
  
  function dispose()
  {
    /*debug*/log('dispose');

    isInited = false;

    WA.Gadgets.GadgetDeleted.removeHandler(onGadgetDeleted);

    disposeAllTimeouts();
    disposeSearchData();
    directoryData = null;
  }


  function onGadgetDeleted(sender, args)
  {
    /*debug*/log('onGadgetDeleted');
    args = args || {};

    var versionData = MemberDirectoryListRenderer.VersionData;

    if (versionData && args.componentId && args.componentId == versionData.componentId)
    {
      dispose();
    }
  }

  
  function disposeAllTimeouts()
  {
    /*debug*/log('disposeAllTimeouts');

    WA.clearThrottle(doNotifyGadgetChanged);

    if (searchBoxAskTimeout)
      clearTimeout(searchBoxAskTimeout);
  
    if (processSearchTimeout)
      clearTimeout(processSearchTimeout);

    terminateAsyncSearch();
  }
  
  function disposeSearchData()
  {
    /*debug*/log('disposeSearchData');

    searchData = null;
  }

  /*****************************************************/
  /***   CACHE HELPERS                               ***/
  /*****************************************************/
  
  function initCache()
  {
    /*debug*/log('initCache');

    if (!cache)
    {
      cache = new Object();
    }
  
    try
    {
      top.cache = cache;
    }
    catch(e){}
          
    if (!cache.memberDirectory)
    {
      cache.memberDirectory = {
        isReady : false,
        serverResponse : null,
        totalCount : null,
        colTitlesData : null,
        membersData : null,
        searchData : null,
        safeData : null,
        foundCount: null
      };     
    }
  }
  
  function clearCache()
  {
    /*debug*/log('clearCache');

    if (cache && cache.memberDirectory)
    {
      cache.memberDirectory = null;
    }
    
    initCache();
  }

  function getCachedDirectoryData()
  {
    /*debug*/log('getCachedDirectoryData');

    initCache();
    return cache.memberDirectory;
  }

  /*****************************************************/
  /***   DISPLAY MESSAGES HELPERS                    ***/
  /*****************************************************/
  
  function setMessage(message)
  {
    /*debug*/log('setMessage');

    var messageBlock = $(MemberDirectoryListRenderer.waitMessagesBlockId);
    if (messageBlock)
    {
      messageBlock.innerHTML = message;
      messageBlock.style.display = message ? 'inline' : 'none';
    }
  }

  function setFound(found)
  {
    /*debug*/log('setFound');

    var foundBlock = $(MemberDirectoryListRenderer.foundBlockId);

    if (foundBlock)
    {
      if (found != 0 && (found == null || found == ''))
      {
        foundBlock.innerHTML = '';
        foundBlock.style.display = 'none';
        hideReload()
        hidePaging();
      }
      else
      {
        foundBlock.innerHTML = found;
        foundBlock.style.display = 'inline';
      }
    }
  }
  
  function hideReload()
  {
    /*debug*/log('hideReload');

    $(MemberDirectoryListRenderer.reloadLinkId).style.display = 'none';
  }
  
  function showReload()
  {
    /*debug*/log('showReload');

    var reloadLink = $(MemberDirectoryListRenderer.reloadLinkId);
    reloadLink.style.display = 'inline';
    reloadLink.onclick = null;
    reloadLink.onclick = reloadData;
  }
  
  function setPaging(selectHTML, seletedValue)
  {
    /*debug*/log('setPaging');

    var pagers = [
      $(MemberDirectoryListRenderer.pagingBlockId),
      $(MemberDirectoryListRenderer.pagingBlock2Id)
    ]
    var i;
    var oi;
    
    for (i = 0; i < pagers.length; i++)
    {
      pagers[i].innerHTML = MemberDirectoryListRenderer.labels.pagingTemplate.replace(/\{0\}/g, selectHTML); 
      pagers[i].style.display = 'inline';

      var pagerSelect = pagers[i].getElementsByTagName('SELECT')[0];
      for (oi = 0; oi < pagerSelect.options.length; oi++)
      {
        if (pagerSelect.options[oi].value == seletedValue)
        {
          pagerSelect.options[oi].selected = true;
          break;
        }
      }
    }
  }
  
  function hidePaging()
  {
    /*debug*/log('hidePaging');

    var pagingBlock = $(MemberDirectoryListRenderer.pagingBlockId);
    if (pagingBlock)
    {
      pagingBlock.style.display = 'none';
    }
    var pagingBlock2 = $(MemberDirectoryListRenderer.pagingBlock2Id);
    if(pagingBlock2)
    {
      pagingBlock2.style.display = 'none';
    }
  }
  
  function isPagerHidden()
  {
    /*debug*/log('isPagerHidden');

    return $(MemberDirectoryListRenderer.pagingBlockId) && ($(MemberDirectoryListRenderer.pagingBlockId).style.dysplay != 'inline');
  }
  function setDirectoryOutput(html, encodeHtml)
  {
    /*debug*/log('setDirectoryOutput');

    var outputBlock = $(MemberDirectoryListRenderer.outputBlockId);
    
    if (!outputBlock)
    {
      return;
    }
    
    if (encodeHtml == true) //encodeHtml may not be bool
    {
      outputBlock[document.all ? "innerText" : "textContent"] = html ? html : '';
    }
    else
    {
      outputBlock.innerHTML = html ? html : '';
    }
  }

  /*****************************************************/
  /***   SEARCHBOX                                   ***/
  /*****************************************************/

  function getSearchKeywords()
  {
    /*debug*///log('getSearchKeywords');

    var searchBoxElem = $(MemberDirectoryListRenderer.searchBoxId);
    
    if (!searchBoxElem)
    {
      dispose();
      return false;
    }
    
    var normalizedSearchPhrase = searchBoxElem.value.replace(/\s+/g, ' ');
    normalizedSearchPhrase = normalizedSearchPhrase.replace(/^\s*(.*?)\s*$/, '$1');
    return normalizedSearchPhrase;
  }

  function convertKeywordsToArray(keywords)
  {
    /*debug*/log('convertKeywordsToArray');

    if (!keywords)
      return new Array();
    
    var keywordsBeforeEncode = keywords.toLowerCase().split(' ');
    var result = new Array();
    
    for (var i = 0; i < keywordsBeforeEncode.length; i++)
    {
      result[i] = BonaPage.encodeHtml(keywordsBeforeEncode[i]);
    }
    
    return result;
  }

  function enableSearch(searchValue, autofocus)
  {
    /*debug*/log('enableSearch');

    var searchBox;

    autofocus = autofocus === undefined ? true : autofocus;

    if (!WA.AdminPanel || !WA.AdminPanel.PageMode || WA.AdminPanel.PageMode.Mode() != WA.AdminPanel.PageModeType.Edit)
    {
      searchBox = $(MemberDirectoryListRenderer.searchBoxId);

      if (searchValue)
        searchBox.value = searchValue;

      searchBox.onkeypress = searchBoxIgnoreEnter;
      searchBox.disabled = false;
      try 
      {
        if(autofocus)
        {
          searchBox.focus();
        }
     } catch (e) {}
    }
    
    if (searchBoxAskTimeout)
      clearTimeout(searchBoxAskTimeout);
      
    searchBoxAskTimeout = setTimeout(searchBoxAsk, searchBoxAskIntervalMs);
  }
  
  function disableSearch()
  {
    /*debug*/log('disableSearch');

    if (searchBoxAskTimeout)
      clearTimeout(searchBoxAskTimeout);

    var searchBox = $(MemberDirectoryListRenderer.searchBoxId);
    //searchBox.disabled = true;
  }
  
  function stopAskSearchBox()
  {
    /*debug*/log('stopAskSearchBox');

    if (searchBoxAskTimeout)
      clearTimeout(searchBoxAskTimeout);
  }
  
  function searchBoxIgnoreEnter(e)
  {
    /*debug*/log('searchBoxIgnoreEnter');

    if (!isInited) 
      return false;

    if (!e) 
      e = event;

    if (e.keyCode == 13)
    {
      forceNextAskSearch = true;
      return false;
    }
  }

  function searchBoxAsk()
  {
    if (searchBoxAskTimeout)
      clearTimeout(searchBoxAskTimeout);

    if (!isInited) { return; }

    /*debug*///log('searchBoxAsk');

    var searchKeywords = getSearchKeywords();
    
    if (searchKeywords == lastSeachBoxAskValue && !forceNextAskSearch)
    {
      searchBoxAskTimeout = setTimeout(searchBoxAsk, searchBoxAskIntervalMs);
      return;
    }

    forceNextAskSearch = false;      
    lastSeachBoxAskValue = searchKeywords;

    if (processSearchTimeout) 
      clearTimeout(processSearchTimeout);

    terminateAsyncSearch();

    var searchMessage = searchKeywords ? 
      MemberDirectoryListRenderer.labels.searchingKeywords :
      MemberDirectoryListRenderer.labels.searchingEmpty;
    
    setFound();
    setMessage(searchMessage);

    notifyGadgetChanged();

    processSearchTimeout = setTimeout(function() { searchAndRenderAsync(searchKeywords); }, processSearchTimeoutMs);
    searchBoxAskTimeout = setTimeout(searchBoxAsk, searchBoxAskIntervalMs);
  }
  function setTitle(count)
  {
    /*debug*/log('setTitle');

    return;
    var titleLabel = $(MemberDirectoryListRenderer.titleLabelId);
    titleLabel.innerHTML = MemberDirectoryListRenderer.titleTemplate.replace(/\{0\}/g, count); 
    titleLabel.style.visibility = 'visible';
  }
  /*****************************************************/
  /***   DATA LOADING AND PROCESSING                 ***/
  /*****************************************************/

  function loadRecordsAsync()
  {
    /*debug*/log('loadRecordsAsync');

    directoryData = getCachedDirectoryData();

    isCached = false;
    setFound(MemberDirectoryListRenderer.labels.serverLoadingStarted);

    notifyGadgetChanged();
    
    /*
    var match = document.body.id.match(/pageid_(\d+)/i);
    
    if (match != null) 
    {
	    var pageId = match[1];
    } 
    */

    var formData = { 'formId' : MemberDirectoryListRenderer.FormId };

    if (MemberDirectoryListRenderer.VersionData)
    {
      formData.pageId = MemberDirectoryListRenderer.VersionData.pageId;
      formData.versionId = MemberDirectoryListRenderer.VersionData.versionId;
      formData.componentId = MemberDirectoryListRenderer.VersionData.componentId;
    }

    // AJAX call
    WA.Ajax({
      url : MemberDirectoryListRenderer.MemberDirectoryListWebServiceUrl_LoadMembers,
      data : formData,
      type : 'POST',
      success : loadRecordsCallback,
      error : loadRecordsErrorCallback
    });
  }
  
  function loadRecordsErrorCallback(result)
  {
    /*debug*/log('loadRecordsErrorCallback');

    setFound(MemberDirectoryListRenderer.labels.serverLoadingError);
    setMessage();    
    showReload();
    setDirectoryOutput(MemberDirectoryListRenderer.labels.serverLoadingErrorAlert);
    notifyGadgetChanged();
  }
  
  function loadRecordsCallback(result)
  {
    /*debug*/log('loadRecordsCallback');

    setFound(result.TotalCount);
    setMessage(MemberDirectoryListRenderer.labels.processingServerData);
    directoryData.serverResponse = result;
    notifyGadgetChanged();
    setTimeout(processServerData, 10);
  }

  function processCachedData()
  {
    /*debug*/log('processCachedData');

    lastSeachBoxAskValue = directoryData.lastKeywords;
    forceNextAskSearch = false;
    enableSearch(lastSeachBoxAskValue);
    searchAndRenderAsync(directoryData.lastKeywords, directoryData.lastRenderIndex);
  }
 



  function processServerData()
  {
    /*debug*/log('processServerData');

    var jsonStructure;
    eval('jsonStructure = ' + directoryData.serverResponse.JsonStructure + ';');
	
	//directoryData.serverResponse = createMembers(20000);
	//jsonStructure=directoryData.serverResponse.JsonStructure;

    directoryData.totalCount = directoryData.serverResponse.TotalCount;
    directoryData.serverResponse = null;
    directoryData.layout = jsonStructure.layout;
    directoryData.membersData = jsonStructure.members;

    prepareSearchData();
    setTitle(directoryData.totalCount);    
    jsonStructure = null;
    directoryData.statuses = null;

    directoryData.isReady = true;
    forceNextAskSearch = true;
    enableSearch(undefined, false);
  }




  function prepareSearchData()
  {
    /*debug*/log('prepareSearchData');

    directoryData.searchData = new Array();
    directoryData.safeData = new Array();
    directoryData.counterData = new Array();
    var searchData = directoryData.searchData;
    var safeData = directoryData.safeData;
    var counterData = directoryData.counterData;
    var totalCount = directoryData.totalCount;
    var searchableMembersData = directoryData.membersData[0];
    var searchDataForMember = new Array();
    
    for (i = 0; i < totalCount; i++)
    {
      pushColumnToSearchableData(searchDataForMember, searchableMembersData[i].c1);
      pushColumnToSearchableData(searchDataForMember, searchableMembersData[i].c2);
      pushColumnToSearchableData(searchDataForMember, searchableMembersData[i].c3);
      pushColumnToSearchableData(searchDataForMember, searchableMembersData[i].c4);
      pushColumnToSearchableData(searchDataForMember, searchableMembersData[i].c5);
      
      searchData.push(searchDataForMember.join(' '));
      safeData.push(searchDataForMember.join(' '));


      searchDataForMember = new Array();
    }
  }
  function pushColumnToSearchableData(searchData, column)
  {
    /*debug*///log('pushColumnToSearchableData');

    if (!column)
      {
        return;
      }
      
      for (var j = 0; j < column.length; j++)
      {
        if (column[j].fft != 12)// picture
        {
          searchData.push(column[j].v.toLowerCase());          
        }
      }
  }


  function reloadData()
  {
    /*debug*/log('reloadData');

    disposeAllTimeouts();
    hideReload();
    hidePaging();
    setFound();
    disableSearch();
    lastSeachBoxAskValue = '';
    clearCache();
    setDirectoryOutput();
    notifyGadgetChanged();

    setTimeout(loadRecordsAsync, 10);
  }
//------------
//filter stuff
//------------
	function isFilterEnabled()
	{
    /*debug*/log('isFilterEnabled');

    return $("idFilterColumns");
	}

	function initFilter()
	{
    /*debug*/log('initFilter');

    var i, j;
	var optColumn;
	var options;

	for (i = 1; i <= maxFilterQty; i++)
	{
		optColumn = $("idF"+i+"Options");

		if (optColumn)
		{
			$("idF"+i+"Change").onclick=changeClick;
			filterOptionCounters[i-1]=new Array();
			filterOptionNames[i-1]=new Array();
	 		options=WA.$$('.optionLink', optColumn);

      if (options)
      {
        for (j = 0; j < options.length; j++)
        {
          options[j].onclick = optionClick;
          filterOptionCounters[i - 1]['opt' + options[j].getAttribute("fId", 0)] = 0;
          filterOptionNames[i - 1]['opt' + options[j].getAttribute("fId", 0)] = options[j].innerHTML;
        }
      }
		}
 	}
  }


  function optionClick()
  {
    /*debug*/log('optionClick');

    var curRow = this.parentNode.parentNode.parentNode.id.substr(3,1);
  	  $("idF"+curRow+"Options").style.display = "none";
  	  $("idF"+curRow+"Selected").style.display = "block";
  	  $("idF"+curRow+"SelName").innerHTML = '&raquo; ' + filterOptionNames[curRow - 1]['opt'+this.getAttribute("fId", 0)];
  	  filterValues[curRow-1] = this.getAttribute("fId", 0);
  	  applyFilters();
  	  return false;
  }

  function changeClick()
  {
    /*debug*/log('changeClick');

    var curRow = this.id.substr(3,1);
  	  $("idF"+curRow+"Options").style.display = "block";
  	  $("idF"+curRow+"Selected").style.display = "none";
  	  $("idF"+curRow+"SelName").innerHTML = "";
  	  filterValues[curRow-1] = null;
  	  applyFilters();
  	  return false;
  }

	function filterIsOn()
	{
    /*debug*/log('filterIsOn');

    var i;
		var l = filterValues.length;
		var cnt = 0;

		for (i = 0; i < l; i++)
		{
			if (filterValues[i] != null)
			{
				cnt++;
			}
		}
		return cnt;
	}

	function applyFilters()
	{
    /*debug*/log('applyFilters');

    var i, j, l;
		var matchCount = 0;
		var totalCount = directoryData.totalCount;
		var filterVal = filterIsOn();

		//preparing
		setFound();
	    setMessage(MemberDirectoryListRenderer.labels.searchingKeywords);

		for (i = 0; i < totalCount; i++)
		{
			directoryData.searchData[i]=directoryData.safeData[i];
		}

		if (filterVal)
		{
			for (i = 0; i < totalCount; i++)
			{
				matchCount = 0;

				for (l = 1; l < maxFilterQty+1; l++)
				{
					if (filterValues[l-1] == null) //no filter is set for column
					{
						matchCount++;
						continue;
					}

					var memberFilterValue = directoryData.membersData[0][i]['f' + l];

					if (!memberFilterValue)
					{
						continue;
					}

					for (j = 0; j < memberFilterValue.length; j++)  
					{
						if (memberFilterValue[j] == filterValues[l-1])
						{
							matchCount++;
							break;
						}
					}
				}

				if (matchCount != maxFilterQty)
				{
					directoryData.searchData[i] = '';
				}
			}
		}


		searchAndRenderAsync(getSearchKeywords());
    notifyGadgetChanged();
	}


	function updateCounters(searchInResults)
	{
    /*debug*/log('updateCounters');

    var i, l, m;
		var memberFilterValue;

		if (!isFilterEnabled) return;

		var finalIndex = searchInResults ? searchAsyncData.foundIndexes.length : directoryData.totalCount;
		
		resetCounters();

		for (i = 0; i < finalIndex; i++)
		{
			for (l = 1; l < maxFilterQty+1; l++)
			{
				if (filterValues[l-1]) //filter is set, why bother updating invisible numbers?
				{
					continue;
				}
				memberFilterValue = searchInResults ? directoryData.membersData[0][searchAsyncData.foundIndexes[i]]['f' + l] : directoryData.membersData[0][i]['f' + l];

				if (memberFilterValue)
				{
					for (m = 0; m < memberFilterValue.length; m++)
					{
					    if (filterOptionCounters[l-1])
					    {
						    filterOptionCounters[l-1]['opt'+memberFilterValue[m]]++;
						}
					}
				}

			}
		}

		drawCounters();
	}


	function resetCounters()
	{
    /*debug*/log('resetCounters');

    var l, m;

		for (l = 0; l < filterOptionCounters.length; l++)
		{
			if (filterOptionCounters[l])
			{
				for (m in filterOptionCounters[l])
				{
					if (typeof(filterOptionCounters[l][m]) == "number")
					{
						filterOptionCounters[l][m] = 0;
					}
				}
			}
		}
	}

	function drawCounters()
	{
    /*debug*/log('drawCounters');

    var i, j;
		var optColumn;
		var options;
		var qty, name;
		var whereIsSpace;

	    for (i = 1; i <= maxFilterQty; i++)
	    {
	    	optColumn=jq$("#idF"+i+"Options");


		 	if (optColumn)
		 	{
		 		options = jq$("#idF"+i+"Options .optionLink");

        if (options)
        {
          for (j = 0; j < options.length; j++)
          {
            qty = filterOptionCounters[i - 1]['opt' + options[j].getAttribute("fId", 0)] * 1;
            name = WA.String.gtrim(filterOptionNames[i - 1]['opt' + options[j].getAttribute("fId", 0)]);


            whereIsSpace = name.lastIndexOf(' ');

            if (whereIsSpace >= 0)
            {
              name = name.slice(0, whereIsSpace) + ' <nobr>' + name.slice(whereIsSpace + 1);
            } else
            {
              name = '<nobr>' + name;
            }

            options[j].innerHTML = name + ' ' + '<span class="optionCounter">(' + qty + ')</span></nobr>';
            options[j].className = (qty && qty > 0) ? "optionLink" : "optionLink emptyName";
          }
        }
		 	}
		}
	}

  /*****************************************************/
  /***   SEARHCING                                   ***/
  /*****************************************************/

  function searchAndRenderAsync(keywords, renderStartIndex)
  {
    /*debug*/log('searchAndRenderAsync');

    terminateAsyncSearch();

    directoryData.lastKeywords = keywords;

    if (!searchAsyncData)
    {
      searchAsyncData = new Object();
      searchAsyncData.sessionId = 0;
    }

    var sessionId = searchAsyncData.sessionId + 1;
    searchAsyncData.sessionId = sessionId;
    searchAsyncData.inProgress = true;
    searchAsyncData.foundCount = 0;
    searchAsyncData.nextIndex = 0;
    searchAsyncData.sourceKeywords = keywords;
    searchAsyncData.keywordsArray = convertKeywordsToArray(keywords);
    searchAsyncData.foundIndexes = new Array();
    searchAsyncData.pagerHtml = null;
    
    if (searchAsyncData.keywordsArray.length > 0 || filterIsOn())
    {
      searchAsyncTimeout = setTimeout(function() { searchAsync(sessionId, renderStartIndex); }, 5);
    }
    else
    {
      searchAsyncData.foundCount = directoryData.totalCount;      
      searchAsyncData.nextIndex = searchAsyncData.foundCount;
      searchAsyncData.inProgress = false;
      renderAsync(renderStartIndex);
      updateCounters(false);
    }
  }




  function searchAsync(sessionId, renderStartIndex)
  {
    /*debug*/log('searchAsync');

    if (searchAsyncTimeout)
      clearTimeout(searchAsyncTimeout);
  
    if (!searchAsyncData || sessionId != searchAsyncData.sessionId)
    {
      terminateAsyncSearch();
      return;
    }
    
    if (searchAsyncData.nextIndex >= directoryData.totalCount)
    {
      terminateAsyncSearch();
      searchAsyncData.inProgress = false;
      //search is over
      updateCounters(true);
      renderAsync(renderStartIndex);
      return;
    }

    var keywordsArray = searchAsyncData.keywordsArray;
    var searchIndexData = directoryData.searchData;
    var stopCycleIndex = Math.min(directoryData.totalCount, searchAsyncData.nextIndex + searchAsyncMaxRecords);

    var keywordsArrayLength = keywordsArray.length;


    for (i = searchAsyncData.nextIndex; i < stopCycleIndex; i++)
    {

      var searchIndexDataLength = searchIndexData[i].length;

      if (searchIndexDataLength == 0)
      {
      	  continue;
      }

      for (j = 0; j < keywordsArrayLength; j++)
      {
        if (searchIndexData[i].indexOf(keywordsArray[j]) == -1)
          break;
      }
      
      if (j == keywordsArrayLength)
      {
        searchAsyncData.foundCount++;
        searchAsyncData.foundIndexes.push(i);
      }
    }

    searchAsyncData.nextIndex = stopCycleIndex;

    searchAsyncTimeout = setTimeout(function() { searchAsync(sessionId, renderStartIndex); }, searchAsyncTimeoutMs);
  }
  
  



  function terminateAsyncSearch()
  {
    /*debug*/log('terminateAsyncSearch');

    if (searchAsyncTimeout)
      clearTimeout(searchAsyncTimeout);
  }
  
  /*****************************************************/
  /***   RENDERING                                   ***/
  /*****************************************************/

  function renderAsync(startIndex)
  {
    /*debug*/log('renderAsync');

    if (!searchAsyncData || searchAsyncData.inProgress)
      return;
    
    hidePaging();
    //setMessage(MemberDirectoryListRenderer.labels.displayingFound);

    startIndex = parseInt(startIndex);
    if (!startIndex)
      startIndex = 0;

    setTimeout(function() { render(startIndex); }, 10);
  }
  function prepareHeader()
  {
    /*debug*/log('prepareHeader');

    var layout = directoryData.layout;
    var headerTemplate = new Array();
    
    headerTemplate.push(tableStart);
    addHeaderIfReq(headerTemplate, layout.c1);
    addHeaderIfReq(headerTemplate, layout.c2);
    addHeaderIfReq(headerTemplate, layout.c3);
    addHeaderIfReq(headerTemplate, layout.c4); 
    headerTemplate.push(headerEnd);
    
    return headerTemplate.join('');
  }
  function addHeaderIfReq(headerTemplate, column)
  {
    /*debug*/log('addHeaderIfReq');

    if (column.v == true) // visible
    {
      headerTemplate.splice(headerTemplate.length, 0,
        thTemplate[0], column.w, // width
        thTemplate[1], column.h, // header
        thTemplate[2]);
    }
  }  
  function render(startIndex)
  {
    /*debug*/log('render');

    if (!searchAsyncData || searchAsyncData.inProgress)
    {
      notifyGadgetChanged();
      return;
    }
    
    directoryData.lastRenderIndex = startIndex;

    var keywordsDefined = searchAsyncData.keywordsArray.length > 0 || filterIsOn();
    
    if (searchAsyncData.foundCount > 0)
    {
      var i;  
      var a = new Array();
      
      a.splice(a.length, 0, prepareHeader());

      stopRenderIndex = Math.min(startIndex + maxDisplayRecords, searchAsyncData.foundCount);

      var realIndex,
          detailsUrlTooltip = MemberDirectoryListRenderer.labels.detailsUrlTitle,
          searchableMembersData = directoryData.membersData[0],
          otherMembersData = directoryData.membersData[1],
          detailsUrlPrefix = MemberDirectoryListRenderer.detailsUrlTemplate,
          formId = MemberDirectoryListRenderer.FormId;
     
      for (i = startIndex; i < stopRenderIndex; i++)
      {
        realIndex = keywordsDefined ? searchAsyncData.foundIndexes[i] : i;
        a.splice(a.length, 0, 
          memberTemplate[0], createDetailsUrl(detailsUrlPrefix, otherMembersData[realIndex], formId),
          memberTemplate[1], prepareColumn(searchableMembersData[realIndex], otherMembersData[realIndex]),
          memberTemplate[2]
        );
      }

      a.push(footerTemplate);
      
      setDirectoryOutput(a.join(''));
      a = null;
    }
    else
    {
      // no records
      setDirectoryOutput(keywordsDefined ?
        MemberDirectoryListRenderer.labels.noMembersFound.replace(/\{0\}/g, searchAsyncData.sourceKeywords) :
        MemberDirectoryListRenderer.labels.noMembersInDatabase, true);
    }

    setMessage();
    setFound(searchAsyncData.foundCount);
    
    if (isCached)
      showReload();
    
    renderPager(startIndex);
    notifyGadgetChanged();
  }


  function notifyGadgetChanged()
  {
    /*debug*/log('notifyGadgetChanged');

    WA.throttle(doNotifyGadgetChanged, notifyGadgetChangedTimeout);
  }


  function doNotifyGadgetChanged()
  {
    /*debug*/log('doNotifyGadgetChanged');

    WA.Gadgets.notifyGadgetChanged();
  }


  function createDetailsUrl(detailsUrlPrefix, memberId, formId)
  {
    /*debug*///log('createDetailsUrl');

    var url;

    if (formId == 0)
    {
      url = detailsUrlPrefix + memberId;
    } 
    else
    {
      url = detailsUrlPrefix + memberId + '/' + formId; 
    }

    return url;
  }
  function prepareColumn(memberData, memberId)
  {
    /*debug*/log('prepareColumn');

    var layout = directoryData.layout; 
    var memberTdTemplate = new Array();
    var detailsUrlTooltip = MemberDirectoryListRenderer.labels.detailsUrlTitle;    
    
    var columnsCount = new Object();
    columnsCount.value = 0;
    addColumnIfReq(layout.c1, memberData.c1, memberTdTemplate, columnsCount, memberId, true);
    addColumnIfReq(layout.c2, memberData.c2, memberTdTemplate, columnsCount, memberId, false);
    addColumnIfReq(layout.c3, memberData.c3, memberTdTemplate, columnsCount, memberId, false);
    addColumnIfReq(layout.c4, memberData.c4, memberTdTemplate, columnsCount, memberId, false);
    addBottomRowIfReq(layout.c5, memberData.c5, memberTdTemplate, columnsCount, memberId, false);

    return memberTdTemplate.join('');
  }
  function addColumnIfReq(layoutColumn, memberColumn, memberTdTemplate, columnsCount, memberId, makeLink)
  {
    /*debug*///log('addColumnIfReq');

    if (layoutColumn.v != true) 
    {
      return;
    }
    
    ++columnsCount.value;
  
    memberTdTemplate.splice(memberTdTemplate.length, 0, 
      tdTemplate[0], 'memberDirectoryColumn' + columnsCount.value,
      tdTemplate[1], layoutColumn.w,
      tdTemplate[2], getValueFromColumn(memberColumn, memberId, makeLink),
      tdTemplate[3]);
  }    
  function addBottomRowIfReq(bottomRow, memberColumn, memberTdTemplate, columnsCount, memberId)
  {
    /*debug*///log('addBottomRowIfReq');

    var url = MemberDirectoryListRenderer.detailsUrlTemplate + memberId;
    
    if (bottomRow.v != true) // visible
    {
      return;
    }
    
    memberTdTemplate.splice(memberTdTemplate.length, 0, 
      bottomRowTemplate[0], url,
      bottomRowTemplate[1], columnsCount.value,
      bottomRowTemplate[2], getValueFromColumn(memberColumn, memberId, false),
      bottomRowTemplate[3]);
  }    
  
  function getValueFromColumn(memberColumn, memberId, makeLink)
  {
    /*debug*///log('getValueFromColumn');

    var inner = '';
      
    if (!memberColumn)
    {
      return inner;
    }

    for (var i = 0; i < memberColumn.length; i++)
    {
      var ar;
      var value = memberColumn[i].v;
      var imgValue = value;

      if (i == 0)
      {
        var ix = imgValue.lastIndexOf(' (');

        if (ix >= 0)
        {
          imgValue = imgValue.substr(0, ix);
        }
      }

      var fieldType = memberColumn[i].fft;
      
      // check for email
      if(fieldType != 5 && emailReplace1.test(BonaPage.decodeHtml(value))) 
      {
        value = BonaPage.decodeHtml(value).replace(emailReplace1, emailReplaceTemplate);
      }
      
      if (fieldType == 12) //Picture
      {
        if (value != '')
        {
          ar = new Array();
          ar.splice(ar.length, 0,
            imgTemplate[0], MemberDirectoryListRenderer.imgTemplateRelativePath,
            imgTemplate[1], memberId,
            imgTemplate[2], imgValue,
            imgTemplate[3], (new Date()).getTime(),
            imgTemplate[4]);
          value = ar.join('');
        }
      }
      else if (fieldType == 5 && !(makeLink == true && i == 0)) // Email
      {
        if (value != '')
        {
          ar = new Array();
          ar.splice(ar.length, 0,
            emailTemplate[0], value,
            emailTemplate[1], value,
            emailTemplate[2]);
          value = ar.join('');
          ar = new Array();
        }
      }
      else if (value != '' && !(makeLink == true && i == 0))
      {
        var reLinkReplace1 = new RegExp("(\\s|^|\\>|\\<|\\}|\\]|\\[|\\{)((http|https|ftp)://[^\\n\\s\\<\\>\\[\\{\\]\\}]+)", "gi");
        var reLinkReplace2 = new RegExp("(\\s|^|\\>|\\<|\\}|\\]|\\[|\\{)(([io]?www\.|ftp\.)[^\\n\\s\\<\\>\\[\\{\\]\\}]+)", "gi");
        var processedValue = 
        value = (reLinkReplace1.test(value))
          ? value.replace(reLinkReplace1, '$1<a onclick="window.open(\'$2\');BonaPage.stopEvent(event);" href="$2" target=_blank>$2</a>')
          : value.replace(reLinkReplace2, '$1<a onclick="window.open(\'http://$2\');BonaPage.stopEvent(event);" href="http://$2" target=_blank>$2</a>');
      }

      if (i === 0 && makeLink === true)
      {
        var ar = new Array();
        ar.splice(ar.length, 0,
          linkTemplate[0], MemberDirectoryListRenderer.labels.detailsUrlTitle,
          linkTemplate[1], createDetailsUrl(MemberDirectoryListRenderer.detailsUrlTemplate, memberId, MemberDirectoryListRenderer.FormId),
          linkTemplate[2], value == '' ? MemberDirectoryListRenderer.labels.viewDetails : value,
          linkTemplate[3]);
        value = ar.join('');
      }

      if (value != '')
      {
        inner += '<div class=\'memberValue\'>' + value + '</div>';
      }
    }
    
    return inner;
  }
  function renderPager(startIndex)
  {
    /*debug*/log('renderPager');

    if (!searchAsyncData || searchAsyncData.inProgress || searchAsyncData.foundCount <= maxDisplayRecords)
    {
      hidePaging();
      return;
    }

    if (!searchAsyncData.pagerHtml)
    {
      var i;
      var a = new Array();
      var useSearchData = (searchAsyncData.keywordsArray.length > 0) || filterIsOn();
      var value;
      var firstIndex;
      var lastIndex;
      var recordsFirstIndex;
      var recordsLastIndex;

      a.push(pagerTemplate[0]);
      
      for (i = 0; i < searchAsyncData.foundCount; i = i + maxDisplayRecords)
      {
        value = i;
        firstIndex = i;
        lastIndex = Math.min(searchAsyncData.foundCount - 1, i + maxDisplayRecords - 1);
        recordsFirstIndex = firstIndex + 1;
        recordsLastIndex = lastIndex + 1;

        if (useSearchData)
        {
          firstIndex = searchAsyncData.foundIndexes[firstIndex];
          lastIndex = searchAsyncData.foundIndexes[lastIndex];
        }

        a.splice(a.length, 0, 
          pagerOptionTemplate[0], value,
/*
          pagerOptionTemplate[1], preparePagerRangeWord(firstIndex, true),
          pagerOptionTemplate[2], preparePagerRangeWord(lastIndex, false),
          pagerOptionTemplate[3], recordsFirstIndex,
          pagerOptionTemplate[4], recordsLastIndex,
*/
          pagerOptionTemplate[1], recordsFirstIndex,
          pagerOptionTemplate[2], recordsLastIndex,
          pagerOptionTemplate[3]);
      }
      
      a.push(pagerTemplate[1]);
      searchAsyncData.pagerHtml = a.join('');

    }


    if (isPagerHidden())
    {
      setPaging(searchAsyncData.pagerHtml, startIndex);
    }
  }
  
  function preparePagerRangeWord(index, appendSpacesBefore)
  {
    /*debug*/log('preparePagerRangeWord');

    var v = directoryData.membersData[0][index].c1[0].v;
    var value = v == '' ? 'View details' : v;
    var word = value.split(',')[0].substr(0, pagerRangeNameLength);
    word = word.replace(/\s/g, "&nbsp;");
    return word;
  }
  
  function pagerChanged(pagerSelect)
  {
    /*debug*/log('pagerChanged');

    try { $(MemberDirectoryListRenderer.searchBoxId).focus(); } catch (e) {}
    var startIndex = pagerSelect.options[pagerSelect.selectedIndex].value;
    render(parseInt(startIndex));
  }
  
  /*****************************************************/
  /***   MEMBER RECORD EVENTS                        ***/
  /*****************************************************/

  function highlightRowAndNext(memberTr)
  {
    /*debug*/log('highlightRowAndNext');

    SetClassToRowAndNext(memberTr, 'hover');
  }
  function normlightRowAndNext(memberTr)
  {
    /*debug*/log('normlightRowAndNext');

    SetClassToRowAndNext(memberTr, 'normal');
  }
  function SetClassToRowAndNext(memberTr, className)
  {
    /*debug*/log('SetClassToRowAndNext');

    memberTr.className = className;
    
    var nextSibling = memberTr.nextSibling;
    
    if (!nextSibling)
    {
      return;
    }
    
    while (nextSibling.nodeType != 1)
    {
      nextSibling = nextSibling.nextSibling;
        
      if (!nextSibling)
      {
        return;
      }
    }
    
    if (nextSibling.getAttribute('bottomrow', 0) == 'true')
    {
        nextSibling.className = className;
    }
  }  
  function highlightRowAndPrev(memberTr)
  {
    /*debug*/log('highlightRowAndPrev');

    SetClassToRowAndPrev(memberTr, 'hover');
  }

  function normlightRowAndPrev(memberTr)
  {
    /*debug*/log('normlightRowAndPrev');

    SetClassToRowAndPrev(memberTr, 'normal');
  }
  
  function SetClassToRowAndPrev(memberTr, className)
  {
    /*debug*/log('SetClassToRowAndPrev');

    memberTr.className = className;
    
    var previousSibling = memberTr.previousSibling;
    
    if (!previousSibling)
    {
      return;
    }
    
    while (previousSibling.nodeType != 1)
    {
      previousSibling = previousSibling.previousSibling;
        
      if (!previousSibling)
      {
        return;
      }
    }
    
    previousSibling.className = className;
  }  

  function redirectToMemberDetails(url)
  {
    /*debug*/log('redirectToMemberDetails');

    window.location = url;
    return false;
  }
  
  MemberDirectoryListRenderer.GetSelectedMembersId  = function()
  {
    /*debug*/log('GetSelectedMembersId');

    if (!searchBoxAskTimeout) {
      return false;
    }
    var element = document.getElementById(MemberDirectoryListRenderer.selectedMembersFieldId);
    if (element == null) {
      return false;
    }
    try {
      element.value = GetCurrentMembersSelectionIdStr();
      if (element.value == '') {
        return false;
      }
    } catch (error) {
    }
  }
  
  MemberDirectoryListRenderer.ValidateEmailMembersList = function(sender, args) {
    /*debug*/log('ValidateEmailMembersList');

    var element = document.getElementById(MemberDirectoryListRenderer.selectedMembersFieldId);
      if (element == null || element.value == '') {
         args.IsValid = false;
      }
  }
  
  function GetCurrentMembersSelectionIdStr()
  {
    /*debug*/log('GetCurrentMembersSelectionIdStr');

    if (!searchAsyncData || searchAsyncData.inProgress)
          return;
      var otherMembersData = directoryData.membersData[1];
      if (searchAsyncData.foundCount == 0) {
        return '';
      }
      var realIndex;
      var keywordsDefined = searchAsyncData.keywordsArray.length > 0;
      var result = '';
      var foundCount = searchAsyncData.foundCount;
      for (var i = 0; i < foundCount; i++) {
        realIndex = keywordsDefined ? searchAsyncData.foundIndexes[i] : i;
        if (otherMembersData[realIndex][1] != 0) {
          result += otherMembersData[realIndex][0];
          if (foundCount - i > 1)
           result += ',';
        }
      }
      return result;
  }

// end of MemberDirectoryListRenderer singleton
}) ();
jq$(function(){if(jq$(".WaGadgetMenuHorizontal .stickyMenu").length>0){var sticky=0,menu=jq$(".stickyMenu"),heightHeader=jq$(".stickyMenu").offset().top;jq$(window).scroll(function(){var top=jq$(this).scrollTop();if(top+sticky<=heightHeader){menu.css({"top":"","position":"relative","left":"","width":"","border-right":"","border-left":""});menu.removeClass("active");}else{menu.css({"top":sticky,"position":"fixed"});menu.addClass("active");if(jq$(".zoneMain").length>0){var widthSidebar=jq$(".zoneSidebar").width(),colorBorder=jq$(".stickyMenu.active").css("border-bottom-color");if(parseInt(jq$(".zoneMain").css("padding-left"))===0){menu.css({"width":"calc(100% - "+widthSidebar+"px)","border-right":"1px solid "+colorBorder});}else{menu.css({"left":widthSidebar,"width":"calc(100% - "+widthSidebar+"px)","border-left":"1px solid "+colorBorder});}}}});jq$(".sidebarButton").click(function(){if(jq$(".stickyMenu").hasClass("active")){if(!sidebarSettings){return;}if(jq$(".zoneSidebar").parent().hasClass("sidebarExpanded")){var menuWidthOpen=$(window).width()-parseInt(sidebarSettings.animateOptionsToOpen);if(parseInt(jq$(".zoneMain").css("padding-left"))===0){menu.animate({"width":menuWidthOpen},sidebarSettings.transitionTime);}else{menu.animate({"left":sidebarSettings.animateOptionsToOpen,"width":menuWidthOpen},sidebarSettings.transitionTime);}}else{var menuWidthClose=$(window).width()-parseInt(sidebarSettings.animateOptionsToClose);if(parseInt(jq$(".zoneMain").css("padding-left"))===0){menu.animate({"width":menuWidthClose},sidebarSettings.transitionTime);}else{menu.animate({"left":sidebarSettings.animateOptionsToClose,"width":menuWidthClose},sidebarSettings.transitionTime);}}}});if(jq$(".stickyMenu").hasClass("active")){jq$(window).resize(function(){if(!sidebarSettings){return;}if(jq$(".zoneSidebar").parent().hasClass("sidebarExpanded")){var menuWidthOpen=$(window).width()-parseInt(sidebarSettings.animateOptionsToOpen);if(parseInt(jq$(".zoneMain").css("padding-left"))===0){menu.css({"width":menuWidthOpen});}else{menu.css({"left":sidebarSettings.animateOptionsToOpen,"width":menuWidthOpen});}}else{var menuWidthClose=$(window).width()-parseInt(sidebarSettings.animateOptionsToClose);if(parseInt(jq$(".zoneMain").css("padding-left"))===0){menu.css({"width":menuWidthClose});}else{menu.css({"left":sidebarSettings.animateOptionsToClose,"width":menuWidthClose});}}});}}});jq$(function(){var service=WaOnlineStoreCart.getInstance().getService();service.savingCompleted=showCart;var cart=service.localLoad()||{};showCart(cart);function showCart(cart){if(!cart.items||cart.items.length===0){jq$(".cart-gadget_count").text("");jq$(".cart-gadget_quantity").removeClass("cart-gadget_quantity__filled");return;}var quantity=0;cart.items.forEach(function(item){quantity+=item.quantity;});jq$(".cart-gadget_count").text(quantity);jq$(".cart-gadget_quantity").addClass("cart-gadget_quantity__filled");return quantity;}});/*
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t();}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this;}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this;}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this;}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t);}return this;}},t.allOff=function(){delete this._events,delete this._onceEvents;},e;}),function(e,t){"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i);}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter);}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t){e[i]=t[i];}return e;}function n(e){if(Array.isArray(e)){return e;}var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e];}function o(e,t,r){if(!(this instanceof o)){return new o(e,t,r);}var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e));}function r(e){this.img=e;}function s(e,t){this.url=e,this.element=t,this.img=new Image;}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this);},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o);}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s);}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t){for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage);}}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t);},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i);},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n);});}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check();}):void this.complete();},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t);},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this);}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void (this.proxyImage.src=this.img.src));},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth;},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t]);},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e);},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents();},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents();},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents());},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t]);},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this));});},o.makeJQueryPlugin(),o;});/*
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i);}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery);}(window,function(t,e){function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u){return void s(i+" not initialized. Cannot call methods, i.e. "+r);}var d=u[e];if(!d||"_"==e.charAt(0)){return void s(r+" is not a valid method");}var l=d.apply(u,n);o=void 0===o?l:o;}),void 0!==o?o:t;}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o));});}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t));}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e);}return u(this,t),this;},n(a));}function n(t){!t||t&&t.bridget||(t.bridget=i);}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t);};return n(e||t.jQuery),i;}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e();}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return -1==n.indexOf(e)&&n.push(e),this;}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this;}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return -1!=n&&i.splice(n,1),this;}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e);}return this;}},e.allOff=function(){delete this._events,delete this._onceEvents;},t;}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e();}(window,function(){function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e;}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0;}return t;}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e;}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e);}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display){return i();}var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m;}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a;}}var s,a="undefined"==typeof console?e:function(t){console.error(t);},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r;}),function(t,e){"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e();}(window,function(){var t=function(){var t=window.Element.prototype;if(t.matches){return"matches";}if(t.matchesSelector){return"matchesSelector";}for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o]){return o;}}}();return function(e,i){return e[t](i);};}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i);}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector);}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e){t[i]=e[i];}return t;},i.modulo=function(t,e){return(t%e+e)%e;};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t)){return t;}if(null===t||void 0===t){return[];}var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t];},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1);},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;){if(t=t.parentNode,e(t,i)){return t;}}},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t;},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t);},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n){return void o.push(t);}e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++){o.push(i[r]);}}}),o;},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o];},i);};},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t);},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i;}).toLowerCase();};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r);}catch(a){return void (o&&o.error("Error parsing "+s+" on "+t.className+": "+a));}var h=new e(t,i);l&&l.data(t,n,h);});});},i;}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize));}(window,function(t,e){function i(t){for(var e in t){return !1;}return e=null,!0;}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create());}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase();});}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"});},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t);},d.getSize=function(){this.size=e(this.element);},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i];}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s;},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this]);},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px";},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px";},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning){return void this.layoutPosition();}var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0});},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)";},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition();},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e);},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd){t.onTransitionEnd[e].call(this);}},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration)){return void this._nonTransition(t);}var e=this._transn;for(var i in t.onTransitionEnd){e.onEnd[i]=t.onTransitionEnd[i];}for(i in t.to){e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);}if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null;}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0;};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1);}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t);},d.onotransitionend=function(t){this.ontransitionend(t);};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n];}this.emitEvent("transitionEnd",[this]);}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1;},d._removeStyles=function(t){var e={};for(var i in t){e[i]="";}this.css(e);};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f);},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms";},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this]);},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem();}),void this.hide()):void this.removeElem();},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e});},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal");},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity){return"opacity";}for(var i in e){return i;}},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e});},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"));},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""});},n;}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r);}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item);}(window,function(t,e,i,n,o){function r(t,e){var i=n.getQueryElement(t);if(!i){return void (h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));}this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout();}function s(t){function e(){t.apply(this,arguments);}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e;}function a(t){if("number"==typeof t){return t;}var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length){return 0;}i=parseFloat(i);var o=m[n]||1;return i*o;}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t);},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t];},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize();},f.reloadItems=function(){this.items=this._itemize(this.element.children);},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s);}return n;},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector);},f.getItemElements=function(){return this.items.map(function(t){return t.element;});},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0;},f._init=f.layout,f._resetLayout=function(){this.getSize();},f.getSize=function(){this.size=i(this.element);},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0;},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout();},f._getItemsForLayout=function(t){return t.filter(function(t){return !t.isIgnored;});},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n);},this),this._processLayoutQueue(i);}},f._getItemLayoutPosition=function(){return{x:0,y:0};},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e);},this);},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void (this.stagger=0):(this.stagger=a(t),this.stagger);},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i));},f._postLayout=function(){this.resizeContainer();},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1));}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px";}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e]);}function n(){s++,s==r&&i();}var o=this,r=e.length;if(!e||!r){return void i();}var s=0;e.forEach(function(e){e.once(t,n);});},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u){if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i);}else{this.$element.trigger(t,i);}}},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0);},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored;},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this));},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t);},this);},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0;},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this));},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)};},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r;},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0;},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1;},f.onresize=function(){this.resize();},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout();},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth;},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e;},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e));},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i);}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal();});}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide();});}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e);},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e);},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t){return i;}}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i);},this),e;},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t);},this);},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy();}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace);},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e];},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i;};var m={ms:1,s:1000};return r.Item=o,r;}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize);}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++){this.colYs.push(0);}this.maxY=0,this.horizontalColIndex=0;},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth;}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1);},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth;},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++){this.colYs[u]=a;}return s;},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i};},n._getTopColGroup=function(t){if(2>t){return this.colYs;}for(var e=[],i=this.cols+1-t,n=0;i>n;n++){e[n]=this._getColGroupY(n,t);}return e;},n._getColGroupY=function(t,e){if(2>e){return this.colYs[t];}var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i);},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)};},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++){this.colYs[l]=Math.max(d,this.colYs[l]);}},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t;},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];){t++;}return(this.cols-t)*this.columnWidth-this.gutter;},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth;},i;});(function(){if(!window.PhotoAlbumGadget){window.PhotoAlbumGadget={};}var albumParam="";var processingText="Please wait...";var deleteConfirmation="Are you sure you want to delete?";var deletePhotoConfirmation="Are you sure you want to delete this photo?";var saveAction=false;var photosHolder=false;var photosHolderHeight=false;var titleTextBox=false;var descriptionTextBox=false;var saveButton=false;var altSaveButton=false;var saveLinkButton=false;var deleteButton=false;var cancelButton=false;var uploadButton=false;var uploadAction=false;var viewModeRadioContainer=false;var uploadButtonContainer=false;var descriptionContainer=false;var descriptionHeightUrlKey=false;var countPhotosPerRowUrlKey=false;var pagingKey=false;var saveAlbumDialogInited=false;var uploadPhotosDialogInited=false;var photoItemId=false;var photoItemTimeout=false;var actionIsRunning=false;var pendingSender=false;var pendingImageDivId=false;var pendingFullDescriptionDivId=false;var pendingSmallDescriptionDivId=false;PhotoAlbumGadget.InitPhotoGallery=initPhotoGallery;PhotoAlbumGadget.InitJsFunctions=initJsFunctions;PhotoAlbumGadget.Page_Parsed=pageParsed;PhotoAlbumGadget.Page_Unloading=pageUnloading;PhotoAlbumGadget.CloseSaveAlbumDialog=closeSaveAlbumDialog;PhotoAlbumGadget.CloseUploadPhotosDialog=closeUploadPhotosDialog;PhotoAlbumGadget.Get_SaveAction=getSaveAction;PhotoAlbumGadget.Get_SaveTitle=getSaveTitle;PhotoAlbumGadget.Get_SaveDescription=getSaveDescription;PhotoAlbumGadget.Get_SaveButton=getSaveButton;PhotoAlbumGadget.Get_DeleteButton=getDeleteButton;PhotoAlbumGadget.Get_UploadButton=getUploadButton;PhotoAlbumGadget.Get_UploadAction=getUploadAction;PhotoAlbumGadget.ProcessingButton_OnClick=processingButtonClick;PhotoAlbumGadget.DeleteButton_OnClick=deleteButtonClick;PhotoAlbumGadget.UploadButton_OnClick=uploadButtonClick;PhotoAlbumGadget.SaveButton_OnClick=saveButtonClick;PhotoAlbumGadget.ImageMenu_OnMouseOver=imageMenuMouseOver;PhotoAlbumGadget.ImageMenu_OnMouseOut=imageMenuMouseOut;PhotoAlbumGadget.MenuButton_OnMouseOver=menuButtonMouseOver;PhotoAlbumGadget.MenuButton_OnMouseOut=menuButtonMouseOut;PhotoAlbumGadget.MenuButton_OnClick=menuButtonClick;PhotoAlbumGadget.NavigateToList=navigateToList;PhotoAlbumGadget.CheckLength=checkLength;function initPhotoGallery(p){if(p.albumParam){albumParam=p.albumParam;}if(p.processingText){processingText=p.processingText;}if(p.deleteConfirmation){deleteConfirmation=p.deleteConfirmation;}if(p.deletePhotoConfirmation){deletePhotoConfirmation=p.deletePhotoConfirmation;}if(p.photosHolderId){photosHolder=WA.$(p.photosHolderId,window);}if(p.saveActionId){saveAction=WA.$(p.saveActionId,window);}if(p.titleTextBoxId){titleTextBox=WA.$(p.titleTextBoxId,window);}if(p.descriptionTextBoxId){descriptionTextBox=WA.$(p.descriptionTextBoxId,window);}if(p.saveButtonId){saveButton=WA.$(p.saveButtonId,window);}if(p.altSaveButtonId){altSaveButton=WA.$(p.altSaveButtonId,window);}if(p.saveLinkButtonId){saveLinkButton=WA.$(p.saveLinkButtonId,window);}if(p.deleteButtonId){deleteButton=WA.$(p.deleteButtonId,window);}if(p.cancelButtonId){cancelButton=WA.$(p.cancelButtonId,window);}if(p.uploadButtonId){uploadButton=WA.$(p.uploadButtonId,window);}if(p.uploadActionId){uploadAction=WA.$(p.uploadActionId,window);}if(p.viewModeRadioContainerId){viewModeRadioContainer=WA.$(p.viewModeRadioContainerId,window);}if(p.uploadButtonContainerId){uploadButtonContainer=WA.$(p.uploadButtonContainerId,window);}if(p.descriptionContainerId){descriptionContainer=WA.$(p.descriptionContainerId,window);}if(p.descriptionHeightUrlKey){descriptionHeightUrlKey=p.descriptionHeightUrlKey;}if(p.countPhotosPerRowUrlKey){countPhotosPerRowUrlKey=p.countPhotosPerRowUrlKey;}if(p.pagingUrlKey){pagingKey=p.pagingUrlKey;}}function initJsFunctions(){setDisplayInline(saveLinkButton);setDisplayInline(uploadButton);setDisplay(viewModeRadioContainer);setDisplay(uploadButtonContainer);}function pageParsed(){initJsFunctions();}function pageUnloading(){setDisabled(saveButton);setDisabled(uploadButton);setDisabled(deleteButton);if(saveLinkButton){setDisabled(saveLinkButton);setDisabled(altSaveButton);setDisabled(cancelButton);}}function setDisplay(element){if(element){element.style.display="";}}function setDisplayInline(element){if(element){element.style.display="inline";}}function setDisplayBlock(element){if(element){element.style.display="block";}}function setVisibilityVisible(element){if(element){element.style.visibility="visible";}}function setVisibilityHidden(element){if(element){element.style.visibility="hidden";}}function setDisplayNone(element){if(element){element.style.display="none";}}function setDisabled(element){if(element){element.disabled=true;}}function closeSaveAlbumDialog(){PhotoAlbumsDialog.saveAlbumDialog.close();}function closeUploadPhotosDialog(){PhotoAlbumsDialog.uploadPhotosDialog.close();}function getSaveAction(){return saveAction;}function getSaveTitle(){return titleTextBox;}function getSaveDescription(){return descriptionTextBox;}function getSaveButton(){return saveButton;}function getDeleteButton(){return deleteButton;}function getUploadButton(){return uploadButton;}function getUploadAction(){return uploadAction;}function processingButtonClick(sender,otherIds){if(sender){sender.value=processingText;}if(otherIds&&otherIds.length){for(var i=0;i<otherIds.length;i++){var btn=WA.$(otherIds[i],window);if(btn&&btn.id!=sender.id){btn.disabled=true;}}}return true;}function deleteButtonClick(sender,otherIds){if(confirm(deleteConfirmation)){return processingButtonClick(sender,otherIds);}return false;}function uploadButtonClick(){if(!uploadPhotosDialogInited){PhotoAlbumsDialog.uploadPhotosDialog.initialize({albumParam:albumParam});uploadPhotosDialogInited=true;}if(uploadAction.value=="1"){uploadAction.value="";if(uploadButton){uploadButton.value=processingText;}WA.reloadCurrentPage(pagingKey,window);return;}PhotoAlbumsDialog.uploadPhotosDialog.open(null,{"PhotoGallery":PhotoGallery});}function saveButtonClick(){if(!saveAlbumDialogInited){PhotoAlbumsDialog.saveAlbumDialog.initialize({albumParam:albumParam});saveAlbumDialogInited=true;}if(saveAction.value=="1"){saveAction.value="";if(saveButton){saveButton.value=processingText;}return true;}PhotoAlbumsDialog.saveAlbumDialog.open(null,{"PhotoGallery":PhotoGallery});return false;}function imageMenuMouseOver(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){if(photoItemTimeout&&photoItemId==imageDivId){clearTimeout(photoItemTimeout);photoItemTimeout=false;return;}if(actionIsRunning){return;}sender.parentNode.style.height=sender.offsetHeight+"px";WA.$(imageDivId,window).className="photoAlbumItemThumbnailPhotoHover";sender.className="photoInnerContainerOver";sender.style.zIndex=sender.style.zIndex+1;var fullDescriptionDiv=WA.$(fullDescriptionDivId,window);setDisplayBlock(fullDescriptionDiv);setVisibilityVisible(fullDescriptionDiv);setDisplayNone(WA.$(smallDescriptionDivId,window));if(photosHolder){photosHolderHeight=photosHolder.offsetHeight;if(!photosHolder.Y){WA.Dimensions.getXY(photosHolder);}if(!fullDescriptionDiv.Y){WA.Dimensions.getXY(fullDescriptionDiv);}var outHeigth=fullDescriptionDiv.Y+fullDescriptionDiv.offsetHeight-photosHolder.Y-photosHolderHeight;if(outHeigth>0){photosHolder.style.height=(photosHolderHeight+outHeigth+10)+"px";}}}function doImageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){WA.$(imageDivId,window).className="photoAlbumItemThumbnailPhoto";sender.className="photoInnerContainer";sender.style.zIndex=sender.style.zIndex-1;setVisibilityHidden(WA.$(fullDescriptionDivId,window));setDisplayBlock(WA.$(smallDescriptionDivId,window));if(photosHolderHeight&&photosHolder.offsetHeight>photosHolderHeight){photosHolder.style.height=photosHolderHeight+"px";}photoItemId=false;photoItemTimeout=false;}function imageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){if(actionIsRunning){if(!pendingSender){pendingSender=sender;pendingImageDivId=imageDivId;pendingFullDescriptionDivId=fullDescriptionDivId;pendingSmallDescriptionDivId=smallDescriptionDivId;}return;}if(photoItemTimeout&&photoItemId==imageDivId){return;}photoItemId=imageDivId;photoItemTimeout=setTimeout(function(){doImageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId);},10);}function menuButtonMouseOver(sender){sender.className="overButton";}function menuButtonMouseOut(sender){sender.className="outButton";}function menuButtonClick(linkId,secondButtonId,processingContainerId,confirmVariableName){var linkobj=WA.$(linkId,window);if(linkobj){setDisplayNone(linkobj);var secondButton=WA.$(secondButtonId,window);var processingContainer=WA.$(processingContainerId,window);setDisplayNone(secondButton);setDisplayBlock(processingContainer);if(confirmVariableName){actionIsRunning=true;if(!confirm(eval(confirmVariableName))){actionIsRunning=false;setDisplayNone(processingContainer);setDisplay(secondButton);setDisplay(linkobj);if(pendingSender){imageMenuMouseOut(pendingSender,pendingImageDivId,pendingFullDescriptionDivId,pendingSmallDescriptionDivId);pendingSender=false;}return;}}actionIsRunning=false;eval(linkobj.href.substr(11).replace(/\%20/g," ").replace(/\%22/g,'"'));}}function navigateToList(url){var descriptionHeight=(descriptionContainer)?descriptionContainer.offsetHeight:0;var countPhotosPerRow=0;if(photosHolder){var y=0;var bulets=photosHolder.getElementsByTagName("LI");for(var i=0;i<bulets.length;i++){WA.Dimensions.getXY(bulets[i]);if(i==0){y=bulets[i].Y;}else{if(y<bulets[i].Y){countPhotosPerRow=i;break;}}}}if(descriptionHeightUrlKey&&countPhotosPerRowUrlKey){var index=url.indexOf("?",0);url=index==-1?url+"?":url+"&";url+=descriptionHeightUrlKey+"="+descriptionHeight+"&"+countPhotosPerRowUrlKey+"="+countPhotosPerRow;}url+="#photo";window.location=url;}function checkLength(e,oObject,maxLength){if(oObject.value.length<maxLength){return true;}else{var keyID=(window.event)?event.keyCode:e.keyCode;if((keyID>=37&&keyID<=40)||(keyID==8)||(keyID==46)){if(window.event){e.returnValue=true;}}else{if(window.event){e.returnValue=false;}else{e.preventDefault();}}}}})();(function(window,WA){if(!WA){return;}if(!window.PhotoAlbumsDialog){window.PhotoAlbumsDialog={};}PhotoAlbumsDialog.uploadPhotosDialog=new WA.topWindow.BonaDialogHandler({name:"PhotoAlbumsDialog_UploadPhotosDialog",dialogParameters:{clipContainerId:"idClipMainContainer",mainContainerId:"contentDiv",directURLTemplate:"/Content/Members/PhotoGallery/UploadPhotosDialog.aspx?frameMode=0{albumParam}&version="+WA.version,reloadURLTemplate:"/Content/Pictures/PhotoGallery/UploadPhotosInnerDialog.aspx?version="+WA.version+"{albumParam}",top:null,left:null,width:430,height:355,minWidth:430,minHeight:355,isMoveable:true,isResizeable:false,isModal:true,isScrollable:false,callBackParameters:{}},onDialogClose:function(){if(PhotoGallery.Get_UploadAction().value=="1"){PhotoGallery.Get_UploadButton().click();}}});})(window,window.WA);(function(window){if(!window.PhotoAlbumGadgetHelperScript){window.PhotoAlbumGadgetHelperScript=new photoAlbumGadgetHelper();}function photoAlbumGadgetHelper(){var pThis=this;pThis.init=init;function init(){BonaPage.addPageStateHandler(BonaPage.PAGE_PARSED,render);}function render(){setScroll();setLabels();galleryAlbum();photoAlbumObjectFit();}function setScroll(){if(jq$(".WaGadgetPhotoAlbumStatePhoto .editCaptionTextBox").size()){$("body").animate({scrollTop:$(".WaGadgetPhotoAlbumStatePhoto .editCaptionTextBox").offset().top},0);}}function setLabels(){jq$('.WaGadgetPhotoAlbumStatePhoto .pageBackContainer a:contains("All album photos")').html("All album photos");jq$('.WaGadgetPhotoAlbumStatePhoto .linkContainer a:contains("Previous"), .WaGadgetPhotoAlbumStatePhoto .linkContainer span:contains("Previous")').html("Previous");jq$('.WaGadgetPhotoAlbumStatePhoto .linkContainer a:contains("Next"), .WaGadgetPhotoAlbumStatePhoto .linkContainer span:contains("Next")').html("Next");jq$('.WaGadgetPhotoAlbumStatePhoto .buttonsInTitleContainer input[value="Delete photo"]').val("Delete");}function photoAlbumObjectFit(){if(document.documentMode||/Edge/.test(navigator.userAgent)){if(jq$(".WaGadgetPhotoAlbum.PhotoAlbumStyle001").length>0){jq$(".imageAnchor img").each(function(){var t=jq$(this),s="url("+t.attr("src")+")",p=t.parent(),d=jq$("<div></div>");p.append(d);d.css({"height":t.parent().css("height"),"background-size":"cover","background-repeat":"no-repeat","background-position":"50% 20%","background-image":s});t.hide();});}}}function galleryAlbum(){if(jq$(".WaGadgetPhotoAlbum.PhotoAlbumStyle002").length>0){jq$(".photosContainerUL").prepend('<li class="photoAlbumItemContainerLiSizer"></li><li class="photoAlbumItemContainerLiGutter"></li>');var $grid=$(".photosContainerUL").imagesLoaded(function(){$grid.masonry({itemSelector:".photoAlbumItemContainerLi",columnWidth:".photoAlbumItemContainerLiSizer",gutter:".photoAlbumItemContainerLiGutter",percentPosition:true});});jq$("#idPhotoHeaderContainer").append(jq$(".infoContainer"));jq$("#idPhotoHeaderContainer").wrapInner('<div class="photoHeaderContainerWrap"></div>');jq$("#idPhotoHeaderContainer .infoContainer").wrap('<div class="infoContainerWrap"></div>');if(jq$(".buttonsInTitleContainer input").length>0){jq$(".photoHeaderContainerWrap").css("margin-right","52px");jq$("#idPhotoHeaderContainer").append('<a href="#" class="photoAlbumDeleteButton" title="Delete photo"></a>');}jq$(".imageContainer").append(jq$(".menuHeaderLeftContainer .linkContainer:first"));jq$(".imageContainer").append(jq$(".menuHeaderLeftContainer .linkContainer:last"));if(jq$('.footerContainer a:contains("Edit")').length>0){jq$('.footerContainer a:contains("Edit")').addClass("noneEdit");jq$(".captionContainer").append('<a href="#" class="photoAlbumEditCaptionButton" title="Edit caption"></a>');}if(jq$("#idCaptionContainer .photoLabel").html()===""){jq$(".photoLabel").css("display","none");}jq$(".photoAlbumEditCaptionButton").click(function(){$(".footerContainer a")[0].click();});jq$(".photoAlbumDeleteButton").click(function(){$(".buttonsInTitleContainer input").trigger("click");});}}}})(window);jq$(function(){if(jq$(".WaPlaceHolderSidebar").length>0){jq$(".zoneMain .recentBlogPostsStyle003, .zoneMain .recentBlogPostsStyle006").find("ul").slick({dots:true,speed:300,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});jq$(function(){jq$(".WaPlaceHolderSidebar .recentBlogPostsStyle003, .WaPlaceHolderSidebar .recentBlogPostsStyle006").find("ul").slick({dots:true,speed:300,slidesToShow:1,slidesToScroll:1});});}else{jq$(".recentBlogPostsStyle003, .recentBlogPostsStyle006").find("ul").slick({dots:true,speed:300,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});}});

/*compiled*/

(function()
{
  if (!window.WASiteSearchGadget)
  {
    window.WASiteSearchGadget = WASiteSearchGadget;
  }
  
  function WASiteSearchGadget(args)
  {
	var pThis = this;
    
	pThis.init = init;
	pThis.doSearch = doSearch;
  
	var model, searchBox, resultDiv, selectedTypes, timer, delay = 600,
	items, searchInProgress, thereWasAnotherRequest,
	selectedSugestion = -1; 
	
	
	model = args || {};
  
	function init()
	{
	    if (!document.getElementById(model.searchBoxId))
		{
		  throw new Error("couldn't find searchBoxId");
		}
		
		searchInProgress = false;
		thereWasAnotherRequest = false;
		
	    searchBox = jq$('#' + model.searchBoxId);
	    searchBoxButton = jq$('#' + model.searchBoxButton);

		searchBox.bind('keypress', moveToSearchPage);
		searchBoxButton.bind('click', handleSearchButtonClick);


		selectedTypes = model.selectedTypes;
		
		if (model.autoSuggest)
		{
		    resultDiv = jq$('#' + model.resultDivId);

			searchBox.bind('input', search)
			searchBox.bind('keydown', handleKey)
		}
	}

	function handleSearchButtonClick(e)
	{
		var url;

		url = WA.String.format(model.searchTemplate,
			encodeURIComponent(searchBox.val()),
			selectedTypes, 1);

		window.location = url;
		return false;
	}

	function moveToSearchPage(e)
	{
		if (e.keyCode == 13) // enter
		{
			var url;

			if (selectedSugestion >= 0 && selectedSugestion < items.length)
			{
				url = items[selectedSugestion].url;
			}
			else
			{
				url = WA.String.format(model.searchTemplate, 
					encodeURIComponent(searchBox.val()),
					selectedTypes, 1);
			}
			
			window.location = url;
			return false;
		}
	}
	function handleKey(e)
	{
		if (e.keyCode == 40)  // down
		{
			setSelectedDown();
			return false;
		}
		if (e.keyCode == 38)  // up
		{
			setSelectedUp();
			return false;
		}
	}
	  
	function search() 
	{
		if (timer)
		{
		  clearTimeout(timer);
		}

		timer = setTimeout(doSearch, delay);
	}

	function doSearch()
	{
        thereWasAnotherRequest = false;
		
		selectedSugestion = -1;
		if (searchBox.val().length == 0)
		{
		  setEmptyResult();
		  return;
		} 

		var filter = selectedTypes;
		if (filter == 0)
		{
		  setEmptyResult();
		  return;
		}

		if (searchInProgress)
		{
			thereWasAnotherRequest = true;
			return;
		}

		searchInProgress = true;
		jq$.ajax({
		  type: 'POST',
		  url: model.searchActionUrl,
		  data: JSON.stringify({ 'q' : searchBox.val(), 'types': filter, 'pageNumber' : 1, 'noPaging' : 0 , 'pageSize' : 10, titlesOnly: 1}),
		  contentType: 'application/json; charset=utf-8',
		  dataType: 'text'
		}).done(function(data)
		{
			searchInProgress = false;
			if (thereWasAnotherRequest) { doSearch(); }
			else
			{
				selectedSugestion = -1;
				var jsonData = JSON.parse( data.replace("while(1); ","","i").trim() );		  
				renderResult(jsonData);
		    }
		})
		.fail(function()
		{
			searchInProgress = false;
			if (thereWasAnotherRequest) { doSearch(); }
		});
	}

	function setEmptyResult()
	{
		resultDiv.html('');
		resultDiv.hide();
	}

	function renderResult(data)
	{
		resultDiv.show();
		items = data.entities;
		var a = [];

		for (var i = 0; i < items.length; i++)
		{
		  var o = items[i];
		  a.push('<div id="' + getSuggestionDivId(i) + '" class="item">');
		  a.push('<a class="' + o.className + '" title="' + o.tooltip + '" href="' + o.url + '"><span>' + o.title + '</span></a>');
		  a.push('</div>');
		}

		  a.push('<div id="' + getSuggestionDivId(i) + '" class="item last">');
		  a.push('<a href="' + WA.String.format(model.searchTemplate, encodeURIComponent(searchBox.val()), selectedTypes, 1) +
			'"><span>' + WA.String.format(model.GoToSearchPageTextTemplate, $('<div/>').text(searchBox.val()).html()) + '</span></a>');
		  a.push('</div>');
		resultDiv.html(a.join(''));
	}
	
	function getSuggestionDivId(i)
	{
		return model.gadgetId + '_' + i + 'Suggestion';
	}
	
	function setSelectedDown()
	{
	   if (!items || selectedSugestion >= items.length)
	   {
		return;
	   }
	   
		clearCurrentSuggestion();
		selectedSugestion++;
		setCurrentSuggestion();
	}
	
	function setSelectedUp()
	{
	   if (!items || (selectedSugestion <= 0))
	   {
		return;
	   }
	   
		clearCurrentSuggestion();
		selectedSugestion--;
		setCurrentSuggestion();
	}

	function clearCurrentSuggestion()
	{
	   if (selectedSugestion < 0)
	   {
		return;
	   }
	   
	   var div  = jq$('#' + getSuggestionDivId(selectedSugestion)); 
	   div.removeClass('selectedSuggestions');
	}
	
	function setCurrentSuggestion()
	{
	   if (selectedSugestion < 0)
	   {
		return;
	   }
	   
	   var div  = jq$('#' +  getSuggestionDivId(selectedSugestion)); 
	   div.addClass('selectedSuggestions');
	}

	init();
	}
}) ();

/*compiled*/
// Camera slideshow v1.3.3 - a jQuery slideshow with many effects, transitions, easy to customize, using canvas and mobile ready, based on jQuery 1.4+
// Copyright (c) 2012 by Manuel Masia - www.pixedelic.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
;(function($){$.fn.camera = function(opts, callback) {
	
	var defaults = {
		alignment			: 'center', //topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight
		
		autoAdvance			: true,	//true, false
		
		mobileAutoAdvance	: true, //true, false. Auto-advancing for mobile devices
		
		barDirection		: 'leftToRight',	//'leftToRight', 'rightToLeft', 'topToBottom', 'bottomToTop'
		
		barPosition			: 'bottom',	//'bottom', 'left', 'top', 'right'
		
		cols				: 6,
		
		easing				: 'easeInOutExpo',	//for the complete list http://jqueryui.com/demos/effect/easing.html
		
		mobileEasing		: '',	//leave empty if you want to display the same easing on mobile devices and on desktop etc.
		
		fx					: 'random',	//'random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft', 'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight'
										//you can also use more than one effect, just separate them with commas: 'simpleFade, scrollRight, scrollBottom'

		mobileFx			: '',	//leave empty if you want to display the same effect on mobile devices and on desktop etc.

		gridDifference		: 250,	//to make the grid blocks slower than the slices, this value must be smaller than transPeriod
		
		height				: '50%',	//here you can type pixels (for instance '300px'), a percentage (relative to the width of the slideshow, for instance '50%') or 'auto'
		
		imagePath			: 'images/',	//he path to the image folder (it serves for the blank.gif, when you want to display videos)
		
		hover				: true,	//true, false. Puase on state hover. Not available for mobile devices
				
		loader				: 'pie',	//pie, bar, none (even if you choose "pie", old browsers like IE8- can't display it... they will display always a loading bar)
		
		loaderColor			: '#eeeeee', 
		
		loaderBgColor		: '#222222', 
		
		loaderOpacity		: .8,	//0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1
		
		loaderPadding		: 2,	//how many empty pixels you want to display between the loader and its background
		
		loaderStroke		: 7,	//the thickness both of the pie loader and of the bar loader. Remember: for the pie, the loader thickness must be less than a half of the pie diameter
				
		minHeight			: '200px',	//you can also leave it blank
		
		navigation			: true,	//true or false, to display or not the navigation buttons
		
		navigationHover		: true,	//if true the navigation button (prev, next and play/stop buttons) will be visible on hover state only, if false they will be visible always
		
		mobileNavHover		: true,	//same as above, but only for mobile devices
		
		opacityOnGrid		: false,	//true, false. Decide to apply a fade effect to blocks and slices: if your slideshow is fullscreen or simply big, I recommend to set it false to have a smoother effect 
		
		overlayer			: true,	//a layer on the images to prevent the users grab them simply by clicking the right button of their mouse (.camera_overlayer)
		
		pagination			: true,
		
		playPause			: true,	//true or false, to display or not the play/pause buttons
		
		pauseOnClick		: true,	//true, false. It stops the slideshow when you click the sliders.
		
		pieDiameter			: 38,
		
		piePosition			: 'rightTop',	//'rightTop', 'leftTop', 'leftBottom', 'rightBottom'
		
		portrait			: false, //true, false. Select true if you don't want that your images are cropped
		
		rows				: 4,
		
		slicedCols			: 12,	//if 0 the same value of cols
		
		slicedRows			: 8,	//if 0 the same value of rows
		
		slideOn				: 'random',	//next, prev, random: decide if the transition effect will be applied to the current (prev) or the next slide
		
		thumbnails			: false,
		
		time				: 7000,	//milliseconds between the end of the sliding effect and the start of the nex one
		
		transPeriod			: 1500,	//lenght of the sliding effect in milliseconds
		
    randomSlide : false,
		
////////callbacks

		onEndTransition		: function() {  },	//this callback is invoked when the transition effect ends

		onLoaded			: function() {  },	//this callback is invoked when the image on a slide has completely loaded
		
		onStartLoading		: function() {  },	//this callback is invoked when the image on a slide start loading
		
		onStartTransition	: function() {  }	//this callback is invoked when the transition effect starts

    };
	
	
	function isMobile() {
		if( navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPod/i)
			){
				return true;
		}
	}

	var opts = $.extend({}, defaults, opts);
	
	var wrap = $(this).addClass('camera_wrap');
	
	wrap.wrapInner(
        '<div class="camera_src" />'
		).wrapInner(
	    '<div class="camera_fakehover" />'
		);
		
	var fakeHover = $('.camera_fakehover',wrap);
	
	fakeHover.append(
		'<div class="camera_target"></div>'
		);
	if(opts.overlayer == true){
		fakeHover.append(
			'<div class="camera_overlayer"></div>'
			)
	}
		fakeHover.append(
        '<div class="camera_target_content"></div>'
		);
		
	var loader;
	
	if(opts.loader=='pie' && $.browser.msie && $.browser.version < 9){
		loader = 'bar';
	} else {
		loader = opts.loader;
	}
	
	if(loader == 'pie'){
		fakeHover.append(
			'<div class="camera_pie"></div>'
			)
	} else if (loader == 'bar') {
		fakeHover.append(
			'<div class="camera_bar"></div>'
			)
	} else {
		fakeHover.append(
			'<div class="camera_bar" style="display:none"></div>'
			)
	}
	
	if(opts.playPause==true){
		fakeHover.append(
        '<div class="camera_commands"></div>'
		)
	}
		
	if(opts.navigation==true){
		fakeHover.append(
			'<div class="camera_prev"><span></span></div>'
			).append(
			'<div class="camera_next"><span></span></div>'
			);
	}
		
	if(opts.thumbnails==true){
		wrap.append(
			'<div class="camera_thumbs_cont" />'
			);
	}
	
	if(opts.thumbnails==true && opts.pagination!=true){
		$('.camera_thumbs_cont',wrap).wrap(
			'<div />'
			).wrap(
				'<div class="camera_thumbs" />'
			).wrap(
				'<div />'
			).wrap(
				'<div class="camera_command_wrap" />'
			);
	}
		
	if(opts.pagination==true){
		wrap.append(
			'<div class="camera_pag"></div>'
			);
	}
		
	wrap.append(
		'<div class="camera_loader"></div>'
		);
		
	$('.camera_caption',wrap).each(function(){
		$(this).wrapInner('<div />');
	});
		
                
	var pieID = 'pie_'+wrap.index('.camera_wrap'),
		elem = $('.camera_src',wrap),
		target = $('.camera_target',wrap),
		content = $('.camera_target_content',wrap),
		pieContainer = $('.camera_pie',wrap),
		barContainer = $('.camera_bar',wrap),
		prevNav = $('.camera_prev',wrap),
		nextNav = $('.camera_next',wrap),
		commands = $('.camera_commands',wrap),
		pagination = $('.camera_pag',wrap),
		thumbs = $('.camera_thumbs_cont',wrap);	

	
	var w,
		h;


	var allImg = new Array();
	$('> div', elem).each( function() { 
		allImg.push($(this).attr('data-src'));
	});
	
	var allLinks = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-link')){
			allLinks.push($(this).attr('data-link'));
		} else {
			allLinks.push('');
		}
	});
	
	var allTargets = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-target')){
			allTargets.push($(this).attr('data-target'));
		} else {
			allTargets.push('');
		}
	});
	
  var allTitles = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-title')){
			allTitles.push($(this).attr('data-title'));
		} else {
			allTitles.push('');
		}
	});
	
	var allPor = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-portrait')){
			allPor.push($(this).attr('data-portrait'));
		} else {
			allPor.push('');
		}
	});
	
	var allAlign= new Array();
	$('> div', elem).each( function() { 
		if($(this).attr('data-alignment')){
			allAlign.push($(this).attr('data-alignment'));
		} else {
			allAlign.push('');
		}
	});
	
		
	var allThumbs = new Array();
	$('> div', elem).each( function() { 
		if($(this).attr('data-thumb')){
			allThumbs.push($(this).attr('data-thumb'));
		} else {
			allThumbs.push('');
		}
	});
	
	var amountSlide = allImg.length;

	$(content).append('<div class="cameraContents" />');
	var loopMove;
	for (loopMove=0;loopMove<amountSlide;loopMove++)
	{
		$('.cameraContents',content).append('<div class="cameraContent" />');
		if(allLinks[loopMove]!=''){
			//only for Wordpress plugin
			var dataBox = $('> div ',elem).eq(loopMove).attr('data-box');
			if(typeof dataBox !== 'undefined' && dataBox !== false && dataBox != '') {
				dataBox = 'data-box="'+$('> div ',elem).eq(loopMove).attr('data-box')+'"';
			} else {
				dataBox = '';
			}
			//
			$('.camera_target_content .cameraContent:eq('+loopMove+')',wrap).append('<a class="camera_link" href="'+allLinks[loopMove]+'" '+dataBox+' target="'+allTargets[loopMove]+'" title="'+allTitles[loopMove]+'"></a>');
		}

	}
	$('.camera_caption',wrap).each(function(){
		var ind = $(this).parent().index(),
			cont = wrap.find('.cameraContent').eq(ind);
		$(this).appendTo(cont);
	});
	
	target.append('<div class="cameraCont" />');
	var cameraCont = $('.cameraCont',wrap);
	

	
	var loop;
	for (loop=0;loop<amountSlide;loop++)
	{
		cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');
		var div = $('> div:eq('+loop+')',elem);
		target.find('.cameraSlide_'+loop).clone(div);
	}
	
	
	function thumbnailVisible() {
		var wTh = $(thumbs).width();
		$('li', thumbs).removeClass('camera_visThumb');
		$('li', thumbs).each(function(){
			var pos = $(this).position(),
				ulW = $('ul', thumbs).outerWidth(),
				offUl = $('ul', thumbs).offset().left,
				offDiv = $('> div',thumbs).offset().left,
				ulLeft = offDiv-offUl;
				if(ulLeft>0){
					$('.camera_prevThumbs',camera_thumbs_wrap).removeClass('hideNav');
				} else {
					$('.camera_prevThumbs',camera_thumbs_wrap).addClass('hideNav');
				}
				if((ulW-ulLeft)>wTh){
					$('.camera_nextThumbs',camera_thumbs_wrap).removeClass('hideNav');
				} else {
					$('.camera_nextThumbs',camera_thumbs_wrap).addClass('hideNav');
				}
				var left = pos.left,
					right = pos.left+($(this).width());
				if(right-ulLeft<=wTh && left-ulLeft>=0){
					$(this).addClass('camera_visThumb');
				}
		});
	}

  function placeThumbsOnWindowResize()
  {
    thumbnailPos();
    thumbnailVisible();
  }

  $(window).on('load resize pageshow',placeThumbsOnWindowResize);

	cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');
	
	
	var started;
	
	wrap.show();
	var w = target.width();
	var h = target.height();
	
	var setPause;

  function onWindowResize()
  {
    if(started == true) {
      resizeImage();
    }
    $('ul', thumbs).animate({'margin-top':0},0,thumbnailPos);
    if(!elem.hasClass('paused')){
      elem.addClass('paused');
      if($('.camera_stop',camera_thumbs_wrap).length){
        $('.camera_stop',camera_thumbs_wrap).hide()
        $('.camera_play',camera_thumbs_wrap).show();
        if(loader!='none'){
          $('#'+pieID).hide();
        }
      } else {
        if(loader!='none'){
          $('#'+pieID).hide();
        }
      }
      clearTimeout(setPause);
      setPause = setTimeout(function(){
        elem.removeClass('paused');
        if($('.camera_play',camera_thumbs_wrap).length){
          $('.camera_play',camera_thumbs_wrap).hide();
          $('.camera_stop',camera_thumbs_wrap).show();
          if(loader!='none'){
            $('#'+pieID).fadeIn();
          }
        } else {
          if(loader!='none'){
            $('#'+pieID).fadeIn();
          }
        }
      },1500);
    }
  }
		
	$(window).on('resize pageshow', onWindowResize);
	
	function resizeImage(){	
		var res;
		function resizeImageWork(){

      if (!wrap)
      {
        if (res) clearTimeout(res);

        return;
      }

      var prevW = w,
          prevH = h;

			w = wrap.width();
			if(opts.height.indexOf('%')!=-1) {
				var startH = Math.round(w / (100/parseFloat(opts.height)));
				if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
					h = parseFloat(opts.minHeight);
				} else {
					h = startH;
				}
				wrap.css({height:h});
			} else if (opts.height=='auto') {
				h = wrap.height();
			} else {
				h = parseFloat(opts.height);
				wrap.css({height:h});
			}

			$('.camerarelative',target).css({'width':w,'height':h});

      if (w != prevW || h != prevH)
      {
        WA.Gadgets.notifyGadgetChanged();
      }

			$('.imgLoaded',target).each(function(){
				var t = $(this),
					wT = t.attr('width'),
					hT = t.attr('height'),
					imgLoadIn = t.index(),
					mTop,
					mLeft,
					alignment = t.attr('data-alignment'),
					portrait =  t.attr('data-portrait');
					
					if(typeof alignment === 'undefined' || alignment === false || alignment === ''){
						alignment = opts.alignment;
					}
					
					if(typeof portrait === 'undefined' || portrait === false || portrait === ''){
						portrait = opts.portrait;
					}
										
					if(portrait==false||portrait=='false'){
						if((wT/hT)<(w/h)) {
							var r = w / wT;
							var d = (Math.abs(h - (hT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mTop = 0;
									break;
								case 'topCenter':
									mTop = 0;
									break;
								case 'topRight':
									mTop = 0;
									break;
								case 'centerLeft':
									mTop = '-'+d+'px';
									break;
								case 'center':
									mTop = '-'+d+'px';
									break;
								case 'centerRight':
									mTop = '-'+d+'px';
									break;
								case 'bottomLeft':
									mTop = '-'+d*2+'px';
									break;
								case 'bottomCenter':
									mTop = '-'+d*2+'px';
									break;
								case 'bottomRight':
									mTop = '-'+d*2+'px';
									break;
							}
							t.css({
								'height' : hT*r,
								'margin-left' : 0,
								'margin-top' : mTop,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : w
							});
						}
						else {
							var r = h / hT;
							var d = (Math.abs(w - (wT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mLeft = 0;
									break;
								case 'topCenter':
									mLeft = '-'+d+'px';
									break;
								case 'topRight':
									mLeft = '-'+d*2+'px';
									break;
								case 'centerLeft':
									mLeft = 0;
									break;
								case 'center':
									mLeft = '-'+d+'px';
									break;
								case 'centerRight':
									mLeft = '-'+d*2+'px';
									break;
								case 'bottomLeft':
									mLeft = 0;
									break;
								case 'bottomCenter':
									mLeft = '-'+d+'px';
									break;
								case 'bottomRight':
									mLeft = '-'+d*2+'px';
									break;
							}
							t.css({
								'height' : h,
								'margin-left' : mLeft,
								'margin-top' : 0,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : wT*r
							});
						}
					} else {
						if((wT/hT)<(w/h)) {
							var r = h / hT;
							var d = (Math.abs(w - (wT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mLeft = 0;
									break;
								case 'topCenter':
									mLeft = d+'px';
									break;
								case 'topRight':
									mLeft = d*2+'px';
									break;
								case 'centerLeft':
									mLeft = 0;
									break;
								case 'center':
									mLeft = d+'px';
									break;
								case 'centerRight':
									mLeft = d*2+'px';
									break;
								case 'bottomLeft':
									mLeft = 0;
									break;
								case 'bottomCenter':
									mLeft = d+'px';
									break;
								case 'bottomRight':
									mLeft = d*2+'px';
									break;
							}
							t.css({
								'height' : h,
								'margin-left' : mLeft,
								'margin-top' : 0,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : wT*r
							});
						}
						else {
							var r = w / wT;
							var d = (Math.abs(h - (hT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mTop = 0;
									break;
								case 'topCenter':
									mTop = 0;
									break;
								case 'topRight':
									mTop = 0;
									break;
								case 'centerLeft':
									mTop = d+'px';
									break;
								case 'center':
									mTop = d+'px';
									break;
								case 'centerRight':
									mTop = d+'px';
									break;
								case 'bottomLeft':
									mTop = d*2+'px';
									break;
								case 'bottomCenter':
									mTop = d*2+'px';
									break;
								case 'bottomRight':
									mTop = d*2+'px';
									break;
							}
							t.css({
								'height' : hT*r,
								'margin-left' : 0,
								'margin-top' : mTop,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : w
							});
						}
					}
			});
		}
		if (started == true) {
			clearTimeout(res);
			res = setTimeout(resizeImageWork,200);
		} else {
			resizeImageWork();
		}
		
		started = true;
	}
	
	
	var u,
		setT;

	var clickEv,
		autoAdv,
		navHover,
		commands,
		pagination;

	var videoHover,
		videoPresent;
		
	if(isMobile() && opts.mobileAutoAdvance!=''){
		autoAdv = opts.mobileAutoAdvance;
	} else {
		autoAdv = opts.autoAdvance;
	}
	
	if(autoAdv==false){
		elem.addClass('paused');
	}

	if(isMobile() && opts.mobileNavHover!=''){
		navHover = opts.mobileNavHover;
	} else {
		navHover = opts.navigationHover;
	}

	if(elem.length!=0){
			
		var selector = $('.cameraSlide',target);
		selector.wrapInner('<div class="camerarelative" />');
		
		var navSlide;
			
		var barDirection = opts.barDirection;
	
		var camera_thumbs_wrap = wrap;


		$('iframe',fakeHover).each(function(){
			var t = $(this);
			var src = t.attr('src');
			t.attr('data-src',src);
			var divInd = t.parent().index('.camera_src > div');
			$('.camera_target_content .cameraContent:eq('+divInd+')',wrap).append(t);
		});
		function imgFake() {
				$('iframe',fakeHover).each(function(){
					$('.camera_caption',fakeHover).show();
					var t = $(this);
					var cloneSrc = t.attr('data-src');
					t.attr('src',cloneSrc);
					var imgFakeUrl = opts.imagePath+'blank.gif';
					var imgFake = new Image();
					imgFake.src = imgFakeUrl;
					if(opts.height.indexOf('%')!=-1) {
						var startH = Math.round(w / (100/parseFloat(opts.height)));
						if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
							h = parseFloat(opts.minHeight);
						} else {
							h = startH;
						}
					} else if (opts.height=='auto') {
						h = wrap.height();
					} else {
						h = parseFloat(opts.height);
					}
					t.after($(imgFake).attr({'class':'imgFake','width':w,'height':h}));
					var clone = t.clone();
					t.remove();
					$(imgFake).on('click',function(){
						if($(this).css('position')=='absolute') {
							$(this).remove();
							if(cloneSrc.indexOf('vimeo') != -1 || cloneSrc.indexOf('youtube') != -1) {
								if(cloneSrc.indexOf('?') != -1){
									autoplay = '&autoplay=1';
								} else {
									autoplay = '?autoplay=1';
								}
							} else if(cloneSrc.indexOf('dailymotion') != -1) {
								if(cloneSrc.indexOf('?') != -1){
									autoplay = '&autoPlay=1';
								} else {
									autoplay = '?autoPlay=1';
								}
							}
							clone.attr('src',cloneSrc+autoplay);
							videoPresent = true;
						} else {
							$(this).css({position:'absolute',top:0,left:0,zIndex:10}).after(clone);
							clone.css({position:'absolute',top:0,left:0,zIndex:9});
						}
					});
				});
		}
		
		imgFake();
		
		
		if(opts.hover==true){
			if(!isMobile()){
				fakeHover.hover(function(){
					elem.addClass('hovered');
				},function(){
					elem.removeClass('hovered');
				});
			}
		}

    if (navHover==true)
    {
      $(prevNav,wrap).animate({opacity:0},0);
      $(nextNav,wrap).animate({opacity:0},0);
      $(commands,wrap).animate({opacity:0},0);

      if (isMobile())
      {
        wrap.on
        (
          'vmouseover',
          '.camera_fakehover',
          function()
          {
            $(prevNav,wrap).animate({opacity:1},200);
            $(nextNav,wrap).animate({opacity:1},200);
            $(commands,wrap).animate({opacity:1},200);
          }
        );

        wrap.on
        (
          'vmouseout',
          '.camera_fakehover',
          function()
          {
            $(prevNav,wrap).delay(500).animate({opacity:0},200);
            $(nextNav,wrap).delay(500).animate({opacity:0},200);
            $(commands,wrap).delay(500).animate({opacity:0},200);
          }
        );
      }
      else
      {
        fakeHover.hover(function(){
		  $(prevNav,wrap).stop(true);
		  $(nextNav,wrap).stop(true);
		  $(commands,wrap).stop(true);
          $(prevNav,wrap).animate({opacity:1},200);
          $(nextNav,wrap).animate({opacity:1},200);
          $(commands,wrap).animate({opacity:1},200);
        },function(){
		  $(prevNav,wrap).stop(true);
		  $(nextNav,wrap).stop(true);
		  $(commands,wrap).stop(true);
          $(prevNav,wrap).animate({opacity:0},200);
          $(nextNav,wrap).animate({opacity:0},200);
          $(commands,wrap).animate({opacity:0},200);
        });
      }
    }


    camera_thumbs_wrap.on
    (
      'click',
      '.camera_stop',
      function()
      {
        autoAdv = false;
        elem.addClass('paused');

        if ($('.camera_stop',camera_thumbs_wrap).length)
        {
          $('.camera_stop',camera_thumbs_wrap).hide();
          $('.camera_play',camera_thumbs_wrap).show();

          if (loader!='none')
          {
            $('#'+pieID).hide();
          }
        }
        else
        {
          if (loader!='none')
          {
            $('#'+pieID).hide();
          }
        }
      }
    );

    camera_thumbs_wrap.on
    (
      'click',
      '.camera_play',
      function()
      {
        autoAdv = true;
        elem.removeClass('paused');

        if ($('.camera_play',camera_thumbs_wrap).length)
        {
          $('.camera_play',camera_thumbs_wrap).hide();
          $('.camera_stop',camera_thumbs_wrap).show();

          if (loader!='none')
          {
            $('#'+pieID).show();
          }
        }
        else
        {
          if (loader!='none')
          {
            $('#'+pieID).show();
          }
        }
      }
    );
	
		if(opts.pauseOnClick==true){
			$('.camera_target_content',fakeHover).mouseup(function(){
				autoAdv = false;
				elem.addClass('paused');
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				$('#'+pieID).hide();
			});
		}
		$('.cameraContent, .imgFake',fakeHover).hover(function(){
			videoHover = true;
		},function(){
			videoHover = false;
		});
		
		$('.cameraContent, .imgFake',fakeHover).on('click',function(){
			if(videoPresent == true && videoHover == true) {
				autoAdv = false;
				$('.camera_caption',fakeHover).hide();
				elem.addClass('paused');
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				$('#'+pieID).hide();
			}
		});
		
		
	}
	
	
		function shuffle(arr) {
			for(
			  var j, x, i = arr.length; i;
			  j = parseInt(Math.random() * i),
			  x = arr[--i], arr[i] = arr[j], arr[j] = x
			);
			return arr;
		}
	
		function isInteger(s) {
			return Math.ceil(s) == Math.floor(s);
		}	
	
		if (loader != 'pie') {
			barContainer.append('<span class="camera_bar_cont" />');
			$('.camera_bar_cont',barContainer)
				.animate({opacity:opts.loaderOpacity},0)
				.css({'position':'absolute', 'left':0, 'right':0, 'top':0, 'bottom':0, 'background-color':opts.loaderBgColor})
				.append('<span id="'+pieID+'" />');
			$('#'+pieID).animate({opacity:0},0);
			var canvas = $('#'+pieID);
			canvas.css({'position':'absolute', 'background-color':opts.loaderColor});
			switch(opts.barPosition){
				case 'left':
					barContainer.css({right:'auto',width:opts.loaderStroke});
					break;
				case 'right':
					barContainer.css({left:'auto',width:opts.loaderStroke});
					break;
				case 'top':
					barContainer.css({bottom:'auto',height:opts.loaderStroke});
					break;
				case 'bottom':
					barContainer.css({top:'auto',height:opts.loaderStroke});
					break;
			}
			switch(barDirection){
				case 'leftToRight':
					canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
					break;
				case 'rightToLeft':
					canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
					break;
				case 'topToBottom':
					canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
					break;
				case 'bottomToTop':
					canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
					break;
			}
		} else {
			pieContainer.append('<canvas id="'+pieID+'"></canvas>');
			var G_vmlCanvasManager;
			var canvas = document.getElementById(pieID);
			canvas.setAttribute("width", opts.pieDiameter);
			canvas.setAttribute("height", opts.pieDiameter);
			var piePosition;
			switch(opts.piePosition){
				case 'leftTop' :
					piePosition = 'left:0; top:0;';
					break;
				case 'rightTop' :
					piePosition = 'right:0; top:0;';
					break;
				case 'leftBottom' :
					piePosition = 'left:0; bottom:0;';
					break;
				case 'rightBottom' :
					piePosition = 'right:0; bottom:0;';
					break;
			}
			canvas.setAttribute("style", "position:absolute; z-index:1002; "+piePosition);
			var rad;
			var radNew;
	
			if (canvas && canvas.getContext) {
				var ctx = canvas.getContext("2d");
				ctx.rotate(Math.PI*(3/2));
				ctx.translate(-opts.pieDiameter,0);
			}
		
		}
		if(loader=='none' || autoAdv==false) {
			$('#'+pieID).hide();
			$('.camera_canvas_wrap',camera_thumbs_wrap).hide();
		}
		
		if($(pagination).length) {
			$(pagination).append('<ul class="camera_pag_ul" />');
			var li;
			for (li = 0; li < amountSlide; li++){
				$('.camera_pag_ul',wrap).append('<li class="pag_nav_'+li+'" style="position:relative; z-index:1002"><span><span>'+li+'</span></span></li>');
			}
			$('.camera_pag_ul li',wrap).hover(function(){
				$(this).addClass('camera_hover');
				if($('.camera_thumb',this).length){
					var wTh = $('.camera_thumb',this).outerWidth(),
					hTh = $('.camera_thumb',this).outerHeight(),
					wTt = $(this).outerWidth();
					$('.camera_thumb',this).show().css({'top':'-'+hTh+'px','left':'-'+(wTh-wTt)/2+'px'}).animate({'opacity':1,'margin-top':'-3px'},200);
					$('.thumb_arrow',this).show().animate({'opacity':1,'margin-top':'-3px'},200);
				}
			},function(){
				$(this).removeClass('camera_hover');
				$('.camera_thumb',this).animate({'margin-top':'-20px','opacity':0},200,function(){
					$(this).css({marginTop:'5px'}).hide();
				});
				$('.thumb_arrow',this).animate({'margin-top':'-20px','opacity':0},200,function(){
					$(this).css({marginTop:'5px'}).hide();
				});
			});
		}
			
	
	
		if($(thumbs).length) {
			var thumbUrl;
			if(!$(pagination).length) {
				$(thumbs).append('<div />');
				$(thumbs).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>');
				$('> div',thumbs).append('<ul />');
				$.each(allThumbs, function(i, val) {
					if($('> div', elem).eq(i).attr('data-thumb')!='') {
						var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
							newImg = new Image();
						newImg.src = thumbUrl;
						$('ul',thumbs).append('<li class="pix_thumb pix_thumb_'+i+'"' + ((true || WA.Browser.isIE && WA.Browser.isIE > 8) ? ' style="position: relative;"' : '') + ' />');
						$('li.pix_thumb_'+i,thumbs).append($(newImg).attr('class','camera_thumb').attr('style',((true || WA.Browser.isIE && WA.Browser.isIE > 8) ? 'object-fit: inherit; position: absolute; left: 0; top: 0;' : '')));
            
            if (true || WA.Browser.isIE && WA.Browser.isIE > 8)
            {
              fixCoverInIE();
            }
					}
				});
			} else {
				$.each(allThumbs, function(i, val) {
					if($('> div', elem).eq(i).attr('data-thumb')!='') {
						var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
							newImg = new Image();
						newImg.src = thumbUrl;
						$('li.pag_nav_'+i,pagination).append($(newImg).attr('class','camera_thumb').css({'position':'absolute'}).animate({opacity:0},0));
						$('li.pag_nav_'+i+' > img',pagination).after('<div class="thumb_arrow" />');
						$('li.pag_nav_'+i+' > .thumb_arrow',pagination).animate({opacity:0},0);
					}
				});
				wrap.css({marginBottom:$(pagination).outerHeight()});
			}
		} else if(!$(thumbs).length && $(pagination).length) {
			wrap.css({marginBottom:$(pagination).outerHeight()});
		}
    
    
    function fixCoverInIE ()
    {
      var i,
          thumbImages = document.querySelectorAll('IMG[class~="camera_thumb"]');
          
      for (i = 0; i < thumbImages.length; i++)
      {
        thumbImages[i].onload = function ()
        {
          var thumbImg = this,
              naturalWidth = thumbImg.naturalWidth,
              naturalHeight = thumbImg.naturalHeight,
              ratio = naturalWidth / naturalHeight,
              currentWidth = thumbImg.offsetWidth,
              currentHeight = thumbImg.offsetHeight,
              width,
              height;
          
          if (naturalWidth > naturalHeight)
          {
            width = currentHeight * ratio;
            thumbImg.style.width = Math.round(width) + 'px';
            thumbImg.style.left = -Math.round((width - currentWidth) / 2) + 'px';
          }
          else
          {
            height = currentWidth / ratio;
            thumbImg.style.height = Math.round(height) + 'px';
            thumbImg.style.top = -Math.round((height - currentHeight) / 2) + 'px';
          }
        }
      }
    }

	
		var firstPos = true;

		function thumbnailPos() {
			if($(thumbs).length && !$(pagination).length) {
				var wTh = $(thumbs).outerWidth(),
					owTh = $('ul > li',thumbs).outerWidth(),
					pos = $('li.cameracurrent', thumbs).length ? $('li.cameracurrent', thumbs).position() : '',
					ulW = ($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth()),
					offUl = $('ul', thumbs).offset().left,
					offDiv = $('> div', thumbs).offset().left,
					ulLeft;

					if(offUl<0){
						ulLeft = '-'+ (offDiv-offUl);
					} else {
						ulLeft = offDiv-offUl;
					}
					
					
					
				if(firstPos == true) {
					$('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
					if($(thumbs).length && !$(pagination).lenght) {
						wrap.css({marginBottom:$(thumbs).outerHeight()});
					}
					thumbnailVisible();
					/*I repeat this two lines because of a problem with iPhones*/
					$('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
					if($(thumbs).length && !$(pagination).lenght) {
						wrap.css({marginBottom:$(thumbs).outerHeight()});
					}
					/*...*/
				}
				firstPos = false;
				
					var left = $('li.cameracurrent', thumbs).length ? pos.left : '',
						right = $('li.cameracurrent', thumbs).length ? pos.left+($('li.cameracurrent', thumbs).outerWidth()) : '';
					if(left<$('li.cameracurrent', thumbs).outerWidth()) {
						left = 0;
					}
					if(right-ulLeft>wTh){
						if((left+wTh)<ulW){
							$('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
						} else {
							$('ul', thumbs).animate({'margin-left':'-'+($('ul', thumbs).outerWidth()-wTh)+'px'},500,thumbnailVisible);
						}
					} else if(left-ulLeft<0) {
						$('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
					} else {
						$('ul', thumbs).css({'margin-left':'auto', 'margin-right':'auto'});
						setTimeout(thumbnailVisible,100);
					}
					
			}
		}

		if($(commands).length) {
			$(commands).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>');
			if(autoAdv==true){
				$('.camera_play',camera_thumbs_wrap).hide();
				$('.camera_stop',camera_thumbs_wrap).show();
			} else {
				$('.camera_stop',camera_thumbs_wrap).hide();
				$('.camera_play',camera_thumbs_wrap).show();
			}
			
		}
			
			
		function canvasLoader() {
			rad = 0;
			var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
				barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height();

			if (loader != 'pie') {
				switch(barDirection){
					case 'leftToRight':
						$('#'+pieID).css({'right':barWidth});
						break;
					case 'rightToLeft':
						$('#'+pieID).css({'left':barWidth});
						break;
					case 'topToBottom':
						$('#'+pieID).css({'bottom':barHeight});
						break;
					case 'bottomToTop':
						$('#'+pieID).css({'top':barHeight});
						break;
				}
			} else {
				ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter); 
			}
		}
		
		
		canvasLoader();
		
		
		$('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
			$(this).css('visibility','hidden');
		});
		
		opts.onStartLoading.call(this);
		
	
	/*************************** FUNCTION nextSlide() ***************************/
	
	var isRandomSlide = opts.randomSlide,
      prevVis = [-1, -1, -1];
  
  function nextSlide(navSlide)
  { 
		elem.addClass('camerasliding');
		
		videoPresent = false;

		var vis = parseFloat($('div.cameraSlide.cameracurrent',target).index()),
        slideI,
        koRandom;

		if(navSlide > 0)
    { 
      slideI = navSlide - 1;
    }
    else if (isRandomSlide)
    {
      do
      {
        koRandom = (new Date()).getTime() % 10 + 1;
        
        while (koRandom--)
        {
          slideI = Math.floor(Math.random() * amountSlide);
        }
      }
      while (slideI == null || isNaN(slideI) || slideI >= amountSlide || (amountSlide > 1 && slideI === vis) || (amountSlide > 2 && slideI === prevVis[0]) || (amountSlide > 3 && slideI === prevVis[1]) || (amountSlide > 4 && slideI === prevVis[2]))
    }
    else if (vis == amountSlide - 1)
    { 
      slideI = 0;
    }
    else
    {
      slideI = vis + 1;
		}
		
    prevVis.unshift(vis);
    prevVis.pop();
				
		var slide = $('.cameraSlide:eq('+slideI+')',target);
		var slideNext = $('.cameraSlide:eq('+(slideI+1)+')',target).addClass('cameranext');
		if( vis != slideI+1 ) {
			slideNext.hide();
		}
		$('.cameraContent',fakeHover).fadeOut(600);
		$('.camera_caption',fakeHover).show();
		
		$('.camerarelative',slide).append($('> div ',elem).eq(slideI).find('> div.camera_effected'));

		$('.camera_target_content .cameraContent:eq('+slideI+')',wrap).append($('> div ',elem).eq(slideI).find('> div'));
		
		if(!$('.imgLoaded',slide).length){
			var imgUrl = allImg[slideI];
			var imgLoaded = new Image();
			imgLoaded.src = imgUrl; // +"?"+ new Date().getTime();
			slide.css('visibility','hidden');
			slide.prepend($(imgLoaded).attr('class','imgLoaded').css('visibility','hidden'));
			var wT, hT;
			if (!$(imgLoaded).get(0).complete || wT == '0' || hT == '0' || typeof wT === 'undefined' || wT === false || typeof hT === 'undefined' || hT === false) {
				$('.camera_loader',wrap).delay(500).fadeIn(400);
				imgLoaded.onload = function() {
					wT = imgLoaded.naturalWidth;
					hT = imgLoaded.naturalHeight;
					$(imgLoaded).attr('data-alignment',allAlign[slideI]).attr('data-portrait',allPor[slideI]);
					$(imgLoaded).attr('width',wT);
					$(imgLoaded).attr('height',hT);
					target.find('.cameraSlide_'+slideI).hide().css('visibility','visible');
					resizeImage();
					nextSlide(slideI+1);
				};
			}
		} else {
			if( allImg.length > (slideI+1) && !$('.imgLoaded',slideNext).length ){
				var imgUrl2 = allImg[(slideI+1)];
				var imgLoaded2 = new Image();
				imgLoaded2.src = imgUrl2; // +"?"+ new Date().getTime();
				slideNext.prepend($(imgLoaded2).attr('class','imgLoaded').css('visibility','hidden'));
				imgLoaded2.onload = function() {
					wT = imgLoaded2.naturalWidth;
					hT = imgLoaded2.naturalHeight;
					$(imgLoaded2).attr('data-alignment',allAlign[slideI+1]).attr('data-portrait',allPor[slideI+1]);
					$(imgLoaded2).attr('width',wT);
					$(imgLoaded2).attr('height',hT);
					resizeImage();
				};
			}
			opts.onLoaded.call(this);
			if($('.camera_loader',wrap).is(':visible')){
				$('.camera_loader',wrap).fadeOut(400);
			} else {
				$('.camera_loader',wrap).css({'visibility':'hidden'});
				$('.camera_loader',wrap).fadeOut(400,function(){
					$('.camera_loader',wrap).css({'visibility':'visible'});
				});
			}
			var rows = opts.rows,
				cols = opts.cols,
				couples = 1,
				difference = 0,
				dataSlideOn,
				time,
				transPeriod,
				fx,
				easing,
				randomFx = new Array('simpleFade','curtainTopLeft','curtainTopRight','curtainBottomLeft','curtainBottomRight','curtainSliceLeft','curtainSliceRight','blindCurtainTopLeft','blindCurtainTopRight','blindCurtainBottomLeft','blindCurtainBottomRight','blindCurtainSliceBottom','blindCurtainSliceTop','stampede','mosaic','mosaicReverse','mosaicRandom','mosaicSpiral','mosaicSpiralReverse','topLeftBottomRight','bottomRightTopLeft','bottomLeftTopRight','topRightBottomLeft','scrollLeft','scrollRight','scrollTop','scrollBottom','scrollHorz');
				marginLeft = 0,
				marginTop = 0,
				opacityOnGrid = 0;
				
				if(opts.opacityOnGrid==true){
					opacityOnGrid = 0;
				} else {
					opacityOnGrid = 1;
				}
 
			
			
			var dataFx = $(' > div',elem).eq(slideI).attr('data-fx');
				
			if(isMobile()&&opts.mobileFx!=''&&opts.mobileFx!='default'){
				fx = opts.mobileFx;
			} else {
				if(typeof dataFx !== 'undefined' && dataFx!== false && dataFx!== 'default'){
					fx = dataFx;
				} else {
					fx = opts.fx;
				}
			}
			
			if(fx=='random') {
				fx = shuffle(randomFx);
				fx = fx[0];
			} else {
				fx = fx;
				if(fx.indexOf(',')>0){
					fx = fx.replace(/ /g,'');
					fx = fx.split(',');
					fx = shuffle(fx);
					fx = fx[0];
				}
			}
			
			dataEasing = $(' > div',elem).eq(slideI).attr('data-easing');
			mobileEasing = $(' > div',elem).eq(slideI).attr('data-mobileEasing');

			if(isMobile()&&opts.mobileEasing!=''&&opts.mobileEasing!='default'){
				if(typeof mobileEasing !== 'undefined' && mobileEasing!== false && mobileEasing!== 'default') {
					easing = mobileEasing;
				} else {
					easing = opts.mobileEasing;
				}
			} else {
				if(typeof dataEasing !== 'undefined' && dataEasing!== false && dataEasing!== 'default') {
					easing = dataEasing;
				} else {
					easing = opts.easing;
				}
			}
	
			dataSlideOn = $(' > div',elem).eq(slideI).attr('data-slideOn');
			if(typeof dataSlideOn !== 'undefined' && dataSlideOn!== false){
				slideOn = dataSlideOn;
			} else {
				if(opts.slideOn=='random'){
					var slideOn = new Array('next','prev');
					slideOn = shuffle(slideOn);
					slideOn = slideOn[0];
				} else {
					slideOn = opts.slideOn;
				}
			}
				
			var dataTime = $(' > div',elem).eq(slideI).attr('data-time');
			if(typeof dataTime !== 'undefined' && dataTime!== false && dataTime!== ''){
				time = parseFloat(dataTime);
			} else {
				time = opts.time;
			}
				
			var dataTransPeriod = $(' > div',elem).eq(slideI).attr('data-transPeriod');
			if(typeof dataTransPeriod !== 'undefined' && dataTransPeriod!== false && dataTransPeriod!== ''){
				transPeriod = parseFloat(dataTransPeriod);
			} else {
				transPeriod = opts.transPeriod;
			}
				
			if(!$(elem).hasClass('camerastarted')){
				fx = 'simpleFade';
				slideOn = 'next';
				easing = '';
				transPeriod = 400;
				$(elem).addClass('camerastarted')
			}
	
			switch(fx){
				case 'simpleFade':
					cols = 1;
					rows = 1;
						break;
				case 'curtainTopLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainTopRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainBottomLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainBottomRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainSliceLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainSliceRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'blindCurtainTopLeft':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainTopRight':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainBottomLeft':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainBottomRight':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainSliceTop':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainSliceBottom':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'stampede':
					difference = '-'+transPeriod;
						break;
				case 'mosaic':
					difference = opts.gridDifference;
						break;
				case 'mosaicReverse':
					difference = opts.gridDifference;
						break;
				case 'mosaicRandom':
						break;
				case 'mosaicSpiral':
					difference = opts.gridDifference;
					couples = 1.7;
						break;
				case 'mosaicSpiralReverse':
					difference = opts.gridDifference;
					couples = 1.7;
						break;
				case 'topLeftBottomRight':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'bottomRightTopLeft':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'bottomLeftTopRight':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'topRightBottomLeft':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'scrollLeft':
					cols = 1;
					rows = 1;
						break;
				case 'scrollRight':
					cols = 1;
					rows = 1;
						break;
				case 'scrollTop':
					cols = 1;
					rows = 1;
						break;
				case 'scrollBottom':
					cols = 1;
					rows = 1;
						break;
				case 'scrollHorz':
					cols = 1;
					rows = 1;
						break;
			}
			
			var cycle = 0;
			var blocks = rows*cols;
			var leftScrap = w-(Math.floor(w/cols)*cols);
			var topScrap = h-(Math.floor(h/rows)*rows);
			var addLeft;
			var addTop;
			var tAppW = 0;	
			var tAppH = 0;
			var arr = new Array();
			var delay = new Array();
			var order = new Array();
			while(cycle < blocks){
				arr.push(cycle);
				delay.push(cycle);
				cameraCont.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
				var tApp = $('.cameraappended:eq('+cycle+')',target);
				if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
					selector.eq(slideI).clone().show().appendTo(tApp);
				} else {
					if(slideOn=='next'){
						selector.eq(slideI).clone().show().appendTo(tApp);
					} else {
						selector.eq(vis).clone().show().appendTo(tApp);
					}
				}

				if(cycle%cols<leftScrap){
					addLeft = 1;
				} else {
					addLeft = 0;
				}
				if(cycle%cols==0){
					tAppW = 0;
				}
				if(Math.floor(cycle/cols)<topScrap){
					addTop = 1;
				} else {
					addTop = 0;
				}
				tApp.css({
					'height': Math.floor((h/rows)+addTop+1),
					'left': tAppW,
					'top': tAppH,
					'width': Math.floor((w/cols)+addLeft+1)
				});
				$('> .cameraSlide', tApp).css({
					'height': h,
					'margin-left': '-'+tAppW+'px',
					'margin-top': '-'+tAppH+'px',
					'width': w
				});
				tAppW = tAppW+tApp.width()-1;
				if(cycle%cols==cols-1){
					tAppH = tAppH + tApp.height() - 1;
				}
				cycle++;
			}
			

			
			switch(fx){
				case 'curtainTopLeft':
						break;
				case 'curtainBottomLeft':
						break;
				case 'curtainSliceLeft':
						break;
				case 'curtainTopRight':
					arr = arr.reverse();
						break;
				case 'curtainBottomRight':
					arr = arr.reverse();
						break;
				case 'curtainSliceRight':
					arr = arr.reverse();
						break;
				case 'blindCurtainTopLeft':
						break;
				case 'blindCurtainBottomLeft':
					arr = arr.reverse();
						break;
				case 'blindCurtainSliceTop':
						break;
				case 'blindCurtainTopRight':
						break;
				case 'blindCurtainBottomRight':
					arr = arr.reverse();
						break;
				case 'blindCurtainSliceBottom':
					arr = arr.reverse();
						break;
				case 'stampede':
					arr = shuffle(arr);
						break;
				case 'mosaic':
						break;
				case 'mosaicReverse':
					arr = arr.reverse();
						break;
				case 'mosaicRandom':
					arr = shuffle(arr);
						break;
				case 'mosaicSpiral':
					var rows2 = rows/2, x, y, z, n=0;
						for (z = 0; z < rows2; z++){
							y = z;
							for (x = z; x < cols - z - 1; x++) {
								order[n++] = y * cols + x;
							}
							x = cols - z - 1;
							for (y = z; y < rows - z - 1; y++) {
								order[n++] = y * cols + x;
							}
							y = rows - z - 1;
							for (x = cols - z - 1; x > z; x--) {
								order[n++] = y * cols + x;
							}
							x = z;
							for (y = rows - z - 1; y > z; y--) {
								order[n++] = y * cols + x;
							}
						}
						
						arr = order;

						break;
				case 'mosaicSpiralReverse':
					var rows2 = rows/2, x, y, z, n=blocks-1;
						for (z = 0; z < rows2; z++){
							y = z;
							for (x = z; x < cols - z - 1; x++) {
								order[n--] = y * cols + x;
							}
							x = cols - z - 1;
							for (y = z; y < rows - z - 1; y++) {
								order[n--] = y * cols + x;
							}
							y = rows - z - 1;
							for (x = cols - z - 1; x > z; x--) {
								order[n--] = y * cols + x;
							}
							x = z;
							for (y = rows - z - 1; y > z; y--) {
								order[n--] = y * cols + x;
							}
						}

						arr = order;
						
						break;
				case 'topLeftBottomRight':
					for (var y = 0; y < rows; y++)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order;
						break;
				case 'bottomRightTopLeft':
					for (var y = 0; y < rows; y++)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order.reverse();
						break;
				case 'bottomLeftTopRight':
					for (var y = rows; y > 0; y--)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order;
						break;
				case 'topRightBottomLeft':
					for (var y = 0; y < rows; y++)
					for (var x = cols; x > 0; x--) {
						order.push(x + y);
					}
						delay = order;
						break;
			}
			
			
						
			$.each(arr, function(index, value) {

				if(value%cols<leftScrap){
					addLeft = 1;
				} else {
					addLeft = 0;
				}
				if(value%cols==0){
					tAppW = 0;
				}
				if(Math.floor(value/cols)<topScrap){
					addTop = 1;
				} else {
					addTop = 0;
				}
							
				switch(fx){
					case 'simpleFade':
						height = h;
						width = w;
						opacityOnGrid = 0;
							break;
					case 'curtainTopLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainTopRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainBottomLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainBottomRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainSliceLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1);
						if(value%2==0){
							marginTop = Math.floor((h/rows)+addTop+1)+'px';					
						} else {
							marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';					
						}
							break;
					case 'curtainSliceRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1);
						if(value%2==0){
							marginTop = Math.floor((h/rows)+addTop+1)+'px';					
						} else {
							marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';					
						}
							break;
					case 'blindCurtainTopLeft':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainTopRight':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainBottomLeft':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainBottomRight':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainSliceBottom':
						height = Math.floor((h/rows)+addTop+1),
						width = 0;
						if(value%2==0){
							marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
						} else {
							marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
						}
							break;
					case 'blindCurtainSliceTop':
						height = Math.floor((h/rows)+addTop+1),
						width = 0;
						if(value%2==0){
							marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
						} else {
							marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
						}
							break;
					case 'stampede':
						height = 0;
						width = 0;					
						marginLeft = (w*0.2)*(((index)%cols)-(cols-(Math.floor(cols/2))))+'px';					
						marginTop = (h*0.2)*((Math.floor(index/cols)+1)-(rows-(Math.floor(rows/2))))+'px';	
							break;
					case 'mosaic':
						height = 0;
						width = 0;					
							break;
					case 'mosaicReverse':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'mosaicRandom':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'mosaicSpiral':
						height = 0;
						width = 0;
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'mosaicSpiralReverse':
						height = 0;
						width = 0;
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'topLeftBottomRight':
						height = 0;
						width = 0;					
							break;
					case 'bottomRightTopLeft':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'bottomLeftTopRight':
						height = 0;
						width = 0;					
						marginLeft = 0;					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'topRightBottomLeft':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = 0;					
							break;
					case 'scrollRight':
						height = h;
						width = w;
						marginLeft = -w;					
							break;
					case 'scrollLeft':
						height = h;
						width = w;
						marginLeft = w;					
							break;
					case 'scrollTop':
						height = h;
						width = w;
						marginTop = h;					
							break;
					case 'scrollBottom':
						height = h;
						width = w;
						marginTop = -h;					
							break;
					case 'scrollHorz':
						height = h;
						width = w;
						if(vis==0 && slideI==amountSlide-1) {
							marginLeft = -w;	
						} else if(vis<slideI  || (vis==amountSlide-1 && slideI==0)) {
							marginLeft = w;	
						} else {
							marginLeft = -w;	
						}
							break;
					}
					
			
				var tApp = $('.cameraappended:eq('+value+')',target);
								
				if(typeof u !== 'undefined'){
					clearInterval(u);
					clearTimeout(setT);
					setT = setTimeout(canvasLoader,transPeriod+difference);
				}
				
				
				if($(pagination).length){
					$('.camera_pag li',wrap).removeClass('cameracurrent');
					$('.camera_pag li',wrap).eq(slideI).addClass('cameracurrent');
				}
						
				if($(thumbs).length){
					$('li', thumbs).removeClass('cameracurrent');
					$('li', thumbs).eq(slideI).addClass('cameracurrent');
					$('li', thumbs).not('.cameracurrent').animate({opacity:.34},0);
					$('li.cameracurrent', thumbs).animate({opacity:1},0);
					$('li', thumbs).hover(function(){
						$(this).stop(true,false).animate({opacity:1},150);
					},function(){
						if(!$(this).hasClass('cameracurrent')){
							$(this).stop(true,false).animate({opacity:.34},150);
						}
					});
				}
								
						
				var easedTime = parseFloat(transPeriod)+parseFloat(difference);
				
				function cameraeased() {

					$(this).addClass('cameraeased');
					if($('.cameraeased',target).length>=0){
						$(thumbs).css({visibility:'visible'});
					}
					if($('.cameraeased',target).length==blocks){
						
						thumbnailPos();
						
						$('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
							$(this).css('visibility','hidden');
						});
		
						selector.eq(slideI).show().css('z-index','999').removeClass('cameranext').addClass('cameracurrent');
						selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
						if (vis >= 0) {
							$('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
						}
						
						opts.onEndTransition.call(this);
						
						if($('> div', elem).eq(slideI).attr('data-video')!='hide' && $('.cameraContent.cameracurrent .imgFake',fakeHover).length ){
							$('.cameraContent.cameracurrent .imgFake',fakeHover).click();
						}

						
						var lMoveIn = selector.eq(slideI).find('.fadeIn').length;
						var lMoveInContent = $('.cameraContent',fakeHover).eq(slideI).find('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom').length;
						
						if (lMoveIn!=0){
							$('.cameraSlide.cameracurrent .fadeIn',fakeHover).each(function(){
								if($(this).attr('data-easing')!=''){
									var easeMove = $(this).attr('data-easing');
								} else {
									var easeMove = easing;
								}
								var t = $(this);
								if(typeof t.attr('data-outerWidth') === 'undefined' || t.attr('data-outerWidth') === false || t.attr('data-outerWidth') === '') {
									var wMoveIn = t.outerWidth();
									t.attr('data-outerWidth',wMoveIn);
								} else {
									var wMoveIn = t.attr('data-outerWidth');
								}
								if(typeof t.attr('data-outerHeight') === 'undefined' || t.attr('data-outerHeight') === false || t.attr('data-outerHeight') === '') {
									var hMoveIn = t.outerHeight();
									t.attr('data-outerHeight',hMoveIn);
								} else {
									var hMoveIn = t.attr('data-outerHeight');
								}
								//t.css('width',wMoveIn);
								var pos = t.position();
								var left = pos.left;
								var top = pos.top;
								var tClass = t.attr('class');
								var ind = t.index();
								var hRel = t.parents('.camerarelative').outerHeight();
								var wRel = t.parents('.camerarelative').outerWidth();
								if(tClass.indexOf("fadeIn") != -1) {
									t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveIn)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveIn)*0.15,easeMove);
								} else {
									t.css('visibility','visible');
								}
							});
						}

						$('.cameraContent.cameracurrent',fakeHover).show();
						if (lMoveInContent!=0){
							
							$('.cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom',fakeHover).each(function(){
								if($(this).attr('data-easing')!=''){
									var easeMove = $(this).attr('data-easing');
								} else {
									var easeMove = easing;
								}
								var t = $(this);
								var pos = t.position();
								var left = pos.left;
								var top = pos.top;
								var tClass = t.attr('class');
								var ind = t.index();
								var thisH = t.outerHeight();
								if(tClass.indexOf("moveFromLeft") != -1) {
									t.css({'left':'-'+(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("moveFromRight") != -1) {
									t.css({'left':w+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("moveFromTop") != -1) {
									t.css({'top':'-'+h+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove,function(){
										t.css({top:'auto',bottom:0});
									});
								} else if(tClass.indexOf("moveFromBottom") != -1) {
									t.css({'top':h+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromLeft") != -1) {
									t.animate({opacity:0},0).css({'left':'-'+(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromRight") != -1) {
									t.animate({opacity:0},0).css({'left':(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromTop") != -1) {
									t.animate({opacity:0},0).css({'top':'-'+(h)+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top,opacity:1},(time/lMoveInContent)*0.15,easeMove,function(){
										t.css({top:'auto',bottom:0});
									});
								} else if(tClass.indexOf("fadeFromBottom") != -1) {
									t.animate({opacity:0},0).css({'bottom':'-'+thisH+'px'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'bottom':'0',opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeIn") != -1) {
									t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else {
									t.css('visibility','visible');
								}
							});
						}

						
						$('.cameraappended',target).remove();
						elem.removeClass('camerasliding');	
							selector.eq(vis).hide();
							var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
								barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height(),
								radSum;
							if (loader != 'pie') {
								radSum = 0.05;
							} else {
								radSum = 0.005;
							}
							$('#'+pieID).animate({opacity:opts.loaderOpacity},200);
							u = setInterval(
								function(){
									if(elem.hasClass('stopped')){
										clearInterval(u);
									}

									if(rad <= 1 && !elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')){
										rad = +(rad+radSum).toFixed(5);
									}
									if(rad > 1) {
										if(!elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')) {
											clearInterval(u);
											imgFake();


											$('#'+pieID).animate({opacity:0},200,function(){
												clearTimeout(setT);
												//setT = setTimeout(canvasLoader, easedTime);
												canvasLoader();
												nextSlide();
												opts.onStartLoading.call(this);
											});

										}
									}

									progressBarUpdater(radSum, time, barWidth, barHeight);

								},time*radSum
							);
						}

				}


				
				if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
					opts.onStartTransition.call(this);
					easedTime = 0;
					tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
							'display' : 'block',
							'height': height,
							'margin-left': marginLeft,
							'margin-top': marginTop,
							'width': width
						}).animate({
							'height': Math.floor((h/rows)+addTop+1),
							'margin-top' : 0,
							'margin-left' : 0,
							'width' : Math.floor((w/cols)+addLeft+1)
						},(transPeriod-difference),easing,cameraeased);
					selector.eq(vis).delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).animate({
							'margin-left': marginLeft*(-1),
							'margin-top': marginTop*(-1)
						},(transPeriod-difference),easing,function(){
							$(this).css({'margin-top' : 0,'margin-left' : 0});
						});
				} else {
					opts.onStartTransition.call(this);
					easedTime = parseFloat(transPeriod)+parseFloat(difference);
					if(slideOn=='next'){
						tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
								'display' : 'block',
								'height': height,
								'margin-left': marginLeft,
								'margin-top': marginTop,
								'width': width,
								'opacity' : opacityOnGrid
							}).animate({
								'height': Math.floor((h/rows)+addTop+1),
								'margin-top' : 0,
								'margin-left' : 0,
								'opacity' : 1,
								'width' : Math.floor((w/cols)+addLeft+1)
							},(transPeriod-difference),easing,cameraeased);
					} else {
						selector.eq(slideI).show().css('z-index','999').addClass('cameracurrent');
						selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
						tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
								'display' : 'block',
								'height': Math.floor((h/rows)+addTop+1),
								'margin-top' : 0,
								'margin-left' : 0,
								'opacity' : 1,
								'width' : Math.floor((w/cols)+addLeft+1)
							}).animate({
								'height': height,
								'margin-left': marginLeft,
								'margin-top': marginTop,
								'width': width,
								'opacity' : opacityOnGrid
							},(transPeriod-difference),easing,cameraeased);
					}
				}
			});
		}
	}

  nextSlide();


				if($(prevNav).length){
					$(prevNav).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum!=0){
								nextSlide(idNum);
							} else {
								nextSlide(amountSlide);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}
			
				if($(nextNav).length){
					$(nextNav).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index()); 
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum==amountSlide-1){
								nextSlide(1);
							} else {
								nextSlide(idNum+2);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}


				if(isMobile()){
					fakeHover.on('swipeleft',function(event){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index()); 
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum==amountSlide-1){
								nextSlide(1);
							} else {
								nextSlide(idNum+2);
						   }
						   opts.onStartLoading.call(this);
						}
					});
					fakeHover.on('swiperight',function(event){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum!=0){
								nextSlide(idNum);
							} else {
								nextSlide(amountSlide);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}

				if($(pagination).length){
					$('.camera_pag li',wrap).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($(this).index());
							var curNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							if(idNum!=curNum) {
								clearInterval(u);
								imgFake();
								$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
								canvasLoader();
								nextSlide(idNum+1);
								opts.onStartLoading.call(this);
							}
						}
					});
				}

				if($(thumbs).length) {

					$('.pix_thumb img',thumbs).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($(this).parents('li').index());
							var curNum = parseFloat($('.cameracurrent',target).index());
							if(idNum!=curNum) {
								clearInterval(u);
								imgFake();
								$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
								$('.pix_thumb',thumbs).removeClass('cameracurrent');
								$(this).parents('li').addClass('cameracurrent');
								canvasLoader();
								nextSlide(idNum+1);
								thumbnailPos();
								opts.onStartLoading.call(this);
							}
						}
					});

					$('.camera_thumbs_cont .camera_prevThumbs',camera_thumbs_wrap).hover(function(){
						$(this).stop(true,false).animate({opacity:1},250);
					},function(){
						$(this).stop(true,false).animate({opacity:.7},250);
					});
					$('.camera_prevThumbs',camera_thumbs_wrap).click(function(){
						var sum = 0,
							wTh = $(thumbs).outerWidth(),
							offUl = $('ul', thumbs).offset().left,
							offDiv = $('> div', thumbs).offset().left,
							ulLeft = offDiv-offUl;
							$('.camera_visThumb',thumbs).each(function(){
								var tW = $(this).outerWidth();
								sum = sum+tW;
							});
							if(ulLeft-sum>0){
								$('ul', thumbs).animate({'margin-left':'-'+(ulLeft-sum)+'px'},500,thumbnailVisible);
							} else {
								$('ul', thumbs).animate({'margin-left':0},500,thumbnailVisible);
							}
					});

					$('.camera_thumbs_cont .camera_nextThumbs',camera_thumbs_wrap).hover(function(){
						$(this).stop(true,false).animate({opacity:1},250);
					},function(){
						$(this).stop(true,false).animate({opacity:.7},250);
					});
					$('.camera_nextThumbs',camera_thumbs_wrap).click(function(){
						var sum = 0,
							wTh = $(thumbs).outerWidth(),
							ulW = $('ul', thumbs).outerWidth(),
							offUl = $('ul', thumbs).offset().left,
							offDiv = $('> div', thumbs).offset().left,
							ulLeft = offDiv-offUl;
							$('.camera_visThumb',thumbs).each(function(){
								var tW = $(this).outerWidth();
								sum = sum+tW;
							});
							if(ulLeft+sum+sum<ulW){
								$('ul', thumbs).animate({'margin-left':'-'+(ulLeft+sum)+'px'},500,thumbnailVisible);
							} else {
								$('ul', thumbs).animate({'margin-left':'-'+(ulW-wTh)+'px'},500,thumbnailVisible);
							}
					});

				}

    function progressBarUpdater(radSum, time, barWidth, barHeight)
    {
        if (loader != 'pie') {

            var cssStyle;

            switch(barDirection){
                case 'leftToRight':
                    cssStyle = {'right':barWidth-(barWidth*rad)}; break;
                case 'rightToLeft':
                    cssStyle = {'left':barWidth-(barWidth*rad)}; break;
                case 'topToBottom':
                    cssStyle = {'bottom':barHeight-(barHeight*rad)}; break;
                case 'bottomToTop':
                    cssStyle = {'bottom':barHeight-(barHeight*rad)}; break;
            }
            if(rad > 1) {
                $('#'+pieID).css(cssStyle);
            } else {
                $('#'+pieID).animate(cssStyle,(time*radSum),'linear');
            }

        } else {
            radNew = rad;
            ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter);
            ctx.globalCompositeOperation = 'destination-over';
            ctx.beginPath();
            ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2,false);
            ctx.lineWidth = opts.loaderStroke;
            ctx.strokeStyle = opts.loaderBgColor;
            ctx.stroke();
            ctx.closePath();
            ctx.globalCompositeOperation = 'source-over';
            ctx.beginPath();
            ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2*radNew,false);
            ctx.lineWidth = opts.loaderStroke-(opts.loaderPadding*2);
            ctx.strokeStyle = opts.loaderColor;
            ctx.stroke();
            ctx.closePath();
        }
    }

  function dispose()
  {
    if (setPause) clearTimeout(setPause);
    if (setT) clearTimeout(setT);
    if (u) clearInterval(u);

    $(window).off('load resize pageshow',placeThumbsOnWindowResize);
    $(window).off('resize pageshow', onWindowResize);

    wrap.stop(true, false);
    wrap.find('*').filter(':animated').stop(true, false);
    wrap.empty();

    wrap = null;
    opts = null;

    WA.Gadgets.GadgetDeleted.removeHandler(onGadgetDeleted);
  }

  function onGadgetDeleted(sender, args)
  {
    if (args && args.componentId == opts.componentId)
    {
      dispose();
    }
  }

  WA.Gadgets.GadgetDeleted.addHandler(onGadgetDeleted);
}

})(jQuery);

;(function($){$.fn.cameraStop = function() {
	var wrap = $(this),
		elem = $('.camera_src',wrap),
		pieID = 'pie_'+wrap.index();
	elem.addClass('stopped');
	if($('.camera_showcommands').length) {
		var camera_thumbs_wrap = $('.camera_thumbs_wrap',wrap);
	} else {
		var camera_thumbs_wrap = wrap;
	}
}
})(jQuery);

;(function($){$.fn.cameraPause = function() {
	var wrap = $(this);
	var elem = $('.camera_src',wrap);
	elem.addClass('paused');
}
})(jQuery);

;(function($){$.fn.cameraResume = function() {
	var wrap = $(this);
	var elem = $('.camera_src',wrap);
	if(typeof autoAdv === 'undefined' || autoAdv!==true){
		elem.removeClass('paused');
	}
}
})(jQuery);

/*compiled*/
/*!
	Colorbox v1.4.29 - 2013-09-10
	jQuery lightbox and modal window plugin
	(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function ($, document, window) {
	var
	// Default settings object.
	// See http://jacklmoore.com/colorbox for details.
	defaults = {
		transition: "elastic",
		speed: 300,
		fadeOut: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		inline: false,
		html: false,
		iframe: false,
		fastIframe: true,
		photo: false,
		href: false,
		title: false,
		rel: false,
		opacity: 0.9,
		preloading: true,
		className: false,

		// alternate image paths for high-res displays
		retinaImage: false,
		retinaUrl: false,
		retinaSuffix: '@2x.$1',

		// internationalization
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",

		open: false,
		returnFocus: true,
		trapFocus: true,
		reposition: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,

		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,

		overlayClose: true,
		escKey: true,
		arrowKey: true,
		top: false,
		bottom: false,
		left: false,
		right: false,
		fixed: false,
		data: undefined,
		closeButton: true
	},
	
	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	boxElement = prefix + 'Element',
	
	// Events
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,
	$events = $('<a/>'),
	
	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	element,
	index,
	photo,
	open,
	active,
	closing,
	loadingTimer,
	publicMethod,
	div = "div",
	className,
	requests = 0,
	previousCSS = {},
	init;

	// ****************
	// HELPER FUNCTIONS
	// ****************
	
	// Convenience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);

		if (id) {
			element.id = prefix + id;
		}

		if (css) {
			element.style.cssText = css;
		}

		return $(element);
	}
	
	// Get the window height using innerHeight when available to avoid an issue with iOS
	// http://bugs.jquery.com/ticket/6724
	function winheight() {
		return window.innerHeight ? window.innerHeight : $(window).height();
	}

	// Determine the next and previous members in a group.
	function getIndex(increment) {
		var
		max = $related.length,
		newIndex = (index + increment) % max;
		
		return (newIndex < 0) ? max + newIndex : newIndex;
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
	}
	
	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by the regex.
	function isImage(settings, url) {
		return settings.photo || settings.photoRegex.test(url);
	}

	function retinaUrl(settings, url) {
		return settings.retinaUrl && window.devicePixelRatio > 1 ? url.replace(settings.photoRegex, settings.retinaSuffix) : url;
	}

	function trapFocus(e) {
		if ('contains' in $box[0] && !$box[0].contains(e.target)) {
			e.stopPropagation();
			$box.focus();
		}
	}

	// Assigns function results to their respective properties
	function makeSettings() {
		var i,
			data = $.data(element, colorbox);
		
		if (data == null) {
			settings = $.extend({}, defaults);
			if (console && console.log) {
				console.log('Error: cboxElement missing settings object');
			}
		} else {
			settings = $.extend({}, data);
		}
		
		for (i in settings) {
			if ($.isFunction(settings[i]) && i.slice(0, 2) !== 'on') { // checks to make sure the function isn't one of the callbacks, they will be handled at the appropriate time.
				settings[i] = settings[i].call(element);
			}
		}
		
		settings.rel = settings.rel || element.rel || $(element).data('rel') || 'nofollow';
		settings.href = settings.href || $(element).attr('href');
		settings.title = settings.title || element.title;
		
		if (typeof settings.href === "string") {
			settings.href = $.trim(settings.href);
		}
	}

	function trigger(event, callback) {
		// for external use
		$(document).trigger(event);

		// for internal use
		$events.trigger(event);

		if ($.isFunction(callback)) {
			callback.call(element);
		}
	}


	var slideshow = (function(){
		var active,
			className = prefix + "Slideshow_",
			click = "click." + prefix,
			timeOut;

		function clear () {
			clearTimeout(timeOut);
		}

		function set() {
			if (settings.loop || $related[index + 1]) {
				clear();
				timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
			}
		}

		function start() {
			$slideshow
				.html(settings.slideshowStop)
				.unbind(click)
				.one(click, stop);

			$events
				.bind(event_complete, set)
				.bind(event_load, clear);

			$box.removeClass(className + "off").addClass(className + "on");
		}

		function stop() {
			clear();
			
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);

			$slideshow
				.html(settings.slideshowStart)
				.unbind(click)
				.one(click, function () {
					publicMethod.next();
					start();
				});

			$box.removeClass(className + "on").addClass(className + "off");
		}

		function reset() {
			active = false;
			$slideshow.hide();
			clear();
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);
			$box.removeClass(className + "off " + className + "on");
		}

		return function(){
			if (active) {
				if (!settings.slideshow) {
					$events.unbind(event_cleanup, reset);
					reset();
				}
			} else {
				if (settings.slideshow && $related[1]) {
					active = true;
					$events.one(event_cleanup, reset);
					if (settings.slideshowAuto) {
						start();
					} else {
						stop();
					}
					$slideshow.show();
				}
			}
		};

	}());


	function launch(target) {
		if (!closing) {
			
			element = target;
			
			makeSettings();
			
			$related = $(element);
			
			index = 0;
			
			if (settings.rel !== 'nofollow') {
				$related = $('.' + boxElement).filter(function () {
					var data = $.data(this, colorbox),
						relRelated;

					if (data) {
						relRelated =  $(this).data('rel') || data.rel || this.rel;
					}
					
					return (relRelated === settings.rel);
				});
				index = $related.index(element);
				
				// Check direct calls to Colorbox.
				if (index === -1) {
					$related = $related.add(element);
					index = $related.length - 1;
				}
			}
			
			$overlay.css({
				opacity: parseFloat(settings.opacity),
				cursor: settings.overlayClose ? "pointer" : "auto",
				visibility: 'visible'
			}).show();
			

			if (className) {
				$box.add($overlay).removeClass(className);
			}
			if (settings.className) {
				$box.add($overlay).addClass(settings.className);
			}
			className = settings.className;

			if (settings.closeButton) {
				$close.html(settings.close).appendTo($content);
			} else {
				$close.appendTo('<div/>');
			}

			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
				
				// Show colorbox so the sizes can be calculated in older versions of jQuery
				$box.css({visibility:'hidden', display:'block'});
				
				$loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden');
				$content.css({width:'', height:''}).append($loaded);

				// Cache values needed for size calculations
				interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
				interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
				loadedHeight = $loaded.outerHeight(true);
				loadedWidth = $loaded.outerWidth(true);

				// Opens inital empty Colorbox prior to content being loaded.
				settings.w = setSize(settings.initialWidth, 'x');
				settings.h = setSize(settings.initialHeight, 'y');
				$loaded.css({width:'', height:settings.h});
				publicMethod.position();

				trigger(event_open, settings.onOpen);
				
				$groupControls.add($title).hide();

				$box.focus();
				
				if (settings.trapFocus) {
					// Confine focus to the modal
					// Uses event capturing that is not supported in IE8-
					if (document.addEventListener) {

						document.addEventListener('focus', trapFocus, true);
						
						$events.one(event_closed, function () {
							document.removeEventListener('focus', trapFocus, true);
						});
					}
				}

				// Return focus on closing
				if (settings.returnFocus) {
					$events.one(event_closed, function () {
						$(element).focus();
					});
				}
			}
			load();
		}
	}

	// Colorbox's markup needs to be added to the DOM prior to being called
	// so that the browser will go ahead and load the CSS background images.
	function appendHTML() {
		if (!$box && document.body) {
			init = false;
			$window = $(window);
			$box = $tag(div).attr({
				id: colorbox,
				'class': $.support.opacity === false ? prefix + 'IE' : '', // class for optional IE8 & lower targeted CSS.
				role: 'dialog',
				tabindex: '-1'
			}).hide();
			$overlay = $tag(div, "Overlay").hide();
			$loadingOverlay = $([$tag(div, "LoadingOverlay")[0],$tag(div, "LoadingGraphic")[0]]);
			$wrap = $tag(div, "Wrapper");
			$content = $tag(div, "Content").append(
				$title = $tag(div, "Title"),
				$current = $tag(div, "Current"),
				$prev = $('<button type="button"/>').attr({id:prefix+'Previous'}),
				$next = $('<button type="button"/>').attr({id:prefix+'Next'}),
				$slideshow = $tag('button', "Slideshow"),
				$loadingOverlay
			);

			$close = $('<button type="button"/>').attr({id:prefix+'Close'});
			
			$wrap.append( // The 3x3 Grid that makes up Colorbox
				$tag(div).append(
					$tag(div, "TopLeft"),
					$topBorder = $tag(div, "TopCenter"),
					$tag(div, "TopRight")
				),
				$tag(div, false, 'clear:left').append(
					$leftBorder = $tag(div, "MiddleLeft"),
					$content,
					$rightBorder = $tag(div, "MiddleRight")
				),
				$tag(div, false, 'clear:left').append(
					$tag(div, "BottomLeft"),
					$bottomBorder = $tag(div, "BottomCenter"),
					$tag(div, "BottomRight")
				)
			).find('div div').css({'float': 'left'});
			
			$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none');
			
			$groupControls = $next.add($prev).add($current).add($slideshow);

			$(document.body).append($overlay, $box.append($wrap, $loadingBay));
		}
	}

	// Add Colorbox's event bindings
	function addBindings() {
		function clickHandler(e) {
			// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
			// See: http://jacklmoore.com/notes/click-events/
			if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				launch(this);
			}
		}

		if ($box) {
			if (!init) {
				init = true;

				// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
				$next.click(function () {
					publicMethod.next();
				});
				$prev.click(function () {
					publicMethod.prev();
				});
				$close.click(function () {
					publicMethod.close();
				});
				$overlay.click(function () {
					if (settings.overlayClose) {
						publicMethod.close();
					}
				});
				
				// Key Bindings
				$(document).bind('keydown.' + prefix, function (e) {
					var key = e.keyCode;
					if (open && settings.escKey && key === 27) {
						e.preventDefault();
						publicMethod.close();
					}
					if (open && settings.arrowKey && $related[1] && !e.altKey) {
						if (key === 37) {
							e.preventDefault();
							$prev.click();
						} else if (key === 39) {
							e.preventDefault();
							$next.click();
						}
					}
				});

				if ($.isFunction($.fn.on)) {
					// For jQuery 1.7+
					$(document).on('click.'+prefix, '.'+boxElement, clickHandler);
				} else {
					// For jQuery 1.3.x -> 1.6.x
					// This code is never reached in jQuery 1.9, so do not contact me about 'live' being removed.
					// This is not here for jQuery 1.9, it's here for legacy users.
					$('.'+boxElement).live('click.'+prefix, clickHandler);
				}
			}
			return true;
		}
		return false;
	}

	// Don't do anything if Colorbox already exists.
	if ($.colorbox) {
		return;
	}

	// Append the HTML when the DOM loads
	$(appendHTML);


	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.colorbox.close();
	// Usage from within an iframe: parent.jQuery.colorbox.close();
	// ****************
	
	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var $this = this;
		
		options = options || {};
		
		appendHTML();

		if (addBindings()) {
			if ($.isFunction($this)) { // assume a call to $.colorbox
				$this = $('<a/>');
				options.open = true;
			} else if (!$this[0]) { // colorbox being applied to empty collection
				return $this;
			}
			
			if (callback) {
				options.onComplete = callback;
			}
			
			$this.each(function () {
				$.data(this, colorbox, $.extend({}, $.data(this, colorbox) || defaults, options));
			}).addClass(boxElement);
			
			if (($.isFunction(options.open) && options.open.call($this)) || options.open) {
				launch($this[0]);
			}
		}
		
		return $this;
	};

	publicMethod.position = function (speed, loadedCallback) {
		var
		css,
		top = 0,
		left = 0,
		offset = $box.offset(),
		scrollTop,
		scrollLeft;
		
		$window.unbind('resize.' + prefix);

		// remove the modal so that it doesn't influence the document width/height
		$box.css({top: -9e4, left: -9e4});

		scrollTop = $window.scrollTop();
		scrollLeft = $window.scrollLeft();

		if (settings.fixed) {
			offset.top -= scrollTop;
			offset.left -= scrollLeft;
			$box.css({position: 'fixed'});
		} else {
			top = scrollTop;
			left = scrollLeft;
			$box.css({position: 'absolute'});
		}

		// keeps the top and left positions within the browser's viewport.
		if (settings.right !== false) {
			left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.right, 'x'), 0);
		} else if (settings.left !== false) {
			left += setSize(settings.left, 'x');
		} else {
			left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
		}
		
		if (settings.bottom !== false) {
			top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.bottom, 'y'), 0);
		} else if (settings.top !== false) {
			top += setSize(settings.top, 'y');
		} else {
			top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
		}

		$box.css({top: offset.top, left: offset.left, visibility:'visible'});
		
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions() {
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt($box[0].style.width,10) - interfaceWidth)+'px';
			$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt($box[0].style.height,10) - interfaceHeight)+'px';
		}

		css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};

		// setting the speed to 0 if the content hasn't changed size or position
		if (speed) {
			var tempSpeed = 0;
			$.each(css, function(i){
				if (css[i] !== previousCSS[i]) {
					tempSpeed = speed;
					return;
				}
			});
			speed = tempSpeed;
		}

		previousCSS = css;

		if (!speed) {
			$box.css(css);
		}

		$box.dequeue().animate(css, {
			duration: speed || 0,
			complete: function () {
				modalDimensions();
				
				active = false;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
				
				if (settings.reposition) {
					setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
						$window.bind('resize.' + prefix, publicMethod.position);
					}, 1);
				}

				if (loadedCallback) {
					loadedCallback();
				}
			},
			step: modalDimensions
		});
	};

	publicMethod.resize = function (options) {
		var scrolltop;
		
		if (open) {
			options = options || {};
			
			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}

			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}

			$loaded.css({width: settings.w});
			
			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}

			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}

			if (!options.innerHeight && !options.height) {
				scrolltop = $loaded.scrollTop();
				$loaded.css({height: "auto"});
				settings.h = $loaded.height();
			}

			$loaded.css({height: settings.h});

			if(scrolltop) {
				$loaded.scrollTop(scrolltop);
			}
			
			publicMethod.position(settings.transition === "none" ? 0 : settings.speed);
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}
		
		var callback, speed = settings.transition === "none" ? 0 : settings.speed;

		$loaded.empty().remove(); // Using empty first may prevent some IE7 issues.

		$loaded = $tag(div, 'LoadedContent').append(object);
		
		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.scrolling ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$loadingBay.hide();
		
		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		
		$(photo).css({'float': 'none'});

		callback = function () {
			var total = $related.length,
				iframe,
				frameBorder = 'frameBorder',
				allowTransparency = 'allowTransparency',
				complete;
			
			if (!open) {
				return;
			}
			
			function removeFilter() { // Needed for IE7 & IE8 in versions of jQuery prior to 1.7.2
				if ($.support.opacity === false) {
					$box[0].style.removeAttribute('filter');
				}
			}
			
			complete = function () {
				clearTimeout(loadingTimer);
				$loadingOverlay.hide();
				trigger(event_complete, settings.onComplete);
			};

			
			$title.html(settings.title).add($loaded).show();
			
			if (total > 1) { // handle grouping
				if (typeof settings.current === "string") {
					$current.html(settings.current.replace('{current}', index + 1).replace('{total}', total)).show();
				}
				
				$next[(settings.loop || index < total - 1) ? "show" : "hide"]().html(settings.next);
				$prev[(settings.loop || index) ? "show" : "hide"]().html(settings.previous);
				
				slideshow();
				
				// Preloads images within a rel group
				if (settings.preloading) {
					$.each([getIndex(-1), getIndex(1)], function(){
						var src,
							img,
							i = $related[this],
							data = $.data(i, colorbox);

						if (data && data.href) {
							src = data.href;
							if ($.isFunction(src)) {
								src = src.call(i);
							}
						} else {
							src = $(i).attr('href');
						}

						if (src && isImage(data, src)) {
							src = retinaUrl(data, src);
							img = document.createElement('img');
							img.src = src;
						}
					});
				}
			} else {
				$groupControls.hide();
			}
			
			if (settings.iframe) {
				iframe = $tag('iframe')[0];
				
				if (frameBorder in iframe) {
					iframe[frameBorder] = 0;
				}
				
				if (allowTransparency in iframe) {
					iframe[allowTransparency] = "true";
				}

				if (!settings.scrolling) {
					iframe.scrolling = "no";
				}
				
				$(iframe)
					.attr({
						src: settings.href,
						name: (new Date()).getTime(), // give the iframe a unique name to prevent caching
						'class': prefix + 'Iframe',
						allowFullScreen : true, // allow HTML5 video to go fullscreen
						webkitAllowFullScreen : true,
						mozallowfullscreen : true
					})
					.one('load', complete)
					.appendTo($loaded);
				
				$events.one(event_purge, function () {
					iframe.src = "//about:blank";
				});

				if (settings.fastIframe) {
					$(iframe).trigger('load');
				}
			} else {
				complete();
			}
			
			if (settings.transition === 'fade') {
				$box.fadeTo(speed, 1, removeFilter);
			} else {
				removeFilter();
			}
		};
		
		if (settings.transition === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	function load () {
		var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;
		
		active = true;
		
		photo = false;
		
		element = $related[index];
		
		makeSettings();
		
		trigger(event_purge);
		
		trigger(event_load, settings.onLoad);
		
		settings.h = settings.height ?
				setSize(settings.height, 'y') - loadedHeight - interfaceHeight :
				settings.innerHeight && setSize(settings.innerHeight, 'y');
		
		settings.w = settings.width ?
				setSize(settings.width, 'x') - loadedWidth - interfaceWidth :
				settings.innerWidth && setSize(settings.innerWidth, 'x');
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.maxWidth) {
			settings.mw = setSize(settings.maxWidth, 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.maxHeight) {
			settings.mh = setSize(settings.maxHeight, 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.href;
		
		loadingTimer = setTimeout(function () {
			$loadingOverlay.show();
		}, 100);
		
		if (settings.inline) {
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when Colorbox closes or loads new content.
			$inline = $tag(div).hide().insertBefore($(href)[0]);

			$events.one(event_purge, function () {
				$inline.replaceWith($loaded.children());
			});

			prep($(href));
		} else if (settings.iframe) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.html) {
			prep(settings.html);
		} else if (isImage(settings, href)) {

			href = retinaUrl(settings, href);

			photo = document.createElement('img');

			$(photo)
			.addClass(prefix + 'Photo')
			.bind('error',function () {
				settings.title = false;
				prep($tag(div, 'Error').html(settings.imgError));
			})
			.one('load', function () {
				var percent;

				if (request !== requests) {
					return;
				}

				photo.alt = $(element).attr('alt') || $(element).attr('data-alt') || '';

				if (settings.retinaImage && window.devicePixelRatio > 1) {
					photo.height = photo.height / window.devicePixelRatio;
					photo.width = photo.width / window.devicePixelRatio;
				}

				if (settings.scalePhotos) {
					setResize = function () {
						photo.height -= photo.height * percent;
						photo.width -= photo.width * percent;
					};
					if (settings.mw && photo.width > settings.mw) {
						percent = (photo.width - settings.mw) / photo.width;
						setResize();
					}
					if (settings.mh && photo.height > settings.mh) {
						percent = (photo.height - settings.mh) / photo.height;
						setResize();
					}
				}
				
				if (settings.h) {
					photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
				}
				
				if ($related[1] && (settings.loop || $related[index + 1])) {
					photo.style.cursor = 'pointer';
					photo.onclick = function () {
						publicMethod.next();
					};
				}

				photo.style.width = photo.width + 'px';
				photo.style.height = photo.height + 'px';

				setTimeout(function () { // A pause because Chrome will sometimes report a 0 by 0 size otherwise.
					prep(photo);
				}, 1);
			});
			
			setTimeout(function () { // A pause because Opera 10.6+ will sometimes not run the onload function otherwise.
				photo.src = href;
			}, 1);
		} else if (href) {
			$loadingBay.load(href, settings.data, function (data, status) {
				if (request === requests) {
					prep(status === 'error' ? $tag(div, 'Error').html(settings.xhrError) : $(this).contents());
				}
			});
		}
	}
		
	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (settings.loop || $related[index + 1])) {
			index = getIndex(1);
			launch($related[index]);
		}
	};
	
	publicMethod.prev = function () {
		if (!active && $related[1] && (settings.loop || index)) {
			index = getIndex(-1);
			launch($related[index]);
		}
	};

	// Note: to use this within an iframe use the following format: parent.jQuery.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {
			
			closing = true;
			
			open = false;
			
			trigger(event_cleanup, settings.onCleanup);
			
			$window.unbind('.' + prefix);
			
			$overlay.fadeTo(settings.fadeOut || 0, 0);
			
			$box.stop().fadeTo(settings.fadeOut || 0, 0, function () {
			
				$box.add($overlay).css({'opacity': 1, cursor: 'auto'}).hide();
				
				trigger(event_purge);
				
				$loaded.empty().remove(); // Using empty first may prevent some IE7 issues.
				
				setTimeout(function () {
					closing = false;
					trigger(event_closed, settings.onClosed);
				}, 1);
			});
		}
	};

	// Removes changes Colorbox made to the document, but does not remove the plugin.
	publicMethod.remove = function () {
		if (!$box) { return; }

		$box.stop();
		$.colorbox.close();
		$box.stop().remove();
		$overlay.remove();
		closing = false;
		$box = null;
		$('.' + boxElement)
			.removeData(colorbox)
			.removeClass(boxElement);

		$(document).unbind('click.'+prefix);
	};

	// A method for fetching the current element Colorbox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(element);
	};

	publicMethod.settings = defaults;

}(jQuery, document, window));


/*compiled*/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
 
 var memberProfileHelper;(function(){if(window.memberProfileHelper==null){window.memberProfileHelper=new Object();}memberProfileHelper.setFilter=function(){var shadingFieldset=document.getElementById("shadingFieldset");if(shadingFieldset==null){return;}if(document.all){shadingFieldset.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity=40)";}else{shadingFieldset.style.MozOpacity=0.4;}};memberProfileHelper.disableAllInputs=function(){var shadingFieldset=document.getElementById("shadingFieldset");var i;if(shadingFieldset==null){return;}var inputs=shadingFieldset.getElementsByTagName("INPUT");if(inputs.length>0){for(i=0;i<inputs.length;i++){inputs[i].disabled="true";}}inputs=shadingFieldset.getElementsByTagName("TEXTAREA");if(inputs.length>0){for(i=0;i<inputs.length;i++){inputs[i].disabled="true";}}inputs=shadingFieldset.getElementsByTagName("SELECT");if(inputs.length>0){for(i=0;i<inputs.length;i++){inputs[i].disabled="true";}}};memberProfileHelper.checkMemberReceiveRemindersFieldChanged=function(sender,args){var receiveRemindersCheckbox=document.getElementById(receiveRemindersCheckBoxId);var state=receiveRemindersCheckbox.checked?"checked":"nonChecked";DataChangeWatcher.changeValidatorCustom("ReceiveRemindersEnabledDisabled",state,args);};memberProfileHelper.checkMemberReceiveNewsLettersFieldChanged=function(sender,args){var receiveNewslettersCheckbox=document.getElementById(receiveNewsLettersCheckBoxId);var state=receiveNewslettersCheckbox.checked?"checked":"nonChecked";DataChangeWatcher.changeValidatorCustom("ReceiveNewsLettersEnabledDisabled",state,args);};memberProfileHelper.stopWatchDataChanging=function(){if(typeof(DataChangeWatcher)=="undefined"){return;}DataChangeWatcher.setNotChanged();DataChangeWatcher.pauseWatching();};memberProfileHelper.makeButtonWatchDataChanging=function(btnId,sourceAction,causesValidation,checkIfDataChanged,awayMessage){var btn=document.getElementById(btnId);if(!btn){return;}btn.onclick=function(){var dcw=DataChangeWatcher;if(!causesValidation){if(dcw){dcw.resumeWatching();if(checkIfDataChanged){if(!dcw.confirmIfDataChanged()){return;}}}Page_ValidationActive=false;}else{if(!checkIfDataChanged){if(dcw){dcw.pauseWatching();}}}var actionResult=sourceAction();if(causesValidation){if(Page_IsValid&&!Page_BlockSubmit){if(checkIfDataChanged){if(dcw&&!dcw.confirmIfDataChanged()){Page_BlockSubmit=true;return;}}}else{if(!checkIfDataChanged){if(dcw){dcw.resumeWatching();}}}}};memberProfileHelper.TransferToPaymentSystem=function(paymentUrl){if(paymentUrl==null||paymentUrl==""){return false;}DataChangeWatcher.pauseWatching();location.href=paymentUrl;};};memberProfileHelper.EmailChangedNotfication=function(){var hiddenEmail=document.getElementById(hiddenEmailId);var textboxEmail=document.getElementById(textboxEmailId);if(memberProfileHelper.trim(hiddenEmail.value)!=memberProfileHelper.trim(textboxEmail.value)){return confirm(this.changingEmailMessageText);}else{return true;}};memberProfileHelper.trim=function(str){return str.replace(/^\s*(.*)\s*$/,"$1");};function $(id){return document.getElementById(id);}memberProfileHelper.setTabHidden=function setTabHidden(tabModeName){var tabModeHidden=$(this.tabModeHiddenID);tabModeHidden.value=tabModeName;};memberProfileHelper.showProfile=function showProfile(){var mandatoryLink=$(this.editMandatoryFieldTopMessageID);if(mandatoryLink){mandatoryLink.style.display="block";}var profileLink=$(this.profileTabLinkID);var profileLabel=$(this.profileTabLabelID);var fieldsLink=$(this.accessTabLinkID);var fieldsLabel=$(this.accessTabLabelID);var subscriptionsLink=$(this.subscriptionsTabLinkID);var subscriptionsLabel=$(this.subscriptionsTabLabelID);profileLink.style.display="none";profileLabel.style.display="inline";subscriptionsLink.style.display="inline";subscriptionsLabel.style.display="none";if(fieldsLink){fieldsLink.style.display="inline";fieldsLabel.style.display="none";}var profileContainer=$(this.mainProfileTrID);var includeMemberDirectoryContainer=$(this.trIncludeInMemberDirectoryID);var fieldsContainer=$(this.trDetailsToShowID);var subscriptionsContainer=$(this.divEnableNotificationsID);if(profileContainer){profileContainer.style.display="block";}if(includeMemberDirectoryContainer){includeMemberDirectoryContainer.style.display="none";}if(fieldsContainer){fieldsContainer.style.display="none";}if(subscriptionsContainer){subscriptionsContainer.style.display="none";}this.setTabHidden(this.tabModeNameProfile);return false;};memberProfileHelper.showFieldSettings=function showFieldSettings(){var mandatoryLink=$(this.editMandatoryFieldTopMessageID);if(mandatoryLink){mandatoryLink.style.display="none";}var profileLink=$(this.profileTabLinkID);var profileLabel=$(this.profileTabLabelID);var fieldsLink=$(this.accessTabLinkID);var fieldsLabel=$(this.accessTabLabelID);var subscriptionsLink=$(this.subscriptionsTabLinkID);var subscriptionsLabel=$(this.subscriptionsTabLabelID);profileLink.style.display="inline";profileLabel.style.display="none";subscriptionsLink.style.display="inline";subscriptionsLabel.style.display="none";if(fieldsLink){fieldsLink.style.display="none";fieldsLabel.style.display="inline";}var profileContainer=$(this.mainProfileTrID);var includeMemberDirectoryContainer=$(this.trIncludeInMemberDirectoryID);var fieldsContainer=$(this.trDetailsToShowID);var subscriptionsContainer=$(this.divEnableNotificationsID);if(profileContainer){profileContainer.style.display="none";}if(includeMemberDirectoryContainer){includeMemberDirectoryContainer.style.display="block";}if(fieldsContainer){fieldsContainer.style.display="block";}if(subscriptionsContainer){subscriptionsContainer.style.display="none";}this.setTabHidden(this.tabModeNameAccess);return false;};memberProfileHelper.showSubscriptions=function showSubscriptions(){var mandatoryLink=$(this.editMandatoryFieldTopMessageID);if(mandatoryLink){mandatoryLink.style.display="none";}var profileLink=$(this.profileTabLinkID);var profileLabel=$(this.profileTabLabelID);var fieldsLink=$(this.accessTabLinkID);var fieldsLabel=$(this.accessTabLabelID);var subscriptionsLink=$(this.subscriptionsTabLinkID);var subscriptionsLabel=$(this.subscriptionsTabLabelID);profileLink.style.display="inline";profileLabel.style.display="none";subscriptionsLink.style.display="none";subscriptionsLabel.style.display="inline";if(fieldsLink){fieldsLink.style.display="inline";fieldsLabel.style.display="none";}var profileContainer=$(this.mainProfileTrID);var includeMemberDirectoryContainer=$(this.trIncludeInMemberDirectoryID);var fieldsContainer=$(this.trDetailsToShowID);var subscriptionsContainer=$(this.divEnableNotificationsID);if(profileContainer){profileContainer.style.display="none";}if(includeMemberDirectoryContainer){includeMemberDirectoryContainer.style.display="none";}if(fieldsContainer){fieldsContainer.style.display="none";}if(subscriptionsContainer){subscriptionsContainer.style.display="block";}this.setTabHidden(this.tabModeNameSubscriptions);return false;};memberProfileHelper.displayMemberAllDataTable=function(){var memberAllDataTable=$("memberAllDataTable");memberAllDataTable.style.display="block";};})();var memberDirectoryDetailsToShowHelper;(function(){if(memberDirectoryDetailsToShowHelper==null){memberDirectoryDetailsToShowHelper={};}function $(id){return document.getElementById(id);}memberDirectoryDetailsToShowHelper.editIncludeMeInMemberDirectoryClick=function(){memberDirectoryDetailsToShowHelper.checkAllowDisplayCheckBox();};memberDirectoryDetailsToShowHelper.checkAllowDisplayCheckBox=function(){var allowDisplayCheckBox=$(memberDirectoryDetailsToShowHelper.AllowDisplayCheckBoxId);if(allowDisplayCheckBox){memberDirectoryDetailsToShowHelper.setMemberFieldTableMode(!allowDisplayCheckBox.checked);}};memberDirectoryDetailsToShowHelper.setMemberFieldTableMode=function(disabled){var fieldsControl=$(memberDirectoryDetailsToShowHelper.FieldsControlId);var inputs=memberDirectoryDetailsToShowHelper.getInputs(fieldsControl);for(var i=0;i<inputs.length;i++){if(inputs[i]&&!inputs[i].getAttribute(memberDirectoryDetailsToShowHelper.LockedFieldHtmlAttr)){inputs[i].disabled=disabled;}}};memberDirectoryDetailsToShowHelper.getInputs=function(node){var inputs=[];memberDirectoryDetailsToShowHelper.populateInputs(inputs,node);return inputs;};memberDirectoryDetailsToShowHelper.populateInputs=function(inputs,node){if(!node){return;}if(node.tagName&&node.tagName.toLowerCase()=="input"){inputs[inputs.length]=node;}if(!node.childNodes||node.childNodes.length==0){return;}for(var i=0;i<node.childNodes.length;i++){var subNode=node.childNodes[i];memberDirectoryDetailsToShowHelper.populateInputs(inputs,subNode);}};})();(function(){if(!window.memberSubscriptionsHelper){window.memberSubscriptionsHelper={};}memberSubscriptionsHelper.editEnableEmailsClick=function(){this.setSubscriptionsEnabling();};memberSubscriptionsHelper.setSubscriptionsEnabling=function(){var allowDisplayCheckBox=WA.$(this.AllowDisplayCheckBoxId,window);var contentControl=WA.$(this.ContentControlId,window);if(!contentControl||!allowDisplayCheckBox){return;}contentControl.style.display=allowDisplayCheckBox.checked?"block":"none";};memberSubscriptionsHelper.enableSubscription=function(checkBoxID,dropDownID){var enableCheckBox=WA.$(checkBoxID,window);var typeDropDown=WA.$(dropDownID,window);if(!enableCheckBox||!typeDropDown){return;}typeDropDown.disabled=!enableCheckBox.checked;};})();(function(){if(!window.PhotoGallery){window.PhotoGallery={};}var albumParam="";var processingText="Please wait...";var deleteConfirmation="Are you sure you want to delete?";var deletePhotoConfirmation="Are you sure you want to delete this photo?";var saveAction=false;var photosHolder=false;var photosHolderHeight=false;var titleTextBox=false;var descriptionTextBox=false;var saveButton=false;var altSaveButton=false;var saveLinkButton=false;var deleteButton=false;var cancelButton=false;var uploadButton=false;var uploadAction=false;var viewModeRadioContainer=false;var uploadButtonContainer=false;var descriptionContainer=false;var descriptionHeightUrlKey=false;var countPhotosPerRowUrlKey=false;var pagingKey=false;var saveAlbumDialogInited=false;var uploadPhotosDialogInited=false;var photoItemId=false;var photoItemTimeout=false;var actionIsRunning=false;var pendingSender=false;var pendingImageDivId=false;var pendingFullDescriptionDivId=false;var pendingSmallDescriptionDivId=false;PhotoGallery.InitPhotoGallery=initPhotoGallery;PhotoGallery.InitJsFunctions=initJsFunctions;PhotoGallery.Page_Parsed=pageParsed;PhotoGallery.Page_Unloading=pageUnloading;PhotoGallery.CloseSaveAlbumDialog=closeSaveAlbumDialog;PhotoGallery.CloseUploadPhotosDialog=closeUploadPhotosDialog;PhotoGallery.Get_SaveAction=getSaveAction;PhotoGallery.Get_SaveTitle=getSaveTitle;PhotoGallery.Get_SaveDescription=getSaveDescription;PhotoGallery.Get_SaveButton=getSaveButton;PhotoGallery.Get_DeleteButton=getDeleteButton;PhotoGallery.Get_UploadButton=getUploadButton;PhotoGallery.Get_UploadAction=getUploadAction;PhotoGallery.ProcessingButton_OnClick=processingButtonClick;PhotoGallery.DeleteButton_OnClick=deleteButtonClick;PhotoGallery.UploadButton_OnClick=uploadButtonClick;PhotoGallery.SaveButton_OnClick=saveButtonClick;PhotoGallery.ImageMenu_OnMouseOver=imageMenuMouseOver;PhotoGallery.ImageMenu_OnMouseOut=imageMenuMouseOut;PhotoGallery.MenuButton_OnMouseOver=menuButtonMouseOver;PhotoGallery.MenuButton_OnMouseOut=menuButtonMouseOut;PhotoGallery.MenuButton_OnClick=menuButtonClick;PhotoGallery.NavigateToList=navigateToList;PhotoGallery.CheckLength=checkLength;function initPhotoGallery(p){if(p.albumParam){albumParam=p.albumParam;}if(p.processingText){processingText=p.processingText;}if(p.deleteConfirmation){deleteConfirmation=p.deleteConfirmation;}if(p.deletePhotoConfirmation){deletePhotoConfirmation=p.deletePhotoConfirmation;}if(p.photosHolderId){photosHolder=WA.$(p.photosHolderId,window);}if(p.saveActionId){saveAction=WA.$(p.saveActionId,window);}if(p.titleTextBoxId){titleTextBox=WA.$(p.titleTextBoxId,window);}if(p.descriptionTextBoxId){descriptionTextBox=WA.$(p.descriptionTextBoxId,window);}if(p.saveButtonId){saveButton=WA.$(p.saveButtonId,window);}if(p.altSaveButtonId){altSaveButton=WA.$(p.altSaveButtonId,window);}if(p.saveLinkButtonId){saveLinkButton=WA.$(p.saveLinkButtonId,window);}if(p.deleteButtonId){deleteButton=WA.$(p.deleteButtonId,window);}if(p.cancelButtonId){cancelButton=WA.$(p.cancelButtonId,window);}if(p.uploadButtonId){uploadButton=WA.$(p.uploadButtonId,window);}if(p.uploadActionId){uploadAction=WA.$(p.uploadActionId,window);}if(p.viewModeRadioContainerId){viewModeRadioContainer=WA.$(p.viewModeRadioContainerId,window);}if(p.uploadButtonContainerId){uploadButtonContainer=WA.$(p.uploadButtonContainerId,window);}if(p.descriptionContainerId){descriptionContainer=WA.$(p.descriptionContainerId,window);}if(p.descriptionHeightUrlKey){descriptionHeightUrlKey=p.descriptionHeightUrlKey;}if(p.countPhotosPerRowUrlKey){countPhotosPerRowUrlKey=p.countPhotosPerRowUrlKey;}if(p.pagingUrlKey){pagingKey=p.pagingUrlKey;}}function initJsFunctions(){setDisplayInline(saveLinkButton);setDisplayInline(uploadButton);setDisplay(viewModeRadioContainer);setDisplay(uploadButtonContainer);}function pageParsed(){initJsFunctions();}function pageUnloading(){setDisabled(saveButton);setDisabled(uploadButton);setDisabled(deleteButton);if(saveLinkButton){setDisabled(saveLinkButton);setDisabled(altSaveButton);setDisabled(cancelButton);}}function setDisplay(element){if(element){element.style.display="";}}function setDisplayInline(element){if(element){element.style.display="inline";}}function setDisplayBlock(element){if(element){element.style.display="block";}}function setDisplayNone(element){if(element){element.style.display="none";}}function setDisabled(element){if(element){element.disabled=true;}}function closeSaveAlbumDialog(){PhotoAlbumsDialog.saveAlbumDialog.close();}function closeUploadPhotosDialog(){PhotoAlbumsDialog.uploadPhotosDialog.close();}function getSaveAction(){return saveAction;}function getSaveTitle(){return titleTextBox;}function getSaveDescription(){return descriptionTextBox;}function getSaveButton(){return saveButton;}function getDeleteButton(){return deleteButton;}function getUploadButton(){return uploadButton;}function getUploadAction(){return uploadAction;}function processingButtonClick(sender,otherIds){if(sender){sender.value=processingText;}if(otherIds&&otherIds.length){for(var i=0;i<otherIds.length;i++){var btn=WA.$(otherIds[i],window);if(btn&&btn.id!=sender.id){btn.disabled=true;}}}return true;}function deleteButtonClick(sender,otherIds){if(confirm(deleteConfirmation)){return processingButtonClick(sender,otherIds);}return false;}function uploadButtonClick(){if(!uploadPhotosDialogInited){PhotoAlbumsDialog.uploadPhotosDialog.initialize({albumParam:albumParam});uploadPhotosDialogInited=true;}if(uploadAction.value=="1"){uploadAction.value="";if(uploadButton){uploadButton.value=processingText;}WA.reloadCurrentPage(pagingKey,window);return;}PhotoAlbumsDialog.uploadPhotosDialog.open(null,{"PhotoGallery":PhotoGallery});}function saveButtonClick(){if(!saveAlbumDialogInited){PhotoAlbumsDialog.saveAlbumDialog.initialize({albumParam:albumParam});saveAlbumDialogInited=true;}if(saveAction.value=="1"){saveAction.value="";if(saveButton){saveButton.value=processingText;}return true;}PhotoAlbumsDialog.saveAlbumDialog.open(null,{"PhotoGallery":PhotoGallery});return false;}function imageMenuMouseOver(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){if(photoItemTimeout&&photoItemId==imageDivId){clearTimeout(photoItemTimeout);photoItemTimeout=false;return;}if(actionIsRunning){return;}sender.parentNode.style.height=sender.offsetHeight+"px";WA.$(imageDivId,window).className="photoAlbumItemThumbnailPhotoHover";sender.className="photoInnerContainerOver";sender.style.zIndex=sender.style.zIndex+1;var fullDescriptionDiv=WA.$(fullDescriptionDivId,window);setDisplayBlock(fullDescriptionDiv);setDisplayNone(WA.$(smallDescriptionDivId,window));if(photosHolder){photosHolderHeight=photosHolder.offsetHeight;if(!photosHolder.Y){WA.Dimensions.getXY(photosHolder);}if(!fullDescriptionDiv.Y){WA.Dimensions.getXY(fullDescriptionDiv);}var outHeigth=fullDescriptionDiv.Y+fullDescriptionDiv.offsetHeight-photosHolder.Y-photosHolderHeight;if(outHeigth>0){photosHolder.style.height=(photosHolderHeight+outHeigth+10)+"px";}}}function doImageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){WA.$(imageDivId,window).className="photoAlbumItemThumbnailPhoto";sender.className="photoInnerContainer";sender.style.zIndex=sender.style.zIndex-1;setDisplayNone(WA.$(fullDescriptionDivId,window));setDisplayBlock(WA.$(smallDescriptionDivId,window));if(photosHolderHeight&&photosHolder.offsetHeight>photosHolderHeight){photosHolder.style.height=photosHolderHeight+"px";}photoItemId=false;photoItemTimeout=false;}function imageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){if(actionIsRunning){if(!pendingSender){pendingSender=sender;pendingImageDivId=imageDivId;pendingFullDescriptionDivId=fullDescriptionDivId;pendingSmallDescriptionDivId=smallDescriptionDivId;}return;}if(photoItemTimeout&&photoItemId==imageDivId){return;}photoItemId=imageDivId;photoItemTimeout=setTimeout(function(){doImageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId);},10);}function menuButtonMouseOver(sender){sender.className="overButton";}function menuButtonMouseOut(sender){sender.className="outButton";}function menuButtonClick(linkId,secondButtonId,processingContainerId,confirmVariableName){var linkobj=WA.$(linkId,window);if(linkobj){setDisplayNone(linkobj);var secondButton=WA.$(secondButtonId,window);var processingContainer=WA.$(processingContainerId,window);setDisplayNone(secondButton);setDisplayBlock(processingContainer);if(confirmVariableName){actionIsRunning=true;if(!confirm(eval(confirmVariableName))){actionIsRunning=false;setDisplayNone(processingContainer);setDisplay(secondButton);setDisplay(linkobj);if(pendingSender){imageMenuMouseOut(pendingSender,pendingImageDivId,pendingFullDescriptionDivId,pendingSmallDescriptionDivId);pendingSender=false;}return;}}actionIsRunning=false;eval(linkobj.href.substr(11).replace(/\%20/g," ").replace(/\%22/g,'"'));}}function navigateToList(url){var descriptionHeight=(descriptionContainer)?descriptionContainer.offsetHeight:0;var countPhotosPerRow=0;if(photosHolder){var y=0;var bulets=photosHolder.getElementsByTagName("LI");for(var i=0;i<bulets.length;i++){WA.Dimensions.getXY(bulets[i]);if(i==0){y=bulets[i].Y;}else{if(y<bulets[i].Y){countPhotosPerRow=i;break;}}}}if(descriptionHeightUrlKey&&countPhotosPerRowUrlKey){var index=url.indexOf("?",0);url=index==-1?url+"?":url+"&";url+=descriptionHeightUrlKey+"="+descriptionHeight+"&"+countPhotosPerRowUrlKey+"="+countPhotosPerRow;}window.location=url;}function checkLength(e,oObject,maxLength){if(oObject.value.length<maxLength){return true;}else{var keyID=(window.event)?event.keyCode:e.keyCode;if((keyID>=37&&keyID<=40)||(keyID==8)||(keyID==46)){if(window.event){e.returnValue=true;}}else{if(window.event){e.returnValue=false;}else{e.preventDefault();}}}}})();(function(window,WA){if(!WA){return;}if(!window.PhotoAlbumsDialog){window.PhotoAlbumsDialog={};}window.PhotoAlbumsDialog.saveAlbumDialog=new WA.topWindow.BonaDialogHandler({name:"PhotoAlbumsDialog_SaveAlbumDialog",dialogParameters:{clipContainerId:"idPrimaryContentContainer",mainContainerId:"idMainContainer",directURLTemplate:"/Content/Members/PhotoGallery/CreateAlbumDialog.aspx?frameMode=0{albumParam}&version="+WA.version,reloadURLTemplate:"/Content/Members/PhotoGallery/CreateAlbumDialog.aspx?frameMode=1{albumParam}&version="+WA.version,top:null,left:null,width:500,height:290,minWidth:500,minHeight:290,isMoveable:true,isResizeable:false,isModal:true,isScrollable:true,callBackParameters:{}}});})(window,window.WA);(function(window,WA){if(!WA){return;}if(!window.PhotoAlbumsDialog){window.PhotoAlbumsDialog={};}PhotoAlbumsDialog.uploadPhotosDialog=new WA.topWindow.BonaDialogHandler({name:"PhotoAlbumsDialog_UploadPhotosDialog",dialogParameters:{clipContainerId:"idClipMainContainer",mainContainerId:"contentDiv",directURLTemplate:"/Content/Members/PhotoGallery/UploadPhotosDialog.aspx?frameMode=0{albumParam}&version="+WA.version,reloadURLTemplate:"/Content/Pictures/PhotoGallery/UploadPhotosInnerDialog.aspx?version="+WA.version+"{albumParam}",top:null,left:null,width:430,height:355,minWidth:430,minHeight:355,isMoveable:true,isResizeable:false,isModal:true,isScrollable:false,callBackParameters:{}},onDialogClose:function(){if(PhotoGallery.Get_UploadAction().value=="1"){PhotoGallery.Get_UploadButton().click();}}});})(window,window.WA);jq$(function(){if(jq$(".WaGadgetContactProfileStatePhotoGallery .editCaptionTextBox").size()){$("body").animate({scrollTop:$(".WaGadgetContactProfileStatePhotoGallery .editCaptionTextBox").offset().top},0);}});jq$(function(){jq$('.WaGadgetContactProfileStatePhotoGallery .pageBackContainer a:contains("All album photos")').html("All album photos");jq$('.WaGadgetContactProfileStatePhotoGallery .linkContainer a:contains("Previous"), .WaGadgetContactProfileStatePhotoGallery .linkContainer span:contains("Previous")').html("Previous");jq$('.WaGadgetContactProfileStatePhotoGallery .linkContainer a:contains("Next"), .WaGadgetContactProfileStatePhotoGallery .linkContainer span:contains("Next")').html("Next");});jq$(function(){if(document.documentMode||/Edge/.test(navigator.userAgent)){if(jq$("#idPhotoGalleryMainSectionContainer").length>0){jq$("img.photoGalleryItemThumbnailImage").each(function(){var t=jq$(this),s="url("+t.attr("src")+")",p=t.parent(),d=jq$("<div></div>");p.append(d);d.css({"height":t.parent().css("height"),"background-size":"cover","background-repeat":"no-repeat","background-position":"50% 20%","background-image":s});t.hide();});}if(jq$("#idPhotoAlbumMainSectionContainer").length>0){jq$("img.photoAlbumItemThumbnailPhoto").each(function(){var t=jq$(this),s="url("+t.attr("src")+")",p=t.parent(),d=jq$("<div></div>");p.append(d);d.css({"height":t.parent().css("height"),"background-size":"cover","background-repeat":"no-repeat","background-position":"50% 20%","background-image":s});t.hide();});}}});(function(){if(window.Wizard==null){window.Wizard=new Object();}Wizard.SetRadioChosen=SetRadioChosen;Wizard.SetMethosRadioChosen=SetMethosRadioChosen;Wizard.SetMethodValidate=SetMethodValidate;Wizard.SetCreditCardIsChosen=SetCreditCardIsChosen;Wizard.GetCreditCardIsChosen=GetCreditCardIsChosen;Wizard.ValidateIsRadioChosen=ValidateIsRadioChosen;Wizard.ValidateIsMethodRadioChosen=ValidateIsMethodRadioChosen;Wizard.SetRadioValidatorsIds=SetRadioValidatorsIds;Wizard.DisableButtons=DisableButtonsWithTimeout;Wizard.NavigateToCreditCard=NavigateToCreditCard;Wizard.SetContainerVisibility=SetContainerVisibility;Wizard.StopWatching=StopWatching;Wizard.ShowAdminCancelDialog=ShowAdminCancelDialog;Wizard.SubstituteFormTargetIfReq=SubstituteFormTargetIfReq;var isRadioChosen=false;var isMethodRadioChosen=false;var isMethodValidate=false;var isCreditCardChosen=false;var radioValidatorId=false;var radioMethodValidatorId=false;function SetRadioChosen(){isRadioChosen=true;if(radioValidatorId){ValidatorValidate(document.getElementById(radioValidatorId));}else{Page_ClientValidate("WizardValidationGroup");}if(radioMethodValidatorId){ValidatorValidate(document.getElementById(radioMethodValidatorId));}}function SetMethosRadioChosen(){isMethodRadioChosen=true;if(radioValidatorId){ValidatorValidate(document.getElementById(radioValidatorId));}if(radioMethodValidatorId){ValidatorValidate(document.getElementById(radioMethodValidatorId));}}function validateRados(){}function SetMethodValidate(isValidate){isMethodValidate=isValidate;}function SetCreditCardIsChosen(isChosen){isCreditCardChosen=isChosen;}function GetCreditCardIsChosen(){return isCreditCardChosen;}function ValidateIsRadioChosen(sender,args){args.IsValid=isRadioChosen;}function ValidateIsMethodRadioChosen(sender,args){args.IsValid=!isMethodValidate||isMethodRadioChosen;}function SetRadioValidatorsIds(radioValidatorClientId,radioMethodValidatorClientId){radioValidatorId=radioValidatorClientId;radioMethodValidatorId=radioMethodValidatorClientId;}function DisableButtonsWithTimeout(){if(typeof(Page_ValidationActive)!="undefined"&&Page_ValidationActive&&Page_IsValid==false){return;}var ids=arguments;setTimeout(function(){DisableButtons(ids);},50);}function NavigateToCreditCard(url){document.body.style.display="none";WA.topWindow.location=url;}function DisableButtons(ids){if(!ids){return;}for(i=0;i<ids.length;i++){var elemToDisable=document.getElementById(ids[i]);if(elemToDisable){elemToDisable.disabled=true;}}}function SetContainerVisibility(containerId,visible){var container=document.getElementById(containerId);if(!container){return;}container.style.display=visible?"block":"none";}function StopWatching(){if(window.DataChangeWatcher){DataChangeWatcher.pauseWatching();}if(window.Page_ClientValidate){Page_ClientValidate("WizardValidationGroup");}var resumeWatching=false;if(window.Page_IsValid){resumeWatching=!Page_IsValid;}if(window.DataChangeWatcher&&resumeWatching){DataChangeWatcher.resumeWatching();}}function ShowAdminCancelDialog(text){if(!confirm(text)){return false;}return true;}function SubstituteFormTargetIfReq(){var planRadiosContainer=document.getElementById("idPlansContainer");var selectedPlanId=getSelectedRadioAttrVal(planRadiosContainer.getElementsByTagName("INPUT"),"planId");var selectedSubscriptionPeriod=getSelectedSubscriptionPeriod();if(selectedPlanId==0||selectedPlanId==null){return;}var shouldSubstituteTarget=false;var wasFreePlanChoosen=selectedPlanId==freePlanId;var payOutstandingBalanceNowRadio=document.getElementById(payOutstandingBalanceNowId);var newCreditCardRadio=document.getElementById(newCreditCardRadioId);var shouldPayOutstandingAmountNow=wasFreePlanChoosen&&isAccountOverdue&&payOutstandingBalanceNowRadio&&payOutstandingBalanceNowRadio.checked;var isSelectedPeriodAnnualInvoice=selectedSubscriptionPeriod==3;if(isSelectedPeriodAnnualInvoice){shouldSubstituteTarget=false;}else{if(!isCurrentPlanChargeable){shouldSubstituteTarget=true;}else{var shouldEnterNewCard=wasFreePlanChoosen?shouldPayOutstandingAmountNow:(newCreditCardRadio&&newCreditCardRadio.checked)||isBillingInfoEmpty;shouldSubstituteTarget=shouldEnterNewCard;}}if(shouldSubstituteTarget){document.getElementById(formClientId).target="_top";}}function getSelectedSubscriptionPeriod(){var selectedMethodId=0;var paymentMethodRadiosContainer=document.getElementById("idPaymentMethodsContainer");if(paymentMethodRadiosContainer){var paymentMethodRadios=paymentMethodRadiosContainer.getElementsByTagName("INPUT");selectedMethodId=getSelectedRadioAttrVal(paymentMethodRadiosContainer.getElementsByTagName("INPUT"),"methodId");}return selectedMethodId;}function getSelectedRadioAttrVal(radios,attrName){for(var i=0;i<radios.length;i++){if(radios[i].checked){return radios[i].getAttribute(attrName);}}}})();(function(){if(!window.MemberPublicProfilePhotoGallery){window.MemberPublicProfilePhotoGallery={};}var albumParam="";var processingText="Please wait...";var deleteConfirmation="Are you sure you want to delete?";var deletePhotoConfirmation="Are you sure you want to delete this photo?";var saveAction=false;var photosHolder=false;var photosHolderHeight=false;var titleTextBox=false;var descriptionTextBox=false;var saveButton=false;var altSaveButton=false;var saveLinkButton=false;var deleteButton=false;var cancelButton=false;var uploadButton=false;var uploadAction=false;var viewModeRadioContainer=false;var uploadButtonContainer=false;var descriptionContainer=false;var descriptionHeightUrlKey=false;var countPhotosPerRowUrlKey=false;var pagingKey=false;var saveAlbumDialogInited=false;var uploadPhotosDialogInited=false;var photoItemId=false;var photoItemTimeout=false;var actionIsRunning=false;var pendingSender=false;var pendingImageDivId=false;var pendingFullDescriptionDivId=false;var pendingSmallDescriptionDivId=false;MemberPublicProfilePhotoGallery.InitPhotoGallery=initPhotoGallery;MemberPublicProfilePhotoGallery.ImageMenu_OnMouseOver=imageMenuMouseOver;MemberPublicProfilePhotoGallery.ImageMenu_OnMouseOut=imageMenuMouseOut;MemberPublicProfilePhotoGallery.NavigateToList=navigateToList;MemberPublicProfilePhotoGallery.CheckLength=checkLength;function initPhotoGallery(p){if(p.albumParam){albumParam=p.albumParam;}if(p.processingText){processingText=p.processingText;}if(p.deleteConfirmation){deleteConfirmation=p.deleteConfirmation;}if(p.deletePhotoConfirmation){deletePhotoConfirmation=p.deletePhotoConfirmation;}if(p.photosHolderId){photosHolder=WA.$(p.photosHolderId,window);}if(p.saveActionId){saveAction=WA.$(p.saveActionId,window);}if(p.titleTextBoxId){titleTextBox=WA.$(p.titleTextBoxId,window);}if(p.descriptionTextBoxId){descriptionTextBox=WA.$(p.descriptionTextBoxId,window);}if(p.saveButtonId){saveButton=WA.$(p.saveButtonId,window);}if(p.altSaveButtonId){altSaveButton=WA.$(p.altSaveButtonId,window);}if(p.saveLinkButtonId){saveLinkButton=WA.$(p.saveLinkButtonId,window);}if(p.deleteButtonId){deleteButton=WA.$(p.deleteButtonId,window);}if(p.cancelButtonId){cancelButton=WA.$(p.cancelButtonId,window);}if(p.uploadButtonId){uploadButton=WA.$(p.uploadButtonId,window);}if(p.uploadActionId){uploadAction=WA.$(p.uploadActionId,window);}if(p.viewModeRadioContainerId){viewModeRadioContainer=WA.$(p.viewModeRadioContainerId,window);}if(p.uploadButtonContainerId){uploadButtonContainer=WA.$(p.uploadButtonContainerId,window);}if(p.descriptionContainerId){descriptionContainer=WA.$(p.descriptionContainerId,window);}if(p.descriptionHeightUrlKey){descriptionHeightUrlKey=p.descriptionHeightUrlKey;}if(p.countPhotosPerRowUrlKey){countPhotosPerRowUrlKey=p.countPhotosPerRowUrlKey;}if(p.pagingUrlKey){pagingKey=p.pagingUrlKey;}}function setDisplay(element){if(element){element.style.display="";}}function setDisplayInline(element){if(element){element.style.display="inline";}}function setDisplayBlock(element){if(element){element.style.display="block";}}function setDisplayNone(element){if(element){element.style.display="none";}}function setDisabled(element){if(element){element.disabled=true;}}function imageMenuMouseOver(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){if(photoItemTimeout&&photoItemId==imageDivId){clearTimeout(photoItemTimeout);photoItemTimeout=false;return;}if(actionIsRunning){return;}sender.parentNode.style.height=sender.offsetHeight+"px";WA.$(imageDivId,window).className="photoAlbumItemThumbnailPhotoHover";sender.className="photoInnerContainerOver";sender.style.zIndex=sender.style.zIndex+1;var fullDescriptionDiv=WA.$(fullDescriptionDivId,window);setDisplayBlock(fullDescriptionDiv);setDisplayNone(WA.$(smallDescriptionDivId,window));if(photosHolder){photosHolderHeight=photosHolder.offsetHeight;if(!photosHolder.Y){WA.Dimensions.getXY(photosHolder);}if(!fullDescriptionDiv.Y){WA.Dimensions.getXY(fullDescriptionDiv);}var outHeigth=fullDescriptionDiv.Y+fullDescriptionDiv.offsetHeight-photosHolder.Y-photosHolderHeight;if(outHeigth>0){photosHolder.style.height=(photosHolderHeight+outHeigth+10)+"px";}}}function doImageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){WA.$(imageDivId,window).className="photoAlbumItemThumbnailPhoto";sender.className="photoInnerContainer";sender.style.zIndex=sender.style.zIndex-1;setDisplayNone(WA.$(fullDescriptionDivId,window));setDisplayBlock(WA.$(smallDescriptionDivId,window));if(photosHolderHeight&&photosHolder.offsetHeight>photosHolderHeight){photosHolder.style.height=photosHolderHeight+"px";}photoItemId=false;photoItemTimeout=false;}function imageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId){if(actionIsRunning){if(!pendingSender){pendingSender=sender;pendingImageDivId=imageDivId;pendingFullDescriptionDivId=fullDescriptionDivId;pendingSmallDescriptionDivId=smallDescriptionDivId;}return;}if(photoItemTimeout&&photoItemId==imageDivId){return;}photoItemId=imageDivId;photoItemTimeout=setTimeout(function(){doImageMenuMouseOut(sender,imageDivId,fullDescriptionDivId,smallDescriptionDivId);},10);}function navigateToList(url){var descriptionHeight=(descriptionContainer)?descriptionContainer.offsetHeight:0;var countPhotosPerRow=0;if(photosHolder){var y=0;var bulets=photosHolder.getElementsByTagName("LI");for(var i=0;i<bulets.length;i++){WA.Dimensions.getXY(bulets[i]);if(i==0){y=bulets[i].Y;}else{if(y<bulets[i].Y){countPhotosPerRow=i;break;}}}}if(descriptionHeightUrlKey&&countPhotosPerRowUrlKey){var index=url.indexOf("?",0);url=index==-1?url+"?":url+"&";url+=descriptionHeightUrlKey+"="+descriptionHeight+"&"+countPhotosPerRowUrlKey+"="+countPhotosPerRow;}window.location=url;}function checkLength(e,oObject,maxLength){if(oObject.value.length<maxLength){return true;}else{var keyID=(window.event)?event.keyCode:e.keyCode;if((keyID>=37&&keyID<=40)||(keyID==8)||(keyID==46)){if(window.event){e.returnValue=true;}}else{if(window.event){e.returnValue=false;}else{e.preventDefault();}}}}})();(function(window,WA,undefined){if(!window.WaOnlineStoreCart){window.WaOnlineStoreCart=OnlineStoreCart;}function OnlineStoreCart(){var service=new WaOnlineStoreCartService(),self=this;self.add=add;self.get=get;self.load=load;self.remove=remove;self.setQuantity=setQuantity;self.getService=getService;function add(productId,variantId,quantity){return service.addProduct(productId,variantId,quantity);}function getService(){return service;}function get(productId,variantId){return service.getProduct(productId,variantId);}function load(){return service.loadCurrent();}function remove(productId,variantId){return service.removeProduct(productId,variantId);}function setQuantity(productId,variantId,quantity){return service.setQuantity(productId,variantId,quantity);}}var instance;OnlineStoreCart.getInstance=function(){return instance||(instance=new OnlineStoreCart());};OnlineStoreCart.load=function(initModel){var cart=this.getInstance(initModel);return cart.load();};})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCartGateway){window.WaOnlineStoreCartGateway=OnlineStoreCartGateway;}function OnlineStoreCartGateway(){var self=this;self.addProduct=addProduct;self.loadCurrent=loadCurrent;self.recalculateCurrent=recalculateCurrent;function addProduct(model){return WA.Ajax({contentType:"application/json; charset=utf-8",data:JSON.stringify(model),dataType:"json",processData:false,type:"POST",url:"/Sys/Store/Cart/Add"});}function loadCurrent(){return WA.Ajax({dataType:"json",type:"GET",url:"/Sys/Store/Cart/Current"});}function transformCartModel(oldCartModel){var newCart=jq$.extend(true,{},oldCartModel);jq$.each(newCart.items,function(i,item){delete item.price;delete item.title;delete item.total;delete item.pictureUrl;});delete newCart.total;return newCart;}function recalculateCurrent(model,deliveryOptionId){var url="/Sys/Store/Cart/RecalculateCart";if(deliveryOptionId){url=url+"?deliveryOptionId="+deliveryOptionId;}return WA.Ajax({contentType:"application/json; charset=utf-8",data:JSON.stringify(transformCartModel(model)),dataType:"json",processData:false,type:"POST",url:url});}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCartLayout){window.WaOnlineStoreCartLayout=OnlineStoreCartLayout;}function OnlineStoreCartLayout(service,initModel){var container=document.getElementById("cartLayout"),self=this;var productDetailsUrl="/Sys/ProductDetails",currencySymbol="$",currency="USD";self.render=render;self.onError=onError;var isSaveFailed=null;var isDisabled=null;var checkoutURL="/Sys/Store/Checkout";init();resetViewStates();function init(){jq$(container).on("input",".storeCartTable_tdQuantity input",onProductQuantityInput);jq$(container).on("click",".storeCartTable_deleteButton",onProductDelete);jq$(container).on("click",".quantitySnippet .quantity-button",onProductQuantityUpDown);jq$(container).on("click",".storeCartControlNav__back",onBackToShopping);jq$(container).on("click",".toCheckout",onCheckout);service.savingStart=onSavingStart;}function onBackToShopping(){window.history.go(-1);return false;}function onCheckout(){window.location.href=checkoutURL;}function resetViewStates(){isSaveFailed=false;isDisabled=false;}function render(model){container.innerHTML=model.items&&model.items.length>0?renderTable(model):renderEmpty();}function renderEmpty(){var html=[];if(isSaveFailed){html.push(renderGeneralError());}html.push('<div class="emptyCartContainer">');html.push('<div class="emptyCartIcon2"></div>');html.push('<p class="emptyCartMessage">Your cart is empty.</p>');html.push("</div>");return html.join("");}function renderTable(model){var html=[];if(isSaveFailed){html.push(renderGeneralError());}html.push('<table class="storeCartTable">');html.push(renderItems(model.items));html.push(renderTotal(model));html.push("</table>");html.push(renderControlNav());return html.join("");}function renderItems(items){var html=[],i,length=items.length;for(i=0;i<length;i++){html.push(renderItem(items[i]));}return html.join("");}function renderItem(item){var html=[];html.push('<tr class="storeCartTable_row" data-product-id="',item.productId,'" data-variant-id="',item.variantId,'">');html.push('<td class="storeCartTable_tdImage">',renderImage(item),"</td>");html.push('<td class="storeCartTable_tdTitle">');html.push('<a href="',getItemUrl(item.productId,item.variantId),'">',item.title,"</a>");html.push(renderOptions(item));html.push("</td>");html.push('<td class="storeCartTable_tdPprice">',renderPrice(item.price),"</td>");html.push('<td class="storeCartTable_tdQuantity">');html.push('<div class="quantitySnippet">');html.push("<input ",(isDisabled&&'disabled="disabled"'),' class="typeNumber" min="1" size="2" type="number" value="',item.quantity,'">');html.push('<div class="quantity-button quantity-down">&nbsp;</div><div class="quantity-button quantity-up">&nbsp;</div>');html.push("</div>");html.push("</td>");html.push('<td class="storeCartTable_tdAmount">',renderPrice(item.total),"</td>");html.push('<td class="storeCartTable_tdDelete">');html.push('<button title="Remove item" class="storeCartTable_deleteButton"></button>');html.push("</td>");html.push("</tr>");return html.join("");}function renderOption(option){return'<div class="storeCartTable_itemOption">'+option.title+": "+option.value+"</div>";}function renderOptions(item){if(!item.options){return"";}return jq$.map(item.options,function(option,i){return renderOption(option);}).join("");}function renderImage(item){var html=[];if(item.pictureUrl){html.push('<a class="storeCartTable_img" href="',getItemUrl(item.productId,item.variantId),'">');html.push('<img src="',item.pictureUrl,'" width="100"/></a>');}else{html.push('<div class="storeCartTable_img storeCartTable_no_img" title="No photo"></div>');}return html.join("");}function getItemUrl(productId,variantId){return initModel.productDetailsUrl+"/"+productId;}function renderPrice(price){if(initModel.currencySymbol){return'<span class="priceContainer">'+initModel.currencySymbol+price.toFixed(2)+"</span>";}else{return'<span class="priceContainer">'+price.toFixed(2)+" "+initModel.currency+"</span>";}}function renderTotal(model){var html=[];var total=model.total;var subTotal=model.subTotal;var isTaxesApplied=model.isTaxesApplied||false;var isTaxesIncludedTotal=model.isTaxesIncludedTotal||false;var taxes=model.taxes||[];if(initModel.taxesEnable&&isTaxesApplied&&!isTaxesIncludedTotal){html.push('<tr class="storeCartSubTotalInfoRowFirst">');html.push('<td colspan="4" class="storeCartTable_totalLabel">Subtotal:</td>');if(initModel.currencySymbol){html.push('<td class="storeCartTable_totalValue">',initModel.currencySymbol,subTotal.toFixed(2),"</td>");}else{html.push('<td class="storeCartTable_totalValue">',subTotal.toFixed(2)," ",initModel.currency,"</td>");}html.push('<td class="storeCartTable_totalValue"></td>');html.push("</tr>");html.push(renderTaxes(taxes,isTaxesIncludedTotal));}if(total){if(!isTaxesIncludedTotal){html.push('<tr class="storeCartTotal storeCartTotalInfoRow">');}else{html.push('<tr class="storeCartTotal storeCartTotalInfoRowFirst">');}html.push('<td colspan="4" class="storeCartTable_totalLabel">Total:</td>');if(initModel.currencySymbol){html.push('<td class="storeCartTable_totalValue">',initModel.currencySymbol,total.toFixed(2),"</td>");}else{html.push('<td class="storeCartTable_totalValue">',total.toFixed(2)," ",initModel.currency,"</td>");}html.push('<td class="storeCartTable_totalValue"></td>');html.push("</tr>");}if(initModel.taxesEnable&&isTaxesApplied&&isTaxesIncludedTotal){html.push(renderTaxes(taxes,isTaxesIncludedTotal));}return html.join("");}function renderTaxes(taxes,isTaxesIncludedTotal){var html=[];for(var taxIndex in taxes){var tax=taxes[taxIndex];var taxLabel=tax.title+":";if(isTaxesIncludedTotal){taxLabel="Incl."+tax.title+":";}html.push('<tr class="storeCartTotalInfoRow">');html.push('<td colspan="4" class="storeCartTable_totalLabel">',taxLabel,"</td>");if(initModel.currencySymbol){html.push('<td class="storeCartTable_totalValue">',initModel.currencySymbol,tax.amount.toFixed(2),"</td>");}else{html.push('<td class="storeCartTable_totalValue">',tax.amount.toFixed(2)," ",initModel.currency,"</td>");}html.push('<td class="storeCartTable_totalValue"></td>');html.push("</tr>");}return html.join("");}function renderControlNav(){var html=[];html.push('<div class="storeCartControlNav">');html.push('<div class="storeCartControlNav_left">');html.push('<a href="#" class="storeCartControlNav__back">Continue shopping</a>');html.push("</div>");html.push('<div class="storeCartControlNav_right">');html.push("<input ",(isDisabled&&'disabled="disabled"'),' type="button" name="continue" value="Proceed to checkout" class="functionalButton toCheckout">');html.push("</div>");html.push("</div>");return html.join("");}function renderGeneralError(){var html=[];html.push('<div class="noticeBox boxTypeError">');html.push('<div class="text">');html.push("Cannot complete operation. Please try again later or contact administrator");html.push("</div>");html.push("</div>");return html.join("");}function onError(cart){isSaveFailed=true;render(cart);resetViewStates();}function onSaved(cart){render(cart);resetViewStates();}function onSavingStart(cart){isDisabled=true;render(cart);resetViewStates();}function onProductDelete(){if(isDisabled){return;}var sender=jq$(this),productId=sender.closest(".storeCartTable_row").data("productId"),variantId=sender.closest(".storeCartTable_row").data("variantId");service.removeProduct(productId,variantId).done(onSaved).fail(onError);}function onProductQuantityInput(){var sender=jq$(this),productId=sender.closest(".storeCartTable_row").data("productId"),variantId=sender.closest(".storeCartTable_row").data("variantId"),quantity=+sender.val(),min=+sender.attr("min");if(quantity<=min){quantity=min;}service.setQuantity(productId,variantId,quantity).done(onSaved).fail(onError);}function onProductQuantityUpDown(){var sender=jq$(this),input=sender.closest(".quantitySnippet").find("input"),value=+input.val();value+=sender.hasClass("quantity-up")?1:-1;input.val(value).trigger("input");}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCartService){window.WaOnlineStoreCartService=OnlineStoreCartService;}function OnlineStoreCartService(){var cache={},cacheKey={cart:"OnlineStoreCart"},defaultSaveDelay=400,delayedSave,delayedSaveTimerId,gateway=new WaOnlineStoreCartGateway(),self=this;self.addProduct=addProduct;self.getProduct=getProduct;self.loadCurrent=loadCurrent;self.removeProduct=removeProduct;self.setQuantity=setQuantity;self.savingStart=null;self.savingCompleted=null;self.resetCart=resetCart;self.localLoad=localLoad;self.saveWithDelay=saveWithDelay;self.saveInCache=saveInCache;cache.get=function(key){var serialized=localStorage.getItem(key);if(typeof serialized!=="string"){return undefined;}try{return JSON.parse(serialized);}catch(e){console.log(e);return serialized||undefined;}};cache.remove=function(key){localStorage.removeItem(key);};cache.set=function(key,value){var serialized=JSON.stringify(value);try{localStorage.setItem(key,serialized);}catch(e){console.log(e);}};function onSavingStart(cart){if(typeof self.savingStart==="function"){self.savingStart(cart);}}function onSavingCompleted(cart){if(typeof self.savingCompleted==="function"){self.savingCompleted(cart);}}function resetCart(){cache.remove(cacheKey.cart);}function addProduct(productId,variantId,quantity){var cart=cache.get(cacheKey.cart),cartItems,i,productNotFound=true;variantId=variantId||undefined;quantity=validateQuantity(quantity,1);if(cart){cartItems=cart.items;for(i=0,productNotFound=true;i<cartItems.length;i++){if(cartItems[i].productId===productId&&cartItems[i].variantId==variantId){cartItems[i].quantity+=quantity;productNotFound=false;break;}}if(productNotFound){cartItems.push({productId:productId,variantId:variantId,quantity:quantity});}return gateway.recalculateCurrent(cart).done(saveInCache);}return gateway.addProduct({productId:productId,variantId:variantId,quantity:quantity}).done(saveInCache);}function getProduct(productId,variantId){var cart=cache.get(cacheKey.cart),cartItems,i;variantId=variantId||undefined;if(cart){cartItems=cart.items;for(i=0;i<cartItems.length;i++){if(cartItems[i].productId===productId&&cartItems[i].variantId==variantId){return cartItems[i];}}}return null;}function localLoad(){var cart=cache.get(cacheKey.cart);return cart;}function loadCurrent(deliveryOptionId){var cart=cache.get(cacheKey.cart);if(cart){return gateway.recalculateCurrent(cart,deliveryOptionId).done(saveInCache);}return gateway.loadCurrent().done(saveInCache);}function removeProduct(productId,variantId){var cart=cache.get(cacheKey.cart),cartItems,i;variantId=variantId||undefined;cartItems=cart.items;for(i=cartItems.length-1;i>=0;i--){if(cartItems[i].productId===productId&&cartItems[i].variantId==variantId){cartItems.splice(i,1);break;}}return saveWithDelay(cart);}function setQuantity(productId,variantId,quantity){var cart=cache.get(cacheKey.cart),cartItems,i;variantId=variantId||undefined;cartItems=cart.items;quantity=validateQuantity(quantity,0);for(i=0;i<cartItems.length;i++){if(cartItems[i].productId===productId&&cartItems[i].variantId==variantId){cartItems[i].quantity=quantity;break;}}return saveWithDelay(cart);}function save(cart){return gateway.recalculateCurrent(cart);}function saveInCache(cart){onSavingCompleted(cart);cache.set(cacheKey.cart,cart);}function saveWithDelay(cart,delay){var deferred;if(delayedSave&&delayedSave.state()==="pending"){deferred=jq$.Deferred();}else{deferred=delayedSave=jq$.Deferred().done(saveInCache);}clearTimeout(delayedSaveTimerId);delayedSaveTimerId=setTimeout(function(){onSavingStart(cart);save(cart).done(function(cart){delayedSave.resolve(cart);}).fail(function(error){delayedSave.reject(cache.get(cacheKey.cart),error);});},delay||defaultSaveDelay);return deferred;}function validateQuantity(quantity,quantityMinimum){quantity=+quantity;return quantity<quantityMinimum||isNaN(quantity)?quantityMinimum:quantity;}}})(window,window.WA);(function(window,WA,undefined){if(!window.InventoryIssuesHelper){window.InventoryIssuesHelper=new InventoryIssuesHelper();}function InventoryIssuesHelper(){this.hasInventoryIssues=hasInventoryIssues;this.getInventoryIssue=getInventoryIssue;function hasInventoryIssues(item,issues){return getInventoryIssue(item,issues)!=null;}function getInventoryIssue(item,issues){var _issues=$.grep(issues,function(obj){return(obj.productId===item.productId&&obj.variantId===item.variantId);});return _issues.length>0?_issues[0]:null;}}})(window,window.WA);(function(window,WA,undefined){if(!window.InventoryIssuesStepTableRenderer){window.InventoryIssuesStepTableRenderer=InventoryIssuesStepTableRenderer;}function InventoryIssuesStepTableRenderer(){this.render=render;function render(model){return confirmationRenderTable(model);}function confirmationRenderTable(model){var html=[];html.push('<table class="storeCartTable">');html.push(confirmationRenderItems(model.items,model.issues));html.push("</table>");return html.join("");}function confirmationRenderItems(items,issues){var html=[],i,length=items.length;for(i=0;i<length;i++){if(InventoryIssuesHelper.hasInventoryIssues(items[i],issues)){html.push(confirmationRenderItem(items[i],issues));}}return html.join("");}function confirmationRenderItem(item,issues){var html=[];html.push('<tr class="storeCartTable_row',item.isDeleted?" storeCartTable_rowDeleted":"",'">');html.push('<td class="storeCartTable_tdImage">',renderImage(item),"</td>");html.push('<td class="storeCartTable_tdTitle">');html.push('<div class="storeCartTable_itemTitle">',item.title,"</div>");html.push(renderOptions(item));html.push("</td>");html.push('<td class="storeCartTable_tdInventoryIssue" align="right">',renderInventoryIssues(item,issues),"</td>");html.push('<td class="storeCartTable_tdDelete">');if(!item.isDeleted){html.push('<button title="Remove item" class="storeCartTable_deleteButton" item-productId="',item.productId,'" item-variantId="',item.variantId,'"></button>');}html.push("</td>");html.push("</tr>");return html.join("");}function renderOptions(item){if(!item.options){return"";}return jq$.map(item.options,function(option,i){return renderOption(option);}).join("");}function renderOption(option){return'<div class="storeCartTable_itemOption">'+option.title+": "+option.value+"</div>";}function renderImage(item){var html=[];if(item.pictureUrl){html.push('<img src="',item.pictureUrl,'" width="100"/>');}else{html.push('<div class="storeCartTable_img storeCartTable_no_img" title="No photo"></div>');}return html.join("");}function renderInventoryIssues(item,issues){if(item.isDeleted){return"<div>Deleted</div>";}var html=[];var issue=$.grep(issues,function(obj){return(obj.productId===item.productId&&obj.variantId===item.variantId);})[0];switch(issue.type){case"NOTENOUGH":html.push('<div class="storeCartTable_itemInventoryIssue_notEnough">'+issue.quantity+" -> only "+issue.stock+" left</div>");break;case"OUTOFSTOCK":html.push('<div class="storeCartTable_itemInventoryIssue_outOfStock">Out of stock</div>');break;default:throw ({"message":"Invalid issue type","productId":item.productId,"variantId":item.variantId});}return html.join("");}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckout){window.WaOnlineStoreCheckout=OnlineStoreCheckout;}var SHIPPING="SHIPPING",PICKUP="PICKUP";var DELIVERY_OPTION_TYPES={};DELIVERY_OPTION_TYPES[SHIPPING]=SHIPPING;DELIVERY_OPTION_TYPES[PICKUP]=PICKUP;window.WaOnlineStoreCheckout.SHIPPING=SHIPPING;window.WaOnlineStoreCheckout.PICKUP=PICKUP;window.WaOnlineStoreCheckout.DELIVERY_OPTION_TYPES=DELIVERY_OPTION_TYPES;function OnlineStoreCheckout(){var serviceCart=WaOnlineStoreCart.getInstance().getService(),serviceCheckout=new WaOnlineStoreCheckoutService(serviceCart),self=this;self.getService=getService;function getService(){return serviceCheckout;}}var instance;OnlineStoreCheckout.getInstance=function(){return instance||(instance=new OnlineStoreCheckout());};OnlineStoreCheckout.load=function(){return WaOnlineStoreCart.getInstance().load();};})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckoutGateway){window.WaOnlineStoreCheckoutGateway=OnlineStoreCheckoutGateway;}function OnlineStoreCheckoutGateway(){var self=this;self.invoiceMe=invoiceMe;self.payOnline=payOnline;self.checkEmail=checkEmail;function payRequest(url,model){return WA.Ajax({contentType:"application/json; charset=utf-8",data:JSON.stringify(model),dataType:"json",processData:false,type:"POST",url:url});}function invoiceMe(model){return payRequest("/Sys/Store/Checkout/InvoiceMe",model);}function payOnline(model){return payRequest("/Sys/Store/Checkout/PayOnline",model);}function checkEmail(model){return WA.Ajax({contentType:"application/json; charset=utf-8",data:JSON.stringify(model),dataType:"json",processData:false,type:"POST",url:"/Sys/Store/Checkout/CheckEmail"});}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckoutLayout){window.WaOnlineStoreCheckoutLayout=OnlineStoreCheckoutLayout;}function OnlineStoreCheckoutLayout(serviceCheckout,serviceCart,opts){var self=this,isAuthorized=opts.isAuthorized,initModel=opts.initModel,checkEmptyCart=opts.checkEmptyCart,checkCartIssues=opts.checkCartIssues,step1,step2,step3,inventoryIssuesStep,wizard,checkoutContentContainer=jq$("#OnlineStoreCheckout_content_container"),wizardContainer=document.getElementById("idCheckoutWizardContainer"),deliveryEnable=initModel.deliveryEnable,deliveryOptions=initModel.deliveryOptions;if(!initModel){throw (new Error("Not define initModel in layout opts"));}if(!checkEmptyCart){throw (new Error("Not define checkEmptyCart in layout opts"));}if(!wizardContainer){return;}self.render=render;self.showContainer=showContainer;init();function init(){jq$(wizardContainer).on("click",".wizardBackButton",onPressWizardBackButton);jq$(wizardContainer).on("click",".wizardNextButton",onPressWizardNextButton);jq$(wizardContainer).on("showStep",onShowWizardStep);step1=new WaOnlineStoreCheckoutLayoutStep1(serviceCheckout,isAuthorized);step2=new WaOnlineStoreCheckoutLayoutStep2(serviceCheckout,initModel);step3=new WaOnlineStoreCheckoutLayoutStep3(serviceCheckout,initModel);step3.onOrderCreateFailed(onOrderCreateFailed);inventoryIssuesStep=new OnlineStoreCheckoutLayoutInventoryIssuesStep(serviceCheckout,serviceCart);inventoryIssuesStep.onUpdateAndContinueClick(onUpdateAndContinueClick);wizard=new WaBasicWizard({element:wizardContainer,stepsBarContainer:"h1.stepsContainer",selected:0,showStepURLhash:true});if(isDisableDelivery()){jq$(".stepsContainer").addClass("stepsContainer_withoutDelivery");}}function showContainer(){checkoutContentContainer.show();}function render(){step1.render();step2.render();step3.render();inventoryIssuesStep.render();checkCartHasIssues();}function onSuccessCheckEmail(model){if(model.IsEmailExists===null||!model.IsEmailExists){step1.saveContactModel().done(function(){step1.deactivatePreload();if(isSkipDeliveryStep()){wizard.next();}wizard.next();}).fail(function(){step1.deactivatePreload();step1.checkEmailFailedRender();});}else{step1.deactivatePreload();step1.emailExistErrorRender();return;}}function onFailureCheckEmail(error){console.log(error.message||"check email: Fail");step1.deactivatePreload();step1.checkEmailFailedRender();wizard.next();}function isDisableDelivery(){return(deliveryOptions.length===0&&deliveryEnable);}function isSkipDeliveryStep(){return(isDisableDelivery()&&(wizard.getStep()===2||wizard.getStep()===0));}function onPressWizardBackButton(e){e.preventDefault();if(checkEmptyCart()){return;}if(wizard.getStep()===2&&checkCartHasIssues()){return false;}if(isSkipDeliveryStep()){wizard.prev();}wizard.prev();if(wizard.getStep()===0){step1.render();}if(wizard.getStep()===1){step2.render();}return false;}function onPressWizardNextButton(e){e.preventDefault();if(checkEmptyCart()){return false;}var inventoryIssuesStep=1;if(isDisableDelivery()){inventoryIssuesStep=0;}if(wizard.getStep()===inventoryIssuesStep&&checkCartHasIssues()){return false;}if(wizard.getStep()===0){step1.activatePreload();step1.checkEmail().done(onSuccessCheckEmail).fail(onFailureCheckEmail);}if(wizard.getStep()===1){step2.saveForm().done(function(){wizard.next();}).fail(function(){renderGeneralError();});return false;}return false;}function onShowWizardStep(e,anchorObject,stepNumber,stepDirection,stepPosition){if(stepNumber===2){step3.render();}}function onOrderCreateFailed(data){window.location.reload();}function onUpdateAndContinueClick(e){checkCartHasIssues();}function checkCartHasIssues(){var cart=serviceCart.localLoad()||{};if(cart.isValid){inventoryIssuesStep.hide();wizardContainer.style.display="block";if(wizard.getStep()===2){step3.render();}}else{inventoryIssuesStep.render();inventoryIssuesStep.show();wizardContainer.style.display="none";}return !cart.isValid;}}})(window,window.WA);(function(window,WA,undefined){if(!window.OnlineStoreCheckoutLayoutInventoryIssuesStep){window.OnlineStoreCheckoutLayoutInventoryIssuesStep=OnlineStoreCheckoutLayoutInventoryIssuesStep;}function OnlineStoreCheckoutLayoutInventoryIssuesStep(service,serviceCart){var formName="form_invetory_issues",container=document.getElementById("step-inventoryIssues"),tableContainer=document.getElementById("step-inventoryIssues-tableContainer"),tableRenderer=new InventoryIssuesStepTableRenderer(),$container=jq$(container),form=jq$("form[name="+formName+"]"),updateAndContinueEventName="CheckoutInventoryIssueUpdateAndContinueClick",self=this,validator,model;self.render=render;self.updateAndContinue=updateAndContinue;self.deleteProduct=deleteProduct;self.show=show;self.hide=hide;self.onUpdateAndContinueClick=onUpdateAndContinueClick;init();function init(){service.getConfirmModel().done(function(confirmModel){model=jq$.extend(true,{},confirmModel.cart);});}function show(){container.style.display="block";}function hide(){container.style.display="none";}function render(){service.getConfirmModel().done(function(confirmModel){model=model?model:jq$.extend(true,{},confirmModel.cart);tableContainer.innerHTML=tableRenderer.render(model);jq$("button.storeCartTable_deleteButton",tableContainer).click(deleteProduct);});jq$("#idUpdateAndContinueButton",container).click(updateAndContinue);}function deleteProduct(e){var productId=e.target.getAttribute("item-productId"),variantId=e.target.getAttribute("item-variantId");if(variantId==""){variantId=null;}var itemsToDelete=jq$.grep(model.items,function(el,idx){return el.productId==productId&&el.variantId==variantId;});for(var i=itemsToDelete.length-1;i>=0;i--){itemsToDelete[i].isDeleted=true;}render();}function updateAndContinue(){model.items=$.grep(model.items,function(obj){return obj.isDeleted;},true);for(var i=model.items.length-1;i>=0;i--){var item=model.items[i];if(InventoryIssuesHelper.hasInventoryIssues(item,model.issues)){var issue=InventoryIssuesHelper.getInventoryIssue(item,model.issues);switch(issue.type){case"NOTENOUGH":model.items[i].quantity=issue.stock;break;case"OUTOFSTOCK":model.items[i]=null;break;default:throw ({"message":"Invalid issue type","productId":item.productId,"variantId":item.variantId});}}}model.items=$.grep(model.items,function(obj){return obj;});serviceCart.saveWithDelay(model).done(function(cart){jq$.event.trigger(updateAndContinueEventName);serviceCart.saveInCache(cart);});}function onUpdateAndContinueClick(actionFunc){jq$(document).bind(updateAndContinueEventName,actionFunc);}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckoutLayoutStep1){window.WaOnlineStoreCheckoutLayoutStep1=OnlineStoreCheckoutLayoutStep1;}function OnlineStoreCheckoutLayoutStep1(service,isAuthorized){var container=document.getElementById("step-1"),$container=jq$(container),self=this,validator,loginURL="/Sys/Login?ReturnUrl=%2fSys%2fStore%2fCheckout",formName="contact_details",form=jq$("form[name="+formName+"]"),$terms=form.find("input.storeCheckoutTerm");self.render=render;self.checkEmail=checkEmail;self.activatePreload=activatePreload;self.deactivatePreload=deactivatePreload;self.saveContactModel=saveContactModel;self.emailExistErrorRender=emailExistErrorRender;self.checkEmailFailedRender=checkEmailFailedRender;init();function init(){validatorInit();jq$("#loginPageButton").on("click",function(){window.location.href=loginURL;});$terms.on("change",tryEnableNextButton);tryEnableNextButton();}function isCheckedTerms(){var checkedAllTerms=true;$terms.each(function(i,el){checkedAllTerms=checkedAllTerms&&el.checked;});return checkedAllTerms;}function validatorInit(){validator=new FormValidator({form:formName,autoConfig:true,validateOnBlur:true,onBlurField:onBlurValidate,onSubmit:onSubmitValidate});}function render(){service.getContactModel().done(function(model){getEmailField().val(model.Email);getFirstNameField().val(model.FirstName);getLastNameField().val(model.LastName);getPhoneField().val(model.Phone);jq$(model.RulesAndTerms).each(function(i,id){jq$("#term_"+id)[0].checked=true;});if(!isAuthorized&&!model.Email){disableNextButton();}tryEnableNextButton();});}function getNextButton(){return $container.find(".wizardNextButton");}function tryEnableNextButton(){if(isCheckedTerms()&&validator.validateForm()){enableNextButton();}else{disableNextButton();}}function tryHideNotifications(){if(validator.validateForm()){getExistEmailNotification().hide();}}function getEmailField(){return form.find("#billingDetails_email");}function getFirstNameField(){return form.find("#billingDetails_firstName");}function getLastNameField(){return form.find("#billingDetails_lastName");}function getPhoneField(){return form.find("#billingDetails_phone");}function checkEmail(){return service.checkEmail({Email:getEmailField().val()});}function getGeneralErrorNotification(){return jq$("#generalError");}function saveContactModel(){var checkedTerms=$terms.filter(function(i,el){return el.checked;}).map(function(i,el){return +$(el).val();}).get();var model={Email:getEmailField().val(),FirstName:getFirstNameField().val(),LastName:getLastNameField().val(),Phone:getPhoneField().val(),RulesAndTerms:checkedTerms};getGeneralErrorNotification().hide();getExistEmailNotification().hide();return service.saveContactModel(model);}function disableNextButton(){getNextButton().attr("disabled","disabled");}function enableNextButton(){getNextButton().removeAttr("disabled");}function activatePreload(){disableNextButton();}function deactivatePreload(){enableNextButton();}function onSubmitValidate(errors,evt){if(errors.length>0||!isCheckedTerms()){disableNextButton();}else{enableNextButton();}}function onBlurValidate(errors,evt){var sender=jq$(evt.target);putErrors(errors,sender);}function putErrors(errors,sender){if(!sender.next(".errorField").length){sender.after('<div class="errorField"></div>');}var errorField=sender.next(".errorField");if(errors.length>0){errorField.html(errors[0].message).addClass("errorField__visible");sender.parents(".formFieldContainer").addClass("error");disableNextButton();}else{errorField.removeClass("errorField__visible");sender.parents(".formFieldContainer").removeClass("error");tryEnableNextButton();tryHideNotifications();}}function getExistEmailNotification(){return jq$("#existEmail");}function emailExistErrorRender(){putErrors([{message:"Already used"}],getEmailField());getExistEmailNotification().show();}function checkEmailFailedRender(){getGeneralErrorNotification().show();captchaReset();}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckoutLayoutStep2){window.WaOnlineStoreCheckoutLayoutStep2=OnlineStoreCheckoutLayoutStep2;}function OnlineStoreCheckoutLayoutStep2(service,initModel){var SHIPPING=WaOnlineStoreCheckout.SHIPPING,PICKUP=WaOnlineStoreCheckout.PICKUP;var formName="delivery_details",container=document.getElementById("step-2"),$container=jq$(container),self=this,validator,deliveryOptionId=null,deliveryEnable=initModel.deliveryEnable,deliveryOptions=initModel.deliveryOptions,$shippingAddressContainer=$container.find(".delivery.delivery__shipping-address"),$pickupContainer=$container.find(".delivery.delivery__pickup-address"),$deliveryDetailsForm=$container.find("form[name="+formName+"]"),$shippingAddressContainer=$shippingAddressContainer,$deliveryOptionsContainer=$container.find(".delivery-methods"),$pickupContainer=$container.find(".delivery.delivery__pickup-address"),$deliveryOptionsRadio=$container.find('input[type="radio"][name="delivery-options"]'),deliveryOptionType=null;self.render=render;self.saveForm=saveForm;$deliveryOptionsRadio.on("change",function(){deliveryOptionId=jq$(this).val();var isShipping=jq$(this).hasClass("delivery-method-radio-button_shipping-option");deliveryOptionType=isShipping?SHIPPING:PICKUP;showFormByType(deliveryOptionType);});deliveryOptionId=$deliveryOptionsRadio.first().val();init();function init(){$deliveryOptionsContainer.hide();$pickupContainer.hide();$shippingAddressContainer.hide();if(!deliveryEnable){$container.find(".formFieldContainer.required").removeClass("required");}validatorInit();disableNextButton();if(deliveryEnable){$deliveryOptionsContainer.show();$shippingAddressContainer.show();}else{$shippingAddressContainer.show();}if(deliveryEnable&&deliveryOptions.length>0){$deliveryOptionsRadio.first().attr("checked",true);$deliveryOptionsRadio.first().trigger("change");}}function validatorInit(){if(deliveryEnable){validator=new FormValidator({form:formName,autoConfig:true,validateOnBlur:true,onBlurField:onBlurValidate,onSubmit:onSubmitValidate});}else{validator={isValidateForm:function(){return true;},validateForm:function(){return true;}};}var onChangeField=function(){tryEnableNextButton();};$shippingAddressContainer.find("#shippingAddress_address1").on("input",onChangeField);$shippingAddressContainer.find("#shippingAddress_city").on("input",onChangeField);$shippingAddressContainer.find("#shippingAddress_region").on("input",onChangeField);$shippingAddressContainer.find("#shippingAddress_zipcode").on("input",onChangeField);$shippingAddressContainer.find("#shippingAddress_country").on("change",function(evt){var errors=[],sender=jq$(evt.target);if(deliveryEnable&&!isSelectedCountry()){errors=[{message:"The Country is required"}];}putErrors(errors,sender);tryEnableNextButton();});$deliveryOptionsRadio.on("change",onChangeField);}function onSubmitValidate(errors,evt){if(errors.length>0){disableNextButton();}else{enableNextButton();}}function onBlurValidate(errors,evt){var sender=jq$(evt.target);putErrors(errors,sender);}function putErrors(errors,sender){if(!sender.next(".errorField").length){sender.after('<div class="errorField"></div>');}var errorField=sender.next(".errorField");if(errors.length>0){errorField.html(errors[0].message).addClass("errorField__visible");sender.parents(".formFieldContainer").addClass("error");disableNextButton();}else{errorField.removeClass("errorField__visible");sender.parents(".formFieldContainer").removeClass("error");tryEnableNextButton();}}function showFormByType(optionType){if(optionType===SHIPPING){$pickupContainer.hide();$shippingAddressContainer.show();}else{$pickupContainer.show();$shippingAddressContainer.hide();}}function render(){service.getDeliveryModel().done(function(deliveryModel){var shippingAddress=deliveryModel.shippingAddress;jq$('input[name="delivery-options"][value="'+deliveryOptionId+'"]').prop("checked",true);if(shippingAddress){$shippingAddressContainer.find("#shippingAddress_address1").val(shippingAddress.addressLine1);$shippingAddressContainer.find("#shippingAddress_address2").val(shippingAddress.addressLine2);$shippingAddressContainer.find("#shippingAddress_city").val(shippingAddress.city);$shippingAddressContainer.find("#shippingAddress_country").val(shippingAddress.countryId);$shippingAddressContainer.find("#shippingAddress_region").val(shippingAddress.province);$shippingAddressContainer.find("#shippingAddress_zipcode").val(shippingAddress.zip);}tryEnableNextButton();});}function disableNextButton(){getNextButton().attr("disabled","disabled");}function enableNextButton(){getNextButton().removeAttr("disabled");}function getNextButton(){return $container.find(".wizardNextButton");}function tryEnableNextButton(){if(!deliveryEnable){return enableNextButton();}if((validator.isValidateForm()&&isSelectedCountry())||(deliveryOptionType===PICKUP)){enableNextButton();}else{disableNextButton();}}function getSelectedCountry(){var $countrySelect=$shippingAddressContainer.find("#shippingAddress_country"),countryId=+$countrySelect.val(),countryName="";if(countryId===0){countryId=null;countryName="";}else{countryName=$countrySelect.find("option:selected").text();}return{countryName:countryName,countryId:countryId};}function isSelectedCountry(){var country=getSelectedCountry();return country.countryId!==null;}function saveForm(){var selectedCountry=getSelectedCountry(),countryName=selectedCountry.countryName,countryId=selectedCountry.countryId;var shippingAddress={addressLine1:$shippingAddressContainer.find("#shippingAddress_address1").val(),addressLine2:$shippingAddressContainer.find("#shippingAddress_address2").val(),city:$shippingAddressContainer.find("#shippingAddress_city").val(),countryId:countryId,countryName:countryName,province:$shippingAddressContainer.find("#shippingAddress_region").val(),zip:$shippingAddressContainer.find("#shippingAddress_zipcode").val()};var deliveryModel={shippingAddress:shippingAddress,deliveryOptionId:deliveryOptionId};return service.saveDeliveryModel(deliveryModel);}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckoutLayoutStep3){window.WaOnlineStoreCheckoutLayoutStep3=OnlineStoreCheckoutLayoutStep3;}function OnlineStoreCheckoutLayoutStep3(service,initModel){var SHIPPING=WaOnlineStoreCheckout.SHIPPING,PICKUP=WaOnlineStoreCheckout.PICKUP,DELIVERY_OPTION_TYPES=WaOnlineStoreCheckout.DELIVERY_OPTION_TYPES;var self=this,model,captchaVerify=false,mainContainer=document.getElementById("step-3-content"),captchaEnable=true,captchaWidgetId=undefined,deliveryEnable=initModel.deliveryEnable,recaptchaElementId="recaptchaContainer",$commentInput=jq$("#order_comments"),orderCreateFailedEventName="OrderCreateFailedEvent";self.render=render;self.confirmationRender=confirmationRender;self.onOrderCreateFailed=onOrderCreateFailed;self.showGeneralError=showGeneralError;init();function init(){var $payInvoiceButton=getPayInvoiceButton();var $payOnlineButton=getPayOnlineButton();$payInvoiceButton.on("click",function(){disablePayButtons();payInvoice(captchaVerify);});$payOnlineButton.on("click",function(){disablePayButtons();payOnline(captchaVerify);});captchaInit();}function captchaInit(){if(captchaEnable){var sitekey=getRecaptchaContainer().data("sitekey");captchaWidgetId=grecaptcha.render(recaptchaElementId,{sitekey:sitekey,callback:captchaSuccessCallback});}}function captchaSuccessCallback(responseToken){captchaVerify=responseToken;enablePayButtons();}function getRecaptchaContainer(){return jq$("#"+recaptchaElementId);}function render(){getGeneralErrorNotification().hide();disablePayButtons();captchaReset();service.getConfirmModel().done(function(confirmModel){model=confirmModel;confirmationRender(model);});}function getPayInvoiceButton(){return jq$("#button_pay_invoice");}function getPayOnlineButton(){return jq$("#button_pay_online");}function getGeneralErrorNotification(){return jq$("#generalError");}function confirmationRender(model){mainContainer.innerHTML=confirmationRenderTable(model);}function disablePayButtons(){getPayInvoiceButton().attr("disabled","disabled");getPayOnlineButton().attr("disabled","disabled");}function enablePayButtons(){getPayInvoiceButton().removeAttr("disabled");getPayOnlineButton().removeAttr("disabled");}function captchaReset(){grecaptcha.reset(captchaWidgetId);}function captchaValidationFailureCallback(){showGeneralError();captchaReset();}function patchModel(model){model.comments=$commentInput.val();return model;}function payInvoice(captchaToken){return service.invoiceMe(patchModel(model),captchaToken).done(function(resp){if(!resp.IsReCaptchaValid){captchaValidationFailureCallback();}}).fail(function(data){var err=getErrorData(data);if(err.errorType=="NotEnoughStock"){jq$.event.trigger(orderCreateFailedEventName);}else{showGeneralError();}});}function payOnline(captchaToken){return service.payOnline(patchModel(model),captchaToken).done(function(resp){if(!resp.IsReCaptchaValid){captchaValidationFailureCallback();}}).fail(function(data){var err=getErrorData(data);if(err.errorType=="NotEnoughStock"){jq$.event.trigger(orderCreateFailedEventName);}else{showGeneralError();}});}function getErrorData(data){try{return JSON.parse(data.responseText).data;}catch(e){return data.responseText;}}function showGeneralError(){getGeneralErrorNotification().show();}function confirmationRenderTable(model){var html=[];html.push('<table class="storeCartTable">');html.push(confirmationRenderItems(model.cart.items));if(deliveryEnable&&model.deliveryModel&&model.deliveryModel.deliveryOptionId){html.push(confirmationRenderDelivery(model.deliveryModel));}html.push(confirmationRenderTotal(model.cart));html.push("</table>");html.push(deliveryInformationRender(model));return html.join("");}function confirmationRenderItems(items){var html=[],i,length=items.length;for(i=0;i<length;i++){html.push(confirmationRenderItem(items[i]));}return html.join("");}function renderImage(item){var html=[];if(item.pictureUrl){html.push('<img src="',item.pictureUrl,'" width="100"/>');}else{html.push('<div class="storeCartTable_img storeCartTable_no_img" title="No photo"></div>');}return html.join("");}function getItemUrl(productId){return initModel.productDetailsUrl+"/"+productId;}function renderPrice(price){var fixedPrice=price?price.toFixed(2):"0.0";if(initModel.currencySymbol){return'<span class="priceContainer">'+initModel.currencySymbol+fixedPrice+"</span>";}else{return'<span class="priceContainer">'+fixedPrice+" "+initModel.currency+"</span>";}}function confirmationRenderItem(item){var html=[];html.push('<tr class="storeCartTable_row">');html.push('<td class="storeCartTable_tdImage">',renderImage(item),"</td>");html.push('<td class="storeCartTable_tdTitle">');html.push('<div class="storeCartTable_itemTitle">',item.title,"</div>");html.push(renderOptions(item));html.push("</td>");html.push('<td class="storeCartTable_tdPprice">',renderPrice(item.price),"</td>");html.push('<td class="storeCartTable_tdQuantity qtyLabel">',item.quantity,"</td>");html.push('<td class="storeCartTable_tdAmount">',renderPrice(item.total),"</td>");html.push("</tr>");return html.join("");}function confirmationRenderDelivery(deliveryModel){var html=[];var deliveryOption=currentDeliveryOption(deliveryModel.deliveryOptionId,initModel.deliveryOptions);html.push('<tr class="storeCartTable_row">');html.push('<td class="storeCartTable_tdImage"></td>');html.push('<td class="storeCartTable_tdTitle">');html.push('<div class="storeCartTable_itemTitle">Delivery: ',deliveryOption.title,"</div>");html.push("</td>");html.push('<td class="storeCartTable_tdPprice"></td>');html.push('<td class="storeCartTable_tdQuantity"></td>');html.push('<td class="storeCartTable_tdAmount">',renderPrice(deliveryOption.price),"</td>");html.push("</tr>");return html.join("");}function renderOption(option){return'<div class="storeCartTable_itemOption">'+option.title+": "+option.value+"</div>";}function renderOptions(item){if(!item.options){return"";}return jq$.map(item.options,function(option,i){return renderOption(option);}).join("");}function confirmationRenderTotal(cart){var html=[];var total=cart.total;var subTotal=cart.subTotal;var isTaxesApplied=cart.isTaxesApplied||false;var isTaxesIncludedTotal=cart.isTaxesIncludedTotal||false;var taxes=cart.taxes||[];if(initModel.taxesEnable&&isTaxesApplied&&!isTaxesIncludedTotal){html.push('<tr class="storeCartTotalInfoRowFirst">');html.push('<td colspan="4" class="storeCartTable_totalLabel">Subtotal:</td>');if(initModel.currencySymbol){html.push('<td class="storeCartTable_totalValue">',initModel.currencySymbol,subTotal.toFixed(2),"</td>");}else{html.push('<td class="storeCartTable_totalValue">',subTotal.toFixed(2)," ",initModel.currency,"</td>");}html.push("</tr>");html.push(renderTaxes(taxes,isTaxesIncludedTotal));}if(total){if(!isTaxesIncludedTotal){html.push('<tr class="storeCartTotalInfoRow">');}else{html.push('<tr class="storeCartTotalInfoRowFirst">');}html.push('<td colspan="4" class="storeCartTable_totalLabel">Total:</td>');if(initModel.currencySymbol){html.push('<td class="storeCartTable_totalValue">',initModel.currencySymbol,total.toFixed(2),"</td>");}else{html.push('<td class="storeCartTable_totalValue">',total.toFixed(2)," ",initModel.currency,"</td>");}html.push("</tr>");}if(initModel.taxesEnable&&isTaxesApplied&&isTaxesIncludedTotal){html.push(renderTaxes(taxes,isTaxesIncludedTotal));}return html.join("");}function renderTaxes(taxes,isTaxesIncludedTotal){var html=[];for(var taxIndex in taxes){var tax=taxes[taxIndex];var taxLabel=tax.title+":";if(isTaxesIncludedTotal){taxLabel="Incl."+tax.title+":";}html.push('<tr class="storeCartTotalInfoRow">');html.push('<td colspan="4" class="storeCartTable_totalLabel">',taxLabel,"</td>");if(initModel.currencySymbol){html.push('<td class="storeCartTable_totalValue">',initModel.currencySymbol,tax.amount.toFixed(2),"</td>");}else{html.push('<td class="storeCartTable_totalValue">',tax.amount.toFixed(2)," ",initModel.currency,"</td>");}html.push("</tr>");}return html.join("");}function enc(val){return BonaPage.encodeHtml(val);}function onOrderCreateFailed(actionFunc){jq$(document).bind(orderCreateFailedEventName,actionFunc);}function currentDeliveryOption(deliveryOptionId,deliveryOptions){deliveryOptions=deliveryOptions.filter(function(option){return +option.id===+deliveryOptionId;})[0];return deliveryOptions||{title:null,optionId:null,type:null};}function deliveryInformationRender(model){var shippingAddress,deliveryOption,withShipping=true,html=[],owner=(model.billingDetails||{});shippingAddress=model.deliveryModel.shippingAddress||model.shippingAddress;if(deliveryEnable){deliveryOption=currentDeliveryOption(model.deliveryModel.deliveryOptionId,initModel.deliveryOptions);withShipping=DELIVERY_OPTION_TYPES[SHIPPING]===deliveryOption.type;}else{withShipping=!!shippingAddress;}html.push("<h2>Billing and shipping information</h2>");html.push("<p><strong>Billing details</strong><br />");html.push(enc(owner.FirstName)," ",enc(owner.LastName)," ",enc(owner.Email),"<br/>");if(owner.Phone){html.push(enc(owner.Phone),"<br/>");}html.push("</p>");if(withShipping){html.push("<p><strong>Shipping address</strong><br/>");if(shippingAddress.addressLine1){html.push(enc(shippingAddress.addressLine1)," ");}if(shippingAddress.addressLine2){html.push(enc(shippingAddress.addressLine2)," ");}if(shippingAddress.addressLine1||shippingAddress.addressLine2){html.push("<br/>");}var countryName=(shippingAddress.countryName!=="< Select >")?enc(shippingAddress.countryName):"";html.push(enc(shippingAddress.city)," ",enc(shippingAddress.province)," ",countryName," ",enc(shippingAddress.zip),"<br />");html.push("</p>");}html.push("<p>&nbsp;</p>");return html.join("");}}})(window,window.WA);(function(window,WA,undefined){if(!window.WaOnlineStoreCheckoutService){window.WaOnlineStoreCheckoutService=OnlineStoreCheckoutService;}function OnlineStoreCheckoutService(serviceCart){var cache={},cacheKey={billingDetails:"billingDetails",deliveryModel:"deliveryModel",rulesAndTerms:"rulesAndTerms"},gateway=new WaOnlineStoreCheckoutGateway(),self=this;var defaultShippingAddressModel={addressLine1:null,addressLine2:null,city:null,countryId:null,province:null,zip:null};var defaultDeliveryModel={shippingAddressModel:defaultShippingAddressModel,deliveryOptionId:null};self.invoiceMe=invoiceMe;self.payOnline=payOnline;self.checkEmail=checkEmail;self.saveContactModel=saveContactModel;self.getContactModel=getContactModel;self.getShippingAddressModel=getShippingAddressModel;self.getDeliveryModel=getDeliveryModel;self.saveDeliveryModel=saveDeliveryModel;self.getConfirmModel=getConfirmModel;cache.get=function(key){var serialized=localStorage.getItem(key);if(typeof serialized!=="string"){return undefined;}try{return JSON.parse(serialized);}catch(e){console.log(e);return serialized||undefined;}};cache.remove=function(key){localStorage.removeItem(key);};cache.set=function(key,value){var serialized=JSON.stringify(value);try{localStorage.setItem(key,serialized);}catch(e){console.log(e);}};function getShippingAddressModel(){var model=cache.get(cacheKey.deliveryModel);if(model){return jq$.Deferred().resolve(model.shippingAddress||defaultShippingAddressModel);}else{return defaultShippingAddressModel;}}function getDeliveryModel(){var model=cache.get(cacheKey.deliveryModel);return jq$.Deferred().resolve(model||defaultDeliveryModel);}function saveDeliveryModel(model){cache.set(cacheKey.deliveryModel,model);return jq$.Deferred().resolve(model);}function resetAllData(){serviceCart.resetCart();cache.remove(cacheKey.deliveryModel);cache.remove(cacheKey.billingDetails);}function invoiceMe(checkoutModel,captchaToken){var data={CheckoutModel:checkoutModel,Captcha:captchaToken};return gateway.invoiceMe(data).fail(payFailed).done(paySuccess);}function payOnline(checkoutModel,captchaToken){var data={CheckoutModel:checkoutModel,Captcha:captchaToken};return gateway.payOnline(data).fail(payFailed).done(paySuccess);}function paySuccess(data){if(data.IsReCaptchaValid&&data.RedirectUrl){resetAllData();window.location=data.RedirectUrl;}}function payFailed(data,textStatus){console.log("Failed!",data,textStatus);}function checkEmail(model){return gateway.checkEmail(model);}function getContactModel(){var model=cache.get(cacheKey.billingDetails);return jq$.Deferred().resolve(model||{});}function saveContactModel(model){var contactModel=cache.get(cacheKey.billingDetails);var billingDetails=jq$.extend(contactModel,model);cache.set(cacheKey.billingDetails,billingDetails);return jq$.Deferred().resolve(billingDetails);}function getConfirmModel(){var def=jq$.Deferred();getContactModel().done(function(billingDetails){getDeliveryModel().done(function(deliveryModel){serviceCart.loadCurrent(deliveryModel.deliveryOptionId).done(function(cart){def.resolve({billingDetails:billingDetails,deliveryModel:deliveryModel,cart:cart});});});});return def;}}})(window,window.WA);jq$(function(){if(!window.currentProduct){window.currentProduct={id:0};}if(window.currentProduct.id>0){var cartService=WaOnlineStoreCart.getInstance(),cartUrl="/Sys/Store/Cart",cartKey="OnlineStoreCart",buttonAdd=document.getElementById("OnlineStoreProduct_addToCart"),outOfStockLabel=document.getElementById("idOnlineStoreCatalog_OutOfStock_container"),buttonView=document.getElementById("OnlineStoreProduct_viewCart"),inputQty=document.getElementById("idInputQuantity"),qtyLimitContainer=document.getElementById("idOnlineStoreCatalog_QuantityLimitContainer"),qtyLimit=document.getElementById("idOnlineStoreCatalog_QuantityLimit"),quantitySnippet=document.querySelector(".quantitySnippet");options=document.querySelectorAll("SELECT.OnlineStoreProduct_optionsSelect"),optionErrorLabels={},variantsModel={};for(var i=options.length-1;i>=0;i--){var option=options[i];var errorLabel=document.getElementById("idOnlineStoreProduct_Option"+option.getAttribute("option-id")+"_ErrorLabel");optionErrorLabels[option.getAttribute("option-id")]=errorLabel;}if(!window.currentProduct.outOfStock){quantitySnippet.onclick=function(event){var target=event.target,value;if(target.className.indexOf("quantity-button")!==-1){value=getQuantity();value+=target.className.indexOf("quantity-up")>=0?1:-1;inputQty.value=value;inputQty.oninput();}};}if(!window.currentProduct.outOfStock){inputQty.oninput=function(){var value=getQuantity(),min=parseInt(inputQty.getAttribute("min"));if(value<min){value=min;}inputQty.value=value;};}buttonView.onclick=function(e){document.location=cartUrl;e.preventDefault();return false;};buttonAdd.onclick=function(){if(!validate()){return false;}var variant=getVariant(),variantId=null,quantity=getQuantity();if(variant){variantId=variant.id;}if(quantity>0){cartService.add(currentProduct.id,variantId,quantity).fail(function(error){console.log(error);}).done(update);}return false;};cartService.load().fail(function(error){console.log(error);}).done(update);function getVariant(selectedOptions){if(!selectedOptions){selectedOptions=getSelectedOptions();}if(!selectedOptions||selectedOptions.length==0||!currentProduct.variants||currentProduct.variants.length==0){return null;}var variant=null;for(var i=currentProduct.variants.length-1;i>=0;i--){var optionValues=currentProduct.variants[i].options;var isMatch=true;for(var j=selectedOptions.length-1;j>=0;j--){var found=false;for(var k=optionValues.length-1;k>=0;k--){if(optionValues[k].title==selectedOptions[j].title&&optionValues[k].value==selectedOptions[j].value){found=true;break;}}if(!found){isMatch=false;break;}}if(isMatch){variant=currentProduct.variants[i];}}return variant;}function getSelectedOptions(){var selectedOptions=[];for(var i=options.length-1;i>=0;i--){var option=options[i];selectedOptions.push({title:option.getAttribute("option-title"),value:option.value});}return selectedOptions;}function getQuantity(){var value=parseInt(inputQty.value);return value>0?value:1;}function getProductsInCartQuantity(cart){if(!cart){return;}var quantity=0;cart.items.forEach(function(item){quantity+=item.quantity;});return quantity;}function init(){for(var i=options.length-1;i>=0;i--){var optionSelect=options[i];optionSelect.onchange=function(event){var hasValue=event.target.value!="";optionErrorLabels[event.target.getAttribute("option-id")].style.display=hasValue?"none":"block";var variant=getVariant();setVariantData(variant);};}}function setVariantData(variant){if(!variant){outOfStockLabel.style.display="none";qtyLimitContainer.style.visibility="hidden";buttonAdd.disabled=true;return;}qtyLimitContainer.style.visibility=variant.outOfStock||!variant.stock?"hidden":"visible";qtyLimit.innerText=variant.stock;outOfStockLabel.style.display=variant.outOfStock?"block":"none";buttonAdd.disabled=variant.outOfStock;}function validate(){var isValid=false;var errors=getValidationErrors();isValid=errors.length==0;displayErrorState(errors);return isValid;}function getValidationErrors(){var errors=[];var selectedOptions=[];if(options.length==0){return errors;}for(var i=options.length-1;i>=0;i--){var option=options[i];if(option.selectedIndex==0){errors.push({type:"option",id:option.getAttribute("option-id")});}else{selectedOptions.push({title:option.getAttribute("option-title"),value:option.value});}}if(errors.length>0){return errors;}var variant=getVariant(selectedOptions);if(variant&&variant.outOfStock){return[{type:"outOfStock"}];}return errors;}function displayErrorState(errors){for(var i=optionErrorLabels.length-1;i>=0;i--){optionErrorLabels[i].style.display="none";}for(var i=errors.length-1;i>=0;i--){var error=errors[i];switch(error.type){case"option":optionErrorLabels[error.id].style.display="block";break;case"outOfStock":outOfStockLabel.style.display="block";break;}}buttonAdd.disabled=errors.length>0;}function update(){var cart,currentProduct,productsInCartQuantity,currentProductQuantity,currentProductQuantityLimit;cart=JSON.parse(localStorage.getItem(cartKey));productsInCartQuantity=getProductsInCartQuantity(cart);updateViewInCartText(productsInCartQuantity);}function updateViewInCartText(value){if(typeof value!=="number"){return;}buttonView.textContent=value>0?"View cart ("+value+")":"View cart";}function quantityLimitElement(options){var self=this,main=options.element,delay=options.delay||400;self.hide=hide;self.show=show;self.text=text;function hide(){if(main){main.style.display="none";}}function show(){if(main){main.style.display="block";setTimeout(hide,delay);}}function text(value){if(main){main.textContent=value;}}}var coverContainer=document.querySelector(".OnlineStoreProduct_gallery_cover_container"),coverImg=document.getElementById("OnlineStoreProduct_gallery_cover_img"),thumbs=document.getElementById("OnlineStoreProduct_gallery_thumbs");if(thumbs){thumbs.onclick=function(e){var target=e.target;while(target!=this){if(target.nodeName=="A"){showThumbnail(target.href,target.title);return false;}target=target.parentNode;}};var imgs=thumbs.getElementsByTagName("img");for(var i=0;i<imgs.length;i++){var img=document.createElement("img");img.src=imgs[i].parentNode.href;}}function showThumbnail(href,title){coverImg.src=href;coverImg.alt=title;coverContainer.href=href;}init();}});(function(window,WA,undefined){if(!window.WaPollValidator){window.WaPollValidator=PollValidator;}function PollValidator(){var self=this,pollGadgetSelector=".WaGadgetPoll",questionBlockSelector=".votingBlock";init();function init(){jq$(pollGadgetSelector).on("click","form input[type=submit]",onSubmitPoll);jq$(pollGadgetSelector).on("click","form input[type=checkbox], form input[type=radio]",onPressCheckbox);}function onSubmitPoll(e){var questionNodes=[].slice.call(document.querySelectorAll(pollGadgetSelector+" "+questionBlockSelector)),result=true;questionNodes.forEach(function(item,i,arr){if(checkQuestionNode(item)===false){result=false;}});return result;}function checkQuestionNode(questionNode){var limit=getLimitForQuestion(questionNode),selected=getCheckedOptions(questionNode);if(selected<1){showError(questionNode,"Select at least one option");return false;}if(limit>0&&selected>limit){showError(questionNode,"Maximum "+limit+" options");return false;}return true;}function onPressCheckbox(e){var questionNode=e.target.closest(questionBlockSelector),limit=getLimitForQuestion(questionNode),selected=getCheckedOptions(questionNode);if(selected>0&&(selected<=limit||limit==0)){hideError(questionNode);}}function getLimitForQuestion(questionNode){return +questionNode.getAttribute("data-limit")||0;}function getCheckedOptions(questionNode){return questionNode.querySelectorAll(".optionItem input[type=checkbox]:checked, .optionItem input[type=radio]:checked").length||0;}function showError(questionNode,text){if(text){questionNode.querySelector(".errorMsg").innerHTML=text;}questionNode.querySelector(".errorMsg").style.display="block";}function hideError(questionNode){questionNode.querySelector(".errorMsg").style.display="none";}}var instance;PollValidator.getInstance=function(){return instance||(instance=new PollValidator());};})(window,window.WA);(function(ELEMENT){ELEMENT.matches=ELEMENT.matches||ELEMENT.mozMatchesSelector||ELEMENT.msMatchesSelector||ELEMENT.oMatchesSelector||ELEMENT.webkitMatchesSelector;ELEMENT.closest=ELEMENT.closest||function closest(selector){if(!this){return null;}if(this.matches(selector)){return this;}if(!this.parentElement){return null;}else{return this.parentElement.closest(selector);}};}(Element.prototype));(function(){if(!window.WASearchResultsGadget){window.WASearchResultsGadget=WASearchResultsGadget;}function WASearchResultsGadget(args){var pThis=this;pThis.init=init;pThis.doSearch=doSearch;var model,foundLabel,searchBox,resultDiv,foundRecordsSpan,recordsFoundMessage,pager,selectedTypesCaption,searchInProgress,thereWasAnotherRequest;model=args||{};function init(){if(model.searchUnavailable==true){return;}var prefix="#"+model.modelId;searchInProgress=false;thereWasAnotherRequest=false;searchBox=jq$(prefix+"_searchBox");resultDiv=jq$(prefix+"_resultDiv");foundLabel=jq$(prefix+"_foundLabel");foundRecordsSpan=jq$(prefix+"_foundRecords");recordsFoundMessage=jq$(prefix+"_recordsFoundMessage");selectedTypesCaption=jq$(prefix+"_selectedTypesCaption");pager=jq$(prefix+"_pager");$("input[name="+model.modelId+"_type]").on("click",checkedChanged);$(prefix+"_togglePanelLink").on("click",function(){jq$(prefix+"_contentTypesPanel").slideToggle(100);jq$(this).toggleClass("fa-caret-down","fa-caret-right");});var timer;var delay=600;searchBox.bind("input",function(){window.clearTimeout(timer);timer=window.setTimeout(function(){doSearch(1);},delay);});searchBox.focus();if(searchBox.val().length>0){doSearch(model.pageNumber);}}function doSearch(pageNum){if(!pageNum){return;}thereWasAnotherRequest=false;if(searchBox.val().length==0){setEmptyResult();return;}var filter=getSelectedTypes();if(filter==0){setEmptyResult();return;}if(searchInProgress){thereWasAnotherRequest=true;return;}searchInProgress=true;foundRecordsSpan.html(model.text.searchInProgress);jq$.ajax({type:"POST",url:model.searchActionUrl,data:JSON.stringify({"q":searchBox.val(),"types":filter,"pageNumber":pageNum,"noPaging":model.noPaging}),contentType:"application/json; charset=utf-8",dataType:"text"}).done(function(data){searchInProgress=false;if(thereWasAnotherRequest){doSearch(1);}else{foundLabel.show();var jsonData=JSON.parse(data.replace("while(1); ","","i").trim());if(jsonData.entities.length>0){renderResult(jsonData);}else{setEmptyResult();}var url=WA.String.format(model.getUrlTemplate,encodeURIComponent(searchBox.val()),filter,pageNum);if(model.noPaging==true){url=url+"&nopaging=true";}window.history.replaceState({},"",url);}}).fail(function(){searchInProgress=false;if(thereWasAnotherRequest){doSearch(1);}else{recordsFoundMessage.html("Search is not available now.");}});}function checkedChanged(){refreshSelectedTypesCaption();doSearch(1);}function refreshSelectedTypesCaption(){var all=true;var captions=new Array();$("input[name="+model.modelId+"_type]").each(function(){if($(this).attr("checked")=="checked"){captions.push($("label[for="+$(this).attr("id")+"]:first").text());}else{all=false;}});var text="";if(all){text="all";}else{if(captions.length==0){text="none";}else{text=captions.join(", ");}}selectedTypesCaption.html(WA.String.format(model.text.contentTypeTemplate,text));}function getSelectedTypes(){var filter=0;$("input[name="+model.modelId+"_type]:checked").each(function(){filter=filter|$(this).attr("value");});return filter;}function setEmptyResult(){setFoundRecords(0,model.text.noResultsFound);resultDiv.html("");pager.html("");}function renderResult(data){var items=data.entities;var a=new Array();for(var i=0;i<items.length;i++){var o=items[i];var text=o.text;a.push('<div class="row">');a.push('<div class="title"><a class="'+o.className+'" title="'+o.tooltip+'" href="'+o.url+'"><span>'+o.title+"</span></a></div>");a.push('<div class="text">'+o.text+"</div>");if(o.additionalInfo!=""){a.push('<div class="additionalInfo">'+o.additionalInfo+"</div>");}a.push("</div>");}resultDiv.html(a.join(""));setFoundRecords(data.recordsFound,data.recordsFoundMessage);renderPager(parseInt(data.pagesFound),parseInt(data.currentPage),9);}function setFoundRecords(recordsFound,message){foundRecordsSpan.html(""+recordsFound+"");recordsFoundMessage.html(message);}function renderPager(pagesCount,currentPage,pagesToDisplay){if(pagesCount==1){pager.html("");return;}var pagerItems=[];pagerItems.push({text:model.text.first,page:currentPage==1?null:1});pagerItems.push({text:model.text.previous,page:currentPage==1?null:currentPage-1});var firstPage,lastPage;if(pagesCount<pagesToDisplay){firstPage=1;lastPage=pagesCount;}else{firstPage=Math.min(currentPage-Math.floor(pagesToDisplay/2),pagesCount-pagesToDisplay+1);if(firstPage<1){firstPage=1;}lastPage=firstPage+pagesToDisplay-1;}for(var i=firstPage;i<=lastPage;i++){pagerItems.push({text:i,page:currentPage==i?null:i});}pagerItems.push({text:model.text.next,page:currentPage==pagesCount?null:currentPage+1});pagerItems.push({text:model.text.last,page:currentPage==pagesCount?null:pagesCount});var arr=renderPagerItems(pagerItems);}function renderPagerItems(jsonArr){var i,linkElements,a=new Array();WA.Array.foreach(jsonArr,function(item){if(item.page){a.push('<a style="cursor: pointer;" data-page="'+item.page+'">'+item.text+"</a>");}else{a.push("<span>"+item.text+"</span>");}});pager.html(a.join("&nbsp;&nbsp;"));linkElements=document.body.querySelectorAll("A[data-page]");for(i=0;i<linkElements.length;i++){WA.addHandler(linkElements[i],"click",gotoPage);}}function gotoPage(e){var targetElement;if(!e&&event){e=event;}if(e){targetElement=e.target||e.srcElement;if(targetElement){doSearch(targetElement.getAttribute("data-page"));}}}init();}})();jq$(function(){if(jq$(".WaPlaceHolderSidebar").length>0){jq$(".zoneMain .upcomingEventsStyle003, .zoneMain .upcomingEventsStyle006").find("ul").slick({dots:true,speed:300,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});jq$(".WaPlaceHolderSidebar .upcomingEventsStyle003, .WaPlaceHolderSidebar .upcomingEventsStyle006").find("ul").slick({dots:true,speed:300,slidesToShow:1,slidesToScroll:1});}else{jq$(".upcomingEventsStyle003, .upcomingEventsStyle006").find("ul").slick({dots:true,speed:300,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});}});