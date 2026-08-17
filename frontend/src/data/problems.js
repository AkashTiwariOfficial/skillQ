export const PROBLEMS = {

  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: ["You may assume that each input would have exactly one solution, and you may not use the same element twice.", "You can return the answer in any order."],
    },
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
    ],
    constraints: ["2 \u2264 nums.length \u2264 10\u2074", "-10\u2079 \u2264 nums[i] \u2264 10\u2079", "-10\u2079 \u2264 target \u2264 10\u2079", "Only one valid answer exists"],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0,1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1,2]
console.log(twoSum([3, 3], 6)); // Expected: [0,1]
console.log(twoSum([2, 5, 5, 11], 10)); // Expected: [1,2]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]
print(twoSum([2, 5, 5, 11], 10))  # Expected: [1, 2]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{2, 5, 5, 11}, 10))); // Expected: [1, 2]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

template <typename T>
void printVector(vector<T>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i + 1 != v.size()) cout << ", ";
    }
    cout << "]" << endl;
}

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<int> result1 = twoSum({2, 7, 11, 15}, 9);
    printVector(result1); // Expected: [0, 1]
    vector<int> result2 = twoSum({3, 2, 4}, 6);
    printVector(result2); // Expected: [1, 2]
    vector<int> result3 = twoSum({3, 3}, 6);
    printVector(result3); // Expected: [0, 1]
    vector<int> result4 = twoSum({2, 5, 5, 11}, 10);
    printVector(result4); // Expected: [1, 2]
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void printIntArray(int* arr, int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i != n - 1) printf(", ");
    }
    printf("]\\n");
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Write your solution here
    
    *returnSize = 0;
    return NULL;
}

int main() {
    int nums1[] = {2, 7, 11, 15};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    int target1 = 9;
    int returnSize1;
    int* result1 = twoSum(nums1, nums1Size, target1, &returnSize1);
    printIntArray(result1, returnSize1); // Expected: [0, 1]

    int nums2[] = {3, 2, 4};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    int target2 = 6;
    int returnSize2;
    int* result2 = twoSum(nums2, nums2Size, target2, &returnSize2);
    printIntArray(result2, returnSize2); // Expected: [1, 2]

    int nums3[] = {3, 3};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    int target3 = 6;
    int returnSize3;
    int* result3 = twoSum(nums3, nums3Size, target3, &returnSize3);
    printIntArray(result3, returnSize3); // Expected: [0, 1]

    int nums4[] = {2, 5, 5, 11};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    int target4 = 10;
    int returnSize4;
    int* result4 = twoSum(nums4, nums4Size, target4, &returnSize4);
    printIntArray(result4, returnSize4); // Expected: [1, 2]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `[0,1]
[1,2]
[0,1]
[1,2]`,
      python: `[0, 1]
[1, 2]
[0, 1]
[1, 2]`,
      java: `[0, 1]
[1, 2]
[0, 1]
[1, 2]`,
      cpp: `[0, 1]
[1, 2]
[0, 1]
[1, 2]`,
      c: `[0, 1]
[1, 2]
[0, 1]
[1, 2]`,
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      { input: "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]", output: "[\"o\",\"l\",\"l\",\"e\",\"h\"]" },
      { input: "s = [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]", output: "[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]" },
    ],
    constraints: ["1 \u2264 s.length \u2264 10\u2075", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h", "e", "l", "l", "o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]
let test2 = ["H", "a", "n", "n", "a", "h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]
let test3 = ["a"];
reverseString(test3);
console.log(test3); // Expected: ["a"]
let test4 = ["1", "2", "3", "4"];
reverseString(test4);
console.log(test4); // Expected: ["4","3","2","1"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h", "e", "l", "l", "o"]
reverseString(test1)
print(test1)  # Expected: ['o', 'l', 'l', 'e', 'h']
test2 = ["H", "a", "n", "n", "a", "h"]
reverseString(test2)
print(test2)  # Expected: ['h', 'a', 'n', 'n', 'a', 'H']
test3 = ["a"]
reverseString(test3)
print(test3)  # Expected: ['a']
test4 = ["1", "2", "3", "4"]
reverseString(test4)
print(test4)  # Expected: ['4', '3', '2', '1']`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h', 'e', 'l', 'l', 'o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        char[] test2 = {'H', 'a', 'n', 'n', 'a', 'h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
        char[] test3 = {'a'};
        reverseString(test3);
        System.out.println(Arrays.toString(test3)); // Expected: [a]
        char[] test4 = {'1', '2', '3', '4'};
        reverseString(test4);
        System.out.println(Arrays.toString(test4)); // Expected: [4, 3, 2, 1]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

template <typename T>
void printVector(vector<T>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i + 1 != v.size()) cout << ", ";
    }
    cout << "]" << endl;
}

void reverseString(vector<char>& s) {
    // Write your solution here
    
}

int main() {
    vector<char> test1 = {"h", "e", "l", "l", "o"};
    reverseString(test1);
    printVector(test1); // Expected: [o, l, l, e, h]
    vector<char> test2 = {"H", "a", "n", "n", "a", "h"};
    reverseString(test2);
    printVector(test2); // Expected: [h, a, n, n, a, H]
    vector<char> test3 = {"a"};
    reverseString(test3);
    printVector(test3); // Expected: [a]
    vector<char> test4 = {"1", "2", "3", "4"};
    reverseString(test4);
    printVector(test4); // Expected: [4, 3, 2, 1]
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void printStringArray(char* arr[], int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%s", arr[i]);
        if (i != n - 1) printf(", ");
    }
    printf("]\\n");
}

void reverseString(char* s[], int sSize) {
    // Write your solution here
    
}

int main() {
    char* s1[] = {"h", "e", "l", "l", "o"};
    int s1Size = sizeof(s1) / sizeof(s1[0]);
    reverseString(s1, s1Size);
    printStringArray(s1, s1Size); // Expected: [o, l, l, e, h]

    char* s2[] = {"H", "a", "n", "n", "a", "h"};
    int s2Size = sizeof(s2) / sizeof(s2[0]);
    reverseString(s2, s2Size);
    printStringArray(s2, s2Size); // Expected: [h, a, n, n, a, H]

    char* s3[] = {"a"};
    int s3Size = sizeof(s3) / sizeof(s3[0]);
    reverseString(s3, s3Size);
    printStringArray(s3, s3Size); // Expected: [a]

    char* s4[] = {"1", "2", "3", "4"};
    int s4Size = sizeof(s4) / sizeof(s4[0]);
    reverseString(s4, s4Size);
    printStringArray(s4, s4Size); // Expected: [4, 3, 2, 1]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `["o","l","l","e","h"]
["h","a","n","n","a","H"]
["a"]
["4","3","2","1"]`,
      python: `['o', 'l', 'l', 'e', 'h']
['h', 'a', 'n', 'n', 'a', 'H']
['a']
['4', '3', '2', '1']`,
      java: `[o, l, l, e, h]
[h, a, n, n, a, H]
[a]
[4, 3, 2, 1]`,
      cpp: `[o, l, l, e, h]
[h, a, n, n, a, H]
[a]
[4, 3, 2, 1]`,
      c: `[o, l, l, e, h]
[h, a, n, n, a, H]
[a]
[4, 3, 2, 1]`,
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      { input: "s = \"A man, a plan, a canal: Panama\"", output: "true", explanation: "\"amanaplanacanalpanama\" is a palindrome." },
      { input: "s = \"race a car\"", output: "false", explanation: "\"raceacar\" is not a palindrome." },
      { input: "s = \" \"", output: "true", explanation: "s is an empty string \"\" after removing non-alphanumeric characters." },
    ],
    constraints: ["1 \u2264 s.length \u2264 2 * 10\u2075", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true
console.log(isPalindrome("ab_a")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True
print(isPalindrome("ab_a"))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
        System.out.println(isPalindrome("ab_a")); // Expected: true
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha << isPalindrome("A man, a plan, a canal: Panama") << endl; // Expected: true
    cout << boolalpha << isPalindrome("race a car") << endl; // Expected: false
    cout << boolalpha << isPalindrome(" ") << endl; // Expected: true
    cout << boolalpha << isPalindrome("ab_a") << endl; // Expected: true
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

bool isPalindrome(char* s) {
    // Write your solution here
    
    return false;
}

int main() {
    char s1[] = "A man, a plan, a canal: Panama";
    printf("%s\\n", isPalindrome(s1) ? "true" : "false"); // Expected: true

    char s2[] = "race a car";
    printf("%s\\n", isPalindrome(s2) ? "true" : "false"); // Expected: false

    char s3[] = " ";
    printf("%s\\n", isPalindrome(s3) ? "true" : "false"); // Expected: true

    char s4[] = "ab_a";
    printf("%s\\n", isPalindrome(s4) ? "true" : "false"); // Expected: true

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `true
false
true
true`,
      python: `True
False
True
True`,
      java: `true
false
true
true`,
      cpp: `true
false
true
true`,
      c: `true
false
true
true`,
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." },
      { input: "nums = [1]", output: "1", explanation: "The subarray [1] has the largest sum 1." },
      { input: "nums = [5,4,-1,7,8]", output: "23", explanation: "The subarray [5,4,-1,7,8] has the largest sum 23." },
    ],
    constraints: ["1 \u2264 nums.length \u2264 10\u2075", "-10\u2074 \u2264 nums[i] \u2264 10\u2074"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // Expected: 23
console.log(maxSubArray([-1, -2, -3])); // Expected: -1`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5, 4, -1, 7, 8]))  # Expected: 23
print(maxSubArray([-1, -2, -3]))  # Expected: -1`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5, 4, -1, 7, 8})); // Expected: 23
        System.out.println(maxSubArray(new int[]{-1, -2, -3})); // Expected: -1
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int maxSubArray(vector<int>& nums) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << maxSubArray({-2, 1, -3, 4, -1, 2, 1, -5, 4}) << endl; // Expected: 6
    cout << maxSubArray({1}) << endl; // Expected: 1
    cout << maxSubArray({5, 4, -1, 7, 8}) << endl; // Expected: 23
    cout << maxSubArray({-1, -2, -3}) << endl; // Expected: -1
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int maxSubArray(int* nums, int numsSize) {
    // Write your solution here
    
    return 0;
}

int main() {
    int nums1[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    printf("%d\\n", maxSubArray(nums1, nums1Size)); // Expected: 6

    int nums2[] = {1};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    printf("%d\\n", maxSubArray(nums2, nums2Size)); // Expected: 1

    int nums3[] = {5, 4, -1, 7, 8};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    printf("%d\\n", maxSubArray(nums3, nums3Size)); // Expected: 23

    int nums4[] = {-1, -2, -3};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    printf("%d\\n", maxSubArray(nums4, nums4Size)); // Expected: -1

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `6
1
23
-1`,
      python: `6
1
23
-1`,
      java: `6
1
23
-1`,
      cpp: `6
1
23
-1`,
      c: `6
1
23
-1`,
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: ["Find two lines that together with the x-axis form a container, such that the container contains the most water.", "Return the maximum amount of water a container can store.", "Notice that you may not slant the container."],
    },
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", explanation: "The max area of water the container can contain is 49." },
      { input: "height = [1,1]", output: "1" },
    ],
    constraints: ["n == height.length", "2 \u2264 n \u2264 10\u2075", "0 \u2264 height[i] \u2264 10\u2074"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Expected: 49
console.log(maxArea([1, 1])); // Expected: 1
console.log(maxArea([4, 3, 2, 1, 4])); // Expected: 16
console.log(maxArea([1, 2, 1])); // Expected: 2`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))  # Expected: 49
print(maxArea([1, 1]))  # Expected: 1
print(maxArea([4, 3, 2, 1, 4]))  # Expected: 16
print(maxArea([1, 2, 1]))  # Expected: 2`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1, 8, 6, 2, 5, 4, 8, 3, 7})); // Expected: 49
        System.out.println(maxArea(new int[]{1, 1})); // Expected: 1
        System.out.println(maxArea(new int[]{4, 3, 2, 1, 4})); // Expected: 16
        System.out.println(maxArea(new int[]{1, 2, 1})); // Expected: 2
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int maxArea(vector<int>& height) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << maxArea({1, 8, 6, 2, 5, 4, 8, 3, 7}) << endl; // Expected: 49
    cout << maxArea({1, 1}) << endl; // Expected: 1
    cout << maxArea({4, 3, 2, 1, 4}) << endl; // Expected: 16
    cout << maxArea({1, 2, 1}) << endl; // Expected: 2
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int maxArea(int* height, int heightSize) {
    // Write your solution here
    
    return 0;
}

int main() {
    int height1[] = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    int height1Size = sizeof(height1) / sizeof(height1[0]);
    printf("%d\\n", maxArea(height1, height1Size)); // Expected: 49

    int height2[] = {1, 1};
    int height2Size = sizeof(height2) / sizeof(height2[0]);
    printf("%d\\n", maxArea(height2, height2Size)); // Expected: 1

    int height3[] = {4, 3, 2, 1, 4};
    int height3Size = sizeof(height3) / sizeof(height3[0]);
    printf("%d\\n", maxArea(height3, height3Size)); // Expected: 16

    int height4[] = {1, 2, 1};
    int height4Size = sizeof(height4) / sizeof(height4[0]);
    printf("%d\\n", maxArea(height4, height4Size)); // Expected: 2

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `49
1
16
2`,
      python: `49
1
16
2`,
      java: `49
1
16
2`,
      cpp: `49
1
16
2`,
      c: `49
1
16
2`,
    },
  },

  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      notes: ["Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0."],
    },
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 5." },
      { input: "prices = [7,6,4,3,1]", output: "0", explanation: "No transactions are done, max profit = 0." },
    ],
    constraints: ["1 \u2264 prices.length \u2264 10\u2075", "0 \u2264 prices[i] \u2264 10\u2074"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Expected: 0
console.log(maxProfit([2, 4, 1])); // Expected: 2
console.log(maxProfit([3, 3, 3, 3])); // Expected: 0`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7, 1, 5, 3, 6, 4]))  # Expected: 5
print(maxProfit([7, 6, 4, 3, 1]))  # Expected: 0
print(maxProfit([2, 4, 1]))  # Expected: 2
print(maxProfit([3, 3, 3, 3]))  # Expected: 0`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7, 1, 5, 3, 6, 4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7, 6, 4, 3, 1})); // Expected: 0
        System.out.println(maxProfit(new int[]{2, 4, 1})); // Expected: 2
        System.out.println(maxProfit(new int[]{3, 3, 3, 3})); // Expected: 0
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << maxProfit({7, 1, 5, 3, 6, 4}) << endl; // Expected: 5
    cout << maxProfit({7, 6, 4, 3, 1}) << endl; // Expected: 0
    cout << maxProfit({2, 4, 1}) << endl; // Expected: 2
    cout << maxProfit({3, 3, 3, 3}) << endl; // Expected: 0
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int maxProfit(int* prices, int pricesSize) {
    // Write your solution here
    
    return 0;
}

int main() {
    int prices1[] = {7, 1, 5, 3, 6, 4};
    int prices1Size = sizeof(prices1) / sizeof(prices1[0]);
    printf("%d\\n", maxProfit(prices1, prices1Size)); // Expected: 5

    int prices2[] = {7, 6, 4, 3, 1};
    int prices2Size = sizeof(prices2) / sizeof(prices2[0]);
    printf("%d\\n", maxProfit(prices2, prices2Size)); // Expected: 0

    int prices3[] = {2, 4, 1};
    int prices3Size = sizeof(prices3) / sizeof(prices3[0]);
    printf("%d\\n", maxProfit(prices3, prices3Size)); // Expected: 2

    int prices4[] = {3, 3, 3, 3};
    int prices4Size = sizeof(prices4) / sizeof(prices4[0]);
    printf("%d\\n", maxProfit(prices4, prices4Size)); // Expected: 0

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `5
0
2
0`,
      python: `5
0
2
0`,
      java: `5
0
2
0`,
      cpp: `5
0
2
0`,
      c: `5
0
2
0`,
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" },
    ],
    constraints: ["1 \u2264 nums.length \u2264 10\u2075", "-10\u2079 \u2264 nums[i] \u2264 10\u2079"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 1])); // Expected: true
