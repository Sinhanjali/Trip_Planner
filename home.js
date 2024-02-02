const connectbtn = document.getElementById("connectbtn");
const dialog = document.getElementById("contact_container");

connectbtn.addEventListener('click', ()=> {
    var x = document.getElementById("contact_container ");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }); 

  function show(){
    var y = document.getElementsByClassName("register_container");
    var z = document.getElementsByClassName("login_container");
    if(y.style.display === "none")
    {
        y.style.display === "block";
        z.style.display === "none"
    }
    else{
        y.style.display === "none";
        z.style.display === "block";
    }
  }