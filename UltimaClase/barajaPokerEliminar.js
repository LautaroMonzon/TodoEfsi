//Creo un array que tengo un objeto y ese objeto tiene todas la caracteristicas de cada carta
const tipo = ["corazon", "diamante", "picas", "trebol"];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const baraja = [];
const numerosParaEliminar = 6;
const barajaParaEliminar = new Array(52).fill(false);

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
    baraja(numeroEliminadoEnArray[i]);
}

