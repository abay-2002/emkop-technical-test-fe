import { useState } from "react";
import Header from "../components/Header";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);

    function loadingHandler(){
        setIsLoading(true)
    }

    return (
        <div>
            <Header title="Create"/>
            <form method="POST" action={`/api/karyawan/insert`} onSubmit={() => loadingHandler()}>
                {/* Name */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" id="name" aria-describedby="nameHelp" required placeholder="Akbar Angkasa"/>
                </div>
                {/* Dob */}
                <div className="mb-3">
                    <label htmlFor="dob" className="form-label">Dob</label>
                    <input type="date" name="dob" className="form-control" id="dob" aria-describedby="nameHelp" required/>
                </div>
                {/* Gender */}
                <div className="mb-3">
                    <label htmlFor="gender" className="mb-1">Gender</label>
                    <select id="gender" className="form-select" name="gender" required>
                        <option value="man">Man</option>
                        <option value="woman">Woman</option>
                    </select>
                </div>
                {/* Department */}
                <div className="mb-3">
                    <label htmlFor="department" className="form-label">Department</label>
                    <input type="text" name="department" placeholder="IT" className="form-control" id="department" aria-describedby="nameHelp" required/>
                </div>
                {isLoading &&
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                }
                {!isLoading &&
                    <button type="submit" className="btn btn-primary fw-semibold">Submit</button>
                }
            </form>
        </div>
    )
}