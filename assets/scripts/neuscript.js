class PageScroll {
	constructor(params = {
		containertClass: undefined,
		elemsClass: undefined, 

		paginationId: undefined,
		paginationRectangleId: undefined,
		paginationElemsClass: undefined,
		amountClass: undefined,

		nextBtnClass: undefined,
	}) {
		document.body.parentNode.scrollTo(0,0);
		document.body.scrollTo(0,0);
		this.params = params;
		this.container = document.getElementsByClassName(this.params.containertClass)[0];
		if (!this.container) return;
		this.allowResize = true;
		if (Info.vw < 768) {
			// console.log(this.params)
			this.nextBtn = document.getElementsByClassName(this.params.nextBtnClass)[0];
			this.nextBtn.onclick = function() {
				var top = document.getElementsByName("main-second")[0].offsetTop;
	 				window.scrollTo(0, top);	
			}
			return;
		};
		var parent = this;
		this.elems = document.getElementsByClassName(this.params.elemsClass);

		this.pag = document.getElementById(this.params.paginationId);
		this.pagRect = document.getElementById(this.params.paginationRectangleId);
		this.pagElems = document.getElementsByClassName(this.params.paginationElemsClass);

		this.amountElems = document.getElementsByClassName(this.params.amountClass);
		this.amount = this.elems.length;
		this.nextBtns = document.getElementsByClassName(this.params.nextBtnClass);

		this.prev = 0;
		this.now = 0;
		this.animating = false;
		this.active = false;

		this.loc = +sessionStorage.getItem('scrollNow');
		
		if (location.href.indexOf("#") != -1) {
			var a = location.href.indexOf("#");
			this.loc = location.href.substr(location.href.indexOf("#") + 1) - 1;
		}
		this.resize();
		if (this.loc) {
			this.now = this.loc;
			this.transform();
		}


		for (var i = 0; i < this.amount; i++) {
			const ci = i;
			this.amountElems[ci].innerHTML = this.amount;
		}

		/* when tocuhing next btn */
		for (var i = 0; i < this.nextBtns.length; i++) {
			const ci = i;
			this.nextBtns[ci].onclick = function() {
				if (parent.animating) return;
				parent.detectDirection(3);
			}
		}
		
		for (var i = 0; i < this.pagElems.length; i++) {
			const ci = i;
			this.pagElems[ci].onclick = function() {
				if (parent.animating) return;
				parent.prev = parent.now;
				parent.now = ci;
				parent.transform();
			}
		}

		if (parent.animating) return;
		if (parent.active) return;
		// this.detectTouch(this.container, function(direction) {
		// 	parent.detectDirection(direction);
		// }, true);
		// this.preventDefaultScroll(function(direction) {
		// 	parent.detectDirection(direction);
		// }, true);
	}

	detectDirection(direction) {
		if (this.animating || Info.isMenu || Info.isEclipse) return;
		if (direction == 1) {
			if (this.now > 0) {
				this.prev = this.now;
				this.now--;
				this.transform();
			}
		} 
		if (direction == 3) {
			if (this.now < this.amount - 1) {
				this.prev = this.now;
				this.now++;
				this.transform();
			}
		}
	}

	transform() {
		if (!this.active) return;
		document.body.parentNode.scrollTo(0,0);
		var parent = this;
		this.animating = true;
		this.container.style.transform = "translate3D(0," + (-this.h * this.now) + "px,0)";
		this.pagRect.style.transform = "translate3D(0," + (this.hp * this.now) + "px,0)";
		this.pagElems[this.prev].classList.remove("active");
		this.pagElems[this.now].classList.add("active");

		if (this.now == 0) {
			document.body.classList.add("first");
		} else {
			document.body.classList.remove("first");
		}

		setTimeout(function(){
			parent.animating = false;
		},600);
		sessionStorage.setItem('scrollNow', this.now);
	}

	resize() {
		var parent = this;
		if (Info.vw > 767) {
			this.active = true;
			this.h = this.elems[0].getBoundingClientRect().height;
			this.hp = this.pagRect.getBoundingClientRect().height;

			this.detectTouch(this.container, function(direction) {
			parent.detectDirection(direction);
			}, true);
			this.preventDefaultScroll(function(direction) {
				parent.detectDirection(direction);
			}, true);
			// if (this.loc) return;
			this.transform();
		} else {
			this.active = false;

			this.detectTouch(this.container, function(direction) {
				parent.detectDirection(direction);
				}, false);

			this.preventDefaultScroll(function(direction) {
				parent.detectDirection(direction);
			}, false);

		}
	}

	detectTouch(elem, handler, enable) {
		if (elem != document && !(elem instanceof Element)) {
			console.warn("Can't init touches: element is not ad document or istance of Element ");
			return;
		}
		if (typeof(handler) != "function") {
			console.warn("Can't init touches: handler is not a function");
			return;
		}
		if (enable) {
			elem.addEventListener('touchstart', handleTouchStart, false);		
			elem.addEventListener('touchmove', handleTouchMove, false);	
			elem.addEventListener('touchend', handleTouchEnd, false);
		} else {
			elem.removeEventListener('touchstart', handleTouchStart, false);		
			elem.removeEventListener('touchmove', handleTouchMove, false);	
			elem.removeEventListener('touchend', handleTouchEnd, false);
		}
	
		var xDown = null;														
		var yDown = null;
	
		var xUp = null;
		var yUp = null;
		var xDiff = null;
		var yDiff = null;
	
		function getTouches(evt) {
			return evt.touches ||			// browser API
				evt.originalEvent.touches;	// jQuery
		}													 
	
		function handleTouchStart(evt) {
			const firstTouch = getTouches(evt)[0];										
			xDown = firstTouch.clientX;										
			yDown = firstTouch.clientY;										
		};												
	
		function handleTouchMove(evt) {
			if ( ! xDown || ! yDown ) {return;}
	
			xUp = evt.touches[0].clientX;									
			yUp = evt.touches[0].clientY;
			xDiff = xDown - xUp;
			yDiff = yDown - yUp;
	
			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
				/*most significant*/
				// if ( xDiff > 20 ) { 
				// 	handler(2);
				// } else if (xDiff < -20) {
				// 	handler(4);
				// }						 
			} else {
				if ( yDiff > 0 ) {
					handler(3);
				} else if (yDiff < 0) { 
					handler(1);
				}																 
			}		
			xDown = null;
			yDown = null;									 
		};
		function handleTouchEnd(evt) {
		};
	}

	preventDefaultScroll(handler, enable) {
		var parent = this;
		if (enable) {
			window.addEventListener("mousewheel", wheel, false);
			window.addEventListener("DOMMouseScroll", wheel, false);
		} else {
			window.removeEventListener("mousewheel", wheel, false);
			window.removeEventListener("DOMMouseScroll", wheel, false);
		}
		
		// var keys = [32,33,34,35,36,37,38,39,40];
		var keyCode = 0;
		document.onkeydown = function(e) {
			keyCode = e.keyCode;
			switch(keyCode) {
				case 32: {handler(3); break;}//space
				case 33: {handler(1); break;}//pgu
				case 34: {handler(3); break;}//pgd
				case 35: {
					if (parent.animating) return;
					parent.prev = parent.now;
					parent.now = parent.amount - 1;
					parent.transform(1); 
					break; }//end
				case 36: {
					if (parent.animating) return;
					parent.prev = parent.now;
					parent.now = 0
					parent.transform(1); 
					break;
				}//home
				case 38: {handler(1); break;}//up
				case 40: {handler(3); break;}//down
				default: return;
			}
		};
		function wheel(e) {
			var w = e.deltaY ? e.deltaY : e.detail * 30;
			w > 0 ? handler(3) : handler(1);
		}
	}
}




















