var bColFlag = false;
function switchCols(){
    if(!bColFlag){
        document.getElementById("col1").style.width="48%";
        document.getElementById("col2").style.width="48%";
        bColFlag = true;
        document.getElementById("parent").classList.add("row");
    }
    else{
        document.getElementById("col1").style.width="100%";
        document.getElementById("col2").style.width="100%";
        bColFlag = false;
        document.getElementById("parent").classList.remove("row");
    }
}