const stringCalculator = require('./stringCalculator');

test('returns the number itself if the input contains a single number', () => {
    expect(stringCalculator.add("1")).toBe(1);
});

