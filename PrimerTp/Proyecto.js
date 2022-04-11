const lista = [11, 33, 2, -1, 110, 99, 8];
let listo = 0;
let numMasAlto = 0;
let segundoNumMasAlto = 0;
for(i=0; i<lista.length;i++)
{
    if(lista[i] % 2 !== 0 && lista[i] > numMasAlto)
    {
        segundoNumMasAlto = numMasAlto;
        numMasAlto = lista[i];
    }
}
console.log(segundoNumMasAlto);