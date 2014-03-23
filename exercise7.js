(function() {
    "use strict";

    var Btree = require('./exercise0.js');

    /**
     * hasPathSum() returns true if there is a path for this sum
     * otherwise false.
     *
     * @author Dan Dart
     * @return bool
    **/
    Btree.Tree.prototype.hasPathSum = function() {
        throw {name: 'NotImplementedError', message: 'Not Implemented'};
    };

    var node = new Btree.Node(4),
        tree = new Btree.Tree(node);

    tree.insert(2);
    tree.insert(5);
    tree.insert(1);
    tree.insert(3);

    console.log(tree.hasPathSum(Number(process.argv[2])));
})();