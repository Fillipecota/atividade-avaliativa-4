import leia from "readline-sync"

var palavra = leia.question("DIGITE UMA PALAVRA: ")

var num = 0

for(var i = 0; i < palavra.length; i++){
    if (palavra[i] === "a"|| "e"|| "i "|| "o" || "u"){
        num ++
    }
    console.log(num)
}