var ANS;
$(document).ready(function(){
	$("#num1").click(function(){
		$("#shizi span:last").text($("#shizi span:last").text()+1)   /*数字0~9*/
	});	
	$("#num2").click(function(){
		$("#shizi span:last").text($("#shizi span:last").text()+2)
	});
	$("#num3").click(function(){
		$("#shizi span:last").text($("#shizi span:last").text()+3)
	});	
	$("#num4").click(function(){
		$("#shizi span:last").text($("#shizi span:last").text()+4)
	});	
	$("#num5").click(function(){
		$("#shizi span:last").text($("#shizi span:last").text()+5)
	});
	$("#num6").click(function(){
		$("#shizi span:last").text($("#shizi span:last").text()+6)
	});	
	$("#num7").click(function(){
		$("#shizi span:last").text($("#shizi span:last").text()+7)
	});
	$("#num8").click(function(){
		$("#shizi span:last").text($("#shizi span:last").text()+8)
	});	
	$("#num9").click(function(){
		$("#shizi span:last").text($("#shizi span:last").text()+9)
	});	
	$("#num0").click(function(){
		$("#shizi span:last").text($("#shizi span:last").text()+0)
	});	
	$("#dot").click(function(){
		$("#shizi span:last").text($("#shizi span:last").text()+".")
	});	
	
	$("#jia").click(function(){
		$("#shizi span:last").after("<span>+</span>"+"<span></span>")
	});
	$("#jian").click(function(){
		$("#shizi span:last").after("<span>-</span>"+"<span></span>")
	});
	
	$("#chen").click(function(){
		$("#shizi span:last").after("<span>*</span>"+"<span></span>")
	});
	
	$("#chu").click(function(){
		$("#shizi span:last").after("<span>/</span>"+"<span></span>")
	});	

	$("#dengyu").click(function(){
		$("#jieguo").text(eval($("#shizi span").text()));
		ANS = eval($("#jieguo").text());
	});
	
	$("#allclear").click(function(){
		$("#jieguo").text("");
		$("#shizi").html("<span></span>");
	});
	
	$("#ans").click(function(){		
		$("#shizi span:last").text($("#shizi span:last").text()+"ANS");
	});
	

	
});







