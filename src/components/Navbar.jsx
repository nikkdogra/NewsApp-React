import { forwardRef, useContext, useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import ModeContext from "../context/ModeContext";

const Navbar = forwardRef(({ brand, onChangeMode, fetchNews }, ref) => {
    const mode = useContext(ModeContext);

    const color = mode === 'light' ? 'danger' : 'dark';

    const filters = ['Technology', 'Business', 'Health', 'Sports', 'Entertainment']

    const [active, setActive] = useState(null);

    const [search, setSearch] = useState('');

    const handleFiltersClick = (i) => {
        setActive(i);
        fetchNews(filters[i]);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setActive(null);
        fetchNews(search);
        setSearch('');
    }

    return (
        <nav className={`navbar navbar-expand-lg bg-${color} text-light position-sticky top-0 border-bottom border-warning border-5`} ref={ref}>

            <div className="container-fluid">

                <div className="navbar-brand fs-4">
                    <span className={`badge bg-light text-${color}`}>{brand}</span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-end">
                        {
                            filters.map((e, i) => <li key={i}
                                className={`nav-item nav-link ${active === i && 'active'} text-light cursor`} onClick={() => handleFiltersClick(i)}>{e}</li>
                            )
                        }
                    </ul>

                    <form onSubmit={handleSearch} className="d-flex" role="search">
                        <input className={`form-control text-${color} me-2 input-${mode}`} type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button className={`btn btn-outline-light search-btn-${mode}`} type="submit">Search</button>
                    </form>

                    {
                        mode === 'light'
                            ?
                            <MdLightMode className="fs-2 mt-3 mt-md-0 mx-3 cursor text-light" onClick={() => onChangeMode('dark')} />
                            :
                            <MdDarkMode className="fs-2 mx-3 cursor text-light" onClick={() => onChangeMode('light')} />
                    }

                </div>

            </div>

        </nav>
    )
});

export default Navbar
