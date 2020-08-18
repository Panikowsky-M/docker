function recieveXHR() {
var xhr = new XMLHttpRequest();
xhr.setRequestHeader("Access-Control-Allow-Origin", "http://www.victim.com/");
xhr.open("GET","http://www.victim.com/test.txt",false);
xhr.send();

	if( xhr.status != 200) {
	  alert(xhr.status + ': ' + xhr.statusText);
	}
	else 
	{
		alert(xhr.responseText);
	}
}
