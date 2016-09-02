webpackHotUpdate(1,{

/***/ 70:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	Some of the constants which are used throughout this project instead of directly using the string.
	*/

	var Block = exports.Block = {
	  UNSTYLED: 'unstyled',
	  OL: 'ordered-list-item',
	  UL: 'unordered-list-item',
	  H1: 'header-one',
	  H2: 'header-two',
	  H3: 'header-three',
	  H4: 'header-four',
	  H5: 'header-five',
	  H6: 'header-six',
	  CODE: 'code-block',
	  BLOCKQUOTE: 'blockquote',
	  PULLQUOTE: 'pullquote',
	  ATOMIC: 'atomic',
	  BLOCKQUOTE_CAPTION: 'block-quote-caption',
	  CAPTION: 'caption',
	  TODO: 'todo',
	  IMAGE: 'atomic:image',
	  BREAK: 'atomic:break'
	};

	var Inline = exports.Inline = {
	  BOLD: 'BOLD',
	  CODE: 'CODE',
	  ITALIC: 'ITALIC',
	  STRIKETHROUGH: 'STRIKETHROUGH',
	  UNDERLINE: 'UNDERLINE',
	  HIGHLIGHT: 'HIGHLIGHT'
	};

	var Entity = exports.Entity = {
	  LINK: 'LINK'
	};

	exports.default = {
	  Block: Block,
	  Inline: Inline,
	  Entity: Entity
	};

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addNewBlockAt = exports.updateDataOfBlock = exports.resetBlockWithType = exports.addNewBlock = exports.getCurrentBlock = exports.getDefaultBlockData = undefined;

	var _immutable = __webpack_require__(55);

	var _draftJs = __webpack_require__(43);

	var _constants = __webpack_require__(70);

	/*
	Returns default block-level metadata for various block type. Empty object otherwise.
	*/
	var getDefaultBlockData = exports.getDefaultBlockData = function getDefaultBlockData(blockType) {
	  var initialData = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  switch (blockType) {
	    case _constants.Block.TODO:
	      return { checked: false };
	    default:
	      return initialData;
	  }
	};

	/*
	Get currentBlock in the editorState.
	*/
	var getCurrentBlock = exports.getCurrentBlock = function getCurrentBlock(editorState) {
	  var selectionState = editorState.getSelection();
	  var contentState = editorState.getCurrentContent();
	  var block = contentState.getBlockForKey(selectionState.getStartKey());
	  return block;
	};

	/*
	Adds a new block (currently replaces an empty block) at the current cursor position
	of the given `newType`.
	*/
	var addNewBlock = exports.addNewBlock = function addNewBlock(editorState) {
	  var newType = arguments.length <= 1 || arguments[1] === undefined ? _constants.Block.UNSTYLED : arguments[1];
	  var initialData = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  var selectionState = editorState.getSelection();
	  if (!selectionState.isCollapsed()) {
	    return editorState;
	  }
	  var contentState = editorState.getCurrentContent();
	  var key = selectionState.getStartKey();
	  var blockMap = contentState.getBlockMap();
	  var currentBlock = getCurrentBlock(editorState);
	  if (!currentBlock) {
	    return editorState;
	  }
	  if (currentBlock.getLength() === 0) {
	    if (currentBlock.getType() === newType) {
	      return editorState;
	    }
	    var newBlock = currentBlock.merge({
	      type: newType,
	      data: getDefaultBlockData(newType, initialData)
	    });
	    var newContentState = contentState.merge({
	      blockMap: blockMap.set(key, newBlock),
	      selectionAfter: selectionState
	    });
	    return _draftJs.EditorState.push(editorState, newContentState, 'change-block-type');
	  }
	  return editorState;
	};

	/*
	Changes the block type of the current block.
	*/
	var resetBlockWithType = exports.resetBlockWithType = function resetBlockWithType(editorState) {
	  var newType = arguments.length <= 1 || arguments[1] === undefined ? _constants.Block.UNSTYLED : arguments[1];

	  var contentState = editorState.getCurrentContent();
	  var selectionState = editorState.getSelection();
	  var key = selectionState.getStartKey();
	  var blockMap = contentState.getBlockMap();
	  var block = blockMap.get(key);
	  var newText = '';
	  var text = block.getText();
	  if (block.getLength() >= 2) {
	    newText = text.substr(1);
	  }
	  var newBlock = block.merge({
	    text: newText,
	    type: newType,
	    data: getDefaultBlockData(newType)
	  });
	  var newContentState = contentState.merge({
	    blockMap: blockMap.set(key, newBlock),
	    selectionAfter: selectionState.merge({
	      anchorOffset: 0,
	      focusOffset: 0
	    })
	  });
	  return _draftJs.EditorState.push(editorState, newContentState, 'change-block-type');
	};

	/*
	Update block-level metadata of the given `block` to the `newData`/
	*/
	var updateDataOfBlock = exports.updateDataOfBlock = function updateDataOfBlock(editorState, block, newData) {
	  var contentState = editorState.getCurrentContent();
	  var newBlock = block.merge({
	    data: newData
	  });
	  var newContentState = contentState.merge({
	    blockMap: contentState.getBlockMap().set(block.getKey(), newBlock)
	  });
	  return _draftJs.EditorState.push(editorState, newContentState, 'change-block-type');
	  // return editorState;
	};

	// const BEFORE = -1;
	// const AFTER = 1;

	/*
	Used from [react-rte](https://github.com/sstur/react-rte/blob/master/src/lib/insertBlockAfter.js)
	by [sstur](https://github.com/sstur)
	*/
	var addNewBlockAt = exports.addNewBlockAt = function addNewBlockAt(editorState, pivotBlockKey) {
	  var newBlockType = arguments.length <= 2 || arguments[2] === undefined ? _constants.Block.UNSTYLED : arguments[2];
	  var initialData = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var content = editorState.getCurrentContent();
	  var blockMap = content.getBlockMap();
	  var block = blockMap.get(pivotBlockKey);
	  var blocksBefore = blockMap.toSeq().takeUntil(function (v) {
	    return v === block;
	  });
	  var blocksAfter = blockMap.toSeq().skipUntil(function (v) {
	    return v === block;
	  }).rest();
	  var newBlockKey = (0, _draftJs.genKey)();

	  var newBlock = new _draftJs.ContentBlock({
	    key: newBlockKey,
	    type: newBlockType,
	    text: '',
	    characterList: block.getCharacterList().slice(0, 0),
	    depth: 0,
	    data: (0, _immutable.Map)(getDefaultBlockData(newBlockType, initialData))
	  });

	  var newBlockMap = blocksBefore.concat([[pivotBlockKey, block], [newBlockKey, newBlock]], blocksAfter).toOrderedMap();

	  var selection = editorState.getSelection();

	  var newContent = content.merge({
	    blockMap: newBlockMap,
	    selectionBefore: selection,
	    selectionAfter: selection.merge({
	      anchorKey: newBlockKey,
	      anchorOffset: 0,
	      focusKey: newBlockKey,
	      focusOffset: 0,
	      isBackward: false
	    })
	  });
	  return _draftJs.EditorState.push(editorState, newContent, 'split-block');
	};

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _draftJs = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import './atomic.scss';

	var AtomicBlock = function AtomicBlock(props) {
	  var entity = _draftJs.Entity.get(props.block.getEntityAt(0));
	  var data = entity.getData();
	  var type = entity.getType();
	  if (type === 'image') {
	    return _react2.default.createElement(
	      'div',
	      { className: 'block-atomic-wrapper' },
	      _react2.default.createElement('img', { role: 'presentation', src: data.src }),
	      _react2.default.createElement(
	        'div',
	        { className: 'block-atomic-controls' },
	        _react2.default.createElement(
	          'button',
	          null,
	          '×'
	        )
	      )
	    );
	  }
	  return _react2.default.createElement(
	    'p',
	    null,
	    'No supported block for ',
	    type
	  );
	};

	AtomicBlock.propTypes = {
	  block: _react.PropTypes.object
	};

	exports.default = AtomicBlock;

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _draftJs = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import './blockquotecaption.scss';

	exports.default = function (props) {
	  return _react2.default.createElement(
	    'cite',
	    null,
	    _react2.default.createElement(_draftJs.EditorBlock, props)
	  );
	};

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return _react2.default.createElement("hr", { className: "block-hr" });
	};

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _draftJs = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import './caption.scss';

	exports.default = function (props) {
	  return _react2.default.createElement(_draftJs.EditorBlock, props);
	};

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _draftJs = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ImageBlock = function (_React$Component) {
	  _inherits(ImageBlock, _React$Component);

	  function ImageBlock(props) {
	    _classCallCheck(this, ImageBlock);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageBlock).call(this, props));

	    _this.state = {
	      selected: false
	    };

	    _this.onClick = _this.onClick.bind(_this);
	    // this.enableEditable = this.enableEditable.bind(this);
	    return _this;
	  }

	  _createClass(ImageBlock, [{
	    key: 'onClick',
	    value: function onClick() {
	      this.setState({
	        selected: !this.state.selected
	      });
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      this.setState({
	        selected: true
	      });
	    }

	    // enableEditable(e) {
	    //   this.setState({
	    //     editableEnabled: true,
	    //   });
	    // }

	  }, {
	    key: 'render',
	    value: function render() {
	      var data = this.props.block.getData();
	      // const length = this.props.block.getLength();
	      var src = data.get('src');
	      var className = this.state.selected ? 'is-selected' : '';
	      // const showPlaceholder = length < 1 && this.state.editableEnabled === false;
	      if (src !== null) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'block-image-inner-container' },
	            _react2.default.createElement('img', { role: 'presentation', onClick: this.onClick, className: className, src: src })
	          ),
	          _react2.default.createElement(
	            'figcaption',
	            null,
	            _react2.default.createElement(_draftJs.EditorBlock, this.props)
	          )
	        );
	      }
	      return _react2.default.createElement(_draftJs.EditorBlock, this.props);
	    }
	  }]);

	  return ImageBlock;
	}(_react2.default.Component);

	ImageBlock.propTypes = {
	  block: _react.PropTypes.object
	};

	exports.default = ImageBlock;

	/*

	<div
	              className="block-image-toolbar-container"
	              style={{ display: (this.state.selected ? 'block' : 'none') }}
	            >
	              <i className="fa fa-lg fa-trash" title="Remove image" />
	            </div>*/

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _draftJs = __webpack_require__(43);

	var _index = __webpack_require__(126);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import './todo.scss';

	var TodoBlock = function (_React$Component) {
	  _inherits(TodoBlock, _React$Component);

	  function TodoBlock(props) {
	    _classCallCheck(this, TodoBlock);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoBlock).call(this, props));

	    _this.updateData = _this.updateData.bind(_this);
	    return _this;
	  }

	  _createClass(TodoBlock, [{
	    key: 'updateData',
	    value: function updateData() {
	      var _props = this.props;
	      var block = _props.block;
	      var blockProps = _props.blockProps;
	      var onChange = blockProps.onChange;
	      var getEditorState = blockProps.getEditorState;

	      var data = block.getData();
	      var checked = data.has('checked') && data.get('checked') === true;
	      var newData = data.set('checked', !checked);
	      onChange((0, _index.updateDataOfBlock)(getEditorState(), block, newData));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var data = this.props.block.getData();
	      var checked = data.get('checked') === true;
	      return _react2.default.createElement(
	        'div',
	        { className: checked ? 'block-todo-completed' : '' },
	        _react2.default.createElement('input', { type: 'checkbox', checked: checked, onChange: this.updateData }),
	        _react2.default.createElement(_draftJs.EditorBlock, this.props)
	      );
	    }
	  }]);

	  return TodoBlock;
	}(_react2.default.Component);

	exports.default = TodoBlock;


	TodoBlock.propTypes = {
	  block: _react.PropTypes.object,
	  blockProps: _react.PropTypes.object
	};

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _blockquotecaption = __webpack_require__(475);

	var _blockquotecaption2 = _interopRequireDefault(_blockquotecaption);

	var _caption = __webpack_require__(477);

	var _caption2 = _interopRequireDefault(_caption);

	var _atomic = __webpack_require__(474);

	var _atomic2 = _interopRequireDefault(_atomic);

	var _todo = __webpack_require__(479);

	var _todo2 = _interopRequireDefault(_todo);

	var _image = __webpack_require__(478);

	var _image2 = _interopRequireDefault(_image);

	var _break = __webpack_require__(476);

	var _break2 = _interopRequireDefault(_break);

	var _constants = __webpack_require__(70);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (onChange, getEditorState) {
	  return function (contentBlock) {
	    // console.log(editorState, onChange);
	    var type = contentBlock.getType();
	    switch (type) {
	      case _constants.Block.BLOCKQUOTE_CAPTION:
	        return {
	          component: _blockquotecaption2.default
	        };
	      case _constants.Block.CAPTION:
	        return {
	          component: _caption2.default
	        };
	      case _constants.Block.ATOMIC:
	        return {
	          component: _atomic2.default,
	          editable: false
	        };
	      case _constants.Block.TODO:
	        return {
	          component: _todo2.default,
	          props: {
	            onChange: onChange,
	            getEditorState: getEditorState
	          }
	        };
	      case _constants.Block.IMAGE:
	        return {
	          component: _image2.default
	        };
	      case _constants.Block.BREAK:
	        return {
	          component: _break2.default,
	          editable: false
	        };
	      default:
	        return null;
	    }
	  };
	};

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findLinkEntities = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _draftJs = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var findLinkEntities = exports.findLinkEntities = function findLinkEntities(contentBlock, callback) {
	  contentBlock.findEntityRanges(function (character) {
	    var entityKey = character.getEntity();
	    return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'LINK';
	  }, callback);
	};

	var Link = function Link(props) {
	  var _Entity$get$getData = _draftJs.Entity.get(props.entityKey).getData();

	  var url = _Entity$get$getData.url;

	  return _react2.default.createElement(
	    'a',
	    {
	      className: 'draft-link hint--top hint--rounded',
	      href: url,
	      rel: 'noopener noreferrer',
	      target: '_blank',
	      'aria-label': url
	    },
	    props.children
	  );
	};

	Link.propTypes = {
	  children: _react.PropTypes.node,
	  entityKey: _react.PropTypes.string
	};

	exports.default = Link;

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _model = __webpack_require__(126);

	var _constants = __webpack_require__(70);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ImageButton = function (_React$Component) {
	  _inherits(ImageButton, _React$Component);

	  function ImageButton(props) {
	    _classCallCheck(this, ImageButton);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageButton).call(this, props));

	    _this.onClick = _this.onClick.bind(_this);
	    _this.onChange = _this.onChange.bind(_this);
	    return _this;
	  }

	  _createClass(ImageButton, [{
	    key: 'onClick',
	    value: function onClick() {
	      this.input.value = null;
	      this.input.click();
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      // e.preventDefault();
	      var file = e.target.files[0];
	      if (file.type.indexOf('image/') === 0) {
	        // console.log(this.props.getEditorState());
	        // eslint-disable-next-line no-undef
	        var src = URL.createObjectURL(file);
	        this.props.setEditorState((0, _model.addNewBlock)(this.props.getEditorState(), _constants.Block.IMAGE, {
	          src: src
	        }));
	      }
	      this.props.close();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'button',
	        { className: 'md-sb-button md-sb-img-button', onClick: this.onClick },
	        _react2.default.createElement('i', { className: 'fa fa-image' }),
	        _react2.default.createElement('input', {
	          type: 'file',
	          ref: function ref(c) {
	            _this2.input = c;
	          },
	          onChange: this.onChange,
	          style: { display: 'none' }
	        })
	      );
	    }
	  }]);

	  return ImageButton;
	}(_react2.default.Component);

	exports.default = ImageButton;


	ImageButton.propTypes = {
	  setEditorState: _react.PropTypes.func,
	  getEditorState: _react.PropTypes.func,
	  close: _react.PropTypes.func
	};

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StyleButton = function (_React$Component) {
	  _inherits(StyleButton, _React$Component);

	  function StyleButton() {
	    _classCallCheck(this, StyleButton);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StyleButton).call(this));

	    _this.onToggle = function (e) {
	      e.preventDefault();
	      _this.props.onToggle(_this.props.style);
	    };
	    return _this;
	  }

	  _createClass(StyleButton, [{
	    key: 'render',
	    value: function render() {
	      var className = 'RichEditor-styleButton';
	      if (this.props.active) {
	        className += ' RichEditor-activeButton';
	      }
	      className += ' RichEditor-styleButton-' + this.props.style.toLowerCase();
	      return _react2.default.createElement(
	        'span',
	        {
	          className: className + ' hint--top',
	          onMouseDown: this.onToggle,
	          'aria-label': this.props.description
	        },
	        this.props.icon ? _react2.default.createElement('i', { className: 'fa fa-' + this.props.icon }) : this.props.label
	      );
	    }
	  }]);

	  return StyleButton;
	}(_react2.default.Component);

	exports.default = StyleButton;


	StyleButton.propTypes = {
	  onToggle: _react.PropTypes.func,
	  style: _react.PropTypes.string,
	  active: _react.PropTypes.bool,
	  icon: _react.PropTypes.string,
	  label: _react.PropTypes.string,
	  description: _react.PropTypes.string
	};

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.INLINE_BUTTONS = exports.BLOCK_BUTTONS = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(17);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _draftJs = __webpack_require__(43);

	var _blocktoolbar = __webpack_require__(1112);

	var _blocktoolbar2 = _interopRequireDefault(_blocktoolbar);

	var _inlinetoolbar = __webpack_require__(1113);

	var _inlinetoolbar2 = _interopRequireDefault(_inlinetoolbar);

	var _index = __webpack_require__(487);

	var _index2 = __webpack_require__(126);

	var _constants = __webpack_require__(70);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import './toolbar.scss';

	var Toolbar = function (_React$Component) {
	  _inherits(Toolbar, _React$Component);

	  function Toolbar(props) {
	    _classCallCheck(this, Toolbar);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Toolbar).call(this, props));

	    _this.state = {
	      showURLInput: false,
	      urlInputValue: ''
	    };

	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.onChange = _this.onChange.bind(_this);
	    _this.handleLinkInput = _this.handleLinkInput.bind(_this);
	    _this.hideLinkInput = _this.hideLinkInput.bind(_this);
	    return _this;
	  }

	  _createClass(Toolbar, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var editorState = newProps.editorState;

	      if (!newProps.editorEnabled) {
	        return;
	      }
	      var selectionState = editorState.getSelection();
	      if (selectionState.isCollapsed()) {
	        if (this.state.showURLInput) {
	          this.setState({
	            showURLInput: false
	          });
	        }
	        return;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (!this.props.editorEnabled || this.state.showURLInput) {
	        return;
	      }
	      var selectionState = this.props.editorState.getSelection();
	      if (selectionState.isCollapsed()) {
	        return;
	      }
	      // eslint-disable-next-line no-undef
	      var nativeSelection = (0, _index.getSelection)(window);
	      if (!nativeSelection.rangeCount) {
	        return;
	      }
	      var selectionBoundary = (0, _index.getSelectionRect)(nativeSelection);

	      // eslint-disable-next-line react/no-find-dom-node
	      var toolbarNode = _reactDom2.default.findDOMNode(this);
	      var toolbarBoundary = toolbarNode.getBoundingClientRect();

	      // eslint-disable-next-line react/no-find-dom-node
	      var parent = _reactDom2.default.findDOMNode(this.props.editorNode);
	      var parentBoundary = parent.getBoundingClientRect();

	      /*
	      * Main logic for setting the toolbar position.
	      */
	      toolbarNode.style.top = selectionBoundary.top - parentBoundary.top - toolbarBoundary.height - 5 + 'px';
	      toolbarNode.style.width = toolbarBoundary.width + 'px';
	      var widthDiff = selectionBoundary.width - toolbarBoundary.width;
	      if (widthDiff >= 0) {
	        toolbarNode.style.left = widthDiff / 2 + 'px';
	      } else {
	        var left = selectionBoundary.left - parentBoundary.left;
	        toolbarNode.style.left = left + widthDiff / 2 + 'px';
	        // toolbarNode.style.width = toolbarBoundary.width + 'px';
	        // if (left + toolbarBoundary.width > parentBoundary.width) {
	        // toolbarNode.style.right = '0px';
	        // toolbarNode.style.left = '';
	        // toolbarNode.style.width = toolbarBoundary.width + 'px';
	        // }
	        // else {
	        //   toolbarNode.style.left = (left + widthDiff / 2) + 'px';
	        //   toolbarNode.style.right = '';
	        // }
	      }
	    }
	  }, {
	    key: 'onKeyDown',
	    value: function onKeyDown(e) {
	      var _this2 = this;

	      if (e.which === 13) {
	        e.preventDefault();
	        e.stopPropagation();
	        this.props.setLink(this.state.urlInputValue);
	        this.setState({
	          showURLInput: false,
	          urlInputValue: ''
	        }, function () {
	          return _this2.props.focus();
	        });
	      } else if (e.which === 27) {
	        this.hideLinkInput(e);
	      }
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      this.setState({
	        urlInputValue: e.target.value
	      });
	    }
	  }, {
	    key: 'handleLinkInput',
	    value: function handleLinkInput(e) {
	      var _this3 = this;

	      var direct = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	      if (!direct) {
	        e.preventDefault();
	        e.stopPropagation();
	      }
	      var editorState = this.props.editorState;

	      var selection = editorState.getSelection();
	      if (selection.isCollapsed()) {
	        this.props.focus();
	        return;
	      }
	      // const toolbarNode = ReactDOM.findDOMNode(this);
	      // const toolbarBoundary = toolbarNode.getBoundingClientRect();
	      // toolbarNode.style.width = toolbarBoundary.width + 'px';
	      var currentBlock = (0, _index2.getCurrentBlock)(editorState);
	      var selectedEntity = '';
	      var linkFound = false;
	      currentBlock.findEntityRanges(function (character) {
	        var entityKey = character.getEntity();
	        selectedEntity = entityKey;
	        return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === _constants.Entity.LINK;
	      }, function (start, end) {
	        var selStart = selection.getAnchorOffset();
	        var selEnd = selection.getFocusOffset();
	        if (selection.getIsBackward()) {
	          selStart = selection.getFocusOffset();
	          selEnd = selection.getAnchorOffset();
	        }
	        if (start === selStart && end === selEnd) {
	          linkFound = true;

	          var _Entity$get$getData = _draftJs.Entity.get(selectedEntity).getData();

	          var url = _Entity$get$getData.url;

	          _this3.setState({
	            showURLInput: true,
	            urlInputValue: url
	          }, function () {
	            setTimeout(function () {
	              _this3.urlinput.focus();
	              _this3.urlinput.select();
	            }, 0);
	          });
	        }
	      });
	      if (!linkFound) {
	        this.setState({
	          showURLInput: true
	        }, function () {
	          setTimeout(function () {
	            _this3.urlinput.focus();
	          }, 0);
	        });
	      }
	    }
	  }, {
	    key: 'hideLinkInput',
	    value: function hideLinkInput(e) {
	      var _this4 = this;

	      e.preventDefault();
	      e.stopPropagation();
	      this.setState({
	        showURLInput: false,
	        urlInputValue: ''
	      }, function () {
	        return _this4.props.focus();
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;

	      var _props = this.props;
	      var editorState = _props.editorState;
	      var editorEnabled = _props.editorEnabled;
	      var _state = this.state;
	      var showURLInput = _state.showURLInput;
	      var urlInputValue = _state.urlInputValue;

	      var isOpen = true;
	      if (!editorEnabled || editorState.getSelection().isCollapsed()) {
	        isOpen = false;
	      }
	      if (showURLInput) {
	        return _react2.default.createElement(
	          'div',
	          {
	            className: 'editor-toolbar' + (isOpen ? ' editor-toolbar--isopen' : '') + ' editor-toolbar--linkinput'
	          },
	          _react2.default.createElement(
	            'div',
	            {
	              className: 'RichEditor-controls RichEditor-show-link-input',
	              style: { display: 'block' }
	            },
	            _react2.default.createElement(
	              'span',
	              { className: 'url-input-close', onMouseDown: this.hideLinkInput },
	              '×'
	            ),
	            _react2.default.createElement('input', {
	              ref: function ref(node) {
	                _this5.urlinput = node;
	              },
	              type: 'text',
	              className: 'url-input',
	              onKeyDown: this.onKeyDown,
	              onChange: this.onChange,
	              placeholder: 'Press ENTER or ESC',
	              value: urlInputValue
	            })
	          )
	        );
	      }
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'editor-toolbar' + (isOpen ? ' editor-toolbar--isopen' : '')
	        },
	        _react2.default.createElement(_blocktoolbar2.default, {
	          editorState: editorState,
	          onToggle: this.props.toggleBlockType,
	          buttons: this.props.blockButtons
	        }),
	        _react2.default.createElement(_inlinetoolbar2.default, {
	          editorState: editorState,
	          onToggle: this.props.toggleInlineStyle,
	          buttons: this.props.inlineButtons
	        }),
	        _react2.default.createElement(
	          'div',
	          { className: 'RichEditor-controls' },
	          _react2.default.createElement(
	            'a',
	            {
	              className: 'RichEditor-styleButton RichEditor-linkButton hint--top',
	              href: '#open-link-input',
	              onClick: this.handleLinkInput, 'aria-label': 'Add a link'
	            },
	            '#'
	          )
	        )
	      );
	    }
	  }]);

	  return Toolbar;
	}(_react2.default.Component);

	exports.default = Toolbar;
	var BLOCK_BUTTONS = exports.BLOCK_BUTTONS = [{
	  label: 'H3',
	  style: 'header-three',
	  icon: 'header',
	  description: 'Heading 3'
	},
	// {
	//   label: 'P',
	//   style: 'unstyled',
	//   description: 'Paragraph',
	// },
	{
	  label: 'Q',
	  style: 'blockquote',
	  icon: 'quote-right',
	  description: 'Blockquote'
	}, {
	  label: 'UL',
	  style: 'unordered-list-item',
	  icon: 'list-ul',
	  description: 'Unordered List'
	}, {
	  label: 'OL',
	  style: 'ordered-list-item',
	  icon: 'list-ol',
	  description: 'Ordered List'
	}, {
	  label: '✓',
	  style: 'todo',
	  description: 'Todo List'
	}];

	var INLINE_BUTTONS = exports.INLINE_BUTTONS = [{
	  label: 'B',
	  style: 'BOLD',
	  icon: 'bold',
	  description: 'Bold'
	}, {
	  label: 'I',
	  style: 'ITALIC',
	  icon: 'italic',
	  description: 'Italic'
	}, {
	  label: 'U',
	  style: 'UNDERLINE',
	  icon: 'underline',
	  description: 'Underline'
	},
	// {
	//   label: 'S',
	//   style: 'STRIKETHROUGH',
	//   icon: 'strikethrough',
	//   description: 'Strikethrough',
	// },
	{
	  label: 'Hi',
	  style: 'HIGHLIGHT',
	  description: 'Highlight selection'
	}];

	Toolbar.propTypes = {
	  editorEnabled: _react.PropTypes.bool,
	  editorState: _react.PropTypes.object,
	  toggleBlockType: _react.PropTypes.func,
	  toggleInlineStyle: _react.PropTypes.func,
	  inlineButtons: _react.PropTypes.arrayOf(_react.PropTypes.object),
	  blockButtons: _react.PropTypes.arrayOf(_react.PropTypes.object),
	  editorNode: _react.PropTypes.object,
	  setLink: _react.PropTypes.func,
	  focus: _react.PropTypes.func
	};

	Toolbar.defaultProps = {
	  blockButtons: BLOCK_BUTTONS,
	  inlineButtons: INLINE_BUTTONS
	};

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StringToTypeMap = undefined;

	var _index = __webpack_require__(126);

	var _constants = __webpack_require__(70);

	/*
	This is a key value pair where the key is the string that is input while typing.
	While typing in an empty block, if the entered text matches any of the keys in
	this dictionary, that particular block's type will be changed to the value
	associated with that key.
	*/
	var StringToTypeMap = exports.StringToTypeMap = {
	  '--': _constants.Block.BLOCKQUOTE + ':' + _constants.Block.BLOCKQUOTE_CAPTION + ':' + _constants.Block.CAPTION,
	  // '""': Block.BLOCKQUOTE,
	  '> ': _constants.Block.BLOCKQUOTE,
	  // '\'\'': Block.BLOCKQUOTE,
	  '*.': _constants.Block.UL,
	  '* ': _constants.Block.UL,
	  '- ': _constants.Block.UL,
	  '1.': _constants.Block.OL,
	  '# ': _constants.Block.H1,
	  '##': _constants.Block.H2,
	  '==': _constants.Block.UNSTYLED,
	  '[]': _constants.Block.TODO
	};

	/*
	This function is called before text is input in a block in `draft-js`. It checks
	whether the input string (first 2 cahracters only) is present in the `StringToTypeMap`
	mapping or not. If present, it converts the current block's type and called the `editor`'s
	`onChange` function. Otherwise, does nothing. By defualt, the above key-value mapping
	is passed. In custom implementation, users can pass their own mapping or extend
	the current one.
	*/
	var beforeInput = function beforeInput(editorState, inputString, onChange) {
	  var mapping = arguments.length <= 3 || arguments[3] === undefined ? StringToTypeMap : arguments[3];

	  var selection = editorState.getSelection();
	  var block = (0, _index.getCurrentBlock)(editorState);
	  var blockType = block.getType();
	  if (blockType.indexOf('atomic') === 0) {
	    return false;
	  }
	  var blockLength = block.getLength();
	  if (selection.getAnchorOffset() > 1 || blockLength > 1) {
	    return false;
	  }
	  var blockTo = mapping[block.getText()[0] + inputString];
	  if (!blockTo) {
	    return false;
	  }
	  var finalType = blockTo.split(':');
	  if (finalType.length < 1 || finalType.length > 3) {
	    return false;
	  }
	  var fType = finalType[0];
	  if (finalType.length === 1) {
	    if (blockType === finalType[0]) {
	      return false;
	    }
	  } else if (finalType.length === 2) {
	    if (blockType === finalType[1]) {
	      return false;
	    }
	    if (blockType === finalType[0]) {
	      fType = finalType[1];
	    }
	  } else if (finalType.length === 3) {
	    if (blockType === finalType[2]) {
	      return false;
	    }
	    if (blockType === finalType[0]) {
	      fType = finalType[1];
	    } else {
	      fType = finalType[2];
	    }
	  }
	  onChange((0, _index.resetBlockWithType)(editorState, fType));
	  return true;
	};

	exports.default = beforeInput;

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _customStyleMap;

	var _constants = __webpack_require__(70);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/*
	Custom style map for custom entities like Hihglight.
	*/
	var customStyleMap = (_customStyleMap = {}, _defineProperty(_customStyleMap, _constants.Inline.HIGHLIGHT, {
	  backgroundColor: 'yellow'
	}), _defineProperty(_customStyleMap, _constants.Inline.CODE, {
	  fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
	  margin: '4px 0',
	  fontSize: '0.9em',
	  padding: '1px 3px',
	  color: '#555',
	  backgroundColor: '#fcfcfc',
	  border: '1px solid #ccc',
	  borderBottomColor: '#bbb',
	  borderRadius: 3,
	  boxShadow: 'inset 0 -1px 0 #bbb'
	}), _customStyleMap);

	exports.default = customStyleMap;

