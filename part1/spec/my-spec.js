// sample syntax

// describe("Module", function() {
//   it("should do something", function() {
//     expect(true).toEqual(false);
//   });
// });

describe('joinTest', function() {
 it('should return Sunday for 0', function() {
  expect(joinTest(0)).toBe('Sunday');
 });
 it('should return Monday for 1', function() {
  expect(joinTest(1)).toBe('Monday');
 });
 it('should return Tuesday for 2', function() {
  expect(joinTest(2)).toBe('Tuesday');
 });
 it('should return Wednesday for 3', function() {
  expect(joinTest(3)).toBe('Wednesday');
 });
 it('should return Thursday for 4', function() {
  expect(joinTest(4)).toBe('Thursday');
 });
 it('should return Friday for 5', function() {
  expect(joinTest(5)).toBe('Friday');
 });
 it('should return Saturday for 6', function() {
  expect(joinTest(6)).toBe('Saturday');
 });
})