import React, { Component } from 'react'
//css styleSheet    
import "./style.css"; // external
import styleModule from "./StyleComponent.module.css" //Cần xử lý giao diện
export default class StyleComponent extends Component {
    render() {
        let styleInline = {//đè code
            backgroundColor:"pink",
            color:"white"
        }
        return (
            <div className="container">
                {/* style react là object */}
                <p style={{
                    backgroundColor: "green",
                    color:"yellow"
                }} className="text">Style Component</p>
                <p style={styleInline} className="text">styleInline</p>
                <p className={styleModule.fontText}>styleModule</p>
                <p className={`${styleModule["bg-Color"]} ${styleModule["container__p"]} `}>styleModule</p>
            </div>
        )
    }
}