class Accordions {
	constructor(params = {
		parentClass: undefined,
		hiderClass: undefined,
		btnClass: undefined,
		contentClass: undefined,
		maxHeight: 0,
	}) {
		this.parent = document.getElementsByClassName(params.parentClass);
		this.hider = document.getElementsByClassName(params.hiderClass);
		this.content = document.getElementsByClassName(params.contentClass);
		this.btn = document.getElementsByClassName(params.btnClass);
		this.maxHeight = params.maxHeight;
		var self = this;
		this.amount = this.btn.length;

		this.resize()

		for (var i = 0; i < this.amount; i++) {
			const ci = i;
			this.btn[ci].onclick = function() {
				if (self.hider[ci].classList.contains("hidden")) {
					self.hider[ci].classList.remove("hidden");
					this.classList.add("active");
				} else {
					self.hider[ci].classList.add("hidden");
					this.classList.remove("active");
				}
			}			
		}
		this.inited = true;
	}
	resize() {
		Info.coef ? this.coef = Info.coef : this.coef = 1;
		this.coefMaxHeight = this.maxHeight * this.coef;
		for (var i = 0; i < this.amount; i++) {
			const ci = i;
			var h = this.content[ci].getBoundingClientRect().height;
			if (h > this.coefMaxHeight) {
				h = this.coefMaxHeight;
				this.hider[ci].classList.add("scroll");
			} else {
				this.hider[ci].classList.add("noscroll");
			}
			if (!this.inited) this.hider[ci].classList.add("hidden");
			this.hider[ci].style.height = h + "px";
		}
	}
}













