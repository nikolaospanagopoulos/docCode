import { cellsReducer } from './cellsReducer'
import { bundlesReducer } from './bundlesReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    cells: cellsReducer,
    bundles: bundlesReducer
})


export { reducers }


export type RootState = ReturnType<typeof reducers>;