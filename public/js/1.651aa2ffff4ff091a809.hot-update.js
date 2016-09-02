webpackHotUpdate(1,{

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(143);

	var _extends3 = _interopRequireDefault(_extends2);

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

	var _alarm = __webpack_require__(191);

	var _Checkbox = __webpack_require__(255);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _FloatingActionButton = __webpack_require__(375);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _IconButton = __webpack_require__(108);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _IconMenu = __webpack_require__(256);

	var _IconMenu2 = _interopRequireDefault(_IconMenu);

	var _MenuItem = __webpack_require__(258);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _Paper = __webpack_require__(27);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _TextField = __webpack_require__(260);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _Toolbar = __webpack_require__(132);

	var _moreVert = __webpack_require__(271);

	var _moreVert2 = _interopRequireDefault(_moreVert);

	var _add = __webpack_require__(270);

	var _add2 = _interopRequireDefault(_add);

	var _done = __webpack_require__(951);

	var _done2 = _interopRequireDefault(_done);

	var _reactFade = __webpack_require__(1229);

	var _reactFade2 = _interopRequireDefault(_reactFade);

	var _reduxForm = __webpack_require__(188);

	var _todo = __webpack_require__(314);

	var todoActions = _interopRequireWildcard(_todo);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = {
		root: {
			marginTop: 24,
			paddingBottom: 24

		},
		toolbar: {
			backgroundColor: '#fff',
			borderBottom: '1px solid rgb(224, 224, 224)'
		},
		ul: {
			padding: '12px 24px',
			margin: 0
		},
		li: {
			position: 'relative',
			padding: '12px 48px 12px 0'
		}
	};

	var TodoList = function (_React$Component) {
		(0, _inherits3.default)(TodoList, _React$Component);

		function TodoList() {
			var _ref;

			var _temp, _this, _ret;

			(0, _classCallCheck3.default)(this, TodoList);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TodoList.__proto__ || (0, _getPrototypeOf2.default)(TodoList)).call.apply(_ref, [this].concat(args))), _this), _this.submit = function (values) {
				var _values$todo = values.todo;
				var todo = _values$todo === undefined ? '' : _values$todo;

				var t = _validator2.default.isNull(todo) ? '请输入代办事项' : '';

				if (t) return (0, _alarm.alert)(t);
				_this.props.addTodo(todo);
			}, _this.addTodo = function (e) {
				if (e.keyCode === 13) {
					_this.props.handleSubmit(_this.submit)(e);
					_this.props.resetForm();
				}
			}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
		}

		(0, _createClass3.default)(TodoList, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var elem = this.getDOMNode();
				// Set the opacity of the element to 0
				elem.style.opacity = 0;
				console.log(elem.style.opacity);
				window.requestAnimationFrame(function () {
					// Now set a transition on the opacity
					elem.style.transition = "opacity 250ms";
					// and set the opacity to 1
					elem.style.opacity = 1;
					console.log(elem.style.opacity);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props;
				var todo = _props.fields.todo;
				var todoList = _props.todoList;
				var toggleTodo = _props.toggleTodo;
				var deleteTodo = _props.deleteTodo;


				return _react2.default.createElement(
					_reactFade2.default,
					null,
					_react2.default.createElement(
						_Paper2.default,
						{ key: 1, style: styles.root, zDepth: 1 },
						_react2.default.createElement(
							_Toolbar.Toolbar,
							{ style: styles.toolbar },
							_react2.default.createElement(_Toolbar.ToolbarTitle, { text: 'Todo List' }),
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
							'ul',
							{ className: 'list-unstyled', style: styles.ul },
							todoList.map(function (item, index) {
								return _react2.default.createElement(
									'li',
									{ style: styles.li, key: index },
									_react2.default.createElement(_Checkbox2.default, {
										defaultChecked: item.checked,
										label: item.label,
										labelStyle: { textDecoration: item.checked ? 'line-through' : 'none' },
										onCheck: toggleTodo.bind(null, item.id)
									}),
									_react2.default.createElement(
										_IconMenu2.default,
										{
											anchorOrigin: { horizontal: 'right', vertical: 'top' },
											targetOrigin: { horizontal: 'right', vertical: 'top' },
											style: { position: 'absolute', top: 0, right: 0 },
											iconButtonElement: _react2.default.createElement(
												_IconButton2.default,
												null,
												_react2.default.createElement(_moreVert2.default, { color: 'rgba(0, 0, 0, 0.45)' })
											)
										},
										_react2.default.createElement(_MenuItem2.default, { primaryText: 'Delete', onClick: deleteTodo.bind(null, item.id) })
									)
								);
							}),
							_react2.default.createElement(
								'div',
								{ style: { padding: '0 22px 0 40px' } },
								_react2.default.createElement(_TextField2.default, (0, _extends3.default)({
									refs: 'todo',
									fullWidth: true,
									hintText: 'What needs to be done?',
									onKeyDown: this.addTodo
								}, todo))
							)
						)
					)
				);
			}
		}]);
		return TodoList;
	}(_react2.default.Component);

	exports.default = TodoList = (0, _reduxForm.reduxForm)({
		form: 'todos',
		fields: ['todo']
	}, function (state) {
		return {
			todoList: state.example.todo.toJS()
		};
	}, (0, _extends3.default)({}, todoActions))(TodoList);

