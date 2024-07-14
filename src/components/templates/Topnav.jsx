import React from "react";

const Topnav = () => {
  return ( 
          <div className="w-full h-[10vh] relative flex justify-center items-center">
            <i class="text-zinc-400 text-3xl ri-search-line"></i>
           <input 
             className="w-[50%] text-zinc-200 mx-10 p-5 outline-none border-none bg-transparent"
             type="text"
             placeholder="search anything"
        />
          <i class="text-zinc-400 text-3xl ri-close-fill"></i>

           <div className="absolute w-[50%] h-[50vh] bg-zinc-200 top-[90%]">
           
           </div>
        </div>
    );
};

export default Topnav;

