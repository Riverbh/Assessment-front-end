console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function complimentAlert(e){
	e.preventDefault()

	alert('You are ripped')
}

let form = document.querySelector('#contact');
let catPic = document.querySelector('img')

form.addEventListener('submit', handleSubmit);
catPic.addEventListener('click', complimentAlert)