console.log(containsDuplicate([1, 2, 3, 4])); // Expected: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Expected: true
console.log(containsDuplicate([5])); // Expected: false`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1, 2, 3, 1]))  # Expected: True
print(containsDuplicate([1, 2, 3, 4]))  # Expected: False
print(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))  # Expected: True
print(containsDuplicate([5]))  # Expected: False`,
      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1, 2, 3, 1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1, 2, 3, 4})); // Expected: false
        System.out.println(containsDuplicate(new int[]{1, 1, 1, 3, 3, 4, 3, 2, 4, 2})); // Expected: true
        System.out.println(containsDuplicate(new int[]{5})); // Expected: false
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha << containsDuplicate({1, 2, 3, 1}) << endl; // Expected: true
    cout << boolalpha << containsDuplicate({1, 2, 3, 4}) << endl; // Expected: false
    cout << boolalpha << containsDuplicate({1, 1, 1, 3, 3, 4, 3, 2, 4, 2}) << endl; // Expected: true
    cout << boolalpha << containsDuplicate({5}) << endl; // Expected: false
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

bool containsDuplicate(int* nums, int numsSize) {
    // Write your solution here
    
    return false;
}

int main() {
    int nums1[] = {1, 2, 3, 1};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    printf("%s\\n", containsDuplicate(nums1, nums1Size) ? "true" : "false"); // Expected: true

    int nums2[] = {1, 2, 3, 4};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    printf("%s\\n", containsDuplicate(nums2, nums2Size) ? "true" : "false"); // Expected: false

    int nums3[] = {1, 1, 1, 3, 3, 4, 3, 2, 4, 2};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    printf("%s\\n", containsDuplicate(nums3, nums3Size) ? "true" : "false"); // Expected: true

    int nums4[] = {5};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    printf("%s\\n", containsDuplicate(nums4, nums4Size) ? "true" : "false"); // Expected: false

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `true
false
true
false`,
      python: `True
False
True
False`,
      java: `true
false
true
false`,
      cpp: `true
false
true
false`,
      c: `true
false
true
false`,
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
      notes: [],
    },
    examples: [
      { input: "s = \"anagram\", t = \"nagaram\"", output: "true" },
      { input: "s = \"rat\", t = \"car\"", output: "false" },
    ],
    constraints: ["1 \u2264 s.length, t.length \u2264 5 * 10\u2074", "s and t consist of lowercase English letters"],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false
console.log(isAnagram("a", "a")); // Expected: true
console.log(isAnagram("ab", "a")); // Expected: false`,
      python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))  # Expected: False
print(isAnagram("a", "a"))  # Expected: True
print(isAnagram("ab", "a"))  # Expected: False`,
      java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car")); // Expected: false
        System.out.println(isAnagram("a", "a")); // Expected: true
        System.out.println(isAnagram("ab", "a")); // Expected: false
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isAnagram(string s, string t) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha << isAnagram("anagram", "nagaram") << endl; // Expected: true
    cout << boolalpha << isAnagram("rat", "car") << endl; // Expected: false
    cout << boolalpha << isAnagram("a", "a") << endl; // Expected: true
    cout << boolalpha << isAnagram("ab", "a") << endl; // Expected: false
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

bool isAnagram(char* s, char* t) {
    // Write your solution here
    
    return false;
}

int main() {
    char s1[] = "anagram";
    char t1[] = "nagaram";
    printf("%s\\n", isAnagram(s1, t1) ? "true" : "false"); // Expected: true

    char s2[] = "rat";
    char t2[] = "car";
    printf("%s\\n", isAnagram(s2, t2) ? "true" : "false"); // Expected: false

    char s3[] = "a";
    char t3[] = "a";
    printf("%s\\n", isAnagram(s3, t3) ? "true" : "false"); // Expected: true

    char s4[] = "ab";
    char t4[] = "a";
    printf("%s\\n", isAnagram(s4, t4) ? "true" : "false"); // Expected: false

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `true
false
true
false`,
      python: `True
False
True
False`,
      java: `true
false
true
false`,
      cpp: `true
false
true
false`,
      c: `true
false
true
false`,
    },
  },

  "missing-number": {
    id: "missing-number",
    title: "Missing Number",
    difficulty: "Easy",
    category: "Array • Math",
    description: {
      text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
      notes: [],
    },
    examples: [
      { input: "nums = [3,0,1]", output: "2" },
      { input: "nums = [0,1]", output: "2" },
    ],
    constraints: ["n == nums.length", "1 \u2264 n \u2264 10\u2074", "0 \u2264 nums[i] \u2264 n", "All numbers are unique"],
    starterCode: {
      javascript: `function missingNumber(nums) {
  // Write your solution here
  
}

// Test cases
console.log(missingNumber([3, 0, 1])); // Expected: 2
console.log(missingNumber([0, 1])); // Expected: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Expected: 8
console.log(missingNumber([0])); // Expected: 1`,
      python: `def missingNumber(nums):
    # Write your solution here
    pass

# Test cases
print(missingNumber([3, 0, 1]))  # Expected: 2
print(missingNumber([0, 1]))  # Expected: 2
print(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))  # Expected: 8
print(missingNumber([0]))  # Expected: 1`,
      java: `class Solution {
    public static int missingNumber(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(missingNumber(new int[]{3, 0, 1})); // Expected: 2
        System.out.println(missingNumber(new int[]{0, 1})); // Expected: 2
        System.out.println(missingNumber(new int[]{9, 6, 4, 2, 3, 5, 7, 0, 1})); // Expected: 8
        System.out.println(missingNumber(new int[]{0})); // Expected: 1
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int missingNumber(vector<int>& nums) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << missingNumber({3, 0, 1}) << endl; // Expected: 2
    cout << missingNumber({0, 1}) << endl; // Expected: 2
    cout << missingNumber({9, 6, 4, 2, 3, 5, 7, 0, 1}) << endl; // Expected: 8
    cout << missingNumber({0}) << endl; // Expected: 1
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int missingNumber(int* nums, int numsSize) {
    // Write your solution here
    
    return 0;
}

int main() {
    int nums1[] = {3, 0, 1};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    printf("%d\\n", missingNumber(nums1, nums1Size)); // Expected: 2

    int nums2[] = {0, 1};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    printf("%d\\n", missingNumber(nums2, nums2Size)); // Expected: 2

    int nums3[] = {9, 6, 4, 2, 3, 5, 7, 0, 1};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    printf("%d\\n", missingNumber(nums3, nums3Size)); // Expected: 8

    int nums4[] = {0};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    printf("%d\\n", missingNumber(nums4, nums4Size)); // Expected: 1

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `2
2
8
1`,
      python: `2
2
8
1`,
      java: `2
2
8
1`,
      cpp: `2
2
8
1`,
      c: `2
2
8
1`,
    },
  },

  "fizz-buzz": {
    id: "fizz-buzz",
    title: "Fizz Buzz",
    difficulty: "Easy",
    category: "Math • String",
    description: {
      text: "Given an integer n, return a string array answer (1-indexed) where: answer[i] == \"FizzBuzz\" if i is divisible by 3 and 5, answer[i] == \"Fizz\" if i is divisible by 3, answer[i] == \"Buzz\" if i is divisible by 5, answer[i] == i (as a string) if none of the above conditions are true.",
      notes: [],
    },
    examples: [
      { input: "n = 3", output: "[\"1\",\"2\",\"Fizz\"]" },
      { input: "n = 5", output: "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]" },
    ],
    constraints: ["1 \u2264 n \u2264 10\u2074"],
    starterCode: {
      javascript: `function fizzBuzz(n) {
  // Write your solution here
  
}

// Test cases
console.log(fizzBuzz(5)); // Expected: ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); // Expected: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
console.log(fizzBuzz(3)); // Expected: ["1","2","Fizz"]
console.log(fizzBuzz(1)); // Expected: ["1"]`,
      python: `def fizzBuzz(n):
    # Write your solution here
    pass

# Test cases
print(fizzBuzz(5))  # Expected: ['1', '2', 'Fizz', '4', 'Buzz']
print(fizzBuzz(15))  # Expected: ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']
print(fizzBuzz(3))  # Expected: ['1', '2', 'Fizz']
print(fizzBuzz(1))  # Expected: ['1']`,
      java: `import java.util.*;

class Solution {
    public static String[] fizzBuzz(int n) {
        // Write your solution here
        
        return new String[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(fizzBuzz(5))); // Expected: [1, 2, Fizz, 4, Buzz]
        System.out.println(Arrays.toString(fizzBuzz(15))); // Expected: [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]
        System.out.println(Arrays.toString(fizzBuzz(3))); // Expected: [1, 2, Fizz]
        System.out.println(Arrays.toString(fizzBuzz(1))); // Expected: [1]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

template <typename T>
void printVector(vector<T>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i + 1 != v.size()) cout << ", ";
    }
    cout << "]" << endl;
}

vector<string> fizzBuzz(int n) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<string> result1 = fizzBuzz(5);
    printVector(result1); // Expected: [1, 2, Fizz, 4, Buzz]
    vector<string> result2 = fizzBuzz(15);
    printVector(result2); // Expected: [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]
    vector<string> result3 = fizzBuzz(3);
    printVector(result3); // Expected: [1, 2, Fizz]
    vector<string> result4 = fizzBuzz(1);
    printVector(result4); // Expected: [1]
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void printStringArray(char* arr[], int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%s", arr[i]);
        if (i != n - 1) printf(", ");
    }
    printf("]\\n");
}

char** fizzBuzz(int n, int* returnSize) {
    // Write your solution here
    
    *returnSize = 0;
    return NULL;
}

int main() {
    int n1 = 5;
    int returnSize1;
    char** result1 = fizzBuzz(n1, &returnSize1);
    printStringArray(result1, returnSize1); // Expected: [1, 2, Fizz, 4, Buzz]

    int n2 = 15;
    int returnSize2;
    char** result2 = fizzBuzz(n2, &returnSize2);
    printStringArray(result2, returnSize2); // Expected: [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]

    int n3 = 3;
    int returnSize3;
    char** result3 = fizzBuzz(n3, &returnSize3);
    printStringArray(result3, returnSize3); // Expected: [1, 2, Fizz]

    int n4 = 1;
    int returnSize4;
    char** result4 = fizzBuzz(n4, &returnSize4);
    printStringArray(result4, returnSize4); // Expected: [1]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `["1","2","Fizz","4","Buzz"]
["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
["1","2","Fizz"]
["1"]`,
      python: `['1', '2', 'Fizz', '4', 'Buzz']
['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']
['1', '2', 'Fizz']
['1']`,
      java: `[1, 2, Fizz, 4, Buzz]
[1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]
[1, 2, Fizz]
[1]`,
      cpp: `[1, 2, Fizz, 4, Buzz]
[1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]
[1, 2, Fizz]
[1]`,
      c: `[1, 2, Fizz, 4, Buzz]
[1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]
[1, 2, Fizz]
[1]`,
    },
  },

  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Array • Bit Manipulation",
    description: {
      text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
      notes: ["You must implement a solution with linear runtime complexity and use only constant extra space."],
    },
    examples: [
      { input: "nums = [2,2,1]", output: "1" },
      { input: "nums = [4,1,2,1,2]", output: "4" },
    ],
    constraints: ["1 \u2264 nums.length \u2264 3 * 10\u2074", "-3 * 10\u2074 \u2264 nums[i] \u2264 3 * 10\u2074"],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
  
}

// Test cases
console.log(singleNumber([2, 2, 1])); // Expected: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Expected: 4
console.log(singleNumber([1])); // Expected: 1
console.log(singleNumber([7, 3, 7])); // Expected: 3`,
      python: `def singleNumber(nums):
    # Write your solution here
    pass

# Test cases
print(singleNumber([2, 2, 1]))  # Expected: 1
print(singleNumber([4, 1, 2, 1, 2]))  # Expected: 4
print(singleNumber([1]))  # Expected: 1
print(singleNumber([7, 3, 7]))  # Expected: 3`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2, 2, 1})); // Expected: 1
        System.out.println(singleNumber(new int[]{4, 1, 2, 1, 2})); // Expected: 4
        System.out.println(singleNumber(new int[]{1})); // Expected: 1
        System.out.println(singleNumber(new int[]{7, 3, 7})); // Expected: 3
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int singleNumber(vector<int>& nums) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << singleNumber({2, 2, 1}) << endl; // Expected: 1
    cout << singleNumber({4, 1, 2, 1, 2}) << endl; // Expected: 4
    cout << singleNumber({1}) << endl; // Expected: 1
    cout << singleNumber({7, 3, 7}) << endl; // Expected: 3
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int singleNumber(int* nums, int numsSize) {
    // Write your solution here
    
    return 0;
}

