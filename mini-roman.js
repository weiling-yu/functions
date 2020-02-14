let romanChars = {
    'I':  1,
    'V':  5,
    'X':  10,
    'L':  50,
    'C':  100,
    'D':  500,
    'M':  1000
};
function convertRoman (roman, obj){
    // edge case if no value 
    if (roman === null){
        return null;
    }
    let sum = obj[roman[0]];  
    // first char value can't be motated
    for (let i = 1; i < roman.length; i++){
        let currentChar = roman[i]; 
        let preChar = roman[i-1];  
        // current value is smaller then pre value so just sum up
        if (obj[preChar] >= obj[currentChar]){
            sum = sum + obj[currentChar];
        }  // if current value is not smaller then pre substract pre twice and add current
        else {
            sum = sum -(obj[preChar] *2) + obj[currentChar];
        }
    }
    return sum;
}
let actualConvertRoman = convertRoman('MCMXCIX', romanChars);// 1000-(100*2) + 1000...
console.log('numbers to roman: ', actualConvertRoman)
/////////////////////////////////////////////////////////////
let romanNumObj = {
    2000 : 'MM',
    1000 : 'M',
    900 : 'CM',
    500 : 'D',
    400 : 'CD',
    100 : 'C',
    90 :'XC',
    50 : 'L',
    40 : 'XL',
    10 : 'X',
    9 : 'IX',
    5 : 'V',
    4 : 'IV',
    1 : 'I'
};
// let romanNumObj2 = {
//     'MM': 2000,
//     'M' : 1000, 
//     'CM': 900,
//     'D': 500,
//     'CD': 400, 
//     'C': 100, 
//     'XC': 90, 
//     'L': 50,
//     'XL': 40,
//     'X': 10,
//     'IX': 9,
//     'V' : 5,
//     'IV': 4,
//     'I' : 1,
// };
function convertNumtoRoman (num){
    if (Number.isNaN(num)){  // edge case : if input is not num
        return NaN;
    }
    // create var for store zero and pre-convert value
    var zeros, convertedRoman;
    // convert number to array
    var arr = num.toString().split('');
    var newValue = [];
    for(var i=0; i < arr.length; i++){
      // add zero to each element based on its position relative to the length of the array
      zeros = "0".repeat((arr.length - i - 1));
      // new current index is equal to it value concat with zeros
      arr[i] = arr[i].concat(zeros);
      newValue.push(romanNumObj[arr[i]]);
    }
    convertedRoman = newValue.join('');
    return convertedRoman;
  }
let input = 1999 //  1+000,9+00,9+0, 9  M CM XC IX
let result = convertNumtoRoman(input)
console.log('roman to number: ', result)


