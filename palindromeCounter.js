// input: str of sentence
// output: how many palin : num
// edge case:  if input is not alphabect, no element, 
// rule: whats palin: a, aa
function palindromeCounter (sentence){
    // split the input word by word
    sentence = sentence.toLowerCase();
    let word = sentence.split(' ');
    // iterate word
    let count = 0;
    for (let i = 0; i < word.length; i++){
        // if word is palindrome count++ 
        if (isPalindrome(word[i])){
            count ++;
        }
        // if not palindrome, can we make it palin?
        else {
            // count word and see if the key-value is even
          if (isEven(countWord(word[i]))){
              count ++;
          }
        }
    } return count;
  }
  function isPalindrome (word){
      let reversed = word.split('').reverse().join('');
      return word === reversed;
  }
  
  function countWord (word){
      let obj = {};
      for (let x = 0; x < word.length; x++){
          let currentKey = word[x];
          if (obj[currentKey]){
              obj[currentKey]++
          } else {
              obj[currentKey] = 1;
          }
      }
      return obj;
  };
  
  function isEven (obj){
      // iterate obj and check value, if is even return true, if not return false break;
      let isEven = true;
      for (let key in obj){
          if (obj[key] %2 === 0){
              isEven = true;
          }
          else if (obj[key] %2 !== 0){
              isEven = false;
              break;
          }
      }
      return isEven;
  };
  
  let input = 'a aa abCAbc dc';
  let actual = palindromeCounter(input);
  function assertEqual (actual, expected, testName){
      if (actual === expected){
          console.log('passed');
      } else {
          console.log('failed');
      }
  };
  assertEqual(actual, 3, 'it counts palindrome');
  