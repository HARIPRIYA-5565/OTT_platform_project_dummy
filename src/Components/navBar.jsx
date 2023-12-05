import React from "react";

export default function NavBar(){
 const handleLogout = () => {
   
    window.location.href = "/";
  };
return(
<div>
<ul className="flex  sm:gap-x-6 gap-x-1 sm:text-base text-xs">
<li className="text-white cursor-pointer hover:bg-blue-500 hover:text-white  rounded-md py-1 px-4 flex items-center ">
Home
</li>
<li className="text-white cursor-pointer hover:bg-blue-500 hover:text-white  rounded-md py-1 px-4 flex items-center">
About 
</li>
<li className="text-white cursor-pointer hover:bg-blue-500 hover:text-white  rounded-md py-1 px-4 flex items-center">
Contact
</li>
<li className="text-white cursor-pointer hover:bg-blue-500 hover:text-white  rounded-md py-1 px-4 flex items-center" onClick={handleLogout}>
Log Out
</li>
<li className="bg-white h-12 w-12 rounded-full sm:block hidden">
</li>
</ul>
</div>
)
}