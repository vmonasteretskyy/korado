var Info = {
	vw: 0,
	vh: 0,
	mob: false,
	coef: 1,
	isMenu: false,
	eclipse: undefined,
	home: false,
}
document.addEventListener("DOMContentLoaded", function(e) {
	Info.vw = window.innerWidth;
	Info.vh = window.innerHeight;
	Info.coef = Math.min(Info.vw * 0.0104166667, Info.vh * 0.0213219616) / 20;
	Info.eclipse = document.getElementById("eclipse");
	// console.log(Info.vw * 0.0104166667, Info.vh * 0.0213219616)
	Info.vw < 1024 ? Info.mob = true : Info.mob = false;
	if (onDom.length != 0) {
		for (var i = 0; i < onDom.length; i++) {
			onDom[i]();
		}
	}
	Info.home = document.body.classList.contains("home");
	window.addEventListener("resize", function(e) {
		Info.vw = window.innerWidth;
		Info.vh = window.innerHeight;
		Info.coef = Math.min(Info.vw * 0.0104166667, Info.vh * 0.0213219616) / 20;
		Info.vw < 1024 ? Info.mob = true : Info.mob = false;
		if (onResize.length != 0) {
			for (var i = 0; i < onResize.length; i++) {
				onResize[i]();
			}
		}	
	});
});
window.addEventListener("load", function(e) {
	if (onLoad.length != 0) {
		for (var i = 0; i < onLoad.length; i++) {
			onLoad[i]();
		}
	}
});

var PS = undefined;
onDom.push(function() {
	if (document.body.classList.contains("home")) {	
		PS = new PageScroll({
			containertClass: "scroll-parent",
			elemsClass: "scroll-elem", 

			paginationId: "right-bar",
			paginationRectangleId: "right-bar-rectangle",
			paginationElemsClass: "right-bar-elem",
			amountClass: "rbe-nums-all",

			nextBtnClass: "rhomb-btn",
		});
		if (PS.allowResize) {
			onResize.push(function() {
				if (Info.vw > 767) {
					PS.resize();
				}
			});
		}
	}
})




// var nvsf2 = undefined;
// onDom.push(function() {
// 	nvsf2 = new NVSliderFader({
// 		parentClass: "nvsh2",
// 		transitionClass: "nvst2",
// 		elemsClass: "nvs2",
// 		elemsAClass: "nvsa2",

// 		prevArrId: "nvsf2-prev",
// 		nextArrId: "nvsf2-next",

// 		touchElemId: "nvsft2",

// 		faderParentClass: "nvsf2",
// 		faderElemsClass: "nvsfe2",

// 		btnLinkClass: "nvsf2-btnlnk",
// 		marginBottom: 49,

// 		nvsParentId: "nvs-bar2",
// 		nvsRectangleId: "nvs-bar-rectangle2",
// 		nvsElemsClass: "nvse2",
// 		nvsNumsAllClass: "nvs-nums-all",

// 		toShow: 5,
// 		centerMode: true,
// 	});
// 	if (nvsf2.allowResize) {
// 		onLoad.push(function(){
// 			nvsf2.resize();
// 		});
// 		onResize.push(function() {
// 			nvsf2.resize();
// 		});
// 	}
// })



// var nvsf3 = undefined;
// onDom.push(function() {
// 	nvsf3 = new NVSliderFader({
// 		parentClass: "nvsh3",
// 		transitionClass: "nvst3",
// 		elemsClass: "nvs3",
// 		elemsAClass: "nvsa3",

// 		prevArrId: "nvsf3-prev",
// 		nextArrId: "nvsf3-next",

// 		touchElemId: "nvsft3",

// 		faderParentClass: "nvsf3",
// 		faderElemsClass: "nvsfe3",

// 		btnLinkClass: "nvsf3-btnlnk",
// 		marginBottom: 49,

// 		nvsParentId: "nvs-bar3",
// 		nvsRectangleId: "nvs-bar-rectangle3",
// 		nvsElemsClass: "nvse3",
// 		nvsNumsAllClass: "nvs-nums-all",

// 		toShow: 3,
// 		centerMode: true,
// 	});
// 	if (nvsf3.allowResize) {
// 		onLoad.push(function(){
// 			nvsf3.resize();
// 		});
// 		onResize.push(function() {
// 			nvsf3.resize();
// 		});
// 	}
// })



