/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-11-18 15:36:30
 * @Description: .
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from '../api/fetchData'

// 异步切片格式 不同
export const fetchDataChunk = createAsyncThunk(
  'decrementSlice/fetchDataChunk',
  async () => {
    const data = await fetchData()
    return data
  }
)
// 同步切片
export const decrementSlice = createSlice({
  name: 'decrement',
  initialState: {
    count: 10
  },
  reducers: {
    jian: state => {
      state.count += 1
    }
  }, 
  // 设置异步切片reduces
  extraReducers: buidler => {
    // 状态判断
    buidler.addCase(fetchDataChunk.fulfilled, (state, action) => {
      state.count = action.payload
    })
  }
})

export const { jian } = decrementSlice.actions
export default decrementSlice.reducer
