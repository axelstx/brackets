module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let obj = new Map();
  bracketsConfig.forEach(element => obj.set(element[0], element[1]));

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    if (arr[arr.length - 1] === current) {
      arr.pop();
    } else if (obj.has(current)) {
      arr.push(obj.get(current));
    } else {
      return false;
    }
  }

  return arr.length === 0;
}
