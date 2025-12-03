import React from 'react'
import pic1 from "../assets/infra-cardPic1.png"

const Cards = () => {
  return (
     <div className="flex-none w-[18vw] bg-[#F8F8F8] flex flex-col gap-2 py-4 px-4 rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.15)]">
      <img src={pic1} className="w-[16vw] h-[24vh] bg-white rounded-xl shadow-md" alt="" />
      <div className="flex flex-col gap-2 my-1">
        <p className="popins-bold text-lg">Total Environment</p>
        <p className="text-[#4D4D4D] w-[80%] popins">
          Location - Pursuit of a radical rhapsody white field.
        </p>
      </div>
    </div>
  )
}

export default Cards