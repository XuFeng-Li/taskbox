import React from 'react';
import PropTypes from 'prop-types';
import { parse, stringify } from 'qs';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var FormatWan = function FormatWan(_ref) {
  var val = _ref.val;
  var v = val * 1;

  if (!v || Number.isNaN(v)) {
    return /*#__PURE__*/React.createElement("span", null, v, " is NaN");
  }
  var result = val;

  if (val > 10000) {
    result = Math.floor(val / 10000);
    result = /*#__PURE__*/React.createElement("span", null, result, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        top: -2,
        fontSize: 14,
        fontStyle: 'normal',
        marginLeft: 2
      }
    }, "\u4E07"));
  }

  return result;
};
formatWan.PropTypes = {
  val: PropTypes.number.isRequired
};

var fixedZero = function fixedZero(val) {
  return val * 1 < 10 ? "0".concat(val) : val;
};
fixedZero.PropTypes = {
  val: PropTypes.number.isRequired
};
function getPlainNode(nodeList) {
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var arr = [];
  nodeList.forEach(function (node) {
    var item = node;
    item.path = "".concat(parentPath, "/").concat(item.path || '').replace(/\/+/g, '/');
    item.exact = true;

    if (item.children && !item.component) {
      arr.push.apply(arr, _toConsumableArray(getPlainNode(item.children, item.path)));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }

      arr.push(item);
    }
  });
  return arr;
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }

  var arr1 = str1.split('/');
  var arr2 = str2.split('/');

  if (arr2.every(function (item, index) {
    return item === arr1[index];
  })) {
    return 1;
  }

  if (arr1.every(function (item, index) {
    return item === arr2[index];
  })) {
    return 2;
  }

  return 3;
}

function getRenderArr(routes) {
  var renderArr = [];
  renderArr.push(routes[0]);

  var _loop = function _loop(i) {
    // 去重
    renderArr = renderArr.filter(function (item) {
      return getRelation(item, routes[i]) !== 1;
    }); // 是否包含

    var isAdd = renderArr.every(function (item) {
      return getRelation(item, routes[i]) === 3;
    });

    if (isAdd) {
      renderArr.push(routes[i]);
    }
  };

  for (var i = 1; i < routes.length; i += 1) {
    _loop(i);
  }

  return renderArr;
}
/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */


function getRoutes(path, routerData) {
  var routes = Object.keys(routerData).filter(function (routePath) {
    return routePath.indexOf(path) === 0 && routePath !== path;
  }); // Replace path to '' eg. path='user' /user/name => name

  routes = routes.map(function (item) {
    return item.replace(path, '');
  }); // Get the route to be rendered to remove the deep rendering

  var renderArr = getRenderArr(routes); // Conversion and stitching parameters

  var renderRoutes = renderArr.map(function (item) {
    var exact = !routes.some(function (route) {
      return route !== item && getRelation(route, item) === 1;
    });
    return _objectSpread2(_objectSpread2({
      exact: exact
    }, routerData["".concat(path).concat(item)]), {}, {
      key: "".concat(path).concat(item),
      path: "".concat(path).concat(item)
    });
  });
  return renderRoutes;
}
function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}
function getQueryPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var search = stringify(query);

  if (search.length) {
    return "".concat(path, "?").concat(search);
  }

  return path;
}
/* eslint no-useless-escape:0 */

var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
function isUrl(path) {
  return reg.test(path);
}
/** 给官方演示站点用，用于关闭真实开发环境不需要使用的特性 */

function isAntdPro() {
  return window.location.hostname === 'preview.pro.ant.design';
} // 类型判断
// const isType = type => obj =>
//   obj != null && Object.prototype.toString.call(obj) === `[object ${type}]`;

var isType = function isType(type) {
  return function (obj) {
    return obj != null && Object.prototype.toString.call(obj) === "[object ".concat(type, "]");
  };
};

