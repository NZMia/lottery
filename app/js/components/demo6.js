
{
    let arr = Array.of(3,4,5,6,7,8);
    console.log(arr);
    let empty = Array.of();
    console.log(empty);
}
{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function(item){
        console.log(item.textContent);
    })
    Array.of(3,4,5,6,7).map(function (item) {
        console.log(item*2)
    })
}
{
    console.log('fill-7',[1,2,3,4,5,6].fill(7));
    console.log('fill.pos',[1,2,3,4].fill(7,2,4))
}
{
    for(let value of [1,2,3,4,5,6].values()){
        console.log('values',value);
    }
}
{
    for(let [index, value] of [1,2,3,4,5,6].entries()){
        console.log('[keys,values]',index,value);
    }
}
{
    console.log([1,2,3,4,5,6].copyWithin(0,1,5))
}
{
    console.log([1,2,3,4,5,6].find((item)=>{
        return item >3
    }))
    console.log([1,2,3,4,5,6].findIndex((item)=>{
        return item >3
    }))
}
{
    console.log('number',[1,2,NaN].includes(1));
}