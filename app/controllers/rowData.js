//var args = arguments[0] || {};
// Attach the bound model ($model) to the row so
// we can access it in a click event.
if ($model) {
	$.row.model = $model.toJSON();
}

//shows bill detail when bill is clicked
 function showBill(e){
     //Ti.API.info('billNum: '  + $.row.model.BillNum);
 	
 	var billNum = $.row.model.BillNum;
 	var shortTitle = $.row.model.shortTitle;
 	//$.billNumDetail.text = billNum;
 	//$.shortTitleDetail.text = shortTitle;
 	Ti.API.info('billNum: ' + billNum  );
 	Ti.API.info('shortTitle: ' + shortTitle  );
 	var details = [billNum, shortTitle];
 	var detail = Alloy.createController ('billDetail', details).getView();
 	detail.open;	
 }
