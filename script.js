// document.getElementById("player-1").src=charachters[0].img;




function moveToSecondScreen(){
    var begin = document.getElementById("UwU");
    begin.classList.add("animation-gone-center")
    setInterval(function() {
        begin.remove()
      }, 7000); 
}


function playerChoice(id) {
    console.log(id)
    switch (id) {
        case 0:
            console.log("char")
            moveToSecondScreen()
            break;
        case 1:
            console.log("pika")
            moveToSecondScreen()
            break;
        case 2:
            console.log("squirtle")
            moveToSecondScreen()
            break;
        default:
            alert("Choose a charachter!");
    }

}