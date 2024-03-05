import React from 'react'

export const Buttons = () => {
  return (
    <>
      <div className='p-3 flex gap-2'>
        <div className=" p-3 flex gap-2">
          <title className=''>Botones</title>
          <div className="w-80   gap-3">
            <button className='w-19 h-16 text-white p-1 text-center bg-blue-600 hover:bg-blue-700 rounded'>Button sencillos</button>
            <button className='w-19 h-19 text-white p-1 shadow text-center bg-red-600 hover:bg-red-700 rounded-full'>redondo</button>
            <button className='w-19 h-19 text-white p-1  rounded text-center bg-green-700 hover:bg-green-900 transition-colors   focus:ring-4 focus:ring-slate-900'>nimado</button>
            <button className='w-19 h-19 text-white p-1  rounded text-center bg-yellow-700 hover:bg-yellow-900  hover:rotate-6 hover:duration-200  '>nimado</button>
          </div>
        </div>

        <div className=" max-w-6xl grid grid-cols-2 gap-4 p-4 ">
          <title className=''>Botones</title>

          <div className="w-60 h-60 block px-3 py-4 bg-orange-400">
            padding: px derecho:  py bajo
          </div>
          <div className="w-60 h-60 space-y-3 pb-3 bg-orange-400">
            <h2>espacios space-y-1,2,3</h2>
            <p className="border-t">Lorem, ipsum dolor.</p>
            <p className='pt-2 border-t'>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>

          <div className="w-60 h-60 space-y-3 pb-3 bg-orange-400">
            <h2>sm:hidden, md, lg, xl y 2xl</h2>
            <p className="border-t">Lorem, ipsum dolor.</p>
            <p className='pt-2 border-t'>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <br></br>
        <div className='max-w-6xl grid grid-cols-2 gap-4 p-4'>
          <div className="bg-gradient-to-r w-60 h-60 from-purple-500 via-teal-500 to-yellow-200 z-1">
            linear-gradient
          </div>
          <div className="bg-gradient-to-b w-60 h-60 from-purple-500 via-teal-500 to-yellow-200 z-1">
            linear-gradient
          </div>
          <div className="bg-gradient-to-br w-60 h-60 from-purple-500 via-teal-500 to-yellow-200 z-1">
            linear-gradient
          </div>
          <div className="bg-gradient-to-tr w-60 h-60 from-purple-500 via-teal-500 to-yellow-200 z-1">
            linear-gradient
          </div>
        </div>
      </div></>
  )
}
