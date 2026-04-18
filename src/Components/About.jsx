import './About.css'

function About() {
    return (
        <section id="about">
            <p className="section-label">01 — about</p>
            <h2 className="section-title">Who I Am</h2>
            <div className="divider"></div>

            <div className="about-text">
                <p>
                    Hi! I'm <strong>Your Name</strong>, a passionate{' '}
                    <strong>competitive programmer</strong> and{' '}
                    <strong>backend developer</strong> based in [Your City], India.
                </p>
                <p>
                    I've been fascinated by mathematics and problem solving since
                    school — that curiosity naturally pulled me toward programming.
                    I love the elegance of a well crafted algorithm almost as much
                    as a well architected system.
                </p>
                <p>
                    When I'm not grinding problems on Codeforces, I'm building
                    backend systems, exploring new tools, or learning something
                    slightly outside my comfort zone — which is exactly how I like it.
                </p>
            </div>
        </section>
    )
}

export default About