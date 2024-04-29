public class ArrayPrimeNumber {
    public static void main(String args[]){
        printPrimeNumber(14);
    }

    static void printPrimeNumber(int n){
        int i;
        for(i =2; i<n ; i++){
            if(n % i == 0){
                System.out.println("Not Prime Number");
                break;
            }
        }

        if(i == n){
            System.out.println("Prime Number");
        }
    }   
}
