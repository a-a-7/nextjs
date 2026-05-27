import { Github, Linkedin, Mail } from "lucide-react"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "LAN-tiedostonjakotyökalu",
    description:
      "Helppoa tiedostojen/leikepöydän jakoa Windows, sekä Android-laitteiden välillä.",
    technologies: ["C++", "Kotlin", "Qt"],
    githubUrl: "https://github.com/a-a-7?tab=repositories",
  },
  {
    title: "HTTP-testeri",
    description:
      'Työkalu, jolla voidaan testata HTTP-pyynnöt haluttuun verkko-osoitteeseen. Helppokäyttöinen, palvelimen vastaus näytetään siististi.',
    technologies: ["Python", "HTML"],
    githubUrl: "https://github.com/a-a-7/HTTP_Tester",
  },
  {
    title: "Tampermonkey skriptejä",
    description:
      "JS-skriptejä Tampermonkey-laajennukselle, luetaan nettisivun elementtejä ja automatisoidaan syöttö.",
    technologies: ["JavaScript", "HTML"],
    githubUrl: "https://github.com/a-a-7/Tampermonkey-Scripts",
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-16">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Niko
          </h1>
          <p className="mb-2 text-xl text-primary">Oppilas</p>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Rakennan työkaluja sekä ohjelmia kun näen niille tarpeen
          </p>
        </header>

        {/* Minusta-osio */}
        <section className="mb-16">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Minusta
          </h2>
          <p className="leading-relaxed text-foreground">
            Luon ohjelmia kun saan idean, jonka avulla asioita 
            voisi suoraviivaistaa, enkä löydä olemassaolevia työkaluja.
          </p>
        </section>

        {/* Projektit-osio */}
        <section className="mb-16">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Projektit
          </h2>
          <div className="grid gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* Taidot-osio */}
        <section className="mb-16">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Taidot
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "C++",
              "Java",
              "JavaScript",
              "Python",
              "Kotlin",
              "Next.js",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Kontakti-osio */}
        <section>
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Ota yhteyttä
          </h2>
          <div className="flex gap-6">
            <a
              href="https://github.com/a-a-7"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            {/*
            <a
              href="#"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn profile"
            >
              
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>*/}
            <a
              href="mailto:97719@student.jedu.fi"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              aria-label="Email contact"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>Built with Next.js and Tailwind CSS</p>
        </footer>
      </div>
    </main>
  )
}
