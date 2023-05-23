import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import * as Yup from 'yup'
import Login from "./Login";

export default function SignUp() {
    const navigate = useNavigate();
    const data = {
        username: "",
        password: "",
        confirmPassword: "",
        user: {
            email: ""
        },
        role: {
            id: 2
        }
    }

    const validation = Yup.object().shape({
        username: Yup.string()
            .required("Không được để trống!")
            .min(6, "Tối thiểu là 6 ký tự!!")
            .max(32, "Tối đa 32 ký tự!")
            .test("username", "Tài khoản đã tồn tại", async function (username) {
                return axios.get("http://localhost:8080/puzzling/check/" + username)
                    .then(
                        () => true
                    ).catch(
                        () => false
                    )
            })
        ,
        password: Yup.string()
            .required("Không được để trống!")
            .min(6, "Tối thiểu là 6 ký tự!")
            .max(32, "Tối đa 32 ký tự!"),
        confirmPassword: Yup.string()
            .required("Không được để trống!")
            .min(6, "Tối thiểu là 6 ký tự!")
            .max(32, "Tối đa 32 ký tự!")
            .oneOf([Yup.ref('password'), null], 'Mật khẩu không trùng nhau!'),
        user: Yup.object().shape({
            email: Yup.string()
                .required("Không được để trống!")
        })
    })
    return (
        <div
            className="modal fade mt-5"
            id="signUpModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg mt-5" role="document">
                <div
                    className="modal-content rounded-modal shadow p-3"
                    style={{marginTop: "4rem"}}
                >
                    <center>
                            <span className="loginSquare mt-n5">
                                <p className="text-white" id="exampleModalLabel">Đăng ký</p>
                            </span>
                    </center>
                    <div className="modal-header border-0 p-0">
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Formik initialValues={data}
                                onSubmit={(values) => {
                                    signUp(values)
                                }}
                                validationSchema={validation}>
                            <Form>
                                <center>
                                    <div className="row">
                                        <div
                                            className="col-lg-6 form-group input-group w-75 animated wow fadeInDown delay-0-1s">
                                            <div className="input-group-prepend z-Index-2">
                                                <span>
                                                    <img src="/images/left-icon.png" alt={""}/>
                                                    <i className="fa fa-user-o zIndex-2 ml-n4-2 text-white"/>
                                                </span>
                                            </div>
                                            <Field
                                                type="text"
                                                className="form-control textfield-rounded shadow-sm p-3 mb-4 zIndex-1"
                                                id="username"
                                                placeholder="Tài khoản"
                                                name="username"
                                            />
                                            <ErrorMessage name={"username"}/>
                                        </div>
                                        <div
                                            className="col-lg-6 form-group input-group w-75 animated wow fadeInDown delay-0-2s">
                                            <div className="input-group-prepend z-Index-2">
                                                <span>
                                                    <img src="/images/right-icon.png" className="rotate-180" alt={""}/>
                                                    <i className="fa fa-envelope zIndex-2 ml-n4-2 text-white rotate-n0"/>
                                                </span>
                                            </div>
                                            <Field
                                                type="text"
                                                className="form-control textfield-rounded shadow-sm p-3 mb-4 zIndex-1"
                                                id="user.email"
                                                placeholder="Email"
                                                name="user.email"
                                            />
                                            <ErrorMessage name={"user.email"}/>
                                        </div>
                                        <div
                                            className="col-lg-6 form-group input-group w-75 animated wow fadeInDown delay-0-3s">
                                            <div className="input-group-prepend z-Index-2">
                                                <span>
                                                    <img src="/images/right-icon.png" className="rotate-180" alt={""}/>
                                                    <i className="fa fa-key rotate-n0 zIndex-2 ml-n4-2 text-white"/>
                                                </span>
                                            </div>
                                            <Field
                                                type="password"
                                                className="form-control textfield-rounded shadow-sm p-3 mb-4 zIndex-1"
                                                id="password"
                                                placeholder="Mật khẩu"
                                                name="password"
                                            />
                                            <ErrorMessage name={"password"}/>
                                        </div>
                                        <div
                                            className="col-lg-6 form-group input-group w-75 animated wow fadeInDown delay-0-4s">
                                            <div className="input-group-prepend z-Index-2">
                                                <span>
                                                    <img src="/images/left-icon.png" alt={""}/>
                                                    <i className="fa fa-key zIndex-2 ml-n4-2 text-white"/>
                                                </span>
                                            </div>
                                            <Field
                                                type="text"
                                                className="form-control textfield-rounded shadow-sm p-3 mb-4 zIndex-1"
                                                id="confirmPassword"
                                                placeholder="Xác nhận mật khẩu"
                                                name="confirmPassword"
                                            />
                                            <ErrorMessage name={"confirmPassword"}/>
                                        </div>
                                    </div>
                                </center>
                                <center>
                                    <button
                                        type="submit"
                                        className="gradientBtn w-50 animated wow fadeInUp delay-0-5s"
                                    >
                                        Đăng ký
                                    </button>
                                </center>
                                <p className="text-center color-blue mt-3 animated wow fadeInUp delay-0-5s pb-5">Hoặc</p>
                            </Form>
                        </Formik>
                        <div className="modal-footer border-0 mt-n5">
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
                                <p className="text-center color-dark mt-3 animated wow fadeInUp delay-0-6s">
                                    Bạn đã có tài khoản?{" "}
                                    <Link
                                        to={""}
                                        data-dismiss="modal"
                                        className="color-purple"
                                        data-toggle="modal"
                                        data-target="#loginModal"
                                        data-whatever=""
                                    >
                                        Đăng nhập
                                    </Link>{" "}
                                </p>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function signUp(values) {
        axios.post('http://localhost:8080/puzzling/register', values)
            .then(() => {
                alert("Bạn đã đăng ký thành công!");
            })
            .catch(() => {
                alert("Đăng ký không thành công!")
            })
    }
}