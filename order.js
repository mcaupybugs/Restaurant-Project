//function to increase the count of green salad
function incnumber(value){   //Value is equal to the id of span tag
    var greenn=document.getElementById(value);//Accessing the span tag using value attribute
    var count=greenn.innerHTML;
    count++;
    greenn.innerHTML=count;
    return true;
};
