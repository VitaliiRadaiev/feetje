let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));


window.addEventListener('load', function () {
	
	document.body.classList.add('is-load');

	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('._padding-top');
		if (wrapper) {
			let header = document.querySelector('.header');
			if(header) {
				const setPedding = () => wrapper.style.paddingTop = header.clientHeight + 'px';
				setPedding();
				let id = setInterval(setPedding, 200);
				setTimeout(() => {
					clearInterval(id);
				},1000)
				window.addEventListener('resize', setPedding);
			}
			
		}
	}
	// ==== AND ADD PADDING-TOP ================================

	@@include('_function.js');
	@@include('forms.js');
	@@include('../common/header/header.js');
	@@include('../common/promo-header/promo-header.js');
	@@include('../common/our-history/our-history.js');
	@@include('../common/instagram/instagram.js');
	@@include('../common/products-card/products-card.js');
	@@include('../common/filter/filter.js');
	@@include('../common/products-slider/products-slider.js');
	@@include('../common/video/video.js');
	//@@includ e('../common/popup/popup.js');


	let col12 = document.querySelectorAll('.collection .col-12');
	if(col12.length) {
		col12.forEach(item => {
			let decor = item.querySelector('.decor');
			if(decor) {
				if(document.documentElement.clientWidth < 576) {
					item.style.display = 'none';
				}
			}
		})
	}
	let gridItem = document.querySelectorAll('.grid-item');
	if(gridItem.length) {
		gridItem.forEach(item => {
			let decor = item.querySelector('.decor');
			if(decor) {
				if(document.documentElement.clientWidth < 576) {
					item.style.display = 'none';
				}
			}
		})
	}

	createTabs('.online-stores', '.online-stores__trigger', '.online-stores__tab');
	
});

window.addEventListener('DOMContentLoaded', function() {
	if(isMobile.any()) {
		document.body.classList.add('_is-mobile');
	}

	@@include('files/dynamic_adapt.js');

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
});

//@@include('plagins/lazy-load.js');


