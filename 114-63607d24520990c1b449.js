(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1064:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(19)),l=a(n(24)),i=a(n(0)),r=a(n(221)),u=a(n(2)),d=a(n(10)),s=a(n(5)),c=a(n(7)),m=a(n(1072)),p=s.default.bind(m.default),f={320:320,640:640,960:960,1120:1120,1280:1280,1600:1600},h={ariaLabel:u.default.string.isRequired,header:u.default.element.isRequired,footer:u.default.element.isRequired,children:u.default.node,onRequestClose:u.default.func.isRequired,isOpen:u.default.bool,width:u.default.oneOf(Object.keys(f)),closeOnOutsideClick:u.default.bool,rootSelector:u.default.string},g=function(e){var t=e.header,n=e.footer,a=e.children,u=e.onRequestClose,s=e.isOpen,m=e.ariaLabel,h=e.width,g=e.closeOnOutsideClick,b=e.rootSelector,x=(0,l.default)(e,["header","footer","children","onRequestClose","isOpen","ariaLabel","width","closeOnOutsideClick","rootSelector"]),v=i.default.useContext(c.default);if(!s)return null;var O=["dialog-modal-wrapper",v.className];return h in f?O.push("width-".concat(f[h])):O.push("width-1120"),i.default.createElement(r.default,{ariaLabel:m,role:"dialog",classNameModal:p(O),isOpen:s,onRequestClose:u,zIndex:"7000",closeOnOutsideClick:g,rootSelector:b},i.default.createElement("div",(0,o.default)({},x,{className:(0,d.default)(p("dialog-modal-inner-wrapper"),x.className)}),i.default.createElement("div",{className:p("dialog-modal-container")},i.default.createElement("div",null,t),i.default.createElement("div",{className:p("dialog-modal-body")},a),i.default.createElement("div",null,n))))};g.propTypes=h,g.defaultProps={children:null,isOpen:!1,width:"1120",closeOnOutsideClick:!1,rootSelector:"#root"};var b=g;t.default=b},1072:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"DialogModal-module__clinical-lowlight-theme___SaKc0","orion-fusion-theme":"DialogModal-module__orion-fusion-theme___3o9Mk","dialog-modal-wrapper":"DialogModal-module__dialog-modal-wrapper___3sPcp","width-320":"DialogModal-module__width-320___1F-q-","width-480":"DialogModal-module__width-480___2t4Xb","width-560":"DialogModal-module__width-560___3aETX","width-640":"DialogModal-module__width-640___13ULp","width-800":"DialogModal-module__width-800___29VLV","width-960":"DialogModal-module__width-960___2zV1i","width-1120":"DialogModal-module__width-1120___ybLhM","width-1280":"DialogModal-module__width-1280___1ysQr","width-1440":"DialogModal-module__width-1440___1jbz7","width-1600":"DialogModal-module__width-1600___L_2gu","width-1760":"DialogModal-module__width-1760___2WapK","width-1920":"DialogModal-module__width-1920___2CmC6","dialog-modal-inner-wrapper":"DialogModal-module__dialog-modal-inner-wrapper___2YfG7","dialog-modal-container":"DialogModal-module__dialog-modal-container___2-s0w","dialog-modal-header":"DialogModal-module__dialog-modal-header___3g6p2","dialog-modal-footer":"DialogModal-module__dialog-modal-footer___fEXtA","dialog-modal-body":"DialogModal-module__dialog-modal-body___SHhUf"}},1151:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=n.n(a),l=n(988),i=n.n(l),r=function(e){var t=e.url;return o.a.createElement(i.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-dialog-modal",name:"terra-dialog-modal",version:"3.59.0",url:t})}},1598:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(21)),l=a(n(25)),i=a(n(31)),r=a(n(28)),u=a(n(29)),d=a(n(30)),s=a(n(0)),c=a(n(46)),m=a(n(85)),p=a(n(227)),f=a(n(1064));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var g=function(e){(0,r.default)(n,e);var t=h(n);function n(){var e;return(0,o.default)(this,n),(e=t.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,l.default)(n,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."];return s.default.createElement("div",null,s.default.createElement(f.default,{ariaLabel:"Default Dialog Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement(m.default,{title:"Action Header used here",onClose:this.handleCloseModal}),footer:s.default.createElement(p.default,{start:"Action Footer used here"})},s.default.createElement("p",null,e)),s.default.createElement(c.default,{text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),n}(s.default.Component);t.default=g},1599:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(21)),l=a(n(25)),i=a(n(31)),r=a(n(28)),u=a(n(29)),d=a(n(30)),s=a(n(0)),c=a(n(46)),m=a(n(85)),p=a(n(227)),f=a(n(1064));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var g=function(e){(0,r.default)(n,e);var t=h(n);function n(){var e;return(0,o.default)(this,n),(e=t.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,l.default)(n,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."];return s.default.createElement("div",null,s.default.createElement(f.default,{ariaLabel:"Dialog Modal With Long Text",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement(m.default,{title:"Action Header used here",onClose:this.handleCloseModal}),footer:s.default.createElement(p.default,{start:"Action Footer used here"}),width:"960"},s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e)),s.default.createElement(c.default,{text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),n}(s.default.Component);t.default=g},1600:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(21)),l=a(n(25)),i=a(n(31)),r=a(n(28)),u=a(n(29)),d=a(n(30)),s=a(n(0)),c=a(n(46)),m=a(n(5)),p=a(n(1064)),f=a(n(1601));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var g=m.default.bind(f.default),b=function(e){(0,r.default)(n,e);var t=h(n);function n(){var e;return(0,o.default)(this,n),(e=t.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,l.default)(n,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."];return s.default.createElement("div",null,s.default.createElement(p.default,{ariaLabel:"Dialog Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement("div",{className:g("header")},"Custom Header",s.default.createElement(c.default,{id:"close-dialog-modal",text:"Close",className:g("close-button"),onClick:this.handleCloseModal})),footer:s.default.createElement("div",{className:g("footer")},"Custom Footer")},s.default.createElement("p",null,e)),s.default.createElement(c.default,{text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),n}(s.default.Component);t.default=b},1601:function(e,t,n){"use strict";n.r(t),t.default={header:"DialogModalWithCustomHeaderAndCustomFooter-module__header___1JvDL",footer:"DialogModalWithCustomHeaderAndCustomFooter-module__footer___DKv_E","close-button":"DialogModalWithCustomHeaderAndCustomFooter-module__close-button___2kOEH"}},2150:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var a=n(19),o=n.n(a),l=n(24),i=n.n(l),r=n(0),u=n.n(r),d=n(335),s=n(1151),c=n(999),m=n.n(c),p=function(){return Object(d.mdx)(m.a,{rows:[{name:"ariaLabel",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"Aria Label of the dialog modal."))}return t.isMDXComponent=!0,t({})}},{name:"header",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"Header of the dialog modal."))}return t.isMDXComponent=!0,t({})}},{name:"footer",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"Footer of the dialog modal."))}return t.isMDXComponent=!0,t({})}},{name:"children",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"Contents of the dialog modal."))}return t.isMDXComponent=!0,t({})}},{name:"onRequestClose",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"Callback function indicating a close condition was met."))}return t.isMDXComponent=!0,t({})}},{name:"isOpen",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"Toggle to show dialog modal or not."))}return t.isMDXComponent=!0,t({})}},{name:"width",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"enum"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "320",\n "640",\n "960",\n "1120",\n "1280",\n "1600"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'1120'",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"Width of the dialog modal. Allows one of ",Object(d.mdx)("inlineCode",{parentName:"p"},"320"),", ",Object(d.mdx)("inlineCode",{parentName:"p"},"640"),", ",Object(d.mdx)("inlineCode",{parentName:"p"},"960"),", ",Object(d.mdx)("inlineCode",{parentName:"p"},"1120"),", ",Object(d.mdx)("inlineCode",{parentName:"p"},"1280"),", or ",Object(d.mdx)("inlineCode",{parentName:"p"},"1600"),"."),Object(d.mdx)("p",null,Object(d.mdx)("em",{parentName:"p"},"(Uses same sizes as terra-modal-manager: tiny:320, small:640, medium:960, default:1120, large:1280, huge:1600)")))}return t.isMDXComponent=!0,t({})}},{name:"closeOnOutsideClick",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"If set to true, the modal will close when a mouse click is triggered outside the modal."))}return t.isMDXComponent=!0,t({})}},{name:"rootSelector",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'#root'",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(d.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"Used to select the root mount DOM node. This is used to help prevent focus from shifting outside of the DialogModal when it is opened."))}return t.isMDXComponent=!0,t({})}}]})},f=n(1598),h=n.n(f),g={};function b(e){var t=e.components,n=i()(e,["components"]);return Object(d.mdx)("wrapper",o()({},g,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport ActionHeader from 'terra-action-header';\nimport ActionFooter from 'terra-action-footer';\nimport DialogModal from 'terra-dialog-modal';\n\nclass DefaultDialogModal extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    const paraOne = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',\n      'Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.',\n      'Integer congue feugiat ultricies.',\n      ' Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.',\n      'Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.',\n      ' Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.',\n      'Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.',\n      'Nam vehicula, arcu vitae egestas porttitor,',\n      'turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.'];\n    return (\n      <div>\n        <DialogModal\n          ariaLabel=\"Default Dialog Modal\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          header={<ActionHeader title=\"Action Header used here\" onClose={this.handleCloseModal} />}\n          footer={<ActionFooter start=\"Action Footer used here\" />}\n        >\n          <p>{paraOne}</p>\n        </DialogModal>\n        <Button text=\"Trigger Dialog Modal\" onClick={this.handleOpenModal} />\n      </div>\n    );\n  }\n}\n\nexport default DefaultDialogModal;\n\n")))}b.isMDXComponent=!0;var x=n(990),v=n.n(x),O=function(e){var t=e.title,n=e.description,a=e.isExpanded;return u.a.createElement(v.a,{title:t||"Default Dialog Modal",description:n,example:u.a.createElement(h.a,null),exampleSrc:u.a.createElement(b,null),isExpanded:a})},M=n(1599),D=n.n(M),C={};function j(e){var t=e.components,n=i()(e,["components"]);return Object(d.mdx)("wrapper",o()({},C,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport ActionHeader from 'terra-action-header';\nimport ActionFooter from 'terra-action-footer';\nimport DialogModal from 'terra-dialog-modal';\n\nclass DialogModalWithLongText extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    const text = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',\n      'Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.',\n      'Integer congue feugiat ultricies.',\n      ' Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.',\n      'Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.',\n      ' Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.',\n      'Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.',\n      'Nam vehicula, arcu vitae egestas porttitor,',\n      'turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.'];\n    return (\n      <div>\n        <DialogModal\n          ariaLabel=\"Dialog Modal With Long Text\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          header={<ActionHeader title=\"Action Header used here\" onClose={this.handleCloseModal} />}\n          footer={<ActionFooter start=\"Action Footer used here\" />}\n          width=\"960\"\n        >\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n        </DialogModal>\n        <Button text=\"Trigger Dialog Modal\" onClick={this.handleOpenModal} />\n      </div>\n    );\n  }\n}\n\nexport default DialogModalWithLongText;\n\n")))}j.isMDXComponent=!0;var _=function(e){var t=e.title,n=e.description,a=e.isExpanded;return u.a.createElement(v.a,{title:t||"Dialog Modal With Long Text",description:n,example:u.a.createElement(D.a,null),exampleSrc:u.a.createElement(j,null),isExpanded:a})},y=n(1600),w=n.n(y),N={};function E(e){var t=e.components,n=i()(e,["components"]);return Object(d.mdx)("wrapper",o()({},N,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport classNames from 'classnames/bind';\nimport DialogModal from 'terra-dialog-modal';\nimport styles from './DialogModalWithCustomHeaderAndCustomFooter.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass DialogModalWithCustomHeaderAndCustomFooter extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    const text = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',\n      'Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.',\n      'Integer congue feugiat ultricies.',\n      ' Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.',\n      'Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.',\n      ' Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.',\n      'Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.',\n      'Nam vehicula, arcu vitae egestas porttitor,',\n      'turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.'];\n    return (\n      <div>\n        <DialogModal\n          ariaLabel=\"Dialog Modal\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          header={(\n            <div className={cx('header')}>\n              Custom Header\n              <Button id=\"close-dialog-modal\" text=\"Close\" className={cx('close-button')} onClick={this.handleCloseModal} />\n            </div>\n)}\n          footer={<div className={cx('footer')}>Custom Footer</div>}\n        >\n          <p>{text}</p>\n        </DialogModal>\n        <Button text=\"Trigger Dialog Modal\" onClick={this.handleOpenModal} />\n      </div>\n    );\n  }\n}\n\nexport default DialogModalWithCustomHeaderAndCustomFooter;\n\n")))}E.isMDXComponent=!0;var L={};function T(e){var t=e.components,n=i()(e,["components"]);return Object(d.mdx)("wrapper",o()({},L,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .header,\n  .footer {\n    border: 2px dashed #4e832b;\n    color: #4e832b;\n    height: 38px;\n    line-height: 2;\n    padding: 2px 2px 2px 5px;\n  }\n\n  .close-button {\n    float: right;\n    margin-left: 10px;\n  }\n}\n\n")))}T.isMDXComponent=!0;var X=function(e){var t=e.title,n=e.description,a=e.isExpanded;return u.a.createElement(v.a,{title:t||"Dialog Modal With Custom Header And Custom Footer",description:n,example:u.a.createElement(w.a,null),exampleCssSrc:u.a.createElement(T,null),exampleSrc:u.a.createElement(E,null),isExpanded:a})},q={};function S(e){var t=e.components,n=i()(e,["components"]);return Object(d.mdx)("wrapper",o()({},q,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)(s.a,{mdxType:"Badge"}),Object(d.mdx)("h1",{id:"terra-dialog-modal"},"Terra Dialog Modal"),Object(d.mdx)("p",null,"The Dialog Modal allows for disclosing accessible modals with dynamic heights. The components is placed at an 7000 z-index. The dialog modal should not be disclosed from the terra-modal-manager component. If you need to display another modal while using the modal manager, use the modal stacking functionality provided in terra-modal-manager or the terra-notification-dialog."),Object(d.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Install with ",Object(d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"npm install terra-dialog-modal"))))),Object(d.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(d.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(d.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"react"),Object(d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),Object(d.mdx)("h2",{id:"component-features"},"Component Features"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),Object(d.mdx)("h2",{id:"examples"},"Examples"),Object(d.mdx)(O,{title:"Default Dialog Modal",mdxType:"DefaultDialogModal"}),Object(d.mdx)(_,{title:"Dialog Modal With Long Text",mdxType:"DialogModalWithLongText"}),Object(d.mdx)(X,{title:"Dialog Modal With Custom Header and Custom Footer",mdxType:"DialogModalWithCustomHeaderAndCustomFooter"}),Object(d.mdx)("h2",{id:"dialog-modal-props-table"},"Dialog Modal Props table"),Object(d.mdx)(p,{mdxType:"DialogModalPropsTable"}))}S.isMDXComponent=!0}}]);