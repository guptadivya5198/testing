public class Sumofarray {
    public static void main(String args[]){
        int arr[] ={1,3,5,7,8,2};
      printSumOfArray(arr);

    }

    static void printSumOfArray(int[] arr){
        int sum =0;
        for(int i =0; i<arr.length ; i++){
            sum = arr[i] + sum;
        }
        System.out.println(sum);
    }
}
