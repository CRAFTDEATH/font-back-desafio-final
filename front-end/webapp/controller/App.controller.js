sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("app.l4edesafio.controller.App", {
			onInit: function () {

            },
             onCollapseExpandPress: function () {
                var oNavigationList = this.byId("navigationList");
                var bExpanded = oNavigationList.getExpanded();

                oNavigationList.setExpanded(!bExpanded);
            },
            
             onNavMostrarPlataforma: function() {
                    this.getRouter().navTo("MostrarPlataforma")
            },
		});
	});
