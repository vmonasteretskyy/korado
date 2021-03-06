<?php $page = "home"; ?>

<?php include 'header.php'; ?>



<div id="left-bar">
	<a class="left-elem" href="">
		<div class="left-elem-bg"></div>
		<div class="icon icon-radiator"></div>
		<span class="left-elem-title icon-triangle-r">Радиаторы</span>
	</a>
	<a class="left-elem" href="">
		<div class="left-elem-bg"></div>
		<div class="icon icon-convector"></div>
		<span class="left-elem-title icon-triangle-r">Конвекторы</span>
	</a>
	<a class="left-elem" href="">
		<div class="left-elem-bg"></div>
		<div class="icon icon-heatertt"></div>
		<span class="left-elem-title icon-triangle-r">Полотенцесушители</span>
	</a>
	<a class="left-elem" href="">
		<div class="left-elem-bg"></div>
		<div class="icon icon-localvent"></div>
		<span class="left-elem-title icon-triangle-r">Локальные вентиляционные установки</span>
	</a>
	<a class="left-elem" href="">
		<div class="left-elem-bg"></div>
		<div class="icon icon-tools"></div>
		<span class="left-elem-title icon-triangle-r">Запасные части к оборудованию</span>
	</a>
</div>

<div id="right-bar">
	<div id="right-bar-line"></div>
	<div id="right-bar-rectangle"></div>
	<div id="right-bar-elems">
		<!-- ромб зверху -->
		<div class="right-bar-elem active">
			<span class="right-bar-elem-text">Главная</span>
			<div class="right-bar-elem-nums">
				<span class="rbe-nums-current"></span>
				<span class="rbe-nums-all"></span>
			</div>
		</div>
		<div class="right-bar-elem">
			<span class="right-bar-elem-text">Продукция</span>
			<div class="right-bar-elem-nums">
				<span class="rbe-nums-current"></span>
				<span class="rbe-nums-all"></span>
			</div>
		</div>
		<div class="right-bar-elem">
			<span class="right-bar-elem-text">Информация</span>
			<div class="right-bar-elem-nums">
				<span class="rbe-nums-current"></span>
				<span class="rbe-nums-all"></span>
			</div>
		</div>
		<div class="right-bar-elem">
			<span class="right-bar-elem-text">Новинки</span>
			<div class="right-bar-elem-nums">
				<span class="rbe-nums-current"></span>
				<span class="rbe-nums-all"></span>
			</div>
		</div>
		<div class="right-bar-elem">
			<span class="right-bar-elem-text">Акционные товары</span>
			<div class="right-bar-elem-nums">
				<span class="rbe-nums-current"></span>
				<span class="rbe-nums-all"></span>
			</div>
		</div>
		<div class="right-bar-elem">
			<span class="right-bar-elem-text">Получить промо-код</span>
			<div class="right-bar-elem-nums">
				<span class="rbe-nums-current"></span>
				<span class="rbe-nums-all"></span>
			</div>
		</div>
	</div>
</div>

