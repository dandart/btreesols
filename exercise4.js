(function() {
    "use strict";

    var Btree = require('./exercise0.js');

    /**
     * minValue() calculates the minimum value of the tree
     *
     * @author Dan Dart
     * @return int
    **/
    Btree.Tree.prototype.minValue = function() {
        var _this = this,
            minValue = _this.getValue();

        if (_this.hasLeft()) {
            minValue = Math.min(
                minValue,
                _this.getLeft().minValue()
            );
        }

        return minValue;
    };

    var node = new Btree.Node(4),
        tree = new Btree.Tree(node);

    tree.insert(2);
    tree.insert(5);
    tree.insert(1);
    tree.insert(3);

    console.log(tree.minValue());
})();