import React, { Component } from 'react'
import { findAllInRenderedTree } from 'react-dom/test-utils'
import Cart from './Cart'
import ProductList from './ProductList'

export default class BTCart extends Component {
    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]
    state = {
        gioHang: [
            //truyền state xuống pop up được ko chứ đúng là rỗng
            // Những giá trị có thể tính toán từ giá trị có sẵn thì ko cần lưu trữ nên chỉ cần thêm biến số lượng

        ]
    }
    //Hàm xử lý setState phải đặt chung component với khai báo state
    themGioHang = (spAdded) => {
        // console.log(spAdded)
        //setState
        //spread Operator
        //Them soLuong vao đối tượng sp được click
        let spGioHang = { ...spAdded, soLuong: 1 } //thuộc tính số lượng
        // console.log(spGioHang)
        //
        let gioHangCapNhat = [...this.state.gioHang]; // thêm dần sp vô chứ ko xóa sp cũ
        //Tìm sản phẩm được click có tồn tại trong mảng giỏ hang chưa
        // find():giá trị của phần tử,
        // findIndex(): trả về index của phần tử
        // ()truyền vào đối tượng 
        let spTK = gioHangCapNhat.find((phone) => {
            //return đối tượng có phần tử thỏa mãn 
            return phone.maSP === spGioHang.maSP;
        });
        // console.log(spTK);
        if (spTK) {
            //Find
            spTK.soLuong += 1;
        } else {
            //chưa có trong giỏ hàng thêm sp mới cho giỏ hàng
            gioHangCapNhat.push(spGioHang);
        }
        this.setState({
            gioHang: gioHangCapNhat,
        })
    }
    //()truyền đối tượng cần xóa
    //tìm vị trí nó ở đâu để xóa
    xoaGioHang = (spDeleted) => {
        // console.log(spDeleted);
        let {gioHang}=this.state;
        // Tìm vị trí của sp cần xóa trong mảng giỏ hàng
        let index = gioHang.findIndex((phone) => {
            return phone.maSP === spDeleted.maSP;
        });
        if(index !==-1){
            gioHang.splice(index,1);
        }
        this.setState({
            gioHang:gioHang,
        })    
    }
    tangGiamSL = (maSPSL,soLuong) => {
        // console.log(spSL);
        let{gioHang} = this.state;
        let spTK = gioHang.find((phone) => {
            //return đối tượng có phần tử thỏa mãn 
            return maSPSL=== phone.maSP ;
        });
        if(spTK){
            spTK.soLuong += soLuong
            if(spTK.soLuong<1){
                alert("Số lượng ko hợp lệ")
                spTK.soLuong -=soLuong;
            }
        }
        this.setState({
            gioHang:gioHang
        })
    }
    tongSL = () => {
        //reduce():duyệt mảng, biểu thưc tính toán, return kq của biểu thức tính toán 
        let{gioHang} = this.state;
        let tongSL = gioHang.reduce((soLuong,phone,index)=>{
            return soLuong += phone.soLuong
        },0);
        return tongSL;
    }
    
    render() {
        return (
            <div className="container">
                <div className="row justify-content-end pt-3">
                    <div className="col-4">
                        <p>Giỏ hàng({this.tongSL()})</p>
                    </div>
                </div>
                {/* Đặt tham số để chứa mảng  */}
                {/* themGioHang truyền dữ liệu hàm từ cha xuống  */}
                <ProductList mangSP={this.arrPhone} themGioHang={this.themGioHang} />

                {/* Modal */}
                <Cart tangGiamSL = {this.tangGiamSL} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />


            </div>
        )
    }
}

