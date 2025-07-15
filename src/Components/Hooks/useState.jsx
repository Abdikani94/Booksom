import { useState, useEffect} from "react";

function Count(){
    const[count, Setcount] =useState(0);
        if(count<0){ Setcount(count-1) }
 
   
        useEffect(()=>{
            console.log("Clicked"+count)

        },[count])
         return(
       
        <div className=" flex flex-col justify-center h-screen bg-gradient-to-b
         from-zinc-200 to-zinc-300 text-3xl text-center">
        <div className=" text-black  shadow-lg">


        <h1 className="text-2xl font-semibold mb-4">Count:{count}</h1>



        <button className="mb-2 px-6 py-2 bg-blue-600 hover:bg-gray-300 rounded text-lg" onClick={()=>Setcount(count+1)}>Add</button>


        <button className="px-6 py-2 bg-green-900
         hover:bg-green-300 rounded text-lg" onClick={()=> Setcount(count-1)}>Sub</button>
        </div>
        </div>
        
    )
}
export default Count