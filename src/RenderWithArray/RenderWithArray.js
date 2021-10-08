import React, { Component } from 'react'

export default class RenderWithArray extends Component {
    productList = [
        { id: 1, name: 'black-car', price: 1000, img: './img/products/black-car.jpg' },
        { id: 2, name: 'steel-car', price: 1100, img: './img/products/steel-car.jpg' },
        { id: 3, name: 'silver-car', price: 1200, img: './img/products/silver-car.jpg' },
        { id: 4, name: 'red-car', price: 1300, img: './img/products/red-car.jpg' },
    ]
    // Tách hàm chức năng để tái sử dụng
    renderTable = () => {
        // let content = [];
        // for (let i = 0; i < this.productList.length; i++) {
        //     //Lấy 1 phần tư trong mảng
        //     let product = this.productList[i]
        //     //Lúc duyệt mảng sẽ tạo các đối tượng tr
        //     let objTR = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td className="w-50"><img className="w-50"  src={product.img} alt="" /></td>
        //     </tr>
        //     content.push(objTR);
        // }
        // // Return content về tbody
        // return content;
        let content = this.productList.map((product, index) => {
            //map có 2 tính năng là lấy từng phần tử trong mảng ra và 
            //return trong hàm bth hoặc vòng lặp for thì nó sẽ là thoát khỏi hàm hoặc thoát khỏi vòng lặp
            // return trong map nó duyệt đến khi hết mảng mới thoát khỏi vòng lặp
            // return nó trả về 1 mảng mới chứa các giá trị
            // dùng return phải có biến chứa giá trị do return trả về
            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="w-50" ><img className="w-50" src={product.img} alt="" /></td>
            </tr>
        });
        // Return content về tbody
        return content;
    }
    render() {
        return (
            <div className="container">
                <h3>List of fashion cars</h3>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Hiển thị lên UI */}
                        {/* Tạo UI bằng code JS */}
                        {/* setState chỉ dùng khi code ngắn và ko cần tái sử dụng */}
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
