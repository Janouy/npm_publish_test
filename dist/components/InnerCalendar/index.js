"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _const = require("../../utils/const");
var _functions = require("../../utils/functions");
require("./style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InnerCalendar = _ref => {
  let {
    choosenYear,
    choosenMonth,
    selectedDate,
    setSelectedDate,
    setIsCalendarOpen
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "calendarRow"
  }, _const.weekDays.map((day, dayIndex) => /*#__PURE__*/_react.default.createElement("div", {
    key: dayIndex
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "day"
  }, day), (0, _functions.displayMonth)(choosenYear.toString(), choosenMonth.toString()).map((date, index) => date.getDay() === dayIndex ? /*#__PURE__*/_react.default.createElement("div", {
    className: date.getDate() === _const.today.getDate() && _const.today.getMonth() === choosenMonth ? "today" : date.getMonth() !== choosenMonth ? "otherMonthDay" : date.getDate() === new Date(selectedDate).getDate() ? "selectedDay" : "notSelectedDay",
    key: index
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "date",
    onClick: () => {
      setSelectedDate(date.toLocaleDateString("en"));
      setIsCalendarOpen(false);
    }
  }, date.getDate())) : null))));
};
var _default = InnerCalendar;
exports.default = _default;