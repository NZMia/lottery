
{
    //es5
    let regex = new RegExp('asd','i');
    let regex2  = new RegExp(/asd/i);
    console.log(regex.test('xy234'),regex2.test('ddd456'));
    //es6
    let regex3 = new RegExp(/asd/ig,'i')
    console.log(regex3.flags);
}
{
    //e5 i,g
    //es6 add y, u
    // g: gloable, y:from the lastest position.
    let s ='bbb--bb--b';
    let regex = /b+/g;
    let regex2 = /b+/y;
    console.log('one',regex.exec(s),regex2.exec(s));
    console.log('two',regex.exec(s),regex2.exec(s));

    console.log(regex.sticky, regex2.sticky);
}
{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));

    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));
    console.log('\u{20BB7}');
    // 当字节大于2个字节以后用'u'
}