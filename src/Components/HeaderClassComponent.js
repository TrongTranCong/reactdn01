import React, { Component } from 'react'

export default class ClassComponent extends Component {
    handleClick = ()=>{
        alert("Hello World!")
    }
    render() {
        return (
            <div className="container">
                <h1>Event Handler</h1>
                <button className="btn btn-success" onClick={this.handleClick}>Click here</button>
            </div>
        )
    }
    
}

