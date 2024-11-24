setTimeout(function() {
  let bulb = document.querySelector("#off");
  function togglebulb() {
    if (bulb.src.includes("off.jpg")) {
      bulb.src = "on.jpg";
    }
    else {
      bulb.src = "off.jpg";
    }
  }
  bulb.addEventListener('click',()=>{
    
  });
  setInterval(togglebulb, 500);
}, 500);