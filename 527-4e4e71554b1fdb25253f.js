(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{2024:function(t,e,n){"use strict";var u=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=u(n(21)),o=u(n(25)),a=u(n(31)),s=u(n(28)),i=u(n(29)),d=u(n(30)),r=u(n(0)),f=u(n(338));function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,u=(0,d.default)(t);if(e){var l=(0,d.default)(this).constructor;n=Reflect.construct(u,arguments,l)}else n=u.apply(this,arguments);return(0,i.default)(this,n)}}var h=function(t){(0,s.default)(n,t);var e=c(n);function n(t){var u;return(0,l.default)(this,n),(u=e.call(this,t)).handleButtonClick=u.handleButtonClick.bind((0,a.default)(u)),u.handleRequestClose=u.handleRequestClose.bind((0,a.default)(u)),u.setButtonNode=u.setButtonNode.bind((0,a.default)(u)),u.getButtonNode=u.getButtonNode.bind((0,a.default)(u)),u.state={open:!1},u}return(0,o.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement("div",null,"This menu should have a small height. And all items should be visible without scrolling."),r.default.createElement(f.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},r.default.createElement(f.default.Item,{text:"Default 1",key:"1",className:"TestFirstItem"}),r.default.createElement(f.default.Item,{text:"Default 2",key:"2",className:"TestLastItem"})),r.default.createElement("button",{type:"button",id:"small-menu-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"))}}]),n}(r.default.Component);e.default=h}}]);