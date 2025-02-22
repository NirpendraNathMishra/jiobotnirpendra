import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
// need to implement menu button here using lucide react 

const navbar = () => { 
    return(
        <div className="flex items-center p-4">
            <MobileSidebar/>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    )};

    export default navbar;