"use client";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "Ishan Mishra",
    role: "Data Scientist",
    education: "M. Tech (CSE) - IIT Jodhpur",
    image: "/team/ishan.png",
  },
  {
    name: "Pranta Das",
    role: "Lead Data Scientist",
    education: "M. Tech (CS) - ISI Kolkata",
    image: "/team/pranta.png",
  },
  {
    name: "Yaswanth",
    role: "Data Scientist",
    education: "B. Tech (Electrical Engineering) - IIT Kharagpur",
    image: "/team/yaswanth.png",
  },
  {
    name: "Harshad Shinde",
    role: "Data Scientist",
    education: "M. Tech (Computer Science) - IIT Kharagpur",
    image: "/team/harshad.png",
  },{
    name: "Abhisek Selokar",
    role: "Data Scientist",
    education: "M. Tech (Biomedical Engineering) - IIT Kharagpur",
    image: "/team/abhisekh.png",
  },{
    name: "Himanshu Kale",
    role: "Associate Data Scientist",
    education: "M. Tech (Biomedical Engineering) - IIT Kharagpur",
    image: "/team/himanshu.png",
  },{
    name: "Akash Pal",
    role: "Associate Software Engineer",
    education: "Masters in Computer Application - Academy of Technology",
    image: "/team/akash.png",
  },{
    name: "Irshit Mukherjee",
    role: "Associate Software Engineer",
    education: "B. Tech (CSE) - Academy of Technology",
    image: "/team/irshit.png",
  },{
    name: "Sujan",
    role: "Senior Data Scientist",
    education: "M. Tech (CSE) - ISI Kolkata",
    image: "/team/sujan.png",
  },{
    name: "Soulina Mondal",
    role: "Associate ML Engineer",
    education: "B. Tech (CSE) - Academy of Technology",
    image: "/team/soulina.png",
  },{
    name: "Someshwar Srimany",
    role: "Associate Software Engineer",
    education: "B. Tech (EEE) - Academy of Technology",
    image: "/team/someshwar.png",
  },{
    name: "Yedla Anil Kumar",
    role: "Associate Software Engineer",
    education: "Dual Degree (B.Tech+ M.Tech) in Chemical Engineering- IIT Kharagpur",
    image: "/team/anil.png",
  },{
    name: "Yaswanth",
    role: "Data Scientist",
    education: "B. Tech (CS) - IIT Kanpur",
    image: "/team/yaswanth.png",
  },{
    name: "Yaswanth",
    role: "Data Scientist",
    education: "B. Tech (CS) - IIT Kanpur",
    image: "/team/yaswanth.png",
  },{
    name: "Yaswanth",
    role: "Data Scientist",
    education: "B. Tech (CS) - IIT Kanpur",
    image: "/team/yaswanth.png",
  },{
    name: "Yaswanth",
    role: "Data Scientist",
    education: "B. Tech (CS) - IIT Kanpur",
    image: "/team/yaswanth.png",
  },{
    name: "Yaswanth",
    role: "Data Scientist",
    education: "B. Tech (CS) - IIT Kanpur",
    image: "/team/yaswanth.png",
  },{
    name: "Yaswanth",
    role: "Data Scientist",
    education: "B. Tech (CS) - IIT Kanpur",
    image: "/team/yaswanth.png",
  },
  
];

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          name={member.name}
          role={member.role}
          education={member.education}
          image={member.image}
        />
      ))}
    </div>
  );
}
