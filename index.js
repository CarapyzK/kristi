console.log(1);

const button = document.querySelector('button')
const output = document.querySelector('.output')

button.addEventListener('click',function(){
    output.innerHTML = 'Обжорка'
})
function myImg() {
	document.getElementById('img_1').style.display='block';
}