/* eslint-disable react/prop-types */
import CountryItem from "./CountryItem";
import Spinner from "../Spinner"

function CountryList( {CountryList,loading }) {
    if(loading) return <Spinner/>
    if(!CountryList.length) return <p className="text-[19px] font-semibold  mx-[46px] my-[20px] text-center leading-[28.6px]">Add your first city by clicking on a city on the map</p>
    const newCountryList=[];
    const sortedCountryList = [...CountryList].sort((a, b) => 
        a.country.localeCompare(b.country)
      );
    for(let i=0;i<sortedCountryList.length;i++){
        if(i==0 || sortedCountryList[i].country!==sortedCountryList[i-1].country){
            newCountryList.push(sortedCountryList[i]);
        }
    }
    return (
        <div>
            {newCountryList.map((country)=><CountryItem country={country} key={country.id}/>)}
        </div>
    )
}

export default CountryList
