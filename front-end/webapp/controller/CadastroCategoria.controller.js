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

		return BaseController.extend("app.l4edesafio.controller.CadastroCategoria", {
			 onInit: function () {
                 if(localStorage.auth == "true"){
                   this.getRouter().getRoute("CadastroCategoria").attachPatternMatched(this.handleRouteMatched, this);
                 } else {
                     this.getRouter().navTo("LoginUsuario");
                 }
            },

            handleRouteMatched: function () {
                this.getView().setModel(new JSONModel(), "Categoria");
            },

            onCadastrar: async function () {
                var oCategoria = this.getView().getModel("Categoria").getData();
                var that = this;

                
                
                $.ajax("https://warm-beyond-86023.herokuapp.com/categorias", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "75e8efc1-3858-4778-bafb-1a744b1da3b7"
                    },
                    data: JSON.stringify(oCategoria),
                    success(data) {
                        MessageBox.success("Cadastrado com sucesso!");

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