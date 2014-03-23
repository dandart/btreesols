var Btree = require('./exercise0.js');

/**
 * printTree() returns a string with all the elements in order
 *
 * @author Dan Dart
 * @return string
**/
Btree.Tree.prototype.printTree = function() {
	var _this = this,
		str = '';
	if (null !== _this._branches.left) {
		str += (_this._branches.left.printTree());
	}
	str += _this.getValue()+' ';
	if (null !== _this._branches.right) {
		str += (_this._branches.right.printTree());
	}

	return str;
}

var node = new Btree.Node(4);
	tree = new Btree.Tree(node);

tree.insert(2);
tree.insert(5);
tree.insert(1);
tree.insert(3);

console.log(tree.printTree());