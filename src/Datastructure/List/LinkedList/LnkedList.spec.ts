// linkedlist.test.ts
import { LinkedList } from "./linkedlist";

describe("LinkedList", () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList();
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
}); 