// import React, { Component } from 'react'

// export default class HandleEvent extends Component {
//     //properties : khai báo ko cần từ khóa
//     //Method: khai báo trong lớp đối tượng
//     //gõ met
//     textHandleEvent = () => {
//         alert("Hello Man!")
//     }
//     showInfo = (name) => {
//         alert(`Hello ${name}`);
//     }


//     // this.properties
//     // this.method
//     // Function () load hàm này ngay khi load trang web
//     // Sử dụng hàm ẩn danh để truyền tham số mà nó ko bị load trang web ngay khi load web
//     render() {
//         let fullName = "Nguyễn Văn A";
//         return (
//             //Khai báo biến thường
//             <div className="container py-5">
//                 <button className="btn btn-info mr-3" onClick = {this.textHandleEvent}>Click here</button>
//                 <button className="btn btn-info" onClick = {()=>{
//                     this.showInfo(fullName);
//                 }}>Show info</button>
//             </div>
//         )
//     }
// }
import React, { Component } from 'react'

export default class HandleEvent extends Component {
    //thuộc tính liên kết với class ở trên nên ko cần từ khóa
    // fullName = "Trần Công Trọng";
    // doses = 2;
    //phương thức
    handleEvent = () => {
        alert("Welcome !");
        // console.log("Welcome Vinpearl ");
    }
    getInfo = (name,times) => {
        alert (`Welcome ${name} ${times} `)
    }
    

    render() {
        let fullName = "Trần Công Trọng";
        let doses = 2;
        return (
            <div className="container py-5">
                <button className="btn btn-success mr-3" onClick={this.handleEvent}>Go</button>
                <button className="btn btn-success" onClick={() => {
                    this.getInfo(fullName,doses)
                }}>Scan</button>
            </div>
        )
    }
}
