import { LinkedList } from './linkedlist';

describe("LinkedList", () => {
  let linkedList: LinkedList<number>;
  let linkedListString: LinkedList<string>;
  beforeEach(() => {
    linkedList = new LinkedList();
    linkedListString = new LinkedList();
  });

  test("prepend: LinkedList haed 에 추가", () => {
    linkedList.prepend(1);
    linkedList.prepend(2);
    linkedList.prepend(3);

    expect(linkedList.size()).toBe(3);
    expect(linkedList.find(0)).toBe(3);
    expect(linkedList.find(1)).toBe(2);
    expect(linkedList.find(2)).toBe(1);
  });

  test("append: LinkedList tail 에 추가", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.size()).toBe(3);
    expect(linkedList.find(0)).toBe(1);
    expect(linkedList.find(1)).toBe(2);
    expect(linkedList.find(2)).toBe(3);
  });

  test("find: 범위에 벗어난 index 접근시 Index Out Of Bound Error 발생", () => {
    linkedList.append(0);
    linkedList.prepend(1);

    expect(linkedList.size()).toBe(2);
    expect(() => linkedList.find(2)).toThrow("Index Out of Bound");
    expect(() => linkedList.find(3)).toThrow("Index Out of Bound");
  });

  describe("indexOf Test", () => {
    test("indexOf: List 에서 value 랑 일치하는 index 반환", () => {
      linkedListString.append("Node0");
      linkedListString.append("Node1");
      linkedListString.append("Node2");

      expect(linkedListString.size()).toBe(3);
      expect(linkedListString.IndexOf("Node0")).toBe(0);
      expect(linkedListString.IndexOf("Node1")).toBe(1);
      expect(linkedListString.IndexOf("Node2")).toBe(2);
    })
    test("indexOf: List 에 없는 value 일 경우 Index of your value not found Error 발생", () =>{
      linkedListString.append("Node0");
      linkedListString.append("Node1");
      linkedListString.append("Node2");

      expect(linkedListString.size()).toBe(3);
      expect(()=>linkedListString.IndexOf("Node3")).toThrow("Index of your value not found");
    })
  })
  
}); 