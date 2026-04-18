import './Contacts.css'

const info = [
    { label: 'Email', value: 'you@email.com' },
    { label: 'Location', value: 'India · IST (UTC+5:30)' },
    { label: 'Response time', value: '< 24 hours' },
    { label: 'Preferred', value: 'Email / LinkedIn' },
]

const socials = [
    { label: 'GH', url: 'https://github.com/' },
    { label: 'LI', url: 'https://linkedin.com/' },
    { label: 'CF', url: 'https://codeforces.com/' },
    { label: 'LC', url: 'https://leetcode.com/' },
    { label: 'TW', url: 'https://twitter.com/' },
    { label: 'IG', url: 'https://instagram.com/' },
]

function Contact() {
    return (
        <section id="contact">
            <p className="section-label">05 — contact</p>
            <h2 className="section-title">Get in Touch</h2>
            <div className="divider"></div>

            <p className="contact-intro">
                Have a project, opportunity, or just want to talk algorithms?
                I'm always open to a good conversation. Reach out — I reply fast.
            </p>

            <div className="contact-grid">
                {info.map((item) => (
                    <div className="contact-item" key={item.label}>
                        <span className="contact-item-label">{item.label}</span>
                        <span className="contact-item-value">{item.value}</span>
                    </div>
                ))}
            </div>

            <div className="social-row">
                {socials.map((s) => (
                    <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon"
                    >
                        {s.label}
                    </a>
                ))}
            </div>

        </section >
    )
}

export default Contact