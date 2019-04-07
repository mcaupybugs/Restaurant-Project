//function to increase the count of green salad
function incnumber(value){   //Value is equal to the id of span tag
    var item=document.getElementById(value);//Accessing the span tag using value attribute
    var count=item.innerHTML;
    count++;
    item.innerHTML=count;
    return true;
};

// Function to decrease the value of cart
function decnumber(value){
    var item=document.getElementById(value);//Accessing the span tag using value attribute
    var count=item.innerHTML;
    if(count>0){
        count--;
    }
    item.innerHTML=count;
    return true;
};