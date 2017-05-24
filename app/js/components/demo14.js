{
    let ajax = function (callback) {
        console.log('do it ');
        setTimeout(function(){
            callback && callback.call()
        },1000)
    }
    ajax(function () {
        console.log('timeout1');
    })
}
{
    let ajax = function () {
        console.log('2');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },1000)
        })
    }
    ajax().then(function () {
        console.log('promise','timeouts');
    })

}
{
    let ajax = (num)=>{
        console.log('1');
        return new Promise((res,rej)=>{
            if(num >5){
                res()
            }else{
                throw new Error('wor');
            }
        })
    }
    ajax(3).then(()=>{
        console.log('3')
    }).catch((err)=>{
        console.log('catch',err)
    })
}
{
    
}