(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),o=n.n(a),r=n(988),i=n.n(r),p=function(e){var t=e.url;return o.a.createElement(i.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-prompt",name:"terra-navigation-prompt",version:"1.50.0",url:t})}},1685:function(e,t,n){"use strict";var a=n(12),o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(55)),i=a(n(0)),p=o(n(2)),c=o(n(5)),m=a(n(348)),s=o(n(1686)),l=c.default.bind(s.default),d="Descriptive Notification Prompt Title",u="A Notification Prompt usually has an introductory warning instructing the user that there are unsaved changes or that there is a similar situation that warrants capturing the user's attention and requires that they take action before continuing.\n\nIt is good practice to include details about the originating source (page name, side-panel title, modal header title, etc.) and location description (form name, title from the section of the page, general position, etc.) to provide the user a contextual reference as to where they have an area needing attention: e.g. where data is about to be lost, the window about to be closed, the section about to be removed. Following the initial details, it is helpful to include a detailed description educating the user about any danger or caution as to what will happen to the current items about to be lost (form data, page content, etc.) if the user chooses each of the two actions provided in the notification prompt message.",h="Descriptive Reject Button Action",b="Descriptive Accept Button Action",g="acceptFirst",f=function(e){var t=e.title,n=e.ariaLabel,a=(0,i.useState)(""),o=(0,r.default)(a,2),p=o[0],c=o[1],s=(0,i.useRef)({value:""});return i.default.createElement("div",{className:l("input-content-wrapper")},p&&p.length?i.default.createElement(m.default,{description:t,metaData:s.current}):null,i.default.createElement("div",{className:l("content-wrapper")},i.default.createElement("span",{className:l("title")},t),p&&p.length?i.default.createElement("span",{className:l("prompt-text-wrapper")},"(Unsaved value is present and NavigationPrompt is rendered)"):null),i.default.createElement("input",{type:"text",className:l("input-text-box"),"aria-label":n,onChange:function(e){s.current={value:e.target.value},c(e.target.value)}}))};f.propTypes={title:p.default.string,ariaLabel:p.default.string};var x=function(e){var t=e.title,n=(0,i.useState)(Date.now()),a=(0,r.default)(n,2),o=a[0],p=a[1],c=(0,i.useRef)();return i.default.createElement("div",{className:l("form-content-wrapper")},i.default.createElement(m.NavigationPromptCheckpoint,{ref:c},i.default.createElement(i.default.Fragment,{key:o},i.default.createElement("h3",null,t),i.default.createElement("p",null,"The Form renders a NavigationPromptCheckpoint around its child Input components. If NavigationPrompts are rendered by any child components, the Form will resolve those prompts before resetting the Input values."),i.default.createElement("p",null,"Last Updated:"," ",new Date(o).toLocaleString()),i.default.createElement(f,{title:"Text Input A",ariaLabel:"Text Input A"}),i.default.createElement(f,{title:"Text Input B",ariaLabel:"Text Input B"}),i.default.createElement("br",null),i.default.createElement("button",{type:"button",onClick:function(){c.current.resolvePrompts({title:d,startMessage:u,rejectButtonText:h,acceptButtonText:b,buttonOrder:g}).then((function(){p(Date.now())})).catch((function(){}))}},"Reset"),i.default.createElement("button",{type:"button",onClick:function(){p(Date.now())}},"Submit"))))};x.propTypes={title:p.default.string};var v=function(){var e=(0,i.useState)("Form 1"),t=(0,r.default)(e,2),n=t[0],a=t[1],o=(0,i.useRef)();function p(e){o.current.resolvePrompts({title:d,startMessage:u,rejectButtonText:h,acceptButtonText:b,buttonOrder:g}).then((function(){a(e)})).catch((function(){}))}return i.default.createElement("div",null,i.default.createElement("h2",null,"Form Switcher"),i.default.createElement("p",null,"The FormSwitcher is an example component that uses the NavigationPrompt and NavigationPromptCheckpoint. If NavigationPrompts are rendered by any child components, the FormSwitcher will resolve those prompts before rendering a different Form."),i.default.createElement("button",{type:"button",disabled:"Form 1"===n,onClick:p.bind(null,"Form 1")},"Switch to Form 1"),i.default.createElement("button",{type:"button",disabled:"Form 2"===n,onClick:p.bind(null,"Form 2")},"Switch to Form 2"),i.default.createElement("br",null),i.default.createElement("br",null),i.default.createElement(m.NavigationPromptCheckpoint,{ref:o},i.default.createElement(x,{title:n,key:n})))},N=function(){var e=(0,i.useState)([]),t=(0,r.default)(e,2),n=t[0],a=t[1];return i.default.createElement("div",{className:l("example-content-wrapper")},i.default.createElement("span",{className:l("title")},"Registered Prompts: "),n.length?i.default.createElement("span",null,n.map((function(e){return"".concat(e.description," (").concat(e.metaData.value,")")})).join(", ")):null,i.default.createElement("br",null),i.default.createElement("hr",null),i.default.createElement(m.NavigationPromptCheckpoint,{onPromptChange:function(e){a(e)}},i.default.createElement(v,null)))};t.default=N},1686:function(e,t,n){"use strict";n.r(t),t.default={"form-content-wrapper":"NavigationPromptExample-module__form-content-wrapper___2fbKV","example-content-wrapper":"NavigationPromptExample-module__example-content-wrapper___v9O46",title:"NavigationPromptExample-module__title___3ysZF","input-text-box":"NavigationPromptExample-module__input-text-box___2S_xD","prompt-text-wrapper":"NavigationPromptExample-module__prompt-text-wrapper___3iqAh","input-content-wrapper":"NavigationPromptExample-module__input-content-wrapper___2hwUK","content-wrapper":"NavigationPromptExample-module__content-wrapper___3N9_1"}},2163:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var a=n(19),o=n.n(a),r=n(24),i=n.n(r),p=n(0),c=n.n(p),m=n(335),s=n(1114),l=n(999),d=n.n(l),u=function(){return Object(m.mdx)(d.a,{rows:[{name:"description",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"A string describing the content or concept for which the NavigationPrompt is being rendered."))}return t.isMDXComponent=!0,t({})}},{name:"metaData",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"An object containing any other pertinent information related to the NavigationPrompt."))}return t.isMDXComponent=!0,t({})}}]})},h=function(){return Object(m.mdx)(d.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"Components to render within the context of the NavigationPromptCheckpoint. Any NavigationPrompts rendered within\nthese child components will be registered to this NavigationPromptCheckpoint instance."))}return t.isMDXComponent=!0,t({})}},{name:"onPromptChange",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"A function that will be executed when NavigationPrompts are registered to or unregistered from the NavigationPromptCheckpoint instance.\nThis can be used to track registered prompts outside of a NavigationPromptCheckpoint and handle prompt resolution directly, if necessary.\nThe function will be provided with an array of data objects representing the registered NavigationPrompts as the sole argument. An empty\nArray will be provided when no prompts are registered."),Object(m.mdx)("p",null,"Function Example:"),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre"},"(arrayOfPrompts) => {\n  arrayOfPrompts.forEach((prompt) => {\n    console.log(prompt.description);\n    console.log(prompt.metaData);\n  })\n  this.myLocalPromptRegistry = arrayOfPrompts;\n}\n")))}return t.isMDXComponent=!0,t({})}}]})},b=n(1685),g=n.n(b),f={};function x(e){var t=e.components,n=i()(e,["components"]);return Object(m.mdx)("wrapper",o()({},f,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useRef } from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\nimport styles from './NavigationPromptExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst exampleTitle = 'Descriptive Notification Prompt Title';\nconst exampleMessage = 'A Notification Prompt usually has an introductory warning instructing the user that there are unsaved changes or that there is a similar situation that warrants capturing the user\\'s attention and requires that they take action before continuing.\\n\\nIt is good practice to include details about the originating source (page name, side-panel title, modal header title, etc.) and location description (form name, title from the section of the page, general position, etc.) to provide the user a contextual reference as to where they have an area needing attention: e.g. where data is about to be lost, the window about to be closed, the section about to be removed. Following the initial details, it is helpful to include a detailed description educating the user about any danger or caution as to what will happen to the current items about to be lost (form data, page content, etc.) if the user chooses each of the two actions provided in the notification prompt message.';\nconst exampleRejectButtonText = 'Descriptive Reject Button Action';\nconst exampleAcceptButtonText = 'Descriptive Accept Button Action';\nconst exampleButtonOrder = 'acceptFirst';\n\n/**\n * The Input is a stateful component that renders a NavigationPrompt based upon its current input element value.\n * It provides its NavigationPrompt with a description and a metaData object containing its current value.\n */\nconst Input = ({ title, ariaLabel }) => {\n  const [inputValue, setInputValue] = useState('');\n  const promptMetaData = useRef({\n    value: '',\n  });\n\n  /**\n   * The Input renders a NavigationPrompt when it wants to communicate the presence of its unresolved\n   * state.\n   */\n  return (\n    <div className={cx('input-content-wrapper')}>\n      {inputValue && inputValue.length ? <NavigationPrompt description={title} metaData={promptMetaData.current} /> : null}\n      <div className={cx('content-wrapper')}>\n        <span className={cx('title')}>{title}</span>\n        {inputValue && inputValue.length ? <span className={cx('prompt-text-wrapper')}>(Unsaved value is present and NavigationPrompt is rendered)</span> : null}\n      </div>\n      <input\n        type=\"text\"\n        className={cx('input-text-box')}\n        aria-label={ariaLabel}\n        onChange={(event) => {\n          promptMetaData.current = {\n            value: event.target.value,\n          };\n\n          setInputValue(event.target.value);\n        }}\n      />\n    </div>\n  );\n};\n\nInput.propTypes = {\n  title: PropTypes.string,\n  ariaLabel: PropTypes.string,\n};\n\n/**\n * The Form renders two Input components to demonstrate the the registration logic of multiple concurrent NavigationPrompts.\n * The Form also renders a NavigationPromptCheckpoint around those Inputs in order to demonstrate the NavigationPromptCheckpoint's ability to\n * render a custom title/message during prompt resolution.\n *\n * Before the Form's Reset action can occur, the Form resolves the prompts below its checkpoint with a custom title and message featuring the\n * registered prompts' descriptions and metaData. If the user confirms the Reset, the Input components are unmounted and replaced with new instances\n * that have no unsaved changes (and thus render no NavigationPrompts). If the user denies the Reset, no action is taken.\n *\n * The Form's Submit action does not prompt the user before clearing the Input values, demonstrating that the onus is on the Form, not the Input, to trigger\n * the prompt resolver when necessary.\n */\nconst Form = ({ title }) => {\n  const [timeStamp, setTimeStamp] = useState(Date.now());\n  const inputCheckpointRef = useRef();\n\n  return (\n    <div className={cx('form-content-wrapper')}>\n      <NavigationPromptCheckpoint\n        ref={inputCheckpointRef}\n      >\n        <React.Fragment key={timeStamp}>\n          <h3>{title}</h3>\n          <p>The Form renders a NavigationPromptCheckpoint around its child Input components. If NavigationPrompts are rendered by any child components, the Form will resolve those prompts before resetting the Input values.</p>\n          <p>\n            Last Updated:\n            {' '}\n            {new Date(timeStamp).toLocaleString()}\n          </p>\n          <Input title=\"Text Input A\" ariaLabel=\"Text Input A\" />\n          <Input title=\"Text Input B\" ariaLabel=\"Text Input B\" />\n          <br />\n          <button\n            type=\"button\"\n            onClick={() => {\n              inputCheckpointRef.current.resolvePrompts({\n                title: exampleTitle,\n                startMessage: exampleMessage,\n                rejectButtonText: exampleRejectButtonText,\n                acceptButtonText: exampleAcceptButtonText,\n                buttonOrder: exampleButtonOrder,\n              }).then(() => {\n                setTimeStamp(Date.now());\n              }).catch(() => {\n                // User prevented navigation.\n              });\n            }}\n          >\n            Reset\n          </button>\n          <button\n            type=\"button\"\n            onClick={() => {\n              setTimeStamp(Date.now());\n            }}\n          >\n            Submit\n          </button>\n        </React.Fragment>\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n\nForm.propTypes = {\n  title: PropTypes.string,\n};\n\n/**\n * The FormSwitcher toggles between two versions a Form to demonstrate the functionality of nested NavigationPromptCheckpoints.\n * Any NavigationPrompt registered to the Form's checkpoint will also be registered to the FormSwitcher's checkpoint.\n *\n * Before the FormSwitcher changes the Form type, the FormSwitcher resolves the prompts below its checkpoint with the default prompt title and message.\n * If the user confirms the switch, the Form component is unmounted and replace with a new version containing no unsaved changes. If the user denies the switch,\n * no action is taken.\n */\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n  const formCheckpointRef = useRef();\n\n  function onSwitchForm(formKey) {\n    formCheckpointRef.current.resolvePrompts({\n      title: exampleTitle,\n      startMessage: exampleMessage,\n      rejectButtonText: exampleRejectButtonText,\n      acceptButtonText: exampleAcceptButtonText,\n      buttonOrder: exampleButtonOrder,\n    }).then(() => {\n      setActiveForm(formKey);\n    }).catch(() => {\n      // User prevented form switch.\n    });\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n      <p>The FormSwitcher is an example component that uses the NavigationPrompt and NavigationPromptCheckpoint. If NavigationPrompts are rendered by any child components, the FormSwitcher will resolve those prompts before rendering a different Form.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1'}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2'}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <br />\n      <br />\n      <NavigationPromptCheckpoint ref={formCheckpointRef}>\n        <Form title={activeForm} key={activeForm} />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n\n/**\n * The NavigationPromptExample renders a NavigationPromptCheckpoint around the FormSwitcher to demonstrate the\n * functionality of the onPromptChange callback. onPromptChange receives the current set of prompts as its first argument,\n * and it executes whenever a NavigationPrompt registers or unregisters with a NavigationPromptCheckpoint.\n */\nconst NavigationPromptExample = () => {\n  const [prompts, setPrompts] = useState([]);\n\n  return (\n    <div className={cx('example-content-wrapper')}>\n      <span className={cx('title')}>Registered Prompts: </span>\n      {prompts.length ? <span>{prompts.map(prompt => `${prompt.description} (${prompt.metaData.value})`).join(', ')}</span> : null}\n      <br />\n      <hr />\n      <NavigationPromptCheckpoint\n        onPromptChange={(newPrompts) => {\n          setPrompts(newPrompts);\n        }}\n      >\n        <FormSwitcher />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n\nexport default NavigationPromptExample;\n\n")))}x.isMDXComponent=!0;var v=n(990),N=n.n(v),j={};function w(e){var t=e.components,n=i()(e,["components"]);return Object(m.mdx)("wrapper",o()({},j,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .form-content-wrapper {\n    border: 1px solid #d3d3d3;\n    padding: 10px;\n  }\n\n  .example-content-wrapper {\n    padding: 10px;\n  }\n\n  .title {\n    font-weight: bold;\n  }\n\n  .input-text-box {\n    font-size: 16px;\n    width: 100%;\n  }\n\n  .prompt-text-wrapper {\n    font-style: italic;\n    padding-left: 5px;\n  }\n\n  .input-content-wrapper,\n  .content-wrapper {\n    padding-bottom: 10px;\n  }\n}\n\n")))}w.isMDXComponent=!0;var O=function(e){var t=e.title,n=e.description,a=e.isExpanded;return c.a.createElement(N.a,{title:t||"Navigation Prompt Example",description:n,example:c.a.createElement(g.a,null),exampleCssSrc:c.a.createElement(w,null),exampleSrc:c.a.createElement(x,null),isExpanded:a})},y={};function P(e){var t=e.components,n=i()(e,["components"]);return Object(m.mdx)("wrapper",o()({},y,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)(s.a,{mdxType:"Badge"}),Object(m.mdx)("h1",{id:"terra-navigation-prompt"},"Terra Navigation Prompt"),Object(m.mdx)("p",null,"The NavigationPrompt and NavigationPromptCheckpoint components allow for the detection and management of components with unsaved state."),Object(m.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Install with ",Object(m.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"npm install terra-navigation-prompt")))),Object(m.mdx)("li",{parentName:"ul"},"Import the module",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"import NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';"))))),Object(m.mdx)("p",null,"This package uses React's Context for inter-component communication. A single instance of this package must be installed to ensure that communication occurs between all Context Providers and Consumers. To help ensure a single instance is installed, this package should be defined as a peer dependency in packages that are reusable libraries or otherwise consumed by other packages."),Object(m.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(m.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(m.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"react"),Object(m.mdx)("td",{parentName:"tr",align:null},"^16.8.0")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(m.mdx)("td",{parentName:"tr",align:null},"^16.8.0")))),Object(m.mdx)("h2",{id:"rationale"},"Rationale"),Object(m.mdx)("p",null,"A React component has complete control over its own rendering logic. It can render child components and un-mount those child components as it sees fit. It follows that any individual component has no direct control over its own mounting and un-mounting; it is rendered (or not) at the discretion of its parent. A component must rely on its lifecycle events to determine how it is being implemented."),Object(m.mdx)("p",null,"However, a component's children can be stateful and responsible for important user input or interactions. If the user can navigate away from that child component, it may be necessary for that child component to notify the user that their workflow is incomplete or that some transient state has not yet been persisted. If the component has no control over its own unmounting, how can it communicate this state to the overall application before the component is already being unmounted?"),Object(m.mdx)("p",null,"The most straightforward solution is to lift the state up. If the child component's state is lifted into a parent component, it can either be more directly managed by the parent component or persisted indefinitely. ",Object(m.mdx)("strong",{parentName:"p"},"This is the strategy that should be implemented by most components.")," However, for very large applications or highly composable applications built out of many stateful components, lifting the state may not be feasible."),Object(m.mdx)("p",null,"Another solution is to expose callbacks from the stateful child components. Whenever the stateful components' state changes, these callbacks would be executed to notify the parent component of the updated state. This works well at a small scale, but this becomes hard to maintain as the component tree increases in depth. One would have to chain these callbacks many levels deep to ensure every component is kept abreast of the current state, and every component, even those without these state concerns, would have to adhere to a consistent prop interface for those callbacks."),Object(m.mdx)("p",null,"The ",Object(m.mdx)("inlineCode",{parentName:"p"},"NavigationPrompt")," and the ",Object(m.mdx)("inlineCode",{parentName:"p"},"NavigationPromptCheckpoint")," were created to smooth over the rough edges of the aforementioned strategies. By using this package, state can remain localized to the components that own it, and the presence of transient child state can be determined after each render without impacting every component in the tree."),Object(m.mdx)("h2",{id:"usage"},"Usage"),Object(m.mdx)("h3",{id:"navigationprompt"},Object(m.mdx)("inlineCode",{parentName:"h3"},"NavigationPrompt")),Object(m.mdx)("p",null,"When a component renders a NavigationPrompt, it tells its parent components two things: that the component is in the middle of something important, and that users may care about the component going away."),Object(m.mdx)("p",null,"The NavigationPrompt can be rendered with two props: a ",Object(m.mdx)("inlineCode",{parentName:"p"},"description")," string that gives context to the NavigationPrompt, and a ",Object(m.mdx)("inlineCode",{parentName:"p"},"metaData")," object that can be used to provide additional data that may be relevant to the NavigationPrompt."),Object(m.mdx)("p",null,"The NavigationPrompt can be rendered like any other component, but prop consistency should be maintained between renders when possible. Creating a new object for the ",Object(m.mdx)("inlineCode",{parentName:"p"},"metaData")," prop within a render function will cause the NavigationPrompt to re-register itself during every update:"),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-jsx"},"render() {\n  return (\n    <NavigationPrompt\n      description=\"This prompt will register and notify every time the component renders\"\n      metaData={{ important: 'info' }}\n    />\n  );\n}\n")),Object(m.mdx)("p",null,"To prevent duplicate registrations, the ",Object(m.mdx)("inlineCode",{parentName:"p"},"metaData")," value can be stored inside a component's state or an internal property and updated only when necessary:"),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-diff"},"+ constructor() {\n+   this.state = {\n+     metaDataValue: {\n+       important: 'info',\n+     }\n+   }\n+ }\n\nrender() {\n  return (\n    <NavigationPrompt\n-     description=\"This prompt will register and notify every time the component renders\"\n-     metaData={{ important: 'info' }}\n+     description=\"My props are consistent between renders, so this prompt will not re-register or notify\"\n+     metaData={this.state.metaDataValue}\n    />\n  );\n}\n")),Object(m.mdx)("h3",{id:"navigationpromptcheckpoint"},Object(m.mdx)("inlineCode",{parentName:"h3"},"NavigationPromptCheckpoint")),Object(m.mdx)("p",null,"Any component that navigates between stateful child components should render NavigationPromptCheckpoints around those children. Each NavigationPrompt rendered by a child will be registered to the NavigationPromptCheckpoints above it in the component tree. The implementer of each NavigationPromptCheckpoint can use the registered data to prompt the user before navigating or prevent navigation altogether."),Object(m.mdx)("h4",{id:"onpromptchange"},Object(m.mdx)("inlineCode",{parentName:"h4"},"onPromptChange")),Object(m.mdx)("p",null,"The ",Object(m.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," function prop is used to communicate NavigationPrompt registrations to the implementer of a NavigationPromptCheckpoint. The function is called with an array of objects containing each registered NavigationPrompt's ",Object(m.mdx)("inlineCode",{parentName:"p"},"description")," and ",Object(m.mdx)("inlineCode",{parentName:"p"},"metaData")," properties."),Object(m.mdx)("blockquote",null,Object(m.mdx)("p",{parentName:"blockquote"},"Note: The ",Object(m.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," prop will be called after each NavigationPrompt registration and removal. It may be called more than once with the same array of NavigationPrompt data. Calls to ",Object(m.mdx)("inlineCode",{parentName:"p"},"setState")," within onPromptChange should be performed only when necessary to minimize component updates.")),Object(m.mdx)("h4",{id:"resolveprompts"},Object(m.mdx)("inlineCode",{parentName:"h4"},"resolvePrompts")),Object(m.mdx)("p",null,"The ",Object(m.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," function can be accessed from the ref to a NavigationPromptCheckpoint. Calling ",Object(m.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," results in a Promise being returned and a NotificationDialog being presented to the user with options to either confirm or cancel their action. If the user confirms the action, the dialog will close, and the returned Promise will be resolved. If the user cancels the action, the dialog will close, and the returned Promise will be rejected. If no NavigationPrompts are detected, no dialog is presented, and the returned Promise will be resolved."),Object(m.mdx)("p",null,Object(m.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," accepts either an Object or function argument. The Object should contain the text strings used to render the NotificationDialog. The function should return an Object containing the text strings used to render the NotificationDialog. Additionally, the function will receive an array of registered NavigationPrompts as an argument. The array of prompts can be used to create dynamic strings based on the current set of registered prompts."),Object(m.mdx)("p",null,"The keys expected in the resolvePrompts Object or return value include:"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:null},"Key"),Object(m.mdx)("th",{parentName:"tr",align:null},"Type"),Object(m.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"title")),Object(m.mdx)("td",{parentName:"tr",align:null},"String"),Object(m.mdx)("td",{parentName:"tr",align:null},"The title of the NotificationDialog.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"message")),Object(m.mdx)("td",{parentName:"tr",align:null},"String"),Object(m.mdx)("td",{parentName:"tr",align:null},"Deprecated, The message of the NotificationDialog. Resolves to 'startMessage'")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"startMessage")),Object(m.mdx)("td",{parentName:"tr",align:null},"String"),Object(m.mdx)("td",{parentName:"tr",align:null},"The starting message of the NotificationDialog.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"content")),Object(m.mdx)("td",{parentName:"tr",align:null},"Node"),Object(m.mdx)("td",{parentName:"tr",align:null},"The content of the NotificationDialog.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"endMessage")),Object(m.mdx)("td",{parentName:"tr",align:null},"String"),Object(m.mdx)("td",{parentName:"tr",align:null},"The ending message of the NotificationDialog.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"acceptButtonText")),Object(m.mdx)("td",{parentName:"tr",align:null},"String"),Object(m.mdx)("td",{parentName:"tr",align:null},"The text to render within the NotificationDialog's accept button.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"rejectButtonText")),Object(m.mdx)("td",{parentName:"tr",align:null},"String"),Object(m.mdx)("td",{parentName:"tr",align:null},"The text to render within the NotificationDialog's reject button.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"buttonOrder")),Object(m.mdx)("td",{parentName:"tr",align:null},"String"),Object(m.mdx)("td",{parentName:"tr",align:null},"A string indicating which action should be rendered first, required. Supported values include: ",Object(m.mdx)("inlineCode",{parentName:"td"},"acceptFirst"),", ",Object(m.mdx)("inlineCode",{parentName:"td"},"rejectFirst"),".")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"emphasizedAction")),Object(m.mdx)("td",{parentName:"tr",align:null},"String"),Object(m.mdx)("td",{parentName:"tr",align:null},"A string indicating which action should be rendered as emphasized. Supported values include: ",Object(m.mdx)("inlineCode",{parentName:"td"},"accept"),", ",Object(m.mdx)("inlineCode",{parentName:"td"},"reject"),", and ",Object(m.mdx)("inlineCode",{parentName:"td"},"none"),". Defaults to ",Object(m.mdx)("inlineCode",{parentName:"td"},"none"),".")))),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-jsx"},"const ResolvePromptExample = () => {\n  const [contentKey, setContentKey] = useState(false);\n  const checkpointRef = useRef();\n\n  /**\n   * This resolvePrompts implementation provides an Object directly.\n   */\n  const resetWithStaticText = () => {\n    checkpointRef.current.resolvePrompts({\n      title: 'Pending Changes',\n      startMessage: 'Data will be lost if this action is taken',\n      rejectButtonText: `Return`,\n      acceptButtonText: 'Continue without Saving',\n      buttonOrder: 'acceptFirst',\n    }).then(() => {\n      // User decided to continue\n      setContentKey({ contentKey: !state.contentKey });\n    }).catch(() => {\n      // User decided to cancel, so the state is not updated.\n    });\n  };\n\n  /**\n   * This resolvePrompts implementation provides a function that builds dynamic strings and return\n   * an Object.\n   */\n  const resetWithDynamicText = () => {\n    checkpointRef.current.resolvePrompts(prompts => ({\n      title: prompts.map(prompt => prompt.description).join(', '),\n      startMessage: `Data will be lost in the following sections: ${prompts.map(prompt => prompt.description).join(', ')}`,\n      rejectButtonText: `Return`,\n      acceptButtonText: 'Continue without Saving',\n    })).then(() => {\n      // User decided to continue\n      setContentKey({ contentKey: !state.contentKey });\n    }).catch(() => {\n      // User decided to cancel, so the state is not updated.\n    });\n  }\n\n  return (\n    <div>\n      <button onClick={resetWithStaticText}>\n        Reset (Static Message)\n      </button>\n      <button onClick={resetWithDynamicText}>\n        Reset (Dynamic Message)\n      </button>\n      <NavigationPromptCheckpoint\n        ref={checkpointRef}\n      >\n        <Form key={contentKey} />\n      </NavigationPromptCheckpoint>\n    </div>\n  )\n}\n")),Object(m.mdx)("h2",{id:"extending-the-navigationprompt"},"Extending the NavigationPrompt"),Object(m.mdx)("p",null,"The various APIs provided and consumed by the NavigationPrompt and NavigationPromptCheckpoint are purposefully broad and nonrestrictive. If more defined or restricted APIs are desirable for a application platform, these components can and should be wrapped by components that provide the necessary interfaces."),Object(m.mdx)("h2",{id:"component-features"},"Component Features"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support"))),Object(m.mdx)("h2",{id:"examples"},"Examples"),Object(m.mdx)(O,{mdxType:"NavigationPromptExample"}),Object(m.mdx)("h2",{id:"navigation-prompt-props-table"},"Navigation Prompt Props Table"),Object(m.mdx)(u,{mdxType:"NavigationPromptPropsTable"}),Object(m.mdx)("h2",{id:"navigation-prompt-checkpoint-props-table"},"Navigation Prompt Checkpoint Props Table"),Object(m.mdx)(h,{mdxType:"NavigationPromptCheckpointPropsTable"}))}P.isMDXComponent=!0}}]);