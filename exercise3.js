(function() {
    "use strict";

    var Btree = require('./exercise0.js');

    /**
     * maxDepth() calculates the maximum depth of the tree
     *
     * @author Dan Dart
     * @return int
    **/
    Btree.Tree.prototype.maxDepth = function() {
        var _this = this,
            // No node tree is empty.
            depth = 1,
            maxDepthOfLeaves = 0;

        if (_this.hasLeft()) {
            maxDepthOfLeaves = Math.max(
                maxDepthOfLeaves,
                _this.getLeft().maxDepth()
            );
        }

        if (_this.hasRight()) {
            maxDepthOfLeaves = Math.max(
                maxDepthOfLeaves,
                _this.getRight().maxDepth()
            );
        }

        return maxDepthOfLeaves + depth;
    };

    var node = new Btree.Node(4),
        tree = new Btree.Tree(node);

    tree.insert(2);
    tree.insert(5);
    tree.insert(1);
    tree.insert(3);

    console.log(tree.maxDepth());
})();