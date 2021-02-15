(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{1173:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(0),n=r.n(a),i=r(988),m=r.n(i),d=function(e){var t=e.url;return n.a.createElement(m.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-time-input",name:"terra-time-input",version:"4.37.0",url:t})}},1814:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return u}));var a=r(19),n=r.n(a),i=r(24),m=r.n(i),d=(r(0),r(335)),l=r(1173),o={};function u(e){var t=e.components,r=m()(e,["components"]);return Object(d.mdx)("wrapper",n()({},o,r,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)(l.a,{mdxType:"Badge"}),Object(d.mdx)("h1",{id:"terra-time-input-upgrade-guide"},"Terra Time Input Upgrade Guide"),Object(d.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),Object(d.mdx)("h3",{id:"new-props"},"New props"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Added ",Object(d.mdx)("inlineCode",{parentName:"li"},"onFocus")),Object(d.mdx)("li",{parentName:"ul"},"Added ",Object(d.mdx)("inlineCode",{parentName:"li"},"refCallback"))),Object(d.mdx)("h3",{id:"changes-to-onblur-and-onfocus"},"Changes to onBlur and onFocus"),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop previously could be passed down as a custom prop. This prop now becomes a first-class prop. The ",Object(d.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop used to be triggered when focus is moved from the hour input to the minute input or any other elements in the same time-input component. The ",Object(d.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop will still be triggered if the time-input component did not have focus and now just gained focus. However, if the focus is then moved from one time-input element to another time-input element, the ",Object(d.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback now would not be triggered because the focus is still within the time-input container. The ",Object(d.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback now behaves similar to the ",Object(d.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback where ",Object(d.mdx)("inlineCode",{parentName:"p"},"onBlur")," would not be triggered when focus is transfered from one time-input element to another time-input element of the same time-input component. The ",Object(d.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback would be triggered only when focus is lost from the entire time-input component."),Object(d.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),Object(d.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(d.mdx)("h4",{id:"renamed"},"Renamed"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",{parentName:"tr",align:null},"Previous"),Object(d.mdx)("th",{parentName:"tr",align:null},"New"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-border-color"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-border-color")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-border-style"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-border-style")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-border-width"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-border-width")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-opacity"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-opacity")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-background"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-background-color")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-animation-background"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-background-image")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-background-start"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-background-size")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-animation-size"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-background-size")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-box-shadow-ltr"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-ltr-box-shadow")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-box-shadow-rtl"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-rtl-box-shadow")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-width-input"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-min-width")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-input-padding-bottom"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-padding-bottom")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-input-padding-left"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-padding-left")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-input-padding-right"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-padding-right")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-input-padding-top"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-padding-top")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-desktop-focused-input-background"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-desktop-focused-input-background-color")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-time-spacer-input-margin-top"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-time-spacer-margin-top")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-label-size"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-label-font-size")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-border-radius"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-desktop-input-border-radius")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-meridiem-display-left-margin"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-meridiem-display-margin-left")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-line-height"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-line-height")))),Object(d.mdx)("h4",{id:"added"},"Added"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-line-height"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-hover-background-color"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-hover-border"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-hover-color"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-focus-background-color"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-focus-color"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-time-input-group-hour-margin-right"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-time-input-group-minute-margin-left"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-caret-color"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-time-mobile-spacer-margin-top"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-group-margin-left"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-desktop-background-color"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-color"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-selected-hover-background-color"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-selected-hover-border-color"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-selected-hover-color"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-font-size")),Object(d.mdx)("h4",{id:"removed"},"Removed"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-time-input-group-margin-left"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-time-input-group-margin-right"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-keyboard-border-style"),Object(d.mdx)("li",{parentName:"ul"},"--terra-time-input-keyboard-border-width")))}u.isMDXComponent=!0},988:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(r(0)),n=d(r(2)),i=d(r(5)),m=d(r(989));function d(e){return e&&e.__esModule?e:{default:e}}var l=i.default.bind(m.default),o={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},u=function(e){var t=e.src,r=e.name,n=e.url,i=e.version,m=a.default.createElement("a",{className:l("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(i)},a.default.createElement("span",{className:l("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(i))),d=t?a.default.createElement("a",{className:l("badge"),href:t},a.default.createElement("span",{className:l("badge-name")},"github"),a.default.createElement("span",{className:l("badge-version")},"source")):void 0;return a.default.createElement("div",{className:l("badge-container")},m,d)};u.propTypes=o;var p=u;t.default=p},989:function(e,t,r){"use strict";r.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}}}]);