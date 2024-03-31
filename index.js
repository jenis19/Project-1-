var string = "";
$("button").click(function(event){
    var a= $(this).text();
    if (a=="="){
        string=eval(string)
    }
    else if (a=="C"){
        string="";
    }
    else{
        string = string + a;
    }
    document.querySelector("input").value= string  
})

