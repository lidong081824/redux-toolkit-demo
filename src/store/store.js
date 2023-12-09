/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-11-18 15:14:22
 * @Description: .
 */

import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import decrementSlice from './decrementSlice'


// TODO: 第一步 从rtk中导出 configureStore 传入一个 reducer对象
export default configureStore({
  reducer: {
    counter: counterSlice,
    decrement: decrementSlice
  },
  devTools: true
})