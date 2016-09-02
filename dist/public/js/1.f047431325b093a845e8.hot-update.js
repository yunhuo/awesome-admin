webpackHotUpdate(1,{

/***/ 582:
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

	__webpack_require__(1322);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _validator = __webpack_require__(219);

	var _validator2 = _interopRequireDefault(_validator);

	var _alarm = __webpack_require__(160);

	var _FloatingActionButton = __webpack_require__(296);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _IconButton = __webpack_require__(111);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _IconMenu = __webpack_require__(194);

	var _IconMenu2 = _interopRequireDefault(_IconMenu);

	var _MenuItem = __webpack_require__(195);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _Paper = __webpack_require__(27);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _TextField = __webpack_require__(196);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _Toolbar = __webpack_require__(122);

	var _moreVert = __webpack_require__(206);

	var _moreVert2 = _interopRequireDefault(_moreVert);

	var _add = __webpack_require__(205);

	var _add2 = _interopRequireDefault(_add);

	var _done = __webpack_require__(472);

	var _done2 = _interopRequireDefault(_done);

	var _reactFade = __webpack_require__(314);

	var _reactFade2 = _interopRequireDefault(_reactFade);

	var _draftJs = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var paperStyle = {
		marginTop: 24,
		paddingBottom: 24
	};

	var CreateContent = function (_React$Component) {
		(0, _inherits3.default)(CreateContent, _React$Component);

		function CreateContent(props) {
			(0, _classCallCheck3.default)(this, CreateContent);

			var _this = (0, _possibleConstructorReturn3.default)(this, (CreateContent.__proto__ || (0, _getPrototypeOf2.default)(CreateContent)).call(this, props));

			_this.state = {
				editorState: createEditorState() };

			/*
	  this.state = {
	    editorState: createEditorState(data), // with content
	  };
	  */

			_this.onChange = function (editorState) {
				_this.setState({ editorState: editorState });
			};
			return _this;
		}

		(0, _createClass3.default)(CreateContent, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.refs.editor.focus();
			}
		}, {
			key: 'render',
			value: function render() {
				var editorState = this.state.editorState;

				return _react2.default.createElement(
					_reactFade2.default,
					{ duration: 0.3 },
					_react2.default.createElement(
						_Paper2.default,
						{ style: paperStyle, zDepth: 1 },
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
							_react2.default.createElement(Editor, {
								ref: 'editor',
								editorState: editorState,
								onChange: this.onChange })
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