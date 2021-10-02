import React, { Component } from 'react'

export default class StateDemo extends Component {
    //trạng thái đăng nhập user
    //property
    //kiểm tra
    // isLogin = false; //boolean
    username = "HV001";
    /**
     *  State :
     * - thuộc tính có sẵn của react class component
     * - Công dụng: setState
     * + gán lại giá trị cho thuộc tính
     * + chạy lại method render
     */
    // kiểu giống object, đối tượng ban đầu state có sẵn của react
    state = {
        isLogin: false,
    }
    //Method bên ngoài
    renderLogin = () => {
        if (this.state.isLogin) {
            //có thể viết nhiều dòng code
            return <span className="text-white">{this.username}</span>
        }
        return <button className="btn btn-success" onClick={this.handleLogin}>Login</button>;
    }
    //Click button login thì giá trị false --> true và hiển thị giao diện username đã login
    handleLogin = async () => {
        // this.isLogin = true;
        // console.log(this.isLogin);
        //Đối tượng mới do mình khai báo
        let newState = {
            isLogin: true,
        }
        //setState() là hàm bất đồng bộ nên có độ trễ
        //anfn ra hàm arrow function
        // this.setState(newState,() => {
        //     console.log(this.state.isLogin);
        // });
        // console.log(this.state.isLogin);//false
        await this.setState(newState);
        console.log(this.state.isLogin);
    }
    // method render() bản chất chạy 1 lần rồi thôi và ko chạy lại
    render() {
        return (
            //JSX của React
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        {this.renderLogin()}
                        {/* Nội dung login */}
                        {/* Nếu isLogin == true hiện username, ngược lại hiện button login ?: */}
                        {/* {this.isLogin ? <span className="text-white">{this.username}</span> : 
                        <button className="btn btn-success">Login</button>
                        } */}
                    </div>
                </nav>
            </div>
        )
    }
}
