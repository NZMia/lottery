
{
    console.log('a','\u0061');
    console.log('s','\u{20BB7}');
}
{
    let s = '𠮷';
    console.log('length',s.length);
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    console.log('at0', s.charCodeAt(0));
    console.log('at1',s.charCodeAt(1));

    //es6
    let s1 ='𠮷3';
    console.log('code0',s1.codePointAt(0).toString(16));
    console.log('code1',s1.codePointAt(1));
    console.log('code2',s1.codePointAt(2));
}
{
    console.log(String.fromCharCode('0x20bb7'));
}
//
{
    let string ='string';
    console.log('included', string.includes('r'));
    console.log('start', string.startsWith('str'));
    console.log('end', string.endsWith('ing'));
}
{
    let string ='abc';
    console.log('repeat', string.repeat(2));
}
{
    let name ='list';
    let info = 'hello world';
    let m =`i am ${name},${info}`
    console.log('new', m);
}
{
    console.log('1'.padStart(2,'0'));
    console.log('1'.padEnd(2,'0'));
}
{
    let user ={
        name:'mIA',
        info:'hello WORLD'
    }
    console.log(abc`i am ${user.name},${user.info}`);
    function abc(s, v1,v2) {
        console.log(s,v1,v2);
        return s+v1+v2;
    }
}
{
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}