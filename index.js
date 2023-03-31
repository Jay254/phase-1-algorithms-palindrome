function isPalindrome(word) {
  // Write your algorithm here
       //split the word into an array of letters 
       //loop from the last character to the first character, pushing each into a new array
       //Join the letters into a new string
       //Check if the new string is similar to our word input
       //If so, our word is a palindrome, if not, it is not a palindrome
       
   //My code    
       let newWord = word.split('');
        //console.log(newWord)
       let arr = [];
       for(let i = newWord.length - 1; i >= 0; i --){
        arr.push(newWord[i]);
      }
       //console.log(arr);
       let finalWord = arr.join('');
       //console.log(finalWord)
       if (finalWord === word){
              return true;
       }
       else{
              return false;
       }
         

}

/* 
  Add your pseudocode here

        split word into a character array and store it in a variable
        iterate through each character in a reverse manner
              push character into new array
        join the characters in our new array to form string
        If new string equals word:
                return true;
        else
                return false;

*/

/*
  Add written explanation of your solution here
        
        I split the word input into its individual character array using .split('') and stored them in newWord variable
        I looped through the array in reverse order, each time pushing the character in a new arr array
        I joined the characters using .join('') and stored them in the variable finalWord
        Used an if statement to check if finalWord, which is now the reversed word, is equal to the initial word
        If so, my function returns true, otherwise it return false
         
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("teacher"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
