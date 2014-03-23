var Btree = require('./exercise0.js');

Btree.Tree.prototype.printPostOrder = function() {
	var _this = this,
		str = '';
	if (null !== _this._branches.left) {
		str += (_this._branches.left.printPostOrder());
	}
	if (null !== _this._branches.right) {
		str += (_this._branches.right.printPostOrder());
	}
	str += _this.getValue()+' ';

	return str;
}

var node = new Btree.Node(4);
	tree = new Btree.Tree(node);

tree.insert(2);
tree.insert(5);
tree.insert(1);
tree.insert(3);

console.log(tree.printPostOrder());