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

		this.resize();

		for (var i = 0; i < this.amount; i++) {
			const ci = i;
			this.amountElems[ci].innerHTML = this.amount;
		}

		/* when tocuhing next btn */
		for (var i = 0; i < this.nextBtns.length; i++) {
			const ci = i;
			this.nextBtns[ci].onclick = function() {
				parent.detectDirection(3);
			}
		}
		
		for (var i = 0; i < this.pagElems.length; i++) {
			const ci = i;
			this.pagElems[ci].onclick = function() {
				parent.prev = parent.now;
				parent.now = ci;
				parent.transform();
			}
		}

		this.detectTouch(this.container, function(direction) {
			parent.detectDirection(direction);
		});
		this.preventDefaultScroll(function(direction) {
			parent.detectDirection(direction);
		});
	}

	detectDirection(direction) {
		if (this.animating) return;
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

		setTimeout(function(){
			parent.animating = false;
		},600);
	}

	resize() {
		this.h = this.elems[0].getBoundingClientRect().height;
		this.hp = this.pagRect.getBoundingClientRect().height;
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
				} else {
					handler(4);
				}					   
			} else {
				if ( yDiff > 0 ) {
					handler(3);
				} else { 
					handler(1);
				}																 
			}
			xDown = null;
			yDown = null;											 
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
					parent.prev = parent.now;
					parent.now = parent.amount - 1;
					parent.transform(1); 
					break; }//end
				case 36: {
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