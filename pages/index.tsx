import React from "react"
import { NextPage } from "next"
import { useDispatch, useSelector } from "react-redux"
import { CounterState, counterSlice } from "./_app"

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state: CounterState) => state)
  const { increment } = counterSlice.actions
  return (
    <div>
      <p>こんにちは</p>
      <p>{selector.value}</p>
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        click
      </button>
      <button onClick={() => console.log(selector.value)}>
        selectorの確認
      </button>
    </div>
  )
}

export default Home
