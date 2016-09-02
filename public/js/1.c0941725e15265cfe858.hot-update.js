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

	var _defineProperty2 = __webpack_require__(138);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _itemTypeToComponent;

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

	var _reactUltimatePagination = __webpack_require__(1391);

	var _firstPage = __webpack_require__(1389);

	var _firstPage2 = _interopRequireDefault(_firstPage);

	var _lastPage = __webpack_require__(1390);

	var _lastPage2 = _interopRequireDefault(_lastPage);

	var _chevronLeft = __webpack_require__(1387);

	var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

	var _chevronRight = __webpack_require__(1388);

	var _chevronRight2 = _interopRequireDefault(_chevronRight);

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

	var flatButtonStyle = {
	  minWidth: 36
	};

	var Page = function Page(_ref) {
	  var value = _ref.value;
	  var isActive = _ref.isActive;
	  var onClick = _ref.onClick;
	  return _react2.default.createElement(_FlatButton2.default, { style: flatButtonStyle, label: value.toString(), primary: isActive, onClick: onClick });
	};

	var Ellipsis = function Ellipsis(_ref2) {
	  var onClick = _ref2.onClick;
	  return _react2.default.createElement(_FlatButton2.default, { style: flatButtonStyle, label: '...', onClick: onClick });
	};

	var FirstPageLink = function FirstPageLink(_ref3) {
	  var isActive = _ref3.isActive;
	  var onClick = _ref3.onClick;
	  return _react2.default.createElement(_FlatButton2.default, { style: flatButtonStyle, icon: _react2.default.createElement(_firstPage2.default, null), onClick: onClick });
	};

	var PreviousPageLink = function PreviousPageLink(_ref4) {
	  var isActive = _ref4.isActive;
	  var onClick = _ref4.onClick;
	  return _react2.default.createElement(_FlatButton2.default, { style: flatButtonStyle, icon: _react2.default.createElement(_chevronLeft2.default, null), onClick: onClick });
	};

	var NextPageLink = function NextPageLink(_ref5) {
	  var isActive = _ref5.isActive;
	  var onClick = _ref5.onClick;
	  return _react2.default.createElement(_FlatButton2.default, { style: flatButtonStyle, icon: _react2.default.createElement(_chevronRight2.default, null), onClick: onClick });
	};

	var LastPageLink = function LastPageLink(_ref6) {
	  var isActive = _ref6.isActive;
	  var onClick = _ref6.onClick;
	  return _react2.default.createElement(_FlatButton2.default, { style: flatButtonStyle, icon: _react2.default.createElement(_lastPage2.default, null), onClick: onClick });
	};

	var itemTypeToComponent = (_itemTypeToComponent = {}, (0, _defineProperty3.default)(_itemTypeToComponent, _reactUltimatePagination.ITEM_TYPES.PAGE, Page), (0, _defineProperty3.default)(_itemTypeToComponent, _reactUltimatePagination.ITEM_TYPES.ELLIPSIS, Ellipsis), (0, _defineProperty3.default)(_itemTypeToComponent, _reactUltimatePagination.ITEM_TYPES.FIRST_PAGE_LINK, FirstPageLink), (0, _defineProperty3.default)(_itemTypeToComponent, _reactUltimatePagination.ITEM_TYPES.PREVIOS_PAGE_LINK, PreviousPageLink), (0, _defineProperty3.default)(_itemTypeToComponent, _reactUltimatePagination.ITEM_TYPES.NEXT_PAGE_LINK, NextPageLink), (0, _defineProperty3.default)(_itemTypeToComponent, _reactUltimatePagination.ITEM_TYPES.LAST_PAGE_LINK, LastPageLink), _itemTypeToComponent);

	var UltimatePaginationMaterialUi = (0, _reactUltimatePagination.createUltimatePagination)({ itemTypeToComponent: itemTypeToComponent });

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
	                ' ',
	                _react2.default.createElement(
	                  _IconMenu2.default,
	                  {
	                    iconButtonElement: _react2.default.createElement(
	                      _IconButton2.default,
	                      null,
	                      _react2.default.createElement(_moreVert2.default, null)
	                    ),
	                    anchorOrigin: { horizontal: 'left', vertical: 'top' },
	                    targetOrigin: { horizontal: 'left', vertical: 'top' }
	                  },
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '查看' }),
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '修改' }),
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '删除' }),
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '取消' })
	                )
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
	                _react2.default.createElement(
	                  _IconMenu2.default,
	                  {
	                    iconButtonElement: _react2.default.createElement(
	                      _IconButton2.default,
	                      null,
	                      _react2.default.createElement(_moreVert2.default, null)
	                    ),
	                    anchorOrigin: { horizontal: 'left', vertical: 'top' },
	                    targetOrigin: { horizontal: 'left', vertical: 'top' }
	                  },
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '查看' }),
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '修改' }),
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '删除' }),
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '取消' })
	                )
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
	                _react2.default.createElement(
	                  _IconMenu2.default,
	                  {
	                    iconButtonElement: _react2.default.createElement(
	                      _IconButton2.default,
	                      null,
	                      _react2.default.createElement(_moreVert2.default, null)
	                    ),
	                    anchorOrigin: { horizontal: 'left', vertical: 'top' },
	                    targetOrigin: { horizontal: 'left', vertical: 'top' }
	                  },
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '查看' }),
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '修改' }),
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '删除' }),
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '取消' })
	                )
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
	                _react2.default.createElement(
	                  _IconMenu2.default,
	                  {
	                    iconButtonElement: _react2.default.createElement(
	                      _IconButton2.default,
	                      null,
	                      _react2.default.createElement(_moreVert2.default, null)
	                    ),
	                    anchorOrigin: { horizontal: 'left', vertical: 'top' },
	                    targetOrigin: { horizontal: 'left', vertical: 'top' }
	                  },
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '查看' }),
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '修改' }),
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '删除' }),
	                  _react2.default.createElement(_MenuItem2.default, { primaryText: '取消' })
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(UltimatePaginationMaterialUi, null),
	        _react2.default.createElement(
	          'div',
	          { style: { marginTop: 12, marginRight: 15, textAlign: 'right' } },
	          _react2.default.createElement(_FlatButton2.default, { label: '上一页', style: { marginRight: 16 }, disabled: true }),
	          _react2.default.createElement(_FlatButton2.default, { label: '下一页' })
	        )
	      );
	    }
	  }]);
	  return List;
	}(_react2.default.Component);

	exports.default = List;

