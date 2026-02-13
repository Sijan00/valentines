const playBtn = document.getElementById("playMusic");
const music = document.getElementById("bgMusic");

playBtn.addEventListener("click", () => {
    music.play();
    playBtn.innerText = "Playing 💕";
});
