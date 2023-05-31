
  const wall = ["wall1.jpg", "wall2.jpg", "wall3.jpg"];
  const background = document.body;
  const num = Math.floor(Math.random() * wall.length);
  background.style.background = "url(Wallpapers/" + wall[num] +") no-repeat";
  background.style.backgroundSize = "cover";
