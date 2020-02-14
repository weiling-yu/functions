function addFullNameProperty(obj) {
    // your code here
    let firstName = obj.firstName;
    let lastName = obj.lastName;
    let fullName = firstName + ' ' + lastName;
    obj.fullName = fullName;
  };
  var person = {
    firstName: 'Jade',
    lastName: 'Smith'
  };
  addFullNameProperty(person);
  //console.log(person.fullName); 

  function computeAreaOfACircle(radius) {
    // your code here
    let result = Math.PI * (radius*2);
    return result;
  };
var output = computeAreaOfACircle(4);
//console.log(output); // --> 50.26548245743669

function computeSquareRoot(num) {
    // your code here
    return Math.sqrt(num);
  }
var output = computeSquareRoot(9);
//console.log(output); // --> 3

function getElementsAfter(array, n) {
    // your code here
    let newArray = array.slice(n);
    return newArray;
  
  }
  var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
//console.log(output); // --> ['d', 'e']
function countCharacter(str, char) {
    // your code here  
    let countEle = 0;
    for (let i=0; i< str.length; i++){
        if (str[i] === char){
            countEle++;
        }
    }
    return countEle;
  }
  var output = countCharacter('I am a hacker', 'a');
//console.log(output); // --> 3

function addObjectProperty(obj1, key, obj2) {
    // your code here
    obj1[key]=obj2;
  };
  var person1 = {
    name: 'Joe Blow',
    role: 'schlub'
  };
  var person2 = {
    name: 'Mr. Burns',
    role: 'supervisor'
  };
  addObjectProperty(person1, 'manager', person2);
  //console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }

  function addArrayProperty(obj, key, arr) {
    // your code here
    obj[key]=arr;
  }
var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
//console.log(myObj.myProperty); // --> [1, 3]

function countWords(str) {
    if(!str || str.length == 0){
        return {};
    };
    //make string to an array
let wordArr = str.split(' ');
//console.log(wordArr);
    //create a object and a current obj variable for pair array
let countObj = {};
    //for loop the array
    //compare array and ojbect
for (let i =0 ; i <wordArr.length; i++){
let currentObjKey= wordArr[i];
  if(countObj[currentObjKey]=== undefined){
    countObj[currentObjKey] =1;
      }
  else{
      countObj[currentObjKey]++;
      }
  }
return countObj;
};
var output = countWords('ask a bunch get a bunch');
//console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

function removeFromBack(arr) {
    // your code here
    arr.pop();
    return arr;
  };
  var output = removeFromBack([1, 2, 3]);
//console.log(output); // --> [1, 2]

function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    if (num1 %2 === 0 || num2 %2 === 0){
        return true;
    }
    else if (num1 === 7 && num2 === 7){
        return true;
    }
    else {
        return false;
    }
  }
  var output = isEitherEvenOrAreBoth7(3, 7);