// var nvsf4 = undefined;
// onDom.push(function() {
// 	nvsf4 = new NVSliderFader({
// 		parentClass: "nvsh4",
// 		transitionClass: "nvst4",
// 		elemsClass: "nvs4",
// 		elemsAClass: "nvsa4",

// 		prevArrId: "nvsf4-prev",
// 		nextArrId: "nvsf4-next",

// 		touchElemId: "nvsft4",

// 		faderParentClass: "nvsf4",
// 		faderElemsClass: "nvsfe4",

// 		btnLinkClass: "nvsf4-btnlnk",
// 		marginBottom: 49,

// 		nvsParentId: "nvs-bar4",
// 		nvsRectangleId: "nvs-bar-rectangle4",
// 		nvsElemsClass: "nvse4",
// 		nvsNumsAllClass: "nvs-nums-all",

// 		toShow: 4,
// 		centerMode: true,
// 	});
// 	if (nvsf4.allowResize) {
// 		onLoad.push(function(){
// 			nvsf4.resize();
// 		});
// 		onResize.push(function() {
// 			nvsf4.resize();
// 		});
// 	}
// })



// var nvsf5 = undefined;
// onDom.push(function() {
// 	nvsf5 = new NVSliderFader({
// 		parentClass: "nvsh5",
// 		transitionClass: "nvst5",
// 		elemsClass: "nvs5",
// 		elemsAClass: "nvsa5",

// 		prevArrId: "nvsf5-prev",
// 		nextArrId: "nvsf5-next",

// 		touchElemId: "nvsft5",

// 		faderParentClass: "nvsf5",
// 		faderElemsClass: "nvsfe5",

// 		btnLinkClass: "nvsf5-btnlnk",
// 		marginBottom: 49,

// 		nvsParentId: "nvs-bar5",
// 		nvsRectangleId: "nvs-bar-rectangle5",
// 		nvsElemsClass: "nvse5",
// 		nvsNumsAllClass: "nvs-nums-all",

// 		toShow: 4,
// 		centerMode: true,
// 	});
// 	if (nvsf5.allowResize) {
// 		onLoad.push(function(){
// 			nvsf5.resize();
// 		});
// 		onResize.push(function() {
// 			nvsf5.resize();
// 		});
// 	}
// })

