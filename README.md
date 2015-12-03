## Hello there! How you doin?
A basic hellow world setup for building a chrome extension/app


###Notes:
Google uses a different local storage get/set API for it's extensions and apps, than the normal local storage in the browser.
- In the manifest.json you will need to setup permissions... see comment in manifest

  "permissions": ["storage"],
  see https://developer.chrome.com/apps/storage for more info and the proper get/set functions... they are also explained much better in the first tutorial listed below.

- Per Google's CSP -> https://developer.chrome.com/apps/contentSecurityPolicy
  
  1) You cannot run scripts directly in html files. Instead src them to another js file and call them.

  2) Read the CSP documentation; there is quite a bit there, but it's all pretty simple with some examples to help



###References

This fleshes out the whole manifest and makes sense of where things should go:

https://developer.chrome.com/extensions/manifest


Here are some good tutorials to work through:

https://developer.chrome.com/apps/app_codelab_basics  -!This one is really the best one I've found

http://www.sitepoint.com/create-chrome-extension-10-minutes-flat/ -!This is a popup app that test the speed of your site, pretty cool

http://tutorialzine.com/2010/06/making-first-chrome-extension/

http://stackoverflow.com/questions/15873904/adding-complex-html-using-a-chrome-content-script

