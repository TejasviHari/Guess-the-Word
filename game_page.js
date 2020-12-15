player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn:"+player1_name;
document.getElementById("player_answer").innerHTML="Question turn:"+player2_name;

function send(){

get_word=document.getElementById('word').value;
word=get_word.toLowerCase();

charAt1=word.charAt(1);

length_divide_2=Math.floor(word.length/2);
charAt2=word.charAt(length_divide_2);

length_minus=word.length-1;
charAt3=word.charAt(length_minus);

remove_1=word.replace(charAt1,"_");
remove_2=remove_1.replace(charAt2,"_");
remove_3=remove_2.replace(charAt3,"_");
console.log(remove_3);

question_word="<h4 id='question'>Q."+remove_3+"</h4>";
answer_input="<br>Ans:<input type='text' id='answer' placeholder='Your Word'>";
check="<br><br><button class='btn btn-success' onclick='score()'>Check</button>";
row=question_word+answer_input+check;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";

}

question_turn="player_1";
answer_turn="player_2";

function score(){
user_answer=document.getElementById("answer").value;
answer=user_answer.toLowerCase();

if(answer==word){
    if(answer_turn=="player_1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;

    }
    else
    {
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
}
if(question_turn=="player_1"){
    question_turn="player_2";
    document.getElementById("player_question").innerHTML="Question Turn-"+player2_name;

}

else{
    question_turn="player_1";
    document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;
}


if(answer_turn=="player_1"){
    question_turn="player_2";
    document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;

}

else{
    question_turn="player_1";
    document.getElementById("player_answer").innerHTML="Answer Turn-"+player1_name;
}

}