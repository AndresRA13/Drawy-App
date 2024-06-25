function VI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z0={exports:{}},Ef={},$0={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bl=Symbol.for("react.element"),FI=Symbol.for("react.portal"),UI=Symbol.for("react.fragment"),jI=Symbol.for("react.strict_mode"),BI=Symbol.for("react.profiler"),zI=Symbol.for("react.provider"),$I=Symbol.for("react.context"),HI=Symbol.for("react.forward_ref"),WI=Symbol.for("react.suspense"),qI=Symbol.for("react.memo"),GI=Symbol.for("react.lazy"),Kg=Symbol.iterator;function KI(t){return t===null||typeof t!="object"?null:(t=Kg&&t[Kg]||t["@@iterator"],typeof t=="function"?t:null)}var H0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W0=Object.assign,q0={};function Os(t,e,n){this.props=t,this.context=e,this.refs=q0,this.updater=n||H0}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function G0(){}G0.prototype=Os.prototype;function Vp(t,e,n){this.props=t,this.context=e,this.refs=q0,this.updater=n||H0}var Fp=Vp.prototype=new G0;Fp.constructor=Vp;W0(Fp,Os.prototype);Fp.isPureReactComponent=!0;var Qg=Array.isArray,K0=Object.prototype.hasOwnProperty,Up={current:null},Q0={key:!0,ref:!0,__self:!0,__source:!0};function Y0(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)K0.call(e,r)&&!Q0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),h=0;h<l;h++)c[h]=arguments[h+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:bl,type:t,key:o,ref:s,props:i,_owner:Up.current}}function QI(t,e){return{$$typeof:bl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jp(t){return typeof t=="object"&&t!==null&&t.$$typeof===bl}function YI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yg=/\/+/g;function Id(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YI(""+t.key):e.toString(36)}function ic(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case bl:case FI:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Id(s,0):r,Qg(i)?(n="",t!=null&&(n=t.replace(Yg,"$&/")+"/"),ic(i,e,n,"",function(h){return h})):i!=null&&(jp(i)&&(i=QI(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Yg,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Qg(t))for(var l=0;l<t.length;l++){o=t[l];var c=r+Id(o,l);s+=ic(o,e,n,c,i)}else if(c=KI(t),typeof c=="function")for(t=c.call(t),l=0;!(o=t.next()).done;)o=o.value,c=r+Id(o,l++),s+=ic(o,e,n,c,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ku(t,e,n){if(t==null)return t;var r=[],i=0;return ic(t,r,"","",function(o){return e.call(n,o,i++)}),r}function XI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},oc={transition:null},JI={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:oc,ReactCurrentOwner:Up};function X0(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:ku,forEach:function(t,e,n){ku(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ku(t,function(){e++}),e},toArray:function(t){return ku(t,function(e){return e})||[]},only:function(t){if(!jp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=Os;ce.Fragment=UI;ce.Profiler=BI;ce.PureComponent=Vp;ce.StrictMode=jI;ce.Suspense=WI;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JI;ce.act=X0;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=W0({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Up.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)K0.call(e,c)&&!Q0.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var h=0;h<c;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:bl,type:t.type,key:i,ref:o,props:r,_owner:s}};ce.createContext=function(t){return t={$$typeof:$I,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zI,_context:t},t.Consumer=t};ce.createElement=Y0;ce.createFactory=function(t){var e=Y0.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:HI,render:t}};ce.isValidElement=jp;ce.lazy=function(t){return{$$typeof:GI,_payload:{_status:-1,_result:t},_init:XI}};ce.memo=function(t,e){return{$$typeof:qI,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=oc.transition;oc.transition={};try{t()}finally{oc.transition=e}};ce.unstable_act=X0;ce.useCallback=function(t,e){return Vt.current.useCallback(t,e)};ce.useContext=function(t){return Vt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Vt.current.useEffect(t,e)};ce.useId=function(){return Vt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Vt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Vt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Vt.current.useReducer(t,e,n)};ce.useRef=function(t){return Vt.current.useRef(t)};ce.useState=function(t){return Vt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Vt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Vt.current.useTransition()};ce.version="18.3.1";$0.exports=ce;var Z=$0.exports;const If=Mp(Z),ZI=VI({__proto__:null,default:If},[Z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eT=Z,tT=Symbol.for("react.element"),nT=Symbol.for("react.fragment"),rT=Object.prototype.hasOwnProperty,iT=eT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oT={key:!0,ref:!0,__self:!0,__source:!0};function J0(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)rT.call(e,r)&&!oT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tT,type:t,key:o,ref:s,props:i,_owner:iT.current}}Ef.Fragment=nT;Ef.jsx=J0;Ef.jsxs=J0;z0.exports=Ef;var J=z0.exports,ch={},Z0={exports:{}},rn={},ew={exports:{}},tw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(Q,q){var oe=Q.length;Q.push(q);e:for(;0<oe;){var ke=oe-1>>>1,we=Q[ke];if(0<i(we,q))Q[ke]=q,Q[oe]=we,oe=ke;else break e}}function n(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var q=Q[0],oe=Q.pop();if(oe!==q){Q[0]=oe;e:for(var ke=0,we=Q.length,De=we>>>1;ke<De;){var V=2*(ke+1)-1,wn=Q[V],jt=V+1,an=Q[jt];if(0>i(wn,oe))jt<we&&0>i(an,wn)?(Q[ke]=an,Q[jt]=oe,ke=jt):(Q[ke]=wn,Q[V]=oe,ke=V);else if(jt<we&&0>i(an,oe))Q[ke]=an,Q[jt]=oe,ke=jt;else break e}}return q}function i(Q,q){var oe=Q.sortIndex-q.sortIndex;return oe!==0?oe:Q.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],h=[],v=1,y=null,E=3,R=!1,O=!1,L=!1,M=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(Q){for(var q=n(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=Q)r(h),q.sortIndex=q.expirationTime,e(c,q);else break;q=n(h)}}function U(Q){if(L=!1,P(Q),!O)if(n(c)!==null)O=!0,Ne(B);else{var q=n(h);q!==null&&Kt(U,q.startTime-Q)}}function B(Q,q){O=!1,L&&(L=!1,k(_),_=-1),R=!0;var oe=E;try{for(P(q),y=n(c);y!==null&&(!(y.expirationTime>q)||Q&&!x());){var ke=y.callback;if(typeof ke=="function"){y.callback=null,E=y.priorityLevel;var we=ke(y.expirationTime<=q);q=t.unstable_now(),typeof we=="function"?y.callback=we:y===n(c)&&r(c),P(q)}else r(c);y=n(c)}if(y!==null)var De=!0;else{var V=n(h);V!==null&&Kt(U,V.startTime-q),De=!1}return De}finally{y=null,E=oe,R=!1}}var W=!1,S=null,_=-1,T=5,C=-1;function x(){return!(t.unstable_now()-C<T)}function D(){if(S!==null){var Q=t.unstable_now();C=Q;var q=!0;try{q=S(!0,Q)}finally{q?A():(W=!1,S=null)}}else W=!1}var A;if(typeof I=="function")A=function(){I(D)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,Xn=Ut.port2;Ut.port1.onmessage=D,A=function(){Xn.postMessage(null)}}else A=function(){M(D,0)};function Ne(Q){S=Q,W||(W=!0,A())}function Kt(Q,q){_=M(function(){Q(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Q){Q.callback=null},t.unstable_continueExecution=function(){O||R||(O=!0,Ne(B))},t.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<Q?Math.floor(1e3/Q):5},t.unstable_getCurrentPriorityLevel=function(){return E},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(Q){switch(E){case 1:case 2:case 3:var q=3;break;default:q=E}var oe=E;E=q;try{return Q()}finally{E=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(Q,q){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var oe=E;E=Q;try{return q()}finally{E=oe}},t.unstable_scheduleCallback=function(Q,q,oe){var ke=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?ke+oe:ke):oe=ke,Q){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=oe+we,Q={id:v++,callback:q,priorityLevel:Q,startTime:oe,expirationTime:we,sortIndex:-1},oe>ke?(Q.sortIndex=oe,e(h,Q),n(c)===null&&Q===n(h)&&(L?(k(_),_=-1):L=!0,Kt(U,oe-ke))):(Q.sortIndex=we,e(c,Q),O||R||(O=!0,Ne(B))),Q},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(Q){var q=E;return function(){var oe=E;E=q;try{return Q.apply(this,arguments)}finally{E=oe}}}})(tw);ew.exports=tw;var sT=ew.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aT=Z,tn=sT;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nw=new Set,Ha={};function wo(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(Ha[t]=e,t=0;t<e.length;t++)nw.add(e[t])}var _r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fh=Object.prototype.hasOwnProperty,lT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xg={},Jg={};function uT(t){return fh.call(Jg,t)?!0:fh.call(Xg,t)?!1:lT.test(t)?Jg[t]=!0:(Xg[t]=!0,!1)}function cT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fT(t,e,n,r){if(e===null||typeof e>"u"||cT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bp=/[\-:]([a-z])/g;function zp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bp,zp);_t[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bp,zp);_t[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bp,zp);_t[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function $p(t,e,n,r){var i=_t.hasOwnProperty(e)?_t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fT(e,n,i,r)&&(n=null),r||i===null?uT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pr=aT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cu=Symbol.for("react.element"),Wo=Symbol.for("react.portal"),qo=Symbol.for("react.fragment"),Hp=Symbol.for("react.strict_mode"),dh=Symbol.for("react.profiler"),rw=Symbol.for("react.provider"),iw=Symbol.for("react.context"),Wp=Symbol.for("react.forward_ref"),hh=Symbol.for("react.suspense"),ph=Symbol.for("react.suspense_list"),qp=Symbol.for("react.memo"),Qr=Symbol.for("react.lazy"),ow=Symbol.for("react.offscreen"),Zg=Symbol.iterator;function ua(t){return t===null||typeof t!="object"?null:(t=Zg&&t[Zg]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,Td;function _a(t){if(Td===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Td=e&&e[1]||""}return`
`+Td+t}var bd=!1;function Sd(t,e){if(!t||bd)return"";bd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{bd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_a(t):""}function dT(t){switch(t.tag){case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return t=Sd(t.type,!1),t;case 11:return t=Sd(t.type.render,!1),t;case 1:return t=Sd(t.type,!0),t;default:return""}}function mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qo:return"Fragment";case Wo:return"Portal";case dh:return"Profiler";case Hp:return"StrictMode";case hh:return"Suspense";case ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case iw:return(t.displayName||"Context")+".Consumer";case rw:return(t._context.displayName||"Context")+".Provider";case Wp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qp:return e=t.displayName||null,e!==null?e:mh(t.type)||"Memo";case Qr:e=t._payload,t=t._init;try{return mh(t(e))}catch{}}return null}function hT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mh(e);case 8:return e===Hp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pT(t){var e=sw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Au(t){t._valueTracker||(t._valueTracker=pT(t))}function aw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=sw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gh(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ev(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lw(t,e){e=e.checked,e!=null&&$p(t,"checked",e,!1)}function vh(t,e){lw(t,e);var n=gi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yh(t,e.type,n):e.hasOwnProperty("defaultValue")&&yh(t,e.type,gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yh(t,e,n){(e!=="number"||kc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ea=Array.isArray;function as(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Ea(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gi(n)}}function uw(t,e){var n=gi(e.value),r=gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pu,fw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pu=Pu||document.createElement("div"),Pu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mT=["Webkit","ms","Moz","O"];Object.keys(Aa).forEach(function(t){mT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Aa[e]=Aa[t]})});function dw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Aa.hasOwnProperty(t)&&Aa[t]?(""+e).trim():e+"px"}function hw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gT=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eh(t,e){if(e){if(gT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Ih(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Th=null;function Gp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bh=null,ls=null,us=null;function iv(t){if(t=Cl(t)){if(typeof bh!="function")throw Error($(280));var e=t.stateNode;e&&(e=Cf(e),bh(t.stateNode,t.type,e))}}function pw(t){ls?us?us.push(t):us=[t]:ls=t}function mw(){if(ls){var t=ls,e=us;if(us=ls=null,iv(t),e)for(t=0;t<e.length;t++)iv(e[t])}}function gw(t,e){return t(e)}function vw(){}var kd=!1;function yw(t,e,n){if(kd)return t(e,n);kd=!0;try{return gw(t,e,n)}finally{kd=!1,(ls!==null||us!==null)&&(vw(),mw())}}function qa(t,e){var n=t.stateNode;if(n===null)return null;var r=Cf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var Sh=!1;if(_r)try{var ca={};Object.defineProperty(ca,"passive",{get:function(){Sh=!0}}),window.addEventListener("test",ca,ca),window.removeEventListener("test",ca,ca)}catch{Sh=!1}function vT(t,e,n,r,i,o,s,l,c){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(v){this.onError(v)}}var Pa=!1,Cc=null,Ac=!1,kh=null,yT={onError:function(t){Pa=!0,Cc=t}};function wT(t,e,n,r,i,o,s,l,c){Pa=!1,Cc=null,vT.apply(yT,arguments)}function _T(t,e,n,r,i,o,s,l,c){if(wT.apply(this,arguments),Pa){if(Pa){var h=Cc;Pa=!1,Cc=null}else throw Error($(198));Ac||(Ac=!0,kh=h)}}function _o(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ww(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ov(t){if(_o(t)!==t)throw Error($(188))}function ET(t){var e=t.alternate;if(!e){if(e=_o(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ov(i),t;if(o===r)return ov(i),e;o=o.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function _w(t){return t=ET(t),t!==null?Ew(t):null}function Ew(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ew(t);if(e!==null)return e;t=t.sibling}return null}var Iw=tn.unstable_scheduleCallback,sv=tn.unstable_cancelCallback,IT=tn.unstable_shouldYield,TT=tn.unstable_requestPaint,$e=tn.unstable_now,bT=tn.unstable_getCurrentPriorityLevel,Kp=tn.unstable_ImmediatePriority,Tw=tn.unstable_UserBlockingPriority,Pc=tn.unstable_NormalPriority,ST=tn.unstable_LowPriority,bw=tn.unstable_IdlePriority,Tf=null,Gn=null;function kT(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(Tf,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:PT,CT=Math.log,AT=Math.LN2;function PT(t){return t>>>=0,t===0?32:31-(CT(t)/AT|0)|0}var Ru=64,xu=4194304;function Ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Ia(l):(o&=s,o!==0&&(r=Ia(o)))}else s=n&~i,s!==0?r=Ia(s):o!==0&&(r=Ia(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-On(e),i=1<<n,r|=t[n],e&=~i;return r}function RT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-On(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=RT(l,e)):c<=e&&(t.expiredLanes|=l),o&=~l}}function Ch(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sw(){var t=Ru;return Ru<<=1,!(Ru&4194240)&&(Ru=64),t}function Cd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function OT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-On(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Qp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-On(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ee=0;function kw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cw,Yp,Aw,Pw,Rw,Ah=!1,Ou=[],oi=null,si=null,ai=null,Ga=new Map,Ka=new Map,Xr=[],NT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function av(t,e){switch(t){case"focusin":case"focusout":oi=null;break;case"dragenter":case"dragleave":si=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":Ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(e.pointerId)}}function fa(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Cl(e),e!==null&&Yp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DT(t,e,n,r,i){switch(e){case"focusin":return oi=fa(oi,t,e,n,r,i),!0;case"dragenter":return si=fa(si,t,e,n,r,i),!0;case"mouseover":return ai=fa(ai,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ga.set(o,fa(Ga.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ka.set(o,fa(Ka.get(o)||null,t,e,n,r,i)),!0}return!1}function xw(t){var e=qi(t.target);if(e!==null){var n=_o(e);if(n!==null){if(e=n.tag,e===13){if(e=ww(n),e!==null){t.blockedOn=e,Rw(t.priority,function(){Aw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ph(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Th=r,n.target.dispatchEvent(r),Th=null}else return e=Cl(n),e!==null&&Yp(e),t.blockedOn=n,!1;e.shift()}return!0}function lv(t,e,n){sc(t)&&n.delete(e)}function LT(){Ah=!1,oi!==null&&sc(oi)&&(oi=null),si!==null&&sc(si)&&(si=null),ai!==null&&sc(ai)&&(ai=null),Ga.forEach(lv),Ka.forEach(lv)}function da(t,e){t.blockedOn===e&&(t.blockedOn=null,Ah||(Ah=!0,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,LT)))}function Qa(t){function e(i){return da(i,t)}if(0<Ou.length){da(Ou[0],t);for(var n=1;n<Ou.length;n++){var r=Ou[n];r.blockedOn===t&&(r.blockedOn=null)}}for(oi!==null&&da(oi,t),si!==null&&da(si,t),ai!==null&&da(ai,t),Ga.forEach(e),Ka.forEach(e),n=0;n<Xr.length;n++)r=Xr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xr.length&&(n=Xr[0],n.blockedOn===null);)xw(n),n.blockedOn===null&&Xr.shift()}var cs=Pr.ReactCurrentBatchConfig,xc=!0;function MT(t,e,n,r){var i=Ee,o=cs.transition;cs.transition=null;try{Ee=1,Xp(t,e,n,r)}finally{Ee=i,cs.transition=o}}function VT(t,e,n,r){var i=Ee,o=cs.transition;cs.transition=null;try{Ee=4,Xp(t,e,n,r)}finally{Ee=i,cs.transition=o}}function Xp(t,e,n,r){if(xc){var i=Ph(t,e,n,r);if(i===null)Vd(t,e,r,Oc,n),av(t,r);else if(DT(i,t,e,n,r))r.stopPropagation();else if(av(t,r),e&4&&-1<NT.indexOf(t)){for(;i!==null;){var o=Cl(i);if(o!==null&&Cw(o),o=Ph(t,e,n,r),o===null&&Vd(t,e,r,Oc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Vd(t,e,r,null,n)}}var Oc=null;function Ph(t,e,n,r){if(Oc=null,t=Gp(r),t=qi(t),t!==null)if(e=_o(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ww(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oc=t,null}function Ow(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bT()){case Kp:return 1;case Tw:return 4;case Pc:case ST:return 16;case bw:return 536870912;default:return 16}default:return 16}}var ni=null,Jp=null,ac=null;function Nw(){if(ac)return ac;var t,e=Jp,n=e.length,r,i="value"in ni?ni.value:ni.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return ac=i.slice(t,1<r?1-r:void 0)}function lc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nu(){return!0}function uv(){return!1}function on(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Nu:uv,this.isPropagationStopped=uv,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nu)},persist:function(){},isPersistent:Nu}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zp=on(Ns),kl=Fe({},Ns,{view:0,detail:0}),FT=on(kl),Ad,Pd,ha,bf=Fe({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:em,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ha&&(ha&&t.type==="mousemove"?(Ad=t.screenX-ha.screenX,Pd=t.screenY-ha.screenY):Pd=Ad=0,ha=t),Ad)},movementY:function(t){return"movementY"in t?t.movementY:Pd}}),cv=on(bf),UT=Fe({},bf,{dataTransfer:0}),jT=on(UT),BT=Fe({},kl,{relatedTarget:0}),Rd=on(BT),zT=Fe({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),$T=on(zT),HT=Fe({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WT=on(HT),qT=Fe({},Ns,{data:0}),fv=on(qT),GT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QT[t])?!!e[t]:!1}function em(){return YT}var XT=Fe({},kl,{key:function(t){if(t.key){var e=GT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:em,charCode:function(t){return t.type==="keypress"?lc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JT=on(XT),ZT=Fe({},bf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dv=on(ZT),eb=Fe({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:em}),tb=on(eb),nb=Fe({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),rb=on(nb),ib=Fe({},bf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ob=on(ib),sb=[9,13,27,32],tm=_r&&"CompositionEvent"in window,Ra=null;_r&&"documentMode"in document&&(Ra=document.documentMode);var ab=_r&&"TextEvent"in window&&!Ra,Dw=_r&&(!tm||Ra&&8<Ra&&11>=Ra),hv=" ",pv=!1;function Lw(t,e){switch(t){case"keyup":return sb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Go=!1;function lb(t,e){switch(t){case"compositionend":return Mw(e);case"keypress":return e.which!==32?null:(pv=!0,hv);case"textInput":return t=e.data,t===hv&&pv?null:t;default:return null}}function ub(t,e){if(Go)return t==="compositionend"||!tm&&Lw(t,e)?(t=Nw(),ac=Jp=ni=null,Go=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dw&&e.locale!=="ko"?null:e.data;default:return null}}var cb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cb[t.type]:e==="textarea"}function Vw(t,e,n,r){pw(r),e=Nc(e,"onChange"),0<e.length&&(n=new Zp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xa=null,Ya=null;function fb(t){Kw(t,0)}function Sf(t){var e=Yo(t);if(aw(e))return t}function db(t,e){if(t==="change")return e}var Fw=!1;if(_r){var xd;if(_r){var Od="oninput"in document;if(!Od){var gv=document.createElement("div");gv.setAttribute("oninput","return;"),Od=typeof gv.oninput=="function"}xd=Od}else xd=!1;Fw=xd&&(!document.documentMode||9<document.documentMode)}function vv(){xa&&(xa.detachEvent("onpropertychange",Uw),Ya=xa=null)}function Uw(t){if(t.propertyName==="value"&&Sf(Ya)){var e=[];Vw(e,Ya,t,Gp(t)),yw(fb,e)}}function hb(t,e,n){t==="focusin"?(vv(),xa=e,Ya=n,xa.attachEvent("onpropertychange",Uw)):t==="focusout"&&vv()}function pb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sf(Ya)}function mb(t,e){if(t==="click")return Sf(e)}function gb(t,e){if(t==="input"||t==="change")return Sf(e)}function vb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ln=typeof Object.is=="function"?Object.is:vb;function Xa(t,e){if(Ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fh.call(e,i)||!Ln(t[i],e[i]))return!1}return!0}function yv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wv(t,e){var n=yv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yv(n)}}function jw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bw(){for(var t=window,e=kc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kc(t.document)}return e}function nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yb(t){var e=Bw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jw(n.ownerDocument.documentElement,n)){if(r!==null&&nm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=wv(n,o);var s=wv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wb=_r&&"documentMode"in document&&11>=document.documentMode,Ko=null,Rh=null,Oa=null,xh=!1;function _v(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xh||Ko==null||Ko!==kc(r)||(r=Ko,"selectionStart"in r&&nm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oa&&Xa(Oa,r)||(Oa=r,r=Nc(Rh,"onSelect"),0<r.length&&(e=new Zp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ko)))}function Du(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qo={animationend:Du("Animation","AnimationEnd"),animationiteration:Du("Animation","AnimationIteration"),animationstart:Du("Animation","AnimationStart"),transitionend:Du("Transition","TransitionEnd")},Nd={},zw={};_r&&(zw=document.createElement("div").style,"AnimationEvent"in window||(delete Qo.animationend.animation,delete Qo.animationiteration.animation,delete Qo.animationstart.animation),"TransitionEvent"in window||delete Qo.transitionend.transition);function kf(t){if(Nd[t])return Nd[t];if(!Qo[t])return t;var e=Qo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zw)return Nd[t]=e[n];return t}var $w=kf("animationend"),Hw=kf("animationiteration"),Ww=kf("animationstart"),qw=kf("transitionend"),Gw=new Map,Ev="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(t,e){Gw.set(t,e),wo(e,[t])}for(var Dd=0;Dd<Ev.length;Dd++){var Ld=Ev[Dd],_b=Ld.toLowerCase(),Eb=Ld[0].toUpperCase()+Ld.slice(1);bi(_b,"on"+Eb)}bi($w,"onAnimationEnd");bi(Hw,"onAnimationIteration");bi(Ww,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(qw,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);wo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wo("onBeforeInput",["compositionend","keypress","textInput","paste"]);wo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ib=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Iv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_T(r,e,void 0,t),t.currentTarget=null}function Kw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,h=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Iv(i,l,h),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,h=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Iv(i,l,h),o=c}}}if(Ac)throw t=kh,Ac=!1,kh=null,t}function Ce(t,e){var n=e[Mh];n===void 0&&(n=e[Mh]=new Set);var r=t+"__bubble";n.has(r)||(Qw(e,t,2,!1),n.add(r))}function Md(t,e,n){var r=0;e&&(r|=4),Qw(n,t,r,e)}var Lu="_reactListening"+Math.random().toString(36).slice(2);function Ja(t){if(!t[Lu]){t[Lu]=!0,nw.forEach(function(n){n!=="selectionchange"&&(Ib.has(n)||Md(n,!1,t),Md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lu]||(e[Lu]=!0,Md("selectionchange",!1,e))}}function Qw(t,e,n,r){switch(Ow(e)){case 1:var i=MT;break;case 4:i=VT;break;default:i=Xp}n=i.bind(null,e,n,t),i=void 0,!Sh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vd(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=qi(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}yw(function(){var h=o,v=Gp(n),y=[];e:{var E=Gw.get(t);if(E!==void 0){var R=Zp,O=t;switch(t){case"keypress":if(lc(n)===0)break e;case"keydown":case"keyup":R=JT;break;case"focusin":O="focus",R=Rd;break;case"focusout":O="blur",R=Rd;break;case"beforeblur":case"afterblur":R=Rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=cv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=jT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=tb;break;case $w:case Hw:case Ww:R=$T;break;case qw:R=rb;break;case"scroll":R=FT;break;case"wheel":R=ob;break;case"copy":case"cut":case"paste":R=WT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=dv}var L=(e&4)!==0,M=!L&&t==="scroll",k=L?E!==null?E+"Capture":null:E;L=[];for(var I=h,P;I!==null;){P=I;var U=P.stateNode;if(P.tag===5&&U!==null&&(P=U,k!==null&&(U=qa(I,k),U!=null&&L.push(Za(I,U,P)))),M)break;I=I.return}0<L.length&&(E=new R(E,O,null,n,v),y.push({event:E,listeners:L}))}}if(!(e&7)){e:{if(E=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",E&&n!==Th&&(O=n.relatedTarget||n.fromElement)&&(qi(O)||O[Er]))break e;if((R||E)&&(E=v.window===v?v:(E=v.ownerDocument)?E.defaultView||E.parentWindow:window,R?(O=n.relatedTarget||n.toElement,R=h,O=O?qi(O):null,O!==null&&(M=_o(O),O!==M||O.tag!==5&&O.tag!==6)&&(O=null)):(R=null,O=h),R!==O)){if(L=cv,U="onMouseLeave",k="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(L=dv,U="onPointerLeave",k="onPointerEnter",I="pointer"),M=R==null?E:Yo(R),P=O==null?E:Yo(O),E=new L(U,I+"leave",R,n,v),E.target=M,E.relatedTarget=P,U=null,qi(v)===h&&(L=new L(k,I+"enter",O,n,v),L.target=P,L.relatedTarget=M,U=L),M=U,R&&O)t:{for(L=R,k=O,I=0,P=L;P;P=$o(P))I++;for(P=0,U=k;U;U=$o(U))P++;for(;0<I-P;)L=$o(L),I--;for(;0<P-I;)k=$o(k),P--;for(;I--;){if(L===k||k!==null&&L===k.alternate)break t;L=$o(L),k=$o(k)}L=null}else L=null;R!==null&&Tv(y,E,R,L,!1),O!==null&&M!==null&&Tv(y,M,O,L,!0)}}e:{if(E=h?Yo(h):window,R=E.nodeName&&E.nodeName.toLowerCase(),R==="select"||R==="input"&&E.type==="file")var B=db;else if(mv(E))if(Fw)B=gb;else{B=pb;var W=hb}else(R=E.nodeName)&&R.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(B=mb);if(B&&(B=B(t,h))){Vw(y,B,n,v);break e}W&&W(t,E,h),t==="focusout"&&(W=E._wrapperState)&&W.controlled&&E.type==="number"&&yh(E,"number",E.value)}switch(W=h?Yo(h):window,t){case"focusin":(mv(W)||W.contentEditable==="true")&&(Ko=W,Rh=h,Oa=null);break;case"focusout":Oa=Rh=Ko=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,_v(y,n,v);break;case"selectionchange":if(wb)break;case"keydown":case"keyup":_v(y,n,v)}var S;if(tm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Go?Lw(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Dw&&n.locale!=="ko"&&(Go||_!=="onCompositionStart"?_==="onCompositionEnd"&&Go&&(S=Nw()):(ni=v,Jp="value"in ni?ni.value:ni.textContent,Go=!0)),W=Nc(h,_),0<W.length&&(_=new fv(_,t,null,n,v),y.push({event:_,listeners:W}),S?_.data=S:(S=Mw(n),S!==null&&(_.data=S)))),(S=ab?lb(t,n):ub(t,n))&&(h=Nc(h,"onBeforeInput"),0<h.length&&(v=new fv("onBeforeInput","beforeinput",null,n,v),y.push({event:v,listeners:h}),v.data=S))}Kw(y,e)})}function Za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=qa(t,n),o!=null&&r.unshift(Za(t,o,i)),o=qa(t,e),o!=null&&r.push(Za(t,o,i))),t=t.return}return r}function $o(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,h=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&h!==null&&(l=h,i?(c=qa(n,o),c!=null&&s.unshift(Za(n,c,l))):i||(c=qa(n,o),c!=null&&s.push(Za(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Tb=/\r\n?/g,bb=/\u0000|\uFFFD/g;function bv(t){return(typeof t=="string"?t:""+t).replace(Tb,`
`).replace(bb,"")}function Mu(t,e,n){if(e=bv(e),bv(t)!==e&&n)throw Error($(425))}function Dc(){}var Oh=null,Nh=null;function Dh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lh=typeof setTimeout=="function"?setTimeout:void 0,Sb=typeof clearTimeout=="function"?clearTimeout:void 0,Sv=typeof Promise=="function"?Promise:void 0,kb=typeof queueMicrotask=="function"?queueMicrotask:typeof Sv<"u"?function(t){return Sv.resolve(null).then(t).catch(Cb)}:Lh;function Cb(t){setTimeout(function(){throw t})}function Fd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qa(e)}function li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Ds,el="__reactProps$"+Ds,Er="__reactContainer$"+Ds,Mh="__reactEvents$"+Ds,Ab="__reactListeners$"+Ds,Pb="__reactHandles$"+Ds;function qi(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Er]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kv(t);t!==null;){if(n=t[Wn])return n;t=kv(t)}return e}t=n,n=t.parentNode}return null}function Cl(t){return t=t[Wn]||t[Er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Cf(t){return t[el]||null}var Vh=[],Xo=-1;function Si(t){return{current:t}}function Pe(t){0>Xo||(t.current=Vh[Xo],Vh[Xo]=null,Xo--)}function Se(t,e){Xo++,Vh[Xo]=t.current,t.current=e}var vi={},Ot=Si(vi),Ht=Si(!1),io=vi;function ws(t,e){var n=t.type.contextTypes;if(!n)return vi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(t){return t=t.childContextTypes,t!=null}function Lc(){Pe(Ht),Pe(Ot)}function Cv(t,e,n){if(Ot.current!==vi)throw Error($(168));Se(Ot,e),Se(Ht,n)}function Yw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,hT(t)||"Unknown",i));return Fe({},n,r)}function Mc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vi,io=Ot.current,Se(Ot,t),Se(Ht,Ht.current),!0}function Av(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=Yw(t,e,io),r.__reactInternalMemoizedMergedChildContext=t,Pe(Ht),Pe(Ot),Se(Ot,t)):Pe(Ht),Se(Ht,n)}var ur=null,Af=!1,Ud=!1;function Xw(t){ur===null?ur=[t]:ur.push(t)}function Rb(t){Af=!0,Xw(t)}function ki(){if(!Ud&&ur!==null){Ud=!0;var t=0,e=Ee;try{var n=ur;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ur=null,Af=!1}catch(i){throw ur!==null&&(ur=ur.slice(t+1)),Iw(Kp,ki),i}finally{Ee=e,Ud=!1}}return null}var Jo=[],Zo=0,Vc=null,Fc=0,dn=[],hn=0,oo=null,fr=1,dr="";function $i(t,e){Jo[Zo++]=Fc,Jo[Zo++]=Vc,Vc=t,Fc=e}function Jw(t,e,n){dn[hn++]=fr,dn[hn++]=dr,dn[hn++]=oo,oo=t;var r=fr;t=dr;var i=32-On(r)-1;r&=~(1<<i),n+=1;var o=32-On(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,fr=1<<32-On(e)+i|n<<i|r,dr=o+t}else fr=1<<o|n<<i|r,dr=t}function rm(t){t.return!==null&&($i(t,1),Jw(t,1,0))}function im(t){for(;t===Vc;)Vc=Jo[--Zo],Jo[Zo]=null,Fc=Jo[--Zo],Jo[Zo]=null;for(;t===oo;)oo=dn[--hn],dn[hn]=null,dr=dn[--hn],dn[hn]=null,fr=dn[--hn],dn[hn]=null}var en=null,Zt=null,Oe=!1,kn=null;function Zw(t,e){var n=pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,en=t,Zt=li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,en=t,Zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oo!==null?{id:fr,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,en=t,Zt=null,!0):!1;default:return!1}}function Fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uh(t){if(Oe){var e=Zt;if(e){var n=e;if(!Pv(t,e)){if(Fh(t))throw Error($(418));e=li(n.nextSibling);var r=en;e&&Pv(t,e)?Zw(r,n):(t.flags=t.flags&-4097|2,Oe=!1,en=t)}}else{if(Fh(t))throw Error($(418));t.flags=t.flags&-4097|2,Oe=!1,en=t}}}function Rv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;en=t}function Vu(t){if(t!==en)return!1;if(!Oe)return Rv(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dh(t.type,t.memoizedProps)),e&&(e=Zt)){if(Fh(t))throw e1(),Error($(418));for(;e;)Zw(t,e),e=li(e.nextSibling)}if(Rv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zt=li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zt=null}}else Zt=en?li(t.stateNode.nextSibling):null;return!0}function e1(){for(var t=Zt;t;)t=li(t.nextSibling)}function _s(){Zt=en=null,Oe=!1}function om(t){kn===null?kn=[t]:kn.push(t)}var xb=Pr.ReactCurrentBatchConfig;function pa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Fu(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xv(t){var e=t._init;return e(t._payload)}function t1(t){function e(k,I){if(t){var P=k.deletions;P===null?(k.deletions=[I],k.flags|=16):P.push(I)}}function n(k,I){if(!t)return null;for(;I!==null;)e(k,I),I=I.sibling;return null}function r(k,I){for(k=new Map;I!==null;)I.key!==null?k.set(I.key,I):k.set(I.index,I),I=I.sibling;return k}function i(k,I){return k=di(k,I),k.index=0,k.sibling=null,k}function o(k,I,P){return k.index=P,t?(P=k.alternate,P!==null?(P=P.index,P<I?(k.flags|=2,I):P):(k.flags|=2,I)):(k.flags|=1048576,I)}function s(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,I,P,U){return I===null||I.tag!==6?(I=qd(P,k.mode,U),I.return=k,I):(I=i(I,P),I.return=k,I)}function c(k,I,P,U){var B=P.type;return B===qo?v(k,I,P.props.children,U,P.key):I!==null&&(I.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Qr&&xv(B)===I.type)?(U=i(I,P.props),U.ref=pa(k,I,P),U.return=k,U):(U=mc(P.type,P.key,P.props,null,k.mode,U),U.ref=pa(k,I,P),U.return=k,U)}function h(k,I,P,U){return I===null||I.tag!==4||I.stateNode.containerInfo!==P.containerInfo||I.stateNode.implementation!==P.implementation?(I=Gd(P,k.mode,U),I.return=k,I):(I=i(I,P.children||[]),I.return=k,I)}function v(k,I,P,U,B){return I===null||I.tag!==7?(I=eo(P,k.mode,U,B),I.return=k,I):(I=i(I,P),I.return=k,I)}function y(k,I,P){if(typeof I=="string"&&I!==""||typeof I=="number")return I=qd(""+I,k.mode,P),I.return=k,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Cu:return P=mc(I.type,I.key,I.props,null,k.mode,P),P.ref=pa(k,null,I),P.return=k,P;case Wo:return I=Gd(I,k.mode,P),I.return=k,I;case Qr:var U=I._init;return y(k,U(I._payload),P)}if(Ea(I)||ua(I))return I=eo(I,k.mode,P,null),I.return=k,I;Fu(k,I)}return null}function E(k,I,P,U){var B=I!==null?I.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return B!==null?null:l(k,I,""+P,U);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Cu:return P.key===B?c(k,I,P,U):null;case Wo:return P.key===B?h(k,I,P,U):null;case Qr:return B=P._init,E(k,I,B(P._payload),U)}if(Ea(P)||ua(P))return B!==null?null:v(k,I,P,U,null);Fu(k,P)}return null}function R(k,I,P,U,B){if(typeof U=="string"&&U!==""||typeof U=="number")return k=k.get(P)||null,l(I,k,""+U,B);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Cu:return k=k.get(U.key===null?P:U.key)||null,c(I,k,U,B);case Wo:return k=k.get(U.key===null?P:U.key)||null,h(I,k,U,B);case Qr:var W=U._init;return R(k,I,P,W(U._payload),B)}if(Ea(U)||ua(U))return k=k.get(P)||null,v(I,k,U,B,null);Fu(I,U)}return null}function O(k,I,P,U){for(var B=null,W=null,S=I,_=I=0,T=null;S!==null&&_<P.length;_++){S.index>_?(T=S,S=null):T=S.sibling;var C=E(k,S,P[_],U);if(C===null){S===null&&(S=T);break}t&&S&&C.alternate===null&&e(k,S),I=o(C,I,_),W===null?B=C:W.sibling=C,W=C,S=T}if(_===P.length)return n(k,S),Oe&&$i(k,_),B;if(S===null){for(;_<P.length;_++)S=y(k,P[_],U),S!==null&&(I=o(S,I,_),W===null?B=S:W.sibling=S,W=S);return Oe&&$i(k,_),B}for(S=r(k,S);_<P.length;_++)T=R(S,k,_,P[_],U),T!==null&&(t&&T.alternate!==null&&S.delete(T.key===null?_:T.key),I=o(T,I,_),W===null?B=T:W.sibling=T,W=T);return t&&S.forEach(function(x){return e(k,x)}),Oe&&$i(k,_),B}function L(k,I,P,U){var B=ua(P);if(typeof B!="function")throw Error($(150));if(P=B.call(P),P==null)throw Error($(151));for(var W=B=null,S=I,_=I=0,T=null,C=P.next();S!==null&&!C.done;_++,C=P.next()){S.index>_?(T=S,S=null):T=S.sibling;var x=E(k,S,C.value,U);if(x===null){S===null&&(S=T);break}t&&S&&x.alternate===null&&e(k,S),I=o(x,I,_),W===null?B=x:W.sibling=x,W=x,S=T}if(C.done)return n(k,S),Oe&&$i(k,_),B;if(S===null){for(;!C.done;_++,C=P.next())C=y(k,C.value,U),C!==null&&(I=o(C,I,_),W===null?B=C:W.sibling=C,W=C);return Oe&&$i(k,_),B}for(S=r(k,S);!C.done;_++,C=P.next())C=R(S,k,_,C.value,U),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?_:C.key),I=o(C,I,_),W===null?B=C:W.sibling=C,W=C);return t&&S.forEach(function(D){return e(k,D)}),Oe&&$i(k,_),B}function M(k,I,P,U){if(typeof P=="object"&&P!==null&&P.type===qo&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case Cu:e:{for(var B=P.key,W=I;W!==null;){if(W.key===B){if(B=P.type,B===qo){if(W.tag===7){n(k,W.sibling),I=i(W,P.props.children),I.return=k,k=I;break e}}else if(W.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Qr&&xv(B)===W.type){n(k,W.sibling),I=i(W,P.props),I.ref=pa(k,W,P),I.return=k,k=I;break e}n(k,W);break}else e(k,W);W=W.sibling}P.type===qo?(I=eo(P.props.children,k.mode,U,P.key),I.return=k,k=I):(U=mc(P.type,P.key,P.props,null,k.mode,U),U.ref=pa(k,I,P),U.return=k,k=U)}return s(k);case Wo:e:{for(W=P.key;I!==null;){if(I.key===W)if(I.tag===4&&I.stateNode.containerInfo===P.containerInfo&&I.stateNode.implementation===P.implementation){n(k,I.sibling),I=i(I,P.children||[]),I.return=k,k=I;break e}else{n(k,I);break}else e(k,I);I=I.sibling}I=Gd(P,k.mode,U),I.return=k,k=I}return s(k);case Qr:return W=P._init,M(k,I,W(P._payload),U)}if(Ea(P))return O(k,I,P,U);if(ua(P))return L(k,I,P,U);Fu(k,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,I!==null&&I.tag===6?(n(k,I.sibling),I=i(I,P),I.return=k,k=I):(n(k,I),I=qd(P,k.mode,U),I.return=k,k=I),s(k)):n(k,I)}return M}var Es=t1(!0),n1=t1(!1),Uc=Si(null),jc=null,es=null,sm=null;function am(){sm=es=jc=null}function lm(t){var e=Uc.current;Pe(Uc),t._currentValue=e}function jh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){jc=t,sm=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function gn(t){var e=t._currentValue;if(sm!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(jc===null)throw Error($(308));es=t,jc.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var Gi=null;function um(t){Gi===null?Gi=[t]:Gi.push(t)}function r1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,um(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ir(t,r)}function Ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yr=!1;function cm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ui(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ir(t,n)}return i=r.interleaved,i===null?(e.next=e,um(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ir(t,n)}function uc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qp(t,n)}}function Ov(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bc(t,e,n,r){var i=t.updateQueue;Yr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,h=c.next;c.next=null,s===null?o=h:s.next=h,s=c;var v=t.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==s&&(l===null?v.firstBaseUpdate=h:l.next=h,v.lastBaseUpdate=c))}if(o!==null){var y=i.baseState;s=0,v=h=c=null,l=o;do{var E=l.lane,R=l.eventTime;if((r&E)===E){v!==null&&(v=v.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var O=t,L=l;switch(E=e,R=n,L.tag){case 1:if(O=L.payload,typeof O=="function"){y=O.call(R,y,E);break e}y=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=L.payload,E=typeof O=="function"?O.call(R,y,E):O,E==null)break e;y=Fe({},y,E);break e;case 2:Yr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,E=i.effects,E===null?i.effects=[l]:E.push(l))}else R={eventTime:R,lane:E,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(h=v=R,c=y):v=v.next=R,s|=E;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;E=l,l=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);if(v===null&&(c=y),i.baseState=c,i.firstBaseUpdate=h,i.lastBaseUpdate=v,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);ao|=s,t.lanes=s,t.memoizedState=y}}function Nv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Al={},Kn=Si(Al),tl=Si(Al),nl=Si(Al);function Ki(t){if(t===Al)throw Error($(174));return t}function fm(t,e){switch(Se(nl,e),Se(tl,t),Se(Kn,Al),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_h(e,t)}Pe(Kn),Se(Kn,e)}function Is(){Pe(Kn),Pe(tl),Pe(nl)}function o1(t){Ki(nl.current);var e=Ki(Kn.current),n=_h(e,t.type);e!==n&&(Se(tl,t),Se(Kn,n))}function dm(t){tl.current===t&&(Pe(Kn),Pe(tl))}var Me=Si(0);function zc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jd=[];function hm(){for(var t=0;t<jd.length;t++)jd[t]._workInProgressVersionPrimary=null;jd.length=0}var cc=Pr.ReactCurrentDispatcher,Bd=Pr.ReactCurrentBatchConfig,so=0,Ve=null,Ze=null,st=null,$c=!1,Na=!1,rl=0,Ob=0;function St(){throw Error($(321))}function pm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ln(t[n],e[n]))return!1;return!0}function mm(t,e,n,r,i,o){if(so=o,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cc.current=t===null||t.memoizedState===null?Mb:Vb,t=n(r,i),Na){o=0;do{if(Na=!1,rl=0,25<=o)throw Error($(301));o+=1,st=Ze=null,e.updateQueue=null,cc.current=Fb,t=n(r,i)}while(Na)}if(cc.current=Hc,e=Ze!==null&&Ze.next!==null,so=0,st=Ze=Ve=null,$c=!1,e)throw Error($(300));return t}function gm(){var t=rl!==0;return rl=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Ve.memoizedState=st=t:st=st.next=t,st}function vn(){if(Ze===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=st===null?Ve.memoizedState:st.next;if(e!==null)st=e,Ze=t;else{if(t===null)throw Error($(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},st===null?Ve.memoizedState=st=t:st=st.next=t}return st}function il(t,e){return typeof e=="function"?e(t):e}function zd(t){var e=vn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,h=o;do{var v=h.lane;if((so&v)===v)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var y={lane:v,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(l=c=y,s=r):c=c.next=y,Ve.lanes|=v,ao|=v}h=h.next}while(h!==null&&h!==o);c===null?s=r:c.next=l,Ln(r,e.memoizedState)||($t=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Ve.lanes|=o,ao|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $d(t){var e=vn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Ln(o,e.memoizedState)||($t=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function s1(){}function a1(t,e){var n=Ve,r=vn(),i=e(),o=!Ln(r.memoizedState,i);if(o&&(r.memoizedState=i,$t=!0),r=r.queue,vm(c1.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,ol(9,u1.bind(null,n,r,i,e),void 0,null),lt===null)throw Error($(349));so&30||l1(n,e,i)}return i}function l1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u1(t,e,n,r){e.value=n,e.getSnapshot=r,f1(e)&&d1(t)}function c1(t,e,n){return n(function(){f1(e)&&d1(t)})}function f1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ln(t,n)}catch{return!0}}function d1(t){var e=Ir(t,1);e!==null&&Nn(e,t,1,-1)}function Dv(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:t},e.queue=t,t=t.dispatch=Lb.bind(null,Ve,t),[e.memoizedState,t]}function ol(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function h1(){return vn().memoizedState}function fc(t,e,n,r){var i=$n();Ve.flags|=t,i.memoizedState=ol(1|e,n,void 0,r===void 0?null:r)}function Pf(t,e,n,r){var i=vn();r=r===void 0?null:r;var o=void 0;if(Ze!==null){var s=Ze.memoizedState;if(o=s.destroy,r!==null&&pm(r,s.deps)){i.memoizedState=ol(e,n,o,r);return}}Ve.flags|=t,i.memoizedState=ol(1|e,n,o,r)}function Lv(t,e){return fc(8390656,8,t,e)}function vm(t,e){return Pf(2048,8,t,e)}function p1(t,e){return Pf(4,2,t,e)}function m1(t,e){return Pf(4,4,t,e)}function g1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function v1(t,e,n){return n=n!=null?n.concat([t]):null,Pf(4,4,g1.bind(null,e,t),n)}function ym(){}function y1(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function w1(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _1(t,e,n){return so&21?(Ln(n,e)||(n=Sw(),Ve.lanes|=n,ao|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function Nb(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=Bd.transition;Bd.transition={};try{t(!1),e()}finally{Ee=n,Bd.transition=r}}function E1(){return vn().memoizedState}function Db(t,e,n){var r=fi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},I1(t))T1(e,n);else if(n=r1(t,e,n,r),n!==null){var i=Mt();Nn(n,t,r,i),b1(n,e,r)}}function Lb(t,e,n){var r=fi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(I1(t))T1(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ln(l,s)){var c=e.interleaved;c===null?(i.next=i,um(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=r1(t,e,i,r),n!==null&&(i=Mt(),Nn(n,t,r,i),b1(n,e,r))}}function I1(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function T1(t,e){Na=$c=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function b1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qp(t,n)}}var Hc={readContext:gn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},Mb={readContext:gn,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:gn,useEffect:Lv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fc(4194308,4,g1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fc(4194308,4,t,e)},useInsertionEffect:function(t,e){return fc(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Db.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:Dv,useDebugValue:ym,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=Dv(!1),e=t[0];return t=Nb.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=$n();if(Oe){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),lt===null)throw Error($(349));so&30||l1(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Lv(c1.bind(null,r,o,t),[t]),r.flags|=2048,ol(9,u1.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=$n(),e=lt.identifierPrefix;if(Oe){var n=dr,r=fr;n=(r&~(1<<32-On(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=rl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ob++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Vb={readContext:gn,useCallback:y1,useContext:gn,useEffect:vm,useImperativeHandle:v1,useInsertionEffect:p1,useLayoutEffect:m1,useMemo:w1,useReducer:zd,useRef:h1,useState:function(){return zd(il)},useDebugValue:ym,useDeferredValue:function(t){var e=vn();return _1(e,Ze.memoizedState,t)},useTransition:function(){var t=zd(il)[0],e=vn().memoizedState;return[t,e]},useMutableSource:s1,useSyncExternalStore:a1,useId:E1,unstable_isNewReconciler:!1},Fb={readContext:gn,useCallback:y1,useContext:gn,useEffect:vm,useImperativeHandle:v1,useInsertionEffect:p1,useLayoutEffect:m1,useMemo:w1,useReducer:$d,useRef:h1,useState:function(){return $d(il)},useDebugValue:ym,useDeferredValue:function(t){var e=vn();return Ze===null?e.memoizedState=t:_1(e,Ze.memoizedState,t)},useTransition:function(){var t=$d(il)[0],e=vn().memoizedState;return[t,e]},useMutableSource:s1,useSyncExternalStore:a1,useId:E1,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rf={isMounted:function(t){return(t=t._reactInternals)?_o(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Mt(),i=fi(t),o=gr(r,i);o.payload=e,n!=null&&(o.callback=n),e=ui(t,o,i),e!==null&&(Nn(e,t,i,r),uc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Mt(),i=fi(t),o=gr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ui(t,o,i),e!==null&&(Nn(e,t,i,r),uc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Mt(),r=fi(t),i=gr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ui(t,i,r),e!==null&&(Nn(e,t,r,n),uc(e,t,r))}};function Mv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Xa(n,r)||!Xa(i,o):!0}function S1(t,e,n){var r=!1,i=vi,o=e.contextType;return typeof o=="object"&&o!==null?o=gn(o):(i=Wt(e)?io:Ot.current,r=e.contextTypes,o=(r=r!=null)?ws(t,i):vi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Vv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Rf.enqueueReplaceState(e,e.state,null)}function zh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},cm(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=gn(o):(o=Wt(e)?io:Ot.current,i.context=ws(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Bh(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Rf.enqueueReplaceState(i,i.state,null),Bc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",r=e;do n+=dT(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Hd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $h(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ub=typeof WeakMap=="function"?WeakMap:Map;function k1(t,e,n){n=gr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){qc||(qc=!0,Zh=r),$h(t,e)},n}function C1(t,e,n){n=gr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$h(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){$h(t,e),typeof r!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Fv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ub;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Zb.bind(null,t,e,n),e.then(t,t))}function Uv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gr(-1,1),e.tag=2,ui(n,e,1))),n.lanes|=1),t)}var jb=Pr.ReactCurrentOwner,$t=!1;function Lt(t,e,n,r){e.child=t===null?n1(e,null,n,r):Es(e,t.child,n,r)}function Bv(t,e,n,r,i){n=n.render;var o=e.ref;return fs(e,i),r=mm(t,e,n,r,o,i),n=gm(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(Oe&&n&&rm(e),e.flags|=1,Lt(t,e,r,i),e.child)}function zv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!km(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,A1(t,e,o,r,i)):(t=mc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xa,n(s,r)&&t.ref===e.ref)return Tr(t,e,i)}return e.flags|=1,t=di(o,r),t.ref=e.ref,t.return=e,e.child=t}function A1(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Xa(o,r)&&t.ref===e.ref)if($t=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,Tr(t,e,i)}return Hh(t,e,n,r,i)}function P1(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(ns,Jt),Jt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(ns,Jt),Jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Se(ns,Jt),Jt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Se(ns,Jt),Jt|=r;return Lt(t,e,i,n),e.child}function R1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hh(t,e,n,r,i){var o=Wt(n)?io:Ot.current;return o=ws(e,o),fs(e,i),n=mm(t,e,n,r,o,i),r=gm(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(Oe&&r&&rm(e),e.flags|=1,Lt(t,e,n,i),e.child)}function $v(t,e,n,r,i){if(Wt(n)){var o=!0;Mc(e)}else o=!1;if(fs(e,i),e.stateNode===null)dc(t,e),S1(e,n,r),zh(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,h=n.contextType;typeof h=="object"&&h!==null?h=gn(h):(h=Wt(n)?io:Ot.current,h=ws(e,h));var v=n.getDerivedStateFromProps,y=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function";y||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==h)&&Vv(e,s,r,h),Yr=!1;var E=e.memoizedState;s.state=E,Bc(e,r,s,i),c=e.memoizedState,l!==r||E!==c||Ht.current||Yr?(typeof v=="function"&&(Bh(e,n,v,r),c=e.memoizedState),(l=Yr||Mv(e,n,l,r,E,c,h))?(y||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),s.props=r,s.state=c,s.context=h,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,i1(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:bn(e.type,l),s.props=h,y=e.pendingProps,E=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=gn(c):(c=Wt(n)?io:Ot.current,c=ws(e,c));var R=n.getDerivedStateFromProps;(v=typeof R=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==y||E!==c)&&Vv(e,s,r,c),Yr=!1,E=e.memoizedState,s.state=E,Bc(e,r,s,i);var O=e.memoizedState;l!==y||E!==O||Ht.current||Yr?(typeof R=="function"&&(Bh(e,n,R,r),O=e.memoizedState),(h=Yr||Mv(e,n,h,r,E,O,c)||!1)?(v||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,O,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,O,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=O),s.props=r,s.state=O,s.context=c,r=h):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),r=!1)}return Wh(t,e,n,r,o,i)}function Wh(t,e,n,r,i,o){R1(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Av(e,n,!1),Tr(t,e,o);r=e.stateNode,jb.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Es(e,t.child,null,o),e.child=Es(e,null,l,o)):Lt(t,e,l,o),e.memoizedState=r.state,i&&Av(e,n,!0),e.child}function x1(t){var e=t.stateNode;e.pendingContext?Cv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cv(t,e.context,!1),fm(t,e.containerInfo)}function Hv(t,e,n,r,i){return _s(),om(i),e.flags|=256,Lt(t,e,n,r),e.child}var qh={dehydrated:null,treeContext:null,retryLane:0};function Gh(t){return{baseLanes:t,cachePool:null,transitions:null}}function O1(t,e,n){var r=e.pendingProps,i=Me.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(Me,i&1),t===null)return Uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Nf(s,r,0,null),t=eo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Gh(n),e.memoizedState=qh,t):wm(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Bb(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=di(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=di(l,o):(o=eo(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Gh(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=qh,r}return o=t.child,t=o.sibling,r=di(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wm(t,e){return e=Nf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Uu(t,e,n,r){return r!==null&&om(r),Es(e,t.child,null,n),t=wm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Bb(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Hd(Error($(422))),Uu(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Nf({mode:"visible",children:r.children},i,0,null),o=eo(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Es(e,t.child,null,s),e.child.memoizedState=Gh(s),e.memoizedState=qh,o);if(!(e.mode&1))return Uu(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error($(419)),r=Hd(o,r,void 0),Uu(t,e,s,r)}if(l=(s&t.childLanes)!==0,$t||l){if(r=lt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ir(t,i),Nn(r,t,i,-1))}return Sm(),r=Hd(Error($(421))),Uu(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eS.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Zt=li(i.nextSibling),en=e,Oe=!0,kn=null,t!==null&&(dn[hn++]=fr,dn[hn++]=dr,dn[hn++]=oo,fr=t.id,dr=t.overflow,oo=e),e=wm(e,r.children),e.flags|=4096,e)}function Wv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),jh(t.return,e,n)}function Wd(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function N1(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Lt(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wv(t,n,e);else if(t.tag===19)Wv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&zc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wd(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&zc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wd(e,!0,n,null,o);break;case"together":Wd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ao|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=di(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=di(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zb(t,e,n){switch(e.tag){case 3:x1(e),_s();break;case 5:o1(e);break;case 1:Wt(e.type)&&Mc(e);break;case 4:fm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(Uc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?O1(t,e,n):(Se(Me,Me.current&1),t=Tr(t,e,n),t!==null?t.sibling:null);Se(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return N1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,P1(t,e,n)}return Tr(t,e,n)}var D1,Kh,L1,M1;D1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kh=function(){};L1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ki(Kn.current);var o=null;switch(n){case"input":i=gh(t,i),r=gh(t,r),o=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),o=[];break;case"textarea":i=wh(t,i),r=wh(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Dc)}Eh(n,r);var s;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ha.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var c=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&c!==l&&(c!=null||l!=null))if(h==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(h,n)),n=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&Ce("scroll",t),o||l===c||(o=[])):(o=o||[]).push(h,c))}n&&(o=o||[]).push("style",n);var h=o;(e.updateQueue=h)&&(e.flags|=4)}};M1=function(t,e,n,r){n!==r&&(e.flags|=4)};function ma(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $b(t,e,n){var r=e.pendingProps;switch(im(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return Wt(e.type)&&Lc(),kt(e),null;case 3:return r=e.stateNode,Is(),Pe(Ht),Pe(Ot),hm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(np(kn),kn=null))),Kh(t,e),kt(e),null;case 5:dm(e);var i=Ki(nl.current);if(n=e.type,t!==null&&e.stateNode!=null)L1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return kt(e),null}if(t=Ki(Kn.current),Vu(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Wn]=e,r[el]=o,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<Ta.length;i++)Ce(Ta[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":ev(r,o),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ce("invalid",r);break;case"textarea":nv(r,o),Ce("invalid",r)}Eh(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Mu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Mu(r.textContent,l,t),i=["children",""+l]):Ha.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Ce("scroll",r)}switch(n){case"input":Au(r),tv(r,o,!0);break;case"textarea":Au(r),rv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Dc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Wn]=e,t[el]=r,D1(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ih(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ta.length;i++)Ce(Ta[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":ev(t,r),i=gh(t,r),Ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":nv(t,r),i=wh(t,r),Ce("invalid",t);break;default:i=r}Eh(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?hw(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fw(t,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Wa(t,c):typeof c=="number"&&Wa(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ha.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ce("scroll",t):c!=null&&$p(t,o,c,s))}switch(n){case"input":Au(t),tv(t,r,!1);break;case"textarea":Au(t),rv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?as(t,!!r.multiple,o,!1):r.defaultValue!=null&&as(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Dc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)M1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Ki(nl.current),Ki(Kn.current),Vu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wn]=e,(o=r.nodeValue!==n)&&(t=en,t!==null))switch(t.tag){case 3:Mu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mu(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wn]=e,e.stateNode=r}return kt(e),null;case 13:if(Pe(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&Zt!==null&&e.mode&1&&!(e.flags&128))e1(),_s(),e.flags|=98560,o=!1;else if(o=Vu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error($(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[Wn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),o=!1}else kn!==null&&(np(kn),kn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?et===0&&(et=3):Sm())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Is(),Kh(t,e),t===null&&Ja(e.stateNode.containerInfo),kt(e),null;case 10:return lm(e.type._context),kt(e),null;case 17:return Wt(e.type)&&Lc(),kt(e),null;case 19:if(Pe(Me),o=e.memoizedState,o===null)return kt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)ma(o,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=zc(t),s!==null){for(e.flags|=128,ma(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Me,Me.current&1|2),e.child}t=t.sibling}o.tail!==null&&$e()>bs&&(e.flags|=128,r=!0,ma(o,!1),e.lanes=4194304)}else{if(!r)if(t=zc(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ma(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Oe)return kt(e),null}else 2*$e()-o.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,r=!0,ma(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=$e(),e.sibling=null,n=Me.current,Se(Me,r?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return bm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Jt&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function Hb(t,e){switch(im(e),e.tag){case 1:return Wt(e.type)&&Lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),Pe(Ht),Pe(Ot),hm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dm(e),null;case 13:if(Pe(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Me),null;case 4:return Is(),null;case 10:return lm(e.type._context),null;case 22:case 23:return bm(),null;case 24:return null;default:return null}}var ju=!1,Pt=!1,Wb=typeof WeakSet=="function"?WeakSet:Set,X=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Qh(t,e,n){try{n()}catch(r){je(t,e,r)}}var qv=!1;function qb(t,e){if(Oh=xc,t=Bw(),nm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,h=0,v=0,y=t,E=null;t:for(;;){for(var R;y!==n||i!==0&&y.nodeType!==3||(l=s+i),y!==o||r!==0&&y.nodeType!==3||(c=s+r),y.nodeType===3&&(s+=y.nodeValue.length),(R=y.firstChild)!==null;)E=y,y=R;for(;;){if(y===t)break t;if(E===n&&++h===i&&(l=s),E===o&&++v===r&&(c=s),(R=y.nextSibling)!==null)break;y=E,E=y.parentNode}y=R}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nh={focusedElem:t,selectionRange:n},xc=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var O=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var L=O.memoizedProps,M=O.memoizedState,k=e.stateNode,I=k.getSnapshotBeforeUpdate(e.elementType===e.type?L:bn(e.type,L),M);k.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var P=e.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(U){je(e,e.return,U)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return O=qv,qv=!1,O}function Da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Qh(e,n,o)}i=i.next}while(i!==r)}}function xf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function V1(t){var e=t.alternate;e!==null&&(t.alternate=null,V1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[el],delete e[Mh],delete e[Ab],delete e[Pb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F1(t){return t.tag===5||t.tag===3||t.tag===4}function Gv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dc));else if(r!==4&&(t=t.child,t!==null))for(Xh(t,e,n),t=t.sibling;t!==null;)Xh(t,e,n),t=t.sibling}function Jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jh(t,e,n),t=t.sibling;t!==null;)Jh(t,e,n),t=t.sibling}var mt=null,Sn=!1;function qr(t,e,n){for(n=n.child;n!==null;)U1(t,e,n),n=n.sibling}function U1(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(Tf,n)}catch{}switch(n.tag){case 5:Pt||ts(n,e);case 6:var r=mt,i=Sn;mt=null,qr(t,e,n),mt=r,Sn=i,mt!==null&&(Sn?(t=mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(Sn?(t=mt,n=n.stateNode,t.nodeType===8?Fd(t.parentNode,n):t.nodeType===1&&Fd(t,n),Qa(t)):Fd(mt,n.stateNode));break;case 4:r=mt,i=Sn,mt=n.stateNode.containerInfo,Sn=!0,qr(t,e,n),mt=r,Sn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Qh(n,e,s),i=i.next}while(i!==r)}qr(t,e,n);break;case 1:if(!Pt&&(ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,e,l)}qr(t,e,n);break;case 21:qr(t,e,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,qr(t,e,n),Pt=r):qr(t,e,n);break;default:qr(t,e,n)}}function Kv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wb),e.forEach(function(r){var i=tS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:mt=l.stateNode,Sn=!1;break e;case 3:mt=l.stateNode.containerInfo,Sn=!0;break e;case 4:mt=l.stateNode.containerInfo,Sn=!0;break e}l=l.return}if(mt===null)throw Error($(160));U1(o,s,i),mt=null,Sn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(h){je(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)j1(e,t),e=e.sibling}function j1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),zn(t),r&4){try{Da(3,t,t.return),xf(3,t)}catch(L){je(t,t.return,L)}try{Da(5,t,t.return)}catch(L){je(t,t.return,L)}}break;case 1:Tn(e,t),zn(t),r&512&&n!==null&&ts(n,n.return);break;case 5:if(Tn(e,t),zn(t),r&512&&n!==null&&ts(n,n.return),t.flags&32){var i=t.stateNode;try{Wa(i,"")}catch(L){je(t,t.return,L)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&lw(i,o),Ih(l,s);var h=Ih(l,o);for(s=0;s<c.length;s+=2){var v=c[s],y=c[s+1];v==="style"?hw(i,y):v==="dangerouslySetInnerHTML"?fw(i,y):v==="children"?Wa(i,y):$p(i,v,y,h)}switch(l){case"input":vh(i,o);break;case"textarea":uw(i,o);break;case"select":var E=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var R=o.value;R!=null?as(i,!!o.multiple,R,!1):E!==!!o.multiple&&(o.defaultValue!=null?as(i,!!o.multiple,o.defaultValue,!0):as(i,!!o.multiple,o.multiple?[]:"",!1))}i[el]=o}catch(L){je(t,t.return,L)}}break;case 6:if(Tn(e,t),zn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(L){je(t,t.return,L)}}break;case 3:if(Tn(e,t),zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qa(e.containerInfo)}catch(L){je(t,t.return,L)}break;case 4:Tn(e,t),zn(t);break;case 13:Tn(e,t),zn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Im=$e())),r&4&&Kv(t);break;case 22:if(v=n!==null&&n.memoizedState!==null,t.mode&1?(Pt=(h=Pt)||v,Tn(e,t),Pt=h):Tn(e,t),zn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!v&&t.mode&1)for(X=t,v=t.child;v!==null;){for(y=X=v;X!==null;){switch(E=X,R=E.child,E.tag){case 0:case 11:case 14:case 15:Da(4,E,E.return);break;case 1:ts(E,E.return);var O=E.stateNode;if(typeof O.componentWillUnmount=="function"){r=E,n=E.return;try{e=r,O.props=e.memoizedProps,O.state=e.memoizedState,O.componentWillUnmount()}catch(L){je(r,n,L)}}break;case 5:ts(E,E.return);break;case 22:if(E.memoizedState!==null){Yv(y);continue}}R!==null?(R.return=E,X=R):Yv(y)}v=v.sibling}e:for(v=null,y=t;;){if(y.tag===5){if(v===null){v=y;try{i=y.stateNode,h?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=y.stateNode,c=y.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=dw("display",s))}catch(L){je(t,t.return,L)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=h?"":y.memoizedProps}catch(L){je(t,t.return,L)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Tn(e,t),zn(t),r&4&&Kv(t);break;case 21:break;default:Tn(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F1(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wa(i,""),r.flags&=-33);var o=Gv(t);Jh(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Gv(t);Xh(t,l,s);break;default:throw Error($(161))}}catch(c){je(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Gb(t,e,n){X=t,B1(t)}function B1(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ju;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Pt;l=ju;var h=Pt;if(ju=s,(Pt=c)&&!h)for(X=i;X!==null;)s=X,c=s.child,s.tag===22&&s.memoizedState!==null?Xv(i):c!==null?(c.return=s,X=c):Xv(i);for(;o!==null;)X=o,B1(o),o=o.sibling;X=i,ju=l,Pt=h}Qv(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,X=o):Qv(t)}}function Qv(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pt||xf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Nv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nv(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var v=h.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Qa(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Pt||e.flags&512&&Yh(e)}catch(E){je(e,e.return,E)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function Yv(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function Xv(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xf(4,e)}catch(c){je(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){je(e,i,c)}}var o=e.return;try{Yh(e)}catch(c){je(e,o,c)}break;case 5:var s=e.return;try{Yh(e)}catch(c){je(e,s,c)}}}catch(c){je(e,e.return,c)}if(e===t){X=null;break}var l=e.sibling;if(l!==null){l.return=e.return,X=l;break}X=e.return}}var Kb=Math.ceil,Wc=Pr.ReactCurrentDispatcher,_m=Pr.ReactCurrentOwner,mn=Pr.ReactCurrentBatchConfig,me=0,lt=null,Ge=null,wt=0,Jt=0,ns=Si(0),et=0,sl=null,ao=0,Of=0,Em=0,La=null,zt=null,Im=0,bs=1/0,lr=null,qc=!1,Zh=null,ci=null,Bu=!1,ri=null,Gc=0,Ma=0,ep=null,hc=-1,pc=0;function Mt(){return me&6?$e():hc!==-1?hc:hc=$e()}function fi(t){return t.mode&1?me&2&&wt!==0?wt&-wt:xb.transition!==null?(pc===0&&(pc=Sw()),pc):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:Ow(t.type)),t):1}function Nn(t,e,n,r){if(50<Ma)throw Ma=0,ep=null,Error($(185));Sl(t,n,r),(!(me&2)||t!==lt)&&(t===lt&&(!(me&2)&&(Of|=n),et===4&&Jr(t,wt)),qt(t,r),n===1&&me===0&&!(e.mode&1)&&(bs=$e()+500,Af&&ki()))}function qt(t,e){var n=t.callbackNode;xT(t,e);var r=Rc(t,t===lt?wt:0);if(r===0)n!==null&&sv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&sv(n),e===1)t.tag===0?Rb(Jv.bind(null,t)):Xw(Jv.bind(null,t)),kb(function(){!(me&6)&&ki()}),n=null;else{switch(kw(r)){case 1:n=Kp;break;case 4:n=Tw;break;case 16:n=Pc;break;case 536870912:n=bw;break;default:n=Pc}n=Q1(n,z1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function z1(t,e){if(hc=-1,pc=0,me&6)throw Error($(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var r=Rc(t,t===lt?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Kc(t,r);else{e=r;var i=me;me|=2;var o=H1();(lt!==t||wt!==e)&&(lr=null,bs=$e()+500,Zi(t,e));do try{Xb();break}catch(l){$1(t,l)}while(!0);am(),Wc.current=o,me=i,Ge!==null?e=0:(lt=null,wt=0,e=et)}if(e!==0){if(e===2&&(i=Ch(t),i!==0&&(r=i,e=tp(t,i))),e===1)throw n=sl,Zi(t,0),Jr(t,r),qt(t,$e()),n;if(e===6)Jr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Qb(i)&&(e=Kc(t,r),e===2&&(o=Ch(t),o!==0&&(r=o,e=tp(t,o))),e===1))throw n=sl,Zi(t,0),Jr(t,r),qt(t,$e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Hi(t,zt,lr);break;case 3:if(Jr(t,r),(r&130023424)===r&&(e=Im+500-$e(),10<e)){if(Rc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Lh(Hi.bind(null,t,zt,lr),e);break}Hi(t,zt,lr);break;case 4:if(Jr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-On(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kb(r/1960))-r,10<r){t.timeoutHandle=Lh(Hi.bind(null,t,zt,lr),r);break}Hi(t,zt,lr);break;case 5:Hi(t,zt,lr);break;default:throw Error($(329))}}}return qt(t,$e()),t.callbackNode===n?z1.bind(null,t):null}function tp(t,e){var n=La;return t.current.memoizedState.isDehydrated&&(Zi(t,e).flags|=256),t=Kc(t,e),t!==2&&(e=zt,zt=n,e!==null&&np(e)),t}function np(t){zt===null?zt=t:zt.push.apply(zt,t)}function Qb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ln(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jr(t,e){for(e&=~Em,e&=~Of,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),r=1<<n;t[n]=-1,e&=~r}}function Jv(t){if(me&6)throw Error($(327));ds();var e=Rc(t,0);if(!(e&1))return qt(t,$e()),null;var n=Kc(t,e);if(t.tag!==0&&n===2){var r=Ch(t);r!==0&&(e=r,n=tp(t,r))}if(n===1)throw n=sl,Zi(t,0),Jr(t,e),qt(t,$e()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hi(t,zt,lr),qt(t,$e()),null}function Tm(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(bs=$e()+500,Af&&ki())}}function lo(t){ri!==null&&ri.tag===0&&!(me&6)&&ds();var e=me;me|=1;var n=mn.transition,r=Ee;try{if(mn.transition=null,Ee=1,t)return t()}finally{Ee=r,mn.transition=n,me=e,!(me&6)&&ki()}}function bm(){Jt=ns.current,Pe(ns)}function Zi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Sb(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(im(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lc();break;case 3:Is(),Pe(Ht),Pe(Ot),hm();break;case 5:dm(r);break;case 4:Is();break;case 13:Pe(Me);break;case 19:Pe(Me);break;case 10:lm(r.type._context);break;case 22:case 23:bm()}n=n.return}if(lt=t,Ge=t=di(t.current,null),wt=Jt=e,et=0,sl=null,Em=Of=ao=0,zt=La=null,Gi!==null){for(e=0;e<Gi.length;e++)if(n=Gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Gi=null}return t}function $1(t,e){do{var n=Ge;try{if(am(),cc.current=Hc,$c){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$c=!1}if(so=0,st=Ze=Ve=null,Na=!1,rl=0,_m.current=null,n===null||n.return===null){et=1,sl=e,Ge=null;break}e:{var o=t,s=n.return,l=n,c=e;if(e=wt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,v=l,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var E=v.alternate;E?(v.updateQueue=E.updateQueue,v.memoizedState=E.memoizedState,v.lanes=E.lanes):(v.updateQueue=null,v.memoizedState=null)}var R=Uv(s);if(R!==null){R.flags&=-257,jv(R,s,l,o,e),R.mode&1&&Fv(o,h,e),e=R,c=h;var O=e.updateQueue;if(O===null){var L=new Set;L.add(c),e.updateQueue=L}else O.add(c);break e}else{if(!(e&1)){Fv(o,h,e),Sm();break e}c=Error($(426))}}else if(Oe&&l.mode&1){var M=Uv(s);if(M!==null){!(M.flags&65536)&&(M.flags|=256),jv(M,s,l,o,e),om(Ts(c,l));break e}}o=c=Ts(c,l),et!==4&&(et=2),La===null?La=[o]:La.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var k=k1(o,c,e);Ov(o,k);break e;case 1:l=c;var I=o.type,P=o.stateNode;if(!(o.flags&128)&&(typeof I.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(ci===null||!ci.has(P)))){o.flags|=65536,e&=-e,o.lanes|=e;var U=C1(o,l,e);Ov(o,U);break e}}o=o.return}while(o!==null)}q1(n)}catch(B){e=B,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(!0)}function H1(){var t=Wc.current;return Wc.current=Hc,t===null?Hc:t}function Sm(){(et===0||et===3||et===2)&&(et=4),lt===null||!(ao&268435455)&&!(Of&268435455)||Jr(lt,wt)}function Kc(t,e){var n=me;me|=2;var r=H1();(lt!==t||wt!==e)&&(lr=null,Zi(t,e));do try{Yb();break}catch(i){$1(t,i)}while(!0);if(am(),me=n,Wc.current=r,Ge!==null)throw Error($(261));return lt=null,wt=0,et}function Yb(){for(;Ge!==null;)W1(Ge)}function Xb(){for(;Ge!==null&&!IT();)W1(Ge)}function W1(t){var e=K1(t.alternate,t,Jt);t.memoizedProps=t.pendingProps,e===null?q1(t):Ge=e,_m.current=null}function q1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Hb(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,Ge=null;return}}else if(n=$b(n,e,Jt),n!==null){Ge=n;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);et===0&&(et=5)}function Hi(t,e,n){var r=Ee,i=mn.transition;try{mn.transition=null,Ee=1,Jb(t,e,n,r)}finally{mn.transition=i,Ee=r}return null}function Jb(t,e,n,r){do ds();while(ri!==null);if(me&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(OT(t,o),t===lt&&(Ge=lt=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bu||(Bu=!0,Q1(Pc,function(){return ds(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=mn.transition,mn.transition=null;var s=Ee;Ee=1;var l=me;me|=4,_m.current=null,qb(t,n),j1(n,t),yb(Nh),xc=!!Oh,Nh=Oh=null,t.current=n,Gb(n),TT(),me=l,Ee=s,mn.transition=o}else t.current=n;if(Bu&&(Bu=!1,ri=t,Gc=i),o=t.pendingLanes,o===0&&(ci=null),kT(n.stateNode),qt(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qc)throw qc=!1,t=Zh,Zh=null,t;return Gc&1&&t.tag!==0&&ds(),o=t.pendingLanes,o&1?t===ep?Ma++:(Ma=0,ep=t):Ma=0,ki(),null}function ds(){if(ri!==null){var t=kw(Gc),e=mn.transition,n=Ee;try{if(mn.transition=null,Ee=16>t?16:t,ri===null)var r=!1;else{if(t=ri,ri=null,Gc=0,me&6)throw Error($(331));var i=me;for(me|=4,X=t.current;X!==null;){var o=X,s=o.child;if(X.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var h=l[c];for(X=h;X!==null;){var v=X;switch(v.tag){case 0:case 11:case 15:Da(8,v,o)}var y=v.child;if(y!==null)y.return=v,X=y;else for(;X!==null;){v=X;var E=v.sibling,R=v.return;if(V1(v),v===h){X=null;break}if(E!==null){E.return=R,X=E;break}X=R}}}var O=o.alternate;if(O!==null){var L=O.child;if(L!==null){O.child=null;do{var M=L.sibling;L.sibling=null,L=M}while(L!==null)}}X=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,X=s;else e:for(;X!==null;){if(o=X,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Da(9,o,o.return)}var k=o.sibling;if(k!==null){k.return=o.return,X=k;break e}X=o.return}}var I=t.current;for(X=I;X!==null;){s=X;var P=s.child;if(s.subtreeFlags&2064&&P!==null)P.return=s,X=P;else e:for(s=I;X!==null;){if(l=X,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xf(9,l)}}catch(B){je(l,l.return,B)}if(l===s){X=null;break e}var U=l.sibling;if(U!==null){U.return=l.return,X=U;break e}X=l.return}}if(me=i,ki(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(Tf,t)}catch{}r=!0}return r}finally{Ee=n,mn.transition=e}}return!1}function Zv(t,e,n){e=Ts(n,e),e=k1(t,e,1),t=ui(t,e,1),e=Mt(),t!==null&&(Sl(t,1,e),qt(t,e))}function je(t,e,n){if(t.tag===3)Zv(t,t,n);else for(;e!==null;){if(e.tag===3){Zv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ci===null||!ci.has(r))){t=Ts(n,t),t=C1(e,t,1),e=ui(e,t,1),t=Mt(),e!==null&&(Sl(e,1,t),qt(e,t));break}}e=e.return}}function Zb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Mt(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(wt&n)===n&&(et===4||et===3&&(wt&130023424)===wt&&500>$e()-Im?Zi(t,0):Em|=n),qt(t,e)}function G1(t,e){e===0&&(t.mode&1?(e=xu,xu<<=1,!(xu&130023424)&&(xu=4194304)):e=1);var n=Mt();t=Ir(t,e),t!==null&&(Sl(t,e,n),qt(t,n))}function eS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G1(t,n)}function tS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),G1(t,n)}var K1;K1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ht.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,zb(t,e,n);$t=!!(t.flags&131072)}else $t=!1,Oe&&e.flags&1048576&&Jw(e,Fc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;dc(t,e),t=e.pendingProps;var i=ws(e,Ot.current);fs(e,n),i=mm(null,e,r,t,i,n);var o=gm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(r)?(o=!0,Mc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cm(e),i.updater=Rf,e.stateNode=i,i._reactInternals=e,zh(e,r,t,n),e=Wh(null,e,r,!0,o,n)):(e.tag=0,Oe&&o&&rm(e),Lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(dc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rS(r),t=bn(r,t),i){case 0:e=Hh(null,e,r,t,n);break e;case 1:e=$v(null,e,r,t,n);break e;case 11:e=Bv(null,e,r,t,n);break e;case 14:e=zv(null,e,r,bn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),Hh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),$v(t,e,r,i,n);case 3:e:{if(x1(e),t===null)throw Error($(387));r=e.pendingProps,o=e.memoizedState,i=o.element,i1(t,e),Bc(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Ts(Error($(423)),e),e=Hv(t,e,r,n,i);break e}else if(r!==i){i=Ts(Error($(424)),e),e=Hv(t,e,r,n,i);break e}else for(Zt=li(e.stateNode.containerInfo.firstChild),en=e,Oe=!0,kn=null,n=n1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),r===i){e=Tr(t,e,n);break e}Lt(t,e,r,n)}e=e.child}return e;case 5:return o1(e),t===null&&Uh(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Dh(r,i)?s=null:o!==null&&Dh(r,o)&&(e.flags|=32),R1(t,e),Lt(t,e,s,n),e.child;case 6:return t===null&&Uh(e),null;case 13:return O1(t,e,n);case 4:return fm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Es(e,null,r,n):Lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),Bv(t,e,r,i,n);case 7:return Lt(t,e,e.pendingProps,n),e.child;case 8:return Lt(t,e,e.pendingProps.children,n),e.child;case 12:return Lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Se(Uc,r._currentValue),r._currentValue=s,o!==null)if(Ln(o.value,s)){if(o.children===i.children&&!Ht.current){e=Tr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=gr(-1,n&-n),c.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var v=h.pending;v===null?c.next=c:(c.next=v.next,v.next=c),h.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),jh(o.return,n,e),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error($(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jh(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,fs(e,n),i=gn(i),r=r(i),e.flags|=1,Lt(t,e,r,n),e.child;case 14:return r=e.type,i=bn(r,e.pendingProps),i=bn(r.type,i),zv(t,e,r,i,n);case 15:return A1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),dc(t,e),e.tag=1,Wt(r)?(t=!0,Mc(e)):t=!1,fs(e,n),S1(e,r,i),zh(e,r,i,n),Wh(null,e,r,!0,t,n);case 19:return N1(t,e,n);case 22:return P1(t,e,n)}throw Error($(156,e.tag))};function Q1(t,e){return Iw(t,e)}function nS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,e,n,r){return new nS(t,e,n,r)}function km(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rS(t){if(typeof t=="function")return km(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wp)return 11;if(t===qp)return 14}return 2}function di(t,e){var n=t.alternate;return n===null?(n=pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")km(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case qo:return eo(n.children,i,o,e);case Hp:s=8,i|=8;break;case dh:return t=pn(12,n,e,i|2),t.elementType=dh,t.lanes=o,t;case hh:return t=pn(13,n,e,i),t.elementType=hh,t.lanes=o,t;case ph:return t=pn(19,n,e,i),t.elementType=ph,t.lanes=o,t;case ow:return Nf(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rw:s=10;break e;case iw:s=9;break e;case Wp:s=11;break e;case qp:s=14;break e;case Qr:s=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=pn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function eo(t,e,n,r){return t=pn(7,t,r,e),t.lanes=n,t}function Nf(t,e,n,r){return t=pn(22,t,r,e),t.elementType=ow,t.lanes=n,t.stateNode={isHidden:!1},t}function qd(t,e,n){return t=pn(6,t,null,e),t.lanes=n,t}function Gd(t,e,n){return e=pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cd(0),this.expirationTimes=Cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cm(t,e,n,r,i,o,s,l,c){return t=new iS(t,e,n,l,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=pn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cm(o),t}function oS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Y1(t){if(!t)return vi;t=t._reactInternals;e:{if(_o(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Wt(n))return Yw(t,n,e)}return e}function X1(t,e,n,r,i,o,s,l,c){return t=Cm(n,r,!0,t,i,o,s,l,c),t.context=Y1(null),n=t.current,r=Mt(),i=fi(n),o=gr(r,i),o.callback=e??null,ui(n,o,i),t.current.lanes=i,Sl(t,i,r),qt(t,r),t}function Df(t,e,n,r){var i=e.current,o=Mt(),s=fi(i);return n=Y1(n),e.context===null?e.context=n:e.pendingContext=n,e=gr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ui(i,e,s),t!==null&&(Nn(t,i,s,o),uc(t,i,s)),s}function Qc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ey(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Am(t,e){ey(t,e),(t=t.alternate)&&ey(t,e)}function sS(){return null}var J1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pm(t){this._internalRoot=t}Lf.prototype.render=Pm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Df(t,e,null,null)};Lf.prototype.unmount=Pm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;lo(function(){Df(null,t,null,null)}),e[Er]=null}};function Lf(t){this._internalRoot=t}Lf.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xr.length&&e!==0&&e<Xr[n].priority;n++);Xr.splice(n,0,t),n===0&&xw(t)}};function Rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ty(){}function aS(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var h=Qc(s);o.call(h)}}var s=X1(e,r,t,0,null,!1,!1,"",ty);return t._reactRootContainer=s,t[Er]=s.current,Ja(t.nodeType===8?t.parentNode:t),lo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Qc(c);l.call(h)}}var c=Cm(t,0,!1,null,null,!1,!1,"",ty);return t._reactRootContainer=c,t[Er]=c.current,Ja(t.nodeType===8?t.parentNode:t),lo(function(){Df(e,c,n,r)}),c}function Vf(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Qc(s);l.call(c)}}Df(e,s,t,i)}else s=aS(n,e,t,i,r);return Qc(s)}Cw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ia(e.pendingLanes);n!==0&&(Qp(e,n|1),qt(e,$e()),!(me&6)&&(bs=$e()+500,ki()))}break;case 13:lo(function(){var r=Ir(t,1);if(r!==null){var i=Mt();Nn(r,t,1,i)}}),Am(t,1)}};Yp=function(t){if(t.tag===13){var e=Ir(t,134217728);if(e!==null){var n=Mt();Nn(e,t,134217728,n)}Am(t,134217728)}};Aw=function(t){if(t.tag===13){var e=fi(t),n=Ir(t,e);if(n!==null){var r=Mt();Nn(n,t,e,r)}Am(t,e)}};Pw=function(){return Ee};Rw=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};bh=function(t,e,n){switch(e){case"input":if(vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cf(r);if(!i)throw Error($(90));aw(r),vh(r,i)}}}break;case"textarea":uw(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};gw=Tm;vw=lo;var lS={usingClientEntryPoint:!1,Events:[Cl,Yo,Cf,pw,mw,Tm]},ga={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uS={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_w(t),t===null?null:t.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||sS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{Tf=zu.inject(uS),Gn=zu}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lS;rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rm(e))throw Error($(200));return oS(t,e,null,n)};rn.createRoot=function(t,e){if(!Rm(t))throw Error($(299));var n=!1,r="",i=J1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cm(t,1,!1,null,null,n,!1,r,i),t[Er]=e.current,Ja(t.nodeType===8?t.parentNode:t),new Pm(e)};rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=_w(e),t=t===null?null:t.stateNode,t};rn.flushSync=function(t){return lo(t)};rn.hydrate=function(t,e,n){if(!Mf(e))throw Error($(200));return Vf(null,t,e,!0,n)};rn.hydrateRoot=function(t,e,n){if(!Rm(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=J1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=X1(e,null,t,1,n??null,i,!1,o,s),t[Er]=e.current,Ja(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Lf(e)};rn.render=function(t,e,n){if(!Mf(e))throw Error($(200));return Vf(null,t,e,!1,n)};rn.unmountComponentAtNode=function(t){if(!Mf(t))throw Error($(40));return t._reactRootContainer?(lo(function(){Vf(null,null,t,!1,function(){t._reactRootContainer=null,t[Er]=null})}),!0):!1};rn.unstable_batchedUpdates=Tm;rn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mf(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Vf(t,e,n,!1,r)};rn.version="18.3.1-next-f1338f8080-20240426";function Z1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z1)}catch(t){console.error(t)}}Z1(),Z0.exports=rn;var cS=Z0.exports,ny=cS;ch.createRoot=ny.createRoot,ch.hydrateRoot=ny.hydrateRoot;var ry={};/**
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
 */const e_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],l=t[n++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},t_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,c=i+2<t.length,h=c?t[i+2]:0,v=o>>2,y=(o&3)<<4|l>>4;let E=(l&15)<<2|h>>6,R=h&63;c||(R=64,s||(E=64)),r.push(n[v],n[y],n[E],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(e_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const y=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||h==null||y==null)throw new dS;const E=o<<2|l>>4;if(r.push(E),h!==64){const R=l<<4&240|h>>2;if(r.push(R),y!==64){const O=h<<6&192|y;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hS=function(t){const e=e_(t);return t_.encodeByteArray(e,!0)},Yc=function(t){return hS(t).replace(/\./g,"")},n_=function(t){try{return t_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mS=()=>pS().__FIREBASE_DEFAULTS__,gS=()=>{if(typeof process>"u"||typeof ry>"u")return;const t=ry.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&n_(t[1]);return e&&JSON.parse(e)},Ff=()=>{try{return mS()||gS()||vS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},r_=t=>{var e,n;return(n=(e=Ff())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yS=t=>{const e=r_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},i_=()=>{var t;return(t=Ff())===null||t===void 0?void 0:t.config},o_=t=>{var e;return(e=Ff())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class wS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _S(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yc(JSON.stringify(n)),Yc(JSON.stringify(s)),""].join(".")}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ES(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function IS(){var t;const e=(t=Ff())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SS(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kS(){return!IS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function CS(){try{return typeof indexedDB=="object"}catch{return!1}}function AS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const PS="FirebaseError";class Rr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PS,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pl.prototype.create)}}class Pl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?RS(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Rr(i,l,r)}}function RS(t,e){return t.replace(xS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xS=/\{\$([^}]+)}/g;function OS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(iy(o)&&iy(s)){if(!Xc(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function iy(t){return t!==null&&typeof t=="object"}/**
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
 */function Rl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ba(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Sa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NS(t,e){const n=new DS(t,e);return n.subscribe.bind(n)}class DS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kd),i.error===void 0&&(i.error=Kd),i.complete===void 0&&(i.complete=Kd);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kd(){}/**
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
 */function nn(t){return t&&t._delegate?t._delegate:t}class uo{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wi="[DEFAULT]";/**
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
 */class MS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FS(e))try{this.getOrInitializeService({instanceIdentifier:Wi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wi){return this.instances.has(e)}getOptions(e=Wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wi){return this.component?this.component.multipleInstances?e:Wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VS(t){return t===Wi?void 0:t}function FS(t){return t.instantiationMode==="EAGER"}/**
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
 */class US{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const jS={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},BS=fe.INFO,zS={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},$S=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xm{constructor(e){this.name=e,this._logLevel=BS,this._logHandler=$S,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const HS=(t,e)=>e.some(n=>t instanceof n);let oy,sy;function WS(){return oy||(oy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qS(){return sy||(sy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const s_=new WeakMap,rp=new WeakMap,a_=new WeakMap,Qd=new WeakMap,Om=new WeakMap;function GS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(hi(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&s_.set(n,t)}).catch(()=>{}),Om.set(e,t),e}function KS(t){if(rp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});rp.set(t,e)}let ip={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||a_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QS(t){ip=t(ip)}function YS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yd(this),e,...n);return a_.set(r,e.sort?e.sort():[e]),hi(r)}:qS().includes(t)?function(...e){return t.apply(Yd(this),e),hi(s_.get(this))}:function(...e){return hi(t.apply(Yd(this),e))}}function XS(t){return typeof t=="function"?YS(t):(t instanceof IDBTransaction&&KS(t),HS(t,WS())?new Proxy(t,ip):t)}function hi(t){if(t instanceof IDBRequest)return GS(t);if(Qd.has(t))return Qd.get(t);const e=XS(t);return e!==t&&(Qd.set(t,e),Om.set(e,t)),e}const Yd=t=>Om.get(t);function JS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=hi(s);return r&&s.addEventListener("upgradeneeded",c=>{r(hi(s.result),c.oldVersion,c.newVersion,hi(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const ZS=["get","getKey","getAll","getAllKeys","count"],ek=["put","add","delete","clear"],Xd=new Map;function ay(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xd.get(e))return Xd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ek.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZS.includes(n)))return;const o=async function(s,...l){const c=this.transaction(s,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&c.done]))[0]};return Xd.set(e,o),o}QS(t=>({...t,get:(e,n,r)=>ay(e,n)||t.get(e,n,r),has:(e,n)=>!!ay(e,n)||t.has(e,n)}));/**
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
 */class tk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const op="@firebase/app",ly="0.10.5";/**
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
 */const co=new xm("@firebase/app"),rk="@firebase/app-compat",ik="@firebase/analytics-compat",ok="@firebase/analytics",sk="@firebase/app-check-compat",ak="@firebase/app-check",lk="@firebase/auth",uk="@firebase/auth-compat",ck="@firebase/database",fk="@firebase/database-compat",dk="@firebase/functions",hk="@firebase/functions-compat",pk="@firebase/installations",mk="@firebase/installations-compat",gk="@firebase/messaging",vk="@firebase/messaging-compat",yk="@firebase/performance",wk="@firebase/performance-compat",_k="@firebase/remote-config",Ek="@firebase/remote-config-compat",Ik="@firebase/storage",Tk="@firebase/storage-compat",bk="@firebase/firestore",Sk="@firebase/vertexai-preview",kk="@firebase/firestore-compat",Ck="firebase",Ak="10.12.2";/**
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
 */const sp="[DEFAULT]",Pk={[op]:"fire-core",[rk]:"fire-core-compat",[ok]:"fire-analytics",[ik]:"fire-analytics-compat",[ak]:"fire-app-check",[sk]:"fire-app-check-compat",[lk]:"fire-auth",[uk]:"fire-auth-compat",[ck]:"fire-rtdb",[fk]:"fire-rtdb-compat",[dk]:"fire-fn",[hk]:"fire-fn-compat",[pk]:"fire-iid",[mk]:"fire-iid-compat",[gk]:"fire-fcm",[vk]:"fire-fcm-compat",[yk]:"fire-perf",[wk]:"fire-perf-compat",[_k]:"fire-rc",[Ek]:"fire-rc-compat",[Ik]:"fire-gcs",[Tk]:"fire-gcs-compat",[bk]:"fire-fst",[kk]:"fire-fst-compat",[Sk]:"fire-vertex","fire-js":"fire-js",[Ck]:"fire-js-all"};/**
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
 */const Jc=new Map,Rk=new Map,ap=new Map;function uy(t,e){try{t.container.addComponent(e)}catch(n){co.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if(ap.has(e))return co.debug(`There were multiple attempts to register component ${e}.`),!1;ap.set(e,t);for(const n of Jc.values())uy(n,t);for(const n of Rk.values())uy(n,t);return!0}function Nm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pn(t){return t.settings!==void 0}/**
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
 */const xk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new Pl("app","Firebase",xk);/**
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
 */class Ok{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new uo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=Ak;function l_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pi.create("bad-app-name",{appName:String(i)});if(n||(n=i_()),!n)throw pi.create("no-options");const o=Jc.get(i);if(o){if(Xc(n,o.options)&&Xc(r,o.config))return o;throw pi.create("duplicate-app",{appName:i})}const s=new US(i);for(const c of ap.values())s.addComponent(c);const l=new Ok(n,r,s);return Jc.set(i,l),l}function u_(t=sp){const e=Jc.get(t);if(!e&&t===sp&&i_())return l_();if(!e)throw pi.create("no-app",{appName:t});return e}function mi(t,e,n){var r;let i=(r=Pk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),co.warn(l.join(" "));return}Ss(new uo(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Nk="firebase-heartbeat-database",Dk=1,al="firebase-heartbeat-store";let Jd=null;function c_(){return Jd||(Jd=JS(Nk,Dk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(al)}catch(n){console.warn(n)}}}}).catch(t=>{throw pi.create("idb-open",{originalErrorMessage:t.message})})),Jd}async function Lk(t){try{const n=(await c_()).transaction(al),r=await n.objectStore(al).get(f_(t));return await n.done,r}catch(e){if(e instanceof Rr)co.warn(e.message);else{const n=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});co.warn(n.message)}}}async function cy(t,e){try{const r=(await c_()).transaction(al,"readwrite");await r.objectStore(al).put(e,f_(t)),await r.done}catch(n){if(n instanceof Rr)co.warn(n.message);else{const r=pi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});co.warn(r.message)}}}function f_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Mk=1024,Vk=30*24*60*60*1e3;class Fk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=fy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=Vk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fy(),{heartbeatsToSend:r,unsentEntries:i}=Uk(this._heartbeatsCache.heartbeats),o=Yc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function fy(){return new Date().toISOString().substring(0,10)}function Uk(t,e=Mk){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),dy(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),dy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CS()?AS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Lk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dy(t){return Yc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Bk(t){Ss(new uo("platform-logger",e=>new tk(e),"PRIVATE")),Ss(new uo("heartbeat",e=>new Fk(e),"PRIVATE")),mi(op,ly,t),mi(op,ly,"esm2017"),mi("fire-js","")}Bk("");var zk="firebase",$k="10.12.2";/**
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
 */mi(zk,$k,"app");const Hk={apiKey:"AIzaSyAQCwDr8Sh7GLZSUlCAnCcal7rAqBxG5-0",authDomain:"fir-app-7d6ea.firebaseapp.com",projectId:"fir-app-7d6ea",storageBucket:"fir-app-7d6ea.appspot.com",messagingSenderId:"340764694664",appId:"1:340764694664:web:6b92e4af5476eeeb4c273d"},Uf=l_(Hk);function Dm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function d_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wk=d_,h_=new Pl("auth","Firebase",d_());/**
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
 */const Zc=new xm("@firebase/auth");function qk(t,...e){Zc.logLevel<=fe.WARN&&Zc.warn(`Auth (${Ls}): ${t}`,...e)}function gc(t,...e){Zc.logLevel<=fe.ERROR&&Zc.error(`Auth (${Ls}): ${t}`,...e)}/**
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
 */function yn(t,...e){throw Mm(t,...e)}function Dn(t,...e){return Mm(t,...e)}function Lm(t,e,n){const r=Object.assign(Object.assign({},Wk()),{[e]:n});return new Pl("auth","Firebase",r).create(e,{appName:t.name})}function vr(t){return Lm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&yn(t,"argument-error"),Lm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return h_.create(t,...e)}function re(t,e,...n){if(!t)throw Mm(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gc(e),new Error(e)}function br(t,e){t||hr(e)}/**
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
 */function lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kk(){return hy()==="http:"||hy()==="https:"}function hy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Qk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kk()||TS()||"connection"in navigator)?navigator.onLine:!0}function Yk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xl{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=ES()||bS()}get(){return Qk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vm(t,e){br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class p_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Xk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Jk=new xl(3e4,6e4);function xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Or(t,e,n,r,i={}){return m_(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const l=Rl(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),p_.fetch()(g_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function m_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xk),e);try{const i=new eC(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw $u(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $u(t,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw $u(t,"email-already-in-use",s);if(c==="USER_DISABLED")throw $u(t,"user-disabled",s);const v=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Lm(t,v,h);yn(t,v)}}catch(i){if(i instanceof Rr)throw i;yn(t,"network-request-failed",{message:String(i)})}}async function Ol(t,e,n,r,i={}){const o=await Or(t,e,n,r,i);return"mfaPendingCredential"in o&&yn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function g_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vm(t.config,i):`${t.config.apiScheme}://${i}`}function Zk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dn(this.auth,"network-request-failed")),Jk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $u(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dn(t,e,r);return i.customData._tokenResponse=n,i}function py(t){return t!==void 0&&t.enterprise!==void 0}class tC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Zk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function nC(t,e){return Or(t,"GET","/v2/recaptchaConfig",xr(t,e))}/**
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
 */async function rC(t,e){return Or(t,"POST","/v1/accounts:delete",e)}async function v_(t,e){return Or(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Va(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iC(t,e=!1){const n=nn(t),r=await n.getIdToken(e),i=Fm(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Va(Zd(i.auth_time)),issuedAtTime:Va(Zd(i.iat)),expirationTime:Va(Zd(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Zd(t){return Number(t)*1e3}function Fm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gc("JWT malformed, contained fewer than 3 sections"),null;try{const i=n_(n);return i?JSON.parse(i):(gc("Failed to decode base64 JWT payload"),null)}catch(i){return gc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function my(t){const e=Fm(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ll(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rr&&oC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class up{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Va(this.lastLoginAt),this.creationTime=Va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ef(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ll(t,v_(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?y_(o.providerUserInfo):[],l=lC(t.providerData,s),c=t.isAnonymous,h=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),v=c?h:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new up(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(t,y)}async function aC(t){const e=nn(t);await ef(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function y_(t){return t.map(e=>{var{providerId:n}=e,r=Dm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function uC(t,e){const n=await m_(t,{},async()=>{const r=Rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=g_(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",p_.fetch()(s,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cC(t,e){return Or(t,"POST","/v2/accounts:revokeToken",xr(t,e))}/**
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
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):my(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=my(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await uC(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new hs;return r&&(re(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(re(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
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
 */function Gr(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Dm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new up(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ll(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iC(this,e)}reload(){return aC(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ef(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await ll(this,rC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,l,c,h,v;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(i=n.email)!==null&&i!==void 0?i:void 0,R=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,O=(s=n.photoURL)!==null&&s!==void 0?s:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(h=n.createdAt)!==null&&h!==void 0?h:void 0,I=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:P,emailVerified:U,isAnonymous:B,providerData:W,stsTokenManager:S}=n;re(P&&S,e,"internal-error");const _=hs.fromJSON(this.name,S);re(typeof P=="string",e,"internal-error"),Gr(y,e.name),Gr(E,e.name),re(typeof U=="boolean",e,"internal-error"),re(typeof B=="boolean",e,"internal-error"),Gr(R,e.name),Gr(O,e.name),Gr(L,e.name),Gr(M,e.name),Gr(k,e.name),Gr(I,e.name);const T=new pr({uid:P,auth:e,email:E,emailVerified:U,displayName:y,isAnonymous:B,photoURL:O,phoneNumber:R,tenantId:L,stsTokenManager:_,createdAt:k,lastLoginAt:I});return W&&Array.isArray(W)&&(T.providerData=W.map(C=>Object.assign({},C))),M&&(T._redirectEventId=M),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new hs;i.updateFromServerResponse(n);const o=new pr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ef(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];re(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?y_(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new hs;l.updateFromIdToken(r);const c=new pr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:s}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new up(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,h),c}}/**
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
 */const gy=new Map;function mr(t){br(t instanceof Function,"Expected a class definition");let e=gy.get(t);return e?(br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gy.set(t,e),e)}/**
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
 */class w_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}w_.type="NONE";const vy=w_;/**
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
 */function vc(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=vc(this.userKey,i.apiKey,o),this.fullPersistenceKey=vc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ps(mr(vy),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=i[0]||mr(vy);const s=vc(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const v=await h._get(s);if(v){const y=pr._fromJSON(e,v);h!==o&&(l=y),o=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new ps(o,e,r):(o=c[0],l&&await o._set(s,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(s)}catch{}})),new ps(o,e,r))}}/**
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
 */function yy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(I_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(__(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(b_(e))return"Blackberry";if(S_(e))return"Webos";if(Um(e))return"Safari";if((e.includes("chrome/")||E_(e))&&!e.includes("edge/"))return"Chrome";if(T_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function __(t=Et()){return/firefox\//i.test(t)}function Um(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function E_(t=Et()){return/crios\//i.test(t)}function I_(t=Et()){return/iemobile/i.test(t)}function T_(t=Et()){return/android/i.test(t)}function b_(t=Et()){return/blackberry/i.test(t)}function S_(t=Et()){return/webos/i.test(t)}function jf(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fC(t=Et()){var e;return jf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dC(){return SS()&&document.documentMode===10}function k_(t=Et()){return jf(t)||T_(t)||S_(t)||b_(t)||/windows phone/i.test(t)||I_(t)}function hC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function C_(t,e=[]){let n;switch(t){case"Browser":n=yy(Et());break;case"Worker":n=`${yy(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
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
 */class pC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,l)=>{try{const c=e(o);s(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mC(t,e={}){return Or(t,"GET","/v2/passwordPolicy",xr(t,e))}/**
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
 */const gC=6;class vC{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:gC,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(s=c.containsNumericCharacter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class yC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wy(this),this.idTokenSubscription=new wy(this),this.beforeStateQueue=new pC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await v_(this,{idToken:e}),r=await pr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ef(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(vr(this));const n=e?nn(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mC(this),n=new vC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mr(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[mr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{s=!0,c()}}else{const c=e.addObserver(n);return()=>{s=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=C_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nr(t){return nn(t)}class wy{constructor(e){this.auth=e,this.observer=null,this.addObserver=NS(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wC(t){Bf=t}function A_(t){return Bf.loadJS(t)}function _C(){return Bf.recaptchaEnterpriseScript}function EC(){return Bf.gapiScript}function IC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TC="recaptcha-enterprise",bC="NO_RECAPTCHA";class SC{constructor(e){this.type=TC,this.auth=Nr(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,l)=>{nC(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new tC(c);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,s(h.siteKey)}}).catch(c=>{l(c)})})}function i(o,s,l){const c=window.grecaptcha;py(c)?c.enterprise.ready(()=>{c.enterprise.execute(o,{action:e}).then(h=>{s(h)}).catch(()=>{s(bC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(l=>{if(!n&&py(window.grecaptcha))i(l,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let c=_C();c.length!==0&&(c+=l),A_(c).then(()=>{i(l,o,s)}).catch(h=>{s(h)})}}).catch(l=>{s(l)})})}}async function _y(t,e,n,r=!1){const i=new SC(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function tf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await _y(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await _y(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
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
 */function kC(t,e){const n=Nm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Xc(o,e??{}))return i;yn(i,"already-initialized")}return n.initialize({options:e})}function CC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AC(t,e,n){const r=Nr(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=P_(e),{host:s,port:l}=PC(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),RC()}function P_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PC(t){const e=P_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ey(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Ey(s)}}}function Ey(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class jm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function xC(t,e){return Or(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OC(t,e){return Ol(t,"POST","/v1/accounts:signInWithPassword",xr(t,e))}async function NC(t,e){return Or(t,"POST","/v1/accounts:sendOobCode",xr(t,e))}async function DC(t,e){return NC(t,e)}/**
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
 */async function LC(t,e){return Ol(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}async function MC(t,e){return Ol(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}/**
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
 */class ul extends jm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ul(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ul(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tf(e,n,"signInWithPassword",OC);case"emailLink":return LC(e,{email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tf(e,r,"signUpPassword",xC);case"emailLink":return MC(e,{idToken:n,email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ms(t,e){return Ol(t,"POST","/v1/accounts:signInWithIdp",xr(t,e))}/**
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
 */const VC="http://localhost";class fo extends jm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Dm(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new fo(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:VC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rl(n)}return e}}/**
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
 */function FC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UC(t){const e=ba(Sa(t)).link,n=e?ba(Sa(e)).deep_link_id:null,r=ba(Sa(t)).deep_link_id;return(r?ba(Sa(r)).link:null)||r||n||e||t}class Bm{constructor(e){var n,r,i,o,s,l;const c=ba(Sa(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,v=(r=c.oobCode)!==null&&r!==void 0?r:null,y=FC((i=c.mode)!==null&&i!==void 0?i:null);re(h&&v&&y,"argument-error"),this.apiKey=h,this.operation=y,this.code=v,this.continueUrl=(o=c.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=c.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=UC(e);try{return new Bm(n)}catch{return null}}}/**
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
 */class Ms{constructor(){this.providerId=Ms.PROVIDER_ID}static credential(e,n){return ul._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bm.parseLink(n);return re(r,"argument-error"),ul._fromEmailAndCode(e,r.code,r.tenantId)}}Ms.PROVIDER_ID="password";Ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nl extends zm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zr extends Nl{constructor(){super("facebook.com")}static credential(e){return fo._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
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
 */class cr extends Nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fo._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
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
 */class ei extends Nl{constructor(){super("github.com")}static credential(e){return fo._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.GITHUB_SIGN_IN_METHOD="github.com";ei.PROVIDER_ID="github.com";/**
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
 */class ti extends Nl{constructor(){super("twitter.com")}static credential(e,n){return fo._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ti.credential(n,r)}catch{return null}}}ti.TWITTER_SIGN_IN_METHOD="twitter.com";ti.PROVIDER_ID="twitter.com";/**
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
 */async function jC(t,e){return Ol(t,"POST","/v1/accounts:signUp",xr(t,e))}/**
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
 */class ho{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await pr._fromIdTokenResponse(e,r,i),s=Iy(r);return new ho({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Iy(r);return new ho({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Iy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class nf extends Rr{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nf.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new nf(e,n,r,i)}}function R_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?nf._fromErrorAndOperation(t,o,e,r):o})}async function BC(t,e,n=!1){const r=await ll(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ho._forOperation(t,"link",r)}/**
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
 */async function zC(t,e,n=!1){const{auth:r}=t;if(Pn(r.app))return Promise.reject(vr(r));const i="reauthenticate";try{const o=await ll(t,R_(r,i,e,t),n);re(o.idToken,r,"internal-error");const s=Fm(o.idToken);re(s,r,"internal-error");const{sub:l}=s;return re(t.uid===l,r,"user-mismatch"),ho._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&yn(r,"user-mismatch"),o}}/**
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
 */async function x_(t,e,n=!1){if(Pn(t.app))return Promise.reject(vr(t));const r="signIn",i=await R_(t,r,e),o=await ho._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function $C(t,e){return x_(Nr(t),e)}/**
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
 */async function O_(t){const e=Nr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HC(t,e,n){const r=Nr(t);await tf(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",DC)}async function WC(t,e,n){if(Pn(t.app))return Promise.reject(vr(t));const r=Nr(t),s=await tf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&O_(t),c}),l=await ho._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(l.user),l}function qC(t,e,n){return Pn(t.app)?Promise.reject(vr(t)):$C(nn(t),Ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&O_(t),r})}function GC(t,e,n,r){return nn(t).onIdTokenChanged(e,n,r)}function KC(t,e,n){return nn(t).beforeAuthStateChanged(e,n)}function $m(t,e,n,r){return nn(t).onAuthStateChanged(e,n,r)}function QC(t){return nn(t).signOut()}const rf="__sak";/**
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
 */class N_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rf,"1"),this.storage.removeItem(rf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function YC(){const t=Et();return Um(t)||jf(t)}const XC=1e3,JC=10;class D_ extends N_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YC()&&hC(),this.fallbackToPolling=k_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,l,c)=>{this.notifyListeners(s,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);dC()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}D_.type="LOCAL";const ZC=D_;/**
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
 */class L_ extends N_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}L_.type="SESSION";const M_=L_;/**
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
 */function eA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(s).map(async h=>h(n.origin,o)),c=await eA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zf.receivers=[];/**
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
 */function Hm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,c)=>{const h=Hm("",20);i.port1.start();const v=setTimeout(()=>{c(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(y){const E=y;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(v),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(E.data.response);break;default:clearTimeout(v),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Qn(){return window}function nA(t){Qn().location.href=t}/**
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
 */function V_(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function rA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oA(){return V_()?self:null}/**
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
 */const F_="firebaseLocalStorageDb",sA=1,of="firebaseLocalStorage",U_="fbase_key";class Dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $f(t,e){return t.transaction([of],e?"readwrite":"readonly").objectStore(of)}function aA(){const t=indexedDB.deleteDatabase(F_);return new Dl(t).toPromise()}function cp(){const t=indexedDB.open(F_,sA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(of,{keyPath:U_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(of)?e(r):(r.close(),await aA(),e(await cp()))})})}async function Ty(t,e,n){const r=$f(t,!0).put({[U_]:e,value:n});return new Dl(r).toPromise()}async function lA(t,e){const n=$f(t,!1).get(e),r=await new Dl(n).toPromise();return r===void 0?null:r.value}function by(t,e){const n=$f(t,!0).delete(e);return new Dl(n).toPromise()}const uA=800,cA=3;class j_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return V_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zf._getInstance(oA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rA(),!this.activeServiceWorker)return;this.sender=new tA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cp();return await Ty(e,rf,"1"),await by(e,rf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ty(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>by(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=$f(i,!1).getAll();return new Dl(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j_.type="LOCAL";const fA=j_;new xl(3e4,6e4);/**
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
 */function B_(t,e){return e?mr(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Wm extends jm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dA(t){return x_(t.auth,new Wm(t),t.bypassAuthState)}function hA(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),zC(n,new Wm(t),t.bypassAuthState)}async function pA(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),BC(n,new Wm(t),t.bypassAuthState)}/**
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
 */class z_{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:l}=e;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dA;case"linkViaPopup":case"linkViaRedirect":return pA;case"reauthViaPopup":case"reauthViaRedirect":return hA;default:yn(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mA=new xl(2e3,1e4);async function gA(t,e,n){if(Pn(t.app))return Promise.reject(Dn(t,"operation-not-supported-in-this-environment"));const r=Nr(t);Gk(t,e,zm);const i=B_(r,n);return new Qi(r,"signInViaPopup",e,i).executeNotNull()}class Qi extends z_{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Qi.currentPopupAction&&Qi.currentPopupAction.cancel(),Qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=Hm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mA.get())};e()}}Qi.currentPopupAction=null;/**
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
 */const vA="pendingRedirect",yc=new Map;class yA extends z_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yc.get(this.auth._key());if(!e){try{const r=await wA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yc.set(this.auth._key(),e)}return this.bypassAuthState||yc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wA(t,e){const n=IA(e),r=EA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _A(t,e){yc.set(t._key(),e)}function EA(t){return mr(t._redirectPersistence)}function IA(t){return vc(vA,t.config.apiKey,t.name)}async function TA(t,e,n=!1){if(Pn(t.app))return Promise.reject(vr(t));const r=Nr(t),i=B_(r,e),s=await new yA(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const bA=10*60*1e3;class SA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sy(e))}saveEventToCache(e){this.cachedEventUids.add(Sy(e)),this.lastProcessedEventTime=Date.now()}}function Sy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $_(t);default:return!1}}/**
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
 */async function CA(t,e={}){return Or(t,"GET","/v1/projects",e)}/**
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
 */const AA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PA=/^https?/;async function RA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CA(t);for(const n of e)try{if(xA(n))return}catch{}yn(t,"unauthorized-domain")}function xA(t){const e=lp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!PA.test(n))return!1;if(AA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const OA=new xl(3e4,6e4);function ky(){const t=Qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NA(t){return new Promise((e,n)=>{var r,i,o;function s(){ky(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ky(),n(Dn(t,"network-request-failed"))},timeout:OA.get()})}if(!((i=(r=Qn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Qn().gapi)===null||o===void 0)&&o.load)s();else{const l=IC("iframefcb");return Qn()[l]=()=>{gapi.load?s():n(Dn(t,"network-request-failed"))},A_(`${EC()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw wc=null,e})}let wc=null;function DA(t){return wc=wc||NA(t),wc}/**
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
 */const LA=new xl(5e3,15e3),MA="__/auth/iframe",VA="emulator/auth/iframe",FA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jA(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vm(e,VA):`https://${t.config.authDomain}/${MA}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},i=UA.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Rl(r).slice(1)}`}async function BA(t){const e=await DA(t),n=Qn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:jA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FA,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Dn(t,"network-request-failed"),l=Qn().setTimeout(()=>{o(s)},LA.get());function c(){Qn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{o(s)})}))}/**
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
 */const zA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$A=500,HA=600,WA="_blank",qA="http://localhost";class Cy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GA(t,e,n,r=$A,i=HA){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},zA),{width:r.toString(),height:i.toString(),top:o,left:s}),h=Et().toLowerCase();n&&(l=E_(h)?WA:n),__(h)&&(e=e||qA,c.scrollbars="yes");const v=Object.entries(c).reduce((E,[R,O])=>`${E}${R}=${O},`,"");if(fC(h)&&l!=="_self")return KA(e||"",l),new Cy(null);const y=window.open(e||"",l,v);re(y,t,"popup-blocked");try{y.focus()}catch{}return new Cy(y)}function KA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QA="__/auth/handler",YA="emulator/auth/handler",XA=encodeURIComponent("fac");async function Ay(t,e,n,r,i,o){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:i};if(e instanceof zm){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",OS(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,y]of Object.entries({}))s[v]=y}if(e instanceof Nl){const v=e.getScopes().filter(y=>y!=="");v.length>0&&(s.scopes=v.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const v of Object.keys(l))l[v]===void 0&&delete l[v];const c=await t._getAppCheckToken(),h=c?`#${XA}=${encodeURIComponent(c)}`:"";return`${JA(t)}?${Rl(l).slice(1)}${h}`}function JA({config:t}){return t.emulator?Vm(t,YA):`https://${t.authDomain}/${QA}`}/**
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
 */const eh="webStorageSupport";class ZA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=M_,this._completeRedirectFn=TA,this._overrideRedirectResult=_A}async _openPopup(e,n,r,i){var o;br((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ay(e,n,r,lp(),i);return GA(e,s,Hm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Ay(e,n,r,lp(),i);return nA(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(br(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BA(e),r=new SA(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eh,{type:eh},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[eh];s!==void 0&&n(!!s),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return k_()||Um()||jf()}}const eP=ZA;var Py="@firebase/auth",Ry="1.7.4";/**
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
 */class tP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rP(t){Ss(new uo("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=r.options;re(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:C_(t)},h=new yC(r,i,o,c);return CC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ss(new uo("auth-internal",e=>{const n=Nr(e.getProvider("auth").getImmediate());return(r=>new tP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mi(Py,Ry,nP(t)),mi(Py,Ry,"esm2017")}/**
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
 */const iP=5*60,oP=o_("authIdTokenMaxAge")||iP;let xy=null;const sP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oP)return;const i=n==null?void 0:n.token;xy!==i&&(xy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qm(t=u_()){const e=Nm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kC(t,{popupRedirectResolver:eP,persistence:[fA,ZC,M_]}),r=o_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=sP(o.toString());KC(n,s,()=>s(n.currentUser)),GC(n,l=>s(l))}}const i=r_("auth");return i&&AC(n,`http://${i}`),n}function aP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Dn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",aP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rP("Browser");/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cl(){return cl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cl.apply(this,arguments)}var ii;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ii||(ii={}));const Oy="popstate";function lP(t){t===void 0&&(t={});function e(i,o){let{pathname:s="/",search:l="",hash:c=""}=Eo(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),fp("",{pathname:s,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let c=i.location.href,h=c.indexOf("#");l=h===-1?c:c.slice(0,h)}return l+"#"+(typeof o=="string"?o:H_(o))}function r(i,o){Gm(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return cP(e,n,r,t)}function tt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uP(){return Math.random().toString(36).substr(2,8)}function Ny(t,e){return{usr:t.state,key:t.key,idx:e}}function fp(t,e,n,r){return n===void 0&&(n=null),cl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Eo(e):e,{state:n,key:e&&e.key||r||uP()})}function H_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Eo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function cP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=ii.Pop,c=null,h=v();h==null&&(h=0,s.replaceState(cl({},s.state,{idx:h}),""));function v(){return(s.state||{idx:null}).idx}function y(){l=ii.Pop;let M=v(),k=M==null?null:M-h;h=M,c&&c({action:l,location:L.location,delta:k})}function E(M,k){l=ii.Push;let I=fp(L.location,M,k);n&&n(I,M),h=v()+1;let P=Ny(I,h),U=L.createHref(I);try{s.pushState(P,"",U)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;i.location.assign(U)}o&&c&&c({action:l,location:L.location,delta:1})}function R(M,k){l=ii.Replace;let I=fp(L.location,M,k);n&&n(I,M),h=v();let P=Ny(I,h),U=L.createHref(I);s.replaceState(P,"",U),o&&c&&c({action:l,location:L.location,delta:0})}function O(M){let k=i.location.origin!=="null"?i.location.origin:i.location.href,I=typeof M=="string"?M:H_(M);return I=I.replace(/ $/,"%20"),tt(k,"No window.location.(origin|href) available to create URL for href: "+I),new URL(I,k)}let L={get action(){return l},get location(){return t(i,s)},listen(M){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Oy,y),c=M,()=>{i.removeEventListener(Oy,y),c=null}},createHref(M){return e(i,M)},createURL:O,encodeLocation(M){let k=O(M);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:E,replace:R,go(M){return s.go(M)}};return L}var Dy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dy||(Dy={}));function fP(t,e,n){return n===void 0&&(n="/"),dP(t,e,n,!1)}function dP(t,e,n,r){let i=typeof e=="string"?Eo(e):e,o=G_(i.pathname||"/",n);if(o==null)return null;let s=W_(t);hP(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let h=bP(o);l=IP(s[c],h,r)}return l}function W_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(tt(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let h=to([r,c.relativePath]),v=n.concat(c);o.children&&o.children.length>0&&(tt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),W_(o.children,e,v,h)),!(o.path==null&&!o.index)&&e.push({path:h,score:_P(h,o.index),routesMeta:v})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of q_(o.path))i(o,s,c)}),e}function q_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=q_(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function hP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:EP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pP=/^:[\w-]+$/,mP=3,gP=2,vP=1,yP=10,wP=-2,Ly=t=>t==="*";function _P(t,e){let n=t.split("/"),r=n.length;return n.some(Ly)&&(r+=wP),e&&(r+=gP),n.filter(i=>!Ly(i)).reduce((i,o)=>i+(pP.test(o)?mP:o===""?vP:yP),r)}function EP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function IP(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],h=l===r.length-1,v=o==="/"?e:e.slice(o.length)||"/",y=My({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},v),E=c.route;if(!y&&h&&n&&!r[r.length-1].route.index&&(y=My({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},v)),!y)return null;Object.assign(i,y.params),s.push({params:i,pathname:to([o,y.pathname]),pathnameBase:RP(to([o,y.pathnameBase])),route:E}),y.pathnameBase!=="/"&&(o=to([o,y.pathnameBase]))}return s}function My(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=TP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,v,y)=>{let{paramName:E,isOptional:R}=v;if(E==="*"){let L=l[y]||"";s=o.slice(0,o.length-L.length).replace(/(.)\/+$/,"$1")}const O=l[y];return R&&!O?h[E]=void 0:h[E]=(O||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:s,pattern:t}}function TP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function G_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function SP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Eo(t):t;return{pathname:n?n.startsWith("/")?n:kP(n,e):e,search:xP(r),hash:OP(i)}}function kP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function th(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function CP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function AP(t,e){let n=CP(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function PP(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Eo(t):(i=cl({},t),tt(!i.pathname||!i.pathname.includes("?"),th("?","pathname","search",i)),tt(!i.pathname||!i.pathname.includes("#"),th("#","pathname","hash",i)),tt(!i.search||!i.search.includes("#"),th("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let y=e.length-1;if(!r&&s.startsWith("..")){let E=s.split("/");for(;E[0]==="..";)E.shift(),y-=1;i.pathname=E.join("/")}l=y>=0?e[y]:"/"}let c=SP(i,l),h=s&&s!=="/"&&s.endsWith("/"),v=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(h||v)&&(c.pathname+="/"),c}const to=t=>t.join("/").replace(/\/\/+/g,"/"),RP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),xP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,OP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function NP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const K_=["post","put","patch","delete"];new Set(K_);const DP=["get",...K_];new Set(DP);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fl.apply(this,arguments)}const Km=Z.createContext(null),LP=Z.createContext(null),Hf=Z.createContext(null),Wf=Z.createContext(null),Vs=Z.createContext({outlet:null,matches:[],isDataRoute:!1}),Q_=Z.createContext(null);function qf(){return Z.useContext(Wf)!=null}function Y_(){return qf()||tt(!1),Z.useContext(Wf).location}function X_(t){Z.useContext(Hf).static||Z.useLayoutEffect(t)}function J_(){let{isDataRoute:t}=Z.useContext(Vs);return t?KP():MP()}function MP(){qf()||tt(!1);let t=Z.useContext(Km),{basename:e,future:n,navigator:r}=Z.useContext(Hf),{matches:i}=Z.useContext(Vs),{pathname:o}=Y_(),s=JSON.stringify(AP(i,n.v7_relativeSplatPath)),l=Z.useRef(!1);return X_(()=>{l.current=!0}),Z.useCallback(function(h,v){if(v===void 0&&(v={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let y=PP(h,JSON.parse(s),o,v.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:to([e,y.pathname])),(v.replace?r.replace:r.push)(y,v.state,v)},[e,r,s,o,t])}function VP(t,e){return FP(t,e)}function FP(t,e,n,r){qf()||tt(!1);let{navigator:i}=Z.useContext(Hf),{matches:o}=Z.useContext(Vs),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let h=Y_(),v;if(e){var y;let M=typeof e=="string"?Eo(e):e;c==="/"||(y=M.pathname)!=null&&y.startsWith(c)||tt(!1),v=M}else v=h;let E=v.pathname||"/",R=E;if(c!=="/"){let M=c.replace(/^\//,"").split("/");R="/"+E.replace(/^\//,"").split("/").slice(M.length).join("/")}let O=fP(t,{pathname:R}),L=$P(O&&O.map(M=>Object.assign({},M,{params:Object.assign({},l,M.params),pathname:to([c,i.encodeLocation?i.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?c:to([c,i.encodeLocation?i.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),o,n,r);return e&&L?Z.createElement(Wf.Provider,{value:{location:fl({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:ii.Pop}},L):L}function UP(){let t=GP(),e=NP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},e),n?Z.createElement("pre",{style:i},n):null,null)}const jP=Z.createElement(UP,null);class BP extends Z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?Z.createElement(Vs.Provider,{value:this.props.routeContext},Z.createElement(Q_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zP(t){let{routeContext:e,match:n,children:r}=t,i=Z.useContext(Km);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),Z.createElement(Vs.Provider,{value:e},r)}function $P(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let v=s.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);v>=0||tt(!1),s=s.slice(0,Math.min(s.length,v+1))}let c=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let v=0;v<s.length;v++){let y=s[v];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=v),y.route.id){let{loaderData:E,errors:R}=n,O=y.route.loader&&E[y.route.id]===void 0&&(!R||R[y.route.id]===void 0);if(y.route.lazy||O){c=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((v,y,E)=>{let R,O=!1,L=null,M=null;n&&(R=l&&y.route.id?l[y.route.id]:void 0,L=y.route.errorElement||jP,c&&(h<0&&E===0?(O=!0,M=null):h===E&&(O=!0,M=y.route.hydrateFallbackElement||null)));let k=e.concat(s.slice(0,E+1)),I=()=>{let P;return R?P=L:O?P=M:y.route.Component?P=Z.createElement(y.route.Component,null):y.route.element?P=y.route.element:P=v,Z.createElement(zP,{match:y,routeContext:{outlet:v,matches:k,isDataRoute:n!=null},children:P})};return n&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?Z.createElement(BP,{location:n.location,revalidation:n.revalidation,component:L,error:R,children:I(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):I()},null)}var Z_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Z_||{}),sf=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(sf||{});function HP(t){let e=Z.useContext(Km);return e||tt(!1),e}function WP(t){let e=Z.useContext(LP);return e||tt(!1),e}function qP(t){let e=Z.useContext(Vs);return e||tt(!1),e}function e2(t){let e=qP(),n=e.matches[e.matches.length-1];return n.route.id||tt(!1),n.route.id}function GP(){var t;let e=Z.useContext(Q_),n=WP(sf.UseRouteError),r=e2(sf.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function KP(){let{router:t}=HP(Z_.UseNavigateStable),e=e2(sf.UseNavigateStable),n=Z.useRef(!1);return X_(()=>{n.current=!0}),Z.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,fl({fromRouteId:e},o)))},[t,e])}function _c(t){tt(!1)}function QP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ii.Pop,navigator:o,static:s=!1,future:l}=t;qf()&&tt(!1);let c=e.replace(/^\/*/,"/"),h=Z.useMemo(()=>({basename:c,navigator:o,static:s,future:fl({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=Eo(r));let{pathname:v="/",search:y="",hash:E="",state:R=null,key:O="default"}=r,L=Z.useMemo(()=>{let M=G_(v,c);return M==null?null:{location:{pathname:M,search:y,hash:E,state:R,key:O},navigationType:i}},[c,v,y,E,R,O,i]);return L==null?null:Z.createElement(Hf.Provider,{value:h},Z.createElement(Wf.Provider,{children:n,value:L}))}function YP(t){let{children:e,location:n}=t;return VP(dp(e),n)}new Promise(()=>{});function dp(t,e){e===void 0&&(e=[]);let n=[];return Z.Children.forEach(t,(r,i)=>{if(!Z.isValidElement(r))return;let o=[...e,i];if(r.type===Z.Fragment){n.push.apply(n,dp(r.props.children,o));return}r.type!==_c&&tt(!1),!r.props.index||!r.props.children||tt(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=dp(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const XP="6";try{window.__reactRouterVersion=XP}catch{}const JP="startTransition",Vy=ZI[JP];function ZP(t){let{basename:e,children:n,future:r,window:i}=t,o=Z.useRef();o.current==null&&(o.current=lP({window:i,v5Compat:!0}));let s=o.current,[l,c]=Z.useState({action:s.action,location:s.location}),{v7_startTransition:h}=r||{},v=Z.useCallback(y=>{h&&Vy?Vy(()=>c(y)):c(y)},[c,h]);return Z.useLayoutEffect(()=>s.listen(v),[s,v]),Z.createElement(QP,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}var Fy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Fy||(Fy={}));var Uy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Uy||(Uy={}));const jy=qm(Uf),eR=()=>{const t=J_();Z.useEffect(()=>{const n=$m(jy,r=>{r||t("/login")});return()=>n()},[t]);const e=async()=>{try{await QC(jy),t("/login")}catch(n){console.error("Error al cerrar sesión:",n)}};return J.jsxs(J.Fragment,{children:[J.jsx("div",{children:"Landing Page"}),J.jsx("button",{onClick:e,children:"Cerrar Sesión"})]})},tR=()=>J.jsx(J.Fragment,{children:J.jsx(eR,{})}),nR=()=>J.jsx(J.Fragment,{children:J.jsx("h1",{children:"ERROR 404"})}),rR="/drawy-app/assets/Dowload-Bm10PxR3.svg";var t2={exports:{}};/*!
* sweetalert2 v11.12.0
* Released under the MIT License.
*/(function(t,e){(function(n,r){t.exports=r()})(Wr,function(){function n(g,u){(u==null||u>g.length)&&(u=g.length);for(var f=0,p=Array(u);f<u;f++)p[f]=g[f];return p}function r(g){if(Array.isArray(g))return g}function i(g){if(Array.isArray(g))return n(g)}function o(g,u,f){if(typeof g=="function"?g===u:g.has(u))return arguments.length<3?u:f;throw new TypeError("Private element is not present on this object")}function s(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function l(g,u,f){return u=I(u),T(g,U()?Reflect.construct(u,f||[],I(g).constructor):u.apply(g,f))}function c(g,u){if(u.has(g))throw new TypeError("Cannot initialize the same private elements twice on an object")}function h(g,u){if(!(g instanceof u))throw new TypeError("Cannot call a class as a function")}function v(g,u){return g.get(o(g,u))}function y(g,u,f){c(g,u),u.set(g,f)}function E(g,u,f){return g.set(o(g,u),f),f}function R(g,u,f){if(U())return Reflect.construct.apply(null,arguments);var p=[null];p.push.apply(p,u);var b=new(g.bind.apply(g,p));return b}function O(g,u){for(var f=0;f<u.length;f++){var p=u[f];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(g,Xn(p.key),p)}}function L(g,u,f){return u&&O(g.prototype,u),Object.defineProperty(g,"prototype",{writable:!1}),g}function M(g,u){var f=typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(!f){if(Array.isArray(g)||(f=Kt(g))||u){f&&(g=f);var p=0,b=function(){};return{s:b,n:function(){return p>=g.length?{done:!0}:{done:!1,value:g[p++]}},e:function(se){throw se},f:b}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var j,K=!0,ae=!1;return{s:function(){f=f.call(g)},n:function(){var se=f.next();return K=se.done,se},e:function(se){ae=!0,j=se},f:function(){try{K||f.return==null||f.return()}finally{if(ae)throw j}}}}function k(){return k=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(g,u,f){var p=D(g,u);if(p){var b=Object.getOwnPropertyDescriptor(p,u);return b.get?b.get.call(arguments.length<3?g:f):b.value}},k.apply(null,arguments)}function I(g){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},I(g)}function P(g,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(u&&u.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),Object.defineProperty(g,"prototype",{writable:!1}),u&&C(g,u)}function U(){try{var g=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(U=function(){return!!g})()}function B(g){if(typeof Symbol<"u"&&g[Symbol.iterator]!=null||g["@@iterator"]!=null)return Array.from(g)}function W(g,u){var f=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(f!=null){var p,b,j,K,ae=[],se=!0,Ue=!1;try{if(j=(f=f.call(g)).next,u!==0)for(;!(se=(p=j.call(f)).done)&&(ae.push(p.value),ae.length!==u);se=!0);}catch(la){Ue=!0,b=la}finally{try{if(!se&&f.return!=null&&(K=f.return(),Object(K)!==K))return}finally{if(Ue)throw b}}return ae}}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(g,u){if(u&&(typeof u=="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return s(g)}function C(g,u){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(f,p){return f.__proto__=p,f},C(g,u)}function x(g,u){return r(g)||W(g,u)||Kt(g,u)||S()}function D(g,u){for(;!{}.hasOwnProperty.call(g,u)&&(g=I(g))!==null;);return g}function A(g){return i(g)||B(g)||Kt(g)||_()}function Ut(g,u){if(typeof g!="object"||!g)return g;var f=g[Symbol.toPrimitive];if(f!==void 0){var p=f.call(g,u);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}function Xn(g){var u=Ut(g,"string");return typeof u=="symbol"?u:u+""}function Ne(g){"@babel/helpers - typeof";return Ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Ne(g)}function Kt(g,u){if(g){if(typeof g=="string")return n(g,u);var f={}.toString.call(g).slice(8,-1);return f==="Object"&&g.constructor&&(f=g.constructor.name),f==="Map"||f==="Set"?Array.from(g):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?n(g,u):void 0}}var Q=100,q={},oe=function(){q.previousActiveElement instanceof HTMLElement?(q.previousActiveElement.focus(),q.previousActiveElement=null):document.body&&document.body.focus()},ke=function(u){return new Promise(function(f){if(!u)return f();var p=window.scrollX,b=window.scrollY;q.restoreFocusTimeout=setTimeout(function(){oe(),f()},Q),window.scrollTo(p,b)})},we="swal2-",De=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],V=De.reduce(function(g,u){return g[u]=we+u,g},{}),wn=["success","warning","info","question","error"],jt=wn.reduce(function(g,u){return g[u]=we+u,g},{}),an="SweetAlert2:",Bs=function(u){return u.charAt(0).toUpperCase()+u.slice(1)},It=function(u){console.warn("".concat(an," ").concat(Ne(u)==="object"?u.join(" "):u))},ln=function(u){console.error("".concat(an," ").concat(u))},Ci=[],zs=function(u){Ci.includes(u)||(Ci.push(u),It(u))},To=function(u){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zs('"'.concat(u,'" is deprecated and will be removed in the next major release.').concat(f?' Use "'.concat(f,'" instead.'):""))},Lr=function(u){return typeof u=="function"?u():u},Ai=function(u){return u&&typeof u.toPromise=="function"},Mr=function(u){return Ai(u)?u.toPromise():Promise.resolve(u)},$s=function(u){return u&&Promise.resolve(u)===u},Tt=function(){return document.body.querySelector(".".concat(V.container))},Vr=function(u){var f=Tt();return f?f.querySelector(u):null},ft=function(u){return Vr(".".concat(u))},ge=function(){return ft(V.popup)},Pi=function(){return ft(V.icon)},Hs=function(){return ft(V["icon-content"])},bo=function(){return ft(V.title)},So=function(){return ft(V["html-container"])},Ke=function(){return ft(V.image)},Qe=function(){return ft(V["progress-steps"])},Jn=function(){return ft(V["validation-message"])},Qt=function(){return Vr(".".concat(V.actions," .").concat(V.confirm))},Zn=function(){return Vr(".".concat(V.actions," .").concat(V.cancel))},er=function(){return Vr(".".concat(V.actions," .").concat(V.deny))},Ri=function(){return ft(V["input-label"])},tr=function(){return Vr(".".concat(V.loader))},Fr=function(){return ft(V.actions)},ko=function(){return ft(V.footer)},Co=function(){return ft(V["timer-progress-bar"])},Ws=function(){return ft(V.close)},qs=`
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
`,Ao=function(){var u=ge();if(!u)return[];var f=u.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),p=Array.from(f).sort(function(K,ae){var se=parseInt(K.getAttribute("tabindex")||"0"),Ue=parseInt(ae.getAttribute("tabindex")||"0");return se>Ue?1:se<Ue?-1:0}),b=u.querySelectorAll(qs),j=Array.from(b).filter(function(K){return K.getAttribute("tabindex")!=="-1"});return A(new Set(p.concat(j))).filter(function(K){return Ye(K)})},Po=function(){return ht(document.body,V.shown)&&!ht(document.body,V["toast-shown"])&&!ht(document.body,V["no-backdrop"])},Mn=function(){var u=ge();return u?ht(u,V.toast):!1},Gs=function(){var u=ge();return u?u.hasAttribute("data-loading"):!1},dt=function(u,f){if(u.textContent="",f){var p=new DOMParser,b=p.parseFromString(f,"text/html"),j=b.querySelector("head");j&&Array.from(j.childNodes).forEach(function(ae){u.appendChild(ae)});var K=b.querySelector("body");K&&Array.from(K.childNodes).forEach(function(ae){ae instanceof HTMLVideoElement||ae instanceof HTMLAudioElement?u.appendChild(ae.cloneNode(!0)):u.appendChild(ae)})}},ht=function(u,f){if(!f)return!1;for(var p=f.split(/\s+/),b=0;b<p.length;b++)if(!u.classList.contains(p[b]))return!1;return!0},zl=function(u,f){Array.from(u.classList).forEach(function(p){!Object.values(V).includes(p)&&!Object.values(jt).includes(p)&&!Object.values(f.showClass||{}).includes(p)&&u.classList.remove(p)})},pt=function(u,f,p){if(zl(u,f),f.customClass&&f.customClass[p]){if(typeof f.customClass[p]!="string"&&!f.customClass[p].forEach){It("Invalid type of customClass.".concat(p,'! Expected string or iterable object, got "').concat(Ne(f.customClass[p]),'"'));return}ne(u,f.customClass[p])}},xi=function(u,f){if(!f)return null;switch(f){case"select":case"textarea":case"file":return u.querySelector(".".concat(V.popup," > .").concat(V[f]));case"checkbox":return u.querySelector(".".concat(V.popup," > .").concat(V.checkbox," input"));case"radio":return u.querySelector(".".concat(V.popup," > .").concat(V.radio," input:checked"))||u.querySelector(".".concat(V.popup," > .").concat(V.radio," input:first-child"));case"range":return u.querySelector(".".concat(V.popup," > .").concat(V.range," input"));default:return u.querySelector(".".concat(V.popup," > .").concat(V.input))}},Ur=function(u){if(u.focus(),u.type!=="file"){var f=u.value;u.value="",u.value=f}},Ks=function(u,f,p){!u||!f||(typeof f=="string"&&(f=f.split(/\s+/).filter(Boolean)),f.forEach(function(b){Array.isArray(u)?u.forEach(function(j){p?j.classList.add(b):j.classList.remove(b)}):p?u.classList.add(b):u.classList.remove(b)}))},ne=function(u,f){Ks(u,f,!0)},Yt=function(u,f){Ks(u,f,!1)},Bt=function(u,f){for(var p=Array.from(u.children),b=0;b<p.length;b++){var j=p[b];if(j instanceof HTMLElement&&ht(j,f))return j}},Xt=function(u,f,p){p==="".concat(parseInt(p))&&(p=parseInt(p)),p||parseInt(p)===0?u.style.setProperty(f,typeof p=="number"?"".concat(p,"px"):p):u.style.removeProperty(f)},He=function(u){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";u&&(u.style.display=f)},rt=function(u){u&&(u.style.display="none")},Vn=function(u){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";u&&new MutationObserver(function(){Oi(u,u.innerHTML,f)}).observe(u,{childList:!0,subtree:!0})},$l=function(u,f,p,b){var j=u.querySelector(f);j&&j.style.setProperty(p,b)},Oi=function(u,f){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";f?He(u,p):rt(u)},Ye=function(u){return!!(u&&(u.offsetWidth||u.offsetHeight||u.getClientRects().length))},Hl=function(){return!Ye(Qt())&&!Ye(er())&&!Ye(Zn())},Ro=function(u){return u.scrollHeight>u.clientHeight},Ni=function(u){var f=window.getComputedStyle(u),p=parseFloat(f.getPropertyValue("animation-duration")||"0"),b=parseFloat(f.getPropertyValue("transition-duration")||"0");return p>0||b>0},un=function(u){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=Co();p&&Ye(p)&&(f&&(p.style.transition="none",p.style.width="100%"),setTimeout(function(){p.style.transition="width ".concat(u/1e3,"s linear"),p.style.width="0%"},10))},Wl=function(){var u=Co();if(u){var f=parseInt(window.getComputedStyle(u).width);u.style.removeProperty("transition"),u.style.width="100%";var p=parseInt(window.getComputedStyle(u).width),b=f/p*100;u.style.width="".concat(b,"%")}},Qs=function(){return typeof window>"u"||typeof document>"u"},Ys=`
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
`).replace(/(^|\n)\s*/g,""),Xs=function(){var u=Tt();return u?(u.remove(),Yt([document.documentElement,document.body],[V["no-backdrop"],V["toast-shown"],V["has-column"]]),!0):!1},Fn=function(){q.currentInstance.resetValidationMessage()},ql=function(){var u=ge(),f=Bt(u,V.input),p=Bt(u,V.file),b=u.querySelector(".".concat(V.range," input")),j=u.querySelector(".".concat(V.range," output")),K=Bt(u,V.select),ae=u.querySelector(".".concat(V.checkbox," input")),se=Bt(u,V.textarea);f.oninput=Fn,p.onchange=Fn,K.onchange=Fn,ae.onchange=Fn,se.oninput=Fn,b.oninput=function(){Fn(),j.value=b.value},b.onchange=function(){Fn(),j.value=b.value}},od=function(u){return typeof u=="string"?document.querySelector(u):u},xo=function(u){var f=ge();f.setAttribute("role",u.toast?"alert":"dialog"),f.setAttribute("aria-live",u.toast?"polite":"assertive"),u.toast||f.setAttribute("aria-modal","true")},Gl=function(u){window.getComputedStyle(u).direction==="rtl"&&ne(Tt(),V.rtl)},Js=function(u){var f=Xs();if(Qs()){ln("SweetAlert2 requires document to initialize");return}var p=document.createElement("div");p.className=V.container,f&&ne(p,V["no-transition"]),dt(p,Ys);var b=od(u.target);b.appendChild(p),xo(u),Gl(b),ql()},nr=function(u,f){u instanceof HTMLElement?f.appendChild(u):Ne(u)==="object"?rr(u,f):u&&dt(f,u)},rr=function(u,f){u.jquery?Zs(f,u):dt(f,u.toString())},Zs=function(u,f){if(u.textContent="",0 in f)for(var p=0;p in f;p++)u.appendChild(f[p].cloneNode(!0));else u.appendChild(f.cloneNode(!0))},ir=function(){if(Qs())return!1;var g=document.createElement("div");return typeof g.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof g.style.animation<"u"?"animationend":!1}(),Kl=function(u,f){var p=Fr(),b=tr();!p||!b||(!f.showConfirmButton&&!f.showDenyButton&&!f.showCancelButton?rt(p):He(p),pt(p,f,"actions"),Ql(p,b,f),dt(b,f.loaderHtml||""),pt(b,f,"loader"))};function Ql(g,u,f){var p=Qt(),b=er(),j=Zn();!p||!b||!j||(Di(p,"confirm",f),Di(b,"deny",f),Di(j,"cancel",f),Yl(p,b,j,f),f.reverseButtons&&(f.toast?(g.insertBefore(j,p),g.insertBefore(b,p)):(g.insertBefore(j,u),g.insertBefore(b,u),g.insertBefore(p,u))))}function Yl(g,u,f,p){if(!p.buttonsStyling){Yt([g,u,f],V.styled);return}ne([g,u,f],V.styled),p.confirmButtonColor&&(g.style.backgroundColor=p.confirmButtonColor,ne(g,V["default-outline"])),p.denyButtonColor&&(u.style.backgroundColor=p.denyButtonColor,ne(u,V["default-outline"])),p.cancelButtonColor&&(f.style.backgroundColor=p.cancelButtonColor,ne(f,V["default-outline"]))}function Di(g,u,f){var p=Bs(u);Oi(g,f["show".concat(p,"Button")],"inline-block"),dt(g,f["".concat(u,"ButtonText")]||""),g.setAttribute("aria-label",f["".concat(u,"ButtonAriaLabel")]||""),g.className=V[u],pt(g,f,"".concat(u,"Button"))}var ea=function(u,f){var p=Ws();p&&(dt(p,f.closeButtonHtml||""),pt(p,f,"closeButton"),Oi(p,f.showCloseButton),p.setAttribute("aria-label",f.closeButtonAriaLabel||""))},Xl=function(u,f){var p=Tt();p&&(Jl(p,f.backdrop),sd(p,f.position),ad(p,f.grow),pt(p,f,"container"))};function Jl(g,u){typeof u=="string"?g.style.background=u:u||ne([document.documentElement,document.body],V["no-backdrop"])}function sd(g,u){u&&(u in V?ne(g,V[u]):(It('The "position" parameter is not valid, defaulting to "center"'),ne(g,V.center)))}function ad(g,u){u&&ne(g,V["grow-".concat(u)])}var _e={innerParams:new WeakMap,domCache:new WeakMap},Zl=["input","file","range","select","radio","checkbox","textarea"],ld=function(u,f){var p=ge();if(p){var b=_e.innerParams.get(u),j=!b||f.input!==b.input;Zl.forEach(function(K){var ae=Bt(p,V[K]);ae&&(Oo(K,f.inputAttributes),ae.className=V[K],j&&rt(ae))}),f.input&&(j&&or(f),No(f))}},or=function(u){if(u.input){if(!Ie[u.input]){ln("Unexpected type of input! Expected ".concat(Object.keys(Ie).join(" | "),', got "').concat(u.input,'"'));return}var f=Li(u.input),p=Ie[u.input](f,u);He(f),u.inputAutoFocus&&setTimeout(function(){Ur(p)})}},_n=function(u){for(var f=0;f<u.attributes.length;f++){var p=u.attributes[f].name;["id","type","value","style"].includes(p)||u.removeAttribute(p)}},Oo=function(u,f){var p=xi(ge(),u);if(p){_n(p);for(var b in f)p.setAttribute(b,f[b])}},No=function(u){var f=Li(u.input);Ne(u.customClass)==="object"&&ne(f,u.customClass.input)},Do=function(u,f){(!u.placeholder||f.inputPlaceholder)&&(u.placeholder=f.inputPlaceholder)},ye=function(u,f,p){if(p.inputLabel){var b=document.createElement("label"),j=V["input-label"];b.setAttribute("for",u.id),b.className=j,Ne(p.customClass)==="object"&&ne(b,p.customClass.inputLabel),b.innerText=p.inputLabel,f.insertAdjacentElement("beforebegin",b)}},Li=function(u){return Bt(ge(),V[u]||V.input)},Un=function(u,f){["string","number"].includes(Ne(f))?u.value="".concat(f):$s(f)||It('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(Ne(f),'"'))},Ie={};Ie.text=Ie.email=Ie.password=Ie.number=Ie.tel=Ie.url=Ie.search=Ie.date=Ie["datetime-local"]=Ie.time=Ie.week=Ie.month=function(g,u){return Un(g,u.inputValue),ye(g,g,u),Do(g,u),g.type=u.input,g},Ie.file=function(g,u){return ye(g,g,u),Do(g,u),g},Ie.range=function(g,u){var f=g.querySelector("input"),p=g.querySelector("output");return Un(f,u.inputValue),f.type=u.input,Un(p,u.inputValue),ye(f,g,u),g},Ie.select=function(g,u){if(g.textContent="",u.inputPlaceholder){var f=document.createElement("option");dt(f,u.inputPlaceholder),f.value="",f.disabled=!0,f.selected=!0,g.appendChild(f)}return ye(g,g,u),g},Ie.radio=function(g){return g.textContent="",g},Ie.checkbox=function(g,u){var f=xi(ge(),"checkbox");f.value="1",f.checked=!!u.inputValue;var p=g.querySelector("span");return dt(p,u.inputPlaceholder),f},Ie.textarea=function(g,u){Un(g,u.inputValue),Do(g,u),ye(g,g,u);var f=function(b){return parseInt(window.getComputedStyle(b).marginLeft)+parseInt(window.getComputedStyle(b).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var p=parseInt(window.getComputedStyle(ge()).width),b=function(){if(document.body.contains(g)){var K=g.offsetWidth+f(g);K>p?ge().style.width="".concat(K,"px"):Xt(ge(),"width",u.width)}};new MutationObserver(b).observe(g,{attributes:!0,attributeFilter:["style"]})}}),g};var ud=function(u,f){var p=So();p&&(Vn(p),pt(p,f,"htmlContainer"),f.html?(nr(f.html,p),He(p,"block")):f.text?(p.textContent=f.text,He(p,"block")):rt(p),ld(u,f))},eu=function(u,f){var p=ko();p&&(Vn(p),Oi(p,f.footer,"block"),f.footer&&nr(f.footer,p),pt(p,f,"footer"))},cd=function(u,f){var p=_e.innerParams.get(u),b=Pi();if(b){if(p&&f.icon===p.icon){En(b,f),tu(b,f);return}if(!f.icon&&!f.iconHtml){rt(b);return}if(f.icon&&Object.keys(jt).indexOf(f.icon)===-1){ln('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(f.icon,'"')),rt(b);return}He(b),En(b,f),tu(b,f),ne(b,f.showClass&&f.showClass.icon)}},tu=function(u,f){for(var p=0,b=Object.entries(jt);p<b.length;p++){var j=x(b[p],2),K=j[0],ae=j[1];f.icon!==K&&Yt(u,ae)}ne(u,f.icon&&jt[f.icon]),nu(u,f),fd(),pt(u,f,"icon")},fd=function(){var u=ge();if(u)for(var f=window.getComputedStyle(u).getPropertyValue("background-color"),p=u.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),b=0;b<p.length;b++)p[b].style.backgroundColor=f},dd=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Mi=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,En=function(u,f){if(!(!f.icon&&!f.iconHtml)){var p=u.innerHTML,b="";if(f.iconHtml)b=ta(f.iconHtml);else if(f.icon==="success")b=dd,p=p.replace(/ style=".*?"/g,"");else if(f.icon==="error")b=Mi;else if(f.icon){var j={question:"?",warning:"!",info:"i"};b=ta(j[f.icon])}p.trim()!==b.trim()&&dt(u,b)}},nu=function(u,f){if(f.iconColor){u.style.color=f.iconColor,u.style.borderColor=f.iconColor;for(var p=0,b=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];p<b.length;p++){var j=b[p];$l(u,j,"background-color",f.iconColor)}$l(u,".swal2-success-ring","border-color",f.iconColor)}},ta=function(u){return'<div class="'.concat(V["icon-content"],'">').concat(u,"</div>")},ru=function(u,f){var p=Ke();if(p){if(!f.imageUrl){rt(p);return}He(p,""),p.setAttribute("src",f.imageUrl),p.setAttribute("alt",f.imageAlt||""),Xt(p,"width",f.imageWidth),Xt(p,"height",f.imageHeight),p.className=V.image,pt(p,f,"image")}},jr=function(u,f){var p=Tt(),b=ge();if(!(!p||!b)){if(f.toast){Xt(p,"width",f.width),b.style.width="100%";var j=tr();j&&b.insertBefore(j,Pi())}else Xt(b,"width",f.width);Xt(b,"padding",f.padding),f.color&&(b.style.color=f.color),f.background&&(b.style.background=f.background),rt(Jn()),hd(b,f)}},hd=function(u,f){var p=f.showClass||{};u.className="".concat(V.popup," ").concat(Ye(u)?p.popup:""),f.toast?(ne([document.documentElement,document.body],V["toast-shown"]),ne(u,V.toast)):ne(u,V.modal),pt(u,f,"popup"),typeof f.customClass=="string"&&ne(u,f.customClass),f.icon&&ne(u,V["icon-".concat(f.icon)])},pd=function(u,f){var p=Qe();if(p){var b=f.progressSteps,j=f.currentProgressStep;if(!b||b.length===0||j===void 0){rt(p);return}He(p),p.textContent="",j>=b.length&&It("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),b.forEach(function(K,ae){var se=md(K);if(p.appendChild(se),ae===j&&ne(se,V["active-progress-step"]),ae!==b.length-1){var Ue=jn(f);p.appendChild(Ue)}})}},md=function(u){var f=document.createElement("li");return ne(f,V["progress-step"]),dt(f,u),f},jn=function(u){var f=document.createElement("li");return ne(f,V["progress-step-line"]),u.progressStepsDistance&&Xt(f,"width",u.progressStepsDistance),f},gd=function(u,f){var p=bo();p&&(Vn(p),Oi(p,f.title||f.titleText,"block"),f.title&&nr(f.title,p),f.titleText&&(p.innerText=f.titleText),pt(p,f,"title"))},iu=function(u,f){jr(u,f),Xl(u,f),pd(u,f),cd(u,f),ru(u,f),gd(u,f),ea(u,f),ud(u,f),Kl(u,f),eu(u,f);var p=ge();typeof f.didRender=="function"&&p&&f.didRender(p)},Vi=function(){return Ye(ge())},Fi=function(){var u;return(u=Qt())===null||u===void 0?void 0:u.click()},ou=function(){var u;return(u=er())===null||u===void 0?void 0:u.click()},Ui=function(){var u;return(u=Zn())===null||u===void 0?void 0:u.click()},cn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),na=function(u){u.keydownTarget&&u.keydownHandlerAdded&&(u.keydownTarget.removeEventListener("keydown",u.keydownHandler,{capture:u.keydownListenerCapture}),u.keydownHandlerAdded=!1)},ra=function(u,f,p){na(u),f.toast||(u.keydownHandler=function(b){return au(f,b,p)},u.keydownTarget=f.keydownListenerCapture?window:ge(),u.keydownListenerCapture=f.keydownListenerCapture,u.keydownTarget.addEventListener("keydown",u.keydownHandler,{capture:u.keydownListenerCapture}),u.keydownHandlerAdded=!0)},Te=function(u,f){var p,b=Ao();if(b.length){u=u+f,u===b.length?u=0:u===-1&&(u=b.length-1),b[u].focus();return}(p=ge())===null||p===void 0||p.focus()},su=["ArrowRight","ArrowDown"],vd=["ArrowLeft","ArrowUp"],au=function(u,f,p){u&&(f.isComposing||f.keyCode===229||(u.stopKeydownPropagation&&f.stopPropagation(),f.key==="Enter"?lu(f,u):f.key==="Tab"?uu(f):[].concat(su,vd).includes(f.key)?Lo(f.key):f.key==="Escape"&&cu(f,u,p)))},lu=function(u,f){if(Lr(f.allowEnterKey)){var p=xi(ge(),f.input);if(u.target&&p&&u.target instanceof HTMLElement&&u.target.outerHTML===p.outerHTML){if(["textarea","file"].includes(f.input))return;Fi(),u.preventDefault()}}},uu=function(u){for(var f=u.target,p=Ao(),b=-1,j=0;j<p.length;j++)if(f===p[j]){b=j;break}u.shiftKey?Te(b,-1):Te(b,1),u.stopPropagation(),u.preventDefault()},Lo=function(u){var f=Fr(),p=Qt(),b=er(),j=Zn();if(!(!f||!p||!b||!j)){var K=[p,b,j];if(!(document.activeElement instanceof HTMLElement&&!K.includes(document.activeElement))){var ae=su.includes(u)?"nextElementSibling":"previousElementSibling",se=document.activeElement;if(se){for(var Ue=0;Ue<f.children.length;Ue++){if(se=se[ae],!se)return;if(se instanceof HTMLButtonElement&&Ye(se))break}se instanceof HTMLButtonElement&&se.focus()}}}},cu=function(u,f,p){Lr(f.allowEscapeKey)&&(u.preventDefault(),p(cn.esc))},bt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},fu=function(){var u=Tt(),f=Array.from(document.body.children);f.forEach(function(p){p.contains(u)||(p.hasAttribute("aria-hidden")&&p.setAttribute("data-previous-aria-hidden",p.getAttribute("aria-hidden")||""),p.setAttribute("aria-hidden","true"))})},du=function(){var u=Array.from(document.body.children);u.forEach(function(f){f.hasAttribute("data-previous-aria-hidden")?(f.setAttribute("aria-hidden",f.getAttribute("data-previous-aria-hidden")||""),f.removeAttribute("data-previous-aria-hidden")):f.removeAttribute("aria-hidden")})},Br=typeof window<"u"&&!!window.GestureEvent,hu=function(){if(Br&&!ht(document.body,V.iosfix)){var u=document.body.scrollTop;document.body.style.top="".concat(u*-1,"px"),ne(document.body,V.iosfix),ia()}},ia=function(){var u=Tt();if(u){var f;u.ontouchstart=function(p){f=Mo(p)},u.ontouchmove=function(p){f&&(p.preventDefault(),p.stopPropagation())}}},Mo=function(u){var f=u.target,p=Tt(),b=So();return!p||!b||pu(u)||Vo(u)?!1:f===p||!Ro(p)&&f instanceof HTMLElement&&f.tagName!=="INPUT"&&f.tagName!=="TEXTAREA"&&!(Ro(b)&&b.contains(f))},pu=function(u){return u.touches&&u.touches.length&&u.touches[0].touchType==="stylus"},Vo=function(u){return u.touches&&u.touches.length>1},yd=function(){if(ht(document.body,V.iosfix)){var u=parseInt(document.body.style.top,10);Yt(document.body,V.iosfix),document.body.style.top="",document.body.scrollTop=u*-1}},mu=function(){var u=document.createElement("div");u.className=V["scrollbar-measure"],document.body.appendChild(u);var f=u.getBoundingClientRect().width-u.clientWidth;return document.body.removeChild(u),f},fn=null,gu=function(u){fn===null&&(document.body.scrollHeight>window.innerHeight||u==="scroll")&&(fn=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(fn+mu(),"px"))},vu=function(){fn!==null&&(document.body.style.paddingRight="".concat(fn,"px"),fn=null)};function Fo(g,u,f,p){Mn()?aa(g,p):(ke(f).then(function(){return aa(g,p)}),na(q)),Br?(u.setAttribute("style","display:none !important"),u.removeAttribute("class"),u.innerHTML=""):u.remove(),Po()&&(vu(),yd(),du()),oa()}function oa(){Yt([document.documentElement,document.body],[V.shown,V["height-auto"],V["no-backdrop"],V["toast-shown"]])}function In(g){g=sr(g);var u=bt.swalPromiseResolve.get(this),f=Uo(this);this.isAwaitingPromise?g.isDismissed||(zr(this),u(g)):f&&u(g)}var Uo=function(u){var f=ge();if(!f)return!1;var p=_e.innerParams.get(u);if(!p||ht(f,p.hideClass.popup))return!1;Yt(f,p.showClass.popup),ne(f,p.hideClass.popup);var b=Tt();return Yt(b,p.showClass.backdrop),ne(b,p.hideClass.backdrop),yu(u,f,p),!0};function sa(g){var u=bt.swalPromiseReject.get(this);zr(this),u&&u(g)}var zr=function(u){u.isAwaitingPromise&&(delete u.isAwaitingPromise,_e.innerParams.get(u)||u._destroy())},sr=function(u){return typeof u>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},u)},yu=function(u,f,p){var b=Tt(),j=ir&&Ni(f);typeof p.willClose=="function"&&p.willClose(f),j?wu(u,f,b,p.returnFocus,p.didClose):Fo(u,b,p.returnFocus,p.didClose)},wu=function(u,f,p,b,j){ir&&(q.swalCloseEventFinishedCallback=Fo.bind(null,u,p,b,j),f.addEventListener(ir,function(K){K.target===f&&(q.swalCloseEventFinishedCallback(),delete q.swalCloseEventFinishedCallback)}))},aa=function(u,f){setTimeout(function(){typeof f=="function"&&f.bind(u.params)(),u._destroy&&u._destroy()})},ar=function(u){var f=ge();if(f||new Su,f=ge(),!!f){var p=tr();Mn()?rt(Pi()):jo(f,u),He(p),f.setAttribute("data-loading","true"),f.setAttribute("aria-busy","true"),f.focus()}},jo=function(u,f){var p=Fr(),b=tr();!p||!b||(!f&&Ye(Qt())&&(f=Qt()),He(p),f&&(rt(f),b.setAttribute("data-button-to-replace",f.className),p.insertBefore(b,f)),ne([u,p],V.loading))},Nt=function(u,f){f.input==="select"||f.input==="radio"?d(u,f):["text","email","number","tel","textarea"].some(function(p){return p===f.input})&&(Ai(f.inputValue)||$s(f.inputValue))&&(ar(Qt()),m(u,f))},_u=function(u,f){var p=u.getInput();if(!p)return null;switch(f.input){case"checkbox":return Eu(p);case"radio":return $r(p);case"file":return a(p);default:return f.inputAutoTrim?p.value.trim():p.value}},Eu=function(u){return u.checked?1:0},$r=function(u){return u.checked?u.value:null},a=function(u){return u.files&&u.files.length?u.getAttribute("multiple")!==null?u.files:u.files[0]:null},d=function(u,f){var p=ge();if(p){var b=function(K){f.input==="select"?w(p,F(K),f):f.input==="radio"&&N(p,F(K),f)};Ai(f.inputOptions)||$s(f.inputOptions)?(ar(Qt()),Mr(f.inputOptions).then(function(j){u.hideLoading(),b(j)})):Ne(f.inputOptions)==="object"?b(f.inputOptions):ln("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(Ne(f.inputOptions)))}},m=function(u,f){var p=u.getInput();p&&(rt(p),Mr(f.inputValue).then(function(b){p.value=f.input==="number"?"".concat(parseFloat(b)||0):"".concat(b),He(p),p.focus(),u.hideLoading()}).catch(function(b){ln("Error in inputValue promise: ".concat(b)),p.value="",He(p),p.focus(),u.hideLoading()}))};function w(g,u,f){var p=Bt(g,V.select);if(p){var b=function(K,ae,se){var Ue=document.createElement("option");Ue.value=se,dt(Ue,ae),Ue.selected=G(se,f.inputValue),K.appendChild(Ue)};u.forEach(function(j){var K=j[0],ae=j[1];if(Array.isArray(ae)){var se=document.createElement("optgroup");se.label=K,se.disabled=!1,p.appendChild(se),ae.forEach(function(Ue){return b(se,Ue[1],Ue[0])})}else b(p,ae,K)}),p.focus()}}function N(g,u,f){var p=Bt(g,V.radio);if(p){u.forEach(function(j){var K=j[0],ae=j[1],se=document.createElement("input"),Ue=document.createElement("label");se.type="radio",se.name=V.radio,se.value=K,G(K,f.inputValue)&&(se.checked=!0);var la=document.createElement("span");dt(la,ae),la.className=V.label,Ue.appendChild(se),Ue.appendChild(la),p.appendChild(Ue)});var b=p.querySelectorAll("input");b.length&&b[0].focus()}}var F=function g(u){var f=[];return u instanceof Map?u.forEach(function(p,b){var j=p;Ne(j)==="object"&&(j=g(j)),f.push([b,j])}):Object.keys(u).forEach(function(p){var b=u[p];Ne(b)==="object"&&(b=g(b)),f.push([p,b])}),f},G=function(u,f){return!!f&&f.toString()===u.toString()},ve=void 0,Xe=function(u){var f=_e.innerParams.get(u);u.disableButtons(),f.input?Je(u,"confirm"):wd(u,!0)},he=function(u){var f=_e.innerParams.get(u);u.disableButtons(),f.returnInputValueOnDeny?Je(u,"deny"):Dt(u,!1)},it=function(u,f){u.disableButtons(),f(cn.cancel)},Je=function(u,f){var p=_e.innerParams.get(u);if(!p.input){ln('The "input" parameter is needed to be set when using returnInputValueOn'.concat(Bs(f)));return}var b=u.getInput(),j=_u(u,p);p.inputValidator?Hr(u,j,f):b&&!b.checkValidity()?(u.enableButtons(),u.showValidationMessage(p.validationMessage||b.validationMessage)):f==="deny"?Dt(u,j):wd(u,j)},Hr=function(u,f,p){var b=_e.innerParams.get(u);u.disableInput();var j=Promise.resolve().then(function(){return Mr(b.inputValidator(f,b.validationMessage))});j.then(function(K){u.enableButtons(),u.enableInput(),K?u.showValidationMessage(K):p==="deny"?Dt(u,f):wd(u,f)})},Dt=function(u,f){var p=_e.innerParams.get(u||ve);if(p.showLoaderOnDeny&&ar(er()),p.preDeny){u.isAwaitingPromise=!0;var b=Promise.resolve().then(function(){return Mr(p.preDeny(f,p.validationMessage))});b.then(function(j){j===!1?(u.hideLoading(),zr(u)):u.close({isDenied:!0,value:typeof j>"u"?f:j})}).catch(function(j){return Bo(u||ve,j)})}else u.close({isDenied:!0,value:f})},ji=function(u,f){u.close({isConfirmed:!0,value:f})},Bo=function(u,f){u.rejectPromise(f)},wd=function(u,f){var p=_e.innerParams.get(u||ve);if(p.showLoaderOnConfirm&&ar(),p.preConfirm){u.resetValidationMessage(),u.isAwaitingPromise=!0;var b=Promise.resolve().then(function(){return Mr(p.preConfirm(f,p.validationMessage))});b.then(function(j){Ye(Jn())||j===!1?(u.hideLoading(),zr(u)):ji(u,typeof j>"u"?f:j)}).catch(function(j){return Bo(u||ve,j)})}else ji(u,f)};function Iu(){var g=_e.innerParams.get(this);if(g){var u=_e.domCache.get(this);rt(u.loader),Mn()?g.icon&&He(Pi()):VE(u),Yt([u.popup,u.actions],V.loading),u.popup.removeAttribute("aria-busy"),u.popup.removeAttribute("data-loading"),u.confirmButton.disabled=!1,u.denyButton.disabled=!1,u.cancelButton.disabled=!1}}var VE=function(u){var f=u.popup.getElementsByClassName(u.loader.getAttribute("data-button-to-replace"));f.length?He(f[0],"inline-block"):Hl()&&rt(u.actions)};function bg(){var g=_e.innerParams.get(this),u=_e.domCache.get(this);return u?xi(u.popup,g.input):null}function Sg(g,u,f){var p=_e.domCache.get(g);u.forEach(function(b){p[b].disabled=f})}function kg(g,u){var f=ge();if(!(!f||!g))if(g.type==="radio")for(var p=f.querySelectorAll('[name="'.concat(V.radio,'"]')),b=0;b<p.length;b++)p[b].disabled=u;else g.disabled=u}function Cg(){Sg(this,["confirmButton","denyButton","cancelButton"],!1)}function Ag(){Sg(this,["confirmButton","denyButton","cancelButton"],!0)}function Pg(){kg(this.getInput(),!1)}function Rg(){kg(this.getInput(),!0)}function xg(g){var u=_e.domCache.get(this),f=_e.innerParams.get(this);dt(u.validationMessage,g),u.validationMessage.className=V["validation-message"],f.customClass&&f.customClass.validationMessage&&ne(u.validationMessage,f.customClass.validationMessage),He(u.validationMessage);var p=this.getInput();p&&(p.setAttribute("aria-invalid","true"),p.setAttribute("aria-describedby",V["validation-message"]),Ur(p),ne(p,V.inputerror))}function Og(){var g=_e.domCache.get(this);g.validationMessage&&rt(g.validationMessage);var u=this.getInput();u&&(u.removeAttribute("aria-invalid"),u.removeAttribute("aria-describedby"),Yt(u,V.inputerror))}var zo={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},FE=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],UE={},jE=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Ng=function(u){return Object.prototype.hasOwnProperty.call(zo,u)},Dg=function(u){return FE.indexOf(u)!==-1},Lg=function(u){return UE[u]},BE=function(u){Ng(u)||It('Unknown parameter "'.concat(u,'"'))},zE=function(u){jE.includes(u)&&It('The parameter "'.concat(u,'" is incompatible with toasts'))},$E=function(u){var f=Lg(u);f&&To(u,f)},HE=function(u){u.backdrop===!1&&u.allowOutsideClick&&It('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var f in u)BE(f),u.toast&&zE(f),$E(f)};function Mg(g){var u=ge(),f=_e.innerParams.get(this);if(!u||ht(u,f.hideClass.popup)){It("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var p=WE(g),b=Object.assign({},f,p);iu(this,b),_e.innerParams.set(this,b),Object.defineProperties(this,{params:{value:Object.assign({},this.params,g),writable:!1,enumerable:!0}})}var WE=function(u){var f={};return Object.keys(u).forEach(function(p){Dg(p)?f[p]=u[p]:It("Invalid parameter to update: ".concat(p))}),f};function Vg(){var g=_e.domCache.get(this),u=_e.innerParams.get(this);if(!u){Fg(this);return}g.popup&&q.swalCloseEventFinishedCallback&&(q.swalCloseEventFinishedCallback(),delete q.swalCloseEventFinishedCallback),typeof u.didDestroy=="function"&&u.didDestroy(),qE(this)}var qE=function(u){Fg(u),delete u.params,delete q.keydownHandler,delete q.keydownTarget,delete q.currentInstance},Fg=function(u){u.isAwaitingPromise?(_d(_e,u),u.isAwaitingPromise=!0):(_d(bt,u),_d(_e,u),delete u.isAwaitingPromise,delete u.disableButtons,delete u.enableButtons,delete u.getInput,delete u.disableInput,delete u.enableInput,delete u.hideLoading,delete u.disableLoading,delete u.showValidationMessage,delete u.resetValidationMessage,delete u.close,delete u.closePopup,delete u.closeModal,delete u.closeToast,delete u.rejectPromise,delete u.update,delete u._destroy)},_d=function(u,f){for(var p in u)u[p].delete(f)},GE=Object.freeze({__proto__:null,_destroy:Vg,close:In,closeModal:In,closePopup:In,closeToast:In,disableButtons:Ag,disableInput:Rg,disableLoading:Iu,enableButtons:Cg,enableInput:Pg,getInput:bg,handleAwaitingPromise:zr,hideLoading:Iu,rejectPromise:sa,resetValidationMessage:Og,showValidationMessage:xg,update:Mg}),KE=function(u,f,p){u.toast?QE(u,f,p):(XE(f),JE(f),ZE(u,f,p))},QE=function(u,f,p){f.popup.onclick=function(){u&&(YE(u)||u.timer||u.input)||p(cn.close)}},YE=function(u){return!!(u.showConfirmButton||u.showDenyButton||u.showCancelButton||u.showCloseButton)},Tu=!1,XE=function(u){u.popup.onmousedown=function(){u.container.onmouseup=function(f){u.container.onmouseup=function(){},f.target===u.container&&(Tu=!0)}}},JE=function(u){u.container.onmousedown=function(f){f.target===u.container&&f.preventDefault(),u.popup.onmouseup=function(p){u.popup.onmouseup=function(){},(p.target===u.popup||p.target instanceof HTMLElement&&u.popup.contains(p.target))&&(Tu=!0)}}},ZE=function(u,f,p){f.container.onclick=function(b){if(Tu){Tu=!1;return}b.target===f.container&&Lr(u.allowOutsideClick)&&p(cn.backdrop)}},eI=function(u){return Ne(u)==="object"&&u.jquery},Ug=function(u){return u instanceof Element||eI(u)},tI=function(u){var f={};return Ne(u[0])==="object"&&!Ug(u[0])?Object.assign(f,u[0]):["title","html","icon"].forEach(function(p,b){var j=u[b];typeof j=="string"||Ug(j)?f[p]=j:j!==void 0&&ln("Unexpected type of ".concat(p,'! Expected "string" or "Element", got ').concat(Ne(j)))}),f};function nI(){for(var g=this,u=arguments.length,f=new Array(u),p=0;p<u;p++)f[p]=arguments[p];return R(g,f)}function rI(g){var u=function(f){function p(){return h(this,p),l(this,p,arguments)}return P(p,f),L(p,[{key:"_main",value:function(j,K){return k(I(p.prototype),"_main",this).call(this,j,Object.assign({},g,K))}}])}(this);return u}var iI=function(){return q.timeout&&q.timeout.getTimerLeft()},jg=function(){if(q.timeout)return Wl(),q.timeout.stop()},Bg=function(){if(q.timeout){var u=q.timeout.start();return un(u),u}},oI=function(){var u=q.timeout;return u&&(u.running?jg():Bg())},sI=function(u){if(q.timeout){var f=q.timeout.increase(u);return un(f,!0),f}},aI=function(){return!!(q.timeout&&q.timeout.isRunning())},zg=!1,Ed={};function lI(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Ed[g]=this,zg||(document.body.addEventListener("click",uI),zg=!0)}var uI=function(u){for(var f=u.target;f&&f!==document;f=f.parentNode)for(var p in Ed){var b=f.getAttribute(p);if(b){Ed[p].fire({template:b});return}}},cI=Object.freeze({__proto__:null,argsToParams:tI,bindClickHandler:lI,clickCancel:Ui,clickConfirm:Fi,clickDeny:ou,enableLoading:ar,fire:nI,getActions:Fr,getCancelButton:Zn,getCloseButton:Ws,getConfirmButton:Qt,getContainer:Tt,getDenyButton:er,getFocusableElements:Ao,getFooter:ko,getHtmlContainer:So,getIcon:Pi,getIconContent:Hs,getImage:Ke,getInputLabel:Ri,getLoader:tr,getPopup:ge,getProgressSteps:Qe,getTimerLeft:iI,getTimerProgressBar:Co,getTitle:bo,getValidationMessage:Jn,increaseTimer:sI,isDeprecatedParameter:Lg,isLoading:Gs,isTimerRunning:aI,isUpdatableParameter:Dg,isValidParameter:Ng,isVisible:Vi,mixin:rI,resumeTimer:Bg,showLoading:ar,stopTimer:jg,toggleTimer:oI}),fI=function(){function g(u,f){h(this,g),this.callback=u,this.remaining=f,this.running=!1,this.start()}return L(g,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(f){var p=this.running;return p&&this.stop(),this.remaining+=f,p&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),$g=["swal-title","swal-html","swal-footer"],dI=function(u){var f=typeof u.template=="string"?document.querySelector(u.template):u.template;if(!f)return{};var p=f.content;_I(p);var b=Object.assign(hI(p),pI(p),mI(p),gI(p),vI(p),yI(p),wI(p,$g));return b},hI=function(u){var f={},p=Array.from(u.querySelectorAll("swal-param"));return p.forEach(function(b){Bi(b,["name","value"]);var j=b.getAttribute("name"),K=b.getAttribute("value");typeof zo[j]=="boolean"?f[j]=K!=="false":Ne(zo[j])==="object"?f[j]=JSON.parse(K):f[j]=K}),f},pI=function(u){var f={},p=Array.from(u.querySelectorAll("swal-function-param"));return p.forEach(function(b){var j=b.getAttribute("name"),K=b.getAttribute("value");f[j]=new Function("return ".concat(K))()}),f},mI=function(u){var f={},p=Array.from(u.querySelectorAll("swal-button"));return p.forEach(function(b){Bi(b,["type","color","aria-label"]);var j=b.getAttribute("type");f["".concat(j,"ButtonText")]=b.innerHTML,f["show".concat(Bs(j),"Button")]=!0,b.hasAttribute("color")&&(f["".concat(j,"ButtonColor")]=b.getAttribute("color")),b.hasAttribute("aria-label")&&(f["".concat(j,"ButtonAriaLabel")]=b.getAttribute("aria-label"))}),f},gI=function(u){var f={},p=u.querySelector("swal-image");return p&&(Bi(p,["src","width","height","alt"]),p.hasAttribute("src")&&(f.imageUrl=p.getAttribute("src")||void 0),p.hasAttribute("width")&&(f.imageWidth=p.getAttribute("width")||void 0),p.hasAttribute("height")&&(f.imageHeight=p.getAttribute("height")||void 0),p.hasAttribute("alt")&&(f.imageAlt=p.getAttribute("alt")||void 0)),f},vI=function(u){var f={},p=u.querySelector("swal-icon");return p&&(Bi(p,["type","color"]),p.hasAttribute("type")&&(f.icon=p.getAttribute("type")),p.hasAttribute("color")&&(f.iconColor=p.getAttribute("color")),f.iconHtml=p.innerHTML),f},yI=function(u){var f={},p=u.querySelector("swal-input");p&&(Bi(p,["type","label","placeholder","value"]),f.input=p.getAttribute("type")||"text",p.hasAttribute("label")&&(f.inputLabel=p.getAttribute("label")),p.hasAttribute("placeholder")&&(f.inputPlaceholder=p.getAttribute("placeholder")),p.hasAttribute("value")&&(f.inputValue=p.getAttribute("value")));var b=Array.from(u.querySelectorAll("swal-input-option"));return b.length&&(f.inputOptions={},b.forEach(function(j){Bi(j,["value"]);var K=j.getAttribute("value"),ae=j.innerHTML;f.inputOptions[K]=ae})),f},wI=function(u,f){var p={};for(var b in f){var j=f[b],K=u.querySelector(j);K&&(Bi(K,[]),p[j.replace(/^swal-/,"")]=K.innerHTML.trim())}return p},_I=function(u){var f=$g.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(u.children).forEach(function(p){var b=p.tagName.toLowerCase();f.includes(b)||It("Unrecognized element <".concat(b,">"))})},Bi=function(u,f){Array.from(u.attributes).forEach(function(p){f.indexOf(p.name)===-1&&It(['Unrecognized attribute "'.concat(p.name,'" on <').concat(u.tagName.toLowerCase(),">."),"".concat(f.length?"Allowed attributes are: ".concat(f.join(", ")):"To set the value, use HTML within the element.")])})},Hg=10,EI=function(u){var f=Tt(),p=ge();typeof u.willOpen=="function"&&u.willOpen(p);var b=window.getComputedStyle(document.body),j=b.overflowY;SI(f,p,u),setTimeout(function(){TI(f,p)},Hg),Po()&&(bI(f,u.scrollbarPadding,j),fu()),!Mn()&&!q.previousActiveElement&&(q.previousActiveElement=document.activeElement),typeof u.didOpen=="function"&&setTimeout(function(){return u.didOpen(p)}),Yt(f,V["no-transition"])},II=function g(u){var f=ge();if(!(u.target!==f||!ir)){var p=Tt();f.removeEventListener(ir,g),p.style.overflowY="auto"}},TI=function(u,f){ir&&Ni(f)?(u.style.overflowY="hidden",f.addEventListener(ir,II)):u.style.overflowY="auto"},bI=function(u,f,p){hu(),f&&p!=="hidden"&&gu(p),setTimeout(function(){u.scrollTop=0})},SI=function(u,f,p){ne(u,p.showClass.backdrop),p.animation?(f.style.setProperty("opacity","0","important"),He(f,"grid"),setTimeout(function(){ne(f,p.showClass.popup),f.style.removeProperty("opacity")},Hg)):He(f,"grid"),ne([document.documentElement,document.body],V.shown),p.heightAuto&&p.backdrop&&!p.toast&&ne([document.documentElement,document.body],V["height-auto"])},Wg={email:function(u,f){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(u)?Promise.resolve():Promise.resolve(f||"Invalid email address")},url:function(u,f){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(u)?Promise.resolve():Promise.resolve(f||"Invalid URL")}};function kI(g){g.inputValidator||(g.input==="email"&&(g.inputValidator=Wg.email),g.input==="url"&&(g.inputValidator=Wg.url))}function CI(g){(!g.target||typeof g.target=="string"&&!document.querySelector(g.target)||typeof g.target!="string"&&!g.target.appendChild)&&(It('Target parameter is not valid, defaulting to "body"'),g.target="body")}function AI(g){kI(g),g.showLoaderOnConfirm&&!g.preConfirm&&It(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),CI(g),typeof g.title=="string"&&(g.title=g.title.split(`
`).join("<br />")),Js(g)}var Bn,bu=new WeakMap,ze=function(){function g(){if(h(this,g),y(this,bu,void 0),!(typeof window>"u")){Bn=this;for(var u=arguments.length,f=new Array(u),p=0;p<u;p++)f[p]=arguments[p];var b=Object.freeze(this.constructor.argsToParams(f));this.params=b,this.isAwaitingPromise=!1,E(bu,this,this._main(Bn.params))}}return L(g,[{key:"_main",value:function(f){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(HE(Object.assign({},p,f)),q.currentInstance){var b=bt.swalPromiseResolve.get(q.currentInstance),j=q.currentInstance.isAwaitingPromise;q.currentInstance._destroy(),j||b({isDismissed:!0}),Po()&&du()}q.currentInstance=Bn;var K=RI(f,p);AI(K),Object.freeze(K),q.timeout&&(q.timeout.stop(),delete q.timeout),clearTimeout(q.restoreFocusTimeout);var ae=xI(Bn);return iu(Bn,K),_e.innerParams.set(Bn,K),PI(Bn,ae,K)}},{key:"then",value:function(f){return v(bu,this).then(f)}},{key:"finally",value:function(f){return v(bu,this).finally(f)}}])}(),PI=function(u,f,p){return new Promise(function(b,j){var K=function(se){u.close({isDismissed:!0,dismiss:se})};bt.swalPromiseResolve.set(u,b),bt.swalPromiseReject.set(u,j),f.confirmButton.onclick=function(){Xe(u)},f.denyButton.onclick=function(){he(u)},f.cancelButton.onclick=function(){it(u,K)},f.closeButton.onclick=function(){K(cn.close)},KE(p,f,K),ra(q,p,K),Nt(u,p),EI(p),OI(q,p,K),NI(f,p),setTimeout(function(){f.container.scrollTop=0})})},RI=function(u,f){var p=dI(u),b=Object.assign({},zo,f,p,u);return b.showClass=Object.assign({},zo.showClass,b.showClass),b.hideClass=Object.assign({},zo.hideClass,b.hideClass),b.animation===!1&&(b.showClass={backdrop:"swal2-noanimation"},b.hideClass={}),b},xI=function(u){var f={popup:ge(),container:Tt(),actions:Fr(),confirmButton:Qt(),denyButton:er(),cancelButton:Zn(),loader:tr(),closeButton:Ws(),validationMessage:Jn(),progressSteps:Qe()};return _e.domCache.set(u,f),f},OI=function(u,f,p){var b=Co();rt(b),f.timer&&(u.timeout=new fI(function(){p("timer"),delete u.timeout},f.timer),f.timerProgressBar&&(He(b),pt(b,f,"timerProgressBar"),setTimeout(function(){u.timeout&&u.timeout.running&&un(f.timer)})))},NI=function(u,f){if(!f.toast){if(!Lr(f.allowEnterKey)){To("allowEnterKey"),MI();return}DI(u)||LI(u,f)||Te(-1,1)}},DI=function(u){var f=u.popup.querySelectorAll("[autofocus]"),p=M(f),b;try{for(p.s();!(b=p.n()).done;){var j=b.value;if(j instanceof HTMLElement&&Ye(j))return j.focus(),!0}}catch(K){p.e(K)}finally{p.f()}return!1},LI=function(u,f){return f.focusDeny&&Ye(u.denyButton)?(u.denyButton.focus(),!0):f.focusCancel&&Ye(u.cancelButton)?(u.cancelButton.focus(),!0):f.focusConfirm&&Ye(u.confirmButton)?(u.confirmButton.focus(),!0):!1},MI=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var qg=new Date,Gg=localStorage.getItem("swal-initiation");Gg?(qg.getTime()-Date.parse(Gg))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var g=document.createElement("audio");g.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",g.loop=!0,document.body.appendChild(g),setTimeout(function(){g.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(qg))}ze.prototype.disableButtons=Ag,ze.prototype.enableButtons=Cg,ze.prototype.getInput=bg,ze.prototype.disableInput=Rg,ze.prototype.enableInput=Pg,ze.prototype.hideLoading=Iu,ze.prototype.disableLoading=Iu,ze.prototype.showValidationMessage=xg,ze.prototype.resetValidationMessage=Og,ze.prototype.close=In,ze.prototype.closePopup=In,ze.prototype.closeModal=In,ze.prototype.closeToast=In,ze.prototype.rejectPromise=sa,ze.prototype.update=Mg,ze.prototype._destroy=Vg,Object.assign(ze,cI),Object.keys(GE).forEach(function(g){ze[g]=function(){if(Bn&&Bn[g]){var u;return(u=Bn)[g].apply(u,arguments)}return null}}),ze.DismissReason=cn,ze.version="11.12.0";var Su=ze;return Su.default=Su,Su}),typeof Wr<"u"&&Wr.Sweetalert2&&(Wr.swal=Wr.sweetAlert=Wr.Swal=Wr.SweetAlert=Wr.Sweetalert2),typeof document<"u"&&function(n,r){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(t2);var iR=t2.exports;const zi=Mp(iR);function By(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?By(Object(n),!0).forEach(function(r){nt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):By(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function af(t){"@babel/helpers - typeof";return af=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},af(t)}function oR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function sR(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function aR(t,e,n){return e&&sR(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qm(t,e){return uR(t)||fR(t,e)||n2(t,e)||hR()}function Ll(t){return lR(t)||cR(t)||n2(t)||dR()}function lR(t){if(Array.isArray(t))return hp(t)}function uR(t){if(Array.isArray(t))return t}function cR(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function fR(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,l;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(c){o=!0,l=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function n2(t,e){if(t){if(typeof t=="string")return hp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hp(t,e)}}function hp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function dR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var zy=function(){},Ym={},r2={},i2=null,o2={mark:zy,measure:zy};try{typeof window<"u"&&(Ym=window),typeof document<"u"&&(r2=document),typeof MutationObserver<"u"&&(i2=MutationObserver),typeof performance<"u"&&(o2=performance)}catch{}var pR=Ym.navigator||{},$y=pR.userAgent,Hy=$y===void 0?"":$y,yi=Ym,Re=r2,Wy=i2,Hu=o2;yi.document;var Dr=!!Re.documentElement&&!!Re.head&&typeof Re.addEventListener=="function"&&typeof Re.createElement=="function",s2=~Hy.indexOf("MSIE")||~Hy.indexOf("Trident/"),Wu,qu,Gu,Ku,Qu,Sr="___FONT_AWESOME___",pp=16,a2="fa",l2="svg-inline--fa",po="data-fa-i2svg",mp="data-fa-pseudo-element",mR="data-fa-pseudo-element-pending",Xm="data-prefix",Jm="data-icon",qy="fontawesome-i2svg",gR="async",vR=["HTML","HEAD","STYLE","SCRIPT"],u2=function(){try{return!0}catch{return!1}}(),Ae="classic",Be="sharp",Zm=[Ae,Be];function Ml(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ae]}})}var dl=Ml((Wu={},nt(Wu,Ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),nt(Wu,Be,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Wu)),hl=Ml((qu={},nt(qu,Ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),nt(qu,Be,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),qu)),pl=Ml((Gu={},nt(Gu,Ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),nt(Gu,Be,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Gu)),yR=Ml((Ku={},nt(Ku,Ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),nt(Ku,Be,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ku)),wR=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,c2="fa-layers-text",_R=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ER=Ml((Qu={},nt(Qu,Ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),nt(Qu,Be,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Qu)),f2=[1,2,3,4,5,6,7,8,9,10],IR=f2.concat([11,12,13,14,15,16,17,18,19,20]),TR=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ml=new Set;Object.keys(hl[Ae]).map(ml.add.bind(ml));Object.keys(hl[Be]).map(ml.add.bind(ml));var bR=[].concat(Zm,Ll(ml),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yi.GROUP,Yi.SWAP_OPACITY,Yi.PRIMARY,Yi.SECONDARY]).concat(f2.map(function(t){return"".concat(t,"x")})).concat(IR.map(function(t){return"w-".concat(t)})),Fa=yi.FontAwesomeConfig||{};function SR(t){var e=Re.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function kR(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Re&&typeof Re.querySelector=="function"){var CR=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];CR.forEach(function(t){var e=Qm(t,2),n=e[0],r=e[1],i=kR(SR(n));i!=null&&(Fa[r]=i)})}var d2={styleDefault:"solid",familyDefault:"classic",cssPrefix:a2,replacementClass:l2,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Fa.familyPrefix&&(Fa.cssPrefix=Fa.familyPrefix);var ks=Y(Y({},d2),Fa);ks.autoReplaceSvg||(ks.observeMutations=!1);var ee={};Object.keys(d2).forEach(function(t){Object.defineProperty(ee,t,{enumerable:!0,set:function(n){ks[t]=n,Ua.forEach(function(r){return r(ee)})},get:function(){return ks[t]}})});Object.defineProperty(ee,"familyPrefix",{enumerable:!0,set:function(e){ks.cssPrefix=e,Ua.forEach(function(n){return n(ee)})},get:function(){return ks.cssPrefix}});yi.FontAwesomeConfig=ee;var Ua=[];function AR(t){return Ua.push(t),function(){Ua.splice(Ua.indexOf(t),1)}}var Kr=pp,qn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function PR(t){if(!(!t||!Dr)){var e=Re.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Re.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Re.head.insertBefore(e,r),t}}var RR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gl(){for(var t=12,e="";t-- >0;)e+=RR[Math.random()*62|0];return e}function Fs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function eg(t){return t.classList?Fs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function h2(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xR(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(h2(t[n]),'" ')},"").trim()}function Gf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function tg(t){return t.size!==qn.size||t.x!==qn.x||t.y!==qn.y||t.rotate!==qn.rotate||t.flipX||t.flipY}function OR(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(l)},h={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:h}}function NR(t){var e=t.transform,n=t.width,r=n===void 0?pp:n,i=t.height,o=i===void 0?pp:i,s=t.startCentered,l=s===void 0?!1:s,c="";return l&&s2?c+="translate(".concat(e.x/Kr-r/2,"em, ").concat(e.y/Kr-o/2,"em) "):l?c+="translate(calc(-50% + ".concat(e.x/Kr,"em), calc(-50% + ").concat(e.y/Kr,"em)) "):c+="translate(".concat(e.x/Kr,"em, ").concat(e.y/Kr,"em) "),c+="scale(".concat(e.size/Kr*(e.flipX?-1:1),", ").concat(e.size/Kr*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var DR=`:root, :host {
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
}`;function p2(){var t=a2,e=l2,n=ee.cssPrefix,r=ee.replacementClass,i=DR;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var Gy=!1;function nh(){ee.autoAddCss&&!Gy&&(PR(p2()),Gy=!0)}var LR={mixout:function(){return{dom:{css:p2,insertCss:nh}}},hooks:function(){return{beforeDOMElementCreation:function(){nh()},beforeI2svg:function(){nh()}}}},kr=yi||{};kr[Sr]||(kr[Sr]={});kr[Sr].styles||(kr[Sr].styles={});kr[Sr].hooks||(kr[Sr].hooks={});kr[Sr].shims||(kr[Sr].shims=[]);var Rn=kr[Sr],m2=[],MR=function t(){Re.removeEventListener("DOMContentLoaded",t),lf=1,m2.map(function(e){return e()})},lf=!1;Dr&&(lf=(Re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Re.readyState),lf||Re.addEventListener("DOMContentLoaded",MR));function VR(t){Dr&&(lf?setTimeout(t,0):m2.push(t))}function Vl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,o=i===void 0?[]:i;return typeof t=="string"?h2(t):"<".concat(e," ").concat(xR(r),">").concat(o.map(Vl).join(""),"</").concat(e,">")}function Ky(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var rh=function(e,n,r,i){var o=Object.keys(e),s=o.length,l=n,c,h,v;for(r===void 0?(c=1,v=e[o[0]]):(c=0,v=r);c<s;c++)h=o[c],v=l(v,e[h],h,e);return v};function FR(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function gp(t){var e=FR(t);return e.length===1?e[0].toString(16):null}function UR(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Qy(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function vp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Qy(e);typeof Rn.hooks.addPack=="function"&&!i?Rn.hooks.addPack(t,Qy(e)):Rn.styles[t]=Y(Y({},Rn.styles[t]||{}),o),t==="fas"&&vp("fa",e)}var Yu,Xu,Ju,rs=Rn.styles,jR=Rn.shims,BR=(Yu={},nt(Yu,Ae,Object.values(pl[Ae])),nt(Yu,Be,Object.values(pl[Be])),Yu),ng=null,g2={},v2={},y2={},w2={},_2={},zR=(Xu={},nt(Xu,Ae,Object.keys(dl[Ae])),nt(Xu,Be,Object.keys(dl[Be])),Xu);function $R(t){return~bR.indexOf(t)}function HR(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!$R(i)?i:null}var E2=function(){var e=function(o){return rh(rs,function(s,l,c){return s[c]=rh(l,o,{}),s},{})};g2=e(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var l=o[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){i[c.toString(16)]=s})}return i}),v2=e(function(i,o,s){if(i[s]=s,o[2]){var l=o[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){i[c]=s})}return i}),_2=e(function(i,o,s){var l=o[2];return i[s]=s,l.forEach(function(c){i[c]=s}),i});var n="far"in rs||ee.autoFetchSvg,r=rh(jR,function(i,o){var s=o[0],l=o[1],c=o[2];return l==="far"&&!n&&(l="fas"),typeof s=="string"&&(i.names[s]={prefix:l,iconName:c}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:l,iconName:c}),i},{names:{},unicodes:{}});y2=r.names,w2=r.unicodes,ng=Kf(ee.styleDefault,{family:ee.familyDefault})};AR(function(t){ng=Kf(t.styleDefault,{family:ee.familyDefault})});E2();function rg(t,e){return(g2[t]||{})[e]}function WR(t,e){return(v2[t]||{})[e]}function Xi(t,e){return(_2[t]||{})[e]}function I2(t){return y2[t]||{prefix:null,iconName:null}}function qR(t){var e=w2[t],n=rg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wi(){return ng}var ig=function(){return{prefix:null,iconName:null,rest:[]}};function Kf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ae:n,i=dl[r][t],o=hl[r][t]||hl[r][i],s=t in Rn.styles?t:null;return o||s||null}var Yy=(Ju={},nt(Ju,Ae,Object.keys(pl[Ae])),nt(Ju,Be,Object.keys(pl[Be])),Ju);function Qf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(e={},nt(e,Ae,"".concat(ee.cssPrefix,"-").concat(Ae)),nt(e,Be,"".concat(ee.cssPrefix,"-").concat(Be)),e),s=null,l=Ae;(t.includes(o[Ae])||t.some(function(h){return Yy[Ae].includes(h)}))&&(l=Ae),(t.includes(o[Be])||t.some(function(h){return Yy[Be].includes(h)}))&&(l=Be);var c=t.reduce(function(h,v){var y=HR(ee.cssPrefix,v);if(rs[v]?(v=BR[l].includes(v)?yR[l][v]:v,s=v,h.prefix=v):zR[l].indexOf(v)>-1?(s=v,h.prefix=Kf(v,{family:l})):y?h.iconName=y:v!==ee.replacementClass&&v!==o[Ae]&&v!==o[Be]&&h.rest.push(v),!i&&h.prefix&&h.iconName){var E=s==="fa"?I2(h.iconName):{},R=Xi(h.prefix,h.iconName);E.prefix&&(s=null),h.iconName=E.iconName||R||h.iconName,h.prefix=E.prefix||h.prefix,h.prefix==="far"&&!rs.far&&rs.fas&&!ee.autoFetchSvg&&(h.prefix="fas")}return h},ig());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&l===Be&&(rs.fass||ee.autoFetchSvg)&&(c.prefix="fass",c.iconName=Xi(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||s==="fa")&&(c.prefix=wi()||"fas"),c}var GR=function(){function t(){oR(this,t),this.definitions={}}return aR(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){n.definitions[l]=Y(Y({},n.definitions[l]||{}),s[l]),vp(l,s[l]);var c=pl[Ae][l];c&&vp(c,s[l]),E2()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],l=s.prefix,c=s.iconName,h=s.icon,v=h[2];n[l]||(n[l]={}),v.length>0&&v.forEach(function(y){typeof y=="string"&&(n[l][y]=h)}),n[l][c]=h}),n}}]),t}(),Xy=[],is={},gs={},KR=Object.keys(gs);function QR(t,e){var n=e.mixoutsTo;return Xy=t,is={},Object.keys(gs).forEach(function(r){KR.indexOf(r)===-1&&delete gs[r]}),Xy.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),af(i[s])==="object"&&Object.keys(i[s]).forEach(function(l){n[s]||(n[s]={}),n[s][l]=i[s][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){is[s]||(is[s]=[]),is[s].push(o[s])})}r.provides&&r.provides(gs)}),n}function yp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=is[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function mo(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=is[t]||[];i.forEach(function(o){o.apply(null,n)})}function Cr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return gs[t]?gs[t].apply(null,e):void 0}function wp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||wi();if(e)return e=Xi(n,e)||e,Ky(T2.definitions,n,e)||Ky(Rn.styles,n,e)}var T2=new GR,YR=function(){ee.autoReplaceSvg=!1,ee.observeMutations=!1,mo("noAuto")},XR={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Dr?(mo("beforeI2svg",e),Cr("pseudoElements2svg",e),Cr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;ee.autoReplaceSvg===!1&&(ee.autoReplaceSvg=!0),ee.observeMutations=!0,VR(function(){ZR({autoReplaceSvgRoot:n}),mo("watch",e)})}},JR={icon:function(e){if(e===null)return null;if(af(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Xi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Kf(e[0]);return{prefix:r,iconName:Xi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(ee.cssPrefix,"-"))>-1||e.match(wR))){var i=Qf(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||wi(),iconName:Xi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var o=wi();return{prefix:o,iconName:Xi(o,e)||e}}}},sn={noAuto:YR,config:ee,dom:XR,parse:JR,library:T2,findIconDefinition:wp,toHtml:Vl},ZR=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Re:n;(Object.keys(Rn.styles).length>0||ee.autoFetchSvg)&&Dr&&ee.autoReplaceSvg&&sn.dom.i2svg({node:r})};function Yf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Vl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Dr){var r=Re.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function ex(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(tg(s)&&n.found&&!r.found){var l=n.width,c=n.height,h={x:l/c/2,y:.5};i.style=Gf(Y(Y({},o),{},{"transform-origin":"".concat(h.x+s.x/16,"em ").concat(h.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function tx(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(ee.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Y(Y({},i),{},{id:s}),children:r}]}]}function og(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,l=t.symbol,c=t.title,h=t.maskId,v=t.titleId,y=t.extra,E=t.watchable,R=E===void 0?!1:E,O=r.found?r:n,L=O.width,M=O.height,k=i==="fak",I=[ee.replacementClass,o?"".concat(ee.cssPrefix,"-").concat(o):""].filter(function(T){return y.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(y.classes).join(" "),P={children:[],attributes:Y(Y({},y.attributes),{},{"data-prefix":i,"data-icon":o,class:I,role:y.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(M)})},U=k&&!~y.classes.indexOf("fa-fw")?{width:"".concat(L/M*16*.0625,"em")}:{};R&&(P.attributes[po]=""),c&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(v||gl())},children:[c]}),delete P.attributes.title);var B=Y(Y({},P),{},{prefix:i,iconName:o,main:n,mask:r,maskId:h,transform:s,symbol:l,styles:Y(Y({},U),y.styles)}),W=r.found&&n.found?Cr("generateAbstractMask",B)||{children:[],attributes:{}}:Cr("generateAbstractIcon",B)||{children:[],attributes:{}},S=W.children,_=W.attributes;return B.children=S,B.attributes=_,l?tx(B):ex(B)}function Jy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,s=t.extra,l=t.watchable,c=l===void 0?!1:l,h=Y(Y(Y({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});c&&(h[po]="");var v=Y({},s.styles);tg(i)&&(v.transform=NR({transform:i,startCentered:!0,width:n,height:r}),v["-webkit-transform"]=v.transform);var y=Gf(v);y.length>0&&(h.style=y);var E=[];return E.push({tag:"span",attributes:h,children:[e]}),o&&E.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),E}function nx(t){var e=t.content,n=t.title,r=t.extra,i=Y(Y(Y({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Gf(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var ih=Rn.styles;function _p(t){var e=t[0],n=t[1],r=t.slice(4),i=Qm(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(ee.cssPrefix,"-").concat(Yi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ee.cssPrefix,"-").concat(Yi.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(ee.cssPrefix,"-").concat(Yi.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var rx={found:!1,width:512,height:512};function ix(t,e){!u2&&!ee.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ep(t,e){var n=e;return e==="fa"&&ee.styleDefault!==null&&(e=wi()),new Promise(function(r,i){if(Cr("missingIconAbstract"),n==="fa"){var o=I2(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&ih[e]&&ih[e][t]){var s=ih[e][t];return r(_p(s))}ix(t,e),r(Y(Y({},rx),{},{icon:ee.showMissingIcons&&t?Cr("missingIconAbstract")||{}:{}}))})}var Zy=function(){},Ip=ee.measurePerformance&&Hu&&Hu.mark&&Hu.measure?Hu:{mark:Zy,measure:Zy},ka='FA "6.5.2"',ox=function(e){return Ip.mark("".concat(ka," ").concat(e," begins")),function(){return b2(e)}},b2=function(e){Ip.mark("".concat(ka," ").concat(e," ends")),Ip.measure("".concat(ka," ").concat(e),"".concat(ka," ").concat(e," begins"),"".concat(ka," ").concat(e," ends"))},sg={begin:ox,end:b2},Ec=function(){};function e0(t){var e=t.getAttribute?t.getAttribute(po):null;return typeof e=="string"}function sx(t){var e=t.getAttribute?t.getAttribute(Xm):null,n=t.getAttribute?t.getAttribute(Jm):null;return e&&n}function ax(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ee.replacementClass)}function lx(){if(ee.autoReplaceSvg===!0)return Ic.replace;var t=Ic[ee.autoReplaceSvg];return t||Ic.replace}function ux(t){return Re.createElementNS("http://www.w3.org/2000/svg",t)}function cx(t){return Re.createElement(t)}function S2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?ux:cx:n;if(typeof t=="string")return Re.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){i.appendChild(S2(s,{ceFn:r}))}),i}function fx(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ic={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(S2(i),n)}),n.getAttribute(po)===null&&ee.keepOriginalSource){var r=Re.createComment(fx(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~eg(n).indexOf(ee.replacementClass))return Ic.replace(e);var i=new RegExp("".concat(ee.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,c){return c===ee.replacementClass||c.match(i)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(l){return Vl(l)}).join(`
`);n.setAttribute(po,""),n.innerHTML=s}};function t0(t){t()}function k2(t,e){var n=typeof e=="function"?e:Ec;if(t.length===0)n();else{var r=t0;ee.mutateApproach===gR&&(r=yi.requestAnimationFrame||t0),r(function(){var i=lx(),o=sg.begin("mutate");t.map(i),o(),n()})}}var ag=!1;function C2(){ag=!0}function Tp(){ag=!1}var uf=null;function n0(t){if(Wy&&ee.observeMutations){var e=t.treeCallback,n=e===void 0?Ec:e,r=t.nodeCallback,i=r===void 0?Ec:r,o=t.pseudoElementsCallback,s=o===void 0?Ec:o,l=t.observeMutationsRoot,c=l===void 0?Re:l;uf=new Wy(function(h){if(!ag){var v=wi();Fs(h).forEach(function(y){if(y.type==="childList"&&y.addedNodes.length>0&&!e0(y.addedNodes[0])&&(ee.searchPseudoElements&&s(y.target),n(y.target)),y.type==="attributes"&&y.target.parentNode&&ee.searchPseudoElements&&s(y.target.parentNode),y.type==="attributes"&&e0(y.target)&&~TR.indexOf(y.attributeName))if(y.attributeName==="class"&&sx(y.target)){var E=Qf(eg(y.target)),R=E.prefix,O=E.iconName;y.target.setAttribute(Xm,R||v),O&&y.target.setAttribute(Jm,O)}else ax(y.target)&&i(y.target)})}}),Dr&&uf.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function dx(){uf&&uf.disconnect()}function hx(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),n}function px(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Qf(eg(t));return i.prefix||(i.prefix=wi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=WR(i.prefix,t.innerText)||rg(i.prefix,gp(t.innerText))),!i.iconName&&ee.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function mx(t){var e=Fs(t.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ee.autoA11y&&(n?e["aria-labelledby"]="".concat(ee.replacementClass,"-title-").concat(r||gl()):(e["aria-hidden"]="true",e.focusable="false")),e}function gx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:qn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function r0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=px(t),r=n.iconName,i=n.prefix,o=n.rest,s=mx(t),l=yp("parseNodeAttributes",{},t),c=e.styleParser?hx(t):[];return Y({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:qn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:c,attributes:s}},l)}var vx=Rn.styles;function A2(t){var e=ee.autoReplaceSvg==="nest"?r0(t,{styleParser:!1}):r0(t);return~e.extra.classes.indexOf(c2)?Cr("generateLayersText",t,e):Cr("generateSvgReplacementMutation",t,e)}var _i=new Set;Zm.map(function(t){_i.add("fa-".concat(t))});Object.keys(dl[Ae]).map(_i.add.bind(_i));Object.keys(dl[Be]).map(_i.add.bind(_i));_i=Ll(_i);function i0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Dr)return Promise.resolve();var n=Re.documentElement.classList,r=function(y){return n.add("".concat(qy,"-").concat(y))},i=function(y){return n.remove("".concat(qy,"-").concat(y))},o=ee.autoFetchSvg?_i:Zm.map(function(v){return"fa-".concat(v)}).concat(Object.keys(vx));o.includes("fa")||o.push("fa");var s=[".".concat(c2,":not([").concat(po,"])")].concat(o.map(function(v){return".".concat(v,":not([").concat(po,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=Fs(t.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var c=sg.begin("onTree"),h=l.reduce(function(v,y){try{var E=A2(y);E&&v.push(E)}catch(R){u2||R.name==="MissingIcon"&&console.error(R)}return v},[]);return new Promise(function(v,y){Promise.all(h).then(function(E){k2(E,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),v()})}).catch(function(E){c(),y(E)})})}function yx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;A2(t).then(function(n){n&&k2([n],e)})}function wx(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:wp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:wp(i||{})),t(r,Y(Y({},n),{},{mask:i}))}}var _x=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?qn:r,o=n.symbol,s=o===void 0?!1:o,l=n.mask,c=l===void 0?null:l,h=n.maskId,v=h===void 0?null:h,y=n.title,E=y===void 0?null:y,R=n.titleId,O=R===void 0?null:R,L=n.classes,M=L===void 0?[]:L,k=n.attributes,I=k===void 0?{}:k,P=n.styles,U=P===void 0?{}:P;if(e){var B=e.prefix,W=e.iconName,S=e.icon;return Yf(Y({type:"icon"},e),function(){return mo("beforeDOMElementCreation",{iconDefinition:e,params:n}),ee.autoA11y&&(E?I["aria-labelledby"]="".concat(ee.replacementClass,"-title-").concat(O||gl()):(I["aria-hidden"]="true",I.focusable="false")),og({icons:{main:_p(S),mask:c?_p(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:W,transform:Y(Y({},qn),i),symbol:s,title:E,maskId:v,titleId:O,extra:{attributes:I,styles:U,classes:M}})})}},Ex={mixout:function(){return{icon:wx(_x)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=i0,n.nodeCallback=yx,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Re:r,o=n.callback,s=o===void 0?function(){}:o;return i0(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,l=r.prefix,c=r.transform,h=r.symbol,v=r.mask,y=r.maskId,E=r.extra;return new Promise(function(R,O){Promise.all([Ep(i,l),v.iconName?Ep(v.iconName,v.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var M=Qm(L,2),k=M[0],I=M[1];R([n,og({icons:{main:k,mask:I},prefix:l,iconName:i,transform:c,symbol:h,maskId:y,title:o,titleId:s,extra:E,watchable:!0})])}).catch(O)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,l=n.styles,c=Gf(l);c.length>0&&(i.style=c);var h;return tg(s)&&(h=Cr("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(h||o.icon),{children:r,attributes:i}}}},Ix={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Yf({type:"layer"},function(){mo("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(l){Array.isArray(l)?l.map(function(c){s=s.concat(c.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(ee.cssPrefix,"-layers")].concat(Ll(o)).join(" ")},children:s}]})}}}},Tx={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,l=s===void 0?[]:s,c=r.attributes,h=c===void 0?{}:c,v=r.styles,y=v===void 0?{}:v;return Yf({type:"counter",content:n},function(){return mo("beforeDOMElementCreation",{content:n,params:r}),nx({content:n.toString(),title:o,extra:{attributes:h,styles:y,classes:["".concat(ee.cssPrefix,"-layers-counter")].concat(Ll(l))}})})}}}},bx={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?qn:i,s=r.title,l=s===void 0?null:s,c=r.classes,h=c===void 0?[]:c,v=r.attributes,y=v===void 0?{}:v,E=r.styles,R=E===void 0?{}:E;return Yf({type:"text",content:n},function(){return mo("beforeDOMElementCreation",{content:n,params:r}),Jy({content:n,transform:Y(Y({},qn),o),title:l,extra:{attributes:y,styles:R,classes:["".concat(ee.cssPrefix,"-layers-text")].concat(Ll(h))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,l=null,c=null;if(s2){var h=parseInt(getComputedStyle(n).fontSize,10),v=n.getBoundingClientRect();l=v.width/h,c=v.height/h}return ee.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Jy({content:n.innerHTML,width:l,height:c,transform:o,title:i,extra:s,watchable:!0})])}}},Sx=new RegExp('"',"ug"),o0=[1105920,1112319];function kx(t){var e=t.replace(Sx,""),n=UR(e,0),r=n>=o0[0]&&n<=o0[1],i=e.length===2?e[0]===e[1]:!1;return{value:gp(i?e[0]:e),isSecondary:r||i}}function s0(t,e){var n="".concat(mR).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var o=Fs(t.children),s=o.filter(function(S){return S.getAttribute(mp)===e})[0],l=yi.getComputedStyle(t,e),c=l.getPropertyValue("font-family").match(_R),h=l.getPropertyValue("font-weight"),v=l.getPropertyValue("content");if(s&&!c)return t.removeChild(s),r();if(c&&v!=="none"&&v!==""){var y=l.getPropertyValue("content"),E=~["Sharp"].indexOf(c[2])?Be:Ae,R=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?hl[E][c[2].toLowerCase()]:ER[E][h],O=kx(y),L=O.value,M=O.isSecondary,k=c[0].startsWith("FontAwesome"),I=rg(R,L),P=I;if(k){var U=qR(L);U.iconName&&U.prefix&&(I=U.iconName,R=U.prefix)}if(I&&!M&&(!s||s.getAttribute(Xm)!==R||s.getAttribute(Jm)!==P)){t.setAttribute(n,P),s&&t.removeChild(s);var B=gx(),W=B.extra;W.attributes[mp]=e,Ep(I,R).then(function(S){var _=og(Y(Y({},B),{},{icons:{main:S,mask:ig()},prefix:R,iconName:P,extra:W,watchable:!0})),T=Re.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=_.map(function(C){return Vl(C)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Cx(t){return Promise.all([s0(t,"::before"),s0(t,"::after")])}function Ax(t){return t.parentNode!==document.head&&!~vR.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(mp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function a0(t){if(Dr)return new Promise(function(e,n){var r=Fs(t.querySelectorAll("*")).filter(Ax).map(Cx),i=sg.begin("searchPseudoElements");C2(),Promise.all(r).then(function(){i(),Tp(),e()}).catch(function(){i(),Tp(),n()})})}var Px={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=a0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Re:r;ee.searchPseudoElements&&a0(i)}}},l0=!1,Rx={mixout:function(){return{dom:{unwatch:function(){C2(),l0=!0}}}},hooks:function(){return{bootstrap:function(){n0(yp("mutationObserverCallbacks",{}))},noAuto:function(){dx()},watch:function(n){var r=n.observeMutationsRoot;l0?Tp():n0(yp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},u0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],l=o.slice(1).join("-");if(s&&l==="h")return r.flipX=!0,r;if(s&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(s){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},xx={mixout:function(){return{parse:{transform:function(n){return u0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=u0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),h="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),v="rotate(".concat(i.rotate," 0 0)"),y={transform:"".concat(c," ").concat(h," ").concat(v)},E={transform:"translate(".concat(s/2*-1," -256)")},R={outer:l,inner:y,path:E};return{tag:"g",attributes:Y({},R.outer),children:[{tag:"g",attributes:Y({},R.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Y(Y({},r.icon.attributes),R.path)}]}]}}}},oh={x:0,y:0,width:"100%",height:"100%"};function c0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ox(t){return t.tag==="g"?t.children:[t]}var Nx={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Qf(i.split(" ").map(function(s){return s.trim()})):ig();return o.prefix||(o.prefix=wi()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,l=n.maskId,c=n.transform,h=o.width,v=o.icon,y=s.width,E=s.icon,R=OR({transform:c,containerWidth:y,iconWidth:h}),O={tag:"rect",attributes:Y(Y({},oh),{},{fill:"white"})},L=v.children?{children:v.children.map(c0)}:{},M={tag:"g",attributes:Y({},R.inner),children:[c0(Y({tag:v.tag,attributes:Y(Y({},v.attributes),R.path)},L))]},k={tag:"g",attributes:Y({},R.outer),children:[M]},I="mask-".concat(l||gl()),P="clip-".concat(l||gl()),U={tag:"mask",attributes:Y(Y({},oh),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,k]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Ox(E)},U]};return r.push(B,{tag:"rect",attributes:Y({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(I,")")},oh)}),{children:r,attributes:i}}}},Dx={provides:function(e){var n=!1;yi.matchMedia&&(n=yi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Y(Y({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=Y(Y({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:Y(Y({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:Y(Y({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Y(Y({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:Y(Y({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Y(Y({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:Y(Y({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Y(Y({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Lx={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},Mx=[LR,Ex,Ix,Tx,bx,Px,Rx,xx,Nx,Dx,Lx];QR(Mx,{mixoutsTo:sn});sn.noAuto;sn.config;sn.library;sn.dom;var bp=sn.parse;sn.findIconDefinition;sn.toHtml;var Vx=sn.icon;sn.layer;sn.text;sn.counter;var P2={exports:{}},Fx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ux=Fx,jx=Ux;function R2(){}function x2(){}x2.resetWarningCache=R2;var Bx=function(){function t(r,i,o,s,l,c){if(c!==jx){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:x2,resetWarningCache:R2};return n.PropTypes=n,n};P2.exports=Bx();var zx=P2.exports;const ue=Mp(zx);function f0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Hn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?f0(Object(n),!0).forEach(function(r){os(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function cf(t){"@babel/helpers - typeof";return cf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cf(t)}function os(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $x(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Hx(t,e){if(t==null)return{};var n=$x(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Sp(t){return Wx(t)||qx(t)||Gx(t)||Kx()}function Wx(t){if(Array.isArray(t))return kp(t)}function qx(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Gx(t,e){if(t){if(typeof t=="string")return kp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kp(t,e)}}function kp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Kx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qx(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,l=t.flash,c=t.spin,h=t.spinPulse,v=t.spinReverse,y=t.pulse,E=t.fixedWidth,R=t.inverse,O=t.border,L=t.listItem,M=t.flip,k=t.size,I=t.rotation,P=t.pull,U=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":v,"fa-spin-pulse":h,"fa-pulse":y,"fa-fw":E,"fa-inverse":R,"fa-border":O,"fa-li":L,"fa-flip":M===!0,"fa-flip-horizontal":M==="horizontal"||M==="both","fa-flip-vertical":M==="vertical"||M==="both"},os(e,"fa-".concat(k),typeof k<"u"&&k!==null),os(e,"fa-rotate-".concat(I),typeof I<"u"&&I!==null&&I!==0),os(e,"fa-pull-".concat(P),typeof P<"u"&&P!==null),os(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(U).map(function(B){return U[B]?B:null}).filter(function(B){return B})}function Yx(t){return t=t-0,t===t}function O2(t){return Yx(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Xx=["style"];function Jx(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Zx(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=O2(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[Jx(i)]=o:e[i]=o,e},{})}function N2(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return N2(t,c)}),i=Object.keys(e.attributes||{}).reduce(function(c,h){var v=e.attributes[h];switch(h){case"class":c.attrs.className=v,delete e.attributes.class;break;case"style":c.attrs.style=Zx(v);break;default:h.indexOf("aria-")===0||h.indexOf("data-")===0?c.attrs[h.toLowerCase()]=v:c.attrs[O2(h)]=v}return c},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=Hx(n,Xx);return i.attrs.style=Hn(Hn({},i.attrs.style),s),t.apply(void 0,[e.tag,Hn(Hn({},i.attrs),l)].concat(Sp(r)))}var D2=!1;try{D2=!0}catch{}function e4(){if(!D2&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function d0(t){if(t&&cf(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(bp.icon)return bp.icon(t);if(t===null)return null;if(t&&cf(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function sh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?os({},t,e):{}}var h0={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ss=If.forwardRef(function(t,e){var n=Hn(Hn({},h0),t),r=n.icon,i=n.mask,o=n.symbol,s=n.className,l=n.title,c=n.titleId,h=n.maskId,v=d0(r),y=sh("classes",[].concat(Sp(Qx(n)),Sp((s||"").split(" ")))),E=sh("transform",typeof n.transform=="string"?bp.transform(n.transform):n.transform),R=sh("mask",d0(i)),O=Vx(v,Hn(Hn(Hn(Hn({},y),E),R),{},{symbol:o,title:l,titleId:c,maskId:h}));if(!O)return e4("Could not find icon",v),null;var L=O.abstract,M={ref:e};return Object.keys(n).forEach(function(k){h0.hasOwnProperty(k)||(M[k]=n[k])}),t4(L[0],M)});ss.displayName="FontAwesomeIcon";ss.propTypes={beat:ue.bool,border:ue.bool,beatFade:ue.bool,bounce:ue.bool,className:ue.string,fade:ue.bool,flash:ue.bool,mask:ue.oneOfType([ue.object,ue.array,ue.string]),maskId:ue.string,fixedWidth:ue.bool,inverse:ue.bool,flip:ue.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ue.oneOfType([ue.object,ue.array,ue.string]),listItem:ue.bool,pull:ue.oneOf(["right","left"]),pulse:ue.bool,rotation:ue.oneOf([0,90,180,270]),shake:ue.bool,size:ue.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ue.bool,spinPulse:ue.bool,spinReverse:ue.bool,symbol:ue.oneOfType([ue.bool,ue.string]),title:ue.string,titleId:ue.string,transform:ue.oneOfType([ue.string,ue.object]),swapOpacity:ue.bool};var t4=N2.bind(null,If.createElement),n4={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]},r4={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},i4={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},o4={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},s4={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},p0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var L2;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function T(){}T.prototype=_.prototype,S.D=_.prototype,S.prototype=new T,S.prototype.constructor=S,S.C=function(C,x,D){for(var A=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)A[Ut-2]=arguments[Ut];return _.prototype[x].apply(C,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,_,T){T||(T=0);var C=Array(16);if(typeof _=="string")for(var x=0;16>x;++x)C[x]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(x=0;16>x;++x)C[x]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=S.g[0],T=S.g[1],x=S.g[2];var D=S.g[3],A=_+(D^T&(x^D))+C[0]+3614090360&4294967295;_=T+(A<<7&4294967295|A>>>25),A=D+(x^_&(T^x))+C[1]+3905402710&4294967295,D=_+(A<<12&4294967295|A>>>20),A=x+(T^D&(_^T))+C[2]+606105819&4294967295,x=D+(A<<17&4294967295|A>>>15),A=T+(_^x&(D^_))+C[3]+3250441966&4294967295,T=x+(A<<22&4294967295|A>>>10),A=_+(D^T&(x^D))+C[4]+4118548399&4294967295,_=T+(A<<7&4294967295|A>>>25),A=D+(x^_&(T^x))+C[5]+1200080426&4294967295,D=_+(A<<12&4294967295|A>>>20),A=x+(T^D&(_^T))+C[6]+2821735955&4294967295,x=D+(A<<17&4294967295|A>>>15),A=T+(_^x&(D^_))+C[7]+4249261313&4294967295,T=x+(A<<22&4294967295|A>>>10),A=_+(D^T&(x^D))+C[8]+1770035416&4294967295,_=T+(A<<7&4294967295|A>>>25),A=D+(x^_&(T^x))+C[9]+2336552879&4294967295,D=_+(A<<12&4294967295|A>>>20),A=x+(T^D&(_^T))+C[10]+4294925233&4294967295,x=D+(A<<17&4294967295|A>>>15),A=T+(_^x&(D^_))+C[11]+2304563134&4294967295,T=x+(A<<22&4294967295|A>>>10),A=_+(D^T&(x^D))+C[12]+1804603682&4294967295,_=T+(A<<7&4294967295|A>>>25),A=D+(x^_&(T^x))+C[13]+4254626195&4294967295,D=_+(A<<12&4294967295|A>>>20),A=x+(T^D&(_^T))+C[14]+2792965006&4294967295,x=D+(A<<17&4294967295|A>>>15),A=T+(_^x&(D^_))+C[15]+1236535329&4294967295,T=x+(A<<22&4294967295|A>>>10),A=_+(x^D&(T^x))+C[1]+4129170786&4294967295,_=T+(A<<5&4294967295|A>>>27),A=D+(T^x&(_^T))+C[6]+3225465664&4294967295,D=_+(A<<9&4294967295|A>>>23),A=x+(_^T&(D^_))+C[11]+643717713&4294967295,x=D+(A<<14&4294967295|A>>>18),A=T+(D^_&(x^D))+C[0]+3921069994&4294967295,T=x+(A<<20&4294967295|A>>>12),A=_+(x^D&(T^x))+C[5]+3593408605&4294967295,_=T+(A<<5&4294967295|A>>>27),A=D+(T^x&(_^T))+C[10]+38016083&4294967295,D=_+(A<<9&4294967295|A>>>23),A=x+(_^T&(D^_))+C[15]+3634488961&4294967295,x=D+(A<<14&4294967295|A>>>18),A=T+(D^_&(x^D))+C[4]+3889429448&4294967295,T=x+(A<<20&4294967295|A>>>12),A=_+(x^D&(T^x))+C[9]+568446438&4294967295,_=T+(A<<5&4294967295|A>>>27),A=D+(T^x&(_^T))+C[14]+3275163606&4294967295,D=_+(A<<9&4294967295|A>>>23),A=x+(_^T&(D^_))+C[3]+4107603335&4294967295,x=D+(A<<14&4294967295|A>>>18),A=T+(D^_&(x^D))+C[8]+1163531501&4294967295,T=x+(A<<20&4294967295|A>>>12),A=_+(x^D&(T^x))+C[13]+2850285829&4294967295,_=T+(A<<5&4294967295|A>>>27),A=D+(T^x&(_^T))+C[2]+4243563512&4294967295,D=_+(A<<9&4294967295|A>>>23),A=x+(_^T&(D^_))+C[7]+1735328473&4294967295,x=D+(A<<14&4294967295|A>>>18),A=T+(D^_&(x^D))+C[12]+2368359562&4294967295,T=x+(A<<20&4294967295|A>>>12),A=_+(T^x^D)+C[5]+4294588738&4294967295,_=T+(A<<4&4294967295|A>>>28),A=D+(_^T^x)+C[8]+2272392833&4294967295,D=_+(A<<11&4294967295|A>>>21),A=x+(D^_^T)+C[11]+1839030562&4294967295,x=D+(A<<16&4294967295|A>>>16),A=T+(x^D^_)+C[14]+4259657740&4294967295,T=x+(A<<23&4294967295|A>>>9),A=_+(T^x^D)+C[1]+2763975236&4294967295,_=T+(A<<4&4294967295|A>>>28),A=D+(_^T^x)+C[4]+1272893353&4294967295,D=_+(A<<11&4294967295|A>>>21),A=x+(D^_^T)+C[7]+4139469664&4294967295,x=D+(A<<16&4294967295|A>>>16),A=T+(x^D^_)+C[10]+3200236656&4294967295,T=x+(A<<23&4294967295|A>>>9),A=_+(T^x^D)+C[13]+681279174&4294967295,_=T+(A<<4&4294967295|A>>>28),A=D+(_^T^x)+C[0]+3936430074&4294967295,D=_+(A<<11&4294967295|A>>>21),A=x+(D^_^T)+C[3]+3572445317&4294967295,x=D+(A<<16&4294967295|A>>>16),A=T+(x^D^_)+C[6]+76029189&4294967295,T=x+(A<<23&4294967295|A>>>9),A=_+(T^x^D)+C[9]+3654602809&4294967295,_=T+(A<<4&4294967295|A>>>28),A=D+(_^T^x)+C[12]+3873151461&4294967295,D=_+(A<<11&4294967295|A>>>21),A=x+(D^_^T)+C[15]+530742520&4294967295,x=D+(A<<16&4294967295|A>>>16),A=T+(x^D^_)+C[2]+3299628645&4294967295,T=x+(A<<23&4294967295|A>>>9),A=_+(x^(T|~D))+C[0]+4096336452&4294967295,_=T+(A<<6&4294967295|A>>>26),A=D+(T^(_|~x))+C[7]+1126891415&4294967295,D=_+(A<<10&4294967295|A>>>22),A=x+(_^(D|~T))+C[14]+2878612391&4294967295,x=D+(A<<15&4294967295|A>>>17),A=T+(D^(x|~_))+C[5]+4237533241&4294967295,T=x+(A<<21&4294967295|A>>>11),A=_+(x^(T|~D))+C[12]+1700485571&4294967295,_=T+(A<<6&4294967295|A>>>26),A=D+(T^(_|~x))+C[3]+2399980690&4294967295,D=_+(A<<10&4294967295|A>>>22),A=x+(_^(D|~T))+C[10]+4293915773&4294967295,x=D+(A<<15&4294967295|A>>>17),A=T+(D^(x|~_))+C[1]+2240044497&4294967295,T=x+(A<<21&4294967295|A>>>11),A=_+(x^(T|~D))+C[8]+1873313359&4294967295,_=T+(A<<6&4294967295|A>>>26),A=D+(T^(_|~x))+C[15]+4264355552&4294967295,D=_+(A<<10&4294967295|A>>>22),A=x+(_^(D|~T))+C[6]+2734768916&4294967295,x=D+(A<<15&4294967295|A>>>17),A=T+(D^(x|~_))+C[13]+1309151649&4294967295,T=x+(A<<21&4294967295|A>>>11),A=_+(x^(T|~D))+C[4]+4149444226&4294967295,_=T+(A<<6&4294967295|A>>>26),A=D+(T^(_|~x))+C[11]+3174756917&4294967295,D=_+(A<<10&4294967295|A>>>22),A=x+(_^(D|~T))+C[2]+718787259&4294967295,x=D+(A<<15&4294967295|A>>>17),A=T+(D^(x|~_))+C[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,S.g[2]=S.g[2]+x&4294967295,S.g[3]=S.g[3]+D&4294967295}r.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var T=_-this.blockSize,C=this.B,x=this.h,D=0;D<_;){if(x==0)for(;D<=T;)i(this,S,D),D+=this.blockSize;if(typeof S=="string"){for(;D<_;)if(C[x++]=S.charCodeAt(D++),x==this.blockSize){i(this,C),x=0;break}}else for(;D<_;)if(C[x++]=S[D++],x==this.blockSize){i(this,C),x=0;break}}this.h=x,this.o+=_},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var T=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=T&255,T/=256;for(this.u(S),S=Array(16),_=T=0;4>_;++_)for(var C=0;32>C;C+=8)S[T++]=this.g[_]>>>C&255;return S};function o(S,_){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=_(S)}function s(S,_){this.h=_;for(var T=[],C=!0,x=S.length-1;0<=x;x--){var D=S[x]|0;C&&D==_||(T[x]=D,C=!1)}this.g=T}var l={};function c(S){return-128<=S&&128>S?o(S,function(_){return new s([_|0],0>_?-1:0)}):new s([S|0],0>S?-1:0)}function h(S){if(isNaN(S)||!isFinite(S))return y;if(0>S)return M(h(-S));for(var _=[],T=1,C=0;S>=T;C++)_[C]=S/T|0,T*=4294967296;return new s(_,0)}function v(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return M(v(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(_,8)),C=y,x=0;x<S.length;x+=8){var D=Math.min(8,S.length-x),A=parseInt(S.substring(x,x+D),_);8>D?(D=h(Math.pow(_,D)),C=C.j(D).add(h(A))):(C=C.j(T),C=C.add(h(A)))}return C}var y=c(0),E=c(1),R=c(16777216);t=s.prototype,t.m=function(){if(L(this))return-M(this).m();for(var S=0,_=1,T=0;T<this.g.length;T++){var C=this.i(T);S+=(0<=C?C:4294967296+C)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(O(this))return"0";if(L(this))return"-"+M(this).toString(S);for(var _=h(Math.pow(S,6)),T=this,C="";;){var x=U(T,_).g;T=k(T,x.j(_));var D=((0<T.g.length?T.g[0]:T.h)>>>0).toString(S);if(T=x,O(T))return D+C;for(;6>D.length;)D="0"+D;C=D+C}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function O(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function L(S){return S.h==-1}t.l=function(S){return S=k(this,S),L(S)?-1:O(S)?0:1};function M(S){for(var _=S.g.length,T=[],C=0;C<_;C++)T[C]=~S.g[C];return new s(T,~S.h).add(E)}t.abs=function(){return L(this)?M(this):this},t.add=function(S){for(var _=Math.max(this.g.length,S.g.length),T=[],C=0,x=0;x<=_;x++){var D=C+(this.i(x)&65535)+(S.i(x)&65535),A=(D>>>16)+(this.i(x)>>>16)+(S.i(x)>>>16);C=A>>>16,D&=65535,A&=65535,T[x]=A<<16|D}return new s(T,T[T.length-1]&-2147483648?-1:0)};function k(S,_){return S.add(M(_))}t.j=function(S){if(O(this)||O(S))return y;if(L(this))return L(S)?M(this).j(M(S)):M(M(this).j(S));if(L(S))return M(this.j(M(S)));if(0>this.l(R)&&0>S.l(R))return h(this.m()*S.m());for(var _=this.g.length+S.g.length,T=[],C=0;C<2*_;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(var x=0;x<S.g.length;x++){var D=this.i(C)>>>16,A=this.i(C)&65535,Ut=S.i(x)>>>16,Xn=S.i(x)&65535;T[2*C+2*x]+=A*Xn,I(T,2*C+2*x),T[2*C+2*x+1]+=D*Xn,I(T,2*C+2*x+1),T[2*C+2*x+1]+=A*Ut,I(T,2*C+2*x+1),T[2*C+2*x+2]+=D*Ut,I(T,2*C+2*x+2)}for(C=0;C<_;C++)T[C]=T[2*C+1]<<16|T[2*C];for(C=_;C<2*_;C++)T[C]=0;return new s(T,0)};function I(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function P(S,_){this.g=S,this.h=_}function U(S,_){if(O(_))throw Error("division by zero");if(O(S))return new P(y,y);if(L(S))return _=U(M(S),_),new P(M(_.g),M(_.h));if(L(_))return _=U(S,M(_)),new P(M(_.g),_.h);if(30<S.g.length){if(L(S)||L(_))throw Error("slowDivide_ only works with positive integers.");for(var T=E,C=_;0>=C.l(S);)T=B(T),C=B(C);var x=W(T,1),D=W(C,1);for(C=W(C,2),T=W(T,2);!O(C);){var A=D.add(C);0>=A.l(S)&&(x=x.add(T),D=A),C=W(C,1),T=W(T,1)}return _=k(S,x.j(_)),new P(x,_)}for(x=y;0<=S.l(_);){for(T=Math.max(1,Math.floor(S.m()/_.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),D=h(T),A=D.j(_);L(A)||0<A.l(S);)T-=C,D=h(T),A=D.j(_);O(D)&&(D=E),x=x.add(D),S=k(S,A)}return new P(x,S)}t.A=function(S){return U(this,S).h},t.and=function(S){for(var _=Math.max(this.g.length,S.g.length),T=[],C=0;C<_;C++)T[C]=this.i(C)&S.i(C);return new s(T,this.h&S.h)},t.or=function(S){for(var _=Math.max(this.g.length,S.g.length),T=[],C=0;C<_;C++)T[C]=this.i(C)|S.i(C);return new s(T,this.h|S.h)},t.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),T=[],C=0;C<_;C++)T[C]=this.i(C)^S.i(C);return new s(T,this.h^S.h)};function B(S){for(var _=S.g.length+1,T=[],C=0;C<_;C++)T[C]=S.i(C)<<1|S.i(C-1)>>>31;return new s(T,S.h)}function W(S,_){var T=_>>5;_%=32;for(var C=S.g.length-T,x=[],D=0;D<C;D++)x[D]=0<_?S.i(D+T)>>>_|S.i(D+T+1)<<32-_:S.i(D+T);return new s(x,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=h,s.fromString=v,L2=s}).apply(typeof p0<"u"?p0:typeof self<"u"?self:typeof window<"u"?window:{});var Zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var M2,V2,Ca,F2,Tc,Cp,U2,j2,B2;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,m){return a==Array.prototype||a==Object.prototype||(a[d]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zu=="object"&&Zu];for(var d=0;d<a.length;++d){var m=a[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var m=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var N=a[w];if(!(N in m))break e;m=m[N]}a=a[a.length-1],w=m[a],d=d(w),d!=w&&d!=null&&e(m,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var m=0,w=!1,N={next:function(){if(!w&&m<a.length){var F=m++;return{value:d(F,a[F]),done:!1}}return w=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return o(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function h(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function v(a,d,m){return a.call.apply(a.bind,arguments)}function y(a,d,m){if(!a)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,w),a.apply(d,N)}}return function(){return a.apply(d,arguments)}}function E(a,d,m){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:y,E.apply(null,arguments)}function R(a,d){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function O(a,d){function m(){}m.prototype=d.prototype,a.aa=d.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(w,N,F){for(var G=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)G[ve-2]=arguments[ve];return d.prototype[N].apply(w,G)}}function L(a){const d=a.length;if(0<d){const m=Array(d);for(let w=0;w<d;w++)m[w]=a[w];return m}return[]}function M(a,d){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(c(w)){const N=a.length||0,F=w.length||0;a.length=N+F;for(let G=0;G<F;G++)a[N+G]=w[G]}else a.push(w)}}class k{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function I(a){return/^[\s\xa0]*$/.test(a)}function P(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var B=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function W(a,d,m){for(const w in a)d.call(m,a[w],w,a)}function S(a,d){for(const m in a)d.call(void 0,a[m],m,a)}function _(a){const d={};for(const m in a)d[m]=a[m];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,d){let m,w;for(let N=1;N<arguments.length;N++){w=arguments[N];for(m in w)a[m]=w[m];for(let F=0;F<T.length;F++)m=T[F],Object.prototype.hasOwnProperty.call(w,m)&&(a[m]=w[m])}}function x(a){var d=1;a=a.split(":");const m=[];for(;0<d&&a.length;)m.push(a.shift()),d--;return a.length&&m.push(a.join(":")),m}function D(a){l.setTimeout(()=>{throw a},0)}function A(){var a=q;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ut{constructor(){this.h=this.g=null}add(d,m){const w=Xn.get();w.set(d,m),this.h?this.h.next=w:this.g=w,this.h=w}}var Xn=new k(()=>new Ne,a=>a.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Kt,Q=!1,q=new Ut,oe=()=>{const a=l.Promise.resolve(void 0);Kt=()=>{a.then(ke)}};var ke=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(m){D(m)}var d=Xn;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Q=!1};function we(){this.s=this.s,this.C=this.C}we.prototype.s=!1,we.prototype.ma=function(){this.s||(this.s=!0,this.N())},we.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function De(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var V=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,d),l.removeEventListener("test",m,d)}catch{}return a}();function wn(a,d){if(De.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(B){e:{try{U(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else m=="mouseover"?d=a.fromElement:m=="mouseout"&&(d=a.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:jt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wn.aa.h.call(this)}}O(wn,De);var jt={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),Bs=0;function It(a,d,m,w,N){this.listener=a,this.proxy=null,this.src=d,this.type=m,this.capture=!!w,this.ha=N,this.key=++Bs,this.da=this.fa=!1}function ln(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ci(a){this.src=a,this.g={},this.h=0}Ci.prototype.add=function(a,d,m,w,N){var F=a.toString();a=this.g[F],a||(a=this.g[F]=[],this.h++);var G=To(a,d,w,N);return-1<G?(d=a[G],m||(d.fa=!1)):(d=new It(d,this.src,F,!!w,N),d.fa=m,a.push(d)),d};function zs(a,d){var m=d.type;if(m in a.g){var w=a.g[m],N=Array.prototype.indexOf.call(w,d,void 0),F;(F=0<=N)&&Array.prototype.splice.call(w,N,1),F&&(ln(d),a.g[m].length==0&&(delete a.g[m],a.h--))}}function To(a,d,m,w){for(var N=0;N<a.length;++N){var F=a[N];if(!F.da&&F.listener==d&&F.capture==!!m&&F.ha==w)return N}return-1}var Lr="closure_lm_"+(1e6*Math.random()|0),Ai={};function Mr(a,d,m,w,N){if(Array.isArray(d)){for(var F=0;F<d.length;F++)Mr(a,d[F],m,w,N);return null}return m=So(m),a&&a[an]?a.K(d,m,h(w)?!!w.capture:!!w,N):$s(a,d,m,!1,w,N)}function $s(a,d,m,w,N,F){if(!d)throw Error("Invalid event type");var G=h(N)?!!N.capture:!!N,ve=Hs(a);if(ve||(a[Lr]=ve=new Ci(a)),m=ve.add(d,m,w,G,F),m.proxy)return m;if(w=Tt(),m.proxy=w,w.src=a,w.listener=m,a.addEventListener)V||(N=G),N===void 0&&(N=!1),a.addEventListener(d.toString(),w,N);else if(a.attachEvent)a.attachEvent(ge(d.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Tt(){function a(m){return d.call(a.src,a.listener,m)}const d=Pi;return a}function Vr(a,d,m,w,N){if(Array.isArray(d))for(var F=0;F<d.length;F++)Vr(a,d[F],m,w,N);else w=h(w)?!!w.capture:!!w,m=So(m),a&&a[an]?(a=a.i,d=String(d).toString(),d in a.g&&(F=a.g[d],m=To(F,m,w,N),-1<m&&(ln(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete a.g[d],a.h--)))):a&&(a=Hs(a))&&(d=a.g[d.toString()],a=-1,d&&(a=To(d,m,w,N)),(m=-1<a?d[a]:null)&&ft(m))}function ft(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[an])zs(d.i,a);else{var m=a.type,w=a.proxy;d.removeEventListener?d.removeEventListener(m,w,a.capture):d.detachEvent?d.detachEvent(ge(m),w):d.addListener&&d.removeListener&&d.removeListener(w),(m=Hs(d))?(zs(m,a),m.h==0&&(m.src=null,d[Lr]=null)):ln(a)}}}function ge(a){return a in Ai?Ai[a]:Ai[a]="on"+a}function Pi(a,d){if(a.da)a=!0;else{d=new wn(d,this);var m=a.listener,w=a.ha||a.src;a.fa&&ft(a),a=m.call(w,d)}return a}function Hs(a){return a=a[Lr],a instanceof Ci?a:null}var bo="__closure_events_fn_"+(1e9*Math.random()>>>0);function So(a){return typeof a=="function"?a:(a[bo]||(a[bo]=function(d){return a.handleEvent(d)}),a[bo])}function Ke(){we.call(this),this.i=new Ci(this),this.M=this,this.F=null}O(Ke,we),Ke.prototype[an]=!0,Ke.prototype.removeEventListener=function(a,d,m,w){Vr(this,a,d,m,w)};function Qe(a,d){var m,w=a.F;if(w)for(m=[];w;w=w.F)m.push(w);if(a=a.M,w=d.type||d,typeof d=="string")d=new De(d,a);else if(d instanceof De)d.target=d.target||a;else{var N=d;d=new De(w,a),C(d,N)}if(N=!0,m)for(var F=m.length-1;0<=F;F--){var G=d.g=m[F];N=Jn(G,w,!0,d)&&N}if(G=d.g=a,N=Jn(G,w,!0,d)&&N,N=Jn(G,w,!1,d)&&N,m)for(F=0;F<m.length;F++)G=d.g=m[F],N=Jn(G,w,!1,d)&&N}Ke.prototype.N=function(){if(Ke.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var m=a.g[d],w=0;w<m.length;w++)ln(m[w]);delete a.g[d],a.h--}}this.F=null},Ke.prototype.K=function(a,d,m,w){return this.i.add(String(a),d,!1,m,w)},Ke.prototype.L=function(a,d,m,w){return this.i.add(String(a),d,!0,m,w)};function Jn(a,d,m,w){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,F=0;F<d.length;++F){var G=d[F];if(G&&!G.da&&G.capture==m){var ve=G.listener,Xe=G.ha||G.src;G.fa&&zs(a.i,G),N=ve.call(Xe,w)!==!1&&N}}return N&&!w.defaultPrevented}function Qt(a,d,m){if(typeof a=="function")m&&(a=E(a,m));else if(a&&typeof a.handleEvent=="function")a=E(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Zn(a){a.g=Qt(()=>{a.g=null,a.i&&(a.i=!1,Zn(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class er extends we{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Zn(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(a){we.call(this),this.h=a,this.g={}}O(Ri,we);var tr=[];function Fr(a){W(a.g,function(d,m){this.g.hasOwnProperty(m)&&ft(d)},a),a.g={}}Ri.prototype.N=function(){Ri.aa.N.call(this),Fr(this)},Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ko=l.JSON.stringify,Co=l.JSON.parse,Ws=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function qs(){}qs.prototype.h=null;function Ao(a){return a.h||(a.h=a.i())}function Po(){}var Mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gs(){De.call(this,"d")}O(Gs,De);function dt(){De.call(this,"c")}O(dt,De);var ht={},zl=null;function pt(){return zl=zl||new Ke}ht.La="serverreachability";function xi(a){De.call(this,ht.La,a)}O(xi,De);function Ur(a){const d=pt();Qe(d,new xi(d))}ht.STAT_EVENT="statevent";function Ks(a,d){De.call(this,ht.STAT_EVENT,a),this.stat=d}O(Ks,De);function ne(a){const d=pt();Qe(d,new Ks(d,a))}ht.Ma="timingevent";function Yt(a,d){De.call(this,ht.Ma,a),this.size=d}O(Yt,De);function Bt(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function Xt(){this.g=!0}Xt.prototype.xa=function(){this.g=!1};function He(a,d,m,w,N,F){a.info(function(){if(a.g)if(F)for(var G="",ve=F.split("&"),Xe=0;Xe<ve.length;Xe++){var he=ve[Xe].split("=");if(1<he.length){var it=he[0];he=he[1];var Je=it.split("_");G=2<=Je.length&&Je[1]=="type"?G+(it+"="+he+"&"):G+(it+"=redacted&")}}else G=null;else G=F;return"XMLHTTP REQ ("+w+") [attempt "+N+"]: "+d+`
`+m+`
`+G})}function rt(a,d,m,w,N,F,G){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+N+"]: "+d+`
`+m+`
`+F+" "+G})}function Vn(a,d,m,w){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Oi(a,m)+(w?" "+w:"")})}function $l(a,d){a.info(function(){return"TIMEOUT: "+d})}Xt.prototype.info=function(){};function Oi(a,d){if(!a.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var w=m[a];if(!(2>w.length)){var N=w[1];if(Array.isArray(N)&&!(1>N.length)){var F=N[0];if(F!="noop"&&F!="stop"&&F!="close")for(var G=1;G<N.length;G++)N[G]=""}}}}return ko(m)}catch{return d}}var Ye={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ro;function Ni(){}O(Ni,qs),Ni.prototype.g=function(){return new XMLHttpRequest},Ni.prototype.i=function(){return{}},Ro=new Ni;function un(a,d,m,w){this.j=a,this.i=d,this.l=m,this.R=w||1,this.U=new Ri(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wl}function Wl(){this.i=null,this.g="",this.h=!1}var Qs={},Ys={};function Xs(a,d,m){a.L=1,a.v=Li(_n(d)),a.m=m,a.P=!0,Fn(a,null)}function Fn(a,d){a.F=Date.now(),xo(a),a.A=_n(a.v);var m=a.A,w=a.R;Array.isArray(w)||(w=[String(w)]),ru(m.i,"t",w),a.C=0,m=a.j.J,a.h=new Wl,a.g=aa(a.j,m?d:null,!a.m),0<a.O&&(a.M=new er(E(a.Y,a,a.g),a.O)),d=a.U,m=a.g,w=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(tr[0]=N.toString()),N=tr);for(var F=0;F<N.length;F++){var G=Mr(m,N[F],w||d.handleEvent,!1,d.h||d);if(!G)break;d.g[G.key]=G}d=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Ur(),He(a.i,a.u,a.A,a.l,a.R,a.m)}un.prototype.ca=function(a){a=a.target;const d=this.M;d&&bt(a)==3?d.j():this.Y(a)},un.prototype.Y=function(a){try{if(a==this.g)e:{const Je=bt(this.g);var d=this.g.Ba();const Hr=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||fu(this.g)))){this.J||Je!=4||d==7||(d==8||0>=Hr?Ur(3):Ur(2)),Js(this);var m=this.g.Z();this.X=m;t:if(ql(this)){var w=fu(this.g);a="";var N=w.length,F=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rr(this),nr(this);var G="";break t}this.h.i=new l.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,a+=this.h.i.decode(w[d],{stream:!(F&&d==N-1)});w.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,rt(this.i,this.u,this.A,this.l,this.R,Je,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Xe=this.g;if((ve=Xe.g?Xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(ve)){var he=ve;break t}}he=null}if(m=he)Vn(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zs(this,m);else{this.o=!1,this.s=3,ne(12),rr(this),nr(this);break e}}if(this.P){m=!0;let Dt;for(;!this.J&&this.C<G.length;)if(Dt=od(this,G),Dt==Ys){Je==4&&(this.s=4,ne(14),m=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==Qs){this.s=4,ne(15),Vn(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else Vn(this.i,this.l,Dt,null),Zs(this,Dt);if(ql(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||G.length!=0||this.h.h||(this.s=1,ne(16),m=!1),this.o=this.o&&m,!m)Vn(this.i,this.l,G,"[Invalid Chunked Response]"),rr(this),nr(this);else if(0<G.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),oa(it),it.M=!0,ne(11))}}else Vn(this.i,this.l,G,null),Zs(this,G);Je==4&&rr(this),this.o&&!this.J&&(Je==4?sa(this.j,this):(this.o=!1,xo(this)))}else du(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,ne(12)):(this.s=0,ne(13)),rr(this),nr(this)}}}catch{}finally{}};function ql(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function od(a,d){var m=a.C,w=d.indexOf(`
`,m);return w==-1?Ys:(m=Number(d.substring(m,w)),isNaN(m)?Qs:(w+=1,w+m>d.length?Ys:(d=d.slice(w,w+m),a.C=w+m,d)))}un.prototype.cancel=function(){this.J=!0,rr(this)};function xo(a){a.S=Date.now()+a.I,Gl(a,a.I)}function Gl(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Bt(E(a.ba,a),d)}function Js(a){a.B&&(l.clearTimeout(a.B),a.B=null)}un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?($l(this.i,this.A),this.L!=2&&(Ur(),ne(17)),rr(this),this.s=2,nr(this)):Gl(this,this.S-a)};function nr(a){a.j.G==0||a.J||sa(a.j,a)}function rr(a){Js(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Fr(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Zs(a,d){try{var m=a.j;if(m.G!=0&&(m.g==a||Di(m.h,a))){if(!a.K&&Di(m.h,a)&&m.G==3){try{var w=m.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var N=w;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)Uo(m),Mo(m);else break e;Fo(m),ne(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=Bt(E(m.Za,m),6e3));if(1>=Yl(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else sr(m,11)}else if((a.K||m.g==a)&&Uo(m),!I(d))for(N=m.Da.g.parse(d),d=0;d<N.length;d++){let he=N[d];if(m.T=he[0],he=he[1],m.G==2)if(he[0]=="c"){m.K=he[1],m.ia=he[2];const it=he[3];it!=null&&(m.la=it,m.j.info("VER="+m.la));const Je=he[4];Je!=null&&(m.Aa=Je,m.j.info("SVER="+m.Aa));const Hr=he[5];Hr!=null&&typeof Hr=="number"&&0<Hr&&(w=1.5*Hr,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Dt=a.g;if(Dt){const ji=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var F=w.h;F.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(ea(F,F.h),F.h=null))}if(w.D){const Bo=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Bo&&(w.ya=Bo,ye(w.I,w.D,Bo))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var G=a;if(w.qa=wu(w,w.J?w.ia:null,w.W),G.K){Xl(w.h,G);var ve=G,Xe=w.L;Xe&&(ve.I=Xe),ve.B&&(Js(ve),xo(ve)),w.g=G}else vu(w);0<m.i.length&&Vo(m)}else he[0]!="stop"&&he[0]!="close"||sr(m,7);else m.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?sr(m,7):ia(m):he[0]!="noop"&&m.l&&m.l.ta(he),m.v=0)}}Ur(4)}catch{}}var ir=class{constructor(a,d){this.g=a,this.map=d}};function Kl(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ql(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yl(a){return a.h?1:a.g?a.g.size:0}function Di(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function ea(a,d){a.g?a.g.add(d):a.h=d}function Xl(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Kl.prototype.cancel=function(){if(this.i=Jl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const m of a.g.values())d=d.concat(m.D);return d}return L(a.i)}function sd(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],m=a.length,w=0;w<m;w++)d.push(a[w]);return d}d=[],m=0;for(w in a)d[m++]=a[w];return d}function ad(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var m=0;m<a;m++)d.push(m);return d}d=[],m=0;for(const w in a)d[m++]=w;return d}}}function _e(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var m=ad(a),w=sd(a),N=w.length,F=0;F<N;F++)d.call(void 0,w[F],m&&m[F],a)}var Zl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ld(a,d){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var w=a[m].indexOf("="),N=null;if(0<=w){var F=a[m].substring(0,w);N=a[m].substring(w+1)}else F=a[m];d(F,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof or){this.h=a.h,Oo(this,a.j),this.o=a.o,this.g=a.g,No(this,a.s),this.l=a.l;var d=a.i,m=new Mi;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Do(this,m),this.m=a.m}else a&&(d=String(a).match(Zl))?(this.h=!1,Oo(this,d[1]||"",!0),this.o=Un(d[2]||""),this.g=Un(d[3]||"",!0),No(this,d[4]),this.l=Un(d[5]||"",!0),Do(this,d[6]||"",!0),this.m=Un(d[7]||"")):(this.h=!1,this.i=new Mi(null,this.h))}or.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Ie(d,eu,!0),":");var m=this.g;return(m||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Ie(d,eu,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(Ie(m,m.charAt(0)=="/"?tu:cd,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",Ie(m,dd)),a.join("")};function _n(a){return new or(a)}function Oo(a,d,m){a.j=m?Un(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function No(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Do(a,d,m){d instanceof Mi?(a.i=d,hd(a.i,a.h)):(m||(d=Ie(d,fd)),a.i=new Mi(d,a.h))}function ye(a,d,m){a.i.set(d,m)}function Li(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Un(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ie(a,d,m){return typeof a=="string"?(a=encodeURI(a).replace(d,ud),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ud(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var eu=/[#\/\?@]/g,cd=/[#\?:]/g,tu=/[#\?]/g,fd=/[#\?@]/g,dd=/#/g;function Mi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function En(a){a.g||(a.g=new Map,a.h=0,a.i&&ld(a.i,function(d,m){a.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Mi.prototype,t.add=function(a,d){En(this),this.i=null,a=jr(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(d),this.h+=1,this};function nu(a,d){En(a),d=jr(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function ta(a,d){return En(a),d=jr(a,d),a.g.has(d)}t.forEach=function(a,d){En(this),this.g.forEach(function(m,w){m.forEach(function(N){a.call(d,N,w,this)},this)},this)},t.na=function(){En(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let w=0;w<d.length;w++){const N=a[w];for(let F=0;F<N.length;F++)m.push(d[w])}return m},t.V=function(a){En(this);let d=[];if(typeof a=="string")ta(this,a)&&(d=d.concat(this.g.get(jr(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)d=d.concat(a[m])}return d},t.set=function(a,d){return En(this),this.i=null,a=jr(this,a),ta(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function ru(a,d,m){nu(a,d),0<m.length&&(a.i=null,a.g.set(jr(a,d),L(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var w=d[m];const F=encodeURIComponent(String(w)),G=this.V(w);for(w=0;w<G.length;w++){var N=F;G[w]!==""&&(N+="="+encodeURIComponent(String(G[w]))),a.push(N)}}return this.i=a.join("&")};function jr(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function hd(a,d){d&&!a.j&&(En(a),a.i=null,a.g.forEach(function(m,w){var N=w.toLowerCase();w!=N&&(nu(this,w),ru(this,N,m))},a)),a.j=d}function pd(a,d){const m=new Xt;if(l.Image){const w=new Image;w.onload=R(jn,m,"TestLoadImage: loaded",!0,d,w),w.onerror=R(jn,m,"TestLoadImage: error",!1,d,w),w.onabort=R(jn,m,"TestLoadImage: abort",!1,d,w),w.ontimeout=R(jn,m,"TestLoadImage: timeout",!1,d,w),l.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else d(!1)}function md(a,d){const m=new Xt,w=new AbortController,N=setTimeout(()=>{w.abort(),jn(m,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:w.signal}).then(F=>{clearTimeout(N),F.ok?jn(m,"TestPingServer: ok",!0,d):jn(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),jn(m,"TestPingServer: error",!1,d)})}function jn(a,d,m,w,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),w(m)}catch{}}function gd(){this.g=new Ws}function iu(a,d,m){const w=m||"";try{_e(a,function(N,F){let G=N;h(N)&&(G=ko(N)),d.push(w+F+"="+encodeURIComponent(G))})}catch(N){throw d.push(w+"type="+encodeURIComponent("_badmap")),N}}function Vi(a){this.l=a.Ub||null,this.j=a.eb||!1}O(Vi,qs),Vi.prototype.g=function(){return new Fi(this.l,this.j)},Vi.prototype.i=function(a){return function(){return a}}({});function Fi(a,d){Ke.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(Fi,Ke),t=Fi.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,cn(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ui(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ou(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ou(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Ui(this):cn(this),this.readyState==3&&ou(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ui(this))},t.Qa=function(a){this.g&&(this.response=a,Ui(this))},t.ga=function(){this.g&&Ui(this)};function Ui(a){a.readyState=4,a.l=null,a.j=null,a.v=null,cn(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=d.next();return a.join(`\r
`)};function cn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function na(a){let d="";return W(a,function(m,w){d+=w,d+=":",d+=m,d+=`\r
`}),d}function ra(a,d,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=na(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):ye(a,d,m))}function Te(a){Ke.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Te,Ke);var su=/^https?$/i,vd=["POST","PUT"];t=Te.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ro.g(),this.v=this.o?Ao(this.o):Ao(Ro),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(F){au(this,F);return}if(a=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var N in w)m.set(N,w[N]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const F of w.keys())m.set(F,w.get(F));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(vd,d,void 0))||w||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,G]of m)this.g.setRequestHeader(F,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cu(this),this.u=!0,this.g.send(a),this.u=!1}catch(F){au(this,F)}};function au(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,lu(a),Lo(a)}function lu(a){a.A||(a.A=!0,Qe(a,"complete"),Qe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Qe(this,"complete"),Qe(this,"abort"),Lo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lo(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?uu(this):this.bb())},t.bb=function(){uu(this)};function uu(a){if(a.h&&typeof s<"u"&&(!a.v[1]||bt(a)!=4||a.Z()!=2)){if(a.u&&bt(a)==4)Qt(a.Ea,0,a);else if(Qe(a,"readystatechange"),bt(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var w;if(w=G===0){var N=String(a.D).match(Zl)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),w=!su.test(N?N.toLowerCase():"")}m=w}if(m)Qe(a,"complete"),Qe(a,"success");else{a.m=6;try{var F=2<bt(a)?a.g.statusText:""}catch{F=""}a.l=F+" ["+a.Z()+"]",lu(a)}}finally{Lo(a)}}}}function Lo(a,d){if(a.g){cu(a);const m=a.g,w=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Qe(a,"ready");try{m.onreadystatechange=w}catch{}}}function cu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function bt(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Co(d)}};function fu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function du(a){const d={};a=(a.g&&2<=bt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(I(a[w]))continue;var m=x(a[w]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=d[N]||[];d[N]=F,F.push(m)}S(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Br(a,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||d}function hu(a){this.Aa=0,this.i=[],this.j=new Xt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Br("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Br("baseRetryDelayMs",5e3,a),this.cb=Br("retryDelaySeedMs",1e4,a),this.Wa=Br("forwardChannelMaxRetries",2,a),this.wa=Br("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Kl(a&&a.concurrentRequestLimit),this.Da=new gd,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hu.prototype,t.la=8,t.G=1,t.connect=function(a,d,m,w){ne(0),this.W=a,this.H=d||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=wu(this,null,this.W),Vo(this)};function ia(a){if(pu(a),a.G==3){var d=a.U++,m=_n(a.I);if(ye(m,"SID",a.K),ye(m,"RID",d),ye(m,"TYPE","terminate"),fn(a,m),d=new un(a,a.j,d),d.L=2,d.v=Li(_n(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=d.v,m=!0),m||(d.g=aa(d.j,null),d.g.ea(d.v)),d.F=Date.now(),xo(d)}yu(a)}function Mo(a){a.g&&(oa(a),a.g.cancel(),a.g=null)}function pu(a){Mo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Uo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Vo(a){if(!Ql(a.h)&&!a.s){a.s=!0;var d=a.Ga;Kt||oe(),Q||(Kt(),Q=!0),q.add(d,a),a.B=0}}function yd(a,d){return Yl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Bt(E(a.Ga,a,d),zr(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new un(this,this.j,a);let F=this.o;if(this.S&&(F?(F=_(F),C(F,this.S)):F=this.S),this.m!==null||this.O||(N.H=F,F=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=gu(this,N,d),m=_n(this.I),ye(m,"RID",a),ye(m,"CVER",22),this.D&&ye(m,"X-HTTP-Session-Id",this.D),fn(this,m),F&&(this.O?d="headers="+encodeURIComponent(String(na(F)))+"&"+d:this.m&&ra(m,this.m,F)),ea(this.h,N),this.Ua&&ye(m,"TYPE","init"),this.P?(ye(m,"$req",d),ye(m,"SID","null"),N.T=!0,Xs(N,m,null)):Xs(N,m,d),this.G=2}}else this.G==3&&(a?mu(this,a):this.i.length==0||Ql(this.h)||mu(this))};function mu(a,d){var m;d?m=d.l:m=a.U++;const w=_n(a.I);ye(w,"SID",a.K),ye(w,"RID",m),ye(w,"AID",a.T),fn(a,w),a.m&&a.o&&ra(w,a.m,a.o),m=new un(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),d&&(a.i=d.D.concat(a.i)),d=gu(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ea(a.h,m),Xs(m,w,d)}function fn(a,d){a.H&&W(a.H,function(m,w){ye(d,w,m)}),a.l&&_e({},function(m,w){ye(d,w,m)})}function gu(a,d,m){m=Math.min(a.i.length,m);var w=a.l?E(a.l.Na,a.l,a):null;e:{var N=a.i;let F=-1;for(;;){const G=["count="+m];F==-1?0<m?(F=N[0].g,G.push("ofs="+F)):F=0:G.push("ofs="+F);let ve=!0;for(let Xe=0;Xe<m;Xe++){let he=N[Xe].g;const it=N[Xe].map;if(he-=F,0>he)F=Math.max(0,N[Xe].g-100),ve=!1;else try{iu(it,G,"req"+he+"_")}catch{w&&w(it)}}if(ve){w=G.join("&");break e}}}return a=a.i.splice(0,m),d.D=a,w}function vu(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Kt||oe(),Q||(Kt(),Q=!0),q.add(d,a),a.v=0}}function Fo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Bt(E(a.Fa,a),zr(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,In(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Bt(E(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ne(10),Mo(this),In(this))};function oa(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function In(a){a.g=new un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=_n(a.qa);ye(d,"RID","rpc"),ye(d,"SID",a.K),ye(d,"AID",a.T),ye(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(d,"TO",a.ja),ye(d,"TYPE","xmlhttp"),fn(a,d),a.m&&a.o&&ra(d,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=Li(_n(d)),m.m=null,m.P=!0,Fn(m,a)}t.Za=function(){this.C!=null&&(this.C=null,Mo(this),Fo(this),ne(19))};function Uo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function sa(a,d){var m=null;if(a.g==d){Uo(a),oa(a),a.g=null;var w=2}else if(Di(a.h,d))m=d.D,Xl(a.h,d),w=1;else return;if(a.G!=0){if(d.o)if(w==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var N=a.B;w=pt(),Qe(w,new Yt(w,m)),Vo(a)}else vu(a);else if(N=d.s,N==3||N==0&&0<d.X||!(w==1&&yd(a,d)||w==2&&Fo(a)))switch(m&&0<m.length&&(d=a.h,d.i=d.i.concat(m)),N){case 1:sr(a,5);break;case 4:sr(a,10);break;case 3:sr(a,6);break;default:sr(a,2)}}}function zr(a,d){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*d}function sr(a,d){if(a.j.info("Error code "+d),d==2){var m=E(a.fb,a),w=a.Xa;const N=!w;w=new or(w||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Oo(w,"https"),Li(w),N?pd(w.toString(),m):md(w.toString(),m)}else ne(2);a.G=0,a.l&&a.l.sa(d),yu(a),pu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ne(2)):(this.j.info("Failed to ping google.com"),ne(1))};function yu(a){if(a.G=0,a.ka=[],a.l){const d=Jl(a.h);(d.length!=0||a.i.length!=0)&&(M(a.ka,d),M(a.ka,a.i),a.h.i.length=0,L(a.i),a.i.length=0),a.l.ra()}}function wu(a,d,m){var w=m instanceof or?_n(m):new or(m);if(w.g!="")d&&(w.g=d+"."+w.g),No(w,w.s);else{var N=l.location;w=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var F=new or(null);w&&Oo(F,w),d&&(F.g=d),N&&No(F,N),m&&(F.l=m),w=F}return m=a.D,d=a.ya,m&&d&&ye(w,m,d),ye(w,"VER",a.la),fn(a,w),w}function aa(a,d,m){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Te(new Vi({eb:m})):new Te(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ar(){}t=ar.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function jo(){}jo.prototype.g=function(a,d){return new Nt(a,d)};function Nt(a,d){Ke.call(this),this.g=new hu(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!I(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!I(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new $r(this)}O(Nt,Ke),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){ia(this.g)},Nt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=ko(a),a=m);d.i.push(new ir(d.Ya++,a)),d.G==3&&Vo(d)},Nt.prototype.N=function(){this.g.l=null,delete this.j,ia(this.g),delete this.g,Nt.aa.N.call(this)};function _u(a){Gs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const m in d){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}O(_u,Gs);function Eu(){dt.call(this),this.status=1}O(Eu,dt);function $r(a){this.g=a}O($r,ar),$r.prototype.ua=function(){Qe(this.g,"a")},$r.prototype.ta=function(a){Qe(this.g,new _u(a))},$r.prototype.sa=function(a){Qe(this.g,new Eu)},$r.prototype.ra=function(){Qe(this.g,"b")},jo.prototype.createWebChannel=jo.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,B2=function(){return new jo},j2=function(){return pt()},U2=ht,Cp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ye.NO_ERROR=0,Ye.TIMEOUT=8,Ye.HTTP_ERROR=6,Tc=Ye,Hl.COMPLETE="complete",F2=Hl,Po.EventType=Mn,Mn.OPEN="a",Mn.CLOSE="b",Mn.ERROR="c",Mn.MESSAGE="d",Ke.prototype.listen=Ke.prototype.K,Ca=Po,V2=Vi,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,M2=Te}).apply(typeof Zu<"u"?Zu:typeof self<"u"?self:typeof window<"u"?window:{});const m0="@firebase/firestore";/**
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
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let Us="10.12.1";/**
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
 */const go=new xm("@firebase/firestore");function va(){return go.logLevel}function te(t,...e){if(go.logLevel<=fe.DEBUG){const n=e.map(lg);go.debug(`Firestore (${Us}): ${t}`,...n)}}function vo(t,...e){if(go.logLevel<=fe.ERROR){const n=e.map(lg);go.error(`Firestore (${Us}): ${t}`,...n)}}function ff(t,...e){if(go.logLevel<=fe.WARN){const n=e.map(lg);go.warn(`Firestore (${Us}): ${t}`,...n)}}function lg(t){if(typeof t=="string")return t;try{/**
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: `+t;throw vo(e),new Error(e)}function ct(t,e){t||de()}function xe(t,e){return t}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class no{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class z2{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class a4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class l4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class u4{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let o=new no;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new no,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const c=o;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new no)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ct(typeof r.accessToken=="string"),new z2(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ct(e===null||typeof e=="string"),new At(e)}}class c4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class f4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new c4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class d4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class h4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,te("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ct(typeof n.token=="string"),this.R=n.token,new d4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function p4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class $2{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=p4(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Cs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ut(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Le(e)}static min(){return new Le(new ut(0,0))}static max(){return new Le(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vl{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends vl{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const m4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends vl{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return m4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(r+=l,i++):(o(),i++)}if(o(),s)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(qe.fromString(e))}static fromName(e){return new le(qe.fromString(e).popFirst(5))}static empty(){return new le(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new qe(e.slice()))}}function g4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Le.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new Ei(i,le.empty(),e)}function v4(t){return new Ei(t.readTime,t.key,-1)}class Ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ei(Le.min(),le.empty(),-1)}static max(){return new Ei(Le.max(),le.empty(),-1)}}function y4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const w4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function H2(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==w4)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&n()},c=>r(c))}),s=!0,o===i&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(i=>i?z.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new z((r,i)=>{const o=e.length,s=new Array(o);let l=0;for(let c=0;c<o;c++){const h=c;n(e[h]).next(v=>{s[h]=v,++l,l===o&&r(s)},v=>i(v))}})}static doWhile(e,n){return new z((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function E4(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xf(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class W2{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}W2.oe=-1;function ug(t){return t==null}function df(t){return t===0&&1/t==-1/0}function I4(t){return typeof t=="number"&&Number.isInteger(t)&&!df(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function g0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function q2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Gt{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new Gt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new Gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ec(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ec(this.root,e,this.comparator,!1)}getReverseIterator(){return new ec(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ec(this.root,e,this.comparator,!0)}}class ec{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??gt.RED,this.left=i??gt.EMPTY,this.right=o??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new gt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,i,o){return this}insert(e,n,r){return new gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new Gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new v0(this.data.getIterator())}getIteratorFrom(e){return new v0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class v0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xn{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new xn([])}unionWith(e){let n=new xt(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class T4 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ar{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new T4("Invalid base64 string: "+o):o}}(e);return new Ar(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Ar(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ar.EMPTY_BYTE_STRING=new Ar("");const b4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yo(t){if(ct(!!t),typeof t=="string"){let e=0;const n=b4.exec(t);if(ct(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:vt(t.seconds),nanos:vt(t.nanos)}}function vt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yl(t){return typeof t=="string"?Ar.fromBase64String(t):Ar.fromUint8Array(t)}/**
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
 */function cg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function G2(t){const e=t.mapValue.fields.__previous_value__;return cg(e)?G2(e):e}function hf(t){const e=yo(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
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
 */class S4{constructor(e,n,r,i,o,s,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class pf{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pf("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pf&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const tc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function As(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cg(t)?4:k4(t)?9007199254740991:10:de()}function Yn(t,e){if(t===e)return!0;const n=As(t);if(n!==As(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hf(t).isEqual(hf(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=yo(i.timestampValue),l=yo(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return yl(i.bytesValue).isEqual(yl(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return vt(i.geoPointValue.latitude)===vt(o.geoPointValue.latitude)&&vt(i.geoPointValue.longitude)===vt(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return vt(i.integerValue)===vt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=vt(i.doubleValue),l=vt(o.doubleValue);return s===l?df(s)===df(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return Cs(t.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(g0(s)!==g0(l))return!1;for(const c in s)if(s.hasOwnProperty(c)&&(l[c]===void 0||!Yn(s[c],l[c])))return!1;return!0}(t,e);default:return de()}}function wl(t,e){return(t.values||[]).find(n=>Yn(n,e))!==void 0}function Ps(t,e){if(t===e)return 0;const n=As(t),r=As(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=vt(o.integerValue||o.doubleValue),c=vt(s.integerValue||s.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return y0(t.timestampValue,e.timestampValue);case 4:return y0(hf(t),hf(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(o,s){const l=yl(o),c=yl(s);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),c=s.split("/");for(let h=0;h<l.length&&h<c.length;h++){const v=be(l[h],c[h]);if(v!==0)return v}return be(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=be(vt(o.latitude),vt(s.latitude));return l!==0?l:be(vt(o.longitude),vt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const l=o.values||[],c=s.values||[];for(let h=0;h<l.length&&h<c.length;++h){const v=Ps(l[h],c[h]);if(v)return v}return be(l.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===tc.mapValue&&s===tc.mapValue)return 0;if(o===tc.mapValue)return 1;if(s===tc.mapValue)return-1;const l=o.fields||{},c=Object.keys(l),h=s.fields||{},v=Object.keys(h);c.sort(),v.sort();for(let y=0;y<c.length&&y<v.length;++y){const E=be(c[y],v[y]);if(E!==0)return E;const R=Ps(l[c[y]],h[v[y]]);if(R!==0)return R}return be(c.length,v.length)}(t.mapValue,e.mapValue);default:throw de()}}function y0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=yo(t),r=yo(e),i=be(n.seconds,r.seconds);return i!==0?i:be(n.nanos,r.nanos)}function Rs(t){return Ap(t)}function Ap(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yo(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yl(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Ap(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Ap(n.fields[s])}`;return i+"}"}(t.mapValue):de()}function Pp(t){return!!t&&"integerValue"in t}function fg(t){return!!t&&"arrayValue"in t}function bc(t){return!!t&&"mapValue"in t}function ja(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ja(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ja(t.arrayValue.values[n]);return e}return Object.assign({},t)}function k4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class An{constructor(e){this.value=e}static empty(){return new An({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ja(n)}setAll(e){let n=yt.emptyPath(),r={},i=[];e.forEach((s,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}s?r[l.lastSegment()]=ja(s):i.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());bc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];bc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fl(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new An(ja(this.value))}}function K2(t){const e=[];return Fl(t.fields,(n,r)=>{const i=new yt([n]);if(bc(r)){const o=K2(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new xn(e)}/**
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
 */class Cn{constructor(e,n,r,i,o,s,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new Cn(e,0,Le.min(),Le.min(),Le.min(),An.empty(),0)}static newFoundDocument(e,n,r,i){return new Cn(e,1,n,Le.min(),r,i,0)}static newNoDocument(e,n){return new Cn(e,2,n,Le.min(),Le.min(),An.empty(),0)}static newUnknownDocument(e,n){return new Cn(e,3,n,Le.min(),Le.min(),An.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=An.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=An.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mf{constructor(e,n){this.position=e,this.inclusive=n}}function w0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=le.comparator(le.fromName(s.referenceValue),n.key):r=Ps(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function _0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class gf{constructor(e,n="asc"){this.field=e,this.dir=n}}function C4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Q2{}class at extends Q2{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new P4(e,n,r):n==="array-contains"?new O4(e,r):n==="in"?new N4(e,r):n==="not-in"?new D4(e,r):n==="array-contains-any"?new L4(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new R4(e,r):new x4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ps(n,this.value)):n!==null&&As(this.value)===As(n)&&this.matchesComparison(Ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ii extends Q2{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ii(e,n)}matches(e){return Y2(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Y2(t){return t.op==="and"}function X2(t){return A4(t)&&Y2(t)}function A4(t){for(const e of t.filters)if(e instanceof Ii)return!1;return!0}function Rp(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+Rs(t.value);if(X2(t))return t.filters.map(e=>Rp(e)).join(",");{const e=t.filters.map(n=>Rp(n)).join(",");return`${t.op}(${e})`}}function J2(t,e){return t instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.field.isEqual(i.field)&&Yn(r.value,i.value)}(t,e):t instanceof Ii?function(r,i){return i instanceof Ii&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,l)=>o&&J2(s,i.filters[l]),!0):!1}(t,e):void de()}function Z2(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${Rs(n.value)}`}(t):t instanceof Ii?function(n){return n.op.toString()+" {"+n.getFilters().map(Z2).join(" ,")+"}"}(t):"Filter"}class P4 extends at{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class R4 extends at{constructor(e,n){super(e,"in",n),this.keys=eE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class x4 extends at{constructor(e,n){super(e,"not-in",n),this.keys=eE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class O4 extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fg(n)&&wl(n.arrayValue,this.value)}}class N4 extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wl(this.value.arrayValue,n)}}class D4 extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wl(this.value.arrayValue,n)}}class L4 extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wl(this.value.arrayValue,r))}}/**
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
 */class M4{constructor(e,n=null,r=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function E0(t,e=null,n=[],r=[],i=null,o=null,s=null){return new M4(t,e,n,r,i,o,s)}function dg(t){const e=xe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ug(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Rs(r)).join(",")),e.ue=n}return e.ue}function hg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!C4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!J2(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_0(t.startAt,e.startAt)&&_0(t.endAt,e.endAt)}/**
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
 */class Jf{constructor(e,n=null,r=[],i=[],o=null,s="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function V4(t,e,n,r,i,o,s,l){return new Jf(t,e,n,r,i,o,s,l)}function F4(t){return new Jf(t)}function I0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function U4(t){return t.collectionGroup!==null}function Ba(t){const e=xe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new xt(yt.comparator);return s.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new gf(o,r))}),n.has(yt.keyField().canonicalString())||e.ce.push(new gf(yt.keyField(),r))}return e.ce}function ro(t){const e=xe(t);return e.le||(e.le=j4(e,Ba(t))),e.le}function j4(t,e){if(t.limitType==="F")return E0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new gf(i.field,o)});const n=t.endAt?new mf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new mf(t.startAt.position,t.startAt.inclusive):null;return E0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xp(t,e,n){return new Jf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tE(t,e){return hg(ro(t),ro(e))&&t.limitType===e.limitType}function nE(t){return`${dg(ro(t))}|lt:${t.limitType}`}function ya(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Z2(i)).join(", ")}]`),ug(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Rs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Rs(i)).join(",")),`Target(${r})`}(ro(t))}; limitType=${t.limitType})`}function pg(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):le.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Ba(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,l,c){const h=w0(s,l,c);return s.inclusive?h<=0:h<0}(r.startAt,Ba(r),i)||r.endAt&&!function(s,l,c){const h=w0(s,l,c);return s.inclusive?h>=0:h>0}(r.endAt,Ba(r),i))}(t,e)}function B4(t){return(e,n)=>{let r=!1;for(const i of Ba(t)){const o=z4(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function z4(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(o,s,l){const c=s.data.field(o),h=l.data.field(o);return c!==null&&h!==null?Ps(c,h):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
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
 */class js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fl(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return q2(this.inner)}size(){return this.innerSize}}/**
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
 */const $4=new Gt(le.comparator);function vf(){return $4}const rE=new Gt(le.comparator);function nc(...t){let e=rE;for(const n of t)e=e.insert(n.key,n);return e}function iE(t){let e=rE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ji(){return za()}function oE(){return za()}function za(){return new js(t=>t.toString(),(t,e)=>t.isEqual(e))}const H4=new Gt(le.comparator),W4=new xt(le.comparator);function Rt(...t){let e=W4;for(const n of t)e=e.add(n);return e}const q4=new xt(be);function G4(){return q4}/**
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
 */function sE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:df(e)?"-0":e}}function aE(t){return{integerValue:""+t}}function K4(t,e){return I4(e)?aE(e):sE(t,e)}/**
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
 */class Zf{constructor(){this._=void 0}}function Q4(t,e,n){return t instanceof yf?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&cg(o)&&(o=G2(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof _l?uE(t,e):t instanceof El?cE(t,e):function(i,o){const s=lE(i,o),l=T0(s)+T0(i.Pe);return Pp(s)&&Pp(i.Pe)?aE(l):sE(i.serializer,l)}(t,e)}function Y4(t,e,n){return t instanceof _l?uE(t,e):t instanceof El?cE(t,e):n}function lE(t,e){return t instanceof wf?function(r){return Pp(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class yf extends Zf{}class _l extends Zf{constructor(e){super(),this.elements=e}}function uE(t,e){const n=fE(e);for(const r of t.elements)n.some(i=>Yn(i,r))||n.push(r);return{arrayValue:{values:n}}}class El extends Zf{constructor(e){super(),this.elements=e}}function cE(t,e){let n=fE(e);for(const r of t.elements)n=n.filter(i=>!Yn(i,r));return{arrayValue:{values:n}}}class wf extends Zf{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function T0(t){return vt(t.integerValue||t.doubleValue)}function fE(t){return fg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function X4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof _l&&i instanceof _l||r instanceof El&&i instanceof El?Cs(r.elements,i.elements,Yn):r instanceof wf&&i instanceof wf?Yn(r.Pe,i.Pe):r instanceof yf&&i instanceof yf}(t.transform,e.transform)}class J4{constructor(e,n){this.version=e,this.transformResults=n}}class yr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yr}static exists(e){return new yr(void 0,e)}static updateTime(e){return new yr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ed{}function dE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pE(t.key,yr.none()):new Ul(t.key,t.data,yr.none());{const n=t.data,r=An.empty();let i=new xt(yt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Io(t.key,r,new xn(i.toArray()),yr.none())}}function Z4(t,e,n){t instanceof Ul?function(i,o,s){const l=i.value.clone(),c=S0(i.fieldTransforms,o,s.transformResults);l.setAll(c),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Io?function(i,o,s){if(!Sc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=S0(i.fieldTransforms,o,s.transformResults),c=o.data;c.setAll(hE(i)),c.setAll(l),o.convertToFoundDocument(s.version,c).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function $a(t,e,n,r){return t instanceof Ul?function(o,s,l,c){if(!Sc(o.precondition,s))return l;const h=o.value.clone(),v=k0(o.fieldTransforms,c,s);return h.setAll(v),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Io?function(o,s,l,c){if(!Sc(o.precondition,s))return l;const h=k0(o.fieldTransforms,c,s),v=s.data;return v.setAll(hE(o)),v.setAll(h),s.convertToFoundDocument(s.version,v).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(o,s,l){return Sc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,n)}function eO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=lE(r.transform,i||null);o!=null&&(n===null&&(n=An.empty()),n.set(r.field,o))}return n||null}function b0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Cs(r,i,(o,s)=>X4(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ul extends ed{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Io extends ed{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function hE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function S0(t,e,n){const r=new Map;ct(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);r.set(o.field,Y4(s,l,n[i]))}return r}function k0(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,Q4(o,s,e))}return r}class pE extends ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tO extends ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Z4(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$a(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$a(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=oE();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=n.has(i.key)?null:l;const c=dE(s,l);c!==null&&r.set(i.key,c),s.isValidDocument()||s.convertToNoDocument(Le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Rt())}isEqual(e){return this.batchId===e.batchId&&Cs(this.mutations,e.mutations,(n,r)=>b0(n,r))&&Cs(this.baseMutations,e.baseMutations,(n,r)=>b0(n,r))}}class mg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ct(e.mutations.length===r.length);let i=function(){return H4}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new mg(e,n,r,i)}}/**
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
 */class rO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var We,pe;function iO(t){switch(t){default:return de();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function oO(t){if(t===void 0)return vo("GRPC error has no .code"),H.UNKNOWN;switch(t){case We.OK:return H.OK;case We.CANCELLED:return H.CANCELLED;case We.UNKNOWN:return H.UNKNOWN;case We.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case We.INTERNAL:return H.INTERNAL;case We.UNAVAILABLE:return H.UNAVAILABLE;case We.UNAUTHENTICATED:return H.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case We.NOT_FOUND:return H.NOT_FOUND;case We.ALREADY_EXISTS:return H.ALREADY_EXISTS;case We.PERMISSION_DENIED:return H.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case We.ABORTED:return H.ABORTED;case We.OUT_OF_RANGE:return H.OUT_OF_RANGE;case We.UNIMPLEMENTED:return H.UNIMPLEMENTED;case We.DATA_LOSS:return H.DATA_LOSS;default:return de()}}(pe=We||(We={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new L2([4294967295,4294967295],0);class sO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Op(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aO(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lO(t,e){return Op(t,e.toTimestamp())}function vs(t){return ct(!!t),Le.fromTimestamp(function(n){const r=yo(n);return new ut(r.seconds,r.nanos)}(t))}function mE(t,e){return Np(t,e).canonicalString()}function Np(t,e){const n=function(i){return new qe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function uO(t){const e=qe.fromString(t);return ct(vO(e)),e}function Dp(t,e){return mE(t.databaseId,e.path)}function cO(t){const e=uO(t);return e.length===4?qe.emptyPath():dO(e)}function fO(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dO(t){return ct(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function C0(t,e,n){return{name:Dp(t,e),fields:n.value.mapValue.fields}}function hO(t,e){let n;if(e instanceof Ul)n={update:C0(t,e.key,e.value)};else if(e instanceof pE)n={delete:Dp(t,e.key)};else if(e instanceof Io)n={update:C0(t,e.key,e.data),updateMask:gO(e.fieldMask)};else{if(!(e instanceof tO))return de();n={verify:Dp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const l=s.transform;if(l instanceof yf)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _l)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof El)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wf)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:lO(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:de()}(t,e.precondition)),n}function pO(t,e){return t&&t.length>0?(ct(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?vs(i.updateTime):vs(o);return s.isEqual(Le.min())&&(s=vs(o)),new J4(s,i.transformResults||[])}(n,e))):[]}function mO(t){let e=cO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ct(r===1);const v=n.from[0];v.allDescendants?i=v.collectionId:e=e.child(v.collectionId)}let o=[];n.where&&(o=function(y){const E=gE(y);return E instanceof Ii&&X2(E)?E.getFilters():[E]}(n.where));let s=[];n.orderBy&&(s=function(y){return y.map(E=>function(O){return new gf(Ho(O.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(E))}(n.orderBy));let l=null;n.limit&&(l=function(y){let E;return E=typeof y=="object"?y.value:y,ug(E)?null:E}(n.limit));let c=null;n.startAt&&(c=function(y){const E=!!y.before,R=y.values||[];return new mf(R,E)}(n.startAt));let h=null;return n.endAt&&(h=function(y){const E=!y.before,R=y.values||[];return new mf(R,E)}(n.endAt)),V4(e,i,s,o,l,"F",c,h)}function gE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ho(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ho(n.unaryFilter.field);return at.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ho(n.unaryFilter.field);return at.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ho(n.unaryFilter.field);return at.create(s,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return at.create(Ho(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ii.create(n.compositeFilter.filters.map(r=>gE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function Ho(t){return yt.fromServerFormat(t.fieldPath)}function gO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vO(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class yO{constructor(e){this.ct=e}}function wO(t){const e=mO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xp(e,e.limit,"L"):e}/**
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
 */class _O{constructor(){this._n=new EO}addToCollectionParentIndex(e,n){return this._n.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Ei.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class EO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new xt(qe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new xt(qe.comparator)).toArray()}}/**
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
 */class xs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new xs(0)}static Ln(){return new xs(-1)}}/**
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
 */class IO{constructor(){this.changes=new js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Cn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class TO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class bO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&$a(r.mutation,i,xn.empty(),ut.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Rt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Rt()){const i=Ji();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=nc();return o.forEach((l,c)=>{s=s.insert(l,c.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Ji();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Rt()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{n.set(s,l)})})}computeViews(e,n,r,i){let o=vf();const s=za(),l=function(){return za()}();return n.forEach((c,h)=>{const v=r.get(h.key);i.has(h.key)&&(v===void 0||v.mutation instanceof Io)?o=o.insert(h.key,h):v!==void 0?(s.set(h.key,v.mutation.getFieldMask()),$a(v.mutation,h,v.mutation.getFieldMask(),ut.now())):s.set(h.key,xn.empty())}),this.recalculateAndSaveOverlays(e,o).next(c=>(c.forEach((h,v)=>s.set(h,v)),n.forEach((h,v)=>{var y;return l.set(h,new TO(v,(y=s.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=za();let i=new Gt((s,l)=>s-l),o=Rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const l of s)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let v=r.get(c)||xn.empty();v=l.applyToLocalView(h,v),r.set(c,v);const y=(i.get(l.batchId)||Rt()).add(c);i=i.insert(l.batchId,y)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,v=c.value,y=oE();v.forEach(E=>{if(!o.has(E)){const R=dE(n.get(E),r.get(E));R!==null&&y.set(E,R),o=o.add(E)}}),s.push(this.documentOverlayCache.saveOverlays(e,h,y))}return z.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return le.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):U4(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):z.resolve(Ji());let l=-1,c=o;return s.next(h=>z.forEach(h,(v,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(v)?z.resolve():this.remoteDocumentCache.getEntry(e,v).next(E=>{c=c.insert(v,E)}))).next(()=>this.populateOverlays(e,h,o)).next(()=>this.computeViews(e,c,h,Rt())).next(v=>({batchId:l,changes:iE(v)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let i=nc();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=nc();return this.indexManager.getCollectionParents(e,o).next(l=>z.forEach(l,c=>{const h=function(y,E){return new Jf(E,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,c.child(o));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(v=>{v.forEach((y,E)=>{s=s.insert(y,E)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((c,h)=>{const v=h.getKey();s.get(v)===null&&(s=s.insert(v,Cn.newInvalidDocument(v)))});let l=nc();return s.forEach((c,h)=>{const v=o.get(c);v!==void 0&&$a(v.mutation,h,xn.empty(),ut.now()),pg(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class SO{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return z.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vs(i.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:wO(i.bundledQuery),readTime:vs(i.readTime)}}(n)),z.resolve()}}/**
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
 */class kO{constructor(){this.overlays=new Gt(le.comparator),this.hr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ji();return z.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const i=Ji(),o=n.length+1,s=new le(n.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===o&&c.largestBatchId>r&&i.set(c.getKey(),c)}return z.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Gt((h,v)=>h-v);const s=this.overlays.getIterator();for(;s.hasNext();){const h=s.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let v=o.get(h.largestBatchId);v===null&&(v=Ji(),o=o.insert(h.largestBatchId,v)),v.set(h.getKey(),h)}}const l=Ji(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,v)=>l.set(h,v)),!(l.size()>=i)););return z.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new rO(n,r));let o=this.hr.get(n);o===void 0&&(o=Rt(),this.hr.set(n,o)),this.hr.set(n,o.add(r.key))}}/**
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
 */class gg{constructor(){this.Pr=new xt(ot.Ir),this.Tr=new xt(ot.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ot(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new le(new qe([])),r=new ot(n,e),i=new ot(n,e+1),o=[];return this.Tr.forEachInRange([r,i],s=>{this.Ar(s),o.push(s.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new le(new qe([])),r=new ot(n,e),i=new ot(n,e+1);let o=Rt();return this.Tr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new ot(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return le.comparator(e.key,n.key)||be(e.pr,n.pr)}static Er(e,n){return be(e.pr,n.pr)||le.comparator(e.key,n.key)}}/**
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
 */class CO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new xt(ot.Ir)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new nO(o,n,r,i);this.mutationQueue.push(s);for(const l of i)this.wr=this.wr.add(new ot(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return z.resolve(s)}lookupMutationBatch(e,n){return z.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),o=i<0?0:i;return z.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),i=new ot(n,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],s=>{const l=this.Sr(s.pr);o.push(l)}),z.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new xt(be);return n.forEach(i=>{const o=new ot(i,0),s=new ot(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,s],l=>{r=r.add(l.pr)})}),z.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;le.isDocumentKey(o)||(o=o.child(""));const s=new ot(new le(o),0);let l=new xt(be);return this.wr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.pr)),!0)},s),z.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ct(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return z.forEach(n.mutations,i=>{const o=new ot(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ot(n,0),i=this.wr.firstAfterOrEqual(r);return z.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class AO{constructor(e){this.vr=e,this.docs=function(){return new Gt(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():Cn.newInvalidDocument(n))}getEntries(e,n){let r=vf();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Cn.newInvalidDocument(i))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=vf();const s=n.path,l=new le(s.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:v}}=c.getNext();if(!s.isPrefixOf(h.path))break;h.path.length>s.length+1||y4(v4(v),r)<=0||(i.has(v.key)||pg(n,v))&&(o=o.insert(v.key,v.mutableCopy()))}return z.resolve(o)}getAllFromCollectionGroup(e,n,r,i){de()}Fr(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new PO(this)}getSize(e){return z.resolve(this.size)}}class PO extends IO{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class RO{constructor(e){this.persistence=e,this.Mr=new js(n=>dg(n),hg),this.lastRemoteSnapshotVersion=Le.min(),this.highestTargetId=0,this.Or=0,this.Nr=new gg,this.targetCount=0,this.Lr=xs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),z.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new xs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.qn(n),z.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Mr.forEach((s,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),z.waitFor(o).next(()=>i)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),z.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Nr.containsKey(n))}}/**
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
 */class xO{constructor(e,n){this.Br={},this.overlays={},this.kr=new W2(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new RO(this),this.indexManager=new _O,this.remoteDocumentCache=function(i){return new AO(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new yO(n),this.$r=new SO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new CO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const i=new OO(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,n){return z.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class OO extends _4{constructor(e){super(),this.currentSequenceNumber=e}}class vg{constructor(e){this.persistence=e,this.zr=new gg,this.jr=null}static Hr(e){return new vg(e)}get Jr(){if(this.jr)return this.jr;throw de()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),z.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Jr,r=>{const i=le.fromPath(r);return this.Yr(e,i).next(o=>{o||n.removeEntry(i,Le.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return z.or([()=>z.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class yg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Rt(),i=Rt();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new yg(e,n.fromCache,r,i)}}/**
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
 */class NO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class DO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return kS()?8:E4(Et())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.ji(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Hi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new NO;return this.Ji(e,n,s).next(l=>{if(o.result=l,this.Ui)return this.Yi(e,n,s,l.size)})}).next(()=>o.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(va()<=fe.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ya(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),z.resolve()):(va()<=fe.DEBUG&&te("QueryEngine","Query:",ya(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(va()<=fe.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ya(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ro(n))):z.resolve())}ji(e,n){if(I0(n))return z.resolve(null);let r=ro(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xp(n,null,"F"),r=ro(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=Rt(...o);return this.zi.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Zi(n,l);return this.Xi(n,h,s,c.readTime)?this.ji(e,xp(n,null,"F")):this.es(e,h,n,c)}))})))}Hi(e,n,r,i){return I0(n)||i.isEqual(Le.min())?z.resolve(null):this.zi.getDocuments(e,r).next(o=>{const s=this.Zi(n,o);return this.Xi(n,s,r,i)?z.resolve(null):(va()<=fe.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ya(n)),this.es(e,s,n,g4(i,-1)).next(l=>l))})}Zi(e,n){let r=new xt(B4(e));return n.forEach((i,o)=>{pg(e,o)&&(r=r.add(o))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,n,r){return va()<=fe.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ya(n)),this.zi.getDocumentsMatchingQuery(e,n,Ei.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class LO{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Gt(be),this.rs=new js(o=>dg(o),hg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bO(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function MO(t,e,n,r){return new LO(t,e,n,r)}async function vE(t,e){const n=xe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],l=[];let c=Rt();for(const h of i){s.push(h.batchId);for(const v of h.mutations)c=c.add(v.key)}for(const h of o){l.push(h.batchId);for(const v of h.mutations)c=c.add(v.key)}return n.localDocuments.getDocuments(r,c).next(h=>({us:h,removedBatchIds:s,addedBatchIds:l}))})})}function VO(t,e){const n=xe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,v){const y=h.batch,E=y.keys();let R=z.resolve();return E.forEach(O=>{R=R.next(()=>v.getEntry(c,O)).next(L=>{const M=h.docVersions.get(O);ct(M!==null),L.version.compareTo(M)<0&&(y.applyToRemoteDocument(L,h),L.isValidDocument()&&(L.setReadTime(h.commitVersion),v.addEntry(L)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(c,y))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Rt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function FO(t){const e=xe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function UO(t,e){const n=xe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class A0{constructor(){this.activeTargetIds=G4()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jO{constructor(){this.no=new A0,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new A0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class BO{io(e){}shutdown(){}}/**
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
 */class P0{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rc=null;function ah(){return rc===null?rc=function(){return 268435456+Math.round(2147483648*Math.random())}():rc++,"0x"+rc.toString(16)}/**
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
 */const zO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class $O{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Ct="WebChannelConnection";class HO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(n,r,i,o,s){const l=ah(),c=this.vo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,o,s),this.Mo(n,c,h,i).then(v=>(te("RestConnection",`Received RPC '${n}' ${l}: `,v),v),v=>{throw ff("RestConnection",`RPC '${n}' ${l} failed with error: `,v,"url: ",c,"request:",i),v})}xo(n,r,i,o,s,l){return this.Co(n,r,i,o,s)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Us}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}vo(n,r){const i=zO[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const o=ah();return new Promise((s,l)=>{const c=new M2;c.setWithCredentials(!0),c.listenOnce(F2.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Tc.NO_ERROR:const v=c.getResponseJson();te(Ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(v)),s(v);break;case Tc.TIMEOUT:te(Ct,`RPC '${e}' ${o} timed out`),l(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case Tc.HTTP_ERROR:const y=c.getStatus();if(te(Ct,`RPC '${e}' ${o} failed with status:`,y,"response text:",c.getResponseText()),y>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const R=E==null?void 0:E.error;if(R&&R.status&&R.message){const O=function(M){const k=M.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(k)>=0?k:H.UNKNOWN}(R.status);l(new ie(O,R.message))}else l(new ie(H.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ie(H.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{te(Ct,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);te(Ct,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",h,r,15)})}Oo(e,n,r){const i=ah(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=B2(),l=j2(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new V2({})),this.Fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const v=o.join("");te(Ct,`Creating RPC '${e}' stream ${i}: ${v}`,c);const y=s.createWebChannel(v,c);let E=!1,R=!1;const O=new $O({lo:M=>{R?te(Ct,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(E||(te(Ct,`Opening RPC '${e}' stream ${i} transport.`),y.open(),E=!0),te(Ct,`RPC '${e}' stream ${i} sending:`,M),y.send(M))},ho:()=>y.close()}),L=(M,k,I)=>{M.listen(k,P=>{try{I(P)}catch(U){setTimeout(()=>{throw U},0)}})};return L(y,Ca.EventType.OPEN,()=>{R||(te(Ct,`RPC '${e}' stream ${i} transport opened.`),O.mo())}),L(y,Ca.EventType.CLOSE,()=>{R||(R=!0,te(Ct,`RPC '${e}' stream ${i} transport closed`),O.po())}),L(y,Ca.EventType.ERROR,M=>{R||(R=!0,ff(Ct,`RPC '${e}' stream ${i} transport errored:`,M),O.po(new ie(H.UNAVAILABLE,"The operation could not be completed")))}),L(y,Ca.EventType.MESSAGE,M=>{var k;if(!R){const I=M.data[0];ct(!!I);const P=I,U=P.error||((k=P[0])===null||k===void 0?void 0:k.error);if(U){te(Ct,`RPC '${e}' stream ${i} received error:`,U);const B=U.status;let W=function(T){const C=We[T];if(C!==void 0)return oO(C)}(B),S=U.message;W===void 0&&(W=H.INTERNAL,S="Unknown error status: "+B+" with message "+U.message),R=!0,O.po(new ie(W,S)),y.close()}else te(Ct,`RPC '${e}' stream ${i} received:`,I),O.yo(I)}}),L(l,U2.STAT_EVENT,M=>{M.stat===Cp.PROXY?te(Ct,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===Cp.NOPROXY&&te(Ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{O.fo()},0),O}}function lh(){return typeof document<"u"?document:null}/**
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
 */function td(t){return new sO(t,!0)}/**
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
 */class yE{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&te("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class WO{constructor(e,n,r,i,o,s,l,c){this.oi=e,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new yE(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(vo(n.toString()),vo("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new ie(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qO extends WO{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(ct(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=pO(e.writeResults,e.commitTime),r=vs(e.commitTime);return this.listener.A_(r,n)}return ct(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=fO(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hO(this.serializer,r))};this.i_(n)}}/**
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
 */class GO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Co(e,Np(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(H.UNKNOWN,o.toString())})}xo(e,n,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.xo(e,Np(n,r),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie(H.UNKNOWN,s.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class KO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(vo(n),this.y_=!1):te("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class QO{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(s=>{r.enqueueAndForget(async()=>{Bl(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=xe(c);h.M_.add(4),await jl(h),h.N_.set("Unknown"),h.M_.delete(4),await nd(h)}(this))})}),this.N_=new KO(r,i)}}async function nd(t){if(Bl(t))for(const e of t.x_)await e(!0)}async function jl(t){for(const e of t.x_)await e(!1)}function Bl(t){return xe(t).M_.size===0}async function wE(t,e,n){if(!Xf(e))throw e;t.M_.add(1),await jl(t),t.N_.set("Offline"),n||(n=()=>FO(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await nd(t)})}function _E(t,e){return e().catch(n=>wE(t,n,e))}async function rd(t){const e=xe(t),n=Ti(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;YO(e);)try{const i=await UO(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,XO(e,i)}catch(i){await wE(e,i)}EE(e)&&IE(e)}function YO(t){return Bl(t)&&t.v_.length<10}function XO(t,e){t.v_.push(e);const n=Ti(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function EE(t){return Bl(t)&&!Ti(t).Zo()&&t.v_.length>0}function IE(t){Ti(t).start()}async function JO(t){Ti(t).V_()}async function ZO(t){const e=Ti(t);for(const n of t.v_)e.d_(n.mutations)}async function eN(t,e,n){const r=t.v_.shift(),i=mg.from(r,e,n);await _E(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await rd(t)}async function tN(t,e){e&&Ti(t).E_&&await async function(r,i){if(function(s){return iO(s)&&s!==H.ABORTED}(i.code)){const o=r.v_.shift();Ti(r).t_(),await _E(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await rd(r)}}(t,e),EE(t)&&IE(t)}async function R0(t,e){const n=xe(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Bl(n);n.M_.add(3),await jl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await nd(n)}async function nN(t,e){const n=xe(t);e?(n.M_.delete(2),await nd(n)):e||(n.M_.add(2),await jl(n),n.N_.set("Unknown"))}function Ti(t){return t.k_||(t.k_=function(n,r,i){const o=xe(n);return o.f_(),new qO(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:JO.bind(null,t),Ao:tN.bind(null,t),R_:ZO.bind(null,t),A_:eN.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await rd(t)):(await t.k_.stop(),t.v_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class wg{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new no,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,l=new wg(e,n,s,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function TE(t,e){if(vo("AsyncQueue",`${e}: ${t}`),Xf(t))return new ie(H.UNAVAILABLE,`${e}: ${t}`);throw t}class rN{constructor(){this.queries=new js(e=>nE(e),tE),this.onlineState="Unknown",this.z_=new Set}}function iN(t){t.z_.forEach(e=>{e.next()})}var x0,O0;(O0=x0||(x0={})).J_="default",O0.Cache="cache";class oN{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new js(l=>nE(l),tE),this.Da=new Map,this.Ca=new Set,this.va=new Gt(le.comparator),this.Fa=new Map,this.Ma=new gg,this.xa={},this.Oa=new Map,this.Na=xs.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function sN(t,e,n){const r=cN(t);try{const i=await function(s,l){const c=xe(s),h=ut.now(),v=l.reduce((R,O)=>R.add(O.key),Rt());let y,E;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let O=vf(),L=Rt();return c.os.getEntries(R,v).next(M=>{O=M,O.forEach((k,I)=>{I.isValidDocument()||(L=L.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,O)).next(M=>{y=M;const k=[];for(const I of l){const P=eO(I,y.get(I.key).overlayedDocument);P!=null&&k.push(new Io(I.key,P,K2(P.value.mapValue),yr.exists(!0)))}return c.mutationQueue.addMutationBatch(R,h,k,l)}).next(M=>{E=M;const k=M.applyToLocalDocumentSet(y,L);return c.documentOverlayCache.saveOverlays(R,M.batchId,k)})}).then(()=>({batchId:E.batchId,changes:iE(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,l,c){let h=s.xa[s.currentUser.toKey()];h||(h=new Gt(be)),h=h.insert(l,c),s.xa[s.currentUser.toKey()]=h}(r,i.batchId,n),await id(r,i.changes),await rd(r.remoteStore)}catch(i){const o=TE(i,"Failed to persist write");n.reject(o)}}function N0(t,e,n){const r=xe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((o,s)=>{const l=s.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const c=xe(s);c.onlineState=l;let h=!1;c.queries.forEach((v,y)=>{for(const E of y.U_)E.j_(l)&&(h=!0)}),h&&iN(c)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function aN(t,e){const n=xe(t),r=e.batch.batchId;try{const i=await VO(n.localStore,e);SE(n,r,null),bE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await id(n,i)}catch(i){await H2(i)}}async function lN(t,e,n){const r=xe(t);try{const i=await function(s,l){const c=xe(s);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let v;return c.mutationQueue.lookupMutationBatch(h,l).next(y=>(ct(y!==null),v=y.keys(),c.mutationQueue.removeMutationBatch(h,y))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,v,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,v)).next(()=>c.localDocuments.getDocuments(h,v))})}(r.localStore,e);SE(r,e,n),bE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await id(r,i)}catch(i){await H2(i)}}function bE(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function SE(t,e,n){const r=xe(t);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}async function id(t,e,n){const r=xe(t),i=[],o=[],s=[];r.ba.isEmpty()||(r.ba.forEach((l,c)=>{s.push(r.Ba(c,e,n).then(h=>{if((h||n)&&r.isPrimaryClient){const v=h&&!h.fromCache;r.sharedClientState.updateQueryState(c.targetId,v?"current":"not-current")}if(h){i.push(h);const v=yg.Ki(c.targetId,h);o.push(v)}}))}),await Promise.all(s),r.Sa.h_(i),await async function(c,h){const v=xe(c);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>z.forEach(h,E=>z.forEach(E.qi,R=>v.persistence.referenceDelegate.addReference(y,E.targetId,R)).next(()=>z.forEach(E.Qi,R=>v.persistence.referenceDelegate.removeReference(y,E.targetId,R)))))}catch(y){if(!Xf(y))throw y;te("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const E=y.targetId;if(!y.fromCache){const R=v.ns.get(E),O=R.snapshotVersion,L=R.withLastLimboFreeSnapshotVersion(O);v.ns=v.ns.insert(E,L)}}}(r.localStore,o))}async function uN(t,e){const n=xe(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await vE(n.localStore,e);n.currentUser=e,function(o,s){o.Oa.forEach(l=>{l.forEach(c=>{c.reject(new ie(H.CANCELLED,s))})}),o.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await id(n,r.us)}}function cN(t){const e=xe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lN.bind(null,e),e}class D0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=td(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return MO(this.persistence,new DO,e.initialUser,this.serializer)}createPersistence(e){return new xO(vg.Hr,this.serializer)}createSharedClientState(e){return new jO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>N0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uN.bind(null,this.syncEngine),await nN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rN}()}createDatastore(e){const n=td(e.databaseInfo.databaseId),r=function(o){return new HO(o)}(e.databaseInfo);return function(o,s,l,c){return new GO(o,s,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,l){return new QO(r,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,n=>N0(this.syncEngine,n,0),function(){return P0.D()?new P0:new BO}())}createSyncEngine(e,n){return function(i,o,s,l,c,h,v){const y=new oN(i,o,s,l,c,h);return v&&(y.La=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=xe(r);te("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await jl(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class dN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=At.UNAUTHENTICATED,this.clientId=$2.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new no;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=TE(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uh(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function L0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pN(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>R0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>R0(e.remoteStore,i)),t._onlineComponents=e}function hN(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function pN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await uh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hN(n))throw n;ff("Error using user provided cache. Falling back to memory cache: "+n),await uh(t,new D0)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await uh(t,new D0);return t._offlineComponents}async function mN(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await L0(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await L0(t,new fN))),t._onlineComponents}function gN(t){return mN(t).then(e=>e.syncEngine)}/**
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
 */function kE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const M0=new Map;/**
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
 */function vN(t,e,n){if(!n)throw new ie(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yN(t,e,n,r){if(e===!0&&r===!0)throw new ie(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function V0(t){if(!le.isDocumentKey(t))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _g(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Lp(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_g(t);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class F0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Eg{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new F0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new F0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new a4;switch(r.type){case"firstParty":return new f4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=M0.get(n);r&&(te("ComponentProvider","Removing Datastore"),M0.delete(n),r.terminate())}(this),Promise.resolve()}}function wN(t,e,n,r={}){var i;const o=(t=Lp(t,Eg))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&ff("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=At.MOCK_USER;else{l=_S(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ie(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new At(h)}t._authCredentials=new l4(new z2(l,c))}}/**
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
 */class Ig{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ig(this.firestore,e,this._query)}}class wr{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Il(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wr(this.firestore,e,this._key)}}class Il extends Ig{constructor(e,n,r){super(e,n,F4(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wr(this.firestore,null,new le(e))}withConverter(e){return new Il(this.firestore,e,this._path)}}function U0(t,e,...n){if(t=nn(t),arguments.length===1&&(e=$2.newId()),vN("doc","path",e),t instanceof Eg){const r=qe.fromString(e,...n);return V0(r),new wr(t,null,new le(r))}{if(!(t instanceof wr||t instanceof Il))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return V0(r),new wr(t.firestore,t instanceof Il?t.converter:null,new le(r))}}/**
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
 */class _N{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new yE(this,"async_queue_retry"),this.hu=()=>{const n=lh();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=lh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=lh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new no;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Xf(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(r);throw vo("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=wg.createAndSchedule(this,e,n,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&de()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class CE extends Eg{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new _N}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||AE(this),this._firestoreClient.terminate()}}function EN(t,e){const n=typeof t=="object"?t:u_(),r=typeof t=="string"?t:"(default)",i=Nm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=yS("firestore");o&&wN(i,...o)}return i}function IN(t){return t._firestoreClient||AE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function AE(t){var e,n,r;const i=t._freezeSettings(),o=function(l,c,h,v){return new S4(l,c,h,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,kE(v.experimentalLongPollingOptions),v.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new dN(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Tl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tl(Ar.fromBase64String(e))}catch(n){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Tl(Ar.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class PE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class RE{constructor(e){this._methodName=e}}/**
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
 */class xE{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */const TN=/^__.*__$/;class bN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Io(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ul(e,this.data,n,this.fieldTransforms)}}function OE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Tg{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Tg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return _f(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(OE(this.fu)&&TN.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class SN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||td(e)}Fu(e,n,r,i=!1){return new Tg({fu:e,methodName:n,vu:r,path:yt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kN(t){const e=t._freezeSettings(),n=td(t._databaseId);return new SN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CN(t,e,n,r,i,o={}){const s=t.Fu(o.merge||o.mergeFields?2:0,e,n,i);ME("Data must be an object, but it was:",s,r);const l=DE(r,s);let c,h;if(o.merge)c=new xn(s.fieldMask),h=s.fieldTransforms;else if(o.mergeFields){const v=[];for(const y of o.mergeFields){const E=AN(e,y,n);if(!s.contains(E))throw new ie(H.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);xN(v,E)||v.push(E)}c=new xn(v),h=s.fieldTransforms.filter(y=>c.covers(y.field))}else c=null,h=s.fieldTransforms;return new bN(new An(l),c,h)}function NE(t,e){if(LE(t=nn(t)))return ME("Unsupported field value:",e,t),DE(t,e);if(t instanceof RE)return function(r,i){if(!OE(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const l of r){let c=NE(l,i.bu(s));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=nn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return K4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ut.fromDate(r);return{timestampValue:Op(i.serializer,o)}}if(r instanceof ut){const o=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Op(i.serializer,o)}}if(r instanceof xE)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Tl)return{bytesValue:aO(i.serializer,r._byteString)};if(r instanceof wr){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Du(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:mE(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${_g(r)}`)}(t,e)}function DE(t,e){const n={};return q2(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fl(t,(r,i)=>{const o=NE(i,e.pu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function LE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof xE||t instanceof Tl||t instanceof wr||t instanceof RE)}function ME(t,e,n){if(!LE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=_g(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function AN(t,e,n){if((e=nn(e))instanceof PE)return e._internalPath;if(typeof e=="string")return RN(t,e);throw _f("Field path arguments must be of type string or ",t,!1,void 0,n)}const PN=new RegExp("[~\\*/\\[\\]]");function RN(t,e,n){if(e.search(PN)>=0)throw _f(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new PE(...e.split("."))._internalPath}catch{throw _f(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _f(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new ie(H.INVALID_ARGUMENT,l+t+c)}function xN(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function ON(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function j0(t,e,n){t=Lp(t,wr);const r=Lp(t.firestore,CE),i=ON(t.converter,e);return NN(r,[CN(kN(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,yr.none())])}function NN(t,e){return function(r,i){const o=new no;return r.asyncQueue.enqueueAndForget(async()=>sN(await gN(r),i,o)),o.promise}(IN(t),e)}(function(e,n=!0){(function(i){Us=i})(Ls),Ss(new uo("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),l=new CE(new u4(r.getProvider("auth-internal")),new h4(r.getProvider("app-check-internal")),function(h,v){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pf(h.options.projectId,v)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),mi(m0,"4.6.3",e),mi(m0,"4.6.3","esm2017")})();const DN="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2048%2048'%3e%3cpath%20fill='%23FFC107'%20d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'%3e%3c/path%3e%3cpath%20fill='%23FF3D00'%20d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'%3e%3c/path%3e%3cpath%20fill='%234CAF50'%20d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'%3e%3c/path%3e%3cpath%20fill='%231976D2'%20d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'%3e%3c/path%3e%3c/svg%3e",LN="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024.00%2024.00'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='%23000000'%20stroke='%23000000'%20stroke-width='0.00024000000000000003'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.672'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cdefs%3e%3cpath%20id='download-a'%20d='M4.29289322,1.70710678%20C3.90236893,1.31658249%203.90236893,0.683417511%204.29289322,0.292893219%20C4.68341751,-0.0976310729%205.31658249,-0.0976310729%205.70710678,0.292893219%20L7.70710678,2.29289322%20C8.09763107,2.68341751%208.09763107,3.31658249%207.70710678,3.70710678%20C7.31658249,4.09763107%206.68341751,4.09763107%206.29289322,3.70710678%20L4.29289322,1.70710678%20Z%20M0,8%20L16,8%20L16,10%20L0,10%20L0,8%20Z'/%3e%3cpath%20id='download-c'%20d='M11,9.58578644%20L13.2928932,7.29289322%20C13.6834175,6.90236893%2014.3165825,6.90236893%2014.7071068,7.29289322%20C15.0976311,7.68341751%2015.0976311,8.31658249%2014.7071068,8.70710678%20L10.7071068,12.7071068%20C10.3165825,13.0976311%209.68341751,13.0976311%209.29289322,12.7071068%20L5.29289322,8.70710678%20C4.90236893,8.31658249%204.90236893,7.68341751%205.29289322,7.29289322%20C5.68341751,6.90236893%206.31658249,6.90236893%206.70710678,7.29289322%20L9,9.58578644%20L9,0.998529185%20C9,0.447056744%209.44771525,-7.95978809e-15%2010,-7.99360578e-15%20C10.5522847,-8.02742346e-15%2011,0.447056744%2011,0.998529185%20L11,9.58578644%20Z%20M18,16%20L18,10%20C18,9.44771525%2018.4477153,9%2019,9%20C19.5522847,9%2020,9.44771525%2020,10%20L20,17%20C20,17.5522847%2019.5522847,18%2019,18%20L1,18%20C0.44771525,18%200,17.5522847%200,17%20L0,10%20C0,9.44771525%200.44771525,9%201,9%20C1.55228475,9%202,9.44771525%202,10%20L2,16%20L18,16%20Z'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%20transform='translate(2%203)'%3e%3cg%20transform='translate(2%206)'%3e%3cmask%20id='download-b'%20fill='%23007bff'%3e%3cuse%20xlink:href='%23download-a'/%3e%3c/mask%3e%3cuse%20fill='%23ffffff'%20fill-rule='nonzero'%20xlink:href='%23download-a'/%3e%3cg%20fill='%23007bff'%20mask='url(%23download-b)'%3e%3crect%20width='24'%20height='24'%20transform='translate(-4%20-9)'/%3e%3c/g%3e%3c/g%3e%3cmask%20id='download-d'%20fill='%23007bff'%3e%3cuse%20xlink:href='%23download-c'/%3e%3c/mask%3e%3cuse%20fill='%23007bff'%20fill-rule='nonzero'%20xlink:href='%23download-c'/%3e%3cg%20fill='%23007bff'%20mask='url(%23download-d)'%3e%3crect%20width='24'%20height='24'%20transform='translate(-2%20-3)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",wa=qm(Uf),B0=EN(Uf),MN=()=>{const[t,e]=Z.useState(!1),[n,r]=Z.useState(!1),[i,o]=Z.useState(!1),s=J_();Z.useEffect(()=>{const v=$m(wa,y=>{y&&s("/")});return()=>v()},[s]);const l=async v=>{v.preventDefault();const y=v.target.email.value,E=v.target.password.value,R=t?v.target.name.value:null;try{if(t){const L=(await WC(wa,y,E)).user;await j0(U0(B0,"users",L.uid),{name:R,email:y}),zi.fire({icon:"success",title:"Registro exitoso",showConfirmButton:!1,timer:1500})}else await qC(wa,y,E),zi.fire("Inicio de sesión exitoso");s("/")}catch(O){console.error("Error en la autenticación",O),zi.fire(`Error en la autenticación: ${O.message}`)}},c=async v=>{v.preventDefault();const y=v.target.email.value;try{await HC(wa,y),zi.fire("Se ha enviado un correo para restablecer tu contraseña")}catch(E){console.error("Error al enviar el correo de restablecimiento",E),zi.fire("Error al enviar el correo de restablecimiento")}},h=async()=>{const v=new cr;try{const E=(await gA(wa,v)).user;await j0(U0(B0,"users",E.uid),{name:E.displayName,email:E.email}),zi.fire("Inicio de sesión con Google exitoso"),s("/")}catch(y){console.error("Error en el inicio de sesión con Google:",y),zi.fire(`Error en el inicio de sesión con Google: ${y.message}`)}};return J.jsx(J.Fragment,{children:J.jsxs("div",{className:"login_container",children:[J.jsxs("div",{className:"login_visual",children:[J.jsx("div",{className:"login_assets",children:"Drawy Downloader"}),J.jsx("p",{className:"login_dist",children:"Drawy is an application developed to download YouTube videos totally free. It has a fairly simple and easy-to-use interface."}),J.jsx("img",{src:rR,alt:""})]}),J.jsxs("div",{className:"login_banner",children:[J.jsx("img",{src:LN,alt:"IconDownload",className:"iconName"}),J.jsx("h2",{className:"login_name",children:"Drawy"}),J.jsx("p",{className:"login_title",children:n?"Reset Password":t?"Sign up to enable access to Tracker":"Sign in to access your account"}),J.jsxs("form",{className:"login_form",onSubmit:n?c:l,children:[t&&!n&&J.jsxs("div",{className:"input_field",children:[J.jsx("i",{children:J.jsx(ss,{icon:i4})}),J.jsx("input",{type:"text",placeholder:"Name",className:"input",id:"name",name:"name"})]}),J.jsxs("div",{className:"input_field",children:[J.jsx("i",{children:J.jsx(ss,{icon:s4})}),J.jsx("input",{type:"text",placeholder:"Email",className:"input",id:"email",name:"email"})]}),!n&&J.jsxs("div",{className:"input_field",children:[J.jsx("i",{children:J.jsx(ss,{icon:n4})}),J.jsx("input",{type:i?"text":"password",placeholder:"Password",className:"input",id:"password",name:"password"}),J.jsx("i",{type:"button",className:"password_view",onClick:()=>o(!i),children:J.jsx(ss,{icon:i?r4:o4})})]}),J.jsx("div",{className:"login_reset",children:!n&&J.jsxs(J.Fragment,{children:[J.jsxs("h4",{children:[J.jsx("input",{type:"checkbox"})," Recordarme"]}),J.jsx("a",{href:"#",onClick:v=>{v.preventDefault(),r(!0)},children:"Forgot Password"})]})}),J.jsx("button",{type:"submit",className:"input_submit submitInit",children:n?"Send Reset Email":t?"Sign Up":"Sign In"})]}),!n&&J.jsxs(J.Fragment,{children:[J.jsxs("button",{onClick:h,className:"google",children:[" ",J.jsx("img",{src:DN,className:"iconGoogle",alt:""})," Sign In with Google"]}),J.jsxs("h4",{className:"sign_save",children:[t?"I have an account?  ":"Don't have an account?  ",J.jsx("button",{className:"btn_login",onClick:()=>e(!t),children:t?"Sign In":"Sign Up"})]})]}),n&&J.jsx("button",{onClick:()=>r(!1),className:"button_reset",children:"Back to Login"})]})]})})},VN=()=>J.jsx(ZP,{children:J.jsxs(YP,{children:[J.jsx(_c,{path:"/",element:J.jsx(tR,{})}),J.jsx(_c,{path:"/login",element:J.jsx(MN,{})}),J.jsx(_c,{path:"*",element:J.jsx(nR,{})})]})}),FN=qm(Uf);function UN(){const[t,e]=Z.useState(null);return Z.useEffect(()=>{const n=$m(FN,r=>{e(r||null)});return()=>n()},[]),J.jsx("div",{children:J.jsx(VN,{})})}ch.createRoot(document.getElementById("root")).render(J.jsx(If.StrictMode,{children:J.jsx(UN,{})}));
