
public class Pattern
{
    // 4th pattern

        /*
         *****
         ****
         *** 
         ** 
         * 
         */
    static void triangle(int N){
        for(int i =0; i< N; i++){
                for (int j =N;j> i; j--)
                {
                    System.out.print(N-j+1+" ");
                }
                System.out.println( );
             }
        }

    public static void main(String args[])
    {
        int N =5;
        triangle(N);
        
        // patterns printing
        //  1st pattern   
            /* 
             ****
             ****
             ****
             **** 
              */
            
        //       for(int i =1; i<5; i++){
        //         for (int j =1; j<5; j++)
        //         {
        //             // System.out.print("*");
        //         }
        //             // System.out.println( );
        //       }

        // // 2nd pattern
        // /*
        //  * or 1
        //  ** or 12
        //  *** or 123
        //  **** or 1234
        //  ***** or 12345   
        //  */

        //  for (int i =1; i<6; i++){
        //     for (int j=1;j<=i; j++){
        //         System.out.print(j);
        //     }
        //     System.out.println( );
        //  }

        //  3rd Pattern
        /* 
        1
        22
        333
        4444
        5555 */

        // for(int i =1; i<6; i++){
        //     for (int j=1; j<=i; j++){
        //         System.out.print(i);
        //     }
        //     System.out.println();
        // }
    }
}

