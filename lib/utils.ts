import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  expertise: string[]
  email: string
  image?: string
}

export const managingDirector: TeamMember = {
  id: "md",
  name: "Shamsudeen Aderoju",
  role: "Program Manager",
  bio: "Shamsudeen Aderoju is a strategic Program Manager with over 8 years of experience driving impact-focused initiatives in the renewable energy and environmental sectors. He excels at aligning cross-functional teams, managing complex stakeholder relationships, and ensuring projects are delivered on time and within scope. His leadership combines operational discipline with a passion for sustainable development.",
  expertise: ["Project Management", "Event Management", "Leadership", "Business Development"],
  email: "shamsudeenaderojo@gmail.com",
  image: "/team/shams.png"
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Mary Salau",
    role: "Social Media Manager",
    bio: "Mary Salau is a digital storyteller and environmental advocate who holds a Master's degree in Public Health. With over five years of active involvement in the environmental space, she brings a unique ability to translate complex sustainability topics into engaging, accessible content. As Social Media Manager, she builds online communities, amplifies ARBR's mission, and drives brand awareness across all digital platforms.",
    expertise: ["Social Media Strategy", "Content Creation", "Community Engagement", "Digital Advocacy"],
    email: "sch",
    image: "/team/seun.jpeg",
  },
{
    id: "2",
    name: "Edet Hillary Effiong",
    role: "Technical Operations Lead",
    bio: "Edet Hillary Effiong is a software engineer who keeps technical systems and daily operations running. He focuses on building efficient workflows, solving problems, and helping teams work better together.",
    expertise: ["Technical Operations", "Process Automation", "System Optimization", "Team work"],
    email: "edet@arbr.ng",
    image: "/team/edet.jpg"
},
  // {
  //   id: "3",
  //   name: "Happiness Benson",
  //   role: "Programs Associate",
  //   bio: "Happiness Benson is a dynamic Programs Associate who bridges the gap between technology and environmental science. She supports the design, execution, and monitoring of ARBR's core programs, ensuring that each initiative is grounded in both innovation and practical impact. Her analytical mindset and passion for green technology make her a vital asset to the programs team.",
  //   expertise: ["Program Coordination", "Technology Integration", "Environmental Science", "Data Analysis"],
  //   email: "okafor@arbr.ng",
  //   image: "/team/seun.jpg"
  // },
  {
    id: "3",
    name: "Shafii Nassibah",
    role: "Administrative Intern",
    bio: "Shafii Nassibah is a dedicated Administrative Intern who provides essential support to the Shamzbridge team. She assists with day-to-day operations, coordinates meetings, and ensures that administrative tasks are completed efficiently. Her organizational skills and attention to detail make her an invaluable member of the administrative team.",
    expertise: ["Administrative Support", "Organization", "Communication", "Time Management"],
    email: "shafii@arbr.ng",
    image: "/team/nasibah.jpeg"
  },
]