/**
 * Created by qoder on 16-2-4.
 */
window.onload = function () {
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");
    audio.addEventListener('ended', function (event) {
        music.getElementsByTagName("img")[1].setAttribute("class", "");
    }, false);

    music.addEventListener('touchstart', function (event) {
        if (audio.paused) {
            audio.play();
            this.getElementsByTagName("img")[1].setAttribute("class", "play");
        } else {
            audio.pause();
            this.getElementsByTagName("img")[1].setAttribute("class", "");
        }
    }, false);
    page1.addEventListener("touchstart", function (event) {
        page1.style.display = 'none';
        page2.style.display = 'block';
        page3.style.display = 'block';
        page3.style.top = "100%";
        setTimeout(function () {
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        }, 5500)
    }, false);
}