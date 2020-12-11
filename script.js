function join() {
var array = ["1", "2", "3", "4", "5", "6"];
document.getElementById("display-paragraphs").innerHTML = 
    document.getElementById("j0" + array[0]).innerHTML +
    document.getElementById("j0" + array[1]).innerHTML +
    document.getElementById("j0" + array[2]).innerHTML +
    document.getElementById("j0" + array[3]).innerHTML +
    document.getElementById("j0" + array[4]).innerHTML +
    document.getElementById("j0" + array[5]).innerHTML
;
}