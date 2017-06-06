var EventUtil = {

	addHandler: function (oElement, sEvent, fnHandler) {
		oElement.addEventListener ? oElement.addEventListener(sEvent, fnHandler, false) : oElement.attachEvent("on" + sEvent, fnHandler)	
	},

	removeHandler:function(oElement,sEvent,fnHandler){
		oElement.removeEventListener ? oElement.removeEventListener(sEvent, fnHandler, false) : oElement.detachEvent("on" + sEvent, fnHandler)

	},

	addLoadHandler: function (fnHandler) {
		this.addHandler(window, "load", fnHandler)
	}
};
	

EventUtil.addLoadHandler(function(){
	var aBtn = document.getElementsByTagName("input");

	EventUtil.addHandler(aBtn[1],"click",function(){
		EventUtil.addHandler(aBtn[0],"click",fnHandler);
		aBtn[0].value = "我可以点击了";
	});

	EventUtil.addHandler(aBtn[2],"click",function(){
		EventUtil.removeHandler(aBtn[0],"click",fnHandler);
		aBtn[0].value = "毫无作用的按钮";
	});

	function fnHandler(){
		alert("事件绑定成功！");
	}
});
