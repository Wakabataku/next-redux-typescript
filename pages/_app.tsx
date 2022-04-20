import React from "react"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { createSlice } from "@reduxjs/toolkit"

// Reduxで管理するStateの作成
export type CounterState = {
  value: number
}
// 初期値の定義
const initialState: CounterState = { value: 0 }

export const conterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
