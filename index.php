<!DOCTYPE html>
<html lang="ja">
<meta charset="utf-8">

<meta name="description" content="">
<meta name="keywords" content="">

<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

<title>jQuery.addClassOnAppear</title>

<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css">
<link rel="stylesheet" href="files/css/style.css">

<div class="wrapper">
	<?php for ( $i = 0; $i < 100; $i++ ) : ?>
	<div class="box"></div>
	<?php endfor; ?>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="files/js/jquery.addClassOnAppear.js"></script>
<script>
	$( function () {
		$( '.box' ).addClassOnAppear( 'appeared' );
	} );
</script>