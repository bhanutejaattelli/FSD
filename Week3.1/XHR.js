const { XMLHttpRequest } = require("xmlhttprequest");

function getusers(){
    let xhttp=new XMLHttpRequest()

    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            let data=JSON.parse(this.responseText)
            console.log(data)
            return data
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhttp.send()
}

getusers();