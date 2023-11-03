function startAnimation() {
  const images = document.querySelectorAll("img.img");
  images.forEach(image => {
    image.style.transition = "width 0.5s";
    image.addEventListener("mouseenter", () => {
      image.style.width = "700px";
    });
    image.addEventListener("mouseleave", () => {
      image.style.width = "350px";
    });
  });
}

function startMobileAnimation() {
  const mobileImages = document.querySelectorAll("img.img_mobile");
  mobileImages.forEach(image => {
    image.style.transition = "width 0.5s";
    image.addEventListener("mouseenter", () => {
      image.style.width = "350px";
    });
    image.addEventListener("mouseleave", () => {
      image.style.width = "150px";
    });
  });
}

function startInputAnimation() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.style.transition = "width 0.5s";
    input.addEventListener("mouseenter", () => {
      input.style.width = "300px";
    });
    input.addEventListener("mouseleave", () => {
      input.style.width = "250px";
    });
  }
}

window.addEventListener("load", startAnimation);
window.addEventListener("load", startMobileAnimation);
window.addEventListener("load", startInputAnimation);
