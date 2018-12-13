//01初始化
window.onload=function(){
	var ul=document.getElementById("list");
	var li=ul.getElementsByTagName("li"); 
	var cont=document.getElementById("bottom");
	var div=cont.getElementsByClassName("container");
	var box=document.getElementById("box")
	for(var i=0; i<li.length; i++){
		li[i].index=i;     //设置索引值
		li[i].onclick=function(){
			//box.style.background="red"
			for(var j=0; j<li.length; j++){
				li[j].className="normal";
				div[j].style.display="none";
			}
			li[this.index].className="active";
			div[this.index].style.display="block";
		}	
	}
}