webpackHotUpdate(1,{

/***/ 498:
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

	var _dec, _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(379);

	var _reactRedux = __webpack_require__(112);

	var _reactRouterRedux = __webpack_require__(138);

	var _yard = __webpack_require__(192);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SelectableList = (0, _List.MakeSelectable)(_List.List);

	var navItems = [{
		text: 'Home',
		value: '/'
	}, {
		text: 'Create Content',
		value: '/example/create-content'
	}, {
		text: 'Bar Chart',
		value: '/example/bar-chart'
	}, {
		text: 'List',
		value: '/example/list'
	}, {
		text: 'Tabs',
		value: '/example/tabs'
	}, {
		text: 'Todo List',
		value: '/example/todo-list'
	}, {
		text: 'Charts',
		children: [{
			text: 'Bar Chart',
			value: '/example/x'
		}, {
			text: 'Line Chart',
			value: '/example/x'
		}, {
			text: 'Pie Chart',
			value: '/example/x'
		}, {
			text: 'Area Chart',
			value: '/example/x'
		}]
	}];

	var Nav = (_dec = (0, _reactRedux.connect)(function (state) {
		return {
			route: state.route
		};
	}, {
		push: _reactRouterRedux.push, closeNav: _yard.closeNav
	}), _dec(_class = function (_React$Component) {
		(0, _inherits3.default)(Nav, _React$Component);

		function Nav() {
			var _ref;

			var _temp, _this, _ret;

			(0, _classCallCheck3.default)(this, Nav);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.handleRequestChangeList = function (event) {
				var value = arguments.length <= 1 || arguments[1] === undefined ? '/' : arguments[1];

				_this.props.push(value);
				_this.props.closeNav();
			}, _this.renderNav = function (navItems) {
				return navItems.map(function (item, index) {
					var _item$text = item.text;
					var text = _item$text === undefined ? '' : _item$text;
					var _item$value = item.value;
					var value = _item$value === undefined ? '' : _item$value;
					var _item$children = item.children;
					var children = _item$children === undefined ? [] : _item$children;

					return children.length ? _react2.default.createElement(_List.ListItem, {
						key: index,
						primaryText: text,
						primaryTogglesNestedList: true,
						nestedItems: _this.renderNav(children)
					}) : _react2.default.createElement(_List.ListItem, {
						key: index,
						primaryText: text,
						value: value
					});
				});
			}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
		}

		(0, _createClass3.default)(Nav, [{
			key: 'render',
			value: function render() {
				var route = this.props.route;

				return _react2.default.createElement(
					SelectableList,
					{
						value: route.location.pathname,
						onChange: this.handleRequestChangeList,
						selectedItemStyle: {
							backgroundColor: 'rgba(0,0,0,0.2)',
							color: 'rgb(255, 64, 129)'
						}
					},
					this.renderNav(navItems)
				);
			}
		}]);
		return Nav;
	}(_react2.default.Component)) || _class);
	exports.default = Nav;

/***/ }

})