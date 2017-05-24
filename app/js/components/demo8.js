{
    //simple
    let a = 1;
    let b = 2;
    let es5={
        a:a,
        b:b
    }
    let es6 = {
        a,b
    }
    console.log(es5);
    console.log(es6);
    let es5_method = {
        hello:function () {
            console.log('hello')
        }
    }
    let es6_method={
        hello(){
            console.log('lllll')
        }
    }
    console.log(es5_method.hello(), es6_method.hello())
}
{
    let a = 'b';
    let es5_object={
        a:'c',
        b:'c'
    }
    let es6_object ={
        [a]:'c'
    }
    console.log(es5_object,es6_object)
}
{
    //new feature
    console.log('string',Object.is('abc','abc'));
    console.log('array',Object.is([],[]));


    console.log('copy',Object.assign({a:'a'},{b:'b'}));
    let test ={k:'123',p:'asd'};
    for(let [key,value] of Object.entries(test)){
        console.log([key,value])
    }
}
{
    
}