var mainSliders = new Array(6);
onDom.push(function() {
	if (document.getElementsByClassName("mvs").length == 0) return;
	// var nums = document.getElementsByClassName("nvs-nums-all");
	for (var i = 2; i < 6; i++) {
		const ci = i;
		mainSliders[ci] = new Swiper ('#mvs'+ci, {
			// Optional parameters
			loop: true,
			speed: 500,
			autoplay: {
				delay: 5000,
			},
			// spaceBetween: 20,
			slidesPerView: "auto",
			direction: 'vertical',
			centeredSlides: true,
			slideToClickedSlide: true,
			// Navigation arrows
			navigation: {
				prevEl: '#nvsf'+ci+'-prev',
				nextEl: '#nvsf'+ci+'-next',
			},
			// breakpoints: {
			// 	767: {
			// 		slidesPerView: 5,
			// 		spaceBetween: 30
			// 	},
			// 	480: {
			// 		slidesPerView: 5,
			// 		spaceBetween: 20
			// 	},
			// }
		});
		// console.log(nums)
		// nums[ci].innerHTML = document.getElementsByClassName("nvsfe" + ci).length;
		if (ci == 2) {
			let ssdh = document.getElementsByClassName("ssdh");
			let btn = document.getElementById("nvsf2-btn");
			let nvsfe = document.getElementsByClassName("nvsfe2");
			let rhomb = document.getElementById("nvsft2").getElementsByClassName("rhomb-bg")[0];

			let bg = document.querySelectorAll(".mbg2 .bg1");
			// console.log()
			
			let melems = document.getElementsByClassName("nvse" + ci);
			let mrect = document.getElementById("nvs-bar-rectangle" + ci);
			let mwidth = 1 / melems.length * 100;
			mrect.style.width = mwidth + "%";
			
			for (var j = 0; j < melems.length; j++) {
				const cj = j;
				melems[cj].onclick = function() {
					mainSliders[ci].slideTo(cj, 500, false);
				}
			}
			mainSliders[ci].on('slideChange', function (data) {
				btn.href = ssdh[data.realIndex % nvsfe.length].getAttribute("data-href");
				for (var j = 0; j < nvsfe.length; j++) {
					const cj = j;
					nvsfe[cj].classList.remove("active");
					melems[cj].classList.remove("active");
					bg[cj].classList.remove("active");
				}
				
				mrect.style.left =  mwidth * (data.realIndex % nvsfe.length) + "%";
				nvsfe[data.realIndex % nvsfe.length].classList.add("active");
				melems[data.realIndex % nvsfe.length].classList.add("active");

				
				bg[data.realIndex % nvsfe.length].classList.add("active");
				// console.log(data.previousIndex, data.snapIndex, data.previousIndex % nvsfe.length, data.realIndex)
				if (data.previousIndex % nvsfe.length < data.realIndex % nvsfe.length) {
					rhomb.classList.add("anim");
					setTimeout(function() {
						rhomb.classList.remove("anim");
					}, 500);					
				} else {
					rhomb.classList.add("anim2");
					setTimeout(function() {
						rhomb.classList.remove("anim2");
					}, 500);					
				}
			});
		} else if (ci == 3) {
			let nvsfe = document.getElementsByClassName("nvsfe3");
			let melems = document.getElementsByClassName("nvse" + ci);
			let mrect = document.getElementById("nvs-bar-rectangle" + ci);
			let mwidth = 1 / melems.length * 100;
			mrect.style.width = mwidth + "%";
			
			for (var j = 0; j < melems.length; j++) {
				const cj = j;
				melems[cj].onclick = function() {
					mainSliders[ci].slideTo(cj, 500, false);
				}
			}

			mainSliders[ci].on('slideChange', function (data) {
				for (var j = 0; j < nvsfe.length; j++) {
					const cj = j;
					nvsfe[cj].classList.remove("active");
					melems[cj].classList.remove("active");
				}
				mrect.style.left = mwidth * (data.realIndex % nvsfe.length) + "%";
				nvsfe[data.realIndex % nvsfe.length].classList.add("active");
				melems[data.realIndex % nvsfe.length].classList.add("active");
			});
		} else if (ci == 4) {
			let nvsfe = document.getElementsByClassName("nvsfe4");
			let melems = document.getElementsByClassName("nvse" + ci);
			let mrect = document.getElementById("nvs-bar-rectangle" + ci);
			let mwidth = 1 / melems.length * 100;
			let bg = document.querySelectorAll(".mbg4 .bg1");
			mrect.style.width = mwidth + "%";
			
			for (var j = 0; j < melems.length; j++) {
				const cj = j;
				melems[cj].onclick = function() {
					mainSliders[ci].slideTo(cj, 500, false);
				}
			}
			mainSliders[ci].on('slideChange', function (data) {
				for (var j = 0; j < nvsfe.length; j++) {
					const cj = j;
					nvsfe[cj].classList.remove("active");
					melems[cj].classList.remove("active");
					bg[cj].classList.remove("active");
				}
				mrect.style.left = mwidth * (data.realIndex % nvsfe.length) + "%";
				nvsfe[data.realIndex % nvsfe.length].classList.add("active");
				melems[data.realIndex % nvsfe.length].classList.add("active");
				bg[data.realIndex % nvsfe.length].classList.add("active");
			});
		} else if (ci == 5) {
			let nvsfe = document.getElementsByClassName("nvsfe5");
			let melems = document.getElementsByClassName("nvse" + ci);
			let mrect = document.getElementById("nvs-bar-rectangle" + ci);
			let mwidth = 1 / melems.length * 100;
			let bg = document.querySelectorAll(".mbg5 .bg1");
			mrect.style.width = mwidth + "%";
			
			for (var j = 0; j < melems.length; j++) {
				const cj = j;
				melems[cj].onclick = function() {
					mainSliders[ci].slideTo(cj, 500, false);
				}
			}
			mainSliders[ci].on('slideChange', function (data) {
				for (var j = 0; j < nvsfe.length; j++) {
					const cj = j;
					nvsfe[cj].classList.remove("active");
					melems[cj].classList.remove("active");
					bg[cj].classList.remove("active");
				}
				mrect.style.left = mwidth * (data.realIndex % nvsfe.length) + "%";
				nvsfe[data.realIndex % nvsfe.length].classList.add("active");
				melems[data.realIndex % nvsfe.length].classList.add("active");
				bg[data.realIndex % nvsfe.length].classList.add("active");
			});
		}
	}
});

