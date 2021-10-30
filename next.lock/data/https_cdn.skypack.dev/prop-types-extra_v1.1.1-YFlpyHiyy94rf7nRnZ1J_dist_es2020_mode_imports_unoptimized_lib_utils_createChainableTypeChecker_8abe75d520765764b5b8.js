function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn) {
  var module = {exports: {}};
  return fn(module, module.exports), module.exports;
}
var __VIRTUAL_FILE = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createChainableTypeChecker;
  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
      var componentNameSafe = componentName || "<<anonymous>>";
      var propFullNameSafe = propFullName || propName;
      if (props[propName] == null) {
        if (isRequired) {
          return new Error("Required " + location + " `" + propFullNameSafe + "` was not specified " + ("in `" + componentNameSafe + "`."));
        }
        return null;
      }
      for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        args[_key - 6] = arguments[_key];
      }
      return validate.apply(void 0, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  module.exports = exports["default"];
});
var __VIRTUAL_FILE$1 = /* @__PURE__ */ getDefaultExportFromCjs(__VIRTUAL_FILE);
export default __VIRTUAL_FILE$1;
