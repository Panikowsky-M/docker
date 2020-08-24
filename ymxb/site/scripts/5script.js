function XHRrx() {
var xhr = new XMLHttpRequest();
xhr.open("GET","http://__localhost__/user_info.html",false);
xhr.send();

	if( xhr.status != 200) {
	  alert(xhr.status + ': ' + xhr.statusText);
	}
	else 
	{
  		var userdata = document.getElementById('userinfo');	
		userdata.innerHTML = xhr.responseText;
	}
}
