import { ADD_USER } from '../actionTypes/userAT'
const initialState = { user: null }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return { ...state, user: action.payload }
    }

    default:
      return state
  }
}
