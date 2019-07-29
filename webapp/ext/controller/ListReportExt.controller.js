sap.ui.define([
	"cus/sd/lib/worklist/util/UtilityHelper/"
], function (UtilityHelper) {
	"use strict";

return sap.ui.controller("ZMM_PO_HEADER_CONF.ext.controller.ListReportExt", {

	util: new UtilityHelper(),
//sap.ui.controller("ZMM_PO_HEADER_CONF.ext.controller.ListReportExt", {

	onClickActionZC_PO_Header_confirms_alvlist1: function (oEvent) {
		
		var t = this;
		var f = "ZMM_PO_HEADER_CONF.ext.fragments.SaveErrorPopUp";
		var g = function () {
			return t.byId("saveMessageStrip");
		};
		var u = 'Status';
		return this.util.onActionWithoutInput(this, this.extensionAPI, f, this.i18nPath, g, u);
		
	}
//});


	});
});