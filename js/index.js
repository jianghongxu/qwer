$(document).ready(function(){
    /*自制的小屏下拉菜单*/
    $("#menu").click(function(){
		/*$("#show").toggleClass("none");*/
		$("#show").slideToggle("slow");//动画
	}); 
	var btn=document.getElementById("btn");//按钮
      btn.onclick=function(){
	      if(btn.innerHTML=="查看更多&nbsp;&nbsp;&nbsp;+"){
	      	$(".over").css("display","block");
	      	btn.innerHTML="关闭&nbsp;&nbsp;&nbsp;×";
	      }else{
	      	$(".over").css("display","none");
	      	btn.innerHTML="查看更多&nbsp;&nbsp;&nbsp;+";
	      }
      }
	var btntwo=document.getElementById("btn-two");//按钮
      btntwo.onclick=function(){
	      if(btntwo.innerHTML=="查看更多&nbsp;&nbsp;&nbsp;+"){
	      	$(".over-two").css("display","block");
	      	btntwo.innerHTML="关闭&nbsp;&nbsp;&nbsp;×";
	      }else{
	      	$(".over-two").css("display","none");
	      	btntwo.innerHTML="查看更多&nbsp;&nbsp;&nbsp;+";
	      }
      }
	var btnthree=document.getElementById("btn-three");//按钮
      btnthree.onclick=function(){
	      if(btnthree.innerHTML=="查看更多&nbsp;&nbsp;&nbsp;+"){
	      	$(".over-three").css("display","block");
	      	btnthree.innerHTML="关闭&nbsp;&nbsp;&nbsp;×";
	      }else{
	      	$(".over-three").css("display","none");
	      	btnthree.innerHTML="查看更多&nbsp;&nbsp;&nbsp;+";
	      }
      }
	var btnfour=document.getElementById("btn-four");//按钮
      btnfour.onclick=function(){
	      if(btnfour.innerHTML=="查看更多&nbsp;&nbsp;&nbsp;+"){
	      	$(".over-four").css("display","block");
	      	btnfour.innerHTML="关闭&nbsp;&nbsp;&nbsp;×";
	      }else{
	      	$(".over-four").css("display","none");
	      	btnfour.innerHTML="查看更多&nbsp;&nbsp;&nbsp;+";
	      }
      }
});