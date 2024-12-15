const stringCalculator = require('./stringCalculator');

test('returns 0 for an empty string', () => {
    expect(stringCalculator.add("")).toBe(0);
});

test('returns the number itself if the input contains a single number', () => {
    expect(stringCalculator.add("1")).toBe(1);
});

test('returns the sum of two numbers separated by a comma', () => {
    expect(stringCalculator.add("1,5")).toBe(6);
});

test('handles new lines as delimiters in addition to commas', () => {
    expect(stringCalculator.add("1\n2,3")).toBe(6);
});

