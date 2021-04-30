import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateCell, deleteCell, moveCell, insertCellBefore } from '../state/action-creators/index' 

const actionCreators = {
    updateCell,deleteCell,moveCell,insertCellBefore
}
export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(actionCreators,dispatch)
}

