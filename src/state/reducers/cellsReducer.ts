import { ActionType } from "../action-types/index";
import { Action } from "../actions/index";
import { Cell } from "../cell";

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const cellsReducer = (
  state: CellsState = initialState,
  action: Action
): CellsState => {
  switch (action.type) {
    case ActionType.UPDATE_CELL:
      return {
        ...state,
        data: {
          //all existing cells
          ...state.data,
          //overwrite whats on action.payload.id
          [action.payload.id]: {
            ...state.data[action.payload.id],
            content:action.payload.content
          }
        }
      };
    case ActionType.MOVE_CELL:
      return state;
    case ActionType.INSERT_CELL_BEFORE:
      return state;
    case ActionType.DELETE_CELL:
          return state;
      default:
    return state      
  }
};

export { cellsReducer };
