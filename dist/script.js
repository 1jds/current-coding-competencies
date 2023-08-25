var script = {
  data() {
    return {
      pageTitle: "Current Coding Competencies",
      items: [
        {
          id: 1,
          languageName: "HTML",
          skillLevelNum: 7,
          displayDetails: false,
          message: [
            `I have worked with HTML consistently, and am comfortable with it, and with making use of reference resources such as MDN for anything that I need to clarify about it.`,
            `I have completed the FreeCodeCamp HTML curriculum, and built two static HTML-orientated websites previously deployed to hosting with VentraIP at a purchased domain.`,
            `I have some awareness of including accessibility features such as ARIA labels in HTML.`
          ]
        },
        {
          id: 2,
          languageName: "CSS",
          skillLevelNum: 7,
          displayDetails: false,
          message: [
            `I have used CSS a decent amount, and continue to learn in this area by following leading CSS-creators such as Kevin Powell, and CSS resources such as CSS-Tricks and Smashing Magazine.`,
            `I also have some exposure to CSS frameworks such as SASS and SCSS. This Codepen is an example of the use of CSS custom properties, transitions, media-queries, Google fonts, etc.`,
            `I can use the Chrome dev tools to debug, reverse-engineer, or otherwise inspect CSS.`
          ]
        },
        {
          id: 3,
          languageName: "JavaScript",
          skillLevelNum: 6,
          displayDetails: false,
          message: [
            `I have completed the FreeCodeCamp curriculum for JavaScript, as well as all of the challenges on www.jschallenger.com`,
            `I have some familiarity with using vanilla JavaScript for DOM manipulation, API calls (e.g. with GET and PUT), cookie usage, local storage.`,
            `I can use the Chrome dev tools to monitor console logs, network activities such as GET requests and associated statuses`
          ]
        },
        {
          id: 4,
          languageName: "TypeScript",
          skillLevelNum: 3,
          displayDetails: false,
          message: [
            `I have made some limited use of TypeScript in React when working on a small project using the weather.com API`,
            `I am not familiar with advanced features of TypeScript, but am aware of the most-common basics such as Types, Interfaces, expected function return types, and so on.`
          ]
        },
        {
          id: 5,
          languageName: "React",
          skillLevelNum: 6,
          displayDetails: false,
          message: [
            `I have completed a General Assembly certificate for React, the FreeCodeCamp React curriculum, and two Scrimba React courses.`,
            `I have used React and Vanilla JavaScript to build a number of projects, making use of a wide range of JavaScript methods and React hooks.`,
            `I have used both class-based components and more modern function components, and am comfortable using the documentation.`
          ]
        },
        {
          id: 6,
          languageName: "Vue",
          skillLevelNum: 3,
          displayDetails: false,
          message: [
            `I have only just begun learning Vue. However, it shares many characteristics with React, such as composability and reusable components with props.`,
            `Vue's Options API is most similar to React's Class-based components, and while there is not a one-to-one syntax correspondence, the two frameworks share many similarities (e.g. useEffect vs. watchEffect).`
          ]
        },
        {
          id: 7,
          languageName: "Git",
          skillLevelNum: 4,
          displayDetails: false,
          message: [
            `I have used Git through VS Code, both through the GUI and through the terminal.`,
            `I am familiar with the simpler, more common commands and tasks such as initialising, cloning, pulling, pushing, branching, merging, using 'git status', and so on.`
          ]
        },
        {
          id: 8,
          languageName: "GitHub",
          skillLevelNum: 4,
          displayDetails: false,
          message: [
            `I have some experience using GitHub as a user with a few of my own repositories, as a participant in a GitHub enterprise repository, and as an individual accessing others' repos for NPM packages, tutorials, and the like.`,
            `I have basic experience using GitHub to clone a remote repo via HTTPS, make pull requests, compare diffs between merges, and use some actions.`
          ]
        },
        {
          id: 9,
          languageName: "Node",
          skillLevelNum: 4,
          displayDetails: false,
          message: [`I have completed several study projects using Node and Express as a server connected to MongoDB as part of the Free Code Camp curriculum. The projects involved handling routes for API end-points, making use of Chai and Mocha for testing, and interacting with my own free-tier MongoDB database.`]
        },
        {
          id: 10,
          languageName: "SQL",
          skillLevelNum: 5,
          displayDetails: false,
          message: [
            `I have not yet used SQL in a project, but have begun to learn it, PostgreSQL, and Bash scripting through the FreeCodeCamp curriculum.`
          ]
        },
        {
          id: 11,
          languageName: "Linux CL",
          skillLevelNum: 1,
          displayDetails: false,
          message: [
            `I have not used the Linux Command Line, but am giving this a score of 1 instead of 0, because I've used the GitBash terminal, and PowerShell somewhat.`
          ]
        },
        {
          id: 12,
          languageName: "GitBash CL",
          skillLevelNum: 3,
          displayDetails: false,
          message: [
            `I have used this Bash terminal in VS Code for running Git commands, navigating directories, installing NPM packages, and running NPM commands.`
          ]
        },
        {
          id: 13,
          languageName: "C#",
          skillLevelNum: 0,
          displayDetails: false,
          message: [`I have not used C# before.`]
        },
        {
          id: 14,
          languageName: "Bootstrap",
          skillLevelNum: 6,
          displayDetails: false,
          message: [
            `I have used Bootstrap 5 with minor modifications for the base stylings of a website, and for functional components such as accordions and tooltips.`
          ]
        },
        {
          id: 15,
          languageName: "Material UI",
          skillLevelNum: 5,
          displayDetails: false,
          message: [
            `I have made limited use of Material UI, but feel confident in using it given its similarity to Bootstrap.`
          ]
        },
        {
          id: 16,
          languageName: "cPanel",
          skillLevelNum: 2,
          displayDetails: false,
          message: [
            `I have made use of cPanel to deploy a static website to a web hosting service, and to manage and edit source files.`
          ]
        },
        {
          id: 17,
          languageName: "YAML",
          skillLevelNum: 2,
          displayDetails: false,
          message: [
            `I have once set up a YAML pipeline - following a tutorial with minor modifications - to promote changes from a GitHub repository to an AWS bucket.`
          ]
        }
      ]
    };
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("h1", [_vm._v(_vm._s(_vm.pageTitle))]),
      _vm._v(" "),
      _vm._l(_vm.items, function(item, index) {
        return _c("div", { key: item.id }, [
          _c(
            "div",
            {
              staticClass: "language",
              class: { "language-active-border": item.displayDetails }
            },
            [
              _c("h2", [_vm._v(_vm._s(item.languageName))]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "scale" },
                _vm._l(11, function(index) {
                  return _c(
                    "div",
                    {
                      class: {
                        "scale-glow": index - 1 <= item.skillLevelNum,
                        "scale-grey": index - 1 > item.skillLevelNum
                      }
                    },
                    [_vm._v("\n          " + _vm._s(index - 1) + "\n        ")]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn-more-info",
                  class: {
                    "btn-more-info-rotated-180deg": item.displayDetails
                  },
                  on: {
                    click: function($event) {
                      item.displayDetails = !item.displayDetails;
                    }
                  }
                },
                [
                  _c("span", { staticClass: "material-symbols-outlined" }, [
                    _vm._v("\n          expand_more\n        ")
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "transition-container",
              class: {
                "transition-container-on": item.displayDetails,
                "transition-container-off": !item.displayDetails
              }
            },
            [
              _c(
                "div",
                _vm._l(item.message, function(para) {
                  return _c(
                    "p",
                    {
                      class: {
                        "details-paras": item.message.length > 1,
                        "details-para": item.message.length === 1
                      }
                    },
                    [_vm._v("\n          " + _vm._s(para) + "\n        ")]
                  )
                }),
                0
              )
            ]
          )
        ])
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1)
    ],
    2
  )
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("p", { staticClass: "final-comment" }, [
      _vm._v("\n    See a larger solo React project CICD\n    "),
      _c(
        "a",
        {
          staticClass: "a-text-links",
          attrs: {
            href:
              "http://js-ga-assets.s3-website-ap-southeast-2.amazonaws.com/poems",
            target: "_blank",
            rel: "noopener"
          }
        },
        [_vm._v("\n      deployed to AWS\n    ")]
      )
    ])
  },
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "a",
      {
        attrs: {
          href: "https://github.com/1jds",
          target: "_blank",
          rel: "noopener"
        }
      },
      [_c("button", { staticClass: "btn-main" }, [_vm._v("Go to GitHub")])]
    )
  }
];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-54d552dd_0", { source: "\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  --neon-font: \"Tilt Neon\", cursive;\n  --main-font: \"Poppins\", Avenir, Helvetica, Arial, sans-serif;\n  --glow-color: #4fc08d;\n  --bg-color: #151b24;\n  --lighter-grey: hsl(0 0% 100% / 0.2);\n  --darker-grey: #202833;\n  background: var(--bg-color);\n  padding: 60px 100px;\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 730px) {\nbody {\n    padding: 1rem;\n}\n}\n@media (max-width: 375px) {\nbody {\n    margin: 0;\n    padding: 0;\n}\n}\n#app {\n  width: 100%;\n  max-width: 900px;\n  text-align: center;\n  color: #fff;\n  font-family: var(--main-font);\n}\nh1 {\n  font-size: 2.5rem;\n}\n@media (max-width: 350px) {\nh1 {\n    font-size: 2rem;\n}\n}\na {\n  all: unset;\n}\n.a-text-links {\n  color: var(--glow-color);\n  text-decoration: underline;\n  cursor: pointer;\n}\n.final-comment {\n  padding-top: 2rem;\n}\nbutton {\n  all: unset;\n  cursor: pointer;\n}\n.btn-main {\n  color: var(--glow-color);\n  background: none;\n  border: solid 1px;\n  border-radius: 2em;\n  font: inherit;\n  padding: 0.75em 2em;\n  margin-top: 0.5rem;\n}\n.btn-more-info {\n  position: absolute;\n  bottom: -1.15rem;\n  right: 1rem;\n  z-index: 2;\n  background: var(--bg-color);\n  color: var(--lighter-grey);\n  border-radius: 50%;\n  height: 2.2rem;\n  transition: all 400ms;\n}\n.btn-more-info-rotated-180deg {\n  transform: rotate(180deg);    \n  color: var(--glow-color);\n  transition: all 400ms;\n}\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 700, \"GRAD\" 0, \"opsz\" 48;\n  font-size: 2.25rem;\n}\n.language {\n  padding: 0rem 2rem;\n  background: var(--bg-color);\n  border-bottom: 5px solid var(--darker-grey);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  position: relative;\n}\n.language-active-border {\n  box-shadow: 0px 4px 10px var(--bg-color);\n  border-bottom: 5px solid var(--glow-color);\n  transition: border 300ms;\n}\n@media (max-width: 960px) {\n.language {\n    padding: 2rem;\n}\n}\n.scale {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n@media (max-width: 550px) {\n.scale {\n    flex-wrap: wrap;\n}\n}\n.scale > div {\n  font-size: 1rem;\n  font-weight: bold;\n  font-family: var(--neon-font);\n  border-radius: 2px;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-color);\n}\n.scale-glow {\n  --local-var: var(--glow-color);\n  color: var(--local-var);\n  border: 1px solid var(--local-var);\n  box-shadow: inset 0 0 0.4rem 0 var(--local-var), 0 0 0.4rem 0 var(--local-var);\n}\n.scale-grey {\n  --local-var: var(--lighter-grey);\n  color: var(--local-var);\n  border: 1px solid var(--local-var);\n  box-shadow: inset 0 0 0.4rem 0 var(--local-var), 0 0 0.4rem 0 var(--local-var);\n}\n.language > h2 {\n  font-size: 2rem;\n  flex-basis: 10ch;\n  text-align: start;\n}\n@media (max-width: 275px) {\nh1 {\n    font-size: 1.5rem;\n    word-wrap: break-word;\n}\n.language > h2 {\n    font-size: 1.4rem;\n    word-wrap: break-word;\n}\n}\n.transition-container {\n  display: grid;\n  transition: grid-template-rows 500ms;\n}\n.transition-container-off {\n  grid-template-rows: 0fr;\n}\n.transition-container-on {\n  grid-template-rows: 1fr;\n}\n.transition-container > div {\n  overflow: hidden;\n}\n.details-para {\n  background: var(--darker-grey);\n  margin: 0;\n  padding: 1.25rem 2rem;\n  text-align: start;\n}\n.details-paras {\n  background: var(--darker-grey);\n  margin: 0;\n  padding: 0.75rem 2rem;\n  text-align: start;\n}\n.details-paras:first-child {\n  background: var(--darker-grey);\n  margin: 0;\n  padding: 1.25rem 2rem 0.75rem 2rem;\n  text-align: start;\n}\n.details-paras:last-child {\n  background: var(--darker-grey);\n  margin: 0;\n  padding: 0.75rem 2rem 1.25rem 2rem;\n  text-align: start;\n}\n", map: {"version":3,"sources":["/tmp/codepen/vuejs/src/pen.vue"],"names":[],"mappings":";AAqPA;EACA,mCAAA;EACA,kCAAA;EACA,kCAAA;EACA,iCAAA;EACA,4DAAA;EACA,qBAAA;EACA,mBAAA;EACA,oCAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;AACA;AAEA;AACA;IACA,aAAA;AACA;AACA;AAEA;AACA;IACA,SAAA;IACA,UAAA;AACA;AACA;AAEA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,6BAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;AACA;IACA,eAAA;AACA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,wBAAA;EACA,0BAAA;EACA,eAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,UAAA;EACA,eAAA;AACA;AAEA;EACA,wBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,UAAA;EACA,2BAAA;EACA,0BAAA;EACA,kBAAA;EACA,cAAA;EACA,qBAAA;AACA;AAEA;EACA,yBAAA;EACA,wBAAA;EACA,qBAAA;AACA;AAEA;EACA,kEAAA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;EACA,2BAAA;EACA,2CAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;AACA;AAEA;EACA,wCAAA;EACA,0CAAA;EACA,wBAAA;AACA;AAEA;AACA;IACA,aAAA;AACA;AACA;AAEA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;AACA;AAEA;AACA;IACA,eAAA;AACA;AACA;AAEA;EACA,eAAA;EACA,iBAAA;EACA,6BAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,2BAAA;AACA;AAEA;EACA,8BAAA;EACA,uBAAA;EACA,kCAAA;EACA,8EAAA;AACA;AAEA;EACA,gCAAA;EACA,uBAAA;EACA,kCAAA;EACA,8EAAA;AACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AACA;AAEA;AACA;IACA,iBAAA;IACA,qBAAA;AACA;AAEA;IACA,iBAAA;IACA,qBAAA;AACA;AACA;AAEA;EACA,aAAA;EACA,oCAAA;AACA;AAEA;EACA,uBAAA;AACA;AAEA;EACA,uBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,8BAAA;EACA,SAAA;EACA,qBAAA;EACA,iBAAA;AACA;AAEA;EACA,8BAAA;EACA,SAAA;EACA,qBAAA;EACA,iBAAA;AACA;AAEA;EACA,8BAAA;EACA,SAAA;EACA,kCAAA;EACA,iBAAA;AACA;AAEA;EACA,8BAAA;EACA,SAAA;EACA,kCAAA;EACA,iBAAA;AACA","file":"pen.vue","sourcesContent":["<script>\nexport default {\n  data() {\n    return {\n      pageTitle: \"Current Coding Competencies\",\n      items: [\n        {\n          id: 1,\n          languageName: \"HTML\",\n          skillLevelNum: 7,\n          displayDetails: false,\n          message: [\n            `I have worked with HTML consistently, and am comfortable with it, and with making use of reference resources such as MDN for anything that I need to clarify about it.`,\n            `I have completed the FreeCodeCamp HTML curriculum, and built two static HTML-orientated websites previously deployed to hosting with VentraIP at a purchased domain.`,\n            `I have some awareness of including accessibility features such as ARIA labels in HTML.`\n          ]\n        },\n        {\n          id: 2,\n          languageName: \"CSS\",\n          skillLevelNum: 7,\n          displayDetails: false,\n          message: [\n            `I have used CSS a decent amount, and continue to learn in this area by following leading CSS-creators such as Kevin Powell, and CSS resources such as CSS-Tricks and Smashing Magazine.`,\n            `I also have some exposure to CSS frameworks such as SASS and SCSS. This Codepen is an example of the use of CSS custom properties, transitions, media-queries, Google fonts, etc.`,\n            `I can use the Chrome dev tools to debug, reverse-engineer, or otherwise inspect CSS.`\n          ]\n        },\n        {\n          id: 3,\n          languageName: \"JavaScript\",\n          skillLevelNum: 6,\n          displayDetails: false,\n          message: [\n            `I have completed the FreeCodeCamp curriculum for JavaScript, as well as all of the challenges on www.jschallenger.com`,\n            `I have some familiarity with using vanilla JavaScript for DOM manipulation, API calls (e.g. with GET and PUT), cookie usage, local storage.`,\n            `I can use the Chrome dev tools to monitor console logs, network activities such as GET requests and associated statuses`\n          ]\n        },\n        {\n          id: 4,\n          languageName: \"TypeScript\",\n          skillLevelNum: 3,\n          displayDetails: false,\n          message: [\n            `I have made some limited use of TypeScript in React when working on a small project using the weather.com API`,\n            `I am not familiar with advanced features of TypeScript, but am aware of the most-common basics such as Types, Interfaces, expected function return types, and so on.`\n          ]\n        },\n        {\n          id: 5,\n          languageName: \"React\",\n          skillLevelNum: 6,\n          displayDetails: false,\n          message: [\n            `I have completed a General Assembly certificate for React, the FreeCodeCamp React curriculum, and two Scrimba React courses.`,\n            `I have used React and Vanilla JavaScript to build a number of projects, making use of a wide range of JavaScript methods and React hooks.`,\n            `I have used both class-based components and more modern function components, and am comfortable using the documentation.`\n          ]\n        },\n        {\n          id: 6,\n          languageName: \"Vue\",\n          skillLevelNum: 3,\n          displayDetails: false,\n          message: [\n            `I have only just begun learning Vue. However, it shares many characteristics with React, such as composability and reusable components with props.`,\n            `Vue's Options API is most similar to React's Class-based components, and while there is not a one-to-one syntax correspondence, the two frameworks share many similarities (e.g. useEffect vs. watchEffect).`\n          ]\n        },\n        {\n          id: 7,\n          languageName: \"Git\",\n          skillLevelNum: 4,\n          displayDetails: false,\n          message: [\n            `I have used Git through VS Code, both through the GUI and through the terminal.`,\n            `I am familiar with the simpler, more common commands and tasks such as initialising, cloning, pulling, pushing, branching, merging, using 'git status', and so on.`\n          ]\n        },\n        {\n          id: 8,\n          languageName: \"GitHub\",\n          skillLevelNum: 4,\n          displayDetails: false,\n          message: [\n            `I have some experience using GitHub as a user with a few of my own repositories, as a participant in a GitHub enterprise repository, and as an individual accessing others' repos for NPM packages, tutorials, and the like.`,\n            `I have basic experience using GitHub to clone a remote repo via HTTPS, make pull requests, compare diffs between merges, and use some actions.`\n          ]\n        },\n        {\n          id: 9,\n          languageName: \"Node\",\n          skillLevelNum: 4,\n          displayDetails: false,\n          message: [`I have completed several study projects using Node and Express as a server connected to MongoDB as part of the Free Code Camp curriculum. The projects involved handling routes for API end-points, making use of Chai and Mocha for testing, and interacting with my own free-tier MongoDB database.`]\n        },\n        {\n          id: 10,\n          languageName: \"SQL\",\n          skillLevelNum: 5,\n          displayDetails: false,\n          message: [\n            `I have not yet used SQL in a project, but have begun to learn it, PostgreSQL, and Bash scripting through the FreeCodeCamp curriculum.`\n          ]\n        },\n        {\n          id: 11,\n          languageName: \"Linux CL\",\n          skillLevelNum: 1,\n          displayDetails: false,\n          message: [\n            `I have not used the Linux Command Line, but am giving this a score of 1 instead of 0, because I've used the GitBash terminal, and PowerShell somewhat.`\n          ]\n        },\n        {\n          id: 12,\n          languageName: \"GitBash CL\",\n          skillLevelNum: 3,\n          displayDetails: false,\n          message: [\n            `I have used this Bash terminal in VS Code for running Git commands, navigating directories, installing NPM packages, and running NPM commands.`\n          ]\n        },\n        {\n          id: 13,\n          languageName: \"C#\",\n          skillLevelNum: 0,\n          displayDetails: false,\n          message: [`I have not used C# before.`]\n        },\n        {\n          id: 14,\n          languageName: \"Bootstrap\",\n          skillLevelNum: 6,\n          displayDetails: false,\n          message: [\n            `I have used Bootstrap 5 with minor modifications for the base stylings of a website, and for functional components such as accordions and tooltips.`\n          ]\n        },\n        {\n          id: 15,\n          languageName: \"Material UI\",\n          skillLevelNum: 5,\n          displayDetails: false,\n          message: [\n            `I have made limited use of Material UI, but feel confident in using it given its similarity to Bootstrap.`\n          ]\n        },\n        {\n          id: 16,\n          languageName: \"cPanel\",\n          skillLevelNum: 2,\n          displayDetails: false,\n          message: [\n            `I have made use of cPanel to deploy a static website to a web hosting service, and to manage and edit source files.`\n          ]\n        },\n        {\n          id: 17,\n          languageName: \"YAML\",\n          skillLevelNum: 2,\n          displayDetails: false,\n          message: [\n            `I have once set up a YAML pipeline - following a tutorial with minor modifications - to promote changes from a GitHub repository to an AWS bucket.`\n          ]\n        }\n      ]\n    };\n  }\n};\n</script>\n\n<template>\n  <div id=\"app\">\n    <h1>{{ pageTitle }}</h1>\n    <div v-for=\"(item, index) in items\" :key=\"item.id\">\n      <div\n        class=\"language\"\n        :class=\"{ 'language-active-border': item.displayDetails }\"\n      >\n        <h2>{{ item.languageName }}</h2>\n        <div class=\"scale\">\n          <div\n            v-for=\"index in 11\"\n            :class=\"{\n              'scale-glow': index - 1 <= item.skillLevelNum,\n              'scale-grey': index - 1 > item.skillLevelNum\n            }\"\n          >\n            {{ index - 1 }}\n          </div>\n        </div>\n        <button\n          class=\"btn-more-info\"\n          :class=\"{'btn-more-info-rotated-180deg': item.displayDetails}\"\n          @click=\"item.displayDetails = !item.displayDetails\"\n        >\n          <span\n            class=\"material-symbols-outlined\"\n          >\n            expand_more\n          </span>\n        </button>\n      </div>\n      <div\n        class=\"transition-container\"\n        :class=\"{\n          'transition-container-on': item.displayDetails,\n          'transition-container-off': !item.displayDetails\n        }\"\n      >\n        <div>\n          <p\n            :class=\"{\n              'details-paras': item.message.length > 1,\n              'details-para': item.message.length === 1\n            }\"\n            v-for=\"para in item.message\"\n          >\n            {{ para }}\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <p class=\"final-comment\">\n      See a larger solo React project CICD\n      <a\n        class=\"a-text-links\"\n        href=\"http://js-ga-assets.s3-website-ap-southeast-2.amazonaws.com/poems\"\n        target=\"_blank\"\n        rel=\"noopener\"\n      >\n        deployed to AWS\n      </a>\n    </p>\n\n    <a href=\"https://github.com/1jds\" target=\"_blank\" rel=\"noopener\">\n      <button class=\"btn-main\">Go to GitHub</button>\n    </a>\n  </div>\n</template>\n\n<style>\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  --neon-font: \"Tilt Neon\", cursive;\n  --main-font: \"Poppins\", Avenir, Helvetica, Arial, sans-serif;\n  --glow-color: #4fc08d;\n  --bg-color: #151b24;\n  --lighter-grey: hsl(0 0% 100% / 0.2);\n  --darker-grey: #202833;\n  background: var(--bg-color);\n  padding: 60px 100px;\n  display: flex;\n  justify-content: center;\n}\n\n@media (max-width: 730px) {\n  body {\n    padding: 1rem;\n  }\n}\n\n@media (max-width: 375px) {\n  body {\n    margin: 0;\n    padding: 0;\n  }\n}\n\n#app {\n  width: 100%;\n  max-width: 900px;\n  text-align: center;\n  color: #fff;\n  font-family: var(--main-font);\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\n@media (max-width: 350px) {\n  h1 {\n    font-size: 2rem;\n  }\n}\n\na {\n  all: unset;\n}\n\n.a-text-links {\n  color: var(--glow-color);\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.final-comment {\n  padding-top: 2rem;\n}\n\nbutton {\n  all: unset;\n  cursor: pointer;\n}\n\n.btn-main {\n  color: var(--glow-color);\n  background: none;\n  border: solid 1px;\n  border-radius: 2em;\n  font: inherit;\n  padding: 0.75em 2em;\n  margin-top: 0.5rem;\n}\n\n.btn-more-info {\n  position: absolute;\n  bottom: -1.15rem;\n  right: 1rem;\n  z-index: 2;\n  background: var(--bg-color);\n  color: var(--lighter-grey);\n  border-radius: 50%;\n  height: 2.2rem;\n  transition: all 400ms;\n}\n\n.btn-more-info-rotated-180deg {\n  transform: rotate(180deg);    \n  color: var(--glow-color);\n  transition: all 400ms;\n}\n  \n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 700, \"GRAD\" 0, \"opsz\" 48;\n  font-size: 2.25rem;\n}\n\n.language {\n  padding: 0rem 2rem;\n  background: var(--bg-color);\n  border-bottom: 5px solid var(--darker-grey);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  position: relative;\n}\n\n.language-active-border {\n  box-shadow: 0px 4px 10px var(--bg-color);\n  border-bottom: 5px solid var(--glow-color);\n  transition: border 300ms;\n}\n\n@media (max-width: 960px) {\n  .language {\n    padding: 2rem;\n  }\n}\n\n.scale {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n@media (max-width: 550px) {\n  .scale {\n    flex-wrap: wrap;\n  }\n}\n\n.scale > div {\n  font-size: 1rem;\n  font-weight: bold;\n  font-family: var(--neon-font);\n  border-radius: 2px;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-color);\n}\n\n.scale-glow {\n  --local-var: var(--glow-color);\n  color: var(--local-var);\n  border: 1px solid var(--local-var);\n  box-shadow: inset 0 0 0.4rem 0 var(--local-var), 0 0 0.4rem 0 var(--local-var);\n}\n\n.scale-grey {\n  --local-var: var(--lighter-grey);\n  color: var(--local-var);\n  border: 1px solid var(--local-var);\n  box-shadow: inset 0 0 0.4rem 0 var(--local-var), 0 0 0.4rem 0 var(--local-var);\n}\n\n.language > h2 {\n  font-size: 2rem;\n  flex-basis: 10ch;\n  text-align: start;\n}\n\n@media (max-width: 275px) {\n  h1 {\n    font-size: 1.5rem;\n    word-wrap: break-word;\n  }\n\n  .language > h2 {\n    font-size: 1.4rem;\n    word-wrap: break-word;\n  }\n}\n\n.transition-container {\n  display: grid;\n  transition: grid-template-rows 500ms;\n}\n\n.transition-container-off {\n  grid-template-rows: 0fr;\n}\n\n.transition-container-on {\n  grid-template-rows: 1fr;\n}\n\n.transition-container > div {\n  overflow: hidden;\n}\n\n.details-para {\n  background: var(--darker-grey);\n  margin: 0;\n  padding: 1.25rem 2rem;\n  text-align: start;\n}\n\n.details-paras {\n  background: var(--darker-grey);\n  margin: 0;\n  padding: 0.75rem 2rem;\n  text-align: start;\n}\n\n.details-paras:first-child {\n  background: var(--darker-grey);\n  margin: 0;\n  padding: 1.25rem 2rem 0.75rem 2rem;\n  text-align: start;\n}\n\n.details-paras:last-child {\n  background: var(--darker-grey);\n  margin: 0;\n  padding: 0.75rem 2rem 1.25rem 2rem;\n  text-align: start;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

export default __vue_component__;