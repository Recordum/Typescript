// linkedlist.test.ts
import { LinkedList } from "./linkedlist";

describe("LinkedList", () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  test("prepend: LinkedList haed 에 추가", () => {
    linkedList.prepend(1);
    linkedList.prepend(2);
    linkedList.prepend(3);

    expect(linkedList.size()).toBe(3);
    expect(linkedList.head?.getValue()).toBe(3);
    expect(linkedList.head?.next?.getValue()).toBe(2);
    expect(linkedList.tail?.getValue()).toBe(1);
  });

  test("append: linkedList tail 에 추가", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.size()).toBe(3);
    expect(linkedList.head?.getValue()).toBe(1);
    expect(linkedList.head?.next?.getValue()).toBe(2);
    expect(linkedList.tail?.getValue()).toBe(3);
  })
}); 