'use strict';

test('test_arrays', () => {
    let arr = [1, 2, 3].concat([4, 5, 6]);
    let arr1 = ["a", "b", "c", "d", "e", "f", "g"].copyWithin(0, 3);
    let arr2 = [1, 2, 3, 4, 5, 6, 7, 8].copyWithin(0, 3);
    let arr3 = Array.from("hello");
    //properties
    let arrn = ["html", "css", "js"].length;
    expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
    expect(arr1).toEqual(["d", "e", "f", "g", "e", "f", "g"]);
    expect(arr2).toEqual([4, 5, 6, 7, 8, 6, 7, 8]);
    expect(arr3).toEqual(["h", "e", "l", "l", "o"]);
    //expect properties
    expect(arrn).toEqual(3);
    }); 