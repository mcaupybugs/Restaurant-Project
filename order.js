var green_count=document.getElementById('green_count');
function incnumber(){
    var count=green_count.innerHTML;
    count++;
    green_count.innerHTML=count;
    return true;
};
