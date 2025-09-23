import java.util.Arrays;
public class activity5 {
    public static void main(String[] args) {
        
        int A[]={8,50,-3,7,10,0};
         int b[]=new int[A.length];
        for (int i = 0; i < A.length; i++) {
            b[i]=A[A.length - 1 - i];
            
        }
        System.out.print(Arrays.toString(b));
        
    }
    
}
