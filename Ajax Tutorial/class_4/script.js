function sendRequest(method,url,data){ 
    const promise = new Promise((resolve,reject) => {

        const xhr = new XMLHttpRequest();
        xhr.onload = function(){  
            if(this.status >= 404){
                reject(
                'There was an application error and the response status is ${this.status}'
                );
            }
            else{
                resolve(this.response);
            }
        };
        xhr.onerror = function(){  
           reject("there was an error!");
        };
        xhr.open(method,url);  
        xhr.send(data);
    });
    return promise;
}
/* -------------------------------------------------------------- */
function getData(){
    sendRequest("GET","https://jsonplaceholder.typicode.com//1")
    .then((responseData)=>{
        console.log(responseData);
    })
    .catch((error)=>{
        console.log(error);
    });
}
/* ----------------------------------------------------------------- */

function sendData(){
    sendRequest("POST","https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
        title:"rubel",
        body:"hossen",
        userId:101,
    })).then((responseData)=>{
        console.log(responseData);
    });
}

const getBtn  = document.getElementById("get");
const sendBtn = document.getElementById("send");

getBtn.addEventListener("click",getData);
sendBtn.addEventListener("click",sendData);