class Switcher {
	constructor(params = {
		parent: undefined,
		buttons: undefined,
		containers: undefined,
	}) {
		this.params = params;
		this.parent = params.parent;
		this.buttons = params.buttons;
		this.containers = params.containers;
		this.amount = this.buttons.length;
		this.prev = 0;
		this.resize();
		this.containers[0].classList.add("active");
		this.buttons[0].classList.add("active");
		if (this.amount != this.containers.length) {console.warn("ErrLen");return;}
		for (var i = 0; i < this.amount; i++) {
			const ci = i;
			this.buttons[ci].onclick = () => {
				// console.log(this.containers)
				this.containers[this.prev].classList.remove("active");
				this.containers[ci].classList.add("active");
				this.buttons[this.prev].classList.remove("active");
				this.buttons[ci].classList.add("active");
				this.parent.style.height = this.h[ci] + "px";
				this.prev = ci;
			}
		}
	}
	resize() {
		this.h = new Array(this.amount);
		for (var i = 0; i < this.amount; i++) {
			const ci = i;
			this.h[ci] = this.containers[ci].getBoundingClientRect().height;
		}
		this.parent.style.height = this.h[this.prev] + "px";
	}
};










class CartElems {
	constructor(params = {
		id: undefined,
		elem: undefined,
		del: undefined,
		price: 0,
		minus: undefined,
		input: undefined,
		plus: undefined,
		sum: undefined,
		max: 100,
		onchange: [],
	}) {
		if (params.id == undefined) return;
		this.params = params;
		this.amount = +this.params.input.value;
		this.params.price = +this.params.price;
		this.first = true;
		
		this.params.minus.onclick = () => {
			if (this.amount < 2) return;
			this.amount--;
			this.updateInput();
		}		
		this.params.plus.onclick = () => {
			if (this.amount >= this.params.max) return;
			this.amount++;
			this.updateInput();
		}
		this.params.input.onkeyup = () => {
			this.params.input.value = this.params.input.value.replace(/[^\d\.]/g, '');
			if (this.params.input.value > this.params.max) {
				this.params.input.value = this.params.max;
			}
			if (this.params.input.value < 1) {
				this.params.input.value = 1;
			}
			this.amount = +this.params.input.value;
			this.updateInput();
		}
		this.updateInput();
	}
	updateInput() {
		this.params.input.value = this.amount;
		this.params.sum.innerHTML = this.amount * this.params.price;
		if (this.first) {
			this.first = false;
		} else {
			if (this.params.onchange.length != 0) {
				for (var i = 0; i < this.params.onchange.length; i++) {
					this.params.onchange[i]();					
				}
			}
		}
	}
	getFullPrice() {
		return this.amount * this.params.price;
	}
}










// zoom 
class Zoom {
	constructor(params = {
		firstImg: undefined,
		lens: undefined,
		result: undefined
	}) {
		this.params = params;
		this.img = params.firstImg;
		this.lens = params.lens;
		this.result = params.result;

		this.cx = this.result.offsetWidth / this.lens.offsetWidth;
		this.cy = this.result.offsetHeight / this.lens.offsetHeight;

		this.tx = 0;
		this.ty = 0;

		this.changeImg();
		this.inited = true;
	}

