'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var XFStoryBookDemoTask = function XFStoryBookDemoTask(_ref) {
  var _ref$task = _ref.task,
      id = _ref$task.id,
      title = _ref$task.title,
      state = _ref$task.state,
      onArchiveTask = _ref.onArchiveTask,
      onPinTask = _ref.onPinTask;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "list-item ".concat(state)
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    className: "checkbox"
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    type: "checkbox",
    defaultChecked: state === 'TASK_ARCHIVED',
    disabled: true,
    name: "checked"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "checkbox-custom",
    onClick: function onClick() {
      return onArchiveTask(id);
    }
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "title"
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    type: "text",
    value: title,
    readOnly: true,
    placeholder: "Input title"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "actions",
    onClick: function onClick(event) {
      return event.stopPropagation();
    }
  }, state !== 'TASK_ARCHIVED' && /*#__PURE__*/React__default['default'].createElement("a", {
    href: '/#',
    onClick: function onClick() {
      return onPinTask(id);
    }
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "icon-star"
  }))));
};
XFStoryBookDemoTask.propTypes = {
  /** Composition of the task */
  task: PropTypes__default['default'].shape({
    /** Id of the task */
    id: PropTypes__default['default'].string.isRequired,

    /** Title of the task */
    title: PropTypes__default['default'].string.isRequired,

    /** Current state of the task */
    state: PropTypes__default['default'].string.isRequired
  }),

  /** Event to change the task to archived */
  onArchiveTask: PropTypes__default['default'].func,

  /** Event to change the task to pinned */
  onPinTask: PropTypes__default['default'].func
};

exports.XFStoryBookDemoTask = XFStoryBookDemoTask;
