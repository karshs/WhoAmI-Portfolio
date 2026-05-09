import './ThemeToggle.css'

function ThemeToggle({ theme, toggleTheme }) {
    const isDark = theme === 'dark'

    return (
        <button
            className="theme-toggle-float"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {/* Hover tooltip — slides out to the left */}
            <span className="toggle-tooltip">
                {isDark ? 'Let there be light' : 'Return to the shadows'}
            </span>

            {/* Animated icon */}
            <span className="toggle-icon">
                {isDark ? (
                    /* Moon with orbiting dot */
                    <svg className="icon-moon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                        <circle className="moon-star moon-star-1" cx="17" cy="4" r="1" fill="currentColor" />
                        <circle className="moon-star moon-star-2" cx="20" cy="8" r="0.7" fill="currentColor" />
                        <circle className="moon-star moon-star-3" cx="14" cy="2" r="0.6" fill="currentColor" />
                    </svg>
                ) : (
                    /* Sun with rotating rays */
                    <svg className="icon-sun" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                        <g className="sun-rays" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                            <line x1="12" y1="2" x2="12" y2="4" />
                            <line x1="12" y1="20" x2="12" y2="22" />
                            <line x1="2" y1="12" x2="4" y2="12" />
                            <line x1="20" y1="12" x2="22" y2="12" />
                            <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
                            <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
                            <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
                            <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
                        </g>
                    </svg>
                )}
            </span>

        </button>
    )
}

export default ThemeToggle