var isFn = isType('Function');
var isArr = Array.isArray || isType('Array');
var isPlainObj = isType('Object');
var isStr = isType('String');
var isBool = isType('Boolean');
var isNum = isType('Number');
var isObj = function isObj(val) {
  return _typeof(val) === 'object';
};
var isRegExp = isType('RegExp');
var isEmpty = function isEmpty(val) {
  if (!val && !isNum(val)) {
    return true;
  }
};
var isEmptyArr = function isEmptyArr(list) {
  if (!isArr(list)) return;
  return list.every(function (ele) {
    return isEmpty(ele);
  });
};
var filterRender = function filterRender(val, children) {
  return isEmpty(val) ? '--' : children || val;
};
var filterEmptyAttr = function filterEmptyAttr(obj) {
  if (!isObj(obj)) return obj;
  Object.keys(obj).forEach(function (ele) {
    if (isEmpty(obj[ele])) delete obj[ele];
  });
  return obj;
};
/**
 * 例如
 * https://XXX/测试文件_6bd8d67918157897f68728b369caaa14.jpeg  ===> 测试文件.jpeg
 * https://XXX/6bd8d67918157897f68728b369caaa14.jpeg  ===> 6bd8d67918157897f68728b369caaa14.jpeg
 */

function simplifyFileName(url, code) {
  var index = url.indexOf('_');
  var nameStartIndex = url.lastIndexOf('/');

  if (typeof url !== 'string') {
    return url;
  }

  if (index < 0) {
    return url.substring(nameStartIndex + 1); // 直接返回文件名
  }

  var extensionName = url.substring(url.lastIndexOf('.')); // 扩展名

  var nameEndIndex = url.lastIndexOf('_');
  var retStr = url.substring(nameStartIndex + 1, nameEndIndex);

  if (code * 1 !== 4) {
    return retStr + extensionName.substring(0, extensionName.indexOf('?'));
  }

  return retStr + extensionName;
} // 后台返回的是 [url], 转化成 {url: '', name: '', status: 'done', uid: ''} 的形式

function simplifyUrlMapToFileList(arr, code) {
  if (!arr || !arr.length) {
    return arr;
  }

  if (typeof arr === 'string') {
    arr = [arr];
  }

  var data = arr.map(function (urlStr, i) {
    if (typeof urlStr !== 'string') {
      return urlStr;
    }

    var element = {}; // console.log(urlStr, 123);
    // const index = urlStr.lastIndexOf('/');

    element.uid = -i + 10;
    element.status = 'done';
    element.name = simplifyFileName(urlStr, code); // urlStr.substring(index + 1);

    element.url = urlStr;
    return element;
  }); // debugger

  return data;
} // 后台返回的是 [url], 转化成 {url: '', name: '', status: 'done', uid: ''} 的形式

function urlMapToFileList(arr) {
  if (!arr || !arr.length) {
    return arr;
  }

  if (typeof arr === 'string') {
    arr = [arr];
  }

  var data = arr.map(function (urlStr, i) {
    if (typeof urlStr !== 'string') {
      return urlStr;
    }

    var element = {}; // console.log(urlStr, 123);

    var index = urlStr.lastIndexOf('/');
    element.uid = -i + 10;
    element.status = 'done';
    element.name = urlStr.substring(index + 1);
    element.url = urlStr;
    return element;
  }); // debugger

  return data;
} // 返回url对应的文件名

