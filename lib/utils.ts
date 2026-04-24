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
    bio: "Mary Salau is a creative Social Media Manager who transforms brand messages into engaging digital narratives. She crafts data-driven social strategies, grows online communities, and amplifies Shamzbridge's impact through compelling content across platforms. Her ability to merge advocacy with authentic storytelling makes her a key voice in the team's outreach efforts.",
    expertise: ["Social Media Strategy", "Content Creation", "Community Engagement", "Digital Advocacy"],
    email: "marrizzsalau7@gmail.com",
    image: "/team/seun.jpeg",
  },
  {
    id: "2",
    name: "Edet Hillary Effiong",
    role: "Software Engineer",
    bio: "Edet Hillary Effiong is a Software Engineer who builds and maintains the digital infrastructure that powers Shamzbridge's operations. He develops scalable web applications, automates internal workflows, and ensures system reliability. With a problem-solving mindset and a focus on clean code, he enables the team to work smarter and deliver greater impact.",
    expertise: ["Technical Operations", "Process Automation", "System Optimization", "Teamwork"],
    email: "edeteffiong321@gmail.com",
    image: "/team/edet.jpg"
  },
 {
  id: "3",
  name: "Happiness Benson",
  role: "Programs Associate",
  bio: "Happiness Benson is a detail-oriented Programs Associate who supports the design, execution, and monitoring of Shamzbridge’s core initiatives. She ensures that each program runs smoothly by coordinating logistics, integrating technology where needed, and using data to track progress and outcomes. Her analytical mindset and operational focus make her a vital asset to the programs team.",
  expertise: ["Program Coordination", "Technology Integration", "Data Analysis", "Operations Support"],
  email: "bensonhappiness0803@gmail.com",
  image: "/team/happy.png"
},
  {
    id: "4",
    name: "Shafii Nassibah",
    role: "Administrative Intern",
    bio: "Shafii Nassibah is a proactive Administrative Intern who keeps Shamzbridge's daily operations running smoothly. She manages schedules, organizes documentation, and coordinates team communications with precision and a willingness to learn. Her strong organizational skills and positive attitude make her an indispensable support to the administration team.",
    expertise: ["Administrative Support", "Organization", "Communication", "Time Management"],
    email: "nasibahshafii4@gmail.Com",
    image: "/team/nasibah.jpeg"
  },
]