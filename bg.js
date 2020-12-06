const body = document.querySelector("body");

const colors = ["#f9dfe0","#f8d8da","#f7d1d3","#f6cacc","#f4c3c5","#f3bcbf","#f2b5b8","#f1aeb1","#efa8ab","#eea1a4",
                "#ed9a9d","#ec9396","#eb8c90","#e98589","#e87e82","#e7777b","#e67075","#e5696e","#e46267","#e25b61",
                "#e1545a","#e04d53","#df464c","#de3f46","#dc383f","#db3138","#da2a32","#313250","#2e2f4b","#2b2c46",
                "#d7252c","#d0232b","#c92229","#c22128","#bb2026","#b41f25","#ae1d24","#a71c22","#a01b21","#991a1f",
                "#eadad5","#e8d6d0","#e5d1ca","#e2ccc5","#e0c7bf","#ddc2ba","#dabdb5","#d8b9af","#d5b4aa","#d2afa4",
                "#d0aa9f","#cda599","#caa094","#c89c8e","#c59789","#c29283","#c08d7e","#bd8878","#ba8473","#b87f6d",
                "#b57a68","#b27562","#af705d","#ad6b57","#a96753","#a46450","#9e604d","#995d4b","#935a48","#8e5645",
                "#fbf9d5","#faf8ce","#f9f7c6","#f9f6bf","#f8f5b7","#f7f4b0","#f7f3a9","#f6f2a1","#f5f19a","#f5f092",
                "#f4ef8b","#f3ee83","#f3ed7c","#f2eb74","#f1ea6d","#f0e965","#f0e85e","#efe756","#eee64f","#eee547",
                "#ede440","#ece338","#ece231","#ebe129","#eae022","#eadf1b","#e7dd15","#e0d514","#d8ce13","#d1c713",
                "#c9c012","#c2b911","#bab211","#b3ab10","#aba40f","#a49c0f","#9c950e","#958e0d","#8e870d","#86800c",
                "#7f790b","#77720a","#706a0a","#686309","#615c08","#595508","#524e07","#4a4706","#434006","#3b3905",
                "#dedeea","#d9d9e7","#d4d4e4","#cecfe1","#c9cade","#c4c5db","#bfc0d8","#babbd5","#b5b6d1","#b0b1ce",
                "#abaccb","#a6a7c8","#a1a2c5","#9c9dc2","#9798bf","#9293bc","#8d8eb9","#8889b6","#8384b2","#7e7faf",
                "#797aac","#7375a9","#6e70a6","#696ba3","#6466a0","#60619c","#5d5e97","#5a5b92","#56588d","#535588",
                "#505283","#4d4e7e","#4a4b79","#474874","#44456f","#41426a","#3e3f65","#3a3b60","#37385b","#343555"];



const IMG_NUMBER = 4,
      COLOR_NUMBER = colors.length-1;

function paintBgc(bgcNumber) {
  body.style.backgroundColor = colors[bgcNumber];
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * COLOR_NUMBER);
  console.log(number);
  return number;
}

function init() {
  const randomNumber = genRandom();
  //배경화면 색상으로 대체
  // paintImage(randomNumber);
  paintBgc(randomNumber);
}

init();
