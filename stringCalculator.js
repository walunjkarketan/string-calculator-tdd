function add(numbers) {
    if (numbers === "") return 0;
    if (!numbers.includes(",")) return parseInt(numbers, 10);

    const numArray = numbers.split(",").map(num => parseInt(num, 10));
    return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
