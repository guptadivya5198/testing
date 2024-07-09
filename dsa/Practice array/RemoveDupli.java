import java.util.Scanner;
public class RemoveDupli {
    
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the size of the array");
        int n = sc.nextInt();

        int arr[] = new int[n];
        System.out.println("Enter the elements of an array: ");
        for(int i =0; i<n; i++){
            arr[i] = sc.nextInt();
        }
 
        int Result = removeDuplicateElements(arr,n);
        System.out.println("The Elements of array after removing duplicate elements: ");
        for(int i =0; i< Result; i++){
            System.out.println(arr[i] + "");
        }
 
        sc.close();
    }
   public static int removeDuplicateElements(int[] arr, int n){
    int i =0;
    for(int j = 1; j< n ; j++){
        if (arr[j] != arr[i]){
            arr[i + 1] = arr[j];
            i++;
        }
    }
    return(i+1);
   }
}


