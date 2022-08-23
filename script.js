function imprimirOla (){ 
    return "Olá, mundo!"
}
imprimirOla();

function imprimirNome (nome) {
    console.log(`Olá ${nome}`);
}
imprimirNome("Marcus")
imprimirNome("celio")
imprimirNome("Felipe")

// function somarNumeros(n1,n2) {
//     return n1+n2    
// } arrow function
const somarNumeros =>{
    return n1+n2
}
const retorno = somarNumeros(2,5)
console.log(retorno*2);

const imprimirNumeros=(array)=>{
    const novoArray = [];
    novoArray.push(array[0], array[array.lenght -1]) //colocando apenas a primeira e a ultima posição do array
    return novoArray
}
const retornoArray= imprimirNumeros([23,25,47,15,447,])
console.log(retornoArray);
//exercicio3
function retornaPares(array){
    const novoArray=[]
    for(let valor of array){
        if(valor%2===0){
            novoArray.push(valor)
        }//pode fazer assim (valor%2===0 && novoArray.push(valor))
    }
    return novoArray
}
console.log(retornaPares([1,2,3,4,5,6,7,8,9]));
//Exercicio fixação
const imprimirNum=(array1)=>{
    const arrayNum = [];
    arrayNum.push((array1[array1.length -1])/2, array1[0]/2)
    return arrayNum
}
const retornofix= imprimirNum([6,7,15,20])
console.log(retornofix);
const retornofix1= imprimirNum([2,7,25,11,30])
console.log(retornofix1);