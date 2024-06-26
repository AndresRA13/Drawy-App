function JT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z0={exports:{}},If={},ew={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sl=Symbol.for("react.element"),ZT=Symbol.for("react.portal"),eI=Symbol.for("react.fragment"),tI=Symbol.for("react.strict_mode"),nI=Symbol.for("react.profiler"),rI=Symbol.for("react.provider"),iI=Symbol.for("react.context"),oI=Symbol.for("react.forward_ref"),sI=Symbol.for("react.suspense"),aI=Symbol.for("react.memo"),lI=Symbol.for("react.lazy"),iv=Symbol.iterator;function uI(t){return t===null||typeof t!="object"?null:(t=iv&&t[iv]||t["@@iterator"],typeof t=="function"?t:null)}var tw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nw=Object.assign,rw={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=rw,this.updater=n||tw}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iw(){}iw.prototype=Ns.prototype;function $p(t,e,n){this.props=t,this.context=e,this.refs=rw,this.updater=n||tw}var Hp=$p.prototype=new iw;Hp.constructor=$p;nw(Hp,Ns.prototype);Hp.isPureReactComponent=!0;var ov=Array.isArray,ow=Object.prototype.hasOwnProperty,Wp={current:null},sw={key:!0,ref:!0,__self:!0,__source:!0};function aw(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)ow.call(e,r)&&!sw.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),h=0;h<l;h++)c[h]=arguments[h+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Sl,type:t,key:o,ref:s,props:i,_owner:Wp.current}}function cI(t,e){return{$$typeof:Sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sl}function fI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sv=/\/+/g;function Id(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fI(""+t.key):e.toString(36)}function oc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Sl:case ZT:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Id(s,0):r,ov(i)?(n="",t!=null&&(n=t.replace(sv,"$&/")+"/"),oc(i,e,n,"",function(h){return h})):i!=null&&(qp(i)&&(i=cI(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(sv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",ov(t))for(var l=0;l<t.length;l++){o=t[l];var c=r+Id(o,l);s+=oc(o,e,n,c,i)}else if(c=uI(t),typeof c=="function")for(t=c.call(t),l=0;!(o=t.next()).done;)o=o.value,c=r+Id(o,l++),s+=oc(o,e,n,c,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Cu(t,e,n){if(t==null)return t;var r=[],i=0;return oc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function dI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ft={current:null},sc={transition:null},hI={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:sc,ReactCurrentOwner:Wp};function lw(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:Cu,forEach:function(t,e,n){Cu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cu(t,function(){e++}),e},toArray:function(t){return Cu(t,function(e){return e})||[]},only:function(t){if(!qp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};fe.Component=Ns;fe.Fragment=eI;fe.Profiler=nI;fe.PureComponent=$p;fe.StrictMode=tI;fe.Suspense=sI;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hI;fe.act=lw;fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=nw({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Wp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)ow.call(e,c)&&!sw.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var h=0;h<c;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Sl,type:t.type,key:i,ref:o,props:r,_owner:s}};fe.createContext=function(t){return t={$$typeof:iI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rI,_context:t},t.Consumer=t};fe.createElement=aw;fe.createFactory=function(t){var e=aw.bind(null,t);return e.type=t,e};fe.createRef=function(){return{current:null}};fe.forwardRef=function(t){return{$$typeof:oI,render:t}};fe.isValidElement=qp;fe.lazy=function(t){return{$$typeof:lI,_payload:{_status:-1,_result:t},_init:dI}};fe.memo=function(t,e){return{$$typeof:aI,type:t,compare:e===void 0?null:e}};fe.startTransition=function(t){var e=sc.transition;sc.transition={};try{t()}finally{sc.transition=e}};fe.unstable_act=lw;fe.useCallback=function(t,e){return Ft.current.useCallback(t,e)};fe.useContext=function(t){return Ft.current.useContext(t)};fe.useDebugValue=function(){};fe.useDeferredValue=function(t){return Ft.current.useDeferredValue(t)};fe.useEffect=function(t,e){return Ft.current.useEffect(t,e)};fe.useId=function(){return Ft.current.useId()};fe.useImperativeHandle=function(t,e,n){return Ft.current.useImperativeHandle(t,e,n)};fe.useInsertionEffect=function(t,e){return Ft.current.useInsertionEffect(t,e)};fe.useLayoutEffect=function(t,e){return Ft.current.useLayoutEffect(t,e)};fe.useMemo=function(t,e){return Ft.current.useMemo(t,e)};fe.useReducer=function(t,e,n){return Ft.current.useReducer(t,e,n)};fe.useRef=function(t){return Ft.current.useRef(t)};fe.useState=function(t){return Ft.current.useState(t)};fe.useSyncExternalStore=function(t,e,n){return Ft.current.useSyncExternalStore(t,e,n)};fe.useTransition=function(){return Ft.current.useTransition()};fe.version="18.3.1";ew.exports=fe;var X=ew.exports;const bf=zp(X),pI=JT({__proto__:null,default:bf},[X]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mI=X,gI=Symbol.for("react.element"),vI=Symbol.for("react.fragment"),yI=Object.prototype.hasOwnProperty,wI=mI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_I={key:!0,ref:!0,__self:!0,__source:!0};function uw(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)yI.call(e,r)&&!_I.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gI,type:t,key:o,ref:s,props:i,_owner:wI.current}}If.Fragment=vI;If.jsx=uw;If.jsxs=uw;Z0.exports=If;var U=Z0.exports,dh={},cw={exports:{}},on={},fw={exports:{}},dw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(Y,G){var oe=Y.length;Y.push(G);e:for(;0<oe;){var Ce=oe-1>>>1,_e=Y[Ce];if(0<i(_e,G))Y[Ce]=G,Y[oe]=_e,oe=Ce;else break e}}function n(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var G=Y[0],oe=Y.pop();if(oe!==G){Y[0]=oe;e:for(var Ce=0,_e=Y.length,Le=_e>>>1;Ce<Le;){var F=2*(Ce+1)-1,_n=Y[F],Bt=F+1,ln=Y[Bt];if(0>i(_n,oe))Bt<_e&&0>i(ln,_n)?(Y[Ce]=ln,Y[Bt]=oe,Ce=Bt):(Y[Ce]=_n,Y[F]=oe,Ce=F);else if(Bt<_e&&0>i(ln,oe))Y[Ce]=ln,Y[Bt]=oe,Ce=Bt;else break e}}return G}function i(Y,G){var oe=Y.sortIndex-G.sortIndex;return oe!==0?oe:Y.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],h=[],v=1,y=null,_=3,x=!1,O=!1,D=!1,M=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(Y){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=Y)r(h),G.sortIndex=G.expirationTime,e(c,G);else break;G=n(h)}}function V(Y){if(D=!1,C(Y),!O)if(n(c)!==null)O=!0,De(z);else{var G=n(h);G!==null&&Qt(V,G.startTime-Y)}}function z(Y,G){O=!1,D&&(D=!1,k(E),E=-1),x=!0;var oe=_;try{for(C(G),y=n(c);y!==null&&(!(y.expirationTime>G)||Y&&!R());){var Ce=y.callback;if(typeof Ce=="function"){y.callback=null,_=y.priorityLevel;var _e=Ce(y.expirationTime<=G);G=t.unstable_now(),typeof _e=="function"?y.callback=_e:y===n(c)&&r(c),C(G)}else r(c);y=n(c)}if(y!==null)var Le=!0;else{var F=n(h);F!==null&&Qt(V,F.startTime-G),Le=!1}return Le}finally{y=null,_=oe,x=!1}}var q=!1,S=null,E=-1,I=5,A=-1;function R(){return!(t.unstable_now()-A<I)}function L(){if(S!==null){var Y=t.unstable_now();A=Y;var G=!0;try{G=S(!0,Y)}finally{G?P():(q=!1,S=null)}}else q=!1}var P;if(typeof T=="function")P=function(){T(L)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,Jn=Ut.port2;Ut.port1.onmessage=L,P=function(){Jn.postMessage(null)}}else P=function(){M(L,0)};function De(Y){S=Y,q||(q=!0,P())}function Qt(Y,G){E=M(function(){Y(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Y){Y.callback=null},t.unstable_continueExecution=function(){O||x||(O=!0,De(z))},t.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Y?Math.floor(1e3/Y):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(Y){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var oe=_;_=G;try{return Y()}finally{_=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(Y,G){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var oe=_;_=Y;try{return G()}finally{_=oe}},t.unstable_scheduleCallback=function(Y,G,oe){var Ce=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Ce+oe:Ce):oe=Ce,Y){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=oe+_e,Y={id:v++,callback:G,priorityLevel:Y,startTime:oe,expirationTime:_e,sortIndex:-1},oe>Ce?(Y.sortIndex=oe,e(h,Y),n(c)===null&&Y===n(h)&&(D?(k(E),E=-1):D=!0,Qt(V,oe-Ce))):(Y.sortIndex=_e,e(c,Y),O||x||(O=!0,De(z))),Y},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(Y){var G=_;return function(){var oe=_;_=G;try{return Y.apply(this,arguments)}finally{_=oe}}}})(dw);fw.exports=dw;var EI=fw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TI=X,nn=EI;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hw=new Set,Wa={};function _o(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(Wa[t]=e,t=0;t<e.length;t++)hw.add(e[t])}var Er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hh=Object.prototype.hasOwnProperty,II=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,av={},lv={};function bI(t){return hh.call(lv,t)?!0:hh.call(av,t)?!1:II.test(t)?lv[t]=!0:(av[t]=!0,!1)}function SI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kI(t,e,n,r){if(e===null||typeof e>"u"||SI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gp=/[\-:]([a-z])/g;function Kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gp,Kp);Et[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gp,Kp);Et[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gp,Kp);Et[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qp(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kI(e,n,i,r)&&(n=null),r||i===null?bI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xr=TI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Au=Symbol.for("react.element"),qo=Symbol.for("react.portal"),Go=Symbol.for("react.fragment"),Yp=Symbol.for("react.strict_mode"),ph=Symbol.for("react.profiler"),pw=Symbol.for("react.provider"),mw=Symbol.for("react.context"),Xp=Symbol.for("react.forward_ref"),mh=Symbol.for("react.suspense"),gh=Symbol.for("react.suspense_list"),Jp=Symbol.for("react.memo"),Yr=Symbol.for("react.lazy"),gw=Symbol.for("react.offscreen"),uv=Symbol.iterator;function ca(t){return t===null||typeof t!="object"?null:(t=uv&&t[uv]||t["@@iterator"],typeof t=="function"?t:null)}var je=Object.assign,bd;function Ea(t){if(bd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bd=e&&e[1]||""}return`
`+bd+t}var Sd=!1;function kd(t,e){if(!t||Sd)return"";Sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{Sd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ea(t):""}function CI(t){switch(t.tag){case 5:return Ea(t.type);case 16:return Ea("Lazy");case 13:return Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 2:case 15:return t=kd(t.type,!1),t;case 11:return t=kd(t.type.render,!1),t;case 1:return t=kd(t.type,!0),t;default:return""}}function vh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Go:return"Fragment";case qo:return"Portal";case ph:return"Profiler";case Yp:return"StrictMode";case mh:return"Suspense";case gh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mw:return(t.displayName||"Context")+".Consumer";case pw:return(t._context.displayName||"Context")+".Provider";case Xp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jp:return e=t.displayName||null,e!==null?e:vh(t.type)||"Memo";case Yr:e=t._payload,t=t._init;try{return vh(t(e))}catch{}}return null}function AI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vh(e);case 8:return e===Yp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PI(t){var e=vw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pu(t){t._valueTracker||(t._valueTracker=PI(t))}function yw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ac(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yh(t,e){var n=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ww(t,e){e=e.checked,e!=null&&Qp(t,"checked",e,!1)}function wh(t,e){ww(t,e);var n=vi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_h(t,e.type,n):e.hasOwnProperty("defaultValue")&&_h(t,e.type,vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _h(t,e,n){(e!=="number"||Ac(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ta=Array.isArray;function ls(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Eh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Ta(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vi(n)}}function _w(t,e){var n=vi(e.value),r=vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ew(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Th(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ew(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xu,Tw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xu=xu||document.createElement("div"),xu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xI=["Webkit","ms","Moz","O"];Object.keys(Pa).forEach(function(t){xI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pa[e]=Pa[t]})});function Iw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pa.hasOwnProperty(t)&&Pa[t]?(""+e).trim():e+"px"}function bw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Iw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var RI=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ih(t,e){if(e){if(RI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function bh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sh=null;function Zp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kh=null,us=null,cs=null;function pv(t){if(t=Al(t)){if(typeof kh!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Pf(e),kh(t.stateNode,t.type,e))}}function Sw(t){us?cs?cs.push(t):cs=[t]:us=t}function kw(){if(us){var t=us,e=cs;if(cs=us=null,pv(t),e)for(t=0;t<e.length;t++)pv(e[t])}}function Cw(t,e){return t(e)}function Aw(){}var Cd=!1;function Pw(t,e,n){if(Cd)return t(e,n);Cd=!0;try{return Cw(t,e,n)}finally{Cd=!1,(us!==null||cs!==null)&&(Aw(),kw())}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var r=Pf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var Ch=!1;if(Er)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){Ch=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{Ch=!1}function OI(t,e,n,r,i,o,s,l,c){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(v){this.onError(v)}}var xa=!1,Pc=null,xc=!1,Ah=null,NI={onError:function(t){xa=!0,Pc=t}};function DI(t,e,n,r,i,o,s,l,c){xa=!1,Pc=null,OI.apply(NI,arguments)}function LI(t,e,n,r,i,o,s,l,c){if(DI.apply(this,arguments),xa){if(xa){var h=Pc;xa=!1,Pc=null}else throw Error(H(198));xc||(xc=!0,Ah=h)}}function Eo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mv(t){if(Eo(t)!==t)throw Error(H(188))}function MI(t){var e=t.alternate;if(!e){if(e=Eo(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return mv(i),t;if(o===r)return mv(i),e;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function Rw(t){return t=MI(t),t!==null?Ow(t):null}function Ow(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ow(t);if(e!==null)return e;t=t.sibling}return null}var Nw=nn.unstable_scheduleCallback,gv=nn.unstable_cancelCallback,VI=nn.unstable_shouldYield,FI=nn.unstable_requestPaint,He=nn.unstable_now,jI=nn.unstable_getCurrentPriorityLevel,em=nn.unstable_ImmediatePriority,Dw=nn.unstable_UserBlockingPriority,Rc=nn.unstable_NormalPriority,UI=nn.unstable_LowPriority,Lw=nn.unstable_IdlePriority,Sf=null,Kn=null;function BI(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Sf,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:HI,zI=Math.log,$I=Math.LN2;function HI(t){return t>>>=0,t===0?32:31-(zI(t)/$I|0)|0}var Ru=64,Ou=4194304;function Ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Ia(l):(o&=s,o!==0&&(r=Ia(o)))}else s=n&~i,s!==0?r=Ia(s):o!==0&&(r=Ia(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nn(e),i=1<<n,r|=t[n],e&=~i;return r}function WI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Nn(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=WI(l,e)):c<=e&&(t.expiredLanes|=l),o&=~l}}function Ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mw(){var t=Ru;return Ru<<=1,!(Ru&4194240)&&(Ru=64),t}function Ad(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function kl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function GI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function tm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Te=0;function Vw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fw,nm,jw,Uw,Bw,xh=!1,Nu=[],si=null,ai=null,li=null,Ka=new Map,Qa=new Map,Jr=[],KI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vv(t,e){switch(t){case"focusin":case"focusout":si=null;break;case"dragenter":case"dragleave":ai=null;break;case"mouseover":case"mouseout":li=null;break;case"pointerover":case"pointerout":Ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function da(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Al(e),e!==null&&nm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QI(t,e,n,r,i){switch(e){case"focusin":return si=da(si,t,e,n,r,i),!0;case"dragenter":return ai=da(ai,t,e,n,r,i),!0;case"mouseover":return li=da(li,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ka.set(o,da(Ka.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Qa.set(o,da(Qa.get(o)||null,t,e,n,r,i)),!0}return!1}function zw(t){var e=Gi(t.target);if(e!==null){var n=Eo(e);if(n!==null){if(e=n.tag,e===13){if(e=xw(n),e!==null){t.blockedOn=e,Bw(t.priority,function(){jw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ac(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sh=r,n.target.dispatchEvent(r),Sh=null}else return e=Al(n),e!==null&&nm(e),t.blockedOn=n,!1;e.shift()}return!0}function yv(t,e,n){ac(t)&&n.delete(e)}function YI(){xh=!1,si!==null&&ac(si)&&(si=null),ai!==null&&ac(ai)&&(ai=null),li!==null&&ac(li)&&(li=null),Ka.forEach(yv),Qa.forEach(yv)}function ha(t,e){t.blockedOn===e&&(t.blockedOn=null,xh||(xh=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,YI)))}function Ya(t){function e(i){return ha(i,t)}if(0<Nu.length){ha(Nu[0],t);for(var n=1;n<Nu.length;n++){var r=Nu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(si!==null&&ha(si,t),ai!==null&&ha(ai,t),li!==null&&ha(li,t),Ka.forEach(e),Qa.forEach(e),n=0;n<Jr.length;n++)r=Jr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jr.length&&(n=Jr[0],n.blockedOn===null);)zw(n),n.blockedOn===null&&Jr.shift()}var fs=xr.ReactCurrentBatchConfig,Nc=!0;function XI(t,e,n,r){var i=Te,o=fs.transition;fs.transition=null;try{Te=1,rm(t,e,n,r)}finally{Te=i,fs.transition=o}}function JI(t,e,n,r){var i=Te,o=fs.transition;fs.transition=null;try{Te=4,rm(t,e,n,r)}finally{Te=i,fs.transition=o}}function rm(t,e,n,r){if(Nc){var i=Rh(t,e,n,r);if(i===null)Fd(t,e,r,Dc,n),vv(t,r);else if(QI(i,t,e,n,r))r.stopPropagation();else if(vv(t,r),e&4&&-1<KI.indexOf(t)){for(;i!==null;){var o=Al(i);if(o!==null&&Fw(o),o=Rh(t,e,n,r),o===null&&Fd(t,e,r,Dc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Fd(t,e,r,null,n)}}var Dc=null;function Rh(t,e,n,r){if(Dc=null,t=Zp(r),t=Gi(t),t!==null)if(e=Eo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dc=t,null}function $w(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jI()){case em:return 1;case Dw:return 4;case Rc:case UI:return 16;case Lw:return 536870912;default:return 16}default:return 16}}var ri=null,im=null,lc=null;function Hw(){if(lc)return lc;var t,e=im,n=e.length,r,i="value"in ri?ri.value:ri.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return lc=i.slice(t,1<r?1-r:void 0)}function uc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Du(){return!0}function wv(){return!1}function sn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Du:wv,this.isPropagationStopped=wv,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Du)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Du)},persist:function(){},isPersistent:Du}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},om=sn(Ds),Cl=je({},Ds,{view:0,detail:0}),ZI=sn(Cl),Pd,xd,pa,kf=je({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pa&&(pa&&t.type==="mousemove"?(Pd=t.screenX-pa.screenX,xd=t.screenY-pa.screenY):xd=Pd=0,pa=t),Pd)},movementY:function(t){return"movementY"in t?t.movementY:xd}}),_v=sn(kf),eb=je({},kf,{dataTransfer:0}),tb=sn(eb),nb=je({},Cl,{relatedTarget:0}),Rd=sn(nb),rb=je({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),ib=sn(rb),ob=je({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sb=sn(ob),ab=je({},Ds,{data:0}),Ev=sn(ab),lb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ub={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cb[t])?!!e[t]:!1}function sm(){return fb}var db=je({},Cl,{key:function(t){if(t.key){var e=lb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ub[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sm,charCode:function(t){return t.type==="keypress"?uc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hb=sn(db),pb=je({},kf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tv=sn(pb),mb=je({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sm}),gb=sn(mb),vb=je({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),yb=sn(vb),wb=je({},kf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_b=sn(wb),Eb=[9,13,27,32],am=Er&&"CompositionEvent"in window,Ra=null;Er&&"documentMode"in document&&(Ra=document.documentMode);var Tb=Er&&"TextEvent"in window&&!Ra,Ww=Er&&(!am||Ra&&8<Ra&&11>=Ra),Iv=" ",bv=!1;function qw(t,e){switch(t){case"keyup":return Eb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ko=!1;function Ib(t,e){switch(t){case"compositionend":return Gw(e);case"keypress":return e.which!==32?null:(bv=!0,Iv);case"textInput":return t=e.data,t===Iv&&bv?null:t;default:return null}}function bb(t,e){if(Ko)return t==="compositionend"||!am&&qw(t,e)?(t=Hw(),lc=im=ri=null,Ko=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ww&&e.locale!=="ko"?null:e.data;default:return null}}var Sb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sb[t.type]:e==="textarea"}function Kw(t,e,n,r){Sw(r),e=Lc(e,"onChange"),0<e.length&&(n=new om("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Oa=null,Xa=null;function kb(t){o1(t,0)}function Cf(t){var e=Xo(t);if(yw(e))return t}function Cb(t,e){if(t==="change")return e}var Qw=!1;if(Er){var Od;if(Er){var Nd="oninput"in document;if(!Nd){var kv=document.createElement("div");kv.setAttribute("oninput","return;"),Nd=typeof kv.oninput=="function"}Od=Nd}else Od=!1;Qw=Od&&(!document.documentMode||9<document.documentMode)}function Cv(){Oa&&(Oa.detachEvent("onpropertychange",Yw),Xa=Oa=null)}function Yw(t){if(t.propertyName==="value"&&Cf(Xa)){var e=[];Kw(e,Xa,t,Zp(t)),Pw(kb,e)}}function Ab(t,e,n){t==="focusin"?(Cv(),Oa=e,Xa=n,Oa.attachEvent("onpropertychange",Yw)):t==="focusout"&&Cv()}function Pb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cf(Xa)}function xb(t,e){if(t==="click")return Cf(e)}function Rb(t,e){if(t==="input"||t==="change")return Cf(e)}function Ob(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mn=typeof Object.is=="function"?Object.is:Ob;function Ja(t,e){if(Mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hh.call(e,i)||!Mn(t[i],e[i]))return!1}return!0}function Av(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pv(t,e){var n=Av(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Av(n)}}function Xw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jw(){for(var t=window,e=Ac();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ac(t.document)}return e}function lm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Nb(t){var e=Jw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Xw(n.ownerDocument.documentElement,n)){if(r!==null&&lm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Pv(n,o);var s=Pv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Db=Er&&"documentMode"in document&&11>=document.documentMode,Qo=null,Oh=null,Na=null,Nh=!1;function xv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nh||Qo==null||Qo!==Ac(r)||(r=Qo,"selectionStart"in r&&lm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Na&&Ja(Na,r)||(Na=r,r=Lc(Oh,"onSelect"),0<r.length&&(e=new om("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Qo)))}function Lu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yo={animationend:Lu("Animation","AnimationEnd"),animationiteration:Lu("Animation","AnimationIteration"),animationstart:Lu("Animation","AnimationStart"),transitionend:Lu("Transition","TransitionEnd")},Dd={},Zw={};Er&&(Zw=document.createElement("div").style,"AnimationEvent"in window||(delete Yo.animationend.animation,delete Yo.animationiteration.animation,delete Yo.animationstart.animation),"TransitionEvent"in window||delete Yo.transitionend.transition);function Af(t){if(Dd[t])return Dd[t];if(!Yo[t])return t;var e=Yo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zw)return Dd[t]=e[n];return t}var e1=Af("animationend"),t1=Af("animationiteration"),n1=Af("animationstart"),r1=Af("transitionend"),i1=new Map,Rv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Si(t,e){i1.set(t,e),_o(e,[t])}for(var Ld=0;Ld<Rv.length;Ld++){var Md=Rv[Ld],Lb=Md.toLowerCase(),Mb=Md[0].toUpperCase()+Md.slice(1);Si(Lb,"on"+Mb)}Si(e1,"onAnimationEnd");Si(t1,"onAnimationIteration");Si(n1,"onAnimationStart");Si("dblclick","onDoubleClick");Si("focusin","onFocus");Si("focusout","onBlur");Si(r1,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);_o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_o("onBeforeInput",["compositionend","keypress","textInput","paste"]);_o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function Ov(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LI(r,e,void 0,t),t.currentTarget=null}function o1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,h=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Ov(i,l,h),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,h=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Ov(i,l,h),o=c}}}if(xc)throw t=Ah,xc=!1,Ah=null,t}function Ae(t,e){var n=e[Fh];n===void 0&&(n=e[Fh]=new Set);var r=t+"__bubble";n.has(r)||(s1(e,t,2,!1),n.add(r))}function Vd(t,e,n){var r=0;e&&(r|=4),s1(n,t,r,e)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function Za(t){if(!t[Mu]){t[Mu]=!0,hw.forEach(function(n){n!=="selectionchange"&&(Vb.has(n)||Vd(n,!1,t),Vd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mu]||(e[Mu]=!0,Vd("selectionchange",!1,e))}}function s1(t,e,n,r){switch($w(e)){case 1:var i=XI;break;case 4:i=JI;break;default:i=rm}n=i.bind(null,e,n,t),i=void 0,!Ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Fd(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Gi(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Pw(function(){var h=o,v=Zp(n),y=[];e:{var _=i1.get(t);if(_!==void 0){var x=om,O=t;switch(t){case"keypress":if(uc(n)===0)break e;case"keydown":case"keyup":x=hb;break;case"focusin":O="focus",x=Rd;break;case"focusout":O="blur",x=Rd;break;case"beforeblur":case"afterblur":x=Rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=_v;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=tb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=gb;break;case e1:case t1:case n1:x=ib;break;case r1:x=yb;break;case"scroll":x=ZI;break;case"wheel":x=_b;break;case"copy":case"cut":case"paste":x=sb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Tv}var D=(e&4)!==0,M=!D&&t==="scroll",k=D?_!==null?_+"Capture":null:_;D=[];for(var T=h,C;T!==null;){C=T;var V=C.stateNode;if(C.tag===5&&V!==null&&(C=V,k!==null&&(V=Ga(T,k),V!=null&&D.push(el(T,V,C)))),M)break;T=T.return}0<D.length&&(_=new x(_,O,null,n,v),y.push({event:_,listeners:D}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",_&&n!==Sh&&(O=n.relatedTarget||n.fromElement)&&(Gi(O)||O[Tr]))break e;if((x||_)&&(_=v.window===v?v:(_=v.ownerDocument)?_.defaultView||_.parentWindow:window,x?(O=n.relatedTarget||n.toElement,x=h,O=O?Gi(O):null,O!==null&&(M=Eo(O),O!==M||O.tag!==5&&O.tag!==6)&&(O=null)):(x=null,O=h),x!==O)){if(D=_v,V="onMouseLeave",k="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(D=Tv,V="onPointerLeave",k="onPointerEnter",T="pointer"),M=x==null?_:Xo(x),C=O==null?_:Xo(O),_=new D(V,T+"leave",x,n,v),_.target=M,_.relatedTarget=C,V=null,Gi(v)===h&&(D=new D(k,T+"enter",O,n,v),D.target=C,D.relatedTarget=M,V=D),M=V,x&&O)t:{for(D=x,k=O,T=0,C=D;C;C=Ho(C))T++;for(C=0,V=k;V;V=Ho(V))C++;for(;0<T-C;)D=Ho(D),T--;for(;0<C-T;)k=Ho(k),C--;for(;T--;){if(D===k||k!==null&&D===k.alternate)break t;D=Ho(D),k=Ho(k)}D=null}else D=null;x!==null&&Nv(y,_,x,D,!1),O!==null&&M!==null&&Nv(y,M,O,D,!0)}}e:{if(_=h?Xo(h):window,x=_.nodeName&&_.nodeName.toLowerCase(),x==="select"||x==="input"&&_.type==="file")var z=Cb;else if(Sv(_))if(Qw)z=Rb;else{z=Pb;var q=Ab}else(x=_.nodeName)&&x.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(z=xb);if(z&&(z=z(t,h))){Kw(y,z,n,v);break e}q&&q(t,_,h),t==="focusout"&&(q=_._wrapperState)&&q.controlled&&_.type==="number"&&_h(_,"number",_.value)}switch(q=h?Xo(h):window,t){case"focusin":(Sv(q)||q.contentEditable==="true")&&(Qo=q,Oh=h,Na=null);break;case"focusout":Na=Oh=Qo=null;break;case"mousedown":Nh=!0;break;case"contextmenu":case"mouseup":case"dragend":Nh=!1,xv(y,n,v);break;case"selectionchange":if(Db)break;case"keydown":case"keyup":xv(y,n,v)}var S;if(am)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ko?qw(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ww&&n.locale!=="ko"&&(Ko||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ko&&(S=Hw()):(ri=v,im="value"in ri?ri.value:ri.textContent,Ko=!0)),q=Lc(h,E),0<q.length&&(E=new Ev(E,t,null,n,v),y.push({event:E,listeners:q}),S?E.data=S:(S=Gw(n),S!==null&&(E.data=S)))),(S=Tb?Ib(t,n):bb(t,n))&&(h=Lc(h,"onBeforeInput"),0<h.length&&(v=new Ev("onBeforeInput","beforeinput",null,n,v),y.push({event:v,listeners:h}),v.data=S))}o1(y,e)})}function el(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ga(t,n),o!=null&&r.unshift(el(t,o,i)),o=Ga(t,e),o!=null&&r.push(el(t,o,i))),t=t.return}return r}function Ho(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,h=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&h!==null&&(l=h,i?(c=Ga(n,o),c!=null&&s.unshift(el(n,c,l))):i||(c=Ga(n,o),c!=null&&s.push(el(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Fb=/\r\n?/g,jb=/\u0000|\uFFFD/g;function Dv(t){return(typeof t=="string"?t:""+t).replace(Fb,`
`).replace(jb,"")}function Vu(t,e,n){if(e=Dv(e),Dv(t)!==e&&n)throw Error(H(425))}function Mc(){}var Dh=null,Lh=null;function Mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vh=typeof setTimeout=="function"?setTimeout:void 0,Ub=typeof clearTimeout=="function"?clearTimeout:void 0,Lv=typeof Promise=="function"?Promise:void 0,Bb=typeof queueMicrotask=="function"?queueMicrotask:typeof Lv<"u"?function(t){return Lv.resolve(null).then(t).catch(zb)}:Vh;function zb(t){setTimeout(function(){throw t})}function jd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ya(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ya(e)}function ui(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),qn="__reactFiber$"+Ls,tl="__reactProps$"+Ls,Tr="__reactContainer$"+Ls,Fh="__reactEvents$"+Ls,$b="__reactListeners$"+Ls,Hb="__reactHandles$"+Ls;function Gi(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tr]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mv(t);t!==null;){if(n=t[qn])return n;t=Mv(t)}return e}t=n,n=t.parentNode}return null}function Al(t){return t=t[qn]||t[Tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Pf(t){return t[tl]||null}var jh=[],Jo=-1;function ki(t){return{current:t}}function xe(t){0>Jo||(t.current=jh[Jo],jh[Jo]=null,Jo--)}function ke(t,e){Jo++,jh[Jo]=t.current,t.current=e}var yi={},Nt=ki(yi),Wt=ki(!1),oo=yi;function _s(t,e){var n=t.type.contextTypes;if(!n)return yi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function Vc(){xe(Wt),xe(Nt)}function Vv(t,e,n){if(Nt.current!==yi)throw Error(H(168));ke(Nt,e),ke(Wt,n)}function a1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,AI(t)||"Unknown",i));return je({},n,r)}function Fc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yi,oo=Nt.current,ke(Nt,t),ke(Wt,Wt.current),!0}function Fv(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=a1(t,e,oo),r.__reactInternalMemoizedMergedChildContext=t,xe(Wt),xe(Nt),ke(Nt,t)):xe(Wt),ke(Wt,n)}var cr=null,xf=!1,Ud=!1;function l1(t){cr===null?cr=[t]:cr.push(t)}function Wb(t){xf=!0,l1(t)}function Ci(){if(!Ud&&cr!==null){Ud=!0;var t=0,e=Te;try{var n=cr;for(Te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cr=null,xf=!1}catch(i){throw cr!==null&&(cr=cr.slice(t+1)),Nw(em,Ci),i}finally{Te=e,Ud=!1}}return null}var Zo=[],es=0,jc=null,Uc=0,hn=[],pn=0,so=null,dr=1,hr="";function Hi(t,e){Zo[es++]=Uc,Zo[es++]=jc,jc=t,Uc=e}function u1(t,e,n){hn[pn++]=dr,hn[pn++]=hr,hn[pn++]=so,so=t;var r=dr;t=hr;var i=32-Nn(r)-1;r&=~(1<<i),n+=1;var o=32-Nn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,dr=1<<32-Nn(e)+i|n<<i|r,hr=o+t}else dr=1<<o|n<<i|r,hr=t}function um(t){t.return!==null&&(Hi(t,1),u1(t,1,0))}function cm(t){for(;t===jc;)jc=Zo[--es],Zo[es]=null,Uc=Zo[--es],Zo[es]=null;for(;t===so;)so=hn[--pn],hn[pn]=null,hr=hn[--pn],hn[pn]=null,dr=hn[--pn],hn[pn]=null}var tn=null,en=null,Ne=!1,Cn=null;function c1(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tn=t,en=ui(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tn=t,en=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=so!==null?{id:dr,overflow:hr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tn=t,en=null,!0):!1;default:return!1}}function Uh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bh(t){if(Ne){var e=en;if(e){var n=e;if(!jv(t,e)){if(Uh(t))throw Error(H(418));e=ui(n.nextSibling);var r=tn;e&&jv(t,e)?c1(r,n):(t.flags=t.flags&-4097|2,Ne=!1,tn=t)}}else{if(Uh(t))throw Error(H(418));t.flags=t.flags&-4097|2,Ne=!1,tn=t}}}function Uv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function Fu(t){if(t!==tn)return!1;if(!Ne)return Uv(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mh(t.type,t.memoizedProps)),e&&(e=en)){if(Uh(t))throw f1(),Error(H(418));for(;e;)c1(t,e),e=ui(e.nextSibling)}if(Uv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){en=ui(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}en=null}}else en=tn?ui(t.stateNode.nextSibling):null;return!0}function f1(){for(var t=en;t;)t=ui(t.nextSibling)}function Es(){en=tn=null,Ne=!1}function fm(t){Cn===null?Cn=[t]:Cn.push(t)}var qb=xr.ReactCurrentBatchConfig;function ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function ju(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bv(t){var e=t._init;return e(t._payload)}function d1(t){function e(k,T){if(t){var C=k.deletions;C===null?(k.deletions=[T],k.flags|=16):C.push(T)}}function n(k,T){if(!t)return null;for(;T!==null;)e(k,T),T=T.sibling;return null}function r(k,T){for(k=new Map;T!==null;)T.key!==null?k.set(T.key,T):k.set(T.index,T),T=T.sibling;return k}function i(k,T){return k=hi(k,T),k.index=0,k.sibling=null,k}function o(k,T,C){return k.index=C,t?(C=k.alternate,C!==null?(C=C.index,C<T?(k.flags|=2,T):C):(k.flags|=2,T)):(k.flags|=1048576,T)}function s(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,T,C,V){return T===null||T.tag!==6?(T=Gd(C,k.mode,V),T.return=k,T):(T=i(T,C),T.return=k,T)}function c(k,T,C,V){var z=C.type;return z===Go?v(k,T,C.props.children,V,C.key):T!==null&&(T.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Yr&&Bv(z)===T.type)?(V=i(T,C.props),V.ref=ma(k,T,C),V.return=k,V):(V=gc(C.type,C.key,C.props,null,k.mode,V),V.ref=ma(k,T,C),V.return=k,V)}function h(k,T,C,V){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=Kd(C,k.mode,V),T.return=k,T):(T=i(T,C.children||[]),T.return=k,T)}function v(k,T,C,V,z){return T===null||T.tag!==7?(T=to(C,k.mode,V,z),T.return=k,T):(T=i(T,C),T.return=k,T)}function y(k,T,C){if(typeof T=="string"&&T!==""||typeof T=="number")return T=Gd(""+T,k.mode,C),T.return=k,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Au:return C=gc(T.type,T.key,T.props,null,k.mode,C),C.ref=ma(k,null,T),C.return=k,C;case qo:return T=Kd(T,k.mode,C),T.return=k,T;case Yr:var V=T._init;return y(k,V(T._payload),C)}if(Ta(T)||ca(T))return T=to(T,k.mode,C,null),T.return=k,T;ju(k,T)}return null}function _(k,T,C,V){var z=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return z!==null?null:l(k,T,""+C,V);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Au:return C.key===z?c(k,T,C,V):null;case qo:return C.key===z?h(k,T,C,V):null;case Yr:return z=C._init,_(k,T,z(C._payload),V)}if(Ta(C)||ca(C))return z!==null?null:v(k,T,C,V,null);ju(k,C)}return null}function x(k,T,C,V,z){if(typeof V=="string"&&V!==""||typeof V=="number")return k=k.get(C)||null,l(T,k,""+V,z);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Au:return k=k.get(V.key===null?C:V.key)||null,c(T,k,V,z);case qo:return k=k.get(V.key===null?C:V.key)||null,h(T,k,V,z);case Yr:var q=V._init;return x(k,T,C,q(V._payload),z)}if(Ta(V)||ca(V))return k=k.get(C)||null,v(T,k,V,z,null);ju(T,V)}return null}function O(k,T,C,V){for(var z=null,q=null,S=T,E=T=0,I=null;S!==null&&E<C.length;E++){S.index>E?(I=S,S=null):I=S.sibling;var A=_(k,S,C[E],V);if(A===null){S===null&&(S=I);break}t&&S&&A.alternate===null&&e(k,S),T=o(A,T,E),q===null?z=A:q.sibling=A,q=A,S=I}if(E===C.length)return n(k,S),Ne&&Hi(k,E),z;if(S===null){for(;E<C.length;E++)S=y(k,C[E],V),S!==null&&(T=o(S,T,E),q===null?z=S:q.sibling=S,q=S);return Ne&&Hi(k,E),z}for(S=r(k,S);E<C.length;E++)I=x(S,k,E,C[E],V),I!==null&&(t&&I.alternate!==null&&S.delete(I.key===null?E:I.key),T=o(I,T,E),q===null?z=I:q.sibling=I,q=I);return t&&S.forEach(function(R){return e(k,R)}),Ne&&Hi(k,E),z}function D(k,T,C,V){var z=ca(C);if(typeof z!="function")throw Error(H(150));if(C=z.call(C),C==null)throw Error(H(151));for(var q=z=null,S=T,E=T=0,I=null,A=C.next();S!==null&&!A.done;E++,A=C.next()){S.index>E?(I=S,S=null):I=S.sibling;var R=_(k,S,A.value,V);if(R===null){S===null&&(S=I);break}t&&S&&R.alternate===null&&e(k,S),T=o(R,T,E),q===null?z=R:q.sibling=R,q=R,S=I}if(A.done)return n(k,S),Ne&&Hi(k,E),z;if(S===null){for(;!A.done;E++,A=C.next())A=y(k,A.value,V),A!==null&&(T=o(A,T,E),q===null?z=A:q.sibling=A,q=A);return Ne&&Hi(k,E),z}for(S=r(k,S);!A.done;E++,A=C.next())A=x(S,k,E,A.value,V),A!==null&&(t&&A.alternate!==null&&S.delete(A.key===null?E:A.key),T=o(A,T,E),q===null?z=A:q.sibling=A,q=A);return t&&S.forEach(function(L){return e(k,L)}),Ne&&Hi(k,E),z}function M(k,T,C,V){if(typeof C=="object"&&C!==null&&C.type===Go&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Au:e:{for(var z=C.key,q=T;q!==null;){if(q.key===z){if(z=C.type,z===Go){if(q.tag===7){n(k,q.sibling),T=i(q,C.props.children),T.return=k,k=T;break e}}else if(q.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Yr&&Bv(z)===q.type){n(k,q.sibling),T=i(q,C.props),T.ref=ma(k,q,C),T.return=k,k=T;break e}n(k,q);break}else e(k,q);q=q.sibling}C.type===Go?(T=to(C.props.children,k.mode,V,C.key),T.return=k,k=T):(V=gc(C.type,C.key,C.props,null,k.mode,V),V.ref=ma(k,T,C),V.return=k,k=V)}return s(k);case qo:e:{for(q=C.key;T!==null;){if(T.key===q)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){n(k,T.sibling),T=i(T,C.children||[]),T.return=k,k=T;break e}else{n(k,T);break}else e(k,T);T=T.sibling}T=Kd(C,k.mode,V),T.return=k,k=T}return s(k);case Yr:return q=C._init,M(k,T,q(C._payload),V)}if(Ta(C))return O(k,T,C,V);if(ca(C))return D(k,T,C,V);ju(k,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,T!==null&&T.tag===6?(n(k,T.sibling),T=i(T,C),T.return=k,k=T):(n(k,T),T=Gd(C,k.mode,V),T.return=k,k=T),s(k)):n(k,T)}return M}var Ts=d1(!0),h1=d1(!1),Bc=ki(null),zc=null,ts=null,dm=null;function hm(){dm=ts=zc=null}function pm(t){var e=Bc.current;xe(Bc),t._currentValue=e}function zh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){zc=t,dm=ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ht=!0),t.firstContext=null)}function vn(t){var e=t._currentValue;if(dm!==t)if(t={context:t,memoizedValue:e,next:null},ts===null){if(zc===null)throw Error(H(308));ts=t,zc.dependencies={lanes:0,firstContext:t}}else ts=ts.next=t;return e}var Ki=null;function mm(t){Ki===null?Ki=[t]:Ki.push(t)}function p1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ir(t,r)}function Ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xr=!1;function gm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ci(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ir(t,n)}return i=r.interleaved,i===null?(e.next=e,mm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ir(t,n)}function cc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tm(t,n)}}function zv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $c(t,e,n,r){var i=t.updateQueue;Xr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,h=c.next;c.next=null,s===null?o=h:s.next=h,s=c;var v=t.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==s&&(l===null?v.firstBaseUpdate=h:l.next=h,v.lastBaseUpdate=c))}if(o!==null){var y=i.baseState;s=0,v=h=c=null,l=o;do{var _=l.lane,x=l.eventTime;if((r&_)===_){v!==null&&(v=v.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var O=t,D=l;switch(_=e,x=n,D.tag){case 1:if(O=D.payload,typeof O=="function"){y=O.call(x,y,_);break e}y=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=D.payload,_=typeof O=="function"?O.call(x,y,_):O,_==null)break e;y=je({},y,_);break e;case 2:Xr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[l]:_.push(l))}else x={eventTime:x,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(h=v=x,c=y):v=v.next=x,s|=_;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;_=l,l=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(v===null&&(c=y),i.baseState=c,i.firstBaseUpdate=h,i.lastBaseUpdate=v,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);lo|=s,t.lanes=s,t.memoizedState=y}}function $v(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Pl={},Qn=ki(Pl),nl=ki(Pl),rl=ki(Pl);function Qi(t){if(t===Pl)throw Error(H(174));return t}function vm(t,e){switch(ke(rl,e),ke(nl,t),ke(Qn,Pl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Th(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Th(e,t)}xe(Qn),ke(Qn,e)}function Is(){xe(Qn),xe(nl),xe(rl)}function g1(t){Qi(rl.current);var e=Qi(Qn.current),n=Th(e,t.type);e!==n&&(ke(nl,t),ke(Qn,n))}function ym(t){nl.current===t&&(xe(Qn),xe(nl))}var Ve=ki(0);function Hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bd=[];function wm(){for(var t=0;t<Bd.length;t++)Bd[t]._workInProgressVersionPrimary=null;Bd.length=0}var fc=xr.ReactCurrentDispatcher,zd=xr.ReactCurrentBatchConfig,ao=0,Fe=null,et=null,at=null,Wc=!1,Da=!1,il=0,Gb=0;function kt(){throw Error(H(321))}function _m(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mn(t[n],e[n]))return!1;return!0}function Em(t,e,n,r,i,o){if(ao=o,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fc.current=t===null||t.memoizedState===null?Xb:Jb,t=n(r,i),Da){o=0;do{if(Da=!1,il=0,25<=o)throw Error(H(301));o+=1,at=et=null,e.updateQueue=null,fc.current=Zb,t=n(r,i)}while(Da)}if(fc.current=qc,e=et!==null&&et.next!==null,ao=0,at=et=Fe=null,Wc=!1,e)throw Error(H(300));return t}function Tm(){var t=il!==0;return il=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Fe.memoizedState=at=t:at=at.next=t,at}function yn(){if(et===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=at===null?Fe.memoizedState:at.next;if(e!==null)at=e,et=t;else{if(t===null)throw Error(H(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},at===null?Fe.memoizedState=at=t:at=at.next=t}return at}function ol(t,e){return typeof e=="function"?e(t):e}function $d(t){var e=yn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,h=o;do{var v=h.lane;if((ao&v)===v)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var y={lane:v,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(l=c=y,s=r):c=c.next=y,Fe.lanes|=v,lo|=v}h=h.next}while(h!==null&&h!==o);c===null?s=r:c.next=l,Mn(r,e.memoizedState)||(Ht=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Fe.lanes|=o,lo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hd(t){var e=yn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Mn(o,e.memoizedState)||(Ht=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function v1(){}function y1(t,e){var n=Fe,r=yn(),i=e(),o=!Mn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ht=!0),r=r.queue,Im(E1.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,sl(9,_1.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(H(349));ao&30||w1(n,e,i)}return i}function w1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _1(t,e,n,r){e.value=n,e.getSnapshot=r,T1(e)&&I1(t)}function E1(t,e,n){return n(function(){T1(e)&&I1(t)})}function T1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mn(t,n)}catch{return!0}}function I1(t){var e=Ir(t,1);e!==null&&Dn(e,t,1,-1)}function Hv(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:t},e.queue=t,t=t.dispatch=Yb.bind(null,Fe,t),[e.memoizedState,t]}function sl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function b1(){return yn().memoizedState}function dc(t,e,n,r){var i=Hn();Fe.flags|=t,i.memoizedState=sl(1|e,n,void 0,r===void 0?null:r)}function Rf(t,e,n,r){var i=yn();r=r===void 0?null:r;var o=void 0;if(et!==null){var s=et.memoizedState;if(o=s.destroy,r!==null&&_m(r,s.deps)){i.memoizedState=sl(e,n,o,r);return}}Fe.flags|=t,i.memoizedState=sl(1|e,n,o,r)}function Wv(t,e){return dc(8390656,8,t,e)}function Im(t,e){return Rf(2048,8,t,e)}function S1(t,e){return Rf(4,2,t,e)}function k1(t,e){return Rf(4,4,t,e)}function C1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function A1(t,e,n){return n=n!=null?n.concat([t]):null,Rf(4,4,C1.bind(null,e,t),n)}function bm(){}function P1(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_m(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function x1(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_m(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function R1(t,e,n){return ao&21?(Mn(n,e)||(n=Mw(),Fe.lanes|=n,lo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ht=!0),t.memoizedState=n)}function Kb(t,e){var n=Te;Te=n!==0&&4>n?n:4,t(!0);var r=zd.transition;zd.transition={};try{t(!1),e()}finally{Te=n,zd.transition=r}}function O1(){return yn().memoizedState}function Qb(t,e,n){var r=di(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},N1(t))D1(e,n);else if(n=p1(t,e,n,r),n!==null){var i=Vt();Dn(n,t,r,i),L1(n,e,r)}}function Yb(t,e,n){var r=di(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(N1(t))D1(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Mn(l,s)){var c=e.interleaved;c===null?(i.next=i,mm(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=p1(t,e,i,r),n!==null&&(i=Vt(),Dn(n,t,r,i),L1(n,e,r))}}function N1(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function D1(t,e){Da=Wc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function L1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tm(t,n)}}var qc={readContext:vn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},Xb={readContext:vn,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:vn,useEffect:Wv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dc(4194308,4,C1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dc(4194308,4,t,e)},useInsertionEffect:function(t,e){return dc(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Qb.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:Hv,useDebugValue:bm,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=Hv(!1),e=t[0];return t=Kb.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=Hn();if(Ne){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),ut===null)throw Error(H(349));ao&30||w1(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Wv(E1.bind(null,r,o,t),[t]),r.flags|=2048,sl(9,_1.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Hn(),e=ut.identifierPrefix;if(Ne){var n=hr,r=dr;n=(r&~(1<<32-Nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=il++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Gb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Jb={readContext:vn,useCallback:P1,useContext:vn,useEffect:Im,useImperativeHandle:A1,useInsertionEffect:S1,useLayoutEffect:k1,useMemo:x1,useReducer:$d,useRef:b1,useState:function(){return $d(ol)},useDebugValue:bm,useDeferredValue:function(t){var e=yn();return R1(e,et.memoizedState,t)},useTransition:function(){var t=$d(ol)[0],e=yn().memoizedState;return[t,e]},useMutableSource:v1,useSyncExternalStore:y1,useId:O1,unstable_isNewReconciler:!1},Zb={readContext:vn,useCallback:P1,useContext:vn,useEffect:Im,useImperativeHandle:A1,useInsertionEffect:S1,useLayoutEffect:k1,useMemo:x1,useReducer:Hd,useRef:b1,useState:function(){return Hd(ol)},useDebugValue:bm,useDeferredValue:function(t){var e=yn();return et===null?e.memoizedState=t:R1(e,et.memoizedState,t)},useTransition:function(){var t=Hd(ol)[0],e=yn().memoizedState;return[t,e]},useMutableSource:v1,useSyncExternalStore:y1,useId:O1,unstable_isNewReconciler:!1};function Sn(t,e){if(t&&t.defaultProps){e=je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $h(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Of={isMounted:function(t){return(t=t._reactInternals)?Eo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=di(t),o=vr(r,i);o.payload=e,n!=null&&(o.callback=n),e=ci(t,o,i),e!==null&&(Dn(e,t,i,r),cc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=di(t),o=vr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ci(t,o,i),e!==null&&(Dn(e,t,i,r),cc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),r=di(t),i=vr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ci(t,i,r),e!==null&&(Dn(e,t,r,n),cc(e,t,r))}};function qv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ja(n,r)||!Ja(i,o):!0}function M1(t,e,n){var r=!1,i=yi,o=e.contextType;return typeof o=="object"&&o!==null?o=vn(o):(i=qt(e)?oo:Nt.current,r=e.contextTypes,o=(r=r!=null)?_s(t,i):yi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Of,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Gv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Of.enqueueReplaceState(e,e.state,null)}function Hh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},gm(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=vn(o):(o=qt(e)?oo:Nt.current,i.context=_s(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&($h(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Of.enqueueReplaceState(i,i.state,null),$c(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e){try{var n="",r=e;do n+=CI(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Wd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eS=typeof WeakMap=="function"?WeakMap:Map;function V1(t,e,n){n=vr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Kc||(Kc=!0,tp=r),Wh(t,e)},n}function F1(t,e,n){n=vr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Wh(t,e),typeof r!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Kv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pS.bind(null,t,e,n),e.then(t,t))}function Qv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vr(-1,1),e.tag=2,ci(n,e,1))),n.lanes|=1),t)}var tS=xr.ReactCurrentOwner,Ht=!1;function Mt(t,e,n,r){e.child=t===null?h1(e,null,n,r):Ts(e,t.child,n,r)}function Xv(t,e,n,r,i){n=n.render;var o=e.ref;return ds(e,i),r=Em(t,e,n,r,o,i),n=Tm(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,br(t,e,i)):(Ne&&n&&um(e),e.flags|=1,Mt(t,e,r,i),e.child)}function Jv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Om(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,j1(t,e,o,r,i)):(t=gc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ja,n(s,r)&&t.ref===e.ref)return br(t,e,i)}return e.flags|=1,t=hi(o,r),t.ref=e.ref,t.return=e,e.child=t}function j1(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ja(o,r)&&t.ref===e.ref)if(Ht=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Ht=!0);else return e.lanes=t.lanes,br(t,e,i)}return qh(t,e,n,r,i)}function U1(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(rs,Zt),Zt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(rs,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ke(rs,Zt),Zt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,ke(rs,Zt),Zt|=r;return Mt(t,e,i,n),e.child}function B1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qh(t,e,n,r,i){var o=qt(n)?oo:Nt.current;return o=_s(e,o),ds(e,i),n=Em(t,e,n,r,o,i),r=Tm(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,br(t,e,i)):(Ne&&r&&um(e),e.flags|=1,Mt(t,e,n,i),e.child)}function Zv(t,e,n,r,i){if(qt(n)){var o=!0;Fc(e)}else o=!1;if(ds(e,i),e.stateNode===null)hc(t,e),M1(e,n,r),Hh(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,h=n.contextType;typeof h=="object"&&h!==null?h=vn(h):(h=qt(n)?oo:Nt.current,h=_s(e,h));var v=n.getDerivedStateFromProps,y=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function";y||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==h)&&Gv(e,s,r,h),Xr=!1;var _=e.memoizedState;s.state=_,$c(e,r,s,i),c=e.memoizedState,l!==r||_!==c||Wt.current||Xr?(typeof v=="function"&&($h(e,n,v,r),c=e.memoizedState),(l=Xr||qv(e,n,l,r,_,c,h))?(y||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),s.props=r,s.state=c,s.context=h,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,m1(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Sn(e.type,l),s.props=h,y=e.pendingProps,_=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=vn(c):(c=qt(n)?oo:Nt.current,c=_s(e,c));var x=n.getDerivedStateFromProps;(v=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==y||_!==c)&&Gv(e,s,r,c),Xr=!1,_=e.memoizedState,s.state=_,$c(e,r,s,i);var O=e.memoizedState;l!==y||_!==O||Wt.current||Xr?(typeof x=="function"&&($h(e,n,x,r),O=e.memoizedState),(h=Xr||qv(e,n,h,r,_,O,c)||!1)?(v||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,O,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,O,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=O),s.props=r,s.state=O,s.context=c,r=h):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return Gh(t,e,n,r,o,i)}function Gh(t,e,n,r,i,o){B1(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Fv(e,n,!1),br(t,e,o);r=e.stateNode,tS.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Ts(e,t.child,null,o),e.child=Ts(e,null,l,o)):Mt(t,e,l,o),e.memoizedState=r.state,i&&Fv(e,n,!0),e.child}function z1(t){var e=t.stateNode;e.pendingContext?Vv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vv(t,e.context,!1),vm(t,e.containerInfo)}function ey(t,e,n,r,i){return Es(),fm(i),e.flags|=256,Mt(t,e,n,r),e.child}var Kh={dehydrated:null,treeContext:null,retryLane:0};function Qh(t){return{baseLanes:t,cachePool:null,transitions:null}}function $1(t,e,n){var r=e.pendingProps,i=Ve.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Ve,i&1),t===null)return Bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Lf(s,r,0,null),t=to(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Qh(n),e.memoizedState=Kh,t):Sm(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nS(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=hi(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=hi(l,o):(o=to(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Qh(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Kh,r}return o=t.child,t=o.sibling,r=hi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sm(t,e){return e=Lf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Uu(t,e,n,r){return r!==null&&fm(r),Ts(e,t.child,null,n),t=Sm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nS(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Wd(Error(H(422))),Uu(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Lf({mode:"visible",children:r.children},i,0,null),o=to(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Ts(e,t.child,null,s),e.child.memoizedState=Qh(s),e.memoizedState=Kh,o);if(!(e.mode&1))return Uu(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(H(419)),r=Wd(o,r,void 0),Uu(t,e,s,r)}if(l=(s&t.childLanes)!==0,Ht||l){if(r=ut,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ir(t,i),Dn(r,t,i,-1))}return Rm(),r=Wd(Error(H(421))),Uu(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mS.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,en=ui(i.nextSibling),tn=e,Ne=!0,Cn=null,t!==null&&(hn[pn++]=dr,hn[pn++]=hr,hn[pn++]=so,dr=t.id,hr=t.overflow,so=e),e=Sm(e,r.children),e.flags|=4096,e)}function ty(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zh(t.return,e,n)}function qd(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function H1(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Mt(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ty(t,n,e);else if(t.tag===19)ty(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Hc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qd(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Hc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qd(e,!0,n,null,o);break;case"together":qd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),lo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rS(t,e,n){switch(e.tag){case 3:z1(e),Es();break;case 5:g1(e);break;case 1:qt(e.type)&&Fc(e);break;case 4:vm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(Bc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?$1(t,e,n):(ke(Ve,Ve.current&1),t=br(t,e,n),t!==null?t.sibling:null);ke(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return H1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,U1(t,e,n)}return br(t,e,n)}var W1,Yh,q1,G1;W1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yh=function(){};q1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qi(Qn.current);var o=null;switch(n){case"input":i=yh(t,i),r=yh(t,r),o=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),o=[];break;case"textarea":i=Eh(t,i),r=Eh(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Mc)}Ih(n,r);var s;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Wa.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var c=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&c!==l&&(c!=null||l!=null))if(h==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(h,n)),n=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Wa.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&Ae("scroll",t),o||l===c||(o=[])):(o=o||[]).push(h,c))}n&&(o=o||[]).push("style",n);var h=o;(e.updateQueue=h)&&(e.flags|=4)}};G1=function(t,e,n,r){n!==r&&(e.flags|=4)};function ga(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iS(t,e,n){var r=e.pendingProps;switch(cm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return qt(e.type)&&Vc(),Ct(e),null;case 3:return r=e.stateNode,Is(),xe(Wt),xe(Nt),wm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cn!==null&&(ip(Cn),Cn=null))),Yh(t,e),Ct(e),null;case 5:ym(e);var i=Qi(rl.current);if(n=e.type,t!==null&&e.stateNode!=null)q1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Ct(e),null}if(t=Qi(Qn.current),Fu(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[qn]=e,r[tl]=o,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<ba.length;i++)Ae(ba[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":cv(r,o),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ae("invalid",r);break;case"textarea":dv(r,o),Ae("invalid",r)}Ih(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Vu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Vu(r.textContent,l,t),i=["children",""+l]):Wa.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Pu(r),fv(r,o,!0);break;case"textarea":Pu(r),hv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Mc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ew(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[qn]=e,t[tl]=r,W1(t,e,!1,!1),e.stateNode=t;e:{switch(s=bh(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<ba.length;i++)Ae(ba[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":cv(t,r),i=yh(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":dv(t,r),i=Eh(t,r),Ae("invalid",t);break;default:i=r}Ih(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?bw(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Tw(t,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&qa(t,c):typeof c=="number"&&qa(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wa.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ae("scroll",t):c!=null&&Qp(t,o,c,s))}switch(n){case"input":Pu(t),fv(t,r,!1);break;case"textarea":Pu(t),hv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?ls(t,!!r.multiple,o,!1):r.defaultValue!=null&&ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Mc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(t&&e.stateNode!=null)G1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=Qi(rl.current),Qi(Qn.current),Fu(e)){if(r=e.stateNode,n=e.memoizedProps,r[qn]=e,(o=r.nodeValue!==n)&&(t=tn,t!==null))switch(t.tag){case 3:Vu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vu(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=e,e.stateNode=r}return Ct(e),null;case 13:if(xe(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&en!==null&&e.mode&1&&!(e.flags&128))f1(),Es(),e.flags|=98560,o=!1;else if(o=Fu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(H(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[qn]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),o=!1}else Cn!==null&&(ip(Cn),Cn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?tt===0&&(tt=3):Rm())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return Is(),Yh(t,e),t===null&&Za(e.stateNode.containerInfo),Ct(e),null;case 10:return pm(e.type._context),Ct(e),null;case 17:return qt(e.type)&&Vc(),Ct(e),null;case 19:if(xe(Ve),o=e.memoizedState,o===null)return Ct(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)ga(o,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Hc(t),s!==null){for(e.flags|=128,ga(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Ve,Ve.current&1|2),e.child}t=t.sibling}o.tail!==null&&He()>Ss&&(e.flags|=128,r=!0,ga(o,!1),e.lanes=4194304)}else{if(!r)if(t=Hc(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ga(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ne)return Ct(e),null}else 2*He()-o.renderingStartTime>Ss&&n!==1073741824&&(e.flags|=128,r=!0,ga(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=He(),e.sibling=null,n=Ve.current,ke(Ve,r?n&1|2:n&1),e):(Ct(e),null);case 22:case 23:return xm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function oS(t,e){switch(cm(e),e.tag){case 1:return qt(e.type)&&Vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),xe(Wt),xe(Nt),wm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ym(e),null;case 13:if(xe(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Ve),null;case 4:return Is(),null;case 10:return pm(e.type._context),null;case 22:case 23:return xm(),null;case 24:return null;default:return null}}var Bu=!1,xt=!1,sS=typeof WeakSet=="function"?WeakSet:Set,Z=null;function ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(t,e,r)}else n.current=null}function Xh(t,e,n){try{n()}catch(r){Be(t,e,r)}}var ny=!1;function aS(t,e){if(Dh=Nc,t=Jw(),lm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,h=0,v=0,y=t,_=null;t:for(;;){for(var x;y!==n||i!==0&&y.nodeType!==3||(l=s+i),y!==o||r!==0&&y.nodeType!==3||(c=s+r),y.nodeType===3&&(s+=y.nodeValue.length),(x=y.firstChild)!==null;)_=y,y=x;for(;;){if(y===t)break t;if(_===n&&++h===i&&(l=s),_===o&&++v===r&&(c=s),(x=y.nextSibling)!==null)break;y=_,_=y.parentNode}y=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lh={focusedElem:t,selectionRange:n},Nc=!1,Z=e;Z!==null;)if(e=Z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Z=t;else for(;Z!==null;){e=Z;try{var O=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var D=O.memoizedProps,M=O.memoizedState,k=e.stateNode,T=k.getSnapshotBeforeUpdate(e.elementType===e.type?D:Sn(e.type,D),M);k.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(V){Be(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,Z=t;break}Z=e.return}return O=ny,ny=!1,O}function La(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Xh(e,n,o)}i=i.next}while(i!==r)}}function Nf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Jh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K1(t){var e=t.alternate;e!==null&&(t.alternate=null,K1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[tl],delete e[Fh],delete e[$b],delete e[Hb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q1(t){return t.tag===5||t.tag===3||t.tag===4}function ry(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mc));else if(r!==4&&(t=t.child,t!==null))for(Zh(t,e,n),t=t.sibling;t!==null;)Zh(t,e,n),t=t.sibling}function ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ep(t,e,n),t=t.sibling;t!==null;)ep(t,e,n),t=t.sibling}var gt=null,kn=!1;function Gr(t,e,n){for(n=n.child;n!==null;)Y1(t,e,n),n=n.sibling}function Y1(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Sf,n)}catch{}switch(n.tag){case 5:xt||ns(n,e);case 6:var r=gt,i=kn;gt=null,Gr(t,e,n),gt=r,kn=i,gt!==null&&(kn?(t=gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(kn?(t=gt,n=n.stateNode,t.nodeType===8?jd(t.parentNode,n):t.nodeType===1&&jd(t,n),Ya(t)):jd(gt,n.stateNode));break;case 4:r=gt,i=kn,gt=n.stateNode.containerInfo,kn=!0,Gr(t,e,n),gt=r,kn=i;break;case 0:case 11:case 14:case 15:if(!xt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Xh(n,e,s),i=i.next}while(i!==r)}Gr(t,e,n);break;case 1:if(!xt&&(ns(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Be(n,e,l)}Gr(t,e,n);break;case 21:Gr(t,e,n);break;case 22:n.mode&1?(xt=(r=xt)||n.memoizedState!==null,Gr(t,e,n),xt=r):Gr(t,e,n);break;default:Gr(t,e,n)}}function iy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sS),e.forEach(function(r){var i=gS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:gt=l.stateNode,kn=!1;break e;case 3:gt=l.stateNode.containerInfo,kn=!0;break e;case 4:gt=l.stateNode.containerInfo,kn=!0;break e}l=l.return}if(gt===null)throw Error(H(160));Y1(o,s,i),gt=null,kn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(h){Be(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)X1(e,t),e=e.sibling}function X1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),$n(t),r&4){try{La(3,t,t.return),Nf(3,t)}catch(D){Be(t,t.return,D)}try{La(5,t,t.return)}catch(D){Be(t,t.return,D)}}break;case 1:bn(e,t),$n(t),r&512&&n!==null&&ns(n,n.return);break;case 5:if(bn(e,t),$n(t),r&512&&n!==null&&ns(n,n.return),t.flags&32){var i=t.stateNode;try{qa(i,"")}catch(D){Be(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ww(i,o),bh(l,s);var h=bh(l,o);for(s=0;s<c.length;s+=2){var v=c[s],y=c[s+1];v==="style"?bw(i,y):v==="dangerouslySetInnerHTML"?Tw(i,y):v==="children"?qa(i,y):Qp(i,v,y,h)}switch(l){case"input":wh(i,o);break;case"textarea":_w(i,o);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?ls(i,!!o.multiple,x,!1):_!==!!o.multiple&&(o.defaultValue!=null?ls(i,!!o.multiple,o.defaultValue,!0):ls(i,!!o.multiple,o.multiple?[]:"",!1))}i[tl]=o}catch(D){Be(t,t.return,D)}}break;case 6:if(bn(e,t),$n(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(D){Be(t,t.return,D)}}break;case 3:if(bn(e,t),$n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ya(e.containerInfo)}catch(D){Be(t,t.return,D)}break;case 4:bn(e,t),$n(t);break;case 13:bn(e,t),$n(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Am=He())),r&4&&iy(t);break;case 22:if(v=n!==null&&n.memoizedState!==null,t.mode&1?(xt=(h=xt)||v,bn(e,t),xt=h):bn(e,t),$n(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!v&&t.mode&1)for(Z=t,v=t.child;v!==null;){for(y=Z=v;Z!==null;){switch(_=Z,x=_.child,_.tag){case 0:case 11:case 14:case 15:La(4,_,_.return);break;case 1:ns(_,_.return);var O=_.stateNode;if(typeof O.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,O.props=e.memoizedProps,O.state=e.memoizedState,O.componentWillUnmount()}catch(D){Be(r,n,D)}}break;case 5:ns(_,_.return);break;case 22:if(_.memoizedState!==null){sy(y);continue}}x!==null?(x.return=_,Z=x):sy(y)}v=v.sibling}e:for(v=null,y=t;;){if(y.tag===5){if(v===null){v=y;try{i=y.stateNode,h?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=y.stateNode,c=y.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Iw("display",s))}catch(D){Be(t,t.return,D)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=h?"":y.memoizedProps}catch(D){Be(t,t.return,D)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:bn(e,t),$n(t),r&4&&iy(t);break;case 21:break;default:bn(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Q1(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qa(i,""),r.flags&=-33);var o=ry(t);ep(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=ry(t);Zh(t,l,s);break;default:throw Error(H(161))}}catch(c){Be(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lS(t,e,n){Z=t,J1(t)}function J1(t,e,n){for(var r=(t.mode&1)!==0;Z!==null;){var i=Z,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Bu;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||xt;l=Bu;var h=xt;if(Bu=s,(xt=c)&&!h)for(Z=i;Z!==null;)s=Z,c=s.child,s.tag===22&&s.memoizedState!==null?ay(i):c!==null?(c.return=s,Z=c):ay(i);for(;o!==null;)Z=o,J1(o),o=o.sibling;Z=i,Bu=l,xt=h}oy(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Z=o):oy(t)}}function oy(t){for(;Z!==null;){var e=Z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xt||Nf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&$v(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$v(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var v=h.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Ya(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}xt||e.flags&512&&Jh(e)}catch(_){Be(e,e.return,_)}}if(e===t){Z=null;break}if(n=e.sibling,n!==null){n.return=e.return,Z=n;break}Z=e.return}}function sy(t){for(;Z!==null;){var e=Z;if(e===t){Z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Z=n;break}Z=e.return}}function ay(t){for(;Z!==null;){var e=Z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nf(4,e)}catch(c){Be(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Be(e,i,c)}}var o=e.return;try{Jh(e)}catch(c){Be(e,o,c)}break;case 5:var s=e.return;try{Jh(e)}catch(c){Be(e,s,c)}}}catch(c){Be(e,e.return,c)}if(e===t){Z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Z=l;break}Z=e.return}}var uS=Math.ceil,Gc=xr.ReactCurrentDispatcher,km=xr.ReactCurrentOwner,gn=xr.ReactCurrentBatchConfig,ge=0,ut=null,Ke=null,_t=0,Zt=0,rs=ki(0),tt=0,al=null,lo=0,Df=0,Cm=0,Ma=null,$t=null,Am=0,Ss=1/0,ur=null,Kc=!1,tp=null,fi=null,zu=!1,ii=null,Qc=0,Va=0,np=null,pc=-1,mc=0;function Vt(){return ge&6?He():pc!==-1?pc:pc=He()}function di(t){return t.mode&1?ge&2&&_t!==0?_t&-_t:qb.transition!==null?(mc===0&&(mc=Mw()),mc):(t=Te,t!==0||(t=window.event,t=t===void 0?16:$w(t.type)),t):1}function Dn(t,e,n,r){if(50<Va)throw Va=0,np=null,Error(H(185));kl(t,n,r),(!(ge&2)||t!==ut)&&(t===ut&&(!(ge&2)&&(Df|=n),tt===4&&Zr(t,_t)),Gt(t,r),n===1&&ge===0&&!(e.mode&1)&&(Ss=He()+500,xf&&Ci()))}function Gt(t,e){var n=t.callbackNode;qI(t,e);var r=Oc(t,t===ut?_t:0);if(r===0)n!==null&&gv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&gv(n),e===1)t.tag===0?Wb(ly.bind(null,t)):l1(ly.bind(null,t)),Bb(function(){!(ge&6)&&Ci()}),n=null;else{switch(Vw(r)){case 1:n=em;break;case 4:n=Dw;break;case 16:n=Rc;break;case 536870912:n=Lw;break;default:n=Rc}n=s_(n,Z1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Z1(t,e){if(pc=-1,mc=0,ge&6)throw Error(H(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var r=Oc(t,t===ut?_t:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Yc(t,r);else{e=r;var i=ge;ge|=2;var o=t_();(ut!==t||_t!==e)&&(ur=null,Ss=He()+500,eo(t,e));do try{dS();break}catch(l){e_(t,l)}while(!0);hm(),Gc.current=o,ge=i,Ke!==null?e=0:(ut=null,_t=0,e=tt)}if(e!==0){if(e===2&&(i=Ph(t),i!==0&&(r=i,e=rp(t,i))),e===1)throw n=al,eo(t,0),Zr(t,r),Gt(t,He()),n;if(e===6)Zr(t,r);else{if(i=t.current.alternate,!(r&30)&&!cS(i)&&(e=Yc(t,r),e===2&&(o=Ph(t),o!==0&&(r=o,e=rp(t,o))),e===1))throw n=al,eo(t,0),Zr(t,r),Gt(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Wi(t,$t,ur);break;case 3:if(Zr(t,r),(r&130023424)===r&&(e=Am+500-He(),10<e)){if(Oc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vh(Wi.bind(null,t,$t,ur),e);break}Wi(t,$t,ur);break;case 4:if(Zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Nn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uS(r/1960))-r,10<r){t.timeoutHandle=Vh(Wi.bind(null,t,$t,ur),r);break}Wi(t,$t,ur);break;case 5:Wi(t,$t,ur);break;default:throw Error(H(329))}}}return Gt(t,He()),t.callbackNode===n?Z1.bind(null,t):null}function rp(t,e){var n=Ma;return t.current.memoizedState.isDehydrated&&(eo(t,e).flags|=256),t=Yc(t,e),t!==2&&(e=$t,$t=n,e!==null&&ip(e)),t}function ip(t){$t===null?$t=t:$t.push.apply($t,t)}function cS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Mn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zr(t,e){for(e&=~Cm,e&=~Df,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),r=1<<n;t[n]=-1,e&=~r}}function ly(t){if(ge&6)throw Error(H(327));hs();var e=Oc(t,0);if(!(e&1))return Gt(t,He()),null;var n=Yc(t,e);if(t.tag!==0&&n===2){var r=Ph(t);r!==0&&(e=r,n=rp(t,r))}if(n===1)throw n=al,eo(t,0),Zr(t,e),Gt(t,He()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wi(t,$t,ur),Gt(t,He()),null}function Pm(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(Ss=He()+500,xf&&Ci())}}function uo(t){ii!==null&&ii.tag===0&&!(ge&6)&&hs();var e=ge;ge|=1;var n=gn.transition,r=Te;try{if(gn.transition=null,Te=1,t)return t()}finally{Te=r,gn.transition=n,ge=e,!(ge&6)&&Ci()}}function xm(){Zt=rs.current,xe(rs)}function eo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ub(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(cm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vc();break;case 3:Is(),xe(Wt),xe(Nt),wm();break;case 5:ym(r);break;case 4:Is();break;case 13:xe(Ve);break;case 19:xe(Ve);break;case 10:pm(r.type._context);break;case 22:case 23:xm()}n=n.return}if(ut=t,Ke=t=hi(t.current,null),_t=Zt=e,tt=0,al=null,Cm=Df=lo=0,$t=Ma=null,Ki!==null){for(e=0;e<Ki.length;e++)if(n=Ki[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ki=null}return t}function e_(t,e){do{var n=Ke;try{if(hm(),fc.current=qc,Wc){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wc=!1}if(ao=0,at=et=Fe=null,Da=!1,il=0,km.current=null,n===null||n.return===null){tt=1,al=e,Ke=null;break}e:{var o=t,s=n.return,l=n,c=e;if(e=_t,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,v=l,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var _=v.alternate;_?(v.updateQueue=_.updateQueue,v.memoizedState=_.memoizedState,v.lanes=_.lanes):(v.updateQueue=null,v.memoizedState=null)}var x=Qv(s);if(x!==null){x.flags&=-257,Yv(x,s,l,o,e),x.mode&1&&Kv(o,h,e),e=x,c=h;var O=e.updateQueue;if(O===null){var D=new Set;D.add(c),e.updateQueue=D}else O.add(c);break e}else{if(!(e&1)){Kv(o,h,e),Rm();break e}c=Error(H(426))}}else if(Ne&&l.mode&1){var M=Qv(s);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Yv(M,s,l,o,e),fm(bs(c,l));break e}}o=c=bs(c,l),tt!==4&&(tt=2),Ma===null?Ma=[o]:Ma.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var k=V1(o,c,e);zv(o,k);break e;case 1:l=c;var T=o.type,C=o.stateNode;if(!(o.flags&128)&&(typeof T.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(fi===null||!fi.has(C)))){o.flags|=65536,e&=-e,o.lanes|=e;var V=F1(o,l,e);zv(o,V);break e}}o=o.return}while(o!==null)}r_(n)}catch(z){e=z,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function t_(){var t=Gc.current;return Gc.current=qc,t===null?qc:t}function Rm(){(tt===0||tt===3||tt===2)&&(tt=4),ut===null||!(lo&268435455)&&!(Df&268435455)||Zr(ut,_t)}function Yc(t,e){var n=ge;ge|=2;var r=t_();(ut!==t||_t!==e)&&(ur=null,eo(t,e));do try{fS();break}catch(i){e_(t,i)}while(!0);if(hm(),ge=n,Gc.current=r,Ke!==null)throw Error(H(261));return ut=null,_t=0,tt}function fS(){for(;Ke!==null;)n_(Ke)}function dS(){for(;Ke!==null&&!VI();)n_(Ke)}function n_(t){var e=o_(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?r_(t):Ke=e,km.current=null}function r_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oS(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Ke=null;return}}else if(n=iS(n,e,Zt),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);tt===0&&(tt=5)}function Wi(t,e,n){var r=Te,i=gn.transition;try{gn.transition=null,Te=1,hS(t,e,n,r)}finally{gn.transition=i,Te=r}return null}function hS(t,e,n,r){do hs();while(ii!==null);if(ge&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(GI(t,o),t===ut&&(Ke=ut=null,_t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zu||(zu=!0,s_(Rc,function(){return hs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=gn.transition,gn.transition=null;var s=Te;Te=1;var l=ge;ge|=4,km.current=null,aS(t,n),X1(n,t),Nb(Lh),Nc=!!Dh,Lh=Dh=null,t.current=n,lS(n),FI(),ge=l,Te=s,gn.transition=o}else t.current=n;if(zu&&(zu=!1,ii=t,Qc=i),o=t.pendingLanes,o===0&&(fi=null),BI(n.stateNode),Gt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Kc)throw Kc=!1,t=tp,tp=null,t;return Qc&1&&t.tag!==0&&hs(),o=t.pendingLanes,o&1?t===np?Va++:(Va=0,np=t):Va=0,Ci(),null}function hs(){if(ii!==null){var t=Vw(Qc),e=gn.transition,n=Te;try{if(gn.transition=null,Te=16>t?16:t,ii===null)var r=!1;else{if(t=ii,ii=null,Qc=0,ge&6)throw Error(H(331));var i=ge;for(ge|=4,Z=t.current;Z!==null;){var o=Z,s=o.child;if(Z.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var h=l[c];for(Z=h;Z!==null;){var v=Z;switch(v.tag){case 0:case 11:case 15:La(8,v,o)}var y=v.child;if(y!==null)y.return=v,Z=y;else for(;Z!==null;){v=Z;var _=v.sibling,x=v.return;if(K1(v),v===h){Z=null;break}if(_!==null){_.return=x,Z=_;break}Z=x}}}var O=o.alternate;if(O!==null){var D=O.child;if(D!==null){O.child=null;do{var M=D.sibling;D.sibling=null,D=M}while(D!==null)}}Z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Z=s;else e:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:La(9,o,o.return)}var k=o.sibling;if(k!==null){k.return=o.return,Z=k;break e}Z=o.return}}var T=t.current;for(Z=T;Z!==null;){s=Z;var C=s.child;if(s.subtreeFlags&2064&&C!==null)C.return=s,Z=C;else e:for(s=T;Z!==null;){if(l=Z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nf(9,l)}}catch(z){Be(l,l.return,z)}if(l===s){Z=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,Z=V;break e}Z=l.return}}if(ge=i,Ci(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Sf,t)}catch{}r=!0}return r}finally{Te=n,gn.transition=e}}return!1}function uy(t,e,n){e=bs(n,e),e=V1(t,e,1),t=ci(t,e,1),e=Vt(),t!==null&&(kl(t,1,e),Gt(t,e))}function Be(t,e,n){if(t.tag===3)uy(t,t,n);else for(;e!==null;){if(e.tag===3){uy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fi===null||!fi.has(r))){t=bs(n,t),t=F1(e,t,1),e=ci(e,t,1),t=Vt(),e!==null&&(kl(e,1,t),Gt(e,t));break}}e=e.return}}function pS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(_t&n)===n&&(tt===4||tt===3&&(_t&130023424)===_t&&500>He()-Am?eo(t,0):Cm|=n),Gt(t,e)}function i_(t,e){e===0&&(t.mode&1?(e=Ou,Ou<<=1,!(Ou&130023424)&&(Ou=4194304)):e=1);var n=Vt();t=Ir(t,e),t!==null&&(kl(t,e,n),Gt(t,n))}function mS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),i_(t,n)}function gS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),i_(t,n)}var o_;o_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Wt.current)Ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ht=!1,rS(t,e,n);Ht=!!(t.flags&131072)}else Ht=!1,Ne&&e.flags&1048576&&u1(e,Uc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hc(t,e),t=e.pendingProps;var i=_s(e,Nt.current);ds(e,n),i=Em(null,e,r,t,i,n);var o=Tm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(o=!0,Fc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gm(e),i.updater=Of,e.stateNode=i,i._reactInternals=e,Hh(e,r,t,n),e=Gh(null,e,r,!0,o,n)):(e.tag=0,Ne&&o&&um(e),Mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=yS(r),t=Sn(r,t),i){case 0:e=qh(null,e,r,t,n);break e;case 1:e=Zv(null,e,r,t,n);break e;case 11:e=Xv(null,e,r,t,n);break e;case 14:e=Jv(null,e,r,Sn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),qh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),Zv(t,e,r,i,n);case 3:e:{if(z1(e),t===null)throw Error(H(387));r=e.pendingProps,o=e.memoizedState,i=o.element,m1(t,e),$c(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=bs(Error(H(423)),e),e=ey(t,e,r,n,i);break e}else if(r!==i){i=bs(Error(H(424)),e),e=ey(t,e,r,n,i);break e}else for(en=ui(e.stateNode.containerInfo.firstChild),tn=e,Ne=!0,Cn=null,n=h1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),r===i){e=br(t,e,n);break e}Mt(t,e,r,n)}e=e.child}return e;case 5:return g1(e),t===null&&Bh(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Mh(r,i)?s=null:o!==null&&Mh(r,o)&&(e.flags|=32),B1(t,e),Mt(t,e,s,n),e.child;case 6:return t===null&&Bh(e),null;case 13:return $1(t,e,n);case 4:return vm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ts(e,null,r,n):Mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),Xv(t,e,r,i,n);case 7:return Mt(t,e,e.pendingProps,n),e.child;case 8:return Mt(t,e,e.pendingProps.children,n),e.child;case 12:return Mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,ke(Bc,r._currentValue),r._currentValue=s,o!==null)if(Mn(o.value,s)){if(o.children===i.children&&!Wt.current){e=br(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=vr(-1,n&-n),c.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var v=h.pending;v===null?c.next=c:(c.next=v.next,v.next=c),h.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),zh(o.return,n,e),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(H(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zh(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ds(e,n),i=vn(i),r=r(i),e.flags|=1,Mt(t,e,r,n),e.child;case 14:return r=e.type,i=Sn(r,e.pendingProps),i=Sn(r.type,i),Jv(t,e,r,i,n);case 15:return j1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),hc(t,e),e.tag=1,qt(r)?(t=!0,Fc(e)):t=!1,ds(e,n),M1(e,r,i),Hh(e,r,i,n),Gh(null,e,r,!0,t,n);case 19:return H1(t,e,n);case 22:return U1(t,e,n)}throw Error(H(156,e.tag))};function s_(t,e){return Nw(t,e)}function vS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new vS(t,e,n,r)}function Om(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yS(t){if(typeof t=="function")return Om(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xp)return 11;if(t===Jp)return 14}return 2}function hi(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Om(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Go:return to(n.children,i,o,e);case Yp:s=8,i|=8;break;case ph:return t=mn(12,n,e,i|2),t.elementType=ph,t.lanes=o,t;case mh:return t=mn(13,n,e,i),t.elementType=mh,t.lanes=o,t;case gh:return t=mn(19,n,e,i),t.elementType=gh,t.lanes=o,t;case gw:return Lf(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pw:s=10;break e;case mw:s=9;break e;case Xp:s=11;break e;case Jp:s=14;break e;case Yr:s=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=mn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function to(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function Lf(t,e,n,r){return t=mn(22,t,r,e),t.elementType=gw,t.lanes=n,t.stateNode={isHidden:!1},t}function Gd(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function Kd(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ad(0),this.expirationTimes=Ad(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ad(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nm(t,e,n,r,i,o,s,l,c){return t=new wS(t,e,n,l,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=mn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gm(o),t}function _S(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function a_(t){if(!t)return yi;t=t._reactInternals;e:{if(Eo(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(qt(n))return a1(t,n,e)}return e}function l_(t,e,n,r,i,o,s,l,c){return t=Nm(n,r,!0,t,i,o,s,l,c),t.context=a_(null),n=t.current,r=Vt(),i=di(n),o=vr(r,i),o.callback=e??null,ci(n,o,i),t.current.lanes=i,kl(t,i,r),Gt(t,r),t}function Mf(t,e,n,r){var i=e.current,o=Vt(),s=di(i);return n=a_(n),e.context===null?e.context=n:e.pendingContext=n,e=vr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ci(i,e,s),t!==null&&(Dn(t,i,s,o),cc(t,i,s)),s}function Xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dm(t,e){cy(t,e),(t=t.alternate)&&cy(t,e)}function ES(){return null}var u_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lm(t){this._internalRoot=t}Vf.prototype.render=Lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));Mf(t,e,null,null)};Vf.prototype.unmount=Lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;uo(function(){Mf(null,t,null,null)}),e[Tr]=null}};function Vf(t){this._internalRoot=t}Vf.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jr.length&&e!==0&&e<Jr[n].priority;n++);Jr.splice(n,0,t),n===0&&zw(t)}};function Mm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fy(){}function TS(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var h=Xc(s);o.call(h)}}var s=l_(e,r,t,0,null,!1,!1,"",fy);return t._reactRootContainer=s,t[Tr]=s.current,Za(t.nodeType===8?t.parentNode:t),uo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Xc(c);l.call(h)}}var c=Nm(t,0,!1,null,null,!1,!1,"",fy);return t._reactRootContainer=c,t[Tr]=c.current,Za(t.nodeType===8?t.parentNode:t),uo(function(){Mf(e,c,n,r)}),c}function jf(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Xc(s);l.call(c)}}Mf(e,s,t,i)}else s=TS(n,e,t,i,r);return Xc(s)}Fw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ia(e.pendingLanes);n!==0&&(tm(e,n|1),Gt(e,He()),!(ge&6)&&(Ss=He()+500,Ci()))}break;case 13:uo(function(){var r=Ir(t,1);if(r!==null){var i=Vt();Dn(r,t,1,i)}}),Dm(t,1)}};nm=function(t){if(t.tag===13){var e=Ir(t,134217728);if(e!==null){var n=Vt();Dn(e,t,134217728,n)}Dm(t,134217728)}};jw=function(t){if(t.tag===13){var e=di(t),n=Ir(t,e);if(n!==null){var r=Vt();Dn(n,t,e,r)}Dm(t,e)}};Uw=function(){return Te};Bw=function(t,e){var n=Te;try{return Te=t,e()}finally{Te=n}};kh=function(t,e,n){switch(e){case"input":if(wh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pf(r);if(!i)throw Error(H(90));yw(r),wh(r,i)}}}break;case"textarea":_w(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};Cw=Pm;Aw=uo;var IS={usingClientEntryPoint:!1,Events:[Al,Xo,Pf,Sw,kw,Pm]},va={findFiberByHostInstance:Gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bS={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rw(t),t===null?null:t.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||ES,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{Sf=$u.inject(bS),Kn=$u}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IS;on.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mm(e))throw Error(H(200));return _S(t,e,null,n)};on.createRoot=function(t,e){if(!Mm(t))throw Error(H(299));var n=!1,r="",i=u_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Nm(t,1,!1,null,null,n,!1,r,i),t[Tr]=e.current,Za(t.nodeType===8?t.parentNode:t),new Lm(e)};on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=Rw(e),t=t===null?null:t.stateNode,t};on.flushSync=function(t){return uo(t)};on.hydrate=function(t,e,n){if(!Ff(e))throw Error(H(200));return jf(null,t,e,!0,n)};on.hydrateRoot=function(t,e,n){if(!Mm(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=u_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=l_(e,null,t,1,n??null,i,!1,o,s),t[Tr]=e.current,Za(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vf(e)};on.render=function(t,e,n){if(!Ff(e))throw Error(H(200));return jf(null,t,e,!1,n)};on.unmountComponentAtNode=function(t){if(!Ff(t))throw Error(H(40));return t._reactRootContainer?(uo(function(){jf(null,null,t,!1,function(){t._reactRootContainer=null,t[Tr]=null})}),!0):!1};on.unstable_batchedUpdates=Pm;on.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ff(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return jf(t,e,n,!1,r)};on.version="18.3.1-next-f1338f8080-20240426";function c_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c_)}catch(t){console.error(t)}}c_(),cw.exports=on;var f_=cw.exports,dy=f_;dh.createRoot=dy.createRoot,dh.hydrateRoot=dy.hydrateRoot;var hy={};/**
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
 */const d_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},SS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],l=t[n++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},h_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,c=i+2<t.length,h=c?t[i+2]:0,v=o>>2,y=(o&3)<<4|l>>4;let _=(l&15)<<2|h>>6,x=h&63;c||(x=64,s||(_=64)),r.push(n[v],n[y],n[_],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const y=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||h==null||y==null)throw new kS;const _=o<<2|l>>4;if(r.push(_),h!==64){const x=l<<4&240|h>>2;if(r.push(x),y!==64){const O=h<<6&192|y;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CS=function(t){const e=d_(t);return h_.encodeByteArray(e,!0)},Jc=function(t){return CS(t).replace(/\./g,"")},p_=function(t){try{return h_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function AS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PS=()=>AS().__FIREBASE_DEFAULTS__,xS=()=>{if(typeof process>"u"||typeof hy>"u")return;const t=hy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&p_(t[1]);return e&&JSON.parse(e)},Uf=()=>{try{return PS()||xS()||RS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},m_=t=>{var e,n;return(n=(e=Uf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},OS=t=>{const e=m_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},g_=()=>{var t;return(t=Uf())===null||t===void 0?void 0:t.config},v_=t=>{var e;return(e=Uf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class NS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function DS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Jc(JSON.stringify(n)),Jc(JSON.stringify(s)),""].join(".")}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function MS(){var t;const e=(t=Uf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jS(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function US(){return!MS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BS(){try{return typeof indexedDB=="object"}catch{return!1}}function zS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const $S="FirebaseError";class Rr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$S,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xl.prototype.create)}}class xl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?HS(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Rr(i,l,r)}}function HS(t,e){return t.replace(WS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const WS=/\{\$([^}]+)}/g;function qS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(py(o)&&py(s)){if(!Zc(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function py(t){return t!==null&&typeof t=="object"}/**
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
 */function Rl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function ka(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function GS(t,e){const n=new KS(t,e);return n.subscribe.bind(n)}class KS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qd),i.error===void 0&&(i.error=Qd),i.complete===void 0&&(i.complete=Qd);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qd(){}/**
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
 */function rn(t){return t&&t._delegate?t._delegate:t}class co{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qi="[DEFAULT]";/**
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
 */class YS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JS(e))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qi){return this.instances.has(e)}getOptions(e=qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qi){return this.component?this.component.multipleInstances?e:qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XS(t){return t===qi?void 0:t}function JS(t){return t.instantiationMode==="EAGER"}/**
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
 */class ZS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const ek={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},tk=de.INFO,nk={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},rk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vm{constructor(e){this.name=e,this._logLevel=tk,this._logHandler=rk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ek[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const ik=(t,e)=>e.some(n=>t instanceof n);let my,gy;function ok(){return my||(my=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sk(){return gy||(gy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const y_=new WeakMap,op=new WeakMap,w_=new WeakMap,Yd=new WeakMap,Fm=new WeakMap;function ak(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(pi(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&y_.set(n,t)}).catch(()=>{}),Fm.set(e,t),e}function lk(t){if(op.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});op.set(t,e)}let sp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return op.get(t);if(e==="objectStoreNames")return t.objectStoreNames||w_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uk(t){sp=t(sp)}function ck(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xd(this),e,...n);return w_.set(r,e.sort?e.sort():[e]),pi(r)}:sk().includes(t)?function(...e){return t.apply(Xd(this),e),pi(y_.get(this))}:function(...e){return pi(t.apply(Xd(this),e))}}function fk(t){return typeof t=="function"?ck(t):(t instanceof IDBTransaction&&lk(t),ik(t,ok())?new Proxy(t,sp):t)}function pi(t){if(t instanceof IDBRequest)return ak(t);if(Yd.has(t))return Yd.get(t);const e=fk(t);return e!==t&&(Yd.set(t,e),Fm.set(e,t)),e}const Xd=t=>Fm.get(t);function dk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=pi(s);return r&&s.addEventListener("upgradeneeded",c=>{r(pi(s.result),c.oldVersion,c.newVersion,pi(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const hk=["get","getKey","getAll","getAllKeys","count"],pk=["put","add","delete","clear"],Jd=new Map;function vy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jd.get(e))return Jd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=pk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hk.includes(n)))return;const o=async function(s,...l){const c=this.transaction(s,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&c.done]))[0]};return Jd.set(e,o),o}uk(t=>({...t,get:(e,n,r)=>vy(e,n)||t.get(e,n,r),has:(e,n)=>!!vy(e,n)||t.has(e,n)}));/**
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
 */class mk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ap="@firebase/app",yy="0.10.5";/**
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
 */const fo=new Vm("@firebase/app"),vk="@firebase/app-compat",yk="@firebase/analytics-compat",wk="@firebase/analytics",_k="@firebase/app-check-compat",Ek="@firebase/app-check",Tk="@firebase/auth",Ik="@firebase/auth-compat",bk="@firebase/database",Sk="@firebase/database-compat",kk="@firebase/functions",Ck="@firebase/functions-compat",Ak="@firebase/installations",Pk="@firebase/installations-compat",xk="@firebase/messaging",Rk="@firebase/messaging-compat",Ok="@firebase/performance",Nk="@firebase/performance-compat",Dk="@firebase/remote-config",Lk="@firebase/remote-config-compat",Mk="@firebase/storage",Vk="@firebase/storage-compat",Fk="@firebase/firestore",jk="@firebase/vertexai-preview",Uk="@firebase/firestore-compat",Bk="firebase",zk="10.12.2";/**
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
 */const lp="[DEFAULT]",$k={[ap]:"fire-core",[vk]:"fire-core-compat",[wk]:"fire-analytics",[yk]:"fire-analytics-compat",[Ek]:"fire-app-check",[_k]:"fire-app-check-compat",[Tk]:"fire-auth",[Ik]:"fire-auth-compat",[bk]:"fire-rtdb",[Sk]:"fire-rtdb-compat",[kk]:"fire-fn",[Ck]:"fire-fn-compat",[Ak]:"fire-iid",[Pk]:"fire-iid-compat",[xk]:"fire-fcm",[Rk]:"fire-fcm-compat",[Ok]:"fire-perf",[Nk]:"fire-perf-compat",[Dk]:"fire-rc",[Lk]:"fire-rc-compat",[Mk]:"fire-gcs",[Vk]:"fire-gcs-compat",[Fk]:"fire-fst",[Uk]:"fire-fst-compat",[jk]:"fire-vertex","fire-js":"fire-js",[Bk]:"fire-js-all"};/**
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
 */const ef=new Map,Hk=new Map,up=new Map;function wy(t,e){try{t.container.addComponent(e)}catch(n){fo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ks(t){const e=t.name;if(up.has(e))return fo.debug(`There were multiple attempts to register component ${e}.`),!1;up.set(e,t);for(const n of ef.values())wy(n,t);for(const n of Hk.values())wy(n,t);return!0}function jm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xn(t){return t.settings!==void 0}/**
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
 */const Wk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mi=new xl("app","Firebase",Wk);/**
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
 */class qk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new co("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ms=zk;function __(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mi.create("bad-app-name",{appName:String(i)});if(n||(n=g_()),!n)throw mi.create("no-options");const o=ef.get(i);if(o){if(Zc(n,o.options)&&Zc(r,o.config))return o;throw mi.create("duplicate-app",{appName:i})}const s=new ZS(i);for(const c of up.values())s.addComponent(c);const l=new qk(n,r,s);return ef.set(i,l),l}function E_(t=lp){const e=ef.get(t);if(!e&&t===lp&&g_())return __();if(!e)throw mi.create("no-app",{appName:t});return e}function gi(t,e,n){var r;let i=(r=$k[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fo.warn(l.join(" "));return}ks(new co(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Gk="firebase-heartbeat-database",Kk=1,ll="firebase-heartbeat-store";let Zd=null;function T_(){return Zd||(Zd=dk(Gk,Kk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ll)}catch(n){console.warn(n)}}}}).catch(t=>{throw mi.create("idb-open",{originalErrorMessage:t.message})})),Zd}async function Qk(t){try{const n=(await T_()).transaction(ll),r=await n.objectStore(ll).get(I_(t));return await n.done,r}catch(e){if(e instanceof Rr)fo.warn(e.message);else{const n=mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fo.warn(n.message)}}}async function _y(t,e){try{const r=(await T_()).transaction(ll,"readwrite");await r.objectStore(ll).put(e,I_(t)),await r.done}catch(n){if(n instanceof Rr)fo.warn(n.message);else{const r=mi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fo.warn(r.message)}}}function I_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yk=1024,Xk=30*24*60*60*1e3;class Jk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ey();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=Xk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ey(),{heartbeatsToSend:r,unsentEntries:i}=Zk(this._heartbeatsCache.heartbeats),o=Jc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ey(){return new Date().toISOString().substring(0,10)}function Zk(t,e=Yk){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Ty(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ty(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BS()?zS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ty(t){return Jc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tC(t){ks(new co("platform-logger",e=>new mk(e),"PRIVATE")),ks(new co("heartbeat",e=>new Jk(e),"PRIVATE")),gi(ap,yy,t),gi(ap,yy,"esm2017"),gi("fire-js","")}tC("");var nC="firebase",rC="10.12.2";/**
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
 */gi(nC,rC,"app");const iC={apiKey:"AIzaSyAQCwDr8Sh7GLZSUlCAnCcal7rAqBxG5-0",authDomain:"fir-app-7d6ea.firebaseapp.com",projectId:"fir-app-7d6ea",storageBucket:"fir-app-7d6ea.appspot.com",messagingSenderId:"340764694664",appId:"1:340764694664:web:6b92e4af5476eeeb4c273d"},Um=__(iC);function Bm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function b_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oC=b_,S_=new xl("auth","Firebase",b_());/**
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
 */const tf=new Vm("@firebase/auth");function sC(t,...e){tf.logLevel<=de.WARN&&tf.warn(`Auth (${Ms}): ${t}`,...e)}function vc(t,...e){tf.logLevel<=de.ERROR&&tf.error(`Auth (${Ms}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw $m(t,...e)}function Ln(t,...e){return $m(t,...e)}function zm(t,e,n){const r=Object.assign(Object.assign({},oC()),{[e]:n});return new xl("auth","Firebase",r).create(e,{appName:t.name})}function yr(t){return zm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function aC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wn(t,"argument-error"),zm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $m(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return S_.create(t,...e)}function re(t,e,...n){if(!t)throw $m(e,...n)}function pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vc(e),new Error(e)}function Sr(t,e){t||pr(e)}/**
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
 */function cp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lC(){return Iy()==="http:"||Iy()==="https:"}function Iy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function uC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lC()||VS()||"connection"in navigator)?navigator.onLine:!0}function cC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ol{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sr(n>e,"Short delay should be less than long delay!"),this.isMobile=LS()||FS()}get(){return uC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hm(t,e){Sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class k_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dC=new Ol(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nr(t,e,n,r,i={}){return C_(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const l=Rl(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),k_.fetch()(A_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function C_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fC),e);try{const i=new pC(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Hu(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hu(t,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw Hu(t,"email-already-in-use",s);if(c==="USER_DISABLED")throw Hu(t,"user-disabled",s);const v=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zm(t,v,h);wn(t,v)}}catch(i){if(i instanceof Rr)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function Nl(t,e,n,r,i={}){const o=await Nr(t,e,n,r,i);return"mfaPendingCredential"in o&&wn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function A_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hm(t.config,i):`${t.config.apiScheme}://${i}`}function hC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ln(this.auth,"network-request-failed")),dC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ln(t,e,r);return i.customData._tokenResponse=n,i}function by(t){return t!==void 0&&t.enterprise!==void 0}class mC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function gC(t,e){return Nr(t,"GET","/v2/recaptchaConfig",Or(t,e))}/**
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
 */async function vC(t,e){return Nr(t,"POST","/v1/accounts:delete",e)}async function P_(t,e){return Nr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yC(t,e=!1){const n=rn(t),r=await n.getIdToken(e),i=Wm(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Fa(eh(i.auth_time)),issuedAtTime:Fa(eh(i.iat)),expirationTime:Fa(eh(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function eh(t){return Number(t)*1e3}function Wm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vc("JWT malformed, contained fewer than 3 sections"),null;try{const i=p_(n);return i?JSON.parse(i):(vc("Failed to decode base64 JWT payload"),null)}catch(i){return vc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sy(t){const e=Wm(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ul(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rr&&wC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _C{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nf(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ul(t,P_(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?x_(o.providerUserInfo):[],l=TC(t.providerData,s),c=t.isAnonymous,h=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),v=c?h:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new fp(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(t,y)}async function EC(t){const e=rn(t);await nf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function x_(t){return t.map(e=>{var{providerId:n}=e,r=Bm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function IC(t,e){const n=await C_(t,{},async()=>{const r=Rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=A_(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",k_.fetch()(s,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bC(t,e){return Nr(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
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
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=Sy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await IC(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ps;return r&&(re(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(re(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return pr("not implemented")}}/**
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
 */function Kr(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Bm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _C(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new fp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ul(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yC(this,e)}reload(){return EC(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await ul(this,vC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,l,c,h,v;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,x=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,O=(s=n.photoURL)!==null&&s!==void 0?s:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(h=n.createdAt)!==null&&h!==void 0?h:void 0,T=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:C,emailVerified:V,isAnonymous:z,providerData:q,stsTokenManager:S}=n;re(C&&S,e,"internal-error");const E=ps.fromJSON(this.name,S);re(typeof C=="string",e,"internal-error"),Kr(y,e.name),Kr(_,e.name),re(typeof V=="boolean",e,"internal-error"),re(typeof z=="boolean",e,"internal-error"),Kr(x,e.name),Kr(O,e.name),Kr(D,e.name),Kr(M,e.name),Kr(k,e.name),Kr(T,e.name);const I=new mr({uid:C,auth:e,email:_,emailVerified:V,displayName:y,isAnonymous:z,photoURL:O,phoneNumber:x,tenantId:D,stsTokenManager:E,createdAt:k,lastLoginAt:T});return q&&Array.isArray(q)&&(I.providerData=q.map(A=>Object.assign({},A))),M&&(I._redirectEventId=M),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new ps;i.updateFromServerResponse(n);const o=new mr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nf(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];re(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?x_(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new ps;l.updateFromIdToken(r);const c=new mr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:s}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new fp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,h),c}}/**
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
 */const ky=new Map;function gr(t){Sr(t instanceof Function,"Expected a class definition");let e=ky.get(t);return e?(Sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ky.set(t,e),e)}/**
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
 */class R_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}R_.type="NONE";const Cy=R_;/**
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
 */function yc(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=yc(this.userKey,i.apiKey,o),this.fullPersistenceKey=yc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ms(gr(Cy),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=i[0]||gr(Cy);const s=yc(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const v=await h._get(s);if(v){const y=mr._fromJSON(e,v);h!==o&&(l=y),o=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new ms(o,e,r):(o=c[0],l&&await o._set(s,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(s)}catch{}})),new ms(o,e,r))}}/**
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
 */function Ay(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(D_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(O_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(M_(e))return"Blackberry";if(V_(e))return"Webos";if(qm(e))return"Safari";if((e.includes("chrome/")||N_(e))&&!e.includes("edge/"))return"Chrome";if(L_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function O_(t=Tt()){return/firefox\//i.test(t)}function qm(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function N_(t=Tt()){return/crios\//i.test(t)}function D_(t=Tt()){return/iemobile/i.test(t)}function L_(t=Tt()){return/android/i.test(t)}function M_(t=Tt()){return/blackberry/i.test(t)}function V_(t=Tt()){return/webos/i.test(t)}function Bf(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SC(t=Tt()){var e;return Bf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kC(){return jS()&&document.documentMode===10}function F_(t=Tt()){return Bf(t)||L_(t)||V_(t)||M_(t)||/windows phone/i.test(t)||D_(t)}function CC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function j_(t,e=[]){let n;switch(t){case"Browser":n=Ay(Tt());break;case"Worker":n=`${Ay(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ms}/${r}`}/**
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
 */class AC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,l)=>{try{const c=e(o);s(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function PC(t,e={}){return Nr(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
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
 */const xC=6;class RC{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:xC,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(s=c.containsNumericCharacter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class OC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Py(this),this.idTokenSubscription=new Py(this),this.beforeStateQueue=new AC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=S_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await P_(this,{idToken:e}),r=await mr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nf(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(yr(this));const n=e?rn(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PC(this),n=new RC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gr(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[gr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{s=!0,c()}}else{const c=e.addObserver(n);return()=>{s=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=j_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dr(t){return rn(t)}class Py{constructor(e){this.auth=e,this.observer=null,this.addObserver=GS(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NC(t){zf=t}function U_(t){return zf.loadJS(t)}function DC(){return zf.recaptchaEnterpriseScript}function LC(){return zf.gapiScript}function MC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const VC="recaptcha-enterprise",FC="NO_RECAPTCHA";class jC{constructor(e){this.type=VC,this.auth=Dr(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,l)=>{gC(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new mC(c);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,s(h.siteKey)}}).catch(c=>{l(c)})})}function i(o,s,l){const c=window.grecaptcha;by(c)?c.enterprise.ready(()=>{c.enterprise.execute(o,{action:e}).then(h=>{s(h)}).catch(()=>{s(FC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(l=>{if(!n&&by(window.grecaptcha))i(l,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let c=DC();c.length!==0&&(c+=l),U_(c).then(()=>{i(l,o,s)}).catch(h=>{s(h)})}}).catch(l=>{s(l)})})}}async function xy(t,e,n,r=!1){const i=new jC(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function rf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await xy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await xy(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
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
 */function UC(t,e){const n=jm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Zc(o,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function BC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zC(t,e,n){const r=Dr(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=B_(e),{host:s,port:l}=$C(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),HC()}function B_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $C(t){const e=B_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ry(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Ry(s)}}}function Ry(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Gm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,n){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}async function WC(t,e){return Nr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function qC(t,e){return Nl(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}async function GC(t,e){return Nr(t,"POST","/v1/accounts:sendOobCode",Or(t,e))}async function KC(t,e){return GC(t,e)}/**
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
 */async function QC(t,e){return Nl(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function YC(t,e){return Nl(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
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
 */class cl extends Gm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new cl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new cl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rf(e,n,"signInWithPassword",qC);case"emailLink":return QC(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rf(e,r,"signUpPassword",WC);case"emailLink":return YC(e,{idToken:n,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gs(t,e){return Nl(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
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
 */const XC="http://localhost";class ho extends Gm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ho(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Bm(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ho(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:XC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rl(n)}return e}}/**
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
 */function JC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZC(t){const e=Sa(ka(t)).link,n=e?Sa(ka(e)).deep_link_id:null,r=Sa(ka(t)).deep_link_id;return(r?Sa(ka(r)).link:null)||r||n||e||t}class Km{constructor(e){var n,r,i,o,s,l;const c=Sa(ka(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,v=(r=c.oobCode)!==null&&r!==void 0?r:null,y=JC((i=c.mode)!==null&&i!==void 0?i:null);re(h&&v&&y,"argument-error"),this.apiKey=h,this.operation=y,this.code=v,this.continueUrl=(o=c.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=c.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ZC(e);try{return new Km(n)}catch{return null}}}/**
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
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return cl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Km.parseLink(n);return re(r,"argument-error"),cl._fromEmailAndCode(e,r.code,r.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Dl extends Qm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ei extends Dl{constructor(){super("facebook.com")}static credential(e){return ho._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
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
 */class fr extends Dl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ho._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
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
 */class ti extends Dl{constructor(){super("github.com")}static credential(e){return ho._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
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
 */class ni extends Dl{constructor(){super("twitter.com")}static credential(e,n){return ho._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ni.credential(n,r)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
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
 */async function eA(t,e){return Nl(t,"POST","/v1/accounts:signUp",Or(t,e))}/**
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
 */class po{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await mr._fromIdTokenResponse(e,r,i),s=Oy(r);return new po({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Oy(r);return new po({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Oy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class of extends Rr{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,of.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new of(e,n,r,i)}}function z_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?of._fromErrorAndOperation(t,o,e,r):o})}async function tA(t,e,n=!1){const r=await ul(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return po._forOperation(t,"link",r)}/**
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
 */async function nA(t,e,n=!1){const{auth:r}=t;if(xn(r.app))return Promise.reject(yr(r));const i="reauthenticate";try{const o=await ul(t,z_(r,i,e,t),n);re(o.idToken,r,"internal-error");const s=Wm(o.idToken);re(s,r,"internal-error");const{sub:l}=s;return re(t.uid===l,r,"user-mismatch"),po._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),o}}/**
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
 */async function $_(t,e,n=!1){if(xn(t.app))return Promise.reject(yr(t));const r="signIn",i=await z_(t,r,e),o=await po._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function rA(t,e){return $_(Dr(t),e)}/**
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
 */async function H_(t){const e=Dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iA(t,e,n){const r=Dr(t);await rf(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",KC)}async function oA(t,e,n){if(xn(t.app))return Promise.reject(yr(t));const r=Dr(t),s=await rf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&H_(t),c}),l=await po._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(l.user),l}function sA(t,e,n){return xn(t.app)?Promise.reject(yr(t)):rA(rn(t),Vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&H_(t),r})}function aA(t,e,n,r){return rn(t).onIdTokenChanged(e,n,r)}function lA(t,e,n){return rn(t).beforeAuthStateChanged(e,n)}function Ym(t,e,n,r){return rn(t).onAuthStateChanged(e,n,r)}function uA(t){return rn(t).signOut()}const sf="__sak";/**
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
 */class W_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sf,"1"),this.storage.removeItem(sf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function cA(){const t=Tt();return qm(t)||Bf(t)}const fA=1e3,dA=10;class q_ extends W_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cA()&&CC(),this.fallbackToPolling=F_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,l,c)=>{this.notifyListeners(s,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);kC()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}q_.type="LOCAL";const hA=q_;/**
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
 */class G_ extends W_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}G_.type="SESSION";const K_=G_;/**
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
 */function pA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $f{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $f(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(s).map(async h=>h(n.origin,o)),c=await pA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$f.receivers=[];/**
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
 */function Xm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class mA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,c)=>{const h=Xm("",20);i.port1.start();const v=setTimeout(()=>{c(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(y){const _=y;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(v),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(_.data.response);break;default:clearTimeout(v),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Yn(){return window}function gA(t){Yn().location.href=t}/**
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
 */function Q_(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function vA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wA(){return Q_()?self:null}/**
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
 */const Y_="firebaseLocalStorageDb",_A=1,af="firebaseLocalStorage",X_="fbase_key";class Ll{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hf(t,e){return t.transaction([af],e?"readwrite":"readonly").objectStore(af)}function EA(){const t=indexedDB.deleteDatabase(Y_);return new Ll(t).toPromise()}function dp(){const t=indexedDB.open(Y_,_A);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(af,{keyPath:X_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(af)?e(r):(r.close(),await EA(),e(await dp()))})})}async function Ny(t,e,n){const r=Hf(t,!0).put({[X_]:e,value:n});return new Ll(r).toPromise()}async function TA(t,e){const n=Hf(t,!1).get(e),r=await new Ll(n).toPromise();return r===void 0?null:r.value}function Dy(t,e){const n=Hf(t,!0).delete(e);return new Ll(n).toPromise()}const IA=800,bA=3;class J_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Q_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$f._getInstance(wA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vA(),!this.activeServiceWorker)return;this.sender=new mA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dp();return await Ny(e,sf,"1"),await Dy(e,sf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ny(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Hf(i,!1).getAll();return new Ll(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}J_.type="LOCAL";const SA=J_;new Ol(3e4,6e4);/**
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
 */function Z_(t,e){return e?gr(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Jm extends Gm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kA(t){return $_(t.auth,new Jm(t),t.bypassAuthState)}function CA(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),nA(n,new Jm(t),t.bypassAuthState)}async function AA(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),tA(n,new Jm(t),t.bypassAuthState)}/**
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
 */class e2{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:l}=e;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kA;case"linkViaPopup":case"linkViaRedirect":return AA;case"reauthViaPopup":case"reauthViaRedirect":return CA;default:wn(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PA=new Ol(2e3,1e4);async function xA(t,e,n){if(xn(t.app))return Promise.reject(Ln(t,"operation-not-supported-in-this-environment"));const r=Dr(t);aC(t,e,Qm);const i=Z_(r,n);return new Yi(r,"signInViaPopup",e,i).executeNotNull()}class Yi extends e2{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Yi.currentPopupAction&&Yi.currentPopupAction.cancel(),Yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=Xm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PA.get())};e()}}Yi.currentPopupAction=null;/**
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
 */const RA="pendingRedirect",wc=new Map;class OA extends e2{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wc.get(this.auth._key());if(!e){try{const r=await NA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wc.set(this.auth._key(),e)}return this.bypassAuthState||wc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NA(t,e){const n=MA(e),r=LA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function DA(t,e){wc.set(t._key(),e)}function LA(t){return gr(t._redirectPersistence)}function MA(t){return yc(RA,t.config.apiKey,t.name)}async function VA(t,e,n=!1){if(xn(t.app))return Promise.reject(yr(t));const r=Dr(t),i=Z_(r,e),s=await new OA(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const FA=10*60*1e3;class jA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!t2(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ly(e))}saveEventToCache(e){this.cachedEventUids.add(Ly(e)),this.lastProcessedEventTime=Date.now()}}function Ly(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function t2({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return t2(t);default:return!1}}/**
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
 */async function BA(t,e={}){return Nr(t,"GET","/v1/projects",e)}/**
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
 */const zA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$A=/^https?/;async function HA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BA(t);for(const n of e)try{if(WA(n))return}catch{}wn(t,"unauthorized-domain")}function WA(t){const e=cp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!$A.test(n))return!1;if(zA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const qA=new Ol(3e4,6e4);function My(){const t=Yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GA(t){return new Promise((e,n)=>{var r,i,o;function s(){My(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{My(),n(Ln(t,"network-request-failed"))},timeout:qA.get()})}if(!((i=(r=Yn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Yn().gapi)===null||o===void 0)&&o.load)s();else{const l=MC("iframefcb");return Yn()[l]=()=>{gapi.load?s():n(Ln(t,"network-request-failed"))},U_(`${LC()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw _c=null,e})}let _c=null;function KA(t){return _c=_c||GA(t),_c}/**
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
 */const QA=new Ol(5e3,15e3),YA="__/auth/iframe",XA="emulator/auth/iframe",JA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eP(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hm(e,XA):`https://${t.config.authDomain}/${YA}`,r={apiKey:e.apiKey,appName:t.name,v:Ms},i=ZA.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Rl(r).slice(1)}`}async function tP(t){const e=await KA(t),n=Yn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:eP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JA,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Ln(t,"network-request-failed"),l=Yn().setTimeout(()=>{o(s)},QA.get());function c(){Yn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{o(s)})}))}/**
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
 */const nP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rP=500,iP=600,oP="_blank",sP="http://localhost";class Vy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aP(t,e,n,r=rP,i=iP){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},nP),{width:r.toString(),height:i.toString(),top:o,left:s}),h=Tt().toLowerCase();n&&(l=N_(h)?oP:n),O_(h)&&(e=e||sP,c.scrollbars="yes");const v=Object.entries(c).reduce((_,[x,O])=>`${_}${x}=${O},`,"");if(SC(h)&&l!=="_self")return lP(e||"",l),new Vy(null);const y=window.open(e||"",l,v);re(y,t,"popup-blocked");try{y.focus()}catch{}return new Vy(y)}function lP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uP="__/auth/handler",cP="emulator/auth/handler",fP=encodeURIComponent("fac");async function Fy(t,e,n,r,i,o){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ms,eventId:i};if(e instanceof Qm){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",qS(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,y]of Object.entries({}))s[v]=y}if(e instanceof Dl){const v=e.getScopes().filter(y=>y!=="");v.length>0&&(s.scopes=v.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const v of Object.keys(l))l[v]===void 0&&delete l[v];const c=await t._getAppCheckToken(),h=c?`#${fP}=${encodeURIComponent(c)}`:"";return`${dP(t)}?${Rl(l).slice(1)}${h}`}function dP({config:t}){return t.emulator?Hm(t,cP):`https://${t.authDomain}/${uP}`}/**
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
 */const th="webStorageSupport";class hP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=K_,this._completeRedirectFn=VA,this._overrideRedirectResult=DA}async _openPopup(e,n,r,i){var o;Sr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Fy(e,n,r,cp(),i);return aP(e,s,Xm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Fy(e,n,r,cp(),i);return gA(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Sr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tP(e),r=new jA(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(th,{type:th},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[th];s!==void 0&&n(!!s),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return F_()||qm()||Bf()}}const pP=hP;var jy="@firebase/auth",Uy="1.7.4";/**
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
 */class mP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vP(t){ks(new co("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=r.options;re(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j_(t)},h=new OC(r,i,o,c);return BC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ks(new co("auth-internal",e=>{const n=Dr(e.getProvider("auth").getImmediate());return(r=>new mP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gi(jy,Uy,gP(t)),gi(jy,Uy,"esm2017")}/**
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
 */const yP=5*60,wP=v_("authIdTokenMaxAge")||yP;let By=null;const _P=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wP)return;const i=n==null?void 0:n.token;By!==i&&(By=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zm(t=E_()){const e=jm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UC(t,{popupRedirectResolver:pP,persistence:[SA,hA,K_]}),r=v_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=_P(o.toString());lA(n,s,()=>s(n.currentUser)),aA(n,l=>s(l))}}const i=m_("auth");return i&&zC(n,`http://${i}`),n}function EP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Ln("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",EP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vP("Browser");/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fl.apply(this,arguments)}var oi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(oi||(oi={}));const zy="popstate";function TP(t){t===void 0&&(t={});function e(i,o){let{pathname:s="/",search:l="",hash:c=""}=To(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),hp("",{pathname:s,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let c=i.location.href,h=c.indexOf("#");l=h===-1?c:c.slice(0,h)}return l+"#"+(typeof o=="string"?o:n2(o))}function r(i,o){eg(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return bP(e,n,r,t)}function nt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function eg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IP(){return Math.random().toString(36).substr(2,8)}function $y(t,e){return{usr:t.state,key:t.key,idx:e}}function hp(t,e,n,r){return n===void 0&&(n=null),fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?To(e):e,{state:n,key:e&&e.key||r||IP()})}function n2(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function To(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function bP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=oi.Pop,c=null,h=v();h==null&&(h=0,s.replaceState(fl({},s.state,{idx:h}),""));function v(){return(s.state||{idx:null}).idx}function y(){l=oi.Pop;let M=v(),k=M==null?null:M-h;h=M,c&&c({action:l,location:D.location,delta:k})}function _(M,k){l=oi.Push;let T=hp(D.location,M,k);n&&n(T,M),h=v()+1;let C=$y(T,h),V=D.createHref(T);try{s.pushState(C,"",V)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(V)}o&&c&&c({action:l,location:D.location,delta:1})}function x(M,k){l=oi.Replace;let T=hp(D.location,M,k);n&&n(T,M),h=v();let C=$y(T,h),V=D.createHref(T);s.replaceState(C,"",V),o&&c&&c({action:l,location:D.location,delta:0})}function O(M){let k=i.location.origin!=="null"?i.location.origin:i.location.href,T=typeof M=="string"?M:n2(M);return T=T.replace(/ $/,"%20"),nt(k,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,k)}let D={get action(){return l},get location(){return t(i,s)},listen(M){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(zy,y),c=M,()=>{i.removeEventListener(zy,y),c=null}},createHref(M){return e(i,M)},createURL:O,encodeLocation(M){let k=O(M);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:_,replace:x,go(M){return s.go(M)}};return D}var Hy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Hy||(Hy={}));function SP(t,e,n){return n===void 0&&(n="/"),kP(t,e,n,!1)}function kP(t,e,n,r){let i=typeof e=="string"?To(e):e,o=o2(i.pathname||"/",n);if(o==null)return null;let s=r2(t);CP(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let h=FP(o);l=MP(s[c],h,r)}return l}function r2(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(nt(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let h=no([r,c.relativePath]),v=n.concat(c);o.children&&o.children.length>0&&(nt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),r2(o.children,e,v,h)),!(o.path==null&&!o.index)&&e.push({path:h,score:DP(h,o.index),routesMeta:v})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of i2(o.path))i(o,s,c)}),e}function i2(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=i2(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function CP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AP=/^:[\w-]+$/,PP=3,xP=2,RP=1,OP=10,NP=-2,Wy=t=>t==="*";function DP(t,e){let n=t.split("/"),r=n.length;return n.some(Wy)&&(r+=NP),e&&(r+=xP),n.filter(i=>!Wy(i)).reduce((i,o)=>i+(AP.test(o)?PP:o===""?RP:OP),r)}function LP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function MP(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],h=l===r.length-1,v=o==="/"?e:e.slice(o.length)||"/",y=qy({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},v),_=c.route;if(!y&&h&&n&&!r[r.length-1].route.index&&(y=qy({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},v)),!y)return null;Object.assign(i,y.params),s.push({params:i,pathname:no([o,y.pathname]),pathnameBase:HP(no([o,y.pathnameBase])),route:_}),y.pathnameBase!=="/"&&(o=no([o,y.pathnameBase]))}return s}function qy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=VP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,v,y)=>{let{paramName:_,isOptional:x}=v;if(_==="*"){let D=l[y]||"";s=o.slice(0,o.length-D.length).replace(/(.)\/+$/,"$1")}const O=l[y];return x&&!O?h[_]=void 0:h[_]=(O||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:s,pattern:t}}function VP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),eg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function FP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return eg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function o2(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function jP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?To(t):t;return{pathname:n?n.startsWith("/")?n:UP(n,e):e,search:WP(r),hash:qP(i)}}function UP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function nh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function BP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function zP(t,e){let n=BP(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $P(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=To(t):(i=fl({},t),nt(!i.pathname||!i.pathname.includes("?"),nh("?","pathname","search",i)),nt(!i.pathname||!i.pathname.includes("#"),nh("#","pathname","hash",i)),nt(!i.search||!i.search.includes("#"),nh("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let y=e.length-1;if(!r&&s.startsWith("..")){let _=s.split("/");for(;_[0]==="..";)_.shift(),y-=1;i.pathname=_.join("/")}l=y>=0?e[y]:"/"}let c=jP(i,l),h=s&&s!=="/"&&s.endsWith("/"),v=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(h||v)&&(c.pathname+="/"),c}const no=t=>t.join("/").replace(/\/\/+/g,"/"),HP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),WP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function GP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const s2=["post","put","patch","delete"];new Set(s2);const KP=["get",...s2];new Set(KP);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dl(){return dl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dl.apply(this,arguments)}const tg=X.createContext(null),QP=X.createContext(null),Wf=X.createContext(null),qf=X.createContext(null),Fs=X.createContext({outlet:null,matches:[],isDataRoute:!1}),a2=X.createContext(null);function Gf(){return X.useContext(qf)!=null}function l2(){return Gf()||nt(!1),X.useContext(qf).location}function u2(t){X.useContext(Wf).static||X.useLayoutEffect(t)}function c2(){let{isDataRoute:t}=X.useContext(Fs);return t?lx():YP()}function YP(){Gf()||nt(!1);let t=X.useContext(tg),{basename:e,future:n,navigator:r}=X.useContext(Wf),{matches:i}=X.useContext(Fs),{pathname:o}=l2(),s=JSON.stringify(zP(i,n.v7_relativeSplatPath)),l=X.useRef(!1);return u2(()=>{l.current=!0}),X.useCallback(function(h,v){if(v===void 0&&(v={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let y=$P(h,JSON.parse(s),o,v.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:no([e,y.pathname])),(v.replace?r.replace:r.push)(y,v.state,v)},[e,r,s,o,t])}function XP(t,e){return JP(t,e)}function JP(t,e,n,r){Gf()||nt(!1);let{navigator:i}=X.useContext(Wf),{matches:o}=X.useContext(Fs),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let h=l2(),v;if(e){var y;let M=typeof e=="string"?To(e):e;c==="/"||(y=M.pathname)!=null&&y.startsWith(c)||nt(!1),v=M}else v=h;let _=v.pathname||"/",x=_;if(c!=="/"){let M=c.replace(/^\//,"").split("/");x="/"+_.replace(/^\//,"").split("/").slice(M.length).join("/")}let O=SP(t,{pathname:x}),D=rx(O&&O.map(M=>Object.assign({},M,{params:Object.assign({},l,M.params),pathname:no([c,i.encodeLocation?i.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?c:no([c,i.encodeLocation?i.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),o,n,r);return e&&D?X.createElement(qf.Provider,{value:{location:dl({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:oi.Pop}},D):D}function ZP(){let t=ax(),e=GP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),n?X.createElement("pre",{style:i},n):null,null)}const ex=X.createElement(ZP,null);class tx extends X.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?X.createElement(Fs.Provider,{value:this.props.routeContext},X.createElement(a2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nx(t){let{routeContext:e,match:n,children:r}=t,i=X.useContext(tg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),X.createElement(Fs.Provider,{value:e},r)}function rx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let v=s.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);v>=0||nt(!1),s=s.slice(0,Math.min(s.length,v+1))}let c=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let v=0;v<s.length;v++){let y=s[v];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=v),y.route.id){let{loaderData:_,errors:x}=n,O=y.route.loader&&_[y.route.id]===void 0&&(!x||x[y.route.id]===void 0);if(y.route.lazy||O){c=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((v,y,_)=>{let x,O=!1,D=null,M=null;n&&(x=l&&y.route.id?l[y.route.id]:void 0,D=y.route.errorElement||ex,c&&(h<0&&_===0?(O=!0,M=null):h===_&&(O=!0,M=y.route.hydrateFallbackElement||null)));let k=e.concat(s.slice(0,_+1)),T=()=>{let C;return x?C=D:O?C=M:y.route.Component?C=X.createElement(y.route.Component,null):y.route.element?C=y.route.element:C=v,X.createElement(nx,{match:y,routeContext:{outlet:v,matches:k,isDataRoute:n!=null},children:C})};return n&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?X.createElement(tx,{location:n.location,revalidation:n.revalidation,component:D,error:x,children:T(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):T()},null)}var f2=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(f2||{}),lf=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(lf||{});function ix(t){let e=X.useContext(tg);return e||nt(!1),e}function ox(t){let e=X.useContext(QP);return e||nt(!1),e}function sx(t){let e=X.useContext(Fs);return e||nt(!1),e}function d2(t){let e=sx(),n=e.matches[e.matches.length-1];return n.route.id||nt(!1),n.route.id}function ax(){var t;let e=X.useContext(a2),n=ox(lf.UseRouteError),r=d2(lf.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function lx(){let{router:t}=ix(f2.UseNavigateStable),e=d2(lf.UseNavigateStable),n=X.useRef(!1);return u2(()=>{n.current=!0}),X.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,dl({fromRouteId:e},o)))},[t,e])}function Ec(t){nt(!1)}function ux(t){let{basename:e="/",children:n=null,location:r,navigationType:i=oi.Pop,navigator:o,static:s=!1,future:l}=t;Gf()&&nt(!1);let c=e.replace(/^\/*/,"/"),h=X.useMemo(()=>({basename:c,navigator:o,static:s,future:dl({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=To(r));let{pathname:v="/",search:y="",hash:_="",state:x=null,key:O="default"}=r,D=X.useMemo(()=>{let M=o2(v,c);return M==null?null:{location:{pathname:M,search:y,hash:_,state:x,key:O},navigationType:i}},[c,v,y,_,x,O,i]);return D==null?null:X.createElement(Wf.Provider,{value:h},X.createElement(qf.Provider,{children:n,value:D}))}function cx(t){let{children:e,location:n}=t;return XP(pp(e),n)}new Promise(()=>{});function pp(t,e){e===void 0&&(e=[]);let n=[];return X.Children.forEach(t,(r,i)=>{if(!X.isValidElement(r))return;let o=[...e,i];if(r.type===X.Fragment){n.push.apply(n,pp(r.props.children,o));return}r.type!==Ec&&nt(!1),!r.props.index||!r.props.children||nt(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=pp(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const fx="6";try{window.__reactRouterVersion=fx}catch{}const dx="startTransition",Gy=pI[dx];function hx(t){let{basename:e,children:n,future:r,window:i}=t,o=X.useRef();o.current==null&&(o.current=TP({window:i,v5Compat:!0}));let s=o.current,[l,c]=X.useState({action:s.action,location:s.location}),{v7_startTransition:h}=r||{},v=X.useCallback(y=>{h&&Gy?Gy(()=>c(y)):c(y)},[c,h]);return X.useLayoutEffect(()=>s.listen(v),[s,v]),X.createElement(ux,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}var Ky;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ky||(Ky={}));var Qy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Qy||(Qy={}));const Yy="data:image/svg+xml,%3csvg%20width='10'%20height='6'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20stroke='%23686868'%20stroke-width='1.5'%20fill='none'%20d='m1%201%204%204%204-4'/%3e%3c/svg%3e",mp="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024.00%2024.00'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='%23000000'%20stroke='%23000000'%20stroke-width='0.00024000000000000003'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.672'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cdefs%3e%3cpath%20id='download-a'%20d='M4.29289322,1.70710678%20C3.90236893,1.31658249%203.90236893,0.683417511%204.29289322,0.292893219%20C4.68341751,-0.0976310729%205.31658249,-0.0976310729%205.70710678,0.292893219%20L7.70710678,2.29289322%20C8.09763107,2.68341751%208.09763107,3.31658249%207.70710678,3.70710678%20C7.31658249,4.09763107%206.68341751,4.09763107%206.29289322,3.70710678%20L4.29289322,1.70710678%20Z%20M0,8%20L16,8%20L16,10%20L0,10%20L0,8%20Z'/%3e%3cpath%20id='download-c'%20d='M11,9.58578644%20L13.2928932,7.29289322%20C13.6834175,6.90236893%2014.3165825,6.90236893%2014.7071068,7.29289322%20C15.0976311,7.68341751%2015.0976311,8.31658249%2014.7071068,8.70710678%20L10.7071068,12.7071068%20C10.3165825,13.0976311%209.68341751,13.0976311%209.29289322,12.7071068%20L5.29289322,8.70710678%20C4.90236893,8.31658249%204.90236893,7.68341751%205.29289322,7.29289322%20C5.68341751,6.90236893%206.31658249,6.90236893%206.70710678,7.29289322%20L9,9.58578644%20L9,0.998529185%20C9,0.447056744%209.44771525,-7.95978809e-15%2010,-7.99360578e-15%20C10.5522847,-8.02742346e-15%2011,0.447056744%2011,0.998529185%20L11,9.58578644%20Z%20M18,16%20L18,10%20C18,9.44771525%2018.4477153,9%2019,9%20C19.5522847,9%2020,9.44771525%2020,10%20L20,17%20C20,17.5522847%2019.5522847,18%2019,18%20L1,18%20C0.44771525,18%200,17.5522847%200,17%20L0,10%20C0,9.44771525%200.44771525,9%201,9%20C1.55228475,9%202,9.44771525%202,10%20L2,16%20L18,16%20Z'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%20transform='translate(2%203)'%3e%3cg%20transform='translate(2%206)'%3e%3cmask%20id='download-b'%20fill='%23007bff'%3e%3cuse%20xlink:href='%23download-a'/%3e%3c/mask%3e%3cuse%20fill='%23ffffff'%20fill-rule='nonzero'%20xlink:href='%23download-a'/%3e%3cg%20fill='%23007bff'%20mask='url(%23download-b)'%3e%3crect%20width='24'%20height='24'%20transform='translate(-4%20-9)'/%3e%3c/g%3e%3c/g%3e%3cmask%20id='download-d'%20fill='%23007bff'%3e%3cuse%20xlink:href='%23download-c'/%3e%3c/mask%3e%3cuse%20fill='%23007bff'%20fill-rule='nonzero'%20xlink:href='%23download-c'/%3e%3cg%20fill='%23007bff'%20mask='url(%23download-d)'%3e%3crect%20width='24'%20height='24'%20transform='translate(-2%20-3)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",px="data:image/svg+xml,%3csvg%20width='14'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%203v12a1%201%200%200%201-1%201H1a1%201%200%200%201-1-1V3a1%201%200%200%201%201-1h1V1a1%201%200%201%201%202%200v1h2V1a1%201%200%201%201%202%200v1h2V1a1%201%200%200%201%202%200v1h1a1%201%200%200%201%201%201Zm-2%203H2v1h10V6Zm0%203H2v1h10V9Zm0%203H2v1h10v-1Z'%20fill='%23726CEE'/%3e%3c/svg%3e",mx="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.667%208.667h-4v4h4v-4ZM11.334%200v1.333H4.667V0h-2v1.333h-1C.75%201.333%200%202.083%200%203v11.333C0%2015.25.75%2016%201.667%2016h12.667C15.25%2016%2016%2015.25%2016%2014.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3%2014.333H1.667V5.5h12.667v8.833Z'%20fill='%234BB1DA'/%3e%3c/svg%3e",gx="data:image/svg+xml,%3csvg%20width='13'%20height='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.408%2013.916c-3.313%200-6-1.343-6-3%200-.612.371-1.18%201-1.654V7.916a5%205%200%200%201%203.041-4.6%202%202%200%200%201%203.507-1.664%202%202%200%200%201%20.411%201.664%205.002%205.002%200%200%201%203.041%204.6v1.346c.629.474%201%201.042%201%201.654%200%201.657-2.687%203-6%203Zm0%201c.694%200%201.352-.066%201.984-.16.004.054.016.105.016.16a2%202%200%200%201-4%200c0-.055.012-.106.016-.16.633.094%201.29.16%201.984.16Z'%20fill='%23EDD556'/%3e%3c/svg%3e",vx="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%200a8%208%200%201%201%200%2016A8%208%200%200%201%208%200Zm0%202.133a5.867%205.867%200%201%200%200%2011.734A5.867%205.867%200%200%200%208%202.133ZM8%203.2a4.8%204.8%200%201%201%200%209.6%204.8%204.8%200%200%201%200-9.6Zm-.533%202.667a.533.533%200%200%200-.534.533v2.133c0%20.295.24.534.534.534h3.2a.533.533%200%200%200%200-1.067H8V6.4a.533.533%200%200%200-.533-.533Z'%20fill='%238E4CB6'/%3e%3c/svg%3e";var ng={},h2={exports:{}},yx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",wx=yx,_x=wx;function p2(){}function m2(){}m2.resetWarningCache=p2;var Ex=function(){function t(r,i,o,s,l,c){if(c!==_x){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:m2,resetWarningCache:p2};return n.PropTypes=n,n};h2.exports=Ex();var g2=h2.exports;const ue=zp(g2);Object.defineProperty(ng,"__esModule",{value:!0});var v2=ng.PayPalButton=void 0,rh=rg(X),Tx=rg(f_),ce=rg(g2);function rg(t){return t&&t.__esModule?t:{default:t}}function Tc(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Tc=function(n){return typeof n}:Tc=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Tc(t)}function gp(){return gp=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gp.apply(this,arguments)}function Ix(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bx(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Sx(t,e,n){return e&&bx(t.prototype,e),t}function kx(t,e){return e&&(Tc(e)==="object"||typeof e=="function")?e:Cx(t)}function Cx(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function vp(t){return vp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},vp(t)}function Ax(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&yp(t,e)}function yp(t,e){return yp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},yp(t,e)}function y2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ig=function(t){Ax(e,t);function e(n){var r;return Ix(this,e),r=kx(this,vp(e).call(this,n)),r.state={isSdkReady:!1},r}return Sx(e,[{key:"componentDidMount",value:function(){typeof window<"u"&&window!==void 0&&window.paypal===void 0?this.addPaypalSdk():typeof window<"u"&&window!==void 0&&window.paypal!==void 0&&this.props.onButtonReady&&this.props.onButtonReady()}},{key:"createOrder",value:function(r,i){var o=this.props,s=o.currency,l=o.options,c=o.amount,h=o.shippingPreference;return i.order.create({purchase_units:[{amount:{currency_code:s||(l&&l.currency?l.currency:"USD"),value:c.toString()}}],application_context:{shipping_preference:h}})}},{key:"onApprove",value:function(r,i){var o=this;return i.order.capture().then(function(s){if(o.props.onSuccess)return o.props.onSuccess(s,r)}).catch(function(s){if(o.props.catchError)return o.props.catchError(s)})}},{key:"render",value:function(){var r=this,i=this.props,o=i.amount,s=i.onSuccess,l=i.createOrder,c=i.createSubscription,h=i.onApprove,v=i.style,y=this.state.isSdkReady;if(!y&&(typeof window>"u"||window.paypal===void 0))return null;var _=window.paypal.Buttons.driver("react",{React:rh.default,ReactDOM:Tx.default}),x=o&&!l?function(O,D){return r.createOrder(O,D)}:function(O,D){return l(O,D)};return rh.default.createElement(_,gp({},this.props,{createOrder:c?void 0:x,createSubscription:c,onApprove:s?function(O,D){return r.onApprove(O,D)}:function(O,D){return h(O,D)},style:v}))}},{key:"addPaypalSdk",value:function(){var r=this,i=this.props,o=i.options,s=i.onButtonReady,l=[];Object.keys(o).forEach(function(h){var v=h.split(/(?=[A-Z])/).join("-").toLowerCase();l.push("".concat(v,"=").concat(o[h]))});var c=document.createElement("script");c.type="text/javascript",c.src="https://www.paypal.com/sdk/js?".concat(l.join("&")),c.async=!0,c.onload=function(){r.setState({isSdkReady:!0}),s&&s()},c.onerror=function(){throw new Error("Paypal SDK could not be loaded.")},document.body.appendChild(c)}}]),e}(rh.default.Component);v2=ng.PayPalButton=ig;y2(ig,"propTypes",{amount:ce.default.oneOfType([ce.default.number,ce.default.string]),currency:ce.default.oneOfType([ce.default.number,ce.default.string]),shippingPreference:ce.default.string,onSuccess:ce.default.func,catchError:ce.default.func,onError:ce.default.func,createOrder:ce.default.func,createSubscription:ce.default.func,onApprove:ce.default.func,style:ce.default.object,options:ce.default.shape({clientId:ce.default.string,merchantId:ce.default.string,currency:ce.default.oneOfType([ce.default.number,ce.default.string]),intent:ce.default.string,commit:ce.default.oneOfType([ce.default.bool,ce.default.string]),vault:ce.default.oneOfType([ce.default.bool,ce.default.string]),component:ce.default.string,disableFunding:ce.default.string,disableCard:ce.default.string,integrationDate:ce.default.string,locale:ce.default.string,buyerCountry:ce.default.string,debug:ce.default.oneOfType([ce.default.bool,ce.default.string])}),onButtonReady:ce.default.func});y2(ig,"defaultProps",{style:{},options:{clientId:"sb",currency:"USD"},shippingPreference:"GET_FROM_FILE"});const Px=({setSubscription:t})=>{const[e,n]=X.useState(null),[r,i]=X.useState(!1),o=l=>{n(l),i(!0)},s=()=>{t(e),i(!1)};return U.jsxs("div",{className:"memberships",children:[U.jsx("h3",{children:"Elige tu Membresía"}),U.jsxs("div",{className:"membership",children:[U.jsx("h4",{children:"Premium"}),U.jsx("p",{children:"$1/mes"}),U.jsx("button",{onClick:()=>o("Premium"),children:"Comprar"})]}),U.jsxs("div",{className:"membership",children:[U.jsx("h4",{children:"Gold"}),U.jsx("p",{children:"$3/mes"}),U.jsx("button",{onClick:()=>o("Gold"),children:"Comprar"})]}),U.jsxs("div",{className:"membership",children:[U.jsx("h4",{children:"Diamante"}),U.jsx("p",{children:"$5/mes"}),U.jsx("button",{onClick:()=>o("Diamante"),children:"Comprar"})]}),r&&U.jsx("div",{className:"modal-overlay",children:U.jsxs("div",{className:"modal-content",children:[U.jsx("span",{className:"modal-close",onClick:()=>i(!1),children:"×"}),U.jsx("h3",{children:"Proceder al Pago"}),U.jsxs("p",{children:["Membresía seleccionada: ",e]}),U.jsx(v2,{amount:e==="Premium"?"1.00":e==="Gold"?"3.00":e==="Diamante"?"5.00":"0.00",onSuccess:(l,c)=>{alert("Pago completado por PayPal"),s()},options:{clientId:"AdgxAW2HZC5B-yzBWZKimJnJH8W5r-PwL5_lppQOw1w43p_mlpg5FzCDl2trocXC23YuwZhhjyiJIOEf",disableFunding:"card"}})]})})]})},Xy=Zm(),xx=()=>{const[t,e]=X.useState(!1),[n,r]=X.useState(null),[i,o]=X.useState("Free"),s=c2();X.useEffect(()=>{const v=Ym(Xy,y=>{y?r(y):s("/login")});return()=>v()},[s]);const l=async()=>{try{await uA(Xy),s("/login")}catch(v){console.error("Error al cerrar sesión:",v)}};X.useEffect(()=>{const v=document.querySelector(".nav__hamburguer"),y=document.querySelector(".nav__overlay");let _=y;const x=()=>{v.classList.toggle("nav__hamburguer--open"),y.classList.toggle("nav__overlay--show")},O=T=>{T.preventDefault();const C=T.target;if(D(C,"nav__parent")){const V=C.parentElement.children[1];if(window.innerWidth<768){let z=V.clientHeight===0?V.scrollHeight:0;V.style.height=`${z}px`}else D(V,"nav__inner--show")||M(_),V.classList.toggle("nav__inner--show"),_=V}},D=(T,C)=>T.classList.value.includes(C),M=T=>{D(T,"nav__inner--show")&&T.classList.remove("nav__inner--show")},k=()=>{M(_),window.innerWidth>768&&document.querySelectorAll(".nav__inner").forEach(C=>{C.style.height=""})};return v.addEventListener("click",x),y.addEventListener("click",O),window.addEventListener("resize",k),()=>{v.removeEventListener("click",x),y.removeEventListener("click",O),window.removeEventListener("resize",k)}},[]);const c=()=>{e(!0)},h=()=>{e(!1)};return U.jsxs("div",{children:[U.jsxs("nav",{className:"nav container",children:[U.jsxs("div",{className:"nav__logo",children:[U.jsx("img",{src:mp,className:"nav__img",alt:"logo"}),U.jsx("span",{children:"Drawy"})]}),U.jsx("div",{className:"nav__hamburguer"}),U.jsx("div",{className:"nav__overlay",children:U.jsxs("ul",{className:"nav__menu",children:[U.jsx("li",{className:"nav__item",children:U.jsx("a",{href:"#",className:"nav__link",children:"Home"})}),U.jsx("li",{className:"nav__item",children:U.jsx("a",{href:"#",className:"nav__link",children:"Blog"})}),U.jsxs("li",{className:"nav__item",children:[U.jsxs("span",{className:"nav__parent",children:["Services",U.jsx("img",{src:Yy,className:"nav__arrow",alt:"arrow"})]}),U.jsxs("ul",{className:"nav__inner",children:[U.jsx("li",{className:"nav__dropdown",children:U.jsxs("a",{href:"#",className:"nav__link",children:[U.jsx("img",{src:px,className:"nav__illustration",alt:"todo"}),"Todo List"]})}),U.jsx("li",{className:"nav__dropdown",children:U.jsxs("a",{href:"#",className:"nav__link",children:[U.jsx("img",{src:mx,className:"nav__illustration",alt:"calendar"}),"Calendar"]})}),U.jsx("li",{className:"nav__dropdown",children:U.jsxs("a",{href:"#",className:"nav__link",children:[U.jsx("img",{src:gx,className:"nav__illustration",alt:"reminders"}),"Reminder"]})}),U.jsx("li",{className:"nav__dropdown",children:U.jsxs("a",{href:"#",className:"nav__link",children:[U.jsx("img",{src:vx,className:"nav__illustration",alt:"planning"}),"Planning"]})})]})]}),U.jsxs("li",{className:"nav__item",children:[U.jsxs("span",{className:"nav__parent",children:["Company",U.jsx("img",{src:Yy,className:"nav__arrow",alt:"arrow"})]}),U.jsxs("ul",{className:"nav__inner",children:[U.jsx("li",{className:"nav__dropdown",children:U.jsx("a",{href:"#",className:"nav__link",children:"History"})}),U.jsx("li",{className:"nav__dropdown",children:U.jsx("a",{href:"#",className:"nav__link",children:"Our Team"})}),U.jsx("li",{className:"nav__dropdown",children:U.jsx("a",{href:"#",className:"nav__link",children:"Blog"})})]})]}),U.jsx("li",{className:"nav__item",children:U.jsx("a",{href:"#",className:"nav__link",children:"Careers"})}),U.jsx("li",{className:"nav__item",children:U.jsx("a",{href:"#",className:"nav__link",children:"About"})}),U.jsx("li",{className:"nav__login",children:U.jsx("a",{href:"#",className:"nav__sign",onClick:c,children:"Perfil"})}),U.jsx("li",{className:"nav__login nav__login--border",children:U.jsx("button",{onClick:l,children:"Sign Off"})})]})})]}),t&&U.jsx("div",{className:"modal-overlay",children:U.jsxs("div",{className:"modal-content",children:[U.jsx("span",{className:"modal-close",onClick:h,children:"×"}),U.jsxs("div",{className:"profile",children:[U.jsx("img",{src:mp,alt:"Profile"}),U.jsx("p",{children:(n==null?void 0:n.displayName)||"Usuario"}),U.jsx("p",{children:n==null?void 0:n.email}),U.jsxs("p",{children:["Suscripción: ",i]})]}),U.jsx(Px,{setSubscription:o})]})})]})},Rx=()=>U.jsx(U.Fragment,{children:U.jsx(xx,{})}),Ox=()=>U.jsx(U.Fragment,{children:U.jsx("h1",{children:"ERROR 404"})}),Nx="/drawy-app/assets/Dowload-Bm10PxR3.svg";var w2={exports:{}};/*!
* sweetalert2 v11.12.0
* Released under the MIT License.
*/(function(t,e){(function(n,r){t.exports=r()})(qr,function(){function n(g,u){(u==null||u>g.length)&&(u=g.length);for(var f=0,p=Array(u);f<u;f++)p[f]=g[f];return p}function r(g){if(Array.isArray(g))return g}function i(g){if(Array.isArray(g))return n(g)}function o(g,u,f){if(typeof g=="function"?g===u:g.has(u))return arguments.length<3?u:f;throw new TypeError("Private element is not present on this object")}function s(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function l(g,u,f){return u=T(u),I(g,V()?Reflect.construct(u,f||[],T(g).constructor):u.apply(g,f))}function c(g,u){if(u.has(g))throw new TypeError("Cannot initialize the same private elements twice on an object")}function h(g,u){if(!(g instanceof u))throw new TypeError("Cannot call a class as a function")}function v(g,u){return g.get(o(g,u))}function y(g,u,f){c(g,u),u.set(g,f)}function _(g,u,f){return g.set(o(g,u),f),f}function x(g,u,f){if(V())return Reflect.construct.apply(null,arguments);var p=[null];p.push.apply(p,u);var b=new(g.bind.apply(g,p));return b}function O(g,u){for(var f=0;f<u.length;f++){var p=u[f];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(g,Jn(p.key),p)}}function D(g,u,f){return u&&O(g.prototype,u),Object.defineProperty(g,"prototype",{writable:!1}),g}function M(g,u){var f=typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(!f){if(Array.isArray(g)||(f=Qt(g))||u){f&&(g=f);var p=0,b=function(){};return{s:b,n:function(){return p>=g.length?{done:!0}:{done:!1,value:g[p++]}},e:function(se){throw se},f:b}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var B,Q=!0,ae=!1;return{s:function(){f=f.call(g)},n:function(){var se=f.next();return Q=se.done,se},e:function(se){ae=!0,B=se},f:function(){try{Q||f.return==null||f.return()}finally{if(ae)throw B}}}}function k(){return k=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(g,u,f){var p=L(g,u);if(p){var b=Object.getOwnPropertyDescriptor(p,u);return b.get?b.get.call(arguments.length<3?g:f):b.value}},k.apply(null,arguments)}function T(g){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},T(g)}function C(g,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(u&&u.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),Object.defineProperty(g,"prototype",{writable:!1}),u&&A(g,u)}function V(){try{var g=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(V=function(){return!!g})()}function z(g){if(typeof Symbol<"u"&&g[Symbol.iterator]!=null||g["@@iterator"]!=null)return Array.from(g)}function q(g,u){var f=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(f!=null){var p,b,B,Q,ae=[],se=!0,Ue=!1;try{if(B=(f=f.call(g)).next,u!==0)for(;!(se=(p=B.call(f)).done)&&(ae.push(p.value),ae.length!==u);se=!0);}catch(ua){Ue=!0,b=ua}finally{try{if(!se&&f.return!=null&&(Q=f.return(),Object(Q)!==Q))return}finally{if(Ue)throw b}}return ae}}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(g,u){if(u&&(typeof u=="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return s(g)}function A(g,u){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(f,p){return f.__proto__=p,f},A(g,u)}function R(g,u){return r(g)||q(g,u)||Qt(g,u)||S()}function L(g,u){for(;!{}.hasOwnProperty.call(g,u)&&(g=T(g))!==null;);return g}function P(g){return i(g)||z(g)||Qt(g)||E()}function Ut(g,u){if(typeof g!="object"||!g)return g;var f=g[Symbol.toPrimitive];if(f!==void 0){var p=f.call(g,u);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}function Jn(g){var u=Ut(g,"string");return typeof u=="symbol"?u:u+""}function De(g){"@babel/helpers - typeof";return De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},De(g)}function Qt(g,u){if(g){if(typeof g=="string")return n(g,u);var f={}.toString.call(g).slice(8,-1);return f==="Object"&&g.constructor&&(f=g.constructor.name),f==="Map"||f==="Set"?Array.from(g):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?n(g,u):void 0}}var Y=100,G={},oe=function(){G.previousActiveElement instanceof HTMLElement?(G.previousActiveElement.focus(),G.previousActiveElement=null):document.body&&document.body.focus()},Ce=function(u){return new Promise(function(f){if(!u)return f();var p=window.scrollX,b=window.scrollY;G.restoreFocusTimeout=setTimeout(function(){oe(),f()},Y),window.scrollTo(p,b)})},_e="swal2-",Le=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],F=Le.reduce(function(g,u){return g[u]=_e+u,g},{}),_n=["success","warning","info","question","error"],Bt=_n.reduce(function(g,u){return g[u]=_e+u,g},{}),ln="SweetAlert2:",zs=function(u){return u.charAt(0).toUpperCase()+u.slice(1)},It=function(u){console.warn("".concat(ln," ").concat(De(u)==="object"?u.join(" "):u))},un=function(u){console.error("".concat(ln," ").concat(u))},Ai=[],$s=function(u){Ai.includes(u)||(Ai.push(u),It(u))},bo=function(u){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$s('"'.concat(u,'" is deprecated and will be removed in the next major release.').concat(f?' Use "'.concat(f,'" instead.'):""))},Mr=function(u){return typeof u=="function"?u():u},Pi=function(u){return u&&typeof u.toPromise=="function"},Vr=function(u){return Pi(u)?u.toPromise():Promise.resolve(u)},Hs=function(u){return u&&Promise.resolve(u)===u},bt=function(){return document.body.querySelector(".".concat(F.container))},Fr=function(u){var f=bt();return f?f.querySelector(u):null},dt=function(u){return Fr(".".concat(u))},ve=function(){return dt(F.popup)},xi=function(){return dt(F.icon)},Ws=function(){return dt(F["icon-content"])},So=function(){return dt(F.title)},ko=function(){return dt(F["html-container"])},Qe=function(){return dt(F.image)},Ye=function(){return dt(F["progress-steps"])},Zn=function(){return dt(F["validation-message"])},Yt=function(){return Fr(".".concat(F.actions," .").concat(F.confirm))},er=function(){return Fr(".".concat(F.actions," .").concat(F.cancel))},tr=function(){return Fr(".".concat(F.actions," .").concat(F.deny))},Ri=function(){return dt(F["input-label"])},nr=function(){return Fr(".".concat(F.loader))},jr=function(){return dt(F.actions)},Co=function(){return dt(F.footer)},Ao=function(){return dt(F["timer-progress-bar"])},qs=function(){return dt(F.close)},Gs=`
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
`,Po=function(){var u=ve();if(!u)return[];var f=u.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),p=Array.from(f).sort(function(Q,ae){var se=parseInt(Q.getAttribute("tabindex")||"0"),Ue=parseInt(ae.getAttribute("tabindex")||"0");return se>Ue?1:se<Ue?-1:0}),b=u.querySelectorAll(Gs),B=Array.from(b).filter(function(Q){return Q.getAttribute("tabindex")!=="-1"});return P(new Set(p.concat(B))).filter(function(Q){return Xe(Q)})},xo=function(){return pt(document.body,F.shown)&&!pt(document.body,F["toast-shown"])&&!pt(document.body,F["no-backdrop"])},Vn=function(){var u=ve();return u?pt(u,F.toast):!1},Ks=function(){var u=ve();return u?u.hasAttribute("data-loading"):!1},ht=function(u,f){if(u.textContent="",f){var p=new DOMParser,b=p.parseFromString(f,"text/html"),B=b.querySelector("head");B&&Array.from(B.childNodes).forEach(function(ae){u.appendChild(ae)});var Q=b.querySelector("body");Q&&Array.from(Q.childNodes).forEach(function(ae){ae instanceof HTMLVideoElement||ae instanceof HTMLAudioElement?u.appendChild(ae.cloneNode(!0)):u.appendChild(ae)})}},pt=function(u,f){if(!f)return!1;for(var p=f.split(/\s+/),b=0;b<p.length;b++)if(!u.classList.contains(p[b]))return!1;return!0},$l=function(u,f){Array.from(u.classList).forEach(function(p){!Object.values(F).includes(p)&&!Object.values(Bt).includes(p)&&!Object.values(f.showClass||{}).includes(p)&&u.classList.remove(p)})},mt=function(u,f,p){if($l(u,f),f.customClass&&f.customClass[p]){if(typeof f.customClass[p]!="string"&&!f.customClass[p].forEach){It("Invalid type of customClass.".concat(p,'! Expected string or iterable object, got "').concat(De(f.customClass[p]),'"'));return}ne(u,f.customClass[p])}},Oi=function(u,f){if(!f)return null;switch(f){case"select":case"textarea":case"file":return u.querySelector(".".concat(F.popup," > .").concat(F[f]));case"checkbox":return u.querySelector(".".concat(F.popup," > .").concat(F.checkbox," input"));case"radio":return u.querySelector(".".concat(F.popup," > .").concat(F.radio," input:checked"))||u.querySelector(".".concat(F.popup," > .").concat(F.radio," input:first-child"));case"range":return u.querySelector(".".concat(F.popup," > .").concat(F.range," input"));default:return u.querySelector(".".concat(F.popup," > .").concat(F.input))}},Ur=function(u){if(u.focus(),u.type!=="file"){var f=u.value;u.value="",u.value=f}},Qs=function(u,f,p){!u||!f||(typeof f=="string"&&(f=f.split(/\s+/).filter(Boolean)),f.forEach(function(b){Array.isArray(u)?u.forEach(function(B){p?B.classList.add(b):B.classList.remove(b)}):p?u.classList.add(b):u.classList.remove(b)}))},ne=function(u,f){Qs(u,f,!0)},Xt=function(u,f){Qs(u,f,!1)},zt=function(u,f){for(var p=Array.from(u.children),b=0;b<p.length;b++){var B=p[b];if(B instanceof HTMLElement&&pt(B,f))return B}},Jt=function(u,f,p){p==="".concat(parseInt(p))&&(p=parseInt(p)),p||parseInt(p)===0?u.style.setProperty(f,typeof p=="number"?"".concat(p,"px"):p):u.style.removeProperty(f)},We=function(u){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";u&&(u.style.display=f)},it=function(u){u&&(u.style.display="none")},Fn=function(u){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";u&&new MutationObserver(function(){Ni(u,u.innerHTML,f)}).observe(u,{childList:!0,subtree:!0})},Hl=function(u,f,p,b){var B=u.querySelector(f);B&&B.style.setProperty(p,b)},Ni=function(u,f){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";f?We(u,p):it(u)},Xe=function(u){return!!(u&&(u.offsetWidth||u.offsetHeight||u.getClientRects().length))},Wl=function(){return!Xe(Yt())&&!Xe(tr())&&!Xe(er())},Ro=function(u){return u.scrollHeight>u.clientHeight},Di=function(u){var f=window.getComputedStyle(u),p=parseFloat(f.getPropertyValue("animation-duration")||"0"),b=parseFloat(f.getPropertyValue("transition-duration")||"0");return p>0||b>0},cn=function(u){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=Ao();p&&Xe(p)&&(f&&(p.style.transition="none",p.style.width="100%"),setTimeout(function(){p.style.transition="width ".concat(u/1e3,"s linear"),p.style.width="0%"},10))},ql=function(){var u=Ao();if(u){var f=parseInt(window.getComputedStyle(u).width);u.style.removeProperty("transition"),u.style.width="100%";var p=parseInt(window.getComputedStyle(u).width),b=f/p*100;u.style.width="".concat(b,"%")}},Ys=function(){return typeof window>"u"||typeof document>"u"},Xs=`
 <div aria-labelledby="`.concat(F.title,'" aria-describedby="').concat(F["html-container"],'" class="').concat(F.popup,`" tabindex="-1">
   <button type="button" class="`).concat(F.close,`"></button>
   <ul class="`).concat(F["progress-steps"],`"></ul>
   <div class="`).concat(F.icon,`"></div>
   <img class="`).concat(F.image,`" />
   <h2 class="`).concat(F.title,'" id="').concat(F.title,`"></h2>
   <div class="`).concat(F["html-container"],'" id="').concat(F["html-container"],`"></div>
   <input class="`).concat(F.input,'" id="').concat(F.input,`" />
   <input type="file" class="`).concat(F.file,`" />
   <div class="`).concat(F.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(F.select,'" id="').concat(F.select,`"></select>
   <div class="`).concat(F.radio,`"></div>
   <label class="`).concat(F.checkbox,`">
     <input type="checkbox" id="`).concat(F.checkbox,`" />
     <span class="`).concat(F.label,`"></span>
   </label>
   <textarea class="`).concat(F.textarea,'" id="').concat(F.textarea,`"></textarea>
   <div class="`).concat(F["validation-message"],'" id="').concat(F["validation-message"],`"></div>
   <div class="`).concat(F.actions,`">
     <div class="`).concat(F.loader,`"></div>
     <button type="button" class="`).concat(F.confirm,`"></button>
     <button type="button" class="`).concat(F.deny,`"></button>
     <button type="button" class="`).concat(F.cancel,`"></button>
   </div>
   <div class="`).concat(F.footer,`"></div>
   <div class="`).concat(F["timer-progress-bar-container"],`">
     <div class="`).concat(F["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Js=function(){var u=bt();return u?(u.remove(),Xt([document.documentElement,document.body],[F["no-backdrop"],F["toast-shown"],F["has-column"]]),!0):!1},jn=function(){G.currentInstance.resetValidationMessage()},Gl=function(){var u=ve(),f=zt(u,F.input),p=zt(u,F.file),b=u.querySelector(".".concat(F.range," input")),B=u.querySelector(".".concat(F.range," output")),Q=zt(u,F.select),ae=u.querySelector(".".concat(F.checkbox," input")),se=zt(u,F.textarea);f.oninput=jn,p.onchange=jn,Q.onchange=jn,ae.onchange=jn,se.oninput=jn,b.oninput=function(){jn(),B.value=b.value},b.onchange=function(){jn(),B.value=b.value}},sd=function(u){return typeof u=="string"?document.querySelector(u):u},Oo=function(u){var f=ve();f.setAttribute("role",u.toast?"alert":"dialog"),f.setAttribute("aria-live",u.toast?"polite":"assertive"),u.toast||f.setAttribute("aria-modal","true")},Kl=function(u){window.getComputedStyle(u).direction==="rtl"&&ne(bt(),F.rtl)},Zs=function(u){var f=Js();if(Ys()){un("SweetAlert2 requires document to initialize");return}var p=document.createElement("div");p.className=F.container,f&&ne(p,F["no-transition"]),ht(p,Xs);var b=sd(u.target);b.appendChild(p),Oo(u),Kl(b),Gl()},rr=function(u,f){u instanceof HTMLElement?f.appendChild(u):De(u)==="object"?ir(u,f):u&&ht(f,u)},ir=function(u,f){u.jquery?ea(f,u):ht(f,u.toString())},ea=function(u,f){if(u.textContent="",0 in f)for(var p=0;p in f;p++)u.appendChild(f[p].cloneNode(!0));else u.appendChild(f.cloneNode(!0))},or=function(){if(Ys())return!1;var g=document.createElement("div");return typeof g.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof g.style.animation<"u"?"animationend":!1}(),Ql=function(u,f){var p=jr(),b=nr();!p||!b||(!f.showConfirmButton&&!f.showDenyButton&&!f.showCancelButton?it(p):We(p),mt(p,f,"actions"),Yl(p,b,f),ht(b,f.loaderHtml||""),mt(b,f,"loader"))};function Yl(g,u,f){var p=Yt(),b=tr(),B=er();!p||!b||!B||(Li(p,"confirm",f),Li(b,"deny",f),Li(B,"cancel",f),Xl(p,b,B,f),f.reverseButtons&&(f.toast?(g.insertBefore(B,p),g.insertBefore(b,p)):(g.insertBefore(B,u),g.insertBefore(b,u),g.insertBefore(p,u))))}function Xl(g,u,f,p){if(!p.buttonsStyling){Xt([g,u,f],F.styled);return}ne([g,u,f],F.styled),p.confirmButtonColor&&(g.style.backgroundColor=p.confirmButtonColor,ne(g,F["default-outline"])),p.denyButtonColor&&(u.style.backgroundColor=p.denyButtonColor,ne(u,F["default-outline"])),p.cancelButtonColor&&(f.style.backgroundColor=p.cancelButtonColor,ne(f,F["default-outline"]))}function Li(g,u,f){var p=zs(u);Ni(g,f["show".concat(p,"Button")],"inline-block"),ht(g,f["".concat(u,"ButtonText")]||""),g.setAttribute("aria-label",f["".concat(u,"ButtonAriaLabel")]||""),g.className=F[u],mt(g,f,"".concat(u,"Button"))}var ta=function(u,f){var p=qs();p&&(ht(p,f.closeButtonHtml||""),mt(p,f,"closeButton"),Ni(p,f.showCloseButton),p.setAttribute("aria-label",f.closeButtonAriaLabel||""))},Jl=function(u,f){var p=bt();p&&(Zl(p,f.backdrop),ad(p,f.position),ld(p,f.grow),mt(p,f,"container"))};function Zl(g,u){typeof u=="string"?g.style.background=u:u||ne([document.documentElement,document.body],F["no-backdrop"])}function ad(g,u){u&&(u in F?ne(g,F[u]):(It('The "position" parameter is not valid, defaulting to "center"'),ne(g,F.center)))}function ld(g,u){u&&ne(g,F["grow-".concat(u)])}var Ee={innerParams:new WeakMap,domCache:new WeakMap},eu=["input","file","range","select","radio","checkbox","textarea"],ud=function(u,f){var p=ve();if(p){var b=Ee.innerParams.get(u),B=!b||f.input!==b.input;eu.forEach(function(Q){var ae=zt(p,F[Q]);ae&&(No(Q,f.inputAttributes),ae.className=F[Q],B&&it(ae))}),f.input&&(B&&sr(f),Do(f))}},sr=function(u){if(u.input){if(!Ie[u.input]){un("Unexpected type of input! Expected ".concat(Object.keys(Ie).join(" | "),', got "').concat(u.input,'"'));return}var f=Mi(u.input),p=Ie[u.input](f,u);We(f),u.inputAutoFocus&&setTimeout(function(){Ur(p)})}},En=function(u){for(var f=0;f<u.attributes.length;f++){var p=u.attributes[f].name;["id","type","value","style"].includes(p)||u.removeAttribute(p)}},No=function(u,f){var p=Oi(ve(),u);if(p){En(p);for(var b in f)p.setAttribute(b,f[b])}},Do=function(u){var f=Mi(u.input);De(u.customClass)==="object"&&ne(f,u.customClass.input)},Lo=function(u,f){(!u.placeholder||f.inputPlaceholder)&&(u.placeholder=f.inputPlaceholder)},we=function(u,f,p){if(p.inputLabel){var b=document.createElement("label"),B=F["input-label"];b.setAttribute("for",u.id),b.className=B,De(p.customClass)==="object"&&ne(b,p.customClass.inputLabel),b.innerText=p.inputLabel,f.insertAdjacentElement("beforebegin",b)}},Mi=function(u){return zt(ve(),F[u]||F.input)},Un=function(u,f){["string","number"].includes(De(f))?u.value="".concat(f):Hs(f)||It('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(De(f),'"'))},Ie={};Ie.text=Ie.email=Ie.password=Ie.number=Ie.tel=Ie.url=Ie.search=Ie.date=Ie["datetime-local"]=Ie.time=Ie.week=Ie.month=function(g,u){return Un(g,u.inputValue),we(g,g,u),Lo(g,u),g.type=u.input,g},Ie.file=function(g,u){return we(g,g,u),Lo(g,u),g},Ie.range=function(g,u){var f=g.querySelector("input"),p=g.querySelector("output");return Un(f,u.inputValue),f.type=u.input,Un(p,u.inputValue),we(f,g,u),g},Ie.select=function(g,u){if(g.textContent="",u.inputPlaceholder){var f=document.createElement("option");ht(f,u.inputPlaceholder),f.value="",f.disabled=!0,f.selected=!0,g.appendChild(f)}return we(g,g,u),g},Ie.radio=function(g){return g.textContent="",g},Ie.checkbox=function(g,u){var f=Oi(ve(),"checkbox");f.value="1",f.checked=!!u.inputValue;var p=g.querySelector("span");return ht(p,u.inputPlaceholder),f},Ie.textarea=function(g,u){Un(g,u.inputValue),Lo(g,u),we(g,g,u);var f=function(b){return parseInt(window.getComputedStyle(b).marginLeft)+parseInt(window.getComputedStyle(b).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var p=parseInt(window.getComputedStyle(ve()).width),b=function(){if(document.body.contains(g)){var Q=g.offsetWidth+f(g);Q>p?ve().style.width="".concat(Q,"px"):Jt(ve(),"width",u.width)}};new MutationObserver(b).observe(g,{attributes:!0,attributeFilter:["style"]})}}),g};var cd=function(u,f){var p=ko();p&&(Fn(p),mt(p,f,"htmlContainer"),f.html?(rr(f.html,p),We(p,"block")):f.text?(p.textContent=f.text,We(p,"block")):it(p),ud(u,f))},tu=function(u,f){var p=Co();p&&(Fn(p),Ni(p,f.footer,"block"),f.footer&&rr(f.footer,p),mt(p,f,"footer"))},fd=function(u,f){var p=Ee.innerParams.get(u),b=xi();if(b){if(p&&f.icon===p.icon){Tn(b,f),nu(b,f);return}if(!f.icon&&!f.iconHtml){it(b);return}if(f.icon&&Object.keys(Bt).indexOf(f.icon)===-1){un('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(f.icon,'"')),it(b);return}We(b),Tn(b,f),nu(b,f),ne(b,f.showClass&&f.showClass.icon)}},nu=function(u,f){for(var p=0,b=Object.entries(Bt);p<b.length;p++){var B=R(b[p],2),Q=B[0],ae=B[1];f.icon!==Q&&Xt(u,ae)}ne(u,f.icon&&Bt[f.icon]),ru(u,f),dd(),mt(u,f,"icon")},dd=function(){var u=ve();if(u)for(var f=window.getComputedStyle(u).getPropertyValue("background-color"),p=u.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),b=0;b<p.length;b++)p[b].style.backgroundColor=f},hd=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Vi=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Tn=function(u,f){if(!(!f.icon&&!f.iconHtml)){var p=u.innerHTML,b="";if(f.iconHtml)b=na(f.iconHtml);else if(f.icon==="success")b=hd,p=p.replace(/ style=".*?"/g,"");else if(f.icon==="error")b=Vi;else if(f.icon){var B={question:"?",warning:"!",info:"i"};b=na(B[f.icon])}p.trim()!==b.trim()&&ht(u,b)}},ru=function(u,f){if(f.iconColor){u.style.color=f.iconColor,u.style.borderColor=f.iconColor;for(var p=0,b=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];p<b.length;p++){var B=b[p];Hl(u,B,"background-color",f.iconColor)}Hl(u,".swal2-success-ring","border-color",f.iconColor)}},na=function(u){return'<div class="'.concat(F["icon-content"],'">').concat(u,"</div>")},iu=function(u,f){var p=Qe();if(p){if(!f.imageUrl){it(p);return}We(p,""),p.setAttribute("src",f.imageUrl),p.setAttribute("alt",f.imageAlt||""),Jt(p,"width",f.imageWidth),Jt(p,"height",f.imageHeight),p.className=F.image,mt(p,f,"image")}},Br=function(u,f){var p=bt(),b=ve();if(!(!p||!b)){if(f.toast){Jt(p,"width",f.width),b.style.width="100%";var B=nr();B&&b.insertBefore(B,xi())}else Jt(b,"width",f.width);Jt(b,"padding",f.padding),f.color&&(b.style.color=f.color),f.background&&(b.style.background=f.background),it(Zn()),pd(b,f)}},pd=function(u,f){var p=f.showClass||{};u.className="".concat(F.popup," ").concat(Xe(u)?p.popup:""),f.toast?(ne([document.documentElement,document.body],F["toast-shown"]),ne(u,F.toast)):ne(u,F.modal),mt(u,f,"popup"),typeof f.customClass=="string"&&ne(u,f.customClass),f.icon&&ne(u,F["icon-".concat(f.icon)])},md=function(u,f){var p=Ye();if(p){var b=f.progressSteps,B=f.currentProgressStep;if(!b||b.length===0||B===void 0){it(p);return}We(p),p.textContent="",B>=b.length&&It("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),b.forEach(function(Q,ae){var se=gd(Q);if(p.appendChild(se),ae===B&&ne(se,F["active-progress-step"]),ae!==b.length-1){var Ue=Bn(f);p.appendChild(Ue)}})}},gd=function(u){var f=document.createElement("li");return ne(f,F["progress-step"]),ht(f,u),f},Bn=function(u){var f=document.createElement("li");return ne(f,F["progress-step-line"]),u.progressStepsDistance&&Jt(f,"width",u.progressStepsDistance),f},vd=function(u,f){var p=So();p&&(Fn(p),Ni(p,f.title||f.titleText,"block"),f.title&&rr(f.title,p),f.titleText&&(p.innerText=f.titleText),mt(p,f,"title"))},ou=function(u,f){Br(u,f),Jl(u,f),md(u,f),fd(u,f),iu(u,f),vd(u,f),ta(u,f),cd(u,f),Ql(u,f),tu(u,f);var p=ve();typeof f.didRender=="function"&&p&&f.didRender(p)},Fi=function(){return Xe(ve())},ji=function(){var u;return(u=Yt())===null||u===void 0?void 0:u.click()},su=function(){var u;return(u=tr())===null||u===void 0?void 0:u.click()},Ui=function(){var u;return(u=er())===null||u===void 0?void 0:u.click()},fn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ra=function(u){u.keydownTarget&&u.keydownHandlerAdded&&(u.keydownTarget.removeEventListener("keydown",u.keydownHandler,{capture:u.keydownListenerCapture}),u.keydownHandlerAdded=!1)},ia=function(u,f,p){ra(u),f.toast||(u.keydownHandler=function(b){return lu(f,b,p)},u.keydownTarget=f.keydownListenerCapture?window:ve(),u.keydownListenerCapture=f.keydownListenerCapture,u.keydownTarget.addEventListener("keydown",u.keydownHandler,{capture:u.keydownListenerCapture}),u.keydownHandlerAdded=!0)},be=function(u,f){var p,b=Po();if(b.length){u=u+f,u===b.length?u=0:u===-1&&(u=b.length-1),b[u].focus();return}(p=ve())===null||p===void 0||p.focus()},au=["ArrowRight","ArrowDown"],yd=["ArrowLeft","ArrowUp"],lu=function(u,f,p){u&&(f.isComposing||f.keyCode===229||(u.stopKeydownPropagation&&f.stopPropagation(),f.key==="Enter"?uu(f,u):f.key==="Tab"?cu(f):[].concat(au,yd).includes(f.key)?Mo(f.key):f.key==="Escape"&&fu(f,u,p)))},uu=function(u,f){if(Mr(f.allowEnterKey)){var p=Oi(ve(),f.input);if(u.target&&p&&u.target instanceof HTMLElement&&u.target.outerHTML===p.outerHTML){if(["textarea","file"].includes(f.input))return;ji(),u.preventDefault()}}},cu=function(u){for(var f=u.target,p=Po(),b=-1,B=0;B<p.length;B++)if(f===p[B]){b=B;break}u.shiftKey?be(b,-1):be(b,1),u.stopPropagation(),u.preventDefault()},Mo=function(u){var f=jr(),p=Yt(),b=tr(),B=er();if(!(!f||!p||!b||!B)){var Q=[p,b,B];if(!(document.activeElement instanceof HTMLElement&&!Q.includes(document.activeElement))){var ae=au.includes(u)?"nextElementSibling":"previousElementSibling",se=document.activeElement;if(se){for(var Ue=0;Ue<f.children.length;Ue++){if(se=se[ae],!se)return;if(se instanceof HTMLButtonElement&&Xe(se))break}se instanceof HTMLButtonElement&&se.focus()}}}},fu=function(u,f,p){Mr(f.allowEscapeKey)&&(u.preventDefault(),p(fn.esc))},St={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},du=function(){var u=bt(),f=Array.from(document.body.children);f.forEach(function(p){p.contains(u)||(p.hasAttribute("aria-hidden")&&p.setAttribute("data-previous-aria-hidden",p.getAttribute("aria-hidden")||""),p.setAttribute("aria-hidden","true"))})},hu=function(){var u=Array.from(document.body.children);u.forEach(function(f){f.hasAttribute("data-previous-aria-hidden")?(f.setAttribute("aria-hidden",f.getAttribute("data-previous-aria-hidden")||""),f.removeAttribute("data-previous-aria-hidden")):f.removeAttribute("aria-hidden")})},zr=typeof window<"u"&&!!window.GestureEvent,pu=function(){if(zr&&!pt(document.body,F.iosfix)){var u=document.body.scrollTop;document.body.style.top="".concat(u*-1,"px"),ne(document.body,F.iosfix),oa()}},oa=function(){var u=bt();if(u){var f;u.ontouchstart=function(p){f=Vo(p)},u.ontouchmove=function(p){f&&(p.preventDefault(),p.stopPropagation())}}},Vo=function(u){var f=u.target,p=bt(),b=ko();return!p||!b||mu(u)||Fo(u)?!1:f===p||!Ro(p)&&f instanceof HTMLElement&&f.tagName!=="INPUT"&&f.tagName!=="TEXTAREA"&&!(Ro(b)&&b.contains(f))},mu=function(u){return u.touches&&u.touches.length&&u.touches[0].touchType==="stylus"},Fo=function(u){return u.touches&&u.touches.length>1},wd=function(){if(pt(document.body,F.iosfix)){var u=parseInt(document.body.style.top,10);Xt(document.body,F.iosfix),document.body.style.top="",document.body.scrollTop=u*-1}},gu=function(){var u=document.createElement("div");u.className=F["scrollbar-measure"],document.body.appendChild(u);var f=u.getBoundingClientRect().width-u.clientWidth;return document.body.removeChild(u),f},dn=null,vu=function(u){dn===null&&(document.body.scrollHeight>window.innerHeight||u==="scroll")&&(dn=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(dn+gu(),"px"))},yu=function(){dn!==null&&(document.body.style.paddingRight="".concat(dn,"px"),dn=null)};function jo(g,u,f,p){Vn()?la(g,p):(Ce(f).then(function(){return la(g,p)}),ra(G)),zr?(u.setAttribute("style","display:none !important"),u.removeAttribute("class"),u.innerHTML=""):u.remove(),xo()&&(yu(),wd(),hu()),sa()}function sa(){Xt([document.documentElement,document.body],[F.shown,F["height-auto"],F["no-backdrop"],F["toast-shown"]])}function In(g){g=ar(g);var u=St.swalPromiseResolve.get(this),f=Uo(this);this.isAwaitingPromise?g.isDismissed||($r(this),u(g)):f&&u(g)}var Uo=function(u){var f=ve();if(!f)return!1;var p=Ee.innerParams.get(u);if(!p||pt(f,p.hideClass.popup))return!1;Xt(f,p.showClass.popup),ne(f,p.hideClass.popup);var b=bt();return Xt(b,p.showClass.backdrop),ne(b,p.hideClass.backdrop),wu(u,f,p),!0};function aa(g){var u=St.swalPromiseReject.get(this);$r(this),u&&u(g)}var $r=function(u){u.isAwaitingPromise&&(delete u.isAwaitingPromise,Ee.innerParams.get(u)||u._destroy())},ar=function(u){return typeof u>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},u)},wu=function(u,f,p){var b=bt(),B=or&&Di(f);typeof p.willClose=="function"&&p.willClose(f),B?_u(u,f,b,p.returnFocus,p.didClose):jo(u,b,p.returnFocus,p.didClose)},_u=function(u,f,p,b,B){or&&(G.swalCloseEventFinishedCallback=jo.bind(null,u,p,b,B),f.addEventListener(or,function(Q){Q.target===f&&(G.swalCloseEventFinishedCallback(),delete G.swalCloseEventFinishedCallback)}))},la=function(u,f){setTimeout(function(){typeof f=="function"&&f.bind(u.params)(),u._destroy&&u._destroy()})},lr=function(u){var f=ve();if(f||new ku,f=ve(),!!f){var p=nr();Vn()?it(xi()):Bo(f,u),We(p),f.setAttribute("data-loading","true"),f.setAttribute("aria-busy","true"),f.focus()}},Bo=function(u,f){var p=jr(),b=nr();!p||!b||(!f&&Xe(Yt())&&(f=Yt()),We(p),f&&(it(f),b.setAttribute("data-button-to-replace",f.className),p.insertBefore(b,f)),ne([u,p],F.loading))},Dt=function(u,f){f.input==="select"||f.input==="radio"?d(u,f):["text","email","number","tel","textarea"].some(function(p){return p===f.input})&&(Pi(f.inputValue)||Hs(f.inputValue))&&(lr(Yt()),m(u,f))},Eu=function(u,f){var p=u.getInput();if(!p)return null;switch(f.input){case"checkbox":return Tu(p);case"radio":return Hr(p);case"file":return a(p);default:return f.inputAutoTrim?p.value.trim():p.value}},Tu=function(u){return u.checked?1:0},Hr=function(u){return u.checked?u.value:null},a=function(u){return u.files&&u.files.length?u.getAttribute("multiple")!==null?u.files:u.files[0]:null},d=function(u,f){var p=ve();if(p){var b=function(Q){f.input==="select"?w(p,j(Q),f):f.input==="radio"&&N(p,j(Q),f)};Pi(f.inputOptions)||Hs(f.inputOptions)?(lr(Yt()),Vr(f.inputOptions).then(function(B){u.hideLoading(),b(B)})):De(f.inputOptions)==="object"?b(f.inputOptions):un("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(De(f.inputOptions)))}},m=function(u,f){var p=u.getInput();p&&(it(p),Vr(f.inputValue).then(function(b){p.value=f.input==="number"?"".concat(parseFloat(b)||0):"".concat(b),We(p),p.focus(),u.hideLoading()}).catch(function(b){un("Error in inputValue promise: ".concat(b)),p.value="",We(p),p.focus(),u.hideLoading()}))};function w(g,u,f){var p=zt(g,F.select);if(p){var b=function(Q,ae,se){var Ue=document.createElement("option");Ue.value=se,ht(Ue,ae),Ue.selected=K(se,f.inputValue),Q.appendChild(Ue)};u.forEach(function(B){var Q=B[0],ae=B[1];if(Array.isArray(ae)){var se=document.createElement("optgroup");se.label=Q,se.disabled=!1,p.appendChild(se),ae.forEach(function(Ue){return b(se,Ue[1],Ue[0])})}else b(p,ae,Q)}),p.focus()}}function N(g,u,f){var p=zt(g,F.radio);if(p){u.forEach(function(B){var Q=B[0],ae=B[1],se=document.createElement("input"),Ue=document.createElement("label");se.type="radio",se.name=F.radio,se.value=Q,K(Q,f.inputValue)&&(se.checked=!0);var ua=document.createElement("span");ht(ua,ae),ua.className=F.label,Ue.appendChild(se),Ue.appendChild(ua),p.appendChild(Ue)});var b=p.querySelectorAll("input");b.length&&b[0].focus()}}var j=function g(u){var f=[];return u instanceof Map?u.forEach(function(p,b){var B=p;De(B)==="object"&&(B=g(B)),f.push([b,B])}):Object.keys(u).forEach(function(p){var b=u[p];De(b)==="object"&&(b=g(b)),f.push([p,b])}),f},K=function(u,f){return!!f&&f.toString()===u.toString()},ye=void 0,Je=function(u){var f=Ee.innerParams.get(u);u.disableButtons(),f.input?Ze(u,"confirm"):_d(u,!0)},pe=function(u){var f=Ee.innerParams.get(u);u.disableButtons(),f.returnInputValueOnDeny?Ze(u,"deny"):Lt(u,!1)},ot=function(u,f){u.disableButtons(),f(fn.cancel)},Ze=function(u,f){var p=Ee.innerParams.get(u);if(!p.input){un('The "input" parameter is needed to be set when using returnInputValueOn'.concat(zs(f)));return}var b=u.getInput(),B=Eu(u,p);p.inputValidator?Wr(u,B,f):b&&!b.checkValidity()?(u.enableButtons(),u.showValidationMessage(p.validationMessage||b.validationMessage)):f==="deny"?Lt(u,B):_d(u,B)},Wr=function(u,f,p){var b=Ee.innerParams.get(u);u.disableInput();var B=Promise.resolve().then(function(){return Vr(b.inputValidator(f,b.validationMessage))});B.then(function(Q){u.enableButtons(),u.enableInput(),Q?u.showValidationMessage(Q):p==="deny"?Lt(u,f):_d(u,f)})},Lt=function(u,f){var p=Ee.innerParams.get(u||ye);if(p.showLoaderOnDeny&&lr(tr()),p.preDeny){u.isAwaitingPromise=!0;var b=Promise.resolve().then(function(){return Vr(p.preDeny(f,p.validationMessage))});b.then(function(B){B===!1?(u.hideLoading(),$r(u)):u.close({isDenied:!0,value:typeof B>"u"?f:B})}).catch(function(B){return zo(u||ye,B)})}else u.close({isDenied:!0,value:f})},Bi=function(u,f){u.close({isConfirmed:!0,value:f})},zo=function(u,f){u.rejectPromise(f)},_d=function(u,f){var p=Ee.innerParams.get(u||ye);if(p.showLoaderOnConfirm&&lr(),p.preConfirm){u.resetValidationMessage(),u.isAwaitingPromise=!0;var b=Promise.resolve().then(function(){return Vr(p.preConfirm(f,p.validationMessage))});b.then(function(B){Xe(Zn())||B===!1?(u.hideLoading(),$r(u)):Bi(u,typeof B>"u"?f:B)}).catch(function(B){return zo(u||ye,B)})}else Bi(u,f)};function Iu(){var g=Ee.innerParams.get(this);if(g){var u=Ee.domCache.get(this);it(u.loader),Vn()?g.icon&&We(xi()):JE(u),Xt([u.popup,u.actions],F.loading),u.popup.removeAttribute("aria-busy"),u.popup.removeAttribute("data-loading"),u.confirmButton.disabled=!1,u.denyButton.disabled=!1,u.cancelButton.disabled=!1}}var JE=function(u){var f=u.popup.getElementsByClassName(u.loader.getAttribute("data-button-to-replace"));f.length?We(f[0],"inline-block"):Wl()&&it(u.actions)};function Dg(){var g=Ee.innerParams.get(this),u=Ee.domCache.get(this);return u?Oi(u.popup,g.input):null}function Lg(g,u,f){var p=Ee.domCache.get(g);u.forEach(function(b){p[b].disabled=f})}function Mg(g,u){var f=ve();if(!(!f||!g))if(g.type==="radio")for(var p=f.querySelectorAll('[name="'.concat(F.radio,'"]')),b=0;b<p.length;b++)p[b].disabled=u;else g.disabled=u}function Vg(){Lg(this,["confirmButton","denyButton","cancelButton"],!1)}function Fg(){Lg(this,["confirmButton","denyButton","cancelButton"],!0)}function jg(){Mg(this.getInput(),!1)}function Ug(){Mg(this.getInput(),!0)}function Bg(g){var u=Ee.domCache.get(this),f=Ee.innerParams.get(this);ht(u.validationMessage,g),u.validationMessage.className=F["validation-message"],f.customClass&&f.customClass.validationMessage&&ne(u.validationMessage,f.customClass.validationMessage),We(u.validationMessage);var p=this.getInput();p&&(p.setAttribute("aria-invalid","true"),p.setAttribute("aria-describedby",F["validation-message"]),Ur(p),ne(p,F.inputerror))}function zg(){var g=Ee.domCache.get(this);g.validationMessage&&it(g.validationMessage);var u=this.getInput();u&&(u.removeAttribute("aria-invalid"),u.removeAttribute("aria-describedby"),Xt(u,F.inputerror))}var $o={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},ZE=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],eT={},tT=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],$g=function(u){return Object.prototype.hasOwnProperty.call($o,u)},Hg=function(u){return ZE.indexOf(u)!==-1},Wg=function(u){return eT[u]},nT=function(u){$g(u)||It('Unknown parameter "'.concat(u,'"'))},rT=function(u){tT.includes(u)&&It('The parameter "'.concat(u,'" is incompatible with toasts'))},iT=function(u){var f=Wg(u);f&&bo(u,f)},oT=function(u){u.backdrop===!1&&u.allowOutsideClick&&It('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var f in u)nT(f),u.toast&&rT(f),iT(f)};function qg(g){var u=ve(),f=Ee.innerParams.get(this);if(!u||pt(u,f.hideClass.popup)){It("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var p=sT(g),b=Object.assign({},f,p);ou(this,b),Ee.innerParams.set(this,b),Object.defineProperties(this,{params:{value:Object.assign({},this.params,g),writable:!1,enumerable:!0}})}var sT=function(u){var f={};return Object.keys(u).forEach(function(p){Hg(p)?f[p]=u[p]:It("Invalid parameter to update: ".concat(p))}),f};function Gg(){var g=Ee.domCache.get(this),u=Ee.innerParams.get(this);if(!u){Kg(this);return}g.popup&&G.swalCloseEventFinishedCallback&&(G.swalCloseEventFinishedCallback(),delete G.swalCloseEventFinishedCallback),typeof u.didDestroy=="function"&&u.didDestroy(),aT(this)}var aT=function(u){Kg(u),delete u.params,delete G.keydownHandler,delete G.keydownTarget,delete G.currentInstance},Kg=function(u){u.isAwaitingPromise?(Ed(Ee,u),u.isAwaitingPromise=!0):(Ed(St,u),Ed(Ee,u),delete u.isAwaitingPromise,delete u.disableButtons,delete u.enableButtons,delete u.getInput,delete u.disableInput,delete u.enableInput,delete u.hideLoading,delete u.disableLoading,delete u.showValidationMessage,delete u.resetValidationMessage,delete u.close,delete u.closePopup,delete u.closeModal,delete u.closeToast,delete u.rejectPromise,delete u.update,delete u._destroy)},Ed=function(u,f){for(var p in u)u[p].delete(f)},lT=Object.freeze({__proto__:null,_destroy:Gg,close:In,closeModal:In,closePopup:In,closeToast:In,disableButtons:Fg,disableInput:Ug,disableLoading:Iu,enableButtons:Vg,enableInput:jg,getInput:Dg,handleAwaitingPromise:$r,hideLoading:Iu,rejectPromise:aa,resetValidationMessage:zg,showValidationMessage:Bg,update:qg}),uT=function(u,f,p){u.toast?cT(u,f,p):(dT(f),hT(f),pT(u,f,p))},cT=function(u,f,p){f.popup.onclick=function(){u&&(fT(u)||u.timer||u.input)||p(fn.close)}},fT=function(u){return!!(u.showConfirmButton||u.showDenyButton||u.showCancelButton||u.showCloseButton)},bu=!1,dT=function(u){u.popup.onmousedown=function(){u.container.onmouseup=function(f){u.container.onmouseup=function(){},f.target===u.container&&(bu=!0)}}},hT=function(u){u.container.onmousedown=function(f){f.target===u.container&&f.preventDefault(),u.popup.onmouseup=function(p){u.popup.onmouseup=function(){},(p.target===u.popup||p.target instanceof HTMLElement&&u.popup.contains(p.target))&&(bu=!0)}}},pT=function(u,f,p){f.container.onclick=function(b){if(bu){bu=!1;return}b.target===f.container&&Mr(u.allowOutsideClick)&&p(fn.backdrop)}},mT=function(u){return De(u)==="object"&&u.jquery},Qg=function(u){return u instanceof Element||mT(u)},gT=function(u){var f={};return De(u[0])==="object"&&!Qg(u[0])?Object.assign(f,u[0]):["title","html","icon"].forEach(function(p,b){var B=u[b];typeof B=="string"||Qg(B)?f[p]=B:B!==void 0&&un("Unexpected type of ".concat(p,'! Expected "string" or "Element", got ').concat(De(B)))}),f};function vT(){for(var g=this,u=arguments.length,f=new Array(u),p=0;p<u;p++)f[p]=arguments[p];return x(g,f)}function yT(g){var u=function(f){function p(){return h(this,p),l(this,p,arguments)}return C(p,f),D(p,[{key:"_main",value:function(B,Q){return k(T(p.prototype),"_main",this).call(this,B,Object.assign({},g,Q))}}])}(this);return u}var wT=function(){return G.timeout&&G.timeout.getTimerLeft()},Yg=function(){if(G.timeout)return ql(),G.timeout.stop()},Xg=function(){if(G.timeout){var u=G.timeout.start();return cn(u),u}},_T=function(){var u=G.timeout;return u&&(u.running?Yg():Xg())},ET=function(u){if(G.timeout){var f=G.timeout.increase(u);return cn(f,!0),f}},TT=function(){return!!(G.timeout&&G.timeout.isRunning())},Jg=!1,Td={};function IT(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Td[g]=this,Jg||(document.body.addEventListener("click",bT),Jg=!0)}var bT=function(u){for(var f=u.target;f&&f!==document;f=f.parentNode)for(var p in Td){var b=f.getAttribute(p);if(b){Td[p].fire({template:b});return}}},ST=Object.freeze({__proto__:null,argsToParams:gT,bindClickHandler:IT,clickCancel:Ui,clickConfirm:ji,clickDeny:su,enableLoading:lr,fire:vT,getActions:jr,getCancelButton:er,getCloseButton:qs,getConfirmButton:Yt,getContainer:bt,getDenyButton:tr,getFocusableElements:Po,getFooter:Co,getHtmlContainer:ko,getIcon:xi,getIconContent:Ws,getImage:Qe,getInputLabel:Ri,getLoader:nr,getPopup:ve,getProgressSteps:Ye,getTimerLeft:wT,getTimerProgressBar:Ao,getTitle:So,getValidationMessage:Zn,increaseTimer:ET,isDeprecatedParameter:Wg,isLoading:Ks,isTimerRunning:TT,isUpdatableParameter:Hg,isValidParameter:$g,isVisible:Fi,mixin:yT,resumeTimer:Xg,showLoading:lr,stopTimer:Yg,toggleTimer:_T}),kT=function(){function g(u,f){h(this,g),this.callback=u,this.remaining=f,this.running=!1,this.start()}return D(g,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(f){var p=this.running;return p&&this.stop(),this.remaining+=f,p&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),Zg=["swal-title","swal-html","swal-footer"],CT=function(u){var f=typeof u.template=="string"?document.querySelector(u.template):u.template;if(!f)return{};var p=f.content;LT(p);var b=Object.assign(AT(p),PT(p),xT(p),RT(p),OT(p),NT(p),DT(p,Zg));return b},AT=function(u){var f={},p=Array.from(u.querySelectorAll("swal-param"));return p.forEach(function(b){zi(b,["name","value"]);var B=b.getAttribute("name"),Q=b.getAttribute("value");typeof $o[B]=="boolean"?f[B]=Q!=="false":De($o[B])==="object"?f[B]=JSON.parse(Q):f[B]=Q}),f},PT=function(u){var f={},p=Array.from(u.querySelectorAll("swal-function-param"));return p.forEach(function(b){var B=b.getAttribute("name"),Q=b.getAttribute("value");f[B]=new Function("return ".concat(Q))()}),f},xT=function(u){var f={},p=Array.from(u.querySelectorAll("swal-button"));return p.forEach(function(b){zi(b,["type","color","aria-label"]);var B=b.getAttribute("type");f["".concat(B,"ButtonText")]=b.innerHTML,f["show".concat(zs(B),"Button")]=!0,b.hasAttribute("color")&&(f["".concat(B,"ButtonColor")]=b.getAttribute("color")),b.hasAttribute("aria-label")&&(f["".concat(B,"ButtonAriaLabel")]=b.getAttribute("aria-label"))}),f},RT=function(u){var f={},p=u.querySelector("swal-image");return p&&(zi(p,["src","width","height","alt"]),p.hasAttribute("src")&&(f.imageUrl=p.getAttribute("src")||void 0),p.hasAttribute("width")&&(f.imageWidth=p.getAttribute("width")||void 0),p.hasAttribute("height")&&(f.imageHeight=p.getAttribute("height")||void 0),p.hasAttribute("alt")&&(f.imageAlt=p.getAttribute("alt")||void 0)),f},OT=function(u){var f={},p=u.querySelector("swal-icon");return p&&(zi(p,["type","color"]),p.hasAttribute("type")&&(f.icon=p.getAttribute("type")),p.hasAttribute("color")&&(f.iconColor=p.getAttribute("color")),f.iconHtml=p.innerHTML),f},NT=function(u){var f={},p=u.querySelector("swal-input");p&&(zi(p,["type","label","placeholder","value"]),f.input=p.getAttribute("type")||"text",p.hasAttribute("label")&&(f.inputLabel=p.getAttribute("label")),p.hasAttribute("placeholder")&&(f.inputPlaceholder=p.getAttribute("placeholder")),p.hasAttribute("value")&&(f.inputValue=p.getAttribute("value")));var b=Array.from(u.querySelectorAll("swal-input-option"));return b.length&&(f.inputOptions={},b.forEach(function(B){zi(B,["value"]);var Q=B.getAttribute("value"),ae=B.innerHTML;f.inputOptions[Q]=ae})),f},DT=function(u,f){var p={};for(var b in f){var B=f[b],Q=u.querySelector(B);Q&&(zi(Q,[]),p[B.replace(/^swal-/,"")]=Q.innerHTML.trim())}return p},LT=function(u){var f=Zg.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(u.children).forEach(function(p){var b=p.tagName.toLowerCase();f.includes(b)||It("Unrecognized element <".concat(b,">"))})},zi=function(u,f){Array.from(u.attributes).forEach(function(p){f.indexOf(p.name)===-1&&It(['Unrecognized attribute "'.concat(p.name,'" on <').concat(u.tagName.toLowerCase(),">."),"".concat(f.length?"Allowed attributes are: ".concat(f.join(", ")):"To set the value, use HTML within the element.")])})},ev=10,MT=function(u){var f=bt(),p=ve();typeof u.willOpen=="function"&&u.willOpen(p);var b=window.getComputedStyle(document.body),B=b.overflowY;UT(f,p,u),setTimeout(function(){FT(f,p)},ev),xo()&&(jT(f,u.scrollbarPadding,B),du()),!Vn()&&!G.previousActiveElement&&(G.previousActiveElement=document.activeElement),typeof u.didOpen=="function"&&setTimeout(function(){return u.didOpen(p)}),Xt(f,F["no-transition"])},VT=function g(u){var f=ve();if(!(u.target!==f||!or)){var p=bt();f.removeEventListener(or,g),p.style.overflowY="auto"}},FT=function(u,f){or&&Di(f)?(u.style.overflowY="hidden",f.addEventListener(or,VT)):u.style.overflowY="auto"},jT=function(u,f,p){pu(),f&&p!=="hidden"&&vu(p),setTimeout(function(){u.scrollTop=0})},UT=function(u,f,p){ne(u,p.showClass.backdrop),p.animation?(f.style.setProperty("opacity","0","important"),We(f,"grid"),setTimeout(function(){ne(f,p.showClass.popup),f.style.removeProperty("opacity")},ev)):We(f,"grid"),ne([document.documentElement,document.body],F.shown),p.heightAuto&&p.backdrop&&!p.toast&&ne([document.documentElement,document.body],F["height-auto"])},tv={email:function(u,f){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(u)?Promise.resolve():Promise.resolve(f||"Invalid email address")},url:function(u,f){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(u)?Promise.resolve():Promise.resolve(f||"Invalid URL")}};function BT(g){g.inputValidator||(g.input==="email"&&(g.inputValidator=tv.email),g.input==="url"&&(g.inputValidator=tv.url))}function zT(g){(!g.target||typeof g.target=="string"&&!document.querySelector(g.target)||typeof g.target!="string"&&!g.target.appendChild)&&(It('Target parameter is not valid, defaulting to "body"'),g.target="body")}function $T(g){BT(g),g.showLoaderOnConfirm&&!g.preConfirm&&It(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),zT(g),typeof g.title=="string"&&(g.title=g.title.split(`
`).join("<br />")),Zs(g)}var zn,Su=new WeakMap,$e=function(){function g(){if(h(this,g),y(this,Su,void 0),!(typeof window>"u")){zn=this;for(var u=arguments.length,f=new Array(u),p=0;p<u;p++)f[p]=arguments[p];var b=Object.freeze(this.constructor.argsToParams(f));this.params=b,this.isAwaitingPromise=!1,_(Su,this,this._main(zn.params))}}return D(g,[{key:"_main",value:function(f){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(oT(Object.assign({},p,f)),G.currentInstance){var b=St.swalPromiseResolve.get(G.currentInstance),B=G.currentInstance.isAwaitingPromise;G.currentInstance._destroy(),B||b({isDismissed:!0}),xo()&&hu()}G.currentInstance=zn;var Q=WT(f,p);$T(Q),Object.freeze(Q),G.timeout&&(G.timeout.stop(),delete G.timeout),clearTimeout(G.restoreFocusTimeout);var ae=qT(zn);return ou(zn,Q),Ee.innerParams.set(zn,Q),HT(zn,ae,Q)}},{key:"then",value:function(f){return v(Su,this).then(f)}},{key:"finally",value:function(f){return v(Su,this).finally(f)}}])}(),HT=function(u,f,p){return new Promise(function(b,B){var Q=function(se){u.close({isDismissed:!0,dismiss:se})};St.swalPromiseResolve.set(u,b),St.swalPromiseReject.set(u,B),f.confirmButton.onclick=function(){Je(u)},f.denyButton.onclick=function(){pe(u)},f.cancelButton.onclick=function(){ot(u,Q)},f.closeButton.onclick=function(){Q(fn.close)},uT(p,f,Q),ia(G,p,Q),Dt(u,p),MT(p),GT(G,p,Q),KT(f,p),setTimeout(function(){f.container.scrollTop=0})})},WT=function(u,f){var p=CT(u),b=Object.assign({},$o,f,p,u);return b.showClass=Object.assign({},$o.showClass,b.showClass),b.hideClass=Object.assign({},$o.hideClass,b.hideClass),b.animation===!1&&(b.showClass={backdrop:"swal2-noanimation"},b.hideClass={}),b},qT=function(u){var f={popup:ve(),container:bt(),actions:jr(),confirmButton:Yt(),denyButton:tr(),cancelButton:er(),loader:nr(),closeButton:qs(),validationMessage:Zn(),progressSteps:Ye()};return Ee.domCache.set(u,f),f},GT=function(u,f,p){var b=Ao();it(b),f.timer&&(u.timeout=new kT(function(){p("timer"),delete u.timeout},f.timer),f.timerProgressBar&&(We(b),mt(b,f,"timerProgressBar"),setTimeout(function(){u.timeout&&u.timeout.running&&cn(f.timer)})))},KT=function(u,f){if(!f.toast){if(!Mr(f.allowEnterKey)){bo("allowEnterKey"),XT();return}QT(u)||YT(u,f)||be(-1,1)}},QT=function(u){var f=u.popup.querySelectorAll("[autofocus]"),p=M(f),b;try{for(p.s();!(b=p.n()).done;){var B=b.value;if(B instanceof HTMLElement&&Xe(B))return B.focus(),!0}}catch(Q){p.e(Q)}finally{p.f()}return!1},YT=function(u,f){return f.focusDeny&&Xe(u.denyButton)?(u.denyButton.focus(),!0):f.focusCancel&&Xe(u.cancelButton)?(u.cancelButton.focus(),!0):f.focusConfirm&&Xe(u.confirmButton)?(u.confirmButton.focus(),!0):!1},XT=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var nv=new Date,rv=localStorage.getItem("swal-initiation");rv?(nv.getTime()-Date.parse(rv))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var g=document.createElement("audio");g.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",g.loop=!0,document.body.appendChild(g),setTimeout(function(){g.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(nv))}$e.prototype.disableButtons=Fg,$e.prototype.enableButtons=Vg,$e.prototype.getInput=Dg,$e.prototype.disableInput=Ug,$e.prototype.enableInput=jg,$e.prototype.hideLoading=Iu,$e.prototype.disableLoading=Iu,$e.prototype.showValidationMessage=Bg,$e.prototype.resetValidationMessage=zg,$e.prototype.close=In,$e.prototype.closePopup=In,$e.prototype.closeModal=In,$e.prototype.closeToast=In,$e.prototype.rejectPromise=aa,$e.prototype.update=qg,$e.prototype._destroy=Gg,Object.assign($e,ST),Object.keys(lT).forEach(function(g){$e[g]=function(){if(zn&&zn[g]){var u;return(u=zn)[g].apply(u,arguments)}return null}}),$e.DismissReason=fn,$e.version="11.12.0";var ku=$e;return ku.default=ku,ku}),typeof qr<"u"&&qr.Sweetalert2&&(qr.swal=qr.sweetAlert=qr.Swal=qr.SweetAlert=qr.Sweetalert2),typeof document<"u"&&function(n,r){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(w2);var Dx=w2.exports;const $i=zp(Dx);function Jy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jy(Object(n),!0).forEach(function(r){rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function uf(t){"@babel/helpers - typeof";return uf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uf(t)}function Lx(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Mx(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Vx(t,e,n){return e&&Mx(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function og(t,e){return jx(t)||Bx(t,e)||_2(t,e)||$x()}function Ml(t){return Fx(t)||Ux(t)||_2(t)||zx()}function Fx(t){if(Array.isArray(t))return wp(t)}function jx(t){if(Array.isArray(t))return t}function Ux(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Bx(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,l;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(c){o=!0,l=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function _2(t,e){if(t){if(typeof t=="string")return wp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wp(t,e)}}function wp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function zx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zy=function(){},sg={},E2={},T2=null,I2={mark:Zy,measure:Zy};try{typeof window<"u"&&(sg=window),typeof document<"u"&&(E2=document),typeof MutationObserver<"u"&&(T2=MutationObserver),typeof performance<"u"&&(I2=performance)}catch{}var Hx=sg.navigator||{},e0=Hx.userAgent,t0=e0===void 0?"":e0,wi=sg,Re=E2,n0=T2,Wu=I2;wi.document;var Lr=!!Re.documentElement&&!!Re.head&&typeof Re.addEventListener=="function"&&typeof Re.createElement=="function",b2=~t0.indexOf("MSIE")||~t0.indexOf("Trident/"),qu,Gu,Ku,Qu,Yu,kr="___FONT_AWESOME___",_p=16,S2="fa",k2="svg-inline--fa",mo="data-fa-i2svg",Ep="data-fa-pseudo-element",Wx="data-fa-pseudo-element-pending",ag="data-prefix",lg="data-icon",r0="fontawesome-i2svg",qx="async",Gx=["HTML","HEAD","STYLE","SCRIPT"],C2=function(){try{return!0}catch{return!1}}(),Pe="classic",ze="sharp",ug=[Pe,ze];function Vl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Pe]}})}var hl=Vl((qu={},rt(qu,Pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),rt(qu,ze,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),qu)),pl=Vl((Gu={},rt(Gu,Pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),rt(Gu,ze,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Gu)),ml=Vl((Ku={},rt(Ku,Pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),rt(Ku,ze,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ku)),Kx=Vl((Qu={},rt(Qu,Pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),rt(Qu,ze,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Qu)),Qx=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,A2="fa-layers-text",Yx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Xx=Vl((Yu={},rt(Yu,Pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),rt(Yu,ze,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Yu)),P2=[1,2,3,4,5,6,7,8,9,10],Jx=P2.concat([11,12,13,14,15,16,17,18,19,20]),Zx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gl=new Set;Object.keys(pl[Pe]).map(gl.add.bind(gl));Object.keys(pl[ze]).map(gl.add.bind(gl));var eR=[].concat(ug,Ml(gl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Xi.GROUP,Xi.SWAP_OPACITY,Xi.PRIMARY,Xi.SECONDARY]).concat(P2.map(function(t){return"".concat(t,"x")})).concat(Jx.map(function(t){return"w-".concat(t)})),ja=wi.FontAwesomeConfig||{};function tR(t){var e=Re.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function nR(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Re&&typeof Re.querySelector=="function"){var rR=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];rR.forEach(function(t){var e=og(t,2),n=e[0],r=e[1],i=nR(tR(n));i!=null&&(ja[r]=i)})}var x2={styleDefault:"solid",familyDefault:"classic",cssPrefix:S2,replacementClass:k2,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ja.familyPrefix&&(ja.cssPrefix=ja.familyPrefix);var Cs=J(J({},x2),ja);Cs.autoReplaceSvg||(Cs.observeMutations=!1);var ee={};Object.keys(x2).forEach(function(t){Object.defineProperty(ee,t,{enumerable:!0,set:function(n){Cs[t]=n,Ua.forEach(function(r){return r(ee)})},get:function(){return Cs[t]}})});Object.defineProperty(ee,"familyPrefix",{enumerable:!0,set:function(e){Cs.cssPrefix=e,Ua.forEach(function(n){return n(ee)})},get:function(){return Cs.cssPrefix}});wi.FontAwesomeConfig=ee;var Ua=[];function iR(t){return Ua.push(t),function(){Ua.splice(Ua.indexOf(t),1)}}var Qr=_p,Gn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function oR(t){if(!(!t||!Lr)){var e=Re.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Re.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Re.head.insertBefore(e,r),t}}var sR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vl(){for(var t=12,e="";t-- >0;)e+=sR[Math.random()*62|0];return e}function js(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function cg(t){return t.classList?js(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function R2(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function aR(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(R2(t[n]),'" ')},"").trim()}function Kf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function fg(t){return t.size!==Gn.size||t.x!==Gn.x||t.y!==Gn.y||t.rotate!==Gn.rotate||t.flipX||t.flipY}function lR(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(l)},h={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:h}}function uR(t){var e=t.transform,n=t.width,r=n===void 0?_p:n,i=t.height,o=i===void 0?_p:i,s=t.startCentered,l=s===void 0?!1:s,c="";return l&&b2?c+="translate(".concat(e.x/Qr-r/2,"em, ").concat(e.y/Qr-o/2,"em) "):l?c+="translate(calc(-50% + ".concat(e.x/Qr,"em), calc(-50% + ").concat(e.y/Qr,"em)) "):c+="translate(".concat(e.x/Qr,"em, ").concat(e.y/Qr,"em) "),c+="scale(".concat(e.size/Qr*(e.flipX?-1:1),", ").concat(e.size/Qr*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var cR=`:root, :host {
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
}`;function O2(){var t=S2,e=k2,n=ee.cssPrefix,r=ee.replacementClass,i=cR;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var i0=!1;function ih(){ee.autoAddCss&&!i0&&(oR(O2()),i0=!0)}var fR={mixout:function(){return{dom:{css:O2,insertCss:ih}}},hooks:function(){return{beforeDOMElementCreation:function(){ih()},beforeI2svg:function(){ih()}}}},Cr=wi||{};Cr[kr]||(Cr[kr]={});Cr[kr].styles||(Cr[kr].styles={});Cr[kr].hooks||(Cr[kr].hooks={});Cr[kr].shims||(Cr[kr].shims=[]);var Rn=Cr[kr],N2=[],dR=function t(){Re.removeEventListener("DOMContentLoaded",t),cf=1,N2.map(function(e){return e()})},cf=!1;Lr&&(cf=(Re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Re.readyState),cf||Re.addEventListener("DOMContentLoaded",dR));function hR(t){Lr&&(cf?setTimeout(t,0):N2.push(t))}function Fl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,o=i===void 0?[]:i;return typeof t=="string"?R2(t):"<".concat(e," ").concat(aR(r),">").concat(o.map(Fl).join(""),"</").concat(e,">")}function o0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var oh=function(e,n,r,i){var o=Object.keys(e),s=o.length,l=n,c,h,v;for(r===void 0?(c=1,v=e[o[0]]):(c=0,v=r);c<s;c++)h=o[c],v=l(v,e[h],h,e);return v};function pR(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Tp(t){var e=pR(t);return e.length===1?e[0].toString(16):null}function mR(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function s0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ip(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=s0(e);typeof Rn.hooks.addPack=="function"&&!i?Rn.hooks.addPack(t,s0(e)):Rn.styles[t]=J(J({},Rn.styles[t]||{}),o),t==="fas"&&Ip("fa",e)}var Xu,Ju,Zu,is=Rn.styles,gR=Rn.shims,vR=(Xu={},rt(Xu,Pe,Object.values(ml[Pe])),rt(Xu,ze,Object.values(ml[ze])),Xu),dg=null,D2={},L2={},M2={},V2={},F2={},yR=(Ju={},rt(Ju,Pe,Object.keys(hl[Pe])),rt(Ju,ze,Object.keys(hl[ze])),Ju);function wR(t){return~eR.indexOf(t)}function _R(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!wR(i)?i:null}var j2=function(){var e=function(o){return oh(is,function(s,l,c){return s[c]=oh(l,o,{}),s},{})};D2=e(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var l=o[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){i[c.toString(16)]=s})}return i}),L2=e(function(i,o,s){if(i[s]=s,o[2]){var l=o[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){i[c]=s})}return i}),F2=e(function(i,o,s){var l=o[2];return i[s]=s,l.forEach(function(c){i[c]=s}),i});var n="far"in is||ee.autoFetchSvg,r=oh(gR,function(i,o){var s=o[0],l=o[1],c=o[2];return l==="far"&&!n&&(l="fas"),typeof s=="string"&&(i.names[s]={prefix:l,iconName:c}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:l,iconName:c}),i},{names:{},unicodes:{}});M2=r.names,V2=r.unicodes,dg=Qf(ee.styleDefault,{family:ee.familyDefault})};iR(function(t){dg=Qf(t.styleDefault,{family:ee.familyDefault})});j2();function hg(t,e){return(D2[t]||{})[e]}function ER(t,e){return(L2[t]||{})[e]}function Ji(t,e){return(F2[t]||{})[e]}function U2(t){return M2[t]||{prefix:null,iconName:null}}function TR(t){var e=V2[t],n=hg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _i(){return dg}var pg=function(){return{prefix:null,iconName:null,rest:[]}};function Qf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Pe:n,i=hl[r][t],o=pl[r][t]||pl[r][i],s=t in Rn.styles?t:null;return o||s||null}var a0=(Zu={},rt(Zu,Pe,Object.keys(ml[Pe])),rt(Zu,ze,Object.keys(ml[ze])),Zu);function Yf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(e={},rt(e,Pe,"".concat(ee.cssPrefix,"-").concat(Pe)),rt(e,ze,"".concat(ee.cssPrefix,"-").concat(ze)),e),s=null,l=Pe;(t.includes(o[Pe])||t.some(function(h){return a0[Pe].includes(h)}))&&(l=Pe),(t.includes(o[ze])||t.some(function(h){return a0[ze].includes(h)}))&&(l=ze);var c=t.reduce(function(h,v){var y=_R(ee.cssPrefix,v);if(is[v]?(v=vR[l].includes(v)?Kx[l][v]:v,s=v,h.prefix=v):yR[l].indexOf(v)>-1?(s=v,h.prefix=Qf(v,{family:l})):y?h.iconName=y:v!==ee.replacementClass&&v!==o[Pe]&&v!==o[ze]&&h.rest.push(v),!i&&h.prefix&&h.iconName){var _=s==="fa"?U2(h.iconName):{},x=Ji(h.prefix,h.iconName);_.prefix&&(s=null),h.iconName=_.iconName||x||h.iconName,h.prefix=_.prefix||h.prefix,h.prefix==="far"&&!is.far&&is.fas&&!ee.autoFetchSvg&&(h.prefix="fas")}return h},pg());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&l===ze&&(is.fass||ee.autoFetchSvg)&&(c.prefix="fass",c.iconName=Ji(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||s==="fa")&&(c.prefix=_i()||"fas"),c}var IR=function(){function t(){Lx(this,t),this.definitions={}}return Vx(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){n.definitions[l]=J(J({},n.definitions[l]||{}),s[l]),Ip(l,s[l]);var c=ml[Pe][l];c&&Ip(c,s[l]),j2()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],l=s.prefix,c=s.iconName,h=s.icon,v=h[2];n[l]||(n[l]={}),v.length>0&&v.forEach(function(y){typeof y=="string"&&(n[l][y]=h)}),n[l][c]=h}),n}}]),t}(),l0=[],os={},vs={},bR=Object.keys(vs);function SR(t,e){var n=e.mixoutsTo;return l0=t,os={},Object.keys(vs).forEach(function(r){bR.indexOf(r)===-1&&delete vs[r]}),l0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),uf(i[s])==="object"&&Object.keys(i[s]).forEach(function(l){n[s]||(n[s]={}),n[s][l]=i[s][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){os[s]||(os[s]=[]),os[s].push(o[s])})}r.provides&&r.provides(vs)}),n}function bp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=os[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function go(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=os[t]||[];i.forEach(function(o){o.apply(null,n)})}function Ar(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return vs[t]?vs[t].apply(null,e):void 0}function Sp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||_i();if(e)return e=Ji(n,e)||e,o0(B2.definitions,n,e)||o0(Rn.styles,n,e)}var B2=new IR,kR=function(){ee.autoReplaceSvg=!1,ee.observeMutations=!1,go("noAuto")},CR={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Lr?(go("beforeI2svg",e),Ar("pseudoElements2svg",e),Ar("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;ee.autoReplaceSvg===!1&&(ee.autoReplaceSvg=!0),ee.observeMutations=!0,hR(function(){PR({autoReplaceSvgRoot:n}),go("watch",e)})}},AR={icon:function(e){if(e===null)return null;if(uf(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ji(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Qf(e[0]);return{prefix:r,iconName:Ji(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(ee.cssPrefix,"-"))>-1||e.match(Qx))){var i=Yf(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||_i(),iconName:Ji(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var o=_i();return{prefix:o,iconName:Ji(o,e)||e}}}},an={noAuto:kR,config:ee,dom:CR,parse:AR,library:B2,findIconDefinition:Sp,toHtml:Fl},PR=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Re:n;(Object.keys(Rn.styles).length>0||ee.autoFetchSvg)&&Lr&&ee.autoReplaceSvg&&an.dom.i2svg({node:r})};function Xf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Fl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Lr){var r=Re.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function xR(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(fg(s)&&n.found&&!r.found){var l=n.width,c=n.height,h={x:l/c/2,y:.5};i.style=Kf(J(J({},o),{},{"transform-origin":"".concat(h.x+s.x/16,"em ").concat(h.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function RR(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(ee.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:J(J({},i),{},{id:s}),children:r}]}]}function mg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,l=t.symbol,c=t.title,h=t.maskId,v=t.titleId,y=t.extra,_=t.watchable,x=_===void 0?!1:_,O=r.found?r:n,D=O.width,M=O.height,k=i==="fak",T=[ee.replacementClass,o?"".concat(ee.cssPrefix,"-").concat(o):""].filter(function(I){return y.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(y.classes).join(" "),C={children:[],attributes:J(J({},y.attributes),{},{"data-prefix":i,"data-icon":o,class:T,role:y.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(M)})},V=k&&!~y.classes.indexOf("fa-fw")?{width:"".concat(D/M*16*.0625,"em")}:{};x&&(C.attributes[mo]=""),c&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(v||vl())},children:[c]}),delete C.attributes.title);var z=J(J({},C),{},{prefix:i,iconName:o,main:n,mask:r,maskId:h,transform:s,symbol:l,styles:J(J({},V),y.styles)}),q=r.found&&n.found?Ar("generateAbstractMask",z)||{children:[],attributes:{}}:Ar("generateAbstractIcon",z)||{children:[],attributes:{}},S=q.children,E=q.attributes;return z.children=S,z.attributes=E,l?RR(z):xR(z)}function u0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,s=t.extra,l=t.watchable,c=l===void 0?!1:l,h=J(J(J({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});c&&(h[mo]="");var v=J({},s.styles);fg(i)&&(v.transform=uR({transform:i,startCentered:!0,width:n,height:r}),v["-webkit-transform"]=v.transform);var y=Kf(v);y.length>0&&(h.style=y);var _=[];return _.push({tag:"span",attributes:h,children:[e]}),o&&_.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),_}function OR(t){var e=t.content,n=t.title,r=t.extra,i=J(J(J({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Kf(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var sh=Rn.styles;function kp(t){var e=t[0],n=t[1],r=t.slice(4),i=og(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(ee.cssPrefix,"-").concat(Xi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ee.cssPrefix,"-").concat(Xi.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(ee.cssPrefix,"-").concat(Xi.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var NR={found:!1,width:512,height:512};function DR(t,e){!C2&&!ee.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Cp(t,e){var n=e;return e==="fa"&&ee.styleDefault!==null&&(e=_i()),new Promise(function(r,i){if(Ar("missingIconAbstract"),n==="fa"){var o=U2(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&sh[e]&&sh[e][t]){var s=sh[e][t];return r(kp(s))}DR(t,e),r(J(J({},NR),{},{icon:ee.showMissingIcons&&t?Ar("missingIconAbstract")||{}:{}}))})}var c0=function(){},Ap=ee.measurePerformance&&Wu&&Wu.mark&&Wu.measure?Wu:{mark:c0,measure:c0},Ca='FA "6.5.2"',LR=function(e){return Ap.mark("".concat(Ca," ").concat(e," begins")),function(){return z2(e)}},z2=function(e){Ap.mark("".concat(Ca," ").concat(e," ends")),Ap.measure("".concat(Ca," ").concat(e),"".concat(Ca," ").concat(e," begins"),"".concat(Ca," ").concat(e," ends"))},gg={begin:LR,end:z2},Ic=function(){};function f0(t){var e=t.getAttribute?t.getAttribute(mo):null;return typeof e=="string"}function MR(t){var e=t.getAttribute?t.getAttribute(ag):null,n=t.getAttribute?t.getAttribute(lg):null;return e&&n}function VR(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ee.replacementClass)}function FR(){if(ee.autoReplaceSvg===!0)return bc.replace;var t=bc[ee.autoReplaceSvg];return t||bc.replace}function jR(t){return Re.createElementNS("http://www.w3.org/2000/svg",t)}function UR(t){return Re.createElement(t)}function $2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?jR:UR:n;if(typeof t=="string")return Re.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){i.appendChild($2(s,{ceFn:r}))}),i}function BR(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var bc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore($2(i),n)}),n.getAttribute(mo)===null&&ee.keepOriginalSource){var r=Re.createComment(BR(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~cg(n).indexOf(ee.replacementClass))return bc.replace(e);var i=new RegExp("".concat(ee.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,c){return c===ee.replacementClass||c.match(i)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(l){return Fl(l)}).join(`
`);n.setAttribute(mo,""),n.innerHTML=s}};function d0(t){t()}function H2(t,e){var n=typeof e=="function"?e:Ic;if(t.length===0)n();else{var r=d0;ee.mutateApproach===qx&&(r=wi.requestAnimationFrame||d0),r(function(){var i=FR(),o=gg.begin("mutate");t.map(i),o(),n()})}}var vg=!1;function W2(){vg=!0}function Pp(){vg=!1}var ff=null;function h0(t){if(n0&&ee.observeMutations){var e=t.treeCallback,n=e===void 0?Ic:e,r=t.nodeCallback,i=r===void 0?Ic:r,o=t.pseudoElementsCallback,s=o===void 0?Ic:o,l=t.observeMutationsRoot,c=l===void 0?Re:l;ff=new n0(function(h){if(!vg){var v=_i();js(h).forEach(function(y){if(y.type==="childList"&&y.addedNodes.length>0&&!f0(y.addedNodes[0])&&(ee.searchPseudoElements&&s(y.target),n(y.target)),y.type==="attributes"&&y.target.parentNode&&ee.searchPseudoElements&&s(y.target.parentNode),y.type==="attributes"&&f0(y.target)&&~Zx.indexOf(y.attributeName))if(y.attributeName==="class"&&MR(y.target)){var _=Yf(cg(y.target)),x=_.prefix,O=_.iconName;y.target.setAttribute(ag,x||v),O&&y.target.setAttribute(lg,O)}else VR(y.target)&&i(y.target)})}}),Lr&&ff.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zR(){ff&&ff.disconnect()}function $R(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),n}function HR(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Yf(cg(t));return i.prefix||(i.prefix=_i()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ER(i.prefix,t.innerText)||hg(i.prefix,Tp(t.innerText))),!i.iconName&&ee.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function WR(t){var e=js(t.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ee.autoA11y&&(n?e["aria-labelledby"]="".concat(ee.replacementClass,"-title-").concat(r||vl()):(e["aria-hidden"]="true",e.focusable="false")),e}function qR(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Gn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function p0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=HR(t),r=n.iconName,i=n.prefix,o=n.rest,s=WR(t),l=bp("parseNodeAttributes",{},t),c=e.styleParser?$R(t):[];return J({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Gn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:c,attributes:s}},l)}var GR=Rn.styles;function q2(t){var e=ee.autoReplaceSvg==="nest"?p0(t,{styleParser:!1}):p0(t);return~e.extra.classes.indexOf(A2)?Ar("generateLayersText",t,e):Ar("generateSvgReplacementMutation",t,e)}var Ei=new Set;ug.map(function(t){Ei.add("fa-".concat(t))});Object.keys(hl[Pe]).map(Ei.add.bind(Ei));Object.keys(hl[ze]).map(Ei.add.bind(Ei));Ei=Ml(Ei);function m0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Lr)return Promise.resolve();var n=Re.documentElement.classList,r=function(y){return n.add("".concat(r0,"-").concat(y))},i=function(y){return n.remove("".concat(r0,"-").concat(y))},o=ee.autoFetchSvg?Ei:ug.map(function(v){return"fa-".concat(v)}).concat(Object.keys(GR));o.includes("fa")||o.push("fa");var s=[".".concat(A2,":not([").concat(mo,"])")].concat(o.map(function(v){return".".concat(v,":not([").concat(mo,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=js(t.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var c=gg.begin("onTree"),h=l.reduce(function(v,y){try{var _=q2(y);_&&v.push(_)}catch(x){C2||x.name==="MissingIcon"&&console.error(x)}return v},[]);return new Promise(function(v,y){Promise.all(h).then(function(_){H2(_,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),v()})}).catch(function(_){c(),y(_)})})}function KR(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;q2(t).then(function(n){n&&H2([n],e)})}function QR(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Sp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Sp(i||{})),t(r,J(J({},n),{},{mask:i}))}}var YR=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Gn:r,o=n.symbol,s=o===void 0?!1:o,l=n.mask,c=l===void 0?null:l,h=n.maskId,v=h===void 0?null:h,y=n.title,_=y===void 0?null:y,x=n.titleId,O=x===void 0?null:x,D=n.classes,M=D===void 0?[]:D,k=n.attributes,T=k===void 0?{}:k,C=n.styles,V=C===void 0?{}:C;if(e){var z=e.prefix,q=e.iconName,S=e.icon;return Xf(J({type:"icon"},e),function(){return go("beforeDOMElementCreation",{iconDefinition:e,params:n}),ee.autoA11y&&(_?T["aria-labelledby"]="".concat(ee.replacementClass,"-title-").concat(O||vl()):(T["aria-hidden"]="true",T.focusable="false")),mg({icons:{main:kp(S),mask:c?kp(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:q,transform:J(J({},Gn),i),symbol:s,title:_,maskId:v,titleId:O,extra:{attributes:T,styles:V,classes:M}})})}},XR={mixout:function(){return{icon:QR(YR)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=m0,n.nodeCallback=KR,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Re:r,o=n.callback,s=o===void 0?function(){}:o;return m0(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,l=r.prefix,c=r.transform,h=r.symbol,v=r.mask,y=r.maskId,_=r.extra;return new Promise(function(x,O){Promise.all([Cp(i,l),v.iconName?Cp(v.iconName,v.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var M=og(D,2),k=M[0],T=M[1];x([n,mg({icons:{main:k,mask:T},prefix:l,iconName:i,transform:c,symbol:h,maskId:y,title:o,titleId:s,extra:_,watchable:!0})])}).catch(O)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,l=n.styles,c=Kf(l);c.length>0&&(i.style=c);var h;return fg(s)&&(h=Ar("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(h||o.icon),{children:r,attributes:i}}}},JR={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Xf({type:"layer"},function(){go("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(l){Array.isArray(l)?l.map(function(c){s=s.concat(c.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(ee.cssPrefix,"-layers")].concat(Ml(o)).join(" ")},children:s}]})}}}},ZR={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,l=s===void 0?[]:s,c=r.attributes,h=c===void 0?{}:c,v=r.styles,y=v===void 0?{}:v;return Xf({type:"counter",content:n},function(){return go("beforeDOMElementCreation",{content:n,params:r}),OR({content:n.toString(),title:o,extra:{attributes:h,styles:y,classes:["".concat(ee.cssPrefix,"-layers-counter")].concat(Ml(l))}})})}}}},e4={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Gn:i,s=r.title,l=s===void 0?null:s,c=r.classes,h=c===void 0?[]:c,v=r.attributes,y=v===void 0?{}:v,_=r.styles,x=_===void 0?{}:_;return Xf({type:"text",content:n},function(){return go("beforeDOMElementCreation",{content:n,params:r}),u0({content:n,transform:J(J({},Gn),o),title:l,extra:{attributes:y,styles:x,classes:["".concat(ee.cssPrefix,"-layers-text")].concat(Ml(h))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,l=null,c=null;if(b2){var h=parseInt(getComputedStyle(n).fontSize,10),v=n.getBoundingClientRect();l=v.width/h,c=v.height/h}return ee.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,u0({content:n.innerHTML,width:l,height:c,transform:o,title:i,extra:s,watchable:!0})])}}},t4=new RegExp('"',"ug"),g0=[1105920,1112319];function n4(t){var e=t.replace(t4,""),n=mR(e,0),r=n>=g0[0]&&n<=g0[1],i=e.length===2?e[0]===e[1]:!1;return{value:Tp(i?e[0]:e),isSecondary:r||i}}function v0(t,e){var n="".concat(Wx).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var o=js(t.children),s=o.filter(function(S){return S.getAttribute(Ep)===e})[0],l=wi.getComputedStyle(t,e),c=l.getPropertyValue("font-family").match(Yx),h=l.getPropertyValue("font-weight"),v=l.getPropertyValue("content");if(s&&!c)return t.removeChild(s),r();if(c&&v!=="none"&&v!==""){var y=l.getPropertyValue("content"),_=~["Sharp"].indexOf(c[2])?ze:Pe,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?pl[_][c[2].toLowerCase()]:Xx[_][h],O=n4(y),D=O.value,M=O.isSecondary,k=c[0].startsWith("FontAwesome"),T=hg(x,D),C=T;if(k){var V=TR(D);V.iconName&&V.prefix&&(T=V.iconName,x=V.prefix)}if(T&&!M&&(!s||s.getAttribute(ag)!==x||s.getAttribute(lg)!==C)){t.setAttribute(n,C),s&&t.removeChild(s);var z=qR(),q=z.extra;q.attributes[Ep]=e,Cp(T,x).then(function(S){var E=mg(J(J({},z),{},{icons:{main:S,mask:pg()},prefix:x,iconName:C,extra:q,watchable:!0})),I=Re.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=E.map(function(A){return Fl(A)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function r4(t){return Promise.all([v0(t,"::before"),v0(t,"::after")])}function i4(t){return t.parentNode!==document.head&&!~Gx.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ep)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function y0(t){if(Lr)return new Promise(function(e,n){var r=js(t.querySelectorAll("*")).filter(i4).map(r4),i=gg.begin("searchPseudoElements");W2(),Promise.all(r).then(function(){i(),Pp(),e()}).catch(function(){i(),Pp(),n()})})}var o4={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=y0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Re:r;ee.searchPseudoElements&&y0(i)}}},w0=!1,s4={mixout:function(){return{dom:{unwatch:function(){W2(),w0=!0}}}},hooks:function(){return{bootstrap:function(){h0(bp("mutationObserverCallbacks",{}))},noAuto:function(){zR()},watch:function(n){var r=n.observeMutationsRoot;w0?Pp():h0(bp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],l=o.slice(1).join("-");if(s&&l==="h")return r.flipX=!0,r;if(s&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(s){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},a4={mixout:function(){return{parse:{transform:function(n){return _0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=_0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),h="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),v="rotate(".concat(i.rotate," 0 0)"),y={transform:"".concat(c," ").concat(h," ").concat(v)},_={transform:"translate(".concat(s/2*-1," -256)")},x={outer:l,inner:y,path:_};return{tag:"g",attributes:J({},x.outer),children:[{tag:"g",attributes:J({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:J(J({},r.icon.attributes),x.path)}]}]}}}},ah={x:0,y:0,width:"100%",height:"100%"};function E0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function l4(t){return t.tag==="g"?t.children:[t]}var u4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Yf(i.split(" ").map(function(s){return s.trim()})):pg();return o.prefix||(o.prefix=_i()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,l=n.maskId,c=n.transform,h=o.width,v=o.icon,y=s.width,_=s.icon,x=lR({transform:c,containerWidth:y,iconWidth:h}),O={tag:"rect",attributes:J(J({},ah),{},{fill:"white"})},D=v.children?{children:v.children.map(E0)}:{},M={tag:"g",attributes:J({},x.inner),children:[E0(J({tag:v.tag,attributes:J(J({},v.attributes),x.path)},D))]},k={tag:"g",attributes:J({},x.outer),children:[M]},T="mask-".concat(l||vl()),C="clip-".concat(l||vl()),V={tag:"mask",attributes:J(J({},ah),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,k]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:l4(_)},V]};return r.push(z,{tag:"rect",attributes:J({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(T,")")},ah)}),{children:r,attributes:i}}}},c4={provides:function(e){var n=!1;wi.matchMedia&&(n=wi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:J(J({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=J(J({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:J(J({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:J(J({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:J(J({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:J(J({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:J(J({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:J(J({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:J(J({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},f4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},d4=[fR,XR,JR,ZR,e4,o4,s4,a4,u4,c4,f4];SR(d4,{mixoutsTo:an});an.noAuto;an.config;an.library;an.dom;var xp=an.parse;an.findIconDefinition;an.toHtml;var h4=an.icon;an.layer;an.text;an.counter;function T0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Wn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?T0(Object(n),!0).forEach(function(r){ss(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function df(t){"@babel/helpers - typeof";return df=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},df(t)}function ss(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function m4(t,e){if(t==null)return{};var n=p4(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Rp(t){return g4(t)||v4(t)||y4(t)||w4()}function g4(t){if(Array.isArray(t))return Op(t)}function v4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function y4(t,e){if(t){if(typeof t=="string")return Op(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Op(t,e)}}function Op(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function w4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _4(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,l=t.flash,c=t.spin,h=t.spinPulse,v=t.spinReverse,y=t.pulse,_=t.fixedWidth,x=t.inverse,O=t.border,D=t.listItem,M=t.flip,k=t.size,T=t.rotation,C=t.pull,V=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":v,"fa-spin-pulse":h,"fa-pulse":y,"fa-fw":_,"fa-inverse":x,"fa-border":O,"fa-li":D,"fa-flip":M===!0,"fa-flip-horizontal":M==="horizontal"||M==="both","fa-flip-vertical":M==="vertical"||M==="both"},ss(e,"fa-".concat(k),typeof k<"u"&&k!==null),ss(e,"fa-rotate-".concat(T),typeof T<"u"&&T!==null&&T!==0),ss(e,"fa-pull-".concat(C),typeof C<"u"&&C!==null),ss(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(V).map(function(z){return V[z]?z:null}).filter(function(z){return z})}function E4(t){return t=t-0,t===t}function G2(t){return E4(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var T4=["style"];function I4(t){return t.charAt(0).toUpperCase()+t.slice(1)}function b4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=G2(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[I4(i)]=o:e[i]=o,e},{})}function K2(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return K2(t,c)}),i=Object.keys(e.attributes||{}).reduce(function(c,h){var v=e.attributes[h];switch(h){case"class":c.attrs.className=v,delete e.attributes.class;break;case"style":c.attrs.style=b4(v);break;default:h.indexOf("aria-")===0||h.indexOf("data-")===0?c.attrs[h.toLowerCase()]=v:c.attrs[G2(h)]=v}return c},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=m4(n,T4);return i.attrs.style=Wn(Wn({},i.attrs.style),s),t.apply(void 0,[e.tag,Wn(Wn({},i.attrs),l)].concat(Rp(r)))}var Q2=!1;try{Q2=!0}catch{}function S4(){if(!Q2&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function I0(t){if(t&&df(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(xp.icon)return xp.icon(t);if(t===null)return null;if(t&&df(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function lh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ss({},t,e):{}}var b0={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},as=bf.forwardRef(function(t,e){var n=Wn(Wn({},b0),t),r=n.icon,i=n.mask,o=n.symbol,s=n.className,l=n.title,c=n.titleId,h=n.maskId,v=I0(r),y=lh("classes",[].concat(Rp(_4(n)),Rp((s||"").split(" ")))),_=lh("transform",typeof n.transform=="string"?xp.transform(n.transform):n.transform),x=lh("mask",I0(i)),O=h4(v,Wn(Wn(Wn(Wn({},y),_),x),{},{symbol:o,title:l,titleId:c,maskId:h}));if(!O)return S4("Could not find icon",v),null;var D=O.abstract,M={ref:e};return Object.keys(n).forEach(function(k){b0.hasOwnProperty(k)||(M[k]=n[k])}),k4(D[0],M)});as.displayName="FontAwesomeIcon";as.propTypes={beat:ue.bool,border:ue.bool,beatFade:ue.bool,bounce:ue.bool,className:ue.string,fade:ue.bool,flash:ue.bool,mask:ue.oneOfType([ue.object,ue.array,ue.string]),maskId:ue.string,fixedWidth:ue.bool,inverse:ue.bool,flip:ue.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ue.oneOfType([ue.object,ue.array,ue.string]),listItem:ue.bool,pull:ue.oneOf(["right","left"]),pulse:ue.bool,rotation:ue.oneOf([0,90,180,270]),shake:ue.bool,size:ue.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ue.bool,spinPulse:ue.bool,spinReverse:ue.bool,symbol:ue.oneOfType([ue.bool,ue.string]),title:ue.string,titleId:ue.string,transform:ue.oneOfType([ue.string,ue.object]),swapOpacity:ue.bool};var k4=K2.bind(null,bf.createElement),C4={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]},A4={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},P4={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},x4={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},R4={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},S0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Y2;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,E){function I(){}I.prototype=E.prototype,S.D=E.prototype,S.prototype=new I,S.prototype.constructor=S,S.C=function(A,R,L){for(var P=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)P[Ut-2]=arguments[Ut];return E.prototype[R].apply(A,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,E,I){I||(I=0);var A=Array(16);if(typeof E=="string")for(var R=0;16>R;++R)A[R]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(R=0;16>R;++R)A[R]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=S.g[0],I=S.g[1],R=S.g[2];var L=S.g[3],P=E+(L^I&(R^L))+A[0]+3614090360&4294967295;E=I+(P<<7&4294967295|P>>>25),P=L+(R^E&(I^R))+A[1]+3905402710&4294967295,L=E+(P<<12&4294967295|P>>>20),P=R+(I^L&(E^I))+A[2]+606105819&4294967295,R=L+(P<<17&4294967295|P>>>15),P=I+(E^R&(L^E))+A[3]+3250441966&4294967295,I=R+(P<<22&4294967295|P>>>10),P=E+(L^I&(R^L))+A[4]+4118548399&4294967295,E=I+(P<<7&4294967295|P>>>25),P=L+(R^E&(I^R))+A[5]+1200080426&4294967295,L=E+(P<<12&4294967295|P>>>20),P=R+(I^L&(E^I))+A[6]+2821735955&4294967295,R=L+(P<<17&4294967295|P>>>15),P=I+(E^R&(L^E))+A[7]+4249261313&4294967295,I=R+(P<<22&4294967295|P>>>10),P=E+(L^I&(R^L))+A[8]+1770035416&4294967295,E=I+(P<<7&4294967295|P>>>25),P=L+(R^E&(I^R))+A[9]+2336552879&4294967295,L=E+(P<<12&4294967295|P>>>20),P=R+(I^L&(E^I))+A[10]+4294925233&4294967295,R=L+(P<<17&4294967295|P>>>15),P=I+(E^R&(L^E))+A[11]+2304563134&4294967295,I=R+(P<<22&4294967295|P>>>10),P=E+(L^I&(R^L))+A[12]+1804603682&4294967295,E=I+(P<<7&4294967295|P>>>25),P=L+(R^E&(I^R))+A[13]+4254626195&4294967295,L=E+(P<<12&4294967295|P>>>20),P=R+(I^L&(E^I))+A[14]+2792965006&4294967295,R=L+(P<<17&4294967295|P>>>15),P=I+(E^R&(L^E))+A[15]+1236535329&4294967295,I=R+(P<<22&4294967295|P>>>10),P=E+(R^L&(I^R))+A[1]+4129170786&4294967295,E=I+(P<<5&4294967295|P>>>27),P=L+(I^R&(E^I))+A[6]+3225465664&4294967295,L=E+(P<<9&4294967295|P>>>23),P=R+(E^I&(L^E))+A[11]+643717713&4294967295,R=L+(P<<14&4294967295|P>>>18),P=I+(L^E&(R^L))+A[0]+3921069994&4294967295,I=R+(P<<20&4294967295|P>>>12),P=E+(R^L&(I^R))+A[5]+3593408605&4294967295,E=I+(P<<5&4294967295|P>>>27),P=L+(I^R&(E^I))+A[10]+38016083&4294967295,L=E+(P<<9&4294967295|P>>>23),P=R+(E^I&(L^E))+A[15]+3634488961&4294967295,R=L+(P<<14&4294967295|P>>>18),P=I+(L^E&(R^L))+A[4]+3889429448&4294967295,I=R+(P<<20&4294967295|P>>>12),P=E+(R^L&(I^R))+A[9]+568446438&4294967295,E=I+(P<<5&4294967295|P>>>27),P=L+(I^R&(E^I))+A[14]+3275163606&4294967295,L=E+(P<<9&4294967295|P>>>23),P=R+(E^I&(L^E))+A[3]+4107603335&4294967295,R=L+(P<<14&4294967295|P>>>18),P=I+(L^E&(R^L))+A[8]+1163531501&4294967295,I=R+(P<<20&4294967295|P>>>12),P=E+(R^L&(I^R))+A[13]+2850285829&4294967295,E=I+(P<<5&4294967295|P>>>27),P=L+(I^R&(E^I))+A[2]+4243563512&4294967295,L=E+(P<<9&4294967295|P>>>23),P=R+(E^I&(L^E))+A[7]+1735328473&4294967295,R=L+(P<<14&4294967295|P>>>18),P=I+(L^E&(R^L))+A[12]+2368359562&4294967295,I=R+(P<<20&4294967295|P>>>12),P=E+(I^R^L)+A[5]+4294588738&4294967295,E=I+(P<<4&4294967295|P>>>28),P=L+(E^I^R)+A[8]+2272392833&4294967295,L=E+(P<<11&4294967295|P>>>21),P=R+(L^E^I)+A[11]+1839030562&4294967295,R=L+(P<<16&4294967295|P>>>16),P=I+(R^L^E)+A[14]+4259657740&4294967295,I=R+(P<<23&4294967295|P>>>9),P=E+(I^R^L)+A[1]+2763975236&4294967295,E=I+(P<<4&4294967295|P>>>28),P=L+(E^I^R)+A[4]+1272893353&4294967295,L=E+(P<<11&4294967295|P>>>21),P=R+(L^E^I)+A[7]+4139469664&4294967295,R=L+(P<<16&4294967295|P>>>16),P=I+(R^L^E)+A[10]+3200236656&4294967295,I=R+(P<<23&4294967295|P>>>9),P=E+(I^R^L)+A[13]+681279174&4294967295,E=I+(P<<4&4294967295|P>>>28),P=L+(E^I^R)+A[0]+3936430074&4294967295,L=E+(P<<11&4294967295|P>>>21),P=R+(L^E^I)+A[3]+3572445317&4294967295,R=L+(P<<16&4294967295|P>>>16),P=I+(R^L^E)+A[6]+76029189&4294967295,I=R+(P<<23&4294967295|P>>>9),P=E+(I^R^L)+A[9]+3654602809&4294967295,E=I+(P<<4&4294967295|P>>>28),P=L+(E^I^R)+A[12]+3873151461&4294967295,L=E+(P<<11&4294967295|P>>>21),P=R+(L^E^I)+A[15]+530742520&4294967295,R=L+(P<<16&4294967295|P>>>16),P=I+(R^L^E)+A[2]+3299628645&4294967295,I=R+(P<<23&4294967295|P>>>9),P=E+(R^(I|~L))+A[0]+4096336452&4294967295,E=I+(P<<6&4294967295|P>>>26),P=L+(I^(E|~R))+A[7]+1126891415&4294967295,L=E+(P<<10&4294967295|P>>>22),P=R+(E^(L|~I))+A[14]+2878612391&4294967295,R=L+(P<<15&4294967295|P>>>17),P=I+(L^(R|~E))+A[5]+4237533241&4294967295,I=R+(P<<21&4294967295|P>>>11),P=E+(R^(I|~L))+A[12]+1700485571&4294967295,E=I+(P<<6&4294967295|P>>>26),P=L+(I^(E|~R))+A[3]+2399980690&4294967295,L=E+(P<<10&4294967295|P>>>22),P=R+(E^(L|~I))+A[10]+4293915773&4294967295,R=L+(P<<15&4294967295|P>>>17),P=I+(L^(R|~E))+A[1]+2240044497&4294967295,I=R+(P<<21&4294967295|P>>>11),P=E+(R^(I|~L))+A[8]+1873313359&4294967295,E=I+(P<<6&4294967295|P>>>26),P=L+(I^(E|~R))+A[15]+4264355552&4294967295,L=E+(P<<10&4294967295|P>>>22),P=R+(E^(L|~I))+A[6]+2734768916&4294967295,R=L+(P<<15&4294967295|P>>>17),P=I+(L^(R|~E))+A[13]+1309151649&4294967295,I=R+(P<<21&4294967295|P>>>11),P=E+(R^(I|~L))+A[4]+4149444226&4294967295,E=I+(P<<6&4294967295|P>>>26),P=L+(I^(E|~R))+A[11]+3174756917&4294967295,L=E+(P<<10&4294967295|P>>>22),P=R+(E^(L|~I))+A[2]+718787259&4294967295,R=L+(P<<15&4294967295|P>>>17),P=I+(L^(R|~E))+A[9]+3951481745&4294967295,S.g[0]=S.g[0]+E&4294967295,S.g[1]=S.g[1]+(R+(P<<21&4294967295|P>>>11))&4294967295,S.g[2]=S.g[2]+R&4294967295,S.g[3]=S.g[3]+L&4294967295}r.prototype.u=function(S,E){E===void 0&&(E=S.length);for(var I=E-this.blockSize,A=this.B,R=this.h,L=0;L<E;){if(R==0)for(;L<=I;)i(this,S,L),L+=this.blockSize;if(typeof S=="string"){for(;L<E;)if(A[R++]=S.charCodeAt(L++),R==this.blockSize){i(this,A),R=0;break}}else for(;L<E;)if(A[R++]=S[L++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=E},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var E=1;E<S.length-8;++E)S[E]=0;var I=8*this.o;for(E=S.length-8;E<S.length;++E)S[E]=I&255,I/=256;for(this.u(S),S=Array(16),E=I=0;4>E;++E)for(var A=0;32>A;A+=8)S[I++]=this.g[E]>>>A&255;return S};function o(S,E){var I=l;return Object.prototype.hasOwnProperty.call(I,S)?I[S]:I[S]=E(S)}function s(S,E){this.h=E;for(var I=[],A=!0,R=S.length-1;0<=R;R--){var L=S[R]|0;A&&L==E||(I[R]=L,A=!1)}this.g=I}var l={};function c(S){return-128<=S&&128>S?o(S,function(E){return new s([E|0],0>E?-1:0)}):new s([S|0],0>S?-1:0)}function h(S){if(isNaN(S)||!isFinite(S))return y;if(0>S)return M(h(-S));for(var E=[],I=1,A=0;S>=I;A++)E[A]=S/I|0,I*=4294967296;return new s(E,0)}function v(S,E){if(S.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S.charAt(0)=="-")return M(v(S.substring(1),E));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(E,8)),A=y,R=0;R<S.length;R+=8){var L=Math.min(8,S.length-R),P=parseInt(S.substring(R,R+L),E);8>L?(L=h(Math.pow(E,L)),A=A.j(L).add(h(P))):(A=A.j(I),A=A.add(h(P)))}return A}var y=c(0),_=c(1),x=c(16777216);t=s.prototype,t.m=function(){if(D(this))return-M(this).m();for(var S=0,E=1,I=0;I<this.g.length;I++){var A=this.i(I);S+=(0<=A?A:4294967296+A)*E,E*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(O(this))return"0";if(D(this))return"-"+M(this).toString(S);for(var E=h(Math.pow(S,6)),I=this,A="";;){var R=V(I,E).g;I=k(I,R.j(E));var L=((0<I.g.length?I.g[0]:I.h)>>>0).toString(S);if(I=R,O(I))return L+A;for(;6>L.length;)L="0"+L;A=L+A}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function O(S){if(S.h!=0)return!1;for(var E=0;E<S.g.length;E++)if(S.g[E]!=0)return!1;return!0}function D(S){return S.h==-1}t.l=function(S){return S=k(this,S),D(S)?-1:O(S)?0:1};function M(S){for(var E=S.g.length,I=[],A=0;A<E;A++)I[A]=~S.g[A];return new s(I,~S.h).add(_)}t.abs=function(){return D(this)?M(this):this},t.add=function(S){for(var E=Math.max(this.g.length,S.g.length),I=[],A=0,R=0;R<=E;R++){var L=A+(this.i(R)&65535)+(S.i(R)&65535),P=(L>>>16)+(this.i(R)>>>16)+(S.i(R)>>>16);A=P>>>16,L&=65535,P&=65535,I[R]=P<<16|L}return new s(I,I[I.length-1]&-2147483648?-1:0)};function k(S,E){return S.add(M(E))}t.j=function(S){if(O(this)||O(S))return y;if(D(this))return D(S)?M(this).j(M(S)):M(M(this).j(S));if(D(S))return M(this.j(M(S)));if(0>this.l(x)&&0>S.l(x))return h(this.m()*S.m());for(var E=this.g.length+S.g.length,I=[],A=0;A<2*E;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<S.g.length;R++){var L=this.i(A)>>>16,P=this.i(A)&65535,Ut=S.i(R)>>>16,Jn=S.i(R)&65535;I[2*A+2*R]+=P*Jn,T(I,2*A+2*R),I[2*A+2*R+1]+=L*Jn,T(I,2*A+2*R+1),I[2*A+2*R+1]+=P*Ut,T(I,2*A+2*R+1),I[2*A+2*R+2]+=L*Ut,T(I,2*A+2*R+2)}for(A=0;A<E;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=E;A<2*E;A++)I[A]=0;return new s(I,0)};function T(S,E){for(;(S[E]&65535)!=S[E];)S[E+1]+=S[E]>>>16,S[E]&=65535,E++}function C(S,E){this.g=S,this.h=E}function V(S,E){if(O(E))throw Error("division by zero");if(O(S))return new C(y,y);if(D(S))return E=V(M(S),E),new C(M(E.g),M(E.h));if(D(E))return E=V(S,M(E)),new C(M(E.g),E.h);if(30<S.g.length){if(D(S)||D(E))throw Error("slowDivide_ only works with positive integers.");for(var I=_,A=E;0>=A.l(S);)I=z(I),A=z(A);var R=q(I,1),L=q(A,1);for(A=q(A,2),I=q(I,2);!O(A);){var P=L.add(A);0>=P.l(S)&&(R=R.add(I),L=P),A=q(A,1),I=q(I,1)}return E=k(S,R.j(E)),new C(R,E)}for(R=y;0<=S.l(E);){for(I=Math.max(1,Math.floor(S.m()/E.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),L=h(I),P=L.j(E);D(P)||0<P.l(S);)I-=A,L=h(I),P=L.j(E);O(L)&&(L=_),R=R.add(L),S=k(S,P)}return new C(R,S)}t.A=function(S){return V(this,S).h},t.and=function(S){for(var E=Math.max(this.g.length,S.g.length),I=[],A=0;A<E;A++)I[A]=this.i(A)&S.i(A);return new s(I,this.h&S.h)},t.or=function(S){for(var E=Math.max(this.g.length,S.g.length),I=[],A=0;A<E;A++)I[A]=this.i(A)|S.i(A);return new s(I,this.h|S.h)},t.xor=function(S){for(var E=Math.max(this.g.length,S.g.length),I=[],A=0;A<E;A++)I[A]=this.i(A)^S.i(A);return new s(I,this.h^S.h)};function z(S){for(var E=S.g.length+1,I=[],A=0;A<E;A++)I[A]=S.i(A)<<1|S.i(A-1)>>>31;return new s(I,S.h)}function q(S,E){var I=E>>5;E%=32;for(var A=S.g.length-I,R=[],L=0;L<A;L++)R[L]=0<E?S.i(L+I)>>>E|S.i(L+I+1)<<32-E:S.i(L+I);return new s(R,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=h,s.fromString=v,Y2=s}).apply(typeof S0<"u"?S0:typeof self<"u"?self:typeof window<"u"?window:{});var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var X2,J2,Aa,Z2,Sc,Np,eE,tE,nE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,m){return a==Array.prototype||a==Object.prototype||(a[d]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ec=="object"&&ec];for(var d=0;d<a.length;++d){var m=a[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var m=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var N=a[w];if(!(N in m))break e;m=m[N]}a=a[a.length-1],w=m[a],d=d(w),d!=w&&d!=null&&e(m,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var m=0,w=!1,N={next:function(){if(!w&&m<a.length){var j=m++;return{value:d(j,a[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return o(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function h(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function v(a,d,m){return a.call.apply(a.bind,arguments)}function y(a,d,m){if(!a)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,w),a.apply(d,N)}}return function(){return a.apply(d,arguments)}}function _(a,d,m){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:y,_.apply(null,arguments)}function x(a,d){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function O(a,d){function m(){}m.prototype=d.prototype,a.aa=d.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(w,N,j){for(var K=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)K[ye-2]=arguments[ye];return d.prototype[N].apply(w,K)}}function D(a){const d=a.length;if(0<d){const m=Array(d);for(let w=0;w<d;w++)m[w]=a[w];return m}return[]}function M(a,d){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(c(w)){const N=a.length||0,j=w.length||0;a.length=N+j;for(let K=0;K<j;K++)a[N+K]=w[K]}else a.push(w)}}class k{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function T(a){return/^[\s\xa0]*$/.test(a)}function C(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var z=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function q(a,d,m){for(const w in a)d.call(m,a[w],w,a)}function S(a,d){for(const m in a)d.call(void 0,a[m],m,a)}function E(a){const d={};for(const m in a)d[m]=a[m];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,d){let m,w;for(let N=1;N<arguments.length;N++){w=arguments[N];for(m in w)a[m]=w[m];for(let j=0;j<I.length;j++)m=I[j],Object.prototype.hasOwnProperty.call(w,m)&&(a[m]=w[m])}}function R(a){var d=1;a=a.split(":");const m=[];for(;0<d&&a.length;)m.push(a.shift()),d--;return a.length&&m.push(a.join(":")),m}function L(a){l.setTimeout(()=>{throw a},0)}function P(){var a=G;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ut{constructor(){this.h=this.g=null}add(d,m){const w=Jn.get();w.set(d,m),this.h?this.h.next=w:this.g=w,this.h=w}}var Jn=new k(()=>new De,a=>a.reset());class De{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Qt,Y=!1,G=new Ut,oe=()=>{const a=l.Promise.resolve(void 0);Qt=()=>{a.then(Ce)}};var Ce=()=>{for(var a;a=P();){try{a.h.call(a.g)}catch(m){L(m)}var d=Jn;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Y=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var F=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,d),l.removeEventListener("test",m,d)}catch{}return a}();function _n(a,d){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(z){e:{try{V(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else m=="mouseover"?d=a.fromElement:m=="mouseout"&&(d=a.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Bt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&_n.aa.h.call(this)}}O(_n,Le);var Bt={2:"touch",3:"pen",4:"mouse"};_n.prototype.h=function(){_n.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),zs=0;function It(a,d,m,w,N){this.listener=a,this.proxy=null,this.src=d,this.type=m,this.capture=!!w,this.ha=N,this.key=++zs,this.da=this.fa=!1}function un(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ai(a){this.src=a,this.g={},this.h=0}Ai.prototype.add=function(a,d,m,w,N){var j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);var K=bo(a,d,w,N);return-1<K?(d=a[K],m||(d.fa=!1)):(d=new It(d,this.src,j,!!w,N),d.fa=m,a.push(d)),d};function $s(a,d){var m=d.type;if(m in a.g){var w=a.g[m],N=Array.prototype.indexOf.call(w,d,void 0),j;(j=0<=N)&&Array.prototype.splice.call(w,N,1),j&&(un(d),a.g[m].length==0&&(delete a.g[m],a.h--))}}function bo(a,d,m,w){for(var N=0;N<a.length;++N){var j=a[N];if(!j.da&&j.listener==d&&j.capture==!!m&&j.ha==w)return N}return-1}var Mr="closure_lm_"+(1e6*Math.random()|0),Pi={};function Vr(a,d,m,w,N){if(Array.isArray(d)){for(var j=0;j<d.length;j++)Vr(a,d[j],m,w,N);return null}return m=ko(m),a&&a[ln]?a.K(d,m,h(w)?!!w.capture:!!w,N):Hs(a,d,m,!1,w,N)}function Hs(a,d,m,w,N,j){if(!d)throw Error("Invalid event type");var K=h(N)?!!N.capture:!!N,ye=Ws(a);if(ye||(a[Mr]=ye=new Ai(a)),m=ye.add(d,m,w,K,j),m.proxy)return m;if(w=bt(),m.proxy=w,w.src=a,w.listener=m,a.addEventListener)F||(N=K),N===void 0&&(N=!1),a.addEventListener(d.toString(),w,N);else if(a.attachEvent)a.attachEvent(ve(d.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function bt(){function a(m){return d.call(a.src,a.listener,m)}const d=xi;return a}function Fr(a,d,m,w,N){if(Array.isArray(d))for(var j=0;j<d.length;j++)Fr(a,d[j],m,w,N);else w=h(w)?!!w.capture:!!w,m=ko(m),a&&a[ln]?(a=a.i,d=String(d).toString(),d in a.g&&(j=a.g[d],m=bo(j,m,w,N),-1<m&&(un(j[m]),Array.prototype.splice.call(j,m,1),j.length==0&&(delete a.g[d],a.h--)))):a&&(a=Ws(a))&&(d=a.g[d.toString()],a=-1,d&&(a=bo(d,m,w,N)),(m=-1<a?d[a]:null)&&dt(m))}function dt(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[ln])$s(d.i,a);else{var m=a.type,w=a.proxy;d.removeEventListener?d.removeEventListener(m,w,a.capture):d.detachEvent?d.detachEvent(ve(m),w):d.addListener&&d.removeListener&&d.removeListener(w),(m=Ws(d))?($s(m,a),m.h==0&&(m.src=null,d[Mr]=null)):un(a)}}}function ve(a){return a in Pi?Pi[a]:Pi[a]="on"+a}function xi(a,d){if(a.da)a=!0;else{d=new _n(d,this);var m=a.listener,w=a.ha||a.src;a.fa&&dt(a),a=m.call(w,d)}return a}function Ws(a){return a=a[Mr],a instanceof Ai?a:null}var So="__closure_events_fn_"+(1e9*Math.random()>>>0);function ko(a){return typeof a=="function"?a:(a[So]||(a[So]=function(d){return a.handleEvent(d)}),a[So])}function Qe(){_e.call(this),this.i=new Ai(this),this.M=this,this.F=null}O(Qe,_e),Qe.prototype[ln]=!0,Qe.prototype.removeEventListener=function(a,d,m,w){Fr(this,a,d,m,w)};function Ye(a,d){var m,w=a.F;if(w)for(m=[];w;w=w.F)m.push(w);if(a=a.M,w=d.type||d,typeof d=="string")d=new Le(d,a);else if(d instanceof Le)d.target=d.target||a;else{var N=d;d=new Le(w,a),A(d,N)}if(N=!0,m)for(var j=m.length-1;0<=j;j--){var K=d.g=m[j];N=Zn(K,w,!0,d)&&N}if(K=d.g=a,N=Zn(K,w,!0,d)&&N,N=Zn(K,w,!1,d)&&N,m)for(j=0;j<m.length;j++)K=d.g=m[j],N=Zn(K,w,!1,d)&&N}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var m=a.g[d],w=0;w<m.length;w++)un(m[w]);delete a.g[d],a.h--}}this.F=null},Qe.prototype.K=function(a,d,m,w){return this.i.add(String(a),d,!1,m,w)},Qe.prototype.L=function(a,d,m,w){return this.i.add(String(a),d,!0,m,w)};function Zn(a,d,m,w){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,j=0;j<d.length;++j){var K=d[j];if(K&&!K.da&&K.capture==m){var ye=K.listener,Je=K.ha||K.src;K.fa&&$s(a.i,K),N=ye.call(Je,w)!==!1&&N}}return N&&!w.defaultPrevented}function Yt(a,d,m){if(typeof a=="function")m&&(a=_(a,m));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function er(a){a.g=Yt(()=>{a.g=null,a.i&&(a.i=!1,er(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class tr extends _e{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:er(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(a){_e.call(this),this.h=a,this.g={}}O(Ri,_e);var nr=[];function jr(a){q(a.g,function(d,m){this.g.hasOwnProperty(m)&&dt(d)},a),a.g={}}Ri.prototype.N=function(){Ri.aa.N.call(this),jr(this)},Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Co=l.JSON.stringify,Ao=l.JSON.parse,qs=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Gs(){}Gs.prototype.h=null;function Po(a){return a.h||(a.h=a.i())}function xo(){}var Vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ks(){Le.call(this,"d")}O(Ks,Le);function ht(){Le.call(this,"c")}O(ht,Le);var pt={},$l=null;function mt(){return $l=$l||new Qe}pt.La="serverreachability";function Oi(a){Le.call(this,pt.La,a)}O(Oi,Le);function Ur(a){const d=mt();Ye(d,new Oi(d))}pt.STAT_EVENT="statevent";function Qs(a,d){Le.call(this,pt.STAT_EVENT,a),this.stat=d}O(Qs,Le);function ne(a){const d=mt();Ye(d,new Qs(d,a))}pt.Ma="timingevent";function Xt(a,d){Le.call(this,pt.Ma,a),this.size=d}O(Xt,Le);function zt(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function Jt(){this.g=!0}Jt.prototype.xa=function(){this.g=!1};function We(a,d,m,w,N,j){a.info(function(){if(a.g)if(j)for(var K="",ye=j.split("&"),Je=0;Je<ye.length;Je++){var pe=ye[Je].split("=");if(1<pe.length){var ot=pe[0];pe=pe[1];var Ze=ot.split("_");K=2<=Ze.length&&Ze[1]=="type"?K+(ot+"="+pe+"&"):K+(ot+"=redacted&")}}else K=null;else K=j;return"XMLHTTP REQ ("+w+") [attempt "+N+"]: "+d+`
`+m+`
`+K})}function it(a,d,m,w,N,j,K){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+N+"]: "+d+`
`+m+`
`+j+" "+K})}function Fn(a,d,m,w){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Ni(a,m)+(w?" "+w:"")})}function Hl(a,d){a.info(function(){return"TIMEOUT: "+d})}Jt.prototype.info=function(){};function Ni(a,d){if(!a.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var w=m[a];if(!(2>w.length)){var N=w[1];if(Array.isArray(N)&&!(1>N.length)){var j=N[0];if(j!="noop"&&j!="stop"&&j!="close")for(var K=1;K<N.length;K++)N[K]=""}}}}return Co(m)}catch{return d}}var Xe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ro;function Di(){}O(Di,Gs),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},Ro=new Di;function cn(a,d,m,w){this.j=a,this.i=d,this.l=m,this.R=w||1,this.U=new Ri(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ql}function ql(){this.i=null,this.g="",this.h=!1}var Ys={},Xs={};function Js(a,d,m){a.L=1,a.v=Mi(En(d)),a.m=m,a.P=!0,jn(a,null)}function jn(a,d){a.F=Date.now(),Oo(a),a.A=En(a.v);var m=a.A,w=a.R;Array.isArray(w)||(w=[String(w)]),iu(m.i,"t",w),a.C=0,m=a.j.J,a.h=new ql,a.g=la(a.j,m?d:null,!a.m),0<a.O&&(a.M=new tr(_(a.Y,a,a.g),a.O)),d=a.U,m=a.g,w=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(nr[0]=N.toString()),N=nr);for(var j=0;j<N.length;j++){var K=Vr(m,N[j],w||d.handleEvent,!1,d.h||d);if(!K)break;d.g[K.key]=K}d=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Ur(),We(a.i,a.u,a.A,a.l,a.R,a.m)}cn.prototype.ca=function(a){a=a.target;const d=this.M;d&&St(a)==3?d.j():this.Y(a)},cn.prototype.Y=function(a){try{if(a==this.g)e:{const Ze=St(this.g);var d=this.g.Ba();const Wr=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||du(this.g)))){this.J||Ze!=4||d==7||(d==8||0>=Wr?Ur(3):Ur(2)),Zs(this);var m=this.g.Z();this.X=m;t:if(Gl(this)){var w=du(this.g);a="";var N=w.length,j=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),rr(this);var K="";break t}this.h.i=new l.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,a+=this.h.i.decode(w[d],{stream:!(j&&d==N-1)});w.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=m==200,it(this.i,this.u,this.A,this.l,this.R,Ze,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,Je=this.g;if((ye=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(ye)){var pe=ye;break t}}pe=null}if(m=pe)Fn(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ea(this,m);else{this.o=!1,this.s=3,ne(12),ir(this),rr(this);break e}}if(this.P){m=!0;let Lt;for(;!this.J&&this.C<K.length;)if(Lt=sd(this,K),Lt==Xs){Ze==4&&(this.s=4,ne(14),m=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==Ys){this.s=4,ne(15),Fn(this.i,this.l,K,"[Invalid Chunk]"),m=!1;break}else Fn(this.i,this.l,Lt,null),ea(this,Lt);if(Gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||K.length!=0||this.h.h||(this.s=1,ne(16),m=!1),this.o=this.o&&m,!m)Fn(this.i,this.l,K,"[Invalid Chunked Response]"),ir(this),rr(this);else if(0<K.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),sa(ot),ot.M=!0,ne(11))}}else Fn(this.i,this.l,K,null),ea(this,K);Ze==4&&ir(this),this.o&&!this.J&&(Ze==4?aa(this.j,this):(this.o=!1,Oo(this)))}else hu(this.g),m==400&&0<K.indexOf("Unknown SID")?(this.s=3,ne(12)):(this.s=0,ne(13)),ir(this),rr(this)}}}catch{}finally{}};function Gl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function sd(a,d){var m=a.C,w=d.indexOf(`
`,m);return w==-1?Xs:(m=Number(d.substring(m,w)),isNaN(m)?Ys:(w+=1,w+m>d.length?Xs:(d=d.slice(w,w+m),a.C=w+m,d)))}cn.prototype.cancel=function(){this.J=!0,ir(this)};function Oo(a){a.S=Date.now()+a.I,Kl(a,a.I)}function Kl(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zt(_(a.ba,a),d)}function Zs(a){a.B&&(l.clearTimeout(a.B),a.B=null)}cn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Hl(this.i,this.A),this.L!=2&&(Ur(),ne(17)),ir(this),this.s=2,rr(this)):Kl(this,this.S-a)};function rr(a){a.j.G==0||a.J||aa(a.j,a)}function ir(a){Zs(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,jr(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function ea(a,d){try{var m=a.j;if(m.G!=0&&(m.g==a||Li(m.h,a))){if(!a.K&&Li(m.h,a)&&m.G==3){try{var w=m.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var N=w;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)Uo(m),Vo(m);else break e;jo(m),ne(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=zt(_(m.Za,m),6e3));if(1>=Xl(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ar(m,11)}else if((a.K||m.g==a)&&Uo(m),!T(d))for(N=m.Da.g.parse(d),d=0;d<N.length;d++){let pe=N[d];if(m.T=pe[0],pe=pe[1],m.G==2)if(pe[0]=="c"){m.K=pe[1],m.ia=pe[2];const ot=pe[3];ot!=null&&(m.la=ot,m.j.info("VER="+m.la));const Ze=pe[4];Ze!=null&&(m.Aa=Ze,m.j.info("SVER="+m.Aa));const Wr=pe[5];Wr!=null&&typeof Wr=="number"&&0<Wr&&(w=1.5*Wr,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Lt=a.g;if(Lt){const Bi=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var j=w.h;j.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ta(j,j.h),j.h=null))}if(w.D){const zo=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;zo&&(w.ya=zo,we(w.I,w.D,zo))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var K=a;if(w.qa=_u(w,w.J?w.ia:null,w.W),K.K){Jl(w.h,K);var ye=K,Je=w.L;Je&&(ye.I=Je),ye.B&&(Zs(ye),Oo(ye)),w.g=K}else yu(w);0<m.i.length&&Fo(m)}else pe[0]!="stop"&&pe[0]!="close"||ar(m,7);else m.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?ar(m,7):oa(m):pe[0]!="noop"&&m.l&&m.l.ta(pe),m.v=0)}}Ur(4)}catch{}}var or=class{constructor(a,d){this.g=a,this.map=d}};function Ql(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xl(a){return a.h?1:a.g?a.g.size:0}function Li(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function ta(a,d){a.g?a.g.add(d):a.h=d}function Jl(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Ql.prototype.cancel=function(){if(this.i=Zl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const m of a.g.values())d=d.concat(m.D);return d}return D(a.i)}function ad(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],m=a.length,w=0;w<m;w++)d.push(a[w]);return d}d=[],m=0;for(w in a)d[m++]=a[w];return d}function ld(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var m=0;m<a;m++)d.push(m);return d}d=[],m=0;for(const w in a)d[m++]=w;return d}}}function Ee(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var m=ld(a),w=ad(a),N=w.length,j=0;j<N;j++)d.call(void 0,w[j],m&&m[j],a)}var eu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ud(a,d){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var w=a[m].indexOf("="),N=null;if(0<=w){var j=a[m].substring(0,w);N=a[m].substring(w+1)}else j=a[m];d(j,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function sr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof sr){this.h=a.h,No(this,a.j),this.o=a.o,this.g=a.g,Do(this,a.s),this.l=a.l;var d=a.i,m=new Vi;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Lo(this,m),this.m=a.m}else a&&(d=String(a).match(eu))?(this.h=!1,No(this,d[1]||"",!0),this.o=Un(d[2]||""),this.g=Un(d[3]||"",!0),Do(this,d[4]),this.l=Un(d[5]||"",!0),Lo(this,d[6]||"",!0),this.m=Un(d[7]||"")):(this.h=!1,this.i=new Vi(null,this.h))}sr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Ie(d,tu,!0),":");var m=this.g;return(m||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Ie(d,tu,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(Ie(m,m.charAt(0)=="/"?nu:fd,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",Ie(m,hd)),a.join("")};function En(a){return new sr(a)}function No(a,d,m){a.j=m?Un(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Do(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Lo(a,d,m){d instanceof Vi?(a.i=d,pd(a.i,a.h)):(m||(d=Ie(d,dd)),a.i=new Vi(d,a.h))}function we(a,d,m){a.i.set(d,m)}function Mi(a){return we(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Un(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ie(a,d,m){return typeof a=="string"?(a=encodeURI(a).replace(d,cd),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function cd(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var tu=/[#\/\?@]/g,fd=/[#\?:]/g,nu=/[#\?]/g,dd=/[#\?@]/g,hd=/#/g;function Vi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Tn(a){a.g||(a.g=new Map,a.h=0,a.i&&ud(a.i,function(d,m){a.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Vi.prototype,t.add=function(a,d){Tn(this),this.i=null,a=Br(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(d),this.h+=1,this};function ru(a,d){Tn(a),d=Br(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function na(a,d){return Tn(a),d=Br(a,d),a.g.has(d)}t.forEach=function(a,d){Tn(this),this.g.forEach(function(m,w){m.forEach(function(N){a.call(d,N,w,this)},this)},this)},t.na=function(){Tn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let w=0;w<d.length;w++){const N=a[w];for(let j=0;j<N.length;j++)m.push(d[w])}return m},t.V=function(a){Tn(this);let d=[];if(typeof a=="string")na(this,a)&&(d=d.concat(this.g.get(Br(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)d=d.concat(a[m])}return d},t.set=function(a,d){return Tn(this),this.i=null,a=Br(this,a),na(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function iu(a,d,m){ru(a,d),0<m.length&&(a.i=null,a.g.set(Br(a,d),D(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var w=d[m];const j=encodeURIComponent(String(w)),K=this.V(w);for(w=0;w<K.length;w++){var N=j;K[w]!==""&&(N+="="+encodeURIComponent(String(K[w]))),a.push(N)}}return this.i=a.join("&")};function Br(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function pd(a,d){d&&!a.j&&(Tn(a),a.i=null,a.g.forEach(function(m,w){var N=w.toLowerCase();w!=N&&(ru(this,w),iu(this,N,m))},a)),a.j=d}function md(a,d){const m=new Jt;if(l.Image){const w=new Image;w.onload=x(Bn,m,"TestLoadImage: loaded",!0,d,w),w.onerror=x(Bn,m,"TestLoadImage: error",!1,d,w),w.onabort=x(Bn,m,"TestLoadImage: abort",!1,d,w),w.ontimeout=x(Bn,m,"TestLoadImage: timeout",!1,d,w),l.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else d(!1)}function gd(a,d){const m=new Jt,w=new AbortController,N=setTimeout(()=>{w.abort(),Bn(m,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:w.signal}).then(j=>{clearTimeout(N),j.ok?Bn(m,"TestPingServer: ok",!0,d):Bn(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),Bn(m,"TestPingServer: error",!1,d)})}function Bn(a,d,m,w,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),w(m)}catch{}}function vd(){this.g=new qs}function ou(a,d,m){const w=m||"";try{Ee(a,function(N,j){let K=N;h(N)&&(K=Co(N)),d.push(w+j+"="+encodeURIComponent(K))})}catch(N){throw d.push(w+"type="+encodeURIComponent("_badmap")),N}}function Fi(a){this.l=a.Ub||null,this.j=a.eb||!1}O(Fi,Gs),Fi.prototype.g=function(){return new ji(this.l,this.j)},Fi.prototype.i=function(a){return function(){return a}}({});function ji(a,d){Qe.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(ji,Qe),t=ji.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,fn(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ui(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fn(this)),this.g&&(this.readyState=3,fn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;su(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function su(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Ui(this):fn(this),this.readyState==3&&su(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ui(this))},t.Qa=function(a){this.g&&(this.response=a,Ui(this))},t.ga=function(){this.g&&Ui(this)};function Ui(a){a.readyState=4,a.l=null,a.j=null,a.v=null,fn(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=d.next();return a.join(`\r
`)};function fn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ra(a){let d="";return q(a,function(m,w){d+=w,d+=":",d+=m,d+=`\r
`}),d}function ia(a,d,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=ra(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):we(a,d,m))}function be(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(be,Qe);var au=/^https?$/i,yd=["POST","PUT"];t=be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ro.g(),this.v=this.o?Po(this.o):Po(Ro),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(j){lu(this,j);return}if(a=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var N in w)m.set(N,w[N]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())m.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(j=>j.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(yd,d,void 0))||w||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,K]of m)this.g.setRequestHeader(j,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fu(this),this.u=!0,this.g.send(a),this.u=!1}catch(j){lu(this,j)}};function lu(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,uu(a),Mo(a)}function uu(a){a.A||(a.A=!0,Ye(a,"complete"),Ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ye(this,"complete"),Ye(this,"abort"),Mo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mo(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cu(this):this.bb())},t.bb=function(){cu(this)};function cu(a){if(a.h&&typeof s<"u"&&(!a.v[1]||St(a)!=4||a.Z()!=2)){if(a.u&&St(a)==4)Yt(a.Ea,0,a);else if(Ye(a,"readystatechange"),St(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var w;if(w=K===0){var N=String(a.D).match(eu)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),w=!au.test(N?N.toLowerCase():"")}m=w}if(m)Ye(a,"complete"),Ye(a,"success");else{a.m=6;try{var j=2<St(a)?a.g.statusText:""}catch{j=""}a.l=j+" ["+a.Z()+"]",uu(a)}}finally{Mo(a)}}}}function Mo(a,d){if(a.g){fu(a);const m=a.g,w=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Ye(a,"ready");try{m.onreadystatechange=w}catch{}}}function fu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function St(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Ao(d)}};function du(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function hu(a){const d={};a=(a.g&&2<=St(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(T(a[w]))continue;var m=R(a[w]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const j=d[N]||[];d[N]=j,j.push(m)}S(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zr(a,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||d}function pu(a){this.Aa=0,this.i=[],this.j=new Jt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zr("baseRetryDelayMs",5e3,a),this.cb=zr("retryDelaySeedMs",1e4,a),this.Wa=zr("forwardChannelMaxRetries",2,a),this.wa=zr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ql(a&&a.concurrentRequestLimit),this.Da=new vd,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=pu.prototype,t.la=8,t.G=1,t.connect=function(a,d,m,w){ne(0),this.W=a,this.H=d||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=_u(this,null,this.W),Fo(this)};function oa(a){if(mu(a),a.G==3){var d=a.U++,m=En(a.I);if(we(m,"SID",a.K),we(m,"RID",d),we(m,"TYPE","terminate"),dn(a,m),d=new cn(a,a.j,d),d.L=2,d.v=Mi(En(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=d.v,m=!0),m||(d.g=la(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Oo(d)}wu(a)}function Vo(a){a.g&&(sa(a),a.g.cancel(),a.g=null)}function mu(a){Vo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Uo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Fo(a){if(!Yl(a.h)&&!a.s){a.s=!0;var d=a.Ga;Qt||oe(),Y||(Qt(),Y=!0),G.add(d,a),a.B=0}}function wd(a,d){return Xl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zt(_(a.Ga,a,d),$r(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new cn(this,this.j,a);let j=this.o;if(this.S&&(j?(j=E(j),A(j,this.S)):j=this.S),this.m!==null||this.O||(N.H=j,j=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=vu(this,N,d),m=En(this.I),we(m,"RID",a),we(m,"CVER",22),this.D&&we(m,"X-HTTP-Session-Id",this.D),dn(this,m),j&&(this.O?d="headers="+encodeURIComponent(String(ra(j)))+"&"+d:this.m&&ia(m,this.m,j)),ta(this.h,N),this.Ua&&we(m,"TYPE","init"),this.P?(we(m,"$req",d),we(m,"SID","null"),N.T=!0,Js(N,m,null)):Js(N,m,d),this.G=2}}else this.G==3&&(a?gu(this,a):this.i.length==0||Yl(this.h)||gu(this))};function gu(a,d){var m;d?m=d.l:m=a.U++;const w=En(a.I);we(w,"SID",a.K),we(w,"RID",m),we(w,"AID",a.T),dn(a,w),a.m&&a.o&&ia(w,a.m,a.o),m=new cn(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),d&&(a.i=d.D.concat(a.i)),d=vu(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ta(a.h,m),Js(m,w,d)}function dn(a,d){a.H&&q(a.H,function(m,w){we(d,w,m)}),a.l&&Ee({},function(m,w){we(d,w,m)})}function vu(a,d,m){m=Math.min(a.i.length,m);var w=a.l?_(a.l.Na,a.l,a):null;e:{var N=a.i;let j=-1;for(;;){const K=["count="+m];j==-1?0<m?(j=N[0].g,K.push("ofs="+j)):j=0:K.push("ofs="+j);let ye=!0;for(let Je=0;Je<m;Je++){let pe=N[Je].g;const ot=N[Je].map;if(pe-=j,0>pe)j=Math.max(0,N[Je].g-100),ye=!1;else try{ou(ot,K,"req"+pe+"_")}catch{w&&w(ot)}}if(ye){w=K.join("&");break e}}}return a=a.i.splice(0,m),d.D=a,w}function yu(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Qt||oe(),Y||(Qt(),Y=!0),G.add(d,a),a.v=0}}function jo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zt(_(a.Fa,a),$r(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,In(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zt(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ne(10),Vo(this),In(this))};function sa(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function In(a){a.g=new cn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=En(a.qa);we(d,"RID","rpc"),we(d,"SID",a.K),we(d,"AID",a.T),we(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&we(d,"TO",a.ja),we(d,"TYPE","xmlhttp"),dn(a,d),a.m&&a.o&&ia(d,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=Mi(En(d)),m.m=null,m.P=!0,jn(m,a)}t.Za=function(){this.C!=null&&(this.C=null,Vo(this),jo(this),ne(19))};function Uo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function aa(a,d){var m=null;if(a.g==d){Uo(a),sa(a),a.g=null;var w=2}else if(Li(a.h,d))m=d.D,Jl(a.h,d),w=1;else return;if(a.G!=0){if(d.o)if(w==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var N=a.B;w=mt(),Ye(w,new Xt(w,m)),Fo(a)}else yu(a);else if(N=d.s,N==3||N==0&&0<d.X||!(w==1&&wd(a,d)||w==2&&jo(a)))switch(m&&0<m.length&&(d=a.h,d.i=d.i.concat(m)),N){case 1:ar(a,5);break;case 4:ar(a,10);break;case 3:ar(a,6);break;default:ar(a,2)}}}function $r(a,d){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*d}function ar(a,d){if(a.j.info("Error code "+d),d==2){var m=_(a.fb,a),w=a.Xa;const N=!w;w=new sr(w||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||No(w,"https"),Mi(w),N?md(w.toString(),m):gd(w.toString(),m)}else ne(2);a.G=0,a.l&&a.l.sa(d),wu(a),mu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ne(2)):(this.j.info("Failed to ping google.com"),ne(1))};function wu(a){if(a.G=0,a.ka=[],a.l){const d=Zl(a.h);(d.length!=0||a.i.length!=0)&&(M(a.ka,d),M(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function _u(a,d,m){var w=m instanceof sr?En(m):new sr(m);if(w.g!="")d&&(w.g=d+"."+w.g),Do(w,w.s);else{var N=l.location;w=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var j=new sr(null);w&&No(j,w),d&&(j.g=d),N&&Do(j,N),m&&(j.l=m),w=j}return m=a.D,d=a.ya,m&&d&&we(w,m,d),we(w,"VER",a.la),dn(a,w),w}function la(a,d,m){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new be(new Fi({eb:m})):new be(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function lr(){}t=lr.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Bo(){}Bo.prototype.g=function(a,d){return new Dt(a,d)};function Dt(a,d){Qe.call(this),this.g=new pu(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!T(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Hr(this)}O(Dt,Qe),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){oa(this.g)},Dt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=Co(a),a=m);d.i.push(new or(d.Ya++,a)),d.G==3&&Fo(d)},Dt.prototype.N=function(){this.g.l=null,delete this.j,oa(this.g),delete this.g,Dt.aa.N.call(this)};function Eu(a){Ks.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const m in d){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}O(Eu,Ks);function Tu(){ht.call(this),this.status=1}O(Tu,ht);function Hr(a){this.g=a}O(Hr,lr),Hr.prototype.ua=function(){Ye(this.g,"a")},Hr.prototype.ta=function(a){Ye(this.g,new Eu(a))},Hr.prototype.sa=function(a){Ye(this.g,new Tu)},Hr.prototype.ra=function(){Ye(this.g,"b")},Bo.prototype.createWebChannel=Bo.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,nE=function(){return new Bo},tE=function(){return mt()},eE=pt,Np={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xe.NO_ERROR=0,Xe.TIMEOUT=8,Xe.HTTP_ERROR=6,Sc=Xe,Wl.COMPLETE="complete",Z2=Wl,xo.EventType=Vn,Vn.OPEN="a",Vn.CLOSE="b",Vn.ERROR="c",Vn.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,Aa=xo,J2=Fi,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,X2=be}).apply(typeof ec<"u"?ec:typeof self<"u"?self:typeof window<"u"?window:{});const k0="@firebase/firestore";/**
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
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
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
 */const vo=new Vm("@firebase/firestore");function ya(){return vo.logLevel}function te(t,...e){if(vo.logLevel<=de.DEBUG){const n=e.map(yg);vo.debug(`Firestore (${Us}): ${t}`,...n)}}function yo(t,...e){if(vo.logLevel<=de.ERROR){const n=e.map(yg);vo.error(`Firestore (${Us}): ${t}`,...n)}}function hf(t,...e){if(vo.logLevel<=de.WARN){const n=e.map(yg);vo.warn(`Firestore (${Us}): ${t}`,...n)}}function yg(t){if(typeof t=="string")return t;try{/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: `+t;throw yo(e),new Error(e)}function ft(t,e){t||he()}function Oe(t,e){return t}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ro{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class rE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class N4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class D4{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let o=new ro;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ro,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const c=o;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ro)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ft(typeof r.accessToken=="string"),new rE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ft(e===null||typeof e=="string"),new Pt(e)}}class L4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class M4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new L4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class V4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,te("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ft(typeof n.token=="string"),this.R=n.token,new V4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function j4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class iE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=j4(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Me(e)}static min(){return new Me(new ct(0,0))}static max(){return new Me(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yl{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ge extends yl{construct(e,n,r){return new Ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ge(n)}static emptyPath(){return new Ge([])}}const U4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends yl{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return U4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new ie(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new ie(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(r+=l,i++):(o(),i++)}if(o(),s)throw new ie(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Ge.fromString(e))}static fromName(e){return new le(Ge.fromString(e).popFirst(5))}static empty(){return new le(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Ge(e.slice()))}}function B4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Me.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new Ti(i,le.empty(),e)}function z4(t){return new Ti(t.readTime,t.key,-1)}class Ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ti(Me.min(),le.empty(),-1)}static max(){return new Ti(Me.max(),le.empty(),-1)}}function $4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
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
 */const H4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function oE(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==H4)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&n()},c=>r(c))}),s=!0,o===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const o=e.length,s=new Array(o);let l=0;for(let c=0;c<o;c++){const h=c;n(e[h]).next(v=>{s[h]=v,++l,l===o&&r(s)},v=>i(v))}})}static doWhile(e,n){return new $((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function q4(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Jf(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sE{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}sE.oe=-1;function wg(t){return t==null}function pf(t){return t===0&&1/t==-1/0}function G4(t){return typeof t=="number"&&Number.isInteger(t)&&!pf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function C0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Kt{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new Kt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new Kt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tc(this.root,e,this.comparator,!0)}}class tc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??vt.RED,this.left=i??vt.EMPTY,this.right=o??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new vt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,i,o){return this}insert(e,n,r){return new vt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ot{constructor(e){this.comparator=e,this.data=new Kt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new A0(this.data.getIterator())}getIteratorFrom(e){return new A0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ot(this.comparator);return n.data=e,n}}class A0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class On{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new On([])}unionWith(e){let n=new Ot(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new On(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class K4 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pr{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new K4("Invalid base64 string: "+o):o}}(e);return new Pr(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Pr(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pr.EMPTY_BYTE_STRING=new Pr("");const Q4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wo(t){if(ft(!!t),typeof t=="string"){let e=0;const n=Q4.exec(t);if(ft(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:yt(t.seconds),nanos:yt(t.nanos)}}function yt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wl(t){return typeof t=="string"?Pr.fromBase64String(t):Pr.fromUint8Array(t)}/**
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
 */function _g(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lE(t){const e=t.mapValue.fields.__previous_value__;return _g(e)?lE(e):e}function mf(t){const e=wo(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class Y4{constructor(e,n,r,i,o,s,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class gf{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gf("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gf&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const nc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_g(t)?4:X4(t)?9007199254740991:10:he()}function Xn(t,e){if(t===e)return!0;const n=Ps(t);if(n!==Ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mf(t).isEqual(mf(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=wo(i.timestampValue),l=wo(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return wl(i.bytesValue).isEqual(wl(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return yt(i.geoPointValue.latitude)===yt(o.geoPointValue.latitude)&&yt(i.geoPointValue.longitude)===yt(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return yt(i.integerValue)===yt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=yt(i.doubleValue),l=yt(o.doubleValue);return s===l?pf(s)===pf(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(C0(s)!==C0(l))return!1;for(const c in s)if(s.hasOwnProperty(c)&&(l[c]===void 0||!Xn(s[c],l[c])))return!1;return!0}(t,e);default:return he()}}function _l(t,e){return(t.values||[]).find(n=>Xn(n,e))!==void 0}function xs(t,e){if(t===e)return 0;const n=Ps(t),r=Ps(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=yt(o.integerValue||o.doubleValue),c=yt(s.integerValue||s.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return P0(t.timestampValue,e.timestampValue);case 4:return P0(mf(t),mf(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(o,s){const l=wl(o),c=wl(s);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),c=s.split("/");for(let h=0;h<l.length&&h<c.length;h++){const v=Se(l[h],c[h]);if(v!==0)return v}return Se(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=Se(yt(o.latitude),yt(s.latitude));return l!==0?l:Se(yt(o.longitude),yt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const l=o.values||[],c=s.values||[];for(let h=0;h<l.length&&h<c.length;++h){const v=xs(l[h],c[h]);if(v)return v}return Se(l.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===nc.mapValue&&s===nc.mapValue)return 0;if(o===nc.mapValue)return 1;if(s===nc.mapValue)return-1;const l=o.fields||{},c=Object.keys(l),h=s.fields||{},v=Object.keys(h);c.sort(),v.sort();for(let y=0;y<c.length&&y<v.length;++y){const _=Se(c[y],v[y]);if(_!==0)return _;const x=xs(l[c[y]],h[v[y]]);if(x!==0)return x}return Se(c.length,v.length)}(t.mapValue,e.mapValue);default:throw he()}}function P0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=wo(t),r=wo(e),i=Se(n.seconds,r.seconds);return i!==0?i:Se(n.nanos,r.nanos)}function Rs(t){return Dp(t)}function Dp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wo(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wl(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Dp(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Dp(n.fields[s])}`;return i+"}"}(t.mapValue):he()}function Lp(t){return!!t&&"integerValue"in t}function Eg(t){return!!t&&"arrayValue"in t}function kc(t){return!!t&&"mapValue"in t}function Ba(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ba(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ba(t.arrayValue.values[n]);return e}return Object.assign({},t)}function X4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pn{constructor(e){this.value=e}static empty(){return new Pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!kc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ba(n)}setAll(e){let n=wt.emptyPath(),r={},i=[];e.forEach((s,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}s?r[l.lastSegment()]=Ba(s):i.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());kc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];kc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){jl(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Pn(Ba(this.value))}}function uE(t){const e=[];return jl(t.fields,(n,r)=>{const i=new wt([n]);if(kc(r)){const o=uE(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new On(e)}/**
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
 */class An{constructor(e,n,r,i,o,s,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new An(e,0,Me.min(),Me.min(),Me.min(),Pn.empty(),0)}static newFoundDocument(e,n,r,i){return new An(e,1,n,Me.min(),r,i,0)}static newNoDocument(e,n){return new An(e,2,n,Me.min(),Me.min(),Pn.empty(),0)}static newUnknownDocument(e,n){return new An(e,3,n,Me.min(),Me.min(),Pn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof An&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new An(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vf{constructor(e,n){this.position=e,this.inclusive=n}}function x0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=le.comparator(le.fromName(s.referenceValue),n.key):r=xs(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function R0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class yf{constructor(e,n="asc"){this.field=e,this.dir=n}}function J4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cE{}class lt extends cE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eO(e,n,r):n==="array-contains"?new rO(e,r):n==="in"?new iO(e,r):n==="not-in"?new oO(e,r):n==="array-contains-any"?new sO(e,r):new lt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tO(e,r):new nO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xs(n,this.value)):n!==null&&Ps(this.value)===Ps(n)&&this.matchesComparison(xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ii extends cE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ii(e,n)}matches(e){return fE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fE(t){return t.op==="and"}function dE(t){return Z4(t)&&fE(t)}function Z4(t){for(const e of t.filters)if(e instanceof Ii)return!1;return!0}function Mp(t){if(t instanceof lt)return t.field.canonicalString()+t.op.toString()+Rs(t.value);if(dE(t))return t.filters.map(e=>Mp(e)).join(",");{const e=t.filters.map(n=>Mp(n)).join(",");return`${t.op}(${e})`}}function hE(t,e){return t instanceof lt?function(r,i){return i instanceof lt&&r.op===i.op&&r.field.isEqual(i.field)&&Xn(r.value,i.value)}(t,e):t instanceof Ii?function(r,i){return i instanceof Ii&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,l)=>o&&hE(s,i.filters[l]),!0):!1}(t,e):void he()}function pE(t){return t instanceof lt?function(n){return`${n.field.canonicalString()} ${n.op} ${Rs(n.value)}`}(t):t instanceof Ii?function(n){return n.op.toString()+" {"+n.getFilters().map(pE).join(" ,")+"}"}(t):"Filter"}class eO extends lt{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class tO extends lt{constructor(e,n){super(e,"in",n),this.keys=mE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nO extends lt{constructor(e,n){super(e,"not-in",n),this.keys=mE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class rO extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Eg(n)&&_l(n.arrayValue,this.value)}}class iO extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_l(this.value.arrayValue,n)}}class oO extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(_l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_l(this.value.arrayValue,n)}}class sO extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Eg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_l(this.value.arrayValue,r))}}/**
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
 */class aO{constructor(e,n=null,r=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function O0(t,e=null,n=[],r=[],i=null,o=null,s=null){return new aO(t,e,n,r,i,o,s)}function Tg(t){const e=Oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Mp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),wg(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Rs(r)).join(",")),e.ue=n}return e.ue}function Ig(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!J4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!R0(t.startAt,e.startAt)&&R0(t.endAt,e.endAt)}/**
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
 */class Zf{constructor(e,n=null,r=[],i=[],o=null,s="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lO(t,e,n,r,i,o,s,l){return new Zf(t,e,n,r,i,o,s,l)}function uO(t){return new Zf(t)}function N0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cO(t){return t.collectionGroup!==null}function za(t){const e=Oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new Ot(wt.comparator);return s.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new yf(o,r))}),n.has(wt.keyField().canonicalString())||e.ce.push(new yf(wt.keyField(),r))}return e.ce}function io(t){const e=Oe(t);return e.le||(e.le=fO(e,za(t))),e.le}function fO(t,e){if(t.limitType==="F")return O0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new yf(i.field,o)});const n=t.endAt?new vf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vf(t.startAt.position,t.startAt.inclusive):null;return O0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vp(t,e,n){return new Zf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gE(t,e){return Ig(io(t),io(e))&&t.limitType===e.limitType}function vE(t){return`${Tg(io(t))}|lt:${t.limitType}`}function wa(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>pE(i)).join(", ")}]`),wg(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Rs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Rs(i)).join(",")),`Target(${r})`}(io(t))}; limitType=${t.limitType})`}function bg(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):le.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of za(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,l,c){const h=x0(s,l,c);return s.inclusive?h<=0:h<0}(r.startAt,za(r),i)||r.endAt&&!function(s,l,c){const h=x0(s,l,c);return s.inclusive?h>=0:h>0}(r.endAt,za(r),i))}(t,e)}function dO(t){return(e,n)=>{let r=!1;for(const i of za(t)){const o=hO(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function hO(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(o,s,l){const c=s.data.field(o),h=l.data.field(o);return c!==null&&h!==null?xs(c,h):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
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
 */class Bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){jl(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return aE(this.inner)}size(){return this.innerSize}}/**
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
 */const pO=new Kt(le.comparator);function wf(){return pO}const yE=new Kt(le.comparator);function rc(...t){let e=yE;for(const n of t)e=e.insert(n.key,n);return e}function wE(t){let e=yE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zi(){return $a()}function _E(){return $a()}function $a(){return new Bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const mO=new Kt(le.comparator),gO=new Ot(le.comparator);function Rt(...t){let e=gO;for(const n of t)e=e.add(n);return e}const vO=new Ot(Se);function yO(){return vO}/**
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
 */function EE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pf(e)?"-0":e}}function TE(t){return{integerValue:""+t}}function wO(t,e){return G4(e)?TE(e):EE(t,e)}/**
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
 */class ed{constructor(){this._=void 0}}function _O(t,e,n){return t instanceof _f?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&_g(o)&&(o=lE(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof El?bE(t,e):t instanceof Tl?SE(t,e):function(i,o){const s=IE(i,o),l=D0(s)+D0(i.Pe);return Lp(s)&&Lp(i.Pe)?TE(l):EE(i.serializer,l)}(t,e)}function EO(t,e,n){return t instanceof El?bE(t,e):t instanceof Tl?SE(t,e):n}function IE(t,e){return t instanceof Ef?function(r){return Lp(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class _f extends ed{}class El extends ed{constructor(e){super(),this.elements=e}}function bE(t,e){const n=kE(e);for(const r of t.elements)n.some(i=>Xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Tl extends ed{constructor(e){super(),this.elements=e}}function SE(t,e){let n=kE(e);for(const r of t.elements)n=n.filter(i=>!Xn(i,r));return{arrayValue:{values:n}}}class Ef extends ed{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function D0(t){return yt(t.integerValue||t.doubleValue)}function kE(t){return Eg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function TO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof El&&i instanceof El||r instanceof Tl&&i instanceof Tl?As(r.elements,i.elements,Xn):r instanceof Ef&&i instanceof Ef?Xn(r.Pe,i.Pe):r instanceof _f&&i instanceof _f}(t.transform,e.transform)}class IO{constructor(e,n){this.version=e,this.transformResults=n}}class wr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wr}static exists(e){return new wr(void 0,e)}static updateTime(e){return new wr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class td{}function CE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new PE(t.key,wr.none()):new Ul(t.key,t.data,wr.none());{const n=t.data,r=Pn.empty();let i=new Ot(wt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Io(t.key,r,new On(i.toArray()),wr.none())}}function bO(t,e,n){t instanceof Ul?function(i,o,s){const l=i.value.clone(),c=M0(i.fieldTransforms,o,s.transformResults);l.setAll(c),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Io?function(i,o,s){if(!Cc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=M0(i.fieldTransforms,o,s.transformResults),c=o.data;c.setAll(AE(i)),c.setAll(l),o.convertToFoundDocument(s.version,c).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ha(t,e,n,r){return t instanceof Ul?function(o,s,l,c){if(!Cc(o.precondition,s))return l;const h=o.value.clone(),v=V0(o.fieldTransforms,c,s);return h.setAll(v),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Io?function(o,s,l,c){if(!Cc(o.precondition,s))return l;const h=V0(o.fieldTransforms,c,s),v=s.data;return v.setAll(AE(o)),v.setAll(h),s.convertToFoundDocument(s.version,v).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(o,s,l){return Cc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,n)}function SO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=IE(r.transform,i||null);o!=null&&(n===null&&(n=Pn.empty()),n.set(r.field,o))}return n||null}function L0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&As(r,i,(o,s)=>TO(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ul extends td{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Io extends td{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function AE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function M0(t,e,n){const r=new Map;ft(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);r.set(o.field,EO(s,l,n[i]))}return r}function V0(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,_O(o,s,e))}return r}class PE extends td{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kO extends td{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class CO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&bO(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ha(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ha(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_E();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=n.has(i.key)?null:l;const c=CE(s,l);c!==null&&r.set(i.key,c),s.isValidDocument()||s.convertToNoDocument(Me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Rt())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>L0(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>L0(n,r))}}class Sg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ft(e.mutations.length===r.length);let i=function(){return mO}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new Sg(e,n,r,i)}}/**
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
 */class AO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var qe,me;function PO(t){switch(t){default:return he();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function xO(t){if(t===void 0)return yo("GRPC error has no .code"),W.UNKNOWN;switch(t){case qe.OK:return W.OK;case qe.CANCELLED:return W.CANCELLED;case qe.UNKNOWN:return W.UNKNOWN;case qe.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case qe.INTERNAL:return W.INTERNAL;case qe.UNAVAILABLE:return W.UNAVAILABLE;case qe.UNAUTHENTICATED:return W.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case qe.NOT_FOUND:return W.NOT_FOUND;case qe.ALREADY_EXISTS:return W.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return W.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case qe.ABORTED:return W.ABORTED;case qe.OUT_OF_RANGE:return W.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return W.UNIMPLEMENTED;case qe.DATA_LOSS:return W.DATA_LOSS;default:return he()}}(me=qe||(qe={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Y2([4294967295,4294967295],0);class RO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fp(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function OO(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function NO(t,e){return Fp(t,e.toTimestamp())}function ys(t){return ft(!!t),Me.fromTimestamp(function(n){const r=wo(n);return new ct(r.seconds,r.nanos)}(t))}function xE(t,e){return jp(t,e).canonicalString()}function jp(t,e){const n=function(i){return new Ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function DO(t){const e=Ge.fromString(t);return ft(zO(e)),e}function Up(t,e){return xE(t.databaseId,e.path)}function LO(t){const e=DO(t);return e.length===4?Ge.emptyPath():VO(e)}function MO(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function VO(t){return ft(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function F0(t,e,n){return{name:Up(t,e),fields:n.value.mapValue.fields}}function FO(t,e){let n;if(e instanceof Ul)n={update:F0(t,e.key,e.value)};else if(e instanceof PE)n={delete:Up(t,e.key)};else if(e instanceof Io)n={update:F0(t,e.key,e.data),updateMask:BO(e.fieldMask)};else{if(!(e instanceof kO))return he();n={verify:Up(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const l=s.transform;if(l instanceof _f)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof El)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Tl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ef)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:NO(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:he()}(t,e.precondition)),n}function jO(t,e){return t&&t.length>0?(ft(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?ys(i.updateTime):ys(o);return s.isEqual(Me.min())&&(s=ys(o)),new IO(s,i.transformResults||[])}(n,e))):[]}function UO(t){let e=LO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ft(r===1);const v=n.from[0];v.allDescendants?i=v.collectionId:e=e.child(v.collectionId)}let o=[];n.where&&(o=function(y){const _=RE(y);return _ instanceof Ii&&dE(_)?_.getFilters():[_]}(n.where));let s=[];n.orderBy&&(s=function(y){return y.map(_=>function(O){return new yf(Wo(O.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(y){let _;return _=typeof y=="object"?y.value:y,wg(_)?null:_}(n.limit));let c=null;n.startAt&&(c=function(y){const _=!!y.before,x=y.values||[];return new vf(x,_)}(n.startAt));let h=null;return n.endAt&&(h=function(y){const _=!y.before,x=y.values||[];return new vf(x,_)}(n.endAt)),lO(e,i,s,o,l,"F",c,h)}function RE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wo(n.unaryFilter.field);return lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Wo(n.unaryFilter.field);return lt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Wo(n.unaryFilter.field);return lt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Wo(n.unaryFilter.field);return lt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return lt.create(Wo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ii.create(n.compositeFilter.filters.map(r=>RE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function Wo(t){return wt.fromServerFormat(t.fieldPath)}function BO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zO(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $O{constructor(e){this.ct=e}}function HO(t){const e=UO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vp(e,e.limit,"L"):e}/**
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
 */class WO{constructor(){this._n=new qO}addToCollectionParentIndex(e,n){return this._n.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Ti.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class qO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ot(Ge.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ot(Ge.comparator)).toArray()}}/**
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
 */class Os{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Os(0)}static Ln(){return new Os(-1)}}/**
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
 */class GO{constructor(){this.changes=new Bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,An.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class QO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ha(r.mutation,i,On.empty(),ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Rt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Rt()){const i=Zi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=rc();return o.forEach((l,c)=>{s=s.insert(l,c.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Zi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Rt()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{n.set(s,l)})})}computeViews(e,n,r,i){let o=wf();const s=$a(),l=function(){return $a()}();return n.forEach((c,h)=>{const v=r.get(h.key);i.has(h.key)&&(v===void 0||v.mutation instanceof Io)?o=o.insert(h.key,h):v!==void 0?(s.set(h.key,v.mutation.getFieldMask()),Ha(v.mutation,h,v.mutation.getFieldMask(),ct.now())):s.set(h.key,On.empty())}),this.recalculateAndSaveOverlays(e,o).next(c=>(c.forEach((h,v)=>s.set(h,v)),n.forEach((h,v)=>{var y;return l.set(h,new KO(v,(y=s.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=$a();let i=new Kt((s,l)=>s-l),o=Rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const l of s)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let v=r.get(c)||On.empty();v=l.applyToLocalView(h,v),r.set(c,v);const y=(i.get(l.batchId)||Rt()).add(c);i=i.insert(l.batchId,y)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,v=c.value,y=_E();v.forEach(_=>{if(!o.has(_)){const x=CE(n.get(_),r.get(_));x!==null&&y.set(_,x),o=o.add(_)}}),s.push(this.documentOverlayCache.saveOverlays(e,h,y))}return $.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return le.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):$.resolve(Zi());let l=-1,c=o;return s.next(h=>$.forEach(h,(v,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(v)?$.resolve():this.remoteDocumentCache.getEntry(e,v).next(_=>{c=c.insert(v,_)}))).next(()=>this.populateOverlays(e,h,o)).next(()=>this.computeViews(e,c,h,Rt())).next(v=>({batchId:l,changes:wE(v)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let i=rc();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=rc();return this.indexManager.getCollectionParents(e,o).next(l=>$.forEach(l,c=>{const h=function(y,_){return new Zf(_,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,c.child(o));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(v=>{v.forEach((y,_)=>{s=s.insert(y,_)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((c,h)=>{const v=h.getKey();s.get(v)===null&&(s=s.insert(v,An.newInvalidDocument(v)))});let l=rc();return s.forEach((c,h)=>{const v=o.get(c);v!==void 0&&Ha(v.mutation,h,On.empty(),ct.now()),bg(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class YO{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return $.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ys(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:HO(i.bundledQuery),readTime:ys(i.readTime)}}(n)),$.resolve()}}/**
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
 */class XO{constructor(){this.overlays=new Kt(le.comparator),this.hr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zi();return $.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Zi(),o=n.length+1,s=new le(n.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===o&&c.largestBatchId>r&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Kt((h,v)=>h-v);const s=this.overlays.getIterator();for(;s.hasNext();){const h=s.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let v=o.get(h.largestBatchId);v===null&&(v=Zi(),o=o.insert(h.largestBatchId,v)),v.set(h.getKey(),h)}}const l=Zi(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,v)=>l.set(h,v)),!(l.size()>=i)););return $.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new AO(n,r));let o=this.hr.get(n);o===void 0&&(o=Rt(),this.hr.set(n,o)),this.hr.set(n,o.add(r.key))}}/**
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
 */class kg{constructor(){this.Pr=new Ot(st.Ir),this.Tr=new Ot(st.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new st(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new le(new Ge([])),r=new st(n,e),i=new st(n,e+1),o=[];return this.Tr.forEachInRange([r,i],s=>{this.Ar(s),o.push(s.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new le(new Ge([])),r=new st(n,e),i=new st(n,e+1);let o=Rt();return this.Tr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new st(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return le.comparator(e.key,n.key)||Se(e.pr,n.pr)}static Er(e,n){return Se(e.pr,n.pr)||le.comparator(e.key,n.key)}}/**
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
 */class JO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ot(st.Ir)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new CO(o,n,r,i);this.mutationQueue.push(s);for(const l of i)this.wr=this.wr.add(new st(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,n){return $.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),i=new st(n,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],s=>{const l=this.Sr(s.pr);o.push(l)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ot(Se);return n.forEach(i=>{const o=new st(i,0),s=new st(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,s],l=>{r=r.add(l.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;le.isDocumentKey(o)||(o=o.child(""));const s=new st(new le(o),0);let l=new Ot(Se);return this.wr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.pr)),!0)},s),$.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ft(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return $.forEach(n.mutations,i=>{const o=new st(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new st(n,0),i=this.wr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ZO{constructor(e){this.vr=e,this.docs=function(){return new Kt(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():An.newInvalidDocument(n))}getEntries(e,n){let r=wf();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():An.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=wf();const s=n.path,l=new le(s.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:v}}=c.getNext();if(!s.isPrefixOf(h.path))break;h.path.length>s.length+1||$4(z4(v),r)<=0||(i.has(v.key)||bg(n,v))&&(o=o.insert(v.key,v.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,n,r,i){he()}Fr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eN(this)}getSize(e){return $.resolve(this.size)}}class eN extends GO{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class tN{constructor(e){this.persistence=e,this.Mr=new Bs(n=>Tg(n),Ig),this.lastRemoteSnapshotVersion=Me.min(),this.highestTargetId=0,this.Or=0,this.Nr=new kg,this.targetCount=0,this.Lr=Os.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),$.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Os(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.qn(n),$.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Mr.forEach((s,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Nr.containsKey(n))}}/**
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
 */class nN{constructor(e,n){this.Br={},this.overlays={},this.kr=new sE(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new tN(this),this.indexManager=new WO,this.remoteDocumentCache=function(i){return new ZO(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new $O(n),this.$r=new YO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new JO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const i=new rN(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,n){return $.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class rN extends W4{constructor(e){super(),this.currentSequenceNumber=e}}class Cg{constructor(e){this.persistence=e,this.zr=new kg,this.jr=null}static Hr(e){return new Cg(e)}get Jr(){if(this.jr)return this.jr;throw he()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),$.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{const i=le.fromPath(r);return this.Yr(e,i).next(o=>{o||n.removeEntry(i,Me.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return $.or([()=>$.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Ag{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Rt(),i=Rt();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ag(e,n.fromCache,r,i)}}/**
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
 */class iN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oN{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return US()?8:q4(Tt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.ji(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Hi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new iN;return this.Ji(e,n,s).next(l=>{if(o.result=l,this.Ui)return this.Yi(e,n,s,l.size)})}).next(()=>o.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ya()<=de.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",wa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$.resolve()):(ya()<=de.DEBUG&&te("QueryEngine","Query:",wa(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ya()<=de.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",wa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,io(n))):$.resolve())}ji(e,n){if(N0(n))return $.resolve(null);let r=io(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Vp(n,null,"F"),r=io(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=Rt(...o);return this.zi.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Zi(n,l);return this.Xi(n,h,s,c.readTime)?this.ji(e,Vp(n,null,"F")):this.es(e,h,n,c)}))})))}Hi(e,n,r,i){return N0(n)||i.isEqual(Me.min())?$.resolve(null):this.zi.getDocuments(e,r).next(o=>{const s=this.Zi(n,o);return this.Xi(n,s,r,i)?$.resolve(null):(ya()<=de.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wa(n)),this.es(e,s,n,B4(i,-1)).next(l=>l))})}Zi(e,n){let r=new Ot(dO(e));return n.forEach((i,o)=>{bg(e,o)&&(r=r.add(o))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,n,r){return ya()<=de.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",wa(n)),this.zi.getDocumentsMatchingQuery(e,n,Ti.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class sN{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Kt(Se),this.rs=new Bs(o=>Tg(o),Ig),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QO(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function aN(t,e,n,r){return new sN(t,e,n,r)}async function OE(t,e){const n=Oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],l=[];let c=Rt();for(const h of i){s.push(h.batchId);for(const v of h.mutations)c=c.add(v.key)}for(const h of o){l.push(h.batchId);for(const v of h.mutations)c=c.add(v.key)}return n.localDocuments.getDocuments(r,c).next(h=>({us:h,removedBatchIds:s,addedBatchIds:l}))})})}function lN(t,e){const n=Oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,v){const y=h.batch,_=y.keys();let x=$.resolve();return _.forEach(O=>{x=x.next(()=>v.getEntry(c,O)).next(D=>{const M=h.docVersions.get(O);ft(M!==null),D.version.compareTo(M)<0&&(y.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),v.addEntry(D)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(c,y))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Rt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function uN(t){const e=Oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function cN(t,e){const n=Oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class j0{constructor(){this.activeTargetIds=yO()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fN{constructor(){this.no=new j0,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new j0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dN{io(e){}shutdown(){}}/**
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
 */class U0{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ic=null;function uh(){return ic===null?ic=function(){return 268435456+Math.round(2147483648*Math.random())}():ic++,"0x"+ic.toString(16)}/**
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
 */const hN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class pN{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const At="WebChannelConnection";class mN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(n,r,i,o,s){const l=uh(),c=this.vo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,o,s),this.Mo(n,c,h,i).then(v=>(te("RestConnection",`Received RPC '${n}' ${l}: `,v),v),v=>{throw hf("RestConnection",`RPC '${n}' ${l} failed with error: `,v,"url: ",c,"request:",i),v})}xo(n,r,i,o,s,l){return this.Co(n,r,i,o,s)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Us}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}vo(n,r){const i=hN[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const o=uh();return new Promise((s,l)=>{const c=new X2;c.setWithCredentials(!0),c.listenOnce(Z2.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Sc.NO_ERROR:const v=c.getResponseJson();te(At,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(v)),s(v);break;case Sc.TIMEOUT:te(At,`RPC '${e}' ${o} timed out`),l(new ie(W.DEADLINE_EXCEEDED,"Request time out"));break;case Sc.HTTP_ERROR:const y=c.getStatus();if(te(At,`RPC '${e}' ${o} failed with status:`,y,"response text:",c.getResponseText()),y>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const x=_==null?void 0:_.error;if(x&&x.status&&x.message){const O=function(M){const k=M.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(k)>=0?k:W.UNKNOWN}(x.status);l(new ie(O,x.message))}else l(new ie(W.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ie(W.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(At,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);te(At,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",h,r,15)})}Oo(e,n,r){const i=uh(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=nE(),l=tE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new J2({})),this.Fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const v=o.join("");te(At,`Creating RPC '${e}' stream ${i}: ${v}`,c);const y=s.createWebChannel(v,c);let _=!1,x=!1;const O=new pN({lo:M=>{x?te(At,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(_||(te(At,`Opening RPC '${e}' stream ${i} transport.`),y.open(),_=!0),te(At,`RPC '${e}' stream ${i} sending:`,M),y.send(M))},ho:()=>y.close()}),D=(M,k,T)=>{M.listen(k,C=>{try{T(C)}catch(V){setTimeout(()=>{throw V},0)}})};return D(y,Aa.EventType.OPEN,()=>{x||(te(At,`RPC '${e}' stream ${i} transport opened.`),O.mo())}),D(y,Aa.EventType.CLOSE,()=>{x||(x=!0,te(At,`RPC '${e}' stream ${i} transport closed`),O.po())}),D(y,Aa.EventType.ERROR,M=>{x||(x=!0,hf(At,`RPC '${e}' stream ${i} transport errored:`,M),O.po(new ie(W.UNAVAILABLE,"The operation could not be completed")))}),D(y,Aa.EventType.MESSAGE,M=>{var k;if(!x){const T=M.data[0];ft(!!T);const C=T,V=C.error||((k=C[0])===null||k===void 0?void 0:k.error);if(V){te(At,`RPC '${e}' stream ${i} received error:`,V);const z=V.status;let q=function(I){const A=qe[I];if(A!==void 0)return xO(A)}(z),S=V.message;q===void 0&&(q=W.INTERNAL,S="Unknown error status: "+z+" with message "+V.message),x=!0,O.po(new ie(q,S)),y.close()}else te(At,`RPC '${e}' stream ${i} received:`,T),O.yo(T)}}),D(l,eE.STAT_EVENT,M=>{M.stat===Np.PROXY?te(At,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===Np.NOPROXY&&te(At,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{O.fo()},0),O}}function ch(){return typeof document<"u"?document:null}/**
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
 */function nd(t){return new RO(t,!0)}/**
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
 */class NE{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&te("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class gN{constructor(e,n,r,i,o,s,l,c){this.oi=e,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new NE(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(yo(n.toString()),yo("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new ie(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vN extends gN{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(ft(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=jO(e.writeResults,e.commitTime),r=ys(e.commitTime);return this.listener.A_(r,n)}return ft(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=MO(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>FO(this.serializer,r))};this.i_(n)}}/**
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
 */class yN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new ie(W.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Co(e,jp(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(W.UNKNOWN,o.toString())})}xo(e,n,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.xo(e,jp(n,r),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie(W.UNKNOWN,s.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class wN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(yo(n),this.y_=!1):te("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class _N{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(s=>{r.enqueueAndForget(async()=>{zl(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=Oe(c);h.M_.add(4),await Bl(h),h.N_.set("Unknown"),h.M_.delete(4),await rd(h)}(this))})}),this.N_=new wN(r,i)}}async function rd(t){if(zl(t))for(const e of t.x_)await e(!0)}async function Bl(t){for(const e of t.x_)await e(!1)}function zl(t){return Oe(t).M_.size===0}async function DE(t,e,n){if(!Jf(e))throw e;t.M_.add(1),await Bl(t),t.N_.set("Offline"),n||(n=()=>uN(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await rd(t)})}function LE(t,e){return e().catch(n=>DE(t,n,e))}async function id(t){const e=Oe(t),n=bi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;EN(e);)try{const i=await cN(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,TN(e,i)}catch(i){await DE(e,i)}ME(e)&&VE(e)}function EN(t){return zl(t)&&t.v_.length<10}function TN(t,e){t.v_.push(e);const n=bi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function ME(t){return zl(t)&&!bi(t).Zo()&&t.v_.length>0}function VE(t){bi(t).start()}async function IN(t){bi(t).V_()}async function bN(t){const e=bi(t);for(const n of t.v_)e.d_(n.mutations)}async function SN(t,e,n){const r=t.v_.shift(),i=Sg.from(r,e,n);await LE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await id(t)}async function kN(t,e){e&&bi(t).E_&&await async function(r,i){if(function(s){return PO(s)&&s!==W.ABORTED}(i.code)){const o=r.v_.shift();bi(r).t_(),await LE(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await id(r)}}(t,e),ME(t)&&VE(t)}async function B0(t,e){const n=Oe(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=zl(n);n.M_.add(3),await Bl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await rd(n)}async function CN(t,e){const n=Oe(t);e?(n.M_.delete(2),await rd(n)):e||(n.M_.add(2),await Bl(n),n.N_.set("Unknown"))}function bi(t){return t.k_||(t.k_=function(n,r,i){const o=Oe(n);return o.f_(),new vN(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:IN.bind(null,t),Ao:kN.bind(null,t),R_:bN.bind(null,t),A_:SN.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await id(t)):(await t.k_.stop(),t.v_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Pg{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ro,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,l=new Pg(e,n,s,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function FE(t,e){if(yo("AsyncQueue",`${e}: ${t}`),Jf(t))return new ie(W.UNAVAILABLE,`${e}: ${t}`);throw t}class AN{constructor(){this.queries=new Bs(e=>vE(e),gE),this.onlineState="Unknown",this.z_=new Set}}function PN(t){t.z_.forEach(e=>{e.next()})}var z0,$0;($0=z0||(z0={})).J_="default",$0.Cache="cache";class xN{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new Bs(l=>vE(l),gE),this.Da=new Map,this.Ca=new Set,this.va=new Kt(le.comparator),this.Fa=new Map,this.Ma=new kg,this.xa={},this.Oa=new Map,this.Na=Os.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function RN(t,e,n){const r=LN(t);try{const i=await function(s,l){const c=Oe(s),h=ct.now(),v=l.reduce((x,O)=>x.add(O.key),Rt());let y,_;return c.persistence.runTransaction("Locally write mutations","readwrite",x=>{let O=wf(),D=Rt();return c.os.getEntries(x,v).next(M=>{O=M,O.forEach((k,T)=>{T.isValidDocument()||(D=D.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(x,O)).next(M=>{y=M;const k=[];for(const T of l){const C=SO(T,y.get(T.key).overlayedDocument);C!=null&&k.push(new Io(T.key,C,uE(C.value.mapValue),wr.exists(!0)))}return c.mutationQueue.addMutationBatch(x,h,k,l)}).next(M=>{_=M;const k=M.applyToLocalDocumentSet(y,D);return c.documentOverlayCache.saveOverlays(x,M.batchId,k)})}).then(()=>({batchId:_.batchId,changes:wE(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,l,c){let h=s.xa[s.currentUser.toKey()];h||(h=new Kt(Se)),h=h.insert(l,c),s.xa[s.currentUser.toKey()]=h}(r,i.batchId,n),await od(r,i.changes),await id(r.remoteStore)}catch(i){const o=FE(i,"Failed to persist write");n.reject(o)}}function H0(t,e,n){const r=Oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((o,s)=>{const l=s.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const c=Oe(s);c.onlineState=l;let h=!1;c.queries.forEach((v,y)=>{for(const _ of y.U_)_.j_(l)&&(h=!0)}),h&&PN(c)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ON(t,e){const n=Oe(t),r=e.batch.batchId;try{const i=await lN(n.localStore,e);UE(n,r,null),jE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await od(n,i)}catch(i){await oE(i)}}async function NN(t,e,n){const r=Oe(t);try{const i=await function(s,l){const c=Oe(s);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let v;return c.mutationQueue.lookupMutationBatch(h,l).next(y=>(ft(y!==null),v=y.keys(),c.mutationQueue.removeMutationBatch(h,y))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,v,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,v)).next(()=>c.localDocuments.getDocuments(h,v))})}(r.localStore,e);UE(r,e,n),jE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await od(r,i)}catch(i){await oE(i)}}function jE(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function UE(t,e,n){const r=Oe(t);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}async function od(t,e,n){const r=Oe(t),i=[],o=[],s=[];r.ba.isEmpty()||(r.ba.forEach((l,c)=>{s.push(r.Ba(c,e,n).then(h=>{if((h||n)&&r.isPrimaryClient){const v=h&&!h.fromCache;r.sharedClientState.updateQueryState(c.targetId,v?"current":"not-current")}if(h){i.push(h);const v=Ag.Ki(c.targetId,h);o.push(v)}}))}),await Promise.all(s),r.Sa.h_(i),await async function(c,h){const v=Oe(c);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>$.forEach(h,_=>$.forEach(_.qi,x=>v.persistence.referenceDelegate.addReference(y,_.targetId,x)).next(()=>$.forEach(_.Qi,x=>v.persistence.referenceDelegate.removeReference(y,_.targetId,x)))))}catch(y){if(!Jf(y))throw y;te("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const _=y.targetId;if(!y.fromCache){const x=v.ns.get(_),O=x.snapshotVersion,D=x.withLastLimboFreeSnapshotVersion(O);v.ns=v.ns.insert(_,D)}}}(r.localStore,o))}async function DN(t,e){const n=Oe(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await OE(n.localStore,e);n.currentUser=e,function(o,s){o.Oa.forEach(l=>{l.forEach(c=>{c.reject(new ie(W.CANCELLED,s))})}),o.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await od(n,r.us)}}function LN(t){const e=Oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ON.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NN.bind(null,e),e}class W0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=nd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return aN(this.persistence,new oN,e.initialUser,this.serializer)}createPersistence(e){return new nN(Cg.Hr,this.serializer)}createSharedClientState(e){return new fN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class MN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>H0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DN.bind(null,this.syncEngine),await CN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new AN}()}createDatastore(e){const n=nd(e.databaseInfo.databaseId),r=function(o){return new mN(o)}(e.databaseInfo);return function(o,s,l,c){return new yN(o,s,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,l){return new _N(r,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,n=>H0(this.syncEngine,n,0),function(){return U0.D()?new U0:new dN}())}createSyncEngine(e,n){return function(i,o,s,l,c,h,v){const y=new xN(i,o,s,l,c,h);return v&&(y.La=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=Oe(r);te("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Bl(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class VN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pt.UNAUTHENTICATED,this.clientId=iE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(W.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ro;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=FE(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fh(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await OE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function q0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jN(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>B0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>B0(e.remoteStore,i)),t._onlineComponents=e}function FN(t){return t.name==="FirebaseError"?t.code===W.FAILED_PRECONDITION||t.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function jN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await fh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!FN(n))throw n;hf("Error using user provided cache. Falling back to memory cache: "+n),await fh(t,new W0)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await fh(t,new W0);return t._offlineComponents}async function UN(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await q0(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await q0(t,new MN))),t._onlineComponents}function BN(t){return UN(t).then(e=>e.syncEngine)}/**
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
 */function BE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const G0=new Map;/**
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
 */function zN(t,e,n){if(!n)throw new ie(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $N(t,e,n,r){if(e===!0&&r===!0)throw new ie(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function K0(t){if(!le.isDocumentKey(t))throw new ie(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Bp(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xg(t);throw new ie(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Q0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$N("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=BE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rg{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Q0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Q0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new O4;switch(r.type){case"firstParty":return new M4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=G0.get(n);r&&(te("ComponentProvider","Removing Datastore"),G0.delete(n),r.terminate())}(this),Promise.resolve()}}function HN(t,e,n,r={}){var i;const o=(t=Bp(t,Rg))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&hf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Pt.MOCK_USER;else{l=DS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ie(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Pt(h)}t._authCredentials=new N4(new rE(l,c))}}/**
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
 */class Og{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Og(this.firestore,e,this._query)}}class _r{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Il(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _r(this.firestore,e,this._key)}}class Il extends Og{constructor(e,n,r){super(e,n,uO(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _r(this.firestore,null,new le(e))}withConverter(e){return new Il(this.firestore,e,this._path)}}function Y0(t,e,...n){if(t=rn(t),arguments.length===1&&(e=iE.newId()),zN("doc","path",e),t instanceof Rg){const r=Ge.fromString(e,...n);return K0(r),new _r(t,null,new le(r))}{if(!(t instanceof _r||t instanceof Il))throw new ie(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return K0(r),new _r(t.firestore,t instanceof Il?t.converter:null,new le(r))}}/**
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
 */class WN{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new NE(this,"async_queue_retry"),this.hu=()=>{const n=ch();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=ch();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new ro;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Jf(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(r);throw yo("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Pg.createAndSchedule(this,e,n,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&he()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class zE extends Rg{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new WN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$E(this),this._firestoreClient.terminate()}}function qN(t,e){const n=typeof t=="object"?t:E_(),r=typeof t=="string"?t:"(default)",i=jm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=OS("firestore");o&&HN(i,...o)}return i}function GN(t){return t._firestoreClient||$E(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $E(t){var e,n,r;const i=t._freezeSettings(),o=function(l,c,h,v){return new Y4(l,c,h,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,BE(v.experimentalLongPollingOptions),v.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new VN(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class bl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bl(Pr.fromBase64String(e))}catch(n){throw new ie(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bl(Pr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class HE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class WE{constructor(e){this._methodName=e}}/**
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
 */class qE{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
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
 */const KN=/^__.*__$/;class QN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Io(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ul(e,this.data,n,this.fieldTransforms)}}function GE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Ng{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Ng(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Tf(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(GE(this.fu)&&KN.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class YN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nd(e)}Fu(e,n,r,i=!1){return new Ng({fu:e,methodName:n,vu:r,path:wt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function XN(t){const e=t._freezeSettings(),n=nd(t._databaseId);return new YN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function JN(t,e,n,r,i,o={}){const s=t.Fu(o.merge||o.mergeFields?2:0,e,n,i);XE("Data must be an object, but it was:",s,r);const l=QE(r,s);let c,h;if(o.merge)c=new On(s.fieldMask),h=s.fieldTransforms;else if(o.mergeFields){const v=[];for(const y of o.mergeFields){const _=ZN(e,y,n);if(!s.contains(_))throw new ie(W.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);n3(v,_)||v.push(_)}c=new On(v),h=s.fieldTransforms.filter(y=>c.covers(y.field))}else c=null,h=s.fieldTransforms;return new QN(new Pn(l),c,h)}function KE(t,e){if(YE(t=rn(t)))return XE("Unsupported field value:",e,t),QE(t,e);if(t instanceof WE)return function(r,i){if(!GE(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const l of r){let c=KE(l,i.bu(s));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=rn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ct.fromDate(r);return{timestampValue:Fp(i.serializer,o)}}if(r instanceof ct){const o=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fp(i.serializer,o)}}if(r instanceof qE)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bl)return{bytesValue:OO(i.serializer,r._byteString)};if(r instanceof _r){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Du(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:xE(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${xg(r)}`)}(t,e)}function QE(t,e){const n={};return aE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jl(t,(r,i)=>{const o=KE(i,e.pu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function YE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof qE||t instanceof bl||t instanceof _r||t instanceof WE)}function XE(t,e,n){if(!YE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=xg(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function ZN(t,e,n){if((e=rn(e))instanceof HE)return e._internalPath;if(typeof e=="string")return t3(t,e);throw Tf("Field path arguments must be of type string or ",t,!1,void 0,n)}const e3=new RegExp("[~\\*/\\[\\]]");function t3(t,e,n){if(e.search(e3)>=0)throw Tf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new HE(...e.split("."))._internalPath}catch{throw Tf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Tf(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new ie(W.INVALID_ARGUMENT,l+t+c)}function n3(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function r3(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function X0(t,e,n){t=Bp(t,_r);const r=Bp(t.firestore,zE),i=r3(t.converter,e);return i3(r,[JN(XN(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,wr.none())])}function i3(t,e){return function(r,i){const o=new ro;return r.asyncQueue.enqueueAndForget(async()=>RN(await BN(r),i,o)),o.promise}(GN(t),e)}(function(e,n=!0){(function(i){Us=i})(Ms),ks(new co("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),l=new zE(new D4(r.getProvider("auth-internal")),new F4(r.getProvider("app-check-internal")),function(h,v){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ie(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gf(h.options.projectId,v)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),gi(k0,"4.6.3",e),gi(k0,"4.6.3","esm2017")})();const o3="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='100'%20height='100'%20viewBox='0%200%2048%2048'%3e%3cpath%20fill='%23FFC107'%20d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'%3e%3c/path%3e%3cpath%20fill='%23FF3D00'%20d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'%3e%3c/path%3e%3cpath%20fill='%234CAF50'%20d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'%3e%3c/path%3e%3cpath%20fill='%231976D2'%20d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'%3e%3c/path%3e%3c/svg%3e",_a=Zm(Um),J0=qN(Um),s3=()=>{const[t,e]=X.useState(!1),[n,r]=X.useState(!1),[i,o]=X.useState(!1),s=c2();X.useEffect(()=>{const v=Ym(_a,y=>{y&&s("/")});return()=>v()},[s]);const l=async v=>{v.preventDefault();const y=v.target.email.value,_=v.target.password.value,x=t?v.target.name.value:null;try{if(t){const D=(await oA(_a,y,_)).user;await X0(Y0(J0,"users",D.uid),{name:x,email:y}),$i.fire({icon:"success",title:"Registro exitoso",showConfirmButton:!1,timer:1500})}else await sA(_a,y,_),$i.fire("Inicio de sesión exitoso");s("/")}catch(O){console.error("Error en la autenticación",O),$i.fire(`Error en la autenticación: ${O.message}`)}},c=async v=>{v.preventDefault();const y=v.target.email.value;try{await iA(_a,y),$i.fire("Se ha enviado un correo para restablecer tu contraseña")}catch(_){console.error("Error al enviar el correo de restablecimiento",_),$i.fire("Error al enviar el correo de restablecimiento")}},h=async()=>{const v=new fr;try{const _=(await xA(_a,v)).user;await X0(Y0(J0,"users",_.uid),{name:_.displayName,email:_.email}),$i.fire("Inicio de sesión con Google exitoso"),s("/")}catch(y){console.error("Error en el inicio de sesión con Google:",y),$i.fire(`Error en el inicio de sesión con Google: ${y.message}`)}};return U.jsx(U.Fragment,{children:U.jsxs("div",{className:"login_container",children:[U.jsxs("div",{className:"login_visual",children:[U.jsx("div",{className:"login_assets",children:"Drawy Downloader"}),U.jsx("p",{className:"login_dist",children:"Drawy is an application developed to download YouTube videos totally free. It has a fairly simple and easy-to-use interface."}),U.jsx("img",{src:Nx,alt:""})]}),U.jsxs("div",{className:"login_banner",children:[U.jsx("img",{src:mp,alt:"IconDownload",className:"iconName"}),U.jsx("h2",{className:"login_name",children:"Drawy"}),U.jsx("p",{className:"login_title",children:n?"Reset Password":t?"Sign up to enable access to Tracker":"Sign in to access your account"}),U.jsxs("form",{className:"login_form",onSubmit:n?c:l,children:[t&&!n&&U.jsxs("div",{className:"input_field",children:[U.jsx("i",{children:U.jsx(as,{icon:P4})}),U.jsx("input",{type:"text",placeholder:"Name",className:"input",id:"name",name:"name"})]}),U.jsxs("div",{className:"input_field",children:[U.jsx("i",{children:U.jsx(as,{icon:R4})}),U.jsx("input",{type:"email",placeholder:"Email",className:"input",id:"email",name:"email"})]}),!n&&U.jsxs("div",{className:"input_field",children:[U.jsx("i",{children:U.jsx(as,{icon:C4})}),U.jsx("input",{type:i?"text":"password",placeholder:"Password",className:"input",id:"password",name:"password"}),U.jsx("i",{className:"password_view",onClick:()=>o(!i),children:U.jsx(as,{icon:i?A4:x4})})]}),U.jsx("div",{className:"login_reset",children:!n&&U.jsxs(U.Fragment,{children:[U.jsxs("h4",{children:[U.jsx("input",{type:"checkbox"})," Remember me"]}),U.jsx("a",{href:"#",onClick:v=>{v.preventDefault(),r(!0)},children:"Forgot Password"})]})}),U.jsx("button",{type:"submit",className:"input_submit submitInit",children:n?"Send Reset Email":t?"Sign Up":"Sign In"})]}),!n&&U.jsxs(U.Fragment,{children:[U.jsxs("button",{onClick:h,className:"google",children:[" ",U.jsx("img",{src:o3,className:"iconGoogle",alt:""})," Sign In with Google"]}),U.jsxs("h4",{className:"sign_save",children:[t?"Already have an account?  ":"Don't have an account?  ",U.jsx("button",{className:"btn_login",onClick:()=>e(!t),children:t?"Sign In":"Sign Up"})]})]}),n&&U.jsx("button",{onClick:()=>r(!1),className:"button_reset",children:"Back to Login"})]})]})})},a3=()=>U.jsx(hx,{children:U.jsxs(cx,{children:[U.jsx(Ec,{path:"/",element:U.jsx(Rx,{})}),U.jsx(Ec,{path:"/login",element:U.jsx(s3,{})}),U.jsx(Ec,{path:"*",element:U.jsx(Ox,{})})]})}),l3=Zm(Um);function u3(){const[t,e]=X.useState(null);return X.useEffect(()=>{const n=Ym(l3,r=>{e(r||null)});return()=>n()},[]),U.jsx("div",{children:U.jsx(a3,{})})}dh.createRoot(document.getElementById("root")).render(U.jsx(bf.StrictMode,{children:U.jsx(u3,{})}));
