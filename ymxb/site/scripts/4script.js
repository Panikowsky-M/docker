function setCookie() {
	exec(document.getElementById('scrpath').value + 'setcook.php?name='+
	 document.getElementById('cookName').value + '&value=' + 
	 document.getElementById('cookVal').value + '&rnd=' + Math.random()
	  );
	}

function getCookie() {
	exec(document.getElementById('scrpath').value  + 'getcook.php?name='+
		document.getElementById('cookName').value + '&rnd=' + Math.random()
	  );
	}

function ls() {
	exec(document.getElementById('scrpath').value + 'listcook.php?rnd='+
		Math.random() 
	      );
	    }

function exec(sUrl) {
	var head = document.getElementsByTagName('head').item(0);
	var script = document.createElement('script');
	script.src = sUrl;
	script.type = 'text/javascript' ;
	script.defer = true;
	void(head.appendChild(script));
	}
