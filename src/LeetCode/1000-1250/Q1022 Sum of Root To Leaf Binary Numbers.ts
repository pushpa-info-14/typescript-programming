import TreeNode from "../Common/TreeNode.js";

function sumRootToLeaf(root: TreeNode | null): number {
	function dfs(node: TreeNode | null, val: number): number {
		if (node == null) {
			return 0;
		}
		val = (val << 1) + node.val;
		if (node.left == null && node.right == null) {
			return val;
		}
		return dfs(node.left, val) + dfs(node.right, val);
	}
	return dfs(root, 0);
}

let tree = TreeNode.build([1, 0, 1, 0, 1, 0, 1]);
console.log(sumRootToLeaf(tree));
tree = TreeNode.build([0]);
console.log(sumRootToLeaf(tree));
