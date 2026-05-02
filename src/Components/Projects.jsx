import './Projects.css'

const projects = [
    {
        title: 'Hermes-RTB',
        desc: 'High-Concurrency Real-Time Bidding System. A production-grade auction platform built to handle thousands of concurrent bids with strict data integrity and zero race conditions.',
        tags: ['Express.js', 'Node.js', 'PostgreSQL', 'Socket.io', 'REST API'],
        github: 'https://github.com/karshs/Hermes-RTB',
        live: 'https://hermes-rtb.onrender.com/',
        preview: '/preview-project1.png', // add your screenshot path here e.g. '/preview-project1.png'
    },
]

function Projects() {
    return (
        <section id="projects">
            <p className="section-label">04 — projects</p>
            <h2 className="section-title">Things I've Built</h2>
            <div className="divider"></div>

            <div className="projects-grid">
                {projects.map((p) => (
                    <div className="project-card" key={p.title}>

                        {/* Left: all text content */}
                        <div className="project-body">
                            <div className="project-header">
                                <div className="project-icon">⬡</div>
                                <div className="project-links">
                                    {p.github && (
                                        <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                                            github ↗
                                        </a>
                                    )}
                                    {p.live && (
                                        <a href={p.live} target="_blank" rel="noreferrer" className="project-link">
                                            live ↗
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="project-title">{p.title}</h3>
                            <p className="project-desc">{p.desc}</p>

                            <div className="project-tags">
                                {p.tags.map((tag) => (
                                    <span className="project-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Right: preview screenshot box */}
                        {p.preview && (
                            <div className="project-preview">
                                <img src={p.preview} alt={`${p.title} preview`} className="project-preview-img" />
                            </div>
                        )}
                        {!p.preview && (
                            <div className="project-preview project-preview--empty">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <polyline points="21 15 16 10 5 21" />
                                </svg>
                            </div>
                        )}

                    </div>
                ))}
            </div>

            <p className="projects-note">
                more projects coming soon — currently building in public 🚧
            </p>

        </section>
    )
}

export default Projects