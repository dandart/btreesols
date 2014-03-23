var Btree = require('./exercise0.js');

var node = new Btree.Node(2);
	tree = new Btree.Tree(node);

tree.insert(1);
tree.insert(3);

// This doesn't produce the desired effect yet
console.log(tree.print());