<section class="main scroll-hider">
	<div class="scroll-parent">

		<!-- 1 -->
		<section class="scroll-elem">
			<div class="bg">
				<div class="bg1" style="background-image: url(./assets/img/main/bg.jpg)"></div>
			</div>
			<div class="rhomb-wrap rhomb-big">
				<div class="rhomb-bg"></div>
				<div class="rhomb-content">
					<h1>Korado - v</h1>
					<h2>Безупречное отопление для вашего дома</h2>
				</div>
				<button class="rhomb-btn" type="button"></button>
			</div>
		</section>

		<!-- 2 -->
		<section class="scroll-elem fading-bg" name="main-second">
			<div class="bg mbg2">
				<div class="bg1 white025 active" style="background-image: url(./assets/img/main/bg2.jpg)"></div>
				<div class="bg1 white025" style="background-image: url(./assets/img/main/bg5.jpg)"></div>
				<div class="bg1 white025" style="background-image: url(./assets/img/main/bg4.jpg)"></div>
				<div class="bg1 white025" style="background-image: url(./assets/img/main/bg4.jpg)"></div>
				<div class="bg1 white025" style="background-image: url(./assets/img/main/bg4.jpg)"></div>
				<div class="bg1 white025" style="background-image: url(./assets/img/main/bg4.jpg)"></div>
				<div class="bg1 white025" style="background-image: url(./assets/img/main/bg4.jpg)"></div>
				<div class="bg1 white025" style="background-image: url(./assets/img/main/bg4.jpg)"></div>
			</div>
			
			<div class="swiper-outer desc" id="mvso2">
				<button class="swbtn swbtn-prev icon-triangle-s-t" id="nvsf2-prev" type="button"></button>
				<div class="swiper-container mvs" id="mvs2">

					<div class="swiper-wrapper">
						<div class="swiper-slide ssdh" data-href="h1">Локальные вентиляционные установки</div>
						<div class="swiper-slide ssdh" data-href="h2">Запасные части к оборудованию</div>
						<div class="swiper-slide ssdh" data-href="h3">Радиаторы</div>
						<div class="swiper-slide ssdh" data-href="h4">Конвекторы</div>
						<div class="swiper-slide ssdh" data-href="h5">Полотенцесушители</div>
						<div class="swiper-slide ssdh" data-href="h6">TestCategory6</div>
						<div class="swiper-slide ssdh" data-href="h7">TestCategory7</div>
						<div class="swiper-slide ssdh" data-href="h8">TestCategory8</div>
					</div>
				</div>
				<button class="swbtn swbtn-next icon-triangle-s-b" id="nvsf2-next" type="button"></button>
			</div>

			<div class="rhomb-wrap rhomb-med nvsft" id="nvsft2">
				<div class="rhomb-bg">
					<div class="rhomb-bg-lwhite"></div>
					<div class="rhomb-bg-lblack"></div>
				</div>
				<div class="rhomb-bg-lines"></div>
				<div class="rhomb-content">
					<div class="neu-vsfader nvsf2">

						<div class="neu-vsfader-elem nvsfe2 active">
							<h2>Локальные вентиляционные установки</h2>
							<ul class="rhomb-ul">
								<li><a href="">TestSubCat1</a></li>
								<li><a href="">TestSubCat2222</a></li>
								<li><a href="">TestSubCat3</a></li>
							</ul>
						</div>

						<div class="neu-vsfader-elem nvsfe2">
							<h2>Запасные части к оборудованию</h2>
							<ul class="rhomb-ul">
								<li><a href="">TestSubCat4</a></li>
								<li><a href="">TestSubCat5</a></li>
								<li><a href="">TestSubCat6</a></li>
							</ul>
						</div>

						<div class="neu-vsfader-elem nvsfe2">
							<h2>Радиаторы</h2>
							<ul class="rhomb-ul">
								<li><a href="">Дизайнерские радиаторы</a></li>
								<li><a href="">Радиаторы оцинкованые</a></li>
								<li><a href="">Радиаторы с гладкой лицевой панелью</a></li>
							</ul>
						</div>

						<div class="neu-vsfader-elem nvsfe2">
							<h2>Конвекторы</h2>
							<ul class="rhomb-ul">
								<li><a href="">TestSubCat10</a></li>
								<li><a href="">TestSubCat11</a></li>
								<li><a href="">TestSubCat12</a></li>
							</ul>
						</div>
						
						<div class="neu-vsfader-elem nvsfe2">
							<h2>Полотенцесушители</h2>
							<ul class="rhomb-ul">
								<li><a href="">TestSubCat13</a></li>
								<li><a href="">TestSubCat14</a></li>
								<li><a href="">TestSubCat15</a></li>
							</ul>
						</div>
						
						<div class="neu-vsfader-elem nvsfe2">
							<h2>TestCategory6</h2>
							<ul class="rhomb-ul">
								<li><a href="">TestSubCat16</a></li>
								<li><a href="">TestSubCat17</a></li>
								<li><a href="">TestSubCat18</a></li>
							</ul>
						</div>
						
						<div class="neu-vsfader-elem nvsfe2">
							<h2>TestCategory7</h2>
							<ul class="rhomb-ul">
								<li><a href="">TestSubCat19</a></li>
								<li><a href="">TestSubCat20</a></li>
								<li><a href="">TestSubCat21</a></li>
							</ul>
						</div>
						
						<div class="neu-vsfader-elem nvsfe2">
							<h2>TestCategory8</h2>
							<ul class="rhomb-ul">
								<li><a href="">TestSubCat22</a></li>
								<li><a href="">TestSubCat23</a></li>
								<li><a href="">TestSubCat24</a></li>
							</ul>
						</div>

					</div>
				</div>
			</div>

			<a class="btn black nvsf2-btnlnk" id="nvsf2-btn" href="">Смотреть</a>

			<div class="nvs-bar bmob" id="nvs-bar2">
				<div class="nvs-bar-line" id="nvs-bar-line2"></div>
				<div class="nvs-bar-rectangle" id="nvs-bar-rectangle2"></div>
				<div class="nvs-bar-elems">
					<div class="nvs-bar-elem nvse2 active">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">8</span>
					</div>
					<div class="nvs-bar-elem nvse2">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">8</span>
					</div>
					<div class="nvs-bar-elem nvse2">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">8</span>
					</div>
					<div class="nvs-bar-elem nvse2">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">8</span>
					</div>
					<div class="nvs-bar-elem nvse2">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">8</span>
					</div>
					<div class="nvs-bar-elem nvse2">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">8</span>
					</div>
					<div class="nvs-bar-elem nvse2">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">8</span>
					</div>
					<div class="nvs-bar-elem nvse2">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">8</span>
					</div>
				</div>
			</div>
		</section>

		<!-- 3 -->
		<section class="scroll-elem">
			<div class="main-wrap">
				<div class="top-img-bg" style="background-image: url(./assets/img/main/bg3.jpg)"></div>

				<!-- <div class="nvsww3 desc">
					<button class="swbtn swbtn-prev icon-triangle-s-t" id="nvsf3-prev" type="button"></button>
					<div class="neu-vslider-hider nvshgrad nvsh3">
						div class="neu-vslider-trans nvst3">
							<ul class="neu-vslider nvs3">
								<li class="swiper-slide neu-vslider-a nvsa3" data-href="h1">О Нас</li>
								<li class="swiper-slide neu-vslider-a nvsa3" data-href="h2">О бренде<li>
								<li class="swiper-slide neu-vslider-a nvsa3" data-href="h3">Техническая информация</li>
								<li class="swiper-slide neu-vslider-a nvsa3" data-href="h4">TestCategory4</li>
								<li class="swiper-slide neu-vslider-a nvsa3" data-href="h5">TestCategory5</li>
							</ul>
						</div>
					</div>
					<button class="swbtn neu-vslider-next icon-triangle-s-b" id="nvsf3-next" type="button"></button>
				</div> -->

				<div class="swiper-outer desc" id="mvso3">
					<button class="swbtn swbtn-prev icon-triangle-s-t" id="nvsf3-prev" type="button"></button>
					<div class="swiper-container mvs" id="mvs3">

						<div class="swiper-wrapper">
							<div class="swiper-slide ssdh" data-href="h1">О Нас</div>
							<div class="swiper-slide ssdh" data-href="h2">О бренде</div>
							<div class="swiper-slide ssdh" data-href="h3">Техническая информация</div>
							<div class="swiper-slide ssdh" data-href="h4">TestCategory4</div>
							<div class="swiper-slide ssdh" data-href="h5">TestCategory5</div>
						</div>
					</div>
					<button class="swbtn swbtn-next icon-triangle-s-b" id="nvsf3-next" type="button"></button>
				</div>

				<div class="main-wrap-text">
					<div class="neu-vsfader nvsf3" id="nvsft3">

						<div class="neu-vsfader-elem nvsfe3 active">
							<h3 class="bmob">О Нас</h3>
							<p>1Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor quasi accusantium labore tempore soluta quidem consectetur, odio, cum perspiciatis odit minima quos. Tempora voluptatem rerum vero iure! Harum, porro?</p>
							<a href="" class="btn black">Больше</a>
						</div>

						<div class="neu-vsfader-elem nvsfe3">
							<h3 class="bmob">О бренде</h3>
							<p>1Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							<a href="" class="btn black">Больше</a>
						</div>

						<div class="neu-vsfader-elem nvsfe3">
							<h3 class="bmob">Техническая информация</h3>
							<p>1Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor quasi accusantium labore tempore soluta quidem consectetur, odio, cum perspiciatis odit minima quos. Tempora voluptatem rerum vero iure! Harum, porro?1Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor quasi accusantium labore tempore soluta quidem consectetur, odio, cum perspiciatis odit minima quos. Tempora voluptatem rerum vero iure! Harum, porro?1Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor quasi accusantium labore tempore soluta quidem consectetur, odio, cum perspiciatis odit minima quos. Tempora voluptatem rerum vero iure! Harum, porro?1Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor quasi accusantium labore tempore soluta quidem consectetur, odio, cum perspiciatis odit minima quos. Tempora voluptatem rerum vero iure! Harum, porro?</p>
							<a href="" class="btn black">Больше</a>
						</div>

						<div class="neu-vsfader-elem nvsfe3">
							<h3 class="bmob">TestCategory4</h3>
							<p>1Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor quasi accusantium labore tempore soluta quidem consectetur, odio, cum perspiciatis odit minima quos. Tempora voluptatem rerum vero iure! Harum, porro?</p>
							<a href="" class="btn black">Больше</a>
						</div>

						<div class="neu-vsfader-elem nvsfe3">
							<h3 class="bmob">TestCategory5</h3>
							<p>1Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor quasi accusantium labore tempore soluta quidem consectetur, odio, cum perspiciatis odit minima quos. Tempora voluptatem rerum vero iure! Harum, porro?</p>
							<a href="" class="btn black">Больше</a>
						</div>

					</div>
				</div>
			</div>

			<div class="nvs-bar bmob" id="nvs-bar3">
				<div class="nvs-bar-line" id="nvs-bar-line3"></div>
				<div class="nvs-bar-rectangle" id="nvs-bar-rectangle3"></div>
				<div class="nvs-bar-elems">
					<div class="nvs-bar-elem nvse3 active">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
					<div class="nvs-bar-elem nvse3">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
					<div class="nvs-bar-elem nvse3">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
					<div class="nvs-bar-elem nvse3">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
					<div class="nvs-bar-elem nvse3">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
				</div>
			</div>
		</section>

		<!-- 4 -->
		<section class="scroll-elem main-items-section">
			<div class="bg mbg4">
				<div class="bg1 white025 bgoffsetleftmob active" style="background-image: url(./assets/img/main/bg4.jpg)"></div>
				<div class="bg1 white025 bgoffsetleftmob" style="background-image: url(./assets/img/main/bg5.jpg)"></div>
				<div class="bg1 white025 bgoffsetleftmob" style="background-image: url(./assets/img/main/bg4.jpg)"></div>
				<div class="bg1 white025 bgoffsetleftmob" style="background-image: url(./assets/img/main/bg5.jpg)"></div>
				<div class="bg1 white025 bgoffsetleftmob" style="background-image: url(./assets/img/main/bg4.jpg)"></div>
			</div>

			
			<div class="swiper-outer desc" id="mvso4">
				<button class="swbtn swbtn-prev icon-triangle-s-t" id="nvsf4-prev" type="button"></button>
				<div class="swiper-container mvs" id="mvs4">

					<div class="swiper-wrapper">
						<div class="swiper-slide ssdh" data-href="h1">Локальные вентиляционные установки <b>Korado</b></div>
						<div class="swiper-slide ssdh" data-href="h2">О бренде</div>
						<div class="swiper-slide ssdh" data-href="h3">Техническая информация</div>
						<div class="swiper-slide ssdh" data-href="h4">TestCategory4</div>
						<div class="swiper-slide ssdh" data-href="h5">TestCategory5</div>
					</div>
				</div>
				<button class="swbtn swbtn-next icon-triangle-s-b" id="nvsf4-next" type="button"></button>
			</div>

			<div class="neu-vsfader nvsf4" id="nvsft4">

				<!-- beg-elem -->
				<div class="neu-vsfader-elem nvsfe4 active">
					<span class="nvsftitle">Локальные вентиляционные установки <b>Korado</b></span>
					<div class="main-wrap-items">
						
						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<!-- <div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div> -->

					</div>
					<a class="btn black main-more" id="nvsfe3-btn" href="">Еще новинки</a>
				</div>
				<!-- end-elem -->
				<!-- beg-elem -->
				<div class="neu-vsfader-elem nvsfe4">
					<span class="nvsftitle">О бренде</span>
					<div class="main-wrap-items">

						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>

						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>

						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>

						<!-- <div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div> -->

					</div>
					<a class="btn black main-more" id="nvsfe3-btn" href="">Еще новинки</a>
				</div>
				<!-- end-elem -->
				<!-- beg-elem -->
				<div class="neu-vsfader-elem nvsfe4">
					<span class="nvsftitle">Техническая информация</span>
					<div class="main-wrap-items">

						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>

						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>

						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<!-- <div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div> -->

					</div>
					<a class="btn black main-more" id="nvsfe3-btn" href="">Еще новинки</a>
				</div>
				<!-- end-elem -->
				<!-- beg-elem -->
				<div class="neu-vsfader-elem nvsfe4">
					<span class="nvsftitle">TestCategory4</span>
					<div class="main-wrap-items">

						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>

						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>

						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<!-- <div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div> -->

					</div>
					<a class="btn black main-more" id="nvsfe3-btn" href="">Еще новинки</a>
				</div>
				<!-- end-elem -->
				<!-- beg-elem -->
				<div class="neu-vsfader-elem nvsfe4">
					<span class="nvsftitle">TestCategory5</span>
					<div class="main-wrap-items">

						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>

						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>

						<div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<!-- <div class="item main-item">
							<div class="item-notification new">Новинка</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div> -->

					</div>
					<a class="btn black main-more" id="nvsfe3-btn" href="">Еще новинки</a>
				</div>
				<!-- end-elem -->
			</div>

			<div class="nvs-bar bmob" id="nvs-bar4">
				<div class="nvs-bar-line" id="nvs-bar-line4"></div>
				<div class="nvs-bar-rectangle" id="nvs-bar-rectangle4"></div>
				<div class="nvs-bar-elems">
					<div class="nvs-bar-elem nvse4 active">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
					<div class="nvs-bar-elem nvse4">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
					<div class="nvs-bar-elem nvse4">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
					<div class="nvs-bar-elem nvse4">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
					<div class="nvs-bar-elem nvse4">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
				</div>
			</div>

		</section>

		<!-- 5 -->
		<section class="scroll-elem main-items-section">
			<div class="bg mbg5">
				<div class="bg1 white025 active" style="background-image: url(./assets/img/main/bg5.jpg)"></div>
				<div class="bg1 white025" style="background-image: url(./assets/img/main/bg2-3.jpg)"></div>
				<div class="bg1 white025" style="background-image: url(./assets/img/main/bg5.jpg)"></div>
				<div class="bg1 white025" style="background-image: url(./assets/img/main/bg5.jpg)"></div>
				<div class="bg1 white025" style="background-image: url(./assets/img/main/bg5.jpg)"></div>
			</div>
			
			<div class="swiper-outer desc" id="mvso5">
				<button class="swbtn swbtn-prev icon-triangle-s-t" id="nvsf5-prev" type="button"></button>
				<div class="swiper-container mvs" id="mvs5">

					<div class="swiper-wrapper">
						<div class="swiper-slide ssdh" data-href="h1">Локальные вентиляционные установки <b>Korado</b></div>
						<div class="swiper-slide ssdh" data-href="h2">О бренде</div>
						<div class="swiper-slide ssdh" data-href="h3">Техническая информация</div>
						<div class="swiper-slide ssdh" data-href="h4">TestCategory4</div>
						<div class="swiper-slide ssdh" data-href="h5">TestCategory5</div>
					</div>
				</div>
				<button class="swbtn swbtn-next icon-triangle-s-b" id="nvsf5-next" type="button"></button>
			</div>

			<div class="neu-vsfader nvsf5" id="nvsft5">

				<!-- beg-elem -->
				<div class="neu-vsfader-elem nvsfe5 active">
					<span class="nvsftitle">Локальные вентиляционные установки <b>Korado</b></span>
					<div class="main-wrap-items">
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<!-- <div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div> -->

					</div>
					<a class="btn black main-more" id="nvsfe5-btn" href="">Еще новинки</a>
				</div>
				<!-- end-elem -->
				<!-- beg-elem -->
				<div class="neu-vsfader-elem nvsfe5">
					<span class="nvsftitle">О бренде</span>
					<div class="main-wrap-items">
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<!-- <div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div> -->

					</div>
					<a class="btn black main-more" id="nvsfe5-btn" href="">Еще новинки</a>
				</div>
				<!-- end-elem -->
				<!-- beg-elem -->
				<div class="neu-vsfader-elem nvsfe5">
					<span class="nvsftitle">Техническая информация</span>
					<div class="main-wrap-items">
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<!-- <div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div> -->

					</div>
					<a class="btn black main-more" id="nvsfe5-btn" href="">Еще новинки</a>
				</div>
				<!-- end-elem -->
				<!-- beg-elem -->
				<div class="neu-vsfader-elem nvsfe5">
					<span class="nvsftitle">TestCategory4</span>
					<div class="main-wrap-items">
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<!-- <div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div> -->

					</div>
					<a class="btn black main-more" id="nvsfe5-btn" href="">Еще новинки</a>
				</div>
				<!-- end-elem -->
				<!-- beg-elem -->
				<div class="neu-vsfader-elem nvsfe5">
					<span class="nvsftitle">TestCategory5</span>
					<div class="main-wrap-items">
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div>
						
						<!-- <div class="item main-item">
							<div class="item-notification sale">Акция</div>
							<button class="item-heart icon-heart-empty" type="button"></button>
							<img src="./assets/img/items/koratherm-horizontal1.jpg" alt="">
							<div class="item-stars">
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star"></div>
								<div class="item-is icon-star-empty"></div>
							</div>
							<span class="item-reviews">2 отзыва</span>
							<h4 class="item-title">Радиатор Koratherm Horizontal высотой 1000 мм</h4>
							<div class="item-price">
								<span class="item-old-price">1970 <span>грн</span></span>
								<span class="item-normal-price">1350 <span>грн</span></span>
							</div>
							<span class="item-views">24 просмотра</span>
							<button class="btn black item-buy" type="btn">Купить</button>
						</div> -->

					</div>
					<a class="btn black main-more" id="nvsfe5-btn" href="">Еще новинки</a>
				</div>
				<!-- end-elem -->

			</div>



			<div class="nvs-bar bmob" id="nvs-bar5">
				<div class="nvs-bar-line" id="nvs-bar-line5"></div>
				<div class="nvs-bar-rectangle" id="nvs-bar-rectangle5"></div>
				<div class="nvs-bar-elems">
					<div class="nvs-bar-elem nvse5 active">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
					<div class="nvs-bar-elem nvse5">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
					<div class="nvs-bar-elem nvse5">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
					<div class="nvs-bar-elem nvse5">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
					<div class="nvs-bar-elem nvse5">
						<span class="nvs-nums-current"></span>
						<span class="nvs-nums-all">5</span>
					</div>
				</div>
			</div>

		</section>

		<!-- 6 -->
		<section class="scroll-elem">
			<div class="top-img-bg" style="background-image: url(./assets/img/main/bg6.jpg)"></div>
			<div class="main-wrap-promo">
				<h2>Получите промо-код на скидку за подписку!</h2>
				<p>Мы отправим вам на почту персональную скидку <span class="red">скидку от 2% до 7%</span> на покупки на нашем сайте</p>
				<form id="get-promo">
					<div class="input">
						<input type="text" name="fullname">
						<label>Ваше полное им'я</label>
						<span class="input-error">Возникла ошибка с вводом имени</span>
						<div class="clear-input"></div>
					</div>
					<div class="input"> <!--add class "invalid" for error -->
						<input type="text" name="Email">
						<label>Email</label>
						<span class="input-error">Возникла ошибка с вводом Email адреса</span>
						<div class="clear-input"></div>
					</div>
					<button class="btn black" type="submit">Отправить</button>
				</form>
			</div>
		</section>

	</div>
</section>


<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script src="./assets/scripts/neuscript.js"></script>
<script src="./assets/scripts/script.js"></script>
</body>
</html>

<!-- NO FOOTER -->