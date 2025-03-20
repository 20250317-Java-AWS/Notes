import java.util.HashSet;
import java.util.Set;

public class Solution {
    public static String pangrams(String s) {
        if(s.length() < 26) {
            return "not pangram";
        }

        // Write your code here
        Set<Integer> alphabet = new HashSet<>();
        for(int i = 0; i < 26; i++) {
            alphabet.add(Character.toLowerCase(i+'a'));
        }

        Set<Integer> mySet = new HashSet<>();
        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) != ' ') {
                mySet.add((int) Character.toLowerCase(s.charAt(i)));
            }
        }

        if(alphabet.equals(mySet)) {
            return "pangram";
        }

        return "not pangram";
    }
}
