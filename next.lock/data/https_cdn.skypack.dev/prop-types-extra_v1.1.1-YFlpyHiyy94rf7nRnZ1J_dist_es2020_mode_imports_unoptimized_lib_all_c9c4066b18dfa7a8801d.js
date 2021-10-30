import _createChainableTypeChecker from "../../unoptimized/lib/utils/createChainableTypeChecker.js";
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
  exports.default = all;
  var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function all() {
    for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
      validators[_key] = arguments[_key];
    }
    function allPropTypes() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      var error = null;
      validators.forEach(function(validator) {
        if (error != null) {
          return;
        }
        var result = validator.apply(void 0, args);
        if (result != null) {
          error = result;
        }
      });
      return error;
    }
    return (0, _createChainableTypeChecker2.default)(allPropTypes);
  }
  module.exports = exports["default"];
});
var __VIRTUAL_FILE$1 = /* @__PURE__ */ getDefaultExportFromCjs(__VIRTUAL_FILE);
export default __VIRTUAL_FILE$1;
