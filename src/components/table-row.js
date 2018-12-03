import React from "react"

const movieRow = movie => {
  return (
    <tr
      key={movie.imdbID}
      className="lh-copy pv3 roboto bb tc"
      data-name="slab-stat-small"
    >
      <td className="fl fn-l w-100 w5-l lh-title v-mid dtc f4 fw3 ml0 pv3">
        {movie.Title}
      </td>
      <td className="fl fn-l w-100 w5-l lh-title v-mid dtc f4 fw3 ml0 pv3">
        {movie.Year}
      </td>
      <td className="fl fn-l w-100 w5-l lh-title v-mid dtcf4 fw3 ml0 pv3">
        <img className="poster" alt="poster" src={movie.Poster} />
      </td>
    </tr>
  )
}

export default movieRow