/***/ },

/***/ 487:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	Returns the `boundingClientRect` of the passed selection.
	*/
	var getSelectionRect = exports.getSelectionRect = function getSelectionRect(selected) {
	  var _rect = selected.getRangeAt(0).getBoundingClientRect();
	  // selected.getRangeAt(0).getBoundingClientRect()
	  var rect = _rect && _rect.top ? _rect : selected.getRangeAt(0).getClientRects()[0];
	  if (!rect) {
	    if (selected.anchorNode && selected.anchorNode.getBoundingClientRect) {
	      rect = selected.anchorNode.getBoundingClientRect();
	      rect.isEmptyline = true;
	    } else {
	      return null;
	    }
	  }
	  return rect;
	};

	/*
	Returns the native selection node.
	*/
	var getSelection = exports.getSelection = function getSelection(root) {
	  var t = null;
	  if (root.getSelection) {
	    t = root.getSelection();
	  } else if (root.document.getSelection) {
	    t = root.document.getSelection();
	  } else if (root.document.selection) {
	    t = root.document.selection.createRange().text;
	  }
	  return t;
	};

	/*
	Recursively finds the DOM Element of the block where the cursor is currently present.
	If not found, returns null.
	*/
	var getSelectedBlockNode = exports.getSelectedBlockNode = function getSelectedBlockNode(root) {
	  var selection = root.getSelection();
	  if (selection.rangeCount === 0) {
	    return null;
	  }
	  var node = selection.getRangeAt(0).startContainer;
	  // console.log(node);
	  do {
	    if (node.getAttribute && node.getAttribute('data-block') === 'true') {
	      return node;
	    }
	    node = node.parentNode;
	    // console.log(node);
	  } while (node !== null);
	  return null;
	};

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _draftJs = __webpack_require__(43);

	/*
	Emits various key commands to be used by `handleKeyCommand` in `Editor` based
	on various key combos.
	*/
	exports.default = function (e) {
	  if (e.altKey === true) {
	    if (e.shiftKey === true) {
	      switch (e.which) {
	        // Alt + Shift + A
	        case 65:
	          return 'add-new-block';
	        default:
	          return (0, _draftJs.getDefaultKeyBinding)(e);
	      }
	    }
	    switch (e.which) {
	      // 1
	      case 49:
	        return 'changetype:ordered-list-item';
	      // @
	      case 50:
	        return 'showlinkinput';
	      // #
	      case 51:
	        return 'changetype:header-three';
	      // *
	      case 56:
	        return 'changetype:unordered-list-item';
	      // <
	      case 188:
	        return 'changetype:caption';
	      // // -
	      // case 189: return 'changetype:caption';
	      // >
	      case 190:
	        return 'changetype:unstyled';
	      // "
	      case 222:
	        return 'changetype:blockquote';
	      default:
	        return (0, _draftJs.getDefaultKeyBinding)(e);
	    }
	  }
	  return (0, _draftJs.getDefaultKeyBinding)(e);
	};

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Map;

	var _immutable = __webpack_require__(55);

	var _draftJs = __webpack_require__(43);

	var _constants = __webpack_require__(70);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/*
	Mapping that returns containers for the various block types.
	*/
	var RenderMap = (0, _immutable.Map)((_Map = {}, _defineProperty(_Map, _constants.Block.CAPTION, {
	  element: 'cite'
	}), _defineProperty(_Map, _constants.Block.BLOCKQUOTE_CAPTION, {
	  element: 'blockquote'
	}), _defineProperty(_Map, _constants.Block.TODO, {
	  element: 'div'
	}), _defineProperty(_Map, _constants.Block.IMAGE, {
	  element: 'figure'
	}), _defineProperty(_Map, _constants.Block.BREAK, {
	  element: 'div'
	}), _Map)).merge(_draftJs.DefaultDraftBlockRenderMap);

	exports.default = RenderMap;

