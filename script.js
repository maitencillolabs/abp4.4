
function tablamultiplicar(){
    let num=document.getElementById("tablaDel").value;
    for (var i = 1; i <= 10; i++) {
        multi = num * i;
        console.log(num + "x" + i + "=" + multi);
    };
}
let resultado=document.getElementById("resultado");
function sumar(){
    resultado.innerHTML=``
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let result=num1+num2;
    resultado.innerHTML+=`<h3>${result}</h3>`;
}
function restar(){
    resultado.innerHTML=``
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let result=num1-num2;
    if(result>=0){
    resultado.innerHTML+=`<h3>${result}</h3>`;}
    else{
    resultado.innerHTML+=`<h3>0</h3>`;}
}
let verPorcentaje=document.getElementById("porcentaje");
function porcentaje(){
    verPorcentaje.innerHTML=``
    let num=parseInt(document.getElementById("numero").value);
    let cien=parseInt(document.getElementById("cien").value);
    let result=num*100/cien;
    verPorcentaje.innerHTML+=`<h3>${result}%</h3>`
}