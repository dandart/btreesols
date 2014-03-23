(function() {
    "use strict";
    
    var Btree = {};

    // I would get an interface for the Node and Tree
    // since they implement the same methods...

    /**
     * A Node holds a value.
     * It needs to be written once and
     * once only.
     *
     * @author Dan Dart
    **/
    Btree.Node = function(nInitVal) {
        var _this = this,
            _nValue;
        if ('number' !== typeof nInitVal) {
            throw {
                name: 'LogicError',
                message: 'Node constructor: nInitVal is not a number.'
            };
        }

        _nValue = nInitVal;

        // Not using the new ECMA getters yet
        _this.getValue = function() {
            return _nValue;
        };
    };

    /**
     * A tree holds a node as its root,
     * and up to 2 more nodes or trees as._branches.
     * recursively.
     *
     * @author Dan Dart
    **/
    Btree.Tree = function(rootNode) {
        var _this = this;

        if (!(rootNode instanceof Btree.Node)) {
            throw {name: 'LogicError', message: 'Tree accepts only a type of Node.'};
        }

        var _rootNode = rootNode,
            _branches = {
                left: null,
                right: null
            };

        /**
         * Returns the root node value.
         *
         * @return Number
         * @author Dan Dart
        **/
        _this.getValue = function() {
            return _rootNode.getValue();
        };

        // Getters for the branches so that new code
        // does not fiddle with private values.
        _this.getLeft = function() {
            if (!_this.hasLeft()) {
                throw {name: 'LogicException', message: 'Tried to access left branch but it did not exist.'};
            }
            return _branches.left;
        };

        _this.getRight = function() {
            if (!_this.hasRight()) {
                throw {name: 'LogicException', message: 'Tried to access right branch but it did not exist.'};
            }
            return _branches.right;
        };

        /**
         * Returns true if this tree or subtree has a left branch
         *
         * @return bool
         * @author Dan Dart
        **/
        _this.hasLeft = function() {
            return null !== _branches.left;
        };

        /**
         * Returns true if this tree or subtree has a right branch
         *
         * @return bool
         * @author Dan Dart
        **/
        _this.hasRight = function() {
            return null !== _branches.right;
        };

        /**
         * Looks up a value in the tree
         *
         * @param Number nSearch
         * @return true if present, false if not present
         * @author Dan Dart
        **/
        _this.lookup = function(nSearch) {
            // forEach breaking is fugly
            // I'd use "let" here but we're foregoing new ECMA features

            // If the root node matches, then we have found it.
            if (nSearch == _rootNode.getValue()) {
                return true;
            }
            // If there is a left node, and the search is less than the root
            // then ask the left to search.
            if (nSearch < _rootNode.getValue() &&
                _this.hasLeft()) {
                return _this.getLeft().lookup(nSearch);
            }

            // If there is a right node, and the search is greater than the root
            // then ask the right to search.
            if (nSearch > _rootNode.getValue() &&
                _this.hasRight()) {
                return _this.getRight().lookup(nSearch);
            }

            // If everything failed then return false.
            return false;
        };

        /**
         * Inserts a value into the btree
         *
         * @return null
         * @throws LogicError if value alreay exists
         * @author Dan Dart
        **/
        _this.insert = function(nValue) {
            if (nValue == _this.getValue()) {
                throw {name: 'LogicError', message: nValue+' has already been entered.'};
            }

            // Needs to go on the left?
            if (nValue < _this.getValue()) {
                if (!_this.hasLeft()) {
                    _branches.left = new Btree.Tree(new Btree.Node(nValue));
                    return;
                }
                 _this.getLeft().insert(nValue);
                return;
            }

            // Needs to go on the right?
            if (nValue > _this.getValue()) {
                if (!_this.hasRight()) {
                    _branches.right = new Btree.Tree(new Btree.Node(nValue));
                    return;
                }
                _this.getRight().insert(nValue);
                return;
            }
        };

        /**
         * Print that tree.
         * Currently needs to be printed as a nice diagonal...
         *
         * @return string
         * @author Dan Dart
        **/
        _this.print = function() {
            var str = '';

            if (_this.hasLeft()) {
                str += (_this.getLeft().print());
            }
            str += _this.getValue() + ' ';
            if (_this.hasRight()) {
                str += (_this.getRight().print());
            }

            return str;
        };
    };

    module.exports = Btree;
})();