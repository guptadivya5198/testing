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
//             int j =1;
//             while(j<=i){
//                 char ch=(char) ('A' + j- 1) ;
//                 System.out.print(ch+" ");
//                 j++;
//             }
//             System.out.println();
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
    
//          char start = 'A'; 
//         while(i <=n){
//             int j =1;
//             while(j<=n){
//                 System.out.print(start+" ");
//                 start++;
//                 j++;
//             }
//             System.out.println();
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
    
//         // char value ='A';
//         while(i <=n){
//             char start = (char)('A' + n-i);
//             int j =1;
//             while(j<=i){
//                 // char start = (char)('A' + i + j -2);
//                 // char start = (char)('A' + i -1);

//                 System.out.print(start+" ");
//                 start++;
//                 j++;
//             }
//             System.out.println();
//             i++;

//         }
//         scanner.close();
//     }
    
// }

import java.util.Scanner;
// public class Ptr 
// {
//     public static void main(String args[]){
//         Scanner scanner = new Scanner(System.in);
//         System.out.println("Enter a number : ");
//         // char n = scanner.next().charAt(0);
//         int n = scanner.nextInt();
//         int i =1;
    
//     // char value ='A';
//     while(i <=n){
//             int space = n-i;
//             while(space>0){
//                     System.out.print(" ");
//                     space--;
//             }
//             int j =1;
//             while(j<=i){
//                 System.out.print("*" +" ");
//                 j++;
//             }
//             System.out.println();
//             i++;

//         }
//         scanner.close();
//     }
    
// }
// public class Ptr 
// {
//     public static void main(String args[]){
//         Scanner scanner = new Scanner(System.in);
//         System.out.println("Enter a number : ");
//         // char n = scanner.next().charAt(0);
//         int n = scanner.nextInt();
//         int i =1;
    
//     // char value ='A';
//     while(i <=n){
//             int space = n-i;
//             while(space>0){
//                     System.out.print(" ");
//                     space--;
//             }
//             int j =1;
//             while(j<=i){
//                 System.out.print("*" + ' ' );
//                 j++;
//             }
//             System.out.println();
//             i++;

//         }
//         scanner.close();
//     }
    
// }

public class Ptr 
{
    public static void main(String args[]){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a number : ");
        // char n = scanner.next().charAt(0);
        int n = scanner.nextInt();
        int i =1;
    
    // char value ='A';
    while(i <=n){
            int j =1;
            int star = n - i + 1;
            while(j<=i){
                System.out.print("*" + ' ' );
                j++;
            }
            System.out.println();
            i++;

        }
        scanner.close();
    }
    
}