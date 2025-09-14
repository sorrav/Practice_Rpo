const gallery=document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-image");
const closebtn = document.getElementById("close-btn");

gallery.forEach(img => {
  img.addEventListener('click',(e) => {
    e.stopPropagation();

    lightbox.style.display="flex";
    lightboxImg.src=img.src.replace('-thumbnail','');

    requestAnimationFrame(()=>{
      lightboxImg.classList.add("active");
    })
  });
});

closebtn.addEventListener("click",()=>{
    lightboxImg.classList.remove("active");
    lightbox.style.display="none";
       lightboxImg.src="";
   
})

lightbox.addEventListener("click",(e)=>{
    if(e.target===lightbox){ 
    lightboxImg.classList.remove("active");
    lightbox.style.display="none";
       lightboxImg.src="";
   
    }
})
/*
setTimeout(()=>{
       lightbox.style.display="none";
       lightboxImg.src="";
    },200);

 setTimeout(()=>{
       lightbox.style.display="none";
       lightboxImg.src="";
    },100);
    */