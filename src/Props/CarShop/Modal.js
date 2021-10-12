import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let {productDetail} = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{productDetail.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={productDetail.img} className="img-fluid" alt="..." />
                            <h5 className="modal-title" id="exampleModalLabel">{productDetail.price}</h5>
                            <h5 className="modal-title" id="exampleModalLabel">{productDetail.shortDescription}</h5>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
