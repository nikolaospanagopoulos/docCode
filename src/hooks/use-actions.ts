import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateCell, deleteCell, moveCell, insertCellAfter } from '../state/action-creators/index' 

const actionCreators = {
    updateCell,deleteCell,moveCell,insertCellAfter
}
export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(actionCreators,dispatch)
}

