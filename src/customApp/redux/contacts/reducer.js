import actions from "./actions";
import fakeData from './fake';

const initialState = {
  list: fakeData,
  hoveredContact: null,
  loading: false,
  error: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.CONTACTS_FETCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actions.CONTACTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload
      };
    case actions.CONTACTS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case actions.SET_HOVERED_CONTACT:
      return {
        ...state,
        hoveredContact: action.payload
      }
    default:
      return state;
  }
}
