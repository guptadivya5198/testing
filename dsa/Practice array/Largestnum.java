//  public class Largestnum{
//     public static void main(String args[]){
//         int nums[] = { 4,6,15,9,111,12};
//         int Largest =  nums[0];
//         for(int i =0; i< nums.length; i++ ){
//             if(nums[i] > Largest){
//                 Largest = nums [i];
//             }
//         }
//         System.out.println(Largest);

//     }

// }

public class Largestnum{
   
    static int findLargestElement(int arr[]){
        int max = arr[0];
        for(int i =0; i< arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        return max;
    }
    public static void main(String args[]){
        int arr1[] = {2,4,17,0,5};
        System.out.println("The largest number in array 1 : " + findLargestElement(arr1));

        int arr2[] = {8,10,5,9,125,112};
        System.out.println("The largest number in array 2 : " + findLargestElement(arr2));
    }

}

    
        

   
