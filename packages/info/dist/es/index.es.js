import 'prop-types';
import React, { Fragment, useState } from 'react';
import { isStr, simplifyFileName, trim, isFn } from '@xufeng-li/util';

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

function _extends() {
  _extends = Object.assign || function (target) {
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var isZero = function isZero(val) {
  return "".concat(val) === '0';
};

var SquareMeterInfo = function SquareMeterInfo(props) {
  var info = props.info;
  return /*#__PURE__*/React.createElement("span", null, info || '---', "\xA0", info && '㎡');
};
var defaultKayMap = {
  bedroomNum: 'bedroomNum',
  livingRoomNum: 'livingRoomNum',
  kitchenNum: 'kitchenNum',
  bathroomNum: 'bathroomNum',
  balconyNum: 'balconyNum'
};
var HouseType = function HouseType(props) {
  var data = props.data,
      _props$map = props.map,
      map = _props$map === void 0 ? {} : _props$map;

  var keyMap = _objectSpread2(_objectSpread2({}, defaultKayMap), map);

  var bedroom = data[keyMap.bedroomNum] || isZero(data[keyMap.bedroomNum]) ? data[keyMap.bedroomNum] : '--';
  var livingRoom = data[keyMap.livingRoomNum] || isZero(data[keyMap.livingRoomNum]) ? data[keyMap.livingRoomNum] : '--';
  var kitchen = data[keyMap.kitchenNum] || isZero(data[keyMap.kitchenNum]) ? data[keyMap.kitchenNum] : '--';
  var bathroom = data[keyMap.bathroomNum] || isZero(data[keyMap.bathroomNum]) ? data[keyMap.bathroomNum] : '--';
  var balconyNum = data[keyMap.balconyNum] || isZero(data[keyMap.balconyNum]) ? data[keyMap.balconyNum] : '--';
  return /*#__PURE__*/React.createElement("span", null, "".concat(bedroom, "\u5BA4").concat(livingRoom, "\u5385").concat(kitchen, "\u53A8").concat(bathroom, "\u536B").concat(balconyNum, "\u9633\u53F0"));
};
var defaultAreaKayMap = {
  provinceName: 'provinceName',
  cityName: 'cityName',
  districtName: 'districtName'
};
var defaultAreaKayMapTwo = {
  provinceName: 'province',
  cityName: 'city',
  districtName: 'district'
};
var AreaInfo = function AreaInfo(props) {
  var data = props.data,
      _props$map2 = props.map,
      map = _props$map2 === void 0 ? {} : _props$map2,
      address = props.address,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'keyNoName' : _props$mode;

  var keyMap = _objectSpread2(_objectSpread2({}, defaultAreaKayMap), map);

  if (mode === 'keyNoName') {
    keyMap = _objectSpread2(_objectSpread2({}, defaultAreaKayMapTwo), map);
  }

  var province = data[keyMap.provinceName] ? data[keyMap.provinceName] : '--';
  var city = data[keyMap.cityName] ? data[keyMap.cityName] : '--';
  var district = data[keyMap.districtName] ? data[keyMap.districtName] : ''; // 区可能没有

  return /*#__PURE__*/React.createElement("span", null, "".concat(province).concat(city).concat(district), "\xA0\xA0", address || null);
};
var UpLoadInfo = function UpLoadInfo(props) {
  var noHref = props.noHref,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  var data = props.data;
  if (!data || !data.length) return null;
  if (typeof data === 'string') data = [data];
  return /*#__PURE__*/React.createElement(Fragment, null, data.map(function (ele, i) {
    var extendStyle = {};

    if (i) {
      extendStyle.marginLeft = '15px';
    }

    extendStyle = _objectSpread2(_objectSpread2({}, extendStyle), style);

    if (noHref) {
      extendStyle.target = '_blank';
    }

    return /*#__PURE__*/React.createElement("a", {
      href: noHref ? 'javascript:void(0);' : ele,
      key: -i,
      rel: "noopener noreferrer"
    }, /*#__PURE__*/React.createElement("img", {
      src: ele,
      alt: "pic",
      width: "86px",
      style: _objectSpread2({}, extendStyle)
    }));
  }));
};
var VideoList = function VideoList(props) {
  var _props$style2 = props.style,
      style = _props$style2 === void 0 ? {} : _props$style2;
  var list = props.list;
  if (!list || !list.length) return null;
  if (typeof list === 'string') list = [list];
  return /*#__PURE__*/React.createElement(Fragment, null, list.map(function (ele, i) {
    var extendStyle = {
      width: 160,
      height: 120,
      style: {}
    };

    if (i) {
      extendStyle.style.marginLeft = '15px';
    }

    extendStyle = _objectSpread2(_objectSpread2({}, extendStyle), style);
    return /*#__PURE__*/React.createElement("video", {
      key: ele,
      style: _objectSpread2({
        display: 'inline-block'
      }, extendStyle),
      src: ele,
      controls: "controls"
    });
  }));
};
var MainPic = function MainPic(props) {
  var _props$style3 = props.style,
      style = _props$style3 === void 0 ? {} : _props$style3,
      url = props.url,
      isPrivate = props.isPrivate;
  var _style$width = style.width,
      width = _style$width === void 0 ? 100 : _style$width,
      _style$height = style.height,
      height = _style$height === void 0 ? 86 : _style$height;
  var w = "".concat(width).replace(/px/, '');
  var h = "".concat(height).replace(/px/, '');

  if (url && isPrivate) {
    return /*#__PURE__*/React.createElement("a", {
      href: url,
      rel: "noopener noreferrer",
      target: "_blank"
    }, /*#__PURE__*/React.createElement("img", {
      src: "".concat(url),
      alt: "pic",
      height: "100px",
      width: "86px",
      style: _objectSpread2({}, style)
    }));
  }

  if (url) {
    return /*#__PURE__*/React.createElement("a", {
      href: url,
      rel: "noopener noreferrer",
      target: "_blank"
    }, /*#__PURE__*/React.createElement("img", {
      src: "".concat(url, "?x-oss-process=image/resize,m_fixed,h_").concat(h, ",w_").concat(w),
      alt: "pic",
      height: "100px",
      width: "86px",
      style: _objectSpread2({}, style)
    }));
  }

  return /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0);",
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://asman-img.oss-cn-hangzhou.aliyuncs.com/noPic_0e7bffac7958f603a8b37fe3cda07499.png",
    alt: "pic",
    height: "100px",
    width: "86px",
    style: _objectSpread2({}, style)
  }));
};
var UploadPreview = function UploadPreview(props) {
  var value = props.value,
      height = props.height; // eslint-disable-next-line prefer-const

  var _props$list = props.list,
      list = _props$list === void 0 ? [] : _props$list,
      _props$params = props.params,
      params = _props$params === void 0 ? {} : _props$params,
      _props$style4 = props.style,
      style = _props$style4 === void 0 ? {} : _props$style4,
      _props$innerStyle = props.innerStyle,
      innerStyle = _props$innerStyle === void 0 ? {} : _props$innerStyle,
      rest = _objectWithoutProperties(props, ["list", "params", "style", "innerStyle"]);

  if (!list || !list.length) {
    list = value;
  }

  if (!list) return null;

  var showImagePreview = function showImagePreview() {
    // eslint-disable-next-line no-underscore-dangle
    window.g_app._store.dispatch({
      type: 'global/showImagePreviewVisiable',
      payload: {
        list: list,
        params: params
      }
    });
  };

  innerStyle = height == null ? _objectSpread2({}, innerStyle) : _objectSpread2(_objectSpread2({}, innerStyle), {}, {
    height: height
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: _objectSpread2({}, style),
    className: "poi tc",
    onClick: function onClick() {
      showImagePreview();
    }
  }), params.type === 'video' ? /*#__PURE__*/React.createElement(VideoList, {
    list: list[0],
    style: _objectSpread2({}, innerStyle)
  }) : /*#__PURE__*/React.createElement(UpLoadInfo, {
    style: _objectSpread2({}, innerStyle),
    noHref: true,
    data: list[0]
  }), /*#__PURE__*/React.createElement("div", {
    className: "bc tc"
  }, "\u5171", list.length, params.type === 'video' ? '个视频' : '张图片'));
};
var UrlLink = function UrlLink(props) {
  var list = props.list;
  if (!list) return;

  if (isStr(list)) {
    list = [list];
  } // eslint-disable-next-line consistent-return


  return list.map(function (ele) {
    var url = simplifyFileName(ele);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: ele,
      rel: "noopener noreferrer",
      target: "_blank"
    }, url));
  });
};
var BlankLink = function BlankLink(props) {
  var href = props.href,
      title = props.title;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    rel: "noopener noreferrer",
    target: "_blank"
  }, title || href);
};
var TitleInfo = function TitleInfo(props) {
  var len = props.len,
      info = props.info,
      rest = _objectWithoutProperties(props, ["len", "info"]);

  var tit = info;

  if (info.length && len && info.length >= len) {
    tit = "".concat(tit.substring(0, len), "...");
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    title: info
  }), tit);
};
var BuleWrapper = function BuleWrapper(props) {
  var info = props.info,
      text = props.text,
      _props$color = props.color,
      color = _props$color === void 0 ? '#0066FF' : _props$color;
  if (!info) return null;
  return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: color
    }
  }, info), text);
};
var Bule = function Bule(props) {
  var info = props.info,
      _props$color2 = props.color,
      color = _props$color2 === void 0 ? '#0066FF' : _props$color2;
  if (!info) return null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: color
    }
  }, info);
};
var Red = function Red(props) {
  var info = props.info,
      _props$color3 = props.color,
      color = _props$color3 === void 0 ? '#FF0000' : _props$color3;
  if (!info) return null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: color
    }
  }, info);
};
var getColorWrapper = function getColorWrapper(props) {
  var info = props.info;
  return info ? /*#__PURE__*/React.createElement(BuleWrapper, props) : null;
};
var ShowMoreInfo = function ShowMoreInfo(props) {
  var info = props.info,
      len = props.len;
  var initValue = '';
  var needSubstring = false;

  if (info && info.length > len) {
    initValue = "".concat(info.substring(0, len), "...");
    needSubstring = true;
  } else {
    initValue = info;
  }

  var _useState = useState(initValue),
      _useState2 = _slicedToArray(_useState, 2),
      showInfo = _useState2[0],
      setShowInfo = _useState2[1];

  var isShowAll = function isShowAll() {
    return showInfo === info;
  };

  var showMore = function showMore() {
    setShowInfo(isShowAll() ? initValue : info);
  };

  return /*#__PURE__*/React.createElement("span", null, showInfo, " ", needSubstring ? /*#__PURE__*/React.createElement("span", {
    className: "likeA",
    onClick: function onClick() {
      return showMore();
    }
  }, isShowAll() ? '收起' : '更多') : null, " ");
};
/**
 * xx幢xxx单元xxxx
 * @param {*} props
 */

