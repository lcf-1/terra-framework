(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),i=n.n(a),r=n(988),o=n.n(r),l=function(e){var t=e.url;return i.a.createElement(o.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-layout",name:"terra-application-layout",version:"5.51.0",url:t})}},1783:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(19),i=n.n(a),r=n(24),o=n.n(r),l=(n(0),n(335)),d=n(1107),m={};function p(e){var t=e.components,n=o()(e,["components"]);return Object(l.mdx)("wrapper",i()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(d.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-application-layout"},"Terra Application Layout"),Object(l.mdx)("p",null,"The Terra Application Layout is a responsive, themeable layout for building applications."),Object(l.mdx)("p",null,"The Terra Application Layout provides:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"A themeable, responsive application header, capable of rendering application-specific branding (provided by ",Object(l.mdx)("inlineCode",{parentName:"li"},"terra-application-name"),"), tabular navigation (provided by ",Object(l.mdx)("inlineCode",{parentName:"li"},"terra-application-links"),"), and user-centric utility controls (provided by ",Object(l.mdx)("inlineCode",{parentName:"li"},"terra-utility"),")"),Object(l.mdx)("li",{parentName:"ul"},"Responsive menu and content areas (provided by ",Object(l.mdx)("inlineCode",{parentName:"li"},"terra-layout"),")"),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"react-router"),"-based navigation and configuration (provided by ",Object(l.mdx)("inlineCode",{parentName:"li"},"terra-navigation-layout"),")")),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-layout"))))),Object(l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(l.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"react"),Object(l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"react-intl"),Object(l.mdx)("td",{parentName:"tr",align:null},"^2.8.0")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"terra-disclosure-manager"),Object(l.mdx)("td",{parentName:"tr",align:null},"^4.9.0")))),Object(l.mdx)("h2",{id:"component-features"},"Component Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support"))),Object(l.mdx)("h2",{id:"prerequisites"},"Prerequisites"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Like all Terra components, the ApplicationLayout requires the presence of a ",Object(l.mdx)("inlineCode",{parentName:"li"},"Base")," component (provided by ",Object(l.mdx)("inlineCode",{parentName:"li"},"terra-base"),") in its parent hierarchy."),Object(l.mdx)("li",{parentName:"ul"},"Additionally, the ApplicationLayout requires the presence of any ",Object(l.mdx)("inlineCode",{parentName:"li"},"Router")," component (provided by ",Object(l.mdx)("inlineCode",{parentName:"li"},"react-router-dom"),") in its parent hierarchy.")),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { HashRouter } from 'react-router-dom'; // BrowserRouter (with additional server configuration) or MemoryRouter could also be used\nimport Base from 'terra-base';\nimport ApplicationLayout from 'terra-application-layout';\n\n")),Object(l.mdx)("h2",{id:"props"},"Props"),Object(l.mdx)("h3",{id:"extensions"},"extensions"),Object(l.mdx)("h4",{id:"is-required-false"},"Is Required: ",Object(l.mdx)("inlineCode",{parentName:"h4"},"false")),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"extensions")," prop allows consumers to render an element within the ApplicationLayout's extensions region. The ",Object(l.mdx)("inlineCode",{parentName:"p"},"extensions")," content will be rendered in various ways depending on the current breakpoint. The ",Object(l.mdx)("inlineCode",{parentName:"p"},"extensions")," element will receive ",Object(l.mdx)("inlineCode",{parentName:"p"},"app")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"layoutConfig")," props from the ApplicationLayout, allowing it to interact with and respond to changes within the ApplicationLayout."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ApplicationLayout, { Utils } from 'terra-application-layout';\n\nconst MyExtensions = ({ app, layoutConfig }) => {\n  if (Utils.helpers.isSizeCompact(layoutConfig.size)) {\n    return (\n      <div>Extensions for ApplicationLayout menu!</div>\n    );\n  } else {\n    return (\n      <div>Extensions for ApplicationLayout header!</div>\n    );\n  }\n};\n")),Object(l.mdx)("h3",{id:"indexpath"},"indexPath"),Object(l.mdx)("h4",{id:"is-required-true"},"Is Required: ",Object(l.mdx)("inlineCode",{parentName:"h4"},"true")),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"indexPath")," prop allows consumers to set the default path of the ApplicationLayout. The ApplicationLayout will redirect to this path should users of the consuming application attempt to route to a component not detailed in the ",Object(l.mdx)("inlineCode",{parentName:"p"},"routingConfig")," prop. Accordingly, the ",Object(l.mdx)("inlineCode",{parentName:"p"},"indexPath")," value must have an associated entry within the ",Object(l.mdx)("inlineCode",{parentName:"p"},"routingConfig")," specification."),Object(l.mdx)("h3",{id:"nameconfig"},"nameConfig"),Object(l.mdx)("h4",{id:"is-required-false-1"},"Is Required: ",Object(l.mdx)("inlineCode",{parentName:"h4"},"false")),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"nameConfig")," prop allows consuming applications to add their own branding to the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",{parentName:"tr",align:null},"Key Name"),Object(l.mdx)("th",{parentName:"tr",align:null},"Type"),Object(l.mdx)("th",{parentName:"tr",align:null},"Is Required"),Object(l.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"accessory")),Object(l.mdx)("td",{parentName:"tr",align:null},"Element"),Object(l.mdx)("td",{parentName:"tr",align:null},"optional"),Object(l.mdx)("td",{parentName:"tr",align:null},"A React element that will be presented beside the title. This is typically some sort of icon or visual branding.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"title")),Object(l.mdx)("td",{parentName:"tr",align:null},"String"),Object(l.mdx)("td",{parentName:"tr",align:null},"optional"),Object(l.mdx)("td",{parentName:"tr",align:null},"The title of the application. This text will be styled by the ApplicationLayout.")))),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"const myNameConfig = {\n  accessory: <MyApplicationLogo />,\n  title: 'My Application',\n}\n")),Object(l.mdx)("h3",{id:"navigationitems"},"navigationItems"),Object(l.mdx)("h4",{id:"is-required-false-2"},"Is Required: ",Object(l.mdx)("inlineCode",{parentName:"h4"},"false")),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"navigationItems")," prop allows consumers to render high-level, primary navigation controls directly within the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint. If ",Object(l.mdx)("inlineCode",{parentName:"p"},"navigationItems")," are omitted, no primary navigation controls will be rendered."),Object(l.mdx)("p",null,"Each navigation item provided must be associated to a path that is present within the ",Object(l.mdx)("inlineCode",{parentName:"p"},"routingConfig")," specification. The navigation item, as rendered by the ApplicationLayout, will route to that path upon selection."),Object(l.mdx)("p",null,"The value provided for ",Object(l.mdx)("inlineCode",{parentName:"p"},"navigationItems")," should be an array of objects with the following API:"),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",{parentName:"tr",align:null},"Key Name"),Object(l.mdx)("th",{parentName:"tr",align:null},"Type"),Object(l.mdx)("th",{parentName:"tr",align:null},"Is Required"),Object(l.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"text")),Object(l.mdx)("td",{parentName:"tr",align:null},"String"),Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("strong",{parentName:"td"},"required")),Object(l.mdx)("td",{parentName:"tr",align:null},"A string rendered within the navigation item control.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"path")),Object(l.mdx)("td",{parentName:"tr",align:null},"Element"),Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("strong",{parentName:"td"},"required")),Object(l.mdx)("td",{parentName:"tr",align:null},"A string path to route to upon navigation item selection. This path should be present within the ",Object(l.mdx)("inlineCode",{parentName:"td"},"routingConfig")," as well.")))),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"const navigationItems = [{\n  path: '/page_1',\n  text: 'Page 1',\n}, {\n  path: '/page_2',\n  text: 'Page 2',\n}];\n")),Object(l.mdx)("h3",{id:"routingconfig"},"routingConfig"),Object(l.mdx)("h4",{id:"is-required-true-1"},"Is Required: ",Object(l.mdx)("inlineCode",{parentName:"h4"},"true")),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"routingConfig")," prop allows consuming applications to render components within the ApplicationLayout's ",Object(l.mdx)("inlineCode",{parentName:"p"},"content")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"menu")," regions based upon the router location."),Object(l.mdx)("p",null,"The ApplicationLayout directly implements the ",Object(l.mdx)("inlineCode",{parentName:"p"},"NavigationLayout")," from ",Object(l.mdx)("inlineCode",{parentName:"p"},"terra-navigation-layout"),". However, while the ",Object(l.mdx)("inlineCode",{parentName:"p"},"NavigationLayout")," allows for the customization of the ",Object(l.mdx)("inlineCode",{parentName:"p"},"header")," region of the layout, the ",Object(l.mdx)("inlineCode",{parentName:"p"},"ApplicationLayout")," does not. Any ",Object(l.mdx)("inlineCode",{parentName:"p"},"header")," entries provided with the ",Object(l.mdx)("inlineCode",{parentName:"p"},"routingConfig")," prop will be ignored. Please review the ",Object(l.mdx)("inlineCode",{parentName:"p"},"NavigationLayout")," documentation for more information regarding its usage."),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},"Note: Usage of the path ",Object(l.mdx)("inlineCode",{parentName:"p"},"'/'")," is restricted for ",Object(l.mdx)("inlineCode",{parentName:"p"},"menu")," components. The ApplicationLayout will dynamically inject configuration for the ",Object(l.mdx)("inlineCode",{parentName:"p"},"'/'")," path when necessary to properly render navigationItems at ",Object(l.mdx)("inlineCode",{parentName:"p"},"compact")," breakpoints.")),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"const routingConfig = {\n  /**\n   * Components defined under `content` will render within the ApplicationLayout's body.\n   */\n  content: {\n    /**\n     * Each entry must be keyed; typically, this key matches the path for the component.\n     */\n    '/page_1' : {\n      /**\n       * The `path` value will be validated against the router location with each location change. When the location\n       * matches this path, the component specified by the sibling `component` value will be rendered. If more than\n       * one component matches the current location, only the component with the closest match will be rendered.\n       */\n      path: '/page_1',\n      /**\n       * The `component` value specifies what component will be rendered. The value is an Object with support for the\n       * following keys: default, tiny, small, medium, large, and huge. These keys correspond to the responsive breakpoint\n       * of the ApplicationLayout. When the ApplicationLayout is small, the component under the small key will be rendered.\n       * When the application is large, the component under the large key will be rendered, and so on.\n       *\n       * The default key is different in that its component will render for all breakpoints unless that specific breakpoint is\n       * also defined. For example, if a component is defined for default and small, and the current responsive breakpoint is small,\n       * then the small component will be rendered. However, if the responsive breakpoint were to be huge, then the default component\n       * would be rendered (rather than no component at all).\n       */\n      component: {\n        default: {\n          /**\n           * The component specification for a given breakpoint must include a componentClass value. This is a React component\n           * function or class. It should not be an instantiated React element. For example, given a component named Page1Content,\n           * the componentClass value should be Page1Content, not `<Page1Content />`.\n           */\n          componentClass: Page1Content,\n          /**\n           * Props can also be defined for the component. These will be applied when the React element is created by the\n           * ApplicationLayout. If no props are desired, the `props` key can be omitted.\n           */\n          props: {\n            propFromConfig: 'Value from config',\n          }\n        },\n        small: {\n          /**\n           * The same component can be defined for multiple breakpoints. Here, the prop values just are changing for this specific\n           * size.\n           */\n          componentClass: Page1Content,\n          propFromConfig: 'My value is different only when small',\n        }\n        large: {\n          /**\n           * Or, a different component can be loaded altogether.\n           */\n          componentClass: LargePage1Content,\n        }\n      },\n    },\n    '/page_2' : {\n      path: '/page_2',\n      component: {\n        default: {\n          componentClass: Page2Content,\n        },\n      },\n    },\n  },\n  /**\n   * Components defined under `menu` will render within the ApplicationLayout's menu sidebar. All other aspects of the API\n   * match that of the content region described above.\n   *\n   * A content entry does not need to have an associated menu entry. In this example, because there is no menu defined for\n   * the path '/page_2', the ApplicationLayout will hide the menu sidebar when the '/page_2' content is rendered.\n   */\n  menu: {\n    'Page 1' : {\n      path: '/page_1',\n      component: {\n        default: {\n          componentClass: Page1Menu,\n        },\n      },\n    },\n  },\n};\n")),Object(l.mdx)("h3",{id:"utilityconfig"},"utilityConfig"),Object(l.mdx)("h4",{id:"is-required-false-3"},"Is Required: ",Object(l.mdx)("inlineCode",{parentName:"h4"},"false")),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"utilityConfig")," prop allows consuming applications to present an application-level menu directly from the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint."),Object(l.mdx)("p",null,"The API for the ",Object(l.mdx)("inlineCode",{parentName:"p"},"utilityConfig")," matches that of the ",Object(l.mdx)("inlineCode",{parentName:"p"},"ApplicationHeaderUtility")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"ApplicationMenuUtility")," components from ",Object(l.mdx)("inlineCode",{parentName:"p"},"terra-application-utility"),". Please see their respective documentation for more information regarding their full capabilities."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",{parentName:"tr",align:null},"Key Name"),Object(l.mdx)("th",{parentName:"tr",align:null},"Type"),Object(l.mdx)("th",{parentName:"tr",align:null},"Is Required"),Object(l.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"title")),Object(l.mdx)("td",{parentName:"tr",align:null},"String"),Object(l.mdx)("td",{parentName:"tr",align:null},"optional"),Object(l.mdx)("td",{parentName:"tr",align:null},"A string rendered within the utility menu's presentation target.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"accessory")),Object(l.mdx)("td",{parentName:"tr",align:null},"Element"),Object(l.mdx)("td",{parentName:"tr",align:null},"optional"),Object(l.mdx)("td",{parentName:"tr",align:null},"A React element rendered next to the title.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"menuItems")),Object(l.mdx)("td",{parentName:"tr",align:null},"Array"),Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("strong",{parentName:"td"},"required")),Object(l.mdx)("td",{parentName:"tr",align:null},"An array of objects specifying the utility menu options to present.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"initialSelectedKey")),Object(l.mdx)("td",{parentName:"tr",align:null},"String"),Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("strong",{parentName:"td"},"required")),Object(l.mdx)("td",{parentName:"tr",align:null},"The string key of the initial menu item to present.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"onChange")),Object(l.mdx)("td",{parentName:"tr",align:null},"Function"),Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("strong",{parentName:"td"},"required")),Object(l.mdx)("td",{parentName:"tr",align:null},"A function that will be called upon selection of a terminal utility item.")))),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Avatar from 'terra-avatar';\nimport ApplicationLayout, { Utils } from 'terra-application-layout';\n\nconst myUtilityConfig = {\n  title: 'Doe, John',\n  accessory: <Avatar variant=\"user\" ariaLabel=\"Doe, John\" initials=\"JD\"/>,\n  menuItems: [{\n    key: 'menu',\n    title: 'Menu',\n    childKeys: ['item-1', 'item-2', 'item-3', 'item-4'],\n  }, {\n    key: 'item-1',\n    title: 'Item 1',\n  }, {\n    key: 'item-2',\n    title: 'Toggle Item - Checked',\n    isSelectable: true,\n    isSelected: true,\n  },  {\n    key: 'item-3',\n    title: 'Toggle Item - Not Checked',\n    isSelectable: true,\n    isSelected: false,\n  }, {\n    key: 'item-4',\n    contentLocation: Utils.utilityHelpers.locations.FOOTER,\n    title: 'Footer Item',\n  }],\n  initialSelectedKey: 'menu',\n  onChange: (event, itemData, disclose) => {\n    /**\n     * This function will be called when items are selected within the utility menu.\n     * The disclose parameter is provided for convenience, but any presentation method\n     * could be used to handle that menu content selection.\n     */\n  },\n};\n")),Object(l.mdx)("h2",{id:"responsive-design"},"Responsive Design"),Object(l.mdx)("p",null,"The ApplicationLayout has two rendering modes: ",Object(l.mdx)("inlineCode",{parentName:"p"},"standard")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"compact"),"."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"The ",Object(l.mdx)("inlineCode",{parentName:"li"},"standard")," rendering occurs at ",Object(l.mdx)("inlineCode",{parentName:"li"},"medium"),", ",Object(l.mdx)("inlineCode",{parentName:"li"},"large"),", and ",Object(l.mdx)("inlineCode",{parentName:"li"},"huge")," breakpoints."),Object(l.mdx)("li",{parentName:"ul"},"The ",Object(l.mdx)("inlineCode",{parentName:"li"},"compact")," rendering occurs at ",Object(l.mdx)("inlineCode",{parentName:"li"},"tiny")," and ",Object(l.mdx)("inlineCode",{parentName:"li"},"small")," breakpoints.")),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",{parentName:"tr",align:null},"Prop"),Object(l.mdx)("th",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"th"},"standard")," Rendering"),Object(l.mdx)("th",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"th"},"compact")," Rendering"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"nameConfig")),Object(l.mdx)("td",{parentName:"tr",align:null},"Content is rendered within ApplicationLayout's header."),Object(l.mdx)("td",{parentName:"tr",align:null},"Same as ",Object(l.mdx)("inlineCode",{parentName:"td"},"standard"),".")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"utilityConfig")),Object(l.mdx)("td",{parentName:"tr",align:null},"Content is rendered within the ApplicationLayout's header. The utility menu is presented using a popup (as provided by ",Object(l.mdx)("inlineCode",{parentName:"td"},"terra-popup"),")."),Object(l.mdx)("td",{parentName:"tr",align:null},"Content is rendered within the ApplicationMenuWrapper that wraps all menu content at ",Object(l.mdx)("inlineCode",{parentName:"td"},"compact")," breakpoints. The utility menu is presented modally (using the ApplicationLayout's included ModalManager).")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"navigationItems")),Object(l.mdx)("td",{parentName:"tr",align:null},"Content is rendered within the ApplicationLayout's header as tabs (as provided by ",Object(l.mdx)("inlineCode",{parentName:"td"},"terra-application-links"),")."),Object(l.mdx)("td",{parentName:"tr",align:null},"Content is rendered within a custom menu generated by the ApplicationLayout. This menu is injected into the ",Object(l.mdx)("inlineCode",{parentName:"td"},"routingConfig")," for the ",Object(l.mdx)("inlineCode",{parentName:"td"},"'/'")," path so that it will preceed any other defined routes. Other menu components are able to navigate to the default navigation menu by calling their ",Object(l.mdx)("inlineCode",{parentName:"td"},"routingStackDelegate"),"'s ",Object(l.mdx)("inlineCode",{parentName:"td"},"showParent")," function.")))),Object(l.mdx)("h2",{id:"menucontent-component-configuration"},"Menu/Content Component Configuration"),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"routingConfig")," prop specifies which components will be rendered in the ApplicationLayout's ",Object(l.mdx)("inlineCode",{parentName:"p"},"content")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"menu")," regions. These components receive a set of props from the ApplicationLayout that they must utilize; otherwise, these components can be completely defined by the consuming application."),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},"Note: Because the ",Object(l.mdx)("inlineCode",{parentName:"p"},"ApplicationLayout")," utilizes client-side routing provided by ",Object(l.mdx)("inlineCode",{parentName:"p"},"react-router-dom"),", the usage of ",Object(l.mdx)("inlineCode",{parentName:"p"},"<a href=>")," links and page anchors is restricted. Usage of links and page anchors may negatively impact navigation within an application. ",Object(l.mdx)("inlineCode",{parentName:"p"},"<Link />")," components provided by ",Object(l.mdx)("inlineCode",{parentName:"p"},"react-router-dom")," or custom events can and should be used instead.")),Object(l.mdx)("p",null,"The components rendered in these regions are guaranteed to receive the following props from the ApplicationLayout:"),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",{parentName:"tr",align:null},"Prop Name"),Object(l.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"layoutConfig")),Object(l.mdx)("td",{parentName:"tr",align:null},"The ",Object(l.mdx)("inlineCode",{parentName:"td"},"layoutConfig")," contains properties describing the ApplicationLayout's state and functions that allow for the manipulation of that state.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"routingStackDelegate")),Object(l.mdx)("td",{parentName:"tr",align:null},"The ",Object(l.mdx)("inlineCode",{parentName:"td"},"routingStackDelegate")," contains APIs that allow for virtual navigation within a set of matched component paths.")))),Object(l.mdx)("p",null,"Each component specified in the ",Object(l.mdx)("inlineCode",{parentName:"p"},"routingConfig")," needs to be able to accept these props and render appropriately. If a component does not appropriately handle them (i.e. it renders unknown props, like ",Object(l.mdx)("inlineCode",{parentName:"p"},"terra-button")," and many other generic Terra components), warnings and/or errors may be thrown."),Object(l.mdx)("h2",{id:"routingmenu---a-default-menu-implementation"},Object(l.mdx)("inlineCode",{parentName:"h2"},"RoutingMenu")," - A default menu implementation"),Object(l.mdx)("p",null,"The ApplicationLayout also provides the ",Object(l.mdx)("inlineCode",{parentName:"p"},"RoutingMenu"),", a menu component for applications desiring route-based navigation within their menu region. The ",Object(l.mdx)("inlineCode",{parentName:"p"},"RoutingMenu")," can be specified directly within the ",Object(l.mdx)("inlineCode",{parentName:"p"},"routingConfig")," or wrapped by another component for more custom implementations."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"th"},"RoutingMenu")," Props"),Object(l.mdx)("th",{parentName:"tr",align:null},"Type"),Object(l.mdx)("th",{parentName:"tr",align:null},"Is Required"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"layoutConfig")),Object(l.mdx)("td",{parentName:"tr",align:null},"Object"),Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("strong",{parentName:"td"},"required"))),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"menuItems")),Object(l.mdx)("td",{parentName:"tr",align:null},"Array"),Object(l.mdx)("td",{parentName:"tr",align:null},"optional")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"routingStackDelegate")),Object(l.mdx)("td",{parentName:"tr",align:null},"Object"),Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("strong",{parentName:"td"},"required"))),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"title")),Object(l.mdx)("td",{parentName:"tr",align:null},"String"),Object(l.mdx)("td",{parentName:"tr",align:null},"optional")))),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"th"},"menuItems")," Object Keys"),Object(l.mdx)("th",{parentName:"tr",align:null},"Type"),Object(l.mdx)("th",{parentName:"tr",align:null},"Is Required"),Object(l.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"text")),Object(l.mdx)("td",{parentName:"tr",align:null},"String"),Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("strong",{parentName:"td"},"required")),Object(l.mdx)("td",{parentName:"tr",align:null},"The text string that will be rendered for the menu item.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"path")),Object(l.mdx)("td",{parentName:"tr",align:null},"String"),Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("strong",{parentName:"td"},"required")),Object(l.mdx)("td",{parentName:"tr",align:null},"The text path that will routed to upon item selection.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"hasSubMenu")),Object(l.mdx)("td",{parentName:"tr",align:null},"Boolean"),Object(l.mdx)("td",{parentName:"tr",align:null},"optional"),Object(l.mdx)("td",{parentName:"tr",align:null},"Indicates whether or not the item has subsequent menus. If true, a chevron will be rendered on the item.")))),Object(l.mdx)("h2",{id:"summary"},"Summary"),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},"The ApplicationLayout requires a ",Object(l.mdx)("inlineCode",{parentName:"li"},"Base")," component (from ",Object(l.mdx)("inlineCode",{parentName:"li"},"terra-base"),") and any ",Object(l.mdx)("inlineCode",{parentName:"li"},"Router")," component (from ",Object(l.mdx)("inlineCode",{parentName:"li"},"react-router-dom"),") in its parent hierarchy."),Object(l.mdx)("li",{parentName:"ol"},"The ",Object(l.mdx)("inlineCode",{parentName:"li"},"nameConfig")," prop customizes the ApplicationLayout's branding."),Object(l.mdx)("li",{parentName:"ol"},"The ",Object(l.mdx)("inlineCode",{parentName:"li"},"utilityConfig")," prop generates an utilities menu and presentation controls within the layout. A default set of options can be generated by a helper."),Object(l.mdx)("li",{parentName:"ol"},"The ",Object(l.mdx)("inlineCode",{parentName:"li"},"routingConfig")," prop determines which components get rendered in the ApplicationLayout's ",Object(l.mdx)("inlineCode",{parentName:"li"},"menu")," and ",Object(l.mdx)("inlineCode",{parentName:"li"},"content")," regions based on the router location. Usage of the path ",Object(l.mdx)("inlineCode",{parentName:"li"},"'/'")," is restricted for ",Object(l.mdx)("inlineCode",{parentName:"li"},"menu")," components inside the ",Object(l.mdx)("inlineCode",{parentName:"li"},"routingConfig"),"."),Object(l.mdx)("li",{parentName:"ol"},"The ",Object(l.mdx)("inlineCode",{parentName:"li"},"navigationItems")," prop generates primary navigation controls within the layout. The provided navigation items should have associated content in the ",Object(l.mdx)("inlineCode",{parentName:"li"},"routingConfig"),"."),Object(l.mdx)("li",{parentName:"ol"},"The ",Object(l.mdx)("inlineCode",{parentName:"li"},"indexPath")," prop determines the default redirect location for the layout. The provided path should have associated content in the ",Object(l.mdx)("inlineCode",{parentName:"li"},"routingConfig"),"."),Object(l.mdx)("li",{parentName:"ol"},"Menu and content components rendered within the ApplicationLayout receive an ",Object(l.mdx)("inlineCode",{parentName:"li"},"app")," prop with default support for modal disclosures."),Object(l.mdx)("li",{parentName:"ol"},"Menu and content components rendered within the ApplicationLayout also receive a ",Object(l.mdx)("inlineCode",{parentName:"li"},"layoutConfig")," prop for layout state manipulation."),Object(l.mdx)("li",{parentName:"ol"},"Menu and content components rendered within the ApplicationLayout also receive an ",Object(l.mdx)("inlineCode",{parentName:"li"},"routingStackDelegate")," prop. The ",Object(l.mdx)("inlineCode",{parentName:"li"},"show")," and ",Object(l.mdx)("inlineCode",{parentName:"li"},"showParent")," functions of the ",Object(l.mdx)("inlineCode",{parentName:"li"},"routingStackDelegate")," should be used for virtual navigation within configuration regions."),Object(l.mdx)("li",{parentName:"ol"},"The RoutingMenu component can be used directly for an off-the-shelf route-based navigation menu implementation.")))}p.isMDXComponent=!0},988:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),i=l(n(2)),r=l(n(5)),o=l(n(989));function l(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(o.default),m={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},p=function(e){var t=e.src,n=e.name,i=e.url,r=e.version,o=a.default.createElement("a",{className:d("badge"),href:i||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},a.default.createElement("span",{className:d("badge-name")},i?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(r))),l=t?a.default.createElement("a",{className:d("badge"),href:t},a.default.createElement("span",{className:d("badge-name")},"github"),a.default.createElement("span",{className:d("badge-version")},"source")):void 0;return a.default.createElement("div",{className:d("badge-container")},o,l)};p.propTypes=m;var c=p;t.default=c},989:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}}}]);