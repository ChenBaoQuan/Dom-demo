window.onload=function(){
	var oInput = document.getElementsByTagName("input");
	var oSpan = document.getElementsByTagName("span")[0];
	for(var i=0;i<oInput.length-1;i++){
		oInput[i].onkeyup = function(){
			this.value = this.value.replace(/[^\d]/,"")
		}
	}

	oInput[2].onclick = function(){
		(oInput[0].value == "" || oInput[1].value == "") ? alert("请输入数字") : oSpan.innerHTML = parseInt(oInput[0].value) + parseInt(oInput[1].value);

	}
};