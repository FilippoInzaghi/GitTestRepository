const a = 10;
console.log(a*3);
const frame = window.document.querySelector('.Test');
function changeColor(){
    frame.classList.toggle('active')
}
//frame.addEventListener('click', changeColor);

setInterval(changeColor, 700)