import { NavLink } from "react-router-dom";

function ButtonNav() {
  return (
    <div className="font-bold text-[12px] uppercase text-[rgb(236,236,236)] mt-[30px] my-[20px] cursor-pointer rounded-[5px]">
      <NavLink to="cities" >Cities </NavLink>
      <NavLink to="country">Countries</NavLink>
    </div>
  );
}

export default ButtonNav;
