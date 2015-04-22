
Alloy.Collections.bill.fetch();


//Convert the model and make into a title property
function transform(model){
	var modelR = model.toJSON();
	Ti.API.info('model: ' + JSON.stringify(modelR));
	Ti.API.info('billNum: ' + modelR.BillNum  );
	modelR.custom = modelR.BillNum; //+ " " + modelR.shortTitle;
	return modelR;
}

$.index.addEventListener('close', function(){
	$.destroy();
});

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

