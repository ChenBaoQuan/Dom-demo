window.onload=function(){
	var oInp = document.getElementsByTagName("input");
	var oSpan = document.getElementsByTagName("span")[0];
	
	for(var i=0;i<oInp.length-1;i++){
		oInp[i].onkeyup=function(){
			this.value = this.value.replace(/[^\d]/,"");

		}
	}

	oInp[2].onclick=function(){
		(oInp[0].value == "" || oInp[1].value == "")?alert("请输入数字！"):(oSpan.innerHTML = Math.max(oInp[0].value,oInp[1].value))
	}



}