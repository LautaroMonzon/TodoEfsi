//Creo un array que tengo un objeto y ese objeto tiene todas la caracteristicas de cada carta
const tipo = ["corazon", "diamante", "picas", "trebol"];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const baraja = [];
const cartaCorrecta = [];
let contador = 0;

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
        if(((carta.numCarta % 2) === 0) && (carta.colorCarta === "negro"))
        {
            contador++;
            cartaCorrecta.push(true);
        }else
        {
            cartaCorrecta.push(false);
        }    
    }
}
console.log("Hay " + contador + " carta/s negras y pares en una baraja de poker, son estas:");
for(i=0;i<cartaCorrecta.length;i++)
{
    if(cartaCorrecta[i] === true)
    {
        console.log(baraja[i])
    }
}