import TreeNode from "./TreeNode";

class BinarySearchTree {
    public root: TreeNode | null;
    constructor() {
        this.root = null;
    }

    public insert(key: number): void {
        this.root = this.insertData(this.root, key);
    }

    private insertData(node: TreeNode | null, key: number): TreeNode {
        if (node === null) {
            return new TreeNode(key);
        }
        if (key < node.key) {
            node.left = this.insertData(node.left, key);
        }
        else if (key > node.key) {
            node.right = this.insertData(node.right, key);
        }
        return node;
    }

    public inOrderTraversal(node: TreeNode | null): void {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }
    }
}

export default BinarySearchTree;    //  Export tree