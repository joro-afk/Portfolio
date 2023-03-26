

let w = window.innerWidth;
let h = window.innerHeight;
document.getElementById("medidas").innerHTML = "Width: " + w + "<br>Height: " + h;

document.documentElement.style.setProperty("--width", w + "px"); 
document.documentElement.style.setProperty("--height", h + "px"); 







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
  
  
  document.getElementById("left").addEventListener("click", weblink);
  
  function weblink() {
    window.open("https://joro-afk-sony.netlify.app/");
  }

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_cq1el85", "template_4kdp6tb", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
  
