import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { merge } from "ramda"

const initialMovieList = []

const initialSearchText = { search: "" }

const movieData = (state = initialMovieList, action) => {
  switch (action.type) {
    case "SET_MOVIEDATA":
      return action.payload
    default:
      return state
  }
}

const searchText = (state = initialSearchText, action) => {
  switch (action.type) {
    case "SET_SEARCHTEXT":
      return merge(state, { search: action.payload })
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    movieData,
    searchText
  }),
  applyMiddleware(thunk)
)

export default store
