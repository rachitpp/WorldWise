import PageNav from "../components/Navigation/PageNav";

function Pricing() {
  return (
    <div className="h-[calc(100vh-5rem)] border-3 border-white py-[25px] px-[50px] m-[25px] bg-[rgb(45,52,57)] bg-cover bg-center ">
    <PageNav />
    <div className=" h-[85%] flex flex-row items-center justify-center mx-[195px] my-[40px] gap-[70px]">
   <div className="text-[rgb(236,236,236)]">
    <h1 className="text-[45px] mb-[-10px]">Simple Pricing.</h1>
    <h1 className="text-[45px] mb-[30px]">Just $9/month.</h1>
    <p className="text-[16px] leading-[22.6px] font-normal mb-[20px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.</p>
    
   </div>
   <img src="img-2.jpg" className="h-[415px] w-[415px]"></img>
   </div>
  </div>
   
  );
}

export default Pricing;
