import React, { Component } from 'react'
import Modal from './Modal';
import ProductList from './ProductList';

export default class CarShop extends Component {
    products = [
        { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000, "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling." },
        { id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 2000, "shortDescription": "Paul George is the rare high-percentage shooter" },
        { id: 3, name: 'silver car', img: './img/products/silver-car.jpg', price: 3000 },
        { id: 3, name: 'Steel car', img: './img/products/steel-car.jpg', price: 4000 }
    ];
    state={
        carDetail:{ id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 }
    }
    // state ở đâu thì setState đặt ở đó
    xemChiTiet = (car) => {
        this.setState({
            carDetail:car
        })
    }
    
    render() {
        return (
            <div className="container">
                <ProductList arrCar={this.products} 
                xemChiTiet={this.xemChiTiet}/>
                {/* Modal */}
                <Modal productDetail={this.state.carDetail}/>
            </div>
        )
    }
}
