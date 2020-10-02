import React from 'react'

class HelloWorld extends React.Component {
  render() {
    return (
      <div className="p-3">
        <span className="font-bold text-xl">
          This is the home page
        </span>
        <h1>Hello {this.props.name}</h1>
      </div>
    )
  }
}

export default HelloWorld