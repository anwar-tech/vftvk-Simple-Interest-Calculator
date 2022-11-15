function compute()
{
    var p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;

    //chech zero value
    if(principal<1){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //calculate inerest
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");

    //return the result
    result.innerHTML =
        "If you deposit \<span class=highlight\>"+principal+"\<\/span\>,\<br\>at an interest rate of \<span class=highlight\>"+rate+"\<\/span\>\<br\>You will receive an amount of \<span class=highlight\>"+interest+"\<\/span\>,\<br\>in the year \<span class=highlight\>"+year+"\<\/span\>.\<br\>";
}

function updateRate() 
{
    //update on slider changes
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
