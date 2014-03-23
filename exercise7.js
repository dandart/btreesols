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
    Btree.Tree.prototype.hasPathSum = function(intSum) {
        var _this = this,
            intRemainingSum = intSum - _this.getValue();

        if (0 === intRemainingSum) {
            return true;
        }

        if (_this.hasLeft() &&
            _this.getLeft().hasPathSum(intRemainingSum)) {
            return true;
        }

        if (_this.hasRight() &&
            _this.getRight().hasPathSum(intRemainingSum)) {
            return true;
        }

        return false;
    };

    var node = new Btree.Node(5),
        tree = new Btree.Tree(node);

    /**
     * Seeing as the tree given in the question
     * was actually invalid (or at least unsorted)
     * let's generate one like it that works...
     *
     *       5
     *     4     8
     *   2     7  11
     * 1             13
     *
     *   It has 3 sums, 12, 20, 37. These should return true.
    **/
    tree.insert(4);
    tree.insert(8);
    tree.insert(2);
    tree.insert(7);
    tree.insert(11);
    tree.insert(1);
    tree.insert(13);


    if ('undefined' == typeof process.argv[2]) {
        console.log('Please provide a path sum. UsageL '+process.argv[1] + ' (sum)');
        return;
    }
    console.log(tree.hasPathSum(Number(process.argv[2])).toString());
})();