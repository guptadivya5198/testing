import java.util.Arrays;

class Node {
    int info;
    Node next;

    Node(int info) {
        this.info = info;
    }
}

class TNode {
    int info;
    TNode left;
    TNode right;

    TNode(int info) {
        this.info = info;
    }
}

public class ArrayClass {

    static TNode insertElement(TNode root, int info) {
        if (root == null)
            return new TNode(info);
        TNode par = null;
        TNode curr = root;
        while (curr != null) {
            if (curr.info > info) {
                par = curr;
                curr = curr.left;
            } else {
                par = curr;
                curr = curr.right;
            }

        }
        if (info > par.info) {
            par.right = new TNode(info);
        } else {
            par.left = new TNode(info);
        }
        return root;
    }

    static void inOrderTraversal(TNode root) {
        if (root != null) {
            inOrderTraversal(root.left);
            System.out.println(root.info);
            inOrderTraversal(root.right);
        }
    }

    public static void main(String[] args) {

        TNode root = null;

        Node head = null;
        root = insertElement(root, 100);
        root = insertElement(root, 200);
        root = insertElement(root, 300);
        root = insertElement(root, 150);
        root = insertElement(root, 50);
        root = insertElement(root, 55);
        root = insertElement(root, 40);
        root = insertElement(root, 75);
        inOrderTraversal(root);

        // Node node;

        // node = new Node(10);
        // head = node;
        // node = new Node(20);
        // node.next = head;
        // head = node;
        // node = new Node(30);
        // node.next = head;
        // head = node;
        // printLinkedList(head);
        // System.out.println("THis is simple");
        // int[] arr1 = { 10, 14, 18 ,100,200};
        // int[] arr2 = { 11, 15, 20 };

        // prinElement(arr);
        // sumElement(arr);
        // printAlternameElement(arr);
        // printElementOnetoHundred();
        // printPrimeNumber(12);
        // bubbleSort(arr);
        // prinElement(arr);
        // mergeSort(arr, 0, arr.length - 1);
        // mergeTwoSortedArray(arr1, ainsertLastead = insertLast(head,100);
        // head = insertLast(head, 200);
        // head = insertLast(head, 300);
        // head = insertLast(head, 400);
        // head = insertLast(head, 500);
        // head = insertLast(head, 600);
        // head = insertLast(head, 700);
        // head = insertAtPosition(head, 1000, 100);
        // printLinkedList(head);
        // int[] arr = { 11, 14, 12, 100 };
        // mergeSort(arr, 0, arr.length - 1);
        // quickSort(arr, 0, arr.length - 1);

        // prinElement(arr);

    }

    static void quickSort(int[] arr, int l, int h) {
        if (l < h) {
            int p = partition(arr, l, h);
            quickSort(arr, l, p);
            quickSort(arr, p + 1, h);
        }
    }

    static int partition(int[] arr, int l, int h) {
        int i = l - 1;
        int j = h + 1;
        int pivot = arr[l];
        do {
            i++;
        } while (arr[i] < pivot);
        do {
            j--;
        } while (arr[j] > pivot);

        if (i >= j)
            return j;
        int c = arr[i];
        arr[i] = arr[j];
        arr[j] = c;
        return 0;
    }

    static Node insertAtPosition(Node head, int num, int pos) {
        Node temp = head;
        if (pos == 1) {
            // Node node = new Node(num);
            // node.next = head;
            // head = node;
            head = insertBegin(head, num);
            return head;
        }
        while (pos - 2 > 0) {
            pos = pos - 1;

            temp = temp.next;
            if (temp == null) {
                System.out.println("Out of boundry");
                return head;
            }
        }
        System.out.println(temp.info);
        Node node = new Node(num);
        node.next = temp.next;
        temp.next = node;

        return head;
    }

    static Node insertLast(Node head, int num) {
        if (head == null)
            return new Node(num);
        Node node = new Node(num);
        Node temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = node;
        return head;

    }

    static Node insertBegin(Node head, int num) {
        if (head == null) {
            return new Node(num);
        }
        Node node = new Node(num);
        node.next = head;
        head = node;
        return head;

    }

    static void printLinkedList(Node head) {
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.info + "=>");
            temp = temp.next;

        }
    }

    static void mergeTwoSortedArray(int[] a, int[] b) {
        int[] c = new int[a.length + b.length];
        int i = 0;
        int j = 0;
        int k = 0;
        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                c[k] = a[i];
                i++;
                k++;
            } else {
                c[k] = b[j];
                j++;
                k++;
            }
        }
        while (i < a.length) {
            c[k] = a[i];
            k++;
            i++;
        }
        while (j < b.length) {
            c[k] = b[j];
            k++;
            j++;
        }

        System.out.println(Arrays.toString(c));
    }

    // merge Sort
    static void mergeSort(int[] arr, int l, int h) {
        if (l < h) {
            int mid = (l + h) / 2;
            mergeSort(arr, l, mid);
            mergeSort(arr, mid + 1, h);
            merge(arr, l, mid, h);
        }
    }

    static void merge(int[] arr, int l, int mid, int h) {
        int n1 = mid - l + 1;
        int n2 = h - mid;
        int[] left = new int[n1];
        int[] right = new int[n2];

        for (int i = 0; i < left.length; i++) {
            left[i] = arr[l + i];
        }
        for (int j = 0; j < right.length; j++) {
            right[j] = arr[mid + 1 + j];
        }
        int i = 0;
        int j = 0;
        int n = l;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                arr[n] = left[i];
                n++;
                i++;
            } else {
                arr[n] = right[j];
                n++;
                j++;
            }
        }

        while (i < left.length) {
            arr[n] = left[i];
            n++;
            i++;

        }

        while (j < right.length) {
            arr[n] = right[j];
            n++;
            j++;
        }

    }

    // bubble sort
    static void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int c = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = c;
                }
            }
        }
    }

    // Print Prime number

    static void printPrimeNumber(int n) {
        int i;
        for (i = 2; i < n; i++) {
            if (n % i == 0) {
                System.out.println("Not Prime");
                break;
            }
        }
        if (i == n)
            System.out.println("Prime");

    }

    // 1 to 100

    static void printElementOnetoHundred() {
        int sum = 0;

        for (int i = 0; i < 101; i++) {
            if (i % 2 != 0) {
                sum = sum + i;
            }

        }
        System.out.println(sum);
    }

    // print alternate element in array
    static void printAlternameElement(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            if (i % 2 != 0) {
                System.out.println(arr[i]);
            }
        }

    }

    // add all element of given array
    static void sumElement(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum = arr[i] + sum;
        }
        System.out.println(sum);
    }

    // print the array
    static void prinElement(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

}