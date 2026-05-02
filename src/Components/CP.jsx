import './CP.css'

const CodeforcesLogo = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z" />
    </svg>
)

const LeetCodeLogo = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
)

const CodeChefLogo = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M11.257.004C5.23.264.171 5.08.007 11.104c-.09 3.374 1.226 6.437 3.4 8.671l.232.23c.332.322.683.625 1.05.904.02.016.04.03.06.046a11.26 11.26 0 0 0 1.24.773l.055.03a11.184 11.184 0 0 0 1.37.596l.06.02c.46.155.933.28 1.42.37l.07.012c.49.085.993.133 1.506.14h.06c.513-.007 1.016-.055 1.506-.14l.07-.012c.487-.09.96-.215 1.42-.37l.06-.02a11.184 11.184 0 0 0 1.37-.596l.055-.03a11.26 11.26 0 0 0 1.24-.773c.02-.016.04-.03.06-.046.367-.279.718-.582 1.05-.904l.232-.23c2.174-2.234 3.49-5.297 3.4-8.671C23.829 5.08 18.77.264 11.257.004zm.743 2.01c.357.013.71.04 1.057.082-1.04.73-1.81 1.73-2.22 2.9-.41-1.17-1.18-2.17-2.22-2.9.347-.042.7-.069 1.057-.082h2.326zM7.08 3.26c1.39.63 2.44 1.88 2.8 3.41H5.63c.44-1.44 1.3-2.67 2.45-3.41zm9.84 0c1.15.74 2.01 1.97 2.45 3.41h-4.25c.36-1.53 1.41-2.78 2.8-3.41zM4.83 8.17h5.05v2.16H4.83V8.17zm9.29 0h5.05v2.16h-5.05V8.17zM4.83 11.83h5.05v2.16H4.83v-2.16zm9.29 0h5.05v2.16h-5.05v-2.16zM5.63 15.5h4.25c-.36 1.53-1.41 2.78-2.8 3.41-1.15-.74-2.01-1.97-2.45-3.41zm8.5 0h4.25c-.44 1.44-1.3 2.67-2.45 3.41-1.39-.63-2.44-1.88-2.8-3.41zm-4.17.42c.41 1.17 1.18 2.17 2.22 2.9a9.23 9.23 0 0 1-2.114-.082 9.23 9.23 0 0 1-2.326-.818c.41-1.17 1.18-2.17 2.22-2.9z" />
    </svg>
)

const logos = {
    Codeforces: CodeforcesLogo,
    LeetCode: LeetCodeLogo,
    CodeChef: CodeChefLogo,
}

const platforms = [
    {
        name: 'Codeforces',
        handle: '@karsh_',
        rating: '1234',
        rank: '(Max Rating) Pupil',
        url: 'https://codeforces.com/profile/Karsh_',
    },
    {
        name: 'LeetCode',
        handle: '@karshs',
        rating: '1701',
        rank: '(Max Rating) Top 13%',
        url: 'https://leetcode.com/u/karsh_S/',
    },
    {
        name: 'CodeChef',
        handle: '@Karsh_',
        rating: '1449',
        rank: '(Max Rating) 2 Star',
        url: 'https://www.codechef.com/users/taut_coder',
    },
]

function CP() {
    return (
        <section id="cp">
            <p className="section-label">03 — competitive programming</p>
            <h2 className="section-title">CP Stats</h2>
            <div className="divider"></div>

            <div className="cp-cards">
                {platforms.map((p) => {
                    const Logo = logos[p.name]
                    return (
                        <div className="cp-card" key={p.name}>
                            <p className="cp-card-platform">
                                <Logo />
                                {p.name}
                            </p>
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
                    )
                })}
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