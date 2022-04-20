import React from "react"
import "../styles/globals.css"
import type { AppProps } from "next/app"

// Reduxで管理するStateの作成
export type CounterState = {
  value: number
}
// 初期値の定義
const initialState: CounterState = { value: 0 }

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
