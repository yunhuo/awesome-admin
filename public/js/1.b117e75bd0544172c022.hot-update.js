webpackHotUpdate(1,{

/***/ 1225:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _validator = __webpack_require__(307);

	var _validator2 = _interopRequireDefault(_validator);

	var _alarm = __webpack_require__(190);

	var _Checkbox = __webpack_require__(254);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _FloatingActionButton = __webpack_require__(376);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _IconButton = __webpack_require__(108);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _IconMenu = __webpack_require__(255);

	var _IconMenu2 = _interopRequireDefault(_IconMenu);

	var _MenuItem = __webpack_require__(257);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _Paper = __webpack_require__(27);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _TextField = __webpack_require__(259);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _Toolbar = __webpack_require__(132);

	var _moreVert = __webpack_require__(270);

	var _moreVert2 = _interopRequireDefault(_moreVert);

	var _add = __webpack_require__(269);

	var _add2 = _interopRequireDefault(_add);

	var _done = __webpack_require__(947);

	var _done2 = _interopRequireDefault(_done);

	var _reactFade = __webpack_require__(423);

	var _reactFade2 = _interopRequireDefault(_reactFade);

	var _reduxForm = __webpack_require__(187);

	var _createContent = __webpack_require__(1227);

	var _createContent2 = _interopRequireDefault(_createContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CreateContent = function (_React$Component) {
		(0, _inherits3.default)(CreateContent, _React$Component);

		function CreateContent() {
			(0, _classCallCheck3.default)(this, CreateContent);
			return (0, _possibleConstructorReturn3.default)(this, (CreateContent.__proto__ || (0, _getPrototypeOf2.default)(CreateContent)).apply(this, arguments));
		}

		(0, _createClass3.default)(CreateContent, [{
			key: 'render',
			value: function render() {

				return _react2.default.createElement(
					_reactFade2.default,
					{ duration: 0.3 },
					_react2.default.createElement(
						_Paper2.default,
						{ className: '' + _createContent2.default, zDepth: 1 },
						_react2.default.createElement(
							_Toolbar.Toolbar,
							{ className: 'toolbar' },
							_react2.default.createElement(_Toolbar.ToolbarTitle, { text: 'CreateContent' }),
							_react2.default.createElement(
								_Toolbar.ToolbarGroup,
								{ float: 'right' },
								_react2.default.createElement(
									_IconMenu2.default,
									{
										anchorOrigin: { horizontal: 'right', vertical: 'top' },
										targetOrigin: { horizontal: 'right', vertical: 'top' },
										style: { marginTop: 4 },
										iconButtonElement: _react2.default.createElement(
											_IconButton2.default,
											null,
											_react2.default.createElement(_moreVert2.default, { color: 'rgba(0, 0, 0, 0.45)' })
										)
									},
									_react2.default.createElement(_MenuItem2.default, { primaryText: 'Refresh' }),
									_react2.default.createElement(_MenuItem2.default, { primaryText: 'Setting' })
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'content' },
							'content'
						)
					)
				);
			}
		}]);
		return CreateContent;
	}(_react2.default.Component);

	exports.default = CreateContent;

/***/ }

})