int main() {
    int nums1[] = {2, 2, 1};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    printf("%d\\n", singleNumber(nums1, nums1Size)); // Expected: 1

    int nums2[] = {4, 1, 2, 1, 2};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    printf("%d\\n", singleNumber(nums2, nums2Size)); // Expected: 4

    int nums3[] = {1};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    printf("%d\\n", singleNumber(nums3, nums3Size)); // Expected: 1

    int nums4[] = {7, 3, 7};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    printf("%d\\n", singleNumber(nums4, nums4Size)); // Expected: 3

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `1
4
1
3`,
      python: `1
4
1
3`,
      java: `1
4
1
3`,
      cpp: `1
4
1
3`,
      c: `1
4
1
3`,
    },
  },

  "move-zeroes": {
    id: "move-zeroes",
    title: "Move Zeroes",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
      notes: ["You must do this in-place without making a copy of the array."],
    },
    examples: [
      { input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" },
      { input: "nums = [0]", output: "[0]" },
    ],
    constraints: ["1 \u2264 nums.length \u2264 10\u2074", "-2\u00b3\u00b9 \u2264 nums[i] \u2264 2\u00b3\u00b9 - 1"],
    starterCode: {
      javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}

// Test cases
let test1 = [0, 1, 0, 3, 12];
moveZeroes(test1);
console.log(test1); // Expected: [1,3,12,0,0]
let test2 = [0];
moveZeroes(test2);
console.log(test2); // Expected: [0]
let test3 = [1, 0, 1];
moveZeroes(test3);
console.log(test3); // Expected: [1,1,0]
let test4 = [0, 0, 1];
moveZeroes(test4);
console.log(test4); // Expected: [1,0,0]`,
      python: `def moveZeroes(nums):
    # Write your solution here
    pass

# Test cases
test1 = [0, 1, 0, 3, 12]
moveZeroes(test1)
print(test1)  # Expected: [1, 3, 12, 0, 0]
test2 = [0]
moveZeroes(test2)
print(test2)  # Expected: [0]
test3 = [1, 0, 1]
moveZeroes(test3)
print(test3)  # Expected: [1, 1, 0]
test4 = [0, 0, 1]
moveZeroes(test4)
print(test4)  # Expected: [1, 0, 0]`,
      java: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        int[] test1 = new int[]{0, 1, 0, 3, 12};
        moveZeroes(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [1, 3, 12, 0, 0]
        int[] test2 = new int[]{0};
        moveZeroes(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [0]
        int[] test3 = new int[]{1, 0, 1};
        moveZeroes(test3);
        System.out.println(Arrays.toString(test3)); // Expected: [1, 1, 0]
        int[] test4 = new int[]{0, 0, 1};
        moveZeroes(test4);
        System.out.println(Arrays.toString(test4)); // Expected: [1, 0, 0]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

template <typename T>
void printVector(vector<T>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i + 1 != v.size()) cout << ", ";
    }
    cout << "]" << endl;
}

void moveZeroes(vector<int>& nums) {
    // Write your solution here
    
}

int main() {
    vector<int> test1 = {0, 1, 0, 3, 12};
    moveZeroes(test1);
    printVector(test1); // Expected: [1, 3, 12, 0, 0]
    vector<int> test2 = {0};
    moveZeroes(test2);
    printVector(test2); // Expected: [0]
    vector<int> test3 = {1, 0, 1};
    moveZeroes(test3);
    printVector(test3); // Expected: [1, 1, 0]
    vector<int> test4 = {0, 0, 1};
    moveZeroes(test4);
    printVector(test4); // Expected: [1, 0, 0]
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void printIntArray(int* arr, int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i != n - 1) printf(", ");
    }
    printf("]\\n");
}

void moveZeroes(int* nums, int numsSize) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {0, 1, 0, 3, 12};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    moveZeroes(nums1, nums1Size);
    printIntArray(nums1, nums1Size); // Expected: [1, 3, 12, 0, 0]

    int nums2[] = {0};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    moveZeroes(nums2, nums2Size);
    printIntArray(nums2, nums2Size); // Expected: [0]

    int nums3[] = {1, 0, 1};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    moveZeroes(nums3, nums3Size);
    printIntArray(nums3, nums3Size); // Expected: [1, 1, 0]

    int nums4[] = {0, 0, 1};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    moveZeroes(nums4, nums4Size);
    printIntArray(nums4, nums4Size); // Expected: [1, 0, 0]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `[1,3,12,0,0]
[0]
[1,1,0]
[1,0,0]`,
      python: `[1, 3, 12, 0, 0]
[0]
[1, 1, 0]
[1, 0, 0]`,
      java: `[1, 3, 12, 0, 0]
[0]
[1, 1, 0]
[1, 0, 0]`,
      cpp: `[1, 3, 12, 0, 0]
[0]
[1, 1, 0]
[1, 0, 0]`,
      c: `[1, 3, 12, 0, 0]
[0]
[1, 1, 0]
[1, 0, 0]`,
    },
  },

  "majority-element": {
    id: "majority-element",
    title: "Majority Element",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array nums of size n, return the majority element (the element that appears more than \u230an / 2\u230b times).",
      notes: ["You may assume that the majority element always exists in the array."],
    },
    examples: [
      { input: "nums = [3,2,3]", output: "3" },
      { input: "nums = [2,2,1,1,1,2,2]", output: "2" },
    ],
    constraints: ["n == nums.length", "1 \u2264 n \u2264 5 * 10\u2074", "-10\u2079 \u2264 nums[i] \u2264 10\u2079"],
    starterCode: {
      javascript: `function majorityElement(nums) {
  // Write your solution here
  
}

// Test cases
console.log(majorityElement([3, 2, 3])); // Expected: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Expected: 2
console.log(majorityElement([1])); // Expected: 1
console.log(majorityElement([6, 5, 5])); // Expected: 5`,
      python: `def majorityElement(nums):
    # Write your solution here
    pass

# Test cases
print(majorityElement([3, 2, 3]))  # Expected: 3
print(majorityElement([2, 2, 1, 1, 1, 2, 2]))  # Expected: 2
print(majorityElement([1]))  # Expected: 1
print(majorityElement([6, 5, 5]))  # Expected: 5`,
      java: `class Solution {
    public static int majorityElement(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(majorityElement(new int[]{3, 2, 3})); // Expected: 3
        System.out.println(majorityElement(new int[]{2, 2, 1, 1, 1, 2, 2})); // Expected: 2
        System.out.println(majorityElement(new int[]{1})); // Expected: 1
        System.out.println(majorityElement(new int[]{6, 5, 5})); // Expected: 5
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int majorityElement(vector<int>& nums) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << majorityElement({3, 2, 3}) << endl; // Expected: 3
    cout << majorityElement({2, 2, 1, 1, 1, 2, 2}) << endl; // Expected: 2
    cout << majorityElement({1}) << endl; // Expected: 1
    cout << majorityElement({6, 5, 5}) << endl; // Expected: 5
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int majorityElement(int* nums, int numsSize) {
    // Write your solution here
    
    return 0;
}

int main() {
    int nums1[] = {3, 2, 3};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    printf("%d\\n", majorityElement(nums1, nums1Size)); // Expected: 3

    int nums2[] = {2, 2, 1, 1, 1, 2, 2};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    printf("%d\\n", majorityElement(nums2, nums2Size)); // Expected: 2

    int nums3[] = {1};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    printf("%d\\n", majorityElement(nums3, nums3Size)); // Expected: 1

    int nums4[] = {6, 5, 5};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    printf("%d\\n", majorityElement(nums4, nums4Size)); // Expected: 5

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `3
2
1
5`,
      python: `3
2
1
5`,
      java: `3
2
1
5`,
      cpp: `3
2
1
5`,
      c: `3
2
1
5`,
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps.",
      notes: ["In how many distinct ways can you climb to the top?"],
    },
    examples: [
      { input: "n = 2", output: "2", explanation: "1 step + 1 step, or 2 steps." },
      { input: "n = 3", output: "3", explanation: "1+1+1, 1+2, or 2+1." },
    ],
    constraints: ["1 \u2264 n \u2264 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3
console.log(climbStairs(4)); // Expected: 5
console.log(climbStairs(5)); // Expected: 8`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3
print(climbStairs(4))  # Expected: 5
print(climbStairs(5))  # Expected: 8`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
        System.out.println(climbStairs(4)); // Expected: 5
        System.out.println(climbStairs(5)); // Expected: 8
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << climbStairs(2) << endl; // Expected: 2
    cout << climbStairs(3) << endl; // Expected: 3
    cout << climbStairs(4) << endl; // Expected: 5
    cout << climbStairs(5) << endl; // Expected: 8
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int climbStairs(int n) {
    // Write your solution here
    
    return 0;
}

