import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function ReadOrDelete() {
    return (
        <div>
            <Header title="Read, Delete, Update and Search" />
            {/* Table rows not exists */}
            {/* <div>
                <p>No Results found, <Link to="/">create</Link> instead.</p>
            </div> */}

            {/* Table rows exists */}
            <div>            
                <label htmlFor="search" className="mb-1 fw-semibold">Search</label>
                <div className="mb-3">
                    <form>
                        <input type="text" id="search" className="form-control mb-2" aria-describedby="passwordHelpBlock" placeholder="Akbar Angkasa"/>
                        <button type="submit" className="btn-sm fw-semibold btn btn-primary"><i class="bi bi-search"></i></button>
                    </form>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Dob</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Department</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td className="fw-semibold">Angkasa</td>
                            <td>12 Desember 2002</td>
                            <td>Man</td>
                            <td>Technical Department</td>
                            <td className="d-flex flex-row">
                                {/* Update button */}
                                <div className="me-2">
                                    <button type="button" className="btn btn-primary btn-sm fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Update
                                    </button>
                                </div>
                                {/* Delete form */}
                                <div className="me-2">
                                    <form action="">
                                        <button type="button" className="btn btn-danger btn-sm fw-semibold">
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* Start of Modals */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Angkasa</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* Update user */}
                                <form action="/" method="POST">
                                    {/* Name */}
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" name="name" className="form-control" id="name" aria-describedby="nameHelp"/>
                                    </div>
                                    {/* Dob */}
                                    <div className="mb-3">
                                        <label htmlFor="dob" className="form-label">Dob</label>
                                        <input type="date" name="dob" className="form-control" id="dob" aria-describedby="nameHelp"/>
                                    </div>
                                    {/* Gender */}
                                    <div className="mb-3">
                                        <label htmlFor="gender" className="mb-1">Gender</label>
                                        <select id="gender" className="form-select">
                                            <option>Man</option>
                                            <option>Woman</option>
                                        </select>
                                    </div>
                                    {/* Department */}
                                    <div className="mb-3">
                                        <label htmlFor="department" className="form-label">department</label>
                                        <input type="text" name="department" className="form-control" id="department" aria-describedby="nameHelp"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary fw-semibold">Update</button>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary fw-semibold btn-sm" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Modals */}
            </div>
        </div>
    )
}
