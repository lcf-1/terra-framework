(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{1049:function(e,t){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],a=n.join(","),o="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function l(e,t){t=t||{};var n,l,r,u=[],c=[],f=e.querySelectorAll(a);for(t.includeContainer&&o.call(e,a)&&(f=Array.prototype.slice.apply(f)).unshift(e),n=0;n<f.length;n++)i(l=f[n])&&(0===(r=d(l))?u.push(l):c.push({documentOrder:n,tabIndex:r,node:l}));return c.sort(s).map((function(e){return e.node})).concat(u)}function i(e){return!(!r(e)||function(e){return function(e){return c(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||d(e)<0)}function r(e){return!(e.disabled||function(e){return c(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}l.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,a)&&i(e)},l.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,u)&&r(e)};var u=n.concat("iframe").join(",");function d(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function s(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function c(e){return"INPUT"===e.tagName}e.exports=l},1076:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"LayoutSlidePanel-module__clinical-lowlight-theme___1DbJt","orion-fusion-theme":"LayoutSlidePanel-module__orion-fusion-theme___21k0Z","content-container":"LayoutSlidePanel-module__content-container___wL8V1","layout-slide-panel":"LayoutSlidePanel-module__layout-slide-panel___3kfn4",content:"LayoutSlidePanel-module__content___2H_Kc",panel:"LayoutSlidePanel-module__panel___AuDMs","is-animated":"LayoutSlidePanel-module__is-animated___WfnE6","is-open":"LayoutSlidePanel-module__is-open___2pF5A","is-tiny":"LayoutSlidePanel-module__is-tiny___fTz_g","is-small":"LayoutSlidePanel-module__is-small____cSTP","is-overlay":"LayoutSlidePanel-module__is-overlay___2q9p2","is-squish":"LayoutSlidePanel-module__is-squish___3G_Gf","main-container":"LayoutSlidePanel-module__main-container___SUVUf"}},1108:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(19)),l=a(n(24)),i=a(n(21)),r=a(n(25)),u=a(n(31)),d=a(n(28)),s=a(n(29)),c=a(n(30)),f=a(n(0)),p=a(n(2)),m=a(n(10)),_=a(n(5)),h=a(n(7)),y=a(n(228)),v=a(n(229)),g=a(n(1049)),b=a(n(1076));function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,s.default)(this,n)}}var E=_.default.bind(b.default),N={isAnimated:p.default.bool,isOpen:p.default.bool,isToggleEnabled:p.default.bool,children:p.default.element,panelBehavior:p.default.oneOf(["overlay","squish"]),panelContent:p.default.node,size:p.default.string.isRequired,onToggle:p.default.func,toggleText:p.default.string},P=function(e){(0,d.default)(n,e);var t=T(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).setPanelNode=a.setPanelNode.bind((0,u.default)(a)),a.handleTransitionEnd=a.handleTransitionEnd.bind((0,u.default)(a)),a.preparePanelForTransition=a.preparePanelForTransition.bind((0,u.default)(a)),a.isHidden=!e.isOpen,a}return(0,r.default)(n,[{key:"componentDidMount",value:function(){document.createElement("main"),this.panelNode&&this.panelNode.addEventListener("transitionend",this.handleTransitionEnd)}},{key:"componentDidUpdate",value:function(){this.lastIsOpen=this.props.isOpen}},{key:"componentWillUnmount",value:function(){this.panelNode&&this.panelNode.removeEventListener("transitionend",this.handleTransitionEnd)}},{key:"handleTransitionEnd",value:function(){!this.props.isOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","true"),this.isHidden=!0,document.querySelector("button[data-application-header-toggle]")?document.querySelector("button[data-application-header-toggle]").focus():(0,g.default)(document.querySelector("[data-terra-layout-main]"))[0]&&(0,g.default)(document.querySelector("[data-terra-layout-main]"))[0].focus())}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"preparePanelForTransition",value:function(){this.props.isOpen&&!this.lastIsOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","false"),this.isHidden=!1,(0,g.default)(this.panelNode)[0]&&(0,g.default)(this.panelNode)[0].focus())}},{key:"render",value:function(){var e=this.props,t=e.isAnimated,n=e.isOpen,a=(e.isToggleEnabled,e.children),i=e.panelBehavior,r=e.panelContent,u=e.size,d=e.onToggle,s=(e.toggleText,(0,l.default)(e,["isAnimated","isOpen","isToggleEnabled","children","panelBehavior","panelContent","size","onToggle","toggleText"]));this.preparePanelForTransition();var c="tiny"===u,p="small"===u,_=c||p,h=!!_||"overlay"===i,g=n&&h,b=_?"dark":"clear",T=this.context,N=(0,m.default)(E("layout-slide-panel",{"is-open":n},{"is-overlay":h},{"is-squish":!h},T.className),s.className),P=E("panel",{"is-tiny":c},{"is-small":p},{"is-animated":t&&h&&!!r});return f.default.createElement("div",(0,o.default)({},s,{className:N}),f.default.createElement("div",{className:P,"aria-hidden":this.isHidden?"true":"false",ref:this.setPanelNode},r),f.default.createElement(v.default,{className:E("content")},f.default.createElement(y.default,{isRelativeToContainer:!0,onRequestClose:d,isOpen:g,backgroundStyle:b,zIndex:"6000"}),f.default.createElement("main",{role:"main","data-terra-layout-main":!0,className:E("main-container")},a)))}}]),n}(f.default.Component);P.propTypes=N,P.defaultProps={isAnimated:!1,isOpen:!1,isToggleEnabled:!1,panelBehavior:"overlay"},P.contextType=h.default;var S=P;t.default=S},1184:function(e,t,n){"use strict";n.r(t),t.default={"panel-content":"TestLayoutCommon-module__panel-content___9BeP2","layout-slide-panel-content":"TestLayoutCommon-module__layout-slide-panel-content___1rEZX","content-wrapper":"TestLayoutCommon-module__content-wrapper___uKeNv","layout-test":"TestLayoutCommon-module__layout-test___3hJLT"}},2015:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(21)),l=a(n(25)),i=a(n(31)),r=a(n(28)),u=a(n(29)),d=a(n(30)),s=a(n(0)),c=a(n(5)),f=a(n(1108)),p=a(n(1184));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var _=c.default.bind(p.default),h=function(e){(0,r.default)(n,e);var t=m(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).toggleMenu=a.toggleMenu.bind((0,i.default)(a)),a.state={isOpen:!1},a}return(0,l.default)(n,[{key:"toggleMenu",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){return s.default.createElement("div",{className:_("content-wrapper")},s.default.createElement(f.default,{panelContent:s.default.createElement("div",{className:_("panel-content")},s.default.createElement("button",{type:"button",id:"test-toggle-2",onClick:this.toggleMenu},"toggle")),panelBehavior:"overlay",size:"medium",isOpen:this.state.isOpen,isToggleEnabled:!0,isAnimated:!0,onToggle:function(){},toggleText:"toggle text"},s.default.createElement("div",{className:_("layout-slide-panel-content")},s.default.createElement("button",{type:"button",id:"test-toggle-1",onClick:this.toggleMenu},"toggle"))))}}]),n}(s.default.Component);t.default=h}}]);