function startAnimation(){const t=document.querySelectorAll("img.img");t.forEach(t=>{t.style.transition="width 0.5s",t.addEventListener("mouseenter",()=>{t.style.width="700px"}),t.addEventListener("mouseleave",()=>{t.style.width="350px"})})}
//function startAnimation(){const t=document.querySelectorAll("img.img_mobile");t.forEach(t=>{t.style.transition="width 0.5s",t.addEventListener("mouseenter",()=>{t.style.width="350px"}),t.addEventListener("mouseleave",()=>{t.style.width="150px"})})}
function startInputAnimation(){
  const t=document.querySelectorAll("input");
t.forEach(t=>{t.style.transition="width 0.5s",t.addEventListener("mouseenter",()=>{t.style.width="300px"}),t.addEventListener("mouseleave",()=>{t.style.width="250px"})})}
window.addEventListener("load",startAnimation),window.addEventListener("load",startInputAnimation);