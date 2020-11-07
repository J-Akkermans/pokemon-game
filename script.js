// document.getElementById("player-1").src=charachters[0].img;






function playerChoice(id) {
    console.log(id)
    switch (id) {
        case "char":
            console.log("char")
            moveToSecondScreen();
            setTimeout(function() {
                createrPlayer(id)
            }, 7100);
          
            break;
        case "pika":
            console.log("pika")
            moveToSecondScreen();
            setTimeout(function() {
                createrPlayer(id)
            }, 7100);
            break;
        case "squirt":
            console.log("squirtle")
            moveToSecondScreen();
            setTimeout(function() {
                createrPlayer(id)
            }, 7100);
            break;
        default:
            alert("Choose a charachter!");
    }

}

function moveToSecondScreen(){
    let begin = document.getElementById("deletpls");
    let mainDiv = document.getElementById("UwU");
    let myTimer = setInterval(7000)
    mainDiv.classList.add("animation-gone-center")
    setTimeout(function() {
        begin.remove()
            
        createBattleGround()
    }, 7000); 
    
}


function createBattleGround(img){
    
    let battleground = document.createElement("div");
    battleground.style.width = "800px";
    battleground.style.height = "600px";
    battleground.style.background = "#7CFC00";
    battleground.style.color = "white";
    battleground.setAttribute("id", "battleground");
    document.getElementById("UwU").appendChild(battleground);
}

function createrPlayer(x){
    let player1 = document.createElement("IMG");
    player1.setAttribute("id", "player1");
    document.getElementById("battleground").appendChild(player1);
    document.getElementById("player1").src = "img/" + x + ".png";
}
