import React from 'react'



export default function Navbar() {
  return (
    <>
      <div className='z-50'>
        <section className="h-16 mb-16">
          <nav className="flex  backdrop-filter backdrop-blur-lg bg-opacity-30 w-[100vw] border-b-[0.5px] border-gray-800 fixed">
            <div className="px-5 py-4 flex w-full">
              <div className="text-5xl font-extrabold font-heading m-auto logo_font">
                Resume Builder by GLP
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  )
}
