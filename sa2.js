function titleCase(str) {
  let lowerCase = str.toLowerCase(); //"text message"
  let arr = lowerCase.split(' '); //[text, message]
  let word, output = [];
  for (let i = 0; i < arr.length; i++){
      word = arr[i][0].toUpperCase() + arr[i].slice(1);
      // word = [T + ext]
      output.push(word);
  }
    let joined = output.join(' ');
    return joined;
}

//console.log(titleCase('teXt mEssAge'))//"Text Message"

function titleCase(str) {
  let lowerCase = str.toLowerCase(); //"text message"
  let arr = lowerCase.split(' '); //[text, message]
  let word, output = [];
  for (let i = 0; i < arr.length; i++){
      word = arr[i][0].toUpperCase() + arr[i].slice(1);
      // word = [T + ext]
      output.push(word);
  }
    let joined = output.join(' ');
    return joined;
}

//console.log(titleCase('teXt mEssAge'))//"Text Message"

var person = {
  name: {
    first: "richard",
    last: "loeb"
  },
  birthDay: {
    month: "juLy",
    day: 12,
    year: 1957
  }
}
function renderInfoNeatly(person) {
  return caseChange(person.name.first) + ' ' + caseChange(person.name.last) + ': ' + caseChange(person.birthDay.month) +' ' + person.birthDay.day + ', ' + person.birthDay.year;
};

function caseChange (str){
    str = str.toLowerCase();
    let meticulousInput = str[0].toUpperCase()+str.slice(1);
    return meticulousInput;
}

//console.log(renderInfoNeatly(person));"Richard Loeb: July 12, 1957"

function budgetStatus(cost) {
  //over budget 250
  //less than or equal to 250, the output should be an "Under budget
  
  // if cost is greter then 250 return the difference
  let difference = 250 - cost;
  if (cost > 250){
      return `Over budget by ${difference} dollar(s)`;
  }
  // if cost is less or = then ...
   if (cost <= 250){
      return `Under budget by ${difference} dollar(s)`;
  }
 }
 // coach's solution
 function budgetStatus(cost) {
   // use abs() create a different for both over or under budget
   let diff = Math.abs(250 -cost);
   // create a logocal flag for both over or under 
   let messege = 'over';
   if (cost <= 250){
    messege = 'under';
   }
   // return output with proper variable
   return messege + 'budget by' + diff + 'dollars';
 };

 function assertEqual (actual, expected, testName){
  let hasSameLength = true;
  if (actual.length !== expected.length){
      hasSameLength = false;
  }
  let hasSameEle = true;
  for (let i = 0; i < actual.length; i++){
      if (actual[i] !== expected[i]){
          hasSameEle = false; 
      }
}
  if (hasSameLength && hasSameEle){
      console.log('passed');
      } else {
          console.log('failed')
      }
};

var staff = [
  {name: {first: "Alyssa", last: "Hacker"}, birthDay: {month: "June", day: 5, year: 1987}},
  {name: {first: "Ben", last: "Bitdiddle"}, birthDay: {month: "August", day: 19, year: 1984}},
  {name: {first: "Eva", last: "Ator"}, birthDay: {month: "March", day: 29, year: 1980}},
  {name: {first: "Lem", last: "Tweakit"}, birthDay: {month: "August", day: 11, year: 1989}},
  {name: {first: "Louis", last: "Reasoner"}, birthDay: {month: "November", day: 17, year: 1992}}
];

let expected = ["Ben Bitdiddle: August 19, 1984", "Lem Tweakit: August 11, 1989"]
let actual = getPeopleBornIn(staff, 'August');
assertEqual(getPeopleBornIn, expected, 'it return people born in target month')
// console.log(actual)
// console.log(expected)


function getPeopleBornIn(staff, month) {
  // create a outputArr
  let outputArr = [];
  // iterate
  for (let i = 0; i < staff.length; i++){
      // create var for searching target
      let personObj = staff[i];
      let personBDay = staff[i].birthDay.month;
      // loop array and declare the nested obj. dont need to for-in loop the obj since you already have the path
      // NO iterate obj
      // for (let key in personObj){
          if (personBDay === month){
              let targetStaff = `${personObj.name.first} ${personObj.name.last} : ${personObj.birthDay.month} ${personObj.birthDay.day}, ${personObj.birthDay.year}`;
              outputArr.push(targetStaff);
              console.log(targetStaff)
          }
      }
    return outputArr;  
  };

//   //sa2 addtional 5 solution from coach
//   function getPeopleBornIn (staff, month){
//     let outputArr = [];
//     for (let i = 0; i < staff.length; i++){
//         let personObj = staff[i];
//         let personBDay = staff[i].birthDay.month;
//         if (personBDay === month){
//             outputArr.push(getNameAndBirthday(personObj));
//         }
//     }
//     return outputArr;
// };
//   // use helper function
//   function getNameAndBirthday(person) {
//     return person.name.first + ' ' + person.name.last + ': ' + person.birthDay.month +' ' + person.birthDay.day + ', ' + person.birthDay.year;
// };

