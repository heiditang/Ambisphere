page1: <button onclick="ChangeGender('boy')">
        <button onclick="ChangeGender('girl')">
        <button onclick="NextPage('girl')">
        
////js
var pkg = {
    page:0,
    gender:""
}


var savePkg = localStorage.getItem("pkg");
if(savedPkg){
    pkg = JSON.parse(savedPkg);
}

console.log(pkg);

var hander = {
    set:function(obj, props, value){
        
    }
}
var prox = new Proxy(pkg, handler);

//page 1 function
function ChangeGender(text){
    pkg.gender = text;
    localStorage.setItem("pkg", 
    Json.stringify(pkg));
}

function NextPage(page){
    if(page==2){
        pkg.page = 2;
        Save
    }
}