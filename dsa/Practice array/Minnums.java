import java.util.Scanner;

public class Minnums {
    

    static int findMinimumElement(int arr[]){
        int min = arr[0];
        for(int i =0; i< arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    }
    static int findMaxElement(int arr[]){
        int max = arr[0];
        for(int i =0; i< arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        return max;
    }
    public static void main(String args[]){
        
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int n = sc.nextInt();

        int arr1[] = new int[n];
        System.out.println("Enter the element of array1: ");
        for(int i =0; i<n; i++){
            arr1[i] = sc.nextInt();
        }

        int arr2[] = new int[n];
        System.out.print("Enter the element of array2: ");
        for(int i =0; i<n; i++){
            arr2[i] = sc.nextInt();
        }
        System.out.println("The minimum number in array 1 : " + findMinimumElement(arr1));
        System.out.println("The minimum number in array 1 : " + findMaxElement(arr2));

        // int arr2[] = {8,10,-5,9,125,112};
        // System.out.println("The minimum number in array 2 : " + findMinimumElement(arr2));

        sc.close();
    }

}
