import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary  px-2">
                <div class="container-fluid">
                    <Link class="navbar-brand text-white fw-semibold" to="/">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link text-white" to="/">Create</Link>
                            <Link class="nav-link text-white" to="/read-delete-update-search">Read, Delete, Update, Search</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;