window.onscroll = function () {
    myFunction();
  };
  var navbar = document.getElementById("principal");
  
  var sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  
  
  document.getElementById("demo").addEventListener("click", myFunction);
  
  function myFunction() {
    window.open("https://joro-afk-sony.netlify.app/");
  }

  