/***/ },

/***/ 1386:
/***/ function(module, exports) {

	"use strict";
	exports.ITEM_TYPES = {
	    PAGE: 'PAGE',
	    ELLIPSIS: 'ELLIPSIS',
	    FIRST_PAGE_LINK: 'FIRST_PAGE_LINK',
	    PREVIOS_PAGE_LINK: 'PREVIOS_PAGE_LINK',
	    NEXT_PAGE_LINK: 'NEXT_PAGE_LINK',
	    LAST_PAGE_LINK: 'LAST_PAGE_LINK'
	};
	exports.ITEM_KEYS = {
	    FIRST_ELLIPSIS: -1,
	    SECOND_ELLISPIS: -2,
	    FIRST_PAGE_LINK: -3,
	    PREVIOS_PAGE_LINK: -4,
	    NEXT_PAGE_LINK: -5,
	    LAST_PAGE_LINK: -6
	};
	//# sourceMappingURL=ultimate-pagination-constants.js.map

/***/ },

/***/ 1387:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(50);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(47);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationChevronLeft = function NavigationChevronLeft(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' })
	  );
	};
	NavigationChevronLeft = (0, _pure2.default)(NavigationChevronLeft);
	NavigationChevronLeft.displayName = 'NavigationChevronLeft';
	NavigationChevronLeft.muiName = 'SvgIcon';

	exports.default = NavigationChevronLeft;

/***/ },

/***/ 1388:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(50);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(47);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationChevronRight = function NavigationChevronRight(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' })
	  );
	};
	NavigationChevronRight = (0, _pure2.default)(NavigationChevronRight);
	NavigationChevronRight.displayName = 'NavigationChevronRight';
	NavigationChevronRight.muiName = 'SvgIcon';

	exports.default = NavigationChevronRight;

/***/ },

/***/ 1389:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(50);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(47);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationFirstPage = function NavigationFirstPage(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z' })
	  );
	};
	NavigationFirstPage = (0, _pure2.default)(NavigationFirstPage);
	NavigationFirstPage.displayName = 'NavigationFirstPage';
	NavigationFirstPage.muiName = 'SvgIcon';

	exports.default = NavigationFirstPage;

