import java.util.Arrays;

class Result {

    /*
     * Complete the 'biggerIsGreater' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING w as parameter.
     */

    public static String biggerIsGreater(String w) {
        // Write your code here
        //find the latest candidates in the string, closest to the end
        //candidates are adjacent characters in the string where s[a] < s[a+1]
        //swap those candidates... there might be another step after that... sort the rest? yeah
        //made a mistake here, need to swap s[a] with the next largest character to it's right, then sort the rest


        char[] array = w.toCharArray();

        //find candidate
        int candidateIndex = -1;
        for(int i = array.length-1; i > 0; i--) {
            if(array[i-1] < array[i]) {
                candidateIndex = i-1;
                break;
            }
        }

        //short circuit, no candidates
        if(candidateIndex == -1) {
            return "no answer";
        }

        int swapIndex = -1;
        for(int i = array.length-2; i > candidateIndex; i--) {
            //we've already been through this once, everything to the right of candidate is descending
            //so find the first larger char to the right of candidate right-to-left
            if(array[i] > array[candidateIndex]) {
                swapIndex = i;
            }
        }



        //do swap
        char temp = array[candidateIndex];
        array[candidateIndex] = array[swapIndex];
        array[swapIndex] = temp;

        //sort the rest of the list
        if(candidateIndex < array.length-1) {
            Arrays.sort(array, candidateIndex, array.length);
        }

        return String.valueOf(array);

    }

}
