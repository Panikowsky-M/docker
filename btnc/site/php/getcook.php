<?php
	$cookiename = $_REQUEST["name"];
	echo "alert('" .$cookiename . " = " . $_COOKIE[$cookiename] . "');";
?>
