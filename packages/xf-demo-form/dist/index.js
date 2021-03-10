'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('antd/es/input/style');
var _Input = require('antd/es/input');
var React = require('react');
var PropTypes = require('prop-types');
require('antd/es/select/style');
var _Select = require('antd/es/select');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _Input__default = /*#__PURE__*/_interopDefaultLegacy(_Input);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var _Select__default = /*#__PURE__*/_interopDefaultLegacy(_Select);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var CombinInput = /*#__PURE__*/function (_Component) {
  _inherits(CombinInput, _Component);

  var _super = _createSuper(CombinInput);

  function CombinInput(props) {
    var _this;

    _classCallCheck(this, CombinInput);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "inputChange", function (obj) {
      var value = _this.state.value;
      var onChange = _this.props.onChange;

      var extendValue = _objectSpread2(_objectSpread2({}, value), obj);

      console.log("*********************************");
      console.log(obj);

      if (onChange) {
        onChange(extendValue);
      } else {
        _this.setState(extendValue);
      }
    });

    _this.state = {
      value: {
        roomNum: '',
        livingRoomNum: ''
      }
    };
    return _this;
  }

  _createClass(CombinInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          disabled = _this$props.disabled,
          width = _this$props.width,
          _this$props$setting = _this$props.setting,
          setting = _this$props$setting === void 0 ? [] : _this$props$setting;
      var value = this.state.value;
      return /*#__PURE__*/React__default['default'].createElement("div", null, setting.map(function (ele, i) {
        var name = ele.name,
            label = ele.label;
        return /*#__PURE__*/React__default['default'].createElement(React.Fragment, {
          key: -i
        }, /*#__PURE__*/React__default['default'].createElement(_Input__default['default'], {
          placeholder: "\u8BF7\u8F93\u5165",
          value: value[name],
          disabled: !!disabled,
          style: {
            width: width || '40%',
            background: '#F2F2F2'
          },
          onChange: function onChange(e) {
            _this2.inputChange(_defineProperty({}, name, e.target.value));
          }
        }), "\xA0", label, "\xA0\xA0");
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      if ('value' in nextProps) {
        var propsValue = nextProps.value || {};
        return {
          value: _objectSpread2({}, propsValue)
        };
      }

      return null;
    }
  }]);

  return CombinInput;
}(React.Component);
CombinInput.propTypes = {
  /**
   * 输入框是否禁用
   * */
  disabled: PropTypes__default['default'].bool.isRequired,

  /**
   * 输入框的宽度
   * */
  width: PropTypes__default['default'].string.isRequired,

  /**
   * 输入项列表
   * */
  setting: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    /**
     * 输入项名称
     * */
    name: PropTypes__default['default'].string.isRequired,

    /**
     * 输入项标签名
     * */
    label: PropTypes__default['default'].string.isRequired
  })).isRequired,

  /**
   * 输入框的内容发送变化
   * */
  onChange: PropTypes__default['default'].func.isRequired
};
CombinInput.defaultProps = {
  disabled: true,
  width: '50%',
  onChange: function onChange() {},
  setting: [{
    name: "标签",
    label: "标签名"
  }]
};

var Option = _Select__default['default'].Option;

var CombinSelect = /*#__PURE__*/function (_Component) {
  _inherits(CombinSelect, _Component);

  var _super = _createSuper(CombinSelect);

  function CombinSelect(props) {
    var _this;

    _classCallCheck(this, CombinSelect);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "selectChange", function (obj) {
      var value = _this.state.value;
      var onChange = _this.props.onChange;

      var extendValue = _objectSpread2(_objectSpread2({}, value), obj);

      if (onChange) {
        onChange(extendValue);
      } else {
        _this.setState(extendValue);
      }
    });

    _this.state = {
      value: {
        roomNum: '12',
        livingRoomNum: '23'
      }
    };
    return _this;
  }

  _createClass(CombinSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          disabled = _this$props.disabled,
          width = _this$props.width,
          _this$props$setting = _this$props.setting,
          setting = _this$props$setting === void 0 ? [] : _this$props$setting;
      var value = this.state.value;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "HouseTypeSelect"
      }, setting.map(function (ele, i) {
        var name = ele.name,
            label = ele.label,
            options = ele.options;
        return /*#__PURE__*/React__default['default'].createElement("div", {
          key: -i,
          style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }
        }, /*#__PURE__*/React__default['default'].createElement(_Select__default['default'], {
          disabled: disabled,
          value: value[name],
          onChange: function onChange(val) {
            _this2.selectChange(_defineProperty({}, name, val));
          },
          style: {
            width: width || '40%'
          }
        }, options.map(function (op, k) {
          return /*#__PURE__*/React__default['default'].createElement(Option, {
            key: -k,
            value: op.value,
            disabled: false
          }, op.label || op.value);
        })), /*#__PURE__*/React__default['default'].createElement("label", {
          style: {
            marginLeft: '20px'
          }
        }, label));
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      if ('value' in nextProps) {
        var propsValue = nextProps.value || {};
        return {
          value: _objectSpread2({}, propsValue)
        };
      }

      return null;
    }
  }]);

  return CombinSelect;
}(React.Component);
CombinSelect.propTypes = {
  /**
   * 下拉框是否禁用
   * */
  disabled: PropTypes__default['default'].bool.isRequired,

  /**
   * 输入框的宽度
   * */
  width: PropTypes__default['default'].string.isRequired,

  /**
   * 输入项列表
   * */
  setting: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    /**
     * 输入项名称
     * */
    name: PropTypes__default['default'].string.isRequired,

    /**
     * 输入项标签名
     * */
    label: PropTypes__default['default'].string.isRequired,
    options: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
      label: PropTypes__default['default'].string.isRequired,
      value: PropTypes__default['default'].string.isRequired
    })).isRequired
  })).isRequired,

  /**
   * 输入框的内容发送变化
   * */
  onChange: PropTypes__default['default'].func.isRequired
};
CombinSelect.defaultProps = {
  disabled: true,
  width: '50%',
  onChange: function onChange() {},
  setting: [{
    name: "标签",
    label: "标签名"
  }]
};

exports.XFCombinInput = CombinInput;
exports.XFCombinSelect = CombinSelect;
