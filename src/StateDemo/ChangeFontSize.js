import React, { Component } from 'react'

export default class ChangeFontSize extends Component {
    // constructor(){
    //     this.state = new;
    // } để ghi đè
    /**
     * + Build UI(Create component, html(JSX),css)
     * + Confirm change data to take in state và kiểu dữ liệu
     * + Build method (xác định pthuc sẽ chứa)
     */
    state = {
        fs:16
    }
    // react nó bao gồm giao diện trong một hàm
    render() {
        return (
            <div className="container py-5">
                <p style={{fontSize:`${this.state.fs}px`,}} className="bg-dark text-white">Lorem ipsum dolor sit amet.</p>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success" onClick={() => {
                        // let newState = {
                        // }
                        this.setState({
                            fs:this.state.fs + 2
                        })
                    }}>+</button>
                    <button type="button" className="btn btn-success" onClick={() => {
                        // let newState = {
                        // }
                        this.setState({
                            fs:this.state.fs - 2
                        })
                    }}>-</button>
                    
                </div>
            </div>
        )
    }
}
