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
	<link rel="stylesheet" type="text/css" href="https://unpkg.com/swiper/swiper-bundle.min.css">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.0/nouislider.min.css">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css">
	<link rel="stylesheet" type="text/css" href="./assets/styles/style.css?ver=1003">
	<link rel="stylesheet" type="text/css" href="./assets/styles/desc.css?ver=1003">
	<link rel="stylesheet" type="text/css" href="./assets/styles/media.css?ver=1003">
	<script>var onDom=[],onLoad=[],onResize=[];</script>
</head>


<!-- if (homepage) {add "home first" to body classlist} -->
<!-- <body class="home first"> -->
<?php if ($page == "home") {
	echo "<body class='home first'>";
} else {
	echo "<body class='first'>";
}
?>

<div id="eclipse"></div>

<div class="popup" id="pentertype">
	<button type="button" class="pcross" id="close-pentertype"></button>
	<div class="pwrap">
		<h2>Вход</h2>
		<p>Для входа кабинет выберите один из вариантов</p>
		<button type="button" class="btn black" id="open-plog">Войти как зарегестрированный пользователь</button>
		<span class="or">или</span>
		<button type="button" class="btn green" id="open-preg">Создать учетную запись</button>
	</div>
</div>

<div class="popup" id="plogin">
	<button type="button" class="pcross" id="close-plog"></button>
	<div class="pwrap">
		<h2>Вход для зарегестрированного пользователя</h2>
		<p>Для входа кабинет введите свой логин и пароль</p>
		<form id="login-form" action="" method="get">
			<div class="input">
				<input type="text" name="login">
				<label>Логин</label>
				<span class="input-error">Возникла ошибка с вводом логина</span>
				<div class="clear-input"></div>
			</div>
			<div class="input">
				<input type="password" name="password">
				<label>Пароль</label>
				<span class="input-error">Возникла ошибка с вводом пароля</span>
				<div class="clear-input"></div>
			</div>
			<button type="submit" class="btn black">Войти</button>
			<div class="form-actions-row">
				<label class="fcbl far-text">
					<input class="cb" type="checkbox" name="remember">
					<div class="cbm icon-ok"></div>
					Запомнить меня
				</label>
				<a class="far-text" href="">Забыли пароль?</a>
			</div>
		</form>
		<span class="or">или</span>
		<button type="button" class="btn green" id="open-preg2">Создать учетную запись</button>
	</div>
</div>

<div class="popup" id="preg">
	<button type="button" class="pcross" id="close-preg"></button>
	<div class="pwrap">
		<h2>Новая учетная запись</h2>
		<p>Для создания учетной записи обязательные поля к заполнению</p>
		<form id="reg-form" action="" method="get">
			<div class="input">
				<input type="text" name="fio">
				<label>Фио</label>
				<span class="input-error">Возникла ошибка с вводом ФИО</span>
				<div class="clear-input"></div>
			</div>
			<div class="input iwithdescr">
				<input type="text" name="tel">
				<label>Телефон</label>
				<span class="input-error">Возникла ошибка с вводом пароля</span>
				<span class="input-descr">введите номер в международном формате +380</span>
				<div class="clear-input"></div>
			</div>
			<div class="input">
				<input type="text" name="email">
				<label>EMAIL</label>
				<span class="input-error">Возникла ошибка с вводом EMAIL</span>
				<div class="clear-input"></div>
			</div>
			<div class="input">
				<input type="password" name="password">
				<label>Пароль</label>
				<span class="input-error">Возникла ошибка с вводом пароля</span>
				<div class="clear-input"></div>
			</div>
			<div class="input">
				<input type="password" name="repassword">
				<label>Подтверждение пароля</label>
				<span class="input-error">Пароли не совпадают</span>
				<div class="clear-input"></div>
			</div>
			<div class="input select icon-triangle-b">
				<select>
					<option>Вид деятельности</option>
					<option>Деятельность 1</option>
					<option>Деятельность 2</option>
					<option>Деятельность 3</option>
				</select>
			</div>
			<button type="submit" class="btn green">Создать учетную запись</button>
		</form>
	</div>
</div>

<!-- b-menu------------------------------------------------ -->
<div id="menu">
	<button id="close-menu" class="mob">
		Закрыть
	</button>
	<nav id="menu-nav">
		<ul class="menu-ul">
			<li class="menu-li"><a href="">Каталог</a></li>
			<!-- <li class="menu-li">
				<a href="">Информация</a>
				<button class="menu-list-btn icon-triangle-t" type="button"></button>
				<div class="menu-list-hider hidden">
					<ul class="menu-list">
						<li><a href="about.php">О производстве</a></li>
						<li><a href="about.php">О нас</a></li>
						<li><a href="download.php">Каталоги продукции</a></li>
					</ul>
				</div>
			</li> -->
			<li class="menu-li"><a href="">Запасные части и дополнительные комплектующие к оборудованию</a></li>
			<li class="menu-li"><a href="">Конвекторы</a></li>
			<li class="menu-li"><a href="">Локальные вентиляционные установки</a></li>
			<li class="menu-li"><a href="">Полотенцесушители</a></li>
			<li class="menu-li"><a href="">Радиаторы</a></li>
			<!-- <div class="menu-currency mob">
				<button class="menu-currency-btn active">UAH</button>
				<button class="menu-currency-btn">USD</button>
				<button class="menu-currency-btn">EUR</button>
			</div> -->
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
		<button id="menu-heart" type="button">
			<div class="icon icon-heart-line"></div>
			<span>Избранные товары</span>
		</button>
		<button id="menu-cart" type="button">
			<div class="icon icon-cart"></div>
			<span>Корзина</span>
		</button>
	</div>



	<div id="menu-left">
		<a href="category-filter.php">Акционные предложения</a>
		<a href="category-filter.php">Уцененные товары с дисконтом</a>
	</div>
	<div id="menu-right">
		<a href="/index.php#6">Получить промо-код</a>
	</div>

	<nav id="menu-top-nav" class="mob">
		<ul>
			<li><a href="contacts.php">Контактная информация</a></li>
			<li><a href="">Заказать обратный звонок</a></li>
			<li><a href="contacts.php">Время работы</a></li>
			<li><a href="">Доставка и оплата</a></li>
			<li><a href="">Консультация специалиста</a></li>
		</ul>
	</nav>
