import React, { Component } from "react"
import { connect } from "react-redux"
import movieRow from "../components/table-row"
import { handleData, submit } from "../actions"
import { pick, propOr, map } from "ramda"
import { FaSearch } from "react-icons/fa"

class movieSearch extends Component {
  handleUpdateInput = e => {
    this.props.handleData("SET_SEARCHTEXT", e.target.value)()
  }
  render() {
    return (
      <div>
        <form
          className="tc"
          onSubmit={this.props.submit(this.props.searchText)}
        >
          <input
            type="text"
            placeholder="Search by title..."
            onChange={this.handleUpdateInput}
          />
          <button
            type="submit"
            className="f5 pv2 ph4 ba border-box ml4 mr4 dim"
          >
            <FaSearch />
          </button>
        </form>
        {propOr("", "Response", this.props.movieData) === "True" ? (
          <table
            className="mt4 center collapse"
            style={{
              cellSpacing: 0
            }}
          >
            <thead className="mb3 tc bb">
              <tr>
                <th className="fl fn-l w-100 w5-l lh-title">Title</th>
                <th className="fl fn-l w-100 w5-l lh-title">Year</th>
                <th className="fl fn-l w-100 w5-l lh-title">Poster</th>
              </tr>
            </thead>
            {map(movieRow, this.props.movieData.Search)}
          </table>
        ) : null}
      </div>
    )
  }
}

const connector = connect(
  (state, x) => {
    return pick(["searchText", "movieData"])
  },
  dispatch => {
    return {
      submit: dispatch(submit),
      handleData: dispatch(handleData)
    }
  }
)

export default connector(movieSearch)
