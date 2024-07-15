

public class LinearSearch {
    public static boolean search(int arr[], int key){
        for(int i =0; i<arr.length; i++){
            if(arr[i] ==key){
                return true;
        
            }
        }
                return false;
    }

    public static void main(String args[]){
       int arr[] = {10,7,8,5,4,3};
       System.out.println("enter the key : "  );
       int  key;

        boolean found = search(arr,key);
        if(found){
            System.out.println("present");
        }
        else{
            System.out.println("absent");
        }
        
    }
    
}
