

function Navbar() {
    return(
        <div className="Navbar">
            <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Beach Boyz
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
    
                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                    </ul>     
                </div>
            </div>
        </nav>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <h1>Our previous group Assignment links:</h1>
      <li>Assignment 2: <a href="https://sevgi-z.github.io/FriGroup3_A2/" target="_blank">Click here!</a></li>
      <li>Assignment 3: <a href="https://sevgi-z.github.io/Assignment3_Project/" target="_blank">Click here!</a></li><br></br>
                <iframe
        src="https://www.youtube.com/embed/U7bTgdQ7Fg0"
        frameborder="0"
        width="853"
      height="480"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;