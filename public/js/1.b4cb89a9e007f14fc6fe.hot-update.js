webpackHotUpdate(1,{

/***/ 584:
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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RaisedButton = __webpack_require__(444);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _IconMenu = __webpack_require__(193);

	var _IconMenu2 = _interopRequireDefault(_IconMenu);

	var _MenuItem = __webpack_require__(194);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _FlatButton = __webpack_require__(437);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _IconButton = __webpack_require__(111);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _Paper = __webpack_require__(27);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _FloatingActionButton = __webpack_require__(296);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _Toolbar = __webpack_require__(122);

	var _Table = __webpack_require__(995);

	var _moreVert = __webpack_require__(205);

	var _moreVert2 = _interopRequireDefault(_moreVert);

	var _add = __webpack_require__(204);

	var _add2 = _interopRequireDefault(_add);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dependencies = [{
		logo: '/img/stylus.png',
		title: 'stylus',
		content: 'Expressive, robust, feature-rich CSS language built for nodejs'
	}, {
		logo: '/img/grunt.png',
		title: 'Grunt',
		content: 'The JavaScript Task Runner'
	}, {
		logo: '/img/pm2.png',
		title: 'pm2',
		content: 'Production process manager for Node.js apps with a built-in load balancer'
	}, {
		logo: '/img/webpack.png',
		title: 'webpack',
		content: 'A bundler for javascript and friends.'
	}];

	var styles = {
		root: {
			marginTop: 24,
			paddingBottom: 24
		},
		li: {
			position: 'relative',
			minHeight: 72,
			borderBottom: '1px solid rgb(224, 224, 224)'
		}
	};

	var List = function (_React$Component) {
		(0, _inherits3.default)(List, _React$Component);

		function List() {
			(0, _classCallCheck3.default)(this, List);
			return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
		}

		(0, _createClass3.default)(List, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					_Paper2.default,
					{ style: styles.root, zDepth: 1 },
					_react2.default.createElement(
						_Toolbar.Toolbar,
						{ style: {
								position: 'relative',
								marginTop: 24,
								backgroundColor: 'initial',
								borderBottom: '1px solid rgb(224, 224, 224)'
							} },
						_react2.default.createElement(_Toolbar.ToolbarTitle, { text: '服务器管理' }),
						_react2.default.createElement(
							_Toolbar.ToolbarGroup,
							{ float: 'right', style: {
									position: 'absolute',
									top: 27,
									right: 20,
									zIndex: 1
								} },
							_react2.default.createElement(
								_FloatingActionButton2.default,
								{ secondary: true },
								_react2.default.createElement(_add2.default, null)
							)
						)
					),
					_react2.default.createElement(
						_Table.Table,
						null,
						_react2.default.createElement(
							_Table.TableHeader,
							null,
							_react2.default.createElement(
								_Table.TableRow,
								null,
								_react2.default.createElement(
									_Table.TableHeaderColumn,
									null,
									'ID'
								),
								_react2.default.createElement(
									_Table.TableHeaderColumn,
									null,
									'Name'
								),
								_react2.default.createElement(
									_Table.TableHeaderColumn,
									null,
									'Status'
								),
								_react2.default.createElement(
									_Table.TableHeaderColumn,
									null,
									'Op'
								)
							)
						),
						_react2.default.createElement(
							_Table.TableBody,
							null,
							_react2.default.createElement(
								_Table.TableRow,
								null,
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'1'
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'John Smith'
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'Employed'
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'Employed'
								)
							),
							_react2.default.createElement(
								_Table.TableRow,
								null,
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'2'
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'Randal White'
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'Unemployed'
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'Employed'
								)
							),
							_react2.default.createElement(
								_Table.TableRow,
								null,
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'3'
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'Stephanie Sanders'
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'Employed'
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'Employed'
								)
							),
							_react2.default.createElement(
								_Table.TableRow,
								null,
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'4'
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'Steve Brown'
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'Employed'
								),
								_react2.default.createElement(
									_Table.TableRowColumn,
									null,
									'Employed'
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ style: { marginTop: 12, textAlign: 'right' } },
						_react2.default.createElement(_FlatButton2.default, { label: '上一页', style: { marginRight: 16 }, disabled: true }),
						_react2.default.createElement(_FlatButton2.default, { label: '下一页' })
					)
				);
			}
		}]);
		return List;
	}(_react2.default.Component);

	exports.default = List;

/***/ }

})