/***/ },

/***/ 1227:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (css) {
	  return css.replace(/\n/g, '').replace(/\s\s+/g, ' ');
	};

/***/ },

/***/ 1228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _minifyCssString = __webpack_require__(1227);

	var _minifyCssString2 = _interopRequireDefault(_minifyCssString);

	var _inlineStylePrefixer = __webpack_require__(794);

	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var prefixer = new _inlineStylePrefixer2.default();

	var inCss = '\n  @-webkit-keyframes react-fade-in {\n    0%   { opacity: 0; }\n    50%  { opacity: 0; }\n    100% { opacity: 1; }\n  }\n\n  @-moz-keyframes react-fade-in {\n    0%   { opacity: 0; }\n    50%  { opacity: 0; }\n    100% { opacity: 1; }\n  }\n\n  @-ms-keyframes react-fade-in {\n    0%   { opacity: 0; }\n    50%  { opacity: 0; }\n    100% { opacity: 1; }\n  }\n\n  @keyframes react-fade-in {\n    0%   { opacity: 0; }\n    50%  { opacity: 0; }\n    100% { opacity: 1; }\n  }\n';

	var outCss = '\n  @-webkit-keyframes react-fade-out {\n    0%   { opacity: 1; }\n    50%  { opacity: 1; }\n    100% { opacity: 0; }\n  }\n\n  @-moz-keyframes react-fade-out {\n    0%   { opacity: 1; }\n    50%  { opacity: 1; }\n    100% { opacity: 0; }\n  }\n\n  @-ms-keyframes react-fade-out {\n    0%   { opacity: 1; }\n    50%  { opacity: 1; }\n    100% { opacity: 0; }\n  }\n\n  @keyframes react-fade-out {\n    0%   { opacity: 1; }\n    50%  { opacity: 1; }\n    100% { opacity: 0; }\n  }\n';

	var Fade = function Fade(_ref) {
	  var children = _ref.children;
	  var duration = _ref.duration;
	  var out = _ref.out;

	  var props = _objectWithoutProperties(_ref, ['children', 'duration', 'out']);

	  return _react2.default.createElement(
	    'span',
	    props,
	    _react2.default.createElement('style', { children: (0, _minifyCssString2.default)(out ? outCss : inCss) }),
	    _react2.default.createElement(
	      'div',
	      {
	        style: prefixer.prefix({
	          animationDuration: duration + 's',
	          animationIterationCount: 1,
	          animationName: 'react-fade-' + (out ? 'out' : 'in'),
	          animationTimingFunction: out ? 'ease-out' : 'ease-in'
	        })
	      },
	      children
	    )
	  );
	};

	Fade.propTypes = {
	  children: _react.PropTypes.node.isRequired,
	  duration: _react.PropTypes.number.isRequired,
	  out: _react.PropTypes.bool
	};

	Fade.defaultProps = {
	  duration: 1.5,
	  out: false
	};

	exports.default = Fade;

/***/ },

/***/ 1229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Fade = __webpack_require__(1228);

	var _Fade2 = _interopRequireDefault(_Fade);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Fade2.default;

/***/ }

})