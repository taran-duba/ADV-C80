function join() {
    //Left
    var j1 = document.getElementById("j1").value;
    var j2 = document.getElementById("j2").value;
    var j3 = document.getElementById("j3").value;
    var j4 = document.getElementById("j4").value;
    var j5 = document.getElementById("j5").value;
    var j6 = document.getElementById("j6").value;
    var left_side = j1.concat(" ", j2," ", j3, " ", j4, " ", j5," ", j6);
    //Right
    var j01 = document.getElementById("j01").value;
    var j02 = document.getElementById("j02").value;
    var j03 = document.getElementById("j03").value;
    var j04 = document.getElementById("j04").value;
    var j05 = document.getElementById("j05").value;
    var j06 = document.getElementById("j06").value;
    var right_side = j01.concat(" ", j02," ", j03, " ", j04, " ", j05," ", j06);
    var paragraph = left_side + " " + right_side;
    document.getElementById("display-paragraphs").innerHTML = paragraph;
}