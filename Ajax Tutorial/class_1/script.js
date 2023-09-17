function loadData(){

    //create a new request.....
    var xhr = new XMLHttpRequest();

    //what to do response arrives.........
    xhr.onload = function(){  //onload is callback function
        document.querySelector("demo").innerHTML=xhr.responseText;
    }

    //prepare request.......GET,POST,PUT,DELETE,PATCH,OPTIONS    
    xhr.open("GET","./demo.txt",true);  //first perametter-method request, second perametter-url

    //set a request header..........(optional)
    xhr.setRequestHeader("name","ajax");

    //request send..........
    xhr.send();

    //request cancel
    //xhr.abort();
}