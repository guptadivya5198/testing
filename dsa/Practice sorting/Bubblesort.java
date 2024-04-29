import java.util.Arrays;

class Bubblesort{
  public static void main(String args[]){
    int arr[] = {2,4,3,1,30,50,20};
    printBubbleSort(arr);
    
    System.out.println(Arrays.toString(arr));
  }
static void printBubbleSort(int[] arr){

    for(int i=0; i < arr.length; i++ ){
        for(int j = 0; j <arr.length-1; j++){
            if(arr[j]> arr[j+1]){
               int temp = arr[j];
                arr[j] = arr[ j+1 ];
                arr[j+1] = temp;
            
            }
        }
    }
}
}