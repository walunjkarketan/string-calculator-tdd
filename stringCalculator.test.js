const stringCalculator = require('./stringCalculator');

test('returns 0 for an empty string', () => {
    expect(stringCalculator.add("")).toBe(0);
});

test('returns the number itself if the input contains a single number', () => {
    expect(stringCalculator.add("1")).toBe(1);
});

