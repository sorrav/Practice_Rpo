document.addEventListener("DOMContentLoaded",()=>{
  /*document.querySelectorAll(".clip").forEach(audio => {
    audio.load();
  });*/

  const display=document.getElementById("display");
  const pads = document.querySelectorAll(".drum-pad");
  const powerToggle = document.getElementById("power-toggle");
  const volumeSlider = document.getElementById("volume-slider");
  const themeToggle = document.getElementById("theme");

  const soundNames = {
    Q: "Heater 1",
    W: "Heater 2",
    E: "Heater 3",
    A: "Heater 4",
    S: "Clap",
    D: "Open-HH",
    Z: "Kick-n-Hat",
    X: "Kick",
    C: "Closed-HH"
  };

  let currentVolume = volumeSlider.value / 100;

  function playSound(key){
    if(!powerToggle.checked) return;

    const audio = document.getElementById(key);
    if(audio){
      audio.currentTime=0;
      audio.volume=currentVolume;
      audio.play();

      display.textContent = soundNames[key] || "";
    }
  }

  pads.forEach(pad => {
    pad.addEventListener("click",()=>{
      const key = pad.querySelector("audio").id;
      playSound(key);
    })
  });

   document.addEventListener("keydown", e => {
     if(!powerToggle.checked) return;
    const key = e.key.toUpperCase();
    const audio = document.getElementById(key);

    if(audio){
      playSound(key);
      
      const pad = audio.parentElement;
      pad.classList.add("active");
      setTimeout(()=> pad.classList.remove("active"),150);
      document.getElementById("display").innerText = pad.id;
    }
  });
  
  volumeSlider.addEventListener("input",(e)=>{
      
      currentVolume = e.target.value /100;
      display.innerText = `Volume : ${e.target.value}`;

      /*document.querySelectorAll(".clip").forEach(audio => {
        audio.volume = volume;
      });*/

      const preview = document.getElementById("Q");
       preview.currentTime = 0;
       preview.volume = currentVolume;
       preview.play();
  });

      document.body.classList.toggle("light-theme",!themeToggle.checked);

      display.innerText = themeToggle.checked ? "Theme: Dark" : "Theme: Light";

      themeToggle.addEventListener("click",()=>{
        if (themeToggle.checked) {
    document.body.classList.remove("light-theme");
           display.innerText = "Theme: Dark";
           setTimeout(()=>{
            display.innerText = "";
           },2000);
      }  else {
       document.body.classList.add("light-theme");
       display.innerText = "Theme: Light";
       setTimeout(()=>{
            display.innerText = "";
           },2000);
      }
      }
      )

})