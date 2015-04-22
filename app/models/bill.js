exports.definition = {
	config: {
		"columns" : {
            "BillNum" : "TEXT",
            "shortTitle": "TEXT",
          },

		adapter: {
			type: "bill_rest",
			collection_name: "bill",
			//endpoint URL to access the service for the REST sync adapter
			base_url: 'BASE_URL'
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
			idAttribute :'id'
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};