//console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
//console.log(output); // --> tru
function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    if (num1 %2 === 0 || num2 %2 === 0){
        if (num1 < 9 && num2 < 9){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

var output = isEitherEvenAndLessThan9(72, 2);
//console.log(output); // --> false

function or(expression1, expression2) {
    // your code here
return !expression1 || !expression2;
  }
  var output = or(false, false);
//console.log(output); // --> true;

function or(expression1, expression2) {
    if (expression1 === false && expression2 === false){
        return false;
    }
    return true;
};
function or(expression1, expression2) {
    // your code here
    return !(!expression1 && !expression2);
  }


// true, true -> false && false -> !false -> true
// true, false -> false && true -> !false -> true
// false, true -> true && false -> !false -> true
// false, false -> true && true -> !true -> false
function extend(obj1, obj2) {
    // iterate obj2
   for (let obj1key in obj1){
    for (let obj2key in obj2){
      // if current obj2Key is not in obj1Key :obj1[obj2 key] is undefined and the prop to obj1
      if (obj1[obj2key] === undefined){
        obj1[obj2key] = obj2[obj2key];
      }
    // add obj2 to obj1 
    }
   }
  }
  
  var obj1 = {
    a: 1,
    b: 2
  };
  var obj2 = {
    b: 4,
    c: 3
  };
  extend(obj1, obj2);
  
 // console.log(obj1); // --> {a: 1, b: 2, c: 3}
//console.log(obj2); // --> {b: 4, c: 3}

  
function commonProp (obj1, obj2){
  let result = {};
  for (let key1 in obj1){
      // key1 = a
      for (let key2 in obj2) {
          // key2 = b, c, z 
        if (key1 === key2) {
            result[key1] = {
                obj1: obj1[key1], 
                obj2: obj2[key1]
            };
        }
      }
  }
  return result;
};
var obj1 = {
    a: 1,
    b: 2,
    e: 1,
    z: 0,
  };
  var obj2 = {
    b: 2,
    c: 3,
    z: 5,
  };
//console.log(commonProp(obj1, obj2));

function removeNumbersLargerThan(num, obj) {
    // iterate obj
    for (let key in obj){
     // if obj value is greater then num, removed it
     if (obj[key] > num){
         delete obj[key];
     }
     return obj;
    }
     // return obj
  };

  var obj = {
    a: 8,
    b: 2,
    c: 'montana'
  }
removeNumbersLargerThan(5, obj);
//console.log(obj); // --> { b: 2, c: 'montana' }

  function removeNumbersLessThan(num, obj) {
    // your code here
    for (let key in obj){
        if (obj[key] < num){
            delete obj[key];
        }
    }
    return obj;
  };
  var obj = {
    a: 8,
    b: 2,
    c: 'montana'
  }
removeNumbersLessThan(5, obj);
//console.log(obj); // --> { a: 8, c: 'montana' }

  function removeStringValuesLongerThan(num, obj) {
    // iterate obj
    for (let key in obj){
        if (obj[key].length > num){
            delete obj[key];
        }
      // if obj key is longer then num. removed it
    }
    //return obj
    return obj;
  };
  var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
removeStringValuesLongerThan(6, obj);
//console.log(obj); // { age: 20, location: 'Texas' }
  function countNumberOfKeys(obj) {
    // your code here
    let count = 0;
    for (let key in obj){
        if (obj[key] !==undefined){
            count++;
        }
    }
    return count;
  };
  var obj = {
    a: 1,
    b: 2,
    c: 3
  };
var output = countNumberOfKeys(obj);
//console.log(output); // --> 3

  function removeArrayValues(obj) {
    // iterate thr obj
    for (let key in obj){
        if (Array.isArray(obj[key])){
            delete obj[key];
        }
    }
    return obj;
      // if value is array delete it;
    //return obj
    }
    var obj = {
      a: [1, 3, 4],
      b: 2,
      c: ['hi', 'there']
    }
removeArrayValues(obj);
//console.log(obj); // --> { b: 2 }

    function removeStringValues(obj) {
      // your code here
      for (let key in obj){
          if (typeof(obj[key])=== 'string'){
              delete obj[key];
          }
      }
      return obj;
    };
    var obj = {
      name: 'Sam',
      age: 20
    }
removeStringValues(obj);
//console.log(obj); // { age: 20 }
    function convertDoubleSpaceToSingle(str) {
      // split the str
      let words = str.split(' ');
      // join thr str
      let newStr = words.join('  ');
      // return the str 
      return newStr;
    };
    var output = convertDoubleSpaceToSingle("string  with  double  spaces");
//console.log(output); // --> "string with double spaces"

function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  arr1.concat(arr2,arr3);
  return arr1;
};
var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
//console.log(output); // --> [1, 2, 3, 4, 5, 6]

function addToFrontOfNew(arr, element) {
  let cloned  = arr.slice();
  cloned.unshift(element);
  return cloned;
}
var input = [1, 2];
var output = addToFrontOfNew(input, 3);
//console.log(output); // --> [3, 1, 2];
//console.log(input); //-- [1, 2]

function addToBackOfNew(arr, element) {
  let cloned = arr.slice();
  cloned.push(element);
  return cloned;
};
var input = [1, 2];
var output = addToBackOfNew(input, 3);
//console.log(input); // --> [1, 2]
//console.log(output); // --> [1, 2, 3]

function getAllElementsButNth(array, n) {
  let cloned = array.slice();
  cloned.splice(n,1);
  return cloned;
};
//var output = getAllElementsButNth(['a', 'b', 'c'], 1);
//console.log(output); // --> ['a', 'c']

function test_GetAllElementsButNth() {
  let testArray = ['a', 'b', 'c', 'd', 'e'];
  let testfunction = getAllElementsButNth(testArray,0);
  
  if (testfunction[0] === 'b' && testfunction[1] === 'c' && 
  testfunction[2] === 'd' && testfunction[3] === 'e'){
    console.log('test_GetAllElementsButNth successful')
  }
  else{
    console.log('test_GetAllElementsButNth failed');
  };
};
//test_GetAllElementsButNth();

function clonedAndInvertArr(arr){
  let newArr = [];
  for (let i = arr.length-1; i > -1; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}

function testClonedAndInvertArr() {
  let testArray = [1, 2, 3, 4, 5];
  let clonedArray = clonedAndInvertArr(testArray);

  if (clonedArray[0] === 5 && clonedArray[1] === 4 && clonedArray[2] === 3 &&
      clonedArray[3] === 2 && clonedArray[4] === 1) {
      console.log('Cloned and invert array Successfull!');
    } else {
      console.log('Cloned and invert array Failed!');
    }
}
//testClonedAndInvertArr();

function getIndexOf(char, str) {
  for (let i = 0 ; i < str.length; i++){
    if ( str[i] === char){
          return i;
      }
  }//dont use if/else to return -1
    return -1;
};

function testgetIndexOf (testString, stringIndex, target){
  let testFunction = getIndexOf(target,testString);
  if (testFunction === stringIndex){
    console.log('get indexOf Successfull!');
  } else{
  console.log('get indexOf failed!');
  };
};
//testgetIndexOf('I am a hacker', 2, 'a');
//testgetIndexOf('am a hacker', 0, 'a');
//testgetIndexOf('xyyja', 4, 'a');

function areValidCredentials(name, password) {
  if (typeof name !== 'string' || typeof password !== 'string'){
    return false;
  }
  if (name === undefined || password === undefined){
    return false;
  }
  if (name.length > 3 && password.length >= 8){
      return true;
  }
  else {
      return false;
  }
};

// test cases:
// 1. name needs to be more than 3 char and pass more than 8 = true
// 2. name is more than 3 but pass less than 8 = false
// 3. name is less than 3 but pass more than 8 = false
// 4. if name or pass are undefined, return false
// 5. if name or pass are not string, return false

function test_areValidCredentials(){
  let trueResult = areValidCredentials('vicky', '12345678');
  if (trueResult === true){
    console.log('areValidCredentials - test true case (1): OK!');
  }
  else {
    console.log('areValidCredentials - test true case (1): Not OK!!!')
  }

  let falseResult1 = areValidCredentials('vi', '1234567');
  let falseResult2 = areValidCredentials('vi', '1234567888');
  let falseResult3 = areValidCredentials('vicckkc', '12345');

  if (!falseResult1 && !falseResult2 && !falseResult3)
  {
    console.log('areValidCredentials - test false cases (3): OK!');
  }
  else {
    console.log('areValidCredentials - test false cases (3): Not OK!!!')
  }

  // These are equivalent:
  // =====================
  // let falseResult1 = true;  !falseResult1 -> false
  // let falseResult1 = false; !falseResult1 -> true
  //
  // let falseResult1 = true;  falseResult1 === false -> false
  // let falseResult1 = false; falseResult1 === false -> true
let falseResult4 = areValidCredentials (undefined, undefined);
if (falseResult4 === false){
  console.log('areValidCredentials - test undefined cases : OK!');
  }
else {
  console.log('areValidCredentials - test false undefined : Not OK!!!');
  }

let falseResult5 = areValidCredentials (true, {});
if (falseResult5 === false){
  console.log('areValidCredentials - test typeof string cases : OK!');
}
else{
  console.log('areValidCredentials - test typeof string : Not OK!!!');
}

};
//test_areValidCredentials();

function findMaxLengthOfThreeWords(word1, word2, word3) {
  // create a longest variable and assign it to the first word
  // convert all three words to array
  // iterate

  let changeToArray = [word1, word2, word3]
  let maxLength = word1;
  for (let i =0; i < changeToArray.length; i++){
    if (changeToArray[i].length > maxLength){
      maxLength = changeToArray[i];
    }
  }
  return maxLength;
  // let maxLength = word1.length;
  // for (let i = 0 ; i < changeToArray.length; i++){
  //     if (changeToArray[i] > maxLength){
  //         maxLength = changeToArray[i];
  //     }
          //changeToArray.push(word1.length);
          //changeToArray.push(word2.length);
          //changeToArray.push(word3.length);
  //}
};
var output = findMaxLengthOfThreeWords('these', 'three', 'words');
//console.log(output); // --> 'these'

function findMinLengthOfThreeWords(word1, word2, word3) {
  // change string to an array
  // set word 1 as the minLength
  // iterate the array, start from 1
    // if the array[i] is less then minLength
    // reassign minLength to the current [i]
  let array = [word1,word2, word3];
  let minLength = word1.length;
  for (let i = 1 ; i < array.length; i++){
      if (array.length < minLength){
          array[i].length = minLength;
      }
  }
  return minLength;
};

function select(arr, obj) {
  // iterate array
  // if array[i] is in the obj[key] add to result
  let result = {};
  for (let i = 0 ; i < arr.length ; i++){
    for ( let key in obj){
        if (arr[i] === key){
            result[key] = obj[key];
        }
    }
}
return result;
};

//////////////alternative way//////////
//iterate arr only
//if(obj[arr[i]] !== undefined){result[arr[i]] = obj[arr[i]]}; 


var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
//console.log(output); // --> { a: 1, c: 3 }

function getElementsThatEqual10AtProperty(obj, key) {
  let result = [];
  if (obj[key]===undefined || obj[key].length===0){
    return [];
  }
  for (let i = 0 ; i < obj[key].length; i++){
    if (obj[key][i]===10){
      result.push(obj[key][i]);
    }
  }
  return result;
  // if the arr key in the obj is equal to 10, add to array
}
var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
//console.log(output); // --> [10, 10]

function getElementsLessThan100AtProperty(obj, key) {
  let result = [];
  if (obj[key] === undefined){
      return [];
  };
  if (obj[key].length === 0){
      return [];
  };
  if (obj[key].isArray === false){
      return [];
  };
  for (let i = 0 ; i < obj[key].length; i++){
      if (obj[key][i] < 100){
          result.push(obj[key][i]);
      }
      
  }
  return result;
};
var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
//console.log(output); // --> [20, 50]

function countAllCharacters(str) {
  // create a count {}
  // iterate str
  // if current str[i] is nudefined, current[key]=1 or ++
  let count = {};
  for (let i = 0 ; i < str.length; i++){
      if (count[str[i]] === undefined){
          count[str[i]] = 1;
      }
      else {
        count[str[i]] ++;
      }
  }
  return count;
};
var output = countAllCharacters('banana');
//console.log(output); // --> {b: 1, a: 3, n: 2}

function getElementsGreaterThan10AtProperty(obj, key) {
  let result = [];
  if(obj[key] === undefined){
      return [];
  };
  if (obj[key].length === 0){
      return [];
  };
  if (obj[key].isArray===false){
      return [];
  };
  for (let i =0 ; i < obj[key].length ; i++){
  if (obj[key][i] > 10){
      result.push(obj[key][i]);
    }
  }
  return result;
};
var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
//console.log(output); // --> [20, 30]

function getFirstElementOfProperty(obj, key) {
  if (obj[key] === undefined){
      return undefined;
  }
  if (obj[key].length === 0){
      return undefined;
  }
  if (obj[key].isArray === false){
      return undefined;
  }
  for (let i = 0 ; i < obj[key].length; i++){
      return obj[key][i];
  }
}
var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
//console.log(output); // --> 1

function getFirstElementOfProperty(obj, key) {
  if (obj[key] === undefined){
      return undefined;
  }
  if (obj[key].length === 0){
      return undefined;
  }
  if (Array.isArray(obj[key]) === false){
      return undefined;
  }
  for (let i = 0 ; i < obj[key].length; i++){
      return obj[key][i];
  }
};
var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
//console.log(output); // --> 1
function getNthElementOfProperty(obj, key, n) {
  
  if (obj[key] === undefined){
      return undefined;
  };
  if (obj[key].length === 0){
      return undefined;
  };
  if (n > obj[key].length-1){
      return undefined;
  };
  if (!Array.isArray(obj[key])){
      return undefined;
  };
  for (let i = 0 ; i < obj[key].length ; i++){
      return obj[key][n];
  } 
};
var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
//console.log(output); // --> 2

function getLastElementOfProperty(obj, key) {
  if (obj[key] === undefined ){
      return undefined;
  };
  if (obj[key].length === 0){
      return undefined;
  };
  if (!Array.isArray(obj[key])){
      return undefined;
  };
  let lastIndex = obj[key].length-1;
  for (let i = 0 ; i < obj[key].length ; i++){
      return obj[key][lastIndex];
  }
};
var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
//console.log(output); // --> 5

function removeElement(array, discarder) {
  if (array.length === 0){
      return [];
  };
  let unmatched = [];
  for (let i = 0 ; i < array.length; i++){
      if (array[i] !== discarder){
          unmatched.push(array[i]);
      }
  }
  return unmatched;
};
var output = removeElement([1, 2, 3, 2, 1], 2);
//console.log(output); // --> [1, 3, 1]

function computeAverageOfNumbers(nums) {
  if (nums.length === 0){
      return 0;
  };
  let sum =0;
  let average = 0; 
  for (let i = 0 ; i < nums.length; i++){
    average = (sum = sum + nums[i])/nums.length;
  }
  return average;
  
};
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
//console.log(output); // --> 3

function getOddLengthWordsAtProperty(obj, key) {
  if (obj[key] === undefined){
      return [];
  }
  if (obj[key].length === 0){
      return [];
  };
  if (!Array.isArray(obj[key])){
      return [];
  };
  let result = [];
  for (let i = 0 ; i < obj[key].length; i++){
      if (obj[key][i].length %2 === 1){
          result.push(obj[key][i]);
      }
  }
  return result;
};
var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
//console.log(output); // --> ['has', 'words']

function getSquaredElementsAtProperty(obj, key) {
  if (obj[key] === undefined ){
      return [];
  };
  if (obj[key].length === 0 ){
      return [];
  };
  if (Array.isArray(obj[key])=== false){
      return [];
  };
  let result = [];
  for (let i=0; i < obj[key].length; i++ ){
    result.push(obj[key][i]*obj[key][i]);
  }
  return result;
};
var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
//console.log(output); // --> [4, 1, 25]

function getLengthOfLongestElement(arr) {
  if (arr.length === 0){
      return 0;
  };
  let longestEle = arr[0].length;
  for (let i = 0 ; i < arr.length ; i++){
    if (arr[i].length > longestEle){
        longestEle = arr[i].length;
    }
  }
  return longestEle;
};
var output = getLengthOfLongestElement(['one', 'two', 'three']);
//console.log(output); // --> 5
function getSmallestElementAtProperty(obj, key) {
  if (obj[key] === undefined){
      return undefined;
  };
  if (obj[key].length ===0 ){
      return undefined;
  };
  if (!Array.isArray(obj[key])){
      return undefined;
  };
  let smallest = obj[key][0];
  for (let i = 0 ; i < obj[key].length; i++){
    if (obj[key][i] < smallest){
        smallest = obj[key][i]
    }
  }
  return smallest;
};
var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
//console.log(output); // --> 1

function getAllButLastElementOfProperty(obj, key) {
  if (obj[key] === undefined){
      return undefined;
  };
  if (obj[key].length === 0){
      return undefined;
  };
  if (!Array.isArray(obj[key])){
      return undefined;
  };
  let result = [];
  for (let i = 0 ; i < obj[key].length-1; i++){
    result.push(obj[key][i])
  }
  return result;
};
var obj = {
  key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
//console.log(output); // --> [1,2]

function getElementOfArrayProperty(obj, key, index) {
  if (obj[key] === undefined){
      return undefined;
  };
  if (obj[key].length === 0){
      return undefined;
  };
  if (!Array.isArray(obj[key])){
      return undefined;
  };
  for (let i = 0 ; i < obj[key].length; i++){
      return obj[key][index];
  }
};
var obj = {
  key: ['Jamil', 'Albrey']
 };
 var output = getElementOfArrayProperty(obj, 'key', 0);
 //console.log(output); // --> 'Jamil'

 function computeProductOfAllElements(arr) {
  if (arr.length === 0){
      return 0;
  };
  let result = arr[0]
  for (let i = 1; i < arr.length; i++){
    result = result*arr[i];
  }
  return result;
};
var output = computeProductOfAllElements([2, 5, 6]);
//console.log(output); // --> 60
function getLengthOfShortestElement(arr) {
  if (arr.length ===0){
      return 0;
  };
  let shortest = arr[0].length;
  for (let i = 0 ; i < arr.length; i++){
    if (arr[i].length < shortest){
        shortest = arr[i].length;
    }  
  }
  return shortest;
};
var output = getLengthOfShortestElement(['one', 'two', 'three']);
//console.log(output); // --> 3

function getLongestElement(arr) {
  if (arr.length === 0){
      return '';
  };
  let longest = arr[0];
  let tie = '';
  for (let i =0; i < arr.length; i++){

    if (arr[i].length > arr[0].length){
        longest = arr[i];
    }
  }
  return longest;
};
var output = getLongestElement(['one', 'two', 'six']);
//console.log(output); // --> 'three'

function findShortestElement(arr) {
  if (arr.length === 0){
      return '';
  };
  let shortest = arr[0];
  for (let i = 1 ; i < arr.length ; i++){
    if (arr[i].length < shortest.length){
        shortest = arr[i];
    }
 }
return shortest;
};
var output = findShortestElement(['a', 'two', 'three']);
//console.log(output); // --> 'a'

function calculateBillTotal(preTaxAndTipAmount) {
  let sum = 0;
  let afterTip = preTaxAndTipAmount * 0.15;
  let afterTax = preTaxAndTipAmount * 0.095;
  return preTaxAndTipAmount+afterTip+afterTax;
};
var output = calculateBillTotal(20);
//console.log(output); // --> 24.9

function getStringLength(string) {
  let count = 0;  
  while (string !== ''){
    string = string.slice(1);
    count++;
  }
  return count;
}
var output = getStringLength('hello');
//console.log(output); // --> 5

function joinArrayOfArrays(arr) {
  let combine = [];
  for (let i = 0 ; i < arr.length; i++){
    combine = combine.concat(arr[i]);
  }
  return combine;
};
// also you can use push
function joinArrayOfArrays_1(arr){
  let combined = [];
  for (let i = 0 ; i < arr.length; i++){
    for (let j = 0 ; j < arr[i].length; j++){
      combined.push(arr[i][j])
    }
  }
  return combined;
}
//var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
//console.log(output); // --> [1, 4, true, false, 'x', 'y']

function getProductOfAllElementsAtProperty(obj, key) {
  if (obj[key] === undefined){
      return 0;
  };
  if (obj[key].length === 0){
      return 0;
  };
  if (!Array.isArray(obj[key])){
      return 0;
  };
  // create a result and assign it to 1
  // iterate the property array
  // reasign result to result multiply property array [i]
  let getProduct= 1; 
  for (let i = 0 ; i< obj[key].length; i++){
    getProduct = getProduct*(obj[key][i]);
  }
  return getProduct;
}
var obj = { 
  key: [1, 2, 3, 4]
};
//var output = getProductOfAllElementsAtProperty(obj, 'key');
//console.log(output); // --> 24

function sumDigits(num) {
  let toStr = num.toString(); // '1148'
  let sum = 0;
  for (let i = 0 ; i < toStr.length; i = i + 1){
    // toStr[0] = '1'
    if (toStr[i] === '-'){
      console.log(Number('-'+toStr[i+1]));
      sum = sum + Number('-'+toStr[i+1]);
      i = i + 1;
    }
    else {
    sum = sum + Number(toStr[i]);
    console.log(toStr[i])
    }
  }
  return sum;
};
//var output = sumDigits(-316);
//console.log(output); // --> 4

function sumDigits(num) {
  let toStr = num.toString();
  let sum = 0;
  for (let i = 0 ; i < toStr.length; i++){
    if (toStr[i] === '-'){
      sum = sum + Number('-'+ toStr[i+1]);
      i=i+1;
    }
    else {
      sum = sum + Number(toStr[i]);
    }
  }
  return sum;
};

function sumDigits(num) { // this one doesnt work
  let isNumNagative = false;
  if (num < 0){ Math.abs(num); isNumNagative = true}
  
  let toStr = num.toString();
  let sum = 0;
  let firstNum = Number(toStr[0]);
  for (let i = 0 ; i < toStr.length; i++){
    sum = sum + Number(toStr[i]);
      if (isNumNagative){
          sum = sum - (2*firstNum)
      }
      else {
          return sum;
      }
  }
}

//var output = sumDigits(1148);
//console.log(output); // --> 14
//var output = sumDigits(-316);
//console.log(output); // --> 4


function findShortestWordAmongMixedElements(arr){
  // your code here
  if (arr.length === 0){
      return '';
  }
  let string = [];
  for (let i = 0 ; i < arr.length; i++){
    if (typeof arr[i] === 'string'){
      string.push(arr[i]);
    }
  };
  if (string.length === 0){
    return '';
  };
  let shortest = string[0];
  for (let i = 0 ; i < string.length; i++){
    if (string[i].length < shortest.length){
      shortest = string[i];
    }
  }
  return shortest;
};
//var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
//console.log(output); // --> 'two'

function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0){
      return 0;
  };
  let numbers = [];
  for (let i = 0 ; i < arr.length; i++){
    if (typeof arr[i] === 'number'){
      numbers.push(arr[i]);
    }
  }
  if (numbers.length === 0){
      return 0;
  };
  let smallest = numbers[0];
  for (let i = 0 ; i < numbers.length; i++){
      if (numbers[i] < smallest){
          smallest = numbers[i];
      }
  }
  return smallest;
};
// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4

function computeSummationToN(n) {
  // create a sum
  //iterate over current index value
  let sum = 0;
  for (let i = 0 ; i <= n; i++){
      sum = sum + i;
  }
  return sum;
};
// var output = computeSummationToN(6);
// console.log(output); // --> 21

function convertScoreToGradeWithPlusAndMinus(score) {
  if ( score < 0 || score > 100){
      return 'INVALID SCORE';
  }
  if ( score < 60 ){
      return 'F';
  };
  // 60 - 69
  if ( score < 70 ){
    if ( score <= 62){
        return 'D-';
    }
    else if ( score <= 69 ){
        return 'D+';
    }
    else {
      return 'D';
    };
  };// 70-79
  if ( score < 80 ){
    if ( score <= 72){
        return 'C-';
    }
    else if ( score <= 79 ){
        return 'C+';
    }
    else {
      return 'C';
  }
};
  if ( score < 90 ){
    if ( score <= 82){
        return 'B-';
    }
    else if ( score <= 89 ){
        return 'B+';
    }
    else {
      return 'B';
  }
};
  if ( score < 100 ){
    if ( score <= 92){
        return 'A-';
    }
    else if ( score <= 99 ){
        return 'A+';
    }
    else {
      return 'A';
  };
}
};
// var output = convertScoreToGradeWithPlusAndMinus(91);
// console.log(output); 

function computeFactorialOfN(n) {
  let sum = 1 ;
  for (let value = n; value > 0; value--){
      sum = sum * value;
  }
  return sum;
};
// var output = computeFactorialOfN(4);
// console.log(output); // --> 24
function repeatString(string, num) {
  // your code here
  let result = '';
  for (let i = 0 ; i < num; i++){
    result=result + string;  
  }
  return result;
};
// var output = repeatString('code', 3);
// console.log(output); // --> 'codecodecode'

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  let compoundInterest = principal * Math.pow ((1+interestRate/compoundingFrequency), (compoundingFrequency*timeInYears))-principal;
  return compoundInterest;
};
// var output = computeCompoundInterest(1500, .043, 4, 6);
// console.log(output); // --> 438.8368221341061

