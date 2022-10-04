console.log("CISPL Signer Demtra Loaded");

let SDLogToConsole = false;

document.addEventListener("ConsoleLogging", function (e){
	if(e.detail.toUpperCase() == "ON")
		SDLogToConsole = true;
	else
		SDLogToConsole = false;
});


window.addEventListener("message", function(event) {
  
    if (event.source !== window)
        return;

  if (event.data.src && (event.data.src === "user_page.js")) {  
	event.data["origin"] = location.origin;
	if(SDLogToConsole)
	{
		console.log("From page: ");
	}
	
	chrome.runtime.sendMessage(event.data,function(resp){});
  }
});


 chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(SDLogToConsole)
		{
			console.log("From Extension: ");
		
		}
		
        
        request['src']="content.js";		
		window.postMessage(request, '*');
		return true;
	}
  );

	  

var s = document.createElement('script');
s.src = chrome.runtime.getURL('sdscript.js');
(document.head || document.documentElement).appendChild(s);
s.onload = function() {
    this.remove();
};

