'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var XFStoryBookDemoTask = function XFStoryBookDemoTask(_ref) {
  var _ref$task = _ref.task,
      id = _ref$task.id,
      title = _ref$task.title,
      state = _ref$task.state,
      onArchiveTask = _ref.onArchiveTask,
      onPinTask = _ref.onPinTask;
  return /*#__PURE__*/React.createElement("div", {
    className: "list-item ".concat(state)
  }, /*#__PURE__*/React.createElement("label", {
    className: "checkbox"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: state === 'TASK_ARCHIVED',
    disabled: true,
    name: "checked"
  }), /*#__PURE__*/React.createElement("span", {
    className: "checkbox-custom",
    onClick: function onClick() {
      return onArchiveTask(id);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: title,
    readOnly: true,
    placeholder: "Input title"
  })), /*#__PURE__*/React.createElement("div", {
    className: "actions",
    onClick: function onClick(event) {
      return event.stopPropagation();
    }
  }, state !== 'TASK_ARCHIVED' && /*#__PURE__*/React.createElement("a", {
    href: '/#',
    onClick: function onClick() {
      return onPinTask(id);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon-star"
  }))));
};
XFStoryBookDemoTask.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,

    /** Title of the task */
    title: PropTypes.string.isRequired,

    /** Current state of the task */
    state: PropTypes.string.isRequired
  }),

  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,

  /** Event to change the task to pinned */
  onPinTask: PropTypes.func
};

exports.XFStoryBookDemoTask = XFStoryBookDemoTask;
