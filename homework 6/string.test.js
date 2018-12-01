'use strict';

test('test_string', () => {
    let str = "hello".toUpperCase();
    let str1 = "HELLO".toLowerCase();
    let str2 = "    hello            ".trim();
    let str3 = "hello".slice(1, -1);
    let str4 = "hello".charAt(0);
    let str5 = "hello ".concat("world");
    let str6 = "hello".repeat(2);
    let str7 = "hello world".endsWith("world");
    let str8 = "hello".padEnd(12, "world");
    expect(str).toEqual("HELLO");
    expect(str1).toEqual("hello");
    expect(str2).toEqual("hello");
    expect(str3).toEqual("ell");
    expect(str4).toEqual("h");
    expect(str5).toEqual("hello world");
    expect(str6).toEqual("hellohello");
    expect(str7).toEqual(true);
    expect(str8).toEqual("helloworldwo");
    
});


test('test_arrays', () => {
    var arr = [1, 2, 3].concat([4, 5, 6]);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
    });