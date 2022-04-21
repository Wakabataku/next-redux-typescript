import React from "react"
import { NextPage } from "next"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { CounterState, counterSlice, AppDispatch, RootState } from "./_app"

const Home: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  // const selector = useSelector((state) => state.counter.value)
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
  const selector = useAppSelector((state) => state.counter.value)
  const { increment } = counterSlice.actions
  return (
    <div>
      <p>こんにちは</p>
      <p>{selector}</p>
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        click
      </button>
      <button onClick={() => console.log(selector)}>selectorの確認</button>
    </div>
  )
}

export default Home
