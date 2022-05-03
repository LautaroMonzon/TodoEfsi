function randomizar(min, max)
{
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function elegirNumeros(valor)
{
    switch (valor) 
    {
        case 0:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
          valor = randomizar(0,9)
        break;
        case 1:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(10,19)
        break;
        case 2:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(20,29)
        break;
        case 3:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(30,39)
        break;
        case 4:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(40,49)
        break;
        case 5:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(50,59)
        break;
        case 6:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(60,69)
        break;
        case 7:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(70,79)
        break;
        case 8:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(80,89)
        break;
        case 9:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(90,100)
        break;
    }
    return valor;
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
