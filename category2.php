<?php include 'header.php'; ?>
<!-- радиаторы2 -->

<?php 
$titleimg = "./assets/img/category/rad-soft-bg.jpg";
$title = "Полотенцесушители";
$titledescr = "Подберите лучший полотенцесушитель"; 
?>

<?php include 'components/title.php'; ?>

<?php include 'components/title3.php'; ?>

<?php include 'components/calc_rushnik.php'; ?>

<section class="cat-fixed-bg nearfooter">
	<div class="fixed-bg" style="background-image: url(./assets/img/category/bg.jpg);"></div>
	<?php /*
	<!-- b-promo-goods -->
	<?php include 'components/cat-items.php'; ?>
	<!-- e-promo-goods -->
	<!-- b-news-goods -->
	<?php include 'components/cat-items.php'; ?>
	<!-- e-news-goods -->
	<!-- b-markdown-goods -->
	<?php include 'components/cat-items.php'; ?>
	<!-- e-markdown-goods -->
	*/ ?>
	<?php include 'components/cat-items-user.php'; ?>
</section>


<?php include 'footer.php'; ?>