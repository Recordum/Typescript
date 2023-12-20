import { TreeNode } from '../node/tree-node';

export interface Tree<T> {
  addNode(value: T): void; // 부모 노드 아래에 새 노드 추가
  removeNode(node: TreeNode<T>): void; // 노드 삭제
  findNode(value: T): TreeNode<T> | null; // 특정 값을 가진 노드 찾기
  traverse(): void; // 트리 순회 (구현은 순회 방식에 따라 달라짐)
}

export class BinaryTree<T> implements Tree<T> {
  root: TreeNode<T> | null = null;

  addNode(value: T): void {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    this.recursive(this.root, node);
  }

  private recursive(currentNode: TreeNode<T>, node: TreeNode<T>) {
    if (currentNode.getValue() < node.getValue()) {
      currentNode.right
        ? this.recursive(currentNode.right, node)
        : (currentNode.right = node);
      return;
    }

    currentNode.left
      ? this.recursive(currentNode.left, node)
      : (currentNode.left = node);
  }

  removeNode(node: TreeNode<T>): void {
    throw new Error('Method not implemented.');
  }

  findNode(value: T): TreeNode<T> | null {
    throw new Error('Method not implemented.');
  }

  traverse(): void {
    return this.inOrderTraversal(this.root);
  }

  private inOrderTraversal(node: TreeNode<T> | null): void {
    if (node === null) {
      return;
    }
    this.inOrderTraversal(node.left); 
    console.log(node.getValue()); 
    this.inOrderTraversal(node.right); 
  }
}
