const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function () {
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2);
    //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


test("One Dollar should be 447.65000000000003 Yens", function () {
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(447.65000000000003);
    //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 127.9)
})

test("One Yen should be 2.8000000000000003 Pounds", function () {
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(2.8000000000000003);
    //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 0.8)
})