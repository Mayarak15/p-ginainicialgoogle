body = document.querySelector("#bodyy");
function personalizar(){
  div = document.querySelector("#idiv");
  icone = document.querySelector("#iconex");
  lapis = document.querySelector("#iconelapis");
  
  if (div.style.display === "none"){
  div.style.display = "grid";
  div.style.gridTemplateColumns = "1fr 1fr";
  div.style.justifyItems = "center";
  div.style.alignItems = "center";
  icone.style.display = "block";
  lapis.style.display = "none";
}
else{
  div.style.display = "none";
  lapis.style.display = "block";
  icone.style.display = "none";
}
  
}

let tema = localStorage.getItem('estilo');

if(localStorage.estilo === "1"){
function laranja(){
    body.style.background = "orange";
    caica = document.querySelector("#caixaaa").style.border = "none";
    localStorage.estilo = "1";
}
}
function rosa(){
  body.style.background = "pink";
  caica = document.querySelector("#caixaaa").style.border = "none";
  localStorage.estilo = "2";
}
function marrom(){
  body.style.background = "brown";
  caica = document.querySelector("#caixaaa").style.border = "none";
  localStorage.estilo = "3";
}
function roxo(){
  body.style.background = "purple";
  caica = document.querySelector("#caixaaa").style.border = "none";
  localStorage.estilo = "4";
}
function branco(){
  body.style.background = "white";
  caica = document.querySelector("#caixaaa").style.border = "1px solid black";
  localStorage.estilo = "5"; 
}