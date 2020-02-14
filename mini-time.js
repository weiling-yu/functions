// VS Code no need to GMT -8 = PST. it createas local time
function atTheTone (){
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  return `The current PST time is ${hour} : ${minute}`;
 };

function atTheTone() {
    let today = new Date();
    //console.log('Current GMT is : ', today)
    let hour = today.getHours();
    let minutes = today.getMinutes();
    // setHours() can set any hour from 0 to 24 ; set -2 or GMT -8 as hour
    today.setHours(today.getHours() -8);
    hours = today.getHours();
    return `Current PST is ${hours} : ${minutes}`;
  };
// console.log(atTheTone());
  
  function HRpreCourse (){
    let startDay = new Date(2020, 0, 21, 9, 30, 0)
    return startDay;
  }
//   HRpreCourse ()


// SA2 #7 my solition 
function secondsConverter1(seconds) {
    //If it is greater than 60 minutes, do not worry about converting it to hours.
    // if input is less then 60  return input sec
    // if input is greater then 60
    // substract input by 60 , min ++ numtil input is less then 59
    // return min + leftover input
    if (typeof seconds !== 'number'){
        return NaN;
    }
    if (seconds <= 60){
        return `0 minutes and ${seconds} seconds`
    };
    let min = 0;
     // 300, 240, 180, 120, 60, 60
    while (seconds >= 60){
            seconds = seconds - 60;
            min ++
      }
        return `${min} and ${seconds} seconds`;
  };
  // SA2 #7 coach's solition 
  // get minute by dividing input sec and get sec by modulo 60 and get remainder
  function secondsConverter2(seconds) {
    var min = Math.floor(seconds/60);
    var seconds = seconds % 60;
    return `${min} and ${seconds} seconds`;
  }
  
  secondsConverter2(300); //"5 minutes and 0 seconds"
  //secondsConverter(5225); //"87 minutes and 5 seconds"
  //secondsConverter(18); //"0 minutes and 18 seconds"