{
    let map = new Map();
    let arr = [];
    //add

    map.set('t',1);
    arr.push({'t':1});
    console.info('map-arr',map,arr)

    // check it ou
    let mep_exist = map.has('t');
    let arr_exist = arr.find(item =>{
        item.t
    });
    console.info('mep_exist',mep_exist,arr_exist)

    //modify
    let map_modify = map.Set('t',2);
    arr.forEach(item =>
        item.t?item.t = 2:''
    )

    //delete
    map.delete('t');
    arr.splice(arr.findIndex(item => item.t))
}
{
    let set = new Set();
    let arr = [];

    //add
    let item = set.add({'t':1});
    arr.push({'t':1});

    //check
    set.has(item);

    //delete
    set.forEach(item => item.t ? set.delete(item):'');
    //modify
    set.forEach(item => item.t ? item.t = 2:'')
}
{
    let item = {t:1}
    let map = new Map();
    let set = new Set();
    let obj = {};
    //add
    map.set('t',1);
    set.add(item);
    obj['t'] =  1;

}
