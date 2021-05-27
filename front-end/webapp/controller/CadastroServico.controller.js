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
	function (BaseController, JSONModel, MessageBox) {
		"use strict";

		return BaseController.extend("app.l4edesafio.controller.CadastroServico", {
			 onInit: function () {
                 if(localStorage.auth == "true"){
                    this.getRouter().getRoute("CadastroServico").attachPatternMatched(this.handleRouteMatched, this);
                  } else {
                     this.getRouter().navTo("LoginUsuario");
                  }
                 

            },

            handleRouteMatched: function () {
                var that = this;
                
                $.ajax("https://warm-beyond-86023.herokuapp.com/categorias", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "75e8efc1-3858-4778-bafb-1a744b1da3b7"
                    },
                    success(data) {
                        
                        that.getView().setModel(new JSONModel(data.categories), "Categorie");
                        that.getView().setModel(new JSONModel(), "Service");
                        
                        
                    },
                    error(response) {
                    
                        const errors = response.responseJSON.errors
                        for (let i = 0; i < errors.length; i++) {
                            MessageBox.error(errors[i].message)
                        }
                    }
                })
            },
           

            onCadastrar: async function () {
                var oServico = this.getView().getModel("Service").getData();
                var oCategorie = this.getView().getModel("Categorie").getData();
                var that = this;
                oServico.categorias_id = oCategorie.id
                oServico.user_id = localStorage.id
                

                
                
                $.ajax("https://warm-beyond-86023.herokuapp.com/services", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "75e8efc1-3858-4778-bafb-1a744b1da3b7"
                    },
                    data: JSON.stringify(oServico),
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
