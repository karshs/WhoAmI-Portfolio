import './Skills.css'

const skills = {
    Languages: ['C++', 'Python', 'JavaScript', 'Java', 'SQL'],
    'Backend & Tools': ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'REST APIs', 'Git', 'Linux'],
    'CS Fundamentals': ['Data Structures', 'Algorithms', 'Dynamic Programming', 'Graph Theory', 'OOP'],
}

function Skills() {
    return (
        <section id="skills">
            <p className="section-label">02 — tech stack</p>
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="divider"></div>

            {Object.entries(skills).map(([category, items]) => (
                <div className="skills-category" key={category}>
                    <p className="skills-cat-title">{category}</p>
                    <div className="skills-grid">
                        {items.map((skill) => (
                            <span className="skill-tag" key={skill}>{skill}</span>
                        ))}
                    </div>
                </div>
            ))}

        </section>
    )
}

export default Skills