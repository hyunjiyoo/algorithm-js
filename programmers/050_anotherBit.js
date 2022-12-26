function solution(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) return number + 1;

    const str = number.toString(2);
    const zeroIdx = str.lastIndexOf("0");
    const prefix = zeroIdx === -1 ? "" : str.substring(0, zeroIdx);

    return parseInt(`${prefix}10${str.substring(zeroIdx + 2)}`, 2);
  });
}
