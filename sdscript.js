
var _tp_promises = {};



window.addEventListener("message", function(event) { 						
		if(event.source !== window) return;			 						
		if(event.data.src && (event.data.src === "content.js")) { 			
			
			
			
			if(event.data.nonce) {											
				 var p = _tp_promises[event.data.nonce]; 					
				 
				 if(typeof p !== 'undefined'){
					p.resolve(event.data);															
					delete _tp_promises[event.data.nonce];	
				 }											
									
			}else {  														
				console.log("No nonce in event msg");						
			}																
		}																	
	});																		
																			
    var SignerDemtra= new SDCrypto();										
	function SDCrypto () {													
																			
	
	var OSName = GetOS();													
	var OSSupported = (OSName == "Windows" || OSName == "Linux") ? true : false; 
	function nonce() {														
	  var val = ""; 														
	  var hex = "abcdefghijklmnopqrstuvwxyz0123456789";	         			
	  for(var i = 0; i < 16; i++)							     			
		val += hex.charAt(Math.floor(Math.random() * hex.length));			
	  return val;															
	}																		
																			
	function messagePromise(msg) { 											
		return new Promise(async function(sdResolve, sdReject) { 
									
			msg["nonce"] = nonce(); 										
			msg["src"] = "user_page.js"; 									
			msg["browser"] = "chrome"; 										
			
			window.postMessage(msg, "*"); 									
			
			_tp_promises[msg.nonce] = {										
				resolve: sdResolve, 										
				reject: sdReject				 							
			}; 																
		}); 																
	}																		
																			
																																				
																			
	
	this.ConsoleLogging = function(Switch = "ON"){
		document.dispatchEvent(new CustomEvent('ConsoleLogging', {detail : Switch}));
	}	
	
	this.signJson = function(msg){		
		
		return messagePromise(msg);											
	}	

	this.getCerts = function(msg){		
		
		return messagePromise(msg);											
	}
	this.sendDocument = function(msg){		
		
		return messagePromise(msg);											
	}																		
											
	this.OSName = GetOS();													
	this.OSSupported = (this.OSName == "Windows" || this.OSName == "Linux") ? true : false; 
															
		function GetOS()													
		{																	
            if (navigator.appVersion.indexOf("Win") != -1) return "Windows";
            else if (navigator.appVersion.indexOf("Mac") != -1) return "MacOS";	
            else if (navigator.appVersion.indexOf("Linux") != -1) return "Linux";
            else if (navigator.appVersion.indexOf("X11") != -1) return "UNIX";	
			else return "Unknown OS";										
		}																	
}