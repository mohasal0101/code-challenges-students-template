"use strict";

const { isSame, doTree } = require  ("./challenge02");

describe(" isSame to check trees ", () => {
  it("Testing 1", () => {
    let first = doTree([1, 2, 3], [2, 1, 3]);
    let second = doTree([1, 2, 3], [2, 1, 3]);

    let check = isSame(first, second);
    expect(check).toBe(true);
  });

  it("Testing 2", () => {
    let first = doTree([1, 2], [2, 1]);
    let second = doTree([1, 2], [1, 2]);

    let check = isSame(first, second);
    expect(check).toBe(false);
  });

  it("Testing 3", () => {
    let first = doTree([1, 2, 1], [2, 1, 1]);
    let second = doTree([1, 1, 2], [1, 1, 2]);

    let check = isSame(first, second);
    expect(check).toBe(false);
  });
});