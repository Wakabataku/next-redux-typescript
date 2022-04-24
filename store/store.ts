import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import createSagaMiddleware from "@redux-saga/core"
import { Store } from "redux"

import counterSlice from "./CounterSlice/counterSlice"

const configureAdminStore = (initialState = {}): Store => {
  const sagaMiddleware = createSagaMiddleware({
    onError(error) {
      throw error
    },
  })
  const store = configureStore({
    reducer: counterSlice,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  })
  return store
}
// export const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
