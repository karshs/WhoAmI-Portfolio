import './MathBackground.css'

// 18 symbols with hand-tuned variety — positions, sizes, speeds, delays all spread out
// so they never feel uniform or repetitive across the full page height
const symbols = [
    { char: '∑', left: '4%', size: '1.8rem', duration: '14s', delay: '0s' },
    { char: '∫', left: '11%', size: '2.4rem', duration: '18s', delay: '3s' },
    { char: 'π', left: '19%', size: '1.5rem', duration: '11s', delay: '7s' },
    { char: 'Δ', left: '27%', size: '2.8rem', duration: '16s', delay: '1s' },
    { char: '∞', left: '35%', size: '2.0rem', duration: '13s', delay: '9s' },
    { char: '√', left: '43%', size: '1.6rem', duration: '19s', delay: '4s' },
    { char: '∂', left: '51%', size: '2.2rem', duration: '12s', delay: '6s' },
    { char: 'λ', left: '59%', size: '1.9rem', duration: '15s', delay: '2s' },
    { char: 'θ', left: '67%', size: '2.6rem', duration: '17s', delay: '8s' },
    { char: '∇', left: '74%', size: '1.4rem', duration: '10s', delay: '5s' },
    { char: 'α', left: '81%', size: '2.1rem', duration: '14s', delay: '11s' },
    { char: 'β', left: '88%', size: '1.7rem', duration: '20s', delay: '0.5s' },
    { char: 'Ω', left: '93%', size: '2.5rem', duration: '16s', delay: '13s' },
    { char: '≈', left: '7%', size: '2.3rem', duration: '22s', delay: '10s' },
    { char: '∈', left: '23%', size: '1.3rem', duration: '9s', delay: '15s' },
    { char: 'μ', left: '47%', size: '2.0rem', duration: '18s', delay: '12s' },
    { char: 'σ', left: '63%', size: '1.6rem', duration: '13s', delay: '16s' },
    { char: '∏', left: '78%', size: '2.4rem', duration: '21s', delay: '7.5s' },
]

function MathBackground() {
    return (
        <div className="math-bg-global" aria-hidden="true">
            {symbols.map((s, i) => (
                <span
                    key={i}
                    className="math-symbol-global"
                    style={{
                        left: s.left,
                        fontSize: s.size,
                        animationDuration: s.duration,
                        animationDelay: s.delay,
                    }}
                >
                    {s.char}
                </span>
            ))}
        </div>
    )
}

export default MathBackground
