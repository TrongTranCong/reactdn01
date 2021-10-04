import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        View
                        <img src="" alt="" />
                    </div>
                    <div className="col-4 ">
                        <div className="row">
                            <div className="col-4 mb-3 ">
                                <button className="btn btn-dark ">Black</button>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-4 mb-3">
                                <button className="btn btn-secondary">Steel</button>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-4 mb-3">
                                <button className="btn btn-light">Silver</button>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-4 mb-3">
                                <button className="btn btn-danger">Red</button>
                            </div> 
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
