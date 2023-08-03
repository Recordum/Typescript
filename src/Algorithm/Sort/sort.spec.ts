import { BubbleSort } from "./bubble-sort";
import { InsertionSort} from "./insertion-sort";
import { SelectionSort } from "./selection-sort";

describe("Sort", ()=> {
    
    describe("BubbleSort", ()=>{
        let bubbleSort: BubbleSort<number> = new BubbleSort();

        test("sort test", () => {
            const unSortedlist = [4, 2, 3, 1];
            const sortedList = [1,2,3,4];
            bubbleSort.sort(unSortedlist);

            expect(unSortedlist).toEqual(sortedList);
        })
    })
    
    describe("SelectionSort", ()=>{
        let selectionSort: SelectionSort<number> = new SelectionSort();

        test("sort test", () => {
            const unSortedlist = [4, 2, 3, 1];
            const sortedList = [1,2,3,4];
            selectionSort.sort(unSortedlist);

            expect(unSortedlist).toEqual(sortedList);
        })
    })

    describe("InsertionSort", ()=>{
       const insertionSort:InsertionSort<number> = new InsertionSort();
        test("sort test", () => {
            const unSortedlist = [4, 2, 3, 1];
            const sortedList = [1,2,3,4];
            insertionSort.sort(unSortedlist);

            expect(unSortedlist).toEqual(sortedList);
        })
    })
})