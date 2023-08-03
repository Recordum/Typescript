export class InsertionSort<T>{

    public sort(list:T[]):void{
        const length:number = list.length;
        for(let i = 1 ; i < length; i++){
            let j = i - 1;

            while (j >= 0 && list[j] > list[i]) {
                list[j + 1] = list[j];
                j = j - 1;
            }
            list[j + 1] = list[i];
        }
    }
}