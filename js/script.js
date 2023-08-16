console.log('Witam ciekawskich developerów i innych');
let button = document.querySelector('.button');
let image = document.querySelector('.img');
let initialImageSrc = image.getAttribute('src');
let newImageSrc =
	'https://www.dropbox.com/s/xurigvfbvp98u6j/Aplikacja-05.png?raw=1';
let isInitialImage = true;

button.addEventListener('click', () => {
	if (isInitialImage) {
		image.setAttribute('src', newImageSrc);
	} else {
		image.setAttribute('src', initialImageSrc);
	}
	isInitialImage = !isInitialImage;
});

console.log(button);
