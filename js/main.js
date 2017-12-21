$(document).ready(function(){
	$("#num1").click(function(){
		$("#input span:last").text($("#input span:last").text()+1)   /*数字0~9*/
	});	
	$("#num2").click(function(){
		$("#input span:last").text($("#input span:last").text()+2)
	});
	$("#num3").click(function(){
		$("#input span:last").text($("#input span:last").text()+3)
	});	
	$("#num4").click(function(){
		$("#input span:last").text($("#input span:last").text()+4)
	});	
	$("#num5").click(function(){
		$("#input span:last").text($("#input span:last").text()+5)
	});
	$("#num6").click(function(){
		$("#input span:last").text($("#input span:last").text()+6)
	});	
	$("#num7").click(function(){
		$("#input span:last").text($("#input span:last").text()+7)
	});
	$("#num8").click(function(){
		$("#input span:last").text($("#input span:last").text()+8)
	});	
	$("#num9").click(function(){
		$("#input span:last").text($("#input span:last").text()+9)
	});	
	$("#num0").click(function(){
		$("#input span:last").text($("#input span:last").text()+0)
	});	
	$("#dot").click(function(){
		$("#input span:last").text($("#input span:last").text()+".")
	});	
	
	$("#jia").click(function(){
		$("#input span:last").after("+"+"<span></span>")
	});
	

	
});







