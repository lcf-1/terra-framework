(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1030:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(19)),o=a(n(24)),l=a(n(0)),i=a(n(2)),d=a(n(10)),m=a(n(5)),u=a(n(7)),p=n(9),s=a(n(1031)),c=m.default.bind(s.default),f={extensions:i.default.element,logo:i.default.element,intl:i.default.shape({formatMessage:i.default.func}).isRequired,navigation:i.default.element,toggle:i.default.element,utilities:i.default.element},x=function(e){var t,n,a,i,m,p=e.extensions,s=e.logo,f=e.navigation,x=e.intl,b=e.toggle,v=e.utilities,y=(0,o.default)(e,["extensions","logo","navigation","intl","toggle","utilities"]),g=l.default.useContext(u.default),_=(0,d.default)(c("header","fill",g.className),y.className);s&&(t=l.default.createElement("div",{className:c("fit","start","logo")},s)),f&&(n=l.default.createElement("nav",{role:"navigation",className:c("fill")},f)),p&&(a=l.default.createElement("div",{className:c("fit","end","extensions")},p)),v&&(i=l.default.createElement("div",{className:c("fit","end","utilities")},v)),b&&(m=l.default.createElement("div",{className:c("fit")},b));var h,j=l.default.createElement("div",{className:c("fill","header-inner")},n,a),O=l.default.createElement("button",{type:"button",onClick:function(){var e=document.querySelector(["[data-terra-layout-main]"]);e&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},className:c("skip-content")},x.formatMessage({id:"Terra.ApplicationHeaderLayout.SkipToContent"}));return(j||t||i)&&(h=l.default.createElement("div",{className:c("fill","header-body")},O,t,j,i)),l.default.createElement("div",(0,r.default)({},y,{className:_}),m,h)};x.propTypes=f;var b=(0,p.injectIntl)(x);t.default=b},1031:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeaderLayout-module__clinical-lowlight-theme___2bNAu","orion-fusion-theme":"ApplicationHeaderLayout-module__orion-fusion-theme___1_WJx",fit:"ApplicationHeaderLayout-module__fit___156Sk",fill:"ApplicationHeaderLayout-module__fill___xK-CU",start:"ApplicationHeaderLayout-module__start___3pTQW",end:"ApplicationHeaderLayout-module__end___3gbC_","header-inner":"ApplicationHeaderLayout-module__header-inner___2ay7A",logo:"ApplicationHeaderLayout-module__logo___3U4kT",utilities:"ApplicationHeaderLayout-module__utilities___1Wf5t",extensions:"ApplicationHeaderLayout-module__extensions___1xUww","header-body":"ApplicationHeaderLayout-module__header-body___4JmFD","skip-content":"ApplicationHeaderLayout-module__skip-content___1JtRT"}},1140:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o=n(988),l=n.n(o),i=function(e){var t=e.url;return r.a.createElement(l.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-header-layout",name:"terra-application-header-layout",version:"3.32.0",url:t})}},1141:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(5)),l=a(n(2)),i=a(n(1476)),d=o.default.bind(i.default),m={text:l.default.string,size:l.default.string},u=function(e){var t=e.text,n=e.size;return r.default.createElement("div",{className:d("wrapper1-".concat(n))},r.default.createElement("div",{className:d("wrapper2")},r.default.createElement("div",{className:d("wrapper3")},r.default.createElement("h3",null,t))))};u.propTypes=m,u.defaultProps={text:"PlaceHolder",size:"tiny"};var p=u;t.default=p},1474:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(5)),l=a(n(347)),i=a(n(1030)),d=a(n(1475)),m=a(n(1477)),u=a(n(1478)),p=a(n(1479)),s=a(n(1480)),c=a(n(1481)),f=o.default.bind(c.default),x=function(){var e=r.default.createElement(i.default,{logo:r.default.createElement(m.default,{size:"tiny"}),utilities:r.default.createElement(s.default,{size:"tiny"}),extensions:r.default.createElement(d.default,{size:"tiny"}),navigation:r.default.createElement(u.default,{size:"tiny"}),toggle:r.default.createElement(p.default,{size:"tiny"})}),t=r.default.createElement(i.default,{logo:r.default.createElement(m.default,{size:"small"}),utilities:r.default.createElement(s.default,{size:"small"}),extensions:r.default.createElement(d.default,{size:"small"}),navigation:r.default.createElement(u.default,{size:"small"}),toggle:r.default.createElement(p.default,{size:"small"})}),n=r.default.createElement(i.default,{logo:r.default.createElement(m.default,{size:"medium"}),utilities:r.default.createElement(s.default,{size:"medium"}),extensions:r.default.createElement(d.default,{size:"medium"}),navigation:r.default.createElement(u.default,{size:"medium"}),toggle:r.default.createElement(p.default,{size:"medium"})});return r.default.createElement("div",{className:f("content-wrapper")},r.default.createElement("div",{className:f("responsive-element-wrapper")},r.default.createElement(l.default,{tiny:e,medium:t,large:n})))};t.default=x},1475:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(2)),l=a(n(1141)),i={size:o.default.string},d=function(e){var t=e.size,n="Extensions";return"tiny"===t?n="E":"small"===t&&(n="Ext"),r.default.createElement(l.default,{text:n,size:t})};d.propTypes=i;var m=d;t.default=m},1476:function(e,t,n){"use strict";n.r(t),t.default={"wrapper1-tiny":"Placeholder-module__wrapper1-tiny___3zBHx","wrapper1-small":"Placeholder-module__wrapper1-small___18yfi","wrapper1-medium":"Placeholder-module__wrapper1-medium___D7HeT","wrapper1-default":"Placeholder-module__wrapper1-default___3ZTE4",wrapper2:"Placeholder-module__wrapper2___2HJ44",wrapper3:"Placeholder-module__wrapper3___23WG1"}},1477:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(2)),l=a(n(1141)),i={size:o.default.string},d=function(e){var t=e.size,n="Logo";return"tiny"===t?n="L":"small"===t&&(n="Log"),r.default.createElement(l.default,{text:n,size:t})};d.propTypes=i;var m=d;t.default=m},1478:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(2)),l=a(n(1141)),i={size:o.default.string},d=function(e){var t=e.size,n="Navigation";return"tiny"===t?n="N":"small"===t&&(n="Nav"),r.default.createElement(l.default,{text:n,size:"default"})};d.propTypes=i;var m=d;t.default=m},1479:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(2)),l=a(n(1141)),i={size:o.default.string},d=function(e){var t=e.size,n="Toggle";return"tiny"===t?n="T":"small"===t&&(n="Tog"),r.default.createElement(l.default,{text:n,size:t})};d.propTypes=i;var m=d;t.default=m},1480:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(2)),l=a(n(1141)),i={size:o.default.string},d=function(e){var t=e.size,n="Utilities";return"tiny"===t?n="U":"small"===t&&(n="Util"),r.default.createElement(l.default,{text:n,size:t})};d.propTypes=i;var m=d;t.default=m},1481:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"HeaderWireframe-module__content-wrapper___2Fn5L","responsive-element-wrapper":"HeaderWireframe-module__responsive-element-wrapper___2TG2e"}},2166:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(19),r=n.n(a),o=n(24),l=n.n(o),i=n(0),d=n.n(i),m=n(335),u=n(1140),p=n(1474),s=n.n(p),c={};function f(e){var t=e.components,n=l()(e,["components"]);return Object(m.mdx)("wrapper",r()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport classNames from \'classnames/bind\';\nimport ResponsiveElement from \'terra-responsive-element\';\nimport ApplicationHeaderLayout from \'terra-application-header-layout\';\nimport ExtensionsExample from \'terra-application-header-layout/lib/terra-dev-site/doc/common/ExtensionsExample\';\nimport LogoExample from \'terra-application-header-layout/lib/terra-dev-site/doc/common/LogoExample\';\nimport NavigationExample from \'terra-application-header-layout/lib/terra-dev-site/doc/common/NavigationExample\';\nimport ToggleExample from \'terra-application-header-layout/lib/terra-dev-site/doc/common/ToggleExample\';\nimport UtilitiesExample from \'terra-application-header-layout/lib/terra-dev-site/doc/common/UtilitiesExample\';\nimport styles from \'./HeaderWireframe.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst HeaderWireframe = () => {\n  const tinyHeader = (\n    <ApplicationHeaderLayout\n      logo={<LogoExample size="tiny" />}\n      utilities={<UtilitiesExample size="tiny" />}\n      extensions={<ExtensionsExample size="tiny" />}\n      navigation={<NavigationExample size="tiny" />}\n      toggle={<ToggleExample size="tiny" />}\n    />\n  );\n\n  const mediumHeader = (\n    <ApplicationHeaderLayout\n      logo={<LogoExample size="small" />}\n      utilities={<UtilitiesExample size="small" />}\n      extensions={<ExtensionsExample size="small" />}\n      navigation={<NavigationExample size="small" />}\n      toggle={<ToggleExample size="small" />}\n    />\n  );\n\n  const largeHeader = (\n    <ApplicationHeaderLayout\n      logo={<LogoExample size="medium" />}\n      utilities={<UtilitiesExample size="medium" />}\n      extensions={<ExtensionsExample size="medium" />}\n      navigation={<NavigationExample size="medium" />}\n      toggle={<ToggleExample size="medium" />}\n    />\n  );\n\n  return (\n    <div className={cx(\'content-wrapper\')}>\n      <div className={cx(\'responsive-element-wrapper\')}>\n        <ResponsiveElement\n          tiny={tinyHeader}\n          medium={mediumHeader}\n          large={largeHeader}\n        />\n      </div>\n    </div>\n  );\n};\n\nexport default HeaderWireframe;\n\n')))}f.isMDXComponent=!0;var x=n(990),b=n.n(x),v={};function y(e){var t=e.components,n=l()(e,["components"]);return Object(m.mdx)("wrapper",r()({},v,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    height: 60px;\n    position: relative;\n    width: 100%;\n  }\n  \n  .responsive-element-wrapper {\n    height: 100%;\n  }\n}\n\n")))}y.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return d.a.createElement(b.a,{title:t||"Header Wireframe",description:n,example:d.a.createElement(s.a,null),exampleCssSrc:d.a.createElement(y,null),exampleSrc:d.a.createElement(f,null),isExpanded:a})},_=n(999),h=n.n(_),j=function(){return Object(m.mdx)(h.a,{rows:[{name:"extensions",type:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"Extensions element to be placed before the end of the header."))}return t.isMDXComponent=!0,t({})}},{name:"logo",type:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"Logo element to be placed at the start of the header after the toggle element."))}return t.isMDXComponent=!0,t({})}},{name:"intl",type:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"shape"),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "formatMessage": {\n  "name": "func",\n  "required": false\n }\n}\n')))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"intl object programmatically imported through injectIntl from react-intl."))}return t.isMDXComponent=!0,t({})}},{name:"navigation",type:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"Navigation element to be placed within the fill area of the header."))}return t.isMDXComponent=!0,t({})}},{name:"toggle",type:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"Toggle element to be placed at the start of the header."))}return t.isMDXComponent=!0,t({})}},{name:"utilities",type:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"Utilities element to be placed at the end of the header."))}return t.isMDXComponent=!0,t({})}}]})},O={};function E(e){var t=e.components,n=l()(e,["components"]);return Object(m.mdx)("wrapper",r()({},O,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)(u.a,{mdxType:"Badge"}),Object(m.mdx)("h1",{id:"terra-application-header-layout"},"Terra Application Header Layout"),Object(m.mdx)("p",null,"This component renders an application header layout. To be used with a terra-layout or terra-navigation-layout."),Object(m.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Install with ",Object(m.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-header-layout"))))),Object(m.mdx)("h2",{id:"features"},"Features"),Object(m.mdx)("h3",{id:"skip-to-content-button"},"Skip to Content Button"),Object(m.mdx)("p",null,"To improve accessibility of our UI for users using a keyboard to navigate, we have implement a 'Skip to Content' button that focuses on the main content node."),Object(m.mdx)("p",null,"To use it, just tab onto the page, and you will see it as the first item and "),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Press the Enter key to skip to the main content node, or"),Object(m.mdx)("li",{parentName:"ul"},"Press the Tab key to ignore the 'Skip to Content' button.")),Object(m.mdx)("h4",{id:"note"},"Note:"),Object(m.mdx)("p",null,"This feature is enabled by default and cannot be disabled."),Object(m.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(m.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(m.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"react"),Object(m.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(m.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"react-intl"),Object(m.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),Object(m.mdx)("h2",{id:"component-features"},"Component Features"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),Object(m.mdx)("h2",{id:"examples"},"Examples"),Object(m.mdx)(g,{title:"Header - Wireframe",mdxType:"HeaderWireframe"}),Object(m.mdx)("h2",{id:"application-header-layout-props-table"},"Application Header Layout Props table"),Object(m.mdx)(j,{mdxType:"HeaderLayoutSrc"}))}E.isMDXComponent=!0}}]);