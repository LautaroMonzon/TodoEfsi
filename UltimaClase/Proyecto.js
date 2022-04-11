const año = [];
for(i=2022; i<2150; i++)
{
    if(((i % 4) === 0) && (i % 400) )
    {
        año.push(i); 
    }
}
console.log(año);