	changeImg(img) {
		var self = this;
		if (img) { this.img = img; }
		/* Execute a function when someone moves the cursor over the image, or the lens: */
		this.lens.removeEventListener("mousemove", function(e) {self.moveLens(e)});
		this.img.removeEventListener("mousemove", function(e) {self.moveLens(e)});

		this.lens.removeEventListener("mouseenter", function() {self.visibleResult(true)});
		this.lens.removeEventListener("mouseleave", function() {self.visibleResult(false)});
		this.img.removeEventListener("mouseenter", function() {self.visibleResult(true)});
		this.img.removeEventListener("mouseleave", function() {self.visibleResult(false)});

		/* And also for touch screens: */
		this.lens.removeEventListener("touchmove", function(e) {self.moveLens(e)});
		this.img.removeEventListener("touchmove", function(e) {self.moveLens(e)});

		var size = this.getOriginalSize();
		this.result.style.backgroundImage = "url('" + this.img.src + "')";
		this.result.style.backgroundSize = (size.width * this.cx) + "px " + (size.height * this.cy) + "px";

		/* Execute a function when someone moves the cursor over the image, or the lens: */
		this.lens.addEventListener("mousemove", function(e) {self.moveLens(e)});
		this.img.addEventListener("mousemove", function(e) {self.moveLens(e)});

		this.lens.addEventListener("mouseenter", function() {self.visibleResult(true)});
		this.lens.addEventListener("mouseleave", function() {self.visibleResult(false)});
		this.img.addEventListener("mouseenter", function() {self.visibleResult(true)});
		this.img.addEventListener("mouseleave", function() {self.visibleResult(false)});

		/* And also for touch screens: */
		this.lens.addEventListener("touchmove", function(e) {self.moveLens(e)});
		this.img.addEventListener("touchmove", function(e) {self.moveLens(e)});
	}
	getOriginalSize() {
		var width, height, sw, sh, snew;
		var timg = new Image();
		timg.src = this.img.src;

		sw = this.img.width / timg.width;
		sh = this.img.height / timg.height;


		if (sw > sh) {
			snew = sh;
		} else {
			snew = sw;
		}
		
		width = timg.width * snew;
		height = timg.height * snew;

		if (sw > sh) {
			this.tx = (this.img.width - width) / 2;
		} else {
			this.ty = (this.img.height - height) / 2;
		}

		return {width: width, height: height}
	}
	moveLens(e) {
		var pos, x, y;
		/* Prevent any other actions that may occur when moving over the image */
		e.preventDefault();
		/* Get the cursor's x and y positions: */
		pos = this.getCursorPos(e);
		/* Calculate the position of the lens: */
		x = pos.x - (this.lens.offsetWidth / 2);
		y = pos.y - (this.lens.offsetHeight / 2);
		/* Prevent the lens from being positioned outside the image: */
		if (x > this.img.width - this.lens.offsetWidth) { x = this.img.width - this.lens.offsetWidth; }
		if (x < 0) { x = 0; }
		if (y > this.img.height - this.lens.offsetHeight) { y = this.img.height - this.lens.offsetHeight; }
		if (y < 0) { y = 0; }
		/* Set the position of the lens: */
		this.lens.style.left = x + "px";
		this.lens.style.top = y + "px";
		/* Display what the lens "sees": */
		this.result.style.backgroundPosition = -(x * this.cx - this.tx * this.cx) + "px " + -(y * this.cy - this.ty * this.cy) + "px";
	}
	visibleResult(visible) {
		visible ? this.result.classList.add("active") : this.result.classList.remove("active");
		visible ? this.lens.classList.add("active") : this.lens.classList.remove("active");
	}
	getCursorPos(e) {
		var a, x = 0, y = 0;
		e = e || window.event;
		/* Get the x and y positions of the image: */
		a = this.img.getBoundingClientRect();
		/* Calculate the cursor's x and y coordinates, relative to the image: */
		x = e.pageX - a.left;
		y = e.pageY - a.top;
		/* Consider any page scrolling: */
		x = x - window.pageXOffset;
		y = y - window.pageYOffset;
		return { x: x, y: y };
	}
}