sap.ui.define([
        "./BaseController",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageBox"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (BaseController, JSONModel, MessageBox) {
		"use strict";

		return BaseController.extend("app.l4edesafio.controller.DetalheServico", {
			onInit: function () {
                if(localStorage.auth == "true"){
                     this.getView().byId('feedback').setEnabled(true)
                } else {
                    this.getView().byId('feedback').setEnabled(false)
                    MessageBox.error("Faça login para avaliar")
                }
                this.getRouter().getRoute("DetalheServico").attachPatternMatched(this.handleRouteMatched, this);
                
            },
            handleRouteMatched: function () {
                var id = this.getRouter().getHashChanger().getHash().split("/")[1];
                var that = this;
                $.ajax(`https://warm-beyond-86023.herokuapp.com/services/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "75e8efc1-3858-4778-bafb-1a744b1da3b7"
                    },
                    success(data) {
                        
                        that.getView().setModel(new JSONModel(data.service), "Service");
                        
                        
                        
                    },
                    error(response) {
                    
                        const errors = response.responseJSON.errors
                        
                        
                        for (let i = 0; i < errors.length; i++) {
                            MessageBox.error(errors[i].message)
                        }
                    }
                })
                $.ajax(`https://warm-beyond-86023.herokuapp.com/avaliacoes/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "75e8efc1-3858-4778-bafb-1a744b1da3b7"
                    },
                    success(data) {
                        
                        that.getView().setModel(new JSONModel(data.services.avaliacaos), "Avaliacao");
                    },
                    error(response) {
                    
                        const errors = response.responseJSON.errors
                        
                        
                        for (let i = 0; i < errors.length; i++) {
                            MessageBox.error(errors[i].message)
                        }
                    }
                })
            },
            onAvaliar: function(oEvent){
                 var id = this.getRouter().getHashChanger().getHash().split("/")[1];
                 this.getRouter().navTo("AvaliacaoServico",{id: id});
            }
            
		});
	});
