// sample syntax

// describe("Module", function() {
//   it("should do something", function() {
//     expect(true).toEqual(false)
//   })
// })

describe('joinTest', function() {
 it('should return the string delimeter between each string', function() {
 	expect(joinTest(['one', 'two', 'three'], ' and ' )).toBe('one and two and three')
 })
})

describe('joinTest', function() {
 it('should return the number delimeter between each string', function() {
 	expect(joinTest(['one', 'two', 'three'], 1 )).toBe('one 1 two 1 three')
 })
})

describe('joinTest', function() {
 it('should return NaN delimeter between each string', function() {
 	expect(joinTest(['one', 'two', 'three'], NaN )).toBe('one NaN two NaN three')
 })
})

describe('joinTest', function() {
 it('should return blank string delimeter between each string', function() {
 	expect(joinTest(['one', 'two', 'three'], ' ' )).toBe('one two three')
 })
})

describe('joinTest', function() {
 it('should return N strings as a delimeter between each string', function() {
 	expect(joinTest(['one', 'two', 'three'], ' a,b,c ' )).toBe('one a,b,c two a,b,c three')
 })
})

describe('joinTest', function() {
 it('should return | as a delimeter between each string', function() {
 	expect(joinTest(['one', 'two', 'three'], ' | ' )).toBe('one | two | three')
 })
})



