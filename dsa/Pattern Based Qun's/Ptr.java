// import java.util.Scanner;
// public class Ptr 
// {
//     public static void main(String args[]){
//         Scanner scanner = new Scanner(System.in);
//         System.out.println("Enter a number : ");
//         int n = scanner.nextInt();
//         int i =1;
//         while(i <=n){
//             int j =1;
//             while(j<=n){
//                 System.out.print(j);
//                 j++;
//             }
//             System.out.println( );
//             i++;

//         }
//         scanner.close();
//     }
    
// }
// import java.util.Scanner;
// public class Ptr 
// {
//     public static void main(String args[]){
//         Scanner scanner = new Scanner(System.in);
//         System.out.println("Enter a number : ");
//         // char n = scanner.next().charAt(0);
//         int n = scanner.nextInt();
//         int i =1;
    
//         while(i <=n){
//             int value =i;
//             int j =1;
//             while(j<=i){
//                 System.out.print( value  + " " );
//                 value++;
//                 j++;
//             }
//             System.out.println( );
//             i++;

//         }
//         scanner.close();
//     }
    
// }

import java.util.Scanner;
public class Ptr 
{
    public static void main(String args[]){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a number : ");
        // char n = scanner.next().charAt(0);
        int n = scanner.nextInt();
        int i =1;
    
        while(i <=n){
            int j =1;
            while(j<=i){
                String ch=(String) ('A' + i- 1  + " " );
                System.out.print(ch);
                j++;
            }
            System.out.println( );
            i++;

        }
        scanner.close();
    }
    
}