/* 
>>double callback function 
*/

function loadData(callbackF) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        callbackF(this);
    };
    xhr.open("GET","./demo.txt");
    xhr.send();

}

function myCallback1(xhr) {
    var container = document.querySelector("demo");
    container.innerHTML = xhr.responseText;
}
function myCallback2(xhr) {
    var container = document.querySelector("demo2");
    container.innerHTML = xhr.responseText;}