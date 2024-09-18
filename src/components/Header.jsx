const Header = () => {
  return (

    <>

      <section className="header">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">

           <h1><a href="#" className="navbar-brand">Dennis Okelekwe</a></h1>

          <button className="navbar-toggler" 
          type="button"
          data-bs-toggle="collapse" 
          data-bs-target="#navmenu">

              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">

                  <li className="nav-item">
                      <a href="#skills" className="nav-link">My skills</a>
                  </li>

                  <li className="nav-item">
                      <a href="#works" className="nav-link">My Works</a>
                  </li>

                  <li className="nav-item">
                      <a href="#why-you-should-hire-me" className="nav-link">Why Should you Hire me</a>
                  </li>

                  <li className="nav-item">
                      <a href="#reviews" className="nav-link">Reviews</a>
                  </li>

                  <li className="nav-item">
                      <a href="#contact" className="nav-link">Meet me</a>
                  </li>

              </ul> 
          </div>
      </div>
   </nav>
      </section>

    </>
  )
}

export default Header