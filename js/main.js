	var ANS = 0;
	var fix = 14;	
	function inputwrite(n){
		let crrtEdit = $("#shizi span:last");
		let temp= crrtEdit.text();
		
		function writethings(x){
			crrtEdit.text(temp+x);
		}
		switch (n) {
			case 0 : case  1 : case  2 : case  3 : case  4 : case  5 : case 6 : case  7 : case 8 : case 9 : writethings(n);break;
			case "dot" : writethings(".");break;
			case "chen" : writethings("×");break;
			case "chu" : writethings("÷");break;
			case "jia" : writethings("+");break;
			case "jian" : writethings("-");break;
			case "^" : writethings("^");break;
			case "pi" : writethings("π");break;
			case "jiechen" : writethings("!");break;
			case "zuokuohao" : writethings("(");break;
			case "youkuohao" : writethings(")");break;
			case "CE" : $("#shizi").html("<span></span>"); break;
			case "AC" : $("#shizi").html("<span></span>"); $("#jieguo").html(""); break;
			case "ANS" : writethings("ANS");break;
			case "dengyu" :
				let motify = $("#shizi").text().replace(/×/g,"*").replace(/÷/g,"/").replace(/π/,"(pi)").replace(/ANS/,"("+ANS+")")
				ANS = math.format(math.eval(motify),{precision:fix});
				$("#jieguo").text(ANS);break;
			case "back" : 
				if (temp.substring(temp.length - 3,temp.length) == "ANS"){
					crrtEdit.text(temp.substring(0,temp.length - 3))
				}else{
				crrtEdit.text(temp.substring(0,temp.length - 1))
				};break;
		}	
	};		
	$("#pad").on("click","button",function(){
		inputwrite($(this).data("op") );
	});
	

