// displaying task name 
var title=document.createElement("h1");
title.innerText="ADVICE SLIP JSON API"
// creating an container 
var container=document.createElement("div");
container.setAttribute("class","container");
// creating an row
var row=document.createElement("div");
row.setAttribute("class","row");
// appending row into container and container into document
container.append(row);
document.body.append(title,container);
// fetch api
async function foo(){
    let res=await fetch("https://api.adviceslip.com/advice");
    res=await res.json();
    return fun(res)
}
function fun(res){
 for(var i in res){
// Adding an col and card in row
    row.innerHTML=`
    <div class="col-md-4 col-sm-12">
    <div class="card">
    <div class="card-header text-white">ID: ${res[i].id}</div>
    <div class="card-body">ADVICE: ${res[i].advice}</div>
</div>
    </div>
    `
 }
}
foo()





