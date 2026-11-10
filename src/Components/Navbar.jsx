import './Navbar.css'

function Navbar({ toggleTheme, theme }) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-content">
                    <a href="#hero" className="nav-logo">&lt;Karsh/&gt;</a>

                    <ul className="nav-links">
                        <li><a href="#about">about</a></li>
                        <li><a href="#skills">skills</a></li>
                        <li><a href="#projects">projects</a></li>
                        <li><a href="#cp">cp</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </div>
                <div className="navbar-divider" aria-hidden="true" />
            </div>
        </nav>
    )
}

export default Navbar