/***/ },

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

	var _mediumDraft = __webpack_require__(1115);

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
	      editorState: (0, _mediumDraft.createEditorState)() };

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
	            _react2.default.createElement(_mediumDraft.Editor, {
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

/***/ },

/***/ 885:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isSoftNewlineEvent
	 * @typechecks
	 * 
	 */

	'use strict';

	var Keys = __webpack_require__(184);

	function isSoftNewlineEvent(e) {
	  return e.which === Keys.RETURN && (e.getModifierState('Shift') || e.getModifierState('Alt') || e.getModifierState('Control'));
	}

	module.exports = isSoftNewlineEvent;

/***/ },

/***/ 903:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var invariant = __webpack_require__(3);

	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */

	/* Slow implementation for browsers that don't natively support .matches() */
	function matchesSelector_SLOW(element, selector) {
	  var root = element;
	  while (root.parentNode) {
	    root = root.parentNode;
	  }

	  var all = root.querySelectorAll(selector);
	  return Array.prototype.indexOf.call(all, element) !== -1;
	}

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function addClass(element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },

	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },

	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },

	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to check the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : void 0;
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  },

	  /**
	   * Tests whether the element matches the selector specified
	   *
	   * @param {DOMNode|DOMWindow} element the element that we are querying
	   * @param {string} selector the CSS selector
	   * @return {boolean} true if the element matches the selector, false if not
	   */
	  matchesSelector: function matchesSelector(element, selector) {
	    var matchesImpl = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || function (s) {
	      return matchesSelector_SLOW(element, s);
	    };
	    return matchesImpl.call(element, selector);
	  }

	};

	module.exports = CSSCore;

