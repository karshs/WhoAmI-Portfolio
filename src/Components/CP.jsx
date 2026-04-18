import './CP.css'

const platforms = [
    {
        name: 'Codeforces',
        handle: '@yourhandle',
        rating: '1234',
        rank: 'Specialist',
        url: 'https://codeforces.com/profile/yourhandle',
    },
    {
        name: 'LeetCode',
        handle: '@yourhandle',
        rating: '1567',
        rank: 'Top 20%',
        url: 'https://leetcode.com/yourhandle',
    },
]

function CP() {
    return (
        <section id="cp">
            <p className="section-label">03 — competitive programming</p>
            <h2 className="section-title">CP Stats</h2>
            <div className="divider"></div>

            <div className="cp-cards">
                {platforms.map((p) => (
                    <div className="cp-card" key={p.name}>
                        <p className="cp-card-platform">{p.name}</p>
                        <p className="cp-card-handle">{p.handle}</p>
                        <p className="cp-card-rating">{p.rating}</p>
                        <p className="cp-card-rank">{p.rank}</p>
                        <a
                            href={p.url}
                            target="_blank"
                            rel="noreferrer"
                            className="cp-card-link"
                        >
                            view profile ↗
                        </a>
                    </div>
                ))}
            </div>

            <div className="cp-note">
                <p>
                    I enjoy solving problems in <strong>graph theory</strong>,{' '}
                    <strong>dynamic programming</strong> and{' '}
                    <strong>binary search</strong>. Grinding consistently
                    to reach Expert on Codeforces.
                </p>
            </div>

        </section >
    )
}

export default CP