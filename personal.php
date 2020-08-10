<?php include 'header.php'; ?>

<?php include './components/breadcrumb.php'; ?>

<section class="personal pform">
	<div class="wrap">
		<button type="button" id="open-personal" class="icon-person mob"></button>
		<div class="personal-left-wrap">
			<div class="personal-left">
				<a class="pl-elem icon-login active" href="">
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
				<a class="pl-elem icon-cart" href="">
					<span>Корзина</span>
				</a>
				<a class="pl-elem icon-heart-empty" href="">
					<span>Избранное</span>
				</a>
				<a class="pl-elem" href="">
					<span>История заказов</span>
				</a>
				<a class="pl-elem" href="">
					<span>Использовать промокод</span>
				</a>
				<a class="pl-elem" href="">
					<span>Выход</span>
				</a>
			</div>
		</div>

		<div class="personal-center">
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
			</form>
			<span class="or">или</span>
			<a class="btn green" href="">Создать учетную запись</a>
		</div>		
	</div>
</section>

<?php include 'footer.php'; ?>