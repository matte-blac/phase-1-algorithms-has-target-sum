function hasTargetSum(array, target) {
  // Write your algorithm here
  let arraySet = new Set() // Create an empy Set to store the numbers

  for(let num of array){ // Loop through number in the array
    let answer = target - num // Calculate what the other number would be if it existed in the array
    
    if (arraySet.has(answer)) { // If this number has been seen before
      return true
    }
    arraySet.add(num) // Otherwise, add number to set
  }
  // If gone through the entire array and pair adds to the target, return false
  return false
}

/* 
  Write the Big O time complexity of your function here

  I am iterating over the array once with a for loop, having a time complexity of O(n)
  Inside the loop, two operations are being performed: Checking if the an element is in the set and adding an element into the set;
  Both operations have a time complexity of O(1), meaning they take constant time regardless of set size.
  Overall time of the function is O(n) since constant time operations are being performed for each element in the array.
*/

/* 
  Add your pseudocode here
  
  Procedure hasTargetSum takes an array and a target as input
  Create an empty Set called arraySet

  For each number num in the array
    Calculate the complement of num with respect to the target

    If arraySet contains the complement
      Return true

    Add num to arraySet

  If no pair of numbers adds up to the target, return false
End Procedure

*/

/*
  Add written explanation of your solution here

Initialize a Set: let arraySet = new Set() - This step creates an empty Set to store the numbers from the array. 
A Set is a built-in JavaScript object that allows you to store unique values.

Loop Through Array: for(let num of array) - This loop iterates over each number in the array.

Calculate Potential Pair: let answer = target - num - Inside the loop, this step calculates what the other number 
would be if it existed in the array to add up to the target.

Check for Pair: if (arraySet.has(answer)) - This step checks if the calculated number has been seen before in the 
array (i.e., it’s stored in the Set). If it has, it means that there is a pair of numbers in the array that add up 
to the target, so it returns true and exits the function.

Add Number to Set: arraySet.add(num) - If the calculated number hasn’t been seen before, this step adds the current 
number to the Set for future reference.

Return Result: return false - If the function has gone through the entire array and hasn’t found any pair of numbers 
that add up to the target, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
