import React, { Component } from 'react'

export default class DataBinding extends Component {

    //properties
    mota = "Relieve pain and muscle tension";
    maxWeight = "147kg";
    //method
    renderProduct = () => {
        let product = {
            code: "CBPRO 65CM ONYX BLK",
            name: "Rubber ball PTP ",
            price: 995000,
            color: "Black",
            size: "656cm",
            
        }
        return (
            <div className="container">
                <div className="card" style={{ width: '15rem' }}>
                    <img src="https://cdn.shopify.com/s/files/1/0456/5070/6581/products/CBPRO-65CM-ONYX-BLK-1_cf6ebc15-3d39-415f-84f0-5f436a81bc6e_360x.jpg?v=1632745030" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Product Name: {product.name}</h5>
                        <p className="card-text">
                            Code: {product.code}
                            <br />
                            Price: {product.price}
                            <br />
                            Color: {product.color}
                            <br />
                            Size: {product.size}
                        </p>
                    </div>
                </div>
            </div>
        )

    }
    render() {
        let name = "Foam Roller";
        let productList = "";
        productList += `<p>
                            <b>${name}</b>
                        </p>`;
        return (
            <div>
                <h1 className="heading">{name} 
                <br/>
                {productList}</h1>
                <h3 className="des">{this.mota}
                    <br />
                    Max-load: {this.maxWeight}</h3>
                {/* Must to call function below  */}
                {this.renderProduct()}
            </div>
        )
    }
}
