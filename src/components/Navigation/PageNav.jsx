import { NavLink } from "react-router-dom";
import Logo from "../Logo";

function PageNav() {
  return (
    <nav className="flex items-center justify-between h-[58.5px]">
     <Logo/>
      <ul className="flex items-center justify-center gap-[40px] cursor-pointer text-[15px] leading-[25px] font-semibold uppercase text-[rgb(236,236,236)] box-border">
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/login" className="bg-[rgb(0,196,106)] box-order py-[7px] px-[25px] rounded-lg text-gray-900 uppercase font-semibold text-[16px]">login</NavLink>
      </ul>
    </nav>
  );
}

export default PageNav;
