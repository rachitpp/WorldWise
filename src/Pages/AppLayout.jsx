import SideBar from "../components/SideBar";
import Map from "../components/Map/Map";

function AppLayout() {
  return (
    <div className=" h-[calc(100vh-5rem)] grid grid-cols-[1.35fr_2fr] mx-[24px] my-[24px]">
      <SideBar/>
      
      <Map/>     
    </div>
  );
}

export default AppLayout;
