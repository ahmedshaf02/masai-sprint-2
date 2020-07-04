//testing is important
// debugging
// development speed
// update in code
// test driven development
// test is a testing function

const test = (description, func) => {
    console.log(description)
    func()
}

function expect(received) {
    function toBe(expected) {
        if (received === expected) {
            console.log("test passed")
        } else {
            console.log("test failed")
            console.log("received :", received)
            console.log("expected:", expected)
        }
    }
    return { toBe }
}

// test("add 1 and 2, sum should be 3", () => {
//     expect(1 + 1).toBe(3)
// })

const sum = (a, b) => a + b
const absDiff = (a, b) => Math.abs(a - b)

test("sum of 3 and 5, should be 8", () => {
    expect(sum(3, )).toBe(8)
    expect(absDiff(3, 4)).toBe(1)
})