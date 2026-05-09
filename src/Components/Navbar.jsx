import './Navbar.css'

function Navbar({ toggleTheme, theme }) {
    return (
        <nav className="navbar">
            <a href="#hero" className="nav-logo">&lt;Karsh/&gt;</a>

            <ul className="nav-links">
                <li><a href="#about">about</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#cp">cp</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#contact">contact</a></li>
                <li>
                    <a href="https://drive.google.com/file/d/1L6X_-EE5eOOI7GAsaZQKZLoSyOBCnj2R/view?usp=sharing" target="_blank" rel="noreferrer">
                        <button className="btn-resume">resume ↗</button>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar