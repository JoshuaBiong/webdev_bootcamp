//  document.querySelectorAll('button')[1].addEventListener('click', handleEvent);
//  document.querySelectorAll('button')[2].addEventListener('click', handleEvent);
//  document.querySelectorAll('button')[3].addEventListener('click', handleEvent);
//  document.querySelectorAll('button')[4].addEventListener('click', handleEvent);
//  document.querySelectorAll('button')[5].addEventListener('click', handleEvent);
//  document.querySelectorAll('button')[6].addEventListener('click', handleEvent);
//  document.querySelectorAll('button')[7].addEventListener('click', handleEvent);

let numOfDrum = document.querySelectorAll('.drum').length

for (let i = 0; i < numOfDrum; i++) {

    // document.querySelectorAll("button")[i].addEventListener('click', function() {
    //     let audio = new Audio('./sounds/crash.mp3')
    //     audio.play();
    // })


    if (i == 2) {
        document.querySelectorAll('.drum')[i].addEventListener('click', function() {
            let audio = new Audio('./sounds/snare.mp3')
            audio.play();
        })
    }

}