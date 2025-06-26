
//===================================================1====================================================
function calculadoraAvancada(){
let nu1 = parseFloat(prompt("Digite um número!"))
let operador  = prompt("digite uma operação "-" _ "+" _"*" _ "/"_")
let nu2 = parseFloat(prompt("Digite outro número!"))
let total = document.getElementById("classificar")


    if(operador === "-"){
       total.innerHTML = nu1 - nu2;
    } else if(operador === "+"){
        total.innerHTML = nu1 + nu2
    } else if(operador === "*"){
        total.innerHTML = nu1 * nu2
    } else if(operador === "/"){
        total.innerHTML = nu1 / nu2
    } else {
        total.innerHTML = "Se é doido é! isso não é uma operação valida!"
    }
}
//=========================================2=================================
