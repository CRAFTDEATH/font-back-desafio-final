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

		return BaseController.extend("app.l4edesafio.controller.LoginUsuario", {
			onInit: function () {
                this.getRouter().getRoute("LoginUsuario").attachPatternMatched(this.handleRouteMatched, this);
            },
            handleRouteMatched: function () {
                this.getView().setModel(new JSONModel(), "Usuario");
            },
            onAuth: function(){
                var oUsuario = this.getView().getModel("Usuario").getData()
                var that = this
                $.ajax("https://warm-beyond-86023.herokuapp.com/confirm", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "75e8efc1-3858-4778-bafb-1a744b1da3b7"
                    },
                    data: JSON.stringify(oUsuario),
                
                    success(data) {
                        localStorage.clear
                        localStorage.setItem('auth', data.auth)
                        localStorage.setItem('id', data.id)
                        localStorage.setItem('mail', data.mail)
                        location.reload()
                        that.getRouter().navTo("ConsultaServico");
                    },
                    error(response) {
                        console.log(response)
                    
                    }
                })
            }
            
		});
	});
