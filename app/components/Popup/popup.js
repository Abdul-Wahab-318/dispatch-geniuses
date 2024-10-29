"use client"
import './styles.css'
import React, { useEffect, useState } from "react"
import Link from 'next/link'
const Popup = () => {

    const [popup , setPopup] = useState(false)

    useEffect(()=>{
        
        const timer = setTimeout(()=>{
            setPopup(true)
        },5000)

        return () => {
            setPopup(false)
            clearTimeout(timer)
        }

    },[])
    
    const closePopup = () => setPopup(false)


  return (
    <>
        {
            popup ? (

                <div className="popup-wrapper " onClick={closePopup}>
                <div className="popup-inner text-center" onClick={(e) => e.stopPropagation()}>
                    <button className="btn block ms-auto" onClick={closePopup}>x</button>
                    <h2>Thanks for reading our Blog !</h2>
                    <h3 className='mb-16 text-5xl'>Get <strong> 3 FREE Loads</strong> for the the first week with Dispatch Geniuses</h3>
                    <div className="flex justify-content-center">
                        <Link href={'/get-started'} style={{'textDecoration':'none'}}  className="decoration-[none] text-black text-5xl py-6 px-16 border-2 border-blue rounded-lg mb-[50px] inline-flex  ">Catch The Offer</Link>
                    </div>
                    <p>*The offer is available to new drivers only</p>
                </div>
                </div>
            )
            :
            <></>
        }
    </>
  )
}
export default Popup
