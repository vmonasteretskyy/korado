<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=1">
	<meta name="description" content="">
	<title>Korado - V</title>
	<!-- <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"> -->
	<!-- Open Graph -->
	<meta name="og:type" content="website">
	<meta name="og:title" content="Korado - V">
	<meta name="og:description" content="Системы отопления">
	<meta name="og:url" content="">
	<meta name="og:site_name" content="Korado - V">
	<meta name="og:locale" content="uk_UA">
	<meta name="og:image" content="./assets/img/logo_x2.png">
	<!-- Open Graph -->
	<!-- <meta name="theme-color" content="#000000"> -->
	<link rel="stylesheet" type="text/css" href="./assets/fonts/akrobat/akrobat.css">
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="./assets/fonts/fontello/fontello.css">
	<!-- <link rel="stylesheet" type="text/css" href="./assets/fonts/f2/fontello.css"> -->
	<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.0/nouislider.min.css">
	<link rel="stylesheet" type="text/css" href="./assets/styles/style.css">
	<link rel="stylesheet" type="text/css" href="./assets/styles/desc.css">
	<link rel="stylesheet" type="text/css" href="./assets/styles/media.css">
	<script>var onDom=[],onLoad=[],onResize=[];</script>
</head>


<!-- if (homepage) {add "home first" to body classlist} -->
<!-- <body class="home first"> -->
<body>

<div id="menu">
	<button id="close-menu" class="mob">
		Закрыть
	</button>
	<nav id="menu-nav">
		<ul class="menu-ul">
			<li class="menu-li"><a href="">Каталог</a></li>
			<li class="menu-li">
				<a href="">Информация</a>
				<button class="menu-list-btn icon-triangle-t" type="button"></button>
				<div class="menu-list-hider hidden">
					<ul class="menu-list">
						<li><a href="">Акционные Предложения</a></li>
						<li><a href="">Уцененные товары с дисконтом</a></li>
					</ul>
				</div>
			</li>
			<li class="menu-li"><a href="">Запасные части и дополнительные комплектующие к оборудованию</a></li>
			<li class="menu-li"><a href="">Конвекторы</a></li>
			<li class="menu-li"><a href="">Локальные вентиляционные установки</a></li>
			<li class="menu-li"><a href="">Полотенцесушители</a></li>
			<li class="menu-li"><a href="">Радиаторы</a></li>
		</ul>
	</nav>



	<div id="menu-mob-btns" class="mob">
		<button id="menu-search" type="button">
			<div class="icon icon-search"></div>
			<span>Поиск по каталогу</span>
		</button>
		<button id="menu-login" type="button">
			<div class="icon icon-login"></div>
			<span>Личный кабинет</span>
		</button>
		<div class="menu-currency">
			<button class="menu-currency-btn active">UAH</button>
			<button class="menu-currency-btn">USD</button>
			<button class="menu-currency-btn">EUR</button>
		</div>
		<button id="menu-cart" type="button">
			<div class="icon icon-cart"></div>
			<span>Корзина</span>
		</button>
	</div>



	<div id="menu-left">
		<a>Акционные предложения</a>
		<a>Уцененные товары с дисконтом</a>
	</div>
	<div id="menu-right">
		<a>Получить промо-код</a>
	</div>

	<nav id="menu-top-nav" class="mob">
		<ul>
			<li><a href="">Контактная информация</a></li>
			<li><a href="">Заказать обратный звонок</a></li>
			<li><a href="">Время работы</a></li>
			<li><a href="">Доставка и оплата</a></li>
			<li><a href="">Консультация специалиста</a></li>
		</ul>
	</nav>
</div>

<header>
	<!-- top-nav exists only on home page -->
	<!-- <div id="top-nav">
		<nav>
			<ul>
				<li><a href="">Контактная информация</a></li>
				<li><a href="">Заказать обратный звонок</a></li>
				<li><a href="">Время работы</a></li>
				<li><a href="">Доставка и оплата</a></li>
				<li><a href="">Консультация специалиста</a></li>
			</ul>
		</nav>
	</div> -->

	<div id="top-bar">
		<button id="menu-btn" type="button">
			<div class="menu-btn-line"></div>
			<div class="menu-btn-line"></div>
			<div class="menu-btn-line"></div>
			<span>Меню</span>
		</button>
		<div id="top-phone">
			<div class="icon icon-phone"></div>
			<a href="tel:+380937463646">(093) 746 36 46</a>
			<a href="tel:+380937463646">(093) 746 36 46</a>
		</div>
		<button id="top-search" type="button">
			<div class="icon icon-search"></div>
			<span>Поиск по каталогу</span>
		</button>
		<a class="logo" href="">
			<img src="./assets/img/logo.svg">
		</a>
		<button id="top-login" type="button">
			<div class="icon icon-login"></div>
			<span>Приветствую, войдите в кабинет</span>
		</button>
		<div id="top-currency">
			<div id="top-currency-img" style="background-image: url(./assets/img/currency/uah.svg)"></div>
			<div id="top-currency-col">
				<button class="top-currency-btn" type="button">USD</button>
				<button class="top-currency-btn" type="button">EUR</button>
			</div>
		</div>
		<button id="top-cart" type="button">
			<div class="icon icon-cart"></div>
			<span id="top-cart-amount">0</span>
			<span id="top-cart-sum">0.00 грн</span>
		</button>
	</div>
</header>