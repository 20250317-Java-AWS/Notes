import java.util.List;

public class Result {
    int inversions;

    public  String larrysArray(List<Integer> A) {
        this.inversions = 0;
        Integer[] a = (Integer[])A.toArray();
        mergeSort(a, 0, a.length-1);
    }

    private Integer[] mergeSort(Integer[] array, int l, int r) {
        //base case - array size 1
        if(r - l == 1) {
            return new Integer[]{array[l]};
        }

        //recurse
        return merge(mergeSort(array, l, r/2), mergeSort(array, 1 + r/2, r));
    }

    private Integer[] merge(Integer[] a, Integer[] b) {
        int aCursor = 0, bCursor = 0, i = 0;
        Integer[] array = new Integer[a.length*2];
        while(i < array.length) {
            if(a[aCursor] < b[bCursor]) {
                array[i] = a[aCursor];
                aCursor++;
            } else {
                array[i] = b[bCursor];
                bCursor++;
            }
            i++;
        }
        return array;
    }
}
