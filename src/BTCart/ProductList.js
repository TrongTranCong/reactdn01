//chứa danh sách các sản phẩm
import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderProductItem = () => {
        let {mangSP,themGioHang}= this.props;
        return mangSP.map((phone,index) => {
            return <ProductItem sp={phone} themGioHang={themGioHang} key={index}/>
        })
    }
    
    render() {
        //Kiểm tra xem đã truyền từ cha xuống chưa
        // console.log(this.props.mangSP)
        return (
            <div className="row">
                {this.renderProductItem()}
            </div>
        )
    }
}