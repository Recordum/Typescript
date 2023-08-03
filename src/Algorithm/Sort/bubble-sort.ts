/**
 * BubbleSort
 * 서로 인접한 두 원소를 검사해 정렬하는 알고리즘
 * T(n) = O(n^2)
 */
export class BubbleSort<T> {

    public sort(list:T[]):T[] {
        const length: number = list.length;

        for (let i = length - 1 ; i > 0; i--){
            for (let j = 0 ; j < i ; j ++){
                if (list[j] > list[j+1]) {
                    let temp = list[j];
                    list[j] = list[j+1];
                    list[j+1] = temp;
                }
            }
        }

        return list;
    }
}