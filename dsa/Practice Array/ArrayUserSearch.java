import java.util.Scanner;
// user input and found element
public class ArrayUserSearch {
    public static void main(String args[]){

       Scanner sc = new Scanner(System.in);
       int size = sc.nextInt();
       int numbers[] = new int[size];


        //input
        for(int i =0;i<size; i++) {
            numbers[i] = sc.nextInt();
        }
        // for user found element
        int x = sc.nextInt();

            //    output
            
       for(int i=0; i<size; i++){
        if(numbers[i] == x)
        System.out.println("numbers found at:" + i);
       }


    }
    
}