function urlMapToFile(urlStr) {
  if (typeof urlStr !== 'string') {
    return urlStr;
  }

  var index = urlStr.lastIndexOf('/');
  return urlStr.substring(index + 1);
}
function fileListTourlMap(arr) {
  if (!arr || !arr.length) {
    return arr;
  }

  var data = arr.map(function (ele) {
    return ele.url || null;
  });
  return data.filter(function (ele) {
    return ele;
  });
}
function transformServerDataForDefaultTreeData(data) {
  var Tdata = {};
  var childMeun = [];
  var childFunList = [];
  Tdata.title = data.name;
  Tdata.value = data.token;
  Tdata.key = data.token;
  Tdata.children = [];

  if (data.childMenuDefList && data.childMenuDefList.length) {
    childMeun = data.childMenuDefList.map(function (chidData) {
      return transformServerDataForDefaultTreeData(chidData);
    });
  }

  if (data.funList && data.funList.length) {
    childFunList = data.funList.map(function (chidData) {
      return transformServerDataForDefaultTreeData(chidData);
    });
  }

  Tdata.children = Tdata.children.concat(childMeun).concat(childFunList);
  return Tdata;
}
function trim() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!isStr(str)) return str;
  return str.replace(/^\s+|\s+$/g, '');
}
function beforeTrim() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.replace(/^\s+/g, '');
}
function trimFormValue(formDate) {
  var excludeArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var copyFormDate = _objectSpread2({}, formDate);

  Object.keys(copyFormDate).forEach(function (ele) {
    if (excludeArr.indexOf(copyFormDate[ele]) > -1) return;

    if (typeof copyFormDate[ele] === 'string') {
      copyFormDate[ele] = trim(copyFormDate[ele]);
    }
  });
  return copyFormDate;
}
function mapToObject(list, key) {
  if (!list || !list.length) return list;
  var data = {};
  list.forEach(function (ele) {
    data[ele[key]] = ele;
  });
  return data;
}
function beforeFieldsToRedux(fields, actions) {
  if (!fields) return fields;
  var backData = {};
  var isOrigin = true;
  var fAction = isArr(actions);
  Object.keys(fields).forEach(function (ele, i) {
    var data = fields[ele];

    if (!fAction) {
      if (data.name && isOrigin) {
        backData[ele] = data.value;
      } else {
        isOrigin = false;
        backData[data.name || ele] = beforeFieldsToRedux(backData[ele]);
      }
    } else {
      var toAddAttr = true;

      if (data.name) {
        var _iterator = _createForOfIteratorHelper(actions),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var ac = _step.value;

            if (!data[ac]) {
              toAddAttr = false;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (toAddAttr) {
        if (data.name && isOrigin) {
          backData[data.name || ele] = data.value;
        } else if (data.name && !isOrigin) {
          backData[ele] = data.value;
        } else {
          isOrigin = false;
          backData[data.name || ele] = beforeFieldsToRedux(data);
        }
      }
    }
  });
  return backData;
} // 添加了dirty和touched判断

function fieldsToRedux(fields) {
  return beforeFieldsToRedux(fields, ['touched', 'dirty']);
}
function assignObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function arrayFilterSame(list) {
  if (!list || !list.length) return;
  var hasMap = {};
  var backList = [];
  list.forEach(function (ele, i) {
    if (!hasMap[ele]) {
      backList.push(ele);
    }

    hasMap[ele] = ele;
  });
  return backList;
}
function arrayDelOne(list, one, changeOrigin) {
  if (!list || !list.length) return list;
  var index = list.indexOf(one);
  if (index === -1) return list;

  if (changeOrigin) {
    list.splice(index, 1);
    return list;
  }

  var copyList = _toConsumableArray(list);

  copyList.splice(index, 1);
  return copyList;
}
function arrayHasSame(list) {
  if (!list || !list.length) return false;
  var hasMap = {};
  var hasSame = false;

  for (var i = 0; i < list.length; i++) {
    var value = list[i];

    if (hasMap[value]) {
      hasSame = true;
      break;
    }

    hasMap[value] = value;
  }

  return hasSame;
} // 获取深层object指定的值

function findDataByKey(data, key) {
  if (!key) return data;
  var keys = key.split('.');
  var backData = data;

  for (var i = 0; i < keys.length; i++) {
    if (!backData[keys[i]]) break;
    backData = data[keys[i]];
  }

  return backData;
} // 分转化为元

function MinuteToyuan(value) {
  if (value === null) return value;
  return value / 100;
}
function YuanAndMinuteReverse(data, keys, backYuan) {
  if (!keys) return data;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = null;

    if (backYuan) {
      value = MinuteToyuan(data[key]);
    } else {
      value = yuanToMinute(data[key]);
    }

    if (key in data) {
      data[key] = value;
    }
  }
}
function minuteToyuanStr(minute, noText) {
  var text = noText ? '' : ' 元';
  if (!minute) return "0.00".concat(text);
  var yuanStr = "".concat(minute / 100);
  var yuans = yuanStr.split('.');
  var yuanPart = yuans[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return "".concat(yuanPart, ".").concat(yuans[1] ? "".concat(yuans[1], "00").substring(0, 2) : '00').concat(text);
} // 分转元

var fen2yuan = function fen2yuan(fen) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var flag = /[￥¥]/.test("".concat(fen));
  var money = (parseInt(fen, 10) / 100).toFixed(len) - 0;
  return flag ? "\xA5".concat(money) : money;
}; // 元转分

var yuan2fen = function yuan2fen(yuan) {
  var flag = /[￥¥]/.test("".concat(yuan));
  var money = (+yuan * 100).toFixed(0) - 0;
  return flag ? "\xA5".concat(money) : money;
}; // 分转万

var fen2wan = function fen2wan(fen) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var flag = /[￥¥]/.test("".concat(fen));
  var money = (Math.floor(parseInt(fen, 10) / 1000000 * 10) / 10).toFixed(len) - 0;
  return flag ? "\xA5".concat(money) : money;
};
function getYuanStr(yuan, noText) {
  var text = noText ? '' : ' 元';
  if (!yuan) return "0.00".concat(text);
  var yuanStr = "".concat(yuan);
  var yuans = yuanStr.split('.');
  var yuanPart = yuans[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return "".concat(yuanPart, ".").concat(yuans[1] ? "".concat(yuans[1], "00").substring(0, 2) : '00').concat(text);
}
function valuesToFileds(values) {
  if (!values || !isObj(values)) return values;
  var backData = {};
  Object.keys(values).forEach(function (ele) {
    backData[ele] = {
      value: values[ele]
    };
  });
  return backData;
} // 选取 object的部分属性

var pickSomeAttr = function pickSomeAttr(obj) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (!obj) return obj;
  var backObj = {};
  var deepCopyObj = assignObj(obj);
  attrs.forEach(function (ele, i) {
    backObj[ele] = deepCopyObj[ele];
  });
  return backObj;
}; // eg: mapObj==> {id: 'value', list='children', name: 'title'} 映射一些属性值 **

