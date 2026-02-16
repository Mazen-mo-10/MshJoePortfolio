import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Menu, X, Terminal, User, Code, Briefcase, GraduationCap, Mail, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", to: "home", icon: Terminal },
  { name: "About", to: "about", icon: User },
  { name: "Skills", to: "skills", icon: Code },
  { name: "Projects", to: "projects", icon: FolderOpen },
  { name: "Experience", to: "experience", icon: Briefcase },
  { name: "Education", to: "education", icon: GraduationCap },
  { name: "Contact", to: "contact", icon: Mail },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-secondary text-primary md:hidden border border-primary/20"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar Container */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-80 bg-[#121b18]/95 backdrop-blur-md border-r border-border
          transition-transform duration-300 ease-in-out md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo / Brand */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 mb-12 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center border border-primary/20 text-primary group-hover:bg-primary/20 transition-all">
              <span className="font-mono font-bold text-xl">YM</span>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">Youssef Mohamed</h1>
              <p className="text-xs text-muted-foreground font-mono">Offensive Security</p>
            </div>
          </ScrollLink>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                activeClass="bg-primary/10 text-primary border-r-2 border-primary"
                className="flex items-center gap-4 px-4 py-3 text-sm font-medium text-muted-foreground rounded-l-md hover:text-primary hover:bg-primary/5 transition-all cursor-pointer group"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-mono">{item.name}</span>
              </ScrollLink>
            ))}
          </nav>

          {/* Footer / Resume Button */}
          <div className="pt-8 border-t border-border">
            <Button 
              className="w-full font-mono text-primary-foreground bg-primary hover:bg-primary/90"
              onClick={() => window.open("/resume.pdf", "_blank")} // Placeholder link
            >
              Download CV
            </Button>
            <div className="mt-6 text-center text-xs text-muted-foreground">
              © 2026 Youssef Mohamed.
            </div>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