onDom.push(function() {
	var inputs = document.getElementsByClassName("input");
	if (!inputs || inputs.length == 0) return;
	for (var i = 0; i < inputs.length; i++) {
		const ci = i;
		const input = inputs[ci].getElementsByTagName("input")[0];
		if (input) {
			input.onblur = function() {
				if (input.value.length == 0) {
					inputs[ci].classList.remove("focus");
				} else {
					inputs[ci].classList.add("focus");
				}
			}
		} else {
			const textarea = inputs[ci].getElementsByTagName("textarea")[0];
			if (!textarea) continue;
			textarea.onblur = function() {
				if (textarea.value.length == 0) {
					inputs[ci].classList.remove("focus");
				} else {
					inputs[ci].classList.add("focus");
				}
			}
		}
		
	}
})

onDom.push(function() {
	//Menu
	var btn = document.getElementById("menu-btn");
	var menu = document.getElementById("menu");
	var close = document.getElementById("close-menu");
	btn.onclick = function() {
		if (!Info.isMenu) {
			menu.classList.add("active");
			this.classList.add("active");
			if (Info.home) {
				if (Info.vw < 768) {
					document.body.style.overflow = "hidden";
				}
			} else {
				document.body.style.overflow = "hidden";
			}
			Info.isMenu = true;
		} else {
			menu.classList.remove("active");
			this.classList.remove("active");
			if (Info.home) {
				if (Info.vw < 768) {
					document.body.style.overflow = "scroll";
				}
			} else {
				document.body.style.overflow = "scroll";
			}
			Info.isMenu = false;
		}
	}
	close.onclick = function() {
		if (Info.isMenu) {
			menu.classList.remove("active");
			btn.classList.remove("active");
			Info.isMenu = false;
			document.body.style.overflow = "scroll";
		}
	}
});


onDom.push(function() {
	var hiders = document.getElementsByClassName("menu-list-hider");
	var btns = document.getElementsByClassName("menu-list-btn");
	var lists = document.getElementsByClassName("menu-list");
	var amount = hiders.length;
	if (!hiders || hiders.length == 0) return;
	var cc = 20;
	if (Info.vw < 1024 && Info.vw > 767) cc = 14;
	if (Info.vw < 768) cc = 16;
	for (var i = 0; i < amount; i++) {
		const ci = i;
		hiders[ci].style.height = lists[ci].getBoundingClientRect().height / cc + 0.1 + "rem";
	}
	for (var i = 0; i < amount; i++) {
		const ci = i;
		btns[ci].onclick = function() {
			this.classList.toggle("opened");
			hiders[ci].classList.toggle("hidden");
		}
	}
});

var catalogSwiper = undefined;
onDom.push(function() {
	if (document.getElementsByClassName("ctlg-news").length == 0) return;
	catalogSwiper = new Swiper ('.ctlg-swiper-js', {
		// Optional parameters
		loop: true,
		speed: 500,
		spaceBetween: 20,
		slidesPerView: "auto",

		// Navigation arrows
		navigation: {
			prevEl: '.ctlg-news-prev',
			nextEl: '.ctlg-news-next',
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 30
			},
		}
	})
});

var calc1 = undefined;
onDom.push(function() {
	if (document.getElementsByClassName("calc-swiper-js").length == 0) return; 
	calc1 = new Swiper('.calc-swiper-js', {
		speed: 400,
		loop: false,
		spaceBetween: 100,
		slidesPerView: "1",
		autoHeight: true,
		navigation: {
			prevEl: '.calc-prev',
			nextEl: '.calc-next',
		},
		// pagination: {
		// 	el: ".calc-pagination-js",
		// 	type: "custom",
		// 	clickable: true,
		// 	currentClass: "active",
		// 	clickableClass: "lol",
		// 	slideChange	
		// },
	});
	var pag = document.getElementsByClassName("calc-pag-elem");
	pag[0].classList.add("active");
	calc1.on('slideChange', function (data) {
		// console.log(data);
		// console.log(data.previousIndex, data.realIndex)
		pag[data.previousIndex].classList.remove("active");
		pag[data.realIndex].classList.add("active");
	});
});

var accordions = undefined;
onDom.push(function() {
	var elems = document.getElementsByClassName("accordion") || [];
	var amount = elems.length;
	if (amount == 0) return;
	// accordions = new Array(amount);
	accordions = new Accordions({
		parentClass: "acc-cont",
		hiderClass: "accordion",
		btnClass: "acc-btn",
		contentClass: "f-row-inner",
		maxHeight: 171,
		measureType: "rem",
	});
	// }
})

