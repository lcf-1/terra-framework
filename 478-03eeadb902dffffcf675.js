(window.webpackJsonp=window.webpackJsonp||[]).push([[478],{1772:function(t,e,n){"use strict";n.r(e),e.default={"test-popup-area":"BoundedWidthPopup-test-module__test-popup-area___2KL0F","popup-text":"BoundedWidthPopup-test-module__popup-text___2veI5"}},2071:function(t,e,n){"use strict";var o=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(21)),a=o(n(25)),d=o(n(31)),r=o(n(28)),s=o(n(29)),i=o(n(30)),l=o(n(0)),c=o(n(5)),f=o(n(132)),p=o(n(1772));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=(0,i.default)(t);if(e){var u=(0,i.default)(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return(0,s.default)(this,n)}}var N=c.default.bind(p.default),v=function(t){(0,r.default)(n,t);var e=h(n);function n(t){var o;return(0,u.default)(this,n),(o=e.call(this,t)).handleButtonClick=o.handleButtonClick.bind((0,d.default)(o)),o.handleRequestClose=o.handleRequestClose.bind((0,d.default)(o)),o.setButtonNode=o.setButtonNode.bind((0,d.default)(o)),o.getButtonNode=o.getButtonNode.bind((0,d.default)(o)),o.setParentNode=o.setParentNode.bind((0,d.default)(o)),o.getParentNode=o.getParentNode.bind((0,d.default)(o)),o.state={open:!0},o}return(0,a.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(t){this.parentNode=t}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return l.default.createElement("div",{id:"test-popup-area",className:N("test-popup-area"),ref:this.setParentNode},l.default.createElement(f.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"120",contentWidth:"640",isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},l.default.createElement("p",{className:N("popup-text")},"This popup is bounded by width.")),l.default.createElement("button",{type:"button",id:"bounded-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Bounded Width"))}}]),n}(l.default.Component);e.default=v}}]);