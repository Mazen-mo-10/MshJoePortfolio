import { motion } from "framer-motion";

interface ExperienceItemProps {
  role: string;
  company: string;
  date: string;
  description: string | string[];
  delay?: number;
}

export function ExperienceItem({ role, company, date, description, delay = 0 }: ExperienceItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8 border-l border-border pb-12 last:pb-0"
    >
      <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary" />
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h3 className="text-xl font-bold text-foreground">{role}</h3>
        <span className="font-mono text-sm text-primary/80 mt-1 sm:mt-0">{date}</span>
      </div>
      
      <div className="text-lg text-primary font-medium mb-4">{company}</div>
      
      <div className="text-muted-foreground leading-relaxed">
        {Array.isArray(description) ? (
          <ul className="list-disc list-inside space-y-2">
            {description.map((item, index) => (
              <li key={index} className="pl-2 marker:text-primary/50">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </motion.div>
  );
}
