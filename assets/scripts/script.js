var Info = {
	vw: 0,
	vh: 0,
	mob: false,
	coef: 1,
}
document.addEventListener("DOMContentLoaded", function(e) {
	Info.vw = window.innerWidth;
	Info.vh = window.innerHeight;
	Info.coef = Math.min(Info.vw * 0.0104166667, Info.vh * 0.0213219616) / 20;
	console.log(Info.vw * 0.0104166667, Info.vh * 0.0213219616)
	Info.vw < 768 ? Info.mob = true : Info.mob = false;
	if (onDom.length != 0) {
		for (var i = 0; i < onDom.length; i++) {
			onDom[i]();
		}
	}
	window.addEventListener("resize", function(e) {
		Info.vw = window.innerWidth;
		Info.vh = window.innerHeight;
		Info.coef = Math.min(Info.vw * 0.0104166667, Info.vh * 0.0213219616) / 20;
		Info.vw < 768 ? Info.mob = true : Info.mob = false;
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
})
onResize.push(function() {
	PS.resize();
})

var nvsf1 = undefined;
onDom.push(function() {
	nvsf1 = new NVSliderFader({
		parentClass: "nvsh1",
		transitionClass: "nvst1",
		elemsClass: "nvs1",
		elemsAClass: "nvsa1",

		prevArrId: "nvsf1-prev",
		nextArrId: "nvsf1-next",

		faderParentClass: "nvsf1",
		faderElemsClass: "nvsfe1",

		btnLinkId: "nvsf1-btn",
		marginBottom: 49,
	});
})
onLoad.push(function(){
	nvsf1.resize();
});
onResize.push(function() {
	nvsf1.resize();
})

// var nvsf2 = undefined;
// onDom.push(function() {
// 	nvsf1 = new NVSliderFader({
// 		parentClass: "nvsh2",
// 		transitionClass: "nvst2",
// 		elemsClass: "nvs2",
// 		elemsAClass: "nvsa2",

// 		prevArrId: "nvsf2-prev",
// 		nextArrId: "nvsf2-next",

// 		faderParentClass: "nvsf2",
// 		faderElemsClass: "nvsfe2",

// 		btnLinkId: "nvsf2-btn",
// 		marginBottom: 49,
// 	});
// })

// onLoad.push(function(){
// 	nvsf1.resize();
// });

onDom.push(function() {
	console.log("III");
	var inputs = document.getElementsByClassName("input");
	if (!inputs || inputs.length == 0) return;
	for (let i = 0; i < inputs.length; i++) {
		const ci = i;
		const input = inputs[ci].getElementsByTagName("input")[0];
		console.log(input);
		if (!input) continue;
		input.onblur = function() {
			console.log(input, input.value, input.value.length == 0)
			if (input.value.length == 0) {
				inputs[ci].classList.remove("focus");
			} else {
				inputs[ci].classList.add("focus");
			}
		}
		
	}
})