var fslider = undefined;
var fsliderData = [0,0];
onDom.push(function() {
	fslider = document.getElementsByClassName("f-slider")[0];
	if (!fslider) return;
	fsliderData = [
		+fslider.getAttribute("data-min"),
		+fslider.getAttribute("data-max")
	];
	noUiSlider.create(fslider, {
		start: fsliderData,
		connect: true,
		step: 1,
		range: {
			'min': fsliderData[0],
			'max': fsliderData[1]
		}
	});
	var minmax = [
		document.getElementsByClassName("f-i-min")[0],
		document.getElementsByClassName("f-i-max")[0]
	]

	fslider.noUiSlider.on('update', function (values, handle) {
		// rangeSliderValueElement.innerHTML = values[handle];
		// min.value = 
		minmax[handle].value = Math.trunc(values[handle]);
		// console.log(values, handle)
	});
	minmax[0].onkeyup = function() {
		var val = +this.value.replace(/[^\d\.]/g, '');
		var valMax = +minmax[1].value;
		if (val > valMax) {
			val = valMax;
		}
		if (val < fsliderData[0]) {
			val = fsliderData[0];
		}
		this.value = val;
		fslider.noUiSlider.set([val, +minmax[1]]);
	}
	minmax[1].onkeyup = function() {
		var val = +this.value.replace(/[^\d\.]/g, '');
		var valMin = +minmax[0].value;
		console.log(val, valMin, fsliderData[1])
		if (val < valMin) {
			val = valMin;
		}
		if (val > fsliderData[1]) {
			val = fsliderData[1];
		}
		this.value = val;
		fslider.noUiSlider.set([+minmax[0], val]);
	}
});


var Filter = {
	elem: undefined,
	open: undefined,
	close: undefined,
	opened: false,
};
onDom.push(function() {
	Filter.elem = document.getElementsByClassName("filter-outer");
	if (Filter.elem.length == 0) return;
	Filter.elem = Filter.elem[0];
	Filter.open = document.getElementById("open-filter");
	Filter.close = document.getElementById("close-filter");
	Filter.open.onclick = () => {
		if (!Filter.opened) {
			Info.eclipse.classList.add("filter");
			Filter.elem.classList.add("active");
			Filter.opened = true;
		}
	}
	Filter.close.onclick = () => {
		if (Filter.opened) {
			Filter.elem.classList.remove("active");
			Info.eclipse.classList.remove("filter");
			Filter.opened = false;
		}
	}
});
onDom.push(function() {
	Filter.elem = document.getElementsByClassName("personal-left-wrap");
	if (Filter.elem.length == 0) return;
	Filter.elem = Filter.elem[0];
	Filter.open = document.getElementById("open-personal");
	Filter.close = document.getElementById("close-filter");
	Filter.open.onclick = () => {
		if (!Filter.opened) {
			Info.eclipse.classList.add("filter");
			Filter.elem.classList.add("active");
			Filter.opened = true;
		}
	}
	// Filter.close.onclick = () => {
	// 	if (Filter.opened) {
	// 		Filter.elem.classList.remove("active");
	// 		Info.eclipse.classList.remove("filter");
	// 		Filter.opened = false;
	// 	}
	// }
});




var SearchBar = {
	elem: undefined,
	open: undefined,
	openMob: undefined,
	close: undefined,
	opened: false,
	input: undefined,
};
onDom.push(function() {
	SearchBar.elem = document.getElementById("search-wrap");
	if (!SearchBar.elem) return;
	SearchBar.open = document.getElementById("top-search");
	SearchBar.openMob = document.getElementById("menu-search");
	SearchBar.close = document.getElementById("clear-search");
	SearchBar.input = document.getElementById("isearch");
	SearchBar.open.onclick = () => {
		if (!SearchBar.opened) {
			Info.eclipse.classList.add("search");
			SearchBar.elem.classList.add("active");
			SearchBar.opened = true;
		}
	}
	SearchBar.close.onclick = () => {
		if (SearchBar.opened) {
			SearchBar.input.value = "";
			SearchBar.elem.classList.remove("active");
			Info.eclipse.classList.remove("search");
			SearchBar.opened = false;
		}
	}
	SearchBar.openMob.onclick = () => {
		if (!SearchBar.opened) {
			Info.eclipse.classList.add("search");
			SearchBar.elem.classList.add("active");
			SearchBar.opened = true;
		}
	}
});



