sap.ui.define([
		"jenkins/test/jenkinstest/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("jenkins.test.jenkinstest.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);