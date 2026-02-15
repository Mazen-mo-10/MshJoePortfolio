import { db } from "./db";
import { insertMessageSchema, messages, projects, type InsertMessage, type Project } from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<void>;
  getProjects(): Promise<Project[]>;
  seedProjects(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(message: InsertMessage): Promise<void> {
    await db.insert(messages).values(message);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async seedProjects(): Promise<void> {
    const existing = await db.select().from(projects);
    if (existing.length > 0) return;

    await db.insert(projects).values([
      {
        title: "Bug Bounty - Critical Session Management Flaw",
        description: "Identified a critical Session Management/Logic Flaw that allowed complete account life-cycle bypass and subsequent account takeover via concurrent active sessions after the deletion process was initiated.",
        problem: "Logic flaw in account deletion process.",
        tools: ["Burp Suite", "Logic Analysis"],
        outcome: "Secured a monetary bounty.",
      },
      {
        title: "Linux Process Monitor",
        description: "Developed a real-time system monitor in C++ that parses the core Linux /proc filesystem data.",
        problem: "Need for a lightweight, terminal-based process viewer.",
        tools: ["C++", "ncurses", "Linux /proc"],
        outcome: "Functional tool demonstrating low-level systems programming.",
        githubLink: "https://github.com/Houdini-Y"
      },
      {
        title: "Python Port Scanner",
        description: "Custom multithreaded scanner supporting user-defined port ranges, banner grabbing, and DNS resolution.",
        tools: ["Python", "Socket Programming", "Multithreading"],
        outcome: "Efficient port scanning tool.",
        githubLink: "https://github.com/Houdini-Y"
      },
      {
        title: "Steganography Tool",
        description: "LSB encoder/decoder with built-in compression and benchmarking features.",
        tools: ["Python", "Image Processing"],
        outcome: "Functional steganography utility.",
        githubLink: "https://github.com/Houdini-Y"
      }
    ]);
  }
}

export const storage = new DatabaseStorage();
