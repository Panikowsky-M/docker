<body>
	<h3>Whatever _malicious_ you inserted shouldn't be executed</h3>
<?php
	$csp= "Content-Security-Policy: "
	      ."script-src 'self';";
	header($csp);
	echo $_GET["js"];
?>
<h3>But legitimate code still should execute</h3>
<script src="http://www.victim.com/scripts/some.js"></script>
</body>