/***/ },

/***/ 1111:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(1157);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _util = __webpack_require__(487);

	var _image = __webpack_require__(482);

	var _image2 = _interopRequireDefault(_image);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import './addbutton.scss';

	/*
	Implementation of the medium-link side `+` button to insert various rich blocks
	like Images/Embeds/Videos.
	*/
	var AddButton = function (_React$Component) {
	  _inherits(AddButton, _React$Component);

	  function AddButton(props) {
	    _classCallCheck(this, AddButton);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddButton).call(this, props));

	    _this.state = {
	      style: {},
	      visible: false,
	      isOpen: false
	    };
	    _this.node = null;
	    _this.blockKey = '';
	    _this.blockType = '';
	    _this.blockLength = -1;

	    _this.findNode = _this.findNode.bind(_this);
	    _this.hideBlock = _this.hideBlock.bind(_this);
	    _this.openToolbar = _this.openToolbar.bind(_this);
	    return _this;
	  }

	  // To show + button only when text length == 0


	  _createClass(AddButton, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var editorState = newProps.editorState;

	      var contentState = editorState.getCurrentContent();
	      var selectionState = editorState.getSelection();
	      if (!selectionState.isCollapsed() || selectionState.anchorKey !== selectionState.focusKey) {
	        // console.log('no sel');
	        this.hideBlock();
	        return;
	      }
	      var block = contentState.getBlockForKey(selectionState.anchorKey);
	      var bkey = block.getKey();
	      if (block.getLength() > 0) {
	        this.hideBlock();
	        return;
	      }
	      if (block.getType() !== this.blockType) {
	        this.blockType = block.getType();
	        if (block.getLength() === 0) {
	          setTimeout(this.findNode, 0);
	        }
	        return;
	      }
	      if (this.blockKey === bkey) {
	        // console.log('block exists');
	        if (block.getLength() > 0) {
	          this.hideBlock();
	        } else {
	          this.setState({
	            visible: true
	          });
	        }
	        return;
	      }
	      this.blockKey = bkey;
	      if (block.getLength() > 0) {
	        // console.log('no len');
	        this.hideBlock();
	        return;
	      }
	      setTimeout(this.findNode, 0);
	    }

	    // Show + button regardless of block length
	    // componentWillReceiveProps(newProps) {
	    //   const { editorState } = newProps;
	    //   const contentState = editorState.getCurrentContent();
	    //   const selectionState = editorState.getSelection();
	    //   if (!selectionState.isCollapsed() || selectionState.anchorKey != selectionState.focusKey) {
	    //     this.hideBlock();
	    //     return;
	    //   }
	    //   const block = contentState.getBlockForKey(selectionState.anchorKey);
	    //   const bkey = block.getKey();
	    //   if (block.getType() !== this.blockType) {
	    //     this.blockType = block.getType();
	    //     setTimeout(this.findNode, 0);
	    //     return;
	    //   }
	    //   if (this.blockKey === bkey) {
	    //     this.setState({
	    //       visible: true
	    //     });
	    //     return;
	    //   }
	    //   this.blockKey = bkey;
	    //   setTimeout(this.findNode, 0);
	    // }

	  }, {
	    key: 'hideBlock',
	    value: function hideBlock() {
	      if (this.state.visible) {
	        this.setState({
	          visible: false,
	          isOpen: false
	        });
	      }
	    }
	  }, {
	    key: 'openToolbar',
	    value: function openToolbar() {
	      this.setState({
	        isOpen: !this.state.isOpen
	      }, this.props.focus);
	    }
	  }, {
	    key: 'findNode',
	    value: function findNode() {
	      // eslint-disable-next-line no-undef
	      var node = (0, _util.getSelectedBlockNode)(window);
	      if (node === this.node) {
	        // console.log('Node exists');
	        return;
	      }
	      if (!node) {
	        // console.log('no node');
	        this.setState({
	          visible: false,
	          isOpen: false
	        });
	        return;
	      }
	      // const rect = node.getBoundingClientRect();
	      this.node = node;
	      this.setState({
	        visible: true,
	        style: {
	          top: node.offsetTop - 3
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (this.state.visible) {
	        var btns = [];
	        btns.push(_react2.default.createElement(_image2.default, {
	          key: 'img',
	          getEditorState: this.props.getEditorState,
	          setEditorState: this.props.setEditorState,
	          close: this.openToolbar
	        }));
	        // btns.push(
	        //   <BreakButton
	        //     key="break"
	        //     getEditorState={this.props.getEditorState}
	        //     setEditorState={this.props.setEditorState}
	        //     close={this.openToolbar}
	        //   />
	        // );
	        // btns.push(<button key="embed" className="md-sb-button md-sb-img-button">E</button>);
	        return _react2.default.createElement(
	          'div',
	          { className: 'md-side-toolbar', style: this.state.style },
	          _react2.default.createElement(
	            'button',
	            {
	              onClick: this.openToolbar,
	              className: 'md-sb-button add-button' + (this.state.isOpen ? ' open-button' : '')
	            },
	            _react2.default.createElement('i', { className: 'fa fa-plus-circle fa-lg' })
	          ),
	          this.state.isOpen ? _react2.default.createElement(
	            _reactAddonsCssTransitionGroup2.default,
	            {
	              transitionName: 'example',
	              transitionEnterTimeout: 200,
	              transitionLeaveTimeout: 100,
	              transitionAppear: true,
	              transitionAppearTimeout: 100
	            },
	            this.props.sideButtons.map(function (button) {
	              var Button = button.component;
	              return _react2.default.createElement(Button, {
	                key: button.title,
	                getEditorState: _this2.props.getEditorState,
	                setEditorState: _this2.props.setEditorState,
	                close: _this2.openToolbar
	              });
	            })
	          ) : null
	        );
	      }
	      return null;
	    }
	  }]);

	  return AddButton;
	}(_react2.default.Component);

	exports.default = AddButton;


	AddButton.propTypes = {
	  focus: _react.PropTypes.func,
	  getEditorState: _react.PropTypes.func.isRequired,
	  setEditorState: _react.PropTypes.func.isRequired,
	  sideButtons: _react.PropTypes.arrayOf(_react.PropTypes.object)
	};

