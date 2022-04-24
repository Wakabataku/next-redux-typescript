import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"
import { Store } from "redux"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { createLogger } from "redux-logger"

import counterSlice from "./CounterSlice/counterSlice"
import { rootSaga } from "../sagas/rootSaga"

export const configureAdminStore = (): Store => {
  const sagaMiddleware = createSagaMiddleware({
    onError(error) {
      throw error
    },
  })
  const logger = createLogger({
    collapsed: true,
    diff: true,
  })
  const store = configureStore({
    reducer: counterSlice,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat([sagaMiddleware, logger]),
  })
  sagaMiddleware.run(rootSaga)
  return store
}

export const store = configureAdminStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
