import {Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

export default function Login() {
    const account = JSON.parse(localStorage.getItem("account"));
    const [check, setCheck] = useState(false);
    const navigate = useNavigate();
    return (
        <div
            className="modal fade mt-5"
            id="loginModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog mt-5" role="document">
                <div
                    className="modal-content rounded-modal shadow p-3"
                    style={{marginTop: "4rem"}}
                >
                    <center>
                            <span className="loginSquare mt-n5">
                                <p className="text-white" id="exampleModalLabel">Đăng nhập</p>
                            </span>
                    </center>
                    <div className="modal-header border-0 p-0">
                        <button
                            type="submit"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Formik initialValues={{
                            username: "",
                            password: ""
                        }}
                                onSubmit={logIn}>
                            <Form>
                                <center>
                                    <div className="form-group input-group w-75 animated wow fadeInDown delay-0-1s">
                                        <Field
                                            type="text"
                                            className="form-control textfield-rounded shadow-sm p-3 mb-3 zIndex-1"
                                            id="username"
                                            placeholder="Tài khoản"
                                            name="username"
                                        />
                                        <div className="input-group-append z-Index-2">
                                            <span>
                                                <img src="/images/right-icon.png" className="ml-n6" alt={""}/>
                                                <i className="fa fa-user-o ml-n4-1 text-white"/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group input-group w-75 animated wow fadeInDown delay-0-2s">
                                        <div className="input-group-prepend z-Index-2">
                                            <span>
                                                <img src="/images/left-icon.png" alt={""}/>
                                                <i className="fa fa-key ml-n4-2 text-white"/>
                                            </span>
                                        </div>
                                        <Field
                                            type="password"
                                            className="form-control textfield-rounded shadow-sm p-3 mb-4 zIndex-1"
                                            placeholder="Mật khẩu"
                                            name="password"
                                        />
                                    </div>
                                </center>
                                <center>
                                    <button
                                        type="submit"
                                        className="gradientBtn w-75 animated wow fadeInDown delay-0-3s"
                                        aria-label="Close"
                                    >
                                        Đăng nhập
                                    </button>
                                </center>
                                <p className="text-center color-blue mt-3 animated wow fadeInDown delay-0-3s">
                                    Hoặc
                                </p>
                            </Form>
                        </Formik>
                    </div>
                    <div className="modal-footer border-0 mt-n4">
                        <center>
                            <button
                                type="button"
                                className="btn-lg social-login rounded-circle shadow mr-4 bg-white animated wow zoomIn delay-0-5s"
                            >
                                <i className="fa fa-google google-icon"/>
                            </button>
                            <button
                                type="button"
                                className="social-login rounded-circle shadow bg-white animated wow zoomIn delay-0-6s"
                            >
                                <i className="fa fa-facebook fb-icon"/>
                            </button>
                            <p className="text-center color-dark mt-3 animated wow fadeInUp delay-0-3s">
                                Không có tài khoản?{" "}
                                <Link
                                    to={""}
                                    data-dismiss="modal"
                                    className="color-blue"
                                    data-toggle="modal"
                                    data-target="#signUpModal"
                                    data-whatever=""
                                >
                                    Đăng ký
                                </Link>{" "}
                            </p>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )

    function logIn(values) {
        axios.post('http://localhost:8080/puzzling/login', values)
            .then(() => {
                alert('Đăng nhập thành công.');
                localStorage.setItem(account, JSON.stringify(values));
                setCheck((check)=>!check)
            })
            .catch(() => {
                alert('Sai tài khoản hoặc mật khẩu! Vui lòng thử lại');
            })
    }
}