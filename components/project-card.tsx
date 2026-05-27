import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`View ${title} on GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      <p className="mb-4 leading-relaxed text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
