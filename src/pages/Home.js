import Header from "../components/Header";

export default function Home() {
    return (
        <div>
            <Header title="Create"/>
            <form action="/" method="POST">
                {/* Name */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" id="name" aria-describedby="nameHelp" required/>
                </div>
                {/* Dob */}
                <div className="mb-3">
                    <label htmlFor="dob" className="form-label">Dob</label>
                    <input type="date" name="dob" className="form-control" id="dob" aria-describedby="nameHelp" required/>
                </div>
                {/* Gender */}
                <div className="mb-3">
                    <label htmlFor="gender" className="mb-1">Gender</label>
                    <select id="gender" className="form-select" required>
                        <option>Man</option>
                        <option>Woman</option>
                    </select>
                </div>
                {/* Department */}
                <div className="mb-3">
                    <label htmlFor="department" className="form-label">department</label>
                    <input type="text" name="department" className="form-control" id="department" aria-describedby="nameHelp" required/>
                </div>
                <button type="submit" className="btn btn-primary fw-semibold">Submit</button>
            </form>
        </div>
    )
}