var mapSomeAttr = function mapSomeAttr(obj) {
  var mapObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extendObjFn = arguments.length > 2 ? arguments[2] : undefined;
  if (!obj) return obj;
  var backObj = null;
  var keys = Object.keys(mapObj);

  var mapObjToNew = function mapObjToNew(data, leval) {
    var backData = {};

    if (isFn(extendObjFn)) {
      backData = extendObjFn(leval, data) || {};
    }

    for (var i = 0; i < keys.length; i++) {
      if (!(keys[i] in data)) continue;
      var key = keys[i];
      var mapKey = mapObj[key];
      var value = data[key];

      if (isArr(value) && key !== 'all_connect') {
        backData[mapKey] = value.map(function (ele) {
          return mapObjToNew(ele, leval + 1);
        });
      } else {
        backData[mapKey] = value;
      }
    }

    return backData;
  };

  if (isArr(obj)) {
    backObj = obj.map(function (ele) {
      return mapObjToNew(ele, 1);
    });
  } else {
    backObj = mapObjToNew(obj);
  }

  return backObj;
}; // eg: mapObj==> {id: 'value', list='children', name: 'title'} 映射一些属性值 **

var mapSomeAttrWithParents = function mapSomeAttrWithParents(obj) {
  var mapObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var pMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var key = arguments.length > 3 ? arguments[3] : undefined;
  if (!obj) return obj;
  var backObj = null;
  var keyMap = {};
  var keys = Object.keys(mapObj);

  var mapObjToNew = function mapObjToNew(data, leval, pdata) {
    var backData = {};
    var pickObj = pickSomeAttr(data, pMap);

    if (pdata) {
      backData.all_connect = [].concat(_toConsumableArray(pdata), [pickObj]);
    } else {
      backData.all_connect = [pickObj];
    }

    keyMap[data[key]] = backData.all_connect;

    for (var i = 0; i < keys.length; i++) {
      if (!(keys[i] in data)) continue;
      var keyValue = keys[i];
      var mapKey = mapObj[keyValue];
      var value = data[keyValue];

      if (isArr(value)) {
        backData[mapKey] = value.map(function (ele) {
          return mapObjToNew(ele, leval + 1, backData.all_connect);
        });
      } else {
        backData[mapKey] = "".concat(value);
      }
    }

    return backData;
  };

  if (isArr(obj)) {
    backObj = obj.map(function (ele) {
      return mapObjToNew(ele, 1);
    });
  } else {
    backObj = mapObjToNew(obj);
  }

  return {
    backData: backObj,
    keyMap: keyMap
  };
};

var pickListSomeAttr = function pickListSomeAttr(list) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (isArr(list)) {
    return list.map(function (ele) {
      return pickSomeAttr(ele, attrs);
    });
  }
};

