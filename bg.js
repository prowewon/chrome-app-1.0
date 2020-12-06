const body = document.querySelector("body");

const IMG_NUMBER = 4,
      COLOR_NUMBER = 24;

const colors = ["#fdf4f4","#fcedee","#fae6e7","#f9dfe0","#f8d8da","#f7d1d3","#f6cacc","#f4c3c5","#f3bcbf","#f2b5b8",
                "#f1aeb1","#efa8ab","#eea1a4","#ed9a9d","#ec9396","#eb8c90","#e98589","#e87e82","#e7777b","#e67075",
                "#e5696e","#e46267","#e25b61","#e1545a","#e04d53","#df464c","#de3f46","#dc383f","#db3138","#da2a32",
                "#d7252c","#d0232b","#c92229","#c22128","#bb2026","#b41f25","#ae1d24","#a71c22","#a01b21","#991a1f"];

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
  return number;
}

function init() {
  const randomNumber = genRandom();
  //배경화면 색상으로 대체
  // paintImage(randomNumber);
  paintBgc(randomNumber);
}

init();
