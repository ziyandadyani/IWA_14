const firstName = 'John';
const age = 35;
const hobby = 'Coding';

function logTwice (){
  fnHobby()
  fnHobby()
}


function fnHobby () {
  console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

logTwice()