function modulo(num1, num2) {
  if (isNaN(num1) || isNaN(num2)){
      return NaN;
  }
  if (num1 === 0){
      return 0;
  }
  if (num2 === 0){
      return NaN;
  };
  //create a isResultPositive boolean flag
  let isResultPositive = true;
  if (num1 < 0 ){
    isResultPositive = false;  
  };
  //get rid of nagative
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  
  //reassign num1 substract num2 from num1 until num1 is less then num2
  while (num1 >= num2){
    num1 = num1-num2;
  };
  
  if (isResultPositive){
      return num1;
  }
  else {
      return -num1;
  };
};

// var output = modulo(-25, 4);
// console.log(output); // --> -1

function multiply(num1, num2) {
  
  let isResultPossitive = true;
  if ((num1 < 0 && num2 > 0) || (num2 < 0 && num1 > 0)){
    isResultPossitive = false;  
  };
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  
  let result = 0;
  for (let i = 0; i < num2; i++){
    result = result +num1;
  };

  if (isResultPossitive){
      return result;
  }
  else {
      return -result;
  };
};
// var output = multiply(7, -7);
// console.log(output); // --> 28

function isOddWithoutModulo(num) {
  //how to work for both nagative number
  if (num === 0){return false;}
  //if num === 0 should return false; 
  num = Math.abs(num);//get rid of nagative
  
  while (num >= 2){
    num = num-2;
  };
  if (num === 1 ){
   return  true;
  }
  else {
    return false;
  }
};
// var output = isOddWithoutModulo(-9);
// console.log(output); // --> true

