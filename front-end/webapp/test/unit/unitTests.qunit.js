/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"app/l4e-desafio/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
