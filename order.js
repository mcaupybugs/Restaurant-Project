//function to increase the count of green salad
var total=0;
function incnumber(value,price){   //Value is equal to the id of span tag
    var item=document.getElementById(value);//Accessing the span tag using value attribute
    var count=item.innerHTML;
    total+=price;
    total=Math.round(total*100)/100;
    count++;
    item.innerHTML=count;
    var display_total=document.getElementById('total');
    display_total.innerHTML=total;
    return true;
};

// Function to decrease the value of cart
function decnumber(value,price){
    var item=document.getElementById(value);//Accessing the span tag using value attribute
    var count=item.innerHTML;
    if(count>0){
        count--;
        total-=price;
        total=Math.round(total*100)/100;
    }
    var display_total=document.getElementById('total');
    display_total.innerHTML=total;
    item.innerHTML=count;
    return true;
};