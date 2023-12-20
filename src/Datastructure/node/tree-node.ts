export class TreeNode<T> {
    public left: TreeNode<T> | null;
    public right: TreeNode<T> | null;
    private value: T;
  
    constructor(value: T) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  
    public getValue(): T {
      return this.value;
    }
  }
  