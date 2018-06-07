import React, { Component } from 'react'
import { GET_ALL_MOVIES } from '../graphql/queryType'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import AddMovie from './AddMovie'
import DeleteMovie from './DeleteMovie'
import Loading from './Loading'
import '../css/ListData.css'

class MoviesList extends Component {
  render() {
    return (
      <div>
        <AddMovie />
        <h2>List of Movies</h2>
        <Query query={ GET_ALL_MOVIES }>
          {({ loading, error, data }) => {
            if (loading) return <Loading />
            if (error) return <h4>Error</h4>
            return (
              <div style={{paddingBottom:"50px"}}>
                <div className="container" style={{display:"flex", 'flexWrap':"wrap"}}>
              {
                data.movies.map((movie, index) =>
                  <div key={index}>
                      <div className="grid-item" style={{height:"20px"}}>
                        <div className="example-2 card">
                          <div className="wrapper">
                          <img src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path} alt={movie.title} />
                            <div className="date">
                              <span className="day">Popularity</span>
                              <span className="month">{movie.popularity}</span>
                            </div>
                            <div className="data">
                              <div className="content">
                                <h4 className="title">{movie.title}</h4>
                                <p className="text">
                                <Link to={movie._id}>Detail</Link>
                                <DeleteMovie id={movie._id}/>
                                </p>
                              </div>
                              <input type="checkbox" id="show-menu" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
                </div>
              </div>
              )
            }}
        </Query>
      </div>
    )
  }
}

export default MoviesList