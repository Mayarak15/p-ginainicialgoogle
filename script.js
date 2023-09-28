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
function laranja(){
    body.style.background = "orange"
}
function rosa(){
  body.style.background = "pink"
}
function marrom(){
  body.style.background = "brown"
}
function roxo(){
  body.style.background = "purple"
}
function branco(){
  body.style.background = "white"
}