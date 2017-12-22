	var ce = new CalcEval();
	function inputwrite(n){
		function writethings(x){
			$("#shizi span:last").text($("#shizi span:last").text()+x);
		}
		switch (n) {
			case 0 : case  1 : case  2 : case  3 : case  4 : case  5 : case 6 : case  7 : case 8 : case 9 : writethings(n);break;
			case "dot" : writethings(".");break;
			case "chen" : writethings("*");break;
			case "chu" : writethings("/");break;
			case "jia" : writethings("+");break;
			case "jian" : writethings("-");break;
			case "zuokuohao" : writethings("(");break;
			case "youkuohao" : writethings(")");break;
			case "AC" : $("#shizi").html("<span></span>"); $("#jieguo").html(""); break;
			case "dengyu" : $("#jieguo").text(ce.eval($("#shizi span").text())); break;
			case "back" : let temp= $("#shizi span:last").text();
								$("#shizi span:last").text(temp.substring(0,temp.Length - 1));break;
		}
	}	
