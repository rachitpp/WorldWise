// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ButtonNav from "./Navigation/ButtonNav";
import Logo from "./Logo";

function SideBar() {
    return (
        <div className="bg-[rgb(45,52,57)] ">
            <div className="flex flex-col items-center justify-between  text-[rgb(236,236,236)] h-[calc(100vh-3.2rem)]">
            <div className="flex flex-col items-center justify-center py-[30px] px-[50px] text-[10px] font-normal">
             <Logo/>
             <ButtonNav/>
             <Outlet />
             </div>
             <footer className="mb-[35px] text-[12px] ">© Copyright 2024 by WorldWise Inc.</footer>
             </div>
        </div>
    )
}
export default SideBar;
