document.addEventListener('DOMContentLoaded', start, false);

var start = function(){

}();

var showHint = function(e){
    e.className = "hidden" ? "visible" : e.className = "visible" ? "hidden" : "";
}