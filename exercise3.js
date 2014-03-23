var Btree = require('./exercise0.js');

Btree.Tree.prototype.maxDepth = function() {
	var _this = this,
		// No node tree is empty.
		depth = 1,
		maxDepthOfLeaves = 0;

	if (null !== _this._branches.left) {
		maxDepthOfLeaves = Math.max(
			maxDepthOfLeaves,
			_this._branches.left.maxDepth()
		);
	}

	if (null !== _this._branches.right) {
		maxDepthOfLeaves = Math.max(
			maxDepthOfLeaves,
			_this._branches.right.maxDepth()
		);
	}

	return maxDepthOfLeaves + depth;
}

var node = new Btree.Node(4);
	tree = new Btree.Tree(node);

tree.insert(2);
tree.insert(5);
tree.insert(1);
tree.insert(3);

console.log(tree.maxDepth());