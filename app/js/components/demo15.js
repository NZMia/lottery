{
    let arr = ['hello','world'];
    let map = arr[Symbol.iterator]();
    // console.log(map.next());
    // console.log(map.next());
    // console.log(map.next());
}
// must be follow this style if it it a custom design method
{
    let obj = {
        start:[1,2,3],
        end:[6,4,8],
        [Symbol.iterator](){
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            return{
                //next() is must needs
                next(){
                    if(index <len){
                        return{
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return{
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
    for(let key of obj){
        console.log(key)
    }
}
{
    let arr = ['hello','world'];
    for(let value of arr){
        console.log('value:',value);
    }
}