/***/ },

/***/ 1390:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(50);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(47);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationLastPage = function NavigationLastPage(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z' })
	  );
	};
	NavigationLastPage = (0, _pure2.default)(NavigationLastPage);
	NavigationLastPage.displayName = 'NavigationLastPage';
	NavigationLastPage.muiName = 'SvgIcon';

	exports.default = NavigationLastPage;

/***/ },

/***/ 1391:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ITEM_TYPES = exports.createUltimatePagination = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ultimatePagination = __webpack_require__(1394);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var renderItemComponentFunctionFactory = function renderItemComponentFunctionFactory(itemTypeToComponent, currentPage, onChange) {
	  var onItemClickFunctionFactory = function onItemClickFunctionFactory(value) {
	    return function () {
	      if (onChange && currentPage !== value) {
	        onChange(value);
	      }
	    };
	  };

	  return function (item) {
	    var ItemComponent = itemTypeToComponent[item.type];
	    var onItemClick = onItemClickFunctionFactory(item.value);
	    return _react2.default.createElement(ItemComponent, _extends({ onClick: onItemClick }, item));
	  };
	};

	var createUltimatePagination = exports.createUltimatePagination = function createUltimatePagination(_ref) {
	  var itemTypeToComponent = _ref.itemTypeToComponent;
	  var _ref$WrapperComponent = _ref.WrapperComponent;
	  var WrapperComponent = _ref$WrapperComponent === undefined ? 'div' : _ref$WrapperComponent;

	  var UltimatePaginationComponent = function UltimatePaginationComponent(_ref2) {
	    var currentPage = _ref2.currentPage;
	    var totalPages = _ref2.totalPages;
	    var onChange = _ref2.onChange;

	    var paginationModel = (0, _ultimatePagination.getPaginationModel)({ currentPage: currentPage, totalPages: totalPages });
	    var renderItemComponent = renderItemComponentFunctionFactory(itemTypeToComponent, currentPage, onChange);
	    return _react2.default.createElement(
	      WrapperComponent,
	      null,
	      paginationModel.map(renderItemComponent)
	    );
	  };

	  UltimatePaginationComponent.propTypes = {
	    currentPage: _react2.default.PropTypes.number.isRequired,
	    totalPages: _react2.default.PropTypes.number.isRequired,
	    onChange: _react2.default.PropTypes.func
	  };

	  return UltimatePaginationComponent;
	};

	exports.ITEM_TYPES = _ultimatePagination.ITEM_TYPES;

/***/ },

/***/ 1392:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ultimate_pagination_constants_1 = __webpack_require__(1386);
	exports.createFirstEllipsis = function (pageNumber) {
	    return {
	        type: ultimate_pagination_constants_1.ITEM_TYPES.ELLIPSIS,
	        key: ultimate_pagination_constants_1.ITEM_KEYS.FIRST_ELLIPSIS,
	        value: pageNumber,
	        isActive: false
	    };
	};
	exports.createSecondEllipsis = function (pageNumber) {
	    return {
	        type: ultimate_pagination_constants_1.ITEM_TYPES.ELLIPSIS,
	        key: ultimate_pagination_constants_1.ITEM_KEYS.SECOND_ELLISPIS,
	        value: pageNumber,
	        isActive: false
	    };
	};
	exports.createFirstPageLink = function (options) {
	    var currentPage = options.currentPage;
	    return {
	        type: ultimate_pagination_constants_1.ITEM_TYPES.FIRST_PAGE_LINK,
	        key: ultimate_pagination_constants_1.ITEM_KEYS.FIRST_PAGE_LINK,
	        value: 1,
	        isActive: currentPage === 1
	    };
	};
	exports.createPreviousPageLink = function (options) {
	    var currentPage = options.currentPage;
	    return {
	        type: ultimate_pagination_constants_1.ITEM_TYPES.PREVIOS_PAGE_LINK,
	        key: ultimate_pagination_constants_1.ITEM_KEYS.PREVIOS_PAGE_LINK,
	        value: Math.max(1, currentPage - 1),
	        isActive: currentPage === 1
	    };
	};
	exports.createNextPageLink = function (options) {
	    var currentPage = options.currentPage, totalPages = options.totalPages;
	    return {
	        type: ultimate_pagination_constants_1.ITEM_TYPES.NEXT_PAGE_LINK,
	        key: ultimate_pagination_constants_1.ITEM_KEYS.NEXT_PAGE_LINK,
	        value: Math.min(totalPages, currentPage + 1),
	        isActive: currentPage === totalPages
	    };
	};
	exports.createLastPageLink = function (options) {
	    var currentPage = options.currentPage, totalPages = options.totalPages;
	    return {
	        type: ultimate_pagination_constants_1.ITEM_TYPES.LAST_PAGE_LINK,
	        key: ultimate_pagination_constants_1.ITEM_KEYS.LAST_PAGE_LINK,
	        value: totalPages,
	        isActive: currentPage === totalPages
	    };
	};
	exports.createPageFunctionFactory = function (options) {
	    var currentPage = options.currentPage;
	    return function (pageNumber) {
	        return {
	            type: ultimate_pagination_constants_1.ITEM_TYPES.PAGE,
	            key: pageNumber,
	            value: pageNumber,
	            isActive: pageNumber === currentPage
	        };
	    };
	};
	//# sourceMappingURL=ultimate-pagination-item-factories.js.map