</div>
<!-- e-menu------------------------------------------------ -->

<!-- HEADER -->
<header>

	<div id="top-nav">
		<nav>
			<ul>
				<li><a href="">Контактная информация</a></li>
				<li><a href="">Заказать обратный звонок</a></li>
				<li><a href="">Время работы</a></li>
				<li><a href="">Доставка и оплата</a></li>
				<li><a href="">Консультация специалиста</a></li>
			</ul>
		</nav>
	</div>

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
		<div id="top-currency">
			<div id="top-currency-img" style="background-image: url(./assets/img/currency/uah.svg)"></div>
			<div id="top-currency-col">
				<button class="top-currency-btn" type="button">USD</button>
				<button class="top-currency-btn" type="button">EUR</button>
			</div>
		</div>
		<a class="logo" href="">
			<img src="./assets/img/logo.svg">
		</a>
		<button id="top-login" type="button">
			<div class="icon icon-login"></div>
			<span>Приветствую, войдите в кабинет</span>
		</button>
		<button id="top-heart" type="button">
			<div class="icon icon-heart-line"></div>
			<span>Избранные товары</span>
		</button>
		<button id="top-cart" type="button">
			<div class="icon icon-cart"></div>
			<span id="top-cart-amount">0</span>
			<span id="top-cart-sum">0.00 грн</span>
		</button>
	</div>
</header>

<div id="search-wrap" class="">
	<form id="search">
		<input id="isearch" type="search" name="search" placeholder="Введите">
		<button type="submit" class="icon-search"></button>
		<button type="button" id="clear-search"></button>
	</form>
	<div class="search-row">
		<div class="search-col">
			<h3>Категории</h3>
			<hr>
			<div class="breadcrumb-search">
				<span class="bc-search"><i>Р</i>адиаторы</span>
				<ul class="breadcrumb">
					<li><a class="icon-home" href="/"></a></li>
					<li class="icon-arr-r"><a href="">Каталог</a></li>
					<li class="icon-arr-r"><a href="">Радиаторы</a></li>
				</ul>
			</div>
			<h3>Продукты</h3>
			<hr>
			<div class="items-prods-search">
				<a href="" class="ips">
					<div class="img">
						<img src="./assets/img/cart/i1.png" alt="">
					</div>
					<span class="ips-title"><i>Р</i>АДИАТОР 33-K 300x900</span>
					<div class="ips-price-row">
						<span class="ips-price">2950 <span>грн</span></span>
					</div>
				</a>
				
				<a href="" class="ips">
					<div class="img">
						<img src="./assets/img/cart/i1.png" alt="">
					</div>
					<span class="ips-title"><i>Р</i>АДИАТОР 33-K 300x900</span>
					<div class="ips-price-row">
						<span class="ips-price">2950 <span>грн</span></span>
					</div>
				</a>
				
				<a href="" class="ips">
					<div class="img">
						<img src="./assets/img/cart/i1.png" alt="">
					</div>
					<span class="ips-title"><i>Р</i>АДИАТОР 33-K 300x900 LOREEEEMEMEE</span>
					<div class="ips-price-row">
						<span class="ips-price-old">3100 грн</span>
						<span class="ips-price">2950 <span>грн</span></span>
					</div>
				</a>
			</div>
		</div>
		<div class="search-col">
			<span class="h3">Категория: <span>РАДИАТОРЫ</span></span>
			<div class="sc-items">
			<a class="sc-item" href="">
					<div class="img">
						<img src="./assets/img/cart/i1.png" alt="">
					</div>
					<span class="sc-item-title">РАДИАТОР 33-K 300x900</span>
					<div class="sc-item-price-row">
						<span class="sc-item-price">2950 <span>грн</span></span>
					</div>
				</a>
				
				<a class="sc-item" href="">
					<div class="img">
						<img src="./assets/img/cart/i1.png" alt="">
					</div>
					<span class="sc-item-title">РАДИАТОР 33-K 300x900</span>
					<div class="sc-item-price-row">
						<span class="sc-item-price">2950 <span>грн</span></span>
					</div>
				</a>
				<a class="sc-item" href="">
					<div class="img">
						<img src="./assets/img/cart/i1.png" alt="">
					</div>
					<span class="sc-item-title">РАДИАТОР 33-K 300x900</span>
					<div class="sc-item-price-row">
						<span class="sc-item-price-old">3100 грн</span>
						<span class="sc-item-price">2950 <span>грн</span></span>
					</div>
				</a>
				
				<a class="sc-item" href="">
					<div class="img">
						<img src="./assets/img/cart/i1.png" alt="">
					</div>
					<span class="sc-item-title">РАДИАТОР 33-K 300x900</span>
					<div class="sc-item-price-row">
						<span class="sc-item-price-old">3100 грн</span>
						<span class="sc-item-price">2950 <span>грн</span></span>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>