/***/ },

/***/ 1112:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _draftJs = __webpack_require__(43);

	var _stylebutton = __webpack_require__(483);

	var _stylebutton2 = _interopRequireDefault(_stylebutton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BlockToolbar = function BlockToolbar(props) {
	  if (props.buttons.length < 1) {
	    return null;
	  }
	  var editorState = props.editorState;
	  // const selection = editorState.getSelection();

	  var blockType = _draftJs.RichUtils.getCurrentBlockType(editorState);
	  return _react2.default.createElement(
	    'div',
	    { className: 'RichEditor-controls' },
	    props.buttons.map(function (type) {
	      var iconLabel = {};
	      iconLabel.label = type.label;
	      // if (type.icon) {
	      //   iconLabel.icon = type.icon;
	      // } else {
	      //   iconLabel.label = type.label;
	      // }
	      return _react2.default.createElement(_stylebutton2.default, _extends({}, iconLabel, {
	        key: type.style,
	        active: type.style === blockType,
	        onToggle: props.onToggle,
	        style: type.style,
	        description: type.description
	      }));
	    })
	  );
	};

	BlockToolbar.propTypes = {
	  buttons: _react.PropTypes.array,
	  editorState: _react.PropTypes.object.isRequired,
	  onToggle: _react.PropTypes.func
	};

	exports.default = BlockToolbar;

/***/ },

/***/ 1113:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _stylebutton = __webpack_require__(483);

	var _stylebutton2 = _interopRequireDefault(_stylebutton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InlineToolbar = function InlineToolbar(props) {
	  if (props.buttons.length < 1) {
	    return null;
	  }
	  var currentStyle = props.editorState.getCurrentInlineStyle();
	  return _react2.default.createElement(
	    'div',
	    { className: 'RichEditor-controls' },
	    props.buttons.map(function (type) {
	      var iconLabel = {};
	      iconLabel.label = type.label;
	      // if (type.icon) {
	      //   iconLabel.icon = type.icon;
	      // } else {
	      //   iconLabel.label = type.label;
	      // }
	      return _react2.default.createElement(_stylebutton2.default, _extends({}, iconLabel, {
	        key: type.style,
	        active: currentStyle.has(type.style),
	        onToggle: props.onToggle,
	        style: type.style,
	        description: type.description
	      }));
	    })
	  );
	};

	InlineToolbar.propTypes = {
	  buttons: _react.PropTypes.array,
	  editorState: _react.PropTypes.object.isRequired,
	  onToggle: _react.PropTypes.func
	};

	exports.default = InlineToolbar;

/***/ },

