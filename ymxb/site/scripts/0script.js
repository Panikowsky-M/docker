function hey( ){
	alert("Ало здравствуйте, это алерт!")
}

/*document.body.onload = appendImg();
var my_p = newP = null;

function appendImg(){
var newP = document.createElement("p");
newP.innerHTML = "

	document.body.insertBefore(newP, my_p);
}*/

//document.body.onload = addElement;
 // var my_div = newDiv = null;

  function addElement() {

    // Создаем новый элемент div
    // и добавляем в него немного контента

    var newDiv = document.createElement("div");
        newDiv.innerHTML = "<img src=https://computer-museum.ru/images/soviet-pk/soviet_pk_15_s.jpg width=320 height=240 >";

    // Добавляем только что созданый элемент в дерево DOM

    my_div = document.getElementById("org_div1");
    document.body.insertBefore(newDiv, my_div);
  }
