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
    public static void main(String args[]){
        int arr1[] = {2,4,17,0,5};
        System.out.println("The minimum number in array 1 : " + findMinimumElement(arr1));

        int arr2[] = {8,10,-5,9,125,112};
        System.out.println("The minimum number in array 2 : " + findMinimumElement(arr2));
    }

}
