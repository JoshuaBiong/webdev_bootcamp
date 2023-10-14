const w = document.getElementsByClassName('w');




function ww() {
    addEventListener('keyup', (e) => {
        let even = e.key;
        if (even === 'w') {
            let audiow = new Audio("./sounds/snare.mp3")
            audiow.play()
        }
    })


    addEventListener("click", ww)
    addEventListener("keydown", ww)
}
// function playAudio(url) {
//     new Audio(url).play();
// }