export default function MainPage() {
    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
            <section className="text-center mb-10 md:mb-16">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Build. Ship. Iterate.</h1>
                <p className="mt-3 md:mt-4 text-base md:text-lg opacity-80">A quick set of sample elements to verify layout, colors, and interactions.</p>
                <div className="mt-6 flex items-center justify-center gap-3">
                    <button className="rounded-md px-4 py-2 text-sm md:text-base font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">Primary</button>
                    <button className="rounded-md px-4 py-2 text-sm md:text-base font-medium border border-current hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black/20">Secondary</button>
                </div>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
                {[1,2,3].map((i) => (
                    <article key={i} className="rounded-lg border border-black/10 dark:border-white/10 p-4 md:p-6">
                        <h2 className="text-lg md:text-xl font-semibold">Card {i}</h2>
                        <p className="mt-2 text-sm md:text-base opacity-80">This is a sample card. Use it to check typography and spacing.</p>
                        <a href="#" className="mt-3 inline-block text-sm md:text-base text-blue-600 hover:underline">Learn more →</a>
                    </article>
                ))}
            </section>

            <section className="mb-10 md:mb-16">
                <h3 className="text-xl md:text-2xl font-bold">Features</h3>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {['Responsive layout','Dark/Light theme','Accessible controls','TypeScript + Vite'].map((f) => (
                        <li key={f} className="flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 p-3">
                            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            <span className="text-sm md:text-base">{f}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mb-10 md:mb-16">
                <h3 className="text-xl md:text-2xl font-bold">Contact</h3>
                <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input className="col-span-1 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your name" />
                    <input className="col-span-1 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Email" type="email" />
                    <textarea className="sm:col-span-2 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Message" rows={4} />
                    <div>
                        <button className="rounded-md px-4 py-2 text-sm md:text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400">Send</button>
                    </div>
                </form>
            </section>
        </main>
    )
}