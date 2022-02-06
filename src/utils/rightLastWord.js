export const setRightLastWord = (num, one, two, three) => {
  num = Math.abs(num) % 100;
  const n1 = num % 10;
  if (num > 10 && num < 20) {
    return three;
  }
  if (n1 > 1 && n1 < 5) {
    return two;
  }
  if (n1 == 1) {
    return one;
  }
  return three;
};
