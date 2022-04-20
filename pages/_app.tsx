import React from "react"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { configureStore, createSlice } from "@reduxjs/toolkit"

// Reduxで管理するStateの作成
export type CounterState = {
  value: number
}
// 初期値の定義
const initialState: CounterState = { value: 0 }

// sliceの作成
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
  },
})

// storeの作成
export const store = configureStore({
  reducer: {
    conter: counterSlice.reducer,
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
