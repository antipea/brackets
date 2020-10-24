module.exports = function check(str, bracketsConfig) {
  // your solution
    if (str.length % 2 === 1) {
        return false;
    }
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
                arr.push(str[i]);
                break;
            }
            if (str[i] === bracketsConfig[j][1] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
                if (arr[arr.length - 1] === bracketsConfig[j][0]) {
                    arr.pop();
                    break;
                }
            }
            if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1]) {
                if (arr[arr.length - 1] !== str[i]) {
                    arr.push(str[i]);
                    break;
                } else {
                    arr.pop();
                }
            }
        }
    }

    return arr.length === 0 ? true : false;
}