/***/ 1114:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _draftJs = __webpack_require__(43);

	var _isSoftNewlineEvent = __webpack_require__(885);

	var _isSoftNewlineEvent2 = _interopRequireDefault(_isSoftNewlineEvent);

	var _addbutton = __webpack_require__(1111);

	var _addbutton2 = _interopRequireDefault(_addbutton);

	var _toolbar = __webpack_require__(484);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	var _customrenderer = __webpack_require__(480);

	var _customrenderer2 = _interopRequireDefault(_customrenderer);

	var _customstylemap = __webpack_require__(486);

	var _customstylemap2 = _interopRequireDefault(_customstylemap);

	var _rendermap = __webpack_require__(489);

	var _rendermap2 = _interopRequireDefault(_rendermap);

	var _keybinding = __webpack_require__(488);

	var _keybinding2 = _interopRequireDefault(_keybinding);

	var _constants = __webpack_require__(70);

	var _beforeinput = __webpack_require__(485);

	var _beforeinput2 = _interopRequireDefault(_beforeinput);

	var _blockStyleFn = __webpack_require__(1117);

	var _blockStyleFn2 = _interopRequireDefault(_blockStyleFn);

	var _model = __webpack_require__(126);

	var _image = __webpack_require__(482);

	var _image2 = _interopRequireDefault(_image);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*
	A wrapper over `draft-js`'s default **Editor*component which provides
	some built-in customisations like custom blocks (todo, caption, etc) and
	some key handling for ease of use so that users' mouse usage is minimum.
	*/
	var MediumDraftEditor = function (_React$Component) {
	  _inherits(MediumDraftEditor, _React$Component);

	  function MediumDraftEditor(props) {
	    _classCallCheck(this, MediumDraftEditor);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MediumDraftEditor).call(this, props));

	    _this.focus = function () {
	      return _this._editorNode.focus();
	    };
	    _this.onChange = function (editorState) {
	      _this.props.onChange(editorState);
	    };

	    _this.getEditorState = function () {
	      return _this.props.editorState;
	    };

	    _this.onTab = _this.onTab.bind(_this);
	    _this.handleKeyCommand = _this.handleKeyCommand.bind(_this);
	    _this.handleBeforeInput = _this.handleBeforeInput.bind(_this);
	    _this.handleReturn = _this.handleReturn.bind(_this);
	    _this.handleDroppedFiles = _this.handleDroppedFiles.bind(_this);
	    _this.toggleBlockType = _this._toggleBlockType.bind(_this);
	    _this.toggleInlineStyle = _this._toggleInlineStyle.bind(_this);
	    _this.setLink = _this.setLink.bind(_this);
	    _this.blockRendererFn = _this.props.rendererFn(_this.onChange, _this.getEditorState);
	    return _this;
	  }

	  // componentDidMount() {
	  //   this.focus();
	  // }


	  /*
	  Implemented to provide nesting of upto 2 levels in ULs or OLs.
	  */


	  _createClass(MediumDraftEditor, [{
	    key: 'onTab',
	    value: function onTab(e) {
	      var editorState = this.props.editorState;

	      var newEditorState = _draftJs.RichUtils.onTab(e, editorState, 2);
	      if (newEditorState !== editorState) {
	        this.onChange(newEditorState);
	      }
	    }

	    /*
	    Adds a hyperlink on the selected text with some basic checks.
	    */

	  }, {
	    key: 'setLink',
	    value: function setLink(url) {
	      var editorState = this.props.editorState;

	      var selection = editorState.getSelection();
	      var entityKey = null;
	      var newUrl = url;
	      if (url !== '') {
	        if (url.indexOf('@') >= 0) {
	          newUrl = 'mailto:' + newUrl;
	        } else if (url.indexOf('http') === -1) {
	          newUrl = 'http://' + newUrl;
	        }
	        entityKey = _draftJs.Entity.create(_constants.Entity.LINK, 'MUTABLE', { url: newUrl });
	      }
	      this.onChange(_draftJs.RichUtils.toggleLink(editorState, selection, entityKey), this.focus);
	    }

	    // addMedia() {
	    // const src = window.prompt('Enter a URL');
	    // if (!src) {
	    //   return;
	    // }
	    // const entityKey = Entity.create('image', 'IMMUTABLE', {src});
	    // this.onChange(
	    //   AtomicBlockUtils.insertAtomicBlock(
	    //     this.props.editorState,
	    //     entityKey,
	    //     ' '
	    //   )
	    // );
	    // }


	    /*
	    Implemented to just pass it on to the parent component. Will add some
	    customizations later or as when needed.
	    */

	  }, {
	    key: 'handleDroppedFiles',
	    value: function handleDroppedFiles(selection, files) {
	      if (this.props.handleDroppedFiles) {
	        this.props.handleDroppedFiles(selection, files);
	      }
	    }

	    /*
	    Handles custom commands based on various key combinations. First checks
	    for some built-in commands. If found, that command's function is apllied and returns.
	    If not found, it checks whether parent component handles that command or not.
	    Some of the internal commands are:
	     - showlinkinput -> Opens up the link input tooltip if some text is selected.
	    - add-new-block -> Adds a new block at the current cursor position.
	    - changetype:block-type -> If the command starts with `changetype:` and
	      then succeeded by the block type, the current block will be converted to that particular type.
	    - toggleinline:inline-type -> If the command starts with `toggleinline:` and
	      then succeeded by the inline type, the current selection's inline type will be
	      togglled.
	    */

	  }, {
	    key: 'handleKeyCommand',
	    value: function handleKeyCommand(command) {
	      // console.log(command);
	      if (this.props.handleKeyCommand && this.props.handleKeyCommand(command)) {
	        return true;
	      }
	      if (command === 'showlinkinput') {
	        if (this.toolbar) {
	          this.toolbar.handleLinkInput(null, true);
	        }
	        return true;
	      } else if (command === 'add-new-block') {
	        var _editorState = this.props.editorState;

	        this.onChange((0, _model.addNewBlock)(_editorState, _constants.Block.BLOCKQUOTE));
	        return true;
	      }
	      var editorState = this.props.editorState;

	      var block = (0, _model.getCurrentBlock)(editorState);
	      if (command.indexOf('changetype:') === 0) {
	        var newBlockType = command.split(':')[1];
	        var currentBlockType = block.getType();
	        if (currentBlockType === _constants.Block.ATOMIC || currentBlockType === 'media') {
	          return false;
	        }
	        if (currentBlockType === _constants.Block.BLOCKQUOTE && newBlockType === _constants.Block.CAPTION) {
	          newBlockType = _constants.Block.BLOCKQUOTE_CAPTION;
	        } else if (currentBlockType === _constants.Block.BLOCKQUOTE_CAPTION && newBlockType === _constants.Block.CAPTION) {
	          newBlockType = _constants.Block.BLOCKQUOTE;
	        }
	        this.onChange(_draftJs.RichUtils.toggleBlockType(editorState, newBlockType));
	        return true;
	      } else if (command.indexOf('toggleinline:') === 0) {
	        var inline = command.split(':')[1];
	        this._toggleInlineStyle(inline);
	        return true;
	      }
	      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
	      if (newState) {
	        this.onChange(newState);
	        return true;
	      }
	      return false;
	    }

	    /*
	    This function is responsible for emitting various commands based on various key combos.
	    */

	  }, {
	    key: 'handleBeforeInput',
	    value: function handleBeforeInput(str) {
	      return this.props.beforeInput(this.props.editorState, str, this.onChange, this.props.stringToTypeMap);
	    }

	    /*
	    By default, it handles return key for inserting soft breaks (BRs in HTML) and
	    also instead of inserting a new empty block after current empty block, it first check
	    whether the current block is of a type other than `unstyled`. If yes, current block is
	    simply converted to an unstyled empty block. If RETURN is pressed on an unstyled block
	    default behavior is executed.
	    */

	  }, {
	    key: 'handleReturn',
	    value: function handleReturn(e) {
	      if (this.props.handleReturn) {
	        if (this.props.handleReturn()) {
	          return true;
	        }
	      }
	      var editorState = this.props.editorState;

	      if ((0, _isSoftNewlineEvent2.default)(e)) {
	        this.onChange(_draftJs.RichUtils.insertSoftNewline(editorState));
	        return true;
	      }
	      if (!e.altKey && !e.metaKey && !e.ctrlKey) {
	        var currentBlock = (0, _model.getCurrentBlock)(editorState);
	        var blockType = currentBlock.getType();

	        if (blockType.indexOf('atomic') === 0) {
	          this.onChange((0, _model.addNewBlockAt)(editorState, currentBlock.getKey()));
	          return true;
	        }

	        if (currentBlock.getLength() === 0) {
	          switch (blockType) {
	            case _constants.Block.UL:
	            case _constants.Block.OL:
	            case _constants.Block.BLOCKQUOTE:
	            case _constants.Block.BLOCKQUOTE_CAPTION:
	            case _constants.Block.CAPTION:
	            case _constants.Block.TODO:
	            case _constants.Block.H2:
	            case _constants.Block.H3:
	            case _constants.Block.H1:
	              this.onChange((0, _model.resetBlockWithType)(editorState, _constants.Block.UNSTYLED));
	              return true;
	            default:
	              return false;
	          }
	        }

	        var selection = editorState.getSelection();

	        if (selection.isCollapsed() && currentBlock.getLength() === selection.getStartOffset()) {
	          if (this.props.continuousBlocks.indexOf(blockType) < 0) {
	            this.onChange((0, _model.addNewBlockAt)(editorState, currentBlock.getKey()));
	            return true;
	          }
	          return false;
	        }
	        return false;
	      }
	      return false;
	    }

	    /*
	    The function documented in `draft-js` to be used to toggle block types (mainly
	    for some key combinations handled by default inside draft-js).
	    */

	  }, {
	    key: '_toggleBlockType',
	    value: function _toggleBlockType(blockType) {
	      var type = _draftJs.RichUtils.getCurrentBlockType(this.props.editorState);
	      if (type.indexOf('atomic:') === 0) {
	        return;
	      }
	      this.onChange(_draftJs.RichUtils.toggleBlockType(this.props.editorState, blockType));
	    }

	    /*
	    The function documented in `draft-js` to be used to toggle inline styles of selection (mainly
	    for some key combinations handled by default inside draft-js).
	    */

	  }, {
	    key: '_toggleInlineStyle',
	    value: function _toggleInlineStyle(inlineStyle) {
	      var type = _draftJs.RichUtils.getCurrentBlockType(this.props.editorState);
	      if (type.indexOf('header') === 0) {
	        return;
	      }
	      this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle));
	    }

	    /*
	    Renders the `Editor`, `Toolbar` and the side `AddButton`.
	    */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var editorState = _props.editorState;
	      var editorEnabled = _props.editorEnabled;
	      // const currentBlockType = RichUtils.getCurrentBlockType(this.props.editorState);

	      var showAddButton = editorEnabled; // && currentBlockType.indexOf('atomic:') < 0;
	      return _react2.default.createElement(
	        'div',
	        { className: 'RichEditor-root' },
	        _react2.default.createElement(
	          'div',
	          { className: 'RichEditor-editor' },
	          _react2.default.createElement(_draftJs.Editor, _extends({
	            ref: function ref(node) {
	              _this2._editorNode = node;
	            }
	          }, this.props, {
	            editorState: editorState,
	            blockRendererFn: this.blockRendererFn,
	            blockStyleFn: this.props.blockStyleFn,
	            onChange: this.onChange,
	            onTab: this.onTab,
	            blockRenderMap: this.props.blockRenderMap,
	            handleKeyCommand: this.handleKeyCommand,
	            handleBeforeInput: this.handleBeforeInput,
	            handleDroppedFiles: this.handleDroppedFiles,
	            handleReturn: this.handleReturn,
	            customStyleMap: this.props.customStyleMap,
	            readOnly: !editorEnabled,
	            keyBindingFn: this.props.keyBindingFn,
	            placeholder: this.props.placeholder,
	            spellCheck: editorEnabled && this.props.spellCheck
	          })),
	          showAddButton ? _react2.default.createElement(_addbutton2.default, {
	            editorState: editorState,
	            getEditorState: this.getEditorState,
	            setEditorState: this.onChange,
	            focus: this.focus,
	            sideButtons: this.props.sideButtons
	          }) : null,
	          _react2.default.createElement(_toolbar2.default, {
	            ref: function ref(c) {
	              _this2.toolbar = c;
	            },
	            editorNode: this._editorNode,
	            editorState: editorState,
	            toggleBlockType: this.toggleBlockType,
	            toggleInlineStyle: this.toggleInlineStyle,
	            editorEnabled: editorEnabled,
	            setLink: this.setLink,
	            focus: this.focus,
	            blockButtons: this.props.blockButtons,
	            inlineButtons: this.props.inlineButtons
	          })
	        )
	      );
	    }
	  }]);

	  return MediumDraftEditor;
	}(_react2.default.Component);

	MediumDraftEditor.propTypes = {
	  beforeInput: _react.PropTypes.func,
	  keyBindingFn: _react.PropTypes.func,
	  customStyleMap: _react.PropTypes.object,
	  blockStyleFn: _react.PropTypes.func,
	  rendererFn: _react.PropTypes.func,
	  editorEnabled: _react.PropTypes.bool,
	  spellCheck: _react.PropTypes.bool,
	  stringToTypeMap: _react.PropTypes.object,
	  blockRenderMap: _react.PropTypes.object,
	  blockButtons: _react.PropTypes.array,
	  inlineButtons: _react.PropTypes.array,
	  placeholder: _react.PropTypes.string,
	  continuousBlocks: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  sideButtons: _react.PropTypes.arrayOf(_react.PropTypes.object),
	  editorState: _react.PropTypes.object.isRequired,
	  onChange: _react.PropTypes.func.isRequired,
	  handleDroppedFiles: _react.PropTypes.func,
	  handleKeyCommand: _react.PropTypes.func,
	  handleReturn: _react.PropTypes.func
	};

	MediumDraftEditor.defaultProps = {
	  beforeInput: _beforeinput2.default,
	  keyBindingFn: _keybinding2.default,
	  customStyleMap: _customstylemap2.default,
	  blockStyleFn: _blockStyleFn2.default,
	  rendererFn: _customrenderer2.default,
	  editorEnabled: true,
	  spellCheck: true,
	  stringToTypeMap: _beforeinput.StringToTypeMap,
	  blockRenderMap: _rendermap2.default,
	  blockButtons: _toolbar.BLOCK_BUTTONS,
	  inlineButtons: _toolbar.INLINE_BUTTONS,
	  placeholder: 'Write your story...',
	  continuousBlocks: [_constants.Block.UNSTYLED, _constants.Block.BLOCKQUOTE, _constants.Block.OL, _constants.Block.UL, _constants.Block.CODE, _constants.Block.TODO],
	  sideButtons: [{
	    title: 'Image',
	    component: _image2.default
	  }]
	};

	exports.default = MediumDraftEditor;

