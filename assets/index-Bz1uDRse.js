function cb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ww={exports:{}},Fd={},qw={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bl=Symbol.for("react.element"),db=Symbol.for("react.portal"),fb=Symbol.for("react.fragment"),hb=Symbol.for("react.strict_mode"),pb=Symbol.for("react.profiler"),mb=Symbol.for("react.provider"),gb=Symbol.for("react.context"),vb=Symbol.for("react.forward_ref"),yb=Symbol.for("react.suspense"),wb=Symbol.for("react.memo"),_b=Symbol.for("react.lazy"),zv=Symbol.iterator;function Eb(t){return t===null||typeof t!="object"?null:(t=zv&&t[zv]||t["@@iterator"],typeof t=="function"?t:null)}var Kw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gw=Object.assign,Qw={};function Hs(t,e,n){this.props=t,this.context=e,this.refs=Qw,this.updater=n||Kw}Hs.prototype.isReactComponent={};Hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yw(){}Yw.prototype=Hs.prototype;function pm(t,e,n){this.props=t,this.context=e,this.refs=Qw,this.updater=n||Kw}var mm=pm.prototype=new Yw;mm.constructor=pm;Gw(mm,Hs.prototype);mm.isPureReactComponent=!0;var $v=Array.isArray,Xw=Object.prototype.hasOwnProperty,gm={current:null},Jw={key:!0,ref:!0,__self:!0,__source:!0};function Zw(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Xw.call(e,r)&&!Jw.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Bl,type:t,key:o,ref:s,props:i,_owner:gm.current}}function Tb(t,e){return{$$typeof:Bl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bl}function Ib(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hv=/\/+/g;function $f(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ib(""+t.key):e.toString(36)}function Tc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Bl:case db:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+$f(s,0):r,$v(i)?(n="",t!=null&&(n=t.replace(Hv,"$&/")+"/"),Tc(i,e,n,"",function(f){return f})):i!=null&&(vm(i)&&(i=Tb(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Hv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",$v(t))for(var l=0;l<t.length;l++){o=t[l];var u=r+$f(o,l);s+=Tc(o,e,n,u,i)}else if(u=Eb(t),typeof u=="function")for(t=u.call(t),l=0;!(o=t.next()).done;)o=o.value,u=r+$f(o,l++),s+=Tc(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Wu(t,e,n){if(t==null)return t;var r=[],i=0;return Tc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function bb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},Ic={transition:null},Sb={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:Ic,ReactCurrentOwner:gm};function e_(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:Wu,forEach:function(t,e,n){Wu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wu(t,function(){e++}),e},toArray:function(t){return Wu(t,function(e){return e})||[]},only:function(t){if(!vm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=Hs;pe.Fragment=fb;pe.Profiler=pb;pe.PureComponent=pm;pe.StrictMode=hb;pe.Suspense=yb;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sb;pe.act=e_;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gw({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=gm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Xw.call(e,u)&&!Jw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var f=0;f<u;f++)l[f]=arguments[f+2];r.children=l}return{$$typeof:Bl,type:t.type,key:i,ref:o,props:r,_owner:s}};pe.createContext=function(t){return t={$$typeof:gb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mb,_context:t},t.Consumer=t};pe.createElement=Zw;pe.createFactory=function(t){var e=Zw.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:vb,render:t}};pe.isValidElement=vm;pe.lazy=function(t){return{$$typeof:_b,_payload:{_status:-1,_result:t},_init:bb}};pe.memo=function(t,e){return{$$typeof:wb,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=Ic.transition;Ic.transition={};try{t()}finally{Ic.transition=e}};pe.unstable_act=e_;pe.useCallback=function(t,e){return Bt.current.useCallback(t,e)};pe.useContext=function(t){return Bt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)};pe.useEffect=function(t,e){return Bt.current.useEffect(t,e)};pe.useId=function(){return Bt.current.useId()};pe.useImperativeHandle=function(t,e,n){return Bt.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return Bt.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return Bt.current.useReducer(t,e,n)};pe.useRef=function(t){return Bt.current.useRef(t)};pe.useState=function(t){return Bt.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return Bt.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return Bt.current.useTransition()};pe.version="18.3.1";qw.exports=pe;var X=qw.exports;const Ud=hm(X),kb=cb({__proto__:null,default:Ud},[X]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ab=X,Cb=Symbol.for("react.element"),Pb=Symbol.for("react.fragment"),Rb=Object.prototype.hasOwnProperty,xb=Ab.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ob={key:!0,ref:!0,__self:!0,__source:!0};function t_(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Rb.call(e,r)&&!Ob.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Cb,type:t,key:o,ref:s,props:i,_owner:xb.current}}Fd.Fragment=Pb;Fd.jsx=t_;Fd.jsxs=t_;Ww.exports=Fd;var j=Ww.exports,Nh={},n_={exports:{}},an={},r_={exports:{}},i_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(Y,K){var le=Y.length;Y.push(K);e:for(;0<le;){var xe=le-1>>>1,be=Y[xe];if(0<i(be,K))Y[xe]=K,Y[le]=be,le=xe;else break e}}function n(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var K=Y[0],le=Y.pop();if(le!==K){Y[0]=le;e:for(var xe=0,be=Y.length,Fe=be>>>1;xe<Fe;){var V=2*(xe+1)-1,bn=Y[V],Ht=V+1,cn=Y[Ht];if(0>i(bn,le))Ht<be&&0>i(cn,bn)?(Y[xe]=cn,Y[Ht]=le,xe=Ht):(Y[xe]=bn,Y[V]=le,xe=V);else if(Ht<be&&0>i(cn,le))Y[xe]=cn,Y[Ht]=le,xe=Ht;else break e}}return K}function i(Y,K){var le=Y.sortIndex-K.sortIndex;return le!==0?le:Y.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],f=[],p=1,y=null,w=3,A=!1,x=!1,N=!1,M=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(Y){for(var K=n(f);K!==null;){if(K.callback===null)r(f);else if(K.startTime<=Y)r(f),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(f)}}function F(Y){if(N=!1,P(Y),!x)if(n(u)!==null)x=!0,Ve(z);else{var K=n(f);K!==null&&Xt(F,K.startTime-Y)}}function z(Y,K){x=!1,N&&(N=!1,k(E),E=-1),A=!0;var le=w;try{for(P(K),y=n(u);y!==null&&(!(y.expirationTime>K)||Y&&!O());){var xe=y.callback;if(typeof xe=="function"){y.callback=null,w=y.priorityLevel;var be=xe(y.expirationTime<=K);K=t.unstable_now(),typeof be=="function"?y.callback=be:y===n(u)&&r(u),P(K)}else r(u);y=n(u)}if(y!==null)var Fe=!0;else{var V=n(f);V!==null&&Xt(F,V.startTime-K),Fe=!1}return Fe}finally{y=null,w=le,A=!1}}var q=!1,S=null,E=-1,I=5,C=-1;function O(){return!(t.unstable_now()-C<I)}function L(){if(S!==null){var Y=t.unstable_now();C=Y;var K=!0;try{K=S(!0,Y)}finally{K?R():(q=!1,S=null)}}else q=!1}var R;if(typeof T=="function")R=function(){T(L)};else if(typeof MessageChannel<"u"){var $t=new MessageChannel,rr=$t.port2;$t.port1.onmessage=L,R=function(){rr.postMessage(null)}}else R=function(){M(L,0)};function Ve(Y){S=Y,q||(q=!0,R())}function Xt(Y,K){E=M(function(){Y(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Y){Y.callback=null},t.unstable_continueExecution=function(){x||A||(x=!0,Ve(z))},t.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Y?Math.floor(1e3/Y):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(Y){switch(w){case 1:case 2:case 3:var K=3;break;default:K=w}var le=w;w=K;try{return Y()}finally{w=le}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(Y,K){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var le=w;w=Y;try{return K()}finally{w=le}},t.unstable_scheduleCallback=function(Y,K,le){var xe=t.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?xe+le:xe):le=xe,Y){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=le+be,Y={id:p++,callback:K,priorityLevel:Y,startTime:le,expirationTime:be,sortIndex:-1},le>xe?(Y.sortIndex=le,e(f,Y),n(u)===null&&Y===n(f)&&(N?(k(E),E=-1):N=!0,Xt(F,le-xe))):(Y.sortIndex=be,e(u,Y),x||A||(x=!0,Ve(z))),Y},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(Y){var K=w;return function(){var le=w;w=K;try{return Y.apply(this,arguments)}finally{w=le}}}})(i_);r_.exports=i_;var Nb=r_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Db=X,on=Nb;function W(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o_=new Set,sl={};function ko(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(sl[t]=e,t=0;t<e.length;t++)o_.add(e[t])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dh=Object.prototype.hasOwnProperty,Lb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wv={},qv={};function Mb(t){return Dh.call(qv,t)?!0:Dh.call(Wv,t)?!1:Lb.test(t)?qv[t]=!0:(Wv[t]=!0,!1)}function Vb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fb(t,e,n,r){if(e===null||typeof e>"u"||Vb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function zt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ym=/[\-:]([a-z])/g;function wm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ym,wm);bt[e]=new zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ym,wm);bt[e]=new zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ym,wm);bt[e]=new zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new zt(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _m(t,e,n,r){var i=bt.hasOwnProperty(e)?bt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fb(e,n,i,r)&&(n=null),r||i===null?Mb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Lr=Db.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qu=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),Em=Symbol.for("react.strict_mode"),Lh=Symbol.for("react.profiler"),s_=Symbol.for("react.provider"),a_=Symbol.for("react.context"),Tm=Symbol.for("react.forward_ref"),Mh=Symbol.for("react.suspense"),Vh=Symbol.for("react.suspense_list"),Im=Symbol.for("react.memo"),ti=Symbol.for("react.lazy"),l_=Symbol.for("react.offscreen"),Kv=Symbol.iterator;function Ia(t){return t===null||typeof t!="object"?null:(t=Kv&&t[Kv]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,Hf;function Na(t){if(Hf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hf=e&&e[1]||""}return`
`+Hf+t}var Wf=!1;function qf(t,e){if(!t||Wf)return"";Wf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var r=f}Reflect.construct(t,[],e)}else{try{e.call()}catch(f){r=f}t.call(e.prototype)}else{try{throw Error()}catch(f){r=f}t()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=l);break}}}finally{Wf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Na(t):""}function Ub(t){switch(t.tag){case 5:return Na(t.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return t=qf(t.type,!1),t;case 11:return t=qf(t.type.render,!1),t;case 1:return t=qf(t.type,!0),t;default:return""}}function Fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case Lh:return"Profiler";case Em:return"StrictMode";case Mh:return"Suspense";case Vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case a_:return(t.displayName||"Context")+".Consumer";case s_:return(t._context.displayName||"Context")+".Provider";case Tm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Im:return e=t.displayName||null,e!==null?e:Fh(t.type)||"Memo";case ti:e=t._payload,t=t._init;try{return Fh(t(e))}catch{}}return null}function jb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fh(e);case 8:return e===Em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function u_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Bb(t){var e=u_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ku(t){t._valueTracker||(t._valueTracker=Bb(t))}function c_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=u_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uh(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function d_(t,e){e=e.checked,e!=null&&_m(t,"checked",e,!1)}function jh(t,e){d_(t,e);var n=bi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bh(t,e.type,bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bh(t,e,n){(e!=="number"||Wc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Da=Array.isArray;function vs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(W(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(W(92));if(Da(n)){if(1<n.length)throw Error(W(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bi(n)}}function f_(t,e){var n=bi(e.value),r=bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function h_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?h_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gu,p_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Gu=Gu||document.createElement("div"),Gu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Gu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function al(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zb=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(t){zb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ha[e]=Ha[t]})});function m_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ha.hasOwnProperty(t)&&Ha[t]?(""+e).trim():e+"px"}function g_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=m_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var $b=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hh(t,e){if(e){if($b[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(W(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(W(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(W(61))}if(e.style!=null&&typeof e.style!="object")throw Error(W(62))}}function Wh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qh=null;function bm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kh=null,ys=null,ws=null;function Jv(t){if(t=Hl(t)){if(typeof Kh!="function")throw Error(W(280));var e=t.stateNode;e&&(e=Hd(e),Kh(t.stateNode,t.type,e))}}function v_(t){ys?ws?ws.push(t):ws=[t]:ys=t}function y_(){if(ys){var t=ys,e=ws;if(ws=ys=null,Jv(t),e)for(t=0;t<e.length;t++)Jv(e[t])}}function w_(t,e){return t(e)}function __(){}var Kf=!1;function E_(t,e,n){if(Kf)return t(e,n);Kf=!0;try{return w_(t,e,n)}finally{Kf=!1,(ys!==null||ws!==null)&&(__(),y_())}}function ll(t,e){var n=t.stateNode;if(n===null)return null;var r=Hd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(W(231,e,typeof n));return n}var Gh=!1;if(Sr)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){Gh=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Gh=!1}function Hb(t,e,n,r,i,o,s,l,u){var f=Array.prototype.slice.call(arguments,3);try{e.apply(n,f)}catch(p){this.onError(p)}}var Wa=!1,qc=null,Kc=!1,Qh=null,Wb={onError:function(t){Wa=!0,qc=t}};function qb(t,e,n,r,i,o,s,l,u){Wa=!1,qc=null,Hb.apply(Wb,arguments)}function Kb(t,e,n,r,i,o,s,l,u){if(qb.apply(this,arguments),Wa){if(Wa){var f=qc;Wa=!1,qc=null}else throw Error(W(198));Kc||(Kc=!0,Qh=f)}}function Ao(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function T_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zv(t){if(Ao(t)!==t)throw Error(W(188))}function Gb(t){var e=t.alternate;if(!e){if(e=Ao(t),e===null)throw Error(W(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zv(i),t;if(o===r)return Zv(i),e;o=o.sibling}throw Error(W(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(W(189))}}if(n.alternate!==r)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?t:e}function I_(t){return t=Gb(t),t!==null?b_(t):null}function b_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b_(t);if(e!==null)return e;t=t.sibling}return null}var S_=on.unstable_scheduleCallback,ey=on.unstable_cancelCallback,Qb=on.unstable_shouldYield,Yb=on.unstable_requestPaint,Ge=on.unstable_now,Xb=on.unstable_getCurrentPriorityLevel,Sm=on.unstable_ImmediatePriority,k_=on.unstable_UserBlockingPriority,Gc=on.unstable_NormalPriority,Jb=on.unstable_LowPriority,A_=on.unstable_IdlePriority,jd=null,Yn=null;function Zb(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(jd,t,void 0,(t.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:nS,eS=Math.log,tS=Math.LN2;function nS(t){return t>>>=0,t===0?32:31-(eS(t)/tS|0)|0}var Qu=64,Yu=4194304;function La(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=La(l):(o&=s,o!==0&&(r=La(o)))}else s=n&~i,s!==0?r=La(s):o!==0&&(r=La(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ln(e),i=1<<n,r|=t[n],e&=~i;return r}function rS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Ln(o),l=1<<s,u=i[s];u===-1?(!(l&n)||l&r)&&(i[s]=rS(l,e)):u<=e&&(t.expiredLanes|=l),o&=~l}}function Yh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function C_(){var t=Qu;return Qu<<=1,!(Qu&4194240)&&(Qu=64),t}function Gf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ln(e),t[e]=n}function oS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ln(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function km(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ke=0;function P_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var R_,Am,x_,O_,N_,Xh=!1,Xu=[],fi=null,hi=null,pi=null,ul=new Map,cl=new Map,ri=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ty(t,e){switch(t){case"focusin":case"focusout":fi=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(e.pointerId)}}function Sa(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Hl(e),e!==null&&Am(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function aS(t,e,n,r,i){switch(e){case"focusin":return fi=Sa(fi,t,e,n,r,i),!0;case"dragenter":return hi=Sa(hi,t,e,n,r,i),!0;case"mouseover":return pi=Sa(pi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return ul.set(o,Sa(ul.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,cl.set(o,Sa(cl.get(o)||null,t,e,n,r,i)),!0}return!1}function D_(t){var e=eo(t.target);if(e!==null){var n=Ao(e);if(n!==null){if(e=n.tag,e===13){if(e=T_(n),e!==null){t.blockedOn=e,N_(t.priority,function(){x_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qh=r,n.target.dispatchEvent(r),qh=null}else return e=Hl(n),e!==null&&Am(e),t.blockedOn=n,!1;e.shift()}return!0}function ny(t,e,n){bc(t)&&n.delete(e)}function lS(){Xh=!1,fi!==null&&bc(fi)&&(fi=null),hi!==null&&bc(hi)&&(hi=null),pi!==null&&bc(pi)&&(pi=null),ul.forEach(ny),cl.forEach(ny)}function ka(t,e){t.blockedOn===e&&(t.blockedOn=null,Xh||(Xh=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,lS)))}function dl(t){function e(i){return ka(i,t)}if(0<Xu.length){ka(Xu[0],t);for(var n=1;n<Xu.length;n++){var r=Xu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fi!==null&&ka(fi,t),hi!==null&&ka(hi,t),pi!==null&&ka(pi,t),ul.forEach(e),cl.forEach(e),n=0;n<ri.length;n++)r=ri[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ri.length&&(n=ri[0],n.blockedOn===null);)D_(n),n.blockedOn===null&&ri.shift()}var _s=Lr.ReactCurrentBatchConfig,Yc=!0;function uS(t,e,n,r){var i=ke,o=_s.transition;_s.transition=null;try{ke=1,Cm(t,e,n,r)}finally{ke=i,_s.transition=o}}function cS(t,e,n,r){var i=ke,o=_s.transition;_s.transition=null;try{ke=4,Cm(t,e,n,r)}finally{ke=i,_s.transition=o}}function Cm(t,e,n,r){if(Yc){var i=Jh(t,e,n,r);if(i===null)ih(t,e,r,Xc,n),ty(t,r);else if(aS(i,t,e,n,r))r.stopPropagation();else if(ty(t,r),e&4&&-1<sS.indexOf(t)){for(;i!==null;){var o=Hl(i);if(o!==null&&R_(o),o=Jh(t,e,n,r),o===null&&ih(t,e,r,Xc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ih(t,e,r,null,n)}}var Xc=null;function Jh(t,e,n,r){if(Xc=null,t=bm(r),t=eo(t),t!==null)if(e=Ao(t),e===null)t=null;else if(n=e.tag,n===13){if(t=T_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xc=t,null}function L_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xb()){case Sm:return 1;case k_:return 4;case Gc:case Jb:return 16;case A_:return 536870912;default:return 16}default:return 16}}var li=null,Pm=null,Sc=null;function M_(){if(Sc)return Sc;var t,e=Pm,n=e.length,r,i="value"in li?li.value:li.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Sc=i.slice(t,1<r?1-r:void 0)}function kc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ju(){return!0}function ry(){return!1}function ln(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ju:ry,this.isPropagationStopped=ry,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ju)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ju)},persist:function(){},isPersistent:Ju}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rm=ln(Ws),$l=Be({},Ws,{view:0,detail:0}),dS=ln($l),Qf,Yf,Aa,Bd=Be({},$l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Aa&&(Aa&&t.type==="mousemove"?(Qf=t.screenX-Aa.screenX,Yf=t.screenY-Aa.screenY):Yf=Qf=0,Aa=t),Qf)},movementY:function(t){return"movementY"in t?t.movementY:Yf}}),iy=ln(Bd),fS=Be({},Bd,{dataTransfer:0}),hS=ln(fS),pS=Be({},$l,{relatedTarget:0}),Xf=ln(pS),mS=Be({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),gS=ln(mS),vS=Be({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yS=ln(vS),wS=Be({},Ws,{data:0}),oy=ln(wS),_S={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ES={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TS[t])?!!e[t]:!1}function xm(){return IS}var bS=Be({},$l,{key:function(t){if(t.key){var e=_S[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=kc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ES[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xm,charCode:function(t){return t.type==="keypress"?kc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),SS=ln(bS),kS=Be({},Bd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sy=ln(kS),AS=Be({},$l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xm}),CS=ln(AS),PS=Be({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),RS=ln(PS),xS=Be({},Bd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OS=ln(xS),NS=[9,13,27,32],Om=Sr&&"CompositionEvent"in window,qa=null;Sr&&"documentMode"in document&&(qa=document.documentMode);var DS=Sr&&"TextEvent"in window&&!qa,V_=Sr&&(!Om||qa&&8<qa&&11>=qa),ay=" ",ly=!1;function F_(t,e){switch(t){case"keyup":return NS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function LS(t,e){switch(t){case"compositionend":return U_(e);case"keypress":return e.which!==32?null:(ly=!0,ay);case"textInput":return t=e.data,t===ay&&ly?null:t;default:return null}}function MS(t,e){if(rs)return t==="compositionend"||!Om&&F_(t,e)?(t=M_(),Sc=Pm=li=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return V_&&e.locale!=="ko"?null:e.data;default:return null}}var VS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!VS[t.type]:e==="textarea"}function j_(t,e,n,r){v_(r),e=Jc(e,"onChange"),0<e.length&&(n=new Rm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ka=null,fl=null;function FS(t){X_(t,0)}function zd(t){var e=ss(t);if(c_(e))return t}function US(t,e){if(t==="change")return e}var B_=!1;if(Sr){var Jf;if(Sr){var Zf="oninput"in document;if(!Zf){var cy=document.createElement("div");cy.setAttribute("oninput","return;"),Zf=typeof cy.oninput=="function"}Jf=Zf}else Jf=!1;B_=Jf&&(!document.documentMode||9<document.documentMode)}function dy(){Ka&&(Ka.detachEvent("onpropertychange",z_),fl=Ka=null)}function z_(t){if(t.propertyName==="value"&&zd(fl)){var e=[];j_(e,fl,t,bm(t)),E_(FS,e)}}function jS(t,e,n){t==="focusin"?(dy(),Ka=e,fl=n,Ka.attachEvent("onpropertychange",z_)):t==="focusout"&&dy()}function BS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zd(fl)}function zS(t,e){if(t==="click")return zd(e)}function $S(t,e){if(t==="input"||t==="change")return zd(e)}function HS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:HS;function hl(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dh.call(e,i)||!Fn(t[i],e[i]))return!1}return!0}function fy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hy(t,e){var n=fy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fy(n)}}function $_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function H_(){for(var t=window,e=Wc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wc(t.document)}return e}function Nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WS(t){var e=H_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$_(n.ownerDocument.documentElement,n)){if(r!==null&&Nm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=hy(n,o);var s=hy(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qS=Sr&&"documentMode"in document&&11>=document.documentMode,is=null,Zh=null,Ga=null,ep=!1;function py(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ep||is==null||is!==Wc(r)||(r=is,"selectionStart"in r&&Nm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ga&&hl(Ga,r)||(Ga=r,r=Jc(Zh,"onSelect"),0<r.length&&(e=new Rm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=is)))}function Zu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:Zu("Animation","AnimationEnd"),animationiteration:Zu("Animation","AnimationIteration"),animationstart:Zu("Animation","AnimationStart"),transitionend:Zu("Transition","TransitionEnd")},eh={},W_={};Sr&&(W_=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function $d(t){if(eh[t])return eh[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in W_)return eh[t]=e[n];return t}var q_=$d("animationend"),K_=$d("animationiteration"),G_=$d("animationstart"),Q_=$d("transitionend"),Y_=new Map,my="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Oi(t,e){Y_.set(t,e),ko(e,[t])}for(var th=0;th<my.length;th++){var nh=my[th],KS=nh.toLowerCase(),GS=nh[0].toUpperCase()+nh.slice(1);Oi(KS,"on"+GS)}Oi(q_,"onAnimationEnd");Oi(K_,"onAnimationIteration");Oi(G_,"onAnimationStart");Oi("dblclick","onDoubleClick");Oi("focusin","onFocus");Oi("focusout","onBlur");Oi(Q_,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);ko("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ko("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ko("onBeforeInput",["compositionend","keypress","textInput","paste"]);ko("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function gy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Kb(r,e,void 0,t),t.currentTarget=null}function X_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,f=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;gy(i,l,f),o=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,f=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;gy(i,l,f),o=u}}}if(Kc)throw t=Qh,Kc=!1,Qh=null,t}function Oe(t,e){var n=e[op];n===void 0&&(n=e[op]=new Set);var r=t+"__bubble";n.has(r)||(J_(e,t,2,!1),n.add(r))}function rh(t,e,n){var r=0;e&&(r|=4),J_(n,t,r,e)}var ec="_reactListening"+Math.random().toString(36).slice(2);function pl(t){if(!t[ec]){t[ec]=!0,o_.forEach(function(n){n!=="selectionchange"&&(QS.has(n)||rh(n,!1,t),rh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ec]||(e[ec]=!0,rh("selectionchange",!1,e))}}function J_(t,e,n,r){switch(L_(e)){case 1:var i=uS;break;case 4:i=cS;break;default:i=Cm}n=i.bind(null,e,n,t),i=void 0,!Gh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ih(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=eo(l),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}l=l.parentNode}}r=r.return}E_(function(){var f=o,p=bm(n),y=[];e:{var w=Y_.get(t);if(w!==void 0){var A=Rm,x=t;switch(t){case"keypress":if(kc(n)===0)break e;case"keydown":case"keyup":A=SS;break;case"focusin":x="focus",A=Xf;break;case"focusout":x="blur",A=Xf;break;case"beforeblur":case"afterblur":A=Xf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=iy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=hS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=CS;break;case q_:case K_:case G_:A=gS;break;case Q_:A=RS;break;case"scroll":A=dS;break;case"wheel":A=OS;break;case"copy":case"cut":case"paste":A=yS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=sy}var N=(e&4)!==0,M=!N&&t==="scroll",k=N?w!==null?w+"Capture":null:w;N=[];for(var T=f,P;T!==null;){P=T;var F=P.stateNode;if(P.tag===5&&F!==null&&(P=F,k!==null&&(F=ll(T,k),F!=null&&N.push(ml(T,F,P)))),M)break;T=T.return}0<N.length&&(w=new A(w,x,null,n,p),y.push({event:w,listeners:N}))}}if(!(e&7)){e:{if(w=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",w&&n!==qh&&(x=n.relatedTarget||n.fromElement)&&(eo(x)||x[kr]))break e;if((A||w)&&(w=p.window===p?p:(w=p.ownerDocument)?w.defaultView||w.parentWindow:window,A?(x=n.relatedTarget||n.toElement,A=f,x=x?eo(x):null,x!==null&&(M=Ao(x),x!==M||x.tag!==5&&x.tag!==6)&&(x=null)):(A=null,x=f),A!==x)){if(N=iy,F="onMouseLeave",k="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(N=sy,F="onPointerLeave",k="onPointerEnter",T="pointer"),M=A==null?w:ss(A),P=x==null?w:ss(x),w=new N(F,T+"leave",A,n,p),w.target=M,w.relatedTarget=P,F=null,eo(p)===f&&(N=new N(k,T+"enter",x,n,p),N.target=P,N.relatedTarget=M,F=N),M=F,A&&x)t:{for(N=A,k=x,T=0,P=N;P;P=Xo(P))T++;for(P=0,F=k;F;F=Xo(F))P++;for(;0<T-P;)N=Xo(N),T--;for(;0<P-T;)k=Xo(k),P--;for(;T--;){if(N===k||k!==null&&N===k.alternate)break t;N=Xo(N),k=Xo(k)}N=null}else N=null;A!==null&&vy(y,w,A,N,!1),x!==null&&M!==null&&vy(y,M,x,N,!0)}}e:{if(w=f?ss(f):window,A=w.nodeName&&w.nodeName.toLowerCase(),A==="select"||A==="input"&&w.type==="file")var z=US;else if(uy(w))if(B_)z=$S;else{z=BS;var q=jS}else(A=w.nodeName)&&A.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(z=zS);if(z&&(z=z(t,f))){j_(y,z,n,p);break e}q&&q(t,w,f),t==="focusout"&&(q=w._wrapperState)&&q.controlled&&w.type==="number"&&Bh(w,"number",w.value)}switch(q=f?ss(f):window,t){case"focusin":(uy(q)||q.contentEditable==="true")&&(is=q,Zh=f,Ga=null);break;case"focusout":Ga=Zh=is=null;break;case"mousedown":ep=!0;break;case"contextmenu":case"mouseup":case"dragend":ep=!1,py(y,n,p);break;case"selectionchange":if(qS)break;case"keydown":case"keyup":py(y,n,p)}var S;if(Om)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else rs?F_(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(V_&&n.locale!=="ko"&&(rs||E!=="onCompositionStart"?E==="onCompositionEnd"&&rs&&(S=M_()):(li=p,Pm="value"in li?li.value:li.textContent,rs=!0)),q=Jc(f,E),0<q.length&&(E=new oy(E,t,null,n,p),y.push({event:E,listeners:q}),S?E.data=S:(S=U_(n),S!==null&&(E.data=S)))),(S=DS?LS(t,n):MS(t,n))&&(f=Jc(f,"onBeforeInput"),0<f.length&&(p=new oy("onBeforeInput","beforeinput",null,n,p),y.push({event:p,listeners:f}),p.data=S))}X_(y,e)})}function ml(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ll(t,n),o!=null&&r.unshift(ml(t,o,i)),o=ll(t,e),o!=null&&r.push(ml(t,o,i))),t=t.return}return r}function Xo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vy(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,f=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&f!==null&&(l=f,i?(u=ll(n,o),u!=null&&s.unshift(ml(n,u,l))):i||(u=ll(n,o),u!=null&&s.push(ml(n,u,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var YS=/\r\n?/g,XS=/\u0000|\uFFFD/g;function yy(t){return(typeof t=="string"?t:""+t).replace(YS,`
`).replace(XS,"")}function tc(t,e,n){if(e=yy(e),yy(t)!==e&&n)throw Error(W(425))}function Zc(){}var tp=null,np=null;function rp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ip=typeof setTimeout=="function"?setTimeout:void 0,JS=typeof clearTimeout=="function"?clearTimeout:void 0,wy=typeof Promise=="function"?Promise:void 0,ZS=typeof queueMicrotask=="function"?queueMicrotask:typeof wy<"u"?function(t){return wy.resolve(null).then(t).catch(ek)}:ip;function ek(t){setTimeout(function(){throw t})}function oh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),dl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);dl(e)}function mi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _y(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),Gn="__reactFiber$"+qs,gl="__reactProps$"+qs,kr="__reactContainer$"+qs,op="__reactEvents$"+qs,tk="__reactListeners$"+qs,nk="__reactHandles$"+qs;function eo(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kr]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_y(t);t!==null;){if(n=t[Gn])return n;t=_y(t)}return e}t=n,n=t.parentNode}return null}function Hl(t){return t=t[Gn]||t[kr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(W(33))}function Hd(t){return t[gl]||null}var sp=[],as=-1;function Ni(t){return{current:t}}function De(t){0>as||(t.current=sp[as],sp[as]=null,as--)}function Pe(t,e){as++,sp[as]=t.current,t.current=e}var Si={},Lt=Ni(Si),Gt=Ni(!1),fo=Si;function Ps(t,e){var n=t.type.contextTypes;if(!n)return Si;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(t){return t=t.childContextTypes,t!=null}function ed(){De(Gt),De(Lt)}function Ey(t,e,n){if(Lt.current!==Si)throw Error(W(168));Pe(Lt,e),Pe(Gt,n)}function Z_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(W(108,jb(t)||"Unknown",i));return Be({},n,r)}function td(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Si,fo=Lt.current,Pe(Lt,t),Pe(Gt,Gt.current),!0}function Ty(t,e,n){var r=t.stateNode;if(!r)throw Error(W(169));n?(t=Z_(t,e,fo),r.__reactInternalMemoizedMergedChildContext=t,De(Gt),De(Lt),Pe(Lt,t)):De(Gt),Pe(Gt,n)}var mr=null,Wd=!1,sh=!1;function e1(t){mr===null?mr=[t]:mr.push(t)}function rk(t){Wd=!0,e1(t)}function Di(){if(!sh&&mr!==null){sh=!0;var t=0,e=ke;try{var n=mr;for(ke=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mr=null,Wd=!1}catch(i){throw mr!==null&&(mr=mr.slice(t+1)),S_(Sm,Di),i}finally{ke=e,sh=!1}}return null}var ls=[],us=0,nd=null,rd=0,mn=[],gn=0,ho=null,vr=1,yr="";function Xi(t,e){ls[us++]=rd,ls[us++]=nd,nd=t,rd=e}function t1(t,e,n){mn[gn++]=vr,mn[gn++]=yr,mn[gn++]=ho,ho=t;var r=vr;t=yr;var i=32-Ln(r)-1;r&=~(1<<i),n+=1;var o=32-Ln(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,vr=1<<32-Ln(e)+i|n<<i|r,yr=o+t}else vr=1<<o|n<<i|r,yr=t}function Dm(t){t.return!==null&&(Xi(t,1),t1(t,1,0))}function Lm(t){for(;t===nd;)nd=ls[--us],ls[us]=null,rd=ls[--us],ls[us]=null;for(;t===ho;)ho=mn[--gn],mn[gn]=null,yr=mn[--gn],mn[gn]=null,vr=mn[--gn],mn[gn]=null}var rn=null,nn=null,Me=!1,xn=null;function n1(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Iy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rn=t,nn=mi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rn=t,nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ho!==null?{id:vr,overflow:yr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rn=t,nn=null,!0):!1;default:return!1}}function ap(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lp(t){if(Me){var e=nn;if(e){var n=e;if(!Iy(t,e)){if(ap(t))throw Error(W(418));e=mi(n.nextSibling);var r=rn;e&&Iy(t,e)?n1(r,n):(t.flags=t.flags&-4097|2,Me=!1,rn=t)}}else{if(ap(t))throw Error(W(418));t.flags=t.flags&-4097|2,Me=!1,rn=t}}}function by(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rn=t}function nc(t){if(t!==rn)return!1;if(!Me)return by(t),Me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rp(t.type,t.memoizedProps)),e&&(e=nn)){if(ap(t))throw r1(),Error(W(418));for(;e;)n1(t,e),e=mi(e.nextSibling)}if(by(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(W(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nn=mi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nn=null}}else nn=rn?mi(t.stateNode.nextSibling):null;return!0}function r1(){for(var t=nn;t;)t=mi(t.nextSibling)}function Rs(){nn=rn=null,Me=!1}function Mm(t){xn===null?xn=[t]:xn.push(t)}var ik=Lr.ReactCurrentBatchConfig;function Ca(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var r=n.stateNode}if(!r)throw Error(W(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,t))}return t}function rc(t,e){throw t=Object.prototype.toString.call(e),Error(W(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sy(t){var e=t._init;return e(t._payload)}function i1(t){function e(k,T){if(t){var P=k.deletions;P===null?(k.deletions=[T],k.flags|=16):P.push(T)}}function n(k,T){if(!t)return null;for(;T!==null;)e(k,T),T=T.sibling;return null}function r(k,T){for(k=new Map;T!==null;)T.key!==null?k.set(T.key,T):k.set(T.index,T),T=T.sibling;return k}function i(k,T){return k=wi(k,T),k.index=0,k.sibling=null,k}function o(k,T,P){return k.index=P,t?(P=k.alternate,P!==null?(P=P.index,P<T?(k.flags|=2,T):P):(k.flags|=2,T)):(k.flags|=1048576,T)}function s(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,T,P,F){return T===null||T.tag!==6?(T=hh(P,k.mode,F),T.return=k,T):(T=i(T,P),T.return=k,T)}function u(k,T,P,F){var z=P.type;return z===ns?p(k,T,P.props.children,F,P.key):T!==null&&(T.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ti&&Sy(z)===T.type)?(F=i(T,P.props),F.ref=Ca(k,T,P),F.return=k,F):(F=Nc(P.type,P.key,P.props,null,k.mode,F),F.ref=Ca(k,T,P),F.return=k,F)}function f(k,T,P,F){return T===null||T.tag!==4||T.stateNode.containerInfo!==P.containerInfo||T.stateNode.implementation!==P.implementation?(T=ph(P,k.mode,F),T.return=k,T):(T=i(T,P.children||[]),T.return=k,T)}function p(k,T,P,F,z){return T===null||T.tag!==7?(T=lo(P,k.mode,F,z),T.return=k,T):(T=i(T,P),T.return=k,T)}function y(k,T,P){if(typeof T=="string"&&T!==""||typeof T=="number")return T=hh(""+T,k.mode,P),T.return=k,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case qu:return P=Nc(T.type,T.key,T.props,null,k.mode,P),P.ref=Ca(k,null,T),P.return=k,P;case ts:return T=ph(T,k.mode,P),T.return=k,T;case ti:var F=T._init;return y(k,F(T._payload),P)}if(Da(T)||Ia(T))return T=lo(T,k.mode,P,null),T.return=k,T;rc(k,T)}return null}function w(k,T,P,F){var z=T!==null?T.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return z!==null?null:l(k,T,""+P,F);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case qu:return P.key===z?u(k,T,P,F):null;case ts:return P.key===z?f(k,T,P,F):null;case ti:return z=P._init,w(k,T,z(P._payload),F)}if(Da(P)||Ia(P))return z!==null?null:p(k,T,P,F,null);rc(k,P)}return null}function A(k,T,P,F,z){if(typeof F=="string"&&F!==""||typeof F=="number")return k=k.get(P)||null,l(T,k,""+F,z);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case qu:return k=k.get(F.key===null?P:F.key)||null,u(T,k,F,z);case ts:return k=k.get(F.key===null?P:F.key)||null,f(T,k,F,z);case ti:var q=F._init;return A(k,T,P,q(F._payload),z)}if(Da(F)||Ia(F))return k=k.get(P)||null,p(T,k,F,z,null);rc(T,F)}return null}function x(k,T,P,F){for(var z=null,q=null,S=T,E=T=0,I=null;S!==null&&E<P.length;E++){S.index>E?(I=S,S=null):I=S.sibling;var C=w(k,S,P[E],F);if(C===null){S===null&&(S=I);break}t&&S&&C.alternate===null&&e(k,S),T=o(C,T,E),q===null?z=C:q.sibling=C,q=C,S=I}if(E===P.length)return n(k,S),Me&&Xi(k,E),z;if(S===null){for(;E<P.length;E++)S=y(k,P[E],F),S!==null&&(T=o(S,T,E),q===null?z=S:q.sibling=S,q=S);return Me&&Xi(k,E),z}for(S=r(k,S);E<P.length;E++)I=A(S,k,E,P[E],F),I!==null&&(t&&I.alternate!==null&&S.delete(I.key===null?E:I.key),T=o(I,T,E),q===null?z=I:q.sibling=I,q=I);return t&&S.forEach(function(O){return e(k,O)}),Me&&Xi(k,E),z}function N(k,T,P,F){var z=Ia(P);if(typeof z!="function")throw Error(W(150));if(P=z.call(P),P==null)throw Error(W(151));for(var q=z=null,S=T,E=T=0,I=null,C=P.next();S!==null&&!C.done;E++,C=P.next()){S.index>E?(I=S,S=null):I=S.sibling;var O=w(k,S,C.value,F);if(O===null){S===null&&(S=I);break}t&&S&&O.alternate===null&&e(k,S),T=o(O,T,E),q===null?z=O:q.sibling=O,q=O,S=I}if(C.done)return n(k,S),Me&&Xi(k,E),z;if(S===null){for(;!C.done;E++,C=P.next())C=y(k,C.value,F),C!==null&&(T=o(C,T,E),q===null?z=C:q.sibling=C,q=C);return Me&&Xi(k,E),z}for(S=r(k,S);!C.done;E++,C=P.next())C=A(S,k,E,C.value,F),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?E:C.key),T=o(C,T,E),q===null?z=C:q.sibling=C,q=C);return t&&S.forEach(function(L){return e(k,L)}),Me&&Xi(k,E),z}function M(k,T,P,F){if(typeof P=="object"&&P!==null&&P.type===ns&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case qu:e:{for(var z=P.key,q=T;q!==null;){if(q.key===z){if(z=P.type,z===ns){if(q.tag===7){n(k,q.sibling),T=i(q,P.props.children),T.return=k,k=T;break e}}else if(q.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ti&&Sy(z)===q.type){n(k,q.sibling),T=i(q,P.props),T.ref=Ca(k,q,P),T.return=k,k=T;break e}n(k,q);break}else e(k,q);q=q.sibling}P.type===ns?(T=lo(P.props.children,k.mode,F,P.key),T.return=k,k=T):(F=Nc(P.type,P.key,P.props,null,k.mode,F),F.ref=Ca(k,T,P),F.return=k,k=F)}return s(k);case ts:e:{for(q=P.key;T!==null;){if(T.key===q)if(T.tag===4&&T.stateNode.containerInfo===P.containerInfo&&T.stateNode.implementation===P.implementation){n(k,T.sibling),T=i(T,P.children||[]),T.return=k,k=T;break e}else{n(k,T);break}else e(k,T);T=T.sibling}T=ph(P,k.mode,F),T.return=k,k=T}return s(k);case ti:return q=P._init,M(k,T,q(P._payload),F)}if(Da(P))return x(k,T,P,F);if(Ia(P))return N(k,T,P,F);rc(k,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,T!==null&&T.tag===6?(n(k,T.sibling),T=i(T,P),T.return=k,k=T):(n(k,T),T=hh(P,k.mode,F),T.return=k,k=T),s(k)):n(k,T)}return M}var xs=i1(!0),o1=i1(!1),id=Ni(null),od=null,cs=null,Vm=null;function Fm(){Vm=cs=od=null}function Um(t){var e=id.current;De(id),t._currentValue=e}function up(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){od=t,Vm=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Vm!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(od===null)throw Error(W(308));cs=t,od.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var to=null;function jm(t){to===null?to=[t]:to.push(t)}function s1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,jm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ar(t,r)}function Ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ni=!1;function Bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ar(t,n)}return i=r.interleaved,i===null?(e.next=e,jm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ar(t,n)}function Ac(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,km(t,n)}}function ky(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sd(t,e,n,r){var i=t.updateQueue;ni=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,f=u.next;u.next=null,s===null?o=f:s.next=f,s=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=f:l.next=f,p.lastBaseUpdate=u))}if(o!==null){var y=i.baseState;s=0,p=f=u=null,l=o;do{var w=l.lane,A=l.eventTime;if((r&w)===w){p!==null&&(p=p.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,N=l;switch(w=e,A=n,N.tag){case 1:if(x=N.payload,typeof x=="function"){y=x.call(A,y,w);break e}y=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=N.payload,w=typeof x=="function"?x.call(A,y,w):x,w==null)break e;y=Be({},y,w);break e;case 2:ni=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,w=i.effects,w===null?i.effects=[l]:w.push(l))}else A={eventTime:A,lane:w,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(f=p=A,u=y):p=p.next=A,s|=w;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;w=l,l=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(p===null&&(u=y),i.baseState=u,i.firstBaseUpdate=f,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);mo|=s,t.lanes=s,t.memoizedState=y}}function Ay(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(W(191,i));i.call(r)}}}var Wl={},Xn=Ni(Wl),vl=Ni(Wl),yl=Ni(Wl);function no(t){if(t===Wl)throw Error(W(174));return t}function zm(t,e){switch(Pe(yl,e),Pe(vl,t),Pe(Xn,Wl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$h(e,t)}De(Xn),Pe(Xn,e)}function Os(){De(Xn),De(vl),De(yl)}function l1(t){no(yl.current);var e=no(Xn.current),n=$h(e,t.type);e!==n&&(Pe(vl,t),Pe(Xn,n))}function $m(t){vl.current===t&&(De(Xn),De(vl))}var Ue=Ni(0);function ad(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ah=[];function Hm(){for(var t=0;t<ah.length;t++)ah[t]._workInProgressVersionPrimary=null;ah.length=0}var Cc=Lr.ReactCurrentDispatcher,lh=Lr.ReactCurrentBatchConfig,po=0,je=null,it=null,ht=null,ld=!1,Qa=!1,wl=0,ok=0;function Pt(){throw Error(W(321))}function Wm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function qm(t,e,n,r,i,o){if(po=o,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cc.current=t===null||t.memoizedState===null?uk:ck,t=n(r,i),Qa){o=0;do{if(Qa=!1,wl=0,25<=o)throw Error(W(301));o+=1,ht=it=null,e.updateQueue=null,Cc.current=dk,t=n(r,i)}while(Qa)}if(Cc.current=ud,e=it!==null&&it.next!==null,po=0,ht=it=je=null,ld=!1,e)throw Error(W(300));return t}function Km(){var t=wl!==0;return wl=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?je.memoizedState=ht=t:ht=ht.next=t,ht}function Tn(){if(it===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=ht===null?je.memoizedState:ht.next;if(e!==null)ht=e,it=t;else{if(t===null)throw Error(W(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ht===null?je.memoizedState=ht=t:ht=ht.next=t}return ht}function _l(t,e){return typeof e=="function"?e(t):e}function uh(t){var e=Tn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=it,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,u=null,f=o;do{var p=f.lane;if((po&p)===p)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:t(r,f.action);else{var y={lane:p,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(l=u=y,s=r):u=u.next=y,je.lanes|=p,mo|=p}f=f.next}while(f!==null&&f!==o);u===null?s=r:u.next=l,Fn(r,e.memoizedState)||(Kt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,je.lanes|=o,mo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ch(t){var e=Tn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Fn(o,e.memoizedState)||(Kt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function u1(){}function c1(t,e){var n=je,r=Tn(),i=e(),o=!Fn(r.memoizedState,i);if(o&&(r.memoizedState=i,Kt=!0),r=r.queue,Gm(h1.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,El(9,f1.bind(null,n,r,i,e),void 0,null),pt===null)throw Error(W(349));po&30||d1(n,e,i)}return i}function d1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f1(t,e,n,r){e.value=n,e.getSnapshot=r,p1(e)&&m1(t)}function h1(t,e,n){return n(function(){p1(e)&&m1(t)})}function p1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function m1(t){var e=Ar(t,1);e!==null&&Mn(e,t,1,-1)}function Cy(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_l,lastRenderedState:t},e.queue=t,t=t.dispatch=lk.bind(null,je,t),[e.memoizedState,t]}function El(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function g1(){return Tn().memoizedState}function Pc(t,e,n,r){var i=qn();je.flags|=t,i.memoizedState=El(1|e,n,void 0,r===void 0?null:r)}function qd(t,e,n,r){var i=Tn();r=r===void 0?null:r;var o=void 0;if(it!==null){var s=it.memoizedState;if(o=s.destroy,r!==null&&Wm(r,s.deps)){i.memoizedState=El(e,n,o,r);return}}je.flags|=t,i.memoizedState=El(1|e,n,o,r)}function Py(t,e){return Pc(8390656,8,t,e)}function Gm(t,e){return qd(2048,8,t,e)}function v1(t,e){return qd(4,2,t,e)}function y1(t,e){return qd(4,4,t,e)}function w1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _1(t,e,n){return n=n!=null?n.concat([t]):null,qd(4,4,w1.bind(null,e,t),n)}function Qm(){}function E1(t,e){var n=Tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function T1(t,e){var n=Tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function I1(t,e,n){return po&21?(Fn(n,e)||(n=C_(),je.lanes|=n,mo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=n)}function sk(t,e){var n=ke;ke=n!==0&&4>n?n:4,t(!0);var r=lh.transition;lh.transition={};try{t(!1),e()}finally{ke=n,lh.transition=r}}function b1(){return Tn().memoizedState}function ak(t,e,n){var r=yi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},S1(t))k1(e,n);else if(n=s1(t,e,n,r),n!==null){var i=jt();Mn(n,t,r,i),A1(n,e,r)}}function lk(t,e,n){var r=yi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(S1(t))k1(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Fn(l,s)){var u=e.interleaved;u===null?(i.next=i,jm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=s1(t,e,i,r),n!==null&&(i=jt(),Mn(n,t,r,i),A1(n,e,r))}}function S1(t){var e=t.alternate;return t===je||e!==null&&e===je}function k1(t,e){Qa=ld=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function A1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,km(t,n)}}var ud={readContext:En,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},uk={readContext:En,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:Py,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pc(4194308,4,w1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pc(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ak.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:Cy,useDebugValue:Qm,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Cy(!1),e=t[0];return t=sk.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=qn();if(Me){if(n===void 0)throw Error(W(407));n=n()}else{if(n=e(),pt===null)throw Error(W(349));po&30||d1(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Py(h1.bind(null,r,o,t),[t]),r.flags|=2048,El(9,f1.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=qn(),e=pt.identifierPrefix;if(Me){var n=yr,r=vr;n=(r&~(1<<32-Ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ok++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ck={readContext:En,useCallback:E1,useContext:En,useEffect:Gm,useImperativeHandle:_1,useInsertionEffect:v1,useLayoutEffect:y1,useMemo:T1,useReducer:uh,useRef:g1,useState:function(){return uh(_l)},useDebugValue:Qm,useDeferredValue:function(t){var e=Tn();return I1(e,it.memoizedState,t)},useTransition:function(){var t=uh(_l)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:u1,useSyncExternalStore:c1,useId:b1,unstable_isNewReconciler:!1},dk={readContext:En,useCallback:E1,useContext:En,useEffect:Gm,useImperativeHandle:_1,useInsertionEffect:v1,useLayoutEffect:y1,useMemo:T1,useReducer:ch,useRef:g1,useState:function(){return ch(_l)},useDebugValue:Qm,useDeferredValue:function(t){var e=Tn();return it===null?e.memoizedState=t:I1(e,it.memoizedState,t)},useTransition:function(){var t=ch(_l)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:u1,useSyncExternalStore:c1,useId:b1,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kd={isMounted:function(t){return(t=t._reactInternals)?Ao(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=yi(t),o=Tr(r,i);o.payload=e,n!=null&&(o.callback=n),e=gi(t,o,i),e!==null&&(Mn(e,t,i,r),Ac(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=yi(t),o=Tr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=gi(t,o,i),e!==null&&(Mn(e,t,i,r),Ac(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=yi(t),i=Tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=gi(t,i,r),e!==null&&(Mn(e,t,r,n),Ac(e,t,r))}};function Ry(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!hl(n,r)||!hl(i,o):!0}function C1(t,e,n){var r=!1,i=Si,o=e.contextType;return typeof o=="object"&&o!==null?o=En(o):(i=Qt(e)?fo:Lt.current,r=e.contextTypes,o=(r=r!=null)?Ps(t,i):Si),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function xy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Kd.enqueueReplaceState(e,e.state,null)}function dp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Bm(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=En(o):(o=Qt(e)?fo:Lt.current,i.context=Ps(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(cp(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Kd.enqueueReplaceState(i,i.state,null),sd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",r=e;do n+=Ub(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function dh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fk=typeof WeakMap=="function"?WeakMap:Map;function P1(t,e,n){n=Tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dd||(dd=!0,Tp=r),fp(t,e)},n}function R1(t,e,n){n=Tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fp(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fp(t,e),typeof r!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Oy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kk.bind(null,t,e,n),e.then(t,t))}function Ny(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tr(-1,1),e.tag=2,gi(n,e,1))),n.lanes|=1),t)}var hk=Lr.ReactCurrentOwner,Kt=!1;function Ut(t,e,n,r){e.child=t===null?o1(e,null,n,r):xs(e,t.child,n,r)}function Ly(t,e,n,r,i){n=n.render;var o=e.ref;return Es(e,i),r=qm(t,e,n,r,o,i),n=Km(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(Me&&n&&Dm(e),e.flags|=1,Ut(t,e,r,i),e.child)}function My(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!rg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,x1(t,e,o,r,i)):(t=Nc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:hl,n(s,r)&&t.ref===e.ref)return Cr(t,e,i)}return e.flags|=1,t=wi(o,r),t.ref=e.ref,t.return=e,e.child=t}function x1(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(hl(o,r)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,Cr(t,e,i)}return hp(t,e,n,r,i)}function O1(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(fs,tn),tn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(fs,tn),tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Pe(fs,tn),tn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Pe(fs,tn),tn|=r;return Ut(t,e,i,n),e.child}function N1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hp(t,e,n,r,i){var o=Qt(n)?fo:Lt.current;return o=Ps(e,o),Es(e,i),n=qm(t,e,n,r,o,i),r=Km(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(Me&&r&&Dm(e),e.flags|=1,Ut(t,e,n,i),e.child)}function Vy(t,e,n,r,i){if(Qt(n)){var o=!0;td(e)}else o=!1;if(Es(e,i),e.stateNode===null)Rc(t,e),C1(e,n,r),dp(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var u=s.context,f=n.contextType;typeof f=="object"&&f!==null?f=En(f):(f=Qt(n)?fo:Lt.current,f=Ps(e,f));var p=n.getDerivedStateFromProps,y=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";y||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==f)&&xy(e,s,r,f),ni=!1;var w=e.memoizedState;s.state=w,sd(e,r,s,i),u=e.memoizedState,l!==r||w!==u||Gt.current||ni?(typeof p=="function"&&(cp(e,n,p,r),u=e.memoizedState),(l=ni||Ry(e,n,l,r,w,u,f))?(y||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=f,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,a1(t,e),l=e.memoizedProps,f=e.type===e.elementType?l:Pn(e.type,l),s.props=f,y=e.pendingProps,w=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=En(u):(u=Qt(n)?fo:Lt.current,u=Ps(e,u));var A=n.getDerivedStateFromProps;(p=typeof A=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==y||w!==u)&&xy(e,s,r,u),ni=!1,w=e.memoizedState,s.state=w,sd(e,r,s,i);var x=e.memoizedState;l!==y||w!==x||Gt.current||ni?(typeof A=="function"&&(cp(e,n,A,r),x=e.memoizedState),(f=ni||Ry(e,n,f,r,w,x,u)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),s.props=r,s.state=x,s.context=u,r=f):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),r=!1)}return pp(t,e,n,r,o,i)}function pp(t,e,n,r,i,o){N1(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Ty(e,n,!1),Cr(t,e,o);r=e.stateNode,hk.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=xs(e,t.child,null,o),e.child=xs(e,null,l,o)):Ut(t,e,l,o),e.memoizedState=r.state,i&&Ty(e,n,!0),e.child}function D1(t){var e=t.stateNode;e.pendingContext?Ey(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ey(t,e.context,!1),zm(t,e.containerInfo)}function Fy(t,e,n,r,i){return Rs(),Mm(i),e.flags|=256,Ut(t,e,n,r),e.child}var mp={dehydrated:null,treeContext:null,retryLane:0};function gp(t){return{baseLanes:t,cachePool:null,transitions:null}}function L1(t,e,n){var r=e.pendingProps,i=Ue.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Pe(Ue,i&1),t===null)return lp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Yd(s,r,0,null),t=lo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=gp(n),e.memoizedState=mp,t):Ym(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return pk(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=wi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=wi(l,o):(o=lo(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?gp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=mp,r}return o=t.child,t=o.sibling,r=wi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ym(t,e){return e=Yd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ic(t,e,n,r){return r!==null&&Mm(r),xs(e,t.child,null,n),t=Ym(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pk(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=dh(Error(W(422))),ic(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Yd({mode:"visible",children:r.children},i,0,null),o=lo(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&xs(e,t.child,null,s),e.child.memoizedState=gp(s),e.memoizedState=mp,o);if(!(e.mode&1))return ic(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(W(419)),r=dh(o,r,void 0),ic(t,e,s,r)}if(l=(s&t.childLanes)!==0,Kt||l){if(r=pt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ar(t,i),Mn(r,t,i,-1))}return ng(),r=dh(Error(W(421))),ic(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ak.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,nn=mi(i.nextSibling),rn=e,Me=!0,xn=null,t!==null&&(mn[gn++]=vr,mn[gn++]=yr,mn[gn++]=ho,vr=t.id,yr=t.overflow,ho=e),e=Ym(e,r.children),e.flags|=4096,e)}function Uy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),up(t.return,e,n)}function fh(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function M1(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Ut(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uy(t,n,e);else if(t.tag===19)Uy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ad(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fh(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ad(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fh(e,!0,n,null,o);break;case"together":fh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(W(153));if(e.child!==null){for(t=e.child,n=wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mk(t,e,n){switch(e.tag){case 3:D1(e),Rs();break;case 5:l1(e);break;case 1:Qt(e.type)&&td(e);break;case 4:zm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Pe(id,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?L1(t,e,n):(Pe(Ue,Ue.current&1),t=Cr(t,e,n),t!==null?t.sibling:null);Pe(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return M1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,O1(t,e,n)}return Cr(t,e,n)}var V1,vp,F1,U1;V1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vp=function(){};F1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,no(Xn.current);var o=null;switch(n){case"input":i=Uh(t,i),r=Uh(t,r),o=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),o=[];break;case"textarea":i=zh(t,i),r=zh(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zc)}Hh(n,r);var s;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var l=i[f];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(sl.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var u=r[f];if(l=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&u!==l&&(u!=null||l!=null))if(f==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(sl.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&Oe("scroll",t),o||l===u||(o=[])):(o=o||[]).push(f,u))}n&&(o=o||[]).push("style",n);var f=o;(e.updateQueue=f)&&(e.flags|=4)}};U1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Pa(t,e){if(!Me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gk(t,e,n){var r=e.pendingProps;switch(Lm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return Qt(e.type)&&ed(),Rt(e),null;case 3:return r=e.stateNode,Os(),De(Gt),De(Lt),Hm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(nc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xn!==null&&(Sp(xn),xn=null))),vp(t,e),Rt(e),null;case 5:$m(e);var i=no(yl.current);if(n=e.type,t!==null&&e.stateNode!=null)F1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(W(166));return Rt(e),null}if(t=no(Xn.current),nc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Gn]=e,r[gl]=o,t=(e.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<Ma.length;i++)Oe(Ma[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Gv(r,o),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Oe("invalid",r);break;case"textarea":Yv(r,o),Oe("invalid",r)}Hh(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&tc(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&tc(r.textContent,l,t),i=["children",""+l]):sl.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Oe("scroll",r)}switch(n){case"input":Ku(r),Qv(r,o,!0);break;case"textarea":Ku(r),Xv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=h_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Gn]=e,t[gl]=r,V1(t,e,!1,!1),e.stateNode=t;e:{switch(s=Wh(n,r),n){case"dialog":Oe("cancel",t),Oe("close",t),i=r;break;case"iframe":case"object":case"embed":Oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ma.length;i++)Oe(Ma[i],t);i=r;break;case"source":Oe("error",t),i=r;break;case"img":case"image":case"link":Oe("error",t),Oe("load",t),i=r;break;case"details":Oe("toggle",t),i=r;break;case"input":Gv(t,r),i=Uh(t,r),Oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),Oe("invalid",t);break;case"textarea":Yv(t,r),i=zh(t,r),Oe("invalid",t);break;default:i=r}Hh(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?g_(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&p_(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&al(t,u):typeof u=="number"&&al(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(sl.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Oe("scroll",t):u!=null&&_m(t,o,u,s))}switch(n){case"input":Ku(t),Qv(t,r,!1);break;case"textarea":Ku(t),Xv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?vs(t,!!r.multiple,o,!1):r.defaultValue!=null&&vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rt(e),null;case 6:if(t&&e.stateNode!=null)U1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(W(166));if(n=no(yl.current),no(Xn.current),nc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gn]=e,(o=r.nodeValue!==n)&&(t=rn,t!==null))switch(t.tag){case 3:tc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gn]=e,e.stateNode=r}return Rt(e),null;case 13:if(De(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&nn!==null&&e.mode&1&&!(e.flags&128))r1(),Rs(),e.flags|=98560,o=!1;else if(o=nc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(W(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(W(317));o[Gn]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rt(e),o=!1}else xn!==null&&(Sp(xn),xn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?st===0&&(st=3):ng())),e.updateQueue!==null&&(e.flags|=4),Rt(e),null);case 4:return Os(),vp(t,e),t===null&&pl(e.stateNode.containerInfo),Rt(e),null;case 10:return Um(e.type._context),Rt(e),null;case 17:return Qt(e.type)&&ed(),Rt(e),null;case 19:if(De(Ue),o=e.memoizedState,o===null)return Rt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Pa(o,!1);else{if(st!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ad(t),s!==null){for(e.flags|=128,Pa(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe(Ue,Ue.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ge()>Ds&&(e.flags|=128,r=!0,Pa(o,!1),e.lanes=4194304)}else{if(!r)if(t=ad(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Me)return Rt(e),null}else 2*Ge()-o.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,r=!0,Pa(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ge(),e.sibling=null,n=Ue.current,Pe(Ue,r?n&1|2:n&1),e):(Rt(e),null);case 22:case 23:return tg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?tn&1073741824&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),null;case 24:return null;case 25:return null}throw Error(W(156,e.tag))}function vk(t,e){switch(Lm(e),e.tag){case 1:return Qt(e.type)&&ed(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),De(Gt),De(Lt),Hm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $m(e),null;case 13:if(De(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(W(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return De(Ue),null;case 4:return Os(),null;case 10:return Um(e.type._context),null;case 22:case 23:return tg(),null;case 24:return null;default:return null}}var oc=!1,Nt=!1,yk=typeof WeakSet=="function"?WeakSet:Set,Z=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(t,e,r)}else n.current=null}function yp(t,e,n){try{n()}catch(r){He(t,e,r)}}var jy=!1;function wk(t,e){if(tp=Yc,t=H_(),Nm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,f=0,p=0,y=t,w=null;t:for(;;){for(var A;y!==n||i!==0&&y.nodeType!==3||(l=s+i),y!==o||r!==0&&y.nodeType!==3||(u=s+r),y.nodeType===3&&(s+=y.nodeValue.length),(A=y.firstChild)!==null;)w=y,y=A;for(;;){if(y===t)break t;if(w===n&&++f===i&&(l=s),w===o&&++p===r&&(u=s),(A=y.nextSibling)!==null)break;y=w,w=y.parentNode}y=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(np={focusedElem:t,selectionRange:n},Yc=!1,Z=e;Z!==null;)if(e=Z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Z=t;else for(;Z!==null;){e=Z;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var N=x.memoizedProps,M=x.memoizedState,k=e.stateNode,T=k.getSnapshotBeforeUpdate(e.elementType===e.type?N:Pn(e.type,N),M);k.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var P=e.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(F){He(e,e.return,F)}if(t=e.sibling,t!==null){t.return=e.return,Z=t;break}Z=e.return}return x=jy,jy=!1,x}function Ya(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&yp(e,n,o)}i=i.next}while(i!==r)}}function Gd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function j1(t){var e=t.alternate;e!==null&&(t.alternate=null,j1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[gl],delete e[op],delete e[tk],delete e[nk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function B1(t){return t.tag===5||t.tag===3||t.tag===4}function By(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _p(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zc));else if(r!==4&&(t=t.child,t!==null))for(_p(t,e,n),t=t.sibling;t!==null;)_p(t,e,n),t=t.sibling}function Ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ep(t,e,n),t=t.sibling;t!==null;)Ep(t,e,n),t=t.sibling}var wt=null,Rn=!1;function Jr(t,e,n){for(n=n.child;n!==null;)z1(t,e,n),n=n.sibling}function z1(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(jd,n)}catch{}switch(n.tag){case 5:Nt||ds(n,e);case 6:var r=wt,i=Rn;wt=null,Jr(t,e,n),wt=r,Rn=i,wt!==null&&(Rn?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(Rn?(t=wt,n=n.stateNode,t.nodeType===8?oh(t.parentNode,n):t.nodeType===1&&oh(t,n),dl(t)):oh(wt,n.stateNode));break;case 4:r=wt,i=Rn,wt=n.stateNode.containerInfo,Rn=!0,Jr(t,e,n),wt=r,Rn=i;break;case 0:case 11:case 14:case 15:if(!Nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&yp(n,e,s),i=i.next}while(i!==r)}Jr(t,e,n);break;case 1:if(!Nt&&(ds(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){He(n,e,l)}Jr(t,e,n);break;case 21:Jr(t,e,n);break;case 22:n.mode&1?(Nt=(r=Nt)||n.memoizedState!==null,Jr(t,e,n),Nt=r):Jr(t,e,n);break;default:Jr(t,e,n)}}function zy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yk),e.forEach(function(r){var i=Ck.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:wt=l.stateNode,Rn=!1;break e;case 3:wt=l.stateNode.containerInfo,Rn=!0;break e;case 4:wt=l.stateNode.containerInfo,Rn=!0;break e}l=l.return}if(wt===null)throw Error(W(160));z1(o,s,i),wt=null,Rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(f){He(i,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$1(e,t),e=e.sibling}function $1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Wn(t),r&4){try{Ya(3,t,t.return),Gd(3,t)}catch(N){He(t,t.return,N)}try{Ya(5,t,t.return)}catch(N){He(t,t.return,N)}}break;case 1:Cn(e,t),Wn(t),r&512&&n!==null&&ds(n,n.return);break;case 5:if(Cn(e,t),Wn(t),r&512&&n!==null&&ds(n,n.return),t.flags&32){var i=t.stateNode;try{al(i,"")}catch(N){He(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&d_(i,o),Wh(l,s);var f=Wh(l,o);for(s=0;s<u.length;s+=2){var p=u[s],y=u[s+1];p==="style"?g_(i,y):p==="dangerouslySetInnerHTML"?p_(i,y):p==="children"?al(i,y):_m(i,p,y,f)}switch(l){case"input":jh(i,o);break;case"textarea":f_(i,o);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var A=o.value;A!=null?vs(i,!!o.multiple,A,!1):w!==!!o.multiple&&(o.defaultValue!=null?vs(i,!!o.multiple,o.defaultValue,!0):vs(i,!!o.multiple,o.multiple?[]:"",!1))}i[gl]=o}catch(N){He(t,t.return,N)}}break;case 6:if(Cn(e,t),Wn(t),r&4){if(t.stateNode===null)throw Error(W(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(N){He(t,t.return,N)}}break;case 3:if(Cn(e,t),Wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dl(e.containerInfo)}catch(N){He(t,t.return,N)}break;case 4:Cn(e,t),Wn(t);break;case 13:Cn(e,t),Wn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zm=Ge())),r&4&&zy(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Nt=(f=Nt)||p,Cn(e,t),Nt=f):Cn(e,t),Wn(t),r&8192){if(f=t.memoizedState!==null,(t.stateNode.isHidden=f)&&!p&&t.mode&1)for(Z=t,p=t.child;p!==null;){for(y=Z=p;Z!==null;){switch(w=Z,A=w.child,w.tag){case 0:case 11:case 14:case 15:Ya(4,w,w.return);break;case 1:ds(w,w.return);var x=w.stateNode;if(typeof x.componentWillUnmount=="function"){r=w,n=w.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(N){He(r,n,N)}}break;case 5:ds(w,w.return);break;case 22:if(w.memoizedState!==null){Hy(y);continue}}A!==null?(A.return=w,Z=A):Hy(y)}p=p.sibling}e:for(p=null,y=t;;){if(y.tag===5){if(p===null){p=y;try{i=y.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=y.stateNode,u=y.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=m_("display",s))}catch(N){He(t,t.return,N)}}}else if(y.tag===6){if(p===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(N){He(t,t.return,N)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;p===y&&(p=null),y=y.return}p===y&&(p=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Cn(e,t),Wn(t),r&4&&zy(t);break;case 21:break;default:Cn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(B1(n)){var r=n;break e}n=n.return}throw Error(W(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(al(i,""),r.flags&=-33);var o=By(t);Ep(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=By(t);_p(t,l,s);break;default:throw Error(W(161))}}catch(u){He(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _k(t,e,n){Z=t,H1(t)}function H1(t,e,n){for(var r=(t.mode&1)!==0;Z!==null;){var i=Z,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||oc;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Nt;l=oc;var f=Nt;if(oc=s,(Nt=u)&&!f)for(Z=i;Z!==null;)s=Z,u=s.child,s.tag===22&&s.memoizedState!==null?Wy(i):u!==null?(u.return=s,Z=u):Wy(i);for(;o!==null;)Z=o,H1(o),o=o.sibling;Z=i,oc=l,Nt=f}$y(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Z=o):$y(t)}}function $y(t){for(;Z!==null;){var e=Z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||Gd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Ay(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ay(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var p=f.memoizedState;if(p!==null){var y=p.dehydrated;y!==null&&dl(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}Nt||e.flags&512&&wp(e)}catch(w){He(e,e.return,w)}}if(e===t){Z=null;break}if(n=e.sibling,n!==null){n.return=e.return,Z=n;break}Z=e.return}}function Hy(t){for(;Z!==null;){var e=Z;if(e===t){Z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Z=n;break}Z=e.return}}function Wy(t){for(;Z!==null;){var e=Z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gd(4,e)}catch(u){He(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){He(e,i,u)}}var o=e.return;try{wp(e)}catch(u){He(e,o,u)}break;case 5:var s=e.return;try{wp(e)}catch(u){He(e,s,u)}}}catch(u){He(e,e.return,u)}if(e===t){Z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Z=l;break}Z=e.return}}var Ek=Math.ceil,cd=Lr.ReactCurrentDispatcher,Xm=Lr.ReactCurrentOwner,wn=Lr.ReactCurrentBatchConfig,we=0,pt=null,Je=null,Tt=0,tn=0,fs=Ni(0),st=0,Tl=null,mo=0,Qd=0,Jm=0,Xa=null,qt=null,Zm=0,Ds=1/0,pr=null,dd=!1,Tp=null,vi=null,sc=!1,ui=null,fd=0,Ja=0,Ip=null,xc=-1,Oc=0;function jt(){return we&6?Ge():xc!==-1?xc:xc=Ge()}function yi(t){return t.mode&1?we&2&&Tt!==0?Tt&-Tt:ik.transition!==null?(Oc===0&&(Oc=C_()),Oc):(t=ke,t!==0||(t=window.event,t=t===void 0?16:L_(t.type)),t):1}function Mn(t,e,n,r){if(50<Ja)throw Ja=0,Ip=null,Error(W(185));zl(t,n,r),(!(we&2)||t!==pt)&&(t===pt&&(!(we&2)&&(Qd|=n),st===4&&ii(t,Tt)),Yt(t,r),n===1&&we===0&&!(e.mode&1)&&(Ds=Ge()+500,Wd&&Di()))}function Yt(t,e){var n=t.callbackNode;iS(t,e);var r=Qc(t,t===pt?Tt:0);if(r===0)n!==null&&ey(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ey(n),e===1)t.tag===0?rk(qy.bind(null,t)):e1(qy.bind(null,t)),ZS(function(){!(we&6)&&Di()}),n=null;else{switch(P_(r)){case 1:n=Sm;break;case 4:n=k_;break;case 16:n=Gc;break;case 536870912:n=A_;break;default:n=Gc}n=J1(n,W1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function W1(t,e){if(xc=-1,Oc=0,we&6)throw Error(W(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var r=Qc(t,t===pt?Tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hd(t,r);else{e=r;var i=we;we|=2;var o=K1();(pt!==t||Tt!==e)&&(pr=null,Ds=Ge()+500,ao(t,e));do try{bk();break}catch(l){q1(t,l)}while(!0);Fm(),cd.current=o,we=i,Je!==null?e=0:(pt=null,Tt=0,e=st)}if(e!==0){if(e===2&&(i=Yh(t),i!==0&&(r=i,e=bp(t,i))),e===1)throw n=Tl,ao(t,0),ii(t,r),Yt(t,Ge()),n;if(e===6)ii(t,r);else{if(i=t.current.alternate,!(r&30)&&!Tk(i)&&(e=hd(t,r),e===2&&(o=Yh(t),o!==0&&(r=o,e=bp(t,o))),e===1))throw n=Tl,ao(t,0),ii(t,r),Yt(t,Ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(W(345));case 2:Ji(t,qt,pr);break;case 3:if(ii(t,r),(r&130023424)===r&&(e=Zm+500-Ge(),10<e)){if(Qc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ip(Ji.bind(null,t,qt,pr),e);break}Ji(t,qt,pr);break;case 4:if(ii(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Ln(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ek(r/1960))-r,10<r){t.timeoutHandle=ip(Ji.bind(null,t,qt,pr),r);break}Ji(t,qt,pr);break;case 5:Ji(t,qt,pr);break;default:throw Error(W(329))}}}return Yt(t,Ge()),t.callbackNode===n?W1.bind(null,t):null}function bp(t,e){var n=Xa;return t.current.memoizedState.isDehydrated&&(ao(t,e).flags|=256),t=hd(t,e),t!==2&&(e=qt,qt=n,e!==null&&Sp(e)),t}function Sp(t){qt===null?qt=t:qt.push.apply(qt,t)}function Tk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Fn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ii(t,e){for(e&=~Jm,e&=~Qd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ln(e),r=1<<n;t[n]=-1,e&=~r}}function qy(t){if(we&6)throw Error(W(327));Ts();var e=Qc(t,0);if(!(e&1))return Yt(t,Ge()),null;var n=hd(t,e);if(t.tag!==0&&n===2){var r=Yh(t);r!==0&&(e=r,n=bp(t,r))}if(n===1)throw n=Tl,ao(t,0),ii(t,e),Yt(t,Ge()),n;if(n===6)throw Error(W(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ji(t,qt,pr),Yt(t,Ge()),null}function eg(t,e){var n=we;we|=1;try{return t(e)}finally{we=n,we===0&&(Ds=Ge()+500,Wd&&Di())}}function go(t){ui!==null&&ui.tag===0&&!(we&6)&&Ts();var e=we;we|=1;var n=wn.transition,r=ke;try{if(wn.transition=null,ke=1,t)return t()}finally{ke=r,wn.transition=n,we=e,!(we&6)&&Di()}}function tg(){tn=fs.current,De(fs)}function ao(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,JS(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(Lm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ed();break;case 3:Os(),De(Gt),De(Lt),Hm();break;case 5:$m(r);break;case 4:Os();break;case 13:De(Ue);break;case 19:De(Ue);break;case 10:Um(r.type._context);break;case 22:case 23:tg()}n=n.return}if(pt=t,Je=t=wi(t.current,null),Tt=tn=e,st=0,Tl=null,Jm=Qd=mo=0,qt=Xa=null,to!==null){for(e=0;e<to.length;e++)if(n=to[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}to=null}return t}function q1(t,e){do{var n=Je;try{if(Fm(),Cc.current=ud,ld){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ld=!1}if(po=0,ht=it=je=null,Qa=!1,wl=0,Xm.current=null,n===null||n.return===null){st=1,Tl=e,Je=null;break}e:{var o=t,s=n.return,l=n,u=e;if(e=Tt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,p=l,y=p.tag;if(!(p.mode&1)&&(y===0||y===11||y===15)){var w=p.alternate;w?(p.updateQueue=w.updateQueue,p.memoizedState=w.memoizedState,p.lanes=w.lanes):(p.updateQueue=null,p.memoizedState=null)}var A=Ny(s);if(A!==null){A.flags&=-257,Dy(A,s,l,o,e),A.mode&1&&Oy(o,f,e),e=A,u=f;var x=e.updateQueue;if(x===null){var N=new Set;N.add(u),e.updateQueue=N}else x.add(u);break e}else{if(!(e&1)){Oy(o,f,e),ng();break e}u=Error(W(426))}}else if(Me&&l.mode&1){var M=Ny(s);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Dy(M,s,l,o,e),Mm(Ns(u,l));break e}}o=u=Ns(u,l),st!==4&&(st=2),Xa===null?Xa=[o]:Xa.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var k=P1(o,u,e);ky(o,k);break e;case 1:l=u;var T=o.type,P=o.stateNode;if(!(o.flags&128)&&(typeof T.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(vi===null||!vi.has(P)))){o.flags|=65536,e&=-e,o.lanes|=e;var F=R1(o,l,e);ky(o,F);break e}}o=o.return}while(o!==null)}Q1(n)}catch(z){e=z,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(!0)}function K1(){var t=cd.current;return cd.current=ud,t===null?ud:t}function ng(){(st===0||st===3||st===2)&&(st=4),pt===null||!(mo&268435455)&&!(Qd&268435455)||ii(pt,Tt)}function hd(t,e){var n=we;we|=2;var r=K1();(pt!==t||Tt!==e)&&(pr=null,ao(t,e));do try{Ik();break}catch(i){q1(t,i)}while(!0);if(Fm(),we=n,cd.current=r,Je!==null)throw Error(W(261));return pt=null,Tt=0,st}function Ik(){for(;Je!==null;)G1(Je)}function bk(){for(;Je!==null&&!Qb();)G1(Je)}function G1(t){var e=X1(t.alternate,t,tn);t.memoizedProps=t.pendingProps,e===null?Q1(t):Je=e,Xm.current=null}function Q1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vk(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{st=6,Je=null;return}}else if(n=gk(n,e,tn),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);st===0&&(st=5)}function Ji(t,e,n){var r=ke,i=wn.transition;try{wn.transition=null,ke=1,Sk(t,e,n,r)}finally{wn.transition=i,ke=r}return null}function Sk(t,e,n,r){do Ts();while(ui!==null);if(we&6)throw Error(W(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(W(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(oS(t,o),t===pt&&(Je=pt=null,Tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sc||(sc=!0,J1(Gc,function(){return Ts(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=wn.transition,wn.transition=null;var s=ke;ke=1;var l=we;we|=4,Xm.current=null,wk(t,n),$1(n,t),WS(np),Yc=!!tp,np=tp=null,t.current=n,_k(n),Yb(),we=l,ke=s,wn.transition=o}else t.current=n;if(sc&&(sc=!1,ui=t,fd=i),o=t.pendingLanes,o===0&&(vi=null),Zb(n.stateNode),Yt(t,Ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(dd)throw dd=!1,t=Tp,Tp=null,t;return fd&1&&t.tag!==0&&Ts(),o=t.pendingLanes,o&1?t===Ip?Ja++:(Ja=0,Ip=t):Ja=0,Di(),null}function Ts(){if(ui!==null){var t=P_(fd),e=wn.transition,n=ke;try{if(wn.transition=null,ke=16>t?16:t,ui===null)var r=!1;else{if(t=ui,ui=null,fd=0,we&6)throw Error(W(331));var i=we;for(we|=4,Z=t.current;Z!==null;){var o=Z,s=o.child;if(Z.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var f=l[u];for(Z=f;Z!==null;){var p=Z;switch(p.tag){case 0:case 11:case 15:Ya(8,p,o)}var y=p.child;if(y!==null)y.return=p,Z=y;else for(;Z!==null;){p=Z;var w=p.sibling,A=p.return;if(j1(p),p===f){Z=null;break}if(w!==null){w.return=A,Z=w;break}Z=A}}}var x=o.alternate;if(x!==null){var N=x.child;if(N!==null){x.child=null;do{var M=N.sibling;N.sibling=null,N=M}while(N!==null)}}Z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Z=s;else e:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ya(9,o,o.return)}var k=o.sibling;if(k!==null){k.return=o.return,Z=k;break e}Z=o.return}}var T=t.current;for(Z=T;Z!==null;){s=Z;var P=s.child;if(s.subtreeFlags&2064&&P!==null)P.return=s,Z=P;else e:for(s=T;Z!==null;){if(l=Z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gd(9,l)}}catch(z){He(l,l.return,z)}if(l===s){Z=null;break e}var F=l.sibling;if(F!==null){F.return=l.return,Z=F;break e}Z=l.return}}if(we=i,Di(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(jd,t)}catch{}r=!0}return r}finally{ke=n,wn.transition=e}}return!1}function Ky(t,e,n){e=Ns(n,e),e=P1(t,e,1),t=gi(t,e,1),e=jt(),t!==null&&(zl(t,1,e),Yt(t,e))}function He(t,e,n){if(t.tag===3)Ky(t,t,n);else for(;e!==null;){if(e.tag===3){Ky(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vi===null||!vi.has(r))){t=Ns(n,t),t=R1(e,t,1),e=gi(e,t,1),t=jt(),e!==null&&(zl(e,1,t),Yt(e,t));break}}e=e.return}}function kk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,pt===t&&(Tt&n)===n&&(st===4||st===3&&(Tt&130023424)===Tt&&500>Ge()-Zm?ao(t,0):Jm|=n),Yt(t,e)}function Y1(t,e){e===0&&(t.mode&1?(e=Yu,Yu<<=1,!(Yu&130023424)&&(Yu=4194304)):e=1);var n=jt();t=Ar(t,e),t!==null&&(zl(t,e,n),Yt(t,n))}function Ak(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y1(t,n)}function Ck(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(W(314))}r!==null&&r.delete(e),Y1(t,n)}var X1;X1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)Kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kt=!1,mk(t,e,n);Kt=!!(t.flags&131072)}else Kt=!1,Me&&e.flags&1048576&&t1(e,rd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Rc(t,e),t=e.pendingProps;var i=Ps(e,Lt.current);Es(e,n),i=qm(null,e,r,t,i,n);var o=Km();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(r)?(o=!0,td(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bm(e),i.updater=Kd,e.stateNode=i,i._reactInternals=e,dp(e,r,t,n),e=pp(null,e,r,!0,o,n)):(e.tag=0,Me&&o&&Dm(e),Ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Rc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Rk(r),t=Pn(r,t),i){case 0:e=hp(null,e,r,t,n);break e;case 1:e=Vy(null,e,r,t,n);break e;case 11:e=Ly(null,e,r,t,n);break e;case 14:e=My(null,e,r,Pn(r.type,t),n);break e}throw Error(W(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),hp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),Vy(t,e,r,i,n);case 3:e:{if(D1(e),t===null)throw Error(W(387));r=e.pendingProps,o=e.memoizedState,i=o.element,a1(t,e),sd(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Ns(Error(W(423)),e),e=Fy(t,e,r,n,i);break e}else if(r!==i){i=Ns(Error(W(424)),e),e=Fy(t,e,r,n,i);break e}else for(nn=mi(e.stateNode.containerInfo.firstChild),rn=e,Me=!0,xn=null,n=o1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),r===i){e=Cr(t,e,n);break e}Ut(t,e,r,n)}e=e.child}return e;case 5:return l1(e),t===null&&lp(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,rp(r,i)?s=null:o!==null&&rp(r,o)&&(e.flags|=32),N1(t,e),Ut(t,e,s,n),e.child;case 6:return t===null&&lp(e),null;case 13:return L1(t,e,n);case 4:return zm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xs(e,null,r,n):Ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),Ly(t,e,r,i,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Pe(id,r._currentValue),r._currentValue=s,o!==null)if(Fn(o.value,s)){if(o.children===i.children&&!Gt.current){e=Cr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Tr(-1,n&-n),u.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var p=f.pending;p===null?u.next=u:(u.next=p.next,p.next=u),f.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),up(o.return,n,e),l.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(W(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),up(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Es(e,n),i=En(i),r=r(i),e.flags|=1,Ut(t,e,r,n),e.child;case 14:return r=e.type,i=Pn(r,e.pendingProps),i=Pn(r.type,i),My(t,e,r,i,n);case 15:return x1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),Rc(t,e),e.tag=1,Qt(r)?(t=!0,td(e)):t=!1,Es(e,n),C1(e,r,i),dp(e,r,i,n),pp(null,e,r,!0,t,n);case 19:return M1(t,e,n);case 22:return O1(t,e,n)}throw Error(W(156,e.tag))};function J1(t,e){return S_(t,e)}function Pk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,r){return new Pk(t,e,n,r)}function rg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rk(t){if(typeof t=="function")return rg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tm)return 11;if(t===Im)return 14}return 2}function wi(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")rg(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ns:return lo(n.children,i,o,e);case Em:s=8,i|=8;break;case Lh:return t=yn(12,n,e,i|2),t.elementType=Lh,t.lanes=o,t;case Mh:return t=yn(13,n,e,i),t.elementType=Mh,t.lanes=o,t;case Vh:return t=yn(19,n,e,i),t.elementType=Vh,t.lanes=o,t;case l_:return Yd(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case s_:s=10;break e;case a_:s=9;break e;case Tm:s=11;break e;case Im:s=14;break e;case ti:s=16,r=null;break e}throw Error(W(130,t==null?t:typeof t,""))}return e=yn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function lo(t,e,n,r){return t=yn(7,t,r,e),t.lanes=n,t}function Yd(t,e,n,r){return t=yn(22,t,r,e),t.elementType=l_,t.lanes=n,t.stateNode={isHidden:!1},t}function hh(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function ph(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gf(0),this.expirationTimes=Gf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ig(t,e,n,r,i,o,s,l,u){return t=new xk(t,e,n,l,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=yn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bm(o),t}function Ok(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Z1(t){if(!t)return Si;t=t._reactInternals;e:{if(Ao(t)!==t||t.tag!==1)throw Error(W(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(W(171))}if(t.tag===1){var n=t.type;if(Qt(n))return Z_(t,n,e)}return e}function e2(t,e,n,r,i,o,s,l,u){return t=ig(n,r,!0,t,i,o,s,l,u),t.context=Z1(null),n=t.current,r=jt(),i=yi(n),o=Tr(r,i),o.callback=e??null,gi(n,o,i),t.current.lanes=i,zl(t,i,r),Yt(t,r),t}function Xd(t,e,n,r){var i=e.current,o=jt(),s=yi(i);return n=Z1(n),e.context===null?e.context=n:e.pendingContext=n,e=Tr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gi(i,e,s),t!==null&&(Mn(t,i,s,o),Ac(t,i,s)),s}function pd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function og(t,e){Gy(t,e),(t=t.alternate)&&Gy(t,e)}function Nk(){return null}var t2=typeof reportError=="function"?reportError:function(t){console.error(t)};function sg(t){this._internalRoot=t}Jd.prototype.render=sg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(W(409));Xd(t,e,null,null)};Jd.prototype.unmount=sg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;go(function(){Xd(null,t,null,null)}),e[kr]=null}};function Jd(t){this._internalRoot=t}Jd.prototype.unstable_scheduleHydration=function(t){if(t){var e=O_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ri.length&&e!==0&&e<ri[n].priority;n++);ri.splice(n,0,t),n===0&&D_(t)}};function ag(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qy(){}function Dk(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=pd(s);o.call(f)}}var s=e2(e,r,t,0,null,!1,!1,"",Qy);return t._reactRootContainer=s,t[kr]=s.current,pl(t.nodeType===8?t.parentNode:t),go(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var f=pd(u);l.call(f)}}var u=ig(t,0,!1,null,null,!1,!1,"",Qy);return t._reactRootContainer=u,t[kr]=u.current,pl(t.nodeType===8?t.parentNode:t),go(function(){Xd(e,u,n,r)}),u}function ef(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=pd(s);l.call(u)}}Xd(e,s,t,i)}else s=Dk(n,e,t,i,r);return pd(s)}R_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=La(e.pendingLanes);n!==0&&(km(e,n|1),Yt(e,Ge()),!(we&6)&&(Ds=Ge()+500,Di()))}break;case 13:go(function(){var r=Ar(t,1);if(r!==null){var i=jt();Mn(r,t,1,i)}}),og(t,1)}};Am=function(t){if(t.tag===13){var e=Ar(t,134217728);if(e!==null){var n=jt();Mn(e,t,134217728,n)}og(t,134217728)}};x_=function(t){if(t.tag===13){var e=yi(t),n=Ar(t,e);if(n!==null){var r=jt();Mn(n,t,e,r)}og(t,e)}};O_=function(){return ke};N_=function(t,e){var n=ke;try{return ke=t,e()}finally{ke=n}};Kh=function(t,e,n){switch(e){case"input":if(jh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Hd(r);if(!i)throw Error(W(90));c_(r),jh(r,i)}}}break;case"textarea":f_(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};w_=eg;__=go;var Lk={usingClientEntryPoint:!1,Events:[Hl,ss,Hd,v_,y_,eg]},Ra={findFiberByHostInstance:eo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mk={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||Nk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{jd=ac.inject(Mk),Yn=ac}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lk;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ag(e))throw Error(W(200));return Ok(t,e,null,n)};an.createRoot=function(t,e){if(!ag(t))throw Error(W(299));var n=!1,r="",i=t2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ig(t,1,!1,null,null,n,!1,r,i),t[kr]=e.current,pl(t.nodeType===8?t.parentNode:t),new sg(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(W(188)):(t=Object.keys(t).join(","),Error(W(268,t)));return t=I_(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return go(t)};an.hydrate=function(t,e,n){if(!Zd(e))throw Error(W(200));return ef(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!ag(t))throw Error(W(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=t2;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=e2(e,null,t,1,n??null,i,!1,o,s),t[kr]=e.current,pl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jd(e)};an.render=function(t,e,n){if(!Zd(e))throw Error(W(200));return ef(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!Zd(t))throw Error(W(40));return t._reactRootContainer?(go(function(){ef(null,null,t,!1,function(){t._reactRootContainer=null,t[kr]=null})}),!0):!1};an.unstable_batchedUpdates=eg;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zd(n))throw Error(W(200));if(t==null||t._reactInternals===void 0)throw Error(W(38));return ef(t,e,n,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function n2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2)}catch(t){console.error(t)}}n2(),n_.exports=an;var r2=n_.exports,Yy=r2;Nh.createRoot=Yy.createRoot,Nh.hydrateRoot=Yy.hydrateRoot;var Xy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],l=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},o2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,u=i+2<t.length,f=u?t[i+2]:0,p=o>>2,y=(o&3)<<4|l>>4;let w=(l&15)<<2|f>>6,A=f&63;u||(A=64,s||(w=64)),r.push(n[p],n[y],n[w],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const y=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||f==null||y==null)throw new Fk;const w=o<<2|l>>4;if(r.push(w),f!==64){const A=l<<4&240|f>>2;if(r.push(A),y!==64){const x=f<<6&192|y;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uk=function(t){const e=i2(t);return o2.encodeByteArray(e,!0)},md=function(t){return Uk(t).replace(/\./g,"")},s2=function(t){try{return o2.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=()=>jk().__FIREBASE_DEFAULTS__,zk=()=>{if(typeof process>"u"||typeof Xy>"u")return;const t=Xy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$k=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&s2(t[1]);return e&&JSON.parse(e)},tf=()=>{try{return Bk()||zk()||$k()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},a2=t=>{var e,n;return(n=(e=tf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hk=t=>{const e=a2(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},l2=()=>{var t;return(t=tf())===null||t===void 0?void 0:t.config},u2=t=>{var e;return(e=tf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[md(JSON.stringify(n)),md(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function Gk(){var t;const e=(t=tf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xk(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jk(){return!Gk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zk(){try{return typeof indexedDB=="object"}catch{return!1}}function eA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="FirebaseError";class Mr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tA,Object.setPrototypeOf(this,Mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ql.prototype.create)}}class ql{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?nA(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Mr(i,l,r)}}function nA(t,e){return t.replace(rA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rA=/\{\$([^}]+)}/g;function iA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Jy(o)&&Jy(s)){if(!gd(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Va(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Fa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function oA(t,e){const n=new sA(t,e);return n.subscribe.bind(n)}class sA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mh),i.error===void 0&&(i.error=mh),i.complete===void 0&&(i.complete=mh);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t){return t&&t._delegate?t._delegate:t}class vo{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Wk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cA(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uA(t){return t===Zi?void 0:t}function cA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const fA={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},hA=ge.INFO,pA={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},mA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lg{constructor(e){this.name=e,this._logLevel=hA,this._logHandler=mA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const gA=(t,e)=>e.some(n=>t instanceof n);let Zy,e0;function vA(){return Zy||(Zy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yA(){return e0||(e0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c2=new WeakMap,kp=new WeakMap,d2=new WeakMap,gh=new WeakMap,ug=new WeakMap;function wA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(_i(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&c2.set(n,t)}).catch(()=>{}),ug.set(e,t),e}function _A(t){if(kp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});kp.set(t,e)}let Ap={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||d2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _i(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EA(t){Ap=t(Ap)}function TA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vh(this),e,...n);return d2.set(r,e.sort?e.sort():[e]),_i(r)}:yA().includes(t)?function(...e){return t.apply(vh(this),e),_i(c2.get(this))}:function(...e){return _i(t.apply(vh(this),e))}}function IA(t){return typeof t=="function"?TA(t):(t instanceof IDBTransaction&&_A(t),gA(t,vA())?new Proxy(t,Ap):t)}function _i(t){if(t instanceof IDBRequest)return wA(t);if(gh.has(t))return gh.get(t);const e=IA(t);return e!==t&&(gh.set(t,e),ug.set(e,t)),e}const vh=t=>ug.get(t);function bA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=_i(s);return r&&s.addEventListener("upgradeneeded",u=>{r(_i(s.result),u.oldVersion,u.newVersion,_i(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const SA=["get","getKey","getAll","getAllKeys","count"],kA=["put","add","delete","clear"],yh=new Map;function t0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yh.get(e))return yh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=kA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SA.includes(n)))return;const o=async function(s,...l){const u=this.transaction(s,i?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),i&&u.done]))[0]};return yh.set(e,o),o}EA(t=>({...t,get:(e,n,r)=>t0(e,n)||t.get(e,n,r),has:(e,n)=>!!t0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cp="@firebase/app",n0="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new lg("@firebase/app"),PA="@firebase/app-compat",RA="@firebase/analytics-compat",xA="@firebase/analytics",OA="@firebase/app-check-compat",NA="@firebase/app-check",DA="@firebase/auth",LA="@firebase/auth-compat",MA="@firebase/database",VA="@firebase/database-compat",FA="@firebase/functions",UA="@firebase/functions-compat",jA="@firebase/installations",BA="@firebase/installations-compat",zA="@firebase/messaging",$A="@firebase/messaging-compat",HA="@firebase/performance",WA="@firebase/performance-compat",qA="@firebase/remote-config",KA="@firebase/remote-config-compat",GA="@firebase/storage",QA="@firebase/storage-compat",YA="@firebase/firestore",XA="@firebase/vertexai-preview",JA="@firebase/firestore-compat",ZA="firebase",eC="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="[DEFAULT]",tC={[Cp]:"fire-core",[PA]:"fire-core-compat",[xA]:"fire-analytics",[RA]:"fire-analytics-compat",[NA]:"fire-app-check",[OA]:"fire-app-check-compat",[DA]:"fire-auth",[LA]:"fire-auth-compat",[MA]:"fire-rtdb",[VA]:"fire-rtdb-compat",[FA]:"fire-fn",[UA]:"fire-fn-compat",[jA]:"fire-iid",[BA]:"fire-iid-compat",[zA]:"fire-fcm",[$A]:"fire-fcm-compat",[HA]:"fire-perf",[WA]:"fire-perf-compat",[qA]:"fire-rc",[KA]:"fire-rc-compat",[GA]:"fire-gcs",[QA]:"fire-gcs-compat",[YA]:"fire-fst",[JA]:"fire-fst-compat",[XA]:"fire-vertex","fire-js":"fire-js",[ZA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=new Map,nC=new Map,Rp=new Map;function r0(t,e){try{t.container.addComponent(e)}catch(n){yo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ls(t){const e=t.name;if(Rp.has(e))return yo.debug(`There were multiple attempts to register component ${e}.`),!1;Rp.set(e,t);for(const n of vd.values())r0(n,t);for(const n of nC.values())r0(n,t);return!0}function cg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function On(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new ql("app","Firebase",rC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=eC;function f2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ei.create("bad-app-name",{appName:String(i)});if(n||(n=l2()),!n)throw Ei.create("no-options");const o=vd.get(i);if(o){if(gd(n,o.options)&&gd(r,o.config))return o;throw Ei.create("duplicate-app",{appName:i})}const s=new dA(i);for(const u of Rp.values())s.addComponent(u);const l=new iC(n,r,s);return vd.set(i,l),l}function h2(t=Pp){const e=vd.get(t);if(!e&&t===Pp&&l2())return f2();if(!e)throw Ei.create("no-app",{appName:t});return e}function Ti(t,e,n){var r;let i=(r=tC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yo.warn(l.join(" "));return}Ls(new vo(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="firebase-heartbeat-database",sC=1,Il="firebase-heartbeat-store";let wh=null;function p2(){return wh||(wh=bA(oC,sC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Il)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ei.create("idb-open",{originalErrorMessage:t.message})})),wh}async function aC(t){try{const n=(await p2()).transaction(Il),r=await n.objectStore(Il).get(m2(t));return await n.done,r}catch(e){if(e instanceof Mr)yo.warn(e.message);else{const n=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yo.warn(n.message)}}}async function i0(t,e){try{const r=(await p2()).transaction(Il,"readwrite");await r.objectStore(Il).put(e,m2(t)),await r.done}catch(n){if(n instanceof Mr)yo.warn(n.message);else{const r=Ei.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yo.warn(r.message)}}}function m2(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=1024,uC=30*24*60*60*1e3;class cC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=o0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=uC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=o0(),{heartbeatsToSend:r,unsentEntries:i}=dC(this._heartbeatsCache.heartbeats),o=md(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function o0(){return new Date().toISOString().substring(0,10)}function dC(t,e=lC){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),s0(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),s0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zk()?eA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return i0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return i0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function s0(t){return md(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t){Ls(new vo("platform-logger",e=>new AA(e),"PRIVATE")),Ls(new vo("heartbeat",e=>new cC(e),"PRIVATE")),Ti(Cp,n0,t),Ti(Cp,n0,"esm2017"),Ti("fire-js","")}hC("");var pC="firebase",mC="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ti(pC,mC,"app");const gC={apiKey:"AIzaSyAQCwDr8Sh7GLZSUlCAnCcal7rAqBxG5-0",authDomain:"fir-app-7d6ea.firebaseapp.com",projectId:"fir-app-7d6ea",storageBucket:"fir-app-7d6ea.appspot.com",messagingSenderId:"340764694664",appId:"1:340764694664:web:6b92e4af5476eeeb4c273d"},nf=f2(gC);function dg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function g2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vC=g2,v2=new ql("auth","Firebase",g2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new lg("@firebase/auth");function yC(t,...e){yd.logLevel<=ge.WARN&&yd.warn(`Auth (${Ks}): ${t}`,...e)}function Dc(t,...e){yd.logLevel<=ge.ERROR&&yd.error(`Auth (${Ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw hg(t,...e)}function Vn(t,...e){return hg(t,...e)}function fg(t,e,n){const r=Object.assign(Object.assign({},vC()),{[e]:n});return new ql("auth","Firebase",r).create(e,{appName:t.name})}function Ir(t){return fg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&In(t,"argument-error"),fg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return v2.create(t,...e)}function oe(t,e,...n){if(!t)throw hg(e,...n)}function wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dc(e),new Error(e)}function Pr(t,e){t||wr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _C(){return a0()==="http:"||a0()==="https:"}function a0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_C()||Qk()||"connection"in navigator)?navigator.onLine:!0}function TC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pr(n>e,"Short delay should be less than long delay!"),this.isMobile=Kk()||Yk()}get(){return EC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t,e){Pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=new Gl(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fr(t,e,n,r,i={}){return w2(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const l=Kl(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),y2.fetch()(_2(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},o))})}async function w2(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},IC),e);try{const i=new kC(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw lc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw lc(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw lc(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw lc(t,"user-disabled",s);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw fg(t,p,f);In(t,p)}}catch(i){if(i instanceof Mr)throw i;In(t,"network-request-failed",{message:String(i)})}}async function Ql(t,e,n,r,i={}){const o=await Fr(t,e,n,r,i);return"mfaPendingCredential"in o&&In(t,"multi-factor-auth-required",{_serverResponse:o}),o}function _2(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?pg(t.config,i):`${t.config.apiScheme}://${i}`}function SC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vn(this.auth,"network-request-failed")),bC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Vn(t,e,r);return i.customData._tokenResponse=n,i}function l0(t){return t!==void 0&&t.enterprise!==void 0}class AC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function CC(t,e){return Fr(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(t,e){return Fr(t,"POST","/v1/accounts:delete",e)}async function E2(t,e){return Fr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RC(t,e=!1){const n=sn(t),r=await n.getIdToken(e),i=mg(r);oe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Za(_h(i.auth_time)),issuedAtTime:Za(_h(i.iat)),expirationTime:Za(_h(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function _h(t){return Number(t)*1e3}function mg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dc("JWT malformed, contained fewer than 3 sections"),null;try{const i=s2(n);return i?JSON.parse(i):(Dc("Failed to decode base64 JWT payload"),null)}catch(i){return Dc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function u0(t){const e=mg(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mr&&xC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Za(this.lastLoginAt),this.creationTime=Za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await bl(t,E2(n,{idToken:r}));oe(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?T2(o.providerUserInfo):[],l=DC(t.providerData,s),u=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),p=u?f:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Op(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,y)}async function NC(t){const e=sn(t);await wd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function T2(t){return t.map(e=>{var{providerId:n}=e,r=dg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(t,e){const n=await w2(t,{},async()=>{const r=Kl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=_2(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",y2.fetch()(s,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MC(t,e){return Fr(t,"POST","/v2/accounts:revokeToken",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):u0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=u0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await LC(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Is;return r&&(oe(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(oe(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(oe(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _r{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=dg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Op(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await bl(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RC(this,e)}reload(){return NC(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(On(this.auth.app))return Promise.reject(Ir(this.auth));const e=await this.getIdToken();return await bl(this,PC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,l,u,f,p;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,A=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(s=n.photoURL)!==null&&s!==void 0?s:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,k=(f=n.createdAt)!==null&&f!==void 0?f:void 0,T=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:P,emailVerified:F,isAnonymous:z,providerData:q,stsTokenManager:S}=n;oe(P&&S,e,"internal-error");const E=Is.fromJSON(this.name,S);oe(typeof P=="string",e,"internal-error"),Zr(y,e.name),Zr(w,e.name),oe(typeof F=="boolean",e,"internal-error"),oe(typeof z=="boolean",e,"internal-error"),Zr(A,e.name),Zr(x,e.name),Zr(N,e.name),Zr(M,e.name),Zr(k,e.name),Zr(T,e.name);const I=new _r({uid:P,auth:e,email:w,emailVerified:F,displayName:y,isAnonymous:z,photoURL:x,phoneNumber:A,tenantId:N,stsTokenManager:E,createdAt:k,lastLoginAt:T});return q&&Array.isArray(q)&&(I.providerData=q.map(C=>Object.assign({},C))),M&&(I._redirectEventId=M),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Is;i.updateFromServerResponse(n);const o=new _r({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];oe(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?T2(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new Is;l.updateFromIdToken(r);const u=new _r({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:s}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Op(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=new Map;function Er(t){Pr(t instanceof Function,"Expected a class definition");let e=c0.get(t);return e?(Pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,c0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}I2.type="NONE";const d0=I2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Lc(this.userKey,i.apiKey,o),this.fullPersistenceKey=Lc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bs(Er(d0),e,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||Er(d0);const s=Lc(r,e.config.apiKey,e.name);let l=null;for(const f of n)try{const p=await f._get(s);if(p){const y=_r._fromJSON(e,p);f!==o&&(l=y),o=f;break}}catch{}const u=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new bs(o,e,r):(o=u[0],l&&await o._set(s,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(s)}catch{}})),new bs(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(k2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(b2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(C2(e))return"Blackberry";if(P2(e))return"Webos";if(gg(e))return"Safari";if((e.includes("chrome/")||S2(e))&&!e.includes("edge/"))return"Chrome";if(A2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function b2(t=St()){return/firefox\//i.test(t)}function gg(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function S2(t=St()){return/crios\//i.test(t)}function k2(t=St()){return/iemobile/i.test(t)}function A2(t=St()){return/android/i.test(t)}function C2(t=St()){return/blackberry/i.test(t)}function P2(t=St()){return/webos/i.test(t)}function rf(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VC(t=St()){var e;return rf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FC(){return Xk()&&document.documentMode===10}function R2(t=St()){return rf(t)||A2(t)||P2(t)||C2(t)||/windows phone/i.test(t)||k2(t)}function UC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(t,e=[]){let n;switch(t){case"Browser":n=f0(St());break;case"Worker":n=`${f0(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,l)=>{try{const u=e(o);s(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(t,e={}){return Fr(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=6;class $C{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:zC,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new h0(this),this.idTokenSubscription=new h0(this),this.beforeStateQueue=new jC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await E2(this,{idToken:e}),r=await _r._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(On(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===l)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(On(this.app))return Promise.reject(Ir(this));const n=e?sn(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return On(this.app)?Promise.reject(Ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return On(this.app)?Promise.reject(Ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BC(this),n=new $C(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ql("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Er(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ur(t){return sn(t)}class h0{constructor(e){this.auth=e,this.observer=null,this.addObserver=oA(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WC(t){of=t}function O2(t){return of.loadJS(t)}function qC(){return of.recaptchaEnterpriseScript}function KC(){return of.gapiScript}function GC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const QC="recaptcha-enterprise",YC="NO_RECAPTCHA";class XC{constructor(e){this.type=QC,this.auth=Ur(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,l)=>{CC(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new AC(u);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,s(f.siteKey)}}).catch(u=>{l(u)})})}function i(o,s,l){const u=window.grecaptcha;l0(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(f=>{s(f)}).catch(()=>{s(YC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(l=>{if(!n&&l0(window.grecaptcha))i(l,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let u=qC();u.length!==0&&(u+=l),O2(u).then(()=>{i(l,o,s)}).catch(f=>{s(f)})}}).catch(l=>{s(l)})})}}async function p0(t,e,n,r=!1){const i=new XC(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function _d(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await p0(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await p0(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t,e){const n=cg(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(gd(o,e??{}))return i;In(i,"already-initialized")}return n.initialize({options:e})}function ZC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eP(t,e,n){const r=Ur(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=N2(e),{host:s,port:l}=tP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),nP()}function N2(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tP(t){const e=N2(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:m0(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:m0(s)}}}function m0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,n){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}async function rP(t,e){return Fr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e){return Ql(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}async function oP(t,e){return Fr(t,"POST","/v1/accounts:sendOobCode",Vr(t,e))}async function sP(t,e){return oP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(t,e){return Ql(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function lP(t,e){return Ql(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends vg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Sl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _d(e,n,"signInWithPassword",iP);case"emailLink":return aP(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _d(e,r,"signUpPassword",rP);case"emailLink":return lP(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t,e){return Ql(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP="http://localhost";class wo extends vg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=dg(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new wo(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ss(e,n)}buildRequest(){const e={requestUri:uP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Kl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dP(t){const e=Va(Fa(t)).link,n=e?Va(Fa(e)).deep_link_id:null,r=Va(Fa(t)).deep_link_id;return(r?Va(Fa(r)).link:null)||r||n||e||t}class yg{constructor(e){var n,r,i,o,s,l;const u=Va(Fa(e)),f=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,y=cP((i=u.mode)!==null&&i!==void 0?i:null);oe(f&&p&&y,"argument-error"),this.apiKey=f,this.operation=y,this.code=p,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=u.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=dP(e);try{return new yg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.providerId=Gs.PROVIDER_ID}static credential(e,n){return Sl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=yg.parseLink(n);return oe(r,"argument-error"),Sl._fromEmailAndCode(e,r.code,r.tenantId)}}Gs.PROVIDER_ID="password";Gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends wg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Yl{constructor(){super("facebook.com")}static credential(e){return wo._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wo._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Yl{constructor(){super("github.com")}static credential(e){return wo._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Yl{constructor(){super("twitter.com")}static credential(e,n){return wo._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ai.credential(n,r)}catch{return null}}}ai.TWITTER_SIGN_IN_METHOD="twitter.com";ai.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(t,e){return Ql(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await _r._fromIdTokenResponse(e,r,i),s=g0(r);return new _o({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=g0(r);return new _o({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function g0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends Mr{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ed.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ed(e,n,r,i)}}function D2(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ed._fromErrorAndOperation(t,o,e,r):o})}async function hP(t,e,n=!1){const r=await bl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _o._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e,n=!1){const{auth:r}=t;if(On(r.app))return Promise.reject(Ir(r));const i="reauthenticate";try{const o=await bl(t,D2(r,i,e,t),n);oe(o.idToken,r,"internal-error");const s=mg(o.idToken);oe(s,r,"internal-error");const{sub:l}=s;return oe(t.uid===l,r,"user-mismatch"),_o._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&In(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(t,e,n=!1){if(On(t.app))return Promise.reject(Ir(t));const r="signIn",i=await D2(t,r,e),o=await _o._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function mP(t,e){return L2(Ur(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M2(t){const e=Ur(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gP(t,e,n){const r=Ur(t);await _d(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",sP)}async function vP(t,e,n){if(On(t.app))return Promise.reject(Ir(t));const r=Ur(t),s=await _d(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&M2(t),u}),l=await _o._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(l.user),l}function yP(t,e,n){return On(t.app)?Promise.reject(Ir(t)):mP(sn(t),Gs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&M2(t),r})}function wP(t,e,n,r){return sn(t).onIdTokenChanged(e,n,r)}function _P(t,e,n){return sn(t).beforeAuthStateChanged(e,n)}function _g(t,e,n,r){return sn(t).onAuthStateChanged(e,n,r)}function V2(t){return sn(t).signOut()}const Td="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Td,"1"),this.storage.removeItem(Td),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(){const t=St();return gg(t)||rf(t)}const TP=1e3,IP=10;class U2 extends F2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=EP()&&UC(),this.fallbackToPolling=R2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,l,u)=>{this.notifyListeners(s,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);FC()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,IP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}U2.type="LOCAL";const bP=U2;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2 extends F2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}j2.type="SESSION";const B2=j2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new sf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(s).map(async f=>f(n.origin,o)),u=await SP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,u)=>{const f=Eg("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(y){const w=y;if(w.data.eventId===f)switch(w.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(w.data.response);break;default:clearTimeout(p),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return window}function AP(t){Jn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function CP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RP(){return z2()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2="firebaseLocalStorageDb",xP=1,Id="firebaseLocalStorage",H2="fbase_key";class Xl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function af(t,e){return t.transaction([Id],e?"readwrite":"readonly").objectStore(Id)}function OP(){const t=indexedDB.deleteDatabase($2);return new Xl(t).toPromise()}function Np(){const t=indexedDB.open($2,xP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Id,{keyPath:H2})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Id)?e(r):(r.close(),await OP(),e(await Np()))})})}async function v0(t,e,n){const r=af(t,!0).put({[H2]:e,value:n});return new Xl(r).toPromise()}async function NP(t,e){const n=af(t,!1).get(e),r=await new Xl(n).toPromise();return r===void 0?null:r.value}function y0(t,e){const n=af(t,!0).delete(e);return new Xl(n).toPromise()}const DP=800,LP=3;class W2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Np(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return z2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sf._getInstance(RP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CP(),!this.activeServiceWorker)return;this.sender=new kP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Np();return await v0(e,Td,"1"),await y0(e,Td),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>v0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>y0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=af(i,!1).getAll();return new Xl(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}W2.type="LOCAL";const MP=W2;new Gl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q2(t,e){return e?Er(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg extends vg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VP(t){return L2(t.auth,new Tg(t),t.bypassAuthState)}function FP(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),pP(n,new Tg(t),t.bypassAuthState)}async function UP(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),hP(n,new Tg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:l}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VP;case"linkViaPopup":case"linkViaRedirect":return UP;case"reauthViaPopup":case"reauthViaRedirect":return FP;default:In(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=new Gl(2e3,1e4);async function BP(t,e,n){if(On(t.app))return Promise.reject(Vn(t,"operation-not-supported-in-this-environment"));const r=Ur(t);wC(t,e,wg);const i=q2(r,n);return new ro(r,"signInViaPopup",e,i).executeNotNull()}class ro extends K2{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ro.currentPopupAction&&ro.currentPopupAction.cancel(),ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=Eg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jP.get())};e()}}ro.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="pendingRedirect",Mc=new Map;class $P extends K2{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mc.get(this.auth._key());if(!e){try{const r=await HP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mc.set(this.auth._key(),e)}return this.bypassAuthState||Mc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HP(t,e){const n=KP(e),r=qP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function WP(t,e){Mc.set(t._key(),e)}function qP(t){return Er(t._redirectPersistence)}function KP(t){return Lc(zP,t.config.apiKey,t.name)}async function GP(t,e,n=!1){if(On(t.app))return Promise.reject(Ir(t));const r=Ur(t),i=q2(r,e),s=await new $P(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=10*60*1e3;class YP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!G2(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QP&&this.cachedEventUids.clear(),this.cachedEventUids.has(w0(e))}saveEventToCache(e){this.cachedEventUids.add(w0(e)),this.lastProcessedEventTime=Date.now()}}function w0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function G2({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return G2(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JP(t,e={}){return Fr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eR=/^https?/;async function tR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JP(t);for(const n of e)try{if(nR(n))return}catch{}In(t,"unauthorized-domain")}function nR(t){const e=xp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!eR.test(n))return!1;if(ZP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=new Gl(3e4,6e4);function _0(){const t=Jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iR(t){return new Promise((e,n)=>{var r,i,o;function s(){_0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_0(),n(Vn(t,"network-request-failed"))},timeout:rR.get()})}if(!((i=(r=Jn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Jn().gapi)===null||o===void 0)&&o.load)s();else{const l=GC("iframefcb");return Jn()[l]=()=>{gapi.load?s():n(Vn(t,"network-request-failed"))},O2(`${KC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Vc=null,e})}let Vc=null;function oR(t){return Vc=Vc||iR(t),Vc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=new Gl(5e3,15e3),aR="__/auth/iframe",lR="emulator/auth/iframe",uR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dR(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pg(e,lR):`https://${t.config.authDomain}/${aR}`,r={apiKey:e.apiKey,appName:t.name,v:Ks},i=cR.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Kl(r).slice(1)}`}async function fR(t){const e=await oR(t),n=Jn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:dR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Vn(t,"network-request-failed"),l=Jn().setTimeout(()=>{o(s)},sR.get());function u(){Jn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pR=500,mR=600,gR="_blank",vR="http://localhost";class E0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yR(t,e,n,r=pR,i=mR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},hR),{width:r.toString(),height:i.toString(),top:o,left:s}),f=St().toLowerCase();n&&(l=S2(f)?gR:n),b2(f)&&(e=e||vR,u.scrollbars="yes");const p=Object.entries(u).reduce((w,[A,x])=>`${w}${A}=${x},`,"");if(VC(f)&&l!=="_self")return wR(e||"",l),new E0(null);const y=window.open(e||"",l,p);oe(y,t,"popup-blocked");try{y.focus()}catch{}return new E0(y)}function wR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="__/auth/handler",ER="emulator/auth/handler",TR=encodeURIComponent("fac");async function T0(t,e,n,r,i,o){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ks,eventId:i};if(e instanceof wg){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",iA(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))s[p]=y}if(e instanceof Yl){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(s.scopes=p.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),f=u?`#${TR}=${encodeURIComponent(u)}`:"";return`${IR(t)}?${Kl(l).slice(1)}${f}`}function IR({config:t}){return t.emulator?pg(t,ER):`https://${t.authDomain}/${_R}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="webStorageSupport";class bR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=B2,this._completeRedirectFn=GP,this._overrideRedirectResult=WP}async _openPopup(e,n,r,i){var o;Pr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await T0(e,n,r,xp(),i);return yR(e,s,Eg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await T0(e,n,r,xp(),i);return AP(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Pr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fR(e),r=new YP(e);return n.register("authEvent",i=>(oe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Eh,{type:Eh},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Eh];s!==void 0&&n(!!s),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return R2()||gg()||rf()}}const SR=bR;var I0="@firebase/auth",b0="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CR(t){Ls(new vo("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=r.options;oe(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x2(t)},f=new HC(r,i,o,u);return ZC(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ls(new vo("auth-internal",e=>{const n=Ur(e.getProvider("auth").getImmediate());return(r=>new kR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ti(I0,b0,AR(t)),Ti(I0,b0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=5*60,RR=u2("authIdTokenMaxAge")||PR;let S0=null;const xR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RR)return;const i=n==null?void 0:n.token;S0!==i&&(S0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lf(t=h2()){const e=cg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JC(t,{popupRedirectResolver:SR,persistence:[MP,bP,B2]}),r=u2("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=xR(o.toString());_P(n,s,()=>s(n.currentUser)),wP(n,l=>s(l))}}const i=a2("auth");return i&&eP(n,`http://${i}`),n}function OR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}WC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Vn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",OR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CR("Browser");/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kl.apply(this,arguments)}var ci;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ci||(ci={}));const k0="popstate";function NR(t){t===void 0&&(t={});function e(i,o){let{pathname:s="/",search:l="",hash:u=""}=Co(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Dp("",{pathname:s,search:l,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let u=i.location.href,f=u.indexOf("#");l=f===-1?u:u.slice(0,f)}return l+"#"+(typeof o=="string"?o:Q2(o))}function r(i,o){Ig(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return LR(e,n,r,t)}function at(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ig(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function DR(){return Math.random().toString(36).substr(2,8)}function A0(t,e){return{usr:t.state,key:t.key,idx:e}}function Dp(t,e,n,r){return n===void 0&&(n=null),kl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Co(e):e,{state:n,key:e&&e.key||r||DR()})}function Q2(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Co(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function LR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=ci.Pop,u=null,f=p();f==null&&(f=0,s.replaceState(kl({},s.state,{idx:f}),""));function p(){return(s.state||{idx:null}).idx}function y(){l=ci.Pop;let M=p(),k=M==null?null:M-f;f=M,u&&u({action:l,location:N.location,delta:k})}function w(M,k){l=ci.Push;let T=Dp(N.location,M,k);n&&n(T,M),f=p()+1;let P=A0(T,f),F=N.createHref(T);try{s.pushState(P,"",F)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(F)}o&&u&&u({action:l,location:N.location,delta:1})}function A(M,k){l=ci.Replace;let T=Dp(N.location,M,k);n&&n(T,M),f=p();let P=A0(T,f),F=N.createHref(T);s.replaceState(P,"",F),o&&u&&u({action:l,location:N.location,delta:0})}function x(M){let k=i.location.origin!=="null"?i.location.origin:i.location.href,T=typeof M=="string"?M:Q2(M);return T=T.replace(/ $/,"%20"),at(k,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,k)}let N={get action(){return l},get location(){return t(i,s)},listen(M){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(k0,y),u=M,()=>{i.removeEventListener(k0,y),u=null}},createHref(M){return e(i,M)},createURL:x,encodeLocation(M){let k=x(M);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:w,replace:A,go(M){return s.go(M)}};return N}var C0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(C0||(C0={}));function MR(t,e,n){return n===void 0&&(n="/"),VR(t,e,n,!1)}function VR(t,e,n,r){let i=typeof e=="string"?Co(e):e,o=J2(i.pathname||"/",n);if(o==null)return null;let s=Y2(t);FR(s);let l=null;for(let u=0;l==null&&u<s.length;++u){let f=QR(o);l=KR(s[u],f,r)}return l}function Y2(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(at(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let f=uo([r,u.relativePath]),p=n.concat(u);o.children&&o.children.length>0&&(at(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Y2(o.children,e,p,f)),!(o.path==null&&!o.index)&&e.push({path:f,score:WR(f,o.index),routesMeta:p})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let u of X2(o.path))i(o,s,u)}),e}function X2(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=X2(r.join("/")),l=[];return l.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...s),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function FR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:qR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const UR=/^:[\w-]+$/,jR=3,BR=2,zR=1,$R=10,HR=-2,P0=t=>t==="*";function WR(t,e){let n=t.split("/"),r=n.length;return n.some(P0)&&(r+=HR),e&&(r+=BR),n.filter(i=>!P0(i)).reduce((i,o)=>i+(UR.test(o)?jR:o===""?zR:$R),r)}function qR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function KR(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let l=0;l<r.length;++l){let u=r[l],f=l===r.length-1,p=o==="/"?e:e.slice(o.length)||"/",y=R0({path:u.relativePath,caseSensitive:u.caseSensitive,end:f},p),w=u.route;if(!y&&f&&n&&!r[r.length-1].route.index&&(y=R0({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},p)),!y)return null;Object.assign(i,y.params),s.push({params:i,pathname:uo([o,y.pathname]),pathnameBase:tx(uo([o,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(o=uo([o,y.pathnameBase]))}return s}function R0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=GR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((f,p,y)=>{let{paramName:w,isOptional:A}=p;if(w==="*"){let N=l[y]||"";s=o.slice(0,o.length-N.length).replace(/(.)\/+$/,"$1")}const x=l[y];return A&&!x?f[w]=void 0:f[w]=(x||"").replace(/%2F/g,"/"),f},{}),pathname:o,pathnameBase:s,pattern:t}}function GR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ig(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function QR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ig(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function J2(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function YR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Co(t):t;return{pathname:n?n.startsWith("/")?n:XR(n,e):e,search:nx(r),hash:rx(i)}}function XR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Th(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function JR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ZR(t,e){let n=JR(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ex(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Co(t):(i=kl({},t),at(!i.pathname||!i.pathname.includes("?"),Th("?","pathname","search",i)),at(!i.pathname||!i.pathname.includes("#"),Th("#","pathname","hash",i)),at(!i.search||!i.search.includes("#"),Th("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let y=e.length-1;if(!r&&s.startsWith("..")){let w=s.split("/");for(;w[0]==="..";)w.shift(),y-=1;i.pathname=w.join("/")}l=y>=0?e[y]:"/"}let u=YR(i,l),f=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(f||p)&&(u.pathname+="/"),u}const uo=t=>t.join("/").replace(/\/\/+/g,"/"),tx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),nx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,rx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ix(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Z2=["post","put","patch","delete"];new Set(Z2);const ox=["get",...Z2];new Set(ox);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Al.apply(this,arguments)}const bg=X.createContext(null),sx=X.createContext(null),uf=X.createContext(null),cf=X.createContext(null),Qs=X.createContext({outlet:null,matches:[],isDataRoute:!1}),eE=X.createContext(null);function df(){return X.useContext(cf)!=null}function tE(){return df()||at(!1),X.useContext(cf).location}function nE(t){X.useContext(uf).static||X.useLayoutEffect(t)}function Sg(){let{isDataRoute:t}=X.useContext(Qs);return t?wx():ax()}function ax(){df()||at(!1);let t=X.useContext(bg),{basename:e,future:n,navigator:r}=X.useContext(uf),{matches:i}=X.useContext(Qs),{pathname:o}=tE(),s=JSON.stringify(ZR(i,n.v7_relativeSplatPath)),l=X.useRef(!1);return nE(()=>{l.current=!0}),X.useCallback(function(f,p){if(p===void 0&&(p={}),!l.current)return;if(typeof f=="number"){r.go(f);return}let y=ex(f,JSON.parse(s),o,p.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:uo([e,y.pathname])),(p.replace?r.replace:r.push)(y,p.state,p)},[e,r,s,o,t])}function lx(t,e){return ux(t,e)}function ux(t,e,n,r){df()||at(!1);let{navigator:i}=X.useContext(uf),{matches:o}=X.useContext(Qs),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let f=tE(),p;if(e){var y;let M=typeof e=="string"?Co(e):e;u==="/"||(y=M.pathname)!=null&&y.startsWith(u)||at(!1),p=M}else p=f;let w=p.pathname||"/",A=w;if(u!=="/"){let M=u.replace(/^\//,"").split("/");A="/"+w.replace(/^\//,"").split("/").slice(M.length).join("/")}let x=MR(t,{pathname:A}),N=px(x&&x.map(M=>Object.assign({},M,{params:Object.assign({},l,M.params),pathname:uo([u,i.encodeLocation?i.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?u:uo([u,i.encodeLocation?i.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),o,n,r);return e&&N?X.createElement(cf.Provider,{value:{location:Al({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:ci.Pop}},N):N}function cx(){let t=yx(),e=ix(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),n?X.createElement("pre",{style:i},n):null,null)}const dx=X.createElement(cx,null);class fx extends X.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?X.createElement(Qs.Provider,{value:this.props.routeContext},X.createElement(eE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hx(t){let{routeContext:e,match:n,children:r}=t,i=X.useContext(bg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),X.createElement(Qs.Provider,{value:e},r)}function px(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=s.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);p>=0||at(!1),s=s.slice(0,Math.min(s.length,p+1))}let u=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let y=s[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=p),y.route.id){let{loaderData:w,errors:A}=n,x=y.route.loader&&w[y.route.id]===void 0&&(!A||A[y.route.id]===void 0);if(y.route.lazy||x){u=!0,f>=0?s=s.slice(0,f+1):s=[s[0]];break}}}return s.reduceRight((p,y,w)=>{let A,x=!1,N=null,M=null;n&&(A=l&&y.route.id?l[y.route.id]:void 0,N=y.route.errorElement||dx,u&&(f<0&&w===0?(x=!0,M=null):f===w&&(x=!0,M=y.route.hydrateFallbackElement||null)));let k=e.concat(s.slice(0,w+1)),T=()=>{let P;return A?P=N:x?P=M:y.route.Component?P=X.createElement(y.route.Component,null):y.route.element?P=y.route.element:P=p,X.createElement(hx,{match:y,routeContext:{outlet:p,matches:k,isDataRoute:n!=null},children:P})};return n&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?X.createElement(fx,{location:n.location,revalidation:n.revalidation,component:N,error:A,children:T(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):T()},null)}var rE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(rE||{}),bd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(bd||{});function mx(t){let e=X.useContext(bg);return e||at(!1),e}function gx(t){let e=X.useContext(sx);return e||at(!1),e}function vx(t){let e=X.useContext(Qs);return e||at(!1),e}function iE(t){let e=vx(),n=e.matches[e.matches.length-1];return n.route.id||at(!1),n.route.id}function yx(){var t;let e=X.useContext(eE),n=gx(bd.UseRouteError),r=iE(bd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function wx(){let{router:t}=mx(rE.UseNavigateStable),e=iE(bd.UseNavigateStable),n=X.useRef(!1);return nE(()=>{n.current=!0}),X.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Al({fromRouteId:e},o)))},[t,e])}function Ua(t){at(!1)}function _x(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ci.Pop,navigator:o,static:s=!1,future:l}=t;df()&&at(!1);let u=e.replace(/^\/*/,"/"),f=X.useMemo(()=>({basename:u,navigator:o,static:s,future:Al({v7_relativeSplatPath:!1},l)}),[u,l,o,s]);typeof r=="string"&&(r=Co(r));let{pathname:p="/",search:y="",hash:w="",state:A=null,key:x="default"}=r,N=X.useMemo(()=>{let M=J2(p,u);return M==null?null:{location:{pathname:M,search:y,hash:w,state:A,key:x},navigationType:i}},[u,p,y,w,A,x,i]);return N==null?null:X.createElement(uf.Provider,{value:f},X.createElement(cf.Provider,{children:n,value:N}))}function Ex(t){let{children:e,location:n}=t;return lx(Lp(e),n)}new Promise(()=>{});function Lp(t,e){e===void 0&&(e=[]);let n=[];return X.Children.forEach(t,(r,i)=>{if(!X.isValidElement(r))return;let o=[...e,i];if(r.type===X.Fragment){n.push.apply(n,Lp(r.props.children,o));return}r.type!==Ua&&at(!1),!r.props.index||!r.props.children||at(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Lp(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Tx="6";try{window.__reactRouterVersion=Tx}catch{}const Ix="startTransition",x0=kb[Ix];function bx(t){let{basename:e,children:n,future:r,window:i}=t,o=X.useRef();o.current==null&&(o.current=NR({window:i,v5Compat:!0}));let s=o.current,[l,u]=X.useState({action:s.action,location:s.location}),{v7_startTransition:f}=r||{},p=X.useCallback(y=>{f&&x0?x0(()=>u(y)):u(y)},[u,f]);return X.useLayoutEffect(()=>s.listen(p),[s,p]),X.createElement(_x,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}var O0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(O0||(O0={}));var N0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(N0||(N0={}));var D0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var co,oE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,E){function I(){}I.prototype=E.prototype,S.D=E.prototype,S.prototype=new I,S.prototype.constructor=S,S.C=function(C,O,L){for(var R=Array(arguments.length-2),$t=2;$t<arguments.length;$t++)R[$t-2]=arguments[$t];return E.prototype[O].apply(C,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,E,I){I||(I=0);var C=Array(16);if(typeof E=="string")for(var O=0;16>O;++O)C[O]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(O=0;16>O;++O)C[O]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=S.g[0],I=S.g[1],O=S.g[2];var L=S.g[3],R=E+(L^I&(O^L))+C[0]+3614090360&4294967295;E=I+(R<<7&4294967295|R>>>25),R=L+(O^E&(I^O))+C[1]+3905402710&4294967295,L=E+(R<<12&4294967295|R>>>20),R=O+(I^L&(E^I))+C[2]+606105819&4294967295,O=L+(R<<17&4294967295|R>>>15),R=I+(E^O&(L^E))+C[3]+3250441966&4294967295,I=O+(R<<22&4294967295|R>>>10),R=E+(L^I&(O^L))+C[4]+4118548399&4294967295,E=I+(R<<7&4294967295|R>>>25),R=L+(O^E&(I^O))+C[5]+1200080426&4294967295,L=E+(R<<12&4294967295|R>>>20),R=O+(I^L&(E^I))+C[6]+2821735955&4294967295,O=L+(R<<17&4294967295|R>>>15),R=I+(E^O&(L^E))+C[7]+4249261313&4294967295,I=O+(R<<22&4294967295|R>>>10),R=E+(L^I&(O^L))+C[8]+1770035416&4294967295,E=I+(R<<7&4294967295|R>>>25),R=L+(O^E&(I^O))+C[9]+2336552879&4294967295,L=E+(R<<12&4294967295|R>>>20),R=O+(I^L&(E^I))+C[10]+4294925233&4294967295,O=L+(R<<17&4294967295|R>>>15),R=I+(E^O&(L^E))+C[11]+2304563134&4294967295,I=O+(R<<22&4294967295|R>>>10),R=E+(L^I&(O^L))+C[12]+1804603682&4294967295,E=I+(R<<7&4294967295|R>>>25),R=L+(O^E&(I^O))+C[13]+4254626195&4294967295,L=E+(R<<12&4294967295|R>>>20),R=O+(I^L&(E^I))+C[14]+2792965006&4294967295,O=L+(R<<17&4294967295|R>>>15),R=I+(E^O&(L^E))+C[15]+1236535329&4294967295,I=O+(R<<22&4294967295|R>>>10),R=E+(O^L&(I^O))+C[1]+4129170786&4294967295,E=I+(R<<5&4294967295|R>>>27),R=L+(I^O&(E^I))+C[6]+3225465664&4294967295,L=E+(R<<9&4294967295|R>>>23),R=O+(E^I&(L^E))+C[11]+643717713&4294967295,O=L+(R<<14&4294967295|R>>>18),R=I+(L^E&(O^L))+C[0]+3921069994&4294967295,I=O+(R<<20&4294967295|R>>>12),R=E+(O^L&(I^O))+C[5]+3593408605&4294967295,E=I+(R<<5&4294967295|R>>>27),R=L+(I^O&(E^I))+C[10]+38016083&4294967295,L=E+(R<<9&4294967295|R>>>23),R=O+(E^I&(L^E))+C[15]+3634488961&4294967295,O=L+(R<<14&4294967295|R>>>18),R=I+(L^E&(O^L))+C[4]+3889429448&4294967295,I=O+(R<<20&4294967295|R>>>12),R=E+(O^L&(I^O))+C[9]+568446438&4294967295,E=I+(R<<5&4294967295|R>>>27),R=L+(I^O&(E^I))+C[14]+3275163606&4294967295,L=E+(R<<9&4294967295|R>>>23),R=O+(E^I&(L^E))+C[3]+4107603335&4294967295,O=L+(R<<14&4294967295|R>>>18),R=I+(L^E&(O^L))+C[8]+1163531501&4294967295,I=O+(R<<20&4294967295|R>>>12),R=E+(O^L&(I^O))+C[13]+2850285829&4294967295,E=I+(R<<5&4294967295|R>>>27),R=L+(I^O&(E^I))+C[2]+4243563512&4294967295,L=E+(R<<9&4294967295|R>>>23),R=O+(E^I&(L^E))+C[7]+1735328473&4294967295,O=L+(R<<14&4294967295|R>>>18),R=I+(L^E&(O^L))+C[12]+2368359562&4294967295,I=O+(R<<20&4294967295|R>>>12),R=E+(I^O^L)+C[5]+4294588738&4294967295,E=I+(R<<4&4294967295|R>>>28),R=L+(E^I^O)+C[8]+2272392833&4294967295,L=E+(R<<11&4294967295|R>>>21),R=O+(L^E^I)+C[11]+1839030562&4294967295,O=L+(R<<16&4294967295|R>>>16),R=I+(O^L^E)+C[14]+4259657740&4294967295,I=O+(R<<23&4294967295|R>>>9),R=E+(I^O^L)+C[1]+2763975236&4294967295,E=I+(R<<4&4294967295|R>>>28),R=L+(E^I^O)+C[4]+1272893353&4294967295,L=E+(R<<11&4294967295|R>>>21),R=O+(L^E^I)+C[7]+4139469664&4294967295,O=L+(R<<16&4294967295|R>>>16),R=I+(O^L^E)+C[10]+3200236656&4294967295,I=O+(R<<23&4294967295|R>>>9),R=E+(I^O^L)+C[13]+681279174&4294967295,E=I+(R<<4&4294967295|R>>>28),R=L+(E^I^O)+C[0]+3936430074&4294967295,L=E+(R<<11&4294967295|R>>>21),R=O+(L^E^I)+C[3]+3572445317&4294967295,O=L+(R<<16&4294967295|R>>>16),R=I+(O^L^E)+C[6]+76029189&4294967295,I=O+(R<<23&4294967295|R>>>9),R=E+(I^O^L)+C[9]+3654602809&4294967295,E=I+(R<<4&4294967295|R>>>28),R=L+(E^I^O)+C[12]+3873151461&4294967295,L=E+(R<<11&4294967295|R>>>21),R=O+(L^E^I)+C[15]+530742520&4294967295,O=L+(R<<16&4294967295|R>>>16),R=I+(O^L^E)+C[2]+3299628645&4294967295,I=O+(R<<23&4294967295|R>>>9),R=E+(O^(I|~L))+C[0]+4096336452&4294967295,E=I+(R<<6&4294967295|R>>>26),R=L+(I^(E|~O))+C[7]+1126891415&4294967295,L=E+(R<<10&4294967295|R>>>22),R=O+(E^(L|~I))+C[14]+2878612391&4294967295,O=L+(R<<15&4294967295|R>>>17),R=I+(L^(O|~E))+C[5]+4237533241&4294967295,I=O+(R<<21&4294967295|R>>>11),R=E+(O^(I|~L))+C[12]+1700485571&4294967295,E=I+(R<<6&4294967295|R>>>26),R=L+(I^(E|~O))+C[3]+2399980690&4294967295,L=E+(R<<10&4294967295|R>>>22),R=O+(E^(L|~I))+C[10]+4293915773&4294967295,O=L+(R<<15&4294967295|R>>>17),R=I+(L^(O|~E))+C[1]+2240044497&4294967295,I=O+(R<<21&4294967295|R>>>11),R=E+(O^(I|~L))+C[8]+1873313359&4294967295,E=I+(R<<6&4294967295|R>>>26),R=L+(I^(E|~O))+C[15]+4264355552&4294967295,L=E+(R<<10&4294967295|R>>>22),R=O+(E^(L|~I))+C[6]+2734768916&4294967295,O=L+(R<<15&4294967295|R>>>17),R=I+(L^(O|~E))+C[13]+1309151649&4294967295,I=O+(R<<21&4294967295|R>>>11),R=E+(O^(I|~L))+C[4]+4149444226&4294967295,E=I+(R<<6&4294967295|R>>>26),R=L+(I^(E|~O))+C[11]+3174756917&4294967295,L=E+(R<<10&4294967295|R>>>22),R=O+(E^(L|~I))+C[2]+718787259&4294967295,O=L+(R<<15&4294967295|R>>>17),R=I+(L^(O|~E))+C[9]+3951481745&4294967295,S.g[0]=S.g[0]+E&4294967295,S.g[1]=S.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,S.g[2]=S.g[2]+O&4294967295,S.g[3]=S.g[3]+L&4294967295}r.prototype.u=function(S,E){E===void 0&&(E=S.length);for(var I=E-this.blockSize,C=this.B,O=this.h,L=0;L<E;){if(O==0)for(;L<=I;)i(this,S,L),L+=this.blockSize;if(typeof S=="string"){for(;L<E;)if(C[O++]=S.charCodeAt(L++),O==this.blockSize){i(this,C),O=0;break}}else for(;L<E;)if(C[O++]=S[L++],O==this.blockSize){i(this,C),O=0;break}}this.h=O,this.o+=E},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var E=1;E<S.length-8;++E)S[E]=0;var I=8*this.o;for(E=S.length-8;E<S.length;++E)S[E]=I&255,I/=256;for(this.u(S),S=Array(16),E=I=0;4>E;++E)for(var C=0;32>C;C+=8)S[I++]=this.g[E]>>>C&255;return S};function o(S,E){var I=l;return Object.prototype.hasOwnProperty.call(I,S)?I[S]:I[S]=E(S)}function s(S,E){this.h=E;for(var I=[],C=!0,O=S.length-1;0<=O;O--){var L=S[O]|0;C&&L==E||(I[O]=L,C=!1)}this.g=I}var l={};function u(S){return-128<=S&&128>S?o(S,function(E){return new s([E|0],0>E?-1:0)}):new s([S|0],0>S?-1:0)}function f(S){if(isNaN(S)||!isFinite(S))return y;if(0>S)return M(f(-S));for(var E=[],I=1,C=0;S>=I;C++)E[C]=S/I|0,I*=4294967296;return new s(E,0)}function p(S,E){if(S.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S.charAt(0)=="-")return M(p(S.substring(1),E));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=f(Math.pow(E,8)),C=y,O=0;O<S.length;O+=8){var L=Math.min(8,S.length-O),R=parseInt(S.substring(O,O+L),E);8>L?(L=f(Math.pow(E,L)),C=C.j(L).add(f(R))):(C=C.j(I),C=C.add(f(R)))}return C}var y=u(0),w=u(1),A=u(16777216);t=s.prototype,t.m=function(){if(N(this))return-M(this).m();for(var S=0,E=1,I=0;I<this.g.length;I++){var C=this.i(I);S+=(0<=C?C:4294967296+C)*E,E*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x(this))return"0";if(N(this))return"-"+M(this).toString(S);for(var E=f(Math.pow(S,6)),I=this,C="";;){var O=F(I,E).g;I=k(I,O.j(E));var L=((0<I.g.length?I.g[0]:I.h)>>>0).toString(S);if(I=O,x(I))return L+C;for(;6>L.length;)L="0"+L;C=L+C}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function x(S){if(S.h!=0)return!1;for(var E=0;E<S.g.length;E++)if(S.g[E]!=0)return!1;return!0}function N(S){return S.h==-1}t.l=function(S){return S=k(this,S),N(S)?-1:x(S)?0:1};function M(S){for(var E=S.g.length,I=[],C=0;C<E;C++)I[C]=~S.g[C];return new s(I,~S.h).add(w)}t.abs=function(){return N(this)?M(this):this},t.add=function(S){for(var E=Math.max(this.g.length,S.g.length),I=[],C=0,O=0;O<=E;O++){var L=C+(this.i(O)&65535)+(S.i(O)&65535),R=(L>>>16)+(this.i(O)>>>16)+(S.i(O)>>>16);C=R>>>16,L&=65535,R&=65535,I[O]=R<<16|L}return new s(I,I[I.length-1]&-2147483648?-1:0)};function k(S,E){return S.add(M(E))}t.j=function(S){if(x(this)||x(S))return y;if(N(this))return N(S)?M(this).j(M(S)):M(M(this).j(S));if(N(S))return M(this.j(M(S)));if(0>this.l(A)&&0>S.l(A))return f(this.m()*S.m());for(var E=this.g.length+S.g.length,I=[],C=0;C<2*E;C++)I[C]=0;for(C=0;C<this.g.length;C++)for(var O=0;O<S.g.length;O++){var L=this.i(C)>>>16,R=this.i(C)&65535,$t=S.i(O)>>>16,rr=S.i(O)&65535;I[2*C+2*O]+=R*rr,T(I,2*C+2*O),I[2*C+2*O+1]+=L*rr,T(I,2*C+2*O+1),I[2*C+2*O+1]+=R*$t,T(I,2*C+2*O+1),I[2*C+2*O+2]+=L*$t,T(I,2*C+2*O+2)}for(C=0;C<E;C++)I[C]=I[2*C+1]<<16|I[2*C];for(C=E;C<2*E;C++)I[C]=0;return new s(I,0)};function T(S,E){for(;(S[E]&65535)!=S[E];)S[E+1]+=S[E]>>>16,S[E]&=65535,E++}function P(S,E){this.g=S,this.h=E}function F(S,E){if(x(E))throw Error("division by zero");if(x(S))return new P(y,y);if(N(S))return E=F(M(S),E),new P(M(E.g),M(E.h));if(N(E))return E=F(S,M(E)),new P(M(E.g),E.h);if(30<S.g.length){if(N(S)||N(E))throw Error("slowDivide_ only works with positive integers.");for(var I=w,C=E;0>=C.l(S);)I=z(I),C=z(C);var O=q(I,1),L=q(C,1);for(C=q(C,2),I=q(I,2);!x(C);){var R=L.add(C);0>=R.l(S)&&(O=O.add(I),L=R),C=q(C,1),I=q(I,1)}return E=k(S,O.j(E)),new P(O,E)}for(O=y;0<=S.l(E);){for(I=Math.max(1,Math.floor(S.m()/E.m())),C=Math.ceil(Math.log(I)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),L=f(I),R=L.j(E);N(R)||0<R.l(S);)I-=C,L=f(I),R=L.j(E);x(L)&&(L=w),O=O.add(L),S=k(S,R)}return new P(O,S)}t.A=function(S){return F(this,S).h},t.and=function(S){for(var E=Math.max(this.g.length,S.g.length),I=[],C=0;C<E;C++)I[C]=this.i(C)&S.i(C);return new s(I,this.h&S.h)},t.or=function(S){for(var E=Math.max(this.g.length,S.g.length),I=[],C=0;C<E;C++)I[C]=this.i(C)|S.i(C);return new s(I,this.h|S.h)},t.xor=function(S){for(var E=Math.max(this.g.length,S.g.length),I=[],C=0;C<E;C++)I[C]=this.i(C)^S.i(C);return new s(I,this.h^S.h)};function z(S){for(var E=S.g.length+1,I=[],C=0;C<E;C++)I[C]=S.i(C)<<1|S.i(C-1)>>>31;return new s(I,S.h)}function q(S,E){var I=E>>5;E%=32;for(var C=S.g.length-I,O=[],L=0;L<C;L++)O[L]=0<E?S.i(L+I)>>>E|S.i(L+I+1)<<32-E:S.i(L+I);return new s(O,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,oE=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=f,s.fromString=p,co=s}).apply(typeof D0<"u"?D0:typeof self<"u"?self:typeof window<"u"?window:{});var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sE,aE,ja,lE,Fc,Mp,uE,cE,dE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,g){return a==Array.prototype||a==Object.prototype||(a[h]=g.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof uc=="object"&&uc];for(var h=0;h<a.length;++h){var g=a[h];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var g=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in g))break e;g=g[D]}a=a[a.length-1],_=g[a],h=h(_),h!=_&&h!=null&&e(g,a,{configurable:!0,writable:!0,value:h})}}function o(a,h){a instanceof String&&(a+="");var g=0,_=!1,D={next:function(){if(!_&&g<a.length){var U=g++;return{value:h(U,a[U]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return o(this,function(h,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function f(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function p(a,h,g){return a.call.apply(a.bind,arguments)}function y(a,h,g){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function w(a,h,g){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,w.apply(null,arguments)}function A(a,h){var g=Array.prototype.slice.call(arguments,1);return function(){var _=g.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function x(a,h){function g(){}g.prototype=h.prototype,a.aa=h.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(_,D,U){for(var G=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)G[Ee-2]=arguments[Ee];return h.prototype[D].apply(_,G)}}function N(a){const h=a.length;if(0<h){const g=Array(h);for(let _=0;_<h;_++)g[_]=a[_];return g}return[]}function M(a,h){for(let g=1;g<arguments.length;g++){const _=arguments[g];if(u(_)){const D=a.length||0,U=_.length||0;a.length=D+U;for(let G=0;G<U;G++)a[D+G]=_[G]}else a.push(_)}}class k{constructor(h,g){this.i=h,this.j=g,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function T(a){return/^[\s\xa0]*$/.test(a)}function P(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function F(a){return F[" "](a),a}F[" "]=function(){};var z=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function q(a,h,g){for(const _ in a)h.call(g,a[_],_,a)}function S(a,h){for(const g in a)h.call(void 0,a[g],g,a)}function E(a){const h={};for(const g in a)h[g]=a[g];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,h){let g,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(g in _)a[g]=_[g];for(let U=0;U<I.length;U++)g=I[U],Object.prototype.hasOwnProperty.call(_,g)&&(a[g]=_[g])}}function O(a){var h=1;a=a.split(":");const g=[];for(;0<h&&a.length;)g.push(a.shift()),h--;return a.length&&g.push(a.join(":")),g}function L(a){l.setTimeout(()=>{throw a},0)}function R(){var a=K;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class $t{constructor(){this.h=this.g=null}add(h,g){const _=rr.get();_.set(h,g),this.h?this.h.next=_:this.g=_,this.h=_}}var rr=new k(()=>new Ve,a=>a.reset());class Ve{constructor(){this.next=this.g=this.h=null}set(h,g){this.h=h,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Xt,Y=!1,K=new $t,le=()=>{const a=l.Promise.resolve(void 0);Xt=()=>{a.then(xe)}};var xe=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(g){L(g)}var h=rr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Y=!1};function be(){this.s=this.s,this.C=this.C}be.prototype.s=!1,be.prototype.ma=function(){this.s||(this.s=!0,this.N())},be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var V=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};l.addEventListener("test",g,h),l.removeEventListener("test",g,h)}catch{}return a}();function bn(a,h){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(z){e:{try{F(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else g=="mouseover"?h=a.fromElement:g=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ht[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&bn.aa.h.call(this)}}x(bn,Fe);var Ht={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var cn="closure_listenable_"+(1e6*Math.random()|0),ta=0;function kt(a,h,g,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=g,this.capture=!!_,this.ha=D,this.key=++ta,this.da=this.fa=!1}function dn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Li(a){this.src=a,this.g={},this.h=0}Li.prototype.add=function(a,h,g,_,D){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var G=xo(a,h,_,D);return-1<G?(h=a[G],g||(h.fa=!1)):(h=new kt(h,this.src,U,!!_,D),h.fa=g,a.push(h)),h};function na(a,h){var g=h.type;if(g in a.g){var _=a.g[g],D=Array.prototype.indexOf.call(_,h,void 0),U;(U=0<=D)&&Array.prototype.splice.call(_,D,1),U&&(dn(h),a.g[g].length==0&&(delete a.g[g],a.h--))}}function xo(a,h,g,_){for(var D=0;D<a.length;++D){var U=a[D];if(!U.da&&U.listener==h&&U.capture==!!g&&U.ha==_)return D}return-1}var Br="closure_lm_"+(1e6*Math.random()|0),Mi={};function zr(a,h,g,_,D){if(Array.isArray(h)){for(var U=0;U<h.length;U++)zr(a,h[U],g,_,D);return null}return g=No(g),a&&a[cn]?a.K(h,g,f(_)?!!_.capture:!!_,D):ra(a,h,g,!1,_,D)}function ra(a,h,g,_,D,U){if(!h)throw Error("Invalid event type");var G=f(D)?!!D.capture:!!D,Ee=ia(a);if(Ee||(a[Br]=Ee=new Li(a)),g=Ee.add(h,g,_,G,U),g.proxy)return g;if(_=At(),g.proxy=_,_.src=a,_.listener=g,a.addEventListener)V||(D=G),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(_e(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return g}function At(){function a(g){return h.call(a.src,a.listener,g)}const h=Vi;return a}function $r(a,h,g,_,D){if(Array.isArray(h))for(var U=0;U<h.length;U++)$r(a,h[U],g,_,D);else _=f(_)?!!_.capture:!!_,g=No(g),a&&a[cn]?(a=a.i,h=String(h).toString(),h in a.g&&(U=a.g[h],g=xo(U,g,_,D),-1<g&&(dn(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete a.g[h],a.h--)))):a&&(a=ia(a))&&(h=a.g[h.toString()],a=-1,h&&(a=xo(h,g,_,D)),(g=-1<a?h[a]:null)&&mt(g))}function mt(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[cn])na(h.i,a);else{var g=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(g,_,a.capture):h.detachEvent?h.detachEvent(_e(g),_):h.addListener&&h.removeListener&&h.removeListener(_),(g=ia(h))?(na(g,a),g.h==0&&(g.src=null,h[Br]=null)):dn(a)}}}function _e(a){return a in Mi?Mi[a]:Mi[a]="on"+a}function Vi(a,h){if(a.da)a=!0;else{h=new bn(h,this);var g=a.listener,_=a.ha||a.src;a.fa&&mt(a),a=g.call(_,h)}return a}function ia(a){return a=a[Br],a instanceof Li?a:null}var Oo="__closure_events_fn_"+(1e9*Math.random()>>>0);function No(a){return typeof a=="function"?a:(a[Oo]||(a[Oo]=function(h){return a.handleEvent(h)}),a[Oo])}function Ze(){be.call(this),this.i=new Li(this),this.M=this,this.F=null}x(Ze,be),Ze.prototype[cn]=!0,Ze.prototype.removeEventListener=function(a,h,g,_){$r(this,a,h,g,_)};function et(a,h){var g,_=a.F;if(_)for(g=[];_;_=_.F)g.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Fe(h,a);else if(h instanceof Fe)h.target=h.target||a;else{var D=h;h=new Fe(_,a),C(h,D)}if(D=!0,g)for(var U=g.length-1;0<=U;U--){var G=h.g=g[U];D=ir(G,_,!0,h)&&D}if(G=h.g=a,D=ir(G,_,!0,h)&&D,D=ir(G,_,!1,h)&&D,g)for(U=0;U<g.length;U++)G=h.g=g[U],D=ir(G,_,!1,h)&&D}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var g=a.g[h],_=0;_<g.length;_++)dn(g[_]);delete a.g[h],a.h--}}this.F=null},Ze.prototype.K=function(a,h,g,_){return this.i.add(String(a),h,!1,g,_)},Ze.prototype.L=function(a,h,g,_){return this.i.add(String(a),h,!0,g,_)};function ir(a,h,g,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,U=0;U<h.length;++U){var G=h[U];if(G&&!G.da&&G.capture==g){var Ee=G.listener,nt=G.ha||G.src;G.fa&&na(a.i,G),D=Ee.call(nt,_)!==!1&&D}}return D&&!_.defaultPrevented}function Jt(a,h,g){if(typeof a=="function")g&&(a=w(a,g));else if(a&&typeof a.handleEvent=="function")a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function or(a){a.g=Jt(()=>{a.g=null,a.i&&(a.i=!1,or(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class sr extends be{constructor(h,g){super(),this.m=h,this.l=g,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:or(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(a){be.call(this),this.h=a,this.g={}}x(Fi,be);var ar=[];function Hr(a){q(a.g,function(h,g){this.g.hasOwnProperty(g)&&mt(h)},a),a.g={}}Fi.prototype.N=function(){Fi.aa.N.call(this),Hr(this)},Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Do=l.JSON.stringify,Lo=l.JSON.parse,oa=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function sa(){}sa.prototype.h=null;function Mo(a){return a.h||(a.h=a.i())}function Vo(){}var Un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function aa(){Fe.call(this,"d")}x(aa,Fe);function gt(){Fe.call(this,"c")}x(gt,Fe);var vt={},au=null;function yt(){return au=au||new Ze}vt.La="serverreachability";function Ui(a){Fe.call(this,vt.La,a)}x(Ui,Fe);function Wr(a){const h=yt();et(h,new Ui(h))}vt.STAT_EVENT="statevent";function la(a,h){Fe.call(this,vt.STAT_EVENT,a),this.stat=h}x(la,Fe);function ie(a){const h=yt();et(h,new la(h,a))}vt.Ma="timingevent";function Zt(a,h){Fe.call(this,vt.Ma,a),this.size=h}x(Zt,Fe);function Wt(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function en(){this.g=!0}en.prototype.xa=function(){this.g=!1};function Qe(a,h,g,_,D,U){a.info(function(){if(a.g)if(U)for(var G="",Ee=U.split("&"),nt=0;nt<Ee.length;nt++){var ve=Ee[nt].split("=");if(1<ve.length){var dt=ve[0];ve=ve[1];var rt=dt.split("_");G=2<=rt.length&&rt[1]=="type"?G+(dt+"="+ve+"&"):G+(dt+"=redacted&")}}else G=null;else G=U;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+g+`
`+G})}function ct(a,h,g,_,D,U,G){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+g+`
`+U+" "+G})}function jn(a,h,g,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ji(a,g)+(_?" "+_:"")})}function lu(a,h){a.info(function(){return"TIMEOUT: "+h})}en.prototype.info=function(){};function ji(a,h){if(!a.g)return h;if(!h)return null;try{var g=JSON.parse(h);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var _=g[a];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var U=D[0];if(U!="noop"&&U!="stop"&&U!="close")for(var G=1;G<D.length;G++)D[G]=""}}}}return Do(g)}catch{return h}}var tt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fo;function Bi(){}x(Bi,sa),Bi.prototype.g=function(){return new XMLHttpRequest},Bi.prototype.i=function(){return{}},Fo=new Bi;function fn(a,h,g,_){this.j=a,this.i=h,this.l=g,this.R=_||1,this.U=new Fi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cu}function cu(){this.i=null,this.g="",this.h=!1}var ua={},ca={};function da(a,h,g){a.L=1,a.v=$i(Sn(h)),a.m=g,a.P=!0,Bn(a,null)}function Bn(a,h){a.F=Date.now(),Uo(a),a.A=Sn(a.v);var g=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Tu(g.i,"t",_),a.C=0,g=a.j.J,a.h=new cu,a.g=Ea(a.j,g?h:null,!a.m),0<a.O&&(a.M=new sr(w(a.Y,a,a.g),a.O)),h=a.U,g=a.g,_=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(ar[0]=D.toString()),D=ar);for(var U=0;U<D.length;U++){var G=zr(g,D[U],_||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Wr(),Qe(a.i,a.u,a.A,a.l,a.R,a.m)}fn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Ct(a)==3?h.j():this.Y(a)},fn.prototype.Y=function(a){try{if(a==this.g)e:{const rt=Ct(this.g);var h=this.g.Ba();const Yr=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Ru(this.g)))){this.J||rt!=4||h==7||(h==8||0>=Yr?Wr(3):Wr(2)),fa(this);var g=this.g.Z();this.X=g;t:if(du(this)){var _=Ru(this.g);a="";var D=_.length,U=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),lr(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(U&&h==D-1)});_.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=g==200,ct(this.i,this.u,this.A,this.l,this.R,rt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,nt=this.g;if((Ee=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(Ee)){var ve=Ee;break t}}ve=null}if(g=ve)jn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ha(this,g);else{this.o=!1,this.s=3,ie(12),ur(this),lr(this);break e}}if(this.P){g=!0;let Ft;for(;!this.J&&this.C<G.length;)if(Ft=kf(this,G),Ft==ca){rt==4&&(this.s=4,ie(14),g=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==ua){this.s=4,ie(15),jn(this.i,this.l,G,"[Invalid Chunk]"),g=!1;break}else jn(this.i,this.l,Ft,null),ha(this,Ft);if(du(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||G.length!=0||this.h.h||(this.s=1,ie(16),g=!1),this.o=this.o&&g,!g)jn(this.i,this.l,G,"[Invalid Chunked Response]"),ur(this),lr(this);else if(0<G.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),wa(dt),dt.M=!0,ie(11))}}else jn(this.i,this.l,G,null),ha(this,G);rt==4&&ur(this),this.o&&!this.J&&(rt==4?_a(this.j,this):(this.o=!1,Uo(this)))}else xu(this.g),g==400&&0<G.indexOf("Unknown SID")?(this.s=3,ie(12)):(this.s=0,ie(13)),ur(this),lr(this)}}}catch{}finally{}};function du(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function kf(a,h){var g=a.C,_=h.indexOf(`
`,g);return _==-1?ca:(g=Number(h.substring(g,_)),isNaN(g)?ua:(_+=1,_+g>h.length?ca:(h=h.slice(_,_+g),a.C=_+g,h)))}fn.prototype.cancel=function(){this.J=!0,ur(this)};function Uo(a){a.S=Date.now()+a.I,fu(a,a.I)}function fu(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Wt(w(a.ba,a),h)}function fa(a){a.B&&(l.clearTimeout(a.B),a.B=null)}fn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(lu(this.i,this.A),this.L!=2&&(Wr(),ie(17)),ur(this),this.s=2,lr(this)):fu(this,this.S-a)};function lr(a){a.j.G==0||a.J||_a(a.j,a)}function ur(a){fa(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Hr(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ha(a,h){try{var g=a.j;if(g.G!=0&&(g.g==a||zi(g.h,a))){if(!a.K&&zi(g.h,a)&&g.G==3){try{var _=g.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)Ko(g),Ho(g);else break e;qo(g),ie(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=Wt(w(g.Za,g),6e3));if(1>=mu(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else fr(g,11)}else if((a.K||g.g==a)&&Ko(g),!T(h))for(D=g.Da.g.parse(h),h=0;h<D.length;h++){let ve=D[h];if(g.T=ve[0],ve=ve[1],g.G==2)if(ve[0]=="c"){g.K=ve[1],g.ia=ve[2];const dt=ve[3];dt!=null&&(g.la=dt,g.j.info("VER="+g.la));const rt=ve[4];rt!=null&&(g.Aa=rt,g.j.info("SVER="+g.Aa));const Yr=ve[5];Yr!=null&&typeof Yr=="number"&&0<Yr&&(_=1.5*Yr,g.L=_,g.j.info("backChannelRequestTimeoutMs_="+_)),_=g;const Ft=a.g;if(Ft){const Gi=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var U=_.h;U.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(pa(U,U.h),U.h=null))}if(_.D){const Qo=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Qo&&(_.ya=Qo,Te(_.I,_.D,Qo))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),_=g;var G=a;if(_.qa=Fu(_,_.J?_.ia:null,_.W),G.K){gu(_.h,G);var Ee=G,nt=_.L;nt&&(Ee.I=nt),Ee.B&&(fa(Ee),Uo(Ee)),_.g=G}else Mu(_);0<g.i.length&&Wo(g)}else ve[0]!="stop"&&ve[0]!="close"||fr(g,7);else g.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?fr(g,7):ya(g):ve[0]!="noop"&&g.l&&g.l.ta(ve),g.v=0)}}Wr(4)}catch{}}var cr=class{constructor(a,h){this.g=a,this.map=h}};function hu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function mu(a){return a.h?1:a.g?a.g.size:0}function zi(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function pa(a,h){a.g?a.g.add(h):a.h=h}function gu(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}hu.prototype.cancel=function(){if(this.i=vu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const g of a.g.values())h=h.concat(g.D);return h}return N(a.i)}function Af(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],g=a.length,_=0;_<g;_++)h.push(a[_]);return h}h=[],g=0;for(_ in a)h[g++]=a[_];return h}function Cf(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var g=0;g<a;g++)h.push(g);return h}h=[],g=0;for(const _ in a)h[g++]=_;return h}}}function Se(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var g=Cf(a),_=Af(a),D=_.length,U=0;U<D;U++)h.call(void 0,_[U],g&&g[U],a)}var yu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pf(a,h){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var _=a[g].indexOf("="),D=null;if(0<=_){var U=a[g].substring(0,_);D=a[g].substring(_+1)}else U=a[g];h(U,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function dr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof dr){this.h=a.h,jo(this,a.j),this.o=a.o,this.g=a.g,Bo(this,a.s),this.l=a.l;var h=a.i,g=new Hi;g.i=h.i,h.g&&(g.g=new Map(h.g),g.h=h.h),zo(this,g),this.m=a.m}else a&&(h=String(a).match(yu))?(this.h=!1,jo(this,h[1]||"",!0),this.o=zn(h[2]||""),this.g=zn(h[3]||"",!0),Bo(this,h[4]),this.l=zn(h[5]||"",!0),zo(this,h[6]||"",!0),this.m=zn(h[7]||"")):(this.h=!1,this.i=new Hi(null,this.h))}dr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ae(h,wu,!0),":");var g=this.g;return(g||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ae(h,wu,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(Ae(g,g.charAt(0)=="/"?_u:xf,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",Ae(g,Nf)),a.join("")};function Sn(a){return new dr(a)}function jo(a,h,g){a.j=g?zn(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Bo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function zo(a,h,g){h instanceof Hi?(a.i=h,Df(a.i,a.h)):(g||(h=Ae(h,Of)),a.i=new Hi(h,a.h))}function Te(a,h,g){a.i.set(h,g)}function $i(a){return Te(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function zn(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ae(a,h,g){return typeof a=="string"?(a=encodeURI(a).replace(h,Rf),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Rf(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var wu=/[#\/\?@]/g,xf=/[#\?:]/g,_u=/[#\?]/g,Of=/[#\?@]/g,Nf=/#/g;function Hi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function kn(a){a.g||(a.g=new Map,a.h=0,a.i&&Pf(a.i,function(h,g){a.add(decodeURIComponent(h.replace(/\+/g," ")),g)}))}t=Hi.prototype,t.add=function(a,h){kn(this),this.i=null,a=qr(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(h),this.h+=1,this};function Eu(a,h){kn(a),h=qr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ma(a,h){return kn(a),h=qr(a,h),a.g.has(h)}t.forEach=function(a,h){kn(this),this.g.forEach(function(g,_){g.forEach(function(D){a.call(h,D,_,this)},this)},this)},t.na=function(){kn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),g=[];for(let _=0;_<h.length;_++){const D=a[_];for(let U=0;U<D.length;U++)g.push(h[_])}return g},t.V=function(a){kn(this);let h=[];if(typeof a=="string")ma(this,a)&&(h=h.concat(this.g.get(qr(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)h=h.concat(a[g])}return h},t.set=function(a,h){return kn(this),this.i=null,a=qr(this,a),ma(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Tu(a,h,g){Eu(a,h),0<g.length&&(a.i=null,a.g.set(qr(a,h),N(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var g=0;g<h.length;g++){var _=h[g];const U=encodeURIComponent(String(_)),G=this.V(_);for(_=0;_<G.length;_++){var D=U;G[_]!==""&&(D+="="+encodeURIComponent(String(G[_]))),a.push(D)}}return this.i=a.join("&")};function qr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Df(a,h){h&&!a.j&&(kn(a),a.i=null,a.g.forEach(function(g,_){var D=_.toLowerCase();_!=D&&(Eu(this,_),Tu(this,D,g))},a)),a.j=h}function Lf(a,h){const g=new en;if(l.Image){const _=new Image;_.onload=A($n,g,"TestLoadImage: loaded",!0,h,_),_.onerror=A($n,g,"TestLoadImage: error",!1,h,_),_.onabort=A($n,g,"TestLoadImage: abort",!1,h,_),_.ontimeout=A($n,g,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function Mf(a,h){const g=new en,_=new AbortController,D=setTimeout(()=>{_.abort(),$n(g,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(U=>{clearTimeout(D),U.ok?$n(g,"TestPingServer: ok",!0,h):$n(g,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),$n(g,"TestPingServer: error",!1,h)})}function $n(a,h,g,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(g)}catch{}}function Vf(){this.g=new oa}function Iu(a,h,g){const _=g||"";try{Se(a,function(D,U){let G=D;f(D)&&(G=Do(D)),h.push(_+U+"="+encodeURIComponent(G))})}catch(D){throw h.push(_+"type="+encodeURIComponent("_badmap")),D}}function Wi(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Wi,sa),Wi.prototype.g=function(){return new qi(this.l,this.j)},Wi.prototype.i=function(a){return function(){return a}}({});function qi(a,h){Ze.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(qi,Ze),t=qi.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,hn(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ki(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function bu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ki(this):hn(this),this.readyState==3&&bu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ki(this))},t.Qa=function(a){this.g&&(this.response=a,Ki(this))},t.ga=function(){this.g&&Ki(this)};function Ki(a){a.readyState=4,a.l=null,a.j=null,a.v=null,hn(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var g=h.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=h.next();return a.join(`\r
`)};function hn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ga(a){let h="";return q(a,function(g,_){h+=_,h+=":",h+=g,h+=`\r
`}),h}function va(a,h,g){e:{for(_ in g){var _=!1;break e}_=!0}_||(g=ga(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):Te(a,h,g))}function Ce(a){Ze.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ce,Ze);var Su=/^https?$/i,Ff=["POST","PUT"];t=Ce.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,g,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fo.g(),this.v=this.o?Mo(this.o):Mo(Fo),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(U){ku(this,U);return}if(a=g||"",g=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)g.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const U of _.keys())g.set(U,_.get(U));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ff,h,void 0))||_||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,G]of g)this.g.setRequestHeader(U,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pu(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){ku(this,U)}};function ku(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Au(a),$o(a)}function Au(a){a.A||(a.A=!0,et(a,"complete"),et(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,et(this,"complete"),et(this,"abort"),$o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$o(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Cu(this):this.bb())},t.bb=function(){Cu(this)};function Cu(a){if(a.h&&typeof s<"u"&&(!a.v[1]||Ct(a)!=4||a.Z()!=2)){if(a.u&&Ct(a)==4)Jt(a.Ea,0,a);else if(et(a,"readystatechange"),Ct(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var g;if(!(g=h)){var _;if(_=G===0){var D=String(a.D).match(yu)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),_=!Su.test(D?D.toLowerCase():"")}g=_}if(g)et(a,"complete"),et(a,"success");else{a.m=6;try{var U=2<Ct(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",Au(a)}}finally{$o(a)}}}}function $o(a,h){if(a.g){Pu(a);const g=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||et(a,"ready");try{g.onreadystatechange=_}catch{}}}function Pu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Ct(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Lo(h)}};function Ru(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xu(a){const h={};a=(a.g&&2<=Ct(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(T(a[_]))continue;var g=O(a[_]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=h[D]||[];h[D]=U,U.push(g)}S(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kr(a,h,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||h}function Ou(a){this.Aa=0,this.i=[],this.j=new en,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kr("baseRetryDelayMs",5e3,a),this.cb=Kr("retryDelaySeedMs",1e4,a),this.Wa=Kr("forwardChannelMaxRetries",2,a),this.wa=Kr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hu(a&&a.concurrentRequestLimit),this.Da=new Vf,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ou.prototype,t.la=8,t.G=1,t.connect=function(a,h,g,_){ie(0),this.W=a,this.H=h||{},g&&_!==void 0&&(this.H.OSID=g,this.H.OAID=_),this.F=this.X,this.I=Fu(this,null,this.W),Wo(this)};function ya(a){if(Nu(a),a.G==3){var h=a.U++,g=Sn(a.I);if(Te(g,"SID",a.K),Te(g,"RID",h),Te(g,"TYPE","terminate"),pn(a,g),h=new fn(a,a.j,h),h.L=2,h.v=$i(Sn(g)),g=!1,l.navigator&&l.navigator.sendBeacon)try{g=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!g&&l.Image&&(new Image().src=h.v,g=!0),g||(h.g=Ea(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Uo(h)}Vu(a)}function Ho(a){a.g&&(wa(a),a.g.cancel(),a.g=null)}function Nu(a){Ho(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ko(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Wo(a){if(!pu(a.h)&&!a.s){a.s=!0;var h=a.Ga;Xt||le(),Y||(Xt(),Y=!0),K.add(h,a),a.B=0}}function Uf(a,h){return mu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Wt(w(a.Ga,a,h),Gr(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new fn(this,this.j,a);let U=this.o;if(this.S&&(U?(U=E(U),C(U,this.S)):U=this.S),this.m!==null||this.O||(D.H=U,U=null),this.P)e:{for(var h=0,g=0;g<this.i.length;g++){t:{var _=this.i[g];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=g;break e}if(h===4096||g===this.i.length-1){h=g+1;break e}}h=1e3}else h=1e3;h=Lu(this,D,h),g=Sn(this.I),Te(g,"RID",a),Te(g,"CVER",22),this.D&&Te(g,"X-HTTP-Session-Id",this.D),pn(this,g),U&&(this.O?h="headers="+encodeURIComponent(String(ga(U)))+"&"+h:this.m&&va(g,this.m,U)),pa(this.h,D),this.Ua&&Te(g,"TYPE","init"),this.P?(Te(g,"$req",h),Te(g,"SID","null"),D.T=!0,da(D,g,null)):da(D,g,h),this.G=2}}else this.G==3&&(a?Du(this,a):this.i.length==0||pu(this.h)||Du(this))};function Du(a,h){var g;h?g=h.l:g=a.U++;const _=Sn(a.I);Te(_,"SID",a.K),Te(_,"RID",g),Te(_,"AID",a.T),pn(a,_),a.m&&a.o&&va(_,a.m,a.o),g=new fn(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Lu(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),pa(a.h,g),da(g,_,h)}function pn(a,h){a.H&&q(a.H,function(g,_){Te(h,_,g)}),a.l&&Se({},function(g,_){Te(h,_,g)})}function Lu(a,h,g){g=Math.min(a.i.length,g);var _=a.l?w(a.l.Na,a.l,a):null;e:{var D=a.i;let U=-1;for(;;){const G=["count="+g];U==-1?0<g?(U=D[0].g,G.push("ofs="+U)):U=0:G.push("ofs="+U);let Ee=!0;for(let nt=0;nt<g;nt++){let ve=D[nt].g;const dt=D[nt].map;if(ve-=U,0>ve)U=Math.max(0,D[nt].g-100),Ee=!1;else try{Iu(dt,G,"req"+ve+"_")}catch{_&&_(dt)}}if(Ee){_=G.join("&");break e}}}return a=a.i.splice(0,g),h.D=a,_}function Mu(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Xt||le(),Y||(Xt(),Y=!0),K.add(h,a),a.v=0}}function qo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Wt(w(a.Fa,a),Gr(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,An(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Wt(w(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ie(10),Ho(this),An(this))};function wa(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function An(a){a.g=new fn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Sn(a.qa);Te(h,"RID","rpc"),Te(h,"SID",a.K),Te(h,"AID",a.T),Te(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Te(h,"TO",a.ja),Te(h,"TYPE","xmlhttp"),pn(a,h),a.m&&a.o&&va(h,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=$i(Sn(h)),g.m=null,g.P=!0,Bn(g,a)}t.Za=function(){this.C!=null&&(this.C=null,Ho(this),qo(this),ie(19))};function Ko(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function _a(a,h){var g=null;if(a.g==h){Ko(a),wa(a),a.g=null;var _=2}else if(zi(a.h,h))g=h.D,gu(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){g=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;_=yt(),et(_,new Zt(_,g)),Wo(a)}else Mu(a);else if(D=h.s,D==3||D==0&&0<h.X||!(_==1&&Uf(a,h)||_==2&&qo(a)))switch(g&&0<g.length&&(h=a.h,h.i=h.i.concat(g)),D){case 1:fr(a,5);break;case 4:fr(a,10);break;case 3:fr(a,6);break;default:fr(a,2)}}}function Gr(a,h){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*h}function fr(a,h){if(a.j.info("Error code "+h),h==2){var g=w(a.fb,a),_=a.Xa;const D=!_;_=new dr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||jo(_,"https"),$i(_),D?Lf(_.toString(),g):Mf(_.toString(),g)}else ie(2);a.G=0,a.l&&a.l.sa(h),Vu(a),Nu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ie(2)):(this.j.info("Failed to ping google.com"),ie(1))};function Vu(a){if(a.G=0,a.ka=[],a.l){const h=vu(a.h);(h.length!=0||a.i.length!=0)&&(M(a.ka,h),M(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Fu(a,h,g){var _=g instanceof dr?Sn(g):new dr(g);if(_.g!="")h&&(_.g=h+"."+_.g),Bo(_,_.s);else{var D=l.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var U=new dr(null);_&&jo(U,_),h&&(U.g=h),D&&Bo(U,D),g&&(U.l=g),_=U}return g=a.D,h=a.ya,g&&h&&Te(_,g,h),Te(_,"VER",a.la),pn(a,_),_}function Ea(a,h,g){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ce(new Wi({eb:g})):new Ce(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function hr(){}t=hr.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Go(){}Go.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){Ze.call(this),this.g=new Ou(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!T(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Qr(this)}x(Vt,Ze),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){ya(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=Do(a),a=g);h.i.push(new cr(h.Ya++,a)),h.G==3&&Wo(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,ya(this.g),delete this.g,Vt.aa.N.call(this)};function Uu(a){aa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const g in h){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}x(Uu,aa);function ju(){gt.call(this),this.status=1}x(ju,gt);function Qr(a){this.g=a}x(Qr,hr),Qr.prototype.ua=function(){et(this.g,"a")},Qr.prototype.ta=function(a){et(this.g,new Uu(a))},Qr.prototype.sa=function(a){et(this.g,new ju)},Qr.prototype.ra=function(){et(this.g,"b")},Go.prototype.createWebChannel=Go.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,dE=function(){return new Go},cE=function(){return yt()},uE=vt,Mp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tt.NO_ERROR=0,tt.TIMEOUT=8,tt.HTTP_ERROR=6,Fc=tt,uu.COMPLETE="complete",lE=uu,Vo.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,ja=Vo,aE=Wi,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,sE=Ce}).apply(typeof uc<"u"?uc:typeof self<"u"?self:typeof window<"u"?window:{});const L0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new lg("@firebase/firestore");function xa(){return Eo.logLevel}function ee(t,...e){if(Eo.logLevel<=ge.DEBUG){const n=e.map(kg);Eo.debug(`Firestore (${Ys}): ${t}`,...n)}}function Rr(t,...e){if(Eo.logLevel<=ge.ERROR){const n=e.map(kg);Eo.error(`Firestore (${Ys}): ${t}`,...n)}}function Ms(t,...e){if(Eo.logLevel<=ge.WARN){const n=e.map(kg);Eo.warn(`Firestore (${Ys}): ${t}`,...n)}}function kg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t="Unexpected state"){const e=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: `+t;throw Rr(e),new Error(e)}function Re(t,e){t||se()}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Mr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class kx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ax{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new Ii;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ii,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ii)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new fE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new Ot(e)}}class Cx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Px{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Cx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,ee("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.R=n.token,new Rx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ox(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Vs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new lt(0,0))}static max(){return new ae(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends Cl{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const Nx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Cl{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return Nx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new re(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new re(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(r+=l,i++):(o(),i++)}if(o(),s)throw new re(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(qe.fromString(e))}static fromName(e){return new ne(qe.fromString(e).popFirst(5))}static empty(){return new ne(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new qe(e.slice()))}}function Dx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new ki(i,ne.empty(),e)}function Lx(t){return new ki(t.readTime,t.key,-1)}class ki{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ki(ae.min(),ne.empty(),-1)}static max(){return new ki(ae.max(),ne.empty(),-1)}}function Mx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jl(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==Vx)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const o=e.length,s=new Array(o);let l=0;for(let u=0;u<o;u++){const f=u;n(e[f]).next(p=>{s[f]=p,++l,l===o&&r(s)},p=>i(p))}})}static doWhile(e,n){return new $((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function Ux(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ag.oe=-1;function ff(t){return t==null}function Sd(t){return t===0&&1/t==-1/0}function jx(t){return typeof t=="number"&&Number.isInteger(t)&&!Sd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cc(this.root,e,this.comparator,!1)}getReverseIterator(){return new cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cc(this.root,e,this.comparator,!0)}}class cc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??_t.RED,this.left=i??_t.EMPTY,this.right=o??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new _t(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,n,r,i,o){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new V0(this.data.getIterator())}getIteratorFrom(e){return new V0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class V0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new Nn([])}unionWith(e){let n=new It(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new mE("Invalid base64 string: "+o):o}}(e);return new Mt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const Bx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(t){if(Re(!!t),typeof t=="string"){let e=0;const n=Bx.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function To(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pg(t){const e=t.mapValue.fields.__previous_value__;return Cg(e)?Pg(e):e}function Pl(t){const e=Ai(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n,r,i,o,s,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f}}class Rl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Rl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Io(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cg(t)?4:$x(t)?9007199254740991:10:se()}function tr(t,e){if(t===e)return!0;const n=Io(t);if(n!==Io(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pl(t).isEqual(Pl(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Ai(i.timestampValue),l=Ai(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return To(i.bytesValue).isEqual(To(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Xe(i.geoPointValue.latitude)===Xe(o.geoPointValue.latitude)&&Xe(i.geoPointValue.longitude)===Xe(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Xe(i.integerValue)===Xe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Xe(i.doubleValue),l=Xe(o.doubleValue);return s===l?Sd(s)===Sd(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(M0(s)!==M0(l))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(l[u]===void 0||!tr(s[u],l[u])))return!1;return!0}(t,e);default:return se()}}function xl(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function Fs(t,e){if(t===e)return 0;const n=Io(t),r=Io(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=Xe(o.integerValue||o.doubleValue),u=Xe(s.integerValue||s.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return F0(t.timestampValue,e.timestampValue);case 4:return F0(Pl(t),Pl(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(o,s){const l=To(o),u=To(s);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),u=s.split("/");for(let f=0;f<l.length&&f<u.length;f++){const p=Ie(l[f],u[f]);if(p!==0)return p}return Ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=Ie(Xe(o.latitude),Xe(s.latitude));return l!==0?l:Ie(Xe(o.longitude),Xe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const l=o.values||[],u=s.values||[];for(let f=0;f<l.length&&f<u.length;++f){const p=Fs(l[f],u[f]);if(p)return p}return Ie(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===dc.mapValue&&s===dc.mapValue)return 0;if(o===dc.mapValue)return 1;if(s===dc.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),f=s.fields||{},p=Object.keys(f);u.sort(),p.sort();for(let y=0;y<u.length&&y<p.length;++y){const w=Ie(u[y],p[y]);if(w!==0)return w;const A=Fs(l[u[y]],f[p[y]]);if(A!==0)return A}return Ie(u.length,p.length)}(t.mapValue,e.mapValue);default:throw se()}}function F0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Ai(t),r=Ai(e),i=Ie(n.seconds,r.seconds);return i!==0?i:Ie(n.nanos,r.nanos)}function Us(t){return Vp(t)}function Vp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ai(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return To(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Vp(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Vp(n.fields[s])}`;return i+"}"}(t.mapValue):se()}function Fp(t){return!!t&&"integerValue"in t}function Rg(t){return!!t&&"arrayValue"in t}function U0(t){return!!t&&"nullValue"in t}function j0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uc(t){return!!t&&"mapValue"in t}function el(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=el(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=el(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $x(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.value=e}static empty(){return new vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(n)}setAll(e){let n=Et.emptyPath(),r={},i=[];e.forEach((s,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}s?r[l.lastSegment()]=el(s):i.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Uc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Uc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xs(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new vn(el(this.value))}}function gE(t){const e=[];return Xs(t.fields,(n,r)=>{const i=new Et([n]);if(Uc(r)){const o=gE(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new Nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,r,i,o,s,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new Dt(e,0,ae.min(),ae.min(),ae.min(),vn.empty(),0)}static newFoundDocument(e,n,r,i){return new Dt(e,1,n,ae.min(),r,i,0)}static newNoDocument(e,n){return new Dt(e,2,n,ae.min(),ae.min(),vn.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,ae.min(),ae.min(),vn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){this.position=e,this.inclusive=n}}function B0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=ne.comparator(ne.fromName(s.referenceValue),n.key):r=Fs(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function z0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n="asc"){this.field=e,this.dir=n}}function Hx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{}class ot extends vE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qx(e,n,r):n==="array-contains"?new Qx(e,r):n==="in"?new Yx(e,r):n==="not-in"?new Xx(e,r):n==="array-contains-any"?new Jx(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Kx(e,r):new Gx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fs(n,this.value)):n!==null&&Io(this.value)===Io(n)&&this.matchesComparison(Fs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends vE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nr(e,n)}matches(e){return yE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function yE(t){return t.op==="and"}function wE(t){return Wx(t)&&yE(t)}function Wx(t){for(const e of t.filters)if(e instanceof nr)return!1;return!0}function Up(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+Us(t.value);if(wE(t))return t.filters.map(e=>Up(e)).join(",");{const e=t.filters.map(n=>Up(n)).join(",");return`${t.op}(${e})`}}function _E(t,e){return t instanceof ot?function(r,i){return i instanceof ot&&r.op===i.op&&r.field.isEqual(i.field)&&tr(r.value,i.value)}(t,e):t instanceof nr?function(r,i){return i instanceof nr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,l)=>o&&_E(s,i.filters[l]),!0):!1}(t,e):void se()}function EE(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${Us(n.value)}`}(t):t instanceof nr?function(n){return n.op.toString()+" {"+n.getFilters().map(EE).join(" ,")+"}"}(t):"Filter"}class qx extends ot{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class Kx extends ot{constructor(e,n){super(e,"in",n),this.keys=TE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Gx extends ot{constructor(e,n){super(e,"not-in",n),this.keys=TE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function TE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class Qx extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rg(n)&&xl(n.arrayValue,this.value)}}class Yx extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xl(this.value.arrayValue,n)}}class Xx extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xl(this.value.arrayValue,n)}}class Jx extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e,n=null,r=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function $0(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Zx(t,e,n,r,i,o,s)}function xg(t){const e=ce(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Up(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ff(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Us(r)).join(",")),e.ue=n}return e.ue}function Og(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Hx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_E(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!z0(t.startAt,e.startAt)&&z0(t.endAt,e.endAt)}function jp(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n=null,r=[],i=[],o=null,s="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eO(t,e,n,r,i,o,s,l){return new hf(t,e,n,r,i,o,s,l)}function Ng(t){return new hf(t)}function H0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tO(t){return t.collectionGroup!==null}function tl(t){const e=ce(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new It(Et.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Ad(o,r))}),n.has(Et.keyField().canonicalString())||e.ce.push(new Ad(Et.keyField(),r))}return e.ce}function Zn(t){const e=ce(t);return e.le||(e.le=nO(e,tl(t))),e.le}function nO(t,e){if(t.limitType==="F")return $0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Ad(i.field,o)});const n=t.endAt?new kd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kd(t.startAt.position,t.startAt.inclusive):null;return $0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bp(t,e,n){return new hf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pf(t,e){return Og(Zn(t),Zn(e))&&t.limitType===e.limitType}function IE(t){return`${xg(Zn(t))}|lt:${t.limitType}`}function Jo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>EE(i)).join(", ")}]`),ff(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Us(i)).join(",")),`Target(${r})`}(Zn(t))}; limitType=${t.limitType})`}function mf(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ne.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of tl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,l,u){const f=B0(s,l,u);return s.inclusive?f<=0:f<0}(r.startAt,tl(r),i)||r.endAt&&!function(s,l,u){const f=B0(s,l,u);return s.inclusive?f>=0:f>0}(r.endAt,tl(r),i))}(t,e)}function rO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bE(t){return(e,n)=>{let r=!1;for(const i of tl(t)){const o=iO(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function iO(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(o,s,l){const u=s.data.field(o),f=l.data.field(o);return u!==null&&f!==null?Fs(u,f):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return pE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=new ze(ne.comparator);function xr(){return oO}const SE=new ze(ne.comparator);function Ba(...t){let e=SE;for(const n of t)e=e.insert(n.key,n);return e}function kE(t){let e=SE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function io(){return nl()}function AE(){return nl()}function nl(){return new Js(t=>t.toString(),(t,e)=>t.isEqual(e))}const sO=new ze(ne.comparator),aO=new It(ne.comparator);function me(...t){let e=aO;for(const n of t)e=e.add(n);return e}const lO=new It(Ie);function uO(){return lO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sd(e)?"-0":e}}function PE(t){return{integerValue:""+t}}function cO(t,e){return jx(e)?PE(e):CE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this._=void 0}}function dO(t,e,n){return t instanceof Cd?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Cg(o)&&(o=Pg(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof Ol?xE(t,e):t instanceof Nl?OE(t,e):function(i,o){const s=RE(i,o),l=W0(s)+W0(i.Pe);return Fp(s)&&Fp(i.Pe)?PE(l):CE(i.serializer,l)}(t,e)}function fO(t,e,n){return t instanceof Ol?xE(t,e):t instanceof Nl?OE(t,e):n}function RE(t,e){return t instanceof Pd?function(r){return Fp(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Cd extends gf{}class Ol extends gf{constructor(e){super(),this.elements=e}}function xE(t,e){const n=NE(e);for(const r of t.elements)n.some(i=>tr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Nl extends gf{constructor(e){super(),this.elements=e}}function OE(t,e){let n=NE(e);for(const r of t.elements)n=n.filter(i=>!tr(i,r));return{arrayValue:{values:n}}}class Pd extends gf{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function W0(t){return Xe(t.integerValue||t.doubleValue)}function NE(t){return Rg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ol&&i instanceof Ol||r instanceof Nl&&i instanceof Nl?Vs(r.elements,i.elements,tr):r instanceof Pd&&i instanceof Pd?tr(r.Pe,i.Pe):r instanceof Cd&&i instanceof Cd}(t.transform,e.transform)}class pO{constructor(e,n){this.version=e,this.transformResults=n}}class br{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new br}static exists(e){return new br(void 0,e)}static updateTime(e){return new br(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vf{}function DE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ME(t.key,br.none()):new eu(t.key,t.data,br.none());{const n=t.data,r=vn.empty();let i=new It(Et.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Po(t.key,r,new Nn(i.toArray()),br.none())}}function mO(t,e,n){t instanceof eu?function(i,o,s){const l=i.value.clone(),u=K0(i.fieldTransforms,o,s.transformResults);l.setAll(u),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Po?function(i,o,s){if(!jc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=K0(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(LE(i)),u.setAll(l),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function rl(t,e,n,r){return t instanceof eu?function(o,s,l,u){if(!jc(o.precondition,s))return l;const f=o.value.clone(),p=G0(o.fieldTransforms,u,s);return f.setAll(p),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof Po?function(o,s,l,u){if(!jc(o.precondition,s))return l;const f=G0(o.fieldTransforms,u,s),p=s.data;return p.setAll(LE(o)),p.setAll(f),s.convertToFoundDocument(s.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(o,s,l){return jc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,n)}function gO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=RE(r.transform,i||null);o!=null&&(n===null&&(n=vn.empty()),n.set(r.field,o))}return n||null}function q0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Vs(r,i,(o,s)=>hO(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class eu extends vf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Po extends vf{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function LE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function K0(t,e,n){const r=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);r.set(o.field,fO(s,l,n[i]))}return r}function G0(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,dO(o,s,e))}return r}class ME extends vf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vO extends vf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&mO(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=AE();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=n.has(i.key)?null:l;const u=DE(s,l);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,(n,r)=>q0(n,r))&&Vs(this.baseMutations,e.baseMutations,(n,r)=>q0(n,r))}}class Dg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Re(e.mutations.length===r.length);let i=function(){return sO}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new Dg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,ye;function EO(t){switch(t){default:return se();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function VE(t){if(t===void 0)return Rr("GRPC error has no .code"),H.UNKNOWN;switch(t){case Ye.OK:return H.OK;case Ye.CANCELLED:return H.CANCELLED;case Ye.UNKNOWN:return H.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return H.INTERNAL;case Ye.UNAVAILABLE:return H.UNAVAILABLE;case Ye.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Ye.NOT_FOUND:return H.NOT_FOUND;case Ye.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Ye.ABORTED:return H.ABORTED;case Ye.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Ye.DATA_LOSS:return H.DATA_LOSS;default:return se()}}(ye=Ye||(Ye={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=new co([4294967295,4294967295],0);function Q0(t){const e=TO().encode(t),n=new oE;return n.update(e),new Uint8Array(n.digest())}function Y0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new co([n,r],0),new co([i,o],0)]}class Lg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new za(`Invalid padding: ${n}`);if(r<0)throw new za(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new za(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new za(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=co.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(co.fromNumber(r)));return i.compare(IO)===1&&(i=new co([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Q0(e),[r,i]=Y0(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new Lg(o,i,n);return r.forEach(l=>s.insert(l)),s}insert(e){if(this.Ie===0)return;const n=Q0(e),[r,i]=Y0(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,tu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new yf(ae.min(),i,new ze(Ie),xr(),me())}}class tu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new tu(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class FE{constructor(e,n){this.targetId=e,this.me=n}}class UE{constructor(e,n,r=Mt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class X0{constructor(){this.fe=0,this.ge=Z0(),this.pe=Mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=me(),n=me(),r=me();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:se()}}),new tu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Z0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Re(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bO{constructor(e){this.Le=e,this.Be=new Map,this.ke=xr(),this.qe=J0(),this.Qe=new ze(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(jp(o))if(r===0){const s=new ne(o.path);this.Ue(n,s,Dt.newNoDocument(s,ae.min()))}else Re(r===1);else{const s=this.Ye(n);if(s!==r){const l=this.Ze(e),u=l?this.Xe(l,e,s):1;if(u!==0){this.je(n);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,f)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,l;try{s=To(r).toUint8Array()}catch(u){if(u instanceof mE)return Ms("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Lg(s,i,o)}catch(u){return Ms(u instanceof za?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),l=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const l=this.Je(s);if(l){if(o.current&&jp(l.target)){const u=new ne(l.target.path);this.ke.get(u)!==null||this.it(s,u)||this.Ue(s,u,Dt.newNoDocument(u,e))}o.be&&(n.set(s,o.Ce()),o.ve())}});let r=me();this.qe.forEach((o,s)=>{let l=!0;s.forEachWhile(u=>{const f=this.Je(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new yf(e,n,this.Qe,this.ke,r);return this.ke=xr(),this.qe=J0(),this.Qe=new ze(Ie),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new X0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new It(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new X0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function J0(){return new ze(ne.comparator)}function Z0(){return new ze(ne.comparator)}const SO={asc:"ASCENDING",desc:"DESCENDING"},kO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AO={and:"AND",or:"OR"};class CO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zp(t,e){return t.useProto3Json||ff(e)?e:{value:e}}function Rd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PO(t,e){return Rd(t,e.toTimestamp())}function er(t){return Re(!!t),ae.fromTimestamp(function(n){const r=Ai(n);return new lt(r.seconds,r.nanos)}(t))}function Mg(t,e){return $p(t,e).canonicalString()}function $p(t,e){const n=function(i){return new qe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function BE(t){const e=qe.fromString(t);return Re(qE(e)),e}function Hp(t,e){return Mg(t.databaseId,e.path)}function Ih(t,e){const n=BE(e);if(n.get(1)!==t.databaseId.projectId)throw new re(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne($E(n))}function zE(t,e){return Mg(t.databaseId,e)}function RO(t){const e=BE(t);return e.length===4?qe.emptyPath():$E(e)}function Wp(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $E(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ew(t,e,n){return{name:Hp(t,e),fields:n.value.mapValue.fields}}function xO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(Re(p===void 0||typeof p=="string"),Mt.fromBase64String(p||"")):(Re(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Mt.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,l=s&&function(f){const p=f.code===void 0?H.UNKNOWN:VE(f.code);return new re(p,f.message||"")}(s);n=new UE(r,i,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ih(t,r.document.name),o=er(r.document.updateTime),s=r.document.createTime?er(r.document.createTime):ae.min(),l=new vn({mapValue:{fields:r.document.fields}}),u=Dt.newFoundDocument(i,o,s,l),f=r.targetIds||[],p=r.removedTargetIds||[];n=new Bc(f,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ih(t,r.document),o=r.readTime?er(r.readTime):ae.min(),s=Dt.newNoDocument(i,o),l=r.removedTargetIds||[];n=new Bc([],l,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ih(t,r.document),o=r.removedTargetIds||[];n=new Bc([],o,i,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new _O(i,o),l=r.targetId;n=new FE(l,s)}}return n}function OO(t,e){let n;if(e instanceof eu)n={update:ew(t,e.key,e.value)};else if(e instanceof ME)n={delete:Hp(t,e.key)};else if(e instanceof Po)n={update:ew(t,e.key,e.data),updateMask:BO(e.fieldMask)};else{if(!(e instanceof vO))return se();n={verify:Hp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const l=s.transform;if(l instanceof Cd)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ol)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Nl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pd)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:PO(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:se()}(t,e.precondition)),n}function NO(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?er(i.updateTime):er(o);return s.isEqual(ae.min())&&(s=er(o)),new pO(s,i.transformResults||[])}(n,e))):[]}function DO(t,e){return{documents:[zE(t,e.path)]}}function LO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=zE(t,i);const o=function(f){if(f.length!==0)return WE(nr.create(f,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(f){if(f.length!==0)return f.map(p=>function(w){return{field:Zo(w.field),direction:FO(w.dir)}}(p))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const l=zp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:n,parent:i}}function MO(t){let e=RO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];n.where&&(o=function(y){const w=HE(y);return w instanceof nr&&wE(w)?w.getFilters():[w]}(n.where));let s=[];n.orderBy&&(s=function(y){return y.map(w=>function(x){return new Ad(es(x.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(w))}(n.orderBy));let l=null;n.limit&&(l=function(y){let w;return w=typeof y=="object"?y.value:y,ff(w)?null:w}(n.limit));let u=null;n.startAt&&(u=function(y){const w=!!y.before,A=y.values||[];return new kd(A,w)}(n.startAt));let f=null;return n.endAt&&(f=function(y){const w=!y.before,A=y.values||[];return new kd(A,w)}(n.endAt)),eO(e,i,s,o,l,"F",u,f)}function VO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=es(n.unaryFilter.field);return ot.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=es(n.unaryFilter.field);return ot.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=es(n.unaryFilter.field);return ot.create(s,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nr.create(n.compositeFilter.filters.map(r=>HE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return se()}}(n.compositeFilter.op))}(t):se()}function FO(t){return SO[t]}function UO(t){return kO[t]}function jO(t){return AO[t]}function Zo(t){return{fieldPath:t.canonicalString()}}function es(t){return Et.fromServerFormat(t.fieldPath)}function WE(t){return t instanceof ot?function(n){if(n.op==="=="){if(j0(n.value))return{unaryFilter:{field:Zo(n.field),op:"IS_NAN"}};if(U0(n.value))return{unaryFilter:{field:Zo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(j0(n.value))return{unaryFilter:{field:Zo(n.field),op:"IS_NOT_NAN"}};if(U0(n.value))return{unaryFilter:{field:Zo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zo(n.field),op:UO(n.op),value:n.value}}}(t):t instanceof nr?function(n){const r=n.getFilters().map(i=>WE(i));return r.length===1?r[0]:{compositeFilter:{op:jO(n.op),filters:r}}}(t):se()}function BO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r,i,o=ae.min(),s=ae.min(),l=Mt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e){this.ct=e}}function $O(t){const e=MO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(){this._n=new WO}addToCollectionParentIndex(e,n){return this._n.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ki.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ki.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class WO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new It(qe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new It(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new js(0)}static Ln(){return new js(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(){this.changes=new Js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&rl(r.mutation,i,Nn.empty(),lt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const i=io();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Ba();return o.forEach((l,u)=>{s=s.insert(l,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=io();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{n.set(s,l)})})}computeViews(e,n,r,i){let o=xr();const s=nl(),l=function(){return nl()}();return n.forEach((u,f)=>{const p=r.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof Po)?o=o.insert(f.key,f):p!==void 0?(s.set(f.key,p.mutation.getFieldMask()),rl(p.mutation,f,p.mutation.getFieldMask(),lt.now())):s.set(f.key,Nn.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((f,p)=>s.set(f,p)),n.forEach((f,p)=>{var y;return l.set(f,new KO(p,(y=s.get(f))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=nl();let i=new ze((s,l)=>s-l),o=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const l of s)l.keys().forEach(u=>{const f=n.get(u);if(f===null)return;let p=r.get(u)||Nn.empty();p=l.applyToLocalView(f,p),r.set(u,p);const y=(i.get(l.batchId)||me()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,p=u.value,y=AE();p.forEach(w=>{if(!o.has(w)){const A=DE(n.get(w),r.get(w));A!==null&&y.set(w,A),o=o.add(w)}}),s.push(this.documentOverlayCache.saveOverlays(e,f,y))}return $.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return ne.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):$.resolve(io());let l=-1,u=o;return s.next(f=>$.forEach(f,(p,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(p)?$.resolve():this.remoteDocumentCache.getEntry(e,p).next(w=>{u=u.insert(p,w)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,u,f,me())).next(p=>({batchId:l,changes:kE(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let i=Ba();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Ba();return this.indexManager.getCollectionParents(e,o).next(l=>$.forEach(l,u=>{const f=function(y,w){return new hf(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(p=>{p.forEach((y,w)=>{s=s.insert(y,w)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,f)=>{const p=f.getKey();s.get(p)===null&&(s=s.insert(p,Dt.newInvalidDocument(p)))});let l=Ba();return s.forEach((u,f)=>{const p=o.get(u);p!==void 0&&rl(p.mutation,f,Nn.empty(),lt.now()),mf(n,f)&&(l=l.insert(u,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return $.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:er(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:$O(i.bundledQuery),readTime:er(i.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.overlays=new ze(ne.comparator),this.hr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=io();return $.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=io(),o=n.length+1,s=new ne(n.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new ze((f,p)=>f-p);const s=this.overlays.getIterator();for(;s.hasNext();){const f=s.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let p=o.get(f.largestBatchId);p===null&&(p=io(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const l=io(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,p)=>l.set(f,p)),!(l.size()>=i)););return $.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new wO(n,r));let o=this.hr.get(n);o===void 0&&(o=me(),this.hr.set(n,o)),this.hr.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.Pr=new It(ft.Ir),this.Tr=new It(ft.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ft(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ne(new qe([])),r=new ft(n,e),i=new ft(n,e+1),o=[];return this.Tr.forEachInRange([r,i],s=>{this.Ar(s),o.push(s.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ne(new qe([])),r=new ft(n,e),i=new ft(n,e+1);let o=me();return this.Tr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new ft(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ne.comparator(e.key,n.key)||Ie(e.pr,n.pr)}static Er(e,n){return Ie(e.pr,n.pr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new It(ft.Ir)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new yO(o,n,r,i);this.mutationQueue.push(s);for(const l of i)this.wr=this.wr.add(new ft(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,n){return $.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),i=new ft(n,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],s=>{const l=this.Sr(s.pr);o.push(l)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new It(Ie);return n.forEach(i=>{const o=new ft(i,0),s=new ft(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,s],l=>{r=r.add(l.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;ne.isDocumentKey(o)||(o=o.child(""));const s=new ft(new ne(o),0);let l=new It(Ie);return this.wr.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(u.pr)),!0)},s),$.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return $.forEach(n.mutations,i=>{const o=new ft(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ft(n,0),i=this.wr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e){this.vr=e,this.docs=function(){return new ze(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let r=xr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Dt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=xr();const s=n.path,l=new ne(s.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:p}}=u.getNext();if(!s.isPrefixOf(f.path))break;f.path.length>s.length+1||Mx(Lx(p),r)<=0||(i.has(p.key)||mf(n,p))&&(o=o.insert(p.key,p.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,n,r,i){se()}Fr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZO(this)}getSize(e){return $.resolve(this.size)}}class ZO extends qO{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.persistence=e,this.Mr=new Js(n=>xg(n),Og),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Vg,this.targetCount=0,this.Lr=js.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),$.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new js(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.qn(n),$.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Mr.forEach((s,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n){this.Br={},this.overlays={},this.kr=new Ag(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new eN(this),this.indexManager=new HO,this.remoteDocumentCache=function(i){return new JO(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new zO(n),this.$r=new QO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new YO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new XO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const i=new nN(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,n){return $.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class nN extends Fx{constructor(e){super(),this.currentSequenceNumber=e}}class Fg{constructor(e){this.persistence=e,this.zr=new Vg,this.jr=null}static Hr(e){return new Fg(e)}get Jr(){if(this.jr)return this.jr;throw se()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),$.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{const i=ne.fromPath(r);return this.Yr(e,i).next(o=>{o||n.removeEntry(i,ae.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return $.or([()=>$.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=me(),i=me();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ug(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Jk()?8:Ux(St())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.ji(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Hi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new rN;return this.Ji(e,n,s).next(l=>{if(o.result=l,this.Ui)return this.Yi(e,n,s,l.size)})}).next(()=>o.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(xa()<=ge.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Jo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$.resolve()):(xa()<=ge.DEBUG&&ee("QueryEngine","Query:",Jo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(xa()<=ge.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Jo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(n))):$.resolve())}ji(e,n){if(H0(n))return $.resolve(null);let r=Zn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Bp(n,null,"F"),r=Zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=me(...o);return this.zi.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const f=this.Zi(n,l);return this.Xi(n,f,s,u.readTime)?this.ji(e,Bp(n,null,"F")):this.es(e,f,n,u)}))})))}Hi(e,n,r,i){return H0(n)||i.isEqual(ae.min())?$.resolve(null):this.zi.getDocuments(e,r).next(o=>{const s=this.Zi(n,o);return this.Xi(n,s,r,i)?$.resolve(null):(xa()<=ge.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jo(n)),this.es(e,s,n,Dx(i,-1)).next(l=>l))})}Zi(e,n){let r=new It(bE(e));return n.forEach((i,o)=>{mf(e,o)&&(r=r.add(o))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,n,r){return xa()<=ge.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Jo(n)),this.zi.getDocumentsMatchingQuery(e,n,ki.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ze(Ie),this.rs=new Js(o=>xg(o),Og),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GO(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function sN(t,e,n,r){return new oN(t,e,n,r)}async function KE(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],l=[];let u=me();for(const f of i){s.push(f.batchId);for(const p of f.mutations)u=u.add(p.key)}for(const f of o){l.push(f.batchId);for(const p of f.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(f=>({us:f,removedBatchIds:s,addedBatchIds:l}))})})}function aN(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,f,p){const y=f.batch,w=y.keys();let A=$.resolve();return w.forEach(x=>{A=A.next(()=>p.getEntry(u,x)).next(N=>{const M=f.docVersions.get(x);Re(M!==null),N.version.compareTo(M)<0&&(y.applyToRemoteDocument(N,f),N.isValidDocument()&&(N.setReadTime(f.commitVersion),p.addEntry(N)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=me();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(u=u.add(l.batch.mutations[f].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function GE(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function lN(t,e){const n=ce(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((p,y)=>{const w=i.get(y);if(!w)return;l.push(n.Qr.removeMatchingKeys(o,p.removedDocuments,y).next(()=>n.Qr.addMatchingKeys(o,p.addedDocuments,y)));let A=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(y)!==null?A=A.withResumeToken(Mt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),i=i.insert(y,A),function(N,M,k){return N.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(w,A,p)&&l.push(n.Qr.updateTargetData(o,A))});let u=xr(),f=me();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(uN(o,s,e.documentUpdates).next(p=>{u=p.cs,f=p.ls})),!r.isEqual(ae.min())){const p=n.Qr.getLastRemoteSnapshotVersion(o).next(y=>n.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return $.waitFor(l).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,f)).next(()=>u)}).then(o=>(n.ns=i,o))}function uN(t,e,n){let r=me(),i=me();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=xr();return n.forEach((l,u)=>{const f=o.get(l);u.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ae.min())?(e.removeEntry(l,u.readTime),s=s.insert(l,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),s=s.insert(l,u)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",u.version)}),{cs:s,ls:i}})}function cN(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dN(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(o=>o?(i=o,$.resolve(i)):n.Qr.allocateTargetId(r).next(s=>(i=new di(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function qp(t,e,n){const r=ce(t),i=r.ns.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Zl(s))throw s;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function tw(t,e,n){const r=ce(t);let i=ae.min(),o=me();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,f,p){const y=ce(u),w=y.rs.get(p);return w!==void 0?$.resolve(y.ns.get(w)):y.Qr.getTargetData(f,p)}(r,s,Zn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(s,l.targetId).next(u=>{o=u})}).next(()=>r.ts.getDocumentsMatchingQuery(s,e,n?i:ae.min(),n?o:me())).next(l=>(fN(r,rO(e),l),{documents:l,hs:o})))}function fN(t,e,n){let r=t.ss.get(e)||ae.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.ss.set(e,r)}class nw{constructor(){this.activeTargetIds=uO()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hN{constructor(){this.no=new nw,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new nw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc=null;function bh(){return fc===null?fc=function(){return 268435456+Math.round(2147483648*Math.random())}():fc++,"0x"+fc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class vN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(n,r,i,o,s){const l=bh(),u=this.vo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,s),this.Mo(n,u,f,i).then(p=>(ee("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Ms("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}xo(n,r,i,o,s,l){return this.Co(n,r,i,o,s)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ys}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}vo(n,r){const i=mN[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const o=bh();return new Promise((s,l)=>{const u=new sE;u.setWithCredentials(!0),u.listenOnce(lE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Fc.NO_ERROR:const p=u.getResponseJson();ee(xt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),s(p);break;case Fc.TIMEOUT:ee(xt,`RPC '${e}' ${o} timed out`),l(new re(H.DEADLINE_EXCEEDED,"Request time out"));break;case Fc.HTTP_ERROR:const y=u.getStatus();if(ee(xt,`RPC '${e}' ${o} failed with status:`,y,"response text:",u.getResponseText()),y>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const A=w==null?void 0:w.error;if(A&&A.status&&A.message){const x=function(M){const k=M.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(k)>=0?k:H.UNKNOWN}(A.status);l(new re(x,A.message))}else l(new re(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new re(H.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{ee(xt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);ee(xt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",f,r,15)})}Oo(e,n,r){const i=bh(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=dE(),l=cE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.xmlHttpFactory=new aE({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=o.join("");ee(xt,`Creating RPC '${e}' stream ${i}: ${p}`,u);const y=s.createWebChannel(p,u);let w=!1,A=!1;const x=new gN({lo:M=>{A?ee(xt,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(w||(ee(xt,`Opening RPC '${e}' stream ${i} transport.`),y.open(),w=!0),ee(xt,`RPC '${e}' stream ${i} sending:`,M),y.send(M))},ho:()=>y.close()}),N=(M,k,T)=>{M.listen(k,P=>{try{T(P)}catch(F){setTimeout(()=>{throw F},0)}})};return N(y,ja.EventType.OPEN,()=>{A||(ee(xt,`RPC '${e}' stream ${i} transport opened.`),x.mo())}),N(y,ja.EventType.CLOSE,()=>{A||(A=!0,ee(xt,`RPC '${e}' stream ${i} transport closed`),x.po())}),N(y,ja.EventType.ERROR,M=>{A||(A=!0,Ms(xt,`RPC '${e}' stream ${i} transport errored:`,M),x.po(new re(H.UNAVAILABLE,"The operation could not be completed")))}),N(y,ja.EventType.MESSAGE,M=>{var k;if(!A){const T=M.data[0];Re(!!T);const P=T,F=P.error||((k=P[0])===null||k===void 0?void 0:k.error);if(F){ee(xt,`RPC '${e}' stream ${i} received error:`,F);const z=F.status;let q=function(I){const C=Ye[I];if(C!==void 0)return VE(C)}(z),S=F.message;q===void 0&&(q=H.INTERNAL,S="Unknown error status: "+z+" with message "+F.message),A=!0,x.po(new re(q,S)),y.close()}else ee(xt,`RPC '${e}' stream ${i} received:`,T),x.yo(T)}}),N(l,uE.STAT_EVENT,M=>{M.stat===Mp.PROXY?ee(xt,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===Mp.NOPROXY&&ee(xt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.fo()},0),x}}function Sh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t){return new CO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n,r,i,o,s,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new QE(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Rr(n.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new re(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yN extends YE{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=xO(this.serializer,e),r=function(o){if(!("targetChange"in o))return ae.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?ae.min():s.readTime?er(s.readTime):ae.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Wp(this.serializer),n.addTarget=function(o,s){let l;const u=s.target;if(l=jp(u)?{documents:DO(o,u)}:{query:LO(o,u)._t},l.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){l.resumeToken=jE(o,s.resumeToken);const f=zp(o,s.expectedCount);f!==null&&(l.expectedCount=f)}else if(s.snapshotVersion.compareTo(ae.min())>0){l.readTime=Rd(o,s.snapshotVersion.toTimestamp());const f=zp(o,s.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,e);const r=VO(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Wp(this.serializer),n.removeTarget=e,this.i_(n)}}class wN extends YE{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=NO(e.writeResults,e.commitTime),r=er(e.commitTime);return this.listener.A_(r,n)}return Re(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Wp(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>OO(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new re(H.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Co(e,$p(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(H.UNKNOWN,o.toString())})}xo(e,n,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.xo(e,$p(n,r),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new re(H.UNKNOWN,s.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class EN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Rr(n),this.y_=!1):ee("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(s=>{r.enqueueAndForget(async()=>{Ro(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(u){const f=ce(u);f.M_.add(4),await nu(f),f.N_.set("Unknown"),f.M_.delete(4),await _f(f)}(this))})}),this.N_=new EN(r,i)}}async function _f(t){if(Ro(t))for(const e of t.x_)await e(!0)}async function nu(t){for(const e of t.x_)await e(!1)}function XE(t,e){const n=ce(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),$g(n)?zg(n):Zs(n).Xo()&&Bg(n,e))}function jg(t,e){const n=ce(t),r=Zs(n);n.F_.delete(e),r.Xo()&&JE(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ro(n)&&n.N_.set("Unknown"))}function Bg(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zs(t).P_(e)}function JE(t,e){t.L_.xe(e),Zs(t).I_(e)}function zg(t){t.L_=new bO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Zs(t).start(),t.N_.w_()}function $g(t){return Ro(t)&&!Zs(t).Zo()&&t.F_.size>0}function Ro(t){return ce(t).M_.size===0}function ZE(t){t.L_=void 0}async function IN(t){t.N_.set("Online")}async function bN(t){t.F_.forEach((e,n)=>{Bg(t,e)})}async function SN(t,e){ZE(t),$g(t)?(t.N_.D_(e),zg(t)):t.N_.set("Unknown")}async function kN(t,e,n){if(t.N_.set("Online"),e instanceof UE&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const l of o.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,s),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xd(t,r)}else if(e instanceof Bc?t.L_.Ke(e):e instanceof FE?t.L_.He(e):t.L_.We(e),!n.isEqual(ae.min()))try{const r=await GE(t.localStore);n.compareTo(r)>=0&&await function(o,s){const l=o.L_.rt(s);return l.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const p=o.F_.get(f);p&&o.F_.set(f,p.withResumeToken(u.resumeToken,s))}}),l.targetMismatches.forEach((u,f)=>{const p=o.F_.get(u);if(!p)return;o.F_.set(u,p.withResumeToken(Mt.EMPTY_BYTE_STRING,p.snapshotVersion)),JE(o,u);const y=new di(p.target,u,f,p.sequenceNumber);Bg(o,y)}),o.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await xd(t,r)}}async function xd(t,e,n){if(!Zl(e))throw e;t.M_.add(1),await nu(t),t.N_.set("Offline"),n||(n=()=>GE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await _f(t)})}function eT(t,e){return e().catch(n=>xd(t,n,e))}async function Ef(t){const e=ce(t),n=Ci(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;AN(e);)try{const i=await cN(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,CN(e,i)}catch(i){await xd(e,i)}tT(e)&&nT(e)}function AN(t){return Ro(t)&&t.v_.length<10}function CN(t,e){t.v_.push(e);const n=Ci(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function tT(t){return Ro(t)&&!Ci(t).Zo()&&t.v_.length>0}function nT(t){Ci(t).start()}async function PN(t){Ci(t).V_()}async function RN(t){const e=Ci(t);for(const n of t.v_)e.d_(n.mutations)}async function xN(t,e,n){const r=t.v_.shift(),i=Dg.from(r,e,n);await eT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ef(t)}async function ON(t,e){e&&Ci(t).E_&&await async function(r,i){if(function(s){return EO(s)&&s!==H.ABORTED}(i.code)){const o=r.v_.shift();Ci(r).t_(),await eT(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ef(r)}}(t,e),tT(t)&&nT(t)}async function iw(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Ro(n);n.M_.add(3),await nu(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await _f(n)}async function NN(t,e){const n=ce(t);e?(n.M_.delete(2),await _f(n)):e||(n.M_.add(2),await nu(n),n.N_.set("Unknown"))}function Zs(t){return t.B_||(t.B_=function(n,r,i){const o=ce(n);return o.f_(),new yN(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:IN.bind(null,t),To:bN.bind(null,t),Ao:SN.bind(null,t),h_:kN.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),$g(t)?zg(t):t.N_.set("Unknown")):(await t.B_.stop(),ZE(t))})),t.B_}function Ci(t){return t.k_||(t.k_=function(n,r,i){const o=ce(n);return o.f_(),new wN(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:PN.bind(null,t),Ao:ON.bind(null,t),R_:RN.bind(null,t),A_:xN.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Ef(t)):(await t.k_.stop(),t.v_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,l=new Hg(e,n,s,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wg(t,e){if(Rr("AsyncQueue",`${e}: ${t}`),Zl(t))return new re(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Ba(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new ks(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ks)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ks;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.q_=new ze(ne.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):se():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bs{constructor(e,n,r,i,o,s,l,u,f){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(l=>{s.push({type:0,doc:l})}),new Bs(e,n,ks.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class LN{constructor(){this.queries=new Js(e=>IE(e),pf),this.onlineState="Unknown",this.z_=new Set}}async function MN(t,e){const n=ce(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.W_()&&e.G_()&&(r=2):(o=new DN,r=e.G_()?0:1);try{switch(r){case 0:o.K_=await n.onListen(i,!0);break;case 1:o.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const l=Wg(s,`Initialization of query '${Jo(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,o),o.U_.push(e),e.j_(n.onlineState),o.K_&&e.H_(o.K_)&&qg(n)}async function VN(t,e){const n=ce(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.U_.indexOf(e);s>=0&&(o.U_.splice(s,1),o.U_.length===0?i=e.G_()?0:1:!o.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function FN(t,e){const n=ce(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const l of s.U_)l.H_(i)&&(r=!0);s.K_=i}}r&&qg(n)}function UN(t,e,n){const r=ce(t),i=r.queries.get(e);if(i)for(const o of i.U_)o.onError(n);r.queries.delete(e)}function qg(t){t.z_.forEach(e=>{e.next()})}var Kp,sw;(sw=Kp||(Kp={})).J_="default",sw.Cache="cache";class jN{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Kp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.key=e}}class iT{constructor(e){this.key=e}}class BN{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=me(),this.mutatedKeys=me(),this.Ia=bE(e),this.Ta=new ks(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new ow,i=n?n.Ta:this.Ta;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,y)=>{const w=i.get(p),A=mf(this.query,y)?y:null,x=!!w&&this.mutatedKeys.has(w.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let M=!1;w&&A?w.data.isEqual(A.data)?x!==N&&(r.track({type:3,doc:A}),M=!0):this.Ra(w,A)||(r.track({type:2,doc:A}),M=!0,(u&&this.Ia(A,u)>0||f&&this.Ia(A,f)<0)&&(l=!0)):!w&&A?(r.track({type:0,doc:A}),M=!0):w&&!A&&(r.track({type:1,doc:w}),M=!0,(u||f)&&(l=!0)),M&&(A?(s=s.add(A),o=N?o.add(p):o.delete(p)):(s=s.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const p=this.query.limitType==="F"?s.last():s.first();s=s.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ta:s,Aa:r,Xi:l,mutatedKeys:o}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const s=e.Aa.Q_();s.sort((p,y)=>function(A,x){const N=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return N(A)-N(x)}(p.type,y.type)||this.Ia(p.doc,y.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,f=u!==this.ha;return this.ha=u,s.length!==0||f?{snapshot:new Bs(this.query,e.Ta,o,s,e.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ow,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=me(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new iT(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new rT(r))}),n}pa(e){this.la=e.hs,this.Pa=me();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Bs.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class zN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $N{constructor(e){this.key=e,this.wa=!1}}class HN{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new Js(l=>IE(l),pf),this.Da=new Map,this.Ca=new Set,this.va=new ze(ne.comparator),this.Fa=new Map,this.Ma=new Vg,this.xa={},this.Oa=new Map,this.Na=js.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function WN(t,e,n=!0){const r=cT(t);let i;const o=r.ba.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await oT(r,e,n,!0),i}async function qN(t,e){const n=cT(t);await oT(n,e,!0,!1)}async function oT(t,e,n,r){const i=await dN(t.localStore,Zn(e)),o=i.targetId,s=n?t.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await KN(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&XE(t.remoteStore,i),l}async function KN(t,e,n,r,i){t.Ba=(y,w,A)=>async function(N,M,k,T){let P=M.view.da(k);P.Xi&&(P=await tw(N.localStore,M.query,!1).then(({documents:S})=>M.view.da(S,P)));const F=T&&T.targetChanges.get(M.targetId),z=T&&T.targetMismatches.get(M.targetId)!=null,q=M.view.applyChanges(P,N.isPrimaryClient,F,z);return lw(N,M.targetId,q.fa),q.snapshot}(t,y,w,A);const o=await tw(t.localStore,e,!0),s=new BN(e,o.hs),l=s.da(o.documents),u=tu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),f=s.applyChanges(l,t.isPrimaryClient,u);lw(t,n,f.fa);const p=new zN(e,n,s);return t.ba.set(e,p),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),f.snapshot}async function GN(t,e,n){const r=ce(t),i=r.ba.get(e),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(s=>!pf(s,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await qp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&jg(r.remoteStore,i.targetId),Gp(r,i.targetId)}).catch(Jl)):(Gp(r,i.targetId),await qp(r.localStore,i.targetId,!0))}async function QN(t,e){const n=ce(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),jg(n.remoteStore,r.targetId))}async function YN(t,e,n){const r=r4(t);try{const i=await function(s,l){const u=ce(s),f=lt.now(),p=l.reduce((A,x)=>A.add(x.key),me());let y,w;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let x=xr(),N=me();return u.os.getEntries(A,p).next(M=>{x=M,x.forEach((k,T)=>{T.isValidDocument()||(N=N.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,x)).next(M=>{y=M;const k=[];for(const T of l){const P=gO(T,y.get(T.key).overlayedDocument);P!=null&&k.push(new Po(T.key,P,gE(P.value.mapValue),br.exists(!0)))}return u.mutationQueue.addMutationBatch(A,f,k,l)}).next(M=>{w=M;const k=M.applyToLocalDocumentSet(y,N);return u.documentOverlayCache.saveOverlays(A,M.batchId,k)})}).then(()=>({batchId:w.batchId,changes:kE(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,l,u){let f=s.xa[s.currentUser.toKey()];f||(f=new ze(Ie)),f=f.insert(l,u),s.xa[s.currentUser.toKey()]=f}(r,i.batchId,n),await ru(r,i.changes),await Ef(r.remoteStore)}catch(i){const o=Wg(i,"Failed to persist write");n.reject(o)}}async function sT(t,e){const n=ce(t);try{const r=await lN(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Fa.get(o);s&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.wa=!0:i.modifiedDocuments.size>0?Re(s.wa):i.removedDocuments.size>0&&(Re(s.wa),s.wa=!1))}),await ru(n,r,e)}catch(r){await Jl(r)}}function aw(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((o,s)=>{const l=s.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const u=ce(s);u.onlineState=l;let f=!1;u.queries.forEach((p,y)=>{for(const w of y.U_)w.j_(l)&&(f=!0)}),f&&qg(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XN(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),o=i&&i.key;if(o){let s=new ze(ne.comparator);s=s.insert(o,Dt.newNoDocument(o,ae.min()));const l=me().add(o),u=new yf(ae.min(),new Map,new ze(Ie),s,l);await sT(r,u),r.va=r.va.remove(o),r.Fa.delete(e),Kg(r)}else await qp(r.localStore,e,!1).then(()=>Gp(r,e,n)).catch(Jl)}async function JN(t,e){const n=ce(t),r=e.batch.batchId;try{const i=await aN(n.localStore,e);lT(n,r,null),aT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ru(n,i)}catch(i){await Jl(i)}}async function ZN(t,e,n){const r=ce(t);try{const i=await function(s,l){const u=ce(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return u.mutationQueue.lookupMutationBatch(f,l).next(y=>(Re(y!==null),p=y.keys(),u.mutationQueue.removeMutationBatch(f,y))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>u.localDocuments.getDocuments(f,p))})}(r.localStore,e);lT(r,e,n),aT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ru(r,i)}catch(i){await Jl(i)}}function aT(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function lT(t,e,n){const r=ce(t);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Gp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||uT(t,r)})}function uT(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(jg(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Kg(t))}function lw(t,e,n){for(const r of n)r instanceof rT?(t.Ma.addReference(r.key,e),e4(t,r)):r instanceof iT?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||uT(t,r.key)):se()}function e4(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Kg(t))}function Kg(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ne(qe.fromString(e)),r=t.Na.next();t.Fa.set(r,new $N(n)),t.va=t.va.insert(n,r),XE(t.remoteStore,new di(Zn(Ng(n.path)),r,"TargetPurposeLimboResolution",Ag.oe))}}async function ru(t,e,n){const r=ce(t),i=[],o=[],s=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{s.push(r.Ba(u,e,n).then(f=>{if((f||n)&&r.isPrimaryClient){const p=f&&!f.fromCache;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(f){i.push(f);const p=Ug.Ki(u.targetId,f);o.push(p)}}))}),await Promise.all(s),r.Sa.h_(i),await async function(u,f){const p=ce(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>$.forEach(f,w=>$.forEach(w.qi,A=>p.persistence.referenceDelegate.addReference(y,w.targetId,A)).next(()=>$.forEach(w.Qi,A=>p.persistence.referenceDelegate.removeReference(y,w.targetId,A)))))}catch(y){if(!Zl(y))throw y;ee("LocalStore","Failed to update sequence numbers: "+y)}for(const y of f){const w=y.targetId;if(!y.fromCache){const A=p.ns.get(w),x=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(x);p.ns=p.ns.insert(w,N)}}}(r.localStore,o))}async function t4(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await KE(n.localStore,e);n.currentUser=e,function(o,s){o.Oa.forEach(l=>{l.forEach(u=>{u.reject(new re(H.CANCELLED,s))})}),o.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ru(n,r.us)}}function n4(t,e){const n=ce(t),r=n.Fa.get(e);if(r&&r.wa)return me().add(r.key);{let i=me();const o=n.Da.get(e);if(!o)return i;for(const s of o){const l=n.ba.get(s);i=i.unionWith(l.view.Ea)}return i}}function cT(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=n4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XN.bind(null,e),e.Sa.h_=FN.bind(null,e.eventManager),e.Sa.ka=UN.bind(null,e.eventManager),e}function r4(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZN.bind(null,e),e}class uw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=wf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return sN(this.persistence,new iN,e.initialUser,this.serializer)}createPersistence(e){return new tN(Fg.Hr,this.serializer)}createSharedClientState(e){return new hN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class i4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>aw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=t4.bind(null,this.syncEngine),await NN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LN}()}createDatastore(e){const n=wf(e.databaseInfo.databaseId),r=function(o){return new vN(o)}(e.databaseInfo);return function(o,s,l,u){return new _N(o,s,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,l){return new TN(r,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,n=>aw(this.syncEngine,n,0),function(){return rw.D()?new rw:new pN}())}createSyncEngine(e,n){return function(i,o,s,l,u,f,p){const y=new HN(i,o,s,l,u,f);return p&&(y.La=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ce(r);ee("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await nu(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ot.UNAUTHENTICATED,this.clientId=hE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ii;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kh(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await KE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await l4(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>iw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>iw(e.remoteStore,i)),t._onlineComponents=e}function a4(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function l4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await kh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!a4(n))throw n;Ms("Error using user provided cache. Falling back to memory cache: "+n),await kh(t,new uw)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await kh(t,new uw);return t._offlineComponents}async function dT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await cw(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await cw(t,new i4))),t._onlineComponents}function u4(t){return dT(t).then(e=>e.syncEngine)}async function c4(t){const e=await dT(t),n=e.eventManager;return n.onListen=WN.bind(null,e.syncEngine),n.onUnlisten=GN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QN.bind(null,e.syncEngine),n}function d4(t,e,n={}){const r=new Ii;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,l,u,f){const p=new o4({next:w=>{s.enqueueAndForget(()=>VN(o,y));const A=w.docs.has(l);!A&&w.fromCache?f.reject(new re(H.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&w.fromCache&&u&&u.source==="server"?f.reject(new re(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),y=new jN(Ng(l.path),p,{includeMetadataChanges:!0,ra:!0});return MN(o,y)}(await c4(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f4(t,e,n){if(!n)throw new re(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function h4(t,e,n,r){if(e===!0&&r===!0)throw new re(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fw(t){if(!ne.isDocumentKey(t))throw new re(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function Dl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gg(t);throw new re(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}h4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qg{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sx;switch(r.type){case"firstParty":return new Px(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dw.get(n);r&&(ee("ComponentProvider","Removing Datastore"),dw.delete(n),r.terminate())}(this),Promise.resolve()}}function p4(t,e,n,r={}){var i;const o=(t=Dl(t,Qg))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ot.MOCK_USER;else{l=qk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new re(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ot(f)}t._authCredentials=new kx(new fE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yg(this.firestore,e,this._query)}}class _n{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ll(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _n(this.firestore,e,this._key)}}class Ll extends Yg{constructor(e,n,r){super(e,n,Ng(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _n(this.firestore,null,new ne(e))}withConverter(e){return new Ll(this.firestore,e,this._path)}}function Od(t,e,...n){if(t=sn(t),arguments.length===1&&(e=hE.newId()),f4("doc","path",e),t instanceof Qg){const r=qe.fromString(e,...n);return fw(r),new _n(t,null,new ne(r))}{if(!(t instanceof _n||t instanceof Ll))throw new re(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return fw(r),new _n(t.firestore,t instanceof Ll?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new QE(this,"async_queue_retry"),this.hu=()=>{const n=Sh();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Sh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Sh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Ii;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Zl(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(r);throw Rr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Hg.createAndSchedule(this,e,n,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&se()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Xg extends Qg{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new m4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pT(this),this._firestoreClient.terminate()}}function Jg(t,e){const n=typeof t=="object"?t:h2(),r=typeof t=="string"?t:"(default)",i=cg(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Hk("firestore");o&&p4(i,...o)}return i}function hT(t){return t._firestoreClient||pT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pT(t){var e,n,r;const i=t._freezeSettings(),o=function(l,u,f,p){return new zx(l,u,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,fT(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new s4(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zs(Mt.fromBase64String(e))}catch(n){throw new re(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zs(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4=/^__.*__$/;class v4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Po(e,this.data,this.fieldMask,n,this.fieldTransforms):new eu(e,this.data,n,this.fieldTransforms)}}function gT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class tv{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new tv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Nd(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(gT(this.fu)&&g4.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class y4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wf(e)}Fu(e,n,r,i=!1){return new tv({fu:e,methodName:n,vu:r,path:Et.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function w4(t){const e=t._freezeSettings(),n=wf(t._databaseId);return new y4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _4(t,e,n,r,i,o={}){const s=t.Fu(o.merge||o.mergeFields?2:0,e,n,i);_T("Data must be an object, but it was:",s,r);const l=yT(r,s);let u,f;if(o.merge)u=new Nn(s.fieldMask),f=s.fieldTransforms;else if(o.mergeFields){const p=[];for(const y of o.mergeFields){const w=E4(e,y,n);if(!s.contains(w))throw new re(H.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);I4(p,w)||p.push(w)}u=new Nn(p),f=s.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,f=s.fieldTransforms;return new v4(new vn(l),u,f)}function vT(t,e){if(wT(t=sn(t)))return _T("Unsupported field value:",e,t),yT(t,e);if(t instanceof mT)return function(r,i){if(!gT(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const l of r){let u=vT(l,i.bu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=sn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=lt.fromDate(r);return{timestampValue:Rd(i.serializer,o)}}if(r instanceof lt){const o=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rd(i.serializer,o)}}if(r instanceof ev)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zs)return{bytesValue:jE(i.serializer,r._byteString)};if(r instanceof _n){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Du(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Mg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Gg(r)}`)}(t,e)}function yT(t,e){const n={};return pE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(t,(r,i)=>{const o=vT(i,e.pu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function wT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof ev||t instanceof zs||t instanceof _n||t instanceof mT)}function _T(t,e,n){if(!wT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Gg(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function E4(t,e,n){if((e=sn(e))instanceof Zg)return e._internalPath;if(typeof e=="string")return ET(t,e);throw Nd("Field path arguments must be of type string or ",t,!1,void 0,n)}const T4=new RegExp("[~\\*/\\[\\]]");function ET(t,e,n){if(e.search(T4)>=0)throw Nd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zg(...e.split("."))._internalPath}catch{throw Nd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nd(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new re(H.INVALID_ARGUMENT,l+t+u)}function I4(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new b4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(IT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class b4 extends TT{data(){return super.data()}}function IT(t,e){return typeof e=="string"?ET(t,e):e instanceof Zg?e._internalPath:e._delegate._internalPath}class S4{convertValue(e,n="none"){switch(Io(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(To(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xs(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new ev(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Pl(e));default:return null}}convertTimestamp(e){const n=Ai(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Re(qE(r));const i=new Rl(r.get(1),r.get(3)),o=new ne(r.popFirst(5));return i.isEqual(n)||Rr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k4(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bT extends TT{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new C4(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(IT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class C4 extends bT{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P4(t){t=Dl(t,_n);const e=Dl(t.firestore,Xg);return d4(hT(e),t._key).then(n=>O4(e,t,n))}class R4 extends S4{constructor(e){super(),this.firestore=e}convertBytes(e){return new zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _n(this.firestore,null,n)}}function Qp(t,e,n){t=Dl(t,_n);const r=Dl(t.firestore,Xg),i=k4(t.converter,e,n);return x4(r,[_4(w4(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,br.none())])}function x4(t,e){return function(r,i){const o=new Ii;return r.asyncQueue.enqueueAndForget(async()=>YN(await u4(r),i,o)),o.promise}(hT(t),e)}function O4(t,e,n){const r=n.docs.get(e._key),i=new R4(t);return new bT(t,i,e._key,r,new A4(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ys=i})(Ks),Ls(new vo("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),l=new Xg(new Ax(r.getProvider("auth-internal")),new xx(r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new re(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rl(f.options.projectId,p)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Ti(L0,"4.6.3",e),Ti(L0,"4.6.3","esm2017")})();const pw="data:image/svg+xml,%3csvg%20width='10'%20height='6'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20stroke='%23686868'%20stroke-width='1.5'%20fill='none'%20d='m1%201%204%204%204-4'/%3e%3c/svg%3e",ST="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024.00%2024.00'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='%23000000'%20stroke='%23000000'%20stroke-width='0.00024000000000000003'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.672'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cdefs%3e%3cpath%20id='download-a'%20d='M4.29289322,1.70710678%20C3.90236893,1.31658249%203.90236893,0.683417511%204.29289322,0.292893219%20C4.68341751,-0.0976310729%205.31658249,-0.0976310729%205.70710678,0.292893219%20L7.70710678,2.29289322%20C8.09763107,2.68341751%208.09763107,3.31658249%207.70710678,3.70710678%20C7.31658249,4.09763107%206.68341751,4.09763107%206.29289322,3.70710678%20L4.29289322,1.70710678%20Z%20M0,8%20L16,8%20L16,10%20L0,10%20L0,8%20Z'/%3e%3cpath%20id='download-c'%20d='M11,9.58578644%20L13.2928932,7.29289322%20C13.6834175,6.90236893%2014.3165825,6.90236893%2014.7071068,7.29289322%20C15.0976311,7.68341751%2015.0976311,8.31658249%2014.7071068,8.70710678%20L10.7071068,12.7071068%20C10.3165825,13.0976311%209.68341751,13.0976311%209.29289322,12.7071068%20L5.29289322,8.70710678%20C4.90236893,8.31658249%204.90236893,7.68341751%205.29289322,7.29289322%20C5.68341751,6.90236893%206.31658249,6.90236893%206.70710678,7.29289322%20L9,9.58578644%20L9,0.998529185%20C9,0.447056744%209.44771525,-7.95978809e-15%2010,-7.99360578e-15%20C10.5522847,-8.02742346e-15%2011,0.447056744%2011,0.998529185%20L11,9.58578644%20Z%20M18,16%20L18,10%20C18,9.44771525%2018.4477153,9%2019,9%20C19.5522847,9%2020,9.44771525%2020,10%20L20,17%20C20,17.5522847%2019.5522847,18%2019,18%20L1,18%20C0.44771525,18%200,17.5522847%200,17%20L0,10%20C0,9.44771525%200.44771525,9%201,9%20C1.55228475,9%202,9.44771525%202,10%20L2,16%20L18,16%20Z'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%20transform='translate(2%203)'%3e%3cg%20transform='translate(2%206)'%3e%3cmask%20id='download-b'%20fill='%23007bff'%3e%3cuse%20xlink:href='%23download-a'/%3e%3c/mask%3e%3cuse%20fill='%23ffffff'%20fill-rule='nonzero'%20xlink:href='%23download-a'/%3e%3cg%20fill='%23007bff'%20mask='url(%23download-b)'%3e%3crect%20width='24'%20height='24'%20transform='translate(-4%20-9)'/%3e%3c/g%3e%3c/g%3e%3cmask%20id='download-d'%20fill='%23007bff'%3e%3cuse%20xlink:href='%23download-c'/%3e%3c/mask%3e%3cuse%20fill='%23007bff'%20fill-rule='nonzero'%20xlink:href='%23download-c'/%3e%3cg%20fill='%23007bff'%20mask='url(%23download-d)'%3e%3crect%20width='24'%20height='24'%20transform='translate(-2%20-3)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",N4="data:image/svg+xml,%3csvg%20width='14'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%203v12a1%201%200%200%201-1%201H1a1%201%200%200%201-1-1V3a1%201%200%200%201%201-1h1V1a1%201%200%201%201%202%200v1h2V1a1%201%200%201%201%202%200v1h2V1a1%201%200%200%201%202%200v1h1a1%201%200%200%201%201%201Zm-2%203H2v1h10V6Zm0%203H2v1h10V9Zm0%203H2v1h10v-1Z'%20fill='%23726CEE'/%3e%3c/svg%3e",D4="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.667%208.667h-4v4h4v-4ZM11.334%200v1.333H4.667V0h-2v1.333h-1C.75%201.333%200%202.083%200%203v11.333C0%2015.25.75%2016%201.667%2016h12.667C15.25%2016%2016%2015.25%2016%2014.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3%2014.333H1.667V5.5h12.667v8.833Z'%20fill='%234BB1DA'/%3e%3c/svg%3e",L4="data:image/svg+xml,%3csvg%20width='13'%20height='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.408%2013.916c-3.313%200-6-1.343-6-3%200-.612.371-1.18%201-1.654V7.916a5%205%200%200%201%203.041-4.6%202%202%200%200%201%203.507-1.664%202%202%200%200%201%20.411%201.664%205.002%205.002%200%200%201%203.041%204.6v1.346c.629.474%201%201.042%201%201.654%200%201.657-2.687%203-6%203Zm0%201c.694%200%201.352-.066%201.984-.16.004.054.016.105.016.16a2%202%200%200%201-4%200c0-.055.012-.106.016-.16.633.094%201.29.16%201.984.16Z'%20fill='%23EDD556'/%3e%3c/svg%3e",M4="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%200a8%208%200%201%201%200%2016A8%208%200%200%201%208%200Zm0%202.133a5.867%205.867%200%201%200%200%2011.734A5.867%205.867%200%200%200%208%202.133ZM8%203.2a4.8%204.8%200%201%201%200%209.6%204.8%204.8%200%200%201%200-9.6Zm-.533%202.667a.533.533%200%200%200-.534.533v2.133c0%20.295.24.534.534.534h3.2a.533.533%200%200%200%200-1.067H8V6.4a.533.533%200%200%200-.533-.533Z'%20fill='%238E4CB6'/%3e%3c/svg%3e",V4=lf();Jg(nf);const kT=()=>{X.useState(null);const t=Sg(),e=async()=>{try{await V2(V4),t("/login")}catch(i){console.error("Error al cerrar sesión:",i)}};X.useEffect(()=>{const i=document.querySelector(".nav__hamburguer"),o=document.querySelector(".nav__overlay");let s=o;const l=()=>{i.classList.toggle("nav__hamburguer--open"),o.classList.toggle("nav__overlay--show")},u=w=>{w.preventDefault();const A=w.target;if(f(A,"nav__parent")){const x=A.parentElement.children[1];if(window.innerWidth<768){let N=x.clientHeight===0?x.scrollHeight:0;x.style.height=`${N}px`}else f(x,"nav__inner--show")||p(s),x.classList.toggle("nav__inner--show"),s=x}},f=(w,A)=>w.classList.value.includes(A),p=w=>{f(w,"nav__inner--show")&&w.classList.remove("nav__inner--show")},y=()=>{p(s),window.innerWidth>768&&document.querySelectorAll(".nav__inner").forEach(A=>{A.style.height=""})};return i.addEventListener("click",l),o.addEventListener("click",u),window.addEventListener("resize",y),()=>{i.removeEventListener("click",l),o.removeEventListener("click",u),window.removeEventListener("resize",y)}},[]);const n=i=>{i.preventDefault(),t("/profile")},r=i=>{i.preventDefault(),t("/")};return j.jsxs("nav",{className:"nav container",children:[j.jsxs("div",{className:"nav__logo",children:[j.jsx("img",{src:ST,className:"nav__img",alt:"logo"}),j.jsx("span",{children:"Drawy"})]}),j.jsx("div",{className:"nav__hamburguer"}),j.jsx("div",{className:"nav__overlay",children:j.jsxs("ul",{className:"nav__menu",children:[j.jsx("li",{className:"nav__item",children:j.jsx("a",{href:"#",onClick:r,className:"nav__link",children:"Home"})}),j.jsx("li",{className:"nav__item",children:j.jsx("a",{href:"#",className:"nav__link",children:"Blog"})}),j.jsxs("li",{className:"nav__item",children:[j.jsxs("span",{className:"nav__parent",children:["Services",j.jsx("img",{src:pw,className:"nav__arrow",alt:"arrow"})]}),j.jsxs("ul",{className:"nav__inner",children:[j.jsx("li",{className:"nav__dropdown",children:j.jsxs("a",{href:"#",className:"nav__link",children:[j.jsx("img",{src:N4,className:"nav__illustration",alt:"todo"}),"Todo List"]})}),j.jsx("li",{className:"nav__dropdown",children:j.jsxs("a",{href:"#",className:"nav__link",children:[j.jsx("img",{src:D4,className:"nav__illustration",alt:"calendar"}),"Calendar"]})}),j.jsx("li",{className:"nav__dropdown",children:j.jsxs("a",{href:"#",className:"nav__link",children:[j.jsx("img",{src:L4,className:"nav__illustration",alt:"reminders"}),"Reminder"]})}),j.jsx("li",{className:"nav__dropdown",children:j.jsxs("a",{href:"#",className:"nav__link",children:[j.jsx("img",{src:M4,className:"nav__illustration",alt:"planning"}),"Planning"]})})]})]}),j.jsxs("li",{className:"nav__item",children:[j.jsxs("span",{className:"nav__parent",children:["Company",j.jsx("img",{src:pw,className:"nav__arrow",alt:"arrow"})]}),j.jsxs("ul",{className:"nav__inner",children:[j.jsx("li",{className:"nav__dropdown",children:j.jsx("a",{href:"#",className:"nav__link",children:"History"})}),j.jsx("li",{className:"nav__dropdown",children:j.jsx("a",{href:"#",className:"nav__link",children:"Our Team"})}),j.jsx("li",{className:"nav__dropdown",children:j.jsx("a",{href:"#",className:"nav__link",children:"Blog"})})]})]}),j.jsx("li",{className:"nav__item",children:j.jsx("a",{href:"#",className:"nav__link",children:"Careers"})}),j.jsx("li",{className:"nav__item",children:j.jsx("a",{href:"#",className:"nav__link",children:"About"})}),j.jsx("li",{className:"nav__login",children:j.jsx("a",{href:"#",className:"nav__sign",onClick:n,children:"Profile"})}),j.jsx("li",{className:"nav__login nav__login--border",children:j.jsx("button",{onClick:e,children:"Sign Off"})})]})})]})},F4=()=>j.jsx(j.Fragment,{children:j.jsx(kT,{})}),U4=()=>j.jsx(j.Fragment,{children:j.jsx("h1",{children:"ERROR 404"})}),j4="/drawy-app/assets/Dowload-Bm10PxR3.svg";var AT={exports:{}};/*!
* sweetalert2 v11.12.0
* Released under the MIT License.
*/(function(t,e){(function(n,r){t.exports=r()})(Xr,function(){function n(v,c){(c==null||c>v.length)&&(c=v.length);for(var d=0,m=Array(c);d<c;d++)m[d]=v[d];return m}function r(v){if(Array.isArray(v))return v}function i(v){if(Array.isArray(v))return n(v)}function o(v,c,d){if(typeof v=="function"?v===c:v.has(c))return arguments.length<3?c:d;throw new TypeError("Private element is not present on this object")}function s(v){if(v===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v}function l(v,c,d){return c=T(c),I(v,F()?Reflect.construct(c,d||[],T(v).constructor):c.apply(v,d))}function u(v,c){if(c.has(v))throw new TypeError("Cannot initialize the same private elements twice on an object")}function f(v,c){if(!(v instanceof c))throw new TypeError("Cannot call a class as a function")}function p(v,c){return v.get(o(v,c))}function y(v,c,d){u(v,c),c.set(v,d)}function w(v,c,d){return v.set(o(v,c),d),d}function A(v,c,d){if(F())return Reflect.construct.apply(null,arguments);var m=[null];m.push.apply(m,c);var b=new(v.bind.apply(v,m));return b}function x(v,c){for(var d=0;d<c.length;d++){var m=c[d];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(v,rr(m.key),m)}}function N(v,c,d){return c&&x(v.prototype,c),Object.defineProperty(v,"prototype",{writable:!1}),v}function M(v,c){var d=typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"];if(!d){if(Array.isArray(v)||(d=Xt(v))||c){d&&(v=d);var m=0,b=function(){};return{s:b,n:function(){return m>=v.length?{done:!0}:{done:!1,value:v[m++]}},e:function(ue){throw ue},f:b}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var B,Q=!0,de=!1;return{s:function(){d=d.call(v)},n:function(){var ue=d.next();return Q=ue.done,ue},e:function(ue){de=!0,B=ue},f:function(){try{Q||d.return==null||d.return()}finally{if(de)throw B}}}}function k(){return k=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(v,c,d){var m=L(v,c);if(m){var b=Object.getOwnPropertyDescriptor(m,c);return b.get?b.get.call(arguments.length<3?v:d):b.value}},k.apply(null,arguments)}function T(v){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},T(v)}function P(v,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");v.prototype=Object.create(c&&c.prototype,{constructor:{value:v,writable:!0,configurable:!0}}),Object.defineProperty(v,"prototype",{writable:!1}),c&&C(v,c)}function F(){try{var v=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(F=function(){return!!v})()}function z(v){if(typeof Symbol<"u"&&v[Symbol.iterator]!=null||v["@@iterator"]!=null)return Array.from(v)}function q(v,c){var d=v==null?null:typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"];if(d!=null){var m,b,B,Q,de=[],ue=!0,$e=!1;try{if(B=(d=d.call(v)).next,c!==0)for(;!(ue=(m=B.call(d)).done)&&(de.push(m.value),de.length!==c);ue=!0);}catch(Ta){$e=!0,b=Ta}finally{try{if(!ue&&d.return!=null&&(Q=d.return(),Object(Q)!==Q))return}finally{if($e)throw b}}return de}}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(v,c){if(c&&(typeof c=="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return s(v)}function C(v,c){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,m){return d.__proto__=m,d},C(v,c)}function O(v,c){return r(v)||q(v,c)||Xt(v,c)||S()}function L(v,c){for(;!{}.hasOwnProperty.call(v,c)&&(v=T(v))!==null;);return v}function R(v){return i(v)||z(v)||Xt(v)||E()}function $t(v,c){if(typeof v!="object"||!v)return v;var d=v[Symbol.toPrimitive];if(d!==void 0){var m=d.call(v,c);if(typeof m!="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}function rr(v){var c=$t(v,"string");return typeof c=="symbol"?c:c+""}function Ve(v){"@babel/helpers - typeof";return Ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},Ve(v)}function Xt(v,c){if(v){if(typeof v=="string")return n(v,c);var d={}.toString.call(v).slice(8,-1);return d==="Object"&&v.constructor&&(d=v.constructor.name),d==="Map"||d==="Set"?Array.from(v):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?n(v,c):void 0}}var Y=100,K={},le=function(){K.previousActiveElement instanceof HTMLElement?(K.previousActiveElement.focus(),K.previousActiveElement=null):document.body&&document.body.focus()},xe=function(c){return new Promise(function(d){if(!c)return d();var m=window.scrollX,b=window.scrollY;K.restoreFocusTimeout=setTimeout(function(){le(),d()},Y),window.scrollTo(m,b)})},be="swal2-",Fe=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],V=Fe.reduce(function(v,c){return v[c]=be+c,v},{}),bn=["success","warning","info","question","error"],Ht=bn.reduce(function(v,c){return v[c]=be+c,v},{}),cn="SweetAlert2:",ta=function(c){return c.charAt(0).toUpperCase()+c.slice(1)},kt=function(c){console.warn("".concat(cn," ").concat(Ve(c)==="object"?c.join(" "):c))},dn=function(c){console.error("".concat(cn," ").concat(c))},Li=[],na=function(c){Li.includes(c)||(Li.push(c),kt(c))},xo=function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;na('"'.concat(c,'" is deprecated and will be removed in the next major release.').concat(d?' Use "'.concat(d,'" instead.'):""))},Br=function(c){return typeof c=="function"?c():c},Mi=function(c){return c&&typeof c.toPromise=="function"},zr=function(c){return Mi(c)?c.toPromise():Promise.resolve(c)},ra=function(c){return c&&Promise.resolve(c)===c},At=function(){return document.body.querySelector(".".concat(V.container))},$r=function(c){var d=At();return d?d.querySelector(c):null},mt=function(c){return $r(".".concat(c))},_e=function(){return mt(V.popup)},Vi=function(){return mt(V.icon)},ia=function(){return mt(V["icon-content"])},Oo=function(){return mt(V.title)},No=function(){return mt(V["html-container"])},Ze=function(){return mt(V.image)},et=function(){return mt(V["progress-steps"])},ir=function(){return mt(V["validation-message"])},Jt=function(){return $r(".".concat(V.actions," .").concat(V.confirm))},or=function(){return $r(".".concat(V.actions," .").concat(V.cancel))},sr=function(){return $r(".".concat(V.actions," .").concat(V.deny))},Fi=function(){return mt(V["input-label"])},ar=function(){return $r(".".concat(V.loader))},Hr=function(){return mt(V.actions)},Do=function(){return mt(V.footer)},Lo=function(){return mt(V["timer-progress-bar"])},oa=function(){return mt(V.close)},sa=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Mo=function(){var c=_e();if(!c)return[];var d=c.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),m=Array.from(d).sort(function(Q,de){var ue=parseInt(Q.getAttribute("tabindex")||"0"),$e=parseInt(de.getAttribute("tabindex")||"0");return ue>$e?1:ue<$e?-1:0}),b=c.querySelectorAll(sa),B=Array.from(b).filter(function(Q){return Q.getAttribute("tabindex")!=="-1"});return R(new Set(m.concat(B))).filter(function(Q){return tt(Q)})},Vo=function(){return vt(document.body,V.shown)&&!vt(document.body,V["toast-shown"])&&!vt(document.body,V["no-backdrop"])},Un=function(){var c=_e();return c?vt(c,V.toast):!1},aa=function(){var c=_e();return c?c.hasAttribute("data-loading"):!1},gt=function(c,d){if(c.textContent="",d){var m=new DOMParser,b=m.parseFromString(d,"text/html"),B=b.querySelector("head");B&&Array.from(B.childNodes).forEach(function(de){c.appendChild(de)});var Q=b.querySelector("body");Q&&Array.from(Q.childNodes).forEach(function(de){de instanceof HTMLVideoElement||de instanceof HTMLAudioElement?c.appendChild(de.cloneNode(!0)):c.appendChild(de)})}},vt=function(c,d){if(!d)return!1;for(var m=d.split(/\s+/),b=0;b<m.length;b++)if(!c.classList.contains(m[b]))return!1;return!0},au=function(c,d){Array.from(c.classList).forEach(function(m){!Object.values(V).includes(m)&&!Object.values(Ht).includes(m)&&!Object.values(d.showClass||{}).includes(m)&&c.classList.remove(m)})},yt=function(c,d,m){if(au(c,d),d.customClass&&d.customClass[m]){if(typeof d.customClass[m]!="string"&&!d.customClass[m].forEach){kt("Invalid type of customClass.".concat(m,'! Expected string or iterable object, got "').concat(Ve(d.customClass[m]),'"'));return}ie(c,d.customClass[m])}},Ui=function(c,d){if(!d)return null;switch(d){case"select":case"textarea":case"file":return c.querySelector(".".concat(V.popup," > .").concat(V[d]));case"checkbox":return c.querySelector(".".concat(V.popup," > .").concat(V.checkbox," input"));case"radio":return c.querySelector(".".concat(V.popup," > .").concat(V.radio," input:checked"))||c.querySelector(".".concat(V.popup," > .").concat(V.radio," input:first-child"));case"range":return c.querySelector(".".concat(V.popup," > .").concat(V.range," input"));default:return c.querySelector(".".concat(V.popup," > .").concat(V.input))}},Wr=function(c){if(c.focus(),c.type!=="file"){var d=c.value;c.value="",c.value=d}},la=function(c,d,m){!c||!d||(typeof d=="string"&&(d=d.split(/\s+/).filter(Boolean)),d.forEach(function(b){Array.isArray(c)?c.forEach(function(B){m?B.classList.add(b):B.classList.remove(b)}):m?c.classList.add(b):c.classList.remove(b)}))},ie=function(c,d){la(c,d,!0)},Zt=function(c,d){la(c,d,!1)},Wt=function(c,d){for(var m=Array.from(c.children),b=0;b<m.length;b++){var B=m[b];if(B instanceof HTMLElement&&vt(B,d))return B}},en=function(c,d,m){m==="".concat(parseInt(m))&&(m=parseInt(m)),m||parseInt(m)===0?c.style.setProperty(d,typeof m=="number"?"".concat(m,"px"):m):c.style.removeProperty(d)},Qe=function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";c&&(c.style.display=d)},ct=function(c){c&&(c.style.display="none")},jn=function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";c&&new MutationObserver(function(){ji(c,c.innerHTML,d)}).observe(c,{childList:!0,subtree:!0})},lu=function(c,d,m,b){var B=c.querySelector(d);B&&B.style.setProperty(m,b)},ji=function(c,d){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";d?Qe(c,m):ct(c)},tt=function(c){return!!(c&&(c.offsetWidth||c.offsetHeight||c.getClientRects().length))},uu=function(){return!tt(Jt())&&!tt(sr())&&!tt(or())},Fo=function(c){return c.scrollHeight>c.clientHeight},Bi=function(c){var d=window.getComputedStyle(c),m=parseFloat(d.getPropertyValue("animation-duration")||"0"),b=parseFloat(d.getPropertyValue("transition-duration")||"0");return m>0||b>0},fn=function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=Lo();m&&tt(m)&&(d&&(m.style.transition="none",m.style.width="100%"),setTimeout(function(){m.style.transition="width ".concat(c/1e3,"s linear"),m.style.width="0%"},10))},cu=function(){var c=Lo();if(c){var d=parseInt(window.getComputedStyle(c).width);c.style.removeProperty("transition"),c.style.width="100%";var m=parseInt(window.getComputedStyle(c).width),b=d/m*100;c.style.width="".concat(b,"%")}},ua=function(){return typeof window>"u"||typeof document>"u"},ca=`
 <div aria-labelledby="`.concat(V.title,'" aria-describedby="').concat(V["html-container"],'" class="').concat(V.popup,`" tabindex="-1">
   <button type="button" class="`).concat(V.close,`"></button>
   <ul class="`).concat(V["progress-steps"],`"></ul>
   <div class="`).concat(V.icon,`"></div>
   <img class="`).concat(V.image,`" />
   <h2 class="`).concat(V.title,'" id="').concat(V.title,`"></h2>
   <div class="`).concat(V["html-container"],'" id="').concat(V["html-container"],`"></div>
   <input class="`).concat(V.input,'" id="').concat(V.input,`" />
   <input type="file" class="`).concat(V.file,`" />
   <div class="`).concat(V.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(V.select,'" id="').concat(V.select,`"></select>
   <div class="`).concat(V.radio,`"></div>
   <label class="`).concat(V.checkbox,`">
     <input type="checkbox" id="`).concat(V.checkbox,`" />
     <span class="`).concat(V.label,`"></span>
   </label>
   <textarea class="`).concat(V.textarea,'" id="').concat(V.textarea,`"></textarea>
   <div class="`).concat(V["validation-message"],'" id="').concat(V["validation-message"],`"></div>
   <div class="`).concat(V.actions,`">
     <div class="`).concat(V.loader,`"></div>
     <button type="button" class="`).concat(V.confirm,`"></button>
     <button type="button" class="`).concat(V.deny,`"></button>
     <button type="button" class="`).concat(V.cancel,`"></button>
   </div>
   <div class="`).concat(V.footer,`"></div>
   <div class="`).concat(V["timer-progress-bar-container"],`">
     <div class="`).concat(V["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),da=function(){var c=At();return c?(c.remove(),Zt([document.documentElement,document.body],[V["no-backdrop"],V["toast-shown"],V["has-column"]]),!0):!1},Bn=function(){K.currentInstance.resetValidationMessage()},du=function(){var c=_e(),d=Wt(c,V.input),m=Wt(c,V.file),b=c.querySelector(".".concat(V.range," input")),B=c.querySelector(".".concat(V.range," output")),Q=Wt(c,V.select),de=c.querySelector(".".concat(V.checkbox," input")),ue=Wt(c,V.textarea);d.oninput=Bn,m.onchange=Bn,Q.onchange=Bn,de.onchange=Bn,ue.oninput=Bn,b.oninput=function(){Bn(),B.value=b.value},b.onchange=function(){Bn(),B.value=b.value}},kf=function(c){return typeof c=="string"?document.querySelector(c):c},Uo=function(c){var d=_e();d.setAttribute("role",c.toast?"alert":"dialog"),d.setAttribute("aria-live",c.toast?"polite":"assertive"),c.toast||d.setAttribute("aria-modal","true")},fu=function(c){window.getComputedStyle(c).direction==="rtl"&&ie(At(),V.rtl)},fa=function(c){var d=da();if(ua()){dn("SweetAlert2 requires document to initialize");return}var m=document.createElement("div");m.className=V.container,d&&ie(m,V["no-transition"]),gt(m,ca);var b=kf(c.target);b.appendChild(m),Uo(c),fu(b),du()},lr=function(c,d){c instanceof HTMLElement?d.appendChild(c):Ve(c)==="object"?ur(c,d):c&&gt(d,c)},ur=function(c,d){c.jquery?ha(d,c):gt(d,c.toString())},ha=function(c,d){if(c.textContent="",0 in d)for(var m=0;m in d;m++)c.appendChild(d[m].cloneNode(!0));else c.appendChild(d.cloneNode(!0))},cr=function(){if(ua())return!1;var v=document.createElement("div");return typeof v.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof v.style.animation<"u"?"animationend":!1}(),hu=function(c,d){var m=Hr(),b=ar();!m||!b||(!d.showConfirmButton&&!d.showDenyButton&&!d.showCancelButton?ct(m):Qe(m),yt(m,d,"actions"),pu(m,b,d),gt(b,d.loaderHtml||""),yt(b,d,"loader"))};function pu(v,c,d){var m=Jt(),b=sr(),B=or();!m||!b||!B||(zi(m,"confirm",d),zi(b,"deny",d),zi(B,"cancel",d),mu(m,b,B,d),d.reverseButtons&&(d.toast?(v.insertBefore(B,m),v.insertBefore(b,m)):(v.insertBefore(B,c),v.insertBefore(b,c),v.insertBefore(m,c))))}function mu(v,c,d,m){if(!m.buttonsStyling){Zt([v,c,d],V.styled);return}ie([v,c,d],V.styled),m.confirmButtonColor&&(v.style.backgroundColor=m.confirmButtonColor,ie(v,V["default-outline"])),m.denyButtonColor&&(c.style.backgroundColor=m.denyButtonColor,ie(c,V["default-outline"])),m.cancelButtonColor&&(d.style.backgroundColor=m.cancelButtonColor,ie(d,V["default-outline"]))}function zi(v,c,d){var m=ta(c);ji(v,d["show".concat(m,"Button")],"inline-block"),gt(v,d["".concat(c,"ButtonText")]||""),v.setAttribute("aria-label",d["".concat(c,"ButtonAriaLabel")]||""),v.className=V[c],yt(v,d,"".concat(c,"Button"))}var pa=function(c,d){var m=oa();m&&(gt(m,d.closeButtonHtml||""),yt(m,d,"closeButton"),ji(m,d.showCloseButton),m.setAttribute("aria-label",d.closeButtonAriaLabel||""))},gu=function(c,d){var m=At();m&&(vu(m,d.backdrop),Af(m,d.position),Cf(m,d.grow),yt(m,d,"container"))};function vu(v,c){typeof c=="string"?v.style.background=c:c||ie([document.documentElement,document.body],V["no-backdrop"])}function Af(v,c){c&&(c in V?ie(v,V[c]):(kt('The "position" parameter is not valid, defaulting to "center"'),ie(v,V.center)))}function Cf(v,c){c&&ie(v,V["grow-".concat(c)])}var Se={innerParams:new WeakMap,domCache:new WeakMap},yu=["input","file","range","select","radio","checkbox","textarea"],Pf=function(c,d){var m=_e();if(m){var b=Se.innerParams.get(c),B=!b||d.input!==b.input;yu.forEach(function(Q){var de=Wt(m,V[Q]);de&&(jo(Q,d.inputAttributes),de.className=V[Q],B&&ct(de))}),d.input&&(B&&dr(d),Bo(d))}},dr=function(c){if(c.input){if(!Ae[c.input]){dn("Unexpected type of input! Expected ".concat(Object.keys(Ae).join(" | "),', got "').concat(c.input,'"'));return}var d=$i(c.input),m=Ae[c.input](d,c);Qe(d),c.inputAutoFocus&&setTimeout(function(){Wr(m)})}},Sn=function(c){for(var d=0;d<c.attributes.length;d++){var m=c.attributes[d].name;["id","type","value","style"].includes(m)||c.removeAttribute(m)}},jo=function(c,d){var m=Ui(_e(),c);if(m){Sn(m);for(var b in d)m.setAttribute(b,d[b])}},Bo=function(c){var d=$i(c.input);Ve(c.customClass)==="object"&&ie(d,c.customClass.input)},zo=function(c,d){(!c.placeholder||d.inputPlaceholder)&&(c.placeholder=d.inputPlaceholder)},Te=function(c,d,m){if(m.inputLabel){var b=document.createElement("label"),B=V["input-label"];b.setAttribute("for",c.id),b.className=B,Ve(m.customClass)==="object"&&ie(b,m.customClass.inputLabel),b.innerText=m.inputLabel,d.insertAdjacentElement("beforebegin",b)}},$i=function(c){return Wt(_e(),V[c]||V.input)},zn=function(c,d){["string","number"].includes(Ve(d))?c.value="".concat(d):ra(d)||kt('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(Ve(d),'"'))},Ae={};Ae.text=Ae.email=Ae.password=Ae.number=Ae.tel=Ae.url=Ae.search=Ae.date=Ae["datetime-local"]=Ae.time=Ae.week=Ae.month=function(v,c){return zn(v,c.inputValue),Te(v,v,c),zo(v,c),v.type=c.input,v},Ae.file=function(v,c){return Te(v,v,c),zo(v,c),v},Ae.range=function(v,c){var d=v.querySelector("input"),m=v.querySelector("output");return zn(d,c.inputValue),d.type=c.input,zn(m,c.inputValue),Te(d,v,c),v},Ae.select=function(v,c){if(v.textContent="",c.inputPlaceholder){var d=document.createElement("option");gt(d,c.inputPlaceholder),d.value="",d.disabled=!0,d.selected=!0,v.appendChild(d)}return Te(v,v,c),v},Ae.radio=function(v){return v.textContent="",v},Ae.checkbox=function(v,c){var d=Ui(_e(),"checkbox");d.value="1",d.checked=!!c.inputValue;var m=v.querySelector("span");return gt(m,c.inputPlaceholder),d},Ae.textarea=function(v,c){zn(v,c.inputValue),zo(v,c),Te(v,v,c);var d=function(b){return parseInt(window.getComputedStyle(b).marginLeft)+parseInt(window.getComputedStyle(b).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var m=parseInt(window.getComputedStyle(_e()).width),b=function(){if(document.body.contains(v)){var Q=v.offsetWidth+d(v);Q>m?_e().style.width="".concat(Q,"px"):en(_e(),"width",c.width)}};new MutationObserver(b).observe(v,{attributes:!0,attributeFilter:["style"]})}}),v};var Rf=function(c,d){var m=No();m&&(jn(m),yt(m,d,"htmlContainer"),d.html?(lr(d.html,m),Qe(m,"block")):d.text?(m.textContent=d.text,Qe(m,"block")):ct(m),Pf(c,d))},wu=function(c,d){var m=Do();m&&(jn(m),ji(m,d.footer,"block"),d.footer&&lr(d.footer,m),yt(m,d,"footer"))},xf=function(c,d){var m=Se.innerParams.get(c),b=Vi();if(b){if(m&&d.icon===m.icon){kn(b,d),_u(b,d);return}if(!d.icon&&!d.iconHtml){ct(b);return}if(d.icon&&Object.keys(Ht).indexOf(d.icon)===-1){dn('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(d.icon,'"')),ct(b);return}Qe(b),kn(b,d),_u(b,d),ie(b,d.showClass&&d.showClass.icon)}},_u=function(c,d){for(var m=0,b=Object.entries(Ht);m<b.length;m++){var B=O(b[m],2),Q=B[0],de=B[1];d.icon!==Q&&Zt(c,de)}ie(c,d.icon&&Ht[d.icon]),Eu(c,d),Of(),yt(c,d,"icon")},Of=function(){var c=_e();if(c)for(var d=window.getComputedStyle(c).getPropertyValue("background-color"),m=c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),b=0;b<m.length;b++)m[b].style.backgroundColor=d},Nf=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Hi=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,kn=function(c,d){if(!(!d.icon&&!d.iconHtml)){var m=c.innerHTML,b="";if(d.iconHtml)b=ma(d.iconHtml);else if(d.icon==="success")b=Nf,m=m.replace(/ style=".*?"/g,"");else if(d.icon==="error")b=Hi;else if(d.icon){var B={question:"?",warning:"!",info:"i"};b=ma(B[d.icon])}m.trim()!==b.trim()&&gt(c,b)}},Eu=function(c,d){if(d.iconColor){c.style.color=d.iconColor,c.style.borderColor=d.iconColor;for(var m=0,b=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];m<b.length;m++){var B=b[m];lu(c,B,"background-color",d.iconColor)}lu(c,".swal2-success-ring","border-color",d.iconColor)}},ma=function(c){return'<div class="'.concat(V["icon-content"],'">').concat(c,"</div>")},Tu=function(c,d){var m=Ze();if(m){if(!d.imageUrl){ct(m);return}Qe(m,""),m.setAttribute("src",d.imageUrl),m.setAttribute("alt",d.imageAlt||""),en(m,"width",d.imageWidth),en(m,"height",d.imageHeight),m.className=V.image,yt(m,d,"image")}},qr=function(c,d){var m=At(),b=_e();if(!(!m||!b)){if(d.toast){en(m,"width",d.width),b.style.width="100%";var B=ar();B&&b.insertBefore(B,Vi())}else en(b,"width",d.width);en(b,"padding",d.padding),d.color&&(b.style.color=d.color),d.background&&(b.style.background=d.background),ct(ir()),Df(b,d)}},Df=function(c,d){var m=d.showClass||{};c.className="".concat(V.popup," ").concat(tt(c)?m.popup:""),d.toast?(ie([document.documentElement,document.body],V["toast-shown"]),ie(c,V.toast)):ie(c,V.modal),yt(c,d,"popup"),typeof d.customClass=="string"&&ie(c,d.customClass),d.icon&&ie(c,V["icon-".concat(d.icon)])},Lf=function(c,d){var m=et();if(m){var b=d.progressSteps,B=d.currentProgressStep;if(!b||b.length===0||B===void 0){ct(m);return}Qe(m),m.textContent="",B>=b.length&&kt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),b.forEach(function(Q,de){var ue=Mf(Q);if(m.appendChild(ue),de===B&&ie(ue,V["active-progress-step"]),de!==b.length-1){var $e=$n(d);m.appendChild($e)}})}},Mf=function(c){var d=document.createElement("li");return ie(d,V["progress-step"]),gt(d,c),d},$n=function(c){var d=document.createElement("li");return ie(d,V["progress-step-line"]),c.progressStepsDistance&&en(d,"width",c.progressStepsDistance),d},Vf=function(c,d){var m=Oo();m&&(jn(m),ji(m,d.title||d.titleText,"block"),d.title&&lr(d.title,m),d.titleText&&(m.innerText=d.titleText),yt(m,d,"title"))},Iu=function(c,d){qr(c,d),gu(c,d),Lf(c,d),xf(c,d),Tu(c,d),Vf(c,d),pa(c,d),Rf(c,d),hu(c,d),wu(c,d);var m=_e();typeof d.didRender=="function"&&m&&d.didRender(m)},Wi=function(){return tt(_e())},qi=function(){var c;return(c=Jt())===null||c===void 0?void 0:c.click()},bu=function(){var c;return(c=sr())===null||c===void 0?void 0:c.click()},Ki=function(){var c;return(c=or())===null||c===void 0?void 0:c.click()},hn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ga=function(c){c.keydownTarget&&c.keydownHandlerAdded&&(c.keydownTarget.removeEventListener("keydown",c.keydownHandler,{capture:c.keydownListenerCapture}),c.keydownHandlerAdded=!1)},va=function(c,d,m){ga(c),d.toast||(c.keydownHandler=function(b){return ku(d,b,m)},c.keydownTarget=d.keydownListenerCapture?window:_e(),c.keydownListenerCapture=d.keydownListenerCapture,c.keydownTarget.addEventListener("keydown",c.keydownHandler,{capture:c.keydownListenerCapture}),c.keydownHandlerAdded=!0)},Ce=function(c,d){var m,b=Mo();if(b.length){c=c+d,c===b.length?c=0:c===-1&&(c=b.length-1),b[c].focus();return}(m=_e())===null||m===void 0||m.focus()},Su=["ArrowRight","ArrowDown"],Ff=["ArrowLeft","ArrowUp"],ku=function(c,d,m){c&&(d.isComposing||d.keyCode===229||(c.stopKeydownPropagation&&d.stopPropagation(),d.key==="Enter"?Au(d,c):d.key==="Tab"?Cu(d):[].concat(Su,Ff).includes(d.key)?$o(d.key):d.key==="Escape"&&Pu(d,c,m)))},Au=function(c,d){if(Br(d.allowEnterKey)){var m=Ui(_e(),d.input);if(c.target&&m&&c.target instanceof HTMLElement&&c.target.outerHTML===m.outerHTML){if(["textarea","file"].includes(d.input))return;qi(),c.preventDefault()}}},Cu=function(c){for(var d=c.target,m=Mo(),b=-1,B=0;B<m.length;B++)if(d===m[B]){b=B;break}c.shiftKey?Ce(b,-1):Ce(b,1),c.stopPropagation(),c.preventDefault()},$o=function(c){var d=Hr(),m=Jt(),b=sr(),B=or();if(!(!d||!m||!b||!B)){var Q=[m,b,B];if(!(document.activeElement instanceof HTMLElement&&!Q.includes(document.activeElement))){var de=Su.includes(c)?"nextElementSibling":"previousElementSibling",ue=document.activeElement;if(ue){for(var $e=0;$e<d.children.length;$e++){if(ue=ue[de],!ue)return;if(ue instanceof HTMLButtonElement&&tt(ue))break}ue instanceof HTMLButtonElement&&ue.focus()}}}},Pu=function(c,d,m){Br(d.allowEscapeKey)&&(c.preventDefault(),m(hn.esc))},Ct={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},Ru=function(){var c=At(),d=Array.from(document.body.children);d.forEach(function(m){m.contains(c)||(m.hasAttribute("aria-hidden")&&m.setAttribute("data-previous-aria-hidden",m.getAttribute("aria-hidden")||""),m.setAttribute("aria-hidden","true"))})},xu=function(){var c=Array.from(document.body.children);c.forEach(function(d){d.hasAttribute("data-previous-aria-hidden")?(d.setAttribute("aria-hidden",d.getAttribute("data-previous-aria-hidden")||""),d.removeAttribute("data-previous-aria-hidden")):d.removeAttribute("aria-hidden")})},Kr=typeof window<"u"&&!!window.GestureEvent,Ou=function(){if(Kr&&!vt(document.body,V.iosfix)){var c=document.body.scrollTop;document.body.style.top="".concat(c*-1,"px"),ie(document.body,V.iosfix),ya()}},ya=function(){var c=At();if(c){var d;c.ontouchstart=function(m){d=Ho(m)},c.ontouchmove=function(m){d&&(m.preventDefault(),m.stopPropagation())}}},Ho=function(c){var d=c.target,m=At(),b=No();return!m||!b||Nu(c)||Wo(c)?!1:d===m||!Fo(m)&&d instanceof HTMLElement&&d.tagName!=="INPUT"&&d.tagName!=="TEXTAREA"&&!(Fo(b)&&b.contains(d))},Nu=function(c){return c.touches&&c.touches.length&&c.touches[0].touchType==="stylus"},Wo=function(c){return c.touches&&c.touches.length>1},Uf=function(){if(vt(document.body,V.iosfix)){var c=parseInt(document.body.style.top,10);Zt(document.body,V.iosfix),document.body.style.top="",document.body.scrollTop=c*-1}},Du=function(){var c=document.createElement("div");c.className=V["scrollbar-measure"],document.body.appendChild(c);var d=c.getBoundingClientRect().width-c.clientWidth;return document.body.removeChild(c),d},pn=null,Lu=function(c){pn===null&&(document.body.scrollHeight>window.innerHeight||c==="scroll")&&(pn=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(pn+Du(),"px"))},Mu=function(){pn!==null&&(document.body.style.paddingRight="".concat(pn,"px"),pn=null)};function qo(v,c,d,m){Un()?Ea(v,m):(xe(d).then(function(){return Ea(v,m)}),ga(K)),Kr?(c.setAttribute("style","display:none !important"),c.removeAttribute("class"),c.innerHTML=""):c.remove(),Vo()&&(Mu(),Uf(),xu()),wa()}function wa(){Zt([document.documentElement,document.body],[V.shown,V["height-auto"],V["no-backdrop"],V["toast-shown"]])}function An(v){v=fr(v);var c=Ct.swalPromiseResolve.get(this),d=Ko(this);this.isAwaitingPromise?v.isDismissed||(Gr(this),c(v)):d&&c(v)}var Ko=function(c){var d=_e();if(!d)return!1;var m=Se.innerParams.get(c);if(!m||vt(d,m.hideClass.popup))return!1;Zt(d,m.showClass.popup),ie(d,m.hideClass.popup);var b=At();return Zt(b,m.showClass.backdrop),ie(b,m.hideClass.backdrop),Vu(c,d,m),!0};function _a(v){var c=Ct.swalPromiseReject.get(this);Gr(this),c&&c(v)}var Gr=function(c){c.isAwaitingPromise&&(delete c.isAwaitingPromise,Se.innerParams.get(c)||c._destroy())},fr=function(c){return typeof c>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},c)},Vu=function(c,d,m){var b=At(),B=cr&&Bi(d);typeof m.willClose=="function"&&m.willClose(d),B?Fu(c,d,b,m.returnFocus,m.didClose):qo(c,b,m.returnFocus,m.didClose)},Fu=function(c,d,m,b,B){cr&&(K.swalCloseEventFinishedCallback=qo.bind(null,c,m,b,B),d.addEventListener(cr,function(Q){Q.target===d&&(K.swalCloseEventFinishedCallback(),delete K.swalCloseEventFinishedCallback)}))},Ea=function(c,d){setTimeout(function(){typeof d=="function"&&d.bind(c.params)(),c._destroy&&c._destroy()})},hr=function(c){var d=_e();if(d||new Hu,d=_e(),!!d){var m=ar();Un()?ct(Vi()):Go(d,c),Qe(m),d.setAttribute("data-loading","true"),d.setAttribute("aria-busy","true"),d.focus()}},Go=function(c,d){var m=Hr(),b=ar();!m||!b||(!d&&tt(Jt())&&(d=Jt()),Qe(m),d&&(ct(d),b.setAttribute("data-button-to-replace",d.className),m.insertBefore(b,d)),ie([c,m],V.loading))},Vt=function(c,d){d.input==="select"||d.input==="radio"?h(c,d):["text","email","number","tel","textarea"].some(function(m){return m===d.input})&&(Mi(d.inputValue)||ra(d.inputValue))&&(hr(Jt()),g(c,d))},Uu=function(c,d){var m=c.getInput();if(!m)return null;switch(d.input){case"checkbox":return ju(m);case"radio":return Qr(m);case"file":return a(m);default:return d.inputAutoTrim?m.value.trim():m.value}},ju=function(c){return c.checked?1:0},Qr=function(c){return c.checked?c.value:null},a=function(c){return c.files&&c.files.length?c.getAttribute("multiple")!==null?c.files:c.files[0]:null},h=function(c,d){var m=_e();if(m){var b=function(Q){d.input==="select"?_(m,U(Q),d):d.input==="radio"&&D(m,U(Q),d)};Mi(d.inputOptions)||ra(d.inputOptions)?(hr(Jt()),zr(d.inputOptions).then(function(B){c.hideLoading(),b(B)})):Ve(d.inputOptions)==="object"?b(d.inputOptions):dn("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(Ve(d.inputOptions)))}},g=function(c,d){var m=c.getInput();m&&(ct(m),zr(d.inputValue).then(function(b){m.value=d.input==="number"?"".concat(parseFloat(b)||0):"".concat(b),Qe(m),m.focus(),c.hideLoading()}).catch(function(b){dn("Error in inputValue promise: ".concat(b)),m.value="",Qe(m),m.focus(),c.hideLoading()}))};function _(v,c,d){var m=Wt(v,V.select);if(m){var b=function(Q,de,ue){var $e=document.createElement("option");$e.value=ue,gt($e,de),$e.selected=G(ue,d.inputValue),Q.appendChild($e)};c.forEach(function(B){var Q=B[0],de=B[1];if(Array.isArray(de)){var ue=document.createElement("optgroup");ue.label=Q,ue.disabled=!1,m.appendChild(ue),de.forEach(function($e){return b(ue,$e[1],$e[0])})}else b(m,de,Q)}),m.focus()}}function D(v,c,d){var m=Wt(v,V.radio);if(m){c.forEach(function(B){var Q=B[0],de=B[1],ue=document.createElement("input"),$e=document.createElement("label");ue.type="radio",ue.name=V.radio,ue.value=Q,G(Q,d.inputValue)&&(ue.checked=!0);var Ta=document.createElement("span");gt(Ta,de),Ta.className=V.label,$e.appendChild(ue),$e.appendChild(Ta),m.appendChild($e)});var b=m.querySelectorAll("input");b.length&&b[0].focus()}}var U=function v(c){var d=[];return c instanceof Map?c.forEach(function(m,b){var B=m;Ve(B)==="object"&&(B=v(B)),d.push([b,B])}):Object.keys(c).forEach(function(m){var b=c[m];Ve(b)==="object"&&(b=v(b)),d.push([m,b])}),d},G=function(c,d){return!!d&&d.toString()===c.toString()},Ee=void 0,nt=function(c){var d=Se.innerParams.get(c);c.disableButtons(),d.input?rt(c,"confirm"):jf(c,!0)},ve=function(c){var d=Se.innerParams.get(c);c.disableButtons(),d.returnInputValueOnDeny?rt(c,"deny"):Ft(c,!1)},dt=function(c,d){c.disableButtons(),d(hn.cancel)},rt=function(c,d){var m=Se.innerParams.get(c);if(!m.input){dn('The "input" parameter is needed to be set when using returnInputValueOn'.concat(ta(d)));return}var b=c.getInput(),B=Uu(c,m);m.inputValidator?Yr(c,B,d):b&&!b.checkValidity()?(c.enableButtons(),c.showValidationMessage(m.validationMessage||b.validationMessage)):d==="deny"?Ft(c,B):jf(c,B)},Yr=function(c,d,m){var b=Se.innerParams.get(c);c.disableInput();var B=Promise.resolve().then(function(){return zr(b.inputValidator(d,b.validationMessage))});B.then(function(Q){c.enableButtons(),c.enableInput(),Q?c.showValidationMessage(Q):m==="deny"?Ft(c,d):jf(c,d)})},Ft=function(c,d){var m=Se.innerParams.get(c||Ee);if(m.showLoaderOnDeny&&hr(sr()),m.preDeny){c.isAwaitingPromise=!0;var b=Promise.resolve().then(function(){return zr(m.preDeny(d,m.validationMessage))});b.then(function(B){B===!1?(c.hideLoading(),Gr(c)):c.close({isDenied:!0,value:typeof B>"u"?d:B})}).catch(function(B){return Qo(c||Ee,B)})}else c.close({isDenied:!0,value:d})},Gi=function(c,d){c.close({isConfirmed:!0,value:d})},Qo=function(c,d){c.rejectPromise(d)},jf=function(c,d){var m=Se.innerParams.get(c||Ee);if(m.showLoaderOnConfirm&&hr(),m.preConfirm){c.resetValidationMessage(),c.isAwaitingPromise=!0;var b=Promise.resolve().then(function(){return zr(m.preConfirm(d,m.validationMessage))});b.then(function(B){tt(ir())||B===!1?(c.hideLoading(),Gr(c)):Gi(c,typeof B>"u"?d:B)}).catch(function(B){return Qo(c||Ee,B)})}else Gi(c,d)};function Bu(){var v=Se.innerParams.get(this);if(v){var c=Se.domCache.get(this);ct(c.loader),Un()?v.icon&&Qe(Vi()):cI(c),Zt([c.popup,c.actions],V.loading),c.popup.removeAttribute("aria-busy"),c.popup.removeAttribute("data-loading"),c.confirmButton.disabled=!1,c.denyButton.disabled=!1,c.cancelButton.disabled=!1}}var cI=function(c){var d=c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));d.length?Qe(d[0],"inline-block"):uu()&&ct(c.actions)};function yv(){var v=Se.innerParams.get(this),c=Se.domCache.get(this);return c?Ui(c.popup,v.input):null}function wv(v,c,d){var m=Se.domCache.get(v);c.forEach(function(b){m[b].disabled=d})}function _v(v,c){var d=_e();if(!(!d||!v))if(v.type==="radio")for(var m=d.querySelectorAll('[name="'.concat(V.radio,'"]')),b=0;b<m.length;b++)m[b].disabled=c;else v.disabled=c}function Ev(){wv(this,["confirmButton","denyButton","cancelButton"],!1)}function Tv(){wv(this,["confirmButton","denyButton","cancelButton"],!0)}function Iv(){_v(this.getInput(),!1)}function bv(){_v(this.getInput(),!0)}function Sv(v){var c=Se.domCache.get(this),d=Se.innerParams.get(this);gt(c.validationMessage,v),c.validationMessage.className=V["validation-message"],d.customClass&&d.customClass.validationMessage&&ie(c.validationMessage,d.customClass.validationMessage),Qe(c.validationMessage);var m=this.getInput();m&&(m.setAttribute("aria-invalid","true"),m.setAttribute("aria-describedby",V["validation-message"]),Wr(m),ie(m,V.inputerror))}function kv(){var v=Se.domCache.get(this);v.validationMessage&&ct(v.validationMessage);var c=this.getInput();c&&(c.removeAttribute("aria-invalid"),c.removeAttribute("aria-describedby"),Zt(c,V.inputerror))}var Yo={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},dI=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],fI={},hI=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Av=function(c){return Object.prototype.hasOwnProperty.call(Yo,c)},Cv=function(c){return dI.indexOf(c)!==-1},Pv=function(c){return fI[c]},pI=function(c){Av(c)||kt('Unknown parameter "'.concat(c,'"'))},mI=function(c){hI.includes(c)&&kt('The parameter "'.concat(c,'" is incompatible with toasts'))},gI=function(c){var d=Pv(c);d&&xo(c,d)},vI=function(c){c.backdrop===!1&&c.allowOutsideClick&&kt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var d in c)pI(d),c.toast&&mI(d),gI(d)};function Rv(v){var c=_e(),d=Se.innerParams.get(this);if(!c||vt(c,d.hideClass.popup)){kt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var m=yI(v),b=Object.assign({},d,m);Iu(this,b),Se.innerParams.set(this,b),Object.defineProperties(this,{params:{value:Object.assign({},this.params,v),writable:!1,enumerable:!0}})}var yI=function(c){var d={};return Object.keys(c).forEach(function(m){Cv(m)?d[m]=c[m]:kt("Invalid parameter to update: ".concat(m))}),d};function xv(){var v=Se.domCache.get(this),c=Se.innerParams.get(this);if(!c){Ov(this);return}v.popup&&K.swalCloseEventFinishedCallback&&(K.swalCloseEventFinishedCallback(),delete K.swalCloseEventFinishedCallback),typeof c.didDestroy=="function"&&c.didDestroy(),wI(this)}var wI=function(c){Ov(c),delete c.params,delete K.keydownHandler,delete K.keydownTarget,delete K.currentInstance},Ov=function(c){c.isAwaitingPromise?(Bf(Se,c),c.isAwaitingPromise=!0):(Bf(Ct,c),Bf(Se,c),delete c.isAwaitingPromise,delete c.disableButtons,delete c.enableButtons,delete c.getInput,delete c.disableInput,delete c.enableInput,delete c.hideLoading,delete c.disableLoading,delete c.showValidationMessage,delete c.resetValidationMessage,delete c.close,delete c.closePopup,delete c.closeModal,delete c.closeToast,delete c.rejectPromise,delete c.update,delete c._destroy)},Bf=function(c,d){for(var m in c)c[m].delete(d)},_I=Object.freeze({__proto__:null,_destroy:xv,close:An,closeModal:An,closePopup:An,closeToast:An,disableButtons:Tv,disableInput:bv,disableLoading:Bu,enableButtons:Ev,enableInput:Iv,getInput:yv,handleAwaitingPromise:Gr,hideLoading:Bu,rejectPromise:_a,resetValidationMessage:kv,showValidationMessage:Sv,update:Rv}),EI=function(c,d,m){c.toast?TI(c,d,m):(bI(d),SI(d),kI(c,d,m))},TI=function(c,d,m){d.popup.onclick=function(){c&&(II(c)||c.timer||c.input)||m(hn.close)}},II=function(c){return!!(c.showConfirmButton||c.showDenyButton||c.showCancelButton||c.showCloseButton)},zu=!1,bI=function(c){c.popup.onmousedown=function(){c.container.onmouseup=function(d){c.container.onmouseup=function(){},d.target===c.container&&(zu=!0)}}},SI=function(c){c.container.onmousedown=function(d){d.target===c.container&&d.preventDefault(),c.popup.onmouseup=function(m){c.popup.onmouseup=function(){},(m.target===c.popup||m.target instanceof HTMLElement&&c.popup.contains(m.target))&&(zu=!0)}}},kI=function(c,d,m){d.container.onclick=function(b){if(zu){zu=!1;return}b.target===d.container&&Br(c.allowOutsideClick)&&m(hn.backdrop)}},AI=function(c){return Ve(c)==="object"&&c.jquery},Nv=function(c){return c instanceof Element||AI(c)},CI=function(c){var d={};return Ve(c[0])==="object"&&!Nv(c[0])?Object.assign(d,c[0]):["title","html","icon"].forEach(function(m,b){var B=c[b];typeof B=="string"||Nv(B)?d[m]=B:B!==void 0&&dn("Unexpected type of ".concat(m,'! Expected "string" or "Element", got ').concat(Ve(B)))}),d};function PI(){for(var v=this,c=arguments.length,d=new Array(c),m=0;m<c;m++)d[m]=arguments[m];return A(v,d)}function RI(v){var c=function(d){function m(){return f(this,m),l(this,m,arguments)}return P(m,d),N(m,[{key:"_main",value:function(B,Q){return k(T(m.prototype),"_main",this).call(this,B,Object.assign({},v,Q))}}])}(this);return c}var xI=function(){return K.timeout&&K.timeout.getTimerLeft()},Dv=function(){if(K.timeout)return cu(),K.timeout.stop()},Lv=function(){if(K.timeout){var c=K.timeout.start();return fn(c),c}},OI=function(){var c=K.timeout;return c&&(c.running?Dv():Lv())},NI=function(c){if(K.timeout){var d=K.timeout.increase(c);return fn(d,!0),d}},DI=function(){return!!(K.timeout&&K.timeout.isRunning())},Mv=!1,zf={};function LI(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";zf[v]=this,Mv||(document.body.addEventListener("click",MI),Mv=!0)}var MI=function(c){for(var d=c.target;d&&d!==document;d=d.parentNode)for(var m in zf){var b=d.getAttribute(m);if(b){zf[m].fire({template:b});return}}},VI=Object.freeze({__proto__:null,argsToParams:CI,bindClickHandler:LI,clickCancel:Ki,clickConfirm:qi,clickDeny:bu,enableLoading:hr,fire:PI,getActions:Hr,getCancelButton:or,getCloseButton:oa,getConfirmButton:Jt,getContainer:At,getDenyButton:sr,getFocusableElements:Mo,getFooter:Do,getHtmlContainer:No,getIcon:Vi,getIconContent:ia,getImage:Ze,getInputLabel:Fi,getLoader:ar,getPopup:_e,getProgressSteps:et,getTimerLeft:xI,getTimerProgressBar:Lo,getTitle:Oo,getValidationMessage:ir,increaseTimer:NI,isDeprecatedParameter:Pv,isLoading:aa,isTimerRunning:DI,isUpdatableParameter:Cv,isValidParameter:Av,isVisible:Wi,mixin:RI,resumeTimer:Lv,showLoading:hr,stopTimer:Dv,toggleTimer:OI}),FI=function(){function v(c,d){f(this,v),this.callback=c,this.remaining=d,this.running=!1,this.start()}return N(v,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(d){var m=this.running;return m&&this.stop(),this.remaining+=d,m&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),Vv=["swal-title","swal-html","swal-footer"],UI=function(c){var d=typeof c.template=="string"?document.querySelector(c.template):c.template;if(!d)return{};var m=d.content;KI(m);var b=Object.assign(jI(m),BI(m),zI(m),$I(m),HI(m),WI(m),qI(m,Vv));return b},jI=function(c){var d={},m=Array.from(c.querySelectorAll("swal-param"));return m.forEach(function(b){Qi(b,["name","value"]);var B=b.getAttribute("name"),Q=b.getAttribute("value");typeof Yo[B]=="boolean"?d[B]=Q!=="false":Ve(Yo[B])==="object"?d[B]=JSON.parse(Q):d[B]=Q}),d},BI=function(c){var d={},m=Array.from(c.querySelectorAll("swal-function-param"));return m.forEach(function(b){var B=b.getAttribute("name"),Q=b.getAttribute("value");d[B]=new Function("return ".concat(Q))()}),d},zI=function(c){var d={},m=Array.from(c.querySelectorAll("swal-button"));return m.forEach(function(b){Qi(b,["type","color","aria-label"]);var B=b.getAttribute("type");d["".concat(B,"ButtonText")]=b.innerHTML,d["show".concat(ta(B),"Button")]=!0,b.hasAttribute("color")&&(d["".concat(B,"ButtonColor")]=b.getAttribute("color")),b.hasAttribute("aria-label")&&(d["".concat(B,"ButtonAriaLabel")]=b.getAttribute("aria-label"))}),d},$I=function(c){var d={},m=c.querySelector("swal-image");return m&&(Qi(m,["src","width","height","alt"]),m.hasAttribute("src")&&(d.imageUrl=m.getAttribute("src")||void 0),m.hasAttribute("width")&&(d.imageWidth=m.getAttribute("width")||void 0),m.hasAttribute("height")&&(d.imageHeight=m.getAttribute("height")||void 0),m.hasAttribute("alt")&&(d.imageAlt=m.getAttribute("alt")||void 0)),d},HI=function(c){var d={},m=c.querySelector("swal-icon");return m&&(Qi(m,["type","color"]),m.hasAttribute("type")&&(d.icon=m.getAttribute("type")),m.hasAttribute("color")&&(d.iconColor=m.getAttribute("color")),d.iconHtml=m.innerHTML),d},WI=function(c){var d={},m=c.querySelector("swal-input");m&&(Qi(m,["type","label","placeholder","value"]),d.input=m.getAttribute("type")||"text",m.hasAttribute("label")&&(d.inputLabel=m.getAttribute("label")),m.hasAttribute("placeholder")&&(d.inputPlaceholder=m.getAttribute("placeholder")),m.hasAttribute("value")&&(d.inputValue=m.getAttribute("value")));var b=Array.from(c.querySelectorAll("swal-input-option"));return b.length&&(d.inputOptions={},b.forEach(function(B){Qi(B,["value"]);var Q=B.getAttribute("value"),de=B.innerHTML;d.inputOptions[Q]=de})),d},qI=function(c,d){var m={};for(var b in d){var B=d[b],Q=c.querySelector(B);Q&&(Qi(Q,[]),m[B.replace(/^swal-/,"")]=Q.innerHTML.trim())}return m},KI=function(c){var d=Vv.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(c.children).forEach(function(m){var b=m.tagName.toLowerCase();d.includes(b)||kt("Unrecognized element <".concat(b,">"))})},Qi=function(c,d){Array.from(c.attributes).forEach(function(m){d.indexOf(m.name)===-1&&kt(['Unrecognized attribute "'.concat(m.name,'" on <').concat(c.tagName.toLowerCase(),">."),"".concat(d.length?"Allowed attributes are: ".concat(d.join(", ")):"To set the value, use HTML within the element.")])})},Fv=10,GI=function(c){var d=At(),m=_e();typeof c.willOpen=="function"&&c.willOpen(m);var b=window.getComputedStyle(document.body),B=b.overflowY;JI(d,m,c),setTimeout(function(){YI(d,m)},Fv),Vo()&&(XI(d,c.scrollbarPadding,B),Ru()),!Un()&&!K.previousActiveElement&&(K.previousActiveElement=document.activeElement),typeof c.didOpen=="function"&&setTimeout(function(){return c.didOpen(m)}),Zt(d,V["no-transition"])},QI=function v(c){var d=_e();if(!(c.target!==d||!cr)){var m=At();d.removeEventListener(cr,v),m.style.overflowY="auto"}},YI=function(c,d){cr&&Bi(d)?(c.style.overflowY="hidden",d.addEventListener(cr,QI)):c.style.overflowY="auto"},XI=function(c,d,m){Ou(),d&&m!=="hidden"&&Lu(m),setTimeout(function(){c.scrollTop=0})},JI=function(c,d,m){ie(c,m.showClass.backdrop),m.animation?(d.style.setProperty("opacity","0","important"),Qe(d,"grid"),setTimeout(function(){ie(d,m.showClass.popup),d.style.removeProperty("opacity")},Fv)):Qe(d,"grid"),ie([document.documentElement,document.body],V.shown),m.heightAuto&&m.backdrop&&!m.toast&&ie([document.documentElement,document.body],V["height-auto"])},Uv={email:function(c,d){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(c)?Promise.resolve():Promise.resolve(d||"Invalid email address")},url:function(c,d){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c)?Promise.resolve():Promise.resolve(d||"Invalid URL")}};function ZI(v){v.inputValidator||(v.input==="email"&&(v.inputValidator=Uv.email),v.input==="url"&&(v.inputValidator=Uv.url))}function eb(v){(!v.target||typeof v.target=="string"&&!document.querySelector(v.target)||typeof v.target!="string"&&!v.target.appendChild)&&(kt('Target parameter is not valid, defaulting to "body"'),v.target="body")}function tb(v){ZI(v),v.showLoaderOnConfirm&&!v.preConfirm&&kt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),eb(v),typeof v.title=="string"&&(v.title=v.title.split(`
`).join("<br />")),fa(v)}var Hn,$u=new WeakMap,Ke=function(){function v(){if(f(this,v),y(this,$u,void 0),!(typeof window>"u")){Hn=this;for(var c=arguments.length,d=new Array(c),m=0;m<c;m++)d[m]=arguments[m];var b=Object.freeze(this.constructor.argsToParams(d));this.params=b,this.isAwaitingPromise=!1,w($u,this,this._main(Hn.params))}}return N(v,[{key:"_main",value:function(d){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(vI(Object.assign({},m,d)),K.currentInstance){var b=Ct.swalPromiseResolve.get(K.currentInstance),B=K.currentInstance.isAwaitingPromise;K.currentInstance._destroy(),B||b({isDismissed:!0}),Vo()&&xu()}K.currentInstance=Hn;var Q=rb(d,m);tb(Q),Object.freeze(Q),K.timeout&&(K.timeout.stop(),delete K.timeout),clearTimeout(K.restoreFocusTimeout);var de=ib(Hn);return Iu(Hn,Q),Se.innerParams.set(Hn,Q),nb(Hn,de,Q)}},{key:"then",value:function(d){return p($u,this).then(d)}},{key:"finally",value:function(d){return p($u,this).finally(d)}}])}(),nb=function(c,d,m){return new Promise(function(b,B){var Q=function(ue){c.close({isDismissed:!0,dismiss:ue})};Ct.swalPromiseResolve.set(c,b),Ct.swalPromiseReject.set(c,B),d.confirmButton.onclick=function(){nt(c)},d.denyButton.onclick=function(){ve(c)},d.cancelButton.onclick=function(){dt(c,Q)},d.closeButton.onclick=function(){Q(hn.close)},EI(m,d,Q),va(K,m,Q),Vt(c,m),GI(m),ob(K,m,Q),sb(d,m),setTimeout(function(){d.container.scrollTop=0})})},rb=function(c,d){var m=UI(c),b=Object.assign({},Yo,d,m,c);return b.showClass=Object.assign({},Yo.showClass,b.showClass),b.hideClass=Object.assign({},Yo.hideClass,b.hideClass),b.animation===!1&&(b.showClass={backdrop:"swal2-noanimation"},b.hideClass={}),b},ib=function(c){var d={popup:_e(),container:At(),actions:Hr(),confirmButton:Jt(),denyButton:sr(),cancelButton:or(),loader:ar(),closeButton:oa(),validationMessage:ir(),progressSteps:et()};return Se.domCache.set(c,d),d},ob=function(c,d,m){var b=Lo();ct(b),d.timer&&(c.timeout=new FI(function(){m("timer"),delete c.timeout},d.timer),d.timerProgressBar&&(Qe(b),yt(b,d,"timerProgressBar"),setTimeout(function(){c.timeout&&c.timeout.running&&fn(d.timer)})))},sb=function(c,d){if(!d.toast){if(!Br(d.allowEnterKey)){xo("allowEnterKey"),ub();return}ab(c)||lb(c,d)||Ce(-1,1)}},ab=function(c){var d=c.popup.querySelectorAll("[autofocus]"),m=M(d),b;try{for(m.s();!(b=m.n()).done;){var B=b.value;if(B instanceof HTMLElement&&tt(B))return B.focus(),!0}}catch(Q){m.e(Q)}finally{m.f()}return!1},lb=function(c,d){return d.focusDeny&&tt(c.denyButton)?(c.denyButton.focus(),!0):d.focusCancel&&tt(c.cancelButton)?(c.cancelButton.focus(),!0):d.focusConfirm&&tt(c.confirmButton)?(c.confirmButton.focus(),!0):!1},ub=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var jv=new Date,Bv=localStorage.getItem("swal-initiation");Bv?(jv.getTime()-Date.parse(Bv))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var v=document.createElement("audio");v.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",v.loop=!0,document.body.appendChild(v),setTimeout(function(){v.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(jv))}Ke.prototype.disableButtons=Tv,Ke.prototype.enableButtons=Ev,Ke.prototype.getInput=yv,Ke.prototype.disableInput=bv,Ke.prototype.enableInput=Iv,Ke.prototype.hideLoading=Bu,Ke.prototype.disableLoading=Bu,Ke.prototype.showValidationMessage=Sv,Ke.prototype.resetValidationMessage=kv,Ke.prototype.close=An,Ke.prototype.closePopup=An,Ke.prototype.closeModal=An,Ke.prototype.closeToast=An,Ke.prototype.rejectPromise=_a,Ke.prototype.update=Rv,Ke.prototype._destroy=xv,Object.assign(Ke,VI),Object.keys(_I).forEach(function(v){Ke[v]=function(){if(Hn&&Hn[v]){var c;return(c=Hn)[v].apply(c,arguments)}return null}}),Ke.DismissReason=hn,Ke.version="11.12.0";var Hu=Ke;return Hu.default=Hu,Hu}),typeof Xr<"u"&&Xr.Sweetalert2&&(Xr.swal=Xr.sweetAlert=Xr.Swal=Xr.SweetAlert=Xr.Sweetalert2),typeof document<"u"&&function(n,r){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(AT);var B4=AT.exports;const Yi=hm(B4);function mw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mw(Object(n),!0).forEach(function(r){ut(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Dd(t){"@babel/helpers - typeof";return Dd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dd(t)}function z4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $4(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function H4(t,e,n){return e&&$4(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nv(t,e){return q4(t)||G4(t,e)||CT(t,e)||Y4()}function iu(t){return W4(t)||K4(t)||CT(t)||Q4()}function W4(t){if(Array.isArray(t))return Yp(t)}function q4(t){if(Array.isArray(t))return t}function K4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function G4(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,l;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function CT(t,e){if(t){if(typeof t=="string")return Yp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yp(t,e)}}function Yp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Q4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gw=function(){},rv={},PT={},RT=null,xT={mark:gw,measure:gw};try{typeof window<"u"&&(rv=window),typeof document<"u"&&(PT=document),typeof MutationObserver<"u"&&(RT=MutationObserver),typeof performance<"u"&&(xT=performance)}catch{}var X4=rv.navigator||{},vw=X4.userAgent,yw=vw===void 0?"":vw,Pi=rv,Le=PT,ww=RT,hc=xT;Pi.document;var jr=!!Le.documentElement&&!!Le.head&&typeof Le.addEventListener=="function"&&typeof Le.createElement=="function",OT=~yw.indexOf("MSIE")||~yw.indexOf("Trident/"),pc,mc,gc,vc,yc,Or="___FONT_AWESOME___",Xp=16,NT="fa",DT="svg-inline--fa",bo="data-fa-i2svg",Jp="data-fa-pseudo-element",J4="data-fa-pseudo-element-pending",iv="data-prefix",ov="data-icon",_w="fontawesome-i2svg",Z4="async",e3=["HTML","HEAD","STYLE","SCRIPT"],LT=function(){try{return!0}catch{return!1}}(),Ne="classic",We="sharp",sv=[Ne,We];function ou(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ne]}})}var Ml=ou((pc={},ut(pc,Ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ut(pc,We,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),pc)),Vl=ou((mc={},ut(mc,Ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ut(mc,We,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),mc)),Fl=ou((gc={},ut(gc,Ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ut(gc,We,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),gc)),t3=ou((vc={},ut(vc,Ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ut(vc,We,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),vc)),n3=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,MT="fa-layers-text",r3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,i3=ou((yc={},ut(yc,Ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ut(yc,We,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),yc)),VT=[1,2,3,4,5,6,7,8,9,10],o3=VT.concat([11,12,13,14,15,16,17,18,19,20]),s3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],oo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ul=new Set;Object.keys(Vl[Ne]).map(Ul.add.bind(Ul));Object.keys(Vl[We]).map(Ul.add.bind(Ul));var a3=[].concat(sv,iu(Ul),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oo.GROUP,oo.SWAP_OPACITY,oo.PRIMARY,oo.SECONDARY]).concat(VT.map(function(t){return"".concat(t,"x")})).concat(o3.map(function(t){return"w-".concat(t)})),il=Pi.FontAwesomeConfig||{};function l3(t){var e=Le.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function u3(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Le&&typeof Le.querySelector=="function"){var c3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];c3.forEach(function(t){var e=nv(t,2),n=e[0],r=e[1],i=u3(l3(n));i!=null&&(il[r]=i)})}var FT={styleDefault:"solid",familyDefault:"classic",cssPrefix:NT,replacementClass:DT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};il.familyPrefix&&(il.cssPrefix=il.familyPrefix);var $s=J(J({},FT),il);$s.autoReplaceSvg||($s.observeMutations=!1);var te={};Object.keys(FT).forEach(function(t){Object.defineProperty(te,t,{enumerable:!0,set:function(n){$s[t]=n,ol.forEach(function(r){return r(te)})},get:function(){return $s[t]}})});Object.defineProperty(te,"familyPrefix",{enumerable:!0,set:function(e){$s.cssPrefix=e,ol.forEach(function(n){return n(te)})},get:function(){return $s.cssPrefix}});Pi.FontAwesomeConfig=te;var ol=[];function d3(t){return ol.push(t),function(){ol.splice(ol.indexOf(t),1)}}var ei=Xp,Qn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function f3(t){if(!(!t||!jr)){var e=Le.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Le.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Le.head.insertBefore(e,r),t}}var h3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function jl(){for(var t=12,e="";t-- >0;)e+=h3[Math.random()*62|0];return e}function ea(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function av(t){return t.classList?ea(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function UT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p3(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(UT(t[n]),'" ')},"").trim()}function Tf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function lv(t){return t.size!==Qn.size||t.x!==Qn.x||t.y!==Qn.y||t.rotate!==Qn.rotate||t.flipX||t.flipY}function m3(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(o," ").concat(s," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:f}}function g3(t){var e=t.transform,n=t.width,r=n===void 0?Xp:n,i=t.height,o=i===void 0?Xp:i,s=t.startCentered,l=s===void 0?!1:s,u="";return l&&OT?u+="translate(".concat(e.x/ei-r/2,"em, ").concat(e.y/ei-o/2,"em) "):l?u+="translate(calc(-50% + ".concat(e.x/ei,"em), calc(-50% + ").concat(e.y/ei,"em)) "):u+="translate(".concat(e.x/ei,"em, ").concat(e.y/ei,"em) "),u+="scale(".concat(e.size/ei*(e.flipX?-1:1),", ").concat(e.size/ei*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var v3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function jT(){var t=NT,e=DT,n=te.cssPrefix,r=te.replacementClass,i=v3;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var Ew=!1;function Ah(){te.autoAddCss&&!Ew&&(f3(jT()),Ew=!0)}var y3={mixout:function(){return{dom:{css:jT,insertCss:Ah}}},hooks:function(){return{beforeDOMElementCreation:function(){Ah()},beforeI2svg:function(){Ah()}}}},Nr=Pi||{};Nr[Or]||(Nr[Or]={});Nr[Or].styles||(Nr[Or].styles={});Nr[Or].hooks||(Nr[Or].hooks={});Nr[Or].shims||(Nr[Or].shims=[]);var Dn=Nr[Or],BT=[],w3=function t(){Le.removeEventListener("DOMContentLoaded",t),Ld=1,BT.map(function(e){return e()})},Ld=!1;jr&&(Ld=(Le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Le.readyState),Ld||Le.addEventListener("DOMContentLoaded",w3));function _3(t){jr&&(Ld?setTimeout(t,0):BT.push(t))}function su(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,o=i===void 0?[]:i;return typeof t=="string"?UT(t):"<".concat(e," ").concat(p3(r),">").concat(o.map(su).join(""),"</").concat(e,">")}function Tw(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ch=function(e,n,r,i){var o=Object.keys(e),s=o.length,l=n,u,f,p;for(r===void 0?(u=1,p=e[o[0]]):(u=0,p=r);u<s;u++)f=o[u],p=l(p,e[f],f,e);return p};function E3(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Zp(t){var e=E3(t);return e.length===1?e[0].toString(16):null}function T3(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Iw(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function em(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Iw(e);typeof Dn.hooks.addPack=="function"&&!i?Dn.hooks.addPack(t,Iw(e)):Dn.styles[t]=J(J({},Dn.styles[t]||{}),o),t==="fas"&&em("fa",e)}var wc,_c,Ec,hs=Dn.styles,I3=Dn.shims,b3=(wc={},ut(wc,Ne,Object.values(Fl[Ne])),ut(wc,We,Object.values(Fl[We])),wc),uv=null,zT={},$T={},HT={},WT={},qT={},S3=(_c={},ut(_c,Ne,Object.keys(Ml[Ne])),ut(_c,We,Object.keys(Ml[We])),_c);function k3(t){return~a3.indexOf(t)}function A3(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!k3(i)?i:null}var KT=function(){var e=function(o){return Ch(hs,function(s,l,u){return s[u]=Ch(l,o,{}),s},{})};zT=e(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var l=o[2].filter(function(u){return typeof u=="number"});l.forEach(function(u){i[u.toString(16)]=s})}return i}),$T=e(function(i,o,s){if(i[s]=s,o[2]){var l=o[2].filter(function(u){return typeof u=="string"});l.forEach(function(u){i[u]=s})}return i}),qT=e(function(i,o,s){var l=o[2];return i[s]=s,l.forEach(function(u){i[u]=s}),i});var n="far"in hs||te.autoFetchSvg,r=Ch(I3,function(i,o){var s=o[0],l=o[1],u=o[2];return l==="far"&&!n&&(l="fas"),typeof s=="string"&&(i.names[s]={prefix:l,iconName:u}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:l,iconName:u}),i},{names:{},unicodes:{}});HT=r.names,WT=r.unicodes,uv=If(te.styleDefault,{family:te.familyDefault})};d3(function(t){uv=If(t.styleDefault,{family:te.familyDefault})});KT();function cv(t,e){return(zT[t]||{})[e]}function C3(t,e){return($T[t]||{})[e]}function so(t,e){return(qT[t]||{})[e]}function GT(t){return HT[t]||{prefix:null,iconName:null}}function P3(t){var e=WT[t],n=cv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ri(){return uv}var dv=function(){return{prefix:null,iconName:null,rest:[]}};function If(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ne:n,i=Ml[r][t],o=Vl[r][t]||Vl[r][i],s=t in Dn.styles?t:null;return o||s||null}var bw=(Ec={},ut(Ec,Ne,Object.keys(Fl[Ne])),ut(Ec,We,Object.keys(Fl[We])),Ec);function bf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(e={},ut(e,Ne,"".concat(te.cssPrefix,"-").concat(Ne)),ut(e,We,"".concat(te.cssPrefix,"-").concat(We)),e),s=null,l=Ne;(t.includes(o[Ne])||t.some(function(f){return bw[Ne].includes(f)}))&&(l=Ne),(t.includes(o[We])||t.some(function(f){return bw[We].includes(f)}))&&(l=We);var u=t.reduce(function(f,p){var y=A3(te.cssPrefix,p);if(hs[p]?(p=b3[l].includes(p)?t3[l][p]:p,s=p,f.prefix=p):S3[l].indexOf(p)>-1?(s=p,f.prefix=If(p,{family:l})):y?f.iconName=y:p!==te.replacementClass&&p!==o[Ne]&&p!==o[We]&&f.rest.push(p),!i&&f.prefix&&f.iconName){var w=s==="fa"?GT(f.iconName):{},A=so(f.prefix,f.iconName);w.prefix&&(s=null),f.iconName=w.iconName||A||f.iconName,f.prefix=w.prefix||f.prefix,f.prefix==="far"&&!hs.far&&hs.fas&&!te.autoFetchSvg&&(f.prefix="fas")}return f},dv());return(t.includes("fa-brands")||t.includes("fab"))&&(u.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(u.prefix="fad"),!u.prefix&&l===We&&(hs.fass||te.autoFetchSvg)&&(u.prefix="fass",u.iconName=so(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||s==="fa")&&(u.prefix=Ri()||"fas"),u}var R3=function(){function t(){z4(this,t),this.definitions={}}return H4(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){n.definitions[l]=J(J({},n.definitions[l]||{}),s[l]),em(l,s[l]);var u=Fl[Ne][l];u&&em(u,s[l]),KT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],l=s.prefix,u=s.iconName,f=s.icon,p=f[2];n[l]||(n[l]={}),p.length>0&&p.forEach(function(y){typeof y=="string"&&(n[l][y]=f)}),n[l][u]=f}),n}}]),t}(),Sw=[],ps={},As={},x3=Object.keys(As);function O3(t,e){var n=e.mixoutsTo;return Sw=t,ps={},Object.keys(As).forEach(function(r){x3.indexOf(r)===-1&&delete As[r]}),Sw.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Dd(i[s])==="object"&&Object.keys(i[s]).forEach(function(l){n[s]||(n[s]={}),n[s][l]=i[s][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){ps[s]||(ps[s]=[]),ps[s].push(o[s])})}r.provides&&r.provides(As)}),n}function tm(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=ps[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function So(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ps[t]||[];i.forEach(function(o){o.apply(null,n)})}function Dr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return As[t]?As[t].apply(null,e):void 0}function nm(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ri();if(e)return e=so(n,e)||e,Tw(QT.definitions,n,e)||Tw(Dn.styles,n,e)}var QT=new R3,N3=function(){te.autoReplaceSvg=!1,te.observeMutations=!1,So("noAuto")},D3={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jr?(So("beforeI2svg",e),Dr("pseudoElements2svg",e),Dr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;te.autoReplaceSvg===!1&&(te.autoReplaceSvg=!0),te.observeMutations=!0,_3(function(){M3({autoReplaceSvgRoot:n}),So("watch",e)})}},L3={icon:function(e){if(e===null)return null;if(Dd(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:so(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=If(e[0]);return{prefix:r,iconName:so(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(te.cssPrefix,"-"))>-1||e.match(n3))){var i=bf(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ri(),iconName:so(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var o=Ri();return{prefix:o,iconName:so(o,e)||e}}}},un={noAuto:N3,config:te,dom:D3,parse:L3,library:QT,findIconDefinition:nm,toHtml:su},M3=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Le:n;(Object.keys(Dn.styles).length>0||te.autoFetchSvg)&&jr&&te.autoReplaceSvg&&un.dom.i2svg({node:r})};function Sf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return su(r)})}}),Object.defineProperty(t,"node",{get:function(){if(jr){var r=Le.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function V3(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(lv(s)&&n.found&&!r.found){var l=n.width,u=n.height,f={x:l/u/2,y:.5};i.style=Tf(J(J({},o),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function F3(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(te.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:J(J({},i),{},{id:s}),children:r}]}]}function fv(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,l=t.symbol,u=t.title,f=t.maskId,p=t.titleId,y=t.extra,w=t.watchable,A=w===void 0?!1:w,x=r.found?r:n,N=x.width,M=x.height,k=i==="fak",T=[te.replacementClass,o?"".concat(te.cssPrefix,"-").concat(o):""].filter(function(I){return y.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(y.classes).join(" "),P={children:[],attributes:J(J({},y.attributes),{},{"data-prefix":i,"data-icon":o,class:T,role:y.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(M)})},F=k&&!~y.classes.indexOf("fa-fw")?{width:"".concat(N/M*16*.0625,"em")}:{};A&&(P.attributes[bo]=""),u&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(p||jl())},children:[u]}),delete P.attributes.title);var z=J(J({},P),{},{prefix:i,iconName:o,main:n,mask:r,maskId:f,transform:s,symbol:l,styles:J(J({},F),y.styles)}),q=r.found&&n.found?Dr("generateAbstractMask",z)||{children:[],attributes:{}}:Dr("generateAbstractIcon",z)||{children:[],attributes:{}},S=q.children,E=q.attributes;return z.children=S,z.attributes=E,l?F3(z):V3(z)}function kw(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,s=t.extra,l=t.watchable,u=l===void 0?!1:l,f=J(J(J({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});u&&(f[bo]="");var p=J({},s.styles);lv(i)&&(p.transform=g3({transform:i,startCentered:!0,width:n,height:r}),p["-webkit-transform"]=p.transform);var y=Tf(p);y.length>0&&(f.style=y);var w=[];return w.push({tag:"span",attributes:f,children:[e]}),o&&w.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),w}function U3(t){var e=t.content,n=t.title,r=t.extra,i=J(J(J({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Tf(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Ph=Dn.styles;function rm(t){var e=t[0],n=t[1],r=t.slice(4),i=nv(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(te.cssPrefix,"-").concat(oo.GROUP)},children:[{tag:"path",attributes:{class:"".concat(te.cssPrefix,"-").concat(oo.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(te.cssPrefix,"-").concat(oo.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var j3={found:!1,width:512,height:512};function B3(t,e){!LT&&!te.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function im(t,e){var n=e;return e==="fa"&&te.styleDefault!==null&&(e=Ri()),new Promise(function(r,i){if(Dr("missingIconAbstract"),n==="fa"){var o=GT(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Ph[e]&&Ph[e][t]){var s=Ph[e][t];return r(rm(s))}B3(t,e),r(J(J({},j3),{},{icon:te.showMissingIcons&&t?Dr("missingIconAbstract")||{}:{}}))})}var Aw=function(){},om=te.measurePerformance&&hc&&hc.mark&&hc.measure?hc:{mark:Aw,measure:Aw},$a='FA "6.5.2"',z3=function(e){return om.mark("".concat($a," ").concat(e," begins")),function(){return YT(e)}},YT=function(e){om.mark("".concat($a," ").concat(e," ends")),om.measure("".concat($a," ").concat(e),"".concat($a," ").concat(e," begins"),"".concat($a," ").concat(e," ends"))},hv={begin:z3,end:YT},zc=function(){};function Cw(t){var e=t.getAttribute?t.getAttribute(bo):null;return typeof e=="string"}function $3(t){var e=t.getAttribute?t.getAttribute(iv):null,n=t.getAttribute?t.getAttribute(ov):null;return e&&n}function H3(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(te.replacementClass)}function W3(){if(te.autoReplaceSvg===!0)return $c.replace;var t=$c[te.autoReplaceSvg];return t||$c.replace}function q3(t){return Le.createElementNS("http://www.w3.org/2000/svg",t)}function K3(t){return Le.createElement(t)}function XT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?q3:K3:n;if(typeof t=="string")return Le.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){i.appendChild(XT(s,{ceFn:r}))}),i}function G3(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var $c={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(XT(i),n)}),n.getAttribute(bo)===null&&te.keepOriginalSource){var r=Le.createComment(G3(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~av(n).indexOf(te.replacementClass))return $c.replace(e);var i=new RegExp("".concat(te.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,u){return u===te.replacementClass||u.match(i)?l.toSvg.push(u):l.toNode.push(u),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(l){return su(l)}).join(`
`);n.setAttribute(bo,""),n.innerHTML=s}};function Pw(t){t()}function JT(t,e){var n=typeof e=="function"?e:zc;if(t.length===0)n();else{var r=Pw;te.mutateApproach===Z4&&(r=Pi.requestAnimationFrame||Pw),r(function(){var i=W3(),o=hv.begin("mutate");t.map(i),o(),n()})}}var pv=!1;function ZT(){pv=!0}function sm(){pv=!1}var Md=null;function Rw(t){if(ww&&te.observeMutations){var e=t.treeCallback,n=e===void 0?zc:e,r=t.nodeCallback,i=r===void 0?zc:r,o=t.pseudoElementsCallback,s=o===void 0?zc:o,l=t.observeMutationsRoot,u=l===void 0?Le:l;Md=new ww(function(f){if(!pv){var p=Ri();ea(f).forEach(function(y){if(y.type==="childList"&&y.addedNodes.length>0&&!Cw(y.addedNodes[0])&&(te.searchPseudoElements&&s(y.target),n(y.target)),y.type==="attributes"&&y.target.parentNode&&te.searchPseudoElements&&s(y.target.parentNode),y.type==="attributes"&&Cw(y.target)&&~s3.indexOf(y.attributeName))if(y.attributeName==="class"&&$3(y.target)){var w=bf(av(y.target)),A=w.prefix,x=w.iconName;y.target.setAttribute(iv,A||p),x&&y.target.setAttribute(ov,x)}else H3(y.target)&&i(y.target)})}}),jr&&Md.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Q3(){Md&&Md.disconnect()}function Y3(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),n}function X3(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=bf(av(t));return i.prefix||(i.prefix=Ri()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=C3(i.prefix,t.innerText)||cv(i.prefix,Zp(t.innerText))),!i.iconName&&te.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function J3(t){var e=ea(t.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return te.autoA11y&&(n?e["aria-labelledby"]="".concat(te.replacementClass,"-title-").concat(r||jl()):(e["aria-hidden"]="true",e.focusable="false")),e}function Z3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Qn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=X3(t),r=n.iconName,i=n.prefix,o=n.rest,s=J3(t),l=tm("parseNodeAttributes",{},t),u=e.styleParser?Y3(t):[];return J({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Qn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:u,attributes:s}},l)}var eD=Dn.styles;function eI(t){var e=te.autoReplaceSvg==="nest"?xw(t,{styleParser:!1}):xw(t);return~e.extra.classes.indexOf(MT)?Dr("generateLayersText",t,e):Dr("generateSvgReplacementMutation",t,e)}var xi=new Set;sv.map(function(t){xi.add("fa-".concat(t))});Object.keys(Ml[Ne]).map(xi.add.bind(xi));Object.keys(Ml[We]).map(xi.add.bind(xi));xi=iu(xi);function Ow(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!jr)return Promise.resolve();var n=Le.documentElement.classList,r=function(y){return n.add("".concat(_w,"-").concat(y))},i=function(y){return n.remove("".concat(_w,"-").concat(y))},o=te.autoFetchSvg?xi:sv.map(function(p){return"fa-".concat(p)}).concat(Object.keys(eD));o.includes("fa")||o.push("fa");var s=[".".concat(MT,":not([").concat(bo,"])")].concat(o.map(function(p){return".".concat(p,":not([").concat(bo,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=ea(t.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var u=hv.begin("onTree"),f=l.reduce(function(p,y){try{var w=eI(y);w&&p.push(w)}catch(A){LT||A.name==="MissingIcon"&&console.error(A)}return p},[]);return new Promise(function(p,y){Promise.all(f).then(function(w){JT(w,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),p()})}).catch(function(w){u(),y(w)})})}function tD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;eI(t).then(function(n){n&&JT([n],e)})}function nD(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:nm(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:nm(i||{})),t(r,J(J({},n),{},{mask:i}))}}var rD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Qn:r,o=n.symbol,s=o===void 0?!1:o,l=n.mask,u=l===void 0?null:l,f=n.maskId,p=f===void 0?null:f,y=n.title,w=y===void 0?null:y,A=n.titleId,x=A===void 0?null:A,N=n.classes,M=N===void 0?[]:N,k=n.attributes,T=k===void 0?{}:k,P=n.styles,F=P===void 0?{}:P;if(e){var z=e.prefix,q=e.iconName,S=e.icon;return Sf(J({type:"icon"},e),function(){return So("beforeDOMElementCreation",{iconDefinition:e,params:n}),te.autoA11y&&(w?T["aria-labelledby"]="".concat(te.replacementClass,"-title-").concat(x||jl()):(T["aria-hidden"]="true",T.focusable="false")),fv({icons:{main:rm(S),mask:u?rm(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:q,transform:J(J({},Qn),i),symbol:s,title:w,maskId:p,titleId:x,extra:{attributes:T,styles:F,classes:M}})})}},iD={mixout:function(){return{icon:nD(rD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ow,n.nodeCallback=tD,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Le:r,o=n.callback,s=o===void 0?function(){}:o;return Ow(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,l=r.prefix,u=r.transform,f=r.symbol,p=r.mask,y=r.maskId,w=r.extra;return new Promise(function(A,x){Promise.all([im(i,l),p.iconName?im(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var M=nv(N,2),k=M[0],T=M[1];A([n,fv({icons:{main:k,mask:T},prefix:l,iconName:i,transform:u,symbol:f,maskId:y,title:o,titleId:s,extra:w,watchable:!0})])}).catch(x)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,l=n.styles,u=Tf(l);u.length>0&&(i.style=u);var f;return lv(s)&&(f=Dr("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(f||o.icon),{children:r,attributes:i}}}},oD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Sf({type:"layer"},function(){So("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(l){Array.isArray(l)?l.map(function(u){s=s.concat(u.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(te.cssPrefix,"-layers")].concat(iu(o)).join(" ")},children:s}]})}}}},sD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,l=s===void 0?[]:s,u=r.attributes,f=u===void 0?{}:u,p=r.styles,y=p===void 0?{}:p;return Sf({type:"counter",content:n},function(){return So("beforeDOMElementCreation",{content:n,params:r}),U3({content:n.toString(),title:o,extra:{attributes:f,styles:y,classes:["".concat(te.cssPrefix,"-layers-counter")].concat(iu(l))}})})}}}},aD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Qn:i,s=r.title,l=s===void 0?null:s,u=r.classes,f=u===void 0?[]:u,p=r.attributes,y=p===void 0?{}:p,w=r.styles,A=w===void 0?{}:w;return Sf({type:"text",content:n},function(){return So("beforeDOMElementCreation",{content:n,params:r}),kw({content:n,transform:J(J({},Qn),o),title:l,extra:{attributes:y,styles:A,classes:["".concat(te.cssPrefix,"-layers-text")].concat(iu(f))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,l=null,u=null;if(OT){var f=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();l=p.width/f,u=p.height/f}return te.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,kw({content:n.innerHTML,width:l,height:u,transform:o,title:i,extra:s,watchable:!0})])}}},lD=new RegExp('"',"ug"),Nw=[1105920,1112319];function uD(t){var e=t.replace(lD,""),n=T3(e,0),r=n>=Nw[0]&&n<=Nw[1],i=e.length===2?e[0]===e[1]:!1;return{value:Zp(i?e[0]:e),isSecondary:r||i}}function Dw(t,e){var n="".concat(J4).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var o=ea(t.children),s=o.filter(function(S){return S.getAttribute(Jp)===e})[0],l=Pi.getComputedStyle(t,e),u=l.getPropertyValue("font-family").match(r3),f=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(s&&!u)return t.removeChild(s),r();if(u&&p!=="none"&&p!==""){var y=l.getPropertyValue("content"),w=~["Sharp"].indexOf(u[2])?We:Ne,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?Vl[w][u[2].toLowerCase()]:i3[w][f],x=uD(y),N=x.value,M=x.isSecondary,k=u[0].startsWith("FontAwesome"),T=cv(A,N),P=T;if(k){var F=P3(N);F.iconName&&F.prefix&&(T=F.iconName,A=F.prefix)}if(T&&!M&&(!s||s.getAttribute(iv)!==A||s.getAttribute(ov)!==P)){t.setAttribute(n,P),s&&t.removeChild(s);var z=Z3(),q=z.extra;q.attributes[Jp]=e,im(T,A).then(function(S){var E=fv(J(J({},z),{},{icons:{main:S,mask:dv()},prefix:A,iconName:P,extra:q,watchable:!0})),I=Le.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=E.map(function(C){return su(C)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function cD(t){return Promise.all([Dw(t,"::before"),Dw(t,"::after")])}function dD(t){return t.parentNode!==document.head&&!~e3.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Jp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Lw(t){if(jr)return new Promise(function(e,n){var r=ea(t.querySelectorAll("*")).filter(dD).map(cD),i=hv.begin("searchPseudoElements");ZT(),Promise.all(r).then(function(){i(),sm(),e()}).catch(function(){i(),sm(),n()})})}var fD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Lw,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Le:r;te.searchPseudoElements&&Lw(i)}}},Mw=!1,hD={mixout:function(){return{dom:{unwatch:function(){ZT(),Mw=!0}}}},hooks:function(){return{bootstrap:function(){Rw(tm("mutationObserverCallbacks",{}))},noAuto:function(){Q3()},watch:function(n){var r=n.observeMutationsRoot;Mw?sm():Rw(tm("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Vw=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],l=o.slice(1).join("-");if(s&&l==="h")return r.flipX=!0,r;if(s&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(s){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},pD={mixout:function(){return{parse:{transform:function(n){return Vw(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Vw(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),p="rotate(".concat(i.rotate," 0 0)"),y={transform:"".concat(u," ").concat(f," ").concat(p)},w={transform:"translate(".concat(s/2*-1," -256)")},A={outer:l,inner:y,path:w};return{tag:"g",attributes:J({},A.outer),children:[{tag:"g",attributes:J({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:J(J({},r.icon.attributes),A.path)}]}]}}}},Rh={x:0,y:0,width:"100%",height:"100%"};function Fw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function mD(t){return t.tag==="g"?t.children:[t]}var gD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?bf(i.split(" ").map(function(s){return s.trim()})):dv();return o.prefix||(o.prefix=Ri()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,l=n.maskId,u=n.transform,f=o.width,p=o.icon,y=s.width,w=s.icon,A=m3({transform:u,containerWidth:y,iconWidth:f}),x={tag:"rect",attributes:J(J({},Rh),{},{fill:"white"})},N=p.children?{children:p.children.map(Fw)}:{},M={tag:"g",attributes:J({},A.inner),children:[Fw(J({tag:p.tag,attributes:J(J({},p.attributes),A.path)},N))]},k={tag:"g",attributes:J({},A.outer),children:[M]},T="mask-".concat(l||jl()),P="clip-".concat(l||jl()),F={tag:"mask",attributes:J(J({},Rh),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,k]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:mD(w)},F]};return r.push(z,{tag:"rect",attributes:J({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(T,")")},Rh)}),{children:r,attributes:i}}}},vD={provides:function(e){var n=!1;Pi.matchMedia&&(n=Pi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:J(J({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=J(J({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:J(J({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:J(J({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:J(J({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:J(J({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:J(J({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:J(J({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:J(J({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},yD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},wD=[y3,iD,oD,sD,aD,fD,hD,pD,gD,vD,yD];O3(wD,{mixoutsTo:un});un.noAuto;un.config;un.library;un.dom;var am=un.parse;un.findIconDefinition;un.toHtml;var _D=un.icon;un.layer;un.text;un.counter;var tI={exports:{}},ED="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",TD=ED,ID=TD;function nI(){}function rI(){}rI.resetWarningCache=nI;var bD=function(){function t(r,i,o,s,l,u){if(u!==ID){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:rI,resetWarningCache:nI};return n.PropTypes=n,n};tI.exports=bD();var iI=tI.exports;const fe=hm(iI);function Uw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Kn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Uw(Object(n),!0).forEach(function(r){ms(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Uw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Vd(t){"@babel/helpers - typeof";return Vd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vd(t)}function ms(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function SD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kD(t,e){if(t==null)return{};var n=SD(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function lm(t){return AD(t)||CD(t)||PD(t)||RD()}function AD(t){if(Array.isArray(t))return um(t)}function CD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function PD(t,e){if(t){if(typeof t=="string")return um(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return um(t,e)}}function um(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function RD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,l=t.flash,u=t.spin,f=t.spinPulse,p=t.spinReverse,y=t.pulse,w=t.fixedWidth,A=t.inverse,x=t.border,N=t.listItem,M=t.flip,k=t.size,T=t.rotation,P=t.pull,F=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":p,"fa-spin-pulse":f,"fa-pulse":y,"fa-fw":w,"fa-inverse":A,"fa-border":x,"fa-li":N,"fa-flip":M===!0,"fa-flip-horizontal":M==="horizontal"||M==="both","fa-flip-vertical":M==="vertical"||M==="both"},ms(e,"fa-".concat(k),typeof k<"u"&&k!==null),ms(e,"fa-rotate-".concat(T),typeof T<"u"&&T!==null&&T!==0),ms(e,"fa-pull-".concat(P),typeof P<"u"&&P!==null),ms(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(F).map(function(z){return F[z]?z:null}).filter(function(z){return z})}function OD(t){return t=t-0,t===t}function oI(t){return OD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ND=["style"];function DD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function LD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=oI(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[DD(i)]=o:e[i]=o,e},{})}function sI(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return sI(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,f){var p=e.attributes[f];switch(f){case"class":u.attrs.className=p,delete e.attributes.class;break;case"style":u.attrs.style=LD(p);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=p:u.attrs[oI(f)]=p}return u},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=kD(n,ND);return i.attrs.style=Kn(Kn({},i.attrs.style),s),t.apply(void 0,[e.tag,Kn(Kn({},i.attrs),l)].concat(lm(r)))}var aI=!1;try{aI=!0}catch{}function MD(){if(!aI&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function jw(t){if(t&&Vd(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(am.icon)return am.icon(t);if(t===null)return null;if(t&&Vd(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function xh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ms({},t,e):{}}var Bw={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},gs=Ud.forwardRef(function(t,e){var n=Kn(Kn({},Bw),t),r=n.icon,i=n.mask,o=n.symbol,s=n.className,l=n.title,u=n.titleId,f=n.maskId,p=jw(r),y=xh("classes",[].concat(lm(xD(n)),lm((s||"").split(" ")))),w=xh("transform",typeof n.transform=="string"?am.transform(n.transform):n.transform),A=xh("mask",jw(i)),x=_D(p,Kn(Kn(Kn(Kn({},y),w),A),{},{symbol:o,title:l,titleId:u,maskId:f}));if(!x)return MD("Could not find icon",p),null;var N=x.abstract,M={ref:e};return Object.keys(n).forEach(function(k){Bw.hasOwnProperty(k)||(M[k]=n[k])}),VD(N[0],M)});gs.displayName="FontAwesomeIcon";gs.propTypes={beat:fe.bool,border:fe.bool,beatFade:fe.bool,bounce:fe.bool,className:fe.string,fade:fe.bool,flash:fe.bool,mask:fe.oneOfType([fe.object,fe.array,fe.string]),maskId:fe.string,fixedWidth:fe.bool,inverse:fe.bool,flip:fe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:fe.oneOfType([fe.object,fe.array,fe.string]),listItem:fe.bool,pull:fe.oneOf(["right","left"]),pulse:fe.bool,rotation:fe.oneOf([0,90,180,270]),shake:fe.bool,size:fe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:fe.bool,spinPulse:fe.bool,spinReverse:fe.bool,symbol:fe.oneOfType([fe.bool,fe.string]),title:fe.string,titleId:fe.string,transform:fe.oneOfType([fe.string,fe.object]),swapOpacity:fe.bool};var VD=sI.bind(null,Ud.createElement),FD={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]},UD={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},jD={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},BD={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},zD={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};const $D="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2048%2048'%3e%3cpath%20fill='%23FFC107'%20d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'%3e%3c/path%3e%3cpath%20fill='%23FF3D00'%20d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'%3e%3c/path%3e%3cpath%20fill='%234CAF50'%20d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'%3e%3c/path%3e%3cpath%20fill='%231976D2'%20d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'%3e%3c/path%3e%3c/svg%3e",Oa=lf(nf),zw=Jg(nf),HD=()=>{const[t,e]=X.useState(!1),[n,r]=X.useState(!1),[i,o]=X.useState(!1),s=Sg();X.useEffect(()=>{const p=_g(Oa,y=>{y&&s("/")});return()=>p()},[s]);const l=async p=>{p.preventDefault();const y=p.target.email.value,w=p.target.password.value,A=t?p.target.name.value:null;try{if(t){const N=(await vP(Oa,y,w)).user;await Qp(Od(zw,"users",N.uid),{name:A,email:y}),Yi.fire({icon:"success",title:"Registro exitoso",showConfirmButton:!1,timer:1500})}else await yP(Oa,y,w),Yi.fire("Inicio de sesión exitoso");s("/")}catch(x){console.error("Error en la autenticación",x),Yi.fire(`Error en la autenticación: ${x.message}`)}},u=async p=>{p.preventDefault();const y=p.target.email.value;try{await gP(Oa,y),Yi.fire("Se ha enviado un correo para restablecer tu contraseña")}catch(w){console.error("Error al enviar el correo de restablecimiento",w),Yi.fire("Error al enviar el correo de restablecimiento")}},f=async()=>{const p=new gr;try{const w=(await BP(Oa,p)).user;await Qp(Od(zw,"users",w.uid),{name:w.displayName,email:w.email}),Yi.fire("Inicio de sesión con Google exitoso"),s("/")}catch(y){console.error("Error en el inicio de sesión con Google:",y),Yi.fire(`Error en el inicio de sesión con Google: ${y.message}`)}};return j.jsx(j.Fragment,{children:j.jsxs("div",{className:"login_container",children:[j.jsxs("div",{className:"login_visual",children:[j.jsx("div",{className:"login_assets",children:"Drawy Downloader"}),j.jsx("p",{className:"login_dist",children:"Drawy is an application developed to download YouTube videos totally free. It has a fairly simple and easy-to-use interface."}),j.jsx("img",{src:j4,alt:""})]}),j.jsxs("div",{className:"login_banner",children:[j.jsx("img",{src:ST,alt:"IconDownload",className:"iconName"}),j.jsx("h2",{className:"login_name",children:"Drawy"}),j.jsx("p",{className:"login_title",children:n?"Reset Password":t?"Sign up to enable access to Tracker":"Sign in to access your account"}),j.jsxs("form",{className:"login_form",onSubmit:n?u:l,children:[t&&!n&&j.jsxs("div",{className:"input_field",children:[j.jsx("i",{children:j.jsx(gs,{icon:jD})}),j.jsx("input",{type:"text",placeholder:"Name",className:"input",id:"name",name:"name"})]}),j.jsxs("div",{className:"input_field",children:[j.jsx("i",{children:j.jsx(gs,{icon:zD})}),j.jsx("input",{type:"email",placeholder:"Email",className:"input",id:"email",name:"email"})]}),!n&&j.jsxs("div",{className:"input_field",children:[j.jsx("i",{children:j.jsx(gs,{icon:FD})}),j.jsx("input",{type:i?"text":"password",placeholder:"Password",className:"input",id:"password",name:"password"}),j.jsx("i",{className:"password_view",onClick:()=>o(!i),children:j.jsx(gs,{icon:i?UD:BD})})]}),j.jsx("div",{className:"login_reset",children:!n&&j.jsxs(j.Fragment,{children:[j.jsxs("h4",{children:[j.jsx("input",{type:"checkbox"})," Remember me"]}),j.jsx("a",{href:"#",onClick:p=>{p.preventDefault(),r(!0)},children:"Forgot Password"})]})}),j.jsx("button",{type:"submit",className:"input_submit submitInit",children:n?"Send Reset Email":t?"Sign Up":"Sign In"})]}),!n&&j.jsxs(j.Fragment,{children:[j.jsxs("button",{onClick:f,className:"google",children:[" ",j.jsx("img",{src:$D,className:"iconGoogle",alt:""})," Sign In with Google"]}),j.jsxs("h4",{className:"sign_save",children:[t?"Already have an account?  ":"Don't have an account?  ",j.jsx("button",{className:"btn_login",onClick:()=>e(!t),children:t?"Sign In":"Sign Up"})]})]}),n&&j.jsx("button",{onClick:()=>r(!1),className:"button_reset",children:"Back to Login"})]})]})})};var mv={};Object.defineProperty(mv,"__esModule",{value:!0});var lI=mv.PayPalButton=void 0,Oh=gv(X),WD=gv(r2),he=gv(iI);function gv(t){return t&&t.__esModule?t:{default:t}}function Hc(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Hc=function(n){return typeof n}:Hc=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Hc(t)}function cm(){return cm=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cm.apply(this,arguments)}function qD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function KD(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function GD(t,e,n){return e&&KD(t.prototype,e),t}function QD(t,e){return e&&(Hc(e)==="object"||typeof e=="function")?e:YD(t)}function YD(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function dm(t){return dm=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},dm(t)}function XD(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&fm(t,e)}function fm(t,e){return fm=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},fm(t,e)}function uI(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var vv=function(t){XD(e,t);function e(n){var r;return qD(this,e),r=QD(this,dm(e).call(this,n)),r.state={isSdkReady:!1},r}return GD(e,[{key:"componentDidMount",value:function(){typeof window<"u"&&window!==void 0&&window.paypal===void 0?this.addPaypalSdk():typeof window<"u"&&window!==void 0&&window.paypal!==void 0&&this.props.onButtonReady&&this.props.onButtonReady()}},{key:"createOrder",value:function(r,i){var o=this.props,s=o.currency,l=o.options,u=o.amount,f=o.shippingPreference;return i.order.create({purchase_units:[{amount:{currency_code:s||(l&&l.currency?l.currency:"USD"),value:u.toString()}}],application_context:{shipping_preference:f}})}},{key:"onApprove",value:function(r,i){var o=this;return i.order.capture().then(function(s){if(o.props.onSuccess)return o.props.onSuccess(s,r)}).catch(function(s){if(o.props.catchError)return o.props.catchError(s)})}},{key:"render",value:function(){var r=this,i=this.props,o=i.amount,s=i.onSuccess,l=i.createOrder,u=i.createSubscription,f=i.onApprove,p=i.style,y=this.state.isSdkReady;if(!y&&(typeof window>"u"||window.paypal===void 0))return null;var w=window.paypal.Buttons.driver("react",{React:Oh.default,ReactDOM:WD.default}),A=o&&!l?function(x,N){return r.createOrder(x,N)}:function(x,N){return l(x,N)};return Oh.default.createElement(w,cm({},this.props,{createOrder:u?void 0:A,createSubscription:u,onApprove:s?function(x,N){return r.onApprove(x,N)}:function(x,N){return f(x,N)},style:p}))}},{key:"addPaypalSdk",value:function(){var r=this,i=this.props,o=i.options,s=i.onButtonReady,l=[];Object.keys(o).forEach(function(f){var p=f.split(/(?=[A-Z])/).join("-").toLowerCase();l.push("".concat(p,"=").concat(o[f]))});var u=document.createElement("script");u.type="text/javascript",u.src="https://www.paypal.com/sdk/js?".concat(l.join("&")),u.async=!0,u.onload=function(){r.setState({isSdkReady:!0}),s&&s()},u.onerror=function(){throw new Error("Paypal SDK could not be loaded.")},document.body.appendChild(u)}}]),e}(Oh.default.Component);lI=mv.PayPalButton=vv;uI(vv,"propTypes",{amount:he.default.oneOfType([he.default.number,he.default.string]),currency:he.default.oneOfType([he.default.number,he.default.string]),shippingPreference:he.default.string,onSuccess:he.default.func,catchError:he.default.func,onError:he.default.func,createOrder:he.default.func,createSubscription:he.default.func,onApprove:he.default.func,style:he.default.object,options:he.default.shape({clientId:he.default.string,merchantId:he.default.string,currency:he.default.oneOfType([he.default.number,he.default.string]),intent:he.default.string,commit:he.default.oneOfType([he.default.bool,he.default.string]),vault:he.default.oneOfType([he.default.bool,he.default.string]),component:he.default.string,disableFunding:he.default.string,disableCard:he.default.string,integrationDate:he.default.string,locale:he.default.string,buyerCountry:he.default.string,debug:he.default.oneOfType([he.default.bool,he.default.string])}),onButtonReady:he.default.func});uI(vv,"defaultProps",{style:{},options:{clientId:"sb",currency:"USD"},shippingPreference:"GET_FROM_FILE"});const $w=lf(),Hw=Jg(),JD=()=>{const[t,e]=X.useState(null),[n,r]=X.useState("Free"),[i,o]=X.useState(null),[s,l]=X.useState(!1),u=Sg();X.useEffect(()=>{const w=_g($w,async A=>{if(A){e(A);const x=Od(Hw,"users",A.uid),N=await P4(x);N.exists()?r(N.data().subscription||"Free"):r("Free")}else u("/login")});return()=>w()},[u]);const f=async()=>{try{await V2($w),u("/login")}catch(w){console.error("Error al cerrar sesión:",w)}},p=w=>{o(w),l(!0)},y=async()=>{r(i);const w=Od(Hw,"users",t.uid);await Qp(w,{subscription:i},{merge:!0}),l(!1)};return j.jsxs("div",{className:"profile-info",children:[j.jsx(kT,{}),j.jsxs("div",{className:"profile",children:[j.jsx("img",{src:t==null?void 0:t.photoURL,alt:"Profile"}),j.jsx("p",{children:(t==null?void 0:t.displayName)||"Usuario"}),j.jsx("p",{children:t==null?void 0:t.email}),j.jsxs("p",{children:["Suscripción: ",n]}),j.jsx("button",{onClick:f,children:"Cerrar sesión"})]}),j.jsxs("div",{className:"memberships",children:[j.jsx("h3",{children:"Elige tu Membresía"}),j.jsxs("div",{className:"membership",children:[j.jsx("h4",{children:"Premium"}),j.jsx("p",{children:"$1/mes"}),j.jsx("button",{onClick:()=>p("Premium"),children:"Comprar"})]}),j.jsxs("div",{className:"membership",children:[j.jsx("h4",{children:"Gold"}),j.jsx("p",{children:"$3/mes"}),j.jsx("button",{onClick:()=>p("Gold"),children:"Comprar"})]}),j.jsxs("div",{className:"membership",children:[j.jsx("h4",{children:"Diamante"}),j.jsx("p",{children:"$5/mes"}),j.jsx("button",{onClick:()=>p("Diamante"),children:"Comprar"})]}),s&&j.jsx("div",{className:"modal-overlay",children:j.jsxs("div",{className:"modal-content",children:[j.jsx("span",{className:"modal-close",onClick:()=>l(!1),children:"×"}),j.jsx("h3",{children:"Proceder al Pago"}),j.jsxs("p",{children:["Membresía seleccionada: ",i]}),j.jsx(lI,{amount:i==="Premium"?"1.00":i==="Gold"?"3.00":i==="Diamante"?"5.00":"0.00",onSuccess:(w,A)=>{alert("Pago completado por PayPal"),y()},options:{clientId:"AdgxAW2HZC5B-yzBWZKimJnJH8W5r-PwL5_lppQOw1w43p_mlpg5FzCDl2trocXC23YuwZhhjyiJIOEf",disableFunding:"card"}})]})})]})]})},ZD=()=>j.jsx(bx,{children:j.jsxs(Ex,{children:[j.jsx(Ua,{path:"/",element:j.jsx(F4,{})}),j.jsx(Ua,{path:"/login",element:j.jsx(HD,{})}),j.jsx(Ua,{path:"/profile",element:j.jsx(JD,{})}),j.jsx(Ua,{path:"*",element:j.jsx(U4,{})})]})}),e5=lf(nf);function t5(){const[t,e]=X.useState(null);return X.useEffect(()=>{const n=_g(e5,r=>{e(r||null)});return()=>n()},[]),j.jsx("div",{children:j.jsx(ZD,{})})}Nh.createRoot(document.getElementById("root")).render(j.jsx(Ud.StrictMode,{children:j.jsx(t5,{})}));
