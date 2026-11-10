import './Skills.css'

const skillCategories = [
    {
        id: 'languages',
        title: 'Core Languages',
        subtitle: 'Syntax & Foundations',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        skills: ['C++', 'Python', 'JavaScript', 'Java', 'SQL'],
    },
    {
        id: 'backend',
        title: 'Backend & Systems',
        subtitle: 'Storage & Infrastructure',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        ),
        skills: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'REST APIs', 'Linux', 'Git'],
    },
    {
        id: 'fundamentals',
        title: 'CS Fundamentals',
        subtitle: 'Efficiency & Algorithms',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
        ),
        skills: ['Data Structures', 'Algorithms', 'Dynamic Programming', 'Graph Theory', 'OOP'],
    },
]

function Skills() {
    return (
        <section id="skills">
            <div className="skills-container">
                {/* Centered Heading & Subtitle */}
                <div className="skills-header">
                    <h2 className="skills-headline">Skills & Technologies</h2>
                    <p className="skills-sub">
                        The flow of engineering from core programming languages, through robust backend systems and storage, to scalable algorithmic architecture.
                    </p>
                </div>

                {/* 3 Structured Pipeline Boxes */}
                <div className="skills-flow">
                    {skillCategories.map((cat, idx) => (
                        <div key={cat.id} className="skills-flow-item">
                            <div className="skill-card">
                                <div className="skill-card-header">
                                    <div className="skill-icon-badge" aria-hidden="true">
                                        {cat.icon}
                                    </div>
                                    <div className="skill-card-meta">
                                        <h3 className="skill-card-title">{cat.title}</h3>
                                        <p className="skill-card-sub">{cat.subtitle}</p>
                                    </div>
                                </div>

                                <div className="skill-pills">
                                    {cat.skills.map((skill) => (
                                        <span className="skill-pill" key={skill}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {idx < skillCategories.length - 1 && (
                                <div className="skills-connector" aria-hidden="true">
                                    <span className="connector-dot" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
