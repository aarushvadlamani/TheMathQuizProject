
function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    question_number = "<h4>" + number1 + "X"+ number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
question_turn="player_1";
answer_turn="player_2";
