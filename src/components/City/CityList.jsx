import CityListBox from "./CityListBox";
import Spinner from "../Spinner"

/* eslint-disable react/prop-types */
function CityList({citylist,loading}) {

    if(loading) return <Spinner/>;
    if(!citylist.length) return <p className="text-[19px] font-semibold  mx-[46px] my-[20px] text-center leading-[28.6px]">Add you first city by clicking a city on the map</p>
    return (
        <div>{citylist.map((city)=><CityListBox citylist={city} key={city.id}/>)}</div>
    )
}

export default CityList
