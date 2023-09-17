/* 
    >>getAllheaders() function 
*/

function loadData(){

    //create a new request.....
    var xhr = new XMLHttpRequest();

    //what to do response arrives.........
    xhr.onload = function(){  //onload is callback function
        document.querySelector("demo").innerHTML=this.responseText;
        //response headers 
        console.log(this.getAllResponseHeaders());
        console.log(this.getResponseHeader("ajax"));
    }

    //prepare request.......GET,POST,PUT,DELETE,PATCH,OPTIONS    
    xhr.open("GET","./demo.txt",true);  //first perametter-method request, second perametter-url, third perametter true=asynchronous and false=synchronous.

    //set a request header..........(optional)
    //xhr.setRequestHeader("name","ajax");

    //request send..........
    xhr.send();

    //request cancel
    //xhr.abort();
}