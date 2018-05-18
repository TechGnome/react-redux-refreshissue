import React from 'react'
import { connect } from 'react-redux'
import { changeName } from '../actions/MyNameActions'

class MyName extends React.Component {
    render() {
        let input

        console.log("0) component - render() - this.props")
        console.log(this.props)

        return(
          <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              console.log("2) component - render() - this.props")
              console.log(this.props)

              this.props.changeName(input.value)

              console.log("3) component - render() - this.props")
              console.log(this.props)
 
              input.value = ''
            }}
          >
            <input ref={node => input = node} />
            <button type="submit">
              Change Name
            </button>
          </form>
          Hi there, {this.state ? this.state.myNewName: this.props.myNewName}.
        </div>
          )
    }
}

const mapDispatchToProps = (dispatch) => {
return {changeName: myNewName => dispatch(changeName(myNewName))}
}

const mapStateToProps = (state) => {
  return {myNewName : state.myNewName}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyName)
