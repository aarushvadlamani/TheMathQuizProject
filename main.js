function addUser(){
    player_1=document.getElementById("player 1 name input").value;
    player_2=document.getElementById("player 2 name input").value;

    localStorage.setItem("player_1",player_1);
    localStorage.setItem("player_2",player_2);
    window.location="quiz_game_page.html";player_1=document.getElementById("player 1 name input").value;
    player_2=document.getElementById("player 2 name input").value;
}