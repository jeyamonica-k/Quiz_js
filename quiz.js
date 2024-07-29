var ans1=document.getElementById("qonea")
var ans2=document.getElementById("qtwoa")
var ans3=document.getElementById("qthreeb")
var output=document.querySelector(".Ans")
var btn=document.getElementById("sub")
var inc=0
var bgcontainer=document.querySelector(".main")
var smcontainer=document.querySelector(".sudo")
ans1.addEventListener("click",function(){
  inc=inc+1
})
ans2.addEventListener("click",function(){
  inc=inc+1
})
ans3.addEventListener("click",function(){
  inc=inc+1
})
btn.addEventListener("click",function(){
  bgcontainer.style.display="none"
  smcontainer.style.display="block"
  output.textContent= "Score:"+ inc
})