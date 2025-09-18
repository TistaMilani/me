export default function MainPage() {
    return (
        <main className="mx-auto w-full max-w-6xl px-4 pt-8 md:pt-12">
            

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2 md:mb-4">
                <h3 className="col-span-full text-xl md:text-2xl font-bold">
                    Take a look
                </h3>

                <article className="rounded-lg border border-black/10 dark:border-white/10 p-4 md:p-6">
                    <h2 className="text-lg md:text-xl font-semibold">Advent of Code</h2>
                    <p className="mt-2 text-sm md:text-base opacity-80">
                        In this GitHub repository, you'll find my solutions to the Advent of Code
                        challenges.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                        Python
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-purple-700">
                        Rust
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700">
                        Problem-Solving
                        </span>
                    </div>

                    <a
                        href="https://github.com/TistaMilani/advent-of-code"
                        className="mt-3 inline-block text-sm md:text-base text-blue-600 hover:underline"
                    >
                        To the repo →
                    </a>
                </article>

                <article className="rounded-lg border border-black/10 dark:border-white/10 p-4 md:p-6">
                    <h2 className="text-lg md:text-xl font-semibold">Advent of Code</h2>
                    <p className="mt-2 text-sm md:text-base opacity-80">
                        In this GitHub repository, you'll find my solutions to the Advent of Code
                        challenges.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                        Python
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-purple-700">
                        Rust
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700">
                        Problem-Solving
                        </span>
                    </div>

                    <a
                        href="https://github.com/TistaMilani/advent-of-code"
                        className="mt-3 inline-block text-sm md:text-base text-blue-600 hover:underline"
                    >
                        To the repo →
                    </a>
                </article>
            </section>
        </main>
    )
}