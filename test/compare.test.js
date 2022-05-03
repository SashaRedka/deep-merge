const expect = require("chai").expect;
const deepCompare = require("../src/deep-compare");

describe("Deep compare testing", () => {
  it("1. Expect numbers to be equal", () => {
    expect(deepCompare(1, 1)).to.equal(true);
  });

  it("2. Expect same types not to be equal", () => {
    expect(deepCompare(1, 2)).to.equal(false);
  });

  it("3. Expect nulls to be equal", () => {
    expect(deepCompare(null, null)).to.equal(true);
  });

  it("4. Expect null not to be equal object", () => {
    expect(deepCompare(null, {})).to.equal(false);
  });

  it("5. Expect array not to be equal object", () => {
    expect(deepCompare([], {})).to.equal(false);
  });

  it("6. Expect different length of arrays not to be equal", () => {
    expect(deepCompare([1, 2, 3], [1, 2, 3, 4, 5])).to.equal(false);
  });

  it("7. Expect same length of arrays not to be equal", () => {
    expect(deepCompare([1, 2, 3], [1, 8, 9])).to.equal(false);
  });

  it("8. Expect arrays to be equal", () => {
    expect(deepCompare([1, 2, 3], [1, 2, 3])).to.equal(true);
  });

  it("9. Expect deep arrays to be equal", () => {
    expect(
      deepCompare(
        [1, 2, [5, 6, 7], [2, [6, 5, 8], [2, 1]], 9],
        [1, 2, [5, 6, 7], [2, [6, 5, 8], [2, 1]], 9]
      )
    ).to.equal(true);
  });

  it("10. Expect deep arrays not to be equal", () => {
    expect(
      deepCompare(
        [1, 2, [5, 6, 7], [2, [6, 5, 8], [2, 1]], 9],
        [1, 2, [5, 6, 0], [2, [6, 5, 8], [2, 1]], 9]
      )
    ).to.equal(false);
  });

  it("11. Expect different sizes of objects not to be equal", () => {
    expect(deepCompare({ a: 1, b: 2 }, { a: 1, c: 2, g: 3 })).to.equal(false);
  });

  it("12. Expect same sizes of objects not to be equal", () => {
    expect(deepCompare({ a: 1, b: 2 }, { a: 1, c: 2 })).to.equal(false);
  });

  it("13. Expect same objects to be equal", () => {
    expect(deepCompare({ a: 1, b: 2, r: 10 }, { a: 1, b: 2, r: 10 })).to.equal(
      true
    );
  });

  it("14. Expect deep objects to be equal", () => {
    expect(
      deepCompare(
        { a: 1, b: { g: 6, f: [1, { g: 7 }, 2], j: 6 }, c: 6, p: [] },
        { a: 1, b: { g: 6, f: [1, { g: 7 }, 2], j: 6 }, c: 6, p: [] }
      )
    ).to.equal(true);
  });

  it("15. Expect deep objects not to be equal", () => {
    expect(
      deepCompare(
        { a: 1, b: { g: 6, f: [1, { g: 7 }, 2], j: 6 }, c: 6, p: [] },
        { a: 1, b: { g: 6, f: [1, { g: 7 }, 2], j: 6 }, c: 6, p: [10] }
      )
    ).to.equal(false);
  });
});
