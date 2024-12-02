import PageNav from "../components/Navigation/PageNav";

function Product() {
  return (
    <div className="h-[calc(100vh-5rem)] px-[50px] m-[25px] bg-[rgb(45,52,57)] bg-cover bg-center ">
      <PageNav />
      <div className=" h-[85%] flex flex-row items-center justify-center mx-[195px] my-[40px] gap-[70px]">
        <img src="img-1.jpg" className="h-[415px] w-[415px]"></img>
     <div className="text-[rgb(236,236,236)]">
      <h1 className="text-[45px] mb-[30px]">About WorldWide</h1>
      <p className="text-[16px] leading-[25.6px] font-normal mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est dicta illum vero culpa cum quaerat architecto sapiente eius non soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga perspiciatis?</p>
      <p className="text-[16px] leading-[25.6px] font-normal mb-[20px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloribus libero sunt expedita ratione iusto, magni, id sapiente sequi officiis et.</p>

     </div>
     </div>
    </div>
  );
}

export default Product;
