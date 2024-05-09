
public class Pattern

{
    // Pattern 1
    // static void triangle(int N)
    // {
    //     // for(int i =1; i<N; i++){
    //     //         for (int j =0 ;j<N; j++)
    //     //         {
    //     //             System.out.print("*");
    //     //         }
    //     //         System.out.println( );
    //     //      }
    //     // }

    // pattern 2

    // static void pattern2(int N){
    //     for(int i =0; i<=N; i++){
    //         for(int j=0; j<=i; j++){
    //             System.out.print("* ");
    //         }
    //             System.out.println(" ");
    //     }
    // }
    // static void pattern3(int N){
    //     for(int i =1; i<=N; i++){
    //         for(int j=1; j<=i; j++){
    //             System.out.print(j);
    //         }
    //             System.out.println(" ");
    //     }
    // }
    // static void pattern4(int N){
    //     for(int i =1; i<=N; i++){
    //         for(int j=1; j<=i; j++){
    //             System.out.print(i);
    //         }
    //             System.out.println(" ");
    //     }
    // }
    // static void pattern5(int N){
    //     for(int i =1; i<=N; i++){
    //         for(int j=1; j<=N-i+1; j++){
    //             System.out.print("*");
    //         }
    //             System.out.println(" ");
    //     }
    // }
    // static void pattern6(int N){
    //     for(int i =1; i<=N; i++){
    //         for(int j=1; j<=N-i+1; j++){
    //             System.out.print(j);
    //         }
    //             System.out.println(" ");
    //     }
    // }
    // static void pattern7(int N){
    //     for(int i =0; i<=N; i++){
    //         // for space
    //         for(int j=0; j<=N-i-1; j++){
    //             System.out.print(" ");
    //         }
    //         for(int j=1; j<=2*i+1; j++){
    //             System.out.print("*");
    //         }
    //         for(int j=1; j<=2*N-(2*i+1); j++){
    //             System.out.print(" ");
    //         }
    //             System.out.println(" ");
    //     }
    // }
    // static void pattern8(int N){
    //     for(int i =0; i<=N; i++){
    //         // for space
    //         for(int j=0; j<=i; j++){
    //             System.out.print(" ");
    //         }
    //         for(int j=1; j<=2*N-2*i+1; j++){
    //             System.out.print("*");
    //         }
    //         for(int j=1; j<i; j++){
    //             System.out.print(" ");
    //         }
    //             System.out.println(" ");
    //     }
    // }
    // static void pattern9(int N){
    //     for(int i =0; i<=N; i++){
    //         // for space
    //         for(int j=0; j<=N-i-1; j++){
    //             System.out.print(" ");
    //         }
    //         for(int j=1; j<=2*i+1; j++){
    //             System.out.print("*");
    //         }
    //         for(int j=1; j<=2*N-(2*i+1); j++){
    //             System.out.print(" ");
    //         }
    //             System.out.println(" ");
    //     }
    //     {
    //         for(int i =0; i<=N; i++){
    //             // for space
    //             for(int j=0; j<=i; j++){
    //                 System.out.print(" ");
    //             }
    //             for(int j=1; j<=2*N-2*i+1; j++){
    //                 System.out.print("*");
    //             }
    //             for(int j=1; j<i; j++){
    //                 System.out.print(" ");
    //             }
    //                 System.out.println(" ");
    //         }
    //     }
    // }
    static void pattern10(int N){
        for(int i=1; i<=2*N-1; i++){
            int stars = i;
            if(i>N)stars= 2*N-i;
                for(int j =1;j<=stars;j++){
                    System.out.print("*");
                }
                System.out.println();
        }
    }
    static void pattern11(int N){
        int start = 1;
        for(int i=0; i<N; i++){
            if(i%2==0)
            start= 1;
            else start=0;
                for(int j =0;j<=i;j++){
                    System.out.print(start);
                    start = 1 -start;
                }
                System.out.println();
        }
    }
    static void pattern12(int N){
        int space= 2*(N-1);
        for(int i =1; i<=N;i++){
            // numbers
            for(int j =1;j<i;j++){
                System.out.println(j);
            }
            // space
            for(int j=1; j<space;j++)
            System.out.println("");
            // numbers
            for(int j =i;j<1;j--){
                System.out.println(j);
            }
        }
    }
    public static void main(String args[])
    {
        int N =7;
        // triangle(N);
        // pattern2(N);
        // pattern3(N);
        // pattern4(N);
        // pattern5(N);
        // pattern6(N);
        // pattern7(N);
        // pattern8(N);
        // pattern10(N);
        // pattern11(N);
        pattern12(N);

        
    }
}

