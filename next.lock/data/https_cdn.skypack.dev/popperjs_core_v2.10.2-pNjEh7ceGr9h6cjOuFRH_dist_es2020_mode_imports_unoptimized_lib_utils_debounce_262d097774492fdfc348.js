export default function debounce(fn) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn());
        });
      });
    }
    return pending;
  };
}
