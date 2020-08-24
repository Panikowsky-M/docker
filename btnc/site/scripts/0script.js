function sendJSON() {
	let num = document.querySelector('#number');
	let res = document.querySelector('.res');

	let xhr = new XMLHttpRequest();
	let url = "http://www.awesomesite.com/php/rx.php";
	xhr.open("POST",url,true);
	xhr.setRequestHeader("Content-Type","application/json");
	xhr.onreadystatechange = function() {	
		if(xhr.readyState === 4 && xhr.status === 200) {
		          res.innerHTML = this.responseText;
		}
	};
	var data = JSON.stringify({"num":num.value});
	xhr.send(data);
}
