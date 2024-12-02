import { Link } from "react-router-dom";
import PageNav from "../components/Navigation/PageNav";

function HomePage() {
  return (

    <div className=" h-[calc(100vh-5rem)] border-3 border-white py-[25px] px-[50px] m-[25px] bg-[linear-gradient(rgba(36,42,46,0.8),rgba(36,42,46,0.8)),url('bg.jpg')] bg-cover bg-center">
    <PageNav />
    <div className="h-[85%] flex flex-col items-center justify-center  gap-y-[25px] mt-[20px] text-[rgb(236,236,236)]">
      <h1 className="text-center text-[45px]">
      You travel the world. <br/>
      WorldWise keeps track of your adventures.
      </h1>
      <p className="text-center text-[19px] mb-[25px]"> A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show  <br/>your friends how you have wandered the world.</p>
      <Link to="app" className=" bg-[rgb(0,196,106)] box-order py-[10px] px-[30px] rounded-lg text-gray-900 uppercase font-semibold text-[16px]">Start tracking now</Link>
    </div>
    </div>

  );
}

export default HomePage;
