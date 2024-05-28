"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Binary, Bot, Code, FlaskConical, MessageSquare, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

const tools =[
    {
     label: "Test-Scenario Generation" ,
     icon: FlaskConical,
     bgColor:"bg-emerald-500/50" ,
     color : "text-emerald-500",
     href:"/Userstory"
    },
    {
        label: "Test Step Generation" ,
        icon: Bot,
        bgColor:"bg-pink-500/50" ,
        color : "text-pink-500",
        href:"/Teststep"
    },
    {
        label: "Selinium code Generation" ,
        icon: Code,
        bgColor:"bg-green-500/50" ,
        color : "text-green-500",
        href:"/Code"
    },{
        label:"Setting",
        icon : Settings,
        href:"/settings",
        bgColor:"bg-violet-500/50" ,
        color:"text-violet-500"
    }
]
const DashboardPage = () => {
    const router = useRouter();
    return (
       <div>
        <div className="mb-8 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
                Jio Test Case Bot🤖🧑‍💻😁 
            </h2>
            <p className="text-muted-foreground font-light text-sm md:text-lg text-center ">
            An interns🧑‍💻 project: a Test Case Bot for seamless test case generation, enhancing efficiency and user-friendliness .
            </p>
        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
            {tools.map((tool) => (
                <Card 
                onClick={() => router.push(tool.href)}
                key={tool.href}
                className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center gap-x-4"> 
                    <div className={cn ("p-2 w-fit rounded-md",tool.bgColor)}>
                        <tool.icon className={cn( "w-8 -h-9 ", tool.icon)} />
                    </div>
                    <div className="font-semibold">
                        {tool.label}
                    </div>
                    </div>
                    <ArrowRight className={cn("w-5 h-5", tool.color)} />
                    </Card>
                ))}
        </div>
       </div>
    );
    };
export default DashboardPage;
