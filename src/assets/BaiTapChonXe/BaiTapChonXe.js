import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    //Thuộc tính
    state = {
        imgCar:"./img/products/black-car.jpg"
    }
    renderImg = (color) => {
        //gán giá trị mới cho state
        //Render lại UI
        
        this.setState({
            imgCar:`./img/products/${color}-car.jpg` 
    });
}
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h3>View</h3>
                        <img className="img-fluid" src={this.state.imgCar} alt="" />
                    </div>
                    <div className="col-4 ">
                        <h3>Exterior</h3>
                        <div className="row">
                            <div className="col-4 mb-3 ">
                                <button className="btn btn-dark" onClick={() => {
                                    this.renderImg("black");
                                }}>Black</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 mb-3">
                                <button className="btn btn-secondary" onClick={() => {
                                    this.renderImg("steel");
                                }}>Steel</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 mb-3">
                                <button className="btn btn-light" onClick={() => {
                                    this.renderImg("silver");
                                }}>Silver</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 mb-3">
                                <button className="btn btn-danger" onClick={() => {
                                    this.renderImg("red");
                                }}>Red</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
