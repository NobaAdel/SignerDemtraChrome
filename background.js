var port = chrome.runtime.connectNative("demtra.signer.digital.chrome.host");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "From the extension");	
	
   
   if (port == null)
   {
	alert("Error: Check if [Signer Demtra Extension] Application is installed."); 
	return true;	
   }
   
   port.postMessage(request);	
   return true;	  	
  });


port.onMessage.addListener(function(msg) {
  
  
  
  chrome.windows.getCurrent(w => {
	  chrome.tabs.query({active: true, windowId: w.id}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id,msg, function(response) {});  
	  });
  });
  
});

port.onDisconnect.addListener(function() {
  console.log("SD Host Application Disconnected");
  port = null;
});  