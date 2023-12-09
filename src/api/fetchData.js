
/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-11-18 20:49:13
 * @Description: .
 */
export function fetchData () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(20)
    }, 3000)
  })
}