const stringCalculator = require('./stringCalculator');

test('returns 0 for an empty string', () => {
    expect(stringCalculator.add("")).toBe(0);
});