function multiplyBetween(num1, num2) {
  if (num2 < num1){return 0;};
  
  let result = 1;
  for (let i = num1 ; i < num2 ; i++){
    result = result * i;
  }
  return result;
};
// var output = multiplyBetween(2, 5);
// console.log(output); // --> 24

function computeSumBetween(num1, num2) {
  if (num2 < num1){ return 0;}
  
  let result = 0;
  for (let i = num1; i < num2; i++){
    result = result + i;
  }
  return result;
};
// var output = computeSumBetween(2, 5);
// console.log(output); // --> 9

function transformFirstAndLast(array) {
  let result = {};
  let key = array[0];
  let value = array[array.length-1];
  result[key]=value;
  return result;
}
// var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
// console.log(transformFirstAndLast(input));

function transformArrayToObject(array) {
  let result = {};
  let currentKey = array[0][0];
  let currentvalue = array[0][1];
  
  for (let i = 0 ; i < array.length; i++){
    currentKey = array[i][0];
    currentvalue = array[i][1];
    result[currentKey]=currentvalue;
  }
  return result;
}
// var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
// console.log(transformArrayToObject(input))
function transformEmployeeData(employeeData) {
  let arrayContainer = []; // create a containner to push the data
  // outter loop 
  for (let i = 0 ; i < employeeData.length; i++){
    //create a catagory for index
    //create a object for inner data
    let personalArray = employeeData[i];
    let personalObj = {};
    //inner loop
    //console.log(personalArray);
    for (let j = 0; j < personalArray.length; j++){
      //create a key and value
      let key = personalArray[j][0];
      let value = personalArray[j][1];
      personalObj[key]=value;
      //console.log(personalObj)
    }
    arrayContainer.push(personalObj);
  }
  return arrayContainer;
};
var input = [
  [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
  [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]
];
//console.log(transformEmployeeData(input));

function getAllKeys(obj) {
  // create a keys variable
  // for in loop
  // push to keys
  // return 
  let keys = [];
  for (let key in obj){
      keys.push(key);
  }
  return keys;
}
var input = {
  name : 'Sam',
  age : 25,
  hasPets : true
};
//console.log(getAllKeys(input))

function convertObjectToArray(obj) {
  // create a outter container array
  // for in loop
    // create a inner container array equivalent obj date
    // push the inner array to outter container
  //return 
  let container = [];
  for (let key in obj){
    let innerData = [key, obj[key]];
    container.push(innerData);
    console.log(innerData);
  }
  return container;
};

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};
//convertObjectToArray(input)

var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  // check if customer's name is in the data
  // if not, return greeting to new customer
  if (customerData[firstName] === undefined){
    return 'Welcome! Is this your first time?';
  }
  // create visitObj and if the visit time is 1 greeting
  //let visitsObj = customerData[firstName];
  if (customerData[firstName].visits === 1){
    return `Welcome back, ${firstName}! We're glad you liked us the first time!`;
  };
  if (customerData[firstName].visits > 1){
    return `Welcome back, ${firstName}! So glad to see you again!`;
  };

}
// var output = greetCustomer('Carrie');
// console.log(output)


function assertArraysEqual(actual, expected, testName) {
  //check if they have same langth and value
  //create a variable that assume they have the same length
  //create a variable for sameValue and iterate expected make a false situation
  //if expected index is not equal to actual they are not same value
  let sameLength = actual.length === expected.length;
  let sameValue = true;
  for (let i = 0 ; i < expected.length; i++){
    if (expected[i] !== actual[i]){
      sameValue = false;
      break;
    }
  }
  //if both conditions are truly, console.log passed massage
  if (sameLength && sameValue){
    console.log('passed');
  }
  else {
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
    
  }
}

// var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
// var actual = 'broken'.split('');
// assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed

// FUNCTION DEFINITION(S)
function addOne(val) {
  return val + 1;
}

// ASSERTION FUNCTION(S) TO BE USED
function assert(condition, testName) {
  if (condition) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + ']');
  }
}

// TESTS FOR isOne
// var result1 = addOne(1);
// assert(result1 === 2, 'should return result of a positive input number added to 1');

// var result2 = addOne(-2);
// assert(result2 === 1, 'should return result of a negative input number added to 1');

// FUNCTION DEFINITION(S)
function square(n) {
  return n * n;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertion1 (condition, testName){
    if(condition){
        console.log('passed');
    }
    else {
        console.log('failed')
    }
}
// TESTS CASES
// let case1 = assertion1 (square(2) === 5, 'make square');
// console.log(case1);
// FUNCTION DEFINITION(S)
function square(n) {
  return n * n;
}

// ASSERTION FUNCTION(S) TO BE USED
// FUNCTION DEFINITION(S)
function square(n) {
  return n * n;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual (actual, expected, testName){
    if (actual === expected){
        console.log('passed');
    } else {
        console.log(`FAILED ["${testName}"] Expected "${expected}", but got "${actual}"`)
    }
}
// TESTS CASES
let actual1 = square(2);
let expected1 = 4;
//assertEqual(actual1, expected1, 'make square positive intenger')
 let actual2 = square(-2);
 let expected2 = 4;
//assertEqual(actual2, expected2, 'make square nagative intenger')

// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S) every()
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;

  for (var i = 0; i < array.length; i++) {
    if (doesEveryElementMatch = false){
      return doesEveryElementMatch;
    }
    doesEveryElementMatch = callbackFunction(array[i]);
  }
  return doesEveryElementMatch;
};

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName){
  if (actual === expected){
    console.log('passed');
  } else {
    console.log(`FAILED ["${testName}"] Expected "${expected}", but got "${actual}"`);
  }
};
// TESTS CASES
function moreThenTwo (value){return value > 2;}//return true
let arrayTrue = [3,4,5,6];
let actualTrue =  every(arrayTrue, moreThenTwo);
//assertEqual (actualTrue, true, 'return passed if every element is more then 2');

let arrayFalse = [1,0,1,1];
let actualFalse =  every(arrayFalse, moreThenTwo);
//assertEqual (actualFalse, false, 'return FAILED if not every element is more then 2');

// FUNCTION DEFINITION(S) map()
function map(array, callbackFunction) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]));
  }
  return newArray;
};

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n * n;
  });
}


// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual (actual, expected, testName){
    let hasSameValue  = true;
    for (let i = 0 ; i < actual.length; i++){
        if (actual[i] !== expected[i]){
            hasSameValue = false;
            break;
        }
        hasSameValue;
        
    }
    let hasSameLength =  actual.length === expected.length;
    
    if (hasSameValue && hasSameLength){
        console.log('passed');
    } else {
        console.log(`FAILED ["${testName}"] Expected "${expected}", but got "${actual}"`)
    }
};
// TESTS CASES
function addone (val){ return val+1;};
let arraytruthy1 = [2,3,5];
let actualTruthy1 = map(arraytruthy1, addone);
//assertArraysEqual(actualTruthy1, [3,4,6], 'add one to every elements');


let arraytruthy2 = [2,3,5];
let actualTruthy2 = cubeAll(arraytruthy2);
//assertArraysEqual(actualTruthy2, [8, 27, 125], 'make cube to every elements');

// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  var firstName = obj["firstName"];
  var lastName = obj["lastName"];
  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }
  return obj;
}
// ASSERTION FUNCTION(S) TO BE USED