/***/ },

/***/ 1115:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BreakBlock = exports.ImageBlock = exports.TodoBlock = exports.AtomicBlock = exports.CaptionBlock = exports.QuoteCaptionBlock = exports.rendererFn = exports.keyBindingFn = exports.customStyleMap = exports.beforeInput = exports.findLinkEntities = exports.Link = exports.RenderMap = exports.StringToTypeMap = exports.createEditorState = exports.Editor = exports.addNewBlockAt = exports.updateDataOfBlock = exports.resetBlockWithType = exports.addNewBlock = exports.getCurrentBlock = exports.getDefaultBlockData = exports.INLINE_BUTTONS = exports.BLOCK_BUTTONS = exports.Entity = exports.Inline = exports.Block = undefined;

	var _constants = __webpack_require__(70);

	Object.defineProperty(exports, 'Block', {
	  enumerable: true,
	  get: function get() {
	    return _constants.Block;
	  }
	});
	Object.defineProperty(exports, 'Inline', {
	  enumerable: true,
	  get: function get() {
	    return _constants.Inline;
	  }
	});
	Object.defineProperty(exports, 'Entity', {
	  enumerable: true,
	  get: function get() {
	    return _constants.Entity;
	  }
	});

	var _toolbar = __webpack_require__(484);

	Object.defineProperty(exports, 'BLOCK_BUTTONS', {
	  enumerable: true,
	  get: function get() {
	    return _toolbar.BLOCK_BUTTONS;
	  }
	});
	Object.defineProperty(exports, 'INLINE_BUTTONS', {
	  enumerable: true,
	  get: function get() {
	    return _toolbar.INLINE_BUTTONS;
	  }
	});

	var _model = __webpack_require__(126);

	Object.defineProperty(exports, 'getDefaultBlockData', {
	  enumerable: true,
	  get: function get() {
	    return _model.getDefaultBlockData;
	  }
	});
	Object.defineProperty(exports, 'getCurrentBlock', {
	  enumerable: true,
	  get: function get() {
	    return _model.getCurrentBlock;
	  }
	});
	Object.defineProperty(exports, 'addNewBlock', {
	  enumerable: true,
	  get: function get() {
	    return _model.addNewBlock;
	  }
	});
	Object.defineProperty(exports, 'resetBlockWithType', {
	  enumerable: true,
	  get: function get() {
	    return _model.resetBlockWithType;
	  }
	});
	Object.defineProperty(exports, 'updateDataOfBlock', {
	  enumerable: true,
	  get: function get() {
	    return _model.updateDataOfBlock;
	  }
	});
	Object.defineProperty(exports, 'addNewBlockAt', {
	  enumerable: true,
	  get: function get() {
	    return _model.addNewBlockAt;
	  }
	});

	var _editor = __webpack_require__(1114);

	var _editor2 = _interopRequireDefault(_editor);

	var _beforeinput = __webpack_require__(485);

	var _beforeinput2 = _interopRequireDefault(_beforeinput);

	var _rendermap = __webpack_require__(489);

	var _rendermap2 = _interopRequireDefault(_rendermap);

	var _link = __webpack_require__(481);

	var _link2 = _interopRequireDefault(_link);

	var _keybinding = __webpack_require__(488);

	var _keybinding2 = _interopRequireDefault(_keybinding);

	var _customrenderer = __webpack_require__(480);

	var _customrenderer2 = _interopRequireDefault(_customrenderer);

	var _customstylemap = __webpack_require__(486);

	var _customstylemap2 = _interopRequireDefault(_customstylemap);

	var _content = __webpack_require__(1116);

	var _content2 = _interopRequireDefault(_content);

	var _blockquotecaption = __webpack_require__(475);

	var _blockquotecaption2 = _interopRequireDefault(_blockquotecaption);

	var _caption = __webpack_require__(477);

	var _caption2 = _interopRequireDefault(_caption);

	var _atomic = __webpack_require__(474);

	var _atomic2 = _interopRequireDefault(_atomic);

	var _todo = __webpack_require__(479);

	var _todo2 = _interopRequireDefault(_todo);

	var _image = __webpack_require__(478);

	var _image2 = _interopRequireDefault(_image);

	var _break = __webpack_require__(476);

	var _break2 = _interopRequireDefault(_break);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Editor = _editor2.default;
	exports.createEditorState = _content2.default;
	exports.StringToTypeMap = _beforeinput.StringToTypeMap;
	exports.RenderMap = _rendermap2.default;
	exports.Link = _link2.default;
	exports.findLinkEntities = _link.findLinkEntities;
	exports.beforeInput = _beforeinput2.default;
	exports.customStyleMap = _customstylemap2.default;
	exports.keyBindingFn = _keybinding2.default;
	exports.rendererFn = _customrenderer2.default;
	exports.QuoteCaptionBlock = _blockquotecaption2.default;
	exports.CaptionBlock = _caption2.default;
	exports.AtomicBlock = _atomic2.default;
	exports.TodoBlock = _todo2.default;
	exports.ImageBlock = _image2.default;
	exports.BreakBlock = _break2.default;

