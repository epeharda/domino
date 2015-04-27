//var args = arguments[0] || {};

function goBack() {
	var newWindow = Alloy.createController('index').getView();
	newWindow.open();
}




$.pdfViewer.open();
