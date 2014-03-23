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
	var _this = this;
	if ('number' !== typeof nInitVal) {
		throw {
			name: 'LogicError',
			message: 'Node constructor: nInitVal is not a number.'
		};
	}

	_this._nValue = nInitVal;

	// Not using the new ECMA getters yet
	_this.getValue = function() {
		return _this._nValue;
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
	var _this = this,
		c_MAXBRANCHES = 2;

	_this._rootNode = rootNode;
	_this._branches = {
		left: null,
		right: null
	};

	_this.getValue = function() {
		return _this._rootNode.getValue();
	}

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
		if (nSearch == _this._rootNode.getValue()) {
			return true;
		}
		// If there is a left node, and the search is less than the root
		// then ask the left to search.
		if (nSearch < _this._rootNode.getValue() &&
			null !== _this._branches.left) {
			return _this._branches.left.lookup(nSearch);
		}

		// If there is a right node, and the search is greater than the root
		// then ask the right to search.
		if (nSearch < _this._rootNode.getValue() &&
			null !== _this._branches.right) {
			return _this._branches.right.lookup(nSearch);
		}

		// If everything failed then return false.
		return false;
	};

	_this.insert = function(nValue) {
		if (nValue == _this.getValue()) {
			throw {name: 'LogicError', message: nValue+' has already been entered.'};
		}

		// Needs to go on the left?
		if (nValue < _this.getValue()) {
			if (null == _this._branches.left) {
				return _this._branches.left = new Btree.Tree(new Btree.Node(nValue));
			}
			return _this._branches.left.insert(nValue);
		}

		if (nValue > _this.getValue()) {
			if (null == _this._branches.right) {
				return _this._branches.right = new Btree.Tree(new Btree.Node(nValue));
			}
			return _this._branches.right.insert(nValue);
		}
	}

	/**
	 * Print that tree.
	 * Currently needs to be printed as a nice diagonal...
	 *
	 * @return string
	 * @author Dan Dart
	**/
	_this.print = function() {
		var str = '';

		if (null !== _this._branches.left) {
			str += (_this._branches.left.dump());
		}
		str += _this.getValue();
		if (null !== _this._branches.right) {
			str += (_this._branches.right.dump());
		}

		return str;
	}
};

module.exports = Btree;