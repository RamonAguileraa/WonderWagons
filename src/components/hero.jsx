import React from "react";

const Hero = () => {
    return(
      <section class="h-screen bg-cover bg-center" id="primer">
      <div class=" justify-center ">
      <div class="flex flex-col items-center justify-center h-full"> 
        <div class=" mt-40  text-center">
        <p class="text-2xl mb-4 font-bold text-cyan-500 text-pretty ">Más allá de la realidad | Juega sin límites</p>
        <h1 class="text-7xl mb-4 font-bold text-neutral-50 animate-jello ">WonderWagons</h1>
        <h1 class="text-4xl mb-4 font-thin text-white ">Una experiencia inmersiva</h1>
          
        </div>
    
        <img class="w-50 animate-bounce" src="/Logo.png" alt="" />
    
        <button type="button" class="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...  rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200" data-te-ripple-initdata-te-ripple-color="light" > Download
        </button>
      </div>
        <br />
      
      </div>
       
     
    </section>

  
      
    )
}
export default Hero;