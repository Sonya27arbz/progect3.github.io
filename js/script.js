
window.addEventListener("DOMContentLoaded", function () {
	//бургер меню
	const hamb = document.querySelector("#hamb");
	const popup = document.querySelector("#popup");
	const menu = document.querySelector("#menu__list").cloneNode(1);
	
	hamb.addEventListener("click", hambHandler);

	function hambHandler(e) {
		popup.classList.toggle('open');
		renderPopup();
	}
	function renderPopup() {
		popup.appendChild(menu);
	}

	//======================//
	//слайдер
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;



prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  	});
	}
	updateSlider();
	//======================//
	//фильтры
	const filterBox = document.querySelectorAll('.box');

	document.querySelector('nav').addEventListener('click', event => {
		if (event.target.tagName !== "LI") return false;

		let filterClass = event.target.dataset['f'];

		filterBox.forEach(elem => {
			elem.classList.remove('hide');
			if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
				elem.classList.add('hide');
			}

		});

	});

	//======================//
	//табы
	let tab = document.querySelectorAll(".info-header-tab"),
		info = document.querySelector(".info-header"),
		tabContect = document.querySelectorAll(".info-tabcontent");
	function hideTabContect(a) {
		for (let i = a; i < tabContect.length; i++) {
			tabContect[i].classList.remove("show");
			tabContect[i].classList.add("hide");
		}
	}
	hideTabContect(1);

	function ShowTabContect(b) {
		if (tabContect[b].classList.contains("hide")) {
			tabContect[b].classList.remove("hide");
			tabContect[b].classList.add("show");
		}
	}

	info.addEventListener("click", function (event) {
		let target = event.target;

		if (target && target.classList.contains("info-header-tab")) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContect(0);
					tab.forEach((item) => {
						item.classList.remove("active");
					});
					target.classList.add("active");
					ShowTabContect(i);
					break;
				}
			}
		}
	});

	//======================//
	//модальное окно
	const modal = document.getElementById("myModal");
	const btn = document.getElementById("open-modal__btn");
	const span = document.getElementsByClassName("modal__close");

	if (btn) {
		btn.addEventListener("click", function () {
		modal.style.display = "block";
	});
	}

	if (span) {
		span[0].addEventListener("click", function () {
		modal.style.display = "none";
	});
	}
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display == "none";
		}
	};

	//======================//
	//аккодрион
	class ItcAccordion {
		constructor(target, config) {
		  this._el = typeof target === 'string' ? document.querySelector(target) : target;
		  const defaultConfig = {
			alwaysOpen: true
		  };
		  this._config = Object.assign(defaultConfig, config);
		  this.addEventListener();
		}
		addEventListener() {
		  this._el.addEventListener('click', (e) => {
			const elHeader = e.target.closest('.accordion__header');
			if (!elHeader) {
			  return;
			}
			if (!this._config.alwaysOpen) {
			  const elOpenItem = this._el.querySelector('.accordion__item_show');
			  if (elOpenItem) {
				elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
			  }
			}
			elHeader.parentElement.classList.toggle('accordion__item_show');
		  });
		}
	  }
  
	  new ItcAccordion('#accordion-1');


});

