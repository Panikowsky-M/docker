<body>
	<h3>Whatever _malicious_ you inserted shouldn't be executed</h3>
<?php
	$csp= "Content-Security-Policy: "
	      ."script-src 'self' http://www.sub.victim.com";
	header($csp);
	echo $_GET["name"];
?>
<h3>But legitimate code still should execute</h3>
<script src="http://www.victim.com/scripts/some.js"></script>
<script src="http://www.sub.victim.com/scripts/some.js"></script>
</body>

