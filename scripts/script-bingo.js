/* Criando as bolinhas dentro da div 1-40 */
for (let c =1; c <= 40; c++) { 
    const divNaoSorteado = document.createElement("div");
    divNaoSorteado.innerHTML += `${c} `
    document.getElementById("todosNumeros").appendChild(divNaoSorteado)              
    divNaoSorteado.classList.add("numBingo");
    divNaoSorteado.id = "naoSorteado";
}

/* Sorteando o número */
const sorteioBtn = document.getElementById("sortear");
const numbers = document.getElementById("number");
const numSorteado = document.getElementById("msg-sorteados");
const result = [];
function sortearNumero() {
    //Math.floor - função de arredondamento
    const index = Math.floor(Math.random() * 40) + 1;   
        if(!result.includes(index)) {
            result.push(index)
            numbers.textContent = index;
            numSorteado.textContent = `${numSorteado.textContent} - ${index}`;
        }    
}

sorteioBtn.addEventListener("click", sortearNumero);


/* Pegando o nome dos players */
const nomeP1 = document.getElementById("txtNome1");
const nomeP2 = document.getElementById("txtNome2");

/* Adicionando o nome dos players nas cartelas */
const comecarBtn = document.getElementById("comecar");
const cartelaP1 = document.getElementById("nomeP1");
const cartelaP2 = document.getElementById("nomeP2");

function preencherNomes(){
    cartelaP1.innerHTML = nomeP1.value;
    cartelaP2.innerHTML = nomeP2.value;
    //preencherCartelas("cartelaP1", "numP1", resultadoSorteioP1);
    //preencherCartelas("cartelaP2", "numP2", resultadoSorteioP2);
    preencherCartelasP1();
    preencherCartelasP2();
}

const resultadoSorteioP1 = [];
const resultadoSorteioP2 = [];

function preencherCartelasP1() {
    
    //Criando os numeros aleatorios Cartela 1
    while (resultadoSorteioP1.length <= 15){
        const numCartela1 = Math.floor(Math.random() * 40) + 1;
        if(!resultadoSorteioP1.includes(numCartela1)) {
            resultadoSorteioP1.push(numCartela1)
        } 
    } 
    resultadoSorteioP1.sort(function(a,b){
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    for (let c =1; c <= 15; c++) { 
        const divSorteado = document.createElement("div");
        divSorteado.innerHTML += `${resultadoSorteioP1[c]} `
        document.getElementById("cartelaP1").appendChild(divSorteado)              
        divSorteado.classList.add("numP1");
        divSorteado.id = "naoSorteado";
        //divSorteado.addEventListener("click", alterarID);
    }
}

function preencherCartelasP2() {
    
    //Criando os numeros aleatorios Cartela 2
    while (resultadoSorteioP2.length <= 15){
        const numCartela2 = Math.floor(Math.random() * 40) + 1;
        if(!resultadoSorteioP2.includes(numCartela2)) {
            resultadoSorteioP2.push(numCartela2)
        } 
    } 
    resultadoSorteioP2.sort(function(a,b){
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    for (let c =1; c <= 15; c++) { 
        const divSorteado = document.createElement("div");
        divSorteado.innerHTML += `${resultadoSorteioP2[c]} `
        document.getElementById("cartelaP2").appendChild(divSorteado)              
        divSorteado.classList.add("numP2");
        divSorteado.id = "naoSorteado"; 
    }
}

comecarBtn.addEventListener("click", preencherNomes);

/* Clicando em cima muda para a classe "sorteado" */

const clickNumP1 = document.querySelectorAll(".numP1");
const clickNumP2 = document.querySelectorAll(".numP2");

function alterarID() {
    clickNumP2.forEach(function(n) {
        //n.setAttribute("id", "sorteado");
        //n.id = "sorteado";
        
        
    });
}
//clickNumP1.addEventListener("Click", alterarID);
