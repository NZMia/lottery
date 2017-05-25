//Generator return itertor
{
    let tell = function*(){
        yield 'a';
        yield 'b';
        return 'c'
    };
    let k = tell();
    // console.log(k.next());
    // console.log(k.next());
    // console.log(k.next());
}
{
    let obj = {};
    obj[Symbol.iterator] = function*(){
        yield 1;
        yield 2;
        yield 3;
    }
    for(let value of obj){
        console.log('value:',value)
    }
}
{
    let state = function*(){
            while(1){
                yield 1;
                yield 2;
                yield 3;
            }
        }
    let status = state();
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
}
//
// {
//     let state = async function(){
//         while(1){
//             await 1;
//             await 2;
//             await 3;
//         }
//     }
//     let status = state();
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
// }
{
    let draw = (count)=>{
        //

        //output rest count
        console.info(`you still has ${count}`);
    }
    let residue = function *(count) {
            while (count>0){
                count --;
                yield draw(count);
            }
        }
    let start = residue(5);
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent ='get';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',()=>{
        start.next();
    },false)
}
{
    //long loop、wetSocket
    let ajax = function*(){
        yield new Promise((res,rej)=>{
            setTimeout(()=>{
                res({code:0})
            },200)
        })
    }
    let pull = ()=>{
        let generator = ajax();
        let step = generator.next();
        step.value.then((d)=>{
            if(d.code != 0){
                setTimeout(()=>{
                    console.log('wait');
                    pull();
                },1000)
            }else{
                console.info(d)
            }
        })
    }
    pull();

}