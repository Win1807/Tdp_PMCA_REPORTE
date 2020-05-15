sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.administrativo.reporte.controller.App", {
      	onInit: function () {
      		// sessionStorage.urlGlobal = "http://tdperpdev.toyotaperu.com.pe:8002/sap/bc/zfiori_cadm_tmp";
            sessionStorage.urlGlobal = "/servicioADMINISTRACION";
            sessionStorage.usuarioSap = 200;
            sessionStorage.userName = "";
            // sessionStorage.userName = "C_T77";
		}
   });
});