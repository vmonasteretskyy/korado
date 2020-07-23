<?php include 'item.php'; ?>

<?php /*ini_set('display_errors', 1); */ ?>

<!-- <section class="fsect-title">
</section> -->


<section class="fcat-items">
	<button class="mob" id="open-filter" type="button"></button>
	<div class="fcat-sort icon-arr-r">
		<select class="btn green">
			<option>За популярністю</option>
			<option>За популярністю</option>
			<option>За зростанням ціни</option>
			<option>За спаданням ціни</option>
		</select>
	</div>
	<div class="items-wrap">
	
		<?php echo $item2 ?>
		<?php echo $item0 ?>
		<?php echo $item1 ?>

		<?php echo $item0 ?>
		<?php echo $item2 ?>
		<?php echo $item3 ?>

		<?php echo $item3 ?>
		<?php echo $item0 ?>
		<?php echo $item0 ?>

	</div>
	<?php include 'pagination.php'; ?>
</section>