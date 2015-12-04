## Hello World - A Chrome Browser Boilerplate!
A basic hellow world setup for building a chrome extension/app.

The hello-chrome-app folder contains the code for a basic chrome app with javascript
The hello-chrome-ext folder contains the code for a basic chrome dropdown extension

###--- To use --- 
>Clone

>open the extensions in your chrome browser (hamburger -> more tools -> extensions)

>make sure the developer mode is checked at the top of the page, 

>drag each folder onto the broswer window and it will load. 

>App will appear in your apps, ext will appear with an omni box on the upper right hand corner of your screen.

Feel free to leave me feedback or questions here: http://www.jeremyroelfs.com/blog/?p=25
There is also a slide show there giving a very quick lightning talk on the subject at my blog or here:
https://docs.google.com/presentation/d/1_K_JzmvUNkvqekLV2GfykdtO25eprtGE69OXPcctf_8/edit?usp=sharing

I recommend going through the tutorials below too.

###Notes:
- When in development mode, you can not change the location of your file structure that the browser(extensions) are accessing.

- Google uses a different local storage get/set API for it's extensions and apps, than the normal local storage in the browser.
> In the manifest.json you will need to setup permissions... see comment in manifest

  "permissions": ["storage"],
  see https://developer.chrome.com/apps/storage for more info and the proper get/set functions... they are also explained much better in the first tutorial listed below.

- Per Google's CSP -> https://developer.chrome.com/apps/contentSecurityPolicy
  
  > 1) You cannot run scripts directly in html files. Instead src them to another js file and call them.

  > 2) Read the CSP documentation; there is quite a bit there, but it's all pretty simple with some examples to help



###References

This fleshes out the whole manifest and makes sense of where things should go:

https://developer.chrome.com/extensions/manifest


###Tutorials:

https://developer.chrome.com/apps/app_codelab_basics  -!This one is really the best one I've found

http://www.sitepoint.com/create-chrome-extension-10-minutes-flat/ -!This is a popup app that test the speed of your site, pretty cool

http://tutorialzine.com/2010/06/making-first-chrome-extension/

http://stackoverflow.com/questions/15873904/adding-complex-html-using-a-chrome-content-script

