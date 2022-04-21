import React from "react"
import { NextPage } from "next"

import { useAppDispatch, useAppSelector } from "../store/store"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/CounterSlice/counterSlice"

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.counter.value)
  return (
    <div>
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
