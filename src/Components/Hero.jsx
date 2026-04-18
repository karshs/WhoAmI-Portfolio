import './Hero.css'

function Hero() {
    return (
        <section id="hero">

            <div className="math-bg">
                <span className="math-symbol">∑</span>
                <span className="math-symbol">∫</span>
                <span className="math-symbol">π</span>
                <span className="math-symbol">Δ</span>
                <span className="math-symbol">∞</span>
                <span className="math-symbol">√</span>
                <span className="math-symbol">∂</span>
                <span className="math-symbol">λ</span>
                <span className="math-symbol">θ</span>
                <span className="math-symbol">∇</span>
            </div>

            <div className="hero-content">
                <p className="hero-greeting">// hello world</p>
                <h1 className="hero-name">Your Name</h1>
                <p className="hero-title">
                    Competitive Programmer &amp; <span>Backend Developer</span>
                </p>
                <p className="hero-desc">
                    I solve problems — on platforms like Codeforces and LeetCode,
                    and in production systems. I build clean, efficient backends and
                    love the intersection of algorithms and real-world engineering.
                </p>

                <div className="hero-cta">
                    <a href="#projects">
                        <button className="btn-primary">view projects</button>
                    </a>
                    <a href="#contact">
                        <button className="btn-secondary">get in touch</button>
                    </a>
                </div>

                <div className="social-row">
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-icon">GH</a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="social-icon">LI</a>
                    <a href="https://codeforces.com/" target="_blank" rel="noreferrer" className="social-icon">CF</a>
                    <a href="https://leetcode.com/" target="_blank" rel="noreferrer" className="social-icon">LC</a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="social-icon">TW</a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="social-icon">IG</a>
                </div>
            </div>

        </section>
    )
}

export default Hero