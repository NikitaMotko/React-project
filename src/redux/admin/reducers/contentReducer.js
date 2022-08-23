import { adminConstants } from '../constants';

const defaultState = {
  contentList: [],
  totalCountPages: 1,
  isRowDeleted: false,
  rewards: [],
};

export const contentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case adminConstants.GET_ALL_CONTENT:
      return {
        ...state,
        contentList: action.payload,
        totalCountPages: action.payload.length,
        isRowDeleted: false,
      };
    case adminConstants.ADD_CONTENT_ROW:
      return {
        ...state,
        contentList: [...state.contentList, action.payload],
        totalCountPages: state.totalCountPages + 1,
      };
    case adminConstants.DELETE_CONTENT_ROW:
      return {
        ...state,
        contentList: [
          ...state.contentList.filter((item) => item.id !== action.payload),
        ],
        totalCountPages: state.totalCountPages - 1,
        isRowDeleted: true,
      };
    case adminConstants.DELETE_CONTENT_ROW_SUCCESS:
      return {
        ...state,
        isRowDeleted: false,
      };
    case adminConstants.GET_ALL_REWARDS:
      return {
        ...state,
        rewards: action.payload,
      };
    case adminConstants.EDIT_CONTENT_ROW:
      return {
        ...state,
        contentList: [
          ...state.contentList.map((item) =>
            item.id === action.payload.id ? action.payload.values : item,
          ),
        ],
      };
    default:
      return state;
  }
};
