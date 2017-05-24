{
    console.log(0b111110111);
}
{
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));
    console.log('1/0',Number.isFinite(1/0));
    console.log('NaN is number?',Number.isNaN(NaN));

}
{
    console.log('25',Number.isInteger(25));
    console.log('25.0',Number.isInteger(25.0));
    console.log('25.1',Number.isInteger(25.1));
    console.log('25.1',Number.isInteger('25.1'));
}
{
    console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    console.log('10',Number.isSafeInteger(10));
}
{
    console.log('10.78787', Math.trunc(10.797979));
}
{
    console.log('-8',Math.sign(-8));
    console.log('0',Math.sign(0));
    console.log('8',Math.sign(8));
    console.log('foo',Math.sign('foo'));
}
{
    console.log('-1',Math.cbrt(-1));
    console.log('8',Math.cbrt(8));
}