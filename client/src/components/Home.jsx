import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'



class Home extends Component {
  render() {
    return (
        <div>
          <Query
          query={gql`
          {
            movies {
              _id
              title
              overview

            }
          }
          `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              return data.movies.map(({ title, overview, _id }) => (
                <Link to={`/detail/${_id}`} key={_id}>
                  <p>judul :{ title } - overview :{ overview }</p>
                </Link>
              ));
            }}
          </Query>
        </div>
    );
  }
}

export default Home;
