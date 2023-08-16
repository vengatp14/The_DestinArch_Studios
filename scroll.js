
let scrollerID;
let speed = 2; // 1 - Fast | 2 - Medium | 3 - Slow
let interval = speed * 20;
let scrollY_pos = window.scrollY;

function startScroll(){
   let id = setInterval(function() {
        window.scrollBy(0, 2);
    }, interval);
    return id;
}

window.onload = function() {
    scrollerID = startScroll();
  };

document.body.addEventListener("touchend", ()=>{
    scrollerID = startScroll();
})
document.body.addEventListener("touchstart", ()=>{
    clearInterval(scrollerID);
})


    



// let paused = true;
// let speed = 2; // 1 - Fast | 2 - Medium | 3 - Slow
// let interval = speed * 5;

// function startScroll(){
//     let id = setInterval(function() {
//         window.scrollBy(0, 2);
//     }, interval);
//     return id;
// }

// function stopScroll() {
//     clearInterval(scrollerID);
// }

// document.body.addEventListener('keypress', function (event)
// {
//     if (event.which == 13 || event.keyCode == 13) {
//         // It's the 'Enter' key
//         if(paused == true) {
//             scrollerID = startScroll();
//             paused = false;
//         }
//         else {
//             stopScroll();
//             paused = true;
//         }
//     }
// }, true);

// $(document).ready(function() {
//     setInterval( function(){
//         let x = window.innerHeight /10; 
//         let y = window.scrollY + x; 
//         $(document).scrollTop(y);
//     }, 100)
// });