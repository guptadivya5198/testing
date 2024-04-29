
public class printAlternatenum {
    public static void main(String args[]){
        int arr[] = {10,20,40,60,70,80};
        printAlternatenumber(arr);
        
    }

    static void printAlternatenumber(int[] arr){
        for(int i =0; i <arr.length; i++){
            if(i % 2!= 0){
                System.out.println(arr[i]);
            }
        }
    }
}
