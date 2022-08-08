var player1 = prompt ("qva,makrateli, furceli")
var player2 = prompt ("qva,makrateli, furceli")



if(player1 == "qva" && player2 == "makrateli"){
    console.log("the winer is Player1")
}
else if (player1 == "makrateli" && player2 == "furceli"){
    console.log("the winer is Player1")
}
else if (player1 == "qva " && player2 == "furceli"){
    console.log("the winer is Player1")
}
else if (player1 == player2){
    console.log("it is draw")
}
else{
    console.log("Player2 is win")
}
 