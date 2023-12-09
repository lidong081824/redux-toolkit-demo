/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-11-18 15:07:33
 * @Description: .
 */
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from "./store/counterSlice";
import { jian, fetchDataChunk } from "./store/decrementSlice";
function App () {
  // TODO：第三步使用 需要useSelect 指定切片 下面的值； useDispatch 调用actions
  const count = useSelector(state => state.counter.value)
  const customCount = useSelector(state => state.decrement.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      {count}
      <button onClick={() => {
        dispatch(increment())
      }}>+1</button>
      <button onClick={() => {
        dispatch(jian())
      }}>-1</button>
      {customCount}
      <button onClick={() => {
        // 异步切片 是直接使用的
        dispatch(fetchDataChunk())
      }}>异步20</button>
    </div>
  );
}

export default App;
