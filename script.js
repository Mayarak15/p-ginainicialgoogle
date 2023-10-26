document.body
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




function laranja(){
  document.body.style.background = "orange";
    caica = document.querySelector("#caixaaa").style.border = "none";
    
}

function rosa(){
  document.body.style.background = "pink";
  caica = document.querySelector("#caixaaa").style.border = "none";
  
}
function marrom(){
  document.body.style.background = "brown";
  caica = document.querySelector("#caixaaa").style.border = "none";
  localStorage.estilo = "3";
}
function roxo(){
  document.body.style.background = "purple";
  caica = document.querySelector("#caixaaa").style.border = "none";

}
function branco(){
  document.body.style.background = "white";
  caica = document.querySelector("#caixaaa").style.border = "1px solid black";
}