var pickAttr = function pickAttr(obj) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var backData = null;

  if (isArr(obj)) {
    backData = pickListSomeAttr(obj, attrs);
  } else {
    backData = pickSomeAttr(obj, attrs);
  }

  return backData;
};
var getSearchFormProperties = function getSearchFormProperties(columns) {
  var extendFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var filter = arguments.length > 2 ? arguments[2] : undefined;
  var columnsFields = columns.filter(function (ele) {
    if (filter) {
      return filter(ele.fieldProps, ele);
    }

    return ele.fieldProps;
  });
  var jsonSchemaProperties = {};
  columnsFields.forEach(function (ele) {
    var data = pickSomeAttr(ele, ['title', 'dataIndex', 'fieldProps']);

    var filed = _objectSpread2({
      dataIndex: data.dataIndex,
      name: data.dataIndex,
      title: data.title
    }, data.fieldProps);

    jsonSchemaProperties[filed.dataIndex] = filed;
  });
  return _objectSpread2(_objectSpread2({}, jsonSchemaProperties), extendFields);
};
var validateFormListFields = function validateFormListFields(formMaps) {
  if (!isPlainObj(formMaps)) {
    return null;
  }

  var error = false;
  var values = [];
  Object.keys(formMaps).forEach(function (ele) {
    formMaps[ele].validateFields(function (hasErr, value) {
      if (hasErr) {
        error = true;
        values.push(_objectSpread2(_objectSpread2({}, value), {}, {
          error: error
        }));
      } else {
        values.push(_objectSpread2({}, value));
      }
    });
  });
  return {
    error: error,
    values: values
  };
};
var extendXprops = function extendXprops(columns, name, extendData) {
  var objMap = mapToObject(columns, 'dataIndex');

  if (objMap[name]) {
    var data = objMap[name].fieldProps['x-props'];
    objMap[name].fieldProps['x-props'] = _objectSpread2(_objectSpread2({}, data), extendData);
  }
};
var doneMaxDo = function doneMaxDo(num, callback) {
  var time = 0;
  var values = [];
  return function (value) {
    time += 1;
    values.push(value);

    if (time === num && callback) {
      callback(values);
    }
  };
};
var stringifySome = function stringifySome(data, keys) {
  if (!isObj(data)) return;

  if (isArr(keys)) {
    keys.forEach(function (ele) {
      if (isObj(data[ele])) {
        data[ele] = JSON.stringify(data[ele]);
      }
    });
  } else {
    Object.keys(data).forEach(function (ele) {
      var value = data[ele];

      if (isObj(value)) {
        data[ele] = JSON.stringify(value);
      }
    });
  } // eslint-disable-next-line consistent-return


  return data;
};
var dateSplit = function dateSplit(data, noTime) {
  if (!data) return data;

  var _data$split = data.split(' '),
      _data$split2 = _slicedToArray(_data$split, 2),
      da = _data$split2[0],
      time = _data$split2[1];

  return noTime ? /*#__PURE__*/React.createElement("span", null, da) : /*#__PURE__*/React.createElement("span", null, da, /*#__PURE__*/React.createElement("br", null), time);
};
var strSplit = function strSplit(str, number) {
  if (typeof str !== 'string') return str;
  var length = str.length;

  if (length > number) {
    var formatedStr = "".concat(str.slice(0, number), "...");
    return formatedStr;
  }

  return str;
};
var isImage = function isImage(value) {
  var exp = /\w(\.gif|\.jpeg|\.png|\.jpg|\.bmp)/i;
  return exp.test(value);
};
var listPlusByKey = function listPlusByKey(key) {
  var backList = [];
  return function () {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var backListMap = backList.length ? mapToObject(backList, key) : {};

    for (var i = 0; i < list.length; i++) {
      var data = list[i];

      if (!backListMap[data[key]]) {
        backList.push(data);
      }
    }

    return backList;
  };
};
/**
 * 对象的值进行包装: { name: 'xx'} to { name: { value: 'xx'}}
 * 主要用于把普通对象初始化成 formFields 对象
 * @param {*} obj
 * @param {*} key
 */

