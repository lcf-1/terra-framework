(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1008:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(n(0)),u=f(n(2)),i=f(n(10)),a=f(n(5)),l=f(n(7)),c=f(n(993));function f(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=a.default.bind(c.default),_={defaultValue:u.default.oneOfType([u.default.string,u.default.number]),disabled:u.default.bool,isIncomplete:u.default.bool,isInvalid:u.default.bool,onBlur:u.default.func,onChange:u.default.func,onFocus:u.default.func,onInput:u.default.func,name:u.default.string,pattern:u.default.string,refCallback:u.default.func,required:u.default.bool,type:u.default.string,value:u.default.oneOfType([u.default.string,u.default.number]),ariaLabel:u.default.string},j={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,u=v(a);function a(){return m(this,a),u.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,u=t.isIncomplete,a=t.isInvalid,l=t.onBlur,c=t.onChange,f=t.onFocus,m=t.onInput,h=t.name,b=t.pattern,v=t.refCallback,w=t.required,O=t.type,_=t.ariaLabel,j=t.value,P=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},y(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"])),T=this.context,I=(0,i.default)(g("form-input",{"form-error":a},{"form-incomplete":u&&w&&!a},T.className),P.className);return P&&Object.prototype.hasOwnProperty.call(P,"aria-label")?e=_||P["aria-label"]:_&&(e=_),P["aria-label"]=e,w&&(P["aria-required"]="true"),void 0!==j?P.value=j:void 0!==n&&(P.defaultValue=n),P.placeholder&&(P.placeholder=null),o.default.createElement("input",s({},P,{ref:function(e){v&&v(e)},name:h,type:O,pattern:b,onBlur:l,onChange:c,onFocus:f,onInput:m,disabled:r,required:w,className:I}))}}])&&h(t.prototype,n),r&&h(t,r),a}(o.default.Component);P.propTypes=_,P.defaultProps=j,P.contextType=l.default,P.isInput=!0;var T=P;t.default=T},1021:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"TimeInput-test-module__content-wrapper___E1Vtp"}},2120:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(21)),u=r(n(25)),i=r(n(28)),a=r(n(29)),l=r(n(30)),c=r(n(0)),f=r(n(5)),s=r(n(1006)),p=r(n(1021));function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.default)(e);if(t){var o=(0,l.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,a.default)(this,n)}}var y=f.default.bind(p.default),m=function(e){(0,i.default)(n,e);var t=d(n);function n(e){var r;return(0,o.default)(this,n),r=t.call(this,e),window.ontouchstart||(r.resetontouchstart=!0,window.ontouchstart="true"),r}return(0,u.default)(n,[{key:"componentDidMount",value:function(){window.ontouchstart||(this.resetontouchstart=!0,window.ontouchstart="true")}},{key:"componentWillUnmount",value:function(){this.resetontouchstart&&delete window.ontouchstart}},{key:"render",value:function(){return c.default.createElement("div",{className:y("content-wrapper")},c.default.createElement(s.default,{id:"timeInput",name:"time-input",value:"10:23",isInvalid:!0}))}}]),n}(c.default.Component);t.default=m},993:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2m4Lc","orion-fusion-theme":"Input-module__orion-fusion-theme___1P-S4","form-input":"Input-module__form-input___3oe9F","form-error":"Input-module__form-error___3tyh6","form-incomplete":"Input-module__form-incomplete___2OzNB"}},994:function(e,t){var n,r,o=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:u}catch(e){n=u}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,c=[],f=!1,s=-1;function p(){f&&l&&(f=!1,l.length?c=l.concat(c):s=-1,c.length&&d())}function d(){if(!f){var e=a(p);f=!0;for(var t=c.length;t;){for(l=c,c=[];++s<t;)l&&l[s].run();s=-1,t=c.length}l=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new y(e,t)),1!==c.length||f||a(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);