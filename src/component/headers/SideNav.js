import {Link} from "react-router-dom";
import React from "react";

export default function SideNav() {
    function closeNav() {
        document.getElementById("mySidenav").style.cssText = "width:0; border:none; box-shadow: none;";
    }

    return (
        <div id="mySidenav" className="sidenav">
            <Link to={"#"} className="closebtn " onClick={closeNav}>
                <i className="fa fa-arrow-left" style={{marginRight:10, fontSize:25}}/>
            </Link>
            <Link to={"profile.html"} className="" onClick={closeNav}>
                <img
                    src="/images/user.png"
                    className="user-profile shadow img-fluid rounded-circle ml-3"
                    alt={""}
                />
            </Link>
            <Link to={""} className="text-white text-left" onClick={closeNav}>
                <small><p>henna4@gmail.com</p></small>
            </Link>
            <Link onClick={closeNav} to={"/categories"}><i className="fa fa-th-large text-white mr-3"/>Danh mục</Link>
            <Link onClick={closeNav} to={"/categories"}><i className="fa fa-question text-white mr-3"/> Giải câu đố</Link>
            <Link onClick={closeNav} to={"quiz.html"}><i className="fa fa-random text-white mr-3"/>Bộ câu đố ngẫu nhiên</Link>
            <Link onClick={closeNav} to={"leaderboard.html"}><i className="fa fa-users text-white mr-3"/>Bảng xếp hạng</Link>
            <Link onClick={closeNav} to={"score-history.html"}><i className="fa fa-history text-white mr-3"/>Lịch sử điểm thi</Link>
            <Link onClick={closeNav} to={"profile.html"}><i className="fa fa-user-o text-white mr-3"/>Thông tin cá nhân</Link>
            <Link onClick={closeNav} to={"#"}><i className="fa fa-power-off text-white mr-3"/>Đăng xuất</Link>
        </div>
    )
}