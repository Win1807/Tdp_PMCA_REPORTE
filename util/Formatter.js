jQuery.sap.declare("sap.ui.administrativo.reporte.util.Formatter");
jQuery.sap.require("sap.ui.core.format.DateFormat");

sap.ui.administrativo.reporte.util.Formatter = {
	//Funciones del smarttable
    time : function (value){
		var s = value.ms;
		function pad(n, z) {
	    	z = z || 2;
	    	return ('00' + n).slice(-z);
		}
		var ms = s % 1000;
		s = (s - ms) / 1000;
		var secs = s % 60;
		s = (s - secs) / 60;
		var mins = s % 60;
		var hrs = (s - mins) / 60;
		
		return pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
	},
	getestado : function(estado){
		if(estado == 1){
			return "Ingreso";
		}else if(estado == 2){
			return "Salida";
		}else{
			return "";
		}
	},
	getfecha : function(fecha){
       	var valueDate = fecha;
	    var d = new Date(valueDate);
		d.setDate(d.getDate() + 1);
		d = d.toLocaleDateString();
		var parts = d.split('/');
		if(parts[0] < 10) parts[0] = '0' + parts[0];
		if(parts[1] < 10) parts[1] = '0' + parts[1];
		return parts[0] + '.' + parts[1] + '.' + parts[2];
	},
	statusText :  function (value) {
		var bundle = this.getModel("i18n").getResourceBundle();
		return bundle.getText("StatusText" + value, "?");
	},
	
	statusState :  function (value) {
		var map = sap.ui.demo.myFiori.util.Formatter._statusStateMap;
		return (value && map[value]) ? map[value] : "None";
	},
	
	quantity :  function (value) {
		try {
			return (value) ? parseFloat(value).toFixed(0) : value;
		} catch (err) {
			return "Not-A-Number";
		}
	},
	
	dates : function (value) {
		if (value =="00000000"){
		 return ;
		} else{
			var oDateFormat = sap.ui.core.format.DateFormat.getInstance({  
			     source:{pattern:"MM-dd-yyyy"},  
			     pattern: "dd-MM-yyyy"}  
			);  		
	        value = oDateFormat.parse(value);  
			return oDateFormat.format(new Date(value)); 		
		}
	},
    
    prueba: function(value){
        
        console.log(value);
    }
};