var HouseDesc = function HouseDesc(props) {
  var buildingNo = props.buildingNo,
      unitNo = props.unitNo,
      roomNo = props.roomNo;
  return /*#__PURE__*/React.createElement("span", null, "".concat(buildingNo || '--', "\u5E62").concat(unitNo || '--', "\u5355\u5143").concat(roomNo || '--', "\u5BA4"));
};
var SomeRed = function SomeRed(props) {
  var info = props.info,
      keyWord = props.keyWord;
  if (!info || !keyWord) return info;
  var trimkey = trim(keyWord);
  var subIndex = info.indexOf(trimkey);
  if (subIndex === -1) return info;
  var start = info.substring(0, subIndex);
  var end = info.substring(subIndex + trimkey.length);
  return /*#__PURE__*/React.createElement("span", null, start, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'red'
    }
  }, keyWord), end);
};
var BuildingArea = function BuildingArea(props) {
  var data = props.data;

  var _ref = data || {},
      buildingName = _ref.buildingName,
      houseCode = _ref.houseCode,
      buildingNo = _ref.buildingNo,
      unitNo = _ref.unitNo,
      roomNo = _ref.roomNo;

  return /*#__PURE__*/React.createElement("span", null, "".concat(buildingName || '--').concat(houseCode ? "".concat(houseCode, "\u6237\u578B") : ''), " ", /*#__PURE__*/React.createElement("br", null), " ", buildingNo ? "".concat(buildingNo || '--', "\u680B").concat(unitNo || '--', "\u5355\u5143").concat(roomNo || '--', "\u5BA4") : '');
};
var LRInfo = function LRInfo(props) {
  var title = props.title,
      info = props.info,
      width = props.width,
      _props$hasColon = props.hasColon,
      hasColon = _props$hasColon === void 0 ? true : _props$hasColon,
      onClick = props.onClick,
      len = props.len;
  var _props$titleStyle = props.titleStyle,
      titleStyle = _props$titleStyle === void 0 ? {} : _props$titleStyle;

  if (len) {
    titleStyle = _objectSpread2(_objectSpread2({}, titleStyle), {}, {
      width: "".concat(30 + 12 * len, "px"),
      textAlign: 'right'
    });
  }

  var titleProps = {
    style: width ? _objectSpread2(_objectSpread2({}, titleStyle), {}, {
      width: width,
      textAlign: 'right'
    }) : _objectSpread2({}, titleStyle)
  };
  var infoProps = {};

  if (isFn(onClick)) {
    infoProps = {
      onClick: onClick
    };
  }

  if (!title) {
    return /*#__PURE__*/React.createElement("div", infoProps, info);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "df"
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: "g0"
  }, titleProps), title || ' -- ', "\xA0", hasColon ? ':' : null, " \xA0"), /*#__PURE__*/React.createElement("div", _extends({
    className: "df flex1"
  }, infoProps), info !== 0 ? info || '---' : info));
};

export default LRInfo;
export { AreaInfo, BlankLink, BuildingArea, Bule, BuleWrapper, HouseDesc, HouseType, LRInfo, MainPic, Red, ShowMoreInfo, SomeRed, SquareMeterInfo, TitleInfo, UpLoadInfo, UploadPreview, UrlLink, VideoList, getColorWrapper };
