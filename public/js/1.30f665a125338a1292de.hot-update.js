webpackHotUpdate(1,{

/***/ 501:
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

	var _dec, _class, _class2, _temp2;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactCustomScrollbars = __webpack_require__(421);

	var _radium = __webpack_require__(274);

	var _radium2 = _interopRequireDefault(_radium);

	var _AppBar = __webpack_require__(818);

	var _AppBar2 = _interopRequireDefault(_AppBar);

	var _IconButton = __webpack_require__(108);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _IconMenu = __webpack_require__(256);

	var _IconMenu2 = _interopRequireDefault(_IconMenu);

	var _MenuItem = __webpack_require__(258);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _Divider = __webpack_require__(823);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Subheader = __webpack_require__(383);

	var _Subheader2 = _interopRequireDefault(_Subheader);

	var _Drawer = __webpack_require__(825);

	var _Drawer2 = _interopRequireDefault(_Drawer);

	var _List = __webpack_require__(378);

	var _moreVert = __webpack_require__(271);

	var _moreVert2 = _interopRequireDefault(_moreVert);

	var _Nav = __webpack_require__(500);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Profile = __webpack_require__(508);

	var _Profile2 = _interopRequireDefault(_Profile);

	var _reactRedux = __webpack_require__(112);

	var _yard = __webpack_require__(193);

	var _auth = __webpack_require__(194);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Main = (_dec = (0, _reactRedux.connect)(function (state) {
		return {
			base: state.base.yard.toJS()
		};
	}, { resize: _yard.resize, toggleNavOpen: _yard.toggleNavOpen, logout: _auth.logout }), _dec(_class = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_React$Component) {
		(0, _inherits3.default)(Main, _React$Component);

		function Main() {
			var _ref;

			var _temp, _this, _ret;

			(0, _classCallCheck3.default)(this, Main);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call.apply(_ref, [this].concat(args))), _this), _this.resize = function () {
				_this.props.resize(document.body.offsetWidth || window.innerWidth);
			}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
		}

		(0, _createClass3.default)(Main, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				window.addEventListener('resize', this.resize);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				window.removeEventListener('resize', this.resize);
			}
		}, {
			key: 'render',
			value: function render() {
				var navStyle = {
					transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1)',
					borderRight: '1px solid #eeeeee',
					backgroundColor: '#fafafa',
					boxShadow: 'none'
				};

				var _props = this.props;
				var base = _props.base;
				var children = _props.children;
				var logout = _props.logout;
				var toggleNavOpen = _props.toggleNavOpen;
				var navOpen = base.navOpen;
				var screenWidth = base.screenWidth;

				var docked = false;

				if (screenWidth > 992) {
					docked = true;
					navStyle.zIndex = 1000;
					navStyle.top = 64;
					navStyle.paddingBottom = 64;
					navStyle.boxShadow = 'none';
				}
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_AppBar2.default, {
						style: styles.appBar,
						titleStyle: styles.appBarTitle,
						iconStyleLeft: styles.appBarLeft,
						title: 'Dashboard',
						showMenuIconButton: !docked,
						onLeftIconButtonTouchTap: toggleNavOpen,
						iconElementRight: _react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(_Profile2.default, null),
							_react2.default.createElement(
								_IconMenu2.default,
								{
									anchorOrigin: { horizontal: 'right', vertical: 'top' },
									targetOrigin: { horizontal: 'right', vertical: 'top' },
									iconButtonElement: _react2.default.createElement(
										_IconButton2.default,
										null,
										_react2.default.createElement(_moreVert2.default, { color: '#00bcd4' })
									),
									menuStyle: styles.menuStyle
								},
								_react2.default.createElement(_MenuItem2.default, { primaryText: '退出', onClick: logout })
							)
						)
					}),
					_react2.default.createElement(
						_Drawer2.default,
						{
							containerStyle: navStyle,
							style: styles.drawerStyle,
							docked: docked,
							open: docked || navOpen,
							onRequestChange: toggleNavOpen
						},
						_react2.default.createElement(
							_reactCustomScrollbars.Scrollbars,
							{
								autoHide: true,
								autoHideTimeout: 1000,
								autoHideDuration: 200
							},
							_react2.default.createElement(
								_Subheader2.default,
								null,
								'Client'
							),
							_react2.default.createElement(_Nav2.default, null),
							_react2.default.createElement(_Divider2.default, null),
							_react2.default.createElement(
								_List.List,
								null,
								_react2.default.createElement(
									_Subheader2.default,
									null,
									'Server'
								),
								_react2.default.createElement(_List.ListItem, { primaryText: 'GitHub', value: 'https://github.com/callemall/material-ui' })
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ style: styles.content },
						children
					)
				);
			}
		}]);
		return Main;
	}(_react2.default.Component), _class2.propTypes = {
		children: _react2.default.PropTypes.object,
		base: _react2.default.PropTypes.object
	}, _temp2)) || _class) || _class);
	exports.default = Main;


	var styles = {
		appBar: {
			position: 'fixed',
			//boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)'
			backgroundColor: "#fafafa",
			borderBottom: '#eeeeee 1px solid',
			color: '#00bcd4',
			boxShadow: 'none'
		},
		appBarTitle: {
			color: '#00bcd4'
		},
		appBarLeft: {
			color: '#00bcd4'
		},
		drawerStyle: {
			boxShadow: 'none'
		},
		menuStyle: {
			width: 168
		},
		nav: {
			transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1)',
			'@media (min-width: 992px)': {
				zIndex: 1000,
				top: 64,
				paddingBottom: 64,
				boxShadow: 'none'
			}
		},
		content: {
			paddingTop: 64,
			transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1)',
			'@media (min-width: 768px)': {
				paddingLeft: 16,
				paddingRight: 16
			},
			'@media (min-width: 992px)': {
				paddingLeft: 32,
				paddingRight: 32,
				marginLeft: 256
			}
		}
	};

/***/ }

})