var wrapperByKey = function wrapperByKey(obj) {
  var keyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'value';
  var result = {};
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    result[key] = _defineProperty({}, keyName, obj[key]);
  });
  return result;
};
var isUNaN = function isUNaN(value) {
  return "".concat(trim(value)) === '' || isNaN(value);
};

function convertBase64ToBlob(base64) {
  var base64Arr = base64.split(',');

  var _base64Arr = _slicedToArray(base64Arr, 2),
      content = _base64Arr[0],
      contentTwo = _base64Arr[1];

  var type = '';
  var base64String = '';

  if (contentTwo) {
    // 如果是图片base64，去掉头信息
    base64String = contentTwo;
    type = base64Arr[0].substring(base64Arr[0].indexOf(':') + 1, base64Arr[0].indexOf(';'));
  } else {
    base64String = content;
    type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  } // 将base64解码


  var bytes = atob(base64String); // var bytes = base64;

  var uInt8Array = new Uint8Array(bytes.length); // 将base64转换为ascii码

  for (var i = 0; i < bytes.length; i++) {
    uInt8Array[i] = bytes.charCodeAt(i);
  } // 生成Blob对象（文件对象）


  return new Blob([uInt8Array], {
    type: type
  });
}

var downLoadFile = function downLoadFile(base64, fileName) {
  var blob = convertBase64ToBlob(base64);
  var objectUrl = URL.createObjectURL(blob);
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = objectUrl;
  a.download = fileName || '导入excel';
  a.click();
  document.body.removeChild(a);
};
var downLoadFileByBlob = function downLoadFileByBlob(blob, fileName) {
  var objectUrl = URL.createObjectURL(blob);
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = objectUrl;
  a.download = fileName || '导入excel';
  a.click();
  document.body.removeChild(a);
};
/**
 * 对象的值使用函进行包装: { name: 'xx'} to { name: Form.createFormField({ value: 'xx'})}
 * 主要用于对 formFields 封装
 * @param {*} obj
 * @param {*} func
 */

var wrapperByFunc = function wrapperByFunc(obj, func) {
  var result = {};
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    result[key] = func(obj[key]);
  });
  return result;
};
/**
 * formFields 转化为普通对象: { name: { value: 'xx'}} to { name: 'xx'}
 * 主要用于把普通对象初始化成 formFields 对象
 * @param {*} obj
 * @param {*} key
 */

var fieldsToData = function fieldsToData(fields) {
  var result = {};
  var keys = Object.keys(fields);
  keys.forEach(function (key) {
    result[key] = fields[key].value;
  });
  return result;
}; // 分转万

var fenToWan = function fenToWan(fen) {
  var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var afterfix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (!fen) return fen;
  var result = (fen / 1000000).toFixed(decimal);
  return "".concat(result).concat(afterfix);
}; // 获取文件的后缀名

var getFileTypeByName = function getFileTypeByName(name) {
  var index = name.lastIndexOf('.');
  return name.slice(index);
};
var StoriesDiv = function StoriesDiv(_ref) {
  var child = _ref.child;
      _ref.prop;
  return /*#__PURE__*/React.createElement("div", null, child);
};

export { FormatWan, MinuteToyuan, StoriesDiv, YuanAndMinuteReverse, arrayDelOne, arrayFilterSame, arrayHasSame, assignObj, beforeFieldsToRedux, beforeTrim, dateSplit, doneMaxDo, downLoadFile, downLoadFileByBlob, extendXprops, fen2wan, fen2yuan, fenToWan, fieldsToData, fieldsToRedux, fileListTourlMap, filterEmptyAttr, filterRender, findDataByKey, fixedZero, getFileTypeByName, getPageQuery, getPlainNode, getQueryPath, getRoutes, getSearchFormProperties, getYuanStr, isAntdPro, isArr, isBool, isEmpty, isEmptyArr, isFn, isImage, isNum, isObj, isPlainObj, isRegExp, isStr, isUNaN, isUrl, listPlusByKey, mapSomeAttr, mapSomeAttrWithParents, mapToObject, minuteToyuanStr, pickAttr, pickSomeAttr, simplifyFileName, simplifyUrlMapToFileList, strSplit, stringifySome, transformServerDataForDefaultTreeData, trim, trimFormValue, urlMapToFile, urlMapToFileList, validateFormListFields, valuesToFileds, wrapperByFunc, wrapperByKey, yuan2fen };
