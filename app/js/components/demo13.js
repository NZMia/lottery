{
    let obj ={
        time:'09-23-11',
        name:'234',
        _r:'2'
    };

    let monitor = new Proxy(obj,{
        get(target,key){
            return target[key].replace('11','13')
        },

        set(target,key,value){
            if(key != 'name'){
                return target[key] =value;
            }
        },
        //
        has(tarage, key){
            if(key === 'name'){
                return tarage[key];
            }else{
                return false
            }
        },

        deleteProperty(target,key){
            if(key.indexOf('_') != -1){
                delete target[key];
                return true;
            }else{
                return target[key]
            }


        },
        //Object.key, Object.getOwnPropertySymbols, Object.getOwnPropertyNames()
        ownKeys(target){
            return Object.keys(target).filter(item => item != 'time')
        }

    });
    // delete  monitor._r
    console.log('ownKey', Object.keys(monitor));

}
{
    let obj ={
        time:'09-23-11',
        name:'234',
        _r:'2'
    };
    console.log('reflect get',Reflect.get(obj,'time'));
    Reflect.set(obj,'name','Mia');
    console.log(obj);
    console.log('has',Reflect.has(obj,'name'));
}
{

    function validator(target, validator) {
        return new Proxy(target,
            {
            _validator:validator,
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)){
                    let val = this._validator[key];
                    if(!!val(value)){
                        return Reflect.set(target,key,value,proxy)
                    }else{
                        throw Error(`can not set up ${key} `)
                    }
                }else{
                    throw Error(`${key} not exist`)
                }
            }
        })
    }
    const personValidators = {
        name(val){
            return typeof val ==='string'
        },
        age(val){
            return typeof val === 'number' && val > 18
        }
    }
    class Person{
        constructor(name,age){
            this.name = name;
            this.age = age;
            return validator(this, personValidators)
        }
    }
    const person1 = new Person('LI','30');
    console.info(person1);
    person1.name =48;

}