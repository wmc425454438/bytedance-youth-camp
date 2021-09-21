const foo = require("./foo");

jest.mock("./bar.js", () => {
    return jest.fn();
})
test("foo ",() => {
    foo();

    expect(bar).toHaveBeenCalled();
})