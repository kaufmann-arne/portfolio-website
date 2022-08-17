const ACTIVECLASS = 'active2';
const IMAGES = document.querySelectorAll('.flex-card-container2');


IMAGES[0].classList.add(ACTIVECLASS);

function removeActiveClass() {
	const elm = document.querySelector(`.${ACTIVECLASS}`)
	if(elm) {
		elm.classList.remove(ACTIVECLASS);
	}
}

function addClass($event) {
	removeActiveClass();
	const target = $event.currentTarget;
	target.classList.add(ACTIVECLASS)
}

IMAGES.forEach(image => {
	image.addEventListener('click', addClass);
})

