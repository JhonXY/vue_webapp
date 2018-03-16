// 设置一个中间数，取上下范围间的随机整数
export function randomNum(mid, area) {
  var min = mid - area > 1 ? mid - area : 1
  var max = mid + area
  var range = max - min + 1
  return Math.floor(Math.random() * range + min);
}