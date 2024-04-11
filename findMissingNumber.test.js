const findMissingNumber = (arr) => {
  if (
    !(
      Array.isArray(arr) &&
      arr.length &&
      arr.length === arr.filter((element) => element !== undefined).length &&
      arr.every((element) => Number.isInteger(element))
    )
  )
    return "Please, enter valid number sequence!";

  const sortedArr = arr.slice().sort((a, b) => a - b);
  const subtractedArr = sortedArr.slice(1);

  for (let index = 0; index < subtractedArr.length; index++) {
    console.log(subtractedArr[index]);
    let diff = subtractedArr[index] - sortedArr[index];
    if (diff > 1) return sortedArr[index] + 1;
    else if (!diff)
      return "Two or more elements are equal. Please, enter valid number sequence!";
  }
  return "All numbers are present!";
};

test("find one missing element", () =>
  expect(findMissingNumber([5, 0, 1, 3, 2])).toBe(4));

test("find one missing element", () => {
  expect(findMissingNumber([7, 9, 10, 11, 12])).toBe(8);
});

test("no array argument - number", () => {
  expect(findMissingNumber(1)).toBe("Please, enter valid number sequence!");
});

test("no array argument - string", () => {
  expect(findMissingNumber("1")).toBe("Please, enter valid number sequence!");
});

test("no array argument - boolean", () => {
  expect(findMissingNumber(true)).toBe("Please, enter valid number sequence!");
});

test("no array argument - null", () => {
  expect(findMissingNumber(null)).toBe("Please, enter valid number sequence!");
});

test("no array argument - undefined", () => {
  expect(findMissingNumber(undefined)).toBe(
    "Please, enter valid number sequence!"
  );
});

test("no array argument - symbol", () => {
  expect(findMissingNumber(Symbol())).toBe(
    "Please, enter valid number sequence!"
  );
});

test("no array argument - object", () => {
  expect(findMissingNumber({ a: 1 })).toBe(
    "Please, enter valid number sequence!"
  );
});

test("no array argument - bigint", () => {
  expect(findMissingNumber(1n)).toBe("Please, enter valid number sequence!");
});

test("empty array", () => {
  expect(findMissingNumber([])).toBe("Please, enter valid number sequence!");
});

test("array of empty elements", () => {
  expect(findMissingNumber(new Array(100))).toBe(
    "Please, enter valid number sequence!"
  );
});

test("array of different data types", () => {
  expect(findMissingNumber([1, 2, 3, 4, true])).toBe(
    "Please, enter valid number sequence!"
  );
});

test("array with non-integer elements", () => {
  expect(findMissingNumber([1, 2.1, 3, 4])).toBe(
    "Please, enter valid number sequence!"
  );
});

test("array with equal elements", () => {
  expect(findMissingNumber([1, 1, 3, 4])).toBe(
    "Two or more elements are equal. Please, enter valid number sequence!"
  );
});

test("valid number sequence", () => {
  expect(findMissingNumber([1, 2, 3, 4])).toBe("All numbers are present!");
});
