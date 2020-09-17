//1.防抖限流工具函数
export function debounce(obj, delayTime) {
        let timer = null
        return function() {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            obj.refresh()
          },delayTime)
        }
      }



//2.时间戳转换工具函数
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}


function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