/***/ },

/***/ 1116:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _draftJs = __webpack_require__(43);

	var _link = __webpack_require__(481);

	var _link2 = _interopRequireDefault(_link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var decorator = new _draftJs.CompositeDecorator([{
	  strategy: _link.findLinkEntities,
	  component: _link2.default
	}]);

	var createEditorState = function createEditorState() {
	  var content = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	  var decorators = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  if (content === null) {
	    return _draftJs.EditorState.createEmpty(decorator);
	  }
	  var dec = decorator;
	  if (decorators !== null) {
	    dec = decorators;
	  }
	  return _draftJs.EditorState.createWithContent((0, _draftJs.convertFromRaw)(content), dec);
	};

	exports.default = createEditorState;

/***/ },

/***/ 1117:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(70);

	/*
	Get custom classnames for each of the different block types supported.
	*/
	exports.default = function (block) {
	  switch (block.getType()) {
	    case _constants.Block.BLOCKQUOTE:
	      return 'block block-quote RichEditor-blockquote';
	    case _constants.Block.UNSTYLED:
	      return 'block block-paragraph';
	    case _constants.Block.ATOMIC:
	      return 'block block-atomic';
	    case _constants.Block.CAPTION:
	      return 'block block-caption';
	    case _constants.Block.TODO:
	      return 'block block-paragraph block-todo';
	    case _constants.Block.IMAGE:
	      return 'block block-image';
	    case _constants.Block.BLOCKQUOTE_CAPTION:
	      return 'block block-quote RichEditor-blockquote block-quote-caption';
	    default:
	      return 'block';
	  }
	};

/***/ },

/***/ 1157:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1213);

/***/ },

/***/ 1213:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCSSTransitionGroup
	 */

	'use strict';

	var _assign = __webpack_require__(9);

	var React = __webpack_require__(157);

	var ReactTransitionGroup = __webpack_require__(528);
	var ReactCSSTransitionGroupChild = __webpack_require__(1214);

	function createTransitionTimeoutPropValidator(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;

	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to ReactCSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	        }
	    }
	  };
	}

	/**
	 * An easy way to perform CSS transitions and animations when a React component
	 * enters or leaves the DOM.
	 * See https://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup
	 */
	var ReactCSSTransitionGroup = React.createClass({
	  displayName: 'ReactCSSTransitionGroup',

	  propTypes: {
	    transitionName: ReactCSSTransitionGroupChild.propTypes.name,

	    transitionAppear: React.PropTypes.bool,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool,
	    transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
	    transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
	    transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
	  },

	  getDefaultProps: function () {
	    return {
	      transitionAppear: false,
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },

	  _wrapChild: function (child) {
	    // We need to provide this childFactory so that
	    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	    // leave while it is leaving.
	    return React.createElement(ReactCSSTransitionGroupChild, {
	      name: this.props.transitionName,
	      appear: this.props.transitionAppear,
	      enter: this.props.transitionEnter,
	      leave: this.props.transitionLeave,
	      appearTimeout: this.props.transitionAppearTimeout,
	      enterTimeout: this.props.transitionEnterTimeout,
	      leaveTimeout: this.props.transitionLeaveTimeout
	    }, child);
	  },

	  render: function () {
	    return React.createElement(ReactTransitionGroup, _assign({}, this.props, { childFactory: this._wrapChild }));
	  }
	});

	module.exports = ReactCSSTransitionGroup;

/***/ },

/***/ 1214:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCSSTransitionGroupChild
	 */

	'use strict';

	var React = __webpack_require__(157);
	var ReactDOM = __webpack_require__(516);

	var CSSCore = __webpack_require__(903);
	var ReactTransitionEvents = __webpack_require__(1254);

	var onlyChild = __webpack_require__(539);

	var TICK = 17;

	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',

	  propTypes: {
	    name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      active: React.PropTypes.string
	    }), React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      enterActive: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      leaveActive: React.PropTypes.string,
	      appear: React.PropTypes.string,
	      appearActive: React.PropTypes.string
	    })]).isRequired,

	    // Once we require timeouts to be specified, we can remove the
	    // boolean flags (appear etc.) and just accept a number
	    // or a bool for the timeout flags (appearTimeout etc.)
	    appear: React.PropTypes.bool,
	    enter: React.PropTypes.bool,
	    leave: React.PropTypes.bool,
	    appearTimeout: React.PropTypes.number,
	    enterTimeout: React.PropTypes.number,
	    leaveTimeout: React.PropTypes.number
	  },

	  transition: function (animationType, finishCallback, userSpecifiedDelay) {
	    var node = ReactDOM.findDOMNode(this);

	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }

	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timeout = null;

	    var endListener = function (e) {
	      if (e && e.target !== node) {
	        return;
	      }

	      clearTimeout(timeout);

	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);

	      ReactTransitionEvents.removeEndEventListener(node, endListener);

	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };

	    CSSCore.addClass(node, className);

	    // Need to do this to actually trigger a transition.
	    this.queueClassAndNode(activeClassName, node);

	    // If the user specified a timeout delay.
	    if (userSpecifiedDelay) {
	      // Clean-up the animation after the specified delay
	      timeout = setTimeout(endListener, userSpecifiedDelay);
	      this.transitionTimeouts.push(timeout);
	    } else {
	      // DEPRECATED: this listener will be removed in a future version of react
	      ReactTransitionEvents.addEndEventListener(node, endListener);
	    }
	  },

	  queueClassAndNode: function (className, node) {
	    this.classNameAndNodeQueue.push({
	      className: className,
	      node: node
	    });

	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameAndNodeQueue, TICK);
	    }
	  },

	  flushClassNameAndNodeQueue: function () {
	    if (this.isMounted()) {
	      this.classNameAndNodeQueue.forEach(function (obj) {
	        CSSCore.addClass(obj.node, obj.className);
	      });
	    }
	    this.classNameAndNodeQueue.length = 0;
	    this.timeout = null;
	  },

	  componentWillMount: function () {
	    this.classNameAndNodeQueue = [];
	    this.transitionTimeouts = [];
	  },

	  componentWillUnmount: function () {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });

	    this.classNameAndNodeQueue.length = 0;
	  },

	  componentWillAppear: function (done) {
	    if (this.props.appear) {
	      this.transition('appear', done, this.props.appearTimeout);
	    } else {
	      done();
	    }
	  },

	  componentWillEnter: function (done) {
	    if (this.props.enter) {
	      this.transition('enter', done, this.props.enterTimeout);
	    } else {
	      done();
	    }
	  },

	  componentWillLeave: function (done) {
	    if (this.props.leave) {
	      this.transition('leave', done, this.props.leaveTimeout);
	    } else {
	      done();
	    }
	  },

	  render: function () {
	    return onlyChild(this.props.children);
	  }
	});

	module.exports = ReactCSSTransitionGroupChild;

/***/ },

/***/ 1254:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(21);

	var getVendorPrefixedEventName = __webpack_require__(536);

	var endEvents = [];

	function detectEvents() {
	  var animEnd = getVendorPrefixedEventName('animationend');
	  var transEnd = getVendorPrefixedEventName('transitionend');

	  if (animEnd) {
	    endEvents.push(animEnd);
	  }

	  if (transEnd) {
	    endEvents.push(transEnd);
	  }
	}

	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	module.exports = ReactTransitionEvents;

/***/ }

})