var PEnterType = {
	elem: undefined,
	open: undefined,
	openMob: undefined,
	opened: false,
	close: undefined,

	elemLog: undefined,
	openLog: undefined,
	openedLog: false,
	closeLog: undefined,

	elemReg: undefined,
	openReg: undefined,
	openReg2: undefined,
	openedReg: false,
	closeReg: undefined,
};
onDom.push(function() {
	PEnterType.elem = document.getElementById("pentertype");
	if (!PEnterType.elem) return;
	PEnterType.open = document.getElementById("top-login");
	PEnterType.openMob = document.getElementById("menu-login");
	PEnterType.close = document.getElementById("close-pentertype");

	PEnterType.elemLog = document.getElementById("plogin");
	PEnterType.openLog = document.getElementById("open-plog");
	PEnterType.closeLog = document.getElementById("close-plog");

	PEnterType.elemReg = document.getElementById("preg");
	PEnterType.openReg = document.getElementById("open-preg");
	PEnterType.openReg2 = document.getElementById("open-preg2");
	PEnterType.closeReg = document.getElementById("close-preg");

	PEnterType.open.onclick = () => {
		if (!PEnterType.opened) {
			Info.eclipse.classList.add("active");
			PEnterType.elem.classList.add("active");
			PEnterType.opened = true;
		}
	}
	PEnterType.close.onclick = () => {
		closePType();
	}
	function closePType(eclipse = false) {
		if (PEnterType.opened) {
			PEnterType.elem.classList.remove("active");
			if (!eclipse) {
				Info.eclipse.classList.remove("active");
			}
			PEnterType.opened = false;
		}
	}
	PEnterType.openMob.onclick = () => {
		if (!PEnterType.opened) {
			Info.eclipse.classList.add("active");
			PEnterType.elem.classList.add("active");
			PEnterType.opened = true;
		}
	}
	/**/
	PEnterType.openLog.onclick = () => {
		if (!PEnterType.openedLog) {
			closePType(true);
			PEnterType.elemLog.classList.add("active");
			PEnterType.openedLog = true;
		}
	}
	PEnterType.closeLog.onclick = () => {
		closeLog();
	}
	function closeLog(eclipse = false) {
		if (PEnterType.openedLog) {
			PEnterType.elemLog.classList.remove("active");
			PEnterType.openedLog = false;
			if (!eclipse) {
				Info.eclipse.classList.remove("active");
			}
		}
	}
	/**/
	PEnterType.openReg.onclick = () => {
		if (!PEnterType.openedReg) {
			closePType(true);
			PEnterType.elemReg.classList.add("active");
			PEnterType.openedReg = true;
		}
	}
	PEnterType.openReg2.onclick = () => {
		if (!PEnterType.openedReg) {
			closeLog(true);
			PEnterType.elemReg.classList.add("active");
			PEnterType.openedReg = true;
		}
	}
	PEnterType.closeReg.onclick = () => {
		if (PEnterType.openedReg) {
			PEnterType.elemReg.classList.remove("active");
			PEnterType.openedReg = false;
			Info.eclipse.classList.remove("active");
		}
	}
});




/*eclipse*/
onDom.push(function() {
	Info.eclipse.onclick = function() {
		if (this.classList.contains("filter")) {
			Filter.elem.classList.remove("active");
			this.classList.remove("filter");
			Filter.opened = false;
		}
		if (this.classList.contains("search")) {
			SearchBar.input.value = "";
			SearchBar.elem.classList.remove("active");
			this.classList.remove("search");
			SearchBar.opened = false;
		}
		if (this.classList.contains("active")) {
			PEnterType.elem.classList.remove("active");
			PEnterType.elemLog.classList.remove("active");
			PEnterType.elemReg.classList.remove("active");
			this.classList.remove("active");
			PEnterType.opened = false;
			PEnterType.openedLog = false;
			PEnterType.openedReg = false;
		}
	}
})

















var switcher = undefined;
onDom.push(function() {
	switcher = document.getElementsByClassName("sw-btn");
	if (switcher.length == 0) return;
	switcher = new Switcher({
		parent: document.getElementsByClassName("sw-elems")[0],
		buttons: switcher,
		containers: document.getElementsByClassName("sw-elem"),
	});
});
onResize.push(function() {
	if (switcher.length != 0) switcher.resize();
})

var itemHearts = undefined;
onDom.push(function() {
	itemHearts = document.getElementsByClassName("item-heart");
	if (itemHearts.length == 0) return;
	for (var i = 0; i < itemHearts.length; i++) {
		const ci = i;
		itemHearts[ci].onclick = function() {
			if (this.classList.contains("icon-heart")) {
				this.classList.remove("icon-heart");
				this.classList.add("icon-heart-empty");
			} else {
				this.classList.remove("icon-heart-empty");
				this.classList.add("icon-heart");
			}
		}
	}
});

