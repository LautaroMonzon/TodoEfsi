function randomizar(min, max)
{
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


export function elegirNumeros(valor)
{
  if (valor === 0) return randomizar(0, 9)
  if (valor === 9) return randomizar(90, 100)
  return randomizar(valor * 10, valor * 10 + 9)
}
  



let cantidadCartones = 3;
let cantidadNumsEnCarton = 15;
let cartones = [];
let numRandom = 0;
for(let i=0; i<cantidadCartones;i++)//crear 3 cartones
{
    let contenidoCarton = [];
    let numeroSacado = 0;
    let posicion = -1;
    let noSeRepite = true;
    contenidoCarton.push(null);
    for(let j=0;j<10;j++) //pushea los primeros 10 numeros para carton (1 de cada decena)
    {
        contenidoCarton.push(elegirNumeros(j));
    }
    while(contenidoCarton < cantidadNumsEnCarton)
    {
        posicion++;
        if ((Math.random() > 0.5) === true)
        {
            while(noSeRepite === true)
            {
              numeroSacado = (elegirNumeros(j));
            }
        }
        if(posicion === 9)
        {
            posicion = -1;
        }
        
    }
    cartones.push(contenidoCarton); 
}
console.log(cartones[0]);
