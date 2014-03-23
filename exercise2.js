var Btree = require('./exercise0.js');

/**
 * size() calculates the number of nodes.
 *
 * @author Dan Dart
 * @return int
**/
Btree.Tree.prototype.size = function() {
	var _this = this,
		size = 1;

	if (null !== _this._branches.left) {
		size += _this._branches.left.size();
	}

	if (null !== _this._branches.right) {
		size += _this._branches.right.size();
	}

	return size;
}

var node = new Btree.Node(4);
	tree = new Btree.Tree(node);

tree.insert(2);
tree.insert(5);
tree.insert(1);
tree.insert(3);

console.log(tree.size());