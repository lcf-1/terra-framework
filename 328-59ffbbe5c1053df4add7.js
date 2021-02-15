(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{1098:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var s=t(0),i=t.n(s),o=t(988),a=t.n(o),r=function(e){var n=e.url;return i.a.createElement(a.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-disclosure-manager",name:"terra-disclosure-manager",version:"4.38.0",url:n})}},1797:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var s=t(19),i=t.n(s),o=t(24),a=t.n(o),r=(t(0),t(335)),d=t(1098),l={};function c(e){var n=e.components,t=a()(e,["components"]);return Object(r.mdx)("wrapper",i()({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.mdx)(d.a,{mdxType:"Badge"}),Object(r.mdx)("h1",{id:"disclosure-apis"},"Disclosure APIs"),Object(r.mdx)("p",null,"Both DisclosureManager Children and disclosed content will be provided with a ",Object(r.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerDelegate")," instance via the DisclosureManagerContext. This provides disclose APIs the content can use to manager disclosures."),Object(r.mdx)("h2",{id:"disclose-api"},"disclose API"),Object(r.mdx)("p",null,"The ",Object(r.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerDelegate")," provided to the content contains a ",Object(r.mdx)("inlineCode",{parentName:"p"},"disclose")," function which returns a Promise."),Object(r.mdx)("p",null,"This ",Object(r.mdx)("inlineCode",{parentName:"p"},"disclose")," function can be used by both Disclosure Manager children and disclosed content to disclose new content. The type of disclosure can be specified when ",Object(r.mdx)("inlineCode",{parentName:"p"},"disclose")," is called. The ",Object(r.mdx)("inlineCode",{parentName:"p"},"disclose")," function will validate the specified disclosure type against the set of supported disclosure types that were provided to the DisclosureManager via the ",Object(r.mdx)("inlineCode",{parentName:"p"},"supportedDisclosureTypes")," prop."),Object(r.mdx)("p",null,"If the type is supported, the DisclosureManager will check the currently disclosed component's state to ensure it can be replaced."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"If the disclosure is allowed,  then ",Object(r.mdx)("inlineCode",{parentName:"p"},"disclose")," returns a resolved Promise. This Promise will be resolved with an Object containing functions and Promises that can be used to manipulate the disclosure, if necessary. Alternatively, if the additional logic isn't needed, the returned Promise can be completely ignored. The resolve API includes"),Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"dismissDisclosure"),", a function that will dismiss the disclosed content. "),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"afterDismiss"),", a deferred Promise that will be resolved when the disclosed content is dismissed by any means. "))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"If the disclosure is denied, then ",Object(r.mdx)("inlineCode",{parentName:"p"},"disclose")," returns a rejected Promise. "))),Object(r.mdx)("p",null,"If the provided type is not supported, and if the DisclosureManager detects another DisclosureManager higher in the component hierarchy, the DisclosureManager will call the disclose function provided by that parent DisclosureManager instance. The parent DisclosureManager will also return also resolve or reject a Promise."),Object(r.mdx)("details",null,Object(r.mdx)("summary",null,"Disclose Arguments in Detail"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-js"},"disclosureManager.disclose({\n  /* REQUIRED: The content information associated to the component to be disclosed. */\n  content: {\n    /* REQUIRED: The React component to be disclosed. */\n    component: PropTypes.node,\n\n    /**\n     * REQUIRED: The unique identifier of the component to disclosed. This key must be unique \n     * amongst the set of all actively disclosed component keys.\n     */\n    key: PropsTypes.string,\n    \n    /**\n     * The title to associated to the component.\n     */\n    title: PropsTypes.string,\n  },\n\n  /**\n   * The preferred disclosure type. This will be used to match the disclosure request to an appropriate\n   * DisclosureManager. Depending on the structuring of managers in a given component, the preferredType\n   * value may not be honored. If the provided preferredType is not supported by any present disclosure managers,\n   * the root disclosure manager will perform the disclosure using its own disclosure type, regardless of the\n   * preferredType value.\n   */\n  preferredType: PropsTypes.string,\n\n  /**\n   * The explicit `height` and `width` values for the disclosure. These values may not be honored due to the\n   * disclosure type or the available viewport size.\n   * `dimensions` should not be provided if a `size` is specified.\n   */\n  dimensions: {\n    /**\n     * Supported `height` values include: `'240'`, `'420'`, `'600'`, `'690'`, `'780'`, `'870'`, `'960'`,\n     * `'1140'`.\n     */\n    height: PropTypes.number,\n\n    /**\n     * Supported `width` values include: `'320'`, `'480'`, `'560'`, `'640'`, `'800'`, `'960'`, `'1120'`,\n     * `'1280'`, `'1440'`, `'1600'`, `'1760'`, `'1920'`.\n     */\n    width: PropsTypes.number,\n  },\n\n  /**\n   * The String size desired for the disclosure. One of `tiny`, `small`, `medium`, `large`, `huge`, or\n   * `fullscreen`. The functional implementation of this size is determined by the component responsible for\n   * providing the render prop to the DisclosureManager.\n   *   > Note: `size` should not be provided if `dimensions` are specified.\n   */\n  size: PropsTypes.func,\n\n  /**\n   * Additional custom properties to override disclosed component props.\n   * Currently is limited to `panelBehavior` property of slide panel manager. To set\\override panelBehavior we could do `typeConfig: { panelBehavior: 'squish' }`.\n   */\n  typeConfig: PropsTypes.Object\n}).then(() => {\n  // do stuff\n});\n"))),Object(r.mdx)("h3",{id:"example"},"Example"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-jsx"},"<Button\n  text=\"Open Modal\"\n  onClick={() => {\n    disclosureManager.disclose({\n      preferredType: 'modal',\n      size: 'large',\n      content: {\n        key: 'my-disclosed-content',\n        title: 'My Disclosed Content',\n        component: <DisclosedContent />,\n      }\n    }).then({ dismissDisclosure, afterDismiss } => {\n      this.myContentIsDisclosed = true;\n\n      // This function can be cached and triggered as needed.\n      this.myDismissFunction = dismissDisclosure;\n\n      afterDismiss.then(() => {\n        // The afterDismiss will resolve when the content is dismissed, allowing for\n        // cleanup of local state as needed.\n        this.myContentIsDisclosed = false;\n\n        // If the dismissDisclosure function was cached, make sure it gets cleaned up.\n        this.myDismissFunction = false;\n      })\n    }).catch((e) => {\n      // If this function is executed, the disclosure has been denied. You can use this to\n      // clean up any state that may be reliant on the disclosure occurring.\n    })\n  }}\n/>\n")),Object(r.mdx)("h2",{id:"other-apis"},"Other APIs"),Object(r.mdx)("p",null,"In addition to a ",Object(r.mdx)("inlineCode",{parentName:"p"},"disclose")," function, a number of other functions are exposed to components rendered in the disclosure mechanism to manage various segments of the disclosure state. The included functions are:"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:null},"Function"),Object(r.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"dismiss")),Object(r.mdx)("td",{parentName:"tr",align:null},"Allows a component to remove itself from the disclosure stack. If the component is the only element in the disclosure stack, the disclosure is closed.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"closeDisclosure")),Object(r.mdx)("td",{parentName:"tr",align:null},"Allows a component to close the entire disclosure stack. This is generally integrated into face-up disclosure controls as a Close button or similar.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"goBack")),Object(r.mdx)("td",{parentName:"tr",align:null},"Allows a component to remove itself from the disclosure stack. Functionally similar to ",Object(r.mdx)("inlineCode",{parentName:"td"},"dismiss"),", however ",Object(r.mdx)("inlineCode",{parentName:"td"},"onBack")," is only provided to components in the stack that have a previous sibling. This is generally integrated into face-up disclosure controls as a Back button or similar.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"maximize")),Object(r.mdx)("td",{parentName:"tr",align:null},"Allows a component to maximize its presentation size. This is only provided if the component is not already maximized.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"minimize")),Object(r.mdx)("td",{parentName:"tr",align:null},"Allows a component to minimize its presentation size. This is only provided if the component is currently maximized.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"requestFocus")),Object(r.mdx)("td",{parentName:"tr",align:null},"Allows a component to request focus from the disclosure in the event that the disclosure mechanism in use utilizes a focus trap. This can be integrated with the Popup and similar focus-stealing controls.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"releaseFocus")),Object(r.mdx)("td",{parentName:"tr",align:null},"Allows a component to release focus from itself and return it to the disclosure. This can be integrated with the Popup and similar focus-stealing controls.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"registerDismissCheck")),Object(r.mdx)("td",{parentName:"tr",align:null},"Allows a component to register a function with the DisclosureManager that will be called before the component is dismissed for any reason.")))),Object(r.mdx)("p",null,"Each of these functions returns a Promise that can be used for chaining, if necessary."),Object(r.mdx)("h5",{id:"a-note-on-registerdismisscheck"},"A Note on registerDismissCheck"),Object(r.mdx)("p",null,"The function given to ",Object(r.mdx)("inlineCode",{parentName:"p"},"registerDismissCheck")," must return a resolved or rejected Promise. If the Promise is resolved, the component is guaranteed to be dismissed. If cleanup logic needs to execute before the component is dismissed, it is a good idea to execute before returning the resolved Promise. If a rejected Promise is returned, the component will not be dismissed. Components can render a prompt or confirmation window to give users control over the dismissal, if desired."),Object(r.mdx)("p",null,"Example:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-jsx"},"// DisclosedComponent.jsx\n\ncomponentDidMount() {\n  const { disclosureManager } = this.props;\n\n  // A dismiss function can be registered multiple times, but it usually makes sense to\n  // register a bound function a single time on mount.\n  disclosureManager.registerDismissCheck(this.unsavedChangesCheck);\n}\n\nunsavedChangesCheck() {\n  const { store } = this.props;\n  const { hasUnsavedChanges } = this.state;\n\n  return new Promise((resolve, reject) => {\n    if (hasUnsavedChanges) {\n      // The dismissal could be outright denied.\n      // reject();\n\n      // Or, a confirmation could allow user control.\n      if (!confirm('MyDisclosedComponent has unsaved changes that will be lost. Do you wish to continue?')) {\n        reject();\n        return;\n      }\n\n      // Otherwise, resolving the Promise will cause the component to be dismissed and unmounted. Any cleanup needed\n      // before dismissal should occur before the Promise is resolved.\n      store.dispatch(myCleanupActionOrSomething());\n\n      resolve();\n    }\n  });\n}\n")))}c.isMDXComponent=!0},988:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=r(t(0)),i=r(t(2)),o=r(t(5)),a=r(t(989));function r(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(a.default),l={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},c=function(e){var n=e.src,t=e.name,i=e.url,o=e.version,a=s.default.createElement("a",{className:d("badge"),href:i||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},s.default.createElement("span",{className:d("badge-name")},i?"package":"npm"),s.default.createElement("span",{className:d("badge-version")},"v".concat(o))),r=n?s.default.createElement("a",{className:d("badge"),href:n},s.default.createElement("span",{className:d("badge-name")},"github"),s.default.createElement("span",{className:d("badge-version")},"source")):void 0;return s.default.createElement("div",{className:d("badge-container")},a,r)};c.propTypes=l;var m=c;n.default=m},989:function(e,n,t){"use strict";t.r(n),n.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}}}]);