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

		//nvsmobbar 
		nvsParentId: undefined,
		nvsRectangleId: undefined,
		nvsElemsClass: undefined,
		nvsNumsAllClass: undefined,

		toShow: 3,
		centerMode: false,
	}) {
		var parent = this;
		this.params = params;
		this.marB = this.params.marginBottom;
		if (!this.parent) return;
		this.allowResize = true;

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

		this.nvsRect = document.getElementById(this.params.nvsRectangleId);
		this.nvsElems = document.getElementsByClassName(this.params.nvsElemsClass);
		this.nvsAll = document.getElementById(this.params.nvsParentId).getElementsByClassName(this.params.nvsNumsAllClass);

		//nvs 
		if(this.nvsRect) {
			this.nvsW = 100 / this.nvsElems.length;
			this.nvsRect.style.width = this.nvsW + "%";
		}

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

		for (var i = 0; i < this.amount; i++) {
			const ci = i;
			this.nvsAll[ci].innerHTML = this.amount;		
		}

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

		for (var i = 0; i < this.nvsElems.length; i++) {
			const ci = i;
			this.nvsElems[ci].onclick = function() {
				parent.prev = parent.now;
				parent.now = ci;
				parent.transform();
			}
			
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
		// console.log("this.touchContainer", this.touchContainer)
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
		if (this.params.centerMode) {
			for (var i = 0; i < this.amount; i++) {
				this.apos[i] += this.ah[i]/2;
			}
		}

		this.hp = 0;
		for (var i = 0; i < this.params.toShow; i++) {
			this.hp += this.ah[i];
		}
		if (this.params.toShow < 4) {
			this.hp += this.marB / 2;
			for (var i = 0; i < this.amount; i++) {
				this.apos[i] += this.ah[i]/2;
			}
		}
		this.hp += (this.params.toShow - 1) * this.marB;

		this.trans.style.height = this.hp + "px";

		this.elems[0].style.top = -this.h + "px";
		this.elems[1].style.top = "0px";
		this.elems[2].style.top = +this.h + "px";

		this.transform();
	}

	detectDirection(direction) {
		// console.log("direction", direction)
		if (this.animating) return;
		if (direction == 1 || direction == 4) {
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
		if (direction == 3 || direction == 2) {
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

		//centerMode
		if (this.params.centerMode) {
			this.trTo += this.cc - (this.params.toShow - 1) * Info.coef; //offset
			// this.trTo += this
			// this.trTo += this.ah[this.now - 1] + this.ah[this.now - 2];
			// if (this.params.toShow < 4) {
				// this.trTo -= this.marB;
			// }
		}


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
		

		// if (Info.mob) {
			this.nvsRect.style.transform = "translate3D(" + 100 * this.now + "%,0,0)";
			this.nvsElems[this.prev].classList.remove("active");
			this.nvsElems[this.now].classList.add("active");
		// }

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
				if ( xDiff > 0 ) { 
					handler(2);
				} else if (xDiff < -0) {
					handler(4);
				}						 
			} else {
				// if ( yDiff > 0 ) {
				// 	handler(3);
				// } else if (yDiff < 0) { 
				// 	handler(1);
				// }																 
			}		
			xDown = null;
			yDown = null;									 
		};
		function handleTouchEnd(evt) {
		};
	}
} 






