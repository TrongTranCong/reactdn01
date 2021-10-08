import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    //thuộc tính
    state = {
        imgCar: "./img/products/black-car.jpg",
    }
    changeColorCar = (color) => {
        this.setState({
            //thuộc tính thay đổi
            imgCar: `./img/products/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-7">
                        <img className="img-fluid" src={this.state.imgCar} alt="" />
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-5 mb-3">
                                <button className="btn btn-dark" onClick={() => {
                                    this.changeColorCar("black")
                                }}>Black</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5 mb-3">
                                <button className="btn btn-secondary" onClick={() => {
                                    this.changeColorCar("steel")
                                }}>Steel</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5 mb-3">
                                <button className="btn btn-light" onClick={() => {
                                    this.changeColorCar("silver")
                                }}>Silver</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <button className="btn btn-danger" onClick={() => {
                                    this.changeColorCar("red")
                                }}>Red</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
