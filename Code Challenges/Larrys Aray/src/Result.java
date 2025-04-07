import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Result {
    public static String larrysArray(List<Integer> A) {
        /*
        We believe that we can determine the solution based on the evenness or oddness of the number of "inversions"
        How can we determine the number of inversions in the problem?
        Brute force: Loop in a loop, O(n^2)
        Can we do better?

        if we have the minimal number of the sequence no inversions to the right of this
        if we find the maximal number we know all remaining elements to the right are an inversion
        if we consider i to be the minimal number and j to be the maximal number
        Can we build upon this to make determinations like i+2 being the third most minimal number?

        Make a map of elements and their positions k=elements, V=indices
        Loop from N->1, for each take the position of the element and subtract that from N
        For each value < N we need to make N-V determinations about numbers > V, if they are to the right
        or left in the array.

         */

        Map<Integer, Integer> map = new HashMap<>();//K = element, V = index
        for(int i = 0; i < A.size(); i++) {
            map.put(A.get(i), i+1);
        }

        int inversions = map.size() - map.get(A.size());

        for(int i = A.size()-1; i > 0; i--) {
            //int num = i;
            for(int j = i+1; j < A.size(); j++) {
                if(map.get(i) < map.get(j)) {
                    inversions++;
                }
            }
        }

        if(inversions % 2 == 0) {
            return "YES";
        }
        return "NO";

    }
}
