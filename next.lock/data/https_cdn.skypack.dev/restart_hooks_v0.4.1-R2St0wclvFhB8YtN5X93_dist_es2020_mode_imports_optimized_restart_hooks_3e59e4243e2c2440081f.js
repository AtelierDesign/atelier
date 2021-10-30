import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2020,mode=imports/optimized/react.js";
const {useState} = __commonjs_module0;
const {useRef} = __commonjs_module0;
const {useEffect: useEffect$1} = __commonjs_module0;
const {useCallback} = __commonjs_module0;
const {useLayoutEffect} = __commonjs_module0;
;
function useCallbackRef() {
  return useState(null);
}
function useCommittedRef(value) {
  var ref = useRef(value);
  useEffect$1(function() {
    ref.current = value;
  }, [value]);
  return ref;
}
function useEventCallback(fn) {
  var ref = useCommittedRef(fn);
  return useCallback(function() {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}
function useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }
  var handler = useEventCallback(listener);
  useEffect$1(function() {
    var target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function() {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}
function useGlobalListener(event, handler, capture) {
  if (capture === void 0) {
    capture = false;
  }
  var documentTarget = useCallback(function() {
    return document;
  }, []);
  return useEventListener(documentTarget, event, handler, capture);
}
function useInterval(fn, ms, paused, runImmediately) {
  if (paused === void 0) {
    paused = false;
  }
  if (runImmediately === void 0) {
    runImmediately = false;
  }
  var handle;
  var fnRef = useCommittedRef(fn);
  var pausedRef = useCommittedRef(paused);
  var tick = function tick2() {
    if (pausedRef.current)
      return;
    fnRef.current();
    schedule();
  };
  var schedule = function schedule2() {
    clearTimeout(handle);
    handle = setTimeout(tick, ms);
  };
  useEffect$1(function() {
    if (runImmediately) {
      tick();
    } else {
      schedule();
    }
    return function() {
      return clearTimeout(handle);
    };
  }, [paused, runImmediately]);
}
function useRafInterval(fn, ms, paused) {
  if (paused === void 0) {
    paused = false;
  }
  var handle;
  var start = new Date().getTime();
  var fnRef = useCommittedRef(fn);
  var pausedRef = useCommittedRef(paused);
  function loop() {
    var current = new Date().getTime();
    var delta = current - start;
    if (pausedRef.current)
      return;
    if (delta >= ms && fnRef.current) {
      fnRef.current();
      start = new Date().getTime();
    }
    cancelAnimationFrame(handle);
    handle = requestAnimationFrame(loop);
  }
  useEffect$1(function() {
    handle = requestAnimationFrame(loop);
    return function() {
      return cancelAnimationFrame(handle);
    };
  }, []);
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function useMergeState(initialState) {
  var _useState = useState(initialState), state = _useState[0], setState = _useState[1];
  var updater = useCallback(function(update) {
    if (update === null)
      return;
    if (typeof update === "function") {
      setState(function(state2) {
        var nextState = update(state2);
        return nextState == null ? state2 : _extends({}, state2, nextState);
      });
    } else {
      setState(function(state2) {
        return _extends({}, state2, update);
      });
    }
  }, [setState]);
  return [state, updater];
}
function useMergeStateFromProps(props, gDSFP, initialState) {
  var _useMergeState = useMergeState(initialState), state = _useMergeState[0], setState = _useMergeState[1];
  var nextState = gDSFP(props, state);
  if (nextState !== null)
    setState(nextState);
  return [state, setState];
}
function useMounted() {
  var mounted = useRef(true);
  var isMounted = useRef(function() {
    return mounted.current;
  });
  useEffect$1(function() {
    return function() {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}
function usePrevious(value) {
  var ref = useRef(null);
  useEffect$1(function() {
    ref.current = value;
  });
  return ref.current;
}
function useImage(imageOrUrl, crossOrigin) {
  var _useState = useState({
    image: null,
    error: null
  }), state = _useState[0], setState = _useState[1];
  useEffect$1(function() {
    if (!imageOrUrl)
      return void 0;
    var image;
    if (typeof imageOrUrl === "string") {
      image = new Image();
      if (crossOrigin)
        image.crossOrigin = crossOrigin;
      image.src = imageOrUrl;
    } else {
      image = imageOrUrl;
      if (image.complete && image.naturalHeight > 0) {
        setState({
          image,
          error: null
        });
        return;
      }
    }
    function onLoad() {
      setState({
        image,
        error: null
      });
    }
    function onError(error) {
      setState({
        image,
        error
      });
    }
    image.addEventListener("load", onLoad);
    image.addEventListener("error", onError);
    return function() {
      image.removeEventListener("load", onLoad);
      image.removeEventListener("error", onError);
    };
  }, [imageOrUrl, crossOrigin]);
  return state;
}
var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
var isReactNative = typeof global$1 !== "undefined" && global$1.navigator && global$1.navigator.product === "ReactNative";
var isDOM = typeof document !== "undefined";
var useEffect = isDOM || isReactNative ? useLayoutEffect : useEffect$1;
var targetMap = new WeakMap();
var resizeObserver;
function getResizeObserver() {
  return resizeObserver = resizeObserver || new window.ResizeObserver(function(entries) {
    entries.forEach(function(entry) {
      var handler = targetMap.get(entry.target);
      if (handler)
        handler(entry.contentRect);
    });
  });
}
function useResizeObserver(element) {
  var _useState = useState(null), rect = _useState[0], setRect = _useState[1];
  useEffect(function() {
    if (!element)
      return;
    getResizeObserver().observe(element);
    setRect(element.getBoundingClientRect());
    targetMap.set(element, function(rect2) {
      setRect(rect2);
    });
    return function() {
      targetMap.delete(element);
    };
  }, [element]);
  return rect;
}
export {useCallbackRef, useCommittedRef, useEventCallback, useEventListener, useGlobalListener, useImage, useInterval, useMergeState, useMergeStateFromProps, useMounted, usePrevious, useRafInterval, useResizeObserver};
export default null;
