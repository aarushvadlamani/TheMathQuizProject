player_1 = localStorage.getItem("player_1");
player_2 = localStorage.getItem("player_2");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1").innerHTML = player_1 + ":";
document.getElementById("player_2").innerHTML = player_2 + ":";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").inerHTML = player_2_score;

document.getElementById("question_turn").innerHTML = "Question Turn :" + player_1;
document.getElementById("answer_turn").innerHTML = "Answer Turn :" + player_2;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);
    lenght_divide_2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(lenght_divide_2);
    console.log(charAt2);
    lenght_minus_1 = word.length - 1;
    charAt3 = word.charAt(lenght_minus_1);
    console.log(charAt3);
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);
    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
question_turn="player_1";
answer_turn="player_2";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case = "+ answer);
    if(answer==word){

        if(question_turn=="player_1"){
            player_1_score=player_1_score+1;
            document.getElementById("player_1_score").innerHTML = player_1_score;
        }
        else{
            player_2_score=player_2_score+1;
            document.getElementById("player_2_score").innerHTML = player_2_score;
        }
    }
        if(question_turn=="player_1"){
            question_turn="player_2";
            document.getElementById("question_turn").innerHTML = "Question turn = "+player_2;
        }
        else{
            question_turn="player_1";
            document.getElementById("question_turn").innerHTML = "Question turn = "+player_1;
        }
        if(answer_turn=="player_1"){
            answer_turn="player_2";
            document.getElementById("answer_turn").innerHTML = "Answer turn = "+player_2;
        }
        else{
            answer_turn="player_1";
            document.getElementById("answer_turn").innerHTML = "Answer turn = "+player_1;
        }

  document.getElementById("output").innerHTML = ""; 
}