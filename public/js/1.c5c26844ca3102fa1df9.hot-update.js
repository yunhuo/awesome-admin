webpackHotUpdate(1,{

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(28);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(31);

	var _inherits3 = _interopRequireDefault(_inherits2);

	__webpack_require__(1168);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BarChart = __webpack_require__(311);

	var _BarChart2 = _interopRequireDefault(_BarChart);

	var _LineChart = __webpack_require__(503);

	var _LineChart2 = _interopRequireDefault(_LineChart);

	var _Tabs = __webpack_require__(312);

	var _Tabs2 = _interopRequireDefault(_Tabs);

	var _TodoList = __webpack_require__(313);

	var _TodoList2 = _interopRequireDefault(_TodoList);

	var _reactFade = __webpack_require__(1229);

	var _reactFade2 = _interopRequireDefault(_reactFade);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = function (_React$Component) {
		(0, _inherits3.default)(Home, _React$Component);

		function Home() {
			(0, _classCallCheck3.default)(this, Home);
			return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
		}

		(0, _createClass3.default)(Home, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					_reactFade2.default,
					{ duration: 0.3 },
					_react2.default.createElement(
						'div',
						{ id: 'f-demo-home' },
						_react2.default.createElement(
							'div',
							{ className: 'main' },
							_react2.default.createElement(_TodoList2.default, null),
							_react2.default.createElement(_BarChart2.default, null)
						),
						_react2.default.createElement(
							'div',
							{ className: 'left' },
							_react2.default.createElement(_Tabs2.default, null)
						)
					)
				);
			}
		}]);
		return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ }

})