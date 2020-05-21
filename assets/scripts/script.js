var Info = {
	vw: 0,
	vh: 0,
	mob: false,
}
document.addEventListener("DOMContentLoaded", function(event) {
	if (onLoaded.length != 0) {
		for (var i = 0; i < onLoaded.length; i++) {
			onLoaded[i]();
		}
	}
	window.addEventListener("resize", function() {
		if (onResize.length != 0) {
			for (var i = 0; i < onResize.length; i++) {
				Info.vw = window.innerWidth;
				Info.vh = window.innerHeight;
				Info.vw < 768 ? Info.mob = true : Info.mob = false;
				onResize[i]();
			}
		}	
	});
});

var PS = undefined;
onLoaded.push(function() {
	PS = new PageScroll({
		containertClass: "scroll-parent",
		elemsClass: "scroll-elem", 

		paginationId: "right-bar",
		paginationRectangleId: "right-bar-rectangle",
		paginationElemsClass: "right-bar-elem",
		amountClass: "rbe-nums-all",

		nextBtnClass: undefined,
	});
	onResize.push(function() {
		PS.resize();
	})
})