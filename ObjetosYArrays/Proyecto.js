//Dupliar el array anterior y aplicarle la funcion raiz a todos los elementos
const array = [4, 9, 24, -1];
//const array2 = array.concat(array); //Duplica el array j
const array2 = array;
const resultado = [];
for(i=0; i<array.length; i++)
{   
    const objeto = 
    {
        original: array2[i],
        modificado: Math.sqrt(array2[i])
    };
    resultado.push(objeto); 
    if(objeto.original<0)
    {
        objeto.modificado = "Número menor a 0"; 
    }
    console.log(objeto.modificado)
    // const redondeado = Number(objeto.modificado.toFixed(2));
}
console.log(resultado); 