function assertObjectsEqual (actual, expected, testName){
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected){
    console.log('passed');
  } else {
    console.log (`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }
};
// TESTS CASES
let inputObj1 = {
  firstName : 'Vicky',
  lastName: 'Yu'
}
let actualFullName1 = addFullNameProp (inputObj1)
let expectedObj1 = {
  firstName : 'Vicky',
  lastName: 'Yu',
  fullName : 'Vicky Yu'
}
//assertObjectEqual (actualFullName1, expectedObj1, 'should add full name on the obj')
let inputObj2 = {
  lastName: 'Yu'
}
let actualFullName2 = addFullNameProp (inputObj2)
let expectedObj2 = {
  lastName: 'Yu',
}
//assertObjectEqual (actualFullName2, expectedObj2, 'should not add full name on the obj if first name is missing')

// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
  // uses sum function
  return (sum(numbers) / numbers.length);
  // returns the average of an array of numbers
}

function sum(numbers) {
  // returns the sum of an array of numbers
  let result = 0;
  for (let i = 0 ; i < numbers.length; i++){
      result = result + numbers[i];
  }
  return result;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual (actual, expected, testName){
    if (actual === expected){
        console.log('passed');
    } else {
        console.log (`FAILED [${testName}] Expected ${expected}, but got ${actual}`)
    }
};
// TESTS CASES
let inputNum = [1,2,3,4,5];
let actualSum = sum(inputNum);
let expectedSum = 15;
//assertEqual (actualSum, expectedSum, 'should sum numbers of array');

let actualAverage = average(inputNum);
let expectedAverage = 3;
//assertEqual(actualAverage, expectedAverage, 'shuld average hte numbers')


// FUNCTION DEFINITION(S) transfer ['a','b'...] and add property [{key:value, key:value}, ...]

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  let result = [];//for push the new data
  for (let i = 0 ; i < classList.length; i++){
    let currentStudent = {};
    currentStudent['name']= classList[i];
    currentStudent['age'] = getRandomIntInclusive(10, 11);
    result.push(currentStudent);
  }
  return result;
  // creates an object for each string in the input array, with an age of 10 or 11
  // returns an array of these objects
}

// ASSERTION FUNCTION(S) TO BE USED
function assertWithinRange (min, max, actual){
  if (min <= actual && max >= actual){
    return true;
  } else {
    return false;
  }
};

function assertDecorateClassListWithAges (input, output){

  for (let i = 0 ; i < input.length; i++){
    if (input[i] !== output[i]['name']){
      console.log(`FAILED: incorrect name at ${i}`);
      return;
    }

    if (assertWithinRange(10,11,output[i]['age'] === false)){
      console.log(`FAILED: incorrect age at ${i}`);
      return;
    }
    
  };
  console.log('passed');
};
// TESTS CASES
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

let ageOnTheList = decorateClassListWithAges(classList);
//assertDecorateClassListWithAges (classList, ageOnTheList);


// FUNCTION DEFINITION(S) use "new set" to drop deplicated letters and see if there any by comparing the size of the set and the input
function isIsogram(text) {
  // Assume the empty string is an isogram.
  if (text === ''){ return true;}
  // need to transfer test to lower case
  text = text.toLowerCase(text);
  // need to transfer input string to an array to pass into a new set
  let testArray = text.split('');
  let testIsogram = new Set(testArray);
  return testIsogram.size === text.length;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName){
  if (actual === expected){
    console.log('passed');
  } else {
    console.log(`FAILED ["${testName}"] Expected "${expected}" but got "${actual}"`);
  }
}
// TESTS CASES check lower case, mixed case for both passed and failed cases
let inputPsass1 = 'string';
let actualPass1 = isIsogram(inputPsass1);
//assertEqual (actualPass1, true, "should check only lower case letters");

let inputPsass2 = 'Astring';
let actualPass2 = isIsogram(inputPsass2);
//assertEqual (actualPass2, true, "should check mixed case letter");

let inputFail1 = 'stringing';
let actualFail1 = isIsogram(inputFail1);
//assertEqual (actualFail1, false, "should return false because of duplicated letter");

let inputFail2 = 'AstingGing'
let actualFail2 = isIsogram(inputFail2);
//assertEqual (actualFail2, false, "should return false because of duplicated mixed letter");

//application for the Immersive program:
let myUserData = ['Weiling Yu', 'Skype'];

//let myArrayNameStr = name.toString(); 
//DOESN'T need to toString, because " " is a string value even in an array

function cutName (name){
  return name.split(' ');
}

let myInfo = {};
myInfo['fullName'] = cutName('Weiling Yu');
myInfo['Skype'] = myUserData[1];
//console.log(myInfo);

// Skeleton

// FUNCTION DEFINITION(S)

function findMaxRepeatCountInAWord(word) {
  // Break up individual word into individual letters.
  let letters = word.split('');
  // Count the instances of each letter
  let counts = {};
  // Iterate all the counts and find the highest
  for (let i = 0 ; i < letters.length; i++){
     let currentLetter  = letters[i];
     if (counts[currentLetter] === undefined){
         counts[currentLetter] = 0;
     }//use else is better
     counts[currentLetter]++;
  } 
    let smallestValue = 0;
    let container = '';
    for (let key in counts){
      if (counts[key] > smallestValue){
        smallestValue = counts[key];
        container = key; 
      }

    }
    let returnObj = {
      'letter': container,
      'value': smallestValue
    };
    return returnObj;
  // 2. iterate over counts to find highest value
  // create a sample to get an idea ; counts = { a: 5, b: 2 }
  // create a container for store temp max character
  // create a variable for smallest value for comparison
  // iterate the object
  // if counts[key] is more then comparison, then container is equal to the key, and the smallest variable is equal to the value 
  // create a variable for formatting return object
  // "return letter" = variableName;
  // "letter count" = variableName;
  // return formatting return object
  
};

function test() {
 let score = 'z';
 let letters = findMaxRepeatCountInAWord(score);

 if (letters['z']===1) {
   console.log('test ok');
 } else {
   console.log('test fail');
 }
}

//test();


// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  let letters = word.split('');
  let count = {};
  // make a sting an object, for counting letters in a string 
  for (let i = 0 ; i < letters.length; i++){
    let currentLetters = letters[i];
    if (count[currentLetters] === undefined){
      count[currentLetters] =1;
    } else {
      count[currentLetters]++;
    }
  };
  // compare what count is the max count 
  let maxRepeatCount = 0;
  for (let key in count){
    if (count[key] > maxRepeatCount){
      maxRepeatCount = count[key];
    }
  } return maxRepeatCount;
  // Break up individual word into individual letters.
  // Count the instances of each letter
  // Iterate all the counts and find the highest
  // Return this word's max repeat count
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';
  let words = text.split(' ');
  
  // Break up input text into words (space-delimited).
  for(let j = 0 ; j < words.length; j++){
    //calling count function
    var repeatCountForWord = findMaxRepeatCountInWord(words[j]);
    if (repeatCountForWord > maxRepeatCountOverall){
      maxRepeatCountOverall = repeatCountForWord;
      wordWithMaxRepeatCount = words[j];
    }
  } 
  
  // For each word...
    
    // If that max repeat count is higher than the overall max repeat count, then
      // update maxRepeatCountOverall
      // update wordWithMaxRepeatCount
      
  return wordWithMaxRepeatCount;

}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual (actual, expected, testName){
  if (actual === expected){
    console.log('passed');
  } else {
    console.log(`FAILED ["${testName}"] Expected "${expected}", but got "${actual}"`);
  }
}
// TESTS CASES
let input_1 = 'sooo';
let actual_1 = findMaxRepeatCountInWord (input_1);
let expected = 3;
//assertEqual(actual_1, expected1, 'shuld return 3 for counting max repeat letter');
let input5 = 'yeaaah soo much fun';
let actual5 = findMaxRepeatCountInWord (input5);
let expected5 = 'yeaaah';
//assertEqual(actual5, expected5, 'shuld return soyeaaaho');

function Car(color, type) {
  this.color = color;
  this.type = type;
  this.gas = 12;
}
var myCar = new Car("blue", "sedan");
//console.log('myCar:', myCar);

// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  let words = sentence.split(' ');
  let palindromeWords = [];
  // iterate words and collect the palindromes
  for (let i = 0; i < words.length; i++){
      if (isPalindrome(words[i])){
        palindromeWords.push(words[i]);
      }
  };
  
  palindromeWords.sort(sortAscendingByLength);
  return palindromeWords.pop();
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
}


function reverseString(string) {
  //split string to array 
  let splited = string.split('');
  let revevrsed = [];
  let joined = '';
  for (let i = splited.length; i >-1 ; i--){
      revevrsed.push(splited[i]);
      joined = revevrsed.join('');
  } 
  return joined;
};
function isPalindrome(word) {
  // make no-casesenstive
  // return true or false;
  word = word.toLowerCase();
  return word === reverseString(word);
  // hint: you can detect palindromes by comparing a string to its reverse
}
console.log(isPalindrome('BBBbbb'))

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual (actual, expected, testName){
  if (actual === expected){
    console.log('passed');
  } else {
    console.log(`FAILED ["${testName}"] Expected "${expected}", but got "${actual}"`);
  }
};
// TESTS CASES

let reverseInput = 'aaaa';
let reverseAcutal = reverseString(reverseInput);
//assertEqual(reverseAcutal, 'aaaa', 'test_reverse')

let isPalindromeInput = 'bbbb';
let palindromeActual = isPalindrome(isPalindromeInput);
//assertEqual(palindromeActual, true, 'palindrome should return true');

let longestInput = 'aa bbb cccc ddddd';
let longestActual = findLongestPalindrome(longestInput);
//assertEqual(longestActual, 'ddddd', 'find the longest');

// Skeleton

// FUNCTION DEFINITION(S) constructor function class
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  string+= this.parenthesize(this.getAreaCode());
  string+= ' ';
  string+= this.getExchangeCode();
  string+= '-';
  string+= this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.numbers.slice(0,3).join('');
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return this.numbers.slice(3,6).join('');
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.numbers.slice(6,10).join('');
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};


let JRNum = new PhoneNumberFormatter ([4,8,0,3,8,6,3,1,8,0]);
let JRNumFormated = JRNum.render();
//console.log("exchangeCode  : " + JRNumFormated);

function renderInventory(inventory) {
  let flatList = "";
  // to add new ele to string. flatList += elements + ...
  for (let i = 0 ; i < inventory.length ; i++){
    let designerObj = inventory[i];
    let designerShoes = designerObj['shoes'];
    // iterate each shoes in designerShoes array
    for (let j = 0 ; j < designerShoes.length ; j++){
      let currentShoes = designerShoes[j];
      flatList = flatList + designerObj['name'] + ", " + currentShoes['name'] + ", " + currentShoes['price'] + "\n";
    }
  }
  return flatList;
};
//
function assertEqual (actual, expected, testName){
  if (actual === expected){
    console.log('passed');
  } else {
    console.log(`FAILED ["${testName}"] Expected "${expected}", but got "${actual}"`);
  }
};
// test case
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
let actualInventory = renderInventory (currentInventory);
let expectedInvetory = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000n\
Brunello Cucinelli, tasselled green low-top lace-up, 1100';
//assertEqual(actualInventory, expectedInvetory, "flat list");
//renderInventory(currentInventory); doesnt log, doent know why

function calculateAveragePricePerDesigner(inventory) {
  let result = {
    'designers':[]
  }
  for (let i = 0 ; i < inventory.length ; i++){
    let designerObj = inventory[i];
    let shoes = designerObj['shoes'];
    let averagePricePerDesigner = {};
    averagePricePerDesigner['name'] = designerObj['name'];
    averagePricePerDesigner['averagePrice'] = getAveragePrice(shoes);
    result['designers'].push(averagePricePerDesigner);
  }
  return result; 
};

function getAveragePrice (shoesPriceObj){
  let sum = 0;
  for (let j = 0 ; j < shoesPriceObj.length ; j++){
    let currentShoes = shoesPriceObj[j];
    sum += currentShoes['price'];
  }
  return sum / shoesPriceObj.length;
}

var expectedOutput = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};
// assertion 
function assertEqual (actual, expected, testName){
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected){
    console.log('passed');
  } else {
    console.log(`FAILED ["${testName}"] Expected "${expected}", but got "${actual}"`);
  }
};
// test case
let actualAverage1 = calculateAveragePricePerDesigner (currentInventory);
//assertEqual(actualAverage1, expectedOutput, "shold create a obj array")


function listAllBlackShoes(inventory) {
  let flatList = '';
  for (let i = 0 ; i < inventory.length ; i++){
      let designerObj = inventory[i];
      let shoes = designerObj['shoes'];
      for (let j = 0 ; j < shoes.length ; j++){
        let currentShoes = shoes[j];
          if (isBlack(currentShoes)){
            flatList+= designerObj['name'] + ", " + currentShoes['name'] + ", " + currentShoes['price'] + "\n";
          }
        }
      }
  return flatList;
};

function isBlack (shoesObj){
  return (shoesObj['name'].indexOf('black')!== -1)
};

//Create helper functions if needed
//test case
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

//listAllBlackShoes(currentInventory);

function generateLaceDetails (inventory){
  let result = [];

  // inventory loop
  for (let i = 0; i < inventory.length; i++){
    let designerObj = inventory[i];
    let shoes = designerObj['shoes'];

    // shoes loop 
    for (let j = 0; j < shoes.length; j++){

      let currrentShoes = shoes[j];

      if (isContainLace(currrentShoes)){
        let shoesDescription = {};
        let wordsDescription = currrentShoes['name'].split(' ');
        shoesDescription['nameWords'] = wordsDescription;
        shoesDescription['targetWordIndex'] = findLace(wordsDescription);
        result.push(shoesDescription);
      }
    }
  }
  return result;
};

function isContainLace (shoes){
  return shoes['name'].indexOf('lace') !== -1;
};

function findLace (wordsDescription){
  for (let k = 0; k < wordsDescription.length; k++){
    if (wordsDescription[k].indexOf('lace') !== -1){
      return k;
    }
  }
};

//test case
var expectedResult = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];
function assertEqual (actual, expected, testName){
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected){
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }
}
let actualLac = generateLaceDetails(currentInventory);
//assertEqual(actualLac, expectedResult, 'find lace')

// FUNCTION DEFINITIONS
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {

  var decoratedClassList = [];

  for (var i = 0; i < classList.length; i++) {
    var studentObj = {
      name: classList[i],
      age: getRandomIntInclusive(10,11)
    };
    decoratedClassList.push(studentObj);
  }
  return decoratedClassList;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertWithinRange(low, high, actual, testName) {
  var inRange = low <= actual && actual <= high;
  if (inRange) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high);
  }
}
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
  "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
  "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];
// TESTS FOR DECORATE STUDENT LIST
function testDecorateStudentList() {
  var decoratedList = decorateClassListWithAges(classList);

  for (var i = 0; i < decoratedList.length; i++) {
    assertWithinRange(10, 11, decoratedList[i].age, 'renders all ages either 10 or 11');
  }
}
//console.log(testDecorateStudentList(classList));

function sortAscending(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
};
let sortedClassList = classList.sort(sortAscending);
//console.log(sortedClassList)

function flipper (input){
  let flipped = '';
  for (let i = 0; i < input.length; i+=2){
    if (input[i+1] === undefined){
      flipped += input[i];
      continue;
    }
    flipped += input[i+1];
    flipped += input[i];
  }
  return flipped;
};
function assertEqual(actual,expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log(`FAILED [' + testName + '] Expected ${expected}, but got ${actual}`);
  }
};
let inputFlip = 'a1b2c3';
let actualFlip = flipper(inputFlip);
let expectedFlip = '1a2b3c';
//assertEqual(actualFlip, expectedFlip, 'it flip every pair elements')

/*Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'*/

function flipEveryNChars (input, n){
  let flipped = '';
  let charactors = input.split('');
  for (let i = 0; i < charactors.length; i+=n){
    let currentSlice = charactors.slice(i, i+n);
    let reversed = currentSlice.reverse();
    let joined = reversed.join('');
    flipped+= joined;
  }
  return flipped;
}

function assertEqual(actual,expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log(`FAILED [' + testName + '] Expected ${expected}, but got ${actual}`);
  }
};
var input = 'a short example';
var output = flipEveryNChars(input, 5);
//assertEqual(output, 'ohs axe trelpma', 'it flip every n chunk');

/*Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.*/



function detectOutlierValue (strNum){
  // convert string number to array numbers
  // create odd and even numbers container
  let arrayNum = strNum.split(' ');
  let oddNum = [];
  let evenNum = [];
  // iterate strNum and push the result
  for (let i = 0; i < arrayNum.length; i++){
    // create a currentNum variable and convert the context to numbers
    let currentNumber = Number(arrayNum[i]);
    if (arrayNum[i]%2 === 1){
      // push and create an object for value and index
      oddNum.push({
        value: currentNumber,
        index: i+1
      })
    }
    else {
      evenNum.push({
        value: currentNumber,
        index: i+1
      })
    }
  }
  if (oddNum.length === 1){
    return oddNum[0]['index'];
  }
  else {
    return evenNum[0]['index'];
  }
};

function assertEqual(actual,expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log(`FAILED [' + testName + '] Expected ${expected}, but got ${actual}`);
  }
};

let lierValue = ("1 4 6 8 10 10"); 
let actualFindSole = detectOutlierValue(lierValue);
//assertEqual(actualFindSole, 1, 'find solo odd or even number in a string and return it element number' )

/*You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d*/

function transposeTwoStrings (arrayInput){
  let firstString = arrayInput[0];
  let secondString = arrayInput[1];
  // determine which string is longer and use that string for loop
  let longerString;
  if (firstString.length >= secondString.length){
    longerString = firstString; 
  } else {
    longerString = secondString;
  }
  //create an empty string for result
  let transposedString = '';
  for (let i = 0; i < longerString.length; i++){
  // create a variable for firstColumnCha & 2nd, and assign them to each string[i];
  // add to the result string
  let firstColumnCha = firstString[i] || ' ';
  let secondColumnCha = secondString[i] || ' ';
  transposedString += firstColumnCha + ' '+secondColumnCha + '\n';
  }
  return transposedString;
}
let string1Test = transposeTwoStrings(['Hey','World']);

function findPairForSum (arrayOfIntegers, targetSum){
  let pair =[];
  for(let i = 0; i < arrayOfIntegers.length; i++){
    for (let j = i+1; j < arrayOfIntegers.length; j++){
      if (arrayOfIntegers[i] + arrayOfIntegers[j] === targetSum){
        pair.push(arrayOfIntegers[i],arrayOfIntegers[j]);
      }
      //console.log(arrayOfIntegers[i], arrayOfIntegers[j])
    }
  }
  return pair;
}
var actualPair = findPairForSum([3, 34, 2, 12, 5, 7], 9);
//console.log(actualPair)Doubled string: 'hello worldhello world'

/*Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)
Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '*/

function isRotated (string1, string2){
  let doubled = string1 + string1;
  let findIndex = doubled.indexOf(string2);
  if (findIndex !== -1){
    return true;
  } else {
    return false;
  }
};
function assertEqual(actual,expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log(`FAILED [' + testName + '] Expected ${expected}, but got ${actual}`);
  }
};
let actualRotated = isRotated('hello worldhello world', 'orldhello w');
//assertEqual (actualRotated, true, 'it checks if string2 is within string1')

function binarySearch (array, targetNum){
  let min = array[0];
  let max = array.length -1;
  let midpoint = Math.floor((min + max)/2);

  while (min <= max){
    // if minpoint value is equal to target value
    if (array[midpoint] === targetNum){
      return midpoint;
    }
    if (array[midpoint] < targetNum){
      min = midpoint+1;
    }
    if (array[midpoint] > targetNum){
      max = midpoint -1;
    }
    midpoint = Math.floor((min + max)/2);
  }
  return null;
};
function assertEqual(actual,expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log(`FAILED [' + testName + '] Expected ${expected}, but got ${actual}`);
  }
};
let binaryInput1 = [2,4,6,8,10,12,14,16,18,20];
let actualBinary1 = binarySearch(binaryInput1, 18);
//assertEqual(actualBinary1, 8, 'it use binary technique find the number, shold return 8');

let binaryInput2 = [2,4,6,8,10,12,14,16,18,20];
let actualBinary2 = binarySearch(binaryInput2, 22);
//assertEqual(actualBinary2, null, 'it use binary technique find the number that it not on the list, shold return null');

function transformFirstAndLast (array){
  // create an empty objest
  // iterate array
  // assign first ele as key of obj
  // assign last ele as obj
  // return obj
  let result = {};
  let lastIndex = array.length-1;
  for (let i = 0; i < array.length; i++){
    key = array[0];
    result[key] = array[lastIndex];
  }
  return result;
}
function assertEqual(actual,expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log(`FAILED [' + testName + '] Expected ${expected}, but got ${actual}`);
  }
};

let transformInput = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman'];
let actaulTransform = transformFirstAndLast(transformInput);
//assertEqual (actaulTransform, {'Kevin':'Coleman'}, 'it takes first ele as a key and the last ele as value');

let alternativeInput = {
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
};
let actualGetKey = getAllKeys(alternativeInput);
let expectedGetKey = ['a', 'number', 'hungry', 'grammyWins'];
//assertEqual(actualGetKey, expectedGetKey, 'it gets all the key of the object')
function getAllKeys (obj){
  // create an empty array 
  // iterate obj
  // push key
  // return result
  let result = [];
  for (let key in obj){
    result.push(key);
  }
  return result;
};

function transformArrayToObject(array) {
  // create an empty obj
  // iterate array
  // assign property to the obj
  // return obj
  let resultObj = {};
  for (let i = 0; i < array.length; i++){
    key = array[i][0];
    resultObj[key] = array[i][1];
  }
  return resultObj;
}
var inputTransformArrayToObject = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
let actualTransformArrayToObject = transformArrayToObject(inputTransformArrayToObject);
let expectedTransformArrayToObject = {
  make : 'Ford',
  model : 'Mustang',
  year : 1964
};
//assertEqual(actualTransformArrayToObject, expectedTransformArrayToObject, 'it transform pair array to an obj');
function listAllValues(obj) {
  let resultArr = [];
  for (let key in obj){
  // create an empty array
  // iterate obj
  // push values
  resultArr.push(obj[key]);
  }
  return resultArr;
}
var InputListAllValues = {
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
};
let expectedListAllValues = ['a', 11, true, 1];
let actualListAllValues = (listAllValues(InputListAllValues));
//assertEqual(actualListAllValues, expectedListAllValues, 'it takes all value of an obj to an array');  

function transformEmployeeData(employeeData) {
  // create an empty array
  let employeeArray = [];
  // iterate employeeData anf loop the inner array
  for (let i = 0; i  < employeeData.length; i++){
    let employeeObj = {};
    let personalData = employeeData[i];
    for (let j = 0; j  < personalData.length; j++){
      let key = personalData[j][0];
      let value = personalData[j][1];
      employeeObj[key]=value;
    }
    employeeArray.push(employeeObj);
  }
  return employeeArray;
};
var inputTransformEmployeeData = [
  [
      ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
      ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
];
let expectedTransformEmployeeData = [
  {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
  {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
];
let actualTransformEmployeeData  = transformEmployeeData(inputTransformEmployeeData);

function assertEqual(actual,expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed ');
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }
};

//assertEqual(actualTransformEmployeeData, expectedTransformEmployeeData, 'it transform array to an array obj')

function convertObjectToArray(obj) {
  let resultArray = [];
  for (let key in obj){
  let personalInfo = [];
  personalInfo.push(key, obj[key]);
  resultArray.push(personalInfo);
  }
  return resultArray;
}
var convertObjectToArrayInput = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};
let convertObjectToArrayExpected = [['name', 'Holly'], ['age', 35], ['role', 'producer']];
//assertEqual(convertObjectToArray(convertObjectToArrayInput), convertObjectToArrayExpected, 'it converts obj to a nested array');

function joinArrayOfArrays(arr) {
  // your code here
  let combined = [];
  for (let i = 0; i < arr.length; i++){
      combined = combined.concat(arr[i]);
  }
  return combined;
};
//console.log(joinArrayOfArrays([[1], [2], [3]]))
function getProductOfAllElementsAtProperty(obj, key) {
  let producted = 1;
  for (let key in obj){
      let value = obj[key];
      producted = producted * value;
  }
  return producted;
}
var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
//console.log(output); // --> 24

function sumDigits(num) {
  // split string to array
  let numString = num.toString()
  let numbers = numString.split('');
  let isPositive = true;
  if (numbers[0] < 0){
      isPositive = false;
  }
  numbers = Math.abs(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
      sum += Number(numbers[i]);
      //console.log(sum)
  }
  return sum;
  // create a logical variable for nagative input
  // iterate aaray
  // sum
}
var output = sumDigits(1148);
//console.log(output); // --> 14

function computeSummationToN(n) {
  // create a sum variable
  // iterate n.lenght
  // sum up and return it
  let numbers =[];
  for (let i = 0; i < n.length; i++){
    numbers.push(n[i])
    //console.log(numbers)
  }
  //return sum;
};
var output = computeSummationToN(6);
//console.log(output); // --> 21

function computeFactorialOfN(n) {
  // factorial compute is multiply the whole number from choesn one down to 1
  // iterate reversely, iteration stop at i greater 0, so it doesnt include 0
  let factorial = 1;
  for (let i = n; i > 0; i--){
      factorial = factorial*i;
  }
  return factorial;
}

// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  let words = sentence.split(' ');
  let palindrome = [];
  for (let i = 0; i < words.length; i++){
      if (isPalindrome(words[i])){
          palindrome.push(words[i]);
      }
      console.log(palindrome)
  };
  palindrome.sort(sortAscendingByLength);
  return palindrome.pop();
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
}


function reverseString(sentence) {
  let splited = sentence.split(' ');
  let reversed = [];
  let joined = '';
  for (let i = splited.length; i <= 0; i--){
      reversed.push(splited[i]);
      //join = reversed.join('');
      //console.log(reversed.length)
  }
  return reversed;
}
let inputReversed = 'Do geese see God';
reverseString(inputReversed)


function isPalindrome(word) {
    word = word.toLowerCase();
    
    return word === reverseString(word);
  // hint: you can detect palindromes by comparing a string to its reverse
  
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

input = 'abcdefghij12345'
output = 'edcba jihgf 54321'
function flipEveryNChars (input, n){
  let flipped = '';
  let charactors = input.split('');
  for (let i = 0; i < charactors.length; i+=n){
    let currentSlice = charactors.slice(i, i+n);
    let reversed = currentSlice.reverse();
    let joined = reversed.join('');
    flipped+= joined;
  }
  return flipped;
}
let flipresult = flipEveryNChars(input)
//console.log(flipresult)

function addToBack(arr, ele) {
  arr.push(ele);
  return arr;
};

var pushed = addToBack([1, 2], 3);
//console.log(pushed); // -> [1, 2, 3]

var myStrings = ['hello', 'my', 'cat', 'last', 'coffee'];

function popFromArray() {
let n = myStrings.slice();
n.sort();
return n;
};

//console.log(popFromArray()); //
//console.log(myStrings);

let m = {
name: 'vicky'
};

function addKey(obj, key, value) {
obj[key] = value;
return obj;
}

//console.log(m);

addKey(m, 'age', 35);
addKey(m, 'eyes', 'black');

//console.log(m);

function iterateOverObject(obj) {
for( let key in obj){
  console.log(` obj.${key} = ${obj[key]}`);
}
};

//iterateOverObject(m);

function returnArray(array) {
return array;
}

var fruits = ['oranges', 'bananas', 'apples']; // we are defining a variable that we will pass to our function as an argument

//console.log('resultArray:', returnArray(fruits));

var stringsObj = {
name: 'Daisy',
currentTitle: 'pupper',
futurePosition: 'doggo'
};

// to access a value within an object
var valueOfName = stringsObj.name;
//console.log('accessed using dot notation: ' + valueOfName)

function loopInReverse(array) {
for (let i = array.length; i >-1 ; i--){
  console.log(array[i]);
}
};
//loopInReverse([1, 2, 3, 4]);

////////////////////////
function useBreak(array, index) {
for (let i = 0 ;  i < array.length; i++){
  if (i > index){
    break;
  };
} console.log(array[i]);

function generateRandomNumber(min, max) {
  let result = Math.random()*(max - min-1)+min;
  return result;
// create a result variable
// assign it to formula for random number between min and max
// return result
};
function getLastCharacter(string) {
let lastIndex = string.length-1;
let lastCharacter = string[lastIndex];
return lastCharacter;
// create a lastIndex variable
// assign it to the last index in the string
// create a lastCharacter variable
// assign it to the last character in the string (make use of lastIndex)
// return the lastCharacter variable
}

var resultLastCharacter1 = getLastCharacter('Banana');
console.log('should log "a":', resultLastCharacter1);

function applySubString(string, start, end) {
// create a subString variable
let substring = string.substring(start, end);
return substring;
// assign it to a portion of the string from before start, up to, but not including end
// return the subString variable
};
function applyToString(param) {
// create a stringVersion variable
let result = param.toString();
return result;
// assign it to the string version of the input param
// return the stringVersion variable
}

var input1 = 9374;
var resultString1 = applyToString(input1);
console.log('should log "9374":', resultString1);
console.log('type should be "string":', typeof resultString1);

var input2 = false;
var resultString2 = applyToString(input2);
console.log('should log "false":', resultString2);
console.log('type should be "string":', typeof resultString2);
console.log(applyToString(123));

function generateHaiku(firstLine, secondLine, thirdLine) {
// create a haiku variable
let haiku = firstLine + '\n' + secondLine + '\n'+ thirdLine;
return haiku;
// assign it to an expression involving the input lines, such that they format correct when the return value is logged to the console
// return the haiku variable
}

var resultHaiku2 = generateHaiku('The lamp once out', 'Moves west, flowers\' shadows', 'Creep eastward.');
console.log('should also log formatted haiku:\n', resultHaiku2);

function reassignAnElement(array, index, newValue) {
array[index]= newValue;
return array;
// reassign the value in the array, located at the index, to the newValue parameter
// return the input array
}
var resultArray = reassignAnElement(['desk', 'lamp', 'chewtoy'], 2, 'textbook');
console.log('should replace "chewtoy" with "textbook":', resultArray);

let foo = [0123];
let change0 = reassignAnElement(foo, 0, 1);
console.log(change0);
console.log(foo);

function applyPush(arr, ele){
let result = arr.push(ele);
return arr;
}
var resultArray1 = applyPush([1, 17, 29], 34);
console.log('should log [1, 17, 29, 34]:', resultArray1);

var resultArray2 = applyPush(['abc', 'def'], 'ghi');
console.log('should log ["abc", "def", "ghi"]:', resultArray2);

function addAnElementInGeneral(array, index, element) {
// add the element to the array at the index given
array.splice(index,0,element);
return array;
// (be sure not to replace any existing elements)
// return the array
}

var resultArray1 = addAnElementInGeneral([7, 9, 10], 1, 8);
console.log('should log [7, 8 , 9, 10]:', resultArray1);

var resultArray2 = addAnElementInGeneral(['q', 'r', 't'], 2, 's');
console.log('should log ["q", "r", "s", "t"]:', resultArray2);

function removeAnElementInGeneral(array, index) {
// remove the element from the array at the index given
array.splice(index,1);
return array;
// return the array
}

var resultArray1 = removeAnElementInGeneral([8, 9, 10, 'bad entry', 11], 3);
console.log('should log [8, 9, 10, 11]:', resultArray1);

var resultArray2 = removeAnElementInGeneral(['one', 'two', 452, 'three'], 2);
console.log('should log ["one", "two", "three"]:', resultArray2);

function applySplice(array, index, item1, item2) {
// remove two elements from the array at the index given, and adds item1 and item2 in their place
array.splice(index,2,item1, item2);
return array;
// return the array
}

var resultArray1 = applySplice([8, 9, 10, 'bad entry1', 'bad entry2', 13], 3, 11, 12);
console.log('should log [8, 9, 10, 11, 12, 13]:', resultArray1);

var resultArray2 = applySplice(['one', 'two', 452, 672, 'five'], 2, 'three', 'four');
console.log('should log ["one", "two", "three", "four", "five"]:', resultArray2);

function applyConcat(array1, array2) {
// create a concattedArray variable
let concattedArray = array1.concat(array2);
return concattedArray;
// assign it to the contents of both array1 and array2
// return the concattedArray variable
}

var array3 = [1, 2, 3];
var array4 = [4, 5, 6];
var resultConcat2 = applyConcat(array3, array4);
console.log('should log [1, 2, 3, 4, 5, 6]:', resultConcat2);

function reassignAProperty(object, key, newValue) {
object[key]= newValue;
return object;
// reassign the property's value in the object, located at the key, to the newValue parameter
// return the input object
}
var resultObject = reassignAProperty({name: 'Ramses', favoriteFood: 'chicken', type: 'dog'}, 'favoriteFood', 'goose');
console.log('should replace "chicken" with "goose":', resultObject);

function isPropertyPresent(object, key) {
// create an isPresent variable
let result = object[key] !== undefined ;
return result;
// assign it to a comparison between object's value at key and undefined
// return the isPresent variable
}
var object1 = {
a: 1,
b: 2
}
var key1 = 'c';
var result1 = isPropertyPresent(object1, key1);
console.log('should log false:', result1);

var object2 = {
'size': 'M',
'color': 'green',
'cut': 'tapered',
'price': 30
};
var key2 = 'cut';
var result2 = isPropertyPresent(object2, key2);
console.log('should log true:', result2);

function isAnObject(input) {
// create an isObject variable
let isObject = typeof input;
// assign it to whether the input is an object type
// create an isNotAnArray variable
let isNotAnArray = !Array.isArray(input);
// assign it to whether the input is not an array
let isObjectAndNotAnArray = isObject && isNotAnArray;
// create an isObjectAndNotAnArray variable
return isObjectAndNotAnArray;
// assign it to a combination of isObject AND isNotAnArray
// return the isObjectAndNotAnArray variable
}



var resultBoolean1 = isAnObject([1, 2, 3]);
console.log('should log false:', resultBoolean1);

var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
console.log('should log true:', resultBoolean2);
/* We are going to complete a function that takes in one parameter, possibly an object, and returns whether the input in an object or not. Your function should create several variables (isObject, isNotAnArray, and isObjectAndNotAnArray). Assign isObject to an application of the typeof operator to the input. Assign isNotAnArray to a call to the Array.isArray() method with the ! operator applied as well. Assign isObjectAndNotAnArray to the two previous variabes combined with the && operator, and return the isObjectAndNotAnArray variable. Below are examples of the code running, assuming that you will have completed the described function: isAnObject.*/

function getAllValues(obj) {
// create a values variable
let result = Object.values(obj);
return result;
// assign it to an expression which will generate an array of all of the values in obj
// return to the values variable
}

function getAllKeysAgain(obj, key) {
// create a keys variable
let result = Object.keys(obj[key]);
return result;
// assign it to an expression which will generate an array of all of the keys located within obj at key
// return to the keys variable
}

var resultKeys = getAllKeysAgain({firstScore: {part1: 12, part2: 14, part3: 10}, secondScore: 34, thirdScore: 28}, 'firstScore');
console.log('should log ["par1", "part2", "part3"]:', resultKeys);

function findAgent(agentList, agentToSearchFor) {
// if agentToSearchFor is present within agentList
if (agentList.indexOf(agentToSearchFor) > -1){
  return `${agentToSearchFor} is present within Agent list`;
}
  // return '${agentToSearchFor} is present with Agent list'
}
var result1 = findAgent(['001', '005', '007', '009'], '007');
console.log('should log "007 is present within Agent list":', result1);

var result2 = findAgent(['tiny', 'teeny', 'eeny', 'meany'], 'teeny');
console.log('should log "teeny is present within Agent list":', result2);

var result3 = findAgent(['red', 'blue', 'green'], 'orange');
console.log('Should log undefined, because function returned nothing:', result3);

function generateReportSummary(reportTotals, teamName) {
// if teamName's report total is greater than 5
if (reportTotals[teamName]>5){
  return `${teamName} has surpassed goal with ${reportTotals[teamName]} reports`;
}
  // return '{teamName} surpassed goal with {number_of_reports_for_team} reports'
}
var result1 = generateReportSummary({a_team: 12, b_team: 7, c_team: 0}, 'b_team');
console.log('should log "b_team has surpassed goal with 7 reports":', result1);

var result2 = generateReportSummary({blue: 18, red: 8, green: 12}, 'blue');
console.log('should log "blue has surpassed goal with 18 reports":', result2);

var result3 = generateReportSummary({gamma: 1, epsilon: 3, alpha: 4, bravo: 17}, 'alpha');
console.log('Should log undefined, because function returned nothing:', result3);

function loopAnArray(array) {
// create an index variable
let i = 0;
while (i< array.lenght){
    console.log(array[i]);
    i++;
};
// create a loop which iterates over the input array
  // log current array element to the console
  // increment value of index variable
};

loopAnArray(['a', 'b', 'c', 'd']);
// console output:
// a
// b
// c
// d
a
loopAnArray([1, 2, 3, 4, 5]);
// console output:
// 1
// 2
// 3
// 4
// 5

function loopStartingAtIndex(array, index) {
  // create a loop which iterates from index to the end of the input array
  for (let i = index; index <array.length; index ++){
    console.log(array[index]);
  }
    // log current array element to the console
};

loopStartingAtIndex(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // c
  // d
  // e

loopStartingAtIndex([1, 2, 3, 4, 5], 3);
// console output:
  // 4
  // 5
  function loopStartingAtIndex(array, index) {
    // create a loop which iterates from index to the end of the input array
    for (let i = index; i <array.length; i++){
      console.log(array[i]);
    }
      // log current array element to the console
  }

  function generateCombinations(array1, array2) {
    for (let i = 0 ; i < array1.length; i++){
      for (let j = 0 ; j < array2.length; j++){
        console.log(array1[i]+ ' ' + array2[j]);
      }
    }
    // create a loop which iterates over the first array
      // create an inner loop which iterates over the second array
        // log current element of first array and current element of second array to the console with space in between
  };
  
  generateCombinations(['a', 'b', 'c'], ['d', 'e', 'f']);
  // console output:
    // a d
    // a e
    // a f
    // b d
    // b e
    // b f
    // c d
    // c e
    // c f
  
  generateCombinations([1, 2], ['buckle', 'my', 'shoe']);
  // console output:
    // 1 buckle
    // 1 my
    // 1 shoe
    // 2 buckle
    // 2 my
    // 2 shoe

    function filterOddElements (arr){
      if (arr.length === 0){
        return [];
        };
      let result = [];  
      for (let i = 0 ; i < arr.length ; i++){
        if (arr[i] % 2 === 1){
          result.push(arr[i]);
        }
      }
      return result;
    };
    
    var output = filterOddElements([1, 2, 3, 4, 5]);
    //console.log(output); // --> [1, 3, 5]

    function computeAverageOfNumbers (arr){
      let sum = 0;
      let ave = 0;
      for (let i = 0 ; i < arr.length ; i++){
        ave = (sum += arr[i])/arr.length;
      }
      return ave;
    };
    
    var input1 = [1,2,3,4,5];
    var result1 = computeAverageOfNumbers(input1);
    //console.log('should log 3:', result1);
    
    var input2 = [];
    var result2 = computeAverageOfNumbers(input2);
    //console.log('should log 0:', result2);

    function keyOfObjectValue(object, target) {
      for (var key in object) {
        if (object[key] === target) {
          return key;
        } 
      }
      return -1;
    };

    function getElementsAbove40(numbers) {
      if (numbers.length === 0){
          return 0;
      }
    
      var count = 0;
      for (var i = 0; i < numbers.length; i++) {
        
        if (numbers[i] > 40) {
          count++;
        }
      }
    
      return count;
    }

function createSentence(words) {
let sentence = [];
for (var i = 0; i < words.length; i++) {
    // hint: does this line need to happen every iteration?
    if (i!== words.length - 1) {
      sentence += words[i] + ' ';
    } 
    if (i === words.length - 1) {
      sentence += words[i] +  '.';
    }
  }
  return sentence;
};
var resultcreateSentence1 = createSentence(['I', 'am', 'worth', 'it']);
//console.log('should log "I am worth it.":', result1);

var resultcreateSentence2 = createSentence(['My', 'problems', 'matter']);
//console.log('should log "My problems matter.":', result2);

function countWords(stringOfWords) {
if (stringOfWords.length === 0){
  return {};
}

let words = stringOfWords.split(' ');
let countWords = {};

for(let i = 0 ; i <words.length ; i++){
    let currentChara = words[i];
    if (countWords[currentChara] === undefined){
        countWords[currentChara] =1;
    }
    else {
        countWords[currentChara]++ ; 
    }
}return countWords;
};

var resultcountWords = countWords('ask a bunch get a bunch');
//console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var resultcountWords2 = countWords('');
//console.log('should log "{}":', result2);

function countAllCharacters(string) {
if (string.length === 0){
    return {};
};
let words = string.split('');
let countWords = {};
for (let i = 0 ; i <words.length; i++){
    let currentWords = words[i];
    if (countWords[currentWords] === undefined){
       countWords[currentWords] = 1; 
    }
    else {
        countWords[currentWords] ++;
    }
} return countWords;
    
};
};
