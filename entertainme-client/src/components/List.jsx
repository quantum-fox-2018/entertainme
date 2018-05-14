import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeletButton'

class List extends Component {
  render () {
    return (
        <tr>
          <td>
            <Link to={`detail/${this.props.data._id}/view`} >
              { this.props.data.title } 
            </Link>
           
          </td>
          <td>
            { this.props.data.overview }
          </td>
          <td>
            <Link to = {`edit/${this.props.data._id}/${this.props.data.title}/${this.props.data.overview}`}>
            <a> edit </a>
            </Link>

           
           |
           <DeleteButton id={this.props.data._id} />
          </td>
        </tr>
    )
  }
}

export default List