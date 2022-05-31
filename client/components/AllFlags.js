import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllFlags} from '../store/flags'

export class AllFlags extends React.Component {
  componentDidMount() {
    this.props.getFlags()
  }

  render() {
    const {flags} = this.props
    console.log('isithere', flags)
    return (
      <div>
        <h1>heresflagssie</h1>
        {flags.map(flag => (
          <div key={flag.id}>
            <h1>
              <Link to={`/flags/${flag.id}`}>
                {flag.name} {flag.year}
              </Link>
            </h1>
          </div>
        ))}
      </div>
    )
  }
}
const mapState = state => {
  return {
    flags: state.flags
  }
}

const mapDispatch = dispatch => {
  return {
    getFlags: () => dispatch(getAllFlags())
  }
}

export default connect(mapState, mapDispatch)(AllFlags)