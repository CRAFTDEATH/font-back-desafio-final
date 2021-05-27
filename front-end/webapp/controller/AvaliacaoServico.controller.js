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

		return BaseController.extend("app.l4edesafio.controller.AvaliacaoServico", {
			 onInit: function () {
                 if(localStorage.auth == "true"){
                   this.getRouter().getRoute("AvaliacaoServico").attachPatternMatched(this.handleRouteMatched, this);
                 } else {
                     this.getRouter().navTo("LoginUsuario");
                 }
            },

            handleRouteMatched: function () {
                this.getView().setModel(new JSONModel(), "Avaliacao");
            },

            onCadastrar: async function () {
                var oAvaliacao = this.getView().getModel("Avaliacao").getData();
                var id = this.getRouter().getHashChanger().getHash().split("/")[1];
                oAvaliacao.services_id = id
                var that = this;
                console.log(oAvaliacao)
                
                
                $.ajax("https://warm-beyond-86023.herokuapp.com/avaliacoes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "75e8efc1-3858-4778-bafb-1a744b1da3b7"
                    },
                    data: JSON.stringify(oAvaliacao),
                    success(data) {
                        MessageBox.success("Avaliação aceita!");

                    },
                    error(response) {
                    
                        const errors = response.responseJSON.errors
                        for (let i = 0; i < errors.length; i++) {
                            MessageBox.error(errors[i].message)
                        }
                    }
                })
               
            },
           

		});
	});