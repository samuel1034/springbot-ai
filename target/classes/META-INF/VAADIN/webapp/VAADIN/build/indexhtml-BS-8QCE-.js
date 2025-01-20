function ip(i,r){for(var l=0;l<r.length;l++){const s=r[l];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in i)){const f=Object.getOwnPropertyDescriptor(s,c);f&&Object.defineProperty(i,c,f.get?f:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function l(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=l(c);fetch(c.href,f)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.formFillerAddon=!1;window.Vaadin.featureFlags.hillaI18n=!1;window.Vaadin.featureFlags.fullstackSignals=!1;window.Vaadin.featureFlags.copilotExperimentalFeatures=!1;window.Vaadin.featureFlags.dashboardComponent=!1;function lp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ms={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function Dh(){if(nf)return Ce;nf=1;var i=Symbol.for("react.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),w=Symbol.iterator;function z(k){return k===null||typeof k!="object"?null:(k=w&&k[w]||k["@@iterator"],typeof k=="function"?k:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,M={};function H(k,D,pe){this.props=k,this.context=D,this.refs=M,this.updater=pe||N}H.prototype.isReactComponent={},H.prototype.setState=function(k,D){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,D,"setState")},H.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function ve(){}ve.prototype=H.prototype;function Y(k,D,pe){this.props=k,this.context=D,this.refs=M,this.updater=pe||N}var ke=Y.prototype=new ve;ke.constructor=Y,B(ke,H.prototype),ke.isPureReactComponent=!0;var V=Array.isArray,ue=Object.prototype.hasOwnProperty,R={current:null},ye={key:!0,ref:!0,__self:!0,__source:!0};function le(k,D,pe){var fe,Se={},Ee=null,Pe=null;if(D!=null)for(fe in D.ref!==void 0&&(Pe=D.ref),D.key!==void 0&&(Ee=""+D.key),D)ue.call(D,fe)&&!ye.hasOwnProperty(fe)&&(Se[fe]=D[fe]);var L=arguments.length-2;if(L===1)Se.children=pe;else if(1<L){for(var F=Array(L),se=0;se<L;se++)F[se]=arguments[se+2];Se.children=F}if(k&&k.defaultProps)for(fe in L=k.defaultProps,L)Se[fe]===void 0&&(Se[fe]=L[fe]);return{$$typeof:i,type:k,key:Ee,ref:Pe,props:Se,_owner:R.current}}function ae(k,D){return{$$typeof:i,type:k.type,key:D,ref:k.ref,props:k.props,_owner:k._owner}}function xe(k){return typeof k=="object"&&k!==null&&k.$$typeof===i}function Ae(k){var D={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(pe){return D[pe]})}var be=/\/+/g;function Le(k,D){return typeof k=="object"&&k!==null&&k.key!=null?Ae(""+k.key):D.toString(36)}function _e(k,D,pe,fe,Se){var Ee=typeof k;(Ee==="undefined"||Ee==="boolean")&&(k=null);var Pe=!1;if(k===null)Pe=!0;else switch(Ee){case"string":case"number":Pe=!0;break;case"object":switch(k.$$typeof){case i:case r:Pe=!0}}if(Pe)return Pe=k,Se=Se(Pe),k=fe===""?"."+Le(Pe,0):fe,V(Se)?(pe="",k!=null&&(pe=k.replace(be,"$&/")+"/"),_e(Se,D,pe,"",function(se){return se})):Se!=null&&(xe(Se)&&(Se=ae(Se,pe+(!Se.key||Pe&&Pe.key===Se.key?"":(""+Se.key).replace(be,"$&/")+"/")+k)),D.push(Se)),1;if(Pe=0,fe=fe===""?".":fe+":",V(k))for(var L=0;L<k.length;L++){Ee=k[L];var F=fe+Le(Ee,L);Pe+=_e(Ee,D,pe,F,Se)}else if(F=z(k),typeof F=="function")for(k=F.call(k),L=0;!(Ee=k.next()).done;)Ee=Ee.value,F=fe+Le(Ee,L++),Pe+=_e(Ee,D,pe,F,Se);else if(Ee==="object")throw D=String(k),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return Pe}function De(k,D,pe){if(k==null)return k;var fe=[],Se=0;return _e(k,fe,"","",function(Ee){return D.call(pe,Ee,Se++)}),fe}function Fe(k){if(k._status===-1){var D=k._result;D=D(),D.then(function(pe){(k._status===0||k._status===-1)&&(k._status=1,k._result=pe)},function(pe){(k._status===0||k._status===-1)&&(k._status=2,k._result=pe)}),k._status===-1&&(k._status=0,k._result=D)}if(k._status===1)return k._result.default;throw k._result}var he={current:null},W={transition:null},te={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:W,ReactCurrentOwner:R};function Q(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:De,forEach:function(k,D,pe){De(k,function(){D.apply(this,arguments)},pe)},count:function(k){var D=0;return De(k,function(){D++}),D},toArray:function(k){return De(k,function(D){return D})||[]},only:function(k){if(!xe(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Ce.Component=H,Ce.Fragment=l,Ce.Profiler=c,Ce.PureComponent=Y,Ce.StrictMode=s,Ce.Suspense=m,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Ce.act=Q,Ce.cloneElement=function(k,D,pe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var fe=B({},k.props),Se=k.key,Ee=k.ref,Pe=k._owner;if(D!=null){if(D.ref!==void 0&&(Ee=D.ref,Pe=R.current),D.key!==void 0&&(Se=""+D.key),k.type&&k.type.defaultProps)var L=k.type.defaultProps;for(F in D)ue.call(D,F)&&!ye.hasOwnProperty(F)&&(fe[F]=D[F]===void 0&&L!==void 0?L[F]:D[F])}var F=arguments.length-2;if(F===1)fe.children=pe;else if(1<F){L=Array(F);for(var se=0;se<F;se++)L[se]=arguments[se+2];fe.children=L}return{$$typeof:i,type:k.type,key:Se,ref:Ee,props:fe,_owner:Pe}},Ce.createContext=function(k){return k={$$typeof:p,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:f,_context:k},k.Consumer=k},Ce.createElement=le,Ce.createFactory=function(k){var D=le.bind(null,k);return D.type=k,D},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(k){return{$$typeof:g,render:k}},Ce.isValidElement=xe,Ce.lazy=function(k){return{$$typeof:S,_payload:{_status:-1,_result:k},_init:Fe}},Ce.memo=function(k,D){return{$$typeof:E,type:k,compare:D===void 0?null:D}},Ce.startTransition=function(k){var D=W.transition;W.transition={};try{k()}finally{W.transition=D}},Ce.unstable_act=Q,Ce.useCallback=function(k,D){return he.current.useCallback(k,D)},Ce.useContext=function(k){return he.current.useContext(k)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(k){return he.current.useDeferredValue(k)},Ce.useEffect=function(k,D){return he.current.useEffect(k,D)},Ce.useId=function(){return he.current.useId()},Ce.useImperativeHandle=function(k,D,pe){return he.current.useImperativeHandle(k,D,pe)},Ce.useInsertionEffect=function(k,D){return he.current.useInsertionEffect(k,D)},Ce.useLayoutEffect=function(k,D){return he.current.useLayoutEffect(k,D)},Ce.useMemo=function(k,D){return he.current.useMemo(k,D)},Ce.useReducer=function(k,D,pe){return he.current.useReducer(k,D,pe)},Ce.useRef=function(k){return he.current.useRef(k)},Ce.useState=function(k){return he.current.useState(k)},Ce.useSyncExternalStore=function(k,D,pe){return he.current.useSyncExternalStore(k,D,pe)},Ce.useTransition=function(){return he.current.useTransition()},Ce.version="18.3.1",Ce}var rf;function Yl(){return rf||(rf=1,Ms.exports=Dh()),Ms.exports}var $=Yl();const Mh=lp($),Oh=ip({__proto__:null,default:Mh},[$]);var Ml={},Os={exports:{}},Dt={},As={exports:{}},Is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of;function Ah(){return of||(of=1,function(i){function r(W,te){var Q=W.length;W.push(te);e:for(;0<Q;){var k=Q-1>>>1,D=W[k];if(0<c(D,te))W[k]=te,W[Q]=D,Q=k;else break e}}function l(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var te=W[0],Q=W.pop();if(Q!==te){W[0]=Q;e:for(var k=0,D=W.length,pe=D>>>1;k<pe;){var fe=2*(k+1)-1,Se=W[fe],Ee=fe+1,Pe=W[Ee];if(0>c(Se,Q))Ee<D&&0>c(Pe,Se)?(W[k]=Pe,W[Ee]=Q,k=Ee):(W[k]=Se,W[fe]=Q,k=fe);else if(Ee<D&&0>c(Pe,Q))W[k]=Pe,W[Ee]=Q,k=Ee;else break e}}return te}function c(W,te){var Q=W.sortIndex-te.sortIndex;return Q!==0?Q:W.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var p=Date,g=p.now();i.unstable_now=function(){return p.now()-g}}var m=[],E=[],S=1,w=null,z=3,N=!1,B=!1,M=!1,H=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ke(W){for(var te=l(E);te!==null;){if(te.callback===null)s(E);else if(te.startTime<=W)s(E),te.sortIndex=te.expirationTime,r(m,te);else break;te=l(E)}}function V(W){if(M=!1,ke(W),!B)if(l(m)!==null)B=!0,Fe(ue);else{var te=l(E);te!==null&&he(V,te.startTime-W)}}function ue(W,te){B=!1,M&&(M=!1,ve(le),le=-1),N=!0;var Q=z;try{for(ke(te),w=l(m);w!==null&&(!(w.expirationTime>te)||W&&!Ae());){var k=w.callback;if(typeof k=="function"){w.callback=null,z=w.priorityLevel;var D=k(w.expirationTime<=te);te=i.unstable_now(),typeof D=="function"?w.callback=D:w===l(m)&&s(m),ke(te)}else s(m);w=l(m)}if(w!==null)var pe=!0;else{var fe=l(E);fe!==null&&he(V,fe.startTime-te),pe=!1}return pe}finally{w=null,z=Q,N=!1}}var R=!1,ye=null,le=-1,ae=5,xe=-1;function Ae(){return!(i.unstable_now()-xe<ae)}function be(){if(ye!==null){var W=i.unstable_now();xe=W;var te=!0;try{te=ye(!0,W)}finally{te?Le():(R=!1,ye=null)}}else R=!1}var Le;if(typeof Y=="function")Le=function(){Y(be)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,De=_e.port2;_e.port1.onmessage=be,Le=function(){De.postMessage(null)}}else Le=function(){H(be,0)};function Fe(W){ye=W,R||(R=!0,Le())}function he(W,te){le=H(function(){W(i.unstable_now())},te)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(W){W.callback=null},i.unstable_continueExecution=function(){B||N||(B=!0,Fe(ue))},i.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<W?Math.floor(1e3/W):5},i.unstable_getCurrentPriorityLevel=function(){return z},i.unstable_getFirstCallbackNode=function(){return l(m)},i.unstable_next=function(W){switch(z){case 1:case 2:case 3:var te=3;break;default:te=z}var Q=z;z=te;try{return W()}finally{z=Q}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(W,te){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Q=z;z=W;try{return te()}finally{z=Q}},i.unstable_scheduleCallback=function(W,te,Q){var k=i.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?k+Q:k):Q=k,W){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=Q+D,W={id:S++,callback:te,priorityLevel:W,startTime:Q,expirationTime:D,sortIndex:-1},Q>k?(W.sortIndex=Q,r(E,W),l(m)===null&&W===l(E)&&(M?(ve(le),le=-1):M=!0,he(V,Q-k))):(W.sortIndex=D,r(m,W),B||N||(B=!0,Fe(ue))),W},i.unstable_shouldYield=Ae,i.unstable_wrapCallback=function(W){var te=z;return function(){var Q=z;z=te;try{return W.apply(this,arguments)}finally{z=Q}}}}(Is)),Is}var lf;function Ih(){return lf||(lf=1,As.exports=Ah()),As.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af;function Fh(){if(af)return Dt;af=1;var i=Yl(),r=Ih();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,c={};function f(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(c[e]=t,e=0;e<t.length;e++)s.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},w={};function z(e){return m.call(w,e)?!0:m.call(S,e)?!1:E.test(e)?w[e]=!0:(S[e]=!0,!1)}function N(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,t,n,o){if(t===null||typeof t>"u"||N(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function M(e,t,n,o,a,u,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=d}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new M(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];H[t]=new M(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new M(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new M(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new M(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new M(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new M(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new M(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new M(e,5,!1,e.toLowerCase(),null,!1,!1)});var ve=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ve,Y);H[t]=new M(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ve,Y);H[t]=new M(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ve,Y);H[t]=new M(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new M(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new M(e,1,!1,e.toLowerCase(),null,!0,!0)});function ke(e,t,n,o){var a=H.hasOwnProperty(t)?H[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B(t,n,a,o)&&(n=null),o||a===null?z(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var V=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),R=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),xe=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),W=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,k;function D(e){if(k===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var pe=!1;function fe(e,t){if(!e||pe)return"";pe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(P){var o=P}Reflect.construct(e,[],t)}else{try{t.call()}catch(P){o=P}e.call(t.prototype)}else{try{throw Error()}catch(P){o=P}e()}}catch(P){if(P&&o&&typeof P.stack=="string"){for(var a=P.stack.split(`
`),u=o.stack.split(`
`),d=a.length-1,h=u.length-1;1<=d&&0<=h&&a[d]!==u[h];)h--;for(;1<=d&&0<=h;d--,h--)if(a[d]!==u[h]){if(d!==1||h!==1)do if(d--,h--,0>h||a[d]!==u[h]){var y=`
`+a[d].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=d&&0<=h);break}}}finally{pe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function Se(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=fe(e.type,!1),e;case 11:return e=fe(e.type.render,!1),e;case 1:return e=fe(e.type,!0),e;default:return""}}function Ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ye:return"Fragment";case R:return"Portal";case ae:return"Profiler";case le:return"StrictMode";case Le:return"Suspense";case _e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ae:return(e.displayName||"Context")+".Consumer";case xe:return(e._context.displayName||"Context")+".Provider";case be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return t=e.displayName||null,t!==null?t:Ee(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return Ee(e(t))}catch{}}return null}function Pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(t);case 8:return t===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function L(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function F(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function se(e){var t=F(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(d){o=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Re(e){e._valueTracker||(e._valueTracker=se(e))}function qe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=F(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function We(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bt(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cn(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=L(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pi(e,t){t=t.checked,t!=null&&ke(e,"checked",t,!1)}function xo(e,t){Pi(e,t);var n=L(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?So(e,t.type,n):t.hasOwnProperty("defaultValue")&&So(e,t.type,L(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function So(e,t,n){(t!=="number"||We(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function Ln(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+L(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ko(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dn(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(ur(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:L(n)}}function Nn(e,t){var n=L(t.value),o=L(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Eo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ar(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ht(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ar(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rt,_o=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rt=Rt||document.createElement("div"),Rt.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pn=["Webkit","ms","Moz","O"];Object.keys(cr).forEach(function(e){pn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cr[t]=cr[e]})});function Co(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||cr.hasOwnProperty(e)&&cr[e]?(""+t).trim():t+"px"}function bo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=Co(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var Ri=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Po(e,t){if(t){if(Ri[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Ir(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $n=null;function Fr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dr=null,mn=null,Dn=null;function Ro(e){if(e=Yo(e)){if(typeof dr!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Xi(t),dr(e.stateNode,e.type,t))}}function Ti(e){mn?Dn?Dn.push(e):Dn=[e]:mn=e}function To(){if(mn){var e=mn,t=Dn;if(Dn=mn=null,Ro(e),t)for(e=0;e<t.length;e++)Ro(t[e])}}function fr(e,t){return e(t)}function pr(){}var zo=!1;function zi(e,t,n){if(zo)return e(t,n);zo=!0;try{return fr(e,t,n)}finally{zo=!1,(mn!==null||Dn!==null)&&(pr(),To())}}function v(e,t){var n=e.stateNode;if(n===null)return null;var o=Xi(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var _=!1;if(g)try{var T={};Object.defineProperty(T,"passive",{get:function(){_=!0}}),window.addEventListener("test",T,T),window.removeEventListener("test",T,T)}catch{_=!1}function O(e,t,n,o,a,u,d,h,y){var P=Array.prototype.slice.call(arguments,3);try{t.apply(n,P)}catch(I){this.onError(I)}}var K=!1,re=null,me=!1,X=null,Z={onError:function(e){K=!0,re=e}};function q(e,t,n,o,a,u,d,h,y){K=!1,re=null,O.apply(Z,arguments)}function ie(e,t,n,o,a,u,d,h,y){if(q.apply(this,arguments),K){if(K){var P=re;K=!1,re=null}else throw Error(l(198));me||(me=!0,X=P)}}function we(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Te(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lt(e){if(we(e)!==e)throw Error(l(188))}function je(e){var t=e.alternate;if(!t){if(t=we(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var u=a.alternate;if(u===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===n)return lt(a),e;if(u===o)return lt(a),t;u=u.sibling}throw Error(l(188))}if(n.return!==o.return)n=a,o=u;else{for(var d=!1,h=a.child;h;){if(h===n){d=!0,n=a,o=u;break}if(h===o){d=!0,o=a,n=u;break}h=h.sibling}if(!d){for(h=u.child;h;){if(h===n){d=!0,n=u,o=a;break}if(h===o){d=!0,o=u,n=a;break}h=h.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==o)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function Ne(e){return e=je(e),e!==null?Qe(e):null}function Qe(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qe(e);if(t!==null)return t;e=e.sibling}return null}var xn=r.unstable_scheduleCallback,Mn=r.unstable_cancelCallback,Jt=r.unstable_shouldYield,Wt=r.unstable_requestPaint,Ke=r.unstable_now,mr=r.unstable_getCurrentPriorityLevel,Zt=r.unstable_ImmediatePriority,hr=r.unstable_UserBlockingPriority,wn=r.unstable_NormalPriority,$e=r.unstable_LowPriority,Ge=r.unstable_IdlePriority,en=null,wt=null;function nt(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(en,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Zp,Li=Math.log,ta=Math.LN2;function Zp(e){return e>>>=0,e===0?32:31-(Li(e)/ta|0)|0}var Ni=64,$i=4194304;function Lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Di(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,u=e.pingedLanes,d=n&268435455;if(d!==0){var h=d&~a;h!==0?o=Lo(h):(u&=d,u!==0&&(o=Lo(u)))}else d=n&~a,d!==0?o=Lo(d):u!==0&&(o=Lo(u));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,u=t&-t,a>=u||a===16&&(u&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-ft(t),a=1<<n,o|=e[n],t&=~a;return o}function em(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tm(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes;0<u;){var d=31-ft(u),h=1<<d,y=a[d];y===-1?(!(h&n)||h&o)&&(a[d]=em(h,t)):y<=t&&(e.expiredLanes|=h),u&=~h}}function na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $u(){var e=Ni;return Ni<<=1,!(Ni&4194240)&&(Ni=64),e}function ra(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function No(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function nm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ft(n),u=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~u}}function oa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-ft(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var Ue=0;function Du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mu,ia,Ou,Au,Iu,la=!1,Mi=[],On=null,An=null,In=null,$o=new Map,Do=new Map,Fn=[],rm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fu(e,t){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":$o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(t.pointerId)}}function Mo(e,t,n,o,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[a]},t!==null&&(t=Yo(t),t!==null&&ia(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function om(e,t,n,o,a){switch(t){case"focusin":return On=Mo(On,e,t,n,o,a),!0;case"dragenter":return An=Mo(An,e,t,n,o,a),!0;case"mouseover":return In=Mo(In,e,t,n,o,a),!0;case"pointerover":var u=a.pointerId;return $o.set(u,Mo($o.get(u)||null,e,t,n,o,a)),!0;case"gotpointercapture":return u=a.pointerId,Do.set(u,Mo(Do.get(u)||null,e,t,n,o,a)),!0}return!1}function Uu(e){var t=gr(e.target);if(t!==null){var n=we(t);if(n!==null){if(t=n.tag,t===13){if(t=Te(n),t!==null){e.blockedOn=t,Iu(e.priority,function(){Ou(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);$n=o,n.target.dispatchEvent(o),$n=null}else return t=Yo(n),t!==null&&ia(t),e.blockedOn=n,!1;t.shift()}return!0}function ju(e,t,n){Oi(e)&&n.delete(t)}function im(){la=!1,On!==null&&Oi(On)&&(On=null),An!==null&&Oi(An)&&(An=null),In!==null&&Oi(In)&&(In=null),$o.forEach(ju),Do.forEach(ju)}function Oo(e,t){e.blockedOn===t&&(e.blockedOn=null,la||(la=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,im)))}function Ao(e){function t(a){return Oo(a,e)}if(0<Mi.length){Oo(Mi[0],e);for(var n=1;n<Mi.length;n++){var o=Mi[n];o.blockedOn===e&&(o.blockedOn=null)}}for(On!==null&&Oo(On,e),An!==null&&Oo(An,e),In!==null&&Oo(In,e),$o.forEach(t),Do.forEach(t),n=0;n<Fn.length;n++)o=Fn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)Uu(n),n.blockedOn===null&&Fn.shift()}var Ur=V.ReactCurrentBatchConfig,Ai=!0;function lm(e,t,n,o){var a=Ue,u=Ur.transition;Ur.transition=null;try{Ue=1,aa(e,t,n,o)}finally{Ue=a,Ur.transition=u}}function am(e,t,n,o){var a=Ue,u=Ur.transition;Ur.transition=null;try{Ue=4,aa(e,t,n,o)}finally{Ue=a,Ur.transition=u}}function aa(e,t,n,o){if(Ai){var a=sa(e,t,n,o);if(a===null)Ca(e,t,o,Ii,n),Fu(e,o);else if(om(a,e,t,n,o))o.stopPropagation();else if(Fu(e,o),t&4&&-1<rm.indexOf(e)){for(;a!==null;){var u=Yo(a);if(u!==null&&Mu(u),u=sa(e,t,n,o),u===null&&Ca(e,t,o,Ii,n),u===a)break;a=u}a!==null&&o.stopPropagation()}else Ca(e,t,o,null,n)}}var Ii=null;function sa(e,t,n,o){if(Ii=null,e=Fr(o),e=gr(e),e!==null)if(t=we(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Te(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ii=e,null}function Vu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mr()){case Zt:return 1;case hr:return 4;case wn:case $e:return 16;case Ge:return 536870912;default:return 16}default:return 16}}var Un=null,ua=null,Fi=null;function Bu(){if(Fi)return Fi;var e,t=ua,n=t.length,o,a="value"in Un?Un.value:Un.textContent,u=a.length;for(e=0;e<n&&t[e]===a[e];e++);var d=n-e;for(o=1;o<=d&&t[n-o]===a[u-o];o++);return Fi=a.slice(e,1<o?1-o:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function Hu(){return!1}function Ot(e){function t(n,o,a,u,d){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ji:Hu,this.isPropagationStopped=Hu,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=Ot(jr),Io=Q({},jr,{view:0,detail:0}),sm=Ot(Io),da,fa,Fo,Vi=Q({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fo&&(Fo&&e.type==="mousemove"?(da=e.screenX-Fo.screenX,fa=e.screenY-Fo.screenY):fa=da=0,Fo=e),da)},movementY:function(e){return"movementY"in e?e.movementY:fa}}),Wu=Ot(Vi),um=Q({},Vi,{dataTransfer:0}),cm=Ot(um),dm=Q({},Io,{relatedTarget:0}),pa=Ot(dm),fm=Q({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),pm=Ot(fm),mm=Q({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hm=Ot(mm),gm=Q({},jr,{data:0}),Qu=Ot(gm),vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ym={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xm[e])?!!t[e]:!1}function ma(){return wm}var Sm=Q({},Io,{key:function(e){if(e.key){var t=vm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ym[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ma,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),km=Ot(Sm),Em=Q({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ku=Ot(Em),_m=Q({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ma}),Cm=Ot(_m),bm=Q({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pm=Ot(bm),Rm=Q({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tm=Ot(Rm),zm=[9,13,27,32],ha=g&&"CompositionEvent"in window,Uo=null;g&&"documentMode"in document&&(Uo=document.documentMode);var Lm=g&&"TextEvent"in window&&!Uo,Gu=g&&(!ha||Uo&&8<Uo&&11>=Uo),Yu=" ",Xu=!1;function qu(e,t){switch(e){case"keyup":return zm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function Nm(e,t){switch(e){case"compositionend":return Ju(t);case"keypress":return t.which!==32?null:(Xu=!0,Yu);case"textInput":return e=t.data,e===Yu&&Xu?null:e;default:return null}}function $m(e,t){if(Vr)return e==="compositionend"||!ha&&qu(e,t)?(e=Bu(),Fi=ua=Un=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gu&&t.locale!=="ko"?null:t.data;default:return null}}var Dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dm[e.type]:t==="textarea"}function ec(e,t,n,o){Ti(o),t=Ki(t,"onChange"),0<t.length&&(n=new ca("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var jo=null,Vo=null;function Mm(e){yc(e,0)}function Bi(e){var t=Kr(e);if(qe(t))return e}function Om(e,t){if(e==="change")return t}var tc=!1;if(g){var ga;if(g){var va="oninput"in document;if(!va){var nc=document.createElement("div");nc.setAttribute("oninput","return;"),va=typeof nc.oninput=="function"}ga=va}else ga=!1;tc=ga&&(!document.documentMode||9<document.documentMode)}function rc(){jo&&(jo.detachEvent("onpropertychange",oc),Vo=jo=null)}function oc(e){if(e.propertyName==="value"&&Bi(Vo)){var t=[];ec(t,Vo,e,Fr(e)),zi(Mm,t)}}function Am(e,t,n){e==="focusin"?(rc(),jo=t,Vo=n,jo.attachEvent("onpropertychange",oc)):e==="focusout"&&rc()}function Im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bi(Vo)}function Fm(e,t){if(e==="click")return Bi(t)}function Um(e,t){if(e==="input"||e==="change")return Bi(t)}function jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tn=typeof Object.is=="function"?Object.is:jm;function Bo(e,t){if(tn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!m.call(t,a)||!tn(e[a],t[a]))return!1}return!0}function ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lc(e,t){var n=ic(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ic(n)}}function ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sc(){for(var e=window,t=We();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=We(e.document)}return t}function ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vm(e){var t=sc(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ac(n.ownerDocument.documentElement,n)){if(o!==null&&ya(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,u=Math.min(o.start,a);o=o.end===void 0?u:Math.min(o.end,a),!e.extend&&u>o&&(a=o,o=u,u=a),a=lc(n,u);var d=lc(n,o);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),u>o?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bm=g&&"documentMode"in document&&11>=document.documentMode,Br=null,xa=null,Ho=null,wa=!1;function uc(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wa||Br==null||Br!==We(o)||(o=Br,"selectionStart"in o&&ya(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ho&&Bo(Ho,o)||(Ho=o,o=Ki(xa,"onSelect"),0<o.length&&(t=new ca("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Br)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hr={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},Sa={},cc={};g&&(cc=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function Wi(e){if(Sa[e])return Sa[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cc)return Sa[e]=t[n];return e}var dc=Wi("animationend"),fc=Wi("animationiteration"),pc=Wi("animationstart"),mc=Wi("transitionend"),hc=new Map,gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){hc.set(e,t),f(t,[e])}for(var ka=0;ka<gc.length;ka++){var Ea=gc[ka],Hm=Ea.toLowerCase(),Wm=Ea[0].toUpperCase()+Ea.slice(1);jn(Hm,"on"+Wm)}jn(dc,"onAnimationEnd"),jn(fc,"onAnimationIteration"),jn(pc,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(mc,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function vc(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,ie(o,t,void 0,e),e.currentTarget=null}function yc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var d=o.length-1;0<=d;d--){var h=o[d],y=h.instance,P=h.currentTarget;if(h=h.listener,y!==u&&a.isPropagationStopped())break e;vc(a,h,P),u=y}else for(d=0;d<o.length;d++){if(h=o[d],y=h.instance,P=h.currentTarget,h=h.listener,y!==u&&a.isPropagationStopped())break e;vc(a,h,P),u=y}}}if(me)throw e=X,me=!1,X=null,e}function Ye(e,t){var n=t[La];n===void 0&&(n=t[La]=new Set);var o=e+"__bubble";n.has(o)||(xc(t,e,2,!1),n.add(o))}function _a(e,t,n){var o=0;t&&(o|=4),xc(n,e,o,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[Qi]){e[Qi]=!0,s.forEach(function(n){n!=="selectionchange"&&(Qm.has(n)||_a(n,!1,e),_a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,_a("selectionchange",!1,t))}}function xc(e,t,n,o){switch(Vu(t)){case 1:var a=lm;break;case 4:a=am;break;default:a=aa}n=a.bind(null,t,n,e),a=void 0,!_||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ca(e,t,n,o,a){var u=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var h=o.stateNode.containerInfo;if(h===a||h.nodeType===8&&h.parentNode===a)break;if(d===4)for(d=o.return;d!==null;){var y=d.tag;if((y===3||y===4)&&(y=d.stateNode.containerInfo,y===a||y.nodeType===8&&y.parentNode===a))return;d=d.return}for(;h!==null;){if(d=gr(h),d===null)return;if(y=d.tag,y===5||y===6){o=u=d;continue e}h=h.parentNode}}o=o.return}zi(function(){var P=u,I=Fr(n),U=[];e:{var A=hc.get(e);if(A!==void 0){var G=ca,ee=e;switch(e){case"keypress":if(Ui(n)===0)break e;case"keydown":case"keyup":G=km;break;case"focusin":ee="focus",G=pa;break;case"focusout":ee="blur",G=pa;break;case"beforeblur":case"afterblur":G=pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Cm;break;case dc:case fc:case pc:G=pm;break;case mc:G=Pm;break;case"scroll":G=sm;break;case"wheel":G=Tm;break;case"copy":case"cut":case"paste":G=hm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Ku}var ne=(t&4)!==0,it=!ne&&e==="scroll",C=ne?A!==null?A+"Capture":null:A;ne=[];for(var x=P,b;x!==null;){b=x;var j=b.stateNode;if(b.tag===5&&j!==null&&(b=j,C!==null&&(j=v(x,C),j!=null&&ne.push(Ko(x,j,b)))),it)break;x=x.return}0<ne.length&&(A=new G(A,ee,null,n,I),U.push({event:A,listeners:ne}))}}if(!(t&7)){e:{if(A=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",A&&n!==$n&&(ee=n.relatedTarget||n.fromElement)&&(gr(ee)||ee[Sn]))break e;if((G||A)&&(A=I.window===I?I:(A=I.ownerDocument)?A.defaultView||A.parentWindow:window,G?(ee=n.relatedTarget||n.toElement,G=P,ee=ee?gr(ee):null,ee!==null&&(it=we(ee),ee!==it||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(G=null,ee=P),G!==ee)){if(ne=Wu,j="onMouseLeave",C="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Ku,j="onPointerLeave",C="onPointerEnter",x="pointer"),it=G==null?A:Kr(G),b=ee==null?A:Kr(ee),A=new ne(j,x+"leave",G,n,I),A.target=it,A.relatedTarget=b,j=null,gr(I)===P&&(ne=new ne(C,x+"enter",ee,n,I),ne.target=b,ne.relatedTarget=it,j=ne),it=j,G&&ee)t:{for(ne=G,C=ee,x=0,b=ne;b;b=Wr(b))x++;for(b=0,j=C;j;j=Wr(j))b++;for(;0<x-b;)ne=Wr(ne),x--;for(;0<b-x;)C=Wr(C),b--;for(;x--;){if(ne===C||C!==null&&ne===C.alternate)break t;ne=Wr(ne),C=Wr(C)}ne=null}else ne=null;G!==null&&wc(U,A,G,ne,!1),ee!==null&&it!==null&&wc(U,it,ee,ne,!0)}}e:{if(A=P?Kr(P):window,G=A.nodeName&&A.nodeName.toLowerCase(),G==="select"||G==="input"&&A.type==="file")var oe=Om;else if(Zu(A))if(tc)oe=Um;else{oe=Im;var ce=Am}else(G=A.nodeName)&&G.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(oe=Fm);if(oe&&(oe=oe(e,P))){ec(U,oe,n,I);break e}ce&&ce(e,A,P),e==="focusout"&&(ce=A._wrapperState)&&ce.controlled&&A.type==="number"&&So(A,"number",A.value)}switch(ce=P?Kr(P):window,e){case"focusin":(Zu(ce)||ce.contentEditable==="true")&&(Br=ce,xa=P,Ho=null);break;case"focusout":Ho=xa=Br=null;break;case"mousedown":wa=!0;break;case"contextmenu":case"mouseup":case"dragend":wa=!1,uc(U,n,I);break;case"selectionchange":if(Bm)break;case"keydown":case"keyup":uc(U,n,I)}var de;if(ha)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Vr?qu(e,n)&&(ge="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ge="onCompositionStart");ge&&(Gu&&n.locale!=="ko"&&(Vr||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Vr&&(de=Bu()):(Un=I,ua="value"in Un?Un.value:Un.textContent,Vr=!0)),ce=Ki(P,ge),0<ce.length&&(ge=new Qu(ge,e,null,n,I),U.push({event:ge,listeners:ce}),de?ge.data=de:(de=Ju(n),de!==null&&(ge.data=de)))),(de=Lm?Nm(e,n):$m(e,n))&&(P=Ki(P,"onBeforeInput"),0<P.length&&(I=new Qu("onBeforeInput","beforeinput",null,n,I),U.push({event:I,listeners:P}),I.data=de))}yc(U,t)})}function Ko(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,u=a.stateNode;a.tag===5&&u!==null&&(a=u,u=v(e,n),u!=null&&o.unshift(Ko(e,u,a)),u=v(e,t),u!=null&&o.push(Ko(e,u,a))),e=e.return}return o}function Wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wc(e,t,n,o,a){for(var u=t._reactName,d=[];n!==null&&n!==o;){var h=n,y=h.alternate,P=h.stateNode;if(y!==null&&y===o)break;h.tag===5&&P!==null&&(h=P,a?(y=v(n,u),y!=null&&d.unshift(Ko(n,y,h))):a||(y=v(n,u),y!=null&&d.push(Ko(n,y,h)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Km=/\r\n?/g,Gm=/\u0000|\uFFFD/g;function Sc(e){return(typeof e=="string"?e:""+e).replace(Km,`
`).replace(Gm,"")}function Gi(e,t,n){if(t=Sc(t),Sc(e)!==t&&n)throw Error(l(425))}function Yi(){}var ba=null,Pa=null;function Ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,Ym=typeof clearTimeout=="function"?clearTimeout:void 0,kc=typeof Promise=="function"?Promise:void 0,Xm=typeof queueMicrotask=="function"?queueMicrotask:typeof kc<"u"?function(e){return kc.resolve(null).then(e).catch(qm)}:Ta;function qm(e){setTimeout(function(){throw e})}function za(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),Ao(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);Ao(t)}function Vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ec(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),hn="__reactFiber$"+Qr,Go="__reactProps$"+Qr,Sn="__reactContainer$"+Qr,La="__reactEvents$"+Qr,Jm="__reactListeners$"+Qr,Zm="__reactHandles$"+Qr;function gr(e){var t=e[hn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Sn]||n[hn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ec(e);e!==null;){if(n=e[hn])return n;e=Ec(e)}return t}e=n,n=e.parentNode}return null}function Yo(e){return e=e[hn]||e[Sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Xi(e){return e[Go]||null}var Na=[],Gr=-1;function Bn(e){return{current:e}}function Xe(e){0>Gr||(e.current=Na[Gr],Na[Gr]=null,Gr--)}function He(e,t){Gr++,Na[Gr]=e.current,e.current=t}var Hn={},St=Bn(Hn),Tt=Bn(!1),vr=Hn;function Yr(e,t){var n=e.type.contextTypes;if(!n)return Hn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},u;for(u in n)a[u]=t[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function zt(e){return e=e.childContextTypes,e!=null}function qi(){Xe(Tt),Xe(St)}function _c(e,t,n){if(St.current!==Hn)throw Error(l(168));He(St,t),He(Tt,n)}function Cc(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(l(108,Pe(e)||"Unknown",a));return Q({},n,o)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,vr=St.current,He(St,e),He(Tt,Tt.current),!0}function bc(e,t,n){var o=e.stateNode;if(!o)throw Error(l(169));n?(e=Cc(e,t,vr),o.__reactInternalMemoizedMergedChildContext=e,Xe(Tt),Xe(St),He(St,e)):Xe(Tt),He(Tt,n)}var kn=null,Zi=!1,$a=!1;function Pc(e){kn===null?kn=[e]:kn.push(e)}function eh(e){Zi=!0,Pc(e)}function Wn(){if(!$a&&kn!==null){$a=!0;var e=0,t=Ue;try{var n=kn;for(Ue=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}kn=null,Zi=!1}catch(a){throw kn!==null&&(kn=kn.slice(e+1)),xn(Zt,Wn),a}finally{Ue=t,$a=!1}}return null}var Xr=[],qr=0,el=null,tl=0,Qt=[],Kt=0,yr=null,En=1,_n="";function xr(e,t){Xr[qr++]=tl,Xr[qr++]=el,el=e,tl=t}function Rc(e,t,n){Qt[Kt++]=En,Qt[Kt++]=_n,Qt[Kt++]=yr,yr=e;var o=En;e=_n;var a=32-ft(o)-1;o&=~(1<<a),n+=1;var u=32-ft(t)+a;if(30<u){var d=a-a%5;u=(o&(1<<d)-1).toString(32),o>>=d,a-=d,En=1<<32-ft(t)+a|n<<a|o,_n=u+e}else En=1<<u|n<<a|o,_n=e}function Da(e){e.return!==null&&(xr(e,1),Rc(e,1,0))}function Ma(e){for(;e===el;)el=Xr[--qr],Xr[qr]=null,tl=Xr[--qr],Xr[qr]=null;for(;e===yr;)yr=Qt[--Kt],Qt[Kt]=null,_n=Qt[--Kt],Qt[Kt]=null,En=Qt[--Kt],Qt[Kt]=null}var At=null,It=null,Je=!1,nn=null;function Tc(e,t){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,At=e,It=Vn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,At=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yr!==null?{id:En,overflow:_n}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,At=e,It=null,!0):!1;default:return!1}}function Oa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Aa(e){if(Je){var t=It;if(t){var n=t;if(!zc(e,t)){if(Oa(e))throw Error(l(418));t=Vn(n.nextSibling);var o=At;t&&zc(e,t)?Tc(o,n):(e.flags=e.flags&-4097|2,Je=!1,At=e)}}else{if(Oa(e))throw Error(l(418));e.flags=e.flags&-4097|2,Je=!1,At=e}}}function Lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;At=e}function nl(e){if(e!==At)return!1;if(!Je)return Lc(e),Je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ra(e.type,e.memoizedProps)),t&&(t=It)){if(Oa(e))throw Nc(),Error(l(418));for(;t;)Tc(e,t),t=Vn(t.nextSibling)}if(Lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){It=Vn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}It=null}}else It=At?Vn(e.stateNode.nextSibling):null;return!0}function Nc(){for(var e=It;e;)e=Vn(e.nextSibling)}function Jr(){It=At=null,Je=!1}function Ia(e){nn===null?nn=[e]:nn.push(e)}var th=V.ReactCurrentBatchConfig;function Xo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var o=n.stateNode}if(!o)throw Error(l(147,e));var a=o,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(d){var h=a.refs;d===null?delete h[u]:h[u]=d},t._stringRef=u,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function rl(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $c(e){var t=e._init;return t(e._payload)}function Dc(e){function t(C,x){if(e){var b=C.deletions;b===null?(C.deletions=[x],C.flags|=16):b.push(x)}}function n(C,x){if(!e)return null;for(;x!==null;)t(C,x),x=x.sibling;return null}function o(C,x){for(C=new Map;x!==null;)x.key!==null?C.set(x.key,x):C.set(x.index,x),x=x.sibling;return C}function a(C,x){return C=Zn(C,x),C.index=0,C.sibling=null,C}function u(C,x,b){return C.index=b,e?(b=C.alternate,b!==null?(b=b.index,b<x?(C.flags|=2,x):b):(C.flags|=2,x)):(C.flags|=1048576,x)}function d(C){return e&&C.alternate===null&&(C.flags|=2),C}function h(C,x,b,j){return x===null||x.tag!==6?(x=Ts(b,C.mode,j),x.return=C,x):(x=a(x,b),x.return=C,x)}function y(C,x,b,j){var oe=b.type;return oe===ye?I(C,x,b.props.children,j,b.key):x!==null&&(x.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Fe&&$c(oe)===x.type)?(j=a(x,b.props),j.ref=Xo(C,x,b),j.return=C,j):(j=Pl(b.type,b.key,b.props,null,C.mode,j),j.ref=Xo(C,x,b),j.return=C,j)}function P(C,x,b,j){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=zs(b,C.mode,j),x.return=C,x):(x=a(x,b.children||[]),x.return=C,x)}function I(C,x,b,j,oe){return x===null||x.tag!==7?(x=Pr(b,C.mode,j,oe),x.return=C,x):(x=a(x,b),x.return=C,x)}function U(C,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ts(""+x,C.mode,b),x.return=C,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ue:return b=Pl(x.type,x.key,x.props,null,C.mode,b),b.ref=Xo(C,null,x),b.return=C,b;case R:return x=zs(x,C.mode,b),x.return=C,x;case Fe:var j=x._init;return U(C,j(x._payload),b)}if(ur(x)||te(x))return x=Pr(x,C.mode,b,null),x.return=C,x;rl(C,x)}return null}function A(C,x,b,j){var oe=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return oe!==null?null:h(C,x,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ue:return b.key===oe?y(C,x,b,j):null;case R:return b.key===oe?P(C,x,b,j):null;case Fe:return oe=b._init,A(C,x,oe(b._payload),j)}if(ur(b)||te(b))return oe!==null?null:I(C,x,b,j,null);rl(C,b)}return null}function G(C,x,b,j,oe){if(typeof j=="string"&&j!==""||typeof j=="number")return C=C.get(b)||null,h(x,C,""+j,oe);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ue:return C=C.get(j.key===null?b:j.key)||null,y(x,C,j,oe);case R:return C=C.get(j.key===null?b:j.key)||null,P(x,C,j,oe);case Fe:var ce=j._init;return G(C,x,b,ce(j._payload),oe)}if(ur(j)||te(j))return C=C.get(b)||null,I(x,C,j,oe,null);rl(x,j)}return null}function ee(C,x,b,j){for(var oe=null,ce=null,de=x,ge=x=0,ht=null;de!==null&&ge<b.length;ge++){de.index>ge?(ht=de,de=null):ht=de.sibling;var Oe=A(C,de,b[ge],j);if(Oe===null){de===null&&(de=ht);break}e&&de&&Oe.alternate===null&&t(C,de),x=u(Oe,x,ge),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe,de=ht}if(ge===b.length)return n(C,de),Je&&xr(C,ge),oe;if(de===null){for(;ge<b.length;ge++)de=U(C,b[ge],j),de!==null&&(x=u(de,x,ge),ce===null?oe=de:ce.sibling=de,ce=de);return Je&&xr(C,ge),oe}for(de=o(C,de);ge<b.length;ge++)ht=G(de,C,ge,b[ge],j),ht!==null&&(e&&ht.alternate!==null&&de.delete(ht.key===null?ge:ht.key),x=u(ht,x,ge),ce===null?oe=ht:ce.sibling=ht,ce=ht);return e&&de.forEach(function(er){return t(C,er)}),Je&&xr(C,ge),oe}function ne(C,x,b,j){var oe=te(b);if(typeof oe!="function")throw Error(l(150));if(b=oe.call(b),b==null)throw Error(l(151));for(var ce=oe=null,de=x,ge=x=0,ht=null,Oe=b.next();de!==null&&!Oe.done;ge++,Oe=b.next()){de.index>ge?(ht=de,de=null):ht=de.sibling;var er=A(C,de,Oe.value,j);if(er===null){de===null&&(de=ht);break}e&&de&&er.alternate===null&&t(C,de),x=u(er,x,ge),ce===null?oe=er:ce.sibling=er,ce=er,de=ht}if(Oe.done)return n(C,de),Je&&xr(C,ge),oe;if(de===null){for(;!Oe.done;ge++,Oe=b.next())Oe=U(C,Oe.value,j),Oe!==null&&(x=u(Oe,x,ge),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe);return Je&&xr(C,ge),oe}for(de=o(C,de);!Oe.done;ge++,Oe=b.next())Oe=G(de,C,ge,Oe.value,j),Oe!==null&&(e&&Oe.alternate!==null&&de.delete(Oe.key===null?ge:Oe.key),x=u(Oe,x,ge),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe);return e&&de.forEach(function($h){return t(C,$h)}),Je&&xr(C,ge),oe}function it(C,x,b,j){if(typeof b=="object"&&b!==null&&b.type===ye&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ue:e:{for(var oe=b.key,ce=x;ce!==null;){if(ce.key===oe){if(oe=b.type,oe===ye){if(ce.tag===7){n(C,ce.sibling),x=a(ce,b.props.children),x.return=C,C=x;break e}}else if(ce.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Fe&&$c(oe)===ce.type){n(C,ce.sibling),x=a(ce,b.props),x.ref=Xo(C,ce,b),x.return=C,C=x;break e}n(C,ce);break}else t(C,ce);ce=ce.sibling}b.type===ye?(x=Pr(b.props.children,C.mode,j,b.key),x.return=C,C=x):(j=Pl(b.type,b.key,b.props,null,C.mode,j),j.ref=Xo(C,x,b),j.return=C,C=j)}return d(C);case R:e:{for(ce=b.key;x!==null;){if(x.key===ce)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){n(C,x.sibling),x=a(x,b.children||[]),x.return=C,C=x;break e}else{n(C,x);break}else t(C,x);x=x.sibling}x=zs(b,C.mode,j),x.return=C,C=x}return d(C);case Fe:return ce=b._init,it(C,x,ce(b._payload),j)}if(ur(b))return ee(C,x,b,j);if(te(b))return ne(C,x,b,j);rl(C,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(n(C,x.sibling),x=a(x,b),x.return=C,C=x):(n(C,x),x=Ts(b,C.mode,j),x.return=C,C=x),d(C)):n(C,x)}return it}var Zr=Dc(!0),Mc=Dc(!1),ol=Bn(null),il=null,eo=null,Fa=null;function Ua(){Fa=eo=il=null}function ja(e){var t=ol.current;Xe(ol),e._currentValue=t}function Va(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function to(e,t){il=e,Fa=eo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Lt=!0),e.firstContext=null)}function Gt(e){var t=e._currentValue;if(Fa!==e)if(e={context:e,memoizedValue:t,next:null},eo===null){if(il===null)throw Error(l(308));eo=e,il.dependencies={lanes:0,firstContext:e}}else eo=eo.next=e;return t}var wr=null;function Ba(e){wr===null?wr=[e]:wr.push(e)}function Oc(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,Ba(t)):(n.next=a.next,a.next=n),t.interleaved=n,Cn(e,o)}function Cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Me&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,Cn(e,n)}return a=o.interleaved,a===null?(t.next=t,Ba(o)):(t.next=a.next,a.next=t),o.interleaved=t,Cn(e,n)}function ll(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,oa(e,n)}}function Ic(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?a=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?a=u=t:u=u.next=t}else a=u=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function al(e,t,n,o){var a=e.updateQueue;Qn=!1;var u=a.firstBaseUpdate,d=a.lastBaseUpdate,h=a.shared.pending;if(h!==null){a.shared.pending=null;var y=h,P=y.next;y.next=null,d===null?u=P:d.next=P,d=y;var I=e.alternate;I!==null&&(I=I.updateQueue,h=I.lastBaseUpdate,h!==d&&(h===null?I.firstBaseUpdate=P:h.next=P,I.lastBaseUpdate=y))}if(u!==null){var U=a.baseState;d=0,I=P=y=null,h=u;do{var A=h.lane,G=h.eventTime;if((o&A)===A){I!==null&&(I=I.next={eventTime:G,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var ee=e,ne=h;switch(A=t,G=n,ne.tag){case 1:if(ee=ne.payload,typeof ee=="function"){U=ee.call(G,U,A);break e}U=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=ne.payload,A=typeof ee=="function"?ee.call(G,U,A):ee,A==null)break e;U=Q({},U,A);break e;case 2:Qn=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,A=a.effects,A===null?a.effects=[h]:A.push(h))}else G={eventTime:G,lane:A,tag:h.tag,payload:h.payload,callback:h.callback,next:null},I===null?(P=I=G,y=U):I=I.next=G,d|=A;if(h=h.next,h===null){if(h=a.shared.pending,h===null)break;A=h,h=A.next,A.next=null,a.lastBaseUpdate=A,a.shared.pending=null}}while(!0);if(I===null&&(y=U),a.baseState=y,a.firstBaseUpdate=P,a.lastBaseUpdate=I,t=a.shared.interleaved,t!==null){a=t;do d|=a.lane,a=a.next;while(a!==t)}else u===null&&(a.shared.lanes=0);Er|=d,e.lanes=d,e.memoizedState=U}}function Fc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(l(191,a));a.call(o)}}}var qo={},gn=Bn(qo),Jo=Bn(qo),Zo=Bn(qo);function Sr(e){if(e===qo)throw Error(l(174));return e}function Wa(e,t){switch(He(Zo,t),He(Jo,e),He(gn,qo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ht(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ht(t,e)}Xe(gn),He(gn,t)}function no(){Xe(gn),Xe(Jo),Xe(Zo)}function Uc(e){Sr(Zo.current);var t=Sr(gn.current),n=Ht(t,e.type);t!==n&&(He(Jo,e),He(gn,n))}function Qa(e){Jo.current===e&&(Xe(gn),Xe(Jo))}var et=Bn(0);function sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ka=[];function Ga(){for(var e=0;e<Ka.length;e++)Ka[e]._workInProgressVersionPrimary=null;Ka.length=0}var ul=V.ReactCurrentDispatcher,Ya=V.ReactCurrentBatchConfig,kr=0,tt=null,ut=null,pt=null,cl=!1,ei=!1,ti=0,nh=0;function kt(){throw Error(l(321))}function Xa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tn(e[n],t[n]))return!1;return!0}function qa(e,t,n,o,a,u){if(kr=u,tt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ul.current=e===null||e.memoizedState===null?lh:ah,e=n(o,a),ei){u=0;do{if(ei=!1,ti=0,25<=u)throw Error(l(301));u+=1,pt=ut=null,t.updateQueue=null,ul.current=sh,e=n(o,a)}while(ei)}if(ul.current=pl,t=ut!==null&&ut.next!==null,kr=0,pt=ut=tt=null,cl=!1,t)throw Error(l(300));return e}function Ja(){var e=ti!==0;return ti=0,e}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?tt.memoizedState=pt=e:pt=pt.next=e,pt}function Yt(){if(ut===null){var e=tt.alternate;e=e!==null?e.memoizedState:null}else e=ut.next;var t=pt===null?tt.memoizedState:pt.next;if(t!==null)pt=t,ut=e;else{if(e===null)throw Error(l(310));ut=e,e={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},pt===null?tt.memoizedState=pt=e:pt=pt.next=e}return pt}function ni(e,t){return typeof t=="function"?t(e):t}function Za(e){var t=Yt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=ut,a=o.baseQueue,u=n.pending;if(u!==null){if(a!==null){var d=a.next;a.next=u.next,u.next=d}o.baseQueue=a=u,n.pending=null}if(a!==null){u=a.next,o=o.baseState;var h=d=null,y=null,P=u;do{var I=P.lane;if((kr&I)===I)y!==null&&(y=y.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),o=P.hasEagerState?P.eagerState:e(o,P.action);else{var U={lane:I,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};y===null?(h=y=U,d=o):y=y.next=U,tt.lanes|=I,Er|=I}P=P.next}while(P!==null&&P!==u);y===null?d=o:y.next=h,tn(o,t.memoizedState)||(Lt=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=y,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do u=a.lane,tt.lanes|=u,Er|=u,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function es(e){var t=Yt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,u=t.memoizedState;if(a!==null){n.pending=null;var d=a=a.next;do u=e(u,d.action),d=d.next;while(d!==a);tn(u,t.memoizedState)||(Lt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,o]}function jc(){}function Vc(e,t){var n=tt,o=Yt(),a=t(),u=!tn(o.memoizedState,a);if(u&&(o.memoizedState=a,Lt=!0),o=o.queue,ts(Wc.bind(null,n,o,e),[e]),o.getSnapshot!==t||u||pt!==null&&pt.memoizedState.tag&1){if(n.flags|=2048,ri(9,Hc.bind(null,n,o,a,t),void 0,null),mt===null)throw Error(l(349));kr&30||Bc(n,t,a)}return a}function Bc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=tt.updateQueue,t===null?(t={lastEffect:null,stores:null},tt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hc(e,t,n,o){t.value=n,t.getSnapshot=o,Qc(t)&&Kc(e)}function Wc(e,t,n){return n(function(){Qc(t)&&Kc(e)})}function Qc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tn(e,n)}catch{return!0}}function Kc(e){var t=Cn(e,1);t!==null&&an(t,e,1,-1)}function Gc(e){var t=vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},t.queue=e,e=e.dispatch=ih.bind(null,tt,e),[t.memoizedState,e]}function ri(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=tt.updateQueue,t===null?(t={lastEffect:null,stores:null},tt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Yc(){return Yt().memoizedState}function dl(e,t,n,o){var a=vn();tt.flags|=e,a.memoizedState=ri(1|t,n,void 0,o===void 0?null:o)}function fl(e,t,n,o){var a=Yt();o=o===void 0?null:o;var u=void 0;if(ut!==null){var d=ut.memoizedState;if(u=d.destroy,o!==null&&Xa(o,d.deps)){a.memoizedState=ri(t,n,u,o);return}}tt.flags|=e,a.memoizedState=ri(1|t,n,u,o)}function Xc(e,t){return dl(8390656,8,e,t)}function ts(e,t){return fl(2048,8,e,t)}function qc(e,t){return fl(4,2,e,t)}function Jc(e,t){return fl(4,4,e,t)}function Zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ed(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,Zc.bind(null,t,e),n)}function ns(){}function td(e,t){var n=Yt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Xa(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function nd(e,t){var n=Yt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Xa(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function rd(e,t,n){return kr&21?(tn(n,t)||(n=$u(),tt.lanes|=n,Er|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Lt=!0),e.memoizedState=n)}function rh(e,t){var n=Ue;Ue=n!==0&&4>n?n:4,e(!0);var o=Ya.transition;Ya.transition={};try{e(!1),t()}finally{Ue=n,Ya.transition=o}}function od(){return Yt().memoizedState}function oh(e,t,n){var o=qn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},id(e))ld(t,n);else if(n=Oc(e,t,n,o),n!==null){var a=bt();an(n,e,o,a),ad(n,t,o)}}function ih(e,t,n){var o=qn(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(id(e))ld(t,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,h=u(d,n);if(a.hasEagerState=!0,a.eagerState=h,tn(h,d)){var y=t.interleaved;y===null?(a.next=a,Ba(t)):(a.next=y.next,y.next=a),t.interleaved=a;return}}catch{}finally{}n=Oc(e,t,a,o),n!==null&&(a=bt(),an(n,e,o,a),ad(n,t,o))}}function id(e){var t=e.alternate;return e===tt||t!==null&&t===tt}function ld(e,t){ei=cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ad(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,oa(e,n)}}var pl={readContext:Gt,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},lh={readContext:Gt,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:Gt,useEffect:Xc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,dl(4194308,4,Zc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return dl(4194308,4,e,t)},useInsertionEffect:function(e,t){return dl(4,2,e,t)},useMemo:function(e,t){var n=vn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=vn();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=oh.bind(null,tt,e),[o.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:Gc,useDebugValue:ns,useDeferredValue:function(e){return vn().memoizedState=e},useTransition:function(){var e=Gc(!1),t=e[0];return e=rh.bind(null,e[1]),vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=tt,a=vn();if(Je){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),mt===null)throw Error(l(349));kr&30||Bc(o,t,n)}a.memoizedState=n;var u={value:n,getSnapshot:t};return a.queue=u,Xc(Wc.bind(null,o,u,e),[e]),o.flags|=2048,ri(9,Hc.bind(null,o,u,n,t),void 0,null),n},useId:function(){var e=vn(),t=mt.identifierPrefix;if(Je){var n=_n,o=En;n=(o&~(1<<32-ft(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=ti++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ah={readContext:Gt,useCallback:td,useContext:Gt,useEffect:ts,useImperativeHandle:ed,useInsertionEffect:qc,useLayoutEffect:Jc,useMemo:nd,useReducer:Za,useRef:Yc,useState:function(){return Za(ni)},useDebugValue:ns,useDeferredValue:function(e){var t=Yt();return rd(t,ut.memoizedState,e)},useTransition:function(){var e=Za(ni)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:jc,useSyncExternalStore:Vc,useId:od,unstable_isNewReconciler:!1},sh={readContext:Gt,useCallback:td,useContext:Gt,useEffect:ts,useImperativeHandle:ed,useInsertionEffect:qc,useLayoutEffect:Jc,useMemo:nd,useReducer:es,useRef:Yc,useState:function(){return es(ni)},useDebugValue:ns,useDeferredValue:function(e){var t=Yt();return ut===null?t.memoizedState=e:rd(t,ut.memoizedState,e)},useTransition:function(){var e=es(ni)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:jc,useSyncExternalStore:Vc,useId:od,unstable_isNewReconciler:!1};function rn(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rs(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ml={isMounted:function(e){return(e=e._reactInternals)?we(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=bt(),a=qn(e),u=bn(o,a);u.payload=t,n!=null&&(u.callback=n),t=Kn(e,u,a),t!==null&&(an(t,e,a,o),ll(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=bt(),a=qn(e),u=bn(o,a);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=Kn(e,u,a),t!==null&&(an(t,e,a,o),ll(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=bt(),o=qn(e),a=bn(n,o);a.tag=2,t!=null&&(a.callback=t),t=Kn(e,a,o),t!==null&&(an(t,e,o,n),ll(t,e,o))}};function sd(e,t,n,o,a,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,d):t.prototype&&t.prototype.isPureReactComponent?!Bo(n,o)||!Bo(a,u):!0}function ud(e,t,n){var o=!1,a=Hn,u=t.contextType;return typeof u=="object"&&u!==null?u=Gt(u):(a=zt(t)?vr:St.current,o=t.contextTypes,u=(o=o!=null)?Yr(e,a):Hn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ml,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=u),t}function cd(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&ml.enqueueReplaceState(t,t.state,null)}function os(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ha(e);var u=t.contextType;typeof u=="object"&&u!==null?a.context=Gt(u):(u=zt(t)?vr:St.current,a.context=Yr(e,u)),a.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(rs(e,t,u,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ml.enqueueReplaceState(a,a.state,null),al(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ro(e,t){try{var n="",o=t;do n+=Se(o),o=o.return;while(o);var a=n}catch(u){a=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:a,digest:null}}function is(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uh=typeof WeakMap=="function"?WeakMap:Map;function dd(e,t,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Sl||(Sl=!0,Ss=o),ls(e,t)},n}function fd(e,t,n){n=bn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){ls(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){ls(e,t),typeof o!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function pd(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new uh;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=Eh.bind(null,e,t,n),t.then(e,e))}function md(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hd(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bn(-1,1),t.tag=2,Kn(n,t,1))),n.lanes|=1),e)}var ch=V.ReactCurrentOwner,Lt=!1;function Ct(e,t,n,o){t.child=e===null?Mc(t,null,n,o):Zr(t,e.child,n,o)}function gd(e,t,n,o,a){n=n.render;var u=t.ref;return to(t,a),o=qa(e,t,n,o,u,a),n=Ja(),e!==null&&!Lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Pn(e,t,a)):(Je&&n&&Da(t),t.flags|=1,Ct(e,t,o,a),t.child)}function vd(e,t,n,o,a){if(e===null){var u=n.type;return typeof u=="function"&&!Rs(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,yd(e,t,u,o,a)):(e=Pl(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!(e.lanes&a)){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(d,o)&&e.ref===t.ref)return Pn(e,t,a)}return t.flags|=1,e=Zn(u,o),e.ref=t.ref,e.return=t,t.child=e}function yd(e,t,n,o,a){if(e!==null){var u=e.memoizedProps;if(Bo(u,o)&&e.ref===t.ref)if(Lt=!1,t.pendingProps=o=u,(e.lanes&a)!==0)e.flags&131072&&(Lt=!0);else return t.lanes=e.lanes,Pn(e,t,a)}return as(e,t,n,o,a)}function xd(e,t,n){var o=t.pendingProps,a=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(io,Ft),Ft|=n;else{if(!(n&1073741824))return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,He(io,Ft),Ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:n,He(io,Ft),Ft|=o}else u!==null?(o=u.baseLanes|n,t.memoizedState=null):o=n,He(io,Ft),Ft|=o;return Ct(e,t,a,n),t.child}function wd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function as(e,t,n,o,a){var u=zt(n)?vr:St.current;return u=Yr(t,u),to(t,a),n=qa(e,t,n,o,u,a),o=Ja(),e!==null&&!Lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Pn(e,t,a)):(Je&&o&&Da(t),t.flags|=1,Ct(e,t,n,a),t.child)}function Sd(e,t,n,o,a){if(zt(n)){var u=!0;Ji(t)}else u=!1;if(to(t,a),t.stateNode===null)gl(e,t),ud(t,n,o),os(t,n,o,a),o=!0;else if(e===null){var d=t.stateNode,h=t.memoizedProps;d.props=h;var y=d.context,P=n.contextType;typeof P=="object"&&P!==null?P=Gt(P):(P=zt(n)?vr:St.current,P=Yr(t,P));var I=n.getDerivedStateFromProps,U=typeof I=="function"||typeof d.getSnapshotBeforeUpdate=="function";U||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==o||y!==P)&&cd(t,d,o,P),Qn=!1;var A=t.memoizedState;d.state=A,al(t,o,d,a),y=t.memoizedState,h!==o||A!==y||Tt.current||Qn?(typeof I=="function"&&(rs(t,n,I,o),y=t.memoizedState),(h=Qn||sd(t,n,h,o,A,y,P))?(U||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=y),d.props=o,d.state=y,d.context=P,o=h):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,Ac(e,t),h=t.memoizedProps,P=t.type===t.elementType?h:rn(t.type,h),d.props=P,U=t.pendingProps,A=d.context,y=n.contextType,typeof y=="object"&&y!==null?y=Gt(y):(y=zt(n)?vr:St.current,y=Yr(t,y));var G=n.getDerivedStateFromProps;(I=typeof G=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==U||A!==y)&&cd(t,d,o,y),Qn=!1,A=t.memoizedState,d.state=A,al(t,o,d,a);var ee=t.memoizedState;h!==U||A!==ee||Tt.current||Qn?(typeof G=="function"&&(rs(t,n,G,o),ee=t.memoizedState),(P=Qn||sd(t,n,P,o,A,ee,y)||!1)?(I||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ee,y),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ee,y)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=ee),d.props=o,d.state=ee,d.context=y,o=P):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),o=!1)}return ss(e,t,n,o,u,a)}function ss(e,t,n,o,a,u){wd(e,t);var d=(t.flags&128)!==0;if(!o&&!d)return a&&bc(t,n,!1),Pn(e,t,u);o=t.stateNode,ch.current=t;var h=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&d?(t.child=Zr(t,e.child,null,u),t.child=Zr(t,null,h,u)):Ct(e,t,h,u),t.memoizedState=o.state,a&&bc(t,n,!0),t.child}function kd(e){var t=e.stateNode;t.pendingContext?_c(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_c(e,t.context,!1),Wa(e,t.containerInfo)}function Ed(e,t,n,o,a){return Jr(),Ia(a),t.flags|=256,Ct(e,t,n,o),t.child}var us={dehydrated:null,treeContext:null,retryLane:0};function cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function _d(e,t,n){var o=t.pendingProps,a=et.current,u=!1,d=(t.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(a&2)!==0),h?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),He(et,a&1),e===null)return Aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(d=o.children,e=o.fallback,u?(o=t.mode,u=t.child,d={mode:"hidden",children:d},!(o&1)&&u!==null?(u.childLanes=0,u.pendingProps=d):u=Rl(d,o,0,null),e=Pr(e,o,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=cs(n),t.memoizedState=us,e):ds(t,d));if(a=e.memoizedState,a!==null&&(h=a.dehydrated,h!==null))return dh(e,t,d,o,h,a,n);if(u){u=o.fallback,d=t.mode,a=e.child,h=a.sibling;var y={mode:"hidden",children:o.children};return!(d&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=y,t.deletions=null):(o=Zn(a,y),o.subtreeFlags=a.subtreeFlags&14680064),h!==null?u=Zn(h,u):(u=Pr(u,d,n,null),u.flags|=2),u.return=t,o.return=t,o.sibling=u,t.child=o,o=u,u=t.child,d=e.child.memoizedState,d=d===null?cs(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},u.memoizedState=d,u.childLanes=e.childLanes&~n,t.memoizedState=us,o}return u=e.child,e=u.sibling,o=Zn(u,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function ds(e,t){return t=Rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hl(e,t,n,o){return o!==null&&Ia(o),Zr(t,e.child,null,n),e=ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dh(e,t,n,o,a,u,d){if(n)return t.flags&256?(t.flags&=-257,o=is(Error(l(422))),hl(e,t,d,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=o.fallback,a=t.mode,o=Rl({mode:"visible",children:o.children},a,0,null),u=Pr(u,a,d,null),u.flags|=2,o.return=t,u.return=t,o.sibling=u,t.child=o,t.mode&1&&Zr(t,e.child,null,d),t.child.memoizedState=cs(d),t.memoizedState=us,u);if(!(t.mode&1))return hl(e,t,d,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var h=o.dgst;return o=h,u=Error(l(419)),o=is(u,o,void 0),hl(e,t,d,o)}if(h=(d&e.childLanes)!==0,Lt||h){if(o=mt,o!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|d)?0:a,a!==0&&a!==u.retryLane&&(u.retryLane=a,Cn(e,a),an(o,e,a,-1))}return Ps(),o=is(Error(l(421))),hl(e,t,d,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=_h.bind(null,e),a._reactRetry=t,null):(e=u.treeContext,It=Vn(a.nextSibling),At=t,Je=!0,nn=null,e!==null&&(Qt[Kt++]=En,Qt[Kt++]=_n,Qt[Kt++]=yr,En=e.id,_n=e.overflow,yr=t),t=ds(t,o.children),t.flags|=4096,t)}function Cd(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Va(e.return,t,n)}function fs(e,t,n,o,a){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=a)}function bd(e,t,n){var o=t.pendingProps,a=o.revealOrder,u=o.tail;if(Ct(e,t,o.children,n),o=et.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cd(e,n,t);else if(e.tag===19)Cd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(He(et,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&sl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),fs(t,!1,a,n,u);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&sl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}fs(t,!0,n,null,u);break;case"together":fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Er|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=Zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fh(e,t,n){switch(t.tag){case 3:kd(t),Jr();break;case 5:Uc(t);break;case 1:zt(t.type)&&Ji(t);break;case 4:Wa(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;He(ol,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(He(et,et.current&1),t.flags|=128,null):n&t.child.childLanes?_d(e,t,n):(He(et,et.current&1),e=Pn(e,t,n),e!==null?e.sibling:null);He(et,et.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return bd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),He(et,et.current),o)break;return null;case 22:case 23:return t.lanes=0,xd(e,t,n)}return Pn(e,t,n)}var Pd,ps,Rd,Td;Pd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ps=function(){},Rd=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,Sr(gn.current);var u=null;switch(n){case"input":a=Bt(e,a),o=Bt(e,o),u=[];break;case"select":a=Q({},a,{value:void 0}),o=Q({},o,{value:void 0}),u=[];break;case"textarea":a=ko(e,a),o=ko(e,o),u=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Yi)}Po(n,o);var d;n=null;for(P in a)if(!o.hasOwnProperty(P)&&a.hasOwnProperty(P)&&a[P]!=null)if(P==="style"){var h=a[P];for(d in h)h.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(c.hasOwnProperty(P)?u||(u=[]):(u=u||[]).push(P,null));for(P in o){var y=o[P];if(h=a!=null?a[P]:void 0,o.hasOwnProperty(P)&&y!==h&&(y!=null||h!=null))if(P==="style")if(h){for(d in h)!h.hasOwnProperty(d)||y&&y.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in y)y.hasOwnProperty(d)&&h[d]!==y[d]&&(n||(n={}),n[d]=y[d])}else n||(u||(u=[]),u.push(P,n)),n=y;else P==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,h=h?h.__html:void 0,y!=null&&h!==y&&(u=u||[]).push(P,y)):P==="children"?typeof y!="string"&&typeof y!="number"||(u=u||[]).push(P,""+y):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(c.hasOwnProperty(P)?(y!=null&&P==="onScroll"&&Ye("scroll",e),u||h===y||(u=[])):(u=u||[]).push(P,y))}n&&(u=u||[]).push("style",n);var P=u;(t.updateQueue=P)&&(t.flags|=4)}},Td=function(e,t,n,o){n!==o&&(t.flags|=4)};function oi(e,t){if(!Je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function ph(e,t,n){var o=t.pendingProps;switch(Ma(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(t),null;case 1:return zt(t.type)&&qi(),Et(t),null;case 3:return o=t.stateNode,no(),Xe(Tt),Xe(St),Ga(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(nl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nn!==null&&(_s(nn),nn=null))),ps(e,t),Et(t),null;case 5:Qa(t);var a=Sr(Zo.current);if(n=t.type,e!==null&&t.stateNode!=null)Rd(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Et(t),null}if(e=Sr(gn.current),nl(t)){o=t.stateNode,n=t.type;var u=t.memoizedProps;switch(o[hn]=t,o[Go]=u,e=(t.mode&1)!==0,n){case"dialog":Ye("cancel",o),Ye("close",o);break;case"iframe":case"object":case"embed":Ye("load",o);break;case"video":case"audio":for(a=0;a<Wo.length;a++)Ye(Wo[a],o);break;case"source":Ye("error",o);break;case"img":case"image":case"link":Ye("error",o),Ye("load",o);break;case"details":Ye("toggle",o);break;case"input":cn(o,u),Ye("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},Ye("invalid",o);break;case"textarea":dn(o,u),Ye("invalid",o)}Po(n,u),a=null;for(var d in u)if(u.hasOwnProperty(d)){var h=u[d];d==="children"?typeof h=="string"?o.textContent!==h&&(u.suppressHydrationWarning!==!0&&Gi(o.textContent,h,e),a=["children",h]):typeof h=="number"&&o.textContent!==""+h&&(u.suppressHydrationWarning!==!0&&Gi(o.textContent,h,e),a=["children",""+h]):c.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&Ye("scroll",o)}switch(n){case"input":Re(o),wo(o,u,!0);break;case"textarea":Re(o),Eo(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=Yi)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ar(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[hn]=t,e[Go]=o,Pd(e,t,!1,!1),t.stateNode=e;e:{switch(d=Ir(n,o),n){case"dialog":Ye("cancel",e),Ye("close",e),a=o;break;case"iframe":case"object":case"embed":Ye("load",e),a=o;break;case"video":case"audio":for(a=0;a<Wo.length;a++)Ye(Wo[a],e);a=o;break;case"source":Ye("error",e),a=o;break;case"img":case"image":case"link":Ye("error",e),Ye("load",e),a=o;break;case"details":Ye("toggle",e),a=o;break;case"input":cn(e,o),a=Bt(e,o),Ye("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=Q({},o,{value:void 0}),Ye("invalid",e);break;case"textarea":dn(e,o),a=ko(e,o),Ye("invalid",e);break;default:a=o}Po(n,a),h=a;for(u in h)if(h.hasOwnProperty(u)){var y=h[u];u==="style"?bo(e,y):u==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&_o(e,y)):u==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&fn(e,y):typeof y=="number"&&fn(e,""+y):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?y!=null&&u==="onScroll"&&Ye("scroll",e):y!=null&&ke(e,u,y,d))}switch(n){case"input":Re(e),wo(e,o,!1);break;case"textarea":Re(e),Eo(e);break;case"option":o.value!=null&&e.setAttribute("value",""+L(o.value));break;case"select":e.multiple=!!o.multiple,u=o.value,u!=null?Ln(e,!!o.multiple,u,!1):o.defaultValue!=null&&Ln(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Et(t),null;case 6:if(e&&t.stateNode!=null)Td(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(n=Sr(Zo.current),Sr(gn.current),nl(t)){if(o=t.stateNode,n=t.memoizedProps,o[hn]=t,(u=o.nodeValue!==n)&&(e=At,e!==null))switch(e.tag){case 3:Gi(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gi(o.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[hn]=t,t.stateNode=o}return Et(t),null;case 13:if(Xe(et),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Je&&It!==null&&t.mode&1&&!(t.flags&128))Nc(),Jr(),t.flags|=98560,u=!1;else if(u=nl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[hn]=t}else Jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Et(t),u=!1}else nn!==null&&(_s(nn),nn=null),u=!0;if(!u)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||et.current&1?ct===0&&(ct=3):Ps())),t.updateQueue!==null&&(t.flags|=4),Et(t),null);case 4:return no(),ps(e,t),e===null&&Qo(t.stateNode.containerInfo),Et(t),null;case 10:return ja(t.type._context),Et(t),null;case 17:return zt(t.type)&&qi(),Et(t),null;case 19:if(Xe(et),u=t.memoizedState,u===null)return Et(t),null;if(o=(t.flags&128)!==0,d=u.rendering,d===null)if(o)oi(u,!1);else{if(ct!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(d=sl(e),d!==null){for(t.flags|=128,oi(u,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)u=n,e=o,u.flags&=14680066,d=u.alternate,d===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=d.childLanes,u.lanes=d.lanes,u.child=d.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=d.memoizedProps,u.memoizedState=d.memoizedState,u.updateQueue=d.updateQueue,u.type=d.type,e=d.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return He(et,et.current&1|2),t.child}e=e.sibling}u.tail!==null&&Ke()>lo&&(t.flags|=128,o=!0,oi(u,!1),t.lanes=4194304)}else{if(!o)if(e=sl(d),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oi(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Je)return Et(t),null}else 2*Ke()-u.renderingStartTime>lo&&n!==1073741824&&(t.flags|=128,o=!0,oi(u,!1),t.lanes=4194304);u.isBackwards?(d.sibling=t.child,t.child=d):(n=u.last,n!==null?n.sibling=d:t.child=d,u.last=d)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Ke(),t.sibling=null,n=et.current,He(et,o?n&1|2:n&1),t):(Et(t),null);case 22:case 23:return bs(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Ft&1073741824&&(Et(t),t.subtreeFlags&6&&(t.flags|=8192)):Et(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function mh(e,t){switch(Ma(t),t.tag){case 1:return zt(t.type)&&qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return no(),Xe(Tt),Xe(St),Ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qa(t),null;case 13:if(Xe(et),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Xe(et),null;case 4:return no(),null;case 10:return ja(t.type._context),null;case 22:case 23:return bs(),null;case 24:return null;default:return null}}var vl=!1,_t=!1,hh=typeof WeakSet=="function"?WeakSet:Set,J=null;function oo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){rt(e,t,o)}else n.current=null}function ms(e,t,n){try{n()}catch(o){rt(e,t,o)}}var zd=!1;function gh(e,t){if(ba=Ai,e=sc(),ya(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var d=0,h=-1,y=-1,P=0,I=0,U=e,A=null;t:for(;;){for(var G;U!==n||a!==0&&U.nodeType!==3||(h=d+a),U!==u||o!==0&&U.nodeType!==3||(y=d+o),U.nodeType===3&&(d+=U.nodeValue.length),(G=U.firstChild)!==null;)A=U,U=G;for(;;){if(U===e)break t;if(A===n&&++P===a&&(h=d),A===u&&++I===o&&(y=d),(G=U.nextSibling)!==null)break;U=A,A=U.parentNode}U=G}n=h===-1||y===-1?null:{start:h,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pa={focusedElem:e,selectionRange:n},Ai=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var ee=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var ne=ee.memoizedProps,it=ee.memoizedState,C=t.stateNode,x=C.getSnapshotBeforeUpdate(t.elementType===t.type?ne:rn(t.type,ne),it);C.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(j){rt(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return ee=zd,zd=!1,ee}function ii(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var u=a.destroy;a.destroy=void 0,u!==void 0&&ms(t,n,u)}a=a.next}while(a!==o)}}function yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ld(e){var t=e.alternate;t!==null&&(e.alternate=null,Ld(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[hn],delete t[Go],delete t[La],delete t[Jm],delete t[Zm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nd(e){return e.tag===5||e.tag===3||e.tag===4}function $d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi));else if(o!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}function vs(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}var yt=null,on=!1;function Gn(e,t,n){for(n=n.child;n!==null;)Dd(e,t,n),n=n.sibling}function Dd(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(en,n)}catch{}switch(n.tag){case 5:_t||oo(n,t);case 6:var o=yt,a=on;yt=null,Gn(e,t,n),yt=o,on=a,yt!==null&&(on?(e=yt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(on?(e=yt,n=n.stateNode,e.nodeType===8?za(e.parentNode,n):e.nodeType===1&&za(e,n),Ao(e)):za(yt,n.stateNode));break;case 4:o=yt,a=on,yt=n.stateNode.containerInfo,on=!0,Gn(e,t,n),yt=o,on=a;break;case 0:case 11:case 14:case 15:if(!_t&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var u=a,d=u.destroy;u=u.tag,d!==void 0&&(u&2||u&4)&&ms(n,t,d),a=a.next}while(a!==o)}Gn(e,t,n);break;case 1:if(!_t&&(oo(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(h){rt(n,t,h)}Gn(e,t,n);break;case 21:Gn(e,t,n);break;case 22:n.mode&1?(_t=(o=_t)||n.memoizedState!==null,Gn(e,t,n),_t=o):Gn(e,t,n);break;default:Gn(e,t,n)}}function Md(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hh),t.forEach(function(o){var a=Ch.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function ln(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var u=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 5:yt=h.stateNode,on=!1;break e;case 3:yt=h.stateNode.containerInfo,on=!0;break e;case 4:yt=h.stateNode.containerInfo,on=!0;break e}h=h.return}if(yt===null)throw Error(l(160));Dd(u,d,a),yt=null,on=!1;var y=a.alternate;y!==null&&(y.return=null),a.return=null}catch(P){rt(a,t,P)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Od(t,e),t=t.sibling}function Od(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ln(t,e),yn(e),o&4){try{ii(3,e,e.return),yl(3,e)}catch(ne){rt(e,e.return,ne)}try{ii(5,e,e.return)}catch(ne){rt(e,e.return,ne)}}break;case 1:ln(t,e),yn(e),o&512&&n!==null&&oo(n,n.return);break;case 5:if(ln(t,e),yn(e),o&512&&n!==null&&oo(n,n.return),e.flags&32){var a=e.stateNode;try{fn(a,"")}catch(ne){rt(e,e.return,ne)}}if(o&4&&(a=e.stateNode,a!=null)){var u=e.memoizedProps,d=n!==null?n.memoizedProps:u,h=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{h==="input"&&u.type==="radio"&&u.name!=null&&Pi(a,u),Ir(h,d);var P=Ir(h,u);for(d=0;d<y.length;d+=2){var I=y[d],U=y[d+1];I==="style"?bo(a,U):I==="dangerouslySetInnerHTML"?_o(a,U):I==="children"?fn(a,U):ke(a,I,U,P)}switch(h){case"input":xo(a,u);break;case"textarea":Nn(a,u);break;case"select":var A=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!u.multiple;var G=u.value;G!=null?Ln(a,!!u.multiple,G,!1):A!==!!u.multiple&&(u.defaultValue!=null?Ln(a,!!u.multiple,u.defaultValue,!0):Ln(a,!!u.multiple,u.multiple?[]:"",!1))}a[Go]=u}catch(ne){rt(e,e.return,ne)}}break;case 6:if(ln(t,e),yn(e),o&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,u=e.memoizedProps;try{a.nodeValue=u}catch(ne){rt(e,e.return,ne)}}break;case 3:if(ln(t,e),yn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(t.containerInfo)}catch(ne){rt(e,e.return,ne)}break;case 4:ln(t,e),yn(e);break;case 13:ln(t,e),yn(e),a=e.child,a.flags&8192&&(u=a.memoizedState!==null,a.stateNode.isHidden=u,!u||a.alternate!==null&&a.alternate.memoizedState!==null||(ws=Ke())),o&4&&Md(e);break;case 22:if(I=n!==null&&n.memoizedState!==null,e.mode&1?(_t=(P=_t)||I,ln(t,e),_t=P):ln(t,e),yn(e),o&8192){if(P=e.memoizedState!==null,(e.stateNode.isHidden=P)&&!I&&e.mode&1)for(J=e,I=e.child;I!==null;){for(U=J=I;J!==null;){switch(A=J,G=A.child,A.tag){case 0:case 11:case 14:case 15:ii(4,A,A.return);break;case 1:oo(A,A.return);var ee=A.stateNode;if(typeof ee.componentWillUnmount=="function"){o=A,n=A.return;try{t=o,ee.props=t.memoizedProps,ee.state=t.memoizedState,ee.componentWillUnmount()}catch(ne){rt(o,n,ne)}}break;case 5:oo(A,A.return);break;case 22:if(A.memoizedState!==null){Fd(U);continue}}G!==null?(G.return=A,J=G):Fd(U)}I=I.sibling}e:for(I=null,U=e;;){if(U.tag===5){if(I===null){I=U;try{a=U.stateNode,P?(u=a.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(h=U.stateNode,y=U.memoizedProps.style,d=y!=null&&y.hasOwnProperty("display")?y.display:null,h.style.display=Co("display",d))}catch(ne){rt(e,e.return,ne)}}}else if(U.tag===6){if(I===null)try{U.stateNode.nodeValue=P?"":U.memoizedProps}catch(ne){rt(e,e.return,ne)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;I===U&&(I=null),U=U.return}I===U&&(I=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:ln(t,e),yn(e),o&4&&Md(e);break;case 21:break;default:ln(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nd(n)){var o=n;break e}n=n.return}throw Error(l(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(fn(a,""),o.flags&=-33);var u=$d(e);vs(e,u,a);break;case 3:case 4:var d=o.stateNode.containerInfo,h=$d(e);gs(e,h,d);break;default:throw Error(l(161))}}catch(y){rt(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vh(e,t,n){J=e,Ad(e)}function Ad(e,t,n){for(var o=(e.mode&1)!==0;J!==null;){var a=J,u=a.child;if(a.tag===22&&o){var d=a.memoizedState!==null||vl;if(!d){var h=a.alternate,y=h!==null&&h.memoizedState!==null||_t;h=vl;var P=_t;if(vl=d,(_t=y)&&!P)for(J=a;J!==null;)d=J,y=d.child,d.tag===22&&d.memoizedState!==null?Ud(a):y!==null?(y.return=d,J=y):Ud(a);for(;u!==null;)J=u,Ad(u),u=u.sibling;J=a,vl=h,_t=P}Id(e)}else a.subtreeFlags&8772&&u!==null?(u.return=a,J=u):Id(e)}}function Id(e){for(;J!==null;){var t=J;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_t||yl(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!_t)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:rn(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Fc(t,u,o);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fc(t,d,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&n.focus();break;case"img":y.src&&(n.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var P=t.alternate;if(P!==null){var I=P.memoizedState;if(I!==null){var U=I.dehydrated;U!==null&&Ao(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}_t||t.flags&512&&hs(t)}catch(A){rt(t,t.return,A)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function Fd(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function Ud(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yl(4,t)}catch(y){rt(t,n,y)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(y){rt(t,a,y)}}var u=t.return;try{hs(t)}catch(y){rt(t,u,y)}break;case 5:var d=t.return;try{hs(t)}catch(y){rt(t,d,y)}}}catch(y){rt(t,t.return,y)}if(t===e){J=null;break}var h=t.sibling;if(h!==null){h.return=t.return,J=h;break}J=t.return}}var yh=Math.ceil,xl=V.ReactCurrentDispatcher,ys=V.ReactCurrentOwner,Xt=V.ReactCurrentBatchConfig,Me=0,mt=null,at=null,xt=0,Ft=0,io=Bn(0),ct=0,li=null,Er=0,wl=0,xs=0,ai=null,Nt=null,ws=0,lo=1/0,Rn=null,Sl=!1,Ss=null,Yn=null,kl=!1,Xn=null,El=0,si=0,ks=null,_l=-1,Cl=0;function bt(){return Me&6?Ke():_l!==-1?_l:_l=Ke()}function qn(e){return e.mode&1?Me&2&&xt!==0?xt&-xt:th.transition!==null?(Cl===0&&(Cl=$u()),Cl):(e=Ue,e!==0||(e=window.event,e=e===void 0?16:Vu(e.type)),e):1}function an(e,t,n,o){if(50<si)throw si=0,ks=null,Error(l(185));No(e,n,o),(!(Me&2)||e!==mt)&&(e===mt&&(!(Me&2)&&(wl|=n),ct===4&&Jn(e,xt)),$t(e,o),n===1&&Me===0&&!(t.mode&1)&&(lo=Ke()+500,Zi&&Wn()))}function $t(e,t){var n=e.callbackNode;tm(e,t);var o=Di(e,e===mt?xt:0);if(o===0)n!==null&&Mn(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Mn(n),t===1)e.tag===0?eh(Vd.bind(null,e)):Pc(Vd.bind(null,e)),Xm(function(){!(Me&6)&&Wn()}),n=null;else{switch(Du(o)){case 1:n=Zt;break;case 4:n=hr;break;case 16:n=wn;break;case 536870912:n=Ge;break;default:n=wn}n=Xd(n,jd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jd(e,t){if(_l=-1,Cl=0,Me&6)throw Error(l(327));var n=e.callbackNode;if(ao()&&e.callbackNode!==n)return null;var o=Di(e,e===mt?xt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=bl(e,o);else{t=o;var a=Me;Me|=2;var u=Hd();(mt!==e||xt!==t)&&(Rn=null,lo=Ke()+500,Cr(e,t));do try{Sh();break}catch(h){Bd(e,h)}while(!0);Ua(),xl.current=u,Me=a,at!==null?t=0:(mt=null,xt=0,t=ct)}if(t!==0){if(t===2&&(a=na(e),a!==0&&(o=a,t=Es(e,a))),t===1)throw n=li,Cr(e,0),Jn(e,o),$t(e,Ke()),n;if(t===6)Jn(e,o);else{if(a=e.current.alternate,!(o&30)&&!xh(a)&&(t=bl(e,o),t===2&&(u=na(e),u!==0&&(o=u,t=Es(e,u))),t===1))throw n=li,Cr(e,0),Jn(e,o),$t(e,Ke()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:br(e,Nt,Rn);break;case 3:if(Jn(e,o),(o&130023424)===o&&(t=ws+500-Ke(),10<t)){if(Di(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){bt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ta(br.bind(null,e,Nt,Rn),t);break}br(e,Nt,Rn);break;case 4:if(Jn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var d=31-ft(o);u=1<<d,d=t[d],d>a&&(a=d),o&=~u}if(o=a,o=Ke()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*yh(o/1960))-o,10<o){e.timeoutHandle=Ta(br.bind(null,e,Nt,Rn),o);break}br(e,Nt,Rn);break;case 5:br(e,Nt,Rn);break;default:throw Error(l(329))}}}return $t(e,Ke()),e.callbackNode===n?jd.bind(null,e):null}function Es(e,t){var n=ai;return e.current.memoizedState.isDehydrated&&(Cr(e,t).flags|=256),e=bl(e,t),e!==2&&(t=Nt,Nt=n,t!==null&&_s(t)),e}function _s(e){Nt===null?Nt=e:Nt.push.apply(Nt,e)}function xh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],u=a.getSnapshot;a=a.value;try{if(!tn(u(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t){for(t&=~xs,t&=~wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),o=1<<n;e[n]=-1,t&=~o}}function Vd(e){if(Me&6)throw Error(l(327));ao();var t=Di(e,0);if(!(t&1))return $t(e,Ke()),null;var n=bl(e,t);if(e.tag!==0&&n===2){var o=na(e);o!==0&&(t=o,n=Es(e,o))}if(n===1)throw n=li,Cr(e,0),Jn(e,t),$t(e,Ke()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,br(e,Nt,Rn),$t(e,Ke()),null}function Cs(e,t){var n=Me;Me|=1;try{return e(t)}finally{Me=n,Me===0&&(lo=Ke()+500,Zi&&Wn())}}function _r(e){Xn!==null&&Xn.tag===0&&!(Me&6)&&ao();var t=Me;Me|=1;var n=Xt.transition,o=Ue;try{if(Xt.transition=null,Ue=1,e)return e()}finally{Ue=o,Xt.transition=n,Me=t,!(Me&6)&&Wn()}}function bs(){Ft=io.current,Xe(io)}function Cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ym(n)),at!==null)for(n=at.return;n!==null;){var o=n;switch(Ma(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&qi();break;case 3:no(),Xe(Tt),Xe(St),Ga();break;case 5:Qa(o);break;case 4:no();break;case 13:Xe(et);break;case 19:Xe(et);break;case 10:ja(o.type._context);break;case 22:case 23:bs()}n=n.return}if(mt=e,at=e=Zn(e.current,null),xt=Ft=t,ct=0,li=null,xs=wl=Er=0,Nt=ai=null,wr!==null){for(t=0;t<wr.length;t++)if(n=wr[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,u=n.pending;if(u!==null){var d=u.next;u.next=a,o.next=d}n.pending=o}wr=null}return e}function Bd(e,t){do{var n=at;try{if(Ua(),ul.current=pl,cl){for(var o=tt.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}cl=!1}if(kr=0,pt=ut=tt=null,ei=!1,ti=0,ys.current=null,n===null||n.return===null){ct=1,li=t,at=null;break}e:{var u=e,d=n.return,h=n,y=t;if(t=xt,h.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var P=y,I=h,U=I.tag;if(!(I.mode&1)&&(U===0||U===11||U===15)){var A=I.alternate;A?(I.updateQueue=A.updateQueue,I.memoizedState=A.memoizedState,I.lanes=A.lanes):(I.updateQueue=null,I.memoizedState=null)}var G=md(d);if(G!==null){G.flags&=-257,hd(G,d,h,u,t),G.mode&1&&pd(u,P,t),t=G,y=P;var ee=t.updateQueue;if(ee===null){var ne=new Set;ne.add(y),t.updateQueue=ne}else ee.add(y);break e}else{if(!(t&1)){pd(u,P,t),Ps();break e}y=Error(l(426))}}else if(Je&&h.mode&1){var it=md(d);if(it!==null){!(it.flags&65536)&&(it.flags|=256),hd(it,d,h,u,t),Ia(ro(y,h));break e}}u=y=ro(y,h),ct!==4&&(ct=2),ai===null?ai=[u]:ai.push(u),u=d;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var C=dd(u,y,t);Ic(u,C);break e;case 1:h=y;var x=u.type,b=u.stateNode;if(!(u.flags&128)&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Yn===null||!Yn.has(b)))){u.flags|=65536,t&=-t,u.lanes|=t;var j=fd(u,h,t);Ic(u,j);break e}}u=u.return}while(u!==null)}Qd(n)}catch(oe){t=oe,at===n&&n!==null&&(at=n=n.return);continue}break}while(!0)}function Hd(){var e=xl.current;return xl.current=pl,e===null?pl:e}function Ps(){(ct===0||ct===3||ct===2)&&(ct=4),mt===null||!(Er&268435455)&&!(wl&268435455)||Jn(mt,xt)}function bl(e,t){var n=Me;Me|=2;var o=Hd();(mt!==e||xt!==t)&&(Rn=null,Cr(e,t));do try{wh();break}catch(a){Bd(e,a)}while(!0);if(Ua(),Me=n,xl.current=o,at!==null)throw Error(l(261));return mt=null,xt=0,ct}function wh(){for(;at!==null;)Wd(at)}function Sh(){for(;at!==null&&!Jt();)Wd(at)}function Wd(e){var t=Yd(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?Qd(e):at=t,ys.current=null}function Qd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mh(n,t),n!==null){n.flags&=32767,at=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ct=6,at=null;return}}else if(n=ph(n,t,Ft),n!==null){at=n;return}if(t=t.sibling,t!==null){at=t;return}at=t=e}while(t!==null);ct===0&&(ct=5)}function br(e,t,n){var o=Ue,a=Xt.transition;try{Xt.transition=null,Ue=1,kh(e,t,n,o)}finally{Xt.transition=a,Ue=o}return null}function kh(e,t,n,o){do ao();while(Xn!==null);if(Me&6)throw Error(l(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(nm(e,u),e===mt&&(at=mt=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kl||(kl=!0,Xd(wn,function(){return ao(),null})),u=(n.flags&15990)!==0,n.subtreeFlags&15990||u){u=Xt.transition,Xt.transition=null;var d=Ue;Ue=1;var h=Me;Me|=4,ys.current=null,gh(e,n),Od(n,e),Vm(Pa),Ai=!!ba,Pa=ba=null,e.current=n,vh(n),Wt(),Me=h,Ue=d,Xt.transition=u}else e.current=n;if(kl&&(kl=!1,Xn=e,El=a),u=e.pendingLanes,u===0&&(Yn=null),nt(n.stateNode),$t(e,Ke()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(Sl)throw Sl=!1,e=Ss,Ss=null,e;return El&1&&e.tag!==0&&ao(),u=e.pendingLanes,u&1?e===ks?si++:(si=0,ks=e):si=0,Wn(),null}function ao(){if(Xn!==null){var e=Du(El),t=Xt.transition,n=Ue;try{if(Xt.transition=null,Ue=16>e?16:e,Xn===null)var o=!1;else{if(e=Xn,Xn=null,El=0,Me&6)throw Error(l(331));var a=Me;for(Me|=4,J=e.current;J!==null;){var u=J,d=u.child;if(J.flags&16){var h=u.deletions;if(h!==null){for(var y=0;y<h.length;y++){var P=h[y];for(J=P;J!==null;){var I=J;switch(I.tag){case 0:case 11:case 15:ii(8,I,u)}var U=I.child;if(U!==null)U.return=I,J=U;else for(;J!==null;){I=J;var A=I.sibling,G=I.return;if(Ld(I),I===P){J=null;break}if(A!==null){A.return=G,J=A;break}J=G}}}var ee=u.alternate;if(ee!==null){var ne=ee.child;if(ne!==null){ee.child=null;do{var it=ne.sibling;ne.sibling=null,ne=it}while(ne!==null)}}J=u}}if(u.subtreeFlags&2064&&d!==null)d.return=u,J=d;else e:for(;J!==null;){if(u=J,u.flags&2048)switch(u.tag){case 0:case 11:case 15:ii(9,u,u.return)}var C=u.sibling;if(C!==null){C.return=u.return,J=C;break e}J=u.return}}var x=e.current;for(J=x;J!==null;){d=J;var b=d.child;if(d.subtreeFlags&2064&&b!==null)b.return=d,J=b;else e:for(d=x;J!==null;){if(h=J,h.flags&2048)try{switch(h.tag){case 0:case 11:case 15:yl(9,h)}}catch(oe){rt(h,h.return,oe)}if(h===d){J=null;break e}var j=h.sibling;if(j!==null){j.return=h.return,J=j;break e}J=h.return}}if(Me=a,Wn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(en,e)}catch{}o=!0}return o}finally{Ue=n,Xt.transition=t}}return!1}function Kd(e,t,n){t=ro(n,t),t=dd(e,t,1),e=Kn(e,t,1),t=bt(),e!==null&&(No(e,1,t),$t(e,t))}function rt(e,t,n){if(e.tag===3)Kd(e,e,n);else for(;t!==null;){if(t.tag===3){Kd(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Yn===null||!Yn.has(o))){e=ro(n,e),e=fd(t,e,1),t=Kn(t,e,1),e=bt(),t!==null&&(No(t,1,e),$t(t,e));break}}t=t.return}}function Eh(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=bt(),e.pingedLanes|=e.suspendedLanes&n,mt===e&&(xt&n)===n&&(ct===4||ct===3&&(xt&130023424)===xt&&500>Ke()-ws?Cr(e,0):xs|=n),$t(e,t)}function Gd(e,t){t===0&&(e.mode&1?(t=$i,$i<<=1,!($i&130023424)&&($i=4194304)):t=1);var n=bt();e=Cn(e,t),e!==null&&(No(e,t,n),$t(e,n))}function _h(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gd(e,n)}function Ch(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),Gd(e,n)}var Yd;Yd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Tt.current)Lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Lt=!1,fh(e,t,n);Lt=!!(e.flags&131072)}else Lt=!1,Je&&t.flags&1048576&&Rc(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;gl(e,t),e=t.pendingProps;var a=Yr(t,St.current);to(t,n),a=qa(null,t,o,e,a,n);var u=Ja();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zt(o)?(u=!0,Ji(t)):u=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ha(t),a.updater=ml,t.stateNode=a,a._reactInternals=t,os(t,o,e,n),t=ss(null,t,o,!0,u,n)):(t.tag=0,Je&&u&&Da(t),Ct(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(gl(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Ph(o),e=rn(o,e),a){case 0:t=as(null,t,o,e,n);break e;case 1:t=Sd(null,t,o,e,n);break e;case 11:t=gd(null,t,o,e,n);break e;case 14:t=vd(null,t,o,rn(o.type,e),n);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:rn(o,a),as(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:rn(o,a),Sd(e,t,o,a,n);case 3:e:{if(kd(t),e===null)throw Error(l(387));o=t.pendingProps,u=t.memoizedState,a=u.element,Ac(e,t),al(t,o,null,n);var d=t.memoizedState;if(o=d.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){a=ro(Error(l(423)),t),t=Ed(e,t,o,n,a);break e}else if(o!==a){a=ro(Error(l(424)),t),t=Ed(e,t,o,n,a);break e}else for(It=Vn(t.stateNode.containerInfo.firstChild),At=t,Je=!0,nn=null,n=Mc(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),o===a){t=Pn(e,t,n);break e}Ct(e,t,o,n)}t=t.child}return t;case 5:return Uc(t),e===null&&Aa(t),o=t.type,a=t.pendingProps,u=e!==null?e.memoizedProps:null,d=a.children,Ra(o,a)?d=null:u!==null&&Ra(o,u)&&(t.flags|=32),wd(e,t),Ct(e,t,d,n),t.child;case 6:return e===null&&Aa(t),null;case 13:return _d(e,t,n);case 4:return Wa(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Zr(t,null,o,n):Ct(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:rn(o,a),gd(e,t,o,a,n);case 7:return Ct(e,t,t.pendingProps,n),t.child;case 8:return Ct(e,t,t.pendingProps.children,n),t.child;case 12:return Ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,u=t.memoizedProps,d=a.value,He(ol,o._currentValue),o._currentValue=d,u!==null)if(tn(u.value,d)){if(u.children===a.children&&!Tt.current){t=Pn(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){d=u.child;for(var y=h.firstContext;y!==null;){if(y.context===o){if(u.tag===1){y=bn(-1,n&-n),y.tag=2;var P=u.updateQueue;if(P!==null){P=P.shared;var I=P.pending;I===null?y.next=y:(y.next=I.next,I.next=y),P.pending=y}}u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),Va(u.return,n,t),h.lanes|=n;break}y=y.next}}else if(u.tag===10)d=u.type===t.type?null:u.child;else if(u.tag===18){if(d=u.return,d===null)throw Error(l(341));d.lanes|=n,h=d.alternate,h!==null&&(h.lanes|=n),Va(d,n,t),d=u.sibling}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===t){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}Ct(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,to(t,n),a=Gt(a),o=o(a),t.flags|=1,Ct(e,t,o,n),t.child;case 14:return o=t.type,a=rn(o,t.pendingProps),a=rn(o.type,a),vd(e,t,o,a,n);case 15:return yd(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:rn(o,a),gl(e,t),t.tag=1,zt(o)?(e=!0,Ji(t)):e=!1,to(t,n),ud(t,o,a),os(t,o,a,n),ss(null,t,o,!0,e,n);case 19:return bd(e,t,n);case 22:return xd(e,t,n)}throw Error(l(156,t.tag))};function Xd(e,t){return xn(e,t)}function bh(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,o){return new bh(e,t,n,o)}function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ph(e){if(typeof e=="function")return Rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===be)return 11;if(e===De)return 14}return 2}function Zn(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pl(e,t,n,o,a,u){var d=2;if(o=e,typeof e=="function")Rs(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case ye:return Pr(n.children,a,u,t);case le:d=8,a|=8;break;case ae:return e=qt(12,n,t,a|2),e.elementType=ae,e.lanes=u,e;case Le:return e=qt(13,n,t,a),e.elementType=Le,e.lanes=u,e;case _e:return e=qt(19,n,t,a),e.elementType=_e,e.lanes=u,e;case he:return Rl(n,a,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xe:d=10;break e;case Ae:d=9;break e;case be:d=11;break e;case De:d=14;break e;case Fe:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=qt(d,n,t,a),t.elementType=e,t.type=o,t.lanes=u,t}function Pr(e,t,n,o){return e=qt(7,e,o,t),e.lanes=n,e}function Rl(e,t,n,o){return e=qt(22,e,o,t),e.elementType=he,e.lanes=n,e.stateNode={isHidden:!1},e}function Ts(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function zs(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rh(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ls(e,t,n,o,a,u,d,h,y){return e=new Rh(e,t,n,h,y),t===1?(t=1,u===!0&&(t|=8)):t=0,u=qt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ha(u),e}function Th(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function qd(e){if(!e)return Hn;e=e._reactInternals;e:{if(we(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(zt(n))return Cc(e,n,t)}return t}function Jd(e,t,n,o,a,u,d,h,y){return e=Ls(n,o,!0,e,a,u,d,h,y),e.context=qd(null),n=e.current,o=bt(),a=qn(n),u=bn(o,a),u.callback=t??null,Kn(n,u,a),e.current.lanes=a,No(e,a,o),$t(e,o),e}function Tl(e,t,n,o){var a=t.current,u=bt(),d=qn(a);return n=qd(n),t.context===null?t.context=n:t.pendingContext=n,t=bn(u,d),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Kn(a,t,d),e!==null&&(an(e,a,d,u),ll(e,a,d)),d}function zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ns(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}var ef=typeof reportError=="function"?reportError:function(e){console.error(e)};function $s(e){this._internalRoot=e}Ll.prototype.render=$s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Tl(e,t,null,null)},Ll.prototype.unmount=$s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_r(function(){Tl(null,e,null,null)}),t[Sn]=null}};function Ll(e){this._internalRoot=e}Ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=Au();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&Uu(e)}};function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tf(){}function zh(e,t,n,o,a){if(a){if(typeof o=="function"){var u=o;o=function(){var P=zl(d);u.call(P)}}var d=Jd(t,o,e,0,null,!1,!1,"",tf);return e._reactRootContainer=d,e[Sn]=d.current,Qo(e.nodeType===8?e.parentNode:e),_r(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var h=o;o=function(){var P=zl(y);h.call(P)}}var y=Ls(e,0,!1,null,null,!1,!1,"",tf);return e._reactRootContainer=y,e[Sn]=y.current,Qo(e.nodeType===8?e.parentNode:e),_r(function(){Tl(t,y,n,o)}),y}function $l(e,t,n,o,a){var u=n._reactRootContainer;if(u){var d=u;if(typeof a=="function"){var h=a;a=function(){var y=zl(d);h.call(y)}}Tl(t,d,e,a)}else d=zh(n,t,e,a,o);return zl(d)}Mu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lo(t.pendingLanes);n!==0&&(oa(t,n|1),$t(t,Ke()),!(Me&6)&&(lo=Ke()+500,Wn()))}break;case 13:_r(function(){var o=Cn(e,1);if(o!==null){var a=bt();an(o,e,1,a)}}),Ns(e,1)}},ia=function(e){if(e.tag===13){var t=Cn(e,134217728);if(t!==null){var n=bt();an(t,e,134217728,n)}Ns(e,134217728)}},Ou=function(e){if(e.tag===13){var t=qn(e),n=Cn(e,t);if(n!==null){var o=bt();an(n,e,t,o)}Ns(e,t)}},Au=function(){return Ue},Iu=function(e,t){var n=Ue;try{return Ue=e,t()}finally{Ue=n}},dr=function(e,t,n){switch(t){case"input":if(xo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=Xi(o);if(!a)throw Error(l(90));qe(o),xo(o,a)}}}break;case"textarea":Nn(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}},fr=Cs,pr=_r;var Lh={usingClientEntryPoint:!1,Events:[Yo,Kr,Xi,Ti,To,Cs]},ui={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nh={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:V.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ne(e),e===null?null:e.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{en=Dl.inject(Nh),wt=Dl}catch{}}return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lh,Dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ds(t))throw Error(l(200));return Th(e,t,null,n)},Dt.createRoot=function(e,t){if(!Ds(e))throw Error(l(299));var n=!1,o="",a=ef;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ls(e,1,!1,null,null,n,!1,o,a),e[Sn]=t.current,Qo(e.nodeType===8?e.parentNode:e),new $s(t)},Dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Ne(t),e=e===null?null:e.stateNode,e},Dt.flushSync=function(e){return _r(e)},Dt.hydrate=function(e,t,n){if(!Nl(t))throw Error(l(200));return $l(null,e,t,!0,n)},Dt.hydrateRoot=function(e,t,n){if(!Ds(e))throw Error(l(405));var o=n!=null&&n.hydratedSources||null,a=!1,u="",d=ef;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Jd(t,null,e,1,n??null,a,!1,u,d),e[Sn]=t.current,Qo(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ll(t)},Dt.render=function(e,t,n){if(!Nl(t))throw Error(l(200));return $l(null,e,t,!1,n)},Dt.unmountComponentAtNode=function(e){if(!Nl(e))throw Error(l(40));return e._reactRootContainer?(_r(function(){$l(null,null,e,!1,function(){e._reactRootContainer=null,e[Sn]=null})}),!0):!1},Dt.unstable_batchedUpdates=Cs,Dt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Nl(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return $l(e,t,n,!1,o)},Dt.version="18.3.1-next-f1338f8080-20240426",Dt}var sf;function ap(){if(sf)return Os.exports;sf=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Os.exports=Fh(),Os.exports}var uf;function Uh(){if(uf)return Ml;uf=1;var i=ap();return Ml.createRoot=i.createRoot,Ml.hydrateRoot=i.hydrateRoot,Ml}var jh=Uh(),du=ap();const Vh=lp(du),Bh=ip({__proto__:null,default:Vh},[du]);/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ze(){return Ze=Object.assign?Object.assign.bind():function(i){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(i[s]=l[s])}return i},Ze.apply(this,arguments)}var st;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(st||(st={}));const cf="popstate";function Hh(i){i===void 0&&(i={});function r(s,c){let{pathname:f,search:p,hash:g}=s.location;return xi("",{pathname:f,search:p,hash:g},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function l(s,c){return typeof c=="string"?c:Ei(c)}return Qh(r,l,null,i)}function ze(i,r){if(i===!1||i===null||typeof i>"u")throw new Error(r)}function ho(i,r){if(!i){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Wh(){return Math.random().toString(36).substr(2,8)}function df(i,r){return{usr:i.state,key:i.key,idx:r}}function xi(i,r,l,s){return l===void 0&&(l=null),Ze({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof r=="string"?lr(r):r,{state:l,key:r&&r.key||s||Wh()})}function Ei(i){let{pathname:r="/",search:l="",hash:s=""}=i;return l&&l!=="?"&&(r+=l.charAt(0)==="?"?l:"?"+l),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function lr(i){let r={};if(i){let l=i.indexOf("#");l>=0&&(r.hash=i.substr(l),i=i.substr(0,l));let s=i.indexOf("?");s>=0&&(r.search=i.substr(s),i=i.substr(0,s)),i&&(r.pathname=i)}return r}function Qh(i,r,l,s){s===void 0&&(s={});let{window:c=document.defaultView,v5Compat:f=!1}=s,p=c.history,g=st.Pop,m=null,E=S();E==null&&(E=0,p.replaceState(Ze({},p.state,{idx:E}),""));function S(){return(p.state||{idx:null}).idx}function w(){g=st.Pop;let H=S(),ve=H==null?null:H-E;E=H,m&&m({action:g,location:M.location,delta:ve})}function z(H,ve){g=st.Push;let Y=xi(M.location,H,ve);E=S()+1;let ke=df(Y,E),V=M.createHref(Y);try{p.pushState(ke,"",V)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;c.location.assign(V)}f&&m&&m({action:g,location:M.location,delta:1})}function N(H,ve){g=st.Replace;let Y=xi(M.location,H,ve);E=S();let ke=df(Y,E),V=M.createHref(Y);p.replaceState(ke,"",V),f&&m&&m({action:g,location:M.location,delta:0})}function B(H){let ve=c.location.origin!=="null"?c.location.origin:c.location.href,Y=typeof H=="string"?H:Ei(H);return Y=Y.replace(/ $/,"%20"),ze(ve,"No window.location.(origin|href) available to create URL for href: "+Y),new URL(Y,ve)}let M={get action(){return g},get location(){return i(c,p)},listen(H){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(cf,w),m=H,()=>{c.removeEventListener(cf,w),m=null}},createHref(H){return r(c,H)},createURL:B,encodeLocation(H){let ve=B(H);return{pathname:ve.pathname,search:ve.search,hash:ve.hash}},push:z,replace:N,go(H){return p.go(H)}};return M}var Ve;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Ve||(Ve={}));const Kh=new Set(["lazy","caseSensitive","path","id","index","children"]);function Gh(i){return i.index===!0}function jl(i,r,l,s){return l===void 0&&(l=[]),s===void 0&&(s={}),i.map((c,f)=>{let p=[...l,String(f)],g=typeof c.id=="string"?c.id:p.join("-");if(ze(c.index!==!0||!c.children,"Cannot specify children on an index route"),ze(!s[g],'Found a route id collision on id "'+g+`".  Route id's must be globally unique within Data Router usages`),Gh(c)){let m=Ze({},c,r(c),{id:g});return s[g]=m,m}else{let m=Ze({},c,r(c),{id:g,children:void 0});return s[g]=m,c.children&&(m.children=jl(c.children,r,p,s)),m}})}function nr(i,r,l){return l===void 0&&(l="/"),Fl(i,r,l,!1)}function Fl(i,r,l,s){let c=typeof r=="string"?lr(r):r,f=Dr(c.pathname||"/",l);if(f==null)return null;let p=sp(i);Xh(p);let g=null;for(let m=0;g==null&&m<p.length;++m){let E=ag(f);g=ig(p[m],E,s)}return g}function Yh(i,r){let{route:l,pathname:s,params:c}=i;return{id:l.id,pathname:s,params:c,data:r[l.id],handle:l.handle}}function sp(i,r,l,s){r===void 0&&(r=[]),l===void 0&&(l=[]),s===void 0&&(s="");let c=(f,p,g)=>{let m={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};m.relativePath.startsWith("/")&&(ze(m.relativePath.startsWith(s),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(s.length));let E=zn([s,m.relativePath]),S=l.concat(m);f.children&&f.children.length>0&&(ze(f.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+E+'".')),sp(f.children,r,S,E)),!(f.path==null&&!f.index)&&r.push({path:E,score:rg(E,f.index),routesMeta:S})};return i.forEach((f,p)=>{var g;if(f.path===""||!((g=f.path)!=null&&g.includes("?")))c(f,p);else for(let m of up(f.path))c(f,p,m)}),r}function up(i){let r=i.split("/");if(r.length===0)return[];let[l,...s]=r,c=l.endsWith("?"),f=l.replace(/\?$/,"");if(s.length===0)return c?[f,""]:[f];let p=up(s.join("/")),g=[];return g.push(...p.map(m=>m===""?f:[f,m].join("/"))),c&&g.push(...p),g.map(m=>i.startsWith("/")&&m===""?"/":m)}function Xh(i){i.sort((r,l)=>r.score!==l.score?l.score-r.score:og(r.routesMeta.map(s=>s.childrenIndex),l.routesMeta.map(s=>s.childrenIndex)))}const qh=/^:[\w-]+$/,Jh=3,Zh=2,eg=1,tg=10,ng=-2,ff=i=>i==="*";function rg(i,r){let l=i.split("/"),s=l.length;return l.some(ff)&&(s+=ng),r&&(s+=Zh),l.filter(c=>!ff(c)).reduce((c,f)=>c+(qh.test(f)?Jh:f===""?eg:tg),s)}function og(i,r){return i.length===r.length&&i.slice(0,-1).every((s,c)=>s===r[c])?i[i.length-1]-r[r.length-1]:0}function ig(i,r,l){l===void 0&&(l=!1);let{routesMeta:s}=i,c={},f="/",p=[];for(let g=0;g<s.length;++g){let m=s[g],E=g===s.length-1,S=f==="/"?r:r.slice(f.length)||"/",w=pf({path:m.relativePath,caseSensitive:m.caseSensitive,end:E},S),z=m.route;if(!w&&E&&l&&!s[s.length-1].route.index&&(w=pf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},S)),!w)return null;Object.assign(c,w.params),p.push({params:c,pathname:zn([f,w.pathname]),pathnameBase:cg(zn([f,w.pathnameBase])),route:z}),w.pathnameBase!=="/"&&(f=zn([f,w.pathnameBase]))}return p}function pf(i,r){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[l,s]=lg(i.path,i.caseSensitive,i.end),c=r.match(l);if(!c)return null;let f=c[0],p=f.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:s.reduce((E,S,w)=>{let{paramName:z,isOptional:N}=S;if(z==="*"){let M=g[w]||"";p=f.slice(0,f.length-M.length).replace(/(.)\/+$/,"$1")}const B=g[w];return N&&!B?E[z]=void 0:E[z]=(B||"").replace(/%2F/g,"/"),E},{}),pathname:f,pathnameBase:p,pattern:i}}function lg(i,r,l){r===void 0&&(r=!1),l===void 0&&(l=!0),ho(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let s=[],c="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,g,m)=>(s.push({paramName:g,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),c+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?c+="\\/*$":i!==""&&i!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),s]}function ag(i){try{return i.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return ho(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),i}}function Dr(i,r){if(r==="/")return i;if(!i.toLowerCase().startsWith(r.toLowerCase()))return null;let l=r.endsWith("/")?r.length-1:r.length,s=i.charAt(l);return s&&s!=="/"?null:i.slice(l)||"/"}function sg(i,r){r===void 0&&(r="/");let{pathname:l,search:s="",hash:c=""}=typeof i=="string"?lr(i):i;return{pathname:l?l.startsWith("/")?l:ug(l,r):r,search:dg(s),hash:fg(c)}}function ug(i,r){let l=r.replace(/\/+$/,"").split("/");return i.split("/").forEach(c=>{c===".."?l.length>1&&l.pop():c!=="."&&l.push(c)}),l.length>1?l.join("/"):"/"}function Fs(i,r,l,s){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cp(i){return i.filter((r,l)=>l===0||r.route.path&&r.route.path.length>0)}function fu(i,r){let l=cp(i);return r?l.map((s,c)=>c===l.length-1?s.pathname:s.pathnameBase):l.map(s=>s.pathnameBase)}function pu(i,r,l,s){s===void 0&&(s=!1);let c;typeof i=="string"?c=lr(i):(c=Ze({},i),ze(!c.pathname||!c.pathname.includes("?"),Fs("?","pathname","search",c)),ze(!c.pathname||!c.pathname.includes("#"),Fs("#","pathname","hash",c)),ze(!c.search||!c.search.includes("#"),Fs("#","search","hash",c)));let f=i===""||c.pathname==="",p=f?"/":c.pathname,g;if(p==null)g=l;else{let w=r.length-1;if(!s&&p.startsWith("..")){let z=p.split("/");for(;z[0]==="..";)z.shift(),w-=1;c.pathname=z.join("/")}g=w>=0?r[w]:"/"}let m=sg(c,g),E=p&&p!=="/"&&p.endsWith("/"),S=(f||p===".")&&l.endsWith("/");return!m.pathname.endsWith("/")&&(E||S)&&(m.pathname+="/"),m}const zn=i=>i.join("/").replace(/\/\/+/g,"/"),cg=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),dg=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,fg=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;class Vl{constructor(r,l,s,c){c===void 0&&(c=!1),this.status=r,this.statusText=l||"",this.internal=c,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}}function Xl(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const dp=["post","put","patch","delete"],pg=new Set(dp),mg=["get",...dp],hg=new Set(mg),gg=new Set([301,302,303,307,308]),vg=new Set([307,308]),Us={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},fo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},mu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xg=i=>({hasErrorBoundary:!!i.hasErrorBoundary}),fp="remix-router-transitions";function wg(i){const r=i.window?i.window:typeof window<"u"?window:void 0,l=typeof r<"u"&&typeof r.document<"u"&&typeof r.document.createElement<"u",s=!l;ze(i.routes.length>0,"You must provide a non-empty routes array to createRouter");let c;if(i.mapRouteProperties)c=i.mapRouteProperties;else if(i.detectErrorBoundary){let v=i.detectErrorBoundary;c=_=>({hasErrorBoundary:v(_)})}else c=xg;let f={},p=jl(i.routes,c,void 0,f),g,m=i.basename||"/",E=i.dataStrategy||_g,S=i.patchRoutesOnNavigation,w=Ze({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},i.future),z=null,N=new Set,B=null,M=null,H=null,ve=i.hydrationData!=null,Y=nr(p,i.history.location,m),ke=null;if(Y==null&&!S){let v=Mt(404,{pathname:i.history.location.pathname}),{matches:_,route:T}=_f(p);Y=_,ke={[T.id]:v}}Y&&!i.hydrationData&&fr(Y,p,i.history.location.pathname).active&&(Y=null);let V;if(Y)if(Y.some(v=>v.route.lazy))V=!1;else if(!Y.some(v=>v.route.loader))V=!0;else if(w.v7_partialHydration){let v=i.hydrationData?i.hydrationData.loaderData:null,_=i.hydrationData?i.hydrationData.errors:null;if(_){let T=Y.findIndex(O=>_[O.route.id]!==void 0);V=Y.slice(0,T+1).every(O=>!nu(O.route,v,_))}else V=Y.every(T=>!nu(T.route,v,_))}else V=i.hydrationData!=null;else if(V=!1,Y=[],w.v7_partialHydration){let v=fr(null,p,i.history.location.pathname);v.active&&v.matches&&(Y=v.matches)}let ue,R={historyAction:i.history.action,location:i.history.location,matches:Y,initialized:V,navigation:Us,restoreScrollPosition:i.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:i.hydrationData&&i.hydrationData.loaderData||{},actionData:i.hydrationData&&i.hydrationData.actionData||null,errors:i.hydrationData&&i.hydrationData.errors||ke,fetchers:new Map,blockers:new Map},ye=st.Pop,le=!1,ae,xe=!1,Ae=new Map,be=null,Le=!1,_e=!1,De=[],Fe=new Set,he=new Map,W=0,te=-1,Q=new Map,k=new Set,D=new Map,pe=new Map,fe=new Set,Se=new Map,Ee=new Map,Pe;function L(){if(z=i.history.listen(v=>{let{action:_,location:T,delta:O}=v;if(Pe){Pe(),Pe=void 0;return}ho(Ee.size===0||O!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=Fr({currentLocation:R.location,nextLocation:T,historyAction:_});if(K&&O!=null){let re=new Promise(me=>{Pe=me});i.history.go(O*-1),$n(K,{state:"blocked",location:T,proceed(){$n(K,{state:"proceeding",proceed:void 0,reset:void 0,location:T}),re.then(()=>i.history.go(O))},reset(){let me=new Map(R.blockers);me.set(K,fo),Re({blockers:me})}});return}return cn(_,T)}),l){Ig(r,Ae);let v=()=>Fg(r,Ae);r.addEventListener("pagehide",v),be=()=>r.removeEventListener("pagehide",v)}return R.initialized||cn(st.Pop,R.location,{initialHydration:!0}),ue}function F(){z&&z(),be&&be(),N.clear(),ae&&ae.abort(),R.fetchers.forEach((v,_)=>fn(_)),R.blockers.forEach((v,_)=>Ir(_))}function se(v){return N.add(v),()=>N.delete(v)}function Re(v,_){_===void 0&&(_={}),R=Ze({},R,v);let T=[],O=[];w.v7_fetcherPersist&&R.fetchers.forEach((K,re)=>{K.state==="idle"&&(fe.has(re)?O.push(re):T.push(re))}),[...N].forEach(K=>K(R,{deletedFetchers:O,viewTransitionOpts:_.viewTransitionOpts,flushSync:_.flushSync===!0})),w.v7_fetcherPersist&&(T.forEach(K=>R.fetchers.delete(K)),O.forEach(K=>fn(K)))}function qe(v,_,T){var O,K;let{flushSync:re}=T===void 0?{}:T,me=R.actionData!=null&&R.navigation.formMethod!=null&&un(R.navigation.formMethod)&&R.navigation.state==="loading"&&((O=v.state)==null?void 0:O._isRedirect)!==!0,X;_.actionData?Object.keys(_.actionData).length>0?X=_.actionData:X=null:me?X=R.actionData:X=null;let Z=_.loaderData?kf(R.loaderData,_.loaderData,_.matches||[],_.errors):R.loaderData,q=R.blockers;q.size>0&&(q=new Map(q),q.forEach((Te,lt)=>q.set(lt,fo)));let ie=le===!0||R.navigation.formMethod!=null&&un(R.navigation.formMethod)&&((K=v.state)==null?void 0:K._isRedirect)!==!0;g&&(p=g,g=void 0),Le||ye===st.Pop||(ye===st.Push?i.history.push(v,v.state):ye===st.Replace&&i.history.replace(v,v.state));let we;if(ye===st.Pop){let Te=Ae.get(R.location.pathname);Te&&Te.has(v.pathname)?we={currentLocation:R.location,nextLocation:v}:Ae.has(v.pathname)&&(we={currentLocation:v,nextLocation:R.location})}else if(xe){let Te=Ae.get(R.location.pathname);Te?Te.add(v.pathname):(Te=new Set([v.pathname]),Ae.set(R.location.pathname,Te)),we={currentLocation:R.location,nextLocation:v}}Re(Ze({},_,{actionData:X,loaderData:Z,historyAction:ye,location:v,initialized:!0,navigation:Us,revalidation:"idle",restoreScrollPosition:To(v,_.matches||R.matches),preventScrollReset:ie,blockers:q}),{viewTransitionOpts:we,flushSync:re===!0}),ye=st.Pop,le=!1,xe=!1,Le=!1,_e=!1,De=[]}async function We(v,_){if(typeof v=="number"){i.history.go(v);return}let T=tu(R.location,R.matches,m,w.v7_prependBasename,v,w.v7_relativeSplatPath,_==null?void 0:_.fromRouteId,_==null?void 0:_.relative),{path:O,submission:K,error:re}=mf(w.v7_normalizeFormMethod,!1,T,_),me=R.location,X=xi(R.location,O,_&&_.state);X=Ze({},X,i.history.encodeLocation(X));let Z=_&&_.replace!=null?_.replace:void 0,q=st.Push;Z===!0?q=st.Replace:Z===!1||K!=null&&un(K.formMethod)&&K.formAction===R.location.pathname+R.location.search&&(q=st.Replace);let ie=_&&"preventScrollReset"in _?_.preventScrollReset===!0:void 0,we=(_&&_.flushSync)===!0,Te=Fr({currentLocation:me,nextLocation:X,historyAction:q});if(Te){$n(Te,{state:"blocked",location:X,proceed(){$n(Te,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),We(v,_)},reset(){let lt=new Map(R.blockers);lt.set(Te,fo),Re({blockers:lt})}});return}return await cn(q,X,{submission:K,pendingError:re,preventScrollReset:ie,replace:_&&_.replace,enableViewTransition:_&&_.viewTransition,flushSync:we})}function Bt(){if(Ar(),Re({revalidation:"loading"}),R.navigation.state!=="submitting"){if(R.navigation.state==="idle"){cn(R.historyAction,R.location,{startUninterruptedRevalidation:!0});return}cn(ye||R.historyAction,R.navigation.location,{overrideNavigation:R.navigation,enableViewTransition:xe===!0})}}async function cn(v,_,T){ae&&ae.abort(),ae=null,ye=v,Le=(T&&T.startUninterruptedRevalidation)===!0,Ti(R.location,R.matches),le=(T&&T.preventScrollReset)===!0,xe=(T&&T.enableViewTransition)===!0;let O=g||p,K=T&&T.overrideNavigation,re=nr(O,_,m),me=(T&&T.flushSync)===!0,X=fr(re,O,_.pathname);if(X.active&&X.matches&&(re=X.matches),!re){let{error:je,notFoundMatches:Ne,route:Qe}=dr(_.pathname);qe(_,{matches:Ne,loaderData:{},errors:{[Qe.id]:je}},{flushSync:me});return}if(R.initialized&&!_e&&zg(R.location,_)&&!(T&&T.submission&&un(T.submission.formMethod))){qe(_,{matches:re},{flushSync:me});return}ae=new AbortController;let Z=so(i.history,_,ae.signal,T&&T.submission),q;if(T&&T.pendingError)q=[Tr(re).route.id,{type:Ve.error,error:T.pendingError}];else if(T&&T.submission&&un(T.submission.formMethod)){let je=await Pi(Z,_,T.submission,re,X.active,{replace:T.replace,flushSync:me});if(je.shortCircuited)return;if(je.pendingActionResult){let[Ne,Qe]=je.pendingActionResult;if(Ut(Qe)&&Xl(Qe.error)&&Qe.error.status===404){ae=null,qe(_,{matches:je.matches,loaderData:{},errors:{[Ne]:Qe.error}});return}}re=je.matches||re,q=je.pendingActionResult,K=js(_,T.submission),me=!1,X.active=!1,Z=so(i.history,Z.url,Z.signal)}let{shortCircuited:ie,matches:we,loaderData:Te,errors:lt}=await xo(Z,_,re,X.active,K,T&&T.submission,T&&T.fetcherSubmission,T&&T.replace,T&&T.initialHydration===!0,me,q);ie||(ae=null,qe(_,Ze({matches:we||re},Ef(q),{loaderData:Te,errors:lt})))}async function Pi(v,_,T,O,K,re){re===void 0&&(re={}),Ar();let me=Og(_,T);if(Re({navigation:me},{flushSync:re.flushSync===!0}),K){let q=await pr(O,_.pathname,v.signal);if(q.type==="aborted")return{shortCircuited:!0};if(q.type==="error"){let ie=Tr(q.partialMatches).route.id;return{matches:q.partialMatches,pendingActionResult:[ie,{type:Ve.error,error:q.error}]}}else if(q.matches)O=q.matches;else{let{notFoundMatches:ie,error:we,route:Te}=dr(_.pathname);return{matches:ie,pendingActionResult:[Te.id,{type:Ve.error,error:we}]}}}let X,Z=mi(O,_);if(!Z.route.action&&!Z.route.lazy)X={type:Ve.error,error:Mt(405,{method:v.method,pathname:_.pathname,routeId:Z.route.id})};else if(X=(await Nn("action",R,v,[Z],O,null))[Z.route.id],v.signal.aborted)return{shortCircuited:!0};if(zr(X)){let q;return re&&re.replace!=null?q=re.replace:q=xf(X.response.headers.get("Location"),new URL(v.url),m)===R.location.pathname+R.location.search,await dn(v,X,!0,{submission:T,replace:q}),{shortCircuited:!0}}if(or(X))throw Mt(400,{type:"defer-action"});if(Ut(X)){let q=Tr(O,Z.route.id);return(re&&re.replace)!==!0&&(ye=st.Push),{matches:O,pendingActionResult:[q.route.id,X]}}return{matches:O,pendingActionResult:[Z.route.id,X]}}async function xo(v,_,T,O,K,re,me,X,Z,q,ie){let we=K||js(_,re),Te=re||me||bf(we),lt=!Le&&(!w.v7_partialHydration||!Z);if(O){if(lt){let Ge=wo(ie);Re(Ze({navigation:we},Ge!==void 0?{actionData:Ge}:{}),{flushSync:q})}let $e=await pr(T,_.pathname,v.signal);if($e.type==="aborted")return{shortCircuited:!0};if($e.type==="error"){let Ge=Tr($e.partialMatches).route.id;return{matches:$e.partialMatches,loaderData:{},errors:{[Ge]:$e.error}}}else if($e.matches)T=$e.matches;else{let{error:Ge,notFoundMatches:en,route:wt}=dr(_.pathname);return{matches:en,loaderData:{},errors:{[wt.id]:Ge}}}}let je=g||p,[Ne,Qe]=gf(i.history,R,T,Te,_,w.v7_partialHydration&&Z===!0,w.v7_skipActionErrorRevalidation,_e,De,Fe,fe,D,k,je,m,ie);if(mn($e=>!(T&&T.some(Ge=>Ge.route.id===$e))||Ne&&Ne.some(Ge=>Ge.route.id===$e)),te=++W,Ne.length===0&&Qe.length===0){let $e=bo();return qe(_,Ze({matches:T,loaderData:{},errors:ie&&Ut(ie[1])?{[ie[0]]:ie[1].error}:null},Ef(ie),$e?{fetchers:new Map(R.fetchers)}:{}),{flushSync:q}),{shortCircuited:!0}}if(lt){let $e={};if(!O){$e.navigation=we;let Ge=wo(ie);Ge!==void 0&&($e.actionData=Ge)}Qe.length>0&&($e.fetchers=So(Qe)),Re($e,{flushSync:q})}Qe.forEach($e=>{pn($e.key),$e.controller&&he.set($e.key,$e.controller)});let xn=()=>Qe.forEach($e=>pn($e.key));ae&&ae.signal.addEventListener("abort",xn);let{loaderResults:Mn,fetcherResults:Jt}=await Eo(R,T,Ne,Qe,v);if(v.signal.aborted)return{shortCircuited:!0};ae&&ae.signal.removeEventListener("abort",xn),Qe.forEach($e=>he.delete($e.key));let Wt=Ol(Mn);if(Wt)return await dn(v,Wt.result,!0,{replace:X}),{shortCircuited:!0};if(Wt=Ol(Jt),Wt)return k.add(Wt.key),await dn(v,Wt.result,!0,{replace:X}),{shortCircuited:!0};let{loaderData:Ke,errors:mr}=Sf(R,T,Mn,ie,Qe,Jt,Se);Se.forEach(($e,Ge)=>{$e.subscribe(en=>{(en||$e.done)&&Se.delete(Ge)})}),w.v7_partialHydration&&Z&&R.errors&&(mr=Ze({},R.errors,mr));let Zt=bo(),hr=Ri(te),wn=Zt||hr||Qe.length>0;return Ze({matches:T,loaderData:Ke,errors:mr},wn?{fetchers:new Map(R.fetchers)}:{})}function wo(v){if(v&&!Ut(v[1]))return{[v[0]]:v[1].data};if(R.actionData)return Object.keys(R.actionData).length===0?null:R.actionData}function So(v){return v.forEach(_=>{let T=R.fetchers.get(_.key),O=ci(void 0,T?T.data:void 0);R.fetchers.set(_.key,O)}),new Map(R.fetchers)}function ur(v,_,T,O){if(s)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");pn(v);let K=(O&&O.flushSync)===!0,re=g||p,me=tu(R.location,R.matches,m,w.v7_prependBasename,T,w.v7_relativeSplatPath,_,O==null?void 0:O.relative),X=nr(re,me,m),Z=fr(X,re,me);if(Z.active&&Z.matches&&(X=Z.matches),!X){Rt(v,_,Mt(404,{pathname:me}),{flushSync:K});return}let{path:q,submission:ie,error:we}=mf(w.v7_normalizeFormMethod,!0,me,O);if(we){Rt(v,_,we,{flushSync:K});return}let Te=mi(X,q),lt=(O&&O.preventScrollReset)===!0;if(ie&&un(ie.formMethod)){Ln(v,_,q,Te,X,Z.active,K,lt,ie);return}D.set(v,{routeId:_,path:q}),ko(v,_,q,Te,X,Z.active,K,lt,ie)}async function Ln(v,_,T,O,K,re,me,X,Z){Ar(),D.delete(v);function q(nt){if(!nt.route.action&&!nt.route.lazy){let ft=Mt(405,{method:Z.formMethod,pathname:T,routeId:_});return Rt(v,_,ft,{flushSync:me}),!0}return!1}if(!re&&q(O))return;let ie=R.fetchers.get(v);Ht(v,Ag(Z,ie),{flushSync:me});let we=new AbortController,Te=so(i.history,T,we.signal,Z);if(re){let nt=await pr(K,T,Te.signal);if(nt.type==="aborted")return;if(nt.type==="error"){Rt(v,_,nt.error,{flushSync:me});return}else if(nt.matches){if(K=nt.matches,O=mi(K,T),q(O))return}else{Rt(v,_,Mt(404,{pathname:T}),{flushSync:me});return}}he.set(v,we);let lt=W,Ne=(await Nn("action",R,Te,[O],K,v))[O.route.id];if(Te.signal.aborted){he.get(v)===we&&he.delete(v);return}if(w.v7_fetcherPersist&&fe.has(v)){if(zr(Ne)||Ut(Ne)){Ht(v,tr(void 0));return}}else{if(zr(Ne))if(he.delete(v),te>lt){Ht(v,tr(void 0));return}else return k.add(v),Ht(v,ci(Z)),dn(Te,Ne,!1,{fetcherSubmission:Z,preventScrollReset:X});if(Ut(Ne)){Rt(v,_,Ne.error);return}}if(or(Ne))throw Mt(400,{type:"defer-action"});let Qe=R.navigation.location||R.location,xn=so(i.history,Qe,we.signal),Mn=g||p,Jt=R.navigation.state!=="idle"?nr(Mn,R.navigation.location,m):R.matches;ze(Jt,"Didn't find any matches after fetcher action");let Wt=++W;Q.set(v,Wt);let Ke=ci(Z,Ne.data);R.fetchers.set(v,Ke);let[mr,Zt]=gf(i.history,R,Jt,Z,Qe,!1,w.v7_skipActionErrorRevalidation,_e,De,Fe,fe,D,k,Mn,m,[O.route.id,Ne]);Zt.filter(nt=>nt.key!==v).forEach(nt=>{let ft=nt.key,Li=R.fetchers.get(ft),ta=ci(void 0,Li?Li.data:void 0);R.fetchers.set(ft,ta),pn(ft),nt.controller&&he.set(ft,nt.controller)}),Re({fetchers:new Map(R.fetchers)});let hr=()=>Zt.forEach(nt=>pn(nt.key));we.signal.addEventListener("abort",hr);let{loaderResults:wn,fetcherResults:$e}=await Eo(R,Jt,mr,Zt,xn);if(we.signal.aborted)return;we.signal.removeEventListener("abort",hr),Q.delete(v),he.delete(v),Zt.forEach(nt=>he.delete(nt.key));let Ge=Ol(wn);if(Ge)return dn(xn,Ge.result,!1,{preventScrollReset:X});if(Ge=Ol($e),Ge)return k.add(Ge.key),dn(xn,Ge.result,!1,{preventScrollReset:X});let{loaderData:en,errors:wt}=Sf(R,Jt,wn,void 0,Zt,$e,Se);if(R.fetchers.has(v)){let nt=tr(Ne.data);R.fetchers.set(v,nt)}Ri(Wt),R.navigation.state==="loading"&&Wt>te?(ze(ye,"Expected pending action"),ae&&ae.abort(),qe(R.navigation.location,{matches:Jt,loaderData:en,errors:wt,fetchers:new Map(R.fetchers)})):(Re({errors:wt,loaderData:kf(R.loaderData,en,Jt,wt),fetchers:new Map(R.fetchers)}),_e=!1)}async function ko(v,_,T,O,K,re,me,X,Z){let q=R.fetchers.get(v);Ht(v,ci(Z,q?q.data:void 0),{flushSync:me});let ie=new AbortController,we=so(i.history,T,ie.signal);if(re){let Ne=await pr(K,T,we.signal);if(Ne.type==="aborted")return;if(Ne.type==="error"){Rt(v,_,Ne.error,{flushSync:me});return}else if(Ne.matches)K=Ne.matches,O=mi(K,T);else{Rt(v,_,Mt(404,{pathname:T}),{flushSync:me});return}}he.set(v,ie);let Te=W,je=(await Nn("loader",R,we,[O],K,v))[O.route.id];if(or(je)&&(je=await hu(je,we.signal,!0)||je),he.get(v)===ie&&he.delete(v),!we.signal.aborted){if(fe.has(v)){Ht(v,tr(void 0));return}if(zr(je))if(te>Te){Ht(v,tr(void 0));return}else{k.add(v),await dn(we,je,!1,{preventScrollReset:X});return}if(Ut(je)){Rt(v,_,je.error);return}ze(!or(je),"Unhandled fetcher deferred data"),Ht(v,tr(je.data))}}async function dn(v,_,T,O){let{submission:K,fetcherSubmission:re,preventScrollReset:me,replace:X}=O===void 0?{}:O;_.response.headers.has("X-Remix-Revalidate")&&(_e=!0);let Z=_.response.headers.get("Location");ze(Z,"Expected a Location header on the redirect Response"),Z=xf(Z,new URL(v.url),m);let q=xi(R.location,Z,{_isRedirect:!0});if(l){let Ne=!1;if(_.response.headers.has("X-Remix-Reload-Document"))Ne=!0;else if(mu.test(Z)){const Qe=i.history.createURL(Z);Ne=Qe.origin!==r.location.origin||Dr(Qe.pathname,m)==null}if(Ne){X?r.location.replace(Z):r.location.assign(Z);return}}ae=null;let ie=X===!0||_.response.headers.has("X-Remix-Replace")?st.Replace:st.Push,{formMethod:we,formAction:Te,formEncType:lt}=R.navigation;!K&&!re&&we&&Te&&lt&&(K=bf(R.navigation));let je=K||re;if(vg.has(_.response.status)&&je&&un(je.formMethod))await cn(ie,q,{submission:Ze({},je,{formAction:Z}),preventScrollReset:me||le,enableViewTransition:T?xe:void 0});else{let Ne=js(q,K);await cn(ie,q,{overrideNavigation:Ne,fetcherSubmission:re,preventScrollReset:me||le,enableViewTransition:T?xe:void 0})}}async function Nn(v,_,T,O,K,re){let me,X={};try{me=await Cg(E,v,_,T,O,K,re,f,c)}catch(Z){return O.forEach(q=>{X[q.route.id]={type:Ve.error,error:Z}}),X}for(let[Z,q]of Object.entries(me))if(Lg(q)){let ie=q.result;X[Z]={type:Ve.redirect,response:Rg(ie,T,Z,K,m,w.v7_relativeSplatPath)}}else X[Z]=await Pg(q);return X}async function Eo(v,_,T,O,K){let re=v.matches,me=Nn("loader",v,K,T,_,null),X=Promise.all(O.map(async ie=>{if(ie.matches&&ie.match&&ie.controller){let Te=(await Nn("loader",v,so(i.history,ie.path,ie.controller.signal),[ie.match],ie.matches,ie.key))[ie.match.route.id];return{[ie.key]:Te}}else return Promise.resolve({[ie.key]:{type:Ve.error,error:Mt(404,{pathname:ie.path})}})})),Z=await me,q=(await X).reduce((ie,we)=>Object.assign(ie,we),{});return await Promise.all([Dg(_,Z,K.signal,re,v.loaderData),Mg(_,q,O)]),{loaderResults:Z,fetcherResults:q}}function Ar(){_e=!0,De.push(...mn()),D.forEach((v,_)=>{he.has(_)&&Fe.add(_),pn(_)})}function Ht(v,_,T){T===void 0&&(T={}),R.fetchers.set(v,_),Re({fetchers:new Map(R.fetchers)},{flushSync:(T&&T.flushSync)===!0})}function Rt(v,_,T,O){O===void 0&&(O={});let K=Tr(R.matches,_);fn(v),Re({errors:{[K.route.id]:T},fetchers:new Map(R.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function _o(v){return w.v7_fetcherPersist&&(pe.set(v,(pe.get(v)||0)+1),fe.has(v)&&fe.delete(v)),R.fetchers.get(v)||yg}function fn(v){let _=R.fetchers.get(v);he.has(v)&&!(_&&_.state==="loading"&&Q.has(v))&&pn(v),D.delete(v),Q.delete(v),k.delete(v),fe.delete(v),Fe.delete(v),R.fetchers.delete(v)}function cr(v){if(w.v7_fetcherPersist){let _=(pe.get(v)||0)-1;_<=0?(pe.delete(v),fe.add(v)):pe.set(v,_)}else fn(v);Re({fetchers:new Map(R.fetchers)})}function pn(v){let _=he.get(v);_&&(_.abort(),he.delete(v))}function Co(v){for(let _ of v){let T=_o(_),O=tr(T.data);R.fetchers.set(_,O)}}function bo(){let v=[],_=!1;for(let T of k){let O=R.fetchers.get(T);ze(O,"Expected fetcher: "+T),O.state==="loading"&&(k.delete(T),v.push(T),_=!0)}return Co(v),_}function Ri(v){let _=[];for(let[T,O]of Q)if(O<v){let K=R.fetchers.get(T);ze(K,"Expected fetcher: "+T),K.state==="loading"&&(pn(T),Q.delete(T),_.push(T))}return Co(_),_.length>0}function Po(v,_){let T=R.blockers.get(v)||fo;return Ee.get(v)!==_&&Ee.set(v,_),T}function Ir(v){R.blockers.delete(v),Ee.delete(v)}function $n(v,_){let T=R.blockers.get(v)||fo;ze(T.state==="unblocked"&&_.state==="blocked"||T.state==="blocked"&&_.state==="blocked"||T.state==="blocked"&&_.state==="proceeding"||T.state==="blocked"&&_.state==="unblocked"||T.state==="proceeding"&&_.state==="unblocked","Invalid blocker state transition: "+T.state+" -> "+_.state);let O=new Map(R.blockers);O.set(v,_),Re({blockers:O})}function Fr(v){let{currentLocation:_,nextLocation:T,historyAction:O}=v;if(Ee.size===0)return;Ee.size>1&&ho(!1,"A router only supports one blocker at a time");let K=Array.from(Ee.entries()),[re,me]=K[K.length-1],X=R.blockers.get(re);if(!(X&&X.state==="proceeding")&&me({currentLocation:_,nextLocation:T,historyAction:O}))return re}function dr(v){let _=Mt(404,{pathname:v}),T=g||p,{matches:O,route:K}=_f(T);return mn(),{notFoundMatches:O,route:K,error:_}}function mn(v){let _=[];return Se.forEach((T,O)=>{(!v||v(O))&&(T.cancel(),_.push(O),Se.delete(O))}),_}function Dn(v,_,T){if(B=v,H=_,M=T||null,!ve&&R.navigation===Us){ve=!0;let O=To(R.location,R.matches);O!=null&&Re({restoreScrollPosition:O})}return()=>{B=null,H=null,M=null}}function Ro(v,_){return M&&M(v,_.map(O=>Yh(O,R.loaderData)))||v.key}function Ti(v,_){if(B&&H){let T=Ro(v,_);B[T]=H()}}function To(v,_){if(B){let T=Ro(v,_),O=B[T];if(typeof O=="number")return O}return null}function fr(v,_,T){if(S)if(v){if(Object.keys(v[0].params).length>0)return{active:!0,matches:Fl(_,T,m,!0)}}else return{active:!0,matches:Fl(_,T,m,!0)||[]};return{active:!1,matches:null}}async function pr(v,_,T){if(!S)return{type:"success",matches:v};let O=v;for(;;){let K=g==null,re=g||p,me=f;try{await S({path:_,matches:O,patch:(q,ie)=>{T.aborted||yf(q,ie,re,me,c)}})}catch(q){return{type:"error",error:q,partialMatches:O}}finally{K&&!T.aborted&&(p=[...p])}if(T.aborted)return{type:"aborted"};let X=nr(re,_,m);if(X)return{type:"success",matches:X};let Z=Fl(re,_,m,!0);if(!Z||O.length===Z.length&&O.every((q,ie)=>q.route.id===Z[ie].route.id))return{type:"success",matches:null};O=Z}}function zo(v){f={},g=jl(v,c,void 0,f)}function zi(v,_){let T=g==null;yf(v,_,g||p,f,c),T&&(p=[...p],Re({}))}return ue={get basename(){return m},get future(){return w},get state(){return R},get routes(){return p},get window(){return r},initialize:L,subscribe:se,enableScrollRestoration:Dn,navigate:We,fetch:ur,revalidate:Bt,createHref:v=>i.history.createHref(v),encodeLocation:v=>i.history.encodeLocation(v),getFetcher:_o,deleteFetcher:cr,dispose:F,getBlocker:Po,deleteBlocker:Ir,patchRoutes:zi,_internalFetchControllers:he,_internalActiveDeferreds:Se,_internalSetRoutes:zo},ue}function Sg(i){return i!=null&&("formData"in i&&i.formData!=null||"body"in i&&i.body!==void 0)}function tu(i,r,l,s,c,f,p,g){let m,E;if(p){m=[];for(let w of r)if(m.push(w),w.route.id===p){E=w;break}}else m=r,E=r[r.length-1];let S=pu(c||".",fu(m,f),Dr(i.pathname,l)||i.pathname,g==="path");if(c==null&&(S.search=i.search,S.hash=i.hash),(c==null||c===""||c===".")&&E){let w=gu(S.search);if(E.route.index&&!w)S.search=S.search?S.search.replace(/^\?/,"?index&"):"?index";else if(!E.route.index&&w){let z=new URLSearchParams(S.search),N=z.getAll("index");z.delete("index"),N.filter(M=>M).forEach(M=>z.append("index",M));let B=z.toString();S.search=B?"?"+B:""}}return s&&l!=="/"&&(S.pathname=S.pathname==="/"?l:zn([l,S.pathname])),Ei(S)}function mf(i,r,l,s){if(!s||!Sg(s))return{path:l};if(s.formMethod&&!$g(s.formMethod))return{path:l,error:Mt(405,{method:s.formMethod})};let c=()=>({path:l,error:Mt(400,{type:"invalid-body"})}),f=s.formMethod||"get",p=i?f.toUpperCase():f.toLowerCase(),g=hp(l);if(s.body!==void 0){if(s.formEncType==="text/plain"){if(!un(p))return c();let z=typeof s.body=="string"?s.body:s.body instanceof FormData||s.body instanceof URLSearchParams?Array.from(s.body.entries()).reduce((N,B)=>{let[M,H]=B;return""+N+M+"="+H+`
`},""):String(s.body);return{path:l,submission:{formMethod:p,formAction:g,formEncType:s.formEncType,formData:void 0,json:void 0,text:z}}}else if(s.formEncType==="application/json"){if(!un(p))return c();try{let z=typeof s.body=="string"?JSON.parse(s.body):s.body;return{path:l,submission:{formMethod:p,formAction:g,formEncType:s.formEncType,formData:void 0,json:z,text:void 0}}}catch{return c()}}}ze(typeof FormData=="function","FormData is not available in this environment");let m,E;if(s.formData)m=ru(s.formData),E=s.formData;else if(s.body instanceof FormData)m=ru(s.body),E=s.body;else if(s.body instanceof URLSearchParams)m=s.body,E=wf(m);else if(s.body==null)m=new URLSearchParams,E=new FormData;else try{m=new URLSearchParams(s.body),E=wf(m)}catch{return c()}let S={formMethod:p,formAction:g,formEncType:s&&s.formEncType||"application/x-www-form-urlencoded",formData:E,json:void 0,text:void 0};if(un(S.formMethod))return{path:l,submission:S};let w=lr(l);return r&&w.search&&gu(w.search)&&m.append("index",""),w.search="?"+m,{path:Ei(w),submission:S}}function hf(i,r,l){l===void 0&&(l=!1);let s=i.findIndex(c=>c.route.id===r);return s>=0?i.slice(0,l?s+1:s):i}function gf(i,r,l,s,c,f,p,g,m,E,S,w,z,N,B,M){let H=M?Ut(M[1])?M[1].error:M[1].data:void 0,ve=i.createURL(r.location),Y=i.createURL(c),ke=l;f&&r.errors?ke=hf(l,Object.keys(r.errors)[0],!0):M&&Ut(M[1])&&(ke=hf(l,M[0]));let V=M?M[1].statusCode:void 0,ue=p&&V&&V>=400,R=ke.filter((le,ae)=>{let{route:xe}=le;if(xe.lazy)return!0;if(xe.loader==null)return!1;if(f)return nu(xe,r.loaderData,r.errors);if(kg(r.loaderData,r.matches[ae],le)||m.some(Le=>Le===le.route.id))return!0;let Ae=r.matches[ae],be=le;return vf(le,Ze({currentUrl:ve,currentParams:Ae.params,nextUrl:Y,nextParams:be.params},s,{actionResult:H,actionStatus:V,defaultShouldRevalidate:ue?!1:g||ve.pathname+ve.search===Y.pathname+Y.search||ve.search!==Y.search||pp(Ae,be)}))}),ye=[];return w.forEach((le,ae)=>{if(f||!l.some(_e=>_e.route.id===le.routeId)||S.has(ae))return;let xe=nr(N,le.path,B);if(!xe){ye.push({key:ae,routeId:le.routeId,path:le.path,matches:null,match:null,controller:null});return}let Ae=r.fetchers.get(ae),be=mi(xe,le.path),Le=!1;z.has(ae)?Le=!1:E.has(ae)?(E.delete(ae),Le=!0):Ae&&Ae.state!=="idle"&&Ae.data===void 0?Le=g:Le=vf(be,Ze({currentUrl:ve,currentParams:r.matches[r.matches.length-1].params,nextUrl:Y,nextParams:l[l.length-1].params},s,{actionResult:H,actionStatus:V,defaultShouldRevalidate:ue?!1:g})),Le&&ye.push({key:ae,routeId:le.routeId,path:le.path,matches:xe,match:be,controller:new AbortController})}),[R,ye]}function nu(i,r,l){if(i.lazy)return!0;if(!i.loader)return!1;let s=r!=null&&r[i.id]!==void 0,c=l!=null&&l[i.id]!==void 0;return!s&&c?!1:typeof i.loader=="function"&&i.loader.hydrate===!0?!0:!s&&!c}function kg(i,r,l){let s=!r||l.route.id!==r.route.id,c=i[l.route.id]===void 0;return s||c}function pp(i,r){let l=i.route.path;return i.pathname!==r.pathname||l!=null&&l.endsWith("*")&&i.params["*"]!==r.params["*"]}function vf(i,r){if(i.route.shouldRevalidate){let l=i.route.shouldRevalidate(r);if(typeof l=="boolean")return l}return r.defaultShouldRevalidate}function yf(i,r,l,s,c){var f;let p;if(i){let E=s[i];ze(E,"No route found to patch children into: routeId = "+i),E.children||(E.children=[]),p=E.children}else p=l;let g=r.filter(E=>!p.some(S=>mp(E,S))),m=jl(g,c,[i||"_","patch",String(((f=p)==null?void 0:f.length)||"0")],s);p.push(...m)}function mp(i,r){return"id"in i&&"id"in r&&i.id===r.id?!0:i.index===r.index&&i.path===r.path&&i.caseSensitive===r.caseSensitive?(!i.children||i.children.length===0)&&(!r.children||r.children.length===0)?!0:i.children.every((l,s)=>{var c;return(c=r.children)==null?void 0:c.some(f=>mp(l,f))}):!1}async function Eg(i,r,l){if(!i.lazy)return;let s=await i.lazy();if(!i.lazy)return;let c=l[i.id];ze(c,"No route found in manifest");let f={};for(let p in s){let m=c[p]!==void 0&&p!=="hasErrorBoundary";ho(!m,'Route "'+c.id+'" has a static property "'+p+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+p+'" will be ignored.')),!m&&!Kh.has(p)&&(f[p]=s[p])}Object.assign(c,f),Object.assign(c,Ze({},r(c),{lazy:void 0}))}async function _g(i){let{matches:r}=i,l=r.filter(c=>c.shouldLoad);return(await Promise.all(l.map(c=>c.resolve()))).reduce((c,f,p)=>Object.assign(c,{[l[p].route.id]:f}),{})}async function Cg(i,r,l,s,c,f,p,g,m,E){let S=f.map(N=>N.route.lazy?Eg(N.route,m,g):void 0),w=f.map((N,B)=>{let M=S[B],H=c.some(Y=>Y.route.id===N.route.id);return Ze({},N,{shouldLoad:H,resolve:async Y=>(Y&&s.method==="GET"&&(N.route.lazy||N.route.loader)&&(H=!0),H?bg(r,s,N,M,Y,E):Promise.resolve({type:Ve.data,result:void 0}))})}),z=await i({matches:w,request:s,params:f[0].params,fetcherKey:p,context:E});try{await Promise.all(S)}catch{}return z}async function bg(i,r,l,s,c,f){let p,g,m=E=>{let S,w=new Promise((B,M)=>S=M);g=()=>S(),r.signal.addEventListener("abort",g);let z=B=>typeof E!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+i+'" [routeId: '+l.route.id+"]"))):E({request:r,params:l.params,context:f},...B!==void 0?[B]:[]),N=(async()=>{try{return{type:"data",result:await(c?c(M=>z(M)):z())}}catch(B){return{type:"error",result:B}}})();return Promise.race([N,w])};try{let E=l.route[i];if(s)if(E){let S,[w]=await Promise.all([m(E).catch(z=>{S=z}),s]);if(S!==void 0)throw S;p=w}else if(await s,E=l.route[i],E)p=await m(E);else if(i==="action"){let S=new URL(r.url),w=S.pathname+S.search;throw Mt(405,{method:r.method,pathname:w,routeId:l.route.id})}else return{type:Ve.data,result:void 0};else if(E)p=await m(E);else{let S=new URL(r.url),w=S.pathname+S.search;throw Mt(404,{pathname:w})}ze(p.result!==void 0,"You defined "+(i==="action"?"an action":"a loader")+" for route "+('"'+l.route.id+"\" but didn't return anything from your `"+i+"` ")+"function. Please return a value or `null`.")}catch(E){return{type:Ve.error,result:E}}finally{g&&r.signal.removeEventListener("abort",g)}return p}async function Pg(i){let{result:r,type:l}=i;if(gp(r)){let E;try{let S=r.headers.get("Content-Type");S&&/\bapplication\/json\b/.test(S)?r.body==null?E=null:E=await r.json():E=await r.text()}catch(S){return{type:Ve.error,error:S}}return l===Ve.error?{type:Ve.error,error:new Vl(r.status,r.statusText,E),statusCode:r.status,headers:r.headers}:{type:Ve.data,data:E,statusCode:r.status,headers:r.headers}}if(l===Ve.error){if(Cf(r)){var s;if(r.data instanceof Error){var c;return{type:Ve.error,error:r.data,statusCode:(c=r.init)==null?void 0:c.status}}r=new Vl(((s=r.init)==null?void 0:s.status)||500,void 0,r.data)}return{type:Ve.error,error:r,statusCode:Xl(r)?r.status:void 0}}if(Ng(r)){var f,p;return{type:Ve.deferred,deferredData:r,statusCode:(f=r.init)==null?void 0:f.status,headers:((p=r.init)==null?void 0:p.headers)&&new Headers(r.init.headers)}}if(Cf(r)){var g,m;return{type:Ve.data,data:r.data,statusCode:(g=r.init)==null?void 0:g.status,headers:(m=r.init)!=null&&m.headers?new Headers(r.init.headers):void 0}}return{type:Ve.data,data:r}}function Rg(i,r,l,s,c,f){let p=i.headers.get("Location");if(ze(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!mu.test(p)){let g=s.slice(0,s.findIndex(m=>m.route.id===l)+1);p=tu(new URL(r.url),g,c,!0,p,f),i.headers.set("Location",p)}return i}function xf(i,r,l){if(mu.test(i)){let s=i,c=s.startsWith("//")?new URL(r.protocol+s):new URL(s),f=Dr(c.pathname,l)!=null;if(c.origin===r.origin&&f)return c.pathname+c.search+c.hash}return i}function so(i,r,l,s){let c=i.createURL(hp(r)).toString(),f={signal:l};if(s&&un(s.formMethod)){let{formMethod:p,formEncType:g}=s;f.method=p.toUpperCase(),g==="application/json"?(f.headers=new Headers({"Content-Type":g}),f.body=JSON.stringify(s.json)):g==="text/plain"?f.body=s.text:g==="application/x-www-form-urlencoded"&&s.formData?f.body=ru(s.formData):f.body=s.formData}return new Request(c,f)}function ru(i){let r=new URLSearchParams;for(let[l,s]of i.entries())r.append(l,typeof s=="string"?s:s.name);return r}function wf(i){let r=new FormData;for(let[l,s]of i.entries())r.append(l,s);return r}function Tg(i,r,l,s,c){let f={},p=null,g,m=!1,E={},S=l&&Ut(l[1])?l[1].error:void 0;return i.forEach(w=>{if(!(w.route.id in r))return;let z=w.route.id,N=r[z];if(ze(!zr(N),"Cannot handle redirect results in processLoaderData"),Ut(N)){let B=N.error;S!==void 0&&(B=S,S=void 0),p=p||{};{let M=Tr(i,z);p[M.route.id]==null&&(p[M.route.id]=B)}f[z]=void 0,m||(m=!0,g=Xl(N.error)?N.error.status:500),N.headers&&(E[z]=N.headers)}else or(N)?(s.set(z,N.deferredData),f[z]=N.deferredData.data,N.statusCode!=null&&N.statusCode!==200&&!m&&(g=N.statusCode),N.headers&&(E[z]=N.headers)):(f[z]=N.data,N.statusCode&&N.statusCode!==200&&!m&&(g=N.statusCode),N.headers&&(E[z]=N.headers))}),S!==void 0&&l&&(p={[l[0]]:S},f[l[0]]=void 0),{loaderData:f,errors:p,statusCode:g||200,loaderHeaders:E}}function Sf(i,r,l,s,c,f,p){let{loaderData:g,errors:m}=Tg(r,l,s,p);return c.forEach(E=>{let{key:S,match:w,controller:z}=E,N=f[S];if(ze(N,"Did not find corresponding fetcher result"),!(z&&z.signal.aborted))if(Ut(N)){let B=Tr(i.matches,w==null?void 0:w.route.id);m&&m[B.route.id]||(m=Ze({},m,{[B.route.id]:N.error})),i.fetchers.delete(S)}else if(zr(N))ze(!1,"Unhandled fetcher revalidation redirect");else if(or(N))ze(!1,"Unhandled fetcher deferred data");else{let B=tr(N.data);i.fetchers.set(S,B)}}),{loaderData:g,errors:m}}function kf(i,r,l,s){let c=Ze({},r);for(let f of l){let p=f.route.id;if(r.hasOwnProperty(p)?r[p]!==void 0&&(c[p]=r[p]):i[p]!==void 0&&f.route.loader&&(c[p]=i[p]),s&&s.hasOwnProperty(p))break}return c}function Ef(i){return i?Ut(i[1])?{actionData:{}}:{actionData:{[i[0]]:i[1].data}}:{}}function Tr(i,r){return(r?i.slice(0,i.findIndex(s=>s.route.id===r)+1):[...i]).reverse().find(s=>s.route.hasErrorBoundary===!0)||i[0]}function _f(i){let r=i.length===1?i[0]:i.find(l=>l.index||!l.path||l.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r}}function Mt(i,r){let{pathname:l,routeId:s,method:c,type:f,message:p}=r===void 0?{}:r,g="Unknown Server Error",m="Unknown @remix-run/router error";return i===400?(g="Bad Request",c&&l&&s?m="You made a "+c+' request to "'+l+'" but '+('did not provide a `loader` for route "'+s+'", ')+"so there is no way to handle the request.":f==="defer-action"?m="defer() is not supported in actions":f==="invalid-body"&&(m="Unable to encode submission body")):i===403?(g="Forbidden",m='Route "'+s+'" does not match URL "'+l+'"'):i===404?(g="Not Found",m='No route matches URL "'+l+'"'):i===405&&(g="Method Not Allowed",c&&l&&s?m="You made a "+c.toUpperCase()+' request to "'+l+'" but '+('did not provide an `action` for route "'+s+'", ')+"so there is no way to handle the request.":c&&(m='Invalid request method "'+c.toUpperCase()+'"')),new Vl(i||500,g,new Error(m),!0)}function Ol(i){let r=Object.entries(i);for(let l=r.length-1;l>=0;l--){let[s,c]=r[l];if(zr(c))return{key:s,result:c}}}function hp(i){let r=typeof i=="string"?lr(i):i;return Ei(Ze({},r,{hash:""}))}function zg(i,r){return i.pathname!==r.pathname||i.search!==r.search?!1:i.hash===""?r.hash!=="":i.hash===r.hash?!0:r.hash!==""}function Lg(i){return gp(i.result)&&gg.has(i.result.status)}function or(i){return i.type===Ve.deferred}function Ut(i){return i.type===Ve.error}function zr(i){return(i&&i.type)===Ve.redirect}function Cf(i){return typeof i=="object"&&i!=null&&"type"in i&&"data"in i&&"init"in i&&i.type==="DataWithResponseInit"}function Ng(i){let r=i;return r&&typeof r=="object"&&typeof r.data=="object"&&typeof r.subscribe=="function"&&typeof r.cancel=="function"&&typeof r.resolveData=="function"}function gp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.headers=="object"&&typeof i.body<"u"}function $g(i){return hg.has(i.toLowerCase())}function un(i){return pg.has(i.toLowerCase())}async function Dg(i,r,l,s,c){let f=Object.entries(r);for(let p=0;p<f.length;p++){let[g,m]=f[p],E=i.find(z=>(z==null?void 0:z.route.id)===g);if(!E)continue;let S=s.find(z=>z.route.id===E.route.id),w=S!=null&&!pp(S,E)&&(c&&c[E.route.id])!==void 0;or(m)&&w&&await hu(m,l,!1).then(z=>{z&&(r[g]=z)})}}async function Mg(i,r,l){for(let s=0;s<l.length;s++){let{key:c,routeId:f,controller:p}=l[s],g=r[c];i.find(E=>(E==null?void 0:E.route.id)===f)&&or(g)&&(ze(p,"Expected an AbortController for revalidating fetcher deferred result"),await hu(g,p.signal,!0).then(E=>{E&&(r[c]=E)}))}}async function hu(i,r,l){if(l===void 0&&(l=!1),!await i.deferredData.resolveData(r)){if(l)try{return{type:Ve.data,data:i.deferredData.unwrappedData}}catch(c){return{type:Ve.error,error:c}}return{type:Ve.data,data:i.deferredData.data}}}function gu(i){return new URLSearchParams(i).getAll("index").some(r=>r==="")}function mi(i,r){let l=typeof r=="string"?lr(r).search:r.search;if(i[i.length-1].route.index&&gu(l||""))return i[i.length-1];let s=cp(i);return s[s.length-1]}function bf(i){let{formMethod:r,formAction:l,formEncType:s,text:c,formData:f,json:p}=i;if(!(!r||!l||!s)){if(c!=null)return{formMethod:r,formAction:l,formEncType:s,formData:void 0,json:void 0,text:c};if(f!=null)return{formMethod:r,formAction:l,formEncType:s,formData:f,json:void 0,text:void 0};if(p!==void 0)return{formMethod:r,formAction:l,formEncType:s,formData:void 0,json:p,text:void 0}}}function js(i,r){return r?{state:"loading",location:i,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:i,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Og(i,r){return{state:"submitting",location:i,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function ci(i,r){return i?{state:"loading",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:r}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r}}function Ag(i,r){return{state:"submitting",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:r?r.data:void 0}}function tr(i){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:i}}function Ig(i,r){try{let l=i.sessionStorage.getItem(fp);if(l){let s=JSON.parse(l);for(let[c,f]of Object.entries(s||{}))f&&Array.isArray(f)&&r.set(c,new Set(f||[]))}}catch{}}function Fg(i,r){if(r.size>0){let l={};for(let[s,c]of r)l[s]=[...c];try{i.sessionStorage.setItem(fp,JSON.stringify(l))}catch(s){ho(!1,"Failed to save applied view transitions in sessionStorage ("+s+").")}}}/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(i){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(i[s]=l[s])}return i},go.apply(this,arguments)}const ql=$.createContext(null),vp=$.createContext(null),yo=$.createContext(null),vu=$.createContext(null),ar=$.createContext({outlet:null,matches:[],isDataRoute:!1}),yp=$.createContext(null);function Ug(i,r){let{relative:l}={};_i()||ze(!1);let{basename:s,navigator:c}=$.useContext(yo),{hash:f,pathname:p,search:g}=Hg(i,{relative:l}),m=p;return s!=="/"&&(m=p==="/"?s:zn([s,p])),c.createHref({pathname:m,search:g,hash:f})}function _i(){return $.useContext(vu)!=null}function Jl(){return _i()||ze(!1),$.useContext(vu).location}function xp(i){$.useContext(yo).static||$.useLayoutEffect(i)}function wp(){let{isDataRoute:i}=$.useContext(ar);return i?tv():jg()}function jg(){_i()||ze(!1);let i=$.useContext(ql),{basename:r,future:l,navigator:s}=$.useContext(yo),{matches:c}=$.useContext(ar),{pathname:f}=Jl(),p=JSON.stringify(fu(c,l.v7_relativeSplatPath)),g=$.useRef(!1);return xp(()=>{g.current=!0}),$.useCallback(function(E,S){if(S===void 0&&(S={}),!g.current)return;if(typeof E=="number"){s.go(E);return}let w=pu(E,JSON.parse(p),f,S.relative==="path");i==null&&r!=="/"&&(w.pathname=w.pathname==="/"?r:zn([r,w.pathname])),(S.replace?s.replace:s.push)(w,S.state,S)},[r,s,p,f,i])}const Vg=$.createContext(null);function Bg(i){let r=$.useContext(ar).outlet;return r&&$.createElement(Vg.Provider,{value:i},r)}function Hg(i,r){let{relative:l}=r===void 0?{}:r,{future:s}=$.useContext(yo),{matches:c}=$.useContext(ar),{pathname:f}=Jl(),p=JSON.stringify(fu(c,s.v7_relativeSplatPath));return $.useMemo(()=>pu(i,JSON.parse(p),f,l==="path"),[i,p,f,l])}function Wg(i,r,l,s){_i()||ze(!1);let{navigator:c}=$.useContext(yo),{matches:f}=$.useContext(ar),p=f[f.length-1],g=p?p.params:{};p&&p.pathname;let m=p?p.pathnameBase:"/";p&&p.route;let E=Jl(),S;S=E;let w=S.pathname||"/",z=w;if(m!=="/"){let M=m.replace(/^\//,"").split("/");z="/"+w.replace(/^\//,"").split("/").slice(M.length).join("/")}let N=nr(i,{pathname:z});return Xg(N&&N.map(M=>Object.assign({},M,{params:Object.assign({},g,M.params),pathname:zn([m,c.encodeLocation?c.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?m:zn([m,c.encodeLocation?c.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),f,l,s)}function Qg(){let i=Jg(),r=Xl(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),l=i instanceof Error?i.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},r),l?$.createElement("pre",{style:c},l):null,null)}const Kg=$.createElement(Qg,null);class Gg extends $.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,l){return l.location!==r.location||l.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:l.error,location:l.location,revalidation:r.revalidation||l.revalidation}}componentDidCatch(r,l){console.error("React Router caught the following error during render",r,l)}render(){return this.state.error!==void 0?$.createElement(ar.Provider,{value:this.props.routeContext},$.createElement(yp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yg(i){let{routeContext:r,match:l,children:s}=i,c=$.useContext(ql);return c&&c.static&&c.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=l.route.id),$.createElement(ar.Provider,{value:r},s)}function Xg(i,r,l,s){var c;if(r===void 0&&(r=[]),l===void 0&&(l=null),s===void 0&&(s=null),i==null){var f;if(!l)return null;if(l.errors)i=l.matches;else if((f=s)!=null&&f.v7_partialHydration&&r.length===0&&!l.initialized&&l.matches.length>0)i=l.matches;else return null}let p=i,g=(c=l)==null?void 0:c.errors;if(g!=null){let S=p.findIndex(w=>w.route.id&&(g==null?void 0:g[w.route.id])!==void 0);S>=0||ze(!1),p=p.slice(0,Math.min(p.length,S+1))}let m=!1,E=-1;if(l&&s&&s.v7_partialHydration)for(let S=0;S<p.length;S++){let w=p[S];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(E=S),w.route.id){let{loaderData:z,errors:N}=l,B=w.route.loader&&z[w.route.id]===void 0&&(!N||N[w.route.id]===void 0);if(w.route.lazy||B){m=!0,E>=0?p=p.slice(0,E+1):p=[p[0]];break}}}return p.reduceRight((S,w,z)=>{let N,B=!1,M=null,H=null;l&&(N=g&&w.route.id?g[w.route.id]:void 0,M=w.route.errorElement||Kg,m&&(E<0&&z===0?(B=!0,H=null):E===z&&(B=!0,H=w.route.hydrateFallbackElement||null)));let ve=r.concat(p.slice(0,z+1)),Y=()=>{let ke;return N?ke=M:B?ke=H:w.route.Component?ke=$.createElement(w.route.Component,null):w.route.element?ke=w.route.element:ke=S,$.createElement(Yg,{match:w,routeContext:{outlet:S,matches:ve,isDataRoute:l!=null},children:ke})};return l&&(w.route.ErrorBoundary||w.route.errorElement||z===0)?$.createElement(Gg,{location:l.location,revalidation:l.revalidation,component:M,error:N,children:Y(),routeContext:{outlet:null,matches:ve,isDataRoute:!0}}):Y()},null)}var yu=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}(yu||{}),wi=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}(wi||{});function Sp(i){let r=$.useContext(ql);return r||ze(!1),r}function kp(i){let r=$.useContext(vp);return r||ze(!1),r}function qg(i){let r=$.useContext(ar);return r||ze(!1),r}function Ep(i){let r=qg(),l=r.matches[r.matches.length-1];return l.route.id||ze(!1),l.route.id}function Jg(){var i;let r=$.useContext(yp),l=kp(wi.UseRouteError),s=Ep(wi.UseRouteError);return r!==void 0?r:(i=l.errors)==null?void 0:i[s]}let Zg=0;function ev(i){let{router:r,basename:l}=Sp(yu.UseBlocker),s=kp(wi.UseBlocker),[c,f]=$.useState(""),p=$.useCallback(g=>{if(typeof i!="function")return!!i;if(l==="/")return i(g);let{currentLocation:m,nextLocation:E,historyAction:S}=g;return i({currentLocation:go({},m,{pathname:Dr(m.pathname,l)||m.pathname}),nextLocation:go({},E,{pathname:Dr(E.pathname,l)||E.pathname}),historyAction:S})},[l,i]);return $.useEffect(()=>{let g=String(++Zg);return f(g),()=>r.deleteBlocker(g)},[r]),$.useEffect(()=>{c!==""&&r.getBlocker(c,p)},[r,c,p]),c&&s.blockers.has(c)?s.blockers.get(c):fo}function tv(){let{router:i}=Sp(yu.UseNavigateStable),r=Ep(wi.UseNavigateStable),l=$.useRef(!1);return xp(()=>{l.current=!0}),$.useCallback(function(c,f){f===void 0&&(f={}),l.current&&(typeof c=="number"?i.navigate(c):i.navigate(c,go({fromRouteId:r},f)))},[i,r])}const Pf={};function nv(i,r){Pf[r]||(Pf[r]=!0,console.warn(r))}const uo=(i,r,l)=>nv(i,"⚠️ React Router Future Flag Warning: "+r+". "+("You can use the `"+i+"` future flag to opt-in early. ")+("For more information, see "+l+"."));function rv(i,r){i!=null&&i.v7_startTransition||uo("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(i!=null&&i.v7_relativeSplatPath)&&(!r||!r.v7_relativeSplatPath)&&uo("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),r&&(r.v7_fetcherPersist||uo("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),r.v7_normalizeFormMethod||uo("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),r.v7_partialHydration||uo("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),r.v7_skipActionErrorRevalidation||uo("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function i0(i){return Bg(i.context)}function ov(i){let{basename:r="/",children:l=null,location:s,navigationType:c=st.Pop,navigator:f,static:p=!1,future:g}=i;_i()&&ze(!1);let m=r.replace(/^\/*/,"/"),E=$.useMemo(()=>({basename:m,navigator:f,static:p,future:go({v7_relativeSplatPath:!1},g)}),[m,g,f,p]);typeof s=="string"&&(s=lr(s));let{pathname:S="/",search:w="",hash:z="",state:N=null,key:B="default"}=s,M=$.useMemo(()=>{let H=Dr(S,m);return H==null?null:{location:{pathname:H,search:w,hash:z,state:N,key:B},navigationType:c}},[m,S,w,z,N,B,c]);return M==null?null:$.createElement(yo.Provider,{value:E},$.createElement(vu.Provider,{children:l,value:M}))}new Promise(()=>{});function iv(i){let r={hasErrorBoundary:i.ErrorBoundary!=null||i.errorElement!=null};return i.Component&&Object.assign(r,{element:$.createElement(i.Component),Component:void 0}),i.HydrateFallback&&Object.assign(r,{hydrateFallbackElement:$.createElement(i.HydrateFallback),HydrateFallback:void 0}),i.ErrorBoundary&&Object.assign(r,{errorElement:$.createElement(i.ErrorBoundary),ErrorBoundary:void 0}),r}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(i){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(i[s]=l[s])}return i},Bl.apply(this,arguments)}const lv="6";try{window.__reactRouterVersion=lv}catch{}function av(i,r){return wg({basename:r==null?void 0:r.basename,future:Bl({},r==null?void 0:r.future,{v7_prependBasename:!0}),history:Hh({window:r==null?void 0:r.window}),hydrationData:(r==null?void 0:r.hydrationData)||sv(),routes:i,mapRouteProperties:iv,dataStrategy:r==null?void 0:r.dataStrategy,patchRoutesOnNavigation:r==null?void 0:r.patchRoutesOnNavigation,window:r==null?void 0:r.window}).initialize()}function sv(){var i;let r=(i=window)==null?void 0:i.__staticRouterHydrationData;return r&&r.errors&&(r=Bl({},r,{errors:uv(r.errors)})),r}function uv(i){if(!i)return null;let r=Object.entries(i),l={};for(let[s,c]of r)if(c&&c.__type==="RouteErrorResponse")l[s]=new Vl(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let f=window[c.__subType];if(typeof f=="function")try{let p=new f(c.message);p.stack="",l[s]=p}catch{}}if(l[s]==null){let f=new Error(c.message);f.stack="",l[s]=f}}else l[s]=c;return l}const cv=$.createContext({isTransitioning:!1}),dv=$.createContext(new Map),fv="startTransition",Rf=Oh[fv],pv="flushSync",Tf=Bh[pv];function mv(i){Rf?Rf(i):i()}function di(i){Tf?Tf(i):i()}class hv{constructor(){this.status="pending",this.promise=new Promise((r,l)=>{this.resolve=s=>{this.status==="pending"&&(this.status="resolved",r(s))},this.reject=s=>{this.status==="pending"&&(this.status="rejected",l(s))}})}}function gv(i){let{fallbackElement:r,router:l,future:s}=i,[c,f]=$.useState(l.state),[p,g]=$.useState(),[m,E]=$.useState({isTransitioning:!1}),[S,w]=$.useState(),[z,N]=$.useState(),[B,M]=$.useState(),H=$.useRef(new Map),{v7_startTransition:ve}=s||{},Y=$.useCallback(le=>{ve?mv(le):le()},[ve]),ke=$.useCallback((le,ae)=>{let{deletedFetchers:xe,flushSync:Ae,viewTransitionOpts:be}=ae;xe.forEach(_e=>H.current.delete(_e)),le.fetchers.forEach((_e,De)=>{_e.data!==void 0&&H.current.set(De,_e.data)});let Le=l.window==null||l.window.document==null||typeof l.window.document.startViewTransition!="function";if(!be||Le){Ae?di(()=>f(le)):Y(()=>f(le));return}if(Ae){di(()=>{z&&(S&&S.resolve(),z.skipTransition()),E({isTransitioning:!0,flushSync:!0,currentLocation:be.currentLocation,nextLocation:be.nextLocation})});let _e=l.window.document.startViewTransition(()=>{di(()=>f(le))});_e.finished.finally(()=>{di(()=>{w(void 0),N(void 0),g(void 0),E({isTransitioning:!1})})}),di(()=>N(_e));return}z?(S&&S.resolve(),z.skipTransition(),M({state:le,currentLocation:be.currentLocation,nextLocation:be.nextLocation})):(g(le),E({isTransitioning:!0,flushSync:!1,currentLocation:be.currentLocation,nextLocation:be.nextLocation}))},[l.window,z,S,H,Y]);$.useLayoutEffect(()=>l.subscribe(ke),[l,ke]),$.useEffect(()=>{m.isTransitioning&&!m.flushSync&&w(new hv)},[m]),$.useEffect(()=>{if(S&&p&&l.window){let le=p,ae=S.promise,xe=l.window.document.startViewTransition(async()=>{Y(()=>f(le)),await ae});xe.finished.finally(()=>{w(void 0),N(void 0),g(void 0),E({isTransitioning:!1})}),N(xe)}},[Y,p,S,l.window]),$.useEffect(()=>{S&&p&&c.location.key===p.location.key&&S.resolve()},[S,z,c.location,p]),$.useEffect(()=>{!m.isTransitioning&&B&&(g(B.state),E({isTransitioning:!0,flushSync:!1,currentLocation:B.currentLocation,nextLocation:B.nextLocation}),M(void 0))},[m.isTransitioning,B]),$.useEffect(()=>{},[]);let V=$.useMemo(()=>({createHref:l.createHref,encodeLocation:l.encodeLocation,go:le=>l.navigate(le),push:(le,ae,xe)=>l.navigate(le,{state:ae,preventScrollReset:xe==null?void 0:xe.preventScrollReset}),replace:(le,ae,xe)=>l.navigate(le,{replace:!0,state:ae,preventScrollReset:xe==null?void 0:xe.preventScrollReset})}),[l]),ue=l.basename||"/",R=$.useMemo(()=>({router:l,navigator:V,static:!1,basename:ue}),[l,V,ue]),ye=$.useMemo(()=>({v7_relativeSplatPath:l.future.v7_relativeSplatPath}),[l.future.v7_relativeSplatPath]);return $.useEffect(()=>rv(s,l.future),[s,l.future]),$.createElement($.Fragment,null,$.createElement(ql.Provider,{value:R},$.createElement(vp.Provider,{value:c},$.createElement(dv.Provider,{value:H.current},$.createElement(cv.Provider,{value:m},$.createElement(ov,{basename:ue,location:c.location,navigationType:c.historyAction,navigator:V,future:ye},c.initialized||l.future.v7_partialHydration?$.createElement(vv,{routes:l.routes,future:l.future,state:c}):r))))),null)}const vv=$.memo(yv);function yv(i){let{routes:r,future:l,state:s}=i;return Wg(r,void 0,s,l)}var zf;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(zf||(zf={}));var Lf;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Lf||(Lf={}));const xv="modulepreload",wv=function(i,r){return new URL(i,r).href},Nf={},ou=function(r,l,s){let c=Promise.resolve();if(l&&l.length>0){const p=document.getElementsByTagName("link"),g=document.querySelector("meta[property=csp-nonce]"),m=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));c=Promise.allSettled(l.map(E=>{if(E=wv(E,s),E in Nf)return;Nf[E]=!0;const S=E.endsWith(".css"),w=S?'[rel="stylesheet"]':"";if(!!s)for(let B=p.length-1;B>=0;B--){const M=p[B];if(M.href===E&&(!S||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${E}"]${w}`))return;const N=document.createElement("link");if(N.rel=S?"stylesheet":xv,S||(N.as="script"),N.crossOrigin="",N.href=E,m&&N.setAttribute("nonce",m),document.head.appendChild(N),S)return new Promise((B,M)=>{N.addEventListener("load",B),N.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${E}`)))})}))}function f(p){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=p,window.dispatchEvent(g),!g.defaultPrevented)throw p}return c.then(p=>{for(const g of p||[])g.status==="rejected"&&f(g.reason);return r().catch(f)})};var Vs,dt;(function(i){i.CONNECTED="connected",i.LOADING="loading",i.RECONNECTING="reconnecting",i.CONNECTION_LOST="connection-lost"})(dt||(dt={}));class Sv{constructor(r){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=r,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(l=>{var s;(s=l.active)===null||s===void 0||s.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(r){this.stateChangeListeners.add(r)}removeStateChangeListener(r){this.stateChangeListeners.delete(r)}loadingStarted(){this.state=dt.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(dt.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(dt.CONNECTION_LOST)}decreaseLoadingCount(r){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=r))}get state(){return this.connectionState}set state(r){if(r!==this.connectionState){const l=this.connectionState;this.connectionState=r,this.loadingCount=0;for(const s of this.stateChangeListeners)s(l,this.connectionState)}}get online(){return this.connectionState===dt.CONNECTED||this.connectionState===dt.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(r){typeof r.data=="object"&&r.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(r.data.result===!0&&(this.state=dt.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const kv=i=>!!(i==="localhost"||i==="[::1]"||/^127\.\d+\.\d+\.\d+$/u.exec(i)),Al=window;if(!(!((Vs=Al.Vaadin)===null||Vs===void 0)&&Vs.connectionState)){let i;kv(window.location.hostname)?i=!0:i=navigator.onLine,Al.Vaadin||(Al.Vaadin={}),Al.Vaadin.connectionState=new Sv(i?dt.CONNECTED:dt.CONNECTION_LOST)}function jt(i,r,l,s){var c=arguments.length,f=c<3?r:s===null?s=Object.getOwnPropertyDescriptor(r,l):s,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(i,r,l,s);else for(var g=i.length-1;g>=0;g--)(p=i[g])&&(f=(c<3?p(f):c>3?p(r,l,f):p(r,l))||f);return c>3&&f&&Object.defineProperty(r,l,f),f}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ul=globalThis,xu=Ul.ShadowRoot&&(Ul.ShadyCSS===void 0||Ul.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wu=Symbol(),$f=new WeakMap;let Su=class{constructor(r,l,s){if(this._$cssResult$=!0,s!==wu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=l}get styleSheet(){let r=this.o;const l=this.t;if(xu&&r===void 0){const s=l!==void 0&&l.length===1;s&&(r=$f.get(l)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),s&&$f.set(l,r))}return r}toString(){return this.cssText}};const _p=i=>new Su(typeof i=="string"?i:i+"",void 0,wu),ot=(i,...r)=>{const l=i.length===1?i[0]:r.reduce((s,c,f)=>s+(p=>{if(p._$cssResult$===!0)return p.cssText;if(typeof p=="number")return p;throw Error("Value passed to 'css' function must be a 'css' function result: "+p+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(c)+i[f+1],i[0]);return new Su(l,i,wu)},Cp=(i,r)=>{if(xu)i.adoptedStyleSheets=r.map(l=>l instanceof CSSStyleSheet?l:l.styleSheet);else for(const l of r){const s=document.createElement("style"),c=Ul.litNonce;c!==void 0&&s.setAttribute("nonce",c),s.textContent=l.cssText,i.appendChild(s)}},Df=xu?i=>i:i=>i instanceof CSSStyleSheet?(r=>{let l="";for(const s of r.cssRules)l+=s.cssText;return _p(l)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ev,defineProperty:_v,getOwnPropertyDescriptor:Cv,getOwnPropertyNames:bv,getOwnPropertySymbols:Pv,getPrototypeOf:Rv}=Object,ir=globalThis,Mf=ir.trustedTypes,Tv=Mf?Mf.emptyScript:"",Bs=ir.reactiveElementPolyfillSupport,hi=(i,r)=>i,Hl={toAttribute(i,r){switch(r){case Boolean:i=i?Tv:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,r){let l=i;switch(r){case Boolean:l=i!==null;break;case Number:l=i===null?null:Number(i);break;case Object:case Array:try{l=JSON.parse(i)}catch{l=null}}return l}},ku=(i,r)=>!Ev(i,r),Of={attribute:!0,type:String,converter:Hl,reflect:!1,hasChanged:ku};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ir.litPropertyMetadata??(ir.litPropertyMetadata=new WeakMap);let po=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??(this.l=[])).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,l=Of){if(l.state&&(l.attribute=!1),this._$Ei(),this.elementProperties.set(r,l),!l.noAccessor){const s=Symbol(),c=this.getPropertyDescriptor(r,s,l);c!==void 0&&_v(this.prototype,r,c)}}static getPropertyDescriptor(r,l,s){const{get:c,set:f}=Cv(this.prototype,r)??{get(){return this[l]},set(p){this[l]=p}};return{get(){return c==null?void 0:c.call(this)},set(p){const g=c==null?void 0:c.call(this);f.call(this,p),this.requestUpdate(r,g,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Of}static _$Ei(){if(this.hasOwnProperty(hi("elementProperties")))return;const r=Rv(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(hi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(hi("properties"))){const l=this.properties,s=[...bv(l),...Pv(l)];for(const c of s)this.createProperty(c,l[c])}const r=this[Symbol.metadata];if(r!==null){const l=litPropertyMetadata.get(r);if(l!==void 0)for(const[s,c]of l)this.elementProperties.set(s,c)}this._$Eh=new Map;for(const[l,s]of this.elementProperties){const c=this._$Eu(l,s);c!==void 0&&this._$Eh.set(c,l)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const l=[];if(Array.isArray(r)){const s=new Set(r.flat(1/0).reverse());for(const c of s)l.unshift(Df(c))}else r!==void 0&&l.push(Df(r));return l}static _$Eu(r,l){const s=l.attribute;return s===!1?void 0:typeof s=="string"?s:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var r;this._$ES=new Promise(l=>this.enableUpdating=l),this._$AL=new Map,this._$E_(),this.requestUpdate(),(r=this.constructor.l)==null||r.forEach(l=>l(this))}addController(r){var l;(this._$EO??(this._$EO=new Set)).add(r),this.renderRoot!==void 0&&this.isConnected&&((l=r.hostConnected)==null||l.call(r))}removeController(r){var l;(l=this._$EO)==null||l.delete(r)}_$E_(){const r=new Map,l=this.constructor.elementProperties;for(const s of l.keys())this.hasOwnProperty(s)&&(r.set(s,this[s]),delete this[s]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Cp(r,this.constructor.elementStyles),r}connectedCallback(){var r;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$EO)==null||r.forEach(l=>{var s;return(s=l.hostConnected)==null?void 0:s.call(l)})}enableUpdating(r){}disconnectedCallback(){var r;(r=this._$EO)==null||r.forEach(l=>{var s;return(s=l.hostDisconnected)==null?void 0:s.call(l)})}attributeChangedCallback(r,l,s){this._$AK(r,s)}_$EC(r,l){var f;const s=this.constructor.elementProperties.get(r),c=this.constructor._$Eu(r,s);if(c!==void 0&&s.reflect===!0){const p=(((f=s.converter)==null?void 0:f.toAttribute)!==void 0?s.converter:Hl).toAttribute(l,s.type);this._$Em=r,p==null?this.removeAttribute(c):this.setAttribute(c,p),this._$Em=null}}_$AK(r,l){var f;const s=this.constructor,c=s._$Eh.get(r);if(c!==void 0&&this._$Em!==c){const p=s.getPropertyOptions(c),g=typeof p.converter=="function"?{fromAttribute:p.converter}:((f=p.converter)==null?void 0:f.fromAttribute)!==void 0?p.converter:Hl;this._$Em=c,this[c]=g.fromAttribute(l,p.type),this._$Em=null}}requestUpdate(r,l,s){if(r!==void 0){if(s??(s=this.constructor.getPropertyOptions(r)),!(s.hasChanged??ku)(this[r],l))return;this.P(r,l,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(r,l,s){this._$AL.has(r)||this._$AL.set(r,l),s.reflect===!0&&this._$Em!==r&&(this._$Ej??(this._$Ej=new Set)).add(r)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(l){Promise.reject(l)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[f,p]of this._$Ep)this[f]=p;this._$Ep=void 0}const c=this.constructor.elementProperties;if(c.size>0)for(const[f,p]of c)p.wrapped!==!0||this._$AL.has(f)||this[f]===void 0||this.P(f,this[f],p)}let r=!1;const l=this._$AL;try{r=this.shouldUpdate(l),r?(this.willUpdate(l),(s=this._$EO)==null||s.forEach(c=>{var f;return(f=c.hostUpdate)==null?void 0:f.call(c)}),this.update(l)):this._$EU()}catch(c){throw r=!1,this._$EU(),c}r&&this._$AE(l)}willUpdate(r){}_$AE(r){var l;(l=this._$EO)==null||l.forEach(s=>{var c;return(c=s.hostUpdated)==null?void 0:c.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Ej&&(this._$Ej=this._$Ej.forEach(l=>this._$EC(l,this[l]))),this._$EU()}updated(r){}firstUpdated(r){}};po.elementStyles=[],po.shadowRootOptions={mode:"open"},po[hi("elementProperties")]=new Map,po[hi("finalized")]=new Map,Bs==null||Bs({ReactiveElement:po}),(ir.reactiveElementVersions??(ir.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=globalThis,Wl=gi.trustedTypes,Af=Wl?Wl.createPolicy("lit-html",{createHTML:i=>i}):void 0,bp="$lit$",rr=`lit$${Math.random().toFixed(9).slice(2)}$`,Pp="?"+rr,zv=`<${Pp}>`,Mr=document,Si=()=>Mr.createComment(""),ki=i=>i===null||typeof i!="object"&&typeof i!="function",Eu=Array.isArray,Lv=i=>Eu(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Hs=`[ 	
\f\r]`,fi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,If=/-->/g,Ff=/>/g,Rr=RegExp(`>|${Hs}(?:([^\\s"'>=/]+)(${Hs}*=${Hs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Uf=/'/g,jf=/"/g,Rp=/^(?:script|style|textarea|title)$/i,Tp=i=>(r,...l)=>({_$litType$:i,strings:r,values:l}),Nv=Tp(1),s0=Tp(2),Or=Symbol.for("lit-noChange"),gt=Symbol.for("lit-nothing"),Vf=new WeakMap,Lr=Mr.createTreeWalker(Mr,129);function zp(i,r){if(!Eu(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Af!==void 0?Af.createHTML(r):r}const $v=(i,r)=>{const l=i.length-1,s=[];let c,f=r===2?"<svg>":r===3?"<math>":"",p=fi;for(let g=0;g<l;g++){const m=i[g];let E,S,w=-1,z=0;for(;z<m.length&&(p.lastIndex=z,S=p.exec(m),S!==null);)z=p.lastIndex,p===fi?S[1]==="!--"?p=If:S[1]!==void 0?p=Ff:S[2]!==void 0?(Rp.test(S[2])&&(c=RegExp("</"+S[2],"g")),p=Rr):S[3]!==void 0&&(p=Rr):p===Rr?S[0]===">"?(p=c??fi,w=-1):S[1]===void 0?w=-2:(w=p.lastIndex-S[2].length,E=S[1],p=S[3]===void 0?Rr:S[3]==='"'?jf:Uf):p===jf||p===Uf?p=Rr:p===If||p===Ff?p=fi:(p=Rr,c=void 0);const N=p===Rr&&i[g+1].startsWith("/>")?" ":"";f+=p===fi?m+zv:w>=0?(s.push(E),m.slice(0,w)+bp+m.slice(w)+rr+N):m+rr+(w===-2?g:N)}return[zp(i,f+(i[l]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),s]};let iu=class Lp{constructor({strings:r,_$litType$:l},s){let c;this.parts=[];let f=0,p=0;const g=r.length-1,m=this.parts,[E,S]=$v(r,l);if(this.el=Lp.createElement(E,s),Lr.currentNode=this.el.content,l===2||l===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(c=Lr.nextNode())!==null&&m.length<g;){if(c.nodeType===1){if(c.hasAttributes())for(const w of c.getAttributeNames())if(w.endsWith(bp)){const z=S[p++],N=c.getAttribute(w).split(rr),B=/([.?@])?(.*)/.exec(z);m.push({type:1,index:f,name:B[2],strings:N,ctor:B[1]==="."?Mv:B[1]==="?"?Ov:B[1]==="@"?Av:Zl}),c.removeAttribute(w)}else w.startsWith(rr)&&(m.push({type:6,index:f}),c.removeAttribute(w));if(Rp.test(c.tagName)){const w=c.textContent.split(rr),z=w.length-1;if(z>0){c.textContent=Wl?Wl.emptyScript:"";for(let N=0;N<z;N++)c.append(w[N],Si()),Lr.nextNode(),m.push({type:2,index:++f});c.append(w[z],Si())}}}else if(c.nodeType===8)if(c.data===Pp)m.push({type:2,index:f});else{let w=-1;for(;(w=c.data.indexOf(rr,w+1))!==-1;)m.push({type:7,index:f}),w+=rr.length-1}f++}}static createElement(r,l){const s=Mr.createElement("template");return s.innerHTML=r,s}};function vo(i,r,l=i,s){var p,g;if(r===Or)return r;let c=s!==void 0?(p=l._$Co)==null?void 0:p[s]:l._$Cl;const f=ki(r)?void 0:r._$litDirective$;return(c==null?void 0:c.constructor)!==f&&((g=c==null?void 0:c._$AO)==null||g.call(c,!1),f===void 0?c=void 0:(c=new f(i),c._$AT(i,l,s)),s!==void 0?(l._$Co??(l._$Co=[]))[s]=c:l._$Cl=c),c!==void 0&&(r=vo(i,c._$AS(i,r.values),c,s)),r}class Dv{constructor(r,l){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:l},parts:s}=this._$AD,c=((r==null?void 0:r.creationScope)??Mr).importNode(l,!0);Lr.currentNode=c;let f=Lr.nextNode(),p=0,g=0,m=s[0];for(;m!==void 0;){if(p===m.index){let E;m.type===2?E=new _u(f,f.nextSibling,this,r):m.type===1?E=new m.ctor(f,m.name,m.strings,this,r):m.type===6&&(E=new Iv(f,this,r)),this._$AV.push(E),m=s[++g]}p!==(m==null?void 0:m.index)&&(f=Lr.nextNode(),p++)}return Lr.currentNode=Mr,c}p(r){let l=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(r,s,l),l+=s.strings.length-2):s._$AI(r[l])),l++}}let _u=class Np{get _$AU(){var r;return((r=this._$AM)==null?void 0:r._$AU)??this._$Cv}constructor(r,l,s,c){this.type=2,this._$AH=gt,this._$AN=void 0,this._$AA=r,this._$AB=l,this._$AM=s,this.options=c,this._$Cv=(c==null?void 0:c.isConnected)??!0}get parentNode(){let r=this._$AA.parentNode;const l=this._$AM;return l!==void 0&&(r==null?void 0:r.nodeType)===11&&(r=l.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,l=this){r=vo(this,r,l),ki(r)?r===gt||r==null||r===""?(this._$AH!==gt&&this._$AR(),this._$AH=gt):r!==this._$AH&&r!==Or&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):Lv(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==gt&&ki(this._$AH)?this._$AA.nextSibling.data=r:this.T(Mr.createTextNode(r)),this._$AH=r}$(r){var f;const{values:l,_$litType$:s}=r,c=typeof s=="number"?this._$AC(r):(s.el===void 0&&(s.el=iu.createElement(zp(s.h,s.h[0]),this.options)),s);if(((f=this._$AH)==null?void 0:f._$AD)===c)this._$AH.p(l);else{const p=new Dv(c,this),g=p.u(this.options);p.p(l),this.T(g),this._$AH=p}}_$AC(r){let l=Vf.get(r.strings);return l===void 0&&Vf.set(r.strings,l=new iu(r)),l}k(r){Eu(this._$AH)||(this._$AH=[],this._$AR());const l=this._$AH;let s,c=0;for(const f of r)c===l.length?l.push(s=new Np(this.O(Si()),this.O(Si()),this,this.options)):s=l[c],s._$AI(f),c++;c<l.length&&(this._$AR(s&&s._$AB.nextSibling,c),l.length=c)}_$AR(r=this._$AA.nextSibling,l){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,l);r&&r!==this._$AB;){const c=r.nextSibling;r.remove(),r=c}}setConnected(r){var l;this._$AM===void 0&&(this._$Cv=r,(l=this._$AP)==null||l.call(this,r))}};class Zl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,l,s,c,f){this.type=1,this._$AH=gt,this._$AN=void 0,this.element=r,this.name=l,this._$AM=c,this.options=f,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=gt}_$AI(r,l=this,s,c){const f=this.strings;let p=!1;if(f===void 0)r=vo(this,r,l,0),p=!ki(r)||r!==this._$AH&&r!==Or,p&&(this._$AH=r);else{const g=r;let m,E;for(r=f[0],m=0;m<f.length-1;m++)E=vo(this,g[s+m],l,m),E===Or&&(E=this._$AH[m]),p||(p=!ki(E)||E!==this._$AH[m]),E===gt?r=gt:r!==gt&&(r+=(E??"")+f[m+1]),this._$AH[m]=E}p&&!c&&this.j(r)}j(r){r===gt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class Mv extends Zl{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===gt?void 0:r}}let Ov=class extends Zl{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==gt)}};class Av extends Zl{constructor(r,l,s,c,f){super(r,l,s,c,f),this.type=5}_$AI(r,l=this){if((r=vo(this,r,l,0)??gt)===Or)return;const s=this._$AH,c=r===gt&&s!==gt||r.capture!==s.capture||r.once!==s.once||r.passive!==s.passive,f=r!==gt&&(s===gt||c);c&&this.element.removeEventListener(this.name,this,s),f&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){var l;typeof this._$AH=="function"?this._$AH.call(((l=this.options)==null?void 0:l.host)??this.element,r):this._$AH.handleEvent(r)}}let Iv=class{constructor(r,l,s){this.element=r,this.type=6,this._$AN=void 0,this._$AM=l,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(r){vo(this,r)}};const Ws=gi.litHtmlPolyfillSupport;Ws==null||Ws(iu,_u),(gi.litHtmlVersions??(gi.litHtmlVersions=[])).push("3.2.1");const Fv=(i,r,l)=>{const s=(l==null?void 0:l.renderBefore)??r;let c=s._$litPart$;if(c===void 0){const f=(l==null?void 0:l.renderBefore)??null;s._$litPart$=c=new _u(r.insertBefore(Si(),f),f,void 0,l??{})}return c._$AI(i),c};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $r=class extends po{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var l;const r=super.createRenderRoot();return(l=this.renderOptions).renderBefore??(l.renderBefore=r.firstChild),r}update(r){const l=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=Fv(l,this.renderRoot,this.renderOptions)}connectedCallback(){var r;super.connectedCallback(),(r=this._$Do)==null||r.setConnected(!0)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this._$Do)==null||r.setConnected(!1)}render(){return Or}};var rp;$r._$litElement$=!0,$r.finalized=!0,(rp=globalThis.litElementHydrateSupport)==null||rp.call(globalThis,{LitElement:$r});const Qs=globalThis.litElementPolyfillSupport;Qs==null||Qs({LitElement:$r});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uv={attribute:!0,type:String,converter:Hl,reflect:!1,hasChanged:ku},jv=(i=Uv,r,l)=>{const{kind:s,metadata:c}=l;let f=globalThis.litPropertyMetadata.get(c);if(f===void 0&&globalThis.litPropertyMetadata.set(c,f=new Map),f.set(l.name,i),s==="accessor"){const{name:p}=l;return{set(g){const m=r.get.call(this);r.set.call(this,g),this.requestUpdate(p,m,i)},init(g){return g!==void 0&&this.P(p,void 0,i),g}}}if(s==="setter"){const{name:p}=l;return function(g){const m=this[p];r.call(this,g),this.requestUpdate(p,m,i)}}throw Error("Unsupported decorator location: "+s)};function Vt(i){return(r,l)=>typeof l=="object"?jv(i,r,l):((s,c,f)=>{const p=c.hasOwnProperty(f);return c.constructor.createProperty(f,p?{...s,wrapped:!0}:s),p?Object.getOwnPropertyDescriptor(c,f):void 0})(i,r,l)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vv={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Bv=i=>(...r)=>({_$litDirective$:i,values:r});let Hv=class{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,l,s){this._$Ct=r,this._$AM=l,this._$Ci=s}_$AS(r,l){return this.update(r,l)}update(r,l){return this.render(...l)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wv=Bv(class extends Hv{constructor(i){var r;if(super(i),i.type!==Vv.ATTRIBUTE||i.name!=="class"||((r=i.strings)==null?void 0:r.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(r=>i[r]).join(" ")+" "}update(i,[r]){var s,c;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(f=>f!=="")));for(const f in r)r[f]&&!((s=this.nt)!=null&&s.has(f))&&this.st.add(f);return this.render(r)}const l=i.element.classList;for(const f of this.st)f in r||(l.remove(f),this.st.delete(f));for(const f in r){const p=!!r[f];p===this.st.has(f)||(c=this.nt)!=null&&c.has(f)||(p?(l.add(f),this.st.add(f)):(l.remove(f),this.st.delete(f)))}return Or}}),Ks="css-loading-indicator";var sn;(function(i){i.IDLE="",i.FIRST="first",i.SECOND="second",i.THIRD="third"})(sn||(sn={}));class vt extends $r{static create(){var r,l;const s=window;return!((r=s.Vaadin)===null||r===void 0)&&r.connectionIndicator||(s.Vaadin||(s.Vaadin={}),s.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(s.Vaadin.connectionIndicator)),(l=s.Vaadin)===null||l===void 0?void 0:l.connectionIndicator}constructor(){super(),this.firstDelay=450,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=sn.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=dt.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}render(){return Nv`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${Wv({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var r;super.connectedCallback();const l=window;!((r=l.Vaadin)===null||r===void 0)&&r.connectionState&&(this.connectionStateStore=l.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(r){r!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=r,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var r;const l=(r=this.connectionStateStore)===null||r===void 0?void 0:r.state;return this.offline=l===dt.CONNECTION_LOST,this.reconnecting=l===dt.RECONNECTING,this.updateLoading(l===dt.LOADING),this.loading?!1:l!==this.lastMessageState?(this.lastMessageState=l,!0):!1}updateLoading(r){this.loading=r,this.loadingBarState=sn.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,r,()=>{this.loadingBarState=sn.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,r,()=>{this.loadingBarState=sn.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,r,()=>{this.loadingBarState=sn.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(Ks)){const r=document.createElement("style");r.id=Ks,r.textContent=this.getDefaultStyle(),document.head.appendChild(r)}}else{const r=document.getElementById(Ks);r&&document.head.removeChild(r)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case sn.IDLE:return"display: none";case sn.FIRST:case sn.SECOND:case sn.THIRD:return"display: block";default:return""}}timeoutFor(r,l,s,c){return r!==0&&window.clearTimeout(r),l?window.setTimeout(s,c):0}static get instance(){return vt.create()}}jt([Vt({type:Number})],vt.prototype,"firstDelay",void 0);jt([Vt({type:Number})],vt.prototype,"secondDelay",void 0);jt([Vt({type:Number})],vt.prototype,"thirdDelay",void 0);jt([Vt({type:Number})],vt.prototype,"expandedDuration",void 0);jt([Vt({type:String})],vt.prototype,"onlineText",void 0);jt([Vt({type:String})],vt.prototype,"offlineText",void 0);jt([Vt({type:String})],vt.prototype,"reconnectingText",void 0);jt([Vt({type:Boolean,reflect:!0})],vt.prototype,"offline",void 0);jt([Vt({type:Boolean,reflect:!0})],vt.prototype,"reconnecting",void 0);jt([Vt({type:Boolean,reflect:!0})],vt.prototype,"expanded",void 0);jt([Vt({type:Boolean,reflect:!0})],vt.prototype,"loading",void 0);jt([Vt({type:String})],vt.prototype,"loadingBarState",void 0);jt([Vt({type:Boolean})],vt.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",vt);vt.instance;var Bf;const Ql=window;Ql.Vaadin||(Ql.Vaadin={});(Bf=Ql.Vaadin).registrations||(Bf.registrations=[]);Ql.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class Hf extends Error{}const Gs=window.document.body,Ie=window,Qv=1;function $p(){return Object.keys(Ie.Vaadin.Flow.clients).filter(i=>i!=="TypeScript").map(i=>Ie.Vaadin.Flow.clients[i])}function Wf(i,r){$p().forEach(l=>l.sendEventMessage(Qv,i,r))}let Kv=class{constructor(r){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,this.navigation="",Gs.$=Gs.$||[],this.config=r||{},Ie.Vaadin=Ie.Vaadin||{},Ie.Vaadin.Flow=Ie.Vaadin.Flow||{},Ie.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const l=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||l&&l.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,Ie.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,Ie.Vaadin.connectionState.loadingFinished(),!Ie.Vaadin.listener&&(Ie.Vaadin.listener={},document.addEventListener("click",r=>{r.target&&(r.target.hasAttribute("router-link")?this.navigation="link":r.composedPath().some(l=>l.nodeName==="A")&&(this.navigation="client"))},{capture:!0}))}get action(){return async r=>{if(this.pathname=r.pathname,Ie.Vaadin.connectionState.online)try{await this.flowInit()}catch(l){if(l instanceof Hf)return Ie.Vaadin.connectionState.state=dt.CONNECTION_LOST,this.offlineStubAction();throw l}else return this.offlineStubAction();return this.container.onBeforeEnter=(l,s)=>this.flowNavigate(l,s),this.container.onBeforeLeave=(l,s)=>this.flowLeave(l,s),this.container}}async flowLeave(r,l){const{connectionState:s}=Ie.Vaadin;return this.pathname===r.pathname||!this.isFlowClientLoaded()||s.offline?Promise.resolve({}):new Promise(c=>{this.loadingStarted(),this.container.serverConnected=f=>{var p;c(l&&f?l.prevent():(p=l==null?void 0:l.continue)===null||p===void 0?void 0:p.call(l)),this.loadingFinished()},Wf("ui-leave-navigation",{route:this.getFlowRoutePath(r),query:this.getFlowRouteQuery(r)})})}async flowNavigate(r,l){return this.response?new Promise(s=>{this.loadingStarted(),this.container.serverConnected=(c,f)=>{var p;l&&c?s(l.prevent()):l&&l.redirect&&f?s(l.redirect(f.pathname)):((p=l==null?void 0:l.continue)===null||p===void 0||p.call(l),this.container.style.display="",s(this.container)),this.loadingFinished()},this.container.serverPaused=()=>{this.loadingFinished()},Wf("ui-navigate",{route:this.getFlowRoutePath(r),query:this.getFlowRouteQuery(r),appShellTitle:this.appShellTitle,historyState:history.state,trigger:this.navigation}),this.navigation="history"}):Promise.resolve(this.container)}getFlowRoutePath(r){return decodeURIComponent(r.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(r){return r.search&&r.search.substring(1)||""}async flowInit(){if(!this.isFlowClientLoaded()){Ie.Vaadin.Flow.nonce=this.findNonce(),this.loadingStarted(),this.response=await this.flowInitUi();const{pushScript:r,appConfig:l}=this.response;typeof r=="string"&&await this.loadScript(r);const{appId:s}=l,c=`flow-container-${s.toLowerCase()}`,f=document.querySelector(c);f?this.container=f:(this.container=document.createElement(c),this.container.id=s),Gs.$[s]=this.container,(await ou(()=>import("./FlowBootstrap-BRNFttkU.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(s),await this.config.imports());const g=await ou(()=>import("./FlowClient-Bs60GJL7.js"),[],import.meta.url);await this.flowInitClient(g),this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(r){return new Promise((l,s)=>{const c=document.createElement("script");c.onload=()=>l(),c.onerror=s,c.src=r;const{nonce:f}=Ie.Vaadin.Flow;f!==void 0&&c.setAttribute("nonce",f),document.body.appendChild(c)})}findNonce(){let r;const l=document.head.getElementsByTagName("script");for(const s of l)if(s.nonce){r=s.nonce;break}return r}injectAppIdScript(r){const l=r.substring(0,r.lastIndexOf("-")),s=document.createElement("script");s.type="module",s.setAttribute("data-app-id",l);const{nonce:c}=Ie.Vaadin.Flow;c!==void 0&&s.setAttribute("nonce",c),document.body.append(s)}async flowInitClient(r){return r.init(),new Promise(l=>{const s=setInterval(()=>{$p().reduce((f,p)=>f||p.isActive(),!1)||(clearInterval(s),l())},5)})}async flowInitUi(){const r=Ie.Vaadin&&Ie.Vaadin.TypeScript&&Ie.Vaadin.TypeScript.initial;return r?(Ie.Vaadin.TypeScript.initial=void 0,Promise.resolve(r)):new Promise((l,s)=>{const f=new XMLHttpRequest,p=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}`;f.open("GET",p),f.onerror=()=>s(new Hf(`Invalid server response when initializing Flow UI.
        ${f.status}
        ${f.responseText}`)),f.onload=()=>{const g=f.getResponseHeader("content-type");g&&g.indexOf("application/json")!==-1?l(JSON.parse(f.responseText)):f.onerror()},f.send()})}addConnectionIndicator(){vt.create(),Ie.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){Ie.Vaadin.connectionState.state=dt.RECONNECTING;const r=new XMLHttpRequest;r.open("HEAD","sw.js"),r.onload=()=>{Ie.Vaadin.connectionState.state=dt.CONNECTED},r.onerror=()=>{Ie.Vaadin.connectionState.state=dt.CONNECTION_LOST},setTimeout(()=>r.send(),50)}}),Ie.addEventListener("offline",()=>{this.isFlowClientLoaded()||(Ie.Vaadin.connectionState.state=dt.CONNECTION_LOST)})}async offlineStubAction(){const r=document.createElement("iframe");r.setAttribute("src","./offline-stub.html"),r.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let s;const c=()=>{s!==void 0&&(Ie.Vaadin.connectionState.removeStateChangeListener(s),s=void 0)};return r.onBeforeEnter=(f,p,g)=>{s=()=>{Ie.Vaadin.connectionState.online&&(c(),g.render(f,!1))},Ie.Vaadin.connectionState.addStateChangeListener(s)},r.onBeforeLeave=(f,p,g)=>{c()},r}isFlowClientLoaded(){return this.response!==void 0}};var Ys={exports:{}},pi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function Gv(){if(Qf)return pi;Qf=1;var i=Yl(),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function p(g,m,E){var S,w={},z=null,N=null;E!==void 0&&(z=""+E),m.key!==void 0&&(z=""+m.key),m.ref!==void 0&&(N=m.ref);for(S in m)s.call(m,S)&&!f.hasOwnProperty(S)&&(w[S]=m[S]);if(g&&g.defaultProps)for(S in m=g.defaultProps,m)w[S]===void 0&&(w[S]=m[S]);return{$$typeof:r,type:g,key:z,ref:N,props:w,_owner:c.current}}return pi.Fragment=l,pi.jsx=p,pi.jsxs=p,pi}var Kf;function Yv(){return Kf||(Kf=1,Ys.exports=Gv()),Ys.exports}var vi=Yv(),Xv=Symbol.for("preact-signals");function Cu(){if(mo>1)mo--;else{for(var i,r=!1;yi!==void 0;){var l=yi;for(yi=void 0,lu++;l!==void 0;){var s=l.o;if(l.o=void 0,l.f&=-3,!(8&l.f)&&Mp(l))try{l.c()}catch(c){r||(i=c,r=!0)}l=s}}if(lu=0,mo--,r)throw i}}var Be=void 0,yi=void 0,mo=0,lu=0,Kl=0;function Dp(i){if(Be!==void 0){var r=i.n;if(r===void 0||r.t!==Be)return r={i:0,S:i,p:Be.s,n:void 0,t:Be,e:void 0,x:void 0,r},Be.s!==void 0&&(Be.s.n=r),Be.s=r,i.n=r,32&Be.f&&i.S(r),r;if(r.i===-1)return r.i=0,r.n!==void 0&&(r.n.p=r.p,r.p!==void 0&&(r.p.n=r.n),r.p=Be.s,r.n=void 0,Be.s.n=r,Be.s=r),r}}function Pt(i){this.v=i,this.i=0,this.n=void 0,this.t=void 0}Pt.prototype.brand=Xv;Pt.prototype.h=function(){return!0};Pt.prototype.S=function(i){this.t!==i&&i.e===void 0&&(i.x=this.t,this.t!==void 0&&(this.t.e=i),this.t=i)};Pt.prototype.U=function(i){if(this.t!==void 0){var r=i.e,l=i.x;r!==void 0&&(r.x=l,i.e=void 0),l!==void 0&&(l.e=r,i.x=void 0),i===this.t&&(this.t=l)}};Pt.prototype.subscribe=function(i){var r=this;return Fp(function(){var l=r.value,s=Be;Be=void 0;try{i(l)}finally{Be=s}})};Pt.prototype.valueOf=function(){return this.value};Pt.prototype.toString=function(){return this.value+""};Pt.prototype.toJSON=function(){return this.value};Pt.prototype.peek=function(){var i=Be;Be=void 0;try{return this.value}finally{Be=i}};Object.defineProperty(Pt.prototype,"value",{get:function(){var i=Dp(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if(lu>100)throw new Error("Cycle detected");this.v=i,this.i++,Kl++,mo++;try{for(var r=this.t;r!==void 0;r=r.x)r.t.N()}finally{Cu()}}}});function Mp(i){for(var r=i.s;r!==void 0;r=r.n)if(r.S.i!==r.i||!r.S.h()||r.S.i!==r.i)return!0;return!1}function Op(i){for(var r=i.s;r!==void 0;r=r.n){var l=r.S.n;if(l!==void 0&&(r.r=l),r.S.n=r,r.i=-1,r.n===void 0){i.s=r;break}}}function Ap(i){for(var r=i.s,l=void 0;r!==void 0;){var s=r.p;r.i===-1?(r.S.U(r),s!==void 0&&(s.n=r.n),r.n!==void 0&&(r.n.p=s)):l=r,r.S.n=r.r,r.r!==void 0&&(r.r=void 0),r=s}i.s=l}function Ci(i){Pt.call(this,void 0),this.x=i,this.s=void 0,this.g=Kl-1,this.f=4}(Ci.prototype=new Pt).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Kl))return!0;if(this.g=Kl,this.f|=1,this.i>0&&!Mp(this))return this.f&=-2,!0;var i=Be;try{Op(this),Be=this;var r=this.x();(16&this.f||this.v!==r||this.i===0)&&(this.v=r,this.f&=-17,this.i++)}catch(l){this.v=l,this.f|=16,this.i++}return Be=i,Ap(this),this.f&=-2,!0};Ci.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var r=this.s;r!==void 0;r=r.n)r.S.S(r)}Pt.prototype.S.call(this,i)};Ci.prototype.U=function(i){if(this.t!==void 0&&(Pt.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var r=this.s;r!==void 0;r=r.n)r.S.U(r)}};Ci.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};Object.defineProperty(Ci.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=Dp(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function Ip(i){var r=i.u;if(i.u=void 0,typeof r=="function"){mo++;var l=Be;Be=void 0;try{r()}catch(s){throw i.f&=-2,i.f|=8,bu(i),s}finally{Be=l,Cu()}}}function bu(i){for(var r=i.s;r!==void 0;r=r.n)r.S.U(r);i.x=void 0,i.s=void 0,Ip(i)}function qv(i){if(Be!==this)throw new Error("Out-of-order effect");Ap(this),Be=i,this.f&=-2,8&this.f&&bu(this),Cu()}function bi(i){this.x=i,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}bi.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var r=this.x();typeof r=="function"&&(this.u=r)}finally{i()}};bi.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Ip(this),Op(this),mo++;var i=Be;return Be=this,qv.bind(this,i)};bi.prototype.N=function(){2&this.f||(this.f|=2,this.o=yi,yi=this)};bi.prototype.d=function(){this.f|=8,1&this.f||bu(this)};function Fp(i){var r=new bi(i);try{r.c()}catch(l){throw r.d(),l}return r.d.bind(r)}var Xs={exports:{}},qs={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf;function Jv(){if(Gf)return qs;Gf=1;var i=Yl();function r(w,z){return w===z&&(w!==0||1/w===1/z)||w!==w&&z!==z}var l=typeof Object.is=="function"?Object.is:r,s=i.useState,c=i.useEffect,f=i.useLayoutEffect,p=i.useDebugValue;function g(w,z){var N=z(),B=s({inst:{value:N,getSnapshot:z}}),M=B[0].inst,H=B[1];return f(function(){M.value=N,M.getSnapshot=z,m(M)&&H({inst:M})},[w,N,z]),c(function(){return m(M)&&H({inst:M}),w(function(){m(M)&&H({inst:M})})},[w]),p(N),N}function m(w){var z=w.getSnapshot;w=w.value;try{var N=z();return!l(w,N)}catch{return!0}}function E(w,z){return z()}var S=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?E:g;return qs.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:S,qs}var Yf;function Zv(){return Yf||(Yf=1,Xs.exports=Jv()),Xs.exports}var ey=Zv(),Js={exports:{}},Il={};/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf;function ty(){if(Xf)return Il;Xf=1;var i=Symbol.for("react.fragment");return Il.Fragment=i,Il.jsxDEV=void 0,Il}var qf;function ny(){return qf||(qf=1,Js.exports=ty()),Js.exports}ny();var ry=$.version.split(".").map(Number),oy=Symbol.for(ry[0]>=19?"react.transitional.element":"react.element"),Jf=function(){},Nr,Up=Symbol.dispose||Symbol.for("Symbol.dispose");function Zs(i,r){var l=r.effect.S();return Nr=r,iy.bind(r,i,l)}function iy(i,r){r(),Nr=i}var Zf,au;(Zf={u:0,effect:{s:void 0,c:function(){},S:function(){return Jf},d:function(){}},subscribe:function(){return Jf},getSnapshot:function(){return 0},S:function(){},f:function(){}})[Up]=function(){};var ly=Promise.prototype.then.bind(Promise.resolve());function ay(){au||(au=ly(sy))}function sy(){var i;au=void 0,(i=Nr)==null||i.f()}function jp(i){ay();var r=$.useRef();r.current==null&&(r.current=function(s){var c,f,p,g,m=0,E=Fp(function(){f=this});return f.c=function(){m=m+1|0,g&&g()},(c={u:s,effect:f,subscribe:function(S){return g=S,function(){m=m+1|0,g=void 0,E()}},getSnapshot:function(){return m},S:function(){if(Nr!=null){var S=Nr.u,w=this.u;S==0&&w==0||S==0&&w==1?(Nr.f(),p=Zs(void 0,this)):S==1&&w==0||S==2&&w==0||(p=Zs(Nr,this))}else p=Zs(void 0,this)},f:function(){var S=p;p=void 0,S==null||S()}})[Up]=function(){this.f()},c}(i));var l=r.current;return ey.useSyncExternalStore(l.subscribe,l.getSnapshot,l.getSnapshot),l.S(),l}Object.defineProperties(Pt.prototype,{$$typeof:{configurable:!0,value:oy},type:{configurable:!0,value:function(i){var r=i.data,l=jp(1);try{return r.value}finally{l.f()}}},props:{configurable:!0,get:function(){return{data:this}}},ref:{configurable:!0,value:null}});function Vp(i){return jp(i)}const uy=new Kv({imports:()=>ou(()=>import("./generated-flow-imports-_UB11TNg.js"),[],import.meta.url)}),eu={render(){return Promise.resolve()}};function cy(i){const r=i.port,l=i.protocol,f=l==="http:"&&r==="80"||l==="https:"&&r==="443"?i.hostname:i.host;return`${l}//${f}`}function Bp(i){if(i.href.startsWith(document.baseURI))return"/"+i.href.slice(document.baseURI.length)}function dy(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let r=i.target;const l=i.composedPath?i.composedPath():i.path||[];for(let f=0;f<l.length;f++){const p=l[f];if(p.nodeName&&p.nodeName.toLowerCase()==="a"){r=p;break}}for(;r&&r.nodeName.toLowerCase()!=="a";)r=r.parentNode;if(!r||r.nodeName.toLowerCase()!=="a")return;const s=r;if(s.target&&s.target.toLowerCase()!=="_self"||s.hasAttribute("download")||s.hasAttribute("router-ignore"))return;if(s.pathname===window.location.pathname&&s.hash!==""){window.location.hash=s.hash;return}if((s.origin||cy(s))===window.location.origin)return Bp(new URL(s.href,s.baseURI))}function ep(i,r){setTimeout(()=>{window.dispatchEvent(new CustomEvent("vaadin-navigated",{detail:{pathname:i,search:r}})),delete window.Vaadin.Flow.navigation})}function Hp(){}const tp=()=>Hp;function fy(i,r){switch(r.type){case"add":return[...i,r.entry];case"remove":return i.filter(({domNode:l})=>l!==r.entry.domNode);default:return i}}function py(i,r){const l=wp(),s=$.useRef([]).current,[c,f]=$.useState(0),p=$.useCallback(()=>{const E=s.shift();if(E===void 0)return;(async()=>{i.current&&(await i.current,i.current=void 0),r.current=!E.callback,l(E.to,E.opts),f(s.length)})()},[l,f]),g=$.useCallback(()=>{queueMicrotask(p)},[p]),m=$.useCallback((E,S,w)=>{s.push({to:E,callback:S,opts:w}),f(s.length),s.length===1&&g()},[f,g]);return $.useEffect(()=>()=>{g()},[c,g]),m}function Pu(){var i=Vp(1);try{const r=$.useRef(null),l=wp(),s=ev(({currentLocation:V,nextLocation:ue})=>(f.current=f.current||ue.pathname===V.pathname&&ue.search===V.search&&ue.hash===V.hash,!0)),c=Jl(),f=$.useRef(!1),p=$.useRef(!1),g=$.useRef(!1),m=$.useRef(void 0),E=$.useRef(void 0),S=py(E,f),w=Ug("/"),[z,N]=$.useReducer(fy,[]),B=$.useCallback(V=>{V.preventDefault(),N({type:"remove",entry:V.detail})},[N]),M=$.useCallback(V=>{V.preventDefault(),V.detail.domNode.addEventListener("flow-portal-remove",B,{once:!0}),N({type:"add",entry:V.detail})},[N,B]),H=$.useCallback(V=>{const ue=dy(V);ue&&(V&&V.preventDefault&&V.preventDefault(),f.current=!1,g.current=!0,l(ue),window.dispatchEvent(new CustomEvent("close-overlay-drawer")))},[l]),ve=$.useCallback(V=>{const ue=V.detail,R=Bp(ue);R&&(V.preventDefault(),l(R))},[l]),Y=$.useCallback(V=>{window.Vaadin.Flow.navigation=!0;const ue="/"+V.detail.url;g.current=!1,S(ue,V.detail.callback,{state:V.detail.state,replace:V.detail.replace})},[l]),ke=$.useCallback(V=>()=>{l(V,{replace:!0})},[l]);return $.useEffect(()=>(window.addEventListener("vaadin-router-go",ve),window.addEventListener("vaadin-navigate",Y),()=>{window.removeEventListener("vaadin-router-go",ve),window.removeEventListener("vaadin-navigate",Y)}),[ve,Y]),$.useEffect(()=>()=>{var V,ue,R;(ue=(V=m.current)==null?void 0:V.parentNode)==null||ue.removeChild(m.current),(R=m.current)==null||R.removeEventListener("flow-portal-add",M),m.current=void 0},[]),$.useEffect(()=>{var V,ue,R,ye,le;if(s.state==="blocked"){if(p.current){const{pathname:_e,state:De}=s.location,Fe=_e.substring(w.length);S(Fe.startsWith("/")?Fe:"/"+Fe,!0,{state:De,replace:!0});return}p.current=!0;let ae;if(E.current=new Promise((_e,De)=>ae={resolve:_e,reject:De}),E.current.then(()=>p.current=!1,()=>p.current=!1),f.current&&!g.current){s.proceed(),ae.resolve();return}g.current=!1;const{pathname:xe,search:Ae}=s.location,be=((V=window==null?void 0:window.Vaadin)==null?void 0:V.routesConfig)||[];let Le=nr(Array.from(be),xe);Le&&Le.filter(_e=>{var De,Fe,he;return((he=(Fe=(De=_e.route)==null?void 0:De.element)==null?void 0:Fe.type)==null?void 0:he.name)===Pu.name}).length!=0?((R=(ue=m.current)==null?void 0:ue.onBeforeEnter)==null||R.call(m==null?void 0:m.current,{pathname:xe,search:Ae},{prevent(){s.reset(),ae.resolve(),f.current=!1},redirect:ke,continue(){s.proceed(),ae.resolve()}},eu),f.current=!0):Promise.resolve((le=(ye=m.current)==null?void 0:ye.onBeforeLeave)==null?void 0:le.call(m==null?void 0:m.current,{pathname:xe,search:Ae},{prevent:tp},eu)).then(_e=>{_e===Hp&&m.current?m.current.serverConnected=De=>{De?(s.reset(),ae.resolve()):(s.proceed(),ae.resolve())}:(s.proceed(),ae.resolve())})}},[s.state,s.location]),$.useEffect(()=>{if(s.state!=="blocked"){if(f.current){f.current=!1,ep(c.pathname,c.search);return}uy.serverSideRoutes[0].action({pathname:c.pathname,search:c.search}).then(V=>{var R,ye;const ue=(R=r.current)==null?void 0:R.parentNode;return ue&&ue!==V.parentNode&&(ue.append(V),V.addEventListener("flow-portal-add",M),window.addEventListener("click",H),m.current=V),(ye=V.onBeforeEnter)==null?void 0:ye.call(V,{pathname:c.pathname,search:c.search},{prevent:tp,redirect:ke,continue(){ep(c.pathname,c.search)}},eu)}).then(V=>{typeof V=="function"&&V()})}},[c]),vi.jsxs(vi.Fragment,{children:[vi.jsx("output",{ref:r,style:{display:"none"}}),z.map(({children:V,domNode:ue})=>du.createPortal(V,ue))]})}finally{i.f()}}Pu.type="FlowContainer";const my=[{path:"/*",element:vi.jsx(Pu,{})}];function hy(){const i=[...my];return{router:av([...i],{basename:new URL(document.baseURI).pathname,future:{v7_fetcherPersist:!0,v7_normalizeFormMethod:!0,v7_partialHydration:!0,v7_relativeSplatPath:!0,v7_skipActionErrorRevalidation:!0}}),routes:i}}const{router:gy,routes:vy}=hy();function yy(){var i=Vp(1);try{return vi.jsx(gv,{router:gy,future:{v7_startTransition:!0}})}finally{i.f()}}const su=document.getElementById("outlet");let Wp=su._root??jh.createRoot(su);su._root=Wp;Wp.render($.createElement(yy));window.Vaadin??(window.Vaadin={});window.Vaadin.routesConfig=vy;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xy=i=>class extends i{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(l,s,c){super.attributeChangedCallback(l,s,c),l==="theme"&&this._set_theme(c)}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qp=[],uu=new Set,Ru=new Set;function Kp(i){return i&&Object.prototype.hasOwnProperty.call(i,"__themes")}function wy(i){return Kp(customElements.get(i))}function Sy(i=[]){return[i].flat(1/0).filter(r=>r instanceof Su?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Gp(i,r){return(i||"").split(" ").some(l=>new RegExp(`^${l.split("*").join(".*")}$`,"u").test(r))}function Yp(i){return i.map(r=>r.cssText).join(`
`)}const Gl="vaadin-themable-mixin-style";function ky(i,r){const l=document.createElement("style");l.id=Gl,l.textContent=Yp(i),r.content.appendChild(l)}function Ey(i){if(!i.shadowRoot)return;const r=i.constructor;if(i instanceof $r)[...i.shadowRoot.querySelectorAll("style")].forEach(l=>l.remove()),Cp(i.shadowRoot,r.elementStyles);else{const l=i.shadowRoot.getElementById(Gl),s=r.prototype._template;l.textContent=s.content.getElementById(Gl).textContent}}function _y(i){uu.forEach(r=>{const l=r.deref();l instanceof i?Ey(l):l||uu.delete(r)})}function Xp(i){if(i.prototype instanceof $r)i.elementStyles=i.finalizeStyles(i.styles);else{const r=i.prototype._template;r.content.getElementById(Gl).textContent=Yp(i.getStylesForThis())}Ru.forEach(r=>{const l=customElements.get(r);l!==i&&l.prototype instanceof i&&Xp(l)})}function Cy(i,r){const l=i.__themes;return!l||!r?!1:l.some(s=>s.styles.some(c=>r.some(f=>f.cssText===c.cssText)))}function ea(i,r,l={}){r=Sy(r),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(i,r,l):Qp.push({themeFor:i,styles:r,include:l.include,moduleId:l.moduleId}),i&&Ru.forEach(s=>{if(Gp(i,s)&&wy(s)){const c=customElements.get(s);Cy(c,r)?console.warn(`Registering styles that already exist for ${s}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${s}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),Xp(c),_y(c)}})}function cu(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():Qp}function by(i=""){let r=0;return i.startsWith("lumo-")||i.startsWith("material-")?r=1:i.startsWith("vaadin-")&&(r=2),r}function qp(i){const r=[];return i.include&&[].concat(i.include).forEach(l=>{const s=cu().find(c=>c.moduleId===l);s?r.push(...qp(s),...s.styles):console.warn(`Included moduleId ${l} not found in style registry`)},i.styles),r}function Py(i){const r=`${i}-default-theme`,l=cu().filter(s=>s.moduleId!==r&&Gp(s.themeFor,i)).map(s=>({...s,styles:[...qp(s),...s.styles],includePriority:by(s.moduleId)})).sort((s,c)=>c.includePriority-s.includePriority);return l.length>0?l:cu().filter(s=>s.moduleId===r)}const h0=i=>class extends xy(i){constructor(){super(),uu.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&Ru.add(this.is),this.elementStyles)return;const l=this.prototype._template;!l||Kp(this)||ky(this.getStylesForThis(),l)}static finalizeStyles(l){const s=this.getStylesForThis();return l?[...[l].flat(1/0),...s]:s}static getStylesForThis(){const l=i.__themes||[],s=Object.getPrototypeOf(this.prototype),c=(s?s.constructor.__themes:[])||[];this.__themes=[...l,...c,...Py(this.is)];const f=this.__themes.flatMap(p=>p.styles);return f.filter((p,g)=>g===f.lastIndexOf(p))}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ry=(i,...r)=>{const l=document.createElement("style");l.id=i,l.textContent=r.map(s=>s.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",l)},sr=(i,...r)=>{Ry(`lumo-${i}`,r)};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});var op;(op=window.Vaadin).featureFlags||(op.featureFlags={});function Ty(i){return i.replace(/-[a-z]/gu,r=>r[1].toUpperCase())}const Tn={};function zy(i,r="24.6.1"){if(Object.defineProperty(i,"version",{get(){return r}}),i.experimental){const s=typeof i.experimental=="string"?i.experimental:`${Ty(i.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[s]&&!Tn[s]){Tn[s]=new Set,Tn[s].add(i),Object.defineProperty(window.Vaadin.featureFlags,s,{get(){return Tn[s].size===0},set(c){c&&Tn[s].size>0&&(Tn[s].forEach(f=>{customElements.define(f.is,f)}),Tn[s].clear())}});return}else if(Tn[s]){Tn[s].add(i);return}}const l=customElements.get(i.is);if(!l)customElements.define(i.is,i);else{const s=l.version;s&&i.version&&s===i.version?console.warn(`The component ${i.is} has been loaded twice`):console.error(`Tried to define ${i.is} version ${i.version} when version ${l.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ly extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}zy(Ly);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ny=ot`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,Tu=ot`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;ea("",Tu,{moduleId:"lumo-typography"});sr("typography-props",Ny);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $y=ot`
  ${_p(Tu.cssText.replace(/,\s*:host/su,""))}
`;sr("typography",$y);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dy=ot`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;sr("color-props",Dy);const zu=ot`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;ea("",zu,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */sr("color",zu);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const My=ot`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;ot`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-checkbox-disabled-checkmark-color: var(--lumo-contrast-30pct);
    --vaadin-checkbox-disabled-background: var(--lumo-contrast-10pct);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-disabled-background: var(--lumo-contrast-10pct);
    --vaadin-radio-button-disabled-dot-color: var(--lumo-contrast-30pct);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-disabled-background: var(--lumo-contrast-5pct);
    --vaadin-input-field-disabled-value-color: var(--lumo-disabled-text-color);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 500;
  }
`;sr("style-props",My);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lu=ot`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='warning'] {
    color: var(--lumo-warning-text-color);
    background-color: var(--lumo-warning-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning'][theme~='primary'] {
    color: var(--lumo-warning-contrast-color);
    background-color: var(--lumo-warning-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] > vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] > vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] > vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning']:not([icon]):empty {
    background-color: var(--lumo-warning-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;ea("",Lu,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */sr("badge",Lu);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oy=ot`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ay=ot`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-tint {
    background-color: var(--lumo-tint);
  }
  .bg-tint-90 {
    background-color: var(--lumo-tint-90pct);
  }
  .bg-tint-80 {
    background-color: var(--lumo-tint-80pct);
  }
  .bg-tint-70 {
    background-color: var(--lumo-tint-70pct);
  }
  .bg-tint-60 {
    background-color: var(--lumo-tint-60pct);
  }
  .bg-tint-50 {
    background-color: var(--lumo-tint-50pct);
  }
  .bg-tint-40 {
    background-color: var(--lumo-tint-40pct);
  }
  .bg-tint-30 {
    background-color: var(--lumo-tint-30pct);
  }
  .bg-tint-20 {
    background-color: var(--lumo-tint-20pct);
  }
  .bg-tint-10 {
    background-color: var(--lumo-tint-10pct);
  }
  .bg-tint-5 {
    background-color: var(--lumo-tint-5pct);
  }

  .bg-shade {
    background-color: var(--lumo-shade);
  }
  .bg-shade-90 {
    background-color: var(--lumo-shade-90pct);
  }
  .bg-shade-80 {
    background-color: var(--lumo-shade-80pct);
  }
  .bg-shade-70 {
    background-color: var(--lumo-shade-70pct);
  }
  .bg-shade-60 {
    background-color: var(--lumo-shade-60pct);
  }
  .bg-shade-50 {
    background-color: var(--lumo-shade-50pct);
  }
  .bg-shade-40 {
    background-color: var(--lumo-shade-40pct);
  }
  .bg-shade-30 {
    background-color: var(--lumo-shade-30pct);
  }
  .bg-shade-20 {
    background-color: var(--lumo-shade-20pct);
  }
  .bg-shade-10 {
    background-color: var(--lumo-shade-10pct);
  }
  .bg-shade-5 {
    background-color: var(--lumo-shade-5pct);
  }

  .bg-contrast {
    background-color: var(--lumo-contrast);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }

  .bg-warning {
    background-color: var(--lumo-warning-color);
  }
  .bg-warning-10 {
    background-color: var(--lumo-warning-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Iy=ot`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border-dashed {
    --lumo-utility-border-style: dashed;
  }
  .border-dotted {
    --lumo-utility-border-style: dotted;
  }
  .border {
    border: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-b {
    border-bottom: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-e {
    border-inline-end: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-l {
    border-left: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-r {
    border-right: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-s {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-t {
    border-top: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }

  /* === Border color === */
  .border-contrast {
    --lumo-utility-border-color: var(--lumo-contrast);
  }
  .border-contrast-90 {
    --lumo-utility-border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast-80 {
    --lumo-utility-border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-70 {
    --lumo-utility-border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-60 {
    --lumo-utility-border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-50 {
    --lumo-utility-border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-40 {
    --lumo-utility-border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-30 {
    --lumo-utility-border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-20 {
    --lumo-utility-border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-10 {
    --lumo-utility-border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-5 {
    --lumo-utility-border-color: var(--lumo-contrast-5pct);
  }

  .border-primary {
    --lumo-utility-border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    --lumo-utility-border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    --lumo-utility-border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    --lumo-utility-border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    --lumo-utility-border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    --lumo-utility-border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    --lumo-utility-border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    --lumo-utility-border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    --lumo-utility-border-color: var(--lumo-success-color-10pct);
  }

  .border-warning {
    --lumo-utility-border-color: var(--lumo-warning-color);
  }
  .border-warning-strong {
    --lumo-utility-border-color: var(--lumo-warning-text-color);
  }
  .border-warning-10 {
    --lumo-utility-border-color: var(--lumo-warning-color-10pct);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
  .rounded-full {
    border-radius: 9999px;
  }

  /* === Divide === */
  .divide-x > * + * {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .divide-y > * + * {
    border-block-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fy=ot`
  /* === Backdrop filter === */
  .backdrop-blur-none {
    backdrop-filter: blur(0);
  }
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
  .backdrop-blur {
    backdrop-filter: blur(8px);
  }
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
  .backdrop-blur-lg {
    backdrop-filter: blur(16px);
  }
  .backdrop-blur-xl {
    backdrop-filter: blur(24px);
  }
  .backdrop-blur-2xl {
    backdrop-filter: blur(40px);
  }
  .backdrop-blur-3xl {
    backdrop-filter: blur(64px);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Uy=ot`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-1 {
    flex: 1 1 0%;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow {
    flex-grow: 1;
  }
  .flex-grow-0 {
    flex-grow: 0;
  }

  /* === Flex shrink === */
  .flex-shrink {
    flex-shrink: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }
  .col-span-full {
    grid-column: 1 / -1;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }
  .row-span-full {
    grid-row: 1 / -1;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\items-baseline {
      align-items: baseline;
    }
    .sm\\items-center {
      align-items: center;
    }
    .sm\\items-end {
      align-items: flex-end;
    }
    .sm\\items-start {
      align-items: flex-start;
    }
    .sm\\items-stretch {
      align-items: stretch;
    }
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\items-baseline {
      align-items: baseline;
    }
    .md\\items-center {
      align-items: center;
    }
    .md\\items-end {
      align-items: flex-end;
    }
    .md\\items-start {
      align-items: flex-start;
    }
    .md\\items-stretch {
      align-items: stretch;
    }
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\items-baseline {
      align-items: baseline;
    }
    .lg\\items-center {
      align-items: center;
    }
    .lg\\items-end {
      align-items: flex-end;
    }
    .lg\\items-start {
      align-items: flex-start;
    }
    .lg\\items-stretch {
      align-items: stretch;
    }
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\items-baseline {
      align-items: baseline;
    }
    .xl\\items-center {
      align-items: center;
    }
    .xl\\items-end {
      align-items: flex-end;
    }
    .xl\\items-start {
      align-items: flex-start;
    }
    .xl\\items-stretch {
      align-items: stretch;
    }
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\items-baseline {
      align-items: baseline;
    }
    .\\32xl\\items-center {
      align-items: center;
    }
    .\\32xl\\items-end {
      align-items: flex-end;
    }
    .\\32xl\\items-start {
      align-items: flex-start;
    }
    .\\32xl\\items-stretch {
      align-items: stretch;
    }
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jy=ot`
  /* === Aspect ratio === */
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .aspect-video {
    aspect-ratio: 16 / 9;
  }

  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Top, end, bottom, start === */
  .-bottom-xs {
    bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-bottom-s {
    bottom: calc(var(--lumo-space-s) / -1);
  }
  .-bottom-m {
    bottom: calc(var(--lumo-space-m) / -1);
  }
  .-bottom-l {
    bottom: calc(var(--lumo-space-l) / -1);
  }
  .-bottom-xl {
    bottom: calc(var(--lumo-space-xl) / -1);
  }
  .-bottom-full {
    bottom: -100%;
  }
  .bottom-0 {
    bottom: 0;
  }
  .bottom-xs {
    bottom: var(--lumo-space-xs);
  }
  .bottom-s {
    bottom: var(--lumo-space-s);
  }
  .bottom-m {
    bottom: var(--lumo-space-m);
  }
  .bottom-l {
    bottom: var(--lumo-space-l);
  }
  .bottom-xl {
    bottom: var(--lumo-space-xl);
  }
  .bottom-auto {
    bottom: auto;
  }
  .bottom-full {
    bottom: 100%;
  }

  .-end-xs {
    inset-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-end-s {
    inset-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-end-m {
    inset-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-end-l {
    inset-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-end-xl {
    inset-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .-end-full {
    inset-inline-end: -100%;
  }
  .end-0 {
    inset-inline-end: 0;
  }
  .end-xs {
    inset-inline-end: var(--lumo-space-xs);
  }
  .end-s {
    inset-inline-end: var(--lumo-space-s);
  }
  .end-m {
    inset-inline-end: var(--lumo-space-m);
  }
  .end-l {
    inset-inline-end: var(--lumo-space-l);
  }
  .end-xl {
    inset-inline-end: var(--lumo-space-xl);
  }
  .end-auto {
    inset-inline-end: auto;
  }
  .end-full {
    inset-inline-end: 100%;
  }

  .-start-xs {
    inset-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-start-s {
    inset-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-start-m {
    inset-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-start-l {
    inset-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-start-xl {
    inset-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .-start-full {
    inset-inline-start: -100%;
  }
  .start-0 {
    inset-inline-start: 0;
  }
  .start-xs {
    inset-inline-start: var(--lumo-space-xs);
  }
  .start-s {
    inset-inline-start: var(--lumo-space-s);
  }
  .start-m {
    inset-inline-start: var(--lumo-space-m);
  }
  .start-l {
    inset-inline-start: var(--lumo-space-l);
  }
  .start-xl {
    inset-inline-start: var(--lumo-space-xl);
  }
  .start-auto {
    inset-inline-start: auto;
  }
  .start-full {
    inset-inline-start: 100%;
  }

  .-top-xs {
    top: calc(var(--lumo-space-xs) / -1);
  }
  .-top-s {
    top: calc(var(--lumo-space-s) / -1);
  }
  .-top-m {
    top: calc(var(--lumo-space-m) / -1);
  }
  .-top-l {
    top: calc(var(--lumo-space-l) / -1);
  }
  .-top-xl {
    top: calc(var(--lumo-space-xl) / -1);
  }
  .-top-full {
    top: -100%;
  }
  .top-0 {
    top: 0;
  }
  .top-xs {
    top: var(--lumo-space-xs);
  }
  .top-s {
    top: var(--lumo-space-s);
  }
  .top-m {
    top: var(--lumo-space-m);
  }
  .top-l {
    top: var(--lumo-space-l);
  }
  .top-xl {
    top: var(--lumo-space-xl);
  }
  .top-auto {
    top: auto;
  }
  .top-full {
    top: 100%;
  }

  /* === Visibility === */
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }

  /* === Z-index === */
  .z-0 {
    z-index: 0;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }
  .z-auto {
    z-index: auto;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    /* Display */
    .sm\\:block {
      display: block;
    }
    .sm\\:flex {
      display: flex;
    }
    .sm\\:grid {
      display: grid;
    }
    .sm\\:hidden {
      display: none;
    }
    .sm\\:inline {
      display: inline;
    }
    .sm\\:inline-block {
      display: inline-block;
    }
    .sm\\:inline-flex {
      display: inline-flex;
    }
    .sm\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .sm\\:absolute {
      position: absolute;
    }
    .sm\\:fixed {
      position: fixed;
    }
    .sm\\:relative {
      position: relative;
    }
    .sm\\:static {
      position: static;
    }
    .sm\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 768px) {
    /* Display */
    .md\\:block {
      display: block;
    }
    .md\\:flex {
      display: flex;
    }
    .md\\:grid {
      display: grid;
    }
    .md\\:hidden {
      display: none;
    }
    .md\\:inline {
      display: inline;
    }
    .md\\:inline-block {
      display: inline-block;
    }
    .md\\:inline-flex {
      display: inline-flex;
    }
    .md\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .md\\:absolute {
      position: absolute;
    }
    .md\\:fixed {
      position: fixed;
    }
    .md\\:relative {
      position: relative;
    }
    .md\\:static {
      position: static;
    }
    .md\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1024px) {
    /* Display */
    .lg\\:block {
      display: block;
    }
    .lg\\:flex {
      display: flex;
    }
    .lg\\:grid {
      display: grid;
    }
    .lg\\:hidden {
      display: none;
    }
    .lg\\:inline {
      display: inline;
    }
    .lg\\:inline-block {
      display: inline-block;
    }
    .lg\\:inline-flex {
      display: inline-flex;
    }
    .lg\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .lg\\:absolute {
      position: absolute;
    }
    .lg\\:fixed {
      position: fixed;
    }
    .lg\\:relative {
      position: relative;
    }
    .lg\\:static {
      position: static;
    }
    .lg\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1280px) {
    /* Display */
    .xl\\:block {
      display: block;
    }
    .xl\\:flex {
      display: flex;
    }
    .xl\\:grid {
      display: grid;
    }
    .xl\\:hidden {
      display: none;
    }
    .xl\\:inline {
      display: inline;
    }
    .xl\\:inline-block {
      display: inline-block;
    }
    .xl\\:inline-flex {
      display: inline-flex;
    }
    .xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .xl\\:absolute {
      position: absolute;
    }
    .xl\\:fixed {
      position: fixed;
    }
    .xl\\:relative {
      position: relative;
    }
    .xl\\:static {
      position: static;
    }
    .xl\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1536px) {
    /* Display */
    .\\32xl\\:block {
      display: block;
    }
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:grid {
      display: grid;
    }
    .\\32xl\\:hidden {
      display: none;
    }
    .\\32xl\\:inline {
      display: inline;
    }
    .\\32xl\\:inline-block {
      display: inline-block;
    }
    .\\32xl\\:inline-flex {
      display: inline-flex;
    }
    .\\32xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .\\32xl\\:absolute {
      position: absolute;
    }
    .\\32xl\\:fixed {
      position: fixed;
    }
    .\\32xl\\:relative {
      position: relative;
    }
    .\\32xl\\:static {
      position: static;
    }
    .\\32xl\\:sticky {
      position: sticky;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vy=ot`
  /* === Box shadow === */
  .shadow-none {
    box-shadow: none;
  }
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const By=ot`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hy=ot`
  /* === Margin === */
  .-m-xs {
    margin: calc(var(--lumo-space-xs) / -1);
  }
  .-m-s {
    margin: calc(var(--lumo-space-s) / -1);
  }
  .-m-m {
    margin: calc(var(--lumo-space-m) / -1);
  }
  .-m-l {
    margin: calc(var(--lumo-space-l) / -1);
  }
  .-m-xl {
    margin: calc(var(--lumo-space-xl) / -1);
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }
  .m-auto {
    margin: auto;
  }

  /* === Margin (bottom) === */
  .-mb-xs {
    margin-bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-mb-s {
    margin-bottom: calc(var(--lumo-space-s) / -1);
  }
  .-mb-m {
    margin-bottom: calc(var(--lumo-space-m) / -1);
  }
  .-mb-l {
    margin-bottom: calc(var(--lumo-space-l) / -1);
  }
  .-mb-xl {
    margin-bottom: calc(var(--lumo-space-xl) / -1);
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }
  .mb-auto {
    margin-bottom: auto;
  }

  /* === Margin (end) === */
  .-me-xs {
    margin-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-me-s {
    margin-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-me-m {
    margin-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-me-l {
    margin-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-me-xl {
    margin-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }
  .me-auto {
    margin-inline-end: auto;
  }

  /* === Margin (horizontal) === */
  .-mx-xs {
    margin-inline: calc(var(--lumo-space-xs) / -1);
  }
  .-mx-s {
    margin-inline: calc(var(--lumo-space-s) / -1);
  }
  .-mx-m {
    margin-inline: calc(var(--lumo-space-m) / -1);
  }
  .-mx-l {
    margin-inline: calc(var(--lumo-space-l) / -1);
  }
  .-mx-xl {
    margin-inline: calc(var(--lumo-space-xl) / -1);
  }
  .mx-0 {
    margin-inline: 0;
  }
  .mx-xs {
    margin-inline: var(--lumo-space-xs);
  }
  .mx-s {
    margin-inline: var(--lumo-space-s);
  }
  .mx-m {
    margin-inline: var(--lumo-space-m);
  }
  .mx-l {
    margin-inline: var(--lumo-space-l);
  }
  .mx-xl {
    margin-inline: var(--lumo-space-xl);
  }
  .mx-auto {
    margin-inline: auto;
  }

  /* === Margin (left) === */
  .-ml-xs {
    margin-left: calc(var(--lumo-space-xs) / -1);
  }
  .-ml-s {
    margin-left: calc(var(--lumo-space-s) / -1);
  }
  .-ml-m {
    margin-left: calc(var(--lumo-space-m) / -1);
  }
  .-ml-l {
    margin-left: calc(var(--lumo-space-l) / -1);
  }
  .-ml-xl {
    margin-left: calc(var(--lumo-space-xl) / -1);
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }
  .ml-auto {
    margin-left: auto;
  }

  /* === Margin (right) === */
  .-mr-xs {
    margin-right: calc(var(--lumo-space-xs) / -1);
  }
  .-mr-s {
    margin-right: calc(var(--lumo-space-s) / -1);
  }
  .-mr-m {
    margin-right: calc(var(--lumo-space-m) / -1);
  }
  .-mr-l {
    margin-right: calc(var(--lumo-space-l) / -1);
  }
  .-mr-xl {
    margin-right: calc(var(--lumo-space-xl) / -1);
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }
  .mr-auto {
    margin-right: auto;
  }

  /* === Margin (start) === */
  .-ms-xs {
    margin-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-ms-s {
    margin-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-ms-m {
    margin-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-ms-l {
    margin-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-ms-xl {
    margin-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }
  .ms-auto {
    margin-inline-start: auto;
  }

  /* === Margin (top) === */
  .-mt-xs {
    margin-top: calc(var(--lumo-space-xs) / -1);
  }
  .-mt-s {
    margin-top: calc(var(--lumo-space-s) / -1);
  }
  .-mt-m {
    margin-top: calc(var(--lumo-space-m) / -1);
  }
  .-mt-l {
    margin-top: calc(var(--lumo-space-l) / -1);
  }
  .-mt-xl {
    margin-top: calc(var(--lumo-space-xl) / -1);
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }
  .mt-auto {
    margin-top: auto;
  }

  /* === Margin (vertical) === */
  .-my-xs {
    margin-block: calc(var(--lumo-space-xs) / -1);
  }
  .-my-s {
    margin-block: calc(var(--lumo-space-s) / -1);
  }
  .-my-m {
    margin-block: calc(var(--lumo-space-m) / -1);
  }
  .-my-l {
    margin-block: calc(var(--lumo-space-l) / -1);
  }
  .-my-xl {
    margin-block: calc(var(--lumo-space-xl) / -1);
  }
  .my-0 {
    margin-block: 0;
  }
  .my-xs {
    margin-block: var(--lumo-space-xs);
  }
  .my-s {
    margin-block: var(--lumo-space-s);
  }
  .my-m {
    margin-block: var(--lumo-space-m);
  }
  .my-l {
    margin-block: var(--lumo-space-l);
  }
  .my-xl {
    margin-block: var(--lumo-space-xl);
  }
  .my-auto {
    margin-block: auto;
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wy=ot`
  .transition-none {
    transition: none;
  }
  .transition-all {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition {
    transition:
      color,
      background-color,
      border-color,
      text-decoration-color,
      fill,
      stroke,
      opacity,
      box-shadow,
      transform,
      filter,
      backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-colors {
    transition:
      color,
      background-color,
      border-color,
      text-decoration-color,
      fill,
      stroke 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-opacity {
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-shadow {
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-transform {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qy=ot`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line clamp === */
  [class*='line-clamp-'] {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  .line-clamp-1 {
    -webkit-line-clamp: 1;
  }
  .line-clamp-2 {
    -webkit-line-clamp: 2;
  }
  .line-clamp-3 {
    -webkit-line-clamp: 3;
  }
  .line-clamp-4 {
    -webkit-line-clamp: 4;
  }
  .line-clamp-5 {
    -webkit-line-clamp: 5;
  }
  .line-clamp-6 {
    -webkit-line-clamp: 6;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }
  .text-warning {
    color: var(--lumo-warning-text-color);
  }
  .text-warning-contrast {
    color: var(--lumo-warning-contrast-color);
  }

  /* == Text decoration === */
  .line-through {
    text-decoration-line: line-through;
  }
  .no-underline {
    text-decoration-line: none;
  }
  .underline {
    text-decoration-line: underline;
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-break-spaces {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nu=ot`
${Oy}
${Ay}
${Iy}
${Fy}
${Uy}
${jy}
${Vy}
${By}
${Hy}
${Wy}
${Qy}
`;ea("",Nu,{moduleId:"lumo-utility"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */sr("utility",Nu);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var i="ShadyCSS"in window&&!ShadyCSS.nativeShadow,r=document.implementation.createHTMLDocument(""),l=new WeakMap,s=typeof DOMException=="object"?Error:DOMException,c=Object.defineProperty,f=Array.prototype.forEach,p=/@import.+?;?$/gm;function g(L){var F=L.replace(p,"");return F!==L&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),F.trim()}function m(L){return"isConnected"in L?L.isConnected:document.contains(L)}function E(L){return L.filter(function(F,se){return L.indexOf(F)===se})}function S(L,F){return L.filter(function(se){return F.indexOf(se)===-1})}function w(L){L.parentNode.removeChild(L)}function z(L){return L.shadowRoot||l.get(L)}var N=["addRule","deleteRule","insertRule","removeRule"],B=CSSStyleSheet,M=B.prototype;M.replace=function(){return Promise.reject(new s("Can't call replace on non-constructed CSSStyleSheets."))},M.replaceSync=function(){throw new s("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function H(L){return typeof L=="object"?be.isPrototypeOf(L)||M.isPrototypeOf(L):!1}function ve(L){return typeof L=="object"?M.isPrototypeOf(L):!1}var Y=new WeakMap,ke=new WeakMap,V=new WeakMap,ue=new WeakMap;function R(L,F){var se=document.createElement("style");return V.get(L).set(F,se),ke.get(L).push(F),se}function ye(L,F){return V.get(L).get(F)}function le(L,F){V.get(L).delete(F),ke.set(L,ke.get(L).filter(function(se){return se!==F}))}function ae(L,F){requestAnimationFrame(function(){F.textContent=Y.get(L).textContent,ue.get(L).forEach(function(se){return F.sheet[se.method].apply(F.sheet,se.args)})})}function xe(L){if(!Y.has(L))throw new TypeError("Illegal invocation")}function Ae(){var L=this,F=document.createElement("style");r.body.appendChild(F),Y.set(L,F),ke.set(L,[]),V.set(L,new WeakMap),ue.set(L,[])}var be=Ae.prototype;be.replace=function(F){try{return this.replaceSync(F),Promise.resolve(this)}catch(se){return Promise.reject(se)}},be.replaceSync=function(F){if(xe(this),typeof F=="string"){var se=this;Y.get(se).textContent=g(F),ue.set(se,[]),ke.get(se).forEach(function(Re){Re.isConnected()&&ae(se,ye(se,Re))})}},c(be,"cssRules",{configurable:!0,enumerable:!0,get:function(){return xe(this),Y.get(this).sheet.cssRules}}),c(be,"media",{configurable:!0,enumerable:!0,get:function(){return xe(this),Y.get(this).sheet.media}}),N.forEach(function(L){be[L]=function(){var F=this;xe(F);var se=arguments;ue.get(F).push({method:L,args:se}),ke.get(F).forEach(function(qe){if(qe.isConnected()){var We=ye(F,qe).sheet;We[L].apply(We,se)}});var Re=Y.get(F).sheet;return Re[L].apply(Re,se)}}),c(Ae,Symbol.hasInstance,{configurable:!0,value:H});var Le={childList:!0,subtree:!0},_e=new WeakMap;function De(L){var F=_e.get(L);return F||(F=new fe(L),_e.set(L,F)),F}function Fe(L){c(L.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return De(this).sheets},set:function(F){De(this).update(F)}})}function he(L,F){for(var se=document.createNodeIterator(L,NodeFilter.SHOW_ELEMENT,function(qe){return z(qe)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),Re=void 0;Re=se.nextNode();)F(z(Re))}var W=new WeakMap,te=new WeakMap,Q=new WeakMap;function k(L,F){return F instanceof HTMLStyleElement&&te.get(L).some(function(se){return ye(se,L)})}function D(L){var F=W.get(L);return F instanceof Document?F.body:F}function pe(L){var F=document.createDocumentFragment(),se=te.get(L),Re=Q.get(L),qe=D(L);Re.disconnect(),se.forEach(function(We){F.appendChild(ye(We,L)||R(We,L))}),qe.insertBefore(F,null),Re.observe(qe,Le),se.forEach(function(We){ae(We,ye(We,L))})}function fe(L){var F=this;F.sheets=[],W.set(F,L),te.set(F,[]),Q.set(F,new MutationObserver(function(se,Re){if(!document){Re.disconnect();return}se.forEach(function(qe){i||f.call(qe.addedNodes,function(We){We instanceof Element&&he(We,function(Bt){De(Bt).connect()})}),f.call(qe.removedNodes,function(We){We instanceof Element&&(k(F,We)&&pe(F),i||he(We,function(Bt){De(Bt).disconnect()}))})})}))}if(fe.prototype={isConnected:function(){var L=W.get(this);return L instanceof Document?L.readyState!=="loading":m(L.host)},connect:function(){var L=D(this);Q.get(this).observe(L,Le),te.get(this).length>0&&pe(this),he(L,function(F){De(F).connect()})},disconnect:function(){Q.get(this).disconnect()},update:function(L){var F=this,se=W.get(F)===document?"Document":"ShadowRoot";if(!Array.isArray(L))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+se+": Iterator getter is not callable.");if(!L.every(H))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+se+": Failed to convert value to 'CSSStyleSheet'");if(L.some(ve))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+se+": Can't adopt non-constructed stylesheets");F.sheets=L;var Re=te.get(F),qe=E(L),We=S(Re,qe);We.forEach(function(Bt){w(ye(Bt,F)),le(Bt,F)}),te.set(F,qe),F.isConnected()&&qe.length>0&&pe(F)}},window.CSSStyleSheet=Ae,Fe(Document),"ShadowRoot"in window){Fe(ShadowRoot);var Se=Element.prototype,Ee=Se.attachShadow;Se.attachShadow=function(F){var se=Ee.call(this,F);return F.mode==="closed"&&l.set(this,se),se}}var Pe=De(document);Pe.isConnected()?Pe.connect():document.addEventListener("DOMContentLoaded",Pe.connect.bind(Pe))})();const{toString:Ky}=Object.prototype;function Gy(i){return Ky.call(i)==="[object RegExp]"}function Yy(i,{preserve:r=!0,whitespace:l=!0,all:s}={}){if(s)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let c=r,f;typeof r=="function"?(c=!1,f=r):Gy(r)&&(c=!1,f=S=>r.test(S));let p=!1,g="",m="",E="";for(let S=0;S<i.length;S++){if(g=i[S],i[S-1]!=="\\"&&(g==='"'||g==="'")&&(p===g?p=!1:p||(p=g)),!p&&g==="/"&&i[S+1]==="*"){const w=i[S+2]==="!";let z=S+2;for(;z<i.length;z++){if(i[z]==="*"&&i[z+1]==="/"){c&&w||f&&f(m)?E+=`/*${m}*/`:l||(i[z+2]===`
`?z++:i[z+2]+i[z+3]===`\r
`&&(z+=2)),m="";break}m+=i[z]}S=z+1;continue}E+=g}return E}const Xy=CSSStyleSheet.toString().includes("document.createElement"),qy=(i,r)=>{const l=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(i)!=null&&(i=Yy(i));for(var s,c=i;(s=l.exec(i))!==null;){c=c.replace(s[0],"");const f=document.createElement("link");f.rel="stylesheet",f.href=s[2]||s[4];const p=s[1]||s[5];p&&(f.media=p),r===document?document.head.appendChild(f):r.appendChild(f)}return c},Jy=(i,r,l)=>(l?r.adoptedStyleSheets=[i,...r.adoptedStyleSheets]:r.adoptedStyleSheets=[...r.adoptedStyleSheets,i],()=>{r.adoptedStyleSheets=r.adoptedStyleSheets.filter(s=>s!==i)}),Zy=(i,r,l)=>{const s=new CSSStyleSheet;return s.replaceSync(i),Xy?Jy(s,r,l):(l?r.adoptedStyleSheets.splice(0,0,s):r.adoptedStyleSheets.push(s),()=>{r.adoptedStyleSheets.splice(r.adoptedStyleSheets.indexOf(s),1)})},e0=(i,r)=>{const l=document.createElement("style");return l.type="text/css",l.textContent=i,document.head.insertBefore(l,void 0),()=>{l.remove()}},co=(i,r,l,s)=>{if(l===document){const f=t0(i);if(window.Vaadin.theme.injectedGlobalCss.indexOf(f)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(f)}const c=qy(i,l);return l===document?e0(c):Zy(c,l,s)};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function np(i){let r,l,s=2166136261;for(r=0,l=i.length;r<l;r++)s^=i.charCodeAt(r),s+=(s<<1)+(s<<4)+(s<<7)+(s<<8)+(s<<24);return("0000000"+(s>>>0).toString(16)).substr(-8)}function t0(i){let r=np(i);return r+np(r+i)}document["_vaadintheme_my-theme_componentCss"]||(document["_vaadintheme_my-theme_componentCss"]=!0);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jp=ot`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;sr("spacing-props",Jp);const n0=ot`.centered-content{margin:0 auto;max-width:250px}vaadin-text-field.bordered::part(input-field){box-shadow:inset 0 0 0 1px var(--lumo-contrast-30pct);background-color:var(--lumo-base-color)}`,r0=i=>{const r=[];i!==document&&(r.push(co(Tu.cssText,"",i,!0)),r.push(co(zu.cssText,"",i,!0)),r.push(co(Jp.cssText,"",i,!0)),r.push(co(Lu.cssText,"",i,!0)),r.push(co(Nu.cssText,"",i,!0)),r.push(co(n0.toString(),"",i)))},o0=r0;o0(document);export{Fv as B,gt as E,i0 as O,h0 as T,sr as a,ea as b,xy as c,zy as d,Hv as e,Vv as f,Bv as g,Or as h,ot as i,s0 as j,$ as k,jh as l,vi as m,_p as r,Qp as t,Nv as x};
