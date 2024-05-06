
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

    static void pattern2(int N){
        for(int i =0; i<=N; i++){
            for(int j=0; j<=i; j++){
                System.out.print("* ");
            }
                System.out.println(" ");
        }
    }
    static void pattern3(int N){
        for(int i =1; i<=N; i++){
            for(int j=1; j<=i; j++){
                System.out.print(j);
            }
                System.out.println(" ");
        }
    }
    static void pattern4(int N){
        for(int i =1; i<=N; i++){
            for(int j=1; j<=i; j++){
                System.out.print(i);
            }
                System.out.println(" ");
        }
    }
    static void pattern5(int N){
        for(int i =1; i<=N; i++){
            for(int j=1; j<=N-i+1; j++){
                System.out.print("*");
            }
                System.out.println(" ");
        }
    }

    public static void main(String args[])
    {
        int N =5;
        // triangle(N);
        pattern2(N);
        pattern3(N);
        pattern4(N);
        pattern5(N);
        
    }
}

