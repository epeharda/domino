var allBills = Alloy.Collections.bill;
//console.log (allBills);
console.log ("printing");


//Convert the model and make into a title property
function transform(model){
	var attrs = model.toJSON();
	Ti.API.info('attrs: ' + JSON.stringify(attrs));
	Ti.API.info('billNum: ' + attrs.allBills[0].BillNum  );
	var length = attrs.allBills.length;
	Ti.API.info('length: ' + attrs.allBills.length );
	return attrs;
}

//$.mainWindow.addEventListener('close', function(){
//	$.destroy();
//});

 
 //function showBills(e){
 //	var bill = allBills.at(e.index);
 //	var detail = Alloy.createController ('bill', bill).getView();
 //	detail.open;
 	
// }
 
allBills.fetch();
$.index.open(); 
 

/*
var bTypes = [{
	"title" : "HB"
}, {
	"title" : "HCR"
}, {
	"title" : "HJM"
}, {
	"title" : "HJR"
}, {
	"title" : "HM"
}, {
	"title" : "HR"
}, {
	"title" : "SB"
}, {
	"title" : "SCR"
}, {
	"title" : "SJM"
}, {
	"title" : "SJR"
}, {
	"title" : "SM"
}, {
	"title" : "SR"
}];
var noData = [];

function init() {
	$.tView.data = noData;
	$.tView.data = bTypes;
};

var billService = require('billService');

function billTypeClicked(e) {
	$.tView.data = noData;
	console.log(bTypes[e.index].title);
	billService.getBillHead(bTypes[e.index].title, function(_response) {
		if (_response.success) {
			var Bills = _response.data.allBills;
			for (var i = 0,
			    j = Bills.length; i < j; i++) {
				var rowItem = Bills[i];
				var rowController = Alloy.createController('rowData', rowItem);
				$.tView.appendRow(rowController.getView(), true);
			};

		} else {
			alert(_response.error);
		}
	});

};

init();
*/

