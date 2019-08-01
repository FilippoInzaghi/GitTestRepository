const a = 10;
console.log(a*3);
const frame = window.document.querySelector('.Test');
frame.addEventListener('click', function(){
    frame.classList.toggle('active')
});