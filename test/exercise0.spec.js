// run with jasmine-nodal for jasmine2
describe('exercise0', function() {
    "use strict";
    var Btree = require('../exercise0');

    describe('Node', function() {
        it('should error if an inappropriate value is given to the constructor', function() {
            expect(function() {
                new Btree.Node('foo');
            }).toThrow({ name : 'LogicError', message : 'Node constructor: nInitVal is not a number.' });
        });
        it('should construct an appropriate Node object with a value', function() {
            var intValue = 1,
                node = new Btree.Node(intValue);
            expect(node.getValue()).toEqual(intValue);
        });
    });

    describe('Tree', function() {
        it('should error if an inappropriate value is given to the constructor', function() {
            expect(function() {
                new Btree.Tree('foo');
            }).toThrow({ name : 'LogicError', message : 'Tree accepts only a type of Node.' });
        });

        it('should construct an appropriate Tree object with a value', function() {
            var intInitValue = 1,
                node = new Btree.Node(intInitValue),
                tree = new Btree.Tree(node);

            expect(tree.getValue()).toEqual(intInitValue);
        });

        it('should behave as appropriate if no left and no right', function() {
            var intInitValue = 1,
                node = new Btree.Node(intInitValue),
                tree = new Btree.Tree(node);

            expect(tree.hasLeft()).toBeFalsy();
            expect(tree.hasRight()).toBeFalsy();

            expect(function() { tree.getLeft(); }).toThrow({
                name : 'LogicException',
                message : 'Tried to access left branch but it did not exist.'
            });
            expect(function() { tree.getRight(); }).toThrow({
                name: 'LogicException',
                message : 'Tried to access right branch but it did not exist.'
            });
        });

        it('should return the value and true if a new value less than original is inserted', function() {
            var intInitValue = 1,
                node = new Btree.Node(intInitValue),
                tree = new Btree.Tree(node);

            tree.insert(0);

            expect(tree.hasLeft()).toBeTruthy();
            expect(tree.hasRight()).toBeFalsy();

            expect(tree.getLeft().getValue()).toEqual(0);
            expect(function() { tree.getRight(); }).toThrow(
                {name: 'LogicException', message: 'Tried to access right branch but it did not exist.'}
            );
        });

        it('should return the value and true if a new value greater than original is inserted', function() {
            var intInitValue = 1,
                node = new Btree.Node(intInitValue),
                tree = new Btree.Tree(node);

            tree.insert(2);

            expect(tree.hasLeft()).toBeFalsy();
            expect(tree.hasRight()).toBeTruthy();

            expect(function() { tree.getLeft(); }).toThrow(
                {name: 'LogicException', message: 'Tried to access left branch but it did not exist.'}
            );
            expect(tree.getRight().getValue()).toEqual(2);
        });

        it('should find a value in a complex tree structure', function() {
            var intInitValue = 1,
                node = new Btree.Node(intInitValue),
                tree = new Btree.Tree(node);

            tree.insert(2);
            tree.insert(0);
            tree.insert(42);
            tree.insert(47);
            tree.insert(5);
            tree.insert(23);

            expect(tree.lookup(3)).toBeFalsy();
            expect(tree.lookup(42)).toBeTruthy();
        });

        it('should print a complex tree structure linearly', function() {
            var intInitValue = 1,
                node = new Btree.Node(intInitValue),
                tree = new Btree.Tree(node);

            tree.insert(2);
            tree.insert(0);
            tree.insert(42);
            tree.insert(47);
            tree.insert(5);
            tree.insert(23);

            // Yes, turns out I cheated a bit. I hope you don't mind.
            expect(tree.print()).toEqual('0 1 2 5 23 42 47 ');
        })
    })
});