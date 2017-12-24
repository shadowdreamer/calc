	var ANS;
	var changed;
	function inputwrite(n){
		let crrtEdit = $("#shizi span:last");
		let temp= crrtEdit.text();		
		function writethings(x){
			crrtEdit.text(temp+x);
		}
		switch (n) {
			case 0 : case  1 : case  2 : case  3 : case  4 : case  5 : case 6 : case  7 : case 8 : case 9 : writethings(n);break;
			case "dot" : writethings(".");break;
			case "chen" : writethings("*");break;
			case "chu" : writethings("/");break;
			case "jia" : writethings("+");break;
			case "jian" : writethings("-");break;
			case "^" : writethings("^");break;
			case "pi" : writethings("(pi)");break;
			case "jiechen" : writethings("!");break;
			case "zuokuohao" : writethings("(");break;
			case "youkuohao" : writethings(")");break;
			case "CE" : $("#shizi").html("<span></span>"); break;
			case "AC" : $("#shizi").html("<span></span>"); $("#jieguo").html(""); break;
			case "ANS" : writethings(ANS);break;
			case "dengyu" :
				ANS = math.format(math.eval($("#shizi").text()),{precision:14});
				$("#jieguo").text(ANS);break;
			case "back" : crrtEdit.text(temp.substring(0,temp.length - 1));break;
		}
		changed = $("#shizi").text().replace(/\*/g,"×");
		changed = $("#shizi").text().replace(/\//g,"÷");
		changed = $("#shizi").text().replace(/\(pi\)/g,"π");		
		$("#showshizi").text(changed);
		
	};		
	$("#pad").on("click","button",function(){
		inputwrite($(this).data("op") );
	});
	

