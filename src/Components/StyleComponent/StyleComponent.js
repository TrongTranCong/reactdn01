import React, { Component } from 'react'
//css styleSheet    
import "./style.css"; // external
import styleModule from "./StyleComponent.module.css" //Cần xử lý giao diện
export default class StyleComponent extends Component {
    render() {
        // C2: Inline
        //Declare variable
        let styleInline = {//đè code
            backgroundColor:"pink",
            color:"white"
        }
        return (
            <div className="container">
                
                {/* <p className="text">StyleComponent</p> */}
                {/* <header className="headerAsset">Funky Trunks</header> */}
                {/* Kiểu inline ưu tiên cao nhất */}
                {/* Khai báo đối tượng dùng dấu ngoặc nhọn */}
                {/* style react là object */}
                {/* C1: */}
                {/* <p style={{
                    backgroundColor: "green",
                    color:"black"
                }} className="text">StyleInline C1</p>
                <p style={styleInline} className="text">StyleInline C2</p> */}
                {/* CSS kiểu module */}
                {/* className nào có import theo kiểu module mới dùng đc */}
                <p className={styleModule.fontText}>styleModule</p>
                {/* Nếu tên class có kí tự đặc biệt thì phải đặt thuộc tính trong dấu ngoặc kép và "" */}
                {/* Gọi nhiều class thì nối chuỗi (string template) */}
                <p className={`${styleModule["bg-Color"]} ${styleModule["container__p"]} `}>styleModule</p> 
            </div>
        )
    }
}
