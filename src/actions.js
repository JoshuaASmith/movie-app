const handleData = dispatch => {
  return (type, v) => e => {
    dispatch({ type: type, payload: v })
  }
}

const submit = dispatch => {
  return searchText => e => {
    e.preventDefault()
    const omdbURL = `https://www.omdbapi.com/?r=json&s=${
      searchText.search
    }&apikey=f86c0e32`
    fetch(omdbURL, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "SET_MOVIEDATA", payload: res })
      })
      .catch(res => {
        console.log(`Error retrieving movie data: ${res.status}`)
      })
  }
}

export { handleData, submit }
