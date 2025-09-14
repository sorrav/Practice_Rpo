
const mainfield = document.querySelector(".palindrome-checker");
const input = document.getElementById("text-input");
const btn=document.getElementById("check-btn");
const result = document.getElementById("result");


function palind(str){
  if(str.trim()===""){
    alert("Please input a value");
    return;
  }
  str=str.trim();
  str=str.toLowerCase().replace(/[^a-z0-9]/g,"")
  if(str===str.split("").reverse().join("")){
    return true;
  }
  return false;
}

btn.addEventListener("click",() => {
  const value=input.value;
  if(palind(value)){
    result.textContent =`${value} is a Palindrome`;
    result.style.display="inline-block";
    mainfield.style.boxShadow="0 0 13px rgba(14,84,0,0.5)";
    mainfield.style.transition="box-shadow 0.6s ease";
  }
  else{
    result.textContent =`${value} is not a Palindrome`;
    result.style.display="inline-block";
    mainfield.style.boxShadow="0 0 13px rgba(166,6,0,0.5)";
    mainfield.style.transition="box-shadow 0.6s ease";
  }

 /* setTimeout(()=>{
      result.textContent="";
      input.value="";
      result.style.display="none";
      mainfield.style.boxShadow="0 10px 8px rgba(0,30,200,0.3)";
      mainfield.style.transition="box-shadow 0.6s ease";
    },6000);*/
});