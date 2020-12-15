function Login(){
    player1=document.getElementById("user_name1").value;
    player2=document.getElementById("user_name2").value;

    localStorage.setItem("player1_name",player1);
    localStorage.setItem("player2_name",player2);

    window.location="game_page.html";
}