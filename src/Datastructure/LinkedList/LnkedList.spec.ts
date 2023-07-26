// linkedlist.test.ts
import { LinkedList } from "./linkedlist";

describe("LinkedList", () => {
  let linkedList: LinkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test("should return'LinkedList!'", () => {
    const result = linkedList.hello();

    expect(result).toBe("LinkedList!");
  });
});