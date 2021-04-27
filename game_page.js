player1_name = localStorage.getItem("number1");
player2_name = localStorage.getItem("number2");

player1_score=0;
player2_score=0;

document.getElementById("number1").innerHTML=number1_number+":";
document.getElementById("number2").innerHTML=number2_number+":";

document.getElementById("number1_score").innerHTML=number1_score;
document.getElementById("number2_score").innerHTML=number2_score;

function send()
{
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2)


    question_word = "<h4 id='word_display'>"+number1+"X"+number2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}