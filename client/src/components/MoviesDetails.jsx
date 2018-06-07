import React, { Component } from 'react'
import { GET_ONE_MOVIE } from '../graphql/queryType'
import { Query } from 'react-apollo'
import Loading from './Loading'
import '../css/Detail.css'

class MoviesDetails extends Component {
  render() {
    const movieId = this.props.match.params.id
    return (
      <Query query={ GET_ONE_MOVIE } variables={{id: movieId}} >
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return <h4>Something went wrong...</h4>
          // return (
          //   <div>
          //     <button onClick={() => this.props.history.goBack()} > Back</button>
          //     <h2>{ data.movie.title }</h2>
          //     <h4>Overview : { data.movie.overview }</h4>
          //     <h4>Popularity : { data.movie.popularity }</h4>
          //   </div>
          // )
          return (
            <div className="container">
              <button onClick={() => this.props.history.goBack()} > Back</button>
              <div className="row">
                <div className="example-1 card">
                  <div className="wrapper">
                  <img src={`https://image.tmdb.org/t/p/w400/` + data.movie.poster_path} alt="" />
                    <div className="date">
                      <span className="day">Popularity</span>
                      <span className="month">{ data.movie.popularity }</span>
                    </div>
                    <div className="data">
                      <div className="content">
                        <span className="author">{ data.movie.title }</span>
                        <label htmlFor="show-menu" className="menu-button"><span></span></label>
                      </div>
                      <input type="checkbox" id="show-menu" />
                      <ul className="menu-content">
                        <li><a className="fa fa-bookmark-o"><span>runtime min</span></a></li>
                        <li><a className="fa fa-heart-o"><span>Star: vote_average</span></a></li>
                        <li><a className="fa fa-comment-o"><span>Vote: vote_count</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h1 className="title">tagline</h1>
                <p className="text">{data.movie.overview}</p>
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default MoviesDetails