import "../../style/bootstrap.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container ml-5">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
