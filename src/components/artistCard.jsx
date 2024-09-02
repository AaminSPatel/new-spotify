import React from "react"

export default function Artist (props) {
  return (
    <div className={`sm:w-44 w-56 shadow-sm shadow-green-500 h-16 sm:h-auto transition-all flex sm:flex-col text-white bg-black flex-row items-start justify-start  rounded-md`}>
      <div className="sm:w-full w-24 sm:p-1 transition-all rounded-full ">
        <img src={`../`+ props.image} alt={props.image} className="rounded-full shadow-md shadow-green-800 sm:h-40 sm:w-40 h-16 w-16 mx-auto scale-95 hover:scale-100 transition-transform"/>
      </div>
      <div className="w-full py-3 px-2">
        <p className="font-semibold text-xl">{props.name}</p>
      </div>
    </div>
  )
};