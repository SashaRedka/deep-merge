module.exports = {
  isObject,
  isArray,
  isSameTypes,
};

function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

function isArray(arr) {
  return Array.isArray(arr);
}

function isSameTypes(val1, val2) {
  return (
    Object.prototype.toString.call(val1) ===
    Object.prototype.toString.call(val2)
  );
}