int main() {
    int n1 = 2;
    printf("%d\\n", climbStairs(n1)); // Expected: 2

    int n2 = 3;
    printf("%d\\n", climbStairs(n2)); // Expected: 3

    int n3 = 4;
    printf("%d\\n", climbStairs(n3)); // Expected: 5

    int n4 = 5;
    printf("%d\\n", climbStairs(n4)); // Expected: 8

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `2
3
5
8`,
      python: `2
3
5
8`,
      java: `2
3
5
8`,
      cpp: `2
3
5
8`,
      c: `2
3
5
8`,
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.",
      notes: ["If target exists, return its index. Otherwise, return -1.", "You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    constraints: ["1 \u2264 nums.length \u2264 10\u2074", "-10\u2074 < nums[i], target < 10\u2074", "All the integers in nums are unique, sorted ascending"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // Expected: 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // Expected: -1
console.log(search([5], 5)); // Expected: 0
console.log(search([1, 3, 5, 7, 9, 11], 1)); // Expected: 0`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([-1, 0, 3, 5, 9, 12], 9))  # Expected: 4
print(search([-1, 0, 3, 5, 9, 12], 2))  # Expected: -1
print(search([5], 5))  # Expected: 0
print(search([1, 3, 5, 7, 9, 11], 1))  # Expected: 0`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(search(new int[]{-1, 0, 3, 5, 9, 12}, 9)); // Expected: 4
        System.out.println(search(new int[]{-1, 0, 3, 5, 9, 12}, 2)); // Expected: -1
        System.out.println(search(new int[]{5}, 5)); // Expected: 0
        System.out.println(search(new int[]{1, 3, 5, 7, 9, 11}, 1)); // Expected: 0
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int search(vector<int>& nums, int target) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << search({-1, 0, 3, 5, 9, 12}, 9) << endl; // Expected: 4
    cout << search({-1, 0, 3, 5, 9, 12}, 2) << endl; // Expected: -1
    cout << search({5}, 5) << endl; // Expected: 0
    cout << search({1, 3, 5, 7, 9, 11}, 1) << endl; // Expected: 0
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int search(int* nums, int numsSize, int target) {
    // Write your solution here
    
    return 0;
}

int main() {
    int nums1[] = {-1, 0, 3, 5, 9, 12};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    int target1 = 9;
    printf("%d\\n", search(nums1, nums1Size, target1)); // Expected: 4

    int nums2[] = {-1, 0, 3, 5, 9, 12};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    int target2 = 2;
    printf("%d\\n", search(nums2, nums2Size, target2)); // Expected: -1

    int nums3[] = {5};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    int target3 = 5;
    printf("%d\\n", search(nums3, nums3Size, target3)); // Expected: 0

    int nums4[] = {1, 3, 5, 7, 9, 11};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    int target4 = 1;
    printf("%d\\n", search(nums4, nums4Size, target4)); // Expected: 0

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `4
-1
0
0`,
      python: `4
-1
0
0`,
      java: `4
-1
0
0`,
      cpp: `4
-1
0
0`,
      c: `4
-1
0
0`,
    },
  },

  "search-insert-position": {
    id: "search-insert-position",
    title: "Search Insert Position",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given a sorted array of distinct integers nums and a target value, return the index if the target is found.",
      notes: ["If not, return the index where it would be if it were inserted in order.", "You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      { input: "nums = [1,3,5,6], target = 5", output: "2" },
      { input: "nums = [1,3,5,6], target = 2", output: "1" },
    ],
    constraints: ["1 \u2264 nums.length \u2264 10\u2074", "-10\u2074 \u2264 nums[i] \u2264 10\u2074", "nums contains distinct values sorted ascending", "-10\u2074 \u2264 target \u2264 10\u2074"],
    starterCode: {
      javascript: `function searchInsert(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(searchInsert([1, 3, 5, 6], 5)); // Expected: 2
console.log(searchInsert([1, 3, 5, 6], 2)); // Expected: 1
console.log(searchInsert([1, 3, 5, 6], 7)); // Expected: 4
console.log(searchInsert([1, 3, 5, 6], 0)); // Expected: 0`,
      python: `def searchInsert(nums, target):
    # Write your solution here
    pass

# Test cases
print(searchInsert([1, 3, 5, 6], 5))  # Expected: 2
print(searchInsert([1, 3, 5, 6], 2))  # Expected: 1
print(searchInsert([1, 3, 5, 6], 7))  # Expected: 4
print(searchInsert([1, 3, 5, 6], 0))  # Expected: 0`,
      java: `class Solution {
    public static int searchInsert(int[] nums, int target) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(searchInsert(new int[]{1, 3, 5, 6}, 5)); // Expected: 2
        System.out.println(searchInsert(new int[]{1, 3, 5, 6}, 2)); // Expected: 1
        System.out.println(searchInsert(new int[]{1, 3, 5, 6}, 7)); // Expected: 4
        System.out.println(searchInsert(new int[]{1, 3, 5, 6}, 0)); // Expected: 0
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int searchInsert(vector<int>& nums, int target) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << searchInsert({1, 3, 5, 6}, 5) << endl; // Expected: 2
    cout << searchInsert({1, 3, 5, 6}, 2) << endl; // Expected: 1
    cout << searchInsert({1, 3, 5, 6}, 7) << endl; // Expected: 4
    cout << searchInsert({1, 3, 5, 6}, 0) << endl; // Expected: 0
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int searchInsert(int* nums, int numsSize, int target) {
    // Write your solution here
    
    return 0;
}

int main() {
    int nums1[] = {1, 3, 5, 6};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    int target1 = 5;
    printf("%d\\n", searchInsert(nums1, nums1Size, target1)); // Expected: 2

    int nums2[] = {1, 3, 5, 6};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    int target2 = 2;
    printf("%d\\n", searchInsert(nums2, nums2Size, target2)); // Expected: 1

    int nums3[] = {1, 3, 5, 6};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    int target3 = 7;
    printf("%d\\n", searchInsert(nums3, nums3Size, target3)); // Expected: 4

    int nums4[] = {1, 3, 5, 6};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    int target4 = 0;
    printf("%d\\n", searchInsert(nums4, nums4Size, target4)); // Expected: 0

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `2
1
4
0`,
      python: `2
1
4
0`,
      java: `2
1
4
0`,
      cpp: `2
1
4
0`,
      c: `2
1
4
0`,
    },
  },

  "remove-duplicates-from-sorted-array": {
    id: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.",
      notes: ["Return the resulting array of unique elements, preserving order."],
    },
    examples: [
      { input: "nums = [1,1,2]", output: "[1,2]" },
      { input: "nums = [0,0,1,1,1,2,2,3,3,4]", output: "[0,1,2,3,4]" },
    ],
    constraints: ["1 \u2264 nums.length \u2264 3 * 10\u2074", "-100 \u2264 nums[i] \u2264 100", "nums is sorted in non-decreasing order"],
    starterCode: {
      javascript: `function removeDuplicates(nums) {
  // Write your solution here
  
}

// Test cases
console.log(removeDuplicates([1, 1, 2])); // Expected: [1,2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Expected: [0,1,2,3,4]
console.log(removeDuplicates([1, 2, 3])); // Expected: [1,2,3]
console.log(removeDuplicates([1, 1, 1, 1])); // Expected: [1]`,
      python: `def removeDuplicates(nums):
    # Write your solution here
    pass

# Test cases
print(removeDuplicates([1, 1, 2]))  # Expected: [1, 2]
print(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))  # Expected: [0, 1, 2, 3, 4]
print(removeDuplicates([1, 2, 3]))  # Expected: [1, 2, 3]
print(removeDuplicates([1, 1, 1, 1]))  # Expected: [1]`,
      java: `import java.util.*;

class Solution {
    public static int[] removeDuplicates(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(removeDuplicates(new int[]{1, 1, 2}))); // Expected: [1, 2]
        System.out.println(Arrays.toString(removeDuplicates(new int[]{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}))); // Expected: [0, 1, 2, 3, 4]
        System.out.println(Arrays.toString(removeDuplicates(new int[]{1, 2, 3}))); // Expected: [1, 2, 3]
        System.out.println(Arrays.toString(removeDuplicates(new int[]{1, 1, 1, 1}))); // Expected: [1]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

template <typename T>
void printVector(vector<T>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i + 1 != v.size()) cout << ", ";
    }
    cout << "]" << endl;
}

vector<int> removeDuplicates(vector<int>& nums) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<int> result1 = removeDuplicates({1, 1, 2});
    printVector(result1); // Expected: [1, 2]
    vector<int> result2 = removeDuplicates({0, 0, 1, 1, 1, 2, 2, 3, 3, 4});
    printVector(result2); // Expected: [0, 1, 2, 3, 4]
    vector<int> result3 = removeDuplicates({1, 2, 3});
    printVector(result3); // Expected: [1, 2, 3]
    vector<int> result4 = removeDuplicates({1, 1, 1, 1});
    printVector(result4); // Expected: [1]
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void printIntArray(int* arr, int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i != n - 1) printf(", ");
    }
    printf("]\\n");
}

int* removeDuplicates(int* nums, int numsSize, int* returnSize) {
    // Write your solution here
    
    *returnSize = 0;
    return NULL;
}

int main() {
    int nums1[] = {1, 1, 2};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    int returnSize1;
    int* result1 = removeDuplicates(nums1, nums1Size, &returnSize1);
    printIntArray(result1, returnSize1); // Expected: [1, 2]

    int nums2[] = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    int returnSize2;
    int* result2 = removeDuplicates(nums2, nums2Size, &returnSize2);
    printIntArray(result2, returnSize2); // Expected: [0, 1, 2, 3, 4]

    int nums3[] = {1, 2, 3};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    int returnSize3;
    int* result3 = removeDuplicates(nums3, nums3Size, &returnSize3);
    printIntArray(result3, returnSize3); // Expected: [1, 2, 3]

    int nums4[] = {1, 1, 1, 1};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    int returnSize4;
    int* result4 = removeDuplicates(nums4, nums4Size, &returnSize4);
    printIntArray(result4, returnSize4); // Expected: [1]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `[1,2]
[0,1,2,3,4]
[1,2,3]
[1]`,
      python: `[1, 2]
[0, 1, 2, 3, 4]
[1, 2, 3]
[1]`,
      java: `[1, 2]
[0, 1, 2, 3, 4]
[1, 2, 3]
[1]`,
      cpp: `[1, 2]
[0, 1, 2, 3, 4]
[1, 2, 3]
[1]`,
      c: `[1, 2]
[0, 1, 2, 3, 4]
[1, 2, 3]
[1]`,
    },
  },

  "plus-one": {
    id: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    category: "Array • Math",
    description: {
      text: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.",
      notes: ["Increment the large integer by one and return the resulting array of digits."],
    },
    examples: [
      { input: "digits = [1,2,3]", output: "[1,2,4]" },
      { input: "digits = [9]", output: "[1,0]" },
    ],
    constraints: ["1 \u2264 digits.length \u2264 100", "0 \u2264 digits[i] \u2264 9"],
    starterCode: {
      javascript: `function plusOne(digits) {
  // Write your solution here
  
}

// Test cases
console.log(plusOne([1, 2, 3])); // Expected: [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // Expected: [4,3,2,2]
console.log(plusOne([9])); // Expected: [1,0]
console.log(plusOne([9, 9, 9])); // Expected: [1,0,0,0]`,
      python: `def plusOne(digits):
    # Write your solution here
    pass

# Test cases
print(plusOne([1, 2, 3]))  # Expected: [1, 2, 4]
print(plusOne([4, 3, 2, 1]))  # Expected: [4, 3, 2, 2]
print(plusOne([9]))  # Expected: [1, 0]
print(plusOne([9, 9, 9]))  # Expected: [1, 0, 0, 0]`,
      java: `import java.util.*;

class Solution {
    public static int[] plusOne(int[] digits) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(plusOne(new int[]{1, 2, 3}))); // Expected: [1, 2, 4]
        System.out.println(Arrays.toString(plusOne(new int[]{4, 3, 2, 1}))); // Expected: [4, 3, 2, 2]
        System.out.println(Arrays.toString(plusOne(new int[]{9}))); // Expected: [1, 0]
        System.out.println(Arrays.toString(plusOne(new int[]{9, 9, 9}))); // Expected: [1, 0, 0, 0]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

template <typename T>
void printVector(vector<T>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i + 1 != v.size()) cout << ", ";
    }
    cout << "]" << endl;
}

vector<int> plusOne(vector<int>& digits) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<int> result1 = plusOne({1, 2, 3});
    printVector(result1); // Expected: [1, 2, 4]
    vector<int> result2 = plusOne({4, 3, 2, 1});
    printVector(result2); // Expected: [4, 3, 2, 2]
    vector<int> result3 = plusOne({9});
    printVector(result3); // Expected: [1, 0]
    vector<int> result4 = plusOne({9, 9, 9});
    printVector(result4); // Expected: [1, 0, 0, 0]
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void printIntArray(int* arr, int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i != n - 1) printf(", ");
    }
    printf("]\\n");
}

int* plusOne(int* digits, int digitsSize, int* returnSize) {
    // Write your solution here
    
    *returnSize = 0;
    return NULL;
}

int main() {
    int digits1[] = {1, 2, 3};
    int digits1Size = sizeof(digits1) / sizeof(digits1[0]);
    int returnSize1;
    int* result1 = plusOne(digits1, digits1Size, &returnSize1);
    printIntArray(result1, returnSize1); // Expected: [1, 2, 4]

    int digits2[] = {4, 3, 2, 1};
    int digits2Size = sizeof(digits2) / sizeof(digits2[0]);
    int returnSize2;
    int* result2 = plusOne(digits2, digits2Size, &returnSize2);
    printIntArray(result2, returnSize2); // Expected: [4, 3, 2, 2]

    int digits3[] = {9};
    int digits3Size = sizeof(digits3) / sizeof(digits3[0]);
    int returnSize3;
    int* result3 = plusOne(digits3, digits3Size, &returnSize3);
    printIntArray(result3, returnSize3); // Expected: [1, 0]

    int digits4[] = {9, 9, 9};
    int digits4Size = sizeof(digits4) / sizeof(digits4[0]);
    int returnSize4;
    int* result4 = plusOne(digits4, digits4Size, &returnSize4);
    printIntArray(result4, returnSize4); // Expected: [1, 0, 0, 0]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `[1,2,4]
[4,3,2,2]
[1,0]
[1,0,0,0]`,
      python: `[1, 2, 4]
[4, 3, 2, 2]
[1, 0]
[1, 0, 0, 0]`,
      java: `[1, 2, 4]
[4, 3, 2, 2]
[1, 0]
[1, 0, 0, 0]`,
      cpp: `[1, 2, 4]
[4, 3, 2, 2]
[1, 0]
[1, 0, 0, 0]`,
      c: `[1, 2, 4]
[4, 3, 2, 2]
[1, 0]
[1, 0, 0, 0]`,
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: ["Open brackets must be closed by the same type of brackets and in the correct order."],
    },
    examples: [
      { input: "s = \"()\"", output: "true" },
      { input: "s = \"(]\"", output: "false" },
    ],
    constraints: ["1 \u2264 s.length \u2264 10\u2074", "s consists of parentheses only '()[]{}'"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("([)]")); // Expected: false`,
      python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False
print(isValid("([)]"))  # Expected: False`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
        System.out.println(isValid("([)]")); // Expected: false
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha << isValid("()") << endl; // Expected: true
    cout << boolalpha << isValid("()[]{}") << endl; // Expected: true
    cout << boolalpha << isValid("(]") << endl; // Expected: false
    cout << boolalpha << isValid("([)]") << endl; // Expected: false
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

bool isValid(char* s) {
    // Write your solution here
    
    return false;
}

int main() {
    char s1[] = "()";
    printf("%s\\n", isValid(s1) ? "true" : "false"); // Expected: true

    char s2[] = "()[]{}";
    printf("%s\\n", isValid(s2) ? "true" : "false"); // Expected: true

    char s3[] = "(]";
    printf("%s\\n", isValid(s3) ? "true" : "false"); // Expected: false

    char s4[] = "([)]";
    printf("%s\\n", isValid(s4) ? "true" : "false"); // Expected: false

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `true
true
false
false`,
      python: `True
True
False
False`,
      java: `true
true
false
false`,
      cpp: `true
true
false
false`,
      c: `true
true
false
false`,
    },
  },

  "longest-common-prefix": {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "Easy",
    category: "String",
    description: {
      text: "Write a function to find the longest common prefix string amongst an array of strings.",
      notes: ["If there is no common prefix, return an empty string \"\"."],
    },
    examples: [
      { input: "strs = [\"flower\",\"flow\",\"flight\"]", output: "\"fl\"" },
      { input: "strs = [\"dog\",\"racecar\",\"car\"]", output: "\"\"" },
    ],
    constraints: ["1 \u2264 strs.length \u2264 200", "0 \u2264 strs[i].length \u2264 200"],
    starterCode: {
      javascript: `function longestCommonPrefix(strs) {
  // Write your solution here
  
}

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Expected: fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Expected: 
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // Expected: inters
console.log(longestCommonPrefix(["throne"])); // Expected: throne`,
      python: `def longestCommonPrefix(strs):
    # Write your solution here
    pass

# Test cases
print(longestCommonPrefix(["flower", "flow", "flight"]))  # Expected: fl
print(longestCommonPrefix(["dog", "racecar", "car"]))  # Expected: 
print(longestCommonPrefix(["interspecies", "interstellar", "interstate"]))  # Expected: inters
print(longestCommonPrefix(["throne"]))  # Expected: throne`,
      java: `class Solution {
    public static String longestCommonPrefix(String[] strs) {
        // Write your solution here
        
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(longestCommonPrefix(new String[]{"flower", "flow", "flight"})); // Expected: fl
        System.out.println(longestCommonPrefix(new String[]{"dog", "racecar", "car"})); // Expected: 
        System.out.println(longestCommonPrefix(new String[]{"interspecies", "interstellar", "interstate"})); // Expected: inters
        System.out.println(longestCommonPrefix(new String[]{"throne"})); // Expected: throne
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

string longestCommonPrefix(vector<string>& strs) {
    // Write your solution here
    
    return "";
}

int main() {
    cout << longestCommonPrefix({"flower", "flow", "flight"}) << endl; // Expected: fl
    cout << longestCommonPrefix({"dog", "racecar", "car"}) << endl; // Expected: 
    cout << longestCommonPrefix({"interspecies", "interstellar", "interstate"}) << endl; // Expected: inters
    cout << longestCommonPrefix({"throne"}) << endl; // Expected: throne
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

char* longestCommonPrefix(char** strs, int strsSize) {
    // Write your solution here
    
    return "";
}

int main() {
    char* strs1[] = {"flower", "flow", "flight"};
    int strs1Size = sizeof(strs1) / sizeof(strs1[0]);
    printf("%s\\n", longestCommonPrefix(strs1, strs1Size)); // Expected: fl

    char* strs2[] = {"dog", "racecar", "car"};
    int strs2Size = sizeof(strs2) / sizeof(strs2[0]);
    printf("%s\\n", longestCommonPrefix(strs2, strs2Size)); // Expected: 

    char* strs3[] = {"interspecies", "interstellar", "interstate"};
    int strs3Size = sizeof(strs3) / sizeof(strs3[0]);
    printf("%s\\n", longestCommonPrefix(strs3, strs3Size)); // Expected: inters

    char* strs4[] = {"throne"};
    int strs4Size = sizeof(strs4) / sizeof(strs4[0]);
    printf("%s\\n", longestCommonPrefix(strs4, strs4Size)); // Expected: throne

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `fl

inters
throne`,
      python: `fl

inters
throne`,
      java: `fl

inters
throne`,
      cpp: `fl

inters
throne`,
      c: `fl

inters
throne`,
    },
  },

  "roman-to-integer": {
    id: "roman-to-integer",
    title: "Roman to Integer",
    difficulty: "Easy",
    category: "String • Math",
    description: {
      text: "Roman numerals are represented by seven symbols: I, V, X, L, C, D and M. Given a roman numeral, convert it to an integer.",
      notes: [],
    },
    examples: [
      { input: "s = \"III\"", output: "3" },
      { input: "s = \"LVIII\"", output: "58", explanation: "L = 50, V = 5, III = 3." },
      { input: "s = \"MCMXCIV\"", output: "1994" },
    ],
    constraints: ["1 \u2264 s.length \u2264 15", "s contains only the characters ('I','V','X','L','C','D','M')", "s is guaranteed to be a valid roman numeral in the range [1, 3999]"],
    starterCode: {
      javascript: `function romanToInt(s) {
  // Write your solution here
  
}

// Test cases
console.log(romanToInt("III")); // Expected: 3
console.log(romanToInt("LVIII")); // Expected: 58
console.log(romanToInt("MCMXCIV")); // Expected: 1994
console.log(romanToInt("IX")); // Expected: 9`,
      python: `def romanToInt(s):
    # Write your solution here
    pass

# Test cases
print(romanToInt("III"))  # Expected: 3
print(romanToInt("LVIII"))  # Expected: 58
print(romanToInt("MCMXCIV"))  # Expected: 1994
print(romanToInt("IX"))  # Expected: 9`,
      java: `class Solution {
    public static int romanToInt(String s) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(romanToInt("III")); // Expected: 3
        System.out.println(romanToInt("LVIII")); // Expected: 58
        System.out.println(romanToInt("MCMXCIV")); // Expected: 1994
        System.out.println(romanToInt("IX")); // Expected: 9
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int romanToInt(string s) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << romanToInt("III") << endl; // Expected: 3
    cout << romanToInt("LVIII") << endl; // Expected: 58
    cout << romanToInt("MCMXCIV") << endl; // Expected: 1994
    cout << romanToInt("IX") << endl; // Expected: 9
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int romanToInt(char* s) {
    // Write your solution here
    
    return 0;
}

int main() {
    char s1[] = "III";
    printf("%d\\n", romanToInt(s1)); // Expected: 3

    char s2[] = "LVIII";
    printf("%d\\n", romanToInt(s2)); // Expected: 58

    char s3[] = "MCMXCIV";
    printf("%d\\n", romanToInt(s3)); // Expected: 1994

    char s4[] = "IX";
    printf("%d\\n", romanToInt(s4)); // Expected: 9

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `3
58
1994
9`,
      python: `3
58
1994
9`,
      java: `3
58
1994
9`,
      cpp: `3
58
1994
9`,
      c: `3
58
1994
9`,
    },
  },

  "palindrome-number": {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    category: "Math",
    description: {
      text: "Given an integer x, return true if x is a palindrome, and false otherwise.",
      notes: [],
    },
    examples: [
      { input: "x = 121", output: "true" },
      { input: "x = -121", output: "false", explanation: "Reads -121- from right to left, so it is not a palindrome." },
      { input: "x = 10", output: "false" },
    ],
    constraints: ["-2\u00b3\u00b9 \u2264 x \u2264 2\u00b3\u00b9 - 1"],
    starterCode: {
      javascript: `function isPalindromeNumber(x) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindromeNumber(121)); // Expected: true
console.log(isPalindromeNumber(-121)); // Expected: false
console.log(isPalindromeNumber(10)); // Expected: false
console.log(isPalindromeNumber(12321)); // Expected: true`,
      python: `def isPalindromeNumber(x):
    # Write your solution here
    pass

# Test cases
print(isPalindromeNumber(121))  # Expected: True
print(isPalindromeNumber(-121))  # Expected: False
print(isPalindromeNumber(10))  # Expected: False
print(isPalindromeNumber(12321))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindromeNumber(int x) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindromeNumber(121)); // Expected: true
        System.out.println(isPalindromeNumber(-121)); // Expected: false
        System.out.println(isPalindromeNumber(10)); // Expected: false
        System.out.println(isPalindromeNumber(12321)); // Expected: true
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isPalindromeNumber(int x) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha << isPalindromeNumber(121) << endl; // Expected: true
    cout << boolalpha << isPalindromeNumber(-121) << endl; // Expected: false
    cout << boolalpha << isPalindromeNumber(10) << endl; // Expected: false
    cout << boolalpha << isPalindromeNumber(12321) << endl; // Expected: true
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

bool isPalindromeNumber(int x) {
    // Write your solution here
    
    return false;
}

int main() {
    int x1 = 121;
    printf("%s\\n", isPalindromeNumber(x1) ? "true" : "false"); // Expected: true

    int x2 = -121;
    printf("%s\\n", isPalindromeNumber(x2) ? "true" : "false"); // Expected: false

    int x3 = 10;
    printf("%s\\n", isPalindromeNumber(x3) ? "true" : "false"); // Expected: false

    int x4 = 12321;
    printf("%s\\n", isPalindromeNumber(x4) ? "true" : "false"); // Expected: true

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `true
false
false
true`,
      python: `True
False
False
True`,
      java: `true
false
false
true`,
      cpp: `true
false
false
true`,
      c: `true
false
false
true`,
    },
  },

  "reverse-integer": {
    id: "reverse-integer",
    title: "Reverse Integer",
    difficulty: "Medium",
    category: "Math",
    description: {
      text: "Given a signed 32-bit integer x, return x with its digits reversed.",
      notes: ["If reversing x causes the value to go outside the signed 32-bit integer range [-2\u00b3\u00b9, 2\u00b3\u00b9 - 1], then return 0."],
    },
    examples: [
      { input: "x = 123", output: "321" },
      { input: "x = -123", output: "-321" },
      { input: "x = 120", output: "21" },
    ],
    constraints: ["-2\u00b3\u00b9 \u2264 x \u2264 2\u00b3\u00b9 - 1"],
    starterCode: {
      javascript: `function reverse(x) {
  // Write your solution here
  
}

// Test cases
console.log(reverse(123)); // Expected: 321
console.log(reverse(-123)); // Expected: -321
console.log(reverse(120)); // Expected: 21
console.log(reverse(1534236469)); // Expected: 0`,
      python: `def reverse(x):
    # Write your solution here
    pass

# Test cases
print(reverse(123))  # Expected: 321
print(reverse(-123))  # Expected: -321
print(reverse(120))  # Expected: 21
print(reverse(1534236469))  # Expected: 0`,
      java: `class Solution {
    public static int reverse(int x) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(reverse(123)); // Expected: 321
        System.out.println(reverse(-123)); // Expected: -321
        System.out.println(reverse(120)); // Expected: 21
        System.out.println(reverse(1534236469)); // Expected: 0
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int reverse(int x) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << reverse(123) << endl; // Expected: 321
    cout << reverse(-123) << endl; // Expected: -321
    cout << reverse(120) << endl; // Expected: 21
    cout << reverse(1534236469) << endl; // Expected: 0
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int reverse(int x) {
    // Write your solution here
    
    return 0;
}

int main() {
    int x1 = 123;
    printf("%d\\n", reverse(x1)); // Expected: 321

    int x2 = -123;
    printf("%d\\n", reverse(x2)); // Expected: -321

    int x3 = 120;
    printf("%d\\n", reverse(x3)); // Expected: 21

    int x4 = 1534236469;
    printf("%d\\n", reverse(x4)); // Expected: 0

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `321
-321
21
0`,
      python: `321
-321
21
0`,
      java: `321
-321
21
0`,
      cpp: `321
-321
21
0`,
      c: `321
-321
21
0`,
    },
  },

  "power-of-two": {
    id: "power-of-two",
    title: "Power of Two",
    difficulty: "Easy",
    category: "Math • Bit Manipulation",
    description: {
      text: "Given an integer n, return true if it is a power of two. Otherwise, return false.",
      notes: ["An integer n is a power of two, if there exists an integer x such that n == 2^x."],
    },
    examples: [
      { input: "n = 1", output: "true", explanation: "2\u2070 = 1." },
      { input: "n = 16", output: "true", explanation: "2\u2074 = 16." },
      { input: "n = 3", output: "false" },
    ],
    constraints: ["-2\u00b3\u00b9 \u2264 n \u2264 2\u00b3\u00b9 - 1"],
    starterCode: {
      javascript: `function isPowerOfTwo(n) {
  // Write your solution here
  
}

// Test cases
console.log(isPowerOfTwo(1)); // Expected: true
console.log(isPowerOfTwo(16)); // Expected: true
console.log(isPowerOfTwo(3)); // Expected: false
console.log(isPowerOfTwo(0)); // Expected: false`,
      python: `def isPowerOfTwo(n):
    # Write your solution here
    pass

# Test cases
print(isPowerOfTwo(1))  # Expected: True
print(isPowerOfTwo(16))  # Expected: True
print(isPowerOfTwo(3))  # Expected: False
print(isPowerOfTwo(0))  # Expected: False`,
      java: `class Solution {
    public static boolean isPowerOfTwo(int n) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPowerOfTwo(1)); // Expected: true
        System.out.println(isPowerOfTwo(16)); // Expected: true
        System.out.println(isPowerOfTwo(3)); // Expected: false
        System.out.println(isPowerOfTwo(0)); // Expected: false
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isPowerOfTwo(int n) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha << isPowerOfTwo(1) << endl; // Expected: true
    cout << boolalpha << isPowerOfTwo(16) << endl; // Expected: true
    cout << boolalpha << isPowerOfTwo(3) << endl; // Expected: false
    cout << boolalpha << isPowerOfTwo(0) << endl; // Expected: false
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

bool isPowerOfTwo(int n) {
    // Write your solution here
    
    return false;
}

int main() {
    int n1 = 1;
    printf("%s\\n", isPowerOfTwo(n1) ? "true" : "false"); // Expected: true

    int n2 = 16;
    printf("%s\\n", isPowerOfTwo(n2) ? "true" : "false"); // Expected: true

    int n3 = 3;
    printf("%s\\n", isPowerOfTwo(n3) ? "true" : "false"); // Expected: false

    int n4 = 0;
    printf("%s\\n", isPowerOfTwo(n4) ? "true" : "false"); // Expected: false

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `true
true
false
false`,
      python: `True
True
False
False`,
      java: `true
true
false
false`,
      cpp: `true
true
false
false`,
      c: `true
true
false
false`,
    },
  },

  "sqrtx": {
    id: "sqrtx",
    title: "Sqrt(x)",
    difficulty: "Easy",
    category: "Math • Binary Search",
    description: {
      text: "Given a non-negative integer x, return the square root of x rounded down to the nearest integer.",
      notes: ["The returned integer should be non-negative as well.", "You must not use any built-in exponent function or operator."],
    },
    examples: [
      { input: "x = 4", output: "2" },
      { input: "x = 8", output: "2", explanation: "Since the decimal part is truncated, 2 is returned." },
    ],
    constraints: ["0 \u2264 x \u2264 2\u00b3\u00b9 - 1"],
    starterCode: {
      javascript: `function mySqrt(x) {
  // Write your solution here
  
}

// Test cases
console.log(mySqrt(4)); // Expected: 2
console.log(mySqrt(8)); // Expected: 2
console.log(mySqrt(0)); // Expected: 0
console.log(mySqrt(2147395599)); // Expected: 46339`,
      python: `def mySqrt(x):
    # Write your solution here
    pass

# Test cases
print(mySqrt(4))  # Expected: 2
print(mySqrt(8))  # Expected: 2
print(mySqrt(0))  # Expected: 0
print(mySqrt(2147395599))  # Expected: 46339`,
      java: `class Solution {
    public static int mySqrt(int x) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(mySqrt(4)); // Expected: 2
        System.out.println(mySqrt(8)); // Expected: 2
        System.out.println(mySqrt(0)); // Expected: 0
        System.out.println(mySqrt(2147395599)); // Expected: 46339
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int mySqrt(int x) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << mySqrt(4) << endl; // Expected: 2
    cout << mySqrt(8) << endl; // Expected: 2
    cout << mySqrt(0) << endl; // Expected: 0
    cout << mySqrt(2147395599) << endl; // Expected: 46339
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int mySqrt(int x) {
    // Write your solution here
    
    return 0;
}

int main() {
    int x1 = 4;
    printf("%d\\n", mySqrt(x1)); // Expected: 2

    int x2 = 8;
    printf("%d\\n", mySqrt(x2)); // Expected: 2

    int x3 = 0;
    printf("%d\\n", mySqrt(x3)); // Expected: 0

    int x4 = 2147395599;
    printf("%d\\n", mySqrt(x4)); // Expected: 46339

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `2
2
0
46339`,
      python: `2
2
0
46339`,
      java: `2
2
0
46339`,
      cpp: `2
2
0
46339`,
      c: `2
2
0
46339`,
    },
  },

  "first-unique-character": {
    id: "first-unique-character",
    title: "First Unique Character in a String",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given a string s, find the first non-repeating character in it and return its index.",
      notes: ["If it does not exist, return -1."],
    },
    examples: [
      { input: "s = \"leetcode\"", output: "0" },
      { input: "s = \"loveleetcode\"", output: "2" },
    ],
    constraints: ["1 \u2264 s.length \u2264 10\u2075", "s consists of only lowercase English letters"],
    starterCode: {
      javascript: `function firstUniqChar(s) {
  // Write your solution here
  
}

// Test cases
console.log(firstUniqChar("leetcode")); // Expected: 0
console.log(firstUniqChar("loveleetcode")); // Expected: 2
console.log(firstUniqChar("aabb")); // Expected: -1
console.log(firstUniqChar("z")); // Expected: 0`,
      python: `def firstUniqChar(s):
    # Write your solution here
    pass

# Test cases
print(firstUniqChar("leetcode"))  # Expected: 0
print(firstUniqChar("loveleetcode"))  # Expected: 2
print(firstUniqChar("aabb"))  # Expected: -1
print(firstUniqChar("z"))  # Expected: 0`,
      java: `class Solution {
    public static int firstUniqChar(String s) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(firstUniqChar("leetcode")); // Expected: 0
        System.out.println(firstUniqChar("loveleetcode")); // Expected: 2
        System.out.println(firstUniqChar("aabb")); // Expected: -1
        System.out.println(firstUniqChar("z")); // Expected: 0
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int firstUniqChar(string s) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << firstUniqChar("leetcode") << endl; // Expected: 0
    cout << firstUniqChar("loveleetcode") << endl; // Expected: 2
    cout << firstUniqChar("aabb") << endl; // Expected: -1
    cout << firstUniqChar("z") << endl; // Expected: 0
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int firstUniqChar(char* s) {
    // Write your solution here
    
    return 0;
}

int main() {
    char s1[] = "leetcode";
    printf("%d\\n", firstUniqChar(s1)); // Expected: 0

    char s2[] = "loveleetcode";
    printf("%d\\n", firstUniqChar(s2)); // Expected: 2

    char s3[] = "aabb";
    printf("%d\\n", firstUniqChar(s3)); // Expected: -1

    char s4[] = "z";
    printf("%d\\n", firstUniqChar(s4)); // Expected: 0

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `0
2
-1
0`,
      python: `0
2
-1
0`,
      java: `0
2
-1
0`,
      cpp: `0
2
-1
0`,
      c: `0
2
-1
0`,
    },
  },

  "intersection-of-two-arrays": {
    id: "intersection-of-two-arrays",
    title: "Intersection of Two Arrays",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given two integer arrays nums1 and nums2, return an array of their unique intersection.",
      notes: ["Each element in the result must appear once, in the order they first appear in nums1.", "The result may be returned in any order."],
    },
    examples: [
      { input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2]" },
      { input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]", output: "[4,9]" },
    ],
    constraints: ["1 \u2264 nums1.length, nums2.length \u2264 1000", "0 \u2264 nums1[i], nums2[i] \u2264 1000"],
    starterCode: {
      javascript: `function intersection(nums1, nums2) {
  // Write your solution here
  
}

// Test cases
console.log(intersection([1, 2, 2, 1], [2, 2])); // Expected: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Expected: [4,9]
console.log(intersection([1, 2, 3], [4, 5, 6])); // Expected: []
console.log(intersection([1, 1, 1], [1])); // Expected: [1]`,
      python: `def intersection(nums1, nums2):
    # Write your solution here
    pass

# Test cases
print(intersection([1, 2, 2, 1], [2, 2]))  # Expected: [2]
print(intersection([4, 9, 5], [9, 4, 9, 8, 4]))  # Expected: [4, 9]
print(intersection([1, 2, 3], [4, 5, 6]))  # Expected: []
print(intersection([1, 1, 1], [1]))  # Expected: [1]`,
      java: `import java.util.*;

class Solution {
    public static int[] intersection(int[] nums1, int[] nums2) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(intersection(new int[]{1, 2, 2, 1}, new int[]{2, 2}))); // Expected: [2]
        System.out.println(Arrays.toString(intersection(new int[]{4, 9, 5}, new int[]{9, 4, 9, 8, 4}))); // Expected: [4, 9]
        System.out.println(Arrays.toString(intersection(new int[]{1, 2, 3}, new int[]{4, 5, 6}))); // Expected: []
        System.out.println(Arrays.toString(intersection(new int[]{1, 1, 1}, new int[]{1}))); // Expected: [1]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

template <typename T>
void printVector(vector<T>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i + 1 != v.size()) cout << ", ";
    }
    cout << "]" << endl;
}

vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<int> result1 = intersection({1, 2, 2, 1}, {2, 2});
    printVector(result1); // Expected: [2]
    vector<int> result2 = intersection({4, 9, 5}, {9, 4, 9, 8, 4});
    printVector(result2); // Expected: [4, 9]
    vector<int> result3 = intersection({1, 2, 3}, {4, 5, 6});
    printVector(result3); // Expected: []
    vector<int> result4 = intersection({1, 1, 1}, {1});
    printVector(result4); // Expected: [1]
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void printIntArray(int* arr, int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i != n - 1) printf(", ");
    }
    printf("]\\n");
}

int* intersection(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {
    // Write your solution here
    
    *returnSize = 0;
    return NULL;
}

int main() {
    int nums11[] = {1, 2, 2, 1};
    int nums11Size = sizeof(nums11) / sizeof(nums11[0]);
    int nums21[] = {2, 2};
    int nums21Size = sizeof(nums21) / sizeof(nums21[0]);
    int returnSize1;
    int* result1 = intersection(nums11, nums11Size, nums21, nums21Size, &returnSize1);
    printIntArray(result1, returnSize1); // Expected: [2]

    int nums12[] = {4, 9, 5};
    int nums12Size = sizeof(nums12) / sizeof(nums12[0]);
    int nums22[] = {9, 4, 9, 8, 4};
    int nums22Size = sizeof(nums22) / sizeof(nums22[0]);
    int returnSize2;
    int* result2 = intersection(nums12, nums12Size, nums22, nums22Size, &returnSize2);
    printIntArray(result2, returnSize2); // Expected: [4, 9]

    int nums13[] = {1, 2, 3};
    int nums13Size = sizeof(nums13) / sizeof(nums13[0]);
    int nums23[] = {4, 5, 6};
    int nums23Size = sizeof(nums23) / sizeof(nums23[0]);
    int returnSize3;
    int* result3 = intersection(nums13, nums13Size, nums23, nums23Size, &returnSize3);
    printIntArray(result3, returnSize3); // Expected: []

    int nums14[] = {1, 1, 1};
    int nums14Size = sizeof(nums14) / sizeof(nums14[0]);
    int nums24[] = {1};
    int nums24Size = sizeof(nums24) / sizeof(nums24[0]);
    int returnSize4;
    int* result4 = intersection(nums14, nums14Size, nums24, nums24Size, &returnSize4);
    printIntArray(result4, returnSize4); // Expected: [1]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `[2]
[4,9]
[]
[1]`,
      python: `[2]
[4, 9]
[]
[1]`,
      java: `[2]
[4, 9]
[]
[1]`,
      cpp: `[2]
[4, 9]
[]
[1]`,
      c: `[2]
[4, 9]
[]
[1]`,
    },
  },

  "third-maximum-number": {
    id: "third-maximum-number",
    title: "Third Maximum Number",
    difficulty: "Easy",
    category: "Array • Sorting",
    description: {
      text: "Given an integer array nums, return the third distinct maximum number in this array.",
      notes: ["If the third maximum does not exist, return the maximum number."],
    },
    examples: [
      { input: "nums = [3,2,1]", output: "1", explanation: "The third distinct maximum is 1." },
      { input: "nums = [1,2]", output: "2", explanation: "The third distinct maximum does not exist, so return the maximum 2." },
    ],
    constraints: ["1 \u2264 nums.length \u2264 10\u2074", "-2\u00b3\u00b9 \u2264 nums[i] \u2264 2\u00b3\u00b9 - 1"],
    starterCode: {
      javascript: `function thirdMax(nums) {
  // Write your solution here
  
}

// Test cases
console.log(thirdMax([3, 2, 1])); // Expected: 1
console.log(thirdMax([1, 2])); // Expected: 2
console.log(thirdMax([2, 2, 3, 1])); // Expected: 1
console.log(thirdMax([1, 2, 2, 5, 3, 5])); // Expected: 2`,
      python: `def thirdMax(nums):
    # Write your solution here
    pass

# Test cases
print(thirdMax([3, 2, 1]))  # Expected: 1
print(thirdMax([1, 2]))  # Expected: 2
print(thirdMax([2, 2, 3, 1]))  # Expected: 1
print(thirdMax([1, 2, 2, 5, 3, 5]))  # Expected: 2`,
      java: `class Solution {
    public static int thirdMax(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(thirdMax(new int[]{3, 2, 1})); // Expected: 1
        System.out.println(thirdMax(new int[]{1, 2})); // Expected: 2
        System.out.println(thirdMax(new int[]{2, 2, 3, 1})); // Expected: 1
        System.out.println(thirdMax(new int[]{1, 2, 2, 5, 3, 5})); // Expected: 2
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int thirdMax(vector<int>& nums) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << thirdMax({3, 2, 1}) << endl; // Expected: 1
    cout << thirdMax({1, 2}) << endl; // Expected: 2
    cout << thirdMax({2, 2, 3, 1}) << endl; // Expected: 1
    cout << thirdMax({1, 2, 2, 5, 3, 5}) << endl; // Expected: 2
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int thirdMax(int* nums, int numsSize) {
    // Write your solution here
    
    return 0;
}

int main() {
    int nums1[] = {3, 2, 1};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    printf("%d\\n", thirdMax(nums1, nums1Size)); // Expected: 1

    int nums2[] = {1, 2};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    printf("%d\\n", thirdMax(nums2, nums2Size)); // Expected: 2

    int nums3[] = {2, 2, 3, 1};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    printf("%d\\n", thirdMax(nums3, nums3Size)); // Expected: 1

    int nums4[] = {1, 2, 2, 5, 3, 5};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    printf("%d\\n", thirdMax(nums4, nums4Size)); // Expected: 2

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `1
2
1
2`,
      python: `1
2
1
2`,
      java: `1
2
1
2`,
      cpp: `1
2
1
2`,
      c: `1
2
1
2`,
    },
  },

  "two-sum-ii": {
    id: "two-sum-ii",
    title: "Two Sum II - Input Array Is Sorted",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.",
      notes: ["Return the indices of the two numbers, 1-indexed, as an array [index1, index2] of length 2.", "You may not use the same element twice."],
    },
    examples: [
      { input: "numbers = [2,7,11,15], target = 9", output: "[1,2]" },
      { input: "numbers = [2,3,4], target = 6", output: "[1,3]" },
    ],
    constraints: ["2 \u2264 numbers.length \u2264 3 * 10\u2074", "-1000 \u2264 numbers[i] \u2264 1000", "numbers is sorted in non-decreasing order", "Exactly one solution exists"],
    starterCode: {
      javascript: `function twoSumSorted(numbers, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSumSorted([2, 7, 11, 15], 9)); // Expected: [1,2]
console.log(twoSumSorted([2, 3, 4], 6)); // Expected: [1,3]
console.log(twoSumSorted([-1, 0], -1)); // Expected: [1,2]
console.log(twoSumSorted([1, 2, 3, 4, 4, 9, 56, 90], 8)); // Expected: [4,5]`,
      python: `def twoSumSorted(numbers, target):
    # Write your solution here
    pass

# Test cases
print(twoSumSorted([2, 7, 11, 15], 9))  # Expected: [1, 2]
print(twoSumSorted([2, 3, 4], 6))  # Expected: [1, 3]
print(twoSumSorted([-1, 0], -1))  # Expected: [1, 2]
print(twoSumSorted([1, 2, 3, 4, 4, 9, 56, 90], 8))  # Expected: [4, 5]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSumSorted(int[] numbers, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSumSorted(new int[]{2, 7, 11, 15}, 9))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSumSorted(new int[]{2, 3, 4}, 6))); // Expected: [1, 3]
        System.out.println(Arrays.toString(twoSumSorted(new int[]{-1, 0}, -1))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSumSorted(new int[]{1, 2, 3, 4, 4, 9, 56, 90}, 8))); // Expected: [4, 5]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

template <typename T>
void printVector(vector<T>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i + 1 != v.size()) cout << ", ";
    }
    cout << "]" << endl;
}

vector<int> twoSumSorted(vector<int>& numbers, int target) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<int> result1 = twoSumSorted({2, 7, 11, 15}, 9);
    printVector(result1); // Expected: [1, 2]
    vector<int> result2 = twoSumSorted({2, 3, 4}, 6);
    printVector(result2); // Expected: [1, 3]
    vector<int> result3 = twoSumSorted({-1, 0}, -1);
    printVector(result3); // Expected: [1, 2]
    vector<int> result4 = twoSumSorted({1, 2, 3, 4, 4, 9, 56, 90}, 8);
    printVector(result4); // Expected: [4, 5]
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void printIntArray(int* arr, int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i != n - 1) printf(", ");
    }
    printf("]\\n");
}

int* twoSumSorted(int* numbers, int numbersSize, int target, int* returnSize) {
    // Write your solution here
    
    *returnSize = 0;
    return NULL;
}

int main() {
    int numbers1[] = {2, 7, 11, 15};
    int numbers1Size = sizeof(numbers1) / sizeof(numbers1[0]);
    int target1 = 9;
    int returnSize1;
    int* result1 = twoSumSorted(numbers1, numbers1Size, target1, &returnSize1);
    printIntArray(result1, returnSize1); // Expected: [1, 2]

    int numbers2[] = {2, 3, 4};
    int numbers2Size = sizeof(numbers2) / sizeof(numbers2[0]);
    int target2 = 6;
    int returnSize2;
    int* result2 = twoSumSorted(numbers2, numbers2Size, target2, &returnSize2);
    printIntArray(result2, returnSize2); // Expected: [1, 3]

    int numbers3[] = {-1, 0};
    int numbers3Size = sizeof(numbers3) / sizeof(numbers3[0]);
    int target3 = -1;
    int returnSize3;
    int* result3 = twoSumSorted(numbers3, numbers3Size, target3, &returnSize3);
    printIntArray(result3, returnSize3); // Expected: [1, 2]

    int numbers4[] = {1, 2, 3, 4, 4, 9, 56, 90};
    int numbers4Size = sizeof(numbers4) / sizeof(numbers4[0]);
    int target4 = 8;
    int returnSize4;
    int* result4 = twoSumSorted(numbers4, numbers4Size, target4, &returnSize4);
    printIntArray(result4, returnSize4); // Expected: [4, 5]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `[1,2]
[1,3]
[1,2]
[4,5]`,
      python: `[1, 2]
[1, 3]
[1, 2]
[4, 5]`,
      java: `[1, 2]
[1, 3]
[1, 2]
[4, 5]`,
      cpp: `[1, 2]
[1, 3]
[1, 2]
[4, 5]`,
      c: `[1, 2]
[1, 3]
[1, 2]
[4, 5]`,
    },
  },

  "squares-of-a-sorted-array": {
    id: "squares-of-a-sorted-array",
    title: "Squares of a Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
      notes: [],
    },
    examples: [
      { input: "nums = [-4,-1,0,3,10]", output: "[0,1,9,16,100]" },
      { input: "nums = [-7,-3,2,3,11]", output: "[4,9,9,49,121]" },
    ],
    constraints: ["1 \u2264 nums.length \u2264 10\u2074", "-10\u2074 \u2264 nums[i] \u2264 10\u2074", "nums is sorted in non-decreasing order"],
    starterCode: {
      javascript: `function sortedSquares(nums) {
  // Write your solution here
  
}

// Test cases
console.log(sortedSquares([-4, -1, 0, 3, 10])); // Expected: [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // Expected: [4,9,9,49,121]
console.log(sortedSquares([-5, -3, -2, -1])); // Expected: [1,4,9,25]
console.log(sortedSquares([0])); // Expected: [0]`,
      python: `def sortedSquares(nums):
    # Write your solution here
    pass

# Test cases
print(sortedSquares([-4, -1, 0, 3, 10]))  # Expected: [0, 1, 9, 16, 100]
print(sortedSquares([-7, -3, 2, 3, 11]))  # Expected: [4, 9, 9, 49, 121]
print(sortedSquares([-5, -3, -2, -1]))  # Expected: [1, 4, 9, 25]
print(sortedSquares([0]))  # Expected: [0]`,
      java: `import java.util.*;

class Solution {
    public static int[] sortedSquares(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(sortedSquares(new int[]{-4, -1, 0, 3, 10}))); // Expected: [0, 1, 9, 16, 100]
        System.out.println(Arrays.toString(sortedSquares(new int[]{-7, -3, 2, 3, 11}))); // Expected: [4, 9, 9, 49, 121]
        System.out.println(Arrays.toString(sortedSquares(new int[]{-5, -3, -2, -1}))); // Expected: [1, 4, 9, 25]
        System.out.println(Arrays.toString(sortedSquares(new int[]{0}))); // Expected: [0]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

template <typename T>
void printVector(vector<T>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i + 1 != v.size()) cout << ", ";
    }
    cout << "]" << endl;
}

vector<int> sortedSquares(vector<int>& nums) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<int> result1 = sortedSquares({-4, -1, 0, 3, 10});
    printVector(result1); // Expected: [0, 1, 9, 16, 100]
    vector<int> result2 = sortedSquares({-7, -3, 2, 3, 11});
    printVector(result2); // Expected: [4, 9, 9, 49, 121]
    vector<int> result3 = sortedSquares({-5, -3, -2, -1});
    printVector(result3); // Expected: [1, 4, 9, 25]
    vector<int> result4 = sortedSquares({0});
    printVector(result4); // Expected: [0]
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void printIntArray(int* arr, int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i != n - 1) printf(", ");
    }
    printf("]\\n");
}

int* sortedSquares(int* nums, int numsSize, int* returnSize) {
    // Write your solution here
    
    *returnSize = 0;
    return NULL;
}

int main() {
    int nums1[] = {-4, -1, 0, 3, 10};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    int returnSize1;
    int* result1 = sortedSquares(nums1, nums1Size, &returnSize1);
    printIntArray(result1, returnSize1); // Expected: [0, 1, 9, 16, 100]

    int nums2[] = {-7, -3, 2, 3, 11};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    int returnSize2;
    int* result2 = sortedSquares(nums2, nums2Size, &returnSize2);
    printIntArray(result2, returnSize2); // Expected: [4, 9, 9, 49, 121]

    int nums3[] = {-5, -3, -2, -1};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    int returnSize3;
    int* result3 = sortedSquares(nums3, nums3Size, &returnSize3);
    printIntArray(result3, returnSize3); // Expected: [1, 4, 9, 25]

    int nums4[] = {0};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    int returnSize4;
    int* result4 = sortedSquares(nums4, nums4Size, &returnSize4);
    printIntArray(result4, returnSize4); // Expected: [0]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `[0,1,9,16,100]
[4,9,9,49,121]
[1,4,9,25]
[0]`,
      python: `[0, 1, 9, 16, 100]
[4, 9, 9, 49, 121]
[1, 4, 9, 25]
[0]`,
      java: `[0, 1, 9, 16, 100]
[4, 9, 9, 49, 121]
[1, 4, 9, 25]
[0]`,
      cpp: `[0, 1, 9, 16, 100]
[4, 9, 9, 49, 121]
[1, 4, 9, 25]
[0]`,
      c: `[0, 1, 9, 16, 100]
[4, 9, 9, 49, 121]
[1, 4, 9, 25]
[0]`,
    },
  },

  "rotate-array": {
    id: "rotate-array",
    title: "Rotate Array",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
      notes: ["Do this in-place."],
    },
    examples: [
      { input: "nums = [1,2,3,4,5,6,7], k = 3", output: "[5,6,7,1,2,3,4]" },
      { input: "nums = [-1,-100,3,99], k = 2", output: "[3,99,-1,-100]" },
    ],
    constraints: ["1 \u2264 nums.length \u2264 10\u2075", "-2\u00b3\u00b9 \u2264 nums[i] \u2264 2\u00b3\u00b9 - 1", "0 \u2264 k \u2264 10\u2075"],
    starterCode: {
      javascript: `function rotate(nums, k) {
  // Write your solution here
  
}

// Test cases
let test1 = [1, 2, 3, 4, 5, 6, 7];
rotate(test1, 3);
console.log(test1); // Expected: [5,6,7,1,2,3,4]
let test2 = [-1, -100, 3, 99];
rotate(test2, 2);
console.log(test2); // Expected: [3,99,-1,-100]
let test3 = [1, 2];
rotate(test3, 3);
console.log(test3); // Expected: [2,1]
let test4 = [1];
rotate(test4, 5);
console.log(test4); // Expected: [1]`,
      python: `def rotate(nums, k):
    # Write your solution here
    pass

# Test cases
test1 = [1, 2, 3, 4, 5, 6, 7]
rotate(test1, 3)
print(test1)  # Expected: [5, 6, 7, 1, 2, 3, 4]
test2 = [-1, -100, 3, 99]
rotate(test2, 2)
print(test2)  # Expected: [3, 99, -1, -100]
test3 = [1, 2]
rotate(test3, 3)
print(test3)  # Expected: [2, 1]
test4 = [1]
rotate(test4, 5)
print(test4)  # Expected: [1]`,
      java: `import java.util.*;

class Solution {
    public static void rotate(int[] nums, int k) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        int[] test1 = new int[]{1, 2, 3, 4, 5, 6, 7};
        rotate(test1, 3);
        System.out.println(Arrays.toString(test1)); // Expected: [5, 6, 7, 1, 2, 3, 4]
        int[] test2 = new int[]{-1, -100, 3, 99};
        rotate(test2, 2);
        System.out.println(Arrays.toString(test2)); // Expected: [3, 99, -1, -100]
        int[] test3 = new int[]{1, 2};
        rotate(test3, 3);
        System.out.println(Arrays.toString(test3)); // Expected: [2, 1]
        int[] test4 = new int[]{1};
        rotate(test4, 5);
        System.out.println(Arrays.toString(test4)); // Expected: [1]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

template <typename T>
void printVector(vector<T>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i + 1 != v.size()) cout << ", ";
    }
    cout << "]" << endl;
}

void rotate(vector<int>& nums, int k) {
    // Write your solution here
    
}

int main() {
    vector<int> test1 = {1, 2, 3, 4, 5, 6, 7};
    rotate(test1, 3);
    printVector(test1); // Expected: [5, 6, 7, 1, 2, 3, 4]
    vector<int> test2 = {-1, -100, 3, 99};
    rotate(test2, 2);
    printVector(test2); // Expected: [3, 99, -1, -100]
    vector<int> test3 = {1, 2};
    rotate(test3, 3);
    printVector(test3); // Expected: [2, 1]
    vector<int> test4 = {1};
    rotate(test4, 5);
    printVector(test4); // Expected: [1]
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void printIntArray(int* arr, int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i != n - 1) printf(", ");
    }
    printf("]\\n");
}

void rotate(int* nums, int numsSize, int k) {
    // Write your solution here
    
}

int main() {
    int nums1[] = {1, 2, 3, 4, 5, 6, 7};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    int k1 = 3;
    rotate(nums1, nums1Size, k1);
    printIntArray(nums1, nums1Size); // Expected: [5, 6, 7, 1, 2, 3, 4]

    int nums2[] = {-1, -100, 3, 99};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    int k2 = 2;
    rotate(nums2, nums2Size, k2);
    printIntArray(nums2, nums2Size); // Expected: [3, 99, -1, -100]

    int nums3[] = {1, 2};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    int k3 = 3;
    rotate(nums3, nums3Size, k3);
    printIntArray(nums3, nums3Size); // Expected: [2, 1]

    int nums4[] = {1};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    int k4 = 5;
    rotate(nums4, nums4Size, k4);
    printIntArray(nums4, nums4Size); // Expected: [1]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `[5,6,7,1,2,3,4]
[3,99,-1,-100]
[2,1]
[1]`,
      python: `[5, 6, 7, 1, 2, 3, 4]
[3, 99, -1, -100]
[2, 1]
[1]`,
      java: `[5, 6, 7, 1, 2, 3, 4]
[3, 99, -1, -100]
[2, 1]
[1]`,
      cpp: `[5, 6, 7, 1, 2, 3, 4]
[3, 99, -1, -100]
[2, 1]
[1]`,
      c: `[5, 6, 7, 1, 2, 3, 4]
[3, 99, -1, -100]
[2, 1]
[1]`,
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: ["You must write an algorithm that runs in O(n) time without using the division operation."],
    },
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
    ],
    constraints: ["2 \u2264 nums.length \u2264 10\u2075", "-30 \u2264 nums[i] \u2264 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

// Test cases
console.log(productExceptSelf([1, 2, 3, 4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Expected: [0,0,9,0,0]
console.log(productExceptSelf([2, 3])); // Expected: [3,2]
console.log(productExceptSelf([1, 1, 1, 1])); // Expected: [1,1,1,1]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1, 2, 3, 4]))  # Expected: [24, 12, 8, 6]
print(productExceptSelf([-1, 1, 0, -3, 3]))  # Expected: [0, 0, 9, 0, 0]
print(productExceptSelf([2, 3]))  # Expected: [3, 2]
print(productExceptSelf([1, 1, 1, 1]))  # Expected: [1, 1, 1, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1, 2, 3, 4}))); // Expected: [24, 12, 8, 6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1, 1, 0, -3, 3}))); // Expected: [0, 0, 9, 0, 0]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{2, 3}))); // Expected: [3, 2]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1, 1, 1, 1}))); // Expected: [1, 1, 1, 1]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

template <typename T>
void printVector(vector<T>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i + 1 != v.size()) cout << ", ";
    }
    cout << "]" << endl;
}

vector<int> productExceptSelf(vector<int>& nums) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<int> result1 = productExceptSelf({1, 2, 3, 4});
    printVector(result1); // Expected: [24, 12, 8, 6]
    vector<int> result2 = productExceptSelf({-1, 1, 0, -3, 3});
    printVector(result2); // Expected: [0, 0, 9, 0, 0]
    vector<int> result3 = productExceptSelf({2, 3});
    printVector(result3); // Expected: [3, 2]
    vector<int> result4 = productExceptSelf({1, 1, 1, 1});
    printVector(result4); // Expected: [1, 1, 1, 1]
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void printIntArray(int* arr, int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i != n - 1) printf(", ");
    }
    printf("]\\n");
}

int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    // Write your solution here
    
    *returnSize = 0;
    return NULL;
}

int main() {
    int nums1[] = {1, 2, 3, 4};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    int returnSize1;
    int* result1 = productExceptSelf(nums1, nums1Size, &returnSize1);
    printIntArray(result1, returnSize1); // Expected: [24, 12, 8, 6]

    int nums2[] = {-1, 1, 0, -3, 3};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    int returnSize2;
    int* result2 = productExceptSelf(nums2, nums2Size, &returnSize2);
    printIntArray(result2, returnSize2); // Expected: [0, 0, 9, 0, 0]

    int nums3[] = {2, 3};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    int returnSize3;
    int* result3 = productExceptSelf(nums3, nums3Size, &returnSize3);
    printIntArray(result3, returnSize3); // Expected: [3, 2]

    int nums4[] = {1, 1, 1, 1};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    int returnSize4;
    int* result4 = productExceptSelf(nums4, nums4Size, &returnSize4);
    printIntArray(result4, returnSize4); // Expected: [1, 1, 1, 1]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `[24,12,8,6]
[0,0,9,0,0]
[3,2]
[1,1,1,1]`,
      python: `[24, 12, 8, 6]
[0, 0, 9, 0, 0]
[3, 2]
[1, 1, 1, 1]`,
      java: `[24, 12, 8, 6]
[0, 0, 9, 0, 0]
[3, 2]
[1, 1, 1, 1]`,
      cpp: `[24, 12, 8, 6]
[0, 0, 9, 0, 0]
[3, 2]
[1, 1, 1, 1]`,
      c: `[24, 12, 8, 6]
[0, 0, 9, 0, 0]
[3, 2]
[1, 1, 1, 1]`,
    },
  },

  "find-all-duplicates-in-an-array": {
    id: "find-all-duplicates-in-an-array",
    title: "Find All Duplicates in an Array",
    difficulty: "Medium",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums where each integer appears either once or twice, return an array of all the integers that appear twice.",
      notes: [],
    },
    examples: [
      { input: "nums = [4,3,2,7,8,2,3,1]", output: "[2,3]" },
      { input: "nums = [1,1,2]", output: "[1]" },
    ],
    constraints: ["n == nums.length", "1 \u2264 n \u2264 10\u2075", "1 \u2264 nums[i] \u2264 n"],
    starterCode: {
      javascript: `function findDuplicates(nums) {
  // Write your solution here
  
}

// Test cases
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // Expected: [3,2]
console.log(findDuplicates([1, 1, 2])); // Expected: [1]
console.log(findDuplicates([1])); // Expected: []
console.log(findDuplicates([2, 2])); // Expected: [2]`,
      python: `def findDuplicates(nums):
    # Write your solution here
    pass

# Test cases
print(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))  # Expected: [3, 2]
print(findDuplicates([1, 1, 2]))  # Expected: [1]
print(findDuplicates([1]))  # Expected: []
print(findDuplicates([2, 2]))  # Expected: [2]`,
      java: `import java.util.*;

class Solution {
    public static int[] findDuplicates(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(findDuplicates(new int[]{4, 3, 2, 7, 8, 2, 3, 1}))); // Expected: [3, 2]
        System.out.println(Arrays.toString(findDuplicates(new int[]{1, 1, 2}))); // Expected: [1]
        System.out.println(Arrays.toString(findDuplicates(new int[]{1}))); // Expected: []
        System.out.println(Arrays.toString(findDuplicates(new int[]{2, 2}))); // Expected: [2]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

template <typename T>
void printVector(vector<T>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i + 1 != v.size()) cout << ", ";
    }
    cout << "]" << endl;
}

vector<int> findDuplicates(vector<int>& nums) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<int> result1 = findDuplicates({4, 3, 2, 7, 8, 2, 3, 1});
    printVector(result1); // Expected: [3, 2]
    vector<int> result2 = findDuplicates({1, 1, 2});
    printVector(result2); // Expected: [1]
    vector<int> result3 = findDuplicates({1});
    printVector(result3); // Expected: []
    vector<int> result4 = findDuplicates({2, 2});
    printVector(result4); // Expected: [2]
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void printIntArray(int* arr, int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i != n - 1) printf(", ");
    }
    printf("]\\n");
}

int* findDuplicates(int* nums, int numsSize, int* returnSize) {
    // Write your solution here
    
    *returnSize = 0;
    return NULL;
}

int main() {
    int nums1[] = {4, 3, 2, 7, 8, 2, 3, 1};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    int returnSize1;
    int* result1 = findDuplicates(nums1, nums1Size, &returnSize1);
    printIntArray(result1, returnSize1); // Expected: [3, 2]

    int nums2[] = {1, 1, 2};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    int returnSize2;
    int* result2 = findDuplicates(nums2, nums2Size, &returnSize2);
    printIntArray(result2, returnSize2); // Expected: [1]

    int nums3[] = {1};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    int returnSize3;
    int* result3 = findDuplicates(nums3, nums3Size, &returnSize3);
    printIntArray(result3, returnSize3); // Expected: []

    int nums4[] = {2, 2};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    int returnSize4;
    int* result4 = findDuplicates(nums4, nums4Size, &returnSize4);
    printIntArray(result4, returnSize4); // Expected: [2]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `[3,2]
[1]
[]
[2]`,
      python: `[3, 2]
[1]
[]
[2]`,
      java: `[3, 2]
[1]
[]
[2]`,
      cpp: `[3, 2]
[1]
[]
[2]`,
      c: `[3, 2]
[1]
[]
[2]`,
    },
  },

  "kth-largest-element-in-an-array": {
    id: "kth-largest-element-in-an-array",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    category: "Array • Sorting • Heap",
    description: {
      text: "Given an integer array nums and an integer k, return the kth largest element in the array.",
      notes: ["Note that it is the kth largest element in the sorted order, not the kth distinct element."],
    },
    examples: [
      { input: "nums = [3,2,1,5,6,4], k = 2", output: "5" },
      { input: "nums = [3,2,3,1,2,4,5,5,6], k = 4", output: "4" },
    ],
    constraints: ["1 \u2264 k \u2264 nums.length \u2264 10\u2075", "-10\u2074 \u2264 nums[i] \u2264 10\u2074"],
    starterCode: {
      javascript: `function findKthLargest(nums, k) {
  // Write your solution here
  
}

// Test cases
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Expected: 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Expected: 4
console.log(findKthLargest([1], 1)); // Expected: 1
console.log(findKthLargest([7, 6, 5, 4, 3, 2, 1], 5)); // Expected: 3`,
      python: `def findKthLargest(nums, k):
    # Write your solution here
    pass

# Test cases
print(findKthLargest([3, 2, 1, 5, 6, 4], 2))  # Expected: 5
print(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))  # Expected: 4
print(findKthLargest([1], 1))  # Expected: 1
print(findKthLargest([7, 6, 5, 4, 3, 2, 1], 5))  # Expected: 3`,
      java: `class Solution {
    public static int findKthLargest(int[] nums, int k) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(findKthLargest(new int[]{3, 2, 1, 5, 6, 4}, 2)); // Expected: 5
        System.out.println(findKthLargest(new int[]{3, 2, 3, 1, 2, 4, 5, 5, 6}, 4)); // Expected: 4
        System.out.println(findKthLargest(new int[]{1}, 1)); // Expected: 1
        System.out.println(findKthLargest(new int[]{7, 6, 5, 4, 3, 2, 1}, 5)); // Expected: 3
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int findKthLargest(vector<int>& nums, int k) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << findKthLargest({3, 2, 1, 5, 6, 4}, 2) << endl; // Expected: 5
    cout << findKthLargest({3, 2, 3, 1, 2, 4, 5, 5, 6}, 4) << endl; // Expected: 4
    cout << findKthLargest({1}, 1) << endl; // Expected: 1
    cout << findKthLargest({7, 6, 5, 4, 3, 2, 1}, 5) << endl; // Expected: 3
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int findKthLargest(int* nums, int numsSize, int k) {
    // Write your solution here
    
    return 0;
}

int main() {
    int nums1[] = {3, 2, 1, 5, 6, 4};
    int nums1Size = sizeof(nums1) / sizeof(nums1[0]);
    int k1 = 2;
    printf("%d\\n", findKthLargest(nums1, nums1Size, k1)); // Expected: 5

    int nums2[] = {3, 2, 3, 1, 2, 4, 5, 5, 6};
    int nums2Size = sizeof(nums2) / sizeof(nums2[0]);
    int k2 = 4;
    printf("%d\\n", findKthLargest(nums2, nums2Size, k2)); // Expected: 4

    int nums3[] = {1};
    int nums3Size = sizeof(nums3) / sizeof(nums3[0]);
    int k3 = 1;
    printf("%d\\n", findKthLargest(nums3, nums3Size, k3)); // Expected: 1

    int nums4[] = {7, 6, 5, 4, 3, 2, 1};
    int nums4Size = sizeof(nums4) / sizeof(nums4[0]);
    int k4 = 5;
    printf("%d\\n", findKthLargest(nums4, nums4Size, k4)); // Expected: 3

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `5
4
1
3`,
      python: `5
4
1
3`,
      java: `5
4
1
3`,
      cpp: `5
4
1
3`,
      c: `5
4
1
3`,
    },
  },

  "counting-bits": {
    id: "counting-bits",
    title: "Counting Bits",
    difficulty: "Easy",
    category: "Dynamic Programming • Bit Manipulation",
    description: {
      text: "Given an integer n, return an array ans of length n + 1 such that for each i (0 \u2264 i \u2264 n), ans[i] is the number of 1's in the binary representation of i.",
      notes: [],
    },
    examples: [
      { input: "n = 2", output: "[0,1,1]" },
      { input: "n = 5", output: "[0,1,1,2,1,2]" },
    ],
    constraints: ["0 \u2264 n \u2264 10\u2075"],
    starterCode: {
      javascript: `function countBits(n) {
  // Write your solution here
  
}

// Test cases
console.log(countBits(2)); // Expected: [0,1,1]
console.log(countBits(5)); // Expected: [0,1,1,2,1,2]
console.log(countBits(0)); // Expected: [0]
console.log(countBits(8)); // Expected: [0,1,1,2,1,2,2,3,1]`,
      python: `def countBits(n):
    # Write your solution here
    pass

# Test cases
print(countBits(2))  # Expected: [0, 1, 1]
print(countBits(5))  # Expected: [0, 1, 1, 2, 1, 2]
print(countBits(0))  # Expected: [0]
print(countBits(8))  # Expected: [0, 1, 1, 2, 1, 2, 2, 3, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] countBits(int n) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(countBits(2))); // Expected: [0, 1, 1]
        System.out.println(Arrays.toString(countBits(5))); // Expected: [0, 1, 1, 2, 1, 2]
        System.out.println(Arrays.toString(countBits(0))); // Expected: [0]
        System.out.println(Arrays.toString(countBits(8))); // Expected: [0, 1, 1, 2, 1, 2, 2, 3, 1]
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

template <typename T>
void printVector(vector<T>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i + 1 != v.size()) cout << ", ";
    }
    cout << "]" << endl;
}

vector<int> countBits(int n) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<int> result1 = countBits(2);
    printVector(result1); // Expected: [0, 1, 1]
    vector<int> result2 = countBits(5);
    printVector(result2); // Expected: [0, 1, 1, 2, 1, 2]
    vector<int> result3 = countBits(0);
    printVector(result3); // Expected: [0]
    vector<int> result4 = countBits(8);
    printVector(result4); // Expected: [0, 1, 1, 2, 1, 2, 2, 3, 1]
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void printIntArray(int* arr, int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i != n - 1) printf(", ");
    }
    printf("]\\n");
}

int* countBits(int n, int* returnSize) {
    // Write your solution here
    
    *returnSize = 0;
    return NULL;
}

int main() {
    int n1 = 2;
    int returnSize1;
    int* result1 = countBits(n1, &returnSize1);
    printIntArray(result1, returnSize1); // Expected: [0, 1, 1]

    int n2 = 5;
    int returnSize2;
    int* result2 = countBits(n2, &returnSize2);
    printIntArray(result2, returnSize2); // Expected: [0, 1, 1, 2, 1, 2]

    int n3 = 0;
    int returnSize3;
    int* result3 = countBits(n3, &returnSize3);
    printIntArray(result3, returnSize3); // Expected: [0]

    int n4 = 8;
    int returnSize4;
    int* result4 = countBits(n4, &returnSize4);
    printIntArray(result4, returnSize4); // Expected: [0, 1, 1, 2, 1, 2, 2, 3, 1]

    return 0;
}`,
    },
    expectedOutput: {
      javascript: `[0,1,1]
[0,1,1,2,1,2]
[0]
[0,1,1,2,1,2,2,3,1]`,
      python: `[0, 1, 1]
[0, 1, 1, 2, 1, 2]
[0]
[0, 1, 1, 2, 1, 2, 2, 3, 1]`,
      java: `[0, 1, 1]
[0, 1, 1, 2, 1, 2]
[0]
[0, 1, 1, 2, 1, 2, 2, 3, 1]`,
      cpp: `[0, 1, 1]
[0, 1, 1, 2, 1, 2]
[0]
[0, 1, 1, 2, 1, 2, 2, 3, 1]`,
      c: `[0, 1, 1]
[0, 1, 1, 2, 1, 2]
[0]
[0, 1, 1, 2, 1, 2, 2, 3, 1]`,
    },
  },

};


export const COMPILER_CONFIG = {
  javascript: { language: "nodejs", versionIndex: "4" },
  python: { language: "python3", versionIndex: "4" },
  java: { language: "java", versionIndex: "4" },
  cpp: { language: "cpp17", versionIndex: "1" },
  c: { language: "c", versionIndex: "5" },
};



export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
  c: {
    name: "C",
    icon: "/c.png",
    monacoLang: "c",
  },
};