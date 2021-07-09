class CommonUtils {
  constructor() {}
}

CommonUtils.prototype.getHashMap = (arr, key = "_id") => {
  return arr.reduce((acc, curr) => {
    if (!acc[curr[key]]) {
      acc[curr[key]] = curr;
    }
    return acc;
  }, {});
};

module.exports = new CommonUtils();
