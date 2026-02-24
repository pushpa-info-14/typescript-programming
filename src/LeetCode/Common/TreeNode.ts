export default class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(
		val: number = 0,
		left: TreeNode | null = null,
		right: TreeNode | null = null,
	) {
		this.val = val;
		this.left = left;
		this.right = right;
	}

	static build(nums: Array<number | null>): TreeNode | null {
		const n = nums.length;
		if (!nums.length || nums[0] === null) {
			return null;
		}

		const root = new TreeNode(nums[0]);
		const queue: TreeNode[] = [root];
		let i = 1;

		while (queue.length > 0 && i < n) {
			const node = queue.shift()!;

			// Left child
			if (i < n && nums[i] !== null) {
				node.left = new TreeNode(nums[i]!);
				queue.push(node.left);
			}
			i++;

			// Right child
			if (i < n && nums[i] !== null) {
				node.right = new TreeNode(nums[i]!);
				queue.push(node.right);
			}
			i++;
		}

		return root;
	}

	preorderTraversal(): Array<number | null> {
		const res: Array<number | null> = [];

		const dfs = (node: TreeNode | null) => {
			if (node === null) {
				res.push(null);
				return;
			}
			res.push(node.val);
			dfs(node.left);
			dfs(node.right);
		};

		dfs(this);
		console.log(res);
		return res;
	}

	inorderTraversal(): Array<number | null> {
		const res: Array<number | null> = [];

		const dfs = (node: TreeNode | null) => {
			if (node === null) {
				res.push(null);
				return;
			}
			dfs(node.left);
			res.push(node.val);
			dfs(node.right);
		};

		dfs(this);
		console.log(res);
		return res;
	}
}
