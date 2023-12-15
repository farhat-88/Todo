import React from 'react';
import Navbar from './Navbar.js';

function UploadFirmware() {
    const handleUpload = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('userfile', event.target.userfile.files[0]);
      
        // Use fetch or Axios to send the formData to the server
        fetch('/firmware/upload_file', {
          method: 'POST',
          body: formData
        })
          .then((response) => {
            if (response.ok) {
              // Handle success, e.g., show a success message
            } else {
              // Handle error response from the server
            }
          })
          .catch((error) => {
            // Handle network errors or exceptions
          });
      };
      
      return (
        <div>
            <Navbar />
            <section className="content">
                <div className="container-fluid">
                    <div className="card form-card mt-3">
                        <div className="card-header">
                            <div>
                                <h3 className="card-title">Upload Firmware</h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <form className="form-horizontal mt-2" encType="multipart/form-data" onSubmit={handleUpload}>
                                <div className="col-sm-12 col-md-10">
                                    <div className="form-group row">
                                        <div className="col-sm-12 col-md-4 col-lg-6 col-form-label">
                                            <label htmlFor="file">Firmware Upload</label>
                                        </div>
                                        <div className="col-sm-12 col-md-5">
                                            <div className="input-group mb-3">
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input form-control-file" name="userfile" id="file" />
                                                    <label className="custom-file-label" htmlFor="file">
                                                        Choose file
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <input className="btn btn-sm add-btn mt-1" name="submit" type="submit" value="Upload" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UploadFirmware;