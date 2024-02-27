const IMAGES_AMOUNT = 12;

const changeImage = () => {
  const imgNumber = Math.floor(Math.random() * IMAGES_AMOUNT + 1);
  const imgPath = `images/${imgNumber}.jpg`;
  $(".gallery").fadeOut(1000);
  document.querySelector(".gallery").src = imgPath;
  $(".gallery").fadeIn(1000);
};

$(".gallery").click(changeImage);

setInterval(changeImage, 3000);
