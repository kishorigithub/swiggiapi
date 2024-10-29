import { useEffect, useState } from "react";


const useOnlinestatus =()=>{

    const[onlineststus,setonlineststus]=useState(true)

    useEffect(()=>{

        window.addEventListener("offline",()=>{
            setonlineststus(false);

        })

        window.addEventListener("online",()=>{
            setonlineststus(true)
        })

    },[])


    return onlineststus;
}

export default useOnlinestatus;