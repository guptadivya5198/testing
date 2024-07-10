
public class Leftrotateby1place{

    public static void Reversbyoneplace(int arr[], int n){
        int temp = arr[0];
        for(int i =0; i<n-1;i++){
            arr[i] =arr[i+1];
        }

        arr[n-1]= temp;
        for(int i=0; i<n ; i++){
            System.out.print(arr[i]+ " ");
        }
    }

    public static void main(String args[]){
        int n =7;
        int arr[] = {1,2,3,4,5,6,7};
        Reversbyoneplace( arr,n);
    
    }
}