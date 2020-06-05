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
		var parent = this;
		this.params = params;
		this.container = document.getElementsByClassName(this.params.containertClass)[0];
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

		this.loc = +sessionStorage.getItem('scrollNow');
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

		this.detectTouch(this.container, function(direction) {
			if (parent.animating) return;
			parent.detectDirection(direction);
		});
		this.preventDefaultScroll(function(direction) {
			if (parent.animating) return;
			parent.detectDirection(direction);
		});
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
		this.h = this.elems[0].getBoundingClientRect().height;
		this.hp = this.pagRect.getBoundingClientRect().height;
		// if (this.loc) return;
		this.transform();
	}

	detectTouch(elem, handler) {
		if (elem != document && !(elem instanceof Element)) {
			console.warn("Can't init touches: element is not ad document or istance of Element ");
			return;
		}
		if (typeof(handler) != "function") {
			console.warn("Can't init touches: handler is not a function");
			return;
		}
		elem.addEventListener('touchstart', handleTouchStart, false);		
		elem.addEventListener('touchmove', handleTouchMove, false);	
		elem.addEventListener('touchend', handleTouchEnd, false);
	
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

	preventDefaultScroll(handler) {
		var parent = this;
		window.addEventListener("mousewheel", wheel, false);
		window.addEventListener("DOMMouseScroll", wheel, false);
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























class NVSliderFader {
	constructor(params = {
		parentClass: undefined,
		transitionClass: undefined,
		elemsClass: undefined,
		elemsAClass: undefined,

		prevArrId: undefined,
		nextArrId: undefined,

		touchElemId: undefined,

		faderParentClass: undefined,
		faderElemsClass: undefined,

		btnLinkClass: undefined,
		marginBottom: 0,
	}) {
		var parent = this;
		this.params = params;
		this.marB = this.params.marginBottom;

		this.parent = document.getElementsByClassName(this.params.parentClass)[0];
		this.trans = document.getElementsByClassName(this.params.transitionClass)[0];
		this.elem = document.getElementsByClassName(this.params.elemsClass)[0];
		this.elemA = this.elem.getElementsByClassName(this.params.elemsAClass);

		this.touchContainer = document.getElementById(this.params.touchElemId);

		this.prevBtn = document.getElementById(this.params.prevArrId);
		this.nextBtn = document.getElementById(this.params.nextArrId);

		this.fadeParent = document.getElementsByClassName(this.params.faderParentClass)[0];
		this.faderElems = document.getElementsByClassName(this.params.faderElemsClass);

		this.btnLink = document.getElementsByClassName(this.params.btnLinkClass);

		if (this.elemA.length != this.faderElems.length || this.elemA.length == 0) {
			console.warn("NeuSlider can't init: In slider is", this.elemA.length, "elems, in fader is", this.faderElems.length, "elems!");
			return;
		}
		this.amount = this.elemA.length;
		this.prev = 0;
		this.now = 0;
		this.prevElem = 0;
		this.nowElem = 0;
		this.animating = false;


		this.elems = [
			this.elem.cloneNode(true),
			this.elem,
			this.elem.cloneNode(true)
		];
		// this.elemA[this.now].classList.add("active");
		this.elems[0].classList.add("clone");
		this.elems[2].classList.add("clone");
		this.trans.insertBefore(this.elems[0], this.trans.childNodes[0]);
		this.trans.append(this.elems[2]);

		this.elemsA = [
			this.elems[0].getElementsByClassName(this.params.elemsAClass),
			this.elemA,
			this.elems[2].getElementsByClassName(this.params.elemsAClass),
		];
		
		this.resize();

		this.prevBtn.onclick = function() {
			parent.detectDirection(1);
		}

		this.nextBtn.onclick = function() {
			parent.detectDirection(3);
		}

		// this.caa = 0;
		// for (var i = 0; i < this.elemsA.length; i++) {
		// 	const ci = i;
		// 	for (let j = 0; j < this.elemsA[ci].length; j++) {
		// 		const cj = j;
		// 		this.elemsA[ci][cj].onclick = function() {
		// 			console.log("|||parents", parent.prevElem, parent.nowElem);
		// 			console.log("ci",ci,"cj",cj)
		// 			if (parent.nowElem == parent.prevElem) {
		// 				if (ci == 0) {
		// 					console.log("st0");
		// 					parent.prevElem = parent.nowElem;
		// 					parent.nowElem++;
		// 					parent.prev = parent.now;
		// 					parent.now = cj;
		// 					parent.transform();
		// 					return;
		// 				} 
		// 				if (ci == 1) {
		// 					console.log("st1");
		// 					parent.prev = parent.now;
		// 					parent.now = cj;
		// 					parent.transform();
		// 					return;
		// 				}
		// 				if (ci == 2) {
		// 					console.log("st2");
		// 					parent.prevElem = parent.nowElem;
		// 					parent.nowElem++;
		// 					parent.prev = parent.now;
		// 					parent.now = cj;
		// 					parent.transform();
		// 					return;
		// 				}
		// 			}

		// 			if (parent.prevElem < parent.nowElem) { //up
		// 				if (ci == 0) {
		// 					console.log("1st0");
		// 				} 
		// 				if (ci == 1) {
		// 					parent.prevElem = parent.nowElem;
		// 					console.log("1st1");
		// 				}
		// 				if (ci == 2) {
		// 					console.log("1st2");
		// 				}		
		// 			}
		// 			if (parent.prevElem > parent.nowElem) { //up
		// 				if (ci == 0) {
		// 					console.log("2st0");
		// 				} 
		// 				if (ci == 1) {
		// 					parent.prevElem = parent.nowElem;
		// 					console.log("2st1");
		// 				}
		// 				if (ci == 2) {
		// 					console.log("2st2");
		// 				}	
		// 			}

		// 		}
		// 	}
		// }
		console.log("this.touchContainer", this.touchContainer)
		this.detectTouch(this.touchContainer, function(direction) {
			if (parent.animating) return;
			parent.detectDirection(direction);
		});
		// this.preventDefaultScroll(function(direction) {
		// 	if (parent.animating) return;
		// 	parent.detectDirection(direction);
		// });
	}
	
	resize() {
		if (Info.mob) {
			this.marB = 29.4;
		} else {
			this.marB = this.params.marginBottom * Info.coef;
		}
		this.h = this.elem.getBoundingClientRect().height;
		this.ah = new Array(this.amount);
		for (var i = 0; i < this.amount; i++) {
			const ci = i;
			this.ah[ci] = this.elemA[ci].getBoundingClientRect().height;		
		}
		this.cc = this.h / 2.79674797;
		//stops
		this.apos = new Array(this.amount);
		for (var i = 0; i < this.amount; i++) {
			if (i == 0) {
				this.apos[i] = 0;
			} else {
				this.apos[i] = this.apos[i - 1] + this.ah[i - 1] + this.marB;
			}
		}
		for (var i = 0; i < this.amount; i++) {
			this.apos[i] += this.ah[i]/2;
		}

		this.hp = 0;
		for (var i = 0; i < 5; i++) {
			this.hp += this.ah[i];
		}
		this.hp += 4 * this.marB;

		this.trans.style.height = this.hp + "px";

		this.elems[0].style.top = -this.h + "px";
		this.elems[1].style.top = "0px";
		this.elems[2].style.top = +this.h + "px";

		this.transform();
	}

	detectDirection(direction) {
		console.log("direction", direction)
		if (this.animating) return;
		if (direction == 1 || direction == 2) {
			if (this.now > 0) {
				this.prev = this.now;
				this.now--;
				this.transform();
			} else {
				this.prevElem = this.nowElem;
				this.nowElem++;
				this.prev = this.now;
				this.now = this.amount - 1;
				this.transform();
			}
		} 
		if (direction == 3 || direction == 4) {
			if (this.now < this.amount - 1) {
				this.prev = this.now;
				this.now++;
				this.transform();
			} else {
				this.prevElem = this.nowElem;
				this.nowElem--;
				this.prev = this.now;
				this.now = 0;
				this.transform();
			}
		}
	}

	transform() {
		var parent = this;
		this.animating = true;
		// for (var i = 0; i < this.elemsA.length; i++) {
		// 	const ci = i;
		// 	this.elemsA[ci][this.prev].classList.remove("center");
		// 	this.elemsA[ci][this.now].classList.add("center");
		// }
		this.elemsA[1][this.prev].classList.remove("center");
		this.elemsA[1][this.now].classList.add("center");

		if (this.prevElem != this.nowElem) {
			this.elems[0].style.top = -(this.nowElem - 1) * this.h + "px";
			this.elems[1].style.top = -(this.nowElem) * this.h + "px";
			this.elems[2].style.top = -(this.nowElem + 1) * this.h + "px";
		}
		this.trTo = this.nowElem * this.h + -this.apos[this.now];
		this.trTo += this.cc - 4 * Info.coef; //offset

		// console.log("nowElem", this.nowElem);
		// console.log("h", this.h);
		// console.log("apos", this.apos);
		// console.log("apos[this.now]", this.apos[this.now]);
		// console.log("apos[2]", this.apos[2]);
		this.trans.style.transform = "translate3D(0," + this.trTo + "px,0)";
		this.faderElems[this.prev].classList.remove('active');
		this.faderElems[this.now].classList.add('active');

		if (this.btnLink || this.btnLink.length != 0) {
			var href = this.elemsA[1][this.now].getAttribute("data-href");
			for (var i = 0; i < this.btnLink.length; i++) {
				const ci = i;
				this.btnLink[ci].href = href;
			}
		}

		setTimeout(function(){
			parent.animating = false;
		},300);
	}

	detectTouch(elem, handler) {
		if (elem != document && !(elem instanceof Element)) {
			console.warn("Can't init touches: element is not ad document or istance of Element ");
			return;
		}
		if (typeof(handler) != "function") {
			console.warn("Can't init touches: handler is not a function");
			return;
		}
		console.log("DTINITED", elem);
		elem.addEventListener('touchstart', handleTouchStart, false);		
		elem.addEventListener('touchmove', handleTouchMove, false);	
		elem.addEventListener('touchend', handleTouchEnd, false);
	
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
			console.log("tstart");
			const firstTouch = getTouches(evt)[0];									  
			xDown = firstTouch.clientX;									  
			yDown = firstTouch.clientY;									  
		};												
	
		function handleTouchMove(evt) {
			console.log("tmove");
			if ( ! xDown || ! yDown ) {return;}
	
			xUp = evt.touches[0].clientX;									
			yUp = evt.touches[0].clientY;
			xDiff = xDown - xUp;
			yDiff = yDown - yUp;
	
			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
				/*most significant*/
				if ( xDiff > 0 ) { 
					handler(2);
				} else if (xDiff < -0) {
					handler(4);
				}					   
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
			console.log("tend");
		};
	}
} 