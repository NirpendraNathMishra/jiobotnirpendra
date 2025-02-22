"use client";
import { cn } from "@/lib/utils";
import {Bot, Code, LayoutDashboard, Settings, } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FlaskConical } from "lucide-react";
import {usePathname} from "next/navigation";

const monstseraat = Montserrat({weight:"600",subsets:["latin-ext"]});

const routs =[{
    lable:"Dashboard",
    icon :LayoutDashboard,
    href:"/dashboard",
    color:"text-sky-500"
}, {
    lable:"Test-Scenario Generation",
    icon : FlaskConical,
    href:"/Userstory",
    color:"text-emerald-500"
},{
    lable:"Test Step Generation",
    icon : Bot,
    href:"/Teststep",
    color:"text-pink-500"
},{
    lable:"Selinum code Generation",
    icon : Code,
    href:"/Code",
    color:"text-green-500"
},{
    lable:"Setting",
    icon : Settings,
    href:"/settings",
    color:"text-violet-500"
}
]


const Sidebar =()=>{
    const pathname =usePathname();
    return(
        <div className="space-y-4 py-4 flex-col h-full bg-[#020609] text-white">
            <div className="px-3 py-3 flex-1">
                <Link href={"/dashbord"} className="flex items-center pl-3 mb-14">
                    <div className=" relative w-8 h-8 mr-4">
                        <Image src="/logo.png" layout="fill" alt={"Logo"} />
                    </div>
                    <h1 className={cn ("text-xl font-extrabold", monstseraat.className)}>Jio Test Case Bot</h1>
                </Link>
                <div className="space-y-1">
                    {routs.map(routs=>(
                        <Link href={routs.href} key={routs.href}
                        className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition-shadow", pathname=== routs.href ? "bg-white/10 text-white shadow-lg" : "text-white/50 text-zinc-400",)}
                        >
                        
                        <div className=" flex items-center flex-1">
                            <routs.icon className={cn("w-5 h-5 mr-4",routs.color)} />
                            {routs.lable}
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Sidebar;