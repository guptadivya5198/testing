import java.lang.Integer;
public class Secondlargest {
   
    static int secondlargest(int[] a, int n){
        int largest = a[0];
        int slargest =-1;
        for (int i =0; i<n; i++){
            if (a[i]>largest){
                slargest = largest;
                largest =a[i];
            }

            else if(a[i] < largest && a[i] > slargest){
                slargest = a[i];
            }
        }
        return secondlargest(a, n);
    }

    static int secondSmallest(int[]a ,int n){
        int smallest = a[0];
        int ssmallest = Integer.MAX_VALUE;
        for (int i =0; i<n ; i++){
            if(a[i]> smallest){
                ssmallest = smallest;
                smallest = a[i];
            }
            else if(a[i]!= smallest && a[i]< ssmallest){
                ssmallest = a[i];
            }
        }
        return secondSmallest(a , n);
    }
    public static void main(String args[]){
        
        int[] result = Secondlargest(a,n); // Pass array and size
        System.out.println("Second largest: " + result[0]);
        System.out.println("Smallest: " + result[1]);

        int slargest = Integer.MIN_VALUE;
        int ssmallest = Integer.MAX_VALUE;
    }
}

