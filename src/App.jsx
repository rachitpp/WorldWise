import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";


import HomePage from "./Pages/HomePage";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";
import CityList from "./components/City/CityList";
import CountryList from "./components/Country/CountryList";
import IndividualCity from "./components/City/IndividualCity";

function App() {
  const [cities,setCities] = useState([]);
  const [isloading,setIsLoading] =useState(false);
  useEffect(function(){
    const FetchCities = async()=>{
      try{
      setIsLoading(true);
      const res= await fetch('http://localhost:9000/cities');
      const data= await res.json();
      setCities(data);
      }
      catch{
        alert("There was an error while loading the cities");
      }
      finally{
        setIsLoading(false);
      }
    }
    FetchCities();
  },[]);
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate to='cities' replace/>} />
            <Route path="cities" element={<CityList citylist={cities} loading={isloading}/>} />
            <Route path="cities/:id" element={<IndividualCity/>}/>
            <Route path="country" element={<CountryList CountryList={cities} loading={isloading}/>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path='login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