class Accordions {
	constructor(params = {
		parentClass: undefined,
		hiderClass: undefined,
		btnClass: undefined,
		contentClass: undefined,
		maxHeight: 0,
		measureType: "px",
	}) {
		this.parent = document.getElementsByClassName(params.parentClass);
		this.hider = document.getElementsByClassName(params.hiderClass);
		this.content = document.getElementsByClassName(params.contentClass);
		this.btn = document.getElementsByClassName(params.btnClass);
		var self = this;
		var amount = this.btn.length;
		for (var i = 0; i < amount; i++) {
			const ci = i;
			this.hider[ci].style.height = params.maxHeight / 20 + "rem";
		}

		for (var i = 0; i < amount; i++) {
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
	}
}







// var ssb = {
// 	aConts	: [],
// 	mouseY : 0,
// 	N	: 0,
// 	asd : 0, /*active scrollbar element*/
// 	sc : 0,
// 	sp : 0,
// 	to : 0,
	
// 	// constructor
// 	scrollbar : function (cont_id) {
// 		var cont = document.getElementById(cont_id);
		
// 		// perform initialization
// 		if (! ssb.init()) return false;
		
// 		var cont_clone = cont.cloneNode(false);
// 		cont_clone.style.overflow = "hidden";
// 		cont.parentNode.appendChild(cont_clone);
// 		cont_clone.appendChild(cont);
// 		cont.style.position = 'absolute';
// 		cont.style.left = cont.style.top = '0px';
// 		cont.style.width = cont.style.height = '100%';
		
// 		// adding new container into array
// 		ssb.aConts[ssb.N++] = cont;
		
// 		cont.sg = false;
		
// 		//creating scrollbar child elements
// 		cont.st = this.create_div('ssb_st', cont, cont_clone);
// 		cont.sb = this.create_div('ssb_sb', cont, cont_clone);
// 		cont.su = this.create_div('ssb_up', cont, cont_clone);
// 		cont.sd = this.create_div('ssb_down', cont, cont_clone);
		
// 		// on mouse down processing
// 		cont.sb.onmousedown = function (e) {
// 		if (! this.cont.sg) {
// 			if (! e) e = window.event;
			
// 			ssb.asd = this.cont;
// 			this.cont.yZ = e.screenY;
// 			this.cont.sZ = cont.scrollTop;
// 			this.cont.sg = true;
			
// 			// new class name
// 			this.className = 'ssb_sb ssb_sb_down';
// 		}
// 		return false;
// 		}
// 		// on mouse down on free track area - move our scroll element too
// 		cont.st.onmousedown = function (e) {
// 		if (! e) e = window.event;
// 		ssb.asd = this.cont;
		
// 		ssb.mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
// 		for (var o = this.cont, y = 0; o != null; o = o.offsetParent) y += o.offsetTop;
// 		this.cont.scrollTop = (ssb.mouseY - y - (this.cont.ratio * this.cont.offsetHeight / 2) - this.cont.sw) / this.cont.ratio;
// 		this.cont.sb.onmousedown(e);
// 		}
		
// 		// onmousedown events
// 		cont.su.onmousedown = cont.su.ondblclick = function (e) { ssb.mousedown(this, -1); return false; }
// 		cont.sd.onmousedown = cont.sd.ondblclick = function (e) { ssb.mousedown(this,	1); return false; }
		
// 		//onmouseout events
// 		cont.su.onmouseout = cont.su.onmouseup = ssb.clear;
// 		cont.sd.onmouseout = cont.sd.onmouseup = ssb.clear;
		
// 		// on mouse over - apply custom class name: ssb_sb_over
// 		cont.sb.onmouseover = function (e) {
// 		if (! this.cont.sg) this.className = 'ssb_sb ssb_sb_over';
// 		return false;
// 		}
		
// 		// on mouse out - revert back our usual class name 'ssb_sb'
// 		cont.sb.onmouseout	= function (e) {
// 		if (! this.cont.sg) this.className = 'ssb_sb';
// 		return false;
// 		}
		
// 		// onscroll - change positions of scroll element
// 		cont.ssb_onscroll = function () {
// 		this.ratio = (this.offsetHeight - 2 * this.sw) / this.scrollHeight;
// 		this.sb.style.top = Math.floor(this.sw + this.scrollTop * this.ratio) + 'px';
// 		}
		
// 		// scrollbar width
// 		cont.sw = 12;
		
// 		// start scrolling
// 		cont.ssb_onscroll();
// 		ssb.refresh();
		
// 		// binding own onscroll event
// 		cont.onscroll = cont.ssb_onscroll;
// 		return cont;
// 	},
	
// 	// initialization
// 	init : function () {
// 		if (window.oper || (! window.addEventListener && ! window.attachEvent)) { return false; }
		
// 		// temp inner function for event registration
// 		function addEvent (o, e, f) {
// 		if (window.addEventListener) { o.addEventListener(e, f, false); ssb.w3c = true; return true; }
// 		if (window.attachEvent) return o.attachEvent('on' + e, f);
// 		return false;
// 		}
		
// 		// binding events
// 		addEvent(window.document, 'mousemove', ssb.onmousemove);
// 		addEvent(window.document, 'mouseup', ssb.onmouseup);
// 		addEvent(window, 'resize', ssb.refresh);
// 		return true;
// 	},
	
// 	// create and append div finc
// 	create_div : function(c, cont, cont_clone) {
// 		var o = document.createElement('div');
// 		o.cont = cont;
// 		o.className = c;
// 		cont_clone.appendChild(o);
// 		return o;
// 	},
// 	// do clear of controls
// 	clear : function () {
// 		clearTimeout(ssb.to);
// 		ssb.sc = 0;
// 		return false;
// 	},
// 	// refresh scrollbar
// 	refresh : function () {
// 		for (var i = 0, N = ssb.N; i < N; i++) {
// 		var o = ssb.aConts[i];
// 		o.ssb_onscroll();
// 		o.sb.style.width = o.st.style.width = o.su.style.width = o.su.style.height = o.sd.style.width = o.sd.style.height = o.sw + 'px';
// 		o.sb.style.height = Math.ceil(Math.max(o.sw * .5, o.ratio * o.offsetHeight) + 1) + 'px';
// 		}
// 	},
// 	// arrow scrolling
// 	arrow_scroll : function () {
// 		if (ssb.sc != 0) {
// 		ssb.asd.scrollTop += 6 * ssb.sc / ssb.asd.ratio;
// 		ssb.to = setTimeout(ssb.arrow_scroll, ssb.sp);
// 		ssb.sp = 32;
// 		}
// 	},
	
// 	/* event binded functions : */
// 	// scroll on mouse down
// 	mousedown : function (o, s) {
// 		if (ssb.sc == 0) {
// 		// new class name
// 		o.cont.sb.className = 'ssb_sb ssb_sb_down';
// 		ssb.asd = o.cont;
// 		ssb.sc = s;
// 		ssb.sp = 400;
// 		ssb.arrow_scroll();
// 		}
// 	},
// 	// on mouseMove binded event
// 	onmousemove : function(e) {
// 		if (! e) e = window.event;
// 		// get vertical mouse position
// 		ssb.mouseY = e.screenY;
// 		if (ssb.asd.sg) ssb.asd.scrollTop = ssb.asd.sZ + (ssb.mouseY - ssb.asd.yZ) / ssb.asd.ratio;
// 	},
// 	// on mouseUp binded event
// 	onmouseup : function (e) {
// 		if (! e) e = window.event;
// 		var tg = (e.target) ? e.target : e.srcElement;
// 		if (ssb.asd && document.releaseCapture) ssb.asd.releaseCapture();
		
// 		// new class name
// 		if (ssb.asd) ssb.asd.sb.className = (tg.className.indexOf('scrollbar') > 0) ? 'ssb_sb ssb_sb_over' : 'ssb_sb';
// 		document.onselectstart = '';
// 		ssb.clear();
// 		ssb.asd.sg = false;
// 	}
// }
	
// window.onload = function() {
// 	ssb.scrollbar('container'); // scrollbar initialization
// }
	





//i cant do it now cause i slept in avevrange 6h :(
// //custom scrollbar
// class CSB {
// 	constructor(params = {
// 		containerQuery: undefined,
// 	}) {
// 		this.params = params;
// 	}
// }
