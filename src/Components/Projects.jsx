import './Projects.css'
import previewProject1 from '../assets/preview-project1.png'
import matchMakerDashboard from '../assets/matchMakerDashboard.png'

const projects = [
    {
        id: 'hermes',
        title: 'Hermes-RTB',
        desc: 'A production-grade, high-concurrency real-time bidding system built to handle thousands of concurrent auction bids with strict data integrity, microsecond precision, and zero race conditions.',
        tags: ['Express.js', 'Node.js', 'PostgreSQL', 'Socket.io', 'REST API'],
        github: 'https://github.com/karshs/Hermes-RTB',
        live: 'https://hermes-rtb.onrender.com/',
        preview: previewProject1,
    },
    {
        id: 'matchmaker',
        title: 'MatchMaker Arcade',
        desc: 'Matrimonial CRM with Advanced Match Discovery. Engineered with a 100-point rule-based scoring engine and OpenAI GPT-4o integration for deep compatibility insights, backed by a serverless PostgreSQL schema.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'OpenAI', 'JWT', 'Tailwind CSS'],
        github: 'https://github.com/karshs/MatchMaker-Arcade',
        live: 'https://match-maker-arcade.vercel.app/',
        preview: matchMakerDashboard,
    },
]

function Projects() {
    return (
        <section id="projects">
            <div className="projects-container">
                {/* Header aligned identically with "ABOUT ME" */}
                <div className="projects-header">
                    <h2 className="projects-headline">THINGS I HAVE BUILT</h2>
                </div>

                <div className="projects-list">
                    {projects.map((p, idx) => (
                        <div
                            key={p.id}
                            className={`project-card ${idx % 2 === 1 ? 'project-card--reverse' : ''}`}
                        >
                            {/* Project Information Column */}
                            <div className="project-info">
                                <div className="project-action-icons">
                                    {p.github && (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-action-btn project-action-btn--github"
                                            aria-label={`${p.title} GitHub Repository`}
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                            </svg>
                                        </a>
                                    )}

                                    {p.live && (
                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-action-btn project-action-btn--live"
                                            aria-label={`${p.title} Live Preview`}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7" />
                                                <polyline points="7 7 17 7 17 17" />
                                            </svg>
                                        </a>
                                    )}
                                </div>

                                <h3 className="project-title">{p.title}</h3>
                                <p className="project-desc">{p.desc}</p>

                                <div className="project-tags">
                                    {p.tags.map((tag) => (
                                        <span className="project-tag" key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Desktop Browser Mock Frame */}
                            <div className="project-showcase">
                                <a
                                    href={p.live || p.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-browser-frame"
                                    aria-label={`Open ${p.title} project`}
                                >
                                    <div className="project-browser-bar">
                                        <span className="browser-dot" />
                                        <span className="browser-dot" />
                                        <span className="browser-dot" />
                                    </div>
                                    <div className="project-browser-screen">
                                        <img
                                            src={p.preview}
                                            alt={`${p.title} preview`}
                                            className="project-preview-img"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
