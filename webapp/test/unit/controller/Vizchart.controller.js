/*global QUnit*/

sap.ui.define([
	"vizchart/controller/Vizchart.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Vizchart Controller");

	QUnit.test("I should test the Vizchart controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
