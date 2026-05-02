import './hero.css'

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
                <p className="hero-greeting">// Hey there , myself </p>
                <h1 className="hero-name">Utkarsh</h1>
                <p className="hero-title">
                    Competitive Programmer &amp; <span>Backend Developer</span>  Based in Vadodara, India.
                </p>

                {/* Single unified 2-col grid: CTA row + 3 profile rows */}
                <div className="hero-links">

                    {/* Row 1: CTA buttons */}
                    <a href="#projects" className="btn-primary">view projects</a>
                    <a href="#contact" className="btn-secondary">get in touch</a>

                    {/* Row 2: LeetCode + Codeforces */}
                    <a href="https://leetcode.com/karsh_S/" target="_blank" rel="noreferrer" className="profile-bar">
                        <svg className="profile-logo" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                        </svg>
                        <span className="profile-name">LeetCode</span>
                    </a>

                    <a href="https://codeforces.com/profile/karsh_" target="_blank" rel="noreferrer" className="profile-bar">
                        <svg className="profile-logo" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z" />
                        </svg>
                        <span className="profile-name">Codeforces</span>
                    </a>

                    {/* Row 3: GitHub + CodeChef */}
                    <a href="https://github.com/karshs" target="_blank" rel="noreferrer" className="profile-bar">
                        <svg className="profile-logo" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        <span className="profile-name">GitHub</span>
                    </a>

                    <a href="https://www.codechef.com/users/taut_coder" target="_blank" rel="noreferrer" className="profile-bar">
                        <svg className="profile-logo" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.257.004C5.23.264.171 5.08.007 11.104c-.09 3.374 1.226 6.437 3.4 8.671l.232.23c.332.322.683.625 1.05.904.02.016.04.03.06.046a11.26 11.26 0 0 0 1.24.773l.055.03a11.184 11.184 0 0 0 1.37.596l.06.02c.46.155.933.28 1.42.37l.07.012c.49.085.993.133 1.506.14h.06c.513-.007 1.016-.055 1.506-.14l.07-.012c.487-.09.96-.215 1.42-.37l.06-.02a11.184 11.184 0 0 0 1.37-.596l.055-.03a11.26 11.26 0 0 0 1.24-.773c.02-.016.04-.03.06-.046.367-.279.718-.582 1.05-.904l.232-.23c2.174-2.234 3.49-5.297 3.4-8.671C23.829 5.08 18.77.264 11.257.004zm.743 2.01c.357.013.71.04 1.057.082-1.04.73-1.81 1.73-2.22 2.9-.41-1.17-1.18-2.17-2.22-2.9.347-.042.7-.069 1.057-.082h2.326zM7.08 3.26c1.39.63 2.44 1.88 2.8 3.41H5.63c.44-1.44 1.3-2.67 2.45-3.41zm9.84 0c1.15.74 2.01 1.97 2.45 3.41h-4.25c.36-1.53 1.41-2.78 2.8-3.41zM4.83 8.17h5.05v2.16H4.83V8.17zm9.29 0h5.05v2.16h-5.05V8.17zM4.83 11.83h5.05v2.16H4.83v-2.16zm9.29 0h5.05v2.16h-5.05v-2.16zM5.63 15.5h4.25c-.36 1.53-1.41 2.78-2.8 3.41-1.15-.74-2.01-1.97-2.45-3.41zm8.5 0h4.25c-.44 1.44-1.3 2.67-2.45 3.41-1.39-.63-2.44-1.88-2.8-3.41zm-4.17.42c.41 1.17 1.18 2.17 2.22 2.9a9.23 9.23 0 0 1-2.114-.082 9.23 9.23 0 0 1-2.326-.818c.41-1.17 1.18-2.17 2.22-2.9z" />
                        </svg>
                        <span className="profile-name">CodeChef</span>
                    </a>

                    {/* Row 4: LinkedIn + Twitter */}
                    <a href="https://www.linkedin.com/in/utkarsh-singh-jp/" target="_blank" rel="noreferrer" className="profile-bar">
                        <svg className="profile-logo" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span className="profile-name">LinkedIn</span>
                    </a>

                    <a href="https://twitter.com/nameiskarsh" target="_blank" rel="noreferrer" className="profile-bar">
                        <svg className="profile-logo" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <span className="profile-name">Twitter / X</span>
                    </a>

                </div>
            </div>

        </section>
    )
}

export default Hero
