export default function MainPage() {
    return (
        <main className="mx-auto w-full max-w-6xl px-4 pt-4 md:pt-4">
            <section className="mx-auto w-full max-w-6xl px-4 mb-8">
  
              <div className="mt-4 pb-4">
                <h4 className="text-lg font-semibold mb-2">Education @ DTU</h4>
                  I am currently pursuing an MSc in Computer Science and Engineering at the Technical University of Denmark (DTU), specializing in Safe and Secure by Design and Cybersecurity, with a focus on developing software systems that are reliable, resilient, and secure.
              </div>

              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Education @ UNICA</h4>
                <p>
                  I completed my Bachelor's degree (L-31) in Computer Science at the University of Cagliari (UNICA), where I developed a strong foundation in programming, algorithms, and software engineering principles, and gained hands-on experience in cybersecurity as a member of the CTF team <strong>Srdnlen</strong>.  
                </p>
                <p>
                  For my thesis, I focused on <strong>Formal verification of Solidity smart contracts</strong> for the <a href="https://github.com/fsainas/contracts-verification-benchmark" className="text-blue-600 underline">Contract Verification Benchmark</a>, applying rigorous methods to ensure smart contract security and reliability.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">Skills & Passions</h4>
                
                <h5 className="text-sm font-semibold mt-3 mb-1">Programming Languages</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">C</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Python</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">OCaml</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Java</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">JavaScript</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">TypeScript</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Solidity</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">SQL</span>
                </div>

                <h5 className="text-sm font-semibold mt-3 mb-1">Technical Skills</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Problem Solving</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Web Development (Flask, Django, HTML, CSS, Node, React)</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Formal Verification</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Database Design</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Memory Management & Systems Programming</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Human–Computer Interaction (UX, UI)</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Teamwork & Agile Methodologies</span>
                </div>

                <h5 className="text-sm font-semibold mt-3 mb-1">Security & Hacking</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Cybersecurity</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">CTF</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">OSINT</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Misc</span>
                </div>

                <h5 className="text-sm font-semibold mt-3 mb-1">Hobbies</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Chess</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Card Games</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Videogames</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Biking</span>
                  <span className="px-2 py-1 text-xs rounded border border-gray-300 text-[#D5D5D5]-700">Drawing</span>
                </div>
              </div>

            </section>


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
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-200 text-yellow-800">
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