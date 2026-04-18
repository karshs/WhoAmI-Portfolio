import './Projects.css'

const projects = [
    {
        title: 'Project Name One',
        desc: 'A short description of what this project does, the problem it solves, and what makes it interesting or challenging to build.',
        tags: ['Go', 'PostgreSQL', 'Docker', 'REST API'],
        github: 'https://github.com/',
        live: '',
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
                ))}
            </div>

            <p className="projects-note">
                more projects coming soon — currently building in public 🚧
            </p>

        </section>
    )
}

export default Projects