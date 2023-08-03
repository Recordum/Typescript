/**
 * Selection Sort
 * 리스트를 순회하며 최솟값과, 앞에서부터 선택된 값을 변경하여 정렬하는 알고리즘
 * O(n^2) 
 */

export class SelectionSort<T> {
    
    public sort(list:T[]):void {
        const length: number = list.length;
        for(let selection:number = 0; selection < length - 1 ; selection++){
            let minValue = selection;
            for(let i = selection + 1; i < length ; i++){
                if(list[i] < list[selection]){
                    minValue = i;
                }
            }
            
            if (selection !== minValue){
                let temp = list[selection];
                list[selection] = list[minValue];
                list[minValue] = temp;
            }
        }
    }
}