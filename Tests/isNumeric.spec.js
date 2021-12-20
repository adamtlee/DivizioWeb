const { isNumeric, determineWeight } = require("../server");

test("isNumeric value passes for numeric value", () => {
    expect(isNumeric(3.14)).toBe(true);
});