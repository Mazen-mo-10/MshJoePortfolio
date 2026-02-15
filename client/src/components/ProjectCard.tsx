import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  severity?: "Critical" | "High" | "Medium" | "Low";
  takeaway?: string;
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

export function ProjectCard({ 
  title, 
  description, 
  tags, 
  severity,
  takeaway,
  githubUrl, 
  liveUrl, 
  delay = 0 
}: ProjectCardProps) {
  const getSeverityColor = (sev: string) => {
    switch (sev) {
      case "Critical": return "bg-red-500/10 text-red-500 border-red-500/20";
      case "High": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "Medium": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Low": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default: return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="bg-secondary/50 border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col group hover:-translate-y-2">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center gap-3">
            <Folder className="w-10 h-10 text-primary" />
            {severity && (
              <Badge variant="outline" className={`font-mono text-[10px] ${getSeverityColor(severity)}`}>
                {severity}
              </Badge>
            )}
          </div>
          <div className="flex gap-4">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-mono text-primary/80">
                {tag}
              </span>
            ))}
          </div>
          {takeaway && (
            <div className="pt-4 border-t border-border/50 w-full">
              <p className="text-[11px] font-mono text-muted-foreground/70 leading-relaxed italic">
                <span className="text-primary/60 mr-1">Key takeaway:</span>
                {takeaway}
              </p>
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
