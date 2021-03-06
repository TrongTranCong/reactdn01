//Expect to load productList on homepage 
//Component con
import React, { Component } from 'react'

export default class Product extends Component {

    render() {
        // props là thuộc tính sẵn của Component, truyền thuộc tính riêng từ cha -> con
        // console.log(this.props.nameCar);
        //Destructuring bốc tách đối tượng ra
        // let { nameCar, price, img } = this.props;
        let {product} = this.props;
        return (
            <div className="card">
                {/* <img src={img} className="card-img-top" alt="..." /> */}
                <img src={product.img} className="card-img-top" alt="..." />

                <div className="card-body">
                    {/* <h5 className="card-title">{nameCar}</h5> */}
                    <h5 className="card-title">{product.name}</h5>
                    {/* <p className="card-text">{price}$</p> */}
                    <p className="card-text">{product.price}$</p>

                </div>
            </div>

        )
    }
}
