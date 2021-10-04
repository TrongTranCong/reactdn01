import React, { Component } from 'react'

export default class RenderWithArray extends Component {
    //Tạo danh sách kiểu Json
    productList = [
        { id: 1, name: "black-car", price: 1000, img: "./img/products/black-car.jpg" },
        { id: 2, name: "steel-car", price: 1200, img: "./img/products/steel-car.jpg" },
        { id: 3, name: "silver-car", price: 1350, img: "./img/products/silver-car.jpg" },
        { id: 4, name: "red-car", price: 1200, img: "./img/products/red-car.jpg" },
    ];
    renderTable = () => {
        //content(chứa các object tr),
        // let content = [];
        //Duyệt mảng(productList)
        // for (let i = 0; i < this.productList.length; i++) {
        //     //lấy 1 phần tử trong mảng
        //     let product = this.productList[i];
        //     //lúc duyệt mảng sẽ tạo các đối tượng tr
        //     let objTR = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img className="w-25"src={product.img} alt="" /></td>
        //     </tr>
        //     content.push(objTR);
        // }
        //return content vào tbody
        // return content; //[<tr></tr>,<tr>...</tr>]
        let content = this.productList.map((product, index) => {
            // return trong map sẽ ko dừng vòng, chỉ dừng khi duyệt mảng
            //trả về 1 mảng mới

            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="w-50"><img className="w-50" src={product.img} alt="" /></td>
            </tr>
        });
        return content;
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <h3 >LIST OF FASHION CARS</h3>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price($)</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Tạo UI bằng code */}
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
