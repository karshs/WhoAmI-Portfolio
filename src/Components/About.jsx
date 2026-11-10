import './About.css'

function About() {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-header">
                    <h2 className="about-headline">ABOUT ME</h2>
                </div>

                <div className="about-visual-stage">
                    {/* Unobstructed circular portrait */}
                    <div className="about-photo-wrapper">
                        <img src="/Image_2.png" alt="Utkarsh" className="about-photo" />
                    </div>

                    {/* Bio text alongside the photo with clean breathing room */}
                    <div className="about-content-card">
                        <p className="about-hook">
                            Turning raw logic into resilient architecture, I believe backend systems should be as dependable as they are fast.
                        </p>
                        <p className="about-body">
                            Crafting high-throughput services and distributed systems that are efficient, scalable, and built to solve real-world engineering challenges. I'm driven by curiosity—constantly exploring lower-level internals, databases, and clean algorithmic architecture through deliberate practice and continuous building.
                        </p>

                        {/* <div className="about-footer-links">
                            <a
                                href="https://www.linkedin.com/in/utkarsh-singh-jp/"
                                target="_blank"
                                rel="noreferrer"
                                className="about-footer-link"
                            >
                                Linkedin ↗
                            </a>
                            <a
                                href="https://github.com/karshs"
                                target="_blank"
                                rel="noreferrer"
                                className="about-footer-link"
                            >
                                Github ↗
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
