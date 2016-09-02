webpackHotUpdate(1,{

/***/ 1225:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(142);

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

	var _todo = __webpack_require__(314);

	var todoActions = _interopRequireWildcard(_todo);

	__webpack_require__(1227);

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
			key: 'render',
			value: function render() {
				var _props = this.props;
				var todo = _props.fields.todo;
				var todoList = _props.todoList;
				var toggleTodo = _props.toggleTodo;
				var deleteTodo = _props.deleteTodo;


				return _react2.default.createElement(
					_reactFade2.default,
					{ duration: 0.3 },
					_react2.default.createElement(
						_Paper2.default,
						{ style: styles.root, zDepth: 1 },
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

/***/ 1226:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(77)();
	// imports


	// module
	exports.push([module.id, ".example-enter {\n  opacity: 0.01;\n}\n.example-enter.example-enter-active {\n  opacity: 1;\n  transition: opacity 500ms ease-in;\n}\n.example-leave {\n  opacity: 1;\n}\n.example-leave.example-leave-active {\n  opacity: 0.01;\n  transition: opacity 300ms ease-in;\n}\n.example-appear {\n  opacity: 0.01;\n}\n.example-appear.example-appear-active {\n  opacity: 1;\n  transition: opacity 0.5s ease-in;\n}\n", ""]);

	// exports


/***/ },

/***/ 1227:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1226);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(140)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(1226, function() {
				var newContent = __webpack_require__(1226);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

})