import java.util.Arrays;
import java.util.List;

public class Result {
    public static String gridChallenge(List<String> grid) {
        // Write your code here
        for(int i = 0; i < grid.size(); i++) {
            char[] arr = grid.get(i).toCharArray();
            Arrays.sort(arr);
            grid.set(i, String.valueOf(arr));
        }

        for(int i = 0; i < grid.get(0).length(); i++) { //left to right
            for(int j = 1; j < grid.size(); j++) { //up down
                if(grid.get(j).charAt(i) < grid.get(j-1).charAt(i)) {
                    return "NO";
                }
            }
        }
        return "YES";
    }
}
