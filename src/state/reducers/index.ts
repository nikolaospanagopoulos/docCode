import { cellsReducer } from './cellsReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    cells:cellsReducer
})


export {reducers}


export type RootState = ReturnType<typeof reducers>;