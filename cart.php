<?php include 'header.php'; ?>

<?php include './components/breadcrumb.php'; ?>

<section class="personal">
	<div class="wrap">
		<button type="button" id="open-personal" class="icon-person mob"></button>
		<div class="personal-left-wrap">
			<div class="personal-left">
				<a class="pl-elem icon-login" href="">
					<span>Вход</span>
				</a>
				<a class="pl-elem" href="">
					<span>Регистрация</span>
				</a>
				<a class="pl-elem" href="">
					<span>Забыли пароль?</span>
				</a>
				<a class="pl-elem" href="">
					<span>Моя информация</span>
				</a>
				<a class="pl-elem icon-cart active" href="">
					<span>Корзина</span>
				</a>
				<a class="pl-elem icon-heart-empty" href="">
					<span>Избранное</span>
				</a>
				<a class="pl-elem" href="">
					<span>История заказов</span>
				</a>
				<a class="pl-elem" href="">
					<span>Выход</span>
				</a>
			</div>
		</div>

		<div class="personal-cart">
			<div class="pcart-top">
				<span class="pcart-t-title">Товар</span>
				<span class="pcart-t-count">Количество</span>
				<span class="pcart-t-price">Цена</span>
				<span class="pcart-t-sum">Сума</span>
			</div>

			<div class="pcart-elems" >
				<div class="pcart-elem" data-id="" data-price="1950">
					<div class="img">
						<img src="./assets/img/cart/i1.png" alt="">
					</div>
					<span class="pcart-title">Радиатор Radik Plan VKL</span>
					<div class="pcart-count-row">
						<button type="button" class="minus"></button>
						<input type="text" class="inum" value="1">
						<button type="button" class="plus"></button>
					</div>
					<div class="pcart-price-row">
						<span class="pcart-price">1950 <span>грн</span></span>
					</div>
					<span class="pcart-elem-total"><span class="petjs">1950</span> <span>грн</span></span>
					<button type="button" class="pcart-trash icon-trash"></button>
				</div>

				<div class="pcart-elem" data-id="" data-price="2950">
					<div class="img">
						<img src="./assets/img/cart/i1.png" alt="">
					</div>
					<span class="pcart-title">Радиатор Koratherm Horizontal</span>
					<div class="pcart-count-row">
						<button type="button" class="minus"></button>
						<input type="text" class="inum" value="1">
						<button type="button" class="plus"></button>
					</div>
					<div class="pcart-price-row">
						<span class="pcart-old-price">3100 грн</span>
						<span class="pcart-price">2950 <span>грн</span></span>
					</div>
					<span class="pcart-elem-total"><span class="petjs">2950</span> <span>грн</span></span>
					<button type="button" class="pcart-trash icon-trash"></button>
				</div>

			</div>
			<div class="pcart-under">
				<div class="pcart-under-row">
					<div class="pcart-promo-wrap">
						Ввести промокод
						<input type="text" name="promo">
					</div>
					<div class="pcart-under-price">
						<span class="pcart-total-text">Всего:</span>
						<span class="pcart-total-price"><span class="ptpjs"></span> <span>грн</span></span>
					</div>
				</div>
				<div class="pcart-under-btns">
					<a class="btn default" href="">Вернуться к покупкам</a>
					<a class="btn black" href="">Оформить заказ</a>
				</div>
			</div>

		</div>
	</div>
</section>

<?php include 'footer.php'; ?>