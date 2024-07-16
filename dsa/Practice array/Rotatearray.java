public class Rotatearray {
    public static void reverse(int arr[], int n){
        int start = 0;
        int end =n-1;

        while(start<end){
            int temp = arr[start] ;
            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;

        }
    }

    public static void printAraay(int arr[], int n){
        for (int i =0; i<n; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String args[]){
        int arr[]= {3,5,8,9,12,14};
        int brr[] = {6,9,2,5,1};

        reverse(arr,arr.length);
        reverse(brr,brr.length);
         
        System.out.println("Reverse of array 1: ");
        printAraay(arr,arr.length);
        System.out.println("Reverse of array 2: ");
        printAraay(brr,brr.length);

        
    }

    
}
