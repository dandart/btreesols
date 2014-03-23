var Btree = require('./exercise0.js');

Btree.Tree.prototype.minValue = function() {
	var _this = this,
		minValue = _this.getValue();

	if (null !== _this._branches.left) {
		minValue = Math.min(
			minValue,
			_this._branches.left.minValue()
		);
	}

	return minValue;
}

var node = new Btree.Node(4);
	tree = new Btree.Tree(node);

tree.insert(2);
tree.insert(5);
tree.insert(1);
tree.insert(3);

console.log(tree.minValue());