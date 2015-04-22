var args = arguments[0] || {};
$.billNumDetail.text = args[0];
$.shortTitleDetail.text = args[1];

Ti.API.info(args[0]);
Ti.API.info(args[1]);

function goBack() {
	var newWindow = Alloy.createController('index').getView();
	newWindow.open();
}
//$.row.hide();
$.billDetail.open();

