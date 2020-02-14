function solution(number){
  // input : 1~9 arr
  // create output var
  let output = [];
  // iterate input 
  for (let i = 0; i < number.length; i++){
    // if [i]*3 or * 5 push to valid arr
    let currntIndex = number[i];
    if (resultLessThenTen(currntIndex)){
    output.push(currntIndex);
    }
  };
  let sum = 0;
  console.log(sum)
  for (let j = 0; j < output.length; j++){
    sum += output[j];
  }
  return sum;
}


function resultLessThenTen (num){
  return num %3 === 0 || num %5 === 0;
};
//console.log('%: ', resultLessThenTen(3))

let input = solution([1,2,3,4,5,6,7,8,9]);
//console.log('solution: ', test);

function test(n, expected) {
  let actual = solution(n)
  Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`)
}

Test.describe("basic tests", function(){
  test(10,23)
})