var table = undefined;
onDom.push(function() {
	table = document.getElementsByTagName("table");
	if (table.length == 0) return;
	table = table[0];
	var td = table.querySelectorAll("tbody tr:nth-child(n+3) td:nth-child(n+2)");
	var amount = td.length;
	var rows = table.querySelectorAll("tbody tr:nth-child(3) td:nth-child(n+2)").length;
	var cols = amount / rows;

	var l = table.querySelectorAll("tbody tr:nth-child(n+3) td:first-child");
	var t = table.querySelectorAll("tbody tr:nth-child(2) td");

	var prevrow = 0;
	var prevcol = 0;

	for (var i = 0; i < amount; i++) {
		const ci = i;
		td[ci].onmouseover = function() {
			const nowrow = Math.trunc(ci / rows);
			const nowcol = ci % rows;
			// console.log(ci, nowrow, nowcol, ci / rows)
			l[nowrow].classList.add("active");
			t[nowcol].classList.add("active");
			prevrow = nowrow;
			prevcol = nowcol;
		}
		td[ci].onmouseout = function() {
			l[prevrow].classList.remove("active");
			t[prevcol].classList.remove("active");
		}
	}
});





var iColors = undefined;
var iColorsSRC = undefined;
var slidersImg = undefined;
var hidersImg = undefined;
var glbi = {
	which: 0,
}
onDom.push(function() {
	iColors = document.getElementsByClassName("g-color");
	if (iColors.length == 0) return;
	var prev = 0;
	slidersImg = document.getElementsByClassName("glbssi");
	// var is = false;
	// var c = 0;
	// while (!is) {
	slidersImg = document.querySelectorAll(".glbss:not(.swiper-slide-duplicate) .glbssi");
	// 	console.log(++c, slidersImg);
	// 	if (slidersImg.length != 0) is = true;
	// }
	// console.log(slidersImg)
	hidersImg = document.getElementsByClassName("glbi");
	// console.log(slidersImg, hidersImg)
	iColorsSRC = new Array(iColors.length);
	for (var i = 0; i < iColors.length; i++) {
		const ci = i;
		iColorsSRC[ci] = iColors[ci].getAttribute("data-src").split(",")
		var hider = iColors[ci].getElementsByClassName("g-text-hider")[0];
		var text = hider.getElementsByClassName("g-text")[0];
		if (Info.mob) {
			hider.style.width = (text.getBoundingClientRect().width + 2) + "px";
		} else {
			hider.style.width = (text.getBoundingClientRect().width + 2) / (20 * (Info.vw / 1920)) + "rem";
		}
	}
	for (var i = 0; i < iColors.length; i++) {
		const ci = i;
		iColors[ci].onclick = function() {
			iColors[prev].classList.remove("active");
			this.classList.add("active");
			changeImgs(ci);
			prev = ci;
		}
	}
	function changeImgs(data) {
		// console.log(slidersImg,hidersImg)
		for (var i = 0; i < hidersImg.length; i++) {
			const ci = i;
			slidersImg[ci].src = iColorsSRC[data][ci];
			hidersImg[ci].src = iColorsSRC[data][ci];
		}
		goodsSwiper.destroy()
		initGoodsSlider();
	}
	initGoodsSlider();
});

var goodsSwiper = undefined;
function initGoodsSlider() {
	if (document.getElementsByClassName("glbs").length == 0) return;
	var glbss = document.getElementsByClassName("glbss");
	var glbi = document.getElementsByClassName("glbi");
	for (var i = 0; i < glbss.length; i++) {
		const ci = i;
		glbss[ci].classList.remove("active");
	}
	for (var i = 0; i < glbi.length; i++) {
		const ci = i;
		glbi[ci].classList.remove("active");
	}
	glbss[0].classList.add("active");
	glbi[0].classList.add("active");
	
	goodsSwiper = new Swiper ('.glbs', {
		// Optional parameters
		loop: true,
		speed: 500,
		spaceBetween: 20,
		slidesPerView: "2",
		slideToClickedSlide: true,

		// Navigation arrows
		navigation: {
			prevEl: '.glbs-prev',
			nextEl: '.glbs-next',
		},
		breakpoints: {
			767: {
				slidesPerView: 3,
				direction: 'vertical',
			},
		}
	})

	var prev = 0;
	var elems = document.getElementsByClassName("glbi");
	// console.log(elems)
	goodsSwiper.on('slideChange', function (data) {
		// console.log(data.realIndex % data.loopedSlides);
		elems[prev].classList.remove("active");
		elems[data.realIndex % data.loopedSlides].classList.add("active");
		prev = data.realIndex % data.loopedSlides;
		zoom.changeImg(elems[data.realIndex % data.loopedSlides]);
	});
	initZoom();
};

