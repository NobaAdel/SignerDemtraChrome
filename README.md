# Signer Demtra


[Signer Demtra](https://nobaadel.github.io/Signer/) is a website for online digital signature. It can access the tokens on the device and sign any JSON document. And send it to the Egyptian tax authority on pre-production environment.


You can find more information (and the
[Demo video](https://nobaadel.github.io/Signer/)) on the YouTube.


### Installation

1 - Download Signer Demtra Chrome extension [Signer Demtra Chrome](https://github.com/NobaAdel/SignerDemtraChrome/releases) from Github Repo, and load unpacked extension (make sure your Developer mode is on and it will raise errors ignore it) , get the extension ID for the next step.  
2 - Get the [msi file](https://github.com/NobaAdel/SignerDemtraChrome/releases) with
the latest version and install it, and make sure you have [.NET Runtime 6.0.9-x64](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-6.0.9-windows-x64-installer)
installed, and after msi installation go to the installation folder and register your chrome extension ID from the previous step:

    %ProgramFiles%\Demtra\Demtra Signer\RegisterExtension.exe

