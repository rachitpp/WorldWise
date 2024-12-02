import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function CityListBox({citylist}) {
    const formattedDate = new Date(citylist.date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    return (
        <NavLink  to= {`${citylist.id}?lat=${citylist.position.lat}&lon=${citylist.position.lng}`} className="grid grid-cols-[.5fr,1.5fr] px-[20px] py-[10px] items-center justify-center gap-[10rem]  mx-[.1rem] my-[1rem] cursor-pointer bg-gray-700 rounded-lg">
            <div className="flex flex-row items-center justify-center gap-2 text-center">
            <span className="text-[26px]">{citylist.emoji}</span>
            <p className="text-[17px]">{citylist.cityName}</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-2 text-center">
            <p className="text-[15px]">({formattedDate})</p>
            <button className="bg-[rgb(45,52,57)] text-[white] px-1.5 py-[3px] rounded-xl">&times;</button>
            </div>
        </NavLink>
    )
}

export default CityListBox;
