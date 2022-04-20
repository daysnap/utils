import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
export default function omit(obj) {
  var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var clone = _objectSpread({}, obj);

  fields.forEach(function (key) {
    return delete clone[key];
  });
  return clone;
}