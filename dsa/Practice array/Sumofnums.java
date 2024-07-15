import java.util.Scanner;

public class Sumofnums {
    static int SumOfArray(int arr[],int n ){
        int sum=0;
        for (int i=0; i<arr.length; i++){
            sum += arr[i];
    
        }
        return sum;
    }

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array ");
        int n = sc.nextInt();

        int arr[] = new int[n];
        System.out.print("Enter the element of the array ");
        for(int i =0; i<n ; i++){
            arr[i] = sc.nextInt();
        }

        int totalSum = SumOfArray(arr,n);

        System.out.println(totalSum);

        sc.close();
    }
}
