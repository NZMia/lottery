{
    let readonly = (target,attrbuteName,attributeDescrip)=>{
        attributeDescrip.writable = false;
        return attributeDescrip
    };
    class Test{
        @readonly
        time(){
            return '20-3093-3'
        }
    }
    let test = new Test();
    //
    // test.time = ()=>{
    //     console.log('reset-time');
    // }
    console.log(test.time());

}
{
    let typeName=(target,name,description)=>{
        target.myName ='MIA';
    }
    @typeName
    class Test{

    }
    console.log('name:', Test.myName);
    //core-decorators: third parts framework of decorators
}
{
    let log=(type)=>{
        return (target,name,description) =>{
            let src_method = description.value;
            description.value = (...arg)=>{
                src_method.apply(target,arg);
                console.info(`log ${type}`);
            }
        }
    }
    class AD{
        @log('show')
        show(){
            console.info('ad is show')
        }
        @log('click')
        click(){
            console.info('ad is click')
        }
    }
    let ad = new AD();
    ad.show();
    ad.click();
}