import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import moment from "moment";

export default function ReadOrDelete() {
    // Read

    const [isDeleting, setIsDeleting] = useState(false);

    function useRead() {
        const [isFetching, setIsFetching] = useState(true);
        const [people, setPeople] = useState([]);

        useEffect(() => {
            fetch(`${process.env.REACT_APP_PROXY}/api/karyawan`, {
                method: 'GET',
            })
                .then(res => {
                    return res.json()
                }).then(response => {
                    setIsFetching(false)
                    setPeople(response)
                    console.log(response)
                }).catch(err => {
                    console.log(err)
                })
        }, [isFetching])

        return { isFetching, people }
    }

    const { isFetching, people } = useRead();
    
    // Delete
    function handleDelete(e){
        e.preventDefault()
        setIsDeleting(true);
        fetch(`${process.env.REACT_APP_PROXY}/api/karyawan/delete`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(res => {
            return res.json()
        }).then(response => {
            setIsDeleting(false)
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }

    // Update
    const [isUpdating, setIsUpdating] = useState(false);
    function updateHandler(e){
        e.preventDefault()
        setIsUpdating(true)
    }

    // search
    const [searchId, setSearchId] = useState(null);
    
    const [ searchData, setSearchData ] = useState(null);
    const [ isSearching, setIsSearching ] = useState(false);
    
    function getVal(e){
        setSearchId(parseInt(e.target.value))
        setSearchData(null)
    }
   
    function searchHandler(e, searchId){
        setIsSearching(true);
        console.log(searchId)

        
        e.preventDefault();
        fetch(`${process.env.REACT_APP_PROXY}/api/karyawan/search/${searchId}`, {
            method: 'GET',
        })
        .then(res => {
            return res.json()
        }).then(response => {
            setIsSearching(false);
            setSearchData(response)
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
        setSearchId(null)
    }

    return (
        <div>
            <Header title="Read, Delete, Update and Search" />
            {/* Table rows not exists */}
            {isFetching &&
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            {/* Table rows not exists */}
            {!isFetching && people.length === 0 &&
                <div>
                    <p>No Results found, <Link to="/">create</Link> instead.</p>
                </div>
            }
            {/* Table rows exists */}
            {people.length !== 0 &&
                <div>
                    {!isSearching && 
                    <div className="mb-3">
                        <form onSubmit={(e) => searchHandler(e, searchId)}>
                            <label htmlFor="search" className="mb-1 fw-semibold">Search user by id</label>
                            <input type="number" onChangeCapture={(e) => getVal(e)} id="search" name="userId" className="form-control mb-2" aria-describedby="passwordHelpBlock" placeholder="12" required/>
                            <button type="submit" className="btn-sm fw-semibold btn btn-primary"><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                    }
                    {isSearching &&
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }
                    {/* Search result */}
                    {searchData && 
                        <div>
                            <h2>Search result</h2>
                            {searchData.length !== 0 &&
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Dob</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Department</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {searchData.map((data,i) => (
                                            <tr key={i}>
                                                <td>{data.id}</td>
                                                <td>{data.name}</td>
                                                <td>{data.dob}</td>
                                                <td>{data.gender}</td>
                                                <td>{data.department}</td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </table>
                            }
                            {searchData.length === 0 &&
                                <p>No result found</p>
                            }
                            <hr />
                        </div>
                    }
                    <div>
                        <h2>Karyawan</h2>
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
                                {people.map((person, i) => (
                                    <tr key={i}>
                                        {isDeleting &&
                                        <td>
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </td>
                                        }
                                        {isUpdating &&
                                        <td>
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </td>
                                        }
                                        <th scope="row">{person.id}</th>
                                        <td className="fw-semibold">{person.name}</td>
                                        <td>{moment(person.dob).format('DD MMMM YYYY')}</td>
                                        <td>{person.gender}</td>
                                        <td>{person.department}</td>
                                        <td className="d-flex flex-row">
                                            {/* Update button */}
                                            <div className="me-2">
                                                <button type="button" className="btn btn-primary btn-sm fw-semibold" data-bs-toggle="modal" data-bs-target={`#${person.gender+person.name.replace(' ','')+person.id}`}>
                                                    Update
                                                </button>
                                            </div>
                                            {/* Delete btn form */}
                                            <div className="me-2">
                                                <form onSubmit={(e) => handleDelete(e, person.id)}>
                                                    <button type="submit" className="btn btn-danger btn-sm fw-semibold">
                                                        Delete
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* Start of Modals */}
                    {people.map((person, i) => (
                        <div key={i} className="modal fade" id={`${person.gender+person.name.replace(' ','')+person.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${person.gender+person.name.replace(' ','')+person.id}Label`}aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id={`${person.gender+person.name.replace(' ','')+person.id}Label`}>Update {person.name}</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* Update user */}
                                        {isDeleting && 
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        }
                                        {isUpdating && 
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        }
                                        {!isUpdating && !isDeleting && 
                                        <form method="POST" action={`/api/karyawan/update`} onSubmit={() => updateHandler()}>
                                            <input type="hidden" name="id" value={person.id}/>
                                            {/* Name */}
                                            <div className="mb-3">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <input type="text" name="name" className="form-control" id="name" aria-describedby="nameHelp" placeholder={person.name} defaultValue={person.name}/>
                                            </div>
                                            {/* Dob */}
                                            <div className="mb-3">
                                                <label htmlFor="dob" className="form-label">Dob</label>
                                                <input type="date" name="dob" className="form-control" id="dob" aria-describedby="nameHelp" defaultValue={person.dob}/>
                                            </div>
                                            {/* Gender */}
                                            <div className="mb-3">
                                                <label htmlFor="gender" className="mb-1">Gender</label>
                                                <select id="gender" className="form-select" name="gender" defaultValue={person.gender}>
                                                    <option value="man">Man</option>
                                                    <option value="woman">Woman</option>
                                                </select>
                                            </div>
                                            {/* Department */}
                                            <div className="mb-3">
                                                <label htmlFor="department" className="form-label">department</label>
                                                <input type="text" name="department" className="form-control" id="department" aria-describedby="nameHelp" placeholder={person.department} defaultValue={person.department}/>
                                            </div>
                                            <button type="submit" className="btn btn-primary fw-semibold">Update</button>
                                        </form>
                                        }
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary fw-semibold btn-sm" data-bs-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {/* End of Modals */}
                </div>
            }
        </div>
    )
}
