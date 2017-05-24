{
    function test(s,y = 'wrold') {
        console.log('defalut',s,y)
    }
    //error
    // function test(s,y = 'wrold',c) {
    //
    // }
    test('hello');
    test('hello','kill');
}
{
    let x='test';
    function test2(x, y=x) {
        console.log('scope',x,y)
    }
    test2('kill');
}
{
    function test3(...arg) {
        for(let v of arg)
        {
            console.log('rest',v)
        }
    }
    test3(1,2,3,4,'t',6);
}
{
    console.log(...[1,2,4]);
}
{
    let arrow = v=> v*2
}
{
    function tail(x) {
        console.log('tail',x);
    }
    function fx(x){
        return tail(x)
    }
    fx(123);
}