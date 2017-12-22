document.addEventListener('DOMContentLoaded', start, false);

var start = function(){

}();

var showHint = function(e){
    e.className = "hidden" ? "visible" : "hidden";
}

var showMessage = function(e){
    e.className = "hidden" ? "visible" : "hidden";
    var msg = $("#msg1").text() + $("#msg2").text() + $("#msg3").text() + $("#msg4").text() + $("#msg5").text();
    e.text = msg;
}