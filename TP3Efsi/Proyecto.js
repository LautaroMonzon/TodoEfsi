//Dado un array multiplicar todos sus valores
//por el anterior menos al siguiente sin modificar
//el array original

const data = 
[
    2, 3, 5, 12, 54, 5, -1, 0, 4, 23, 66, 7 
];
let num1;
let num2;
let total = 0;

for(i=0;i<data.length;i++)
{
    num1= data[i]; num2= data[i+1]; num3= data[i-1]; 
    if(i < 0) {num3 = 0}
    num1 * num3 - num2 == total;
    console.log(total);
}
