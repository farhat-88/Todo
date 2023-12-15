import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar.js';
import Swal from 'sweetalert2'; // Import SweetAlert library

function FirmwareEditPage() {
    const { id } = useParams(); // Get the ID from the URL parameter
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState('');
    const [newID, setnewID] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = () => {
            fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    setUserId(data.id); 
                    setTitle(data.title);
                    setCompleted(data.completed);
                    setnewID(data.userId);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            };

        fetchData();
    }, [id]);

    const cancel = () => {
        navigate("/firmware");
    };

    const update = async () => {
       // const [loading, setLoading] = useState(false);
        const obj = {
            userId: newID,
            title: title,
            completed: completed,
            id: userId
        };
       // setLoading(true);
        try {
            const response = await fetch(`/firmware/${id}/update`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
            });

            const data = await response.json();

            if (response.ok && data.result === 'success') {
              console.log("success");
            } else {
                // Handle error case
                //setLoading(false);
                Swal.fire({
                    title: data.errors,
                    customClass: 'sweet1',
                    showCancelButton: false,
                    confirmButtonClass: 'sweet1Button',
                    cancelButtonClass: 'sweet2Buttton',
                    confirmButtonColor: '#96021A',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
        //setLoading(false);
            // Handle error in case of failed request
            console.error('Error:', error);
        }
    };



    return (
        <div>
            <Navbar />
            <section className="content">
                <div className="container-fluid">
                    <div className="card form-card mt-3">
                        <div className="card-header">
                            <div>
                                <h3 className="card-title">Firmware</h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <form className="form-horizontal mt-2">
                                <div className="col-sm-12 col-md-8">
                                    <input type="hidden" className="form-control" value={newID} disabled />
                                    <div className="form-group row">
                                        <div className="col-sm-12 col-md-4 col-lg-6 col-form-label">
                                            <label>Firmware ID</label>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <input type="text" className="form-control" value={userId} disabled />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-12 col-md-4 col-lg-6 col-form-label">
                                            <label>Firmware Title</label>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-12 col-md-4 col-lg-6 col-form-label">
                                            <label>Uploaded on</label>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <input type="text" className="form-control" value={completed} onChange={(e) => setCompleted(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="footer">
                            <div className="card-tools">
                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 save" onClick={update}>Save</button>
                                <button className="btn btn-danger btn-block fa-lg gradient-custom-2 mb-3" onClick={cancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FirmwareEditPage;
