import '../components/Css/Addcourse.css';
// import './Css/Login.css';
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


function Add_content() {

    let [c_name, setc_name] = useState('');
    let [course_id, setcourse_id] = useState('');
    let [error, setError] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/course/')
            .then(res => setData(res.data.data))
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, []);

    const btnhandler = () => {
        axios.post('http://localhost:5000/course_content/add_content', {
            content: c_name,
            course_id: course_id,
            error: error
        }).then(function (response) {
            // handle success
            console.log(response);

            if (response.data.status === "succesfully added") {
                Navigate("/home")
            }

            else {
                setError(response.data.status);
                alert("please enter your course");
            }

            if (response.data.status === " ") {
                setError(response.data);
                alert("please enter your course and fees");
            }

            if (response.data.status === "check your data") {
                setError(response.data.status);
                alert("check your data");
            }

            if (response.data.status === "check your data") {
                setError(response.data.status);
                alert("check your data");
            }
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <>
       

            <div class="section">
                <div class="container">
                    <div class="row full-height justify-content-center">
                        <div class="col-12 text-center align-self-center py-5">
                            <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                <h3 class="mb-0 pb-3">Add Content</h3>
                                <div class="card-3d-wrap mx-auto">
                                    <div class="card-3d-wrapper">
                                        <div class="card-front">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Add Content</h4>
                                                    <div className="form-group mt-3">
                                                        <label>Add Content</label>
                                                        <input
                                                            type="text"
                                                            onChange={(e) => { setc_name(e.target.value) }}
                                                            className="form-control mt-1"
                                                            placeholder="text your course"
                                                        />

                                                        {/* <input
                                    type="text"
                                    onChange={(e) => { setc_name(e.target.value) }}
                                    className="form-control mt-1"
                                    placeholder="text your course"
                                /> */}

                                                        <select id="course" className="form-control mt-3" onChange={(e) => { setcourse_id(e.target.value) }}>
                                                            {
                                                                data?.map((user, index) => {

                                                                    return <option value="None">{user.c_name}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                    <Link to="/admin" onClick={btnhandler}>
                                                        <a href="#" class="btn mt-4">submit</a>
                                                    </Link>
                                                    <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* <div className='add'>
                <div className="Auth-form-container">
                    <form className="Auth-form">
                        <div className="Auth-form-content">

                            <h3 className="Auth-form-title">Add Content</h3>

                            <div className="form-group mt-3">
                                <label>Add Content</label>
                                <input
                                    type="text"
                                    onChange={(e) => { setc_name(e.target.value) }}
                                    className="form-control mt-1"
                                    placeholder="text your course"
                                />

                                {/* <input
                                    type="text"
                                    onChange={(e) => { setc_name(e.target.value) }}
                                    className="form-control mt-1"
                                    placeholder="text your course"
                                /> */}

            {/* <select id="course" className="form-control mt-3" onChange={(e) => { setcourse_id(e.target.value) }}>
                                    {
                                        data?.map((user, index) => {

                                            return  <option value="None">{user.c_name}</option>
                                        })
                                    }
                                </select>
                            </div>


                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary" >
                                    <Link to="/admin" onClick={btnhandler} className='submit'>Submit</Link>
                                </button>


                            </div>

                        </div>
                    </form>
                </div>
            </div> */}
        </>

    )

}

export default Add_content;