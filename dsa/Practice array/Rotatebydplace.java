public class Rotatebydplace {
    public static void Reversearray(int[] arr,int d, int[] temp){
            int n = arr.length;
            // for find minimum d
            d = d%n;
            // storing value of arr in temp
            for(int i =0; i<d; i++){
               temp[i] = arr[i];
            }
    
            // for shifting for dth to i position
            for(int i=d; i<n; i++){
                arr[i-d] = arr[i];
            }
    
            // for restore the entire array
            for(int i=n-d; i<n;i++){
                arr[i]= temp[i-(n-d)];
            }
            
        }
        
        public static void main(String args[]){
            int[] arr ={ 1,2,3,4,5,6,7};
            int d =3;
            Reversearray(arr, d,new int[d]);
            System.out.println("The resultent array is:");
            for(int i =0; i<arr.length; i++){
                System.out.print(arr[i] + " ");
            }
           
        }
    }
    
    

