sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("vizchart.controller.Vizchart", {
            onInit: function () {
                var DataSet = [
                    {State:"Maharashtra" , Polulation:"50000000"},
                    {State:"Gujrat" , Polulation:"30000000"},
                    {State:"Andhra" , Polulation:"25000000"},
                    {State:"Goa" , Polulation:"5000000"},
                    {State:"Kerala" , Polulation:"8000000"}
                    ]
                var json = new sap.ui.model.json.JSONModel({"results":DataSet});
                this.getView().setModel(json);
            }
        });
    });
