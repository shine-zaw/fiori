sap.ui.define([
  "sap/ui/core/mvc/Controller"
  ],
  function (Controller) {
      "use strict";

      return Controller.extend("yodatasamplev4.controller.Detail", {
          onInit: function () {
              var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
              oRouter.getRoute("detail").attachMatched(this._onRouteMatched, this);
          },
          _onRouteMatched: function (oEvent) {
              var oArgs, oView;
              oArgs = oEvent.getParameter("arguments");
              oView = this.getView();
              oView.bindElement({
                  path: "/Products(" + oArgs.ID + ")",
                  events: {
                      dataRequested: function () {
                          oView.setBusy(true);
                      },
                      dataReceived: function () {
                          oView.setBusy(false);
                      }
                  }
              });
          },
          handleNavButtonPress: function (evt) {
              var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
              oRouter.navTo("home");
          }
      });
  });