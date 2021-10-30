import classNames from "/-/classnames@v2.3.1-AVmExr2NyGxFcH9Gb7e1/dist=es2020,mode=imports/optimized/classnames.js";
import React from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useMemo} = React;
const {useContext} = React;
const {createContext} = React;
const {useRef} = React;
const {useCallback} = React;
const {forwardRef} = React;
const {Children} = React;
const {cloneElement} = React;
const {isValidElement} = React;
const {useState} = React;
const {useEffect} = React;
const {useImperativeHandle} = React;
;
import {useUncontrolled, useUncontrolledProp} from "/-/uncontrollable@v7.2.1-EOJ2jGamcC7jjNIez5ZQ/dist=es2020,mode=imports/optimized/uncontrollable.js";
import {jsx, jsxs, Fragment} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/unoptimized/jsx-runtime.js";
import Transition2, {EXITED, EXITING, ENTERING, ENTERED} from "/-/react-transition-group@v4.4.2-te6mMuTKNdvQoIxfmkLt/dist=es2020,mode=imports/unoptimized/esm/Transition.js";
import useMergedRefs2 from "/-/@restart/hooks@v0.3.27-1wVW2EbemqDNwUqA5ChF/dist=es2020,mode=imports/unoptimized/esm/useMergedRefs.js";
import ReactDOM from "/-/react-dom@v17.0.1-oZ1BXZ5opQ1DbTh7nu9r/dist=es2020,mode=imports/optimized/react-dom.js";
import useEventCallback2 from "/-/@restart/hooks@v0.3.27-1wVW2EbemqDNwUqA5ChF/dist=es2020,mode=imports/unoptimized/esm/useEventCallback.js";
import Anchor2 from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/Anchor.js";
export {default as Anchor} from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/Anchor.js";
import PropTypes from "/-/prop-types@v15.7.2-cMiOS1BvlP0FPwjFzCIn/dist=es2020,mode=imports/optimized/prop-types.js";
import {useButtonProps} from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/Button.js";
import useUpdateEffect2 from "/-/@restart/hooks@v0.3.27-1wVW2EbemqDNwUqA5ChF/dist=es2020,mode=imports/unoptimized/esm/useUpdateEffect.js";
import useCommittedRef2 from "/-/@restart/hooks@v0.3.27-1wVW2EbemqDNwUqA5ChF/dist=es2020,mode=imports/unoptimized/esm/useCommittedRef.js";
import useTimeout2 from "/-/@restart/hooks@v0.3.27-1wVW2EbemqDNwUqA5ChF/dist=es2020,mode=imports/unoptimized/esm/useTimeout.js";
import BaseDropdown from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/Dropdown.js";
import {useDropdownItem} from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/DropdownItem.js";
import {useDropdownMenu} from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/DropdownMenu.js";
import useIsomorphicEffect2 from "/-/@restart/hooks@v0.3.27-1wVW2EbemqDNwUqA5ChF/dist=es2020,mode=imports/unoptimized/esm/useIsomorphicEffect.js";
import "/-/warning@v4.0.3-vDUGnqfft5oykRgkN4XT/dist=es2020,mode=imports/optimized/warning.js";
import invariant2 from "/-/invariant@v2.2.4-dATvH51LFSHlzMqhAQS8/dist=es2020,mode=imports/optimized/invariant.js";
import {useDropdownToggle} from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/DropdownToggle.js";
import DropdownContext$1 from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/DropdownContext.js";
import BaseNav from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/Nav.js";
import {useNavItem} from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/NavItem.js";
import SelectableContext2, {makeEventKey} from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/SelectableContext.js";
import useCallbackRef2 from "/-/@restart/hooks@v0.3.27-1wVW2EbemqDNwUqA5ChF/dist=es2020,mode=imports/unoptimized/esm/useCallbackRef.js";
import useWillUnmount2 from "/-/@restart/hooks@v0.3.27-1wVW2EbemqDNwUqA5ChF/dist=es2020,mode=imports/unoptimized/esm/useWillUnmount.js";
import BaseModal from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/Modal.js";
import ModalManager2 from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/ModalManager.js";
import "/-/prop-types-extra@v1.1.1-YFlpyHiyy94rf7nRnZ1J/dist=es2020,mode=imports/unoptimized/lib/all.js";
import BaseOverlay from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/Overlay.js";
export {SSRProvider} from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/ssr.js";
import Tabs$1 from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/Tabs.js";
import NoopTransition2 from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/NoopTransition.js";
import TabContext2 from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/TabContext.js";
import {useTabPanel} from "/-/@restart/ui@v0.2.3-AamnVL3ClKyNOlRjZgyb/dist=es2020,mode=imports/unoptimized/esm/TabPanel.js";
const ThemeContext = /* @__PURE__ */ createContext({
  prefixes: {}
});
const {
  Consumer,
  Provider
} = ThemeContext;
function ThemeProvider({
  prefixes = {},
  dir,
  children
}) {
  const contextValue = useMemo(() => ({
    prefixes: {
      ...prefixes
    },
    dir
  }), [prefixes, dir]);
  return /* @__PURE__ */ jsx(Provider, {
    value: contextValue,
    children
  });
}
function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = useContext(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useIsRTL() {
  const {
    dir
  } = useContext(ThemeContext);
  return dir === "rtl";
}
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}
function getComputedStyle$1(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, "-$1").toLowerCase();
}
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
}
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}
function style(node, property) {
  var css = "";
  var transforms = "";
  if (typeof property === "string") {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle$1(node).getPropertyValue(hyphenateStyleName(property));
  }
  Object.keys(property).forEach(function(key) {
    var value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });
  if (transforms) {
    css += "transform: " + transforms + ";";
  }
  node.style.cssText += ";" + css;
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var optionsSupported = false;
var onceSupported = false;
try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },
    get once() {
      return onceSupported = optionsSupported = true;
    }
  };
  if (canUseDOM) {
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, true);
  }
} catch (e) {
}
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== "boolean" && !onceSupported) {
    var once = options.once, capture = options.capture;
    var wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }
  node.addEventListener(eventName, handler, options);
}
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== "boolean" ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
function listen(node, eventName, handler, options) {
  addEventListener(node, eventName, handler, options);
  return function() {
    removeEventListener(node, eventName, handler, options);
  };
}
function parseDuration(node) {
  var str = style(node, "transitionDuration") || "";
  var mult = str.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(str) * mult;
}
function triggerTransitionEnd(element) {
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent("transitionend", true, true);
  element.dispatchEvent(evt);
}
function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }
  var called = false;
  var handle = setTimeout(function() {
    if (!called)
      triggerTransitionEnd(element);
  }, duration + padding);
  var remove = listen(element, "transitionend", function() {
    called = true;
  }, {
    once: true
  });
  return function() {
    clearTimeout(handle);
    remove();
  };
}
function transitionEnd(element, handler, duration, padding) {
  if (duration == null)
    duration = parseDuration(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = listen(element, "transitionend", handler);
  return function() {
    removeEmulate();
    remove();
  };
}
function parseDuration$1(node, property) {
  const str = style(node, property) || "";
  const mult = str.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(str) * mult;
}
function transitionEndListener(element, handler) {
  const duration = parseDuration$1(element, "transitionDuration");
  const delay = parseDuration$1(element, "transitionDelay");
  const remove = transitionEnd(element, (e) => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}
function createChainedFunction(...funcs) {
  return funcs.filter((f) => f != null).reduce((acc, f) => {
    if (typeof f !== "function") {
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    }
    if (acc === null)
      return f;
    return function chainedFunction(...args) {
      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}
function triggerBrowserReflow(node) {
  node.offsetHeight;
}
function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && "setState" in componentOrElement) {
    return ReactDOM.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}
const TransitionWrapper = /* @__PURE__ */ React.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = useRef(null);
  const mergedRef = useMergedRefs2(nodeRef, childRef);
  const attachRef = (r) => {
    mergedRef(safeFindDOMNode(r));
  };
  const normalize = (callback) => (param) => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  const handleEnter = useCallback(normalize(onEnter), [onEnter]);
  const handleEntering = useCallback(normalize(onEntering), [onEntering]);
  const handleEntered = useCallback(normalize(onEntered), [onEntered]);
  const handleExit = useCallback(normalize(onExit), [onExit]);
  const handleExiting = useCallback(normalize(onExiting), [onExiting]);
  const handleExited = useCallback(normalize(onExited), [onExited]);
  const handleAddEndListener = useCallback(normalize(addEndListener), [addEndListener]);
  return /* @__PURE__ */ jsx(Transition2, {
    ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef,
    children: typeof children === "function" ? (status, innerProps) => children(status, {
      ...innerProps,
      ref: attachRef
    }) : /* @__PURE__ */ React.cloneElement(children, {
      ref: attachRef
    })
  });
});
const MARGINS = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value + parseInt(style(elem, margins[0]), 10) + parseInt(style(elem, margins[1]), 10);
}
const collapseStyles = {
  [EXITED]: "collapse",
  [EXITING]: "collapsing",
  [ENTERING]: "collapsing",
  [ENTERED]: "collapse show"
};
const defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};
const Collapse = /* @__PURE__ */ React.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = "height",
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  const computedDimension = typeof dimension === "function" ? dimension() : dimension;
  const handleEnter = useMemo(() => createChainedFunction((elem) => {
    elem.style[computedDimension] = "0";
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = useMemo(() => createChainedFunction((elem) => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = useMemo(() => createChainedFunction((elem) => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);
  const handleExit = useMemo(() => createChainedFunction((elem) => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = useMemo(() => createChainedFunction((elem) => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return /* @__PURE__ */ jsx(TransitionWrapper, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    "aria-expanded": props.role ? props.in : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: children.ref,
    children: (state, innerProps) => /* @__PURE__ */ React.cloneElement(children, {
      ...innerProps,
      className: classNames(className, children.props.className, collapseStyles[state], computedDimension === "width" && "collapse-horizontal")
    })
  });
});
Collapse.defaultProps = defaultProps;
const context = /* @__PURE__ */ createContext({});
context.displayName = "AccordionContext";
const AccordionCollapse = /* @__PURE__ */ forwardRef(({
  as: Component = "div",
  bsPrefix,
  className,
  children,
  eventKey,
  ...props
}, ref) => {
  const {
    activeEventKey
  } = useContext(context);
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-collapse");
  return /* @__PURE__ */ jsx(Collapse, {
    ref,
    in: activeEventKey === eventKey,
    ...props,
    className: classNames(className, bsPrefix),
    children: /* @__PURE__ */ jsx(Component, {
      children: Children.only(children)
    })
  });
});
AccordionCollapse.displayName = "AccordionCollapse";
const context$1 = /* @__PURE__ */ createContext({
  eventKey: ""
});
context$1.displayName = "AccordionItemContext";
const AccordionBody = /* @__PURE__ */ forwardRef(({
  as: Component = "div",
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-body");
  const {
    eventKey
  } = useContext(context$1);
  return /* @__PURE__ */ jsx(AccordionCollapse, {
    eventKey,
    children: /* @__PURE__ */ jsx(Component, {
      ref,
      ...props,
      className: classNames(className, bsPrefix)
    })
  });
});
AccordionBody.displayName = "AccordionBody";
function useAccordionButton(eventKey, onClick) {
  const {
    activeEventKey,
    onSelect
  } = useContext(context);
  return (e) => {
    const eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
    if (onSelect)
      onSelect(eventKeyPassed, e);
    if (onClick)
      onClick(e);
  };
}
const AccordionButton = /* @__PURE__ */ forwardRef(({
  as: Component = "button",
  bsPrefix,
  className,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-button");
  const {
    eventKey
  } = useContext(context$1);
  const accordionOnClick = useAccordionButton(eventKey, onClick);
  const {
    activeEventKey
  } = useContext(context);
  if (Component === "button") {
    props.type = "button";
  }
  return /* @__PURE__ */ jsx(Component, {
    ref,
    onClick: accordionOnClick,
    ...props,
    "aria-expanded": eventKey === activeEventKey,
    className: classNames(className, bsPrefix, eventKey !== activeEventKey && "collapsed")
  });
});
AccordionButton.displayName = "AccordionButton";
const AccordionHeader = /* @__PURE__ */ forwardRef(({
  as: Component = "h2",
  bsPrefix,
  className,
  children,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-header");
  return /* @__PURE__ */ jsx(Component, {
    ref,
    ...props,
    className: classNames(className, bsPrefix),
    children: /* @__PURE__ */ jsx(AccordionButton, {
      onClick,
      children
    })
  });
});
AccordionHeader.displayName = "AccordionHeader";
const AccordionItem = /* @__PURE__ */ forwardRef(({
  as: Component = "div",
  bsPrefix,
  className,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-item");
  const contextValue = useMemo(() => ({
    eventKey
  }), [eventKey]);
  return /* @__PURE__ */ jsx(context$1.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsx(Component, {
      ref,
      ...props,
      className: classNames(className, bsPrefix)
    })
  });
});
AccordionItem.displayName = "AccordionItem";
const Accordion = /* @__PURE__ */ forwardRef((props, ref) => {
  const {
    as: Component = "div",
    activeKey,
    bsPrefix,
    className,
    onSelect,
    flush,
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "accordion");
  const contextValue = useMemo(() => ({
    activeEventKey: activeKey,
    onSelect
  }), [activeKey, onSelect]);
  return /* @__PURE__ */ jsx(context.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsx(Component, {
      ref,
      ...controlledProps,
      className: classNames(className, prefix, flush && `${prefix}-flush`)
    })
  });
});
Accordion.displayName = "Accordion";
var Accordion$1 = Object.assign(Accordion, {
  Button: AccordionButton,
  Collapse: AccordionCollapse,
  Item: AccordionItem,
  Header: AccordionHeader,
  Body: AccordionBody
});
const defaultProps$1 = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const fadeStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show"
};
const Fade = /* @__PURE__ */ forwardRef(({
  className,
  children,
  transitionClasses = {},
  ...props
}, ref) => {
  const handleEnter = useCallback((node, isAppearing) => {
    triggerBrowserReflow(node);
    props.onEnter == null ? void 0 : props.onEnter(node, isAppearing);
  }, [props]);
  return /* @__PURE__ */ jsx(TransitionWrapper, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => /* @__PURE__ */ cloneElement(children, {
      ...innerProps,
      className: classNames("fade", className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.defaultProps = defaultProps$1;
Fade.displayName = "Fade";
const propTypes = {
  "aria-label": PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["white"])
};
const defaultProps$2 = {
  "aria-label": "Close"
};
const CloseButton = /* @__PURE__ */ forwardRef(({
  className,
  variant,
  ...props
}, ref) => /* @__PURE__ */ jsx("button", {
  ref,
  type: "button",
  className: classNames("btn-close", variant && `btn-close-${variant}`, className),
  ...props
}));
CloseButton.displayName = "CloseButton";
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps$2;
var divWithClassName = (className) => /* @__PURE__ */ forwardRef((p, ref) => /* @__PURE__ */ jsx("div", {
  ...p,
  ref,
  className: classNames(p.className, className)
}));
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function(_, chr) {
    return chr.toUpperCase();
  });
}
const pascalCase = (str) => str[0].toUpperCase() + camelize(str).slice(1);
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps: defaultProps2
} = {}) {
  const BsComponent = /* @__PURE__ */ forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || "div",
    ...props
  }, ref) => {
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return /* @__PURE__ */ jsx(Tag, {
      ref,
      className: classNames(className, resolvedPrefix),
      ...props
    });
  });
  BsComponent.defaultProps = defaultProps2;
  BsComponent.displayName = displayName;
  return BsComponent;
}
const DivStyledAsH4 = divWithClassName("h4");
DivStyledAsH4.displayName = "DivStyledAsH4";
const AlertHeading = createWithBsPrefix("alert-heading", {
  Component: DivStyledAsH4
});
const AlertLink = createWithBsPrefix("alert-link", {
  Component: Anchor2
});
const defaultProps$3 = {
  variant: "primary",
  show: true,
  transition: Fade,
  closeLabel: "Close alert"
};
const Alert = /* @__PURE__ */ forwardRef((uncontrolledProps, ref) => {
  const {
    bsPrefix,
    show,
    closeLabel,
    closeVariant,
    className,
    children,
    variant,
    onClose,
    dismissible,
    transition,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    show: "onClose"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "alert");
  const handleClose = useEventCallback2((e) => {
    if (onClose) {
      onClose(false, e);
    }
  });
  const Transition3 = transition === true ? Fade : transition;
  const alert = /* @__PURE__ */ jsxs("div", {
    role: "alert",
    ...!Transition3 ? props : void 0,
    ref,
    className: classNames(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
    children: [dismissible && /* @__PURE__ */ jsx(CloseButton, {
      onClick: handleClose,
      "aria-label": closeLabel,
      variant: closeVariant
    }), children]
  });
  if (!Transition3)
    return show ? alert : null;
  return /* @__PURE__ */ jsx(Transition3, {
    unmountOnExit: true,
    ...props,
    ref: void 0,
    in: show,
    children: alert
  });
});
Alert.displayName = "Alert";
Alert.defaultProps = defaultProps$3;
var Alert$1 = Object.assign(Alert, {
  Link: AlertLink,
  Heading: AlertHeading
});
const defaultProps$4 = {
  bg: "primary",
  pill: false
};
const Badge = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  bg,
  pill,
  text,
  className,
  as: Component = "span",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "badge");
  return /* @__PURE__ */ jsx(Component, {
    ref,
    ...props,
    className: classNames(className, prefix, pill && `rounded-pill`, text && `text-${text}`, bg && `bg-${bg}`)
  });
});
Badge.displayName = "Badge";
Badge.defaultProps = defaultProps$4;
const defaultProps$5 = {
  active: false,
  linkProps: {}
};
const BreadcrumbItem = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  active,
  children,
  className,
  as: Component = "li",
  linkAs: LinkComponent = Anchor2,
  linkProps,
  href,
  title,
  target,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "breadcrumb-item");
  return /* @__PURE__ */ jsx(Component, {
    ref,
    ...props,
    className: classNames(prefix, className, {
      active
    }),
    "aria-current": active ? "page" : void 0,
    children: active ? children : /* @__PURE__ */ jsx(LinkComponent, {
      ...linkProps,
      href,
      title,
      target,
      children
    })
  });
});
BreadcrumbItem.displayName = "BreadcrumbItem";
BreadcrumbItem.defaultProps = defaultProps$5;
const defaultProps$6 = {
  label: "breadcrumb",
  listProps: {}
};
const Breadcrumb = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  listProps,
  children,
  label,
  as: Component = "nav",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "breadcrumb");
  return /* @__PURE__ */ jsx(Component, {
    "aria-label": label,
    className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("ol", {
      ...listProps,
      className: classNames(prefix, listProps == null ? void 0 : listProps.className),
      children
    })
  });
});
Breadcrumb.displayName = "Breadcrumb";
Breadcrumb.defaultProps = defaultProps$6;
var Breadcrumb$1 = Object.assign(Breadcrumb, {
  Item: BreadcrumbItem
});
const defaultProps$7 = {
  variant: "primary",
  active: false,
  disabled: false
};
const Button2 = /* @__PURE__ */ forwardRef(({
  as,
  bsPrefix,
  variant,
  size: size2,
  active,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn");
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    ...props
  });
  const Component = tagName;
  return /* @__PURE__ */ jsx(Component, {
    ...props,
    ...buttonProps,
    ref,
    className: classNames(className, prefix, active && "active", variant && `${prefix}-${variant}`, size2 && `${prefix}-${size2}`, props.href && props.disabled && "disabled")
  });
});
Button2.displayName = "Button";
Button2.defaultProps = defaultProps$7;
const defaultProps$8 = {
  vertical: false,
  role: "group"
};
const ButtonGroup = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  size: size2,
  vertical,
  className,
  as: Component = "div",
  ...rest
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn-group");
  let baseClass = prefix;
  if (vertical)
    baseClass = `${prefix}-vertical`;
  return /* @__PURE__ */ jsx(Component, {
    ...rest,
    ref,
    className: classNames(className, baseClass, size2 && `${prefix}-${size2}`)
  });
});
ButtonGroup.displayName = "ButtonGroup";
ButtonGroup.defaultProps = defaultProps$8;
const defaultProps$9 = {
  role: "toolbar"
};
const ButtonToolbar = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn-toolbar");
  return /* @__PURE__ */ jsx("div", {
    ...props,
    ref,
    className: classNames(className, prefix)
  });
});
ButtonToolbar.displayName = "ButtonToolbar";
ButtonToolbar.defaultProps = defaultProps$9;
const CardImg = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  variant,
  as: Component = "img",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card-img");
  return /* @__PURE__ */ jsx(Component, {
    ref,
    className: classNames(variant ? `${prefix}-${variant}` : prefix, className),
    ...props
  });
});
CardImg.displayName = "CardImg";
const context$2 = /* @__PURE__ */ createContext(null);
context$2.displayName = "CardHeaderContext";
const CardHeader = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  as: Component = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card-header");
  const contextValue = useMemo(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return /* @__PURE__ */ jsx(context$2.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsx(Component, {
      ref,
      ...props,
      className: classNames(className, prefix)
    })
  });
});
CardHeader.displayName = "CardHeader";
const DivStyledAsH5 = divWithClassName("h5");
const DivStyledAsH6 = divWithClassName("h6");
const CardBody = createWithBsPrefix("card-body");
const CardTitle = createWithBsPrefix("card-title", {
  Component: DivStyledAsH5
});
const CardSubtitle = createWithBsPrefix("card-subtitle", {
  Component: DivStyledAsH6
});
const CardLink = createWithBsPrefix("card-link", {
  Component: "a"
});
const CardText = createWithBsPrefix("card-text", {
  Component: "p"
});
const CardFooter = createWithBsPrefix("card-footer");
const CardImgOverlay = createWithBsPrefix("card-img-overlay");
const defaultProps$a = {
  body: false
};
const Card = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body,
  children,
  as: Component = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card");
  return /* @__PURE__ */ jsx(Component, {
    ref,
    ...props,
    className: classNames(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? /* @__PURE__ */ jsx(CardBody, {
      children
    }) : children
  });
});
Card.displayName = "Card";
Card.defaultProps = defaultProps$a;
var Card$1 = Object.assign(Card, {
  Img: CardImg,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: CardHeader,
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay
});
var CardGroup = createWithBsPrefix("card-group");
var CarouselCaption = createWithBsPrefix("carousel-caption");
const CarouselItem = /* @__PURE__ */ forwardRef(({
  as: Component = "div",
  bsPrefix,
  className,
  ...props
}, ref) => {
  const finalClassName = classNames(className, useBootstrapPrefix(bsPrefix, "carousel-item"));
  return /* @__PURE__ */ jsx(Component, {
    ref,
    ...props,
    className: finalClassName
  });
});
CarouselItem.displayName = "CarouselItem";
function map(children, func) {
  let index = 0;
  return Children.map(children, (child) => /* @__PURE__ */ isValidElement(child) ? func(child, index++) : child);
}
function forEach(children, func) {
  let index = 0;
  Children.forEach(children, (child) => {
    if (/* @__PURE__ */ isValidElement(child))
      func(child, index++);
  });
}
const SWIPE_THRESHOLD = 40;
const defaultProps$b = {
  slide: true,
  fade: false,
  controls: true,
  indicators: true,
  indicatorLabels: [],
  defaultActiveIndex: 0,
  interval: 5e3,
  keyboard: true,
  pause: "hover",
  wrap: true,
  touch: true,
  prevIcon: /* @__PURE__ */ jsx("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon"
  }),
  prevLabel: "Previous",
  nextIcon: /* @__PURE__ */ jsx("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon"
  }),
  nextLabel: "Next"
};
function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }
  const elementStyle = getComputedStyle(element);
  return elementStyle.display !== "none" && elementStyle.visibility !== "hidden" && getComputedStyle(element.parentNode).display !== "none";
}
const Carousel = /* @__PURE__ */ forwardRef((uncontrolledProps, ref) => {
  const {
    as: Component = "div",
    bsPrefix,
    slide,
    fade,
    controls,
    indicators,
    indicatorLabels,
    activeIndex,
    onSelect,
    onSlide,
    onSlid,
    interval,
    keyboard,
    onKeyDown,
    pause,
    onMouseOver,
    onMouseOut,
    wrap,
    touch,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    prevIcon,
    prevLabel,
    nextIcon,
    nextLabel,
    variant,
    className,
    children,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeIndex: "onSelect"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "carousel");
  const isRTL = useIsRTL();
  const nextDirectionRef = useRef(null);
  const [direction, setDirection] = useState("next");
  const [paused, setPaused] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [renderedActiveIndex, setRenderedActiveIndex] = useState(activeIndex || 0);
  if (!isSliding && activeIndex !== renderedActiveIndex) {
    if (nextDirectionRef.current) {
      setDirection(nextDirectionRef.current);
    } else {
      setDirection((activeIndex || 0) > renderedActiveIndex ? "next" : "prev");
    }
    if (slide) {
      setIsSliding(true);
    }
    setRenderedActiveIndex(activeIndex || 0);
  }
  useEffect(() => {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  let numChildren = 0;
  let activeChildInterval;
  forEach(children, (child, index) => {
    ++numChildren;
    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  const activeChildIntervalRef = useCommittedRef2(activeChildInterval);
  const prev = useCallback((event) => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex - 1;
    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = numChildren - 1;
    }
    nextDirectionRef.current = "prev";
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]);
  const next = useEventCallback2((event) => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex + 1;
    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = 0;
    }
    nextDirectionRef.current = "next";
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  });
  const elementRef = useRef();
  useImperativeHandle(ref, () => ({
    element: elementRef.current,
    prev,
    next
  }));
  const nextWhenVisible = useEventCallback2(() => {
    if (!document.hidden && isVisible(elementRef.current)) {
      if (isRTL) {
        prev();
      } else {
        next();
      }
    }
  });
  const slideDirection = direction === "next" ? "start" : "end";
  useUpdateEffect2(() => {
    if (slide) {
      return;
    }
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [renderedActiveIndex]);
  const orderClassName = `${prefix}-item-${direction}`;
  const directionalClassName = `${prefix}-item-${slideDirection}`;
  const handleEnter = useCallback((node) => {
    triggerBrowserReflow(node);
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
  }, [onSlide, renderedActiveIndex, slideDirection]);
  const handleEntered = useCallback(() => {
    setIsSliding(false);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [onSlid, renderedActiveIndex, slideDirection]);
  const handleKeyDown = useCallback((event) => {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          if (isRTL) {
            next(event);
          } else {
            prev(event);
          }
          return;
        case "ArrowRight":
          event.preventDefault();
          if (isRTL) {
            prev(event);
          } else {
            next(event);
          }
          return;
      }
    }
    onKeyDown == null ? void 0 : onKeyDown(event);
  }, [keyboard, onKeyDown, prev, next, isRTL]);
  const handleMouseOver = useCallback((event) => {
    if (pause === "hover") {
      setPaused(true);
    }
    onMouseOver == null ? void 0 : onMouseOver(event);
  }, [pause, onMouseOver]);
  const handleMouseOut = useCallback((event) => {
    setPaused(false);
    onMouseOut == null ? void 0 : onMouseOut(event);
  }, [onMouseOut]);
  const touchStartXRef = useRef(0);
  const touchDeltaXRef = useRef(0);
  const touchUnpauseTimeout = useTimeout2();
  const handleTouchStart = useCallback((event) => {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;
    if (pause === "hover") {
      setPaused(true);
    }
    onTouchStart == null ? void 0 : onTouchStart(event);
  }, [pause, onTouchStart]);
  const handleTouchMove = useCallback((event) => {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }
    onTouchMove == null ? void 0 : onTouchMove(event);
  }, [onTouchMove]);
  const handleTouchEnd = useCallback((event) => {
    if (touch) {
      const touchDeltaX = touchDeltaXRef.current;
      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }
    if (pause === "hover") {
      touchUnpauseTimeout.set(() => {
        setPaused(false);
      }, interval || void 0);
    }
    onTouchEnd == null ? void 0 : onTouchEnd(event);
  }, [touch, pause, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  const shouldPlay = interval != null && !paused && !isSliding;
  const intervalHandleRef = useRef();
  useEffect(() => {
    var _ref, _activeChildIntervalR;
    if (!shouldPlay) {
      return void 0;
    }
    const nextFunc = isRTL ? prev : next;
    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : nextFunc, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : void 0);
    return () => {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, prev, next, activeChildIntervalRef, interval, nextWhenVisible, isRTL]);
  const indicatorOnClicks = useMemo(() => indicators && Array.from({
    length: numChildren
  }, (_, index) => (event) => {
    onSelect == null ? void 0 : onSelect(index, event);
  }), [indicators, numChildren, onSelect]);
  return /* @__PURE__ */ jsxs(Component, {
    ref: elementRef,
    ...props,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: classNames(className, prefix, slide && "slide", fade && `${prefix}-fade`, variant && `${prefix}-${variant}`),
    children: [indicators && /* @__PURE__ */ jsx("div", {
      className: `${prefix}-indicators`,
      children: map(children, (_, index) => /* @__PURE__ */ jsx("button", {
        type: "button",
        "data-bs-target": "",
        "aria-label": indicatorLabels != null && indicatorLabels.length ? indicatorLabels[index] : `Slide ${index + 1}`,
        className: index === renderedActiveIndex ? "active" : void 0,
        onClick: indicatorOnClicks ? indicatorOnClicks[index] : void 0,
        "aria-current": index === renderedActiveIndex
      }, index))
    }), /* @__PURE__ */ jsx("div", {
      className: `${prefix}-inner`,
      children: map(children, (child, index) => {
        const isActive = index === renderedActiveIndex;
        return slide ? /* @__PURE__ */ jsx(TransitionWrapper, {
          in: isActive,
          onEnter: isActive ? handleEnter : void 0,
          onEntered: isActive ? handleEntered : void 0,
          addEndListener: transitionEndListener,
          children: (status, innerProps) => /* @__PURE__ */ cloneElement(child, {
            ...innerProps,
            className: classNames(child.props.className, isActive && status !== "entered" && orderClassName, (status === "entered" || status === "exiting") && "active", (status === "entering" || status === "exiting") && directionalClassName)
          })
        }) : /* @__PURE__ */ cloneElement(child, {
          className: classNames(child.props.className, isActive && "active")
        });
      })
    }), controls && /* @__PURE__ */ jsxs(Fragment, {
      children: [(wrap || activeIndex !== 0) && /* @__PURE__ */ jsxs(Anchor2, {
        className: `${prefix}-control-prev`,
        onClick: prev,
        children: [prevIcon, prevLabel && /* @__PURE__ */ jsx("span", {
          className: "visually-hidden",
          children: prevLabel
        })]
      }), (wrap || activeIndex !== numChildren - 1) && /* @__PURE__ */ jsxs(Anchor2, {
        className: `${prefix}-control-next`,
        onClick: next,
        children: [nextIcon, nextLabel && /* @__PURE__ */ jsx("span", {
          className: "visually-hidden",
          children: nextLabel
        })]
      })]
    })]
  });
});
Carousel.displayName = "Carousel";
Carousel.defaultProps = defaultProps$b;
var Carousel$1 = Object.assign(Carousel, {
  Caption: CarouselCaption,
  Item: CarouselItem
});
const DEVICE_SIZES = ["xxl", "xl", "lg", "md", "sm", "xs"];
function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, "col");
  const spans = [];
  const classes = [];
  DEVICE_SIZES.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;
    if (typeof propValue === "object" && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }
    const infix = brkPoint !== "xs" ? `-${brkPoint}` : "";
    if (span)
      spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null)
      classes.push(`order${infix}-${order}`);
    if (offset != null)
      classes.push(`offset${infix}-${offset}`);
  });
  return [{
    ...props,
    className: classNames(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /* @__PURE__ */ forwardRef((props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = "div",
    bsPrefix,
    spans
  }] = useCol(props);
  return /* @__PURE__ */ jsx(Component, {
    ...colProps,
    ref,
    className: classNames(className, !spans.length && bsPrefix)
  });
});
Col.displayName = "Col";
const DropdownContext2 = /* @__PURE__ */ createContext({});
DropdownContext2.displayName = "DropdownContext";
const DropdownItem2 = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  eventKey,
  disabled = false,
  onClick,
  active,
  as: Component = Anchor2,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-item");
  const [dropdownItemProps, meta] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return /* @__PURE__ */ jsx(Component, {
    ...props,
    ...dropdownItemProps,
    ref,
    className: classNames(className, prefix, meta.isActive && "active", disabled && "disabled")
  });
});
DropdownItem2.displayName = "DropdownItem";
const context$3 = /* @__PURE__ */ createContext(null);
context$3.displayName = "InputGroupContext";
const context$4 = /* @__PURE__ */ createContext(null);
context$4.displayName = "NavbarContext";
function useWrappedRefWithWarning(ref, componentName) {
  return ref;
}
const alignDirection = PropTypes.oneOf(["start", "end"]);
const alignPropType = PropTypes.oneOfType([alignDirection, PropTypes.shape({
  sm: alignDirection
}), PropTypes.shape({
  md: alignDirection
}), PropTypes.shape({
  lg: alignDirection
}), PropTypes.shape({
  xl: alignDirection
}), PropTypes.shape({
  xxl: alignDirection
})]);
const defaultProps$c = {
  flip: true
};
function getDropdownMenuPlacement(alignEnd, dropDirection, isRTL) {
  const topStart = isRTL ? "top-end" : "top-start";
  const topEnd = isRTL ? "top-start" : "top-end";
  const bottomStart = isRTL ? "bottom-end" : "bottom-start";
  const bottomEnd = isRTL ? "bottom-start" : "bottom-end";
  const leftStart = isRTL ? "right-start" : "left-start";
  const leftEnd = isRTL ? "right-end" : "left-end";
  const rightStart = isRTL ? "left-start" : "right-start";
  const rightEnd = isRTL ? "left-end" : "right-end";
  let placement = alignEnd ? bottomEnd : bottomStart;
  if (dropDirection === "up")
    placement = alignEnd ? topEnd : topStart;
  else if (dropDirection === "end")
    placement = alignEnd ? rightEnd : rightStart;
  else if (dropDirection === "start")
    placement = alignEnd ? leftEnd : leftStart;
  return placement;
}
const DropdownMenu2 = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  align,
  rootCloseEvent,
  flip,
  show: showProps,
  renderOnMount,
  as: Component = "div",
  popperConfig,
  variant,
  ...props
}, ref) => {
  let alignEnd = false;
  const isNavbar = useContext(context$4);
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-menu");
  const {
    align: contextAlign,
    drop,
    isRTL
  } = useContext(DropdownContext2);
  align = align || contextAlign;
  const isInputGroup = useContext(context$3);
  const alignClasses = [];
  if (align) {
    if (typeof align === "object") {
      const keys = Object.keys(align);
      if (keys.length) {
        const brkPoint = keys[0];
        const direction = align[brkPoint];
        alignEnd = direction === "start";
        alignClasses.push(`${prefix}-${brkPoint}-${direction}`);
      }
    } else if (align === "end") {
      alignEnd = true;
    }
  }
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const [menuProps, {
    hasShown,
    popper,
    show,
    toggle
  }] = useDropdownMenu({
    flip,
    rootCloseEvent,
    show: showProps,
    usePopper: !isNavbar && alignClasses.length === 0,
    offset: [0, 2],
    popperConfig,
    placement
  });
  menuProps.ref = useMergedRefs2(useWrappedRefWithWarning(ref), menuProps.ref);
  useIsomorphicEffect2(() => {
    if (show)
      popper == null ? void 0 : popper.update();
  }, [show]);
  if (!hasShown && !renderOnMount && !isInputGroup)
    return null;
  if (typeof Component !== "string") {
    menuProps.show = show;
    menuProps.close = () => toggle == null ? void 0 : toggle(false);
    menuProps.align = align;
  }
  let style2 = props.style;
  if (popper != null && popper.placement) {
    style2 = {
      ...props.style,
      ...menuProps.style
    };
    props["x-placement"] = popper.placement;
  }
  return /* @__PURE__ */ jsx(Component, {
    ...props,
    ...menuProps,
    style: style2,
    ...(alignClasses.length || isNavbar) && {
      "data-bs-popper": "static"
    },
    className: classNames(className, prefix, show && "show", alignEnd && `${prefix}-end`, variant && `${prefix}-${variant}`, ...alignClasses)
  });
});
DropdownMenu2.displayName = "DropdownMenu";
DropdownMenu2.defaultProps = defaultProps$c;
const DropdownToggle2 = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  split,
  className,
  childBsPrefix,
  as: Component = Button2,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-toggle");
  const dropdownContext = useContext(DropdownContext$1);
  const isInputGroup = useContext(context$3);
  if (childBsPrefix !== void 0) {
    props.bsPrefix = childBsPrefix;
  }
  const [toggleProps] = useDropdownToggle();
  toggleProps.ref = useMergedRefs2(toggleProps.ref, useWrappedRefWithWarning(ref));
  return /* @__PURE__ */ jsx(Component, {
    className: classNames(className, prefix, split && `${prefix}-split`, !!isInputGroup && (dropdownContext == null ? void 0 : dropdownContext.show) && "show"),
    ...toggleProps,
    ...props
  });
});
DropdownToggle2.displayName = "DropdownToggle";
const DropdownHeader = createWithBsPrefix("dropdown-header", {
  defaultProps: {
    role: "heading"
  }
});
const DropdownDivider = createWithBsPrefix("dropdown-divider", {
  Component: "hr",
  defaultProps: {
    role: "separator"
  }
});
const DropdownItemText = createWithBsPrefix("dropdown-item-text", {
  Component: "span"
});
const defaultProps$d = {
  navbar: false,
  align: "start",
  autoClose: true
};
const Dropdown2 = /* @__PURE__ */ forwardRef((pProps, ref) => {
  const {
    bsPrefix,
    drop,
    show,
    className,
    align,
    onSelect,
    onToggle,
    focusFirstItemOnShow,
    as: Component = "div",
    navbar: _4,
    autoClose,
    ...props
  } = useUncontrolled(pProps, {
    show: "onToggle"
  });
  const isInputGroup = useContext(context$3);
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown");
  const isRTL = useIsRTL();
  const isClosingPermitted = (source) => {
    if (autoClose === false)
      return source === "click";
    if (autoClose === "inside")
      return source !== "rootClose";
    if (autoClose === "outside")
      return source !== "select";
    return true;
  };
  const handleToggle = useEventCallback2((nextShow, meta) => {
    if (meta.originalEvent.currentTarget === document && (meta.source !== "keydown" || meta.originalEvent.key === "Escape"))
      meta.source = "rootClose";
    if (isClosingPermitted(meta.source))
      onToggle == null ? void 0 : onToggle(nextShow, meta);
  });
  const alignEnd = align === "end";
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const contextValue = useMemo(() => ({
    align,
    drop,
    isRTL
  }), [align, drop, isRTL]);
  return /* @__PURE__ */ jsx(DropdownContext2.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsx(BaseDropdown, {
      placement,
      show,
      onSelect,
      onToggle: handleToggle,
      focusFirstItemOnShow,
      itemSelector: `.${prefix}-item:not(.disabled):not(:disabled)`,
      children: isInputGroup ? props.children : /* @__PURE__ */ jsx(Component, {
        ...props,
        ref,
        className: classNames(className, show && "show", (!drop || drop === "down") && prefix, drop === "up" && "dropup", drop === "end" && "dropend", drop === "start" && "dropstart")
      })
    })
  });
});
Dropdown2.displayName = "Dropdown";
Dropdown2.defaultProps = defaultProps$d;
var Dropdown$1 = Object.assign(Dropdown2, {
  Toggle: DropdownToggle2,
  Menu: DropdownMenu2,
  Item: DropdownItem2,
  ItemText: DropdownItemText,
  Divider: DropdownDivider,
  Header: DropdownHeader
});
const propTypes$1 = {
  id: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  align: alignPropType,
  menuRole: PropTypes.string,
  renderMenuOnMount: PropTypes.bool,
  rootCloseEvent: PropTypes.string,
  menuVariant: PropTypes.oneOf(["dark"]),
  bsPrefix: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string
};
const DropdownButton = /* @__PURE__ */ forwardRef(({
  title,
  children,
  bsPrefix,
  rootCloseEvent,
  variant,
  size: size2,
  menuRole,
  renderMenuOnMount,
  disabled,
  href,
  id,
  menuVariant,
  ...props
}, ref) => /* @__PURE__ */ jsxs(Dropdown$1, {
  ref,
  ...props,
  children: [/* @__PURE__ */ jsx(DropdownToggle2, {
    id,
    href,
    size: size2,
    variant,
    disabled,
    childBsPrefix: bsPrefix,
    children: title
  }), /* @__PURE__ */ jsx(DropdownMenu2, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent,
    variant: menuVariant,
    children
  })]
}));
DropdownButton.displayName = "DropdownButton";
DropdownButton.propTypes = propTypes$1;
const propTypes$2 = {
  type: PropTypes.string,
  tooltip: PropTypes.bool,
  as: PropTypes.elementType
};
const Feedback = /* @__PURE__ */ forwardRef(({
  as: Component = "div",
  className,
  type = "valid",
  tooltip = false,
  ...props
}, ref) => /* @__PURE__ */ jsx(Component, {
  ...props,
  ref,
  className: classNames(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
}));
Feedback.displayName = "Feedback";
Feedback.propTypes = propTypes$2;
const FormContext = /* @__PURE__ */ createContext({});
const FormCheckInput = /* @__PURE__ */ forwardRef(({
  id,
  bsPrefix,
  className,
  type = "checkbox",
  isValid = false,
  isInvalid = false,
  as: Component = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-input");
  return /* @__PURE__ */ jsx(Component, {
    ...props,
    ref,
    type,
    id: id || controlId,
    className: classNames(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
  });
});
FormCheckInput.displayName = "FormCheckInput";
const FormCheckLabel = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-label");
  return /* @__PURE__ */ jsx("label", {
    ...props,
    ref,
    htmlFor: htmlFor || controlId,
    className: classNames(className, bsPrefix)
  });
});
FormCheckLabel.displayName = "FormCheckLabel";
const FormCheck = /* @__PURE__ */ forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style: style2,
  title = "",
  type = "checkbox",
  label,
  children,
  as = "input",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check");
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, "form-switch");
  const {
    controlId
  } = useContext(FormContext);
  const innerFormContext = useMemo(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = label != null && label !== false && !children;
  const input = /* @__PURE__ */ jsx(FormCheckInput, {
    ...props,
    type: type === "switch" ? "checkbox" : type,
    ref,
    isValid,
    isInvalid,
    disabled,
    as
  });
  return /* @__PURE__ */ jsx(FormContext.Provider, {
    value: innerFormContext,
    children: /* @__PURE__ */ jsx("div", {
      style: style2,
      className: classNames(className, label && bsPrefix, inline && `${bsPrefix}-inline`, type === "switch" && bsSwitchPrefix),
      children: children || /* @__PURE__ */ jsxs(Fragment, {
        children: [input, hasLabel && /* @__PURE__ */ jsx(FormCheckLabel, {
          title,
          children: label
        }), feedback && /* @__PURE__ */ jsx(Feedback, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = "FormCheck";
var FormCheck$1 = Object.assign(FormCheck, {
  Input: FormCheckInput,
  Label: FormCheckLabel
});
const FormControl = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  type,
  size: size2,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  as: Component = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-control");
  let classes;
  if (plaintext) {
    classes = {
      [`${bsPrefix}-plaintext`]: true
    };
  } else {
    classes = {
      [bsPrefix]: true,
      [`${bsPrefix}-${size2}`]: size2
    };
  }
  return /* @__PURE__ */ jsx(Component, {
    ...props,
    type,
    size: htmlSize,
    ref,
    readOnly,
    id: id || controlId,
    className: classNames(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === "color" && `${bsPrefix}-color`)
  });
});
FormControl.displayName = "FormControl";
var FormControl$1 = Object.assign(FormControl, {
  Feedback
});
var FormFloating = createWithBsPrefix("form-floating");
const FormGroup = /* @__PURE__ */ forwardRef(({
  controlId,
  as: Component = "div",
  ...props
}, ref) => {
  const context2 = useMemo(() => ({
    controlId
  }), [controlId]);
  return /* @__PURE__ */ jsx(FormContext.Provider, {
    value: context2,
    children: /* @__PURE__ */ jsx(Component, {
      ...props,
      ref
    })
  });
});
FormGroup.displayName = "FormGroup";
const defaultProps$e = {
  column: false,
  visuallyHidden: false
};
const FormLabel = /* @__PURE__ */ forwardRef(({
  as: Component = "label",
  bsPrefix,
  column,
  visuallyHidden,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-label");
  let columnClass = "col-form-label";
  if (typeof column === "string")
    columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = classNames(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
  htmlFor = htmlFor || controlId;
  if (column)
    return /* @__PURE__ */ jsx(Col, {
      ref,
      as: "label",
      className: classes,
      htmlFor,
      ...props
    });
  return /* @__PURE__ */ jsx(Component, {
    ref,
    className: classes,
    htmlFor,
    ...props
  });
});
FormLabel.displayName = "FormLabel";
FormLabel.defaultProps = defaultProps$e;
const FormRange = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-range");
  return /* @__PURE__ */ jsx("input", {
    ...props,
    type: "range",
    ref,
    className: classNames(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = "FormRange";
const FormSelect = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  size: size2,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-select");
  return /* @__PURE__ */ jsx("select", {
    ...props,
    size: htmlSize,
    ref,
    className: classNames(className, bsPrefix, size2 && `${bsPrefix}-${size2}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = "FormSelect";
const FormText = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  as: Component = "small",
  muted,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-text");
  return /* @__PURE__ */ jsx(Component, {
    ...props,
    ref,
    className: classNames(className, bsPrefix, muted && "text-muted")
  });
});
FormText.displayName = "FormText";
const Switch = /* @__PURE__ */ forwardRef((props, ref) => /* @__PURE__ */ jsx(FormCheck$1, {
  ...props,
  ref,
  type: "switch"
}));
Switch.displayName = "Switch";
var Switch$1 = Object.assign(Switch, {
  Input: FormCheck$1.Input,
  Label: FormCheck$1.Label
});
const FloatingLabel = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
  return /* @__PURE__ */ jsxs(FormGroup, {
    ref,
    className: classNames(className, bsPrefix),
    controlId,
    ...props,
    children: [children, /* @__PURE__ */ jsx("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = "FloatingLabel";
const propTypes$3 = {
  _ref: PropTypes.any,
  validated: PropTypes.bool,
  as: PropTypes.elementType
};
const Form = /* @__PURE__ */ forwardRef(({
  className,
  validated,
  as: Component = "form",
  ...props
}, ref) => /* @__PURE__ */ jsx(Component, {
  ...props,
  ref,
  className: classNames(className, validated && "was-validated")
}));
Form.displayName = "Form";
Form.propTypes = propTypes$3;
var Form$1 = Object.assign(Form, {
  Group: FormGroup,
  Control: FormControl$1,
  Floating: FormFloating,
  Check: FormCheck$1,
  Switch: Switch$1,
  Label: FormLabel,
  Text: FormText,
  Range: FormRange,
  Select: FormSelect,
  FloatingLabel
});
const defaultProps$f = {
  fluid: false
};
const Container = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  fluid,
  as: Component = "div",
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "container");
  const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
  return /* @__PURE__ */ jsx(Component, {
    ref,
    ...props,
    className: classNames(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = "Container";
Container.defaultProps = defaultProps$f;
const propTypes$4 = {
  bsPrefix: PropTypes.string,
  fluid: PropTypes.bool,
  rounded: PropTypes.bool,
  roundedCircle: PropTypes.bool,
  thumbnail: PropTypes.bool
};
const defaultProps$g = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
const Image = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  fluid,
  rounded,
  roundedCircle,
  thumbnail,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "img");
  return /* @__PURE__ */ jsx("img", {
    ref,
    ...props,
    className: classNames(className, fluid && `${bsPrefix}-fluid`, rounded && `rounded`, roundedCircle && `rounded-circle`, thumbnail && `${bsPrefix}-thumbnail`)
  });
});
Image.displayName = "Image";
Image.defaultProps = defaultProps$g;
const defaultProps$h = {
  fluid: true
};
const FigureImage = /* @__PURE__ */ forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(Image, {
  ref,
  ...props,
  className: classNames(className, "figure-img")
}));
FigureImage.displayName = "FigureImage";
FigureImage.propTypes = propTypes$4;
FigureImage.defaultProps = defaultProps$h;
const FigureCaption = createWithBsPrefix("figure-caption", {
  Component: "figcaption"
});
const Figure = createWithBsPrefix("figure", {
  Component: "figure"
});
var Figure$1 = Object.assign(Figure, {
  Image: FigureImage,
  Caption: FigureCaption
});
const InputGroupText = createWithBsPrefix("input-group-text", {
  Component: "span"
});
const InputGroupCheckbox = (props) => /* @__PURE__ */ jsx(InputGroupText, {
  children: /* @__PURE__ */ jsx(FormCheckInput, {
    type: "checkbox",
    ...props
  })
});
const InputGroupRadio = (props) => /* @__PURE__ */ jsx(InputGroupText, {
  children: /* @__PURE__ */ jsx(FormCheckInput, {
    type: "radio",
    ...props
  })
});
const InputGroup = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  size: size2,
  hasValidation,
  className,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "input-group");
  const contextValue = useMemo(() => ({}), []);
  return /* @__PURE__ */ jsx(context$3.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsx(Component, {
      ref,
      ...props,
      className: classNames(className, bsPrefix, size2 && `${bsPrefix}-${size2}`, hasValidation && "has-validation")
    })
  });
});
InputGroup.displayName = "InputGroup";
var InputGroup$1 = Object.assign(InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
});
const ListGroupItem = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  active,
  disabled,
  eventKey,
  className,
  variant,
  action,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "list-group-item");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  const handleClick = useEventCallback2((event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    navItemProps.onClick(event);
  });
  if (disabled && props.tabIndex === void 0) {
    props.tabIndex = -1;
    props["aria-disabled"] = true;
  }
  const Component = as || (action ? props.href ? "a" : "button" : "div");
  return /* @__PURE__ */ jsx(Component, {
    ref,
    ...props,
    ...navItemProps,
    onClick: handleClick,
    className: classNames(className, bsPrefix, meta.isActive && "active", disabled && "disabled", variant && `${bsPrefix}-${variant}`, action && `${bsPrefix}-action`)
  });
});
ListGroupItem.displayName = "ListGroupItem";
const ListGroup = /* @__PURE__ */ forwardRef((props, ref) => {
  const {
    className,
    bsPrefix: initialBsPrefix,
    variant,
    horizontal,
    numbered,
    as = "div",
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "list-group");
  let horizontalVariant;
  if (horizontal) {
    horizontalVariant = horizontal === true ? "horizontal" : `horizontal-${horizontal}`;
  }
  return /* @__PURE__ */ jsx(BaseNav, {
    ref,
    ...controlledProps,
    as,
    className: classNames(className, bsPrefix, variant && `${bsPrefix}-${variant}`, horizontalVariant && `${bsPrefix}-${horizontalVariant}`, numbered && `${bsPrefix}-numbered`)
  });
});
ListGroup.displayName = "ListGroup";
var ListGroup$1 = Object.assign(ListGroup, {
  Item: ListGroupItem
});
var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement("div");
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      scrollDiv.style.width = "50px";
      scrollDiv.style.height = "50px";
      scrollDiv.style.overflow = "scroll";
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}
const Selector = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
class BootstrapModalManager extends ModalManager2 {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop];
    element.dataset[prop] = actual;
    style(element, {
      [prop]: `${parseFloat(style(element, prop)) + adjust}px`
    });
  }
  restore(prop, element) {
    const value = element.dataset[prop];
    if (value !== void 0) {
      delete element.dataset[prop];
      style(element, {
        [prop]: value
      });
    }
  }
  setContainerStyle(containerState) {
    super.setContainerStyle(containerState);
    const container = this.getElement();
    addClass(container, "modal-open");
    if (!containerState.scrollBarWidth)
      return;
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
  }
  removeContainerStyle(containerState) {
    super.removeContainerStyle(containerState);
    const container = this.getElement();
    removeClass(container, "modal-open");
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.restore(paddingProp, el));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.restore(marginProp, el));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.restore(marginProp, el));
  }
}
let sharedManager;
function getSharedManager(options) {
  if (!sharedManager)
    sharedManager = new BootstrapModalManager(options);
  return sharedManager;
}
var ModalBody = createWithBsPrefix("modal-body");
const ModalContext = /* @__PURE__ */ createContext({
  onHide() {
  }
});
const ModalDialog = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  contentClassName,
  centered,
  size: size2,
  fullscreen,
  children,
  scrollable,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal");
  const dialogClass = `${bsPrefix}-dialog`;
  const fullScreenClass = typeof fullscreen === "string" ? `${bsPrefix}-fullscreen-${fullscreen}` : `${bsPrefix}-fullscreen`;
  return /* @__PURE__ */ jsx("div", {
    ...props,
    ref,
    className: classNames(dialogClass, className, size2 && `${bsPrefix}-${size2}`, centered && `${dialogClass}-centered`, scrollable && `${dialogClass}-scrollable`, fullscreen && fullScreenClass),
    children: /* @__PURE__ */ jsx("div", {
      className: classNames(`${bsPrefix}-content`, contentClassName),
      children
    })
  });
});
ModalDialog.displayName = "ModalDialog";
var ModalFooter = createWithBsPrefix("modal-footer");
const defaultProps$i = {
  closeLabel: "Close",
  closeButton: false
};
const AbstractModalHeader = /* @__PURE__ */ forwardRef(({
  closeLabel,
  closeVariant,
  closeButton,
  onHide,
  children,
  ...props
}, ref) => {
  const context2 = useContext(ModalContext);
  const handleClick = useEventCallback2(() => {
    context2 == null ? void 0 : context2.onHide();
    onHide == null ? void 0 : onHide();
  });
  return /* @__PURE__ */ jsxs("div", {
    ref,
    ...props,
    children: [children, closeButton && /* @__PURE__ */ jsx(CloseButton, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick
    })]
  });
});
AbstractModalHeader.defaultProps = defaultProps$i;
const defaultProps$j = {
  closeLabel: "Close",
  closeButton: false
};
const ModalHeader = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-header");
  return /* @__PURE__ */ jsx(AbstractModalHeader, {
    ref,
    ...props,
    className: classNames(className, bsPrefix)
  });
});
ModalHeader.displayName = "ModalHeader";
ModalHeader.defaultProps = defaultProps$j;
const DivStyledAsH4$1 = divWithClassName("h4");
var ModalTitle = createWithBsPrefix("modal-title", {
  Component: DivStyledAsH4$1
});
const defaultProps$k = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: ModalDialog
};
function DialogTransition(props) {
  return /* @__PURE__ */ jsx(Fade, {
    ...props,
    timeout: null
  });
}
function BackdropTransition(props) {
  return /* @__PURE__ */ jsx(Fade, {
    ...props,
    timeout: null
  });
}
const Modal2 = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  style: style2,
  dialogClassName,
  contentClassName,
  children,
  dialogAs: Dialog,
  "aria-labelledby": ariaLabelledby,
  show,
  animation,
  backdrop,
  keyboard,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus,
  enforceFocus,
  restoreFocus,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const [modalStyle, setStyle] = useState({});
  const [animateStaticModal, setAnimateStaticModal] = useState(false);
  const waitingForMouseUpRef = useRef(false);
  const ignoreBackdropClickRef = useRef(false);
  const removeStaticModalAnimationRef = useRef(null);
  const [modal, setModalRef] = useCallbackRef2();
  const mergedRef = useMergedRefs2(ref, setModalRef);
  const handleHide = useEventCallback2(onHide);
  const isRTL = useIsRTL();
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal");
  const modalContext = useMemo(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager)
      return propsManager;
    return getSharedManager({
      isRTL
    });
  }
  function updateDialogStyle(node) {
    if (!canUseDOM)
      return;
    const containerIsOverflowing = getModalManager().getScrollbarWidth() > 0;
    const modalIsOverflowing = node.scrollHeight > ownerDocument(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? scrollbarSize() : void 0,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? scrollbarSize() : void 0
    });
  }
  const handleWindowResize = useEventCallback2(() => {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  useWillUnmount2(() => {
    removeEventListener(window, "resize", handleWindowResize);
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
  });
  const handleDialogMouseDown = () => {
    waitingForMouseUpRef.current = true;
  };
  const handleMouseUp = (e) => {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }
    waitingForMouseUpRef.current = false;
  };
  const handleStaticModalAnimation = () => {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = transitionEnd(modal.dialog, () => {
      setAnimateStaticModal(false);
    });
  };
  const handleStaticBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    handleStaticModalAnimation();
  };
  const handleClick = (e) => {
    if (backdrop === "static") {
      handleStaticBackdropClick(e);
      return;
    }
    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }
    onHide == null ? void 0 : onHide();
  };
  const handleEscapeKeyDown = (e) => {
    if (!keyboard && backdrop === "static") {
      e.preventDefault();
      handleStaticModalAnimation();
    } else if (keyboard && onEscapeKeyDown) {
      onEscapeKeyDown(e);
    }
  };
  const handleEnter = (node, isAppearing) => {
    if (node) {
      node.style.display = "block";
      updateDialogStyle(node);
    }
    onEnter == null ? void 0 : onEnter(node, isAppearing);
  };
  const handleExit = (node) => {
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
    onExit == null ? void 0 : onExit(node);
  };
  const handleEntering = (node, isAppearing) => {
    onEntering == null ? void 0 : onEntering(node, isAppearing);
    addEventListener(window, "resize", handleWindowResize);
  };
  const handleExited = (node) => {
    if (node)
      node.style.display = "";
    onExited == null ? void 0 : onExited(node);
    removeEventListener(window, "resize", handleWindowResize);
  };
  const renderBackdrop = useCallback((backdropProps) => /* @__PURE__ */ jsx("div", {
    ...backdropProps,
    className: classNames(`${bsPrefix}-backdrop`, backdropClassName, !animation && "show")
  }), [animation, backdropClassName, bsPrefix]);
  const baseModalStyle = {
    ...style2,
    ...modalStyle
  };
  if (!animation) {
    baseModalStyle.display = "block";
  }
  const renderDialog = (dialogProps) => /* @__PURE__ */ jsx("div", {
    role: "dialog",
    ...dialogProps,
    style: baseModalStyle,
    className: classNames(className, bsPrefix, animateStaticModal && `${bsPrefix}-static`),
    onClick: backdrop ? handleClick : void 0,
    onMouseUp: handleMouseUp,
    "aria-labelledby": ariaLabelledby,
    children: /* @__PURE__ */ jsx(Dialog, {
      ...props,
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName,
      children
    })
  });
  return /* @__PURE__ */ jsx(ModalContext.Provider, {
    value: modalContext,
    children: /* @__PURE__ */ jsx(BaseModal, {
      show,
      ref: mergedRef,
      backdrop,
      container,
      keyboard: true,
      autoFocus,
      enforceFocus,
      restoreFocus,
      restoreFocusOptions,
      onEscapeKeyDown: handleEscapeKeyDown,
      onShow,
      onHide,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered,
      onExit: handleExit,
      onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: animation ? DialogTransition : void 0,
      backdropTransition: animation ? BackdropTransition : void 0,
      renderBackdrop,
      renderDialog
    })
  });
});
Modal2.displayName = "Modal";
Modal2.defaultProps = defaultProps$k;
var Modal$1 = Object.assign(Modal2, {
  Body: ModalBody,
  Header: ModalHeader,
  Title: ModalTitle,
  Footer: ModalFooter,
  Dialog: ModalDialog,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
});
var NavItem2 = createWithBsPrefix("nav-item");
const defaultProps$l = {
  disabled: false
};
const NavLink = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  as: Component = Anchor2,
  active,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "nav-link");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  return /* @__PURE__ */ jsx(Component, {
    ...props,
    ...navItemProps,
    ref,
    className: classNames(className, bsPrefix, props.disabled && "disabled", meta.isActive && "active")
  });
});
NavLink.displayName = "NavLink";
NavLink.defaultProps = defaultProps$l;
const defaultProps$m = {
  justify: false,
  fill: false
};
const Nav2 = /* @__PURE__ */ forwardRef((uncontrolledProps, ref) => {
  const {
    as = "div",
    bsPrefix: initialBsPrefix,
    variant,
    fill,
    justify,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "nav");
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = useContext(context$4);
  const cardHeaderContext = useContext(context$2);
  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }
  return /* @__PURE__ */ jsx(BaseNav, {
    as,
    ref,
    activeKey,
    className: classNames(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav2.displayName = "Nav";
Nav2.defaultProps = defaultProps$m;
var Nav$1 = Object.assign(Nav2, {
  Item: NavItem2,
  Link: NavLink
});
const NavbarBrand = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-brand");
  const Component = as || (props.href ? "a" : "span");
  return /* @__PURE__ */ jsx(Component, {
    ...props,
    ref,
    className: classNames(className, bsPrefix)
  });
});
NavbarBrand.displayName = "NavbarBrand";
const NavbarCollapse = /* @__PURE__ */ forwardRef(({
  children,
  bsPrefix,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-collapse");
  const context2 = useContext(context$4);
  return /* @__PURE__ */ jsx(Collapse, {
    in: !!(context2 && context2.expanded),
    ...props,
    children: /* @__PURE__ */ jsx("div", {
      ref,
      className: bsPrefix,
      children
    })
  });
});
NavbarCollapse.displayName = "NavbarCollapse";
const defaultProps$n = {
  label: "Toggle navigation"
};
const NavbarToggle = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  children,
  label,
  as: Component = "button",
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-toggler");
  const {
    onToggle,
    expanded
  } = useContext(context$4) || {};
  const handleClick = useEventCallback2((e) => {
    if (onClick)
      onClick(e);
    if (onToggle)
      onToggle();
  });
  if (Component === "button") {
    props.type = "button";
  }
  return /* @__PURE__ */ jsx(Component, {
    ...props,
    ref,
    onClick: handleClick,
    "aria-label": label,
    className: classNames(className, bsPrefix, !expanded && "collapsed"),
    children: children || /* @__PURE__ */ jsx("span", {
      className: `${bsPrefix}-icon`
    })
  });
});
NavbarToggle.displayName = "NavbarToggle";
NavbarToggle.defaultProps = defaultProps$n;
var OffcanvasBody = createWithBsPrefix("offcanvas-body");
const defaultProps$o = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const transitionStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show"
};
const OffcanvasToggling = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
  return /* @__PURE__ */ jsx(TransitionWrapper, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    childRef: children.ref,
    children: (status, innerProps) => /* @__PURE__ */ cloneElement(children, {
      ...innerProps,
      className: classNames(className, children.props.className, (status === ENTERING || status === EXITING) && `${bsPrefix}-toggling`, transitionStyles[status])
    })
  });
});
OffcanvasToggling.defaultProps = defaultProps$o;
OffcanvasToggling.displayName = "OffcanvasToggling";
const defaultProps$p = {
  closeLabel: "Close",
  closeButton: false
};
const OffcanvasHeader = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-header");
  return /* @__PURE__ */ jsx(AbstractModalHeader, {
    ref,
    ...props,
    className: classNames(className, bsPrefix)
  });
});
OffcanvasHeader.displayName = "OffcanvasHeader";
OffcanvasHeader.defaultProps = defaultProps$p;
const DivStyledAsH5$1 = divWithClassName("h5");
var OffcanvasTitle = createWithBsPrefix("offcanvas-title", {
  Component: DivStyledAsH5$1
});
const defaultProps$q = {
  show: false,
  backdrop: true,
  keyboard: true,
  scroll: false,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  placement: "start"
};
function DialogTransition$1(props) {
  return /* @__PURE__ */ jsx(OffcanvasToggling, {
    ...props
  });
}
function BackdropTransition$1(props) {
  return /* @__PURE__ */ jsx(Fade, {
    ...props
  });
}
const Offcanvas = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  children,
  "aria-labelledby": ariaLabelledby,
  placement,
  show,
  backdrop,
  keyboard,
  scroll,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus,
  enforceFocus,
  restoreFocus,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const modalManager = useRef();
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
  const {
    onToggle
  } = useContext(context$4) || {};
  const handleHide = useEventCallback2(() => {
    onToggle == null ? void 0 : onToggle();
    onHide == null ? void 0 : onHide();
  });
  const modalContext = useMemo(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager)
      return propsManager;
    if (scroll) {
      if (!modalManager.current)
        modalManager.current = new BootstrapModalManager({
          handleContainerOverflow: false
        });
      return modalManager.current;
    }
    return getSharedManager();
  }
  const handleEnter = (node, ...args) => {
    if (node)
      node.style.visibility = "visible";
    onEnter == null ? void 0 : onEnter(node, ...args);
  };
  const handleExited = (node, ...args) => {
    if (node)
      node.style.visibility = "";
    onExited == null ? void 0 : onExited(...args);
  };
  const renderBackdrop = useCallback((backdropProps) => /* @__PURE__ */ jsx("div", {
    ...backdropProps,
    className: classNames(`${bsPrefix}-backdrop`, backdropClassName)
  }), [backdropClassName, bsPrefix]);
  const renderDialog = (dialogProps) => /* @__PURE__ */ jsx("div", {
    role: "dialog",
    ...dialogProps,
    ...props,
    className: classNames(className, bsPrefix, `${bsPrefix}-${placement}`),
    "aria-labelledby": ariaLabelledby,
    children
  });
  return /* @__PURE__ */ jsx(ModalContext.Provider, {
    value: modalContext,
    children: /* @__PURE__ */ jsx(BaseModal, {
      show,
      ref,
      backdrop,
      container,
      keyboard,
      autoFocus,
      enforceFocus: enforceFocus && !scroll,
      restoreFocus,
      restoreFocusOptions,
      onEscapeKeyDown,
      onShow,
      onHide: handleHide,
      onEnter: handleEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: DialogTransition$1,
      backdropTransition: BackdropTransition$1,
      renderBackdrop,
      renderDialog
    })
  });
});
Offcanvas.displayName = "Offcanvas";
Offcanvas.defaultProps = defaultProps$q;
var Offcanvas$1 = Object.assign(Offcanvas, {
  Body: OffcanvasBody,
  Header: OffcanvasHeader,
  Title: OffcanvasTitle
});
const NavbarOffcanvas = /* @__PURE__ */ forwardRef((props, ref) => {
  const context2 = useContext(context$4);
  return /* @__PURE__ */ jsx(Offcanvas$1, {
    ref,
    show: !!(context2 != null && context2.expanded),
    ...props
  });
});
NavbarOffcanvas.displayName = "NavbarOffcanvas";
const NavbarText = createWithBsPrefix("navbar-text", {
  Component: "span"
});
const defaultProps$r = {
  expand: true,
  variant: "light",
  collapseOnSelect: false
};
const Navbar = /* @__PURE__ */ forwardRef((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    expand,
    variant,
    bg,
    fixed,
    sticky,
    className,
    as: Component = "nav",
    expanded,
    onToggle,
    onSelect,
    collapseOnSelect,
    ...controlledProps
  } = useUncontrolled(props, {
    expanded: "onToggle"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "navbar");
  const handleCollapse = useCallback((...args) => {
    onSelect == null ? void 0 : onSelect(...args);
    if (collapseOnSelect && expanded) {
      onToggle == null ? void 0 : onToggle(false);
    }
  }, [onSelect, collapseOnSelect, expanded, onToggle]);
  if (controlledProps.role === void 0 && Component !== "nav") {
    controlledProps.role = "navigation";
  }
  let expandClass = `${bsPrefix}-expand`;
  if (typeof expand === "string")
    expandClass = `${expandClass}-${expand}`;
  const navbarContext = useMemo(() => ({
    onToggle: () => onToggle == null ? void 0 : onToggle(!expanded),
    bsPrefix,
    expanded: !!expanded
  }), [bsPrefix, expanded, onToggle]);
  return /* @__PURE__ */ jsx(context$4.Provider, {
    value: navbarContext,
    children: /* @__PURE__ */ jsx(SelectableContext2.Provider, {
      value: handleCollapse,
      children: /* @__PURE__ */ jsx(Component, {
        ref,
        ...controlledProps,
        className: classNames(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
      })
    })
  });
});
Navbar.defaultProps = defaultProps$r;
Navbar.displayName = "Navbar";
var Navbar$1 = Object.assign(Navbar, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Offcanvas: NavbarOffcanvas,
  Text: NavbarText,
  Toggle: NavbarToggle
});
const NavDropdown = /* @__PURE__ */ forwardRef(({
  id,
  title,
  children,
  bsPrefix,
  className,
  rootCloseEvent,
  menuRole,
  disabled,
  active,
  renderMenuOnMount,
  menuVariant,
  ...props
}, ref) => {
  const navItemPrefix = useBootstrapPrefix(void 0, "nav-item");
  return /* @__PURE__ */ jsxs(Dropdown$1, {
    ref,
    ...props,
    className: classNames(className, navItemPrefix),
    children: [/* @__PURE__ */ jsx(Dropdown$1.Toggle, {
      id,
      eventKey: null,
      active,
      disabled,
      childBsPrefix: bsPrefix,
      as: NavLink,
      children: title
    }), /* @__PURE__ */ jsx(Dropdown$1.Menu, {
      role: menuRole,
      renderOnMount: renderMenuOnMount,
      rootCloseEvent,
      variant: menuVariant,
      children
    })]
  });
});
NavDropdown.displayName = "NavDropdown";
var NavDropdown$1 = Object.assign(NavDropdown, {
  Item: Dropdown$1.Item,
  ItemText: Dropdown$1.ItemText,
  Divider: Dropdown$1.Divider,
  Header: Dropdown$1.Header
});
var PopoverHeader = createWithBsPrefix("popover-header");
var PopoverBody = createWithBsPrefix("popover-body");
function getOverlayDirection(placement, isRTL) {
  let bsDirection = placement;
  if (placement === "left") {
    bsDirection = isRTL ? "end" : "start";
  } else if (placement === "right") {
    bsDirection = isRTL ? "start" : "end";
  }
  return bsDirection;
}
const defaultProps$s = {
  placement: "right"
};
const Popover = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  placement,
  className,
  style: style2,
  children,
  body,
  arrowProps,
  popper: _,
  show: _1,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "popover");
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split("-")) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  return /* @__PURE__ */ jsxs("div", {
    ref,
    role: "tooltip",
    style: style2,
    "x-placement": primaryPlacement,
    className: classNames(className, decoratedBsPrefix, primaryPlacement && `bs-popover-${bsDirection}`),
    ...props,
    children: [/* @__PURE__ */ jsx("div", {
      className: "popover-arrow",
      ...arrowProps
    }), body ? /* @__PURE__ */ jsx(PopoverBody, {
      children
    }) : children]
  });
});
Popover.defaultProps = defaultProps$s;
var Popover$1 = Object.assign(Popover, {
  Header: PopoverHeader,
  Body: PopoverBody,
  POPPER_OFFSET: [0, 8]
});
function useOverlayOffset() {
  const overlayRef = useRef(null);
  const popoverClass = useBootstrapPrefix(void 0, "popover");
  const offset = useMemo(() => ({
    name: "offset",
    options: {
      offset: () => {
        if (overlayRef.current && hasClass(overlayRef.current, popoverClass)) {
          return Popover$1.POPPER_OFFSET;
        }
        return [0, 0];
      }
    }
  }), [popoverClass]);
  return [overlayRef, [offset]];
}
const defaultProps$t = {
  transition: Fade,
  rootClose: false,
  show: false,
  placement: "top"
};
function wrapRefs(props, arrowProps) {
  const {
    ref
  } = props;
  const {
    ref: aRef
  } = arrowProps;
  props.ref = ref.__wrapped || (ref.__wrapped = (r) => ref(safeFindDOMNode(r)));
  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = (r) => aRef(safeFindDOMNode(r)));
}
const Overlay2 = /* @__PURE__ */ forwardRef(({
  children: overlay,
  transition,
  popperConfig = {},
  ...outerProps
}, outerRef) => {
  const popperRef = useRef({});
  const [ref, modifiers] = useOverlayOffset();
  const mergedRef = useMergedRefs2(outerRef, ref);
  const actualTransition = transition === true ? Fade : transition || void 0;
  return /* @__PURE__ */ jsx(BaseOverlay, {
    ...outerProps,
    ref: mergedRef,
    popperConfig: {
      ...popperConfig,
      modifiers: modifiers.concat(popperConfig.modifiers || [])
    },
    transition: actualTransition,
    children: (overlayProps, {
      arrowProps,
      placement,
      popper: popperObj,
      show
    }) => {
      var _popperObj$state, _popperObj$state$modi;
      wrapRefs(overlayProps, arrowProps);
      const popper = Object.assign(popperRef.current, {
        state: popperObj == null ? void 0 : popperObj.state,
        scheduleUpdate: popperObj == null ? void 0 : popperObj.update,
        placement,
        outOfBoundaries: (popperObj == null ? void 0 : (_popperObj$state = popperObj.state) == null ? void 0 : (_popperObj$state$modi = _popperObj$state.modifiersData.hide) == null ? void 0 : _popperObj$state$modi.isReferenceHidden) || false
      });
      if (typeof overlay === "function")
        return overlay({
          ...overlayProps,
          placement,
          show,
          ...!transition && show && {
            className: "show"
          },
          popper,
          arrowProps
        });
      return /* @__PURE__ */ cloneElement(overlay, {
        ...overlayProps,
        placement,
        arrowProps,
        popper,
        className: classNames(overlay.props.className, !transition && show && "show"),
        style: {
          ...overlay.props.style,
          ...overlayProps.style
        }
      });
    }
  });
});
Overlay2.displayName = "Overlay";
Overlay2.defaultProps = defaultProps$t;
function contains(context2, node) {
  if (context2.contains)
    return context2.contains(node);
  if (context2.compareDocumentPosition)
    return context2 === node || !!(context2.compareDocumentPosition(node) & 16);
}
function normalizeDelay(delay) {
  return delay && typeof delay === "object" ? delay : {
    show: delay,
    hide: delay
  };
}
function handleMouseOverOut(handler, args, relatedNative) {
  const [e] = args;
  const target = e.currentTarget;
  const related = e.relatedTarget || e.nativeEvent[relatedNative];
  if ((!related || related !== target) && !contains(target, related)) {
    handler(...args);
  }
}
const defaultProps$u = {
  defaultShow: false,
  trigger: ["hover", "focus"]
};
function OverlayTrigger({
  trigger,
  overlay,
  children,
  popperConfig = {},
  show: propsShow,
  defaultShow = false,
  onToggle,
  delay: propsDelay,
  placement,
  flip = placement && placement.indexOf("auto") !== -1,
  ...props
}) {
  const triggerNodeRef = useRef(null);
  const mergedRef = useMergedRefs2(triggerNodeRef, children.ref);
  const timeout = useTimeout2();
  const hoverStateRef = useRef("");
  const [show, setShow] = useUncontrolledProp(propsShow, defaultShow, onToggle);
  const delay = normalizeDelay(propsDelay);
  const {
    onFocus,
    onBlur,
    onClick
  } = typeof children !== "function" ? Children.only(children).props : {};
  const attachRef = (r) => {
    mergedRef(safeFindDOMNode(r));
  };
  const handleShow = useCallback(() => {
    timeout.clear();
    hoverStateRef.current = "show";
    if (!delay.show) {
      setShow(true);
      return;
    }
    timeout.set(() => {
      if (hoverStateRef.current === "show")
        setShow(true);
    }, delay.show);
  }, [delay.show, setShow, timeout]);
  const handleHide = useCallback(() => {
    timeout.clear();
    hoverStateRef.current = "hide";
    if (!delay.hide) {
      setShow(false);
      return;
    }
    timeout.set(() => {
      if (hoverStateRef.current === "hide")
        setShow(false);
    }, delay.hide);
  }, [delay.hide, setShow, timeout]);
  const handleFocus = useCallback((...args) => {
    handleShow();
    onFocus == null ? void 0 : onFocus(...args);
  }, [handleShow, onFocus]);
  const handleBlur = useCallback((...args) => {
    handleHide();
    onBlur == null ? void 0 : onBlur(...args);
  }, [handleHide, onBlur]);
  const handleClick = useCallback((...args) => {
    setShow(!show);
    onClick == null ? void 0 : onClick(...args);
  }, [onClick, setShow, show]);
  const handleMouseOver = useCallback((...args) => {
    handleMouseOverOut(handleShow, args, "fromElement");
  }, [handleShow]);
  const handleMouseOut = useCallback((...args) => {
    handleMouseOverOut(handleHide, args, "toElement");
  }, [handleHide]);
  const triggers = trigger == null ? [] : [].concat(trigger);
  const triggerProps = {
    ref: attachRef
  };
  if (triggers.indexOf("click") !== -1) {
    triggerProps.onClick = handleClick;
  }
  if (triggers.indexOf("focus") !== -1) {
    triggerProps.onFocus = handleFocus;
    triggerProps.onBlur = handleBlur;
  }
  if (triggers.indexOf("hover") !== -1) {
    triggerProps.onMouseOver = handleMouseOver;
    triggerProps.onMouseOut = handleMouseOut;
  }
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [typeof children === "function" ? children(triggerProps) : /* @__PURE__ */ cloneElement(children, triggerProps), /* @__PURE__ */ jsx(Overlay2, {
      ...props,
      show,
      onHide: handleHide,
      flip,
      placement,
      popperConfig,
      target: triggerNodeRef.current,
      children: overlay
    })]
  });
}
OverlayTrigger.defaultProps = defaultProps$u;
const defaultProps$v = {
  active: false,
  disabled: false,
  activeLabel: "(current)"
};
const PageItem = /* @__PURE__ */ forwardRef(({
  active,
  disabled,
  className,
  style: style2,
  activeLabel,
  children,
  ...props
}, ref) => {
  const Component = active || disabled ? "span" : Anchor2;
  return /* @__PURE__ */ jsx("li", {
    ref,
    style: style2,
    className: classNames(className, "page-item", {
      active,
      disabled
    }),
    children: /* @__PURE__ */ jsxs(Component, {
      className: "page-link",
      disabled,
      ...props,
      children: [children, active && activeLabel && /* @__PURE__ */ jsx("span", {
        className: "visually-hidden",
        children: activeLabel
      })]
    })
  });
});
PageItem.defaultProps = defaultProps$v;
PageItem.displayName = "PageItem";
function createButton(name, defaultValue, label = name) {
  function Button3({
    children,
    ...props
  }) {
    return /* @__PURE__ */ jsxs(PageItem, {
      ...props,
      children: [/* @__PURE__ */ jsx("span", {
        "aria-hidden": "true",
        children: children || defaultValue
      }), /* @__PURE__ */ jsx("span", {
        className: "visually-hidden",
        children: label
      })]
    });
  }
  Button3.displayName = name;
  return Button3;
}
const First = createButton("First", "\xAB");
const Prev = createButton("Prev", "\u2039", "Previous");
const Ellipsis = createButton("Ellipsis", "\u2026", "More");
const Next = createButton("Next", "\u203A");
const Last = createButton("Last", "\xBB");
const Pagination = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  size: size2,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "pagination");
  return /* @__PURE__ */ jsx("ul", {
    ref,
    ...props,
    className: classNames(className, decoratedBsPrefix, size2 && `${decoratedBsPrefix}-${size2}`)
  });
});
Pagination.displayName = "Pagination";
var Pagination$1 = Object.assign(Pagination, {
  First,
  Prev,
  Ellipsis,
  Item: PageItem,
  Next,
  Last
});
function usePlaceholder({
  animation,
  bg,
  bsPrefix,
  size: size2,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, "placeholder");
  const [{
    className,
    ...colProps
  }] = useCol(props);
  return {
    ...colProps,
    className: classNames(className, animation ? `${bsPrefix}-${animation}` : bsPrefix, size2 && `${bsPrefix}-${size2}`, bg && `bg-${bg}`)
  };
}
const PlaceholderButton = /* @__PURE__ */ forwardRef((props, ref) => {
  const placeholderProps = usePlaceholder(props);
  return /* @__PURE__ */ jsx(Button2, {
    ...placeholderProps,
    ref,
    disabled: true,
    tabIndex: -1
  });
});
PlaceholderButton.displayName = "PlaceholderButton";
const Placeholder = /* @__PURE__ */ forwardRef(({
  as: Component = "span",
  ...props
}, ref) => {
  const placeholderProps = usePlaceholder(props);
  return /* @__PURE__ */ jsx(Component, {
    ...placeholderProps,
    ref
  });
});
Placeholder.displayName = "Placeholder";
var Placeholder$1 = Object.assign(Placeholder, {
  Button: PlaceholderButton
});
const ROUND_PRECISION = 1e3;
const defaultProps$w = {
  min: 0,
  max: 100,
  animated: false,
  isChild: false,
  visuallyHidden: false,
  striped: false
};
function getPercentage(now, min, max) {
  const percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}
function renderProgressBar({
  min,
  now,
  max,
  label,
  visuallyHidden,
  striped,
  animated,
  className,
  style: style2,
  variant,
  bsPrefix,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx("div", {
    ref,
    ...props,
    role: "progressbar",
    className: classNames(className, `${bsPrefix}-bar`, {
      [`bg-${variant}`]: variant,
      [`${bsPrefix}-bar-animated`]: animated,
      [`${bsPrefix}-bar-striped`]: animated || striped
    }),
    style: {
      width: `${getPercentage(now, min, max)}%`,
      ...style2
    },
    "aria-valuenow": now,
    "aria-valuemin": min,
    "aria-valuemax": max,
    children: visuallyHidden ? /* @__PURE__ */ jsx("span", {
      className: "visually-hidden",
      children: label
    }) : label
  });
}
const ProgressBar = /* @__PURE__ */ forwardRef(({
  isChild,
  ...props
}, ref) => {
  props.bsPrefix = useBootstrapPrefix(props.bsPrefix, "progress");
  if (isChild) {
    return renderProgressBar(props, ref);
  }
  const {
    min,
    now,
    max,
    label,
    visuallyHidden,
    striped,
    animated,
    bsPrefix,
    variant,
    className,
    children,
    ...wrapperProps
  } = props;
  return /* @__PURE__ */ jsx("div", {
    ref,
    ...wrapperProps,
    className: classNames(className, bsPrefix),
    children: children ? map(children, (child) => /* @__PURE__ */ cloneElement(child, {
      isChild: true
    })) : renderProgressBar({
      min,
      now,
      max,
      label,
      visuallyHidden,
      striped,
      animated,
      bsPrefix,
      variant
    }, ref)
  });
});
ProgressBar.displayName = "ProgressBar";
ProgressBar.defaultProps = defaultProps$w;
const defaultProps$x = {
  aspectRatio: "1x1"
};
function toPercent(num) {
  if (num <= 0 || num > 100)
    return "100%";
  if (num < 1)
    return `${num * 100}%`;
  return `${num}%`;
}
const Ratio = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  children,
  aspectRatio,
  style: style2,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "ratio");
  const isCustomRatio = typeof aspectRatio === "number";
  return /* @__PURE__ */ jsx("div", {
    ref,
    ...props,
    style: {
      ...style2,
      ...isCustomRatio && {
        "--bs-aspect-ratio": toPercent(aspectRatio)
      }
    },
    className: classNames(bsPrefix, className, !isCustomRatio && `${bsPrefix}-${aspectRatio}`),
    children: Children.only(children)
  });
});
Ratio.defaultProps = defaultProps$x;
const DEVICE_SIZES$1 = ["xxl", "xl", "lg", "md", "sm", "xs"];
const Row = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  as: Component = "div",
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "row");
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  DEVICE_SIZES$1.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;
    if (propValue != null && typeof propValue === "object") {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }
    const infix = brkPoint !== "xs" ? `-${brkPoint}` : "";
    if (cols != null)
      classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return /* @__PURE__ */ jsx(Component, {
    ref,
    ...props,
    className: classNames(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = "Row";
const Spinner = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  variant,
  animation,
  size: size2,
  as: Component = "div",
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "spinner");
  const bsSpinnerPrefix = `${bsPrefix}-${animation}`;
  return /* @__PURE__ */ jsx(Component, {
    ref,
    ...props,
    className: classNames(className, bsSpinnerPrefix, size2 && `${bsSpinnerPrefix}-${size2}`, variant && `text-${variant}`)
  });
});
Spinner.displayName = "Spinner";
const propTypes$5 = {
  id: PropTypes.string,
  toggleLabel: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  align: alignPropType,
  menuRole: PropTypes.string,
  renderMenuOnMount: PropTypes.bool,
  rootCloseEvent: PropTypes.string,
  bsPrefix: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string
};
const defaultProps$y = {
  toggleLabel: "Toggle dropdown",
  type: "button"
};
const SplitButton = /* @__PURE__ */ forwardRef(({
  id,
  bsPrefix,
  size: size2,
  variant,
  title,
  type,
  toggleLabel,
  children,
  onClick,
  href,
  target,
  menuRole,
  renderMenuOnMount,
  rootCloseEvent,
  ...props
}, ref) => /* @__PURE__ */ jsxs(Dropdown$1, {
  ref,
  ...props,
  as: ButtonGroup,
  children: [/* @__PURE__ */ jsx(Button2, {
    size: size2,
    variant,
    disabled: props.disabled,
    bsPrefix,
    href,
    target,
    onClick,
    type,
    children: title
  }), /* @__PURE__ */ jsx(Dropdown$1.Toggle, {
    split: true,
    id,
    size: size2,
    variant,
    disabled: props.disabled,
    childBsPrefix: bsPrefix,
    children: /* @__PURE__ */ jsx("span", {
      className: "visually-hidden",
      children: toggleLabel
    })
  }), /* @__PURE__ */ jsx(Dropdown$1.Menu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent,
    children
  })]
}));
SplitButton.propTypes = propTypes$5;
SplitButton.defaultProps = defaultProps$y;
SplitButton.displayName = "SplitButton";
const DEVICE_SIZES$2 = ["xxl", "xl", "lg", "md", "sm", "xs"];
function createUtilityClassName(utilityValues) {
  const classes = [];
  Object.entries(utilityValues).forEach(([utilName, utilValue]) => {
    if (utilValue != null) {
      if (typeof utilValue === "object") {
        DEVICE_SIZES$2.forEach((brkPoint) => {
          const bpValue = utilValue[brkPoint];
          if (bpValue != null) {
            const infix = brkPoint !== "xs" ? `-${brkPoint}` : "";
            classes.push(`${utilName}${infix}-${bpValue}`);
          }
        });
      } else {
        classes.push(`${utilName}-${utilValue}`);
      }
    }
  });
  return classes;
}
const Stack = /* @__PURE__ */ forwardRef(({
  as: Component = "div",
  bsPrefix,
  className,
  direction,
  gap,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, direction === "horizontal" ? "hstack" : "vstack");
  return /* @__PURE__ */ jsx(Component, {
    ...props,
    ref,
    className: classNames(className, bsPrefix, ...createUtilityClassName({
      gap
    }))
  });
});
Stack.displayName = "Stack";
function getTabTransitionComponent(transition) {
  if (typeof transition === "boolean") {
    return transition ? Fade : void 0;
  }
  return transition;
}
const TabContainer = ({
  transition,
  ...props
}) => /* @__PURE__ */ jsx(Tabs$1, {
  ...props,
  transition: getTabTransitionComponent(transition)
});
TabContainer.displayName = "TabContainer";
var TabContent = createWithBsPrefix("tab-content");
const TabPane = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  transition,
  ...props
}, ref) => {
  const [{
    className,
    as: Component = "div",
    ...rest
  }, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition3 = NoopTransition2
  }] = useTabPanel({
    ...props,
    transition: getTabTransitionComponent(transition)
  });
  const prefix = useBootstrapPrefix(bsPrefix, "tab-pane");
  return /* @__PURE__ */ jsx(TabContext2.Provider, {
    value: null,
    children: /* @__PURE__ */ jsx(SelectableContext2.Provider, {
      value: null,
      children: /* @__PURE__ */ jsx(Transition3, {
        in: isActive,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        mountOnEnter,
        unmountOnExit,
        children: /* @__PURE__ */ jsx(Component, {
          ...rest,
          ref,
          className: classNames(className, prefix, isActive && "active")
        })
      })
    })
  });
});
TabPane.displayName = "TabPane";
const propTypes$6 = {
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  tabClassName: PropTypes.string
};
const Tab = () => {
  throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly");
};
Tab.propTypes = propTypes$6;
var Tab$1 = Object.assign(Tab, {
  Container: TabContainer,
  Content: TabContent,
  Pane: TabPane
});
const Table = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  striped,
  bordered,
  borderless,
  hover,
  size: size2,
  variant,
  responsive,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "table");
  const classes = classNames(className, decoratedBsPrefix, variant && `${decoratedBsPrefix}-${variant}`, size2 && `${decoratedBsPrefix}-${size2}`, striped && `${decoratedBsPrefix}-striped`, bordered && `${decoratedBsPrefix}-bordered`, borderless && `${decoratedBsPrefix}-borderless`, hover && `${decoratedBsPrefix}-hover`);
  const table = /* @__PURE__ */ jsx("table", {
    ...props,
    className: classes,
    ref
  });
  if (responsive) {
    let responsiveClass = `${decoratedBsPrefix}-responsive`;
    if (typeof responsive === "string") {
      responsiveClass = `${responsiveClass}-${responsive}`;
    }
    return /* @__PURE__ */ jsx("div", {
      className: responsiveClass,
      children: table
    });
  }
  return table;
});
const defaultProps$z = {
  variant: "tabs",
  mountOnEnter: false,
  unmountOnExit: false
};
function getDefaultActiveKey(children) {
  let defaultActiveKey;
  forEach(children, (child) => {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}
function renderTab(child) {
  const {
    title,
    eventKey,
    disabled,
    tabClassName,
    id
  } = child.props;
  if (title == null) {
    return null;
  }
  return /* @__PURE__ */ jsx(NavItem2, {
    as: "li",
    role: "presentation",
    children: /* @__PURE__ */ jsx(NavLink, {
      as: "button",
      type: "button",
      eventKey,
      disabled,
      id,
      className: tabClassName,
      children: title
    })
  });
}
const Tabs2 = (props) => {
  const {
    id,
    onSelect,
    transition,
    mountOnEnter,
    unmountOnExit,
    children,
    activeKey = getDefaultActiveKey(children),
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  return /* @__PURE__ */ jsxs(Tabs$1, {
    id,
    activeKey,
    onSelect,
    transition: getTabTransitionComponent(transition),
    mountOnEnter,
    unmountOnExit,
    children: [/* @__PURE__ */ jsx(Nav$1, {
      ...controlledProps,
      role: "tablist",
      as: "ul",
      children: map(children, renderTab)
    }), /* @__PURE__ */ jsx(TabContent, {
      children: map(children, (child) => {
        const childProps = {
          ...child.props
        };
        delete childProps.title;
        delete childProps.disabled;
        delete childProps.tabClassName;
        return /* @__PURE__ */ jsx(TabPane, {
          ...childProps
        });
      })
    })]
  });
};
Tabs2.defaultProps = defaultProps$z;
Tabs2.displayName = "Tabs";
const fadeStyles$1 = {
  [ENTERING]: "showing",
  [EXITING]: "showing show"
};
const ToastFade = /* @__PURE__ */ forwardRef((props, ref) => /* @__PURE__ */ jsx(Fade, {
  ...props,
  ref,
  transitionClasses: fadeStyles$1
}));
ToastFade.displayName = "ToastFade";
const ToastContext = /* @__PURE__ */ createContext({
  onClose() {
  }
});
const defaultProps$A = {
  closeLabel: "Close",
  closeButton: true
};
const ToastHeader = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  closeLabel,
  closeVariant,
  closeButton,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast-header");
  const context2 = useContext(ToastContext);
  const handleClick = useEventCallback2((e) => {
    context2 == null ? void 0 : context2.onClose == null ? void 0 : context2.onClose(e);
  });
  return /* @__PURE__ */ jsxs("div", {
    ref,
    ...props,
    className: classNames(bsPrefix, className),
    children: [children, closeButton && /* @__PURE__ */ jsx(CloseButton, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick,
      "data-dismiss": "toast"
    })]
  });
});
ToastHeader.displayName = "ToastHeader";
ToastHeader.defaultProps = defaultProps$A;
var ToastBody = createWithBsPrefix("toast-body");
const Toast = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  className,
  transition: Transition3 = ToastFade,
  show = true,
  animation = true,
  delay = 5e3,
  autohide = false,
  onClose,
  bg,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast");
  const delayRef = useRef(delay);
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  const autohideTimeout = useTimeout2();
  const autohideToast = !!(autohide && show);
  const autohideFunc = useCallback(() => {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  useEffect(() => {
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  const toastContext = useMemo(() => ({
    onClose
  }), [onClose]);
  const hasAnimation = !!(Transition3 && animation);
  const toast = /* @__PURE__ */ jsx("div", {
    ...props,
    ref,
    className: classNames(bsPrefix, className, bg && `bg-${bg}`, !hasAnimation && (show ? "show" : "hide")),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  });
  return /* @__PURE__ */ jsx(ToastContext.Provider, {
    value: toastContext,
    children: hasAnimation && Transition3 ? /* @__PURE__ */ jsx(Transition3, {
      in: show,
      unmountOnExit: true,
      children: toast
    }) : toast
  });
});
Toast.displayName = "Toast";
var Toast$1 = Object.assign(Toast, {
  Body: ToastBody,
  Header: ToastHeader
});
const positionClasses = {
  "top-start": "top-0 start-0",
  "top-center": "top-0 start-50 translate-middle-x",
  "top-end": "top-0 end-0",
  "middle-start": "top-50 start-0 translate-middle-y",
  "middle-center": "top-50 start-50 translate-middle",
  "middle-end": "top-50 end-0 translate-middle-y",
  "bottom-start": "bottom-0 start-0",
  "bottom-center": "bottom-0 start-50 translate-middle-x",
  "bottom-end": "bottom-0 end-0"
};
const ToastContainer = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  position,
  className,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast-container");
  return /* @__PURE__ */ jsx(Component, {
    ref,
    ...props,
    className: classNames(bsPrefix, position && `position-absolute ${positionClasses[position]}`, className)
  });
});
ToastContainer.displayName = "ToastContainer";
const noop = () => void 0;
const ToggleButton = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  name,
  className,
  checked,
  type,
  onChange,
  value,
  disabled,
  id,
  inputRef,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "btn-check");
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("input", {
      className: bsPrefix,
      name,
      type,
      value,
      ref: inputRef,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onChange: onChange || noop,
      id
    }), /* @__PURE__ */ jsx(Button2, {
      ...props,
      ref,
      className: classNames(className, disabled && "disabled"),
      type: void 0,
      as: "label",
      htmlFor: id
    })]
  });
});
ToggleButton.displayName = "ToggleButton";
const defaultProps$B = {
  type: "radio",
  vertical: false
};
const ToggleButtonGroup = /* @__PURE__ */ forwardRef((props, ref) => {
  const {
    children,
    type,
    name,
    value,
    onChange,
    ...controlledProps
  } = useUncontrolled(props, {
    value: "onChange"
  });
  const getValues = () => value == null ? [] : [].concat(value);
  const handleToggle = (inputVal, event) => {
    if (!onChange) {
      return;
    }
    const values = getValues();
    const isActive = values.indexOf(inputVal) !== -1;
    if (type === "radio") {
      if (!isActive && onChange)
        onChange(inputVal, event);
      return;
    }
    if (isActive) {
      onChange(values.filter((n) => n !== inputVal), event);
    } else {
      onChange([...values, inputVal], event);
    }
  };
  !(type !== "radio" || !!name) ? invariant2(false) : void 0;
  return /* @__PURE__ */ jsx(ButtonGroup, {
    ...controlledProps,
    ref,
    children: map(children, (child) => {
      const values = getValues();
      const {
        value: childVal,
        onChange: childOnChange
      } = child.props;
      const handler = (e) => handleToggle(childVal, e);
      return /* @__PURE__ */ cloneElement(child, {
        type,
        name: child.name || name,
        checked: values.indexOf(childVal) !== -1,
        onChange: createChainedFunction(childOnChange, handler)
      });
    })
  });
});
ToggleButtonGroup.defaultProps = defaultProps$B;
var ToggleButtonGroup$1 = Object.assign(ToggleButtonGroup, {
  Button: ToggleButton
});
const defaultProps$C = {
  placement: "right"
};
const Tooltip = /* @__PURE__ */ forwardRef(({
  bsPrefix,
  placement,
  className,
  style: style2,
  children,
  arrowProps,
  popper: _,
  show: _2,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "tooltip");
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split("-")) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  return /* @__PURE__ */ jsxs("div", {
    ref,
    style: style2,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: classNames(className, bsPrefix, `bs-tooltip-${bsDirection}`),
    ...props,
    children: [/* @__PURE__ */ jsx("div", {
      className: "tooltip-arrow",
      ...arrowProps
    }), /* @__PURE__ */ jsx("div", {
      className: `${bsPrefix}-inner`,
      children
    })]
  });
});
Tooltip.defaultProps = defaultProps$C;
Tooltip.displayName = "Tooltip";
export {Accordion$1 as Accordion, AccordionButton, AccordionCollapse, context as AccordionContext, Alert$1 as Alert, Badge, Breadcrumb$1 as Breadcrumb, BreadcrumbItem, Button2 as Button, ButtonGroup, ButtonToolbar, Card$1 as Card, CardGroup, CardImg, Carousel$1 as Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown$1 as Dropdown, DropdownButton, Fade, Figure$1 as Figure, FloatingLabel, Form$1 as Form, FormCheck$1 as FormCheck, FormControl$1 as FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup$1 as InputGroup, ListGroup$1 as ListGroup, ListGroupItem, Modal$1 as Modal, ModalBody, ModalDialog, ModalFooter, ModalTitle, Nav$1 as Nav, NavDropdown$1 as NavDropdown, NavItem2 as NavItem, NavLink, Navbar$1 as Navbar, NavbarBrand, Offcanvas$1 as Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay2 as Overlay, OverlayTrigger, PageItem, Pagination$1 as Pagination, Placeholder$1 as Placeholder, PlaceholderButton, Popover$1 as Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, Spinner, SplitButton, Stack, Tab$1 as Tab, TabContainer, TabContent, TabPane, Table, Tabs2 as Tabs, ThemeProvider, Toast$1 as Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup$1 as ToggleButtonGroup, Tooltip, useAccordionButton};
export default null;
