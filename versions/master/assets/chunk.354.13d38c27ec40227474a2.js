/*! For license information please see chunk.354.13d38c27ec40227474a2.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[354],{7544:e=>{e.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}},2993:function(e){var t
t=function(){return function(){var e={134:function(e,t,r){"use strict"
r.d(t,{default:function(){return y}})
var n=r(279),i=r.n(n),o=r(370),a=r.n(o),s=r(817),u=r.n(s)
function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}var r
return r=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e="rtl"===document.documentElement.getAttribute("dir")
this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px"
var t=window.pageYOffset||document.documentElement.scrollTop
return this.fakeElem.style.top="".concat(t,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,t=this.createFakeElement()
this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(t),this.selectedText=u()(t),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=u()(this.target),this.copyText()}},{key:"copyText",value:function(){var e
try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy"
if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==l(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element')
if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute')
if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
this._target=e}},get:function(){return this._target}}],r&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,r),e}(),p=c
function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function g(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e,t){var r="data-clipboard-".concat(e)
if(t.hasAttribute(r))return t.getAttribute(r)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(u,e)
var t,r,n,i,o,s=(i=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(i)
if(o){var r=m(this).constructor
e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments)
return g(this,e)})
function u(e,t){var r
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=s.call(this)).resolveOptions(t),r.listenClick(e),r}return t=u,r=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===f(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this
this.listener=a()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget
this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new p({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return b("action",e)}},{key:"defaultTarget",value:function(e){var t=b("target",e)
if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return b("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],n=[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,r=!!document.queryCommandSupported
return t.forEach((function(e){r=r&&!!document.queryCommandSupported(e)})),r}}],r&&d(t.prototype,r),n&&d(t,n),u}(i()),y=v},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype
t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e
e=e.parentNode}}},438:function(e,t,r){var n=r(828)
function i(e,t,r,n,i){var a=o.apply(this,arguments)
return e.addEventListener(r,a,i),{destroy:function(){e.removeEventListener(r,a,i)}}}function o(e,t,r,i){return function(r){r.delegateTarget=n(r.target,t),r.delegateTarget&&i.call(e,r)}}e.exports=function(e,t,r,n,o){return"function"==typeof e.addEventListener?i.apply(null,arguments):"function"==typeof r?i.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return i(e,t,r,n,o)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var r=Object.prototype.toString.call(e)
return void 0!==e&&("[object NodeList]"===r||"[object HTMLCollection]"===r)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,r){var n=r(879),i=r(438)
e.exports=function(e,t,r){if(!e&&!t&&!r)throw new Error("Missing required arguments")
if(!n.string(t))throw new TypeError("Second argument must be a String")
if(!n.fn(r))throw new TypeError("Third argument must be a Function")
if(n.node(e))return function(e,t,r){return e.addEventListener(t,r),{destroy:function(){e.removeEventListener(t,r)}}}(e,t,r)
if(n.nodeList(e))return function(e,t,r){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,r)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,r)}))}}}(e,t,r)
if(n.string(e))return function(e,t,r){return i(document.body,e,t,r)}(e,t,r)
throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t
if("SELECT"===e.nodeName)e.focus(),t=e.value
else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var r=e.hasAttribute("readonly")
r||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),r||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus()
var n=window.getSelection(),i=document.createRange()
i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,r){var n=this.e||(this.e={})
return(n[e]||(n[e]=[])).push({fn:t,ctx:r}),this},once:function(e,t,r){var n=this
function i(){n.off(e,i),t.apply(r,arguments)}return i._=t,this.on(e,i,r)},emit:function(e){for(var t=[].slice.call(arguments,1),r=((this.e||(this.e={}))[e]||[]).slice(),n=0,i=r.length;n<i;n++)r[n].fn.apply(r[n].ctx,t)
return this},off:function(e,t){var r=this.e||(this.e={}),n=r[e],i=[]
if(n&&t)for(var o=0,a=n.length;o<a;o++)n[o].fn!==t&&n[o].fn._!==t&&i.push(n[o])
return i.length?r[e]=i:delete r[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={}
function r(n){if(t[n])return t[n].exports
var i=t[n]={exports:{}}
return e[n](i,i.exports,r),i.exports}return r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r(134)}().default},e.exports=t()},8221:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.attributeRules=void 0
var n=r(7544),i=/[-[\]{}()*+?.,\\^$|#\s]/g
function o(e){return e.replace(i,"\\$&")}var a=new Set(["accept","accept-charset","align","alink","axis","bgcolor","charset","checked","clear","codetype","color","compact","declare","defer","dir","direction","disabled","enctype","face","frame","hreflang","http-equiv","lang","language","link","media","method","multiple","nohref","noresize","noshade","nowrap","readonly","rel","rev","rules","scope","scrolling","selected","shape","target","text","type","valign","valuetype","vlink"])
function s(e,t){return"boolean"==typeof e.ignoreCase?e.ignoreCase:"quirks"===e.ignoreCase?!!t.quirksMode:!t.xmlMode&&a.has(e.name)}t.attributeRules={equals:function(e,t,r){var n=r.adapter,i=t.name,o=t.value
return s(t,r)?(o=o.toLowerCase(),function(t){var r=n.getAttributeValue(t,i)
return null!=r&&r.length===o.length&&r.toLowerCase()===o&&e(t)}):function(t){return n.getAttributeValue(t,i)===o&&e(t)}},hyphen:function(e,t,r){var n=r.adapter,i=t.name,o=t.value,a=o.length
return s(t,r)?(o=o.toLowerCase(),function(t){var r=n.getAttributeValue(t,i)
return null!=r&&(r.length===a||"-"===r.charAt(a))&&r.substr(0,a).toLowerCase()===o&&e(t)}):function(t){var r=n.getAttributeValue(t,i)
return null!=r&&(r.length===a||"-"===r.charAt(a))&&r.substr(0,a)===o&&e(t)}},element:function(e,t,r){var i=r.adapter,a=t.name,u=t.value
if(/\s/.test(u))return n.falseFunc
var l=new RegExp("(?:^|\\s)".concat(o(u),"(?:$|\\s)"),s(t,r)?"i":"")
return function(t){var r=i.getAttributeValue(t,a)
return null!=r&&r.length>=u.length&&l.test(r)&&e(t)}},exists:function(e,t,r){var n=t.name,i=r.adapter
return function(t){return i.hasAttrib(t,n)&&e(t)}},start:function(e,t,r){var i=r.adapter,o=t.name,a=t.value,u=a.length
return 0===u?n.falseFunc:s(t,r)?(a=a.toLowerCase(),function(t){var r=i.getAttributeValue(t,o)
return null!=r&&r.length>=u&&r.substr(0,u).toLowerCase()===a&&e(t)}):function(t){var r
return!!(null===(r=i.getAttributeValue(t,o))||void 0===r?void 0:r.startsWith(a))&&e(t)}},end:function(e,t,r){var i=r.adapter,o=t.name,a=t.value,u=-a.length
return 0===u?n.falseFunc:s(t,r)?(a=a.toLowerCase(),function(t){var r
return(null===(r=i.getAttributeValue(t,o))||void 0===r?void 0:r.substr(u).toLowerCase())===a&&e(t)}):function(t){var r
return!!(null===(r=i.getAttributeValue(t,o))||void 0===r?void 0:r.endsWith(a))&&e(t)}},any:function(e,t,r){var i=r.adapter,a=t.name,u=t.value
if(""===u)return n.falseFunc
if(s(t,r)){var l=new RegExp(o(u),"i")
return function(t){var r=i.getAttributeValue(t,a)
return null!=r&&r.length>=u.length&&l.test(r)&&e(t)}}return function(t){var r
return!!(null===(r=i.getAttributeValue(t,a))||void 0===r?void 0:r.includes(u))&&e(t)}},not:function(e,t,r){var n=r.adapter,i=t.name,o=t.value
return""===o?function(t){return!!n.getAttributeValue(t,i)&&e(t)}:s(t,r)?(o=o.toLowerCase(),function(t){var r=n.getAttributeValue(t,i)
return(null==r||r.length!==o.length||r.toLowerCase()!==o)&&e(t)}):function(t){return n.getAttributeValue(t,i)!==o&&e(t)}}}},3999:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.compileToken=t.compileUnsafe=t.compile=void 0
var i=r(8938),o=r(7544),a=n(r(1766)),s=r(157),u=r(7849),l=r(457)
function c(e,t,r){return g("string"==typeof e?(0,i.parse)(e):e,t,r)}function p(e){return"pseudo"===e.type&&("scope"===e.name||Array.isArray(e.data)&&e.data.some((function(e){return e.some(p)})))}t.compile=function(e,t,r){var n=c(e,t,r)
return(0,l.ensureIsTag)(n,t.adapter)},t.compileUnsafe=c
var f={type:i.SelectorType.Descendant},d={type:"_flexibleDescendant"},h={type:i.SelectorType.Pseudo,name:"scope",data:null}
function g(e,t,r){var n;(e=e.filter((function(e){return e.length>0}))).forEach(a.default),r=null!==(n=t.context)&&void 0!==n?n:r
var i=Array.isArray(r),c=r&&(Array.isArray(r)?r:[r])
!function(e,t,r){for(var n=t.adapter,i=!!(null==r?void 0:r.every((function(e){var t=n.isTag(e)&&n.getParent(e)
return e===l.PLACEHOLDER_ELEMENT||t&&n.isTag(t)}))),o=0,a=e;o<a.length;o++){var u=a[o]
if(u.length>0&&(0,s.isTraversal)(u[0])&&"descendant"!==u[0].type);else{if(!i||u.some(p))continue
u.unshift(f)}u.unshift(h)}}(e,t,c)
var b=!1,v=e.map((function(e){if(e.length>=2){var r=e[0],n=e[1]
"pseudo"!==r.type||"scope"!==r.name||(i&&"descendant"===n.type?e[1]=d:"adjacent"!==n.type&&"sibling"!==n.type||(b=!0))}return function(e,t,r){var n
return e.reduce((function(e,n){return e===o.falseFunc?o.falseFunc:(0,u.compileGeneralSelector)(e,n,t,r,g)}),null!==(n=t.rootFunc)&&void 0!==n?n:o.trueFunc)}(e,t,c)})).reduce(m,o.falseFunc)
return v.shouldTestNextSiblings=b,v}function m(e,t){return t===o.falseFunc||e===o.trueFunc?e:e===o.falseFunc||t===o.trueFunc?t:function(r){return e(r)||t(r)}}t.compileToken=g},7849:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.compileGeneralSelector=void 0
var n=r(8221),i=r(8896),o=r(8938)
t.compileGeneralSelector=function(e,t,r,a,s){var u=r.adapter,l=r.equals
switch(t.type){case o.SelectorType.PseudoElement:throw new Error("Pseudo-elements are not supported by css-select")
case o.SelectorType.ColumnCombinator:throw new Error("Column combinators are not yet supported by css-select")
case o.SelectorType.Attribute:if(null!=t.namespace)throw new Error("Namespaced attributes are not yet supported by css-select")
return r.xmlMode&&!r.lowerCaseAttributeNames||(t.name=t.name.toLowerCase()),n.attributeRules[t.action](e,t,r)
case o.SelectorType.Pseudo:return(0,i.compilePseudoSelector)(e,t,r,a,s)
case o.SelectorType.Tag:if(null!=t.namespace)throw new Error("Namespaced tag names are not yet supported by css-select")
var c=t.name
return r.xmlMode&&!r.lowerCaseTags||(c=c.toLowerCase()),function(t){return u.getName(t)===c&&e(t)}
case o.SelectorType.Descendant:if(!1===r.cacheResults||"undefined"==typeof WeakSet)return function(t){for(var r=t;r=u.getParent(r);)if(u.isTag(r)&&e(r))return!0
return!1}
var p=new WeakSet
return function(t){for(var r=t;r=u.getParent(r);)if(!p.has(r)){if(u.isTag(r)&&e(r))return!0
p.add(r)}return!1}
case"_flexibleDescendant":return function(t){var r=t
do{if(u.isTag(r)&&e(r))return!0}while(r=u.getParent(r))
return!1}
case o.SelectorType.Parent:return function(t){return u.getChildren(t).some((function(t){return u.isTag(t)&&e(t)}))}
case o.SelectorType.Child:return function(t){var r=u.getParent(t)
return null!=r&&u.isTag(r)&&e(r)}
case o.SelectorType.Sibling:return function(t){for(var r=u.getSiblings(t),n=0;n<r.length;n++){var i=r[n]
if(l(t,i))break
if(u.isTag(i)&&e(i))return!0}return!1}
case o.SelectorType.Adjacent:return u.prevElementSibling?function(t){var r=u.prevElementSibling(t)
return null!=r&&e(r)}:function(t){for(var r,n=u.getSiblings(t),i=0;i<n.length;i++){var o=n[i]
if(l(t,o))break
u.isTag(o)&&(r=o)}return!!r&&e(r)}
case o.SelectorType.Universal:if(null!=t.namespace&&"*"!==t.namespace)throw new Error("Namespaced universal selectors are not yet supported by css-select")
return e}}},7133:function(e,t,r){"use strict"
var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return i(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.aliases=t.pseudos=t.filters=t.is=t.selectOne=t.selectAll=t.prepareContext=t._compileToken=t._compileUnsafe=t.compile=void 0
var a=o(r(1445)),s=r(7544),u=r(3999),l=r(457),c=function(e,t){return e===t},p={adapter:a,equals:c}
function f(e){var t,r,n,i,o=null!=e?e:p
return null!==(t=o.adapter)&&void 0!==t||(o.adapter=a),null!==(r=o.equals)&&void 0!==r||(o.equals=null!==(i=null===(n=o.adapter)||void 0===n?void 0:n.equals)&&void 0!==i?i:c),o}function d(e){return function(t,r,n){var i=f(r)
return e(t,i,n)}}function h(e){return function(t,r,n){var i=f(n)
"function"!=typeof t&&(t=(0,u.compileUnsafe)(t,i,r))
var o=g(r,i.adapter,t.shouldTestNextSiblings)
return e(t,o,i)}}function g(e,t,r){return void 0===r&&(r=!1),r&&(e=function(e,t){for(var r=Array.isArray(e)?e.slice(0):[e],n=r.length,i=0;i<n;i++){var o=(0,l.getNextSiblings)(r[i],t)
r.push.apply(r,o)}return r}(e,t)),Array.isArray(e)?t.removeSubsets(e):t.getChildren(e)}t.compile=d(u.compile),t._compileUnsafe=d(u.compileUnsafe),t._compileToken=d(u.compileToken),t.prepareContext=g,t.selectAll=h((function(e,t,r){return e!==s.falseFunc&&t&&0!==t.length?r.adapter.findAll(e,t):[]})),t.selectOne=h((function(e,t,r){return e!==s.falseFunc&&t&&0!==t.length?r.adapter.findOne(e,t):null})),t.is=function(e,t,r){var n=f(r)
return("function"==typeof t?t:(0,u.compile)(t,n))(e)},t.default=t.selectAll
var m=r(8896)
Object.defineProperty(t,"filters",{enumerable:!0,get:function(){return m.filters}}),Object.defineProperty(t,"pseudos",{enumerable:!0,get:function(){return m.pseudos}}),Object.defineProperty(t,"aliases",{enumerable:!0,get:function(){return m.aliases}})},157:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.isTraversal=t.procedure=void 0,t.procedure={universal:50,tag:30,attribute:1,pseudo:0,"pseudo-element":0,"column-combinator":-1,descendant:-1,child:-1,parent:-1,sibling:-1,adjacent:-1,_flexibleDescendant:-1},t.isTraversal=function(e){return t.procedure[e.type]<0}},4473:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.aliases=void 0,t.aliases={"any-link":":is(a, area, link)[href]",link:":any-link:not(:visited)",disabled:":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",enabled:":not(:disabled)",checked:":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",required:":is(input, select, textarea)[required]",optional:":is(input, select, textarea):not([required])",selected:"option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",checkbox:"[type=checkbox]",file:"[type=file]",password:"[type=password]",radio:"[type=radio]",reset:"[type=reset]",image:"[type=image]",submit:"[type=submit]",parent:":not(:empty)",header:":is(h1, h2, h3, h4, h5, h6)",button:":is(button, input[type=button])",input:":is(input, textarea, select, button)",text:"input:is(:not([type!='']), [type=text])"}},6636:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.filters=void 0
var i=n(r(2256)),o=r(7544)
function a(e,t){return function(r){var n=t.getParent(r)
return null!=n&&t.isTag(n)&&e(r)}}function s(e){return function(t,r,n){var i=n.adapter[e]
return"function"!=typeof i?o.falseFunc:function(e){return i(e)&&t(e)}}}t.filters={contains:function(e,t,r){var n=r.adapter
return function(r){return e(r)&&n.getText(r).includes(t)}},icontains:function(e,t,r){var n=r.adapter,i=t.toLowerCase()
return function(t){return e(t)&&n.getText(t).toLowerCase().includes(i)}},"nth-child":function(e,t,r){var n=r.adapter,s=r.equals,u=(0,i.default)(t)
return u===o.falseFunc?o.falseFunc:u===o.trueFunc?a(e,n):function(t){for(var r=n.getSiblings(t),i=0,o=0;o<r.length&&!s(t,r[o]);o++)n.isTag(r[o])&&i++
return u(i)&&e(t)}},"nth-last-child":function(e,t,r){var n=r.adapter,s=r.equals,u=(0,i.default)(t)
return u===o.falseFunc?o.falseFunc:u===o.trueFunc?a(e,n):function(t){for(var r=n.getSiblings(t),i=0,o=r.length-1;o>=0&&!s(t,r[o]);o--)n.isTag(r[o])&&i++
return u(i)&&e(t)}},"nth-of-type":function(e,t,r){var n=r.adapter,s=r.equals,u=(0,i.default)(t)
return u===o.falseFunc?o.falseFunc:u===o.trueFunc?a(e,n):function(t){for(var r=n.getSiblings(t),i=0,o=0;o<r.length;o++){var a=r[o]
if(s(t,a))break
n.isTag(a)&&n.getName(a)===n.getName(t)&&i++}return u(i)&&e(t)}},"nth-last-of-type":function(e,t,r){var n=r.adapter,s=r.equals,u=(0,i.default)(t)
return u===o.falseFunc?o.falseFunc:u===o.trueFunc?a(e,n):function(t){for(var r=n.getSiblings(t),i=0,o=r.length-1;o>=0;o--){var a=r[o]
if(s(t,a))break
n.isTag(a)&&n.getName(a)===n.getName(t)&&i++}return u(i)&&e(t)}},root:function(e,t,r){var n=r.adapter
return function(t){var r=n.getParent(t)
return(null==r||!n.isTag(r))&&e(t)}},scope:function(e,r,n,i){var o=n.equals
return i&&0!==i.length?1===i.length?function(t){return o(i[0],t)&&e(t)}:function(t){return i.includes(t)&&e(t)}:t.filters.root(e,r,n)},hover:s("isHovered"),visited:s("isVisited"),active:s("isActive")}},8896:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.compilePseudoSelector=t.aliases=t.pseudos=t.filters=void 0
var n=r(7544),i=r(8938),o=r(6636)
Object.defineProperty(t,"filters",{enumerable:!0,get:function(){return o.filters}})
var a=r(7191)
Object.defineProperty(t,"pseudos",{enumerable:!0,get:function(){return a.pseudos}})
var s=r(4473)
Object.defineProperty(t,"aliases",{enumerable:!0,get:function(){return s.aliases}})
var u=r(457)
t.compilePseudoSelector=function(e,t,r,l,c){var p=t.name,f=t.data
if(Array.isArray(f))return u.subselects[p](e,f,r,l,c)
if(p in s.aliases){if(null!=f)throw new Error("Pseudo ".concat(p," doesn't have any arguments"))
var d=(0,i.parse)(s.aliases[p])
return u.subselects.is(e,d,r,l,c)}if(p in o.filters)return o.filters[p](e,f,r,l)
if(p in a.pseudos){var h=a.pseudos[p]
return(0,a.verifyPseudoArgs)(h,p,f),h===n.falseFunc?n.falseFunc:e===n.trueFunc?function(e){return h(e,r,f)}:function(t){return h(t,r,f)&&e(t)}}throw new Error("unmatched pseudo-class :".concat(p))}},7191:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.verifyPseudoArgs=t.pseudos=void 0,t.pseudos={empty:function(e,t){var r=t.adapter
return!r.getChildren(e).some((function(e){return r.isTag(e)||""!==r.getText(e)}))},"first-child":function(e,t){var r=t.adapter,n=t.equals,i=r.getSiblings(e).find((function(e){return r.isTag(e)}))
return null!=i&&n(e,i)},"last-child":function(e,t){for(var r=t.adapter,n=t.equals,i=r.getSiblings(e),o=i.length-1;o>=0;o--){if(n(e,i[o]))return!0
if(r.isTag(i[o]))break}return!1},"first-of-type":function(e,t){for(var r=t.adapter,n=t.equals,i=r.getSiblings(e),o=r.getName(e),a=0;a<i.length;a++){var s=i[a]
if(n(e,s))return!0
if(r.isTag(s)&&r.getName(s)===o)break}return!1},"last-of-type":function(e,t){for(var r=t.adapter,n=t.equals,i=r.getSiblings(e),o=r.getName(e),a=i.length-1;a>=0;a--){var s=i[a]
if(n(e,s))return!0
if(r.isTag(s)&&r.getName(s)===o)break}return!1},"only-of-type":function(e,t){var r=t.adapter,n=t.equals,i=r.getName(e)
return r.getSiblings(e).every((function(t){return n(e,t)||!r.isTag(t)||r.getName(t)!==i}))},"only-child":function(e,t){var r=t.adapter,n=t.equals
return r.getSiblings(e).every((function(t){return n(e,t)||!r.isTag(t)}))}},t.verifyPseudoArgs=function(e,t,r){if(null===r){if(e.length>2)throw new Error("pseudo-selector :".concat(t," requires an argument"))}else if(2===e.length)throw new Error("pseudo-selector :".concat(t," doesn't have any arguments"))}},457:function(e,t,r){"use strict"
var n=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i])
return e.concat(n||Array.prototype.slice.call(t))}
Object.defineProperty(t,"__esModule",{value:!0}),t.subselects=t.getNextSiblings=t.ensureIsTag=t.PLACEHOLDER_ELEMENT=void 0
var i=r(7544),o=r(157)
function a(e,t){return e===i.falseFunc?i.falseFunc:function(r){return t.isTag(r)&&e(r)}}function s(e,t){var r=t.getSiblings(e)
if(r.length<=1)return[]
var n=r.indexOf(e)
return n<0||n===r.length-1?[]:r.slice(n+1).filter(t.isTag)}t.PLACEHOLDER_ELEMENT={},t.ensureIsTag=a,t.getNextSiblings=s
var u=function(e,t,r,n,i){var o=i(t,{xmlMode:!!r.xmlMode,adapter:r.adapter,equals:r.equals},n)
return function(t){return o(t)&&e(t)}}
t.subselects={is:u,matches:u,where:u,not:function(e,t,r,n,o){var a=o(t,{xmlMode:!!r.xmlMode,adapter:r.adapter,equals:r.equals},n)
return a===i.falseFunc?e:a===i.trueFunc?i.falseFunc:function(t){return!a(t)&&e(t)}},has:function(e,r,u,l,c){var p=u.adapter,f={xmlMode:!!u.xmlMode,adapter:p,equals:u.equals},d=r.some((function(e){return e.some(o.isTraversal)}))?[t.PLACEHOLDER_ELEMENT]:void 0,h=c(r,f,d)
if(h===i.falseFunc)return i.falseFunc
if(h===i.trueFunc)return function(t){return p.getChildren(t).some(p.isTag)&&e(t)}
var g=a(h,p),m=h.shouldTestNextSiblings,b=void 0!==m&&m
return d?function(t){d[0]=t
var r=p.getChildren(t),i=b?n(n([],r,!0),s(t,p),!0):r
return e(t)&&p.existsOne(g,i)}:function(t){return e(t)&&p.existsOne(g,p.getChildren(t))}}}},1766:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=r(8938),i=r(157),o={exists:10,equals:8,not:7,start:6,end:6,any:5,hyphen:4,element:4}
function a(e){var t=i.procedure[e.type]
if(e.type===n.SelectorType.Attribute)(t=o[e.action])===o.equals&&"id"===e.name&&(t=9),e.ignoreCase&&(t>>=1)
else if(e.type===n.SelectorType.Pseudo)if(e.data)if("has"===e.name||"contains"===e.name)t=0
else if(Array.isArray(e.data)){t=0
for(var r=0;r<e.data.length;r++)if(1===e.data[r].length){var s=a(e.data[r][0])
if(0===s){t=0
break}s>t&&(t=s)}e.data.length>1&&t>0&&(t-=1)}else t=1
else t=3
return t}t.default=function(e){for(var t=e.map(a),r=1;r<e.length;r++){var n=t[r]
if(!(n<0))for(var i=r-1;i>=0&&n<t[i];i--){var o=e[i+1]
e[i+1]=e[i],e[i]=o,t[i+1]=t[i],t[i]=n}}}},437:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.attributeNames=t.elementNames=void 0,t.elementNames=new Map([["altglyph","altGlyph"],["altglyphdef","altGlyphDef"],["altglyphitem","altGlyphItem"],["animatecolor","animateColor"],["animatemotion","animateMotion"],["animatetransform","animateTransform"],["clippath","clipPath"],["feblend","feBlend"],["fecolormatrix","feColorMatrix"],["fecomponenttransfer","feComponentTransfer"],["fecomposite","feComposite"],["feconvolvematrix","feConvolveMatrix"],["fediffuselighting","feDiffuseLighting"],["fedisplacementmap","feDisplacementMap"],["fedistantlight","feDistantLight"],["fedropshadow","feDropShadow"],["feflood","feFlood"],["fefunca","feFuncA"],["fefuncb","feFuncB"],["fefuncg","feFuncG"],["fefuncr","feFuncR"],["fegaussianblur","feGaussianBlur"],["feimage","feImage"],["femerge","feMerge"],["femergenode","feMergeNode"],["femorphology","feMorphology"],["feoffset","feOffset"],["fepointlight","fePointLight"],["fespecularlighting","feSpecularLighting"],["fespotlight","feSpotLight"],["fetile","feTile"],["feturbulence","feTurbulence"],["foreignobject","foreignObject"],["glyphref","glyphRef"],["lineargradient","linearGradient"],["radialgradient","radialGradient"],["textpath","textPath"]]),t.attributeNames=new Map([["definitionurl","definitionURL"],["attributename","attributeName"],["attributetype","attributeType"],["basefrequency","baseFrequency"],["baseprofile","baseProfile"],["calcmode","calcMode"],["clippathunits","clipPathUnits"],["diffuseconstant","diffuseConstant"],["edgemode","edgeMode"],["filterunits","filterUnits"],["glyphref","glyphRef"],["gradienttransform","gradientTransform"],["gradientunits","gradientUnits"],["kernelmatrix","kernelMatrix"],["kernelunitlength","kernelUnitLength"],["keypoints","keyPoints"],["keysplines","keySplines"],["keytimes","keyTimes"],["lengthadjust","lengthAdjust"],["limitingconeangle","limitingConeAngle"],["markerheight","markerHeight"],["markerunits","markerUnits"],["markerwidth","markerWidth"],["maskcontentunits","maskContentUnits"],["maskunits","maskUnits"],["numoctaves","numOctaves"],["pathlength","pathLength"],["patterncontentunits","patternContentUnits"],["patterntransform","patternTransform"],["patternunits","patternUnits"],["pointsatx","pointsAtX"],["pointsaty","pointsAtY"],["pointsatz","pointsAtZ"],["preservealpha","preserveAlpha"],["preserveaspectratio","preserveAspectRatio"],["primitiveunits","primitiveUnits"],["refx","refX"],["refy","refY"],["repeatcount","repeatCount"],["repeatdur","repeatDur"],["requiredextensions","requiredExtensions"],["requiredfeatures","requiredFeatures"],["specularconstant","specularConstant"],["specularexponent","specularExponent"],["spreadmethod","spreadMethod"],["startoffset","startOffset"],["stddeviation","stdDeviation"],["stitchtiles","stitchTiles"],["surfacescale","surfaceScale"],["systemlanguage","systemLanguage"],["tablevalues","tableValues"],["targetx","targetX"],["targety","targetY"],["textlength","textLength"],["viewbox","viewBox"],["viewtarget","viewTarget"],["xchannelselector","xChannelSelector"],["ychannelselector","yChannelSelector"],["zoomandpan","zoomAndPan"]])},6961:function(e,t,r){"use strict"
var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},n.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r)
return o(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0})
var s=a(r(1439)),u=r(5674),l=r(437),c=new Set(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]),p=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"])
function f(e,t){void 0===t&&(t={})
for(var r=("length"in e?e:[e]),n="",i=0;i<r.length;i++)n+=d(r[i],t)
return n}function d(e,t){switch(e.type){case s.Root:return f(e.children,t)
case s.Directive:case s.Doctype:return"<"+e.data+">"
case s.Comment:return"\x3c!--"+e.data+"--\x3e"
case s.CDATA:return function(e){return"<![CDATA["+e.children[0].data+"]]>"}(e)
case s.Script:case s.Style:case s.Tag:return function(e,t){var r
"foreign"===t.xmlMode&&(e.name=null!==(r=l.elementNames.get(e.name))&&void 0!==r?r:e.name,e.parent&&h.has(e.parent.name)&&(t=n(n({},t),{xmlMode:!1}))),!t.xmlMode&&g.has(e.name)&&(t=n(n({},t),{xmlMode:"foreign"}))
var i="<"+e.name,o=function(e,t){if(e)return Object.keys(e).map((function(r){var n,i,o=null!==(n=e[r])&&void 0!==n?n:""
return"foreign"===t.xmlMode&&(r=null!==(i=l.attributeNames.get(r))&&void 0!==i?i:r),t.emptyAttrs||t.xmlMode||""!==o?r+'="'+(!1!==t.decodeEntities?u.encodeXML(o):o.replace(/"/g,"&quot;"))+'"':r})).join(" ")}(e.attribs,t)
return o&&(i+=" "+o),0===e.children.length&&(t.xmlMode?!1!==t.selfClosingTags:t.selfClosingTags&&p.has(e.name))?(t.xmlMode||(i+=" "),i+="/>"):(i+=">",e.children.length>0&&(i+=f(e.children,t)),!t.xmlMode&&p.has(e.name)||(i+="</"+e.name+">")),i}(e,t)
case s.Text:return function(e,t){var r=e.data||""
return!1===t.decodeEntities||!t.xmlMode&&e.parent&&c.has(e.parent.name)||(r=u.encodeXML(r)),r}(e,t)}}t.default=f
var h=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]),g=new Set(["svg","math"])},1439:(e,t)=>{"use strict"
var r
Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0,function(e){e.Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",e.Script="script",e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype"}(r=t.ElementType||(t.ElementType={})),t.isTag=function(e){return e.type===r.Tag||e.type===r.Script||e.type===r.Style},t.Root=r.Root,t.Text=r.Text,t.Directive=r.Directive,t.Comment=r.Comment,t.Script=r.Script,t.Style=r.Style,t.Tag=r.Tag,t.CDATA=r.CDATA,t.Doctype=r.Doctype},8551:(e,t)=>{"use strict"
var r
Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0,function(e){e.Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",e.Script="script",e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype"}(r=t.ElementType||(t.ElementType={})),t.isTag=function(e){return e.type===r.Tag||e.type===r.Script||e.type===r.Style},t.Root=r.Root,t.Text=r.Text,t.Directive=r.Directive,t.Comment=r.Comment,t.Script=r.Script,t.Style=r.Style,t.Tag=r.Tag,t.CDATA=r.CDATA,t.Doctype=r.Doctype},7175:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getFeed=void 0
var n=r(3961),i=r(7773)
t.getFeed=function(e){var t=u(p,e)
return t?"feed"===t.name?function(e){var t,r=e.children,n={type:"atom",items:(0,i.getElementsByTagName)("entry",r).map((function(e){var t,r=e.children,n={media:s(r)}
c(n,"id","id",r),c(n,"title","title",r)
var i=null===(t=u("link",r))||void 0===t?void 0:t.attribs.href
i&&(n.link=i)
var o=l("summary",r)||l("content",r)
o&&(n.description=o)
var a=l("updated",r)
return a&&(n.pubDate=new Date(a)),n}))}
c(n,"id","id",r),c(n,"title","title",r)
var o=null===(t=u("link",r))||void 0===t?void 0:t.attribs.href
o&&(n.link=o),c(n,"description","subtitle",r)
var a=l("updated",r)
return a&&(n.updated=new Date(a)),c(n,"author","email",r,!0),n}(t):function(e){var t,r,n=null!==(r=null===(t=u("channel",e.children))||void 0===t?void 0:t.children)&&void 0!==r?r:[],o={type:e.name.substr(0,3),id:"",items:(0,i.getElementsByTagName)("item",e.children).map((function(e){var t=e.children,r={media:s(t)}
c(r,"id","guid",t),c(r,"title","title",t),c(r,"link","link",t),c(r,"description","description",t)
var n=l("pubDate",t)
return n&&(r.pubDate=new Date(n)),r}))}
c(o,"title","title",n),c(o,"link","link",n),c(o,"description","description",n)
var a=l("lastBuildDate",n)
return a&&(o.updated=new Date(a)),c(o,"author","managingEditor",n,!0),o}(t):null}
var o=["url","type","lang"],a=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"]
function s(e){return(0,i.getElementsByTagName)("media:content",e).map((function(e){for(var t=e.attribs,r={medium:t.medium,isDefault:!!t.isDefault},n=0,i=o;n<i.length;n++)t[l=i[n]]&&(r[l]=t[l])
for(var s=0,u=a;s<u.length;s++){var l
t[l=u[s]]&&(r[l]=parseInt(t[l],10))}return t.expression&&(r.expression=t.expression),r}))}function u(e,t){return(0,i.getElementsByTagName)(e,t,!0,1)[0]}function l(e,t,r){return void 0===r&&(r=!1),(0,n.textContent)((0,i.getElementsByTagName)(e,t,r,1)).trim()}function c(e,t,r,n,i){void 0===i&&(i=!1)
var o=l(r,n,i)
o&&(e[t]=o)}function p(e){return"rss"===e||"feed"===e||"rdf:RDF"===e}},750:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.uniqueSort=t.compareDocumentPosition=t.removeSubsets=void 0
var n=r(1363)
function i(e,t){var r=[],i=[]
if(e===t)return 0
for(var o=(0,n.hasChildren)(e)?e:e.parent;o;)r.unshift(o),o=o.parent
for(o=(0,n.hasChildren)(t)?t:t.parent;o;)i.unshift(o),o=o.parent
for(var a=Math.min(r.length,i.length),s=0;s<a&&r[s]===i[s];)s++
if(0===s)return 1
var u=r[s-1],l=u.children,c=r[s],p=i[s]
return l.indexOf(c)>l.indexOf(p)?u===t?20:4:u===e?10:2}t.removeSubsets=function(e){for(var t=e.length;--t>=0;){var r=e[t]
if(t>0&&e.lastIndexOf(r,t-1)>=0)e.splice(t,1)
else for(var n=r.parent;n;n=n.parent)if(e.includes(n)){e.splice(t,1)
break}}return e},t.compareDocumentPosition=i,t.uniqueSort=function(e){return(e=e.filter((function(e,t,r){return!r.includes(e,t+1)}))).sort((function(e,t){var r=i(e,t)
return 2&r?-1:4&r?1:0})),e}},1445:function(e,t,r){"use strict"
var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)}
Object.defineProperty(t,"__esModule",{value:!0}),t.hasChildren=t.isDocument=t.isComment=t.isText=t.isCDATA=t.isTag=void 0,i(r(3961),t),i(r(72),t),i(r(5408),t),i(r(5898),t),i(r(7773),t),i(r(750),t),i(r(7175),t)
var o=r(1363)
Object.defineProperty(t,"isTag",{enumerable:!0,get:function(){return o.isTag}}),Object.defineProperty(t,"isCDATA",{enumerable:!0,get:function(){return o.isCDATA}}),Object.defineProperty(t,"isText",{enumerable:!0,get:function(){return o.isText}}),Object.defineProperty(t,"isComment",{enumerable:!0,get:function(){return o.isComment}}),Object.defineProperty(t,"isDocument",{enumerable:!0,get:function(){return o.isDocument}}),Object.defineProperty(t,"hasChildren",{enumerable:!0,get:function(){return o.hasChildren}})},7773:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getElementsByTagType=t.getElementsByTagName=t.getElementById=t.getElements=t.testElement=void 0
var n=r(1363),i=r(5898),o={tag_name:function(e){return"function"==typeof e?function(t){return(0,n.isTag)(t)&&e(t.name)}:"*"===e?n.isTag:function(t){return(0,n.isTag)(t)&&t.name===e}},tag_type:function(e){return"function"==typeof e?function(t){return e(t.type)}:function(t){return t.type===e}},tag_contains:function(e){return"function"==typeof e?function(t){return(0,n.isText)(t)&&e(t.data)}:function(t){return(0,n.isText)(t)&&t.data===e}}}
function a(e,t){return"function"==typeof t?function(r){return(0,n.isTag)(r)&&t(r.attribs[e])}:function(r){return(0,n.isTag)(r)&&r.attribs[e]===t}}function s(e,t){return function(r){return e(r)||t(r)}}function u(e){var t=Object.keys(e).map((function(t){var r=e[t]
return Object.prototype.hasOwnProperty.call(o,t)?o[t](r):a(t,r)}))
return 0===t.length?null:t.reduce(s)}t.testElement=function(e,t){var r=u(e)
return!r||r(t)},t.getElements=function(e,t,r,n){void 0===n&&(n=1/0)
var o=u(e)
return o?(0,i.filter)(o,t,r,n):[]},t.getElementById=function(e,t,r){return void 0===r&&(r=!0),Array.isArray(t)||(t=[t]),(0,i.findOne)(a("id",e),t,r)},t.getElementsByTagName=function(e,t,r,n){return void 0===r&&(r=!0),void 0===n&&(n=1/0),(0,i.filter)(o.tag_name(e),t,r,n)},t.getElementsByTagType=function(e,t,r,n){return void 0===r&&(r=!0),void 0===n&&(n=1/0),(0,i.filter)(o.tag_type(e),t,r,n)}},5408:(e,t)=>{"use strict"
function r(e){if(e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e.parent){var t=e.parent.children
t.splice(t.lastIndexOf(e),1)}}Object.defineProperty(t,"__esModule",{value:!0}),t.prepend=t.prependChild=t.append=t.appendChild=t.replaceElement=t.removeElement=void 0,t.removeElement=r,t.replaceElement=function(e,t){var r=t.prev=e.prev
r&&(r.next=t)
var n=t.next=e.next
n&&(n.prev=t)
var i=t.parent=e.parent
if(i){var o=i.children
o[o.lastIndexOf(e)]=t}},t.appendChild=function(e,t){if(r(t),t.next=null,t.parent=e,e.children.push(t)>1){var n=e.children[e.children.length-2]
n.next=t,t.prev=n}else t.prev=null},t.append=function(e,t){r(t)
var n=e.parent,i=e.next
if(t.next=i,t.prev=e,e.next=t,t.parent=n,i){if(i.prev=t,n){var o=n.children
o.splice(o.lastIndexOf(i),0,t)}}else n&&n.children.push(t)},t.prependChild=function(e,t){if(r(t),t.parent=e,t.prev=null,1!==e.children.unshift(t)){var n=e.children[1]
n.prev=t,t.next=n}else t.next=null},t.prepend=function(e,t){r(t)
var n=e.parent
if(n){var i=n.children
i.splice(i.indexOf(e),0,t)}e.prev&&(e.prev.next=t),t.parent=n,t.prev=e.prev,t.next=e,e.prev=t}},5898:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.findAll=t.existsOne=t.findOne=t.findOneChild=t.find=t.filter=void 0
var n=r(1363)
function i(e,t,r,o){for(var a=[],s=0,u=t;s<u.length;s++){var l=u[s]
if(e(l)&&(a.push(l),--o<=0))break
if(r&&(0,n.hasChildren)(l)&&l.children.length>0){var c=i(e,l.children,r,o)
if(a.push.apply(a,c),(o-=c.length)<=0)break}}return a}t.filter=function(e,t,r,n){return void 0===r&&(r=!0),void 0===n&&(n=1/0),Array.isArray(t)||(t=[t]),i(e,t,r,n)},t.find=i,t.findOneChild=function(e,t){return t.find(e)},t.findOne=function e(t,r,i){void 0===i&&(i=!0)
for(var o=null,a=0;a<r.length&&!o;a++){var s=r[a];(0,n.isTag)(s)&&(t(s)?o=s:i&&s.children.length>0&&(o=e(t,s.children)))}return o},t.existsOne=function e(t,r){return r.some((function(r){return(0,n.isTag)(r)&&(t(r)||r.children.length>0&&e(t,r.children))}))},t.findAll=function(e,t){for(var r,i,o=[],a=t.filter(n.isTag);i=a.shift();){var s=null===(r=i.children)||void 0===r?void 0:r.filter(n.isTag)
s&&s.length>0&&a.unshift.apply(a,s),e(i)&&o.push(i)}return o}},3961:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.innerText=t.textContent=t.getText=t.getInnerHTML=t.getOuterHTML=void 0
var i=r(1363),o=n(r(6961)),a=r(8551)
function s(e,t){return(0,o.default)(e,t)}t.getOuterHTML=s,t.getInnerHTML=function(e,t){return(0,i.hasChildren)(e)?e.children.map((function(e){return s(e,t)})).join(""):""},t.getText=function e(t){return Array.isArray(t)?t.map(e).join(""):(0,i.isTag)(t)?"br"===t.name?"\n":e(t.children):(0,i.isCDATA)(t)?e(t.children):(0,i.isText)(t)?t.data:""},t.textContent=function e(t){return Array.isArray(t)?t.map(e).join(""):(0,i.hasChildren)(t)&&!(0,i.isComment)(t)?e(t.children):(0,i.isText)(t)?t.data:""},t.innerText=function e(t){return Array.isArray(t)?t.map(e).join(""):(0,i.hasChildren)(t)&&(t.type===a.ElementType.Tag||(0,i.isCDATA)(t))?e(t.children):(0,i.isText)(t)?t.data:""}},72:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.prevElementSibling=t.nextElementSibling=t.getName=t.hasAttrib=t.getAttributeValue=t.getSiblings=t.getParent=t.getChildren=void 0
var n=r(1363),i=[]
function o(e){var t
return null!==(t=e.children)&&void 0!==t?t:i}function a(e){return e.parent||null}t.getChildren=o,t.getParent=a,t.getSiblings=function(e){var t=a(e)
if(null!=t)return o(t)
for(var r=[e],n=e.prev,i=e.next;null!=n;)r.unshift(n),n=n.prev
for(;null!=i;)r.push(i),i=i.next
return r},t.getAttributeValue=function(e,t){var r
return null===(r=e.attribs)||void 0===r?void 0:r[t]},t.hasAttrib=function(e,t){return null!=e.attribs&&Object.prototype.hasOwnProperty.call(e.attribs,t)&&null!=e.attribs[t]},t.getName=function(e){return e.name},t.nextElementSibling=function(e){for(var t=e.next;null!==t&&!(0,n.isTag)(t);)t=t.next
return t},t.prevElementSibling=function(e){for(var t=e.prev;null!==t&&!(0,n.isTag)(t);)t=t.prev
return t}},9972:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.decodeHTML=t.decodeHTMLStrict=t.decodeXML=void 0
var i=n(r(6931)),o=n(r(4324)),a=n(r(3013)),s=n(r(6760)),u=/&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g
function l(e){var t=p(e)
return function(e){return String(e).replace(u,t)}}t.decodeXML=l(a.default),t.decodeHTMLStrict=l(i.default)
var c=function(e,t){return e<t?1:-1}
function p(e){return function(t){if("#"===t.charAt(1)){var r=t.charAt(2)
return"X"===r||"x"===r?s.default(parseInt(t.substr(3),16)):s.default(parseInt(t.substr(2),10))}return e[t.slice(1,-1)]||t}}t.decodeHTML=function(){for(var e=Object.keys(o.default).sort(c),t=Object.keys(i.default).sort(c),r=0,n=0;r<t.length;r++)e[n]===t[r]?(t[r]+=";?",n++):t[r]+=";"
var a=new RegExp("&(?:"+t.join("|")+"|#[xX][\\da-fA-F]+;?|#\\d+;?)","g"),s=p(i.default)
function u(e){return";"!==e.substr(-1)&&(e+=";"),s(e)}return function(e){return String(e).replace(a,u)}}()},6760:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(r(4268)),o=String.fromCodePoint||function(e){var t=""
return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|1023&e),t+String.fromCharCode(e)}
t.default=function(e){return e>=55296&&e<=57343||e>1114111?"�":(e in i.default&&(e=i.default[e]),o(e))}},3443:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.escapeUTF8=t.escape=t.encodeNonAsciiHTML=t.encodeHTML=t.encodeXML=void 0
var i=c(n(r(3013)).default),o=p(i)
t.encodeXML=m(i)
var a,s,u=c(n(r(6931)).default),l=p(u)
function c(e){return Object.keys(e).sort().reduce((function(t,r){return t[e[r]]="&"+r+";",t}),{})}function p(e){for(var t=[],r=[],n=0,i=Object.keys(e);n<i.length;n++){var o=i[n]
1===o.length?t.push("\\"+o):r.push(o)}t.sort()
for(var a=0;a<t.length-1;a++){for(var s=a;s<t.length-1&&t[s].charCodeAt(1)+1===t[s+1].charCodeAt(1);)s+=1
var u=1+s-a
u<3||t.splice(a,u,t[a]+"-"+t[s])}return r.unshift("["+t.join("")+"]"),new RegExp(r.join("|"),"g")}t.encodeHTML=(a=u,s=l,function(e){return e.replace(s,(function(e){return a[e]})).replace(f,h)}),t.encodeNonAsciiHTML=m(u)
var f=/(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,d=null!=String.prototype.codePointAt?function(e){return e.codePointAt(0)}:function(e){return 1024*(e.charCodeAt(0)-55296)+e.charCodeAt(1)-56320+65536}
function h(e){return"&#x"+(e.length>1?d(e):e.charCodeAt(0)).toString(16).toUpperCase()+";"}var g=new RegExp(o.source+"|"+f.source,"g")
function m(e){return function(t){return t.replace(g,(function(t){return e[t]||h(t)}))}}t.escape=function(e){return e.replace(g,h)},t.escapeUTF8=function(e){return e.replace(o,h)}},5674:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.decodeXMLStrict=t.decodeHTML5Strict=t.decodeHTML4Strict=t.decodeHTML5=t.decodeHTML4=t.decodeHTMLStrict=t.decodeHTML=t.decodeXML=t.encodeHTML5=t.encodeHTML4=t.escapeUTF8=t.escape=t.encodeNonAsciiHTML=t.encodeHTML=t.encodeXML=t.encode=t.decodeStrict=t.decode=void 0
var n=r(9972),i=r(3443)
t.decode=function(e,t){return(!t||t<=0?n.decodeXML:n.decodeHTML)(e)},t.decodeStrict=function(e,t){return(!t||t<=0?n.decodeXML:n.decodeHTMLStrict)(e)},t.encode=function(e,t){return(!t||t<=0?i.encodeXML:i.encodeHTML)(e)}
var o=r(3443)
Object.defineProperty(t,"encodeXML",{enumerable:!0,get:function(){return o.encodeXML}}),Object.defineProperty(t,"encodeHTML",{enumerable:!0,get:function(){return o.encodeHTML}}),Object.defineProperty(t,"encodeNonAsciiHTML",{enumerable:!0,get:function(){return o.encodeNonAsciiHTML}}),Object.defineProperty(t,"escape",{enumerable:!0,get:function(){return o.escape}}),Object.defineProperty(t,"escapeUTF8",{enumerable:!0,get:function(){return o.escapeUTF8}}),Object.defineProperty(t,"encodeHTML4",{enumerable:!0,get:function(){return o.encodeHTML}}),Object.defineProperty(t,"encodeHTML5",{enumerable:!0,get:function(){return o.encodeHTML}})
var a=r(9972)
Object.defineProperty(t,"decodeXML",{enumerable:!0,get:function(){return a.decodeXML}}),Object.defineProperty(t,"decodeHTML",{enumerable:!0,get:function(){return a.decodeHTML}}),Object.defineProperty(t,"decodeHTMLStrict",{enumerable:!0,get:function(){return a.decodeHTMLStrict}}),Object.defineProperty(t,"decodeHTML4",{enumerable:!0,get:function(){return a.decodeHTML}}),Object.defineProperty(t,"decodeHTML5",{enumerable:!0,get:function(){return a.decodeHTML}}),Object.defineProperty(t,"decodeHTML4Strict",{enumerable:!0,get:function(){return a.decodeHTMLStrict}}),Object.defineProperty(t,"decodeHTML5Strict",{enumerable:!0,get:function(){return a.decodeHTMLStrict}}),Object.defineProperty(t,"decodeXMLStrict",{enumerable:!0,get:function(){return a.decodeXML}})},8242:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.compile=void 0
var n=r(7544)
t.compile=function(e){var t=e[0],r=e[1]-1
if(r<0&&t<=0)return n.falseFunc
if(-1===t)return function(e){return e<=r}
if(0===t)return function(e){return e===r}
if(1===t)return r<0?n.trueFunc:function(e){return e>=r}
var i=Math.abs(t),o=(r%i+i)%i
return t>1?function(e){return e>=r&&e%i===o}:function(e){return e<=r&&e%i===o}}},2256:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.compile=t.parse=void 0
var n=r(5234)
Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return n.parse}})
var i=r(8242)
Object.defineProperty(t,"compile",{enumerable:!0,get:function(){return i.compile}}),t.default=function(e){return(0,i.compile)((0,n.parse)(e))}},5234:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.parse=void 0
var r=new Set([9,10,12,13,32]),n="0".charCodeAt(0),i="9".charCodeAt(0)
t.parse=function(e){if("even"===(e=e.trim().toLowerCase()))return[2,0]
if("odd"===e)return[2,1]
var t=0,o=0,a=u(),s=l()
if(t<e.length&&"n"===e.charAt(t)&&(t++,o=a*(null!=s?s:1),c(),t<e.length?(a=u(),c(),s=l()):a=s=0),null===s||t<e.length)throw new Error("n-th rule couldn't be parsed ('"+e+"')")
return[o,a*s]
function u(){return"-"===e.charAt(t)?(t++,-1):("+"===e.charAt(t)&&t++,1)}function l(){for(var r=t,o=0;t<e.length&&e.charCodeAt(t)>=n&&e.charCodeAt(t)<=i;)o=10*o+(e.charCodeAt(t)-n),t++
return t===r?null:o}function c(){for(;t<e.length&&r.has(e.charCodeAt(t));)t++}}},8938:(e,t,r)=>{"use strict"
var n
r.r(t),r.d(t,{AttributeAction:()=>o,IgnoreCaseMode:()=>i,SelectorType:()=>n,isTraversal:()=>c,parse:()=>m,stringify:()=>x}),function(e){e.Attribute="attribute",e.Pseudo="pseudo",e.PseudoElement="pseudo-element",e.Tag="tag",e.Universal="universal",e.Adjacent="adjacent",e.Child="child",e.Descendant="descendant",e.Parent="parent",e.Sibling="sibling",e.ColumnCombinator="column-combinator"}(n||(n={}))
const i={Unknown:null,QuirksMode:"quirks",IgnoreCase:!0,CaseSensitive:!1}
var o
!function(e){e.Any="any",e.Element="element",e.End="end",e.Equals="equals",e.Exists="exists",e.Hyphen="hyphen",e.Not="not",e.Start="start"}(o||(o={}))
const a=/^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,s=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,u=new Map([[126,o.Element],[94,o.Start],[36,o.End],[42,o.Any],[33,o.Not],[124,o.Hyphen]]),l=new Set(["has","not","matches","is","where","host","host-context"])
function c(e){switch(e.type){case n.Adjacent:case n.Child:case n.Descendant:case n.Parent:case n.Sibling:case n.ColumnCombinator:return!0
default:return!1}}const p=new Set(["contains","icontains"])
function f(e,t,r){const n=parseInt(t,16)-65536
return n!=n||r?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)}function d(e){return e.replace(s,f)}function h(e){return 39===e||34===e}function g(e){return 32===e||9===e||10===e||12===e||13===e}function m(e){const t=[],r=b(t,`${e}`,0)
if(r<e.length)throw new Error(`Unmatched selector: ${e.slice(r)}`)
return t}function b(e,t,r){let i=[]
function s(e){const n=t.slice(r+e).match(a)
if(!n)throw new Error(`Expected name, found ${t.slice(r)}`)
const[i]=n
return r+=e+i.length,d(i)}function f(e){for(r+=e;r<t.length&&g(t.charCodeAt(r));)r++}function m(){const e=r+=1
let n=1
for(;n>0&&r<t.length;r++)40!==t.charCodeAt(r)||v(r)?41!==t.charCodeAt(r)||v(r)||n--:n++
if(n)throw new Error("Parenthesis not matched")
return d(t.slice(e,r-1))}function v(e){let r=0
for(;92===t.charCodeAt(--e);)r++
return 1==(1&r)}function y(){if(i.length>0&&c(i[i.length-1]))throw new Error("Did not expect successive traversals.")}function w(e){i.length>0&&i[i.length-1].type===n.Descendant?i[i.length-1].type=e:(y(),i.push({type:e}))}function D(e,t){i.push({type:n.Attribute,name:e,action:t,value:s(1),namespace:null,ignoreCase:"quirks"})}function E(){if(i.length&&i[i.length-1].type===n.Descendant&&i.pop(),0===i.length)throw new Error("Empty sub-selector")
e.push(i)}if(f(0),t.length===r)return r
e:for(;r<t.length;){const e=t.charCodeAt(r)
switch(e){case 32:case 9:case 10:case 12:case 13:0!==i.length&&i[0].type===n.Descendant||(y(),i.push({type:n.Descendant})),f(1)
break
case 62:w(n.Child),f(1)
break
case 60:w(n.Parent),f(1)
break
case 126:w(n.Sibling),f(1)
break
case 43:w(n.Adjacent),f(1)
break
case 46:D("class",o.Element)
break
case 35:D("id",o.Equals)
break
case 91:{let e
f(1)
let a=null
124===t.charCodeAt(r)?e=s(1):t.startsWith("*|",r)?(a="*",e=s(2)):(e=s(0),124===t.charCodeAt(r)&&61!==t.charCodeAt(r+1)&&(a=e,e=s(1))),f(0)
let l=o.Exists
const c=u.get(t.charCodeAt(r))
if(c){if(l=c,61!==t.charCodeAt(r+1))throw new Error("Expected `=`")
f(2)}else 61===t.charCodeAt(r)&&(l=o.Equals,f(1))
let p="",m=null
if("exists"!==l){if(h(t.charCodeAt(r))){const e=t.charCodeAt(r)
let n=r+1
for(;n<t.length&&(t.charCodeAt(n)!==e||v(n));)n+=1
if(t.charCodeAt(n)!==e)throw new Error("Attribute value didn't end")
p=d(t.slice(r+1,n)),r=n+1}else{const e=r
for(;r<t.length&&(!g(t.charCodeAt(r))&&93!==t.charCodeAt(r)||v(r));)r+=1
p=d(t.slice(e,r))}f(0)
const e=32|t.charCodeAt(r)
115===e?(m=!1,f(1)):105===e&&(m=!0,f(1))}if(93!==t.charCodeAt(r))throw new Error("Attribute selector didn't terminate")
r+=1
const b={type:n.Attribute,name:e,action:l,value:p,namespace:a,ignoreCase:m}
i.push(b)
break}case 58:{if(58===t.charCodeAt(r+1)){i.push({type:n.PseudoElement,name:s(2).toLowerCase(),data:40===t.charCodeAt(r)?m():null})
continue}const e=s(1).toLowerCase()
let o=null
if(40===t.charCodeAt(r))if(l.has(e)){if(h(t.charCodeAt(r+1)))throw new Error(`Pseudo-selector ${e} cannot be quoted`)
if(o=[],r=b(o,t,r+1),41!==t.charCodeAt(r))throw new Error(`Missing closing parenthesis in :${e} (${t})`)
r+=1}else{if(o=m(),p.has(e)){const e=o.charCodeAt(0)
e===o.charCodeAt(o.length-1)&&h(e)&&(o=o.slice(1,-1))}o=d(o)}i.push({type:n.Pseudo,name:e,data:o})
break}case 44:E(),i=[],f(1)
break
default:{if(t.startsWith("/*",r)){const e=t.indexOf("*/",r+2)
if(e<0)throw new Error("Comment was not terminated")
r=e+2,0===i.length&&f(0)
break}let o,u=null
if(42===e)r+=1,o="*"
else if(124===e){if(o="",124===t.charCodeAt(r+1)){w(n.ColumnCombinator),f(2)
break}}else{if(!a.test(t.slice(r)))break e
o=s(0)}124===t.charCodeAt(r)&&124!==t.charCodeAt(r+1)&&(u=o,42===t.charCodeAt(r+1)?(o="*",r+=2):o=s(1)),i.push("*"===o?{type:n.Universal,namespace:u}:{type:n.Tag,name:o,namespace:u})}}}return E(),r}const v=["\\",'"'],y=[...v,"(",")"],w=new Set(v.map((e=>e.charCodeAt(0)))),D=new Set(y.map((e=>e.charCodeAt(0)))),E=new Set([...y,"~","^","$","*","+","!","|",":","[","]"," ","."].map((e=>e.charCodeAt(0))))
function x(e){return e.map((e=>e.map(A).join(""))).join(", ")}function A(e,t,r){switch(e.type){case n.Child:return 0===t?"> ":" > "
case n.Parent:return 0===t?"< ":" < "
case n.Sibling:return 0===t?"~ ":" ~ "
case n.Adjacent:return 0===t?"+ ":" + "
case n.Descendant:return" "
case n.ColumnCombinator:return 0===t?"|| ":" || "
case n.Universal:return"*"===e.namespace&&t+1<r.length&&"name"in r[t+1]?"":`${_(e.namespace)}*`
case n.Tag:return k(e)
case n.PseudoElement:return`::${C(e.name,E)}${null===e.data?"":`(${C(e.data,D)})`}`
case n.Pseudo:return`:${C(e.name,E)}${null===e.data?"":`(${"string"==typeof e.data?C(e.data,D):x(e.data)})`}`
case n.Attribute:{if("id"===e.name&&e.action===o.Equals&&"quirks"===e.ignoreCase&&!e.namespace)return`#${C(e.value,E)}`
if("class"===e.name&&e.action===o.Element&&"quirks"===e.ignoreCase&&!e.namespace)return`.${C(e.value,E)}`
const t=k(e)
return e.action===o.Exists?`[${t}]`:`[${t}${function(e){switch(e){case o.Equals:return""
case o.Element:return"~"
case o.Start:return"^"
case o.End:return"$"
case o.Any:return"*"
case o.Not:return"!"
case o.Hyphen:return"|"
case o.Exists:throw new Error("Shouldn't be here")}}(e.action)}="${C(e.value,w)}"${null===e.ignoreCase?"":e.ignoreCase?" i":" s"}]`}}}function k(e){return`${_(e.namespace)}${C(e.name,E)}`}function _(e){return null!==e?`${"*"===e?"*":C(e,E)}|`:""}function C(e,t){let r=0,n=""
for(let i=0;i<e.length;i++)t.has(e.charCodeAt(i))&&(n+=`${e.slice(r,i)}\\${e.charAt(i)}`,r=i+1)
return n.length>0?n+e.slice(r):e}},1363:function(e,t,r){"use strict"
var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)}
Object.defineProperty(t,"__esModule",{value:!0}),t.DomHandler=void 0
var o=r(5132),a=r(5653)
i(r(5653),t)
var s=/\s+/g,u={normalizeWhitespace:!1,withStartIndices:!1,withEndIndices:!1,xmlMode:!1},l=function(){function e(e,t,r){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,"function"==typeof t&&(r=t,t=u),"object"==typeof e&&(t=e,e=void 0),this.callback=null!=e?e:null,this.options=null!=t?t:u,this.elementCB=null!=r?r:null}return e.prototype.onparserinit=function(e){this.parser=e},e.prototype.onreset=function(){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},e.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},e.prototype.onerror=function(e){this.handleCallback(e)},e.prototype.onclosetag=function(){this.lastNode=null
var e=this.tagStack.pop()
this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(e)},e.prototype.onopentag=function(e,t){var r=this.options.xmlMode?o.ElementType.Tag:void 0,n=new a.Element(e,t,void 0,r)
this.addNode(n),this.tagStack.push(n)},e.prototype.ontext=function(e){var t=this.options.normalizeWhitespace,r=this.lastNode
if(r&&r.type===o.ElementType.Text)t?r.data=(r.data+e).replace(s," "):r.data+=e,this.options.withEndIndices&&(r.endIndex=this.parser.endIndex)
else{t&&(e=e.replace(s," "))
var n=new a.Text(e)
this.addNode(n),this.lastNode=n}},e.prototype.oncomment=function(e){if(this.lastNode&&this.lastNode.type===o.ElementType.Comment)this.lastNode.data+=e
else{var t=new a.Comment(e)
this.addNode(t),this.lastNode=t}},e.prototype.oncommentend=function(){this.lastNode=null},e.prototype.oncdatastart=function(){var e=new a.Text(""),t=new a.NodeWithChildren(o.ElementType.CDATA,[e])
this.addNode(t),e.parent=t,this.lastNode=e},e.prototype.oncdataend=function(){this.lastNode=null},e.prototype.onprocessinginstruction=function(e,t){var r=new a.ProcessingInstruction(e,t)
this.addNode(r)},e.prototype.handleCallback=function(e){if("function"==typeof this.callback)this.callback(e,this.dom)
else if(e)throw e},e.prototype.addNode=function(e){var t=this.tagStack[this.tagStack.length-1],r=t.children[t.children.length-1]
this.options.withStartIndices&&(e.startIndex=this.parser.startIndex),this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),t.children.push(e),r&&(e.prev=r,r.next=e),e.parent=t,this.lastNode=null},e}()
t.DomHandler=l,t.default=l},5653:function(e,t,r){"use strict"
var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)}
Object.defineProperty(t,"__esModule",{value:!0}),t.cloneNode=t.hasChildren=t.isDocument=t.isDirective=t.isComment=t.isText=t.isCDATA=t.isTag=t.Element=t.Document=t.NodeWithChildren=t.ProcessingInstruction=t.Comment=t.Text=t.DataNode=t.Node=void 0
var a=r(5132),s=new Map([[a.ElementType.Tag,1],[a.ElementType.Script,1],[a.ElementType.Style,1],[a.ElementType.Directive,1],[a.ElementType.Text,3],[a.ElementType.CDATA,4],[a.ElementType.Comment,8],[a.ElementType.Root,9]]),u=function(){function e(e){this.type=e,this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"nodeType",{get:function(){var e
return null!==(e=s.get(this.type))&&void 0!==e?e:1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(e){return void 0===e&&(e=!1),E(this,e)},e}()
t.Node=u
var l=function(e){function t(t,r){var n=e.call(this,t)||this
return n.data=r,n}return i(t,e),Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(e){this.data=e},enumerable:!1,configurable:!0}),t}(u)
t.DataNode=l
var c=function(e){function t(t){return e.call(this,a.ElementType.Text,t)||this}return i(t,e),t}(l)
t.Text=c
var p=function(e){function t(t){return e.call(this,a.ElementType.Comment,t)||this}return i(t,e),t}(l)
t.Comment=p
var f=function(e){function t(t,r){var n=e.call(this,a.ElementType.Directive,r)||this
return n.name=t,n}return i(t,e),t}(l)
t.ProcessingInstruction=f
var d=function(e){function t(t,r){var n=e.call(this,t)||this
return n.children=r,n}return i(t,e),Object.defineProperty(t.prototype,"firstChild",{get:function(){var e
return null!==(e=this.children[0])&&void 0!==e?e:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(e){this.children=e},enumerable:!1,configurable:!0}),t}(u)
t.NodeWithChildren=d
var h=function(e){function t(t){return e.call(this,a.ElementType.Root,t)||this}return i(t,e),t}(d)
t.Document=h
var g=function(e){function t(t,r,n,i){void 0===n&&(n=[]),void 0===i&&(i="script"===t?a.ElementType.Script:"style"===t?a.ElementType.Style:a.ElementType.Tag)
var o=e.call(this,i,n)||this
return o.name=t,o.attribs=r,o}return i(t,e),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(e){this.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e=this
return Object.keys(this.attribs).map((function(t){var r,n
return{name:t,value:e.attribs[t],namespace:null===(r=e["x-attribsNamespace"])||void 0===r?void 0:r[t],prefix:null===(n=e["x-attribsPrefix"])||void 0===n?void 0:n[t]}}))},enumerable:!1,configurable:!0}),t}(d)
function m(e){return(0,a.isTag)(e)}function b(e){return e.type===a.ElementType.CDATA}function v(e){return e.type===a.ElementType.Text}function y(e){return e.type===a.ElementType.Comment}function w(e){return e.type===a.ElementType.Directive}function D(e){return e.type===a.ElementType.Root}function E(e,t){var r
if(void 0===t&&(t=!1),v(e))r=new c(e.data)
else if(y(e))r=new p(e.data)
else if(m(e)){var n=t?x(e.children):[],i=new g(e.name,o({},e.attribs),n)
n.forEach((function(e){return e.parent=i})),null!=e.namespace&&(i.namespace=e.namespace),e["x-attribsNamespace"]&&(i["x-attribsNamespace"]=o({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(i["x-attribsPrefix"]=o({},e["x-attribsPrefix"])),r=i}else if(b(e)){n=t?x(e.children):[]
var s=new d(a.ElementType.CDATA,n)
n.forEach((function(e){return e.parent=s})),r=s}else if(D(e)){n=t?x(e.children):[]
var u=new h(n)
n.forEach((function(e){return e.parent=u})),e["x-mode"]&&(u["x-mode"]=e["x-mode"]),r=u}else{if(!w(e))throw new Error("Not implemented yet: ".concat(e.type))
var l=new f(e.name,e.data)
null!=e["x-name"]&&(l["x-name"]=e["x-name"],l["x-publicId"]=e["x-publicId"],l["x-systemId"]=e["x-systemId"]),r=l}return r.startIndex=e.startIndex,r.endIndex=e.endIndex,null!=e.sourceCodeLocation&&(r.sourceCodeLocation=e.sourceCodeLocation),r}function x(e){for(var t=e.map((function(e){return E(e,!0)})),r=1;r<t.length;r++)t[r].prev=t[r-1],t[r-1].next=t[r]
return t}t.Element=g,t.isTag=m,t.isCDATA=b,t.isText=v,t.isComment=y,t.isDirective=w,t.isDocument=D,t.hasChildren=function(e){return Object.prototype.hasOwnProperty.call(e,"children")},t.cloneNode=E},5132:(e,t)=>{"use strict"
var r
Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0,function(e){e.Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",e.Script="script",e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype"}(r=t.ElementType||(t.ElementType={})),t.isTag=function(e){return e.type===r.Tag||e.type===r.Script||e.type===r.Style},t.Root=r.Root,t.Text=r.Text,t.Directive=r.Directive,t.Comment=r.Comment,t.Script=r.Script,t.Style=r.Style,t.Tag=r.Tag,t.CDATA=r.CDATA,t.Doctype=r.Doctype},6178:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{Exception:()=>a,PrintVisitor:()=>w,Visitor:()=>p,WhitespaceControl:()=>b,parse:()=>R,parseWithoutProcessing:()=>B,parser:()=>v,print:()=>y})
var n={}
r.r(n),r.d(n,{SourceLocation:()=>x,id:()=>A,prepareBlock:()=>N,prepareMustache:()=>S,preparePartialBlock:()=>F,preparePath:()=>C,prepareProgram:()=>O,prepareRawBlock:()=>T,stripComment:()=>_,stripFlags:()=>k})
var i=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"]
function o(e,t){var r,n,a,s,u=t&&t.loc
u&&(r=u.start.line,n=u.end.line,a=u.start.column,s=u.end.column,e+=" - "+r+":"+a)
for(var l=Error.prototype.constructor.call(this,e),c=0;c<i.length;c++)this[i[c]]=l[i[c]]
Error.captureStackTrace&&Error.captureStackTrace(this,o)
try{u&&(this.lineNumber=r,this.endLineNumber=n,Object.defineProperty?(Object.defineProperty(this,"column",{value:a,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=a,this.endColumn=s))}catch(e){}}o.prototype=new Error
const a=o
function s(){this.parents=[]}function u(e){this.acceptRequired(e,"path"),this.acceptArray(e.params),this.acceptKey(e,"hash")}function l(e){u.call(this,e),this.acceptKey(e,"program"),this.acceptKey(e,"inverse")}function c(e){this.acceptRequired(e,"name"),this.acceptArray(e.params),this.acceptKey(e,"hash")}s.prototype={constructor:s,mutating:!1,acceptKey:function(e,t){var r=this.accept(e[t])
if(this.mutating){if(r&&!s.prototype[r.type])throw new a('Unexpected node type "'+r.type+'" found when accepting '+t+" on "+e.type)
e[t]=r}},acceptRequired:function(e,t){if(this.acceptKey(e,t),!e[t])throw new a(e.type+" requires "+t)},acceptArray:function(e){for(var t=0,r=e.length;t<r;t++)this.acceptKey(e,t),e[t]||(e.splice(t,1),t--,r--)},accept:function(e){if(e){if(!this[e.type])throw new a("Unknown type: "+e.type,e)
this.current&&this.parents.unshift(this.current),this.current=e
var t=this[e.type](e)
return this.current=this.parents.shift(),!this.mutating||t?t:!1!==t?e:void 0}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:u,Decorator:u,BlockStatement:l,DecoratorBlock:l,PartialStatement:c,PartialBlockStatement:function(e){c.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:u,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}}
const p=s
function f(e){void 0===e&&(e={}),this.options=e}function d(e,t,r){void 0===t&&(t=e.length)
var n=e[t-1],i=e[t-2]
return n?"ContentStatement"===n.type?(i||!r?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(n.original):void 0:r}function h(e,t,r){void 0===t&&(t=-1)
var n=e[t+1],i=e[t+2]
return n?"ContentStatement"===n.type?(i||!r?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(n.original):void 0:r}function g(e,t,r){var n=e[null==t?0:t+1]
if(n&&"ContentStatement"===n.type&&(r||!n.rightStripped)){var i=n.value
n.value=n.value.replace(r?/^\s+/:/^[ \t]*\r?\n?/,""),n.rightStripped=n.value!==i}}function m(e,t,r){var n=e[null==t?e.length-1:t-1]
if(n&&"ContentStatement"===n.type&&(r||!n.leftStripped)){var i=n.value
return n.value=n.value.replace(r?/\s+$/:/[ \t]+$/,""),n.leftStripped=n.value!==i,n.leftStripped}}f.prototype=new p,f.prototype.Program=function(e){var t=!this.options.ignoreStandalone,r=!this.isRootSeen
this.isRootSeen=!0
for(var n=e.body,i=0,o=n.length;i<o;i++){var a=n[i],s=this.accept(a)
if(s){var u=d(n,i,r),l=h(n,i,r),c=s.openStandalone&&u,p=s.closeStandalone&&l,f=s.inlineStandalone&&u&&l
s.close&&g(n,i,!0),s.open&&m(n,i,!0),t&&f&&(g(n,i),m(n,i)&&"PartialStatement"===a.type&&(a.indent=/([ \t]+$)/.exec(n[i-1].original)[1])),t&&c&&(g((a.program||a.inverse).body),m(n,i)),t&&p&&(g(n,i),m((a.inverse||a.program).body))}}return e},f.prototype.BlockStatement=f.prototype.DecoratorBlock=f.prototype.PartialBlockStatement=function(e){this.accept(e.program),this.accept(e.inverse)
var t=e.program||e.inverse,r=e.program&&e.inverse,n=r,i=r
if(r&&r.chained)for(n=r.body[0].program;i.chained;)i=i.body[i.body.length-1].program
var o={open:e.openStrip.open,close:e.closeStrip.close,openStandalone:h(t.body),closeStandalone:d((n||t).body)}
if(e.openStrip.close&&g(t.body,null,!0),r){var a=e.inverseStrip
a.open&&m(t.body,null,!0),a.close&&g(n.body,null,!0),e.closeStrip.open&&m(i.body,null,!0),!this.options.ignoreStandalone&&d(t.body)&&h(n.body)&&(m(t.body),g(n.body))}else e.closeStrip.open&&m(t.body,null,!0)
return o},f.prototype.Decorator=f.prototype.MustacheStatement=function(e){return e.strip},f.prototype.PartialStatement=f.prototype.CommentStatement=function(e){var t=e.strip||{}
return{inlineStandalone:!0,open:t.open,close:t.close}}
const b=f,v=function(){var e=function(e,t,r,n){for(r=r||{},n=e.length;n--;r[e[n]]=t);return r},t=[2,45],r=[1,20],n=[5,14,15,19,29,34,39,44,47,48,52,56,60],i=[1,35],o=[1,38],a=[1,30],s=[1,31],u=[1,32],l=[1,33],c=[1,34],p=[1,37],f=[14,15,19,29,34,39,44,47,48,52,56,60],d=[14,15,19,29,34,44,47,48,52,56,60],h=[15,18],g=[14,15,19,29,34,47,48,52,56,60],m=[33,64,71,79,80,81,82,83,84],b=[23,33,55,64,67,71,74,79,80,81,82,83,84],v=[1,51],y=[1,53],w=[23,33,55,64,67,71,74,79,80,81,82,83,84,86],D=[2,44],E=[55,64,71,79,80,81,82,83,84],x=[1,60],A=[1,61],k=[1,68],_=[33,64,71,74,79,80,81,82,83,84],C=[23,64,71,79,80,81,82,83,84],S=[1,78],T=[64,67,71,79,80,81,82,83,84],N=[33,74],O=[23,33,55,67,71,74],F=[1,109],L=[1,121],q=[71,76],B={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,expr:49,mustache_repetition0:50,mustache_option0:51,OPEN_UNESCAPED:52,mustache_repetition1:53,mustache_option1:54,CLOSE_UNESCAPED:55,OPEN_PARTIAL:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,sexpr:63,OPEN_SEXPR:64,sexpr_repetition0:65,sexpr_option0:66,CLOSE_SEXPR:67,hash:68,hash_repetition_plus0:69,hashSegment:70,ID:71,EQUALS:72,blockParams:73,OPEN_BLOCK_PARAMS:74,blockParams_repetition_plus0:75,CLOSE_BLOCK_PARAMS:76,path:77,dataName:78,STRING:79,NUMBER:80,BOOLEAN:81,UNDEFINED:82,NULL:83,DATA:84,pathSegments:85,SEP:86,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",52:"OPEN_UNESCAPED",55:"CLOSE_UNESCAPED",56:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",64:"OPEN_SEXPR",67:"CLOSE_SEXPR",71:"ID",72:"EQUALS",74:"OPEN_BLOCK_PARAMS",76:"CLOSE_BLOCK_PARAMS",79:"STRING",80:"NUMBER",81:"BOOLEAN",82:"UNDEFINED",83:"NULL",84:"DATA",86:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[49,1],[49,1],[63,5],[68,1],[70,3],[73,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[78,2],[77,3],[77,1],[85,3],[85,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[50,0],[50,2],[51,0],[51,1],[53,0],[53,2],[54,0],[54,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[65,0],[65,2],[66,0],[66,1],[69,1],[69,2],[75,1],[75,2]],performAction:function(e,t,r,n,i,o,a){var s=o.length-1
switch(i){case 1:return o[s-1]
case 2:this.$=n.prepareProgram(o[s])
break
case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:this.$=o[s]
break
case 9:this.$={type:"CommentStatement",value:n.stripComment(o[s]),strip:n.stripFlags(o[s],o[s]),loc:n.locInfo(this._$)}
break
case 10:this.$={type:"ContentStatement",original:o[s],value:o[s],loc:n.locInfo(this._$)}
break
case 11:this.$=n.prepareRawBlock(o[s-2],o[s-1],o[s],this._$)
break
case 12:this.$={path:o[s-3],params:o[s-2],hash:o[s-1]}
break
case 13:this.$=n.prepareBlock(o[s-3],o[s-2],o[s-1],o[s],!1,this._$)
break
case 14:this.$=n.prepareBlock(o[s-3],o[s-2],o[s-1],o[s],!0,this._$)
break
case 15:this.$={open:o[s-5],path:o[s-4],params:o[s-3],hash:o[s-2],blockParams:o[s-1],strip:n.stripFlags(o[s-5],o[s])}
break
case 16:case 17:this.$={path:o[s-4],params:o[s-3],hash:o[s-2],blockParams:o[s-1],strip:n.stripFlags(o[s-5],o[s])}
break
case 18:this.$={strip:n.stripFlags(o[s-1],o[s-1]),program:o[s]}
break
case 19:var u=n.prepareBlock(o[s-2],o[s-1],o[s],o[s],!1,this._$),l=n.prepareProgram([u],o[s-1].loc)
l.chained=!0,this.$={strip:o[s-2].strip,program:l,chain:!0}
break
case 21:this.$={path:o[s-1],strip:n.stripFlags(o[s-2],o[s])}
break
case 22:case 23:this.$=n.prepareMustache(o[s-3],o[s-2],o[s-1],o[s-4],n.stripFlags(o[s-4],o[s]),this._$)
break
case 24:this.$={type:"PartialStatement",name:o[s-3],params:o[s-2],hash:o[s-1],indent:"",strip:n.stripFlags(o[s-4],o[s]),loc:n.locInfo(this._$)}
break
case 25:this.$=n.preparePartialBlock(o[s-2],o[s-1],o[s],this._$)
break
case 26:this.$={path:o[s-3],params:o[s-2],hash:o[s-1],strip:n.stripFlags(o[s-4],o[s])}
break
case 29:this.$={type:"SubExpression",path:o[s-3],params:o[s-2],hash:o[s-1],loc:n.locInfo(this._$)}
break
case 30:this.$={type:"Hash",pairs:o[s],loc:n.locInfo(this._$)}
break
case 31:this.$={type:"HashPair",key:n.id(o[s-2]),value:o[s],loc:n.locInfo(this._$)}
break
case 32:this.$=n.id(o[s-1])
break
case 35:this.$={type:"StringLiteral",value:o[s],original:o[s],loc:n.locInfo(this._$)}
break
case 36:this.$={type:"NumberLiteral",value:Number(o[s]),original:Number(o[s]),loc:n.locInfo(this._$)}
break
case 37:this.$={type:"BooleanLiteral",value:"true"===o[s],original:"true"===o[s],loc:n.locInfo(this._$)}
break
case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:n.locInfo(this._$)}
break
case 39:this.$={type:"NullLiteral",original:null,value:null,loc:n.locInfo(this._$)}
break
case 40:this.$=n.preparePath(!0,!1,o[s],this._$)
break
case 41:this.$=n.preparePath(!1,o[s-2],o[s],this._$)
break
case 42:this.$=n.preparePath(!1,!1,o[s],this._$)
break
case 43:o[s-2].push({part:n.id(o[s]),original:o[s],separator:o[s-1]}),this.$=o[s-2]
break
case 44:this.$=[{part:n.id(o[s]),original:o[s]}]
break
case 45:case 47:case 49:case 57:case 63:case 69:case 77:case 81:case 85:case 89:case 93:this.$=[]
break
case 46:case 48:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:case 98:case 100:o[s-1].push(o[s])
break
case 97:case 99:this.$=[o[s]]}},table:[e([5,14,15,19,29,34,48,52,56,60],t,{3:1,4:2,6:3}),{1:[3]},{5:[1,4]},e([5,39,44,47],[2,2],{7:5,8:6,9:7,10:8,11:9,12:10,13:11,24:15,27:16,16:17,59:19,14:[1,12],15:r,19:[1,23],29:[1,21],34:[1,22],48:[1,13],52:[1,14],56:[1,18],60:[1,24]}),{1:[2,1]},e(n,[2,46]),e(n,[2,3]),e(n,[2,4]),e(n,[2,5]),e(n,[2,6]),e(n,[2,7]),e(n,[2,8]),e(n,[2,9]),{20:26,49:25,63:27,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},{20:26,49:39,63:27,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},e(f,t,{6:3,4:40}),e(d,t,{6:3,4:41}),e(h,[2,47],{17:42}),{20:26,49:43,63:27,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},e(g,t,{6:3,4:44}),e([5,14,15,18,19,29,34,39,44,47,48,52,56,60],[2,10]),{20:45,63:46,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},{20:47,63:46,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},{20:48,63:46,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},{20:26,49:49,63:27,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},e(m,[2,77],{50:50}),e(b,[2,27]),e(b,[2,28],{86:v}),e(b,[2,33]),e(b,[2,34]),e(b,[2,35]),e(b,[2,36]),e(b,[2,37]),e(b,[2,38]),e(b,[2,39]),{20:26,49:52,63:27,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},e(b,[2,42],{86:y}),{71:o,85:54},e(w,D),e(E,[2,81],{53:55}),{25:56,38:58,39:x,43:59,44:A,45:57,47:[2,53]},{28:62,43:63,44:A,47:[2,55]},{13:65,15:r,18:[1,64]},e(m,[2,85],{57:66}),{26:67,47:k},e(_,[2,57],{30:69}),{86:v},e(_,[2,63],{35:70}),e(C,[2,49],{21:71}),e(m,[2,89],{61:72}),{20:26,33:[2,79],49:74,51:73,63:27,64:i,68:75,69:76,70:77,71:S,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},{71:o,85:79},e(T,[2,93],{65:80}),{71:[1,81]},e(b,[2,40],{86:y}),{20:26,49:83,54:82,55:[2,83],63:27,64:i,68:84,69:76,70:77,71:S,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},{26:85,47:k},{47:[2,54]},e(f,t,{6:3,4:86}),{47:[2,20]},{20:87,63:46,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},e(g,t,{6:3,4:88}),{26:89,47:k},{47:[2,56]},e(n,[2,11]),e(h,[2,48]),{20:26,33:[2,87],49:91,58:90,63:27,64:i,68:92,69:76,70:77,71:S,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},e(n,[2,25]),{20:93,63:46,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},e(N,[2,59],{20:26,63:27,77:28,78:29,85:36,69:76,70:77,31:94,49:95,68:96,64:i,71:S,79:a,80:s,81:u,82:l,83:c,84:p}),e(N,[2,65],{20:26,63:27,77:28,78:29,85:36,69:76,70:77,36:97,49:98,68:99,64:i,71:S,79:a,80:s,81:u,82:l,83:c,84:p}),{20:26,22:100,23:[2,51],49:101,63:27,64:i,68:102,69:76,70:77,71:S,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},{20:26,33:[2,91],49:104,62:103,63:27,64:i,68:105,69:76,70:77,71:S,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},{33:[1,106]},e(m,[2,78]),{33:[2,80]},e([23,33,55,67,74],[2,30],{70:107,71:[1,108]}),e(O,[2,97]),e(w,D,{72:F}),e(b,[2,41],{86:y}),{20:26,49:111,63:27,64:i,66:110,67:[2,95],68:112,69:76,70:77,71:S,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},e(w,[2,43]),{55:[1,113]},e(E,[2,82]),{55:[2,84]},e(n,[2,13]),{38:58,39:x,43:59,44:A,45:115,46:114,47:[2,75]},e(_,[2,69],{40:116}),{47:[2,18]},e(n,[2,14]),{33:[1,117]},e(m,[2,86]),{33:[2,88]},{33:[1,118]},{32:119,33:[2,61],73:120,74:L},e(_,[2,58]),e(N,[2,60]),{33:[2,67],37:122,73:123,74:L},e(_,[2,64]),e(N,[2,66]),{23:[1,124]},e(C,[2,50]),{23:[2,52]},{33:[1,125]},e(m,[2,90]),{33:[2,92]},e(n,[2,22]),e(O,[2,98]),{72:F},{20:26,49:126,63:27,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:p,85:36},{67:[1,127]},e(T,[2,94]),{67:[2,96]},e(n,[2,23]),{47:[2,19]},{47:[2,76]},e(N,[2,71],{20:26,63:27,77:28,78:29,85:36,69:76,70:77,41:128,49:129,68:130,64:i,71:S,79:a,80:s,81:u,82:l,83:c,84:p}),e(n,[2,24]),e(n,[2,21]),{33:[1,131]},{33:[2,62]},{71:[1,133],75:132},{33:[1,134]},{33:[2,68]},e(h,[2,12]),e(g,[2,26]),e(O,[2,31]),e(w,[2,29]),{33:[2,73],42:135,73:136,74:L},e(_,[2,70]),e(N,[2,72]),e(f,[2,15]),{71:[1,138],76:[1,137]},e(q,[2,99]),e(d,[2,16]),{33:[1,139]},{33:[2,74]},{33:[2,32]},e(q,[2,100]),e(f,[2,17])],defaultActions:{4:[2,1],57:[2,54],59:[2,20],63:[2,56],75:[2,80],84:[2,84],88:[2,18],92:[2,88],102:[2,52],105:[2,92],112:[2,96],114:[2,19],115:[2,76],120:[2,62],123:[2,68],136:[2,74],137:[2,32]},parseError:function(e,t){if(!t.recoverable){var r=new Error(e)
throw r.hash=t,r}this.trace(e)},parse:function(e){var t=this,r=[0],n=[null],i=[],o=this.table,a="",s=0,u=0,l=0,c=2,p=1,f=i.slice.call(arguments,1),d=Object.create(this.lexer),h={yy:{}}
for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(h.yy[g]=this.yy[g])
d.setInput(e,h.yy),h.yy.lexer=d,h.yy.parser=this,void 0===d.yylloc&&(d.yylloc={})
var m=d.yylloc
i.push(m)
var b=d.options&&d.options.ranges
"function"==typeof h.yy.parseError?this.parseError=h.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError
for(var v,y,w,D,E,x,A,k,_,C=function(){var e
return"number"!=typeof(e=d.lex()||p)&&(e=t.symbols_[e]||e),e},S={};;){if(w=r[r.length-1],this.defaultActions[w]?D=this.defaultActions[w]:(null==v&&(v=C()),D=o[w]&&o[w][v]),void 0===D||!D.length||!D[0]){var T=""
for(x in _=[],o[w])this.terminals_[x]&&x>c&&_.push("'"+this.terminals_[x]+"'")
T=d.showPosition?"Parse error on line "+(s+1)+":\n"+d.showPosition()+"\nExpecting "+_.join(", ")+", got '"+(this.terminals_[v]||v)+"'":"Parse error on line "+(s+1)+": Unexpected "+(v==p?"end of input":"'"+(this.terminals_[v]||v)+"'"),this.parseError(T,{text:d.match,token:this.terminals_[v]||v,line:d.yylineno,loc:m,expected:_})}if(D[0]instanceof Array&&D.length>1)throw new Error("Parse Error: multiple actions possible at state: "+w+", token: "+v)
switch(D[0]){case 1:r.push(v),n.push(d.yytext),i.push(d.yylloc),r.push(D[1]),v=null,y?(v=y,y=null):(u=d.yyleng,a=d.yytext,s=d.yylineno,m=d.yylloc,l>0&&l--)
break
case 2:if(A=this.productions_[D[1]][1],S.$=n[n.length-A],S._$={first_line:i[i.length-(A||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(A||1)].first_column,last_column:i[i.length-1].last_column},b&&(S._$.range=[i[i.length-(A||1)].range[0],i[i.length-1].range[1]]),void 0!==(E=this.performAction.apply(S,[a,u,s,h.yy,D[1],n,i].concat(f))))return E
A&&(r=r.slice(0,-1*A*2),n=n.slice(0,-1*A),i=i.slice(0,-1*A)),r.push(this.productions_[D[1]][0]),n.push(S.$),i.push(S._$),k=o[r[r.length-2]][r[r.length-1]],r.push(k)
break
case 3:return!0}}return!0}},R={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e)
this.yy.parser.parseError(e,t)},setInput:function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0]
return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,r=e.split(/(?:\r\n?|\n)/g)
this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t
var n=this.match.split(/(?:\r\n?|\n)/g)
this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1)
var i=this.yylloc.range
return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===n.length?this.yylloc.first_column:0)+n[n.length-r.length].length-r[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length)
return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match
return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-")
return e+this.upcomingInput()+"\n"+t+"^"},test_match:function(e,t){var r,n,i
if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),(n=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],r=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r
if(this._backtrack){for(var o in i)this[o]=i[o]
return!1}return!1},next:function(){if(this.done)return this.EOF
var e,t,r,n
this._input||(this.done=!0),this._more||(this.yytext="",this.match="")
for(var i=this._currentRules(),o=0;o<i.length;o++)if((r=this._input.match(this.rules[i[o]]))&&(!t||r[0].length>t[0].length)){if(t=r,n=o,this.options.backtrack_lexer){if(!1!==(e=this.test_match(r,i[o])))return e
if(this._backtrack){t=!1
continue}return!1}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,i[n]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(e,t,r,n){function i(e,r){return t.yytext=t.yytext.substring(e,t.yyleng-r+e)}switch(r){case 0:if("\\\\"===t.yytext.slice(-2)?(i(0,1),this.begin("mu")):"\\"===t.yytext.slice(-1)?(i(0,1),this.begin("emu")):this.begin("mu"),t.yytext)return 15
break
case 1:case 5:return 15
case 2:return this.popState(),15
case 3:return this.begin("raw"),15
case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(i(5,9),18)
case 6:case 22:return this.popState(),14
case 7:return 64
case 8:return 67
case 9:return 19
case 10:return this.popState(),this.begin("raw"),23
case 11:return 56
case 12:return 60
case 13:return 29
case 14:return 47
case 15:case 16:return this.popState(),44
case 17:return 34
case 18:return 39
case 19:return 52
case 20:case 23:return 48
case 21:this.unput(t.yytext),this.popState(),this.begin("com")
break
case 24:return 72
case 25:case 26:case 41:return 71
case 27:return 86
case 28:break
case 29:return this.popState(),55
case 30:return this.popState(),33
case 31:return t.yytext=i(1,2).replace(/\\"/g,'"'),79
case 32:return t.yytext=i(1,2).replace(/\\'/g,"'"),79
case 33:return 84
case 34:case 35:return 81
case 36:return 82
case 37:return 83
case 38:return 80
case 39:return 74
case 40:return 76
case 42:return t.yytext=t.yytext.replace(/\\([\\\]])/g,"$1"),71
case 43:return"INVALID"
case 44:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}}}
function P(){this.yy={}}return B.lexer=R,P.prototype=B,B.Parser=P,new P}()
function y(e){return(new w).accept(e)}function w(){this.padding=0}w.prototype=new p,w.prototype.pad=function(e){for(var t="",r=0,n=this.padding;r<n;r++)t+="  "
return t+(e+"\n")},w.prototype.Program=function(e){var t,r,n="",i=e.body
if(e.blockParams){var o="BLOCK PARAMS: ["
for(t=0,r=e.blockParams.length;t<r;t++)o+=" "+e.blockParams[t]
o+=" ]",n+=this.pad(o)}for(t=0,r=i.length;t<r;t++)n+=this.accept(i[t])
return this.padding--,n},w.prototype.MustacheStatement=function(e){return this.pad("{{ "+this.SubExpression(e)+" }}")},w.prototype.Decorator=function(e){return this.pad("{{ DIRECTIVE "+this.SubExpression(e)+" }}")},w.prototype.BlockStatement=w.prototype.DecoratorBlock=function(e){var t=""
return t+=this.pad(("DecoratorBlock"===e.type?"DIRECTIVE ":"")+"BLOCK:"),this.padding++,t+=this.pad(this.SubExpression(e)),e.program&&(t+=this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,t+=this.pad("{{^}}"),this.padding++,t+=this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,t},w.prototype.PartialStatement=function(e){var t="PARTIAL:"+e.name.original
return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),this.pad("{{> "+t+" }}")},w.prototype.PartialBlockStatement=function(e){var t="PARTIAL BLOCK:"+e.name.original
return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),t+=" "+this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--,this.pad("{{> "+t+" }}")},w.prototype.ContentStatement=function(e){return this.pad("CONTENT[ '"+e.value+"' ]")},w.prototype.CommentStatement=function(e){return this.pad("{{! '"+e.value+"' }}")},w.prototype.SubExpression=function(e){for(var t,r=e.params,n=[],i=0,o=r.length;i<o;i++)n.push(this.accept(r[i]))
return r="["+n.join(", ")+"]",t=e.hash?" "+this.accept(e.hash):"",this.accept(e.path)+" "+r+t},w.prototype.PathExpression=function(e){var t=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length
var n=Array(e),i=0
for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a]
return n}(["string"==typeof e.head?e.head:"["+this.accept(e.head)+"]"],e.tail).join("/")
return(e.data?"@":"")+"PATH:"+t},w.prototype.StringLiteral=function(e){return'"'+e.value+'"'},w.prototype.NumberLiteral=function(e){return"NUMBER{"+e.value+"}"},w.prototype.BooleanLiteral=function(e){return"BOOLEAN{"+e.value+"}"},w.prototype.UndefinedLiteral=function(){return"UNDEFINED"},w.prototype.NullLiteral=function(){return"NULL"},w.prototype.Hash=function(e){for(var t=e.pairs,r=[],n=0,i=t.length;n<i;n++)r.push(this.accept(t[n]))
return"HASH{"+r.join(", ")+"}"},w.prototype.HashPair=function(e){return e.key+"="+this.accept(e.value)}
var D=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length
var n=Array(e),i=0
for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a]
return n}
function E(e,t){if(t=t.path?t.path.original:t,e.path.original!==t){var r={loc:e.path.loc}
throw new a(e.path.original+" doesn't match "+t,r)}}function x(e,t){this.source=e,this.start={line:t.first_line,column:t.first_column},this.end={line:t.last_line,column:t.last_column}}function A(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e}function k(e,t){return{open:"~"===e.charAt(2),close:"~"===t.charAt(t.length-3)}}function _(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function C(e,t,r,n){var i
n=this.locInfo(n),i=e?"@":t?t.original+".":""
for(var o=[],s=0,u=0,l=r.length;u<l;u++){var c=r[u].part,p=r[u].original!==c
if(i+=(r[u].separator||"")+c,p||".."!==c&&"."!==c&&"this"!==c)o.push(c)
else{if(o.length>0)throw new a("Invalid path: "+i,{loc:n})
".."===c&&s++}}var f=t||o.shift()
return{type:"PathExpression",data:e,depth:s,head:f,tail:o,parts:D([f],o),original:i,loc:n}}function S(e,t,r,n,i,o){var a=n.charAt(3)||n.charAt(2),s="{"!==a&&"&"!==a
return{type:/\*/.test(n)?"Decorator":"MustacheStatement",path:e,params:t,hash:r,escaped:s,strip:i,loc:this.locInfo(o)}}function T(e,t,r,n){E(e,r)
var i={type:"Program",body:t,strip:{},loc:n=this.locInfo(n)}
return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:n}}function N(e,t,r,n,i,o){n&&n.path&&E(e,n)
var s,u,l=/\*/.test(e.open)
if(t.blockParams=e.blockParams,r){if(l)throw new a("Unexpected inverse block on decorator",r)
r.chain&&(r.program.body[0].closeStrip=n.strip),u=r.strip,s=r.program}return i&&(i=s,s=t,t=i),{type:l?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:s,openStrip:e.strip,inverseStrip:u,closeStrip:n&&n.strip,loc:this.locInfo(o)}}function O(e,t){if(!t&&e.length){var r=e[0].loc,n=e[e.length-1].loc
r&&n&&(t={source:r.source,start:{line:r.start.line,column:r.start.column},end:{line:n.end.line,column:n.end.column}})}return{type:"Program",body:e,strip:{},loc:t}}function F(e,t,r,n){return E(e,r),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:r&&r.strip,loc:this.locInfo(n)}}var L={}
for(var q in n)Object.prototype.hasOwnProperty.call(n,q)&&(L[q]=n[q])
function B(e,t){return"Program"===e.type?e:(v.yy=L,v.yy.locInfo=function(e){return new x(t&&t.srcName,e)},v.parse(e))}function R(e,t){var r=B(e,t)
return new b(t).accept(r)}},9402:(e,t,r)=>{"use strict"
function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function o(e,t,r,n,i){var o={}
return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}r.d(t,{_:()=>n,a:()=>o,b:()=>i})},6154:(e,t,r)=>{"use strict"
r.d(t,{Bq:()=>i,sd:()=>o,zA:()=>n})
const n={A:"a",B:"b",C:"c",D:"d",E:"e",F:"f",G:"g",H:"h",I:"i",J:"j",K:"k",L:"l",M:"m",N:"n",O:"o",P:"p",Q:"q",R:"r",S:"s",T:"t",U:"u",V:"v",W:"w",X:"x",Y:"y",Z:"z","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","<":",",">":".","?":"/",":":";",'"':"'","~":"`","{":"[","}":"]","|":"\\"},i={"å":"a",b:"b","ç":"c","∂":"d","ƒ":"f","©":"g","˙":"h","∆":"j","˚":"k","¬":"l","µ":"m","ø":"o","π":"p","œ":"q","®":"r","ß":"s","†":"t","√":"v","∑":"w","≈":"x","¥":"y","Ω":"z","¡":"1","™":"2","£":"3","¢":"4","∞":"5","§":"6","¶":"7","•":"8","ª":"9","º":"0","–":"-","≠":"=","≤":",","≥":".","÷":"/","…":";","æ":"'","“":"[","‘":"]","«":"\\"},o={"Å":"a","ı":"b","Î":"d","Ï":"f","˝":"g","Ó":"h","ˆ":"i","Ô":"j","":"k","Ò":"l","Â":"m","˜":"n","Ø":"o","Œ":"q","‰":"r","Í":"s","ˇ":"t","¨":"u","◊":"v","„":"w","˛":"x","Á":"y","¸":"z","⁄":"1","€":"2","‹":"3","›":"4","ﬁ":"5","ﬂ":"6","‡":"7","°":"8","·":"9","‚":"0","—":"-","±":"=","¯":",","˘":".","¿":"/","Ú":";","Æ":"'","`":"`","”":"[","’":"]","»":"\\"}},8167:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>n})
var n=["alt","ctrl","meta","shift","cmd"]},1966:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>s})
var n=r(8797),i=r(3353),o=r(2737),a=r(9825),s=(r(5811),r(4596),r(6154),r(893),r(1866),(0,n.helper)((function(e){let[t,r]=e
return function(e){(0,i.assert)("ember-keyboard: You must pass a function as the second argument to the `if-key` helper","function"==typeof r),(0,i.assert)("ember-keyboard: The `if-key` helper expects to be invoked with a KeyboardEvent",e instanceof KeyboardEvent),(0,o.Z)((0,a.Z)(e.type,t),e)&&r(e)}})))},1686:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>p})
var n,i,o=r(9402),a=r(8797),s=r.n(a),u=r(3353),l=r(8574),c=r(9825)
let p=(n=class extends(s()){constructor(){super(...arguments),(0,o.b)(this,"keyboard",i,this),(0,o._)(this,"keyCombo",void 0),(0,o._)(this,"callback",void 0),(0,o._)(this,"keyboardActivated",!0),(0,o._)(this,"keyboardPriority",0),(0,o._)(this,"eventName","keydown"),(0,o._)(this,"keyboardHandlers",void 0)}compute(e,t){let[r,n]=e,{event:i="keydown",activated:o=!0,priority:a=0}=t;(0,u.assert)("ember-keyboard: You must pass a function as the second argument to the `on-key` helper","function"==typeof n),this.keyCombo=r,this.callback=n,this.eventName=i,this.keyboardActivated=o,this.keyboardPriority=a,this.keyboardHandlers={},this.keyboardHandlers[(0,c.Z)(i,r)]=n,this.keyboard.register(this)}willDestroy(){this.keyboard.unregister(this),super.willDestroy(...arguments)}},i=(0,o.a)(n.prototype,"keyboard",[l.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)},9465:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{click:()=>v,getCode:()=>T,getKeyCode:()=>N,getMouseCode:()=>i,keyDown:()=>h.QG,keyPress:()=>h.W0,keyResponder:()=>u,keyUp:()=>h.yR,mouseDown:()=>y,mouseUp:()=>w,onKey:()=>p,touchEnd:()=>E,touchStart:()=>x,triggerKeyDown:()=>_,triggerKeyPress:()=>C,triggerKeyUp:()=>S})
var n=r(1866)
function i(e){if(!(0,n.isNone)(e))switch(e){case"left":return 0
case"middle":return 1
case"right":return 2}}var o=r(9402),a=r(8574)
function s(e){if(e.keyboardHandlers=e.keyboardHandlers||{},!e.keyboardHandlerNames){e.keyboardHandlerNames={}
for(let t in e){let r=e[t]
if("function"==typeof r&&r._emberKeyboardOnKeyDecoratorData)for(let n of r._emberKeyboardOnKeyDecoratorData.listenerNames||[])e.keyboardHandlerNames[n]=t}}for(let[t,r]of Object.entries(e.keyboardHandlerNames||{}))e.keyboardHandlers[t]=e[r].bind(e)}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t=function(t){var r,n,i
return void 0===e.priority&&(e.priority=0),void 0===e.activated&&(e.activated=!0),i=class extends t{get keyboardPriority(){return void 0===super.keyboardPriority?e.priority:super.keyboardPriority}set keyboardPriority(e){super.keyboardPriority=e}get keyboardActivated(){return void 0===super.keyboardActivated?e.activated:super.keyboardActivated}set keyboardActivated(e){super.keyboardActivated=e}constructor(){super(...arguments),(0,o.b)(this,"keyboard",n,this),s(this),this.keyboard.register(this)}willDestroy(){this.keyboard.unregister(this),super.willDestroy(...arguments)}},(0,o._)(i,"name",`${t.name}WithKeyResponder`),r=i,n=(0,o.a)(r.prototype,"keyboard",[a.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r}
return"function"==typeof e?t(e):function(e){return t(e)}}var l=r(9825)
const c="keydown"
function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return"function"==typeof arguments[1]?d(e,{event:c},arguments[1]):(t.event||(t.event=c),"function"==typeof arguments[2]?d(e,t,arguments[2]):f(e,t))}function f(e,t){return function(r,n,i){if(!Object.prototype.hasOwnProperty.call(r,"keyboardHandlerNames")){let e=r.parentKeyboardHandlerNames
r.keyboardHandlerNames=e?Object.assign({},e):{}}return r.keyboardHandlerNames[(0,l.Z)(t.event,e)]=n,i}}function d(e,t,r){return r._emberKeyboardOnKeyDecoratorData||(r._emberKeyboardOnKeyDecoratorData={listenerNames:[]}),r._emberKeyboardOnKeyDecoratorData.listenerNames.push((0,l.Z)(t.event,e)),r}var h=r(3032),g=r(8167)
const m=["left","middle","right"].concat(g.Z),b=function(e,t){const r=void 0!==t?t.split("+"):[]
return function(e){e.forEach((e=>{-1===m.indexOf(e)&&console.error(`\`${e}\` is not a valid key name`)}))}(r),(0,l.Z)(e,r)}
function v(e){return b("click",e)}function y(e){return b("mousedown",e)}function w(e){return b("mouseup",e)}const D=function(e,t){return function(e){(void 0!==e?e.split("+"):[]).forEach((e=>{-1===g.Z.indexOf(e)&&console.error(`\`${e}\` is not a valid key name`)}))}(t),(0,l.Z)(e,t)}
function E(e){return D("touchEnd",e)}function x(e){return D("touchstart",e)}var A=r(5811)
r(4596),r(3353)
const k=function(e,t,r){const n=A.Z.parse(`${e}:${t}`).createMatchingKeyboardEvent()
r.dispatchEvent(n)},_=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document
k("keydown",e,t)},C=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document
k("keypress",e,t)},S=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document
k("keyup",e,t)}
function T(){throw new Error("ember-keyboard: `getCode` has been removed. There is no longer a need for this function as you can directly specify `key` and/or `code` values")}function N(){throw new Error("ember-keyboard: `getKeyCode` has been removed. There is no longer a need for this function as you can directly specify `key` and/or `code` values")}},3032:(e,t,r)=>{"use strict"
r.d(t,{QG:()=>i,W0:()=>o,yR:()=>a})
var n=r(9825)
function i(e){return(0,n.Z)("keydown",e)}function o(e){return(0,n.Z)("keypress",e)}function a(e){return(0,n.Z)("keyup",e)}},3202:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>g})
var n=r(9402),i=r(5831),o=r.n(i),a=r(8574),s=r(7219),u=r(9341),l=r(9825),c=r(2737)
r(5811),r(4596),r(3353),r(6154),r(893),r(1866)
const p=["input","select","textarea"]
let f
var d,h
d=class extends(o()){constructor(e,t){super(e,t),(0,n.b)(this,"keyboard",h,this),(0,n._)(this,"element",void 0),(0,n._)(this,"keyboardPriority",0),(0,n._)(this,"activatedParamValue",!0),(0,n._)(this,"eventName","keydown"),(0,n._)(this,"onlyWhenFocused",!0),(0,n._)(this,"listenerName",void 0),(0,n._)(this,"removeEventListeners",(()=>{this.onlyWhenFocused&&(this.element.removeEventListener("click",this.onFocus,!0),this.element.removeEventListener("focus",this.onFocus,!0),this.element.removeEventListener("focusout",this.onFocusOut,!0))})),this.keyboard.register(this),(0,u.registerDestructor)(this,(()=>{this.removeEventListeners(),this.keyboard.unregister(this)}))}modify(e,t,r){this.element=e,this.removeEventListeners(),this.setupProperties(t,r),this.onlyWhenFocused&&this.addEventListeners()}setupProperties(e,t){let[r,n]=e,{activated:i,event:o,priority:a,onlyWhenFocused:s}=t
this.keyCombo=r,this.callback=n,this.eventName=o||"keydown",this.activatedParamValue="activated"in t?!!i:void 0,this.keyboardPriority=a?parseInt(a,10):0,this.listenerName=(0,l.Z)(this.eventName,this.keyCombo),this.onlyWhenFocused=void 0!==s?s:p.includes(this.element.tagName.toLowerCase())}addEventListeners(){this.element.addEventListener("click",this.onFocus,!0),this.element.addEventListener("focus",this.onFocus,!0),this.element.addEventListener("focusout",this.onFocusOut,!0)}onFocus(){this.isFocused=!0}onFocusOut(){this.isFocused=!1}get keyboardActivated(){return!1!==this.activatedParamValue&&(!this.onlyWhenFocused||this.isFocused)}get keyboardFirstResponder(){return!!this.onlyWhenFocused&&this.isFocused}canHandleKeyboardEvent(e){return(0,c.Z)(this.listenerName,e)}handleKeyboardEvent(e,t){(0,c.Z)(this.listenerName,e)&&(this.callback?this.callback(e,t):this.element.click())}},h=(0,n.a)(d.prototype,"keyboard",[a.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,n.a)(d.prototype,"onFocus",[s.action],Object.getOwnPropertyDescriptor(d.prototype,"onFocus"),d.prototype),(0,n.a)(d.prototype,"onFocusOut",[s.action],Object.getOwnPropertyDescriptor(d.prototype,"onFocusOut"),d.prototype),f=d
var g=f},4161:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>h})
var n,i=r(9402),o=r(8574),a=r.n(o),s=r(1292),u=r(7219),l=r(8773),c=r(3032),p=r(2737)
function f(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(e.handleKeyboardEvent){if(e.canHandleKeyboardEvent&&!e.canHandleKeyboardEvent(t))return
e.handleKeyboardEvent(t,r)}else{if(!e.keyboardHandlers)throw new Error("A responder registered with the ember-keyboard service must implement either `keyboardHandlers` (property returning a dictionary of listenerNames to handler functions), or `handleKeyboardEvent(event)`)")
Object.keys(e.keyboardHandlers).forEach((n=>{(0,p.Z)(n,t)&&(r?e.keyboardHandlers[n](t,r):e.keyboardHandlers[n](t))}))}}function d(e,t,r,n){return function(e,t){let r=e-t
return(r>0)-(r<0)}(n?n((0,u.get)(e,r)):(0,u.get)(e,r),n?n((0,u.get)(t,r)):(0,u.get)(t,r))}r(5811),r(4596),r(3353),r(6154),r(893),r(1866)
let h=(n=class extends(a()){get activeResponders(){let{registeredResponders:e}=this
return Array.from(e).filter((e=>e.keyboardActivated))}get sortedResponders(){return this.activeResponders.sort(((e,t)=>function(e,t,r){return d(t,e,r,arguments.length>3&&void 0!==arguments[3]?arguments[3]:null)}(e,t,"keyboardPriority")))}get firstResponders(){return this.sortedResponders.filter((e=>e.keyboardFirstResponder))}get normalResponders(){return this.sortedResponders.filter((e=>!e.keyboardFirstResponder))}constructor(){if(super(...arguments),(0,i._)(this,"registeredResponders",new Set),"undefined"!=typeof FastBoot)return
let e=((0,s.getOwner)(this).resolveRegistration("config:environment")||{}).emberKeyboard||{}
e.disableOnInputFields&&(this._disableOnInput=!0),this._listeners=e.listeners||["keyUp","keyDown","keyPress"],this._listeners=this._listeners.map((e=>e.toLowerCase())),this._listeners.forEach((e=>{document.addEventListener(e,this._respond)}))}willDestroy(){super.willDestroy(...arguments),"undefined"==typeof FastBoot&&this._listeners.forEach((e=>{document.removeEventListener(e,this._respond)}))}_respond(e){if(this._disableOnInput&&e.target){const t=e.composedPath()[0]??e.target,r=t.tagName
if(t.getAttribute&&null!=t.getAttribute("contenteditable")||"TEXTAREA"===r||"INPUT"===r)return}(0,l.run)((()=>{let{firstResponders:t,normalResponders:r}=this
!function(e,t){let{firstResponders:r,normalResponders:n}=t,i=!1,o=!1
const a={stopImmediatePropagation(){i=!0},stopPropagation(){o=!0}}
for(const u of r)if(f(u,e,a),i)break
if(o)return
i=!1
let s=Number.POSITIVE_INFINITY
for(const u of n){const t=Number(u.keyboardPriority)
if(!i||t!==s){if(t<s){if(o)return
i=!1,s=t}f(u,e,a)}}}(e,{firstResponders:t,normalResponders:r})}))}register(e){this.registeredResponders.add(e)}unregister(e){this.registeredResponders.delete(e)}keyDown(){return(0,c.QG)(...arguments)}keyPress(){return(0,c.W0)(...arguments)}keyUp(){return(0,c.yR)(...arguments)}},(0,i.a)(n.prototype,"_respond",[u.action],Object.getOwnPropertyDescriptor(n.prototype,"_respond"),n.prototype),n)},893:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
var n=r(1866)
function i(e){if(!(0,n.isNone)(e))switch(e){case 0:return"left"
case 1:return"middle"
case 2:return"right"}}},2737:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>l})
var n=r(5811),i=r(4596),o=r(6154),a=r(8167),s=r(893)
r(3353),r(1866)
const u="_all"
function l(e,t){let r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,i.Z)()
if(e instanceof n.Z)r=e
else{if("string"!=typeof e)throw new Error("Expected a `string` or `KeyCombo` as `keyComboOrKeyComboString` argument to `isKey`")
r=n.Z.parse(e,o)}return r.type===t.type&&(!!c(r)||!(!p(r,t)||!f(r,t)&&!d(r,t))||h(r,t,o))}function c(e){return e.keyOrCode===u&&!1===e.altKey&&!1===e.ctrlKey&&!1===e.metaKey&&!1===e.shiftKey}function p(e,t){return e.type===t.type&&e.altKey===t.altKey&&e.ctrlKey===t.ctrlKey&&e.metaKey===t.metaKey&&e.shiftKey===t.shiftKey}function f(e,t){return t instanceof KeyboardEvent&&(e.keyOrCode===u||e.keyOrCode===t.code||e.keyOrCode===t.key)}function d(e,t){return t instanceof MouseEvent&&(e.keyOrCode===u||e.keyOrCode===(0,s.Z)(t.button))}function h(e,t,r){return m([],e)&&m(["shift"],t)?t.key===e.keyOrCode:m(["shift"],e)&&m(["shift"],t)?(n=t.key,(o.zA[n]||n)===e.keyOrCode):"Macintosh"===r&&m(["alt"],e)&&m(["alt"],t)?function(e){return o.Bq[e]||e}(t.key)===e.keyOrCode:!("Macintosh"!==r||!m(["shift","alt"],e)||!m(["shift","alt"],t))&&function(e){return o.sd[e]||e}(t.key)===e.keyOrCode
var n}const g=a.Z.filter((e=>"cmd"!=e))
function m(e,t){for(let r of g){if(e.includes(r)&&!t[`${r}Key`])return!1
if(!e.includes(r)&&t[`${r}Key`])return!1}return!0}},5811:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>c})
var n=r(9402),i=r(4596)
r(3353)
const o=/^alt$/i,a=/^shift$/i,s=/^ctrl$/i,u=/^meta$/i,l=/^cmd$/i
class c{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i.Z)();(0,n._)(this,"type",void 0),(0,n._)(this,"altKey",!1),(0,n._)(this,"ctrlKey",!1),(0,n._)(this,"shiftKey",!1),(0,n._)(this,"metaKey",!1),(0,n._)(this,"keyOrCode",void 0),(0,n._)(this,"platform",void 0),this.platform=e}static parse(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,i.Z)(),r=new c(t),[n,p]=e.split(":")
return r.type=n,"+"===p?(r.keyOrCode=p,r):(p.split("+").forEach((e=>{o.test(e)?r.altKey=!0:s.test(e)?r.ctrlKey=!0:u.test(e)?r.metaKey=!0:a.test(e)?r.shiftKey=!0:l.test(e)?t.indexOf("Mac")>-1?r.metaKey=!0:r.ctrlKey=!0:r.keyOrCode=e})),r)}createMatchingKeyboardEvent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return new KeyboardEvent(this.type,Object.assign({key:this.keyOrCode,code:this.keyOrCode,altKey:this.altKey,ctrlKey:this.ctrlKey,metaKey:this.metaKey,shiftKey:this.shiftKey},e))}}},9825:(e,t,r)=>{"use strict"
function n(e){if("undefined"==typeof FastBoot)return void 0===e&&(e=navigator.platform),e.indexOf("Mac")>-1?"meta":"ctrl"}function i(e){return e.sort().join("+")}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=t
"string"==typeof t&&(r=t.split("+")),r.indexOf("cmd")>-1&&(r[r.indexOf("cmd")]=n())
let o=i(r||[])
return""===o&&(o="_all"),`${e}:${o}`}r.d(t,{Z:()=>o})},4596:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>o})
var n=r(3353)
let i
function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent
if((0,n.runInDebug)((()=>{i=null})),!i){let t="Unknown OS";-1!=e.indexOf("Win")&&(t="Windows"),-1!=e.indexOf("Mac")&&(t="Macintosh"),-1!=e.indexOf("Linux")&&(t="Linux"),-1!=e.indexOf("Android")&&(t="Android"),-1!=e.indexOf("like Mac")&&(t="iOS"),i=t}return i}},39:function(e,t,r){var n
e=r.nmd(e),function(i){var o=(e&&e.exports,"object"==typeof global&&global)
o.global!==o&&o.window
var a=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,s=/[\x01-\x7F]/g,u=/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,l=/<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,c={"­":"shy","‌":"zwnj","‍":"zwj","‎":"lrm","⁣":"ic","⁢":"it","⁡":"af","‏":"rlm","​":"ZeroWidthSpace","⁠":"NoBreak","̑":"DownBreve","⃛":"tdot","⃜":"DotDot","\t":"Tab","\n":"NewLine"," ":"puncsp"," ":"MediumSpace"," ":"thinsp"," ":"hairsp"," ":"emsp13"," ":"ensp"," ":"emsp14"," ":"emsp"," ":"numsp"," ":"nbsp","  ":"ThickSpace","‾":"oline",_:"lowbar","‐":"dash","–":"ndash","—":"mdash","―":"horbar",",":"comma",";":"semi","⁏":"bsemi",":":"colon","⩴":"Colone","!":"excl","¡":"iexcl","?":"quest","¿":"iquest",".":"period","‥":"nldr","…":"mldr","·":"middot","'":"apos","‘":"lsquo","’":"rsquo","‚":"sbquo","‹":"lsaquo","›":"rsaquo",'"':"quot","“":"ldquo","”":"rdquo","„":"bdquo","«":"laquo","»":"raquo","(":"lpar",")":"rpar","[":"lsqb","]":"rsqb","{":"lcub","}":"rcub","⌈":"lceil","⌉":"rceil","⌊":"lfloor","⌋":"rfloor","⦅":"lopar","⦆":"ropar","⦋":"lbrke","⦌":"rbrke","⦍":"lbrkslu","⦎":"rbrksld","⦏":"lbrksld","⦐":"rbrkslu","⦑":"langd","⦒":"rangd","⦓":"lparlt","⦔":"rpargt","⦕":"gtlPar","⦖":"ltrPar","⟦":"lobrk","⟧":"robrk","⟨":"lang","⟩":"rang","⟪":"Lang","⟫":"Rang","⟬":"loang","⟭":"roang","❲":"lbbrk","❳":"rbbrk","‖":"Vert","§":"sect","¶":"para","@":"commat","*":"ast","/":"sol",undefined:null,"&":"amp","#":"num","%":"percnt","‰":"permil","‱":"pertenk","†":"dagger","‡":"Dagger","•":"bull","⁃":"hybull","′":"prime","″":"Prime","‴":"tprime","⁗":"qprime","‵":"bprime","⁁":"caret","`":"grave","´":"acute","˜":"tilde","^":"Hat","¯":"macr","˘":"breve","˙":"dot","¨":"die","˚":"ring","˝":"dblac","¸":"cedil","˛":"ogon","ˆ":"circ","ˇ":"caron","°":"deg","©":"copy","®":"reg","℗":"copysr","℘":"wp","℞":"rx","℧":"mho","℩":"iiota","←":"larr","↚":"nlarr","→":"rarr","↛":"nrarr","↑":"uarr","↓":"darr","↔":"harr","↮":"nharr","↕":"varr","↖":"nwarr","↗":"nearr","↘":"searr","↙":"swarr","↝":"rarrw","↝̸":"nrarrw","↞":"Larr","↟":"Uarr","↠":"Rarr","↡":"Darr","↢":"larrtl","↣":"rarrtl","↤":"mapstoleft","↥":"mapstoup","↦":"map","↧":"mapstodown","↩":"larrhk","↪":"rarrhk","↫":"larrlp","↬":"rarrlp","↭":"harrw","↰":"lsh","↱":"rsh","↲":"ldsh","↳":"rdsh","↵":"crarr","↶":"cularr","↷":"curarr","↺":"olarr","↻":"orarr","↼":"lharu","↽":"lhard","↾":"uharr","↿":"uharl","⇀":"rharu","⇁":"rhard","⇂":"dharr","⇃":"dharl","⇄":"rlarr","⇅":"udarr","⇆":"lrarr","⇇":"llarr","⇈":"uuarr","⇉":"rrarr","⇊":"ddarr","⇋":"lrhar","⇌":"rlhar","⇐":"lArr","⇍":"nlArr","⇑":"uArr","⇒":"rArr","⇏":"nrArr","⇓":"dArr","⇔":"iff","⇎":"nhArr","⇕":"vArr","⇖":"nwArr","⇗":"neArr","⇘":"seArr","⇙":"swArr","⇚":"lAarr","⇛":"rAarr","⇝":"zigrarr","⇤":"larrb","⇥":"rarrb","⇵":"duarr","⇽":"loarr","⇾":"roarr","⇿":"hoarr","∀":"forall","∁":"comp","∂":"part","∂̸":"npart","∃":"exist","∄":"nexist","∅":"empty","∇":"Del","∈":"in","∉":"notin","∋":"ni","∌":"notni","϶":"bepsi","∏":"prod","∐":"coprod","∑":"sum","+":"plus","±":"pm","÷":"div","×":"times","<":"lt","≮":"nlt","<⃒":"nvlt","=":"equals","≠":"ne","=⃥":"bne","⩵":"Equal",">":"gt","≯":"ngt",">⃒":"nvgt","¬":"not","|":"vert","¦":"brvbar","−":"minus","∓":"mp","∔":"plusdo","⁄":"frasl","∖":"setmn","∗":"lowast","∘":"compfn","√":"Sqrt","∝":"prop","∞":"infin","∟":"angrt","∠":"ang","∠⃒":"nang","∡":"angmsd","∢":"angsph","∣":"mid","∤":"nmid","∥":"par","∦":"npar","∧":"and","∨":"or","∩":"cap","∩︀":"caps","∪":"cup","∪︀":"cups","∫":"int","∬":"Int","∭":"tint","⨌":"qint","∮":"oint","∯":"Conint","∰":"Cconint","∱":"cwint","∲":"cwconint","∳":"awconint","∴":"there4","∵":"becaus","∶":"ratio","∷":"Colon","∸":"minusd","∺":"mDDot","∻":"homtht","∼":"sim","≁":"nsim","∼⃒":"nvsim","∽":"bsim","∽̱":"race","∾":"ac","∾̳":"acE","∿":"acd","≀":"wr","≂":"esim","≂̸":"nesim","≃":"sime","≄":"nsime","≅":"cong","≇":"ncong","≆":"simne","≈":"ap","≉":"nap","≊":"ape","≋":"apid","≋̸":"napid","≌":"bcong","≍":"CupCap","≭":"NotCupCap","≍⃒":"nvap","≎":"bump","≎̸":"nbump","≏":"bumpe","≏̸":"nbumpe","≐":"doteq","≐̸":"nedot","≑":"eDot","≒":"efDot","≓":"erDot","≔":"colone","≕":"ecolon","≖":"ecir","≗":"cire","≙":"wedgeq","≚":"veeeq","≜":"trie","≟":"equest","≡":"equiv","≢":"nequiv","≡⃥":"bnequiv","≤":"le","≰":"nle","≤⃒":"nvle","≥":"ge","≱":"nge","≥⃒":"nvge","≦":"lE","≦̸":"nlE","≧":"gE","≧̸":"ngE","≨︀":"lvnE","≨":"lnE","≩":"gnE","≩︀":"gvnE","≪":"ll","≪̸":"nLtv","≪⃒":"nLt","≫":"gg","≫̸":"nGtv","≫⃒":"nGt","≬":"twixt","≲":"lsim","≴":"nlsim","≳":"gsim","≵":"ngsim","≶":"lg","≸":"ntlg","≷":"gl","≹":"ntgl","≺":"pr","⊀":"npr","≻":"sc","⊁":"nsc","≼":"prcue","⋠":"nprcue","≽":"sccue","⋡":"nsccue","≾":"prsim","≿":"scsim","≿̸":"NotSucceedsTilde","⊂":"sub","⊄":"nsub","⊂⃒":"vnsub","⊃":"sup","⊅":"nsup","⊃⃒":"vnsup","⊆":"sube","⊈":"nsube","⊇":"supe","⊉":"nsupe","⊊︀":"vsubne","⊊":"subne","⊋︀":"vsupne","⊋":"supne","⊍":"cupdot","⊎":"uplus","⊏":"sqsub","⊏̸":"NotSquareSubset","⊐":"sqsup","⊐̸":"NotSquareSuperset","⊑":"sqsube","⋢":"nsqsube","⊒":"sqsupe","⋣":"nsqsupe","⊓":"sqcap","⊓︀":"sqcaps","⊔":"sqcup","⊔︀":"sqcups","⊕":"oplus","⊖":"ominus","⊗":"otimes","⊘":"osol","⊙":"odot","⊚":"ocir","⊛":"oast","⊝":"odash","⊞":"plusb","⊟":"minusb","⊠":"timesb","⊡":"sdotb","⊢":"vdash","⊬":"nvdash","⊣":"dashv","⊤":"top","⊥":"bot","⊧":"models","⊨":"vDash","⊭":"nvDash","⊩":"Vdash","⊮":"nVdash","⊪":"Vvdash","⊫":"VDash","⊯":"nVDash","⊰":"prurel","⊲":"vltri","⋪":"nltri","⊳":"vrtri","⋫":"nrtri","⊴":"ltrie","⋬":"nltrie","⊴⃒":"nvltrie","⊵":"rtrie","⋭":"nrtrie","⊵⃒":"nvrtrie","⊶":"origof","⊷":"imof","⊸":"mumap","⊹":"hercon","⊺":"intcal","⊻":"veebar","⊽":"barvee","⊾":"angrtvb","⊿":"lrtri","⋀":"Wedge","⋁":"Vee","⋂":"xcap","⋃":"xcup","⋄":"diam","⋅":"sdot","⋆":"Star","⋇":"divonx","⋈":"bowtie","⋉":"ltimes","⋊":"rtimes","⋋":"lthree","⋌":"rthree","⋍":"bsime","⋎":"cuvee","⋏":"cuwed","⋐":"Sub","⋑":"Sup","⋒":"Cap","⋓":"Cup","⋔":"fork","⋕":"epar","⋖":"ltdot","⋗":"gtdot","⋘":"Ll","⋘̸":"nLl","⋙":"Gg","⋙̸":"nGg","⋚︀":"lesg","⋚":"leg","⋛":"gel","⋛︀":"gesl","⋞":"cuepr","⋟":"cuesc","⋦":"lnsim","⋧":"gnsim","⋨":"prnsim","⋩":"scnsim","⋮":"vellip","⋯":"ctdot","⋰":"utdot","⋱":"dtdot","⋲":"disin","⋳":"isinsv","⋴":"isins","⋵":"isindot","⋵̸":"notindot","⋶":"notinvc","⋷":"notinvb","⋹":"isinE","⋹̸":"notinE","⋺":"nisd","⋻":"xnis","⋼":"nis","⋽":"notnivc","⋾":"notnivb","⌅":"barwed","⌆":"Barwed","⌌":"drcrop","⌍":"dlcrop","⌎":"urcrop","⌏":"ulcrop","⌐":"bnot","⌒":"profline","⌓":"profsurf","⌕":"telrec","⌖":"target","⌜":"ulcorn","⌝":"urcorn","⌞":"dlcorn","⌟":"drcorn","⌢":"frown","⌣":"smile","⌭":"cylcty","⌮":"profalar","⌶":"topbot","⌽":"ovbar","⌿":"solbar","⍼":"angzarr","⎰":"lmoust","⎱":"rmoust","⎴":"tbrk","⎵":"bbrk","⎶":"bbrktbrk","⏜":"OverParenthesis","⏝":"UnderParenthesis","⏞":"OverBrace","⏟":"UnderBrace","⏢":"trpezium","⏧":"elinters","␣":"blank","─":"boxh","│":"boxv","┌":"boxdr","┐":"boxdl","└":"boxur","┘":"boxul","├":"boxvr","┤":"boxvl","┬":"boxhd","┴":"boxhu","┼":"boxvh","═":"boxH","║":"boxV","╒":"boxdR","╓":"boxDr","╔":"boxDR","╕":"boxdL","╖":"boxDl","╗":"boxDL","╘":"boxuR","╙":"boxUr","╚":"boxUR","╛":"boxuL","╜":"boxUl","╝":"boxUL","╞":"boxvR","╟":"boxVr","╠":"boxVR","╡":"boxvL","╢":"boxVl","╣":"boxVL","╤":"boxHd","╥":"boxhD","╦":"boxHD","╧":"boxHu","╨":"boxhU","╩":"boxHU","╪":"boxvH","╫":"boxVh","╬":"boxVH","▀":"uhblk","▄":"lhblk","█":"block","░":"blk14","▒":"blk12","▓":"blk34","□":"squ","▪":"squf","▫":"EmptyVerySmallSquare","▭":"rect","▮":"marker","▱":"fltns","△":"xutri","▴":"utrif","▵":"utri","▸":"rtrif","▹":"rtri","▽":"xdtri","▾":"dtrif","▿":"dtri","◂":"ltrif","◃":"ltri","◊":"loz","○":"cir","◬":"tridot","◯":"xcirc","◸":"ultri","◹":"urtri","◺":"lltri","◻":"EmptySmallSquare","◼":"FilledSmallSquare","★":"starf","☆":"star","☎":"phone","♀":"female","♂":"male","♠":"spades","♣":"clubs","♥":"hearts","♦":"diams","♪":"sung","✓":"check","✗":"cross","✠":"malt","✶":"sext","❘":"VerticalSeparator","⟈":"bsolhsub","⟉":"suphsol","⟵":"xlarr","⟶":"xrarr","⟷":"xharr","⟸":"xlArr","⟹":"xrArr","⟺":"xhArr","⟼":"xmap","⟿":"dzigrarr","⤂":"nvlArr","⤃":"nvrArr","⤄":"nvHarr","⤅":"Map","⤌":"lbarr","⤍":"rbarr","⤎":"lBarr","⤏":"rBarr","⤐":"RBarr","⤑":"DDotrahd","⤒":"UpArrowBar","⤓":"DownArrowBar","⤖":"Rarrtl","⤙":"latail","⤚":"ratail","⤛":"lAtail","⤜":"rAtail","⤝":"larrfs","⤞":"rarrfs","⤟":"larrbfs","⤠":"rarrbfs","⤣":"nwarhk","⤤":"nearhk","⤥":"searhk","⤦":"swarhk","⤧":"nwnear","⤨":"toea","⤩":"tosa","⤪":"swnwar","⤳":"rarrc","⤳̸":"nrarrc","⤵":"cudarrr","⤶":"ldca","⤷":"rdca","⤸":"cudarrl","⤹":"larrpl","⤼":"curarrm","⤽":"cularrp","⥅":"rarrpl","⥈":"harrcir","⥉":"Uarrocir","⥊":"lurdshar","⥋":"ldrushar","⥎":"LeftRightVector","⥏":"RightUpDownVector","⥐":"DownLeftRightVector","⥑":"LeftUpDownVector","⥒":"LeftVectorBar","⥓":"RightVectorBar","⥔":"RightUpVectorBar","⥕":"RightDownVectorBar","⥖":"DownLeftVectorBar","⥗":"DownRightVectorBar","⥘":"LeftUpVectorBar","⥙":"LeftDownVectorBar","⥚":"LeftTeeVector","⥛":"RightTeeVector","⥜":"RightUpTeeVector","⥝":"RightDownTeeVector","⥞":"DownLeftTeeVector","⥟":"DownRightTeeVector","⥠":"LeftUpTeeVector","⥡":"LeftDownTeeVector","⥢":"lHar","⥣":"uHar","⥤":"rHar","⥥":"dHar","⥦":"luruhar","⥧":"ldrdhar","⥨":"ruluhar","⥩":"rdldhar","⥪":"lharul","⥫":"llhard","⥬":"rharul","⥭":"lrhard","⥮":"udhar","⥯":"duhar","⥰":"RoundImplies","⥱":"erarr","⥲":"simrarr","⥳":"larrsim","⥴":"rarrsim","⥵":"rarrap","⥶":"ltlarr","⥸":"gtrarr","⥹":"subrarr","⥻":"suplarr","⥼":"lfisht","⥽":"rfisht","⥾":"ufisht","⥿":"dfisht","⦚":"vzigzag","⦜":"vangrt","⦝":"angrtvbd","⦤":"ange","⦥":"range","⦦":"dwangle","⦧":"uwangle","⦨":"angmsdaa","⦩":"angmsdab","⦪":"angmsdac","⦫":"angmsdad","⦬":"angmsdae","⦭":"angmsdaf","⦮":"angmsdag","⦯":"angmsdah","⦰":"bemptyv","⦱":"demptyv","⦲":"cemptyv","⦳":"raemptyv","⦴":"laemptyv","⦵":"ohbar","⦶":"omid","⦷":"opar","⦹":"operp","⦻":"olcross","⦼":"odsold","⦾":"olcir","⦿":"ofcir","⧀":"olt","⧁":"ogt","⧂":"cirscir","⧃":"cirE","⧄":"solb","⧅":"bsolb","⧉":"boxbox","⧍":"trisb","⧎":"rtriltri","⧏":"LeftTriangleBar","⧏̸":"NotLeftTriangleBar","⧐":"RightTriangleBar","⧐̸":"NotRightTriangleBar","⧜":"iinfin","⧝":"infintie","⧞":"nvinfin","⧣":"eparsl","⧤":"smeparsl","⧥":"eqvparsl","⧫":"lozf","⧴":"RuleDelayed","⧶":"dsol","⨀":"xodot","⨁":"xoplus","⨂":"xotime","⨄":"xuplus","⨆":"xsqcup","⨍":"fpartint","⨐":"cirfnint","⨑":"awint","⨒":"rppolint","⨓":"scpolint","⨔":"npolint","⨕":"pointint","⨖":"quatint","⨗":"intlarhk","⨢":"pluscir","⨣":"plusacir","⨤":"simplus","⨥":"plusdu","⨦":"plussim","⨧":"plustwo","⨩":"mcomma","⨪":"minusdu","⨭":"loplus","⨮":"roplus","⨯":"Cross","⨰":"timesd","⨱":"timesbar","⨳":"smashp","⨴":"lotimes","⨵":"rotimes","⨶":"otimesas","⨷":"Otimes","⨸":"odiv","⨹":"triplus","⨺":"triminus","⨻":"tritime","⨼":"iprod","⨿":"amalg","⩀":"capdot","⩂":"ncup","⩃":"ncap","⩄":"capand","⩅":"cupor","⩆":"cupcap","⩇":"capcup","⩈":"cupbrcap","⩉":"capbrcup","⩊":"cupcup","⩋":"capcap","⩌":"ccups","⩍":"ccaps","⩐":"ccupssm","⩓":"And","⩔":"Or","⩕":"andand","⩖":"oror","⩗":"orslope","⩘":"andslope","⩚":"andv","⩛":"orv","⩜":"andd","⩝":"ord","⩟":"wedbar","⩦":"sdote","⩪":"simdot","⩭":"congdot","⩭̸":"ncongdot","⩮":"easter","⩯":"apacir","⩰":"apE","⩰̸":"napE","⩱":"eplus","⩲":"pluse","⩳":"Esim","⩷":"eDDot","⩸":"equivDD","⩹":"ltcir","⩺":"gtcir","⩻":"ltquest","⩼":"gtquest","⩽":"les","⩽̸":"nles","⩾":"ges","⩾̸":"nges","⩿":"lesdot","⪀":"gesdot","⪁":"lesdoto","⪂":"gesdoto","⪃":"lesdotor","⪄":"gesdotol","⪅":"lap","⪆":"gap","⪇":"lne","⪈":"gne","⪉":"lnap","⪊":"gnap","⪋":"lEg","⪌":"gEl","⪍":"lsime","⪎":"gsime","⪏":"lsimg","⪐":"gsiml","⪑":"lgE","⪒":"glE","⪓":"lesges","⪔":"gesles","⪕":"els","⪖":"egs","⪗":"elsdot","⪘":"egsdot","⪙":"el","⪚":"eg","⪝":"siml","⪞":"simg","⪟":"simlE","⪠":"simgE","⪡":"LessLess","⪡̸":"NotNestedLessLess","⪢":"GreaterGreater","⪢̸":"NotNestedGreaterGreater","⪤":"glj","⪥":"gla","⪦":"ltcc","⪧":"gtcc","⪨":"lescc","⪩":"gescc","⪪":"smt","⪫":"lat","⪬":"smte","⪬︀":"smtes","⪭":"late","⪭︀":"lates","⪮":"bumpE","⪯":"pre","⪯̸":"npre","⪰":"sce","⪰̸":"nsce","⪳":"prE","⪴":"scE","⪵":"prnE","⪶":"scnE","⪷":"prap","⪸":"scap","⪹":"prnap","⪺":"scnap","⪻":"Pr","⪼":"Sc","⪽":"subdot","⪾":"supdot","⪿":"subplus","⫀":"supplus","⫁":"submult","⫂":"supmult","⫃":"subedot","⫄":"supedot","⫅":"subE","⫅̸":"nsubE","⫆":"supE","⫆̸":"nsupE","⫇":"subsim","⫈":"supsim","⫋︀":"vsubnE","⫋":"subnE","⫌︀":"vsupnE","⫌":"supnE","⫏":"csub","⫐":"csup","⫑":"csube","⫒":"csupe","⫓":"subsup","⫔":"supsub","⫕":"subsub","⫖":"supsup","⫗":"suphsub","⫘":"supdsub","⫙":"forkv","⫚":"topfork","⫛":"mlcp","⫤":"Dashv","⫦":"Vdashl","⫧":"Barv","⫨":"vBar","⫩":"vBarv","⫫":"Vbar","⫬":"Not","⫭":"bNot","⫮":"rnmid","⫯":"cirmid","⫰":"midcir","⫱":"topcir","⫲":"nhpar","⫳":"parsim","⫽":"parsl","⫽⃥":"nparsl","♭":"flat","♮":"natur","♯":"sharp","¤":"curren","¢":"cent",$:"dollar","£":"pound","¥":"yen","€":"euro","¹":"sup1","½":"half","⅓":"frac13","¼":"frac14","⅕":"frac15","⅙":"frac16","⅛":"frac18","²":"sup2","⅔":"frac23","⅖":"frac25","³":"sup3","¾":"frac34","⅗":"frac35","⅜":"frac38","⅘":"frac45","⅚":"frac56","⅝":"frac58","⅞":"frac78","𝒶":"ascr","𝕒":"aopf","𝔞":"afr","𝔸":"Aopf","𝔄":"Afr","𝒜":"Ascr","ª":"ordf","á":"aacute","Á":"Aacute","à":"agrave","À":"Agrave","ă":"abreve","Ă":"Abreve","â":"acirc","Â":"Acirc","å":"aring","Å":"angst","ä":"auml","Ä":"Auml","ã":"atilde","Ã":"Atilde","ą":"aogon","Ą":"Aogon","ā":"amacr","Ā":"Amacr","æ":"aelig","Æ":"AElig","𝒷":"bscr","𝕓":"bopf","𝔟":"bfr","𝔹":"Bopf","ℬ":"Bscr","𝔅":"Bfr","𝔠":"cfr","𝒸":"cscr","𝕔":"copf","ℭ":"Cfr","𝒞":"Cscr","ℂ":"Copf","ć":"cacute","Ć":"Cacute","ĉ":"ccirc","Ĉ":"Ccirc","č":"ccaron","Č":"Ccaron","ċ":"cdot","Ċ":"Cdot","ç":"ccedil","Ç":"Ccedil","℅":"incare","𝔡":"dfr","ⅆ":"dd","𝕕":"dopf","𝒹":"dscr","𝒟":"Dscr","𝔇":"Dfr","ⅅ":"DD","𝔻":"Dopf","ď":"dcaron","Ď":"Dcaron","đ":"dstrok","Đ":"Dstrok","ð":"eth","Ð":"ETH","ⅇ":"ee","ℯ":"escr","𝔢":"efr","𝕖":"eopf","ℰ":"Escr","𝔈":"Efr","𝔼":"Eopf","é":"eacute","É":"Eacute","è":"egrave","È":"Egrave","ê":"ecirc","Ê":"Ecirc","ě":"ecaron","Ě":"Ecaron","ë":"euml","Ë":"Euml","ė":"edot","Ė":"Edot","ę":"eogon","Ę":"Eogon","ē":"emacr","Ē":"Emacr","𝔣":"ffr","𝕗":"fopf","𝒻":"fscr","𝔉":"Ffr","𝔽":"Fopf","ℱ":"Fscr","ﬀ":"fflig","ﬃ":"ffilig","ﬄ":"ffllig","ﬁ":"filig",fj:"fjlig","ﬂ":"fllig","ƒ":"fnof","ℊ":"gscr","𝕘":"gopf","𝔤":"gfr","𝒢":"Gscr","𝔾":"Gopf","𝔊":"Gfr","ǵ":"gacute","ğ":"gbreve","Ğ":"Gbreve","ĝ":"gcirc","Ĝ":"Gcirc","ġ":"gdot","Ġ":"Gdot","Ģ":"Gcedil","𝔥":"hfr","ℎ":"planckh","𝒽":"hscr","𝕙":"hopf","ℋ":"Hscr","ℌ":"Hfr","ℍ":"Hopf","ĥ":"hcirc","Ĥ":"Hcirc","ℏ":"hbar","ħ":"hstrok","Ħ":"Hstrok","𝕚":"iopf","𝔦":"ifr","𝒾":"iscr","ⅈ":"ii","𝕀":"Iopf","ℐ":"Iscr","ℑ":"Im","í":"iacute","Í":"Iacute","ì":"igrave","Ì":"Igrave","î":"icirc","Î":"Icirc","ï":"iuml","Ï":"Iuml","ĩ":"itilde","Ĩ":"Itilde","İ":"Idot","į":"iogon","Į":"Iogon","ī":"imacr","Ī":"Imacr","ĳ":"ijlig","Ĳ":"IJlig","ı":"imath","𝒿":"jscr","𝕛":"jopf","𝔧":"jfr","𝒥":"Jscr","𝔍":"Jfr","𝕁":"Jopf","ĵ":"jcirc","Ĵ":"Jcirc","ȷ":"jmath","𝕜":"kopf","𝓀":"kscr","𝔨":"kfr","𝒦":"Kscr","𝕂":"Kopf","𝔎":"Kfr","ķ":"kcedil","Ķ":"Kcedil","𝔩":"lfr","𝓁":"lscr","ℓ":"ell","𝕝":"lopf","ℒ":"Lscr","𝔏":"Lfr","𝕃":"Lopf","ĺ":"lacute","Ĺ":"Lacute","ľ":"lcaron","Ľ":"Lcaron","ļ":"lcedil","Ļ":"Lcedil","ł":"lstrok","Ł":"Lstrok","ŀ":"lmidot","Ŀ":"Lmidot","𝔪":"mfr","𝕞":"mopf","𝓂":"mscr","𝔐":"Mfr","𝕄":"Mopf","ℳ":"Mscr","𝔫":"nfr","𝕟":"nopf","𝓃":"nscr","ℕ":"Nopf","𝒩":"Nscr","𝔑":"Nfr","ń":"nacute","Ń":"Nacute","ň":"ncaron","Ň":"Ncaron","ñ":"ntilde","Ñ":"Ntilde","ņ":"ncedil","Ņ":"Ncedil","№":"numero","ŋ":"eng","Ŋ":"ENG","𝕠":"oopf","𝔬":"ofr","ℴ":"oscr","𝒪":"Oscr","𝔒":"Ofr","𝕆":"Oopf","º":"ordm","ó":"oacute","Ó":"Oacute","ò":"ograve","Ò":"Ograve","ô":"ocirc","Ô":"Ocirc","ö":"ouml","Ö":"Ouml","ő":"odblac","Ő":"Odblac","õ":"otilde","Õ":"Otilde","ø":"oslash","Ø":"Oslash","ō":"omacr","Ō":"Omacr","œ":"oelig","Œ":"OElig","𝔭":"pfr","𝓅":"pscr","𝕡":"popf","ℙ":"Popf","𝔓":"Pfr","𝒫":"Pscr","𝕢":"qopf","𝔮":"qfr","𝓆":"qscr","𝒬":"Qscr","𝔔":"Qfr","ℚ":"Qopf","ĸ":"kgreen","𝔯":"rfr","𝕣":"ropf","𝓇":"rscr","ℛ":"Rscr","ℜ":"Re","ℝ":"Ropf","ŕ":"racute","Ŕ":"Racute","ř":"rcaron","Ř":"Rcaron","ŗ":"rcedil","Ŗ":"Rcedil","𝕤":"sopf","𝓈":"sscr","𝔰":"sfr","𝕊":"Sopf","𝔖":"Sfr","𝒮":"Sscr","Ⓢ":"oS","ś":"sacute","Ś":"Sacute","ŝ":"scirc","Ŝ":"Scirc","š":"scaron","Š":"Scaron","ş":"scedil","Ş":"Scedil","ß":"szlig","𝔱":"tfr","𝓉":"tscr","𝕥":"topf","𝒯":"Tscr","𝔗":"Tfr","𝕋":"Topf","ť":"tcaron","Ť":"Tcaron","ţ":"tcedil","Ţ":"Tcedil","™":"trade","ŧ":"tstrok","Ŧ":"Tstrok","𝓊":"uscr","𝕦":"uopf","𝔲":"ufr","𝕌":"Uopf","𝔘":"Ufr","𝒰":"Uscr","ú":"uacute","Ú":"Uacute","ù":"ugrave","Ù":"Ugrave","ŭ":"ubreve","Ŭ":"Ubreve","û":"ucirc","Û":"Ucirc","ů":"uring","Ů":"Uring","ü":"uuml","Ü":"Uuml","ű":"udblac","Ű":"Udblac","ũ":"utilde","Ũ":"Utilde","ų":"uogon","Ų":"Uogon","ū":"umacr","Ū":"Umacr","𝔳":"vfr","𝕧":"vopf","𝓋":"vscr","𝔙":"Vfr","𝕍":"Vopf","𝒱":"Vscr","𝕨":"wopf","𝓌":"wscr","𝔴":"wfr","𝒲":"Wscr","𝕎":"Wopf","𝔚":"Wfr","ŵ":"wcirc","Ŵ":"Wcirc","𝔵":"xfr","𝓍":"xscr","𝕩":"xopf","𝕏":"Xopf","𝔛":"Xfr","𝒳":"Xscr","𝔶":"yfr","𝓎":"yscr","𝕪":"yopf","𝒴":"Yscr","𝔜":"Yfr","𝕐":"Yopf","ý":"yacute","Ý":"Yacute","ŷ":"ycirc","Ŷ":"Ycirc","ÿ":"yuml","Ÿ":"Yuml","𝓏":"zscr","𝔷":"zfr","𝕫":"zopf","ℨ":"Zfr","ℤ":"Zopf","𝒵":"Zscr","ź":"zacute","Ź":"Zacute","ž":"zcaron","Ž":"Zcaron","ż":"zdot","Ż":"Zdot","Ƶ":"imped","þ":"thorn","Þ":"THORN","ŉ":"napos","α":"alpha","Α":"Alpha","β":"beta","Β":"Beta","γ":"gamma","Γ":"Gamma","δ":"delta","Δ":"Delta","ε":"epsi","ϵ":"epsiv","Ε":"Epsilon","ϝ":"gammad","Ϝ":"Gammad","ζ":"zeta","Ζ":"Zeta","η":"eta","Η":"Eta","θ":"theta","ϑ":"thetav","Θ":"Theta","ι":"iota","Ι":"Iota","κ":"kappa","ϰ":"kappav","Κ":"Kappa","λ":"lambda","Λ":"Lambda","μ":"mu","µ":"micro","Μ":"Mu","ν":"nu","Ν":"Nu","ξ":"xi","Ξ":"Xi","ο":"omicron","Ο":"Omicron","π":"pi","ϖ":"piv","Π":"Pi","ρ":"rho","ϱ":"rhov","Ρ":"Rho","σ":"sigma","Σ":"Sigma","ς":"sigmaf","τ":"tau","Τ":"Tau","υ":"upsi","Υ":"Upsilon","ϒ":"Upsi","φ":"phi","ϕ":"phiv","Φ":"Phi","χ":"chi","Χ":"Chi","ψ":"psi","Ψ":"Psi","ω":"omega","Ω":"ohm","а":"acy","А":"Acy","б":"bcy","Б":"Bcy","в":"vcy","В":"Vcy","г":"gcy","Г":"Gcy","ѓ":"gjcy","Ѓ":"GJcy","д":"dcy","Д":"Dcy","ђ":"djcy","Ђ":"DJcy","е":"iecy","Е":"IEcy","ё":"iocy","Ё":"IOcy","є":"jukcy","Є":"Jukcy","ж":"zhcy","Ж":"ZHcy","з":"zcy","З":"Zcy","ѕ":"dscy","Ѕ":"DScy","и":"icy","И":"Icy","і":"iukcy","І":"Iukcy","ї":"yicy","Ї":"YIcy","й":"jcy","Й":"Jcy","ј":"jsercy","Ј":"Jsercy","к":"kcy","К":"Kcy","ќ":"kjcy","Ќ":"KJcy","л":"lcy","Л":"Lcy","љ":"ljcy","Љ":"LJcy","м":"mcy","М":"Mcy","н":"ncy","Н":"Ncy","њ":"njcy","Њ":"NJcy","о":"ocy","О":"Ocy","п":"pcy","П":"Pcy","р":"rcy","Р":"Rcy","с":"scy","С":"Scy","т":"tcy","Т":"Tcy","ћ":"tshcy","Ћ":"TSHcy","у":"ucy","У":"Ucy","ў":"ubrcy","Ў":"Ubrcy","ф":"fcy","Ф":"Fcy","х":"khcy","Х":"KHcy","ц":"tscy","Ц":"TScy","ч":"chcy","Ч":"CHcy","џ":"dzcy","Џ":"DZcy","ш":"shcy","Ш":"SHcy","щ":"shchcy","Щ":"SHCHcy","ъ":"hardcy","Ъ":"HARDcy","ы":"ycy","Ы":"Ycy","ь":"softcy","Ь":"SOFTcy","э":"ecy","Э":"Ecy","ю":"yucy","Ю":"YUcy","я":"yacy","Я":"YAcy","ℵ":"aleph","ℶ":"beth","ℷ":"gimel","ℸ":"daleth"},p=/["&'<>`]/g,f={'"':"&quot;","&":"&amp;","'":"&#x27;","<":"&lt;",">":"&gt;","`":"&#x60;"},d=/&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,h=/[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,g=/&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,m={aacute:"á",Aacute:"Á",abreve:"ă",Abreve:"Ă",ac:"∾",acd:"∿",acE:"∾̳",acirc:"â",Acirc:"Â",acute:"´",acy:"а",Acy:"А",aelig:"æ",AElig:"Æ",af:"⁡",afr:"𝔞",Afr:"𝔄",agrave:"à",Agrave:"À",alefsym:"ℵ",aleph:"ℵ",alpha:"α",Alpha:"Α",amacr:"ā",Amacr:"Ā",amalg:"⨿",amp:"&",AMP:"&",and:"∧",And:"⩓",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",aogon:"ą",Aogon:"Ą",aopf:"𝕒",Aopf:"𝔸",ap:"≈",apacir:"⩯",ape:"≊",apE:"⩰",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",aring:"å",Aring:"Å",ascr:"𝒶",Ascr:"𝒜",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",atilde:"ã",Atilde:"Ã",auml:"ä",Auml:"Ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",barwed:"⌅",Barwed:"⌆",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",Bcy:"Б",bdquo:"„",becaus:"∵",because:"∵",Because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",beta:"β",Beta:"Β",beth:"ℶ",between:"≬",bfr:"𝔟",Bfr:"𝔅",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bNot:"⫭",bopf:"𝕓",Bopf:"𝔹",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxdl:"┐",boxdL:"╕",boxDl:"╖",boxDL:"╗",boxdr:"┌",boxdR:"╒",boxDr:"╓",boxDR:"╔",boxh:"─",boxH:"═",boxhd:"┬",boxhD:"╥",boxHd:"╤",boxHD:"╦",boxhu:"┴",boxhU:"╨",boxHu:"╧",boxHU:"╩",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxul:"┘",boxuL:"╛",boxUl:"╜",boxUL:"╝",boxur:"└",boxuR:"╘",boxUr:"╙",boxUR:"╚",boxv:"│",boxV:"║",boxvh:"┼",boxvH:"╪",boxVh:"╫",boxVH:"╬",boxvl:"┤",boxvL:"╡",boxVl:"╢",boxVL:"╣",boxvr:"├",boxvR:"╞",boxVr:"╟",boxVR:"╠",bprime:"‵",breve:"˘",Breve:"˘",brvbar:"¦",bscr:"𝒷",Bscr:"ℬ",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpe:"≏",bumpE:"⪮",bumpeq:"≏",Bumpeq:"≎",cacute:"ć",Cacute:"Ć",cap:"∩",Cap:"⋒",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",ccaron:"č",Ccaron:"Č",ccedil:"ç",Ccedil:"Ç",ccirc:"ĉ",Ccirc:"Ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",Cdot:"Ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",CenterDot:"·",cfr:"𝔠",Cfr:"ℭ",chcy:"ч",CHcy:"Ч",check:"✓",checkmark:"✓",chi:"χ",Chi:"Χ",cir:"○",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cire:"≗",cirE:"⧃",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",colon:":",Colon:"∷",colone:"≔",Colone:"⩴",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",conint:"∮",Conint:"∯",ContourIntegral:"∮",copf:"𝕔",Copf:"ℂ",coprod:"∐",Coproduct:"∐",copy:"©",COPY:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",cross:"✗",Cross:"⨯",cscr:"𝒸",Cscr:"𝒞",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",Cup:"⋓",cupbrcap:"⩈",cupcap:"⩆",CupCap:"≍",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dagger:"†",Dagger:"‡",daleth:"ℸ",darr:"↓",dArr:"⇓",Darr:"↡",dash:"‐",dashv:"⊣",Dashv:"⫤",dbkarow:"⤏",dblac:"˝",dcaron:"ď",Dcaron:"Ď",dcy:"д",Dcy:"Д",dd:"ⅆ",DD:"ⅅ",ddagger:"‡",ddarr:"⇊",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",delta:"δ",Delta:"Δ",demptyv:"⦱",dfisht:"⥿",dfr:"𝔡",Dfr:"𝔇",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",diamond:"⋄",Diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",DJcy:"Ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"𝕕",Dopf:"𝔻",dot:"˙",Dot:"¨",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",downarrow:"↓",Downarrow:"⇓",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"𝒹",Dscr:"𝒟",dscy:"ѕ",DScy:"Ѕ",dsol:"⧶",dstrok:"đ",Dstrok:"Đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",DZcy:"Џ",dzigrarr:"⟿",eacute:"é",Eacute:"É",easter:"⩮",ecaron:"ě",Ecaron:"Ě",ecir:"≖",ecirc:"ê",Ecirc:"Ê",ecolon:"≕",ecy:"э",Ecy:"Э",eDDot:"⩷",edot:"ė",eDot:"≑",Edot:"Ė",ee:"ⅇ",efDot:"≒",efr:"𝔢",Efr:"𝔈",eg:"⪚",egrave:"è",Egrave:"È",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",Emacr:"Ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp:" ",emsp13:" ",emsp14:" ",eng:"ŋ",ENG:"Ŋ",ensp:" ",eogon:"ę",Eogon:"Ę",eopf:"𝕖",Eopf:"𝔼",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",Epsilon:"Ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",escr:"ℯ",Escr:"ℰ",esdot:"≐",esim:"≂",Esim:"⩳",eta:"η",Eta:"Η",eth:"ð",ETH:"Ð",euml:"ë",Euml:"Ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",exponentiale:"ⅇ",ExponentialE:"ⅇ",fallingdotseq:"≒",fcy:"ф",Fcy:"Ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"𝔣",Ffr:"𝔉",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"𝕗",Fopf:"𝔽",forall:"∀",ForAll:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",Fscr:"ℱ",gacute:"ǵ",gamma:"γ",Gamma:"Γ",gammad:"ϝ",Gammad:"Ϝ",gap:"⪆",gbreve:"ğ",Gbreve:"Ğ",Gcedil:"Ģ",gcirc:"ĝ",Gcirc:"Ĝ",gcy:"г",Gcy:"Г",gdot:"ġ",Gdot:"Ġ",ge:"≥",gE:"≧",gel:"⋛",gEl:"⪌",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"𝔤",Gfr:"𝔊",gg:"≫",Gg:"⋙",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",GJcy:"Ѓ",gl:"≷",gla:"⪥",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gnE:"≩",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"𝕘",Gopf:"𝔾",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",gscr:"ℊ",Gscr:"𝒢",gsim:"≳",gsime:"⪎",gsiml:"⪐",gt:">",Gt:"≫",GT:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",hardcy:"ъ",HARDcy:"Ъ",harr:"↔",hArr:"⇔",harrcir:"⥈",harrw:"↭",Hat:"^",hbar:"ℏ",hcirc:"ĥ",Hcirc:"Ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",Hfr:"ℌ",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",Hopf:"ℍ",horbar:"―",HorizontalLine:"─",hscr:"𝒽",Hscr:"ℋ",hslash:"ℏ",hstrok:"ħ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",iacute:"í",Iacute:"Í",ic:"⁣",icirc:"î",Icirc:"Î",icy:"и",Icy:"И",Idot:"İ",iecy:"е",IEcy:"Е",iexcl:"¡",iff:"⇔",ifr:"𝔦",Ifr:"ℑ",igrave:"ì",Igrave:"Ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",IJlig:"Ĳ",Im:"ℑ",imacr:"ī",Imacr:"Ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",Implies:"⇒",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",Int:"∬",intcal:"⊺",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",iocy:"ё",IOcy:"Ё",iogon:"į",Iogon:"Į",iopf:"𝕚",Iopf:"𝕀",iota:"ι",Iota:"Ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",Iscr:"ℐ",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",Itilde:"Ĩ",iukcy:"і",Iukcy:"І",iuml:"ï",Iuml:"Ï",jcirc:"ĵ",Jcirc:"Ĵ",jcy:"й",Jcy:"Й",jfr:"𝔧",Jfr:"𝔍",jmath:"ȷ",jopf:"𝕛",Jopf:"𝕁",jscr:"𝒿",Jscr:"𝒥",jsercy:"ј",Jsercy:"Ј",jukcy:"є",Jukcy:"Є",kappa:"κ",Kappa:"Κ",kappav:"ϰ",kcedil:"ķ",Kcedil:"Ķ",kcy:"к",Kcy:"К",kfr:"𝔨",Kfr:"𝔎",kgreen:"ĸ",khcy:"х",KHcy:"Х",kjcy:"ќ",KJcy:"Ќ",kopf:"𝕜",Kopf:"𝕂",kscr:"𝓀",Kscr:"𝒦",lAarr:"⇚",lacute:"ĺ",Lacute:"Ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",Lambda:"Λ",lang:"⟨",Lang:"⟪",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",larr:"←",lArr:"⇐",Larr:"↞",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",lAtail:"⤛",late:"⪭",lates:"⪭︀",lbarr:"⤌",lBarr:"⤎",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",Lcaron:"Ľ",lcedil:"ļ",Lcedil:"Ļ",lceil:"⌈",lcub:"{",lcy:"л",Lcy:"Л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",lE:"≦",LeftAngleBracket:"⟨",leftarrow:"←",Leftarrow:"⇐",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",Leftrightarrow:"⇔",LeftRightArrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",leg:"⋚",lEg:"⪋",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"𝔩",Lfr:"𝔏",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",LJcy:"Љ",ll:"≪",Ll:"⋘",llarr:"⇇",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",lmidot:"ŀ",Lmidot:"Ŀ",lmoust:"⎰",lmoustache:"⎰",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lnE:"≨",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",Longleftarrow:"⟸",LongLeftArrow:"⟵",longleftrightarrow:"⟷",Longleftrightarrow:"⟺",LongLeftRightArrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",Longrightarrow:"⟹",LongRightArrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"𝕝",Lopf:"𝕃",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",Lscr:"ℒ",lsh:"↰",Lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",Lstrok:"Ł",lt:"<",Lt:"≪",LT:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",map:"↦",Map:"⤅",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",Mcy:"М",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",mfr:"𝔪",Mfr:"𝔐",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"𝕞",Mopf:"𝕄",mp:"∓",mscr:"𝓂",Mscr:"ℳ",mstpos:"∾",mu:"μ",Mu:"Μ",multimap:"⊸",mumap:"⊸",nabla:"∇",nacute:"ń",Nacute:"Ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",Ncaron:"Ň",ncedil:"ņ",Ncedil:"Ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",Ncy:"Н",ndash:"–",ne:"≠",nearhk:"⤤",nearr:"↗",neArr:"⇗",nearrow:"↗",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",nexist:"∄",nexists:"∄",nfr:"𝔫",Nfr:"𝔑",nge:"≱",ngE:"≧̸",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",ngt:"≯",nGt:"≫⃒",ngtr:"≯",nGtv:"≫̸",nharr:"↮",nhArr:"⇎",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",NJcy:"Њ",nlarr:"↚",nlArr:"⇍",nldr:"‥",nle:"≰",nlE:"≦̸",nleftarrow:"↚",nLeftarrow:"⇍",nleftrightarrow:"↮",nLeftrightarrow:"⇎",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nlt:"≮",nLt:"≪⃒",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",nopf:"𝕟",Nopf:"ℕ",not:"¬",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrarr:"↛",nrArr:"⇏",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nRightarrow:"⇏",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"𝓃",Nscr:"𝒩",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsube:"⊈",nsubE:"⫅̸",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupe:"⊉",nsupE:"⫆̸",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntilde:"ñ",Ntilde:"Ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",Nu:"Ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",nVDash:"⊯",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwarr:"↖",nwArr:"⇖",nwarrow:"↖",nwnear:"⤧",oacute:"ó",Oacute:"Ó",oast:"⊛",ocir:"⊚",ocirc:"ô",Ocirc:"Ô",ocy:"о",Ocy:"О",odash:"⊝",odblac:"ő",Odblac:"Ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",OElig:"Œ",ofcir:"⦿",ofr:"𝔬",Ofr:"𝔒",ogon:"˛",ograve:"ò",Ograve:"Ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",Omacr:"Ō",omega:"ω",Omega:"Ω",omicron:"ο",Omicron:"Ο",omid:"⦶",ominus:"⊖",oopf:"𝕠",Oopf:"𝕆",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",or:"∨",Or:"⩔",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",oscr:"ℴ",Oscr:"𝒪",oslash:"ø",Oslash:"Ø",osol:"⊘",otilde:"õ",Otilde:"Õ",otimes:"⊗",Otimes:"⨷",otimesas:"⨶",ouml:"ö",Ouml:"Ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",pcy:"п",Pcy:"П",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"𝔭",Pfr:"𝔓",phi:"φ",Phi:"Φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",Pi:"Π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",popf:"𝕡",Popf:"ℙ",pound:"£",pr:"≺",Pr:"⪻",prap:"⪷",prcue:"≼",pre:"⪯",prE:"⪳",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",Prime:"″",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportion:"∷",Proportional:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"𝓅",Pscr:"𝒫",psi:"ψ",Psi:"Ψ",puncsp:" ",qfr:"𝔮",Qfr:"𝔔",qint:"⨌",qopf:"𝕢",Qopf:"ℚ",qprime:"⁗",qscr:"𝓆",Qscr:"𝒬",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',QUOT:'"',rAarr:"⇛",race:"∽̱",racute:"ŕ",Racute:"Ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",Rang:"⟫",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarr:"→",rArr:"⇒",Rarr:"↠",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",Rarrtl:"⤖",rarrw:"↝",ratail:"⤚",rAtail:"⤜",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rBarr:"⤏",RBarr:"⤐",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",Rcaron:"Ř",rcedil:"ŗ",Rcedil:"Ŗ",rceil:"⌉",rcub:"}",rcy:"р",Rcy:"Р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",Re:"ℜ",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",reg:"®",REG:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",Rfr:"ℜ",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",Rho:"Ρ",rhov:"ϱ",RightAngleBracket:"⟩",rightarrow:"→",Rightarrow:"⇒",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",Ropf:"ℝ",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",rscr:"𝓇",Rscr:"ℛ",rsh:"↱",Rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",sacute:"ś",Sacute:"Ś",sbquo:"‚",sc:"≻",Sc:"⪼",scap:"⪸",scaron:"š",Scaron:"Š",sccue:"≽",sce:"⪰",scE:"⪴",scedil:"ş",Scedil:"Ş",scirc:"ŝ",Scirc:"Ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",Scy:"С",sdot:"⋅",sdotb:"⊡",sdote:"⩦",searhk:"⤥",searr:"↘",seArr:"⇘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"𝔰",Sfr:"𝔖",sfrown:"⌢",sharp:"♯",shchcy:"щ",SHCHcy:"Щ",shcy:"ш",SHcy:"Ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",sigma:"σ",Sigma:"Σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",SOFTcy:"Ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"𝕤",Sopf:"𝕊",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squf:"▪",srarr:"→",sscr:"𝓈",Sscr:"𝒮",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",Star:"⋆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",Sub:"⋐",subdot:"⪽",sube:"⊆",subE:"⫅",subedot:"⫃",submult:"⫁",subne:"⊊",subnE:"⫋",subplus:"⪿",subrarr:"⥹",subset:"⊂",Subset:"⋐",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",sum:"∑",Sum:"∑",sung:"♪",sup:"⊃",Sup:"⋑",sup1:"¹",sup2:"²",sup3:"³",supdot:"⪾",supdsub:"⫘",supe:"⊇",supE:"⫆",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supne:"⊋",supnE:"⫌",supplus:"⫀",supset:"⊃",Supset:"⋑",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swarr:"↙",swArr:"⇙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"\t",target:"⌖",tau:"τ",Tau:"Τ",tbrk:"⎴",tcaron:"ť",Tcaron:"Ť",tcedil:"ţ",Tcedil:"Ţ",tcy:"т",Tcy:"Т",tdot:"⃛",telrec:"⌕",tfr:"𝔱",Tfr:"𝔗",there4:"∴",therefore:"∴",Therefore:"∴",theta:"θ",Theta:"Θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",thinsp:" ",ThinSpace:" ",thkap:"≈",thksim:"∼",thorn:"þ",THORN:"Þ",tilde:"˜",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"𝕥",Topf:"𝕋",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",TRADE:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"𝓉",Tscr:"𝒯",tscy:"ц",TScy:"Ц",tshcy:"ћ",TSHcy:"Ћ",tstrok:"ŧ",Tstrok:"Ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uacute:"ú",Uacute:"Ú",uarr:"↑",uArr:"⇑",Uarr:"↟",Uarrocir:"⥉",ubrcy:"ў",Ubrcy:"Ў",ubreve:"ŭ",Ubreve:"Ŭ",ucirc:"û",Ucirc:"Û",ucy:"у",Ucy:"У",udarr:"⇅",udblac:"ű",Udblac:"Ű",udhar:"⥮",ufisht:"⥾",ufr:"𝔲",Ufr:"𝔘",ugrave:"ù",Ugrave:"Ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",Umacr:"Ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",uogon:"ų",Uogon:"Ų",uopf:"𝕦",Uopf:"𝕌",uparrow:"↑",Uparrow:"⇑",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",updownarrow:"↕",Updownarrow:"⇕",UpDownArrow:"↕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",upsi:"υ",Upsi:"ϒ",upsih:"ϒ",upsilon:"υ",Upsilon:"Υ",UpTee:"⊥",UpTeeArrow:"↥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",Uring:"Ů",urtri:"◹",uscr:"𝓊",Uscr:"𝒰",utdot:"⋰",utilde:"ũ",Utilde:"Ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uuml:"ü",Uuml:"Ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",vArr:"⇕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vBar:"⫨",Vbar:"⫫",vBarv:"⫩",vcy:"в",Vcy:"В",vdash:"⊢",vDash:"⊨",Vdash:"⊩",VDash:"⊫",Vdashl:"⫦",vee:"∨",Vee:"⋁",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",Verbar:"‖",vert:"|",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",vfr:"𝔳",Vfr:"𝔙",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"𝕧",Vopf:"𝕍",vprop:"∝",vrtri:"⊳",vscr:"𝓋",Vscr:"𝒱",vsubne:"⊊︀",vsubnE:"⫋︀",vsupne:"⊋︀",vsupnE:"⫌︀",Vvdash:"⊪",vzigzag:"⦚",wcirc:"ŵ",Wcirc:"Ŵ",wedbar:"⩟",wedge:"∧",Wedge:"⋀",wedgeq:"≙",weierp:"℘",wfr:"𝔴",Wfr:"𝔚",wopf:"𝕨",Wopf:"𝕎",wp:"℘",wr:"≀",wreath:"≀",wscr:"𝓌",Wscr:"𝒲",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"𝔵",Xfr:"𝔛",xharr:"⟷",xhArr:"⟺",xi:"ξ",Xi:"Ξ",xlarr:"⟵",xlArr:"⟸",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"𝕩",Xopf:"𝕏",xoplus:"⨁",xotime:"⨂",xrarr:"⟶",xrArr:"⟹",xscr:"𝓍",Xscr:"𝒳",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacute:"ý",Yacute:"Ý",yacy:"я",YAcy:"Я",ycirc:"ŷ",Ycirc:"Ŷ",ycy:"ы",Ycy:"Ы",yen:"¥",yfr:"𝔶",Yfr:"𝔜",yicy:"ї",YIcy:"Ї",yopf:"𝕪",Yopf:"𝕐",yscr:"𝓎",Yscr:"𝒴",yucy:"ю",YUcy:"Ю",yuml:"ÿ",Yuml:"Ÿ",zacute:"ź",Zacute:"Ź",zcaron:"ž",Zcaron:"Ž",zcy:"з",Zcy:"З",zdot:"ż",Zdot:"Ż",zeetrf:"ℨ",ZeroWidthSpace:"​",zeta:"ζ",Zeta:"Ζ",zfr:"𝔷",Zfr:"ℨ",zhcy:"ж",ZHcy:"Ж",zigrarr:"⇝",zopf:"𝕫",Zopf:"ℤ",zscr:"𝓏",Zscr:"𝒵",zwj:"‍",zwnj:"‌"},b={aacute:"á",Aacute:"Á",acirc:"â",Acirc:"Â",acute:"´",aelig:"æ",AElig:"Æ",agrave:"à",Agrave:"À",amp:"&",AMP:"&",aring:"å",Aring:"Å",atilde:"ã",Atilde:"Ã",auml:"ä",Auml:"Ä",brvbar:"¦",ccedil:"ç",Ccedil:"Ç",cedil:"¸",cent:"¢",copy:"©",COPY:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",Eacute:"É",ecirc:"ê",Ecirc:"Ê",egrave:"è",Egrave:"È",eth:"ð",ETH:"Ð",euml:"ë",Euml:"Ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",GT:">",iacute:"í",Iacute:"Í",icirc:"î",Icirc:"Î",iexcl:"¡",igrave:"ì",Igrave:"Ì",iquest:"¿",iuml:"ï",Iuml:"Ï",laquo:"«",lt:"<",LT:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",Ntilde:"Ñ",oacute:"ó",Oacute:"Ó",ocirc:"ô",Ocirc:"Ô",ograve:"ò",Ograve:"Ò",ordf:"ª",ordm:"º",oslash:"ø",Oslash:"Ø",otilde:"õ",Otilde:"Õ",ouml:"ö",Ouml:"Ö",para:"¶",plusmn:"±",pound:"£",quot:'"',QUOT:'"',raquo:"»",reg:"®",REG:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",THORN:"Þ",times:"×",uacute:"ú",Uacute:"Ú",ucirc:"û",Ucirc:"Û",ugrave:"ù",Ugrave:"Ù",uml:"¨",uuml:"ü",Uuml:"Ü",yacute:"ý",Yacute:"Ý",yen:"¥",yuml:"ÿ"},v={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},y=[1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65e3,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111],w=String.fromCharCode,D={}.hasOwnProperty,E=function(e,t){return D.call(e,t)},x=function(e,t){if(!e)return t
var r,n={}
for(r in t)n[r]=E(e,r)?e[r]:t[r]
return n},A=function(e,t){var r=""
return e>=55296&&e<=57343||e>1114111?(t&&C("character reference outside the permissible Unicode range"),"�"):E(v,e)?(t&&C("disallowed character reference"),v[e]):(t&&function(e,t){for(var r=-1,n=e.length;++r<n;)if(e[r]==t)return!0
return!1}(y,e)&&C("disallowed character reference"),e>65535&&(r+=w((e-=65536)>>>10&1023|55296),e=56320|1023&e),r+=w(e))},k=function(e){return"&#x"+e.toString(16).toUpperCase()+";"},_=function(e){return"&#"+e+";"},C=function(e){throw Error("Parse error: "+e)},S=function(e,t){(t=x(t,S.options)).strict&&h.test(e)&&C("forbidden code point")
var r=t.encodeEverything,n=t.useNamedReferences,i=t.allowUnsafeSymbols,o=t.decimal?_:k,f=function(e){return o(e.charCodeAt(0))}
return r?(e=e.replace(s,(function(e){return n&&E(c,e)?"&"+c[e]+";":f(e)})),n&&(e=e.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;").replace(/&#x66;&#x6A;/g,"&fjlig;")),n&&(e=e.replace(l,(function(e){return"&"+c[e]+";"})))):n?(i||(e=e.replace(p,(function(e){return"&"+c[e]+";"}))),e=(e=e.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;")).replace(l,(function(e){return"&"+c[e]+";"}))):i||(e=e.replace(p,f)),e.replace(a,(function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1)
return o(1024*(t-55296)+r-56320+65536)})).replace(u,f)}
S.options={allowUnsafeSymbols:!1,encodeEverything:!1,strict:!1,useNamedReferences:!1,decimal:!1}
var T=function(e,t){var r=(t=x(t,T.options)).strict
return r&&d.test(e)&&C("malformed character reference"),e.replace(g,(function(e,n,i,o,a,s,u,l,c){var p,f,d,h,g,v
return n?m[g=n]:i?(g=i,(v=o)&&t.isAttributeValue?(r&&"="==v&&C("`&` did not start a character reference"),e):(r&&C("named character reference was not terminated by a semicolon"),b[g]+(v||""))):a?(d=a,f=s,r&&!f&&C("character reference was not terminated by a semicolon"),p=parseInt(d,10),A(p,r)):u?(h=u,f=l,r&&!f&&C("character reference was not terminated by a semicolon"),p=parseInt(h,16),A(p,r)):(r&&C("named character reference was not terminated by a semicolon"),e)}))}
T.options={isAttributeValue:!1,strict:!1}
var N={version:"1.2.0",encode:S,decode:T,escape:function(e){return e.replace(p,(function(e){return f[e]}))},unescape:T}
void 0===(n=function(){return N}.call(t,r,t,e))||(e.exports=n)}()},9484:e=>{var t={}.toString
e.exports=Array.isArray||function(e){return"[object Array]"==t.call(e)}},9789:(e,t,r)=>{"use strict"
var n=r(9484),i=r(8156)
function o(e,t){if(!(this instanceof o))return"number"==typeof t?new o(e).fromIndex(t):new o(e,t)
this.str=e||"",this.lineToIndex=function(e){for(var t=e.split("\n"),r=new Array(t.length),n=0,i=0,o=t.length;i<o;i++)r[i]=n,n+=t[i].length+1
return r}(this.str),t=t||{},this.origin=void 0===t.origin?1:t.origin}Array.prototype.slice,e.exports=o,o.prototype.fromIndex=function(e){if(e<0||e>=this.str.length||isNaN(e))return null
var t=function(e,t){if(e>=t[t.length-1])return t.length-1
for(var r,n=0,i=t.length-2;n<i;)if(e<t[r=n+(i-n>>1)])i=r-1
else{if(!(e>=t[r+1])){n=r
break}n=r+1}return n}(e,this.lineToIndex)
return{line:t+this.origin,col:e-this.lineToIndex[t]+this.origin}},o.prototype.toIndex=function(e,t){if(void 0===t)return n(e)&&e.length>=2?this.toIndex(e[0],e[1]):i(e)&&"line"in e&&("col"in e||"column"in e)?this.toIndex(e.line,"col"in e?e.col:e.column):-1
if(isNaN(e)||isNaN(t))return-1
if(e-=this.origin,t-=this.origin,e>=0&&t>=0&&e<this.lineToIndex.length){var r=this.lineToIndex[e]
if(t<(e===this.lineToIndex.length-1?this.str.length:this.lineToIndex[e+1])-r)return r+t}return-1}},8156:(e,t,r)=>{"use strict"
var n=r(9484)
e.exports=function(e){return null!=e&&"object"==typeof e&&!1===n(e)}},2077:function(e,t,r){var n
e=r.nmd(e),function(){var i,o="Expected a function",a="__lodash_hash_undefined__",s="__lodash_placeholder__",u=32,l=128,c=1/0,p=9007199254740991,f=NaN,d=4294967295,h=[["ary",l],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",u],["partialRight",64],["rearg",256]],g="[object Arguments]",m="[object Array]",b="[object Boolean]",v="[object Date]",y="[object Error]",w="[object Function]",D="[object GeneratorFunction]",E="[object Map]",x="[object Number]",A="[object Object]",k="[object Promise]",_="[object RegExp]",C="[object Set]",S="[object String]",T="[object Symbol]",N="[object WeakMap]",O="[object ArrayBuffer]",F="[object DataView]",L="[object Float32Array]",q="[object Float64Array]",B="[object Int8Array]",R="[object Int16Array]",P="[object Int32Array]",I="[object Uint8Array]",j="[object Uint8ClampedArray]",M="[object Uint16Array]",U="[object Uint32Array]",z=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,V=/(__e\(.*?\)|\b__t\)) \+\n'';/g,$=/&(?:amp|lt|gt|quot|#39);/g,G=/[&<>"']/g,Q=RegExp($.source),Z=RegExp(G.source),W=/<%-([\s\S]+?)%>/g,K=/<%([\s\S]+?)%>/g,X=/<%=([\s\S]+?)%>/g,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/,ee=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/[\\^$.*+?()[\]{}|]/g,re=RegExp(te.source),ne=/^\s+/,ie=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ae=/\{\n\/\* \[wrapped with (.+)\] \*/,se=/,? & /,ue=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,pe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,fe=/\w*$/,de=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,ge=/^\[object .+?Constructor\]$/,me=/^0o[0-7]+$/i,be=/^(?:0|[1-9]\d*)$/,ve=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ye=/($^)/,we=/['\n\r\u2028\u2029\\]/g,De="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ee="a-z\\xdf-\\xf6\\xf8-\\xff",xe="A-Z\\xc0-\\xd6\\xd8-\\xde",Ae="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ke="["+Ae+"]",_e="["+De+"]",Ce="\\d+",Se="["+Ee+"]",Te="[^\\ud800-\\udfff"+Ae+Ce+"\\u2700-\\u27bf"+Ee+xe+"]",Ne="\\ud83c[\\udffb-\\udfff]",Oe="[^\\ud800-\\udfff]",Fe="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",qe="["+xe+"]",Be="(?:"+Se+"|"+Te+")",Re="(?:"+qe+"|"+Te+")",Pe="(?:['’](?:d|ll|m|re|s|t|ve))?",Ie="(?:['’](?:D|LL|M|RE|S|T|VE))?",je="(?:"+_e+"|"+Ne+")?",Me="[\\ufe0e\\ufe0f]?",Ue=Me+je+"(?:\\u200d(?:"+[Oe,Fe,Le].join("|")+")"+Me+je+")*",ze="(?:"+["[\\u2700-\\u27bf]",Fe,Le].join("|")+")"+Ue,He="(?:"+[Oe+_e+"?",_e,Fe,Le,"[\\ud800-\\udfff]"].join("|")+")",Ve=RegExp("['’]","g"),$e=RegExp(_e,"g"),Ge=RegExp(Ne+"(?="+Ne+")|"+He+Ue,"g"),Qe=RegExp([qe+"?"+Se+"+"+Pe+"(?="+[ke,qe,"$"].join("|")+")",Re+"+"+Ie+"(?="+[ke,qe+Be,"$"].join("|")+")",qe+"?"+Be+"+"+Pe,qe+"+"+Ie,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ce,ze].join("|"),"g"),Ze=RegExp("[\\u200d\\ud800-\\udfff"+De+"\\ufe0e\\ufe0f]"),We=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ke=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Xe=-1,Ye={}
Ye[L]=Ye[q]=Ye[B]=Ye[R]=Ye[P]=Ye[I]=Ye[j]=Ye[M]=Ye[U]=!0,Ye[g]=Ye[m]=Ye[O]=Ye[b]=Ye[F]=Ye[v]=Ye[y]=Ye[w]=Ye[E]=Ye[x]=Ye[A]=Ye[_]=Ye[C]=Ye[S]=Ye[N]=!1
var Je={}
Je[g]=Je[m]=Je[O]=Je[F]=Je[b]=Je[v]=Je[L]=Je[q]=Je[B]=Je[R]=Je[P]=Je[E]=Je[x]=Je[A]=Je[_]=Je[C]=Je[S]=Je[T]=Je[I]=Je[j]=Je[M]=Je[U]=!0,Je[y]=Je[w]=Je[N]=!1
var et={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},tt=parseFloat,rt=parseInt,nt="object"==typeof global&&global&&global.Object===Object&&global,it="object"==typeof self&&self&&self.Object===Object&&self,ot=nt||it||Function("return this")(),at=t&&!t.nodeType&&t,st=at&&e&&!e.nodeType&&e,ut=st&&st.exports===at,lt=ut&&nt.process,ct=function(){try{return st&&st.require&&st.require("util").types||lt&&lt.binding&&lt.binding("util")}catch(e){}}(),pt=ct&&ct.isArrayBuffer,ft=ct&&ct.isDate,dt=ct&&ct.isMap,ht=ct&&ct.isRegExp,gt=ct&&ct.isSet,mt=ct&&ct.isTypedArray
function bt(e,t,r){switch(r.length){case 0:return e.call(t)
case 1:return e.call(t,r[0])
case 2:return e.call(t,r[0],r[1])
case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function vt(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i]
t(n,a,r(a),e)}return n}function yt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function wt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Dt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1
return!0}function Et(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r]
t(a,r,e)&&(o[i++]=a)}return o}function xt(e,t){return!(null==e||!e.length)&&Lt(e,t,0)>-1}function At(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0
return!1}function kt(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e)
return i}function _t(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r]
return e}function Ct(e,t,r,n){var i=-1,o=null==e?0:e.length
for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e)
return r}function St(e,t,r,n){var i=null==e?0:e.length
for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e)
return r}function Tt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0
return!1}var Nt=Pt("length")
function Ot(e,t,r){var n
return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function Ft(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o
return-1}function Lt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n
return-1}(e,t,r):Ft(e,Bt,r)}function qt(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i
return-1}function Bt(e){return e!=e}function Rt(e,t){var r=null==e?0:e.length
return r?Mt(e,t)/r:f}function Pt(e){return function(t){return null==t?i:t[e]}}function It(e){return function(t){return null==e?i:e[t]}}function jt(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r}function Mt(e,t){for(var r,n=-1,o=e.length;++n<o;){var a=t(e[n])
a!==i&&(r=r===i?a:r+a)}return r}function Ut(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r)
return n}function zt(e){return e?e.slice(0,or(e)+1).replace(ne,""):e}function Ht(e){return function(t){return e(t)}}function Vt(e,t){return kt(t,(function(t){return e[t]}))}function $t(e,t){return e.has(t)}function Gt(e,t){for(var r=-1,n=e.length;++r<n&&Lt(t,e[r],0)>-1;);return r}function Qt(e,t){for(var r=e.length;r--&&Lt(t,e[r],0)>-1;);return r}function Zt(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n
return n}var Wt=It({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Kt=It({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})
function Xt(e){return"\\"+et[e]}function Yt(e){return Ze.test(e)}function Jt(e){var t=-1,r=Array(e.size)
return e.forEach((function(e,n){r[++t]=[n,e]})),r}function er(e,t){return function(r){return e(t(r))}}function tr(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r]
a!==t&&a!==s||(e[r]=s,o[i++]=r)}return o}function rr(e){var t=-1,r=Array(e.size)
return e.forEach((function(e){r[++t]=e})),r}function nr(e){return Yt(e)?function(e){for(var t=Ge.lastIndex=0;Ge.test(e);)++t
return t}(e):Nt(e)}function ir(e){return Yt(e)?function(e){return e.match(Ge)||[]}(e):function(e){return e.split("")}(e)}function or(e){for(var t=e.length;t--&&ie.test(e.charAt(t)););return t}var ar=It({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),sr=function e(t){var r,n=(t=null==t?ot:sr.defaults(ot.Object(),t,sr.pick(ot,Ke))).Array,ie=t.Date,De=t.Error,Ee=t.Function,xe=t.Math,Ae=t.Object,ke=t.RegExp,_e=t.String,Ce=t.TypeError,Se=n.prototype,Te=Ee.prototype,Ne=Ae.prototype,Oe=t["__core-js_shared__"],Fe=Te.toString,Le=Ne.hasOwnProperty,qe=0,Be=(r=/[^.]+$/.exec(Oe&&Oe.keys&&Oe.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",Re=Ne.toString,Pe=Fe.call(Ae),Ie=ot._,je=ke("^"+Fe.call(Le).replace(te,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Me=ut?t.Buffer:i,Ue=t.Symbol,ze=t.Uint8Array,He=Me?Me.allocUnsafe:i,Ge=er(Ae.getPrototypeOf,Ae),Ze=Ae.create,et=Ne.propertyIsEnumerable,nt=Se.splice,it=Ue?Ue.isConcatSpreadable:i,at=Ue?Ue.iterator:i,st=Ue?Ue.toStringTag:i,lt=function(){try{var e=uo(Ae,"defineProperty")
return e({},"",{}),e}catch(e){}}(),ct=t.clearTimeout!==ot.clearTimeout&&t.clearTimeout,Nt=ie&&ie.now!==ot.Date.now&&ie.now,It=t.setTimeout!==ot.setTimeout&&t.setTimeout,ur=xe.ceil,lr=xe.floor,cr=Ae.getOwnPropertySymbols,pr=Me?Me.isBuffer:i,fr=t.isFinite,dr=Se.join,hr=er(Ae.keys,Ae),gr=xe.max,mr=xe.min,br=ie.now,vr=t.parseInt,yr=xe.random,wr=Se.reverse,Dr=uo(t,"DataView"),Er=uo(t,"Map"),xr=uo(t,"Promise"),Ar=uo(t,"Set"),kr=uo(t,"WeakMap"),_r=uo(Ae,"create"),Cr=kr&&new kr,Sr={},Tr=Io(Dr),Nr=Io(Er),Or=Io(xr),Fr=Io(Ar),Lr=Io(kr),qr=Ue?Ue.prototype:i,Br=qr?qr.valueOf:i,Rr=qr?qr.toString:i
function Pr(e){if(ts(e)&&!Va(e)&&!(e instanceof Ur)){if(e instanceof Mr)return e
if(Le.call(e,"__wrapped__"))return jo(e)}return new Mr(e)}var Ir=function(){function e(){}return function(t){if(!es(t))return{}
if(Ze)return Ze(t)
e.prototype=t
var r=new e
return e.prototype=i,r}}()
function jr(){}function Mr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=i}function Ur(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=d,this.__views__=[]}function zr(e){var t=-1,r=null==e?0:e.length
for(this.clear();++t<r;){var n=e[t]
this.set(n[0],n[1])}}function Hr(e){var t=-1,r=null==e?0:e.length
for(this.clear();++t<r;){var n=e[t]
this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length
for(this.clear();++t<r;){var n=e[t]
this.set(n[0],n[1])}}function $r(e){var t=-1,r=null==e?0:e.length
for(this.__data__=new Vr;++t<r;)this.add(e[t])}function Gr(e){var t=this.__data__=new Hr(e)
this.size=t.size}function Qr(e,t){var r=Va(e),n=!r&&Ha(e),i=!r&&!n&&Za(e),o=!r&&!n&&!i&&ls(e),a=r||n||i||o,s=a?Ut(e.length,_e):[],u=s.length
for(var l in e)!t&&!Le.call(e,l)||a&&("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||mo(l,u))||s.push(l)
return s}function Zr(e){var t=e.length
return t?e[$n(0,t-1)]:i}function Wr(e,t){return Lo(_i(e),on(t,0,e.length))}function Kr(e){return Lo(_i(e))}function Xr(e,t,r){(r!==i&&!Ma(e[t],r)||r===i&&!(t in e))&&rn(e,t,r)}function Yr(e,t,r){var n=e[t]
Le.call(e,t)&&Ma(n,r)&&(r!==i||t in e)||rn(e,t,r)}function Jr(e,t){for(var r=e.length;r--;)if(Ma(e[r][0],t))return r
return-1}function en(e,t,r,n){return cn(e,(function(e,i,o){t(n,e,r(e),o)})),n}function tn(e,t){return e&&Ci(t,Os(t),e)}function rn(e,t,r){"__proto__"==t&&lt?lt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function nn(e,t){for(var r=-1,o=t.length,a=n(o),s=null==e;++r<o;)a[r]=s?i:_s(e,t[r])
return a}function on(e,t,r){return e==e&&(r!==i&&(e=e<=r?e:r),t!==i&&(e=e>=t?e:t)),e}function an(e,t,r,n,o,a){var s,u=1&t,l=2&t,c=4&t
if(r&&(s=o?r(e,n,o,a):r(e)),s!==i)return s
if(!es(e))return e
var p=Va(e)
if(p){if(s=function(e){var t=e.length,r=new e.constructor(t)
return t&&"string"==typeof e[0]&&Le.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(e),!u)return _i(e,s)}else{var f=po(e),d=f==w||f==D
if(Za(e))return wi(e,u)
if(f==A||f==g||d&&!o){if(s=l||d?{}:ho(e),!u)return l?function(e,t){return Ci(e,co(e),t)}(e,function(e,t){return e&&Ci(t,Fs(t),e)}(s,e)):function(e,t){return Ci(e,lo(e),t)}(e,tn(s,e))}else{if(!Je[f])return o?e:{}
s=function(e,t,r){var n,i=e.constructor
switch(t){case O:return Di(e)
case b:case v:return new i(+e)
case F:return function(e,t){var r=t?Di(e.buffer):e.buffer
return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r)
case L:case q:case B:case R:case P:case I:case j:case M:case U:return Ei(e,r)
case E:case C:return new i
case x:case S:return new i(e)
case _:return function(e){var t=new e.constructor(e.source,fe.exec(e))
return t.lastIndex=e.lastIndex,t}(e)
case T:return n=e,Br?Ae(Br.call(n)):{}}}(e,f,u)}}a||(a=new Gr)
var h=a.get(e)
if(h)return h
a.set(e,s),as(e)?e.forEach((function(n){s.add(an(n,t,r,n,e,a))})):rs(e)&&e.forEach((function(n,i){s.set(i,an(n,t,r,i,e,a))}))
var m=p?i:(c?l?to:eo:l?Fs:Os)(e)
return yt(m||e,(function(n,i){m&&(n=e[i=n]),Yr(s,i,an(n,t,r,i,e,a))})),s}function sn(e,t,r){var n=r.length
if(null==e)return!n
for(e=Ae(e);n--;){var o=r[n],a=t[o],s=e[o]
if(s===i&&!(o in e)||!a(s))return!1}return!0}function un(e,t,r){if("function"!=typeof e)throw new Ce(o)
return To((function(){e.apply(i,r)}),t)}function ln(e,t,r,n){var i=-1,o=xt,a=!0,s=e.length,u=[],l=t.length
if(!s)return u
r&&(t=kt(t,Ht(r))),n?(o=At,a=!1):t.length>=200&&(o=$t,a=!1,t=new $r(t))
e:for(;++i<s;){var c=e[i],p=null==r?c:r(c)
if(c=n||0!==c?c:0,a&&p==p){for(var f=l;f--;)if(t[f]===p)continue e
u.push(c)}else o(t,p,n)||u.push(c)}return u}Pr.templateSettings={escape:W,evaluate:K,interpolate:X,variable:"",imports:{_:Pr}},Pr.prototype=jr.prototype,Pr.prototype.constructor=Pr,Mr.prototype=Ir(jr.prototype),Mr.prototype.constructor=Mr,Ur.prototype=Ir(jr.prototype),Ur.prototype.constructor=Ur,zr.prototype.clear=function(){this.__data__=_r?_r(null):{},this.size=0},zr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e]
return this.size-=t?1:0,t},zr.prototype.get=function(e){var t=this.__data__
if(_r){var r=t[e]
return r===a?i:r}return Le.call(t,e)?t[e]:i},zr.prototype.has=function(e){var t=this.__data__
return _r?t[e]!==i:Le.call(t,e)},zr.prototype.set=function(e,t){var r=this.__data__
return this.size+=this.has(e)?0:1,r[e]=_r&&t===i?a:t,this},Hr.prototype.clear=function(){this.__data__=[],this.size=0},Hr.prototype.delete=function(e){var t=this.__data__,r=Jr(t,e)
return!(r<0||(r==t.length-1?t.pop():nt.call(t,r,1),--this.size,0))},Hr.prototype.get=function(e){var t=this.__data__,r=Jr(t,e)
return r<0?i:t[r][1]},Hr.prototype.has=function(e){return Jr(this.__data__,e)>-1},Hr.prototype.set=function(e,t){var r=this.__data__,n=Jr(r,e)
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Vr.prototype.clear=function(){this.size=0,this.__data__={hash:new zr,map:new(Er||Hr),string:new zr}},Vr.prototype.delete=function(e){var t=ao(this,e).delete(e)
return this.size-=t?1:0,t},Vr.prototype.get=function(e){return ao(this,e).get(e)},Vr.prototype.has=function(e){return ao(this,e).has(e)},Vr.prototype.set=function(e,t){var r=ao(this,e),n=r.size
return r.set(e,t),this.size+=r.size==n?0:1,this},$r.prototype.add=$r.prototype.push=function(e){return this.__data__.set(e,a),this},$r.prototype.has=function(e){return this.__data__.has(e)},Gr.prototype.clear=function(){this.__data__=new Hr,this.size=0},Gr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e)
return this.size=t.size,r},Gr.prototype.get=function(e){return this.__data__.get(e)},Gr.prototype.has=function(e){return this.__data__.has(e)},Gr.prototype.set=function(e,t){var r=this.__data__
if(r instanceof Hr){var n=r.__data__
if(!Er||n.length<199)return n.push([e,t]),this.size=++r.size,this
r=this.__data__=new Vr(n)}return r.set(e,t),this.size=r.size,this}
var cn=Ni(vn),pn=Ni(yn,!0)
function fn(e,t){var r=!0
return cn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function dn(e,t,r){for(var n=-1,o=e.length;++n<o;){var a=e[n],s=t(a)
if(null!=s&&(u===i?s==s&&!us(s):r(s,u)))var u=s,l=a}return l}function hn(e,t){var r=[]
return cn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function gn(e,t,r,n,i){var o=-1,a=e.length
for(r||(r=go),i||(i=[]);++o<a;){var s=e[o]
t>0&&r(s)?t>1?gn(s,t-1,r,n,i):_t(i,s):n||(i[i.length]=s)}return i}var mn=Oi(),bn=Oi(!0)
function vn(e,t){return e&&mn(e,t,Os)}function yn(e,t){return e&&bn(e,t,Os)}function wn(e,t){return Et(t,(function(t){return Xa(e[t])}))}function Dn(e,t){for(var r=0,n=(t=mi(t,e)).length;null!=e&&r<n;)e=e[Po(t[r++])]
return r&&r==n?e:i}function En(e,t,r){var n=t(e)
return Va(e)?n:_t(n,r(e))}function xn(e){return null==e?e===i?"[object Undefined]":"[object Null]":st&&st in Ae(e)?function(e){var t=Le.call(e,st),r=e[st]
try{e[st]=i
var n=!0}catch(e){}var o=Re.call(e)
return n&&(t?e[st]=r:delete e[st]),o}(e):function(e){return Re.call(e)}(e)}function An(e,t){return e>t}function kn(e,t){return null!=e&&Le.call(e,t)}function _n(e,t){return null!=e&&t in Ae(e)}function Cn(e,t,r){for(var o=r?At:xt,a=e[0].length,s=e.length,u=s,l=n(s),c=1/0,p=[];u--;){var f=e[u]
u&&t&&(f=kt(f,Ht(t))),c=mr(f.length,c),l[u]=!r&&(t||a>=120&&f.length>=120)?new $r(u&&f):i}f=e[0]
var d=-1,h=l[0]
e:for(;++d<a&&p.length<c;){var g=f[d],m=t?t(g):g
if(g=r||0!==g?g:0,!(h?$t(h,m):o(p,m,r))){for(u=s;--u;){var b=l[u]
if(!(b?$t(b,m):o(e[u],m,r)))continue e}h&&h.push(m),p.push(g)}}return p}function Sn(e,t,r){var n=null==(e=ko(e,t=mi(t,e)))?e:e[Po(Ko(t))]
return null==n?i:bt(n,e,r)}function Tn(e){return ts(e)&&xn(e)==g}function Nn(e,t,r,n,o){return e===t||(null==e||null==t||!ts(e)&&!ts(t)?e!=e&&t!=t:function(e,t,r,n,o,a){var s=Va(e),u=Va(t),l=s?m:po(e),c=u?m:po(t),p=(l=l==g?A:l)==A,f=(c=c==g?A:c)==A,d=l==c
if(d&&Za(e)){if(!Za(t))return!1
s=!0,p=!1}if(d&&!p)return a||(a=new Gr),s||ls(e)?Yi(e,t,r,n,o,a):function(e,t,r,n,i,o,a){switch(r){case F:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1
e=e.buffer,t=t.buffer
case O:return!(e.byteLength!=t.byteLength||!o(new ze(e),new ze(t)))
case b:case v:case x:return Ma(+e,+t)
case y:return e.name==t.name&&e.message==t.message
case _:case S:return e==t+""
case E:var s=Jt
case C:var u=1&n
if(s||(s=rr),e.size!=t.size&&!u)return!1
var l=a.get(e)
if(l)return l==t
n|=2,a.set(e,t)
var c=Yi(s(e),s(t),n,i,o,a)
return a.delete(e),c
case T:if(Br)return Br.call(e)==Br.call(t)}return!1}(e,t,l,r,n,o,a)
if(!(1&r)){var h=p&&Le.call(e,"__wrapped__"),w=f&&Le.call(t,"__wrapped__")
if(h||w){var D=h?e.value():e,k=w?t.value():t
return a||(a=new Gr),o(D,k,r,n,a)}}return!!d&&(a||(a=new Gr),function(e,t,r,n,o,a){var s=1&r,u=eo(e),l=u.length
if(l!=eo(t).length&&!s)return!1
for(var c=l;c--;){var p=u[c]
if(!(s?p in t:Le.call(t,p)))return!1}var f=a.get(e),d=a.get(t)
if(f&&d)return f==t&&d==e
var h=!0
a.set(e,t),a.set(t,e)
for(var g=s;++c<l;){var m=e[p=u[c]],b=t[p]
if(n)var v=s?n(b,m,p,t,e,a):n(m,b,p,e,t,a)
if(!(v===i?m===b||o(m,b,r,n,a):v)){h=!1
break}g||(g="constructor"==p)}if(h&&!g){var y=e.constructor,w=t.constructor
y==w||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof w&&w instanceof w||(h=!1)}return a.delete(e),a.delete(t),h}(e,t,r,n,o,a))}(e,t,r,n,Nn,o))}function On(e,t,r,n){var o=r.length,a=o,s=!n
if(null==e)return!a
for(e=Ae(e);o--;){var u=r[o]
if(s&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){var l=(u=r[o])[0],c=e[l],p=u[1]
if(s&&u[2]){if(c===i&&!(l in e))return!1}else{var f=new Gr
if(n)var d=n(c,p,l,e,t,f)
if(!(d===i?Nn(p,c,3,n,f):d))return!1}}return!0}function Fn(e){return!(!es(e)||(t=e,Be&&Be in t))&&(Xa(e)?je:ge).test(Io(e))
var t}function Ln(e){return"function"==typeof e?e:null==e?nu:"object"==typeof e?Va(e)?In(e[0],e[1]):Pn(e):fu(e)}function qn(e){if(!Do(e))return hr(e)
var t=[]
for(var r in Ae(e))Le.call(e,r)&&"constructor"!=r&&t.push(r)
return t}function Bn(e,t){return e<t}function Rn(e,t){var r=-1,i=Ga(e)?n(e.length):[]
return cn(e,(function(e,n,o){i[++r]=t(e,n,o)})),i}function Pn(e){var t=so(e)
return 1==t.length&&t[0][2]?xo(t[0][0],t[0][1]):function(r){return r===e||On(r,e,t)}}function In(e,t){return vo(e)&&Eo(t)?xo(Po(e),t):function(r){var n=_s(r,e)
return n===i&&n===t?Cs(r,e):Nn(t,n,3)}}function jn(e,t,r,n,o){e!==t&&mn(t,(function(a,s){if(o||(o=new Gr),es(a))!function(e,t,r,n,o,a,s){var u=Co(e,r),l=Co(t,r),c=s.get(l)
if(c)Xr(e,r,c)
else{var p=a?a(u,l,r+"",e,t,s):i,f=p===i
if(f){var d=Va(l),h=!d&&Za(l),g=!d&&!h&&ls(l)
p=l,d||h||g?Va(u)?p=u:Qa(u)?p=_i(u):h?(f=!1,p=wi(l,!0)):g?(f=!1,p=Ei(l,!0)):p=[]:is(l)||Ha(l)?(p=u,Ha(u)?p=bs(u):es(u)&&!Xa(u)||(p=ho(l))):f=!1}f&&(s.set(l,p),o(p,l,n,a,s),s.delete(l)),Xr(e,r,p)}}(e,t,s,r,jn,n,o)
else{var u=n?n(Co(e,s),a,s+"",e,t,o):i
u===i&&(u=a),Xr(e,s,u)}}),Fs)}function Mn(e,t){var r=e.length
if(r)return mo(t+=t<0?r:0,r)?e[t]:i}function Un(e,t,r){t=t.length?kt(t,(function(e){return Va(e)?function(t){return Dn(t,1===e.length?e[0]:e)}:e})):[nu]
var n=-1
t=kt(t,Ht(oo()))
var i=Rn(e,(function(e,r,i){var o=kt(t,(function(t){return t(e)}))
return{criteria:o,index:++n,value:e}}))
return function(e,t){var n=e.length
for(e.sort((function(e,t){return function(e,t,r){for(var n=-1,i=e.criteria,o=t.criteria,a=i.length,s=r.length;++n<a;){var u=xi(i[n],o[n])
if(u)return n>=s?u:u*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}));n--;)e[n]=e[n].value
return e}(i)}function zn(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var a=t[n],s=Dn(e,a)
r(s,a)&&Kn(o,mi(a,e),s)}return o}function Hn(e,t,r,n){var i=n?qt:Lt,o=-1,a=t.length,s=e
for(e===t&&(t=_i(t)),r&&(s=kt(e,Ht(r)));++o<a;)for(var u=0,l=t[o],c=r?r(l):l;(u=i(s,c,u,n))>-1;)s!==e&&nt.call(s,u,1),nt.call(e,u,1)
return e}function Vn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r]
if(r==n||i!==o){var o=i
mo(i)?nt.call(e,i,1):ui(e,i)}}return e}function $n(e,t){return e+lr(yr()*(t-e+1))}function Gn(e,t){var r=""
if(!e||t<1||t>p)return r
do{t%2&&(r+=e),(t=lr(t/2))&&(e+=e)}while(t)
return r}function Qn(e,t){return No(Ao(e,t,nu),e+"")}function Zn(e){return Zr(Ms(e))}function Wn(e,t){var r=Ms(e)
return Lo(r,on(t,0,r.length))}function Kn(e,t,r,n){if(!es(e))return e
for(var o=-1,a=(t=mi(t,e)).length,s=a-1,u=e;null!=u&&++o<a;){var l=Po(t[o]),c=r
if("__proto__"===l||"constructor"===l||"prototype"===l)return e
if(o!=s){var p=u[l];(c=n?n(p,l,u):i)===i&&(c=es(p)?p:mo(t[o+1])?[]:{})}Yr(u,l,c),u=u[l]}return e}var Xn=Cr?function(e,t){return Cr.set(e,t),e}:nu,Yn=lt?function(e,t){return lt(e,"toString",{configurable:!0,enumerable:!1,value:eu(t),writable:!0})}:nu
function Jn(e){return Lo(Ms(e))}function ei(e,t,r){var i=-1,o=e.length
t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0
for(var a=n(o);++i<o;)a[i]=e[i+t]
return a}function ti(e,t){var r
return cn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function ri(e,t,r){var n=0,i=null==e?n:e.length
if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,a=e[o]
null!==a&&!us(a)&&(r?a<=t:a<t)?n=o+1:i=o}return i}return ni(e,t,nu,r)}function ni(e,t,r,n){var o=0,a=null==e?0:e.length
if(0===a)return 0
for(var s=(t=r(t))!=t,u=null===t,l=us(t),c=t===i;o<a;){var p=lr((o+a)/2),f=r(e[p]),d=f!==i,h=null===f,g=f==f,m=us(f)
if(s)var b=n||g
else b=c?g&&(n||d):u?g&&d&&(n||!h):l?g&&d&&!h&&(n||!m):!h&&!m&&(n?f<=t:f<t)
b?o=p+1:a=p}return mr(a,4294967294)}function ii(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r],s=t?t(a):a
if(!r||!Ma(s,u)){var u=s
o[i++]=0===a?0:a}}return o}function oi(e){return"number"==typeof e?e:us(e)?f:+e}function ai(e){if("string"==typeof e)return e
if(Va(e))return kt(e,ai)+""
if(us(e))return Rr?Rr.call(e):""
var t=e+""
return"0"==t&&1/e==-1/0?"-0":t}function si(e,t,r){var n=-1,i=xt,o=e.length,a=!0,s=[],u=s
if(r)a=!1,i=At
else if(o>=200){var l=t?null:Gi(e)
if(l)return rr(l)
a=!1,i=$t,u=new $r}else u=t?[]:s
e:for(;++n<o;){var c=e[n],p=t?t(c):c
if(c=r||0!==c?c:0,a&&p==p){for(var f=u.length;f--;)if(u[f]===p)continue e
t&&u.push(p),s.push(c)}else i(u,p,r)||(u!==s&&u.push(p),s.push(c))}return s}function ui(e,t){return null==(e=ko(e,t=mi(t,e)))||delete e[Po(Ko(t))]}function li(e,t,r,n){return Kn(e,t,r(Dn(e,t)),n)}function ci(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?ei(e,n?0:o,n?o+1:i):ei(e,n?o+1:0,n?i:o)}function pi(e,t){var r=e
return r instanceof Ur&&(r=r.value()),Ct(t,(function(e,t){return t.func.apply(t.thisArg,_t([e],t.args))}),r)}function fi(e,t,r){var i=e.length
if(i<2)return i?si(e[0]):[]
for(var o=-1,a=n(i);++o<i;)for(var s=e[o],u=-1;++u<i;)u!=o&&(a[o]=ln(a[o]||s,e[u],t,r))
return si(gn(a,1),t,r)}function di(e,t,r){for(var n=-1,o=e.length,a=t.length,s={};++n<o;){var u=n<a?t[n]:i
r(s,e[n],u)}return s}function hi(e){return Qa(e)?e:[]}function gi(e){return"function"==typeof e?e:nu}function mi(e,t){return Va(e)?e:vo(e,t)?[e]:Ro(vs(e))}var bi=Qn
function vi(e,t,r){var n=e.length
return r=r===i?n:r,!t&&r>=n?e:ei(e,t,r)}var yi=ct||function(e){return ot.clearTimeout(e)}
function wi(e,t){if(t)return e.slice()
var r=e.length,n=He?He(r):new e.constructor(r)
return e.copy(n),n}function Di(e){var t=new e.constructor(e.byteLength)
return new ze(t).set(new ze(e)),t}function Ei(e,t){var r=t?Di(e.buffer):e.buffer
return new e.constructor(r,e.byteOffset,e.length)}function xi(e,t){if(e!==t){var r=e!==i,n=null===e,o=e==e,a=us(e),s=t!==i,u=null===t,l=t==t,c=us(t)
if(!u&&!c&&!a&&e>t||a&&s&&l&&!u&&!c||n&&s&&l||!r&&l||!o)return 1
if(!n&&!a&&!c&&e<t||c&&r&&o&&!n&&!a||u&&r&&o||!s&&o||!l)return-1}return 0}function Ai(e,t,r,i){for(var o=-1,a=e.length,s=r.length,u=-1,l=t.length,c=gr(a-s,0),p=n(l+c),f=!i;++u<l;)p[u]=t[u]
for(;++o<s;)(f||o<a)&&(p[r[o]]=e[o])
for(;c--;)p[u++]=e[o++]
return p}function ki(e,t,r,i){for(var o=-1,a=e.length,s=-1,u=r.length,l=-1,c=t.length,p=gr(a-u,0),f=n(p+c),d=!i;++o<p;)f[o]=e[o]
for(var h=o;++l<c;)f[h+l]=t[l]
for(;++s<u;)(d||o<a)&&(f[h+r[s]]=e[o++])
return f}function _i(e,t){var r=-1,i=e.length
for(t||(t=n(i));++r<i;)t[r]=e[r]
return t}function Ci(e,t,r,n){var o=!r
r||(r={})
for(var a=-1,s=t.length;++a<s;){var u=t[a],l=n?n(r[u],e[u],u,r,e):i
l===i&&(l=e[u]),o?rn(r,u,l):Yr(r,u,l)}return r}function Si(e,t){return function(r,n){var i=Va(r)?vt:en,o=t?t():{}
return i(r,e,oo(n,2),o)}}function Ti(e){return Qn((function(t,r){var n=-1,o=r.length,a=o>1?r[o-1]:i,s=o>2?r[2]:i
for(a=e.length>3&&"function"==typeof a?(o--,a):i,s&&bo(r[0],r[1],s)&&(a=o<3?i:a,o=1),t=Ae(t);++n<o;){var u=r[n]
u&&e(t,u,n,a)}return t}))}function Ni(e,t){return function(r,n){if(null==r)return r
if(!Ga(r))return e(r,n)
for(var i=r.length,o=t?i:-1,a=Ae(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}function Oi(e){return function(t,r,n){for(var i=-1,o=Ae(t),a=n(t),s=a.length;s--;){var u=a[e?s:++i]
if(!1===r(o[u],u,o))break}return t}}function Fi(e){return function(t){var r=Yt(t=vs(t))?ir(t):i,n=r?r[0]:t.charAt(0),o=r?vi(r,1).join(""):t.slice(1)
return n[e]()+o}}function Li(e){return function(t){return Ct(Xs(Hs(t).replace(Ve,"")),e,"")}}function qi(e){return function(){var t=arguments
switch(t.length){case 0:return new e
case 1:return new e(t[0])
case 2:return new e(t[0],t[1])
case 3:return new e(t[0],t[1],t[2])
case 4:return new e(t[0],t[1],t[2],t[3])
case 5:return new e(t[0],t[1],t[2],t[3],t[4])
case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5])
case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Ir(e.prototype),n=e.apply(r,t)
return es(n)?n:r}}function Bi(e){return function(t,r,n){var o=Ae(t)
if(!Ga(t)){var a=oo(r,3)
t=Os(t),r=function(e){return a(o[e],e,o)}}var s=e(t,r,n)
return s>-1?o[a?t[s]:s]:i}}function Ri(e){return Ji((function(t){var r=t.length,n=r,a=Mr.prototype.thru
for(e&&t.reverse();n--;){var s=t[n]
if("function"!=typeof s)throw new Ce(o)
if(a&&!u&&"wrapper"==no(s))var u=new Mr([],!0)}for(n=u?n:r;++n<r;){var l=no(s=t[n]),c="wrapper"==l?ro(s):i
u=c&&yo(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?u[no(c[0])].apply(u,c[3]):1==s.length&&yo(s)?u[l]():u.thru(s)}return function(){var e=arguments,n=e[0]
if(u&&1==e.length&&Va(n))return u.plant(n).value()
for(var i=0,o=r?t[i].apply(this,e):n;++i<r;)o=t[i].call(this,o)
return o}}))}function Pi(e,t,r,o,a,s,u,c,p,f){var d=t&l,h=1&t,g=2&t,m=24&t,b=512&t,v=g?i:qi(e)
return function i(){for(var l=arguments.length,y=n(l),w=l;w--;)y[w]=arguments[w]
if(m)var D=io(i),E=Zt(y,D)
if(o&&(y=Ai(y,o,a,m)),s&&(y=ki(y,s,u,m)),l-=E,m&&l<f){var x=tr(y,D)
return Vi(e,t,Pi,i.placeholder,r,y,x,c,p,f-l)}var A=h?r:this,k=g?A[e]:e
return l=y.length,c?y=_o(y,c):b&&l>1&&y.reverse(),d&&p<l&&(y.length=p),this&&this!==ot&&this instanceof i&&(k=v||qi(k)),k.apply(A,y)}}function Ii(e,t){return function(r,n){return function(e,t,r,n){return vn(e,(function(e,i,o){t(n,r(e),i,o)})),n}(r,e,t(n),{})}}function ji(e,t){return function(r,n){var o
if(r===i&&n===i)return t
if(r!==i&&(o=r),n!==i){if(o===i)return n
"string"==typeof r||"string"==typeof n?(r=ai(r),n=ai(n)):(r=oi(r),n=oi(n)),o=e(r,n)}return o}}function Mi(e){return Ji((function(t){return t=kt(t,Ht(oo())),Qn((function(r){var n=this
return e(t,(function(e){return bt(e,n,r)}))}))}))}function Ui(e,t){var r=(t=t===i?" ":ai(t)).length
if(r<2)return r?Gn(t,e):t
var n=Gn(t,ur(e/nr(t)))
return Yt(t)?vi(ir(n),0,e).join(""):n.slice(0,e)}function zi(e){return function(t,r,o){return o&&"number"!=typeof o&&bo(t,r,o)&&(r=o=i),t=ds(t),r===i?(r=t,t=0):r=ds(r),function(e,t,r,i){for(var o=-1,a=gr(ur((t-e)/(r||1)),0),s=n(a);a--;)s[i?a:++o]=e,e+=r
return s}(t,r,o=o===i?t<r?1:-1:ds(o),e)}}function Hi(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function Vi(e,t,r,n,o,a,s,l,c,p){var f=8&t
t|=f?u:64,4&(t&=~(f?64:u))||(t&=-4)
var d=[e,t,o,f?a:i,f?s:i,f?i:a,f?i:s,l,c,p],h=r.apply(i,d)
return yo(e)&&So(h,d),h.placeholder=n,Oo(h,e,t)}function $i(e){var t=xe[e]
return function(e,r){if(e=ms(e),(r=null==r?0:mr(hs(r),292))&&fr(e)){var n=(vs(e)+"e").split("e")
return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Gi=Ar&&1/rr(new Ar([,-0]))[1]==c?function(e){return new Ar(e)}:uu
function Qi(e){return function(t){var r=po(t)
return r==E?Jt(t):r==C?function(e){var t=-1,r=Array(e.size)
return e.forEach((function(e){r[++t]=[e,e]})),r}(t):function(e,t){return kt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(e,t,r,a,c,p,f,d){var h=2&t
if(!h&&"function"!=typeof e)throw new Ce(o)
var g=a?a.length:0
if(g||(t&=-97,a=c=i),f=f===i?f:gr(hs(f),0),d=d===i?d:hs(d),g-=c?c.length:0,64&t){var m=a,b=c
a=c=i}var v=h?i:ro(e),y=[e,t,r,a,c,m,b,p,f,d]
if(v&&function(e,t){var r=e[1],n=t[1],i=r|n,o=i<131,a=n==l&&8==r||n==l&&256==r&&e[7].length<=t[8]||384==n&&t[7].length<=t[8]&&8==r
if(!o&&!a)return e
1&n&&(e[2]=t[2],i|=1&r?0:4)
var u=t[3]
if(u){var c=e[3]
e[3]=c?Ai(c,u,t[4]):u,e[4]=c?tr(e[3],s):t[4]}(u=t[5])&&(c=e[5],e[5]=c?ki(c,u,t[6]):u,e[6]=c?tr(e[5],s):t[6]),(u=t[7])&&(e[7]=u),n&l&&(e[8]=null==e[8]?t[8]:mr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(y,v),e=y[0],t=y[1],r=y[2],a=y[3],c=y[4],!(d=y[9]=y[9]===i?h?0:e.length:gr(y[9]-g,0))&&24&t&&(t&=-25),t&&1!=t)w=8==t||16==t?function(e,t,r){var o=qi(e)
return function a(){for(var s=arguments.length,u=n(s),l=s,c=io(a);l--;)u[l]=arguments[l]
var p=s<3&&u[0]!==c&&u[s-1]!==c?[]:tr(u,c)
return(s-=p.length)<r?Vi(e,t,Pi,a.placeholder,i,u,p,i,i,r-s):bt(this&&this!==ot&&this instanceof a?o:e,this,u)}}(e,t,d):t!=u&&33!=t||c.length?Pi.apply(i,y):function(e,t,r,i){var o=1&t,a=qi(e)
return function t(){for(var s=-1,u=arguments.length,l=-1,c=i.length,p=n(c+u),f=this&&this!==ot&&this instanceof t?a:e;++l<c;)p[l]=i[l]
for(;u--;)p[l++]=arguments[++s]
return bt(f,o?r:this,p)}}(e,t,r,a)
else var w=function(e,t,r){var n=1&t,i=qi(e)
return function t(){return(this&&this!==ot&&this instanceof t?i:e).apply(n?r:this,arguments)}}(e,t,r)
return Oo((v?Xn:So)(w,y),e,t)}function Wi(e,t,r,n){return e===i||Ma(e,Ne[r])&&!Le.call(n,r)?t:e}function Ki(e,t,r,n,o,a){return es(e)&&es(t)&&(a.set(t,e),jn(e,t,i,Ki,a),a.delete(t)),e}function Xi(e){return is(e)?i:e}function Yi(e,t,r,n,o,a){var s=1&r,u=e.length,l=t.length
if(u!=l&&!(s&&l>u))return!1
var c=a.get(e),p=a.get(t)
if(c&&p)return c==t&&p==e
var f=-1,d=!0,h=2&r?new $r:i
for(a.set(e,t),a.set(t,e);++f<u;){var g=e[f],m=t[f]
if(n)var b=s?n(m,g,f,t,e,a):n(g,m,f,e,t,a)
if(b!==i){if(b)continue
d=!1
break}if(h){if(!Tt(t,(function(e,t){if(!$t(h,t)&&(g===e||o(g,e,r,n,a)))return h.push(t)}))){d=!1
break}}else if(g!==m&&!o(g,m,r,n,a)){d=!1
break}}return a.delete(e),a.delete(t),d}function Ji(e){return No(Ao(e,i,$o),e+"")}function eo(e){return En(e,Os,lo)}function to(e){return En(e,Fs,co)}var ro=Cr?function(e){return Cr.get(e)}:uu
function no(e){for(var t=e.name+"",r=Sr[t],n=Le.call(Sr,t)?r.length:0;n--;){var i=r[n],o=i.func
if(null==o||o==e)return i.name}return t}function io(e){return(Le.call(Pr,"placeholder")?Pr:e).placeholder}function oo(){var e=Pr.iteratee||iu
return e=e===iu?Ln:e,arguments.length?e(arguments[0],arguments[1]):e}function ao(e,t){var r,n,i=e.__data__
return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function so(e){for(var t=Os(e),r=t.length;r--;){var n=t[r],i=e[n]
t[r]=[n,i,Eo(i)]}return t}function uo(e,t){var r=function(e,t){return null==e?i:e[t]}(e,t)
return Fn(r)?r:i}var lo=cr?function(e){return null==e?[]:(e=Ae(e),Et(cr(e),(function(t){return et.call(e,t)})))}:gu,co=cr?function(e){for(var t=[];e;)_t(t,lo(e)),e=Ge(e)
return t}:gu,po=xn
function fo(e,t,r){for(var n=-1,i=(t=mi(t,e)).length,o=!1;++n<i;){var a=Po(t[n])
if(!(o=null!=e&&r(e,a)))break
e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&mo(a,i)&&(Va(e)||Ha(e))}function ho(e){return"function"!=typeof e.constructor||Do(e)?{}:Ir(Ge(e))}function go(e){return Va(e)||Ha(e)||!!(it&&e&&e[it])}function mo(e,t){var r=typeof e
return!!(t=null==t?p:t)&&("number"==r||"symbol"!=r&&be.test(e))&&e>-1&&e%1==0&&e<t}function bo(e,t,r){if(!es(r))return!1
var n=typeof t
return!!("number"==n?Ga(r)&&mo(t,r.length):"string"==n&&t in r)&&Ma(r[t],e)}function vo(e,t){if(Va(e))return!1
var r=typeof e
return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!us(e))||J.test(e)||!Y.test(e)||null!=t&&e in Ae(t)}function yo(e){var t=no(e),r=Pr[t]
if("function"!=typeof r||!(t in Ur.prototype))return!1
if(e===r)return!0
var n=ro(r)
return!!n&&e===n[0]}(Dr&&po(new Dr(new ArrayBuffer(1)))!=F||Er&&po(new Er)!=E||xr&&po(xr.resolve())!=k||Ar&&po(new Ar)!=C||kr&&po(new kr)!=N)&&(po=function(e){var t=xn(e),r=t==A?e.constructor:i,n=r?Io(r):""
if(n)switch(n){case Tr:return F
case Nr:return E
case Or:return k
case Fr:return C
case Lr:return N}return t})
var wo=Oe?Xa:mu
function Do(e){var t=e&&e.constructor
return e===("function"==typeof t&&t.prototype||Ne)}function Eo(e){return e==e&&!es(e)}function xo(e,t){return function(r){return null!=r&&r[e]===t&&(t!==i||e in Ae(r))}}function Ao(e,t,r){return t=gr(t===i?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=gr(i.length-t,0),s=n(a);++o<a;)s[o]=i[t+o]
o=-1
for(var u=n(t+1);++o<t;)u[o]=i[o]
return u[t]=r(s),bt(e,this,u)}}function ko(e,t){return t.length<2?e:Dn(e,ei(t,0,-1))}function _o(e,t){for(var r=e.length,n=mr(t.length,r),o=_i(e);n--;){var a=t[n]
e[n]=mo(a,r)?o[a]:i}return e}function Co(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var So=Fo(Xn),To=It||function(e,t){return ot.setTimeout(e,t)},No=Fo(Yn)
function Oo(e,t,r){var n=t+""
return No(e,function(e,t){var r=t.length
if(!r)return e
var n=r-1
return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return yt(h,(function(r){var n="_."+r[0]
t&r[1]&&!xt(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ae)
return t?t[1].split(se):[]}(n),r)))}function Fo(e){var t=0,r=0
return function(){var n=br(),o=16-(n-r)
if(r=n,o>0){if(++t>=800)return arguments[0]}else t=0
return e.apply(i,arguments)}}function Lo(e,t){var r=-1,n=e.length,o=n-1
for(t=t===i?n:t;++r<t;){var a=$n(r,o),s=e[a]
e[a]=e[r],e[r]=s}return e.length=t,e}var qo,Bo,Ro=(qo=qa((function(e){var t=[]
return 46===e.charCodeAt(0)&&t.push(""),e.replace(ee,(function(e,r,n,i){t.push(n?i.replace(ce,"$1"):r||e)})),t}),(function(e){return 500===Bo.size&&Bo.clear(),e})),Bo=qo.cache,qo)
function Po(e){if("string"==typeof e||us(e))return e
var t=e+""
return"0"==t&&1/e==-1/0?"-0":t}function Io(e){if(null!=e){try{return Fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function jo(e){if(e instanceof Ur)return e.clone()
var t=new Mr(e.__wrapped__,e.__chain__)
return t.__actions__=_i(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Mo=Qn((function(e,t){return Qa(e)?ln(e,gn(t,1,Qa,!0)):[]})),Uo=Qn((function(e,t){var r=Ko(t)
return Qa(r)&&(r=i),Qa(e)?ln(e,gn(t,1,Qa,!0),oo(r,2)):[]})),zo=Qn((function(e,t){var r=Ko(t)
return Qa(r)&&(r=i),Qa(e)?ln(e,gn(t,1,Qa,!0),i,r):[]}))
function Ho(e,t,r){var n=null==e?0:e.length
if(!n)return-1
var i=null==r?0:hs(r)
return i<0&&(i=gr(n+i,0)),Ft(e,oo(t,3),i)}function Vo(e,t,r){var n=null==e?0:e.length
if(!n)return-1
var o=n-1
return r!==i&&(o=hs(r),o=r<0?gr(n+o,0):mr(o,n-1)),Ft(e,oo(t,3),o,!0)}function $o(e){return null!=e&&e.length?gn(e,1):[]}function Go(e){return e&&e.length?e[0]:i}var Qo=Qn((function(e){var t=kt(e,hi)
return t.length&&t[0]===e[0]?Cn(t):[]})),Zo=Qn((function(e){var t=Ko(e),r=kt(e,hi)
return t===Ko(r)?t=i:r.pop(),r.length&&r[0]===e[0]?Cn(r,oo(t,2)):[]})),Wo=Qn((function(e){var t=Ko(e),r=kt(e,hi)
return(t="function"==typeof t?t:i)&&r.pop(),r.length&&r[0]===e[0]?Cn(r,i,t):[]}))
function Ko(e){var t=null==e?0:e.length
return t?e[t-1]:i}var Xo=Qn(Yo)
function Yo(e,t){return e&&e.length&&t&&t.length?Hn(e,t):e}var Jo=Ji((function(e,t){var r=null==e?0:e.length,n=nn(e,t)
return Vn(e,kt(t,(function(e){return mo(e,r)?+e:e})).sort(xi)),n}))
function ea(e){return null==e?e:wr.call(e)}var ta=Qn((function(e){return si(gn(e,1,Qa,!0))})),ra=Qn((function(e){var t=Ko(e)
return Qa(t)&&(t=i),si(gn(e,1,Qa,!0),oo(t,2))})),na=Qn((function(e){var t=Ko(e)
return t="function"==typeof t?t:i,si(gn(e,1,Qa,!0),i,t)}))
function ia(e){if(!e||!e.length)return[]
var t=0
return e=Et(e,(function(e){if(Qa(e))return t=gr(e.length,t),!0})),Ut(t,(function(t){return kt(e,Pt(t))}))}function oa(e,t){if(!e||!e.length)return[]
var r=ia(e)
return null==t?r:kt(r,(function(e){return bt(t,i,e)}))}var aa=Qn((function(e,t){return Qa(e)?ln(e,t):[]})),sa=Qn((function(e){return fi(Et(e,Qa))})),ua=Qn((function(e){var t=Ko(e)
return Qa(t)&&(t=i),fi(Et(e,Qa),oo(t,2))})),la=Qn((function(e){var t=Ko(e)
return t="function"==typeof t?t:i,fi(Et(e,Qa),i,t)})),ca=Qn(ia),pa=Qn((function(e){var t=e.length,r=t>1?e[t-1]:i
return r="function"==typeof r?(e.pop(),r):i,oa(e,r)}))
function fa(e){var t=Pr(e)
return t.__chain__=!0,t}function da(e,t){return t(e)}var ha=Ji((function(e){var t=e.length,r=t?e[0]:0,n=this.__wrapped__,o=function(t){return nn(t,e)}
return!(t>1||this.__actions__.length)&&n instanceof Ur&&mo(r)?((n=n.slice(r,+r+(t?1:0))).__actions__.push({func:da,args:[o],thisArg:i}),new Mr(n,this.__chain__).thru((function(e){return t&&!e.length&&e.push(i),e}))):this.thru(o)})),ga=Si((function(e,t,r){Le.call(e,r)?++e[r]:rn(e,r,1)})),ma=Bi(Ho),ba=Bi(Vo)
function va(e,t){return(Va(e)?yt:cn)(e,oo(t,3))}function ya(e,t){return(Va(e)?wt:pn)(e,oo(t,3))}var wa=Si((function(e,t,r){Le.call(e,r)?e[r].push(t):rn(e,r,[t])})),Da=Qn((function(e,t,r){var i=-1,o="function"==typeof t,a=Ga(e)?n(e.length):[]
return cn(e,(function(e){a[++i]=o?bt(t,e,r):Sn(e,t,r)})),a})),Ea=Si((function(e,t,r){rn(e,r,t)}))
function xa(e,t){return(Va(e)?kt:Rn)(e,oo(t,3))}var Aa=Si((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),ka=Qn((function(e,t){if(null==e)return[]
var r=t.length
return r>1&&bo(e,t[0],t[1])?t=[]:r>2&&bo(t[0],t[1],t[2])&&(t=[t[0]]),Un(e,gn(t,1),[])})),_a=Nt||function(){return ot.Date.now()}
function Ca(e,t,r){return t=r?i:t,t=e&&null==t?e.length:t,Zi(e,l,i,i,i,i,t)}function Sa(e,t){var r
if("function"!=typeof t)throw new Ce(o)
return e=hs(e),function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=i),r}}var Ta=Qn((function(e,t,r){var n=1
if(r.length){var i=tr(r,io(Ta))
n|=u}return Zi(e,n,t,r,i)})),Na=Qn((function(e,t,r){var n=3
if(r.length){var i=tr(r,io(Na))
n|=u}return Zi(t,n,e,r,i)}))
function Oa(e,t,r){var n,a,s,u,l,c,p=0,f=!1,d=!1,h=!0
if("function"!=typeof e)throw new Ce(o)
function g(t){var r=n,o=a
return n=a=i,p=t,u=e.apply(o,r)}function m(e){return p=e,l=To(v,t),f?g(e):u}function b(e){var r=e-c
return c===i||r>=t||r<0||d&&e-p>=s}function v(){var e=_a()
if(b(e))return y(e)
l=To(v,function(e){var r=t-(e-c)
return d?mr(r,s-(e-p)):r}(e))}function y(e){return l=i,h&&n?g(e):(n=a=i,u)}function w(){var e=_a(),r=b(e)
if(n=arguments,a=this,c=e,r){if(l===i)return m(c)
if(d)return yi(l),l=To(v,t),g(c)}return l===i&&(l=To(v,t)),u}return t=ms(t)||0,es(r)&&(f=!!r.leading,s=(d="maxWait"in r)?gr(ms(r.maxWait)||0,t):s,h="trailing"in r?!!r.trailing:h),w.cancel=function(){l!==i&&yi(l),p=0,n=c=a=l=i},w.flush=function(){return l===i?u:y(_a())},w}var Fa=Qn((function(e,t){return un(e,1,t)})),La=Qn((function(e,t,r){return un(e,ms(t)||0,r)}))
function qa(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Ce(o)
var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache
if(o.has(i))return o.get(i)
var a=e.apply(this,n)
return r.cache=o.set(i,a)||o,a}
return r.cache=new(qa.Cache||Vr),r}function Ba(e){if("function"!=typeof e)throw new Ce(o)
return function(){var t=arguments
switch(t.length){case 0:return!e.call(this)
case 1:return!e.call(this,t[0])
case 2:return!e.call(this,t[0],t[1])
case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}qa.Cache=Vr
var Ra=bi((function(e,t){var r=(t=1==t.length&&Va(t[0])?kt(t[0],Ht(oo())):kt(gn(t,1),Ht(oo()))).length
return Qn((function(n){for(var i=-1,o=mr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i])
return bt(e,this,n)}))})),Pa=Qn((function(e,t){var r=tr(t,io(Pa))
return Zi(e,u,i,t,r)})),Ia=Qn((function(e,t){var r=tr(t,io(Ia))
return Zi(e,64,i,t,r)})),ja=Ji((function(e,t){return Zi(e,256,i,i,i,t)}))
function Ma(e,t){return e===t||e!=e&&t!=t}var Ua=Hi(An),za=Hi((function(e,t){return e>=t})),Ha=Tn(function(){return arguments}())?Tn:function(e){return ts(e)&&Le.call(e,"callee")&&!et.call(e,"callee")},Va=n.isArray,$a=pt?Ht(pt):function(e){return ts(e)&&xn(e)==O}
function Ga(e){return null!=e&&Ja(e.length)&&!Xa(e)}function Qa(e){return ts(e)&&Ga(e)}var Za=pr||mu,Wa=ft?Ht(ft):function(e){return ts(e)&&xn(e)==v}
function Ka(e){if(!ts(e))return!1
var t=xn(e)
return t==y||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Xa(e){if(!es(e))return!1
var t=xn(e)
return t==w||t==D||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Ya(e){return"number"==typeof e&&e==hs(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=p}function es(e){var t=typeof e
return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=dt?Ht(dt):function(e){return ts(e)&&po(e)==E}
function ns(e){return"number"==typeof e||ts(e)&&xn(e)==x}function is(e){if(!ts(e)||xn(e)!=A)return!1
var t=Ge(e)
if(null===t)return!0
var r=Le.call(t,"constructor")&&t.constructor
return"function"==typeof r&&r instanceof r&&Fe.call(r)==Pe}var os=ht?Ht(ht):function(e){return ts(e)&&xn(e)==_},as=gt?Ht(gt):function(e){return ts(e)&&po(e)==C}
function ss(e){return"string"==typeof e||!Va(e)&&ts(e)&&xn(e)==S}function us(e){return"symbol"==typeof e||ts(e)&&xn(e)==T}var ls=mt?Ht(mt):function(e){return ts(e)&&Ja(e.length)&&!!Ye[xn(e)]},cs=Hi(Bn),ps=Hi((function(e,t){return e<=t}))
function fs(e){if(!e)return[]
if(Ga(e))return ss(e)?ir(e):_i(e)
if(at&&e[at])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value)
return r}(e[at]())
var t=po(e)
return(t==E?Jt:t==C?rr:Ms)(e)}function ds(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function hs(e){var t=ds(e),r=t%1
return t==t?r?t-r:t:0}function gs(e){return e?on(hs(e),0,d):0}function ms(e){if("number"==typeof e)return e
if(us(e))return f
if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e
e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e
e=zt(e)
var r=he.test(e)
return r||me.test(e)?rt(e.slice(2),r?2:8):de.test(e)?f:+e}function bs(e){return Ci(e,Fs(e))}function vs(e){return null==e?"":ai(e)}var ys=Ti((function(e,t){if(Do(t)||Ga(t))Ci(t,Os(t),e)
else for(var r in t)Le.call(t,r)&&Yr(e,r,t[r])})),ws=Ti((function(e,t){Ci(t,Fs(t),e)})),Ds=Ti((function(e,t,r,n){Ci(t,Fs(t),e,n)})),Es=Ti((function(e,t,r,n){Ci(t,Os(t),e,n)})),xs=Ji(nn),As=Qn((function(e,t){e=Ae(e)
var r=-1,n=t.length,o=n>2?t[2]:i
for(o&&bo(t[0],t[1],o)&&(n=1);++r<n;)for(var a=t[r],s=Fs(a),u=-1,l=s.length;++u<l;){var c=s[u],p=e[c];(p===i||Ma(p,Ne[c])&&!Le.call(e,c))&&(e[c]=a[c])}return e})),ks=Qn((function(e){return e.push(i,Ki),bt(qs,i,e)}))
function _s(e,t,r){var n=null==e?i:Dn(e,t)
return n===i?r:n}function Cs(e,t){return null!=e&&fo(e,t,_n)}var Ss=Ii((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),e[t]=r}),eu(nu)),Ts=Ii((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),Le.call(e,t)?e[t].push(r):e[t]=[r]}),oo),Ns=Qn(Sn)
function Os(e){return Ga(e)?Qr(e):qn(e)}function Fs(e){return Ga(e)?Qr(e,!0):function(e){if(!es(e))return function(e){var t=[]
if(null!=e)for(var r in Ae(e))t.push(r)
return t}(e)
var t=Do(e),r=[]
for(var n in e)("constructor"!=n||!t&&Le.call(e,n))&&r.push(n)
return r}(e)}var Ls=Ti((function(e,t,r){jn(e,t,r)})),qs=Ti((function(e,t,r,n){jn(e,t,r,n)})),Bs=Ji((function(e,t){var r={}
if(null==e)return r
var n=!1
t=kt(t,(function(t){return t=mi(t,e),n||(n=t.length>1),t})),Ci(e,to(e),r),n&&(r=an(r,7,Xi))
for(var i=t.length;i--;)ui(r,t[i])
return r})),Rs=Ji((function(e,t){return null==e?{}:function(e,t){return zn(e,t,(function(t,r){return Cs(e,r)}))}(e,t)}))
function Ps(e,t){if(null==e)return{}
var r=kt(to(e),(function(e){return[e]}))
return t=oo(t),zn(e,r,(function(e,r){return t(e,r[0])}))}var Is=Qi(Os),js=Qi(Fs)
function Ms(e){return null==e?[]:Vt(e,Os(e))}var Us=Li((function(e,t,r){return t=t.toLowerCase(),e+(r?zs(t):t)}))
function zs(e){return Ks(vs(e).toLowerCase())}function Hs(e){return(e=vs(e))&&e.replace(ve,Wt).replace($e,"")}var Vs=Li((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),$s=Li((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Gs=Fi("toLowerCase"),Qs=Li((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),Zs=Li((function(e,t,r){return e+(r?" ":"")+Ks(t)})),Ws=Li((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Ks=Fi("toUpperCase")
function Xs(e,t,r){return e=vs(e),(t=r?i:t)===i?function(e){return We.test(e)}(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.match(ue)||[]}(e):e.match(t)||[]}var Ys=Qn((function(e,t){try{return bt(e,i,t)}catch(e){return Ka(e)?e:new De(e)}})),Js=Ji((function(e,t){return yt(t,(function(t){t=Po(t),rn(e,t,Ta(e[t],e))})),e}))
function eu(e){return function(){return e}}var tu=Ri(),ru=Ri(!0)
function nu(e){return e}function iu(e){return Ln("function"==typeof e?e:an(e,1))}var ou=Qn((function(e,t){return function(r){return Sn(r,e,t)}})),au=Qn((function(e,t){return function(r){return Sn(e,r,t)}}))
function su(e,t,r){var n=Os(t),i=wn(t,n)
null!=r||es(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=wn(t,Os(t)))
var o=!(es(r)&&"chain"in r&&!r.chain),a=Xa(e)
return yt(i,(function(r){var n=t[r]
e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__
if(o||t){var r=e(this.__wrapped__),i=r.__actions__=_i(this.__actions__)
return i.push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,_t([this.value()],arguments))})})),e}function uu(){}var lu=Mi(kt),cu=Mi(Dt),pu=Mi(Tt)
function fu(e){return vo(e)?Pt(Po(e)):function(e){return function(t){return Dn(t,e)}}(e)}var du=zi(),hu=zi(!0)
function gu(){return[]}function mu(){return!1}var bu,vu=ji((function(e,t){return e+t}),0),yu=$i("ceil"),wu=ji((function(e,t){return e/t}),1),Du=$i("floor"),Eu=ji((function(e,t){return e*t}),1),xu=$i("round"),Au=ji((function(e,t){return e-t}),0)
return Pr.after=function(e,t){if("function"!=typeof t)throw new Ce(o)
return e=hs(e),function(){if(--e<1)return t.apply(this,arguments)}},Pr.ary=Ca,Pr.assign=ys,Pr.assignIn=ws,Pr.assignInWith=Ds,Pr.assignWith=Es,Pr.at=xs,Pr.before=Sa,Pr.bind=Ta,Pr.bindAll=Js,Pr.bindKey=Na,Pr.castArray=function(){if(!arguments.length)return[]
var e=arguments[0]
return Va(e)?e:[e]},Pr.chain=fa,Pr.chunk=function(e,t,r){t=(r?bo(e,t,r):t===i)?1:gr(hs(t),0)
var o=null==e?0:e.length
if(!o||t<1)return[]
for(var a=0,s=0,u=n(ur(o/t));a<o;)u[s++]=ei(e,a,a+=t)
return u},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t]
o&&(i[n++]=o)}return i},Pr.concat=function(){var e=arguments.length
if(!e)return[]
for(var t=n(e-1),r=arguments[0],i=e;i--;)t[i-1]=arguments[i]
return _t(Va(r)?_i(r):[r],gn(t,1))},Pr.cond=function(e){var t=null==e?0:e.length,r=oo()
return e=t?kt(e,(function(e){if("function"!=typeof e[1])throw new Ce(o)
return[r(e[0]),e[1]]})):[],Qn((function(r){for(var n=-1;++n<t;){var i=e[n]
if(bt(i[0],this,r))return bt(i[1],this,r)}}))},Pr.conforms=function(e){return function(e){var t=Os(e)
return function(r){return sn(r,e,t)}}(an(e,1))},Pr.constant=eu,Pr.countBy=ga,Pr.create=function(e,t){var r=Ir(e)
return null==t?r:tn(r,t)},Pr.curry=function e(t,r,n){var o=Zi(t,8,i,i,i,i,i,r=n?i:r)
return o.placeholder=e.placeholder,o},Pr.curryRight=function e(t,r,n){var o=Zi(t,16,i,i,i,i,i,r=n?i:r)
return o.placeholder=e.placeholder,o},Pr.debounce=Oa,Pr.defaults=As,Pr.defaultsDeep=ks,Pr.defer=Fa,Pr.delay=La,Pr.difference=Mo,Pr.differenceBy=Uo,Pr.differenceWith=zo,Pr.drop=function(e,t,r){var n=null==e?0:e.length
return n?ei(e,(t=r||t===i?1:hs(t))<0?0:t,n):[]},Pr.dropRight=function(e,t,r){var n=null==e?0:e.length
return n?ei(e,0,(t=n-(t=r||t===i?1:hs(t)))<0?0:t):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?ci(e,oo(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?ci(e,oo(t,3),!0):[]},Pr.fill=function(e,t,r,n){var o=null==e?0:e.length
return o?(r&&"number"!=typeof r&&bo(e,t,r)&&(r=0,n=o),function(e,t,r,n){var o=e.length
for((r=hs(r))<0&&(r=-r>o?0:o+r),(n=n===i||n>o?o:hs(n))<0&&(n+=o),n=r>n?0:gs(n);r<n;)e[r++]=t
return e}(e,t,r,n)):[]},Pr.filter=function(e,t){return(Va(e)?Et:hn)(e,oo(t,3))},Pr.flatMap=function(e,t){return gn(xa(e,t),1)},Pr.flatMapDeep=function(e,t){return gn(xa(e,t),c)},Pr.flatMapDepth=function(e,t,r){return r=r===i?1:hs(r),gn(xa(e,t),r)},Pr.flatten=$o,Pr.flattenDeep=function(e){return null!=e&&e.length?gn(e,c):[]},Pr.flattenDepth=function(e,t){return null!=e&&e.length?gn(e,t=t===i?1:hs(t)):[]},Pr.flip=function(e){return Zi(e,512)},Pr.flow=tu,Pr.flowRight=ru,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t]
n[i[0]]=i[1]}return n},Pr.functions=function(e){return null==e?[]:wn(e,Os(e))},Pr.functionsIn=function(e){return null==e?[]:wn(e,Fs(e))},Pr.groupBy=wa,Pr.initial=function(e){return null!=e&&e.length?ei(e,0,-1):[]},Pr.intersection=Qo,Pr.intersectionBy=Zo,Pr.intersectionWith=Wo,Pr.invert=Ss,Pr.invertBy=Ts,Pr.invokeMap=Da,Pr.iteratee=iu,Pr.keyBy=Ea,Pr.keys=Os,Pr.keysIn=Fs,Pr.map=xa,Pr.mapKeys=function(e,t){var r={}
return t=oo(t,3),vn(e,(function(e,n,i){rn(r,t(e,n,i),e)})),r},Pr.mapValues=function(e,t){var r={}
return t=oo(t,3),vn(e,(function(e,n,i){rn(r,n,t(e,n,i))})),r},Pr.matches=function(e){return Pn(an(e,1))},Pr.matchesProperty=function(e,t){return In(e,an(t,1))},Pr.memoize=qa,Pr.merge=Ls,Pr.mergeWith=qs,Pr.method=ou,Pr.methodOf=au,Pr.mixin=su,Pr.negate=Ba,Pr.nthArg=function(e){return e=hs(e),Qn((function(t){return Mn(t,e)}))},Pr.omit=Bs,Pr.omitBy=function(e,t){return Ps(e,Ba(oo(t)))},Pr.once=function(e){return Sa(2,e)},Pr.orderBy=function(e,t,r,n){return null==e?[]:(Va(t)||(t=null==t?[]:[t]),Va(r=n?i:r)||(r=null==r?[]:[r]),Un(e,t,r))},Pr.over=lu,Pr.overArgs=Ra,Pr.overEvery=cu,Pr.overSome=pu,Pr.partial=Pa,Pr.partialRight=Ia,Pr.partition=Aa,Pr.pick=Rs,Pr.pickBy=Ps,Pr.property=fu,Pr.propertyOf=function(e){return function(t){return null==e?i:Dn(e,t)}},Pr.pull=Xo,Pr.pullAll=Yo,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Hn(e,t,oo(r,2)):e},Pr.pullAllWith=function(e,t,r){return e&&e.length&&t&&t.length?Hn(e,t,i,r):e},Pr.pullAt=Jo,Pr.range=du,Pr.rangeRight=hu,Pr.rearg=ja,Pr.reject=function(e,t){return(Va(e)?Et:hn)(e,Ba(oo(t,3)))},Pr.remove=function(e,t){var r=[]
if(!e||!e.length)return r
var n=-1,i=[],o=e.length
for(t=oo(t,3);++n<o;){var a=e[n]
t(a,n,e)&&(r.push(a),i.push(n))}return Vn(e,i),r},Pr.rest=function(e,t){if("function"!=typeof e)throw new Ce(o)
return Qn(e,t=t===i?t:hs(t))},Pr.reverse=ea,Pr.sampleSize=function(e,t,r){return t=(r?bo(e,t,r):t===i)?1:hs(t),(Va(e)?Wr:Wn)(e,t)},Pr.set=function(e,t,r){return null==e?e:Kn(e,t,r)},Pr.setWith=function(e,t,r,n){return n="function"==typeof n?n:i,null==e?e:Kn(e,t,r,n)},Pr.shuffle=function(e){return(Va(e)?Kr:Jn)(e)},Pr.slice=function(e,t,r){var n=null==e?0:e.length
return n?(r&&"number"!=typeof r&&bo(e,t,r)?(t=0,r=n):(t=null==t?0:hs(t),r=r===i?n:hs(r)),ei(e,t,r)):[]},Pr.sortBy=ka,Pr.sortedUniq=function(e){return e&&e.length?ii(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?ii(e,oo(t,2)):[]},Pr.split=function(e,t,r){return r&&"number"!=typeof r&&bo(e,t,r)&&(t=r=i),(r=r===i?d:r>>>0)?(e=vs(e))&&("string"==typeof t||null!=t&&!os(t))&&!(t=ai(t))&&Yt(e)?vi(ir(e),0,r):e.split(t,r):[]},Pr.spread=function(e,t){if("function"!=typeof e)throw new Ce(o)
return t=null==t?0:gr(hs(t),0),Qn((function(r){var n=r[t],i=vi(r,0,t)
return n&&_t(i,n),bt(e,this,i)}))},Pr.tail=function(e){var t=null==e?0:e.length
return t?ei(e,1,t):[]},Pr.take=function(e,t,r){return e&&e.length?ei(e,0,(t=r||t===i?1:hs(t))<0?0:t):[]},Pr.takeRight=function(e,t,r){var n=null==e?0:e.length
return n?ei(e,(t=n-(t=r||t===i?1:hs(t)))<0?0:t,n):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?ci(e,oo(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?ci(e,oo(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,t,r){var n=!0,i=!0
if("function"!=typeof e)throw new Ce(o)
return es(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Oa(e,t,{leading:n,maxWait:t,trailing:i})},Pr.thru=da,Pr.toArray=fs,Pr.toPairs=Is,Pr.toPairsIn=js,Pr.toPath=function(e){return Va(e)?kt(e,Po):us(e)?[e]:_i(Ro(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Va(e),i=n||Za(e)||ls(e)
if(t=oo(t,4),null==r){var o=e&&e.constructor
r=i?n?new o:[]:es(e)&&Xa(o)?Ir(Ge(e)):{}}return(i?yt:vn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Pr.unary=function(e){return Ca(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?si(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?si(e,oo(t,2)):[]},Pr.uniqWith=function(e,t){return t="function"==typeof t?t:i,e&&e.length?si(e,i,t):[]},Pr.unset=function(e,t){return null==e||ui(e,t)},Pr.unzip=ia,Pr.unzipWith=oa,Pr.update=function(e,t,r){return null==e?e:li(e,t,gi(r))},Pr.updateWith=function(e,t,r,n){return n="function"==typeof n?n:i,null==e?e:li(e,t,gi(r),n)},Pr.values=Ms,Pr.valuesIn=function(e){return null==e?[]:Vt(e,Fs(e))},Pr.without=aa,Pr.words=Xs,Pr.wrap=function(e,t){return Pa(gi(t),e)},Pr.xor=sa,Pr.xorBy=ua,Pr.xorWith=la,Pr.zip=ca,Pr.zipObject=function(e,t){return di(e||[],t||[],Yr)},Pr.zipObjectDeep=function(e,t){return di(e||[],t||[],Kn)},Pr.zipWith=pa,Pr.entries=Is,Pr.entriesIn=js,Pr.extend=ws,Pr.extendWith=Ds,su(Pr,Pr),Pr.add=vu,Pr.attempt=Ys,Pr.camelCase=Us,Pr.capitalize=zs,Pr.ceil=yu,Pr.clamp=function(e,t,r){return r===i&&(r=t,t=i),r!==i&&(r=(r=ms(r))==r?r:0),t!==i&&(t=(t=ms(t))==t?t:0),on(ms(e),t,r)},Pr.clone=function(e){return an(e,4)},Pr.cloneDeep=function(e){return an(e,5)},Pr.cloneDeepWith=function(e,t){return an(e,5,t="function"==typeof t?t:i)},Pr.cloneWith=function(e,t){return an(e,4,t="function"==typeof t?t:i)},Pr.conformsTo=function(e,t){return null==t||sn(e,t,Os(t))},Pr.deburr=Hs,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=wu,Pr.endsWith=function(e,t,r){e=vs(e),t=ai(t)
var n=e.length,o=r=r===i?n:on(hs(r),0,n)
return(r-=t.length)>=0&&e.slice(r,o)==t},Pr.eq=Ma,Pr.escape=function(e){return(e=vs(e))&&Z.test(e)?e.replace(G,Kt):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&re.test(e)?e.replace(te,"\\$&"):e},Pr.every=function(e,t,r){var n=Va(e)?Dt:fn
return r&&bo(e,t,r)&&(t=i),n(e,oo(t,3))},Pr.find=ma,Pr.findIndex=Ho,Pr.findKey=function(e,t){return Ot(e,oo(t,3),vn)},Pr.findLast=ba,Pr.findLastIndex=Vo,Pr.findLastKey=function(e,t){return Ot(e,oo(t,3),yn)},Pr.floor=Du,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:mn(e,oo(t,3),Fs)},Pr.forInRight=function(e,t){return null==e?e:bn(e,oo(t,3),Fs)},Pr.forOwn=function(e,t){return e&&vn(e,oo(t,3))},Pr.forOwnRight=function(e,t){return e&&yn(e,oo(t,3))},Pr.get=_s,Pr.gt=Ua,Pr.gte=za,Pr.has=function(e,t){return null!=e&&fo(e,t,kn)},Pr.hasIn=Cs,Pr.head=Go,Pr.identity=nu,Pr.includes=function(e,t,r,n){e=Ga(e)?e:Ms(e),r=r&&!n?hs(r):0
var i=e.length
return r<0&&(r=gr(i+r,0)),ss(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Lt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length
if(!n)return-1
var i=null==r?0:hs(r)
return i<0&&(i=gr(n+i,0)),Lt(e,t,i)},Pr.inRange=function(e,t,r){return t=ds(t),r===i?(r=t,t=0):r=ds(r),function(e,t,r){return e>=mr(t,r)&&e<gr(t,r)}(e=ms(e),t,r)},Pr.invoke=Ns,Pr.isArguments=Ha,Pr.isArray=Va,Pr.isArrayBuffer=$a,Pr.isArrayLike=Ga,Pr.isArrayLikeObject=Qa,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&xn(e)==b},Pr.isBuffer=Za,Pr.isDate=Wa,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Pr.isEmpty=function(e){if(null==e)return!0
if(Ga(e)&&(Va(e)||"string"==typeof e||"function"==typeof e.splice||Za(e)||ls(e)||Ha(e)))return!e.length
var t=po(e)
if(t==E||t==C)return!e.size
if(Do(e))return!qn(e).length
for(var r in e)if(Le.call(e,r))return!1
return!0},Pr.isEqual=function(e,t){return Nn(e,t)},Pr.isEqualWith=function(e,t,r){var n=(r="function"==typeof r?r:i)?r(e,t):i
return n===i?Nn(e,t,i,r):!!n},Pr.isError=Ka,Pr.isFinite=function(e){return"number"==typeof e&&fr(e)},Pr.isFunction=Xa,Pr.isInteger=Ya,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||On(e,t,so(t))},Pr.isMatchWith=function(e,t,r){return r="function"==typeof r?r:i,On(e,t,so(t),r)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(wo(e))throw new De("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.")
return Fn(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=is,Pr.isRegExp=os,Pr.isSafeInteger=function(e){return Ya(e)&&e>=-9007199254740991&&e<=p},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=us,Pr.isTypedArray=ls,Pr.isUndefined=function(e){return e===i},Pr.isWeakMap=function(e){return ts(e)&&po(e)==N},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==xn(e)},Pr.join=function(e,t){return null==e?"":dr.call(e,t)},Pr.kebabCase=Vs,Pr.last=Ko,Pr.lastIndexOf=function(e,t,r){var n=null==e?0:e.length
if(!n)return-1
var o=n
return r!==i&&(o=(o=hs(r))<0?gr(n+o,0):mr(o,n-1)),t==t?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n
return n}(e,t,o):Ft(e,Bt,o,!0)},Pr.lowerCase=$s,Pr.lowerFirst=Gs,Pr.lt=cs,Pr.lte=ps,Pr.max=function(e){return e&&e.length?dn(e,nu,An):i},Pr.maxBy=function(e,t){return e&&e.length?dn(e,oo(t,2),An):i},Pr.mean=function(e){return Rt(e,nu)},Pr.meanBy=function(e,t){return Rt(e,oo(t,2))},Pr.min=function(e){return e&&e.length?dn(e,nu,Bn):i},Pr.minBy=function(e,t){return e&&e.length?dn(e,oo(t,2),Bn):i},Pr.stubArray=gu,Pr.stubFalse=mu,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=Eu,Pr.nth=function(e,t){return e&&e.length?Mn(e,hs(t)):i},Pr.noConflict=function(){return ot._===this&&(ot._=Ie),this},Pr.noop=uu,Pr.now=_a,Pr.pad=function(e,t,r){e=vs(e)
var n=(t=hs(t))?nr(e):0
if(!t||n>=t)return e
var i=(t-n)/2
return Ui(lr(i),r)+e+Ui(ur(i),r)},Pr.padEnd=function(e,t,r){e=vs(e)
var n=(t=hs(t))?nr(e):0
return t&&n<t?e+Ui(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e)
var n=(t=hs(t))?nr(e):0
return t&&n<t?Ui(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),vr(vs(e).replace(ne,""),t||0)},Pr.random=function(e,t,r){if(r&&"boolean"!=typeof r&&bo(e,t,r)&&(t=r=i),r===i&&("boolean"==typeof t?(r=t,t=i):"boolean"==typeof e&&(r=e,e=i)),e===i&&t===i?(e=0,t=1):(e=ds(e),t===i?(t=e,e=0):t=ds(t)),e>t){var n=e
e=t,t=n}if(r||e%1||t%1){var o=yr()
return mr(e+o*(t-e+tt("1e-"+((o+"").length-1))),t)}return $n(e,t)},Pr.reduce=function(e,t,r){var n=Va(e)?Ct:jt,i=arguments.length<3
return n(e,oo(t,4),r,i,cn)},Pr.reduceRight=function(e,t,r){var n=Va(e)?St:jt,i=arguments.length<3
return n(e,oo(t,4),r,i,pn)},Pr.repeat=function(e,t,r){return t=(r?bo(e,t,r):t===i)?1:hs(t),Gn(vs(e),t)},Pr.replace=function(){var e=arguments,t=vs(e[0])
return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(e,t,r){var n=-1,o=(t=mi(t,e)).length
for(o||(o=1,e=i);++n<o;){var a=null==e?i:e[Po(t[n])]
a===i&&(n=o,a=r),e=Xa(a)?a.call(e):a}return e},Pr.round=xu,Pr.runInContext=e,Pr.sample=function(e){return(Va(e)?Zr:Zn)(e)},Pr.size=function(e){if(null==e)return 0
if(Ga(e))return ss(e)?nr(e):e.length
var t=po(e)
return t==E||t==C?e.size:qn(e).length},Pr.snakeCase=Qs,Pr.some=function(e,t,r){var n=Va(e)?Tt:ti
return r&&bo(e,t,r)&&(t=i),n(e,oo(t,3))},Pr.sortedIndex=function(e,t){return ri(e,t)},Pr.sortedIndexBy=function(e,t,r){return ni(e,t,oo(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length
if(r){var n=ri(e,t)
if(n<r&&Ma(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return ri(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ni(e,t,oo(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=ri(e,t,!0)-1
if(Ma(e[r],t))return r}return-1},Pr.startCase=Zs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:on(hs(r),0,e.length),t=ai(t),e.slice(r,r+t.length)==t},Pr.subtract=Au,Pr.sum=function(e){return e&&e.length?Mt(e,nu):0},Pr.sumBy=function(e,t){return e&&e.length?Mt(e,oo(t,2)):0},Pr.template=function(e,t,r){var n=Pr.templateSettings
r&&bo(e,t,r)&&(t=i),e=vs(e),t=Ds({},t,n,Wi)
var o,a,s=Ds({},t.imports,n.imports,Wi),u=Os(s),l=Vt(s,u),c=0,p=t.interpolate||ye,f="__p += '",d=ke((t.escape||ye).source+"|"+p.source+"|"+(p===X?pe:ye).source+"|"+(t.evaluate||ye).source+"|$","g"),h="//# sourceURL="+(Le.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Xe+"]")+"\n"
e.replace(d,(function(t,r,n,i,s,u){return n||(n=i),f+=e.slice(c,u).replace(we,Xt),r&&(o=!0,f+="' +\n__e("+r+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=u+t.length,t})),f+="';\n"
var g=Le.call(t,"variable")&&t.variable
if(g){if(le.test(g))throw new De("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n"
f=(a?f.replace(z,""):f).replace(H,"$1").replace(V,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}"
var m=Ys((function(){return Ee(u,h+"return "+f).apply(i,l)}))
if(m.source=f,Ka(m))throw m
return m},Pr.times=function(e,t){if((e=hs(e))<1||e>p)return[]
var r=d,n=mr(e,d)
t=oo(t),e-=d
for(var i=Ut(n,t);++r<e;)t(r)
return i},Pr.toFinite=ds,Pr.toInteger=hs,Pr.toLength=gs,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?on(hs(e),-9007199254740991,p):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(e,t,r){if((e=vs(e))&&(r||t===i))return zt(e)
if(!e||!(t=ai(t)))return e
var n=ir(e),o=ir(t)
return vi(n,Gt(n,o),Qt(n,o)+1).join("")},Pr.trimEnd=function(e,t,r){if((e=vs(e))&&(r||t===i))return e.slice(0,or(e)+1)
if(!e||!(t=ai(t)))return e
var n=ir(e)
return vi(n,0,Qt(n,ir(t))+1).join("")},Pr.trimStart=function(e,t,r){if((e=vs(e))&&(r||t===i))return e.replace(ne,"")
if(!e||!(t=ai(t)))return e
var n=ir(e)
return vi(n,Gt(n,ir(t))).join("")},Pr.truncate=function(e,t){var r=30,n="..."
if(es(t)){var o="separator"in t?t.separator:o
r="length"in t?hs(t.length):r,n="omission"in t?ai(t.omission):n}var a=(e=vs(e)).length
if(Yt(e)){var s=ir(e)
a=s.length}if(r>=a)return e
var u=r-nr(n)
if(u<1)return n
var l=s?vi(s,0,u).join(""):e.slice(0,u)
if(o===i)return l+n
if(s&&(u+=l.length-u),os(o)){if(e.slice(u).search(o)){var c,p=l
for(o.global||(o=ke(o.source,vs(fe.exec(o))+"g")),o.lastIndex=0;c=o.exec(p);)var f=c.index
l=l.slice(0,f===i?u:f)}}else if(e.indexOf(ai(o),u)!=u){var d=l.lastIndexOf(o)
d>-1&&(l=l.slice(0,d))}return l+n},Pr.unescape=function(e){return(e=vs(e))&&Q.test(e)?e.replace($,ar):e},Pr.uniqueId=function(e){var t=++qe
return vs(e)+t},Pr.upperCase=Ws,Pr.upperFirst=Ks,Pr.each=va,Pr.eachRight=ya,Pr.first=Go,su(Pr,(bu={},vn(Pr,(function(e,t){Le.call(Pr.prototype,t)||(bu[t]=e)})),bu),{chain:!1}),Pr.VERSION="4.17.21",yt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),yt(["drop","take"],(function(e,t){Ur.prototype[e]=function(r){r=r===i?1:gr(hs(r),0)
var n=this.__filtered__&&!t?new Ur(this):this.clone()
return n.__filtered__?n.__takeCount__=mr(r,n.__takeCount__):n.__views__.push({size:mr(r,d),type:e+(n.__dir__<0?"Right":"")}),n},Ur.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),yt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r
Ur.prototype[e]=function(e){var t=this.clone()
return t.__iteratees__.push({iteratee:oo(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),yt(["head","last"],(function(e,t){var r="take"+(t?"Right":"")
Ur.prototype[e]=function(){return this[r](1).value()[0]}})),yt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right")
Ur.prototype[e]=function(){return this.__filtered__?new Ur(this):this[r](1)}})),Ur.prototype.compact=function(){return this.filter(nu)},Ur.prototype.find=function(e){return this.filter(e).head()},Ur.prototype.findLast=function(e){return this.reverse().find(e)},Ur.prototype.invokeMap=Qn((function(e,t){return"function"==typeof e?new Ur(this):this.map((function(r){return Sn(r,e,t)}))})),Ur.prototype.reject=function(e){return this.filter(Ba(oo(e)))},Ur.prototype.slice=function(e,t){e=hs(e)
var r=this
return r.__filtered__&&(e>0||t<0)?new Ur(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==i&&(r=(t=hs(t))<0?r.dropRight(-t):r.take(t-e)),r)},Ur.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Ur.prototype.toArray=function(){return this.take(d)},vn(Ur.prototype,(function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),n=/^(?:head|last)$/.test(t),o=Pr[n?"take"+("last"==t?"Right":""):t],a=n||/^find/.test(t)
o&&(Pr.prototype[t]=function(){var t=this.__wrapped__,s=n?[1]:arguments,u=t instanceof Ur,l=s[0],c=u||Va(t),p=function(e){var t=o.apply(Pr,_t([e],s))
return n&&f?t[0]:t}
c&&r&&"function"==typeof l&&1!=l.length&&(u=c=!1)
var f=this.__chain__,d=!!this.__actions__.length,h=a&&!f,g=u&&!d
if(!a&&c){t=g?t:new Ur(this)
var m=e.apply(t,s)
return m.__actions__.push({func:da,args:[p],thisArg:i}),new Mr(m,f)}return h&&g?e.apply(this,s):(m=this.thru(p),h?n?m.value()[0]:m.value():m)})})),yt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Se[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e)
Pr.prototype[e]=function(){var e=arguments
if(n&&!this.__chain__){var i=this.value()
return t.apply(Va(i)?i:[],e)}return this[r]((function(r){return t.apply(Va(r)?r:[],e)}))}})),vn(Ur.prototype,(function(e,t){var r=Pr[t]
if(r){var n=r.name+""
Le.call(Sr,n)||(Sr[n]=[]),Sr[n].push({name:t,func:r})}})),Sr[Pi(i,2).name]=[{name:"wrapper",func:i}],Ur.prototype.clone=function(){var e=new Ur(this.__wrapped__)
return e.__actions__=_i(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=_i(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=_i(this.__views__),e},Ur.prototype.reverse=function(){if(this.__filtered__){var e=new Ur(this)
e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1
return e},Ur.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Va(e),n=t<0,i=r?e.length:0,o=function(e,t,r){for(var n=-1,i=r.length;++n<i;){var o=r[n],a=o.size
switch(o.type){case"drop":e+=a
break
case"dropRight":t-=a
break
case"take":t=mr(t,e+a)
break
case"takeRight":e=gr(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,u=s-a,l=n?s:a-1,c=this.__iteratees__,p=c.length,f=0,d=mr(u,this.__takeCount__)
if(!r||!n&&i==u&&d==u)return pi(e,this.__actions__)
var h=[]
e:for(;u--&&f<d;){for(var g=-1,m=e[l+=t];++g<p;){var b=c[g],v=b.iteratee,y=b.type,w=v(m)
if(2==y)m=w
else if(!w){if(1==y)continue e
break e}}h[f++]=m}return h},Pr.prototype.at=ha,Pr.prototype.chain=function(){return fa(this)},Pr.prototype.commit=function(){return new Mr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===i&&(this.__values__=fs(this.value()))
var e=this.__index__>=this.__values__.length
return{done:e,value:e?i:this.__values__[this.__index__++]}},Pr.prototype.plant=function(e){for(var t,r=this;r instanceof jr;){var n=jo(r)
n.__index__=0,n.__values__=i,t?o.__wrapped__=n:t=n
var o=n
r=r.__wrapped__}return o.__wrapped__=e,t},Pr.prototype.reverse=function(){var e=this.__wrapped__
if(e instanceof Ur){var t=e
return this.__actions__.length&&(t=new Ur(this)),(t=t.reverse()).__actions__.push({func:da,args:[ea],thisArg:i}),new Mr(t,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,at&&(Pr.prototype[at]=function(){return this}),Pr}()
ot._=sr,(n=function(){return sr}.call(t,r,t,e))===i||(e.exports=n)}.call(this)},347:(e,t,r)=>{var n,i
!function(){var o,a,s,u,l,c,p,f,d,h,g,m,b,v,y,w,D,E,x,A,k,_,C,S,T,N=function(e){var t=new N.Builder
return t.pipeline.add(N.trimmer,N.stopWordFilter,N.stemmer),t.searchPipeline.add(N.stemmer),e.call(t,t),t.build()}
N.version="2.3.9",N.utils={},N.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),N.utils.asString=function(e){return null==e?"":e.toString()},N.utils.clone=function(e){if(null==e)return e
for(var t=Object.create(null),r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],o=e[i]
if(Array.isArray(o))t[i]=o.slice()
else{if("string"!=typeof o&&"number"!=typeof o&&"boolean"!=typeof o)throw new TypeError("clone is not deep and does not support nested objects")
t[i]=o}}return t},N.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},N.FieldRef.joiner="/",N.FieldRef.fromString=function(e){var t=e.indexOf(N.FieldRef.joiner)
if(-1===t)throw"malformed field ref string"
var r=e.slice(0,t),n=e.slice(t+1)
return new N.FieldRef(n,r,e)},N.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+N.FieldRef.joiner+this.docRef),this._stringValue},N.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length
for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},N.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},N.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},N.Set.prototype.contains=function(e){return!!this.elements[e]},N.Set.prototype.intersect=function(e){var t,r,n,i=[]
if(e===N.Set.complete)return this
if(e===N.Set.empty)return e
this.length<e.length?(t=this,r=e):(t=e,r=this),n=Object.keys(t.elements)
for(var o=0;o<n.length;o++){var a=n[o]
a in r.elements&&i.push(a)}return new N.Set(i)},N.Set.prototype.union=function(e){return e===N.Set.complete?N.Set.complete:e===N.Set.empty?this:new N.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},N.idf=function(e,t){var r=0
for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length)
var i=(t-r+.5)/(r+.5)
return Math.log(1+Math.abs(i))},N.Token=function(e,t){this.str=e||"",this.metadata=t||{}},N.Token.prototype.toString=function(){return this.str},N.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},N.Token.prototype.clone=function(e){return e=e||function(e){return e},new N.Token(e(this.str,this.metadata),this.metadata)},N.tokenizer=function(e,t){if(null==e||null==e)return[]
if(Array.isArray(e))return e.map((function(e){return new N.Token(N.utils.asString(e).toLowerCase(),N.utils.clone(t))}))
for(var r=e.toString().toLowerCase(),n=r.length,i=[],o=0,a=0;o<=n;o++){var s=o-a
if(r.charAt(o).match(N.tokenizer.separator)||o==n){if(s>0){var u=N.utils.clone(t)||{}
u.position=[a,s],u.index=i.length,i.push(new N.Token(r.slice(a,o),u))}a=o+1}}return i},N.tokenizer.separator=/[\s\-]+/,N.Pipeline=function(){this._stack=[]},N.Pipeline.registeredFunctions=Object.create(null),N.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&N.utils.warn("Overwriting existing registered function: "+t),e.label=t,N.Pipeline.registeredFunctions[e.label]=e},N.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||N.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},N.Pipeline.load=function(e){var t=new N.Pipeline
return e.forEach((function(e){var r=N.Pipeline.registeredFunctions[e]
if(!r)throw new Error("Cannot load unregistered function: "+e)
t.add(r)})),t},N.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments)
e.forEach((function(e){N.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)}),this)},N.Pipeline.prototype.after=function(e,t){N.Pipeline.warnIfFunctionNotRegistered(t)
var r=this._stack.indexOf(e)
if(-1==r)throw new Error("Cannot find existingFn")
r+=1,this._stack.splice(r,0,t)},N.Pipeline.prototype.before=function(e,t){N.Pipeline.warnIfFunctionNotRegistered(t)
var r=this._stack.indexOf(e)
if(-1==r)throw new Error("Cannot find existingFn")
this._stack.splice(r,0,t)},N.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},N.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var n=this._stack[r],i=[],o=0;o<e.length;o++){var a=n(e[o],o,e)
if(null!=a&&""!==a)if(Array.isArray(a))for(var s=0;s<a.length;s++)i.push(a[s])
else i.push(a)}e=i}return e},N.Pipeline.prototype.runString=function(e,t){var r=new N.Token(e,t)
return this.run([r]).map((function(e){return e.toString()}))},N.Pipeline.prototype.reset=function(){this._stack=[]},N.Pipeline.prototype.toJSON=function(){return this._stack.map((function(e){return N.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},N.Vector=function(e){this._magnitude=0,this.elements=e||[]},N.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0
for(var t=0,r=this.elements.length/2,n=r-t,i=Math.floor(n/2),o=this.elements[2*i];n>1&&(o<e&&(t=i),o>e&&(r=i),o!=e);)n=r-t,i=t+Math.floor(n/2),o=this.elements[2*i]
return o==e||o>e?2*i:o<e?2*(i+1):void 0},N.Vector.prototype.insert=function(e,t){this.upsert(e,t,(function(){throw"duplicate index"}))},N.Vector.prototype.upsert=function(e,t,r){this._magnitude=0
var n=this.positionForIndex(e)
this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},N.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude
for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var n=this.elements[r]
e+=n*n}return this._magnitude=Math.sqrt(e)},N.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,n=e.elements,i=r.length,o=n.length,a=0,s=0,u=0,l=0;u<i&&l<o;)(a=r[u])<(s=n[l])?u+=2:a>s?l+=2:a==s&&(t+=r[u+1]*n[l+1],u+=2,l+=2)
return t},N.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},N.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t]
return e},N.Vector.prototype.toJSON=function(){return this.elements},N.stemmer=(o={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},a={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},s="[aeiouy]",u="[^aeiou][^aeiouy]*",l=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),c=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),p=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),f=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),d=/^(.+?)(ss|i)es$/,h=/^(.+?)([^s])s$/,g=/^(.+?)eed$/,m=/^(.+?)(ed|ing)$/,b=/.$/,v=/(at|bl|iz)$/,y=new RegExp("([^aeiouylsz])\\1$"),w=new RegExp("^"+u+s+"[^aeiouwxy]$"),D=/^(.+?[^aeiou])y$/,E=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,x=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,A=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,k=/^(.+?)(s|t)(ion)$/,_=/^(.+?)e$/,C=/ll$/,S=new RegExp("^"+u+s+"[^aeiouwxy]$"),T=function(e){var t,r,n,i,s,u,T
if(e.length<3)return e
if("y"==(n=e.substr(0,1))&&(e=n.toUpperCase()+e.substr(1)),s=h,(i=d).test(e)?e=e.replace(i,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),s=m,(i=g).test(e)){var N=i.exec(e);(i=l).test(N[1])&&(i=b,e=e.replace(i,""))}else s.test(e)&&(t=(N=s.exec(e))[1],(s=f).test(t)&&(u=y,T=w,(s=v).test(e=t)?e+="e":u.test(e)?(i=b,e=e.replace(i,"")):T.test(e)&&(e+="e")))
return(i=D).test(e)&&(e=(t=(N=i.exec(e))[1])+"i"),(i=E).test(e)&&(t=(N=i.exec(e))[1],r=N[2],(i=l).test(t)&&(e=t+o[r])),(i=x).test(e)&&(t=(N=i.exec(e))[1],r=N[2],(i=l).test(t)&&(e=t+a[r])),s=k,(i=A).test(e)?(t=(N=i.exec(e))[1],(i=c).test(t)&&(e=t)):s.test(e)&&(t=(N=s.exec(e))[1]+N[2],(s=c).test(t)&&(e=t)),(i=_).test(e)&&(t=(N=i.exec(e))[1],s=p,u=S,((i=c).test(t)||s.test(t)&&!u.test(t))&&(e=t)),s=c,(i=C).test(e)&&s.test(e)&&(i=b,e=e.replace(i,"")),"y"==n&&(e=n.toLowerCase()+e.substr(1)),e},function(e){return e.update(T)}),N.Pipeline.registerFunction(N.stemmer,"stemmer"),N.generateStopWordFilter=function(e){var t=e.reduce((function(e,t){return e[t]=t,e}),{})
return function(e){if(e&&t[e.toString()]!==e.toString())return e}},N.stopWordFilter=N.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),N.Pipeline.registerFunction(N.stopWordFilter,"stopWordFilter"),N.trimmer=function(e){return e.update((function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")}))},N.Pipeline.registerFunction(N.trimmer,"trimmer"),N.TokenSet=function(){this.final=!1,this.edges={},this.id=N.TokenSet._nextId,N.TokenSet._nextId+=1},N.TokenSet._nextId=1,N.TokenSet.fromArray=function(e){for(var t=new N.TokenSet.Builder,r=0,n=e.length;r<n;r++)t.insert(e[r])
return t.finish(),t.root},N.TokenSet.fromClause=function(e){return"editDistance"in e?N.TokenSet.fromFuzzyString(e.term,e.editDistance):N.TokenSet.fromString(e.term)},N.TokenSet.fromFuzzyString=function(e,t){for(var r=new N.TokenSet,n=[{node:r,editsRemaining:t,str:e}];n.length;){var i=n.pop()
if(i.str.length>0){var o,a=i.str.charAt(0)
a in i.node.edges?o=i.node.edges[a]:(o=new N.TokenSet,i.node.edges[a]=o),1==i.str.length&&(o.final=!0),n.push({node:o,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(0!=i.editsRemaining){if("*"in i.node.edges)var s=i.node.edges["*"]
else s=new N.TokenSet,i.node.edges["*"]=s
if(0==i.str.length&&(s.final=!0),n.push({node:s,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&n.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),1==i.str.length&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var u=i.node.edges["*"]
else u=new N.TokenSet,i.node.edges["*"]=u
1==i.str.length&&(u.final=!0),n.push({node:u,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var l,c=i.str.charAt(0),p=i.str.charAt(1)
p in i.node.edges?l=i.node.edges[p]:(l=new N.TokenSet,i.node.edges[p]=l),1==i.str.length&&(l.final=!0),n.push({node:l,editsRemaining:i.editsRemaining-1,str:c+i.str.slice(2)})}}}return r},N.TokenSet.fromString=function(e){for(var t=new N.TokenSet,r=t,n=0,i=e.length;n<i;n++){var o=e[n],a=n==i-1
if("*"==o)t.edges[o]=t,t.final=a
else{var s=new N.TokenSet
s.final=a,t.edges[o]=s,t=s}}return r},N.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),i=n.length
r.node.final&&(r.prefix.charAt(0),e.push(r.prefix))
for(var o=0;o<i;o++){var a=n[o]
t.push({prefix:r.prefix.concat(a),node:r.node.edges[a]})}}return e},N.TokenSet.prototype.toString=function(){if(this._str)return this._str
for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,n=0;n<r;n++){var i=t[n]
e=e+i+this.edges[i].id}return e},N.TokenSet.prototype.intersect=function(e){for(var t=new N.TokenSet,r=void 0,n=[{qNode:e,output:t,node:this}];n.length;){r=n.pop()
for(var i=Object.keys(r.qNode.edges),o=i.length,a=Object.keys(r.node.edges),s=a.length,u=0;u<o;u++)for(var l=i[u],c=0;c<s;c++){var p=a[c]
if(p==l||"*"==l){var f=r.node.edges[p],d=r.qNode.edges[l],h=f.final&&d.final,g=void 0
p in r.output.edges?(g=r.output.edges[p]).final=g.final||h:((g=new N.TokenSet).final=h,r.output.edges[p]=g),n.push({qNode:d,output:g,node:f})}}}return t},N.TokenSet.Builder=function(){this.previousWord="",this.root=new N.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},N.TokenSet.Builder.prototype.insert=function(e){var t,r=0
if(e<this.previousWord)throw new Error("Out of order word insertion")
for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)r++
for(this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child,n=r;n<e.length;n++){var i=new N.TokenSet,o=e[n]
t.edges[o]=i,this.uncheckedNodes.push({parent:t,char:o,child:i}),t=i}t.final=!0,this.previousWord=e},N.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},N.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],n=r.child.toString()
n in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[n]:(r.child._str=n,this.minimizedNodes[n]=r.child),this.uncheckedNodes.pop()}},N.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},N.Index.prototype.search=function(e){return this.query((function(t){new N.QueryParser(e,t).parse()}))},N.Index.prototype.query=function(e){for(var t=new N.Query(this.fields),r=Object.create(null),n=Object.create(null),i=Object.create(null),o=Object.create(null),a=Object.create(null),s=0;s<this.fields.length;s++)n[this.fields[s]]=new N.Vector
for(e.call(t,t),s=0;s<t.clauses.length;s++){var u,l=t.clauses[s],c=N.Set.empty
u=l.usePipeline?this.pipeline.runString(l.term,{fields:l.fields}):[l.term]
for(var p=0;p<u.length;p++){var f=u[p]
l.term=f
var d=N.TokenSet.fromClause(l),h=this.tokenSet.intersect(d).toArray()
if(0===h.length&&l.presence===N.Query.presence.REQUIRED){for(var g=0;g<l.fields.length;g++)o[F=l.fields[g]]=N.Set.empty
break}for(var m=0;m<h.length;m++){var b=h[m],v=this.invertedIndex[b],y=v._index
for(g=0;g<l.fields.length;g++){var w=v[F=l.fields[g]],D=Object.keys(w),E=b+"/"+F,x=new N.Set(D)
if(l.presence==N.Query.presence.REQUIRED&&(c=c.union(x),void 0===o[F]&&(o[F]=N.Set.complete)),l.presence!=N.Query.presence.PROHIBITED){if(n[F].upsert(y,l.boost,(function(e,t){return e+t})),!i[E]){for(var A=0;A<D.length;A++){var k,_=D[A],C=new N.FieldRef(_,F),S=w[_]
void 0===(k=r[C])?r[C]=new N.MatchData(b,F,S):k.add(b,F,S)}i[E]=!0}}else void 0===a[F]&&(a[F]=N.Set.empty),a[F]=a[F].union(x)}}}if(l.presence===N.Query.presence.REQUIRED)for(g=0;g<l.fields.length;g++)o[F=l.fields[g]]=o[F].intersect(c)}var T=N.Set.complete,O=N.Set.empty
for(s=0;s<this.fields.length;s++){var F
o[F=this.fields[s]]&&(T=T.intersect(o[F])),a[F]&&(O=O.union(a[F]))}var L=Object.keys(r),q=[],B=Object.create(null)
if(t.isNegated())for(L=Object.keys(this.fieldVectors),s=0;s<L.length;s++){C=L[s]
var R=N.FieldRef.fromString(C)
r[C]=new N.MatchData}for(s=0;s<L.length;s++){var P=(R=N.FieldRef.fromString(L[s])).docRef
if(T.contains(P)&&!O.contains(P)){var I,j=this.fieldVectors[R],M=n[R.fieldName].similarity(j)
if(void 0!==(I=B[P]))I.score+=M,I.matchData.combine(r[R])
else{var U={ref:P,score:M,matchData:r[R]}
B[P]=U,q.push(U)}}}return q.sort((function(e,t){return t.score-e.score}))},N.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map((function(e){return[e,this.invertedIndex[e]]}),this),t=Object.keys(this.fieldVectors).map((function(e){return[e,this.fieldVectors[e].toJSON()]}),this)
return{version:N.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},N.Index.load=function(e){var t={},r={},n=e.fieldVectors,i=Object.create(null),o=e.invertedIndex,a=new N.TokenSet.Builder,s=N.Pipeline.load(e.pipeline)
e.version!=N.version&&N.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+N.version+"' does not match serialized index '"+e.version+"'")
for(var u=0;u<n.length;u++){var l=(p=n[u])[0],c=p[1]
r[l]=new N.Vector(c)}for(u=0;u<o.length;u++){var p,f=(p=o[u])[0],d=p[1]
a.insert(f),i[f]=d}return a.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=i,t.tokenSet=a.root,t.pipeline=s,new N.Index(t)},N.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=N.tokenizer,this.pipeline=new N.Pipeline,this.searchPipeline=new N.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},N.Builder.prototype.ref=function(e){this._ref=e},N.Builder.prototype.field=function(e,t){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'")
this._fields[e]=t||{}},N.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},N.Builder.prototype.k1=function(e){this._k1=e},N.Builder.prototype.add=function(e,t){var r=e[this._ref],n=Object.keys(this._fields)
this._documents[r]=t||{},this.documentCount+=1
for(var i=0;i<n.length;i++){var o=n[i],a=this._fields[o].extractor,s=a?a(e):e[o],u=this.tokenizer(s,{fields:[o]}),l=this.pipeline.run(u),c=new N.FieldRef(r,o),p=Object.create(null)
this.fieldTermFrequencies[c]=p,this.fieldLengths[c]=0,this.fieldLengths[c]+=l.length
for(var f=0;f<l.length;f++){var d=l[f]
if(null==p[d]&&(p[d]=0),p[d]+=1,null==this.invertedIndex[d]){var h=Object.create(null)
h._index=this.termIndex,this.termIndex+=1
for(var g=0;g<n.length;g++)h[n[g]]=Object.create(null)
this.invertedIndex[d]=h}null==this.invertedIndex[d][o][r]&&(this.invertedIndex[d][o][r]=Object.create(null))
for(var m=0;m<this.metadataWhitelist.length;m++){var b=this.metadataWhitelist[m],v=d.metadata[b]
null==this.invertedIndex[d][o][r][b]&&(this.invertedIndex[d][o][r][b]=[]),this.invertedIndex[d][o][r][b].push(v)}}}},N.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},n={},i=0;i<t;i++){var o=N.FieldRef.fromString(e[i]),a=o.fieldName
n[a]||(n[a]=0),n[a]+=1,r[a]||(r[a]=0),r[a]+=this.fieldLengths[o]}var s=Object.keys(this._fields)
for(i=0;i<s.length;i++){var u=s[i]
r[u]=r[u]/n[u]}this.averageFieldLength=r},N.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,n=Object.create(null),i=0;i<r;i++){for(var o=N.FieldRef.fromString(t[i]),a=o.fieldName,s=this.fieldLengths[o],u=new N.Vector,l=this.fieldTermFrequencies[o],c=Object.keys(l),p=c.length,f=this._fields[a].boost||1,d=this._documents[o.docRef].boost||1,h=0;h<p;h++){var g,m,b,v=c[h],y=l[v],w=this.invertedIndex[v]._index
void 0===n[v]?(g=N.idf(this.invertedIndex[v],this.documentCount),n[v]=g):g=n[v],m=g*((this._k1+1)*y)/(this._k1*(1-this._b+this._b*(s/this.averageFieldLength[a]))+y),m*=f,m*=d,b=Math.round(1e3*m)/1e3,u.insert(w,b)}e[o]=u}this.fieldVectors=e},N.Builder.prototype.createTokenSet=function(){this.tokenSet=N.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},N.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new N.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},N.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1)
t.unshift(this),e.apply(this,t)},N.MatchData=function(e,t,r){for(var n=Object.create(null),i=Object.keys(r||{}),o=0;o<i.length;o++){var a=i[o]
n[a]=r[a].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)},N.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var n=t[r],i=Object.keys(e.metadata[n])
null==this.metadata[n]&&(this.metadata[n]=Object.create(null))
for(var o=0;o<i.length;o++){var a=i[o],s=Object.keys(e.metadata[n][a])
null==this.metadata[n][a]&&(this.metadata[n][a]=Object.create(null))
for(var u=0;u<s.length;u++){var l=s[u]
null==this.metadata[n][a][l]?this.metadata[n][a][l]=e.metadata[n][a][l]:this.metadata[n][a][l]=this.metadata[n][a][l].concat(e.metadata[n][a][l])}}}},N.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r)
if(t in this.metadata[e])for(var n=Object.keys(r),i=0;i<n.length;i++){var o=n[i]
o in this.metadata[e][t]?this.metadata[e][t][o]=this.metadata[e][t][o].concat(r[o]):this.metadata[e][t][o]=r[o]}else this.metadata[e][t]=r},N.Query=function(e){this.clauses=[],this.allFields=e},N.Query.wildcard=new String("*"),N.Query.wildcard.NONE=0,N.Query.wildcard.LEADING=1,N.Query.wildcard.TRAILING=2,N.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},N.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=N.Query.wildcard.NONE),e.wildcard&N.Query.wildcard.LEADING&&e.term.charAt(0)!=N.Query.wildcard&&(e.term="*"+e.term),e.wildcard&N.Query.wildcard.TRAILING&&e.term.slice(-1)!=N.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=N.Query.presence.OPTIONAL),this.clauses.push(e),this},N.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=N.Query.presence.PROHIBITED)return!1
return!0},N.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach((function(e){this.term(e,N.utils.clone(t))}),this),this
var r=t||{}
return r.term=e.toString(),this.clause(r),this},N.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},N.QueryParseError.prototype=new Error,N.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},N.QueryLexer.prototype.run=function(){for(var e=N.QueryLexer.lexText;e;)e=e(this)},N.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,n=0;n<this.escapeCharPositions.length;n++)r=this.escapeCharPositions[n],e.push(this.str.slice(t,r)),t=r+1
return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},N.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},N.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},N.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return N.QueryLexer.EOS
var e=this.str.charAt(this.pos)
return this.pos+=1,e},N.QueryLexer.prototype.width=function(){return this.pos-this.start},N.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},N.QueryLexer.prototype.backup=function(){this.pos-=1},N.QueryLexer.prototype.acceptDigitRun=function(){var e,t
do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58)
e!=N.QueryLexer.EOS&&this.backup()},N.QueryLexer.prototype.more=function(){return this.pos<this.length},N.QueryLexer.EOS="EOS",N.QueryLexer.FIELD="FIELD",N.QueryLexer.TERM="TERM",N.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",N.QueryLexer.BOOST="BOOST",N.QueryLexer.PRESENCE="PRESENCE",N.QueryLexer.lexField=function(e){return e.backup(),e.emit(N.QueryLexer.FIELD),e.ignore(),N.QueryLexer.lexText},N.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(N.QueryLexer.TERM)),e.ignore(),e.more())return N.QueryLexer.lexText},N.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(N.QueryLexer.EDIT_DISTANCE),N.QueryLexer.lexText},N.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(N.QueryLexer.BOOST),N.QueryLexer.lexText},N.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(N.QueryLexer.TERM)},N.QueryLexer.termSeparator=N.tokenizer.separator,N.QueryLexer.lexText=function(e){for(;;){var t=e.next()
if(t==N.QueryLexer.EOS)return N.QueryLexer.lexEOS
if(92!=t.charCodeAt(0)){if(":"==t)return N.QueryLexer.lexField
if("~"==t)return e.backup(),e.width()>0&&e.emit(N.QueryLexer.TERM),N.QueryLexer.lexEditDistance
if("^"==t)return e.backup(),e.width()>0&&e.emit(N.QueryLexer.TERM),N.QueryLexer.lexBoost
if("+"==t&&1===e.width())return e.emit(N.QueryLexer.PRESENCE),N.QueryLexer.lexText
if("-"==t&&1===e.width())return e.emit(N.QueryLexer.PRESENCE),N.QueryLexer.lexText
if(t.match(N.QueryLexer.termSeparator))return N.QueryLexer.lexTerm}else e.escapeCharacter()}},N.QueryParser=function(e,t){this.lexer=new N.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},N.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes
for(var e=N.QueryParser.parseClause;e;)e=e(this)
return this.query},N.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},N.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme()
return this.lexemeIdx+=1,e},N.QueryParser.prototype.nextClause=function(){var e=this.currentClause
this.query.clause(e),this.currentClause={}},N.QueryParser.parseClause=function(e){var t=e.peekLexeme()
if(null!=t)switch(t.type){case N.QueryLexer.PRESENCE:return N.QueryParser.parsePresence
case N.QueryLexer.FIELD:return N.QueryParser.parseField
case N.QueryLexer.TERM:return N.QueryParser.parseTerm
default:var r="expected either a field or a term, found "+t.type
throw t.str.length>=1&&(r+=" with value '"+t.str+"'"),new N.QueryParseError(r,t.start,t.end)}},N.QueryParser.parsePresence=function(e){var t=e.consumeLexeme()
if(null!=t){switch(t.str){case"-":e.currentClause.presence=N.Query.presence.PROHIBITED
break
case"+":e.currentClause.presence=N.Query.presence.REQUIRED
break
default:var r="unrecognised presence operator'"+t.str+"'"
throw new N.QueryParseError(r,t.start,t.end)}var n=e.peekLexeme()
if(null==n)throw r="expecting term or field, found nothing",new N.QueryParseError(r,t.start,t.end)
switch(n.type){case N.QueryLexer.FIELD:return N.QueryParser.parseField
case N.QueryLexer.TERM:return N.QueryParser.parseTerm
default:throw r="expecting term or field, found '"+n.type+"'",new N.QueryParseError(r,n.start,n.end)}}},N.QueryParser.parseField=function(e){var t=e.consumeLexeme()
if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map((function(e){return"'"+e+"'"})).join(", "),n="unrecognised field '"+t.str+"', possible fields: "+r
throw new N.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str]
var i=e.peekLexeme()
if(null==i)throw n="expecting term, found nothing",new N.QueryParseError(n,t.start,t.end)
if(i.type===N.QueryLexer.TERM)return N.QueryParser.parseTerm
throw n="expecting term, found '"+i.type+"'",new N.QueryParseError(n,i.start,i.end)}},N.QueryParser.parseTerm=function(e){var t=e.consumeLexeme()
if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1)
var r=e.peekLexeme()
if(null!=r)switch(r.type){case N.QueryLexer.TERM:return e.nextClause(),N.QueryParser.parseTerm
case N.QueryLexer.FIELD:return e.nextClause(),N.QueryParser.parseField
case N.QueryLexer.EDIT_DISTANCE:return N.QueryParser.parseEditDistance
case N.QueryLexer.BOOST:return N.QueryParser.parseBoost
case N.QueryLexer.PRESENCE:return e.nextClause(),N.QueryParser.parsePresence
default:var n="Unexpected lexeme type '"+r.type+"'"
throw new N.QueryParseError(n,r.start,r.end)}else e.nextClause()}},N.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme()
if(null!=t){var r=parseInt(t.str,10)
if(isNaN(r)){var n="edit distance must be numeric"
throw new N.QueryParseError(n,t.start,t.end)}e.currentClause.editDistance=r
var i=e.peekLexeme()
if(null!=i)switch(i.type){case N.QueryLexer.TERM:return e.nextClause(),N.QueryParser.parseTerm
case N.QueryLexer.FIELD:return e.nextClause(),N.QueryParser.parseField
case N.QueryLexer.EDIT_DISTANCE:return N.QueryParser.parseEditDistance
case N.QueryLexer.BOOST:return N.QueryParser.parseBoost
case N.QueryLexer.PRESENCE:return e.nextClause(),N.QueryParser.parsePresence
default:throw n="Unexpected lexeme type '"+i.type+"'",new N.QueryParseError(n,i.start,i.end)}else e.nextClause()}},N.QueryParser.parseBoost=function(e){var t=e.consumeLexeme()
if(null!=t){var r=parseInt(t.str,10)
if(isNaN(r)){var n="boost must be numeric"
throw new N.QueryParseError(n,t.start,t.end)}e.currentClause.boost=r
var i=e.peekLexeme()
if(null!=i)switch(i.type){case N.QueryLexer.TERM:return e.nextClause(),N.QueryParser.parseTerm
case N.QueryLexer.FIELD:return e.nextClause(),N.QueryParser.parseField
case N.QueryLexer.EDIT_DISTANCE:return N.QueryParser.parseEditDistance
case N.QueryLexer.BOOST:return N.QueryParser.parseBoost
case N.QueryLexer.PRESENCE:return e.nextClause(),N.QueryParser.parsePresence
default:throw n="Unexpected lexeme type '"+i.type+"'",new N.QueryParseError(n,i.start,i.end)}else e.nextClause()}},void 0===(i="function"==typeof(n=function(){return N})?n.call(t,r,t,e):n)||(e.exports=i)}()},7016:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e[e.length-1]}},6906:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.NodeType=t.TextNode=t.Node=t.valid=t.default=t.parse=t.HTMLElement=t.CommentNode=void 0
var i=r(8893)
Object.defineProperty(t,"CommentNode",{enumerable:!0,get:function(){return n(i).default}})
var o=r(9191)
Object.defineProperty(t,"HTMLElement",{enumerable:!0,get:function(){return n(o).default}})
var a=r(4074)
Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return n(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(a).default}})
var s=r(9083)
Object.defineProperty(t,"valid",{enumerable:!0,get:function(){return n(s).default}})
var u=r(6222)
Object.defineProperty(t,"Node",{enumerable:!0,get:function(){return n(u).default}})
var l=r(8623)
Object.defineProperty(t,"TextNode",{enumerable:!0,get:function(){return n(l).default}})
var c=r(5166)
Object.defineProperty(t,"NodeType",{enumerable:!0,get:function(){return n(c).default}})},4952:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(r(5166))
function o(e){return e&&e.nodeType===i.default.ELEMENT_NODE}function a(e,t){return o(e)?e.getAttribute(t):void 0}function s(e){return e&&e.childNodes}function u(e){return e?e.parentNode:null}t.default={isTag:o,getAttributeValue:a,getName:function(e){return(e&&e.rawTagName||"").toLowerCase()},getChildren:s,getParent:u,getText:function(e){return e.text},removeSubsets:function(e){for(var t,r,n,i=e.length;--i>-1;){for(t=r=e[i],e[i]=null,n=!0;r;){if(e.indexOf(r)>-1){n=!1,e.splice(i,1)
break}r=u(r)}n&&(e[i]=t)}return e},existsOne:function e(t,r){return r.some((function(r){return!!o(r)&&(t(r)||e(t,s(r)))}))},getSiblings:function(e){var t=u(e)
return t&&s(t)},hasAttrib:function(e,t){return void 0!==a(e,t)},findOne:function e(t,r){for(var n=null,i=0,o=r.length;i<o&&!n;i++){var a=r[i]
if(t(a))n=a
else{var u=s(a)
u&&u.length>0&&(n=e(t,u))}}return n},findAll:function e(t,r){for(var n=[],i=0,a=r.length;i<a;i++)if(o(r[i])){t(r[i])&&n.push(r[i])
var u=s(r[i])
u&&(n=n.concat(e(t,u)))}return n}}},8893:function(e,t,r){"use strict"
var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var a=o(r(6222)),s=o(r(5166)),u=function(e){function t(t,r,n){var i=e.call(this,r,n)||this
return i.rawText=t,i.nodeType=s.default.COMMENT_NODE,i}return i(t,e),t.prototype.clone=function(){return new t(this.rawText,null)},Object.defineProperty(t.prototype,"text",{get:function(){return this.rawText},enumerable:!1,configurable:!0}),t.prototype.toString=function(){return"\x3c!--".concat(this.rawText,"--\x3e")},t}(a.default)
t.default=u},9191:function(e,t,r){"use strict"
var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)},a=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i])
return e.concat(n||Array.prototype.slice.call(t))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.parse=t.base_parse=void 0
var u=r(7133),l=s(r(39)),c=s(r(7016)),p=s(r(4952)),f=s(r(8893)),d=s(r(6222)),h=s(r(8623)),g=s(r(5166)),m=new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"])
function b(e){return JSON.parse(JSON.stringify(l.default.decode(e)))}var v=new Set
!function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=function(e){for(var t=0;t<e.length;t++){var r=e[t]
v.add(r),v.add(r.toUpperCase())}},n=0,i=e;n<i.length;n++){var o=i[n]
r(o)}}(["h1","h2","h3","h4","h5","h6","header","hgroup"],["details","dialog","dd","div","dt"],["fieldset","figcaption","figure","footer","form"],["table","td","tr"],["address","article","aside","blockquote","br","hr","li","main","nav","ol","p","pre","section","ul"])
var y=function(){function e(e,t){void 0===e&&(e=[]),void 0===t&&(t=function(){return null}),this._set=new Set(e),this._afterUpdate=t}return e.prototype._validate=function(e){if(/\s/.test(e))throw new Error("DOMException in DOMTokenList.add: The token '".concat(e,"' contains HTML space characters, which are not valid in tokens."))},e.prototype.add=function(e){this._validate(e),this._set.add(e),this._afterUpdate(this)},e.prototype.replace=function(e,t){this._validate(t),this._set.delete(e),this._set.add(t),this._afterUpdate(this)},e.prototype.remove=function(e){this._set.delete(e)&&this._afterUpdate(this)},e.prototype.toggle=function(e){this._validate(e),this._set.has(e)?this._set.delete(e):this._set.add(e),this._afterUpdate(this)},e.prototype.contains=function(e){return this._set.has(e)},Object.defineProperty(e.prototype,"length",{get:function(){return this._set.size},enumerable:!1,configurable:!0}),e.prototype.values=function(){return this._set.values()},Object.defineProperty(e.prototype,"value",{get:function(){return Array.from(this._set.values())},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return Array.from(this._set.values()).join(" ")},e}(),w=function(e){function t(t,r,n,i,o){void 0===n&&(n="")
var a=e.call(this,i,o)||this
if(a.rawAttrs=n,a.nodeType=g.default.ELEMENT_NODE,a.rawTagName=t,a.rawAttrs=n||"",a.id=r.id||"",a.childNodes=[],a.classList=new y(r.class?r.class.split(/\s+/):[],(function(e){return a.setAttribute("class",e.toString())})),r.id&&(n||(a.rawAttrs='id="'.concat(r.id,'"'))),r.class&&!n){var s='class="'.concat(a.classList.toString(),'"')
a.rawAttrs?a.rawAttrs+=" ".concat(s):a.rawAttrs=s}return a}return i(t,e),t.prototype.quoteAttribute=function(e){return null==e?"null":JSON.stringify(e.replace(/"/g,"&quot;"))},t.prototype.removeChild=function(e){return this.childNodes=this.childNodes.filter((function(t){return t!==e})),this},t.prototype.exchangeChild=function(e,t){var r=this.childNodes
return this.childNodes=r.map((function(r){return r===e?t:r})),this},Object.defineProperty(t.prototype,"tagName",{get:function(){return this.rawTagName?this.rawTagName.toUpperCase():this.rawTagName},set:function(e){this.rawTagName=e.toLowerCase()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"localName",{get:function(){return this.rawTagName.toLowerCase()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isVoidElement",{get:function(){return m.has(this.localName)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rawText",{get:function(){return this.childNodes.reduce((function(e,t){return e+t.rawText}),"")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"textContent",{get:function(){return b(this.rawText)},set:function(e){var t=[new h.default(e,this)]
this.childNodes=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"text",{get:function(){return b(this.rawText)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"structuredText",{get:function(){var e=[],t=[e]
return function r(n){if(n.nodeType===g.default.ELEMENT_NODE)v.has(n.rawTagName)?(e.length>0&&t.push(e=[]),n.childNodes.forEach(r),e.length>0&&t.push(e=[])):n.childNodes.forEach(r)
else if(n.nodeType===g.default.TEXT_NODE)if(n.isWhitespace)e.prependWhitespace=!0
else{var i=n.trimmedText
e.prependWhitespace&&(i=" ".concat(i),e.prependWhitespace=!1),e.push(i)}}(this),t.map((function(e){return e.join("").replace(/\s{2,}/g," ")})).join("\n").replace(/\s+$/,"")},enumerable:!1,configurable:!0}),t.prototype.toString=function(){var e=this.rawTagName
if(e){var t=this.rawAttrs?" ".concat(this.rawAttrs):""
return this.isVoidElement?"<".concat(e).concat(t,">"):"<".concat(e).concat(t,">").concat(this.innerHTML,"</").concat(e,">")}return this.innerHTML},Object.defineProperty(t.prototype,"innerHTML",{get:function(){return this.childNodes.map((function(e){return e.toString()})).join("")},set:function(e){var t=S(e),r=t.childNodes.length?t.childNodes:[new h.default(e,this)]
T(r,this),T(this.childNodes,null),this.childNodes=r},enumerable:!1,configurable:!0}),t.prototype.set_content=function(e,t){if(void 0===t&&(t={}),e instanceof d.default)e=[e]
else if("string"==typeof e){var r=S(e,t)
e=r.childNodes.length?r.childNodes:[new h.default(e,this)]}return T(this.childNodes,null),T(e,this),this.childNodes=e,this},t.prototype.replaceWith=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
var n=this.parentNode,i=t.map((function(t){if(t instanceof d.default)return[t]
if("string"==typeof t){var r=S(t)
return r.childNodes.length?r.childNodes:[new h.default(t,e)]}return[]})).flat(),o=n.childNodes.findIndex((function(t){return t===e}))
T([this],null),n.childNodes=a(a(a([],n.childNodes.slice(0,o),!0),T(i,n),!0),n.childNodes.slice(o+1),!0)},Object.defineProperty(t.prototype,"outerHTML",{get:function(){return this.toString()},enumerable:!1,configurable:!0}),t.prototype.trimRight=function(e){for(var t=0;t<this.childNodes.length;t++){var r=this.childNodes[t]
if(r.nodeType===g.default.ELEMENT_NODE)r.trimRight(e)
else{var n=r.rawText.search(e)
n>-1&&(r.rawText=r.rawText.substr(0,n),this.childNodes.length=t+1)}}return this},Object.defineProperty(t.prototype,"structure",{get:function(){var e=[],t=0
function r(r){e.push("  ".repeat(t)+r)}return function e(n){var i=n.id?"#".concat(n.id):"",o=n.classList.length?".".concat(n.classList.value.join(".")):""
r("".concat(n.rawTagName).concat(i).concat(o)),t++,n.childNodes.forEach((function(t){t.nodeType===g.default.ELEMENT_NODE?e(t):t.nodeType===g.default.TEXT_NODE&&(t.isWhitespace||r("#text"))})),t--}(this),e.join("\n")},enumerable:!1,configurable:!0}),t.prototype.removeWhitespace=function(){var e=this,t=0
return this.childNodes.forEach((function(r){if(r.nodeType===g.default.TEXT_NODE){if(r.isWhitespace)return
r.rawText=r.trimmedRawText}else r.nodeType===g.default.ELEMENT_NODE&&r.removeWhitespace()
e.childNodes[t++]=r})),this.childNodes.length=t,this},t.prototype.querySelectorAll=function(e){return(0,u.selectAll)(e,this,{xmlMode:!0,adapter:p.default})},t.prototype.querySelector=function(e){return(0,u.selectOne)(e,this,{xmlMode:!0,adapter:p.default})},t.prototype.getElementsByTagName=function(e){for(var t=e.toUpperCase(),r=[],n=[],i=this,o=0;void 0!==o;){var a=void 0
do{a=i.childNodes[o++]}while(o<i.childNodes.length&&void 0===a)
void 0!==a?a.nodeType===g.default.ELEMENT_NODE&&("*"!==e&&a.tagName!==t||r.push(a),a.childNodes.length>0&&(n.push(o),i=a,o=0)):(i=i.parentNode,o=n.pop())}return r},t.prototype.getElementById=function(e){for(var t=[],r=this,n=0;void 0!==n;){var i=void 0
do{i=r.childNodes[n++]}while(n<r.childNodes.length&&void 0===i)
if(void 0!==i){if(i.nodeType===g.default.ELEMENT_NODE){if(i.id===e)return i
i.childNodes.length>0&&(t.push(n),r=i,n=0)}}else r=r.parentNode,n=t.pop()}return null},t.prototype.closest=function(e){var t=new Map,r=this,n=null
function i(e,r){for(var n=null,o=0,a=r.length;o<a&&!n;o++){var s=r[o]
if(e(s))n=s
else{var u=t.get(s)
u&&(n=i(e,[u]))}}return n}for(;r;)t.set(r,n),n=r,r=r.parentNode
for(r=this;r;){var a=(0,u.selectOne)(e,r,{xmlMode:!0,adapter:o(o({},p.default),{getChildren:function(e){var r=t.get(e)
return r&&[r]},getSiblings:function(e){return[e]},findOne:i,findAll:function(){return[]}})})
if(a)return a
r=r.parentNode}return null},t.prototype.appendChild=function(e){return e.remove(),this.childNodes.push(e),e.parentNode=this,e},Object.defineProperty(t.prototype,"firstChild",{get:function(){return this.childNodes[0]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return(0,c.default)(this.childNodes)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attrs",{get:function(){if(this._attrs)return this._attrs
this._attrs={}
var e=this.rawAttributes
for(var t in e){var r=e[t]||""
this._attrs[t.toLowerCase()]=b(r)}return this._attrs},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e={},t=this.rawAttributes
for(var r in t){var n=t[r]||""
e[r]=b(n)}return e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rawAttributes",{get:function(){if(this._rawAttrs)return this._rawAttrs
var e={}
if(this.rawAttrs)for(var t=/([a-zA-Z()#][a-zA-Z0-9-_:()#]*)(?:\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+))?/g,r=void 0;r=t.exec(this.rawAttrs);){var n=r[1],i=r[2]||null
!i||"'"!==i[0]&&'"'!==i[0]||(i=i.slice(1,i.length-1)),e[n]=i}return this._rawAttrs=e,e},enumerable:!1,configurable:!0}),t.prototype.removeAttribute=function(e){var t=this.rawAttributes
return delete t[e],this._attrs&&delete this._attrs[e],this.rawAttrs=Object.keys(t).map((function(e){var r=JSON.stringify(t[e])
return void 0===r||"null"===r?e:"".concat(e,"=").concat(r)})).join(" "),"id"===e&&(this.id=""),this},t.prototype.hasAttribute=function(e){return e.toLowerCase()in this.attrs},t.prototype.getAttribute=function(e){return this.attrs[e.toLowerCase()]},t.prototype.setAttribute=function(e,t){var r=this
if(arguments.length<2)throw new Error("Failed to execute 'setAttribute' on 'Element'")
var n=e.toLowerCase(),i=this.rawAttributes
for(var o in i)if(o.toLowerCase()===n){e=o
break}i[e]=String(t),this._attrs&&(this._attrs[n]=b(i[e])),this.rawAttrs=Object.keys(i).map((function(e){var t=r.quoteAttribute(i[e])
return"null"===t||'""'===t?e:"".concat(e,"=").concat(t)})).join(" "),"id"===e&&(this.id=t)},t.prototype.setAttributes=function(e){var t=this
return this._attrs&&delete this._attrs,this._rawAttrs&&delete this._rawAttrs,this.rawAttrs=Object.keys(e).map((function(r){var n=e[r]
return"null"===n||'""'===n?r:"".concat(r,"=").concat(t.quoteAttribute(String(n)))})).join(" "),this},t.prototype.insertAdjacentHTML=function(e,t){var r,n,i,o=this
if(arguments.length<2)throw new Error("2 arguments required")
var s=S(t)
if("afterend"===e){var u=this.parentNode.childNodes.findIndex((function(e){return e===o}))
T(s.childNodes,this.parentNode),(r=this.parentNode.childNodes).splice.apply(r,a([u+1,0],s.childNodes,!1))}else if("afterbegin"===e)T(s.childNodes,this),(n=this.childNodes).unshift.apply(n,s.childNodes)
else if("beforeend"===e)s.childNodes.forEach((function(e){o.appendChild(e)}))
else{if("beforebegin"!==e)throw new Error("The value provided ('".concat(e,"') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'"))
u=this.parentNode.childNodes.findIndex((function(e){return e===o})),T(s.childNodes,this.parentNode),(i=this.parentNode.childNodes).splice.apply(i,a([u,0],s.childNodes,!1))}return this},Object.defineProperty(t.prototype,"nextSibling",{get:function(){if(this.parentNode){for(var e=this.parentNode.childNodes,t=0;t<e.length;)if(this===e[t++])return e[t]||null
return null}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nextElementSibling",{get:function(){if(this.parentNode){for(var e=this.parentNode.childNodes,r=0,n=!1;r<e.length;){var i=e[r++]
if(n){if(i instanceof t)return i||null}else this===i&&(n=!0)}return null}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"previousSibling",{get:function(){if(this.parentNode){for(var e=this.parentNode.childNodes,t=e.length;t>0;)if(this===e[--t])return e[t-1]||null
return null}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"previousElementSibling",{get:function(){if(this.parentNode){for(var e=this.parentNode.childNodes,r=e.length,n=!1;r>0;){var i=e[--r]
if(n){if(i instanceof t)return i||null}else this===i&&(n=!0)}return null}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"classNames",{get:function(){return this.classList.toString()},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return S(this.toString()).firstChild},t}(d.default)
t.default=w
var D=/<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g,E=/(?:^|\s)(id|class)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi,x={area:!0,AREA:!0,base:!0,BASE:!0,br:!0,BR:!0,col:!0,COL:!0,hr:!0,HR:!0,img:!0,IMG:!0,input:!0,INPUT:!0,link:!0,LINK:!0,meta:!0,META:!0,source:!0,SOURCE:!0,embed:!0,EMBED:!0,param:!0,PARAM:!0,track:!0,TRACK:!0,wbr:!0,WBR:!0},A={li:{li:!0,LI:!0},LI:{li:!0,LI:!0},p:{p:!0,div:!0,P:!0,DIV:!0},P:{p:!0,div:!0,P:!0,DIV:!0},b:{div:!0,DIV:!0},B:{div:!0,DIV:!0},td:{td:!0,th:!0,TD:!0,TH:!0},TD:{td:!0,th:!0,TD:!0,TH:!0},th:{td:!0,th:!0,TD:!0,TH:!0},TH:{td:!0,th:!0,TD:!0,TH:!0},h1:{h1:!0,H1:!0},H1:{h1:!0,H1:!0},h2:{h2:!0,H2:!0},H2:{h2:!0,H2:!0},h3:{h3:!0,H3:!0},H3:{h3:!0,H3:!0},h4:{h4:!0,H4:!0},H4:{h4:!0,H4:!0},h5:{h5:!0,H5:!0},H5:{h5:!0,H5:!0},h6:{h6:!0,H6:!0},H6:{h6:!0,H6:!0}},k={li:{ul:!0,ol:!0,UL:!0,OL:!0},LI:{ul:!0,ol:!0,UL:!0,OL:!0},a:{div:!0,DIV:!0},A:{div:!0,DIV:!0},b:{div:!0,DIV:!0},B:{div:!0,DIV:!0},i:{div:!0,DIV:!0},I:{div:!0,DIV:!0},p:{div:!0,DIV:!0},P:{div:!0,DIV:!0},td:{tr:!0,table:!0,TR:!0,TABLE:!0},TD:{tr:!0,table:!0,TR:!0,TABLE:!0},th:{tr:!0,table:!0,TR:!0,TABLE:!0},TH:{tr:!0,table:!0,TR:!0,TABLE:!0}},_="documentfragmentcontainer"
function C(e,t){void 0===t&&(t={lowerCaseTagName:!1,comment:!1})
var r=t.blockTextElements||{script:!0,noscript:!0,style:!0,pre:!0},n=Object.keys(r),i=n.map((function(e){return new RegExp("^".concat(e,"$"),"i")})),o=n.filter((function(e){return r[e]})).map((function(e){return new RegExp("^".concat(e,"$"),"i")}))
function a(e){return o.some((function(t){return t.test(e)}))}function s(e){return i.some((function(t){return t.test(e)}))}var u,l=function(e,t){return[e-C,t-C]},p=new w(null,{},"",null,[0,e.length]),d=p,g=[p],m=-1,b=void 0
e="<".concat(_,">").concat(e,"</").concat(_,">")
for(var v=t.lowerCaseTagName,y=e.length-(_.length+2),C=_.length+2;u=D.exec(e);){var S=u[0],T=u[1],N=u[2],O=u[3],F=u[4],L=S.length,q=D.lastIndex-L,B=D.lastIndex
if(m>-1&&m+L<B){var R=e.substring(m,q)
d.appendChild(new h.default(R,d,l(m,q)))}if(m=D.lastIndex,N!==_)if("!"!==S[1]){if(v&&(N=N.toLowerCase()),!T){for(var P={},I=void 0;I=E.exec(O);){var j=I[1],M=I[2],U="'"===M[0]||'"'===M[0]
P[j.toLowerCase()]=U?M.slice(1,M.length-1):M}var z=d.rawTagName
!F&&A[z]&&A[z][N]&&(g.pop(),d=(0,c.default)(g)),"a"!==N&&"A"!==N||(void 0!==b&&(g.splice(b),d=(0,c.default)(g)),b=g.length)
var H=D.lastIndex,V=H-L
if(d=d.appendChild(new w(N,P,O.slice(1),null,l(V,H))),g.push(d),s(N)){var $="</".concat(N,">"),G=v?e.toLocaleLowerCase().indexOf($,D.lastIndex):e.indexOf($,D.lastIndex),Q=-1===G?y:G
a(N)&&(R=e.substring(H,Q)).length>0&&/\S/.test(R)&&d.appendChild(new h.default(R,d,l(H,Q))),-1===G?m=D.lastIndex=e.length+1:(m=D.lastIndex=G+$.length,T="/")}}if(T||F||x[N])for(;;){if("a"!==N&&"A"!==N||(b=void 0),d.rawTagName===N){d.range[1]=l(-1,Math.max(m,B))[1],g.pop(),d=(0,c.default)(g)
break}if(z=d.tagName,!k[z]||!k[z][N])break
g.pop(),d=(0,c.default)(g)}}else t.comment&&(R=e.substring(q+4,B-3),d.appendChild(new f.default(R,d,l(q,B))))}return g}function S(e,t){void 0===t&&(t={lowerCaseTagName:!1,comment:!1})
for(var r=C(e,t),n=r[0],i=function(){var e=r.pop(),n=(0,c.default)(r)
e.parentNode&&e.parentNode.parentNode&&(e.parentNode===n&&e.tagName===n.tagName?!0!==t.parseNoneClosedTags&&(n.removeChild(e),e.childNodes.forEach((function(e){n.parentNode.appendChild(e)})),r.pop()):!0!==t.parseNoneClosedTags&&(n.removeChild(e),e.childNodes.forEach((function(e){n.appendChild(e)}))))};r.length>1;)i()
return n}function T(e,t){return e.map((function(e){return e.parentNode=t,e}))}t.base_parse=C,t.parse=S},6222:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=r(39),i=function(){function e(e,t){void 0===e&&(e=null),this.parentNode=e,this.childNodes=[],Object.defineProperty(this,"range",{enumerable:!1,writable:!0,configurable:!0,value:null!=t?t:[-1,-1]})}return e.prototype.remove=function(){var e=this
if(this.parentNode){var t=this.parentNode.childNodes
this.parentNode.childNodes=t.filter((function(t){return e!==t})),this.parentNode=null}return this},Object.defineProperty(e.prototype,"innerText",{get:function(){return this.rawText},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textContent",{get:function(){return(0,n.decode)(this.rawText)},set:function(e){this.rawText=(0,n.encode)(e)},enumerable:!1,configurable:!0}),e}()
t.default=i},8623:function(e,t,r){"use strict"
var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var a=r(39),s=o(r(6222)),u=o(r(5166)),l=function(e){function t(t,r,n){var i=e.call(this,r,n)||this
return i.nodeType=u.default.TEXT_NODE,i._rawText=t,i}return i(t,e),t.prototype.clone=function(){return new t(this._rawText,null)},Object.defineProperty(t.prototype,"rawText",{get:function(){return this._rawText},set:function(e){this._rawText=e,this._trimmedRawText=void 0,this._trimmedText=void 0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"trimmedRawText",{get:function(){return void 0!==this._trimmedRawText||(this._trimmedRawText=c(this.rawText)),this._trimmedRawText},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"trimmedText",{get:function(){return void 0!==this._trimmedText||(this._trimmedText=c(this.text)),this._trimmedText},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"text",{get:function(){return(0,a.decode)(this.rawText)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isWhitespace",{get:function(){return/^(\s|&nbsp;)*$/.test(this.rawText)},enumerable:!1,configurable:!0}),t.prototype.toString=function(){return this.rawText},t}(s.default)
function c(e){for(var t,r,n=0;n>=0&&n<e.length;)/\S/.test(e[n])&&(void 0===t?(t=n,n=e.length):(r=n,n=void 0)),void 0===t?n++:n--
void 0===t&&(t=0),void 0===r&&(r=e.length-1)
var i=t>0&&/[^\S\r\n]/.test(e[t-1]),o=r<e.length-1&&/[^\S\r\n]/.test(e[r+1])
return(i?" ":"")+e.slice(t,r+1)+(o?" ":"")}t.default=l},5166:(e,t)=>{"use strict"
var r
Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ELEMENT_NODE=1]="ELEMENT_NODE",e[e.TEXT_NODE=3]="TEXT_NODE",e[e.COMMENT_NODE=8]="COMMENT_NODE"}(r||(r={})),t.default=r},4074:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=r(9191)
Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.parse}})},9083:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=r(9191)
t.default=function(e,t){void 0===t&&(t={lowerCaseTagName:!1,comment:!1})
var r=(0,n.base_parse)(e,t)
return Boolean(1===r.length)}},2158:function(e,t){var r,n
r=function(){"use strict"
var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()
function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=void 0
void 0===r&&(r={modules:[]})
var n=null
function i(e){var t=e.getBoundingClientRect(),r={}
for(var n in t)r[n]=t[n]
try{if(e.ownerDocument!==document){var o=e.ownerDocument.defaultView.frameElement
if(o){var a=i(o)
r.top+=a.top,r.bottom+=a.top,r.left+=a.left,r.right+=a.left}}}catch(e){}return r}function o(e){var t=(getComputedStyle(e)||{}).position,r=[]
if("fixed"===t)return[e]
for(var n=e;(n=n.parentNode)&&n&&1===n.nodeType;){var i=void 0
try{i=getComputedStyle(n)}catch(e){}if(null==i)return r.push(n),r
var o=i,a=o.overflow,s=o.overflowX,u=o.overflowY;/(auto|scroll|overlay)/.test(a+u+s)&&("absolute"!==t||["relative","absolute","fixed"].indexOf(i.position)>=0)&&r.push(n)}return r.push(e.ownerDocument.body),e.ownerDocument!==document&&r.push(e.ownerDocument.defaultView),r}var a,s=(a=0,function(){return++a}),u={}
function l(){n&&document.body.removeChild(n),n=null}function c(e){var t=void 0
e===document?(t=document,e=document.documentElement):t=e.ownerDocument
var r=t.documentElement,o=i(e),a=function(){var e=n
e&&document.body.contains(e)||((e=document.createElement("div")).setAttribute("data-tether-id",s()),h(e.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(e),n=e)
var t=e.getAttribute("data-tether-id")
return void 0===u[t]&&(u[t]=i(e),E((function(){delete u[t]}))),u[t]}()
return o.top-=a.top,o.left-=a.left,void 0===o.width&&(o.width=document.body.scrollWidth-o.left-o.right),void 0===o.height&&(o.height=document.body.scrollHeight-o.top-o.bottom),o.top=o.top-r.clientTop,o.left=o.left-r.clientLeft,o.right=t.body.clientWidth-o.width-o.left,o.bottom=t.body.clientHeight-o.height-o.top,o}function p(e){return e.offsetParent||document.documentElement}var f=null
function d(){if(f)return f
var e=document.createElement("div")
e.style.width="100%",e.style.height="200px"
var t=document.createElement("div")
h(t.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t)
var r=e.offsetWidth
t.style.overflow="scroll"
var n=e.offsetWidth
r===n&&(n=t.clientWidth),document.body.removeChild(t)
var i=r-n
return f={width:i,height:i}}function h(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=[]
return Array.prototype.push.apply(t,arguments),t.slice(1).forEach((function(t){if(t)for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])})),e}function g(e,t){if(void 0!==e.classList)t.split(" ").forEach((function(t){t.trim()&&e.classList.remove(t)}))
else{var r=new RegExp("(^| )"+t.split(" ").join("|")+"( |$)","gi"),n=v(e).replace(r," ")
y(e,n)}}function m(e,t){if(void 0!==e.classList)t.split(" ").forEach((function(t){t.trim()&&e.classList.add(t)}))
else{g(e,t)
var r=v(e)+" "+t
y(e,r)}}function b(e,t){if(void 0!==e.classList)return e.classList.contains(t)
var r=v(e)
return new RegExp("(^| )"+t+"( |$)","gi").test(r)}function v(e){return e.className instanceof e.ownerDocument.defaultView.SVGAnimatedString?e.className.baseVal:e.className}function y(e,t){e.setAttribute("class",t)}function w(e,t,r){r.forEach((function(r){-1===t.indexOf(r)&&b(e,r)&&g(e,r)})),t.forEach((function(t){b(e,t)||m(e,t)}))}var D=[],E=function(e){D.push(e)},x=function(){for(var e=void 0;e=D.pop();)e()},A=function(){function r(){t(this,r)}return e(r,[{key:"on",value:function(e,t,r){var n=!(arguments.length<=3||void 0===arguments[3])&&arguments[3]
void 0===this.bindings&&(this.bindings={}),void 0===this.bindings[e]&&(this.bindings[e]=[]),this.bindings[e].push({handler:t,ctx:r,once:n})}},{key:"once",value:function(e,t,r){this.on(e,t,r,!0)}},{key:"off",value:function(e,t){if(void 0!==this.bindings&&void 0!==this.bindings[e])if(void 0===t)delete this.bindings[e]
else for(var r=0;r<this.bindings[e].length;)this.bindings[e][r].handler===t?this.bindings[e].splice(r,1):++r}},{key:"trigger",value:function(e){if(void 0!==this.bindings&&this.bindings[e]){for(var t=0,r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i]
for(;t<this.bindings[e].length;){var o=this.bindings[e][t],a=o.handler,s=o.ctx,u=o.once,l=s
void 0===l&&(l=this),a.apply(l,n),u?this.bindings[e].splice(t,1):++t}}}}]),r}()
r.Utils={getActualBoundingClientRect:i,getScrollParents:o,getBounds:c,getOffsetParent:p,extend:h,addClass:m,removeClass:g,hasClass:b,updateClasses:w,defer:E,flush:x,uniqueId:s,Evented:A,getScrollBarSize:d,removeUtilElements:l}
var k=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0
try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")},_=(e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),function(e,t,r){for(var n=!0;n;){var i=e,o=t,a=r
n=!1,null===i&&(i=Function.prototype)
var s=Object.getOwnPropertyDescriptor(i,o)
if(void 0!==s){if("value"in s)return s.value
var u=s.get
if(void 0===u)return
return u.call(a)}var l=Object.getPrototypeOf(i)
if(null===l)return
e=l,t=o,r=a,n=!0,s=l=void 0}})
function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}if(void 0===r)throw new Error("You must include the utils.js file before tether.js")
var o=(Z=r.Utils).getScrollParents,p=(c=Z.getBounds,Z.getOffsetParent),m=(h=Z.extend,Z.addClass),g=Z.removeClass,d=(w=Z.updateClasses,E=Z.defer,x=Z.flush,Z.getScrollBarSize),l=Z.removeUtilElements
function C(e,t){var r=arguments.length<=2||void 0===arguments[2]?1:arguments[2]
return e+r>=t&&t>=e-r}var S,T,N,O,F=function(){if("undefined"==typeof document)return""
for(var e=document.createElement("div"),t=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],r=0;r<t.length;++r){var n=t[r]
if(void 0!==e.style[n])return n}}(),L=[],q=function(){L.forEach((function(e){e.position(!1)})),x()}
function B(){return"object"==typeof performance&&"function"==typeof performance.now?performance.now():+new Date}S=null,T=null,N=null,O=function e(){if(void 0!==T&&T>16)return T=Math.min(T-16,250),void(N=setTimeout(e,250))
void 0!==S&&B()-S<10||(null!=N&&(clearTimeout(N),N=null),S=B(),q(),T=B()-S)},"undefined"!=typeof window&&void 0!==window.addEventListener&&["resize","scroll","touchmove"].forEach((function(e){window.addEventListener(e,O)}))
var R={center:"center",left:"right",right:"left"},P={middle:"middle",top:"bottom",bottom:"top"},I={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},j=function(e,t){var r=e.left,n=e.top
return"auto"===r&&(r=R[t.left]),"auto"===n&&(n=P[t.top]),{left:r,top:n}},M=function(e){var t=e.left,r=e.top
return void 0!==I[e.left]&&(t=I[e.left]),void 0!==I[e.top]&&(r=I[e.top]),{left:t,top:r}}
function U(){for(var e={top:0,left:0},t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n]
return r.forEach((function(t){var r=t.top,n=t.left
"string"==typeof r&&(r=parseFloat(r,10)),"string"==typeof n&&(n=parseFloat(n,10)),e.top+=r,e.left+=n})),e}function z(e,t){return"string"==typeof e.left&&-1!==e.left.indexOf("%")&&(e.left=parseFloat(e.left,10)/100*t.width),"string"==typeof e.top&&-1!==e.top.indexOf("%")&&(e.top=parseFloat(e.top,10)/100*t.height),e}var H=function(e){var t=e.split(" "),r=k(t,2)
return{top:r[0],left:r[1]}},V=H,$=function(n){function i(e){var n=this
t(this,i),_(Object.getPrototypeOf(i.prototype),"constructor",this).call(this),this.position=this.position.bind(this),L.push(this),this.history=[],this.setOptions(e,!1),r.modules.forEach((function(e){void 0!==e.initialize&&e.initialize.call(n)})),this.position()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,n),e(i,[{key:"getClass",value:function(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=this.options.classes
return void 0!==t&&t[e]?this.options.classes[e]:this.options.classPrefix?this.options.classPrefix+"-"+e:e}},{key:"setOptions",value:function(e){var t=this,r=arguments.length<=1||void 0===arguments[1]||arguments[1],n={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"}
this.options=h(n,e)
var i=this.options,a=i.element,s=i.target,u=i.targetModifier
if(this.element=a,this.target=s,this.targetModifier=u,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach((function(e){if(void 0===t[e])throw new Error("Tether Error: Both element and target must be defined")
void 0!==t[e].jquery?t[e]=t[e][0]:"string"==typeof t[e]&&(t[e]=document.querySelector(t[e]))})),m(this.element,this.getClass("element")),!1!==this.options.addTargetClasses&&m(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment")
this.targetAttachment=V(this.options.targetAttachment),this.attachment=V(this.options.attachment),this.offset=H(this.options.offset),this.targetOffset=H(this.options.targetOffset),void 0!==this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=o(this.target),!1!==this.options.enabled&&this.enable(r)}},{key:"getTargetBounds",value:function(){if(void 0===this.targetModifier)return c(this.target)
if("visible"===this.targetModifier)return this.target===document.body?{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}:((o={height:(e=c(this.target)).height,width:e.width,top:e.top,left:e.left}).height=Math.min(o.height,e.height-(pageYOffset-e.top)),o.height=Math.min(o.height,e.height-(e.top+e.height-(pageYOffset+innerHeight))),o.height=Math.min(innerHeight,o.height),o.height-=2,o.width=Math.min(o.width,e.width-(pageXOffset-e.left)),o.width=Math.min(o.width,e.width-(e.left+e.width-(pageXOffset+innerWidth))),o.width=Math.min(innerWidth,o.width),o.width-=2,o.top<pageYOffset&&(o.top=pageYOffset),o.left<pageXOffset&&(o.left=pageXOffset),o)
if("scroll-handle"===this.targetModifier){var e=void 0,t=this.target
t===document.body?(t=document.documentElement,e={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):e=c(t)
var r=getComputedStyle(t),n=0;(t.scrollWidth>t.clientWidth||[r.overflow,r.overflowX].indexOf("scroll")>=0||this.target!==document.body)&&(n=15)
var i=e.height-parseFloat(r.borderTopWidth)-parseFloat(r.borderBottomWidth)-n,o={width:15,height:.975*i*(i/t.scrollHeight),left:e.left+e.width-parseFloat(r.borderLeftWidth)-15},a=0
i<408&&this.target===document.body&&(a=-11e-5*Math.pow(i,2)-.00727*i+22.58),this.target!==document.body&&(o.height=Math.max(o.height,24))
var s=this.target.scrollTop/(t.scrollHeight-i)
return o.top=s*(i-o.height-a)+e.top+parseFloat(r.borderTopWidth),this.target===document.body&&(o.height=Math.max(o.height,24)),o}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(e,t){return void 0===this._cache&&(this._cache={}),void 0===this._cache[e]&&(this._cache[e]=t.call(this)),this._cache[e]}},{key:"enable",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]||arguments[0]
!1!==this.options.addTargetClasses&&m(this.target,this.getClass("enabled")),m(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach((function(t){t!==e.target.ownerDocument&&t.addEventListener("scroll",e.position)})),t&&this.position()}},{key:"disable",value:function(){var e=this
g(this.target,this.getClass("enabled")),g(this.element,this.getClass("enabled")),this.enabled=!1,void 0!==this.scrollParents&&this.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.position)}))}},{key:"destroy",value:function(){var e=this
this.disable(),L.forEach((function(t,r){t===e&&L.splice(r,1)})),0===L.length&&l()}},{key:"updateAttachClasses",value:function(e,t){var r=this
e=e||this.attachment,t=t||this.targetAttachment,void 0!==this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),void 0===this._addAttachClasses&&(this._addAttachClasses=[])
var n=this._addAttachClasses
e.top&&n.push(this.getClass("element-attached")+"-"+e.top),e.left&&n.push(this.getClass("element-attached")+"-"+e.left),t.top&&n.push(this.getClass("target-attached")+"-"+t.top),t.left&&n.push(this.getClass("target-attached")+"-"+t.left)
var i=[];["left","top","bottom","right","middle","center"].forEach((function(e){i.push(r.getClass("element-attached")+"-"+e),i.push(r.getClass("target-attached")+"-"+e)})),E((function(){void 0!==r._addAttachClasses&&(w(r.element,r._addAttachClasses,i),!1!==r.options.addTargetClasses&&w(r.target,r._addAttachClasses,i),delete r._addAttachClasses)}))}},{key:"position",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]||arguments[0]
if(this.enabled){this.clearCache()
var n=j(this.targetAttachment,this.attachment)
this.updateAttachClasses(this.attachment,n)
var i=this.cache("element-bounds",(function(){return c(e.element)})),o=i.width,a=i.height
if(0===o&&0===a&&void 0!==this.lastSize){var s=this.lastSize
o=s.width,a=s.height}else this.lastSize={width:o,height:a}
var u=this.cache("target-bounds",(function(){return e.getTargetBounds()})),l=u,f=z(M(this.attachment),{width:o,height:a}),h=z(M(n),l),g=z(this.offset,{width:o,height:a}),m=z(this.targetOffset,l)
f=U(f,g),h=U(h,m)
for(var b=u.left+h.left-f.left,v=u.top+h.top-f.top,y=0;y<r.modules.length;++y){var w=r.modules[y].position.call(this,{left:b,top:v,targetAttachment:n,targetPos:u,elementPos:i,offset:f,targetOffset:h,manualOffset:g,manualTargetOffset:m,scrollbarSize:k,attachment:this.attachment})
if(!1===w)return!1
void 0!==w&&"object"==typeof w&&(v=w.top,b=w.left)}var D={page:{top:v,left:b},viewport:{top:v-pageYOffset,bottom:pageYOffset-v-a+innerHeight,left:b-pageXOffset,right:pageXOffset-b-o+innerWidth}},E=this.target.ownerDocument,A=E.defaultView,k=void 0
return A.innerHeight>E.documentElement.clientHeight&&(k=this.cache("scrollbar-size",d),D.viewport.bottom-=k.height),A.innerWidth>E.documentElement.clientWidth&&(k=this.cache("scrollbar-size",d),D.viewport.right-=k.width),-1!==["","static"].indexOf(E.body.style.position)&&-1!==["","static"].indexOf(E.body.parentElement.style.position)||(D.page.bottom=E.body.scrollHeight-v-a,D.page.right=E.body.scrollWidth-b-o),void 0!==this.options.optimizations&&!1!==this.options.optimizations.moveElement&&void 0===this.targetModifier&&function(){var t=e.cache("target-offsetparent",(function(){return p(e.target)})),r=e.cache("target-offsetparent-bounds",(function(){return c(t)})),n=getComputedStyle(t),i=r,o={}
if(["Top","Left","Bottom","Right"].forEach((function(e){o[e.toLowerCase()]=parseFloat(n["border"+e+"Width"])})),r.right=E.body.scrollWidth-r.left-i.width+o.right,r.bottom=E.body.scrollHeight-r.top-i.height+o.bottom,D.page.top>=r.top+o.top&&D.page.bottom>=r.bottom&&D.page.left>=r.left+o.left&&D.page.right>=r.right){var a=t.scrollTop,s=t.scrollLeft
D.offset={top:D.page.top-r.top+a-o.top,left:D.page.left-r.left+s-o.left}}}(),this.move(D),this.history.unshift(D),this.history.length>3&&this.history.pop(),t&&x(),!0}}},{key:"move",value:function(e){var t,r,n=this
if(void 0!==this.element.parentNode){var i={}
for(var o in e)for(var a in i[o]={},e[o]){for(var s=!1,u=0;u<this.history.length;++u){var l=this.history[u]
if(void 0!==l[o]&&!C(l[o][a],e[o][a])){s=!0
break}}s||(i[o][a]=!0)}var c={top:"",left:"",right:"",bottom:""},f=function(e,t){if(!1!==(void 0!==n.options.optimizations?n.options.optimizations.gpu:null)){var r=void 0,i=void 0
e.top?(c.top=0,r=t.top):(c.bottom=0,r=-t.bottom),e.left?(c.left=0,i=t.left):(c.right=0,i=-t.right),"number"==typeof window.devicePixelRatio&&devicePixelRatio%1==0&&(i=Math.round(i*devicePixelRatio)/devicePixelRatio,r=Math.round(r*devicePixelRatio)/devicePixelRatio),c[F]="translateX("+i+"px) translateY("+r+"px)","msTransform"!==F&&(c[F]+=" translateZ(0)")}else e.top?c.top=t.top+"px":c.bottom=t.bottom+"px",e.left?c.left=t.left+"px":c.right=t.right+"px"},d=!1
if((i.page.top||i.page.bottom)&&(i.page.left||i.page.right)?(c.position="absolute",f(i.page,e.page)):(i.viewport.top||i.viewport.bottom)&&(i.viewport.left||i.viewport.right)?(c.position="fixed",f(i.viewport,e.viewport)):void 0!==i.offset&&i.offset.top&&i.offset.left?function(){c.position="absolute"
var t=n.cache("target-offsetparent",(function(){return p(n.target)}))
p(n.element)!==t&&E((function(){n.element.parentNode.removeChild(n.element),t.appendChild(n.element)})),f(i.offset,e.offset),d=!0}():(c.position="absolute",f({top:!0,left:!0},e.page)),!d)if(this.options.bodyElement)this.element.parentNode!==this.options.bodyElement&&this.options.bodyElement.appendChild(this.element)
else{for(var g=!0,m=this.element.parentNode;m&&1===m.nodeType&&"BODY"!==m.tagName&&(void 0,((r=(t=m).ownerDocument).fullscreenElement||r.webkitFullscreenElement||r.mozFullScreenElement||r.msFullscreenElement)!==t);){if("static"!==getComputedStyle(m).position){g=!1
break}m=m.parentNode}g||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var b={},v=!1
for(var a in c){var y=c[a]
this.element.style[a]!==y&&(v=!0,b[a]=y)}v&&E((function(){h(n.element.style,b),n.trigger("repositioned")}))}}}]),i}(A)
$.modules=[],r.position=q
var G=h($,r)
k=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0
try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")},c=(Z=r.Utils).getBounds
var h=Z.extend,Q=(w=Z.updateClasses,E=Z.defer,["left","top","right","bottom"])
r.modules.push({position:function(e){var t=this,r=e.top,n=e.left,i=e.targetAttachment
if(!this.options.constraints)return!0
var o=this.cache("element-bounds",(function(){return c(t.element)})),a=o.height,s=o.width
if(0===s&&0===a&&void 0!==this.lastSize){var u=this.lastSize
s=u.width,a=u.height}var l=this.cache("target-bounds",(function(){return t.getTargetBounds()})),p=l.height,f=l.width,d=[this.getClass("pinned"),this.getClass("out-of-bounds")]
this.options.constraints.forEach((function(e){var t=e.outOfBoundsClass,r=e.pinnedClass
t&&d.push(t),r&&d.push(r)})),d.forEach((function(e){["left","top","right","bottom"].forEach((function(t){d.push(e+"-"+t)}))}))
var g=[],m=h({},i),b=h({},this.attachment)
return this.options.constraints.forEach((function(e){var o=e.to,u=e.attachment,l=e.pin
void 0===u&&(u="")
var d=void 0,h=void 0
if(u.indexOf(" ")>=0){var v=u.split(" "),y=k(v,2)
h=y[0],d=y[1]}else d=h=u
var w=function(e,t){return"scrollParent"===t?t=e.scrollParents[0]:"window"===t&&(t=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),t===document&&(t=t.documentElement),void 0!==t.nodeType&&function(){var e=t,r=c(t),n=r,i=getComputedStyle(t)
if(t=[n.left,n.top,r.width+n.left,r.height+n.top],e.ownerDocument!==document){var o=e.ownerDocument.defaultView
t[0]+=o.pageXOffset,t[1]+=o.pageYOffset,t[2]+=o.pageXOffset,t[3]+=o.pageYOffset}Q.forEach((function(e,r){"Top"===(e=e[0].toUpperCase()+e.substr(1))||"Left"===e?t[r]+=parseFloat(i["border"+e+"Width"]):t[r]-=parseFloat(i["border"+e+"Width"])}))}(),t}(t,o)
"target"!==h&&"both"!==h||(r<w[1]&&"top"===m.top&&(r+=p,m.top="bottom"),r+a>w[3]&&"bottom"===m.top&&(r-=p,m.top="top")),"together"===h&&("top"===m.top&&("bottom"===b.top&&r<w[1]?(r+=p,m.top="bottom",r+=a,b.top="top"):"top"===b.top&&r+a>w[3]&&r-(a-p)>=w[1]&&(r-=a-p,m.top="bottom",b.top="bottom")),"bottom"===m.top&&("top"===b.top&&r+a>w[3]?(r-=p,m.top="top",r-=a,b.top="bottom"):"bottom"===b.top&&r<w[1]&&r+(2*a-p)<=w[3]&&(r+=a-p,m.top="top",b.top="top")),"middle"===m.top&&(r+a>w[3]&&"top"===b.top?(r-=a,b.top="bottom"):r<w[1]&&"bottom"===b.top&&(r+=a,b.top="top"))),"target"!==d&&"both"!==d||(n<w[0]&&"left"===m.left&&(n+=f,m.left="right"),n+s>w[2]&&"right"===m.left&&(n-=f,m.left="left")),"together"===d&&(n<w[0]&&"left"===m.left?"right"===b.left?(n+=f,m.left="right",n+=s,b.left="left"):"left"===b.left&&(n+=f,m.left="right",n-=s,b.left="right"):n+s>w[2]&&"right"===m.left?"left"===b.left?(n-=f,m.left="left",n-=s,b.left="right"):"right"===b.left&&(n-=f,m.left="left",n+=s,b.left="left"):"center"===m.left&&(n+s>w[2]&&"left"===b.left?(n-=s,b.left="right"):n<w[0]&&"right"===b.left&&(n+=s,b.left="left"))),"element"!==h&&"both"!==h||(r<w[1]&&"bottom"===b.top&&(r+=a,b.top="top"),r+a>w[3]&&"top"===b.top&&(r-=a,b.top="bottom")),"element"!==d&&"both"!==d||(n<w[0]&&("right"===b.left?(n+=s,b.left="left"):"center"===b.left&&(n+=s/2,b.left="left")),n+s>w[2]&&("left"===b.left?(n-=s,b.left="right"):"center"===b.left&&(n-=s/2,b.left="right"))),"string"==typeof l?l=l.split(",").map((function(e){return e.trim()})):!0===l&&(l=["top","left","right","bottom"]),l=l||[]
var D,E,x=[],A=[]
r<w[1]&&(l.indexOf("top")>=0?(r=w[1],x.push("top")):A.push("top")),r+a>w[3]&&(l.indexOf("bottom")>=0?(r=w[3]-a,x.push("bottom")):A.push("bottom")),n<w[0]&&(l.indexOf("left")>=0?(n=w[0],x.push("left")):A.push("left")),n+s>w[2]&&(l.indexOf("right")>=0?(n=w[2]-s,x.push("right")):A.push("right")),x.length&&(D=void 0!==t.options.pinnedClass?t.options.pinnedClass:t.getClass("pinned"),g.push(D),x.forEach((function(e){g.push(D+"-"+e)}))),A.length&&(E=void 0!==t.options.outOfBoundsClass?t.options.outOfBoundsClass:t.getClass("out-of-bounds"),g.push(E),A.forEach((function(e){g.push(E+"-"+e)}))),(x.indexOf("left")>=0||x.indexOf("right")>=0)&&(b.left=m.left=!1),(x.indexOf("top")>=0||x.indexOf("bottom")>=0)&&(b.top=m.top=!1),m.top===i.top&&m.left===i.left&&b.top===t.attachment.top&&b.left===t.attachment.left||(t.updateAttachClasses(b,m),t.trigger("update",{attachment:b,targetAttachment:m}))})),E((function(){!1!==t.options.addTargetClasses&&w(t.target,g,d),w(t.element,g,d)})),{top:r,left:n}}})
var Z,c=(Z=r.Utils).getBounds,w=Z.updateClasses
return E=Z.defer,r.modules.push({position:function(e){var t=this,r=e.top,n=e.left,i=this.cache("element-bounds",(function(){return c(t.element)})),o=i.height,a=i.width,s=this.getTargetBounds(),u=r+o,l=n+a,p=[]
r<=s.bottom&&u>=s.top&&["left","right"].forEach((function(e){var t=s[e]
t!==n&&t!==l||p.push(e)})),n<=s.right&&l>=s.left&&["top","bottom"].forEach((function(e){var t=s[e]
t!==r&&t!==u||p.push(e)}))
var f=[],d=[]
return f.push(this.getClass("abutted")),["left","top","right","bottom"].forEach((function(e){f.push(t.getClass("abutted")+"-"+e)})),p.length&&d.push(this.getClass("abutted")),p.forEach((function(e){d.push(t.getClass("abutted")+"-"+e)})),E((function(){!1!==t.options.addTargetClasses&&w(t.target,d,f),w(t.element,d,f)})),!0}}),k=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0
try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")},r.modules.push({position:function(e){var t=e.top,r=e.left
if(this.options.shift){var n=this.options.shift
"function"==typeof this.options.shift&&(n=this.options.shift.call(this,{top:t,left:r}))
var i=void 0,o=void 0
if("string"==typeof n){(n=n.split(" "))[1]=n[1]||n[0]
var a=k(n,2)
i=a[0],o=a[1],i=parseFloat(i,10),o=parseFloat(o,10)}else i=n.top,o=n.left
return{top:t+=i,left:r+=o}}}}),G},void 0===(n=r.apply(t,[]))||(e.exports=n)},2404:e=>{var t={exports:{}}
function r(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var n=e[t]
"object"!=typeof n||Object.isFrozen(n)||r(n)})),e}t.exports=r,t.exports.default=r
var n=t.exports
class i{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function a(e){const t=Object.create(null)
for(const o in e)t[o]=e[o]
for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i]
return n.forEach((function(e){for(const r in e)t[r]=e[r]})),t}const s=e=>!!e.kind
class u{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=o(e)}openNode(e){if(!s(e))return
let t=e.kind
t=e.sublanguage?`language-${t}`:((e,t)=>{let{prefix:r}=t
if(e.includes(".")){const t=e.split(".")
return[`${r}${t.shift()}`,...t.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")}return`${r}${e}`})(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]}
this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{l._collapse(e)})))}}class c extends l{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const r=e.root
r.kind=t,r.sublanguage=!0,this.add(r)}toHTML(){return new u(this,this.options).value()}finalize(){return!0}}function p(e){return e?"string"==typeof e?e:e.source:null}function f(e){return g("(?=",e,")")}function d(e){return g("(?:",e,")*")}function h(e){return g("(?:",e,")?")}function g(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
const n=t.map((e=>p(e))).join("")
return n}function m(e){const t=e[e.length-1]
return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
const n=m(t),i="("+(n.capture?"":"?:")+t.map((e=>p(e))).join("|")+")"
return i}function v(e){return new RegExp(e.toString()+"|").exec("").length-1}const y=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
function w(e,t){let{joinWith:r}=t,n=0
return e.map((e=>{n+=1
const t=n
let r=p(e),i=""
for(;r.length>0;){const e=y.exec(r)
if(!e){i+=r
break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+String(Number(e[1])+t):(i+=e[0],"("===e[0]&&n++)}return i})).map((e=>`(${e})`)).join(r)}const D="[a-zA-Z]\\w*",E="[a-zA-Z_]\\w*",x="\\b\\d+(\\.\\d+)?",A="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",k="\\b(0b[01]+)",_={begin:"\\\\[\\s\\S]",relevance:0},C={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[_]},S={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[_]},T=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const n=a({scope:"comment",begin:e,end:t,contains:[]},r)
n.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
const i=b("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
return n.contains.push({begin:g(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),n},N=T("//","$"),O=T("/\\*","\\*/"),F=T("#","$"),L={scope:"number",begin:x,relevance:0},q={scope:"number",begin:A,relevance:0},B={scope:"number",begin:k,relevance:0},R={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[_,{begin:/\[/,end:/\]/,relevance:0,contains:[_]}]}]},P={scope:"title",begin:D,relevance:0},I={scope:"title",begin:E,relevance:0}
var j=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:D,UNDERSCORE_IDENT_RE:E,NUMBER_RE:x,C_NUMBER_RE:A,BINARY_NUMBER_RE:k,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t=/^#![ ]*\//
return e.binary&&(e.begin=g(t,/.*\b/,e.binary,/\b.*/)),a({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:_,APOS_STRING_MODE:C,QUOTE_STRING_MODE:S,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:T,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:O,HASH_COMMENT_MODE:F,NUMBER_MODE:L,C_NUMBER_MODE:q,BINARY_NUMBER_MODE:B,REGEXP_MODE:R,TITLE_MODE:P,UNDERSCORE_TITLE_MODE:I,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}})
function M(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function U(e,t){void 0!==e.className&&(e.scope=e.className,delete e.className)}function z(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=M,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function H(e,t){Array.isArray(e.illegal)&&(e.illegal=b(...e.illegal))}function V(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match")
e.begin=e.match,delete e.match}}function $(e,t){void 0===e.relevance&&(e.relevance=1)}const G=(e,t)=>{if(!e.beforeMatch)return
if(e.starts)throw new Error("beforeMatch cannot be used with starts")
const r=Object.assign({},e)
Object.keys(e).forEach((t=>{delete e[t]})),e.keywords=r.keywords,e.begin=g(r.beforeMatch,f(r.begin)),e.starts={relevance:0,contains:[Object.assign(r,{endsParent:!0})]},e.relevance=0,delete r.beforeMatch},Q=["of","and","for","in","not","or","if","then","parent","list","value"],Z="keyword"
function W(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Z
const n=Object.create(null)
return"string"==typeof e?i(r,e.split(" ")):Array.isArray(e)?i(r,e):Object.keys(e).forEach((function(r){Object.assign(n,W(e[r],t,r))})),n
function i(e,r){t&&(r=r.map((e=>e.toLowerCase()))),r.forEach((function(t){const r=t.split("|")
n[r[0]]=[e,K(r[0],r[1])]}))}}function K(e,t){return t?Number(t):function(e){return Q.includes(e.toLowerCase())}(e)?0:1}const X={},Y=e=>{console.error(e)},J=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
console.log(`WARN: ${e}`,...r)},ee=(e,t)=>{X[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),X[`${e}/${t}`]=!0)},te=new Error
function re(e,t,r){let{key:n}=r,i=0
const o=e[n],a={},s={}
for(let u=1;u<=t.length;u++)s[u+i]=o[u],a[u+i]=!0,i+=v(t[u-1])
e[n]=s,e[n]._emit=a,e[n]._multi=!0}function ne(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Y("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),te
if("object"!=typeof e.beginScope||null===e.beginScope)throw Y("beginScope must be object"),te
re(e,e.begin,{key:"beginScope"}),e.begin=w(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Y("skip, excludeEnd, returnEnd not compatible with endScope: {}"),te
if("object"!=typeof e.endScope||null===e.endScope)throw Y("endScope must be object"),te
re(e,e.end,{key:"endScope"}),e.end=w(e.end,{joinWith:""})}}(e)}function ie(e){function t(t,r){return new RegExp(p(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=v(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
const e=this.regexes.map((e=>e[1]))
this.matcherRe=t(w(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
const t=this.matcherRe.exec(e)
if(!t)return null
const r=t.findIndex(((e,t)=>t>0&&void 0!==e)),n=this.matchIndexes[r]
return t.splice(0,r),Object.assign(t,n)}}class n{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e]
const t=new r
return this.rules.slice(e).forEach((e=>{let[r,n]=e
return t.addRule(r,n)})),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex)
t.lastIndex=this.lastIndex
let r=t.exec(e)
if(this.resumingScanAtSamePosition())if(r&&r.index===this.lastIndex);else{const t=this.getMatcher(0)
t.lastIndex=this.lastIndex+1,r=t.exec(e)}return r&&(this.regexIndex+=r.position+1,this.regexIndex===this.count&&this.considerAll()),r}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
return e.classNameAliases=a(e.classNameAliases||{}),function r(i,o){const s=i
if(i.isCompiled)return s;[U,V,ne,G].forEach((e=>e(i,o))),e.compilerExtensions.forEach((e=>e(i,o))),i.__beforeBegin=null,[z,H,$].forEach((e=>e(i,o))),i.isCompiled=!0
let u=null
return"object"==typeof i.keywords&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),u=i.keywords.$pattern,delete i.keywords.$pattern),u=u||/\w+/,i.keywords&&(i.keywords=W(i.keywords,e.case_insensitive)),s.keywordPatternRe=t(u,!0),o&&(i.begin||(i.begin=/\B|\b/),s.beginRe=t(s.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(s.endRe=t(s.end)),s.terminatorEnd=p(s.end)||"",i.endsWithParent&&o.terminatorEnd&&(s.terminatorEnd+=(i.end?"|":"")+o.terminatorEnd)),i.illegal&&(s.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return a(e,{variants:null},t)}))),e.cachedVariants?e.cachedVariants:oe(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}("self"===e?i:e)}))),i.contains.forEach((function(e){r(e,s)})),i.starts&&r(i.starts,o),s.matcher=function(e){const t=new n
return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(s),s}(e)}function oe(e){return!!e&&(e.endsWithParent||oe(e.starts))}class ae extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const se=o,ue=a,le=Symbol("nomatch")
var ce=function(e){const t=Object.create(null),r=Object.create(null),o=[]
let a=!0
const s="Could not find the language '{}', did you forget to load/include a language module?",u={disableAutodetect:!0,name:"Plain text",contains:[]}
let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:c}
function p(e){return l.noHighlightRe.test(e)}function m(e,t,r){let n="",i=""
"object"==typeof t?(n=e,r=t.ignoreIllegals,i=t.language):(ee("10.7.0","highlight(lang, code, ...args) has been deprecated."),ee("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),i=e,n=t),void 0===r&&(r=!0)
const o={code:n,language:i}
_("before:highlight",o)
const a=o.result?o.result:v(o.language,o.code,r)
return a.code=o.code,_("after:highlight",a),a}function v(e,r,n,o){const u=Object.create(null)
function c(){if(!A.keywords)return void _.addText(C)
let e=0
A.keywordPatternRe.lastIndex=0
let t=A.keywordPatternRe.exec(C),r=""
for(;t;){r+=C.substring(e,t.index)
const i=w.case_insensitive?t[0].toLowerCase():t[0],o=(n=i,A.keywords[n])
if(o){const[e,n]=o
if(_.addText(r),r="",u[i]=(u[i]||0)+1,u[i]<=7&&(S+=n),e.startsWith("_"))r+=t[0]
else{const r=w.classNameAliases[e]||e
_.addKeyword(t[0],r)}}else r+=t[0]
e=A.keywordPatternRe.lastIndex,t=A.keywordPatternRe.exec(C)}var n
r+=C.substr(e),_.addText(r)}function p(){null!=A.subLanguage?function(){if(""===C)return
let e=null
if("string"==typeof A.subLanguage){if(!t[A.subLanguage])return void _.addText(C)
e=v(A.subLanguage,C,!0,k[A.subLanguage]),k[A.subLanguage]=e._top}else e=y(C,A.subLanguage.length?A.subLanguage:null)
A.relevance>0&&(S+=e.relevance),_.addSublanguage(e._emitter,e.language)}():c(),C=""}function f(e,t){let r=1
const n=t.length-1
for(;r<=n;){if(!e._emit[r]){r++
continue}const n=w.classNameAliases[e[r]]||e[r],i=t[r]
n?_.addKeyword(i,n):(C=i,c(),C=""),r++}}function d(e,t){return e.scope&&"string"==typeof e.scope&&_.openNode(w.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(_.addKeyword(C,w.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),C=""):e.beginScope._multi&&(f(e.beginScope,t),C="")),A=Object.create(e,{parent:{value:A}}),A}function h(e,t,r){let n=function(e,t){const r=e&&e.exec(t)
return r&&0===r.index}(e.endRe,r)
if(n){if(e["on:end"]){const r=new i(e)
e["on:end"](t,r),r.isMatchIgnored&&(n=!1)}if(n){for(;e.endsParent&&e.parent;)e=e.parent
return e}}if(e.endsWithParent)return h(e.parent,t,r)}function g(e){return 0===A.matcher.regexIndex?(C+=e[0],1):(O=!0,0)}let m={}
function b(t,o){const s=o&&o[0]
if(C+=t,null==s)return p(),0
if("begin"===m.type&&"end"===o.type&&m.index===o.index&&""===s){if(C+=r.slice(o.index,o.index+1),!a){const t=new Error(`0 width match regex (${e})`)
throw t.languageName=e,t.badRule=m.rule,t}return 1}if(m=o,"begin"===o.type)return function(e){const t=e[0],r=e.rule,n=new i(r),o=[r.__beforeBegin,r["on:begin"]]
for(const i of o)if(i&&(i(e,n),n.isMatchIgnored))return g(t)
return r.skip?C+=t:(r.excludeBegin&&(C+=t),p(),r.returnBegin||r.excludeBegin||(C=t)),d(r,e),r.returnBegin?0:t.length}(o)
if("illegal"===o.type&&!n){const e=new Error('Illegal lexeme "'+s+'" for mode "'+(A.scope||"<unnamed>")+'"')
throw e.mode=A,e}if("end"===o.type){const e=function(e){const t=e[0],n=r.substr(e.index),i=h(A,e,n)
if(!i)return le
const o=A
A.endScope&&A.endScope._wrap?(p(),_.addKeyword(t,A.endScope._wrap)):A.endScope&&A.endScope._multi?(p(),f(A.endScope,e)):o.skip?C+=t:(o.returnEnd||o.excludeEnd||(C+=t),p(),o.excludeEnd&&(C=t))
do{A.scope&&_.closeNode(),A.skip||A.subLanguage||(S+=A.relevance),A=A.parent}while(A!==i.parent)
return i.starts&&d(i.starts,e),o.returnEnd?0:t.length}(o)
if(e!==le)return e}if("illegal"===o.type&&""===s)return 1
if(N>1e5&&N>3*o.index)throw new Error("potential infinite loop, way more iterations than matches")
return C+=s,s.length}const w=x(e)
if(!w)throw Y(s.replace("{}",e)),new Error('Unknown language: "'+e+'"')
const D=ie(w)
let E="",A=o||D
const k={},_=new l.__emitter(l)
!function(){const e=[]
for(let t=A;t!==w;t=t.parent)t.scope&&e.unshift(t.scope)
e.forEach((e=>_.openNode(e)))}()
let C="",S=0,T=0,N=0,O=!1
try{for(A.matcher.considerAll();;){N++,O?O=!1:A.matcher.considerAll(),A.matcher.lastIndex=T
const e=A.matcher.exec(r)
if(!e)break
const t=b(r.substring(T,e.index),e)
T=e.index+t}return b(r.substr(T)),_.closeAllNodes(),_.finalize(),E=_.toHTML(),{language:e,value:E,relevance:S,illegal:!1,_emitter:_,_top:A}}catch(t){if(t.message&&t.message.includes("Illegal"))return{language:e,value:se(r),illegal:!0,relevance:0,_illegalBy:{message:t.message,index:T,context:r.slice(T-100,T+100),mode:t.mode,resultSoFar:E},_emitter:_}
if(a)return{language:e,value:se(r),illegal:!1,relevance:0,errorRaised:t,_emitter:_,_top:A}
throw t}}function y(e,r){r=r||l.languages||Object.keys(t)
const n=function(e){const t={value:se(e),illegal:!1,relevance:0,_top:u,_emitter:new l.__emitter(l)}
return t._emitter.addText(e),t}(e),i=r.filter(x).filter(k).map((t=>v(t,e,!1)))
i.unshift(n)
const o=i.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance
if(e.language&&t.language){if(x(e.language).supersetOf===t.language)return 1
if(x(t.language).supersetOf===e.language)return-1}return 0})),[a,s]=o,c=a
return c.secondBest=s,c}function w(e){let t=null
const n=function(e){let t=e.className+" "
t+=e.parentNode?e.parentNode.className:""
const r=l.languageDetectRe.exec(t)
if(r){const t=x(r[1])
return t||(J(s.replace("{}",r[1])),J("Falling back to no-highlight mode for this block.",e)),t?r[1]:"no-highlight"}return t.split(/\s+/).find((e=>p(e)||x(e)))}(e)
if(p(n))return
if(_("before:highlightElement",{el:e,language:n}),e.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),l.throwUnescapedHTML))throw new ae("One of your code blocks includes unescaped HTML.",e.innerHTML)
t=e
const i=t.textContent,o=n?m(i,{language:n,ignoreIllegals:!0}):y(i)
e.innerHTML=o.value,function(e,t,n){const i=t&&r[t]||n
e.classList.add("hljs"),e.classList.add(`language-${i}`)}(e,n,o.language),e.result={language:o.language,re:o.relevance,relevance:o.relevance},o.secondBest&&(e.secondBest={language:o.secondBest.language,relevance:o.secondBest.relevance}),_("after:highlightElement",{el:e,result:o,text:i})}let D=!1
function E(){"loading"!==document.readyState?document.querySelectorAll(l.cssSelector).forEach(w):D=!0}function x(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}function A(e,t){let{languageName:n}=t
"string"==typeof e&&(e=[e]),e.forEach((e=>{r[e.toLowerCase()]=n}))}function k(e){const t=x(e)
return t&&!t.disableAutodetect}function _(e,t){const r=e
o.forEach((function(e){e[r]&&e[r](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){D&&E()}),!1),Object.assign(e,{highlight:m,highlightAuto:y,highlightAll:E,highlightElement:w,highlightBlock:function(e){return ee("10.7.0","highlightBlock will be removed entirely in v12.0"),ee("10.7.0","Please use highlightElement now."),w(e)},configure:function(e){l=ue(l,e)},initHighlighting:()=>{E(),ee("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){E(),ee("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(r,n){let i=null
try{i=n(e)}catch(e){if(Y("Language definition for '{}' could not be registered.".replace("{}",r)),!a)throw e
Y(e),i=u}i.name||(i.name=r),t[r]=i,i.rawDefinition=n.bind(null,e),i.aliases&&A(i.aliases,{languageName:r})},unregisterLanguage:function(e){delete t[e]
for(const t of Object.keys(r))r[t]===e&&delete r[t]},listLanguages:function(){return Object.keys(t)},getLanguage:x,registerAliases:A,autoDetection:k,inherit:ue,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),o.push(e)}}),e.debugMode=function(){a=!1},e.safeMode=function(){a=!0},e.versionString="11.5.1",e.regex={concat:g,lookahead:f,either:b,optional:h,anyNumberOfTimes:d}
for(const i in j)"object"==typeof j[i]&&n(j[i])
return Object.assign(e,j),e}({})
e.exports=ce,ce.HighlightJS=ce,ce.default=ce},1367:e=>{const t=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],r=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],n=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],o=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse()
e.exports=function(e){const a=e.regex,s=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}))(e),u=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[s.BLOCK_COMMENT,{begin:/-(webkit|moz|ms|o)-(?=[a-z])/},s.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},s.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+n.join("|")+")"},{begin:":(:)?("+i.join("|")+")"}]},s.CSS_VARIABLE,{className:"attribute",begin:"\\b("+o.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[s.BLOCK_COMMENT,s.HEXCOLOR,s.IMPORTANT,s.CSS_NUMBER_MODE,...u,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},s.FUNCTION_DISPATCH]},{begin:a.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:/@-?\w[\w]*(-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:"and or not only",attribute:r.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...u,s.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+t.join("|")+")\\b"}]}}},365:e=>{e.exports=function(e){const t=e.regex
return{name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,match:t.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)},{className:"comment",variants:[{begin:t.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,end:/$/}]}}},370:e=>{e.exports=function(e){const t=e.regex,r={$pattern:/[\w.\/]+/,built_in:["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},n=/\[\]|\[[^\]]+\]/,i=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,o=t.either(/""|"[^"]+"/,/''|'[^']+'/,n,i),a=t.concat(t.optional(/\.|\.\/|\//),o,t.anyNumberOfTimes(t.concat(/(\.|\/)/,o))),s=t.concat("(",n,"|",i,")(?==)"),u={begin:a},l=e.inherit(u,{keywords:{$pattern:/[\w.\/]+/,literal:["true","false","undefined","null"]}}),c={begin:/\(/,end:/\)/},p={className:"attr",begin:s,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,l,c]}}},f={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},p,l,c],returnEnd:!0},d=e.inherit(u,{className:"name",keywords:r,starts:e.inherit(f,{end:/\)/})})
c.contains=[d]
const h=e.inherit(u,{keywords:r,className:"name",starts:e.inherit(f,{end:/\}\}/})}),g=e.inherit(u,{keywords:r,className:"name"}),m=e.inherit(u,{className:"name",keywords:r,starts:e.inherit(f,{end:/\}\}/})})
return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[h],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[g]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[h]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[g]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[m]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[m]}]}}},979:e=>{const t="[A-Za-z$_][0-9A-Za-z$_]*",r=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],i=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],o=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],a=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],s=["arguments","this","super","console","window","document","localStorage","module","global"],u=[].concat(a,i,o)
e.exports=function(e){const l=e.regex,c=t,p={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{const r=e[0].length+e.index,n=e.input[r]
if("<"===n||","===n)return void t.ignoreMatch()
let i
">"===n&&(((e,t)=>{let{after:r}=t
const n="</"+e[0].slice(1)
return-1!==e.input.indexOf(n,r)})(e,{after:r})||t.ignoreMatch()),(i=e.input.substr(r).match(/^\s+extends\s+/))&&0===i.index&&t.ignoreMatch()}},f={$pattern:t,keyword:r,literal:n,built_in:u,"variable.language":s},d="\\.([0-9](_?[0-9])*)",h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${h})((${d})|\\.)?|(${d}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${h})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},m={className:"subst",begin:"\\$\\{",end:"\\}",keywords:f,contains:[]},b={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},v={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,m],subLanguage:"css"}},y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,m]},w={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},D=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,v,y,g]
m.contains=D.concat({begin:/\{/,end:/\}/,keywords:f,contains:["self"].concat(D)})
const E=[].concat(w,m.contains),x=E.concat([{begin:/\(/,end:/\)/,keywords:f,contains:["self"].concat(E)}]),A={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:f,contains:x},k={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,l.concat(c,"(",l.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},_={relevance:0,match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...i,...o]}},C={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[A],illegal:/%/},S={match:l.concat(/\b/,(T=[...a,"super"],l.concat("(?!",T.join("|"),")")),c,l.lookahead(/\(/)),className:"title.function",relevance:0}
var T
const N={begin:l.concat(/\./,l.lookahead(l.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},O={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},A]},F="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",L={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(F)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[A]}
return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:f,exports:{PARAMS_CONTAINS:x,CLASS_REFERENCE:_},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,v,y,w,g,_,{className:"attr",begin:c+l.lookahead(":"),relevance:0},L,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[w,e.REGEXP_MODE,{className:"function",begin:F,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:f,contains:x}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:p.begin,"on:begin":p.isTrulyOpeningTag,end:p.end}],subLanguage:"xml",contains:[{begin:p.begin,end:p.end,skip:!0,contains:["self"]}]}]},C,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[A,e.inherit(e.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},N,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[A]},S,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},k,O,{match:/\$[(.]/}]}}},7366:e=>{e.exports=function(e){const t={beginKeywords:["true","false","null"].join(" ")}
return{name:"JSON",contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},e.QUOTE_STRING_MODE,t,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}},8591:e=>{e.exports=function(e){return{name:"Shell Session",aliases:["console","shellsession"],contains:[{className:"meta.prompt",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}},636:e=>{const t="[A-Za-z$_][0-9A-Za-z$_]*",r=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],i=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],o=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],a=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],s=["arguments","this","super","console","window","document","localStorage","module","global"],u=[].concat(a,i,o)
function l(e){const l=e.regex,c=t,p={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{const r=e[0].length+e.index,n=e.input[r]
if("<"===n||","===n)return void t.ignoreMatch()
let i
">"===n&&(((e,t)=>{let{after:r}=t
const n="</"+e[0].slice(1)
return-1!==e.input.indexOf(n,r)})(e,{after:r})||t.ignoreMatch()),(i=e.input.substr(r).match(/^\s+extends\s+/))&&0===i.index&&t.ignoreMatch()}},f={$pattern:t,keyword:r,literal:n,built_in:u,"variable.language":s},d="\\.([0-9](_?[0-9])*)",h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${h})((${d})|\\.)?|(${d}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${h})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},m={className:"subst",begin:"\\$\\{",end:"\\}",keywords:f,contains:[]},b={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},v={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,m],subLanguage:"css"}},y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,m]},w={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},D=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,v,y,g]
m.contains=D.concat({begin:/\{/,end:/\}/,keywords:f,contains:["self"].concat(D)})
const E=[].concat(w,m.contains),x=E.concat([{begin:/\(/,end:/\)/,keywords:f,contains:["self"].concat(E)}]),A={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:f,contains:x},k={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,l.concat(c,"(",l.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},_={relevance:0,match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...i,...o]}},C={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[A],illegal:/%/},S={match:l.concat(/\b/,(T=[...a,"super"],l.concat("(?!",T.join("|"),")")),c,l.lookahead(/\(/)),className:"title.function",relevance:0}
var T
const N={begin:l.concat(/\./,l.lookahead(l.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},O={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},A]},F="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",L={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(F)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[A]}
return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:f,exports:{PARAMS_CONTAINS:x,CLASS_REFERENCE:_},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,v,y,w,g,_,{className:"attr",begin:c+l.lookahead(":"),relevance:0},L,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[w,e.REGEXP_MODE,{className:"function",begin:F,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:f,contains:x}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:p.begin,"on:begin":p.isTrulyOpeningTag,end:p.end}],subLanguage:"xml",contains:[{begin:p.begin,end:p.end,skip:!0,contains:["self"]}]}]},C,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[A,e.inherit(e.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},N,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[A]},S,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},k,O,{match:/\$[(.]/}]}}e.exports=function(e){const i=l(e),o=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],a={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[i.exports.CLASS_REFERENCE]},c={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:o},contains:[i.exports.CLASS_REFERENCE]},p={$pattern:t,keyword:r.concat(["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"]),literal:n,built_in:u.concat(o),"variable.language":s},f={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},d=(e,t,r)=>{const n=e.contains.findIndex((e=>e.label===t))
if(-1===n)throw new Error("can not find mode to replace")
e.contains.splice(n,1,r)}
return Object.assign(i.keywords,p),i.exports.PARAMS_CONTAINS.push(f),i.contains=i.contains.concat([f,a,c]),d(i,"shebang",e.SHEBANG()),d(i,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),i.contains.find((e=>"func.def"===e.label)).relevance=0,Object.assign(i,{name:"TypeScript",aliases:["ts","tsx"]}),i}},7181:e=>{e.exports=function(e){const t=e.regex,r=t.concat(/[A-Z_]/,t.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),n={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},i={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=e.inherit(i,{begin:/\(/,end:/\)/}),a=e.inherit(e.APOS_STRING_MODE,{className:"string"}),s=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),u={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{begin:/[^\s"'=<>`]+/}]}]}]}
return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[i,s,a,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[i,o,s,a]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},n,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[s]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[u],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[u],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t.concat(/</,t.lookahead(t.concat(r,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:u}]},{className:"tag",begin:t.concat(/<\//,t.lookahead(t.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}},970:(e,t)=>{"use strict"
function r(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(r)return(r=r.call(e)).next.bind(r)
if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var i=0
return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.defaults={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}
var a=/[&<>"']/,s=/[&<>"']/g,u=/[<>"']|&(?!#?\w+;)/,l=/[<>"']|&(?!#?\w+;)/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p=function(e){return c[e]}
function f(e,t){if(t){if(a.test(e))return e.replace(s,p)}else if(u.test(e))return e.replace(l,p)
return e}var d=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
function h(e){return e.replace(d,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var g=/(^|[^\[])\^/g
function m(e,t){e="string"==typeof e?e:e.source,t=t||""
var r={replace:function(t,n){return n=(n=n.source||n).replace(g,"$1"),e=e.replace(t,n),r},getRegex:function(){return new RegExp(e,t)}}
return r}var b=/[^\w:]/g,v=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
function y(e,t,r){if(e){var n
try{n=decodeURIComponent(h(r)).replace(b,"").toLowerCase()}catch(e){return null}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return null}t&&!v.test(r)&&(r=function(e,t){w[" "+e]||(D.test(e)?w[" "+e]=e+"/":w[" "+e]=C(e,"/",!0))
var r=-1===(e=w[" "+e]).indexOf(":")
return"//"===t.substring(0,2)?r?t:e.replace(E,"$1")+t:"/"===t.charAt(0)?r?t:e.replace(x,"$1")+t:e+t}(t,r))
try{r=encodeURI(r).replace(/%25/g,"%")}catch(e){return null}return r}var w={},D=/^[^:]+:\/*[^/]*$/,E=/^([^:]+:)[\s\S]*$/,x=/^([^:]+:\/*[^/]*)[\s\S]*$/,A={exec:function(){}}
function k(e){for(var t,r,n=1;n<arguments.length;n++)for(r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e}function _(e,t){var r=e.replace(/\|/g,(function(e,t,r){for(var n=!1,i=t;--i>=0&&"\\"===r[i];)n=!n
return n?"|":" |"})).split(/ \|/),n=0
if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t)
else for(;r.length<t;)r.push("")
for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|")
return r}function C(e,t,r){var n=e.length
if(0===n)return""
for(var i=0;i<n;){var o=e.charAt(n-i-1)
if(o!==t||r){if(o===t||!r)break
i++}else i++}return e.slice(0,n-i)}function S(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function T(e,t){if(t<1)return""
for(var r="";t>1;)1&t&&(r+=e),t>>=1,e+=e
return r+e}function N(e,t,r,n){var i=t.href,o=t.title?f(t.title):null,a=e[1].replace(/\\([\[\]])/g,"$1")
if("!"!==e[0].charAt(0)){n.state.inLink=!0
var s={type:"link",raw:r,href:i,title:o,text:a,tokens:n.inlineTokens(a,[])}
return n.state.inLink=!1,s}return{type:"image",raw:r,href:i,title:o,text:f(a)}}var O=function(){function e(e){this.options=e||t.defaults}var r=e.prototype
return r.space=function(e){var t=this.rules.block.newline.exec(e)
if(t&&t[0].length>0)return{type:"space",raw:t[0]}},r.code=function(e){var t=this.rules.block.code.exec(e)
if(t){var r=t[0].replace(/^ {1,4}/gm,"")
return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:C(r,"\n")}}},r.fences=function(e){var t=this.rules.block.fences.exec(e)
if(t){var r=t[0],n=function(e,t){var r=e.match(/^(\s+)(?:```)/)
if(null===r)return t
var n=r[1]
return t.split("\n").map((function(e){var t=e.match(/^\s+/)
return null===t?e:t[0].length>=n.length?e.slice(n.length):e})).join("\n")}(r,t[3]||"")
return{type:"code",raw:r,lang:t[2]?t[2].trim():t[2],text:n}}},r.heading=function(e){var t=this.rules.block.heading.exec(e)
if(t){var r=t[2].trim()
if(/#$/.test(r)){var n=C(r,"#")
this.options.pedantic?r=n.trim():n&&!/ $/.test(n)||(r=n.trim())}var i={type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:[]}
return this.lexer.inline(i.text,i.tokens),i}},r.hr=function(e){var t=this.rules.block.hr.exec(e)
if(t)return{type:"hr",raw:t[0]}},r.blockquote=function(e){var t=this.rules.block.blockquote.exec(e)
if(t){var r=t[0].replace(/^ *>[ \t]?/gm,"")
return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(r,[]),text:r}}},r.list=function(e){var t=this.rules.block.list.exec(e)
if(t){var r,n,o,a,s,u,l,c,p,f,d,h,g=t[1].trim(),m=g.length>1,b={type:"list",raw:"",ordered:m,start:m?+g.slice(0,-1):"",loose:!1,items:[]}
g=m?"\\d{1,9}\\"+g.slice(-1):"\\"+g,this.options.pedantic&&(g=m?g:"[*+-]")
for(var v=new RegExp("^( {0,3}"+g+")((?:[\t ][^\\n]*)?(?:\\n|$))");e&&(h=!1,t=v.exec(e))&&!this.rules.block.hr.test(e);){if(r=t[0],e=e.substring(r.length),c=t[2].split("\n",1)[0],p=e.split("\n",1)[0],this.options.pedantic?(a=2,d=c.trimLeft()):(a=(a=t[2].search(/[^ ]/))>4?1:a,d=c.slice(a),a+=t[1].length),u=!1,!c&&/^ *$/.test(p)&&(r+=p+"\n",e=e.substring(p.length+1),h=!0),!h)for(var y=new RegExp("^ {0,"+Math.min(3,a-1)+"}(?:[*+-]|\\d{1,9}[.)])");e&&(c=f=e.split("\n",1)[0],this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!y.test(c));){if(c.search(/[^ ]/)>=a||!c.trim())d+="\n"+c.slice(a)
else{if(u)break
d+="\n"+c}u||c.trim()||(u=!0),r+=f+"\n",e=e.substring(f.length+1)}b.loose||(l?b.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(d))&&(o="[ ] "!==n[0],d=d.replace(/^\[[ xX]\] +/,"")),b.items.push({type:"list_item",raw:r,task:!!n,checked:o,loose:!1,text:d}),b.raw+=r}b.items[b.items.length-1].raw=r.trimRight(),b.items[b.items.length-1].text=d.trimRight(),b.raw=b.raw.trimRight()
var w=b.items.length
for(s=0;s<w;s++){this.lexer.state.top=!1,b.items[s].tokens=this.lexer.blockTokens(b.items[s].text,[])
var D=b.items[s].tokens.filter((function(e){return"space"===e.type})),E=D.every((function(e){for(var t,r=0,n=i(e.raw.split(""));!(t=n()).done;)if("\n"===t.value&&(r+=1),r>1)return!0
return!1}))
!b.loose&&D.length&&E&&(b.loose=!0,b.items[s].loose=!0)}return b}},r.html=function(e){var t=this.rules.block.html.exec(e)
if(t){var r={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]}
return this.options.sanitize&&(r.type="paragraph",r.text=this.options.sanitizer?this.options.sanitizer(t[0]):f(t[0]),r.tokens=[],this.lexer.inline(r.text,r.tokens)),r}},r.def=function(e){var t=this.rules.block.def.exec(e)
if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}},r.table=function(e){var t=this.rules.block.table.exec(e)
if(t){var r={type:"table",header:_(t[1]).map((function(e){return{text:e}})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]}
if(r.header.length===r.align.length){r.raw=t[0]
var n,i,o,a,s=r.align.length
for(n=0;n<s;n++)/^ *-+: *$/.test(r.align[n])?r.align[n]="right":/^ *:-+: *$/.test(r.align[n])?r.align[n]="center":/^ *:-+ *$/.test(r.align[n])?r.align[n]="left":r.align[n]=null
for(s=r.rows.length,n=0;n<s;n++)r.rows[n]=_(r.rows[n],r.header.length).map((function(e){return{text:e}}))
for(s=r.header.length,i=0;i<s;i++)r.header[i].tokens=[],this.lexer.inlineTokens(r.header[i].text,r.header[i].tokens)
for(s=r.rows.length,i=0;i<s;i++)for(a=r.rows[i],o=0;o<a.length;o++)a[o].tokens=[],this.lexer.inlineTokens(a[o].text,a[o].tokens)
return r}}},r.lheading=function(e){var t=this.rules.block.lheading.exec(e)
if(t){var r={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]}
return this.lexer.inline(r.text,r.tokens),r}},r.paragraph=function(e){var t=this.rules.block.paragraph.exec(e)
if(t){var r={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]}
return this.lexer.inline(r.text,r.tokens),r}},r.text=function(e){var t=this.rules.block.text.exec(e)
if(t){var r={type:"text",raw:t[0],text:t[0],tokens:[]}
return this.lexer.inline(r.text,r.tokens),r}},r.escape=function(e){var t=this.rules.inline.escape.exec(e)
if(t)return{type:"escape",raw:t[0],text:f(t[1])}},r.tag=function(e){var t=this.rules.inline.tag.exec(e)
if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):f(t[0]):t[0]}},r.link=function(e){var t=this.rules.inline.link.exec(e)
if(t){var r=t[2].trim()
if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return
var n=C(r.slice(0,-1),"\\")
if((r.length-n.length)%2==0)return}else{var i=function(e,t){if(-1===e.indexOf(t[1]))return-1
for(var r=e.length,n=0,i=0;i<r;i++)if("\\"===e[i])i++
else if(e[i]===t[0])n++
else if(e[i]===t[1]&&--n<0)return i
return-1}(t[2],"()")
if(i>-1){var o=(0===t[0].indexOf("!")?5:4)+t[1].length+i
t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,o).trim(),t[3]=""}}var a=t[2],s=""
if(this.options.pedantic){var u=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a)
u&&(a=u[1],s=u[3])}else s=t[3]?t[3].slice(1,-1):""
return a=a.trim(),/^</.test(a)&&(a=this.options.pedantic&&!/>$/.test(r)?a.slice(1):a.slice(1,-1)),N(t,{href:a?a.replace(this.rules.inline._escapes,"$1"):a,title:s?s.replace(this.rules.inline._escapes,"$1"):s},t[0],this.lexer)}},r.reflink=function(e,t){var r
if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){var n=(r[2]||r[1]).replace(/\s+/g," ")
if(!(n=t[n.toLowerCase()])||!n.href){var i=r[0].charAt(0)
return{type:"text",raw:i,text:i}}return N(r,n,r[0],this.lexer)}},r.emStrong=function(e,t,r){void 0===r&&(r="")
var n=this.rules.inline.emStrong.lDelim.exec(e)
if(n&&(!n[3]||!r.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var i=n[1]||n[2]||""
if(!i||i&&(""===r||this.rules.inline.punctuation.exec(r))){var o,a,s=n[0].length-1,u=s,l=0,c="*"===n[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd
for(c.lastIndex=0,t=t.slice(-1*e.length+s);null!=(n=c.exec(t));)if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6])if(a=o.length,n[3]||n[4])u+=a
else if(!((n[5]||n[6])&&s%3)||(s+a)%3){if(!((u-=a)>0)){if(a=Math.min(a,a+u+l),Math.min(s,a)%2){var p=e.slice(1,s+n.index+a)
return{type:"em",raw:e.slice(0,s+n.index+a+1),text:p,tokens:this.lexer.inlineTokens(p,[])}}var f=e.slice(2,s+n.index+a-1)
return{type:"strong",raw:e.slice(0,s+n.index+a+1),text:f,tokens:this.lexer.inlineTokens(f,[])}}}else l+=a}}},r.codespan=function(e){var t=this.rules.inline.code.exec(e)
if(t){var r=t[2].replace(/\n/g," "),n=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r)
return n&&i&&(r=r.substring(1,r.length-1)),r=f(r,!0),{type:"codespan",raw:t[0],text:r}}},r.br=function(e){var t=this.rules.inline.br.exec(e)
if(t)return{type:"br",raw:t[0]}},r.del=function(e){var t=this.rules.inline.del.exec(e)
if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}},r.autolink=function(e,t){var r,n,i=this.rules.inline.autolink.exec(e)
if(i)return n="@"===i[2]?"mailto:"+(r=f(this.options.mangle?t(i[1]):i[1])):r=f(i[1]),{type:"link",raw:i[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}},r.url=function(e,t){var r
if(r=this.rules.inline.url.exec(e)){var n,i
if("@"===r[2])i="mailto:"+(n=f(this.options.mangle?t(r[0]):r[0]))
else{var o
do{o=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0]}while(o!==r[0])
n=f(r[0]),i="www."===r[1]?"http://"+n:n}return{type:"link",raw:r[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}},r.inlineText=function(e,t){var r,n=this.rules.inline.text.exec(e)
if(n)return r=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):f(n[0]):n[0]:f(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:r}},e}(),F={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:A,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/}
F.def=m(F.def).replace("label",F._label).replace("title",F._title).getRegex(),F.bullet=/(?:[*+-]|\d{1,9}[.)])/,F.listItemStart=m(/^( *)(bull) */).replace("bull",F.bullet).getRegex(),F.list=m(F.list).replace(/bull/g,F.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+F.def.source+")").getRegex(),F._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",F._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,F.html=m(F.html,"i").replace("comment",F._comment).replace("tag",F._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),F.paragraph=m(F._paragraph).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex(),F.blockquote=m(F.blockquote).replace("paragraph",F.paragraph).getRegex(),F.normal=k({},F),F.gfm=k({},F.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),F.gfm.table=m(F.gfm.table).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex(),F.gfm.paragraph=m(F._paragraph).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",F.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex(),F.pedantic=k({},F.normal,{html:m("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",F._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:A,paragraph:m(F.normal._paragraph).replace("hr",F.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",F.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()})
var L={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:A,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:A,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/}
function q(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function B(e){var t,r,n="",i=e.length
for(t=0;t<i;t++)r=e.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),n+="&#"+r+";"
return n}L._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",L.punctuation=m(L.punctuation).replace(/punctuation/g,L._punctuation).getRegex(),L.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,L.escapedEmSt=/\\\*|\\_/g,L._comment=m(F._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),L.emStrong.lDelim=m(L.emStrong.lDelim).replace(/punct/g,L._punctuation).getRegex(),L.emStrong.rDelimAst=m(L.emStrong.rDelimAst,"g").replace(/punct/g,L._punctuation).getRegex(),L.emStrong.rDelimUnd=m(L.emStrong.rDelimUnd,"g").replace(/punct/g,L._punctuation).getRegex(),L._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,L._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,L._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,L.autolink=m(L.autolink).replace("scheme",L._scheme).replace("email",L._email).getRegex(),L._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,L.tag=m(L.tag).replace("comment",L._comment).replace("attribute",L._attribute).getRegex(),L._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,L._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,L._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,L.link=m(L.link).replace("label",L._label).replace("href",L._href).replace("title",L._title).getRegex(),L.reflink=m(L.reflink).replace("label",L._label).replace("ref",F._label).getRegex(),L.nolink=m(L.nolink).replace("ref",F._label).getRegex(),L.reflinkSearch=m(L.reflinkSearch,"g").replace("reflink",L.reflink).replace("nolink",L.nolink).getRegex(),L.normal=k({},L),L.pedantic=k({},L.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:m(/^!?\[(label)\]\((.*?)\)/).replace("label",L._label).getRegex(),reflink:m(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",L._label).getRegex()}),L.gfm=k({},L.normal,{escape:m(L.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),L.gfm.url=m(L.gfm.url,"i").replace("email",L.gfm._extended_email).getRegex(),L.breaks=k({},L.gfm,{br:m(L.br).replace("{2,}","*").getRegex(),text:m(L.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()})
var R=function(){function e(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||t.defaults,this.options.tokenizer=this.options.tokenizer||new O,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0}
var r={block:F.normal,inline:L.normal}
this.options.pedantic?(r.block=F.pedantic,r.inline=L.pedantic):this.options.gfm&&(r.block=F.gfm,this.options.breaks?r.inline=L.breaks:r.inline=L.gfm),this.tokenizer.rules=r}e.lex=function(t,r){return new e(r).lex(t)},e.lexInline=function(t,r){return new e(r).inlineTokens(t)}
var n,i,o=e.prototype
return o.lex=function(e){var t
for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens)
return this.tokens},o.blockTokens=function(e,t){var r,n,i,o,a=this
for(void 0===t&&(t=[]),e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(function(e,t,r){return t+"    ".repeat(r.length)}));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((function(n){return!!(r=n.call({lexer:a},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)}))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),1===r.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(r)
else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),!(n=t[t.length-1])||"paragraph"!==n.type&&"text"!==n.type?t.push(r):(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text)
else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.list(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.def(e))e=e.substring(r.raw.length),!(n=t[t.length-1])||"paragraph"!==n.type&&"text"!==n.type?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(n.raw+="\n"+r.raw,n.text+="\n"+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text)
else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r)
else if(i=e,this.options.extensions&&this.options.extensions.startBlock&&function(){var t=1/0,r=e.slice(1),n=void 0
a.options.extensions.startBlock.forEach((function(e){"number"==typeof(n=e.call({lexer:this},r))&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}(),this.state.top&&(r=this.tokenizer.paragraph(i)))n=t[t.length-1],o&&"paragraph"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r),o=i.length!==e.length,e=e.substring(r.raw.length)
else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r)
else if(e){var s="Infinite loop on byte: "+e.charCodeAt(0)
if(this.options.silent){console.error(s)
break}throw new Error(s)}return this.state.top=!0,t},o.inline=function(e,t){this.inlineQueue.push({src:e,tokens:t})},o.inlineTokens=function(e,t){var r,n,i,o=this
void 0===t&&(t=[])
var a,s,u,l=e
if(this.tokens.links){var c=Object.keys(this.tokens.links)
if(c.length>0)for(;null!=(a=this.tokenizer.rules.inline.reflinkSearch.exec(l));)c.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,a.index)+"["+T("a",a[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(a=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,a.index)+"["+T("a",a[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)
for(;null!=(a=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,a.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)
for(;e;)if(s||(u=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((function(n){return!!(r=n.call({lexer:o},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)}))))if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.tag(e))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r)
else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r)
else if(r=this.tokenizer.emStrong(e,l,u))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.autolink(e,B))e=e.substring(r.raw.length),t.push(r)
else if(this.state.inLink||!(r=this.tokenizer.url(e,B))){if(i=e,this.options.extensions&&this.options.extensions.startInline&&function(){var t=1/0,r=e.slice(1),n=void 0
o.options.extensions.startInline.forEach((function(e){"number"==typeof(n=e.call({lexer:this},r))&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}(),r=this.tokenizer.inlineText(i,q))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(u=r.raw.slice(-1)),s=!0,(n=t[t.length-1])&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r)
else if(e){var p="Infinite loop on byte: "+e.charCodeAt(0)
if(this.options.silent){console.error(p)
break}throw new Error(p)}}else e=e.substring(r.raw.length),t.push(r)
return t},n=e,(i=[{key:"rules",get:function(){return{block:F,inline:L}}}])&&r(n,i),Object.defineProperty(n,"prototype",{writable:!1}),e}(),P=function(){function e(e){this.options=e||t.defaults}var r=e.prototype
return r.code=function(e,t,r){var n=(t||"").match(/\S*/)[0]
if(this.options.highlight){var i=this.options.highlight(e,n)
null!=i&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+"\n",n?'<pre><code class="'+this.options.langPrefix+f(n,!0)+'">'+(r?e:f(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:f(e,!0))+"</code></pre>\n"},r.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.html=function(e){return e},r.heading=function(e,t,r,n){return this.options.headerIds?"<h"+t+' id="'+(this.options.headerPrefix+n.slug(r))+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},r.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.list=function(e,t,r){var n=t?"ol":"ul"
return"<"+n+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+n+">\n"},r.listitem=function(e){return"<li>"+e+"</li>\n"},r.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},r.paragraph=function(e){return"<p>"+e+"</p>\n"},r.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},r.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},r.tablecell=function(e,t){var r=t.header?"th":"td"
return(t.align?"<"+r+' align="'+t.align+'">':"<"+r+">")+e+"</"+r+">\n"},r.strong=function(e){return"<strong>"+e+"</strong>"},r.em=function(e){return"<em>"+e+"</em>"},r.codespan=function(e){return"<code>"+e+"</code>"},r.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.del=function(e){return"<del>"+e+"</del>"},r.link=function(e,t,r){if(null===(e=y(this.options.sanitize,this.options.baseUrl,e)))return r
var n='<a href="'+f(e)+'"'
return t&&(n+=' title="'+t+'"'),n+">"+r+"</a>"},r.image=function(e,t,r){if(null===(e=y(this.options.sanitize,this.options.baseUrl,e)))return r
var n='<img src="'+e+'" alt="'+r+'"'
return t&&(n+=' title="'+t+'"'),n+(this.options.xhtml?"/>":">")},r.text=function(e){return e},e}(),I=function(){function e(){}var t=e.prototype
return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,r){return""+r},t.image=function(e,t,r){return""+r},t.br=function(){return""},e}(),j=function(){function e(){this.seen={}}var t=e.prototype
return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var r=e,n=0
if(this.seen.hasOwnProperty(r)){n=this.seen[e]
do{r=e+"-"+ ++n}while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=n,this.seen[r]=0),r},t.slug=function(e,t){void 0===t&&(t={})
var r=this.serialize(e)
return this.getNextSafeSlug(r,t.dryrun)},e}(),M=function(){function e(e){this.options=e||t.defaults,this.options.renderer=this.options.renderer||new P,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new I,this.slugger=new j}e.parse=function(t,r){return new e(r).parse(t)},e.parseInline=function(t,r){return new e(r).parseInline(t)}
var r=e.prototype
return r.parse=function(e,t){void 0===t&&(t=!0)
var r,n,i,o,a,s,u,l,c,p,f,d,g,m,b,v,y,w,D,E="",x=e.length
for(r=0;r<x;r++)if(p=e[r],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type])||!1===(D=this.options.extensions.renderers[p.type].call({parser:this},p))&&["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))switch(p.type){case"space":continue
case"hr":E+=this.renderer.hr()
continue
case"heading":E+=this.renderer.heading(this.parseInline(p.tokens),p.depth,h(this.parseInline(p.tokens,this.textRenderer)),this.slugger)
continue
case"code":E+=this.renderer.code(p.text,p.lang,p.escaped)
continue
case"table":for(l="",u="",o=p.header.length,n=0;n<o;n++)u+=this.renderer.tablecell(this.parseInline(p.header[n].tokens),{header:!0,align:p.align[n]})
for(l+=this.renderer.tablerow(u),c="",o=p.rows.length,n=0;n<o;n++){for(u="",a=(s=p.rows[n]).length,i=0;i<a;i++)u+=this.renderer.tablecell(this.parseInline(s[i].tokens),{header:!1,align:p.align[i]})
c+=this.renderer.tablerow(u)}E+=this.renderer.table(l,c)
continue
case"blockquote":c=this.parse(p.tokens),E+=this.renderer.blockquote(c)
continue
case"list":for(f=p.ordered,d=p.start,g=p.loose,o=p.items.length,c="",n=0;n<o;n++)v=(b=p.items[n]).checked,y=b.task,m="",b.task&&(w=this.renderer.checkbox(v),g?b.tokens.length>0&&"paragraph"===b.tokens[0].type?(b.tokens[0].text=w+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&"text"===b.tokens[0].tokens[0].type&&(b.tokens[0].tokens[0].text=w+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:w}):m+=w),m+=this.parse(b.tokens,g),c+=this.renderer.listitem(m,y,v)
E+=this.renderer.list(c,f,d)
continue
case"html":E+=this.renderer.html(p.text)
continue
case"paragraph":E+=this.renderer.paragraph(this.parseInline(p.tokens))
continue
case"text":for(c=p.tokens?this.parseInline(p.tokens):p.text;r+1<x&&"text"===e[r+1].type;)c+="\n"+((p=e[++r]).tokens?this.parseInline(p.tokens):p.text)
E+=t?this.renderer.paragraph(c):c
continue
default:var A='Token with "'+p.type+'" type was not found.'
if(this.options.silent)return void console.error(A)
throw new Error(A)}else E+=D||""
return E},r.parseInline=function(e,t){t=t||this.renderer
var r,n,i,o="",a=e.length
for(r=0;r<a;r++)if(n=e[r],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type])||!1===(i=this.options.extensions.renderers[n.type].call({parser:this},n))&&["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type))switch(n.type){case"escape":case"text":o+=t.text(n.text)
break
case"html":o+=t.html(n.text)
break
case"link":o+=t.link(n.href,n.title,this.parseInline(n.tokens,t))
break
case"image":o+=t.image(n.href,n.title,n.text)
break
case"strong":o+=t.strong(this.parseInline(n.tokens,t))
break
case"em":o+=t.em(this.parseInline(n.tokens,t))
break
case"codespan":o+=t.codespan(n.text)
break
case"br":o+=t.br()
break
case"del":o+=t.del(this.parseInline(n.tokens,t))
break
default:var s='Token with "'+n.type+'" type was not found.'
if(this.options.silent)return void console.error(s)
throw new Error(s)}else o+=i||""
return o},e}()
function U(e,t,r){if(null==e)throw new Error("marked(): input parameter is undefined or null")
if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected")
if("function"==typeof t&&(r=t,t=null),S(t=k({},U.defaults,t||{})),r){var n,i=t.highlight
try{n=R.lex(e,t)}catch(e){return r(e)}var o=function(e){var o
if(!e)try{t.walkTokens&&U.walkTokens(n,t.walkTokens),o=M.parse(n,t)}catch(t){e=t}return t.highlight=i,e?r(e):r(null,o)}
if(!i||i.length<3)return o()
if(delete t.highlight,!n.length)return o()
var a=0
return U.walkTokens(n,(function(e){"code"===e.type&&(a++,setTimeout((function(){i(e.text,e.lang,(function(t,r){if(t)return o(t)
null!=r&&r!==e.text&&(e.text=r,e.escaped=!0),0==--a&&o()}))}),0))})),void(0===a&&o())}try{var s=R.lex(e,t)
return t.walkTokens&&U.walkTokens(s,t.walkTokens),M.parse(s,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+f(e.message+"",!0)+"</pre>"
throw e}}U.options=U.setOptions=function(e){var r
return k(U.defaults,e),r=U.defaults,t.defaults=r,U},U.getDefaults=o,U.defaults=t.defaults,U.use=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
var n,i=k.apply(void 0,[{}].concat(t)),o=U.defaults.extensions||{renderers:{},childTokens:{}}
t.forEach((function(e){if(e.extensions&&(n=!0,e.extensions.forEach((function(e){if(!e.name)throw new Error("extension name required")
if(e.renderer){var t=o.renderers?o.renderers[e.name]:null
o.renderers[e.name]=t?function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i]
var o=e.renderer.apply(this,n)
return!1===o&&(o=t.apply(this,n)),o}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'")
o[e.level]?o[e.level].unshift(e.tokenizer):o[e.level]=[e.tokenizer],e.start&&("block"===e.level?o.startBlock?o.startBlock.push(e.start):o.startBlock=[e.start]:"inline"===e.level&&(o.startInline?o.startInline.push(e.start):o.startInline=[e.start]))}e.childTokens&&(o.childTokens[e.name]=e.childTokens)}))),e.renderer&&function(){var t=U.defaults.renderer||new P,r=function(r){var n=t[r]
t[r]=function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a]
var s=e.renderer[r].apply(t,o)
return!1===s&&(s=n.apply(t,o)),s}}
for(var n in e.renderer)r(n)
i.renderer=t}(),e.tokenizer&&function(){var t=U.defaults.tokenizer||new O,r=function(r){var n=t[r]
t[r]=function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a]
var s=e.tokenizer[r].apply(t,o)
return!1===s&&(s=n.apply(t,o)),s}}
for(var n in e.tokenizer)r(n)
i.tokenizer=t}(),e.walkTokens){var t=U.defaults.walkTokens
i.walkTokens=function(r){e.walkTokens.call(this,r),t&&t.call(this,r)}}n&&(i.extensions=o),U.setOptions(i)}))},U.walkTokens=function(e,t){for(var r,n=function(){var e=r.value
switch(t.call(U,e),e.type){case"table":for(var n,o=i(e.header);!(n=o()).done;){var a=n.value
U.walkTokens(a.tokens,t)}for(var s,u=i(e.rows);!(s=u()).done;)for(var l,c=i(s.value);!(l=c()).done;){var p=l.value
U.walkTokens(p.tokens,t)}break
case"list":U.walkTokens(e.items,t)
break
default:U.defaults.extensions&&U.defaults.extensions.childTokens&&U.defaults.extensions.childTokens[e.type]?U.defaults.extensions.childTokens[e.type].forEach((function(r){U.walkTokens(e[r],t)})):e.tokens&&U.walkTokens(e.tokens,t)}},o=i(e);!(r=o()).done;)n()},U.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null")
if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected")
S(t=k({},U.defaults,t||{}))
try{var r=R.lexInline(e,t)
return t.walkTokens&&U.walkTokens(r,t.walkTokens),M.parseInline(r,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+f(e.message+"",!0)+"</pre>"
throw e}},U.Parser=M,U.parser=M.parse,U.Renderer=P,U.TextRenderer=I,U.Lexer=R,U.lexer=R.lex,U.Tokenizer=O,U.Slugger=j,U.parse=U
var z=U.options,H=U.setOptions,V=U.use,$=U.walkTokens,G=U.parseInline,Q=U,Z=M.parse,W=R.lex
t.Lexer=R,t.Parser=M,t.Renderer=P,t.Slugger=j,t.TextRenderer=I,t.Tokenizer=O,t.getDefaults=o,t.lexer=W,t.marked=U,t.options=z,t.parse=Q,t.parseInline=G,t.parser=Z,t.setOptions=H,t.use=V,t.walkTokens=$},4268:e=>{"use strict"
e.exports=JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}')},6931:e=>{"use strict"
e.exports=JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')},4324:e=>{"use strict"
e.exports=JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}')},3013:e=>{"use strict"
e.exports=JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}')}}])
