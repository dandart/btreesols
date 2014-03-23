(function() {
    "use strict";

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

        if (_this.hasLeft()) {
            size += _this.getLeft().size();
        }

        if (_this.hasRight()) {
            size += _this.getRight().size();
        }

        return size;
    };

    var node = new Btree.Node(4),
        tree = new Btree.Tree(node);

    tree.insert(2);
    tree.insert(5);
    tree.insert(1);
    tree.insert(3);

    console.log(tree.size());

})();