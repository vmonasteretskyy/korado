var Info = {
	vw: 0,
	vh: 0,
	mob: false,
	coef: 1,
	isMenu: false,
	isEclipse: false,
}
document.addEventListener("DOMContentLoaded", function(e) {
	Info.vw = window.innerWidth;
	Info.vh = window.innerHeight;
	Info.coef = Math.min(Info.vw * 0.0104166667, Info.vh * 0.0213219616) / 20;
	// console.log(Info.vw * 0.0104166667, Info.vh * 0.0213219616)
	Info.vw < 1024 ? Info.mob = true : Info.mob = false;
	if (onDom.length != 0) {
		for (var i = 0; i < onDom.length; i++) {
			onDom[i]();
		}
	}
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
})



var nvsf2 = undefined;
onDom.push(function() {
	nvsf2 = new NVSliderFader({
		parentClass: "nvsh2",
		transitionClass: "nvst2",
		elemsClass: "nvs2",
		elemsAClass: "nvsa2",

		prevArrId: "nvsf2-prev",
		nextArrId: "nvsf2-next",

		touchElemId: "nvsft2",

		faderParentClass: "nvsf2",
		faderElemsClass: "nvsfe2",

		btnLinkClass: "nvsf2-btnlnk",
		marginBottom: 49,

		nvsParentId: "nvs-bar2",
		nvsRectangleId: "nvs-bar-rectangle2",
		nvsElemsClass: "nvse2",
		nvsNumsAllClass: "nvs-nums-all",

		toShow: 5,
		centerMode: true,
	});
	if (nvsf2.allowResize) {
		onLoad.push(function(){
			nvsf2.resize();
		});
		onResize.push(function() {
			nvsf2.resize();
		});
	}
})



var nvsf3 = undefined;
onDom.push(function() {
	nvsf3 = new NVSliderFader({
		parentClass: "nvsh3",
		transitionClass: "nvst3",
		elemsClass: "nvs3",
		elemsAClass: "nvsa3",

		prevArrId: "nvsf3-prev",
		nextArrId: "nvsf3-next",

		touchElemId: "nvsft3",

		faderParentClass: "nvsf3",
		faderElemsClass: "nvsfe3",

		btnLinkClass: "nvsf3-btnlnk",
		marginBottom: 49,

		nvsParentId: "nvs-bar3",
		nvsRectangleId: "nvs-bar-rectangle3",
		nvsElemsClass: "nvse3",
		nvsNumsAllClass: "nvs-nums-all",

		toShow: 3,
		centerMode: true,
	});
	if (nvsf3.allowResize) {
		onLoad.push(function(){
			nvsf3.resize();
		});
		onResize.push(function() {
			nvsf3.resize();
		});
	}
})



var nvsf4 = undefined;
onDom.push(function() {
	nvsf4 = new NVSliderFader({
		parentClass: "nvsh4",
		transitionClass: "nvst4",
		elemsClass: "nvs4",
		elemsAClass: "nvsa4",

		prevArrId: "nvsf4-prev",
		nextArrId: "nvsf4-next",

		touchElemId: "nvsft4",

		faderParentClass: "nvsf4",
		faderElemsClass: "nvsfe4",

		btnLinkClass: "nvsf4-btnlnk",
		marginBottom: 49,

		nvsParentId: "nvs-bar4",
		nvsRectangleId: "nvs-bar-rectangle4",
		nvsElemsClass: "nvse4",
		nvsNumsAllClass: "nvs-nums-all",

		toShow: 4,
		centerMode: true,
	});
	if (nvsf4.allowResize) {
		onLoad.push(function(){
			nvsf4.resize();
		});
		onResize.push(function() {
			nvsf4.resize();
		});
	}
})



var nvsf5 = undefined;
onDom.push(function() {
	nvsf5 = new NVSliderFader({
		parentClass: "nvsh5",
		transitionClass: "nvst5",
		elemsClass: "nvs5",
		elemsAClass: "nvsa5",

		prevArrId: "nvsf5-prev",
		nextArrId: "nvsf5-next",

		touchElemId: "nvsft5",

		faderParentClass: "nvsf5",
		faderElemsClass: "nvsfe5",

		btnLinkClass: "nvsf5-btnlnk",
		marginBottom: 49,

		nvsParentId: "nvs-bar5",
		nvsRectangleId: "nvs-bar-rectangle5",
		nvsElemsClass: "nvse5",
		nvsNumsAllClass: "nvs-nums-all",

		toShow: 4,
		centerMode: true,
	});
	if (nvsf5.allowResize) {
		onLoad.push(function(){
			nvsf5.resize();
		});
		onResize.push(function() {
			nvsf5.resize();
		});
	}
})


onDom.push(function() {
	var inputs = document.getElementsByClassName("input");
	if (!inputs || inputs.length == 0) return;
	for (var i = 0; i < inputs.length; i++) {
		const ci = i;
		const input = inputs[ci].getElementsByTagName("input")[0];
		if (!input) continue;
		input.onblur = function() {
			if (input.value.length == 0) {
				inputs[ci].classList.remove("focus");
			} else {
				inputs[ci].classList.add("focus");
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
			Info.isMenu = true;
			if (Info.vw < 768) {
				document.body.style.overflow = "hidden";
			}
		} else {
			menu.classList.remove("active");
			Info.isMenu = false;
			if (Info.vw < 768) {
				document.body.style.overflow = "scroll";
			}
		}
	}
	close.onclick = function() {
		if (Info.isMenu) {
			menu.classList.remove("active");
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
	
	for (var i = 0; i < amount; i++) {
		const ci = i;
		hiders[ci].style.height = lists[ci].getBoundingClientRect().height / 20 + "rem";
	}
	for (var i = 0; i < amount; i++) {
		const ci = i;
		btns[ci].onclick = function() {
			this.classList.toggle("opened");
			hiders[ci].classList.toggle("hidden");
		}
	}
});