/***/ },

/***/ 1393:
/***/ function(module, exports) {

	"use strict";
	function createRange(start, end) {
	    var range = [];
	    for (var i = start; i <= end; i++) {
	        range.push(i);
	    }
	    return range;
	}
	exports.createRange = createRange;
	//# sourceMappingURL=ultimate-pagination-utils.js.map

/***/ },

/***/ 1394:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ultimate_pagination_utils_1 = __webpack_require__(1393);
	var ultimate_pagination_item_factories_1 = __webpack_require__(1392);
	function getPaginationModel(options) {
	    var currentPage = options.currentPage, totalPages = options.totalPages;
	    var paginationModel = [];
	    var createPage = ultimate_pagination_item_factories_1.createPageFunctionFactory(options);
	    // Calculate group of central pages
	    var mainPagesStart = Math.max(2, Math.max(currentPage - 1, 3) - Math.max(0, currentPage + 3 - totalPages));
	    var mainPagesEnd = Math.min(totalPages - 1, Math.min(currentPage + 1, totalPages - 2) + Math.max(0, 4 - currentPage));
	    var mainPages = ultimate_pagination_utils_1.createRange(mainPagesStart, mainPagesEnd).map(createPage);
	    paginationModel.push(ultimate_pagination_item_factories_1.createFirstPageLink(options));
	    paginationModel.push(ultimate_pagination_item_factories_1.createPreviousPageLink(options));
	    // Always add the first page
	    paginationModel.push(createPage(1));
	    // Show '...' or second page between the last page and main pages group if needed
	    if (mainPagesStart > 3) {
	        paginationModel.push(ultimate_pagination_item_factories_1.createFirstEllipsis(mainPagesStart - 1));
	    }
	    else if (mainPagesStart !== 2) {
	        paginationModel.push(createPage(2));
	    }
	    // Add pages +/- from the current page
	    paginationModel.push.apply(paginationModel, mainPages);
	    // Show '...' or penult page between main pages group and the last page if needed
	    if (mainPagesEnd < totalPages - 2) {
	        paginationModel.push(ultimate_pagination_item_factories_1.createSecondEllipsis(mainPagesEnd + 1));
	    }
	    else if (mainPagesEnd !== totalPages - 1) {
	        paginationModel.push(createPage(totalPages - 1));
	    }
	    if (totalPages > 1) {
	        paginationModel.push(createPage(totalPages));
	    }
	    paginationModel.push(ultimate_pagination_item_factories_1.createNextPageLink(options));
	    paginationModel.push(ultimate_pagination_item_factories_1.createLastPageLink(options));
	    return paginationModel;
	}
	exports.getPaginationModel = getPaginationModel;
	var ultimate_pagination_constants_1 = __webpack_require__(1386);
	exports.ITEM_TYPES = ultimate_pagination_constants_1.ITEM_TYPES;
	exports.ITEM_KEYS = ultimate_pagination_constants_1.ITEM_KEYS;
	//# sourceMappingURL=ultimate-pagination.js.map

/***/ }

})