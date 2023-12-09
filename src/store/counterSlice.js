/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-11-18 15:17:05
 * @Description: .
 */
import { createSlice } from '@reduxjs/toolkit'

// TODO : 第三步 创建切片 name initialState reducers 导出所有actions 导出reducer

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 10
  },
  reducers: {
    increment: state => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
      // 并不是真正的改变状态值，因为它使用了 Immer 库
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
      // 不可变的状态
      state.value += 1
    }
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment } = counterSlice.actions

export default counterSlice.reducer