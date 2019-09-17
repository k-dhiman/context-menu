var context = document.getElementById('context');

document.oncontextmenu = function(e){
	e.preventDefault();
	context.style.display = 'block';
	var x = e.clientX;
  	var y = e.clientY;
  	context.style.left = x +"px";
  	context.style.top = y +"px";
};

document.onclick = function(e){

	if(e.target != context){
		context.style.display = 'none';
	}
};


















