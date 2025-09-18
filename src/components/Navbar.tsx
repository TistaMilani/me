import { useMemo } from 'react'

type SocialLink = {
    label: string
    href: string
    path: string
}

const socialLinks: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/TistaMilani', path: "/github.png" },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/francesco-rocchiccioli', path: "/linkedin.png" },
    { label: 'Instagram', href: 'https://www.instagram.com/tista.milani', path: "/instagram.png" },
    { label: 'Lichess', href: 'https://lichess.org/@/TistaMilani', path: "/lichess.png" },
    { label: 'Chess.com', href: 'https://www.chess.com/member/tistamilani', path: "/chesscom.png" },
]

type Theme = 'light' | 'dark'

type NavbarProps = {
    theme?: Theme
    onToggleTheme?: () => void
}

export default function Navbar({ theme = 'dark', onToggleTheme }: NavbarProps) {
    const iconFilter = useMemo(() => (theme === 'dark' ? 'invert' : ''), [theme])
    const hoverRing = theme === 'dark'
        ? 'hover:bg-white/10 focus:ring-white/20'
        : 'hover:bg-black/10 focus:ring-black/20'
    const navBorder = theme === 'dark' ? 'border-white/10' : 'border-black/10'

    return (
        <nav className={`sticky top-0 z-50 w-full bg-[var(--bg)] border-b ${navBorder}`}>
            <div className="mx-auto my-4 w-full max-w-6xl px-4 py-2 md:py-3 flex flex-col sm:flex-row sm:h-16 items-start sm:items-center justify-between gap-2 md:gap-3">
            
                <div className="flex items-center gap-3 py-2">
                    <img 
                        src="/propic.jpg" 
                        alt="Profile" 
                        className="w-16 h-16 rounded object-cover" 
                    />

                    {/* Text content */}
                    <div>
                        <h1 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            TistaMilani
                        </h1>
                        <p className={`text-sm md:text-base font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                            aka: Francesco Rocchiccioli
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-1 md:gap-2">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center rounded-md p-2 shrink-0 transition focus:outline-none focus:ring-2 ${hoverRing}`}
                            aria-label={link.label}
                        >
                            <img src={link.path} alt={link.label} className={`h-6 w-6 object-contain shrink-0 ${iconFilter}`} />
                        </a>
                    ))}

                    <button
                        type="button"
                        onClick={onToggleTheme}
                        className={`ml-2 inline-flex items-center justify-center rounded-full p-1 md:p-2 transition focus:outline-none focus:ring-2 ${hoverRing}`}
                        aria-label="Toggle theme"
                        aria-pressed={theme === 'dark'}
                        title="Toggle theme"
                    >
                        <div className={`relative h-6 w-12 md:h-7 md:w-14 rounded-full ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className={`absolute left-1 top-1 h-4 w-4 md:h-5 md:w-5 ${theme === 'dark' ? 'text-slate-400' : 'text-black'}`}
                                aria-hidden
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m9-9h-2.25M5.25 12H3m15.364 6.364-1.591-1.591M7.227 7.227 5.636 5.636m12.728 0-1.591 1.591M7.227 16.773l-1.591 1.591M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className={`absolute right-1 top-1 h-4 w-4 md:h-5 md:w-5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'}`}
                                aria-hidden
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3c.23 0 .46.01.69.03a7.5 7.5 0 008.07 9.76c.02.23.03.46.03.69z" />
                            </svg>
                            <div
                                className={`absolute top-0.5 h-5 w-5 md:h-6 md:w-6 rounded-full shadow transition-transform ${theme === 'dark' ? 'translate-x-6 md:translate-x-7 bg-white' : 'translate-x-0 bg-black'}`}
                                aria-hidden
                            />
                        </div>
                    </button>
                </div>

            </div>
        </nav>
    )
}