//Creo un array que tengo un objeto y ese objeto tiene todas la caracteristicas de cada carta
const tipo = ["corazon", "diamante", "picas", "trebol"];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const baraja = [];
const numerosParaEliminar = 6;
const barajaParaEliminar = new Array(52).fill(false);
let numCartasEliminadas = 0;

for(i=0;i<tipo.length;i++)
{
    if((tipo[i] === "corazon") || (tipo[i] === "diamante")){color = "rojo"}else{color="negro"}
    for(j=0;j<num.length;j++)
    {
        if(num[j]===13){num[j] = "K";}else if(num[j]===12){num[j] = "Q";}else if(num[j]===11){num[j] = "J";}
        const carta =
        {
            tipoCarta: tipo[i],
            numCarta: num[j],
            colorCarta: color,
        }
        baraja.push(carta); 
    }
}
const numCartasTotal = baraja.length;

function hacerRandom()
{
    let num = 0;
    num = Math.random() * (52 + 0);
    num = Math.floor(num);
    return num;
}

function elminarCartas(numerosParaEliminar)
{
    let numsEliminados = [];
    let aleatorio = 0;
    for(i=0;numsEliminados.length < numerosParaEliminar;i++)
    {    
        let validos = 0;    
        aleatorio = hacerRandom();
        while(validos < numerosParaEliminar)
        {
            if(aleatorio !== numsEliminados[validos])
            {
                validos++;
            }else 
            {
                validos = 0;  
                aleatorio = hacerRandom();
            }
        }
        numsEliminados[i] = aleatorio;
    }
    return numsEliminados;
}
let numeroEliminadoEnArray = elminarCartas(numerosParaEliminar); 
for(i=0;i<numerosParaEliminar;i++)
{
    baraja.splice(numeroEliminadoEnArray[i], 1, false);
}
while(numCartasEliminadas<numerosParaEliminar)
{
    for(i=0; i<numCartasTotal;i++)
    {
        if(baraja[i] === false)
        {
            baraja.splice(i, 1)
            numCartasEliminadas++;
        }
    }
}
console.log(numeroEliminadoEnArray);
console.log(baraja);
////////////////////////////////////////////////////////////////
var someString = "hi";
typeof someString[Symbol.iterator];          // "function"
console.log(someString[Symbol.iterator]);

/*
var someArray = [1, 5, 7];
var someArrayEntries = someArray.entries();
console.log(someArrayEntries);
*/
