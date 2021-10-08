// Component cha
import React, { Component } from 'react'
import FunctionProduct from './FunctionProduct';
import Product from './Product'

export default class HomePage extends Component {
    productList = [
        { id: 1, name: "black-car", price: 1000, img: "./img/products/black-car.jpg" },
        { id: 2, name: "steel-car", price: 1200, img: "./img/products/steel-car.jpg" },
        { id: 3, name: "silver-car", price: 1350, img: "./img/products/silver-car.jpg" },
        { id: 4, name: "red-car", price: 1200, img: "./img/products/red-car.jpg" },
    ];
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        {/* <Product nameCar="Black Car" price={1000} img="./img/products/black-car.jpg"/>  */}
                        {/* // nameCar là thuộc tính riêng của thẻ chính là props
                        // Nhận giá trị vô là object */}
                        {/* <Product product={this.productList[0]} /> */}
                        <FunctionProduct product= {this.productList[0]}/>

                    </div>
                    <div className="col-4">
                        {/* <Product nameCar="Red Car" price={1200} img="./img/products/red-car.jpg"/> */}
                        {/* <Product product={this.productList[1]} /> */}
                        <FunctionProduct product= {this.productList[2]}/>

                    </div>
                    <div className="col-4">
                        {/* <Product nameCar="Silver Car" price={1100} img="./img/products/silver-car.jpg"/> */}
                        {/* <Product product={this.productList[3]} /> */}
                        <FunctionProduct product= {this.productList[3]}/>

                    </div>
                </div>
            </div>
        )
    }
}
