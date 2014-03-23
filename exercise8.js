(function() {
    "use strict";

    var fs = require('fs'),
        Btree = require('./exercise0.js');

    /**
     * parse() takes in a string and attempts to auto-add nodes.
     *
     * @author Dan Dart
     * @return bool
    **/
    Btree.Tree.readTree = function(strTree) {
        var _this = this,
            arrNumbers = strTree.match(/\d+/g),
            intInit = arrNumbers.shift(),
            tree = new Btree.Tree(new Btree.Node(Number(intInit)));
        for (var i = 0; i < arrNumbers.length; i++) {
            tree.insert(Number(arrNumbers[i]));
        }

        return tree;
    };


    var strFile = fs.readFileSync(__dirname+'/1.tree').toString(),
        tree = Btree.Tree.readTree(strFile);

    console.log(tree.print());
})();