import BinarySearchTree from "./BinarySearchTree";

let bstObj = new BinarySearchTree();

bstObj.insert(10);
bstObj.insert(100);
bstObj.insert(1);
bstObj.insert(5);
bstObj.insert(-10);
bstObj.insert(75);

bstObj.inOrderTraversal(bstObj.root);