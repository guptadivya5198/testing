
public class ArrayClass{
    public static void main(String[] args) {
        System.out.println("THis is simple");
        // int[] arr = {1,2,3,4,5};
        
        // prinElement(arr);
        // sumElement(arr);
        // printAlternameElement(arr);
        // printElementOnetoHundred();
        printPrimeNumber(12);
    }
         //Print  Prime number

         static void printPrimeNumber(int n){
            int i;
            for( i=2; i <n; i++)
            {
                if(n%i ==0)
                {
                    System.out.println("Not Prime");
                    break;
                }
            }
            if(i==n)
            System.out.println("Prime");

         }


    // 1 to 100 
    
    static void printElementOnetoHundred()
    { 
        int sum =0;
        
        for(int i =0; i< 101; i++){
            if(i%2!=0){
                sum = sum +i;
            }
          
        }
        System.out.println(sum);
    }
    // print alternate element in array 
    static void printAlternameElement( int arr[]){
        for (int i =0; i <arr.length; i++){
            if(i%2!= 0){
                System.out.println(arr[i]);
            }
        }

        
    }
    // add all element of given array
    static void sumElement(int[] arr){
        int sum = 0;
        for(int i = 0; i<arr.length; i++){
            sum = arr[i] + sum;
        }
        System.out.println(sum);
    }
    // print the array
    static void prinElement(int[] arr){
        for(int i = 0; i<arr.length; i++){
            System.out.println(arr[i]);
        }
    }


   

    
}