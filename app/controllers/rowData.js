//var args = arguments[0] || {};
// Attach the bound model ($model) to the row so
// we can access it in a click event.
if ($model) {
	$.row.model = $model.toJSON();
	//var model = $model.toJSON();
	//var arrRow =[];
	//$.row.data=arrRow;
}