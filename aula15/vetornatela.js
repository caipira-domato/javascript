/*
let valores = [8, 7, 4, 2, 9]
console.log(valores)

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 
Modo mais antigo de se fazer */

let valores = [1, 5, 2, 6, 4, 3]
console.log(valores)

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}