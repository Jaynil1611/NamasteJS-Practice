const a = 20;
{
    const a = 200;
    {
        const a = 2000;
        console.log(a);
    }
    console.log(a);
}
console.log(a);