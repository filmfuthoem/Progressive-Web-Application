const images = ['p1','p2','p3','p4','p5'];
const imgEle = document.querySelector('img');

function randomValueFromArray(array) {
  let randomNo = Math.floor(Math.random() * array.length);
  return array[randomNo];
}

setInterval(function(){
  let randomChoice = randomValueFromArray(images);
  imgEle.src = 'images/' + randomChoice + '.jpg';
},2000)
