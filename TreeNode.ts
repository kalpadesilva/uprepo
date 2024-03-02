class TreeNode {
    public key: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    public constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

export default TreeNode;

class BST {
    public root: TreeNode | null;
    constructor() {
        this.root = null;
    }

    insert(key: number): void {
        this.root = this.insertData(this.root, key);
    }

    private insertData(node: TreeNode | null, key: number): TreeNode {
        if (node === null) {
            return new TreeNode(key);
        }
        if (key < node.key) {
            this.insertData(node.left, key);
        }
        else {
            this.insertData(node.right, key);
        }
        return node;
    }

    public inOrderTraversal(node: TreeNode | null, value: number): boolean {
        let found = false;
        if (node) {
            found = this.inOrderTraversal(node.left, value);
            if (node.key === value) {
                found = true;
                return true;
            }
            found = this.inOrderTraversal(node.right, value);
        }
        return false;
    }
}