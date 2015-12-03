window.onload = function() {


  document.addEventListener('DOMContentLoaded', function() {
      var checkPageButton = document.getElementById('checkPage');
  
      checkPageButton.addEventListener('click', function() {
          chrome.tabs.create({url:'https://students.galvanize.com'});
      });
  
  }, false);

}();