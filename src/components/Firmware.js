import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'; // Assuming you're using SweetAlert2 library in your project
import Navbar from './Navbar.js';

function Firmware() {
    const [firmwares, setFirmwares] = useState([]);
    const removeFirmware = (id) => {
        Swal.fire({
          title: 'Are you sure?',
          showCancelButton: true,
          confirmButtonColor: '#96021A',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`/firmware/${id}/delete`, {
              method: 'GET',
              beforeSend: function() {
                // Add your loading indicator logic here
              }
            })
              .then((response) => {
                // Check if the response status is not in the range of 200-299 (unsuccessful response)
                if (!response.ok) {
                  throw new Error('Network response was not ok.');
                }
                return response.json();
              })
              .then((data) => {
                console.log(data);
                // Handle any actions after firmware deletion, such as updating state or re-fetching data
                fetchData();
              })
              .catch((error) => {
                console.error('Error:', error);
                // If there's an error during deletion, remove the firmware from the list
                const updatedFirmwares = firmwares.filter((firmware) => firmware.id !== id);
                setFirmwares(updatedFirmwares);
              });
          }
        });
      };
      
    
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => {
          setFirmwares(data);
        }).catch((error) => {
          console.error('Error:', error);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

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
                        <div className="card-tools">
                            <a href="/firmware/upload" className="btn btn-sm add-btn" title="Add">
                                Add Firmware
                            </a>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                <th>Firmware ID</th>
                                <th>Firmware Title</th>
                                <th>Uploaded on</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {firmwares.map((firmware) => (
                                    <tr key={firmware.id}>
                                        <td>{firmware.id}</td>
                                        <td>{firmware.title}</td>
                                        <td>{firmware.completed ? 'Enabled' : 'Disabled'}</td>
                                        <td>
                                        <a href={`/firmware/${firmware.id}`} className="btn btn-sm edit">
                                            <i className="fas fa-edit"></i>Edit
                                        </a>
                                        <button onClick={() => removeFirmware(firmware.id)} className="btn btn-sm delete" title="Delete">
                                            <i className="fas fa-trash-alt"></i>Delete
                                        </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Firmware;

