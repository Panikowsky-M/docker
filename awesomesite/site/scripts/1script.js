function SendXHR() {
var xhr = new XMLHttpRequest();
xhr.open("GET","http://www.awesomesite.com/array.json",false);
xhr.send();

	if( xhr.status != 200) {
	  alert(xhr.status + ': ' + xhr.statusText);
	}
	else 
	{
	  	var S = JSON.parse(xhr.responseText);
		var s = S.summe.reduce(function(summ,cur){ return summ + cur;}, 0);
		alert(s);
	}
}
