
const home = document.getElementById("iIntro-text");


home.addEventListener("scroll", (event) => {
    window.alert("sometext");
    
  });


  function myFunction(){
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
