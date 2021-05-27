sap.ui.define([
        "./BaseController",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageBox",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (BaseController, JSONModel, MessageBox, Filter, FilterOperator) {
		"use strict";

		return BaseController.extend("app.l4edesafio.controller.ConsultaServico", {
			onInit: function () {
                this.getRouter().getRoute("ConsultaServico").attachPatternMatched(this.handleRouteMatched, this);
            },
            handleRouteMatched: function () {
                var that = this;
                $.ajax("https://warm-beyond-86023.herokuapp.com/services", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "75e8efc1-3858-4778-bafb-1a744b1da3b7"
                    },
                    success(data) {
                        that.getView().setModel(new JSONModel(data.service), "Service");
                        
                    },
                    error(response) {
                    
                    
                    }
                })
            },
             onSearch: function(oEvent){
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    var filter = new Filter("titulo", FilterOperator.Contains, sQuery);
                    aFilters.push(filter);
                }
                var oList = this.byId("tableService");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilters, "Application");
            },
             onDetalhe: function(oEvent){
                var serviceId =  oEvent.getSource().getBindingContext("Service").getObject().id
                
                this.getRouter().navTo("DetalheServico",{id: serviceId})
            },
        
		});
	});
