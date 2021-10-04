import React, { Component } from 'react'

export default class Product extends Component {
    
    render() {
        // props là thuộc tính sẵn của Component, truyền từ cha -> con
        // console.log(this.props.nameCar);
        //Destructuring
        // let {nameCar,price,img} = this.props;
        let {product} = this.props;
        return (
            <div className="card">
                <img src="./img/products/black-car.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price}$</p>   
                </div>
            </div>

        )
    }
}
