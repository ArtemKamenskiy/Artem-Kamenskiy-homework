'use strict';

test('test_numbers', () => {
    let num = Number.isInteger(10);
    let num1 = parseInt("10");
    //properties
    
    expect(num).toEqual(true);
    expect(num1).toEqual(10);
    });