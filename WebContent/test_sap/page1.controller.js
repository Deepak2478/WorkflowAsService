sap.ui.controller("test_sap.page1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf test_sap.page1
*/
	onInit: function() {
		jQuery.sap.require("sap.m.MessageBox");
		jQuery.sap.require("sap.ui.commons.MessageBox");
		var jSon;
		jSon = new sap.ui.model.json.JSONModel();
		this.getView().setModel(jSon);
		var dropDownModel = new sap.ui.model.json.JSONModel("./model/your_data.json");
		this.getView().setModel(dropDownModel, "dropDownModel");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf test_sap.page1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf test_sap.page1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf test_sap.page1
*/
//	onExit: function() {
//
//	}
onAddItem: function(oEvt){
	this.getView().byId('text').setVisible(true);
	var delegator=this.getView().byId('wfName').getSelectedKey();
	this.getView().byId('text').setValue(delegator);
	
}
});