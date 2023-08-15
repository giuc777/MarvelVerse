import { Link, useNavigate } from "react-router-dom"
const Nav = ()=>{


    
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-nav" style={{height: 'auto'}}>
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item h4">
                  <Link className="nav-link active letter_Marvel text-white" to='/'>Home</Link>
                  </li>
                  <li className="nav-item h4">
                    <Link className="nav-link active letter_Marvel text-white" to='/trivia'>Trivias</Link>
                  </li>
                  <li className="nav-item h4">
                    <Link className="nav-link active letter_Marvel text-white" to='/Memory'>Memoria</Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Personaje"
                  required
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>
              </div>
            </div>
        </nav>

        </>
    )
}

export default Nav