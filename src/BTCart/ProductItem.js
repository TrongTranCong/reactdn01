import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { sp,themGioHang} = this.props;
        return (
            <div className="col-4">
                <div className="card" >
                    <img src={sp.hinhAnh} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{sp.tenSP}</h5>
                        <p className="card-text">{sp.giaBan.toLocaleString()}</p>
                        <a className="btn btn-danger"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            onClick={(params) => {
                                themGioHang(sp)
                            }
                            }
                        >Thêm Giỏ Hàng</a>
                    </div>
                </div>
            </div>
        )
    }
}
