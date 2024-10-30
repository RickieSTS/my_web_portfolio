
// document.cookie = "theme=light; expires=31 Dec 2026 12:00:00 UTC; path=/";

function checkCookieTheme(){
  console.log(document.cookie);
  const body = document.getElementById("body"); 
  body.style.visibility="visible";
    if(document.cookie == "theme=dark")
    {
    // alert("dark");
    body.classList.remove("light");
        body.classList.add("dark");
        var x = document.getElementById("darkThemeButtonLabel").style.display = "none";
        var y = document.getElementById("lightThemeButtonLabel").style.display = "block";
    }
    else{
    // alert("light");
    body.classList.remove("dark");
        body.classList.add("light");
        var x = document.getElementById("darkThemeButtonLabel").style.display = "block";
        var y = document.getElementById("lightThemeButtonLabel").style.display = "none";
    }
}

function setTheme(){

  // alert(document.cookie)
  // let cookieThemeValue = getCookie("theme");
  

  var selectedTheme;
  // console.log("started");
   const radioList = document.getElementsByName("theme");
   const body = document.getElementById("body"); 

  //  console.log(body);
     radioList.forEach(item => {
      // console.log(item);
      

      if(item.checked == true)
      {
        // console.log(item.id)
        selectedTheme = item.id;
      }
    });

    switch(selectedTheme){
      default:
      case "lightThemeButton":
        body.classList.remove("dark");
        body.classList.add("light");
        var x = document.getElementById("darkThemeButtonLabel").style.display = "block";
        var y = document.getElementById("lightThemeButtonLabel").style.display = "none";
        document.cookie = "theme=light; expires=31 Dec 2026 12:00:00 UTC; path=/";

      break;
      case "darkThemeButton":
        body.classList.remove("light");
        body.classList.add("dark");
        var x = document.getElementById("darkThemeButtonLabel").style.display = "none";
        var y = document.getElementById("lightThemeButtonLabel").style.display = "block";
        document.cookie = "theme=dark; expires=31 Dec 2026 12:00:00 UTC; path=/";

      break;
      
    }
    

  
}
