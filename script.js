document.addEventListener("DOMContentLoaded", function () {
  
  var showNext = document.querySelectorAll('.nextQuestionBox');
  
  for (var i = 0; i < showNext.length; i++ ) {
    
    showNext[i].addEventListener("click", function () {
      //to działa
      this.parentElement.nextElementSibling.style.display="block";
      this.parentElement.style.display="none";
      
    });
  }
});
