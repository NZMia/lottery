{
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log('size',list.size)
}
{
    let arr = [1,2,3,4,5]
    let list = new Set(arr);
    console.log('size',list.size)
}
{
    let list = new Set();
    list.add(5);
    list.add(7);
    list.add(5);
    console.log('size',list.size)
}
{
    let arr = [1,2,3,2,1,4,5];
    console.log('unique',new Set(arr));
}
{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr)
    // console.log('has', list.has('has'));
    // console.log('delete', list.delete('add'),list);
    // list.clear();
    // console.log('list', list);

    for(let key of list.keys()){
        console.log('keys',key)
    }
    for(let value of list.values()){
        console.log('keys',value)
    }
}
{
    let weakList = new WeakSet(); // only for object
    let arg = {};
    weakList.add(arg);
    console.log('weakList',weakList);
}
{
    let map = new Map([['a',123],['b',456]]);
    console.log('mag arg', map);
    console.log('size',map.size);
    console.log('delete',map.delete(['a']),map);
    console.log('clear',map.clear(),map)

}