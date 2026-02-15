import { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiHackerone, 
  SiBugcrowd, 
  SiPython, 
  SiCplusplus, 
  SiGnubash, 
  SiBurpsuite, 
  SiLinux, 
  SiWireshark,
  SiKalilinux,
  SiOwasp,
  SiHtml5,
  SiJavascript
} from "react-icons/si";
import { Github, Linkedin, Mail, Terminal, Lock, Code, GraduationCap, ChevronUp } from "lucide-react";
import profilePic from "@assets/mshjoeing_1771196177993.jpeg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Home() {
  const contactMutation = useContact();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Sidebar />
      
      <main className="md:pl-80 w-full">
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-24 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="max-w-4xl w-full z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="font-mono text-primary mb-5 text-lg">Hi, my name is</h4>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                Youssef Mohamed.
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-8">
                I break things to secure them.
              </h2>
              <p className="max-w-xl text-muted-foreground text-lg leading-relaxed mb-4">
                I am a High-achieving Computer Science Undergraduate specializing in 
                <span className="text-primary font-medium"> Offensive Security</span>. 
                Currently focused on Bug Bounty Hunting, Penetration Testing, and developing security tools.
              </p>
              <p className="text-sm font-mono text-primary/70 mb-10 italic">
                Trusted by real-world bug bounty programs and security platforms.
              </p>
              
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-transparent border border-primary text-primary hover:bg-primary/10 font-mono h-12 px-8"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Check my work
                </Button>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono h-12 px-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 p-6 md:p-12 lg:p-24 max-w-5xl mx-auto">
          <SectionHeading number="01" title="About Me" />
          
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>
                Hello! My name is Youssef and I enjoy exploring the depths of systems to find vulnerabilities. 
                My interest in cybersecurity started when I realized how fragile digital systems can be, and 
                I decided to learn how to protect them by understanding how to break them.
              </p>
              <p>
                I am currently studying Computer Science at <span className="text-primary">Minya National University</span> 
                (GPA 3.6), where I balance my academic studies with real-world security research.
              </p>
              <p>
                I actively participate in Bug Bounty programs on platforms like <span className="text-primary">HackerOne</span> and 
                <span className="text-primary">Bugcrowd</span>, where I've identified critical vulnerabilities in various applications.
              </p>
              <p className="border-l-2 border-primary/30 pl-4 italic text-foreground/90">
                My approach focuses on understanding systems deeply, modeling real attacker behavior,
                and delivering actionable security insights.
              </p>
              <div className="pt-4">
                <h4 className="font-mono text-foreground mb-4 text-sm">Recently working with:</h4>
                <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                  <li className="flex items-center gap-2"><span className="text-primary">▹</span> Web Security</li>
                  <li className="flex items-center gap-2"><span className="text-primary">▹</span> Network Pentesting</li>
                  <li className="flex items-center gap-2"><span className="text-primary">▹</span> Python & C++</li>
                  <li className="flex items-center gap-2"><span className="text-primary">▹</span> Linux System Internals</li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="relative group w-64 h-64 md:w-full md:h-auto max-w-xs">
                <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                <div className="relative rounded-lg overflow-hidden bg-muted w-full aspect-square grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={profilePic} 
                    alt="Youssef Mohamed" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 p-6 md:p-12 lg:p-24 max-w-5xl mx-auto bg-secondary/20">
          <SectionHeading number="02" title="Technical Arsenal" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Web Application Security</h3>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><SiOwasp className="text-primary" /> OWASP Top 10</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> SQL Injection</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> XSS / CSRF / SSTI</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> IDOR / Broken Access</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> JWT Attacks</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Network & Systems</h3>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><SiKalilinux className="text-primary" /> Kali Linux</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> Metasploit</li>
                <li className="flex items-center gap-2"><SiWireshark className="text-primary" /> Wireshark</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> Nmap / Masscan</li>
                <li className="flex items-center gap-2"><SiLinux className="text-primary" /> System Internals</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tools & Environments</h3>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><SiBurpsuite className="text-primary" /> Burp Suite Pro</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> FFUF / Gobuster</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> HTTPX / Nuclei</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> Git / Docker</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> Virtualization</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors md:col-span-3 lg:col-span-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Programming</h3>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><SiPython className="text-primary" /> Python</li>
                <li className="flex items-center gap-2"><SiCplusplus className="text-primary" /> C++ / C</li>
                <li className="flex items-center gap-2"><SiGnubash className="text-primary" /> Bash</li>
                <li className="flex items-center gap-2"><SiJavascript className="text-primary" /> JavaScript</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> Assembly x86-64</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 p-6 md:p-12 lg:p-24 max-w-6xl mx-auto">
          <SectionHeading number="03" title="Projects & Findings" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Linux Process Monitor"
              description="A real-time process monitoring tool built with C++ and ncurses library. Features process filtering, sorting, and resource usage tracking similar to htop."
              tags={["C++", "System Programming", "Linux API", "ncurses"]}
              severity="Medium"
              takeaway="Low-level knowledge is fundamental for understanding operating system vulnerabilities."
              githubUrl="https://github.com/Houdini-Y"
              delay={0}
            />
            
            <ProjectCard 
              title="Bug Bounty: Critical Logic Flaw"
              description="Identified a critical business logic vulnerability in a financial application that allowed unauthorized fund transfers between locked accounts."
              tags={["Web Security", "Logic Flaw", "Burp Suite", "Reported"]}
              severity="Critical"
              takeaway="Business logic flaws are often more dangerous than technical vulnerabilities."
              delay={0.1}
            />
            
            <ProjectCard 
              title="Multi-Threaded Port Scanner"
              description="High-performance network scanner written in Python using raw sockets and threading. capable of SYN/ACK scanning and service version detection."
              tags={["Python", "Networking", "Socket Programming"]}
              severity="Medium"
              takeaway="Efficiency in reconnaissance tools can make or break a penetration testing timeline."
              githubUrl="https://github.com/Houdini-Y"
              delay={0.2}
            />

            <ProjectCard 
              title="Steganography Tool"
              description="CLI tool for hiding encrypted messages inside image files using LSB (Least Significant Bit) manipulation."
              tags={["Python", "Cryptography", "Image Processing"]}
              severity="Low"
              takeaway="Simple mathematical manipulation can hide complex data in plain sight."
              githubUrl="https://github.com/Houdini-Y"
              delay={0.3}
            />

            <ProjectCard 
              title="Bug Bounty: Session Takeover"
              description="Discovered a session fixation vulnerability combined with XSS leading to full account takeover on a private program."
              tags={["XSS", "Session Mgmt", "HackerOne"]}
              severity="High"
              takeaway="Chaining vulnerabilities is the most effective way to demonstrate critical impact."
              delay={0.4}
            />
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 p-6 md:p-12 lg:p-24 max-w-4xl mx-auto">
          <SectionHeading number="04" title="Where I've Worked" />
          
          <div className="space-y-12 ml-4 md:ml-0">
            <ExperienceItem 
              role="Programming Language Coach"
              company="New Vision Academy"
              date="2023 - Present"
              description={[
                "Teaching Python and C++ fundamentals to students.",
                "Designing curriculum and practical coding challenges.",
                "Mentoring students in problem-solving and algorithmic thinking."
              ]}
            />
            
            <ExperienceItem 
              role="Security Researcher (Bug Bounty)"
              company="HackerOne / Bugcrowd"
              date="2022 - Present"
              description={[
                "Conducting vulnerability assessments on web applications.",
                "Reporting critical security flaws including SQL Injection, XSS, and IDOR.",
                "Collaborating with security teams to validate and fix vulnerabilities."
              ]}
              delay={0.2}
            />
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-24 p-6 md:p-12 lg:p-24 max-w-4xl mx-auto bg-secondary/20">
          <SectionHeading number="05" title="Education" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start bg-card p-8 rounded-xl border border-border"
          >
            <div className="bg-primary/10 p-4 rounded-full text-primary">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Bachelor of Computer Science</h3>
              <p className="text-xl text-primary mt-2">Minya National University</p>
              <p className="text-sm font-mono text-muted-foreground mt-1">2021 - 2025 (Expected)</p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono border border-primary/20">GPA: 3.6/4.0</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-mono border border-border">Data Structures</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-mono border border-border">Operating Systems</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-mono border border-border">Computer Networks</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 p-6 md:p-12 lg:p-24 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-lg mb-4">06. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
              I am currently looking for new opportunities in Offensive Security and Penetration Testing. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="bg-card p-8 rounded-xl border border-border shadow-lg text-left max-w-md mx-auto mb-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Hello, I'd like to discuss a project..." 
                            className="min-h-[120px] bg-background"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full font-mono bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            <div className="flex justify-center gap-8 mb-6">
              <a 
                href="https://github.com/Houdini-Y" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/youssef-mohamed-8b2a3a1b4" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:ymh796d68@gmail.com" 
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://hackerone.com/houdini-y" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
              >
                <SiHackerone className="w-6 h-6" />
              </a>
            </div>
            <p className="font-mono text-[10px] text-muted-foreground/50">
              PGP key available upon request.
            </p>
          </motion.div>
        </section>

        {/* SCROLL TO TOP */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all active:scale-95"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* FOOTER */}
        <footer className="py-6 text-center text-sm font-mono text-muted-foreground">
          <p>Designed & Built by Youssef Mohamed</p>
        </footer>
      </main>
    </div>
  );
}
