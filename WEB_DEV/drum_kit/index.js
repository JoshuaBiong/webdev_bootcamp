 document.querySelectorAll('button')[0].addEventListener('click', handleEvent);
 //  document.querySelectorAll('button')[1].addEventListener('click', handleEvent);
 //  document.querySelectorAll('button')[2].addEventListener('click', handleEvent);
 //  document.querySelectorAll('button')[3].addEventListener('click', handleEvent);
 //  document.querySelectorAll('button')[4].addEventListener('click', handleEvent);
 //  document.querySelectorAll('button')[5].addEventListener('click', handleEvent);
 //  document.querySelectorAll('button')[6].addEventListener('click', handleEvent);
 //  document.querySelectorAll('button')[7].addEventListener('click', handleEvent);

 function handleEvent() {
     let audio = new Audio('./sounds/crash.mp3')
     audio.play()
 }