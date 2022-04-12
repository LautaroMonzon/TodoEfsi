
const año = [];
for(i=2020; i<2150; i++)
{
    if((i % 4) === 0) 
    {
        if((i % 400) === 0)
        {
            año.push(i); 
        }else if((i % 100) !== 0)
        {
            año.push(i); 
        }
    }
}
console.log(año);