// zoom
var zoom = undefined;
function initZoom() {
	zoom = new Zoom({
		firstImg: document.getElementsByClassName("glbi")[0],
		lens: document.getElementsByClassName("glbi-lens")[0],
		result: document.getElementsByClassName("glbi-zoom-result")[0],
	});
}
















var select = undefined;
onDom.push(function () {
	select = document.getElementsByTagName("select");
	if (select.length == 0) return;

	var x, i, j, l, ll, selElmnt, a, b, c;
	/* Look for any elements with the class "custom-select": */
	x = document.getElementsByClassName("fcat-sort");
	l = x.length;
	for (i = 0; i < l; i++) {
		selElmnt = x[i].getElementsByTagName("select")[0];
		ll = selElmnt.length;
		/* For each element, create a new DIV that will act as the selected item: */
		a = document.createElement("DIV");
		a.setAttribute("class", "select-selected");
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		x[i].appendChild(a);
		/* For each element, create a new DIV that will contain the option list: */
		b = document.createElement("DIV");
		b.setAttribute("class", "select-items select-hide");
		for (j = 1; j < ll; j++) {
			/* For each option in the original select element,
			create a new DIV that will act as an option item: */
			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener("click", function (e) {
				/* When an item is clicked, update the original select box,
				and the selected item: */
				var y, i, k, s, h, sl, yl;
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				sl = s.length;
				h = this.parentNode.previousSibling;
				for (i = 0; i < sl; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName("same-as-selected");
						yl = y.length;
						for (k = 0; k < yl; k++) {
							y[k].removeAttribute("class");
						}
						this.setAttribute("class", "same-as-selected");
						break;
					}
				}
				h.click();
			});
			b.appendChild(c);
		}
		x[i].appendChild(b);
		var opened = false;
		a.addEventListener("click", function (e) {
			/* When the select box is clicked, close any other select boxes,
			and open/close the current select box: */
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle("select-hide");
			this.classList.toggle("select-arrow-active");
			if (!opened) {
				this.parentNode.classList.add("active");
				opened = true;
			} else {
				this.parentNode.classList.remove("active");
				opened = false;
			}
		});
	}

	function closeAllSelect(elmnt) {
		/* A function that will close all select boxes in the document,
		except the current select box: */
		var x, y, i, xl, yl, arrNo = [];
		x = document.getElementsByClassName("select-items");
		y = document.getElementsByClassName("select-selected");
		xl = x.length;
		yl = y.length;
		for (i = 0; i < yl; i++) {
			if (elmnt == y[i]) {
				arrNo.push(i)
			} else {
				y[i].classList.remove("select-arrow-active");
			}
		}
		for (i = 0; i < xl; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add("select-hide");
			}
		}
	}

	/* If the user clicks anywhere outside the select box,
	then close all select boxes: */
	document.addEventListener("click", closeAllSelect);
})

var cartElems = undefined;
var totalElem = undefined;
onDom.push(function () {
	cartElems = document.getElementsByClassName("pcart-elem");
	if (cartElems.length == 0) return;
	totalElem = document.getElementsByClassName("ptpjs")[0];
	var domElems = cartElems;
	cartElems = new Array(domElems.length);
	// console.log(cartElems)
	for (var i = 0; i < cartElems.length; i++) {
		const ci = i;
		cartElems[ci] = new CartElems({
			id: domElems[ci].getAttribute("data-id"),
			elem: domElems[ci],
			del: domElems[ci].getElementsByClassName("pcart-trash")[0],
			price: domElems[ci].getAttribute("data-price"),
			minus: domElems[ci].getElementsByClassName("minus")[0],
			input: domElems[ci].getElementsByClassName("inum")[0],
			plus: domElems[ci].getElementsByClassName("plus")[0],
			sum: domElems[ci].getElementsByClassName("petjs")[0],
			onchange: [updateTotal],
			max: 10000,
		});
		// console.log(cartElems[ci], cartElems)
	}
	updateTotal();
	function updateTotal() {
		var total = 0;
		for (var i = 0; i < cartElems.length; i++) {
			// console.log(cartElems)
			total += cartElems[i].getFullPrice();
		}
		totalElem.innerHTML = total;
	}
})