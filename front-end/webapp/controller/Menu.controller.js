sap.ui.define([
		"./BaseController"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (BaseController) {
		"use strict";

		return BaseController.extend("app.l4edesafio.controller.Menu", {
			onInit: function () {
                if(localStorage.auth == "true"){
                   this.getView().byId('cadastroUsuario').setVisible(false)
                   this.getView().byId('cadastroServico').setVisible(true)
                   this.getView().byId('cadastroCategoria').setVisible(true)
                   this.getView().byId('login').setVisible(false)
                   this.getView().byId('deslogar').setVisible(true)

                } else {
                   this.getView().byId('cadastroServico').setVisible(false)
                   this.getView().byId('cadastroCategoria').setVisible(false)
                   this.getView().byId('login').setVisible(true)
                   this.getView().byId('deslogar').setVisible(false)
                }
               this.getRouter().getRoute('Menu').attachPatternMatched(this.onHandler, this);
            },
            onHandler: function(){
                // if(localStorage.auth == "true"){
               //    this.getView().byId('cadastroServico').setEnabled(true)
               //    this.getView().byId('cadastroCategoria').setEnabled(true)
               // }
                
            },

            onCollapseExpandPress: function () {
                var oNavigationList = this.byId("navigationList");
                var bExpanded = oNavigationList.getExpanded();

                oNavigationList.setExpanded(!bExpanded);
            },

            onSideNavButtonPress: function () {
                var oToolPage = this.byId("toolPage");
                var bSideExpanded = oToolPage.getSideExpanded();
                oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            },

            onNavCadastroServico: function() {
                
                this.getRouter().navTo("CadastroServico");
            },
            onNavLoginUsuario: function() {
                this.getRouter().navTo("LoginUsuario");
            },
            onNavCadastroCategoria: function() {
                this.getRouter().navTo("CadastroCategoria");
            },
            onNavConsultaServico: function() {
                this.getRouter().navTo("ConsultaServico");
            },

            onNavCadastroUsuario: function() {
                
                    this.getRouter().navTo("CadastroUsuario");
               
            },

           
            onNavDetalheServico: function() {
                this.getRouter().navTo("DetalheServico");
            },
            onNavDeslogar: function(){
                localStorage.clear()
                this.getView().byId('cadastroUsuario').setVisible(true)
                 this.getView().byId('cadastroServico').setVisible(false)
                   this.getView().byId('cadastroCategoria').setVisible(false)
                   this.getView().byId('login').setVisible(true)
                   this.getView().byId('deslogar').setVisible(false)
                   location.reload()
                this.getRouter().navTo("LoginUsuario");
            }
           
		});
	});
