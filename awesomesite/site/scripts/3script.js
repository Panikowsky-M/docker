function setCookie ( name, value , domain)
{
  var cookie_string = name + "=" + escape ( value );

  if ( domain )
	cookie_string += "; domain=" + escape ( domain );

  document.cookie = cookie_string;

}

function getCookie ( coockname )
{
  var results = document.cookie.match ( '(^|;) ?' + coockname + '=([^;]*)(;|$)' );

  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

if ( ! getCookie ( "username" ) )
{
  var username = prompt ( "Пожалуйста, введите Ваше имя", "" );

  if ( username )
  {
    setCookie ( "username", username);
    document.location.reload( );
  }
}
else
{
  var username = getCookie ( "username" );
        document.write( "<p class=paragraph> Привет, " + username + ", добро пожаловать на сайт!</p>");
}

function printCookie () {
	let result = document.querySelector('.console');
	result.innerHTML = document.cookie;
}
