webpackJsonp([111,209],{

/***/ 1736:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["h2", "何时使用"], ["p", "文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用", ["code", "树控件"], "可以完整展现其中的层级关系，并具有展开收起选择等交互功能。"]],
	  "meta": {
	    "category": "Components",
	    "type": "Data Display",
	    "title": "Tree",
	    "subtitle": "树形控件",
	    "filename": "components/tree/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#注意"
	  }, "注意"]]],
	  "api": ["section", ["h2", "API"], ["h3", "Tree props"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "multiple"], ["td", "支持点选多个节点（节点本身）"], ["td", "bool"], ["td", "false"]], ["tr", ["td", "checkable"], ["td", "节点前添加 Checkbox 复选框"], ["td", "bool"], ["td", "false"]], ["tr", ["td", "defaultExpandAll"], ["td", "默认展开所有树节点"], ["td", "bool"], ["td", "false"]], ["tr", ["td", "defaultExpandedKeys"], ["td", "默认展开指定的树节点"], ["td", "String[]"], ["td", "[]"]], ["tr", ["td", "expandedKeys"], ["td", "（受控）展开指定的树节点"], ["td", "String[]"], ["td", "[]"]], ["tr", ["td", "autoExpandParent"], ["td", "是否自动展开父节点"], ["td", "bool"], ["td", "true"]], ["tr", ["td", "defaultCheckedKeys"], ["td", "默认选中复选框的树节点"], ["td", "String[]"], ["td", "[]"]], ["tr", ["td", "checkedKeys"], ["td", "（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点key，则子节点自动选中；相应当子节点key都传入，父节点也自动选中。当设置", ["code", "checkable"], "和", ["code", "checkStrictly"], "，它是一个有", ["code", "checked"], "和", ["code", "halfChecked"], "属性的对象，并且父子节点的选中与否不再关联"], ["td", "String[]/{checked:Array", ["string"], ",halfChecked:Array", ["string"], "}"], ["td", "[]"]], ["tr", ["td", "checkStrictly"], ["td", "checkable状态下节点选择完全受控（父子节点选中状态不再关联）"], ["td", "bool"], ["td", "false"]], ["tr", ["td", "defaultSelectedKeys"], ["td", "默认选中的树节点"], ["td", "String[]"], ["td", "[]"]], ["tr", ["td", "selectedKeys"], ["td", "（受控）设置选中的树节点"], ["td", "String[]"], ["td", "-"]], ["tr", ["td", "onExpand"], ["td", "展开/收起节点时触发"], ["td", "function(expandedKeys, {expanded: bool, node})"], ["td", "-"]], ["tr", ["td", "onCheck"], ["td", "点击复选框触发"], ["td", "function(checkedKeys, e:{checked: bool, checkedNodes, node, event})"], ["td", "-"]], ["tr", ["td", "onSelect"], ["td", "点击树节点触发"], ["td", "function(selectedKeys, e:{selected: bool, selectedNodes, node, event})"], ["td", "-"]], ["tr", ["td", "filterTreeNode"], ["td", "按需筛选树节点（高亮），返回true"], ["td", "function(node)"], ["td", "-"]], ["tr", ["td", "loadData"], ["td", "异步加载数据"], ["td", "function(node)"], ["td", "-"]], ["tr", ["td", "onRightClick"], ["td", "响应右键点击"], ["td", "function({event,node})"], ["td", "-"]], ["tr", ["td", "draggable"], ["td", "设置节点可拖拽（IE>8）"], ["td", "bool"], ["td", "false"]], ["tr", ["td", "onDragStart"], ["td", "开始拖拽时调用"], ["td", "function({event,node})"], ["td", "-"]], ["tr", ["td", "onDragEnter"], ["td", "dragenter 触发时调用"], ["td", "function({event,node,expandedKeys})"], ["td", "-"]], ["tr", ["td", "onDragOver"], ["td", "dragover 触发时调用"], ["td", "function({event,node})"], ["td", "-"]], ["tr", ["td", "onDragLeave"], ["td", "dragleave 触发时调用"], ["td", "function({event,node})"], ["td", "-"]], ["tr", ["td", "onDragEnd"], ["td", "dragend 触发时调用"], ["td", "function({event,node})"], ["td", "-"]], ["tr", ["td", "onDrop"], ["td", "drop 触发时调用"], ["td", "function({event, node, dragNode, dragNodesKeys})"], ["td", "-"]]]], ["h3", "TreeNode props"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "disabled"], ["td", "禁掉响应"], ["td", "bool"], ["td", "false"]], ["tr", ["td", "disableCheckbox"], ["td", "禁掉 checkbox"], ["td", "bool"], ["td", "false"]], ["tr", ["td", "title"], ["td", "标题"], ["td", "String/element"], ["td", "'---'"]], ["tr", ["td", "key"], ["td", "被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！"], ["td", "String"], ["td", "内部计算出的节点位置"]], ["tr", ["td", "isLeaf"], ["td", "设置为叶子节点"], ["td", "bool"], ["td", "false"]]]], ["h2", "注意"], ["p", "树节点可以有很多，但在设置", ["code", "checkable"], "时，将会花费更多的计算时间，因此我们缓存了一些计算结果（", ["code", "this.treeNodesStates"], "）来复用，避免多次重复计算，以此提高性能。但这也带来了一些限制，当你异步加载树节点时，你需要这样渲染树："], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>treeData<span class=\"token punctuation\">.</span>length\n  <span class=\"token operator\">?</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tree</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>treeData<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>data <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeNode</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tree</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">:</span> <span class=\"token string\">'loading tree'</span><span class=\"token punctuation\">}</span>"
	  }, ["code", "{this.state.treeData.length\n  ? <Tree>{this.state.treeData.map(data => <TreeNode />)}</Tree>\n  : 'loading tree'}"]]]
	};

/***/ }

});